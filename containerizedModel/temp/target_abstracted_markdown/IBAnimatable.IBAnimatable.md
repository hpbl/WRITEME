@abstr_image 

Design and prototype customized UI, interaction, navigation, transition and animation for App Store ready Apps in Interface Builder with IBAnimatable.

@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**The app was made in Interface Builder with`IBAnimatable` without a single line of code**. Due to the size of @abstr_hyperlink , it only demonstrates a subset of features. We can also find the full HD version on @abstr_hyperlink or @abstr_hyperlink 

## Key features

  * ✅ _* @abstr_number % compatible with`UIKit`_ *. All `IBAnimatable` APIs are extensions of `UIKit`. No pollutions to `UIKit`'s APIs.
  * ✅ _* @abstr_number % compatible with Auto Layout and Size Classes_ *. No custom layout system.
  * ✅ **User interface design and preview in IB** : corner radius, border, mask, shadow, gradient colors, tint color, blur effect etc.
  * ✅ **Animation design in IB** : slide in/out, fade in/out, zoom in/out, flip, pop, shake, rotate, move etc.
  * ✅ **Transition design in IB** : fade, slide, flip, cube, portal, fold, explosion etc.
  * ✅ **Interactive gesture design in IB** : pan, screen edge pan, pinch etc. 
  * ✅ **Presentation design in IB** : flip, cover, zoom, dropdown etc.
  * ✅ **Activity indicator design in IB** : ball beat, ball rotate, cube transition, Pacman etc. 



@abstr_image 

Here is the full design in a Storyboard in Interface Builder.

With `IBAnimatable`, we can design a UI in Interface Builder like what we can do in Sketch, and prototype animations in a Swift playground like what we can do in Framer. Also, we can use the output of the design directly in the production ready App.

As a designer, we love Sketch, which is a simple but yet super powerful tool to create UI. However, Sketch can't design interaction, navigation, transition and animation, and we may need another tool like Framer to design some of them. Moreover, to make an App Store ready App, we need to use Xcode and Interface Builder to implement the UI and animations. To speed up the process and minimize the waste, we create `IBAnimatable` to make Interface Builder designable and animatable. 

## How to install

### Manually install

Copy and paste `IBAnimatable` folder in your Xcode project.

###  @abstr_hyperlink 

To integrate using Apple's Swift package manager, add the following as a dependency to your `Package.swift`:

@abstr_code_section 

###  @abstr_hyperlink 

Add the following entry in your Podfile:

@abstr_code_section 

###  @abstr_hyperlink 

Add the following entry in your Cartfile:

@abstr_code_section 

###  @abstr_hyperlink 

Add the following etnry in your Package.swift:

@abstr_code_section 

Next, add `IBAnimatable` to your App targets dependencies like so:

@abstr_code_section 

Please Notice, there is @abstr_hyperlink , that will impact on `IBAnimatable` when you use Carthage or Accio. There is a workaround to use Carthage, Accio or Swift package manager with `IBAnimatable`, please have a look at @abstr_hyperlink 

As @DanielAsher mentioned

> I use carthage update --use-submodules --no-build --no-use-binaries and manually add the both the framework project and the framework as an embedded dependency. This method is robust, and fine-grained, but perhaps not as easy as dragging the built framework into your project.

### Git submodule

Add this repo as a submodule, and add the project file to your workspace. You can then link against `IBAnimatable.framework` for your application target. 

## Version @abstr_number . @abstr_number

IBAnimatable @abstr_number . @abstr_number is the latest major release of IBAnimatable. This version supports Swift @abstr_number . @abstr_number . There are no API breaking changes from migrating from version @abstr_number .x. 

If you migrate from version @abstr_number .x. Please check out IBAnimatable @abstr_number . @abstr_number Migration Guide for more information.

## Swift version

### Swift @abstr_number . @abstr_number

There are no API breaking changes when migrating from Swift @abstr_number .* to Swift @abstr_number . @abstr_number using IBAnimatable.

