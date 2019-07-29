@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image @abstr_hyperlink 

# Devilution

Diablo devolved - magic behind the @abstr_number computer game

**Note** , Devilution requires an original copy of `diabdat.mpq`. None of the Diablo @abstr_number game assets are provided by this project. To get a legitimate copy of the game assets, please refer to the @abstr_hyperlink .

# Introduction

While most titles from Blizzard receive years of love and support, Diablo stayed in the shadows. Abandoned in favor of a sequel, it remained full of bugs and unfinished potential. The game was last patched in @abstr_number before being discontinued altogether, a problem I wanted to fix. I played Diablo extensively as a teenager, but as time passed it became difficult to run the game on newer hardware. The lack of many improvements made in Diablo II also laid it to rest. At first the game appeared to be a lost cause, but thankfully a little oversight in @abstr_number made it not so.

Diablo's development team moved on to Diablo II while passing the source code down to **Synergistic Software** for Hellfire. Less known however is that it was also given to **Climax Studios** to create a PlayStation port. Now Sony has long been known for letting things slide; _especially_ in Japan. Anything from leaking prototypes to entire game source codes and Diablo was no exception. Symbolic information was accidentally left on the Japanese port. Normally used for debugging, a symbol file contains a map of everything generated during compile time. This includes file names, functions, structures, variables, and more! To top it all off a special build is hidden on the PC release in `DIABDAT.MPQ -> D @abstr_number A.MPQ -> DIABLO.EXE`! This build contains debug tools and assert strings further giving away code information.

After months of piecing these mistakes together, Devilution was born. I present to you a reconstructed form of Diablo's original source code! Once more shall the heroes of Sanctuary return to the depths below!

# Purpose

Having the source code makes Diablo much easier to update and maintain. For years mod-makers had to rely on tedious code editing and memory injection. A few even went further and reversed most or all of the game. The problem is that they rarely shared their work. Usually being a one-person job, they move on with their lives due to the amount of time required or lack of interest. This brings us back to square one having to do countless hours of work all over again. Devilution aims to fix this by finally making the source code open to the community.

In order to ensure that everything is preserved, Devilution keeps everything as it was originally designed. This goes as far as bugs and badly written code in the original game. With that it serves as a base for developers to work with making it much easier than before to update, fix, and port the game to other platforms.

As a side goal Devilution tries to document the unused and cut content from the final game. Development of Diablo was rushed near the end--many ideas were scrapped and multiplayer was quickly hacked in. By examining the source, we can see various quirks of planned development.

# Compiling

Diablo was developed on Windows @abstr_number using Visual C++ @abstr_number . @abstr_number and later @abstr_number . @abstr_number and @abstr_number for newer patches. Devilution aims to be compatible with both the original and modern tools, but will adhere to standards used for the original compiler.

### Building with Visual C++ @abstr_number

  * Open the project workspace `Diablo.dsw`, choose `Debug` or `Release`, and then `Build Diablo.exe`.



To build a binary with functions compiled as close as possible to the original, use @abstr_hyperlink with Service Pack @abstr_number and the @abstr_hyperlink ( **important for proper code generation!** ) You will also need @abstr_hyperlink with @abstr_hyperlink , since the original binary was linked with the older linker from that. Sadly, you cannot use the old linker right out of VC @abstr_number , so you'll need to link manually or via the `MakefileVC` in the project root.

### Building with Visual Studio @abstr_number - @abstr_number

  * Open the project solution `Diablo.sln`, choose `Debug` or `Release`, and then `Build Solution`.



Make sure to disable Data Execution Prevention. `Storm.dll` uses dynamic compilation to improve rendering performance but fails to mark the resulting memory page as executable, leading to a protection fault when trying to draw. \- Configuration options -> Linker -> Advanced -> Data Execution Prevention (DEP). \- Set this value to: No (/NXCOMPAT: NO).

You will also need the following dependencies installed if you are using Visual Studio @abstr_number . Make sure to enable these when installing (or modify your installation): \- Requires "Windows @abstr_number . @abstr_number SDK" (Target Platform) \- Requires "Visual C++ MFC for x @abstr_number and x @abstr_number " (For afxres.h) \- Requires "Windows Universal CRT SDK" (For ctype.h)

