# fullPage.js

@abstr_image @abstr_image 

@abstr_hyperlink @abstr_hyperlink 

@abstr_image @abstr_hyperlink @abstr_number Kb gziped!

A simple and easy to use plugin to create fullscreen scrolling websites (also known as single page websites or onepage sites). It allows the creation of fullscreen scrolling websites, as well as adding some landscape sliders inside the sections of the site.

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Invite me to a coffee @abstr_hyperlink 

Customizations of the plugin and urgent changes are available upon request for some reasonable price. @abstr_hyperlink .

Would you like to have a website using fullpage.js functionality but you don't know how to use it? I can do it for you for a reasonable price. @abstr_hyperlink .

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Introduction

Suggestion are more than welcome, not only for feature requests but also for coding style improvements. Let's make this a great plugin to make people's lives easier!

## Compatibility

fullPage.js is fully functional on all modern browsers, as well as some old ones such as Internet Explorer @abstr_number , @abstr_number , Opera @abstr_number , etc. It works with browsers with CSS @abstr_number support and with the ones which don't have it, making it ideal for old browsers compatibility. It also provides touch support for mobile phones, tablets and touch screen computers.

@abstr_hyperlink 

Special thanks to @abstr_hyperlink for supporting fullpage.js.

## Usage

As you can see in the example files, you will need to include: \- @abstr_hyperlink . ( @abstr_number . @abstr_number . @abstr_number minimum) \- The JavaScript file `jquery.fullPage.js` (or its minified version `jquery.fullPage.min.js`) \- The css file `jquery.fullPage.css`

**Optionally** , when using `css @abstr_number :false`, you can add the @abstr_hyperlink in case you want to use other easing effects apart from the ones included in the jQuery library (`linear` and `swing` ) or the one included by default in fullPage.js (`easeInOutCubic`).

### Install using bower or npm

**Optionally** , you can install fullPage.js with bower or npm if you prefer:

Terminal: @abstr_code_section 

### Including files:

@abstr_code_section 

### Optional use of CDN

If you prefer to use a CDN to load the needed files, fullPage.js is in CDNJS: https://cdnjs.com/libraries/fullPage.js

### Required HTML structure

Start your HTML document with the compulsory @abstr_hyperlink on the @abstr_number st line of your HTML code. You might have troubles with sections heights otherwise. The examples provided use HTML @abstr_number doctype `<!DOCTYPE html>`.

Each section will be defined with an element containing the `section` class. The active section by default will be the first section, which is taken as the home page.

Sections should be placed inside a wrapper (`<div id="fullpage">` in this case). The wrapper can not be the `body` element. @abstr_code_section If you want to define a different starting point rather than the first section or the first slide of a section, just add the class `active` to the section and slide you want to load first. @abstr_code_section 

In order to create a landscape slider within a section, each slide will be defined by default with an element containing the `slide` class: @abstr_code_section ` You can see a fully working example of the HTML structure in the [`demoPage.html` file](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/demoPage.html).

### Initialization

All you need to do is call the plugin inside a `$(document).ready` function:

@abstr_code_section 

A more complex initialization with all options set could look like this: @abstr_code_section 

### Creating links to sections or slides

If you are using fullPage.js with anchor links for the sections (using the `anchors` option or the attribute `data-anchor` in each section), then you will be able to use anchor links also to navigate directly to a certain slide inside a section.

This would be an example of a link with an anchor: http://alvarotrigo.com/fullPage/#secondPage/ @abstr_number (which is the URL you will see once you access to that section/slide manually) Notice the last part of the URL ends in `#secondPage/ @abstr_number`.

Having the following initialization:

@abstr_code_section 

The anchor at the end of the URL `#secondPage/ @abstr_number` defines the section and slide of destination respectively. In the previous URL, the section of destination will be the one defined with the anchor `secondPage` and the slide will be the @abstr_number nd slide, as we are using the index `@abstr_number` for it. (the fist slide of a section has index @abstr_number , as technically it is a section).

