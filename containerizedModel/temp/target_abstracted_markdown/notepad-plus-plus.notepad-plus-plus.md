# What is Notepad++ ?

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Notepad++ is a free (free as in both "free speech" and "free beer") source code editor and Notepad replacement that supports several programming languages and natural languages. Running in the MS Windows environment, its use is governed by GPL License.

## Notepad++ Release Key

_Since the release of version @abstr_number . @abstr_number . @abstr_number Notepad++ is signed using GPG with the following key:_

  * **Signer:** Notepad++
  * **E-mail:** don.h@free.fr
  * **Key ID:** @abstr_number x @abstr_number D @abstr_number F @abstr_number E
  * **Key fingerprint:** @abstr_number BC E @abstr_number @abstr_number B @abstr_number B @abstr_number @abstr_number F @abstr_number C @abstr_number @abstr_number C @abstr_number @abstr_number F @abstr_number D @abstr_number D @abstr_number F @abstr_number E
  * **Key type:** RSA @abstr_number / @abstr_number 
  * **Created:** @abstr_number - @abstr_number - @abstr_number 
  * **Expiries:** @abstr_number - @abstr_number - @abstr_number 



https://github.com/notepad-plus-plus/notepad-plus-plus/blob/master/nppGpgPub.asc

## To build Notepad++ from source:

There are two components that need to be built separately:

  * `notepad++.exe`: (depends on `SciLexer.dll`)
  * `SciLexer.dll` : (with nmake)



You can build Notepad++ with _or_ without Boost - The release build of Notepad++ is built **with** Boost.

Since `Notepad++` version @abstr_number . @abstr_number , the build of `SciLexer.dll` that is distributed uses features from Boost's `Boost.Regex` library.

You can build SciLexer.dll without Boost, ie. with its default POSIX regular expression support instead of boost's PCRE one. This is useful if you would like to debug Notepad++, but don't have boost.

## To build `notepad++.exe`:

@abstr_number . Open @abstr_hyperlink @abstr_number . Build Notepad++ like a normal Visual Studio project.

## To build `SciLexer.dll` with boost:

Here are the instructions to build SciLexer.dll (for both @abstr_number -bit & @abstr_number -bit) for Notepad++:

@abstr_number . Download the @abstr_hyperlink . @abstr_number . Unzip boost. In my case, It's unzipped in `C:\sources\boost_ @abstr_number _ @abstr_number _ @abstr_number` @abstr_number . Build regex of boost. With the version @abstr_number . @abstr_number , launch `bootstrap.bat` under the boost root, `b @abstr_number .exe` will be generated beside of `bootstrap.bat`. For building boost PCRE lib, go into regex build directory by typing `cd C:\sources\boost_ @abstr_number _ @abstr_number _ @abstr_number \libs\regex\build` then launch `C:\sources\boost_ @abstr_number _ @abstr_number _ @abstr_number \b @abstr_number .exe toolset=msvc link=static threading=multi runtime-link=static address-model= @abstr_number release stage`. Note that _*address-model= @abstr_number *_ is optional if you want to build lib in @abstr_number bits. For @abstr_number bits build, just remove _*address-model= @abstr_number *_ frome the command line. @abstr_number . Copy generated message from `C:\sources\boost_ @abstr_number _ @abstr_number _ @abstr_number \bin.v @abstr_number \libs\regex\build\msvc- @abstr_number . @abstr_number \release\address-model- @abstr_number \link-static\runtime-link-static\threading-multi\libboost_regex-vc @abstr_number -mt-s-x @abstr_number - @abstr_number _ @abstr_number .lib` to `C:\tmp\boostregexLib\x @abstr_number \` @abstr_number . Go in `scintilla\win @abstr_number \` then run `nmake BOOSTPATH=your_boost_root_path BOOSTREGEXLIBPATH=your_built_lib_path -f scintilla.mak`. For example `nmake BOOSTPATH=C:\sources\boost_ @abstr_number _ @abstr_number _ @abstr_number \ BOOSTREGEXLIBPATH=C:\tmp\boostregexLib\x @abstr_number \ -f scintilla.mak`

## To build `SciLexer.dll` _without_ boost:

This will work with `notepad++.exe`, however some functionality in Notepad++ will be broken.

To build SciLexer.dll without PCRE support (for both @abstr_number -bit & @abstr_number -bit):

@abstr_number . For @abstr_number -bit, open a command prompt _for building_ ( @abstr_hyperlink ) \- From the IDE, you can do this by right clicking on a file in Solution Explorer, and clicking "Open Command Prompt". This will open up a command prompt with all the proper environment variables. \- From the Windows Start screen/menu, type `Developer Command Prompt for VS @abstr_number`, and click/select the result. \- From an *already open command prompt, run `vcvarsall.bat` (e.g. "C:\Program Files (x @abstr_number )\Microsoft Visual Studio @abstr_number . @abstr_number \VCvcvarsall.bat").
    
    
    For  @abstr_number -bit, open *VS @abstr_number  x @abstr_number  Native tool command prompt*.
    

@abstr_number . Change directory (`cd` or `pushd`) to `scintilla\win @abstr_number \`

@abstr_number . Build `SciLexer.dll` with one of the following commands: \- `nmake -f scintilla.mak` (normal build) \- `nmake DEBUG= @abstr_number -f scintilla.mak` (debugging build)

@abstr_number . Copy `SciLexer.dll` from `scintilla\bin\` to the same directory as `notepad++.exe`. \- For the `Unicode Release` configuration, the output directory (where `notepad++.exe` is) is `PowerEditor\bin\`. \- For the `Unicode Debug` configuration, the output directory (where `notepad++.exe` is) is `PowerEditor\visual.net\Unicode Debug\`.

See the @abstr_hyperlink for more information.

@abstr_hyperlink 
