## Updated for Swift @abstr_number . @abstr_number

Requires Xcode @abstr_number and Swift @abstr_number . @abstr_number .

## Installation

Drop in the Spring folder to your Xcode project (make sure to enable "Copy items if needed" and "Create groups").

Or via CocoaPods: @abstr_code_section 

## Usage with Storyboard

In Identity Inspector, connect the UIView to SpringView Class and set the animation properties in Attribute Inspector.

@abstr_image 

## Usage with Code
    
    
    layer.animation = "squeezeDown"
    layer.animate()
    

## Demo The Animations

@abstr_image 

## Chaining Animations
    
    
    layer.y = - @abstr_number 
    animateToNext {
      layer.animation = "fall"
      layer.animateTo()
    }
    

## Functions
    
    
    animate()
    animateNext { ... }
    animateTo()
    animateToNext { ... }
    

## Animation
    
    
    shake
    pop
    morph
    squeeze
    wobble
    swing
    flipX
    flipY
    fall
    squeezeLeft
    squeezeRight
    squeezeDown
    squeezeUp
    slideLeft
    slideRight
    slideDown
    slideUp
    fadeIn
    fadeOut
    fadeInLeft
    fadeInRight
    fadeInDown
    fadeInUp
    zoomIn
    zoomOut
    flash
    

## Curve
    
    
    spring
    linear
    easeIn
    easeOut
    easeInOut
    

## Properties
    
    
    force
    duration
    delay
    damping
    velocity
    repeatCount
    scale
    x
    y
    rotate
    

* Not all properties work together. Play with the demo app.

## Autostart

Allows you to animate without code. Don't need to use this if you plan to start the animation in code.

## Autohide

Saves you the hassle of adding a line "layer.alpha = @abstr_number " in viewDidLoad().

## Known issue

Animations won't autostart when view is reached via performSegueWithIdentifier.

## Tutorials

  * Tutorials available on @abstr_hyperlink .
  * @abstr_hyperlink 



## ChangeLog

  * At @abstr_hyperlink wiki page



## License

Spring is released under the MIT license. See LICENSE for details.
