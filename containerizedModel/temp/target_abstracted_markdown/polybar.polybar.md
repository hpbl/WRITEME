@abstr_image 

A fast and easy-to-use tool for creating status bars. 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**Polybar** aims to help users build beautiful and highly customizable status bars for their desktop environment, without the need of having a black belt in shell scripting. Here are a few screenshots showing you what it can look like:

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

You can find polybar configs for these example images (and other configs) @abstr_hyperlink .

**If you need help** , check out the Support page.

Please report any bugs you find by @abstr_hyperlink here on GitHub. Make sure you include steps on how to reproduce it.

## Table of Contents

  * Introduction
  * Getting Help
  * Getting started 
    * Dependencies
    * Building from source
    * Configuration
    * Running
  * Community
  * Contributors
  * License



## Introduction

The main purpose of **Polybar** is to help users create awesome status bars. It has built-in functionality to display information about the most commonly used services. Some of the services included so far:

  * Systray icons
  * Window title
  * Playback controls and status display for @abstr_hyperlink using @abstr_hyperlink 
  * @abstr_hyperlink volume controls
  * Workspace and desktop panel for @abstr_hyperlink and @abstr_hyperlink 
  * Workspace module for @abstr_hyperlink window managers
  * Keyboard layout and indicator status
  * CPU and memory load indicator
  * Battery display
  * Network connection details
  * Backlight level
  * Date and time label
  * Time-based shell script execution
  * Command output tailing
  * User-defined menu tree
  * Inter-process messaging
  * And more...



@abstr_hyperlink .

## Getting Help

If you find yourself stuck, have a look at our Support page for resources where you can find help.

## Getting started

@abstr_hyperlink 

Polybar was already packaged for the distros listed below. If you can't find your distro here, you will have to build from source.

If you create a package for any other distribution, please consider contributing the template.

If you are using **Arch Linux** , you can install the AUR package @abstr_hyperlink to get the latest version, or @abstr_hyperlink for the latest stable release.

If you are using **Void Linux** , you can install @abstr_hyperlink using `xbps-install -S polybar`.

If you are using **NixOS** , polybar is available in both the stable and unstable channels and can be installed with the command `nix-env -iA nixos.polybar`.

If you are using **Slackware** , polybar is available from the @abstr_hyperlink repository.

If you are using **Source Mage GNU/Linux** , polybar spell is available in test grimoire and can be installed via `cast polybar`.

If you are using **openSUSE** , polybar is available from @abstr_hyperlink repository. Package is available for openSUSE Leap @abstr_number and Tumbleweed.

If you are using **FreeBSD** , @abstr_hyperlink can be installed using `pkg install polybar`. Make sure you are using the `latest` package branch.

If you are using **Gentoo** , both release and git-master versions are available in the @abstr_hyperlink repository.

### Dependencies

A compiler with C++ @abstr_number support ( @abstr_hyperlink , @abstr_hyperlink ), @abstr_hyperlink , @abstr_hyperlink \- `cairo` \- `libxcb` \- `python @abstr_number` \- `xcb-proto` \- `xcb-util-image` \- `xcb-util-wm`

**Optional dependencies:** \- `xcb-util-cursor` _required for the`cursor-click` and `cursor-scroll` settings_ \- `xcb-util-xrm` _required for accessing X resources with`${xrdb:...}`_

**Optional dependencies for extended module support:** \- `xcb-xkb` _required by`internal/xkeyboard`_ \- `alsa-lib` _required by`internal/alsa`_ \- `libpulse` _required by`internal/pulseaudio`_ \- `i @abstr_number -wm` _required by`internal/i @abstr_number`_ \- `jsoncpp` _required by`internal/i @abstr_number`_ \- `libmpdclient` _required by`internal/mpd`_ \- `libcurl` _required by`internal/github`_ \- `libnl-genl` or `wireless_tools` _required by`internal/network`_

Find a more complete list on the @abstr_hyperlink .

### Building from source

Please @abstr_hyperlink you run into when building the project.

Download the `polybar-<version>.tar` for the version you want to build from the @abstr_hyperlink , extract it with `tar xvf polybar-<version>.tar` and go into the extracted folder. There, run the following commands:

@abstr_code_section 

There's also a helper script available in the root folder:

~~~ sh $ ./build.sh ~~~

For more info, have a look at the @abstr_hyperlink .

### Configuration

Details on how to setup and configure the bar and each module have been moved to @abstr_hyperlink .

#### Install the example configuration

Run the following inside the build directory: ~~~ sh $ make userconfig ~~~ Or you can copy the example config from `/usr/share/doc/polybar/config` or `/usr/local/share/doc/polybar/config` (depending on your install parameters)

#### Launch the example bar

~~~ sh $ polybar example ~~~

### Running

@abstr_hyperlink .

## Community

Want to get in touch?

  * We have our own subreddit at @abstr_hyperlink .
  * Chat with us in the `#polybar` IRC channel on the `chat.freenode.net` server.



## Contributors

### Owner

  * Michael Carlberg @abstr_hyperlink 



### Maintainers

  * @abstr_hyperlink 
  * Chase Geigle @abstr_hyperlink 
  * Patrick Ziegler @abstr_hyperlink 



### Logo Design by

  * @abstr_hyperlink 



###  @abstr_hyperlink 

## License

Polybar is licensed under the MIT license. @abstr_hyperlink .
