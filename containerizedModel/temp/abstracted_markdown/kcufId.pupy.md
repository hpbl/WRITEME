# Pupy

Pupy is an opensource, cross-platform (Windows, Linux, OSX, Android), multi function RAT (Remote Administration Tool) and post-exploitation tool mainly written in python. It features a all-in-memory execution guideline and leaves very low footprint. Pupy can communicate using various transports, migrate into processes (reflective injection), load remote python code, python packages and python C-extensions from memory.   
Pupy modules can transparently access remote python objects using rpyc to perform various interactive tasks.   
Pupy can generate payloads in multiple formats like PE executables, reflective DLLs, pure python files, powershell, apk, ... When you package a payload, you can choose a launcher (connect, bind, ...), a transport (ssl, http, rsa, obfs @abstr_number , scramblesuit, ...) and a number of "scriptlets". Scriptlets are python scripts meant to be embedded to perform various tasks offline (without requiring a session), like starting a background script, adding persistence, starting a keylogger, detecting a sandbox, ...

## Features

  * Multi-platform (tested on windows xp, @abstr_number , @abstr_number , @abstr_number , kali linux, ubuntu, osx, android)
  * On windows, the Pupy payload can be compiled as a reflective DLL and the whole python interpreter is loaded from memory. Pupy does not touch the disk :)
  * pupy can also be packed into a single .py file and run without any dependencies other that the python standard library on all OS 
    * pycrypto gets replaced by pure python aes && rsa implementations when unavailable
  * Pupy can reflectively migrate into other processes
  * Pupy can remotely import, from memory, pure python packages (.py, .pyc) and compiled python C extensions (.pyd, .so). The imported python modules do not touch the disk.
  * Pupy is easily extensible, modules are quite simple to write, sorted by os and category.
  * A lot of awesome modules are already implemented!
  * Pupy uses @abstr_hyperlink and a module can directly access python objects on the remote client 
    * We can also access remote objects interactively from the pupy shell and you even get auto-completion of remote attributes!
  * Communication transports are modular, stackable and awesome. You could exfiltrate data using HTTP over HTTP over AES over XOR. Or any combination of the available transports !
  * Pupy can communicate using obfsproxy @abstr_hyperlink 
  * All the non interactive modules can be dispatched to multiple hosts in one command
  * Commands and scripts running on remote hosts are interruptible
  * Auto-completion for commands and arguments
  * Custom config can be defined: command aliases, modules automatically run at connection, ...
  * Interactive python shells with auto-completion on the all in memory remote python interpreter can be opened
  * Interactive shells (cmd.exe, /bin/bash, ...) can be opened remotely. Remote shells on Unix & windows clients have a real tty with all keyboard signals working fine just like a ssh shell
  * Pupy can execute PE exe remotely and from memory (cf. ex with mimikatz)
  * Pupy can generate payloads in various formats : apk,lin_x @abstr_number ,lin_x @abstr_number ,so_x @abstr_number ,so_x @abstr_number ,exe_x @abstr_number ,exe_x @abstr_number ,dll_x @abstr_number ,dll_x @abstr_number ,py,pyinst,py_oneliner,ps @abstr_number ,ps @abstr_number _oneliner,rubber_ducky
  * Pupy can be deployed in memory, from a single command line using pupygen.py's python or powershell one-liners.
  * "scriptlets" can be embeded in generated payloads to perform some tasks "offline" without needing network connectivity (ex: start keylogger, add persistence, execute custom python script, check_vm ...)
  * tons of other features, check out the implemented modules



## Implemented Transports

