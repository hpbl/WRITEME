Snappy, a fast compressor/decompressor.

# Introduction

Snappy is a compression/decompression library. It does not aim for maximum compression, or compatibility with any other compression library; instead, it aims for very high speeds and reasonable compression. For instance, compared to the fastest mode of zlib, Snappy is an order of magnitude faster for most inputs, but the resulting compressed files are anywhere from @abstr_number % to @abstr_number % bigger. (For more information, see "Performance", below.)

Snappy has the following properties:

  * Fast: Compression speeds at @abstr_number MB/sec and beyond, with no assembler code. See "Performance" below.
  * Stable: Over the last few years, Snappy has compressed and decompressed petabytes of data in Google's production environment. The Snappy bitstream format is stable and will not change between versions.
  * Robust: The Snappy decompressor is designed not to crash in the face of corrupted or malicious input.
  * Free and open source software: Snappy is licensed under a BSD-type license. For more information, see the included COPYING file.



Snappy has previously been called "Zippy" in some Google presentations and the like.

# Performance

Snappy is intended to be fast. On a single core of a Core i @abstr_number processor in @abstr_number -bit mode, it compresses at about @abstr_number MB/sec or more and decompresses at about @abstr_number MB/sec or more. (These numbers are for the slowest inputs in our benchmark suite; others are much faster.) In our tests, Snappy usually is faster than algorithms in the same class (e.g. LZO, LZF, QuickLZ, etc.) while achieving comparable compression ratios.

Typical compression ratios (based on the benchmark suite) are about @abstr_number . @abstr_number - @abstr_number . @abstr_number x for plain text, about @abstr_number - @abstr_number x for HTML, and of course @abstr_number . @abstr_number x for JPEGs, PNGs and other already-compressed data. Similar numbers for zlib in its fastest mode are @abstr_number . @abstr_number - @abstr_number . @abstr_number x, @abstr_number - @abstr_number x and @abstr_number . @abstr_number x, respectively. More sophisticated algorithms are capable of achieving yet higher compression rates, although usually at the expense of speed. Of course, compression ratio will vary significantly with the input.

Although Snappy should be fairly portable, it is primarily optimized for @abstr_number -bit x @abstr_number -compatible processors, and may run slower in other environments. In particular:

  * Snappy uses @abstr_number -bit operations in several places to process more data at once than would otherwise be possible.
  * Snappy assumes unaligned @abstr_number and @abstr_number -bit loads and stores are cheap. On some platforms, these must be emulated with single-byte loads and stores, which is much slower.
  * Snappy assumes little-endian throughout, and needs to byte-swap data in several places if running on a big-endian platform.



Experience has shown that even heavily tuned code can be improved. Performance optimizations, whether for @abstr_number -bit x @abstr_number or other platforms, are of course most welcome; see "Contact", below.

# Building

You need the CMake version specified in CMakeLists.txt or later to build:

@abstr_code_section 

# Usage

Note that Snappy, both the implementation and the main interface, is written in C++. However, several third-party bindings to other languages are available; see the home page for more information. Also, if you want to use Snappy from C code, you can use the included C bindings in snappy-c.h.

To use Snappy from your own C++ program, include the file "snappy.h" from your calling file, and link against the compiled library.

There are many ways to call Snappy, but the simplest possible is

`c++ snappy::Compress(input.data(), input.size(), &output); @abstr_code_section c++ snappy::Uncompress(input.data(), input.size(), &output); `

where "input" and "output" are both instances of std::string.

There are other interfaces that are more flexible in various ways, including support for custom (non-array) input sources. See the header file for more information.

# Tests and benchmarks

When you compile Snappy, snappy_unittest is compiled in addition to the library itself. You do not need it to use the compressor from your own library, but it contains several useful components for Snappy development.

First of all, it contains unit tests, verifying correctness on your machine in various scenarios. If you want to change or optimize Snappy, please run the tests to verify you have not broken anything. Note that if you have the Google Test library installed, unit test behavior (especially failures) will be significantly more user-friendly. You can find Google Test at

https://github.com/google/googletest

You probably also want the gflags library for handling of command-line flags; you can find it at

https://gflags.github.io/gflags/

In addition to the unit tests, snappy contains microbenchmarks used to tune compression and decompression performance. These are automatically run before the unit tests, but you can disable them using the flag \--run_microbenchmarks=false if you have gflags installed (otherwise you will need to edit the source).

Finally, snappy can benchmark Snappy against a few other compression libraries (zlib, LZO, LZF, and QuickLZ), if they were detected at configure time. To benchmark using a given file, give the compression algorithm you want to test Snappy against (e.g. --zlib) and then a list of one or more file names on the command line. The testdata/ directory contains the files used by the microbenchmark, which should provide a reasonably balanced starting point for benchmarking. (Note that baddata[ @abstr_number - @abstr_number ].snappy are not intended as benchmarks; they are used to verify correctness in the presence of corrupted data in the unit test.)

# Contact

Snappy is distributed through GitHub. For the latest version, a bug tracker, and other information, see https://github.com/google/snappy.
