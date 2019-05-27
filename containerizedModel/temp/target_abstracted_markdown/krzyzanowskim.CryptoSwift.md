@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink 

# CryptoSwift

Crypto related functions and helpers for @abstr_hyperlink implemented in Swift. ( @abstr_hyperlink )

**Note** : The `master` branch follows the latest currently released **version of Swift**. If you need an earlier version for an older version of Swift, you can specify its version in your Podfile or use the code on the branch for that version. Older branches are unsupported. Check versions for details.

* * *

If you find the project useful, please @abstr_hyperlink to keep it alive.

* * *

Requirements | Features | Contribution | Installation | Swift versions | How-to | Author | License | Changelog

## Requirements

Good mood

## Features

  * Easy to use
  * Convenient extensions for String and Data
  * Support for incremental updates (stream, ...)
  * iOS, Android, macOS, AppleTV, watchOS, Linux support



#### Hash (Digest)

@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

#### Cyclic Redundancy Check (CRC)

@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

#### Cipher

@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

#### Message authenticators

@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

#### Cipher mode of operation

  * Electronic codebook ( @abstr_hyperlink )
  * Cipher-block chaining ( @abstr_hyperlink )
  * Propagating Cipher Block Chaining ( @abstr_hyperlink )
  * Cipher feedback ( @abstr_hyperlink )
  * Output Feedback ( @abstr_hyperlink )
  * Counter Mode ( @abstr_hyperlink )
  * Galois/Counter Mode ( @abstr_hyperlink )
  * Counter with Cipher Block Chaining-Message Authentication Code ( @abstr_hyperlink )



#### Password-Based Key Derivation Function

  * @abstr_hyperlink (Password-Based Key Derivation Function @abstr_number )
  * @abstr_hyperlink (Password-Based Key Derivation Function @abstr_number )
  * @abstr_hyperlink (HMAC-based Extract-and-Expand Key Derivation Function)
  * @abstr_hyperlink (The scrypt Password-Based Key Derivation Function)



#### Data padding

PKCS# @abstr_number | @abstr_hyperlink | @abstr_hyperlink | No padding

#### Authenticated Encryption with Associated Data (AEAD)

  * @abstr_hyperlink 



## Why

@abstr_hyperlink @abstr_hyperlink .

## How do I get involved?

You want to help, great! Go ahead and fork our repo, make your changes and send us a pull request.

## Contribution

Check out CONTRIBUTING.md for more information on how to help with CryptoSwift.

  * If you found a bug, @abstr_hyperlink .
  * If you have a feature request, @abstr_hyperlink .



## Installation

To install CryptoSwift, add it as a submodule to your project (on the top level project directory):
    
    
    git submodule add https://github.com/krzyzanowskim/CryptoSwift.git
    

It is recommended to enable @abstr_hyperlink to gain better performance. Non-optimized build results in significantly worse performance.

#### Embedded Framework

Embedded frameworks require a minimum deployment target of iOS @abstr_number or OS X Mavericks ( @abstr_number . @abstr_number ). Drag the `CryptoSwift.xcodeproj` file into your Xcode project, and add appropriate framework as a dependency to your target. Now select your App and choose the General tab for the app target. Find _Embedded Binaries_ and press "+", then select `CryptoSwift.framework` (iOS, OS X, watchOS or tvOS)

@abstr_image 

Sometimes "embedded framework" option is not available. In that case, you have to add new build phase for the target

@abstr_image 

##### iOS, macOS, watchOS, tvOS

In the project, you'll find @abstr_hyperlink for all platforms: \- CryptoSwift

#### Swift versions support

  * Swift @abstr_number . @abstr_number : branch @abstr_hyperlink version <= @abstr_number . @abstr_number . @abstr_number 
  * Swift @abstr_number . @abstr_number : branch @abstr_hyperlink version <= @abstr_number . @abstr_number . @abstr_number 
  * Swift @abstr_number . @abstr_number , @abstr_number . @abstr_number : branch @abstr_hyperlink version <= @abstr_number . @abstr_number . @abstr_number 
  * Swift @abstr_number . @abstr_number , branch @abstr_hyperlink version <= @abstr_number . @abstr_number . @abstr_number 
  * Swift @abstr_number . @abstr_number , branch @abstr_hyperlink version = @abstr_number . @abstr_number . @abstr_number 
  * Swift @abstr_number . @abstr_number , branch @abstr_hyperlink version <= @abstr_number . @abstr_number . @abstr_number 
  * Swift @abstr_number . @abstr_number , branch @abstr_hyperlink version <= @abstr_number . @abstr_number . @abstr_number 
  * Swift @abstr_number . @abstr_number , branch @abstr_hyperlink 



#### CocoaPods

You can use @abstr_hyperlink .

@abstr_code_section 

or for newest version from specified branch of code:

@abstr_code_section 

Bear in mind that CocoaPods will build CryptoSwift without @abstr_hyperlink that may impact performance. You can change it manually after installation, or use @abstr_hyperlink plugin.

#### Carthage

You can use @abstr_hyperlink . Specify in Cartfile:

@abstr_code_section 

Run `carthage` to build the framework and drag the built CryptoSwift.framework into your Xcode project. Follow @abstr_hyperlink . @abstr_hyperlink .

