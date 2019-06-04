# Cleanflight

Clean-code version of baseflight flight-controller - flight controllers are used to fly multi-rotor craft and fixed wing craft.

This fork differs from baseflight in that it attempts to use modern software development practices which result in:

@abstr_number . greater reliability through code robustness and automated testing. @abstr_number . easier maintainance through code cleanliness. @abstr_number . easier to develop new features. @abstr_number . easier to re-use code though code de-coupling and modularisation.

The MultiWii software, from which baseflight originated, violates many good software development best-practices. Hopefully this fork will go some way to address them. If you see any bad code in this fork please immediately raise an issue so it can be fixed, or better yet submit a pull request.

## Additional Features

Cleanflight also has additional features not found in baseflight.

  * Multi-color RGB LED Strip support (each LED can be a different color using variable length WS @abstr_number Addressable RGB strips - use for Orientation Indicators, Low Battery Warning, Flight Mode Status, etc)
  * Oneshot ESC support.
  * Blackbox flight recorder logging (to onboard flash or external SD card).
  * Support for additional targets that use the STM @abstr_number F @abstr_number processors (baseflight only supports STM @abstr_number F @abstr_number ).
  * Support for the TauLabs Sparky board (~$ @abstr_number STM @abstr_number F @abstr_number I @abstr_number C sensors, based board with acc/gyro/compass and baro!)
  * Support for the OpenPilot CC @abstr_number D board. (~$ @abstr_number STM @abstr_number F @abstr_number board, SPI acc/gyro)
  * Support for the CJMCU nano quadcopter board.
  * Support for developer breakout boards: (Port @abstr_number R, EUSTM @abstr_number F @abstr_number RC, Olimexino, STM @abstr_number F @abstr_number Discovery).
  * Support for more than @abstr_number RC channels - (e.g. @abstr_number Channels via FrSky X @abstr_number RSB SBus).
  * Support for N-Position switches via flexible channel ranges - not just @abstr_number like baseflight or @abstr_number / @abstr_number in MultiWii
  * Lux's new PID (uses float values internally, resistant to looptime variation).
  * Simultaneous Bluetooth configuration and OSD.
  * Better PWM and PPM input and failsafe detection than baseflight.
  * Better FrSky Telemetry than baseflight.
  * MSP Telemetry.
  * RSSI via ADC - Uses ADC to read PWM RSSI signals, tested with FrSky D @abstr_number R-II and X @abstr_number R.
  * Autotune - ported from BradWii, experimental - feedback welcomed.
  * OLED Displays - Display information on: Battery voltage, profile, rate profile, version, sensors, RC, etc.
  * In-flight manual PID tuning and rate adjustment.
  * Rate profiles and in-flight selection of them.
  * Graupner PPM failsafe.
  * Graupner HoTT telemetry.
  * Multiple simultantious telemetry providers.
  * Configurable serial ports for Serial RX, Telemetry, MSP, GPS - Use most devices on any port, softserial too.
  * more many minor bug fixes.



For a list of features, changes and some discussion please review the thread on MultiWii forums and consult the documenation.

http://www.multiwii.com/forum/viewtopic.php?f= @abstr_number &t= @abstr_number 

## Installation

See: https://github.com/cleanflight/cleanflight/blob/master/docs/Installation.md 

## Documentation

There is lots of documentation here: https://github.com/cleanflight/cleanflight/tree/master/docs 

If what you need is not covered then refer to the baseflight documentation. If you still can't find what you need then visit the #cleanflight on the Freenode IRC network

## IRC Support and Developers Channel

There's a dedicated IRC channel here:

irc://irc.freenode.net/#cleanflight

If you are using windows and don't have an IRC client installed then take a look at HydraIRC - here: http://hydrairc.com/

Etiquette: Don't ask to ask and please wait around long enough for a reply - sometimes people are out flying, asleep or at work and can't answer immediately.

## Videos

There is a dedicated Cleanflight youtube channel which has progress update videos, flight demonstrations, instrutions and other related videos.

https://www.youtube.com/playlist?list=PL @abstr_number H @abstr_number fAj_XUNVBEcp @abstr_number vbMH @abstr_number DrllZAGWkt @abstr_number 

Please subscribe and '+ @abstr_number ' the videos if you find them useful.

## Configuration Tool

To configure Cleanflight you should use the Cleanlight-configurator GUI tool (Windows/OSX/Linux) that can be found here:

https://chrome.google.com/webstore/detail/cleanflight-configurator/enacoimjcgeinfnnnpajinjgmkahmfgb

The source for it is here:

https://github.com/cleanflight/cleanflight-configurator

## Contributing

Contributions are welcome and encouraged. You can contribute in many ways:

  * Documentation updates and corrections.
  * How-To guides - received help? help others!
  * Bug fixes.
  * New features.
  * Telling us your ideas and suggestions.



The best place to start is the IRC channel on freenode (see above), drop in, say hi. Next place is the github issue tracker:

https://github.com/cleanflight/cleanflight/issues https://github.com/cleanflight/cleanflight-configurator/issues

Before creating new issues please check to see if there is an existing one, search first otherwise you waste peoples time when they could be coding instead!

## Developers

There is a developers section in the `docs/development` folder.

Before making any code contributions, take a note of the https://github.com/multiwii/baseflight/wiki/CodingStyle

For this fork it is also advised to read about clean code, here are some useful links:

  * http://cleancoders.com/
  * http://en.wikipedia.org/wiki/SOLID_% @abstr_number object-oriented_design% @abstr_number 
  * http://en.wikipedia.org/wiki/Code_smell
  * http://en.wikipedia.org/wiki/Code_refactoring
  * http://www.amazon.co.uk/Working-Effectively-Legacy-Robert-Martin/dp/ @abstr_number 



TravisCI is also used to run automatic builds

https://travis-ci.org/cleanflight/cleanflight

@abstr_hyperlink 

## Cleanflight Releases

https://github.com/cleanflight/cleanflight/releases
