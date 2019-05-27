# SwiftLint

A tool to enforce Swift style and conventions, loosely based on @abstr_hyperlink .

SwiftLint hooks into @abstr_hyperlink and @abstr_hyperlink to use the @abstr_hyperlink representation of your source files for more accurate results.

@abstr_hyperlink @abstr_hyperlink 

@abstr_image 

This project adheres to the @abstr_hyperlink . By participating, you are expected to uphold this code. Please report unacceptable behavior to @abstr_hyperlink .

> Language Switch: @abstr_hyperlink , @abstr_hyperlink .

## Installation

### Using @abstr_hyperlink :

@abstr_code_section 

### Using @abstr_hyperlink :

Simply add the following line to your Podfile:

@abstr_code_section 

This will download the SwiftLint binaries and dependencies in `Pods/` during your next `pod install` execution and will allow you to invoke it via `${PODS_ROOT}/SwiftLint/swiftlint` in your Script Build Phases.

This is the recommended way to install a specific version of SwiftLint since it supports installing a pinned version rather than simply the latest (which is the case with Homebrew).

Note that this will add the SwiftLint binaries, its dependencies' binaries and the Swift binary library distribution to the `Pods/` directory, so checking in this directory to SCM such as git is discouraged.

### Using @abstr_hyperlink :

@abstr_code_section 

### Using a pre-built package:

You can also install SwiftLint by downloading `SwiftLint.pkg` from the @abstr_hyperlink and running it.

### Compiling from source:

You can also build from source by cloning this project and running `git submodule update --init --recursive; make install` (Xcode @abstr_number . @abstr_number or later).

### Known Installation Issues On MacOS Before @abstr_number . @abstr_number . @abstr_number

Starting with @abstr_hyperlink , if you get an error similar to `dyld: Symbol not found: _$s @abstr_number SubSequenceSlTl` when running SwiftLint, you'll need to install the @abstr_hyperlink .

Alternatively, you can:

  * Update to macOS @abstr_number . @abstr_number . @abstr_number or later
  * Install Xcode @abstr_number . @abstr_number or later at `/Applications/Xcode.app`
  * Rebuild SwiftLint from source using Xcode @abstr_number . @abstr_number or later



## Usage

### Presentation

To get a high-level overview of recommended ways to integrate SwiftLint into your project, we encourage you to watch this presentation or read the transcript:

@abstr_hyperlink 

### Xcode

Integrate SwiftLint into an Xcode scheme to get warnings and errors displayed in the IDE. Just add a new "Run Script Phase" with:

@abstr_code_section 

@abstr_image 

Alternatively, if you've installed SwiftLint via CocoaPods the script should look like this:

@abstr_code_section 

#### Format on Save Xcode Plugin

To run `swiftlint autocorrect` on save in Xcode, install the @abstr_hyperlink plugin from Alcatraz.

⚠️This plugin will not work with Xcode @abstr_number or later without disabling SIP. This is not recommended.

### AppCode

To integrate SwiftLint with AppCode, install @abstr_hyperlink and configure SwiftLint's installed path in the plugin's preferences. The `autocorrect` action is available via `⌥⏎`.

### Atom

To integrate SwiftLint with @abstr_hyperlink , install the @abstr_hyperlink package from APM.

### fastlane

You can use the @abstr_hyperlink to run SwiftLint as part of your fastlane process.

@abstr_code_section 

### Command Line

@abstr_code_section 

Run `swiftlint` in the directory containing the Swift files to lint. Directories will be searched recursively.

To specify a list of files when using `lint`, `autocorrect` or `analyze` (like the list of files modified by Xcode specified by the @abstr_hyperlink Xcode plugin, or modified files in the working tree based on `git ls-files -m`), you can do so by passing the option `--use-script-input-files` and setting the following instance variables: `SCRIPT_INPUT_FILE_COUNT` and `SCRIPT_INPUT_FILE_ @abstr_number`, `SCRIPT_INPUT_FILE_ @abstr_number`...`SCRIPT_INPUT_FILE_{SCRIPT_INPUT_FILE_COUNT}`.

These are same environment variables set for input files to @abstr_hyperlink .

### Working With Multiple Swift Versions

SwiftLint hooks into SourceKit so it continues working even as Swift evolves!

This also keeps SwiftLint lean, as it doesn't need to ship with a full Swift compiler, it just communicates with the official one you already have installed on your machine.

You should always run SwiftLint with the same toolchain you use to compile your code.

You may want to override SwiftLint's default Swift toolchain if you have multiple toolchains or Xcodes installed.

Here's the order in which SwiftLint determines which Swift toolchain to use:

  * `$XCODE_DEFAULT_TOOLCHAIN_OVERRIDE`
  * `$TOOLCHAIN_DIR` or `$TOOLCHAINS`
  * `xcrun -find swift`
  * `/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain`
  * `/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain`
  * `~/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain`
  * `~/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain`



`sourcekitd.framework` is expected to be found in the `usr/lib/` subdirectory of the value passed in the paths above.

You may also set the `TOOLCHAINS` environment variable to the reverse-DNS notation that identifies a Swift toolchain version:

@abstr_code_section 

On Linux, SourceKit is expected to be located in `/usr/lib/libsourcekitdInProc.so` or specified by the `LINUX_SOURCEKIT_LIB_PATH` environment variable.

### Swift Version Support

