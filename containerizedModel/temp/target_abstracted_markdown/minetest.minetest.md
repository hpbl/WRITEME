# Minetest

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Minetest is a free open-source voxel game engine with easy modding and game creation.

Copyright (C) @abstr_number - @abstr_number Perttu Ahola  and contributors (see source file comments and the version control log)

## In case you downloaded the source code

If you downloaded the Minetest Engine source code in which this file is contained, you probably want to download the @abstr_hyperlink project too. See its README.txt for more information.

## Table of Contents

@abstr_number . Further Documentation @abstr_number . Default Controls @abstr_number . Paths @abstr_number . Configuration File @abstr_number . Command-line Options @abstr_number . Compiling @abstr_number . Docker @abstr_number . Version Scheme

## Further documentation

  * Website: http://minetest.net/
  * Wiki: http://wiki.minetest.net/
  * Developer wiki: http://dev.minetest.net/
  * Forum: http://forum.minetest.net/
  * GitHub: https://github.com/minetest/minetest/
  * doc/ directory of source distribution



## Default controls

All controls are re-bindable using settings. Some can be changed in the key config dialog in the settings tab.

| Button | Action | |-------------------------------|----------------------------------------------------------------| | Move mouse | Look around | | W, A, S, D | Move | | Space | Jump/move up | | Shift | Sneak/move down | | Q | Drop itemstack | | Shift + Q | Drop single item | | Left mouse button | Dig/punch/take item | | Right mouse button | Place/use | | Shift + right mouse button | Build (without using) | | I | Inventory menu | | Mouse wheel | Select item | | @abstr_number - @abstr_number | Select item | | Z | Zoom (needs zoom privilege) | | T | Chat | | / | Command | | Esc | Pause menu/abort/exit (pauses only singleplayer game) | | R | Enable/disable full range view | | + | Increase view range | | - | Decrease view range | | K | Enable/disable fly mode (needs fly privilege) | | P | Enable/disable pitch move mode | | J | Enable/disable fast mode (needs fast privilege) | | H | Enable/disable noclip mode (needs noclip privilege) | | E | Move fast in fast mode | | F @abstr_number | Hide/show HUD | | F @abstr_number | Hide/show chat | | F @abstr_number | Disable/enable fog | | F @abstr_number | Disable/enable camera update (Mapblocks are not updated anymore when disabled, disabled in release builds) | | F @abstr_number | Cycle through debug information screens | | F @abstr_number | Cycle through profiler info screens | | F @abstr_number | Cycle through camera modes | | F @abstr_number | Cycle through minimap modes | | Shift + F @abstr_number | Change minimap orientation | | F @abstr_number | Show/hide console | | F @abstr_number | Take screenshot |

## Paths

Locations:

  * `bin` \- Compiled binaries
  * `share` \- Distributed read-only data
  * `user` \- User-created modifiable data



Where each location is on each platform:

  * Windows .zip / RUN_IN_PLACE source: 
    * `bin` = `bin`
    * `share` = `.`
    * `user` = `.`
  * Windows installed: 
    * `bin` = `C:\Program Files\Minetest\bin (Depends on the install location)`
    * `share` = `C:\Program Files\Minetest (Depends on the install location)`
    * `user` = `%APPDATA%\Minetest`
  * Linux installed: 
    * `bin` = `/usr/bin`
    * `share` = `/usr/share/minetest`
    * `user` = `~/.minetest`
  * macOS: 
    * `bin` = `Contents/MacOS`
    * `share` = `Contents/Resources`
    * `user` = `Contents/User OR ~/Library/Application Support/minetest`



Worlds can be found as separate folders in: `user/worlds/`

## Configuration file

  * Default location: `user/minetest.conf`
  * This file is created by closing Minetest for the first time.
  * A specific file can be specified on the command line: `--config <path-to-file>`
  * A run-in-place build will look for the configuration file in `location_of_exe/../minetest.conf` and also `location_of_exe/../../minetest.conf`



## Command-line options

  * Use `--help`



## Compiling

### Compiling on GNU/Linux

#### Dependencies

