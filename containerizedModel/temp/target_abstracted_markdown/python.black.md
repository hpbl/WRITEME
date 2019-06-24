@abstr_image The Uncompromising Code Formatter

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

> “Any color you like.”

_Black_ is the uncompromising Python code formatter. By using it, you agree to cede control over minutiae of hand-formatting. In return, _Black_ gives you speed, determinism, and freedom from `pycodestyle` nagging about formatting. You will save time and mental energy for more important matters.

Blackened code looks the same regardless of the project you're reading. Formatting becomes transparent after a while and you can focus on the content instead.

_Black_ makes code review faster by producing the smallest diffs possible.

Try it out now using the @abstr_hyperlink . Watch the @abstr_hyperlink to learn more.

* * *

_Contents:_ **Installation and usage** | **Code style** | **pyproject.toml** | **Editor integration** | **blackd** | **Version control integration** | **Ignoring unmodified files** | **Used by** | **Testimonials** | **Show your style** | **Contributing** | **Change Log** | **Authors**

* * *

## Installation and usage

### Installation

_Black_ can be installed by running `pip install black`. It requires Python @abstr_number . @abstr_number . @abstr_number + to run but you can reformat Python @abstr_number code with it, too.

### Usage

To get started right away with sensible defaults:

@abstr_code_section 

### Command line options

_Black_ doesn't provide many options. You can list them by running `black --help`:

@abstr_code_section 

_Black_ is a well-behaved Unix-style command-line tool: * it does nothing if no sources are passed to it; * it will read from standard input and write to standard output if `-` is used as the filename; * it only outputs messages to users on standard error; * exits with code @abstr_number unless an internal error occurred (or `--check` was used).

### NOTE: This is a beta product

_Black_ is already successfully used by many projects, small and big. It also sports a decent test suite. However, it is still very new. Things will probably be wonky for a while. This is made explicit by the "Beta" trove classifier, as well as by the "b" in the version number. What this means for you is that **until the formatter becomes stable, you should expect some formatting to change in the future**. That being said, no drastic stylistic changes are planned, mostly responses to bug reports.

Also, as a temporary safety measure, _Black_ will check that the reformatted code still produces a valid AST that is equivalent to the original. This slows it down. If you're feeling confident, use `--fast`.

## The _Black_ code style

_Black_ reformats entire files in place. It is not configurable. It doesn't take previous formatting into account. It doesn't reformat blocks that start with `# fmt: off` and end with `# fmt: on`. `# fmt: on/off` have to be on the same level of indentation. It also recognizes @abstr_hyperlink 's block comments to the same effect, as a courtesy for straddling code.

### How _Black_ wraps lines

_Black_ ignores previous formatting and applies uniform horizontal and vertical whitespace to your code. The rules for horizontal whitespace can be summarized as: do whatever makes `pycodestyle` happy. The coding style used by _Black_ can be viewed as a strict subset of PEP @abstr_number .

