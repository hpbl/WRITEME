# simdjson : Parsing gigabytes of JSON per second

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## A C++ library to see how fast we can parse JSON with complete validation.

JSON documents are everywhere on the Internet. Servers spend a lot of time parsing these documents. We want to accelerate the parsing of JSON per se using commonly available SIMD instructions as much as possible while doing full validation (including character encoding).

@abstr_image 

## Real-world usage

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Paper

A description of the design and implementation of simdjson appears at https://arxiv.org/abs/ @abstr_number . @abstr_number and an informal blog post providing some background and context is at https://branchfree.org/ @abstr_number / @abstr_number / @abstr_number /paper-parsing-gigabytes-of-json-per-second/.

Some people @abstr_hyperlink :

@abstr_hyperlink 

## Performance results

simdjson uses three-quarters less instructions than state-of-the-art parser RapidJSON and fifty percent less than sajson. To our knowledge, simdjson is the first fully-validating JSON parser to run at gigabytes per second on commodity processors.

@abstr_image 

On a Skylake processor, the parsing speeds (in GB/s) of various processors on the twitter.json file are as follows.

| parser | GB/s | | ------------------------------------- | ---- | | simdjson | @abstr_number . @abstr_number | | RapidJSON encoding-validation | @abstr_number . @abstr_number | | RapidJSON encoding-validation, insitu | @abstr_number . @abstr_number | | sajson (insitu, dynamic) | @abstr_number . @abstr_number | | sajson (insitu, static) | @abstr_number . @abstr_number | | dropbox | @abstr_number . @abstr_number | | fastjson | @abstr_number . @abstr_number | | gason | @abstr_number . @abstr_number | | ultrajson | @abstr_number . @abstr_number | | jsmn | @abstr_number . @abstr_number | | cJSON | @abstr_number . @abstr_number |

## Requirements

  * We support platforms like Linux or macOS, as well as Windows through Visual Studio @abstr_number or later.
  * A processor with 
    * AVX @abstr_number (i.e., Intel processors starting with the Haswell microarchitecture released @abstr_number and AMD processors starting with the Zen microarchitecture released @abstr_number ), 
    * or SSE @abstr_number . @abstr_number and CLMUL (i.e., Intel processors going back to Westmere released in @abstr_number or AMD processors starting with the Jaguar used in the PS @abstr_number and XBox One)
    * or a @abstr_number -bit ARM processor (ARMv @abstr_number -A): this covers a wide range of mobile processors, including all Apple processors currently available for sale, going back as far back as the iPhone @abstr_number s ( @abstr_number ).
  * A recent C++ compiler (e.g., GNU GCC or LLVM CLANG or Visual Studio @abstr_number ), we assume C++ @abstr_number . GNU GCC @abstr_number or better or LLVM's clang @abstr_number or better.
  * Some benchmark scripts assume bash and other common utilities, but they are optional.



## License

This code is made available under the Apache License @abstr_number . @abstr_number .

Under Windows, we build some tools using the windows/dirent_portable.h file (which is outside our library code): it under the liberal (business-friendly) MIT license.

## Code usage and example

The main API involves populating a `ParsedJson` object which hosts a fully navigable document-object-model (DOM) view of the JSON document. The DOM can be accessed using @abstr_hyperlink paths, for example. The main function is `json_parse` which takes a string containing the JSON document as well as a reference to pre-allocated `ParsedJson` object (which can be reused multiple time). Once you have populated the `ParsedJson` object you can navigate through the DOM with an iterator (e.g., created by `ParsedJson::iterator pjh(pj)`, see 'Navigating the parsed document').

