@abstr_hyperlink 

@abstr_hyperlink - This is the Mono Channel room

# Gui.cs - Terminal UI toolkit for .NET

This is a simple UI toolkit for .NET, .NET Core and Mono and works on both Windows and Linux/Unix.

@abstr_image 

A presentation of this was part of the @abstr_hyperlink talk at .NET Conf @abstr_number @abstr_hyperlink 

The toolkit contains various controls for building text user interfaces:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
    * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink and @abstr_hyperlink 
  * Hexadecimal viewer/editor (HexView)



All visible UI elements are subclasses of the @abstr_hyperlink , and these in turn can contain an arbitrary number of subviews. 

It comes with a @abstr_hyperlink to process events, process idle handlers, timers and monitoring file descriptors.

It is designed to work on Curses and the @abstr_hyperlink , works well on both color and monochrome terminals and has mouse support on terminal emulators that support it.

# Documentation

  * @abstr_hyperlink for details.

  * @abstr_hyperlink contains the conceptual documentation and a walkthrough of the core concepts of `gui.cs`




# Sample Usage

@abstr_code_section 

The example above shows how to add views, two styles are used, a very nice layout system that I have no name for, but that @abstr_hyperlink , and the absolute positioning.

# Installing it

If you want to try Gui.cs, use NuGet to install the `Terminal.Gui` NuGet package:

https://www.nuget.org/packages/Terminal.Gui

# Running and Building

You can find a trivial .NET core sample application in the "StandaloneExample" directory. You can execute it by running `dotnet run` in that directory.

That sample relies on the distributed NuGet package, if you want to to use the code on GitHub, you can open the Example program which references the library built out of this tree.

# Input Handling

The input handling of gui.cs is similar in some ways to Emacs and the Midnight Commander, so you can expect some of the special key combinations to be active.

The key `ESC` can act as an Alt modifier (or Meta in Emacs parlance), to allow input on terminals that do not have an alt key. So to produce the sequence `Alt-F`, you can press either `Alt-F`, or `ESC` followed by the key `F`.

To enter the key `ESC`, you can either press `ESC` and wait @abstr_number milliseconds, or you can press `ESC` twice.

`ESC- @abstr_number`, and `ESC- @abstr_number` through `ESC- @abstr_number` have a special meaning, they map to `F @abstr_number`, and `F @abstr_number` to `F @abstr_number` respectively.

# Driver model

Currently gui.cs has support for both ncurses and the `System.Console` front-ends. ncurses is used on Unix, while `System.Console` is used on Windows, but you can force the use of `System.Console` on Unix as well, see `Core.cs`.

# Tasks

There are some tasks in the github issues, and some others are being tracked in the TODO.md file.

# History

This is an updated version of @abstr_hyperlink that I wrote for @abstr_hyperlink in @abstr_number .

The original gui.cs was a UI toolkit in a single file and tied to curses. This version tries to be console-agnostic and instead of having a container/widget model, only uses Views (which can contain subviews) and changes the rendering model to rely on damage regions instead of burderning each view with the details.

# Releases

Recently, I setup VSTS to do the releases, for now, this requires a branch to be pushed with the name release/XXX, do this after the NuGet package version has been updated on the Terminal.Gui/Terminal.Gui.csproj, and push.

Then once the package is built, VSTS will request an approval.
