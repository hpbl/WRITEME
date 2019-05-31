# Lottie for iOS, macOS (and @abstr_hyperlink and @abstr_hyperlink )

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

> == **Announcement** ==: As of @abstr_number . @abstr_number Lottie has been completely rewritten in Swift @abstr_number . @abstr_number ! For Objective-C support please use Lottie @abstr_number . @abstr_number . @abstr_number . Read Migration doc Here.

Lottie is a mobile library for Android and iOS that natively renders vector based animations and art in realtime with minimal code.

Lottie loads and renders animations and vectors exported in the bodymovin JSON format. Bodymovin JSON can be created and exported from After Effects with @abstr_hyperlink , Sketch with @abstr_hyperlink , and from @abstr_hyperlink . 

For the first time, designers can create **and ship** beautiful animations without an engineer painstakingly recreating it by hand. Since the animation is backed by JSON they are extremely small in size but can be large in complexity! Animations can be played, resized, looped, sped up, slowed down, reversed, and even interactively scrubbed. Lottie can play or loop just a portion of the animation as well, the possibilities are endless! Animations can even be **_changed at runtime_** in various ways! Change the color, position or any keyframable value! Lottie also supports native UIViewController Transitions out of the box!

Here is just a small sampling of the power of Lottie

@abstr_image @abstr_image 

@abstr_image 

@abstr_image 

@abstr_image 

## Contents

  * Installing Lottie
  * Quick Start
  * Animation Model 
    * Loading Animation
  * Animation View 
    * Supplying Images
    * Playing Animations
    * Animation Settings
    * Using Markers
    * Dynamic Animation Properties
    * Adding Views to Animations
  * Image Provider 
    * BundleImageProvider
    * FilepathImageProvider
  * Animation Cache 
    * LRUAnimationCache
  * Value Providers 
    * Primitives
    * Prebuilt Providers
  * Animated Control
  * Animated Switch
  * Animated Button
  * Examples 
    * Changing Animations at Runtime
  * Supported After Effects Features
  * Alternatives
  * Why is it Called Lottie?
  * Contributing
  * Issues or Feature Requests? 

## Installing Lottie




Lottie supports @abstr_hyperlink and @abstr_hyperlink (Both dynamic and static). Lottie is written in ***Swift @abstr_number . @abstr_number ***.

### Github Repo

You can pull the @abstr_hyperlink and include the Lottie.xcodeproj to build a dynamic or static library.

### CocoaPods

Add the pod to your Podfile: @abstr_code_section 

And then run: @abstr_code_section After installing the cocoapod into your project import Lottie with @abstr_code_section 

### Carthage

Add Lottie to your Cartfile: @abstr_code_section 

And then run: @abstr_code_section In your application targets “General” tab under the “Linked Frameworks and Libraries” section, drag and drop lottie-ios.framework from the Carthage/Build/iOS directory that `carthage update` produced.

Back to contents

## Quick Start

Lottie loads and renders animations and vectors exported in the bodymovin JSON format. Bodymovin JSON can be created and exported from After Effects with @abstr_hyperlink , Sketch with @abstr_hyperlink , and from @abstr_hyperlink . 

Lottie-iOS looks to `UIImageView` for its API. The basic API is broken into two parts: \- `Animation` \- The backing model for an animation that is deserialized from a json file. \- `AnimationView` \- A `UIView` subclass responsible for loading and rendering the `Animation`

You can quickly load a Lottie animation with: @abstr_code_section Additionally you can choose to load an `AnimationView` without any animation, and set the animation later: @abstr_code_section You can load animations from a specific bundle, a filepath, or even asynchronously from a URL. Read more about loading animations Here

After loading an animation it can be played with: @abstr_code_section Read more about playing animations Here

Back to contents

## Animation Model

The `Animation` model is the top level model object in Lottie. An `Animation` holds all of the animation data backing a Lottie Animation. `Animations` are deserialized from JSON. Codable; see JSON schema @abstr_hyperlink .

`Animation` is also fully `codable`. ==Animations can be decoded, and encoded to JSON!==

### Loading Animation

