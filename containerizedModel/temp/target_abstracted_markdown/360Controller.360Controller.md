# Xbox Controller Driver for macOS

## Table of Contents

@abstr_number . About @abstr_number . Installation @abstr_number . Uninstallation @abstr_number . Usage @abstr_number . My controller doesn't work! @abstr_number . I'm using a driver from the Tattiebogle website @abstr_number . My controller doesn't work with a game! @abstr_number . How do I find my Vendor ID and Product ID? @abstr_number . Original Xbox Controllers @abstr_number . Wired Xbox @abstr_number Controllers @abstr_number . Wireless Xbox @abstr_number Controllers @abstr_number . Xbox One Controllers connected with USB @abstr_number . Xbox One Controllers connected with Wireless Adapter @abstr_number . Xbox One Controllers connected with Bluetooth @abstr_number . Xbox One Adaptive Controller @abstr_number . Adding Third Party Controllers @abstr_number . Developer Info @abstr_number . Building @abstr_number . Building the .pkg @abstr_number . Disabling signing requirements @abstr_number . Re-Enabling signing requirements @abstr_number . Debugging the driver @abstr_number . Debugging the preference pane @abstr_number . A note on Unity mappings @abstr_number . Licence

## About

This driver supports the Microsoft Xbox series of controllers including:

@abstr_number . Original Xbox \- Original Xbox controllers are supported by using a USB adapter.

@abstr_number . Xbox @abstr_number \- Wired Xbox @abstr_number controllers are supported directly. \- **As of macOS @abstr_number . @abstr_number , Wireless Xbox @abstr_number controller support causes kernel panics. This issue cannot be resolved with minor changes to the driver, and requires that the driver be re-written from scratch to resolve the issue. Due to an excess of caution, we have disabled Wireless Xbox @abstr_number controller support as of @abstr_number . @abstr_number . @abstr_number . If you want to use a wireless controller, download @abstr_number . @abstr_number . @abstr_number or earlier and disable the driver before the computer enters a "sleep" state in order to prevent kernel panics. Alternatively, you can revert to a macOS version before @abstr_number . @abstr_number to avoid this issue.**

@abstr_number . Xbox One \- Xbox One controllers are supported when connected with a micro USB cable. Using the controller with the Wireless Adapter is not currently supported. \- Bluetooth capable Xbox One controllers (released after August @abstr_number ) are natively supported by macOS without the use of this driver. However, installing this driver will allow you to use the controller via USB.

The driver provides developers with access to both force feedback and the LEDs of the controllers. Additionally, a preference pane has been provided so that users can configure their controllers and ensure that the driver has been installed properly.

Controller support includes ALL devices that work with an Xbox series piece of hardware. All wheels, fight sticks, and controllers should work. This includes things like the Xbox One Elite controller. If your hardware does not work with an Xbox console we cannot support it. Sorry.

This project is a fork of the @abstr_hyperlink originally created by Colin Munro.

## Installation

See the @abstr_hyperlink for the latest compiled and signed version of the driver. Most users will want to run this installer. If you are using macOS @abstr_number . @abstr_number . @abstr_number or later, then you will have to allow the signing certificate of "Drew Mills" in order for the software to run. Usually, the installer will prompt you to complete this process: @abstr_image You can either click "Open Security Preferences" to quickly fix this. If you didn't see this prompt, you can navigate to the same window using the Apple menu in the top left hand corner of your screen, navigating the "System Preferences" and then clicking on "Security & Privacy." This will open up the following page. All you need to do is click the "Allow" button near the bottom right. @abstr_image This prompt has been known to have issues with software or hardware that interferes with mouse movement. If you are using software that impacts the movement of your mouse, such as MagicKeys, or are using a special interface device, such as a Wacom tablet, please using a standard input device, such as a mouse, to click this button. This is a security feature of macOS and is out of our control.

## Uninstallation

In order to uninstall the driver: navigate to the preference pane by opening your "System Preferences," navigating to the "Xbox @abstr_number Controllers" pane, clicking on the "Advanced" tab and pressing the "Uninstall" button. This will prompt you to enter your password so that the uninstaller can remove all of the bundled software from your machine.

## Usage

The driver exposes a standard game pad with a number of standard controls, so any game that supports gaming devices should work. In some cases, this may require an update from the developer of the game. The preference pane uses the standard macOS frameworks for accessing HID devices in addition to access of Force Feedback capabilities. This means that the preference pane is a good indicator that the driver is functional for other programs.

