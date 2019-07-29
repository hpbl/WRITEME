@abstr_hyperlink @abstr_hyperlink 

# OBSOLETED

Karabiner is obsoleted on macOS Sierra ( @abstr_number . @abstr_number ) or later.  
Please use @abstr_hyperlink .

# Karabiner

Karabiner is a powerful utility for keyboard customization.

  * Change the key mappings (For example, "Change Right Option to Enter")
  * Change the key repeat speed.
  * The revival of a lost NumPad key (Fn+jkluio @abstr_number …)
  * Features for more efficient operations. (Emacs Mode, Vi Mode, Mouse Keys Mode, ...)



Prior to version @abstr_number . @abstr_number . @abstr_number , Karabiner was called _KeyRemap @abstr_number MacBook_.

**Please use @abstr_hyperlink on macOS Sierra ( @abstr_number . @abstr_number ) or later.**

We made Karabiner-Elements from scratch due to kernel architecture changes in macOS Sierra.

## Useful links

  * Latest build: https://pqrs.org/osx/karabiner/
  * Mirror: http://tekezo.github.io/pqrs.org/
  * Google Group: https://groups.google.com/forum/#!forum/osx-karabiner
  * List of key names: https://github.com/tekezo/Karabiner/blob/master/src/bridge/generator/keycode/data/KeyCode.data



You can also get the latest stable release package via fixed URL.

@abstr_code_section 

## System requirements

Karabiner works for all Mac products, including the MacBook series, iMac, Mac mini, and Mac Pro, with the requirement that the product runs OS X @abstr_number . @abstr_number (Mavericks) or higher, up until MacOS @abstr_number . @abstr_number (Sierra), which is not supported.

  * If you require Karabiner for macOS @abstr_number . @abstr_number , please use @abstr_hyperlink .
  * If you require Karabiner for OS X @abstr_number . @abstr_number - @abstr_number . @abstr_number , please use KeyRemap @abstr_number MacBook @abstr_number . @abstr_number . @abstr_number .
  * If you require Karabiner for OS X @abstr_number . @abstr_number - @abstr_number . @abstr_number , please use KeyRemap @abstr_number MacBook @abstr_number . @abstr_number . @abstr_number .



## How to build

System requirements:

  * OS X @abstr_number . @abstr_number +
  * Xcode @abstr_number +
  * Command Line Tools for Xcode
  * Boost @abstr_number . @abstr_number . @abstr_number + (header-only) http://www.boost.org/



Please install Boost into `/opt/local/include/boost`. (eg. `/opt/local/include/boost/version.hpp`)

### Step @abstr_number : Getting source code

Download the source to master.tar.gz in the current directory, this can be re-executed to restart a cancelled download.
    
    
    curl -OLC - https://github.com/tekezo/Karabiner/archive/master.tar.gz
    

Extract the master.tar.gz file to "Karabiner-master" and delete the tar.gz file
    
    
    tar -xvzf master.tar.gz && rm master.tar.gz
    

### Step @abstr_number : Building a package
    
    
    cd Karabiner-master
    make
    

The `make` script will create a redistributable **Karabiner-VERSION.dmg** in the current directory.

**Note:** The build may fail if you have changed any environment variables or if you have modified scripts in the `/usr/bin` locations. Use a clean environment (new account) if this is the case.
