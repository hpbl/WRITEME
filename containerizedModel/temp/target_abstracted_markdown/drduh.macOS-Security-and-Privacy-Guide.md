This guide is a collection of techniques for improving the security and privacy of a modern Apple Macintosh computer ("MacBook") and macOS (formerly known as "OS X").

This guide is targeted to “power users” who wish to adopt enterprise-standard security, but is also suitable for novice users with an interest in improving their privacy and security on a Mac.

A system is only as secure as its administrator is capable of making it. There is no one single technology, software, nor technique to guarantee perfect computer security; a modern operating system and computer is very complex, and requires numerous incremental changes to meaningfully improve one's security and privacy posture.

This guide is provided on an 'as is' basis without any warranties of any kind. Only **you** are responsible if you break anything or get in any sort of trouble by following this guide.

To suggest an improvement, please send a pull request or @abstr_hyperlink .

This guide is also available in @abstr_hyperlink .

  * Basics
  * Preparing and installing macOS 
    * Verifying installation integrity
    * Creating a bootable USB installer
    * Creating an install image
    * Manual way
    * Target disk mode
    * Creating a recovery partition
    * Virtualization
  * First boot
  * System activation
  * Admin and standard user accounts 
    * Caveats
    * Setup
  * Full disk encryption
  * Firmware
  * Firewall 
    * Application layer firewall
    * Third party firewalls
    * Kernel level packet filtering
  * Services
  * Spotlight Suggestions
  * Homebrew
  * DNS 
    * Hosts file
    * dnscrypt
    * Dnsmasq 
      * Test DNSSEC validation
  * Captive portal
  * Certificate authorities
  * OpenSSL
  * Curl
  * Web 
    * Privoxy
    * Browser
    * Chrome
    * Firefox
    * Safari
    * Other Web browsers
    * Web browsers and privacy
    * Plugins
  * PGP/GPG
  * OTR
  * Tor
  * VPN
  * Viruses and malware
  * System Integrity Protection
  * Gatekeeper and XProtect
  * Metadata and artifacts
  * Passwords
  * Backup
  * Wi-Fi
  * SSH
  * Physical access
  * System monitoring 
    * OpenBSM audit
    * DTrace
    * Execution
    * Network
  * Binary Whitelisting
  * Miscellaneous
  * Related software
  * Additional resources



## Basics

Standard security best practices apply:

  * Create a @abstr_hyperlink 

    * What are you trying to protect and from whom? Is your adversary a @abstr_hyperlink (if so, you may want to consider using @abstr_hyperlink instead); a nosy eavesdropper on the network; or a determined @abstr_hyperlink orchestrating a campaign against you?
    * @abstr_hyperlink and how to reduce attack surface against them.
  * Keep the system up to date

    * Patch the base operating system and all third party software.
    * macOS system updates can be completed using the App Store application, or the `softwareupdate` command-line utility - neither requires registering an Apple account. Updates can also be downloaded directly from Apple's support site.
    * Subscribe to announcement mailing lists like @abstr_hyperlink .
  * Encrypt sensitive data at rest

    * In addition to full disk encryption, consider creating one or several encrypted partitions or volumes to store passwords, cryptographic keys, personal documents, etc. at rest.
    * This will mitigate damage in case of compromise and data exfiltration.
  * Assure data availability

    * Create @abstr_hyperlink of your data and be ready to format and re-install the operating system in case of compromise.
    * Always encrypt locally before copying backups to external media or the "cloud".
    * Verify backups work by testing them regularly, for example by accessing certain files or performing a hash based comparison.
  * Click carefully

    * Ultimately, the security of a system can be reduced to its administrator.
    * Care should be taken when installing new software. Always prefer @abstr_hyperlink and open source software ( @abstr_hyperlink ).



## Preparing and installing macOS

There are several ways to install macOS.

The simplest way is to boot into @abstr_hyperlink by holding `Command` and `R` keys at boot. A system image can be downloaded and applied directly from Apple. However, this way exposes the serial number and other identifying information over the network in plaintext, which may not be desired for privacy reasons.

@abstr_image 

_Packet capture of an unencrypted HTTP conversation during macOS recovery_

An alternative way to install macOS is to first download **macOS Mojave** from the @abstr_hyperlink or elsewhere, and create a custom installable system image.

### Verifying installation integrity

The macOS installation application is @abstr_hyperlink , which should be verified to make sure you received a legitimate copy, using the `pkgutil --check-signature` or `codesign -dvv` commands.

To verify the code signature and integrity of macOS application bundles:

@abstr_code_section 

Use the `codesign` command to examine an application's code signature:

@abstr_code_section 

### Creating a bootable USB installer

Instead of booting from the network or using target disk mode, a bootable macOS installer can be made with the `createinstallmedia` utility included in `Contents/Resources` folder of the installer application bundle. See @abstr_hyperlink , or run the utility without arguments to see how it works.

To create a **bootable USB installer** , mount a USB drive, and erase and partition it, then use the `createinstallmedia` utility:

@abstr_code_section 

### Creating an install image

**Note** Apple's AutoDMG installer @abstr_hyperlink across OS versions. If you want to build a @abstr_number . @abstr_number image, for example, the following steps must be performed on macOS @abstr_number . @abstr_number !

To create a **custom install image** which can be @abstr_hyperlink to a Mac (using a USB-C cable and target disk mode, for example), use @abstr_hyperlink .

#### Manual way

**Note** The following instructions appear to work only on macOS versions before @abstr_number . @abstr_number .

Find `InstallESD.dmg` which is inside the installation application. Locate it in Terminal or with Finder, right click on the application bundle, select **Show Package Contents** and navigate to **Contents** > **SharedSupport** to find the file `InstallESD.dmg`

Before continuing, @abstr_hyperlink the file's integrity by comparing its SHA- @abstr_number hash with others found in @abstr_hyperlink . To determine which macOS versions and builds originally shipped with or are available for a Mac, see @abstr_hyperlink .

@abstr_code_section 

Mount and install the operating system to a temporary image:

@abstr_code_section 

The installation will take a while, so be patient. Use `tail -F /var/log/install.log` in another terminal to monitor progress and check for errors.

Once the installation is complete, detach, convert and verify the image:

@abstr_code_section 

The file `sierra.dmg` is now ready to be applied over @abstr_hyperlink , from a bootable USB installer, booting from the network or recovery mode. The image could be futher customized to include provisioned users, installed applications, preferences, for example.

### Target disk mode

To use **Target Disk Mode** , boot up the Mac you wish to image while holding the `T` key and connect it to another Mac using a USB-C, Thundrbolt or Firewire cable.

If you don't have another Mac, boot to a USB installer, with `sierra.dmg` and other required files copied to it, by holding the _Option_ key at boot.

Use the command `diskutil list` to identify the disk of the connected Mac, usually `/dev/disk @abstr_number`

Optionally, @abstr_hyperlink the disk with a single pass (if previously FileVault-encrypted, the disk must first be unlocked and mounted as `/dev/disk @abstr_number s @abstr_number`):
    
    
    $ sudo diskutil secureErase freespace  @abstr_number  /dev/disk @abstr_number s @abstr_number
    

Partition the disk to Journaled HFS+:

@abstr_code_section 

Restore the image to the new volume, making sure `/dev/disk @abstr_number` is the disk being erased:

@abstr_code_section 

The **Disk Utility** application may also be used to erase the connected disk and restore `sierra.dmg` to the newly created partition.

To transfer any files, copy them to a shared folder like `/Users/Shared` on the mounted disk image, e.g. `cp Xcode_ @abstr_number . @abstr_number .dmg /Volumes/macOS/Users/Shared`

@abstr_image 

_Finished restore install from USB recovery boot_

### Creating a recovery partition

**Unless** you have built the image with @abstr_hyperlink , or installed macOS to a second partition on the same Mac, you will need to create a recovery partition in order to use full disk encryption. You can do so using @abstr_hyperlink or manually by following these steps:

Download @abstr_hyperlink and verify its integrity:

@abstr_code_section 

Attach and expand the installer, then run it - again ensuring `/Volumes/macOS` path is the newly created partition on the connected disk:

@abstr_code_section 

Run `diskutil list` again to make sure `Recovery HD` now exists on `/dev/disk @abstr_number`. Eject the disk with `hdiutil unmount /Volumes/macOS` and power down the target disk mode-booted Mac.

### Virtualization

To install macOS as a virtual machine (vm) using @abstr_hyperlink , follow the instructions above to create an image. You will **not** need to download and create a recovery partition manually.

For the Installation Method, select _Install macOS from the recovery partition_. Customize any memory or CPU requirements and complete setup. The guest vm should boot into @abstr_hyperlink by default.

**Note** If the virtual machine does not boot due to a kernel panic, adjust the memory and process resource settings.

In Recovery Mode, select a language, then select Utilities > Terminal from the menubar.

In the guest vm, type `ifconfig | grep inet` \- you should see a private address like `@abstr_number . @abstr_number . @abstr_number . @abstr_number`

On the host Mac, type `ifconfig | grep inet` \- you should see a private gateway address like `@abstr_number . @abstr_number . @abstr_number . @abstr_number`. From the host Mac, you should be able to `ping @abstr_number . @abstr_number . @abstr_number . @abstr_number` or the equivalent guest vm address.

From the host Mac, serve the installable image to the guest vm by editing `/etc/apache @abstr_number /httpd.conf` and adding the following line to the top (using the gateway address assigned to the host Mac and port @abstr_number ):
    
    
    Listen  @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number
    

On the host Mac, link the image to the default Apache Web server directory:
    
    
    $ sudo ln ~/sierra.dmg /Library/WebServer/Documents
    

From the host Mac, start Apache in the foreground:
    
    
    $ sudo httpd -X
    

From the guest VM, install the disk image to the volume over the local network using `asr`:

@abstr_code_section 