It is important to note that this driver does not work, and can never work, with Apple's "Game Controller Framework." This GCController framework corresponds to physical gamepads that have been offically reviewed by Apple and accepted into the mFi program. Due to the fact that we are not Microsoft, we cannot get their gamepad certified to be a GCController. This is an unfortunate oversight on Apple's part. If you would like to discuss this, please do so at @abstr_hyperlink 

Users have been maintaining a @abstr_hyperlink Please contribute your findings so that you can help others debug their controller issues.

## My controller doesn't work!

### I'm using a driver from the Tattiebogle website

The Tattiebogle driver is NOT the same driver as this Github project. We do NOT support that driver. Under NO circumstances will we support that driver. If you download the latest version of this driver from the @abstr_hyperlink we will do our best to help you out. This driver will install over the Tattiebogle driver. You don't have to worry about uninstalling the Tattiebogle driver first.

### My controller doesn't work with a game!

We cannot fix game specific issues. This driver does its absolute best to put out a standardized format for games to use. If they don't take advantage of that, there is **ABSOLUTELY NOTHING** we can do. The best we can do for you is give you the "Pretend to be an Xbox @abstr_number Controller" option in the "Advanced" tab. This will make any wired Xbox @abstr_number or wired Xbox One controller appear to games as if it were an official Microsoft Xbox @abstr_number Controller. That way if the game is only looking for Xbox @abstr_number controllers and isn't looking for other devices like third party Xbox @abstr_number controllers or Xbox One controllers, you should be able to trick the game. If you experience an issue with a game that this toggle does not fix, we cannot help you, sorry. That is just the nature of drivers.

### How do I find my Vendor ID and Product ID?

Navigate to the Apple menu at the top left corner of your screen. Select the `About This Mac` option. This will open a new window, where you need to select `System Report...` in the `Overview` tab. This will open another new window. On the left hand side of this window, there will be a number of options. Select `USB`. It will be somewhere near the bottom of the `Hardware` section. This will show you the USB device tree. Find and click on the entry that corresponds to your controller. This will provide you with the information needed at the bottom of the window. If you cannot find your device, make sure that all devices are properly connected to the computer. Try different cables if the controller still is not found.

### Original Xbox Controllers

Make an issue describing your problem.

### Wired Xbox @abstr_number Controllers

Always check your controller with the preference pane found at: `Apple Menu -> System Preferences -> Xbox @abstr_number Controllers` before creating an issue. If the controller works in this menu, then the driver is operating as intended. If your controller works with this menu, but not with a specific game, then read the My controller doesn't work with a game! section. If you have a third party controller, make an issue following the template with the "Product ID" and "Vendor ID" of the controller. Follow How do I find my Vendor ID and Product ID? for instructions on how to find this information.

### Wireless Xbox @abstr_number Controllers

**As of macOS @abstr_number . @abstr_number , Wireless Xbox @abstr_number controller support causes kernel panics. This issue cannot be resolved with minor changes to the driver, and requires that the driver be re-written from scratch to resolve the issue. Due to an excess of caution, we have disabled Wireless Xbox @abstr_number controller support as of @abstr_number . @abstr_number . @abstr_number . If you want to use a wireless controller, download @abstr_number . @abstr_number . @abstr_number or earlier and disable the driver before the computer enters a "sleep" state in order to prevent kernel panics. Alternatively, you can revert to a macOS version before @abstr_number . @abstr_number to avoid this issue.**

### Xbox One Controllers connected with USB

Always check your controller with the preference pane found at: `Apple Menu -> System Preferences -> Xbox @abstr_number Controllers` before creating an issue. If the controller works in this menu, then the driver is operating as intended. If your controller works with this menu, but not with a specific game, then read the My controller doesn't work with a game! section. If your controller is recognized by the preference pane, but you aren't getting any response from button presses, this is likely due to an issue with macOS @abstr_number . @abstr_number and later. Apple changed some of the underlying USB code with this release and broke compatibility with some controllers. This is specifically found in controllers from PDP and PowerA. If you revert to macOS @abstr_number . @abstr_number or earlier, these controllers will work. If the preference pane can't find your controller, make sure that it is listed in `Apple Menu -> About this Mac -> System Report -> Overview -> Hardware -> USB`. This menu should list a device called "Controller." If it isn't listed there, then you likely have a "charge" Micro USB cable instead of a "data" cable. If the cable isn't sending data, then you can't use the driver. Try a different cable. If you have a third party controller, make an issue following the template with the "Product ID" and "Vendor ID" of the controller. Follow How do I find my Vendor ID and Product ID? for instructions on how to find this information. **At this time, PDP and PowerA controllers are unsupported by this driver as of macOS @abstr_number . @abstr_number + thanks to a rewrite of the macOS USB kernel. We cannot resolve this issue. It is a bug in Apple's core OS code.**

