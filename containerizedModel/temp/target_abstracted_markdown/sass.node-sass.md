# node-sass

#### Supported Node.js versions vary by release, please consult the @abstr_hyperlink . Below is a quick guide for minimium support:

NodeJS | Minimum node-sass version | Node Module \--------|--------------------------|------------ Node @abstr_number | @abstr_number . @abstr_number + | @abstr_number Node @abstr_number | @abstr_number . @abstr_number + | @abstr_number Node @abstr_number | @abstr_number . @abstr_number + | @abstr_number Node @abstr_number | @abstr_number . @abstr_number . @abstr_number + | @abstr_number 

@abstr_image  |  @abstr_hyperlink   
---|---  
  
@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Node-sass is a library that provides binding for Node.js to [LibSass], the C version of the popular stylesheet preprocessor, Sass.

It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.

Find it on npm: @abstr_hyperlink 

Follow @nodesass on twitter for release updates: @abstr_hyperlink 

## Install

@abstr_code_section 

Some users have reported issues installing on Ubuntu due to `node` being registered to another package. @abstr_hyperlink to install NodeJS so that `#!/usr/bin/env node` correctly resolves.

Compiling on Windows machines requires the @abstr_hyperlink .

Are you seeing the following error? Check out our @abstr_hyperlink .**

@abstr_code_section 

**Having installation troubles? Check out our @abstr_hyperlink .**

### Install from mirror in China

@abstr_code_section 

## Usage

@abstr_code_section 

## Options

### file

  * Type: `String`
  * Default: `null`



**Special** : `file` or `data` must be specified

Path to a file for [LibSass] to compile.

### data

  * Type: `String`
  * Default: `null`



**Special** : `file` or `data` must be specified

A string to pass to [LibSass] to compile. It is recommended that you use `includePaths` in conjunction with this so that [LibSass] can find files when using the `@import` directive.

### importer (>= v @abstr_number . @abstr_number . @abstr_number ) - _experimental_

**This is an experimental LibSass feature. Use with caution.**

  * Type: `Function | Function[]` signature `function(url, prev, done)`
  * Default: `undefined`



Function Parameters and Information:

  * `url (String)` \- the path in import **as-is** , which [LibSass] encountered
  * `prev (String)` \- the previously resolved path
  * `done (Function)` \- a callback function to invoke on async completion, takes an object literal containing 
    * `file (String)` \- an alternate path for [LibSass] to use **OR**
    * `contents (String)` \- the imported contents (for example, read from memory or the file system)



Handles when [LibSass] encounters the `@import` directive. A custom importer allows extension of the [LibSass] engine in both a synchronous and asynchronous manner. In both cases, the goal is to either `return` or call `done()` with an object literal. Depending on the value of the object literal, one of two things will happen.

When returning or calling `done()` with `{ file: "String" }`, the new file path will be assumed for the `@import`. It's recommended to be mindful of the value of `prev` in instances where relative path resolution may be required.

When returning or calling `done()` with `{ contents: "String" }`, the string value will be used as if the file was read in through an external source.

Starting from v @abstr_number . @abstr_number . @abstr_number :

  * `this` refers to a contextual scope for the immediate run of `sass.render` or `sass.renderSync`

  * importers can return error and LibSass will emit that error in response. For instance:

@abstr_code_section 

  * importer can be an array of functions, which will be called by LibSass in the order of their occurrence in array. This helps user specify special importer for particular kind of path (filesystem, http). If an importer does not want to handle a particular path, it should return `null`. See functions section for more details on Sass types.




### functions (>= v @abstr_number . @abstr_number . @abstr_number ) - _experimental_

**This is an experimental LibSass feature. Use with caution.**

`functions` is an `Object` that holds a collection of custom functions that may be invoked by the sass files being compiled. They may take zero or more input parameters and must return a value either synchronously (`return ...;`) or asynchronously (`done();`). Those parameters will be instances of one of the constructors contained in the `require('node-sass').types` hash. The return value must be of one of these types as well. See the list of available types below:

