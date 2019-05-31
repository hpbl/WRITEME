# Amethyst

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Tiling window manager for macOS along the lines of @abstr_hyperlink .

@abstr_image 

A quick screencast of basic functionality can be found @abstr_hyperlink . (It's rough, and I'd love to see a better one if someone has the skills and inclination to make one.)

# Getting Amethyst

Amethyst is available for direct download on the @abstr_hyperlink or using @abstr_hyperlink .

@abstr_code_section 

Note: that Amethyst now is only supported on OS X @abstr_number . @abstr_number +.

# Using Amethyst

Amethyst must be given permissions to use the accessibility APIs under the Privacy tab of the Security & Privacy preferences pane as shown below.

@abstr_image 

## Keyboard Shortcuts

Amethyst uses two modifier combinations.

| Default Shortcut | Description | |---|---| | `mod @abstr_number` | `option + shift` | | `mod @abstr_number` | `ctrl + option + shift` |

And defines the following commands, mostly a mapping to xmonad key combinations.

| Default Shortcut | Description | |---|---| | `mod @abstr_number + space` | Cycle layout forward | | `mod @abstr_number + space` | Cycle layout backwards | | `mod @abstr_number + h` | Shrink the main pane | | `mod @abstr_number + l` | Expand the main pane | | `mod @abstr_number + ,` | Increase main pane count | | `mod @abstr_number + .` | Decrease main pane count | | `mod @abstr_number + j` | Move focus counter clockwise | | `mod @abstr_number + k` | Move focus clockwise | | `mod @abstr_number + h` | Swap focused window to counter clockwise screen | | `mod @abstr_number + l` | Swap focused window to clockwise screen | | `mod @abstr_number + j` | Swap focused window counter clockwise | | `mod @abstr_number + k` | Swap focused window clockwise | | `mod @abstr_number + enter` | Swap focused window with main window | | `mod @abstr_number + z` | Force windows to be reevalulated | | `mod @abstr_number + left` | Throw focused window to space left | | `mod @abstr_number + right` | Throw focused window to space right | | `mod @abstr_number + @abstr_number` | Throw focused window to space @abstr_number | | `mod @abstr_number + @abstr_number` | Throw focused window to space @abstr_number | | `mod @abstr_number + @abstr_number` | Throw focused window to space @abstr_number | | `mod @abstr_number + @abstr_number` | Throw focused window to space @abstr_number | | `mod @abstr_number + @abstr_number` | Throw focused window to space @abstr_number | | `mod @abstr_number + @abstr_number` | Throw focused window to space @abstr_number | | `mod @abstr_number + @abstr_number` | Throw focused window to space @abstr_number | | `mod @abstr_number + @abstr_number` | Throw focused window to space @abstr_number | | `mod @abstr_number + @abstr_number` | Throw focused window to space @abstr_number | | `mod @abstr_number + @abstr_number` | Throw focused window to space @abstr_number | | `mod @abstr_number + w` | Focus Screen @abstr_number | | `mod @abstr_number + w` | Throw focused window to screen @abstr_number | | `mod @abstr_number + e` | Focus Screen @abstr_number | | `mod @abstr_number + e` | Throw focused window to screen @abstr_number | | `mod @abstr_number + r` | Focus Screen @abstr_number | | `mod @abstr_number + r` | Throw focused window to screen @abstr_number | | `mod @abstr_number + q` | Focus Screen @abstr_number | | `mod @abstr_number + q` | Throw focused window to screen @abstr_number | | `mod @abstr_number + t` | Toggle float for focused window | | `mod @abstr_number + i` | Display current layout | | `mod @abstr_number + t` | Toggle global tiling | | `mod @abstr_number + a` | Select tall layout | | `none` | Select tall-right layout | | `mod @abstr_number + s` | Select wide layout | | `none` | Select middle-wide layout | | `mod @abstr_number + d` | Select fullscreen layout | | `mod @abstr_number + f` | Select column layout | | `none` | Select row layout | | `none` | Select floating layout | | `none` | Select widescreen-tall layout | | `none` | Select bsp layout |

## Available Layouts

