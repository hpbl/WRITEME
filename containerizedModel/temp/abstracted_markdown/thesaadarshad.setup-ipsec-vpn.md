# IPsec VPN Server Auto Setup Scripts

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Set up your own IPsec VPN server in just a few minutes, with both IPsec/L @abstr_number TP and Cisco IPsec on Ubuntu, Debian and CentOS. All you need to do is provide your own VPN credentials, and let the scripts handle the rest.

An IPsec VPN encrypts your network traffic, so that nobody between you and the VPN server can eavesdrop on your data as it travels via the Internet. This is especially useful when using unsecured networks, e.g. at coffee shops, airports or hotel rooms.

We will use @abstr_hyperlink as the IPsec server, and @abstr_hyperlink as the L @abstr_number TP provider.

@abstr_hyperlink 

_Read this in other languages: English, 简体中文._

#### Table of Contents

  * Quick start
  * Features
  * Requirements
  * Installation
  * Next steps
  * Important notes
  * Upgrade Libreswan
  * Bugs & Questions
  * Uninstallation
  * See also
  * License



## Quick start

First, prepare your Linux server* with a fresh install of Ubuntu LTS, Debian @abstr_number or CentOS @abstr_number / @abstr_number .

Use this one-liner to set up an IPsec VPN server:

@abstr_code_section 

If using CentOS, replace the link above with `https://git.io/vpnsetup-centos`.

Your VPN login details will be randomly generated, and displayed on the screen when finished.

For other installation options and how to set up VPN clients, read the sections below.

* A dedicated server or Virtual Private Server (VPS). OpenVZ VPS is NOT supported.

## Features

  * **New:** The faster `IPsec/XAuth ("Cisco IPsec")` mode is supported
  * **New:** A pre-built @abstr_hyperlink of the VPN server is now available
  * Fully automated IPsec VPN server setup, no user input needed
  * Encapsulates all VPN traffic in UDP - does not need ESP protocol
  * Can be directly used as "user-data" for a new Amazon EC @abstr_number instance
  * Includes `sysctl.conf` optimizations for improved performance
  * Tested with Ubuntu @abstr_number . @abstr_number / @abstr_number . @abstr_number / @abstr_number . @abstr_number , Debian @abstr_number and CentOS @abstr_number / @abstr_number 



## Requirements

A newly created @abstr_hyperlink instance, from these images (AMI): \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink 

Please see @abstr_hyperlink and @abstr_hyperlink .

**-OR-**

A dedicated server or Virtual Private Server (VPS), freshly installed with one of the above OS. In addition, Debian @abstr_number (Wheezy) can also be used with this workaround. OpenVZ VPS is NOT supported, users could instead try @abstr_hyperlink .

This also includes Linux VMs in public clouds, such as @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

@abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink 

Advanced users can set up the VPN server on a $ @abstr_number @abstr_hyperlink .

:warning: **DO NOT** run these scripts on your PC or Mac! They should only be used on a server!

## Installation

### Ubuntu & Debian

First, update your system with `apt-get update && apt-get dist-upgrade` and reboot. This is optional, but recommended.

To install the VPN, please choose one of the following options:

**Option @abstr_number :** Have the script generate random VPN credentials for you (will be displayed when finished):

@abstr_code_section 

**Option @abstr_number :** Edit the script and provide your own VPN credentials:

@abstr_code_section 

**Option @abstr_number :** Define your VPN credentials as environment variables:

@abstr_code_section 

**Note:** If unable to download via `wget`, you may also open vpnsetup.sh (or vpnsetup_centos.sh) and click the **`Raw`** button. Press `Ctrl-A` to select all, `Ctrl-C` to copy, then paste into your favorite editor.

### CentOS & RHEL

First, update your system with `yum update` and reboot. This is optional, but recommended.

Follow the same steps as above, but replace `https://git.io/vpnsetup` with `https://git.io/vpnsetup-centos`.

## Next steps

Get your computer or device to use the VPN. Please refer to:

Configure IPsec/L @abstr_number TP VPN Clients   
Configure IPsec/XAuth ("Cisco IPsec") VPN Clients

How-To: IKEv @abstr_number VPN for Windows and Android

If you get an error when trying to connect, see Troubleshooting.

Enjoy your very own VPN! :sparkles::tada::rocket::sparkles:

## Important notes

_Read this in other languages: English, 简体中文._

For **Windows users** , this one-time registry change is required if the VPN server and/or client is behind NAT (e.g. home router).

The same VPN account can be used by your multiple devices. However, due to an IPsec/L @abstr_number TP limitation, if you wish to connect multiple devices simultaneously from behind the same NAT (e.g. home router), you must use only IPsec/XAuth mode. Also, your server must be running Libreswan @abstr_number . @abstr_number or above.

For servers with an external firewall (e.g. @abstr_hyperlink / @abstr_hyperlink ), open UDP ports @abstr_number and @abstr_number for the VPN.

If you wish to add, edit or remove VPN user accounts, see Manage VPN Users.

Clients are set to use @abstr_hyperlink when the VPN is active. If another DNS provider is preferred, replace `@abstr_number . @abstr_number . @abstr_number . @abstr_number` and `@abstr_number . @abstr_number . @abstr_number . @abstr_number` in both `/etc/ppp/options.xl @abstr_number tpd` and `/etc/ipsec.conf`. Then reboot your server.

To modify the IPTables rules after install, edit `/etc/iptables.rules` and/or `/etc/iptables/rules.v @abstr_number` (Ubuntu/Debian), or `/etc/sysconfig/iptables` (CentOS). Then reboot your server.

When connecting via `IPsec/L @abstr_number TP`, the VPN server has IP `@abstr_number . @abstr_number . @abstr_number . @abstr_number` within the VPN subnet `@abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number`.

The scripts will backup existing config files before making changes, with `.old-date-time` suffix.

## Upgrade Libreswan

The additional scripts vpnupgrade.sh and vpnupgrade_centos.sh can be used to upgrade @abstr_hyperlink ( @abstr_hyperlink | @abstr_hyperlink ). Edit the `swan_ver` variable as necessary. Check installed version: `ipsec --version`.

@abstr_code_section 

## Bugs & Questions

  * Got a question? Please first search other people's comments @abstr_hyperlink and @abstr_hyperlink .
  * Ask VPN related questions on the @abstr_hyperlink or @abstr_hyperlink mailing list, or read these wikis: @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink .
  * If you found a reproducible bug, open a @abstr_hyperlink to submit a bug report.



## Uninstallation

Please refer to Uninstall the VPN.

## See also

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## License

Copyright (C) @abstr_number - @abstr_number @abstr_hyperlink @abstr_hyperlink   
Based on @abstr_hyperlink (Copyright @abstr_number )

This work is licensed under the @abstr_hyperlink   
Attribution required: please include my name in any derivative and let me know how you have improved it!