| Dependency | Version | Commentary | |------------|---------|------------| | GCC | @abstr_number . @abstr_number + | Can be replaced with Clang @abstr_number . @abstr_number + | | CMake | @abstr_number . @abstr_number + | | | Irrlicht | @abstr_number . @abstr_number . @abstr_number + | | | SQLite @abstr_number | @abstr_number . @abstr_number + | | | LuaJIT | @abstr_number . @abstr_number + | Bundled Lua @abstr_number . @abstr_number is used if not present | | GMP | @abstr_number . @abstr_number . @abstr_number + | Bundled mini-GMP is used if not present | | JsonCPP | @abstr_number . @abstr_number . @abstr_number + | Bundled JsonCPP is used if not present |

For Debian/Ubuntu users:
    
    
    sudo apt install build-essential libirrlicht-dev cmake libbz @abstr_number -dev libpng-dev libjpeg-dev libxxf @abstr_number vm-dev libgl @abstr_number -mesa-dev libsqlite @abstr_number -dev libogg-dev libvorbis-dev libopenal-dev libcurl @abstr_number -gnutls-dev libfreetype @abstr_number -dev zlib @abstr_number g-dev libgmp-dev libjsoncpp-dev
    

For Fedora users:
    
    
    sudo dnf install make automake gcc gcc-c++ kernel-devel cmake libcurl-devel openal-soft-devel libvorbis-devel libXxf @abstr_number vm-devel libogg-devel freetype-devel mesa-libGL-devel zlib-devel jsoncpp-devel irrlicht-devel bzip @abstr_number -libs gmp-devel sqlite-devel luajit-devel leveldb-devel ncurses-devel doxygen spatialindex-devel bzip @abstr_number -devel
    

#### Download

You can install Git for easily keeping your copy up to date. If you don’t want Git, read below on how to get the source without Git. This is an example for installing Git on Debian/Ubuntu:
    
    
    sudo apt install git
    

For Fedora users:
    
    
    sudo dnf install git
    

Download source (this is the URL to the latest of source repository, which might not work at all times) using Git:
    
    
    git clone --depth  @abstr_number  https://github.com/minetest/minetest.git
    cd minetest
    

Download minetest_game (otherwise only the "Minimal development test" game is available) using Git:
    
    
    git clone --depth  @abstr_number  https://github.com/minetest/minetest_game.git games/minetest_game
    

Download source, without using Git:
    
    
    wget https://github.com/minetest/minetest/archive/master.tar.gz
    tar xf master.tar.gz
    cd minetest-master
    

Download minetest_game, without using Git:
    
    
    cd games/
    wget https://github.com/minetest/minetest_game/archive/master.tar.gz
    tar xf master.tar.gz
    mv minetest_game-master minetest_game
    cd ..
    

#### Build

Build a version that runs directly from the source directory:
    
    
    cmake . -DRUN_IN_PLACE=TRUE
    make -j <number of processors>
    

Run it:
    
    
    ./bin/minetest
    

  * Use `cmake . -LH` to see all CMake options and their current state.
  * If you want to install it system-wide (or are making a distribution package), you will want to use `-DRUN_IN_PLACE=FALSE`.
  * You can build a bare server by specifying `-DBUILD_SERVER=TRUE`.
  * You can disable the client build by specifying `-DBUILD_CLIENT=FALSE`.
  * You can select between Release and Debug build by `-DCMAKE_BUILD_TYPE=<Debug or Release>`. 
    * Debug build is slower, but gives much more useful output in a debugger.
  * If you build a bare server you don't need to have Irrlicht installed. 
    * In that case use `-DIRRLICHT_SOURCE_DIR=/the/irrlicht/source`.



### CMake options

