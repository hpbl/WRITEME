# SwiftGen

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

SwiftGen is a tool to auto-generate Swift code for resources of your projects, to make them type-safe to use.

@abstr_image | 

  * Installation 
  * Usage 
  * Choosing your template 
  * Additional documentation 

Then generate constants for: 
  * Assets Catalogs 
  * Colors 
  * Core Data 
  * Fonts 
  * Interface Builder files 
  * JSON and YAML files 
  * Plists 
  * Localizable strings 

  
---|---  
  
There are multiple benefits in using this:

  * Avoid any typo you could have when using a String
  * Free auto-completion
  * Avoid the risk to use an non-existing asset name
  * All this will be ensured by the compiler.



Also, it's fully customizable thanks to Stencil templates, so even if it comes with predefined templates, you can make your own to generate whatever code fits your needs and your guidelines!

## Installation

There are multiple possibilities to install SwiftGen on your machine or in your project, depending on your preferences and needs:

**Download the ZIP** for the latest release

  * @abstr_hyperlink 
  * Download the `swiftgen-x.y.z.zip` file associated with that release
  * Extract the content of the zip archive in your project directory



We recommend that you **unarchive the ZIP inside your project directory** and **commit its content** to git. This way, **all coworkers will use the same version of SwiftGen for this project**.

If you unarchived the ZIP file in a folder e.g. called `swiftgen` at the root of your project directory, you can then invoke SwiftGen in your Script Build Phase using:

@abstr_code_section 

* * *

Via **CocoaPods**

If you're using CocoaPods, simply add `pod 'SwiftGen', '~> @abstr_number . @abstr_number '` to your `Podfile`.

Then execute `pod install --repo-update` (or `pod update SwiftGen` if you want to update an existing SwiftGen installation) to download and install the `SwiftGen` binaries and dependencies in `Pods/SwiftGen/bin/swiftgen` next to your project.

Given that you can specify an exact version for `SwiftGen` in your `Podfile`, this allows you to ensure **all coworkers will use the same version of SwiftGen for this project**.

You can then invoke SwiftGen in your Script Build Phase using:

@abstr_code_section 

> Similarly, be sure to use `Pods/SwiftGen/bin/swiftgen` instead of just `swiftgen` where we mention commands with `swiftgen` in the rest of the documentation.

_Note: SwiftGen isn't really a pod, as it's not a library your code will depend on at runtime; so the installation via CocoaPods is just a trick that installs the SwiftGen binaries in the Pods/ folder, but you won't see any swift files in the Pods/SwiftGen group in your Xcode's Pods.xcodeproj. That's normal: the SwiftGen binary is still present in that folder in the Finder._

* * *

Via **Homebrew** _(system-wide installation)_

To install SwiftGen via @abstr_hyperlink , simply use:

@abstr_code_section 

This will install SwiftGen **system-wide**. The same version of SwiftGen will be used for all projects on that machine, and you should make sure all your coworkers have the same version of SwiftGen installed on their machine too.

You can then invoke `swiftgen` directly in your Script Build Phase (as it will be in your `$PATH` already):

@abstr_code_section 

_Note: SwiftGen needs Xcode @abstr_number . @abstr_number to build, so installing via Homebrew requires you to have Xcode @abstr_number . @abstr_number installed (which in turn requires macOS @abstr_number . @abstr_number ). If you use an earlier version of macOS, you'll have to use one of the other installation methods instead._

* * *

Via **Mint** _(system-wide installation)_

> ❗️SwiftGen @abstr_number . @abstr_number or higher only.

To install SwiftGen via @abstr_hyperlink , simply use:

##  @abstr_code_section 

**Compile from source** _(only recommended if you need features from master or want to test a PR)_

This solution is when you want to build and install the latest version from `master` and have access to features which might not have been released yet.

  * If you have `homebrew` installed, you can use the following command to build and install the latest commit:

@abstr_code_section 

  * Alternatively, you can clone the repository and use `rake cli:install` to build the tool and install it from any branch, which could be useful to test SwiftGen in a fork or a Pull Request branch.




Some Ruby tools are used in the build process, and the system Ruby works well if you are running a recent macOS. However, if you are using `rbenv` you can run `rbenv install` to make sure you have a matching version of Ruby installed. 

Then install the Ruby Gems:

@abstr_code_section 

You can now install to the default locations (no parameter) or to custom locations:

@abstr_code_section 

You can then invoke SwiftGen using the path to the binary where you installed it:

@abstr_code_section 

