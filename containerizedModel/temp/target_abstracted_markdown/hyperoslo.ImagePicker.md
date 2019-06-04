⚠️ DEPRECATED, NO LONGER MAINTAINED

@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_image @abstr_hyperlink 

## Description

@abstr_image 

**ImagePicker** is an all-in-one camera solution for your iOS app. It lets your users select images from the library and take pictures at the same time. As a developer you get notified of all the user interactions and get the beautiful UI for free, out of the box, it's just that simple.

**ImagePicker** has been optimized to give a great user experience, it passes around referenced images instead of the image itself which makes it less memory consuming. This is what makes it smooth as butter.

## Usage

**ImagePicker** works as a normal controller, just instantiate it and present it.

@abstr_code_section 

**ImagePicker** has three delegate methods that will inform you what the users are up to:

@abstr_code_section 

**ImagePicker** supports limiting the amount of images that can be selected, it defaults to zero, which means that the user can select as many images as he/she wants.

@abstr_code_section 

### Optional bonus

##### Configuration

You can inject `Configuration` instance to ImagePicker, which allows you to configure text, colors, fonts and camera features

@abstr_code_section 

##### Resolve assets

As said before, **ImagePicker** works with referenced images, that is really powerful because it lets you download the asset and choose the size you want. If you want to change the default implementation, just add a variable in your controller.

@abstr_code_section 

And when you call any delegate method that returns images, add in the first line:

@abstr_code_section 

## Installation

**ImagePicker** is available through @abstr_hyperlink . To install it, simply add the following line to your Podfile:

@abstr_code_section 

**ImagePicker** is also available through @abstr_hyperlink . To install just write into your Cartfile:

@abstr_code_section 

## Author

@abstr_hyperlink made this with ❤️

## Contribute

We would love you to contribute to **ImagePicker** , check the @abstr_hyperlink file for more info.

## License

**ImagePicker** is available under the MIT license. See the @abstr_hyperlink file for more info.
