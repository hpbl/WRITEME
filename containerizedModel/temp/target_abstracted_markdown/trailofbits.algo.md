# Algo VPN

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Algo VPN is a set of Ansible scripts that simplify the setup of a personal IPSEC and Wireguard VPN. It uses the most secure defaults available, works with common cloud providers, and does not require client software on most devices. See our @abstr_hyperlink for more information.

## Features

  * Supports only IKEv @abstr_number with strong crypto (AES-GCM, SHA @abstr_number , and P- @abstr_number ) and @abstr_hyperlink 
  * Generates Apple profiles to auto-configure iOS and macOS devices
  * Includes a helper script to add and remove users
  * Blocks ads with a local DNS resolver (optional)
  * Sets up limited SSH users for tunneling traffic (optional)
  * Based on current versions of Ubuntu and strongSwan
  * Installs to DigitalOcean, Amazon Lightsail, Amazon EC @abstr_number , Vultr, Microsoft Azure, Google Compute Engine, Scaleway, OpenStack, or your own Ubuntu server



## Anti-features

  * Does not support legacy cipher suites or protocols like L @abstr_number TP, IKEv @abstr_number , or RSA
  * Does not install Tor, OpenVPN, or other risky servers
  * Does not depend on the security of @abstr_hyperlink 
  * Does not require client software on most platforms
  * Does not claim to provide anonymity or censorship avoidance
  * Does not claim to protect you from the @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , or @abstr_hyperlink 



## Deploy the Algo Server

The easiest way to get an Algo server running is to let it set up a _new_ virtual machine in the cloud for you.

@abstr_number . **Setup an account on a cloud hosting provider.** Algo supports @abstr_hyperlink (most user friendly), @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink or other OpenStack-based cloud hosting.

@abstr_number . **@abstr_hyperlink .** Unzip it in a convenient location on your local machine.

@abstr_number . **Install Algo's core dependencies.** Open the Terminal. The `python` interpreter you use to deploy Algo must be python @abstr_number . If you don't know what this means, you're probably fine. `cd` into the `algo-master` directory where you unzipped Algo, then run:
    
    
    - macOS:
       @abstr_code_section 
    - Linux (deb-based):
       @abstr_code_section 
     - Linux (rpm-based): See the pre-installation documentation for [RedHat/CentOS  @abstr_number .x](docs/deploy-from-redhat-centos @abstr_number .md) or [Fedora](docs/deploy-from-fedora-workstation.md)
     - Windows: See the [Windows documentation](docs/deploy-from-windows.md)
    

@abstr_number . **Install Algo's remaining dependencies.** Use the same Terminal window as the previous step and run: @abstr_code_section On macOS, you may be prompted to install `cc`. You should press accept if so.

@abstr_number . **List the users to create.** Open `config.cfg` in your favorite text editor. Specify the users you wish to create in the `users` list. If you want to be able to add or delete users later, you **must** select `yes` for the `Do you want to retain the CA key?` prompt during the deployment.

@abstr_number . **Start the deployment.** Return to your terminal. In the Algo directory, run `./algo` and follow the instructions. There are several optional features available. None are required for a fully functional VPN server. These optional features are described in greater detail in deploy-from-ansible.md.

That's it! You will get the message below when the server deployment process completes. You now have an Algo server on the internet. Take note of the p @abstr_number (user certificate) password and the CA key in case you need them later, **they will only be displayed this time**.

You can now setup clients to connect it, e.g. your iPhone or laptop. Proceed to Configure the VPN Clients below.

@abstr_code_section 

## Configure the VPN Clients

Certificates and configuration files that users will need are placed in the `configs` directory. Make sure to secure these files since many contain private keys. All files are saved under a subdirectory named with the IP address of your new Algo VPN server.

### Apple Devices

WireGuard is used to provide VPN services on Apple devices. Algo generates a WireGuard configuration file, `wireguard/<username>.conf`, and a QR code, `wireguard/<username>.png`, for each user defined in `config.cfg`.

