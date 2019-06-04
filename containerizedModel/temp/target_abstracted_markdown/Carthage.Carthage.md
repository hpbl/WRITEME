@abstr_image 

# Carthage @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Carthage is intended to be the simplest way to add frameworks to your Cocoa application.

Carthage builds your dependencies and provides you with binary frameworks, but you retain full control over your project structure and setup. Carthage does not automatically modify your project files or your build settings.

  * Quick Start
  * Installing Carthage
  * Adding frameworks to an application 
    * Getting started 
      * If you're building for macOS
      * If you're building for iOS, tvOS, or watchOS
      * For both platforms
      * (Optionally) Add build phase to warn about outdated dependencies
      * Swift binary framework download compatibility
    * Running a project that uses Carthage
    * Adding frameworks to unit tests or a framework
    * Upgrading frameworks 
      * Experimental Resolver
    * Nested dependencies
    * Using submodules for dependencies
    * Automatically rebuilding dependencies
    * Caching builds
    * Bash/Zsh/Fish completion
  * Supporting Carthage for your framework 
    * Share your Xcode schemes
    * Resolve build failures
    * Tag stable releases
    * Archive prebuilt frameworks into one zip file 
      * Use travis-ci to upload your tagged prebuilt frameworks
    * Build static frameworks to speed up your app’s launch times
    * Declare your compatibility
  * Known issues 
    * DWARFs symbol problem
  * CarthageKit
  * Differences between Carthage and CocoaPods
  * License



## Quick Start

@abstr_number . Get Carthage by running `brew install carthage` or choose another installation method @abstr_number . Create a Cartfile in the same directory where your `.xcodeproj` or `.xcworkspace` is @abstr_number . List the desired dependencies in the Cartfile, for example:
    
    
     @abstr_code_section
    

@abstr_number . Run `carthage update` @abstr_number . A `Cartfile.resolved` file and a `Carthage` directory will appear in the same directory where your `.xcodeproj` or `.xcworkspace` is @abstr_number . Drag the built `.framework` binaries from `Carthage/Build/<platform>` into your application’s Xcode project. @abstr_number . If you are using Carthage for an application, follow the remaining steps, otherwise stop here. @abstr_number . On your application targets’ _Build Phases_ settings tab, click the _+_ icon and choose _New Run Script Phase_. Create a Run Script in which you specify your shell (ex: `/bin/sh`), add the following contents to the script area below the shell:
    
    
     @abstr_code_section
    

  * Add the paths to the frameworks you want to use under “Input Files". For example:

@abstr_code_section 

  * Add the paths to the copied frameworks to the “Output Files”. For example:

@abstr_code_section 




For an in depth guide, read on from Adding frameworks to an application

## Installing Carthage

There are multiple options for installing Carthage:

  * **Installer:** Download and run the `Carthage.pkg` file for the latest @abstr_hyperlink , then follow the on-screen instructions. If you are installing the pkg via CLI, you might need to run `sudo chown -R $(whoami) /usr/local` first.

  * **Homebrew:** You can use @abstr_hyperlink and install the `carthage` tool on your system simply by running `brew update` and `brew install carthage`. (note: if you previously installed the binary version of Carthage, you should delete `/Library/Frameworks/CarthageKit.framework`).

  * **MacPorts:** You can use @abstr_hyperlink and install the `carthage` tool on your system simply by running `sudo port selfupdate` and `sudo port install carthage`. (note: if you previously installed the binary version of Carthage, you should delete `/Library/Frameworks/CarthageKit.framework`).

  * **From source:** If you’d like to run the latest development version (which may be highly unstable or incompatible), simply clone the `master` branch of the repository, then run `make install`. Requires Xcode @abstr_number . @abstr_number (Swift @abstr_number . @abstr_number ).




## Adding frameworks to an application

Once you have Carthage installed, you can begin adding frameworks to your project. Note that Carthage only supports dynamic frameworks, which are **only available on iOS @abstr_number or later** (or any version of OS X).

### Getting started

##### If you're building for macOS

@abstr_number . Create a Cartfile that lists the frameworks you’d like to use in your project. @abstr_number . Run `carthage update --platform macOS`. This will fetch dependencies into a Carthage/Checkouts folder and build each one or download a pre-compiled framework. @abstr_number . On your application targets’ _General_ settings tab, in the _Embedded Binaries_ section, drag and drop each framework you want to use from the Carthage/Build folder on disk.

Additionally, you'll need to copy debug symbols for debugging and crash reporting on OS X.

