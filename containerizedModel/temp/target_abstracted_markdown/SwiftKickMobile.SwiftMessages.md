# SwiftMessages

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

## Overview

SwiftMessages is a very flexible view and view controller presentation library for iOS.

Message views and view controllers can be displayed at the top, bottom, or center of the screen, over or under the status bar, or behind navigation bars and tab bars. There are interactive dismiss gestures including a fun, physics-based one. Multiple background dimming modes. And a lot more!

In addition to the numerous configuration options, SwiftMessages provides several good-looking layouts and themes. But SwiftMessages is also designer-friendly, which means you can fully and easily customize the view:

  * Copy one of the included nib files into your project and change it.
  * Subclass `MessageView` and add elements, etc.
  * Or just supply an arbitrary instance of `UIView`.



Try exploring @abstr_hyperlink to get a feel for the extensive configurability of SwiftMessages.

@abstr_image 

@abstr_hyperlink 

## View Controllers

SwiftMessages can present view controllers using the `SwiftMessagesSegue` custom modal segue!

@abstr_image 

<code>SwiftMessagesSegue</code> is a subclass of `UIStoryboardSegue` that integrates directly into Interface Builder as a custom modal segue, enabling view controllers to take advantage of SwiftMessages layouts, animations and more. `SwiftMessagesSegue` works with any UIKIt project — storyboards are not required. Refer to the View Controllers readme below for more information.

#### View Controllers Readme

And check out our blog post @abstr_hyperlink to learn a great technique you can use to build your own custom segues that utilize `UIViewControllerTransitioningDelegate` and `UIViewControllerAnimatedTransitioning`.

## Installation

### CocoaPods

Add the following line to your Podfile:

`@abstr_code_section`

### Carthage

Add the following line to your Cartfile:

`@abstr_code_section`

### Manual

@abstr_number . Put SwiftMessages repo somewhere in your project directory. @abstr_number . In Xcode, add `SwiftMessages.xcodeproj` to your project. @abstr_number . On your app's target, add the SwiftMessages framework: @abstr_number . as an embedded binary on the General tab. @abstr_number . as a target dependency on the Build Phases tab.

## Usage

### Basics

`@abstr_code_section`

Although you can show any instance of `UIView`, SwiftMessages provides a `MessageView` class and assortment of nib-based layouts that should handle most cases:

`@abstr_code_section`

You may wish to use the view provider variant `show(viewProvider:)` to ensure that your UIKit code is executed on the main queue:

`@abstr_code_section`

The `SwiftMessages.Config` struct provides numerous configuration options that can be passed to `show()`:

`@abstr_code_section`

Specify default configuration options:

`@abstr_code_section`

### Accessibility

SwiftMessages provides excellent VoiceOver support out-of-the-box.

  * The title and body of the message are combined into a single announcement when the message is shown. The `MessageView.accessibilityPrefix` property can be set to prepend additional clarifying text to the announcement.

Sometimes, a message may contain important visual cues that aren't captured in the title or body. For example, a message may rely on a yellow background to convey a warning rather than having the word "warning" in the title or body. In this case, it might be helpful to set `MessageView.accessibilityPrefix = "warning"`.

  * If the message is shown with a dim view using `config.dimMode`, elements below the dim view are not focusable until the message is hidden. If `config.dimMode.interactive == true`, the dim view itself will be focusable and read out "dismiss" followed by "button". The former text can be customized by setting the `config.dimModeAccessibilityLabel` property.




See the `AccessibleMessage` protocol for implementing proper accessibility support in custom views.

### Keyboard Avoidance

The `KeyboardTrackingView` class can be used to cause the message view to avoid the keyboard by sliding up when the keyboard gets too close.

`@abstr_code_section`

You can incorporate `KeyboardTrackingView` into your app even when you're not using SwiftMessages. Install into your view hierarchy by pinning `KeyboardTrackingView` to the bottom, leading, and trailing edges of the screen. Then pin the bottom of your content that should avoid the keyboard to the top `KeyboardTrackingView`. Use an equality constraint to strictly track the keyboard or an inequality constraint to only move when the keyboard gets too close. `KeyboardTrackingView` works by observing keyboard notifications and adjusting its height to maintain its top edge above the keyboard, thereby pushing your content up. See the comments in `KeyboardTrackingView` for configuration options.

### Message Queueing

You can call `SwiftMessages.show()` as many times as you like. SwiftMessages maintains a queue and shows messages one at a time. If your view implements the `Identifiable` protocol (like `MessageView`), duplicate messages will be removed automatically. The pause between messages can be adjusted:

`@abstr_code_section`

There are a few ways to hide messages programatically:

`@abstr_code_section`

Multiple instances of `SwiftMessages` can be used to show more than one message at a time. Note that the static `SwiftMessages.show()` and other static APIs on `SwiftMessage` are just convenience wrappers around the shared instance `SwiftMessages.sharedInstance`). Instances must be retained, thus it should be a property of something (e.g. your view controller):

`@abstr_code_section`

### Retrieving Messages

There are several APIs available for retrieving messages that are currently being shown, hidden, or queued to be shown. These APIs are useful for updating messages when some event happens without needing to keep temporary references around. See also `eventListeners`.

`@abstr_code_section`

### Customization

SwiftMessages can display any `UIView`. However, there are varying degrees of customization that can be done to the bundled views.

#### Nib Files

