@abstr_image 

Unified access to the best community driven cheat sheets repositories of the world.

Let's imagine for a moment that there is such a thing as an ideal cheat sheet. What should it look like? What features should it have?

  * **Concise** — It should only contain the things you need, and nothing else.
  * **Fast** — It should be possible to use it instantly.
  * **Comprehensive** — It should contain answers for every possible question.
  * **Universal** — It should be available everywhere, anytime, without any preparations.
  * **Unobtrusive** — It should not distract you from your main task.
  * **Tutoring** — It should help you to learn the subject.
  * **Inconspicuous** — It should be possible to use it completely unnoticed.



Such a thing exists.

@abstr_hyperlink 

## Features

**cheat.sh**

  * Has a simple curl/browser interface.
  * Covers @abstr_number programming languages, several DBMSes, and more than @abstr_number most important UNIX/Linux commands.
  * Provides access to the best community driven cheat sheets repositories in the world, on par with StackOverflow.
  * Available everywhere, no installation needed.
  * Ultrafast, returns answers within @abstr_number ms, as a rule.
  * Has a convenient command line client, `cht.sh`, that is very advantageous and helpful, though not mandatory.
  * Can be used directly from code editors, without opening a browser and not switching your mental context.
  * Supports a special stealth mode where it can be used fully invisibly without ever touching a key and and making sounds.



@abstr_image 

## Contents

  * Features
  * Usage
  * Command line client, cht.sh 
    * Installation
    * Client usage
    * Tab-completion
    * Stealth mode
  * Self-Hosting 
    * Docker
  * Editors integration 
    * Vim
    * Emacs
    * Visual Studio Code
    * Sublime
    * IntelliJ IDEA
  * Special pages
  * Search
  * Programming languages cheat sheets
  * Cheat sheets sources
  * How to contribute 
    * How to edit a cheat sheet
    * How to add a cheat sheet
    * How to add a cheat sheet repository



## Usage

To get a cheat sheet for a UNIX/Linux command from a command line, query the service using `curl` or any other HTTP/HTTPS client specifying the name of the command in the query:

@abstr_code_section As you can see, you can use both HTTPS and HTTP to access the service, and both the long (cheat.sh) and the short (cht.sh) service names.

Here `tar`, `curl`, `rsync`, and `tr` are names of the UNIX/Linux commands you want to get cheat sheets for.

If you don't know the name of the command you need, you can search for it using the `~KEYWORD` notation. For example, to see how you can make `snapshots` of a filesystem/volume/something else: @abstr_code_section 

@abstr_image 

The programming language cheat sheets are located in special namespaces dedicated to them.

@abstr_code_section 

To get the list of available programming language cheat sheets, use the special query `:list`:

@abstr_code_section 