@abstr_number . On your application target’s _Build Phases_ settings tab, click the _+_ icon and choose _New Copy Files Phase_. @abstr_number . Click the _Destination_ drop-down menu and select _Products Directory_. @abstr_number . For each framework you’re using, drag and drop its corresponding dSYM file.

##### If you're building for iOS, tvOS, or watchOS

@abstr_number . Create a Cartfile that lists the frameworks you’d like to use in your project. @abstr_number . Run `carthage update`. This will fetch dependencies into a Carthage/Checkouts folder, then build each one or download a pre-compiled framework. @abstr_number . On your application targets’ _General_ settings tab, in the “Linked Frameworks and Libraries” section, drag and drop each framework you want to use from the Carthage/Build folder on disk. @abstr_number . On your application targets’ _Build Phases_ settings tab, click the _+_ icon and choose _New Run Script Phase_. Create a Run Script in which you specify your shell (ex: `/bin/sh`), add the following contents to the script area below the shell:
    
    
     @abstr_code_section
    

@abstr_number . Add the paths to the frameworks you want to use under “Input Files". For example:
    
    
     @abstr_code_section
    

@abstr_number . Add the paths to the copied frameworks to the “Output Files”. For example:
    
    
     @abstr_code_section 
    
    With output files specified alongside the input files, Xcode only needs to run the script when the input files have changed or the output files are missing. This means dirty builds will be faster when you haven't rebuilt frameworks with Carthage.
    

This script works around an @abstr_hyperlink triggered by universal binaries and ensures that necessary bitcode-related files and dSYMs are copied when archiving.

With the debug information copied into the built products directory, Xcode will be able to symbolicate the stack trace whenever you stop at a breakpoint. This will also enable you to step through third-party code in the debugger.

When archiving your application for submission to the App Store or TestFlight, Xcode will also copy these files into the dSYMs subdirectory of your application’s `.xcarchive` bundle.

##### For both platforms

Along the way, Carthage will have created some build artifacts. The most important of these is the Cartfile.resolved file, which lists the versions that were actually built for each framework. **Make sure to commit your Cartfile.resolved** , because anyone else using the project will need that file to build the same framework versions.

##### (Optionally) Add build phase to warn about outdated dependencies

You can add a Run Script phase to automatically warn you when one of your dependencies is out of date.

@abstr_number . On your application targets’ `Build Phases` settings tab, click the `+` icon and choose `New Run Script Phase`. Create a Run Script in which you specify your shell (ex: `/bin/sh`), add the following contents to the script area below the shell:

@abstr_code_section 

##### Swift binary framework download compatibility

Carthage will check to make sure that downloaded Swift (and mixed Objective-C/Swift) frameworks were built with the same version of Swift that is in use locally. If there is a version mismatch, Carthage will proceed to build the framework from source. If the framework cannot be built from source, Carthage will fail.

Because Carthage uses the output of `xcrun swift --version` to determine the local Swift version, make sure to run Carthage commands with the Swift toolchain that you intend to use. For many use cases, nothing additional is needed. However, for example, if you are building a Swift @abstr_number . @abstr_number project using Xcode @abstr_number .x, one approach to specifying your default `swift` for `carthage bootstrap` is to use the following command:

@abstr_code_section 

### Running a project that uses Carthage

After you’ve finished the above steps and pushed your changes, other users of the project only need to fetch the repository and run `carthage bootstrap` to get started with the frameworks you’ve added.

### Adding frameworks to unit tests or a framework

Using Carthage for the dependencies of any arbitrary target is fairly similar to using Carthage for an application. The main difference lies in how the frameworks are actually set up and linked in Xcode.

Because unit test targets are missing the _Linked Frameworks and Libraries_ section in their _General_ settings tab, you must instead drag the built frameworks to the _Link Binaries With Libraries_ build phase.

In the Test target under the _Build Settings_ tab, add `@loader_path/Frameworks` to the _Runpath Search Paths_ if it isn't already present.

In rare cases, you may want to also copy each dependency into the build product (e.g., to embed dependencies within the outer framework, or make sure dependencies are present in a test bundle). To do this, create a new _Copy Files_ build phase with the _Frameworks_ destination, then add the framework reference there as well. You shouldn't use the `carthage copy-frameworks` command since test bundles don't need frameworks stripped, and running concurrent instances of `copy-frameworks` (with parallel builds turn on) is not supported.

### Upgrading frameworks

If you’ve modified your Cartfile, or you want to update to the newest versions of each framework (subject to the requirements you’ve specified), simply run the `carthage update` command again.

