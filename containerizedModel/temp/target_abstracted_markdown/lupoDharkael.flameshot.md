@abstr_hyperlink   
Flameshot  Powerful yet simple to use screenshot software.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Preview

@abstr_image 

## Index

  * Features
  * Usage 
    * CLI configuration
  * Keyboard Shortcuts 
    * Local
    * Global
    * On KDE Plasma desktop
  * Considerations
  * Installation
  * Compilation 
    * Dependencies
    * Compile-time
    * Run-time
    * Optional
    * Debian
    * Fedora
    * Arch
    * Build
    * Install
  * Packaging
  * License
  * Contribute
  * Donations
  * Acknowledgment



## Features

  * Customizable appearance.
  * Easy to use.
  * In-app screenshot edition.
  * DBus interface.
  * Upload to Imgur.



## Usage

Example commands:

  * Capture with GUI:

@abstr_code_section 

  * Capture with GUI with custom save path:

@abstr_code_section 

  * Open GUI with a delay of @abstr_number seconds:

@abstr_code_section 

  * Fullscreen capture with custom save path (no GUI) and delayed:

@abstr_code_section 

  * Fullscreen capture with custom save path copying to clipboard:

@abstr_code_section 

  * Capture the screen containing the mouse and print the image (bytes) in PNG format:

@abstr_code_section 

  * Capture the screen number @abstr_number and copy it to the clipboard:

@abstr_code_section 




In case of doubt choose the first or the second command as shortcut in your favorite desktop environment.

A systray icon will be in your system's panel while Flameshot is running. Do a right click on the tray icon and you'll see some menu items to open the configuration window and the information window. Check out the information window to see all the available shortcuts in the graphical capture mode.

### CLI configuration

You can use the graphical menu to configure Flameshot, but alternatively you can use your terminal or scripts to do so.

  * Open the configuration menu:

@abstr_code_section 

  * Show the initial help message in the capture mode:

@abstr_code_section 

  * For more information about the available options use the help flag:

@abstr_code_section 




## Keyboard shortcuts

### Local

These shortcuts are available in GUI mode:

| Keys | Description | |--- |--- | | `←`, `↓`, `↑`, `→` | Move selection @abstr_number px | | `Shift` \+ `←`, `↓`, `↑`, `→` | Resize selection @abstr_number px | | `Esc` | Quit capture | | `Ctrl` \+ `C` | Copy to clipboard | | `Ctrl` \+ `S` | Save selection as a file | | `Ctrl` \+ `Z` | Undo the last modification | | `Spacebar` | Toggle visibility of sidebar with options of the selected tool, color picker for the drawing color and history menu | | Right Click | Show the color wheel | | Mouse Wheel | Change the tool's thickness |

`Shift` \+ drag a handler of the selection area: mirror redimension in the opposite handler.

### Global

If you want use Flameshot as a default screenshot utility, chances are you want to launch it using the `Prt Sc` key. Flameshot doesn't yet offer a fully-automated option to do so, but you can configure your system to do so.

#### On KDE Plasma desktop

To make configuration easier, there's a file in the repository that more or less automates this process. This file will assign the following keys to the following actions by default:

| Keys | Description | |--- |--- | | `Prt Sc` | Start the Flameshot screenshot tool and take a screenshot | | `Ctrl` \+ `Prt Sc` | Wait for @abstr_number seconds, then start the Flameshot screenshot tool and take a screenshot | | `Shift` \+ `Prt Sc` | Take a full-screen (all monitors) screenshot and save it | | `Ctrl` \+ `Shift` \+ `Prt Sc` | Take a full-screen (all monitors) screenshot and copy it to the clipboard |

If you don't like the defaults, you can change them manually later.

Steps for using the configuration:

@abstr_number . The configuration file configures shortcuts so that Flameshot automatically saves (without opening the save dialog) screenshots to `~/Pictures/Screenshots` folder. Make sure you have that folder by running the following command:
    
    
     @abstr_code_section 
    
    (If you don't like the default location, you can skip this step and configure your preferred directory later.)
    

@abstr_number . Download the configuration file:
    
    
     @abstr_code_section
    

@abstr_number . Go to _System Settings_ → _Shortcuts_ → _Custom Shortcuts_. @abstr_number . If there's one, you'll need to disable an entry for Spectacle, the default KDE screenshot utility first because its shortcuts might collide with Flameshot's ones; so, just uncheck the _Spectacle_ entry. @abstr_number . Click _Edit_ → _Import..._, navigate to the Desktop folder (or wherever you saved the configuration file) and open the configuration file. @abstr_number . Now the Flameshot entry should appear in the list. Click _Apply_ to apply the changes. @abstr_number . If you want to change the defaults, you can expand the entry, select the appropriate action and modify it as you wish; the process is pretty mush self-explanatory.

## Considerations

  * Experimental Gnome Wayland and Plasma Wayland support.

  * If you are using Gnome you need to install the @abstr_hyperlink extension in order to see the systemtray icon.

  * In order to speed up the first launch of Flameshot (DBus init of the app can be slow), consider starting the application automatically on boot.

  * Press `Enter` or `Ctrl` \+ `C` when you are in a capture mode and you don't have an active selection and the whole desktop will be copied to your clipboard! Pressing `Ctrl` \+ `S` will save your capture in a file! Check the Shortcuts for more information.

  * Execute the command `flameshot` without parameters to launch a running instance of the program without taking actions.




## Installation

There are packages available for a few distros:

  * @abstr_hyperlink : `pacman -S flameshot`
    * Snapshot also available via AUR: @abstr_hyperlink .
  * @abstr_hyperlink : `apt install flameshot`
    * Package for Debian @abstr_number ("Stretch") also @abstr_hyperlink .
  * @abstr_hyperlink : `apt install flameshot`
  * @abstr_hyperlink 
  * @abstr_hyperlink (`xbps-install flameshot`)
  * @abstr_hyperlink 
  * Fedora: `dnf install flameshot`
  * @abstr_hyperlink 
  * Besides, generic packages available via @abstr_hyperlink 



Expand this section to see what distros are using an up to date version of flameshot @abstr_hyperlink 

## Compilation

To build the application in your system, you'll need to install the dependencies needed for it and Package names might be different for each distribution, see Dependencies below for more information.

### Dependencies

#### Compile-time

  * Qt >= @abstr_number . @abstr_number 
    * Development tools
  * GCC >= @abstr_number . @abstr_number . @abstr_number 



#### Run-time

  * Qt 
    * SVG



#### Optional

  * Git
  * OpenSSL
  * CA Certificates



#### Debian

@abstr_code_section 

#### Fedora

@abstr_code_section 

#### Arch

@abstr_code_section 

### Build

After installing all the dependencies, finally run the following commands in the sources root directory:

@abstr_code_section 

### Install

Simply use `make install` with privileges.

## Packaging

Having `git` installed is required if you're building Flameshot from a snapshot to have precise version information.

In order to generate the instructions in the `Makefile` to install the application in `/usr` instead of in `/usr/local` you can pass the `packaging` option to `qmake` (`qmake CONFIG+=packaging`).

If you want to install in a custom directory you can use the `INSTALL_ROOT` variable.

**Example** :

If you want to install Flameshot in `~/myBuilds/test`, you can execute the following to do so:

@abstr_code_section 

## License

  * The main code is licensed under GPLv @abstr_number 
  * The logo of Flameshot is licensed under Free Art License v @abstr_number . @abstr_number 
  * The button icons are licensed under Apache License @abstr_number . @abstr_number . See: https://github.com/google/material-design-icons
  * The code at capture/capturewidget.cpp is based on https://github.com/ckaiser/Lightscreen/blob/master/dialogs/areadialog.cpp (GPLv @abstr_number )
  * The code at capture/capturewidget.h is based on https://github.com/ckaiser/Lightscreen/blob/master/dialogs/areadialog.h (GPLv @abstr_number )
  * I copied a few lines of code from KSnapshot regiongrabber.cpp revision `@abstr_number` (LGPL)
  * Qt-Color-Widgets taken and modified from https://github.com/mbasaglia/Qt-Color-Widgets (see their license and exceptions in the project) (LGPL/GPL)



Info: If I take code from your project and that implies a relicense to GPLv @abstr_number , you can reuse my changes with the original previous license of your project applied.

## Contribute

If you want to contribute check the CONTRIBUTING.md

## Donations

I improve Flameshot in my free time because I want to create something good for everyone to use. If you want you can donate some bucks with the following options: \- @abstr_hyperlink \- bitcoin: @abstr_number K @abstr_number oiUKWVjP @abstr_number x @abstr_number ZuW @abstr_number C @abstr_number NbDfcFkMx @abstr_number G @abstr_number ue

## Acknowledgment

I really appreciate those who have shown interest in the early development process: \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- ismatori
