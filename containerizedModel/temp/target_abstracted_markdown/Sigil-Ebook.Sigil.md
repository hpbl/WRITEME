# Sigil

Sigil is a free, open source, multi-platform ebook editor that uses Qt (and QtWebEngine). It is designed to edit books in ePub format (both ePub @abstr_number and ePub @abstr_number ).

# Links

  * Its website is located at http://sigil-ebook.com

  * Its current code repository is located at https://github.com/Sigil-Ebook/Sigil

  * Translations are located at https://www.transifex.com/projects/p/sigil/

  * Support forums are located at http://www.mobileread.com/forums Select Sigil from the list of main forums

  * Sigil Plugin Index (hosted by www.mobileread.com) at http://www.mobileread.com/forums/showthread.php?t= @abstr_number 




# Issue Tracker

Please do not use the issue tracker to ask questions. Both of the main developers of Sigil monitor the Sigil Forum at https://www.mobileread.com/forums. All questions should be directed there.

Issue tracking is intended for discussion around issues with the code. It is also intended for actual bug tracking and for tracking feature requests.

Feature requests opened on the issue tracker will be closed if there isn't anyone willing to implement the requested feature. Only items being worked will be left open.

# Linux Build and Install

For newer Linux systems like Ubuntu @abstr_number . @abstr_number (and its derivitives: like Mint @abstr_number ), or Arch Linux, or Debian Unstable, you should be able to compile Sigil using repo-provided dependencies. Instructions for doing so can be found in:

> docs/Building_on_Linux.md (or .html)

For older Linux systems whose software repositories do not provide Qt @abstr_number . @abstr_number . @abstr_number (or higher), the detailed instructions for building/installing Sigil can be found in:

> docs/Building_on_older_Linux.md (or .html)

# For Building on Mac OS X

Building using purely XCode is no longer supported on Mac OS X. The easiest way to build Sigil on Mac OS X is to use cmake @abstr_number . @abstr_number and the command line. 

Also because Sigil now embeds Python @abstr_number . @abstr_number . @abstr_number , see 

> docs/Building_A_Relocatable_Python_ @abstr_number . @abstr_number _Framework_on_MacOSX.txt

for detailed instructions on how to build a fully relocatable Python @abstr_number . @abstr_number .X framework before building Sigil. 

Sigil uses Qt- @abstr_number . @abstr_number . @abstr_number currently and will move to Qt- @abstr_number . @abstr_number . @abstr_number for the next release, see 

> docs/Building_Qt @abstr_number _From_Source_on_MacOSX.txt

And finally to build Sigil itself see:

> docs/Building_Sigil_On_MacOSX.txt

# For Building on Windows

To build Sigil on Windows, see:

> docs/Building_Sigil_on_Windows.md (or .html)

# License

Sigil is licensed under the GPLv @abstr_number . The complete license is located in COPYING.txt.

Note that libraries and components Sigil used and bundles may use a different license (that is compatible with the GPLv @abstr_number ) from Sigil. See the specific component for their respective license. The source code from these projects can be found under Sigil/ @abstr_number rdparty unless otherwise indicated.   
Please see their respective folders for complete license information.

Currently these projects include:

  * Hunspell - http://hunspell.sourceforge.net
  * MiniZip version @abstr_number . @abstr_number 
  * Perl-compatible Regular Expression Library (pcre)
  * ZLib Data Compression Library (zlib @abstr_number . @abstr_number . @abstr_number )
  * jQuery- @abstr_number . @abstr_number . @abstr_number (src/Resource_Files/javascript/jquery- @abstr_number . @abstr_number . @abstr_number .min.js)
  * jQuery.ScrollTo- @abstr_number . @abstr_number . @abstr_number (src/Resource_Files/javascript/jquery.scrollTo- @abstr_number . @abstr_number . @abstr_number .min.js)
  * MathJax.js Version @abstr_number . @abstr_number : (src/Resource_Files/polyfills)



In addtion, Sigil uses the following other packages that have been specifically modified for use inside Sigil:

  * Beautiful Soup @abstr_number (src/Resource_Files/plugin_launchers/sigil_bs @abstr_number )
  * Google's Gumbo Parser (internal/gumbo)


