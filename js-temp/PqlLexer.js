// Generated from grammar/PqlLexer.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00025\u01d9\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0004H\tH\u0004I\tI\u0004J\tJ\u0004K\tK\u0004L\tL\u0004",
    "M\tM\u0004N\tN\u0004O\tO\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003#\u0003#",
    "\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003",
    "(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003*\u0006*\u011f\n*\r",
    "*\u000e*\u0120\u0003*\u0003*\u0007*\u0125\n*\f*\u000e*\u0128\u000b*",
    "\u0005*\u012a\n*\u0003*\u0003*\u0005*\u012e\n*\u0003*\u0006*\u0131\n",
    "*\r*\u000e*\u0132\u0005*\u0135\n*\u0003*\u0003*\u0006*\u0139\n*\r*\u000e",
    "*\u013a\u0003*\u0003*\u0005*\u013f\n*\u0003*\u0006*\u0142\n*\r*\u000e",
    "*\u0143\u0005*\u0146\n*\u0005*\u0148\n*\u0003+\u0003+\u0003,\u0003,",
    "\u0003,\u0003,\u0007,\u0150\n,\f,\u000e,\u0153\u000b,\u0003,\u0003,",
    "\u0003-\u0003-\u0003-\u0003-\u0007-\u015b\n-\f-\u000e-\u015e\u000b-",
    "\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0007/\u0168",
    "\n/\f/\u000e/\u016b\u000b/\u0003/\u0003/\u00030\u00030\u00030\u0003",
    "0\u00070\u0173\n0\f0\u000e0\u0176\u000b0\u00030\u00030\u00031\u0003",
    "1\u00031\u00031\u00031\u00051\u017f\n1\u00031\u00071\u0182\n1\f1\u000e",
    "1\u0185\u000b1\u00031\u00031\u00032\u00032\u00032\u00032\u00072\u018d",
    "\n2\f2\u000e2\u0190\u000b2\u00032\u00032\u00032\u00052\u0195\n2\u0003",
    "2\u00032\u00033\u00033\u00033\u00033\u00034\u00034\u00074\u019f\n4\f",
    "4\u000e4\u01a2\u000b4\u00035\u00035\u00036\u00036\u00037\u00037\u0003",
    "8\u00038\u00039\u00039\u0003:\u0003:\u0003;\u0003;\u0003<\u0003<\u0003",
    "=\u0003=\u0003>\u0003>\u0003?\u0003?\u0003@\u0003@\u0003A\u0003A\u0003",
    "B\u0003B\u0003C\u0003C\u0003D\u0003D\u0003E\u0003E\u0003F\u0003F\u0003",
    "G\u0003G\u0003H\u0003H\u0003I\u0003I\u0003J\u0003J\u0003K\u0003K\u0003",
    "L\u0003L\u0003M\u0003M\u0003N\u0003N\u0003O\u0003O\u0003\u018e\u0002",
    "P\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018",
    "/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K\'",
    "M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i\u0002k\u0002m\u0002o\u0002q\u0002s\u0002",
    "u\u0002w\u0002y\u0002{\u0002}\u0002\u007f\u0002\u0081\u0002\u0083\u0002",
    "\u0085\u0002\u0087\u0002\u0089\u0002\u008b\u0002\u008d\u0002\u008f\u0002",
    "\u0091\u0002\u0093\u0002\u0095\u0002\u0097\u0002\u0099\u0002\u009b\u0002",
    "\u009d\u0002\u0003\u0002$\u0004\u0002--//\u0003\u0002$$\u0003\u0002",
    "))\u0004\u0002\f\f\u000f\u000f\u0005\u0002\u000b\r\u000f\u000f\"\"\u0005",
    "\u0002C\\aac|\u0006\u00022;C\\aac|\u0003\u00022;\u0004\u0002CCcc\u0004",
    "\u0002DDdd\u0004\u0002EEee\u0004\u0002FFff\u0004\u0002GGgg\u0004\u0002",
    "HHhh\u0004\u0002IIii\u0004\u0002JJjj\u0004\u0002KKkk\u0004\u0002LLl",
    "l\u0004\u0002MMmm\u0004\u0002NNnn\u0004\u0002OOoo\u0004\u0002PPpp\u0004",
    "\u0002QQqq\u0004\u0002RRrr\u0004\u0002SSss\u0004\u0002TTtt\u0004\u0002",
    "UUuu\u0004\u0002VVvv\u0004\u0002WWww\u0004\u0002XXxx\u0004\u0002YYy",
    "y\u0004\u0002ZZzz\u0004\u0002[[{{\u0004\u0002\\\\||\u0002\u01d6\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002",
    "\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002",
    "#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003",
    "\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002",
    "\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002",
    "\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002",
    "\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u0002",
    "9\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003",
    "\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002",
    "\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002",
    "\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002",
    "\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002",
    "O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003",
    "\u0002\u0002\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002",
    "\u0002\u0002\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002",
    "\u0002\u0002]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002",
    "\u0002a\u0003\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0002",
    "e\u0003\u0002\u0002\u0002\u0002g\u0003\u0002\u0002\u0002\u0003\u009f",
    "\u0003\u0002\u0002\u0002\u0005\u00a2\u0003\u0002\u0002\u0002\u0007\u00a5",
    "\u0003\u0002\u0002\u0002\t\u00a8\u0003\u0002\u0002\u0002\u000b\u00ab",
    "\u0003\u0002\u0002\u0002\r\u00ae\u0003\u0002\u0002\u0002\u000f\u00b1",
    "\u0003\u0002\u0002\u0002\u0011\u00b4\u0003\u0002\u0002\u0002\u0013\u00b7",
    "\u0003\u0002\u0002\u0002\u0015\u00ba\u0003\u0002\u0002\u0002\u0017\u00bc",
    "\u0003\u0002\u0002\u0002\u0019\u00be\u0003\u0002\u0002\u0002\u001b\u00c0",
    "\u0003\u0002\u0002\u0002\u001d\u00c2\u0003\u0002\u0002\u0002\u001f\u00c4",
    "\u0003\u0002\u0002\u0002!\u00c6\u0003\u0002\u0002\u0002#\u00c8\u0003",
    "\u0002\u0002\u0002%\u00ca\u0003\u0002\u0002\u0002\'\u00cc\u0003\u0002",
    "\u0002\u0002)\u00ce\u0003\u0002\u0002\u0002+\u00d0\u0003\u0002\u0002",
    "\u0002-\u00d2\u0003\u0002\u0002\u0002/\u00d4\u0003\u0002\u0002\u0002",
    "1\u00d6\u0003\u0002\u0002\u00023\u00d8\u0003\u0002\u0002\u00025\u00da",
    "\u0003\u0002\u0002\u00027\u00dc\u0003\u0002\u0002\u00029\u00de\u0003",
    "\u0002\u0002\u0002;\u00e0\u0003\u0002\u0002\u0002=\u00e4\u0003\u0002",
    "\u0002\u0002?\u00ec\u0003\u0002\u0002\u0002A\u00f2\u0003\u0002\u0002",
    "\u0002C\u00f5\u0003\u0002\u0002\u0002E\u00f8\u0003\u0002\u0002\u0002",
    "G\u00ff\u0003\u0002\u0002\u0002I\u0104\u0003\u0002\u0002\u0002K\u0108",
    "\u0003\u0002\u0002\u0002M\u0110\u0003\u0002\u0002\u0002O\u0115\u0003",
    "\u0002\u0002\u0002Q\u0118\u0003\u0002\u0002\u0002S\u0147\u0003\u0002",
    "\u0002\u0002U\u0149\u0003\u0002\u0002\u0002W\u014b\u0003\u0002\u0002",
    "\u0002Y\u0156\u0003\u0002\u0002\u0002[\u0161\u0003\u0002\u0002\u0002",
    "]\u0163\u0003\u0002\u0002\u0002_\u016e\u0003\u0002\u0002\u0002a\u017e",
    "\u0003\u0002\u0002\u0002c\u0188\u0003\u0002\u0002\u0002e\u0198\u0003",
    "\u0002\u0002\u0002g\u019c\u0003\u0002\u0002\u0002i\u01a3\u0003\u0002",
    "\u0002\u0002k\u01a5\u0003\u0002\u0002\u0002m\u01a7\u0003\u0002\u0002",
    "\u0002o\u01a9\u0003\u0002\u0002\u0002q\u01ab\u0003\u0002\u0002\u0002",
    "s\u01ad\u0003\u0002\u0002\u0002u\u01af\u0003\u0002\u0002\u0002w\u01b1",
    "\u0003\u0002\u0002\u0002y\u01b3\u0003\u0002\u0002\u0002{\u01b5\u0003",
    "\u0002\u0002\u0002}\u01b7\u0003\u0002\u0002\u0002\u007f\u01b9\u0003",
    "\u0002\u0002\u0002\u0081\u01bb\u0003\u0002\u0002\u0002\u0083\u01bd\u0003",
    "\u0002\u0002\u0002\u0085\u01bf\u0003\u0002\u0002\u0002\u0087\u01c1\u0003",
    "\u0002\u0002\u0002\u0089\u01c3\u0003\u0002\u0002\u0002\u008b\u01c5\u0003",
    "\u0002\u0002\u0002\u008d\u01c7\u0003\u0002\u0002\u0002\u008f\u01c9\u0003",
    "\u0002\u0002\u0002\u0091\u01cb\u0003\u0002\u0002\u0002\u0093\u01cd\u0003",
    "\u0002\u0002\u0002\u0095\u01cf\u0003\u0002\u0002\u0002\u0097\u01d1\u0003",
    "\u0002\u0002\u0002\u0099\u01d3\u0003\u0002\u0002\u0002\u009b\u01d5\u0003",
    "\u0002\u0002\u0002\u009d\u01d7\u0003\u0002\u0002\u0002\u009f\u00a0\u0007",
    "(\u0002\u0002\u00a0\u00a1\u0007(\u0002\u0002\u00a1\u0004\u0003\u0002",
    "\u0002\u0002\u00a2\u00a3\u0007?\u0002\u0002\u00a3\u00a4\u0007?\u0002",
    "\u0002\u00a4\u0006\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007@\u0002",
    "\u0002\u00a6\u00a7\u0007?\u0002\u0002\u00a7\b\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0007>\u0002\u0002\u00a9\u00aa\u0007?\u0002\u0002\u00aa",
    "\n\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007#\u0002\u0002\u00ac\u00ad",
    "\u0007?\u0002\u0002\u00ad\f\u0003\u0002\u0002\u0002\u00ae\u00af\u0007",
    ">\u0002\u0002\u00af\u00b0\u0007@\u0002\u0002\u00b0\u000e\u0003\u0002",
    "\u0002\u0002\u00b1\u00b2\u0007~\u0002\u0002\u00b2\u00b3\u0007~\u0002",
    "\u0002\u00b3\u0010\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007>\u0002",
    "\u0002\u00b5\u00b6\u0007>\u0002\u0002\u00b6\u0012\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0007@\u0002\u0002\u00b8\u00b9\u0007@\u0002\u0002",
    "\u00b9\u0014\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007(\u0002\u0002",
    "\u00bb\u0016\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007?\u0002\u0002",
    "\u00bd\u0018\u0003\u0002\u0002\u0002\u00be\u00bf\u0007+\u0002\u0002",
    "\u00bf\u001a\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007<\u0002\u0002",
    "\u00c1\u001c\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007.\u0002\u0002",
    "\u00c3\u001e\u0003\u0002\u0002\u0002\u00c4\u00c5\u00070\u0002\u0002",
    "\u00c5 \u0003\u0002\u0002\u0002\u00c6\u00c7\u00071\u0002\u0002\u00c7",
    "\"\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007@\u0002\u0002\u00c9$\u0003",
    "\u0002\u0002\u0002\u00ca\u00cb\u0007>\u0002\u0002\u00cb&\u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\u0007/\u0002\u0002\u00cd(\u0003\u0002\u0002",
    "\u0002\u00ce\u00cf\u0007\'\u0002\u0002\u00cf*\u0003\u0002\u0002\u0002",
    "\u00d0\u00d1\u0007*\u0002\u0002\u00d1,\u0003\u0002\u0002\u0002\u00d2",
    "\u00d3\u0007~\u0002\u0002\u00d3.\u0003\u0002\u0002\u0002\u00d4\u00d5",
    "\u0007-\u0002\u0002\u00d50\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007",
    "A\u0002\u0002\u00d72\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007=\u0002",
    "\u0002\u00d94\u0003\u0002\u0002\u0002\u00da\u00db\u0007,\u0002\u0002",
    "\u00db6\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007\u0080\u0002\u0002",
    "\u00dd8\u0003\u0002\u0002\u0002\u00de\u00df\u0007a\u0002\u0002\u00df",
    ":\u0003\u0002\u0002\u0002\u00e0\u00e1\u0005k6\u0002\u00e1\u00e2\u0005",
    "\u0085C\u0002\u00e2\u00e3\u0005q9\u0002\u00e3<\u0003\u0002\u0002\u0002",
    "\u00e4\u00e5\u0005m7\u0002\u00e5\u00e6\u0005s:\u0002\u00e6\u00e7\u0005",
    "\u0091I\u0002\u00e7\u00e8\u0005\u0097L\u0002\u00e8\u00e9\u0005s:\u0002",
    "\u00e9\u00ea\u0005s:\u0002\u00ea\u00eb\u0005\u0085C\u0002\u00eb>\u0003",
    "\u0002\u0002\u0002\u00ec\u00ed\u0005u;\u0002\u00ed\u00ee\u0005k6\u0002",
    "\u00ee\u00ef\u0005\u0081A\u0002\u00ef\u00f0\u0005\u008fH\u0002\u00f0",
    "\u00f1\u0005s:\u0002\u00f1@\u0003\u0002\u0002\u0002\u00f2\u00f3\u0005",
    "{>\u0002\u00f3\u00f4\u0005\u0085C\u0002\u00f4B\u0003\u0002\u0002\u0002",
    "\u00f5\u00f6\u0005{>\u0002\u00f6\u00f7\u0005\u008fH\u0002\u00f7D\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\u0005{>\u0002\u00f9\u00fa\u0005\u008f",
    "H\u0002\u00fa\u00fb\u0005\u0085C\u0002\u00fb\u00fc\u0005\u0093J\u0002",
    "\u00fc\u00fd\u0005\u0081A\u0002\u00fd\u00fe\u0005\u0081A\u0002\u00fe",
    "F\u0003\u0002\u0002\u0002\u00ff\u0100\u0005\u0081A\u0002\u0100\u0101",
    "\u0005{>\u0002\u0101\u0102\u0005\u007f@\u0002\u0102\u0103\u0005s:\u0002",
    "\u0103H\u0003\u0002\u0002\u0002\u0104\u0105\u0005\u0085C\u0002\u0105",
    "\u0106\u0005\u0087D\u0002\u0106\u0107\u0005\u0091I\u0002\u0107J\u0003",
    "\u0002\u0002\u0002\u0108\u0109\u0005\u0085C\u0002\u0109\u010a\u0005",
    "\u0087D\u0002\u010a\u010b\u0005\u0091I\u0002\u010b\u010c\u0005\u0085",
    "C\u0002\u010c\u010d\u0005\u0093J\u0002\u010d\u010e\u0005\u0081A\u0002",
    "\u010e\u010f\u0005\u0081A\u0002\u010fL\u0003\u0002\u0002\u0002\u0110",
    "\u0111\u0005\u0085C\u0002\u0111\u0112\u0005\u0093J\u0002\u0112\u0113",
    "\u0005\u0081A\u0002\u0113\u0114\u0005\u0081A\u0002\u0114N\u0003\u0002",
    "\u0002\u0002\u0115\u0116\u0005\u0087D\u0002\u0116\u0117\u0005\u008d",
    "G\u0002\u0117P\u0003\u0002\u0002\u0002\u0118\u0119\u0005\u0091I\u0002",
    "\u0119\u011a\u0005\u008dG\u0002\u011a\u011b\u0005\u0093J\u0002\u011b",
    "\u011c\u0005s:\u0002\u011cR\u0003\u0002\u0002\u0002\u011d\u011f\u0005",
    "i5\u0002\u011e\u011d\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002",
    "\u0002\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002",
    "\u0002\u0002\u0121\u0129\u0003\u0002\u0002\u0002\u0122\u0126\u00070",
    "\u0002\u0002\u0123\u0125\u0005i5\u0002\u0124\u0123\u0003\u0002\u0002",
    "\u0002\u0125\u0128\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002",
    "\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u012a\u0003\u0002\u0002",
    "\u0002\u0128\u0126\u0003\u0002\u0002\u0002\u0129\u0122\u0003\u0002\u0002",
    "\u0002\u0129\u012a\u0003\u0002\u0002\u0002\u012a\u0134\u0003\u0002\u0002",
    "\u0002\u012b\u012d\u0005s:\u0002\u012c\u012e\t\u0002\u0002\u0002\u012d",
    "\u012c\u0003\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e",
    "\u0130\u0003\u0002\u0002\u0002\u012f\u0131\u0005i5\u0002\u0130\u012f",
    "\u0003\u0002\u0002\u0002\u0131\u0132\u0003\u0002\u0002\u0002\u0132\u0130",
    "\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133\u0135",
    "\u0003\u0002\u0002\u0002\u0134\u012b\u0003\u0002\u0002\u0002\u0134\u0135",
    "\u0003\u0002\u0002\u0002\u0135\u0148\u0003\u0002\u0002\u0002\u0136\u0138",
    "\u00070\u0002\u0002\u0137\u0139\u0005i5\u0002\u0138\u0137\u0003\u0002",
    "\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a\u0138\u0003\u0002",
    "\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002\u013b\u0145\u0003\u0002",
    "\u0002\u0002\u013c\u013e\u0005s:\u0002\u013d\u013f\t\u0002\u0002\u0002",
    "\u013e\u013d\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002",
    "\u013f\u0141\u0003\u0002\u0002\u0002\u0140\u0142\u0005i5\u0002\u0141",
    "\u0140\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002\u0143",
    "\u0141\u0003\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002\u0002\u0144",
    "\u0146\u0003\u0002\u0002\u0002\u0145\u013c\u0003\u0002\u0002\u0002\u0145",
    "\u0146\u0003\u0002\u0002\u0002\u0146\u0148\u0003\u0002\u0002\u0002\u0147",
    "\u011e\u0003\u0002\u0002\u0002\u0147\u0136\u0003\u0002\u0002\u0002\u0148",
    "T\u0003\u0002\u0002\u0002\u0149\u014a\u0005W,\u0002\u014aV\u0003\u0002",
    "\u0002\u0002\u014b\u0151\u0007$\u0002\u0002\u014c\u014d\u0007^\u0002",
    "\u0002\u014d\u0150\u0007$\u0002\u0002\u014e\u0150\n\u0003\u0002\u0002",
    "\u014f\u014c\u0003\u0002\u0002\u0002\u014f\u014e\u0003\u0002\u0002\u0002",
    "\u0150\u0153\u0003\u0002\u0002\u0002\u0151\u014f\u0003\u0002\u0002\u0002",
    "\u0151\u0152\u0003\u0002\u0002\u0002\u0152\u0154\u0003\u0002\u0002\u0002",
    "\u0153\u0151\u0003\u0002\u0002\u0002\u0154\u0155\u0007$\u0002\u0002",
    "\u0155X\u0003\u0002\u0002\u0002\u0156\u015c\u0007$\u0002\u0002\u0157",
    "\u0158\u0007$\u0002\u0002\u0158\u015b\u0007$\u0002\u0002\u0159\u015b",
    "\n\u0003\u0002\u0002\u015a\u0157\u0003\u0002\u0002\u0002\u015a\u0159",
    "\u0003\u0002\u0002\u0002\u015b\u015e\u0003\u0002\u0002\u0002\u015c\u015a",
    "\u0003\u0002\u0002\u0002\u015c\u015d\u0003\u0002\u0002\u0002\u015d\u015f",
    "\u0003\u0002\u0002\u0002\u015e\u015c\u0003\u0002\u0002\u0002\u015f\u0160",
    "\u0007$\u0002\u0002\u0160Z\u0003\u0002\u0002\u0002\u0161\u0162\u0005",
    "]/\u0002\u0162\\\u0003\u0002\u0002\u0002\u0163\u0169\u0007)\u0002\u0002",
    "\u0164\u0165\u0007^\u0002\u0002\u0165\u0168\u0007)\u0002\u0002\u0166",
    "\u0168\n\u0004\u0002\u0002\u0167\u0164\u0003\u0002\u0002\u0002\u0167",
    "\u0166\u0003\u0002\u0002\u0002\u0168\u016b\u0003\u0002\u0002\u0002\u0169",
    "\u0167\u0003\u0002\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a",
    "\u016c\u0003\u0002\u0002\u0002\u016b\u0169\u0003\u0002\u0002\u0002\u016c",
    "\u016d\u0007)\u0002\u0002\u016d^\u0003\u0002\u0002\u0002\u016e\u0174",
    "\u0007)\u0002\u0002\u016f\u0170\u0007)\u0002\u0002\u0170\u0173\u0007",
    ")\u0002\u0002\u0171\u0173\n\u0004\u0002\u0002\u0172\u016f\u0003\u0002",
    "\u0002\u0002\u0172\u0171\u0003\u0002\u0002\u0002\u0173\u0176\u0003\u0002",
    "\u0002\u0002\u0174\u0172\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002",
    "\u0002\u0002\u0175\u0177\u0003\u0002\u0002\u0002\u0176\u0174\u0003\u0002",
    "\u0002\u0002\u0177\u0178\u0007)\u0002\u0002\u0178`\u0003\u0002\u0002",
    "\u0002\u0179\u017a\u0007/\u0002\u0002\u017a\u017f\u0007/\u0002\u0002",
    "\u017b\u017c\u00071\u0002\u0002\u017c\u017f\u00071\u0002\u0002\u017d",
    "\u017f\u0007%\u0002\u0002\u017e\u0179\u0003\u0002\u0002\u0002\u017e",
    "\u017b\u0003\u0002\u0002\u0002\u017e\u017d\u0003\u0002\u0002\u0002\u017f",
    "\u0183\u0003\u0002\u0002\u0002\u0180\u0182\n\u0005\u0002\u0002\u0181",
    "\u0180\u0003\u0002\u0002\u0002\u0182\u0185\u0003\u0002\u0002\u0002\u0183",
    "\u0181\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184",
    "\u0186\u0003\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002\u0002\u0186",
    "\u0187\b1\u0002\u0002\u0187b\u0003\u0002\u0002\u0002\u0188\u0189\u0007",
    "1\u0002\u0002\u0189\u018a\u0007,\u0002\u0002\u018a\u018e\u0003\u0002",
    "\u0002\u0002\u018b\u018d\u000b\u0002\u0002\u0002\u018c\u018b\u0003\u0002",
    "\u0002\u0002\u018d\u0190\u0003\u0002\u0002\u0002\u018e\u018f\u0003\u0002",
    "\u0002\u0002\u018e\u018c\u0003\u0002\u0002\u0002\u018f\u0194\u0003\u0002",
    "\u0002\u0002\u0190\u018e\u0003\u0002\u0002\u0002\u0191\u0192\u0007,",
    "\u0002\u0002\u0192\u0195\u00071\u0002\u0002\u0193\u0195\u0007\u0002",
    "\u0002\u0003\u0194\u0191\u0003\u0002\u0002\u0002\u0194\u0193\u0003\u0002",
    "\u0002\u0002\u0195\u0196\u0003\u0002\u0002\u0002\u0196\u0197\b2\u0002",
    "\u0002\u0197d\u0003\u0002\u0002\u0002\u0198\u0199\t\u0006\u0002\u0002",
    "\u0199\u019a\u0003\u0002\u0002\u0002\u019a\u019b\b3\u0002\u0002\u019b",
    "f\u0003\u0002\u0002\u0002\u019c\u01a0\t\u0007\u0002\u0002\u019d\u019f",
    "\t\b\u0002\u0002\u019e\u019d\u0003\u0002\u0002\u0002\u019f\u01a2\u0003",
    "\u0002\u0002\u0002\u01a0\u019e\u0003\u0002\u0002\u0002\u01a0\u01a1\u0003",
    "\u0002\u0002\u0002\u01a1h\u0003\u0002\u0002\u0002\u01a2\u01a0\u0003",
    "\u0002\u0002\u0002\u01a3\u01a4\t\t\u0002\u0002\u01a4j\u0003\u0002\u0002",
    "\u0002\u01a5\u01a6\t\n\u0002\u0002\u01a6l\u0003\u0002\u0002\u0002\u01a7",
    "\u01a8\t\u000b\u0002\u0002\u01a8n\u0003\u0002\u0002\u0002\u01a9\u01aa",
    "\t\f\u0002\u0002\u01aap\u0003\u0002\u0002\u0002\u01ab\u01ac\t\r\u0002",
    "\u0002\u01acr\u0003\u0002\u0002\u0002\u01ad\u01ae\t\u000e\u0002\u0002",
    "\u01aet\u0003\u0002\u0002\u0002\u01af\u01b0\t\u000f\u0002\u0002\u01b0",
    "v\u0003\u0002\u0002\u0002\u01b1\u01b2\t\u0010\u0002\u0002\u01b2x\u0003",
    "\u0002\u0002\u0002\u01b3\u01b4\t\u0011\u0002\u0002\u01b4z\u0003\u0002",
    "\u0002\u0002\u01b5\u01b6\t\u0012\u0002\u0002\u01b6|\u0003\u0002\u0002",
    "\u0002\u01b7\u01b8\t\u0013\u0002\u0002\u01b8~\u0003\u0002\u0002\u0002",
    "\u01b9\u01ba\t\u0014\u0002\u0002\u01ba\u0080\u0003\u0002\u0002\u0002",
    "\u01bb\u01bc\t\u0015\u0002\u0002\u01bc\u0082\u0003\u0002\u0002\u0002",
    "\u01bd\u01be\t\u0016\u0002\u0002\u01be\u0084\u0003\u0002\u0002\u0002",
    "\u01bf\u01c0\t\u0017\u0002\u0002\u01c0\u0086\u0003\u0002\u0002\u0002",
    "\u01c1\u01c2\t\u0018\u0002\u0002\u01c2\u0088\u0003\u0002\u0002\u0002",
    "\u01c3\u01c4\t\u0019\u0002\u0002\u01c4\u008a\u0003\u0002\u0002\u0002",
    "\u01c5\u01c6\t\u001a\u0002\u0002\u01c6\u008c\u0003\u0002\u0002\u0002",
    "\u01c7\u01c8\t\u001b\u0002\u0002\u01c8\u008e\u0003\u0002\u0002\u0002",
    "\u01c9\u01ca\t\u001c\u0002\u0002\u01ca\u0090\u0003\u0002\u0002\u0002",
    "\u01cb\u01cc\t\u001d\u0002\u0002\u01cc\u0092\u0003\u0002\u0002\u0002",
    "\u01cd\u01ce\t\u001e\u0002\u0002\u01ce\u0094\u0003\u0002\u0002\u0002",
    "\u01cf\u01d0\t\u001f\u0002\u0002\u01d0\u0096\u0003\u0002\u0002\u0002",
    "\u01d1\u01d2\t \u0002\u0002\u01d2\u0098\u0003\u0002\u0002\u0002\u01d3",
    "\u01d4\t!\u0002\u0002\u01d4\u009a\u0003\u0002\u0002\u0002\u01d5\u01d6",
    "\t\"\u0002\u0002\u01d6\u009c\u0003\u0002\u0002\u0002\u01d7\u01d8\t#",
    "\u0002\u0002\u01d8\u009e\u0003\u0002\u0002\u0002\u001b\u0002\u0120\u0126",
    "\u0129\u012d\u0132\u0134\u013a\u013e\u0143\u0145\u0147\u014f\u0151\u015a",
    "\u015c\u0167\u0169\u0172\u0174\u017e\u0183\u018e\u0194\u01a0\u0003\u0002",
    "\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function PqlLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

