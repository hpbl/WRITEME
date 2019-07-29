# OpenH @abstr_number 

OpenH @abstr_number is a codec library which supports H. @abstr_number encoding and decoding. It is suitable for use in real time applications such as WebRTC. See http://www.openh @abstr_number .org/ for more details.

## Encoder Features

  * Constrained Baseline Profile up to Level @abstr_number . @abstr_number (Max frame size is @abstr_number macro-blocks)
  * Arbitrary resolution, not constrained to multiples of @abstr_number x @abstr_number 
  * Rate control with adaptive quantization, or constant quantization
  * Slice options: @abstr_number slice per frame, N slices per frame, N macroblocks per slice, or N bytes per slice
  * Multiple threads automatically used for multiple slices
  * Temporal scalability up to @abstr_number layers in a dyadic hierarchy
  * Simulcast AVC up to @abstr_number resolutions from a single input
  * Spatial simulcast up to @abstr_number resolutions from a single input
  * Long Term Reference (LTR) frames
  * Memory Management Control Operation (MMCO)
  * Reference picture list modification
  * Single reference frame for inter prediction
  * Multiple reference frames when using LTR and/or @abstr_number - @abstr_number temporal layers
  * Periodic and on-demand Instantaneous Decoder Refresh (IDR) frame insertion
  * Dynamic changes to bit rate, frame rate, and resolution
  * Annex B byte stream output
  * YUV @abstr_number : @abstr_number : @abstr_number planar input



## Decoder Features

  * Constrained Baseline Profile up to Level @abstr_number . @abstr_number (Max frame size is @abstr_number macro-blocks)
  * Arbitrary resolution, not constrained to multiples of @abstr_number x @abstr_number 
  * Single thread for all slices
  * Long Term Reference (LTR) frames
  * Memory Management Control Operation (MMCO)
  * Reference picture list modification
  * Multiple reference frames when specified in Sequence Parameter Set (SPS)
  * Annex B byte stream input
  * YUV @abstr_number : @abstr_number : @abstr_number planar output



## OS Support

  * Windows @abstr_number -bit and @abstr_number -bit
  * Mac OS X @abstr_number -bit and @abstr_number -bit
  * Linux @abstr_number -bit and @abstr_number -bit
  * Android @abstr_number -bit and @abstr_number -bit
  * iOS @abstr_number -bit and @abstr_number -bit
  * Windows Phone @abstr_number -bit



## Processor Support

  * Intel x @abstr_number optionally with MMX/SSE (no AVX yet, help is welcome)
  * ARMv @abstr_number optionally with NEON, AArch @abstr_number optionally with NEON
  * Any architecture using C/C++ fallback functions



## Building the Library

NASM needed to be installed for assembly code: workable version @abstr_number . @abstr_number . @abstr_number or above, NASM can downloaded from http://www.nasm.us/. For Mac OSX @abstr_number -bit NASM needed to be below version @abstr_number . @abstr_number . @abstr_number as NASM @abstr_number . @abstr_number . @abstr_number will introduce error when using RIP-relative addresses in Mac OSX @abstr_number -bit

To build the arm assembly for Windows Phone, gas-preprocessor is required. It can be downloaded from git://git.libav.org/gas-preprocessor.git

## For Android Builds

To build for android platform, You need to install android sdk and ndk. You also need to export `**ANDROID_SDK**/tools` to PATH. On Linux, this can be done by
    
    
    export PATH=**ANDROID_SDK**/tools:$PATH
    

The codec and demo can be built by
    
    
    make OS=android NDKROOT=**ANDROID_NDK** TARGET=**ANDROID_TARGET**
    

