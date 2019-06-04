# YouCompleteMe: a code-completion engine for Vim

@abstr_hyperlink @abstr_hyperlink 

  * Intro
  * Installation 
    * Mac OS X
    * Ubuntu Linux x @abstr_number 
    * Fedora Linux x @abstr_number 
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
    * JavaScript Semantic Completion
    * Rust Semantic Completion
    * Python Semantic Completion
    * Semantic Completion for Other Languages
    * Writing New Semantic Completers
    * Diagnostic Display 
      * Diagnostic Highlighting Groups
  * Commands 
    * YcmCompleter subcommands 
      * GoTo Commands
      * Semantic Information Commands
      * Refactoring and FixIt Commands
      * Miscellaneous Commands
  * Functions
  * Options
  * FAQ
  * Contributor Code of Conduct
  * Contact
  * License



## Intro

YouCompleteMe is a fast, as-you-type, fuzzy-search code completion engine for @abstr_hyperlink . It has several completion engines:

  * an identifier-based engine that works with every programming language,
  * a @abstr_hyperlink -based engine that provides native semantic code completion for C/C++/Objective-C/Objective-C++ (from now on referred to as "the C-family languages"),
  * a @abstr_hyperlink -based completion engine for Python @abstr_number and @abstr_number (using the @abstr_hyperlink wrapper),
  * an @abstr_hyperlink -based completion engine for C#,
  * a combination of @abstr_hyperlink and @abstr_hyperlink semantic engines for Go,
  * a @abstr_hyperlink -based completion engine for TypeScript,
  * a @abstr_hyperlink -based completion engine for JavaScript,
  * a @abstr_hyperlink -based completion engine for Rust,
  * and an omnifunc-based completer that uses data from Vim's omnicomplete system to provide semantic completions for many other languages (Ruby, PHP etc.).



@abstr_image 

Here's an explanation of what happens in the short GIF demo above.

First, realize that **no keyboard shortcuts had to be pressed** to get the list of completion candidates at any point in the demo. The user just types and the suggestions pop up by themselves. If the user doesn't find the completion suggestions relevant and/or just wants to type, they can do so; the completion engine will not interfere.

When the user sees a useful completion string being offered, they press the TAB key to accept it. This inserts the completion string. Repeated presses of the TAB key cycle through the offered completions.

If the offered completions are not relevant enough, the user can continue typing to further filter out unwanted completions.

A critical thing to notice is that the completion **filtering is NOT based on the input being a string prefix of the completion** (but that works too). The input needs to be a _ @abstr_hyperlink match_ of a completion. This is a fancy way of saying that any input characters need to be present in a completion string in the order in which they appear in the input. So `abc` is a subsequence of `xaybgc`, but not of `xbyxaxxc`. After the filter, a complicated sorting system ranks the completion strings so that the most relevant ones rise to the top of the menu (so you usually need to press TAB just once).

**All of the above works with any programming language** because of the identifier-based completion engine. It collects all of the identifiers in the current file and other files you visit (and your tags files) and searches them when you type (identifiers are put into per-filetype groups).

The demo also shows the semantic engine in use. When the user presses `.`, `->` or `::` while typing in insert mode (for C++; different triggers are used for other languages), the semantic engine is triggered (it can also be triggered with a keyboard shortcut; see the rest of the docs).

The last thing that you can see in the demo is YCM's diagnostic display features (the little red X that shows up in the left gutter; inspired by @abstr_hyperlink ) if you are editing a C-family file. As Clang compiles your file and detects warnings or errors, they will be presented in various ways. You don't need to save your file or press any keyboard shortcut to trigger this, it "just happens" in the background.

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
  * semantic renaming of variables across files (JavaScript only).



Features vary by file type, so make sure to check out the file type feature summary and the full list of completer subcommands to find out what's available for your favourite languages.

You'll also find that YCM has filepath completers (try typing `./` in a file) and a completer that integrates with @abstr_hyperlink .

## Installation

### Mac OS X

Please refer to the full Installation Guide below; the following commands are provided on a best-effort basis and may not work for you.

Install the latest version of @abstr_hyperlink . Yes, MacVim. And yes, the _latest_.

If you don't use the MacVim GUI, it is recommended to use the Vim binary that is inside the MacVim.app package (`MacVim.app/Contents/MacOS/Vim`). To ensure it works correctly copy the `mvim` script from the @abstr_hyperlink download to your local binary folder (for example `/usr/local/bin/mvim`) and then symlink it:
    
    
    ln -s /usr/local/bin/mvim vim
    

Install YouCompleteMe with @abstr_hyperlink .

**Remember:** YCM is a plugin with a compiled component. If you **update** YCM using Vundle and the ycm_core library APIs have changed (happens rarely), YCM will notify you to recompile it. You should then rerun the install process.

**NOTE:** If you want C-family completion, you MUST have the latest Xcode installed along with the latest Command Line Tools (they are installed automatically when you run `clang` for the first time, or manually by running `xcode-select --install`)

Install CMake. Preferably with @abstr_hyperlink , but here's the @abstr_hyperlink .

_If_ you have installed a Homebrew Python and/or Homebrew MacVim, see the _FAQ_ for details.

Compiling YCM **with** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --clang-completer
    

Compiling YCM **without** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py
    

The following additional language support options are available:

  * C# support: add `--omnisharp-completer` when calling `./install.py`.
  * Go support: ensure go is installed and add `--gocode-completer` when calling `./install.py`.
  * TypeScript support: install @abstr_hyperlink then install the TypeScript SDK with `npm install -g typescript`.
  * JavaScript support: install @abstr_hyperlink and add `--tern-completer` when calling `./install.py`.
  * Rust support: install @abstr_hyperlink and add `--racer-completer` when calling `./install.py`.



To simply compile with everything enabled, there's a `--all` flag. So, to install with all language features, ensure `npm`, `go`, `mono`, `rust`, and `typescript` API are installed and in your `PATH`, then simply run:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --all
    

