@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

### Unfortunately, life gets in the way sometimes and I won't be able to maintain this library any longer and upgrade this library to where it needs to be.

#### Featured In

@abstr_hyperlink  |  @abstr_hyperlink  |  @abstr_hyperlink  |  @abstr_hyperlink  |  @abstr_hyperlink   
---|---|---|---|---  
**WhatSport** | **Funny Or Die** | **Alabama MVD** | **HEALTHFUL** | **Bboy Event**  
SportsQuack LLC | Funny Or Die, Inc. | CAPS | Junaid Younus | Jazz Pixels ООО  
  
## Latest Update

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * Bug fixes * Obj-c more stable

## Description

A fully customizable and flexible paging menu controller built from other view controllers placed inside a scroll view allowing the user to switch between any kind of view controller with an easy tap or swipe gesture similar to what Spotify, Windows Phone, and Instagram use

**Similar to Spotify**

@abstr_image @abstr_image 

**Similar to Windows Phone**

@abstr_image @abstr_image 

**Similar to Instagram segmented control**

@abstr_image @abstr_image 

## Installation

**CocoaPods**

PageMenu is available through @abstr_hyperlink . !! Swift only !!

To install add the following line to your Podfile:
    
    
    pod 'PageMenu'
    

**Carthage**

PageMenu is also available through @abstr_hyperlink . Append this line to Cartfile and follow @abstr_hyperlink .

@abstr_code_section 

**Manual Installation**

The class file required for PageMenu is located in the Classes folder in the root of this repository as listed below:

  * CAPSPageMenu.swift



## How to use PageMenu

First you will have to create a view controller that is supposed to serve as the base of the page menu. This can be a view controller with its xib file as a separate file as well as having its xib file in storyboard. Following this you will have to go through a few simple steps outlined below in order to get everything up and running.

_* @abstr_number ) Add the files listed in the installation section to your project_ *

_* @abstr_number ) Add a property for CAPSPageMenu in your base view controller_ *

Swift

@abstr_code_section 

Objective-C

@abstr_code_section 

_* @abstr_number ) Add the following code in the viewDidLoad function in your view controller_ *

Swift

@abstr_code_section 

Objective-C

@abstr_code_section 

_* @abstr_number ) Optional - Delegate Methods_ *

In order to use the delegate methods first set the delegate of page menu to the parent view controller when setting it up

Swift

@abstr_code_section 

Objective-C

@abstr_code_section 

After that you will be able to set up the following delegate methods inside of your parent view controller

Swift

@abstr_code_section 

Objective-C

@abstr_code_section 

_* @abstr_number ) You should now be ready to use PageMenu!! 🎉_ *

## Customization

There are many ways you are able to customize page menu for your needs and there will be more customizations coming in the future to make sure page menu conforms to your app design. These will all be properties in CAPSPageMenu that can be changed from your base view controller. (Property names given with each item below)

_* @abstr_number ) Colors_ *

  * Background color behind the page menu scroll view to blend in view controller backgrounds 
    
        viewBackgroundColor (UIColor)
    

  * Scroll menu background color
    
        scrollMenuBackgroundColor (UIColor)
    

  * Selection indicator color
    
        selectionIndicatorColor (UIColor)
    

  * Selected menu item label color
    
        selectedMenuItemLabelColor (UIColor)
    

  * Unselected menu item label color
    
        unselectedMenuItemLabelColor (UIColor)
    

  * Menu item separator color (Used for segmented control style)
    
        menuItemSeparatorColor (UIColor)
    

  * Bottom menu hairline color
    
        bottomMenuHairlineColor (UIColor)
    




_* @abstr_number ) Dimensions_ *

  * Scroll menu height
    
        menuHeight (CGFloat)
    

  * Scroll menu margin (leading space before first menu item and after last menu item as well as in between items)
    
        menuMargin (CGFloat)
    

  * Scroll menu item width
    
        menuItemWidth (CGFloat)
    

  * Selection indicator height
    
        selectionIndicatorHeight (CGFloat)
    