When it's finished, stop the Apache Web server on the host Mac by pressing `Control` `C` at the `sudo httpd -X` window and remove the image copy with `sudo rm /Library/WebServer/Documents/sierra.dmg`

In the guest vm, select _Startup Disk_ from the menubar top-left, select the hard drive and restart. You may wish to disable the Network Adapter in VMware to configure the guest vm initially.

Take and Restore from saved guest vm snapshots before and after attempting risky browsing, for example, or use a guest vm to install and operate questionable software.

## First boot

**Note** Before setting up macOS, consider disconnecting networking and configuring a firewall(s) first. However, @abstr_hyperlink with Touch Bar hardware @abstr_hyperlink (also see next section).

On first boot, hold `Command` `Option` `P` `R` keys to @abstr_hyperlink .

When macOS first starts, you'll be greeted by **Setup Assistant**.

When creating the first account, use a @abstr_hyperlink without a hint.

If you enter your real name at the account setup process, be aware that your @abstr_hyperlink will comprise that name (e.g., _John Appleseed's MacBook_ ) and thus will appear on local networks and in various preference files.

Both should be verified and updated as needed in **System Preferences > Sharing** or with the following commands after installation:
    
    
    $ sudo scutil --set ComputerName MacBook
    $ sudo scutil --set LocalHostName MacBook
    

## System activation

A few words on the privacy implications of activating "Touch Bar" MacBook devices from your friendly anonymous security researcher:

> Apple increasingly seems (despite vague claims to the contrary) increasingly interested in merging or "unifying" the two OSes, and there are constantly rumors of fundamental changes to macOS that make it far more like iOS than the macOS of old. Apple's introduction of ARM-based coprocessors running iOS/sepOS, first with the T @abstr_number processor on the TouchBar MacBook Pros (run the TouchBar, implement NFC/ApplePay, add biometric login using sep, and verify firmware integrity) and the iMac Pro's T @abstr_number (implements/verifies embedded device firmware, implements secure boot, etc) seems to cement this concern and basically renders using macOS devices without sending metadata to Apple difficult to impossible.
> 
> iOS devices have always required "activation" on first boot and when the battery has gone dead which initializes sepOS to proceed with verified boot. First boot activation not only initializes sepOS as discussed below, but sends metadata to Apple (and carriers via Apple with cellular devices) to activate the baseband and SIM. In activation processes after first boot, just as with first boot, a long list of highly sensitive metadata are sent hashed (note hashing does not give you any privacy from Apple here since they link this exact metadata to payment information at purchase) to Apple so it can return the personalized response required for secure boot to complete. What is particularly worrying about this process is that it is a network-linked secure boot process where centralized external servers have the power to dictate what the device should boot. Equally there are significant privacy concerns with devices constantly sending metadata (both during activation and other Apple-linked/-hosted activities) and linking IP addresses very strongly with real identities based on purchase payment information and if a cellular device, metadata collected about SIM, etc unless such connections are blocked at the network level (which is only possible on self-managed infrastructure, i.e. not cellular) and doing this basically renders using the device impossible since simply installing an application requires sending device metadata to Apple.
> 
> That the activation verification mechanism is designed specifically to rely on unique device identifiers that are associated with payment information at purchase and actively associated on a continuing basis by Apple for every Apple-hosted service that the device interacts with (Apple ID-based services, softwareupdate, iMessage, FaceTime, etc.) the ability (and invitation) for Apple to silently send targeted malicious updates to devices matching specific unique ID criteria is a valid concern, and something that should not be dismissed as unlikely, especially given Apple's full compliance with recently implemented Chinese (and other authoritarian and "non-authoritarian" countries') national security laws.
> 
> iOS has from the start been designed with very little end-user control with no way for end-users to configure devices according to their wishes while maintaining security and relies heavily on new, closed source code. While macOS has for most of its history been designed on the surface in a similar fashion, power and enterprise users can (for the moment) still configure their devices relatively securely while maintaining basically zero network interaction with Apple and with the installation of third party software/kernel extensions, completely control the network stack and intercept filesystem events on a per-process basis. macOS, despite having a good deal of closed source code, was designed at a very different period in Apple's history and was designed more in line with open source standards, and designed to be configurable and controllable by enterprise/power users.
> 
> The introduction of these coprocessors to Mac devices, while increasing security in many ways, brings with it all the issues with iOS discussed above, and means that running mac devices securely with complete user control, and without forced network interaction with the Apple mothership in highly sensitive corporate and other environments problematic and risky. Given this author is unaware of the exact hardware configuration of the coprocessors, the following may be inaccurate. However, given the low-level nature of these coprocessors, it would not surprise the author if these coprocessors, if not already, will eventually have separate network access of their own, independent of the Intel CPU (indications suggest not currently the case for T @abstr_number ; unclear on T @abstr_number ), which leads to concerns similar to those that many have raised around Intel ME/AMT (and of course mac devices also have ME in the Intel CPU...). One could argue that these coprocessors increase security, and in many ways that is the case, but not the user's security against a malicious Apple.
> 
> The lack of configurability is the key issue. Apple could have introduced secure boot and firmware protection without making it require network access, without making verification linked to device-unique IDs and without introducing an enormous amount of potentially exploitable code to protect against a much smaller, but highly exploitable codebase, while running on a coprocessor with a highly privileged position on the board which gives immense power to an adversary with manufacturer compliance for targeted attacks.
> 
> This is an ongoing concern and in the worst case scenario could potentially represent the end of macs as independent, end-user controllable and relatively secure systems appropriate for sensitive environments with strict network and security policies.

From @abstr_hyperlink .

## Admin and standard user accounts

The first user account is always an admin account. Admin accounts are members of the admin group and have access to `sudo`, which allows them to usurp other accounts, in particular root, and gives them effective control over the system. Any program that the admin executes can potentially obtain the same access, making this a security risk.

Utilities like `sudo` have @abstr_hyperlink by concurrently running programs and many panes in System Preferences are @abstr_hyperlink (pdf) (p. @abstr_number – @abstr_number ) for admin accounts.

It is considered a best practice by @abstr_hyperlink and @abstr_hyperlink (pdf) (p. @abstr_number – @abstr_number ) to use a separate standard account for day-to-day work and use the admin account for installations and system configuration.

It is not strictly required to ever log into the admin account via the macOS login screen. The system will prompt for authentication when required and Terminal can do the rest. To that end, Apple provides some @abstr_hyperlink for hiding the admin account and its home directory. This can be an elegant solution to avoid having a visible 'ghost' account. The admin account can also be @abstr_hyperlink for additional hardening.

### Caveats

  * Only administrators can install applications in `/Applications` (local directory). Finder and Installer will prompt a standard user with an authentication dialog. Many applications can be installed in `~/Applications` instead (the directory can be created manually). As a rule of thumb: applications that do not require admin access – or do not complain about not being installed in `/Applications` – should be installed in the user directory, the rest in the local directory. Mac App Store applications are still installed in `/Applications` and require no additional authentication.
  * `sudo` is not available in shells of the standard user, which requires using `su` or `login` to enter a shell of the admin account. This can make some maneuvers trickier and requires some basic experience with command-line interfaces.
  * System Preferences and several system utilities (e.g. Wi-Fi Diagnostics) will require root privileges for full functionality. Many panels in System Preferences are locked and need to be unlocked separately by clicking on the lock icon. Some applications will simply prompt for authentication upon opening, others must be opened by an admin account directly to get access to all functions (e.g. Console).
  * There are third-party applications that will not work correctly because they assume that the user account is an admin. These programs may have to be executed by logging into the admin account, or by using the `open` utility.
  * See additional discussion in @abstr_hyperlink .



### Setup

Accounts can be created and managed in System Preferences. On settled systems, it is generally easier to create a second admin account and then demote the first account. This avoids data migration. Newly installed systems can also just add a standard account.

Demoting an account can be done either from the the new admin account in System Preferences – the other account must be logged out – or by executing these commands (it may not be necessary to execute both, see @abstr_hyperlink ):

@abstr_code_section 

You can find the “GeneratedUID” of an account with:

@abstr_code_section 

See also @abstr_hyperlink for more information about how macOS determines group membership.

## Full disk encryption

@abstr_hyperlink provides full disk (technically, full _volume_) encryption on macOS.

FileVault encryption protects data at rest and hardens (but @abstr_hyperlink ) someone with physical access from stealing data or tampering with your Mac.

With much of the cryptographic operations happening @abstr_hyperlink , the performance penalty for FileVault is not noticeable.

Like all cryptosystems, the security of FileVault greatly depends on the quality of the pseudo random number generator (PRNG).

> The random device implements the Yarrow pseudo random number generator algorithm and maintains its entropy pool. Additional entropy is fed to the generator regularly by the SecurityServer daemon from random jitter measurements of the kernel.

See `man @abstr_number random` for more information.

Turning on FileVault in System Preferences **after** installing macOS, rather than creating an encrypted partition for the installation first, is @abstr_hyperlink , because more PRNG entropy is available then.

Additionally, the PRNG can be manually seeded with entropy by writing to /dev/random **before** enabling FileVault. This can be done by simply using the Mac for a little while before activating FileVault.

It may also be possible to increase entropy with an external source, like @abstr_hyperlink . See @abstr_hyperlink and @abstr_hyperlink for more information.

Enable FileVault with `sudo fdesetup enable` or through **System Preferences** > **Security & Privacy** and reboot.

If you can remember the password, there's no reason to save the **recovery key**. However, all encrypted data will be lost forever if without either the password or recovery key.

To learn about how FileVault works, see the paper @abstr_hyperlink (pdf) and related @abstr_hyperlink (pdf). Also see @abstr_hyperlink (pdf).

**Optional** Enforce system hibernation and evict FileVault keys from memory instead of traditional sleep to memory:

@abstr_code_section 

