# RetDec

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink is a retargetable machine-code decompiler based on @abstr_hyperlink .

The decompiler is not limited to any particular target architecture, operating system, or executable file format: * Supported file formats: ELF, PE, Mach-O, COFF, AR (archive), Intel HEX, and raw machine code * Supported architectures: * @abstr_number -bit: Intel x @abstr_number , ARM, MIPS, PIC @abstr_number , and PowerPC * @abstr_number -bit: x @abstr_number - @abstr_number , ARM @abstr_number (AArch @abstr_number )

Features: * Static analysis of executable files with detailed information. * Compiler and packer detection. * Loading and instruction decoding. * Signature-based removal of statically linked library code. * Extraction and utilization of debugging information (DWARF, PDB). * Reconstruction of instruction idioms. * Detection and reconstruction of C++ class hierarchies (RTTI, vtables). * Demangling of symbols from C++ binaries (GCC, MSVC, Borland). * Reconstruction of functions, types, and high-level constructs. * Integrated disassembler. * Output in two high-level languages: C and a Python-like language. * Generation of call graphs, control-flow graphs, and various statistics.

For more information, check out our * @abstr_hyperlink (in progress) * Botconf @abstr_number talk: @abstr_hyperlink , @abstr_hyperlink * REcon Montreal @abstr_number talk: @abstr_hyperlink * @abstr_hyperlink 

## Installation and Use

Currently, we support Windows ( @abstr_number or later), Linux, macOS, and (experimentally) FreeBSD. An installed version of RetDec requires approximately @abstr_number GB of free disk space.

### Windows

@abstr_number . Either download and unpack a @abstr_hyperlink , or build and install the decompiler by yourself (the process is described below).

@abstr_number . Install @abstr_hyperlink .

