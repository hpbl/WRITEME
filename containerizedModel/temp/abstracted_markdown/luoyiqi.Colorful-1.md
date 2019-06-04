# Colorful

@abstr_hyperlink 

Colorful is a dynamic theme library allowing you to change your apps' color schemes easily.

## License

Colorful is licensed under the Apache @abstr_number . @abstr_number License, in common Android style.

Copyright @abstr_number Garret Yoder

## Installation

Add jitpack to your maven sources @abstr_code_section Add Colorful as a dependency to your `build.gradle` @abstr_code_section 

## Usage

In your `Application` class, you must initialize Colorful @abstr_code_section Any `Activity` you wish to be themed must extend from `CActivity` @abstr_code_section 

Alternatively you can call the following method after `super.onCreate(savedInstanceState);` and before `setContentView();` @abstr_code_section 

You can also use `Colorful.applyTheme(Activity activity, Boolean overrideBase);` where `overrideBase` defines whether you want `Colorful` to override your base theme as well, or simply set the primary and accent colors. This allows you to use Colorful with your own pre-defined style, but _will_ break light/dark functionality.

You can set the default theme colors Colorful will use with the `defaults()` method @abstr_code_section You can set the colors at any time using the `config` method @abstr_code_section After which you must call `apply();` to save your changes

Colorful will handle saving and loading your theme preferences for you.

## Color Chooser

Colorful has a inbuilt color chooser dialog that will return a `ThemeColor` object you can pass directly to Colorful @abstr_code_section 

## Preference Item

Colorful has a inbuilt preference item that will automatically set Colorful's colors.

Use `colorpicker:primary_color` and `colorpicker:accent_color` to tell Colorful which value to set. @abstr_code_section 

## Screenshots

@abstr_image @abstr_image 
