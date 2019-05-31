# XLPagerTabStrip

@abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Made with ❤️ by @abstr_hyperlink .

Android @abstr_hyperlink for iOS!

**XLPagerTabStrip** is a _Container View Controller_ that allows us to switch easily among a collection of view controllers. Pan gesture can be used to move on to next or previous view controller. It shows a interactive indicator of the current, previous, next child view controllers.

@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
---|---|---|---  
  
## Getting involved

  * If you **want to contribute** please feel free to **submit pull requests**.
  * If you **have a feature request** please **open an issue**.
  * If you **found a bug** or **need help** please **check older issues, FAQ and threads on @abstr_hyperlink (Tag 'XLPagerTabStrip') before submitting an issue**.



**Before contribute check the CONTRIBUTING file for more info.**

If you use **XLPagerTabStrip** in your app we would love to hear about it! Drop us a line on @abstr_hyperlink .

## Pager Types

The library provides @abstr_number different ways to show the view controllers.

### Button Bar

This is likely the most common pager type. It's used by many well-known apps such as instagram, youtube, skype, and many others.

@abstr_image 

### Bar

This mode doesn't show a title neither an image. It only shows a bar that indicates the current view controller.

@abstr_image 

### Twitter

A long time ago, the twitter app made use of this type of pager in the app main screen.

@abstr_image 

### Segmented

This mode uses a `UISegmentedControl` to indicate which view controller is being displayed.

@abstr_image 

## Usage

Basically, we just need to provide the list of child view controllers to show, and these view controllers should provide the information (title or image) that will be shown in the associated indicator.

Let's see the steps to do this:

##### Choose which type of pager we want to create

First, we must choose the type of pager we want to create. Depending on our choice, we will have to create a view controller that extends from one of the following controllers: `TwitterPagerTabStripViewController`, `ButtonBarPagerTabStripViewController`, `SegmentedPagerTabStripViewController`, `BarPagerTabStripViewController`.

> All these built-in pager controllers extend from the base class `PagerTabStripViewController`. You can also make your custom pager controller by extending directly from `PagerTabStripViewController` in the event that no pager menu type fits your needs.

@abstr_code_section 

##### Connect outlets and add layout constraints

We strongly recommend using IB to set up our page controller views.

Drag a `UIViewController` into the storyboard and set up its class with your pager controller (`MyPagerTabStripName`). Drag a `UIScrollView` into your view controller view and connect `PagerTabStripViewController` `containerView` outlet with the scroll view.

Depending on which type of paging view controller you are working with you may have to connect more outlets.

For `BarPagerTabStripViewController`, we should connect `barView` outlet. barView type is UIView. `ButtonBarPagerTabStripViewController` requires us to connect `buttonBarView` outlet. `buttonBarView` type is `ButtonBarView` which extends from `UICollectionView`. `SegmentedPagerTabStripViewController` has a `segmentedControl` outlet; if the outlet is not connected the library try to set up the navigationItem `titleView` property using a `UISegmentedControl`. `TwitterPagerTabStripViewController` doesn't require us to connect any additional outlet.

> The example project contains a example for each pager controller type and we can look into it to see how views were added and how outlets were connected.

##### Provide the view controllers that will appear embedded into the PagerTabStrip view controller

You can provide the view controllers by overriding `func viewControllers(for: pagerTabStripController: PagerTabStripViewController) -> [UIViewController]` method.

@abstr_code_section 

> The method above is the only method declared in `PagerTabStripDataSource` protocol. We don't need to explicitly conform to it since base pager class already does it.

##### Provide information to show in each indicator

Every UIViewController that will appear within the PagerTabStrip needs to provide either a title or an image. In order to do so they should conform to `IndicatorInfoProvider` by implementing `func indicatorInfo(for pagerTabStripController: PagerTabStripViewController) -> IndicatorInfo` which provides the information required to show the PagerTabStrip menu (indicator) associated with the view controller.

@abstr_code_section 

**For a detailed step-by-step guide about how to use the library, please check out this community @abstr_hyperlink .**

That's it! We're done! 🍻🍻

## Customization

##### Pager Behaviour

The pager indicator can be updated progressive as we swipe or at once in the middle of the transition between the view controllers. By setting up `pagerBehaviour` property we can choose how the indicator should be updated.

@abstr_code_section 

@abstr_code_section 

Default Values: @abstr_code_section 

As you might have noticed, `common` and `progressive` enumeration cases have `skipIntermediateViewControllers` and `elasticIndicatorLimit` associated values.

`skipIntermediateViewControllers` allows us to skip intermediate view controllers when a tab indicator is tapped.

`elasticIndicatorLimit` allows us to tension the indicator when we reach a limit, I mean when we try to move forward from last indicator or move back from first indicator.

##### PagerTabStripDelegate & PagerTabStripIsProgressiveDelegate

Normally we don't need to implement these protocols because each pager type already conforms to it in order to properly update its indicator. However, there may be some scenarios when overriding a method may come in handy.

@abstr_code_section 

> Again, the method invoked by the library depends on the `pagerBehaviour` value.

### ButtonBar Customization

@abstr_code_section 

**Important:** Settings should be called before `viewDidLoad` is called. @abstr_code_section 

##### Update cells when selected indicator changes

We may need to update the indicator cell when the displayed view controller changes. The following function properties help to accomplish that. Depending on our pager `pagerBehaviour` value we will have to set up `changeCurrentIndex` or `changeCurrentIndexProgressive`.

@abstr_code_section 

Let's see an example:

@abstr_code_section 

### Bar Type Customization

@abstr_code_section 

### Twitter Type Customization

@abstr_code_section 

### Segmented Type Customization

@abstr_code_section 

## Requirements

  * iOS @abstr_number . @abstr_number +
  * Xcode @abstr_number . @abstr_number +



## Examples

Follow these @abstr_number steps to run Example project: Clone XLPagerTabStrip repository, open XLPagerTabStrip workspace and run the _Example_ project.

## Installation

### CocoaPods

@abstr_hyperlink is a dependency manager for Cocoa projects.

To install XLPagerTabStrip, simply add the following line to your Podfile:

@abstr_code_section 

### Carthage

@abstr_hyperlink is a simple, decentralized dependency manager for Cocoa.

To install XLPagerTabStrip, simply add the following line to your Cartfile:

@abstr_code_section 

## FAQ

#### How to change the visible child view controller programmatically

`PagerTabStripViewController` provides the following methods to programmatically change the visible child view controller:

@abstr_code_section 

#### How to migrate from Swift @abstr_number to Swift @abstr_number 

Check out @abstr_hyperlink 

## Author

  * @abstr_hyperlink ( @abstr_hyperlink )



## Change Log

This can be found in the CHANGELOG.md file.
