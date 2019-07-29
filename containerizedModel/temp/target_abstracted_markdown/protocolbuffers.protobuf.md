# Protocol Buffers - Google's data interchange format

Copyright @abstr_number Google Inc.

https://developers.google.com/protocol-buffers/

## Overview

Protocol Buffers (a.k.a., protobuf) are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data. You can find @abstr_hyperlink .

This README file contains protobuf installation instructions. To install protobuf, you need to install the protocol compiler (used to compile .proto files) and the protobuf runtime for your chosen programming language.

## Protocol Compiler Installation

The protocol compiler is written in C++. If you are using C++, please follow the C++ Installation Instructions to install protoc along with the C++ runtime.

For non-C++ users, the simplest way to install the protocol compiler is to download a pre-built binary from our release page:

@abstr_hyperlink 

In the downloads section of each release, you can find pre-built binaries in zip packages: protoc-$VERSION-$PLATFORM.zip. It contains the protoc binary as well as a set of standard .proto files distributed along with protobuf.

If you are looking for an old version that is not available in the release page, check out the maven repo here:

@abstr_hyperlink 

These pre-built binaries are only provided for released versions. If you want to use the github master version at HEAD, or you need to modify protobuf code, or you are using C++, it's recommended to build your own protoc binary from source.

If you would like to build protoc binary from source, see the C++ Installation Instructions.

## Protobuf Runtime Installation

Protobuf supports several different programming languages. For each programming language, you can find instructions in the corresponding source directory about how to install protobuf runtime for that specific language:

| Language | Source | Ubuntu | MacOS | Windows | |--------------------------------------|-------------------------------------------------------------|--------|-------|---------| | C++ (include C++ runtime and protoc) | src | @abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink | @abstr_hyperlink   
@abstr_hyperlink | @abstr_hyperlink | | Java | java | @abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink | | | | Python | python | @abstr_hyperlink   
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
@abstr_hyperlink   
@abstr_hyperlink | @abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink | @abstr_hyperlink | | Objective-C | objectivec | | @abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink | | | C# | csharp | @abstr_hyperlink | | @abstr_hyperlink   
@abstr_hyperlink | | JavaScript | js | @abstr_hyperlink | @abstr_hyperlink | | | Ruby | ruby | @abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink | @abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink | | | Go | @abstr_hyperlink | | | | | PHP | php | @abstr_hyperlink   
@abstr_hyperlink | @abstr_hyperlink   
@abstr_hyperlink | | | Dart | @abstr_hyperlink | @abstr_hyperlink | | |

## Quick Start

The best way to learn how to use protobuf is to follow the tutorials in our developer guide:

https://developers.google.com/protocol-buffers/docs/tutorials

If you want to learn from code examples, take a look at the examples in the examples directory.

## Documentation

The complete documentation for Protocol Buffers is available via the web at:

https://developers.google.com/protocol-buffers/
