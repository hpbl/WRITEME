# sweep.js

A JavaScript library for smoother color transitions. Project page lives @abstr_hyperlink .

## About

__sweep.js__ is a small JavaScript library ( @abstr_number kb zipped) that enables proper color transitions through the HSL and HUSL spaces. Ordinary CSS transitions or existing frameworks convert HSL colors to RGB _before_ transitioning. __sweep.js__ addresses this by letting you transition through the color spectrum.

I've written an in-depth post about the need for HSL transitions @abstr_hyperlink .

## Install

@abstr_code_section 

...or just @abstr_hyperlink .

Sweep's dependencies are bundled; all you have to do is include the script.

@abstr_code_section 

Sweep is wrapped with @abstr_hyperlink , so it'll also work as a module in your system of choice.

## Usage

Using sweep.js to transition an element's color is easy. Whenever you want to trigger an HSL sweep, call:

@abstr_code_section 

  * `target` \- element that you wish to animate
  * `properties` \- CSS properties that you wish to animate (string or array of strings)
  * `fromColor` \- initial color before the transition
  * `toColor` \- final color after the transition
  * `options` (optional) - an object that can set the following: 
    * `callback` \- function to be called once the animation finishes
    * `direction` \- clockwise ( @abstr_number ) or counterclockwise (- @abstr_number )
    * `duration` \- time (in ms) to complete the animation
    * `space` \- 'HSL', 'HUSL', or 'RGB'



## Examples

Trigger a full color cycle on click:

@abstr_code_section 

Animate from purple to green on hover:

@abstr_code_section 

Licensed under @abstr_hyperlink . Created by @abstr_hyperlink .
