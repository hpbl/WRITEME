## loaders

> AudioBuffer loader and other loader utilities module

### Example

Load loaders.js in your html file by using:

@abstr_code_section 

@abstr_code_section 

Use the same `load` method to load multiple files, by passing an array of urls ['url/to/file @abstr_number ', 'url/to/file @abstr_number ', ...]. The progress is then an object, eg. {index: @abstr_number , value: @abstr_number . @abstr_number , total: @abstr_number , loaded: @abstr_number }, where index corresponds to the file index in the array of files, and value, between @abstr_number . @abstr_number and @abstr_number , corresponds to the file loading progress.

### Tests

Install all dependencies in the module folder

@abstr_code_section 

Run the test suite

@abstr_code_section 

It should launch a browser, run the tests in it, and generate the coverage report in the coverage folder.

### Status

This library is under heavy development and subject to change. Every new API breaking change we will be adding snapshots to the repository so you can always fetch a working copy.

## License

This module is released under the @abstr_hyperlink .

## Acknowledgments

This code is part of the @abstr_hyperlink , funded by ANR (The French National Research Agency), _ContInt_ program, @abstr_number - @abstr_number .
