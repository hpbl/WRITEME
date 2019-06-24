# This is Python version @abstr_number . @abstr_number . @abstr_number alpha @abstr_number 

.. image:: https://travis-ci.org/python/cpython.svg?branch=master :alt: CPython build status on Travis CI :target: https://travis-ci.org/python/cpython

.. image:: https://ci.appveyor.com/api/projects/status/ @abstr_number mew @abstr_number a @abstr_number xdkbf @abstr_number ua/branch/master?svg=true :alt: CPython build status on Appveyor :target: https://ci.appveyor.com/project/python/cpython/branch/master

.. image:: https://dev.azure.com/python/cpython/_apis/build/status/Azure% @abstr_number Pipelines% @abstr_number CI?branchName=master :alt: CPython build status on Azure DevOps :target: https://dev.azure.com/python/cpython/_build/latest?definitionId= @abstr_number &branchName=master

.. image:: https://codecov.io/gh/python/cpython/branch/master/graph/badge.svg :alt: CPython code coverage on Codecov :target: https://codecov.io/gh/python/cpython

.. image:: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg :alt: Python Zulip chat :target: https://python.zulipchat.com

Copyright (c) @abstr_number - @abstr_number Python Software Foundation. All rights reserved.

See the end of this file for further copyright and license information.

.. contents::

## General Information

  * Website: https://www.python.org
  * Source code: https://github.com/python/cpython
  * Issue tracker: https://bugs.python.org
  * Documentation: https://docs.python.org
  * Developer's Guide: https://devguide.python.org/



## Contributing to CPython

For more complete instructions on contributing to CPython development, see the `Developer Guide`_.

.. _Developer Guide: https://devguide.python.org/

## Using Python

Installable Python kits, and information about using Python, are available at `python.org`_.

.. _python.org: https://www.python.org/

## Build Instructions

On Unix, Linux, BSD, macOS, and Cygwin::
    
    
    ./configure
    make
    make test
    sudo make install
    

This will install Python as `python @abstr_number`.

You can pass many options to the configure script; run `./configure --help` to find out more. On macOS and Cygwin, the executable is called `python.exe`; elsewhere it's just `python`.

If you are running on macOS with the latest updates installed, make sure to install OpenSSL or some other SSL software along with Homebrew or another package manager. If issues persist, see https://devguide.python.org/setup/#macos-and-os-x for more information.

On macOS, if you have configured Python with `--enable-framework`, you should use `make frameworkinstall` to do the installation. Note that this installs the Python executable in a place that is not normally on your PATH, you may want to set up a symlink in `/usr/local/bin`.

On Windows, see `PCbuild/readme.txt <https://github.com/python/cpython/blob/master/PCbuild/readme.txt>`_.

If you wish, you can create a subdirectory and invoke configure from there. For example::
    
    
    mkdir debug
    cd debug
    ../configure --with-pydebug
    make
    make test
    

(This will fail if you _also_ built at the top-level directory. You should do a `make clean` at the top-level first.)

To get an optimized build of Python, `configure --enable-optimizations` before you run `make`. This sets the default make targets up to enable Profile Guided Optimization (PGO) and may be used to auto-enable Link Time Optimization (LTO) on some platforms. For more details, see the sections below.

Profile Guided Optimization ^^^^^^^^^^^^^^^^^^^^^^^^^^^

PGO takes advantage of recent versions of the GCC or Clang compilers. If used, either via `configure --enable-optimizations` or by manually running `make profile-opt` regardless of configure flags, the optimized build process will perform the following steps:

The entire Python directory is cleaned of temporary files that may have resulted from a previous compilation.

An instrumented version of the interpreter is built, using suitable compiler flags for each flavour. Note that this is just an intermediary step. The binary resulting from this step is not good for real life workloads as it has profiling instructions embedded inside.

After the instrumented interpreter is built, the Makefile will run a training workload. This is necessary in order to profile the interpreter execution. Note also that any output, both stdout and stderr, that may appear at this step is suppressed.

The final step is to build the actual interpreter, using the information collected from the instrumented one. The end result will be a Python binary that is optimized; suitable for distribution or production installation.

Link Time Optimization ^^^^^^^^^^^^^^^^^^^^^^

Enabled via configure's `--with-lto` flag. LTO takes advantage of the ability of recent compiler toolchains to optimize across the otherwise arbitrary `.o` file boundary when building final executables or shared libraries for additional performance gains.

## What's New