```C

# include "simdjson/jsonparser.h"

using namespace simdjson;

/...

const char * filename = ... //

// use whatever means you want to get a string (UTF- @abstr_number ) of your JSON document padded_string p = get_corpus(filename); ParsedJson pj; pj.allocateCapacity(p.size()); // allocate memory for parsing up to p.size() bytes const int res = json_parse(p, pj); // do the parsing, return @abstr_number on success // parsing is done! if (res != @abstr_number ) { // You can use the "simdjson/simdjson.h" header to access the error message std::cout << "Error parsing:" << simdjson::errorMsg(res) << std::endl; } // the ParsedJson document can be used here // pj can be reused with other json_parse calls. @abstr_code_section C

# include "simdjson/jsonparser.h"

using namespace simdjson;

/...

const char * filename = ... // padded_string p = get_corpus(filename); ParsedJson pj = build_parsed_json(p); // do the parsing if( ! pj.isValid() ) { // something went wrong std::cout << pj.getErrorMsg() << std::endl; } @abstr_code_section C

# include "simdjson/jsonparser.h"

using namespace simdjson;

/... std::string mystring = ... // ParsedJson pj; pj.allocateCapacity(mystring.size()); // allocate memory for parsing up to p.size() bytes // std::string may not overallocate so a copy will be needed const int res = json_parse(mystring, pj); // do the parsing, return @abstr_number on success // parsing is done! if (res != @abstr_number ) { // You can use the "simdjson/simdjson.h" header to access the error message std::cout << "Error parsing:" << simdjson::errorMsg(res) << std::endl; } // pj can be reused with other json_parse calls. @abstr_code_section C

# include "simdjson/jsonparser.h"

using namespace simdjson;

/...

std::string mystring = ... // // std::string may not overallocate so a copy will be needed ParsedJson pj = build_parsed_json(mystring); // do the parsing if( ! pj.isValid() ) { // something went wrong std::cout << pj.getErrorMsg() << std::endl; } @abstr_code_section C

# include 

# include "simdjson.h"

# include "simdjson.cpp"

using namespace simdjson; int main(int argc, char *argv[]) { const char * filename = argv[ @abstr_number ]; padded_string p = get_corpus(filename); ParsedJson pj = build_parsed_json(p); // do the parsing if( ! pj.isValid() ) { std::cout << "not valid" << std::endl; std::cout << pj.getErrorMsg() << std::endl; } else { std::cout << "valid" << std::endl; } return EXIT_SUCCESS; } @abstr_code_section make make test @abstr_code_section make parse ./parse jsonexamples/twitter.json @abstr_code_section make benchmark @abstr_code_section brew install cmake @abstr_code_section brew install gcc@ @abstr_number @abstr_code_section mkdir build cd build cmake .. make make test @abstr_code_section mkdir buildstatic cd buildstatic cmake -DSIMDJSON_BUILD_STATIC=ON .. make make test @abstr_code_section brew install gcc@ @abstr_number mkdir build cd build export CXX=g++- @abstr_number CC=gcc- @abstr_number cmake .. make make test @abstr_code_section $ ./vcpkg install simdjson @abstr_code_section .\vcpkg.exe install simdjson:x @abstr_number -windows @abstr_code_section .\vcpkg.exe install simdjson:x @abstr_number -windows-static   
@abstr_code_section make jsonpointer ./jsonpointer jsonexamples/small/demo.json /Image/Width /Image/Height /Image/IDs/ @abstr_number ./jsonpointer jsonexamples/twitter.json /statuses/ @abstr_number /id /statuses/ @abstr_number /id /statuses/ @abstr_number /id /statuses/ @abstr_number /id /statuses/ @abstr_number /id /statuses/ @abstr_number /id @abstr_code_section c ParsedJson::iterator pjh(pj); if (!pjh.isOk()) { std::cerr << " Could not iterate parsed result. " << std::endl; return EXIT_FAILURE; } compute_dump(pj); // // where compute_dump is :

void compute_dump(ParsedJson::iterator &pjh) { if (pjh.is_object()) { std::cout << "{"; if (pjh.down()) { pjh.print(std::cout); // must be a string std::cout << ":"; pjh.next(); compute_dump(pjh); // let us recurse while (pjh.next()) { std::cout << ","; pjh.print(std::cout); std::cout << ":"; pjh.next(); compute_dump(pjh); // let us recurse } pjh.up(); } std::cout << "}"; } else if (pjh.is_array()) { std::cout << "["; if (pjh.down()) { compute_dump(pjh); // let us recurse while (pjh.next()) { std::cout << ","; compute_dump(pjh); // let us recurse } pjh.up(); } std::cout << "]"; } else { pjh.print(std::cout); // just print the lone value } } @abstr_code_section C void simdjson_scan(std::vector &answer, ParsedJson::iterator &i) { while(i.move_forward()) { if(i.get_scope_type() == '{') { bool founduser = (i.get_string_length() == @abstr_number ) && (memcmp(i.get_string(), "user", @abstr_number ) == @abstr_number ); i.move_to_value(); if(founduser) { if(i.is_object() && i.move_to_key("id", @abstr_number )) { if (i.is_integer()) { answer.push_back(i.get_integer()); } i.up(); } } } } } @abstr_code_section make allparserscheckfile ./allparserscheckfile myfile.json @abstr_code_section make parsingcompetition ./parsingcompetition myfile.json @abstr_code_section make allparsingcompetition ./allparsingcompetition myfile.json @abstr_code_section git clone https://github.com/lemire/simdjson.git cd simdjson docker build -t simdjson . docker run --privileged -t simdjson ```

