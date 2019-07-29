# FLIF: Free Lossless Image Format

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

FLIF is a lossless image format based on MANIAC compression. MANIAC (Meta-Adaptive Near-zero Integer Arithmetic Coding) is a variant of CABAC (context-adaptive binary arithmetic coding), where the contexts are nodes of decision trees which are dynamically learned at encode time.

FLIF outperforms PNG, FFV @abstr_number , lossless WebP, lossless BPG and lossless JPEG @abstr_number in terms of compression ratio.

Moreover, FLIF supports a form of progressive interlacing (essentially a generalization/improvement of PNG's Adam @abstr_number ) which means that any prefix (e.g. partial download) of a compressed file can be used as a reasonable lossy encoding of the entire image.

For more information on FLIF, visit https://flif.info

* * *

## License

FLIF is copylefted free/libre software: you can redistribute it and/or modify it, provided that you share back.

The reference implementation of FLIF is released under the terms of the GNU Lesser General Public License version @abstr_number or later (LGPLv @abstr_number +).

The decoder library `libflif_dec` is released under a weaker, non-copyleft free software license: the Apache @abstr_number . @abstr_number license.

The example application `viewflif` illustrates how to use the decode library. The example code in `viewflif.c` is in the public domain (Creative Commons CC @abstr_number @abstr_number . @abstr_number Universal).

* * *

## Build Instructions

### GNU/Linux

#### Install the dependencies

On Debian:

  * for the encoder/decoder: `sudo apt-get install libpng-dev`
  * for the viewer: `sudo apt-get install libsdl @abstr_number -dev`



On Fedora:

  * for the encoder/decoder: `sudo dnf install libpng-devel`
  * for the viewer: `sudo dnf install SDL-devel`



On Ubuntu:

  * for the encoder/decoder: `sudo apt-get install libpng-dev make pkg-config`
  * for the viewer: `sudo apt-get install libsdl @abstr_number -dev`



#### Compile

  * Navigate to the FLIF/src directory and run `make` to compile everything, or 
    * `make flif` to build just the `flif` command line tool
    * `make libflif.so` to build the LGPL'ed shared library
    * `make libflif_dec.so` to build the Apache licensed decode-only shared library
    * `make viewflif` to build the example viewer (it depends on the decode library)



#### Install

  * `sudo make install` if you want to install it globally



### Windows

  * Install Visual Studio ( @abstr_hyperlink is free for open source projects)
  * Open the `build\MSVC` folder and double-click the `dl_make_vs.bat` file. This will download required libraries and run `nmake` to build `flif.exe`. Then, run in the command line: 
    * `nmake libflif.dll` to build the shared library
    * `nmake viewflif.exe` to build the example viewer



### OS X

  * Install @abstr_hyperlink 
  * Install the dependencies: `brew install pkg-config libpng sdl @abstr_number`
  * Run `make` in the FLIF/src directory



* * *

## Pre-Built Binaries

These will be available on the Release page

  * https://github.com/FLIF-hub/FLIF/releases



* * *

## Related Projects

  * **@abstr_hyperlink** \- A javascript polyfill that allows you to use FLIF files in the browser. ( @abstr_hyperlink )
  * **@abstr_hyperlink** \- A GUI that allows you to convert and view FLIF files.
  * **@abstr_hyperlink** – An image viewer that supports FLIF via @abstr_hyperlink 
  * **@abstr_hyperlink** \- A brute-force FLIF optimizer.
  * **@abstr_hyperlink** – A javascript FLIF encoder and decoder. ( @abstr_hyperlink )
  * **@abstr_hyperlink** – A work-in-progress implementation of FLIF in Rust.
  * **@abstr_hyperlink** – A plugin that allows you to decode and encode FLIF files in Windows aplications using the Windows Imaging Component (WIC) API. That allows e.g., to see the files in Windows PhotoViewer and Windows Explorer.
  * **@abstr_hyperlink** – This plugin enables decoding of FLIF images in applications which use the Windows Imaging Component API. In this way, FLIF images can be viewed in Windows Explorer like other common image formats.
  * **@abstr_hyperlink** – Enables Qt @abstr_number and Qt @abstr_number applications to load images in the FLIF image format.
  * **@abstr_hyperlink** – Go FLIF Library Bindings.
  * **@abstr_hyperlink** \- Image viewer for macOS with QuickLook plugin
  * **@abstr_hyperlink** \- Node.js-ported FLIF command-line tool.
  * **@abstr_hyperlink** \- A Node.JS wrapper that allows you to use JavaScript to interact with the CLI.
  * **@abstr_hyperlink** \- A simple and extensive GUI intermediary for the native executables.
  * **@abstr_hyperlink** \- Small Windows desktop app for converting to/from FLIF/PNG stills.


