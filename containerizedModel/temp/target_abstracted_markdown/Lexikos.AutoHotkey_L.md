# AutoHotkey_L

AutoHotkey is a free, open source macro-creation and automation software utility that allows users to automate repetitive tasks. It is driven by a custom scripting language that is aimed specifically at providing keyboard shortcuts, otherwise known as hotkeys.

AutoHotkey_L started as a fork of AutoHotkey but has been the main branch for some time.

https://autohotkey.com/

## How to Compile

AutoHotkey is developed with @abstr_hyperlink , which is a free download from Microsoft.

  * Get the source code.
  * Open AutoHotkeyx.sln in Visual Studio.
  * Select the appropriate Build and Platform.
  * Build.



The project is configured to build with the Visual C++ @abstr_number toolset if available, primarily to facilitate Windows @abstr_number support but also because it appears to produce smaller @abstr_number -bit binaries than later versions. If the @abstr_number toolset is not available for a given platform, the project should automatically fall back to v @abstr_number ( @abstr_number ), v @abstr_number ( @abstr_number ) or v @abstr_number ( @abstr_number ).

Note that the fallback toolsets do not support targetting Windows XP. For that, install VS @abstr_number or change the platform toolset to v @abstr_number _xp, v @abstr_number _xp or v @abstr_number _xp (if installed).

The project should also build in Visual C++ @abstr_number , @abstr_number or @abstr_number .

## Build Configurations

AutoHotkeyx.vcxproj contains several combinations of build configurations. The main configurations are:

  * **Debug** : AutoHotkey.exe in debug mode.
  * **Release** : AutoHotkey.exe for general use.
  * **Self-contained** : AutoHotkeySC.bin, used for compiled scripts.



Secondary configurations are:

  * **(mbcs)** : ANSI (multi-byte character set). Configurations without this suffix are Unicode.
  * **(minimal)** : Alternative project settings for producing a smaller binary, possibly with lower performance and added dependencies.



## Platforms

AutoHotkeyx.vcxproj includes the following Platforms:

  * _*Win @abstr_number *_ : for Windows @abstr_number -bit.
  * _*x @abstr_number *_ : for Windows x @abstr_number .



Visual C++ @abstr_number officially supports XP SP @abstr_number and later. AutoHotkey supports Windows XP pre-SP @abstr_number and Windows @abstr_number via an asm patch (win @abstr_number kcompat.asm). Older versions are not supported.

## AutoHotkey v @abstr_number Alpha

https://autohotkey.com/v @abstr_number /

@abstr_hyperlink 