### Xbox One Controllers connected with Wireless Adapter

Xbox One controllers connected with the Wireless Adapter are currently not supported. Please be patient as we figure out this complicated protocol.

### Xbox One Controllers connected with Bluetooth

The Xbox One controller works with macOS automatically when connected over Bluetooth via System Preferences. Only specific Xbox One controllers released after August @abstr_number have Bluetooth capability. See @abstr_hyperlink for determining if your controller supports Bluetooth. Due to the fact that this controller works by default, it will not be supported by this driver. If you choose to plug this controller in via USB, you will need this driver. If you do not wish to connect the controller via USB, then you do not need this driver. Any problems with game compatibility in Bluetooth mode are completely out of our control and are up to you to solve in conjunction with the game developer.

### Xbox One Adaptive Controller

The Xbox One adaptive controller can connect to your macOS machine through either a Bluetooth or wired connection. In Bluetooth mode, it is not controlled by the driver in any way, and will not show up in the "Xbox @abstr_number Controllers" preference pane. If you are having issues with a wired connection, where the preference pane is recognizing your controller, but isn't recieving inputs, please connect it to a PC or VM running Windows in order to recieve a crucial firmware update. This update may also be possible through an Xbox One console.

## Adding Third Party Controllers

First, disable signing requirements so that you can run your custom build with your third party controller added. Then edit `@abstr_number Controller/ @abstr_number Controller/Info.plist`. Add your controller following the pattern of pre-existing controllers by adding your vendor and product IDs to a new entry. After this, follow the information in the building section, following the "If you don't have a signing certificate" path to build your new .kext. Then, place your shiny new `@abstr_number Controller.kext` in to `/Library/Extensions` over the old one. You may need to take ownership of the driver in order for it to operate properly. You can do this with `sudo chown -R root:wheel /Library/Extensions/ @abstr_number Controller.kext`. Then, to make sure everything went according to plan, run `sudo kextutil /Library/Extensions/ @abstr_number Controller.kext`. This will load your kext into the OS and you should be able to use your controller. Once you reboot, your custom driver should be loaded automatically.

## Developer Info

Drivers inherently modify the core operating system kernel. Using the driver as a developer can lead to dangerous kernel panics that can cause data loss or other permanent damage to your computer. Be very careful about how you use this information. We are not responsible for anything this driver does to your computer, or any loss it may incur. Normal users will never have to worry about the developer section of this README.

### Building

##### Apple has recently changed how drivers work in Xcode @abstr_number . In order to build the driver, you will need Xcode @abstr_number . @abstr_number or earlier.

Additionally, to use the included build scripts, you will need to change your preferred Xcode installation using `xcode-select`.

##### You must have a signing certificate to install a locally built driver. Alternatively, you can disable driver signing on your machine, however this is a major security hole and the decision should not be taken lightly.

You will need a full installation of Xcode to build this project. The command line tools are not enough.

The project consists of three main parts: The driver (implemented in C++, as an I/O Kit C++ class), the force feedback plugin (implemented in C, as an I/O Kit COM plugin) and the preference pane (implemented in Objective C as a preference pane plugin). To build, use the standard Xcode build for Deployment on each of the @abstr_number projects. Build Feedback @abstr_number before @abstr_number Controller, as the @abstr_number Controller project includes a script to copy the Feedback @abstr_number bundle to the correct place in the .kext to make it work.

To debug the driver, `sudo cp -R @abstr_number Controller.kext /tmp/` to assign the correct properties - note that the Force Feedback plugin only seems to be found by OSX if the driver is in /System/Library/Extensions so it can only be debugged in place. Due to the fact that drivers are now stored in /Library/Extenions, this means that you must create a symlink between the location of the driver and /System/Library/Extensions so that the force feedback plugin can operate properly.

### Building the .pkg

In order to build the .pkg, you will need to install @abstr_hyperlink .

