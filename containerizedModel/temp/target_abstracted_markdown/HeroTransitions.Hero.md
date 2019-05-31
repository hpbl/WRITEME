@abstr_image 

**Hero** is a library for building iOS view controller transitions. It provides a declarative layer on top of the UIKit's cumbersome transition APIs—making custom transitions an easy task for developers.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_image @abstr_image @abstr_image @abstr_hyperlink @abstr_hyperlink 

@abstr_image @abstr_image 

Hero is similar to Keynote's **Magic Move**. It checks the `heroID` property on all source and destination views. Every matched view pair is then automatically transitioned from its old state to its new state.

Hero can also construct animations for unmatched views. It is easy to define these animations via the `heroModifiers` property. Hero will run these animations alongside the **Magic Move** animations. All of these animations can be **interactively controlled** by user gestures.

At view controller level, Hero provides several template transitions that you can set through `heroModalAnimationType`, `heroNavigationAnimationType`, and `heroTabBarAnimationType`. These can be used as the foundation of your custom transitions. Combine with `heroID` & `heroModifiers` to make your own unique transitions.

@abstr_image @abstr_image 

By default, Hero provides **dynamic duration** based on the @abstr_hyperlink . Duration is automatically determined by changes to distance and size—saving you the hassle, while providing consistent and delightful animations.

Hero doesn't make any assumptions about how the view is built or structured. It won't modify any of your views' states other than hiding them during the animation. This makes it work with **Auto Layout** , **programmatic layout** , **UICollectionView** (without modifying its layout object), **UITableView** , **UINavigationController** , **UITabBarController** , etc... 

## Example Gallery

Checkout the @abstr_hyperlink for a general idea of what you can achieve with **Hero**

## Usage Example @abstr_number

@abstr_image 

##### View Controller @abstr_number

@abstr_code_section 

##### View Controller @abstr_number

@abstr_code_section 

## Usage Example @abstr_number

@abstr_image 

##### View Controller @abstr_number

@abstr_code_section 

##### View Controller @abstr_number

@abstr_code_section 

You can do these in the **storyboard** too!

@abstr_image @abstr_image 

## Installation

### CocoaPods

Add the following entry to your Podfile:

@abstr_code_section 

Then run `pod install`.

Don't forget to `import Hero` in every file you'd like to use Hero.

### Carthage

Add the following entry to your `Cartfile`:

@abstr_code_section 

Then run `carthage update`.

If this is your first time using Carthage in the project, you'll need to go through some additional steps as explained @abstr_hyperlink .

### Swift Package Manager

To integrate using Apple's Swift package manager, add the following as a dependency to your `Package.swift`:

@abstr_code_section 

and then specify `"Hero"` as a dependency of the Target in which you wish to use Hero. Here's an example `PackageDescription`:

@abstr_code_section 

### Manually

  * Drag the **Sources** folder anywhere in your project.



## Documentations

Checkout the **@abstr_hyperlink** for documentations. 

For more up-to-date ones, please see the header-doc. (use **alt+click** in Xcode) @abstr_image 

## Interactive Transition Tutorials

@abstr_hyperlink 

## FAQ

#### Not able to use Hero transition even when `self.hero.isEnabled` is set to true

Make sure that you have also enabled `self.hero.isEnabled` on the navigation controller if you are doing a push/pop inside the navigation controller.

#### Views being covered by another matched view during the transition

Matched views use global coordinate space while unmatched views use local coordinate space by default. Local coordinate spaced views might be covered by other global coordinate spaced views. To solve this, use the `useGlobalCoordinateSpace` modifier on the views being covered. Checkout @abstr_hyperlink for details.

#### Push animation is shown along side my custom animation

This is the default animation for navigation controller provided by Hero. To disable the push animation, set `self.hero.navigationAnimationType` to `.fade` or `.none` on the navigation controller.

#### How do I use a different default animation when dismissing

You can use the animation type `.selectBy(presenting:dismissing)` to specify a different default animation for dismiss.

For example:

@abstr_code_section 

## Contribute

We welcome any contributions. Please read the @abstr_hyperlink .
