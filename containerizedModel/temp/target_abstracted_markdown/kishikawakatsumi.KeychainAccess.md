# KeychainAccess

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

KeychainAccess is a simple Swift wrapper for Keychain that works on iOS and OS X. Makes using Keychain APIs extremely easy and much more palatable to use in Swift.

@abstr_image @abstr_image @abstr_image 

## :bulb: Features

  * Simple interface
  * Support access group
  * Support accessibility
  * Support iCloud sharing
  * **Support TouchID and Keychain integration (iOS @abstr_number +)**
  * **Support Shared Web Credentials (iOS @abstr_number +)**
  * Works on both iOS & OS X
  * watchOS and tvOS are supported
  * **Swift @abstr_number & Swift @abstr_number compatible**



## :book: Usage

##### :eyes: See also:

  * @abstr_hyperlink 



### :key: Basics

#### Saving Application Password

@abstr_code_section 

#### Saving Internet Password

@abstr_code_section 

### :key: Instantiation

#### Create Keychain for Application Password

@abstr_code_section 

@abstr_code_section 

#### Create Keychain for Internet Password

@abstr_code_section 

@abstr_code_section 

### :key: Adding an item

#### subscripting

##### for String

@abstr_code_section 

@abstr_code_section 

##### for NSData

@abstr_code_section 

#### set method

@abstr_code_section 

#### error handling

@abstr_code_section 

### :key: Obtaining an item

#### subscripting

##### for String (If the value is NSData, attempt to convert to String)

@abstr_code_section 

@abstr_code_section 

##### for NSData

@abstr_code_section 

#### get methods

##### as String

@abstr_code_section 

@abstr_code_section 

##### as NSData

@abstr_code_section 

### :key: Removing an item

#### subscripting

@abstr_code_section 

#### remove method

@abstr_code_section 

### :key: Set Label and Comment

@abstr_code_section 

### :key: Obtaining Other Attributes

#### PersistentRef

@abstr_code_section 

#### Creation Date

@abstr_code_section 

#### All Attributes

@abstr_code_section 

##### subscripting

@abstr_code_section 

### :key: Configuration (Accessibility, Sharing, iCloud Sync)

**Provides fluent interfaces**

@abstr_code_section 

####  Accessibility

##### Default accessibility matches background application (=kSecAttrAccessibleAfterFirstUnlock)

@abstr_code_section 

##### For background application

###### Creating instance

@abstr_code_section 

###### One-shot

@abstr_code_section 

##### For foreground application

###### Creating instance

@abstr_code_section 

###### One-shot

@abstr_code_section 

#### :couple: Sharing Keychain items

@abstr_code_section 

####  :arrows_counterclockwise: Synchronizing Keychain items with iCloud

###### Creating instance

@abstr_code_section 

###### One-shot

@abstr_code_section 

###  :fu: Touch ID integration

**Any Operation that require authentication must be run in the background thread.**   
**If you run in the main thread, UI thread will lock for the system to try to display the authentication dialog.**

#### :closed_lock_with_key: Adding a Touch ID protected item

If you want to store the Touch ID protected Keychain item, specify `accessibility` and `authenticationPolicy` attributes. 

@abstr_code_section 

#### :closed_lock_with_key: Updating a Touch ID protected item

The same way as when adding. 

**Do not run in the main thread if there is a possibility that the item you are trying to add already exists, and protected.** **Because updating protected items requires authentication.**

Additionally, you want to show custom authentication prompt message when updating, specify an `authenticationPrompt` attribute. If the item not protected, the `authenticationPrompt` parameter just be ignored.

@abstr_code_section 

#### :closed_lock_with_key: Obtaining a Touch ID protected item

The same way as when you get a normal item. It will be displayed automatically Touch ID or passcode authentication If the item you try to get is protected.   
If you want to show custom authentication prompt message, specify an `authenticationPrompt` attribute. If the item not protected, the `authenticationPrompt` parameter just be ignored.

@abstr_code_section 

#### :closed_lock_with_key: Removing a Touch ID protected item

The same way as when you remove a normal item. There is no way to show Touch ID or passcode authentication when removing Keychain items.

@abstr_code_section 

###  :key: Shared Web Credentials