## Other programming languages

We distinguish between "bindings" (which just wrap the C++ code) and a port to another programming language (which reimplements everything).

  * @abstr_hyperlink : Python bindings for the simdjson project.
  * @abstr_hyperlink : Rust port
  * @abstr_hyperlink : Rust wrapper (bindings)
  * @abstr_hyperlink : C# version for .NET Core (bindings and full port)
  * @abstr_hyperlink : Node.js bindings for the simdjson project.
  * @abstr_hyperlink : PHP bindings for the simdjson project.



## Various References

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * https://tools.ietf.org/html/rfc @abstr_number 
  * The Mison implementation in rust https://github.com/pikkr/pikkr
  * http://rapidjson.org/md_doc_sax.html
  * https://github.com/Geal/parser_benchmarks/tree/master/json
  * Gron: A command line tool that makes JSON greppable https://news.ycombinator.com/item?id= @abstr_number 
  * GoogleGson https://github.com/google/gson
  * Jackson https://github.com/FasterXML/jackson
  * https://www.yelp.com/dataset_challenge
  * RapidJSON. http://rapidjson.org/



Inspiring links:

  * https://auth @abstr_number .com/blog/beating-json-performance-with-protobuf/
  * https://gist.github.com/shijuvar/ @abstr_number ad @abstr_number de @abstr_number c @abstr_number b @abstr_number a
  * https://github.com/frankmcsherry/blog/blob/master/posts/ @abstr_number - @abstr_number - @abstr_number .md



Validating UTF- @abstr_number takes no more than @abstr_number . @abstr_number cycles per byte:

  * https://github.com/lemire/fastvalidate-utf- @abstr_number https://lemire.me/blog/ @abstr_number / @abstr_number / @abstr_number /validating-utf- @abstr_number -strings-using-as-little-as- @abstr_number - @abstr_number -cycles-per-byte/



## Remarks on JSON parsing

  * The JSON spec defines what a JSON parser is:

> A JSON parser transforms a JSON text into another representation. A JSON parser MUST accept all texts that conform to the JSON grammar. A JSON parser MAY accept non-JSON forms or extensions. An implementation may set limits on the size of texts that it accepts. An implementation may set limits on the maximum depth of nesting. An implementation may set limits on the range and precision of numbers. An implementation may set limits on the length and character contents of strings.

  * JSON is not JavaScript:

> All JSON is Javascript but NOT all Javascript is JSON. So {property: @abstr_number } is invalid because property does not have double quotes around it. {'property': @abstr_number } is also invalid, because it's single quoted while the only thing that can placate the JSON specification is double quoting. JSON is even fussy enough that {"property":. @abstr_number } is invalid too, because you should have of course written {"property": @abstr_number . @abstr_number }. Also, don't even think about having comments or semicolons, you guessed it: they're invalid. (credit:https://github.com/elzr/vim-json)

  * The structural characters are:

begin-array = [ left square bracket begin-object = { left curly bracket end-array = ] right square bracket end-object = } right curly bracket name-separator = : colon value-separator = , comma




### Pseudo-structural elements

A character is pseudo-structural if and only if:

@abstr_number . Not enclosed in quotes, AND @abstr_number . Is a non-whitespace character, AND @abstr_number . Its preceding character is either: (a) a structural character, OR (b) whitespace.

This helps as we redefine some new characters as pseudo-structural such as the characters @abstr_number , G, n in the following:

> { "foo" : @abstr_number . @abstr_number , "bar" : @abstr_number . @abstr_number GEOFF_IS_A_DUMMY bla bla , "baz", null }