#### If you don't have a signing certificate

  * Open `@abstr_number Driver.xcodeproj` using Xcode.
  * Select the `@abstr_number Driver` project in the Navigator.
  * Select the `@abstr_number Daemon` target from the top right corner.
  * Select the `Build Settings` tab from the top of the screen.
  * In the `Code Signing` section, find `Code Signing Identity` section and expand it.
  * In the `Release` section, change the selection to `Don't Code Sign`.
  * Set the code signing identity for `@abstr_number Daemon`, `Feedback @abstr_number`, `@abstr_number Controller`, `DriverTool`, `Pref @abstr_number Control`, `Wireless @abstr_number Controller`, `WirelessGamingReceiver` and `Whole Driver`.
  * Run `./build.sh` to build the .pkg. This .pkg can be found in the `Install @abstr_number Controller` directory.



#### If you have a signing certificate

  * Create a file named `DeveloperSettings.xcconfig`
  * Select the `@abstr_number Driver` project in the Navigator.
  * In this file, add the following lines: 
    * `DEVELOPMENT_TEAM = XXXXXXXXXX` where `XXXXXXXXXX` is the development team on your Developer ID Application and Installer certificates.
    * `DEVELOPER_NAME = First Last` where `First Last` is the name on the Developer ID Installer certificate.
    * `DEVELOPER_EMAIL = my.address@email.com` where `my.address@email.com` is the email address of your Apple account that has your Developer ID Application and Installer certificates.
    * `NOTARIZATION_PASSWORD = abcd-efgh-ijkl-mnop` where `abcd-efgh-ijkl-mnop` is a temporary password that you have generated for your Apple account for the purposes of notarization.



### Disabling signing requirements

Since Yosemite (macOS @abstr_number . @abstr_number ) all global kexts are required to be signed. This means if you want to build the drivers and install locally, you need a very specific signing certificate that Apple closely controls. If you want to disable the signing requirement from macOS, you will need to do several things.

First, execute these commands in your terminal: @abstr_code_section 

Next, you must disable System Integrity Protection. To do this, boot into recovery mode by holding down `CMD + R` while the computer is starting. Once recovery mode has been loaded, open the terminal from the `Utilites` menu item. Execute the following command: @abstr_code_section 

### Re-Enabling signing requirements

From recovery mode, execute the following command: @abstr_code_section 

Reboot into macOS like normal. You can reset the boot arguments by executing this command: @abstr_code_section This will remove ALL boot-args. If you have previously manipulated your boot-args, those changes will be erased as well!

### Notarization of the driver

This is only possible if you have a signing certificate, but it is a relatively straightforward process.

  * Build the driver as previously instructed and make sure to include the necessary information in your `DeveloperSettings.xcconfig` file, as they will be used during this process.
  * Make sure to `cd` into the `Install @abstr_number Controller` directory and run `./makedmg.sh`
  * Run `./notarize.sh`
  * This should finish with the message: `The validate action worked!`



Then you can distribute the notarized and stapled version of the driver.

### Debugging the driver

Debugging the driver depends on which part you intend to debug. For the @abstr_number Controller driver itself, it uses `IOLog` to output to the `system.log` which can be accessed using Console.app. Feedback @abstr_number uses `fprintf(stderr, ...)`, which should appear within the console of the program attempting to use force feedback.

### Debugging the preference pane

Most of these instructions are pulled directly from @abstr_hyperlink Please visit it for futher information.

First, create a copy of `System Preferences.app` called `System Preferences (signed).app`. Then sign this new System Preferences with the command:

`codesign -s "Developer ID Application: First Last (XXXXXXXXXX)" -f /Applications/System\ Preferences\ \(signed\).app/ @abstr_code_section cp -Rf ${CONFIGURATION_BUILD_DIR}/Pref @abstr_number Control.prefPane ~/Library/PreferencePanes`

Finally, select the run step, choose "other" from the executable drop-down menu, and select `System Preferences (signed)` in the Applications folder. Verify that "Debug executable" and "Automatically" are both checked.

### A note on Unity mappings

The issues with the button and axis mappings in the Unity game engine are outside of our control. Unity mangles the button and axis values provided by the controller and remaps them to different values. There is absolutely no way that we can introduce a shim to fix it. Complaints about this should be directed at Unity, not at us.

## Licence

Copyright (C) @abstr_number - @abstr_number Colin Munro

This driver is licensed under the GNU Public License. A copy of this license is included in the distribution file, please inspect it before using the binary or source.
