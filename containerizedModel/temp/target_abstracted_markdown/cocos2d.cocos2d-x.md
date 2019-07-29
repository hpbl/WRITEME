@abstr_image 

# cocos @abstr_number d-x

|Win @abstr_number |Others| | ----|------| @abstr_hyperlink | @abstr_hyperlink 

@abstr_hyperlink is a multi-platform framework for building @abstr_number d games, interactive books, demos and other graphical applications. It is based on @abstr_hyperlink , but instead of using Objective-C, it uses C++. It works on iOS, Android, OS X, Windows, Linux and Web platforms.

**Cocos @abstr_number d-x Framework Architecture** :

@abstr_image 

cocos @abstr_number d-x is:

  * Fast
  * Free
  * Easy to use
  * Community supported



## Git user attention

@abstr_number . Clone the repo from GitHub.
    
    
         $ git clone https://github.com/cocos @abstr_number d/cocos @abstr_number d-x.git
    

@abstr_number . After cloning the repo, please execute `download-deps.py` to download and install dependencies.
    
    
         $ cd cocos @abstr_number d-x
         cocos @abstr_number d-x $ python download-deps.py
    

@abstr_number . After running `download-deps.py`.
    
    
         cocos @abstr_number d-x $ git submodule update --init
    

## Download stable versions

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## How to start a new game

@abstr_number . Download the code from @abstr_hyperlink or clone this repo (instructions above) @abstr_number . Run `setup.py` @abstr_number . Run the `cocos` script

Example:
    
    
    $ cd cocos @abstr_number d-x
    $ ./setup.py
    $ source FILE_TO_SAVE_SYSTEM_VARIABLE
    $ cocos new MyGame -p com.your_company.mygame -l cpp -d NEW_PROJECTS_DIR
    $ cd NEW_PROJECTS_DIR/MyGame
    

You can also create a JS project or Lua project with `-l js` or `-l lua`.

### Build and run a new project for Android

Cocos @abstr_number d-x supports Android Studio. Simple open the `proj.android` directory from within the Android Studio environment. More information can be found in our @abstr_hyperlink .

### Build and run a new project for iOS
    
    
    $ cocos run -p ios
    

### Build and run a new project for OSX
    
    
    $ cocos run -p mac
    

### Build and run a new project for Linux

If you never run cocos @abstr_number d-x on Linux, you need to install all dependencies by the script in **cocos @abstr_number d/build/install-deps-linux.sh**
    
    
    $ cd cocos @abstr_number d-x/build
    $ ./install-deps-linux.sh
    

Then
    
    
    $ cd NEW_PROJECTS_DIR/MyGame
    $ cocos run -p linux
    

Run
    
    
    $ bin/MyGame
    

### Build and run new project for win @abstr_number
    
    
    $ cocos run -p win @abstr_number
    

### Build and run new project for web

Only JS project can be published to web platforms, so you will need to create a JS project first:
    
    
    $ cocos new -l js WebGame
    

Then you can run your game in a web browser:
    
    
    $ cocos run -p web
    

Or you can publish your game to `publish/html @abstr_number /` folder:
    
    
    $ cocos run -p web -m release [--advanced]
    

## Using CMake

Cocos @abstr_number d-x supports CMake, a cross-platform build system. Example usage:
    
    
    $ cd cocos @abstr_number d-x
    $ mkdir cmake-build && cd cmake-build
    $ cmake ..
    

  * Detail CMake Guide