> All computers have firmware of some type—EFI, BIOS—to help in the discovery of hardware components and ultimately to properly bootstrap the computer using the desired OS instance. In the case of Apple hardware and the use of EFI, Apple stores relevant information within EFI to aid in the functionality of macOS. For example, the FileVault key is stored in EFI to transparently come out of standby mode.
> 
> Organizations especially sensitive to a high-attack environment, or potentially exposed to full device access when the device is in standby mode, should mitigate this risk by destroying the FileVault key in firmware. Doing so doesn’t destroy the use of FileVault, but simply requires the user to enter the password in order for the system to come out of standby mode.

If you choose to evict FileVault keys in standby mode, you should also modify your standby and power nap settings. Otherwise, your machine may wake while in standby mode and then power off due to the absence of the FileVault key. See @abstr_hyperlink for more information. These settings can be changed with:

@abstr_code_section 

For more information, see @abstr_hyperlink (pdf) and paper @abstr_hyperlink (pdf)

**Note** APFS may make evicting FV keys redundant - see discussion and links in @abstr_hyperlink .

## Firmware

Setting a firmware password prevents a Mac from starting up from any device other than the startup disk. It may also be set to be required on each boot. This may be useful for mitigating some attacks which require physical access to hardware. See @abstr_hyperlink for official documentation.

This feature @abstr_hyperlink , protects against Direct Memory Access (DMA) attacks which can read your FileVault passwords and inject kernel modules such as @abstr_hyperlink , as the only way to reset the firmware password is through an Apple Store, or by using an @abstr_hyperlink , such as @abstr_hyperlink or other flash IC programmer.

@abstr_number . Start up pressing `Command` and `R` keys to boot to @abstr_hyperlink mode. @abstr_number . When the Recovery window appears, choose **Firmware Password Utility** from the Utilities menu. @abstr_number . In the Firmware Utility window that appears, select **Turn On Firmware Password**. @abstr_number . Enter a new password, then enter the same password in the **Verify** field. @abstr_number . Select **Set Password**. @abstr_number . Select **Quit Firmware Utility** to close the Firmware Password Utility. @abstr_number . Select Restart or Shutdown from the Apple menu in the top-left corner.

The firmware password will activate at next boot. To validate the password, hold `Alt` during boot - you should be prompted to enter the password.

The firmware password can also be managed with the `firmwarepasswd` utility while booted into the OS. For example, to prompt for the firmware password when attempting to boot from a different volume:

@abstr_code_section 

To verify the firmware password:

@abstr_code_section 

Note, a firmware password may be bypassed by a determined attacker or Apple, with physical access to the computer.

@abstr_image 

_Using a @abstr_hyperlink to dump and flash a @abstr_number MacBook SPI Flash chip to remove a firmware password, sans Apple_

Newer Mac models (Mac Pro, iMac Pro, Macbook with TouchBar) with @abstr_hyperlink chips, which provide a secure enclave for encrypted keys, lessen the risk of EFI firmware attacks. See @abstr_hyperlink for more information.

See @abstr_hyperlink , @abstr_hyperlink and discussion in @abstr_hyperlink for more information.

## Firewall

There are several types of firewalls available for macOS which should be enabled.

### Application layer firewall

Built-in, basic firewall which blocks **incoming** connections only. This firewall does not have the ability to monitor, nor block **outgoing** connections.

It can be controlled by the **Firewall** tab of **Security & Privacy** in **System Preferences** , or with the following commands.

Enable the firewall with logging and stealth mode:

@abstr_code_section 

> Computer hackers scan networks so they can attempt to identify computers to attack. You can prevent your computer from responding to some of these scans by using **stealth mode**. When stealth mode is enabled, your computer does not respond to ICMP ping requests, and does not answer to connection attempts from a closed TCP or UDP port. This makes it more difficult for attackers to find your computer.

To prevent _built-in software_ as well as _code-signed, downloaded software from being whitelisted automatically_ :

@abstr_code_section 

> Applications that are signed by a valid certificate authority are automatically added to the list of allowed apps, rather than prompting the user to authorize them. Apps included in macOS are signed by Apple and are allowed to receive incoming connections when this setting is enabled. For example, since iTunes is already signed by Apple, it is automatically allowed to receive incoming connections through the firewall.
> 
> If you run an unsigned app that is not listed in the firewall list, a dialog appears with options to Allow or Deny connections for the app. If you choose "Allow", macOS signs the application and automatically adds it to the firewall list. If you choose "Deny", macOS adds it to the list but denies incoming connections intended for this app.

After interacting with `socketfilterfw`, restart the process by sending a line hangup signal:

@abstr_code_section 

### Third party firewalls

Programs such as @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink provide a good balance of usability and security.

These programs are capable of monitoring and blocking **incoming** and **outgoing** network connections. However, they may require the use of a closed source @abstr_hyperlink .

If the number of choices of allowing/blocking network connections is overwhelming, use **Silent Mode** with connections allowed, then periodically check the configuration to gain understanding of applications and what they are doing.

It is worth noting that these firewalls can be bypassed by programs running as **root** or through @abstr_hyperlink (pdf), but they are still worth having - just don't expect absolute protection. However, some malware actually @abstr_hyperlink and doesn't execute if Little Snitch, or other security software, is installed.

For more on how Little Snitch works, see the @abstr_hyperlink and @abstr_hyperlink .

### Kernel level packet filtering

A highly customizable, powerful, but also most complicated firewall exists in the kernel. It can be controlled with `pfctl` and various configuration files.

pf can also be controlled with a GUI application such as @abstr_hyperlink or @abstr_hyperlink .

There are many books and articles on the subject of pf firewall. Here's is just one example of blocking traffic by IP address.

Add the following into a file called `pf.rules`, modifying `en @abstr_number` to be your outbound network adapter:

@abstr_code_section 

Then use the following commands to manipulate the firewall:

  * `sudo pfctl -e -f pf.rules` to enable the firewall
  * `sudo pfctl -d` to disable the firewall
  * `sudo pfctl -t blocklist -T add @abstr_number . @abstr_number . @abstr_number . @abstr_number` to an IP address to the blocklist
  * `sudo pfctl -t blocklist -T show` to view the blocklist
  * `sudo ifconfig pflog @abstr_number create` to create an interface for logging
  * `sudo tcpdump -ni pflog @abstr_number` to view the filtered packets.



Unless you're already familiar with packet filtering, spending too much time configuring pf is not recommended. It is also probably unnecessary if your Mac is behind a @abstr_hyperlink on a secure home network.

It is possible to use the pf firewall to block network access to entire ranges of network addresses, for example to a whole organization:

Query @abstr_hyperlink for the list of networks in use by an autonomous system, like @abstr_hyperlink :
    
    
    $ whois -h whois.radb.net '!gAS @abstr_number '
    

Copy and paste the list of networks returned into the blocklist command:
    
    
    $ sudo pfctl -t blocklist -T add  @abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number   @abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number   @abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number
    

Confirm the addresses were added:

@abstr_code_section 

Confirm network traffic is blocked to those addresses (note that DNS requests will still work):

@abstr_code_section 

Outgoing TCP SYN packets are blocked, so a TCP connection is not established and thus a Web site is effectively blocked at the IP layer.

To use pf to audit "phone home" behavior of user and system-level processes, see @abstr_hyperlink . See @abstr_hyperlink for more inspiration.

## Services

**Note** @abstr_hyperlink does not allow disabling system services on recent macOS versions. Either temporarily disable SIP or disable services from Recovery Mode.

See @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink for further recommendations.

Services on macOS are managed by **launchd**. See @abstr_hyperlink , as well as @abstr_hyperlink and @abstr_hyperlink 

You can also run @abstr_hyperlink that shows more information about startup items.

  * Use `launchctl list` to view running user agents
  * Use `sudo launchctl list` to view running system daemons
  * Specify the service name to examine it, e.g. `launchctl list com.apple.Maps.mapspushd`
  * Use `defaults read` to examine job plists in `/System/Library/LaunchDaemons` and `/System/Library/LaunchAgents`
  * Use `man`, `strings` and Google to learn about what the agent/daemon runs



For example, to learn what a system launch daemon or agent does, start with:

@abstr_code_section 

Look at the `Program` or `ProgramArguments` section to see which binary is run, in this case `apsd`. To find more information about that, look at the man page with `man apsd`

For example, if you're not interested in Apple Push Notifications, disable the service:

@abstr_code_section 

**Note** Unloading services may break usability of some applications. Read the manual pages and use Google to make sure you understand what you're doing first.

Be careful about disabling any system daemons you don't understand, as it may render your system unbootable. If you break your Mac, use @abstr_hyperlink to fix it.

Use @abstr_hyperlink and @abstr_hyperlink applications if you notice your Mac heating up, feeling sluggish, or generally misbehaving, as it may have resulted from your tinkering.

To view the status of services:

@abstr_code_section 

Annotated lists of launch daemons and agents, the respective program executed, and the programs' hash sums are included in this repository.

**(Optional)** Run the `read_launch_plists.py` script and `diff` output to check for any discrepancies on your system, e.g.:

@abstr_code_section 

See also @abstr_hyperlink for descriptions of services and @abstr_hyperlink for another explanation.

Persistent login items may also exist in these directories:

  * `/Library/LaunchAgents`
  * `/Library/LaunchDaemons`
  * `/Library/ScriptingAdditions`
  * `/Library/StartupItems`
  * `/System/Library/LaunchAgents`
  * `/System/Library/LaunchDaemons`
  * `/System/Library/ScriptingAdditions`
  * `/System/Library/StartupItems`
  * `~/Library/LaunchAgents`
  * `~/Library/Preferences/com.apple.loginitems.plist`



See @abstr_hyperlink (pdf) for more information.

## Spotlight Suggestions

Disable **Spotlight Suggestions** in both the Spotlight preferences and Safari's Search preferences to avoid your search queries being sent to Apple.

