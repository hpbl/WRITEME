@abstr_image 

@abstr_hyperlink 

EXPANDING COLLECTION

An animated material design UI card peek/pop controller ___ 

We specialize in the designing and coding of custom UI for Mobile Apps and Websites. @abstr_hyperlink 

Stay tuned for the latest updates: @abstr_hyperlink 

Get Free Mockup For your project →

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Requirements

  * iOS @abstr_number . @abstr_number +
  * Xcode @abstr_number . @abstr_number +



## Installation

Just add the Source folder to your project.

or use @abstr_hyperlink with Podfile: @abstr_code_section 

or @abstr_hyperlink users can simply add to their `Cartfile`: @abstr_code_section 

## Usage

@abstr_code_section 

#### Create CollectionViewCell

@abstr_image 

@abstr_number ) Create UICollectionViewCell inherit from `BasePageCollectionCell` (recommend create cell with xib file)

@abstr_number ) Adding FrontView \- add a view to YOURCELL.xib and connect it to `@IBOutlet weak var frontContainerView: UIView!`   
\- add width, height, centerX and centerY constraints (width and height constranints must equal cellSize)

@abstr_image   
\- connect centerY constraint to `@IBOutlet weak var frontConstraintY: NSLayoutConstraint!` \- add any desired uiviews to frontView

@abstr_number ) Adding BackView \- repeat step @abstr_number (connect outlets to `@IBOutlet weak var backContainerView: UIView!`, `@IBOutlet weak var backConstraintY: NSLayoutConstraint!`)

@abstr_number ) Cell example @abstr_hyperlink 

###### If set `tag = @abstr_number` for any `FrontView.subviews` this view will be hidden during the transition animation

#### Create CollectionViewController

@abstr_number ) Create a UIViewController inheriting from `ExpandingViewController`

@abstr_number ) Register Cell and set Cell size:

@abstr_code_section 

@abstr_number ) Add UICollectionViewDataSource methods

@abstr_code_section 

@abstr_number ) Open Cell animation

@abstr_code_section 

@abstr_code_section 

###### if you use this delegates method:

```Swift func collectionView(collectionView: UICollectionView, willDisplayCell cell: UICollectionViewCell, forItemAtIndexPath indexPath: NSIndexPath)

func scrollViewDidEndDecelerating(scrollView: UIScrollView) @abstr_code_section Swift func collectionView(collectionView: UICollectionView, willDisplayCell cell: UICollectionViewCell, forItemAtIndexPath indexPath: NSIndexPath) { super.collectionView(collectionView: collectionView, willDisplayCell cell: cell, forItemAtIndexPath indexPath: indexPath) // code }

func scrollViewDidEndDecelerating(scrollView: UIScrollView) { super.scrollViewDidEndDecelerating(scrollView: scrollView) // code } @abstr_code_section swift override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) { super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil) headerHeight = *** } @abstr_code_section swift required init?(coder aDecoder: NSCoder) { super.init(coder: aDecoder) headerHeight = *** } @abstr_code_section swift if cell.isOpened == true { let vc: YourTableViewController = // ... create view controller   
pushToViewController(vc) } ``` @abstr_number ) For back transition use`popTransitionAnimation()`

## 🗂 Check this library on other language:

@abstr_hyperlink 

## 📄 License

Expanding Collection is released under the MIT license. See LICENSE for details.

This library is a part of a @abstr_hyperlink 

If you use the open-source library in your project, please make sure to credit and backlink to www.ramotion.com

## 📱 Get the Showroom App for iOS to give it a try

Try this UI component and more like this in our iOS app. Contact us if interested.

@abstr_hyperlink 

@abstr_hyperlink   
  

