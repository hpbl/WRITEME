@abstr_image 

# Background Music

##### macOS audio utility

@abstr_image 

  * Automatically pauses your music player when other audio starts playing and unpauses it afterwards
  * Per-application volume, boost quiet apps
  * Record system audio   
  

  * No restart required to install
  * Runs entirely in userspace



## Download

### Version @abstr_number . @abstr_number . @abstr_number

@abstr_hyperlink ( @abstr_number KB)

Still very much in alpha. Not code signed, so you'll have to **right-click it and choose "Open"**.

**Requires macOS @abstr_number . @abstr_number +**. Should work on @abstr_number . @abstr_number , but I haven't tried it.

> MD @abstr_number : @abstr_number c @abstr_number f @abstr_number ba @abstr_number efc @abstr_number cbb @abstr_number e @abstr_number c @abstr_number   
>  SHA @abstr_number : @abstr_number ba @abstr_number ba @abstr_number e @abstr_number cbd @abstr_number bc @abstr_number e @abstr_number ea @abstr_number b @abstr_number cc @abstr_number ea @abstr_number be @abstr_number d @abstr_number bcfe @abstr_number c @abstr_number b @abstr_number   
>  PGP: @abstr_hyperlink , @abstr_hyperlink 

We also have @abstr_hyperlink .

### Or install using @abstr_hyperlink 

@abstr_code_section 

If you want the snapshot version:

@abstr_code_section 

## Auto-pause music

Background Music can pause your music player app when other audio starts playing and unpause it afterwards. The idea is that when I'm listening to music and pause it to watch a video or something I always forget to unpause it afterwards. So this keeps me from wearing headphones for hours listening to nothing.

So far iTunes, @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink are supported. Adding support for a new music player should only take a few minutes @abstr_number  \-- see BGMMusicPlayer.h. If you don't know how to program, or just don't feel like it, create an issue and I'll try to add it for you.

## App volumes

Background Music has a volume slider for each app running on the system. I mostly use this to boost quiet apps above their normal maximum volume.

## Recording system audio

With Background Music running, open QuickTime Player and go `File > New Audio Recording...` (or movie/screen). Then click the arrow next to the record button that looks like `⌄` and select `Background Music` as the input device.

You should be able to record system audio and a microphone together by creating an @abstr_hyperlink that combines your input device (usually Built-in Input) with the Background Music device. You can create the aggregate device using the Audio MIDI Setup utility from `/Applications/Utilities`.

## Install from source

Building should take less than a minute, but you'll need @abstr_hyperlink version @abstr_number or higher.

If you're comfortable with it, you can just paste the following at a Terminal prompt.

@abstr_code_section 

Otherwise, to build and install from source:

  * Clone or @abstr_hyperlink the project.
  * If the project is in a zip, unzip it.
  * Open `Terminal.app` and @abstr_hyperlink to the directory containing the project.
  * Run the following command: `/bin/bash build_and_install.sh`.



The script restarts the system audio process (coreaudiod) at the end of the installation, so you might want to pause any apps playing audio.

Additional detailed installation instructions can be found on @abstr_hyperlink .

## Uninstall

  * Run the `uninstall.sh` script (using `Terminal.app`) to remove Background Music from your system. You should be able to find it in `/Applications/Background Music.app/Contents/Resources/uninstall.sh`, but if not you can @abstr_hyperlink again.
  * Go to the Sound section in System Preferences and change your default output device at least once. (If you only have one device now, either use `Audio MIDI Setup.app` to create a temporary aggregate device, restart any audio apps that have stopped working or just restart your system.)



### Manual Uninstall

Try following the instructions in MANUAL-UNINSTALL.md if `uninstall.sh` fails. (You might consider submitting a bug report, too.)

## Troubleshooting

If Background Music crashes and your audio stops working, open the Sound panel in System Preferences and change your system's default output device to something other than the Background Music device. If it already is, it might help to change the default device and then change it back again.

Failing that, you might have to uninstall. Consider filing a bug report if you do.

## Known issues

  * Setting an app's volume above @abstr_number % can cause @abstr_hyperlink . Currently, the best solution is to instead set your overall volume to max and lower the volumes of other apps.
  * VLC automatically pauses iTunes/Spotify when it starts playing something, but that stops Background Music from unpausing your music afterwards. To workaround it, open VLC's preferences, click `Show All`, go `Interface` > `Main interfaces` > `macosx` and change `Control external music players` to either `Do nothing` or `Pause and resume iTunes/Spotify`.

Similarly, Skype pauses iTunes during calls. If you want to disable that, uncheck `Pause iTunes during calls` on the General tab of Skype's preferences.

  * Plugging in or unplugging headphones when Background Music isn't running can silence system audio. To fix it, go to the Sound section in System Preferences, click the Output tab and change your default output device to something other than the Background Music device. Alternatively, you may Option+Click on the Sound icon in the menu bar to select a different output device.

This happens when macOS remembers that the Background Music device was your default audio device the last time you last used (or didn't use) headphones.

  * @abstr_hyperlink can stop Chrome from switching to the Background Music device after you open Background Music. Chrome's audio will still play, but Background Music won't be aware of it.
  * Some apps play notification sounds that are only just long enough to trigger an auto-pause. The only workaround right now is to increase the `kPauseDelayNSec` constant in BGMAutoPauseMusic.mm. That will make your music overlap the other audio for longer, though, so you don't want to increase it too much. See @abstr_hyperlink for details.
  * Plenty more. Some are in listed in TODO.md.



## Related projects

  * @abstr_hyperlink The sample code from Apple that BGMDriver is based on.
  * @abstr_hyperlink - "MacOS system extension that allows applications to pass audio to other applications."
  * @abstr_hyperlink - "globally capture whatever your mac is playing—-as simply as a screenshot"
  * @abstr_hyperlink , @abstr_hyperlink - "System-wide Audio Equalizer for the Mac"
  * @abstr_hyperlink - "An old piece of work to reverse engineer the Mac OSX user/kernel audio interface. Shows how to read audio straight out of the kernel as you would on Darwin (where most the OSX goodness is missing)"
  * @abstr_hyperlink , @abstr_hyperlink (Windows) - Auto-pause music
  * @abstr_hyperlink - "A Jack audio connection kit implementation for Mac OS X"
  * @abstr_hyperlink - "PulseAudio for Mac OS X"
  * @abstr_hyperlink - "Virtual audio device, real-time encoder and SPDIF forwarder for Mac OS X"
  * @abstr_hyperlink - "An infrastructure and application for multi-channel sound spatialization on MacOS X."



### Non-free

  * @abstr_hyperlink - "Capture Audio From Anywhere on Your Mac"
  * @abstr_hyperlink , @abstr_hyperlink - System/app audio recording, per-app volumes, system audio equaliser
  * @abstr_hyperlink - "Control application volume independently."
  * @abstr_hyperlink - "The Best Volume Booster & Equalizer For Mac"



## License

Copyright © @abstr_number - @abstr_number @abstr_hyperlink . Licensed under @abstr_hyperlink , or any later version.

Background Music includes code from:

  * @abstr_hyperlink , original license, Copyright (C) @abstr_number Apple Inc. All Rights Reserved.
  * @abstr_hyperlink , original license, Copyright (C) @abstr_number Apple Inc. All Rights Reserved.



* * *

**[ @abstr_number ]** However, if the music player doesn't support AppleScript, or doesn't support the events Background Music needs (`isPlaying`, `isPaused`, `play` and `pause`), it can take significantly more effort to add. (And in some cases would require changes to the music player itself.) ↩
