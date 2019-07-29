## What is Conceal? @abstr_hyperlink 

Conceal provides a set of Java APIs to perform cryptography on Android. It was designed to be able to encrypt large files on disk in a fast and memory efficient manner. 

The major target for this project is typical Android devices which run old Android versions, have low memory and slower processors.

Unlike other libraries, which provide a Smorgasbord of encryption algorithms and options, Conceal prefers to abstract this choice and use sane defaults. Thus Conceal is not a general purpose crypto library, however it aims to provide useful functionality.

**_Upgrading version?_** Check the Upgrade notes for key compatibility!

#### IMPORTANT: Initializing the library loader

Since v @abstr_number . @abstr_number .+ ( @abstr_number - @abstr_number - @abstr_number ) you will need to initialize the native library loader. This step is needed because the library loader uses the context. The highly suggested way to do it is in the application class onCreate method like this:

@abstr_code_section 

## Quick start

#### Setup options

@abstr_number . **Use Maven Central** : Available on maven central under **com.facebook.conceal:conceal: @abstr_number . @abstr_number . @abstr_number @aar** as an AAR package. If you use Android Studio and select the library using the UI, **make sure** to change `build.gradle` **to include the`@aar` suffix**. Otherwise the library won't be included.

@abstr_number . **Build using gradle**

@abstr_code_section 

It uses gradlew so it takes care of downloading Gradle and all the dependencies it needs. Output will be in `/build/outputs/aar/` directory.

@abstr_number . **Use prebuilt binaries** : http://facebook.github.io/conceal/documentation/. (linked documentation needs update)

###### An aside on KitKat

> Conceal predates Jellybean @abstr_number . @abstr_number . On KitKat, Android changed the provider for cryptographic algorithms to OpenSSL. The default Cipher stream however still does not perform well. When replaced with our Cipher stream (see BetterCipherInputStream), the default implementation is competitive against Conceal. On older phones, Conceal is faster than the system provided libraries.

#### Re-build OpenSSL library

You can run make from the openssl directory. It will download the code and copile the libraries for each architecture.

@abstr_code_section 

#### Before running any test!

Test uses BUCK build tool. BUCK uses the source code for OpenSSL. If you didn't already rebuilt OpenSSL form scrach (previous item) then run this:

@abstr_code_section 

That will download the OpenSSL code to a subdirectory.

#### Running unit tests

@abstr_code_section 

#### Running integration tests

@abstr_code_section 

Since Conceal uses native libraries, the only way to run a test on the entire encryption process is using integration tests.

#### Running Benchmarks

@abstr_code_section 

This script runs vogar with caliper benchmarks. You can also specify all the options caliper provides.

## Usage

#### Entity and keys

**Entity:** this is a not-secret identifier of your data. It's used for integrity check purposes (to know that the content has not been tampered) and also to verify it was not swapped with another valid encrypted content/file.

**Key:** the key is provided by the KeyChain implementation passed to the Crypto object. So each time a new encryption is requested, the key is requested to the KeyChain. The key is generated randomly the first time on demand. You might change the implementation by we strongly suggest to generate a random value. If the encryption key needs for some reason to be based on a text password, you can try using the PasswordBasedKeyGenerator object.

#### Encryption

@abstr_code_section 

#### Decryption

@abstr_code_section 

If you don't have a lot of data to encrypt, you could use the convenience functions:

@abstr_code_section 

#### Integrity

@abstr_code_section 

### Upgrade notes

Starting with v @abstr_number . @abstr_number recommended encryption will use a @abstr_number -bit key (instead of @abstr_number -bit). This means stronger security. You should use this default.

If you need to read from an existing file, you still will need @abstr_number -bit encryption. You can use the old way of creating `Crypto` objects as it preserves its @abstr_number -bit behavior. Although ideally you should re-encrypt that content with a @abstr_number -bit key.

Also there's an improved way of creating Entity object which is platform independent. It's strongly recommended for new encrypted items although you need to stick to the old way for already encrypted content.

#### Existing code still with @abstr_number -bit keys and old Entity (deprecated)

@abstr_code_section 

#### New code using @abstr_number -keys and Entity.create

We recommend the use of the factory class `AndroidConceal`.

@abstr_code_section 

## Troubleshooting

#### I'm getting NoSuchFieldError on runtime

If you hit an error on runtime and it says something similar to:

`@abstr_code_section`

This happens because native code needs to refer to Java fields/methods. For doing so it uses typical JNI functions which receive the name and signature. At the same time tools like proguard trim off or rename class members in order to get smaller executables. Normally this process is run on release versions. When native code request the member, it's not present anymore.

To avoid this kind of problems exceptions can be defined. You will need to configure proguard with the rules defined in `proguard_annotations.pro`. You can use the file as is, or you can include its content in your own proguard configuration file.