Or add the path to the `bin` folder to your `$PATH` and invoke `swiftgen` directly.

* * *

## Usage

> ❗️ If you're migrating from older SwiftGen versions, don't forget to read the Migration Guide.

SwiftGen is provided as a single command-line tool which uses a configuration file to run various actions (subcommands).

Each action described in the configuration file (`strings`, `fonts`, `ib`, …) typically corresponds to a type of input resources to parse (strings files, IB files, Font files, JSON files, …), allowing you to generate constants for each types of those input files.

To use SwiftGen, simply create a `swiftgen.yml` YAML file to list all the subcommands to invoke, and for each subcommand, the list of arguments to pass to it. For example:

@abstr_code_section 

Then you just have to invoke `swiftgen config run`, or even just `swiftgen` for short, and it will execute what's described in the configuration file

To learn more about the configuration file — its more detailed syntax and possibilities, how to pass custom parameters, using `swiftgen config lint` to validate it, how to use alternate config files, and other tips — see the dedicated documentation.

There are also additional subcommands you can invoke from the command line to manage and configure SwiftGen:

  * The `swiftgen config` subcommand to help you with the configuration file, especially `swiftgen config lint` to validate that your Config file is valid and has no errors
  * The `swiftgen templates` subcommands helps you print, duplicate, find and manage templates (both bundled and custom)



Lastly, you can use `--help` on `swiftgen` or one of its subcommand to see the detailed usage.

**Directly invoking a subcommand**