That's it. You're done. Refer to the _User Guide_ section on how to use YCM. Don't forget that if you want the C-family semantic completion engine to work, you will need to provide the compilation flags for your project to YCM. It's all in the User Guide.

YCM comes with sane defaults for its options, but you still may want to take a look at what's available for configuration. There are a few interesting options that are conservatively turned off by default that you may want to turn on.

### Ubuntu Linux x @abstr_number

Please refer to the full Installation Guide below; the following commands are provided on a best-effort basis and may not work for you.

Make sure you have Vim @abstr_number . @abstr_number . @abstr_number with python @abstr_number or python @abstr_number support. Ubuntu @abstr_number . @abstr_number and later have a Vim that's recent enough. You can see the version of Vim installed by running `vim --version`. If the version is too old, you may need to @abstr_hyperlink (don't worry, it's easy).

Install YouCompleteMe with @abstr_hyperlink .

**Remember:** YCM is a plugin with a compiled component. If you **update** YCM using Vundle and the ycm_core library APIs have changed (happens rarely), YCM will notify you to recompile it. You should then rerun the install process.

Install development tools and CMake: `sudo apt-get install build-essential cmake`

Make sure you have Python headers installed: `sudo apt-get install python-dev python @abstr_number -dev`.

Compiling YCM **with** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --clang-completer
    

Compiling YCM **without** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py
    

The following additional language support options are available:

  * C# support: add `--omnisharp-completer` when calling `./install.py`.
  * Go support: ensure go is installed and add `--gocode-completer` when calling `./install.py`.
  * TypeScript support: install @abstr_hyperlink then install the TypeScript SDK with `npm install -g typescript`.
  * JavaScript support: install @abstr_hyperlink and add `--tern-completer` when calling `./install.py`.
  * Rust support: install @abstr_hyperlink and add `--racer-completer` when calling `./install.py`.



To simply compile with everything enabled, there's a `--all` flag. So, to install with all language features, ensure `npm`, `go`, `mono`, `rust`, and `typescript` API are installed and in your `PATH`, then simply run:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --all
    

That's it. You're done. Refer to the _User Guide_ section on how to use YCM. Don't forget that if you want the C-family semantic completion engine to work, you will need to provide the compilation flags for your project to YCM. It's all in the User Guide.

YCM comes with sane defaults for its options, but you still may want to take a look at what's available for configuration. There are a few interesting options that are conservatively turned off by default that you may want to turn on.

### Fedora Linux x @abstr_number

Please refer to the full Installation Guide below; the following commands are provided on a best-effort basis and may not work for you.

Make sure you have Vim @abstr_number . @abstr_number . @abstr_number with Python @abstr_number or Python @abstr_number support. Fedora @abstr_number and later have a Vim that's recent enough. You can see the version of Vim installed by running `vim --version`. If the version is too old, you may need to @abstr_hyperlink (don't worry, it's easy).

Install YouCompleteMe with @abstr_hyperlink .

**Remember:** YCM is a plugin with a compiled component. If you **update** YCM using Vundle and the ycm_core library APIs have changed (happens rarely), YCM will notify you to recompile it. You should then rerun the install process.

Install development tools and CMake: `sudo dnf install automake gcc gcc-c++ kernel-devel cmake`

Make sure you have Python headers installed: `sudo dnf install python-devel python @abstr_number -devel`.

Compiling YCM **with** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --clang-completer
    

Compiling YCM **without** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py
    

The following additional language support options are available:

  * C# support: add `--omnisharp-completer` when calling `./install.py`.
  * Go support: ensure go is installed and add `--gocode-completer` when calling `./install.py`.
  * TypeScript support: install @abstr_hyperlink then install the TypeScript SDK with `npm install -g typescript`.
  * JavaScript support: install @abstr_hyperlink and add `--tern-completer` when calling `./install.py`.
  * Rust support: install @abstr_hyperlink and add `--racer-completer` when calling `./install.py`.



To simply compile with everything enabled, there's a `--all` flag. So, to install with all language features, ensure `npm`, `go`, `mono`, `rust`, and `typescript` API are installed and in your `PATH`, then simply run:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --all
    

That's it. You're done. Refer to the _User Guide_ section on how to use YCM. Don't forget that if you want the C-family semantic completion engine to work, you will need to provide the compilation flags for your project to YCM. It's all in the User Guide.

YCM comes with sane defaults for its options, but you still may want to take a look at what's available for configuration. There are a few interesting options that are conservatively turned off by default that you may want to turn on.

### Windows

Please refer to the full Installation Guide below; the following commands are provided on a best-effort basis and may not work for you.

**Important:** we assume that you are using the `cmd.exe` command prompt and that you know how to add an executable to the PATH environment variable.

Make sure you have at least Vim @abstr_number . @abstr_number . @abstr_number with Python @abstr_number or Python @abstr_number support. You can check the version and which Python is supported by typing `:version` inside Vim. Look at the features included: `+python/dyn` for Python @abstr_number and `+python @abstr_number /dyn` for Python @abstr_number . Take note of the Vim architecture, i.e. @abstr_number or @abstr_number -bit. It will be important when choosing the Python installer. We recommend using a @abstr_number -bit client. @abstr_hyperlink are available.

Install YouCompleteMe with @abstr_hyperlink .

**Remember:** YCM is a plugin with a compiled component. If you **update** YCM using Vundle and the ycm_core library APIs have changed (happens rarely), YCM will notify you to recompile it. You should then rerun the install process.

Download and install the following software:

  * @abstr_hyperlink . Be sure to pick the version corresponding to your Vim architecture. It is _Windows x @abstr_number _ for a @abstr_number -bit Vim and _Windows x @abstr_number - @abstr_number _ for a @abstr_number -bit Vim. We recommend installing Python @abstr_number .
  * @abstr_hyperlink . Add CMake executable to the PATH environment variable.
  * @abstr_hyperlink . Download the community edition. During setup, choose _Custom_ as the installation type and select the _Visual C++_ component.
  * @abstr_hyperlink . Required to build YCM with semantic support for C-family languages.



