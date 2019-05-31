@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

SwifterSwift is a collection of **over @abstr_number native Swift extensions** , with handy methods, syntactic sugar, and performance improvements for wide range of primitive data types, UIKit and Cocoa classes –over @abstr_number in @abstr_number – for iOS, macOS, tvOS, watchOS and Linux.

###  @abstr_hyperlink 

## Requirements

  * **iOS** @abstr_number . @abstr_number + / **tvOS** @abstr_number . @abstr_number + / **watchOS** @abstr_number . @abstr_number + / **macOS** @abstr_number . @abstr_number + / **Ubuntu** @abstr_number . @abstr_number +
  * Swift @abstr_number . @abstr_number +



## Looking to use SwifterSwift for older versions of Swift

SwifterSwift is Swift v @abstr_number . @abstr_number compatible starting from v @abstr_number 

  * To use with **Swift @abstr_number / Xcode @abstr_number .x** please ensure you are using @abstr_hyperlink .
  * To use with **Swift @abstr_number . @abstr_number / Xcode @abstr_number .x** please ensure you are using @abstr_hyperlink .



## Installation

CocoaPods

To integrate SwifterSwift into your Xcode project using @abstr_hyperlink , specify it in your `Podfile`:
    
    
    pod 'SwifterSwift'
    
    
    pod 'SwifterSwift/SwiftStdlib'
    
    
    pod 'SwifterSwift/Foundation'
    
    
    pod 'SwifterSwift/AppKit'
    
    
    pod 'SwifterSwift/MapKit'
    
    
    pod 'SwifterSwift/CoreGraphics'
    
    
    pod 'SwifterSwift/CoreLocation'
    
    
    pod 'SwifterSwift/SpriteKit'
    
    
    pod 'SwifterSwift/SceneKit'
    
    
    pod 'SwifterSwift/Dispatch'

Carthage

To integrate SwifterSwift into your Xcode project using @abstr_hyperlink , specify it in your `Cartfile`:
    
    
    github "SwifterSwift/SwifterSwift" ~>  @abstr_number . @abstr_number 
    

Swift Package Manager

You can use @abstr_hyperlink to install `SwifterSwift` by adding the proper description to your `Package.swift` file:
    
    
    import PackageDescription
    
    let package = Package(
        name: "YOUR_PROJECT_NAME",
        targets: [],
        dependencies: [
            .package(url: "https://github.com/SwifterSwift/SwifterSwift.git", from: " @abstr_number . @abstr_number . @abstr_number ")
        ]
    )
    

Next, add `SwifterSwift` to your targets dependencies like so:
    
    
    .target(
        name: "YOUR_TARGET_NAME",
        dependencies: [
            "SwifterSwift",
        ]
    ),

Then run `swift package update`.

Note that the @abstr_hyperlink doesn't support building for iOS/tvOS/macOS/watchOS apps – see Accio in the next section for that.  Accio

@abstr_hyperlink is a dependency manager based on SwiftPM which can build frameworks for iOS/macOS/tvOS/watchOS. Therefore the integration steps are exactly the same as described above. Once your `Package.swift` file is configured, you need to run `accio update` instead of `swift package update` though.

Manually

Add the @abstr_hyperlink folder to your Xcode project to use all extensions, or a specific extension.

## List of All Extensions

SwiftStdlib Extensions

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Foundation Extensions

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



UIKit Extensions

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



AppKit Extensions

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



CoreGraphics Extensions

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



CoreLocation Extensions

  * @abstr_hyperlink 



MapKit Extensions

  * @abstr_hyperlink 
  * @abstr_hyperlink 



SpriteKit Extensions

  * @abstr_hyperlink 



SceneKit Extensions

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Dispatch Extensions

  * @abstr_hyperlink 



## How cool is this?

SwifterSwift is a library of **over @abstr_number properties and methods** , designed to extend Swift's functionality and productivity, staying faithful to the original Swift API design guidelines.

Check Examples.playground from the project for some cool examples!

## Documentation

Documentation for all extensions, with examples, is available at @abstr_hyperlink 

## Get involved

We want your feedback. Please refer to @abstr_hyperlink before participating.

## Slack Channel: @abstr_hyperlink 

It is always nice to talk with other people using SwifterSwift and exchange experiences, so come @abstr_hyperlink .

## Thanks

Special thanks to:

  * @abstr_hyperlink and @abstr_hyperlink for their latest contributions to extensions, docs and tests.
  * @abstr_hyperlink for adding tvOS, watchOS, and macOS initial support and helping with extensions.
  * @abstr_hyperlink and @abstr_hyperlink for designing @abstr_hyperlink and logo.
  * @abstr_hyperlink for helping document the project.
  * Many thanks to all other @abstr_hyperlink of this project.



## License

SwifterSwift is released under the MIT license. See @abstr_hyperlink for more information.
