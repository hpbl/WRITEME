# GSL: Guidelines Support Library @abstr_hyperlink @abstr_hyperlink 

The Guidelines Support Library (GSL) contains functions and types that are suggested for use by the @abstr_hyperlink maintained by the @abstr_hyperlink . This repo contains Microsoft's implementation of GSL.

The library includes types like `span<T>`, `string_span`, `owner<>` and others.

The entire implementation is provided inline in the headers under the gsl directory. The implementation generally assumes a platform that implements C++ @abstr_number support. There are specific workarounds to support MSVC @abstr_number .

While some types have been broken out into their own headers (e.g. gsl/span), it is simplest to just include gsl/gsl and gain access to the entire library.

> NOTE: We encourage contributions that improve or refine any of the types in this library as well as ports to other platforms. Please see CONTRIBUTING.md for more information about contributing.

# Project Code of Conduct

This project has adopted the @abstr_hyperlink . For more information see the @abstr_hyperlink or contact @abstr_hyperlink with any additional questions or comments.

# Usage of Third Party Libraries

This project makes use of the @abstr_hyperlink testing library. Please see the ThirdPartyNotices.txt file for details regarding the licensing of Catch.

# Quick Start

## Supported Platforms

The test suite that exercises GSL has been built and passes successfully on the following platforms: @abstr_number )

  * Windows using Visual Studio @abstr_number 
  * Windows using Visual Studio @abstr_number 
  * Windows using Clang/LLVM @abstr_number . @abstr_number 
  * Windows using Clang/LLVM @abstr_number . @abstr_number . @abstr_number 
  * Windows using GCC @abstr_number . @abstr_number 
  * Windows using Intel C++ Compiler @abstr_number . @abstr_number 
  * GNU/Linux using Clang/LLVM @abstr_number . @abstr_number - @abstr_number . @abstr_number 
  * GNU/Linux using Clang/LLVM @abstr_number . @abstr_number 
  * GNU/Linux using Clang/LLVM @abstr_number . @abstr_number 
  * GNU/Linux using Clang/LLVM @abstr_number . @abstr_number 
  * GNU/Linux using Clang/LLVM @abstr_number . @abstr_number 
  * GNU/Linux using GCC @abstr_number . @abstr_number 
  * OS X Yosemite using Xcode with Apple Clang @abstr_number . @abstr_number . @abstr_number . @abstr_number 
  * OS X Yosemite using GCC- @abstr_number . @abstr_number . @abstr_number 
  * OS X Sierra @abstr_number . @abstr_number . @abstr_number using Apple LLVM version @abstr_number . @abstr_number . @abstr_number (Clang- @abstr_number . @abstr_number . @abstr_number )
  * OS X El Capitan ( @abstr_number . @abstr_number ) using Xcode with AppleClang @abstr_number . @abstr_number . @abstr_number . @abstr_number 
  * OS X High Sierra @abstr_number . @abstr_number . @abstr_number ( @abstr_number C @abstr_number ) using Apple LLVM version @abstr_number . @abstr_number . @abstr_number (clang- @abstr_number . @abstr_number . @abstr_number . @abstr_number )
  * FreeBSD @abstr_number .x with Clang/LLVM @abstr_number . @abstr_number 



> If you successfully port GSL to another platform, we would love to hear from you. Please submit an issue to let us know. Also please consider contributing any changes that were necessary back to this project to benefit the wider community.

@abstr_number ) For `gsl::byte` to work correctly with Clang and GCC you might have to use the `-fno-strict-aliasing` compiler option.

## Building the tests

To build the tests, you will require the following:

  * @abstr_hyperlink , version @abstr_number . @abstr_number . @abstr_number or later to be installed and in your PATH.



These steps assume the source code of this repository has been cloned into a directory named `c:\GSL`.

@abstr_number . Create a directory to contain the build outputs for a particular architecture (we name it c:\GSL\build-x @abstr_number in this example).
    
    
        cd GSL
        md build-x @abstr_number 
        cd build-x @abstr_number
    

@abstr_number . Configure CMake to use the compiler of your choice (you can see a list by running `cmake --help`).
    
    
        cmake -G "Visual Studio  @abstr_number   @abstr_number " c:\GSL
    

@abstr_number . Build the test suite (in this case, in the Debug configuration, Release is another good choice).
    
    
        cmake --build . --config Debug
    

@abstr_number . Run the test suite.
    
    
        ctest -C Debug
    

All tests should pass - indicating your platform is fully supported and you are ready to use the GSL types!

## Using the libraries

As the types are entirely implemented inline in headers, there are no linking requirements.

You can copy the gsl directory into your source tree so it is available to your compiler, then include the appropriate headers in your program.

Alternatively set your compiler's _include path_ flag to point to the GSL development folder (`c:\GSL\include` in the example above) or installation folder (after running the install). Eg.

MSVC++
    
    
    /I c:\GSL\include
    

GCC/clang
    
    
    -I$HOME/dev/GSL/include
    

Include the library using:
    
    
    #include <gsl/gsl>
    

## Debugging visualization support

For Visual Studio users, the file GSL.natvis in the root directory of the repository can be added to your project if you would like more helpful visualization of GSL types in the Visual Studio debugger than would be offered by default.