Also disable **Bing Web Searches** in the Spotlight preferences to avoid your search queries being sent to Microsoft.

See @abstr_hyperlink for detailed instructions.

> If you've upgraded to OS X @abstr_number . @abstr_number "Yosemite" and you're using the default settings, each time you start typing in Spotlight (to open an application or search for a file on your computer), your local search terms and location are sent to Apple and third parties (including Microsoft).

**Note** This Web site and instructions may no longer work on macOS Sierra - see @abstr_hyperlink .

For comparison to Windows @abstr_number , see 

## Homebrew

Consider using @abstr_hyperlink to make software installations easier and to update userland tools (see @abstr_hyperlink ).

**Note** If you have not already installed Xcode or Command Line Tools, use `xcode-select --install` to download and install them, or check Apple's developer site.

@abstr_hyperlink :

@abstr_code_section 

Edit `PATH` in your shell or shell rc file to use `~/homebrew/bin` and `~/homebrew/sbin`. For example, `echo 'PATH=$PATH:~/homebrew/sbin:~/homebrew/bin' >> .zshrc`, then change your login shell to Z shell with `chsh -s /bin/zsh`, open a new Terminal window and run `brew update`.

Homebrew uses SSL/TLS to talk with GitHub and verifies integrity of downloaded packages, so it's @abstr_hyperlink .

Remember to periodically run `brew update` and `brew upgrade` on trusted and secure networks to download and install software updates. To get information on a package before installation, run `brew info <package>` and check its recipe online.

According to @abstr_hyperlink , Homebrew gathers anonymous aggregate user behaviour analytics and reporting these to Google Analytics.

To opt out of Homebrew's analytics, you can set `export HOMEBREW_NO_ANALYTICS= @abstr_number` in your environment or shell rc file, or use `brew analytics off`.

You may also wish to enable @abstr_hyperlink , such as `HOMEBREW_NO_INSECURE_REDIRECT= @abstr_number` and `HOMEBREW_CASK_OPTS=--require-sha`.

## DNS

#### Hosts file

Use the @abstr_hyperlink to block known malware, advertising or otherwise unwanted domains.

Edit the hosts file as root, for example with `sudo vi /etc/hosts`. The hosts file can also be managed with the GUI app @abstr_hyperlink .

To block a domain `A` record, append any one of the following lines to `/etc/hosts`:

@abstr_code_section 

**Note** IPv @abstr_number uses the `AAAA` DNS record type, rather than `A` record type, so you may also want to block those connections by _also_ including `:: @abstr_number example.com` entries, like shown @abstr_hyperlink .

There are many lists of domains available online which you can paste in, just make sure each line starts with `@abstr_number`, `@abstr_number . @abstr_number . @abstr_number . @abstr_number`, `@abstr_number . @abstr_number . @abstr_number . @abstr_number`, and the line `@abstr_number . @abstr_number . @abstr_number . @abstr_number localhost` is included.

For hosts lists, see @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

Append a list of hosts with the `tee` command and confirm only non-routable addresses or comments were added:

@abstr_code_section 

See `man hosts` and @abstr_hyperlink for more information.

See the dnsmasq section of this guide for more hosts blocking options.

#### dnscrypt

To encrypt outgoing DNS traffic, consider using @abstr_hyperlink . In combination with dnsmasq and DNSSEC, the integrity and authenticity of DNS traffic is greatly improved.

@abstr_hyperlink and @abstr_hyperlink provide a graphical user interface to dnscrypt.

Install dnscrypt from Homebrew and follow the instructions to configure and start `dnscrypt-proxy`:

@abstr_code_section 

If using in combination with Dnsmasq, find the file `homebrew.mxcl.dnscrypt-proxy.plist` by running

@abstr_code_section 

which will show a location like `/usr/local/etc/dnscrypt-proxy.toml`

Open it in a text editor, find the line starting with `listen_addresses =` and edit that line to use DNScrypt on a port other than @abstr_number , like @abstr_number :

@abstr_code_section 

Start DNSCrypt:

@abstr_code_section 

Make sure DNSCrypt is running:

@abstr_code_section 

> By default, dnscrypt-proxy runs on localhost ( @abstr_number . @abstr_number . @abstr_number . @abstr_number ), port @abstr_number , and under the "nobody" user using the resolvers specified in https://raw.githubusercontent.com/DNSCrypt/dnscrypt-resolvers/master/v @abstr_number /public-resolvers.md. If you would like to change these settings, you will have to edit the configuration file (e.g. listen_addresses, user_name, urls, etc.)

This can be accomplished by editing `/usr/local/etc/dnscrypt-proxy.toml` as described above.

You can run your own @abstr_hyperlink (see also @abstr_hyperlink ) from a trusted location or use one of many @abstr_hyperlink instead.

Confirm outgoing DNS traffic is encrypted:

@abstr_code_section 

dnscrypt-proxy also has the capability to blacklist domains, including the use of wildcards. See the @abstr_hyperlink for the options.

**Note** Applications and programs may resolve DNS using their own provided servers. If dnscrypt-proxy is used, it is possible to disable all other, non-dnscrypt DNS traffic with the following pf rules:

@abstr_code_section 

See also @abstr_hyperlink , the @abstr_hyperlink and @abstr_hyperlink .

#### Dnsmasq

Among other features, @abstr_hyperlink is able to cache replies, prevent upstreaming queries for unqualified names, and block entire TLDs.

Use in combination with DNSCrypt to additionally encrypt outgoing DNS traffic.

If you don't wish to use DNSCrypt, you should at least use DNS @abstr_hyperlink @abstr_hyperlink . Two popular alternatives are @abstr_hyperlink and @abstr_hyperlink .

**(Optional)** @abstr_hyperlink is a set of extensions to DNS which provide to DNS clients (resolvers) origin authentication of DNS data, authenticated denial of existence, and data integrity. All answers from DNSSEC protected zones are digitally signed. The signed records are authenticated via a chain of trust, starting with a set of verified public keys for the DNS root-zone. The current root-zone trust anchors may be downloaded @abstr_hyperlink . There are a number of resources on DNSSEC, but probably the best one is @abstr_hyperlink .

Install Dnsmasq (DNSSEC is optional):

@abstr_code_section 

Download @abstr_hyperlink :

@abstr_code_section 

Edit the file and examine all the options. To block entire levels of domains, append @abstr_hyperlink or your own rules.

Install and start the program (sudo is required to bind to @abstr_hyperlink @abstr_number ):

@abstr_code_section 

To set Dnsmasq as your local DNS server, open **System Preferences** > **Network** and select the active interface, then the **DNS** tab, select **+** and add `@abstr_number . @abstr_number . @abstr_number . @abstr_number`, or use:

@abstr_code_section 

Make sure Dnsmasq is correctly configured:

@abstr_code_section 

**Note** Some VPN software overrides DNS settings on connect. See @abstr_hyperlink for more information.

##### Test DNSSEC validation

Test DNSSEC validation succeeds for signed zones - the reply should have `NOERROR` status and contain `ad` flag:

@abstr_code_section 

Test DNSSEC validation fails for zones that are signed improperly - the reply should have `SERVFAIL` status:

@abstr_code_section 

## Captive portal

When macOS connects to new networks, it checks for Internet connectivity and may launch a Captive Portal assistant utility application.

An attacker could trigger the utility and direct a Mac to a site with malware without user interaction, so it's best to disable this feature and log in to captive portals using your regular Web browser by navigating to a non-secure HTTP page and accepting a redirect to the captive portal login interface (after disabling any custom proxy or DNS settings).

@abstr_code_section 

Also see @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

## Certificate authorities

macOS comes with @abstr_hyperlink root authority certificates installed from for-profit corporations like Apple, Verisign, Thawte, Digicert and government agencies from China, Japan, Netherlands, U.S., and more! These Certificate Authorities (CAs) are capable of issuing SSL/TLS certificates for any domain, code signing certificates, etc.

For more information, see @abstr_hyperlink , @abstr_hyperlink (pdf), and @abstr_hyperlink (pdf).

Inspect system root certificates in **Keychain Access** , under the **System Roots** tab or by using the `security` command line tool and `/System/Library/Keychains/SystemRootCertificates.keychain` file.

Disable certificate authorities through Keychain Access by marking them as **Never Trust** and closing the window:

@abstr_image 

The risk of a @abstr_hyperlink attack in which a coerced or compromised certificate authority trusted by your system issues a fake/rogue SSL certificate is quite low, but still @abstr_hyperlink .

## OpenSSL

The version of OpenSSL in Sierra is `@abstr_number . @abstr_number . @abstr_number zh` which is @abstr_hyperlink . It doesn't support TLS @abstr_number . @abstr_number or newer, elliptic curve ciphers, and @abstr_hyperlink .

Since Apple's official supported TLS library on macOS is @abstr_hyperlink , OpenSSL **deprecated** is considered deprecated (according to the @abstr_hyperlink . Apple's version of OpenSSL may also have patches which may @abstr_hyperlink .

If you're going to use OpenSSL on your Mac, download and install a recent version of OpenSSL with `brew install openssl`. Note, linking brew to be used in favor of `/usr/bin/openssl` may interfere with built-in software. See @abstr_hyperlink .

Compare the TLS protocol and cipher between the homebrew version and the system version of OpenSSL:

@abstr_code_section 

See also @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

## Curl

The version of Curl which comes with macOS uses @abstr_hyperlink for SSL/TLS validation.

If you prefer to use OpenSSL, install with `brew install curl --with-openssl` and ensure it's the default with `brew link --force curl`

Download @abstr_hyperlink or see the @abstr_hyperlink :

@abstr_code_section 

## Web

### Privoxy

Consider using @abstr_hyperlink as a local proxy to filter Web browsing traffic.

