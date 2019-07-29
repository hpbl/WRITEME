# {fmt}

.. image:: https://travis-ci.org/fmtlib/fmt.png?branch=master :target: https://travis-ci.org/fmtlib/fmt

.. image:: https://ci.appveyor.com/api/projects/status/ehjkiefde @abstr_number gucy @abstr_number v :target: https://ci.appveyor.com/project/vitaut/fmt

.. image:: https://img.shields.io/badge/stackoverflow-fmt-blue.svg :alt: Ask questions at StackOverflow with the tag fmt :target: http://stackoverflow.com/questions/tagged/fmt

**{fmt}** is an open-source formatting library for C++. It can be used as a safe and fast alternative to (s)printf and iostreams.

`Documentation <https://fmt.dev/latest/>`__

Q&A: ask questions on `StackOverflow with the tag fmt <http://stackoverflow.com/questions/tagged/fmt>`_.

## Features

  * Replacement-based `format API <https://fmt.dev/dev/api.html>`_ with positional arguments for localization.
  * `Format string syntax <https://fmt.dev/dev/syntax.html>`_ similar to the one of `str.format <https://docs.python.org/ @abstr_number /library/stdtypes.html#str.format>`_ in Python.
  * Safe `printf implementation <https://fmt.dev/latest/api.html#printf-formatting>`_ including the POSIX extension for positional arguments.
  * Implementation of `C++ @abstr_number std::format <https://fmt.dev/Text% @abstr_number Formatting.html>`__.
  * Support for user-defined types.
  * High performance: faster than common standard library implementations of `printf <http://en.cppreference.com/w/cpp/io/c/fprintf>`_ and iostreams. See `Speed tests`_ and `Fast integer to string conversion in C++ <http://zverovich.net/ @abstr_number / @abstr_number / @abstr_number /integer-to-string-conversion-in-cplusplus.html>`_.
  * Small code size both in terms of source code (the minimum configuration consists of just three header files, `core.h`, `format.h` and `format-inl.h`) and compiled code. See `Compile time and code bloat`_.
  * Reliability: the library has an extensive set of `unit tests <https://github.com/fmtlib/fmt/tree/master/test>`_.
  * Safety: the library is fully type safe, errors in format strings can be reported at compile time, automatic memory management prevents buffer overflow errors.
  * Ease of use: small self-contained code base, no external dependencies, permissive BSD `license <https://github.com/fmtlib/fmt/blob/master/LICENSE.rst>`_
  * `Portability <https://fmt.dev/latest/index.html#portability>`_ with consistent output across platforms and support for older compilers.
  * Clean warning-free codebase even on high warning levels (`-Wall -Wextra -pedantic`).
  * Support for wide strings.
  * Optional header-only configuration enabled with the `FMT_HEADER_ONLY` macro.



See the `documentation <https://fmt.dev/latest/>`_ for more details.

## Examples

Print `Hello, world!` to `stdout`:

.. code:: c++
    
    
    fmt::print("Hello, {}!", "world");  // Python-like format string syntax
    fmt::printf("Hello, %s!", "world"); // printf format string syntax
    

Format a string and use positional arguments:

.. code:: c++
    
    
    std::string s = fmt::format("I'd rather be { @abstr_number } than { @abstr_number }.", "right", "happy");
    // s == "I'd rather be happy than right."
    

Check a format string at compile time:

.. code:: c++
    
    
    // test.cc
    #define FMT_STRING_ALIAS  @abstr_number 
    #include <fmt/format.h>
    std::string s = format(fmt("{ @abstr_number }"),  @abstr_number );
    

.. code::
    
    
    $ c++ -Iinclude -std=c++ @abstr_number  test.cc
    ...
    test.cc: @abstr_number : @abstr_number : note: in instantiation of function template specialization 'fmt::v @abstr_number ::format<S, int>' requested here
    std::string s = format(fmt("{ @abstr_number }"),  @abstr_number );
                    ^
    include/fmt/core.h: @abstr_number : @abstr_number : note: non-constexpr function 'on_error' cannot be used in a constant expression
        ErrorHandler::on_error(message);
                      ^
    include/fmt/format.h: @abstr_number : @abstr_number : note: in call to '&checker.context_->on_error(&"argument index out of range"[ @abstr_number ])'
          context_.on_error("argument index out of range");
                   ^
    

