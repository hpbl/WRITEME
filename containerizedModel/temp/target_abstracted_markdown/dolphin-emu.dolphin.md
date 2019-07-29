# Dolphin - A GameCube and Wii Emulator

@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

Dolphin is an emulator for running GameCube and Wii games on Windows, Linux, macOS, and recent Android devices. It's licensed under the terms of the GNU General Public License, version @abstr_number or later (GPLv @abstr_number +).

Please read the @abstr_hyperlink before using Dolphin.

## System Requirements

### Desktop

  * OS 
    * Windows ( @abstr_number SP @abstr_number or higher is officially supported, but Vista SP @abstr_number might also work).
    * Linux.
    * macOS ( @abstr_number . @abstr_number Yosemite or higher).
    * Unix-like systems other than Linux are not officially supported but might work.
  * Processor 
    * A CPU with SSE @abstr_number support.
    * A modern CPU ( @abstr_number GHz and Dual Core, not older than @abstr_number ) is highly recommended.
  * Graphics 
    * A reasonably modern graphics card (Direct @abstr_number D @abstr_number . @abstr_number / OpenGL @abstr_number . @abstr_number ).
    * A graphics card that supports Direct @abstr_number D @abstr_number . @abstr_number / OpenGL @abstr_number . @abstr_number is recommended.



### Android

  * OS 
    * Android ( @abstr_number . @abstr_number Lollipop or higher).
  * Processor 
    * A processor with support for @abstr_number -bit applications (either ARMv @abstr_number or x @abstr_number - @abstr_number ).
  * Graphics 
    * A graphics processor that supports OpenGL ES @abstr_number . @abstr_number or higher. Performance varies heavily with @abstr_hyperlink .
    * A graphics processor that supports standard desktop OpenGL features is recommended for best performance.



Dolphin can only be installed on devices that satisfy the above requirements. Attempting to install on an unsupported device will fail and display an error message.

## Building for Windows

Use the solution file `Source/dolphin-emu.sln` to build Dolphin on Windows. Visual Studio @abstr_number @abstr_number . @abstr_number is a hard requirement. Other compilers might be able to build Dolphin on Windows but have not been tested and are not recommended to be used. Git and Windows @abstr_number SDK @abstr_number . @abstr_number . @abstr_number . @abstr_number must be installed when building.

Make sure to check out the Qt submodule before building: @abstr_code_section 

The "Release" solution configuration includes performance optimizations for the best user experience but complicates debugging Dolphin. The "Debug" solution configuration is significantly slower, more verbose and less permissive but makes debugging Dolphin easier.

An installer can be created by using the `Installer.nsi` script in the Installer directory. This will require the Nullsoft Scriptable Install System (NSIS) to be installed. Creating an installer is not necessary to run Dolphin since the Binary directory contains a working Dolphin distribution.

## Building for Linux and macOS

Dolphin requires @abstr_hyperlink for systems other than Windows. Many libraries are bundled with Dolphin and used if they're not installed on your system. CMake will inform you if a bundled library is used or if you need to install any missing packages yourself.

### macOS Build Steps:

@abstr_number . `mkdir build` @abstr_number . `cd build` @abstr_number . `cmake ..` @abstr_number . `make`

An application bundle will be created in `./Binaries`.

### Linux Global Build Steps:

To install to your system.

@abstr_number . `mkdir build` @abstr_number . `cd build` @abstr_number . `cmake ..` @abstr_number . `make` @abstr_number . `sudo make install`

### Linux Local Build Steps:

Useful for development as root access is not required.

@abstr_number . `mkdir Build` @abstr_number . `cd Build` @abstr_number . `cmake .. -DLINUX_LOCAL_DEV=true` @abstr_number . `make` @abstr_number . `ln -s ../../Data/Sys Binaries/`

### Linux Portable Build Steps:

Can be stored on external storage and used on different Linux systems. Or useful for having multiple distinct Dolphin setups for testing/development/TAS.

@abstr_number . `mkdir Build` @abstr_number . `cd Build` @abstr_number . `cmake .. -DLINUX_LOCAL_DEV=true` @abstr_number . `make` @abstr_number . `cp -r ../Data/Sys/ Binaries/` @abstr_number . `touch Binaries/portable.txt`

## Building for Android

These instructions assume familiarity with Android development. If you do not have an Android dev environment set up, see AndroidSetup.md.

If using Android Studio, import the Gradle project located in `./Source/Android`.

Android apps are compiled using a build system called Gradle. Dolphin's native component, however, is compiled using CMake. The Gradle script will attempt to run a CMake build automatically while building the Java code.