If you are using Xcode @abstr_number with Swift @abstr_number . @abstr_number , please use the latest tagged @abstr_number .x release.

### Swift @abstr_number . @abstr_number

There are no API breaking changes when migrating from Swift @abstr_number to Swift @abstr_number . @abstr_number using IBAnimatable.

If you are using Xcode @abstr_number . @abstr_number with Swift @abstr_number . @abstr_number , please use the latest tagged @abstr_number .x release.

### Swift @abstr_number

There are no API breaking changes when migrating from Swift @abstr_number . @abstr_number to Swift @abstr_number using IBAnimatable.

If you are using Xcode @abstr_number with Swift @abstr_number , please use the latest tagged @abstr_number .x release.

### Swift @abstr_number . @abstr_number

There are no API breaking changes when migrating from Swift @abstr_number . @abstr_number to Swift @abstr_number . @abstr_number using IBAnimatable.

If you are using Xcode @abstr_number and Swift @abstr_number . @abstr_number , please use the @abstr_number . @abstr_number release.

### Swift @abstr_number or @abstr_number . @abstr_number

If you migrate from Swift @abstr_number .x, please check out IBAnimatable @abstr_number . @abstr_number Migration Guide for more information about how to migrate your project to @abstr_number . @abstr_number . Version @abstr_number follows Swift @abstr_number @abstr_hyperlink and contains a lot of breaking changes from version @abstr_number .x. 

If you are using Xcode @abstr_number with Swift @abstr_number , please use the latest tagged @abstr_number .x release.

## Languages

中文

## Features

  * From prototype to shippable App Store ready App - What you design in Interface Builder is what the App exactly looks. More details can be found in this talk @abstr_hyperlink 
  * Designer-friendly - Sketch style configuration panel on Attributes inspector ( @abstr_image ) to lower the learning curve for using Interface Builder. 
  * Animation design support in Swift playground - Similar to Framer, we can prototype animations in Swift playground to save time for running on a simulator or actual iOS devices. 
  * Built-in Auto Layout support - We can use Auto Layout and Size Classes with `IBAnimatable` to support orientations and multiple iOS devices. 
  * Navigation and transition support - We can use default navigation pattern in the App. `IBAnimatable` also has custom transition animators and segues to support transition animations and gesture interactions.
  * Protocol-oriented programming - `IBAnimatable` uses a protocol-oriented programming paradigm. With Swift protocol extension, it is easy to support more designable or animatable features. We can even use these protocol extensions to create other custom UI elements instead of using the default ones from `IBAnimatable`. More details can be found in this talk @abstr_hyperlink 



## Use cases

  * Prototyping - Create interactive prototypes to validate ideas quickly.
  * Redesigning in Interface Builder - Redesign the UI from Sketch and animations from Framer without writing any code.
  * Making custom UI elements - Use `IBAnimatable` protocols to make custom UI elements. e.g. Buttons with a default color palette.



## Documentations

  * <del>Fully</del> Mostly documented API Reference 
  * How to design and prototype custom transition animation and gesture interaction in Interface Builder with IBAnimatable
  * Youtube video: @abstr_hyperlink 



## How to run the example App

The easy way to learn and understand how powerful of `IBAnimatable`is to run the example App and play around the settings in Interface Builder. Just a few steps we can run the App as below, to see more features, we can tap on "Forget Password" button to unlock them. 😉

@abstr_number ) Clone the repository

@abstr_code_section 

@abstr_number ) Open the workspace in Xcode

@abstr_code_section 

@abstr_number ) Compile and run the app on your simulator or iOS device

## How to design in Interface Builder

@abstr_image 

To use `IBAnimatable` to design the UI and animations in Interface Builder, just follow a few steps as below:

