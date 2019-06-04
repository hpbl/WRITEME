@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_hyperlink 

A custom UINavigationController that enables the scrolling of the navigation bar alongside the scrolling of an observed content view 

@abstr_hyperlink 

### Versioning notes

  * Version `@abstr_number .x` is written as a subclass of `UINavigationController`, in Swift. 
  * Version `@abstr_number . @abstr_number . @abstr_number` introduce Swift @abstr_number . @abstr_number syntax.
  * Version `@abstr_number . @abstr_number . @abstr_number` introduce Swift @abstr_number . @abstr_number syntax.
  * Version `@abstr_number . @abstr_number . @abstr_number` introduce Swift @abstr_number . @abstr_number syntax.
  * Version `@abstr_number . @abstr_number . @abstr_number` introduce Swift @abstr_number . @abstr_number syntax.



If you are looking for the category implementation in Objective-C, make sure to checkout version `@abstr_number .x` and prior, although the `@abstr_number .x` is recomended.

# Screenshot

@abstr_image 

# Setup with CocoaPods

@abstr_code_section 

# Setup with Carthage

@abstr_code_section 

## Usage

Make sure to use `ScrollingNavigationController` instead of the standard `UINavigationController`. Either set the class of your `UINavigationController` in your storyboard, or create programmatically a `ScrollingNavigationController` instance in your code.

Use `followScrollView(_: delay:)` to start following the scrolling of a scrollable view (e.g.: a `UIScrollView` or `UITableView`).

#### Swift

@abstr_code_section 

#### Objective-C

@abstr_code_section 

Use `stopFollowingScrollview()` to stop the behaviour. Remember to call this function on disappear: @abstr_code_section 

## ScrollingNavigationViewController

To DRY things up you can let your view controller subclass `ScrollingNavigationViewController`, which provides the base setup implementation. You will just need to call `followScrollView(_: delay:)`: @abstr_code_section 

## Followers

To move another view, like a toolbar, alongside the navigation bar you can provide the view or multiple views as the `followers` parameter. Since you might want to have the follower up or down, you'll have to specify the scroll direction of the view once it starts to follow the navigation bar: @abstr_code_section 

Note that when navigating away from the controller the followers might keep the scroll offset. Refer to @abstr_hyperlink for proper setup. 

## Additional scroll

If you want to furhter scroll the navigation bar out of the way, you can use the optional parameter `additionalOffset` in the `followScrollView` call.

## Scrolling the TabBar

You can also pass a `UITabBar` in the `followers` array: @abstr_code_section 

## ScrollingNavigationControllerDelegate

You can set a delegate to receive a call when the state of the navigation bar changes: @abstr_code_section 

Delegate function: @abstr_code_section 

## Handling navigation

If the view controller with the scroll view pushes new controllers, you should call `showNavbar(animated:)` in your `viewWillDisappear(animated:)`: @abstr_code_section 

## Scrolling to top

When the user taps the status bar, by default a scrollable view scrolls to the top of its content. If you want to also show the navigation bar, make sure to include this in your controller:

@abstr_code_section 

## Scroll speed

You can control the speed of the scrolling using the `scrollSpeedFactor` optional parameter:

@abstr_code_section 

Check out the sample project for more details.

# Author

@abstr_hyperlink . I'm available for freelance work, feel free to contact me.

Want to support the development of @abstr_hyperlink ? Buy me a coffee ☕️ via @abstr_hyperlink . 

# Contributors

@abstr_hyperlink and @abstr_hyperlink kind enough to submit a pull request.

# MIT License
    
    
    The MIT License (MIT)
    
    Copyright (c)  @abstr_number  Andrea Mazzini
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
