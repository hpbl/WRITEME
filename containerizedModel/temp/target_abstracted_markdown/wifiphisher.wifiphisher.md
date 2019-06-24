@abstr_hyperlink @abstr_hyperlink @abstr_image @abstr_image 

@abstr_image 

## About

@abstr_hyperlink is a rogue Access Point framework for conducting red team engagements or Wi-Fi security testing. Using Wifiphisher, penetration testers can easily achieve a man-in-the-middle position against wireless clients by performing targeted Wi-Fi association attacks. Wifiphisher can be further used to mount victim-customized web phishing attacks against the connected clients in order to capture credentials (e.g. from third party login pages or WPA/WPA @abstr_number Pre-Shared Keys) or infect the victim stations with malwares.

Wifiphisher is...

  * ...powerful. Wifiphisher can run for hours inside a Raspberry Pi device executing all modern Wi-Fi association techniques (including "Evil Twin", "KARMA" and "Known Beacons"). 

  * ...flexible. Supports dozens of arguments and comes with a set of community-driven phishing templates for different deployment scenarios. 

  * ...modular. Users can @abstr_hyperlink in Python to expand the functionality of the tool or @abstr_hyperlink in order to conduct specific target-oriented attacks. 

  * ...easy to use. Advanced users can utilize the rich set of features that Wifiphisher offers but beginners may start out as simply as "./bin/wifiphisher". The interactive Textual User Interface guides the tester through the build process of the attack. 

  * ...the result of an extensive research. Attacks like "Known Beacons" and "Lure @abstr_number " as well as state-of-the-art phishing techniques, were disclosed by our developers, and Wifiphisher was the first tool to incorporate them. 

  * ...supported by an awesome community of developers and users.

  * ...free. Wifiphisher is available for free download, and also comes with full source code that you may study, change, or distribute under the terms of the GPLv @abstr_number license.




## How it works

Wi-Fi phishing consists of two steps:

@abstr_number . The first step involves the process of associating with Wi-Fi clients unknowingly, or in other words, obtaining a man-in-the-middle (MITM) position. Wifiphisher uses a number of different techniques to achieve this including: * Evil Twin, where Wifiphisher creates a fake wireless network that looks similar to a legitimate network. * KARMA, where Wifiphisher masquerades as a public network searched for by nearby Wi-Fi clients. * Known Beacons, where Wifiphisher broadcasts a dictionary of common ESSIDs, that the around wireless stations have likely connected to in the past.
    
    
    At the same time, Wifiphisher keeps forging “Deauthenticate” or “Disassociate” packets to disrupt existing associations and eventually lure victims using the above techniques.
    

@abstr_image   
_Performing MiTM attack_

@abstr_number . (Optionally) There are a number of different attacks that can be carried out once Wifiphisher grants the penetration tester with a man-in-the-middle position. For example, the tester may perform data sniffing or scan the victim stations for vulnerabilities. 
    
    
    Using Wifiphisher, advanced web phishing techniques are possible by gathering
    

information from the target environment and victim user. For example, in one of our scenarios, Wifiphisher will extract information from the broadcasted beacon frames and the HTTP User-Agent header to display a web-based imitation of Windows network manager in order to capture the Pre-Shared Key.

@abstr_image   
_Fake @abstr_hyperlink_

## Requirements

Following are the requirements for getting the most out of Wifiphisher:

  * A working Linux system. People have made Wifiphisher work on many distros, but Kali Linux is the officially supported distribution, thus all new features are primarily tested on this platform.
  * One wireless network adapter that supports AP & Monitor mode and is capable of injection. Drivers should support netlink.



## Installation

To install the latest development version type the following commands:

@abstr_code_section 

Alternatively, you can download the latest stable version from the @abstr_hyperlink .

## Usage

