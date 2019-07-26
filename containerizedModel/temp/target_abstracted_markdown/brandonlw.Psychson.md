# Phison @abstr_number - @abstr_number ( @abstr_number ) Custom Firmware & Existing Firmware Patches

This repository contains the following items: \- `DriveCom` \-- PC C# application to communicate with Phison drives. \- `EmbedPayload` \-- PC C# application to embed Rubber Ducky inject.bin key scripts into custom firmware for execution on the drive. \- `Injector` \-- PC C# application to extract addresses/equates from firmware as well as embed patching code into the firmware. \- `firmware` \-- this is @abstr_number custom firmware written in C. \- `patch` \-- this is a collection of @abstr_number patch code written in C.

Releases have the following items: \- `patch` \-- this is a collection of @abstr_number patch code written in C. \- `tools` \-- these are the compiled binaries of all the tools. \- `CFW.bin` \-- this is custom firmware set up to send an embedded HID payload.

Take note that the firmware patches have only been tested against PS @abstr_number - @abstr_number firmware version _ @abstr_number . @abstr_number . @abstr_number _ (which is for an @abstr_number K eD @abstr_number NAND flash chip). They may work for others, but be careful.

As long as you are using the correct firmware image for your controller version and NAND chip, there is no harm in downgrading to an earlier version (such as from @abstr_number . @abstr_number . @abstr_number ).

**WARNING: This is experimental software. Use on unsupported devices, or even on supported devices, may cause loss of data, or even permananent damage to devices. Use at your own risk.**

## Getting Started

_See @abstr_hyperlink for information on supported devices; use on an unsupported device may cause permanent damage to the device._

To get started, you'll need to obtain a burner image, which is the @abstr_number executable responsible for flashing firmware to the drive.

See @abstr_hyperlink on the wiki for more information.

## Build Environment

To patch or modify existing firmware, you must first set up a build environment. See @abstr_hyperlink on the wiki for more information.

At a minimum, SDCC needs to be installed to `C:\Program Files\SDCC`.

## Dumping Firmware

Run DriveCom, passing in the drive letter representing the drive you want to flash, the path of the burner image you obtained, and the destination path for the firmware image:
    
    
    tools\DriveCom.exe /drive=E /action=DumpFirmware /burner=BN @abstr_number V @abstr_number M.BIN /firmware=fw.bin
    

where `E` is the drive letter, `BN @abstr_number V @abstr_number M.BIN` is the path to the burner image, and `fw.bin` is the resulting firmware dump.

Currently, only @abstr_number KB firmware images can be dumped (which is what the @abstr_hyperlink drive uses).

## Flashing Custom Firmware

Run `DriveCom`, passing in the drive letter representing the drive you want to flash, the path of the burner image you obtained, and the path of the firmware image you want to flash:
    
    
    tools\DriveCom.exe /drive=E /action=SendFirmware /burner=BN @abstr_number V @abstr_number M.BIN /firmware=fw.bin
    

where `E` is the drive letter, `BN @abstr_number V @abstr_number M.BIN` is the path to the burner image, and `fw.bin` is the path to the firmware image.

## Running Demo @abstr_number (HID Payload)

Create a key script in @abstr_hyperlink , then use @abstr_hyperlink to create an `inject.bin` version of it:
    
    
    java -jar duckencoder.java -i keys.txt -o inject.bin
    

where `keys.txt` is the path to your key script.

You may notice the delays are not quite the same between the Rubber Ducky and the drive -- you may need to adjust your scripts to compensate.