## Academic References

  * T.Mühlbauer, W.Rödiger, R.Seilbeck, A.Reiser, A.Kemper, and T.Neumann. Instant loading for main memory databases. PVLDB, @abstr_number ( @abstr_number ): @abstr_number – @abstr_number , @abstr_number . (SIMD-based CSV parsing)
  * Mytkowicz, Todd, Madanlal Musuvathi, and Wolfram Schulte. "Data-parallel finite-state machines." ACM SIGARCH Computer Architecture News. Vol. @abstr_number . No. @abstr_number . ACM, @abstr_number .
  * Lu, Yifan, et al. "Tree structured data processing on GPUs." Cloud Computing, Data Science & Engineering-Confluence, @abstr_number @abstr_number th International Conference on. IEEE, @abstr_number .
  * Sidhu, Reetinder. "High throughput, tree automata based XML processing using FPGAs." Field-Programmable Technology (FPT), @abstr_number International Conference on. IEEE, @abstr_number .
  * Dai, Zefu, Nick Ni, and Jianwen Zhu. "A @abstr_number cycle-per-byte XML parsing accelerator." Proceedings of the @abstr_number th annual ACM/SIGDA international symposium on Field programmable gate arrays. ACM, @abstr_number .
  * Lin, Dan, et al. "Parabix: Boosting the efficiency of text processing on commodity processors." High Performance Computer Architecture (HPCA), @abstr_number IEEE @abstr_number th International Symposium on. IEEE, @abstr_number . http://parabix.costar.sfu.ca/export/ @abstr_number /docs/HPCA @abstr_number /final_ieee/final.pdf
  * Deshmukh, V. M., and G. R. Bamnote. "An empirical evaluation of optimization parameters in XML parsing for performance enhancement." Computer, Communication and Control (IC @abstr_number ), @abstr_number International Conference on. IEEE, @abstr_number .
  * Moussalli, Roger, et al. "Efficient XML Path Filtering Using GPUs." ADMS@ VLDB. @abstr_number .
  * Jianliang, Ma, et al. "Parallel speculative dom-based XML parser." High Performance Computing and Communication & @abstr_number IEEE @abstr_number th International Conference on Embedded Software and Systems (HPCC-ICESS), @abstr_number IEEE @abstr_number th International Conference on. IEEE, @abstr_number .
  * Li, Y., Katsipoulakis, N.R., Chandramouli, B., Goldstein, J. and Kossmann, D., @abstr_number . Mison: a fast JSON parser for data analytics. Proceedings of the VLDB Endowment, @abstr_number ( @abstr_number ), pp. @abstr_number - @abstr_number . http://www.vldb.org/pvldb/vol @abstr_number /p @abstr_number -li.pdf
  * Cameron, Robert D., et al. "Parallel scanning with bitstream addition: An xml case study." European Conference on Parallel Processing. Springer, Berlin, Heidelberg, @abstr_number .
  * Cameron, Robert D., Kenneth S. Herdy, and Dan Lin. "High performance XML parsing using parallel bit stream technology." Proceedings of the @abstr_number conference of the center for advanced studies on collaborative research: meeting of minds. ACM, @abstr_number .
  * Shah, Bhavik, et al. "A data parallel algorithm for XML DOM parsing." International XML Database Symposium. Springer, Berlin, Heidelberg, @abstr_number .
  * Cameron, Robert D., and Dan Lin. "Architectural support for SWAR text processing with parallel bit streams: the inductive doubling principle." ACM Sigplan Notices. Vol. @abstr_number . No. @abstr_number . ACM, @abstr_number .
  * Amagasa, Toshiyuki, Mana Seino, and Hiroyuki Kitagawa. "Energy-Efficient XML Stream Processing through Element-Skipping Parsing." Database and Expert Systems Applications (DEXA), @abstr_number @abstr_number th International Workshop on. IEEE, @abstr_number .
  * Medforth, Nigel Woodland. "icXML: Accelerating Xerces-C @abstr_number . @abstr_number . @abstr_number using the Parabix Framework." ( @abstr_number ).
  * Zhang, Qiang Scott. Embedding Parallel Bit Stream Technology Into Expat. Diss. Simon Fraser University, @abstr_number .
  * Cameron, Robert D., et al. "Fast Regular Expression Matching with Bit-parallel Data Streams."
  * Lin, Dan. Bits filter: a high-performance multiple string pattern matching algorithm for malware detection. Diss. School of Computing Science-Simon Fraser University, @abstr_number .
  * Yang, Shiyang. Validation of XML Document Based on Parallel Bit Stream Technology. Diss. Applied Sciences: School of Computing Science, @abstr_number .
  * N. Nakasato, "Implementation of a parallel tree method on a GPU", Journal of Computational Science, vol. @abstr_number , no. @abstr_number , pp. @abstr_number - @abstr_number , @abstr_number .



## Funding

The work is supported by the Natural Sciences and Engineering Research Council of Canada under grant number RGPIN- @abstr_number - @abstr_number . 