> Shared web credentials is a programming interface that enables native iOS apps to share credentials with their website counterparts. For example, a user may log in to a website in Safari, entering a user name and password, and save those credentials using the iCloud Keychain. Later, the user may run a native app from the same developer, and instead of the app requiring the user to reenter a user name and password, shared web credentials gives it access to the credentials that were entered earlier in Safari. The user can also create new accounts, update passwords, or delete her account from within the app. These changes are then saved and used by Safari.   
>  @abstr_hyperlink 

@abstr_code_section 

#### Request all associated domain's credentials

@abstr_code_section 

#### Generate strong random password

Generate strong random password that is in the same format used by Safari autofill (xxx-xxx-xxx-xxx).

@abstr_code_section 

#### How to set up Shared Web Credentials

> @abstr_number . Add a com.apple.developer.associated-domains entitlement to your app. This entitlement must include all the domains with which you want to share credentials.
> 
> @abstr_number . Add an apple-app-site-association file to your website. This file must include application identifiers for all the apps with which the site wants to share credentials, and it must be properly signed.
> 
> @abstr_number . When the app is installed, the system downloads and verifies the site association file for each of its associated domains. If the verification is successful, the app is associated with the domain.

**More details:**   
@abstr_hyperlink 

### :key: Debugging

#### Display all stored items if print keychain object

@abstr_code_section 

@abstr_code_section 

#### Obtaining all stored keys

@abstr_code_section 

@abstr_code_section 

#### Obtaining all stored items

@abstr_code_section 

@abstr_code_section 

## Requirements

| | OS | Swift | |------------|----------------------------------------|---------------| | **v @abstr_number . @abstr_number .x** | iOS @abstr_number +, OSX @abstr_number . @abstr_number + | @abstr_number . @abstr_number | | **v @abstr_number . @abstr_number .x** | iOS @abstr_number +, OSX @abstr_number . @abstr_number + | @abstr_number . @abstr_number | | **v @abstr_number . @abstr_number .x** | iOS @abstr_number +, OSX @abstr_number . @abstr_number +, watchOS @abstr_number + | @abstr_number . @abstr_number | | **v @abstr_number . @abstr_number .x** | iOS @abstr_number +, OSX @abstr_number . @abstr_number +, watchOS @abstr_number + | @abstr_number . @abstr_number | | **v @abstr_number . @abstr_number .x** | iOS @abstr_number +, OSX @abstr_number . @abstr_number +, watchOS @abstr_number +, tvOS @abstr_number + | @abstr_number . @abstr_number , @abstr_number . @abstr_number | | **v @abstr_number . @abstr_number .x** | iOS @abstr_number +, OSX @abstr_number . @abstr_number +, watchOS @abstr_number +, tvOS @abstr_number + | @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number | | **v @abstr_number . @abstr_number .x** | iOS @abstr_number +, OSX @abstr_number . @abstr_number +, watchOS @abstr_number +, tvOS @abstr_number + | @abstr_number . @abstr_number , @abstr_number . @abstr_number | | **v @abstr_number . @abstr_number .x** | iOS @abstr_number +, OSX @abstr_number . @abstr_number +, watchOS @abstr_number +, tvOS @abstr_number + | @abstr_number .x | | **v @abstr_number . @abstr_number .x** | iOS @abstr_number +, OSX @abstr_number . @abstr_number +, watchOS @abstr_number +, tvOS @abstr_number + | @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number |

## Installation

### CocoaPods

KeychainAccess is available through @abstr_hyperlink . To install it, simply add the following lines to your Podfile:

@abstr_code_section 

### Carthage

KeychainAccess is available through @abstr_hyperlink . To install it, simply add the following line to your Cartfile:

`github "kishikawakatsumi/KeychainAccess"`

### Swift Package Manager

KeychainAccess is also available through @abstr_hyperlink . First, create `Package.swift` that its package declaration includes:

@abstr_code_section 

Then, type

@abstr_code_section 

### To manually add to your project

@abstr_number . Add `Lib/KeychainAccess.xcodeproj` to your project @abstr_number . Link `KeychainAccess.framework` with your target @abstr_number . Add `Copy Files Build Phase` to include the framework to your application bundle

_See @abstr_hyperlink as reference._

@abstr_image 

## Author

kishikawa katsumi, kishikawakatsumi@mac.com

## License

KeychainAccess is available under the MIT license. See the LICENSE file for more info.
