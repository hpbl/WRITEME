_*Version @abstr_number . @abstr_number . @abstr_number *_ , synced to @abstr_hyperlink 

@abstr_image @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

### Just a heads up: Charts @abstr_number . @abstr_number has some breaking changes. Please read @abstr_hyperlink .

### Another heads up: ChartsRealm is now in a @abstr_hyperlink . Pods is also now `Charts` and `ChartsRealm`, instead of ~`Charts/Core`~ and ~`Charts/Realm`~

### One more heads up: As Swift evolves, if you are not using the latest Swift compiler, you shouldn't check out the master branch. Instead, you should go to the release page and pick up whatever suits you.

  * Xcode @abstr_number . @abstr_number / Swift @abstr_number . @abstr_number (master branch)
  * iOS >= @abstr_number . @abstr_number (Use as an **Embedded** Framework)
  * tvOS >= @abstr_number . @abstr_number 
  * macOS >= @abstr_number . @abstr_number 



Okay so there's this beautiful library called @abstr_hyperlink by @abstr_hyperlink which has become very popular amongst Android developers, but there was no decent solution to create charts for iOS.

I've chosen to write it in `Swift` as it can be highly optimized by the compiler, and can be used in both `Swift` and `ObjC` project. The demo project is written in `ObjC` to demonstrate how it works.

**An amazing feature** of this library now, for Android, iOS, tvOS and macOS, is the time it saves you when developing for both platforms, as the learning curve is singleton- it happens only once, and the code stays very similar so developers don't have to go around and re-invent the app to produce the same output with a different library. (And that's not even considering the fact that there's not really another good choice out there currently...)

## Having trouble running the demo?

  * `ChartsDemo/ChartsDemo.xcodeproj` is the demo project for iOS/tvOS
  * `ChartsDemo-OSX/ChartsDemo-OSX.xcodeproj` is the demo project for macOS
  * Make sure you are running a supported version of Xcode. 
    * Usually it is specified here a few lines above.
    * In most cases it will be the latest Xcode version.
  * Make sure that your project supports Swift @abstr_number . @abstr_number 
  * Optional: Run `carthage checkout` in the project folder, to fetch dependencies (i.e testing dependencies). 
    * If you don't have Carthage - you can get it @abstr_hyperlink .



## Usage

In order to correctly compile:

@abstr_number . Drag the `Charts.xcodeproj` to your project   
@abstr_number . Go to your target's settings, hit the "+" under the "Embedded Binaries" section, and select the Charts.framework   
@abstr_number . `@import Charts`   
@abstr_number . When using Swift in an ObjC project: \- You need to import your Bridging Header. Usually it is " _YourProject-Swift.h_ ", so in ChartsDemo it's " _ChartsDemo-Swift.h_ ". Do not try to actually include " _ChartsDemo-Swift.h_ " in your project :-) \- (Xcode @abstr_number . @abstr_number and earlier) Under "Build Options", mark "Embedded Content Contains Swift Code" \- (Xcode @abstr_number . @abstr_number +) Under "Build Options", mark "Always Embed Swift Standard Libraries" @abstr_number . When using @abstr_hyperlink : \- Note that the Realm framework is not linked with Charts - it is only there for _optional_ bindings. Which means that you need to have the framework in your project, and in a compatible version to whatever is compiled with Charts. We will do our best to always compile against the latest version. \- You'll need to add `ChartsRealm` as a dependency too.

## @abstr_number rd party tutorials

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Want your tutorial to show here? Create a PR!



## Troubleshooting

#### Can't compile?

  * Please note the difference between installing a compiled framework from CocoaPods or Carthage, and copying the source code.
  * Please read the **Usage** section again.
  * Search in the issues
  * Try to politely ask in the issues section



#### Other problems / feature requests

  * Search in the issues
  * Try to politely ask in the issues section



## CocoaPods Install

Add `pod 'Charts'` to your Podfile. "Charts" is the name of the library.   
For @abstr_hyperlink support, please add `pod 'ChartsRealm'` too.