## Documentations and samples

  * @abstr_hyperlink 
  * @abstr_hyperlink _Note that Cocos @abstr_number d-x, Cocos @abstr_number d-JS and Cocos Creator have different API set_
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Main features

  * Scene management (workflow)
  * Transitions between scenes
  * Sprites and Sprite Sheets
  * Effects: Lens, Ripple, Waves, Liquid, etc.
  * Actions (behaviours): 
    * Transformation Actions: Move, Rotate, Scale, Fade, Tint, etc.
    * Composable actions: Sequence, Spawn, Repeat, Reverse
    * Ease Actions: Exp, Sin, Cubic, Elastic, etc.
    * Misc actions: CallFunc, OrbitCamera, Follow, Tween
  * Basic menus and buttons
  * Integrated with physics engines: @abstr_hyperlink and @abstr_hyperlink 
  * Particle system
  * Skeleton Animations: @abstr_hyperlink and Armature support
  * Fonts: 
    * Fast font rendering using Fixed and Variable width fonts
    * Support for .ttf fonts
  * Tile Map support: Orthogonal, Isometric and Hexagonal
  * Parallax scrolling
  * Motion Streak
  * Render To Texture
  * Touch/Accelerometer on mobile devices
  * Touch/Mouse/Keyboard on desktop
  * Sound Engine support (CocosDenshion library) based on OpenAL
  * Integrated Slow motion/Fast forward
  * Fast and compressed textures: PVR compressed and uncompressed textures, ETC @abstr_number compressed textures, and more
  * Resolution Independent
  * Language: C++, with Lua and JavaScript bindings
  * Open Source Commercial Friendly(MIT): Compatible with open and closed source projects
  * OpenGL ES @abstr_number . @abstr_number (mobile) / OpenGL @abstr_number . @abstr_number (desktop) based



## Build Requirements

  * Mac OS X @abstr_number . @abstr_number +, Xcode @abstr_number +
  * or Ubuntu @abstr_number . @abstr_number +, CMake @abstr_number . @abstr_number +
  * or Windows @abstr_number +, VS @abstr_number 
  * Python @abstr_number . @abstr_number . @abstr_number +(NOT Python @abstr_number )
  * NDK r @abstr_number + is required to build Android games
  * Android Studio @abstr_number . @abstr_number . @abstr_number + to build Android games(tested with @abstr_number . @abstr_number . @abstr_number )
  * JRE or JDK @abstr_number . @abstr_number + is required for web publishing



## Runtime Requirements

  * iOS @abstr_number . @abstr_number + for iPhone / iPad games
  * Android @abstr_number . @abstr_number . @abstr_number + for Android
  * OS X v @abstr_number . @abstr_number + for Mac games
  * Windows @abstr_number + for Win games
  * Modern browsers and IE @abstr_number + for web games



## Running Tests

Select the test you want from Xcode Scheme chooser.

  * Cocos Console

@abstr_code_section 

  * For OS X / iOS

@abstr_code_section 

  * For Linux

@abstr_code_section 




Run Samples

@abstr_code_section 

> You may meet building errors when building libGLFW.so. It is because libGL.so directs to an error target, you should make it to direct to a correct one. `install-deps-linux.sh` only has to be run once.

  * For Windows



Open the `cocos @abstr_number d-x/build/cocos @abstr_number d-win @abstr_number .sln`

  * For Android

@abstr_code_section 




Then click item on Android device to run tests. Available value of `-p` is the API level, cocos @abstr_number d-x supports from level @abstr_number .

Or you can import the project located at `tests/cpp-empty-test/proj.android` using Android Studio @abstr_number . @abstr_number . @abstr_number +.

## Learning Resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Spreading the word!

You can help us spread the word about cocos @abstr_number d-x! We would surely appreciate it!

  * Talk about us on Facebook! Our @abstr_hyperlink 
  * Tweet, Tweet! Our @abstr_hyperlink 
  * Read our @abstr_hyperlink and promote it on your social media.
  * Become a @abstr_hyperlink 



## See what we are planning!

You can see exactly what we are planning to do with the Cocos family of products.

  * @abstr_hyperlink 



## Where to get help

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink .
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * IRC. We are in @abstr_hyperlink in the _#cocos @abstr_number d_ channel
  * `cpp-tests` project. This project is our basis for testing. Use this project to learn how we implement the functionality of the engine. This project is located in __cocos @abstr_number d-x_root/build.__



## Contributing to the Project

Cocos @abstr_number d-x is licensed under the @abstr_hyperlink . We welcome participation!

Did you find a bug? Do you have feature request? Do you want to merge a feature?

  * @abstr_hyperlink 



## Contact us

  * Forum: @abstr_hyperlink 
  * Twitter: @abstr_hyperlink 
  * Weibo: @abstr_hyperlink 


