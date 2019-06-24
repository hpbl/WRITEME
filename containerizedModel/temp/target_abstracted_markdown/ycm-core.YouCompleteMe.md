# YouCompleteMe: a code-completion engine for Vim

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Help, Advice, Support

Looking for help, advice or support? Having problems getting YCM to work?

First carefully read the installation instructions for your OS. We recommend you use the supplied `install.py`.

Next check the User Guide section on the semantic completer that you are using. For C/C++/Objective-C/Objective-C++/CUDA, you _must_ read this section.

Finally, check the FAQ.

If, after reading the installation and user guides, and checking the FAQ, you're still having trouble, check the contacts section below for how to get in touch.

Please do **NOT** go to #vim on freenode for support. Please contact the YouCompleteMe maintainers directly using the contact details below.

## Contents

  * Intro
  * Installation 
    * macOS
    * Linux @abstr_number -bit
    * Windows
    * FreeBSD/OpenBSD
    * Full Installation Guide
  * Quick Feature Summary
  * User Guide 
    * General Usage
    * Client-Server Architecture
    * Completion String Ranking
    * General Semantic Completion
    * C-family Semantic Completion
    * Java Semantic Completion
    * Python Semantic Completion
    * Rust Semantic Completion
    * JavaScript and TypeScript Semantic Completion
    * Semantic Completion for Other Languages
    * Writing New Semantic Completers
    * Diagnostic Display 
      * Diagnostic Highlighting Groups
  * Commands 
    * YcmCompleter subcommands 
      * GoTo Commands
      * Semantic Information Commands
      * Refactoring Commands
      * Miscellaneous Commands
  * Functions
  * Autocommands
  * Options
  * FAQ
  * Contributor Code of Conduct
  * Contact
  * License



## Intro

YouCompleteMe is a fast, as-you-type, fuzzy-search code completion engine for @abstr_hyperlink . It has several completion engines:

  * an identifier-based engine that works with every programming language,
  * a @abstr_hyperlink -based engine that provides native semantic code completion for C/C++/Objective-C/Objective-C++/CUDA (from now on referred to as "the C-family languages"),
  * a @abstr_hyperlink -based **experimental** completion engine for the C-family languages.
  * a @abstr_hyperlink -based completion engine for Python @abstr_number and @abstr_number ,
  * an @abstr_hyperlink -based completion engine for C#,
  * a combination of @abstr_hyperlink and @abstr_hyperlink semantic engines for Go,
  * a @abstr_hyperlink -based completion engine for JavaScript and TypeScript,
  * a @abstr_hyperlink -based completion engine for Rust,
  * a @abstr_hyperlink -based experimental completion engine for Java.
  * and an omnifunc-based completer that uses data from Vim's omnicomplete system to provide semantic completions for many other languages (Ruby, PHP etc.).



@abstr_image 

Here's an explanation of what happens in the short GIF demo above.

First, realize that **no keyboard shortcuts had to be pressed** to get the list of completion candidates at any point in the demo. The user just types and the suggestions pop up by themselves. If the user doesn't find the completion suggestions relevant and/or just wants to type, they can do so; the completion engine will not interfere.

When the user sees a useful completion string being offered, they press the TAB key to accept it. This inserts the completion string. Repeated presses of the TAB key cycle through the offered completions.

If the offered completions are not relevant enough, the user can continue typing to further filter out unwanted completions.

A critical thing to notice is that the completion **filtering is NOT based on the input being a string prefix of the completion** (but that works too). The input needs to be a _ @abstr_hyperlink match_ of a completion. This is a fancy way of saying that any input characters need to be present in a completion string in the order in which they appear in the input. So `abc` is a subsequence of `xaybgc`, but not of `xbyxaxxc`. After the filter, a complicated sorting system ranks the completion strings so that the most relevant ones rise to the top of the menu (so you usually need to press TAB just once).

**All of the above works with any programming language** because of the identifier-based completion engine. It collects all of the identifiers in the current file and other files you visit (and your tags files) and searches them when you type (identifiers are put into per-filetype groups).

The demo also shows the semantic engine in use. When the user presses `.`, `->` or `::` while typing in insert mode (for C++; different triggers are used for other languages), the semantic engine is triggered (it can also be triggered with a keyboard shortcut; see the rest of the docs).

The last thing that you can see in the demo is YCM's diagnostic display features (the little red X that shows up in the left gutter; inspired by @abstr_hyperlink ) if you are editing a C-family file. As the completer engine compiles your file and detects warnings or errors, they will be presented in various ways. You don't need to save your file or press any keyboard shortcut to trigger this, it "just happens" in the background.

In essence, YCM obsoletes the following Vim plugins because it has all of their features plus extra:

  * clang_complete
  * AutoComplPop
  * Supertab
  * neocomplcache



**And that's not all...**

YCM also provides semantic IDE-like features in a number of languages, including:

  * finding declarations, definitions, usages, etc. of identifiers,
  * displaying type information for classes, variables, functions etc.,
  * displaying documentation for methods, members, etc. in the preview window,
  * fixing common coding errors, like missing semi-colons, typos, etc.,
  * semantic renaming of variables across files,
  * formatting code,
  * removing unused imports, sorting imports, etc.



Features vary by file type, so make sure to check out the file type feature summary and the full list of completer subcommands to find out what's available for your favourite languages.

You'll also find that YCM has filepath completers (try typing `./` in a file) and a completer that integrates with @abstr_hyperlink .

## Installation

### macOS

These instructions (using `install.py`) are the quickest way to install YouCompleteMe, however they may not work for everyone. If the following instructions don't work for you, check out the full installation guide.

@abstr_hyperlink is required. YCM won't work with the pre-installed Vim from Apple as its Python support is broken. If you don't already use @abstr_hyperlink , install it with @abstr_hyperlink . Install CMake as well:
    
    
    brew install cmake macvim
    

Install YouCompleteMe with @abstr_hyperlink .

**Remember:** YCM is a plugin with a compiled component. If you **update** YCM using Vundle and the ycm_core library APIs have changed (happens rarely), YCM will notify you to recompile it. You should then rerun the install process.

**NOTE:** If you want C-family completion, you MUST have the latest Xcode installed along with the latest Command Line Tools (they are installed automatically when you run `clang` for the first time, or manually by running `xcode-select --install`)

Compiling YCM **with** semantic support for C-family languages through **libclang** :
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --clang-completer
    

Compiling YCM **with** semantic support for C-family languages through **experimental clangd** :
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --clangd-completer
    

Note that you can install YCM with both **libclang** and **clangd** enabled. In that case **clangd** will be preferred unless you have the following in your `vimrc`:

@abstr_code_section 

Compiling YCM **without** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py
    

The following additional language support options are available:

  * C# support: install Mono with @abstr_hyperlink or by downloading the @abstr_hyperlink and add `--cs-completer` when calling `install.py`.
  * Go support: install @abstr_hyperlink and add `--go-completer` when calling `install.py`.
  * JavaScript and TypeScript support: install @abstr_hyperlink and add `--ts-completer` when calling `install.py`.
  * Rust support: install @abstr_hyperlink and add `--rust-completer` when calling `install.py`.
  * Java support: install @abstr_hyperlink and add `--java-completer` when calling `install.py`.



To simply compile with everything enabled, there's a `--all` flag. Note that this flag does **not** install **clangd**. You need to specify it manually by adding `--clangd-completer`. So, to install with all language features, ensure `xbuild`, `go`, `tsserver`, `node`, `npm`, `rustc`, and `cargo` tools are installed and in your `PATH`, then simply run:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --all
    

That's it. You're done. Refer to the _User Guide_ section on how to use YCM. Don't forget that if you want the C-family semantic completion engine to work, you will need to provide the compilation flags for your project to YCM. It's all in the User Guide.

YCM comes with sane defaults for its options, but you still may want to take a look at what's available for configuration. There are a few interesting options that are conservatively turned off by default that you may want to turn on.

### Linux @abstr_number -bit

These instructions (using `install.py`) are the quickest way to install YouCompleteMe, however they may not work for everyone. If the following instructions don't work for you, check out the full installation guide.

Make sure you have Vim @abstr_number . @abstr_number . @abstr_number with Python @abstr_number or Python @abstr_number support. The Vim package on Fedora @abstr_number and later and the pre-installed Vim on Ubuntu @abstr_number . @abstr_number and later are recent enough. You can see the version of Vim installed by running `vim --version`. If the version is too old, you may need to @abstr_hyperlink (don't worry, it's easy).

Install YouCompleteMe with @abstr_hyperlink .

**Remember:** YCM is a plugin with a compiled component. If you **update** YCM using Vundle and the ycm_core library APIs have changed (happens rarely), YCM will notify you to recompile it. You should then rerun the install process.

Install development tools, CMake, and Python headers:

  * Fedora @abstr_number and later:

sudo dnf install cmake gcc-c++ make python @abstr_number -devel

  * Ubuntu @abstr_number . @abstr_number :

sudo apt install build-essential cmake @abstr_number python @abstr_number -dev

  * Ubuntu @abstr_number . @abstr_number and later:

sudo apt install build-essential cmake python @abstr_number -dev




Compiling YCM **with** semantic support for C-family languages through **libclang** :
    
    
    cd ~/.vim/bundle/YouCompleteMe
    python @abstr_number  install.py --clang-completer
    

Compiling YCM **with** semantic support for C-family languages through **experimental clangd** :
    
    
    cd ~/.vim/bundle/YouCompleteMe
    python @abstr_number  install.py --clangd-completer
    

Note that you can install YCM with both **libclang** and **clangd** enabled. In that case **clangd** will be preferred unless you have the following in your `vimrc`:

@abstr_code_section 

Compiling YCM **without** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    python @abstr_number  install.py
    

The following additional language support options are available:

  * C# support: install @abstr_hyperlink and add `--cs-completer` when calling `install.py`.
  * Go support: install @abstr_hyperlink and add `--go-completer` when calling `install.py`.
  * JavaScript and TypeScript support: install @abstr_hyperlink and add `--ts-completer` when calling `install.py`.
  * Rust support: install @abstr_hyperlink and add `--rust-completer` when calling `install.py`.
  * Java support: install @abstr_hyperlink and add `--java-completer` when calling `install.py`.



To simply compile with everything enabled, there's a `--all` flag. Note that this flag does **not** install **clangd**. You need to specify it manually by adding `--clangd-completer`. So, to install with all language features, ensure `xbuild`, `go`, `tsserver`, `node`, `npm`, `rustc`, and `cargo` tools are installed and in your `PATH`, then simply run:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    python @abstr_number  install.py --all
    

That's it. You're done. Refer to the _User Guide_ section on how to use YCM. Don't forget that if you want the C-family semantic completion engine to work, you will need to provide the compilation flags for your project to YCM. It's all in the User Guide.

YCM comes with sane defaults for its options, but you still may want to take a look at what's available for configuration. There are a few interesting options that are conservatively turned off by default that you may want to turn on.

### Windows

These instructions (using `install.py`) are the quickest way to install YouCompleteMe, however they may not work for everyone. If the following instructions don't work for you, check out the full installation guide.

**Important:** we assume that you are using the `cmd.exe` command prompt and that you know how to add an executable to the PATH environment variable.

Make sure you have at least Vim @abstr_number . @abstr_number . @abstr_number with Python @abstr_number or Python @abstr_number support. You can check the version and which Python is supported by typing `:version` inside Vim. Look at the features included: `+python/dyn` for Python @abstr_number and `+python @abstr_number /dyn` for Python @abstr_number . Take note of the Vim architecture, i.e. @abstr_number or @abstr_number -bit. It will be important when choosing the Python installer. We recommend using a @abstr_number -bit client. @abstr_hyperlink are available.

Add the line:
    
    
    set encoding=utf- @abstr_number
    

to your @abstr_hyperlink if not already present. This option is required by YCM. Note that it does not prevent you from editing a file in another encoding than UTF- @abstr_number . You can do that by specifying @abstr_hyperlink to the `:e` command.

Install YouCompleteMe with @abstr_hyperlink .

**Remember:** YCM is a plugin with a compiled component. If you **update** YCM using Vundle and the ycm_core library APIs have changed (happens rarely), YCM will notify you to recompile it. You should then rerun the install process.

Download and install the following software:

  * @abstr_hyperlink . Be sure to pick the version corresponding to your Vim architecture. It is _Windows x @abstr_number _ for a @abstr_number -bit Vim and _Windows x @abstr_number - @abstr_number _ for a @abstr_number -bit Vim. We recommend installing Python @abstr_number . Additionally, the version of Python you install must match up exactly with the version of Python that Vim is looking for. Type `:version` and look at the bottom of the page at the list of compiler flags. Look for flags that look similar to `-DDYNAMIC_PYTHON_DLL=\"python @abstr_number .dll\"` and `-DDYNAMIC_PYTHON @abstr_number _DLL=\"python @abstr_number .dll\"`. The former indicates that Vim is looking for Python @abstr_number . @abstr_number and the latter indicates that Vim is looking for Python @abstr_number . @abstr_number . You'll need one or the other installed, matching the version number exactly.
  * @abstr_hyperlink . Add CMake executable to the PATH environment variable.
  * @abstr_hyperlink . During setup, select _Visual C++ build tools_ in _Workloads_.



Compiling YCM **with** semantic support for C-family languages through **libclang** :
    
    
    cd %USERPROFILE%/vimfiles/bundle/YouCompleteMe
    python install.py --clang-completer
    

Compiling YCM **with** semantic support for C-family languages through **experimental clangd** :
    
    
    cd %USERPROFILE%/vimfiles/bundle/YouCompleteMe
    python install.py --clangd-completer
    

Note that you can install YCM with both **libclang** and **clangd** enabled. In that case **clangd** will be preferred unless you have the following in your `vimrc`:

@abstr_code_section 

Compiling YCM **without** semantic support for C-family languages:
    
    
    cd %USERPROFILE%/vimfiles/bundle/YouCompleteMe
    python install.py
    

The following additional language support options are available:

  * C# support: add `--cs-completer` when calling `install.py`. Be sure that @abstr_hyperlink .
  * Go support: install @abstr_hyperlink and add `--go-completer` when calling `install.py`.
  * JavaScript and TypeScript support: install @abstr_hyperlink and add `--ts-completer` when calling `install.py`.
  * Rust support: install @abstr_hyperlink and add `--rust-completer` when calling `install.py`.
  * Java support: install @abstr_hyperlink and add `--java-completer` when calling `install.py`.



To simply compile with everything enabled, there's a `--all` flag. Note that this flag does **not** install **clangd**. You need to specify it manually by adding `--clangd-completer`. So, to install with all language features, ensure `msbuild`, `go`, `tsserver`, `node`, `npm`, and `cargo` tools are installed and in your `PATH`, then simply run:
    
    
    cd %USERPROFILE%/vimfiles/bundle/YouCompleteMe
    python install.py --all
    

You can specify the Microsoft Visual C++ (MSVC) version using the `--msvc` option. YCM officially supports MSVC @abstr_number (Visual Studio @abstr_number ) and @abstr_number ( @abstr_number ).

That's it. You're done. Refer to the _User Guide_ section on how to use YCM. Don't forget that if you want the C-family semantic completion engine to work, you will need to provide the compilation flags for your project to YCM. It's all in the User Guide.

YCM comes with sane defaults for its options, but you still may want to take a look at what's available for configuration. There are a few interesting options that are conservatively turned off by default that you may want to turn on.

### FreeBSD/OpenBSD

These instructions (using `install.py`) are the quickest way to install YouCompleteMe, however they may not work for everyone. If the following instructions don't work for you, check out the full installation guide.

**NOTE:** OpenBSD / FreeBSD are not officially supported platforms by YCM.

Make sure you have Vim @abstr_number . @abstr_number . @abstr_number with Python @abstr_number or Python @abstr_number support.

OpenBSD @abstr_number . @abstr_number and later have a Vim that's recent enough. You can see the version of Vim installed by running `vim --version`.

For FreeBSD @abstr_number .x, the requirement is cmake:
    
    
    pkg install cmake
    

Install YouCompleteMe with @abstr_hyperlink .

**Remember:** YCM is a plugin with a compiled component. If you **update** YCM using Vundle and the ycm_core library APIs have changed (happens rarely), YCM will notify you to recompile it. You should then rerun the install process.

Compiling YCM **with** semantic support for C-family languages through **libclang** :
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --clang-completer
    

Compiling YCM **with** semantic support for C-family languages through **experimental clangd** :
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --clangd-completer
    

Note that you can install YCM with both **libclang** and **clangd** enabled. In that case **clangd** will be preferred unless you have the following in your `vimrc`:

@abstr_code_section 

Compiling YCM **without** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py
    

If the `python` executable is not present, or the default `python` is not the one that should be compiled against, specify the python interpreter explicitly:
    
    
    python @abstr_number  install.py --clang-completer
    

The following additional language support options are available:

  * C# support: install Mono and add `--cs-completer` when calling `./install.py`.
  * Go support: install @abstr_hyperlink and add `--go-completer` when calling `./install.py`.
  * JavaScript and TypeScript support: install @abstr_hyperlink and add `--ts-completer` when calling `install.py`.
  * Rust support: install @abstr_hyperlink and add `--rust-completer` when calling `./install.py`.
  * Java support: install @abstr_hyperlink and add `--java-completer` when calling `./install.py`.



To simply compile with everything enabled, there's a `--all` flag. Note that this flag does **not** install **clangd**. You need to specify it manually by adding `--clangd-completer`. So, to install with all language features, ensure `xbuild`, `go`, `tsserver`, `node`, `npm`, `rustc`, and `cargo` tools are installed and in your `PATH`, then simply run:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --all
    

That's it. You're done. Refer to the _User Guide_ section on how to use YCM. Don't forget that if you want the C-family semantic completion engine to work, you will need to provide the compilation flags for your project to YCM. It's all in the User Guide.

