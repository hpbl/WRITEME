# BulletinBoard

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

BulletinBoard is an iOS library that generates and manages contextual cards displayed at the bottom of the screen. It is especially well suited for quick user interactions such as onboarding screens or configuration.

It has an interface similar to the cards displayed by iOS for AirPods, Apple TV/HomePod configuration and NFC tag scanning. It supports both the iPhone, iPhone X and the iPad.

It has built-in support for accessibility features such as VoiceOver and Switch Control.

Here are some screenshots showing what you can build with BulletinBoard:

@abstr_image 

## Requirements

  * Xcode @abstr_number and later
  * iOS @abstr_number and later
  * Swift @abstr_number . @abstr_number and later



## Demo

A demo project is included in the `BulletinBoard` workspace. It demonstrates how to:

  * integrate the library (setup, data flow)
  * create standard page cards
  * create custom page subclasses to add features
  * create custom cards from scratch



Two demo targets are available:

  * `BB-Swift` (demo written in Swift)
  * `BB-ObjC` (demo written in Objective-C)



Build and run the scheme for your favorite language to open the demo app.

Here's a video showing it in action:

@abstr_hyperlink 

## Installation

BulletinBoard is available via CocoaPods and Carthage.

### CocoaPods

To install BulletinBoard using @abstr_hyperlink , add this line to your `Podfile`:

~~~ruby pod 'BulletinBoard' ~~~

### Carthage

To install BulletinBoard using @abstr_hyperlink , add this line to your `Cartfile`:

~~~ github "alexaubry/BulletinBoard" ~~~

## 🦕 Objective-C Integration

BulletinBoard is fully compatible with Objective-C.

To import it in your Objective-C app, just add this line at the top of your files:

~~~objc @import BLTNBoard; ~~~

## Usage

## The Basics

The `BLTNManager` class generates, manages and displays bulletin cards. Cards are created using bulletin items. Bulletin items are objects that conform to the `BLTNItem` protocol.

The library provides a standard item type: `BLTNPageItem`. If you need to customize the items, you can override this class, or create new item types from scratch.

## Displaying Bulletins

To display bulletins you first need to create the root item to display (explained in the next sections).

With this root item, you need to create a `BLTNManager`. We recommend putting it in the view controller that will display the bulletin.

~~~swift class ViewController: UIViewController {
    
    
    lazy var bulletinManager: BLTNItemManager = {
        let rootItem: BLTNItem = // ... create your item here
        return BLTNItemManager(rootItem: rootItem)
    }()
    

} ~~~

To present your bulletin, call this method:

~~~swift bulletinManager.showBulletin(above: self) ~~~

For the case of onboarding, you can call it in `viewWillAppear(animated:)` after checking if the user has already completed onboarding.

## Creating Page Items

You can create standard page items using the `BLTNPageItem` class.

It takes care of generating a user interface with standard components:

  * a title (required)
  * an icon image (should be @abstr_number x @abstr_number px or less)
  * a description text (plain or attributed)
  * a large action button
  * a smaller alternative button



For example, this interface was created using a `BLTNPageItem`:

@abstr_image 

To recreate this interface, use this code:

~~~swift let page = BLTNPageItem(title: "Push Notifications") page.image = UIImage(named: "...")

page.descriptionText = "Receive push notifications when new photos of pets are available." page.actionButtonTitle = "Subscribe" page.alternativeButtonTitle = "Not now" ~~~

If you omit an optional property, the page won't generate a view for it. For instance, if you set `alternativeButtonTitle` to `nil`, the card won't display an alternative button.

You can also set the `attributedDescriptionText` if you want to use an attributed string.

### Customizing the Appearance

The `BLTNPageItem` class exposes a `appearance` property that allows you to fully customize the appearance of the generated interface.

This property references a `BLTNAppearance`, which is used to generate the standard components (more on this later).

You can customize both color and fonts. You need to change these before you present / push the item. Changing them after presentation will have no effect.

**Example**

~~~swift let greenColor = UIColor(red: @abstr_number . @abstr_number , green: @abstr_number . @abstr_number , blue: @abstr_number . @abstr_number , alpha: @abstr_number ) page.appearance.actionButtonColor = greenColor page.appearance.alternativeButtonTitleColor = greenColor page.appearance.actionButtonTitleColor = .white ~~~

This produces a card with the following appearance:

@abstr_image 

