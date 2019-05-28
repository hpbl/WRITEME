# Grunt-DSS @abstr_hyperlink 

**Grunt-DSS** is a **@abstr_hyperlink** plugin that generates UI documentation from CSS, Less, Stylus, Sass files based on the **@abstr_hyperlink** parser output.

## Getting Started

This plugin requires Grunt `~ @abstr_number . @abstr_number . @abstr_number`

If you haven't used @abstr_hyperlink before, be sure to check out the @abstr_hyperlink guide, as it explains how to create a @abstr_hyperlink as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

@abstr_code_section 

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

@abstr_code_section 

In your project's Gruntfile, add a section named `dss` to the data object passed into `grunt.initConfig()`.

## Settings

#### files

Type: `Array` or `Object` Default value: `[]`

Files to parse. Using Grunt default `files` syntax. @abstr_hyperlink .

#### options.template

Type: `String` Default value: `{task_path}/template/`

A relative path to a `mustache` template to be used instead of the default.

#### options.template_index

Type: `String` Default value: `index.handlebars`

The filename of the index of the template.

#### options.output_index

Type: `String` Default value: `index.html`

The filename of the index for the output file.

#### options.parsers

Type: `Object` Default value: `{}`

An object filled with key value pairs of functions to be used when parsing comment blocks. See the **example** below for more context about how to use these.

#### options.include_empty_files

Type: `Boolean` Default value: `true`

Include files without DSS annotations.

#### options-handlebar_helpers

Type: `Object` Default value: `{}`

An object filled with key value pairs of handlebars helpers. The key is the helber name and the value is the callback function. See the @abstr_hyperlink for more information.

### Example initConfig

@abstr_code_section `

## DSS Sublime Text Plugin

You can now **auto-complete** DSS-style comment blocks using @sc @abstr_number 's @abstr_hyperlink 
