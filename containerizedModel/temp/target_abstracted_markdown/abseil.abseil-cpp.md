# Abseil - C++ Common Libraries

The repository contains the Abseil C++ library code. Abseil is an open-source collection of C++ code (compliant to C++ @abstr_number ) designed to augment the C++ standard library.

## Table of Contents

  * About Abseil
  * Quickstart
  * Building Abseil
  * Codemap
  * License
  * Links



## About Abseil

Abseil is an open-source collection of C++ library code designed to augment the C++ standard library. The Abseil library code is collected from Google's own C++ code base, has been extensively tested and used in production, and is the same code we depend on in our daily coding lives.

In some cases, Abseil provides pieces missing from the C++ standard; in others, Abseil provides alternatives to the standard for special needs we've found through usage in the Google code base. We denote those cases clearly within the library code we provide you.

Abseil is not meant to be a competitor to the standard library; we've just found that many of these utilities serve a purpose within our code base, and we now want to provide those resources to the C++ community as a whole.

## Quickstart

If you want to just get started, make sure you at least run through the @abstr_hyperlink . The Quickstart contains information about setting up your development environment, downloading the Abseil code, running tests, and getting a simple binary working.

## Building Abseil

@abstr_hyperlink is the official build system for Abseil, which is supported on most major platforms (Linux, Windows, MacOS, for example) and compilers. See the @abstr_hyperlink for more information on building Abseil using the Bazel build system.

If you require CMake support, please check the CMake build instructions.

## Codemap

Abseil contains the following C++ library components:

  * base Abseil Fundamentals   
The `base` library contains initialization code and other code which all other Abseil code depends on. Code within `base` may not depend on any other code (other than the C++ standard library).
  * algorithm   
The `algorithm` library contains additions to the C++ `<algorithm>` library and container-based versions of such algorithms.
  * container   
The `container` library contains additional STL-style containers, including Abseil's unordered "Swiss table" containers.
  * debugging   
The `debugging` library contains code useful for enabling leak checks, and stacktrace and symbolization utilities.
  * hash   
The `hash` library contains the hashing framework and default hash functor implementations for hashable types in Abseil.
  * memory   
The `memory` library contains C++ @abstr_number -compatible versions of `std::make_unique()` and related memory management facilities.
  * meta   
The `meta` library contains C++ @abstr_number -compatible versions of type checks available within C++ @abstr_number and C++ @abstr_number versions of the C++ `<type_traits>` library.
  * numeric   
The `numeric` library contains C++ @abstr_number -compatible @abstr_number -bit integers.
  * strings   
The `strings` library contains a variety of strings routines and utilities, including a C++ @abstr_number -compatible version of the C++ @abstr_number `std::string_view` type.
  * synchronization   
The `synchronization` library contains concurrency primitives (Abseil's `absl::Mutex` class, an alternative to `std::mutex`) and a variety of synchronization abstractions.
  * time   
The `time` library contains abstractions for computing with absolute points in time, durations of time, and formatting and parsing time within time zones.
  * types   
The `types` library contains non-container utility types, like a C++ @abstr_number -compatible version of the C++ @abstr_number `std::optional` type.
  * utility   
The `utility` library contains utility and helper code.



## License

The Abseil C++ library is licensed under the terms of the Apache license. See LICENSE for more information.

## Links

For more information about Abseil:

  * Consult our @abstr_hyperlink 
  * Read @abstr_hyperlink to understand our design philosophy.
  * Peruse our @abstr_hyperlink to understand both what we promise to you, and what we expect of you in return.


