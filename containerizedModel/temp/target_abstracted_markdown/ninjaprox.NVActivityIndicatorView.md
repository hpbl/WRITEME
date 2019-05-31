# NVActivityIndicatorView

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Introduction

`NVActivityIndicatorView` is a collection of awesome loading animations.

This is original a fork from @abstr_hyperlink , inspired by @abstr_hyperlink , written in Swift with full implementation of animations, plus more.

You can also find Objective-C version of this @abstr_hyperlink .

## Demo

@abstr_image 

For first-hand experience, just open the project and run it.

## Animation types

| Type | Type | Type | Type | |---|---|---|---| | @abstr_number . ballPulse | @abstr_number . ballGridPulse | @abstr_number . ballClipRotate | @abstr_number . squareSpin| | @abstr_number . ballClipRotatePulse | @abstr_number . ballClipRotateMultiple | @abstr_number . ballPulseRise | @abstr_number . ballRotate| | @abstr_number . cubeTransition | @abstr_number . ballZigZag | @abstr_number . ballZigZagDeflect | @abstr_number . ballTrianglePath| | @abstr_number . ballScale | @abstr_number . lineScale | @abstr_number . lineScaleParty | @abstr_number . ballScaleMultiple| | @abstr_number . ballPulseSync | @abstr_number . ballBeat | @abstr_number . lineScalePulseOut | @abstr_number . lineScalePulseOutRapid| | @abstr_number . ballScaleRipple | @abstr_number . ballScaleRippleMultiple | @abstr_number . ballSpinFadeLoader | @abstr_number . lineSpinFadeLoader| | @abstr_number . triangleSkewSpin | @abstr_number . pacman | @abstr_number . ballGridBeat | @abstr_number . semiCircleSpin| | @abstr_number . ballRotateChase | @abstr_number . orbit | @abstr_number . audioEqualizer | @abstr_number . circleStrokeSpin|

## Installation

### Cocoapods

Install @abstr_hyperlink if need be.

@abstr_code_section 

Add `NVActivityIndicatorView` in your `Podfile`.

@abstr_code_section 

If you're using `NVActivityIndicatorView` in an app extension, use `NVActivityIndicatorView/AppExtension` instead.

@abstr_code_section 

Then, run the following command.

@abstr_code_section 

_ **Note:** Please refer to the migration note for version  <code>@abstr_number . @abstr_number . @abstr_number</code> below._

### Carthage

Install @abstr_hyperlink if need be.

@abstr_code_section 

Add `NVActivityIndicatorView` in your `Cartfile`.

@abstr_code_section 

Run `carthage` to build the framework and drag the built `NVActivityIndicatorView.framework` in the folder appropriateto the platform, e.g. iOS, tvOS, into your Xcode project.

_ **Note:** You might encounter compile issue, if so please use `carthage` branch instead. Check issue @abstr_hyperlink for more information._

### Manual

Copy `NVActivityIndicatorView` folder to your project. That's it.

_ **Note:** Make sure that all files in `NVActivityIndicatorView` included in Compile Sources in Build Phases._

_ **Note:** If you encounter issues while uploading the app to iTunes Connect, remove the `Info.plist` file in `NVActivityIndicatorView`. Check issue @abstr_hyperlink for more information._

## Migration

### Version @abstr_number . @abstr_number . @abstr_number

This version requires Xcode @abstr_number . @abstr_number and Swift @abstr_number . @abstr_number .

### Version @abstr_number . @abstr_number . @abstr_number

This version requires Xcode @abstr_number . @abstr_number and Swift @abstr_number .

### Version @abstr_number . @abstr_number . @abstr_number

This version splits `NVActivityIndicatorView` pod to @abstr_number subpods `NVActivityIndicatorView/Presenter` and `NVActivityIndicatorView/AppExtension`. There is no need to change `pod NVActivityIndicatorView` to `pod NVActivityIndicatorView/Presenter` since it will be installed by default if you use the main pod name.

However, if you want to use `NVActivityIndicatorView` in an app extension, use `pod NVActivityIndicatorView/AppExtension` instead.

_ **Note:** Related issue @abstr_hyperlink ._

## Usage

Firstly, import `NVActivityIndicatorView`.

@abstr_code_section 

### Initialization

Then, there are two ways you can create `NVActivityIndicatorView`:

  * By storyboard, changing class of any `UIView` to `NVActivityIndicatorView`.



_ **Note:** Set Module to `NVActivityIndicatorView`._

  * By code, using initializer. All parameters other than `frame` are optional and `NVActivityIndicatorView.DEFAULT_*` are used as default values.

@abstr_code_section 




### Control

Start animating.

@abstr_code_section 

Stop animating.

@abstr_code_section 

Determine if it is animating.

@abstr_code_section 

### Change properties

In storyboard, you can change all properties in Attributes inspector tab of Utilities panel.

_ **Note:** Use one of values (case-insensitive) in Animation types for `Type Name`._

All properties are public so you can change them after initializing.

_ **Note:** All changes must be made before calling `startAnimating()`._

### UI blocker

By conforming `NVActivityIndicatorViewable` protocol, you can use `NVActivityIndicatorView` as UI blocker for `UIViewController`.

@abstr_code_section 

Start animating.

@abstr_code_section 

Stop animating.

@abstr_code_section 

Check if it is animating.

@abstr_code_section 

Or you can use `NVActivityIndicatorPresenter` to display UI blocker anywhere.

Start animating.

@abstr_code_section 

_ **Note:** Check @abstr_hyperlink for detail of `ActivityData`._

Stop animating.

@abstr_code_section 

Change message.

@abstr_code_section 

Check if it is animating.

@abstr_code_section 

#### Fade in/out animation

You have control over showing and hiding UI blocker animation.

@abstr_code_section 

Check `DEFAULT_FADE_IN_ANIMATION` and `DEFAULT_FADE_OUT_ANIMATION` for examples of how to implement animation.

## Acknowledgment

Thanks @abstr_hyperlink for great loaders and @abstr_hyperlink for kick-start.

## License

The MIT License (MIT)

Copyright (c) @abstr_number Vinh Nguyen @abstr_hyperlink 