@abstr_number . Open a Storyboard or Xib file. @abstr_number . Drag and drop a UIKit element e.g. `UIView` to a `UIViewController`. @abstr_number . In Identity inspector ( @abstr_image ), configure the UI element to `Animatable` custom UI class e.g. `AnimatableView`, you can find all `Animatable` classes in APIs.md. @abstr_number . Configure the UI and animations in Attribute Inspector.

## How to animate in Swift playground

@abstr_image 

We can configure the animation settings in Attribute inspector. However, Interface Builder doesn't support previewing Animations, but we can still prototype animations in Swift playground. There are three sample pages to demonstrate how to design animation in Swift playground. You can find them in IBAnimatable.playground. 

@abstr_number . Open IBAnimatable.xcworkspace @abstr_number . Select IBAnimatable Framework scheme and build it with `Command + b` @abstr_number . Select IBAnimatable.playground, choose one page in Swift playground, then click on "Assistant editor" button to split the playground. After that, select "Timeline" on the top of right-hand side to preview the animation. We can use Xcode menu "Editor" -> "Execute" to re-run the playground.

## How to animate programmatically

As you saw above, we can prototype an App fully in Interface Builder without a single line of code, but `IBAnimatable` also provides APIs to let us fully control the UI and animations. `IBAnimatable` provides simple promise-like APIs. We can easily call them in one line.

@abstr_code_section 

You can play around with all these predefined animations in the Swift playground Page - Predefined Animations

### Animation properties

There are some properties we can change to customize the animation. What we need to do is to pass the parameters to `animate()` method to start the animation.

@abstr_code_section 

You can play around with all animations with different parameters in the Swift playground Page - Animation Properties

### Chaining animations

Sometimes, we need to run more animation after the previous one. With `IBAnimatable`, we can easily use promise-like API to chain all animations together to provide a sleek user experience.

@abstr_code_section 

### Delaying animations

We can use `delay` method to delay the next animation.

@abstr_code_section 

We can also delay the first animation.

@abstr_code_section 

### Completion handler

We can add a completion handler/closure to execute when all animations are completed.

@abstr_code_section 

## How to contribute

All of us can contribute to this project. Fewer overheads mean less time to build quality Apps and more time to enjoy coffee ☕️.

  * If you are a designer, you can design in Interface Builder with `IBAnimatable` without a design tool like Sketch, or implement your existing design from Sketch or Photoshop in Interface Builder rapidly. With `IBAnimatable`, you should be able to do ~~all~~ most of the design work in Interface Builder. If you have any feature request, please @abstr_hyperlink and we will put it in the backlog. If you have done any design with `IBAnimatable`, please let us know via creating Pull Request or GitHub Issue. We will add it to README file.

  * If you are a developer, you can work on features or fix bugs, please check out Vision, Technical Considerations and Roadmap and @abstr_hyperlink to find out the backlogs. If you have used `IBAnimatable` in your App, please let us know via creating Pull Request or GitHub Issue. We will add it to README file.

  * If you are good at English, please correct my English 😁. If you are good at other languages, please create a README file in those languages.

  * If you like the project, please share it with the other designers and developers, and star 🌟 the project. 🤗




Many thanks to @abstr_hyperlink 🤗 especially to @abstr_hyperlink who develops a lot of features and maintains the project.

## Roadmap

Vision, Technical Considerations and Roadmap

## Inspirations / Credits

  * `IBDesignable` and `IBInspectable` \- The entire project is based on that.
  * Sketch - Interface Builder should be as easy as Sketch to use.
  * Framer Studio - Design and preview animations in one place.
  * @abstr_hyperlink - steal a lot of animation parameters from this project.
  * @abstr_hyperlink - port all transition animations from this project, and add parameters support and fix bugs.
  * @abstr_hyperlink - port all activity indicator animations from this project, and migrate to Swift @abstr_number .
  * @abstr_hyperlink , The demo App's original design is from this UI Kit and redone in Interface Builder. We also added interaction, navigation and animations.



## Change Log

Please see CHANGELOG.md

## License

`IBAnimatable` is released under the MIT license. See LICENSE for details.
