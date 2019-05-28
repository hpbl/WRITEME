## Build Status

| Build branch | master | develop | |-----|-----|-----| | GCC/Clang x @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | Visual Studio x @abstr_number | @abstr_hyperlink | @abstr_hyperlink |

# clBLAS

This repository houses the code for the OpenCL™ BLAS portion of clMath. The complete set of BLAS level @abstr_number , @abstr_number & @abstr_number routines is implemented. Please see Netlib BLAS for the list of supported routines. In addition to GPU devices, the library also supports running on CPU devices to facilitate debugging and multicore programming. APPML @abstr_number . @abstr_number is the most current generally available pre-packaged binary version of the library available for download for both Linux and Windows platforms.

The primary goal of clBLAS is to make it easier for developers to utilize the inherent performance and power efficiency benefits of heterogeneous computing. clBLAS interfaces do not hide nor wrap OpenCL interfaces, but rather leaves OpenCL state management to the control of the user to allow for maximum performance and flexibility. The clBLAS library does generate and enqueue optimized OpenCL kernels, relieving the user from the task of writing, optimizing and maintaining kernel code themselves.

## clBLAS update notes @abstr_number / @abstr_number

  * Introducing @abstr_hyperlink 
    * clBLAS's Gemm implementation has been comprehensively overhauled to use AutoGemm. AutoGemm is a suite of python scripts which generate optimized kernels and kernel selection logic, for all precisions, transposes, tile sizes and so on.
    * CMake is configured to use AutoGemm for clBLAS so the build and usage experience of Gemm remains unchanged (only performance and maintainability has been improved). Kernel sources are generated at build time (not runtime) and can be configured within CMake to be pre-compiled at build time.
    * clBLAS users with unique Gemm requirements can customize AutoGemm to their needs (such as non-default tile sizes for very small or very skinny matrices); see @abstr_hyperlink documentation for details.



## clBLAS library user documentation

@abstr_hyperlink for developers is available online as a GitHub Pages website

## Google Groups

Two mailing lists have been created for the clMath projects:

  * @abstr_hyperlink - group whose focus is to answer questions on using the library or reporting issues

  * @abstr_hyperlink - group whose focus is for developers interested in contributing to the library code itself




## clBLAS Wiki

The @abstr_hyperlink contains helpful documentation, including a [build primer][]

## Contributing code

Please refer to and read the Contributing document for guidelines on how to contribute code to this open source project. The code in the /master branch is considered to be stable, and all pull-requests should be made against the /develop branch.

## License

The source for clBLAS is licensed under the @abstr_hyperlink 

## Example

The simple example below shows how to use clBLAS to compute an OpenCL accelerated SGEMM

@abstr_code_section 

## Build dependencies

### Library for Windows

  * Windows® @abstr_number / @abstr_number 
  * Visual Studio @abstr_number SP @abstr_number , @abstr_number 
  * An OpenCL SDK, such as APP SDK @abstr_number . @abstr_number 
  * Latest CMake



### Library for Linux

  * GCC @abstr_number . @abstr_number and onwards
  * An OpenCL SDK, such as APP SDK @abstr_number . @abstr_number 
  * Latest CMake



### Library for Mac OSX

  * Recommended to generate Unix makefiles with cmake



### Test infrastructure

  * Googletest v @abstr_number . @abstr_number 
  * ACML on windows/linux; Accelerate on Mac OSX
  * Latest Boost



### Performance infrastructure

  * Python


