@abstr_image 

# Swift Programming Language

| | **Architecture** | **Master** | **Package** | |---|:---:|:---:|:---:| | **macOS** | x @abstr_number _ @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | _*Ubuntu @abstr_number . @abstr_number *_ | x @abstr_number _ @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | _*Ubuntu @abstr_number . @abstr_number *_ | x @abstr_number _ @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | _*Ubuntu @abstr_number . @abstr_number *_ | x @abstr_number _ @abstr_number | @abstr_hyperlink | @abstr_hyperlink |

**Swift Community-Hosted CI Platforms**

| **OS** | **Architecture** | **Build** | |---|:---:|:---:| | **@abstr_hyperlink** | ARMv @abstr_number | @abstr_hyperlink | | **@abstr_hyperlink** | x @abstr_number _ @abstr_number | @abstr_hyperlink | | **@abstr_hyperlink** | x @abstr_number _ @abstr_number | @abstr_hyperlink | | **@abstr_hyperlink** | PPC @abstr_number LE | @abstr_hyperlink | | **@abstr_hyperlink** | AArch @abstr_number | @abstr_hyperlink | | **@abstr_hyperlink** | ARMv @abstr_number | @abstr_hyperlink | | **@abstr_hyperlink** | AArch @abstr_number | @abstr_hyperlink | | **@abstr_hyperlink** | x @abstr_number _ @abstr_number | @abstr_hyperlink | | **@abstr_hyperlink** | x @abstr_number _ @abstr_number | @abstr_hyperlink | | **@abstr_hyperlink** | x @abstr_number _ @abstr_number | @abstr_hyperlink | | **@abstr_hyperlink** | x @abstr_number _ @abstr_number | @abstr_hyperlink | | **@abstr_hyperlink** | x @abstr_number _ @abstr_number | @abstr_hyperlink |

## Welcome to Swift

Swift is a high-performance system programming language. It has a clean and modern syntax, offers seamless access to existing C and Objective-C code and frameworks, and is memory safe by default.

Although inspired by Objective-C and many other languages, Swift is not itself a C-derived language. As a complete and independent language, Swift packages core features like flow control, data structures, and functions, with high-level constructs like objects, protocols, closures, and generics. Swift embraces modules, eliminating the need for headers and the code duplication they entail.

To learn more about the programming language, visit @abstr_hyperlink .

## Contributing to Swift

Contributions to Swift are welcomed and encouraged! Please see the @abstr_hyperlink .

To be a truly great community, @abstr_hyperlink needs to welcome developers from all walks of life, with different backgrounds, and with a wide range of experience. A diverse and friendly community will have more great ideas, more unique perspectives, and produce more great code. We will work diligently to make the Swift community welcoming to everyone.

To give clarity of what is expected of our members, Swift has adopted the code of conduct defined by the Contributor Covenant. This document is used across many open source communities, and we think it articulates our values well. For more, see the @abstr_hyperlink .

## Getting Started

These instructions give the most direct path to a working Swift development environment. To build from source you will need about @abstr_number GB of disk space for the source code and up to @abstr_number GB of disk space for the build artifacts with full debugging. Depending on your machine, a clean build can take a few minutes to several hours. Naturally, incremental builds are much faster.

### System Requirements

macOS, Ubuntu Linux LTS, and the latest Ubuntu Linux release are the current supported host development operating systems.

Please make sure you use Python @abstr_number .x. Python @abstr_number .x is not supported currently.

#### macOS

To build for macOS, you need @abstr_hyperlink . The required version of Xcode changes frequently, and is often a beta release. Check this document or the host information on @abstr_hyperlink for the current required version.

You will also need @abstr_hyperlink and @abstr_hyperlink , which can be installed via a package manager:

**@abstr_hyperlink**
    
    
    brew install cmake ninja
    

**@abstr_hyperlink**
    
    
    sudo port install cmake ninja
    

Instructions for installing CMake and Ninja directly can be found below.

#### Linux

