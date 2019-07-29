# dlib C++ library @abstr_hyperlink 

Dlib is a modern C++ toolkit containing machine learning algorithms and tools for creating complex software in C++ to solve real world problems. See @abstr_hyperlink for the main project documentation and API reference.

## Compiling dlib C++ example programs

Go into the examples folder and type:

@abstr_code_section 

That will build all the examples. If you have a CPU that supports AVX instructions then turn them on like this:

@abstr_code_section 

Doing so will make some things run faster.

Finally, Visual Studio users should usually do everything in @abstr_number bit mode. By default Visual Studio is @abstr_number bit, both in its outputs and its own execution, so you have to explicitly tell it to use @abstr_number bits. Since it's not the @abstr_number s anymore you probably want to use @abstr_number bits. Do that with a cmake invocation like this: @abstr_code_section 

## Compiling your own C++ programs that use dlib

The examples folder has a @abstr_hyperlink that tells you what to do. There are also additional instructions on the @abstr_hyperlink .

## Compiling dlib Python API

Before you can run the Python example programs you must compile dlib. Type:

@abstr_code_section 

## Running the unit test suite

Type the following to compile and run the dlib unit test suite:

@abstr_code_section 

Note that on windows your compiler might put the test executable in a subfolder called `Release`. If that's the case then you have to go to that folder before running the test.

This library is licensed under the Boost Software License, which can be found in @abstr_hyperlink . The long and short of the license is that you can use dlib however you like, even in closed source commercial software.

## dlib sponsors

This research is based in part upon work supported by the Office of the Director of National Intelligence (ODNI), Intelligence Advanced Research Projects Activity (IARPA) under contract number @abstr_number - @abstr_number . The views and conclusions contained herein are those of the authors and should not be interpreted as necessarily representing the official policies or endorsements, either expressed or implied, of ODNI, IARPA, or the U.S. Government.
