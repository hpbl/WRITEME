@abstr_image 

# Aerial - Apple TV Aerial Views Screen Saver

Aerial is a Mac screensaver based on the new Apple TV screensaver that displays the Aerial movies Apple shot over New York, San Francisco, Hawaii, China, etc. Starting with version @abstr_number . @abstr_number , this also includes the new ISS videos available in tvOS @abstr_number !

Aerial is completely open source, so feel free to contribute to its development.

@abstr_image @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

###### Windows user? Try @abstr_hyperlink 

###### Linux user? Try @abstr_hyperlink 

#### Coded with Love by John Coates ( @abstr_hyperlink , @abstr_hyperlink )

Starting with version @abstr_number . @abstr_number , Aerial is also maintained by:

  * @abstr_hyperlink ( @abstr_hyperlink )



You can see a list of contributors @abstr_hyperlink .

## Installation

### Manual Installation

_Rather install from Terminal or have auto-updates? Look at the Brew Cask section below!_

@abstr_number . Quit **System Preferences**. @abstr_number . @abstr_hyperlink . (Version @abstr_number . @abstr_number . @abstr_number , May @abstr_number st @abstr_number ). Alternatively, you can try the latest beta version @abstr_hyperlink . @abstr_number . Unzip the downloaded file (if you use Safari, it should already be done for you). @abstr_number . Double-click `Aerial.saver`; it will open in `System Preferences` > `Desktop & Screen Saver` and ask you if you want to install for all users or for your user only.

If you see an error message saying "This app is damaged and can't be opened, you should move it to the trash", we suggest that **you download the file with Safari** , to prevent macOS Gatekeeper from throwing that error. Note that some outdated unzip software may cause that issue too.

**Important** : If you haven't quit System Preferences before installation and were upgrading from a previous version, we strongly recommend you quit the application after installation, then reopen it, as updated Swift screensavers aren't loaded correctly in an active System Preferences session.

### Brew Cask Support - (Updated to @abstr_number . @abstr_number . @abstr_number )

If you're looking to install Aerial across many systems, remotely, or simply from Terminal we recommend @abstr_hyperlink . Prefer this method if you're looking for auto-updates.

Simply issue the following Terminal command:

@abstr_code_section 

To upgrade Aerial, run the following Terminal command:

@abstr_code_section 

Please note that if you prefer using homebrew to update Aerial, we recommend you disable Sparkle auto updates in the `Updates`tab. 

## Setting Aerial as Your Screen Saver

@abstr_number . Open `System Preferences` -> `Desktop & Screen Saver` -> `Screen Saver` @abstr_number . Choose Aerial and click on `Screen Saver` Options to select your settings.

@abstr_image 

## Uninstallation

There are three options to uninstall Aerial from your Mac.

  * Right-click on the Aerial screensaver in `System Preferences` and select `Delete "Aerial"`.
  * Or delete the file(s) directly. macOS can store screen savers in two locations. `/Library/Screen Savers` and `/Users/YOURUSERNAME/Library/Screen Savers`. Check both locations for a file called `Aerial.saver` and delete any copies you find.
  * If you installed Aerial using Brew Cask, then enter the following command in a Terminal window to uninstall:

@abstr_code_section 




You may also want to delete the folder `/Users/YOURUSERNAME/Library/Caches/Aerial` (or `/Library/Caches/Aerial`). This is where Aerial stores the cached copies of the Aerial videos. The last thing, you may want to delete the preferences `plist`. The file is `/Users/YOURUSERNAME/Library/Preferences/ByHost/com.JohnCoates.Aerial.{UUID}.plist`.

## New features in @abstr_number . @abstr_number . @abstr_number

This latest version includes many new features and enhancements:

  * _* @abstr_number new videos available in @abstr_number K:_ * Following the content update from January @abstr_number th, Aerial now includes @abstr_number videos, @abstr_number of which are also available in @abstr_number K. Aerial will periodically check for new videos, you can manage this in the `Updates` tab. 
  * **Automatic updates support through Sparkle:** Aerial now uses Sparkle to automatically updates itself, including when your screensaver runs. All of this can be managed in the `Updates` tab. 



@abstr_image 

  * **Localization for community support** in Arabic, Chinese Simplified, English, French, German, Hebrew, Polish and Spanish! Thanks to all the contributors. If you want to help, please read the details here.
  * **You can now skip an Aerial with the right arrow key**
  * **You can now save your favorite videos sets to enable them quickly**



@abstr_image 

## Multilanguage support

Aerial features overlay descriptions of the main geographical features displayed in the videos.

@abstr_image 

These descriptions are available in many languages (Spanish, French, Polish… check the complete list here) and that is only possible thanks to the collaboration and uninterested work of many. To best serve the international community we've defined a translation workflow that allows any person, even with **no technical background** to help translating these descriptions.

If you want to collaborate, please read the details here.

## Features

