@abstr_hyperlink @abstr_hyperlink 

IMPORTANT NOTE: For AVR based systems, avr-gcc @abstr_number . @abstr_number .x is supported and tested. This means Arduino @abstr_number . @abstr_number . @abstr_number and later.

# FastLED @abstr_number . @abstr_number 

This is a library for easily & efficiently controlling a wide variety of LED chipsets, like the ones sold by adafruit (Neopixel, DotStar, LPD @abstr_number ), Sparkfun (WS @abstr_number ), and aliexpress. In addition to writing to the leds, this library also includes a number of functions for high-performing @abstr_number bit math for manipulating your RGB values, as well as low level classes for abstracting out access to pins and SPI hardware, while still keeping things as fast as possible. Tested with Arduino up to @abstr_number . @abstr_number . @abstr_number from arduino.cc.

Quick note for people installing from GitHub repo zips, rename the folder FastLED before copying it to your Arduino/libraries folder. Github likes putting -branchname into the name of the folder, which unfortunately, makes Arduino cranky!

We have multiple goals with this library:

  * Quick start for new developers - hook up your leds and go, no need to think about specifics of the led chipsets being used
  * Zero pain switching LED chipsets - you get some new leds that the library supports, just change the definition of LEDs you're using, et. voila! Your code is running with the new leds.
  * High performance - with features like zero cost global brightness scaling, high performance @abstr_number -bit math for RGB manipulation, and some of the fastest bit-bang'd SPI support around, FastLED wants to keep as many CPU cycles available for your led patterns as possible



## Getting help

If you need help with using the library, please consider going to the reddit community first, which is at http://fastled.io/r (or https://reddit.com/r/FastLED) - there are hundreds of people in that group and many times you will get a quicker answer to your question there, as you will be likely to run into other people who have had the same issue. If you run into bugs with the library (compilation failures, the library doing the wrong thing), or if you'd like to request that we support a particular platform or LED chipset, then please open an issue at http://fastled.io/issues and we will try to figure out what is going wrong.

## Simple example

How quickly can you get up and running with the library? Here's a simple blink program:
    
    
    #include "FastLED.h"
    #define NUM_LEDS  @abstr_number 
    CRGB leds[NUM_LEDS];
    void setup() { FastLED.addLeds<NEOPIXEL,  @abstr_number >(leds, NUM_LEDS); }
    void loop() {
        leds[ @abstr_number ] = CRGB::White; FastLED.show(); delay( @abstr_number );
        leds[ @abstr_number ] = CRGB::Black; FastLED.show(); delay( @abstr_number );
    }
    

## Supported LED chipsets

Here's a list of all the LED chipsets are supported. More details on the led chipsets are included _TODO: Link to wiki page_

  * Adafruit's DotStars - AKA the APA @abstr_number 
  * Adafruit's Neopixel - aka the WS @abstr_number B (also WS @abstr_number /WS @abstr_number /WS @abstr_number , also supported in lo-speed mode) - a @abstr_number wire addressable led chipset
  * TM @abstr_number / @abstr_number - @abstr_number wire chipset, cheaply available on aliexpress.com
  * TM @abstr_number - @abstr_number wire chipset, sold by radio shack
  * UCS @abstr_number - another @abstr_number wire led chipset, cheap
  * GW @abstr_number - another @abstr_number wire led chipset
  * LPD @abstr_number - SPI based chpiset, very high speed
  * WS @abstr_number - SPI based chipset, cheap and widely available
  * SM @abstr_number - SPI based chipset
  * APA @abstr_number - SPI based chipset
  * P @abstr_number - aka Cool Neon's Total Control Lighting
  * DMX - send rgb data out over DMX using arduino DMX libraries
  * SmartMatrix panels - needs the SmartMatrix library - https://github.com/pixelmatix/SmartMatrix
  * LPD @abstr_number - SPI based chpiset, chip CMODE pin must be set to @abstr_number (inside oscillator mode)



HL @abstr_number , and " @abstr_number "-style shift registers are no longer supported by the library. The older Version @abstr_number of the library ("FastSPI_LED") has support for these, but is missing many of the advanced features of current versions and is no longer being maintained.

## Supported platforms

Right now the library is supported on a variety of arduino compatable platforms. If it's ARM or AVR and uses the arduino software (or a modified version of it to build) then it is likely supported. Note that we have a long list of upcoming platforms to support, so if you don't see what you're looking for here, ask, it may be on the roadmap (or may already be supported). N.B. at the moment we are only supporting the stock compilers that ship with the arduino software. Support for upgraded compilers, as well as using AVR studio and skipping the arduino entirely, should be coming in a near future release.

  * Arduino & compatibles - straight up arduino devices, uno, duo, leonardo, mega, nano, etc...
  * Arduino Yún
  * Adafruit Trinket & Gemma - Trinket Pro may be supported, but haven't tested to confirm yet
  * Teensy @abstr_number , Teensy++ @abstr_number , Teensy @abstr_number . @abstr_number , Teensy @abstr_number . @abstr_number / @abstr_number . @abstr_number , Teensy LC - arduino compataible from pjrc.com with some extra goodies (note the teensy @abstr_number , @abstr_number . @abstr_number , and LC are ARM, not AVR!)
  * Arduino Due and the digistump DigiX
  * RFDuino
  * SparkCore
  * Arduino Zero
  * ESP @abstr_number using the arduino board definitions from http://arduino.esp @abstr_number .com/stable/package_esp @abstr_number com_index.json - please be sure to also read https://github.com/FastLED/FastLED/wiki/ESP @abstr_number -notes for information specific to the @abstr_number .
  * The wino board - http://wino-board.com



What types of platforms are we thinking about supporting in the future? Here's a short list: ChipKit @abstr_number , Maple, Beagleboard

## What about that name?

Wait, what happend to FastSPI_LED and FastSPI_LED @abstr_number ? The library was initially named FastSPI_LED because it was focused on very fast and efficient SPI access. However, since then, the library has expanded to support a number of LED chipsets that don't use SPI, as well as a number of math and utility functions for LED processing across the board. We decided that the name FastLED more accurately represents the totality of what the library provides, everything fast, for LEDs.

## For more information

Check out the official site http://fastled.io for links to documentation, issues, and news

_TODO_ \- get candy
