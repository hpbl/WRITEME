# NPKC_ @abstr_number _Teensy @abstr_number . @abstr_number

NPKC @abstr_number key numpad key tester driven by Teensy @abstr_number . @abstr_number 

* * *

NPKC_ @abstr_number _V @abstr_number .ino

This version has two "layers."

How to change layers: Hold top left button (button @abstr_number in the code), then press slash (button @abstr_number )

Each layer has a different set of key codes which are sent to the arduino Keybaord library different ways

FYI: This code is using analogWrite for the LEDS instead of digitalWrite to obtain brightness control, utilizing PWM pins

Layer @abstr_number NUMPAD keys: This is useful for gaming because games can bind separate commands to numpad_ @abstr_number and regular @abstr_number , for example \- ledPins[ @abstr_number ] turns on \- sends numpad codes, using Keyboard.set_key and Keyboard.send_now because Keyboard.press was not working \- keyHolds array remembers what keys have been pressed /released so that every cycle can send the keys to obtain @abstr_number -key rollover

Layer @abstr_number REGULAR keys: This is useful for using a number pad-like device on a laptop where you can't turn numlock on, as numlock on a laptop messes up the letters or other keys \- ledPins[ @abstr_number ] turns on \- sends regular key codes, using Keyboard.press and Keyboard.release for arduino built-in @abstr_number -key rollover

* * *