@abstr_number . Install the following programs:
    
    
    * [Python](https://www.python.org/) (version >=  @abstr_number . @abstr_number )
    * [UPX](https://upx.github.io/) (Optional: if you want to use UPX unpacker in the preprocessing stage)
    * [Graphviz](https://graphviz.gitlab.io/_pages/Download/windows/graphviz- @abstr_number . @abstr_number .msi) (Optional: if you want to generate call or control flow graphs)
    

@abstr_number . Now, you are all set to run the decompiler. To decompile a binary file named `test.exe`, run the following command (ensure that `python` runs Python @abstr_number ; as an alternative, you can try `py - @abstr_number`)
    
    
     @abstr_code_section
    

For more information, run `retdec-decompiler.py` with `--help`.

### Linux

@abstr_number . Either download and unpack a @abstr_hyperlink , or build and install the decompiler by yourself (the process is described below).

@abstr_number . After you have built the decompiler, you will need to install the following packages via your distribution's package manager:
    
    
    * [Python](https://www.python.org/) (version >=  @abstr_number . @abstr_number )
    * [UPX](https://upx.github.io/) (Optional: if you want to use UPX unpacker in the preprocessing stage)
    * [Graphviz](http://www.graphviz.org/) (Optional: if you want to generate call or control flow graphs)
    

@abstr_number . Now, you are all set to run the decompiler. To decompile a binary file named `test.exe`, run
    
    
     @abstr_code_section
    

For more information, run `retdec-decompiler.py` with `--help`.

### macOS

@abstr_number . Either download and unpack a @abstr_hyperlink , or build and install the decompiler by yourself (the process is described below).

@abstr_number . After you have built the decompiler, you will need to install the following packages:
    
    
    * [Python](https://www.python.org/) (version >=  @abstr_number . @abstr_number )
    * [UPX](https://upx.github.io/) (Optional: if you want to use UPX unpacker in the preprocessing stage)
    * [Graphviz](http://www.graphviz.org/) (Optional: if you want to generate call or control flow graphs)
    

@abstr_number . Now, you are all set to run the decompiler. To decompile a binary file named `test.exe`, run
    
    
     @abstr_code_section
    

For more information, run `retdec-decompiler.py` with `--help`.

### FreeBSD (Experimental)

@abstr_number . There are currently no pre-built "ports" packages for FreeBSD. You will have to build and install the decompiler by yourself. The process is described below.

@abstr_number . After you have built the decompiler, you may need to install the following packages and execute the following command:
    
    
     @abstr_code_section
    

@abstr_number . Now, you are all set to run the decompiler. To decompile a binary file named `test.exe`, run
    
    
     @abstr_code_section
    

For more information, run `retdec-decompiler.py` with `--help`.

## Build and Installation

This section describes a local build and installation of RetDec. Instructions for Docker are given in the next section.

### Requirements

#### Linux

  * A C++ compiler and standard C++ library supporting C++ @abstr_number (e.g. GCC >= @abstr_number )
  * @abstr_hyperlink (version >= @abstr_number . @abstr_number )
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (version >= @abstr_number . @abstr_number )
  * @abstr_hyperlink (version >= @abstr_number . @abstr_number )
  * @abstr_hyperlink (version >= @abstr_number . @abstr_number )
  * @abstr_hyperlink ( @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink )
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Optional: @abstr_hyperlink and @abstr_hyperlink for generating API documentation



On Debian-based distributions (e.g. Ubuntu), the required packages can be installed with `apt-get`:

@abstr_code_section 

On RPM-based distributions (e.g. Fedora), the required packages can be installed with `dnf`:

@abstr_code_section 

On Arch Linux, the required packages can be installed with `pacman`:

@abstr_code_section 

#### Windows

  * Microsoft Visual C++ (version >= Visual Studio @abstr_number Update @abstr_number )
  * @abstr_hyperlink (version >= @abstr_number . @abstr_number )
  * @abstr_hyperlink 
  * @abstr_hyperlink ( @abstr_hyperlink ) from the @abstr_hyperlink . Add the extracted directory to the system `Path` ( @abstr_hyperlink ).
  * @abstr_hyperlink . It needs to be the first Perl in `PATH`, or it has to be provided to CMake using `CMAKE_PROGRAM_PATH` variable, e.g. `-DCMAKE_PROGRAM_PATH=/c/perl/bin`. Does NOT work with Strawberry Perl or MSYS @abstr_number Perl (you would have to install a pre-built version of OpenSSL, see below). 
    * Alternatively, you can install OpenSSL directly from @abstr_hyperlink . This means OpenSSL won't be built and you don't need to install any Perl. Do not install Light version of OpenSSL as they don't contain development files.
  * @abstr_hyperlink (version >= @abstr_number . @abstr_number )
  * Optional: @abstr_hyperlink and @abstr_hyperlink for generating API documentation



#### macOS

Packages should be preferably installed via @abstr_hyperlink .

  * Full Xcode installation ( @abstr_hyperlink , see @abstr_hyperlink and @abstr_hyperlink )
  * @abstr_hyperlink (version >= @abstr_number . @abstr_number )
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (version >= @abstr_number . @abstr_number )
  * @abstr_hyperlink (version >= @abstr_number . @abstr_number )
  * @abstr_hyperlink (version >= @abstr_number . @abstr_number )
  * @abstr_hyperlink ( @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink )
  * Optional: @abstr_hyperlink and @abstr_hyperlink for generating API documentation



#### FreeBSD (Experimental)

Packages should be installed via FreeBSDs pre-compiled package repository using the `pkg` command or built from scratch using the `ports` database method.

  * Full "pkg" tool instructions: @abstr_hyperlink 
    * `pkg install cmake python @abstr_number bison git autotools` OR
  * Full "ports" instructions: @abstr_hyperlink 
    * `portsnap fetch`
    * `portsnap extract`
  * For example, `cmake` would be 
    * `whereis cmake`
    * `cd /usr/ports/devel/cmake`
    * `make install clean`



### Process

Note: Although RetDec now supports a system-wide installation ( @abstr_hyperlink ), unless you use your distribution's package manager to install it, we recommend installing RetDec locally into a designated directory. The reason for this is that uninstallation will be easier as you will only need to remove a single directory. To perform a local installation, run `cmake` with the `-DCMAKE_INSTALL_PREFIX=<path>` parameter, where `<path>` is directory into which RetDec will be installed (e.g. `$HOME/projects/retdec-install` on Linux and macOS, and `C:\projects\retdec-install` on Windows).

  * Clone the repository: 
    * `git clone https://github.com/avast/retdec`
  * Linux: 
    * `cd retdec`
    * `mkdir build && cd build`
    * `cmake .. -DCMAKE_INSTALL_PREFIX=<path>`
    * `make -jN` (`N` is the number of processes to use for parallel build, typically number of cores + @abstr_number gives fastest compilation time)
    * `make install`
  * Windows: 
    * Open a command prompt (e.g. `cmd.exe`)
    * `cd retdec`
    * `mkdir build && cd build`
    * `cmake .. -DCMAKE_INSTALL_PREFIX=<path> -G<generator>`
    * `cmake --build . --config Release -- -m`
    * `cmake --build . --config Release --target install`
    * Alternatively, you can open `retdec.sln` generated by `cmake` in Visual Studio IDE
  * macOS: 
    * `cd retdec`
    * `mkdir build && cd build`
    * @abstr_code_section 
    * `cmake .. -DCMAKE_INSTALL_PREFIX=<path>`
    * `make -jN` (`N` is the number of processes to use for parallel build, typically number of cores + @abstr_number gives fastest compilation time)
    * `make install`
  * FreeBSD: 
    * `sudo pkg install git cmake`
    * `git clone https://github.com/avast/retdec`
    * `cd retdec`
    * `mkdir build && cd build`
    * @abstr_code_section 
    * `cmake .. -DCMAKE_INSTALL_PREFIX=<path>`
    * `make -jN` (`N` is the number of processes to use for parallel build, typically number of cores + @abstr_number gives fastest compilation time)
    * `make install`



You have to pass the following parameters to `cmake`: * `-DCMAKE_INSTALL_PREFIX=<path>` to set the installation path to `<path>`. Quote the path if you are using backslashes on Windows (e.g. `-DCMAKE_INSTALL_PREFIX="C:\retdec"`). * (Windows only) `-G<generator>` is `-G"Visual Studio @abstr_number @abstr_number "` for @abstr_number -bit build using Visual Studio @abstr_number , or `-G"Visual Studio @abstr_number @abstr_number Win @abstr_number "` for @abstr_number -bit build using Visual Studio @abstr_number . Later versions of Visual Studio may be used.

You can pass the following additional parameters to `cmake`: * `-DRETDEC_DOC=ON` to build with API documentation (requires Doxygen and Graphviz, disabled by default). * `-DRETDEC_TESTS=ON` to build with tests (disabled by default). * `-DRETDEC_DEV_TOOLS=ON` to build with development tools (disabled by default). * `-DRETDEC_FORCE_OPENSSL_BUILD=ON` to force OpenSSL build even if it is installed in the system (disabled by default). * `-DRETDEC_COMPILE_YARA=OFF` to disable YARA rules compilation at installation step (enabled by default). * `-DCMAKE_BUILD_TYPE=Debug` to build with debugging information, which is useful during development. By default, the project is built in the `Release` mode. This has no effect on Windows, but the same thing can be achieved by running `cmake --build .` with the `--config Debug` parameter. * `-DCMAKE_PROGRAM_PATH=<path>` to use Perl at `<path>` (probably useful only on Windows). * `-D<dep>_LOCAL_DIR=<path>` where `<dep>` is from `{CAPSTONE, ELFIO, GOOGLETEST, JSONCPP, KEYSTONE, LIBDWARF, LLVM, PELIB, RAPIDJSON, TINYXML, YARACPP, YARAMOD}` (e.g. `-DCAPSTONE_LOCAL_DIR=<path>`), to use the local repository clone at `<path>` for RetDec dependency instead of downloading a fresh copy at build time. Multiple such options may be used at the same time.

## Build in Docker

Docker support is maintained by community. If something does not work for you or if you have suggestions for improvements, open an issue or PR.

### Build Image

Building in Docker does not require installation of the required libraries locally. This is a good option for trying out RetDec without setting up the whole build toolchain.

To build the RetDec Docker image, run @abstr_code_section 

This builds the image from the master branch of this repository.

To build the image using the local copy of the repository, use the development Dockerfile, `Dockerfile.dev`: @abstr_code_section 

### Run Container

If your `uid` is not @abstr_number , make sure that the directory containing your input binary files is accessible for RetDec: @abstr_code_section Now, you can run the decompiler inside a container: @abstr_code_section Note: Do not modify the `/destination` part is. You only need to change `/path/to/local/directory`. Output files will then be generated to `/path/to/local/directory`.

## Automated TeamCity Builds

Our TeamCity servers are continuously generating up-to-date RetDec packages from the latest commit in the `master` branch. These are mostly meant to be used by RetDec developers, contributors, and other people experimenting with the product (e.g. testing if an issue present in the official release still exists in the current `master`).

You can use these as you wish, but keep in mind that there are no guarantees they will work on your system (especially the Linux version), and that regressions are a possibility. To get a stable RetDec version, either download the latest official pre-built package or build the latest RetDec version tag.

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Repository Overview

This repository contains the following libraries: * `ar-extractor` \- library for extracting object files from archives (based on LLVM). * `bin @abstr_number llvmir` \- library of LLVM passes for translating binaries into LLVM IR modules. * `capstone @abstr_number llvmir` \- binary instructions to LLVM IR translation library. * `config` \- library for representing and managing RetDec configuration databases. * `cpdetect` \- library for compiler and packer detection in binaries. * `crypto` \- collection of cryptographic functions. * `ctypes` \- C++ library for representing C function data types. * `debugformat` \- library for uniform representation of DWARF and PDB debugging information. * `demangler` \- demangling library capable to handle names generated by the GCC/Clang, Microsoft Visual C++, and Borland C++ compilers. * `dwarfparser` \- library for high-level representation of DWARF debugging information. * `fileformat` \- library for parsing and uniform representation of various object file formats. Currently supporting the following formats: COFF, ELF, Intel HEX, Mach-O, PE, raw data. * `llvm-support` \- set of LLVM related utility functions. * `llvmir-emul` \- LLVM IR emulation library used for unit testing. * `llvmir @abstr_number hll` \- library for translating LLVM IR modules to high-level source codes (C, Python-like language). * `loader` \- library for uniform representation of binaries loaded to memory. Supports the same formats as fileformat. * `macho-extractor` \- library for extracting regular Mach-O binaries from fat Mach-O binaries (based on LLVM). * `patterngen` \- binary pattern extractor library. * `pdbparser` \- Microsoft PDB files parser library. * `stacofin` \- static code finder library. * `unpacker` \- collection of unpacking functions. * `utils` \- general C++ utility library.

This repository contains the following tools: * `ar-extractortool` \- frontend for the ar-extractor library (installed as `retdec-ar-extractor`). * `bin @abstr_number llvmirtool` \- frontend for the `bin @abstr_number llvmir` library (installed as `retdec-bin @abstr_number llvmir`). * `bin @abstr_number pat` \- tool for generating patterns from binaries (installed as `retdec-bin @abstr_number pat`). * `capstone @abstr_number llvmirtool` \- frontend for the `capstone @abstr_number llvmir` library (installed as `retdec-capstone @abstr_number llvmir`). * `configtool` \- frontend for the `config` library (installed as `retdec-config`). * `ctypesparser` \- C++ library for parsing C function data types from JSON files into `ctypes` representation (installed as `retdec-ctypesparser`). * `demangler_grammar_gen` \-- tool for generating new grammars for the `demangler` library (installed as `retdec-demangler-grammar-gen`). * `demanglertool` \-- frontend for the `demangler` library (installed as `retdec-demangler`). * `fileinfo` \- binary analysis tool. Supports the same formats as `fileformat` (installed as `retdec-fileinfo`). * `idr @abstr_number pat` \- tool for extracting patterns from IDR knowledge bases (installed as `retdec-idr @abstr_number pat`). * `llvmir @abstr_number hlltool` \- frontend for the `llvmir @abstr_number hll` library (installed as `retdec-llvmir @abstr_number hll`). * `macho-extractortool` \- frontend for the `macho-extractor` library (installed as `retdec-macho-extractor`). * `pat @abstr_number yara` \- tool for processing patterns to YARA signatures (installed as `retdec-pat @abstr_number yara`). * `stacofintool` \- frontend for the `stacofin` library (installed as `retdec-stacofin`). * `unpackertool` \- plugin-based unpacker (installed as `retdec-unpacker`).

This repository contains the following scripts: * `retdec-decompiler.py` \- the main decompilation script binding it all together. This is the tool to use for full binary-to-C decompilations. * Support scripts used by `retdec-decompiler.py`: * `retdec-color-c.py` \- decorates output C sources with IDA color tags - syntax highlighting for IDA. * `retdec-config.py` \- decompiler's configuration file. * `retdec-archive-decompiler.py` \- decompiles objects in the given AR archive. * `retdec-fileinfo.py` \- a Fileinfo tool wrapper. * `retdec-signature-from-library-creator.py` \- extracts function signatures from the given library. * `retdec-unpacker.py` \- tries to unpack the given executable file by using any of the supported unpackers. * `retdec-utils.py` \- a collection of Python utilities. * `retdec-tests-runner.py` \- run all tests in the unit test directory. * `type_extractor` \- generation of type information (for internal use only)

## Project Documentation

See the @abstr_hyperlink for an up to date Doxygen-generated software reference corresponding to the latest commit in the `master` branch.

## Related Repositories

  * @abstr_hyperlink -- Embeds RetDec into IDA (Interactive Disassembler) and makes its use much easier.
  * @abstr_hyperlink -- A framework for writing and running regression tests for RetDec and related tools. This is a must if you plan to contribute to the RetDec project.
  * @abstr_hyperlink -- A suite of regression tests for RetDec and related tools.
  * @abstr_hyperlink -- Vim syntax-highlighting file for the output from the RetDec's disassembler (`.dsm` files).



## License

Copyright (c) @abstr_number Avast Software, licensed under the MIT license. See the @abstr_hyperlink file for more details.

RetDec uses third-party libraries or other resources listed, along with their licenses, in the @abstr_hyperlink file.

## Contributing

See @abstr_hyperlink .

## Acknowledgements

This software was supported by the research funding TACR (Technology Agency of the Czech Republic), ALFA Programme No. TA @abstr_number .
