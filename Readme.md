# Taxon Expression Language (TEL)

This repository contains formal definition of grammar for TEL written in [ANTLR v4](https://github.com/antlr/antlr4).
It can generate following components in both python and JavaScript to handle parsing string expressions:

- *lexer* - splits string expression into tokens
- *parser* - connects tokens into parse tree (similar to AST)
- *visitor* - class which helps to traverse generated parse tree

## How to use it

### `make image-java`

It builds local docker image to run ANTLR commands. You need to run this command before you may run ANTLR-related make commands.

### `make image-python`

It builds local docker image to run python tests. This image is used to run tests on the current grammar.

### `make build-code-python`

It generates all components in python language

### `make test`

Runs tests on the current version of grammar.