**Note** macOS proxy settings are not universal; apps and services may not honor system proxy settings. Ensure the app you wish to proxy is correctly configured and manually verify connections don't leak. Additionally, it may be possible to configure the _pf_ firewall to transparently proxy all traffic.

A signed installation package for privoxy can be downloaded from @abstr_hyperlink or @abstr_hyperlink . The signed package is @abstr_hyperlink than the Homebrew version, and attracts full support from the Privoxy project.

Alternatively, install and start privoxy using Homebrew:

@abstr_code_section 

By default, privoxy listens on localhost, TCP port @abstr_number .

Set the system **HTTP** proxy for your active network interface `@abstr_number . @abstr_number . @abstr_number . @abstr_number` and `@abstr_number` (This can be done through **System Preferences > Network > Advanced > Proxies**):

@abstr_code_section 

**(Optional)** Set the system **HTTPS** proxy, which still allows for domain name filtering, with:

@abstr_code_section 

Confirm the proxy is set:

@abstr_code_section 

Visit @abstr_hyperlink in a browser, or with Curl:

@abstr_code_section 

Privoxy already comes with many good rules, however you can also write your own.

Download @abstr_hyperlink and @abstr_hyperlink to get started:

@abstr_code_section 

Restart Privoxy: and verify it's blocking and redirecting traffic:

@abstr_code_section 

You can replace ad images with pictures of kittens, for example, by starting the a local Web server and @abstr_hyperlink to localhost.

### Browser

The Web browser poses the largest security and privacy risk, as its fundamental job is to download and execute untrusted code from the Internet. This is an important statement. The unique use case of Web Browsers of operation in hostile environments, has forced them to adopt certain impressive security features. The cornerstone of Web Browser security is the Same Origin Policy ( @abstr_hyperlink ). In a few words, SOP prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model (DOM). If SOP is compromised, the security of the whole Web Browser is compromised.

The best tip to ensure secure browsing regardless your choice of Web Browser is proper security hygiene. The majority of Web Browser exploits require social engineering attacks to achieve native code execution. Always be mindful of the links you click and be extra careful when websites ask you to download and install software. @abstr_number % percent of the time that software is malware.

Another important consideration about Web Browser security is Web Extensions. Web Extensions greatly increase the attack surface of the Web Browser. This is an issue that plagues Firefox and @abstr_hyperlink alike. Luckily, Web Extensions can only access specific browser APIs that are being governed by their manifest. That means we can quickly audit their behavior and remove them if they request access to information they shouldn't (why would an Ad blocker require camera access?). In the interest of security, it is best to limit your use of Web Extensions.

@abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink are covered in this guide. Each Web Browser offers certain benefits and drawbacks regarding their security and privacy. It is best to make an informed choice and not necessarily commit to only one.

#### Chrome

@abstr_hyperlink is based on the open source @abstr_hyperlink with certain @abstr_hyperlink :

  * Automatic updates with GoogleSoftwareUpdateDaemon.
  * Usage tracking and crash reporting, which can be disabled through Chrome's settings.
  * Chrome Web Store.
  * Adobe Flash Plugin - supports a Pepper API version of Adobe Flash which gets updated automatically with Chrome.
  * Media Codec support - adds support for proprietary codecs.
  * Chrome @abstr_hyperlink .
  * Non-optional tracking. Google Chrome installer includes a randomly generated token. The token is sent to Google after the installation completes in order to measure the success rate. The RLZ identifier stores information – in the form of encoded strings – like the source of chrome download and installation week. It doesn’t include any personal information and it’s used to measure the effectiveness of a promotional campaign. **Chrome downloaded from Google’s website doesn’t have the RLZ identifier**. The source code to decode the strings is made open by Google.



Chrome offers account sync between multiple devices. Part of the sync data are stored website credentials. The login passwords are encrypted and in order to access them, a user's Google account password is required. You can use your Google account to sign to your Chrome customized settings from other devices while retaining your the security of your passwords.

Chrome's Web store for extensions requires a @abstr_hyperlink in order to submit extensions. The low cost allows the development of many quality Open Source Web Extensions that do not aim to monetize through usage.

Chrome has the largest share of global usage and is the preferred target platform for the majority of developers. Major technologies are based on Chrome's Open Source components, such as @abstr_hyperlink which uses @abstr_hyperlink Engine and the @abstr_hyperlink framework, which is based on Chromium and node.js. Chrome's vast user base makes it the most attractive target for threat actors and security researchers. Despite under constants attacks, Chrome has retained an impressive security track record over the years. This is not a small feat.

Chrome offers @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink (including Flash, although you should disable it - see below), and carries @abstr_hyperlink . In addition, Google offers a very lucrative @abstr_hyperlink program for reporting vulnerabilities along with its own @abstr_hyperlink . This means that a large number of highly talented and motivated people are constantly auditing Chrome's code base.

Create separate Chrome profiles to reduce XSS risk and compartmentalize cookies/identities. In each profile, either disable Javascript in Chrome settings and manually whitelist allowed origins - or use @abstr_hyperlink to manage Javascript and/or disable third-party scripts/frames. Also install @abstr_hyperlink to upgrade insecure connections.

Change the default search engine from Google to reduce additional tracking.

Disable @abstr_hyperlink (see also @abstr_hyperlink (pdf)).

Read @abstr_hyperlink and @abstr_hyperlink for more detailed, technical information.

Read @abstr_hyperlink and learn which @abstr_hyperlink collect personal information. Google is open about the data it stores and how it used them. Users can opt out from many of those services and see what type of information Google has stored from their @abstr_hyperlink .

#### Firefox

@abstr_hyperlink is an excellent browser as well as being completely open source. Currently, Firefox is in a renaissance period. It replaces major parts of its infrastructure and code base under projects @abstr_hyperlink and @abstr_hyperlink . Part of the Quantum project is to replace C++ code with @abstr_hyperlink . Rust is a systems programming language with a focus on security and thread safety. It is expected that Rust adoption will greatly improve the overall security posture of Firefox.

Firefox offers a similar security model to Chrome: it has a @abstr_hyperlink , although it is not a lucrative as Chrome's. Firefox follows a six-week release cycle similar to Chrome. See discussion in issues @abstr_hyperlink and @abstr_hyperlink for more information about certain differences in Firefox and Chrome.

Firefox supports user-supplied configuration files. See @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink for recommended preferences and hardening measures. Also see @abstr_hyperlink , an extension which allows whitelist-based, pre-emptive script blocking.

Firefox is focused on user privacy. It supports @abstr_hyperlink in Private Browsing mode. The tracking protection can be enabled for the default account, although it may break the browsing experience on some websites. Another feature for added privacy unique to Firefox is @abstr_hyperlink , similar to Chrome profiles.

Previous versions of Firefox used a @abstr_hyperlink that was quite invasive and offered immense freedom to developers. Sadly, that freedom also introduced a number of vulnerabilities in Firefox that greatly affected its users. You can find more information about vulnerabilities introduced by Firefox's legacy extensions in this @abstr_hyperlink (pdf). Currently, Firefox only supports Web Extensions through the @abstr_hyperlink , which is very similar to Chrome's.

Submission of Web Extensions in Firefox is free. Web Extensions in Firefox most of the time are open source, although certain Web Extensions are proprietary.

**Note** Similar to Chrome and Safari, Firefox allows account sync across multiple devices. While stored login passwords are encrypted, Firefox does not require a password to reveal their plain text format. Firefox only displays as yes/no prompt. This is an important security issue. Keep that in mind if you sign in to your Firefox account from devices that do not belong to you and leave them unattended. The @abstr_hyperlink has been raised among the Firefox community and hopefully will be resolved in the coming versions.

#### Safari

@abstr_hyperlink is the default Web browser of macOS. It is also the most optimized browser for reducing battery use. Safari, like Chrome, has both Open Source and proprietary components. Safari is based on the open source Web Engine @abstr_hyperlink , which is ubiquitous among the macOS ecosystem. WebKit is used by Apple apps such as Mail, iTunes, iBooks, and the App Store. Chrome's @abstr_hyperlink engine is a fork of WebKit and both engines share a number of similarities.

Safari supports certain unique features that benefit user security and privacy. @abstr_hyperlink enables the creation of content blocking rules without using Javascript. This rule based approach greatly improves memory user, security, and privacy. Safari @abstr_number introduced an @abstr_hyperlink system. This feature automatically removes tracking data stored in Safari after a period of non-interaction by the user from the tracker's website.

Similar to Chrome and Firefox, Safari offers an invite only @abstr_hyperlink for bug reporting to a select number of security researchers. The bounty program was announced during Apple's @abstr_hyperlink at @abstr_hyperlink @abstr_number .

Web Extensions in Safari have an additional option to use native code in the Safari's sandbox environment, in addition to Web Extension APIs. Web Extensions in Safari are also distributed through Apple's App store. App store submission comes with the added benefit of Web Extension code being audited by Apple. On the other hand App store submission comes at a steep cost. Yearly @abstr_hyperlink fee costs @abstr_number USD (in contrast to Chrome's @abstr_number dollar lifetime fee and Firefox's free submission). The high cost is prohibitive for the majority of Open Source developers. As a result, Safari has very few extensions to choose from. However, you should keep the high cost in mind when installing extensions. It is expected that most Web Extensions will have some way of monetizing usage in order to cover developer costs. And be extra careful when the Web Extension's source code is not Open Source. On a side note, some Safari extensions are Open Source and freely available. Be grateful to those developers.

Safari syncs user preferences and saved passwords with @abstr_hyperlink . In order to be viewed in plain text, a user must input the account password of the current device. This means that users can sync data across devices with added security.

Safari follows a slower release cycle than Chrome and Firefox ( @abstr_number - @abstr_number minor releases, @abstr_number major release, per year). Newer features are slower to be adopted to the stable channel. Although security updates in Safari are handled independent of the stable release schedule and issued automatically through the App store. The Safari channel that follows a six-week release cycle (similar to as Chrome and Firefox) is called @abstr_hyperlink and it is the recommended option instead of the stable channel of Safari.