@abstr_image 

  * **Every Aerial video:** From the very first Aerials in San Francisco to the new space videos shot from the ISS! Now with better titles too so you can find your favorite videos faster.
  * _* @abstr_number K HEVC:_ * With the launch of Apple TV @abstr_number K, many videos are now available in this format (With version @abstr_number . @abstr_number . @abstr_number , @abstr_number of the @abstr_number videos are available in @abstr_number K!). Aerial will show you the best format available, based on your preferences.



@abstr_image 

  * **Different videos based on time:** Want to see night videos at night? Aerial can calculate for you the dusk/dawn times. You can also use Night Shift sunset and sunrise detection (See @abstr_hyperlink , you do not need to enable Night Shift).
  * **Feeling Dark?:** Aerial is now compatible with Dark Mode in macOS @abstr_number . @abstr_number Mojave and can play night videos when Dark Mode is enabled.



@abstr_image 

  * **Descriptions:** Wondering where an Aerial view was shot? Aerial can now tell you as they play. We even have extended descriptions written by our community of users. Help us to improve these descriptions by translating them to your language.



@abstr_image 

  * **Remove video duplicates:** Aerial can now cleanup your old videos (They are periodically updated to fix colors, provide longer versions of previously existing videos, or upgraded to @abstr_number K). Go to the `Advanced` Tab and either move the files away or send them to the trash to reclaim free space. The `Move old videos` button will move the video files to a directory created within the Aerial cache called `oldvideos`, which will contain a dated directory within it. You can find them at `/Users/YOURUSERNAME/Library/Caches/Aerial/oldvideos/YYYY-MM-DD`



@abstr_image 

  * **Brightness control:** Aerial can progressively dim the brightness of your screens before your Mac goes to sleep. You can even enable this feature only at night, or only on battery if you prefer.
  * **Full offline mode:** Behind a firewall? Just copy the cache folder from another Mac and you are all set. You can also disable all streaming.
  * **Better cache management:** You can now cache your favorite videos individually, no need to grab them all. Or just stream them as you go, they'll get cached automatically too.
  * **Show videos in Quicktime:** You can now right click a video to open it in Quicktime.
  * **More battery controls:** Using Aerial on a Macbook? You can now specify a different video format on battery mode if you wish, or simply video playback using the Power Saving mode (Aerial will show a blank screen and reduce screen brightness instead of showing videos).
  * **Clock:** We even have a properly styled clock if that's your thing!
  * **And many bug fixes!**



## Compatibility

Aerial is written in Swift, which requires OS X Mavericks ( @abstr_number . @abstr_number ) or above.

## Community

  * **Found a bug?** @abstr_hyperlink . Try to be as specific as possible.
  * **Have fixed a bug?** We appreciate all pull requests.
  * **Can you translate the video descriptions?**. Awesome! Read here for details on how to help us.
  * **Have a feature request?** @abstr_hyperlink . Tell us why it be useful, and why you and others would want it.
  * **Curious about the videos and on a slow connection?** Check @abstr_hyperlink by @abstr_hyperlink .



## Offline Mode

If you want to use Aerial on a Mac behind a firewall or with no network access, the easiest way starting with version @abstr_number . @abstr_number is to copy the content of the cache folder from another Mac where Aerial is already installed.

If that's not an option, you can manually recreate a cache folder by downloading files manually.

  * Download and untar `https://sylvan.apple.com/Aerials/resources.tar` (tvOS @abstr_number resources, keep the tar _and_ extracted files)
  * Download and rename `https://sylvan.apple.com/Aerials/ @abstr_number x/entries.json` to `tvos @abstr_number .json` (tvOS @abstr_number resources, also in @abstr_number K)
  * Download and rename `http://a @abstr_number .phobos.apple.com/us/r @abstr_number / @abstr_number /Features/atv/AutumnResources/videos/entries.json` to `tvos @abstr_number .json` (The original Aerials, in @abstr_number p H. @abstr_number only)



You can then download the videos you want from the JSON files. In the @abstr_number K JSONs, you are looking for the `url- @abstr_number -H @abstr_number` ( @abstr_number p H. @abstr_number , most compatible format), `url- @abstr_number -SDR` ( @abstr_number p HEVC, better quality, requires a recent Mac for hardware decoding) or `url- @abstr_number K-SDR` ( @abstr_number K HEVC). As of macOS Mojave, the HDR versions of these videos won't play on Quicktime or AVFoundation, so avoid them.

## About HEVC and hardware decoding

Aerial uses Apple's @abstr_hyperlink to play the videos as your screensaver. When available, AVFoundation will use hardware decoding (From your CPU or your graphics card) to minimize the resources needed for video playback. You can find guidelines in the help button next to the `Preferred video format` setting. By default, Aerial uses @abstr_number p H. @abstr_number videos which is the most compatible format. Please note that all HEVC videos are encoded with the `Main @abstr_number` profile, which may not be hardware accelerated by your machine, while some other HEVC videos (Encoded in `Main` profile) will be.

