# Overview

EWS is an API that third-party programmers can use to communicate with Microsoft Exchange Server. The API exists since Exchange Server @abstr_number and is continuously up-dated by Microsoft and present in the latest iteration of the product, Exchange Server @abstr_number .

This library provides a native and platform-independent way to use EWS in your C++ application.

@abstr_image 

## Supported Operations and Elements

  * Autodiscover
  * `<CreateItem/>`, `<SendItem/>`, `<FindItem/>`, `<GetItem/>`, `<UpdateItem/>`, and `<DeleteItem/>` operations
  * `<CreateAttachment/>`, `<GetAttachment/>`, `<DeleteAttachment/>` for file attachments. Item attachments are not supported yet
  * `<CalendarItem/>`, `<Message/>`, `<Contact/>`, `<Task/>` items. Note that we still don't support all properties of these items. But we're working on it



## Supported Authentication Schemes

  * HTTP basic auth
  * NTLM
  * Kerberos is currently not supported but its on the TODO list



## Supported Compilers

  * Visual Studio @abstr_number 
  * Visual Studio @abstr_number 
  * Visual Studio @abstr_number 
  * Clang since @abstr_number . @abstr_number 
    * with libc++ on Mac OS X
    * with libstdc++ on Linux (Note that libc++ on Linux is not supported)
  * GCC since @abstr_number . @abstr_number with libstdc++



|Compiler| @abstr_number -bit| @abstr_number -bit| |--------|:----:|:----:| |Visual Studio @abstr_number | * | * | |Visual Studio @abstr_number | @abstr_hyperlink | @abstr_hyperlink | |Visual Studio @abstr_number | @abstr_hyperlink | @abstr_hyperlink | |Clang @abstr_number . @abstr_number with libc++| * | * | |GCC @abstr_number . @abstr_number with libstdc++| @abstr_hyperlink | * | * = will be added soon

## Supported Operating Systems

  * Microsoft Windows @abstr_number . @abstr_number and Windows @abstr_number 
  * macOS starting with @abstr_number . @abstr_number 
  * RHEL @abstr_number 
  * Ubuntu starting with @abstr_number . @abstr_number LTS
  * SLES @abstr_number . @abstr_number 



## Supported Microsoft Exchange Server Versions

  * Microsoft Exchange Server @abstr_number SP @abstr_number 



However, our goal is to support all Exchange Server versions since @abstr_number .

## Run-time Dependencies

  * libcurl, at least version @abstr_number . @abstr_number 



## Dev Dependencies

  * Git
  * CMake
  * Doxygen (optional)
  * Boost (optional)
  * Python @abstr_number or @abstr_number (optional)



## Note Windows Users

You can obtain an up-to-date and easy-to-use binary distribution of libcurl from here: @abstr_hyperlink 

Additionally, you probably need to tell CMake where to find it. Just set `CMAKE_PREFIX_PATH` to the path where you installed libcurl (e.g. `C:\Program Files\cURL`) and re-configure.

You can also use the Windows batch script provided in `scripts\build-curl.bat` to download and compile libcurl for your particular version of Visual Studio.

## Source Code

ews-cpp's source code is available as a Git repository. To obtain it, type:

@abstr_code_section 

## Building

### Linux

The library is header-only. So there is no need to build anything. Just copy the `include/ews/` directory wherever you may like.

To build the accompanied tests with debugging symbols and Address Sanitizer enabled do something like this:

@abstr_code_section 

Type `make edit_cache` to see all configuration options. `make help` shows you all available targets.

### Windows

To build the tests and examples on Windows you can use `cmake-gui`. For more see: https://cmake.org/runningcmake/

If you do not want to use any GUI to compile the examples and tests you could do something like this with the Windows `cmd.exe` command prompt:

@abstr_code_section 

Make sure to choose the right generator for your environment.

### API Docs

Use the `doc` target to create the API documentation with Doxygen. Type:

@abstr_code_section 

### Test Suite

In order to run individual examples or the test suite export following environment variables like this:

@abstr_code_section 

Be sure to change the values to an actual account on some Exchange server that you can use for testing. Do not run the tests on your own production account.

Once you've build the project, you can execute the tests with:

@abstr_code_section 

## Design Notes

ews-cpp is written in a "modern C++" way:

  * C++ Standard Library, augmented with rapidxml for XML parsing
  * Smart pointers instead of raw pointers
  * Pervasive RAII idiom
  * Handle errors using C++ exceptions
  * Coding conventions inspired by Boost



## API

Just add:

```c++

# include 

```

to your include directives and you are good to go.

Take a look at the `examples/` directory to get an idea of how the API feels. ews-cpp is a thin wrapper around Microsoft's EWS API. You will need to refer to the @abstr_hyperlink for all available parameters to pass and all available attributes on items. From @abstr_number . @abstr_number ft it looks like this:

@abstr_image 

You have items and you have **the** service. You use the service whenever you want to talk to the Exchange server.

Please note one important caveat though. ews-cpp's API is designed to be "blocking". This means whenever you call one of the service's member functions to talk to an Exchange server that call blocks until it receives a request from the server. And that may, well, just take forever (actually until a timeout is reached). You need to keep this in mind in order to not block your main or UI thread.

Implications of this design choice

Pros:

  * A blocking API is much easier to use and understand



Cons:

  * You just might accidentally block your UI thread
  * You cannot issue thousands of EWS requests asynchronously simply because you cannot spawn thousands of threads in your process. You may need additional effort here



## Legal Notice

ews-cpp is developed by otris software AG and was initially released to the public in July @abstr_number . It is licensed under the Apache License, Version @abstr_number . @abstr_number (see LICENSE file).

For more information about otris software AG visit our website @abstr_hyperlink or our Open Source repositories at @abstr_hyperlink .
