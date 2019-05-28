# JavaScript Templates

## Demo

@abstr_hyperlink 

## Description

@abstr_number KB lightweight, fast & powerful JavaScript templating engine with zero dependencies. Compatible with server-side environments like Node.js, module loaders like RequireJS, Browserify or webpack and all web browsers.

## Usage

### Client-side

Include the (minified) JavaScript Templates script in your HTML markup:

@abstr_code_section 

Add a script section with type **"text/x-tmpl"** , a unique **id** property and your template definition as content:

@abstr_code_section 

**"o"** (the lowercase letter) is a reference to the data parameter of the template function (see the API section on how to modify this identifier).

In your application code, create a JavaScript object to use as data for the template:

@abstr_code_section 

In a real application, this data could be the result of retrieving a @abstr_hyperlink resource.

Render the result by calling the **tmpl()** method with the id of the template and the data object as arguments:

@abstr_code_section 

### Server-side

The following is an example how to use the JavaScript Templates engine on the server-side with @abstr_hyperlink .

Create a new directory and add the **tmpl.js** file. Or alternatively, install the **blueimp-tmpl** package with @abstr_hyperlink :

@abstr_code_section 

Add a file **template.html** with the following content:

@abstr_code_section 

Add a file **server.js** with the following content:

@abstr_code_section 

Run the application with the following command:

@abstr_code_section 

## Requirements

The JavaScript Templates script has zero dependencies.

## API

### tmpl() function

The **tmpl()** function is added to the global **window** object and can be called as global function:

@abstr_code_section 

The **tmpl()** function can be called with the id of a template, or with a template string:

@abstr_code_section 

If called without second argument, **tmpl()** returns a reusable template function:

@abstr_code_section 

### Templates cache

Templates loaded by id are cached in the map **tmpl.cache** :

@abstr_code_section 

### Output encoding

The method **tmpl.encode** is used to escape HTML special characters in the template output:

@abstr_code_section 

**tmpl.encode** makes use of the regular expression **tmpl.encReg** and the encoding map **tmpl.encMap** to match and replace special characters, which can be modified to change the behavior of the output encoding.   
Strings matched by the regular expression, but not found in the encoding map are removed from the output. This allows for example to automatically trim input values (removing whitespace from the start and end of the string):

@abstr_code_section 

### Local helper variables

The local variables available inside the templates are the following:

  * **o** : The data object given as parameter to the template function (see the next section on how to modify the parameter name).
  * **tmpl** : A reference to the **tmpl** function object.
  * **_s** : The string for the rendered result content.
  * **_e** : A reference to the **tmpl.encode** method.
  * **print** : Helper function to add content to the rendered result string.
  * **include** : Helper function to include the return value of a different template in the result.



To introduce additional local helper variables, the string **tmpl.helper** can be extended. The following adds a convenience function for _console.log_ and a streaming function, that streams the template rendering result back to the callback argument (note the comma at the beginning of each variable declaration):

@abstr_code_section 

Those new helper functions could be used to stream the template contents to the console output:

@abstr_code_section 

### Template function argument

The generated template functions accept one argument, which is the data object given to the **tmpl(id, data)** function. This argument is available inside the template definitions as parameter **o** (the lowercase letter).

The argument name can be modified by overriding **tmpl.arg** :

@abstr_code_section 

### Template parsing

The template contents are matched and replaced using the regular expression **tmpl.regexp** and the replacement function **tmpl.func**. The replacement function operates based on the @abstr_hyperlink .

To use different tags for the template syntax, override **tmpl.regexp** with a modified regular expression, by exchanging all occurrences of "{%" and "%}", e.g. with "[%" and "%]":

@abstr_code_section 

By default, the plugin preserves whitespace (newlines, carriage returns, tabs and spaces). To strip unnecessary whitespace, you can override the **tmpl.func** function, e.g. with the following code:

@abstr_code_section 

## Templates syntax

### Interpolation

Print variable with HTML special characters escaped:

@abstr_code_section 

Print variable without escaping:

@abstr_code_section 

Print output of function calls:

@abstr_code_section 

Use dot notation to print nested properties:

@abstr_code_section 

### Evaluation

Use **print(str)** to add escaped content to the output:

@abstr_code_section 

Use **print(str, true)** to add unescaped content to the output:

@abstr_code_section 

Use **include(str, obj)** to include content from a different template:

@abstr_code_section 

**If else condition** :

@abstr_code_section 

**For loop** :

@abstr_code_section 

## Compiled templates

The JavaScript Templates project comes with a compilation script, that allows you to compile your templates into JavaScript code and combine them with a minimal Templates runtime into one combined JavaScript file.

The compilation script is built for @abstr_hyperlink .   
To use it, first install the JavaScript Templates project via @abstr_hyperlink :

@abstr_code_section 

This will put the executable **tmpl.js** into the folder **node_modules/.bin**. It will also make it available on your PATH if you install the package globally (by adding the **-g** flag to the install command).

The **tmpl.js** executable accepts the paths to one or multiple template files as command line arguments and prints the generated JavaScript code to the console output. The following command line shows you how to store the generated code in a new JavaScript file that can be included in your project:

@abstr_code_section 

The files given as command line arguments to **tmpl.js** can either be pure template files or HTML documents with embedded template script sections. For the pure template files, the file names (without extension) serve as template ids.   
The generated file can be included in your project as a replacement for the original **tmpl.js** runtime. It provides you with the same API and provides a **tmpl(id, data)** function that accepts the id of one of your templates as first and a data object as optional second parameter.

## Tests

The JavaScript Templates project comes with @abstr_hyperlink .   
There are two different ways to run the tests:

  * Open test/index.html in your browser or
  * run `npm test` in the Terminal in the root path of the repository package.



The first one tests the browser integration, the second one the @abstr_hyperlink integration.

## License

The JavaScript Templates script is released under the @abstr_hyperlink .