We could have used a custom anchor for the slide instead of its index if we would have used the attribute `data-anchor` on the HTML markup like so:

@abstr_code_section In this last case, the URL we would use would be `#secondPage/slide @abstr_number`, which is the equivalent to our previous `#secondPage/ @abstr_number`.

Note that section anchors can also be defined in the same way, by using the `data-anchor` attribute, if no `anchors` array is provided.

**Be careful!** `data-anchor` tags can not have the same value as any ID element on the site (or NAME element for IE).

### Creating smaller or bigger sections

@abstr_hyperlink fullPage.js provides a way to remove the full height restriction from its sections and slides. It is possible to create sections which height is smaller or bigger than the viewport. This is ideal for footers. It is important to realise that it doesn't make sense to have all of your sections using this feature. If there is more than one section in the initial load of the site, the plugin won't scroll at all to see the next one as it will be already in the viewport.

To create smaller sections just use the class `fp-auto-height` in the section you want to apply it. It will then take the height defined by your section/slide content.

@abstr_code_section 

#### Responsive auto height sections

A responsive auto height can be applied by using the class `fp-auto-height-responsive`. This way sections will be full height until the responsive mode gets fired.

### State classes added by fullpage.js

Fullpage.js adds multiple classes in different elements to keep a record of the status of the site:

  * `active` is added the current visible section and slide.
  * `active` is added to the current menu element (if using the `menu` option).
  * A class of the form `fp-viewing-SECTION-SLIDE` is added to the `body` element of the site. (eg: @abstr_hyperlink ) The `SECTION` and `SLIDE` parts will be the anchors (or indexes if no anchor is provided) of the current section and slide.
  * `fp-responsive` is added to the `body` element when the entering in the responsive mode
  * `fp-enabled` is added to the `html` element when fullpage.js is enabled. (and removed when destroyed).
  * `fp-destroyed` is added to the fullpage.js container when the plugin is destroyed.
  * `fp-enabled` is added to the `html` element once the libary is initalized.



### Lazy Loading

@abstr_hyperlink fullPage.js provides a way to lazy load images, videos and audio elements so they won't slow down the loading of your site or unnecessarily waste data transfer. When using lazy loading, all these elements will only get loaded when entering in the viewport. To enable lazy loading all you need to do is change your `src` attribute to `data-src` as shown below:

@abstr_code_section 

If you already use another lazy load solution which uses `data-src` as well, you can disable the fullPage.js lazy loading by setting the option `lazyLoading: false`.

### Auto play/pause embedded media

**Note** : the autoplay feature might not work on some mobile devices depending on the OS and browser (i.e. @abstr_hyperlink version < @abstr_number . @abstr_number ).

#### Play on section/slide load:

Using the attribute `autoplay` for videos or audio, or the param `autoplay= @abstr_number` for youtube iframes will result in the media element playing on page load. In order to play it on section/slide load use instead the attribute `data-autoplay`. For example:

@abstr_code_section 

#### Pause on leave

Embedded HTML @abstr_number `<video>` / `<audio>` and Youtube iframes are automatically paused when you navigate away from a section or slide. This can be disabled by using the attribute `data-keepplaying`. For example: @abstr_code_section 

### Use extensions

fullpage.js @abstr_hyperlink you can use to enhance its default features. All of them are listed as @abstr_hyperlink .

Extensions requires you to use the minified file `jquery.fullpage.extensions.min.js` instead of the usual fullPage.js file (`jquery.fullpage.js`). Once you adquire the extension file, you will need to add it before fullPage.js. For example:

@abstr_code_section 

A license key will be required for each extension. @abstr_hyperlink .

Then you will be able to use and configure them as explained in @abstr_hyperlink .

