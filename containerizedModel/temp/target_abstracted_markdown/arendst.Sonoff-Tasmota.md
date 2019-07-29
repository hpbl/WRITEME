@abstr_image 

# Sonoff-Tasmota

Alternative firmware for _ESP @abstr_number based devices_ like @abstr_hyperlink _ **Sonoff** _ with **web UI, rules and timers, OTA updates, custom device templates and sensor support**. Allows control over **MQTT** , **HTTP** , **Serial** and **KNX** for integrations with smart home systems. Written for Arduino IDE and PlatformIO.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

If you like **Sonoff-Tasmota** , give it a star, or fork it and contribute!

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

See @abstr_hyperlink for release information.

In addition to the @abstr_hyperlink the binaries can also be downloaded from http://thehackbox.org/tasmota/release/

## Development

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

See @abstr_hyperlink for detailed change information.

The development codebase is checked hourly for changes and if new commits have been merged and compile successfuly they will be posted at http://thehackbox.org/tasmota/ (this web address can be used for OTA too). It is important to note that these are based on the current development codebase and it is not recommended to flash it to devices used in production or which are hard to reach in the event that you need to manually flash the device if OTA failed. The last compiled commit number is also posted on the same page along with the current build status (if a firmware rebuild is in progress).

## Disclaimer

:warning: **DANGER OF ELECTROCUTION** :warning:

A Sonoff device is not a toy. It uses Mains AC so there is a danger of electrocution if not installed properly. If you don't know how to install it, please call an electrician. Remember: _ **SAFETY FIRST** _. It is not worth risk to yourself, your family, and your home if you don't know exactly what you are doing. Never try to flash a Sonoff device while it is connected to MAINS AC.

We don't take any responsibility nor liability for using this software nor for the installation or any tips, advice, videos, etc. given by any member of this site or any related site.

## Note

Please do not ask to add new devices unless it requires additional code for new features. If the device is not listed as a module, try using @abstr_hyperlink first. If it is not listed in the @abstr_hyperlink create your own @abstr_hyperlink .

## Quick Install

Download one of the released binaries from https://github.com/arendst/Sonoff-Tasmota/releases and flash it to your hardware as @abstr_hyperlink .

## Important User Compilation Information

If you want to compile Sonoff-Tasmota yourself keep in mind the following:

  * Only Flash Mode **DOUT** is supported. Do not use Flash Mode DIO / QIO / QOUT as it might seem to brick your device. See @abstr_hyperlink for background information.
  * Sonoff-Tasmota uses a @abstr_number M linker script WITHOUT spiffs _* @abstr_number M (no SPIFFS)_ * for optimal code space. If you compile using ESP/Arduino library @abstr_number . @abstr_number . @abstr_number then download the provided new linker script to your Arduino IDE or Platformio base folder. Later version of ESP/Arduino library already contain the correct linker script. See @abstr_hyperlink .
  * To make compile time changes to Sonoff-Tasmota it can use the `user_config_override.h` file. It assures keeping your settings when you download and compile a new version. To use `user_config.override.h` you will have to make a copy of the provided `user_config_override_sample.h` file and add your setting overrides. To enable the override file you will need to use a compile define as documented in the `user_config_override_sample.h` file.



## Version Information

  * Sonoff-Tasmota provides all (Sonoff) modules in one file and starts with module Sonoff Basic.
  * Once uploaded, select @abstr_hyperlink using the configuration webpage, the commands `Modules` and `Module` or configure the @abstr_hyperlink for your device
  * After reboot select config menu again or use commands `GPIOs` and `GPIO` to change GPIO with desired sensor.



## Migration Information

See @abstr_hyperlink for instructions how to migrate to a major version. Pay attention to the following version breaks due to dynamic settings updates:

@abstr_number . Migrate to **Sonoff-Tasmota @abstr_number . @abstr_number .x** @abstr_number . Migrate to **Sonoff-Tasmota @abstr_number .x** @abstr_number . Migrate to **Sonoff-Tasmota @abstr_number . @abstr_number _* @abstr_number . Migrate to *_ Sonoff-Tasmota @abstr_number .x**

## Support Information

@abstr_image 

For a database of supported devices see @abstr_hyperlink 

See @abstr_hyperlink for use instructions and how-to's.  
See @abstr_hyperlink for forum.  
Visit @abstr_hyperlink for discussions and troubleshooting.

## Contribute

You can contribute to Sonoff-Tasmota by \- providing Pull Requests (Features, Proof of Concepts, Language files or Fixes) \- testing new released features and report issues \- donating to acquire hardware for testing and implementing or out of gratitude \- contributing missing documentation for features and devices on our @abstr_hyperlink 

@abstr_hyperlink 

## Credits

### Libraries Used

Libraries used with Sonoff-Tasmota are: \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- FrogmoreScd @abstr_number \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink 

### People inspiring me

People helping to keep the show on the road: \- David Lang providing initial issue resolution and code optimizations \- Heiko Krupp for his IRSend, HTU @abstr_number , SI @abstr_number xx and Wemo/Hue emulation drivers \- Wiktor Schmidt for Travis CI implementation \- Thom Dietrich for PlatformIO optimizations \- Marinus van den Broek for his EspEasy groundwork \- Pete Ba for more user friendly energy monitor calibration \- Lobradov providing compile optimization tips \- Flexiti for his initial timer implementation \- reloxx @abstr_number for his @abstr_hyperlink management tool \- Joachim Banzhaf for his TSL @abstr_number library and driver \- Gijs Noorlander for his MHZ @abstr_number , SenseAir and updated PubSubClient drivers \- Emontnemery for his HomeAssistant Discovery concept and many code tuning tips \- Aidan Mountford for his HSB support \- Daniel Ztolnai for his Serial Bridge implementation \- Gerhard Mutz for multiple sensor & display drivers, Sunrise/Sunset, and scripting \- Nuno Ferreira for his HC-SR @abstr_number driver \- Adrian Scillato for his (security)fixes and implementing and maintaining KNX \- Gennaro Tortone for implementing and maintaining Eastron drivers \- Raymond Mouthaan for managing Wemos Wiki information \- Norbert Richter for his decode-config.py tool \- Andre Thomas for providing @abstr_hyperlink OTA support and daily development builds \- Joel Stein and digiblur for their Tuya research and driver \- Frogmore @abstr_number and Jason @abstr_number for providing many issue answers \- Blakadder for editing the wiki and providing template management \- Stephan Hadinger for refactoring light driver and enhancing HueEmulation \- tmo for designing the official logo \- Many more providing Tips, Wips, Pocs or PRs

## License

This program is licensed under GPL- @abstr_number . @abstr_number 
