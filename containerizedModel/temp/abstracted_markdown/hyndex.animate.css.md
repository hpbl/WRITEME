# Animate.css @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

_Just-add-water CSS animation_

`animate.css` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

## Installation

To install via Bower, simply do the following:

@abstr_code_section or you can install via npm:

@abstr_code_section 

## Basic Usage

@abstr_number . Include the stylesheet on your document's `<head>`

@abstr_code_section or use the version hosted by @abstr_hyperlink @abstr_code_section @abstr_number . Add the class `animated` to the element you want to animate. You may also want to include the class `infinite` for an infinite loop.

@abstr_number . Finally you need to add one of the following classes:

  * `bounce`
  * `flash`
  * `pulse`
  * `rubberBand`
  * `shake`
  * `headShake`
  * `swing`
  * `tada`
  * `wobble`
  * `jello`
  * `bounceIn`
  * `bounceInDown`
  * `bounceInLeft`
  * `bounceInRight`
  * `bounceInUp`
  * `bounceOut`
  * `bounceOutDown`
  * `bounceOutLeft`
  * `bounceOutRight`
  * `bounceOutUp`
  * `fadeIn`
  * `fadeInDown`
  * `fadeInDownBig`
  * `fadeInLeft`
  * `fadeInLeftBig`
  * `fadeInRight`
  * `fadeInRightBig`
  * `fadeInUp`
  * `fadeInUpBig`
  * `fadeOut`
  * `fadeOutDown`
  * `fadeOutDownBig`
  * `fadeOutLeft`
  * `fadeOutLeftBig`
  * `fadeOutRight`
  * `fadeOutRightBig`
  * `fadeOutUp`
  * `fadeOutUpBig`
  * `flipInX`
  * `flipInY`
  * `flipOutX`
  * `flipOutY`
  * `lightSpeedIn`
  * `lightSpeedOut`
  * `rotateIn`
  * `rotateInDownLeft`
  * `rotateInDownRight`
  * `rotateInUpLeft`
  * `rotateInUpRight`
  * `rotateOut`
  * `rotateOutDownLeft`
  * `rotateOutDownRight`
  * `rotateOutUpLeft`
  * `rotateOutUpRight`
  * `hinge`
  * `jackInTheBox`
  * `rollIn`
  * `rollOut`
  * `zoomIn`
  * `zoomInDown`
  * `zoomInLeft`
  * `zoomInRight`
  * `zoomInUp`
  * `zoomOut`
  * `zoomOutDown`
  * `zoomOutLeft`
  * `zoomOutRight`
  * `zoomOutUp`
  * `slideInDown`
  * `slideInLeft`
  * `slideInRight`
  * `slideInUp`
  * `slideOutDown`
  * `slideOutLeft`
  * `slideOutRight`
  * `slideOutUp`



Full example: @abstr_code_section 

@abstr_hyperlink 

## Usage

To use animate.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

@abstr_code_section or use the version hosted by @abstr_hyperlink @abstr_code_section 

You can do a whole bunch of other stuff with animate.css when you combine it with jQuery or add your own CSS rules. Dynamically add animations using jQuery with ease:

@abstr_code_section 

You can also detect when an animation ends:

@abstr_code_section 

@abstr_hyperlink on how to use Animate.css with jQuery here.

**Note:** `jQuery.one()` is used when you want to execute the event handler at most _once_. More information @abstr_hyperlink .

You can also extend jQuery to add a function that does it all for you:

@abstr_code_section 

And use it like this:

@abstr_code_section 

You can change the duration of your animations, add a delay or change the number of times that it plays:

@abstr_code_section 

_Note: be sure to replace "vendor" in the CSS with the applicable vendor prefixes (webkit, moz, etc)_

## Custom Builds

Animate.css is powered by @abstr_hyperlink , and you can create custom builds pretty easily. First of all, you’ll need Gulp and all other dependencies:

@abstr_code_section 

Next, run `gulp` to compile your custom builds. For example, if you want only some of the “attention seekers”, simply edit the `animate-config.json` file to select only the animations you want to use.

@abstr_code_section 

## License

Animate.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing

Pull requests are the way to go here. I apologise in advance for the slow action on pull requests and issues. I only have two rules for submitting a pull request: match the naming convention (camelCase, categorised [fades, bounces, etc]) and let us see a demo of submitted animations in a @abstr_hyperlink . That last one is important.
