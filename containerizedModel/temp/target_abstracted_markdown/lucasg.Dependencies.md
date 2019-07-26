# Dependencies - An open-source modern Dependency Walker

@abstr_hyperlink 

###  @abstr_hyperlink 

NB : due to @abstr_hyperlink , `Dependencies` needs @abstr_hyperlink installed to run properly.

@abstr_image 

## Overview

`Dependencies` is a rewrite of the legacy software @abstr_hyperlink which was shipped along Windows SDKs, but whose development stopped around @abstr_number . `Dependencies` can help Windows developers troubleshooting their dll load dependencies issues.

## Releases

  * @abstr_hyperlink : 
    * Display imports and exports the way Depends.exe does.
    * Added user customization for search folders and working directory
    * Added LLVM demangler to availables symbol demangling
    * Fixed Wow @abstr_number FsRedirection bugs
    * F @abstr_number can now refresh the analysis
    * Added CLR assembly dependencies enumeration
    * Added a packaging option without Peview.exe (which triggers some AV).
  * @abstr_hyperlink : 
    * Add x @abstr_number /x @abstr_number variants for Dependencies
  * @abstr_hyperlink : 
    * Add CLI tool "dependencies.exe"
  * @abstr_hyperlink : 
    * Add appx packaging
  * @abstr_hyperlink : 
    * Support of Sxs parsing
    * Support of api set schema parsing
    * API and Modules list can be filtered
  * @abstr_hyperlink -- Initial release



## Installation and Usage

`Dependencies` is currently shipped as a binary (no installer present). Just click on one of the release numbers above (probably the latest), download and uncompress the archive and run DependenciesGui.exe. Since the binary is not signed, `SmartScreen` might scream at runtime. `Dependencies` also bundle `ClrPhTester.exe`, a dumpbin-like executable used to test for non-regressions.

Since `v @abstr_number . @abstr_number`, Dependencies is also packaged as an appx package (the Windows equivalent of a `.deb` file) which can be installed locally. However, you also need to add the test certificate `DependenciesAppx_TemporaryKey.cer` to your cert hive.

`Dependencies` currently does not recursively resolve child imports when parsing a new PE since it can be really memory-hungry to do so ( it can over a GB even for "simple" PEs ). This behavior can be overridden (app-wide) via a property located in "Options->Properties->Tree build behaviour".

@abstr_image 

Tree build behaviours available :

  * `ChildOnly` (default) : only process PE child imports and nothing beyond.
  * `RecursiveOnlyOnDirectImports` : do not process delayload dlls.
  * `Recursive` : Full recursive analysis. You better have time and RAM on your hands if you activate this setting :



@abstr_image 

## Limitations

At the moment, `Dependencies` recreates features and "features" of `depends.exe`, which means :

  * Only direct, forwarded and delay load dependencies are supported. Dynamic loading via `LoadLibrary` are not supported (and probably won't ever be).
  * Support of api set schema redirection since @abstr_number . @abstr_number 
  * Checks between Api Imports and Exports. 
  * Minimal support of sxs private manifests search only.



## Credits and licensing

Special thanks to :

  * @abstr_hyperlink for : 
    * `phlib`, which does the heavy lifting for processing PE informations.
    * `peview`, a powerful and lightweight PE informations viewer.
  * @abstr_hyperlink a C#/XAML library which implement dockable and dragable UI elements, and can recreate the @abstr_hyperlink in `WPF`.
  * @aionescu, @zodiacon and Quarkslab for their public infos on ApiSets schema.
  * @abstr_hyperlink which pretty much solved all my `WPF` programming issues. His @abstr_hyperlink is used in this project 
  * Venkatesh Mookkan @abstr_hyperlink 
  * @abstr_hyperlink for demangling GCC symbols on Windows


