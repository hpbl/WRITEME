# Contributors

This project exists thanks to all the people who contribute. [Contribute]. @abstr_hyperlink 

# Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/ponyc#backer)]

@abstr_hyperlink 

# Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/ponyc#sponsor)]

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

# Getting help

Need help? Not to worry, we have you covered.

We have a couple resources designed to help you learn, we suggest starting with the tutorial and from there, moving on to the Pony Patterns book. Additionally, standard library documentation is available online.

  * @abstr_hyperlink .
  * @abstr_hyperlink cookbook is in progress
  * @abstr_hyperlink .
  * @abstr_hyperlink .



If you are looking for an answer "right now", we suggest you give our @abstr_hyperlink community a try. Whatever your question is, it isn't dumb, and we won't get annoyed.

Think you've found a bug? Check your understanding first by writing the mailing list. Once you know it's a bug, open an issue. * @abstr_hyperlink 

# Trying it online

If you want a quick way to test or run code, checkout the @abstr_hyperlink .

# Editor support

  * Sublime Text: @abstr_hyperlink 
  * Atom: @abstr_hyperlink 
  * Visual Studio: @abstr_hyperlink 
  * Visual Studio Code: @abstr_hyperlink 
  * Vim: 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink , available as layer for Vim and @abstr_hyperlink . Just follow @abstr_hyperlink then load `lang#pony` layer inside configuration file ( _$HOME/.SpaceVim.d/init.toml_ )
  * Emacs: 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
  * BBEdit: @abstr_hyperlink 
  * Micro: @abstr_hyperlink 
  * Nano: @abstr_hyperlink 
  * Kate: update syntax definition file: Settings -> Configure Kate -> Open/Save -> Modes & Filetypes -> Download Highlighting Files



# Installation

Pony supports LLVM @abstr_number . @abstr_number and on an experimental basis it supports LLVM @abstr_number . @abstr_number and @abstr_number . @abstr_number .

Pony's prerequisites for CPU platforms are:

  * Full support for @abstr_number -bit platforms 
    * x @abstr_number and ARM CPUs only
    * See platforms listed in the Circle-CI build list at https://circleci.com/gh/ponylang/ponyc
  * Partial support for @abstr_number -bit platforms 
    * The `arm` and `armhf` architectures are tested via CI (Continuous Integration testing)
    * See platforms listed in the Circle-CI build list at https://circleci.com/gh/ponylang/ponyc
    * See also: GitHub issues @abstr_hyperlink and @abstr_hyperlink for more information.



## Using Docker

Want to use the latest revision of Pony source, but don't want to build from source yourself? You can run the `ponylang/ponyc` Docker container, which is created from an automated build at each commit to master.

You'll need to install Docker using @abstr_hyperlink . Then you can pull the latest `ponylang/ponyc` image using this command:

@abstr_code_section 

Then you'll be able to run `ponyc` to compile a Pony program in a given directory, running a command like this:

@abstr_code_section 

If you're unfamiliar with Docker, remember to ensure that whatever path you provide for `/path/to/my-code` is a full path name and not a relative path, and also note the lack of a closing slash, `/`, at the _end_ of the path name.

Note that if your host doesn't match the docker container, you'll probably have to run the resulting program inside the docker container as well, using a command like this:

@abstr_code_section 

If you're using `docker-machine` instead of native docker, make sure you aren't using an incompatible version of Virtualbox.

### Docker for Windows

Pull the latest image as above.

@abstr_code_section 

Share a local drive (volume), such as `c:`, with Docker for Windows, so that they are available to your containers. (Refer to @abstr_hyperlink in the Docker for Windows documentation for details.)

Then you'll be able to run `ponyc` to compile a Pony program in a given directory, running a command like this:

@abstr_code_section 

Note the inserted drive letter. Replace with your drive letter as appropriate.

To run a program, run a command like this:

@abstr_code_section 

To compile and run in one step run a command like this:

@abstr_code_section 

### Docker and AVX @abstr_number Support

By default, the Pony Docker image is compiled without support for @abstr_hyperlink . For optimal performance on modern hardware, you should build your Pony installation from source.

## Linux using an AppImage package (via Bintray)