**Note:** ~~`pod 'ios-charts'`~~ is not the correct library, and refers to a different project by someone else.

## Carthage Install

Charts now include Carthage prebuilt binaries.

@abstr_code_section 

In order to build the binaries for a new release, use `carthage build --no-skip-current && carthage archive Charts`.

## @abstr_number rd party bindings

Xamarin (by @Flash @abstr_number ): _iOS_ \- @abstr_hyperlink / @abstr_hyperlink . _Android_ \- @abstr_hyperlink / @abstr_hyperlink .

## Help

If you like what you see here, and want to support the work being done in this repository, you could: * Contribute code, issues and pull requests * Let people know this library exists (:fire: spread the word :fire:) * @abstr_hyperlink (You can buy me a beer, or you can buy me dinner :-)

**Note:** The author of @abstr_hyperlink is the reason that this library exists, and is accepting @abstr_hyperlink on his page. He deserves them!

## Questions & Issues

If you are having questions or problems, you should:

  * Make sure you are using the latest version of the library. Check the @abstr_hyperlink .
  * Study the Android version's @abstr_hyperlink 
  * Study the (Still incomplete @abstr_hyperlink ) @abstr_hyperlink 
  * Search or open questions on @abstr_hyperlink with the `ios-charts` tag
  * Search @abstr_hyperlink for your problem (open and closed)
  * Create new issues (please :fire: **search known issues before** :fire:, do not create duplicate issues)



# Features

**Core features:** \- @abstr_number different chart types \- Scaling on both axes (with touch-gesture, axes separately or pinch-zoom) \- Dragging / Panning (with touch-gesture) \- Combined-Charts (line-, bar-, scatter-, candle-stick-, bubble-) \- Dual (separate) Axes \- Customizable Axes (both x- and y-axis) \- Highlighting values (with customizable popup-views) \- Save chart to camera-roll / export to PNG/JPEG \- Predefined color templates \- Legends (generated automatically, customizable) \- Animations (build up animations, on both x- and y-axis) \- Limit lines (providing additional information, maximums, ...) \- Fully customizable (paints, typefaces, legends, colors, background, gestures, dashed lines, ...) \- Plotting data directly from @abstr_hyperlink mobile database ( @abstr_hyperlink )

**Chart types:**

_Screenshots are currently taken from the original repository, as they render exactly the same :-)_

  * **LineChart (with legend, simple design)** @abstr_image 
  * **LineChart (with legend, simple design)** @abstr_image 

  * **LineChart (cubic lines)** @abstr_image 

  * **LineChart (gradient fill)** @abstr_image 

  * **Combined-Chart (bar- and linechart in this case)** @abstr_image 

  * **BarChart (with legend, simple design)**




@abstr_image 

  * **BarChart (grouped DataSets)**



@abstr_image 

  * **Horizontal-BarChart**



@abstr_image 

  * **PieChart (with selection, ...)**



@abstr_image 

  * **ScatterChart** (with squares, triangles, circles, ... and more)



@abstr_image 

  * **CandleStickChart** (for financial data)



@abstr_image 

  * **BubbleChart** (area covered by bubbles indicates the value)



@abstr_image 

  * **RadarChart** (spider web chart)



@abstr_image 

# Documentation

Currently there's no need for documentation for the iOS/tvOS/macOS version, as the API is _* @abstr_number % the same_ * as on Android.   
You can read the official @abstr_hyperlink documentation here: @abstr_hyperlink 

Or you can see the Charts Demo project in both Objective-C and Swift ( @abstr_hyperlink , as well as macOS @abstr_hyperlink ) and learn the how-tos from it.

# Special Thanks

Goes to @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink for new features, bugfixes, and lots and lots of involvement in our open-sourced community! You guys are a huge help to all of those coming here with questions and issues, and I couldn't respond to all of those without you.

# License

Copyright @abstr_number Daniel Cohen Gindi & Philipp Jahoda

Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
    
    
    http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number
    

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