We have a comprehensive overview of the changes in the `What's New in Python @abstr_number . @abstr_number <https://docs.python.org/ @abstr_number . @abstr_number /whatsnew/ @abstr_number . @abstr_number .html>`_ document. For a more detailed change log, read `Misc/NEWS <https://github.com/python/cpython/blob/master/Misc/NEWS.d>`_, but a full accounting of changes can only be gleaned from the `commit history <https://github.com/python/cpython/commits/master>`_.

If you want to install multiple versions of Python, see the section below entitled "Installing multiple versions".

## Documentation

`Documentation for Python @abstr_number . @abstr_number <https://docs.python.org/ @abstr_number . @abstr_number />`_ is online, updated daily.

It can also be downloaded in many formats for faster access. The documentation is downloadable in HTML, PDF, and reStructuredText formats; the latter version is primarily for documentation authors, translators, and people with special formatting requirements.

For information about building Python's documentation, refer to `Doc/README.rst <https://github.com/python/cpython/blob/master/Doc/README.rst>`_.

## Converting From Python @abstr_number .x to @abstr_number .x

Significant backward incompatible changes were made for the release of Python @abstr_number . @abstr_number , which may cause programs written for Python @abstr_number to fail when run with Python @abstr_number . For more information about porting your code from Python @abstr_number to Python @abstr_number , see the `Porting HOWTO <https://docs.python.org/ @abstr_number /howto/pyporting.html>`_.

## Testing

To test the interpreter, type `make test` in the top-level directory. The test set produces some output. You can generally ignore the messages about skipped tests due to optional features which can't be imported. If a message is printed about a failed test or a traceback or core dump is produced, something is wrong.

By default, tests are prevented from overusing resources like disk space and memory. To enable these tests, run `make testall`.

If any tests fail, you can re-run the failing test(s) in verbose mode. For example, if `test_os` and `test_gdb` failed, you can run::
    
    
    make test TESTOPTS="-v test_os test_gdb"
    

If the failure persists and appears to be a problem with Python rather than your environment, you can `file a bug report <https://bugs.python.org>`_ and include relevant output from that command to show the issue.

See `Running & Writing Tests <https://devguide.python.org/runtests/>`_ for more on running tests.

## Installing multiple versions

On Unix and Mac systems if you intend to install multiple versions of Python using the same installation prefix (`--prefix` argument to the configure script) you must take care that your primary python executable is not overwritten by the installation of a different version. All files and directories installed using `make altinstall` contain the major and minor version and can thus live side-by-side. `make install` also creates `${prefix}/bin/python @abstr_number` which refers to `${prefix}/bin/pythonX.Y`. If you intend to install multiple versions using the same prefix you must decide which version (if any) is your "primary" version. Install that version using `make install`. Install all other versions using `make altinstall`.

For example, if you want to install Python @abstr_number . @abstr_number , @abstr_number . @abstr_number , and @abstr_number . @abstr_number with @abstr_number . @abstr_number being the primary version, you would execute `make install` in your @abstr_number . @abstr_number build directory and `make altinstall` in the others.

## Issue Tracker and Mailing List

Bug reports are welcome! You can use the `issue tracker <https://bugs.python.org>`_ to report bugs, and/or submit pull requests `on GitHub <https://github.com/python/cpython>`_.

You can also follow development discussion on the `python-dev mailing list <https://mail.python.org/mailman/listinfo/python-dev/>`_.

## Proposals for enhancement

If you have a proposal to change Python, you may want to send an email to the comp.lang.python or `python-ideas`_ mailing lists for initial feedback. A Python Enhancement Proposal (PEP) may be submitted if your idea gains ground. All current PEPs, as well as guidelines for submitting a new PEP, are listed at `python.org/dev/peps/ <https://www.python.org/dev/peps/>`_.

.. _python-ideas: https://mail.python.org/mailman/listinfo/python-ideas/

## Release Schedule

See :pep:`@abstr_number` for Python @abstr_number . @abstr_number release details.

## Copyright and License Information

Copyright (c) @abstr_number - @abstr_number Python Software Foundation. All rights reserved.

Copyright (c) @abstr_number BeOpen.com. All rights reserved.

Copyright (c) @abstr_number - @abstr_number Corporation for National Research Initiatives. All rights reserved.

Copyright (c) @abstr_number - @abstr_number Stichting Mathematisch Centrum. All rights reserved.

See the file "LICENSE" for information on the history of this software, terms & conditions for usage, and a DISCLAIMER OF ALL WARRANTIES.

This Python distribution contains _no_ GNU General Public License (GPL) code, so it may be used in proprietary projects. There are interfaces to some GNU code but these are entirely optional.

All trademarks referenced herein are property of their respective holders.
