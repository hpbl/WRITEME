# jQuery One Page Scroll plugin

This plugin is a full refactored fork of @abstr_hyperlink with keyboard support from @abstr_hyperlink .

It's completely rewritten in coffee and uses @abstr_hyperlink for touch support in all Browsers (even IE Touch Events)

## Compatibility

Tested in Chrome ( @abstr_number . @abstr_number . @abstr_number . @abstr_number ), Firefox ( @abstr_number . @abstr_number . @abstr_number ), Safari ( @abstr_number . @abstr_number ), IE ( @abstr_number , @abstr_number with Touch Support)

## Basic Usage

To use the plugin you have to the hammer.js jQuery library.

Add `onepage-scroll.css` to your head and `jquery` ( @abstr_number . @abstr_number . @abstr_number or later), hammer.js and `jquery.onepage-scroll.js` at the end of your body. You can use require.js to load the dependencies as needed.

Your document should be structured in a way like this:

@abstr_code_section 

The `.main` container must be one level below the `body` tag in order to make it work full page. You can now call the function to activate as follows:

@abstr_code_section 

## Public Methods

You can also trigger page move programmatically:

### Get onepage_scroll Object by data

To get the onepage_scroll object simply call:

@abstr_code_section 

or if just one element (it should be) just call:

@abstr_code_section 

You can then chain the needed methods.

### .moveUp()

This method allows you to move the page up by one. This action is equivalent to scrolling up/swiping down.

@abstr_code_section 

### .moveDown()

This method allows you to move the page down by one. This action is equivalent to scrolling down/swiping up.

@abstr_code_section 

### .moveTo(page_index)

This method allows you to move to the specified page index programatically.   
You can use the index of the slide you want to move to or a specific selector of the slide. If you use the selector variant there must only be one element with the given selector, else the plugin won't move. The plugin looks for the data-attribute of the given slide to determine the index it has to scroll to.

@abstr_code_section 

### .destroy()

This method completely removes all bindings, added classes, stylings and elements.

@abstr_code_section 

### .create()

This method allows you to manually recreate the plugin bindings, classes, stylings and elements after the destroy call.

@abstr_code_section 

### .unbindEvents()

This method allows you to manually unbind all events, useful if you use modals where you want to scroll the modal instead of the content.

@abstr_code_section 

### .bindEvents()

This method allows you to manually rebind all events.

@abstr_code_section 

## Callbacks

You can use callbacks to perform actions before or after the page move.

### beforeMove(current_page_index)

This callback gets called before the plugin performs its move.

@abstr_code_section 

### afterMove(next_page_index)

This callback gets called after the move animation was performed.

@abstr_code_section 

### beforeCreate()

This callback gets called before the Plugin is created.

@abstr_code_section 

### afterCreate()

This callback gets called after the Plugin is created.

@abstr_code_section 

### beforeDestroy()

This callback gets called before the Plugin is destroyed.

@abstr_code_section 

### afterDestroy()

This callback gets called after the Plugin is destroyed.

@abstr_code_section 

## Resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 