Almost each programming language has a special page named `:learn` that describes the language basics (that's a direct mapping from the _"Learn X in Y"_ project). It could be a good starting point if you've just started learning a language.

If there is no cheat sheet for a programming language query (and it is almost always the case), it is generated on the fly, based on available cheat sheets and answers on StackOverflow. Of course, there is no guarantee that the returned cheat sheet will be a @abstr_number % hit, but it is almost always exactly what you are looking for.

Try these (and your own) queries to get the impression of that, what the answers look like: @abstr_code_section 

If you don't like an answer for your queries, you can pick another one. For that, repeat the query with an additional parameter `/ @abstr_number`, `/ @abstr_number` etc. appended:

@abstr_code_section 

Cheat sheets are formatted as code of the queried programming language (at least we are trying our best to do so) so they can be pasted into a program in this language directly. Text comments, if there are any, are formatted according to the language syntax.

@abstr_code_section 

If you don't need text comments in the answer, you can eliminate them using a special option `?Q`: @abstr_code_section 

And if you don't need syntax highlighting, switch it off using `?T`. You can combine the options together:

@abstr_code_section 

Full list of all options described below and in `/:help`.

Try your own queries. Follow these rules:

@abstr_number . Try to be more specific (`/python/append+file` is better than `/python/file` and `/python/append`). @abstr_number . Ask practical question if possible (yet theoretical question are possible too). @abstr_number . Ask programming language questions only; specify the name of the programming language as the section name. @abstr_number . Separate words with `+` instead of spaces. @abstr_number . Do not use special characters, they are ignored anyway. @abstr_number . If you want to eliminate cheat sheets containing some word, add it to the query with `+-`: `python/multiply+matrices+-numpy`

Read more about the programming languages queries below.

## Command line client, cht.sh

The cheat.sh service has its own command line client (`cht.sh`) that has several useful features compared to querying the service directly with `curl`:

  * Special shell mode with a persistent queries context and readline support.
  * Queries history.
  * Clipboard integration.
  * Tab completion support for shells (bash, fish, zsh).
  * Stealth mode.



### Installation

To install the client:

@abstr_code_section 

or to install it globally (for all users):

@abstr_code_section 

Note: The package "rlwrap" is a required dependency to run in shell mode. Install this using `sudo apt install rlwrap`

### Client usage

Now, you can use `cht.sh` instead of `curl`, and write your queries in more natural way, with spaces instead of `+`:

@abstr_code_section 

It is even more convenient to start the client in a special shell mode: @abstr_code_section 

If all your queries are about the same language, you can change the context and spare repeating the programming language name: @abstr_code_section or even start the client in this context: @abstr_code_section 

If you want to change the context, you can do it with the `cd` command, or if you want do a single query for some other language, just prepend it with `/`:

@abstr_code_section 

If you want to copy the last answer into the clipboard, you can use the `c` (`copy`) command, or `C` (`ccopy`, without comments).

@abstr_code_section 

Type `help` for other internal `cht.sh` commands.

@abstr_code_section 

The `cht.sh` client has its configuration file which is located at `~/.cht.sh/cht.sh.conf` (location of the file can be overriden by the environment variable `CHTSH_CONF`). Use it to specify query options that you would use with each query. For example, to switch syntax highlighting off create the file with the following content:

@abstr_code_section 

Or if you want to use a special syntax highlighting theme:

@abstr_code_section 

(`curl cht.sh/:styles-demo` to see all supported styles).

Other cht.sh configuration parameters:

@abstr_code_section 

### Tab completion

#### Bash Tab completion

To activate tab completion support for `cht.sh`, add the `:bash_completion` script to your `~/.bashrc`:

@abstr_code_section 

#### ZSH Tab completion

To activate tab completion support for `cht.sh`, add the `:zsh` script to the _fpath_ in your `~/.zshrc`:

@abstr_code_section 

### Stealth mode

Being used fully unnoticed is one of the most important property of any cheat sheet.

cheat.sh can be used completely unnoticed too. The cheat.sh client, `cht.sh`, has a special mode, called **stealth mode**. Using that, you don't even need to touch your keyboard to open a cheat sheet.

In this mode, as soon as you select some text with the mouse (and thus adding it into the selection buffer of X Window System or into the clipboard) it's used as a query string for cheat.sh, and the correspondent cheat sheet is automatically shown.

Let's imagine, that you are having an online interview, where your interviewer asks you some questions using a shared document (say Google Docs) and you are supposed to write your coding answers there (it's possible too that you'll type in the questions on your own, just to show to the interviewer that you've heard it right).

When using the stealth mode of `cht.sh`, the only thing you need to do in order to see a cheat sheet for some question, is to select the question using the mouse. If you don't want any text in the answers and the only thing you need is code, use the `Q` option when starting the stealth mode.

@abstr_image 

@abstr_code_section 

Of course, this is just for fun, and you should never cheat in your coding interviews, because you know what happens when you do.

@abstr_image 

### Windows command line client

You can access cheat.sh from Windows command line too.

Use cheat.sh command line client for that: @abstr_hyperlink . It supports:

  * output colorization;
  * command line options;
  * its own configuration file.



You can also use @abstr_hyperlink command-line installer for Windows to get it: @abstr_code_section 

## Self-Hosting