There are a variety of ways to load an `Animation` on its own. Additionally you can load an animation while allocating an `AnimationView` through one of the convenience initializers on `AnimationView`.

Animations can be stored in an `AnimationCacheProvider` to reduce the overhead of deserializing the same animations over and over. Read more here. #

#### Loading from a Bundle

@abstr_code_section Loads an animation model from a bundle by its name. Returns `nil` if an animation is not found. 

Parameters: : **name** : The name of the json file without the json extension. EG "StarAnimation" : **bundle** : The bundle in which the animation is located. Defaults to `Bundle.main` : **subdirectory** : A subdirectory in the bundle in which the animation is located. Optional. : **animationCache** : A cache for holding loaded animations. Optional.

Example: @abstr_code_section #

#### Loading from a Filepath

@abstr_code_section Loads an animation model from an absolute filepath. Returns `nil` if an animation is not found. 

Parameters: : **filepath** : The absolute filepath of the animation to load. EG "/User/Me/starAnimation.json" : **animationCache** : A cache for holding loaded animations. Optional.

Example: @abstr_code_section 

Back to contents

## Animation View

`AnimationView` is a UIView (NSView on macOS) subclass that displays animation content. `AnimationView` offers a number of ways to load, play, and even change animations.

### Creating Animation Views

Animation views can be allocated with or without animation data. There are a handful of convenience initializers for initializing with animations. 

#

### Supplying Images

`AnimationView` uses `AnimationImageProvider` to retrieve the images for its animation. An image provider can be supplied when the Animation View is initialized, or after by setting its `imageProvider` property. To force an AnimationView to reload its images call `reloadImages()` on the AnimationView.

Read more about `AnimationImageProvider` here

#

### Playing Animations

#### Time

There are several methods for playing animations, and portions of animations. Lottie describes Time in three ways: \- Frame Time - Describes time in a frames per second format. `(Seconds * Framerate)` *eg: @abstr_number . @abstr_number second is FrameTime @abstr_number when framerate is @abstr_number *. \- Progress Time - Describes time in progress from @abstr_number (the beginning of the animation timeline) to @abstr_number (the end of the animation timeline). \- Time - Describes time in seconds.

All three can be used to play and set time on an `AnimationView` #

#### Basic Playing

@abstr_code_section Plays the animation from its current state to the end of its timeline. Calls the completion block when the animation is stopped.

Parameters: : **completion** : A completion block that is called when the animation completes. The block will be passed `true` if the animation completes and `false` if the animation was interrupted. Optional.

Example: @abstr_code_section #

#### Play with Progress Time

@abstr_code_section Plays the animation from a `Progress Time` to a `Progress Time` with options.

Parameters: : **fromProgress** : The start progress of the animation. If `nil` the animation will start at the current progress. (Optional) : **toProgress** : The end progress of the animation. : **loopMode** : The loop behavior of the animation. If `nil` the view's `loopMode` property will be used. (Optional) : **completion** : An optional completion closure to be called when the animation stops. (Optional)

Example: @abstr_code_section #

#### Play with Frame Time

@abstr_code_section Plays the animation from a `Frame Time` to a `Frame Time` with options.

Parameters: : **fromFrame** : The start frame of the animation. If `nil` the animation will start at the current frame. (Optional) : **toFrame** : The end frame of the animation. : **loopMode** : The loop behavior of the animation. If `nil` the view's `loopMode` property will be used. (Optional) : **completion** : An optional completion closure to be called when the animation stops. (Optional)

Example: @abstr_code_section #

#### Play with Marker Names

@abstr_code_section Plays the animation from a named marker to another marker. Markers are point in time that are encoded into the Animation data and assigned a name. Read more on Markers here ==NOTE==: If markers are not found the play command will exit. 

Parameters: : **fromMarker** : The start marker for the animation playback. If `nil` the animation will start at the current progress. (Optional) : **toMarker** : The end marker for the animation playback. : **loopMode** : The loop behavior of the animation. If `nil` the view's `loopMode` property will be used. (Optional) : **completion** : An optional completion closure to be called when the animation stops. (Optional)

Example: @abstr_code_section #