### Building with MinGW

  * Execute `make MINGW @abstr_number = @abstr_number` for _*MinGW @abstr_number *_ or `make` for _*MinGW @abstr_number *_. Optionally add `debug` to build with debug features.



To compile with MinGW @abstr_number on different platforms, refer to the respective documentation: Linux | Windows | Mac.

Debug Build Features | Compatibility Matrix | Troubleshooting

# Installing

Once compiled, the Devilution binary will serve as a replacement for `Diablo.exe`. The following files from the original game patched to @abstr_number . @abstr_number (b) need to be present: `DIABDAT.MPQ`, `DiabloUI.dll`, `SmackW @abstr_number .dll`, `Standard.snp`, and `Storm.dll`. If `COPYPROT` was defined when compiling, the Diablo CD will also be required.

Additionally, Strange Bytes' @abstr_hyperlink is recommended to help fix compatibility issues and run the game in windowed mode.

# Multiplayer

Devilution is functional over both GoG's Battle.net server and IPX using an ipx-wrapper. Additionally if `Standard.snp` from StarCraft @abstr_number . @abstr_number . @abstr_number is used, local UDP play also becomes available. There are programs like ZeroTier to connect UDP globally.

# Contributing

Guidelines

# Modding

Below are a few examples of some simple improvements made to the game. It is planned in the future to create tools for designing dungeons and graphics.

Example @abstr_number : Monster lifebar and item highlighting

@abstr_image Example @abstr_number : New Diablo @abstr_number -like trade screen

@abstr_image 

# F.A.Q.

Click to reveal

> Wow, does this mean I can download and play Diablo for free now?

No, you'll need access to the data from the original game. Blizzard discontinued Diablo, but it is available on the GOG.com platform. Additionally there are plenty of used copies for sale online. (I'm still using an original @abstr_number -disc without problems)

> Cool, so I fired your mod up, but there's no @abstr_number p or new features?

Devilution aims to keep the original code unaltered, for documentation purposes.

> So will you ever add cross-platform support or new features in the future?

Yes! This has been done as a side project, please see @abstr_hyperlink .

> Ok, so I'm playing Devilution now and all the sudden it crashed. NOW WHAT??

Open an issue and provide as much information as possible (OS version, etc.) including any crash logs.

> I thought I'd fix the crash myself, but after looking at the code its a disaster. Do you speak v @abstr_number - @abstr_number -v @abstr_number ?

That is the result of decompiled code. Whenever a program is compiled, much of the source is optimized and stripped away, so it's nearly impossible to decompile it back. Have patience. Everything will be cleaned up eventually. :)

> What about Hellfire?

Hellfire was a bit of a flop on the developer's part. Support may come in the future once the base game is finished.

> I think that's about all, but is Devilution even legal?

That's a tricky question. Under the DMCA, reverse-engineering has exceptions for the purpose of documentation and interoperability. Devilution provides the necessary documentation needed to achieve the latter. However, it falls into an entirely gray area. The real question is whether or not Blizzard deems it necessary to take action. 

# Credits

  * Reverse engineered by GalaXyHaXz in @abstr_number 
  * @abstr_hyperlink - extensively documenting Diablo's game engine
  * @abstr_hyperlink - providing library API to work with Storm
  * @abstr_hyperlink - reversing PKWARE library, further documenting Storm
  * @abstr_hyperlink - being awe-inspiring
  * Climax Studios & Sony - secretly helping with their undercover QA :P
  * Blizzard North - wait, this was a typo!
  * Depression - reason to waste four months of my life doing this ;)



And a special thanks to all the support and people who work on this project to make it possible! < @abstr_number 

# Changelog

From the beginning until release

# Legal

Devilution is released to the Public Domain. The documentation and function provided by Devilution may only be utilized with assets provided by ownership of Diablo.

Battle.net(R) - Copyright (C) @abstr_number Blizzard Entertainment, Inc. All rights reserved. Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

Diablo(R) - Copyright (C) @abstr_number Blizzard Entertainment, Inc. All rights reserved. Diablo and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

Devilution and any of its' maintainers are in no way associated with or endorsed by Blizzard Entertainment(R).
