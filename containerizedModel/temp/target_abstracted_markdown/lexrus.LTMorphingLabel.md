# LTMorphingLabel

@abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_image 

A morphing UILabel subclass written in Swift. The `.Scale` effect mimicked @abstr_hyperlink in WWDC @abstr_number . New morphing effects are available as Swift extensions.

## enum LTMorphingEffect: Int, Printable

#### .Scale - _default_

@abstr_image 

####  @abstr_hyperlink 

@abstr_image 

####  @abstr_hyperlink 

@abstr_image 

####  @abstr_hyperlink 

@abstr_image 

####  @abstr_hyperlink 

@abstr_image 

`.Sparkle` is built on top of QuartzCore.CAEmitterLayer. There's also a @abstr_hyperlink .

####  @abstr_hyperlink 

@abstr_image 

####  @abstr_hyperlink 

@abstr_image 

## Requirements

@abstr_number . Xcode @abstr_number @abstr_number . iOS @abstr_number . @abstr_number +

## Installation

###  @abstr_hyperlink 

@abstr_number . Add this line to your Cartfile: `github "lexrus/LTMorphingLabel"` @abstr_number . Read the @abstr_hyperlink 

###  @abstr_hyperlink 

@abstr_number . Install the latest release of CocoaPods: `gem install cocoapods` @abstr_number . Add this line to your Podfile: `pod 'LTMorphingLabel'` @abstr_number . Install the pod: `pod install`

## Usage

@abstr_number . Change the class of a label from UILabel to LTMorphingLabel; @abstr_number . Programmatically set a new String to its text property. @abstr_number . To use interactively, call `.pause()` after changing `.text` property, and use `updateProgress(progress: Float)`to update the progress interactively.

## Unit tests

Open the project with Xcode then press command + u.

## Alternative

Even though this lib was used in @abstr_hyperlink , it’s still an experimental project. Frankly, there’re some nice competitors out there guarantee both compatibility and stability. And the most outstanding one is @abstr_hyperlink . I’d like to recommend it for production use.

And finally, @abstr_hyperlink .

## Third Party Bindings

### React Native

You may now use this library with @abstr_hyperlink via the module @abstr_hyperlink 

## Donation

Buy me a coffee? Here is my wallet:

BTC: `@abstr_number MnMu @abstr_number Q @abstr_number UK @abstr_number dRbwjhwqWSBVLWxy @abstr_number SPk @abstr_number b`

ETH: `@abstr_number x @abstr_number F @abstr_number bE @abstr_number cBA @abstr_number EE @abstr_number EF @abstr_number a @abstr_number aA @abstr_number B @abstr_number fD @abstr_number E @abstr_number A`

## License

This code is distributed under the terms and conditions of the MIT license.
