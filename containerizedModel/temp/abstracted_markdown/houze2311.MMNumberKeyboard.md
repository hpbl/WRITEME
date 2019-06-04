# MMNumberKeyboard

A simple keyboard to use with numbers and, optionally, a decimal point.

@abstr_image 

## Installation

### From CocoaPods

@abstr_hyperlink is a dependency manager for Objective-C, which automates and simplifies the process of using @abstr_number rd-party libraries like `MMNumberKeyboard` in your projects. First, add the following line to your @abstr_hyperlink :

@abstr_code_section 

Second, install `MMNumberKeyboard` into your project:

@abstr_code_section 

### From Carthage

@abstr_hyperlink is a dependency manager for Objective-C and Swift. Add the following line to your `Cartfile`:

@abstr_code_section 

The run `carthage update`.

Follow the current instructions in @abstr_hyperlink for up to date installation instructions.

## Usage

There is a sample Xcode project available. Just build & run. And profit.

Basically you instantiate your own keyboard view to use as an `.inputView` of your `UITextField`, `UITextView` or whatever view that supports text editing.

@abstr_code_section 

You can adopt the `MMNumberKeyboardDelegate` protocol to handle the return key or whether text should be inserted or not.

## Development

Pull requests are welcome and mostly appreciated.

## Credits

Thanks to @abstr_hyperlink for the encouragement and moral support to make this `README` file possible.