As for vertical whitespace, _Black_ tries to render one full expression or simple statement per line. If this fits the allotted line length, great. ```py @abstr_number 

# in:

l = [ @abstr_number , @abstr_number , @abstr_number , ]

# out:

l = [ @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py @abstr_number 

# in:

ImportantClass.important_method(exc, limit, lookup_lines, capture_locals, extra_argument)

# out:

ImportantClass.important_method( exc, limit, lookup_lines, capture_locals, extra_argument ) @abstr_code_section py @abstr_number 

# in:

def very_important_function(template: str, *variables, file: os.PathLike, engine: str, header: bool = True, debug: bool = False): """Applies `variables` to the `template` and writes to `file`.""" with open(file, 'w') as f: ...

# out:

def very_important_function( template: str, *variables, file: os.PathLike, engine: str, header: bool = True, debug: bool = False, ): """Applies `variables` to the `template` and writes to `file`.""" with open(file, "w") as f: ... @abstr_code_section [settings] multi_line_output= @abstr_number include_trailing_comma=True force_grid_wrap= @abstr_number use_parentheses=True line_length= @abstr_number @abstr_code_section $ isort --multi-line= @abstr_number --trailing-comma --force-grid-wrap= @abstr_number --use-parentheses --line-width= @abstr_number [ file.py ] @abstr_code_section ini [flake @abstr_number ] max-line-length = @abstr_number ... select = C,E,F,W,B,B @abstr_number ignore = E @abstr_number ,W @abstr_number @abstr_code_section py @abstr_number return not (this or that) decision = (maybe.this() and values > @abstr_number ) or (maybe.that() and values < @abstr_number ) @abstr_code_section py @abstr_number def example(session): result = ( session.query(models.Customer.id) .filter( models.Customer.account_id == account_id, models.Customer.email == email_address, ) .order_by(models.Customer.id.asc()) .all() ) @abstr_code_section toml [tool.black] line-length = @abstr_number target-version = ['py @abstr_number '] include = '.pyi?$' exclude = '''

( /( .eggs # exclude a few common directories in the | .git # root of the project | .hg | .mypy_cache | .tox | .venv | _build | buck-out | build | dist )/ | foo.py # also separately exclude a file named foo.py in # the root of the project ) ''' @abstr_code_section console $ pip install black @abstr_code_section console $ which black /usr/local/bin/black # possible location @abstr_code_section console $ where black %LocalAppData%\Programs\Python\Python @abstr_number - @abstr_number \Scripts\black.exe # possible location @abstr_code_section PyCharm -> Preferences -> Tools -> External Tools```

On Windows / Linux / BSD:

`File -> Settings -> Tools -> External Tools`

@abstr_number . Click the + icon to add a new external tool with the following values: \- Name: Black \- Description: Black is the uncompromising Python code formatter. \- Program: "$FilePath$"

@abstr_number . Format the currently opened file by selecting `Tools -> External Tools -> black`. \- Alternatively, you can set a keyboard shortcut by navigating to `Preferences or Settings -> Keymap -> External Tools -> External Tools - Black`.

