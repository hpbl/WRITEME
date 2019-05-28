# jQuery Colour Picker: A tiny colour picker with useful extra features

> _Copyright @abstr_number @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink . Licensed under the MIT license._

v @abstr_number . @abstr_number 

This is a jQuery plugin that creates a colour picker from an input field. It is a fork of @abstr_hyperlink with many modifications made to make it more suited to integrate with @abstr_hyperlink and to add some useful features.

## Modifications by Dean Attali:

  * Added "limited" palette that allows the user to specify their only a set of allowed colour rather than any colour
  * Added "allowTransparency" setting which allows users to check a checkbox to select the colour "transparent"
  * Added "showColour" setting which determines if to show the selected colour as the text, as the background colour of the input field, or both
  * Added "returnName" setting which makes the widget return a name instead of HEX value when possible
  * Removed many unnecessary features 
  * Removed dependency on images and made the colour picker completely CSS



## Additional modifications by David Griswold:

  * added "allowAlpha" option that enables an alpha slider in square palette mode, returning hex @abstr_number colors suitable for R
  * enabled palette colors with alpha channels
  * made input more flexible: allowedCols and manually entered colors can be entered as names or as hex, rgb(), rgba(), hsl(), or hsla() strings



This plugin works for IE @abstr_number +, Chrome, Firefox, mobile, and should work for all other major browsers.

Modified plugin is being used in @abstr_hyperlink - an R package providing colour pickers for Shiny apps.

The <code>index.html</code> page contains very basic examples of how to use this plugin.

## Live demo

Colour input being used in a shiny application, with the "showColour" and "allowTransparency" features: @abstr_hyperlink 
