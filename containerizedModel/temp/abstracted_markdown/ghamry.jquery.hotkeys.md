# jQuery.Hotkeys @abstr_hyperlink 

# About

**jQuery Hotkeys** is a plug-in that lets you easily add and remove handlers for keyboard events anywhere in your code supporting almost any key combination.

This plugin is based off of the plugin by Tzury Bar Yochay: @abstr_hyperlink 

The syntax is as follows:

@abstr_code_section 

Syntax when wanting to use jQuery's `on()`/`off` methods:

@abstr_code_section 

## Example

@abstr_hyperlink 

## Event Types

Supported types are `'keydown'`, `'keyup'` and `'keypress'`

## jQuery Compatibility

Works with jQuery @abstr_number . @abstr_number . @abstr_number and newer.

It is known to be working with all the major browsers on all available platforms (Win/Mac/Linux)

  * IE @abstr_number / @abstr_number / @abstr_number +
  * FF @abstr_number . @abstr_number / @abstr_number / @abstr_number +
  * Opera- @abstr_number +
  * Safari- @abstr_number +
  * Chrome- @abstr_number . @abstr_number +



## Browserify Compatibility

If you want to include this module in a Browserified project, just add it to node_modules and require it. @abstr_code_section 

This will work if jQuery is global (ex. served from a CDN). If it's not, you need to @abstr_hyperlink : @abstr_code_section 

## Notes

Modifiers are not case sensitive (`Ctrl` == `ctrl` == `cTRL`)

If you want to use more than one modifier (e.g. `alt+ctrl+z`) you should define them by an alphabetical order e.g. alt+ctrl+shift

Hotkeys aren't tracked if you're inside of an input element (unless you explicitly bind the hotkey directly to the input). This helps to avoid conflict with normal user typing.

You can use namespacing by adding a suffix to the event type (e.g. `keyup.toggle`)

## Hotkeys within inputs

Hotkeys aren't tracked if the user is focused within an input element or any element that has `contenteditable="true"` unless you bind the hotkey directly to the element. This helps to avoid conflict with normal user typing. If you don't want this, you can change the booleans of the following to suit:

  * `jQuery.hotkeys.options.filterInputAcceptingElements`
  * `jQuery.hotkeys.options.filterContentEditable`
  * `jQuery.hotkeys.options.filterTextInputs` (deprecated, will be removed in a later version)



### Meta and Hyper Keys

Meta and hyper keys don't register on `keyup` in any browser tested.

#### Chrome @abstr_number . @abstr_number . @abstr_number . @abstr_number

Meta key registers on `keydown` event. Hyper key registers on `keydown` event.

#### Firefox @abstr_number . @abstr_number . @abstr_number and Safari @abstr_number . @abstr_number . @abstr_number

Meta key registers on `keydown` and `keypress` events. Hyper key registers on `keydown` and `keypress` events.

#### Opera @abstr_number . @abstr_number

Meta key doesn't register at all :( Hyper key registers on `keydown` and `keypress` events.

#### TL;DR

Bind to `keydown` event for meta and hyper keys, but meta key does not work in Opera ;)

### Addendum

Firefox is the most liberal one in the manner of letting you capture all short-cuts even those that are built-in in the browser such as `Ctrl-t` for new tab, or `Ctrl-a` for selecting all text. You can always bubble them up to the browser by returning `true` in your handler.

Others, (IE) either let you handle built-in short-cuts, but will add their functionality after your code has executed. Or (Opera/Safari) will _not_ pass those events to the DOM at all.

_So, if you bind`Ctrl-Q` or `Alt-F @abstr_number` and your Safari/Opera window is closed don't be surprised._
