# **MAME**

@abstr_hyperlink 

Build status for tiny build only, containing just core parts of project:

| OS/Compiler | Status | | ------------- |:-------------:| |Linux GCC / OSX Clang| @abstr_hyperlink | |Windows MinGW | @abstr_hyperlink | |Windows MSVC | @abstr_hyperlink |

Static analysis status for entire build (except for third-party parts of project):

@abstr_hyperlink 

# What is MAME?

MAME is a multi-purpose emulation framework.

MAME's purpose is to preserve decades of software history. As electronic technology continues to rush forward, MAME prevents this important "vintage" software from being lost and forgotten. This is achieved by documenting the hardware and how it functions. The source code to MAME serves as this documentation. The fact that the software is usable serves primarily to validate the accuracy of the documentation (how else can you prove that you have recreated the hardware faithfully?). Over time, MAME (originally stood for Multiple Arcade Machine Emulator) absorbed the sister-project MESS (Multi Emulator Super System), so MAME now documents a wide variety of (mostly vintage) computers, video game consoles and calculators, in addition to the arcade video games that were its initial focus.

# How to compile?

If you're on a *NIX or OSX system, it could be as easy as typing

@abstr_code_section 

for a MAME build,

@abstr_code_section 

for an arcade-only build, or

@abstr_code_section 

for MESS build.

See the @abstr_hyperlink page on our documentation site for more information, including prerequisites for Mac OS X and popular Linux distributions.

For recent versions of OSX you need to install @abstr_hyperlink including command-line tools and @abstr_hyperlink .

For Windows users, we provide a ready-made @abstr_hyperlink based on MinGW-w @abstr_number .

Visual Studio builds are also possible, but you still need @abstr_hyperlink based on MinGW-w @abstr_number . In order to generate solution and project files just run:

@abstr_code_section or use this command to build it directly using msbuild

@abstr_code_section 

# Where can I find out more?

  * @abstr_hyperlink (includes binary downloads for MAME and MESS, wiki, forums, and more)
  * @abstr_hyperlink 
  * @abstr_hyperlink (official bug tracker for MAME and MESS)



# Contributing

## Coding standard

MAME source code should be viewed and edited with your editor set to use four spaces per tab. Tabs are used for initial indentation of lines, with one tab used per indentation level. Spaces are used for other alignment within a line.

Some parts of the code follow @abstr_hyperlink ; some parts of the code follow @abstr_hyperlink -- mostly depending on who wrote the original version. **Above all else, be consistent with what you modify, and keep whitespace changes to a minimum when modifying existing source.** For new code, the majority tends to prefer Allman style, so if you don't care much, use that.

All contributors need to either add a standard header for license info (on new files) or inform us of their wishes regarding which of the following licenses they would like their code to be made available under: the @abstr_hyperlink license, the @abstr_hyperlink , or the @abstr_hyperlink .

# License

The MAME project as a whole is distributed under the terms of the @abstr_hyperlink or later (GPL- @abstr_number . @abstr_number +), since it contains code made available under multiple GPL-compatible licenses. A great majority of files (over @abstr_number % including core files) are under the @abstr_hyperlink and we would encourage new contributors to distribute files under this license.

Please note that MAME is a registered trademark of Gregory Ember, and permission is required to use the "MAME" name, logo, or wordmark.

@abstr_hyperlink 
    
    
    Copyright (C)  @abstr_number - @abstr_number   MAMEDev and contributors
    
    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version  @abstr_number  of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
     @abstr_number  Franklin Street, Fifth Floor, Boston, MA  @abstr_number - @abstr_number  USA.
    

Please see LICENSE.md for further details.