#### Stop

@abstr_code_section Stops the currently playing animation, if any. The animation view is reset to its start frame. The previous animation's completion block will be closed with `false` Example: @abstr_code_section #

#### Pause

@abstr_code_section Pauses the animation in its current state. The previous animation's completion block will be closed with `false` Example: @abstr_code_section #

### Animation Settings

`AnimationView` has a variety of settings for controlling playback, and visual state. #

#### Content Mode

@abstr_code_section Describes how the AnimationView should resize and scale its contents.

Options: : **scaleToFill** : Animation scaled to fill the bounds of AnimationView. The animation will be stretched if the aspect of the AnimationView is different than the Animation. : **scaleAspectFit** : Animation will be scaled to fit the AnimationView while preserving its aspect ratio. : **scaleAspectFill** : Animation will be scaled to fill the AnimationView while preserving its aspect ratio. : **topLeft** : Animation will not be scaled. #

#### Background Behavior

@abstr_code_section Describes the behavior of an AnimationView when the app is moved to the background. (iOS only)

The default is `.pause`

Options: : **stop** : Stop the animation and reset it to the beginning of its current play time. The completion block is called. : **pause** : Pause the animation in its current state. The completion block is called. : **pauseAndRestore** : Pause the animation and restart it when the application moves back to the foreground. The completion block is stored and called when the animation completes. #

#### Loop Mode

@abstr_code_section Sets the loop behavior for `play` calls. Defaults to `playOnce` Options: : **playOnce** : Animation is played once then stops. : **loop** : Animation will loop from end to beginning until stopped. : **autoReverse** : Animation will play forward, then backwards and loop until stopped. #

#### Is Animation Playing

@abstr_code_section Returns `true` if the animation is currently playing, `false` if it is not. #

#### Should Rasterize When Idle

@abstr_code_section When `true` the animation view will rasterize its contents when not animating. Rasterizing will improve performance of static animations. ==Note:== this will not produce crisp results at resolutions above the animation's natural resolution.

Defaults to `false` #

#### Respect Animation Frame Rate

@abstr_code_section When `true` the animation will play back at the framerate encoded in the `Animation` model. When `false` the animation will play at the framerate of the device.

Defaults to `false` #

#### Animation Speed

@abstr_code_section Sets the speed of the animation playback. Higher speed equals faster time. Defaults to `@abstr_number` #

#### Current Progress

@abstr_code_section Sets the current animation time with a Progress Time. Returns the current Progress Time, or the final Progress Time if an animation is in progress. ==Note==: Setting this will stop the current animation, if any. #

#### Current Time

@abstr_code_section Sets the current animation time with a TimeInterval. Returns the current TimeInterval, or the final TimeInterval if an animation is in progress. ==Note==: Setting this will stop the current animation, if any. #

#### Current Frame

@abstr_code_section Sets the current animation time with a Frame Time. Returns the current Frame Time, or the final Frame Time if an animation is in progress. ==Note==: Setting this will stop the current animation, if any. #

#### Realtime Frame

@abstr_code_section Returns the realtime Frame Time of an AnimationView while an animation is in flight. #

#### Realtime Progress

@abstr_code_section Returns the realtime Progress Time of an AnimationView while an animation is in flight. #

#### Force Display Update

@abstr_code_section Forces the AnimationView to redraw its contents.

#

### Using Markers

Markers are a way to describe a point in time by a key name. Markers are encoded into animation JSON. By using markers a designer can mark playback points for a developer to use without having to worry about keeping track of animation frames. If the animation file is updated, the developer does not need to update playback code.

Markers can be used to playback sections of animation, or can be read directly for more advanced use. Both `Animation` and `AnimationView` have methods for reading Marker Times.

#

#### Reading Marker Time

@abstr_code_section Each method returns the time for the marker specified by name. Returns nil if the marker is not found. #

### Dynamic Animation Properties

Nearly all properties of a Lottie animation can be changed at runtime using a combination of Animation Keypaths and Value Providers. Setting a ValueProvider on a keypath will cause the animation to update its contents and read the new Value Provider. In addition, animation properties can be read using `Animation Keypaths`.

