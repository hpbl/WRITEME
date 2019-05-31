# ShadowsocksX-NG

Current version is @abstr_number . @abstr_number . @abstr_number 

@abstr_hyperlink 

Next Generation of @abstr_hyperlink 

## Why a new implementation?

It's hard to maintain the original implementation as there is too much unused code in it. It also embeds the `ss-local` source. It's crazy to maintain dependencies of `ss-local`. So it's hard to update the `ss-local` version.

Now I just copied the `ss-local` from Homebrew. Run `ss-local` executable as a Launch Agent in the background. Serve PAC JS file as a file URL. So there is only some source code related to GUI left. Then I will rewrite the GUI code in Swift.

## Requirements

### Running

  * macOS @abstr_number . @abstr_number +



### Building

  * Xcode @abstr_number . @abstr_number +
  * CocoaPods @abstr_number . @abstr_number . @abstr_number +



## Download

From @abstr_hyperlink 

## Features

  * `ss-local` from shadowsocks-libev @abstr_number . @abstr_number . @abstr_number 
  * Support SIP @abstr_number plugins. Embed `kcptun` and `simple-obfs`.
  * Could update PAC by download GFW List from GitHub.
  * Share your server profiles by qrcode or url.
  * Import server profile urls from pasteboard.
  * Import server profile by scan QRCode on screen.
  * Custom rules for PAC.
  * Support for @abstr_hyperlink 
  * HTTP Proxy by @abstr_hyperlink 



## Difference from original ShadowsocksX

`ss-local` is run as a background service through launchd, not as an in-app process. So after you quit the app, the `ss-local` might be still running.

Added a manual mode which won't configure the system proxy settings, so that you could configure your apps to use the SOCKS @abstr_number proxy manually.

## Contributing

Contributions must be available on a separately named branch based on the latest version of the main branch `develop`.

ref: @abstr_hyperlink 

## License

The project is released under the terms of the GPLv @abstr_number .