Use {fmt} as a safe portable replacement for `itoa` (`godbolt <https://godbolt.org/g/NXmpU @abstr_number >`_):

.. code:: c++
    
    
    fmt::memory_buffer buf;
    format_to(buf, "{}",  @abstr_number );    // replaces itoa( @abstr_number , buffer,  @abstr_number )
    format_to(buf, "{:x}",  @abstr_number );  // replaces itoa( @abstr_number , buffer,  @abstr_number )
    // access the string with to_string(buf) or buf.data()
    

Format objects of user-defined types via a simple `extension API <https://fmt.dev/latest/api.html#formatting-user-defined-types>`_:

.. code:: c++
    
    
    #include "fmt/format.h"
    
    struct date {
      int year, month, day;
    };
    
    template <>
    struct fmt::formatter<date> {
      template <typename ParseContext>
      constexpr auto parse(ParseContext &ctx) { return ctx.begin(); }
    
      template <typename FormatContext>
      auto format(const date &d, FormatContext &ctx) {
        return format_to(ctx.out(), "{}-{}-{}", d.year, d.month, d.day);
      }
    };
    
    std::string s = fmt::format("The date is {}", date{ @abstr_number ,  @abstr_number ,  @abstr_number });
    // s == "The date is  @abstr_number - @abstr_number - @abstr_number "
    

Create your own functions similar to `format <https://fmt.dev/latest/api.html#format>`_ and `print <https://fmt.dev/latest/api.html#print>`_ which take arbitrary arguments (`godbolt <https://godbolt.org/g/MHjHVf>`_):

.. code:: c++
    
    
    // Prints formatted error message.
    void vreport_error(const char *format, fmt::format_args args) {
      fmt::print("Error: ");
      fmt::vprint(format, args);
    }
    template <typename... Args>
    void report_error(const char *format, const Args & ... args) {
      vreport_error(format, fmt::make_format_args(args...));
    }
    
    report_error("file not found: {}", path);
    

Note that `vreport_error` is not parameterized on argument types which can improve compile times and reduce code size compared to a fully parameterized version.

## Benchmarks

Speed tests ~~~~~~~~~~~

================= ============= =========== Library Method Run Time, s ================= ============= =========== libc printf @abstr_number . @abstr_number libc++ std::ostream @abstr_number . @abstr_number {fmt} @abstr_number f @abstr_number fmt::print @abstr_number . @abstr_number tinyformat @abstr_number . @abstr_number . @abstr_number tfm::printf @abstr_number . @abstr_number Boost Format @abstr_number . @abstr_number boost::format @abstr_number . @abstr_number Folly Format folly::format @abstr_number . @abstr_number ================= ============= ===========

{fmt} is the fastest of the benchmarked methods, ~ @abstr_number % faster than `printf`.

The above results were generated by building `tinyformat_test.cpp` on macOS @abstr_number . @abstr_number . @abstr_number with `clang++ -O @abstr_number -DSPEED_TEST -DHAVE_FORMAT`, and taking the best of three runs. In the test, the format string `"% @abstr_number . @abstr_number f:% @abstr_number d:%+g:%s:%p:%c:%%\n"` or equivalent is filled @abstr_number , @abstr_number , @abstr_number times with output sent to `/dev/null`; for further details refer to the `source <https://github.com/fmtlib/format-benchmark/blob/master/tinyformat_test.cpp>`_.

{fmt} is @abstr_number x faster than `std::ostringstream` and `sprintf` on floating-point formatting (`dtoa-benchmark <https://github.com/fmtlib/dtoa-benchmark>`_) and as fast as `double-conversion <https://github.com/google/double-conversion>`_:

.. image:: https://user-images.githubusercontent.com/ @abstr_number / @abstr_number - @abstr_number fe @abstr_number c @abstr_number - @abstr_number e @abstr_number - @abstr_number e @abstr_number - @abstr_number bde- @abstr_number d @abstr_number e @abstr_number c @abstr_number .jpg :target: https://fmt.dev/unknown_mac @abstr_number _clang @abstr_number . @abstr_number .html