General options and their default values:
    
    
    BUILD_CLIENT=TRUE          - Build Minetest client
    BUILD_SERVER=FALSE         - Build Minetest server
    CMAKE_BUILD_TYPE=Release   - Type of build (Release vs. Debug)
        Release                - Release build
        Debug                  - Debug build
        SemiDebug              - Partially optimized debug build
        RelWithDebInfo         - Release build with debug information
        MinSizeRel             - Release build with -Os passed to compiler to make executable as small as possible
    ENABLE_CURL=ON             - Build with cURL; Enables use of online mod repo, public serverlist and remote media fetching via http
    ENABLE_CURSES=ON           - Build with (n)curses; Enables a server side terminal (command line option: --terminal)
    ENABLE_FREETYPE=ON         - Build with FreeType @abstr_number ; Allows using TTF fonts
    ENABLE_GETTEXT=ON          - Build with Gettext; Allows using translations
    ENABLE_GLES=OFF            - Search for Open GLES headers & libraries and use them
    ENABLE_LEVELDB=ON          - Build with LevelDB; Enables use of LevelDB map backend
    ENABLE_POSTGRESQL=ON       - Build with libpq; Enables use of PostgreSQL map backend (PostgreSQL  @abstr_number . @abstr_number  or greater recommended)
    ENABLE_REDIS=ON            - Build with libhiredis; Enables use of Redis map backend
    ENABLE_SPATIAL=ON          - Build with LibSpatial; Speeds up AreaStores
    ENABLE_SOUND=ON            - Build with OpenAL, libogg & libvorbis; in-game sounds
    ENABLE_LUAJIT=ON           - Build with LuaJIT (much faster than non-JIT Lua)
    ENABLE_SYSTEM_GMP=ON       - Use GMP from system (much faster than bundled mini-gmp)
    ENABLE_SYSTEM_JSONCPP=OFF  - Use JsonCPP from system
    OPENGL_GL_PREFERENCE=LEGACY - Linux client build only; See CMake Policy CMP @abstr_number  for reference
    RUN_IN_PLACE=FALSE         - Create a portable install (worlds, settings etc. in current directory)
    USE_GPROF=FALSE            - Enable profiling using GProf
    VERSION_EXTRA=             - Text to append to version (e.g. VERSION_EXTRA=foobar -> Minetest  @abstr_number . @abstr_number . @abstr_number -foobar)
    

