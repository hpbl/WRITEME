#  @abstr_image 

[ [English](https://github.com/kitao/pyxel/blob/master/README.md) | [日本語](https://github.com/kitao/pyxel/blob/master/README.ja.md) | [Other Languages](https://github.com/kitao/pyxel/wiki) ]

**Pyxel** is a retro game engine for Python.

Thanks to its simple specifications inspired by retro gaming consoles, such as only @abstr_number colors can be displayed and only @abstr_number sounds can be played back at the same time, you can feel free to enjoy making pixel art style games.

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

The specifications of the gaming console, APIs, and palettes of Pyxel are referring to awesome @abstr_hyperlink and @abstr_hyperlink .

Pyxel is open source and free to use. Let's start making a retro game with Pyxel!

## Specifications

  * Run on Windows, Mac, and Linux
  * Code writing with Python @abstr_number 
  * Fixed @abstr_number color palette
  * @abstr_number x @abstr_number sized @abstr_number image banks
  * @abstr_number x @abstr_number sized @abstr_number tilemaps
  * @abstr_number channels with @abstr_number definable sounds
  * @abstr_number musics which can combine arbitrary sounds
  * Keyboard, mouse, and gamepad inputs
  * Image and sound editor



### Color Palette

@abstr_image 

## How to Install

### Windows

After installing @abstr_hyperlink (version @abstr_number . @abstr_number or higher), the following `pip` command installs Pyxel:

@abstr_code_section 

### Mac

After installing @abstr_hyperlink (version @abstr_number . @abstr_number or higher) and @abstr_hyperlink , install Pyxel with `pip` command.

If @abstr_hyperlink package manager is ready, the following command installs all the necessary packages:

@abstr_code_section 

### Linux

Install @abstr_hyperlink (version @abstr_number . @abstr_number or higher) and the required packages in a way appropriate for each distribution.

**Ubuntu:**

@abstr_code_section 

### When installation fails

There seems to be a case where Pyxel installation fails due to the influence of `pip`'s previous cache. In that case, try running the `pip` command with the following option.

**Windows:**

@abstr_code_section 

**Mac:**

@abstr_code_section 

**Linux:**

@abstr_code_section 

### Install examples

After installing Pyxel, the examples of Pyxel will be copied to the current directory with the following command:

@abstr_code_section 

The examples to be copied are as follows:

  * @abstr_hyperlink - Simplest application
  * @abstr_hyperlink - Jump game with Pyxel resource file
  * @abstr_hyperlink - Demonstration of drawig API
  * @abstr_hyperlink - Demonstration of sound API
  * @abstr_hyperlink - Color palette list
  * @abstr_hyperlink - Mouse click game
  * @abstr_hyperlink - Snake game with BGM



The examples can be executed like normal Python code:

**Windows:**

@abstr_code_section 

**Mac / Linux:**

@abstr_code_section 

## How to Use

### Create a Pyxel Application

After importing the Pyxel module in your python code, specify the window size with `init` function first, then starts the Pyxel application with `run` function.

@abstr_code_section 

The arguments of `run` function are `update` function to update each frame and `draw` function to draw screen when necessary.

In an actual application, it is recommended to wrap pyxel code in a class as below:

@abstr_code_section 

### Special Controls

The following special controls can be performed while a Pyxel application is running:

  * `Esc`  
Quit the application
  * `Alt(Option)+ @abstr_number`  
Save the screenshot to the desktop
  * `Alt(Option)+ @abstr_number`  
Reset the recording start time of the screen capture video
  * `Alt(Option)+ @abstr_number`  
Save the screen capture video (gif) to the desktop (up to @abstr_number seconds)
  * `Alt(Option)+ @abstr_number`  
Toggle the performance monitor (fps, update time, and draw time)
  * `Alt(Option)+Enter`  
Toggle full screen



### Pyxel Editor

The attached Pyxel Editor can create images and sounds used in a Pyxel application.

Pyxel Editor starts with the following command:

@abstr_code_section 

If the specified Pyxel resource file (.pyxres) exists, the file is loaded, and if it does not exist, a new file is created with the specified name. If the resource file is omitted, the name is `my_resource.pyxres`.

After starting Pyxel Editor, the file can be switched by dragging and dropping another resource file.

The created resource file can be loaded with the `load` function.

Pyxel Editor has the following edit modes.

**Image Editor:**

The mode to edit the image banks.

@abstr_image 

By dragging and dropping a png file onto the Image Editor screen, the image can be loaded into the currently selected image bank.

**Tilemap Editor:**

The mode to edit tilemaps in which images of the image banks are arranged in a tile pattern.

@abstr_image 

**Sound Editor:**

The mode to edit sounds.

@abstr_image 

**Music Editor:**

The mode to edit musics in which the sounds are arranged in order of playback.

@abstr_image 

### Other resource creation methods

Pyxel images and tilemaps can also be created in the following way:

  * Create an image from a list of strings with `Image.set` or `Tilemap.set` function
  * Load a png file in Pyxel palette with `Image.load` function



Because Pyxel uses the same palette as @abstr_hyperlink , when creating png images for Pyxel, it is recommended to use @abstr_hyperlink in PICO- @abstr_number palette mode.

Pyxel sounds can also be created in the following way:

  * Create a sound from strings with `Sound.set` or `Music.set` function



Please refer to the API reference for usage of these functions.

## API Reference

### System

  * `width`, `height`  
The width and height of the screen

  * `frame_count`  
The number of the elapsed frames

  * `init(width, height, [caption], [scale], [palette], [fps], [border_width], [border_color])`  
Initialize the Pyxel application with screen size (`width`, `height`). The maximum width and height of the screen is @abstr_number   
It is also possible to specify the window title with `caption`, the display magnification with `scale`, the palette color with `palette`, the frame rate with `fps`, and the margin width and color outside the screen with `border_width` and `border_color`. `palette` is specified as a list of @abstr_number elements of @abstr_number bit color, `border_color` as @abstr_number bit color

  * `run(update, draw)`  
Start the Pyxel application and call `update` function for frame update and `draw` function for drawing

  * `quit()`  
Quit the Pyxel application at the end of the current frame

  * `flip()`  
Force drawing the screen (do not use in normal applications)

  * `show()`  
Draw the screen and wait forever (do not use in normal applications)




### Resource

  * `save(filename)`  
Save the resource file (.pyxres) to the directory of the execution script

  * `load(filename)`  
Read the resource file (.pyxres) from the directory of the execution script




### Input

  * `mouse_x`, `mouse_y`  
The current position of the mouse cursor

  * `btn(key)`  
Return `True` if `key` is pressed, otherwise return `False` ( @abstr_hyperlink )

  * `btnp(key, [hold], [period])`  
Return `True` if `key` is pressed at that frame, otherwise return `False`. When `hold` and `period` are specified, `True` will be returned at the `period` frame interval when the `key` is held down for more than `hold` frames

  * `btnr(key)`  
Return `True` if `key` is released at that frame, otherwise return `False`

  * `mouse(visible)`  
If `visible` is `True`, show the mouse cursor. If `False`, hide it. Even if the mouse cursor is not displayed, its position is updated.




### Graphics

  * `image(img, [system])`  
Operate the image bank `img`( @abstr_number - @abstr_number ) (see the Image class). If `system` is `True`, the image bank for system can be accessed. @abstr_number is for the font and resource editor. @abstr_number is for the display screen  
e.g. `pyxel.image( @abstr_number ).load( @abstr_number , @abstr_number , "title.png")`

  * `tilemap(tm)`  
Operate the tilemap `tm`( @abstr_number - @abstr_number ) (see the Tilemap class)

  * `clip(x, y, w, h)`  
Set the drawing area of the screen from (`x`, `y`) to width `w` and height `h`. Reset the drawing area to full screen with `clip()`

  * `pal(col @abstr_number , col @abstr_number )`  
Replace color `col @abstr_number` with `col @abstr_number` at drawing. `pal()` to reset to the initial palette

  * `cls(col)`  
Clear screen with color `col`

  * `pix(x, y, col)`  
Draw a pixel of color `col` at (`x`, `y`)

  * `line(x @abstr_number , y @abstr_number , x @abstr_number , y @abstr_number , col)`  
Draw a line of color `col` from (`x @abstr_number`, `y @abstr_number`) to (`x @abstr_number`, `y @abstr_number`)

  * `rect(x, y, w, h, col)`  
Draw a rectangle of width `w`, height `h` and color `col` from (`x`, `y`)

  * `rectb(x, y, w, h, col)`  
Draw the outline of a rectangle of width `w`, height `h` and color `col` from (`x`, `y`)

  * `circ(x, y, r, col)`  
Draw a circle of radius `r` and color `col` at (`x`, `y`)

  * `circb(x, y, r, col)`  
Draw the outline of a circle of radius `r` and color `col` at (`x`, `y`)

  * `blt(x, y, img, u, v, w, h, [colkey])`  
Copy the region of size (`w`, `h`) from (`u`, `v`) of the image bank `img`( @abstr_number - @abstr_number ) to (`x`, `y`). If negative value is set for `w` and/or `h`, it will reverse horizontally and/or vertically. If `colkey` is specified, treated as transparent color

  * `bltm(x, y, tm, u, v, w, h, [colkey])`  
Draw the tilemap `tm`( @abstr_number - @abstr_number ) to (`x`, `y`) according to the tile information of size (`w`, `h`) from (`u`, `v`). If `colkey` is specified, treated as transparent color. A tile of the tilemap is drawn with a size of @abstr_number x @abstr_number , and if the tile number is @abstr_number , indicates the region ( @abstr_number , @abstr_number )-( @abstr_number , @abstr_number ) of the image bank, if @abstr_number , indicates ( @abstr_number , @abstr_number )-( @abstr_number , @abstr_number )

  * `text(x, y, s, col)`  
Draw a string `s` of color `col` at (`x`, `y`)




### Audio

  * `sound(snd, [system])`  
Operate the sound `snd`( @abstr_number - @abstr_number ) (see the Sound class). If `system` is `True`, the sound @abstr_number for system can be accessed  
e.g. `pyxel.sound( @abstr_number ).speed = @abstr_number`

  * `music(msc)`  
Operate the music `msc`( @abstr_number - @abstr_number ) (see the Music class)

  * `play_pos(ch)`  
Get the sound playback position of channel `ch`. The @abstr_number 's and @abstr_number 's indicate the sound number and the @abstr_number 's and @abstr_number 's indicate the note number. When playback is stopped, return `- @abstr_number`

  * `play(ch, snd, loop=False)`  
Play the sound `snd`( @abstr_number - @abstr_number ) on channel `ch`( @abstr_number - @abstr_number ). Play in order when `snd` is a list

  * `playm(msc, loop=False)`  
Play the music `msc`( @abstr_number - @abstr_number )

  * `stop([ch])`  
Stop playback of all channels. If `ch`( @abstr_number - @abstr_number ) is specified, stop the corresponding channel only




### Image Class

  * `width`, `height`  
The width and height of the image

  * `data`  
The data of the image (NumPy array)

  * `get(x, y)`  
Retrieve the data of the image at (`x`, `y`)

  * `set(x, y, data)`  
Set the data of the image at (`x`, `y`) by a value or a list of strings  
e.g. `pyxel.image( @abstr_number ).set( @abstr_number , @abstr_number , [" @abstr_number ", " @abstr_number ", " @abstr_number abc", "defg"])`

  * `load(x, y, filename)`  
Read the png image from the directory of the execution script at (`x`, `y`)

  * `copy(x, y, img, u, v, w, h)`  
Copy the region of size (`w`, `h`) from (`u`, `v`) of the image bank `img`( @abstr_number - @abstr_number ) to (`x`, `y`)




### Tilemap Class

  * `width`, `height`  
The width and height of the tilemap

  * `data`  
The data of the tilemap (NumPy array)

  * `refimg`  
The image bank referenced by the tilemap

  * `get(x, y)`  
Retrieve the data of the tilemap at (`x`, `y`)

  * `set(x, y, data)`  
Set the data of the tilemap at (`x`, `y`) by a value or a list of strings.  
e.g. `pyxel.tilemap( @abstr_number ).set( @abstr_number , @abstr_number , [" @abstr_number ", " @abstr_number ", "a @abstr_number a @abstr_number a @abstr_number ", "b @abstr_number b @abstr_number b @abstr_number "])`

  * `copy(x, y, tm, u, v, w, h)`  
Copy the region of size (`w`, `h`) from (`u`, `v`) of the tilemap `tm`( @abstr_number - @abstr_number ) to (`x`, `y`)




### Sound Class

  * `note`  
List of note( @abstr_number - @abstr_number ) ( @abstr_number = 'A @abstr_number ' = @abstr_number Hz)

  * `tone`  
List of tone( @abstr_number :Triangle / @abstr_number :Square / @abstr_number :Pulse / @abstr_number :Noise)

  * `volume`  
List of volume( @abstr_number - @abstr_number )

  * `effect`  
List of effects( @abstr_number :None / @abstr_number :Slide / @abstr_number :Vibrato / @abstr_number :FadeOut)

  * `speed`  
The length of one note( @abstr_number = @abstr_number second per tone)

  * `set(note, tone, volume, effect, speed)`  
Set a note, tone, volume, and effect with a string. If the tone, volume, and effect length are shorter than the note, it is repeated from the beginning

  * `set_note(note)`  
Set the note with a string made of 'CDEFGAB'+'#-'+' @abstr_number ' or 'R'. Case-insensitive and whitespace is ignored  
e.g. `pyxel.sound( @abstr_number ).set_note("G @abstr_number B- @abstr_number D @abstr_number R RF @abstr_number F @abstr_number F @abstr_number ")`

  * `set_tone(tone)`  
Set the tone with a string made of 'TSPN'. Case-insensitive and whitespace is ignored  
e.g. `pyxel.sound( @abstr_number ).set_tone("TTSS PPPN")`

  * `set_volume(volume)`  
Set the volume with a string made of ' @abstr_number '. Case-insensitive and whitespace is ignored  
e.g. `pyxel.sound( @abstr_number ).set_volume(" @abstr_number @abstr_number ")`

  * `set_effect(effect)`  
Set the effect with a string made of 'NSVF'. Case-insensitive and whitespace is ignored  
e.g. `pyxel.sound( @abstr_number ).set_effect("NFNF NVVS")`




### Music Class

  * `ch @abstr_number`  
List of sound( @abstr_number - @abstr_number ) play on channel @abstr_number . If an empty list is specified, the channel is not used for playback

  * `ch @abstr_number`  
List of sound( @abstr_number - @abstr_number ) play on channel @abstr_number . If an empty list is specified, the channel is not used for playback

  * `ch @abstr_number`  
List of sound( @abstr_number - @abstr_number ) play on channel @abstr_number . If an empty list is specified, the channel is not used for playback

  * `ch @abstr_number`  
List of sound( @abstr_number - @abstr_number ) play on channel @abstr_number . If an empty list is specified, the channel is not used for playback

  * `set(ch @abstr_number , ch @abstr_number , ch @abstr_number , ch @abstr_number )`  
Set the list of sound( @abstr_number - @abstr_number ) of all channels. If an empty list is specified, that channel is not used for playback  
e.g. `pyxel.music( @abstr_number ).set([ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number ], [ @abstr_number ], [])`

  * `set_ch @abstr_number (data)`  
Set the list of sound( @abstr_number - @abstr_number ) of channel @abstr_number 

  * `set_ch @abstr_number (data)`  
Set the list of sound( @abstr_number - @abstr_number ) of channel @abstr_number 

  * `set_ch @abstr_number (data)`  
Set the list of sound( @abstr_number - @abstr_number ) of channel @abstr_number 

  * `set_ch @abstr_number (data)`  
Set the list of sound( @abstr_number - @abstr_number ) of channel @abstr_number 




## How to Contribute

### Submitting an issue

Use the @abstr_hyperlink to submit bug reports and feature/enhancement requests. Before submitting a new issue, search the issue tracker to ensure that there is no similar open issue.

When submitting a report, select the appropriate template from @abstr_hyperlink .

### Manual testing

Anyone manually testing the code and reporting bugs or suggestions for enhancements in the issue tracker are very welcome!

### Submitting a pull request

Patches/fixes are accepted in form of pull requests (PRs). Make sure the issue the pull request addresses is open in the issue tracker.

Submitted pull request is deemed to have agreed to publish under @abstr_hyperlink .

## Other Information

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## License

Pyxel is under @abstr_hyperlink . It can be reused within proprietary software provided that all copies of the licensed software include a copy of the MIT License terms and the copyright notice.

Pyxel uses the following libraries:

  * @abstr_hyperlink - @abstr_hyperlink 
  * @abstr_hyperlink - @abstr_hyperlink 
  * @abstr_hyperlink - @abstr_hyperlink 
  * @abstr_hyperlink - @abstr_hyperlink 


