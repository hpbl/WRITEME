# ShadowsocksR for Windows

@abstr_hyperlink 

#### Download

You will need to download and install @abstr_hyperlink in order to extract the ShadowsocksR archive.

Download the [latest release] for ShadowsocksR for Windows.

_Optionally_, right-click on the downloaded @abstr_number z file and select **CRC SHA** > _*SHA- @abstr_number *_. Verify that the SHA- @abstr_number checksum displayed matches the expected checksum which was shown on the releases page.

Right-click on the downloaded @abstr_number z file and do _* @abstr_number -Zip_ * > **Extract Here** or extract to a new folder.

_Optionally_, download and install @abstr_hyperlink . From the Windows start menu, launch program **Kleopatra**. Do **File** > **New Certificate** to create a personal OpenPGP key pair. Save the signing key from @abstr_hyperlink as a text file. Then do **File** > **Import Certificates** to import the signing key text file. After import, select the signing key and do **Certificates** > **Certify Certificates**. You will need to enter the passphrase for your own key. Finally, do **File** > **Decrypt/Verify Files** for the executable you propose to use (see below). A message confirming successful verification of the signature appears against a green background. Close program **Kleopatra**.

For >= Windows @abstr_number or with .Net @abstr_number . @abstr_number , using ShadowsocksR-dotnet @abstr_number . @abstr_number .exe.

For <= Windows @abstr_number or with .Net @abstr_number . @abstr_number , using ShadowsocksR-dotnet @abstr_number . @abstr_number .exe.

#### Usage

@abstr_number . Find ShadowsocksR icon in the notification tray @abstr_number . You can add multiple servers in servers menu @abstr_number . Select Enable System Proxy menu to enable system proxy. Please disable other proxy addons in your browser, or set them to use system proxy @abstr_number . You can also configure your browser proxy manually if you don't want to enable system proxy. Set Socks @abstr_number or HTTP proxy to @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number . You can change this port in Global settings @abstr_number . You can change PAC rules by editing the PAC file. When you save the PAC file with any editor, ShadowsocksR will notify browsers about the change automatically @abstr_number . You can also update the PAC file from GFWList. Note your modifications to the PAC file will be lost. However you can put your rules in the user rule file for GFWList. Don't forget to update from GFWList again after you've edited the user rule @abstr_number . For UDP, you need to use SocksCap or ProxyCap to force programs you want to proxy to tunnel over ShadowsocksR

### Develop

Visual Studio Express @abstr_number is recommended.

#### License

GPLv @abstr_number 

Copyright © BreakWa @abstr_number @abstr_number . Fork from Shadowsocks by clowwindy
