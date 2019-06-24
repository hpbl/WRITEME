# ungoogled-chromium

_A lightweight approach to removing Google web service dependency_

**ungoogled-chromium is Google Chromium** , sans dependency on Google web services. It also features some tweaks to enhance privacy, control, and transparency _(almost all of which require manual activation or enabling)_.

**ungoogled-chromium retains the default Chromium experience as closely as possible**. Unlike other Chromium forks that have their own visions of a web browser, ungoogled-chromium is essentially a drop-in replacement for Chromium.

**Help is always welcome!** See the docs/contributing.md document for more information.

## Content Overview

  * Motivation and Philosophy
  * Feature Overview
  * Downloads
  * Source Code
  * FAQ
  * Building Instructions
  * Design Documentation
  * Contributing, Reporting, Contacting
  * Credits
  * Related Projects
  * License



## Motivation and Philosophy

Without signing in to a Google Account, Chromium does pretty well in terms of security and privacy. However, Chromium still has some dependency on Google web services and binaries. In addition, Google designed Chromium to be easy and intuitive for users, which means they compromise on transparency and control of inner operations.

ungoogled-chromium addresses these issues in the following ways:

@abstr_number . Remove all remaining background requests to any web services while building and running the browser @abstr_number . Remove all code specific to Google web services @abstr_number . Remove all uses of pre-made binaries from the source code, and replace them with user-provided alternatives when possible. @abstr_number . Disable features that inhibit control and transparency, and add or modify features that promote them (these changes will almost always require manual activation or enabling).

These features are implemented as configuration flags, patches, and custom scripts. For more details, consult the Design Documentation.

## Feature Overview

_This section overviews the features of ungoogled-chromium. For more detailed information, it is best to consult the source code._

Contents of this section:

  * Key Features
  * Enhancing Features
  * Borrowed Features
  * Supported Platforms and Distributions



### Key Features

_These are the core features introduced by ungoogled-chromium._

  * Replace many web domains in the source code with non-existent alternatives ending in `qjz @abstr_number zk` (known as domain substitution; see docs/design.md for details)
  * Strip binaries from the source code (known as binary pruning; see docs/design.md for details)
  * Disable functionality specific to Google domains (e.g. Google Host Detector, Google URL Tracker, Google Cloud Messaging, Google Hotwording, etc.) 
    * This includes disabling Safe Browsing. Consult the FAQ for the rationale.
  * Add many new command-line switches and `chrome://flags` entries to configure disabled-by-default features. See docs/flags.md for the exhaustive list.



### Enhancing Features

_These are the non-essential features introduced by ungoogled-chromium._

  * Use HTTPS by default when a URL scheme is not provided (e.g. Omnibox, bookmarks, command-line)
  * Add _Suggestions URL_ text field in the search engine editor (`chrome://settings/searchEngines`) for customizing search engine suggestions.
  * Add more URL schemes allowed to save page schemes.
  * Add Omnibox search provider "No Search" to allow disabling of searching
  * Add a custom cross-platform build configuration and packaging wrapper for Chromium. It currently supports many Linux distributions, macOS, and Windows. (See docs/design.md for details on the system.)
  * Force all pop-ups into tabs
  * Disable automatic formatting of URLs in Omnibox (e.g. stripping `http://`, hiding certain parameters)
  * Disable intranet redirect detector (extraneous DNS requests) 
    * This breaks captive portal detection, but captive portals still work.
  * (Iridium Browser feature change) Prevent URLs with the `trk:` scheme from connecting to the Internet 
    * Also prevents any URLs with the top-level domain `qjz @abstr_number zk` (as used in domain substitution) from attempting a connection.
  * (Iridium and Inox feature change) Prevent pinging of IPv @abstr_number address when detecting the availability of IPv @abstr_number . See the `--set-ipv @abstr_number -probe-false` flag above to adjust the behavior instead.
  * (Windows-specific) Do not set the Zone Identifier on downloaded files



### Borrowed Features

In addition to the features introduced by ungoogled-chromium, ungoogled-chromium selectively borrows many features from the following projects (in approximate order of significance):

  * Inox patchset
  * Bromite
  * Debian
  * Iridium Browser



### Supported Platforms and Distributions

See docs/platforms.md for a list of supported platforms.

Other platforms are discussed and tracked in this repository's Issue Tracker. Learn more about using the Issue Tracker under the section Contributing, Reporting, Contacting.

## Downloads

Download binaries from here

_NOTE: These binaries are provided by anyone who are willing to build and submit them. Because these binaries are not necessarily @abstr_hyperlink , authenticity cannot be guaranteed; In other words, there is always a non-zero probability that these binaries may have been tampered with. In the unlikely event that this has happened to you, please report it in a new issue._

These binaries are known as **contributor binaries**.

Also, ungoogled-chromium is available in several **software repositories** :

  * Arch Linux: @abstr_hyperlink 
    * NOTE: `ungoogled-chromium-bin` is _not_ officially part of ungoogled-chromium. Please submit all issues to the maintainer of the PKGBUILD.
  * Gentoo Linux: @abstr_hyperlink overlay maintains an _unofficial_ @abstr_hyperlink ebuild.
  * GNU Guix: Available as `ungoogled-chromium`.
  * macOS cask: Available as `eloston-chromium`



## Source Code

This repository only contains the common code for all platforms; it does not contain all the configuration and scripts necessary to build ungoogled-chromium. Most users will want to use platform-specific repos, where all the remaining configuration and scripts are provided for specific platforms:

Find the repo for a specific platform here.

If you wish to include ungoogled-chromium code in your own build process, consider using the tags in this repo. These tags follow the format `{chromium_version}-{revision}` where

  * `chromium_version` is the version of Chromium used in `x.x.x.x` format, and
  * `revision` is a number indicating the version of ungoogled-chromium for the corresponding Chromium version.



Additionally, most platform-specific repos extend their tag scheme upon this one.

**Building the source code** : See docs/building.md

## FAQ

See the frequently-asked questions (FAQ) on the Wiki

## Building Instructions

See docs/building.md

## Design Documentation

See docs/design.md

## Contributing, Reporting, Contacting

  * For reporting and contacting, see SUPPORT.md
  * For contributing (e.g. how to help, submitting changes, criteria for new features), see docs/contributing.md



## Credits

  * The Chromium Project
  * Inox patchset
  * Debian
  * Bromite
  * Iridium Browser
  * The users for testing and debugging, contributing code, providing feedback, or simply using ungoogled-chromium in some capacity.



## Related Projects

List of known projects that fork or use changes from ungoogled-chromium:

  * Bromite (Borrows some patches. Features builds for Android)
  * ppc @abstr_number le fork (Fork with changes to build for ppc @abstr_number le CPUs)



## License

BSD- @abstr_number -clause. See LICENSE