### Handling Button Taps

To handle taps on buttons, set a closure for these properties:

  * `actionHandler` \- called when the action button is tapped.
  * `alternativeHandler` \- called when the alternative button is tapped.



~~~swift page.actionHandler = { (item: BLTNActionItem) in print("Action button tapped") } ~~~

This prints `"Action button tapped"` when the action button is tapped.

~~~swift page.alternativeHandler = { (item: BLTNActionItem) in print("Alternative button tapped") } ~~~

This prints `"Alternative button tapped"` when the alternative button is tapped.

Use these handlers as an opportunity to change the presented item, dismiss the bulletin and/or pass data to your model.

## Changing the Presented Item

The `BLTNItem` protocol exposes a `manager` property that is set when the item is currently being displayed by a manager.

You can use it to interact with the presented bulletin. Call:

  * `manager?.popItem()` to go back to the previous item
  * `manager?.popToRootItem()` to go back to the first item
  * `manager?.push(item:)` with a `BulletinItem` to present a new item
  * `manager?.dismissBulletin(animated:)` to dismiss the bulletin
  * `manager?.displayNextItem()` to display the next item (see below)



You need to call these methods from the main thread. Never force unwrap `manager`, as this property will be unset as soon as the item is removed from the bulletin.

It is also possible to set the `nextItem` property to the `BLTNItem` that should be displayed next and call the `displayNextItem()` method when you want to display it.

For instance, to present a new card when the user taps the action button:

~~~swift page.nextItem = makeLocationPage() // Creates a new PageBulletinItem

page.actionHandler = { (item: PageBulletinItem) in item.manager?.displayNextItem() } ~~~

This creates the following interaction:

@abstr_image 

## Displaying an Activity Indicator

If you need to perform a task between the moment the user taps a button and the moment you'll be able to change the presented item, you can call `displayActivityIndicator()` method on the item manager to hide the current card and display an activity indicator.

This is especially useful if you need to fetch data from a server (in-app purchase price, subscription status, ...) or save data (e.g. Core Data).

Once your task is finished, you call one of the methods described in Changing the Presented Item to display the new item, or call `hideActivityIndicator()` to hide the indicator without changing the item.

**Example** :

~~~swift page.actionHandler = { (item: BLTNActionItem) in item.manager?.displayActivityIndicator() // do your task // ... // when your task is finished, transition to the appropriate bulletin item item.manager?.displayNextItem() } ~~~

This creates the following interaction:

@abstr_image 

## Customizing the Background View

By default, the content behind the card is covered with a semi-opaque view (known as the `.dimming` style).

You can customize the background view by changing the `backgroundViewStyle` property of the manager before calling `showBulletin()`.

**Example** :

~~~swift manager.backgroundViewStyle = .blurredExtraLight manager.showBulletin(above: self) ~~~

Several styles are available in the `BulletinBackgroundViewStyle` enum:

@abstr_image 

> Note: blurred backgrounds are available in iOS @abstr_number . @abstr_number and later.

## Dismissal

If you set the `isDismissable` property to `true`, the user will be able to dismiss the bulletin by tapping outside of the card or by swiping the card down. This property defaults to `true`. You should set this property to `false` if completing the task is required, and should not be avoided by the user.

By default, a close button will be displayed when the item can be dismissed. If you don't want this behavior, you can set the `requiresCloseButton` property to `false`. This is useful when the bulletin already provides an action button to close the item (such as a “Done“ button).

@abstr_image 

## Creating Custom Items

To create custom bulletin items, create a class that implements the `BLTNItem` protocol. It is usually easier to subclass `BLTNPageItem` and implement one of the hook methods to provide your custom views to display with standard elements.

## Internals

BulletinBoard uses stack views and Auto Layout to display and manage cards. It automatically adapts to changes in width and height. iPad and iPhone X are supported out of the box.

If you are interested in learning how it works in more details, look at the implementation of `BLTNManager`, `BulletinViewController` and `BLTNInterfaceBuilder`.

## Contributing

Thank you for your interest in the project! Contributions are welcome and appreciated.

Make sure to read these guides before getting started:

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Apps Using _BulletinBoard_

Feel free to submit a PR if you’re using this library in your apps.

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Author

Written by Alexis Aubry. You can @abstr_hyperlink .

## License

BulletinBoard is available under the MIT license. See the LICENSE file for more info.
