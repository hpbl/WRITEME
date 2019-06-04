@abstr_image 

@abstr_image @abstr_image @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**ViewAnimator** is a library for building complex iOS UIView animations in an easy way. It provides one line animations for any view included the ones which contain other views like UITableView and UICollectionView with its cells or UIStackView with its arrangedSubviews.

### Entire View UITableView UICollectionView

@abstr_image @abstr_image @abstr_image @abstr_image @abstr_image 

SVG animations inspired by @abstr_hyperlink project @abstr_hyperlink 

### Complex Layouts

UI created by @abstr_hyperlink , make sure to check out his profile.

_Logo and banner created by @abstr_hyperlink_

## Installation

### CocoaPods

ViewAnimator is available through @abstr_hyperlink . To install it, simply add the following line to your Podfile:

@abstr_code_section 

### Manual

Drop the swift files inside of @abstr_hyperlink into your project.

### Carthage

@abstr_code_section 

## Usage

`ViewAnimator` provides a set of `UIView` extensions to easily add custom animations to your views. From version `@abstr_number . @abstr_number . @abstr_number` there are two ways to use this extension. 

### Self animating views

Views can animate theirselves calling `.animate(animations: [Animation])` that's the most basic usage. Here's the full method that contains many default arguments: 

@abstr_code_section 

### Animating multiple views

ViewAnimator follows the UIKit animations API style with a static method `UIView.animate(views: [UIView], animations: [Animation])`. This makes the library really easy to use and extensible to any kind of view. As the previous example, the method contains a lot of default arguments: 

@abstr_code_section 

### AnimationType

#### Direction

`Direction` provides the axis where the animation should take place and its movement direction.

@abstr_code_section 

#### Zoom

Zoom in and Zoom out animation support.

@abstr_code_section 

### Combined Animations

You can combine conformances of `Animation` to apply multiple transforms on your animation block. 

@abstr_code_section 

## Animation

`Animation` protocol provides you the posibility of expanding the animations supported by `ViewAnimator` with exception of the `animateRandom` function.

@abstr_code_section 

## UITableView/UICollection extensions

ViewAnimator comes with a set of handy extensions to make your animations in `UITableView` and `UICollectionView` a lot simpler. They both have access to cells in a section to animate easily. 

They both expose a method `visibleCells(in section: Int)` that returns an array of `UITableViewCell` or `UICollectionViewCell`.

@abstr_code_section 

## Mentions

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Project Details

### Requirements

  * Swift @abstr_number . @abstr_number 
  * Xcode @abstr_number . @abstr_number +
  * iOS @abstr_number . @abstr_number +



### Contributing

Feel free to collaborate with ideas 💭, issues ⁉️ and/or pull requests 🔃.

If you use ViewAnimator in your app I'd love to hear about it and feature your animation here!

### Contributors

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

### Author

Marcos Griselli | @abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

### License

ViewAnimator is available under the MIT license. See the @abstr_hyperlink file for more info.
