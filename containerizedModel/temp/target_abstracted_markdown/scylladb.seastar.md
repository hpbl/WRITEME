# Seastar

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Introduction

SeaStar is an event-driven framework allowing you to write non-blocking, asynchronous code in a relatively straightforward manner (once understood). It is based on @abstr_hyperlink .

## Building Seastar

For more details and alternative work-flows, read HACKING.md.

Assuming that you would like to use system packages (RPMs or DEBs) for Seastar's dependencies, first install them:

@abstr_code_section 

then configure (in "release" mode):

@abstr_code_section then compile:

@abstr_code_section 

If you're missing a dependency of Seastar, then it is possible to have the configuration process fetch a version of the dependency locally for development.

For example, to fetch `fmt` locally, configure Seastar like this:

@abstr_code_section 

`--cook` can be repeated many times for selecting multiple dependencies.

## Build modes

The configure.py script is a wrapper around cmake. The --mode argument maps to CMAKE_BUILD_TYPE, and supports the following modes
    
    
          | CMake mode        | Debug info | Optimizations  | Sanitizers   | Allocator | Checks   | Use for                                |
    

\---------+-------------------+------------+----------------+--------------+-----------+----------+----------------------------------------| debug | Debug | Yes | -O @abstr_number | ASAN, UBSAN | System | All | gdb | release | RelWithDebInfo | Yes | -O @abstr_number | None | Seastar | Asserts | production | dev | Dev (Custom) | No | -O @abstr_number | None | Seastar | Asserts | build and test cycle | sanitize | Sanitize (Custom) | Yes | -Os | ASAN, UBSAN | System | All | second level of tests, track down bugs |

Note that seastar is more sensitive to allocators and optimizations than usual. A quick rule of the thumb of the relative performances is that release is @abstr_number times faster than dev, @abstr_number times faster than sanitize and @abstr_number times faster than debug.

## Using Seastar from its build directory (without installation)

It's possible to consume Seastar directly from its build directory with CMake or `pkg-config`.

We'll assume that the Seastar repository is located in a directory at `$seastar_dir`.

Via `pkg-config`:

@abstr_code_section 

and with CMake using the `Seastar` package:

`CMakeLists.txt` for `my_app`:

@abstr_code_section 

@abstr_code_section 

The `CMAKE_PREFIX_PATH` values ensure that CMake can locate Seastar and its compiled submodules. The `CMAKE_MODULE_PATH` value ensures that CMake can uses Seastar's CMake scripts for locating its dependencies.

## Using an installed Seastar

You can also consume Seastar after it has been installed to the file-system.

**Important:**

  * Seastar works with a customized version of DPDK, so by default builds and installs the DPDK submodule to `$build_dir/_cooking/installed`



First, configure the installation path:

@abstr_code_section 

then run the `install` target:

@abstr_code_section 

then consume it from `pkg-config`:

@abstr_code_section 

or consume it with the same `CMakeLists.txt` as before but with a simpler CMake invocation:

@abstr_code_section 

(If Seastar has not been installed to a "standard" location like `/usr` or `/usr/local`, then you can invoke CMake with `-DCMAKE_PREFIX_PATH=$my_install_root`.)

There are also instructions for building on any host that supports Docker.

Use of the @abstr_hyperlink is optional.

#### Seastar's C++ dialect: C++ @abstr_number or C++ @abstr_number

Seastar supports both C++ @abstr_number , and C++ @abstr_number . Some newer features and optimizations may only be available to C++ @abstr_number , so users are encouraged to use C++ @abstr_number when possible. By default Seastar builds with the C++ @abstr_number dialect, but a C++ @abstr_number compilation can be requested with a `./configure.py --c++-dialect=gnu++ @abstr_number` or, if using CMake directly, by setting on the `Seastar_CXX_DIALECT` CMake variable to `"gnu++ @abstr_number "`.

However, by default Seastar uses C++ @abstr_number -compatible types such as `std::experimental::optional<>`, `boost::variant` and `std::experimental::string_view`, both internally and in its public API, thus forcing them on C++ @abstr_number projects. To fix this, Seastar respects the value of the preprocessor variable `SEASTAR_USE_STD_OPTIONAL_VARIANT_STRINGVIEW`, which changes those types to their `stdlib` incarnation, and allows seemless use of C++ @abstr_number . Usage of this option requires an updated compiler, such as GCC @abstr_number . @abstr_number . @abstr_number - @abstr_number on Fedora.

## Getting started

There is a mini tutorial and a more comprehensive one.

The documentation is available on the @abstr_hyperlink .

## Resources

Ask questions and post patches on the development mailing list. Subscription information and archives are available @abstr_hyperlink , or just send an email to seastar-dev@googlegroups.com.

Information can be found on the main @abstr_hyperlink .

File bug reports on the project @abstr_hyperlink .

## The Native TCP/IP Stack

Seastar comes with its own userspace TCP/IP stack for better performance.

## Recommended hardware configuration for SeaStar

  * CPUs - As much as you need. SeaStar is highly friendly for multi-core and NUMA
  * NICs - As fast as possible, we recommend @abstr_number G or @abstr_number G cards. It's possible to use @abstr_number G too but you may be limited by their capacity. In addition, the more hardware queue per cpu the better for SeaStar. Otherwise we have to emulate that in software.
  * Disks - Fast SSDs with high number of IOPS.
  * Client machines - Usually a single client machine can't load our servers. Both memaslap (memcached) and WRK (httpd) cannot over load their matching server counter parts. We recommend running the client on different machine than the servers and use several of them.


