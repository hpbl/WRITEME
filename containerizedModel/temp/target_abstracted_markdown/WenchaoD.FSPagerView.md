@abstr_image 

  
@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

| **SWIFT** | @abstr_hyperlink | |---|---|

**FSPagerView** is an elegant Screen Slide Library implemented primarily with **_UICollectionView_**. It is extremely helpful for making Banner、Product Show、Welcome/Guide Pages、Screen/ViewController Sliders.

## Features

  * **_Infinite_** scrolling.
  * **_Automatic_** Sliding.
  * **_Horizontal_** and **_Vertical_** paging.
  * Fully customizable item, with predefined banner-style item.
  * Fully customizable **_page control_**.
  * Rich build-in @abstr_number D transformers.
  * **_Simple_** and **_Delightful_** api usage.
  * Support **SWIFT** and **OBJECTIVE-C**.



## Demos

  * Demo @abstr_number - Banner
  * Demo @abstr_number - Transformer
  * Demo @abstr_number - Page Control



### Demo @abstr_number - Banner 

| Banner | |---| | @abstr_image |

### automaticSlidingInterval

The time interval of automatic sliding. @abstr_number means disabling automatic sliding. Default is @abstr_number .

**e.g.**

@abstr_code_section 

### isInfinite

A boolean value indicates whether the pager view has infinite number of items. Default is false.

**e.g.**

@abstr_code_section 

### decelerationDistance

An unsigned integer value that determines the paging distance of the pager view, which indicates the number of passing items during the deceleration. When the value of this property is FSPagerView.automaticDistance, the actual 'distance' is automatically calculated according to the scrolling speed of the pager view. Default is @abstr_number .

**e.g.**

@abstr_code_section 

### itemSize

The item size of the pager view. When the value of this property is FSPagerView.automaticSize, the items fill the entire visible area of the pager view. Default is FSPagerView.automaticSize.

**e.g.**

@abstr_code_section 

### interitemSpacing

The spacing to use between items in the pager view. Default is @abstr_number .

**e.g.**

@abstr_code_section 

## Demo @abstr_number - Transformers

|Cross Fading| |---| | @abstr_image |

##  @abstr_code_section 

|Zoom Out| |---| | @abstr_image |

##  @abstr_code_section 

|Depth| |---| | @abstr_image |

##  @abstr_code_section 

|Linear| |---| | @abstr_image |

##  @abstr_code_section 

|Overlap| |---| | @abstr_image |

##  @abstr_code_section 

|Ferris Wheel| |------| | @abstr_image |

##  @abstr_code_section 

|Inverted Ferris Wheel| |------| | @abstr_image |

##  @abstr_code_section 

|Cover Flow| |------| | @abstr_image |

##  @abstr_code_section 

|Cubic| |------| | @abstr_image |

##  @abstr_code_section 

> Customize your own transformer by subclassing`FSPagerViewTransformer.`

## Demo @abstr_number Page Control

|Page Control| |---| | @abstr_image |

### numberOfPages

The number of page indicators of the page control. Default is @abstr_number .

**e.g.**

@abstr_code_section 

### currentPage

The current page, highlighted by the page control. Default is @abstr_number .

**e.g.**

@abstr_code_section 

### contentHorizontalAlignment

The horizontal alignment of content within the control’s bounds. Default is center.

**e.g.** @abstr_code_section 

### setStrokeColor:forState:

Sets the stroke color for page indicators to use for the specified state. (selected/normal).

**e.g.**

@abstr_code_section 

### setFillColor:forState:

Sets the fill color for page indicators to use for the specified state. (selected/normal).

**e.g.**

@abstr_code_section 

### setImage:forState:

Sets the image for page indicators to use for the specified state. (selected/normal).

**e.g.**

@abstr_code_section 

### setPath:forState:

Sets the path for page indicators to use for the specified state. (selected/normal).

**e.g.**

@abstr_code_section 

## Installation

  * Manually
  * Cocoapods
  * Carthage



### Manually

@abstr_number . **_Download_** the source code. @abstr_number . Extract the zip file, simply drag folder **_Sources_** into your project. @abstr_number . Make sure **_Copy items if needed_** is checked.

### Cocoapods

@abstr_code_section 

### Carthage

@abstr_code_section 

## Tutorial

  * Getting started
  * Implement FSPagerViewDataSource
  * Implement FSPagerViewDelegate



### @abstr_number . Getting started 

  * Getting started with code

@abstr_code_section 

  * Getting started with Interface Builder   
@abstr_number 、Simply drag **UIView** instance into your View Controller, Change the `Custom Class` to `FSPagerView`. (Or `FSPageControl`)   
@abstr_number 、Link the `dataSource` and `delegate` property of **FSPagerView** to your View Controller.   
@abstr_number 、Register a cell class.

@abstr_code_section 




### @abstr_number . Implement FSPagerViewDataSource 

@abstr_code_section 

### @abstr_number . Implement FSPagerViewDelegate 

@abstr_code_section 

> Asks the delegate if the item should be highlighted during tracking.

* * *

@abstr_code_section 

> Tells the delegate that the item at the specified index was highlighted.

* * *

@abstr_code_section 

> Asks the delegate if the specified item should be selected.

* * *

@abstr_code_section 

> Tells the delegate that the item at the specified index was selected.

* * *

@abstr_code_section 

> Tells the delegate that the specified cell is about to be displayed in the pager view.

* * *

@abstr_code_section 

> Tells the delegate that the specified cell was removed from the pager view.

* * *

@abstr_code_section 

> Tells the delegate when the pager view is about to start scrolling the content.

* * *

@abstr_code_section 

> Tells the delegate when the user finishes scrolling the content.

* * *

@abstr_code_section 

> Tells the delegate when the user scrolls the content view within the receiver.

* * *

@abstr_code_section 

> Tells the delegate when a scrolling animation in the pager view concludes.

* * *

@abstr_code_section 

> Tells the delegate that the pager view has ended decelerating the scrolling movement.

* * *

## Support this repo

  * **_Star_** this repo   


  * Buy me a Coffee. ☕️ 

@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 




* * *

## Author

  * **_微博： @abstr_hyperlink_**
  * **_Twitter: @abstr_hyperlink_**
  * Other repos: 
    * @abstr_hyperlink 



* * *

#  @abstr_hyperlink 