For most Linux distributions released after RHEL @abstr_number , the `release` builds are packaged and available on Bintray ( @abstr_hyperlink ) as an AppImage.

The AppImage (www.appimage.org) format allow for an easy ability to use applications with minimal clutter added to your system. The applications are available in a single file and can be run after they're made executable. Additionally, AppImages allow for multiple versions of Pony to be used side by with no conflicts.

To install builds via AppImage, you need to go to Bintray and download the appropriate file for the version you want. After the file is downloaded, you need to make it executable using `chmod`.

### DEB and AVX @abstr_number Support

By default, the Pony AppImage package is compiled without support for AVX CPU instructions. For optimal performance, you should build your Pony installation from source.

## Linux using an RPM package (via COPR)

For Red Hat, CentOS, Oracle Linux, Fedora Linux, or OpenSuSE, the `release` builds are packaged and available on COPR ( @abstr_hyperlink ).

### Using `yum` for Red Hat, CentOS, Oracle Linux and other RHEL compatible systems:

@abstr_code_section 

See https://bugzilla.redhat.com/show_bug.cgi?id= @abstr_number for why `epel- @abstr_number` is required on the command line.

### Using `DNF` for Fedora Linux:

@abstr_code_section 

### Using Zypper for OpenSuSE Leap @abstr_number :

@abstr_code_section 

### RPM and AVX @abstr_number Support

By default, the Pony RPM package is compiled without support for AVX CPU instructions. For optimal performance, you should build your Pony installation from source.

## Ubuntu and Debian Linux using a DEB package (via Bintray)

For Ubuntu and Debian Linux, the `release` builds are packaged and available on Bintray ( @abstr_hyperlink ).

Install packages to allow `apt` to use a repository over HTTPS:

@abstr_code_section 