An excellent open source ad blocker for Safari that fully leverages Content blockers is @abstr_hyperlink . Ka-Block is focussed on user privacy. The only time the extension makes a network connection is when a new version of the extension is released. See also @abstr_hyperlink to disable hyperlink auditing beacons.

#### Other Web browsers

Many Chromium-derived browsers are not recommended. They are usually @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and make dubious claims to protect privacy. See @abstr_hyperlink .

Other miscellaneous browsers, such as @abstr_hyperlink , are not evaluated in this guide, so are neither recommended nor actively discouraged from use.

#### Web browsers and privacy

All Web Browsers retain certain information about our browsing habits. That information is used for a number of reasons. One of them is to improve the overall performance of the Web Browser. Most Web Browsers offer prediction services to resolve typos or URL redirections, store analytics data of browsing patterns, crash reports and black listing of known malicious servers. Those options can be turned on and off from each Web browser's settings panel.

Since Web browsers execute untrusted code from the server, it is important to understand what type of information can be accessed. The @abstr_hyperlink interface gives access to information about the Web Browser's user agent. Those include information such as the operating system, Web sites' permissions, and the device's battery level. For more information about security conscious browsing and what type of information is being "leaked" by your browser, see @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

To hinder third party trackers, it is recommended to **disable third-party cookies** in Web browser settings. A third party cookie is a cookie associated with a file requested by a different domain than the one the user is currently viewing. Most of the time third-party cookies are used to create browsing profiles by tracking a user's movement on the web. Disabling third-party cookies prevents HTTP responses and scripts from other domains from setting cookies. Moreover, cookies are removed from requests to domains that are not the document origin domain, so cookies are only sent to the current site that is being viewed.

Also be aware of @abstr_hyperlink , which may reveal your local or public (if connected to VPN) IP address(es). In Firefox and Chrome/Chromium this can be disabled with extensions such as @abstr_hyperlink and @abstr_hyperlink . Disabling WebRTC in Safari is only possible with a @abstr_hyperlink .

### Plugins

**Adobe Flash** , **Oracle Java** , **Adobe Reader** , **Microsoft Silverlight** (Netflix now works with @abstr_hyperlink ) and other plugins are @abstr_hyperlink and should not be installed.

If they are necessary, only use them in a disposable virtual machine and subscribe to security announcements to make sure you're always patched.

See @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink for examples.

## PGP/GPG

PGP is a standard for encrypting email end to end. That means only the chosen recipients can decrypt a message, unlike regular email which is read and forever archived by providers.

GPG, or **GNU Privacy Guard** , is a GPL licensed program compliant with the standard.

GPG is used to verify signatures of software you download and install, as well as @abstr_hyperlink or @abstr_hyperlink encrypt files and text.

Install from Homebrew with `brew install gnupg`.

If you prefer a graphical application, download and install @abstr_hyperlink .

Download @abstr_hyperlink to use recommended settings:

@abstr_code_section 

See @abstr_hyperlink to securely generate and store GPG keys.

Read @abstr_hyperlink @abstr_hyperlink and @abstr_hyperlink encrypting and decrypting email to yourself and your friends. Get them interested in this stuff!

## OTR

OTR stands for **off-the-record** and is a cryptographic protocol for encrypting and authenticating conversations over instant messaging.

You can use OTR on top of any existing @abstr_hyperlink chat service, even Google Hangouts (which only encrypts conversations between users and the server using TLS).

The first time you start a conversation with someone new, you'll be asked to verify their public key fingerprint. Make sure to do this in person or by some other secure means (e.g. GPG encrypted mail).

A popular macOS GUI client for XMPP and other chat protocols is @abstr_hyperlink .

**Important** While popular, Adium does not appear to be actively developed and may have vulnerabilities. See additional discussion in @abstr_hyperlink .

Other XMPP clients include @abstr_hyperlink and @abstr_hyperlink .

If you want to know how OTR works, read the paper @abstr_hyperlink (pdf)

## Tor

Tor is an anonymizing proxy which can be used for browsing the Web.

Download Tor Browser from @abstr_hyperlink .

Do **not** attempt to configure other browsers or applications to use Tor as you will likely make a mistake which will compromise your anonymity.

Download both the `dmg` and `asc` signature files, then verify the disk image has been signed by Tor developers:

@abstr_code_section 

Make sure `Good signature from "Tor Browser Developers (signing key) <torbrowser@torproject.org>"` appears in the output. The warning about the key not being certified is benign, as it has not yet been manually assigned trust.

See @abstr_hyperlink for more information.

To finish installing Tor Browser, open the disk image and drag the it into the Applications folder, or with:

@abstr_code_section 

Verify the Tor application's code signature was made by with The Tor Project's Apple developer ID **MADPSAYN @abstr_number T** , using the `spctl -a -v` and/or `pkgutil --check-signature` commands:

@abstr_code_section 

You can also use the `codesign` command to examine an application's code signature:

@abstr_code_section 

To view full certificate details for a signed application, extract them with `codesign` and decode it with `openssl`:

@abstr_code_section 

Tor traffic is **encrypted** to the @abstr_hyperlink (i.e., cannot be read by a passive network eavesdropper), but Tor use **can** be identified - for example, TLS handshake "hostnames" will show up in plaintext:

@abstr_code_section 

See @abstr_hyperlink and @abstr_hyperlink for more information.

You may wish to additionally obfuscate Tor traffic using a @abstr_hyperlink , such as @abstr_hyperlink or @abstr_hyperlink .

This can be done by setting up your own @abstr_hyperlink or finding an existing private or public @abstr_hyperlink to serve as an obfuscating entry node.

For extra security, use Tor inside a @abstr_hyperlink or @abstr_hyperlink virtualized @abstr_hyperlink or @abstr_hyperlink machine.

Finally, remember the Tor network provides @abstr_hyperlink , which is not necessarily synonymous with privacy. The Tor network does not guarantee protection against a global observer capable of traffic analysis and @abstr_hyperlink . See also @abstr_hyperlink (pdf) and @abstr_hyperlink (pdf).

Also see @abstr_hyperlink and its @abstr_hyperlink .

## VPN

Unencrypted network traffic is being actively monitored and possibly tampered with. Encrypted traffic still exposes @abstr_hyperlink and could be used to infer behavior or specific actions.

It is a good idea to use a VPN with outgoing network traffic ( _not_ **split tunnel** ) together with a trustworthy provider. @abstr_hyperlink is one of many available guides for setting up a personal VPN server.

Don't just blindly sign up for a VPN service without understanding the full implications and how your traffic will be routed. If you don't understand how the VPN works or are not familiar with the software used, you are probably better off without it.

When choosing a VPN service or setting up your own, be sure to research the protocols, key exchange algorithms, authentication mechanisms, and type of encryption being used. Some protocols, such as @abstr_hyperlink , should be avoided in favor of @abstr_hyperlink , for example. Strong cryptographic algorithms like AES- @abstr_number , RSA- @abstr_number , SHA- @abstr_number should be preferred.

Some clients may send traffic over the next available interface when VPN is interrupted or disconnected. See @abstr_hyperlink for an example on how to allow traffic only over VPN.

Another set of scripts to lock down your system so it will only access the internet via a VPN can be found as part of the Voodoo Privacy project - @abstr_hyperlink and there is an updated guide to setting up an IPSec VPN on a virtual machine ( @abstr_hyperlink ) or a docker container ( @abstr_hyperlink ).

It may be worthwhile to consider the geographical location of the VPN provider. See further discussion in @abstr_hyperlink .

Also see this @abstr_hyperlink of the macOS built-in VPN L @abstr_number TP/IPSec and IKEv @abstr_number client.

Further, it is possible to run the contemporary Linux-based @abstr_hyperlink VPN either @abstr_hyperlink or via a set of @abstr_hyperlink .

Other Open Source OpenVPN clients/GUI: @abstr_hyperlink , @abstr_hyperlink are not evaluated in this guide, so are neither recommended nor actively discouraged from use.

## Viruses and malware

There is an @abstr_hyperlink amount of Mac malware in the wild. Macs aren't immune from viruses and malicious software!

Some malware comes bundled with both legitimate software, such as the @abstr_hyperlink , and some with illegitimate software, such as @abstr_hyperlink bundled with pirated programs. @abstr_hyperlink is an excellent program for ridding oneself of "garden-variety" malware and other "crapware".

See @abstr_hyperlink (pdf) and @abstr_hyperlink to learn about how garden-variety malware functions.

You could periodically run a tool like @abstr_hyperlink to examine persistent applications (e.g. scripts, binaries). But by then, it is probably too late. Maybe applications such as @abstr_hyperlink and @abstr_hyperlink will help. See warnings and caveats in @abstr_hyperlink first, however. An open-source alternative could be @abstr_hyperlink .

**Anti-virus** programs are a double-edged sword -- not so useful for **advanced** users and will likely increase attack surface against sophisticated threats; however possibly useful for catching "garden variety" malware on **novice** users' Macs. There is also the additional processing overhead to consider when using "active" scanning features.

See @abstr_hyperlink (pdf), @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

Therefore, the best anti-virus is _*Common Sense @abstr_number *_. See discussion in @abstr_hyperlink .

CylancePROTECT may be worth running for the exploit mitigation features and (when locked down) is much harder to locally bypass than traditional AV, but it's effectiveness at detecting malware on macOS is questionable. It's core feature is an algorithm derived from a machine-learning process which aims to identify malware based on various characteristics of a binary executable. Cylance have a @abstr_hyperlink (pdf) with information about how it works. Single licenses are available from third party resellers such as @abstr_hyperlink or @abstr_hyperlink and there is also a home/personal edition in the works but it is currently only available for companies to make available to their employees. On macOS it complements Apple's built-in XProtect by continuously vmmap'ing the memory of active processes to watch for patterns that indicate bad things happening.