If you only want to update one, or specific, dependencies, pass them as a space-separated list to the `update` command. e.g.

@abstr_code_section 

or

@abstr_code_section 

##### Experimental Resolver

A rewrite of the logic for upgrading frameworks was done with the aim of increasing speed and reducing memory usage. It is currently an opt-in feature. It can be used by passing `--new-resolver` to the update command, e.g.,

@abstr_code_section 

If you are experiencing performance problems during updates, please give the new resolver a try

### Nested dependencies

If the framework you want to add to your project has dependencies explicitly listed in a Cartfile, Carthage will automatically retrieve them for you. You will then have to **drag them yourself into your project** from the [Carthage/Build] folder.

If the embedded framework in your project has dependencies to other frameworks you must **link them to application target** (even if application target does not have dependency to that frameworks and never uses them).

### Using submodules for dependencies

By default, Carthage will directly check out dependencies’ source files into your project folder, leaving you to commit or ignore them as you choose. If you’d like to have dependencies available as Git submodules instead (perhaps so you can commit and push changes within them), you can run `carthage update` or `carthage checkout` with the `--use-submodules` flag.

When run this way, Carthage will write to your repository’s `.gitmodules` and `.git/config` files, and automatically update the submodules when the dependencies’ versions change.

### Automatically rebuilding dependencies

If you want to work on your dependencies during development, and want them to be automatically rebuilt when you build your parent project, you can add a Run Script build phase that invokes Carthage like so:

@abstr_code_section 

Note that you should be using submodules before doing this, because plain checkouts should not be modified directly.

### Caching builds

By default Carthage will rebuild a dependency regardless of whether it's the same resolved version as before. Passing the `--cache-builds` will cause carthage to avoid rebuilding a dependency if it can. See information on version files for details on how Carthage performs this caching.

Note: At this time `--cache-builds` is incompatible with `--use-submodules`. Using both will result in working copy and committed changes to your submodule dependency not being correctly rebuilt. See @abstr_hyperlink for details.

### Bash/Zsh/Fish completion

Auto completion of Carthage commands and options are available as documented in Bash/Zsh/Fish Completion.

## Supporting Carthage for your framework

**Carthage only officially supports dynamic frameworks**. Dynamic frameworks can be used on any version of OS X, but only on **iOS @abstr_number or later**. Additionally, since version @abstr_number . @abstr_number . @abstr_number Carhage supports **static** frameworks.

Because Carthage has no centralized package list, and no project specification format, **most frameworks should build automatically**.

The specific requirements of any framework project are listed below.

### Share your Xcode schemes

Carthage will only build Xcode schemes that are shared from your `.xcodeproj`. You can see if all of your intended schemes build successfully by running `carthage build --no-skip-current`, then checking the Carthage/Build folder.

If an important scheme is not built when you run that command, open Xcode and make sure that the @abstr_hyperlink , so Carthage can discover it.

### Resolve build failures

If you encounter build failures in `carthage build --no-skip-current`, try running `xcodebuild -scheme SCHEME -workspace WORKSPACE build` or `xcodebuild -scheme SCHEME -project PROJECT build` (with the actual values) and see if the same failure occurs there. This should hopefully yield enough information to resolve the problem.

If you have multiple versions of the Apple developer tools installed (an Xcode beta, for example), use `xcode-select` to change which version Carthage uses.

If you’re still not able to build your framework with Carthage, please @abstr_hyperlink and we’d be happy to help!

### Tag stable releases

Carthage determines which versions of your framework are available by searching through the tags published on the repository, and trying to interpret each tag name as a @abstr_hyperlink . For example, in the tag `v @abstr_number . @abstr_number`, the semantic version is @abstr_number . @abstr_number . @abstr_number .

Tags without any version number, or with any characters following the version number (e.g., `@abstr_number . @abstr_number -alpha- @abstr_number`) are currently unsupported, and will be ignored.

### Archive prebuilt frameworks into one zip file

Carthage can automatically use prebuilt frameworks, instead of building from scratch, if they are attached to a @abstr_hyperlink on your project’s repository or via a binary project definition file.

To offer prebuilt frameworks for a specific tag, the binaries for _all_ supported platforms should be zipped up together into _one_ archive, and that archive should be attached to a published Release corresponding to that tag. The attachment should include `.framework` in its name (e.g., `ReactiveCocoa.framework.zip`), to indicate to Carthage that it contains binaries. The directory structure of the acthive is free form but, __frameworks should only appear once in the archive__ as they will be copied to `Carthage/Build/<platform>` based on their name (e.g. `ReactiveCocoa.framework`).