While we wish to provide everyone with the best setting for their machine, the GVA framework from Apple doesn't let us distinguish HEVC `Main @abstr_number` profile acceleration from general HEVC acceleration. Early feedback we gathered also seems to point that on machines with multiple decoding options (Intel QuickSync and AMD UVD), QuickSync will always be preferred (Even if you "force" the discrete GPU use with an external monitor).

These are our recommendations so far:

  * Macs older than @abstr_number may lack H. @abstr_number acceleration.
  * Macs with an Intel CPU (With iGPU) from the Sandy Bridge ( @abstr_number ) generation to Broadwell (Early @abstr_number ) should have H. @abstr_number hardware acceleration available.
  * Late @abstr_number and @abstr_number Macs (Skylake and Kaby Lake) may only have partially accelerated HEVC decoding. We recommended you stick to @abstr_number p H. @abstr_number on laptops. You may consider the HEVC format on desktops but understand that decoding may be CPU intensive and spin up your fans.
  * Macs @abstr_number and up should have full HEVC acceleration.



You can easily check for yourself what to expect by opening a video in Quicktime (Use the `Show in Finder` option in the `Cache` tab to find the cached videos). In Activity Monitor, the AV Framework GVA process is called `VTDecoderXPCService`.

## Troubleshooting

  * Aerial logs you out of your user account everytime it starts: This looks like a new bug with macOS @abstr_number . @abstr_number . @abstr_number beta @abstr_number F @abstr_number f, possibly only for Macs with Intel graphics. As a workaround, please tick the Show Clock option in the main screensaver settings (not on Aerial settings). More information here : https://github.com/JohnCoates/Aerial/issues/ @abstr_number 
  * Videos keeps disappearing, Aerial may not restart once in a while: Aerial stores all it's data in a Cache folder. This cache may get deleted by some third party software trying to free disk space. If you use such a "Cleaning" tool, we recommend you set a manual folder location in the Cache tab of Aerial. For example, you can create an Aerial folder in your User folder, and point to it. This will ensure Aerial files don't get deleted.
  * "Done" button doesn't close Aerial: Please update to latest available version, this is a bug on Mojave with very old versions of Aerial ( @abstr_number . @abstr_number and below).
  * Can't type into text fields with macOS High Sierra/Video corruption issue on High Sierra: Please make sure you have at least version @abstr_number . @abstr_number . @abstr_number .
  * "This app is damaged and can't be opened, you should move it to the trash" when double-clicking the `Aerial.saver` file: Please see the installation notes above, this is a GateKeeper issue.
  * Brightness control does not control external displays: Aerial uses the brightness API from macOS to change the brightness of your screens. Depending on your external screens (brand, the way they are connected, etc), macOS may not be able to control their brightness. Please check first if you can control the brightness of your external screen(s) using the brightness keys from your keyboard. If you can't, Aerial won't be able to control their brightness either. If you can control their brightness through those keyboard keys but see an issue with Aerial, please open an issue.
  * Not seeing extended descriptions: Make sure you have version @abstr_number . @abstr_number . @abstr_number or above.
  * Black screen: If you are behind a firewall (Like Little Snitch or Hands Off!) try creating exceptions for Aerial to allow it access to Apple's servers. Be sure the applications `ScreenSaverEngine.app` and `System Preferences.app` are not being blocked access to `*.phobos.apple.com`, `*.phobos.apple.com.edgesuite.net` and `sylvan.apple.com`. If that isn't an option, please look at the Offline mode section.
  * "You cannot use the Aerial screen saver with this version of macOS." error: Select Aerial, close `System Preferences` with Aerial still selected, re-open System Preferences and Aerial should now work. This is a known bug with Swift screensavers in macOS/OS X reported to Apple as @abstr_hyperlink .
  * High CPU usage/fan spinning all of a sudden: If you correctly configured the preferred video format according to your Mac and still experience high CPU usage/fan spinning all of a sudden, please look for the cause with `Activity Monitor`, you may see a `com.apple.photos.ImageConversionService` responsible for this CPU load. This is the iCloud Photos process, you can find more about @abstr_hyperlink and how to pause it.
  * Can't use Aerial as a login screensaver: As far as we know, using @abstr_number rd party screensavers before login is no longer possible on modern versions of macOS. More about this @abstr_hyperlink .
  * Change cache location : This option simply changes _the location_ of the Cache folder that Aerial uses. It does _not_ move your files for you. Please note that this change will only be taken into account the next time Aerial starts (you may need to fully close System Preferences). We strongly recommend you use a path that's always accessible, as Aerial can't work without a Cache directory. In case the path is no longer available (missing USB key, etc), starting with Aerial @abstr_number . @abstr_number . @abstr_number , it will reset the Cache location to it's default location.



## License

@abstr_hyperlink 
