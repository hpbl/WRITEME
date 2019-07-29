# ZeroMQ

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Welcome

The ZeroMQ lightweight messaging kernel is a library which extends the standard socket interfaces with features traditionally provided by specialised messaging middleware products. ZeroMQ sockets provide an abstraction of asynchronous message queues, multiple messaging patterns, message filtering (subscriptions), seamless access to multiple transport protocols and more.

## Supported platforms 

### Supported platforms with primary CI

OS and version | Architecture | Compiler and version | Build system | Remarks \-------------- | ------------ | -------------------- | ------------ | ------- Android NDK @abstr_number c | ARM | gcc ? | autotools | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS (trusty) | amd @abstr_number | clang @abstr_number . @abstr_number . @abstr_number | autotools | STABLE, extras: GSSAPI, PGM, NORM, C++ @abstr_number mode only Ubuntu @abstr_number . @abstr_number . @abstr_number LTS (trusty) | amd @abstr_number | gcc @abstr_number . @abstr_number . @abstr_number | autotools | STABLE, DRAFT, extras: GSSAPI, PGM, NORM, TIPC, IPV @abstr_number , also POLLER=poll, POLLER=select, also valgrind and address sanitizer executions Ubuntu @abstr_number . @abstr_number . @abstr_number LTS (trusty) | amd @abstr_number | gcc @abstr_number . @abstr_number . @abstr_number | CMake @abstr_number . @abstr_number . @abstr_number | STABLE Windows Server @abstr_number R @abstr_number | x @abstr_number | Visual Studio @abstr_number | CMake @abstr_number . @abstr_number . @abstr_number | DRAFT Windows Server @abstr_number R @abstr_number | x @abstr_number | Visual Studio @abstr_number SP @abstr_number | CMake @abstr_number . @abstr_number . @abstr_number | DRAFT Windows Server @abstr_number R @abstr_number | x @abstr_number | Visual Studio @abstr_number Update @abstr_number | CMake @abstr_number . @abstr_number . @abstr_number | DRAFT Windows Server @abstr_number R @abstr_number | x @abstr_number , amd @abstr_number | Visual Studio @abstr_number Update @abstr_number | CMake @abstr_number . @abstr_number . @abstr_number | DRAFT, STABLE (x @abstr_number Release only), also POLLER=epoll Windows Server @abstr_number R @abstr_number | x @abstr_number | Visual Studio @abstr_number Update @abstr_number | CMake @abstr_number . @abstr_number . @abstr_number | DRAFT Windows Server @abstr_number | x @abstr_number | Visual Studio @abstr_number @abstr_number . @abstr_number . @abstr_number | CMake @abstr_number . @abstr_number . @abstr_number | DRAFT cygwin @abstr_number . @abstr_number . @abstr_number on Windows Server @abstr_number R @abstr_number | amd @abstr_number | gcc @abstr_number . @abstr_number . @abstr_number | CMake @abstr_number . @abstr_number . @abstr_number | DRAFT MSYS @abstr_number ? on Windows Server @abstr_number R @abstr_number | amd @abstr_number | gcc @abstr_number . @abstr_number . @abstr_number | CMake ? | DRAFT Mac OS X @abstr_number . @abstr_number | amd @abstr_number | Xcode @abstr_number . @abstr_number . @abstr_number , Apple LLVM @abstr_number . @abstr_number . @abstr_number | autotools | STABLE, DRAFT Mac OS X @abstr_number . @abstr_number | amd @abstr_number | Xcode @abstr_number . @abstr_number . @abstr_number , Apple LLVM @abstr_number . @abstr_number . @abstr_number | CMake @abstr_number . @abstr_number . @abstr_number | DRAFT

Note: the platforms are regularly updated by the service providers, so this information might get out of date without any changes on the side of libzmq. For Appveyor, refer to https://www.appveyor.com/updates/ regarding platform updates. For travis-ci, refer to https://changelog.travis-ci.com/ regarding platform updates.

### Supported platforms with secondary CI

OS and version | Architecture | Compiler and version | Build system | Remarks \-------------- | ------------ | -------------------- | ------------ | ------- CentOS @abstr_number | x @abstr_number , amd @abstr_number | ? | autotools | CentOS @abstr_number | amd @abstr_number | ? | autotools | Debian @abstr_number . @abstr_number | x @abstr_number , amd @abstr_number | ? | autotools | Debian @abstr_number . @abstr_number | ARM @abstr_number , x @abstr_number , amd @abstr_number | ? | autotools | Fedora @abstr_number | ARM @abstr_number , ARM @abstr_number , amd @abstr_number | ? | autotools | Fedora @abstr_number | ARM @abstr_number , ARM @abstr_number , amd @abstr_number | ? | autotools | Fedora Rawhide | ARM @abstr_number , ARM @abstr_number , amd @abstr_number | ? | autotools | RedHat Enterprise Linux @abstr_number | amd @abstr_number , ppc @abstr_number | ? | autotools | SuSE Linux Enterprise @abstr_number SP @abstr_number | ARM @abstr_number , amd @abstr_number , ppc @abstr_number , s @abstr_number x | ? | autotools | SuSE Linux Enterprise @abstr_number | amd @abstr_number | ? | autotools | xUbuntu @abstr_number . @abstr_number | x @abstr_number , amd @abstr_number | ? | autotools | xUbuntu @abstr_number . @abstr_number | x @abstr_number , amd @abstr_number | ? | autotools | xUbuntu @abstr_number . @abstr_number | x @abstr_number , amd @abstr_number | ? | autotools | xUbuntu @abstr_number . @abstr_number | x @abstr_number , amd @abstr_number | ? | autotools | xUbuntu @abstr_number . @abstr_number | x @abstr_number , amd @abstr_number | ? | autotools |

