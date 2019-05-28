# Angular @abstr_number -Busy

@abstr_hyperlink @abstr_hyperlink 

**Angular @abstr_number Busy** can show busy/loading indicators on any promise, or on any Observable's subscription.

@abstr_image 

Rewritten from @abstr_hyperlink , and add some new features in terms of Angular @abstr_number .

### Built with Angular @abstr_number . @abstr_number . @abstr_number

## Demo

@abstr_hyperlink 

## Installation

@abstr_code_section 

## Link CSS

@abstr_code_section 

## Getting Started

Import the `BusyModule` in your root application module:

@abstr_code_section 

Reference your promise in the `ngBusy` directive:

@abstr_code_section 

Moreover, the subscription of an Observable is also supported:

@abstr_code_section 

## Directive Syntax

The `ngBusy` directive expects a **_busy thing_** , which means: \- A promise \- Or an Observable's subscription \- Or an array of them \- Or a configuration object

In other words, you may use flexble syntax:

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

## Options

| Option | Required | Default | Details | | ---- | ---- | ---- | ---- | | busy | Required | null | A busy thing (or an array of busy things) that will cause the loading indicator to show. | | message | Optional | 'Please wait...' | The message to show in the indicator which will reflect the updated values as they are changed. | | backdrop | Optional | true | A faded backdrop will be shown behind the indicator if true. | | template | Optional | A default template string | If provided, the custom template will be shown in place of the default indicatory template. The scope can be augmented with a `{{message}}` field containing the indicator message text. | | delay | Optional | @abstr_number | The amount of time to wait until showing the indicator. Specified in milliseconds. | minDuration | Optional | @abstr_number | The amount of time to keep the indicator showing even if the busy thing was completed quicker. Specified in milliseconds.| | wrapperClass | Optional | 'ng-busy' | The name(s) of the CSS classes to be applied to the wrapper element of the indicator. |

## Overriding Defaults

The default values of options can be overriden by configuring the provider of the `BusyModule`.

In the root application module, you can do this:

@abstr_code_section 

## FAQ

### The indicator's position is not inside the `ngBusy` container

You may add `position: relative` style to your `ngBusy` container.

### SystemJS Config?

You may need this in your `systemjs.config.js`:

@abstr_code_section 

## TODO

  * Provide custom animations for the indicator

  * Unit & E @abstr_number E test




## Credits

Rewritten from @abstr_hyperlink 's @abstr_hyperlink .

Inspired by @abstr_hyperlink 's @abstr_hyperlink .

## LICENSE

This project is licensed under the MIT license. See the @abstr_hyperlink file for more info.
