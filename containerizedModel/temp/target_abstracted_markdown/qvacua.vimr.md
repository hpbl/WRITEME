# VimR — Neovim Refined

@abstr_image 

@abstr_hyperlink • @abstr_hyperlink • @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image @abstr_image @abstr_image 

## About

Project VimR is a (YA) Neovim GUI for macOS. The goal is to build an editor that uses Neovim inside with many of the convenience GUI features similar to those present in modern editors. We mainly use Swift, but also use Objective-C when its C-nature helps.

There are other Neovim GUIs for macOS, e.g. @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , etc., so why?

  * play around (obviously) with @abstr_hyperlink ,
  * play around with Swift (and especially with @abstr_hyperlink ) and
  * (most importantly) have fun!



## (Reusable) Components

  * @abstr_hyperlink : RxSwift wrapper for local and remote `CFMessagePort`.
  * @abstr_hyperlink : implementation of MsgpackRpc using RxSwift.
  * @abstr_hyperlink : RxSwift wrapper of Neovim API.
  * @abstr_hyperlink : Cocoa Framework which bundles everything, e.g. Neovim's `runtime`-files, needed to embed Neovim in a Cocoa App. See the @abstr_hyperlink .



* * *

If you want to support VimR financially, you can use @abstr_hyperlink . Big thanks to @abstr_hyperlink who did support: We list our spendings in the @abstr_hyperlink .

## Download

Pre-built binaries can be found under @abstr_hyperlink .

## Some Features

  * Basic input including Emojis and Hangul (+Hanja): We don't know whether other input systems work...
  * Markdown preview
  * Generic HTML preview (retains the scroll position when reloading)
  * Fuzzy file finder a la Xcode's "Open Quickly..."
  * Trackpad support: Pinching for zooming and two-finger scrolling.
  * Ligatures: Turned off by default. Turn it on in the Preferences.
  * Command line tool.
  * (Simple) File browser
  * Flexible workspace model a la JetBrain's IDEs



We will gradually create feature @abstr_hyperlink with more details. For the current status see the @abstr_hyperlink .

## How to Build

First after cloning the VimR source tree you need to initialize git submodules

@abstr_code_section 

You have to use Xcode @abstr_number . @abstr_number . First install `homebrew`, then in the project root:

@abstr_code_section 

If the build fails for some reason, do the following and build again:

@abstr_code_section 

## Project Setup

### Artifacts Hierarchy

@abstr_code_section 

### Libraries for Neovim

  * The library `libiconv` is linked by the linker flag `-liconv`. The version bundled with macOS will be linked.
  * The library `libintl` is pre-built in `third-party/libintl/lib` and linked by "Other Linker Flags" of the NvimServer target.
  * Other libraries used by Neovim, which are automatically built by building `libnvim`, are linked by "Other Linker Flags" of the NvimServer target.



## License

@abstr_hyperlink 

* * *

If you are here for VimR-MacVim, use the @abstr_hyperlink branch and the version @abstr_hyperlink .
