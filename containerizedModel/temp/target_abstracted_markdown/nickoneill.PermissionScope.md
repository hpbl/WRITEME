## PermissionScope is no longer supported. Please use an alternative if you need updates for newer iOS @abstr_number and @abstr_number APIs!

@abstr_image 

@abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_image 

Installation • Usage • Customization • Known bugs • @abstr_hyperlink • License 

Inspired by (but unrelated to) @abstr_hyperlink 's permission control, PermissionScope is a Swift framework for intelligently requesting permissions from users. **It contains not only a simple UI to request permissions but also a unified permissions API** that can tell you the status of any given system permission or easily request them.

Some examples of multiple permissions requests, a single permission and the denied alert.

@abstr_image 

PermissionScope **gives you space to explain your reasons for requesting permissions** and **allows users to tackle the system dialogs at their own pace**. It presents a straightforward permissions design and is flexible enough to fit in to most UIKit-based apps.

Best of all, PermissionScope detects when your app's permissions have been denied by a user and gives them an easy prompt to go into the system settings page to modify these permissions.

Supported permissions: * Notifications * Location (WhileInUse, Always) * Contacts * Events * Microphone * Camera * Photos * Reminders * Bluetooth * Motion

## compatibility

PermissionScope requires iOS @abstr_number +, compatible with both **Swift @abstr_number _* and *_ Objective-C** based projects.

For Swift @abstr_number .x support, please use the swift @abstr_number branch or the @abstr_number . @abstr_number . @abstr_number release version. This branch was up-to-date on @abstr_number / @abstr_number / @abstr_number but is not being maintained. All future efforts will go towards Swift @abstr_number development.

## installation

Installation for @abstr_hyperlink is simple enough:

`github "nickoneill/PermissionScope" ~> @abstr_number . @abstr_number`

As for @abstr_hyperlink , use this to get the latest release:

@abstr_code_section 

And `import PermissionScope` in the files you'd like to use it.

## dialog usage

The simplest implementation displays a list of permissions and is removed when all of them have satisfactory access.

@abstr_code_section 

The permissions view will automatically show if there are permissions to approve and will take no action if permissions are already granted. It will automatically hide when all permissions have been approved.

If you're attempting to block access to a screen in your app without permissions (like, say, the broadcast screen in Periscope), you should watch for the cancel closure and take an appropriate action for your app.

### customization

You can easily change the colors, label and buttons fonts with PermissionScope by modifying any of these properties:

Field | Type | Comment \----- | ---- | ------- headerLabel | UILabel | Header UILabel with the message "Hey, listen!" by default. bodyLabel | UILabel | Header UILabel with the message "We need a couple things\r\nbefore you get started." by default. closeButtonTextColor | UIColor | Color for the close button's text color. permissionButtonTextColor | UIColor | Color for the permission buttons' text color. permissionButtonBorderColor | UIColor | Color for the permission buttons' border color. buttonFont | UIFont | Font used for all the UIButtons labelFont | UIFont | Font used for all the UILabels closeButton | UIButton | Close button. By default in the top right corner. closeOffset | CGSize | Offset used to position the Close button. authorizedButtonColor | UIColor | Color used for permission buttons with authorized status unauthorizedButtonColor | UIColor? | Color used for permission buttons with unauthorized status. By default, inverse of `authorizedButtonColor`. permissionButtonΒorderWidth | CGFloat | Border width for the permission buttons. permissionButtonCornerRadius | CGFloat | Corner radius for the permission buttons. permissionLabelColor | UIColor | Color for the permission labels' text color. contentView | UIView | Dialog's content view

In addition, the default behavior for tapping the background behind the dialog is to cancel the dialog (which calls the cancel closure you can provide on `show`). You can change this behavior with `backgroundTapCancels` during init.

If you'd like more control over the button text for a particular permission, you can @abstr_hyperlink for your intended language and override them that way. Please get in touch if you'd like to contribute a localization file for another language!

## unified permissions API

PermissionScope also has an abstracted API for getting the state for a given permission and requesting permissions if you need to do so outside of the normal dialog UI. Think of it as a unified iOS permissions API that can provide some features that even Apple does not (such as detecting denied notification permissions).

@abstr_code_section 

### calling `request*` methods directly

Normally PermissionScope is used to walk users through necessary permissions before they're allowed to do something in your app. Sometimes you may wish to instead call into the various `request*` permissions-seeking methods of PermissionScope directly, from your own UI.

To call these methods directly, you must first set the `viewControllerForAlerts` method to your current UIViewController, in case PermissionScope needs to present some alerts to the user for denied or disabled permissions:

@abstr_code_section 

You will probably also want to set the `onAuthChange`, `onCancel`, and `onDisabledOrDenied` closures, which are called at the appropriate times when the `request*` methods are finished, otherwise you won't know when the work has been completed.

@abstr_code_section 

And then you might call it when the user toggles a switch:

@abstr_code_section If you're also using PermissionScope in the traditional manner, don't forget to set viewControllerForAlerts back to it's default, the instance of PermissionScope. The easiest way to do this is to set it explicitly before you call a `request*` method, and then reset it in your closures.

@abstr_code_section 

### PermissionScope registers user notification settings, not remote notifications

Users will get the prompt to enable notifications when using PermissionScope but it's up to you to watch for results in your app delegate's `didRegisterUserNotificationSettings` and then register for remote notifications independently. This won't alert the user again. You're still responsible for handling the shipment of user notification settings off to your push server.

## extra requirements for permissions

### location

**You must set these Info.plist keys for location to work**

Trickiest part of implementing location permissions? You must implement the proper key in your Info.plist file with a short description of how your app uses location info (shown in the system permissions dialog). Without this, trying to get location permissions will just silently fail. _Software_!

Use `NSLocationAlwaysUsageDescription` or `NSLocationWhenInUseUsageDescription` where appropriate for your app usage. You can specify which of these location permissions you wish to request with `.LocationAlways` or `.LocationInUse` while configuring PermissionScope.

### bluetooth

The _NSBluetoothPeripheralUsageDescription_ key in the Info.plist specifying a short description of why your app needs to act as a bluetooth peripheral in the background is **optional**.

However, enabling `background-modes` in the capabilities section and checking the `acts as a bluetooth LE accessory` checkbox is **required**.

## known bugs

  * ITC app rejection with the following reason: " _This app attempts to access privacy-sensitive data without a usage description_ ". ( @abstr_hyperlink )



Solution: TBD

  * When the user is taken to the Settings.app, if any of the app's permissions are changed (whilst the app was in the background), the app will crash. ( @abstr_hyperlink )



Solution: None. Works as intended by the OS.

  * Link " **Show me** " does not work on denied a permission ( @abstr_hyperlink )



Solution: Run your app without the debugger.

  * When using **Carthage** , the following error occurs: _Module file was created by an older version of the compiler_.



Solution: Use the `--no-use-binaries` flag (e.g: `carthage update --no-use-binaries`).

## license

PermissionScope uses the MIT license. Please file an issue if you have any questions or if you'd like to share how you're using this tool.
