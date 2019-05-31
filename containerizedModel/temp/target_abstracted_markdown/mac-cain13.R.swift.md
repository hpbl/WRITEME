# R.swift @abstr_hyperlink @abstr_image 

_Get strong typed, autocompleted resources like images, fonts and segues in Swift projects_

## Why use this?

It makes your code that uses resources: \- **Fully typed** , less casting and guessing what a method will return \- **Compile time checked** , no more incorrect strings that make your app crash at runtime \- **Autocompleted** , never have to guess that image name again

Currently you type: @abstr_code_section 

With R.swift it becomes: @abstr_code_section 

Check out more examples or hear about @abstr_hyperlink !

## Demo

**Autocompleted images:**

@abstr_image 

**Compiletime checked images:**

@abstr_image 

This is only the beginning, check out more examples!

## CocoaHeadsNL presentation

Mathijs Kadijk presented R.swift at the September @abstr_number CocoaHeadsNL meetup. Talking about the ideas behind R.swift and demonstrating how to move from plain stringly-typed iOS code to statically typed code.

@abstr_hyperlink 

## Features

After installing R.swift into your project you can use the `R`-struct to access resources. If the struct is outdated just build and R.swift will correct any missing/changed/added resources.

R.swift currently supports these types of resources: \- Images \- Fonts \- Resource files \- Colors \- Localized strings \- Storyboards \- Segues \- Nibs \- Reusable cells

Runtime validation with <code>R.validate()</code>: \- If all images used in storyboards and nibs are available \- If all named colors used in storyboards and nibs are available \- If all view controllers with storyboard identifiers can be loaded \- If all custom fonts can be loaded

## Q&A

  * Why was R.swift created?
  * Why should I choose R.swift over alternative X or Y?
  * What are the requirements to run R.swift?
  * How to use methods with a <code>Void</code> argument?
  * How to fix missing imports in the generated file?
  * How to use classes with the same name as their module?
  * Can I ignore resources?
  * Can I use R.swift in a library?
  * How does R.swift work?
  * How to upgrade to a new major version?



## Installation

@abstr_hyperlink is the recommended way of installation, as this avoids including any binary files into your project.

_Note on Carthage: R.swift is a tool used in a build step, it is not a dynamic library. Therefore @abstr_hyperlink to install it with Carthage._

### CocoaPods (recommended)

@abstr_number . Add `pod 'R.swift'` to your @abstr_hyperlink and run `pod install` @abstr_number . In Xcode: Click on your project in the file list, choose your target under `TARGETS`, click the `Build Phases` tab and add a `New Run Script Phase` by clicking the little plus icon in the top left @abstr_number . Drag the new `Run Script` phase **above** the `Compile Sources` phase and **below** `Check Pods Manifest.lock`, expand it and paste the following script:   
@abstr_code_section @abstr_number . Add `$TEMP_DIR/rswift-lastrun` to the "Input Files" and `$SRCROOT/R.generated.swift` to the "Output Files" of the Build Phase @abstr_number . Build your project, in Finder you will now see a `R.generated.swift` in the `$SRCROOT`-folder, drag the `R.generated.swift` files into your project and **uncheck** `Copy items if needed`

_Screenshot of the Build Phase can be found here_

_Tip:_ Add the `*.generated.swift` pattern to your `.gitignore` file to prevent unnecessary conflicts.

### Manually

@abstr_number . Add the @abstr_hyperlink to your project @abstr_number . @abstr_hyperlink a R.swift release, unzip it and put it into your source root directory @abstr_number . In Xcode: Click on your project in the file list, choose your target under `TARGETS`, click the `Build Phases` tab and add a `New Run Script Phase` by clicking the little plus icon in the top left @abstr_number . Drag the new `Run Script` phase **above** the `Compile Sources` phase, expand it and paste the following script:   
@abstr_code_section @abstr_number . Add `$TEMP_DIR/rswift-lastrun` to the "Input Files" and `$SRCROOT/R.generated.swift` to the "Output Files" of the Build Phase @abstr_number . Build your project, in Finder you will now see a `R.generated.swift` in the `$SRCROOT`-folder, drag the `R.generated.swift` files into your project and **uncheck** `Copy items if needed`

_Screenshot of the Build Phase can be found here_

_Tip:_ Add the `*.generated.swift` pattern to your `.gitignore` file to prevent unnecessary conflicts.

### Building from source

R.swift is built using @abstr_hyperlink .

@abstr_number . Check out the code @abstr_number . Run `swift build -c release -Xswiftc -static-stdlib -Xswiftc "-target" -Xswiftc "x @abstr_number _ @abstr_number -apple-macosx @abstr_number . @abstr_number "` from the root directory @abstr_number . Follow the manual installation steps with the binary you now have

For developing on R.swift in Xcode, run `swift package generate-xcodeproj --xcconfig-overrides RswiftConfig.xcconfig`.

## Contribute

We'll love contributions, read the contribute docs for info on how to report issues, submit ideas and submit pull requests!

## License

@abstr_hyperlink and @abstr_hyperlink are created by @abstr_hyperlink and released under a MIT License.

Special thanks to @abstr_hyperlink for his major contributions and help maintaining this project.