Install builds via Apt (and install Ponylang's public key):

@abstr_code_section 

### DEB and AVX @abstr_number Support

By default, the Pony DEB package is compiled without support for AVX CPU instructions. For optimal performance, you should build your Pony installation from source.

### Linux Mint

All steps to install Pony in Linux Mint are the same from Ubuntu, but you must use the Ubuntu package base (`xenial`, `bionic`) instead of the Linux Mint release.

Install pre-requisites and add the correct `apt` repository:

@abstr_code_section 

@abstr_code_section 

The same AVX @abstr_number support restrictions apply.

## Gentoo Linux

@abstr_code_section 

A live ebuild is also available in the @abstr_hyperlink (dev-lang/pony- @abstr_number ) and for Vim users there's app-vim/pony-syntax.

## Linux using @abstr_hyperlink 

@abstr_code_section 

## NixOS Linux or any OS using @abstr_hyperlink 

@abstr_code_section 

## "cannot find 'ld'" error

If you get an error when trying to use `ponyc` to compile pony source that looks like this:

@abstr_code_section 

you might have to install the `ld-gold` linker. It can typically be found by searching your distro's package repository for `binutils-gold` or just `ld-gold`.

## Mac OS X using @abstr_hyperlink 

@abstr_code_section 

## Windows using ZIP (via Bintray)

Windows users will need to install:

  * Visual Studio @abstr_number , @abstr_number or @abstr_number (available @abstr_hyperlink ) or the Visual C++ Build Tools @abstr_number , @abstr_number or @abstr_number (available @abstr_hyperlink ), and 
    * If using Visual Studio @abstr_number , install the Windows @abstr_number SDK (available @abstr_hyperlink ).
    * If using Visual Studio @abstr_number or @abstr_number , install the "Desktop Development with C++" workload.
    * If using Visual C++ Build Tools @abstr_number or @abstr_number , install the "Visual C++ build tools" workload, and the "Visual Studio C++ core features" individual component.
    * If using Visual Studio @abstr_number or @abstr_number , or Visual C++ Build Tools @abstr_number or @abstr_number , make sure the latest `Windows @abstr_number SDK ( @abstr_number .x.x.x) for Desktop` will be installed.



Once you have installed the prerequisites, you can download the latest ponyc release from @abstr_hyperlink .

# Building ponyc from source

First of all, you need a compiler with decent C @abstr_number support. The following compilers are supported, though we recommend to use the most recent versions.

  * GCC >= @abstr_number . @abstr_number 
  * Clang >= @abstr_number . @abstr_number 
  * MSVC >= @abstr_number 
  * XCode Clang >= @abstr_number . @abstr_number 



When building ponyc from sources the LLVM installed on your system is used by default. Optionally, you may also build ponyc with LLVM from sources.

## Building ponyc using LLVM sources:

### Prerequisites:

  * git >= @abstr_number . @abstr_number , other versions may work but this is what has been tested.



### Instructions:

To compile Pony using LLVM sources on Linux add `-f Makefile-lib-llvm` to any of the examples below. For instance on Ubuntu the standard command line is simply `make`, to build ponyc using LLVM from sources the command line is `make -f Makefile-lib-llvm`. Alternatively you can create a symlink from Makefile to Makefile-lib-llvm, `ln -sf Makefile-lib-llvm Makefile`, and no changes would be needed to the commands. You can specify `llvm_target=llvm- @abstr_number . @abstr_number . @abstr_number` on the command line and those sources will be used. For example `make -f Makefile-lib-llvm llvm_target=llvm- @abstr_number . @abstr_number . @abstr_number`.

Typically you only need to build the LLVM sources once, as the `make clean` target does not cause the LLVM sources to be rebuilt. To rebuild everything use `make -f Makefile-lib-llvm clean-all &&`make -f Makefile-lib-llvm`. There is also a distclean target,`make -f Makefle-lib-llvm distclean`, which will remove the llvm sources and they will be retrieved from the ponylang/llvm repo.

NOTE: If LLVM version < @abstr_number . @abstr_number . @abstr_number is used, cpu feature `avx @abstr_number f` is disabled automagically to avoid @abstr_hyperlink otherwise the compiler crashes during the optimization phase.

#### Changing the commit associated with LLVM_CFG=llvm-default.cfg

When LLVM_CFG is not specified or it is llvm-default.cfg the commit associated with the `src` submodule is checked out as the llvm source to be built. To change to a different commit, for instance tag `llvmorg- @abstr_number . @abstr_number . @abstr_number`, simply clone ponyc and change `lib/llvm/src` to the desired commit: @abstr_code_section If you already have ponyc checked out update/init `lib/llvm/src` submodule, if it hasn't been fetched, and then go into `lib/llvm/src` and checkout the desired commit: @abstr_code_section 

#### Debug/test ....

Now build and test using `LLVM_CFG=llvm-default.cfg` and any other appropriate parameters: @abstr_code_section When satisfied create a commit pushing to your repo: @abstr_code_section See the @abstr_hyperlink for more information.

## Building on Linux

Get the pony source from GitHub (For information on setting up Git, see https://help.github.com/articles/set-up-git/): @abstr_code_section 

@abstr_hyperlink 

### Arch

Install pony dependencies:

@abstr_code_section 

To build ponyc and compile and run helloworld:

@abstr_code_section 

### Debian Sid

Install pony dependencies:

@abstr_code_section 

To build ponyc, compile and run helloworld:

@abstr_code_section 

### Ubuntu Xenial

Add the LLVM apt repos to /etc/apt/sources.list. Open `/etc/apt/sources.list` and add the following lines to the end of the file:

@abstr_code_section 

Add the LLVM repo as a trusted source:

@abstr_code_section 

@abstr_code_section 

Clone the ponyc repo:

@abstr_code_section 

Build ponyc, compile and run helloworld:

@abstr_code_section 

### Ubuntu Bionic

@abstr_code_section 

Clone the ponyc repo:

@abstr_code_section 

Build ponyc, compile and run helloworld:

@abstr_code_section 

### Linux Mint

Instructions for Linux Mint are the same as the appropriate Ubuntu installation. However, an extra `llvm- @abstr_number . @abstr_number -dev` package is required for missing headers.

After installing the `llvm` package by following the appropriate steps for Ubuntu Trusty (Linux Mint @abstr_number ), Xenial (Linux Mint @abstr_number ), or Bionic (Linux Mint @abstr_number ), install the extra headers:

@abstr_code_section 

### Fedora ( @abstr_number )

@abstr_code_section 

To build ponyc, compile and run helloworld:

@abstr_code_section 

### Fedora ( @abstr_number , @abstr_number , @abstr_number , Rawhide)

@abstr_code_section 

To build ponyc, compile and run helloworld:

@abstr_code_section 

### CentOS/RHEL ( @abstr_number )

#### Install dependencies:

@abstr_code_section 

Using LLVM @abstr_number . @abstr_number . @abstr_number from EPEL:

@abstr_code_section 

Using LLVM @abstr_number . @abstr_number . @abstr_number from copr:

@abstr_code_section 

Using LLVM @abstr_number . @abstr_number . @abstr_number from copr:

@abstr_code_section 

Using LLVM @abstr_number . @abstr_number . @abstr_number from llvm-toolset- @abstr_number from SCL:

CentOS: @abstr_code_section 

RHEL: @abstr_code_section 

@abstr_code_section 

Enable the llvm collection before building: @abstr_code_section 

#### To build ponyc, compile and run helloworld:

@abstr_code_section 

### OpenSUSE (Leap @abstr_number . @abstr_number )

@abstr_code_section 

To build ponyc, compile and run helloworld:

@abstr_code_section 

### OpenSuSE (Leap @abstr_number , Tumbleweed)

NOTE: LLVM @abstr_number . @abstr_number doesn't seem to be available so these instructions install the default LLVM version available.

@abstr_code_section 

To build ponyc, compile and run helloworld:

@abstr_code_section 

### Alpine ( @abstr_number . @abstr_number , @abstr_number . @abstr_number , Edge)

Install build tools/dependencies:

@abstr_code_section 

To build ponyc, compile and run helloworld:

@abstr_code_section 

### Other Linux distributions

You need to have the development versions of the following installed:

  * LLVM @abstr_number . @abstr_number . @abstr_number 
  * zlib
  * ncurses



There is experimental support for LLVM @abstr_number . @abstr_number . @abstr_number and @abstr_number . @abstr_number . @abstr_number , but this may result in decreased performance or crashes in generated applications.

To build ponyc, compile and run the hello world app:

@abstr_code_section 

## Building on DragonFly

Pony previously worked on DragonFly, however, at this time, while it builds, it doesn't pass all tests. If you'd be interested in getting Pony working on DragonFly, have at it. You'll need the following dependencies:

First, install the required dependencies:

@abstr_code_section 

## Building on FreeBSD

First, install the required dependencies:

  * Pony is currently supported on FreeBSD @abstr_number for amd @abstr_number ( @abstr_number -bit) using LLVM @abstr_number 
  * The following packages, with their installation commands:

@abstr_code_section 




This will build ponyc and compile helloworld:

@abstr_code_section 

## Building on OpenBSD

OpenBSD has been tested on OpenBSD @abstr_number . @abstr_number .

First, install the required dependencies:

@abstr_code_section 

This will build ponyc and compile helloworld:

@abstr_code_section 

If you are on a @abstr_number -bit platform (e.g., armv @abstr_number ), change `bits= @abstr_number` to `bits= @abstr_number`.

## Building on Mac OS X

@abstr_hyperlink 

You'll need llvm @abstr_number . @abstr_number . @abstr_number to build Pony. You can use either homebrew or MacPorts to install your dependencies.

There is experimental support for LLVM @abstr_number . @abstr_number . @abstr_number or @abstr_number . @abstr_number . @abstr_number , but this may result in decreased performance or crashes in generated applications.

Installation via @abstr_hyperlink : @abstr_code_section 

Installation via @abstr_hyperlink : @abstr_code_section 

Launch the build with `make` after installing the dependencies: @abstr_code_section 

## Building on Windows

@abstr_hyperlink 

_Note: it may also be possible (as tested on build @abstr_number . @abstr_number of Windows @abstr_number ) to build Pony using the Ubuntu @abstr_number . @abstr_number instructions inside @abstr_hyperlink ._

Building on Windows requires the following:

  * Visual Studio @abstr_number , @abstr_number or @abstr_number (available @abstr_hyperlink ) or the Visual C++ Build Tools @abstr_number , @abstr_number or @abstr_number (available @abstr_hyperlink ), and 
    * If using Visual Studio @abstr_number , install the Windows @abstr_number SDK (available @abstr_hyperlink ).
    * If using Visual Studio @abstr_number or @abstr_number , install the "Desktop Development with C++" workload.
    * If using Visual C++ Build Tools @abstr_number or @abstr_number , install the "Visual C++ build tools" workload, and the "Visual Studio C++ core features" individual component.
    * If using Visual Studio @abstr_number or @abstr_number , or Visual C++ Build Tools @abstr_number or @abstr_number , make sure the latest `Windows @abstr_number SDK ( @abstr_number .x.x.x) for Desktop` will be installed.
  * @abstr_hyperlink ( @abstr_number . @abstr_number or @abstr_number . @abstr_number ) needs to be in your PATH.



In a command prompt in the `ponyc` source directory, run the following:

@abstr_code_section 

(You only need to run `make.bat configure` the first time you build the project.)

@abstr_code_section 

This will automatically perform the following steps:

  * Download the pre-built LLVM library for building the Pony compiler. 
    * @abstr_hyperlink 
  * Build the pony compiler in the `build/<config>-<llvm-version>` directory.
  * Build the unit tests for the compiler and the standard library.
  * Run the unit tests.



You can provide the following options to `make.bat` when running the `build` or `test` commands:

  * `--config debug|release`: whether or not to build a debug or release build (`release` is the default).
  * `--llvm <version>`: the LLVM version to build against (`@abstr_number . @abstr_number . @abstr_number` is the default).



Note that you need to provide these options each time you run make.bat; the system will not remember your last choice.

Other commands include `clean`, which will clean a specified configuration; and `distclean`, which will wipe out the entire build directory. You will need to run `make configure` after a distclean.

## Building with link-time optimisation (LTO)

Link-time optimizations provide a performance improvement. You should strongly consider turning on LTO if you build ponyc from source. It's off by default as it comes with some caveats:

  * If you aren't using clang as your linker, we've seen LTO generate incorrect binaries. It's rare but it can happen. Before turning on LTO you need to be aware that it's possible.

  * If you are on MacOS, turning on LTO means that if you upgrade your version of XCode, you will have to rebuild your Pony compiler. You won't be able to link Pony programs if there is a mismatch between the version of XCode used to build the Pony runtime and the version of XCode you currently have installed.




You can enable LTO when building the compiler in release mode. There are slight differences between platforms so you'll need to do a manual setup. LTO is enabled by setting `lto` to `yes` in the build command line:

@abstr_code_section 

If the build fails, you have to specify the LTO plugin for your compiler in the `LTO_PLUGIN` variable. For example:

@abstr_code_section 

Refer to your compiler documentation for the plugin to use in your case.

## Building the runtime as an LLVM bitcode file

If you're compiling with Clang, you can build the Pony runtime as an LLVM bitcode file by setting `runtime-bitcode` to `yes` in the build command line:

@abstr_code_section 

Then, you can pass the `--runtimebc` option to ponyc in order to use the bitcode file instead of the static library to link in the runtime:

@abstr_code_section 

This functionality boils down to "super LTO" for the runtime. The Pony compiler will have full knowledge of the runtime and will perform advanced interprocedural optimisations between your Pony code and the runtime. If you're looking for maximum performance, you should consider this option. Note that this can result in very long optimisation times.

## VirtualBox

Pony binaries can trigger illegal instruction errors under VirtualBox @abstr_number .x, for at least the x @abstr_number _ @abstr_number platform and possibly others.

Use VirtualBox @abstr_number .x to avoid possible problems.

You can learn more about @abstr_hyperlink support.

## Building Pony on Non-x @abstr_number platforms

On ARM platforms, the default gcc architecture specification used in the Makefile of _native_ does not work correctly, and can even result in the gcc compiler crashing. You will have to override the compiler architecture specification on the _make_ command line. For example, on a RaspberryPi @abstr_number you would say: @abstr_code_section 

To get a complete list of acceptable architecture names, use the gcc command:

@abstr_code_section 

This will result in an error message plus a listing of all architecture types acceptable on your platform.