Run the tool by typing `wifiphisher` or `python bin/wifiphisher` (from inside the tool's directory).

By running the tool without any options, it will find the right interfaces and interactively ask the user to pick the ESSID of the target network (out of a list with all the ESSIDs in the around area) as well as a phishing scenario to perform. By default, the tool will perform both Evil Twin and KARMA attacks.

* * *

@abstr_code_section 

Use wlan @abstr_number for spawning the rogue Access Point and wlan @abstr_number for DoS attacks. Select the target network manually from the list and perform the "Firmware Upgrade" scenario. Verify that the captured Pre-Shared Key is correct by checking it against the handshake in the handshake.pcap file.

Useful for manually selecting the wireless adapters. The @abstr_hyperlink scenario is an easy way for obtaining the PSK from a password-protected network.

* * *

@abstr_code_section 

Automatically pick the right interfaces. Target the Wi-Fi with ESSID "CONFERENCE_WIFI" and perform the "Plugin Update" scenario. The Evil Twin will be password-protected with PSK "s @abstr_number cr @abstr_number tp @abstr_number ssw @abstr_number rd".

Useful against networks with disclosed PSKs (e.g. in conferences). The @abstr_hyperlink scenario provides an easy way for getting the victims to download malicious executables (e.g. malwares containing a reverse shell payload).

* * *

@abstr_code_section 

Simply spawn an open Wi-Fi network with ESSID "FREE WI-FI" and perform the "OAuth Login" scenario. Furthermore, mount the "Known Beacons" Wi-Fi automatic association technique.

Useful against victims in public areas. The @abstr_hyperlink scenario provides a simple way for capturing credentials from social networks, like Facebook. 

Following are all the options along with their descriptions (also available with `wifiphisher -h`):

| Short form | Long form | Explanation | | :----------: | :---------: | :-----------: | |-h | --help| show this help message and exit | |-i INTERFACE| --interface INTERFACE| Manually choose an interface that supports both AP and monitor modes for spawning the rogue AP as well as mounting additional Wi-Fi attacks from Extensions (i.e. deauth). Example: -i wlan @abstr_number | |-eI EXTENSIONSINTERFACE| --extensionsinterface EXTENSIONSINTERFACE| Manually choose an interface that supports monitor mode for running the extensions. Example: -eI wlan @abstr_number | |-aI APINTERFACE| --apinterface APINTERFACE| Manually choose an interface that supports AP mode for spawning an AP. Example: -aI wlan @abstr_number | |-kN| --keepnetworkmanager| Do not kill NetworkManager.| |-nE| --noextensions| Do not load any extensions.| |-e ESSID| --essid ESSID| Enter the ESSID of the rogue Access Point. This option will skip Access Point selection phase. Example: --essid 'Free WiFi'| |-pPD PHISHING_PAGES_DIRECTORY|--phishing-pages-directory PHISHING_PAGES_DIRECTORY| Search for phishing pages in this location| |-p PHISHINGSCENARIO| --phishingscenario PHISHINGSCENARIO |Choose the phishing scenario to run.This option will skip the scenario selection phase. Example: -p firmware_upgrade| |-pK PRESHAREDKEY| --presharedkey PRESHAREDKEY| Add WPA/WPA @abstr_number protection on the rogue Access Point. Example: -pK s @abstr_number cr @abstr_number tp @abstr_number ssw @abstr_number rd| |-qS| --quitonsuccess| Stop the script after successfully retrieving one pair of credentials.| |-lC| --lure @abstr_number -capture| Capture the BSSIDs of the APs that are discovered during AP selection phase. This option is part of Lure @abstr_number attack. |-lE LURE @abstr_number _EXPLOIT |--lure @abstr_number -exploit LURE @abstr_number _EXPLOIT| Fool the Windows Location Service of nearby Windows users to believe it is within an area that was previously captured with --lure @abstr_number -capture. Part of the Lure @abstr_number attack.| |-iAM| --mac-ap-interface| Specify the MAC address of the AP interface. Example: -iAM @abstr_number :EC: @abstr_number : @abstr_number : @abstr_number : @abstr_number | |-iEM| --mac-extensions-interface| Specify the MAC address of the extensions interface. Example: -iEM E @abstr_number : @abstr_number A:EA: @abstr_number : @abstr_number : @abstr_number | |-iNM| --no-mac-randomization| Do not change any MAC address.| |-hC|--handshake-capture|Capture of the WPA/WPA @abstr_number handshakes for verifying passphrase. Example: -hC capture.pcap| |-dE ESSID|--deauth-essid ESSID|Deauth all the BSSIDs in the WLAN with that ESSID.| |-dC CHANNELS| --deauth-channels CHANNELS|Channels to deauth. Example: --deauth-channels @abstr_number , @abstr_number , @abstr_number | ||--logging| Enable logging. Output will be saved to wifiphisher.log file.| |-lP LOGPATH| --logpath LOGPATH| Determine the full path of the logfile.| |-cP CREDENTIAL_LOG_PATH|--credential-log-path CREDENTIAL_LOG_PATH|Determine the full path of the file that will store any captured credentials| |-cM|--channel-monitor|Monitor if the target access point changes the channel.| ||--payload-path| Enable the payload path. Intended for use with scenarios that serve payloads.| |-wP|--wps-pbc|Monitor if the button on a WPS-PBC Registrar side is pressed.| |-wAI|--wpspbc-assoc-interface|The WLAN interface used for associating to the WPS AccessPoint.| |-kB|--known-beacons|Perform the known beacons Wi-Fi automatic association technique.| |-fH|--force-hostapd|Force the usage of hostapd installed in the system.| ||--dnsmasq-conf DNSMASQ_CONF|Determine the full path of dnmasq.conf file.| |-dK|--disable-karma|Disables KARMA attack.| |-pE|--phishing-essid|Determine the ESSID you want to use for the phishing page.|

## Screenshots

@abstr_image   
_Targeting an access point_

@abstr_image   
_A successful attack_

@abstr_image   
_Fake @abstr_hyperlink_

@abstr_image   
_Fake @abstr_hyperlink_

@abstr_image   
_Fake @abstr_hyperlink_

## Help needed

If you are a Python developer or a web designer you can help us improve Wifiphisher. Feel free to take a look at the @abstr_hyperlink for some tasks to do.

If you don't know how to code, you can help us by @abstr_hyperlink . Please have a look at the Bug Reporting Guidelines and the @abstr_hyperlink beforehand. Note that the tool does not aim to be script-kiddie friendly. Make sure you do understand how the tool works before opening an issue.

## Credits

The script is based on an idea from @abstr_hyperlink back in @abstr_number .

A full list of contributors lies @abstr_hyperlink .

## License

Wifiphisher is licensed under the GPLv @abstr_number license. See LICENSE for more information.

## Project Status

Wifiphisher's current version is _* @abstr_number . @abstr_number *_. You can download the latest release from @abstr_hyperlink . Otherwise you can get the latest development version by cloning this repository.

## Disclaimer

  * Usage of Wifiphisher for attacking infrastructures without prior mutual consistency can be considered as an illegal activity. It is the final user's responsibility to obey all applicable local, state and federal laws. Authors assume no liability and are not responsible for any misuse or damage caused by this program.



**Note** : Be aware of sites pretending to be related with the Wifiphisher Project. They may be delivering malware.

For Wifiphisher news, follow us on @abstr_hyperlink or like us on @abstr_hyperlink .