Library specific options:
    
    
    BZIP @abstr_number _INCLUDE_DIR               - Linux only; directory where bzlib.h is located
    BZIP @abstr_number _LIBRARY                   - Linux only; path to libbz @abstr_number .a/libbz @abstr_number .so
    CURL_DLL                        - Only if building with cURL on Windows; path to libcurl.dll
    CURL_INCLUDE_DIR                - Only if building with cURL; directory where curl.h is located
    CURL_LIBRARY                    - Only if building with cURL; path to libcurl.a/libcurl.so/libcurl.lib
    EGL_INCLUDE_DIR                 - Only if building with GLES; directory that contains egl.h
    EGL_LIBRARY                     - Only if building with GLES; path to libEGL.a/libEGL.so
    FREETYPE_INCLUDE_DIR_freetype @abstr_number   - Only if building with FreeType  @abstr_number ; directory that contains an freetype directory with files such as ftimage.h in it
    FREETYPE_INCLUDE_DIR_ft @abstr_number build   - Only if building with FreeType  @abstr_number ; directory that contains ft @abstr_number build.h
    FREETYPE_LIBRARY                - Only if building with FreeType  @abstr_number ; path to libfreetype.a/libfreetype.so/freetype.lib
    FREETYPE_DLL                    - Only if building with FreeType  @abstr_number  on Windows; path to libfreetype.dll
    GETTEXT_DLL                     - Only when building with gettext on Windows; path to libintl @abstr_number .dll
    GETTEXT_ICONV_DLL               - Only when building with gettext on Windows; path to libiconv @abstr_number .dll
    GETTEXT_INCLUDE_DIR             - Only when building with gettext; directory that contains iconv.h
    GETTEXT_LIBRARY                 - Only when building with gettext on Windows; path to libintl.dll.a
    GETTEXT_MSGFMT                  - Only when building with gettext; path to msgfmt/msgfmt.exe
    IRRLICHT_DLL                    - Only on Windows; path to Irrlicht.dll
    IRRLICHT_INCLUDE_DIR            - Directory that contains IrrCompileConfig.h
    IRRLICHT_LIBRARY                - Path to libIrrlicht.a/libIrrlicht.so/libIrrlicht.dll.a/Irrlicht.lib
    LEVELDB_INCLUDE_DIR             - Only when building with LevelDB; directory that contains db.h
    LEVELDB_LIBRARY                 - Only when building with LevelDB; path to libleveldb.a/libleveldb.so/libleveldb.dll.a
    LEVELDB_DLL                     - Only when building with LevelDB on Windows; path to libleveldb.dll
    PostgreSQL_INCLUDE_DIR          - Only when building with PostgreSQL; directory that contains libpq-fe.h
    PostgreSQL_LIBRARY              - Only when building with PostgreSQL; path to libpq.a/libpq.so/libpq.lib
    REDIS_INCLUDE_DIR               - Only when building with Redis; directory that contains hiredis.h
    REDIS_LIBRARY                   - Only when building with Redis; path to libhiredis.a/libhiredis.so
    SPATIAL_INCLUDE_DIR             - Only when building with LibSpatial; directory that contains spatialindex/SpatialIndex.h
    SPATIAL_LIBRARY                 - Only when building with LibSpatial; path to libspatialindex_c.so/spatialindex- @abstr_number .lib
    LUA_INCLUDE_DIR                 - Only if you want to use LuaJIT; directory where luajit.h is located
    LUA_LIBRARY                     - Only if you want to use LuaJIT; path to libluajit.a/libluajit.so
    MINGWM @abstr_number _DLL                    - Only if compiling with MinGW; path to mingwm @abstr_number .dll
    OGG_DLL                         - Only if building with sound on Windows; path to libogg.dll
    OGG_INCLUDE_DIR                 - Only if building with sound; directory that contains an ogg directory which contains ogg.h
    OGG_LIBRARY                     - Only if building with sound; path to libogg.a/libogg.so/libogg.dll.a
    OPENAL_DLL                      - Only if building with sound on Windows; path to OpenAL @abstr_number .dll
    OPENAL_INCLUDE_DIR              - Only if building with sound; directory where al.h is located
    OPENAL_LIBRARY                  - Only if building with sound; path to libopenal.a/libopenal.so/OpenAL @abstr_number .lib
    OPENGLES @abstr_number _INCLUDE_DIR           - Only if building with GLES; directory that contains gl @abstr_number .h
    OPENGLES @abstr_number _LIBRARY               - Only if building with GLES; path to libGLESv @abstr_number .a/libGLESv @abstr_number .so
    SQLITE @abstr_number _INCLUDE_DIR             - Directory that contains sqlite @abstr_number .h
    SQLITE @abstr_number _LIBRARY                 - Path to libsqlite @abstr_number .a/libsqlite @abstr_number .so/sqlite @abstr_number .lib
    VORBISFILE_DLL                  - Only if building with sound on Windows; path to libvorbisfile- @abstr_number .dll
    VORBISFILE_LIBRARY              - Only if building with sound; path to libvorbisfile.a/libvorbisfile.so/libvorbisfile.dll.a
    VORBIS_DLL                      - Only if building with sound on Windows; path to libvorbis- @abstr_number .dll
    VORBIS_INCLUDE_DIR              - Only if building with sound; directory that contains a directory vorbis with vorbisenc.h inside
    VORBIS_LIBRARY                  - Only if building with sound; path to libvorbis.a/libvorbis.so/libvorbis.dll.a
    XXF @abstr_number VM_LIBRARY                 - Only on Linux; path to libXXf @abstr_number vm.a/libXXf @abstr_number vm.so
    ZLIB_DLL                        - Only on Windows; path to zlib @abstr_number .dll
    ZLIB_INCLUDE_DIR                - Directory that contains zlib.h
    ZLIB_LIBRARY                    - Path to libz.a/libz.so/zlib.lib
    

### Compiling on Windows

### Requirements

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



### Compiling and installing the dependencies

It is highly recommended to use vcpkg as package manager.

#### a) Using vcpkg to install dependencies

After you successfully built vcpkg you can easily install the required libraries: @abstr_code_section 

  * `curl` is optional, but required to read the serverlist, `curl[winssl]` is required to use the content store.
  * `openal-soft`, `libvorbis` and `libogg` are optional, but required to use sound.
  * `freetype` is optional, it allows true-type font rendering.
  * `luajit` is optional, it replaces the integrated Lua interpreter with a faster just-in-time interpreter.



