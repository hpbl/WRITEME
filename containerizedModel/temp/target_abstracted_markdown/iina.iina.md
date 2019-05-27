@abstr_image 

IINA

IINA is the **modern** video player for macOS.

@abstr_hyperlink · @abstr_hyperlink · @abstr_hyperlink 

* * *

## Features

  * Based on @abstr_hyperlink , which provides the best decoding capacity on macOS
  * Designed with modern versions of macOS ( @abstr_number . @abstr_number +) in mind
  * All the features you need for video and music: subtitles, playlists, chapters…and much, much more!
  * Force Touch, picture-in-picture and advanced Touch Bar support
  * Customizable user interface including multiple color schemes and on screen controller (OSC) layout positioning
  * Standalone Music Mode designed for audio files
  * Video thumbnails
  * Online subtitle searching and intelligent local subtitle matching
  * Unlimited playback history
  * Convenient and interactive settings for video/audio filters
  * Fully customizable keyboard, mouse, trackpad, and gesture controls
  * mpv configuration files and script system for advanced users
  * Command line tool and browser extensions provided
  * In active development



## Building

@abstr_number . IINA uses @abstr_hyperlink for managing the installation of third-party libraries. If you don't already have it installed, here's how you can do so:

#### Using RubyGems

@abstr_code_section 

#### Using Homebrew

@abstr_code_section 

@abstr_number . Run `pod install` in project's root directory.

IINA ships with pre-compiled dynamic libraries for convenience reasons. If you aren't planning on modifying these libraries, you can follow the instructions below to build IINA; otherwise, skip down to Building mpv manually:

### Using the pre-compiled libraries

@abstr_number . Open iina.xcworkspace in the @abstr_hyperlink . _IINA may not build if you use any other version._

@abstr_number . Build the project.

### Building mpv manually

@abstr_number . Build your own copy of mpv. If you're using a package manager to manage dependencies, the steps below outline the process.

#### Homebrew

Use our tap as it passes in the correct flags to mpv's configure script:

@abstr_code_section 

#### MacPorts

Pass in these flags when installing:

@abstr_code_section 

@abstr_number . Copy the latest @abstr_hyperlink (*.h) into `deps/include/mpv/`.

@abstr_number . Run `other/parse_doc.rb`. This script will fetch the latest mpv documentation and generate `MPVOption.swift`, `MPVCommand.swift` and `MPVProperty.swift`. This is only needed when updating libmpv. Note that if the API changes, the player source code may also need to be changed.

@abstr_number . Run `other/change_lib_dependencies.rb`. This script will deploy the dependent libraries into `deps/libs`. If you're using a package manager to manage dependencies, invoke it like so:

#### Homebrew

@abstr_code_section 

#### MacPorts

@abstr_code_section 

@abstr_number . Open iina.xcworkspace in the @abstr_hyperlink . _IINA may not build if you use any other version._

@abstr_number . Remove all of references to .dylib files from the Frameworks group in the sidebar and drag all the .dylib files in `deps/libs` to that group.

@abstr_number . Drag all the .dylib files in `deps/libs` into the "Embedded Binaries" section of the iina target.

@abstr_number . Build the project.

## Contributing

IINA is always looking for contributions, whether it's through bug reports, code, or new translations.

  * If you find a bug in IINA, or would like to suggest a new feature or enhancement, it'd be nice if you could @abstr_hyperlink ; while we don't mind duplicates, keeping issues unique helps us save time and considates effort. If you can't find your issue, feel free to @abstr_hyperlink .

  * If you're looking to contribute code, please read CONTRIBUTING.md–it has information on IINA's process for handling contributions, and tips on how the code is structured to make your work easier.

  * If you'd like to translate IINA to your language, please check the @abstr_hyperlink page first: if a language is labeled as "Need help", then feel free to @abstr_hyperlink . If it doesn't contain your language at all, you can @abstr_hyperlink . If you need help working on a translation, you can contact @abstr_hyperlink or file an issue and one of the maintainers will try to help you out.


