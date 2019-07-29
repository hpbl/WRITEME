# TranslucentTB

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

A lightweight (uses a few MB of RAM and almost no CPU) utility that makes the Windows taskbar translucent/transparent on Windows @abstr_number .

You can see examples of the customizations you can make in the images below:

@abstr_image @abstr_image @abstr_image 

## Features

  * Advanced **color picker** supporting alpha and live preview to change the taskbar's color.
  * **Taskbar states** (choose one - color can be customized on every state except Normal): 
    * **Blur** : Will make the taskbar slightly blurred.
    * **Clear** : Transparent taskbar.
    * **Normal** : Regular Windows style. (as if TranslucentTB was not running)
    * **Opaque** : No transparency.
    * **Fluent** : Windows @abstr_number April @abstr_number update and up only. Will give the taskbar an appearance similar to Microsoft's Fluent Design guidelines.
  * **Dynamic** modes (these can be used together and each of them provides a taskbar state and color you can customize): 
    * **Dynamic Windows** : Will change the taskbar to a different appearance if a window is currently maximised.
    * **Dynamic Start Menu** : Will change the taskbar appearance when the start menu is opened.
    * **Dynamic Cortana** : Will change the taskbar appearance when Cortana (or the search menu if Cortana is disabled) is open.
    * **Dynamic Timeline/Task View** : Will change the taskbar apperance when the Timeline (or Task View on older builds) is open.
  * Ability to **show or hide the Aero Peek** button. Can be customized **at will** or **dynamic**.



You can see it in action @abstr_hyperlink (short) and @abstr_hyperlink (longer).

## Download

You can download the program freely from the @abstr_hyperlink and take advantage of its features like background auto-updates and settings sync.

If you prefer a classical download, you can do so @abstr_hyperlink .

If you want to get the latest bleeding edge build, you can grab it over at the @abstr_hyperlink (`Configuration: Release` > `Artifacts` > `TranslucentTB-setup.exe`). Note that these build may not work, or include features that are partially complete. Use at your own risk.

## Add to Startup

To add TranslucentTB to startup, check the "Open at boot" entry in the TranslucentTB tray icon's context menu. If it is grayed out, TranslucentTB startup has been disabled from within the Task Manager or by your organization.

## Donations

@abstr_hyperlink Don't hesitate to donate if you appreciate TranslucentTB and would like to support our work.

## Security

Some antiviruses are over eager, so they might flag this program as malicious. IT IS NOT! Over @abstr_number k users have downloaded this program safely. The source is open, you can compile it yourself, and I welcome any and all security reviews.

Speaking of compiling...

## Building from source

You can checkout one of the available branches. However, it is recommended to use `master`, as the code here is stable and has been passed through peer review.

Via @abstr_hyperlink :

@abstr_code_section 

You can also download a zip archive of each branch by clicking on the `Clone or download` button while browsing the branch's files.

Now that you have the source, you will need Visual Studio @abstr_number . @abstr_hyperlink . Check the following workloads:

  * Desktop development with C++
  * .NET desktop development



You also need to install the following individual components:

  * Any of the VC++ @abstr_number toolsets (latest prefered)
  * Windows @abstr_number SDK ( @abstr_number . @abstr_number . @abstr_number . @abstr_number )
  * .NET Framework @abstr_number . @abstr_number . @abstr_number SDK
  * .NET Framework @abstr_number . @abstr_number . @abstr_number targeting pack



You also need the @abstr_hyperlink and @abstr_hyperlink .

Once you have that installed, open `TranslucentTB.sln`, and press `Ctrl`+`Shift`+`B` to build the solution. 

The output will be in either the Debug or Release folder (depending on which solution configuration is currently active).

To build the desktop installer, run the DesktopInstallerBuilder project.

To build the Microsoft Store app package, build the solution with the Store configuration.

## Contributing

If you would like to contribute, everyone is welcome to! If you are considering a major feature, need guidance, or want to talk an idea out, don't hesitate to jump on [Discord], [Gitter], or file an issue here. The main contributors are often on [Discord], [Gitter] and GitHub, so we should reply fairly quickly. At this time we have no plans of expanding this beyond the taskbar.

When contributing, please respect the style used by the codebase. Quick rundown:

  * Allman braces everywhere, even on one line blocks:

@abstr_code_section 

  * The only exception to this rule is the opening brace of a class, enumeration, namespace or structure, in which K&R braces apply:

@abstr_code_section 

  * lvalue, rvalue and pointer qualifiers are next to the variable name:

@abstr_code_section 

  * Indentation style is @abstr_number spaces large tabs, and your editor should enforce it with this repo's `.editorconfig` automatically.




When trying to debug the main program, it might seem confusing at first because the two projects listed for launch in the header are StorePackage and DesktopInstallerBuilder. Just right-click the TranslucentTB project and select "Set as startup project".

## Thanks

TranslucentTB is a team effort! It is the result of the collective efforts of many people:

  * @abstr_hyperlink ,
  * @abstr_hyperlink ,
  * @abstr_hyperlink ,
  * @abstr_hyperlink ,
  * @abstr_hyperlink ,
  * and last but not least, all of @abstr_hyperlink !



Thanks to @abstr_hyperlink for making the icon! You can find more of his stuff on @abstr_hyperlink .

The color picker used comes from @abstr_hyperlink . We've modernized it a bit, with per-monitor high DPI awareness, faster (and hardware-accelerated) drawing as well as allowing to input any valid HTML color code or @abstr_hyperlink .

The picture we used for the installer screenshot is by @abstr_hyperlink from @abstr_hyperlink .

We use @abstr_hyperlink to install the Visual C++ redistribuable.

### Similar programs

If you are looking for something that modifies more than just the taskbar, there are several programs out there.

@abstr_hyperlink is a similar program written in C#. However, it seems to be unmaintaned.

You may have seen similar translucency abilities from programs such as StartIsBack, Start @abstr_number and the now defunct Classic Shell. All of these are great programs, but I don't need the start-replacement features, so I wrote this. TranslucentTB also allows for more customizability over the taskbar with features such as Dynamic Windows, Dynamic Peek and Dynamic Start that these programs don't have. The storage and memory impact is also lesser.

### License

This program is free (as in speech) software under the GPLv @abstr_number . Please see the LICENSE.md file for more.
