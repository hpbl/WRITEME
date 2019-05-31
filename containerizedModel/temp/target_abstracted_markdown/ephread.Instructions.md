#  @abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Add customizable coach marks into your iOS project. Available for both iPhone and iPad.

# Table of contents

  * Overview
  * Features
  * Requirements
  * Asking Questions / Contributing 
    * Asking Questions
    * Contributing
  * Installation 
    * CocoaPods
    * Carthage
    * Manually
  * Usage 
    * Getting Started
    * Advanced Usage
  * Usage within App Extensions
  * License



## Overview

@abstr_image 

## Features

  * [x] [Customizable highlight system](#advanced-usage)
  * [x] [Customizable views](#providing-custom-views)
  * [x] [Customizable positions](#customizing-how-the-coach-mark-will-show)
  * [x] [Skipable tour](#let-users-skip-the-tour)
  * [x] [Pilotable from code](#piloting-the-flow-from-the-code)
  * [x] [App Extensions support](#usage-within-app-extensions)
  * [x] [Animatable coach marks](#animating-coach-marks)
  * [x] Right-to-left support
  * [x] Size transition support (orientation and multi-tasking)
  * [x] Partial `UIVisualEffectView` support
  * [ ] Cross controllers walkthrough
  * [ ] Multiple coach marks support



## Requirements

  * Xcode @abstr_number / Swift @abstr_number +
  * iOS @abstr_number . @abstr_number +



## Asking Questions / Contributing

### Asking questions

If you need help with something in particular, ask a question in the @abstr_hyperlink .

### Contributing

If you want to contribute, be sure to take a look at [the contributing guide].

## Installation

⚠️ [Git LFS] is required to clone Instructions or build it through your favorite package manager (all the snapshots used in the tests are stored in a submodule through LFS).

### CocoaPods

Add Instructions to your Podfile:

@abstr_code_section 

Then, run the following command:

@abstr_code_section 

### Carthage

Add Instructions to your Cartfile:

@abstr_code_section 

You can then update, build and drag the generated framework into your project:

@abstr_code_section 

### Manually

If you rather stay away from both CocoaPods and Carthage, you can also install Instructions manually, with the cost of managing updates yourself.

#### Embedded Framework

@abstr_number . Drag the Instructions.xcodeproj into the project navigator of your application's Xcode project. @abstr_number . Still in the project navigator, select your application project. The target configuration panel should show up. @abstr_number . Select the appropriate target and in the "General" panel, scroll down to the section named "Embedded Binaries". @abstr_number . Click on the + button and select the "Instructions.framework" under the "Product" directory.

## Usage

### Getting started

Open up the controller for which you wish to display coach marks and instantiate a new `CoachMarksController`. You should also provide a `dataSource`, which is an object conforming to the `CoachMarksControllerDataSource` protocol.

@abstr_code_section 

#### Data Source

`CoachMarksControllerDataSource` declares three mandatory methods.

The first one asks for the number of coach marks to display. Let's pretend that you want to display only one coach mark. Note that the `CoachMarksController` requesting the information is supplied, allowing you to supply data for multiple `CoachMarksController`, within a single dataSource.

@abstr_code_section 

The second one asks for metadata. This allows you to customize how a coach mark will position and appear, but won't let you define its look (more on this later). Metadata are packaged in a struct named `CoachMark`. Note the parameter `coachMarkAt`, it gives you the coach mark logical position, much like and `IndexPath` would do. `coachMarksController` provides you with an easy way to create a default `CoachMark` object, from a given view.

@abstr_code_section 

The third one supplies two views (much like `cellForRowAtIndexPath`) in the form a Tuple. The _body_ view is mandatory, as it's the core of the coach mark. The _arrow_ view is optional.

But for now, lets just return the default views provided by Instructions.

@abstr_code_section 

#### Starting the coach marks flow

Once the `dataSource` is set up, you can start displaying the coach marks. You will most likely supply `self` to `start`. While the overlay adds itself as a child of the current window (to be on top of everything), the `CoachMarksController` will add itself as a child of the view controller you provide. That way, the `CoachMarksController` will receive size change events and react accordingly. Be careful, you can't call `start` in the `viewDidLoad` method, since the view hierarchy has to be set up and ready for Instructions to work properly.

@abstr_code_section 

#### Stopping the coach marks flow

You should always stop the flow, once the view disappear. To avoid animation artefacts and timing issues, don't forget to add the following code to your `viewWillDisappear` method. Calling `stop(immediately: true)` will ensure that the flow is stopped immediately upon the disappearance of the view.

@abstr_code_section 

You're all set. For more examples you can check the `Examples/` directory provided with the library.

### Advanced Usage

#### Customizing general properties

You can customized the background color of the overlay using this property:

  * `overlay.color`



You can also make the overlay blur the content sitting behind it. Setting this property to anything else than `nil` will disable the `overlay.color`:

  * `overlay.blurEffectStyle: UIBlurEffectStyle?`



Last, you can make the overlay tappable. A tap on the overlay will hide the current coach mark and display the next one.

  * `overlay.allowTap: Bool`



⚠️ The blurring overlay is not supported in app extensions.

#### Providing a custom cutout path

If you dislike how the default cutout path looks like, you can customize it by providing a block to `makeCoachMark(for:)`. The cutout path will automatically be stored in the `cutoutPath` property of the returning `CoachMark` object:

@abstr_code_section 

`frame` will be the frame of `customView` converted in the `coachMarksController.view` referential, so don't have to worry about making sure the coordinates are in the appropriate referential. You can provide any kind of shape, from a simple rectangle to a complex star.

#### Providing custom views

You can (and you should) provide custom views. A coach mark is composed of two views, a _body_ view and an _arrow_ view. Note that the term _arrow_ might be misleading. It doesn't have to be an actual arrow, it can be anything you want.

A _body_ view must conform to the `CoachMarkBodyView` protocol. An _arrow_ view must conform to the `CoachMarkArrowView` protocol. Both of them must also be subclasses of `UIView`.

Returning a `CoachMarkBodyView` view is mandatory, while returning a `CoachMarkArrowView` is optional.

##### CoachMarkBodyView Protocol

This protocol defines two properties.

  * `nextControl: UIControl? { get }` you must implement a getter method for this property in your view, this will let the `CoachMarkController` know which control should be tapped, to display the next coach mark. Note that it doesn't have to be a subview, you can return the view itself.

  * `highlightArrowDelegate: CoachMarkBodyHighlightArrowDelegate?` in case the view itself is the control receiving taps, you might want to forward its highlight state to the _arrow_ view (so they can look as if they are the same component). The `CoachMarkController` will automatically set an appropriate delegate to this property. You'll then be able to do this:

@abstr_code_section 




##### Taking orientation into account

Remember the following method, from the dataSource?

@abstr_code_section 

When providing a customized view, you need to provide an _arrow_ view with the approriate orientation (i. e. in the case of an actual arrow, pointing upward or downward). The `CoachMarkController` will tell you which orientation it expects, through the following property: `CoachMark.arrowOrientation`.

Browse the `Example/` directory for more details.

#### Presentation Context

You can choose in which context the coach marks will be displayed, by passing it to `start(in: PresentationContext). The available contexts are:

  * `.newWindow(over: UIViewController, at: UIWindowLevel?)` – A new window created at the given `UIWindowLevel` (not available in app extensions);
  * `.currentWindow(of: UIViewController)` – The window displaying the given `UIViewController`;
  * `.viewController(_: UIViewController)` – In the `view` of the given `UIViewController`.



Additionally, you can also provide use `window(over: UIViewController)`, which is a convience static method equivalent to calling `.newWindow(over: UIViewController, at: UIWindowLevelNormal + @abstr_number )`.

⚠️ When using a blur effect on the overlay, setting the window level to anything above `UIWindowLevelStatusBar` is not supported.

#### Customizing how the coach mark will show

You can customize the following properties:

  * `gapBetweenBodyAndArrow: CGFloat`: the vertical gap between the _body_ and the _arrow_ in a given coach mark.

  * `pointOfInterest: CGPoint?`: the point toward which the arrow will face. At the moment, it's only used to shift the arrow horizontally and make it sits above or below the point of interest.

  * `gapBetweenCoachMarkAndCutoutPath: CGFloat`: the gap between the coach mark and the cutout path.

  * `maxWidth: CGFloat`: the maximum width a coach mark can take. You don't want your coach marks to be too wide, especially on iPads.

  * `horizontalMargin: CGFloat` is the margin (both leading and trailing) between the edges of the overlay view and the coach mark. Note that if the max width of your coach mark is less than the width of the overlay view, you view will either stack on the left or on the right, leaving space on the other side.

  * `arrowOrientation: CoachMarkArrowOrientation?` is the orientation of the arrow (not the coach mark, meaning setting this property to `.Top` will display the coach mark below the point of interest). Although it's usually pre-computed by the library, you can override it in `coachMarksForIndex:` or in `coachMarkWillShow:`.

  * `displayOverCutoutPath: Bool` enables the coach mark to be displayed over the cutout path; please note that arrows won't be visible if you set this property to `true`

  * `disableOverlayTap: Bool` is used to disable the ability to tap on the overlay to show the next coach mark, on a case-by-case basis.

  * `allowTouchInsideCutoutPath: Bool` is used to allow touch forwarding inside the cutout path. Take a look at `TransitionFromCodeViewController`, in the `Example/` directory, for more information.




#### Animating coach marks

To animates coach marks, you will need to implement the `CoachMarksControllerAnimationDelegate` protocol.

@abstr_code_section 

All methods from this delegate work in similar ways. First, you will need to specify the general parameters of the animation via `manager.parameters` properties. These properties match the configuration parameters that you can provide to `UIView.animate`.

  * `duration: TimeInterval`: the total duration of the animation.

  * `delay: TimeInterval`: the amount of time to wai before beginning the animations

  * `options: UIViewAnimationOptions`: a mask of options indicating how you want to perform the animations (for regular animations).

  * `keyframeOptions: UIViewKeyframeAnimationOptions`: a mask of options indicating how you want to perform the animations (for keyframe animations).




Once you've set the parameters, you should provide your animations by calling `manager.animate`. The method signature is different wether you are animating the idle state of coach marks, or making them appear/disappear.

You should provide your animations in a block passed to the `animate` parameter, in a similar fashion to `UIView.animate`. If you need to access the animation parameters or the coach mark metadata, a `CoachMarkAnimationManagementContext` containing these will be provided to your animation block. You shouldn't capture a reference to manager from the animation block.

For an implemntation example, you can also take a look a the `DelegateViewController` class found in the `Example` directory.

##### Appearance and disappearance specifics

If you need to define an initial state, you should do so by providing a block to the `fromInitialState` property. While directly setting values on `coachMarkView` in the method before calling `manager.animate()` might work, it's not garanteed to.

#### Let users skip the tour

##### Control

You can provide the user with a mean to skip the coach marks. First, you will need to set `skipView` with a `UIView` conforming to the `CoachMarkSkipView` protocol. This protocol defines a single property:

@abstr_code_section 

You must implement a getter method for this property in your view. This will let the `CoachMarkController` know which control should be tapped, to skip the tour. Note that, again, it doesn't have to be a subview, you can return the view itself.

As usual, Instructions provides a default implementation of `CoachMarkSkipView` named `CoachMarkSkipDefaultView`.

##### dataSource

To define how the view will position itself, you can use a method from the `CoachMarkControllerDataSource` protocol. This method is optional.

@abstr_code_section 

This method will be called by the `CoachMarksController` before starting the tour and whenever there is a size change. It gives you the _skip button_ and the view in which it will be positioned and expects an array of `NSLayoutConstraints` in return. These constraints will define how the _skip button_ will be positioned in its parent. You should not add the constraints yourself, just return them.

Returning `nil` will tell the `CoachMarksController` to use the defaults constraints, which will position the _skip button_ at the top of the screen. Returning an empty array is discouraged, as it will most probably lead to an akward positioning.

For more information about the skip mechanism, you can check the `Example/` directory.

#### Piloting the flow from the code

Should you ever need to programmatically show the coach mark, `CoachMarkController.flow` also provides the following methods:

@abstr_code_section 

@abstr_code_section 

You can specify a number of coach marks to skip (effectively jumping forward or backward to a further index).

Take a look at `TransitionFromCodeViewController`, in the `Example/` directory, to get an idea of how you can leverage this method, in order to ask the user to perform certain actions.

#### Using a delegate

The `CoachMarkController` will notify the delegate on multiple occasions. All those methods are optionals.

First, when a coach mark will show. You might want to change something about the view. For that reason, the `CoachMark` metadata structure is passed as an `inout` object, so you can update it with new parameters.

@abstr_code_section 

Second, when a coach mark disappears.

@abstr_code_section 

Third, when all coach marks have been displayed. `didEndShowingBySkipping` specify whether the flow completed because the user requested it to end.

@abstr_code_section 

##### React when the user tap the overlay

Whenever the user will tap the overlay, you will get notified through:

@abstr_code_section 

Returning `true` will let Instructions continue the flow normally, while returning `false` will interrupt it. If you choose to interrupt the flow, you're responsible for either stopping or pausing it or manually show the next coach marks (see Piloting the flow from the code).

`index` is the index of the coach mark currently displayed.

##### Pausing and resuming the flow

It's as simple as calling `coachMarksController.flow.pause()` and `coachMarksController.flow.resume()`. While pausing, you can also choose to hide Instructions's overlay altogether (`.pause(and: hideInstructions)`), or only hide the overlay and retain its touch blocking capabilities (`.pause(and: hideOverlay)`).

##### Performing animations before showing coach marks

You can perform animation on views, before or after showing a given coach mark. For instance, you might want to collapse a table view and show only its header, before referring to those headers with a coach mark. Instructions offers a simple way to insert your own animations into the flow.

For instance, let's say you want to perform an animation _before_ a coach mark shows. You'll implement some logic into the `coachMarkWillShow` delegate method. To ensure you don't have to hack something up and turn asynchronous animation blocks into synchronous ones, you can pause the flow, perform the animation and then start the flow again. This will ensure your UI never get stalled.

@abstr_code_section 

⚠️ Since the blurring overlay snapshots the view during coach mark appearance/disappearance, you should make sure that animations targeting your own view don't occur while a coach mark is appearing or disappearing. Otherwise, the animation won't be visible.

You may also want to customize the properties defining the of for the classic transparency overlay, as Instructions will fall back to using the classic type if `UIAccessibilityIsReduceTransparencyEnabled()` returns true.

##### Skipping a coach mark

You can skip a given coach mark by implementing the following method defined in `CoachMarksControllerDelegate`:

@abstr_code_section 

`coachMarkWillLoadAt:` is called right before a given coach mark will show. To prevent a CoachMark from showing, you can return `false` from this method.

##### Customizing ornaments of the overlay

It's possible to add custom views which will be displayed over the overlay by implementing the following method of `CoachMarksControllerDelegate`:

@abstr_code_section 

Just add the ornaments to the provided view (`overlay`) and Instructions should take care of the rest. Please note, however, that these ornaments will be displayed over the cutout, but under the coach marks.

#### Dealing with frame changes

Since Instructions doesn't hold any reference to the _views of interest_, it cannot respond to their change of frame automatically.

Instructions provide two methods to deal with frame changes.

  * `CoachMarkController.prepareForChange()`, called before a change of frame, to hide the coach mark and the cutout path.
  * `CoachMarkController.restoreAfterChangeDidComplete()`, called after a change of frame to show the coach mark and the cutout again.



Although you can call these methods at any time while Instructions is idle, the result will not look smooth if the coach mark is already displayed. It's make the changes occur between two coach marks, by pausing and resuming the flow. [`KeyboardViewController`] shows an example of this technique.

### Usage within App Extensions

If you wish to add Instructions within App Extensions, there's additional work you need to perform. An example is available in the `App Extensions Example/` directory.

#### Dependencies

Instructions comes with two shared schemes, `Instructions` and `InstructionsAppExtensions`. The only differences between the two is that `InstructionsAppExtensions` does not depend upon the `UIApplication.sharedApplication()`, making it suitable for App Extensions.

In the following examples, let's consider a project with two targets, one for a regular application (`Instructions App Extensions Example`) and another for an app extension (`Keyboard Extension`).

#### CocoaPods

If you're importing Instructions with CocoaPods, you'll need to edit your `Podfile` to make it look like this:

@abstr_code_section 

If Instructions is only imported from within App Extension target, you don't need the first block.

When compiling either targets, CocoaPods will make sure the appropriate flags are set, thus allowing/forbidding calls to `UIApplication.sharedApplication()`. You don't need to change your code.

#### Frameworks (Carthage / Manual management)

If you're importing Instructions through frameworks, you'll notice that the two shared schemes (`Instructions` and `InstructionsAppExtensions`) both result in different frameworks.

You need to embed both frameworks and link them to the proper targets. Make sure they look like theses:

**Instructions App Extensions Example** @abstr_image 

**Keyboard Extension** @abstr_image 

If you plan to add Instructions only to the App Extension target, you don't need to add `Instructions.frameworks`.

##### Import statements

When importing Instructions from files within `Instructions App Extensions Example`, you should use the regular import statement:

@abstr_code_section 

However, when importing Instructions from files within `Keyboard Extension`, you should use the specific statement:

@abstr_code_section 

⚠️ **Please be extremely careful** , as you will be able to import regular _Instructions_ from within an app extension without breaking anything. It will work. However, you're at a high risk of rejection from the Apple Store. Uses of `UIApplication.sharedApplication()` are statically checked during compilation but nothing prevents you from performing the calls at runtime. Fortunately Xcode should warn you if you've mistakenly linked with a framework not suited for App Extensions.

## License

Instructions is released under the MIT license. See LICENSE for details.
