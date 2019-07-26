CppSharp is a tool and set of libraries which allows programmers to use C/C++ libraries with high-level programming languages (such as C#).

It is a tool that takes C/C++ header and library files and generates the necessary glue to surface the native API as a managed API. Such an API can be used to consume an existing native library in your high-level code or add scripting support to a native codebase.

The supported target languages at present are C# and C++/CLI.

It can also be used as a library to parse native code into a syntax tree with a rich declaration and type information model.

## Releases/Build Status

|Windows @abstr_number -bit|Windows @abstr_number -bit| windows-vs-x @abstr_number | linux-gcc-x @abstr_number _ @abstr_number | osx-clang-x @abstr_number | |---------------------------|---------------------------|---------------------------|-----------------------------|-----------------------------| | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

@abstr_number . Libraries @abstr_number . Documentation @abstr_number . Community @abstr_number . Support @abstr_number . Users

## Libraries

### AST

Mirrors the Clang's C/C++ AST and type system classes in C# APIs.

Check out @abstr_hyperlink for more details about its architecture.

  * C++ declarations
  * C++ statements / expressions
  * C++ types
  * Class object layout
  * Declaration visitors
  * Type visitors



### Parser

Provides APIs for parsing of C/C++ source code into a syntax tree.

  * Parsing of C/C++ source code
  * Parsing of libraries archives symbols
  * Parsing of shared libraries symbols 
  * Based on the very accurate Clang C++ parser.



### Generator

Generates the glue binding code from a syntax tree of the native code.

  * Multiple backends: C++/CLI and C# (P/Invoke)
  * Multiple ABIs: Itanium, MS, ARM, iOS
  * Multiple platforms: Windows, OS X and Linux
  * Multiple runtimes: .NET and Mono
  * C++ virtual methods overriding from managed code
  * C++ multiple inheritance by translating to C# interfaces
  * C++ std::string
  * C++ default parameter values
  * C/C++ semantic comments (Doxygen) to C# comments
  * Extensible bindings semantics via user passes and type mapping 



## Documentation

Please see the following resources for more information:

Getting Started

User's Manual

Developer's Manual

## Community

Feel free to open up issues on Github for any problems you find.

You can also join us at our @abstr_hyperlink Gitter discussion channel.

## Support

For building wrappers and priority support please write to &# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;&# @abstr_number ;. Alternatively, you may post bounties at https://www.bountysource.com/.

## Users

CppSharp is used by the following projects:

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

Please feel free to send us a pull request adding your own projects to the list above.
