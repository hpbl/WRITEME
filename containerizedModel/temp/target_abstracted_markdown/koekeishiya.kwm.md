## PROJECT DEPRECATED

Main development was shifted to a @abstr_hyperlink early @abstr_number .

**Kwm** was a nice proof of concept, but had many faults in its architecture.

The experience gained while working on **kwm** has been huge, and so I found that starting a complete re-write from scratch was necessary to create a stable window manager of higher quality. Despite the time and effort this requires, it would be worth it in the end.

This repository and the currently available documentation will remain as is, but I highly suggest using the new @abstr_hyperlink instead.

* * *

## Description @abstr_hyperlink 

@abstr_hyperlink started as a simple project to get true focus-follows-mouse support on OSX through event tapping. It is now a tiling window manager that represents windows as the leaves of a binary tree. _Kwm_ supports binary space partitioned, monocle and floating spaces.

_Kwm_ uses the event taps API (Quartz Event Services) to observe, filter and alter user input events prior to their delivery to a foreground application.

_Kwm_ runs a local daemon to read messages and trigger functions. _Kwmc_ is used to write to _Kwm_ 's socket, and must be used when interacting with and configuring how _Kwm_ works. @abstr_hyperlink can be used to create keybindings to perform some _Kwmc_ command. More info can be found @abstr_hyperlink .

For in depth information, @abstr_hyperlink . For sample configurations and other useful scripts, check out the @abstr_hyperlink . You can also drop by the channel **##kwm** on @abstr_hyperlink .

_Kwm_ requires access to the OSX accessibility API. Tested on El Capitan ( @abstr_number . @abstr_number . @abstr_number - @abstr_number . @abstr_number . @abstr_number ).

@abstr_image For more screenshots, @abstr_hyperlink 

The bar seen in the above screenshot can be found @abstr_hyperlink .

## Install

A codesigned binary release is available through Homebrew
    
    
    brew install koekeishiya/formulae/kwm
    

Manage Kwm using brew services
    
    
    brew services start kwm
    

Copy the @abstr_hyperlink to `~/.kwm/kwmrc` as described in the brew caveat section. If you'd like to use a different config file path: instead of using `brew services`, start _Kwm_ using a custom `launchd` launch agent as described below in `Starting *Kwm* on login through launchd`.

## Usage

**NOTE:** Kwm requires @abstr_hyperlink to be enabled.

Set @abstr_hyperlink for various settings.

Arguments: @abstr_code_section 

## Configuration

**NOTE** : @abstr_hyperlink of available commands

The default configuration file is `$HOME/.kwm/kwmrc` and is a script that contains _kwmc_ commands to be executed when _Kwm_ starts.

A sample config file can be found within the examples directory. Any error that occur during parsing of the config file will be written to **stderr**.

## Syntax highlighting for configuration files

### vim

Copy the vim syntax files to your vim config: @abstr_code_section 

Or using @abstr_hyperlink : @abstr_code_section 

## Development

**NOTE:** Requires Xcode- @abstr_number command line tools

Build _AXLib_ only
    
    
      make install-lib  # release version, runs cleanlib
      make lib          # debug version
    

Build _Kwm_ (also builds _AXLib_ if required)
    
    
      make install      # release version, runs cleankwm
      make              # debug version
    

Remove temporary build artifacts
    
    
      make clean        # runs cleanlib and cleankwm
      make cleanlib     # remove axlib artifacts
      make cleankwm     # remove kwm artifacts
    

Start _Kwm_ on login using launchd as described below.

## Starting _Kwm_ on login through launchd

Provide your own custom launch agent
    
    
      edit /path/to/kwm on line  @abstr_number  of examples/com.koekeishiya.kwm.plist
      cp examples/com.koekeishiya.kwm.plist ~/Library/LaunchAgents/
    

Manually manage _Kwm_ using launchctl
    
    
      launchctl load -w ~/Library/LaunchAgents/com.koekeishiya.kwm.plist
    

### Donate

_Kwm_ will always be free and open source, however, some users have expressed interest in some way to show their support. If you wish to do so, I have set up a patreon @abstr_hyperlink .
