## KolodaView @abstr_image @abstr_hyperlink @abstr_image 

@abstr_hyperlink 

Check this @abstr_hyperlink . And another one @abstr_hyperlink 

@abstr_image @abstr_image 

## Purpose

KolodaView is a class designed to simplify the implementation of Tinder like cards on iOS. It adds convenient functionality such as a UITableView-style dataSource/delegate interface for loading views dynamically, and efficient view loading, unloading .

## Supported OS & SDK Versions

  * Supported build target - iOS @abstr_number . @abstr_number (Xcode @abstr_number )



## ARC Compatibility

KolodaView requires ARC.

## Thread Safety

KolodaView is subclassed from UIView and - as with all UIKit components - it should only be accessed from the main thread. You may wish to use threads for loading or updating KolodaView contents or items, but always ensure that once your content has loaded, you switch back to the main thread before updating the KolodaView.

## Installation

To install via CocoaPods add this lines to your Podfile. You need CocoaPods v. @abstr_number . @abstr_number or higher @abstr_code_section 

To install via Carthage add this lines to your Cartfile @abstr_code_section 

To install manually the KolodaView class in an app, just drag the KolodaView, DraggableCardView, OverlayView class files (demo files and assets are not needed) into your project. Also you need to install facebook-pop. Or add bridging header if you are using CocoaPods.

## Usage

@abstr_number . Import `Koloda` module to your `MyKolodaViewController` class
    
    
     @abstr_code_section
    

@abstr_number . Add `KolodaView` to `MyKolodaViewController`, then set dataSource and delegate for it @abstr_code_section @abstr_number . Conform your `MyKolodaViewController` to `KolodaViewDelegate` protocol and override some methods if you need, e.g. @abstr_code_section @abstr_number . Conform `MyKolodaViewController` to `KolodaViewDataSource` protocol and implement all the methods , e.g. @abstr_code_section @abstr_number . `KolodaView` works with default implementation. Override it to customize its behavior

Also check out @abstr_hyperlink .

## Properties

The KolodaView has the following properties: @abstr_code_section An object that supports the KolodaViewDataSource protocol and can provide views to populate the KolodaView. @abstr_code_section An object that supports the KolodaViewDelegate protocol and can respond to KolodaView events. @abstr_code_section The index of front card in the KolodaView (read only). @abstr_code_section The count of cards in the KolodaView (read only). To set this, implement the `kolodaNumberOfCards:` dataSource method. @abstr_code_section The count of displayed cards in the KolodaView.

## Methods

The KolodaView class has the following methods: @abstr_code_section This method reloads all KolodaView item views from the dataSource and refreshes the display. @abstr_code_section This method resets currentCardIndex and calls reloadData, so KolodaView loads from the beginning. @abstr_code_section Applies undo animation and decrement currentCardIndex. @abstr_code_section Applies appear animation if needed. @abstr_code_section Applies swipe animation and action, increment currentCardIndex.

@abstr_code_section 

Calculates frames for cards. Useful for overriding. See example to learn more about it.

## Protocols

The KolodaView follows the Apple convention for data-driven views by providing two protocol interfaces, KolodaViewDataSource and KolodaViewDelegate.

#### The KolodaViewDataSource protocol has the following methods:

@abstr_code_section Return the number of items (views) in the KolodaView. @abstr_code_section Return a view to be displayed at the specified index in the KolodaView. @abstr_code_section Return a view for card overlay at the specified index. For setting custom overlay action on swiping(left/right), you should override didSet of overlayState property in OverlayView. (See Example) @abstr_code_section Allow management of the swipe animation duration

#### The KolodaViewDelegate protocol has the following methods:

@abstr_code_section Return the allowed directions for a given card, defaults to `[.left, .right]` @abstr_code_section This method is called before the KolodaView swipes card. Return `true` or `false` to allow or deny the swipe. @abstr_code_section This method is called whenever the KolodaView swipes card. It is called regardless of whether the card was swiped programatically or through user interaction. @abstr_code_section This method is called when the KolodaView has no cards to display. @abstr_code_section This method is called when one of cards is tapped. @abstr_code_section This method is fired on reload, when any cards are displayed. If you return YES from the method or don't implement it, the koloda will apply appear animation. @abstr_code_section This method is fired on start of front card swipping. If you return YES from the method or don't implement it, the koloda will move background card with dragging of front card. @abstr_code_section This method is fired on koloda's layout and after swiping. If you return YES from the method or don't implement it, the koloda will transparentize next card below front card. @abstr_code_section This method is called whenever the KolodaView recognizes card dragging event. @abstr_code_section Return the percentage of the distance between the center of the card and the edge at the drag direction that needs to be dragged in order to trigger a swipe. The default behavior (or returning NIL) will set this threshold to half of the distance @abstr_code_section This method is fired after resetting the card. @abstr_code_section This method is called after a card has been shown, after animation is complete @abstr_code_section This method is called when the card is beginning to be dragged. If you return YES from the method or don't implement it, the card will move in the direction of the drag. If you return NO the card will not move.

## Release Notes

Version @abstr_number . @abstr_number \- Swift @abstr_number . @abstr_number via @abstr_hyperlink 

Version @abstr_number . @abstr_number \- fixed a bug with card responding during swiping via @abstr_hyperlink \- fixed a bug with inappropriate layouting via @abstr_hyperlink 

Version @abstr_number . @abstr_number \- update some properties to be publicitly settable via @abstr_hyperlink and @abstr_hyperlink \- Xcode @abstr_number back compatibility via @abstr_hyperlink \- added posibility to have the card stack at the top or bottom via @abstr_hyperlink 

Version @abstr_number . @abstr_number \- Swift @abstr_number . @abstr_number via @abstr_hyperlink 

Version @abstr_number . @abstr_number \- Swift @abstr_number . @abstr_number via @abstr_hyperlink \- Added `isLoop` property via @abstr_hyperlink \- Take into account card's alpha channel via @abstr_hyperlink 

Version @abstr_number . @abstr_number \- Swift @abstr_number support \- iOS @abstr_number frame bugfix

Version @abstr_number . @abstr_number \- Swift @abstr_number support \- Get rid of UInt \- Common bugfix

Version @abstr_number . @abstr_number 

  * Multiple Direction Support
  * Delegate methods for swipe disabling



Version @abstr_number . @abstr_number 

  * Ability to dynamically insert/delete/reload specific cards
  * External animator
  * Major refactoring. @abstr_hyperlink 
  * Swift @abstr_number . @abstr_number support



Version @abstr_number . @abstr_number 

  * Swift @abstr_number . @abstr_number support



Version @abstr_number . @abstr_number 

  * New delegate methods
  * Fixed minor issues



Version @abstr_number . @abstr_number 

  * Release version.



#### Apps using KolodaView

  * @abstr_hyperlink .



@abstr_image \- @abstr_hyperlink . \- @abstr_hyperlink . \- @abstr_hyperlink 

#### Let us know!

We’d be really happy if you sent us links to your projects where you use our component. Just send an email to github@yalantis.com And do let us know if you have any questions or suggestion regarding the animation.

P.S. We’re going to publish more awesomeness wrapped in code and a tutorial on how to make UI for iOS (Android) better than better. Stay tuned!

## License

The MIT License (MIT)

Copyright © @abstr_number Yalantis

Permission is hereby granted free of charge to any person obtaining a copy of this software and associated documentation files (the "Software") to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
