# Dshell

An extensible network forensic analysis framework. Enables rapid development of plugins to support the dissection of network packet captures.

Key features:

  * Robust stream reassembly
  * IPv @abstr_number and IPv @abstr_number support
  * Custom output handlers
  * Chainable decoders



## Prerequisites

  * Linux (developed on Ubuntu @abstr_number . @abstr_number )
  * Python @abstr_number . @abstr_number 
  * @abstr_hyperlink , Apache License, Version @abstr_number . @abstr_number 
    * @abstr_hyperlink 
  * @abstr_hyperlink , custom license
  * @abstr_hyperlink , New BSD License
  * @abstr_hyperlink , BSD @abstr_number -Clause License
  * @abstr_hyperlink , New BSD License
  * @abstr_hyperlink , Apache License, Version @abstr_number . @abstr_number - optional, used only with Dshell's elasticout output module



## Installation

@abstr_number . Install all of the necessary Python modules listed above. Many of them are available via pip and/or apt-get.

  * `sudo pip install geoip @abstr_number pycrypto dpkt IPy pypcap`

@abstr_number . Configure GeoIP by moving the MaxMind data files (GeoLite @abstr_number -Country.mmdb, GeoLite @abstr_number -ASN.mmdb) to <install-location>/share/GeoIP/

@abstr_number . Run `make`. This will build Dshell.

@abstr_number . Run `./dshell`. This is Dshell. If you get a Dshell> prompt, you're good to go!




## Basic usage

  * `decode -l`
    * This will list all available decoders alongside basic information about them
  * `decode -h`
    * Show generic command-line flags available to most decoders
  * `decode -d <decoder>`
    * Display information about a decoder, including available command-line flags
  * `decode -d <decoder> <pcap>`
    * Run the selected decoder on a pcap file



## Development

  * Using Dshell With PyCharm



## Recent Major Updates

  * Feb @abstr_number - Removed deprecated pygeoip dependency, and replaced it with geoip @abstr_number . This requires the use of new GeoIP data files, listed in the Prerequisites and Installation sections above.



## Partners

Below are repositories from partners Dshell has worked together with.

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Usage Examples

Showing DNS lookups in @abstr_hyperlink 

@abstr_code_section 

Following and reassembling a stream in @abstr_hyperlink 

@abstr_code_section 

Chaining decoders to view flow data for a specific country code in @abstr_hyperlink (note: TCP handshakes are not included in the packet count)

@abstr_code_section 

Collecting netflow data for @abstr_hyperlink with vlan headers, then tracking the connection to a specific IP address

@abstr_code_section 