#### Accio

You can use @abstr_hyperlink . Specify in Package.swift:

@abstr_code_section 

Next, add `CryptoSwift` to your App targets dependencies like so: @abstr_code_section 

Then run `accio update`.

#### Swift Package Manager

You can use @abstr_hyperlink and specify dependency in `Package.swift` by adding this:

@abstr_code_section 

or more strict

@abstr_code_section 

See: @abstr_hyperlink 

* * *

## How-to

  * Basics (data types, conversion, ...)
  * Digest (MD @abstr_number , SHA...)
  * Message authenticators (HMAC, CMAC...)
  * Password-Based Key Derivation Function (PBKDF @abstr_number , ...)
  * HMAC-based Key Derivation Function (HKDF)
  * Data Padding
  * ChaCha @abstr_number 
  * Rabbit
  * Blowfish
  * AES - Advanced Encryption Standard
  * AES-GCM
  * Authenticated Encryption with Associated Data (AEAD)



also check Playground

##### Basics

@abstr_code_section 

CryptoSwift uses array of bytes aka `Array<UInt @abstr_number >` as a base type for all operations. Every data may be converted to a stream of bytes. You will find convenience functions that accept `String` or `Data`, and it will be internally converted to the array of bytes.

##### Data types conversion

For your convenience, **CryptoSwift** provides two functions to easily convert an array of bytes to `Data` or `Data` to an array of bytes:

Data from bytes:

@abstr_code_section 

`Data` to `Array<UInt @abstr_number >`

@abstr_code_section 

@abstr_hyperlink encoding:

@abstr_code_section 

Build bytes out of `String` @abstr_code_section 

Also... check out helpers that work with _*Base @abstr_number *_ encoded data: @abstr_code_section 

##### Calculate Digest

Hashing a data or array of bytes (aka `Array<UInt @abstr_number >`) @abstr_code_section 

@abstr_code_section @abstr_code_section 

Hashing a String and printing result

@abstr_code_section 

##### Calculate CRC

@abstr_code_section 

##### Message authenticators

@abstr_code_section 

##### Password-Based Key Derivation Functions

@abstr_code_section 

@abstr_code_section 

##### HMAC-based Key Derivation Function

@abstr_code_section 

##### Data Padding

Some content-encryption algorithms assume the input length is a multiple of `k` octets, where `k` is greater than one. For such algorithms, the input shall be padded.

@abstr_code_section 

#### Working with Ciphers

##### ChaCha @abstr_number

@abstr_code_section 

##### Rabbit

@abstr_code_section 

##### Blowfish

@abstr_code_section 

##### AES

Notice regarding padding: _Manual padding of data is optional, and CryptoSwift is using PKCS @abstr_number padding by default. If you need to manually disable/enable padding, you can do this by setting parameter for __AES__ class_

Variant of AES encryption (AES- @abstr_number , AES- @abstr_number , AES- @abstr_number ) depends on given key length:

  * AES- @abstr_number = @abstr_number bytes
  * AES- @abstr_number = @abstr_number bytes
  * AES- @abstr_number = @abstr_number bytes



AES- @abstr_number example @abstr_code_section 

###### All at once

@abstr_code_section 

###### Incremental updates

Incremental operations use instance of Cryptor and encrypt/decrypt one part at a time, this way you can save on memory for large files. 

@abstr_code_section 

See Playground for sample code that work with stream.

###### AES Advanced usage

@abstr_code_section 

AES without data padding

@abstr_code_section 

Using convenience extensions

@abstr_code_section 

##### AES-GCM

The result of Galois/Counter Mode (GCM) encryption is ciphertext and **authentication tag** , that is later used to decryption.

encryption

@abstr_code_section 

decryption

@abstr_code_section 

**Note** : GCM instance is not intended to be reused. So you can't use the same `GCM` instance from encoding to also perform decoding.

##### AES-CCM

The result of Counter with Cipher Block Chaining-Message Authentication Code encryption is ciphertext and **authentication tag** , that is later used to decryption.

@abstr_code_section 

Check documentation or CCM specification for valid parameters for CCM.

##### AEAD

@abstr_code_section 

## Author

CryptoSwift is owned and maintained by @abstr_hyperlink 

You can follow me on Twitter at @abstr_hyperlink for project updates and releases.

# Cryptography Notice

This distribution includes cryptographic software. The country in which you currently reside may have restrictions on the import, possession, use, and/or re-export to another country, of encryption software. BEFORE using any encryption software, please check your country's laws, regulations and policies concerning the import, possession, or use, and re-export of encryption software, to see if this is permitted. See http://www.wassenaar.org/ for more information.

## License

Copyright (C) @abstr_number - @abstr_number Marcin Krzyżanowski @abstr_hyperlink This software is provided 'as-is', without any express or implied warranty. 

In no event will the authors be held liable for any damages arising from the use of this software. 

Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

  * The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, **an acknowledgment in the product documentation is required**.
  * Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.
  * This notice may not be removed or altered from any source or binary distribution.
  * Redistributions of any form whatsoever must retain the following acknowledgment: 'This product includes software developed by the "Marcin Krzyzanowski" (http://krzyzanowskim.com/).'



## Changelog

See CHANGELOG file.
