@abstr_image 

### Build dynamic and beautiful user interfaces like a boss, with Swift.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Neon is built around how user interfaces are naturally and intuitively designed. No more springs and struts. No more whacky visual format language. No more auto layout constraints. We're not robots, so why should we build our UIs like we are?

> **_Neon has been updated to Swift @abstr_number . @abstr_number , but is still currently in beta!_**

## Install via CocoaPods

You can use @abstr_hyperlink to install `Neon` by adding it to your `Podfile`:

@abstr_code_section 

## Manual Installation

@abstr_number . Download and drop `/Source` in your project.   
@abstr_number . Congratulations! 

To get the full benefits import `Neon` wherever you have a UIView operation:

@abstr_code_section 

## Example

@abstr_image 

Rather than design some arbitrary layout for a demonstration, I figured a good test for the practicality of Neon would be to replicate an existing screen from a major app, one that everyone could recognize. The above screenshot on the left is my profile in the Facebook app, and the screenshot on the right is from the Neon demo project.

Facebook's profile screen was surely built using some form of `UITableView` or `UICollectionView`, but for the sake of simple demonstration I built the top-most major components of the profile in a normal `UIViewController`. After all the customization of the subviews to make them as close to Facebook's design as possible _(I tried my best)_ , this is what I came up with for the layout:

@abstr_code_section 

@abstr_image 

Looks pretty good on every device size! Now, keep in mind you'll probably want constants defined for many of these size/padding values, in order to keep the code cleaner and easier to maintain, but I decided to use real numbers for most of the values to make the code less obscure when new people are reading through the demonstration. Now, **_unlike Facebook's iPhone app_** the layout built with Neon is **_dynamic_**. It is able to handle rotation on all-sized devices with no problem:

@abstr_image 

### Not bad for @abstr_number lines of code!

Here's an intentionally convoluted example to show how easy it is to build very complex and dynamic layouts with Neon. The following layout was created with only * @abstr_number lines of code*. That's one line of code per view! While impressive, this layout is horrifying and should never be used in an actual app... ever...

@abstr_image 

## Anchoring Views

### Center

There are a few ways you can anchor views using Neon, and the first and most simple is anchoring a view in the center of its superview:

@abstr_code_section 

@abstr_image 

### Filling Superview

Sometimes you want a view to fill its superview entirely, which couldn't be easier.

@abstr_code_section 

Optionally, if you want a view to fill its superview with padding, you can provide padding instead:

@abstr_code_section 

@abstr_image 

### Corner

The second anchoring method is anchoring a view in its superview's `Corner`. As you might have guessed, the four corners are `.TopLeft`, `.TopRight`, `.BottomLeft`, `.BottomRight`, and coupled with the `anchorInCorner()` function, you can easily anchor a view in any corner like this:

@abstr_code_section 

@abstr_image 

### Edge

`Edge` is another pretty obvious one to follow - it specifies on what edge of its superview a view will be anchored to. The four types are `.Top`, `.Left`, `.Bottom`, or `.Right`, and similar to previous examples, you can use the `anchorToEdge()` function to anchor a view to an edge:

@abstr_code_section 

@abstr_image 

### Filling an edge

Sometimes, you want to anchor a view against an edge, filling that edge; imagine something like a banner photo for a profile page. Again, this is made as simple as possible using the `anchorAndFillEdge()` function:

@abstr_code_section 

@abstr_image 

> Note that `anchorAndFillEdge()` accepts a parameter called `otherSize`. That parameter is used to set the _other size_ that isn't automatically calculated by filling the edge, meaning that if you specify that you want to anchor to and fill the top edge, the width will be automatically calculated, but the height is still unknown, so the value passed in to `otherSize` will be used to set the height. Subsequently, if you want to anchor to and fill the left edge, the height is automatically calculated and `otherSize` will be used to set the width of the view.

## Align

Now that we've anchored primary views, we can start making our UI more complex by aligning other views _relative to other sibling views_ , using the (you guessed it) `Align` value. **Sibling views** are views that share the same superview directly. There are twelve `Align` types, and they are all pretty self-explanatory - here's an example using all twelve with the `align()` function:

@abstr_code_section 

@abstr_image 

## Align and fill

You don't always know or want to specify the size of a view that you want to layout relative to another, but rather you want to either fill the width, height, or the entire rest of the superview, after aligning with the sibling. Combined with all the different alignment types discussed earlier, we're starting to see how more complex layouts can be built very easily:

@abstr_code_section 

@abstr_image 

## Align between

Sometimes you want a view to sit between to other views, filling the space between them. Using alignBetweenHorizontal() and alignBetweenVertical(), doing that is super easy! Choose one of your sibling views you want to align your view relative to and pass that in as your `primaryView`. We will use the specified `align` parameter to match that `primaryView` appropriately, and automatically fill either the horizontal or vertical span between the it and the `secondaryView`.

@abstr_code_section 

@abstr_image 

## What about labels?

One of the more complicated parts of working with dynamic layouts, is dealing with labels that may have @abstr_number -> n lines, and as such passing in a specific height isn't always possible without causing a migraine. Neon makes this easy by introducing the `AutoHeight` constant. Pass this value into methods that accept a `height` param, and we will first set the width of the frame, tell the view to `sizeToFit()` so the height is automatically set based on its contents, and then align the view appropriately. For example:

@abstr_code_section 

@abstr_image 

Note that changing the text to something with more characters still produces the same desired result:

@abstr_image 

> It's important to note that the using `AutoHeight` with something like a `CALayer`, or passing it in to any of the grouping methods (see below) will have undesired consequences, as it almost doesn't _make sense_ in this context. Use `AutoHeight` with anything that implements `sizeToFit()` and you should be OK. The vast majority of cases where you'll want to use this is with `UILabel` objects.

## What if I don't want to align them perfectly?

Sometimes you don't want your views to align with their sibling views _exactly_ \- you may want to align them relative to their siblings, but with a slight offset. You can do this by adding the optional `offset` parameter to any of the above align methods to produce something like the following:

@abstr_code_section 

@abstr_image 

## Grouping

Another common use-case is the _grouping_ of sibling views, aligned in a row or column. Using what we've already learned about anchoring views in the center, in a corner, or against an edge, we can also do the same with groups of views!

The primary difference with grouping, is that it is done by the _parent view,_ or `superview` of a group of views. For example, let's let two different views center a group of their subviews in each of the two different `Group` configurations, `.Horizontal` and `.Vertical`:

@abstr_code_section 

@abstr_image 

How about grouping views in the corner?

@abstr_code_section 

@abstr_image 

As you might have expected, you can also group either horizontally and vertically against any edge as well:

@abstr_code_section 

@abstr_image 

Grouping views relative to a sibling view can be done as well:

@abstr_code_section 

@abstr_image 

You can also specify that you want a group of subviews to fill their superview, either horizontally or vertically:

@abstr_code_section @abstr_image 

## License

The source is made available under the MIT license. See LICENSE.txt for details.
