# Swift Package Manager Project

The Swift Package Manager is a tool for managing distribution of source code, aimed at making it easy to share your code and reuse others’ code. The tool directly addresses the challenges of compiling and linking Swift packages, managing dependencies, versioning, and supporting flexible distribution and collaboration models.

We’ve designed the system to make it easy to share packages on services like GitHub, but packages are also great for private personal development, sharing code within a team, or at any other granularity.

Note that at this time the Package Manager has no support for iOS, watchOS, or tvOS platforms.

* * *

## Table of Contents

  * Getting Started
  * Documentation
  * System Requirements
  * Installation 
    * Managing Swift Environments
    * Choosing a Swift Version
  * Support
  * Contributions
  * License



* * *

## Getting Started

Please use @abstr_hyperlink for learning package manager basics.

* * *

## Documentation

For Quick Help use the `swift package --help @abstr_code_section sh $ swift package --version Apple Swift Package Manager - ... @abstr_code_section sh $ xcrun --find swift /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swift $ swift --version Apple Swift version @abstr_number . @abstr_number $ export TOOLCHAINS=swift $ xcrun --find swift /Library/Developer/Toolchains/swift-latest.xctoolchain/usr/bin/swift $ swift --version Swift version @abstr_number . @abstr_number -dev `

To use a specific toolchain you can set `TOOLCHAINS` to the `CFBundleIdentifier` in an `.xctoolchain`’s Info.plist.

### Choosing a Swift Version

The `SWIFT_EXEC` environment variable specifies the `swiftc` executable path used by `swift package`. If it is not set, the package manager will try to locate it:

@abstr_number . In `swift-package`'s parent directory. @abstr_number . On macOS, by calling `xcrun --find swiftc`. @abstr_number . By searching the PATH.

* * *

## Support

If you have any trouble with the package manager, help is available. We recommend:

  * The @abstr_hyperlink 
  * Our @abstr_hyperlink 



When adding a bug to the tracker you should follow the bug reporting guidelines, they can be found in Resources.md.

If you’re not comfortable sharing your question with the list, contact details for the code owners can be found in CODEOWNERS; however, the mailing list is usually the best place to go for help.

* * *

## Contributions

To learn about the policies and best practices that govern contributions to the Swift project, please read the @abstr_hyperlink .

If you are interested in contributing, please read the Community Proposal, which provides some context for decisions made in the current implementation and offers direction for the development of future features.

Instructions for setting up the development environment are available here.

The Swift package manager uses @abstr_hyperlink as the underlying build system for compiling source files. It is also open source and part of the Swift project.

* * *

## License

Copyright @abstr_number - @abstr_number Apple Inc. and the Swift project authors. Licensed under Apache License v @abstr_number . @abstr_number with Runtime Library Exception.

See @abstr_hyperlink for license information.

See @abstr_hyperlink for Swift project authors.
