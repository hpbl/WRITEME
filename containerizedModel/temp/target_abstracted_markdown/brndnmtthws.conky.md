@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

**Conky** is a free, light-weight system monitor for X, that displays any kind of information on your desktop.

👉 Grab the @abstr_hyperlink .

@abstr_hyperlink .

## Features

Conky can display more than @abstr_number built-in objects, including support for:

  * A plethora of OS stats (uname, uptime, **CPU usage** , **mem usage** , disk usage, **"top"** like process stats, and **network monitoring** , just to name a few).
  * Built-in **IMAP** and _*POP @abstr_number *_ support.
  * Built-in support for many popular music players ( @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink ).
  * Can be extended using built-in Lua support, or any of your own scripts and programs ( @abstr_hyperlink ).
  * Built-in @abstr_hyperlink and @abstr_hyperlink bindings for arbitrary drawing with Lua ( @abstr_hyperlink ).
  * Runs on Linux, FreeBSD, OpenBSD, DragonFlyBSD, NetBSD, Solaris, Haiku OS, and macOS!



... and much much more.

Conky can display information either as text, or using simple progress bars and graph widgets, with different fonts and colours.

## Screenshots

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

See the User Configs below for more screenshots and associated config files.

## Quickstart

Conky comes bundled with many package managers. However, if you'd like to try the latest release of Conky, you can try the AppImage build. If you have `jq` and `curl` installed, run the following command to fetch the latest AppImage:

`ShellSession $ curl -sL -o conky-x @abstr_number _ @abstr_number .AppImage \ $(curl -sL https://api.github.com/repos/brndnmtthws/conky/releases/latest | \ jq --raw-output '.assets[ @abstr_number ] | .browser_download_url') $ ls conky-x @abstr_number _ @abstr_number .AppImage @abstr_code_section ShellSession $ chmod +x ./conky-x @abstr_number _ @abstr_number .AppImage $ ./conky-x @abstr_number _ @abstr_number .AppImage -C > ~/.conkyrc $ ./conky-x @abstr_number _ @abstr_number .AppImage `

And that's it! @abstr_hyperlink for more details on configuring Conky.

_Note_: To use the AppImage, you may need to install additional runtime libraries.

## Documentation

The @abstr_hyperlink serves as a central hub for all of Conky's documentation.

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## License

Conky is licensed under the terms of the GPLv @abstr_number license.

## Contributing

Contributions are welcome from anyone.

Please read CONTRIBUTING.md for guidelines on contributing to Conky.