While we highly recommend the use a configuration file for performance reasons (especially if you have multiple outputs, but also because it's more flexible), it's also possible to directly invoke the available subcommands to parse various resource types:

  * `swiftgen colors [OPTIONS] DIRORFILE @abstr_number …`
  * `swiftgen coredata [OPTIONS] DIRORFILE @abstr_number …`
  * `swiftgen fonts [OPTIONS] DIRORFILE @abstr_number …`
  * `swiftgen ib [OPTIONS] DIRORFILE @abstr_number …`
  * `swiftgen json [OPTIONS] DIRORFILE @abstr_number …`
  * `swiftgen plist [OPTIONS] DIRORFILE @abstr_number …`
  * `swiftgen strings [OPTIONS] DIRORFILE @abstr_number …`
  * `swiftgen xcassets [OPTIONS] DIRORFILE @abstr_number …`
  * `swiftgen yaml [OPTIONS] DIRORFILE @abstr_number …`



One rare cases where this might be useful — as opposed to using a config file — is if you are working on a custom template and want to quickly test the specific subcommand you're working on at each iteration/version of your custom template, until you're happy with it.

Each subcommand generally accepts the same options and syntax, and they mirror the options and parameters from the configuration file:

  * `--output FILE` or `-o FILE`: set the file where to write the generated code. If omitted, the generated code will be printed on `stdout`.
  * `--templateName NAME` or `-n NAME`: define the Stencil template to use (by name, see here for more info) to generate the output.
  * `--templatePath PATH` or `-p PATH`: define the Stencil template to use, using a full path.
  * Note: you should specify one and only one template when invoking SwiftGen. You have to use either `-t` or `-p` but should not use both at the same time (it wouldn't make sense anyway and you'll get an error if you try)
  * `--filter REGEX` or `-f REGEX`: the filter to apply to each input path. Filters are applied to actual (relative) paths, not just the filename. Each command has a default filter that you can override with this option.
  * Note: use `.+` to match multiple characters (at least one), and don't forget to escape the dot (`\.`) if you want to match a literal dot like for an extension. Add `$` at the end to ensure the path ends with the extension you want. Regular expressions will be case sensitive by default, and not anchored to the start/end of a path. For example, use `.+\.xib$` to match files with a `.xib` extension. Use a tool such as @abstr_hyperlink to ensure you're using a valid regular expression.
  * Each command supports multiple input files (or directories where applicable).
  * You can always use the `--help` flag to see what options a command accept, e.g. `swiftgen xcassets --help`.



## Choosing your template

SwiftGen is based on templates (it uses @abstr_hyperlink as its template engine). This means that **you can choose the template that fits the Swift version you're using** — and also the one that best fits your preferences — to **adapt the generated code to your own conventions and Swift version**.

### Bundled templates vs. Custom ones

SwiftGen comes bundled with some templates for each of the subcommand (`colors`, `coredata`, `fonts`, `ib`, `json`, `plist`, `strings`, `xcassets`, `yaml`), which will fit most needs. But you can also create your own templates if the bundled ones don't suit your coding conventions or needs. Simply either use the `templateName` output option to specify the name of the template to use, or store them somewhere else (like in your project repository) and use `templatePath` output option to specify a full path.

💡 You can use the `swiftgen templates list` command to list all the available templates (both custom and bundled templates) for each subcommand, list the template content and dupliate them to create your own.

For more information about how to create your own templates, see the dedicated documentation.

### Templates bundled with SwiftGen:

As explained above, you can use `swiftgen templates list` to list all templates bundled with SwiftGen. For most SwiftGen subcommands, we provide, among others:

  * A `swift @abstr_number` template, compatible with Swift @abstr_number 
  * A `swift @abstr_number` template, compatible with Swift @abstr_number 
  * Other variants, like `flat-swift @abstr_number / @abstr_number` and `structured-swift @abstr_number / @abstr_number` templates for Strings, etc.



You can **find the documentation for each bundled template here in the repo** , with documentation organized as one folder per SwiftGen subcommand, then one MarkDown file per template.   
Each MarkDown file documents the Swift Version it's aimed for, the use case for that template (in which cases you might favor that template over others), the available parameters to customize it on invocation (using the `params:` key in your config file), and some code examples.

> Don't hesitate to make PRs to share your improvements suggestions on the bundled templates 😉

## Additional documentation

### Playground

The `SwiftGen.playground` available in this repository will allow you to play with the code that the tool typically generates, and see some examples of how you can take advantage of it.

This allows you to have a quick look at how typical code generated by SwiftGen looks like, and how you will then use the generated constants in your code.

### Dedicated Documentation in Markdown

There is a lot of documentation in the form of Markdown files in this repository, and in the related @abstr_hyperlink repository as well.

Be sure to check the "Documentation" folder of each repository.

Especially, in addition to the previously mentioned Migration Guide and Configuration File documentation, the `Documentation/` folder in the SwiftGen repository also includes:

  * A <code>templates</code> subdirectory that details the documentation for each of the templates bundled with SwiftGen (when to use each template, what the output will look like, and custom parameters to adjust them, …)
  * A <code>SwiftGenKit Contexts</code> subdirectory that details the structure of the "Stencil Contexts", i.e. the Dictionary/YAML representation resulting of parsing your input files. This documentation is useful for people wanting to write their own templates, so that they know the structure and various keys available when writing their template, to construct the wanted generated output accordingly.
  * Various articles to provide best practices & tips on how to better take advantage of SwiftGen in your projects: 
    * Integrate SwiftGen in your Xcode project — so it rebuilds the constants every time you build
    * Configure SwiftLint to help your developers use constants generated by SwiftGen
    * Create a custom template, and watch a folder to auto-regenerate an output every time you save the template you're working on
    * …and more



### Tutorials

You can also find other help & tutorial material on the internet, like @abstr_hyperlink — and its wiki detailing a step-by-step tutorial about installing and using SwiftGen (and Sourcery too)

* * *

## Asset Catalog

@abstr_code_section 

This will generate an `enum Asset` with one `case` per image set in your assets catalog, so that you can use them as constants.

Example of code generated by the bundled template

@abstr_code_section 

### Usage Example

@abstr_code_section 

## Colors

@abstr_code_section 

This will generate a `enum ColorName` with one `case` per color listed in the text file passed as argument.

The input file is expected to be either:

  * a plain text file, with one line per color to register, each line being composed by the Name to give to the color, followed by ":", followed by the Hex representation of the color (like `rrggbb` or `rrggbbaa`, optionally prefixed by `#` or `@abstr_number x`) or the name of another color in the file. Whitespaces are ignored.
  * a JSON file, representing a dictionary of names -> values, each value being the hex representation of the color
  * a XML file, expected to be the same format as the Android colors.xml files, containing tags `<color name="AColorName">AColorHexRepresentation</color>`
  * a @abstr_hyperlink used by Apple's Color Palettes.



For example you can use this command to generate colors from one of your system color lists:

@abstr_code_section 

Generated code will look the same as if you'd use a text file.

Example of code generated by the bundled template

Given the following `colors.txt` file:

@abstr_code_section 

The generated code will look like this:

@abstr_code_section 

### Usage Example

@abstr_code_section 

This way, no need to enter the color red, green, blue, alpha values each time and create ugly constants in the global namespace for them.

## Core Data

@abstr_code_section 

This will parse the specified core data model(s), generate a class for each entity in your model containing all the attributes, and a few extensions if needed for relationships and predefined fetch requests.

Example of code generated by the bundled template

@abstr_code_section 

### Usage Example

@abstr_code_section 

## Fonts

@abstr_code_section 

This will recursively go through the specified directory, finding any typeface files (TTF, OTF, …), defining a `struct FontFamily` for each family, and an enum nested under that family that will represent the font styles.

Example of code generated by the bundled template

@abstr_code_section 

### Usage Example

@abstr_code_section 

## Interface Builder

@abstr_code_section 

This will generate an `enum` for each of your `NSStoryboard`/`UIStoryboard`, with respectively one `case` per storyboard scene or segue.

Example of code generated by the bundled template

The generated code will look like this:

@abstr_code_section 

### Usage Example

@abstr_code_section 

## JSON and YAML

@abstr_code_section 

This will parse the given file, or when given a directory, recursively search for JSON and YAML files. It will define an `enum` for each file (and documents in a file where needed), and type-safe constants for the content of the file.

Unlike other subcommands, this parser is intended to allow you to use more custom inputs (as the formats are quite open to your needs) to generate your code. This means that for these subcommands (and the `plist` one), you'll probably be more likely to use custom templates to generate code properly adapted/tuned to your inputs, rather than using the bundled templates. To read more about writing your own custom templates, see see the dedicated documentation.

Example of code generated by the bundled template

@abstr_code_section 

### Usage Example

@abstr_code_section 

## Plists

@abstr_code_section 

This will parse the given file, or when given a directory, recursively search for Plist files. It will define an `enum` for each file (and documents in a file where needed), and type-safe constants for the content of the file.

Unlike other subcommands, this parser is intended to allow you to use more custom inputs (as the format is quite open to your needs) to generate your code. This means that for this subcommand (and the `json` and `yaml` ones), you'll probably be more likely to use custom templates to generate code properly adapted/tuned to your inputs, rather than using the bundled templates. To read more about writing your own custom templates, see see the dedicated documentation.

Example of code generated by the bundled template

@abstr_code_section 

### Usage Example

@abstr_code_section 

## Strings

@abstr_code_section 

This will generate a Swift `enum L @abstr_number n` that will map all your `Localizable.strings` (or other tables) keys to a `static let` constant. And if it detects placeholders like `%@`,`%d`,`%f`, it will generate a `static func` with the proper argument types instead, to provide type-safe formatting. Note that all dots within the key are converted to dots in code.

Example of code generated by the structured bundled template

Given the following `Localizable.strings` file:

@abstr_code_section 

> _Reminder: Don't forget to end each line in your `*.strings` files with a semicolon `;`! Now that in Swift code we don't need semi-colons, it's easy to forget it's still required by the `Localizable.strings` file format 😉_

The generated code will contain this:

@abstr_code_section 

### Usage Example

Once the code has been generated by the script, you can use it this way in your Swift code:

@abstr_code_section 

### Flat Strings Support

SwiftGen also has a template to support flat strings files (i.e. no dot syntax). The advantage is that your keys won't be mangled in any way, the disadvantage is worse auto-completion.

Example of code generated by the flat bundled template

@abstr_code_section 

Given the same `Localizable.strings` as above the usage will now be:

@abstr_code_section 

* * *

# Licence

This code and tool is under the MIT Licence. See the `LICENCE` file in this repository.

## Attributions

This tool is powered by

  * @abstr_hyperlink and few other libs by @abstr_hyperlink 
  * SwiftGenKit and @abstr_hyperlink , our internal frameworks at SwiftGen



It is currently mainly maintained by @abstr_hyperlink and @abstr_hyperlink . But I couldn't thank enough all the other @abstr_hyperlink to this tool along the different versions which helped make SwiftGen awesome! 🎉

If you want to contribute, don't hesitate to open a Pull Request, or even join the team!

## Other Libraries / Tools

If you want to also get rid of String-based APIs not only for your ressources, but also for `UITableViewCell`, `UICollectionViewCell` and XIB-based views, you should take a look at my Mixin @abstr_hyperlink .

If you want to generate Swift code from your own Swift code (so meta!), like generate `Equatable` conformance to your types and a lot of other similar things, use @abstr_hyperlink .

_SwiftGen and Sourcery are complementary tools. In fact, Sourcery uses `Stencil` too, as well as SwiftGen's `StencilSwiftKit` so you can use the exact same syntax for your templates for both!_

You can also @abstr_hyperlink for news/updates about other projects I am creating, or @abstr_hyperlink .