There are other optional libraries, but they are not tested if they can build and link correctly.

Use `--triplet` to specify the target triplet, e.g. `x @abstr_number -windows` or `x @abstr_number -windows`.

#### b) Compile the dependencies on your own

This is outdated and not recommended. Follow the instructions on https://dev.minetest.net/Build_Win @abstr_number _Minetest_including_all_required_libraries#VS @abstr_number _Build

### Compile Minetest

#### a) Using the vcpkg toolchain and CMake GUI

@abstr_number . Start up the CMake GUI @abstr_number . Select **Browse Source...** and select DIR/minetest @abstr_number . Select **Browse Build...** and select DIR/minetest-build @abstr_number . Select **Configure** @abstr_number . Choose the right visual Studio version and target platform. It has to match the version of the installed dependencies @abstr_number . Choose **Specify toolchain file for cross-compiling** @abstr_number . Click **Next** @abstr_number . Select the vcpkg toolchain file e.g. `D:/vcpkg/scripts/buildsystems/vcpkg.cmake` @abstr_number . Click Finish @abstr_number . Wait until cmake have generated the cash file @abstr_number . If there are any errors, solve them and hit **Configure** @abstr_number . Click **Generate** @abstr_number . Click **Open Project** @abstr_number . Compile Minetest inside Visual studio.

#### b) Using the vcpkg toolchain and the commandline

Run the following script in PowerShell:

@abstr_code_section Make sure that the right compiler is selected and the path to the vcpkg toolchain is correct.

#### c) Using your own compiled libraries

**This is outdated and not recommended**

Follow the instructions on https://dev.minetest.net/Build_Win @abstr_number _Minetest_including_all_required_libraries#VS @abstr_number _Build

### Windows Installer using WiX Toolset

Requirements: * @abstr_hyperlink * @abstr_hyperlink 

In the Visual Studio @abstr_number Installer select **Optional Features - > WiX Toolset**.

Build the binaries as described above, but make sure you unselect `RUN_IN_PLACE`.

Open the generated project file with Visual Studio. Right-click **Package** and choose **Generate**. It may take some minutes to generate the installer.

## Docker

We provide Minetest server Docker images using the GitLab mirror registry.

Images are built on each commit and available using the following tag scheme:

  * `registry.gitlab.com/minetest/minetest/server:latest` (latest build)
  * `registry.gitlab.com/minetest/minetest/server:<branch/tag>` (current branch or current tag)
  * `registry.gitlab.com/minetest/minetest/server:<commit-id>` (current commit id)



If you want to test it on a Docker server you can easily run:
    
    
    sudo docker run registry.gitlab.com/minetest/minetest/server:<docker tag>
    

If you want to use it in a production environment you should use volumes bound to the Docker host to persist data and modify the configuration:
    
    
    sudo docker create -v /home/minetest/data/:/var/lib/minetest/ -v /home/minetest/conf/:/etc/minetest/ registry.gitlab.com/minetest/minetest/server:master
    

Data will be written to `/home/minetest/data` on the host, and configuration will be read from `/home/minetest/conf/minetest.conf`.

**Note:** If you don't understand the previous commands please read the official Docker documentation before use.

You can also host your Minetest server inside a Kubernetes cluster. See our example implementation in misc/kubernetes.yml.

## Version scheme

We use `major.minor.patch` since @abstr_number . @abstr_number . @abstr_number -dev. Prior to that we used `@abstr_number .major.minor`.

  * Major is incremented when the release contains breaking changes, all other numbers are set to @abstr_number .
  * Minor is incremented when the release contains new non-breaking features, patch is set to @abstr_number .
  * Patch is incremented when the release only contains bugfixes and very minor/trivial features considered necessary.



Since @abstr_number . @abstr_number . @abstr_number -dev and @abstr_number . @abstr_number . @abstr_number -dev, the dev notation refers to the next release, i.e.: @abstr_number . @abstr_number . @abstr_number -dev is the development version leading to @abstr_number . @abstr_number . @abstr_number . Prior to that we used `previous_version-dev`.
