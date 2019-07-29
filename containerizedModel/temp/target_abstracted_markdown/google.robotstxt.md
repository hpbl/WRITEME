# Google Robots.txt Parser and Matcher Library

The repository contains Google's robots.txt parser and matcher as a C++ library (compliant to C++ @abstr_number ).

## About the library

The Robots Exclusion Protocol (REP) is a standard that enables website owners to control which URLs may be accessed by automated clients (i.e. crawlers) through a simple text file with a specific syntax. It's one of the basic building blocks of the internet as we know it and what allows search engines to operate.

Because the REP was only a de-facto standard for the past @abstr_number years, different implementers implement parsing of robots.txt slightly differently, leading to confusion. This project aims to fix that by releasing the parser that Google uses.

The library is slightly modified (i.e. some internal headers and equivalent symbols) production code used by Googlebot, Google's crawler, to determine which URLs it may access based on rules provided by webmasters in robots.txt files. The library is released open-source to help developers build tools that better reflect Google's robots.txt parsing and matching.

For webmasters, we included a small binary in the project that allows testing a single URL and user-agent against a robots.txt.

## Building the library

### Quickstart

We included with the library a small binary to test a local robots.txt against a user-agent and URL. Running the included binary requires:

  * A compatible platform (e.g. Windows, macOS, Linux, etc.). Most platforms are fully supported.
  * A compatible C++ compiler supporting at least C++ @abstr_number . Most major compilers are supported.
  * @abstr_hyperlink for interacting with the source code repository. To install Git, consult the @abstr_hyperlink guide on @abstr_hyperlink .
  * Although you are free to use your own build system, this documentation provides guides to build using @abstr_hyperlink or @abstr_hyperlink . To download and install Bazel (and any of its dependencies), consult the @abstr_hyperlink 



#### Building with Bazel

@abstr_hyperlink is the official build system for the library, which is supported on most major platforms (Linux, Windows, MacOS, for example) and compilers.

To build and run the binary:

@abstr_code_section 

#### Building with CMake

@abstr_hyperlink is the community-supported build system for the library.

To build the library using CMake, just follow the steps below:

@abstr_code_section 

## Notes

Parsing of robots.txt files themselves is done exactly as in the production version of Googlebot, including how percent codes and unicode characters in patterns are handled. The user must ensure however that the URI passed to the AllowedByRobots and OneAgentAllowedByRobots functions, or to the URI parameter of the robots tool, follows the format specified by RFC @abstr_number , since this library will not perform full normalization of those URI parameters. Only if the URI is in this format, the matching will be done according to the REP specification.

## License

The robots.txt parser and matcher C++ library is licensed under the terms of the Apache license. See LICENSE for more information.

## Links

To learn more about this project:

  * check out the @abstr_hyperlink ,
  * how @abstr_hyperlink ,
  * or for a high level overview, the @abstr_hyperlink .


