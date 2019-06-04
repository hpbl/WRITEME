# iCreator

A command-line tool for creating all icons and launch-screen images of iOS App.

* * *

### Getting started

First, download and install @abstr_hyperlink . 

In Mac OS X, you can simply use Homebrew and do: @abstr_code_section 

Second, install @abstr_hyperlink . @abstr_code_section 

Then make sure A Icon Image (for creating icons) and A logo Image(for launch-screen) are prepared.

**Notice:** A launch-screen image == your logo over a solid-colored background.

### Examples

  * generate all icons

@abstr_code_section 

  * generate all launch-screen images. `-color:backgorund-color`

@abstr_code_section 

  * `-l` means the App is running in Landscape

@abstr_code_section 

  * `-output:xxxx` is output dir (relative to cwd)

@abstr_code_section 




### About the size of logo image

iCreator will draw your logo image on a solid-colored launch-screen image ( center alignment ).

The output image's size is between @abstr_number x @abstr_number to @abstr_number x @abstr_number .

If screen-image's long side < @abstr_number , iCreator will resize logo image to @abstr_number %.

If screen-image's long side > @abstr_number , iCreator will resize logo image to @abstr_number %.

So, it's recommended that let the size of your logo image be between @abstr_number x @abstr_number to @abstr_number x @abstr_number .
