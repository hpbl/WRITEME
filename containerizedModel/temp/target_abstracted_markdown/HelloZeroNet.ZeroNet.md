# ZeroNet @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

简体中文 Русский

Decentralized websites using Bitcoin crypto and the BitTorrent network - https://zeronet.io

## Why?

  * We believe in open, free, and uncensored network and communication.
  * No single point of failure: Site remains online so long as at least @abstr_number peer is serving it.
  * No hosting costs: Sites are served by visitors.
  * Impossible to shut down: It's nowhere because it's everywhere.
  * Fast and works offline: You can access the site even if Internet is unavailable.



## Features

  * Real-time updated sites
  * Namecoin .bit domains support
  * Easy to setup: unpack & run
  * Clone websites in one click
  * Password-less @abstr_hyperlink based authorization: Your account is protected by the same cryptography as your Bitcoin wallet
  * Built-in SQL server with P @abstr_number P data synchronization: Allows easier site development and faster page load times
  * Anonymity: Full Tor network support with .onion hidden services instead of IPv @abstr_number addresses
  * TLS encrypted connections
  * Automatic uPnP port opening
  * Plugin for multiuser (openproxy) support
  * Works with any browser/OS



## How does it work?

  * After starting `zeronet.py` you will be able to visit zeronet sites using `http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /{zeronet_address}` (eg. `http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number / @abstr_number HeLLo @abstr_number uzjaLetFx @abstr_number NH @abstr_number PMwFP @abstr_number qbRbTf @abstr_number D`).
  * When you visit a new zeronet site, it tries to find peers using the BitTorrent network so it can download the site files (html, css, js...) from them.
  * Each visited site is also served by you.
  * Every site contains a `content.json` file which holds all other files in a sha @abstr_number hash and a signature generated using the site's private key.
  * If the site owner (who has the private key for the site address) modifies the site, then he/she signs the new `content.json` and publishes it to the peers. Afterwards, the peers verify the `content.json` integrity (using the signature), they download the modified files and publish the new content to other peers.



####  @abstr_hyperlink 

####  @abstr_hyperlink 

####  @abstr_hyperlink 

## Screenshots

@abstr_image @abstr_image 

####  @abstr_hyperlink 

## How to join

  * Download ZeroBundle package: 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
  * Unpack anywhere
  * Run `ZeroNet.exe` (win), `ZeroNet(.app)` (osx), `ZeroNet.sh` (linux)



### Linux terminal on x @abstr_number - @abstr_number

  * `wget https://github.com/HelloZeroNet/ZeroBundle/raw/master/dist/ZeroBundle-linux @abstr_number .tar.gz`
  * `tar xvpfz ZeroBundle-linux @abstr_number .tar.gz`
  * `cd ZeroBundle`
  * Start with `./ZeroNet.sh`



It downloads the latest version of ZeroNet then starts it automatically.

#### Manual install for Debian Linux

  * `sudo apt-get update`
  * `sudo apt-get install msgpack-python python-gevent`
  * `wget https://github.com/HelloZeroNet/ZeroNet/archive/master.tar.gz`
  * `tar xvpfz master.tar.gz`
  * `cd ZeroNet-master`
  * Start with `python @abstr_number zeronet.py`
  * Open http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number / in your browser



###  @abstr_hyperlink 

  * @abstr_hyperlink 



###  @abstr_hyperlink 

  * `git clone https://aur.archlinux.org/zeronet.git`
  * `cd zeronet`
  * `makepkg -srci`
  * `systemctl start zeronet`
  * Open http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number / in your browser



See @abstr_hyperlink 's @abstr_hyperlink for further assistance.

###  @abstr_hyperlink 

  * @abstr_hyperlink 
  * `emerge --sync`
  * `echo 'net-vpn/zeronet' >> /etc/portage/package.accept_keywords`
  * _(Optional)_ Enable Tor support: `echo 'net-vpn/zeronet tor' >> /etc/portage/package.use`
  * `emerge zeronet`
  * `rc-service zeronet start`
  * _(Optional)_ Enable zeronet at runlevel "default": `rc-update add zeronet`
  * Open http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number / in your browser



See `/usr/share/doc/zeronet-*/README.gentoo.bz @abstr_number` for further assistance.

###  @abstr_hyperlink 

  * `pkg install zeronet` or `cd /usr/ports/security/zeronet/ && make install clean`
  * `sysrc zeronet_enable="YES"`
  * `service zeronet start`
  * Open http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number / in your browser



###  @abstr_hyperlink 

  * `vagrant up`
  * Access VM with `vagrant ssh`
  * `cd /vagrant`
  * Run `python @abstr_number zeronet.py --ui_ip @abstr_number . @abstr_number . @abstr_number . @abstr_number`
  * Open http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number / in your browser



###  @abstr_hyperlink 

  * `docker run -d -v <local_data_folder>:/root/data -p @abstr_number : @abstr_number -p @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number : @abstr_number nofish/zeronet`
  * This Docker image includes the Tor proxy, which is disabled by default. Beware that some hosting providers may not allow you running Tor in their servers. If you want to enable it, set `ENABLE_TOR` environment variable to `true` (Default: `false`). E.g.:

`docker run -d -e "ENABLE_TOR=true" -v <local_data_folder>:/root/data -p @abstr_number : @abstr_number -p @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number : @abstr_number nofish/zeronet`

  * Open http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number / in your browser



###  @abstr_hyperlink 

  * `virtualenv env`
  * `source env/bin/activate`
  * `pip install msgpack gevent`
  * `python @abstr_number zeronet.py`
  * Open http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number / in your browser



## Current limitations

  * ~~No torrent-like file splitting for big file support~~ (big file support added)
  * ~~No more anonymous than Bittorrent~~ (built-in full Tor support added)
  * File transactions are not compressed ~~or encrypted yet~~ (TLS encryption added)
  * No private sites



## How can I create a ZeroNet site?

Shut down zeronet if you are running it already

@abstr_code_section 

Congratulations, you're finished! Now anyone can access your site using `http://localhost: @abstr_number / @abstr_number DNDkMUExRf @abstr_number Xa @abstr_number ogwPKqp @abstr_number zyHFEqbhC @abstr_number`

Next steps: @abstr_hyperlink 

## How can I modify a ZeroNet site?

  * Modify files located in data/ @abstr_number DNDkMUExRf @abstr_number Xa @abstr_number ogwPKqp @abstr_number zyHFEqbhC @abstr_number directory. After you're finished:

@abstr_code_section 

  * Enter the private key you got when you created the site, then:

@abstr_code_section 

  * That's it! You've successfully signed and published your modifications.




## Help keep this project alive

  * Bitcoin: @abstr_number QDhxQ @abstr_number PraUZa @abstr_number ET @abstr_number fYUCPgdrwBomnFgX
  * Paypal: https://zeronet.io/docs/help_zeronet/donate/



### Sponsors

  * Better macOS/Safari compatibility made possible by @abstr_hyperlink 



#### Thank you!

  * More info, help, changelog, zeronet sites: https://www.reddit.com/r/zeronet/
  * Come, chat with us: @abstr_hyperlink or on @abstr_hyperlink 
  * Email: hello@zeronet.io (PGP: CB @abstr_number AE)


