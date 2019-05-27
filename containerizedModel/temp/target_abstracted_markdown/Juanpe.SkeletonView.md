@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink   
@abstr_hyperlink 

🌎 Translations: @abstr_hyperlink by @abstr_hyperlink @abstr_hyperlink by @abstr_hyperlink 

Today almost all apps have async processes, such as Api requests, long running processes, etc. And while the processes are working, usually developers place a loading view to show users that something is going on.

`SkeletonView` has been conceived to address this need, an elegant way to show users that something is happening and also prepare them to which contents he is waiting.

Enjoy it! 🙂

  * Features
  * Guides
  * Installation 
    * Cocoapods
    * Carthage
  * How to use 
    * Collections
    * Multiline text
    * Custom colors
    * Appearance
    * Custom animations
    * Hierarchy
    * Debug
  * Documentation
  * Supported OS & SDK Versions
  * Next steps
  * Contributing
  * Mentions
  * Author
  * License



## 🌟 Features

  * [x] Easy to use
  * [x] All UIViews are skeletonables
  * [x] Fully customizable
  * [x] Universal (iPhone & iPad)
  * [x] Interface Builder friendly
  * [x] Simple Swift syntax
  * [x] Lightweight readable codebase



## 🎬 Guides

@abstr_hyperlink 

## 📲 Installation

#### Using @abstr_hyperlink 

Edit your `Podfile` and specify the dependency:

@abstr_code_section 

#### Using @abstr_hyperlink 

Edit your `Cartfile` and specify the dependency:

@abstr_code_section 

## 🐒 How to use

Only _* @abstr_number *_ steps needed to use `SkeletonView`:

_* @abstr_number ._ * Import SkeletonView in proper place. @abstr_code_section 

_* @abstr_number ._ * Now, set which views will be `skeletonables`. You achieve this in two ways:

**Using code:** @abstr_code_section **Using IB/Storyboards:**

@abstr_image 

_* @abstr_number ._ * Once you've set the views, you can show the **skeleton**. To do so, you have _* @abstr_number *_ choices:

@abstr_code_section 

**Preview**

Solid |  Gradient |  Solid Animated |  Gradient Animated  
---|---|---|---  
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
  
> **IMPORTANT!**
>
>> `SkeletonView` is recursive, so if you want show the skeleton in all skeletonable views, you only need to call the show method in the main container view. For example, with UIViewControllers

### 🌿 Collections

Now, `SkeletonView` is compatible with `UITableView` and `UICollectionView`.

#### UITableView

If you want to show the skeleton in a `UITableView`, you need to conform to `SkeletonTableViewDataSource` protocol.

@abstr_code_section As you can see, this protocol inherits from `UITableViewDataSource`, so you can replace this protocol with the skeleton protocol.

This protocol has a default implementation:

@abstr_code_section 

@abstr_code_section 

There is only one method you need to implement to let Skeleton know the cell identifier. This method doesn't have default implementation: @abstr_code_section 

**Example** @abstr_code_section 

> **IMPORTANT!** If you are using resizable cells (`tableView.rowHeight = UITableViewAutomaticDimension` ), it's mandatory define the `estimatedRowHeight`.

👩🏼‍🏫 **How specify which elements are skeletonables?**

Here is an illustration that shows how you should specify which elements are skeletonables when you are using an `UITableView`:

@abstr_image 

As you can see, we have to make skeletonable the tableview, the cell and the UI elements, but we don't need to set as skeletonable the `contentView`

#### UICollectionView

For `UICollectionView`, you need to conform to `SkeletonCollectionViewDataSource` protocol.

@abstr_code_section 

The rest of the process is the same as `UITableView`

### 📰 Multiline text

@abstr_image 

When using elements with text, `SkeletonView` draws lines to simulate text. Besides, you can decide how many lines you want. If `numberOfLines` is set to zero, it will calculate how many lines needed to populate the whole skeleton and it will be drawn. Instead, if you set it to one, two or any number greater than zero, it will only draw this number of lines.

##### 🎛 Customize

You can set some properties for multilines elements.

| Property | Values | Default | Preview | ------- | ------- |------- | ------- | **Filling percent** of the last line. | `@abstr_number ... @abstr_number` | `@abstr_number %` | @abstr_image | **Corner radius** of lines. ( **NEW** ) | `@abstr_number ... @abstr_number` | `@abstr_number` | @abstr_image 

To modify the percent or radius **using code** , set the properties: @abstr_code_section 

Or, if you prefer use **IB/Storyboard** :

@abstr_image 

### 🎨 Custom colors

You can decide which color the skeleton is tinted with. You only need to pass as a parameter the color or gradient you want.

**Using solid colors** @abstr_code_section **Using gradients** @abstr_code_section 

Besides, `SkeletonView` features @abstr_number flat colors 🤙🏼

`UIColor.turquoise, UIColor.greenSea, UIColor.sunFlower, UIColor.flatOrange ... @abstr_code_section Swift SkeletonAppearance.default.multilineHeight = @abstr_number SkeletonAppearance.default.tintColor = .green @abstr_code_section SkeletonView` has two built-in animations, _pulse_ for solid skeletons and _sliding_ for gradients.

Besides, if you want to do your own skeleton animation, it's really easy.

Skeleton provides the `showAnimatedSkeleton` function which has a `SkeletonLayerAnimation` closure where you can define your custom animation.

@abstr_code_section 

You can call the function like this:

@abstr_code_section 

It's available `SkeletonAnimationBuilder`. It's a builder to make `SkeletonLayerAnimation`.

Today, you can create **sliding animations** for gradients, deciding the **direction** and setting the **duration** of the animation (default = @abstr_number . @abstr_number s).

@abstr_code_section 

`GradientDirection` is an enum, with this cases:

| Direction | Preview |------- | ------- | .leftRight | @abstr_image | .rightLeft | @abstr_image | .topBottom | @abstr_image | .bottomTop | @abstr_image | .topLeftBottomRight | @abstr_image | .bottomRightTopLeft | @abstr_image 

> **😉 TRICK!** Exist another way to create sliding animations, just using this shortcut:
>
>> ```let animation = GradientDirection.leftToRight.slidingAnimation() @abstr_code_section swift var skeletonDescription: String

@abstr_code_section MIT License

Copyright (c) @abstr_number Juanpe Catalán

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. ```
