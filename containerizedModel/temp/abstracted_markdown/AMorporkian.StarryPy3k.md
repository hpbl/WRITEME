# StarryPy @abstr_number k

## About

StarryPy @abstr_number k is the successor to StarryPy. StarryPy is a plugin-driven Starbound server wrapper that adds a great deal of functionality to Starbound. StarryPy @abstr_number k is written using asyncio is Python @abstr_number .

**_Please note this is still in very active development and is not ready to be used on general purpose servers. It should mostly work, but you have been forewarned._**

## Requirements

Python _* @abstr_number . @abstr_number . @abstr_number *_ or greater is required. Test are only conducted on Python versions @abstr_number . @abstr_number and @abstr_number . @abstr_number .

While StarryPy @abstr_number k **may** work with earlier version of Python, it is not recommended and will not be readily supported.

## Installation

If you are installing during the development phase, please clone the repository with git. While it is not strictly necessary, it is highly encouraged to run your StarryPy @abstr_number k instance from a virtual environment, as future plugins may require more Python modules than are currently listed (eg - IRC @abstr_number ), and using a virtual environment helps to keep a clean namespace and reduce the chance of bugs.

### Starbound Server Configuration

StarryPy works as a benevolent "man in the middle" between the Starbound game client and the Starbound dedicated server, in effect acting as a proxy server. As such, for easiest transition from a "Vanilla" server to one enhanced by StarryPy, you need to set your Starbound server to accept incoming connections on a new TCP port. By default, this will be the port one lower than standard, to wit: @abstr_number . To accomplish this, edit your `starbound_server.config`. Look for the lines below, and change them to specify port @abstr_number :

@abstr_code_section 

### StarryPy Proxy Configuration

An example configuration file, `config.json.default`, is provided in the `config` directory. Copy that file to a new one named `config.json` in the same location. Open it in your text editor of choice. The following are the most likely changes you will have to make:

@abstr_code_section 

This section controls the built-in IRC-to-Starbound bridge. It will be active if you have the `irc @abstr_number` Python module installed on your system. Edit the sample values here to match your preferred IRC server, bot nick, et cetera. Chat in the Starbound server will be relayed to the specified IRC channel, and vice versa. You can also see who is on the server from IRC by saying `.who` in the IRC channel (we cannot use `/` as the command leader in IRC for obvious reasons.

@abstr_code_section 

The MOTD, or Message Of The Day, will be displayed to all players when they connect to the Starbound server. You can update this in-game by using the `/set_motd` command. The next section allows you to specify a message to be displayed to any players the first time they connect to the server. You can also have StarryPy give items to new players by enumarating them in the `gifts` property. Use Starbound's names for items as specified in its `.json` files.

@abstr_code_section 

Replace the obvious value here with your UUID. This is how StarryPy will recognize you as the owner of the server and accord you the relevant rights and privileges. You can find your UUID by watching the Starbound server log as you connect, by using the `list` RCON command, or by observing the names of your save files on the computer you use to play Starbound.

### Starting the proxy

Starting StarryPy is as simple as issueing the command `python @abstr_number ./server.py` once you have finised editing `config/config.json`. To terminate the proxy, either press `^C` in an interactive terminal session, or send it a `TERM` signal.

## Contributing

Contributions are highly encouraged and always welcome. Please feel free to open an issue on GitHub if you are having an error, or wish to make a suggestion. If you're feeling really motivated, fork the repo and contribute some code.

In addition, plugin development is encouraged. There are still a few features missing from the core (particularly in the role system). A more comprehensive guide on plugin development is in the works. Please note that plugins will not work without modification from the original version of StarryPy.

If you would like to talk with other contributors/ask questions about development, please join #StarryPy on irc.freenode.net, or chat with us on @abstr_hyperlink .

## History

StarryPy @abstr_number k was originally developed by @abstr_hyperlink , who set all the groundwork for AsyncIO and packet interpreting. Due to personal circumstances, Carrots stepped away from the project.

After roughly @abstr_number years of laying dormant, Kharidiron, having spent some time learning the ropes of StarryPy, decided to take the reigns on StarryPy @abstr_number k. After many months of staring at the code (and many emails to CarrotsAreMediocre requesting assistance in understanding just what it is doing), is feeling a modicum more confident in handling this project and keeping it running.