#### types.Number(value [, unit = ""])

  * `getValue()`/ `setValue(value)` : gets / sets the numerical portion of the number
  * `getUnit()` / `setUnit(unit)` : gets / sets the unit portion of the number



#### types.String(value)

  * `getValue()` / `setValue(value)` : gets / sets the enclosed string



#### types.Color(r, g, b [, a = @abstr_number . @abstr_number ]) or types.Color(argb)

  * `getR()` / `setR(value)` : red component (integer from `@abstr_number` to `@abstr_number`)
  * `getG()` / `setG(value)` : green component (integer from `@abstr_number` to `@abstr_number`)
  * `getB()` / `setB(value)` : blue component (integer from `@abstr_number` to `@abstr_number`)
  * `getA()` / `setA(value)` : alpha component (number from `@abstr_number` to `@abstr_number . @abstr_number`)



Example:

@abstr_code_section 

#### types.Boolean(value)

  * `getValue()` : gets the enclosed boolean
  * `types.Boolean.TRUE` : Singleton instance of `types.Boolean` that holds "true"
  * `types.Boolean.FALSE` : Singleton instance of `types.Boolean` that holds "false"



#### types.List(length [, commaSeparator = true])

  * `getValue(index)` / `setValue(index, value)` : `value` must itself be an instance of one of the constructors in `sass.types`.
  * `getSeparator()` / `setSeparator(isComma)` : whether to use commas as a separator
  * `getLength()`



#### types.Map(length)

  * `getKey(index)` / `setKey(index, value)`
  * `getValue(index)` / `setValue(index, value)`
  * `getLength()`



#### types.Null()

  * `types.Null.NULL` : Singleton instance of `types.Null`.



#### Example

@abstr_code_section 

### includePaths

  * Type: `Array<String>`
  * Default: `[]`



An array of paths that [LibSass] can look in to attempt to resolve your `@import` declarations. When using `data`, it is recommended that you use this.

### indentedSyntax

  * Type: `Boolean`
  * Default: `false`



`true` values enable @abstr_hyperlink for parsing the data string or file.

__Note:__ node-sass/libsass will compile a mixed library of scss and indented syntax (.sass) files with the Default setting (false) as long as .sass and .scss extensions are used in filenames.

### indentType (>= v @abstr_number . @abstr_number . @abstr_number )

  * Type: `String`
  * Default: `space`



Used to determine whether to use space or tab character for indentation.

### indentWidth (>= v @abstr_number . @abstr_number . @abstr_number )

  * Type: `Number`
  * Default: `@abstr_number`
  * Maximum: `@abstr_number`



Used to determine the number of spaces or tabs to be used for indentation.

### linefeed (>= v @abstr_number . @abstr_number . @abstr_number )

  * Type: `String`
  * Default: `lf`



Used to determine whether to use `cr`, `crlf`, `lf` or `lfcr` sequence for line break.

### omitSourceMapUrl

  * Type: `Boolean`
  * Default: `false`



**Special:** When using this, you should also specify `outFile` to avoid unexpected behavior.

`true` values disable the inclusion of source map information in the output file.

### outFile

  * Type: `String | null`
  * Default: `null`



**Special:** Required when `sourceMap` is a truthy value

Specify the intended location of the output file. Strongly recommended when outputting source maps so that they can properly refer back to their intended files.

**Attention** enabling this option will **not** write the file on disk for you, it's for internal reference purpose only (to generate the map for example).

Example on how to write it on the disk

@abstr_code_section 

### outputStyle

  * Type: `String`
  * Default: `nested`
  * Values: `nested`, `expanded`, `compact`, `compressed`



Determines the output format of the final CSS style.

### precision

  * Type: `Integer`
  * Default: `@abstr_number`



