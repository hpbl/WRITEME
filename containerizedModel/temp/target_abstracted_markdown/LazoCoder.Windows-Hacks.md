# Windows-Hacks

Creative and unusual things that can be done with the Windows API.

## Shrinking Windows

Any window can be shrunk down.

Shrinking the Calculator:

@abstr_image 

Shrinking Google Chrome:

@abstr_image 

Even Microsoft Word is not safe from being shrunk:

@abstr_image 

## Hue Shifter

Any window can be selected to have its colors shifted. 

Hue shifting Microsoft Paint:

@abstr_image 

Hue shifting Microsoft Word:

@abstr_image 

## Writing Directly To The Desktop

@abstr_image 

## Desktop Rotation

Zooms into the Desktop and then spins it around and around.

@abstr_image 

## Window Shaker

Randomly shakes the specified window without the use of a mouse.

Here you can see Microsoft Paint shaking all by itself. Pretty spooky huh?

@abstr_image 

If you are a masterful artist (such as myself), you may find that it is too easy to draw in a stationary canvas. In that case, this is the perfect utility for you.

@abstr_image 

## Wavy Window

@abstr_image 

## Motion Detection

Detects motion in the specified window. This was a lot of fun to play with, especially when used on videos but I can only include so many gifs...

Detecting motion in Microsoft Paint:

@abstr_image 

Detecting motion in command prompt:

@abstr_image 

## Automated Painting

Automatically draws a thresholded Mona Lisa into Microsoft Paint:

@abstr_image 

## Window Scrambler

@abstr_image 

## Window Thresholding

This makes the light colors transparent and the dark colors black.

Before thresholding:

@abstr_image 

After thresholding:

@abstr_image 

## Force Changing Window Properties

Many of the properties of a Window can be force changed. In the image below I have changed the following properties in the Windows Calculator: \- Disabled the close, maximimize and minimize buttons \- Removed the drop down menu (View, Edit, Help) \- Changed the width and height of the Window borders \- Changed the title

@abstr_image 

## Mouse Spam

Spawns hundreds of mice, where each one moves independently across the screen.

@abstr_image 

## Hiding a Window

Any Window can be hidden. In the following image I have hidden the Windows Calculator. As you can see, it is no where to be found on the Desktop. But if you open the Windows Task Manager it is actually still running in the background:

@abstr_image 

## More...

Here is the menu. It lists all of the features:

@abstr_image 

## How to Run

The compiled binary is located in the folder _Executable_.

If you want to compile it yourself the recommended way is as follows: @abstr_number . Make sure you have Visual Studio and .NET Framework @abstr_number . @abstr_number . @abstr_number . @abstr_number . Download the zip. @abstr_number . Unzip it. @abstr_number . Open WindowsHacks.sln in Visual Studio. @abstr_number . Press F @abstr_number to run it.

## Notes

  * The main class that brings all of the functions together is _Program.cs_.

  * The to do list can be found in the top directory. This includes bugs to fix and new features to implement.

  * The External folder contains two essential .dll files that must be referenced for the code to work. These two files are WindowsAPI.dll and and ImageProcessing.dll and the code for these can be seen in my @abstr_hyperlink and @abstr_hyperlink repositories respectively. 

  * This has only been tested on Windows @abstr_number .



