# Swiped.js

@abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink (use mobile or emulate touches mode on your browser)

@abstr_image 

## Features

  * Dependency-free.
  * Short & long swipe.
  * Swipe to delete.
  * Easy to use.
  * CSS transforms & transitions.



## Installation

@abstr_code_section 

## API

### Swiped(options)

  * `options` (object) - Options to configure a new instance of Swiped.
  * `[options.query]` (string) - Query selector.
  * `[options.duration]` (number) - The time (milliseconds) to open/close the element. Default: `@abstr_number`.
  * `[options.tolerance]` (number) - Default: `@abstr_number`.
  * `[options.time]` (number) - Time for short swipe. Default: `@abstr_number`.
  * `[options.left]` (number) - Distance for swipe from left to right. Default: `@abstr_number`.
  * `[options.right]` (number) - Distance for swipe from right to left. Default: `@abstr_number`.
  * `[options.list]` (boolean) - Elements depend on each other. Default: `false`.
  * `[options.onOpen]` (function).
  * `[options.onClose]` (function).

@abstr_code_section 




## Usage

Example of the html markup for single element: @abstr_code_section for multiple: @abstr_code_section for switch: @abstr_code_section 

initialization for single element: @abstr_code_section for multiple: @abstr_code_section 

for switch: @abstr_code_section 

#### Implementation for "swipe to delete"

@abstr_code_section 
