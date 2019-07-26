#  @abstr_image JSIL

JSIL is a compiler that transforms .NET applications and libraries from their native executable format - CIL bytecode - into standards-compliant, cross-browser JavaScript. You can take this JavaScript and run it in a web browser or any other modern JavaScript runtime. Unlike other cross-compiler tools targeting JavaScript, JSIL produces readable, easy-to-debug JavaScript that resembles the code a developer might write by hand, while still maintaining the behavior and structure of the original .NET code.

For live demos and code samples, @abstr_hyperlink .

For help on getting started using JSILc, see @abstr_hyperlink .

JSIL is currently in partial maintenance mode (due to time constraints on the maintainer's part), but bug reports and questions are still actively responded to. Pull requests still welcome!

# License

Copyright @abstr_number K. Gadd

Additional contributions by Igor Kiselev and assorted community members.

License: MIT/X @abstr_number 

Replay/Record support & Emscripten integration sponsored by Mozilla Corporation

License: MIT/X @abstr_number 

# Acknowledgements

JSIL depends upon or is based on the following open source libraries:

  * Mono.Cecil: MIT/X @abstr_number (thanks to Jb Evain)
  * ICSharpCode.Decompiler: MIT/X @abstr_number (developed as part of ILSpy)
  * Mono.Options: MIT/X @abstr_number (Jonathan Pryor & Federico Di Gregorio)
  * printStackTrace: Public Domain (Eric Wendelin and others)
  * XAPParse: Microsoft Public License/Ms-PL (Andy Patrick)
  * webgl- @abstr_number d: MIT (Corban Brook, Bobby Richter, Charles J. Cliffe, and others)
  * S @abstr_number TC DXT @abstr_number / DXT @abstr_number Texture Decompression Routines (Benjamin Dobell)



The Upstream folder also contains:

  * Win @abstr_number build of the Spidermonkey command-line JavaScript shell. It is built from sources provided by the Mozilla project (http://www.mozilla.org/). This build is used for running JavaScript automated tests.
  * A specific version of the NUnit.Framework assembly, used by the automated tests. This ensures that they compile correctly regardless of which version of NUnit you have installed.
  * Win @abstr_number build of PNGQuant for optimizing PNG files. (Jef Poskanzer, Greg Roelofs)
  * Mono ILASM for CIL tests execution



The following NuGet packages are used: * Grunt * Node * NPM * NUnit * NUnit Test Adapter * FSharp CodeDom

Logo by @abstr_hyperlink .
