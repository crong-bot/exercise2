// Generated automatically by nearley, version 2.19.7
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const mylexer = require("./lexer")
var grammar = {
    Lexer: mylexer,
    ParserRules: [
    {"name": "statement", "symbols": ["var_assign"]},
    {"name": "var_assign", "symbols": [(mylexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "_", "expr"]},
    {"name": "expr", "symbols": [(mylexer.has("string") ? {type: "string"} : string)]},
    {"name": "expr", "symbols": [(mylexer.has("number") ? {type: "number"} : number)]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (mylexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(mylexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (mylexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