Compiling YCM **with** semantic support for C-family languages:
    
    
    cd %USERPROFILE%/vimfiles/bundle/YouCompleteMe
    install.py --clang-completer
    

Compiling YCM **without** semantic support for C-family languages:
    
    
    cd %USERPROFILE%/vimfiles/bundle/YouCompleteMe
    install.py
    

The following additional language support options are available:

  * C# support: add `--omnisharp-completer` when calling `install.py`. Be sure that @abstr_hyperlink .
  * Go support: ensure go is installed and add `--gocode-completer` when calling `install.py`.
  * TypeScript support: install @abstr_hyperlink then install the TypeScript SDK with `npm install -g typescript`.
  * JavaScript support: install @abstr_hyperlink and add `--tern-completer` when calling `install.py`.
  * Rust support: install @abstr_hyperlink and add `--racer-completer` when calling `install.py`.



To simply compile with everything enabled, there's a `--all` flag. So, to install with all language features, ensure `npm`, `go`, `mono`, `rust`, and `typescript` API are installed and in your `%PATH%`, then simply run:
    
    
    cd %USERPROFILE%/vimfiles/bundle/YouCompleteMe
    python install.py --all
    

You can specify the Microsoft Visual C++ (MSVC) version using the `--msvc` option. YCM officially supports MSVC @abstr_number (Visual Studio @abstr_number ), @abstr_number ( @abstr_number ), and @abstr_number ( @abstr_number ).

That's it. You're done. Refer to the _User Guide_ section on how to use YCM. Don't forget that if you want the C-family semantic completion engine to work, you will need to provide the compilation flags for your project to YCM. It's all in the User Guide.

YCM comes with sane defaults for its options, but you still may want to take a look at what's available for configuration. There are a few interesting options that are conservatively turned off by default that you may want to turn on.

### FreeBSD/OpenBSD

Please refer to the full Installation Guide below; the following commands are provided on a best-effort basis and may not work for you. OpenBSD / FreeBSD are not officially supported platforms by YCM.

Make sure you have Vim @abstr_number . @abstr_number . @abstr_number with Python @abstr_number or Python @abstr_number support.

OpenBSD @abstr_number . @abstr_number and later have a Vim that's recent enough. You can see the version of Vim installed by running `vim --version`.

FreeBSD @abstr_number .x comes with clang compiler but not the libraries needed to install.
    
    
    pkg install llvm @abstr_number  boost-all boost-python-libs clang @abstr_number 
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/llvm @abstr_number /lib/
    

Install YouCompleteMe with @abstr_hyperlink .

**Remember:** YCM is a plugin with a compiled component. If you **update** YCM using Vundle and the ycm_core library APIs have changed (happens rarely), YCM will notify you to recompile it. You should then rerun the install process.

Install dependencies and CMake: `sudo pkg_add llvm boost cmake`

Compiling YCM **with** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --clang-completer --system-libclang --system-boost
    

Compiling YCM **without** semantic support for C-family languages:
    
    
    cd ~/.vim/bundle/YouCompleteMe
    ./install.py --system-boost
    

The following additional language support options are available:

  * C# support: add `--omnisharp-completer` when calling `./install.py`.
  * Go support: ensure go is installed and add `--gocode-completer` when calling `./install.py`.
  * TypeScript support: install @abstr_hyperlink then install the TypeScript SDK with `npm install -g typescript`.
  * JavaScript support: install @abstr_hyperlink and add `--tern-completer` when calling `./install.py`.
  * Rust support: install @abstr_hyperlink and add `--racer-completer` when calling `./install.py`.



To simply compile with everything enabled, there's a `--all` flag. So, to install with all language features, ensure `npm`, `go`, `mono`, `rust`, and `typescript` API are installed and in your `PATH`, then simply run:
    
    
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
    

@abstr_number . [Complete this step ONLY if you care about semantic completion support for C-family languages. Otherwise it's not necessary.]
    
    
    **Download the latest version of `libclang`**. Clang is an open-source
    compiler that can compile C/C++/Objective-C/Objective-C++. The `libclang`
    library it provides is used to power the YCM semantic completion engine for
    those languages. YCM is designed to work with libclang version  @abstr_number . @abstr_number  or
    higher, but can in theory work with any  @abstr_number . @abstr_number + version as well.
    
    You can use the system libclang _only if you are sure it is version  @abstr_number . @abstr_number  or
    higher_, otherwise don't. Even if it is, we recommend using the [official
    binaries from llvm.org][clang-download] if at all possible. Make sure you
    download the correct archive file for your OS.
    
    We **STRONGLY recommend AGAINST use** of the system libclang instead of
    the upstream compiled binaries. Random things may break. Save yourself the
    hassle and use the upstream pre-built libclang.
    