Valid `**ANDROID_TARGET**` can be found in `**ANDROID_SDK**/platforms`, such as `android- @abstr_number`. You can also set `ARCH`, `NDKLEVEL` according to your device and NDK version. `ARCH` specifies the architecture of android device. Currently `arm`, `arm @abstr_number`, `x @abstr_number` and `x @abstr_number _ @abstr_number` are supported, the default is `arm`. (`mips` and `mips @abstr_number` can also be used, but there's no specific optimization for those architectures.) `NDKLEVEL` specifies android api level, the default is @abstr_number . Available possibilities can be found in `**ANDROID_NDK**/platforms`, such as `android- @abstr_number` (strip away the `android-` prefix).

By default these commands build for the `armeabi-v @abstr_number a` ABI. To build for the other android ABIs, add `ARCH=arm @abstr_number`, `ARCH=x @abstr_number`, `ARCH=x @abstr_number _ @abstr_number`, `ARCH=mips` or `ARCH=mips @abstr_number`. To build for the older `armeabi` ABI (which has armv @abstr_number te as baseline), add `APP_ABI=armeabi` (`ARCH=arm` is implicit). To build for @abstr_number -bit ABI, such as `arm @abstr_number`, explicitly set `NDKLEVEL` to @abstr_number or higher.

## For iOS Builds

You can build the libraries and demo applications using xcode project files located in `codec/build/iOS/dec` and `codec/build/iOS/enc`.

You can also build the libraries (but not the demo applications) using the make based build system from the command line. Build with
    
    
    make OS=ios ARCH=**ARCH**
    

Valid values for `**ARCH**` are the normal iOS architecture names such as `armv @abstr_number`, `armv @abstr_number s`, `arm @abstr_number`, and `i @abstr_number` and `x @abstr_number _ @abstr_number` for the simulator. Another settable iOS specific parameter is `SDK_MIN`, specifying the minimum deployment target for the built library. For other details on building using make on the command line, see 'For All Platforms' below.

## For Windows Builds

Our Windows builds use MinGW which can be downloaded from http://www.mingw.org/

To build with gcc, add the MinGW bin directory (e.g. `/c/MinGW/bin`) to your path and follow the 'For All Platforms' instructions below.

To build with Visual Studio you will need to set up your path to run cl.exe. The easiest way is to start MSYS from a developer command line session. Instructions can be found at http://msdn.microsoft.com/en-us/library/ms @abstr_number (v=vs. @abstr_number ).aspx. If you need to do it by hand here is an example from a Windows @abstr_number bit install of VS @abstr_number :
    
    
    export PATH="$PATH:/c/Program Files (x @abstr_number )/Microsoft Visual Studio  @abstr_number . @abstr_number /VC/bin:/c/Program Files (x @abstr_number )/Microsoft Visual Studio  @abstr_number . @abstr_number /Common @abstr_number /IDE"
    

You will also need to set your INCLUDE and LIB paths to point to your VS and SDK installs. Something like this, again from Win @abstr_number with VS @abstr_number (note the use of Windows-style paths here).
    
    
    export INCLUDE="C:\Program Files (x @abstr_number )\Microsoft Visual Studio  @abstr_number . @abstr_number \VC\include;C:\Program Files (x @abstr_number )\Windows Kits\ @abstr_number . @abstr_number \Include\um;C:\Program Files (x @abstr_number )\Windows Kits\ @abstr_number . @abstr_number \Include\shared"
    export LIB="C:\Program Files (x @abstr_number )\Windows Kits\ @abstr_number . @abstr_number \Lib\Win @abstr_number \um\x @abstr_number ;C:\Program Files (x @abstr_number )\Microsoft Visual Studio  @abstr_number . @abstr_number \VC\lib"
    

Then add `OS=msvc` to the make line of the 'For All Platforms' instructions.

## For Windows Phone Builds

Follow the instructions above for normal Windows builds, but use `OS=msvc-wp` instead of `OS=msvc`. You will also need gas-preprocessor (as mentioned below "Building the Library").

If building for Windows Phone with MSVC @abstr_number , there's no included bat file that sets the lib paths to the Windows Phone kit, but that can be done with a command like this:
    
    
    export LIB="c:\Program Files (x @abstr_number )\Microsoft Visual Studio  @abstr_number . @abstr_number \VC\lib\store\arm;c:\Program Files (x @abstr_number )\Microsoft Visual Studio  @abstr_number . @abstr_number \VC\lib\arm;c:\Program Files (x @abstr_number )\Windows Phone Kits\ @abstr_number . @abstr_number \lib\arm"
    

This is only necessary for building the DLL; the static library can be built without setting this.

Note, only Windows Phone @abstr_number . @abstr_number or newer is supported, @abstr_number . @abstr_number is no longer supported.

## For All Platforms

## Using make

From the main project directory: \- `make` for automatically detecting architecture and building accordingly \- `make ARCH=i @abstr_number` for x @abstr_number @abstr_number -bit builds \- `make ARCH=x @abstr_number _ @abstr_number` for x @abstr_number @abstr_number -bit builds \- `make V=No` for a silent build (not showing the actual compiler commands) \- `make DEBUGSYMBOLS=True` for two libraries, one is normal libraries, another one is removed the debugging symbol table entries (those created by the -g option)

The command line programs `h @abstr_number enc` and `h @abstr_number dec` will appear in the main project directory.

A shell script to run the command-line apps is in `testbin/CmdLineExample.sh`

Usage information can be found in `testbin/CmdLineReadMe`

## Using meson

Meson build definitions have been added, and are known to work on Linux and Windows, for x @abstr_number and x @abstr_number @abstr_number -bit.

See @abstr_hyperlink for instructions on how to install meson, then:

@abstr_code_section 

Run the tests with:

@abstr_code_section 

Install with:

@abstr_code_section 

## Using the Source

  * `codec` \- encoder, decoder, console (test app), build (makefile, vcproj)
  * `build` \- scripts for Makefile build system
  * `test` \- GTest unittest files
  * `testbin` \- autobuild scripts, test app config files
  * `res` \- yuv and bitstream test files



## Known Issues

See the issue tracker on https://github.com/cisco/openh @abstr_number /issues \- Encoder errors when resolution exceeds @abstr_number x @abstr_number \- Encoder errors when compressed frame size exceeds half uncompressed size \- Decoder errors when compressed frame size exceeds @abstr_number MB \- Encoder RC requires frame skipping to be enabled to hit the target bitrate, if frame skipping is disabled the target bitrate may be exceeded

## License

BSD, see `LICENSE` file for details.