PqlLexer.prototype = Object.create(antlr4.Lexer.prototype);
PqlLexer.prototype.constructor = PqlLexer;

Object.defineProperty(PqlLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

PqlLexer.EOF = antlr4.Token.EOF;
PqlLexer.AND = 1;
PqlLexer.EQ = 2;
PqlLexer.GT_EQ = 3;
PqlLexer.LT_EQ = 4;
PqlLexer.NOT_EQ1 = 5;
PqlLexer.NOT_EQ2 = 6;
PqlLexer.OR = 7;
PqlLexer.SHIFT_LEFT = 8;
PqlLexer.SHIFT_RIGHT = 9;
PqlLexer.AMP = 10;
PqlLexer.ASSIGN = 11;
PqlLexer.CLOSE_PAREN = 12;
PqlLexer.COLON = 13;
PqlLexer.COMMA = 14;
PqlLexer.DOT = 15;
PqlLexer.FORWARD_SLASH = 16;
PqlLexer.GT = 17;
PqlLexer.LT = 18;
PqlLexer.MINUS = 19;
PqlLexer.MOD = 20;
PqlLexer.OPEN_PAREN = 21;
PqlLexer.PIPE = 22;
PqlLexer.PLUS = 23;
PqlLexer.QUESTION_MARK = 24;
PqlLexer.SCOL = 25;
PqlLexer.STAR = 26;
PqlLexer.TILDE = 27;
PqlLexer.UNDER = 28;
PqlLexer.K_AND = 29;
PqlLexer.K_BETWEEN = 30;
PqlLexer.K_FALSE = 31;
PqlLexer.K_IN = 32;
PqlLexer.K_IS = 33;
PqlLexer.K_ISNULL = 34;
PqlLexer.K_LIKE = 35;
PqlLexer.K_NOT = 36;
PqlLexer.K_NOTNULL = 37;
PqlLexer.K_NULL = 38;
PqlLexer.K_OR = 39;
PqlLexer.K_TRUE = 40;
PqlLexer.NUMERIC_LITERAL = 41;
PqlLexer.DOUBLE_QUOTED_STRING = 42;
PqlLexer.DOUBLE_QUOTED_STRING_TEL = 43;
PqlLexer.DOUBLE_QUOTED_STRING_SQL = 44;
PqlLexer.SINGLE_QUOTED_STRING = 45;
PqlLexer.SINGLE_QUOTED_STRING_TEL = 46;
PqlLexer.SINGLE_QUOTED_STRING_SQL = 47;
PqlLexer.SINGLE_LINE_COMMENT = 48;
PqlLexer.MULTILINE_COMMENT = 49;
PqlLexer.SPACES = 50;
PqlLexer.WORD = 51;

PqlLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

PqlLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

PqlLexer.prototype.literalNames = [ null, "'&&'", "'=='", "'>='", "'<='", 
                                    "'!='", "'<>'", "'||'", "'<<'", "'>>'", 
                                    "'&'", "'='", "')'", "':'", "','", "'.'", 
                                    "'/'", "'>'", "'<'", "'-'", "'%'", "'('", 
                                    "'|'", "'+'", "'?'", "';'", "'*'", "'~'", 
                                    "'_'" ];

PqlLexer.prototype.symbolicNames = [ null, "AND", "EQ", "GT_EQ", "LT_EQ", 
                                     "NOT_EQ1", "NOT_EQ2", "OR", "SHIFT_LEFT", 
                                     "SHIFT_RIGHT", "AMP", "ASSIGN", "CLOSE_PAREN", 
                                     "COLON", "COMMA", "DOT", "FORWARD_SLASH", 
                                     "GT", "LT", "MINUS", "MOD", "OPEN_PAREN", 
                                     "PIPE", "PLUS", "QUESTION_MARK", "SCOL", 
                                     "STAR", "TILDE", "UNDER", "K_AND", 
                                     "K_BETWEEN", "K_FALSE", "K_IN", "K_IS", 
                                     "K_ISNULL", "K_LIKE", "K_NOT", "K_NOTNULL", 
                                     "K_NULL", "K_OR", "K_TRUE", "NUMERIC_LITERAL", 
                                     "DOUBLE_QUOTED_STRING", "DOUBLE_QUOTED_STRING_TEL", 
                                     "DOUBLE_QUOTED_STRING_SQL", "SINGLE_QUOTED_STRING", 
                                     "SINGLE_QUOTED_STRING_TEL", "SINGLE_QUOTED_STRING_SQL", 
                                     "SINGLE_LINE_COMMENT", "MULTILINE_COMMENT", 
                                     "SPACES", "WORD" ];

PqlLexer.prototype.ruleNames = [ "AND", "EQ", "GT_EQ", "LT_EQ", "NOT_EQ1", 
                                 "NOT_EQ2", "OR", "SHIFT_LEFT", "SHIFT_RIGHT", 
                                 "AMP", "ASSIGN", "CLOSE_PAREN", "COLON", 
                                 "COMMA", "DOT", "FORWARD_SLASH", "GT", 
                                 "LT", "MINUS", "MOD", "OPEN_PAREN", "PIPE", 
                                 "PLUS", "QUESTION_MARK", "SCOL", "STAR", 
                                 "TILDE", "UNDER", "K_AND", "K_BETWEEN", 
                                 "K_FALSE", "K_IN", "K_IS", "K_ISNULL", 
                                 "K_LIKE", "K_NOT", "K_NOTNULL", "K_NULL", 
                                 "K_OR", "K_TRUE", "NUMERIC_LITERAL", "DOUBLE_QUOTED_STRING", 
                                 "DOUBLE_QUOTED_STRING_TEL", "DOUBLE_QUOTED_STRING_SQL", 
                                 "SINGLE_QUOTED_STRING", "SINGLE_QUOTED_STRING_TEL", 
                                 "SINGLE_QUOTED_STRING_SQL", "SINGLE_LINE_COMMENT", 
                                 "MULTILINE_COMMENT", "SPACES", "WORD", 
                                 "DIGIT", "A", "B", "C", "D", "E", "F", 
                                 "G", "H", "I", "J", "K", "L", "M", "N", 
                                 "O", "P", "Q", "R", "S", "T", "U", "V", 
                                 "W", "X", "Y", "Z" ];

PqlLexer.prototype.grammarFileName = "PqlLexer.g4";


exports.PqlLexer = PqlLexer;