Local privilege escalation bugs are plenty on macOS, so always be careful when downloading and running untrusted programs or trusted programs from third party websites or downloaded over HTTP ( @abstr_hyperlink ).

Subscribe to updates at @abstr_hyperlink and @abstr_hyperlink for current Mac security news.

If you're unsure about whether an application or file is safe to open, upload it to @abstr_hyperlink to be scanned and to examine its behavior.

Also check out @abstr_hyperlink malware for macOS: @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink , which is a good example of advanced malware with capabilities to hide from **userland** (e.g., `ps`, `ls`), for example. For more, see @abstr_hyperlink and @abstr_hyperlink 

## System Integrity Protection

@abstr_hyperlink (SIP) is a security feature since OS X @abstr_number . @abstr_number "El Capitan". It is enabled by default, but @abstr_hyperlink , which may be necessary to change some system settings, such as deleting root certificate authorities or unloading certain launch daemons. Keep this feature on, as it is by default.

From @abstr_hyperlink :

> A new security policy that applies to every running process, including privileged code and code that runs out of the sandbox. The policy extends additional protections to components on disk and at run-time, only allowing system binaries to be modified by the system installer and software updates. Code injection and runtime attachments to system binaries are no longer permitted.

Also see @abstr_hyperlink 

Some MacBook hardware has shipped with @abstr_hyperlink . To verify SIP is enabled, use the command `csrutil status`, which should return: `System Integrity Protection status: enabled.` Otherwise, @abstr_hyperlink through Recovery Mode.

## Gatekeeper and XProtect

**Gatekeeper** and the **quarantine** system try to prevent unsigned or "bad" programs and files from running and opening.

**XProtect** prevents the execution of known bad files and outdated plugin versions, but does nothing to cleanup or stop existing malware.

Both offer trivial protection against common risks and are fine at default settings.

See also @abstr_hyperlink and @abstr_hyperlink .

**Note** Quarantine stores information about downloaded files in `~/Library/Preferences/com.apple.LaunchServices.QuarantineEventsV @abstr_number`, which may pose a privacy risk. To examine the file, simply use `strings` or the following command:

@abstr_code_section 

See @abstr_hyperlink for more information.

To permanently disable this feature, @abstr_hyperlink and @abstr_hyperlink :

@abstr_code_section 

## Metadata and artifacts

macOS attaches metadata ( @abstr_hyperlink ) to downloaded files, which can be viewed with the `mdls` and `xattr` commands:

@abstr_code_section 

Metadata attributes can also be removed with the `-d` flag:

@abstr_code_section 

Other metadata and artifacts may be found in the directories including, but not limited to, `~/Library/Preferences/`, `~/Library/Containers/<APP>/Data/Library/Preferences`, `/Library/Preferences`, some of which is detailed below.

`~/Library/Preferences/com.apple.sidebarlists.plist` contains historical list of volumes attached. To clear it, use the command `/usr/libexec/PlistBuddy -c "delete :systemitems:VolumesList" ~/Library/Preferences/com.apple.sidebarlists.plist`

`/Library/Preferences/com.apple.Bluetooth.plist` contains Bluetooth metadata, including device history. If Bluetooth is not used, the metadata can be cleared with:

@abstr_code_section 

`/var/spool/cups` contains the CUPS printer job cache. To clear it, use the commands:

@abstr_code_section 

To clear the list of iOS devices connected, use:

@abstr_code_section 

QuickLook thumbnail data can be cleared using the `qlmanage -r cache` command, but this writes to the file `resetreason` in the Quicklook directories, and states that the Quicklook cache was manually cleared. Disable the thumbnail cache with `qlmanage -r disablecache`

It can also be manually cleared by getting the directory names with `getconf DARWIN_USER_CACHE_DIR` and `sudo getconf DARWIN_USER_CACHE_DIR`, then removing them:

@abstr_code_section 

Similarly, for the root user:

@abstr_code_section 

Also see @abstr_hyperlink .

To clear Finder preferences:

@abstr_code_section 

Additional diagnostic files may be found in the following directories - but caution should be taken before removing any, as it may break logging or cause other issues:

@abstr_code_section 

macOS stored preferred Wi-Fi data (including credentials) in nvram. To clear it, use the following commands:

@abstr_code_section 

macOS may collect sensitive information about what you type, even if user dictionary and suggestions are off. To remove them, and prevent them from being created again, use the following commands:

@abstr_code_section 

QuickLook application support metadata can be cleared and locked with the following commands:

@abstr_code_section 

Document revision metadata is stored in `/.DocumentRevisions-V @abstr_number` and can be cleared and locked with the following commands - caution should be taken as this may break some core Apple applications:

@abstr_code_section 

Saved application state metadata may be cleared and locked with the following commands:

@abstr_code_section 

Autosave metadata can be cleared and locked with the following commands:

@abstr_code_section 

The Siri analytics database, which is created even if the Siri launch agent disabled, can be cleared and locked with the following commands:

@abstr_code_section 

`~/Library/Preferences/com.apple.iTunes.plist` contains iTunes metadata. Recent iTunes search data may be cleared with the following command:

@abstr_code_section 

If you do not use Apple ID-linked services, the following keys may be cleared, too, using the following commands:

@abstr_code_section 

All media played in QuickTime Player can be found in:

@abstr_code_section 

Additional metadata may exist in the following files:

@abstr_code_section 

## Passwords

Generate strong passwords with several programs or directly from @abstr_hyperlink :

@abstr_code_section 

You can also generate passwords, even memorable ones, using **Keychain Access** password assistant, or a command line equivalent like @abstr_hyperlink .

Keychains are encrypted with a @abstr_hyperlink and are a _pretty safe_ place to store credentials. See also @abstr_hyperlink . Also be aware that Keychain @abstr_hyperlink the names corresponding to password entries.

Alternatively, you can manage an encrypted passwords file yourself with GnuPG (see @abstr_hyperlink and @abstr_hyperlink for example).

In addition to passwords, ensure eligible online accounts, such as GitHub, Google accounts, banking, have @abstr_hyperlink enabled.

Look to @abstr_hyperlink for a two factor and private key (e.g., ssh, gpg) hardware token. See @abstr_hyperlink and @abstr_hyperlink . One of two Yubikey's slots can also be programmed to emit a long, static password (which can be used in combination with a short, memorized password, for example).

In Addition to Login and other pam modules you can use Yubikey to secure your login and sudo, here is a pdf guide from @abstr_hyperlink . Yubikey are a bit pricey, there is cheaper alternative, but not as capable, @abstr_hyperlink . Here is a great guide to @abstr_hyperlink 

## Backup

Always encrypt files locally before backing them up to external media or online services.

One way is to use a symmetric cipher with GPG and a password of your choosing. Files can also be encrypted to a public key with GPG, with the private key stored on @abstr_hyperlink .

To compress and encrypt a directory:

@abstr_code_section 

To decrypt and decompress the directory:

@abstr_code_section 

You can also create and use encrypted volumes using **Disk Utility** or `hdiutil`:

@abstr_code_section 

See also the following applications and services: @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink .

## Wi-Fi

macOS remembers access points it has connected to. Like all wireless devices, the Mac will broadcast all access point names it remembers (e.g., _MyHomeNetwork_ ) each time it looks for a network, such as when waking from sleep.

This is a privacy risk, so remove networks from the list in **System Preferences** > **Network** > **Advanced** when they're no longer needed.

Also see @abstr_hyperlink (pdf) and @abstr_hyperlink (pdf).

Saved Wi-Fi information (SSID, last connection, etc.) can be found in:
    
    
    /Library/Preferences/SystemConfiguration/com.apple.airport.preferences.plist
    

You may want to @abstr_hyperlink of the network card before connecting to new and untrusted wireless networks to mitigate passive fingerprinting:

@abstr_code_section 

It is also good to know that macOS will store Wi-Fi SSIDs and passwords in NVRAM, because Recovery Mode needs access to restore from the Internet. Be sure to either clear NVRAM or de-authenticate your Mac from your Apple account, which will clear the NVRAM, before passing a Mac along. (Resetting the SMC will clear some of the NVRAM, but not all.)

**Note** MAC addresses will reset to hardware defaults on each boot.

Also see @abstr_hyperlink .

Finally, WEP protection on wireless networks is @abstr_hyperlink and you should favor connecting to _*WPA @abstr_number *_ protected networks only to mitigate the risk of passive eavesdroppers.

## SSH

For outgoing SSH connections, use hardware or password-protected keys, @abstr_hyperlink remote hosts and consider @abstr_hyperlink them for added privacy. See @abstr_hyperlink for recommended client options.

You can also use ssh to create an @abstr_hyperlink to send traffic through, similar to a VPN.

For example, to use Privoxy running on a remote host port @abstr_number :

@abstr_code_section 

Or to use an ssh connection as a @abstr_hyperlink :

@abstr_code_section 

By default, macOS does **not** have sshd or _Remote Login_ enabled.

To enable sshd and allow incoming ssh connections:

@abstr_code_section 

Or use the **System Preferences** > **Sharing** menu.

If enabling sshd, be sure to disable password authentication and consider further @abstr_hyperlink your configuration. See @abstr_hyperlink for recommended options.

Confirm whether sshd is running:

@abstr_code_section 

## Physical access

Keep your Mac physically secure at all times. Don't leave it unattended in hotels and such.

A skilled attacker with unsupervised physical access to your computer can infect the boot ROM to install a keylogger and steal your password - see @abstr_hyperlink for an example.

A helpful tool is @abstr_hyperlink , which is _"an anti-forensic kill-switch that waits for a change on your USB ports and then immediately shuts down your computer"_.