### Supported platforms with known active users

At the time of writing, no explicit reports have been available. Please report your experiences by opening a PR adding an entry or moving an entry from the section below.

Under "last report", please name either the SHA @abstr_number in case of an unreleased version, or the version number in case of a released version.

OS and version | Architecture | Compiler and version | Build system | Last report | Remarks \-------------- | ------------ | -------------------- | ------------ | ----------- | ------- Solaris @abstr_number | x @abstr_number , amd @abstr_number , sparc | GCC @abstr_number . @abstr_number . @abstr_number | CMake | @abstr_number / @abstr_number / @abstr_number |

### Supported platforms without known active users

Note: this list is incomplete and inaccurate and still needs some work.

OS and version | Architecture | Compiler and version | Build system | Remarks \-------------- | ------------ | -------------------- | ------------ | ------- Any Linux distribution | x @abstr_number , amd @abstr_number | gcc ?+, clang ?+, icc ?+ | autotools, CMake | SunOS, Solaris | x @abstr_number , amd @abstr_number | SunPro | autotools, CMake | GNU/kFreeBSD | ? | ? | autotools, CMake | FreeBSD | ? | ? | autotools, CMake | NetBSD | ? | ? | autotools, CMake | OpenBSD | ? | ? | autotools, CMake | HP-UX | ? | ? | autotools, CMake | GNU/Hurd | ? | ? | autotools | VxWorks @abstr_number . @abstr_number | ? | ? | ? | Windows CE | ? | ? | ? | Windows UWP | ? | ? | ? | OpenVMS | ? | ? | ? |

### Unsupported platforms

OS and version | Architecture | Compiler and version | Remarks \-------------- | ------------ | -------------------- | ------- QNX @abstr_number . @abstr_number | ? | gcc @abstr_number . @abstr_number . @abstr_number | see # @abstr_number , support was added by a user, but not contributed to upstream Windows @abstr_number | ARM, ARM @abstr_number | Visual Studio @abstr_number | see # @abstr_number , probably only minor issues 

For more details, see here.

For some platforms (Linux, Mac OS X), prebuilt binary packages are supplied by the ZeroMQ organization. For other platforms, you need to build your own binaries.

## Installation of binary packages 

### Linux

For Linux users, pre-built binary packages are available for most distributions. Note that DRAFT APIs can change at any time without warning, pick a STABLE build to avoid having them enabled.

#### Latest releases

##### DEB

@abstr_hyperlink @abstr_hyperlink 

##### RPM

@abstr_hyperlink @abstr_hyperlink 

#### Bleeding edge packages

##### DEB

@abstr_hyperlink @abstr_hyperlink 

##### RPM

@abstr_hyperlink @abstr_hyperlink 

#### Example: Debian @abstr_number latest release, no DRAFT apis
    
    
    echo "deb http://download.opensuse.org/repositories/network:/messaging:/zeromq:/release-stable/Debian_ @abstr_number . @abstr_number / ./" >> /etc/apt/sources.list
    wget https://download.opensuse.org/repositories/network:/messaging:/zeromq:/release-stable/Debian_ @abstr_number . @abstr_number /Release.key -O- | sudo apt-key add
    apt-get install libzmq @abstr_number -dev
    

### OSX

For OSX users, packages are available via brew.
    
    
    brew install zeromq
    

## Build from sources 

To build from sources, see the INSTALL file included with the distribution.

## Resources

Extensive documentation is provided with the distribution. Refer to doc/zmq.html, or "man zmq" after you have installed libzmq on your system.

Website: http://www.zeromq.org/

Development mailing list: zeromq-dev@lists.zeromq.org Announcements mailing list: zeromq-announce@lists.zeromq.org

Git repository: http://github.com/zeromq/libzmq

ZeroMQ developers can also be found on the IRC channel #zeromq, on the Freenode network (irc.freenode.net).

## License

The project license is specified in COPYING and COPYING.LESSER.

libzmq is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License (LGPL) as published by the Free Software Foundation; either version @abstr_number of the License, or (at your option) any later version.

As a special exception, the Contributors give you permission to link this library with independent modules to produce an executable, regardless of the license terms of these independent modules, and to copy and distribute the resulting executable under terms of your choice, provided that you also meet, for each linked independent module, the terms and conditions of the license of that module. An independent module is a module which is not derived from or based on this library. If you modify this library, you must extend this exception to your version of the library.

libzmq is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

## Contributing

This project uses @abstr_hyperlink process for contributions.
