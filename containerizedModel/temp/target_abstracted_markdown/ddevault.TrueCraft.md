@abstr_image 

A completely @abstr_hyperlink implementation of Minecraft beta @abstr_number . @abstr_number . @abstr_number (circa September @abstr_number ). No decompiled code has been used in the development of this software. This is an **implementation** \- not a clone. TrueCraft is compatible with Minecraft beta @abstr_number . @abstr_number . @abstr_number clients and servers.

@abstr_hyperlink @abstr_hyperlink 

@abstr_image 

_Screenshot taken with @abstr_hyperlink_

I miss the old days of Minecraft, when it was a simple game. It was nearly perfect. Most of what Mojang has added since beta @abstr_number . @abstr_number . @abstr_number is fluff, life support for a game that was "done" years ago. This is my attempt to get back to the original spirit of Minecraft, before there were things like the End, or all-in-one redstone devices, or village gift shops. A simple sandbox where you can build and explore and fight with your friends. I miss that.

The goal of this project is effectively to fork Minecraft. Your contribution is welcome, but keep in mind that I will mercilessly reject changes that aren't in line with the vision. If you like the new Minecraft, please feel free to keep playing it. If you miss the old Minecraft, join me.

## Compiling

**Use a recursive git clone.**
    
    
    git clone --recursive git://github.com/SirCmpwn/TrueCraft.git
    

You need to restore Nuget packages. The easiest way is to open the solution up in monodevelop or visual studio or the like and build from there. You can alternatively acquire Nuget yourself and run this:
    
    
    mono path/to/nuget.exe restore
    

From the root directory of the git repository. Then run:
    
    
    xbuild
    

To compile it and you'll receive binaries in `TrueCraft.Launcher/bin/Debug/`. Run `[mono] TrueCraft.Launcher.exe` to run the client and connect to servers and play singleplayer and so on. Run `[mono] TrueCraft.Server.exe` to host a server for others to play on.

Note: if you have a problem with nuget connecting, run `mozroots --import --sync`.

Note: TrueCraft requires mono @abstr_number . @abstr_number or newer.

## Get Involved

If you are not a developer, you can keep up with TrueCraft updates and participate in the community on @abstr_hyperlink , or by joining us to chat in @abstr_hyperlink .

If you are a developer, you have two paths. If you _have not_ read the Minecraft source code, you are what we call a "clean dev", and you should stay that way. If you _have_ read the source code, you are what we call a "dirty dev", and the way you can contribute is different. If you are a clean dev, you're welcome to contribute to this repository by adding features and functionality from Minecraft Beta @abstr_number . @abstr_number . @abstr_number , fixing bugs, refactoring, etc - the usual. @abstr_hyperlink with your work.

If you are a dirty dev, you are more limited in how you can help. You can work on projects that are related to TrueCraft, but not on TrueCraft itself. Direct contributions that you can participate in includes @abstr_hyperlink and the @abstr_hyperlink . You can also work on things like helping to build a community by spreading the word, participating in IRC or the subreddit, etc. You may also work on reverse engineering Minecraft to provide documentation for clean devs to use - see @abstr_hyperlink on the wiki for details on how you can do this. **Under no circumstances may you ever share any code with a clean dev, decompiled or otherwise**.

## Assets

TrueCraft is compatible with Minecraft beta @abstr_number . @abstr_number . @abstr_number texture packs. We ship the Pixeludi Pack (by Wojtek Mroczek) by default. You can install the Mojang assets through the TrueCraft launcher if you wish.

## Blah blah blah

TrueCraft is not associated with Mojang or Minecraft in any sort of official capacity.
