# Fluent Terminal

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

A Terminal Emulator based on UWP and web technologies.

## Features

  * Terminal for PowerShell, CMD, WSL or custom shells
  * Built-in support for SSH and @abstr_hyperlink connections
  * Supports tabs and multiple windows
  * Theming and appearance configuration
  * Import/Export themes
  * Import iTerm themes
  * Fullscreen mode
  * Editable keybindings
  * Search function
  * Configure shell profiles to quickly switch between different shells
  * Explorer context menu integration (Installation script can be found @abstr_hyperlink )



## Screenshots

@abstr_image @abstr_image 

## Up Next

  * ~~Launch shell profile with a custom defined keybinding~~
  * Copy & Paste options
  * Improved tabs
  * Split screen support



## How to install (as an end-user)

### Prerequisite

  * You need to update to Fall Creators Update or later.



### Chocolatey package manager installation

  * Install @abstr_hyperlink 
  * From an elevated/admin shell, execute `choco install fluent-terminal`



### Bundled install script

  * Download and extract the latest @abstr_hyperlink .
  * If not already present, download Install.ps @abstr_number to the extracted directory.
  * Right-click on `Install.ps @abstr_number`, and choose "Run with Powershell".
  * The installer script will walk you through the rest of the process.



### Manual install

  * Download the latest @abstr_hyperlink 
  * @abstr_hyperlink 
    * Alternatively, @abstr_hyperlink if you plan to do UWP app development. **For most users that do not intend to do UWP app development, developer mode will not be necessary.**
  * Install the *.cer file into `Local Machine` -> `Trusted Root Certification Authorities`
    * This will require administrator elevation. If you installed the certificate and did not have to elevate, you likely installed it into an incorrect certificate store.



@abstr_image 

@abstr_image 

  * double click the *.appxbundle
  * **Optional:** Install Context menu integration from @abstr_hyperlink 



## How to set up a development environment

Please refer to @abstr_hyperlink 
