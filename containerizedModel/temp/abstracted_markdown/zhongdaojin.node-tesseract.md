# Tesseract for node.js

@abstr_hyperlink 

A simple wrapper for the Tesseract OCR package for node.js

## Requirements

  * Tesseract @abstr_number . @abstr_number or higher is needed for this to work



## Installation

There is a hard dependency on the @abstr_hyperlink . You can find installation instructions for various platforms on the project site. For Homebrew users, the installation is quick and easy.
    
    
    brew install tesseract --all-languages
    

The above will install all of the language packages available, if you don't need them all you can remove the `--all-languages` flag and install them manually, by downloading them to your local machine and then exposing the `TESSDATA_PREFIX` variable into your path:
    
    
    export TESSDATA_PREFIX=~/Downloads/
    

You can then go about installing the node-module to expose the JavaScript API:
    
    
    npm install node-tesseract
    

## Usage

```JavaScript var tesseract = require('node-tesseract');

// Recognize text of any language in any format tesseract.process(__dirname + '/path/to/image.jpg',function(err, text) { if(err) { console.error(err); } else { console.log(text); } });

// Recognize German text in a single uniform block of text and set the binary path

var options = { l: 'deu', psm: @abstr_number , binary: '/usr/local/bin/tesseract' };

tesseract.process(__dirname + '/path/to/image.jpg', options, function(err, text) { if(err) { console.error(err); } else { console.log(text); } }); ```

## Changelog

  * _* @abstr_number . @abstr_number . @abstr_number *_ : Adds output file extension detection
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Catches exception when deleting tmp files that do not exist
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Preserves whitespace and replaces tmp module
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Removes console logging for messaging
  * _* @abstr_number . @abstr_number . @abstr_number *_ : The ability to set the binary path via the config object. Better installation documentation.
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Adds test converage to utils module
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Strips leading & trailing whitespace from output by default
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Adds ability to pass options via a configuration object.
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Updates tmp module.
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Removes preprocessing functionatlity. See # @abstr_number .
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Adds basic test coverage for process method
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Pulls in changes by @abstr_hyperlink including: refactored to support tesseract @abstr_number . @abstr_number , added language parameter, config parameter, documentation, Added support for custom preprocessors, OTB Preprocessor using ImageMagick 'convert'
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Initial version