Compile time and code bloat ~~~~~~~~~~~~~~~~~~~~~~~~~~~

The script `bloat-test.py <https://github.com/fmtlib/format-benchmark/blob/master/bloat-test.py>`_ from `format-benchmark <https://github.com/fmtlib/format-benchmark>`_ tests compile time and code bloat for nontrivial projects. It generates @abstr_number translation units and uses `printf()` or its alternative five times in each to simulate a medium sized project. The resulting executable size and compile time (Apple LLVM version @abstr_number . @abstr_number . @abstr_number (clang- @abstr_number . @abstr_number . @abstr_number ), macOS Sierra, best of three) is shown in the following tables.

**Optimized build (-O @abstr_number )**

============= =============== ==================== ================== Method Compile Time, s Executable size, KiB Stripped size, KiB ============= =============== ==================== ================== printf @abstr_number . @abstr_number @abstr_number @abstr_number printf+string @abstr_number . @abstr_number @abstr_number @abstr_number iostreams @abstr_number . @abstr_number @abstr_number @abstr_number {fmt} @abstr_number . @abstr_number @abstr_number @abstr_number tinyformat @abstr_number . @abstr_number @abstr_number @abstr_number Boost Format @abstr_number . @abstr_number @abstr_number @abstr_number Folly Format @abstr_number . @abstr_number @abstr_number @abstr_number ============= =============== ==================== ==================

As you can see, {fmt} has @abstr_number % less overhead in terms of resulting binary code size compared to iostreams and comes pretty close to `printf`. Boost Format and Folly Format have the largest overheads.

`printf+string` is the same as `printf` but with extra `<string>` include to measure the overhead of the latter.

**Non-optimized build**

============= =============== ==================== ================== Method Compile Time, s Executable size, KiB Stripped size, KiB ============= =============== ==================== ================== printf @abstr_number . @abstr_number @abstr_number @abstr_number printf+string @abstr_number . @abstr_number @abstr_number @abstr_number iostreams @abstr_number . @abstr_number @abstr_number @abstr_number {fmt} @abstr_number . @abstr_number @abstr_number @abstr_number tinyformat @abstr_number . @abstr_number @abstr_number @abstr_number Boost Format @abstr_number . @abstr_number @abstr_number @abstr_number Folly Format @abstr_number . @abstr_number @abstr_number @abstr_number ============= =============== ==================== ==================

`libc`, `lib(std)c++` and `libfmt` are all linked as shared libraries to compare formatting function overhead only. Boost Format and tinyformat are header-only libraries so they don't provide any linkage options.

Running the tests ~~~~~~~~~~~~~~~~~

Please refer to `Building the library`__ for the instructions on how to build the library and run the unit tests.

__ https://fmt.dev/latest/usage.html#building-the-library

Benchmarks reside in a separate repository, `format-benchmarks <https://github.com/fmtlib/format-benchmark>`_, so to run the benchmarks you first need to clone this repository and generate Makefiles with CMake::
    
    
    $ git clone --recursive https://github.com/fmtlib/format-benchmark.git
    $ cd format-benchmark
    $ cmake .
    

Then you can run the speed test::
    
    
    $ make speed-test
    

or the bloat test::
    
    
    $ make bloat-test
    