#

#### Setting Dynamic Properties

@abstr_code_section Sets a ValueProvider for the specified keypath. The value provider will be set on all properties that match the keypath.

Parameters : **valueProvider** : The new value provider for the property. : **keypath** : The keypath used to search for properties.

Example: @abstr_code_section #

#### Reading Animation Properties

@abstr_code_section Reads the value of a property specified by the Keypath. Returns nil if no property is found.

Parameters : **for** : The keypath used to search for the property. : **atFrame** : The Frame Time of the value to query. If nil then the current frame is used.

Example: @abstr_code_section #

#### Logging Keypaths

@abstr_code_section Logs all child keypaths of the animation into the console.

#

### Adding Views to Animations

Custom views can be added to AnimationViews. These views will animate alongside the animation.

#

#### Adding Subviews

@abstr_code_section Searches for the nearest child layer to the first Keypath and adds the subview to that layer. The subview will move and animate with the child layer. Furthermore the subview will be in the child layers coordinate space. ==Note==: if no layer is found for the keypath, then nothing happens.

Parameters : **subview** : The subview to add to the found animation layer. : **keypath** : The keypath used to find the animation layer.

Example: @abstr_code_section #

#### Converting CGRect and CGPoint to Layers

@abstr_code_section These two methods are used to convert geometry from the AnimationView's coordinate space into the coordinate space of the layer found at Keypath.

If no layer is found, nil is returned

Parameters : **point or rect** : The CGPoint or CGRect in the AnimationView's coordinate space to convert. : **keypath** : The keypath used to find the layer. # Back to contents

## Image Provider

Image provider is a protocol that is used to supply images to `AnimationView`.

Some animations require a reference to an image. The image provider loads and provides those images to the `AnimationView`. Lottie includes a couple of prebuilt Image Providers that supply images from a Bundle, or from a FilePath.

Additionally custom Image Providers can be made to load images from a URL, or to Cache images.

### BundleImageProvider

@abstr_code_section An `AnimationImageProvider` that provides images by name from a specific bundle. The `BundleImageProvider` is initialized with a bundle and an optional searchPath.

@abstr_code_section #

### FilepathImageProvider

@abstr_code_section An `AnimationImageProvider` that provides images by name from a specific local filepath.

@abstr_code_section Back to contents

## Animation Cache

`AnimationCacheProvider` is a protocol that describes an Animation Cache. Animation Cache is used when loading `Animation` models. Using an Animation Cache can increase performance when loading an animation multiple times.

Lottie comes with a prebuilt LRU Animation Cache.

### LRUAnimationCache

An Animation Cache that will store animations up to `cacheSize`. Once `cacheSize` is reached, the least recently used animation will be ejected. The default size of the cache is @abstr_number .

LRUAnimationCache has a global `sharedCache` that is used to store the animations.

You may also call `LRUAnimationCache.sharedCache.clearCache()` to clear the cache.

Back to contents

## Value Providers

`AnyValueProvider` is a protocol that return animation data for a property at a given time. Every fame an `AnimationView` queries all of its properties and asks if their ValueProvider has an update. If it does the AnimationView will read the property and update that portion of the animation.

Value Providers can be used to dynamically set animation properties at run time.

### Primitives

ValueProviders work with a few Primitive data types. 

  * **Color** : A primitive that describes a color in R G B A ( @abstr_number - @abstr_number )
  * **Vector @abstr_number D** : A single float value.
  * **Vector @abstr_number D** : A three dimensional vector. (X, Y, Z)



### Prebuilt Providers

Lottie comes with a handful of prebuilt providers for each Primitive Type. Each Provider can be initialized with a single value, or a block that will be called on a frame-by-frame basis.

Example @abstr_code_section Back to contents

## Animation Keypaths

`AnimationKeypath` is an object that describes a keypath search for nodes in the animation JSON. `AnimationKeypath` matches views and properties inside of `AnimationView` to their backing `Animation` model by name.

