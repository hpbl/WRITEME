@abstr_hyperlink 

Xenia - Xbox @abstr_number Emulator

Xenia is an experimental emulator for the Xbox @abstr_number . For more information, see the @abstr_hyperlink .

**Interested in supporting the core contributors?** Visit @abstr_hyperlink .

Come chat with us about **emulator-related topics** on @abstr_hyperlink . For developer chat join `#dev` but stay on topic. Lurking is not only fine, but encouraged! Please check the @abstr_hyperlink page before asking questions. We've got jobs/lives/etc, so don't expect instant answers.

Discussing illegal activities will get you banned.

## Status

Buildbot | Status \-------- | ------ @abstr_hyperlink | @abstr_hyperlink @abstr_hyperlink | @abstr_hyperlink 

Quite a few real games run. Quite a few don't. See the @abstr_hyperlink for currently tracked games, and feel free to contribute your own updates, screenshots, and information there following the @abstr_hyperlink .

## Disclaimer

The goal of this project is to experiment, research, and educate on the topic of emulation of modern devices and operating systems. **It is not for enabling illegal activity**. All information is obtained via reverse engineering of legally purchased devices and games and information made public on the internet (you'd be surprised what's indexed on Google...).

## Quickstart

With Windows @abstr_number +, Python @abstr_number . @abstr_number +, and @abstr_hyperlink and the Windows SDKs installed:
    
    
    > git clone https://github.com/xenia-project/xenia.git
    > cd xenia
    > xb setup
    
    # Pull latest changes, rebase, and update submodules and premake:
    > xb pull
    
    # Build on command line:
    > xb build
    
    # Run premake and open Visual Studio (run the 'xenia-app' project):
    > xb devenv
    
    # Run premake to update the sln/vcproj's:
    > xb premake
    
    # Format code to the style guide:
    > xb format
    

When fetching updates use `xb pull` to automatically fetch everything and run premake for project files/etc.

## Building

See building.md for setup and information about the `xb` script. When writing code, check the style guide and be sure to run clang-format!

## Contributors Wanted!

Have some spare time, know advanced C++, and want to write an emulator? Contribute! There's a ton of work that needs to be done, a lot of which is wide open greenfield fun.

**For general rules and guidelines please see CONTRIBUTING.md.**

Fixes and optimizations are always welcome (please!), but in addition to that there are some major work areas still untouched:

  * Help work through @abstr_hyperlink 
  * Add input drivers for @abstr_hyperlink (or anything else)
  * Skilled with Linux? A strong contributor is needed to @abstr_hyperlink 



See more projects @abstr_hyperlink . It's a good idea to ask on Discord and check the issues page before beginning work on something.

## FAQ

For more see the main @abstr_hyperlink page.

### Can I get an exe?

@abstr_hyperlink 