All transports in pupy are stackable. This mean that by creating a custom transport conf (pupy/network/transport//conf.py), you can make you pupy session looks like anything. For example you could stack HTTP over HTTP over base @abstr_number over HTTP over AES over obfs @abstr_number :o)

  * rsa 
    * A layer with authentication & encryption using RSA and AES @abstr_number , often stacked with other layers
  * aes 
    * layer using a static AES @abstr_number key
  * ssl (the default one) 
    * TCP transport wrapped with SSL
  * ssl_rsa 
    * same as ssl but stacked with a rsa layer
  * http 
    * layer making the traffic look like HTTP traffic. HTTP is stacked with a rsa layer
  * obfs @abstr_number 
    * @abstr_hyperlink 
    * obfs @abstr_number is stacked with a rsa layer for a better security
  * scramblesuit 
    * @abstr_hyperlink 
    * scramblesuit is stacked with a rsa layer for a better security
  * udp 
    * rsa layer but over UDP (could be buggy, it doesn't handle packet loss yet)
  * other 
    * Other layers doesn't really have any interest and are given for code examples : (dummy, base @abstr_number , XOR, ...)



## Implemented Launchers (not up to date, cf. ./pupygen.py -h)

Launchers allow pupy to run custom actions before starting the reverse connection \- connect \- Just connect back \- bind \- Bind payload instead of reverse \- auto_proxy \- Retrieve a list of possible SOCKS/HTTP proxies and try each one of them. Proxy retrieval methods are: registry, WPAD requests, gnome settings, HTTP_PROXY env variable

## Implemented Modules (not up to date)

### All platforms:

  * command execution
  * download
  * upload
  * interactive python shell with auto-completion
  * interactive shell (cmd.exe, powershell.exe, /bin/sh, /bin/bash, ...) 
    * tty allocation is well supported on both windows and *nix. Just looks like a ssh shell
  * shellcode exec
  * persistence
  * socks @abstr_number proxy
  * local and remote port forwarding
  * screenshot
  * keylogger
  * run the awesome credential gathering tool @abstr_hyperlink from memory !
  * sniff tools, netcreds
  * process migration (windows & linux, not osx yet)
  * ...
  * a lot of other tools (upnp client, various recon/pivot tools using impacket remotely, ...)



### Windows specific :

  * migrate 
    * inter process architecture injection also works (x @abstr_number ->x @abstr_number and x @abstr_number ->x @abstr_number )
  * in memory execution of PE exe both x @abstr_number and x @abstr_number ! 
    * works very well with @abstr_hyperlink :-)
  * webcam snapshot
  * microphone recorder
  * mouselogger: 
    * takes small screenshots around the mouse at each click and send them back to the server
  * token manipulation
  * getsystem
  * creddump
  * tons of useful powershell scripts
  * ...



### Android specific

  * Text to speech for Android to say stuff out loud
  * webcam snapshots (front cam & back cam)
  * GPS tracker !



## Installation

@abstr_hyperlink 

## Documentation

@abstr_hyperlink 

### Some screenshots (not up to date)

@abstr_hyperlink 

## FAQ

> Does the server work on windows?

Pupy server works best on linux. The server on windows has not been really tested and there is probably a lot of bugs. I try my best to code in a portable way but I don't always find the time to fix everything. If you find the courage to patch non-portable code, I will gladly accept pull requests! :) 

> I can't install it, how does it work? 

Have a look at the Installation section in the wiki

> I have the following error when starting pupy.sh: ImportError: No module named creddump.win @abstr_number .domcachedump

Follow the Installations steps in the wiki, you missed the git submodules initialisation/updates

> I have the following error when using pupygen : IOError: [Errno @abstr_number ] No such file or directory: '/full-path/pupy-master/pupy/payload_templates/pupyx @abstr_number .exe'

Follow the Installations steps in the wiki, you missed the git submodules initialisation/updates

> I have another error at installation

Follow the Installations steps in the wiki (yes I know)

> Hey, I love pupy and I was wondering if I could offer you a beer !

Sure ! thank you !   
Via pledgie : @abstr_hyperlink 

> hey c @abstr_number n y @abstr_number u add a DDOS module plzz? 

No.

## Contact

by mail: contact@n @abstr_number nj @abstr_number .eu   
on Twitter: @abstr_hyperlink 

If some of you want to participate to pupy development, don't hesitate ! All help is greatly appreciated and I will review every pull request.   
This project is a @abstr_hyperlink , please respect its philosophy and don't use it for evil purposes! 

## special thanks

Special thanks to all contributors that helps me improve pupy and make it an even better tool ! :)
