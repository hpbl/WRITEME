# Shadowsocks for Windows

@abstr_hyperlink 

[中文说明]

#### Features

@abstr_number . System proxy configuration @abstr_number . PAC mode and global mode @abstr_number . [GFWList] and user rules @abstr_number . Supports HTTP proxy @abstr_number . Supports server auto switching @abstr_number . Supports UDP relay (see Usage)

#### Download

Download the [latest release].

#### Basic

@abstr_number . Find Shadowsocks icon in the notification tray @abstr_number . You can add multiple servers in servers menu @abstr_number . Select `Enable System Proxy` menu to enable system proxy. Please disable other proxy addons in your browser, or set them to use system proxy @abstr_number . You can also configure your browser proxy manually if you don't want to enable system proxy. Set Socks @abstr_number or HTTP proxy to @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number . You can change this port in `Servers -> Edit Servers`

#### PAC

@abstr_number . You can change PAC rules by editing the PAC file. When you save the PAC file with any editor, Shadowsocks will notify browsers about the change automatically @abstr_number . You can also update PAC file from [GFWList] (maintained by @abstr_number rd party) @abstr_number . You can also use online PAC URL

#### Server Auto Switching

@abstr_number . Load balance: choosing server randomly @abstr_number . High availability: choosing the best server (low latency and packet loss) @abstr_number . Choose By Total Package Loss: ping and choose. Please also enable `Availability Statistics` in the menu if you want to use this @abstr_number . Write your own strategy by implement IStrategy interface and send us a pull request!

#### UDP

For UDP, you need to use SocksCap or ProxyCap to force programs you want to be proxied to tunnel over Shadowsocks

#### Multiple Instances

If you want to manage multiple servers using other tools like SwitchyOmega, you can start multiple Shadowsocks instances. To avoid configuration conflicts, copy Shadowsocks to a new directory and choose a different local port.

#### Global hotkeys

Hotkeys are NOT registered automatically. You should re-register all hotkeys after restarting Shadowsocks. If you are using multiple instances of Shadowsocks, you must set different key combination for other instances.

##### How to input?

@abstr_number . Put focus in the corresponding textbox. @abstr_number . Press the key combination that you want to use. @abstr_number . Release all keys when you think it is ready. @abstr_number . Your input appears in the textbox.

##### How to change?

@abstr_number . Put focus in the corresponding textbox. @abstr_number . Press BackSpace key to clear content. @abstr_number . Re-input new key combination.

##### How to deactivate?

@abstr_number . Clear content in the textbox that you want to deactivate, if you want to deactivate all, please clear all textboxes. @abstr_number . Press OK button to confirm.

##### Meaning of label color

  * Green: This key combination is not occupied by other programs and register successfully.
  * Yellow: This key combination is occupied by other programs and you have to change to another one.
  * Transparent without color: The initial status.



#### Server Configuration

Please visit [Servers] for more information.

#### Develop

[Visual Studio @abstr_number ] & [.NET Framework @abstr_number . @abstr_number . @abstr_number Developer Pack] are required.

#### License

GPLv @abstr_number 
