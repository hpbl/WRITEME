# SQLite.swift

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

A type-safe, @abstr_hyperlink -language layer over @abstr_hyperlink .

@abstr_hyperlink provides compile-time confidence in SQL statement syntax _and_ intent.

## Features

  * A pure-Swift interface
  * A type-safe, optional-aware SQL expression builder
  * A flexible, chainable, lazy-executing query layer
  * Automatically-typed data access
  * A lightweight, uncomplicated query and parameter binding interface
  * Developer-friendly error handling and debugging
  * Full-text search support
  * Well-documented
  * Extensively tested
  * @abstr_hyperlink support via CocoaPods
  * Active support at @abstr_hyperlink , and @abstr_hyperlink (_experimental_)



## Usage

@abstr_code_section 

SQLite.swift also works as a lightweight, Swift-friendly wrapper over the C API.

@abstr_code_section 

Read the documentation or explore more, interactively, from the Xcode project’s playground.

@abstr_image 

For a more comprehensive example, see @abstr_hyperlink and the @abstr_hyperlink .

## Installation

> _Note:_ Version @abstr_number . @abstr_number requires Swift @abstr_number (and @abstr_hyperlink @abstr_number . @abstr_number ) or greater. Version @abstr_number . @abstr_number . @abstr_number requires Swift @abstr_number . @abstr_number (and @abstr_hyperlink @abstr_number . @abstr_number ) or greater.

### Carthage

@abstr_hyperlink is a simple, decentralized dependency manager for Cocoa. To install SQLite.swift with Carthage:

@abstr_number . Make sure Carthage is @abstr_hyperlink .

@abstr_number . Update your Cartfile to include the following:
    
    
     @abstr_code_section
    

@abstr_number . Run `carthage update` and @abstr_hyperlink .

### CocoaPods

@abstr_hyperlink is a dependency manager for Cocoa projects. To install SQLite.swift with CocoaPods:

@abstr_number . Make sure CocoaPods is @abstr_hyperlink . (SQLite.swift requires version @abstr_number . @abstr_number . @abstr_number or greater.)
    
    
     @abstr_code_section
    

@abstr_number . Update your Podfile to include the following:
    
    
     @abstr_code_section
    

@abstr_number . Run `pod install --repo-update`.

### Swift Package Manager

The @abstr_hyperlink is a tool for managing the distribution of Swift code.

@abstr_number . Add the following to your `Package.swift` file:

@abstr_code_section 

@abstr_number . Build your project:

@abstr_code_section 

### Manual

To install SQLite.swift as an Xcode sub-project:

@abstr_number . Drag the **SQLite.xcodeproj** file into your own project. ( @abstr_hyperlink , clone, or @abstr_hyperlink the project first.)
    
    
    ![Installation Screen Shot](Documentation/Resources/installation@ @abstr_number x.png)
    

@abstr_number . In your target’s **General** tab, click the **+** button under **Linked Frameworks and Libraries**.

@abstr_number . Select the appropriate **SQLite.framework** for your platform.

@abstr_number . **Add**.

Some additional steps are required to install the application on an actual device:

@abstr_number . In the **General** tab, click the **+** button under **Embedded Binaries**.

@abstr_number . Select the appropriate **SQLite.framework** for your platform.

@abstr_number . **Add**.

## Communication

[See the planning document] for a roadmap and existing feature requests.

Read the contributing guidelines. The _TL;DR_ (but please; _R_):

  * Need **help** or have a **general question**? [Ask on Stack Overflow][] (tag `sqlite.swift`).
  * Found a **bug** or have a **feature request**? @abstr_hyperlink .
  * Want to **contribute**? @abstr_hyperlink .



## Author

  * @abstr_hyperlink ( @abstr_hyperlink )



## License

SQLite.swift is available under the MIT license. See the LICENSE file for more information.

## Related

These projects enhance or use SQLite.swift:

  * @abstr_hyperlink (inspired by @abstr_hyperlink )



## Alternatives

Looking for something else? Try another Swift wrapper (or @abstr_hyperlink ):

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 