@abstr_number . **Compile the`ycm_core` library** that YCM needs. This library is the C++ engine that YCM uses to get fast completions.
    
    
    You will need to have `cmake` installed in order to generate the required
    makefiles. Linux users can install cmake with their package manager (`sudo
    apt-get install cmake` for Ubuntu) whereas other users can [download and
    install][cmake-download] cmake from its project site. Mac users can also get
    it through [Homebrew][brew] with `brew install cmake`.
    
    On a Unix OS, you need to make sure you have Python headers installed. On a
    Debian-like Linux distro, this would be `sudo apt-get install python-dev
    python @abstr_number -dev`. On Mac they should already be present.
    
    On Windows, you need to download and install [Python  @abstr_number  or
    Python  @abstr_number ][python-win-download]. Pick the version corresponding to your Vim
    architecture. You will also need Microsoft Visual C++ (MSVC) to build YCM.
    You can obtain it by installing [Visual Studio][visual-studio-download].
    MSVC  @abstr_number  (Visual Studio  @abstr_number ),  @abstr_number  ( @abstr_number ), and  @abstr_number  ( @abstr_number ) are officially
    supported.
    
    Here we'll assume you installed YCM with Vundle. That means that the
    top-level YCM directory is in `~/.vim/bundle/YouCompleteMe`.
    
    We'll create a new folder where build files will be placed. Run the
    following:
    
        cd ~
        mkdir ycm_build
        cd ycm_build
    
    Now we need to generate the makefiles. If you DON'T care about semantic
    support for C-family languages, run the following command in the `ycm_build`
    directory:
    
        cmake -G "<generator>" . ~/.vim/bundle/YouCompleteMe/third_party/ycmd/cpp
    
    where `<generator>` is `Unix Makefiles` on Unix systems and one of the
    following Visual Studio generators on Windows:
    
    - `Visual Studio  @abstr_number  Win @abstr_number `
    - `Visual Studio  @abstr_number  Win @abstr_number `
    - `Visual Studio  @abstr_number  Win @abstr_number `
    
    Remove the `Win @abstr_number ` part in these generators if your Vim architecture is
     @abstr_number -bit.
    
    For those who want to use the system version of boost, you would pass
    `-DUSE_SYSTEM_BOOST=ON` to cmake. This may be necessary on some systems
    where the bundled version of boost doesn't compile out of the box.
    
    NOTE: We **STRONGLY recommend AGAINST use** of the system boost instead
    of the bundled version of boost. Random things may break. Save yourself
    the hassle and use the bundled version of boost.
    
    If you DO care about semantic support for C-family languages, then your
    `cmake` call will be a bit more complicated.  We'll assume you downloaded a
    binary distribution of LLVM+Clang from llvm.org in step  @abstr_number  and that you
    extracted the archive file to folder `~/ycm_temp/llvm_root_dir` (with `bin`,
    `lib`, `include` etc. folders right inside that folder). On Windows, you can
    extract the files from the LLVM+Clang installer using [ @abstr_number -zip][ @abstr_number z-download].
    
    NOTE: This _only_ works with a _downloaded_ LLVM binary package, not a
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
    
    NOTE: We **STRONGLY recommend AGAINST use** of the system libclang instead
    of the upstream compiled binaries. Random things may break. Save yourself
    the hassle and use the upstream pre-built libclang.
    
    You could also force the use of a custom libclang library with
    `-DEXTERNAL_LIBCLANG_PATH=/path/to/libclang.so` flag (the library would end
    with `.dylib` on a Mac). Again, this flag would be used _instead of_ the
    other flags. **If you compiled LLVM from source, this is the flag you should
    be using.**
    
    Running the `cmake` command will also place the `libclang.[so|dylib|dll]` in
    the `YouCompleteMe/third_party/ycmd` folder for you if you compiled with
    clang support (it needs to be there for YCM to work).
    

@abstr_number . Set up support for additional languages, as desired:

  * C# support: Navigate to `YouCompleteMe/third_party/ycmd/third_party/OmniSharpServer` and run `msbuild` (Windows) or `xbuild` (other platforms, using mono) depending on your platform. If mono is not installed, install it. When on Windows, be sure that @abstr_hyperlink .

  * Go support: If go is not installed on your system, install it and add it to your path. Navigate to `YouCompleteMe/third_party/ycmd/third_party/gocode` and run `go build`.

  * TypeScript support: As with the quick installation, simply `npm install -g typescript` after successfully installing @abstr_hyperlink .

  * JavaScript support: Install @abstr_hyperlink . Then navigate to `YouCompleteMe/third_party/ycmd/third_party/tern_runtime` and run `npm install --production`

  * Rust support: Install @abstr_hyperlink . Navigate to `YouCompleteMe/third_party/ycmd/third_party/racerd` and run `cargo build --release`.




That's it. You're done. Refer to the _User Guide_ section on how to use YCM. Don't forget that if you want the C-family semantic completion engine to work, you will need to provide the compilation flags for your project to YCM. It's all in the User Guide.

YCM comes with sane defaults for its options, but you still may want to take a look at what's available for configuration. There are a few interesting options that are conservatively turned off by default that you may want to turn on.

## Quick Feature Summary

### General (all languages)

  * Super-fast identifier completer including tags files and syntax elements
  * Intelligent suggestion ranking and filtering
  * File and path suggestions
  * Suggestions from Vim's OmniFunc
  * UltiSnips snippet suggestions



### C-family languages (C, C++, Objective C, Objective C++)

  * Semantic auto-completion
  * Real-time diagnostic display
  * Go to include/declaration/definition (`GoTo`, etc.)
  * Semantic type information for identifiers (`GetType`)
  * Automatically fix certain errors (`FixIt`)
  * View documentation comments for identifiers (`GetDoc`)



### C♯

  * Semantic auto-completion
  * Real-time diagnostic display
  * Go to declaration/definition (`GoTo`, etc.)
  * Semantic type information for identifiers (`GetType`)
  * Automatically fix certain errors (`FixIt`)
  * Management of OmniSharp server instance
  * View documentation comments for identifiers (`GetDoc`)



### Python

  * Intelligent auto-completion
  * Go to declaration/definition, find references (`GoTo`, `GoToReferences`)
  * View documentation comments for identifiers (`GetDoc`)
  * Restart @abstr_hyperlink server using a different Python interpreter



### Go

  * Semantic auto-completion
  * Go to definition (`GoTo`)
  * Management of `gocode` server instance



### TypeScript

  * Semantic auto-completion
  * Go to definition, find references (`GoToDefinition`, `GoToReferences`)
  * Semantic type information for identifiers (`GetType`)
  * View documentation comments for identifiers (`GetDoc`)



### JavaScript

  * Intelligent auto-completion
  * Renaming variables (`RefactorRename <new name>`)
  * Go to definition, find references (`GoToDefinition`, `GoToReferences`)
  * Type information for identifiers (`GetType`)
  * View documentation comments for identifiers (`GetDoc`)
  * Management of `Tern` server instance



