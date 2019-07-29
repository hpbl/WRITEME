# ﻿PPSSPP - a fast and portable PSP emulator

Created by Henrik Rydgård

Additional code by many contributors, see the Credits screen

Originally released under the GPL @abstr_number . @abstr_number (and later) in November @abstr_number 

Official website: https://www.ppsspp.org/

Discord: https://discord.gg/ @abstr_number NJB @abstr_number dD

No BIOS file required to play, PPSSPP is an "HLE" emulator. Default settings balance good compatibility and speed.

To contribute, see @abstr_hyperlink . Help testing, investigating, or fixing is always welcome. See @abstr_hyperlink .

For the latest source code, see @abstr_hyperlink .

For build instructions and other development tutorials, see @abstr_hyperlink .

For game compatibility, see @abstr_hyperlink .

## What's new in @abstr_number . @abstr_number . @abstr_number 

  * Avoid crash when starting PPSSPP due to bad AMD Vulkan drivers (# @abstr_number )
  * PowerVR Vulkan display corruption fixed (# @abstr_number , # @abstr_number )
  * Naruto Shippuden @abstr_number hang fixed (# @abstr_number )
  * Fixes to various lighting bugs (# @abstr_number , # @abstr_number , # @abstr_number )
  * Fix control issue in Sonic Rivals and Rock Band (# @abstr_number , # @abstr_number , # @abstr_number )
  * Significant performance improvement in Earth Defense Force @abstr_number (# @abstr_number )
  * Fix "real clock sync" setting (helps with latency for music games - # @abstr_number )
  * More speed in FF @abstr_number effects and other generated curves (# @abstr_number )
  * Support for resizing Vulkan on Linux (# @abstr_number )
  * Improved support for GLES on Linux/IoT (# @abstr_number , # @abstr_number , # @abstr_number , # @abstr_number , # @abstr_number , # @abstr_number , # @abstr_number )
  * Percentage based frameskipping (# @abstr_number )
  * DXT accuracy improved, fixing thick white line in Gran Turismo sky (# @abstr_number )
  * Fix Motorstorm freeze on non-Windows (# @abstr_number )
  * Faster block transfer in some games like Digimon Adventures (# @abstr_number , # @abstr_number , # @abstr_number )
  * Blending optimizations and improvements (# @abstr_number , # @abstr_number )
  * Improve D @abstr_number D @abstr_number rendering issues (# @abstr_number )
  * Change default graphics backend to D @abstr_number D @abstr_number or OpenGL (# @abstr_number , # @abstr_number )
  * Remove some outdated settings (# @abstr_number , # @abstr_number , # @abstr_number )
  * Fix remote disc streaming with ipv @abstr_number (# @abstr_number , # @abstr_number )
  * Vulkan: Workarounds for some driver bugs for @abstr_number xx series Qualcomm GPUs (# @abstr_number , # @abstr_number )
  * Fix some Qt port issues with recent performance improvements (# @abstr_number , # @abstr_number , # @abstr_number )
  * UWP Xbox One: fix X/Back button confusion (# @abstr_number )
  * Fix Formula @abstr_number @abstr_number timing issue (# @abstr_number )
  * Fixes and workarounds for some vertex range culling bugs that broke a few games (# @abstr_number , # @abstr_number ), and disable it on older GPUs (# @abstr_number , # @abstr_number , # @abstr_number )
  * Android: Allow putting PSP storage on custom paths like SD cards (# @abstr_number )
  * Corrected vocp instruction, fixing models in Artdink games (# @abstr_number , # @abstr_number )
  * Bundle SDL in binary for macOS builds (# @abstr_number )
  * Prevent keeping games open on Windows (# @abstr_number )



## What's new in @abstr_number . @abstr_number . @abstr_number / @abstr_number . @abstr_number . @abstr_number / @abstr_number . @abstr_number . @abstr_number 

  * Fixes for a couple of common crashes
  * Reverted immersive mode change temporarily to see if it helps misaligned buttons
  * Change default adhoc server address



## What's new in @abstr_number . @abstr_number . @abstr_number 

  * Update text of "Buy PPSSPP Gold" button



## What's new in @abstr_number . @abstr_number . @abstr_number 

  * Minor crashfixes, lang updates
  * Save bug fixed (# @abstr_number )



## What's new in @abstr_number . @abstr_number . @abstr_number 

  * Fix for insta-crash on Galaxy Note @abstr_number , some Xiaomi devices, and the new nVidia Shield (# @abstr_number )
  * Vertex range culling on most platforms, fixes DTM: Race Driver and similar (# @abstr_number )
  * Major speed boost in some Gundam and Earth Defense Force games (# @abstr_number )
  * Fix for issues with post processing shaders in GL @abstr_number + (# @abstr_number )
  * Fixes to sound output switching on Windows (WASAPI) (# @abstr_number )
  * Detects DirectInput devices when running (# @abstr_number )
  * Simple Discord integration (# @abstr_number )
  * New debugging APIs (# @abstr_number )
  * Task switching made a lot more robust (fixes GPD XD problems) (# @abstr_number )
  * Texture decoding optimizations (# @abstr_number )
  * Tons and tons of miscellaneous bugfixes and compatibility fixes



## What's new in @abstr_number . @abstr_number . @abstr_number 

  * Crashfixes, task switching and one in Phantasy Star Portable
  * Improve graphics in PoP on some devices



## What's new in @abstr_number . @abstr_number . @abstr_number , @abstr_number . @abstr_number . @abstr_number 

  * Crashfixes
  * Fix broken graphics in flOw.



## What's new in @abstr_number . @abstr_number . @abstr_number 

  * OpenGL backend now properly multithreaded, giving a good speed boost.
  * Various Vulkan performance improvements (like # @abstr_number ) and memory allocation fixes.
  * GPU command interpreter performance improvements (# @abstr_number )
  * Various fixes for app switching and widgets (# @abstr_number ) on Android
  * Bugfixes and some performance improvements in the ARM @abstr_number JIT compiler and IR interpreter
  * Shader cache enabled for Vulkan
  * Multiple iOS fixes, including JIT (# @abstr_number ) and file browser (# @abstr_number ).
  * Improved compatibility on Mac (# @abstr_number )
  * Texture replacement ID bugfix (note: some textures from @abstr_number . @abstr_number . @abstr_number may become incompatible)
  * Adhoc multiplayer fixes (# @abstr_number )
  * Vulkan support on Linux/SDL (# @abstr_number )
  * Retroarch support



## What's new in @abstr_number . @abstr_number . @abstr_number 

  * Bugfixes and crashfixes!



## What's new in @abstr_number . @abstr_number . @abstr_number 

  * Full Vulkan support, also for Android now. Very fast on supported devices. (# @abstr_number , # @abstr_number )
  * Smarter graphics state management, reduced CPU consumption on all backends (# @abstr_number )
  * Android: Support for Arabic and other scripts we couldn't support before
  * Fix Android widgets, screen scaling (# @abstr_number )
  * Fixes to video dumping
  * Geometry problems fixed in Medal of Honor
  * Implement immediate draws, fixing Thrillville (# @abstr_number )
  * Software rendering improvements, speed and accuracy
  * Hardware tesselation of PSP Beziers and Splines (used by a few games)
  * Partial sceUsbGps and sceUsbCam support (Android)
  * Android "Sustained performance mode" to avoid thermal throttling (# @abstr_number )
  * Linux controller mapping fixes (# @abstr_number )
  * Assorted bugfixes and compatibility improvements



Looking for older news?

## Adhoc support

Not fully functional, but some games work. Check the @abstr_hyperlink for help.

Credit goes to: \- Igor Calabria \- @abstr_hyperlink \- Kyhel
