@abstr_image 

# Mypy: Optional Static Typing for Python

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Got a question? Join us on Gitter!

We don't have a mailing list; but we are always happy to answer questions on @abstr_hyperlink . If you are sure you've found a bug please search our issue trackers for a duplicate before filing a new issue:

  * @abstr_hyperlink for mypy issues
  * @abstr_hyperlink for issues with specific modules
  * @abstr_hyperlink for discussion of new type system features (PEP @abstr_number changes) and runtime bugs in the typing module



## What is mypy?

Mypy is an optional static type checker for Python. You can add type hints ( @abstr_hyperlink ) to your Python programs, and use mypy to type check them statically. Find bugs in your programs without even running them!

You can mix dynamic and static typing in your programs. You can always fall back to dynamic typing when static typing is not convenient, such as for legacy code.

Here is a small example to whet your appetite (Python @abstr_number ):

@abstr_code_section See @abstr_hyperlink for more examples.

For Python @abstr_number . @abstr_number , the standard annotations are written as comments: @abstr_code_section 

See @abstr_hyperlink .

Mypy is in development; some features are missing and there are bugs. See 'Development status' below.

## Requirements

You need Python @abstr_number . @abstr_number or later to run mypy. You can have multiple Python versions ( @abstr_number .x and @abstr_number .x) installed on the same system without problems.

In Ubuntu, Mint and Debian you can install Python @abstr_number like this:
    
    
    $ sudo apt-get install python @abstr_number  python @abstr_number -pip
    

For other Linux flavors, macOS and Windows, packages are available at

http://www.python.org/getit/

## Quick start

Mypy can be installed using pip:
    
    
    $ python @abstr_number  -m pip install -U mypy
    

If you want to run the latest version of the code, you can install from git:
    
    
    $ python @abstr_number  -m pip install -U git+git://github.com/python/mypy.git
    

Now, if Python on your system is configured properly (else see "Troubleshooting" below), you can type-check the [statically typed parts] of a program like this:
    
    
    $ mypy PROGRAM
    

You can always use a Python interpreter to run your statically typed programs, even if they have type errors:
    
    
    $ python @abstr_number  PROGRAM
    

You can also try mypy in an @abstr_hyperlink (developed by Yusuke Miyazaki).

## IDE, Linter Integrations, and Pre-commit

Mypy can be integrated into popular IDEs:

  * Vim: @abstr_hyperlink in `.vimrc` add `let g:syntastic_python_checkers=['mypy']`
  * Emacs: using @abstr_hyperlink and @abstr_hyperlink 
  * Sublime Text: @abstr_hyperlink 
  * Atom: @abstr_hyperlink 
  * PyCharm: @abstr_hyperlink (PyCharm integrates @abstr_hyperlink )
  * VS Code: provides @abstr_hyperlink with mypy.



Mypy can also be integrated into [Flake @abstr_number ] using [flake @abstr_number -mypy], or can be set up as a pre-commit hook using [pre-commit mirrors-mypy].

## Web site and documentation

Documentation and additional information is available at the web site:

http://www.mypy-lang.org/

Or you can jump straight to the documentation:

http://mypy.readthedocs.io/

## Troubleshooting

Depending on your configuration, you may have to run `pip` like this:
    
    
    $ python @abstr_number  -m pip install -U mypy
    

This should automatically install the appropriate version of mypy's parser, typed-ast. If for some reason it does not, you can install it manually:
    
    
    $ python @abstr_number  -m pip install -U typed-ast
    

If the `mypy` command isn't found after installation: After `python @abstr_number -m pip install`, the `mypy` script and dependencies, including the `typing` module, will be installed to system-dependent locations. Sometimes the script directory will not be in `PATH`, and you have to add the target directory to `PATH` manually or create a symbolic link to the script. In particular, on macOS, the script may be installed under `/Library/Frameworks`:
    
    
    /Library/Frameworks/Python.framework/Versions/<version>/bin
    

In Windows, the script is generally installed in `\PythonNN\Scripts`. So, type check a program like this (replace `\Python @abstr_number` with your Python installation path):
    
    
    C:\>\Python @abstr_number \python \Python @abstr_number \Scripts\mypy PROGRAM
    

### Working with `virtualenv`

If you are using @abstr_hyperlink , make sure you are running a python @abstr_number environment. Installing via `pip @abstr_number` in a v @abstr_number environment will not configure the environment to run installed modules from the command line.
    
    
    $ python @abstr_number  -m pip install -U virtualenv
    $ python @abstr_number  -m virtualenv env
    

## Quick start for contributing to mypy

If you want to contribute, first clone the mypy git repository:
    
    
    $ git clone --recurse-submodules https://github.com/python/mypy.git
    

If you've already cloned the repo without `--recurse-submodules`, you need to pull in the typeshed repo as follows:
    
    
    $ git submodule init
    $ git submodule update
    

Either way you should now have a subdirectory `typeshed` inside your mypy repo, your folders tree should be like `mypy/mypy/typeshed`, containing a clone of the typeshed repo (`https://github.com/python/typeshed`).

From the mypy directory, use pip to install mypy:
    
    
    $ cd mypy
    $ python @abstr_number  -m pip install -U .
    

Replace `python @abstr_number` with your Python @abstr_number interpreter. You may have to do the above as root. For example, in Ubuntu:
    
    
    $ sudo python @abstr_number  -m pip install -U .
    

Now you can use the `mypy` program just as above. In case of trouble see "Troubleshooting" above.

## Working with the git version of mypy

mypy contains a submodule, "typeshed". See http://github.com/python/typeshed. This submodule contains types for the Python standard library.

Due to the way git submodules work, you'll have to do @abstr_code_section whenever you change branches, merge, rebase, or pull.

(It's possible to automate this: Search Google for "git hook update submodule")

## Tests

The basic way to run tests:
    
    
    $ pip @abstr_number  install -r test-requirements.txt
    $ python @abstr_number  -m pip install -U typing
    $ ./runtests.py
    

For more on the tests, see Test README.md

## Development status

Mypy is beta software, but it has already been used in production for several years at Dropbox, and it has an extensive test suite.

See the roadmap if you are interested in plans for the future.

## Changelog

Follow mypy's updates on the blog: http://mypy-lang.blogspot.com/

## Issue tracker

Please report any bugs and enhancement ideas using the mypy issue tracker: https://github.com/python/mypy/issues

If you have any questions about using mypy or types, please ask in the typing gitter instead: https://gitter.im/python/typing

## Compiled version of mypy

We have built an compiled version of mypy using the @abstr_hyperlink for mypy-annotated Python code. It is approximately @abstr_number times faster than interpreted mypy and is available (and the default) for @abstr_number -bit Windows, macOS, and Linux.

To install an interpreted mypy instead, use:
    
    
    $ python @abstr_number  -m pip install --no-binary mypy -U mypy
    

If you wish to test out the compiled version of a development version of mypy, you can directly install a binary from https://github.com/mypyc/mypy_mypyc-wheels/releases/latest.

## Help wanted

Any help in testing, development, documentation and other tasks is highly appreciated and useful to the project. There are tasks for contributors of all experience levels. If you're just getting started, ask on the @abstr_hyperlink for ideas of good beginner issues.

For more details, see the file CONTRIBUTING.md.

## License

Mypy is licensed under the terms of the MIT License (see the file LICENSE).
