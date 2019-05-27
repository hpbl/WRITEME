@abstr_image 

@abstr_hyperlink 

FOLDING CELL

Expanding content cell with animation inspired by folding paper card material design. ___ 

We specialize in the designing and coding of custom UI for Mobile Apps and Websites. @abstr_hyperlink 

Stay tuned for the latest updates: @abstr_hyperlink 

Get Free Mockup For your project →

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Requirements

  * iOS @abstr_number . @abstr_number +
  * Xcode @abstr_number . @abstr_number 



## Installation

Just add the FoldingCell.swift file to your project.

or use @abstr_hyperlink with Podfile: @abstr_code_section or @abstr_hyperlink users can simply add Mantle to their `Cartfile`: @abstr_code_section 

or just drag and drop FoldingCell.swift file to your project

## Solution

@abstr_image 

## Usage

@abstr_number ) Create a new cell inheriting from `FoldingCell`

@abstr_number ) Add a UIView to your cell in your storyboard or nib file, inheriting from `RotatedView`. Connect the outlet from this view to the cell property `foregroundView`. Add constraints from this view to the superview, as in this picture:

@abstr_image 

(constants of constraints may be different). Connect the outlet from this top constraint to the cell property `foregroundViewTop` . (This view will be shown when the cell is in its normal state).

@abstr_number ) Add other UIViews to your cell, connect the outlet from this view to the cell property `containerView`. Add constraints from this view to the superview like in the picture:

@abstr_image 

(constants of constraints may be different). Connect the outlet from this top constraint to the cell property `containerViewTop`. (This view will be shown when the cell is opened)

Your result should be something like this picture:

@abstr_image 

@abstr_number ) Set `@IBInspectable var itemCount: NSInteger` property is a count of folding (it IBInspectable you can set in storyboard). range @abstr_number or greater. Default value is @abstr_number 

Ok, we've finished configuring the cell.

@abstr_number ) Adding code to your UITableViewController

@abstr_number . @abstr_number ) Add constants: @abstr_code_section @abstr_number . @abstr_number ) Add property for calculate cells height

@abstr_code_section 

@abstr_number . @abstr_number ) Override method: @abstr_code_section 

@abstr_number . @abstr_number ) Added code to method: @abstr_code_section @abstr_number . @abstr_number ) Control if the cell is open or closed @abstr_code_section 

@abstr_number ) Add this code to your new cell class @abstr_code_section 

## if don't use storyboard and xib files

Create foregroundView and containerView from code (steps @abstr_number - @abstr_number ) look example: @abstr_hyperlink 

## 🗂 Check this library on other language:

@abstr_hyperlink 

## 📄 License

Folding cell is released under the MIT license. See LICENSE for details.

This library is a part of a @abstr_hyperlink 

If you use the open-source library in your project, please make sure to credit and backlink to www.ramotion.com

## 📱 Get the Showroom App for iOS to give it a try

Try this UI component and more like this in our iOS app. Contact us if interested.

@abstr_hyperlink 

@abstr_hyperlink 
