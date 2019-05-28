## SlidingTutorial @abstr_hyperlink @abstr_image @abstr_hyperlink 

@abstr_image 

## Cleveroad introduces Sliding Tutorial Library for Android

Hey guys, hope you haven’t started developing a tutorial for your Android app yet, as we have already completed a part of your job. Don’t worry, we act from good motives only. Our aim is to help you create a sliding tutorial in a fast and simple manner. So we’ve done some work and voila!. A simple Android Sliding Tutorial library is at your service.

@abstr_image 

###### Also you can watch the animation of the **@abstr_hyperlink** in HD quality.

The invention is going to ease the problem of structural design but not to limit a stretch of your imagination at the same time. We took care of the suitability aspect. So, your app is not going to look alien among other Android elements. 

Read our **@abstr_hyperlink** to make sure that you don’t miss a detail:

@abstr_hyperlink   


Applied parallax effects will make your product presentation look like Google apps tutorial.

All you need to do is:   
@abstr_number . Create background designs for each screen of your tutorial (assistance with @abstr_hyperlink )   
@abstr_number . Create icons for each screen of your tutorial   
@abstr_number . Follow the instructions below

@abstr_hyperlink 

## Using

First, add gradle dependency into your build.gradle: @abstr_code_section 

There are two common variants of using library: via [TutorialPageProvider] and via [TutorialPageOptionsProvider].

### Via TutorialPageProvider

You have to create page fragments where each fragment must extend from [PageFragment], override [PageFragment#getLayoutResId()] and [PageFragment#getTransformItems()]. Also you have to create your layout xml file with images.

@abstr_code_section 

Pass [TutorialPageProvider] instance to [TutorialOptions.Builder#setTutorialPageProvider(TutorialPageProvider)].

@abstr_code_section 

### Via TutorialPageOptionsProvider

Or you can create [TutorialPageOptionsProvider] and pass it to [TutorialOptions.Builder#setTutorialPageProvider(TutorialPageOptionsProvider)]. It will automatically provide [PageFragment] instance with specified [PageOptions] configuration. @abstr_code_section 

### Using with AppCompat library (Recommended way)

Here's the list of changes in code to use `SlidingTutorial` library with `AppCompat` library: * Your fragment pages must extend [PageSupportFragment]. * Your tutorial fragment must extend [TutorialSupportFragment]. * [TutorialPageProvider] must provide **android.support.v @abstr_number .app.Fragment** instances. That's all.

## Customization

### Setup skip button click listener

You have to implement _View.OnClickListener_ interface and provide it to [TutorialOptions.Builder#setOnSkipClickListener(OnClickListener)]. Example: @abstr_code_section 

### Setup pages colors

Just provide array of color values to [TutorialOptions.Builder#setPagesColors(int array)]. The array with colors **must have length equal to pages count**. @abstr_code_section 

### Infinite scroll

To loop tutorial pages you have set [TutorialOptions.Builder#setUseInfiniteScroll(boolean)] to `true`.

### Auto remove TutorialFragment - scroll from last tutorial page to your content

If you want to provide smooth transition from last tutorial page to content - just setup [TutorialOptions.Builder#setUseAutoRemoveTutorialFragment(boolean)] to `true`.

### Indicator view customization

There is [IndicatorOptions] class for configuration indicator view. Here's example: @abstr_code_section As you can see, you can specify _element size_ , _element spacing_ (aka padding), _element color_ , _selected element color_ , and implementation of [Renderer] interface. There are @abstr_number default implementation inside [Renderer.Factory]: * [Renderer.Factory#newCircleRenderer()] - draw indicators with circle shape * [Renderer.Factory#newSquareRenderer()] - draw indicators with square shape

Also in sample module there are two implementations: * [DrawableRenderer] - draw indicators with drawable background * [RhombusRenderer] - draw indicators with rhombus shape

### Add OnTutorialPageChangeListener

You can listen change page events - just implement [OnTutorialPageChangeListener] and add listener via [TutorialFragment#addOnTutorialPageChangeListener(OnTutorialPageChangeListener)]. To remove listener use [TutorialFragment#removeOnTutorialPageChangeListener(OnTutorialPageChangeListener)]. In [OnTutorialPageChangeListener#onPageChanged(int)] method you will receive a page index every time page changes. If you enabled [TutorialOptions.Builder#setUseAutoRemoveTutorialFragment(boolean)] to true, you will receive `TutorialFragment.EMPTY_FRAGMENT_POSITION` (or `TutorialSupportFragment.EMPTY_FRAGMENT_POSITION` if you are using support library) as page index. @abstr_code_section 

### Add PageTransformer

You can apply your own property transformation to the given page - just implement `ViewPager.PageTransformer` interface and set it via [TutorialOptions.Builder#setPageTransformer(ViewPager.PageTransformer pageTransformer)]. @abstr_code_section 

## Migrations

See all [migration manuals].

## Changelog

See [changelog history].

## Support

If you have any questions regarding the use of this tutorial, please contact us for support at info@cleveroad.com (email subject: «Sliding android app tutorial. Support request.»)   
or   
Use our contacts:   
@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink 

## License
    
    
        The MIT License (MIT)
    
        Copyright (c)  @abstr_number - @abstr_number  Cleveroad
    
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
    
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
    
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
    