A keypath can be used to set properties on an existing animation, or can be validated with an existing `Animation`. `AnimationKeypath` can describe a specific object, or can use wildcards for fuzzy matching of objects. Acceptable wildcards are either " _" (star) or "_ *" (double star). Single star will search a single depth for the next object. Double star will search any depth.

An `AnimationKeypath` can be initialized with a dot-separated keypath, or with an array of keys. 

Keypath Examples: @abstr_code_section @abstr_code_section 

Code Example: @abstr_code_section 

Back to contents

## Animated Control

Lottie comes prepacked with a two Animated Controls, `AnimatedSwitch` and `AnimatedButton`. Both of these controls are built on top of `AnimatedControl`

`AnimatedControl` is a subclass of `UIControl` that provides an interactive mechanism for controlling the visual state of an animation in response to user actions.

The `AnimatedControl` will show and hide layers depending on the current `UIControl.State` of the control.

Users of `AnimationControl` can set a Layer Name for each `UIControl.State`. When the state is change the `AnimationControl` will change the visibility of its layers.

Back to contents

## Animated Switch

@abstr_image 

An interactive switch with an 'On' and 'Off' state. When the user taps on the switch the state is toggled and the appropriate animation is played.

Both the 'On' and 'Off' have an animation play range associated with their state.

To change the play range for each state use: @abstr_code_section Back to contents

## Animated Button

@abstr_image 

An interactive button that plays an animation when pressed. The `AnimatedButton` can play a variety of time ranges for different `UIControl.Event`. Play ranges are set using either: @abstr_code_section Once set the animation will automatically play when the event is triggered.

Example: @abstr_code_section Back to contents

## Examples

### Changing Animations at Runtime

Lottie can do more than just play beautiful animations. Lottie allows you to **change** animations at runtime.

### Say we want to create @abstr_number toggle switches.

@abstr_image 

It's easy to create the four switches and play them:

@abstr_code_section 

### Now lets change their colors

@abstr_image 

@abstr_code_section The keyPath is a dot separated path of layer and property names from After Effects. AnimationView provides `func logHierarchyKeypaths()` which will recursively log all settable keypaths for the animation. @abstr_image 

"BG-On.Group @abstr_number .Fill @abstr_number .Color"

### Now lets change a couple of properties

@abstr_image 

Lottie allows you to change **any** property that is animatable in After Effects. 

Back to contents

#

## Supported After Effects Features