For Ubuntu, you'll need the following development dependencies:
    
    
    sudo apt-get install git cmake ninja-build clang python uuid-dev libicu-dev icu-devtools libedit-dev libxml @abstr_number -dev libsqlite @abstr_number -dev swig libpython-dev libncurses @abstr_number -dev pkg-config libcurl @abstr_number -openssl-dev systemtap-sdt-dev tzdata rsync
    

**Note:** LLDB currently requires at least `swig- @abstr_number . @abstr_number . @abstr_number` but will successfully build with version @abstr_number shipped with Ubuntu.

Build instructions for Ubuntu @abstr_number . @abstr_number LTS can be found here.

### Getting Sources for Swift and Related Projects

First create a directory for all of the Swift sources:
    
    
    mkdir swift-source
    cd swift-source
    

**Note:** This is important since update-checkout (see below) checks out repositories next to the Swift source directory. This means that if one clones Swift and has other unrelated repositories, update-checkout may not clone those repositories and will update them instead.

**Via HTTPS** For those checking out sources as read-only, HTTPS works best:
    
    
    git clone https://github.com/apple/swift.git
    ./swift/utils/update-checkout --clone
    

**Via SSH** For those who plan on regularly making direct commits, cloning over SSH may provide a better experience (which requires @abstr_hyperlink ):
    
    
    git clone git@github.com:apple/swift.git
    ./swift/utils/update-checkout --clone-with-ssh
    

### Building Swift

The `build-script` is a high-level build automation script that supports basic options such as building a Swift-compatible LLDB, building the Swift Package Manager, building for various platforms, running tests after builds, and more.

There are two primary build systems to use: Xcode and Ninja. The Xcode build system allows you to work in Xcode, but Ninja is a bit faster and supports more environments.

To build using Ninja, run:
    
    
    swift/utils/build-script --release-debuginfo
    

When developing Swift, it helps to build what you're working on in a debug configuration while building the rest of the project with optimizations. Below are some examples of using debug variants:
    
    
    swift/utils/build-script --release-debuginfo --debug-swift # Swift frontend built in debug
    swift/utils/build-script --release-debuginfo --debug-swift-stdlib # Standard library built in debug
    swift/utils/build-script --release-debuginfo --debug-swift --force-optimized-typechecker # Swift frontend sans type checker built in debug
    

Limiting the amount of debug code in the compiler has a very large impact on Swift compile times, and in turn the test execution time. If you want to build the entire project in debug, you can run:
    
    
    swift/utils/build-script --debug
    

For documentation of all available arguments, as well as additional usage information, see the inline help:
    
    
    swift/utils/build-script -h
    

#### Xcode

To build using Xcode, specify the `--xcode` argument on any of the above commands. Xcode can be used to edit the Swift source code, but it is not currently fully supported as a build environment for SDKs other than macOS. The generated Xcode project does not integrate with the test runner, but the tests can be run with the 'check-swift' target.

#### Build Products

All of the build products are placed in `swift-source/build/${TOOL}-${MODE}/${PRODUCT}-${PLATFORM}/`. If macOS Swift with Ninja in DebugAssert mode was built, all of the products would be in `swift-source/build/Ninja-DebugAssert/swift-macosx-x @abstr_number _ @abstr_number /`. It helps to save this directory as an environment variable for future use.
    
    
    export SWIFT_BUILD_DIR="~/swift-source/build/Ninja-DebugAssert/swift-macosx-x @abstr_number _ @abstr_number "
    

#### Ninja

Once the first build has completed, Ninja can perform fast incremental builds of various products. These incremental builds are a big timesaver when developing and debugging.
    
    
    cd ${SWIFT_BUILD_DIR}
    ninja swift
    

This will build the Swift compiler, but will not rebuild the standard library or any other target. Building the `swift-stdlib` target as an additional layer of testing from time to time is also a good idea. To build just the standard library, run:
    
    
    ninja swift-stdlib
    

It is always a good idea to do a full build after using `update-checkout`.

#### Using Xcode

To open the Swift project in Xcode, open `${SWIFT_BUILD_DIR}/Swift.xcodeproj`. It will auto-create a _lot_ of schemes for all of the available targets. A common debug flow would involve:

  * Select the 'swift' scheme.
  * Pull up the scheme editor (⌘⇧<).
  * Select the 'Arguments' tab and click the '+'.
  * Add the command line options.
  * Close the scheme editor.
  * Build and run.