### Docker

Currently the easiest way to get a self-hosted instance running is by using the docker-compose.yml file provided in the extra/docker folder. This pulls down the latest image with baked in cheatsheets and starts the app and a Redis instance to back it, making the service available on port @abstr_number of the local host. This is currently an early implementation and should probably not be used for anything outside of internal/dev/personal use right now.

## Editors integration

You can use _cheat.sh_ directly from the editor ( _Emacs_ , _Sublime_ , _Vim_ , and _Visual Studio Code_ are currently supported; not all features are supported by all plugins though; see below). Instead of opening your browser, googling, browsing Stack Overflow and eventually copying the code snippets you need into the clipboard and later pasting them into the editor, you can achieve the same instantly and without leaving the editor at all!

Here is what it looks like in Vim:

@abstr_number . If you have a question while editing a program, you can just type your question directly in the buffer and press `<leader>KK`. You will get the answer to your question in pager. (with `<leader>KB` you'll get the answer in a separate buffer).

@abstr_number . If you like the answer, you can manually paste it from the buffer or the pager, or if you are lazy you can use `<leader>KP` to paste it below/under your question (or replace you question using `<leader>KR`). If you want the answer without the comments, `<leader>KC` replays the last query toggling them.

If you use some static analysis plugin such as _syntastic_ (for Vim), you can use its warning and error messages as cheat.sh queries: place the cursor on the problem line and press `<leader>KE`: explanation for the warning will be opened in a new buffer.

Features supported by cheat.sh plugins for different editors:

|Feature |Emacs|Sublime|Vim|VSCode|IDEA| |-------------------|-----|-------|---|------|----| |Command queries |✓ |✓ |✓ |✓ |✓ | |Queries from buffer| | |✓ |✓ | | |Toggle comments | | |✓ |✓ |✓ | |Prev/next answer | | |✓ |✓ |✓ | |Multiple answers | |✓ | | |✓ | |Warnings as queries| | |✓ | | | |Queries history | | |✓ |✓ | | |Session id | | |✓ | | | |Configurable server|✓ | |✓ |✓ | |

### Vim

  * @abstr_hyperlink — Vim support



Here is Vim configuration example:

@abstr_code_section 

In this example, several Vim plugins are used:

  * @abstr_hyperlink — Vim plugin manager
  * @abstr_hyperlink — Syntax checking plugin
  * @abstr_hyperlink — Vim support



Syntastic shows warnings and errors (found by code analysis tools: `jshint`, `merlin`, `pylint`, `shellcheckt etc.), and`cheat.sh-vim` shows you explanations for the errors and warnings and answers on programming languages queries written in the editor.

Watch a demo, where the most important features of the cheat.sh Vim plugin are shown ( @abstr_number Min):

@abstr_image 

Or, if you want to scroll and/or pause, the same on YouTube:

@abstr_hyperlink 

### Emacs

  * @abstr_hyperlink — Emacs support (available also at cheat.sh/:emacs)
  * cheat.sh/:emacs-ivy — Emacs support for ivy users



@abstr_hyperlink 

### Visual Studio Code

  * @abstr_hyperlink 
  * Install it from @abstr_hyperlink 



Usage: 

@abstr_number . Hit `⌘ Command` \+ `⇧ Shift` \+ `p` @abstr_number . Run `Snippet: Find`. @abstr_number . Type your query and hit enter.

@abstr_hyperlink 

_(GIF courtesy: Matthias Endler, @mre)_

### Sublime

  * @abstr_hyperlink 



Usage:

@abstr_number . Write your query string. @abstr_number . Select the query string. @abstr_number . Press `Cmd` \+ `⇧ Shift` \+ `B` to replace the selected query string by the answer generated from `cht.sh`.

@abstr_hyperlink 

_(GIF courtesy: Gaurav Kukreja, @gauravk-in)_

### IntelliJ IDEA

  * @abstr_hyperlink 
  * Install from @abstr_hyperlink 



Usage: 

@abstr_number . Write query string @abstr_number . Select the query string @abstr_number . Press keyboard shortcut `Alt` \+ `C` , `S` to replace the selected query string by the answer

@abstr_hyperlink 

_(GIF courtesy: Szymon Przebierowski, @szymonprz)_

## Special pages

There are several special pages that are not cheat sheets. Their names start with colon and have special meaning.

Getting started:

@abstr_code_section 

Command line client `cht.sh` and shells support: @abstr_code_section 

Editors support:

@abstr_code_section 

Other pages:

@abstr_code_section 

## Search

To search for a keyword, use the query:

@abstr_code_section 

In this case search is not recursive — it is conducted only in a page of the specified level. For example:

@abstr_code_section 

For a recursive search in all cheat sheets, use double slash:

@abstr_code_section 

You can use special search options after the closing slash:

@abstr_code_section 

List of search options:

@abstr_code_section 

## Programming languages cheat sheets

Cheat sheets related to programming languages are organized in namespaces (subdirectories), that are named according to the programming language.

For each supported programming language there are several special cheat sheets: its own sheet, `hello`, `:list` and `:learn`. Say for lua it will look like:

@abstr_code_section 

Some languages has the one-liners-cheat sheet, `@abstr_number line`:

@abstr_code_section * `hello` describes how you can start with the language — install it if needed, build and run its programs, and it shows the "Hello world" program written in the language; * `:list` shows all topics related to the language * `:learn` shows a learn-x-in-minutes language cheat sheet perfect for getting started with the language. * `@abstr_number line` is a collection of one-liners in this language * `weirdness` is a collection of examples of weird things in this language

@abstr_image 

At the moment, cheat.sh covers the @abstr_number following programming languages (alphabetically sorted):

|Prefix |Language |Basics|One-liners|Weirdness|StackOverflow| |-----------|----------|------|----------|---------|-------------| |`arduino/` |Arduino | | | |✓ | |`assembly/`|Assembly | | | |✓ | |`awk/` |AWK |✓ | | |✓ | |`bash/` |Bash |✓ | | |✓ | |`basic/` |BASIC | | | |✓ | |`bf/` |Brainfuck |✓ | | |✓ | |`c/` |C |✓ | | |✓ | |`chapel/` |Chapel |✓ | | |✓ | |`clean/` |Clean | | | |✓ | |`clojure/` |Clojure |✓ | | |✓ | |`coffee/` |CoffeeScript|✓ | | |✓ | |`cpp/` |C++ |✓ | | |✓ | |`csharp/` |C# |✓ | | |✓ | |`d/` |D |✓ | | |✓ | |`dart/` |Dart |✓ | | |✓ | |`delphi/` |Dephi | | | |✓ | |`dylan/` |Dylan |✓ | | |✓ | |`eiffel/` |Eiffel | | | |✓ | |`elixir/` |Elixir |✓ | | |✓ | |`elisp/` |ELisp |✓ | | |✓ | |`elm/` |Elm |✓ | | |✓ | |`erlang/` |Erlang |✓ | | |✓ | |`factor/` |Factor |✓ | | |✓ | |`fortran/` |Fortran |✓ | | |✓ | |`forth/` |Forth |✓ | | |✓ | |`fsharp/` |F# |✓ | | |✓ | |`go/` |Go |✓ | | |✓ | |`groovy/` |Groovy |✓ | | |✓ | |`haskell/` |Haskell |✓ | | |✓ | |`java/` |Java |✓ | | |✓ | |`js/` |JavaScript|✓ |✓ |✓ |✓ | |`julia/` |Julia |✓ | | |✓ | |`kotlin/` |Kotlin |✓ | | |✓ | |`lisp/` |Lisp |✓ | | |✓ | |`lua/` |Lua |✓ | | |✓ | |`matlab/` |MATLAB |✓ | | |✓ | |`ocaml/` |OCaml |✓ | | |✓ | |`octave/` |Octave |✓ | | |✓ | |`perl/` |Perl |✓ |✓ | |✓ | |`perl @abstr_number /` |Perl @abstr_number |✓ |✓ | |✓ | |`php/` |PHP |✓ | | |✓ | |`pike/` |Pike | | | |✓ | |`python/` |Python |✓ |✓ | |✓ | |`python @abstr_number /` |Python @abstr_number |✓ | | |✓ | |`r/` |R |✓ | | |✓ | |`racket/` |Racket |✓ | | |✓ | |`ruby/` |Ruby |✓ | | |✓ | |`rust/` |Rust |✓ | | |✓ | |`scala/` |Scala |✓ | | |✓ | |`scheme/` |Scheme |✓ | | |✓ | |`solidity/`|Solidity |✓ | | |✓ | |`swift/` |Swift |✓ | | |✓ | |`tcsh/` |Tcsh |✓ | | |✓ | |`tcl/` |Tcl |✓ | | |✓ | |`objective-c/`|Objective-C|✓ | | |✓ | |`vb/` |VisualBasic|✓ | | |✓ | |`vbnet/` |VB.Net |✓ | | |✓ |

## Cheat sheets sources

Instead of creating yet another mediocre cheat sheet repository, we are concentrating our efforts on creation of a unified mechanism to access selected existing well developed and good maintained cheat sheet repositories covering topics of our interest: programming and operating systems usage.

_cheat.sh_ uses selected community driven cheat sheet repositories and information sources, maintained by thousands of users, developers and authors all over the world (in the _Users_ column number of contributors/number of stars is shown):

|Cheat sheets |Repository | Users | Creation Date | |-----------------------|------------------------------------------------------|------------|---------------| |UNIX/Linux, programming| @abstr_hyperlink | @abstr_number / @abstr_number | May @abstr_number , @abstr_number | |UNIX/Linux commands | @abstr_hyperlink | @abstr_number / @abstr_number | Dec @abstr_number , @abstr_number | |UNIX/Linux commands | @abstr_hyperlink | @abstr_number / @abstr_number |Jul @abstr_number , @abstr_number | |Programming languages | @abstr_hyperlink | @abstr_number / @abstr_number |Jun @abstr_number , @abstr_number | |Go | @abstr_hyperlink | @abstr_number / @abstr_number |Feb @abstr_number , @abstr_number | |Perl | @abstr_hyperlink | @abstr_number / @abstr_number |Nov @abstr_number , @abstr_number | |Programming languages | @abstr_hyperlink | @abstr_number M |Sep @abstr_number , @abstr_number |

Pie diagram reflecting cheat sheets sources distribution (by number of cheat sheets on cheat.sh originating from a repository):

@abstr_image 

## How to contribute

### How to edit a cheat sheet

If you want to edit a cheat.sh cheat sheet, you should edit it in the upstream repository. You will find the name of the source repository in a browser when you open a cheat sheet. There are two github buttons at the bottom of the page: the second one is the button of the repository, which belongs the current cheat sheet.

You can edit the cheat sheet directly in your browser (you need a github account for it). There is an edit button in the top right corner. If you click on it, an editor will be open. There you will change the cheat sheet (under the hood: the upstrem repository is forked, your changes are committed in the forked repository, a pull request to the upstream repository owner is sent).

@abstr_image 

### How to add a cheat sheet

If you want to add a cheat sheet, you have one of the following ways:

  * Add it to one of the external cheat sheets repositories; you should decide on your own what is the best repository for your cheat sheet;
  * Add it to the local cheat.sh repository ( @abstr_hyperlink ) on github (fork, commit, pull request);
  * Post it on cheat.sh using curl or a web browser ( @abstr_hyperlink ).



If you want to change an existing cheat sheet, you have to find the original repository (when you open a cheat sheet in a browser, you see the repository's github button in the bottom of the cheat sheet), the cheat sheet is coming from, and change it there. After some time the changes will be synchronized on cheat.sh.

### How to add a cheat sheet repository

If you want to add a cheat sheet repository to cheat.sh, please open an issue:

  * @abstr_hyperlink 



Please specify the name of the repository, and give its short description.
