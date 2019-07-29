# Tesseract OCR

@abstr_hyperlink @abstr_hyperlink   
@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink   
@abstr_hyperlink @abstr_hyperlink 

## About

This package contains an **OCR engine** \- `libtesseract` and a **command line program** \- `tesseract`. Tesseract @abstr_number adds a new neural net (LSTM) based OCR engine which is focused on line recognition, but also still supports the legacy Tesseract OCR engine of Tesseract @abstr_number which works by recognizing character patterns. Compatibility with Tesseract @abstr_number is enabled by using the Legacy OCR Engine mode (--oem @abstr_number ). It also needs traineddata files which support the legacy engine, for example those from the tessdata repository.

The lead developer is Ray Smith. The maintainer is Zdenko Podobny. For a list of contributors see @abstr_hyperlink and GitHub's log of @abstr_hyperlink .

Tesseract has **unicode (UTF- @abstr_number ) support** , and can **recognize more than @abstr_number languages** "out of the box".

Tesseract supports **various output formats** : plain text, hOCR (HTML), PDF, invisible-text-only PDF, TSV. The master branch also has experimental support for ALTO (XML) output.

You should note that in many cases, in order to get better OCR results, you'll need to **@abstr_hyperlink of the image** you are giving Tesseract.

This project **does not include a GUI application**. If you need one, please see the @abstr_hyperlink wiki page.

Tesseract **can be trained to recognize other languages**. See @abstr_hyperlink for more information.

## Brief history

Tesseract was originally developed at Hewlett-Packard Laboratories Bristol and at Hewlett-Packard Co, Greeley Colorado between @abstr_number and @abstr_number , with some more changes made in @abstr_number to port to Windows, and some C++izing in @abstr_number . In @abstr_number Tesseract was open sourced by HP. Since @abstr_number it is developed by Google.

The latest (LSTM based) stable version is **@abstr_hyperlink** , released on July @abstr_number , @abstr_number . Latest source code is available from @abstr_hyperlink . Open issues can be found in @abstr_hyperlink , and @abstr_hyperlink .

The latest @abstr_number . @abstr_number version is **@abstr_hyperlink** , released on June @abstr_number , @abstr_number . Latest source code for @abstr_number . @abstr_number is available from @abstr_hyperlink . There is no development for this version, but it can be used for special cases (e.g. see @abstr_hyperlink ).

See **@abstr_hyperlink** and **@abstr_hyperlink** for more details of the releases.

## Installing Tesseract

You can either @abstr_hyperlink or @abstr_hyperlink .

Supported Compilers are:

  * GCC @abstr_number . @abstr_number and above
  * Clang @abstr_number . @abstr_number and above
  * MSVC @abstr_number , @abstr_number , @abstr_number 



Other compilers might work, but are not officially supported.

## Running Tesseract

Basic **@abstr_hyperlink** :
    
    
    tesseract imagename outputbase [-l lang] [--oem ocrenginemode] [--psm pagesegmode] [configfiles...]
    

For more information about the various command line options use `tesseract --help` or `man tesseract`.

Examples can be found in the @abstr_hyperlink .

## For developers

Developers can use `libtesseract` @abstr_hyperlink or @abstr_hyperlink API to build their own application. If you need bindings to `libtesseract` for other programming languages, please see the @abstr_hyperlink section on AddOns wiki page.

Documentation of Tesseract generated from source code by doxygen can be found on @abstr_hyperlink .

## Support

Before you submit an issue, please review **@abstr_hyperlink**.

For support, first read the @abstr_hyperlink , particularly the @abstr_hyperlink to see if your problem is addressed there. If not, search the @abstr_hyperlink , the @abstr_hyperlink and @abstr_hyperlink , and if you still can't find what you need, ask for support in the mailing-lists.

Mailing-lists: * @abstr_hyperlink - For tesseract users. * @abstr_hyperlink - For tesseract developers.

Please report an issue only for a **bug** , not for asking questions.

## License
    
    
    The code in this repository is licensed under the Apache License, Version  @abstr_number . @abstr_number  (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
       http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number 
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    

**NOTE** : This software depends on other packages that may be licensed under different open source licenses.

Tesseract uses @abstr_hyperlink which essentially uses a @abstr_hyperlink .

## Dependencies

Tesseract uses @abstr_hyperlink for opening input images (e.g. not documents like pdf). It is suggested to use leptonica with build-in support for @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink (for w multipage tiff).

## Latest Version of README

For the latest online version of the README.md see:

https://github.com/tesseract-ocr/tesseract/blob/master/README.md