Consider purchasing a @abstr_hyperlink for your screen to thwart shoulder surfers.

Superglues or epoxy resins can also be used to disable physical access. @abstr_hyperlink and tamper-evidence seals can be applied to components to detect tampering.

## System monitoring

### OpenBSM audit

macOS has a powerful OpenBSM (Basic Security Module) auditing capability. You can use it to monitor process execution, network activity, and much more.

To tail audit logs, use the `praudit` utility:

@abstr_code_section 

See the manual pages for `audit`, `praudit`, `audit_control` and other files in `/etc/security`

**Note** although `man audit` says the `-s` flag will synchronize the audit configuration, it appears necessary to reboot for changes to take effect.

See articles on @abstr_hyperlink and @abstr_hyperlink for more information.

### DTrace

**Note** @abstr_hyperlink @abstr_hyperlink with DTrace, so it is not possible to use it in recent macOS versions without disabling SIP.

`iosnoop` monitors disk I/O

`opensnoop` monitors file opens

`execsnoop` monitors execution of processes

`errinfo` monitors failed system calls

`dtruss` monitors all system calls

See `man -k dtrace` for more information.

### Execution

`ps -ef` lists information about all running processes.

You can also view processes with **Activity Monitor**.

`launchctl list` and `sudo launchctl list` list loaded and running user and system launch daemons and agents.

### Network

List open network files:

@abstr_code_section 

List contents of various network-related data structures:

@abstr_code_section 

You can also use @abstr_hyperlink from the command line with `tshark`.

Monitor DNS queries and replies:

@abstr_code_section 

Monitor HTTP requests and responses:

@abstr_code_section 

Monitor x @abstr_number (SSL/TLS) certificates:

@abstr_code_section 

Also see the simple networking monitoring application @abstr_hyperlink .

## Binary Whitelisting

@abstr_hyperlink is a security software developed for Google's corporate Macintosh fleet and open sourced.

> Santa is a binary whitelisting/blacklisting system for macOS. It consists of a kernel extension that monitors for executions, a userland daemon that makes execution decisions based on the contents of a SQLite database, a GUI agent that notifies the user in case of a block decision and a command-line utility for managing the system and synchronizing the database with a server.

Santa uses the @abstr_hyperlink to monitor and allow/disallow binaries from executing in the kernel. Binaries can be white- or black-listed by unique hash or signing developer certificate. Santa can be used to only allow trusted code execution, or to blacklist known malware from executing on a Mac, similar to Bit @abstr_number software for Windows.

**Note** Santa does not currently have a graphical user interface for managing rules. The following instructions are for advanced users only!

To install Santa, visit the @abstr_hyperlink page and download the latest disk image, the mount it and install the contained package:

@abstr_code_section 

By default, Santa installs in "Monitor" mode (meaning, nothing gets blocked, only logged) and comes with two rules: one for Apple binaries and another for Santa software itself.

Verify Santa is running and its kernel module is loaded:

@abstr_code_section 

Create a blacklist rule to prevent iTunes from executing:

@abstr_code_section 

Try to launch iTunes - it will be blocked.

@abstr_code_section 

@abstr_image 

To remove the rule:

@abstr_code_section 

Open iTunes:

@abstr_code_section 

Create a new, example C program:

@abstr_code_section 

Compile the program with GCC (requires installation of Xcode or command-line tools):

@abstr_code_section 

Run it:

@abstr_code_section 

Toggle Santa into "Lockdown" mode, which only allows whitelisted binaries to run:
    
    
    $ sudo defaults write /var/db/santa/config.plist ClientMode -int  @abstr_number
    

Try to run the unsigned binary:

@abstr_code_section 

To whitelist a specific binary, determine its SHA- @abstr_number sum:

@abstr_code_section 

Add a whitelist rule:

@abstr_code_section 

Run it:

@abstr_code_section 

It's allowed and works!

Applications can also be whitelisted by developer certificate (so that new binary versions will not need to be manually whitelisted on each update). For example, download and run Google Chrome - it will be blocked by Santa in "Lockdown" mode:

@abstr_code_section 

Whitelist the application by its developer certificate (first item in the Signing Chain):

@abstr_code_section 

In this case, `@abstr_number b @abstr_number ce @abstr_number e @abstr_number f @abstr_number c @abstr_number a @abstr_number fbdfc @abstr_number e @abstr_number c @abstr_number f @abstr_number a @abstr_number c @abstr_number c @abstr_number fc @abstr_number` is the SHA- @abstr_number of Google’s Apple developer certificate (team ID EQHXZ @abstr_number M @abstr_number AV). To whitelist it:

@abstr_code_section 

Google Chrome should now launch, and subsequent updates to the application will continue to work as long as the code signing certificate doesn’t change or expire.

To disable "Lockdown" mode:

@abstr_code_section 

See `/var/log/santa.log` to monitor ALLOW and DENY execution decisions.

A log and configuration server for Santa is available in @abstr_hyperlink , an open source event monitoring solution and TLS server for osquery and Santa.

Zentral will support Santa in both MONITORING and LOCKDOWN operation mode. Clients need to be enrolled with a TLS connection to sync Santa Rules, all Santa events from endpoints are aggregated and logged back in Zentral. Santa events can trigger actions and notifications from within the Zentral Framework.

**Note** Python, Bash and other interpreters are whitelisted (since they are signed by Apple's developer certificate), so Santa will not be able to block such scripts from executing. Thus, a potential non-binary program which disables Santa is a weakness (not vulnerability, since it is so by design) to take note of.

## Miscellaneous

Disable @abstr_hyperlink .

If you want to play **music** or watch **videos** , use @abstr_hyperlink which is free and open source.

If you want to use **torrents** , use @abstr_hyperlink which is free and open source (note: like all software, even open source projects, @abstr_hyperlink ). You may also wish to use a block list to avoid peering with known bad hosts - see @abstr_hyperlink and @abstr_hyperlink .

Manage default file handlers with @abstr_hyperlink , which can be installed with `brew install duti`. One reason to manage extensions is to prevent auto-mounting of remote filesystems in Finder (see @abstr_hyperlink ). Here are several recommended handlers to manage:

@abstr_code_section 

Monitor system logs with the **Console** application or `syslog -w` or `/usr/bin/log stream` commands.

In systems prior to macOS Sierra ( @abstr_number . @abstr_number ), enable the @abstr_hyperlink in `/etc/sudoers` to restrict the sudo session to the Terminal window/tab that started it. To do so, use `sudo visudo` and add the line `Defaults tty_tickets`.

Set your screen to lock as soon as the screensaver starts:

@abstr_code_section 

Expose hidden files and Library folder in Finder:

@abstr_code_section 

Show all filename extensions (so that "Evil.jpg.app" cannot masquerade easily).

@abstr_code_section 

Don't default to saving documents to iCloud:

@abstr_code_section 

Enable @abstr_hyperlink in Terminal (unless you use @abstr_hyperlink or applications such as @abstr_hyperlink ).

Disable crash reporter (the dialog which appears after an application crashes and prompts to report the problem to Apple):

@abstr_code_section 

Disable Bonjour @abstr_hyperlink :

@abstr_code_section 

@abstr_hyperlink and Bluetooth features, if they aren't necessary.

Consider @abstr_hyperlink your applications. See @abstr_hyperlink (pdf) and @abstr_hyperlink .

Did you know Apple has not shipped a computer with TPM since @abstr_hyperlink ?

macOS comes with this line in `/etc/sudoers`:

@abstr_code_section 

Which stops sudo from changing the HOME variable when you elevate privileges. This means it will execute as root the bash dotfiles in the non-root user's home directory when you run "sudo bash". It is adviseable to comment this line out to avoid a potentially easy way for malware or a local attacker to escalate privileges to root.

If you want to retain the convenience of the root user having a non-root user's home directory, you can append an export line to /var/root/.bashrc, eg:

@abstr_code_section 

Set a @abstr_hyperlink :

@abstr_code_section 

Reboot, create a file in Finder and verify its permissions (macOS default allows 'group/other' read access):

@abstr_code_section 

## Related software

  * @abstr_hyperlink - Cross-platform security auditing tool and assists with compliance testing and system hardening.
  * @abstr_hyperlink - Scan for applications that are either susceptible to dylib hijacking or have been hijacked.
  * @abstr_hyperlink (formerly @abstr_hyperlink ) - "Little Snitch for files"; prevents applications from accessing files.
  * @abstr_hyperlink - Audits and remediates security configuration settings.
  * @abstr_hyperlink - A binary whitelisting/blacklisting system for macOS.
  * @abstr_hyperlink - A collection of useful diagnostics and control applications and utilities for macOS.
  * @abstr_hyperlink - A log and configuration server for santa and osquery. Run audit and probes on inventory, events, logfiles, combine with point-in-time alerting. A full Framework and Django web server build on top of the elastic stack (formerly known as ELK stack).
  * @abstr_hyperlink - Can be used to retrieve low level system information. Users can write SQL queries to retrieve system information.
  * @abstr_hyperlink - Incident response framework focused on remote live forensics.
  * @abstr_hyperlink - Analyzes artifacts on a running system, such as quarantined files, Safari, Chrome and Firefox history, downloads, HTML @abstr_number databases and localstore, social media and email accounts, and Wi-Fi access point names.
  * @abstr_hyperlink - Checks your OSX machine against various hardened configuration settings.
  * @abstr_hyperlink - Library to access FileVault Drive Encryption (FVDE) (or FileVault @abstr_number ) encrypted volumes.
  * @abstr_hyperlink - Securely and easily configure your Mac from the terminal. Inspired by this guide.
  * @abstr_hyperlink - Forensic evidence collection & analysis toolkit for OS X.



## Additional resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (pdf)
  * @abstr_hyperlink (pdf)
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (pdf)
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (pdf)
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (pdf)
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 


