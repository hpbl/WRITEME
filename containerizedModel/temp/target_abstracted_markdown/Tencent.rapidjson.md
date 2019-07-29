@abstr_image 

@abstr_image 

## A fast JSON parser/generator for C++ with both SAX/DOM style API

Tencent is pleased to support the open source community by making RapidJSON available.

Copyright (C) @abstr_number THL A @abstr_number Limited, a Tencent company, and Milo Yip. All rights reserved.

  * @abstr_hyperlink 
  * RapidJSON Documentation 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink with downloadable PDF/EPUB/MOBI, without API reference.



## Build status

| @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | :---------------: | :-----------------: | :-------------------: | | ![lin-badge] | ![win-badge] | ![cov-badge] |

## Introduction

RapidJSON is a JSON parser and generator for C++. It was inspired by @abstr_hyperlink .

  * RapidJSON is **small** but **complete**. It supports both SAX and DOM style API. The SAX parser is only a half thousand lines of code.

  * RapidJSON is **fast**. Its performance can be comparable to `strlen()`. It also optionally supports SSE @abstr_number /SSE @abstr_number . @abstr_number for acceleration.

  * RapidJSON is **self-contained** and **header-only**. It does not depend on external libraries such as BOOST. It even does not depend on STL.

  * RapidJSON is **memory-friendly**. Each JSON value occupies exactly @abstr_number bytes for most @abstr_number / @abstr_number -bit machines (excluding text string). By default it uses a fast memory allocator, and the parser allocates memory compactly during parsing.

  * RapidJSON is **Unicode-friendly**. It supports UTF- @abstr_number , UTF- @abstr_number , UTF- @abstr_number (LE  & BE), and their detection, validation and transcoding internally. For example, you can read a UTF- @abstr_number file and let RapidJSON transcode the JSON strings into UTF- @abstr_number in the DOM. It also supports surrogates and "\u @abstr_number " (null character).




More features can be read here.

JSON(JavaScript Object Notation) is a light-weight data exchange format. RapidJSON should be in full compliance with RFC @abstr_number /ECMA- @abstr_number , with optional support of relaxed syntax. More information about JSON can be obtained at * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 

## Highlights in v @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Added JSON Pointer
  * Added JSON Schema
  * Added relaxed JSON syntax (comment, trailing comma, NaN/Infinity)
  * Iterating array/object with C++ @abstr_number Range-based for loop
  * Reduce memory overhead of each `Value` from @abstr_number bytes to @abstr_number bytes in x @abstr_number - @abstr_number architecture.



For other changes please refer to change log.

## Compatibility

RapidJSON is cross-platform. Some platform/compiler combinations which have been tested are shown as follows. * Visual C++ @abstr_number / @abstr_number / @abstr_number on Windows ( @abstr_number / @abstr_number -bit) * GNU C++ @abstr_number . @abstr_number .x on Cygwin * Clang @abstr_number . @abstr_number on Mac OS X ( @abstr_number / @abstr_number -bit) and iOS * Clang @abstr_number . @abstr_number on Android NDK

Users can build and run the unit tests on their platform/compiler.

## Installation

RapidJSON is a header-only C++ library. Just copy the `include/rapidjson` folder to system or project's include path.

RapidJSON uses following software as its dependencies: * @abstr_hyperlink as a general build tool * (optional) @abstr_hyperlink to build documentation * (optional) @abstr_hyperlink for unit and performance testing

To generate user documentation and run tests please proceed with the steps below:

@abstr_number . Execute `git submodule update --init` to get the files of thirdparty submodules (google test). @abstr_number . Create directory called `build` in rapidjson source directory. @abstr_number . Change to `build` directory and run `cmake ..` command to configure your build. Windows users can do the same with cmake-gui application. @abstr_number . On Windows, build the solution found in the build directory. On Linux, run `make` from the build directory.

On successful build you will find compiled test and example binaries in `bin` directory. The generated documentation will be available in `doc/html` directory of the build tree. To run tests after finished build please run `make test` or `ctest` from your build tree. You can get detailed output using `ctest -V` command.

It is possible to install library system-wide by running `make install` command from the build tree with administrative privileges. This will install all files according to system preferences. Once RapidJSON is installed, it is possible to use it from other CMake projects by adding `find_package(RapidJSON)` line to your CMakeLists.txt.

## Usage at a glance

This simple example parses a JSON string into a document (DOM), make a simple modification of the DOM, and finally stringify the DOM to a JSON string.

~~~~~~~~~~cpp // rapidjson/example/simpledom/simpledom.cpp`

# include "rapidjson/document.h"

# include "rapidjson/writer.h"

# include "rapidjson/stringbuffer.h"

# include 

using namespace rapidjson;

int main() { // @abstr_number . Parse a JSON string into DOM. const char* json = "{\"project\":\"rapidjson\",\"stars\": @abstr_number }"; Document d; d.Parse(json);
    
    
    //  @abstr_number . Modify it by DOM.
    Value& s = d["stars"];
    s.SetInt(s.GetInt() +  @abstr_number );
    
    //  @abstr_number . Stringify the DOM
    StringBuffer buffer;
    Writer<StringBuffer> writer(buffer);
    d.Accept(writer);
    
    // Output {"project":"rapidjson","stars": @abstr_number }
    std::cout << buffer.GetString() << std::endl;
    return  @abstr_number ;
    

} ~~~~~~~~~~

Note that this example did not handle potential errors.

The following diagram shows the process.

@abstr_image 

More @abstr_hyperlink are available:

  * DOM API

    * @abstr_hyperlink : Basic usage of DOM API.
  * SAX API

    * @abstr_hyperlink : Dumps all SAX events while parsing a JSON by `Reader`.
    * @abstr_hyperlink : A command line tool to rewrite a JSON, with all whitespaces removed.
    * @abstr_hyperlink : A command line tool to rewrite a JSON with indents and newlines by `PrettyWriter`.
    * @abstr_hyperlink : A command line tool to capitalize strings in JSON.
    * @abstr_hyperlink : Parse a JSON message with SAX API.
    * @abstr_hyperlink : Serialize a C++ object into JSON with SAX API.
    * @abstr_hyperlink : Implements a `JsonxWriter` which stringify SAX events into @abstr_hyperlink (a kind of XML) format. The example is a command line tool which converts input JSON into JSONx format.
  * Schema

    * @abstr_hyperlink : A command line tool to validate a JSON with a JSON schema.
  * Advanced

    * @abstr_hyperlink : A modified version of @abstr_hyperlink to automatically handle JSON with any UTF encodings.
    * @abstr_hyperlink : Implements an `AsyncDocumentParser` which can parse JSON in parts, using C++ @abstr_number thread.
    * @abstr_hyperlink : A command line tool to remove all values with user-specified key.
    * @abstr_hyperlink : Same tool as above, but it demonstrates how to use a generator to populate a `Document`.