YCM comes with sane defaults for its options, but you still may want to take a look at what's available for configuration. There are a few interesting options that are conservatively turned off by default that you may want to turn on.

### Full Installation Guide

These are the steps necessary to get YCM working on a Unix OS and on Windows.

**Note to Windows users:** we assume that you are running the `cmd.exe` command prompt and that the needed executables are in the PATH environment variable. Do not just copy the shell commands. Replace `~` by `%USERPROFILE%` in them and use the right Vim home directory. It should be `vimfiles` by default instead of `.vim`.

See the _FAQ_ if you have any issues.

**Remember:** YCM is a plugin with a compiled component. If you **update** YCM using Vundle and the ycm_core library APIs have changed (happens rarely), YCM will notify you to recompile it. You should then rerun the install process.

**Please follow the instructions carefully. Read EVERY WORD.**

@abstr_number . **Ensure that your version of Vim is _at least_ @abstr_number . @abstr_number . @abstr_number _and_ that it has support for Python @abstr_number or Python @abstr_number scripting**.
    
    
    Inside Vim, type `:version`. Look at the first two to three lines of output;
    it should say `Vi IMproved X.Y`, where X.Y is the major version of vim. If
    your version is greater than  @abstr_number . @abstr_number , then you're all set. If your version is
     @abstr_number . @abstr_number  then look below that where it says, `Included patches:  @abstr_number -Z`, where Z
    will be some number. That number needs to be  @abstr_number  or higher.
    
    If your version of Vim is not recent enough, you may need to [compile Vim
    from source][vim-build] (don't worry, it's easy).
    
    After you have made sure that you have Vim  @abstr_number . @abstr_number . @abstr_number +, type the following in
    Vim: `:echo has('python') || has('python @abstr_number ')`. The output should be  @abstr_number . If
    it's  @abstr_number , then get a version of Vim with Python support.
    
    On Windows, check also if your Vim architecture is  @abstr_number  or  @abstr_number -bit. This is
    critical because it must match the Python and the YCM libraries
    architectures. We recommend using a  @abstr_number -bit Vim.
    

@abstr_number . **Install YCM** with @abstr_hyperlink (or @abstr_hyperlink , but Vundle is a better idea). With Vundle, this would mean adding a `Plugin 'Valloric/YouCompleteMe'` line to your @abstr_hyperlink .
    
    
    If you don't install YCM with Vundle, make sure you have run
    `git submodule update --init --recursive` after checking out the YCM
    repository (Vundle will do this for you) to fetch YCM's dependencies.
    

@abstr_number . _Complete this step ONLY if you care about semantic completion support for C-family languages. Otherwise it's not necessary._
    
    
    **Download the latest version of `libclang`**. Clang is an open-source
    compiler that can compile C-family languages. The `libclang` library it
    provides is used to power the YCM semantic completion engine for those
    languages. YCM is designed to work with libclang version  @abstr_number . @abstr_number . @abstr_number  or higher.
    
    In addition to `libclang`, YCM also supports an **experimental**
    [clangd][]-based completer. You can download the latest version of
    [clangd][] from [llvm.org releases][clang-download]. Follow Step  @abstr_number  to learn
    how to tell YCM where to find clangd binary. Please note that YCM is
    designed to work with [clangd][] version  @abstr_number . @abstr_number . @abstr_number  or higher.
    
    You can use the system libclang or clangd _only if you are sure it is
    version  @abstr_number . @abstr_number . @abstr_number  or higher_, otherwise don't. Even if it is, we recommend using
    the [official binaries from llvm.org][clang-download] if at all possible.
    Make sure you download the correct archive file for your OS.
    
    We **STRONGLY recommend AGAINST use** of the system libclang or clangd
    instead of the upstream compiled binaries. Random things may break. Save
    yourself the hassle and use the upstream pre-built libclang or clangd.
    

@abstr_number . **Compile the`ycm_core` library** that YCM needs. This library is the C++ engine that YCM uses to get fast completions.
    
    
    You will need to have `cmake` installed in order to generate the required
    makefiles. Linux users can install cmake with their package manager (`sudo
    apt-get install cmake` for Ubuntu) whereas other users can [download and
    install][cmake-download] cmake from its project site. macOS users can also
    get it through [Homebrew][brew] with `brew install cmake`.
    
    On a Unix OS, you need to make sure you have Python headers installed. On a
    Debian-like Linux distro, this would be `sudo apt-get install python-dev
    python @abstr_number -dev`. On macOS they should already be present.
    
    On Windows, you need to download and install [Python  @abstr_number  or
    Python  @abstr_number ][python-win-download]. Pick the version corresponding to your Vim
    architecture. You will also need Microsoft Visual C++ (MSVC) to build YCM.
    You can obtain it by installing [Visual Studio Build
    Tools][visual-studio-download]. MSVC  @abstr_number  (Visual Studio  @abstr_number ) and  @abstr_number  ( @abstr_number )
    are officially supported.
    
    Here we'll assume you installed YCM with Vundle. That means that the
    top-level YCM directory is in `~/.vim/bundle/YouCompleteMe`.
    
    We'll create a new folder where build files will be placed. Run the
    following:
    
        cd ~
        mkdir ycm_build
        cd ycm_build
    
    Now we need to generate the makefiles. If you DON'T care about semantic
    support for C-family languages or plan to use **experimental** [clangd][]
    based completer, run the following command in the `ycm_build` directory:
    
        cmake -G "<generator>" . ~/.vim/bundle/YouCompleteMe/third_party/ycmd/cpp
    
    where `<generator>` is `Unix Makefiles` on Unix systems and one of the
    following Visual Studio generators on Windows:
    
    - `Visual Studio  @abstr_number  Win @abstr_number `
    - `Visual Studio  @abstr_number  Win @abstr_number `
    
    Remove the `Win @abstr_number ` part in these generators if your Vim architecture is
     @abstr_number -bit.
    
    For those who want to use the system version of boost, you would pass
    `-DUSE_SYSTEM_BOOST=ON` to cmake. This may be necessary on some systems
    where the bundled version of boost doesn't compile out of the box.
    
    **NOTE:** We **STRONGLY recommend AGAINST use** of the system boost instead
    of the bundled version of boost. Random things may break. Save yourself
    the hassle and use the bundled version of boost.
    
    If you DO care about semantic support for C-family languages, and want to
    use libclang as the provider instead of **experimental** [clangd][]-based
    completer then your `cmake` call will be a bit more complicated. We'll
    assume you downloaded a binary distribution of LLVM+Clang from llvm.org in
    step  @abstr_number  and that you extracted the archive file to folder
    `~/ycm_temp/llvm_root_dir` (with `bin`, `lib`, `include` etc. folders right
    inside that folder). On Windows, you can extract the files from the
    LLVM+Clang installer using [ @abstr_number -zip][ @abstr_number z-download].
    
    **NOTE:** This _only_ works with a _downloaded_ LLVM binary package, not a
    custom-built LLVM! See docs below for `EXTERNAL_LIBCLANG_PATH` when using a
    custom LLVM build.
    
    With that in mind, run the following command in the `ycm_build` directory:
    
        cmake -G "<generator>" -DPATH_TO_LLVM_ROOT=~/ycm_temp/llvm_root_dir . ~/.vim/bundle/YouCompleteMe/third_party/ycmd/cpp
    
    where `<generator>` is replaced like above.
    
    Now that configuration files have been generated, compile the libraries
    using this command:
    
        cmake --build . --target ycm_core --config Release
    
    The `--config Release` part is specific to Windows and will be ignored on a
    Unix OS.
    
    For those who want to use the system version of libclang, you would pass
    `-DUSE_SYSTEM_LIBCLANG=ON` to cmake _instead of_ the
    `-DPATH_TO_LLVM_ROOT=...` flag.
    
    **NOTE:** We **STRONGLY recommend AGAINST use** of the system libclang instead
    of the upstream compiled binaries. Random things may break. Save yourself
    the hassle and use the upstream pre-built libclang.
    
    You could also force the use of a custom libclang library with
    `-DEXTERNAL_LIBCLANG_PATH=/path/to/libclang.so` flag (the library would end
    with `.dylib` on macOS). Again, this flag would be used _instead of_ the
    other flags. **If you compiled LLVM from source, this is the flag you should
    be using.**
    
    Running the `cmake` command will also place the `libclang.[so|dylib|dll]` in
    the `YouCompleteMe/third_party/ycmd` folder for you if you compiled with
    clang support (it needs to be there for YCM to work).
    
    If you DO care about semantic support for C-family languages, and want to
    use **experimental** [clangd][]-based completer then you need to add
    following line to your `vimrc`:
     @abstr_code_section 
    You need to change `/path/to/clangd` with the path of binary you downloaded
    in step  @abstr_number .
    

@abstr_number . _This step is optional._
    
    
    Build the [regex][] module for improved Unicode support and better
    performance with regular expressions. The procedure is similar to compiling
    the `ycm_core` library:
    
        cd ~
        mkdir regex_build
        cd regex_build
        cmake -G "<generator>" . ~/.vim/bundle/YouCompleteMe/third_party/ycmd/third_party/cregex
        cmake --build . --target _regex --config Release
    
    where `<generator>` is the same generator used in the previous step.
    