### Rust

  * Semantic auto-completion
  * Go to definition (`GoTo`, `GoToDefinition`, and `GoToDeclaration` are identical)
  * Management of `racer` server instance



## User Guide

### General Usage

  * If the offered completions are too broad, keep typing characters; YCM will continue refining the offered completions based on your input.
  * Filtering is "smart-case" sensitive; if you are typing only lowercase letters, then it's case-insensitive. If your input contains uppercase letters, then the uppercase letters in your query must match uppercase letters in the completion strings (the lowercase letters still match both). So, "foo" matches "Foo" and "foo", "Foo" matches "Foo" and "FOO" but not "foo".
  * Use the TAB key to accept a completion and continue pressing TAB to cycle through the completions. Use Shift-TAB to cycle backwards. Note that if you're using console Vim (that is, not Gvim or MacVim) then it's likely that the Shift-TAB binding will not work because the console will not pass it to Vim. You can remap the keys; see the _ @abstr_hyperlink _ section below.



Knowing a little bit about how YCM works internally will prevent confusion. YCM has several completion engines: an identifier-based completer that collects all of the identifiers in the current file and other files you visit (and your tags files) and searches them when you type (identifiers are put into per-filetype groups).

There are also several semantic engines in YCM. There's a libclang-based completer that provides semantic completion for C-family languages. There's a Jedi-based completer for semantic completion for Python. There's also an omnifunc-based completer that uses data from Vim's omnicomplete system to provide semantic completions when no native completer exists for that language in YCM.

There are also other completion engines, like the UltiSnips completer and the filepath completer.

YCM automatically detects which completion engine would be the best in any situation. On occasion, it queries several of them at once, merges the outputs and presents the results to you.

### Client-Server Architecture

YCM has a client-server architecture; the Vim part of YCM is only a thin client that talks to the @abstr_hyperlink that has the vast majority of YCM logic and functionality. The server is started and stopped automatically as you start and stop Vim.

### Completion String Ranking

The subsequence filter removes any completions that do not match the input, but then the sorting system kicks in. It's actually very complicated and uses lots of factors, but suffice it to say that "word boundary" (WB) subsequence character matches are "worth" more than non-WB matches. In effect, this means given an input of "gua", the completion "getUserAccount" would be ranked higher in the list than the "Fooguxa" completion (both of which are subsequence matches). A word-boundary character are all capital characters, characters preceded by an underscore and the first letter character in the completion string.

### General Semantic Completion

  * You can use Ctrl+Space to trigger the completion suggestions anywhere, even without a string prefix. This is useful to see which top-level functions are available for use.



### C-family Semantic Completion

YCM looks for a `.ycm_extra_conf.py` file in the directory of the opened file or in any directory above it in the hierarchy (recursively); when the file is found, it is loaded (only once!) as a Python module. YCM calls a `FlagsForFile` method in that module which should provide it with the information necessary to compile the current file. You can also provide a path to a global `.ycm_extra_conf.py` file, which will be used as a fallback. To prevent the execution of malicious code from a file you didn't write YCM will ask you once per `.ycm_extra_conf.py` if it is safe to load. This can be disabled and you can white-/blacklist files. See the _Options_ section for more details.

This system was designed this way so that the user can perform any arbitrary sequence of operations to produce a list of compilation flags YCM should hand to Clang.

@abstr_hyperlink for details on how this works. You should be able to use it _as a starting point_. **Don't** just copy/paste that file somewhere and expect things to magically work; **your project needs different flags**. Hint: just replace the strings in the `flags` variable with compilation flags necessary for your project. That should be enough for @abstr_number % of projects.

Yes, @abstr_hyperlink is also supported. Again, see the above linked example file. You can get CMake to generate this file for you by adding `set( CMAKE_EXPORT_COMPILE_COMMANDS @abstr_number )` to your project's `CMakeLists.txt` file (if using CMake). If you're not using CMake, you could use something like @abstr_hyperlink to generate the `compile_commands.json` file.

Consider using @abstr_hyperlink to generate the `ycm_extra_conf.py` file.

If Clang encounters errors when compiling the header files that your file includes, then it's probably going to take a long time to get completions. When the completion menu finally appears, it's going to have a large number of unrelated completion strings (type/function names that are not actually members). This is because Clang fails to build a precompiled preamble for your file if there are any errors in the included headers and that preamble is key to getting fast completions.

Call the `:YcmDiags` command to see if any errors or warnings were detected in your file.

### JavaScript Semantic Completion

#### Quick start

@abstr_number . Ensure that you have enabled the Tern completer. See the installation guide for details.

@abstr_number . Create a `.tern-project` file in the root directory of your JavaScript project, by following the @abstr_hyperlink in the @abstr_hyperlink documentation.

@abstr_number . Make sure that Vim's working directory is a descendent of that directory (or that directory itself) when working with JavaScript files.

#### Explanation

JavaScript completion is based on @abstr_hyperlink . This completion engine requires a file named @abstr_hyperlink to exist in the current working directory or a directory which is an ancestor of the current working directory when the tern server is started. YCM starts the Tern server the first time a JavaScript file is edited, so Vim's working directory at that time needs to be a descendent of the directory containing the `.tern-project` file (or that directory itself).

Alternatively, as described in the @abstr_hyperlink , a global `.tern-config` file may be used.

Multiple Tern servers, are not supported. To switch to a different JavaScript project, you can do one of the following:

  * start a new instance of Vim from the new project's directory
  * change Vim's working directory (`:cd /path/to/new/project`) and restart the @abstr_hyperlink (`:YcmRestartServer`)
  * change Vim's working directory (`:cd /path/to/new/project`), open a JavaScript file (or set filetype to JavaScript) and restart the Tern server using YCM completer subcommands `:YcmCompleter StopServer` and `:YcmCompleter StartServer`.



#### Tips and tricks

