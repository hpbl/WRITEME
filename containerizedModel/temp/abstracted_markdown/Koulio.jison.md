# Jison

  * @abstr_hyperlink 
  * @abstr_hyperlink 



@abstr_hyperlink 

## An API for creating parsers in JavaScript

Jison generates bottom-up parsers in JavaScript. Its API is similar to Bison's, hence the name. It supports many of Bison's major features, plus some of its own. If you are new to parser generators such as Bison, and Context-free Grammars in general, a @abstr_hyperlink is found in the Bison manual. If you already know Bison, Jison should be easy to pickup.

Briefly, Jison takes a JSON encoded grammar or Bison style grammar and outputs a JavaScript file capable of parsing the language described by that grammar. You can then use the generated script to parse inputs and accept, reject, or perform actions based on the input.

## Installation

Jison can be installed for @abstr_hyperlink using @abstr_hyperlink 

Using npm:
    
    
    npm install jison -g
    

## Usage from the command line

Clone the github repository for examples:
    
    
    git clone git://github.com/zaach/jison.git
    cd jison/examples
    

Now you're ready to generate some parsers:
    
    
    jison calculator.jison
    

This will generate `calculator.js` in your current working directory. This file can be used to parse an input file, like so:
    
    
    echo " @abstr_number ^ @abstr_number  /  @abstr_number " > testcalc
    node calculator.js testcalc
    

This will print out `@abstr_number`.

Full cli option list:
    
    
    Usage: jison [file] [lexfile] [options]
    
    file        file containing a grammar
    lexfile     file containing a lexical grammar
    
    Options:
       -j, --json                    force jison to expect a grammar in JSON format
       -o FILE, --outfile FILE       Filename and base module name of the generated parser
       -t, --debug                   Debug mode
       -m TYPE, --module-type TYPE   The type of module to generate (commonjs, amd, js)
       -p TYPE, --parser-type TYPE   The type of algorithm to use for the parser (lr @abstr_number , slr, lalr, lr)
       -V, --version                 print version and exit
    

## Usage from a CommonJS module

You can generate parsers programatically from JavaScript as well. Assuming Jison is in your commonjs environment's load path:
    
    
    // mygenerator.js
    var Parser = require("jison").Parser;
    
    // a grammar in JSON
    var grammar = {
        "lex": {
            "rules": [
               ["\\s+", "/* skip whitespace */"],
               ["[a-f @abstr_number - @abstr_number ]+", "return 'HEX';"]
            ]
        },
    
        "bnf": {
            "hex_strings" :[ "hex_strings HEX",
                             "HEX" ]
        }
    };
    
    // `grammar` can also be a string that uses jison's grammar format
    var parser = new Parser(grammar);
    
    // generate source, ready to be written to disk
    var parserSource = parser.generate();
    
    // you can also use the parser directly from memory
    
    // returns true
    parser.parse("adfe @abstr_number bc e @abstr_number a");
    
    // throws lexical error
    parser.parse("adfe @abstr_number bc zxg");
    

## More Documentation

For more information on creating grammars and using the generated parsers, read the @abstr_hyperlink .

## How to contribute

See @abstr_hyperlink for contribution guidelines, how to run the tests, etc.

## Projects using Jison

View them on the @abstr_hyperlink , or add your own.

## Contributors

@abstr_hyperlink 

Special thanks to Jarred Ligatti, Manuel E. Bermúdez 

## License

> Copyright (c) @abstr_number - @abstr_number Zachary Carter
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