Amethyst allows you to cycle among several different window layouts. Layouts can also be enabled/disabled to control whether they appear in the cycle sequence at all.

  * _Tall_ > The default layout. This gives you one "main pane" on the left, and one other > pane on the right. By default, one window is placed in the main pane > (extending the full height of the screen), and all remaining windows are > placed in the other pane. If either pane has more than one window, that pane > will be evenly split into rows, to show them all. > You can use the keyboard shortcuts above to control which window(s), and > how many, are in the main pane, as well as the horizontal size of the main > pane vs. the other pane.
  * _Tall-Right_ > Exactly the same as _Tall_ , but the main pane is on the right, with the other > pane on the left.
  * _Wide_ > The rotated version of _Tall_ , where the main pane is on the _top_ (extending > the full width of the screen), and the other pane is on the bottom. > If either pane has more than one window, that pane will split into columns > instead of rows.
  *     * @abstr_number Column-Left* > A three-column version of _Tall_ , with one main pane on the left (extending > the full height of the screen) and two other panes, one in the middle and > one on the right. > Like _Tall_ , if any pane has more than one window, that pane will be split > into rows. > You can control how many windows are in the main pane as usual; other windows > will be assigned as evenly as possible between the other two panes.
  *     * @abstr_number Column-Middle* > Exactly like * @abstr_number Column-Left _, but the main pane is in the middle, with the > other panes on either side. > (In previous versions of Amethyst, this layout was known as *Middle-Wide_.)
  *     * @abstr_number Column-Right* > Exactly like * @abstr_number Column-Left*, but the main pane is on the right, with the > other panes in the middle and on the left.
  * _Widescreen-Tall_ > This mode is like _Tall_ , but if there are multiple windows in the main pane, > the main pane splits into columns rather than rows. > The other pane still splits windows into rows, like _Tall_.  > This layout gets its name because it probably makes the most sense on very > wide screens, with a large main pane consisting of several columns, and all > remaining windows stacked into the final column. > Other layouts that work well on very wide screens include any that allow for > more than two columns (to take advantage of the screen width), such as > any of the * @abstr_number Column-&ast;* layouts, or _Column_.
  * _Fullscreen_ > In this layout, the currently focused window takes up the entire screen, and > the other windows are not visible at all. > You can rotate between each of the windows using the "focus the next window" > shortcut, as usual.
  * _Column_ > This layout has one column per window, with each window extending the full > height of the screen. > The farthest-left window is considered the "main" window in the sense that > you can change its size with the "shrink/expand the main pane" shortcuts; > the other windows split the remaining space evenly.
  * _Row_ > The rotated version of _Column_ , where each window takes up an entire row, > extending the full width of the screen.
  * _Floating_ > This mode makes all windows "floating", allowing you to move and resize them > as if Amethyst were temporarily deactivated. > Unlike the other modes, this will mean that windows can be placed "on top of" > each other, obscuring your view of some windows.
  * _Binary Space Partitioning (BSP)_ > This layout does not have a main pane in the way that other layouts do. > When adding windows, any given pane can be split evenly into two panes along > whatever axis is longer. This is recursive such that pane A can be split in > the middle into pane A on the left and pane B on the right; pane B can then > be split into pane B on top and pane C on bottom; pane C can then be split > into pane C on the left and pane D on the right; and so on.



## Setting Up Spaces Support

Spaces are, unfortunately, not supported right out of the box. To enable it you must activate Mission Control's keyboard shortcuts for switching to specific Desktops, as Mac OS X calls them. This option is in the Keyboard Shortcuts tab of the Keyboard preferences pane. The shortcuts will be of the form `ctrl + [n]`. Amethyst is only able to send a window to the `n`th space if the shortcut `ctrl + n` is enabled.

@abstr_image 

Amethyst currently supports sending windows to up to @abstr_number spaces, despite macOS' limit of @abstr_number spaces per display.

_Important note_: You will probably want to disable `Automatically rearrange Spaces based on most recent use` (found under Mission Control in System Preferences). This setting is enabled by default, and will cause your Spaces to swap places based on use. This makes keyboard navigation between Spaces unpredictable.

# Contributing

If you would like to see features or particular bugs fixed check out the Trello board @abstr_hyperlink and vote on things. It'll give me a better sense of what people want so I can prioritize.

If you'd like to contribute please branch off of the `development` branch and open pull requests against it rather than `master`. Otherwise just try to stick to the general style of the code. There is a setup script to guide you through the process of installing necessary tools and getting dependencies built. To get started run

@abstr_code_section 

# Contact

If you have questions or feedback you have a plethora of options. You can @abstr_hyperlink , @abstr_hyperlink , or get on @abstr_hyperlink .

# Donating

Amethyst is free and always will be. That said, a couple of people have expressed their desire to donate money in appreciation. Given the current political climate I would recommend donating to one of these organizations instead:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



And a bunch of technology-oriented ones:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Alternatively, I have a Patreon page set up @abstr_hyperlink . Any proceeds will be donated to one of the above organizations. 
