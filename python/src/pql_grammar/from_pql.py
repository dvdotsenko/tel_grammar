# fmt: off

from antlr4 import CommonTokenStream, InputStream, ParserRuleContext
from antlr4 import ParserRuleContext
from decimal import Decimal
from typing import Optional, Tuple, List, Type, Any

from .antlr.PqlLexer import PqlLexer
from .antlr.PqlParser import PqlParser
from .antlr.PqlParserVisitor import PqlParserVisitor as _PqlParserVisitor

from . import model as ast


class ParseError(ValueError):
    pass


def full_text(ctx: ParserRuleContext) -> str:
    # extracts full text from a tree of nodes,
    # including white space.
    if ctx:
        if isinstance(ctx, ParserRuleContext):
            try:
                start = ctx.start.start
            except AttributeError:
                start = None
            try:
                stop = ctx.stop.stop
            except AttributeError:
                stop = None

            if not(start is None) and stop is None:
                stop = start

            if start is None:
                return str(ctx)

            return ctx.start.getInputStream().getText(start, stop)
        else:
            try:
                # some primitive context object
                return ctx.text
            except AttributeError:
                # Terminal Node of some sort
                return str(ctx)
    else:
        return None



def unquote(s: str):
    # Quoted schema, table, column names come in Postgres style - double-quotes
    # in-string double-quotes are escaped by doubling the double-quotes ANSI SQL style.
    # https://docs.oracle.com/goldengate/1212/gg-winux/GWURF/gg_parameters183.htm#GWURF728
    # Example:
    #   '"table name ""with quoted portion"""' becomes 'table name "with quoted portion"'
    if not s:
        return s
    wrapper = (s[0], s[-1])
    if wrapper == ('"', '"') or wrapper == ("'", "'"):
        s = s[1:-1]

    # TODO: decide which one we want to support
    # TEL style escapes
    return s.replace('\\"', '"').replace("\\'", "'")
    # # SQL style escapes
    # return s.replace('""', '"').replace("''", "'")


