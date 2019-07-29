## Current development going on here :arrow_right: @abstr_hyperlink 

# WiFiManager

ESP @abstr_number WiFi Connection manager with fallback web configuration portal

@abstr_hyperlink 

The configuration portal is of the captive variety, so on various devices it will present the configuration dialogue as soon as you connect to the created access point.

First attempt at a library. Lots more changes and fixes to do. Contributions are welcome.

#### This works with the ESP @abstr_number Arduino platform with a recent stable release( @abstr_number . @abstr_number . @abstr_number or newer) https://github.com/esp @abstr_number /Arduino

## Contents

  * How it works
  * Wishlist
  * Quick start 
    * Installing 
      * Through Library Manager
      * From Github
    * Using
  * Documentation 
    * Access Point Password
    * Callbacks
    * Configuration Portal Timeout
    * On Demand Configuration
    * Custom Parameters
    * Custom IP Configuration
    * Filter Low Quality Networks
    * Debug Output
  * Troubleshooting
  * Releases
  * Contributors



## How It Works

  * when your ESP starts up, it sets it up in Station mode and tries to connect to a previously saved Access Point
  * if this is unsuccessful (or no previous network saved) it moves the ESP into Access Point mode and spins up a DNS and WebServer (default ip @abstr_number . @abstr_number . @abstr_number . @abstr_number )
  * using any wifi enabled device with a browser (computer, phone, tablet) connect to the newly created Access Point
  * because of the Captive Portal and the DNS server you will either get a 'Join to network' type of popup or get any domain you try to access redirected to the configuration portal
  * choose one of the access points scanned, enter password, click save
  * ESP will try to connect. If successful, it relinquishes control back to your app. If not, reconnect to AP and reconfigure.



## How It Looks

@abstr_image @abstr_image 

## Wishlist

  * [x] remove dependency on EEPROM library
  * [x] move HTML Strings to PROGMEM
  * [x] cleanup and streamline code (although this is ongoing)
  * [x] if timeout is set, extend it when a page is fetched in AP mode
  * [x] add ability to configure more parameters than ssid/password
  * [x] maybe allow setting ip of ESP after reboot
  * [x] add to Arduino Library Manager
  * [x] add to PlatformIO
  * [ ] add multiple sets of network credentials
  * [x] allow users to customize CSS
  * [ ] ESP @abstr_number support or instructions
  * [ ] rewrite documentation for simplicity, based on scenarios/goals
  * [ ] rely on the SDK's built in auto connect more than forcing a connect



## Quick Start

### Installing

You can either install through the Arduino Library Manager or checkout the latest changes or a release from github

#### Install through Library Manager

__Currently version @abstr_number . @abstr_number + works with release @abstr_number . @abstr_number . @abstr_number or newer of the @abstr_hyperlink __ \- in Arduino IDE got to Sketch/Include Library/Manage Libraries @abstr_image 

  * search for WiFiManager @abstr_image 

  * click Install and start using it




#### Checkout from github

__Github version works with release @abstr_number . @abstr_number . @abstr_number or newer of the @abstr_hyperlink __ \- Checkout library to your Arduino libraries folder

### Using

  * Include in your sketch @abstr_code_section 

  * Initialize library, in your setup function add @abstr_code_section 

  * Also in the setup function add @abstr_code_section if you just want an unsecured access point @abstr_code_section or if you want to use and auto generated name from 'ESP' and the esp's Chip ID use @abstr_code_section 




After you write your sketch and start the ESP, it will try to connect to WiFi. If it fails it starts in Access Point mode. While in AP mode, connect to it then open a browser to the gateway IP, default @abstr_number . @abstr_number . @abstr_number . @abstr_number , configure wifi, save and it should reboot and connect.

Also see @abstr_hyperlink .

## Documentation

#### Password protect the configuration Access Point

You can and should password protect the configuration access point. Simply add the password as a second parameter to `autoConnect`. A short password seems to have unpredictable results so use one that's around @abstr_number characters or more in length. The guidelines are that a wifi password must consist of @abstr_number to @abstr_number ASCII-encoded characters in the range of @abstr_number to @abstr_number (decimal) @abstr_code_section 

#### Callbacks

##### Enter Config mode

Use this if you need to do something when your device enters configuration mode on failed WiFi connection attempt. Before `autoConnect()` @abstr_code_section `configModeCallback` declaration and example @abstr_code_section 

##### Save settings

This gets called when custom parameters have been set **AND** a connection has been established. Use it to set a flag, so when all the configuration finishes, you can save the extra parameters somewhere.

See @abstr_hyperlink . @abstr_code_section `saveConfigCallback` declaration and example @abstr_code_section 

#### Configuration Portal Timeout

If you need to set a timeout so the ESP doesn't hang waiting to be configured, for instance after a power failure, you can add @abstr_code_section which will wait @abstr_number minutes ( @abstr_number seconds). When the time passes, the autoConnect function will return, no matter the outcome. Check for connection and if it's still not established do whatever is needed (on some modules I restart them to retry, on others I enter deep sleep)

#### On Demand Configuration Portal

If you would rather start the configuration portal on demand rather than automatically on a failed connection attempt, then this is for you.

Instead of calling `autoConnect()` which does all the connecting and failover configuration portal setup for you, you need to use `startConfigPortal()`. __Do not use BOTH.__

Example usage @abstr_code_section See example for a more complex version. @abstr_hyperlink 

#### Custom Parameters