Another option is to change the scheme to "Wait for executable to be launched", then run the build product in Terminal.

### Swift Toolchains

#### Building

Swift toolchains are created using the script @abstr_hyperlink . This script is used by swift.org's CI to produce snapshots and can allow for one to locally reproduce such builds for development or distribution purposes. E.x.:

@abstr_code_section 

where `$BUNDLE_PREFIX` is a string that will be prepended to the build date to give the bundle identifier of the toolchain's `Info.plist`. For instance, if `$BUNDLE_PREFIX` was `com.example`, the toolchain produced will have the bundle identifier `com.example.YYYYMMDD`. It will be created in the directory you run the script with a filename of the form: `swift-LOCAL-YYYY-MM-DD-a-osx.tar.gz`.

Beyond building the toolchain, `build-toolchain` also supports the following (non-exhaustive) set of useful options::

  * `--dry-run`: Perform a dry run build. This is off by default.
  * `--test`: Test the toolchain after it has been compiled. This is off by default.
  * `--distcc`: Use distcc to speed up the build by distributing the c++ part of the swift build. This is off by default.



More options may be added over time. Please pass `--help` to `build-toolchain` to see the full set of options.

#### Installing into Xcode

On macOS if one wants to install such a toolchain into Xcode:

@abstr_number . Untar and copy the toolchain to one of `/Library/Developer/Toolchains/` or `~/Library/Developer/Toolchains/`. E.x.:

@abstr_code_section 

The script also generates an archive containing debug symbols which can be installed over the main archive allowing symbolication of any compiler crashes.

@abstr_code_section 

@abstr_number . Specify the local toolchain for Xcode's use via `Xcode->Toolchains`.

### Build Failures

Make sure you are using the correct release of Xcode.

If you have changed Xcode versions but still encounter errors that appear to be related to the Xcode version, try passing `--clean` to `build-script`.

When a new version of Xcode is released, you can update your build without recompiling the entire project by passing the `--reconfigure` option.

Make sure all repositories are up to date with the `update-checkout` command described above.

## Testing Swift

See docs/Testing.md, in particular the section on lit.py.

## Learning More

Be sure to look through the @abstr_hyperlink directory for more information about the compiler. In particular, the documents titled Debugging the Swift Compiler and Continuous Integration for Swift are very helpful to understand before submitting your first PR.

### Building Documentation

To read the compiler documentation, start by installing the @abstr_hyperlink documentation generator tool by running the command:
    
    
    easy_install -U "Sphinx <  @abstr_number . @abstr_number "
    

Once complete, you can build the Swift documentation by changing directory into @abstr_hyperlink and typing `make`. This compiles the `.rst` files in the @abstr_hyperlink directory into HTML in the `docs/_build/html` directory.

Many of the docs are out of date, but you can see some historical design documents in the `docs` directory.

Another source of documentation is the standard library itself, located in `stdlib`. Much of the language is actually implemented in the library (including `Int`), and the standard library gives some examples of what can be expressed today.

## Build Dependencies

### CMake

@abstr_hyperlink is the core infrastructure used to configure builds of Swift and its companion projects; at least version @abstr_number . @abstr_number . @abstr_number is required. 

On macOS, you can download the @abstr_hyperlink , bundled as an application, copy it to `/Applications`, and add the embedded command line tools to your `PATH`:
    
    
    export PATH=/Applications/CMake.app/Contents/bin:$PATH
    

On Linux, if you have not already installed Swift's development dependencies, you can download and install the CMake package separately using the following command:
    
    
    sudo apt-get install cmake
    

### Ninja

@abstr_hyperlink is the current recommended build system for building Swift and is the default configuration generated by CMake. @abstr_hyperlink are available for macOS and Linux distributions. You can also clone Ninja next to the other projects and it will be bootstrapped automatically:

**Via HTTPS**
    
    
    git clone https://github.com/ninja-build/ninja.git && cd ninja
    git checkout release
    cat README
    

**Via SSH**
    
    
    git clone git@github.com:ninja-build/ninja.git && cd ninja
    git checkout release
    cat README
    