On iOS, install the @abstr_hyperlink app from the iOS App Store. Then, use the WireGuard app to scan the QR code or AirDrop the configuration file to the device.

On macOS Mojave or later, install the @abstr_hyperlink app from the Mac App Store. WireGuard will appear in the menu bar once you run the app. Click on the WireGuard icon, choose **Import tunnel(s) from file...** , then select the appropriate WireGuard configuration file.

On either iOS or macOS, you can enable "Connect on Demand" and/or exclude certain trusted Wi-Fi networks (such as your home or work) by editing the tunnel configuration in the WireGuard app. (Algo can't do this automatically for you.)

Installing WireGuard is a little more complicated on older version of macOS. See Using macOS as a Client with WireGuard.

If you prefer to use the built-in IPSEC VPN on Apple devices, or need "Connect on Demand" or excluded Wi-Fi networks automatically configured, then see Using Apple Devices as a Client with IPSEC.

### Android Devices

WireGuard is used to provide VPN services on Android. Install the @abstr_hyperlink . Import the corresponding `wireguard/<name>.conf` file to your device, then setup a new connection with it. See the Android setup instructions for more detailed walkthrough.

### Windows @abstr_number

Copy your PowerShell script `windows_{username}.ps @abstr_number` to the Windows client and run the following command as Administrator to configure the VPN connection. @abstr_code_section 

For a manual installation, see the Windows setup instructions.

### Linux Network Manager Clients (e.g., Ubuntu, Debian, or Fedora Desktop)

Network Manager does not support AES-GCM. In order to support Linux Desktop clients, choose the "compatible" cryptography during the deploy process and use at least Network Manager @abstr_number . @abstr_number . @abstr_number . See @abstr_hyperlink for more information.

### Linux strongSwan Clients (e.g., OpenWRT, Ubuntu Server, etc.)

Install strongSwan, then copy the included ipsec_user.conf, ipsec_user.secrets, user.crt (user certificate), and user.key (private key) files to your client device. These will require customization based on your exact use case. These files were originally generated with a point-to-point OpenWRT-based VPN in mind.

#### Ubuntu Server example

@abstr_number . `sudo apt-get install strongswan libstrongswan-standard-plugins`: install strongSwan @abstr_number . `/etc/ipsec.d/certs`: copy `<name>.crt` from `algo-master/configs/<server_ip>/ipsec/manual/<name>.crt` @abstr_number . `/etc/ipsec.d/private`: copy `<name>.key` from `algo-master/configs/<server_ip>/ipsec/manual/<name>.key` @abstr_number . `/etc/ipsec.d/cacerts`: copy `cacert.pem` from `algo-master/configs/<server_ip>/ipsec/manual/cacert.pem` @abstr_number . `/etc/ipsec.secrets`: add your `user.key` to the list, e.g. `<server_ip> : ECDSA <name>.key` @abstr_number . `/etc/ipsec.conf`: add the connection from `ipsec_user.conf` and ensure `leftcert` matches the `<name>.crt` filename @abstr_number . `sudo ipsec restart`: pick up config changes @abstr_number . `sudo ipsec up <conn-name>`: start the ipsec tunnel @abstr_number . `sudo ipsec down <conn-name>`: shutdown the ipsec tunnel

One common use case is to let your server access your local LAN without going through the VPN. Set up a passthrough connection by adding the following to `/etc/ipsec.conf`:
    
    
    conn lan-passthrough
    leftsubnet= @abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number  # Replace with your LAN subnet
    rightsubnet= @abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number  # Replace with your LAN subnet
    authby=never # No authentication necessary
    type=pass # passthrough
    auto=route # no need to ipsec up lan-passthrough
    

To configure the connection to come up at boot time replace `auto=add` with `auto=start`.

### Other Devices

Depending on the platform, you may need one or multiple of the following files.

  * cacert.pem: CA Certificate
  * user.mobileconfig: Apple Profile
  * user.p @abstr_number : User Certificate and Private Key (in PKCS# @abstr_number format)
  * ipsec_user.conf: strongSwan client configuration
  * ipsec_user.secrets: strongSwan client configuration
  * windows_user.ps @abstr_number : Powershell script to help setup a VPN connection on Windows



## Setup an SSH Tunnel

If you turned on the optional SSH tunneling role, then local user accounts will be created for each user in `config.cfg` and SSH authorized_key files for them will be in the `configs` directory (user.ssh.pem). SSH user accounts do not have shell access, cannot authenticate with a password, and only have limited tunneling options (e.g., `ssh -N` is required). This ensures that SSH users have the least access required to setup a tunnel and can perform no other actions on the Algo server.

Use the example command below to start an SSH tunnel by replacing `user` and `ip` with your own. Once the tunnel is setup, you can configure a browser or other application to use @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number as a SOCKS proxy to route traffic through the Algo server.

`ssh -D @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number -f -q -C -N user@ip -i configs/<server_ip>/ssh-tunnel/<user>.pem`

## SSH into Algo Server

Your Algo server is configured for key-only SSH access for administrative purposes. Open the Terminal app, `cd` into the `algo-master` directory where you originally downloaded Algo, and then use the command listed on the success message:

`ssh -i configs/algo.pem user@ip`

where `user` is either `root` or `ubuntu` as listed on the success message, and `ip` is the IP address of your Algo server. If you find yourself regularly logging into the server then it will be useful to load your Algo ssh key automatically. Add the following snippet to the bottom of `~/.bash_profile` to add it to your shell environment permanently.

`ssh-add ~/.ssh/algo > /dev/null @abstr_number >& @abstr_number`

## Adding or Removing Users

_If you chose to save the CA key during the deploy process,_ then Algo's own scripts can easily add and remove users from the VPN server.

@abstr_number . Update the `users` list in your `config.cfg` @abstr_number . Open a terminal, `cd` to the algo directory, and activate the virtual environment with `source env/bin/activate` @abstr_number . Run the command: `./algo update-users`

After this process completes, the Algo VPN server will contain only the users listed in the `config.cfg` file.

## Additional Documentation

  * Deployment instructions, cloud provider setup instructions, and further client setup instructions available here.
  * FAQ
  * Troubleshooting



If you read all the documentation and have further questions, @abstr_hyperlink .

## Endorsements

> I've been ranting about the sorry state of VPN svcs for so long, probably about time to give a proper talk on the subject. TL;DR: use Algo.

\-- @abstr_hyperlink 

> Before picking a VPN provider/app, make sure you do some research https://research.csiro.au/ng/wp-content/uploads/sites/ @abstr_number / @abstr_number / @abstr_number /paper- @abstr_number .pdf ... – or consider Algo

\-- @abstr_hyperlink 

> Algo is really easy and secure.

\-- @abstr_hyperlink 

> I played around with Algo VPN, a set of scripts that let you set up a VPN in the cloud in very little time, even if you don’t know much about development. I’ve got to say that I was quite impressed with Trail of Bits’ approach.

\-- @abstr_hyperlink for @abstr_hyperlink 

> If you’re uncomfortable shelling out the cash to an anonymous, random VPN provider, this is the best solution.

\-- @abstr_hyperlink for @abstr_hyperlink 

## Support Algo VPN

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

All donations support continued development. Thanks!

  * We accept donations via @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink .
  * Use our @abstr_hyperlink when you sign up to Digital Ocean for a $ @abstr_number credit.
  * We also accept and appreciate contributions of new code and bugfixes via Github Pull Requests.



Algo is licensed and distributed under the AGPLv @abstr_number . If you want to distribute a closed-source modification or service based on Algo, then please consider @abstr_hyperlink . As with the methods above, this will help support continued development.
