@abstr_image 

@abstr_hyperlink 

Dropzone.js is a light weight JavaScript library that turns an HTML element into a dropzone. This means that a user can drag and drop a file onto it, and the file gets uploaded to the server via AJAX.

* * *

_If you want support, please use @abstr_hyperlink with the `dropzone.js` tag and not the GitHub issues tracker. Only post an issue here if you think you discovered a bug or have a feature request._

* * *

**Please read the contributing guidelines before you start working on Dropzone!**

  


@abstr_hyperlink 

  
  


Starting with version @abstr_number . @abstr_number . @abstr_number this library does no longer depend on jQuery (but it still works as a jQuery module).

Dropzone is compatible with @abstr_hyperlink , there's a standalone version and an @abstr_hyperlink module that's compatible with @abstr_hyperlink in the downloads folder.

@abstr_image 

## Main features

  * Image thumbnail previews. Simply register the callback `thumbnail(file, data)` and display the image wherever you like
  * Retina enabled
  * Multiple files and synchronous uploads
  * Progress updates
  * Support for large files
  * Complete theming. The look and feel of Dropzone is just the default theme. You can define everything yourself by overwriting the default event listeners.
  * Well tested



## Documentation

For the full documentation and installation please visit www.dropzonejs.com

Please also refer to the @abstr_hyperlink .

## Examples

For examples, please see the @abstr_hyperlink .

## Usage

Implicit creation:

@abstr_code_section 

That's it. Really!

Dropzone will automatically attach to it, and handle file drops.

Want more control? You can configure dropzones like this:

@abstr_code_section 

...or instantiate dropzone manually like this:

@abstr_code_section 

> Note that dropzones don't have to be forms. But if you choose another element you have to pass the `url` parameter in the options.

For configuration options please look at the @abstr_hyperlink or at the @abstr_hyperlink .

### Register for events

If you want to register to some event you can do so on the `dropzone` object itself:

@abstr_code_section 

For a list of all events, please look at the chapter @abstr_hyperlink in the documentation or at the source.

## Browser support

  * Chrome @abstr_number +
  * Firefox @abstr_number +
  * IE @abstr_number +
  * Opera @abstr_number + (Version @abstr_number for MacOS is disabled because their API is buggy)
  * Safari @abstr_number +



For all the other browsers, dropzone provides an oldschool file input fallback.

## Why another library?

I realize that there @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink out there but the reason I decided to write my own are the following:

  * I didn't want it to be too big, and to cumbersome to dive into.
  * I want to design my own elements. I only want to register callbacks so I can update my elements accordingly.
  * Big files should get uploaded without a problem.
  * I wanted a callback for image previews, that don't kill the browser if too many too big images are viewed.
  * I want to use the latest API of browsers. I don't care if it falls back to the normal upload form if the browser is too old.
  * I don't think that it's necessary anymore to depend on libraries such as jQuery (especially when providing functionality that isn't available in old browsers anyway).



## MIT License

See LICENSE file
