# Google Test

#### OSS Builds Status:

@abstr_hyperlink @abstr_hyperlink 

### Summer Vacation

June @abstr_number , @abstr_number - July @abstr_number @abstr_number due to summer vacations there will be much reduced activity on Pull Requests and issues from the maintainers.

### Future Plans

#### @abstr_number . @abstr_number .x Release:

@abstr_hyperlink is the last release that works with pre-C++ @abstr_number compilers. The @abstr_number . @abstr_number .x will not accept any requests for any new features and any bugfix requests will only be accepted if proven "critical"

#### Post @abstr_number . @abstr_number .x:

On-going work to improve/cleanup/pay technical debt. When this work is completed there will be a @abstr_number . @abstr_number .x tagged release

#### Post @abstr_number . @abstr_number .x

Post @abstr_number . @abstr_number .x googletest will follow @abstr_hyperlink 

## Welcome to **Google Test** , Google's C++ test framework!

This repository is a merger of the formerly separate GoogleTest and GoogleMock projects. These were so closely related that it makes sense to maintain and release them together.

Please subscribe to the mailing list at googletestframework@googlegroups.com for questions, discussions, and development.

### Getting started:

The information for **Google Test** is available in the Google Test Primer documentation.

**Google Mock** is an extension to Google Test for writing and using C++ mock classes. See the separate Google Mock documentation.

More detailed documentation for googletest is in its interior googletest/README.md file.

## Features

  * An @abstr_hyperlink test framework.
  * Test discovery.
  * A rich set of assertions.
  * User-defined assertions.
  * Death tests.
  * Fatal and non-fatal failures.
  * Value-parameterized tests.
  * Type-parameterized tests.
  * Various options for running the tests.
  * XML test report generation.



## Platforms

Google test has been used on a variety of platforms:

  * Linux
  * Mac OS X
  * Windows
  * Cygwin
  * MinGW
  * Windows Mobile
  * Symbian
  * PlatformIO



## Who Is Using Google Test?

In addition to many internal projects at Google, Google Test is also used by the following notable projects:

  * The @abstr_hyperlink (behind the Chrome browser and Chrome OS).
  * The @abstr_hyperlink compiler.
  * @abstr_hyperlink , Google's data interchange format.
  * The @abstr_hyperlink computer vision library.
  * @abstr_hyperlink : header only, dependency-free deep learning framework in C++ @abstr_number .



## Related Open Source Projects

@abstr_hyperlink is a Qt @abstr_number based automated test-runner and Graphical User Interface with powerful features for Windows and Linux platforms.

@abstr_hyperlink is test runner that runs your test binary, allows you to track its progress via a progress bar, and displays a list of test failures. Clicking on one shows failure text. Google Test UI is written in C#.

@abstr_hyperlink is an event listener for Google Test that implements the @abstr_hyperlink for test result output. If your test runner understands TAP, you may find it useful.

@abstr_hyperlink is a test runner that runs tests from your binary in parallel to provide significant speed-up.

@abstr_hyperlink is a VS Code extension allowing to view Google Tests in a tree view, and run/debug your tests.

## Requirements

Google Test is designed to have fairly minimal requirements to build and use with your projects, but there are some. If you notice any problems on your platform, please notify @abstr_hyperlink . Patches for fixing them are welcome!

### Build Requirements

These are the base requirements to build and use Google Test from a source package:

  * @abstr_hyperlink or @abstr_hyperlink . NOTE: Bazel is the build system that googletest is using internally and tests against. CMake is community-supported.

  * a C++ @abstr_number -standard-compliant compiler




## Contributing change

Please read the CONTRIBUTING.md for details on how to contribute to this project.

Happy testing!
