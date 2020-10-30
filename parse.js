const nearley = require("nearley");
const grammar = require("./small.js");
const fs =require("mz/fs");
//import { default as grammar } from './small.js';

async function main() {
    const filename =process.argv[2]
    if(!filename){
        console.log("please provide ")
        return
    }
    const code = (await fs.readFile(filename)).toString()
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(code);

    if(parser.results.length >1){
        console.log("there is ambigous")
    }else if(parser.results.length ==1){
       const ast = parser.results[0]
       const outputFilename= filename.replace(".small",".ast");
       await fs.writeFile(outputFilename, JSON.stringify(ast, null, "  "))
       console.log(`wrot ${outputFilename}`)
    }else {
        console.log("error occur");
    }
    
}
main().catch(err=>console.log(err.stack))
