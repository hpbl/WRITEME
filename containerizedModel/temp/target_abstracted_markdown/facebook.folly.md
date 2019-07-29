## Folly: Facebook Open-source Library

@abstr_hyperlink 

### What is `folly`?

Folly (acronymed loosely after Facebook Open Source Library) is a library of C++ @abstr_number components designed with practicality and efficiency in mind. **Folly contains a variety of core library components used extensively at Facebook**. In particular, it's often a dependency of Facebook's other open source C++ efforts and place where those projects can share code.

It complements (as opposed to competing against) offerings such as Boost and of course `std`. In fact, we embark on defining our own component only when something we need is either not available, or does not meet the needed performance profile. We endeavor to remove things from folly if or when `std` or Boost obsoletes them.

Performance concerns permeate much of Folly, sometimes leading to designs that are more idiosyncratic than they would otherwise be (see e.g. `PackedSyncPtr.h`, `SmallLocks.h`). Good performance at large scale is a unifying theme in all of Folly.

### Logical Design

Folly is a collection of relatively independent components, some as simple as a few symbols. There is no restriction on internal dependencies, meaning that a given folly module may use any other folly components.

All symbols are defined in the top-level namespace `folly`, except of course macros. Macro names are ALL_UPPERCASE and should be prefixed with `FOLLY_`. Namespace `folly` defines other internal namespaces such as `internal` or `detail`. User code should not depend on symbols in those namespaces.

Folly has an `experimental` directory as well. This designation connotes primarily that we feel the API may change heavily over time. This code, typically, is still in heavy use and is well tested.

### Physical Design

At the top level Folly uses the classic "stuttering" scheme `folly/folly` used by Boost and others. The first directory serves as an installation root of the library (with possible versioning a la `folly- @abstr_number . @abstr_number /`), and the second is to distinguish the library when including files, e.g. `#include <folly/FBString.h>`.

The directory structure is flat (mimicking the namespace structure), i.e. we don't have an elaborate directory hierarchy (it is possible this will change in future versions). The subdirectory `experimental` contains files that are used inside folly and possibly at Facebook but not considered stable enough for client use. Your code should not use files in `folly/experimental` lest it may break when you update Folly.

The `folly/folly/test` subdirectory includes the unittests for all components, usually named `ComponentXyzTest.cpp` for each `ComponentXyz.*`. The `folly/folly/docs` directory contains documentation.

### What's in it?

Because of folly's fairly flat structure, the best way to see what's in it is to look at the headers in @abstr_hyperlink . You can also check the docs folder for documentation, starting with the overview.

Folly is published on GitHub at https://github.com/facebook/folly

### Build Notes

#### Dependencies

folly requires gcc @abstr_number . @abstr_number + and a version of boost compiled with C++ @abstr_number support.

googletest is required to build and run folly's tests. You can download it from https://github.com/google/googletest/archive/release- @abstr_number . @abstr_number . @abstr_number .tar.gz The following commands can be used to download and install it:

@abstr_code_section 

#### Finding dependencies in non-default locations

If you have boost, gtest, or other dependencies installed in a non-default location, you can use the `CMAKE_INCLUDE_PATH` and `CMAKE_LIBRARY_PATH` variables to make CMAKE look also look for header files and libraries in non-standard locations. For example, to also search the directories `/alt/include/path @abstr_number` and `/alt/include/path @abstr_number` for header files and the directories `/alt/lib/path @abstr_number` and `/alt/lib/path @abstr_number` for libraries, you can invoke `cmake` as follows:

@abstr_code_section 

#### Ubuntu @abstr_number . @abstr_number LTS

The following packages are required (feel free to cut and paste the apt-get command below):

@abstr_code_section 

If advanced debugging functionality is required, use:

@abstr_code_section 

In the folly directory (e.g. the checkout root or the archive unpack root), run: @abstr_code_section 

#### OS X (Homebrew)

folly is available as a Formula and releases may be built via `brew install folly`.

You may also use `folly/build/bootstrap-osx-homebrew.sh` to build against `master`:

@abstr_code_section 

This will create a build directory `_build` in the top-level.

#### OS X (MacPorts)

Install the required packages from MacPorts:

@abstr_code_section 

Download and install double-conversion:

@abstr_code_section 

Download and install folly with the parameters listed below:

@abstr_code_section 

#### Windows (Vcpkg)

folly is available in @abstr_hyperlink and releases may be built via `vcpkg install folly:x @abstr_number -windows`.

You may also use `vcpkg install folly:x @abstr_number -windows --head` to build against `master`.

#### Other Linux distributions

  * double-conversion (https://github.com/google/double-conversion)

Download and build double-conversion. You may need to tell cmake where to find it.

[double-conversion/] `ln -s src double-conversion`

[folly/] `mkdir build && cd build` [folly/build/] `cmake "-DCMAKE_INCLUDE_PATH=$DOUBLE_CONVERSION_HOME/include" "-DCMAKE_LIBRARY_PATH=$DOUBLE_CONVERSION_HOME/lib" ..`

[folly/build/] `make`

  * additional platform specific dependencies:

Fedora >= @abstr_number @abstr_number -bit (last tested on Fedora @abstr_number @abstr_number -bit)

    * gcc
    * gcc-c++
    * cmake
    * automake
    * boost-devel
    * libtool
    * lz @abstr_number -devel
    * lzma-devel
    * snappy-devel
    * zlib-devel
    * glog-devel
    * gflags-devel
    * scons
    * double-conversion-devel
    * openssl-devel
    * libevent-devel

Optional

    * libdwarf-dev
    * libelf-dev
    * libunwind @abstr_number -dev


