# Z @abstr_number

Z @abstr_number is a theorem prover from Microsoft Research. It is licensed under the MIT license.

If you are not familiar with Z @abstr_number , you can start @abstr_hyperlink .

Pre-built binaries for stable and nightly releases are available from @abstr_hyperlink .

Z @abstr_number can be built using Visual Studio, a Makefile or using CMake. It provides bindings for several programming languages. 

See the release notes for notes on various stable releases of Z @abstr_number .

## Build status

| Azure Pipelines | TravisCI | | --------------- | -------- | @abstr_hyperlink | @abstr_hyperlink 

## Building Z @abstr_number on Windows using Visual Studio Command Prompt

@abstr_number -bit builds, start with:

@abstr_code_section 

or instead, for a @abstr_number -bit build:

@abstr_code_section 

then:

@abstr_code_section 

## Building Z @abstr_number using make and GCC/Clang

Execute:

@abstr_code_section 

Note by default `g++` is used as the C++ compiler if it is available. If you would prefer to use Clang change the `mk_make.py` invocation to:

@abstr_code_section 

Note that Clang < @abstr_number . @abstr_number does not support OpenMP.

You can also build Z @abstr_number for Windows using Cygwin and the Mingw-w @abstr_number cross-compiler. To configure that case correctly, make sure to use Cygwin's own python and not some Windows installation of Python.

For a @abstr_number bit build (from Cygwin @abstr_number ), configure Z @abstr_number 's sources with @abstr_code_section A @abstr_number bit build should work similarly (but is untested); the same is true for @abstr_number / @abstr_number bit builds from within Cygwin @abstr_number .

By default, it will install z @abstr_number executable at `PREFIX/bin`, libraries at `PREFIX/lib`, and include files at `PREFIX/include`, where `PREFIX` installation prefix if inferred by the `mk_make.py` script. It is usually `/usr` for most Linux distros, and `/usr/local` for FreeBSD and macOS. Use the `--prefix=` command line option to change the install prefix. For example:

@abstr_code_section 

To uninstall Z @abstr_number , use

@abstr_code_section 

To clean Z @abstr_number you can delete the build directory and run the `mk_make.py` script again.

## Building Z @abstr_number using CMake

Z @abstr_number has an unofficial build system using CMake. Read the README-CMake.md file for details.

## Z @abstr_number bindings

Z @abstr_number has bindings for various programming languages.

### `.NET`

Use the `--dotnet` command line flag with `mk_make.py` to enable building these.

On non-windows platforms @abstr_hyperlink is required. On these platforms the location of the C# compiler and gac utility need to be known. You can set these as follows if they aren't detected automatically. For example:

@abstr_code_section 

Note for very old versions of Mono (e.g. `@abstr_number . @abstr_number`) you may need to set `CSC` to `/usr/bin/dmcs`.

Note that when `make install` is executed on non-windows platforms the GAC utility is used to install `Microsoft.Z @abstr_number .dll` into the @abstr_hyperlink as the `Microsoft.Z @abstr_number .Sharp` package. During install a @abstr_hyperlink file (`Microsoft.Z @abstr_number .Sharp.pc`) is also installed which allows the @abstr_hyperlink IDE to find the bindings. Running `make uninstall` will remove the dll from the GAC and the `pkg-config` file.

See examples/dotnet for examples.

### `C`

These are always enabled.

See examples/c for examples.

### `C++`

These are always enabled.

See examples/c++ for examples.

### `Java`

Use the `--java` command line flag with `mk_make.py` to enable building these.

See examples/java for examples.

### `OCaml`

Use the `--ml` command line flag with `mk_make.py` to enable building these.

See examples/ml for examples.

### `Python`

Use the `--python` command line flag with `mk_make.py` to enable building these.

Note that is required on certain platforms that the Python package directory (`site-packages` on most distributions and `dist-packages` on Debian based distributions) live under the install prefix. If you use a non standard prefix you can use the `--pypkgdir` option to change the Python package directory used for installation. For example:

@abstr_code_section 

If you do need to install to a non standard prefix a better approach is to use a @abstr_hyperlink and install Z @abstr_number there. Python packages also work for Python @abstr_number . Under Windows, recall to build inside the Visual C++ native command build environment. Note that the `build/python/z @abstr_number` directory should be accessible from where python is used with Z @abstr_number   
and it depends on `libz @abstr_number .dll` to be in the path.

@abstr_code_section 

See examples/python for examples.

### `Web Assembly`

@abstr_hyperlink bindings are provided by Clément Pit-Claudel.

## System Overview

@abstr_image 

## Interfaces

  * Default input format is @abstr_hyperlink 

  * Other native foreign function interfaces:

    * C
    * C++
    * Python
    * Java
    * C#
    * OCaml