_* @abstr_number ) Segmented Control_ *

  * Use PageMenu as segmented control
    
        useMenuLikeSegmentedControl (Bool)
    

  * Menu item separator width in pixels
    
        menuItemSeparatorWidth (CGFloat)
    

  * Menu item separator height in percentage of menu height
    
        menuItemSeparatorPercentageHeight (CGFloat)
    

  * Menu item separator has rounded edges
    
        menuItemSeparatorRoundEdges (Bool)
    




_* @abstr_number ) Others_ * * Menu item title label font
    
    
        menuItemFont (UIFont)
    

  * Bottom menu hairline
    
        addBottomMenuHairline (Bool)
    

  * Menu item witdh based on title text width (see Demo @abstr_number )
    
        menuItemWidthBasedOnTitleTextWidth (Bool)
    

  * Disable/Enable horizontal bounce for controller scroll view
    
        enableHorizontalBounce (Bool)
    

  * Hide/Unhide top menu bar
    
        hideTopMenuBar (Bool)
    

  * Center menu items in menu if they don't span entire width (Not currently supported for menu item width based on title)
    
        centerMenuItems (Bool)
    

  * Scroll animation duration on menu item tap in milliseconds
    
        scrollAnimationDurationOnMenuItemTap (Int)
    




## Apps using PageMenu

Please let me know if your app in the AppStore uses this library so I can add your app to the list of apps featuring PageMenu.

## Future Work

  * [x] Screen rotation support
  * [x] Objective-C version
  * [ ] Infinite scroll option / Wrap items
  * [ ] Carthage support
  * [ ] More customization options



## Credits

@abstr_hyperlink - iOS Developer ( @abstr_hyperlink )

**Thank you for your contributions:**

@abstr_hyperlink * Type-safe options

@abstr_hyperlink * iOS @abstr_number . @abstr_number fixes * Content size fixes on viewDidLayoutSubviews()

@abstr_hyperlink * CocoaPods fixes * ScrollToTop fixes

@abstr_hyperlink * Swift @abstr_number . @abstr_number Support

## Update Log

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * CocoaPods now has current version * Objective-C version in Beta * Demos updated

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * Options are now type-safe - Thanks to @abstr_hyperlink 

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * Support for Swift @abstr_number . @abstr_number - Thanks to @abstr_hyperlink * Will be on cocoa pods soon!

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * Small improvements thanks to hsoi and kitasuke

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * iOS @abstr_number . @abstr_number errors resolved - hsoi * Scroll to top now working for each page when tapping status bar - Gurpartap * Now fully working with CocoaPods - Gurpartap

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * Now fully working with CocoaPods thanks to Gurpartap

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * Added delegate methods to know when page menu will move and did move to a certain page index * Fixed bug where pages would disappear when tapping around on menu items * Added a few more customization options (enableHorizontalBounce, hideTopMenuBar, menuItemSeparatorColor) * Edited Demo @abstr_number to show how to set up view controllers and page menu in order to be able to push from cells, etc. * **Changed setup of PageMenu to eliminate some common issues (Please be aware that you will need to make a few changes in your project if you're already using PageMenu)**

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * Added ability to center menu items if they don't span over entire width of the PageMenu view (currently only supported for fixed menu item width) * Added ability to use PageMenu in a similar way as segmented control * Added function to move to any page index in PageMenu

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * Fixed bug that prevented user from tapping anything within a controller * Menu now fully scrollable

_* @abstr_number . @abstr_number . @abstr_number Release ( @abstr_number / @abstr_number / @abstr_number )_ * * Major performance improvements * Auto-rotation bug fixed * Customization option added for scroll animation duration on menu item tap

## License

Copyright (c) @abstr_number The Board of Trustees of The University of Alabama All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

@abstr_number . Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. @abstr_number . Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. @abstr_number . Neither the name of the University nor the names of the contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