## Options

  * `controlArrows`: (default `true`) Determines whether to use control arrows for the slides to move right or left.

  * `verticalCentered`: (default `true`) Vertically centering of the content within sections. When set to `true`, your content will be wrapped by the plugin. Consider using delegation or load your other scripts in the `afterRender` callback.

  * `scrollingSpeed`: (default `@abstr_number`) Speed in milliseconds for the scrolling transitions.

  * `sectionsColor`: (default `none`) Define the CSS `background-color` property for each section. Example: @abstr_code_section 

  * `anchors`: (default `[]`) Defines the anchor links (#example) to be shown on the URL for each section. Anchors value should be unique. The position of the anchors in the array will define to which sections the anchor is applied. (second position for second section and so on). Using anchors forward and backward navigation will also be possible through the browser. This option also allows users to bookmark a specific section or slide. **Be careful!** anchors can not have the same value as any ID element on the site (or NAME element for IE). Now anchors can be defined directly in the HTML structure by using the attribute `data-anchor` as explained here.

  * `lockAnchors`: (default `false`) Determines whether anchors in the URL will have any effect at all in the plugin. You can still using anchors internally for your own functions and callbacks, but they won't have any effect in the scrolling of the site. Useful if you want to combine fullPage.js with other plugins using anchor in the URL.




**Important** It is helpful to understand that the values in the `anchors` option array correlate directly to the element with the class of `.section` by it's position in the markup.

  * `easing`: (default `easeInOutCubic`) Defines the transition effect to use for the vertical and horizontal scrolling. It requires the file `vendors/jquery.easings.min.js` or @abstr_hyperlink for using some of @abstr_hyperlink . Other libraries could be used instead.

  * `easingcss @abstr_number`: (default `ease`) Defines the transition effect to use in case of using `css @abstr_number :true`. You can use the @abstr_hyperlink (such as `linear`, `ease-out`...) or create your own ones using the `cubic-bezier` function. You might want to use @abstr_hyperlink for it.

  * `loopTop`: (default `false`) Defines whether scrolling up in the first section should scroll to the last one or not.

  * `loopBottom`: (default `false`) Defines whether scrolling down in the last section should scroll to the first one or not.

  * `loopHorizontal`: (default `true`) Defines whether horizontal sliders will loop after reaching the last or previous slide or not.

  * `css @abstr_number`: (default `true`). Defines whether to use JavaScript or CSS @abstr_number transforms to scroll within sections and slides. Useful to speed up the movement in tablet and mobile devices with browsers supporting CSS @abstr_number . If this option is set to `true` and the browser doesn't support CSS @abstr_number , a jQuery fallback will be used instead.

  * `autoScrolling`: (default `true`) Defines whether to use the "automatic" scrolling or the "normal" one. It also has affects the way the sections fit in the browser/device window in tablets and mobile phones.

  * `fitToSection`: (default `true`) Determines whether or not to fit sections to the viewport or not. When set to `true` the current active section will always fill the whole viewport. Otherwise the user will be free to stop in the middle of a section (when )

  * `fitToSectionDelay`: (default @abstr_number ). If `fitToSection` is set to true, this delays the fitting by the configured milliseconds.

  * `scrollBar`: (default `false`) Determines whether to use scrollbar for the site or not. In case of using scroll bar, the `autoScrolling` functionality will still work as expected. The user will also be free to scroll the site with the scroll bar and fullPage.js will fit the section in the screen when scrolling finishes.

  * `paddingTop`: (default `@abstr_number`) Defines the top padding for each section with a numerical value and its measure (paddingTop: ' @abstr_number px', paddingTop: ' @abstr_number em'...) Useful in case of using a fixed header.

  * `paddingBottom`: (default `@abstr_number`) Defines the bottom padding for each section with a numerical value and its measure (paddingBottom: ' @abstr_number px', paddingBottom: ' @abstr_number em'...). Useful in case of using a fixed footer.

  * `fixedElements`: (default `null`) Defines which elements will be taken off the scrolling structure of the plugin which is necessary when using the `css @abstr_number` option to keep them fixed. It requires a string with the jQuery selectors for those elements. (For example: `fixedElements: '#element @abstr_number , .element @abstr_number '`)

  * `normalScrollElements`: (default `null`) If you want to avoid the auto scroll when scrolling over some elements, this is the option you need to use. (useful for maps, scrolling divs etc.) It requires a string with the jQuery selectors for those elements. (For example: `normalScrollElements: '#element @abstr_number , .element @abstr_number '`). This option should not be applied to any section/slide element itself.

  * `normalScrollElementTouchThreshold` : (default `@abstr_number`) Defines the threshold for the number of hops up the html node tree Fullpage will test to see if `normalScrollElements` is a match to allow scrolling functionality on divs on a touch device. (For example: `normalScrollElementTouchThreshold: @abstr_number`)

  * `bigSectionsDestination`: (default `null`) Defines how to scroll to a section which size is bigger than the viewport. By default fullPage.js scrolls to the top if you come from a section above the destination one and to the bottom if you come from a section below the destination one. Possible values are `top`, `bottom`, `null`.

  * `keyboardScrolling`: (default `true`) Defines if the content can be navigated using the keyboard.

  * `touchSensitivity`: (default `@abstr_number`) Defines a percentage of the browsers window width/height, and how far a swipe must measure for navigating to the next section / slide

  * `continuousVertical`: (default `false`) Defines whether scrolling down in the last section or should scroll down to the first one and if scrolling up in the first section should scroll up to the last one. Not compatible with `loopTop`, `loopBottom` or any scroll bar present in the site (`scrollBar:true` or `autoScrolling:false`).

  * `continuousHorizontal`: (default `false`) @abstr_hyperlink . Defines whether sliding right in the last slide should slide right to the first one or not, and if scrolling left in the first slide should slide left to the last one or not. Not compatible with `loopHorizontal`. Requires fullpage.js >= @abstr_number . @abstr_number . @abstr_number .

  * `scrollHorizontally`: (default `false`) @abstr_hyperlink . Defines whether to slide horizontally within sliders by using the mouse wheel or trackpad. Ideal for story telling`. Requires fullpage.js >= @abstr_number . @abstr_number . @abstr_number .

  * `interlockedSlides`: (default `false`) @abstr_hyperlink . Determines whether moving one horizontal slider will force the sliding of sliders in other section in the same direction. Possible values are `true`, `false` or an array with the interlocked sections. For example `[ @abstr_number , @abstr_number , @abstr_number ]` starting by @abstr_number . Requires fullpage.js >= @abstr_number . @abstr_number . @abstr_number .

  * `dragAndMove`: (default `false`) @abstr_hyperlink . Enables or disables the dragging and flicking of sections and slides by using mouse or fingers. Possible values are `true`, `false`, `fingersonly`. Requires fullPage.js >= @abstr_number . @abstr_number . @abstr_number .

  * `offsetSections`: (default `false`) @abstr_hyperlink . Provides a way to use non full screen sections based on percentage. Ideal to show visitors there's more content in the site by showing part of the next or previous section. Requires fullPage.js >= @abstr_number . @abstr_number . @abstr_number To define the percentage of each section the attribute `data-percentage` must be used. The centering of the section in the viewport can be determined by using a boolean value in the attribute `data-centered` (default to `true` if not specified). For example: @abstr_code_section 

  * `resetSliders`: (default `false`). @abstr_hyperlink . Defines whether or not to reset every slider after leaving its section. Requires fullpage.js >= @abstr_number . @abstr_number . @abstr_number .

  * `fadingEffect`: (default `false`). @abstr_hyperlink . Defines whether to use a fading effect or not instead of the default scrolling one. Possible values are `true`, `false`, `sections`, `slides`. It can therefore be applied just vertically or horizontally, or to both at the time. Requires fullpage.js >= @abstr_number . @abstr_number . @abstr_number .

  * `animateAnchor`: (default `true`) Defines whether the load of the site when given an anchor (#) will scroll with animation to its destination or will directly load on the given section.

  * `recordHistory`: (default `true`) Defines whether to push the state of the site to the browser's history. When set to `true` each section/slide of the site will act as a new page and the back and forward buttons of the browser will scroll the sections/slides to reach the previous or next state of the site. When set to `false`, the URL will keep changing but will have no effect ont he browser's history. This option is automatically turned off when using `autoScrolling:false`.

  * `menu`: (default `false`) A selector can be used to specify the menu to link with the sections. This way the scrolling of the sections will activate the corresponding element in the menu using the class `active`. This won't generate a menu but will just add the `active` class to the element in the given menu with the corresponding anchor links. In order to link the elements of the menu with the sections, an HTML @abstr_number data-tag (`data-menuanchor`) will be needed to use with the same anchor links as used within the sections. Example: @abstr_code_section @abstr_code_section 




**Note:** the menu element should be placed outside the fullpage wrapper in order to avoid problem when using `css @abstr_number :true`. Otherwise it will be appended to the `body` by the plugin itself.

  * `navigation`: (default `false`) If set to `true`, it will show a navigation bar made up of small circles.

  * `navigationPosition`: (default `none`) It can be set to `left` or `right` and defines which position the navigation bar will be shown (if using one).

  * `navigationTooltips`: (default []) Defines the tooltips to show for the navigation circles in case they are being used. Example: `navigationTooltips: ['firstSlide', 'secondSlide']`. You can also define them by using the attribute `data-tooltip` in each section if you prefer.

  * `showActiveTooltip`: (default `false`) Shows a persistent tooltip for the actively viewed section in the vertical navigation.

  * `slidesNavigation`: (default `false`) If set to `true` it will show a navigation bar made up of small circles for each landscape slider on the site.

  * `slidesNavPosition`: (default `bottom`) Defines the position for the landscape navigation bar for sliders. Admits `top` and `bottom` as values. You may want to modify the CSS styles to determine the distance from the top or bottom as well as any other style such as color.

  * `scrollOverflow`: (default `false`) defines whether or not to create a scroll for the section/slide in case its content is bigger than the height of it. When set to `true`, your content will be wrapped by the plugin. Consider using delegation or load your other scripts in the `afterRender` callback. In case of setting it to `true`, it requires the vendor library @abstr_hyperlink and it should be loaded before the fullPage.js plugin. For example:

@abstr_code_section 




In order to prevent fullpage.js from creating the scrollbar in certain sections or slides use the class `fp-noscroll`. For example: `<div class="section fp-noscroll">`

  * `scrollOverflowOptions`: when using scrollOverflow:true fullpage.js will make use of a forked and modified version of @abstr_hyperlink . You can customize the scrolling behaviour by providing fullpage.js with the iScroll.js options you want to use. Check @abstr_hyperlink for more info.

  * `sectionSelector`: (default `.section`) Defines the jQuery selector used for the plugin sections. It might need to be changed sometimes to avoid problem with other plugins using the same selectors as fullpage.js.

  * `slideSelector`: (default `.slide`) Defines the jQuery selector used for the plugin slides. It might need to be changed sometimes to avoid problem with other plugins using the same selectors as fullpage.js.

  * `responsiveWidth`: (default `@abstr_number`) A normal scroll (`autoScrolling:false`) will be used under the defined width in pixels. A class `fp-responsive` is added to the body tag in case the user wants to use it for his own responsive CSS. For example, if set to @abstr_number , whenever the browser's width is less than @abstr_number the plugin will scroll like a normal site.

  * `responsiveHeight`: (default `@abstr_number`) A normal scroll (`autoScrolling:false`) will be used under the defined height in pixels. A class `fp-responsive` is added to the body tag in case the user wants to use it for his own responsive CSS. For example, if set to @abstr_number , whenever the browser's height is less than @abstr_number the plugin will scroll like a normal site.

  * `responsiveSlides`: (default `false`) @abstr_hyperlink . When set to `true` slides will be turned into vertical sections when responsive mode is fired. (by using the `responsiveWidth` or `responsiveHeight` options detailed above). Requires fullpage.js >= @abstr_number . @abstr_number . @abstr_number .

  * `lazyLoading`: (default `true`) Lazy loading is active by default which means it will lazy load any media element containing the attribute `data-src` as detailed in the @abstr_hyperlink . If you want to use any other lazy loading library you can disable this fullpage.js feature.




## Methods

You can see them in action @abstr_hyperlink 

### moveSectionUp()

@abstr_hyperlink Scrolls one section up:

##  @abstr_code_section 

### moveSectionDown()

@abstr_hyperlink Scrolls one section down:

##  @abstr_code_section 

### moveTo(section, slide)

@abstr_hyperlink Scrolls the page to the given section and slide. The first slide, the visible one by default, will have index @abstr_number . @abstr_code_section 

##  @abstr_code_section 

### silentMoveTo(section, slide)

@abstr_hyperlink Exactly the same as @abstr_hyperlink but in this case it performs the scroll without animation. A direct jump to the destination.

##  @abstr_code_section 

### moveSlideRight()

@abstr_hyperlink Scrolls the horizontal slider of the current section to the next slide:

##  @abstr_code_section 

### moveSlideLeft()

@abstr_hyperlink Scrolls the horizontal slider of the current section to the previous slide:

##  @abstr_code_section 

### setAutoScrolling(boolean)

@abstr_hyperlink Sets the scrolling configuration in real time. Defines the way the page scrolling behaves. If it is set to `true`, it will use the "automatic" scrolling, otherwise, it will use the "manual" or "normal" scrolling of the site.

##  @abstr_code_section 

### setFitToSection(boolean)

@abstr_hyperlink Sets the value for the option `fitToSection` determining whether to fit the section in the screen or not.

##  @abstr_code_section 

### setLockAnchors(boolean)

@abstr_hyperlink Sets the value for the option `lockAnchors` determining whether anchors will have any effect in the URL or not.

##  @abstr_code_section 

### setAllowScrolling(boolean, [directions])

@abstr_hyperlink Adds or remove the possibility of scrolling through sections/slides by using the mouse wheel/trackpad or touch gestures (which is active by default). Note this won't disable the keyboard scrolling. You would need to use `setKeyboardScrolling` for it.

  * `directions`: (optional parameter) Admitted values: `all`, `up`, `down`, `left`, `right` or a combination of them separated by commas like `down, right`. It defines the direction for which the scrolling will be enabled or disabled.



##  @abstr_code_section 

### setKeyboardScrolling(boolean, [directions])

@abstr_hyperlink Adds or remove the possibility of scrolling through sections by using the keyboard (which is active by default).

  * `directions`: (optional parameter) Admitted values: `all`, `up`, `down`, `left`, `right` or a combination of them separated by commas like `down, right`. It defines the direction for which the scrolling will be enabled or disabled.



##  @abstr_code_section 

### setRecordHistory(boolean)

@abstr_hyperlink Defines whether to record the history for each hash change in the URL.

##  @abstr_code_section 

### setScrollingSpeed(milliseconds)

@abstr_hyperlink Defines the scrolling speed in milliseconds.

##  @abstr_code_section 

### destroy(type)

@abstr_hyperlink Destroys the plugin events and optionally its HTML markup and styles. Ideal to use when using AJAX to load content.

  * `type`: (optional parameter) can be empty or `all`. If `all` is passed, the HTML markup and styles used by fullpage.js will be removed. This way the original HTML markup, the one used before any plugin modification is made, will be maintained.



##  @abstr_code_section 

### reBuild()

Updates the DOM structure to fit the new window size or its contents. Ideal to use in combination with AJAX calls or external changes in the DOM structure of the site, specially when using `scrollOverflow:true`.

##  @abstr_code_section 

### setResponsive(boolean)

@abstr_hyperlink Sets the responsive mode of the page. When set to `true` the autoScrolling will be turned off and the result will be exactly the same one as when the `responsiveWidth` or `responsiveHeight` options get fired.

##  @abstr_code_section 

### responsiveSlides.toSections()

@abstr_hyperlink . Requires fullpage.js >= @abstr_number . @abstr_number . @abstr_number . Turns horizontal slides into vertical sections.

##  @abstr_code_section 

### responsiveSlides.toSlides()

@abstr_hyperlink . Requires fullpage.js >= @abstr_number . @abstr_number . @abstr_number . Turns back the original slides (now converted into vertical sections) into horizontal slides again.

@abstr_code_section 

## Callbacks

@abstr_hyperlink You can see them in action @abstr_hyperlink .

### afterLoad (`anchorLink`, `index`)

Callback fired once the sections have been loaded, after the scrolling has ended. Parameters:

  * `anchorLink`: anchorLink corresponding to the section.
  * `index`: index of the section. Starting from @abstr_number .



In case of not having anchorLinks defined in the plugin the `index` parameter would be the only one to use.

Example:

##  @abstr_code_section 

### onLeave (`index`, `nextIndex`, `direction`)

This callback is fired once the user leaves a section, in the transition to the new section. Returning `false` will cancel the move before it takes place.

Parameters:

  * `index`: index of the leaving section. Starting from @abstr_number .
  * `nextIndex`: index of the destination section. Starting from @abstr_number .
  * `direction`: it will take the values `up` or `down` depending on the scrolling direction.



Example:

@abstr_code_section 

#### Cancelling the scroll before it takes place

You can cancel the scroll by returning `false` on the `onLeave` callback:

@abstr_code_section 

* * *

### afterRender()

This callback is fired just after the structure of the page is generated. This is the callback you want to use to initialize other plugins or fire any code which requires the document to be ready (as this plugin modifies the DOM to create the resulting structure). See @abstr_hyperlink for more info.

Example:

##  @abstr_code_section 

### afterResize()

This callback is fired after resizing the browser's window. Just after the sections are resized.

Example:

##  @abstr_code_section 

### afterResponsive(`isResponsive`)

This callback is fired after fullpage.js changes from normal to responsive mode or from responsive mode to normal mode.

Parameters:

  * `isResponsive`: boolean that determines if it enters into responsive mode (`true`) or goes back to normal mode (`false`).



Example:

##  @abstr_code_section 

### afterSlideLoad (`anchorLink`, `index`, `slideAnchor`, `slideIndex`)

Callback fired once the slide of a section have been loaded, after the scrolling has ended. Parameters:

  * `anchorLink`: anchorLink corresponding to the section.
  * `index`: index of the section. Starting from @abstr_number .
  * `slideAnchor`: anchor corresponding to the slide (in case there is)
  * `slideIndex`: index of the slide. Starting from @abstr_number . (the default slide doesn't count as slide, but as a section)



In case of not having anchorLinks defined for the slide or slides the `slideIndex` parameter would be the only one to use. Example:

@abstr_code_section 

* * *

### onSlideLeave (`anchorLink`, `index`, `slideIndex`, `direction`, `nextSlideIndex`)

This callback is fired once the user leaves an slide to go to another, in the transition to the new slide. Returning `false` will cancel the move before it takes place.

Parameters:

  * `anchorLink`: anchorLink corresponding to the section.
  * `index`: index of the section. Starting from @abstr_number .
  * `slideIndex`: index of the slide. **Starting from @abstr_number .**
  * `direction`: takes the values `right` or `left` depending on the scrolling direction.
  * `nextSlideIndex`: index of the destination slide. **Starting from @abstr_number .**



Example:

@abstr_code_section 

#### Cancelling a move before it takes place

You can cancel a move by returning `false` on the `onSlideLeave` callback. @abstr_hyperlink .

# Reporting issues

@abstr_number . Please, look for your issue before asking using the github issues search. @abstr_number . Make sure you use the latest fullpage.js version. No support is provided for older versions. @abstr_number . Use the @abstr_hyperlink to create issues. @abstr_number . **An isolated reproduction of the issue will be required.** Make use of @abstr_hyperlink or @abstr_hyperlink for it if possible.

# Contributing to fullpage.js

Please see @abstr_hyperlink 

# Changelog

To see the list of recent changes, see @abstr_hyperlink .

# Build tasks

Want to build fullpage.js distribution files? Please see @abstr_hyperlink 

# Resources

  * @abstr_hyperlink 
  * @abstr_hyperlink (useful to define the `easingcss @abstr_number` value)
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Who is using fullPage.js

If you want your page to be listed here. Please @abstr_hyperlink with the URL.

@abstr_hyperlink @abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

  * http://www.britishairways.com/en-gb/information/travel-classes/experience-our-cabins
  * http://www.sony-asia.com/microsite/mdr- @abstr_number /
  * http://www.yourprimer.com/
  * http://mcdonalds.com.au/create-your-taste
  * http://burntmovie.com/
  * http://essenso.com/
  * http://www.bugatti.com/veyron/veyron- @abstr_number /
  * http://www.kibey.com/
  * http://www.newjumoconcept.com/
  * http://www.shootinggalleryasia.com/
  * http://medoff.ua/en/
  * http://promo.prestigio.com/grace @abstr_number /
  * http://www.mi.com/shouhuan
  * http://www.commoditiesdemystified.info/en/
  * https://moneytree.jp/
  * http://torchbrowser.com/
  * http://thekorner.fr/
  * http://www.restaurantwoods.nl/
  * https://www.edarling.de/
  * http://urban-walks.com/
  * http://lingualeo.com/
  * http://charlotteaimes.com/
  * http://collection.madeofsundays.com
  * http://thiswasmybest.com/
  * http://www.boxreload.com/
  * http://lawinenstift.com/
  * http://duis.co/
  * http://educationaboveall.org/
  * http://camfindapp.com/
  * http://bnacademy.com.au/
  * http://rockercreative.com/
  * http://wantnova.com/
  * http://usescribe.com/
  * http://lucilecazanave.com/
  * http://boxx.hk/
  * http://bearonunicycle.com/
  * http://rawmilk.dk/en/
  * http://www.famavolat.com/
  * http://www.carpetloverclub.com/
  * http://www.sanyang.com.tw/service/Conception/
  * http://www.batzaya.net/
  * http://www.graphicid.dk/
  * http://portfolio.io.utwente.nl/student/dijkavan/
  * http://www.carlphot.com/
  * http://medissix.com/
  * http://trasmissione-energia.terna.it/
  * http://www.thefoodmovie.com/
  * http://www.villareginateodolinda.it
  * http://www.kesstrio.com
  * http://www.karmaffne.com/
  * http://fossdistillery.is
  * http://www.conversionculture.com/
  * http://ded-morozz.kiev.ua/
  * http://yizeng.me/
  * http://unabridgedsoftware.com/
  * http://wc @abstr_number .plnwrx.com/
  * http://organice.io/
  * http://atlanticcorp.us/
  * http://moysport.ru/
  * http://wcfixtures.co.uk/
  * http://www.dopehustleinc.com/default.php
  * http://themify.me/demo/#theme=fullpane
  * http://dancingroad.com
  * http://www.camanihome.com/
  * http://www.exapoint.ch/
  * https://life @abstr_number film.com/en/
  * http://www.altamirarecovery.com/shame/



You can find another list @abstr_hyperlink .

## Donations

Donations would be more than welcome :)

@abstr_hyperlink 

## License

**The credit comments in the JavaScript and CSS files should be kept intact** (even after combination or minification )

(The MIT License)

Copyright (c) @abstr_number Alvaro Trigo <alvaro@alvarotrigo.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
