## ripgrep (rg)

`ripgrep` is a command line search tool that combines the usability of The Silver Searcher (an `ack` clone) with the raw speed of GNU grep. `ripgrep` has first class support on Windows, Mac and Linux, with binary downloads available for @abstr_hyperlink .

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Dual-licensed under MIT or the @abstr_hyperlink .

### Screenshot of search results

@abstr_hyperlink 

### Quick examples comparing tools

This example searches the entire Linux kernel source tree (after running `make defconfig && make -j @abstr_number`) for `[A-Z]+_SUSPEND`, where all matches must be words. Timings were collected on a system with an Intel i @abstr_number - @abstr_number K @abstr_number . @abstr_number GHz, and ripgrep was compiled using the `compile` script in this repo.

Please remember that a single benchmark is never enough! See my @abstr_hyperlink for a very detailed comparison with more benchmarks and analysis.

| Tool | Command | Line count | Time | | ---- | ------- | ---------- | ---- | | ripgrep (Unicode) | `rg -n -w '[A-Z]+_SUSPEND'` | @abstr_number | _* @abstr_number . @abstr_number s_ * | | @abstr_hyperlink | `ag -w '[A-Z]+_SUSPEND'` | @abstr_number | @abstr_number . @abstr_number s | | @abstr_hyperlink | `LC_ALL=C git grep -E -n -w '[A-Z]+_SUSPEND'` | @abstr_number | @abstr_number . @abstr_number s | | @abstr_hyperlink | `LC_ALL=en_US.UTF- @abstr_number git grep -E -n -w '[A-Z]+_SUSPEND'` | @abstr_number | @abstr_number . @abstr_number s | | @abstr_hyperlink | `sift --git -n -w '[A-Z]+_SUSPEND'` | @abstr_number | @abstr_number . @abstr_number s | | @abstr_hyperlink | `pt -w -e '[A-Z]+_SUSPEND'` | @abstr_number | @abstr_number . @abstr_number s | | @abstr_hyperlink | `ack -w '[A-Z]+_SUSPEND'` | @abstr_number | @abstr_number . @abstr_number s |

(Yes, `ack` @abstr_hyperlink a @abstr_hyperlink .)

Here's another benchmark that disregards gitignore files and searches with a whitelist instead. The corpus is the same as in the previous benchmark, and the flags passed to each command ensures that they are doing equivalent work:

| Tool | Command | Line count | Time | | ---- | ------- | ---------- | ---- | | ripgrep | `rg -L -u -tc -n -w '[A-Z]+_SUSPEND'` | @abstr_number | _* @abstr_number . @abstr_number s_ * | | @abstr_hyperlink | `ucg --type=cc -w '[A-Z]+_SUSPEND'` | @abstr_number | @abstr_number . @abstr_number s | | @abstr_hyperlink | `egrep -R -n --include='*.c' --include='*.h' -w '[A-Z]+_SUSPEND'` | @abstr_number | @abstr_number . @abstr_number s |

(`ucg` @abstr_hyperlink .)

And finally, a straight up comparison between ripgrep and GNU grep on a single large file (~ @abstr_number . @abstr_number GB, @abstr_hyperlink ):

| Tool | Command | Line count | Time | | ---- | ------- | ---------- | ---- | | ripgrep | `rg -w 'Sherlock [A-Z]\w+'` | @abstr_number | _* @abstr_number . @abstr_number s_ * | | @abstr_hyperlink | `LC_ALL=C egrep -w 'Sherlock [A-Z]\w+'` | @abstr_number | @abstr_number . @abstr_number s |

In the above benchmark, passing the `-n` flag (for showing line numbers) increases the times to `@abstr_number . @abstr_number s` for ripgrep and `@abstr_number . @abstr_number s` for GNU grep.

### Why should I use `ripgrep`?

  * It can replace both The Silver Searcher and GNU grep because it is faster than both. (N.B. It is not, strictly speaking, a "drop-in" replacement for both, but the feature sets are far more similar than different.)
  * Like The Silver Searcher, `ripgrep` defaults to recursive directory search and won't search files ignored by your `.gitignore` files. It also ignores hidden and binary files by default. `ripgrep` also implements full support for `.gitignore`, where as there are many bugs related to that functionality in The Silver Searcher.
  * `ripgrep` can search specific types of files. For example, `rg -tpy foo` limits your search to Python files and `rg -Tjs foo` excludes Javascript files from your search. `ripgrep` can be taught about new file types with custom matching rules.
  * `ripgrep` supports many features found in `grep`, such as showing the context of search results, searching multiple patterns, highlighting matches with color and full Unicode support. Unlike GNU grep, `ripgrep` stays fast while supporting Unicode (which is always on).



In other words, use `ripgrep` if you like speed, sane defaults, fewer bugs and Unicode.

### Is it really faster than everything else?

Yes. A large number of benchmarks with detailed analysis for each is @abstr_hyperlink .

