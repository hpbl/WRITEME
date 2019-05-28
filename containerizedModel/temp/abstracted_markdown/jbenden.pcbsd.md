# pcbsd

The official PC-BSD git repository

## Source Map

`build-files/`

Contains iso image configuration files, package settings, dummy port settings, and build settings.

  
`overlays/`

Files included on our install images, scripts, and role settings for the installer.

  
`src-qt @abstr_number /`

C++ Code for pcbsd-utils-qt @abstr_number package, which builds into all the various PC-BSD related GUI utilities.

Note: Qt @abstr_number build tools are located in `/usr/local/lib/qt @abstr_number /bin/` rather than `/usr/local/bin/`

_Requires Qt @abstr_number to build / run_

To create the Makefile in src-qt @abstr_number , make sure `devel/qt @abstr_number` is installed on your system and then run: `% cd src-qt @abstr_number && /usr/local/lib/qt @abstr_number /bin/qmake`

  
`pbi-modules/`

Contains PC-BSD's PBI .conf files.

  
`retired/`

Any PC-BSD utilities or files that are no longer in use.

  
`src-sh/`

Shell code which builds into pcbsd-utils package. Scripts, backends and various CLI related utilities for TrueOS & PC-BSD. 

  
`src-webui/`

All the code for the AppCafe WEB interface.

## Contacting Us

## ######IRC (FreeNode)

`#pcbsd-dev` (Developer questions / talk)

`#pcbsd` (General user information)

  


## ######Mailing Lists

http://lists.pcbsd.org

  


## ######Bug Tracker

http://bugs.pcbsd.org
