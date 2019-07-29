Tiled Map Editor - http://www.mapeditor.org/

## About Tiled

Tiled is a general purpose tile map editor for all tile-based games, such as RPGs, platformers or Breakout clones.

Tiled is highly flexible. It can be used to create maps of any size, with no restrictions on tile size, or the number of layers or tiles that can be used. Maps, layers, tiles, and objects can all be assigned arbitrary properties. Tiled's map format (TMX) is easy to understand and allows multiple tilesets to be used in any map. Tilesets can be modified at any time.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## About the Qt Version

Tiled was originally written in Java. In @abstr_number , work began to develop a faster, better looking, and easier-to-use version of Tiled based on the Qt framework. This decision was made as the Qt framework has a greater feature set than is offered by the standard Java libraries.

## Compiling

Before you can compile Tiled, you must ensure the Qt (>= @abstr_number . @abstr_number ) development libraries have been installed:

  * On Ubuntu/Debian: `sudo apt install qt @abstr_number -default qttools @abstr_number -dev-tools zlib @abstr_number g-dev qtdeclarative @abstr_number -dev`
  * On Fedora: `sudo dnf builddep tiled`
  * On Arch Linux: `sudo pacman -S qt`
  * On macOS with @abstr_hyperlink : 
    * `brew install qt @abstr_number`
    * `brew link qt @abstr_number --force`



Alternatively, you can @abstr_hyperlink . You will still need to install a development environment alongside and some libraries depending on your system, for example:

  * On Ubuntu/Debian: `sudo apt install build-essential zlib @abstr_number g-dev libgl @abstr_number -mesa-dev`
  * On Windows: Choose "MinGW" Qt version, or install Visual Studio
  * On macOS: Install Xcode



Next, compile by running:
    
    
    $ qmake (or qmake-qt @abstr_number  on some systems)
    $ make
    

To perform a shadow build, run qmake from a different directory and refer it to tiled.pro. For example:
    
    
    $ mkdir build
    $ cd build
    $ qmake ../tiled.pro
    $ make
    

You can now run Tiled using the executable in `bin/tiled`.

## Installing

To install Tiled, run `make install` from the terminal. By default, Tiled will install itself to `/usr/local`.

The installation prefix can be changed when running qmake, or by changing the install root when running `make install`. For example, to use an installation prefix of `/usr` instead of `/usr/local`:
    
    
    $ qmake -r PREFIX=/usr
    

Note: The -r recursive flag is required if you've run qmake before, as this command will affect nested pro files.

To install Tiled to a packaging directory:
    
    
    $ make install INSTALL_ROOT=/tmp/tiled-pkg
    

By default, Tiled and its plugins are compiled with an Rpath that allows them to find the shared _libtiled_ library immediately after being compiled. When packaging a Tiled map for distribution, the Rpath should be disabled by appending `RPATH=no` to the qmake command.