(These tools are available from https://code.google.com/p/ducky-decode/.)

Once you have an `inject.bin` file, embed it into the custom firmware with:
    
    
    copy CFW.bin hid.bin
    tools\EmbedPayload.exe inject.bin hid.bin
    

where `inject.bin` is the path to your inject.bin file, and `hid.bin` is the path to the HID payload custom firmware.

(Notice that the firmware image is copied, and the payload is embedded into the copy -- this is because the payload can only be embedded once, so the original `CFW.bin` must remain intact.)

You can now flash the firmware to your drive with:
    
    
    tools\DriveCom.exe /drive=E /action=SendFirmware /burner=BN @abstr_number V @abstr_number M.BIN /firmware=hid.bin
    

where `E` is the drive letter representing your drive, `BN @abstr_number V @abstr_number M.BIN` is the path to your burner image, and `hid.bin` is the path to the HID payload custom firmware.

_Huge thanks to the @abstr_hyperlink team for their work on the excellent @abstr_hyperlink !_

## Running Demo @abstr_number (Hidden Partition Patch)

First, determine the number of logical blocks (sectors) your drive has with the following command:
    
    
    tools\DriveCom.exe /drive=E /action=GetNumLBAs
    

Go into the `patch` directory and modify `base.c` to disable all other patches, and enable the hidden partition patch:
    
    
    //#define FEATURE_CHANGE_PASSWORD
    
    #define FEATURE_EXPOSE_HIDDEN_PARTITION
    

Then modify the `NUM_LBAS` define to the number of logical blocks on your drive:
    
    
    #define NUM_LBAS   @abstr_number xE @abstr_number C @abstr_number UL //this needs to be even! (round down)
    

Make sure you round down to an even number, and it couldn't hurt to subtract a few first, in case a few blocks go bad over time. (For example, if the number of LBAs was `@abstr_number xE @abstr_number C @abstr_number`, you might reduce it to `@abstr_number xE @abstr_number C @abstr_number`.)

Place the firmware image you want to patch into the `patch` directory and name it `fw.bin`.

Go to the `patch` directory and run `build.bat`. It will produce a file at `patch\bin\fw.bin` \-- this is the modified firmware image.

You can now flash this file to your drive.

After flashing, Windows may be confused, as it now only sees half of the partition it once did -- it may ask you to format the first time you view either the public or hidden halves of the drive. This is normal.

## Running Demo @abstr_number (Password Patch)

Go into the `patch` directory and modify `base.c` to disable all other patches, and enable the password patch:
    
    
    #define FEATURE_CHANGE_PASSWORD
    
    //#define FEATURE_EXPOSE_HIDDEN_PARTITION
    

Place the firmware image you want to patch into the `patch` directory and name it `fw.bin`.

Go to the `patch` directory and run `build.bat`. It will produce a file at `patch\bin\fw.bin` \-- this is the modified firmware image.

You can now flash this file to your drive.

## Running No Boot Mode Patch

Go into the `patch` directory and modify `base.c` to disable all other patches, and enable the no boot patch:
    
    
    //#define FEATURE_CHANGE_PASSWORD
    //#define FEATURE_EXPOSE_HIDDEN_PARTITION
    #define FEATURE_PREVENT_BOOT
    

Place the firmware image you want to patch into the `patch` directory and name it `fw.bin`.

Go to the `patch` directory and run `build.bat`. It will produce a file at `patch\bin\fw.bin` \-- this is the modified firmware image.

You can now flash this file to your drive. Once flashed to your device, it will no longer act on the command to jump to boot mode. To update the firmware again will require @abstr_hyperlink on the controller. To make it impossible* to update, after flashing this patch coat the device with epoxy.

  * _Within reason; it may be possible to get to boot mode via an exploit or other non-standard method._



#### Converting to Mode @abstr_number

You can run the `ModeConverterFF @abstr_number .exe` application (see @abstr_hyperlink ) to split the drive into public and secure partitions, or restore the original (mode @abstr_number ) functionality.

After converting to mode @abstr_number , you should be able to set, change, or disable the secure partition password with the `USB DISK Pro LOCK` utility.

## Building From Source

Modify the C files in the `firmware` directory for custom firmware, or the `patch` directory for the firmware patches, then run the `build.bat` file in the appropriate directory.

Once it has built successfully, use DriveCom to flash the resulting file (`bin\fw.bin`) to your drive:
    
    
    tools\DriveCom.exe /drive=E /action=SendFirmware /burner=BN @abstr_number V @abstr_number M.BIN /firmware=firmware\bin\fw.bin
    

...or...
    
    
    tools\DriveCom.exe /drive=E /action=SendFirmware /burner=BN @abstr_number V @abstr_number M.BIN /firmware=patch\bin\fw.bin
    

## Questions? Comments? Complaints?

Unfortunately this isn't the most straightforward process at the moment, so if you have questions, open an @abstr_hyperlink and we'll do our best to help (and update the readme/wiki).