| **Shapes** | _* @abstr_number . @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | |:--|:-:|:-:| | Shape | 👍 | 👍 | | Ellipse | 👍 | 👍 | | Rectangle | 👍 | 👍 | | Rounded Rectangle | 👍 | 👍 | | Polystar | 👍 | 👍 | | Group | 👍 | 👍 | | Repeater | 👍 | ⛔️ | | Trim Path (individually) | ⛔️ | 🎉 | | Trim Path (simultaneously) | ❗️ | 🎉 | | **Renderable** | _* @abstr_number . @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | | Fill | 👍 | 👍 | | Stroke | 👍 | 👍 | | Radial Gradient | 👍 | 👍 | | Linear Gradient | 👍 | 👍 | | Gradient Stroke | ⛔️ | 🎉 | | **Transforms** | _* @abstr_number . @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | | Position | 👍 | 👍 | | Position (separated X/Y) | ❗️ | 👍 | | Scale | 👍 | 👍 | | Skew | ⛔️ | 🎉 | | Rotation | 👍 | 👍 | | Anchor Point | 👍 | 👍 | | Opacity | 👍 | 👍 | | Parenting | 👍 | 👍 | | Auto Orient | ⛔️ | ⛔️ | | **Interpolation** | _* @abstr_number . @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | | Linear Interpolation | ❗️ | 🎉 | | Bezier Interpolation | 👍 | 👍 | | Hold Interpolation | 👍 | 👍 | | Spatial Bezier Interpolation | ❗️ | 🎉 | | Rove Across Time | 👍 | 👍 | | **Masks** | _* @abstr_number . @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | | Mask Path | 👍 | 👍 | | Mask Opacity | 👍 | 👍 | | Add | 👍 | 👍 | | Subtract | ❗️ | 🎉 | | Intersect | ⛔️ | 🎉 | | Lighten | ⛔️ | ⛔️ | | Darken | ⛔️ | ⛔️ | | Difference | ⛔️ | ⛔️ | | Expansion | ⛔️ | ⛔️ | | Feather | ⛔️ | ⛔️ | | **Mattes** | _* @abstr_number . @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | | Alpha Matte | 👍 | 👍 | | Alpha Inverted Matte | ⛔️ | 🎉 | | Luma Matte | ⛔️ | ⛔️ | | Luma Inverted Matte | ⛔️ | ⛔️ | | **Merge Paths** | _* @abstr_number . @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | | Merge | ⛔ | ⛔ | | Add | ⛔ | ⛔ | | Subtract | ⛔ | ⛔ | | Intersect | ⛔ | ⛔ | | Exclude Intersection | ⛔ | ⛔ | | **Layer Effects** | _* @abstr_number . @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | | Fill | ⛔️ | ⛔️ | | Stroke | ⛔️ | ⛔️ | | Tint | ⛔️ | ⛔️ | | Tritone | ⛔️ | ⛔️ | | Levels Individual Controls | ⛔️ | ⛔️ | | **Text** | _* @abstr_number . @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | | Glyphs | ⛔️ | ⛔️ | | Fonts | ⛔️ | 🎉 | | Transform | ⛔️ |🎉 | | Fill | ⛔️ | 🎉 | | Stroke | ⛔️ | 🎉 | | Tracking | ⛔️ | 🎉 | | Anchor point grouping | ⛔️ | ⛔️ | | Text Path | ⛔ | ⛔️ | | Per-character @abstr_number D | ⛔ | ⛔️ | | Range selector (Units) | ⛔ | ⛔️ | | Range selector (Based on) | ⛔ | ⛔️ | | Range selector (Amount) | ⛔ | ⛔️ | | Range selector (Shape) | ⛔ | ⛔️ | | Range selector (Ease High) | ⛔ | ⛔️ | | Range selector (Ease Low) | ⛔ | ⛔️ | | Range selector (Randomize order) | ⛔ | ⛔️ | | expression selector | ⛔ | ⛔️ | | **Other** | _* @abstr_number . @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | | Expressions | ⛔️ | ⛔️ | | Images | 👍 | 👍 | | Precomps | 👍 | 👍 | | Time Stretch | ⛔️ | 👍 | | Time remap | ⛔️ | 👍 | | Markers | ⛔️ | 🎉 |

Back to contents

## Alternatives

@abstr_number . Build animations by hand. Building animations by hand is a huge time commitment for design and engineering across Android and iOS. It's often hard or even impossible to justify spending so much time to get an animation right. @abstr_number . @abstr_hyperlink . Keyframes is a wonderful new library from Facebook that they built for reactions. However, Keyframes doesn't support some of Lottie's features such as masks, mattes, trim paths, dash patterns, and more. @abstr_number . Gifs. Gifs are more than double the size of a bodymovin JSON and are rendered at a fixed size that can't be scaled up to match large and high density screens. @abstr_number . Png sequences. Png sequences are even worse than gifs in that their file sizes are often @abstr_number - @abstr_number x the size of the bodymovin json and also can't be scaled up.

Back to contents

## Why is it Called Lottie?

Lottie is named after a German film director and the foremost pioneer of silhouette animation. Her best known films are The Adventures of Prince Achmed ( @abstr_number ) – the oldest surviving feature-length animated film, preceding Walt Disney's feature-length Snow White and the Seven Dwarfs ( @abstr_number ) by over ten years. @abstr_hyperlink 

Back to contents

## Contributing

Contributors are more than welcome. Just upload a PR with a description of your changes. To get ramped up on how Lottie-iOS works, read through the Contributor Documentation

Back to contents

## Issues or Feature Requests?

File github issues for anything that is broken. Be sure to check the list of supported features before submitting. If an animation is not working, please attach the After Effects file to your issue. Debugging without the original can be very difficult. Lottie is developed and maintained by @abstr_hyperlink . Feel free to reach out via @abstr_hyperlink or @abstr_hyperlink 

Back to contents
