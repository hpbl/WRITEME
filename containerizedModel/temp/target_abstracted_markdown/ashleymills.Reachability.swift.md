# Reachability.swift

Reachability.swift is a replacement for Apple's Reachability sample, re-written in Swift with closures.

It is compatible with **iOS** ( @abstr_number . @abstr_number - @abstr_number . @abstr_number ), **OSX** ( @abstr_number . @abstr_number - @abstr_number . @abstr_number ) and **tvOS** ( @abstr_number . @abstr_number - @abstr_number . @abstr_number )

Inspired by https://github.com/tonymillion/Reachability

## Supporting **Reachability.swift**

Keeping **Reachability.swift** up-to-date is a time consuming task. Making updates, reviewing pull requests, responding to issues and answering emails all take time. 

If you're an iOS developer who's looking for a quick and easy way to create App Store screenshots, please try out my app @abstr_hyperlink …

Devices | Layout | Copy | Localize | Export :------:|:------:|:------:|:------:|:------: @abstr_image | @abstr_image | @abstr_image | @abstr_image | @abstr_image 

And don't forget to **★** the repo. This increases its visibility and encourages others to contribute.

Thanks Ash

# IMPORTANT

## Version @abstr_number . @abstr_number breaking changes

### CocoaPods:

If you're adding **Reachability.swift** using CocoaPods, note that the framework name has changed from `ReachabilitySwift` to `Reachability` (for consistency with Carthage)

### Previously:

@abstr_code_section 

### Now:

@abstr_code_section 

### Other changes:

  * `reachableOnWWAN` has been renamed to `allowsCellularConnection`

  * `reachability.currentReachabilityString` has been deprecated. Use `"\(reachability.connection)"` instead.

  * `isReachable` has been deprecated. Use `connection != .none` instead.

  * `isReachableViaWWAN` has been deprecated. Use `connection == .cellular` instead.

  * The notification for reachability changes has been renamed from `ReachabilityChangedNotification` to `Notification.Name.reachabilityChanged`

  * All closure callbacks and notification are fired on the main queue (including when `startNotifier()` is called)




## Got a problem?

Please read https://github.com/ashleymills/Reachability.swift/blob/master/CONTRIBUTING.md before raising an issue.

## Installation

### Manual

Just drop the **Reachability.swift** file into your project. That's it!

### CocoaPods

@abstr_hyperlink is a dependency manager for Cocoa projects. To install Reachability.swift with CocoaPods:

@abstr_number . Make sure CocoaPods is @abstr_hyperlink .

@abstr_number . Update your Podfile to include the following:
    
    
     @abstr_code_section
    

@abstr_number . Run `pod install`.

@abstr_number . In your code import Reachability like so: `import Reachability`

### Carthage

@abstr_hyperlink is a decentralized dependency manager that builds your dependencies and provides you with binary frameworks. To install Reachability.swift with Carthage:

@abstr_number . Install Carthage via @abstr_hyperlink @abstr_code_section 

@abstr_number . Add `github "ashleymills/Reachability.swift"` to your Cartfile.

@abstr_number . Run `carthage update`.

@abstr_number . Drag `Reachability.framework` from the `Carthage/Build/iOS/` directory to the `Linked Frameworks and Libraries` section of your Xcode project’s `General` settings.

@abstr_number . Add `$(SRCROOT)/Carthage/Build/iOS/Reachability.framework` to `Input Files` of Run Script Phase for Carthage.

@abstr_number . In your code import Reachability like so: `import Reachability`

## Example - closures

NOTE: All closures are run on the **main queue**.

@abstr_code_section 

and for stopping notifications

@abstr_code_section 

## Example - notifications

NOTE: All notifications are delivered on the **main queue**.

@abstr_code_section 

and

@abstr_code_section 

and for stopping notifications

@abstr_code_section 

## Want to help?

Got a bug fix, or a new feature? Create a pull request and go for it!

## Let me know!

If you use **Reachability.swift** , please let me know about your app and I'll put a link @abstr_hyperlink and tell your friends!

Cheers, Ash