You can use WiFiManager to collect more parameters than just SSID and password. This could be helpful for configuring stuff like MQTT host and port, @abstr_hyperlink or @abstr_hyperlink tokens, just to name a few. **You are responsible for saving and loading these custom values.** The library just collects and displays the data for you as a convenience. Usage scenario would be: \- load values from somewhere (EEPROM/FS) or generate some defaults \- add the custom parameters to WiFiManager using @abstr_code_section \- if connection to AP fails, configuration portal starts and you can set /change the values (or use on demand configuration portal) \- once configuration is done and connection is established save config callback is called \- once WiFiManager returns control to your application, read and save the new values using the `WiFiManagerParameter` object. @abstr_code_section   
This feature is a lot more involved than all the others, so here are some examples to fully show how it is done. You should also take a look at adding custom HTML to your form.

  * Save and load custom parameters to file system in json form @abstr_hyperlink 
  * _Save and load custom parameters to EEPROM_ (not done yet)



#### Custom IP Configuration

You can set a custom IP for both AP (access point, config mode) and STA (station mode, client mode, normal project state)

##### Custom Access Point IP Configuration

This will set your captive portal to a specific IP should you need/want such a feature. Add the following snippet before `autoConnect()` @abstr_code_section 

##### Custom Station (client) Static IP Configuration

This will make use the specified IP configuration instead of using DHCP in station mode. @abstr_code_section There are a couple of examples in the examples folder that show you how to set a static IP and even how to configure it through the web configuration portal.

#### Custom HTML, CSS, Javascript

There are various ways in which you can inject custom HTML, CSS or Javascript into the configuration portal. The options are: \- inject custom head element You can use this to any html bit to the head of the configuration portal. If you add a `<style>` element, bare in mind it overwrites the included css, not replaces. @abstr_code_section \- inject a custom bit of html in the configuration form @abstr_code_section \- inject a custom bit of html in a configuration form element Just add the bit you want added as the last parameter to the custom parameter constructor. @abstr_code_section 

#### Filter Networks

You can filter networks based on signal quality and show/hide duplicate networks.

  * If you would like to filter low signal quality networks you can tell WiFiManager to not show networks below an arbitrary quality %; @abstr_code_section will not show networks under @abstr_number % signal quality. If you omit the parameter it defaults to @abstr_number %;

  * You can also remove or show duplicate networks (default is remove). Use this function to show (or hide) all networks. @abstr_code_section 




#### Debug

Debug is enabled by default on Serial. To disable add before autoConnect @abstr_code_section 

## Troubleshooting

If you get compilation errors, more often than not, you may need to install a newer version of the ESP @abstr_number core for Arduino.

Changes added on @abstr_number . @abstr_number should make the latest trunk work without compilation errors. Tested down to ESP @abstr_number core @abstr_number . @abstr_number . @abstr_number . _*Please update to version @abstr_number . @abstr_number *_

I am trying to keep releases working with release versions of the core, so they can be installed through boards manager, but if you checkout the latest version directly from github, sometimes, the library will only work if you update the ESP @abstr_number core to the latest version because I am using some newly added function.

If you connect to the created configuration Access Point but the configuration portal does not show up, just open a browser and type in the IP of the web portal, by default `@abstr_number . @abstr_number . @abstr_number . @abstr_number`.

If trying to connect ends up in an endless loop, try to add `setConnectTimeout( @abstr_number )` before `autoConnect();`. The parameter is timeout to try connecting in seconds.

## Releases

#### @abstr_number . @abstr_number

  * removed @abstr_number header response
  * fixed incompatibility with other libs using isnan and other std:: functions without namespace



##### @abstr_number . @abstr_number

  * a lot more reliable reconnecting to networks
  * custom html in custom parameters (for read only params)
  * custom html in custom parameter form (like labels)
  * custom head element (like custom css)
  * sort networks based on signal quality
  * remove duplicate networks



##### @abstr_number . @abstr_number

  * some css changes
  * bug fixes and speed improvements
  * added an alternative to waitForConnectResult() for debugging
  * changed `setTimeout(seconds)` to `setConfigPortalTimeout(seconds)`



##### @abstr_number . @abstr_number

  * fixed support for encoded characters in ssid/pass



##### @abstr_number . @abstr_number

  * made it compile on older versions of ESP @abstr_number core as well, tested down to @abstr_number . @abstr_number . @abstr_number 
  * added simple example for Custom IP



##### @abstr_number . @abstr_number

  * added static IP in station mode
  * added example of persisting custom IP to FS config.json
  * more option on portal homepage
  * added on PlatformIO



##### @abstr_number . @abstr_number

  * custom parameters
  * prettier
  * on demand config portal
  * commit # @abstr_number :D



##### @abstr_number . @abstr_number

  * Added to Arduino Boards Manager - Thanks Max
  * moved most stuff to PROGMEM
  * added signal quality and a nice little padlock to show which networks are encrypted



##### v @abstr_number . @abstr_number - all of it user contributed changes - Thank you

  * added ability to password protect the configuration Access Point
  * callback for enter configuration mode
  * memory allocation improvements



##### v @abstr_number . @abstr_number

  * removed the need for EEPROM and works with the @abstr_number . @abstr_number . @abstr_number and above stable release of the ESP @abstr_number for Arduino IDE package
  * removed restart on save of credentials
  * updated examples



##### v @abstr_number . @abstr_number

needs the latest staging version (or at least a recent release of the staging version) to work

##### v @abstr_number . @abstr_number

works with the staging release ver. @abstr_number . @abstr_number . @abstr_number - @abstr_number -g @abstr_number a, built on Aug @abstr_number , @abstr_number of the ESP @abstr_number Arduino library.

### Contributions and thanks

The support and help I got from the community has been nothing short of phenomenal. I can't thank you guys enough. This is my first real attept in developing open source stuff and I must say, now I understand why people are so dedicated to it, it is because of all the wonderful people involved.

__THANK YOU__

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

Sorry if i have missed anyone.

#### Inspiration

  * http://www.esp @abstr_number .com/viewtopic.php?f= @abstr_number &t= @abstr_number 


