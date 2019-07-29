@abstr_hyperlink @abstr_hyperlink 

# Anbox

Anbox is a container-based approach to boot a full Android system on a regular GNU/Linux system like Ubuntu. In other words: Anbox will let you run Android on your Linux system without the slowness of virtualization.

## Overview

Anbox uses Linux namespaces (user, pid, uts, net, mount, ipc) to run a full Android system in a container and provide Android applications on any GNU/Linux-based platform.

The Android inside the container has no direct access to any hardware. All hardware access is going through the anbox daemon on the host. We're reusing what Android implemented within the QEMU-based emulator for OpenGL ES accelerated rendering. The Android system inside the container uses different pipes to communicate with the host system and sends all hardware access commands through these.

For more details have a look at the following documentation pages:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Anbox is currently suited for the desktop use case but can be used on mobile operating systems like Ubuntu Touch, Sailfish OS or Lune OS too. However as the mapping of Android applications is currently desktop specific this needs additional work to supported stacked window user interfaces too.

The Android runtime environment ships with a minimal customized Android system image based on the @abstr_hyperlink . The used image is currently based on Android @abstr_number . @abstr_number . @abstr_number 

## Installation

See our installation instructions for details.

## Supported Linux Distributions

At the moment we officially support the following Linux distributions:

  * Ubuntu @abstr_number . @abstr_number (xenial)
  * Ubuntu @abstr_number . @abstr_number (bionic)



However all other distributions supporting snap packages should work as well as long as they provide the mandatory kernel modules (see kernel/).

## Install and Run Android Applications

TBD

## Build from source

### Requirements

To build the Anbox runtime itself there is nothing special to know. We're using cmake as build system. A few build dependencies need to be present on your host system:

  * libdbus
  * google-mock
  * google-test
  * libboost
  * libboost-filesystem
  * libboost-log
  * libboost-iostreams
  * libboost-program-options
  * libboost-system
  * libboost-test
  * libboost-thread
  * libcap
  * libsystemd
  * mesa (libegl @abstr_number , libgles @abstr_number )
  * libsdl @abstr_number 
  * libprotobuf
  * protobuf-compiler
  * lxc (>= @abstr_number . @abstr_number )



On an Ubuntu system you can install all build dependencies with the following command:

@abstr_code_section We recommend Ubuntu @abstr_number . @abstr_number (bionic) with **GCC @abstr_number .x** as your build environment.

### Build

Afterwards you can build Anbox with

@abstr_code_section 

A simple

@abstr_code_section 

will install the necessary bits into your system.

If you want to build the anbox snap instead you can do this with the following steps:

@abstr_code_section 

The result will be a .snap file you can install on a system supporting snaps

@abstr_code_section 

## Run Anbox

Running Anbox from a local build requires a few more things you need to know about. Please have a look at the "Runtime Setup" documentation.

## Documentation

You will find additional documentation for Anbox in the _docs_ subdirectory of the project source.

Interesting things to have a look at

  * Runtime Setup
  * Build Android image
  * Generate Android emugl source



## Reporting bugs

If you have found an issue with Anbox, please @abstr_hyperlink .

## Get in Touch

If you want to get in contact with the developers please feel free to join the _#anbox_ IRC channel on @abstr_hyperlink .

## Copyright and Licensing

Anbox reuses code from other projects like the Android QEMU emulator. These projects are available in the external/ subdirectory with the licensing terms included.

The Anbox source itself, if not stated differently in the relevant source files, is licensed under the terms of the GPLv @abstr_number license.
