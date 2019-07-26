@abstr_image 

Radarr is an __independent__ fork of @abstr_hyperlink reworked for automatically downloading movies via Usenet and BitTorrent.

The project was inspired by other Usenet/BitTorrent movie downloaders such as CouchPotato.

See the @abstr_hyperlink for an overview of planned features.

## Getting Started

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

  * @abstr_hyperlink _or_ use @abstr_hyperlink 
  * _For Linux users_ , run `radarr` and _optionally_ have @abstr_hyperlink 
  * Connect to the UI through 
  * See the @abstr_hyperlink for further configuration



## Downloads

Branch | develop (stable) | nightly (semi-unstable) | \---|---|--- Binary Releases | @abstr_hyperlink | @abstr_hyperlink Docker (linuxserver.io, x @abstr_number _ @abstr_number , arm @abstr_number , armhf) | @abstr_hyperlink | @abstr_hyperlink Docker (hotio, see @abstr_hyperlink for more information) | @abstr_hyperlink | @abstr_hyperlink 

## Support

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Status

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

| Service | Master | Develop | |----------|:---------------------------:|:----------------------------:| | AppVeyor | @abstr_hyperlink | @abstr_hyperlink | | Travis | @abstr_hyperlink | @abstr_hyperlink |

###  @abstr_hyperlink 

| API | Updates | Sites | |-------|:----:|:----:| | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

Radarr is currently undergoing rapid development and pull requests are actively added into the repository.

## Features

### Current Features

  * Adding new movies with lots of information, such as trailers, ratings, etc.
  * Support for major platforms: Windows, Linux, macOS, Raspberry Pi, etc.
  * Can watch for better quality of the movies you have and do an automatic upgrade. _eg. from DVD to Blu-Ray_
  * Automatic failed download handling will try another release if one fails
  * Manual search so you can pick any release or to see why a release was not downloaded automatically
  * Full integration with SABnzbd and NZBGet
  * Automatically searching for releases as well as RSS Sync
  * Automatically importing downloaded movies
  * Recognizing Special Editions, Director's Cut, etc.
  * Identifying releases with hardcoded subs
  * All indexers supported by Sonarr also supported
  * New PassThePopcorn Indexer
  * QBittorrent, Deluge, rTorrent, Transmission and uTorrent download client (Other clients are coming)
  * New TorrentPotato Indexer
  * Torznab Indexer now supports Movies (Works well with @abstr_hyperlink )
  * Scanning PreDB to know when a new release is available
  * Importing movies from various online sources, such as IMDb Watchlists (A complete list can be found @abstr_hyperlink )
  * Full integration with Kodi, Plex (notification, library update)
  * And a beautiful UI
  * Importing Metadata such as trailers or subtitles
  * Adding metadata such as posters and information for Kodi and others to use
  * Advanced customization for profiles, such that Radarr will always download the copy you want



### Planned Features

See the @abstr_hyperlink for an overview of planned features.

####  @abstr_hyperlink 

## Configuring the Development Environment

### Requirements

  * @abstr_hyperlink or @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



### Setup

  * Make sure all the required software mentioned above are installed
  * Clone the repository into your development machine ( @abstr_hyperlink )
  * Grab the submodules `git submodule init && git submodule update`
  * Install the required Node Packages `npm install`
  * Start gulp to monitor your dev environment for any changes that need post processing using `npm start` command.



> **Notice**   
>  Gulp must be running at all times while you are working with Radarr client source files.

### Build

  * To build run `sh build.sh`



**Note:** Windows users must have bash available to do this. If you installed git, you should have a git bash utility that works.

### Development

  * Open `NzbDrone.sln` in Visual Studio @abstr_number or run the build.sh script, if Mono is installed. Alternatively you can use Jetbrains Rider, since it works on all Platforms.
  * Make sure `NzbDrone.Console` is set as the startup project
  * Run `build.sh` before running



## Supporters

This project would not be possible without the support by these amazing folks. @abstr_hyperlink to help us out!

### Sponsors

@abstr_hyperlink 

### Flexible Sponsors

@abstr_hyperlink 

### Backers

@abstr_hyperlink 

### JetBrains

Thank you to @abstr_hyperlink for providing us with free licenses to their great tools * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 

## License

  * @abstr_hyperlink 
  * Copyright @abstr_number - @abstr_number 