All of the message designs bundled with SwiftMessages have associated nib files. You are encouraged to copy any of these nib files into your project and modify them to suit your needs. SwiftMessages will load your copy of the file instead of the original. Nib files may be copied in Xcode using drag-and-drop.

To facilitate the use of nib-based layouts, `MessageView` provides some type-safe convenience methods for loading the bundled nibs:

`@abstr_code_section`

In addition, the `SwiftMessages` class provides some generic loading methods:

`@abstr_code_section`

#### MessageView Class

<code>MessageView</code> is a light-weight view that all of the bundled designs use. It primarily consists of the following optional `@IBOutlet` properties:

Element | Declaration | Description \--------|-----------|----- Title | `titleLabel: UILabel?` | The message title. Message body | `bodyLabel: UILabel?` | The body of the message. Image icon | `iconImageView: UIImageView?` | An image-based icon. Text icon | `iconLabel: UILabel?` | A text-based (emoji) alternative to the image icon. Button | `button: UIButton?` | An action button.

The SwiftMessages nib file use `MessageView` as the top-level view with content connected to these outlets. The layouts are done using stack views, which means that you can remove an element by simply hiding it:

`@abstr_code_section`

A common mistake is attempting to remove an element by setting the corresponding outlet to `nil`. This does not work because it does not remove the element from the view hierarchy.

#### Configuration

`MessageView` provides numerous methods that follow the `configure*` naming convention:

`@abstr_code_section`

All of these methods are shortcuts for quickly configuring the underlying view properties. SwiftMessages strives to avoid doing any internal magic in these methods, so you do not need to call them. You can configure the view properties directly or combine the two approaches.

#### Interaction

`MessageView` provides an optional block-based tap handler for the button and another for the view itself:

`@abstr_code_section`

#### Extending

The suggested method for starting with `MessageView` as a base and __adding new elements__, such as additional buttons, is as follows:

@abstr_number . Copy one of the bundled nib files into your project or create a new one from scratch. @abstr_number . Add new elements to the nib file. @abstr_number . Sublcass `MessageView` and create outlets for the new elements. @abstr_number . Assign the top-level view in the nib file to the subclass. @abstr_number . Connect outlets between the nib file and the subclass. @abstr_number . (recommended) override the implementation of `Identifiable` as needed to incorporate new elements into the message's identity. @abstr_number . (recommended) override the implementation of `AccessibleMessage` as needed to incorporate new elements into Voice Over. @abstr_number . Use one of the nib-loading methods above to load the view.

#### BaseView Class

<code>BaseView</code> is the superclass of `MessageView` and provides numerous options that aren't specific to the "title + body + icon + button" design of `MessageView`. Custom views that are significantly different from `MessageView`, such as a progress indicator, should subclass `BaseView`.

#### CornerRoundingView Class

<code>CornerRoundingView</code> is a custom view that messages can use for rounding all or a subset of corners with squircles (the smoother method of rounding corners that you see on app icons). The nib files that feature rounded corners have `backgroundView` assigned to a `CornerRoundingView`. It provides a `roundsLeadingCorners` option to dynamically round only the leading corners of the view when presented from top or bottom (a feature used for the tab-style layouts).

#### Animator Protocol

<code>Animator</code> is the protocol that SwiftMessages uses for presentation and dismissal animations. Custom animations can be done through the `SwiftMessages.PresentationStyle.custom(animator:)`. Some related components: * <code>TopBottomAnimation</code> is a sliding implementation of `Animator` used internally by `.top` and `.bottom` presentation styles. It provides some customization options. * <code>PhysicsAnimation</code> is a scaling + opacity implementation of `Animator` used internally by the `.center` presentation style. It provides a fun physics-based dismissal gesture and provides customization options including `.top` and `.bottom` placement. * <code>PhysicsPanHandler</code> provides the physics-based dismissal gesture for `PhysicsAnimation` and can be incorporated into other `Animator` implementations.

High-quality PRs for cool `Animator` implementations are welcome!

#### MarginAdjustable Protocol

<code>MarginAdjustable</code> is a protocol adopted by `BaseView`. If the view being presented adopts `MarginAdjustable`, SwiftMessages takes ownership of the view's layout margins to ensure ideal spacing across the full range of presentation contexts.

#### BackgroundViewable Protocol

<code>BackgroundViewable</code> is a protocol adopted by `BaseView` and requires that a view provide a single `backgroundView` property. `BaseView` initializes `backgroundView = self`, which you can freely re-assign to any subview.

If the view being presented adopts `BackgroundViewable`, SwiftMessages will ignore touches outside of `backgroundView`. This is important because message views always span the full width of the device. Card and tab-style layouts appear inset from the edges of the device because the message view's background is transparent and `backgroundView` is assigned to a subview constrained to the layout margins. In these layouts, touches in the transparent margins should be ignored.

#### Identifiable Protocol

<code>Identifiable</code> is a protocol adopted by `MessageView` and requires that a view provide a single `id` property, which SwiftMessages uses for message deduplication.

`MessageView` computes the `id` based on the message content, but `id` can also be set explicitly as needed.

#### AccessibleMessage Protocol

<code>AccessibleMessage</code> is a protocol adopted by `MessageView`. If the view being presented adopts `AccessibleMessage`, SwiftMessages provides improved Voice Over.

## About SwiftKick Mobile

We build high quality apps! @abstr_hyperlink if you need help with a project.

## License

SwiftMessages is distributed under the MIT license. See LICENSE for details.