@abstr_number . Set up support for additional languages, as desired:
    
    
    - C# support: install [Mono on non-Windows platforms][mono-install].
      Navigate to `YouCompleteMe/third_party/ycmd/third_party/OmniSharpServer`
      and run
    
          msbuild /property:Configuration=Release /property:Platform="Any CPU" /property:TargetFrameworkVersion=v @abstr_number . @abstr_number 
    
      On Windows, be sure that [the build utility `msbuild` is in your
      PATH][add-msbuild-to-path].
    
    - Go support: install [Go][go-install] and add it to your path. Navigate to
      `YouCompleteMe/third_party/ycmd/third_party/go` and in **both**
      `src/github.com/mdempsky/gocode` and `src/github.com/rogpeppe/godef` run
    
          GOPATH=$(realpath ../../../..) go build
    
      On Windows, first set `GOPATH` to the absolute path of
      `YouCompleteMe/third_party/ycmd/third_party/go` then run `go build` in the two
      directories above.
    
    - JavaScript and TypeScript support: install [Node.js and npm][npm-install],
      navigate to `YouCompleteMe/third_party/ycmd` and run
      `npm install -g --prefix third_party/tsserver typescript`.
    
    - Rust support: install [Rust][rust-install]. Navigate to
      `YouCompleteMe/third_party/ycmd/third_party/racerd` and run `cargo build
      --release`.
    
    - Java support: install [JDK @abstr_number  (version  @abstr_number  required)][jdk-install]. Download a
      [binary release of eclipse.jdt.ls][jdtls-release] and extract it to
      `YouCompleteMe/third_party/ycmd/third_party/eclipse.jdt.ls/target/repository`.
      Note: this approach is not recommended for most users and is supported
      only for advanced users and developers of YCM on a best-efforts basis.
      Please use `install.py` to enable java support.
    

That's it. You're done. Refer to the _User Guide_ section on how to use YCM. Don't forget that if you want the C-family semantic completion engine to work, you will need to provide the compilation flags for your project to YCM. It's all in the User Guide.

YCM comes with sane defaults for its options, but you still may want to take a look at what's available for configuration. There are a few interesting options that are conservatively turned off by default that you may want to turn on.

## Quick Feature Summary

### General (all languages)

  * Super-fast identifier completer including tags files and syntax elements
  * Intelligent suggestion ranking and filtering
  * File and path suggestions
  * Suggestions from Vim's OmniFunc
  * UltiSnips snippet suggestions



### C-family languages (C, C++, Objective C, Objective C++, CUDA)

  * Semantic auto-completion with automatic fixes
  * Real-time diagnostic display
  * Go to include/declaration/definition (`GoTo`, etc.)
  * View documentation comments for identifiers (`GetDoc`)
  * Type information for identifiers (`GetType`)
  * Automatically fix certain errors (`FixIt`)



### C♯

  * Semantic auto-completion
  * Real-time diagnostic display
  * Go to declaration/definition (`GoTo`, etc.)
  * View documentation comments for identifiers (`GetDoc`)
  * Type information for identifiers (`GetType`)
  * Automatically fix certain errors (`FixIt`)
  * Management of OmniSharp server instance



### Python

  * Semantic auto-completion
  * Go to definition (`GoTo`)
  * Reference finding (`GoToReferences`)
  * View documentation comments for identifiers (`GetDoc`)
  * Type information for identifiers (`GetType`)



### Go

  * Semantic auto-completion
  * Go to definition (`GoTo`)
  * Management of `gocode` server instance



### JavaScript and TypeScript

  * Semantic auto-completion with automatic import insertion
  * Real-time diagnostic display
  * Go to definition (`GoTo`, `GoToDefinition`, and `GoToDeclaration` are identical)
  * Go to type definition (`GoToType`)
  * Reference finding (`GoToReferences`)
  * View documentation comments for identifiers (`GetDoc`)
  * Type information for identifiers (`GetType`)
  * Automatically fix certain errors (`FixIt`)
  * Renaming symbols (`RefactorRename <new name>`)
  * Code formatting (`Format`)
  * Organize imports (`OrganizeImports`)
  * Management of `TSServer` server instance



### Rust

  * Semantic auto-completion
  * Go to definition (`GoTo`, `GoToDefinition`, and `GoToDeclaration` are identical)
  * View documentation comments for identifiers (`GetDoc`)
  * Management of `racer` server instance



### Java

**NOTE** : Java support is currently experimental. Please let us know your feedback.

  * Semantic auto-completion with automatic import insertion
  * Real-time diagnostic display
  * Go to definition (`GoTo`, `GoToDefinition`, and `GoToDeclaration` are identical)
  * Go to type definition (`GoToType`)
  * Go to implementation (`GoToImplementation`)
  * Reference finding (`GoToReferences`)
  * View documentation comments for identifiers (`GetDoc`)
  * Type information for identifiers (`GetType`)
  * Automatically fix certain errors including code generation (`FixIt`)
  * Renaming symbols (`RefactorRename <new name>`)
  * Code formatting (`Format`)
  * Organize imports (`OrganizeImports`)
  * Detection of java projects
  * Management of `jdt.ls` server instance



## User Guide

### General Usage

If the offered completions are too broad, keep typing characters; YCM will continue refining the offered completions based on your input.

Filtering is "smart-case" and "smart- @abstr_hyperlink " sensitive; if you are typing only lowercase letters, then it's case-insensitive. If your input contains uppercase letters, then the uppercase letters in your query must match uppercase letters in the completion strings (the lowercase letters still match both). On top of that, a letter with no diacritic marks will match that letter with or without marks:

matches | foo | fôo | fOo | fÔo  
---|---|---|---|---  
foo | ✔️ | ✔️ | ✔️ | ✔️  
fôo | ❌ | ✔️ | ❌ | ✔️  
fOo | ❌ | ❌ | ✔️ | ✔️  
fÔo | ❌ | ❌ | ❌ | ✔️  
  
Use the TAB key to accept a completion and continue pressing TAB to cycle through the completions. Use Shift-TAB to cycle backwards. Note that if you're using console Vim (that is, not Gvim or MacVim) then it's likely that the Shift-TAB binding will not work because the console will not pass it to Vim. You can remap the keys; see the Options section below.

Knowing a little bit about how YCM works internally will prevent confusion. YCM has several completion engines: an identifier-based completer that collects all of the identifiers in the current file and other files you visit (and your tags files) and searches them when you type (identifiers are put into per-filetype groups).

There are also several semantic engines in YCM. There are libclang-based and clangd-based completers that provide semantic completion for C-family languages. There's a Jedi-based completer for semantic completion for Python. There's also an omnifunc-based completer that uses data from Vim's omnicomplete system to provide semantic completions when no native completer exists for that language in YCM.

There are also other completion engines, like the UltiSnips completer and the filepath completer.

YCM automatically detects which completion engine would be the best in any situation. On occasion, it queries several of them at once, merges the outputs and presents the results to you.

### Client-Server Architecture

YCM has a client-server architecture; the Vim part of YCM is only a thin client that talks to the @abstr_hyperlink that has the vast majority of YCM logic and functionality. The server is started and stopped automatically as you start and stop Vim.

### Completion String Ranking

The subsequence filter removes any completions that do not match the input, but then the sorting system kicks in. It's actually very complicated and uses lots of factors, but suffice it to say that "word boundary" (WB) subsequence character matches are "worth" more than non-WB matches. In effect, this means given an input of "gua", the completion "getUserAccount" would be ranked higher in the list than the "Fooguxa" completion (both of which are subsequence matches). A word-boundary character are all capital characters, characters preceded by an underscore and the first letter character in the completion string.

### General Semantic Completion

You can use Ctrl+Space to trigger the completion suggestions anywhere, even without a string prefix. This is useful to see which top-level functions are available for use.

### C-family Semantic Completion

In order to perform semantic analysis such as code completion, `GoTo` and diagnostics, YouCompleteMe uses `libclang` or `clangd`. Both of them make use of clang compiler, sometimes also referred to as llvm. Like any compiler, clang also requires a set of compile flags in order to parse your code. Simply put: If clang can't parse your code, YouCompleteMe can't provide semantic analysis.

There are @abstr_number methods which can be used to provide compile flags to clang:

#### Option @abstr_number : Use a @abstr_hyperlink 

The easiest way to get YCM to compile your code is to use a compilation database. A compilation database is usually generated by your build system (e.g. `CMake`) and contains the compiler invocation for each compilation unit in your project.

For information on how to generate a compilation database, see the @abstr_hyperlink . In short:

  * If using CMake, add `-DCMAKE_EXPORT_COMPILE_COMMANDS=ON` when configuring (or add `set( CMAKE_EXPORT_COMPILE_COMMANDS ON )` to `CMakeLists.txt`) and copy or symlink the generated database to the root of your project.
  * If using Ninja, check out the `compdb` tool (`-t compdb`) in its @abstr_hyperlink .
  * If using GNU make, check out @abstr_hyperlink .
  * For other build systems, check out .ycm_extra_conf.py below. Note that **experimental** @abstr_hyperlink -based completer doesn't support this option. So it (and anything after this point) only applies to `libclang`-based completer.



