@abstr_hyperlink 

@abstr_hyperlink 

ANIMATED TAB BAR

Swift UI module library for adding animation to iOS tabbar items and icons. ___ 

We specialize in the designing and coding of custom UI for Mobile Apps and Websites. @abstr_hyperlink 

Stay tuned for the latest updates: @abstr_hyperlink 

Get Free Mockup For your project →

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Requirements

  * iOS @abstr_number . @abstr_number +
  * Xcode @abstr_number . @abstr_number 



## Installation

Just add the RAMAnimatedTabBarController folder to your project.

or use @abstr_hyperlink with Podfile: @abstr_code_section 

or @abstr_hyperlink users can simply add to their `Cartfile`: @abstr_code_section 

## Usage

@abstr_number . Create a new UITabBarController in your storyboard or nib.

@abstr_number . Set the class of the UITabBarController to RAMAnimatedTabBarController in your Storyboard or nib.

@abstr_number . For each UITabBarItem, set the class to RAMAnimatedTabBarItem.

@abstr_number . Add a custom image icon for each RAMAnimatedTabBarItem

@abstr_number . Add animation for each RAMAnimatedTabBarItem : * drag and drop an NSObject item into your ViewController * set its class to ANIMATION_CLASS (where ANIMATION_CLASS is the class name of the animation you want to use) * connect the outlet animation in RAMAnimatedTabBarItem to your ANIMATION_CLASS @abstr_hyperlink 

## Included Animations

  * RAMBounceAnimation
  * RAMLeftRotationAnimation
  * RAMRightRotationAnimation
  * RAMFlipLeftTransitionItemAnimations
  * RAMFlipRightTransitionItemAnimations
  * RAMFlipTopTransitionItemAnimations
  * RAMFlipBottomTransitionItemAnimations
  * RAMFrameItemAnimation
  * RAMFumeAnimation



## Creating Custom Animations

@abstr_number . Create a new class which inherits from RAMItemAnimation:

@abstr_code_section @abstr_number . Implement the methods in RAMItemAnimationProtocol:

@abstr_code_section   
@abstr_code_section   
@abstr_code_section 

@abstr_number . Example:

@abstr_code_section 

## 📄 License

Animated Tab Bar is released under the MIT license. See LICENSE for details.

This library is a part of a @abstr_hyperlink 

If you use the open-source library in your project, please make sure to credit and backlink to www.ramotion.com

## 📱 Get the Showroom App for iOS to give it a try

Try this UI component and more like this in our iOS app. Contact us if interested.

@abstr_hyperlink 

@abstr_hyperlink   
  