## Uninstalling

When Dolphin has been installed with the NSIS installer, you can uninstall Dolphin like any other Windows application.

Linux users can run `cat install_manifest.txt | xargs -d '\n' rm` as root from the build directory to uninstall Dolphin from their system.

macOS users can simply delete Dolphin.app to uninstall it.

Additionally, you'll want to remove the global user directory (see below to see where it's stored) if you don't plan to reinstall Dolphin.

## Command Line Usage

`Usage: Dolphin [-h] [-d] [-l] [-e <str>] [-b] [-V <str>] [-A <str>]`

  * -h, --help Show this help message
  * -d, --debugger Show the debugger pane and additional View menu options
  * -l, --logger Open the logger
  * -e, --exec= Load the specified file (DOL,ELF,WAD,GCM,ISO)
  * -b, --batch Exit Dolphin with emulator
  * -V, --video_backend= Specify a video backend
  * -A, --audio_emulation= Low level (LLE) or high level (HLE) audio



Available DSP emulation engines are HLE (High Level Emulation) and LLE (Low Level Emulation). HLE is fast but often less accurate while LLE is slow but close to perfect. Note that LLE has two submodes (Interpreter and Recompiler), which cannot be selected from the command line.

Available video backends are "D @abstr_number D" (only available on Windows) and "OGL". There's also "Software Renderer", which uses the CPU for rendering and is intended for debugging purposes only.

## Sys Files

  * `wiitdb.txt`: Wii title database from @abstr_hyperlink 
  * `totaldb.dsy`: Database of symbols (for devs only)
  * `GC/font_western.bin`: font dumps
  * `GC/font_japanese.bin`: font dumps
  * `GC/dsp_coef.bin`: DSP dumps
  * `GC/dsp_rom.bin`: DSP dumps
  * `Wii/clientca.pem`: Wii network certificate
  * `Wii/clientcacakey.pem`: Wii network certificate
  * `Wii/rootca.pem`: Wii network certificate



The DSP dumps included with Dolphin have been written from scratch and do not contain any copyrighted material. They should work for most purposes, however some games implement copy protection by checksumming the dumps. You will need to dump the DSP files from a console and replace the default dumps if you want to fix those issues.

Wii network certificates must be extracted from a Wii IOS. A guide for that can be found @abstr_hyperlink .

## Folder Structure

These folders are installed read-only and should not be changed:

  * `GameSettings`: per-game default settings database
  * `GC`: DSP and font dumps
  * `Maps`: symbol tables (dev only)
  * `Shaders`: post-processing shaders
  * `Themes`: icon themes for GUI
  * `Resources`: icons that are theme-agnostic
  * `Wii`: default Wii NAND contents



## Packaging and udev

The Data folder contains a udev rule file for the official GameCube controller adapter and the Mayflash DolphinBar. Package maintainers can use that file in their packages for Dolphin. Users compiling Dolphin on Linux can also just copy the file to their udev rules folder.

## User Folder Structure

A number of user writeable directories are created for caching purposes or for allowing the user to edit their contents. On macOS and Linux these folders are stored in `~/Library/Application Support/Dolphin/` and `~/.dolphin-emu` respectively, but can be overwritten by setting the environment variable `DOLPHIN_EMU_USERPATH`. On Windows the user directory is stored in the `My Documents` folder by default, but there are various way to override this behavior:

  * Creating a file called `portable.txt` next to the Dolphin executable will store the user directory in a local directory called "User" next to the Dolphin executable.
  * If the registry string value `LocalUserConfig` exists in `HKEY_CURRENT_USER/Software/Dolphin Emulator` and has the value _* @abstr_number *_ , Dolphin will always start in portable mode.
  * If the registry string value `UserConfigPath` exists in `HKEY_CURRENT_USER/Software/Dolphin Emulator`, the user folders will be stored in the directory given by that string. The other two methods will be prioritized over this setting.



List of user folders:

  * `Cache`: used to cache the ISO list
  * `Config`: configuration files
  * `Dump`: anything dumped from Dolphin
  * `GameConfig`: additional settings to be applied per-game
  * `GC`: memory cards and system BIOS
  * `Load`: custom textures
  * `Logs`: logs, if enabled
  * `ScreenShots`: screenshots taken via Dolphin
  * `StateSaves`: save states
  * `Wii`: Wii NAND contents



## Custom Textures

Custom textures have to be placed in the user directory under `Load/Textures/[GameID]/`. You can find the Game ID by right-clicking a game in the ISO list and selecting "ISO Properties".