## Projects using this library

  * `@abstr_number A.D. <http://play @abstr_number ad.com/>`_: A free, open-source, cross-platform real-time strategy game

  * `AMPL/MP <https://github.com/ampl/mp>`_: An open-source library for mathematical programming

  * `AvioBook <https://www.aviobook.aero/en>`_: A comprehensive aircraft operations suite

  * `Celestia <https://celestia.space/>`_: Real-time @abstr_number D visualization of space

  * `Ceph <https://ceph.com/>`_: A scalable distributed storage system

  * `CUAUV <http://cuauv.org/>`_: Cornell University's autonomous underwater vehicle

  * `HarpyWar/pvpgn <https://github.com/pvpgn/pvpgn-server>`_: Player vs Player Gaming Network with tweaks

  * `KBEngine <http://kbengine.org/>`_: An open-source MMOG server engine

  * `Keypirinha <http://keypirinha.com/>`_: A semantic launcher for Windows

  * `Kodi <https://kodi.tv/>`_ (formerly xbmc): Home theater software

  * `Lifeline <https://github.com/peter-clark/lifeline>`_: A @abstr_number D game

  * `Drake <http://drake.mit.edu/>`_: A planning, control, and analysis toolbox for nonlinear dynamical systems (MIT)

  * `Envoy <https://lyft.github.io/envoy/>`_: C++ L @abstr_number proxy and communication bus (Lyft)

  * `FiveM <https://fivem.net/>`_: a modification framework for GTA V

  * `MongoDB <https://mongodb.com/>`_: Distributed document database

  * `MongoDB Smasher <https://github.com/duckie/mongo_smasher>`_: A small tool to generate randomized datasets

  * `OpenSpace <http://openspaceproject.com/>`_: An open-source astrovisualization framework

  * `PenUltima Online (POL) <http://www.polserver.com/>`_: An MMO server, compatible with most Ultima Online clients

  * `quasardb <https://www.quasardb.net/>`_: A distributed, high-performance, associative database

  * `readpe <https://bitbucket.org/sys_dev/readpe>`_: Read Portable Executable

  * `redis-cerberus <https://github.com/HunanTV/redis-cerberus>`_: A Redis cluster proxy

  * `rpclib <http://rpclib.net/>`_: A modern C++ msgpack-RPC server and client library

  * `Saddy <https://github.com/mamontov-cpp/saddy-graphics-engine- @abstr_number d>`_: Small crossplatform @abstr_number D graphic engine

  * `Salesforce Analytics Cloud <http://www.salesforce.com/analytics-cloud/overview/>`_: Business intelligence software

  * `Scylla <http://www.scylladb.com/>`_: A Cassandra-compatible NoSQL data store that can handle @abstr_number million transactions per second on a single server

  * `Seastar <http://www.seastar-project.org/>`_: An advanced, open-source C++ framework for high-performance server applications on modern hardware

  * `spdlog <https://github.com/gabime/spdlog>`_: Super fast C++ logging library

  * `Stellar <https://www.stellar.org/>`_: Financial platform

  * `Touch Surgery <https://www.touchsurgery.com/>`_: Surgery simulator

  * `TrinityCore <https://github.com/TrinityCore/TrinityCore>`_: Open-source MMORPG framework




`More... <https://github.com/search?q=cppformat&type=Code>`_

If you are aware of other projects using this library, please let me know by `email <mailto:victor.zverovich@gmail.com>`_ or by submitting an `issue <https://github.com/fmtlib/fmt/issues>`_.

## Motivation

So why yet another formatting library?

There are plenty of methods for doing this task, from standard ones like the printf family of function and iostreams to Boost Format and FastFormat libraries. The reason for creating a new library is that every existing solution that I found either had serious issues or didn't provide all the features I needed.

printf ~~~~~~

The good thing about `printf` is that it is pretty fast and readily available being a part of the C standard library. The main drawback is that it doesn't support user-defined types. `printf` also has safety issues although they are somewhat mitigated with `__attribute__ ((format (printf, ...)) <http://gcc.gnu.org/onlinedocs/gcc/Function-Attributes.html>`_ in GCC. There is a POSIX extension that adds positional arguments required for `i @abstr_number n <https://en.wikipedia.org/wiki/Internationalization_and_localization>`_ to `printf` but it is not a part of C @abstr_number and may not be available on some platforms.

iostreams ~~~~~~~~~

The main issue with iostreams is best illustrated with an example:

.. code:: c++
    
    
    std::cout << std::setprecision( @abstr_number ) << std::fixed <<  @abstr_number . @abstr_number  << "\n";
    

which is a lot of typing compared to printf:

.. code:: c++
    
    
    printf("%. @abstr_number f\n",  @abstr_number . @abstr_number );
    

Matthew Wilson, the author of FastFormat, called this "chevron hell". iostreams don't support positional arguments by design.

The good part is that iostreams support user-defined types and are safe although error handling is awkward.

Boost Format ~~~~~~~~~~~~

This is a very powerful library which supports both `printf`-like format strings and positional arguments. Its main drawback is performance. According to various benchmarks it is much slower than other methods considered here. Boost Format also has excessive build times and severe code bloat issues (see `Benchmarks`_).