If no .ycm_extra_conf.py is found, YouCompleteMe automatically tries to load a compilation database if there is one.

YCM looks for a file named `compile_commands.json` in the directory of the opened file or in any directory above it in the hierarchy (recursively); when the file is found, it is loaded. YouCompleteMe performs the following lookups when extracting flags for a particular file:

  * If the database contains an entry for the file, the flags for that file are used.
  * If the file is a header file and a source file with the same root exists in the database, the flags for the source file are used. For example, if the file is `/home/Test/project/src/lib/something.h` and the database contains an entry for `/home/Test/project/src/lib/something.cc`, then the flags for `/home/Test/project/src/lib/something.cc` are used.
  * Otherwise, if any flags have been returned from the directory containing the requested file, those flags are used. This heuristic is intended to provide potentially working flags for newly created files.



Finally, YCM converts any relative paths in the extracted flags to absolute paths. This ensures that compilation can be performed from any Vim working directory.

#### Option @abstr_number : Provide the flags manually

_Note that this option doesn't work with **experimental** @abstr_hyperlink -based completer. You can use a @abstr_hyperlink file instead._

If you don't have a compilation database, or aren't able to generate one, you have to tell YouCompleteMe how to compile your code some other way.

Every C-family project is different. It is not possible for YCM to guess what compiler flags to supply for your project. Fortunately, YCM provides a mechanism for you to generate the flags for a particular file with _arbitrary complexity_. This is achieved by requiring you to provide a Python module which implements a trivial function which, given the file name as argument, returns a list of compiler flags to use to compile that file.

YCM looks for a `.ycm_extra_conf.py` file in the directory of the opened file or in any directory above it in the hierarchy (recursively); when the file is found, it is loaded (only once!) as a Python module. YCM calls a `Settings` method in that module which should provide it with the information necessary to compile the current file. You can also provide a path to a global configuration file with the g:ycm_global_ycm_extra_conf option, which will be used as a fallback. To prevent the execution of malicious code from a file you didn't write YCM will ask you once per `.ycm_extra_conf.py` if it is safe to load. This can be disabled and you can white-/blacklist files. See the g:ycm_confirm_extra_conf and g:ycm_extra_conf_globlist options respectively.

This system was designed this way so that the user can perform any arbitrary sequence of operations to produce a list of compilation flags YCM should hand to Clang.

**NOTE** : It is highly recommended to include `-x <language>` flag to libclang. This is so that the correct language is detected, particularly for header files. Common values are `-x c` for C, `-x c++` for C++, `-x objc` for Objective-C, and `-x cuda` for CUDA.

To give you an impression, if your C++ project is trivial, and your usual compilation command is: `g++ -Wall -Wextra -Werror -o FILE.o FILE.cc`, then the following `.ycm_extra_conf.py` is enough to get semantic analysis from YouCompleteMe:

@abstr_code_section 

As you can see from the trivial example, YCM calls the `Settings` method which returns a dictionary with a single element `'flags'`. This element is a `list` of compiler flags to pass to libclang for the current file. The absolute path of that file is accessible under the `filename` key of the `kwargs` dictionary. That's it! This is actually enough for most projects, but for complex projects it is not uncommon to integrate directly with an existing build system using the full power of the Python language.

For a more elaborate example, @abstr_hyperlink . You should be able to use it _as a starting point_. **Don't** just copy/paste that file somewhere and expect things to magically work; **your project needs different flags**. Hint: just replace the strings in the `flags` variable with compilation flags necessary for your project. That should be enough for @abstr_number % of projects.

You could also consider using @abstr_hyperlink to generate the `ycm_extra_conf.py` file.

#### Errors during compilation

If Clang encounters errors when compiling the header files that your file includes, then it's probably going to take a long time to get completions. When the completion menu finally appears, it's going to have a large number of unrelated completion strings (type/function names that are not actually members). This is because Clang fails to build a precompiled preamble for your file if there are any errors in the included headers and that preamble is key to getting fast completions.

Call the `:YcmDiags` command to see if any errors or warnings were detected in your file.

#### Selecting a C-family completion engine

Currently YCM supports two completion engines for C-family semantic completion. One libclang-based and an **experimental** [clangd]-based completer. When in doubt we recommend using the libclang-based engine. Here is a quick comparison of the two completer engines:

  * **ycm_extra_conf.py** : Currently clangd does not support `ycm_extra_conf.py` therefore you must have a compilation database, whereas libclang can work with both.
  * **Project wide indexing** : Clangd has both dynamic and static index support. The dynamic index stores up-to-date symbols coming from any files you are currently editing, whereas static index contains project-wide symbol information. This symbol information is used for code completion and code navigation. Whereas libclang is limited to the current translation unit(TU).
  * **Code navigation** : Clangd provides all the GoTo requests libclang provides and it improves those using the above mentioned index information to contain project-wide information rather than just the current TU.
  * **Rename** : Clangd can perform semantic rename operations on the current file, whereas libclang doesn’t support such functionality.
  * **Code Completion** : Clangd can perform code completions at a lower latency than libclang; also, it has information about all the symbols in your project so it can suggest items outside your current TU and also provides proper `#include` insertions for those items.
  * **Format Code** : Clangd provides code formatting either for the selected lines or the whole file, whereas libclang doesn’t have such functionality.
  * **Performance** : Clangd has faster reparse and code completion times compared to libclang.



Note that for clangd to have some of the above mentioned functionality, you need to provide a static index. For details on how to do that please have a look at @abstr_hyperlink .

To enable:

  * libclang-based completer pass `--clang-completer`
  * @abstr_hyperlink -based completer pass `--clangd-completer`



to `install.py` while following the installation guide. As mentioned before, pass `--clang-completer` when in doubt, since the @abstr_hyperlink -based completer is still experimental.

### Java Semantic Completion

**NOTE** : Java support is currently experimental. Please let us know your feedback.

#### Java quick Start

@abstr_number . Ensure that you have enabled the Java completer. See the installation guide for details.

@abstr_number . Create a project file (gradle or maven) file in the root directory of your Java project, by following the instructions below.

@abstr_number . If you previously used Eclim or Syntastic for Java, disable them for Java.

@abstr_number . Edit a Java file from your project.

For the best experience, we highly recommend at least Vim @abstr_number . @abstr_number . @abstr_number when using Java support with YouCompleteMe.

#### Java Project Files

In order to provide semantic analysis, the Java completion engine requires knowledge of your project structure. In particular it needs to know the class path to use, when compiling your code. Fortunately @abstr_hyperlink supports @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

**NOTE:** Our recommendation is to use either maven or gradle projects.

#### Diagnostic display - Syntastic

The native support for Java includes YCM's native realtime diagnostics display. This can conflict with other diagnostics plugins like Syntastic, so when enabling Java support, please **manually disable Syntastic Java diagnostics**.

Add the following to your `vimrc`:

@abstr_code_section 

#### Diagnostic display - Eclim

The native support for Java includes YCM's native realtime diagnostics display. This can conflict with other diagnostics plugins like Eclim, so when enabling Java support, please **manually disable Eclim Java diagnostics**.

Add the following to your `vimrc`:

@abstr_code_section 

**NOTE** : We recommend disabling Eclim entirely when editing Java with YCM's native Java support. This can be done temporarily with `:EclimDisable`.

#### Eclipse Projects

Eclipse style projects require two files: @abstr_hyperlink and @abstr_hyperlink .