Summarizing, `ripgrep` is fast because:

  * It is built on top of @abstr_hyperlink . Rust's regex engine uses finite automata, SIMD and aggressive literal optimizations to make searching very fast.
  * Rust's regex library maintains performance with full Unicode support by building UTF- @abstr_number decoding directly into its deterministic finite automaton engine.
  * It supports searching with either memory maps or by searching incrementally with an intermediate buffer. The former is better for single files and the latter is better for large directories. `ripgrep` chooses the best searching strategy for you automatically.
  * Applies your ignore patterns in `.gitignore` files using a @abstr_hyperlink . That means a single file path can be matched against multiple glob patterns simultaneously.
  * It uses a lock-free parallel recursive directory iterator, courtesy of @abstr_hyperlink and @abstr_hyperlink .



### Installation

The binary name for `ripgrep` is `rg`.

@abstr_hyperlink Linux binaries are static executables. Windows binaries are available either as built with MinGW (GNU) or with Microsoft Visual C++ (MSVC). When possible, prefer MSVC over GNU, but you'll need to have the @abstr_hyperlink installed.

If you're a **Mac OS X Homebrew** user, then you can install ripgrep either from homebrew-core, (compiled with rust stable, no SIMD):

@abstr_code_section 

or you can install a binary compiled with rust nightly (including SIMD and all optimizations) by utilizing a custom tap:

@abstr_code_section 

If you're an **Arch Linux** user, then you can install `ripgrep` from the official repos:

@abstr_code_section 

If you're a **Gentoo** user, you can install `ripgrep` from the @abstr_hyperlink :

@abstr_code_section 

If you're a **Fedora @abstr_number +** user, you can install `ripgrep` from @abstr_hyperlink :

@abstr_code_section 

If you're a _*RHEL/CentOS @abstr_number *_ user, you can install `ripgrep` from @abstr_hyperlink :

@abstr_code_section 

If you're a **Nix** user, you can install `ripgrep` from @abstr_hyperlink :

@abstr_code_section 

If you're a **Rust programmer** , `ripgrep` can be installed with `cargo`:

@abstr_code_section 

`ripgrep` isn't currently in any other package repositories. @abstr_hyperlink .

### Whirlwind tour

The command line usage of `ripgrep` doesn't differ much from other tools that perform a similar function, so you probably already know how to use `ripgrep`. The full details can be found in `rg --help`, but let's go on a whirlwind tour.

`ripgrep` detects when its printing to a terminal, and will automatically colorize your output and show line numbers, just like The Silver Searcher. Coloring works on Windows too! Colors can be controlled more granularly with the `--color` flag.

One last thing before we get started: `ripgrep` assumes UTF- @abstr_number _everywhere_. It can still search files that are invalid UTF- @abstr_number (like, say, latin- @abstr_number ), but it will simply not work on UTF- @abstr_number encoded files or other more exotic encodings. @abstr_hyperlink 

To recursively search the current directory, while respecting all `.gitignore` files, ignore hidden files and directories and skip binary files:

@abstr_code_section 

The above command also respects all `.ignore` files, including in parent directories. `.ignore` files can be used when `.gitignore` files are insufficient. In all cases, `.ignore` patterns take precedence over `.gitignore`.

To ignore all ignore files, use `-u`. To additionally search hidden files and directories, use `-uu`. To additionally search binary files, use `-uuu`. (In other words, "search everything, dammit!") In particular, `rg -uuu` is similar to `grep -a -r`.

@abstr_code_section 

(Tip: If your ignore files aren't being adhered to like you expect, run your search with the `--debug` flag.)

Make the search case insensitive with `-i`, invert the search with `-v` or show the @abstr_number lines before and after every search result with `-C @abstr_number`.

Force all matches to be surrounded by word boundaries with `-w`.

Search and replace (find first and last names and swap them):

@abstr_code_section 

Named groups are supported:

@abstr_code_section 

Up the ante with full Unicode support, by matching any uppercase Unicode letter followed by any sequence of lowercase Unicode letters (good luck doing this with other search tools!):

@abstr_code_section 

Search only files matching a particular glob:

@abstr_code_section 

Or exclude files matching a particular glob:

@abstr_code_section 

Search only HTML and CSS files:

@abstr_code_section 

Search everything except for Javascript files:

@abstr_code_section 

To see a list of types supported, run `rg --type-list`. To add a new type, use `--type-add`, which must be accompanied by a pattern for searching (`rg` won't persist your type settings):

@abstr_code_section 

The type `foo` will now match any file ending with the `.foo` or `.foobar` extensions.

### Regex syntax

The syntax supported is @abstr_hyperlink .

### Building

`ripgrep` is written in Rust, so you'll need to grab a @abstr_hyperlink in order to compile it. `ripgrep` compiles with Rust @abstr_number . @abstr_number (stable) or newer. Building is easy:

@abstr_code_section 

If you have a Rust nightly compiler, then you can enable optional SIMD acceleration like so:

@abstr_code_section 

If your machine doesn't support AVX instructions, then simply remove `avx-accel` from the features list. Similarly for SIMD.

### Running tests

`ripgrep` is relatively well tested, including both unit tests and integration tests. To run the full test suite, use:

@abstr_code_section 

from the repository root.