You can perform the archiving operation with carthage itself using:

@abstr_code_section 

or alternatively

@abstr_code_section 

Draft Releases will be automatically ignored, even if they correspond to the desired tag.

#### Use travis-ci to upload your tagged prebuilt frameworks

It is possible to use travis-ci in order to build and upload your tagged releases.

@abstr_number . @abstr_hyperlink with `gem install travis` @abstr_number . @abstr_hyperlink travis-ci for your repository (Steps @abstr_number and @abstr_number ) @abstr_number . Create `.travis.yml` file at the root of your repository based on that template. Set `FRAMEWORK_NAME` to the correct value.
    
    
    Replace PROJECT_PLACEHOLDER and SCHEME_PLACEHOLDER
    
    If you are using a *workspace* instead of a *project* remove the xcode_project line and uncomment the xcode_workspace line.
    
    The project should be in the format: MyProject.xcodeproj
    
    The workspace should be in the format: MyWorkspace.xcworkspace
    
    Feel free to update the `xcode_sdk` value to another SDK, note that testing on iphoneos SDK would require you to upload a code signing identity
    
    For more informations you can visit [travis docs for objective-c projects](https://docs.travis-ci.com/user/languages/objective-c)
    
    ```YAML
    language: objective-c
    osx_image: xcode @abstr_number . @abstr_number 
    xcode_project: <PROJECT_PLACEHOLDER>
    # xcode_workspace: <WORKSPACE_PLACEHOLDER>
    xcode_scheme: <SCHEME_PLACEHOLDER>
    xcode_sdk: iphonesimulator @abstr_number . @abstr_number 
    env:
      global:
        - FRAMEWORK_NAME=<THIS_IS_A_PLACEHOLDER_REPLACE_ME>
    before_install:
      - brew update
      - brew outdated carthage || brew upgrade carthage
    before_script:
      # bootstrap the dependencies for the project
      # you can remove if you don't have dependencies
      - carthage bootstrap
    before_deploy:
      - carthage build --no-skip-current
      - carthage archive $FRAMEWORK_NAME
     @abstr_code_section YAML
    on:
      repo: repo/repo
     @abstr_code_section YAML
    skip_cleanup: true
    on:
      repo: repo/repo
      tags: true
     @abstr_code_section markdown
    

@abstr_hyperlink ```

## Known issues

##### DWARFs symbol problem

Pre-built framework cannot be debugged using step execution on other machine than on which the framework was built. Simply `carthage bootstrap/build/update --no-use-binaries` should fix this, but for more automated workaround, see @abstr_hyperlink . Dupe @abstr_hyperlink if you want Apple to fix the root cause of this problem.

## CarthageKit

Most of the functionality of the `carthage` command line tool is actually encapsulated in a framework named CarthageKit.

If you’re interested in using Carthage as part of another tool, or perhaps extending the functionality of Carthage, take a look at the CarthageKit source code to see if the API fits your needs.

## Differences between Carthage and CocoaPods

@abstr_hyperlink is a long-standing dependency manager for Cocoa. So why was Carthage created?

Firstly, CocoaPods (by default) automatically creates and updates an Xcode workspace for your application and all dependencies. Carthage builds framework binaries using `xcodebuild`, but leaves the responsibility of integrating them up to the user. CocoaPods’ approach is easier to use, while Carthage’s is flexible and unintrusive.

The goal of CocoaPods is listed in its @abstr_hyperlink as follows:

> … to improve discoverability of, and engagement in, third party open-source libraries, by creating a more centralized ecosystem.

By contrast, Carthage has been created as a _decentralized_ dependency manager. There is no central list of projects, which reduces maintenance work and avoids any central point of failure. However, project discovery is more difficult—users must resort to GitHub’s @abstr_hyperlink pages or similar.

CocoaPods projects must also have what’s known as a @abstr_hyperlink file, which includes metadata about the project and specifies how it should be built. Carthage uses `xcodebuild` to build dependencies, instead of integrating them into a single workspace, it doesn’t have a similar specification file but your dependencies must include their own Xcode project that describes how to build their products.

Ultimately, we created Carthage because we wanted the simplest tool possible—a dependency manager that gets the job done without taking over the responsibility of Xcode, and without creating extra work for framework authors. CocoaPods offers many amazing features that Carthage will never have, at the expense of additional complexity.

## License

Carthage is released under the MIT License.

Header backdrop photo is released under the @abstr_hyperlink license. Original photo by @abstr_hyperlink .