Used to determine how many digits after the decimal will be allowed. For instance, if you had a decimal number of `@abstr_number . @abstr_number` and a precision of `@abstr_number`, the result will be `@abstr_number . @abstr_number` in the final CSS.

### sourceComments

  * Type: `Boolean`
  * Default: `false`



`true` Enables the line number and file where a selector is defined to be emitted into the compiled CSS as a comment. Useful for debugging, especially when using imports and mixins.

### sourceMap

  * Type: `Boolean | String | undefined`
  * Default: `undefined`



**Special:** Setting the `sourceMap` option requires also setting the `outFile` option

Enables the outputting of a source map during `render` and `renderSync`. When `sourceMap === true`, the value of `outFile` is used as the target output location for the source map. When `typeof sourceMap === "string"`, the value of `sourceMap` will be used as the writing location for the file.

### sourceMapContents

  * Type: `Boolean`
  * Default: `false`



`true` includes the `contents` in the source map information

### sourceMapEmbed

  * Type: `Boolean`
  * Default: `false`



`true` embeds the source map as a data URI

### sourceMapRoot

  * Type: `String`
  * Default: `undefined`



the value will be emitted as `sourceRoot` in the source map information

## `render` Callback (>= v @abstr_number . @abstr_number . @abstr_number )

node-sass supports standard node style asynchronous callbacks with the signature of `function(err, result)`. In error conditions, the `error` argument is populated with the error object. In success conditions, the `result` object is populated with an object describing the result of the render call.

### Error Object

  * `message` (String) - The error message.
  * `line` (Number) - The line number of error.
  * `column` (Number) - The column number of error.
  * `status` (Number) - The status code.
  * `file` (String) - The filename of error. In case `file` option was not set (in favour of `data`), this will reflect the value `stdin`.



### Result Object

  * `css` (Buffer) - The compiled CSS. Write this to a file, or serve it out as needed.
  * `map` (Buffer) - The source map
  * `stats` (Object) - An object containing information about the compile. It contains the following keys: 
    * `entry` (String) - The path to the scss file, or `data` if the source was not a file
    * `start` (Number) - Date.now() before the compilation
    * `end` (Number) - Date.now() after the compilation
    * `duration` (Number) - _end_ \- _start_
    * `includedFiles` (Array) - Absolute paths to all related scss files in no particular order.



### Examples

@abstr_code_section 

### Special behaviours

  * In the case that both `file` and `data` options are set, node-sass will give precedence to `data` and use `file` to calculate paths in sourcemaps.



### Version information (>= v @abstr_number . @abstr_number . @abstr_number )

Both `node-sass` and `libsass` version info is now exposed via the `info` method:

@abstr_code_section 

Since node-sass >=v @abstr_number . @abstr_number . @abstr_number LibSass version is determined at run time.

## Integrations

Listing of community uses of node-sass in build tools and frameworks.

### Brackets extension

@abstr_hyperlink has created a @abstr_hyperlink extension based on node-sass: @abstr_hyperlink . When editing Sass files, the extension compiles changes on save. The extension also integrates with Live Preview to show Sass changes in the browser without saving or compiling.

### Brunch plugin

@abstr_hyperlink 's official sass plugin uses node-sass by default, and automatically falls back to ruby if use of Compass is detected: @abstr_hyperlink 

### Connect/Express middleware

Recompile `.scss` files automatically for connect and express based http servers.

This functionality has been moved to @abstr_hyperlink in node-sass v @abstr_number . @abstr_number . @abstr_number 

### DocPad Plugin

@abstr_hyperlink wrote a @abstr_hyperlink plugin that compiles `.scss` files using node-sass: 

### Duo.js extension

@abstr_hyperlink has created an extension that transpiles Sass to CSS using node-sass with @abstr_hyperlink @abstr_hyperlink 

### Grunt extension

@abstr_hyperlink has created a set of grunt tasks based on node-sass: @abstr_hyperlink 

### Gulp extension

