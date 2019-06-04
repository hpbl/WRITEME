# RDPY @abstr_hyperlink @abstr_hyperlink 

Remote Desktop Protocol in twisted python.

RDPY is a pure Python implementation of the Microsoft RDP (Remote Desktop Protocol) protocol (client and server side). RDPY is built over the event driven network engine Twisted. RDPY support standard RDP security layer, RDP over SSL and NLA authentication (through ntlmv @abstr_number authentication protocol).

RDPY provides the following RDP and VNC binaries : * RDP Man In The Middle proxy which record session * RDP Honeypot * RDP screenshoter * RDP client * VNC client * VNC screenshoter * RSS Player

## Build

RDPY is fully implemented in python, except the bitmap decompression algorithm which is implemented in C for performance purposes.

### Dependencies

Dependencies are only needed for pyqt @abstr_number binaries : * rdpy-rdpclient * rdpy-rdpscreenshot * rdpy-vncclient * rdpy-vncscreenshot * rdpy-rssplayer

#### Linux

Example for Debian based systems : @abstr_code_section 

#### OS X

Example for OS X to install PyQt with homebrew @abstr_code_section 

#### Windows

x @abstr_number | x @abstr_number _ @abstr_number \----|------- @abstr_hyperlink | @abstr_hyperlink @abstr_hyperlink | @abstr_hyperlink 

### Build

@abstr_code_section 

Or use PIP: @abstr_code_section 

For virtualenv, you will need to link the qt @abstr_number library to it: @abstr_code_section 

## RDPY Binaries

RDPY comes with some very useful binaries. These binaries are linux and windows compatible.

### rdpy-rdpclient

rdpy-rdpclient is a simple RDP Qt @abstr_number client.

@abstr_code_section 

You can use rdpy-rdpclient in a Recorder Session Scenario, used in rdpy-rdphoneypot.

### rdpy-vncclient

rdpy-vncclient is a simple VNC Qt @abstr_number client .

@abstr_code_section 

### rdpy-rdpscreenshot

rdpy-rdpscreenshot saves login screen in file.

@abstr_code_section 

### rdpy-vncscreenshot

rdpy-vncscreenshot saves the first screen update in file.

@abstr_code_section 

### rdpy-rdpmitm

rdpy-rdpmitm is a RDP proxy allows you to do a Man In The Middle attack on RDP protocol. Record Session Scenario into rss file which can be replayed by rdpy-rssplayer.

@abstr_code_section 

Output directory is used to save the rss file with following format (YYYYMMDDHHMMSS_ip_index.rss) The private key file and the certificate file are classic cryptographic files for SSL connections. The RDP protocol can negotiate its own security layer If one of both parameters are omitted, the server use standard RDP as security layer.

### rdpy-rdphoneypot

rdpy-rdphoneypot is an RDP honey Pot. Use Recorded Session Scenario to replay scenario through RDP Protocol.

@abstr_code_section 

The private key file and the certificate file are classic cryptographic files for SSL connections. The RDP protocol can negotiate its own security layer. If one of both parameters are omitted, the server use standard RDP as security layer. You can specify more than one files to match more common screen size.

### rdpy-rssplayer

rdpy-rssplayer is use to replay Record Session Scenario (rss) files generates by either rdpy-rdpmitm or rdpy-rdpclient binaries.

@abstr_code_section 

## RDPY Qt Widget

RDPY can also be used as Qt widget through rdpy.ui.qt @abstr_number .QRemoteDesktop class. It can be embedded in your own Qt application. qt @abstr_number reactor must be used in your app for Twisted and Qt to work together. For more details, see sources of rdpy-rdpclient.

## RDPY library

In a nutshell RDPY can be used as a protocol library with a twisted engine.

### Simple RDP Client

@abstr_code_section 

### Simple RDP Server

@abstr_code_section 

### Simple VNC Client

@abstr_code_section 