This section contains some advice for configuring `.tern-project` and working with JavaScript files. The canonical reference for correctly configuring Tern is the @abstr_hyperlink . Any issues, improvements, advice, etc. should be sought from the @abstr_hyperlink project. For example, see the @abstr_hyperlink for the list of plugins which can be enabled in the `plugins` section of the `.tern-project` file.

##### Configuring Tern for node support

The following simple example `.tern-project` file enables nodejs support:

@abstr_code_section 

##### Configuring Tern for requirejs support

The Tern requirejs plugin requires that all included "libraries" are rooted under the same base directory. If that's not the case for your projects, then it is possible to make it work with appropriate symbolic links. For example, create a directory `ext_lib` within your project and populate it with symlinks to your libraries. Then set up the `.tern-project` something like this:

@abstr_code_section 

Then, given the following structure:

@abstr_code_section 

Can be used as follows:

@abstr_code_section 

### Rust Semantic Completion

Completions and GoTo commands within the current crate and its dependencies should work out of the box with no additional configuration (provided that you built YCM with the `--racer-completer` flag; see the Installation section for details). For semantic analysis inclusive of the standard library, you must have a local copy of @abstr_hyperlink . You also need to set the following option so YouCompleteMe can locate it.

@abstr_code_section 

### Python Semantic Completion

Completion and GoTo commands work out of the box with no additional configuration. Those features are provided by the @abstr_hyperlink library which supports a variety of Python versions ( @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number +) as long as it runs in the corresponding Python interpreter. By default YCM runs @abstr_hyperlink with the same Python interpreter used by the @abstr_hyperlink , so if you would like to use a different interpreter, use the following option specifying the Python binary to use. For example, to provide Python @abstr_number completion in your project, set:

@abstr_code_section 

### Semantic Completion for Other Languages

Python, C#, Go, Rust, and TypeScript are supported natively by YouCompleteMe using the @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink engines, respectively. Check the installation section for instructions to enable these features if desired.

YCM will use your `omnifunc` (see `:h omnifunc` in Vim) as a source for semantic completions if it does not have a native semantic completion engine for your file's filetype. Vim comes with okayish omnifuncs for various languages like Ruby, PHP etc. It depends on the language.

You can get stellar omnifuncs for Java and Ruby with @abstr_hyperlink . Just make sure you have the _latest_ Eclim installed and configured (this means Eclim `>= @abstr_number . @abstr_number .*` and Eclipse `>= @abstr_number . @abstr_number .*`).

After installing Eclim remember to create a new Eclipse project within your application by typing `:ProjectCreate <path-to-your-project> -n ruby` (or `-n java`) inside vim and don't forget to have `let g:EclimCompletionMethod = 'omnifunc'` in your vimrc. This will make YCM and Eclim play nice; YCM will use Eclim's omnifuncs as the data source for semantic completions and provide the auto-triggering and subsequence-based matching (and other YCM features) on top of it.

### Writing New Semantic Completers

You have two options here: writing an `omnifunc` for Vim's omnicomplete system that YCM will then use through its omni-completer, or a custom completer for YCM using the @abstr_hyperlink .

Here are the differences between the two approaches:

  * You have to use VimScript to write the omnifunc, but get to use Python to write for the Completer API; this by itself should make you want to use the API.
  * The Completer API is a _much_ more powerful way to integrate with YCM and it provides a wider set of features. For instance, you can make your Completer query your semantic back-end in an asynchronous fashion, thus not blocking Vim's GUI thread while your completion system is processing stuff. This is impossible with VimScript. All of YCM's completers use the Completer API.
  * Performance with the Completer API is better since Python executes faster than VimScript.



If you want to use the `omnifunc` system, see the relevant Vim docs with `:h complete-functions`. For the Completer API, see @abstr_hyperlink .

If you want to upstream your completer into YCM's source, you should use the Completer API.

### Diagnostic Display

YCM will display diagnostic notifications for C-family and C# languages if you compiled YCM with Clang and Omnisharp support, respectively. Since YCM continuously recompiles your file as you type, you'll get notified of errors and warnings in your file as fast as possible.

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



Note that the line highlighting groups only work when gutter signs are turned on.

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

NOTE: The absense of `(FixIt available)` does not strictly imply a fix-it is not available as not all completers are able to provide this indication. For example, the c-sharp completer provides many fix-its but does not add this additional indication.

The `g:ycm_open_loclist_on_ycm_diags` option can be used to prevent the location list from opening, but still have it filled with new diagnostic data. See the _Options_ section for details.

### The `:YcmShowDetailedDiagnostic` command

This command shows the full diagnostic text when the user's cursor is on the line with the diagnostic.

### The `:YcmDebugInfo` command

This will print out various debug information for the current file. Useful to see what compile commands will be used for the file if you're using the semantic completion engine.

### The `:YcmToggleLogs` command

This command automatically opens in windows the stdout and stderr logfiles written by the @abstr_hyperlink . If one or both logfiles are already opened, they are automatically closed. `stderr` or `stdout` can be specified as an argument of this command to only open the corresponding logfile instead of both. If this logfile is already opened, it will be closed. Only for debugging purpose.

### The `:YcmCompleter` command

This command gives access to a number of additional IDE-like features in YCM, for things like semantic GoTo, type information, FixIt and refactoring.

Technically the command invokes completer-specific commands. If the first argument is of the form `ft=...` the completer for that file type will be used (for example `ft=cpp`), else the native completer of the current buffer will be used. Call `YcmCompleter` without further arguments for a list of the commands you can call for the current completer.

See the file type feature summary for an overview of the features available for each file type. See the _YcmCompleter subcommands_ section for more information on the available subcommands and their usage.

## YcmCompleter Subcommands

NOTE: See the docs for the `YcmCompleter` command before tackling this section.

The invoked subcommand is automatically routed to the currently active semantic completer, so `:YcmCompleter GoToDefinition` will invoke the `GoToDefinition` subcommand on the Python semantic completer if the currently active file is a Python one and on the Clang completer if the currently active file is a C/C++/Objective-C one.