If your project already has these files due to previously being set up within eclipse, then no setup is required. @abstr_hyperlink should load the project just fine (it's basically eclipse after all).

However, if not, it is possible (easy in fact) to craft them manually, though it is not recommended. You're better off using gradle or maven (see below).

@abstr_hyperlink can be found in the ycmd test directory. Normally all that is required is to copy these files to the root of your project and to edit the `.classpath` to add additional libraries, such as:

@abstr_code_section 

It may also be necessary to change the directory in which your source files are located (paths are relative to the .project file itself):

@abstr_code_section 

**NOTE** : The eclipse project and classpath files are not a public interface and it is highly recommended to use Maven or Gradle project definitions if you don't already use eclipse to manage your projects.

#### Maven Projects

Maven needs a file named @abstr_hyperlink in the root of the project. Once again a simple @abstr_hyperlink can be found in ycmd source.

The format of @abstr_hyperlink files is way beyond the scope of this document, but we do recommend using the various tools that can generate them for you, if you're not familiar with them already.

#### Gradle Projects

Gradle projects require a @abstr_hyperlink . Again, there is a @abstr_hyperlink .

The format of @abstr_hyperlink files is way beyond the scope of this document, but we do recommend using the various tools that can generate them for you, if you're not familiar with them already.

#### Troubleshooting

If you're not getting completions or diagnostics, check the server health:

  * The Java completion engine takes a while to start up and parse your project. You should be able to see its progress in the command line, and `:YcmDebugInfo`. Ensure that the following lines are present:

@abstr_code_section 

  * If the above lines don't appear after a few minutes, check the jdt.ls and ycmd log files using :YcmToggleLogs . The jdt.ls log file is called `.log` (for some reason).




If you get a message about "classpath is incomplete", then make sure you have correctly configured the project files.

If you get messages about unresolved imports, then make sure you have correctly configured the project files, in particular check that the classpath is set correctly.

For anything else, contact us. Java support is experimental at present so we'd love to hear your feedback! Please do remember to check @abstr_hyperlink for the list of diagnostics we'll need.

### Python Semantic Completion

YCM relies on the @abstr_hyperlink engine to provide completion and code navigation. By default, it will pick the version of Python running the @abstr_hyperlink and use its `sys.path`. While this is fine for simple projects, this needs to be configurable when working with virtual environments or in a project with third-party packages. The next sections explain how to do that.

#### Working with virtual environments

A common practice when working on a Python project is to install its dependencies in a virtual environment and develop the project inside that environment. To support this, YCM needs to know the interpreter path of the virtual environment. You can specify it by creating a `.ycm_extra_conf.py` file at the root of your project with the following contents:

@abstr_code_section 

where `/path/to/virtual/environment/python` is the path to the Python used by the virtual environment you are working in. Typically, the executable can be found in the `Scripts` folder of the virtual environment directory on Windows and in the `bin` folder on other platforms.

If you don't like having to create a `.ycm_extra_conf.py` file at the root of your project and would prefer to specify the interpreter path with a Vim option, read the Configuring through Vim options section.

#### Working with third-party packages

Another common practice is to put the dependencies directly into the project and add their paths to `sys.path` at runtime in order to import them. YCM needs to be told about this path manipulation to support those dependencies. This can be done by creating a `.ycm_extra_conf.py` file at the root of the project. This file must define a `Settings( **kwargs )` function returning a dictionary with the list of paths to prepend to `sys.path` under the `sys_path` key. For instance, the following `.ycm_extra_conf.py`

@abstr_code_section 

adds the paths `/path/to/some/third_party/package` and `/path/to/another/third_party/package` at the start of `sys.path`.

If you would rather prepend paths to `sys.path` with a Vim option, read the Configuring through Vim options section.

If you need further control on how to add paths to `sys.path`, you should define the `PythonSysPath( **kwargs )` function in the `.ycm_extra_conf.py` file. Its keyword arguments are `sys_path` which contains the default `sys.path`, and `interpreter_path` which is the path to the Python interpreter. Here's a trivial example that insert the `/path/to/third_party/package` path at the second position of `sys.path`:

@abstr_code_section 

A more advanced example can be found in @abstr_hyperlink .

#### Configuring through Vim options

You may find inconvenient to have to create a `.ycm_extra_conf.py` file at the root of each one of your projects in order to set the path to the Python interpreter and/or add paths to `sys.path` and would prefer to be able to configure those through Vim options. Don't worry, this is possible by using the g:ycm_extra_conf_vim_data option and creating a global extra configuration file. Let's take an example. Suppose that you want to set the interpreter path with the `g:ycm_python_interpreter_path` option and prepend paths to `sys.path` with the `g:ycm_python_sys_path` option. Suppose also that you want to name the global extra configuration file `global_extra_conf.py` and that you want to put it in your HOME folder. You should then add the following lines to your vimrc:

@abstr_code_section 

and create the `~/global_extra_conf.py` file with the following contents:

@abstr_code_section 

That's it. You are done. Note that you don't need to restart the server when setting one of the options. YCM will automatically pick the new values.

### Rust Semantic Completion

Completions and GoTo commands within the current crate and its dependencies should work out of the box with no additional configuration (provided that you built YCM with the `--rust-completer` flag; see the Installation section for details). For semantic analysis inclusive of the standard library, you must have a local copy of @abstr_hyperlink . If using @abstr_hyperlink , run the following command to download the code: @abstr_code_section YCM will find its location automatically. Otherwise, download the archive, extract it somewhere, and set the following option so YCM can locate it: @abstr_code_section 

### JavaScript and TypeScript Semantic Completion

**NOTE:** YCM originally used the @abstr_hyperlink engine for JavaScript but due to @abstr_hyperlink not being maintained anymore by its main author and the @abstr_hyperlink engine offering more features, YCM is moving to @abstr_hyperlink . This won't affect you if you were already using @abstr_hyperlink but you are encouraged to do the switch by deleting the `third_party/ycmd/third_party/tern_runtime/node_modules` directory in YCM folder. If you are a new user but still want to use @abstr_hyperlink , you should pass the `--js-completer` option to the `install.py` script during installation. Further instructions on how to setup YCM with @abstr_hyperlink are available on @abstr_hyperlink .

All JavaScript and TypeScript features are provided by the @abstr_hyperlink engine, which is included in the TypeScript SDK. To enable these features, install @abstr_hyperlink and call the `install.py` script with the `--ts-completer` flag.

@abstr_hyperlink relies on @abstr_hyperlink for JavaScript and @abstr_hyperlink for TypeScript to analyze your project. Ensure the file exists at the root of your project.

To get diagnostics in JavaScript, set the `checkJs` option to `true` in your `jsconfig.json` file: @abstr_code_section 

### Semantic Completion for Other Languages

C-family, C#, Go, Java, Python, Rust, and JavaScript/TypeScript languages are supported natively by YouCompleteMe using the @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink / @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink engines, respectively. Check the installation section for instructions to enable these features if desired.

YCM will use your `omnifunc` (see `:h omnifunc` in Vim) as a source for semantic completions if it does not have a native semantic completion engine for your file's filetype. Vim comes with okayish omnifuncs for various languages like Ruby, PHP, etc. It depends on the language.

You can get a stellar omnifunc for Ruby with @abstr_hyperlink . Just make sure you have the _latest_ Eclim installed and configured (this means Eclim `>= @abstr_number . @abstr_number .*` and Eclipse `>= @abstr_number . @abstr_number .*`).

After installing Eclim remember to create a new Eclipse project within your application by typing `:ProjectCreate <path-to-your-project> -n ruby` inside vim and don't forget to have `let g:EclimCompletionMethod = 'omnifunc'` in your vimrc. This will make YCM and Eclim play nice; YCM will use Eclim's omnifuncs as the data source for semantic completions and provide the auto-triggering and subsequence-based matching (and other YCM features) on top of it.

### Writing New Semantic Completers

You have two options here: writing an `omnifunc` for Vim's omnicomplete system that YCM will then use through its omni-completer, or a custom completer for YCM using the @abstr_hyperlink .

Here are the differences between the two approaches:

  * You have to use VimScript to write the omnifunc, but get to use Python to write for the Completer API; this by itself should make you want to use the API.
  * The Completer API is a _much_ more powerful way to integrate with YCM and it provides a wider set of features. For instance, you can make your Completer query your semantic back-end in an asynchronous fashion, thus not blocking Vim's GUI thread while your completion system is processing stuff. This is impossible with VimScript. All of YCM's completers use the Completer API.
  * Performance with the Completer API is better since Python executes faster than VimScript.



If you want to use the `omnifunc` system, see the relevant Vim docs with `:h complete-functions`. For the Completer API, see @abstr_hyperlink .

If you want to upstream your completer into YCM's source, you should use the Completer API.

### Diagnostic Display

YCM will display diagnostic notifications for the C-family, C#, Java, JavaScript, and TypeScript languages. Since YCM continuously recompiles your file as you type, you'll get notified of errors and warnings in your file as fast as possible.

Here are the various pieces of the diagnostic UI:

  * Icons show up in the Vim gutter on lines that have a diagnostic.
  * Regions of text related to diagnostics are highlighted (by default, a red wavy underline in `gvim` and a red background in `vim`).
  * Moving the cursor to a line with a diagnostic echoes the diagnostic text.
  * Vim's location list is automatically populated with diagnostic data (off by default, see options).



The new diagnostics (if any) will be displayed the next time you press any key on the keyboard. So if you stop typing and just wait for the new diagnostics to come in, that _will not work_. You need to press some key for the GUI to update.

Having to press a key to get the updates is unfortunate, but cannot be changed due to the way Vim internals operate; there is no way that a background task can update Vim's GUI after it has finished running. You _have to_ press a key. This will make YCM check for any pending diagnostics updates.

You _can_ force a full, blocking compilation cycle with the `:YcmForceCompileAndDiagnostics` command (you may want to map that command to a key; try putting `nnoremap <F @abstr_number > :YcmForceCompileAndDiagnostics<CR>` in your vimrc). Calling this command will force YCM to immediately recompile your file and display any new diagnostics it encounters. Do note that recompilation with this command may take a while and during this time the Vim GUI _will_ be blocked.

YCM will display a short diagnostic message when you move your cursor to the line with the error. You can get a detailed diagnostic message with the `<leader>d` key mapping (can be changed in the options) YCM provides when your cursor is on the line with the diagnostic.

You can also see the full diagnostic message for all the diagnostics in the current file in Vim's `locationlist`, which can be opened with the `:lopen` and `:lclose` commands (make sure you have set `let g:ycm_always_populate_location_list = @abstr_number` in your vimrc). A good way to toggle the display of the `locationlist` with a single key mapping is provided by another (very small) Vim plugin called @abstr_hyperlink (which also makes it possible to change the height of the `locationlist` window), also written by yours truly.

#### Diagnostic Highlighting Groups

You can change the styling for the highlighting groups YCM uses. For the signs in the Vim gutter, the relevant groups are:

  * `YcmErrorSign`, which falls back to group `SyntasticErrorSign` and then `error` if they exist
  * `YcmWarningSign`, which falls back to group `SyntasticWarningSign` and then `todo` if they exist



You can also style the line that has the warning/error with these groups:

  * `YcmErrorLine`, which falls back to group `SyntasticErrorLine` if it exists
  * `YcmWarningLine`, which falls back to group `SyntasticWarningLine` if it exists



Note that the line highlighting groups only work when the g:ycm_enable_diagnostic_signs option is set. If you want highlighted lines but no signs in the Vim gutter, ensure that your Vim version is @abstr_number . @abstr_number . @abstr_number or later and set the `signcolumn` option to `off` in your vimrc:

@abstr_code_section 

The syntax groups used to highlight regions of text with errors/warnings: \- `YcmErrorSection`, which falls back to group `SyntasticError` if it exists and then `SpellBad` \- `YcmWarningSection`, which falls back to group `SyntasticWarning` if it exists and then `SpellCap`

Here's how you'd change the style for a group:

@abstr_code_section 

## Commands

### The `:YcmRestartServer` command

If the @abstr_hyperlink suddenly stops for some reason, you can restart it with this command.

### The `:YcmForceCompileAndDiagnostics` command

Calling this command will force YCM to immediately recompile your file and display any new diagnostics it encounters. Do note that recompilation with this command may take a while and during this time the Vim GUI _will_ be blocked.

You may want to map this command to a key; try putting `nnoremap <F @abstr_number > :YcmForceCompileAndDiagnostics<CR>` in your vimrc.

### The `:YcmDiags` command

Calling this command will fill Vim's `locationlist` with errors or warnings if any were detected in your file and then open it. If a given error or warning can be fixed by a call to `:YcmCompleter FixIt`, then `(FixIt available)` is appended to the error or warning text. See the `FixIt` completer subcommand for more information.

**NOTE:** The absence of `(FixIt available)` does not strictly imply a fix-it is not available as not all completers are able to provide this indication. For example, the c-sharp completer provides many fix-its but does not add this additional indication.

The `g:ycm_open_loclist_on_ycm_diags` option can be used to prevent the location list from opening, but still have it filled with new diagnostic data. See the _Options_ section for details.

### The `:YcmShowDetailedDiagnostic` command

This command shows the full diagnostic text when the user's cursor is on the line with the diagnostic.

### The `:YcmDebugInfo` command

This will print out various debug information for the current file. Useful to see what compile commands will be used for the file if you're using the semantic completion engine.

### The `:YcmToggleLogs` command

This command presents the list of logfiles created by YCM, the @abstr_hyperlink , and the semantic engine server for the current filetype, if any. One of these logfiles can be opened in the editor (or closed if already open) by entering the corresponding number or by clicking on it with the mouse. Additionally, this command can take the logfile names as arguments. Use the `<TAB>` key (or any other key defined by the `wildchar` option) to complete the arguments or to cycle through them (depending on the value of the `wildmode` option). Each logfile given as an argument is directly opened (or closed if already open) in the editor. Only for debugging purposes.

### The `:YcmCompleter` command

This command gives access to a number of additional IDE-like features in YCM, for things like semantic GoTo, type information, FixIt and refactoring.

This command accepts a range that can either be specified through a selection in one of Vim's visual modes (see `:h visual-use`) or on the command line. For instance, `: @abstr_number , @abstr_number YcmCompleter` will apply the command from line @abstr_number to line @abstr_number . This is useful for the Format subcommand.

Call `YcmCompleter` without further arguments for a list of the commands you can call for the current completer.

See the file type feature summary for an overview of the features available for each file type. See the _YcmCompleter subcommands_ section for more information on the available subcommands and their usage.

## YcmCompleter Subcommands

**NOTE:** See the docs for the `YcmCompleter` command before tackling this section.

The invoked subcommand is automatically routed to the currently active semantic completer, so `:YcmCompleter GoToDefinition` will invoke the `GoToDefinition` subcommand on the Python semantic completer if the currently active file is a Python one and on the Clang completer if the currently active file is a C-family language one.

You may also want to map the subcommands to something less verbose; for instance, `nnoremap <leader>jd :YcmCompleter GoTo<CR>` maps the `<leader>jd` sequence to the longer subcommand invocation.

### GoTo Commands

These commands are useful for jumping around and exploring code. When moving the cursor, the subcommands add entries to Vim's `jumplist` so you can use `CTRL-O` to jump back to where you were before invoking the command (and `CTRL-I` to jump forward; see `:h jumplist` for details). If there is more than one destination, the quickfix list (see `:h quickfix`) is populated with the available locations and opened to full width at the bottom of the screen. You can change this behavior by using the YcmQuickFixOpened autocommand.

#### The `GoToInclude` subcommand

Looks up the current line for a header and jumps to it.

Supported in filetypes: `c, cpp, objc, objcpp, cuda`

#### The `GoToDeclaration` subcommand

Looks up the symbol under the cursor and jumps to its declaration.

Supported in filetypes: `c, cpp, objc, objcpp, cuda, cs, go, java, javascript, python, rust, typescript`

#### The `GoToDefinition` subcommand

Looks up the symbol under the cursor and jumps to its definition.

**NOTE:** For C-family languages **this only works in certain situations** , namely when the definition of the symbol is in the current translation unit. A translation unit consists of the file you are editing and all the files you are including with `#include` directives (directly or indirectly) in that file.

Supported in filetypes: `c, cpp, objc, objcpp, cuda, cs, go, java, javascript, python, rust, typescript`

#### The `GoTo` subcommand

This command tries to perform the "most sensible" GoTo operation it can. Currently, this means that it tries to look up the symbol under the cursor and jumps to its definition if possible; if the definition is not accessible from the current translation unit, jumps to the symbol's declaration. For C-family languages, it first tries to look up the current line for a header and jump to it. For C#, implementations are also considered and preferred.

Supported in filetypes: `c, cpp, objc, objcpp, cuda, cs, go, java, javascript, python, rust, typescript`

#### The `GoToImprecise` subcommand

WARNING: This command trades correctness for speed!

Same as the `GoTo` command except that it doesn't recompile the file with libclang before looking up nodes in the AST. This can be very useful when you're editing files that take long to compile but you know that you haven't made any changes since the last parse that would lead to incorrect jumps. When you're just browsing around your codebase, this command can spare you quite a bit of latency.

Supported in filetypes: `c, cpp, objc, objcpp, cuda`

#### The `GoToReferences` subcommand

This command attempts to find all of the references within the project to the identifier under the cursor and populates the quickfix list with those locations.

Supported in filetypes: `java, javascript, python, typescript`

#### The `GoToImplementation` subcommand

Looks up the symbol under the cursor and jumps to its implementation (i.e. non-interface). If there are multiple implementations, instead provides a list of implementations to choose from.

Supported in filetypes: `cs, java`

#### The `GoToImplementationElseDeclaration` subcommand

Looks up the symbol under the cursor and jumps to its implementation if one, else jump to its declaration. If there are multiple implementations, instead provides a list of implementations to choose from.

Supported in filetypes: `cs`

#### The `GoToType` subcommand

Looks up the symbol under the cursor and jumps to the definition of its type e.g. if the symbol is an object, go to the definition of its class.

Supported in filetypes: `java, javascript, typescript`

### Semantic Information Commands

These commands are useful for finding static information about the code, such as the types of variables, viewing declarations and documentation strings.

#### The `GetType` subcommand

Echos the type of the variable or method under the cursor, and where it differs, the derived type.

For example:

```c++ std::string s; @abstr_code_section c++ class C { void f(); };

void C::f() {

} @abstr_code_section viml call youcompleteme#GetErrorCount() @abstr_code_section viml call youcompleteme#GetWarningCount() @abstr_code_section viml function! s:CustomizeYcmLocationWindow() " Move the window to the top of the screen. wincmd K " Set the window height to @abstr_number . @abstr_number wincmd _ " Switch back to working window. wincmd p endfunction

autocmd User YcmLocationOpened call s:CustomizeYcmLocationWindow() @abstr_code_section viml function! s:CustomizeYcmQuickFixWindow() " Move the window to the top of the screen. wincmd K " Set the window height to @abstr_number . @abstr_number wincmd _ endfunction

autocmd User YcmQuickFixOpened call s:CustomizeYcmQuickFixWindow() @abstr_code_section viml let g:ycm_min_num_of_chars_for_completion = @abstr_number @abstr_code_section viml let g:ycm_min_num_of_chars_for_completion = @abstr_number @abstr_code_section viml let g:ycm_min_num_identifier_candidate_chars = @abstr_number @abstr_code_section viml let g:ycm_max_num_candidates = @abstr_number @abstr_code_section viml let g:ycm_max_num_identifier_candidates = @abstr_number @abstr_code_section viml let g:ycm_auto_trigger = @abstr_number @abstr_code_section viml let g:ycm_filetype_whitelist = {' _': @abstr_number } @abstr_code_section viml let g:ycm_filetype_blacklist = { \ 'tagbar': @abstr_number , \ 'notes': @abstr_number , \ 'markdown': @abstr_number , \ 'netrw': @abstr_number , \ 'unite': @abstr_number , \ 'text': @abstr_number , \ 'vimwiki': @abstr_number , \ 'pandoc': @abstr_number , \ 'infolog': @abstr_number , \ 'mail': @abstr_number } @abstr_code_section viml let g:ycm_filetype_specific_completion_to_disable = { \ 'gitcommit': @abstr_number } @abstr_code_section viml let g:ycm_filepath_blacklist = {'_ ': @abstr_number } @abstr_code_section viml let g:ycm_filepath_blacklist = { \ 'html': @abstr_number , \ 'jsx': @abstr_number , \ 'xml': @abstr_number , } @abstr_code_section viml let g:ycm_show_diagnostics_ui = @abstr_number @abstr_code_section viml let g:ycm_error_symbol = '>>' @abstr_code_section viml let g:ycm_warning_symbol = '>>' @abstr_code_section viml let g:ycm_enable_diagnostic_signs = @abstr_number @abstr_code_section viml let g:ycm_enable_diagnostic_highlighting = @abstr_number @abstr_code_section viml let g:ycm_echo_current_diagnostic = @abstr_number @abstr_code_section viml let g:ycm_filter_diagnostics = { \ "java": { \ "regex": [ ". _taco._ ", ... ], \ "level": "error", \ ... \ } \ } @abstr_code_section viml let g:ycm_always_populate_location_list = @abstr_number @abstr_code_section viml let g:ycm_open_loclist_on_ycm_diags = @abstr_number @abstr_code_section viml let g:ycm_complete_in_comments = @abstr_number @abstr_code_section viml let g:ycm_complete_in_strings = @abstr_number @abstr_code_section viml let g:ycm_collect_identifiers_from_comments_and_strings = @abstr_number @abstr_code_section viml let g:ycm_collect_identifiers_from_tags_files = @abstr_number @abstr_code_section viml let g:ycm_seed_identifiers_with_syntax = @abstr_number @abstr_code_section python

# The ' @abstr_number ' value is of course contingent on Vim @abstr_number . @abstr_number ; in @abstr_number . @abstr_number it would be ' @abstr_number '

Settings( ..., client_data = { 'v:version': @abstr_number } ) @abstr_code_section python def Settings( _*kwargs ): @abstr_code_section viml let g:ycm_extra_conf_vim_data = [] @abstr_code_section viml let g:ycm_server_python_interpreter = '' @abstr_code_section viml let g:ycm_keep_logfiles = @abstr_number @abstr_code_section viml let g:ycm_log_level = 'info' @abstr_code_section viml let g:ycm_auto_start_csharp_server = @abstr_number @abstr_code_section viml let g:ycm_auto_stop_csharp_server = @abstr_number @abstr_code_section viml let g:ycm_csharp_server_port = @abstr_number @abstr_code_section viml let g:ycm_csharp_insert_namespace_expr = '' @abstr_code_section viml let g:ycm_add_preview_to_completeopt = @abstr_number @abstr_code_section viml let g:ycm_autoclose_preview_window_after_completion = @abstr_number @abstr_code_section viml let g:ycm_autoclose_preview_window_after_insertion = @abstr_number @abstr_code_section viml let g:ycm_max_diagnostics_to_display = @abstr_number @abstr_code_section viml let g:ycm_key_list_select_completion = [' ', ''] @abstr_code_section viml let g:ycm_key_list_previous_completion = ['', ''] @abstr_code_section viml let g:ycm_key_list_stop_completion = [''] @abstr_code_section viml let g:ycm_key_invoke_completion = '' @abstr_code_section viml let g:ycm_key_detailed_diagnostics = 'd' @abstr_code_section viml let g:ycm_global_ycm_extra_conf = '' @abstr_code_section viml let g:ycm_confirm_extra_conf = @abstr_number @abstr_code_section viml let g:ycm_extra_conf_globlist = ['~/dev/_','!~/ _'] @abstr_code_section viml let g:ycm_extra_conf_globlist = [] @abstr_code_section viml let g:ycm_filepath_completion_use_working_dir = @abstr_number @abstr_code_section viml let g:ycm_semantic_triggers = { \ 'c': ['- >', '.'], \ 'objc': ['->', '.', 're![[_a-zA-Z]+\w_\s', 're!^\s _[^\W\d]\w_ \s', \ 're![.*]\s'], \ 'ocaml': ['.', '#'], \ 'cpp,cuda,objcpp': ['->', '.', '::'], \ 'perl': ['->'], \ 'php': ['->', '::'], \ 'cs,d,elixir,go,groovy,java,javascript,julia,perl @abstr_number ,python,scala,typescript,vb': ['.'], \ 'ruby,rust': ['.', '::'], \ 'lua': ['.', ':'], \ 'erlang': [':'], \ } @abstr_code_section viml let g:ycm_cache_omnifunc = @abstr_number @abstr_code_section viml let g:ycm_use_ultisnips_completer = @abstr_number @abstr_code_section viml :rightbelow vertical YcmCompleter GoTo @abstr_code_section viml :tab YcmCompleter GoTo @abstr_code_section viml let g:ycm_goto_buffer_command = 'same-buffer' @abstr_code_section viml let g:ycm_disable_for_files_larger_than_kb = @abstr_number @abstr_code_section viml let g:ycm_use_clangd = @abstr_number @abstr_code_section viml let g:ycm_clangd_binary_path = '' @abstr_code_section viml let g:ycm_clangd_args = [] @abstr_code_section viml let g:ycm_clangd_uses_ycmd_caching = @abstr_number @abstr_code_section ImportError: dynamic module does not define init function (PyInit_ycm_core) @abstr_code_section ImportError: dynamic module does not define init function (initycm_core) @abstr_code_section \-- Found PythonLibs: /usr/lib/libpython @abstr_number . @abstr_number .so (Required is at least version " @abstr_number . @abstr_number ") @abstr_code_section \-- Found PythonLibs: /usr/lib/libpython @abstr_number . @abstr_number .so (found suitable version " @abstr_number . @abstr_number . @abstr_number ", minimum required is " @abstr_number . @abstr_number ") @abstr_code_section -DPYTHON_INCLUDE_DIR=/usr/include/python @abstr_number . @abstr_number -DPYTHON_LIBRARY=/usr/lib/libpython @abstr_number . @abstr_number .so @abstr_code_section /usr/bin/ld: /usr/local/lib/libpython @abstr_number . @abstr_number .a(abstract.o): relocation R_X @abstr_number _ @abstr_number _ @abstr_number against `a local symbol' can not be used when making a shared object; recompile with -fPIC @abstr_code_section viml g:UltiSnipsExpandTrigger g:UltiSnipsJumpForwardTrigger g:UltiSnipsJumpBackwardTrigger @abstr_code_section viml :doautocmd FileType @abstr_code_section YCM_CORES= @abstr_number ./install.py --clang-completer @abstr_code_section python python << EOF import os import re path = os.environ['PATH'].split(';')

def contains_msvcr_lib(folder): try: for item in os.listdir(folder): if re.match(r'msvcr\d+.dll', item): return True except: pass return False

path = [folder for folder in path if not contains_msvcr_lib(folder)] os.environ['PATH'] = ';'.join(path) EOF @abstr_code_section python def Settings( **kwargs): return { 'interpreter_path': '/path/to/virtual/env/bin/python' } @abstr_code_section viml augroup load_ycm autocmd! autocmd CursorHold, CursorHoldI * :packadd YouCompleteMe \ | autocmd! load_ycm augroup END @abstr_code_section python def Settings(** kwargs): return { 'interpreter_path': '/path/to/anaconda/python' } @abstr_code_section viml autocmd CmdwinEnter * inoremap  \ pumvisible() ? "\" : "\" ```

## Contributor Code of Conduct

Please note that this project is released with a @abstr_hyperlink . By participating in this project you agree to abide by its terms.

## Contact

If you have questions about the plugin or need help, please join the @abstr_hyperlink or use the @abstr_hyperlink mailing list.

If you have bug reports or feature suggestions, please use the @abstr_hyperlink . Before you do, please carefully read @abstr_hyperlink as this asks for important diagnostics which the team will use to help get you going.

The latest version of the plugin is available at @abstr_hyperlink .

The author's homepage is @abstr_hyperlink .

Please do **NOT** go to #vim on freenode for support. Please contact the YouCompleteMe maintainers directly using the contact details.

## License

This software is licensed under the @abstr_hyperlink . © @abstr_number - @abstr_number YouCompleteMe contributors
