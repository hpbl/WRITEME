# The unofficial WWDC app for macOS

WWDC for macOS allows both attendees and non-attendees to access WWDC livestreams, videos and sessions during the conference and as a year-round resource.

⬇️ If you just want to download the latest release, go to @abstr_hyperlink .

## Schedule

The schedule tab shows the schedule for the most recent WWDC, and allows you to watch live streams for the Keynote and other sessions throughout the week.

@abstr_image 

## Videos

Watch this year's videos as they're released and access videos from previous years. With @abstr_hyperlink integration, you can also read transcripts of sessions and easily jump to a specific point in the relevant video.

@abstr_image 

### Video features

  * Watch videos in @abstr_number . @abstr_number x, @abstr_number x, @abstr_number . @abstr_number x or @abstr_number x speeds
  * Fullscreen and native picture-in-picture support
  * Navigate video contents easily with the help of transcripts



## Chromecast

You can watch WWDC videos (both live and on-demand) on your Chromecast. Just click the Chromecast button while playing a video, choose your device from the list and control playback using the Google Home app on your phone.

@abstr_image 

## Bookmarks

Have you ever found yourself watching a WWDC session and wishing you could take notes at a specific point in the video to refer back to later on? This is now possible with bookmarks.

With bookmarks, you can create a reference point within a video and add an annotation to it. Your bookmark annotations can also be considered while using the search, so it's easier than ever to find the content you've bookmarked before.

@abstr_image 

## iCloud Sync

With version @abstr_number . @abstr_number , you can try out our new iCloud sync feature. Enable the feature in preferences and your favorites, bookmarks and progress in sessions will be synced accross all your Macs.

## Sharing

You can easily share links to sessions or videos by using the share button. The links shared are for Apple's developer website, but the app can open these links if you drag them into the icon (or if you use @abstr_hyperlink ).

## Nerdy bits 🤓

### Code of Conduct

We expect all of our contributors to help uphold the values set out in our code of conduct. We fundamentally believe this will help us build a better community, and with it a better app.

### Contributing

Please read the contribution guidelines before opening an issue or pull request.

### External libraries

A number of third-party libraries are used by the app:

  * @abstr_hyperlink : data storage and caching
  * @abstr_hyperlink : automatic updates
  * @abstr_hyperlink : sync support
  * @abstr_hyperlink : crash reporting and error logging
  * @abstr_hyperlink : networking
  * @abstr_hyperlink : reactive extensions
  * @abstr_hyperlink : reactive extensions for Realm



### Internal libraries

  * **ConfCore** is the core of the app that deals with Apple's WWDC API, data storage, caching, syncing and transcripts (everything that has to do with data, basically)
  * **PlayerUI** contains the UI components for the video player and some general-purpose UI components used throughout the app
  * **ThrowBack** provides support for migration of user data and preferences from old versions of the app



## Building the app

**Building requires Xcode @abstr_number . @abstr_number or later.**

Building the app requires @abstr_hyperlink to be installed.

**Clone this branch and before opening the project, run`./bootstrap.sh`** to fetch the dependencies (this script can take a while to run, that's normal).

Since the app uses CloudKit, when you build it yourself, all of the CloudKit-dependant functionality will not be available. CloudKit requires a provisioning profile and a paid developer account.

To build the app yourself without the need for a developer account and a CloudKit container, **always use the`WWDC` target when building**. The `WWDC with iCloud` target requires a paid developer account and a CloudKit container, which you won't be able to create because of the app's bundle identifier.

@abstr_image 

### Clearing app data during development

If you need to clear the app's preferences and stored data during development, you can run `./cleardata.sh` in the project folder. **This will delete all of your preferences and data like favorites, bookmarks and progress in videos, so be careful**.