You may also want to map the subcommands to something less verbose; for instance, `nnoremap <leader>jd :YcmCompleter GoTo<CR>` maps the `<leader>jd` sequence to the longer subcommand invocation.

### GoTo Commands

These commands are useful for jumping around and exploring code. When moving the cursor, the subcommands add entries to Vim's `jumplist` so you can use `CTRL-O` to jump back to where you where before invoking the command (and `CTRL-I` to jump forward; see `:h jumplist` for details).

#### The `GoToInclude` subcommand

Looks up the current line for a header and jumps to it.

Supported in filetypes: `c, cpp, objc, objcpp`

#### The `GoToDeclaration` subcommand

Looks up the symbol under the cursor and jumps to its declaration.

Supported in filetypes: `c, cpp, objc, objcpp, cs, go, python, rust`

#### The `GoToDefinition` subcommand

Looks up the symbol under the cursor and jumps to its definition.

NOTE: For C-family languages **this only works in certain situations** , namely when the definition of the symbol is in the current translation unit. A translation unit consists of the file you are editing and all the files you are including with `#include` directives (directly or indirectly) in that file.

Supported in filetypes: `c, cpp, objc, objcpp, cs, go, javascript, python, rust, typescript`

#### The `GoTo` subcommand

This command tries to perform the "most sensible" GoTo operation it can. Currently, this means that it tries to look up the symbol under the cursor and jumps to its definition if possible; if the definition is not accessible from the current translation unit, jumps to the symbol's declaration. For C/C++/Objective-C, it first tries to look up the current line for a header and jump to it. For C#, implementations are also considered and preferred.

Supported in filetypes: `c, cpp, objc, objcpp, cs, go, javascript, python, rust`

#### The `GoToImprecise` subcommand

WARNING: This command trades correctness for speed!

Same as the `GoTo` command except that it doesn't recompile the file with libclang before looking up nodes in the AST. This can be very useful when you're editing files that take long to compile but you know that you haven't made any changes since the last parse that would lead to incorrect jumps. When you're just browsing around your codebase, this command can spare you quite a bit of latency.

Supported in filetypes: `c, cpp, objc, objcpp`

#### The `GoToReferences` subcommand

This command attempts to find all of the references within the project to the identifier under the cursor and populates the quickfix list with those locations.

Supported in filetypes: `javascript, python, typescript`

#### The `GoToImplementation` subcommand

Looks up the symbol under the cursor and jumps to its implementation (i.e. non-interface). If there are multiple implementations, instead provides a list of implementations to choose from.

Supported in filetypes: `cs`

#### The `GoToImplementationElseDeclaration` subcommand

Looks up the symbol under the cursor and jumps to its implementation if one, else jump to its declaration. If there are multiple implementations, instead provides a list of implementations to choose from.

Supported in filetypes: `cs`

### Semantic Information Commands

These commands are useful for finding static information about the code, such as the types of variables, viewing declarations and documentation strings.

#### The `GetType` subcommand

Echos the type of the variable or method under the cursor, and where it differs, the derived type.

For example:

```c++ std::string s; @abstr_code_section c++ const char _s = "String"; auto x = &s; // invoking on x or auto returns "auto"; // invoking on s returns "const char *" std::cout << *x; // invoking on x returns "const char *_ => const char **" @abstr_code_section c++ class C { void f(); };

void C::f() {

} @abstr_code_section viml :YcmCompleter RestartServer /usr/bin/python @abstr_number . @abstr_number @abstr_code_section viml call youcompleteme#GetErrorCount() @abstr_code_section viml call youcompleteme#GetWarningCount() @abstr_code_section viml let g:ycm_min_num_of_chars_for_completion = @abstr_number @abstr_code_section viml let g:ycm_min_num_of_chars_for_completion = @abstr_number @abstr_code_section viml let g:ycm_min_num_identifier_candidate_chars = @abstr_number @abstr_code_section viml let g:ycm_auto_trigger = @abstr_number @abstr_code_section viml let g:ycm_filetype_whitelist = { '*': @abstr_number } @abstr_code_section viml let g:ycm_filetype_blacklist = { \ 'tagbar' : @abstr_number , \ 'qf' : @abstr_number , \ 'notes' : @abstr_number , \ 'markdown' : @abstr_number , \ 'unite' : @abstr_number , \ 'text' : @abstr_number , \ 'vimwiki' : @abstr_number , \ 'pandoc' : @abstr_number , \ 'infolog' : @abstr_number , \ 'mail' : @abstr_number } @abstr_code_section viml let g:ycm_filetype_specific_completion_to_disable = { \ 'gitcommit': @abstr_number } @abstr_code_section viml let g:ycm_show_diagnostics_ui = @abstr_number @abstr_code_section viml let g:ycm_error_symbol = '>>' @abstr_code_section viml let g:ycm_warning_symbol = '>>' @abstr_code_section viml let g:ycm_enable_diagnostic_signs = @abstr_number @abstr_code_section viml let g:ycm_enable_diagnostic_highlighting = @abstr_number @abstr_code_section viml let g:ycm_echo_current_diagnostic = @abstr_number @abstr_code_section viml let g:ycm_always_populate_location_list = @abstr_number @abstr_code_section viml let g:ycm_open_loclist_on_ycm_diags = @abstr_number @abstr_code_section viml let g:ycm_allow_changing_updatetime = @abstr_number @abstr_code_section viml let g:ycm_complete_in_comments = @abstr_number @abstr_code_section viml let g:ycm_complete_in_strings = @abstr_number @abstr_code_section viml let g:ycm_collect_identifiers_from_comments_and_strings = @abstr_number @abstr_code_section viml let g:ycm_collect_identifiers_from_tags_files = @abstr_number @abstr_code_section viml let g:ycm_seed_identifiers_with_syntax = @abstr_number @abstr_code_section python

# The ' @abstr_number ' value is of course contingent on Vim @abstr_number . @abstr_number ; in @abstr_number . @abstr_number it would be ' @abstr_number '

FlagsForFile(filename, client_data = {'v:version': @abstr_number }) @abstr_code_section python def FlagsForFile(filename, _*kwargs): @abstr_code_section viml let g:ycm_extra_conf_vim_data = [] @abstr_code_section viml let g:ycm_server_python_interpreter = '' @abstr_code_section viml let g:ycm_server_keep_logfiles = @abstr_number @abstr_code_section viml let g:ycm_server_log_level = 'info' @abstr_code_section viml let g:ycm_auto_start_csharp_server = @abstr_number @abstr_code_section viml let g:ycm_auto_stop_csharp_server = @abstr_number @abstr_code_section viml let g:ycm_csharp_server_port = @abstr_number @abstr_code_section viml let g:ycm_csharp_insert_namespace_expr = '' @abstr_code_section viml let g:ycm_add_preview_to_completeopt = @abstr_number @abstr_code_section viml let g:ycm_autoclose_preview_window_after_completion = @abstr_number @abstr_code_section viml let g:ycm_autoclose_preview_window_after_insertion = @abstr_number @abstr_code_section viml let g:ycm_max_diagnostics_to_display = @abstr_number @abstr_code_section viml let g:ycm_key_list_select_completion = [' ', ''] @abstr_code_section viml let g:ycm_key_list_previous_completion = ['', ''] @abstr_code_section viml let g:ycm_key_invoke_completion = '' @abstr_code_section viml let g:ycm_key_detailed_diagnostics = 'd' @abstr_code_section viml let g:ycm_global_ycm_extra_conf = '' @abstr_code_section viml let g:ycm_confirm_extra_conf = @abstr_number @abstr_code_section viml let g:ycm_extra_conf_globlist = ['~/dev/_','!~/ _'] @abstr_code_section viml let g:ycm_extra_conf_globlist = [] @abstr_code_section viml let g:ycm_filepath_completion_use_working_dir = @abstr_number @abstr_code_section viml let g:ycm_semantic_triggers = { \ 'c' : ['- >', '.'], \ 'objc' : ['->', '.', 're![[_a-zA-Z]+\w_\s', 're!^\s _[^\W\d]\w_ \s', \ 're![.*]\s'], \ 'ocaml' : ['.', '#'], \ 'cpp,objcpp' : ['->', '.', '::'], \ 'perl' : ['->'], \ 'php' : ['->', '::'], \ 'cs,java,javascript,typescript,d,python,perl @abstr_number ,scala,vb,elixir,go' : ['.'], \ 'ruby' : ['.', '::'], \ 'lua' : ['.', ':'], \ 'erlang' : [':'], \ } @abstr_code_section viml let g:ycm_cache_omnifunc = @abstr_number @abstr_code_section viml let g:ycm_use_ultisnips_completer = @abstr_number @abstr_code_section viml let g:ycm_goto_buffer_command = 'same-buffer' @abstr_code_section viml let g:ycm_disable_for_files_larger_than_kb = @abstr_number @abstr_code_section viml let g:ycm_python_binary_path = '/usr/bin/python @abstr_number ' @abstr_code_section ImportError: dynamic module does not define init function (PyInit_ycm_core) @abstr_code_section ImportError: dynamic module does not define init function (initycm_core) @abstr_code_section \-- Found PythonLibs: /usr/lib/libpython @abstr_number . @abstr_number .so (Required is at least version " @abstr_number . @abstr_number ") @abstr_code_section \-- Found PythonLibs: /usr/lib/libpython @abstr_number . @abstr_number .so (found suitable version " @abstr_number . @abstr_number . @abstr_number ", minimum required is " @abstr_number . @abstr_number ") @abstr_code_section -DPYTHON_INCLUDE_DIR=/usr/include/python @abstr_number . @abstr_number -DPYTHON_LIBRARY=/usr/lib/libpython @abstr_number . @abstr_number .so @abstr_code_section /usr/bin/ld: /usr/local/lib/libpython @abstr_number . @abstr_number .a(abstract.o): relocation R_X @abstr_number _ @abstr_number _ @abstr_number against `a local symbol' can not be used when making a shared object; recompile with -fPIC @abstr_code_section undefined symbol: clang_CompileCommands_dispose @abstr_code_section viml g:UltiSnipsExpandTrigger g:UltiSnipsJumpForwardTrigger g:UltiSnipsJumpBackwardTrigger @abstr_code_section YCM_CORES= @abstr_number ./install.py --clang-completer @abstr_code_section viml NeoBundle 'Valloric/YouCompleteMe', { \ 'build' : { \ 'mac' : './install.py', \ 'unix' : './install.py', \ 'windows' : 'install.py', \ 'cygwin' : './install.py' \ } \ } @abstr_code_section viml let g:neobundle#install_process_timeout = @abstr_number @abstr_code_section python python << EOF import os import re path = os.environ['PATH'].split(';')

def contains_msvcr_lib(folder): try: for item in os.listdir(folder): if re.match(r'msvcr\d+.dll', item): return True except: pass return False

path = [folder for folder in path if not contains_msvcr_lib(folder)] os.environ['PATH'] = ';'.join(path) EOF ```

### I hear that YCM only supports Python @abstr_number , is that true?

**No.** Both the Vim client and the @abstr_hyperlink run on Python @abstr_number or @abstr_number . If you work on a Python @abstr_number project, you may need to set `g:ycm_python_binary_path` to the Python interpreter you use for your project to get completions for that version of Python.

## Contributor Code of Conduct

Please note that this project is released with a @abstr_hyperlink . By participating in this project you agree to abide by its terms.

## Contact

If you have questions about the plugin or need help, please use the @abstr_hyperlink mailing list.

If you have bug reports or feature suggestions, please use the @abstr_hyperlink .

The latest version of the plugin is available at @abstr_hyperlink .

The author's homepage is @abstr_hyperlink .

## License

This software is licensed under the @abstr_hyperlink . © @abstr_number - @abstr_number YouCompleteMe contributors

@abstr_hyperlink 