Here's a reference of which SwiftLint version to use for a given Swift version.

| Swift version | Last supported SwiftLint release | |:----------------|:---------------------------------| | Swift @abstr_number .x | SwiftLint @abstr_number . @abstr_number . @abstr_number | | Swift @abstr_number .x | SwiftLint @abstr_number . @abstr_number . @abstr_number | | Swift @abstr_number .x | SwiftLint @abstr_number . @abstr_number . @abstr_number | | Swift @abstr_number . @abstr_number - @abstr_number . @abstr_number .x | SwiftLint @abstr_number . @abstr_number . @abstr_number | | Swift @abstr_number . @abstr_number .x- @abstr_number . @abstr_number | Latest |

## Rules

Over @abstr_number rules are included in SwiftLint and the Swift community (that's you!) continues to contribute more over time. Pull requests are encouraged.

You can find an updated list of rules and more information about them in Rules.md.

You can also check Source/SwiftLintFramework/Rules directory to see their implementation.

### Opt-In Rules

`opt_in_rules` are disabled by default (i.e., you have to explicitly enable them in your configuration file).

Guidelines on when to mark a rule as opt-in:

  * A rule that can have many false positives (e.g. `empty_count`)
  * A rule that is too slow
  * A rule that is not general consensus or is only useful in some cases (e.g. `force_unwrapping`)



### Disable rules in code

Rules can be disabled with a comment inside a source file with the following format:

`// swiftlint:disable <rule @abstr_number > [<rule @abstr_number > <rule @abstr_number >...]`

The rules will be disabled until the end of the file or until the linter sees a matching enable comment:

`// swiftlint:enable <rule @abstr_number > [<rule @abstr_number > <rule @abstr_number >...]`

For example:

@abstr_code_section 

Including the `all` keyword will disable all rules until the linter sees a matching enable comment:

`// swiftlint:disable all` `// swiftlint:enable all`

For example:

@abstr_code_section 

It's also possible to modify a `disable` or `enable` command by appending `:previous`, `:this` or `:next` for only applying the command to the previous, this (current) or next line respectively.

For example:

@abstr_code_section 

Run `swiftlint rules` to print a list of all available rules and their identifiers.

### Configuration

Configure SwiftLint by adding a `.swiftlint.yml` file from the directory you'll run SwiftLint from. The following parameters can be configured:

Rule inclusion:

  * `disabled_rules`: Disable rules from the default enabled set.
  * `opt_in_rules`: Enable rules not from the default set.
  * `whitelist_rules`: Acts as a whitelist, only the rules specified in this list will be enabled. Can not be specified alongside `disabled_rules` or `opt_in_rules`.
  * `analyzer_rules`: This is an entirely separate list of rules that are only run by the `analyze` command. All analyzer rules are opt-in, so this is the only configurable rule list (there is no disabled/whitelist equivalent).

@abstr_code_section 




You can also use environment variables in your configuration file, by using `${SOME_VARIABLE}` in a string.

#### Defining Custom Rules

You can define custom regex-based rules in your configuration file using the following syntax:

@abstr_code_section 

This is what the output would look like:

@abstr_image 

You can filter the matches by providing one or more `match_kinds`, which will reject matches that include syntax kinds that are not present in this list. Here are all the possible syntax kinds:

  * argument
  * attribute.builtin
  * attribute.id
  * buildconfig.id
  * buildconfig.keyword
  * comment
  * comment.mark
  * comment.url
  * doccomment
  * doccomment.field
  * identifier
  * keyword
  * number
  * objectliteral
  * parameter
  * placeholder
  * string
  * string_interpolation_anchor
  * typeidentifier



If using custom rules alongside a whitelist, make sure to add `custom_rules` as an item under `whitelist_rules`.

#### Nested Configurations

SwiftLint supports nesting configuration files for more granular control over the linting process.

  * Include additional `.swiftlint.yml` files where necessary in your directory structure.
  * Each file will be linted using the configuration file that is in its directory or at the deepest level of its parent directories. Otherwise the root configuration will be used.
  * `excluded` and `included` are ignored for nested configurations.



### Auto-correct

SwiftLint can automatically correct certain violations. Files on disk are overwritten with a corrected version.

Please make sure to have backups of these files before running `swiftlint autocorrect`, otherwise important data may be lost.

Standard linting is disabled while correcting because of the high likelihood of violations (or their offsets) being incorrect after modifying a file while applying corrections.

### Analyze (experimental)

The _experimental_ `swiftlint analyze` command can lint Swift files using the full type-checked AST. The compiler log path containing the clean `swiftc` build command invocation (incremental builds will fail) must be passed to `analyze` via the `--compiler-log-path` flag. e.g. `--compiler-log-path /path/to/xcodebuild.log`

This can be obtained by running `xcodebuild -workspace {WORKSPACE}.xcworkspace -scheme {SCHEME} > xcodebuild.log` with a clean `DerivedData` folder.

This command and related code in SwiftLint is subject to substantial changes at any time while this feature is marked as experimental. Analyzer rules also tend to be considerably slower than lint rules.

## License

MIT licensed.

## About

@abstr_image 

SwiftLint is maintained and funded by Realm Inc. The names and logos for Realm are trademarks of Realm Inc.

We :heart: open source software! See @abstr_hyperlink , read @abstr_hyperlink , or say hi on twitter ( @abstr_hyperlink ).