@abstr_hyperlink has created a gulp sass plugin based on node-sass: @abstr_hyperlink 

### Harp

@abstr_hyperlink ’s Harp web server implicitly compiles `.scss` files using node-sass: @abstr_hyperlink 

### Metalsmith plugin

@abstr_hyperlink has created a metalsmith plugin based on node-sass: @abstr_hyperlink 

### Meteor plugin

@abstr_hyperlink has created a meteor plugin based on node-sass: @abstr_hyperlink 

### Mimosa module

@abstr_hyperlink has created a Mimosa module for sass which includes node-sass: @abstr_hyperlink 

## Example App

There is also an example connect app here: @abstr_hyperlink 

## Rebuilding binaries

Node-sass includes pre-compiled binaries for popular platforms, to add a binary for your platform follow these steps:

Check out the project:

@abstr_code_section 

## Command Line Interface

The interface for command-line usage is fairly simplistic at this stage, as seen in the following usage section.

Output will be sent to stdout if the `--output` flag is omitted.

### Usage

`node-sass [options] <input> [output]` Or: `cat <input> | node-sass > output`

Example:

`node-sass src/style.scss dest/style.css`

**Options:**

@abstr_code_section 

The `input` can be either a single `.scss` or `.sass`, or a directory. If the input is a directory the `--output` flag must also be supplied.

Also, note `--importer` takes the (absolute or relative to pwd) path to a js file, which needs to have a default `module.exports` set to the importer function. See our test @abstr_hyperlink for example.

The `--source-map` option accepts a boolean value, in which case it replaces destination extension with `.css.map`. It also accepts path to `.map` file and even path to the desired directory. When compiling a directory `--source-map` can either be a boolean value or a directory.

## Binary configuration parameters

node-sass supports different configuration parameters to change settings related to the sass binary such as binary name, binary path or alternative download path. Following parameters are supported by node-sass:

Variable name | .npmrc parameter | Process argument | Value \-----------------|------------------|--------------------|------ SASS_BINARY_NAME | sass_binary_name | --sass-binary-name | path SASS_BINARY_SITE | sass_binary_site | --sass-binary-site | URL SASS_BINARY_PATH | sass_binary_path | --sass-binary-path | path SASS_BINARY_DIR | sass_binary_dir | --sass-binary-dir | path

These parameters can be used as environment variable:

  * E.g. `export SASS_BINARY_SITE=http://example.com/`



As local or global @abstr_hyperlink configuration file:

  * E.g. `sass_binary_site=http://example.com/`



As a process argument:

  * E.g. `npm install node-sass --sass-binary-site=http://example.com/`



## Post-install Build

Install runs only two Mocha tests to see if your machine can use the pre-built [LibSass] which will save some time during install. If any tests fail it will build from source.

## Maintainers

This module is brought to you and maintained by the following people:

  * Michael Mifsud - Project Lead ( @abstr_hyperlink / @abstr_hyperlink )
  * Andrew Nesbitt ( @abstr_hyperlink / @abstr_hyperlink )
  * Dean Mao ( @abstr_hyperlink / @abstr_hyperlink )
  * Brett Wilkins ( @abstr_hyperlink / @abstr_hyperlink )
  * Keith Cirkel ( @abstr_hyperlink / @abstr_hyperlink )
  * Laurent Goderre ( @abstr_hyperlink / @abstr_hyperlink )
  * Nick Schonning ( @abstr_hyperlink / @abstr_hyperlink )
  * Adeel Mujahid ( @abstr_hyperlink / @abstr_hyperlink )



## Contributors

We < @abstr_number our contributors! A special thanks to all those who have clocked in some dev time on this project, we really appreciate your hard work. You can find @abstr_hyperlink 

### Note on Patches/Pull Requests

Check out our Contributing guide

## Copyright

Copyright (c) @abstr_number Andrew Nesbitt. See @abstr_hyperlink for details.
