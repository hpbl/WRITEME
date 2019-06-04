@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**NightNight** makes it easy to integrate night mode. It provides multiple APIs which all contain keyword **mixed**.

> If you want to implement night mode in Objective-C project without import swift code. This is the Objective-C version @abstr_hyperlink 

@abstr_code_section 

Features • Usage • Customize • Demo • Installation • License 

## Features

  * [x] Integrate night mode easily
  * [x] UIColor and UIImage support
  * [x] Support NSAttributedString
  * [x] Better autocompletion
  * [x] Customize with notification



## Usage

  * Use `MixedColor` instead of `UIColor`

@abstr_code_section 

  * Use `MixedImage` instead of `UIImage`

@abstr_code_section 

  * Support `NSAttributedString`

@abstr_code_section 

  * `NavigationBar` barStyle

@abstr_code_section 

  * Change current theme to `.NORMAL` or `.NIGHT`

@abstr_code_section 




## Customize

NightNight will send `NightNightThemeChangeNotification`. if you wanna some customize features, you can observe it and change what you want in corresponding selector.

@abstr_code_section 

## Demo

@abstr_image 

## Installation

### Carthage

@abstr_hyperlink is a decentralized dependency manager that automates the process of adding frameworks to your Cocoa application.

You can install Carthage with @abstr_hyperlink using the following command:

@abstr_code_section 

To integrate NightNight into your Xcode project using Carthage, specify it in your `Cartfile`:

@abstr_code_section 

### Cocoapods

@abstr_hyperlink is a dependency manager for Cocoa projects.

You can install it with the following command:

@abstr_code_section 

To integrate NightNight into your Xcode project using CocoaPods, specify it in your `Podfile`:

@abstr_code_section 

### Manually

@abstr_number . Download and drop `NightNight/Classes`folder in your project.   
@abstr_number . Congratulations! 

## License

Copyright (c) @abstr_number Draveness (http://github.com/draveness)

NightNight is available under the MIT license. See the LICENSE file for more info.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