class PqlAntlrToAstParser:

    @classmethod
    def unwrap_expr_parens(cls, e: PqlParser.ExprContext) -> PqlParser.ExprContext:
        # it's allowed to wrap expressions into superflous amounts of parens
        #   (((column > 5)))
        # These come across as triple-nested [TerminalNodeImpl('('), expr, TerminalNodeImpl(')')]
        # Here we check for len == 3 and if last and first Terminals are (), return middle element - expression,
        # Run this recursively.
        # inner attribute is enabled only on cleanly-paren-wrapped expressions
        if e.inner:
            return cls.unwrap_expr_parens(e.inner)
        else:
            return e

    @classmethod
    def parse_taxon(cls, e: PqlParser.TaxonContext) -> ast.Taxon:
        return ast.Taxon(
            full_text(e.slug),
            full_text(e.namespace),
            bool(e.is_optional),
            full_text(e.tag)
        )

    @classmethod
    def parse_function_argument_pair(cls, e: PqlParser.ExprContext) -> Tuple[Optional[str],Any]:
        e = cls.unwrap_expr_parens(e)
        o = full_text(e.operator)
        if o == '=':
            arg_name = full_text(e.left)
            arg_value = cls.parse_expr(e.right)
        else:
            arg_name = None
            arg_value = cls.parse_expr(e)
        return arg_name, arg_value

    @classmethod
    def parse_function(cls, e: PqlParser.FnContext) -> ast.Function:
        return ast.Function(
            full_text(e.function_name),
            tuple([
                cls.parse_function_argument_pair(expr)
                for expr in e.arguments.expr()
            ]) if e.arguments else None
        )

    @classmethod
    def parse_literal(cls, e:PqlParser.LiteralValueContext):
        return ast.Literal(
            cls.parse_literal_value(e),
            full_text(e)
        )

    @staticmethod
    def parse_literal_value(e:PqlParser.LiteralValueContext):
        is_number = bool(e.NUMERIC_LITERAL())
        is_string = bool(e.DOUBLE_QUOTED_STRING()) or bool(e.SINGLE_QUOTED_STRING())
        is_null = bool(e.K_NULL())
        is_bool = bool(e.K_TRUE()) or bool(e.K_FALSE())

        if is_null:
            return None

        if is_bool:
            return bool(e.K_TRUE())

        try:
            v = full_text(e)
        except IndexError:
            raise ParseError(f"Could not extract literal value node from '{e.getText()}'.")

        if is_number:
            # TODO: contemplate decimal type instead
            try:
                return int(v)
            except ValueError:
                try:
                    return float(v)
                except Exception:
                    raise ParseError(f"Could not convert SQL number {v} to native number representation.")

        if is_string:
            return unquote(v)

        return v

    @classmethod
    def parse_expr(cls, ctx: PqlParser.ExprContext) -> ast.Node :
        ctx = cls.unwrap_expr_parens(ctx)

        v = ctx.literalValue()
        if v:
            return cls.parse_literal(v)

        v = ctx.unary_operator
        if v:
            operator = full_text(v).upper()
            right = cls.parse_expr(ctx.right)

            # some unary have no meaning
            # and packing them into AST just creates noise for consuming
            if operator == '+':
                # skip the BS. ignore the plus
                # We can do this because we don't support `++a` expressions
                return right

            if (
                operator == '-' and
                isinstance(right, ast.Literal) and
                isinstance(right.value, (int, float, Decimal))
            ):
                # right.value will always be positive digit.
                # Our syntax parser guarantees that.
                return ast.Literal(
                    right.value * -1,
                    full_text(ctx)  # unary minus with underlying literal value as one string
                )

            if (
                operator == 'NOT' and
                isinstance(right, ast.Literal)
            ):
                # unlikely to ever happen, but still
                v = not right.value
                return ast.Literal(
                    v,
                    'true' if v else 'false'
                )


            # else:
            #     # cannot avoid packaging unary "-" separate.
            #     # it's in front of a non-literal expression that need to be negated manually later
            # TODO: contemplate converting this from unary `-expr` into regular `-1 * expr`
            #       to escape Unary minus completely.

            # We dealt with '+'. We half-dealt with '-'
            # What's left is 'NOT'
            # These leftovers we pass through as unary.
            return ast.Expr(
                operator,
                (right,)
            )

        v: Optional[str] = full_text(ctx.operator)
        if v:
            # this is super generic expression of type
            #  left OP right
            # with a lot of options for OP values.
            # The only exception is IN operator where there no `right` but `right_list`

            # we standardize operator keywords to upper case
            # this is to establish a standard expectation for consuming code
            # 'and' -> 'AND'
            op = v.upper()

            # Let's handle IN-like cases first and fall through left-OP-right for rest.
            # IN-like cases are characterized by non-null `.right_list` (instead of .right)
            if ctx.right_list:
                right = [
                    cls.parse_expr(expr)
                    for expr in ctx.right_list.expr()
                ]
            else:
                right = [cls.parse_expr(ctx.right)]

            is_negated = ctx.is_negated

            # Normally AST parsers should not be in business of
            # rewriting the subject matter.
            # However, there is one ugly nuance of SQL-like language
            # that does not warrant "rewrite" but a "more standard way to express"
            #    a BETWEEN b AND c
            #    a NOT BETWEEN b AND c
            # It's an ugly wart of SQL that requires very special-cased handling
            # in all consumer code if it stays as BETWEEN.
            # TO save the children, and humanity, will express BETWEEN as explicit inequality
            #    a BETWEEN b AND c   -->   (a >= b) AND (a <= c)
            #    a NOT BETWEEN b AND c  -->   (a < b) OR (a > c)
            # Dont think of it as "transform".
            # Think of it as the only sane way to express what BETWEEN means.

            if op == 'BETWEEN':
                left = cls.parse_expr(ctx.left)

                # this one is an Expr('AND', [v1, v2]))
                between_and = cls.parse_expr(ctx.right)

                if (
                    isinstance(between_and, ast.Expr) and
                    between_and.operator == 'AND' and
                    len(between_and.args) == 2
                ):
                    pass
                else:
                    raise ParseError(
                        f"Contents of BETWEEN's AND expression - {full_text(ctx.right)} - are not valid. "
                        "Must be of form `valueA AND valueB`."
                    )

                if is_negated:
                    #    a NOT BETWEEN b AND c  -->   (a < b) OR (a > c)
                    ex = ast.Expr(
                        'OR',
                        (
                            ast.Expr(
                                '<',
                                (
                                    left,  # TODO: think about copy
                                    between_and.args[0]
                                )
                            ),
                            ast.Expr(
                                '>',
                                (
                                    left,  # TODO: think about copy
                                    between_and.args[1]
                                )
                            ),
                        )
                    )
                else:
                    # a BETWEEN b AND c   -->   (a >= b) AND (a <= c)
                    ex = ast.Expr(
                        'AND',
                        (
                            ast.Expr(
                                '>=',
                                (
                                    left,  # TODO: think about copy
                                    between_and.args[0]
                                )
                            ),
                            ast.Expr(
                                '<=',
                                (
                                    left,  # TODO: think about copy
                                    between_and.args[1]
                                )
                            ),
                        )
                    )
                # we internalized NOT into the expression.
                # can return without further NOT processing
                return ex

            ex = ast.Expr(
                op,
                tuple([cls.parse_expr(ctx.left)] + right)
            )

            # lastly, some statements allow NOT before operator
            # (if it's before expression, it's captured by Unary operator)
            # In this case as opposed to creating of a separate NOT-variant operator
            # we just wrap the non-NOT version of the statement into
            # a unary NOT
            #   c not in (1,2,3)
            # becomes
            #   not (c in (1,2,3))

            if ctx.is_negated:
                return ast.Expr(
                    'NOT',
                    (ex,)
                )
            else:
                return ex

        v: PqlParser.TaxonContext = ctx.taxon()
        if v:
            return cls.parse_taxon(v)

        v: PqlParser.FnContext = ctx.fn()
        if v:
            return cls.parse_function(v)

        raise ParseError(f'Where expression "{full_text(ctx)}" is not supported yet.')


class PqlVisitor(_PqlParserVisitor):

    def visitErrorNode(self, node):
        wrong_symbol = node.symbol.text
        line = node.symbol.line
        column = node.symbol.column + 1
        details = f'Unexpected symbol "{wrong_symbol}" on line {line}, position {column}'
        raise ParseError(details)

    def visit_from_tel_string(self, tel: str):
        inp_stream = InputStream(tel)
        lexer = PqlLexer(inp_stream)
        stream = CommonTokenStream(lexer)
        parser = PqlParser(stream)
        tree = parser.parseTel()
        self.visit(tree)


def from_tel(tel: str, cls:Type[PqlVisitor] = PqlVisitor) -> ast.Node:

    statements = []

    class V(cls):
        def visitExpr(self, ctx:PqlParser.ExprContext):
            statements.append(
                PqlAntlrToAstParser.parse_expr(ctx)
            )

    V().visit_from_tel_string(tel)

    return statements[0] if statements else None
