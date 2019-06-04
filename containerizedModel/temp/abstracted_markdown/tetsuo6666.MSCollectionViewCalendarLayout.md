# Introduction

**MSCollectionViewCalendarLayout** was written by **@abstr_hyperlink** for **@abstr_hyperlink**

`MSCollectionViewCalendarLayout` is a `UICollectionViewLayout` subclass for displaying chronological data. It divides its cells into columns of days, with the size of each cell corresponding to its length. `MSCollectionViewCalendarLayout` is very similar to the "Week" view in the Apple Calendar/iCal app. See the example screenshots for what this looks like.

# UICollectionView?

`UICollectionView` is awesome. If you're unfamiliar, read Matt Thompson's @abstr_hyperlink about them on @abstr_hyperlink . Everyone should use them (yes, even instead of good ol' `UITableView`). This is especially true now that iOS @abstr_number + adoption is @abstr_hyperlink (As of March, @abstr_number ). It's the right thing to do.

Because of how awesome `UICollectionView` is, the `UIViewController` powering the below example is incredibly thin—only about * @abstr_number lines of code*, including whitespace.

# Example

The example project queries the @abstr_hyperlink for the next @abstr_number sport events near Denver, Colorado. It displays these events in a `UICollectionView` using `MSCollectionViewCalendarLayout`, mimicking the look and feel of the Apple Calendar iOS App. To run, build and run the `Example` target in from `Example.xcworkspace` within the `Example` directory.

## Screenshots

@abstr_image @abstr_image 

# Usage

## CocoaPods

Add the following to your `Podfile` and run `$ pod install`.

@abstr_code_section 

If you don't have CocoaPods installed, you can learn how to do so @abstr_hyperlink .

## Invalidating Layout

If you change the content of your `MSCollectionViewCalendarLayout`, make sure to call the `invalidateLayoutCache` method. This flushes the internal caches of your `MSCollectionViewCalendarLayout`, allowing the data to be repopulated correctly.

## Section Layouts

On the iPhone, `MSCollectionViewCalendarLayout` defaults to tiling its day sections vertically. The day column headers act as they do in a table view, sticking to the top until they're replaced by the next day's as your scroll. On the iPad, the day sections are tiled horizontally. This behavior is controlled by the `sectionLayoutType` property. Its values can be:

  * `MSSectionLayoutTypeHorizontalTile` – Day sections tile vertically.
  * `MSSectionLayoutTypeVerticalTile` – Day sections tile horizontally.



## Collection View Elements

`MSCollectionViewCalendarLayout` has nine different elements that you should register `UICollectionReusableView` and `UICollectionViewCell` classes for. They are:

  * **Event Cell** (`UICollectionViewCell`) – Represents your events.
  * **Day Column Header** (`UICollectionReusableView`) – Contains the day text, top aligned.
  * **Time Row Header** (`UICollectionReusableView`) – Contains the time text, left aligned.
  * **Day Column Header Background** (`UICollectionReusableView`) – Background of the day column header.
  * **Time Row Header Background** (`UICollectionReusableView`) – Background of the time row header.
  * **Current Time Indicator** (`UICollectionReusableView`) – Displayed over the time row header, aligned at the current time.
  * **Current Time Horizontal Gridline** (`UICollectionReusableView`) – Displayed under the cells, aligned to the current time.
  * **Horizontal Gridilne** (`UICollectionReusableView`) – Displayed under the cells, aligns with its corresponding time row header.
  * **Vertical Gridilne** (`UICollectionReusableView`) – Displayed under the cells, aligns with its corresponding day column header.



If you think there should be more of these, don't hesitate to add them in a pull request. To see how this is done, check the example.

## Can I call performBatchUpdates:completion: to make stuff animate?

Don't do this. It doesn't work properly, and is a "bag of hurt".

# Requirements

Requires iOS @abstr_number . @abstr_number + and ARC.

# Contributing

Forks, patches and other feedback are welcome.

# License

_Copyright (c) @abstr_number Monospace Ltd. All rights reserved._

_This code is distributed under the terms and conditions of the MIT license._

_Permission is hereby granted, free of charge, to any person obtaining a copy_ _of this software and associated documentation files (the "Software"), to deal_ _in the Software without restriction, including without limitation the rights_ _to use, copy, modify, merge, publish, distribute, sublicense, and/or sell_ _copies of the Software, and to permit persons to whom the Software is_ _furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in_ _all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR_ _IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,_ _FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE_ _AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER_ _LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,_ _OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN_ _THE SOFTWARE._

@abstr_hyperlink 