FastFormat ~~~~~~~~~~

This is an interesting library which is fast, safe and has positional arguments. However it has significant limitations, citing its author:
    
    
    Three features that have no hope of being accommodated within the
    current design are:
    
    * Leading zeros (or any other non-space padding)
    * Octal/hexadecimal encoding
    * Runtime width/alignment specification
    

It is also quite big and has a heavy dependency, STLSoft, which might be too restrictive for using it in some projects.

Loki SafeFormat ~~~~~~~~~~~~~~~

SafeFormat is a formatting library which uses `printf`-like format strings and is type safe. It doesn't support user-defined types or positional arguments and makes unconventional use of `operator()` for passing format arguments.

Tinyformat ~~~~~~~~~~

This library supports `printf`-like format strings and is very small . It doesn't support positional arguments and wrapping it in C++ @abstr_number is somewhat difficult. Tinyformat relies on iostreams which limits its performance.

Boost Spirit.Karma ~~~~~~~~~~~~~~~~~~

This is not really a formatting library but I decided to include it here for completeness. As iostreams, it suffers from the problem of mixing verbatim text with arguments. The library is pretty fast, but slower on integer formatting than `fmt::format_int` on Karma's own benchmark, see `Fast integer to string conversion in C++ <http://zverovich.net/ @abstr_number / @abstr_number / @abstr_number /integer-to-string-conversion-in-cplusplus.html>`_.

## FAQ

Q: how can I capture formatting arguments and format them later?

A: use `std::tuple`:

.. code:: c++

template  auto capture(const Args&... args) { return std::make_tuple(args...); }

auto print_message = { fmt::print(args...); };

// Capture and store arguments: auto args = capture("{} {}", @abstr_number , "foo"); // Do formatting: std::apply(print_message, args);

## License

{fmt} is distributed under the BSD `license <https://github.com/fmtlib/fmt/blob/master/LICENSE.rst>`_.

The `Format String Syntax <https://fmt.dev/latest/syntax.html>`_ section in the documentation is based on the one from Python `string module documentation <https://docs.python.org/ @abstr_number /library/string.html#module-string>`_ adapted for the current library. For this reason the documentation is distributed under the Python Software Foundation license available in `doc/python-license.txt <https://raw.github.com/fmtlib/fmt/master/doc/python-license.txt>`_. It only applies if you distribute the documentation of fmt.

## Acknowledgments

The {fmt} library is maintained by Victor Zverovich (`vitaut <https://github.com/vitaut>`_) and Jonathan Müller (`foonathan <https://github.com/foonathan>`_) with contributions from many other people. See `Contributors <https://github.com/fmtlib/fmt/graphs/contributors>`_ and `Releases <https://github.com/fmtlib/fmt/releases>`_ for some of the names. Let us know if your contribution is not listed or mentioned incorrectly and we'll make it right.

The benchmark section of this readme file and the performance tests are taken from the excellent `tinyformat <https://github.com/c @abstr_number f/tinyformat>`_ library written by Chris Foster. Boost Format library is acknowledged transitively since it had some influence on tinyformat. Some ideas used in the implementation are borrowed from `Loki <http://loki-lib.sourceforge.net/>`_ SafeFormat and `Diagnostic API <http://clang.llvm.org/doxygen/classclang_ @abstr_number _ @abstr_number Diagnostic.html>`_ in `Clang <http://clang.llvm.org/>`_. Format string syntax and the documentation are based on Python's `str.format <http://docs.python.org/ @abstr_number /library/stdtypes.html#str.format>`_. Thanks `Doug Turnbull <https://github.com/softwaredoug>`_ for his valuable comments and contribution to the design of the type-safe API and `Gregory Czajkowski <https://github.com/gcflymoto>`_ for implementing binary formatting. Thanks `Ruslan Baratov <https://github.com/ruslo>`_ for comprehensive `comparison of integer formatting algorithms <https://github.com/ruslo/int-dec-format-tests>`_ and useful comments regarding performance, `Boris Kaul <https://github.com/localvoid>`_ for `C++ counting digits benchmark <https://github.com/localvoid/cxx-benchmark-count-digits>`_. Thanks to `CarterLi <https://github.com/CarterLi>`_ for contributing various improvements to the code.
