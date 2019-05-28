@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink 

# Ionic Native

Ionic Native is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your @abstr_hyperlink , Cordova, or Web View mobile app easy.

### Documentation

For the full Ionic Native documentation, please visit @abstr_hyperlink .

### Promises and Observables

Ionic Native wraps plugin callbacks in a Promise or @abstr_hyperlink , providing a common interface for all plugins and ensuring that native events trigger change detection in Angular @abstr_number .

@abstr_code_section 

### Angular @abstr_number

Ionic Native works as a stand-in for @abstr_hyperlink . In many cases, the usage is identical, but we import `ionic.native` instead of `ngCordova` as our module.

As a rule of thumb: take the ES @abstr_number class name of the plugin and add `$cordova` to get the service name. For example, `Geolocation` would be `$cordovaGeolocation`, and `Camera` will be `$cordovaCamera`:

@abstr_code_section 

For services that return observables, the Angular @abstr_number digest cycle must be done manually (currently):

@abstr_code_section 

### Runtime Diagnostics

Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Ionic Native lets you know what the issue is and how you can resolve it.

@abstr_image 

## Installation

Run following commmand to install ionic-native in your project. @abstr_code_section 

## Plugin Missing?

Let us know or submit a PR! Take a look at @abstr_hyperlink for more on how to contribute. :heart:

# Credits

Ibrahim Hadeed - @abstr_hyperlink 

Tim Lancina - @abstr_hyperlink 

Max Lynch - @abstr_hyperlink 

Rob Wormald - @abstr_hyperlink 