@abstr_number . Optionally, run _Black_ on every file save:
    
    
     @abstr_number . Make sure you have the [File Watcher](https://plugins.jetbrains.com/plugin/ @abstr_number -file-watchers) plugin installed.
     @abstr_number . Go to `Preferences or Settings -> Tools -> File Watchers` and click `+` to add a new watcher:
        - Name: Black
        - File type: Python
        - Scope: Project Files
        - Program: <install_location_from_step_ @abstr_number >
        - Arguments: `$FilePath$`
        - Output paths to refresh: `$FilePath$`
        - Working directory: `$ProjectFileDir$`
    - Uncheck "Auto-save edited files to trigger the watcher"
    

### Wing IDE

Wing supports black via the OS Commands tool, as explained in the Wing documentation on @abstr_hyperlink . The detailed procedure is:

@abstr_number . Install `black`.

@abstr_code_section 

@abstr_number . Make sure it runs from the command line, e.g.

@abstr_code_section 

@abstr_number . In Wing IDE, activate the **OS Commands** panel and define the command **black** to execute black on the currently selected file:

  * Use the Tools -> OS Commands menu selection
  * click on **+** in **OS Commands** - > New: Command line..

    * Title: black
    * Command Line: black %s
    * I/O Encoding: Use Default 
    * Key Binding: F @abstr_number 
    * [x] Raise OS Commands when executed
    * [x] Auto-save files before execution
    * [x] Line mode

@abstr_number . Select a file in the editor and press _*F @abstr_number *_ , or whatever key binding you selected in step @abstr_number , to reformat the file.




### Vim

Commands and shortcuts:

  * `:Black` to format the entire file (ranges not supported);
  * `:BlackUpgrade` to upgrade _Black_ inside the virtualenv;
  * `:BlackVersion` to get the current version of _Black_ inside the virtualenv.



Configuration: * `g:black_fast` (defaults to `@abstr_number`) * `g:black_linelength` (defaults to `@abstr_number`) * `g:black_skip_string_normalization` (defaults to `@abstr_number`) * `g:black_virtualenv` (defaults to `~/.vim/black`)

To install with @abstr_hyperlink :

@abstr_code_section 

or with @abstr_hyperlink :

@abstr_code_section 

or you can copy the plugin from @abstr_hyperlink . Let me know if this requires any changes to work with Vim @abstr_number 's builtin `packadd`, or Pathogen, and so on.

This plugin **requires Vim @abstr_number . @abstr_number + built with Python @abstr_number . @abstr_number + support**. It needs Python @abstr_number . @abstr_number to be able to run _Black_ inside the Vim process which is much faster than calling an external command.

On first run, the plugin creates its own virtualenv using the right Python version and automatically installs _Black_. You can upgrade it later by calling `:BlackUpgrade` and restarting Vim.

If you need to do anything special to make your virtualenv work and install _Black_ (for example you want to run a version from master), create a virtualenv manually and point `g:black_virtualenv` to it. The plugin will use it.

To run _Black_ on save, add the following line to `.vimrc` or `init.vim`:

@abstr_code_section 

**How to get Vim with Python @abstr_number . @abstr_number ?** On Ubuntu @abstr_number . @abstr_number Vim comes with Python @abstr_number . @abstr_number by default. On macOS with Homebrew run: `brew install vim --with-python @abstr_number`. When building Vim from source, use: `./configure --enable-python @abstr_number interp=yes`. There's many guides online how to do this.

### Visual Studio Code

Use the @abstr_hyperlink ( @abstr_hyperlink ).

### SublimeText @abstr_number

Use @abstr_hyperlink .

### Jupyter Notebook Magic

Use @abstr_hyperlink .

### Python Language Server

If your editor supports the @abstr_hyperlink (Atom, Sublime Text, Visual Studio Code and many more), you can use the @abstr_hyperlink with the @abstr_hyperlink plugin.

### Atom/Nuclide

Use @abstr_hyperlink .

### Other editors

Other editors will require external contributions.

Patches welcome! ✨ 🍰 ✨

Any tool that can pipe code through _Black_ using its stdio mode (just @abstr_hyperlink ). The formatted code will be returned on stdout (unless `--check` was passed). _Black_ will still emit messages on stderr but that shouldn't affect your use case.

This can be used for example with PyCharm's or IntelliJ's @abstr_hyperlink .

## blackd

`blackd` is a small HTTP server that exposes _Black_ 's functionality over a simple protocol. The main benefit of using it is to avoid paying the cost of starting up a new _Black_ process every time you want to blacken a file.

### Usage

`blackd` is not packaged alongside _Black_ by default because it has additional dependencies. You will need to do `pip install black[d]` to install it.

You can start the server on the default port, binding only to the local interface by running `blackd`. You will see a single line mentioning the server's version, and the host and port it's listening on. `blackd` will then print an access log similar to most web servers on standard output, merged with any exception traces caused by invalid formatting requests.

`blackd` provides even less options than _Black_. You can see them by running `blackd --help`:

@abstr_code_section 

There is no official blackd client tool (yet!). You can test that blackd is working using `curl`:

@abstr_code_section 

### Protocol

`blackd` only accepts `POST` requests at the `/` path. The body of the request should contain the python source code to be formatted, encoded according to the `charset` field in the `Content-Type` request header. If no `charset` is specified, `blackd` assumes `UTF- @abstr_number`.

There are a few HTTP headers that control how the source is formatted. These correspond to command line flags for _Black_. There is one exception to this: `X-Protocol-Version` which if present, should have the value `@abstr_number`, otherwise the request is rejected with `HTTP @abstr_number` (Not Implemented).

The headers controlling how code is formatted are:

  * `X-Line-Length`: corresponds to the `--line-length` command line flag.
  * `X-Skip-String-Normalization`: corresponds to the `--skip-string-normalization` command line flag. If present and its value is not the empty string, no string normalization will be performed.
  * `X-Fast-Or-Safe`: if set to `fast`, `blackd` will act as _Black_ does when passed the `--fast` command line flag.
  * `X-Python-Variant`: if set to `pyi`, `blackd` will act as _Black_ does when passed the `--pyi` command line flag. Otherwise, its value must correspond to a Python version or a set of comma-separated Python versions, optionally prefixed with `py`. For example, to request code that is compatible with Python @abstr_number . @abstr_number and @abstr_number . @abstr_number , set the header to `py @abstr_number . @abstr_number ,py @abstr_number . @abstr_number`.



If any of these headers are set to invalid values, `blackd` returns a `HTTP @abstr_number` error response, mentioning the name of the problematic header in the message body.

Apart from the above, `blackd` can produce the following response codes:

  * `HTTP @abstr_number`: If the input is already well-formatted. The response body is empty.
  * `HTTP @abstr_number`: If formatting was needed on the input. The response body contains the blackened Python code, and the `Content-Type` header is set accordingly.
  * `HTTP @abstr_number`: If the input contains a syntax error. Details of the error are returned in the response body.
  * `HTTP @abstr_number`: If there was any kind of error while trying to format the input. The response body contains a textual representation of the error.



## Version control integration

Use @abstr_hyperlink . Once you @abstr_hyperlink , add this to the `.pre-commit-config.yaml` in your repository: @abstr_code_section Then run `pre-commit install` and you're ready to go.

Avoid using `args` in the hook. Instead, store necessary configuration in `pyproject.toml` so that editors and command-line usage of Black all behave consistently for your project. See _Black_ 's own pyproject.toml for an example.

If you're already using Python @abstr_number . @abstr_number , switch the `language_version` accordingly. Finally, `stable` is a tag that is pinned to the latest release on PyPI. If you'd rather run on master, this is also an option.

## Ignoring unmodified files

_Black_ remembers files it has already formatted, unless the `--diff` flag is used or code is passed via standard input. This information is stored per-user. The exact location of the file depends on the _Black_ version and the system on which _Black_ is run. The file is non-portable. The standard location on common operating systems is:

  * Windows: `C:\\Users\<username>\AppData\Local\black\black\Cache\<version>\cache.<line-length>.<file-mode>.pickle`
  * macOS: `/Users/<username>/Library/Caches/black/<version>/cache.<line-length>.<file-mode>.pickle`
  * Linux: `/home/<username>/.cache/black/<version>/cache.<line-length>.<file-mode>.pickle`



`file-mode` is an int flag that determines whether the file was formatted as @abstr_number . @abstr_number + only, as .pyi, and whether string normalization was omitted.

To override the location of these files on macOS or Linux, set the environment variable `XDG_CACHE_HOME` to your preferred location. For example, if you want to put the cache in the directory you're running _Black_ from, set `XDG_CACHE_HOME=.cache`. _Black_ will then write the above files to `.cache/black/<version>/`.

## Used by

The following notable open-source projects trust _Black_ with enforcing a consistent code style: pytest, tox, Pyramid, Django Channels, Hypothesis, attrs, SQLAlchemy, Poetry, PyPA applications (Warehouse, Pipenv, virtualenv), every Datadog Agent Integration.

Are we missing anyone? Let us know.

## Testimonials

**Dusty Phillips** , @abstr_hyperlink :

> _Black_ is opinionated so you don't have to be.

**Hynek Schlawack** , @abstr_hyperlink , core developer of Twisted and CPython:

> An auto-formatter that doesn't suck is all I want for Xmas!

**Carl Meyer** , @abstr_hyperlink core developer:

> At least the name is good.

**Kenneth Reitz** , creator of @abstr_hyperlink and @abstr_hyperlink :

> This vastly improves the formatting of our code. Thanks a ton!

## Show your style

Use the badge in your project's README.md:

@abstr_code_section 

Using the badge in README.rst: @abstr_code_section 

Looks like this: @abstr_hyperlink 

## License

MIT

## Contributing to _Black_

In terms of inspiration, _Black_ is about as configurable as _gofmt_. This is deliberate.

Bug reports and fixes are always welcome! However, before you suggest a new feature or configuration knob, ask yourself why you want it. If it enables better integration with some workflow, fixes an inconsistency, speeds things up, and so on - go for it! On the other hand, if your answer is "because I don't like a particular formatting" then you're not ready to embrace _Black_ yet. Such changes are unlikely to get accepted. You can still try but prepare to be disappointed.

More details can be found in CONTRIBUTING.

## Change Log

### unreleased

  * added `black -c` as a way to format code passed from the command line (# @abstr_number )

  * \--safe now works with Python @abstr_number code (# @abstr_number )

  * fixed grammar selection for Python @abstr_number -specific code (# @abstr_number )

  * fixed feature detection for trailing commas in function definitions and call sites (# @abstr_number )

  * _Black_ can now format async generators (# @abstr_number )

  * _Black_ no longer crashes on Windows machines with more than @abstr_number cores (# @abstr_number )

  * _Black_ no longer crashes on standalone comments prepended with a backslash (# @abstr_number )

  * _Black_ no longer crashes on `from` ... `import` blocks with comments (# @abstr_number )

  * removed unnecessary parentheses around `yield` expressions (# @abstr_number )

  * added parentheses around long tuples in unpacking assignments (# @abstr_number )

  * fixed bug that led _Black_ format some code with a line length target of @abstr_number (# @abstr_number )

  * _Black_ no longer introduces quotes in f-string subexpressions on string boundaries (# @abstr_number )

  * if _Black_ puts parenthesis around a single expression, it moves comments to the wrapped expression instead of after the brackets (# @abstr_number )




### @abstr_number . @abstr_number b @abstr_number

  * new option `--target-version` to control which Python versions _Black_ -formatted code should target (# @abstr_number )

  * deprecated `--py @abstr_number` (use `--target-version=py @abstr_number` instead) (# @abstr_number )

  * _Black_ no longer normalizes numeric literals to include `_` separators (# @abstr_number )

  * long `del` statements are now split into multiple lines (# @abstr_number )

  * type comments are no longer mangled in function signatures

  * improved performance of formatting deeply nested data structures (# @abstr_number )

  * _Black_ now properly formats multiple files in parallel on Windows (# @abstr_number )

  * _Black_ now creates cache files atomically which allows it to be used in parallel pipelines (like `xargs -P @abstr_number`) (# @abstr_number )

  * _Black_ now correctly indents comments in files that were previously formatted with tabs (# @abstr_number )

  * `blackd` now supports CORS (# @abstr_number )




### @abstr_number . @abstr_number b @abstr_number

  * numeric literals are now formatted by _Black_ (# @abstr_number , # @abstr_number , # @abstr_number , # @abstr_number ):

    * numeric literals are normalized to include `_` separators on Python @abstr_number . @abstr_number + code

    * added `--skip-numeric-underscore-normalization` to disable the above behavior and leave numeric underscores as they were in the input

    * code with `_` in numeric literals is recognized as Python @abstr_number . @abstr_number +

    * most letters in numeric literals are lowercased (e.g., in `@abstr_number e @abstr_number`, `@abstr_number x @abstr_number`)

    * hexadecimal digits are always uppercased (e.g. `@abstr_number xBADC @abstr_number DE`)

  * added `blackd`, see its documentation for more info (# @abstr_number )

  * adjacent string literals are now correctly split into multiple lines (# @abstr_number )

  * trailing comma is now added to single imports that don't fit on a line (# @abstr_number )

  * cache is now populated when `--check` is successful for a file which speeds up consecutive checks of properly formatted unmodified files (# @abstr_number )

  * whitespace at the beginning of the file is now removed (# @abstr_number )

  * fixed mangling @abstr_hyperlink and @abstr_hyperlink special comments (# @abstr_number )

  * fixed unstable formatting when unpacking big tuples (# @abstr_number )

  * fixed parsing of `__future__` imports with renames (# @abstr_number )

  * fixed scope of `# fmt: off` when directly preceding `yield` and other nodes (# @abstr_number )

  * fixed formatting of lambda expressions with default arguments (# @abstr_number )

  * fixed `async for` statements: _Black_ no longer breaks them into separate lines (# @abstr_number )

  * note: the Vim plugin stopped registering `,=` as a default chord as it turned out to be a bad idea (# @abstr_number )




### @abstr_number . @abstr_number b @abstr_number

  * hotfix: don't freeze when multiple comments directly precede `# fmt: off` (# @abstr_number )



### @abstr_number . @abstr_number b @abstr_number

  * typing stub files (`.pyi`) now have blank lines added after constants (# @abstr_number )

  * `# fmt: off` and `# fmt: on` are now much more dependable:

    * they now work also within bracket pairs (# @abstr_number )

    * they now correctly work across function/class boundaries (# @abstr_number )

    * they now work when an indentation block starts with empty lines or misaligned comments (# @abstr_number )

  * made Click not fail on invalid environments; note that Click is right but the likelihood we'll need to access non-ASCII file paths when dealing with Python source code is low (# @abstr_number )

  * fixed improper formatting of f-strings with quotes inside interpolated expressions (# @abstr_number )

  * fixed unnecessary slowdown when long list literals where found in a file

  * fixed unnecessary slowdown on AST nodes with very many siblings

  * fixed cannibalizing backslashes during string normalization

  * fixed a crash due to symbolic links pointing outside of the project directory (# @abstr_number )




### @abstr_number . @abstr_number b @abstr_number

  * added `--config` (# @abstr_number )

  * added `-h` equivalent to `--help` (# @abstr_number )

  * fixed improper unmodified file caching when `-S` was used

  * fixed extra space in string unpacking (# @abstr_number )

  * fixed formatting of empty triple quoted strings (# @abstr_number )

  * fixed unnecessary slowdown in comment placement calculation on lines without comments




### @abstr_number . @abstr_number b @abstr_number

  * hotfix: don't output human-facing information on stdout (# @abstr_number )

  * hotfix: don't output cake emoji on non-zero return code (# @abstr_number )




### @abstr_number . @abstr_number b @abstr_number

  * added `--include` and `--exclude` (# @abstr_number )

  * added `--skip-string-normalization` (# @abstr_number )

  * added `--verbose` (# @abstr_number )

  * the header output in `--diff` now actually conforms to the unified diff spec

  * fixed long trivial assignments being wrapped in unnecessary parentheses (# @abstr_number )

  * fixed unnecessary parentheses when a line contained multiline strings (# @abstr_number )

  * fixed stdin handling not working correctly if an old version of Click was used (# @abstr_number )

  * _Black_ now preserves line endings when formatting a file in place (# @abstr_number )




### @abstr_number . @abstr_number b @abstr_number

  * added `--pyi` (# @abstr_number )

  * added `--py @abstr_number` (# @abstr_number )

  * Python grammar pickle caches are stored with the formatting caches, making _Black_ work in environments where site-packages is not user-writable (# @abstr_number )

  * _Black_ now enforces a PEP @abstr_number empty line after a class-level docstring (and/or fields) and the first method

  * fixed invalid code produced when standalone comments were present in a trailer that was omitted from line splitting on a large expression (# @abstr_number )

  * fixed optional parentheses being removed within `# fmt: off` sections (# @abstr_number )

  * fixed invalid code produced when stars in very long imports were incorrectly wrapped in optional parentheses (# @abstr_number )

  * fixed unstable formatting when inline comments were moved around in a trailer that was omitted from line splitting on a large expression (# @abstr_number )

  * fixed extra empty line between a class declaration and the first method if no class docstring or fields are present (# @abstr_number )

  * fixed extra empty line between a function signature and an inner function or inner class (# @abstr_number )




### @abstr_number . @abstr_number b @abstr_number

  * call chains are now formatted according to the @abstr_hyperlink style (# @abstr_number )

  * data structure literals (tuples, lists, dictionaries, and sets) are now also always exploded like imports when they don't fit in a single line (# @abstr_number )

  * slices are now formatted according to PEP @abstr_number (# @abstr_number )

  * parentheses are now also managed automatically on the right-hand side of assignments and return statements (# @abstr_number )

  * math operators now use their respective priorities for delimiting multiline expressions (# @abstr_number )

  * optional parentheses are now omitted on expressions that start or end with a bracket and only contain a single operator (# @abstr_number )

  * empty parentheses in a class definition are now removed (# @abstr_number , # @abstr_number )

  * string prefixes are now standardized to lowercase and `u` is removed on Python @abstr_number . @abstr_number + only code and Python @abstr_number . @abstr_number + code with the `unicode_literals` future import (# @abstr_number , # @abstr_number , # @abstr_number )

  * typing stub files (`.pyi`) are now formatted in a style that is consistent with PEP @abstr_number (# @abstr_number , # @abstr_number )

  * progress when reformatting many files is now reported incrementally

  * fixed trailers (content with brackets) being unnecessarily exploded into their own lines after a dedented closing bracket (# @abstr_number )

  * fixed an invalid trailing comma sometimes left in imports (# @abstr_number )

  * fixed non-deterministic formatting when multiple pairs of removable parentheses were used (# @abstr_number )

  * fixed multiline strings being unnecessarily wrapped in optional parentheses in long assignments (# @abstr_number )

  * fixed not splitting long from-imports with only a single name

  * fixed Python @abstr_number . @abstr_number + file discovery by also looking at function calls with unpacking. This fixed non-deterministic formatting if trailing commas where used both in function signatures with stars and function calls with stars but the former would be reformatted to a single line.

  * fixed crash on dealing with optional parentheses (# @abstr_number )

  * fixed "is", "is not", "in", and "not in" not considered operators for splitting purposes

  * fixed crash when dead symlinks where encountered




### @abstr_number . @abstr_number a @abstr_number

  * don't populate the cache on `--check` (# @abstr_number )



### @abstr_number . @abstr_number a @abstr_number

  * added a "cache"; files already reformatted that haven't changed on disk won't be reformatted again (# @abstr_number )

  * `--check` and `--diff` are no longer mutually exclusive (# @abstr_number )

  * generalized star expression handling, including double stars; this fixes multiplication making expressions "unsafe" for trailing commas (# @abstr_number )

  * _Black_ no longer enforces putting empty lines behind control flow statements (# @abstr_number )

  * _Black_ now splits imports like "Mode @abstr_number + trailing comma" of isort (# @abstr_number )

  * fixed comment indentation when a standalone comment closes a block (# @abstr_number , # @abstr_number )

  * fixed standalone comments receiving extra empty lines if immediately preceding a class, def, or decorator (# @abstr_number , # @abstr_number )

  * fixed `--diff` not showing entire path (# @abstr_number )

  * fixed parsing of complex expressions after star and double stars in function calls (# @abstr_number )

  * fixed invalid splitting on comma in lambda arguments (# @abstr_number )

  * fixed missing splits of ternary expressions (# @abstr_number )




### @abstr_number . @abstr_number a @abstr_number

  * fixed parsing of unaligned standalone comments (# @abstr_number , # @abstr_number )

  * fixed placement of dictionary unpacking inside dictionary literals (# @abstr_number )

  * Vim plugin now works on Windows, too

  * fixed unstable formatting when encountering unnecessarily escaped quotes in a string (# @abstr_number )




### @abstr_number . @abstr_number a @abstr_number

  * added `--quiet` (# @abstr_number )

  * added automatic parentheses management (# @abstr_number )

  * added @abstr_hyperlink integration (# @abstr_number , # @abstr_number )

  * fixed reporting on `--check` with multiple files (# @abstr_number , # @abstr_number )

  * fixed removing backslash escapes from raw strings (# @abstr_number , # @abstr_number )




### @abstr_number . @abstr_number a @abstr_number

  * added `--diff` (# @abstr_number )

  * add line breaks before all delimiters, except in cases like commas, to better comply with PEP @abstr_number (# @abstr_number )

  * standardize string literals to use double quotes (almost) everywhere (# @abstr_number )

  * fixed handling of standalone comments within nested bracketed expressions; _Black_ will no longer produce super long lines or put all standalone comments at the end of the expression (# @abstr_number )

  * fixed @abstr_number . @abstr_number a @abstr_number regression: don't crash and burn on empty lines with trailing whitespace (# @abstr_number )

  * fixed @abstr_number . @abstr_number a @abstr_number regression: `# yapf: disable` usage as trailing comment would cause _Black_ to not emit the rest of the file (# @abstr_number )

  * when CTRL+C is pressed while formatting many files, _Black_ no longer freaks out with a flurry of asyncio-related exceptions

  * only allow up to two empty lines on module level and only single empty lines within functions (# @abstr_number )




### @abstr_number . @abstr_number a @abstr_number

  * `# fmt: off` and `# fmt: on` are implemented (# @abstr_number )

  * automatic detection of deprecated Python @abstr_number forms of print statements and exec statements in the formatted file (# @abstr_number )

  * use proper spaces for complex expressions in default values of typed function arguments (# @abstr_number )

  * only return exit code @abstr_number when --check is used (# @abstr_number )

  * don't remove single trailing commas from square bracket indexing (# @abstr_number )

  * don't omit whitespace if the previous factor leaf wasn't a math operator (# @abstr_number )

  * omit extra space in kwarg unpacking if it's the first argument (# @abstr_number )

  * omit extra space in @abstr_hyperlink (# @abstr_number )




### @abstr_number . @abstr_number a @abstr_number

  * don't remove single empty lines outside of bracketed expressions (# @abstr_number )

  * added ability to pipe formatting from stdin to stdin (# @abstr_number )

  * restored ability to format code with legacy usage of `async` as a name (# @abstr_number , # @abstr_number )

  * even better handling of numpy-style array indexing (# @abstr_number , again)




### @abstr_number . @abstr_number a @abstr_number

  * changed positioning of binary operators to occur at beginning of lines instead of at the end, following @abstr_hyperlink (# @abstr_number )

  * ignore empty bracket pairs while splitting. This avoids very weirdly looking formattings (# @abstr_number , # @abstr_number )

  * remove a trailing comma if there is a single argument to a call

  * if top level functions were separated by a comment, don't put four empty lines after the upper function

  * fixed unstable formatting of newlines with imports

  * fixed unintentional folding of post scriptum standalone comments into last statement if it was a simple statement (# @abstr_number , # @abstr_number )

  * fixed missing space in numpy-style array indexing (# @abstr_number )

  * fixed spurious space after star-based unary expressions (# @abstr_number )




### @abstr_number . @abstr_number a @abstr_number

  * added `--check`

  * only put trailing commas in function signatures and calls if it's safe to do so. If the file is Python @abstr_number . @abstr_number + it's always safe, otherwise only safe if there are no `*args` or `**kwargs` used in the signature or call. (# @abstr_number )

  * fixed invalid spacing of dots in relative imports (# @abstr_number , # @abstr_number )

  * fixed invalid splitting after comma on unpacked variables in for-loops (# @abstr_number )

  * fixed spurious space in parenthesized set expressions (# @abstr_number )

  * fixed spurious space after opening parentheses and in default arguments (# @abstr_number , # @abstr_number )

  * fixed spurious space after unary operators when the operand was a complex expression (# @abstr_number )




### @abstr_number . @abstr_number a @abstr_number

  * first published version, Happy 🍰 Day @abstr_number !

  * alpha quality

  * date-versioned (see: https://calver.org/)




## Authors

Glued together by @abstr_hyperlink .

Maintained with @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink .

Multiple contributions by: * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * hauntsaninja * Hugo van Kemenade * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 
