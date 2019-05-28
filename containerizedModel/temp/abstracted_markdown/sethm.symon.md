# SYMON - A @abstr_number System Simulator

**Version:** @abstr_number . @abstr_number . @abstr_number 

**Last Updated:** @abstr_number January, @abstr_number 

See the file COPYING for license.

@abstr_image 

## @abstr_number . @abstr_number About

Symon is a general purpose simulator for systems based on the MOS Technologies @abstr_number microprocessor and compatibles. Symon is implemented in Java. Its core goals are accuracy, ease of development, clear documentation, and extensive test suites for validating correctness.

Symon simulates a complete system with a @abstr_number MHz NMOS @abstr_number , @abstr_number KB of RAM, @abstr_number KB of ROM, a MOS @abstr_number or Motorola @abstr_number ACIA, a MOS @abstr_number VIA, and an experimental @abstr_number CRTC.

Symon has extensive unit tests to verify correctness, and fully passes Klaus Dormann's @abstr_number Functional Test Suite as of version @abstr_number . @abstr_number . @abstr_number (See @abstr_hyperlink for more information about this functional test suite).

Symon is under constant, active development. Feedback and patches are always welcome.

## @abstr_number . @abstr_number Requirements

  * Java @abstr_number . @abstr_number or higher
  * Maven @abstr_number . @abstr_number .x or higher (for building from source)
  * JUnit @abstr_number or higher (for testing)



## @abstr_number . @abstr_number Features

Symon can simulate multiple @abstr_number based architectures. At present, three machines are implemented: Symon (the default), MULTICOMP, and a "Simple" machine useful for debugging.

### @abstr_number . @abstr_number Memory Maps

#### @abstr_number . @abstr_number . @abstr_number Symon Memory Map

  * `$ @abstr_number`\--`$ @abstr_number FFF`: @abstr_number KB RAM
  * `$ @abstr_number`\--`$ @abstr_number F`: @abstr_number VIA
  * `$ @abstr_number`\--`$ @abstr_number`: MOS @abstr_number ACIA (Serial Console)
  * `$ @abstr_number`\--`$ @abstr_number`: MOS @abstr_number CRTC
  * `$C @abstr_number`\--`$FFFF`: @abstr_number KB ROM



The CRT Controller uses memory address `$ @abstr_number` as the start of Video memory.

#### @abstr_number . @abstr_number . @abstr_number MULTICOMP Memory Map

  * `$ @abstr_number`\--`$DFFF`: @abstr_number KB RAM
  * `$E @abstr_number`\--`$FFFF`: @abstr_number KB ROM
  * `$FFD @abstr_number`\--`$FFD @abstr_number`: Motorola @abstr_number ACIA
  * `$FFD @abstr_number`\--`$FFDF`: Controller for SD cards



### @abstr_number . @abstr_number . @abstr_number Simple Memory Map

  * `$ @abstr_number`\--`$FFFF`: @abstr_number KB RAM



### @abstr_number . @abstr_number Serial Console and CPU Status

@abstr_image 

The main window of the simulator acts as the primary Input/Output system through a virtual serial terminal. The terminal is attached to a simulated ACIA, including a programmable baud rate generator that tries to approximate the correct "feel" of the programmed baud rate. (The sample Enhanced BASIC ROM image is programmed for @abstr_number baud)

It also provides CPU status. Contents of the accumulator, index registers, processor status flags, disassembly of the instruction register, and stack pointer are all displayed.

@abstr_image 

The console supports font sizes from @abstr_number to @abstr_number points.

### @abstr_number . @abstr_number ROM Loading

@abstr_image 

Symon can load any appropriately sized ROM image. The Symon architecture expects as @abstr_number KB ( @abstr_number byte) ROM image, while the MULTICOMP architecture expects an @abstr_number KB ( @abstr_number byte) ROM image. Images are loaded via the "Load ROM..." action in the "File" menu. The selected ROM file will be loaded into memory at the correct ROM base address.

### @abstr_number . @abstr_number Memory Window

@abstr_image 

Memory contents can be viewed (and edited) one page at a time through the Memory Window.

### @abstr_number . @abstr_number Trace Log

@abstr_image 

The last @abstr_number , @abstr_number execution steps are disassembled and logged to the Trace Log Window.

### @abstr_number . @abstr_number Simulator Speeds

@abstr_image 

Simulated speeds may be set from @abstr_number MHz to @abstr_number MHz.

### @abstr_number . @abstr_number Breakpoints

@abstr_image 

Breakpoints can be set and removed through the Breakpoints window.

### @abstr_number . @abstr_number Experimental @abstr_number CRTC Video

@abstr_image 

This feature is highly experimental. It's possible to open a video window from the "View" menu. This window simulates the output of a MOS @abstr_number CRT Controller located at address `$ @abstr_number` and `$ @abstr_number`.

By default, the @abstr_number x @abstr_number character display uses video memory located at base address `$ @abstr_number`. This means that the memory from address `$ @abstr_number` ( @abstr_number decimal) to `$ @abstr_number E @abstr_number` ( @abstr_number decimal) is directly mapped to video.

  * Address Register (at address `$ @abstr_number`)
  * R @abstr_number : Horizontal Displayed Columns
  * R @abstr_number : Vertical Displayed Rows
  * R @abstr_number : Scan Lines per Row
  * R @abstr_number : Cursor Start Scan Line and Cursor Control Mode
  * R @abstr_number : Cursor End Scan Line
  * R @abstr_number : Display Start Address (High Byte)
  * R @abstr_number : Display Start Address (Low Byte)
  * R @abstr_number : Cursor Position (High Byte)
  * R @abstr_number : Cursor Position (Low Byte)



Although the simulation is pretty good, there are a few key differences between the simulated @abstr_number and a real @abstr_number :

  * The simulated @abstr_number supports only the straight binary addressing mode of the real @abstr_number , and not the Row/Column addressing mode.

  * The simulated @abstr_number has full @abstr_number bit addressing, where the real @abstr_number has only a @abstr_number -bit address bus.

  * The simulation is done at a whole-frame level, meaning that lots of @abstr_number programming tricks that were achieved by updating the frame address during vertical and horizontal sync times are not achievable. There is no way (for example) to change the Display Start Address (R @abstr_number and R @abstr_number ) while a frame is being drawn. 




For more information on the @abstr_number CRTC and its programming model, please see the following resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### @abstr_number . @abstr_number . @abstr_number Example BASIC Program to test Video

This program will fill the video screen with all printable characters.
    
    
     @abstr_number  J =  @abstr_number 
     @abstr_number  FOR I =  @abstr_number  TO  @abstr_number 
     @abstr_number  POKE I,J
     @abstr_number  IF J <  @abstr_number  THEN J = J +  @abstr_number  ELSE J =  @abstr_number 
     @abstr_number  NEXT I
     @abstr_number  END
    

## @abstr_number . @abstr_number Usage

### @abstr_number . @abstr_number Building

To build Symon with Apache Maven, just type:
    
    
    $ mvn package
    

Maven will build Symon, run unit tests, and produce a jar file in the `target` directory containing the compiled simulator.

Symon is meant to be invoked directly from the jar file. To run with Java @abstr_number . @abstr_number or greater, just type:
    
    
    $ java -jar symon- @abstr_number . @abstr_number . @abstr_number .jar
    

When Symon is running, you should be presented with a simple graphical interface.

### @abstr_number . @abstr_number ROM images

The simulator requires a ROM image loaded into memory to work properly. Without a ROM in memory, the simulator will not be able to reset, since the reset vector for the @abstr_number is located in the ROM address space.

By default, any file named `rom.bin` that exists in the same directory where Symon is launched will be loaded as a ROM image. ROM images can also be swapped out at run-time with the "Load ROM Image..." in the File menu.

The "samples" directory contains a ROM image for the Symon architecture named 'ehbasic.rom', containing Lee Davison's Enhanced @abstr_number BASIC. This serves as a good starting point for exploration.

_Note_ : Presently, EhBASIC only works with the Symon machine architecture, not with MULTICOMP.

### @abstr_number . @abstr_number Loading A Program

In addition to ROM images, programs in the form of raw binary object files can be loaded directly into memory from "Load Program..." in the File menu.

Programs are loaded starting at addres $ @abstr_number . After loading the program, the simulated CPU's reset vector is loaded with the values $ @abstr_number , $ @abstr_number , and the CPU is reset.

There are two very simple sample program in the "samples" directory, for testing.

  * 'echo.prg' will echo back anything typed at the console.

  * 'hello.prg' will continuously print "Hello, @abstr_number World!" to the console.




### @abstr_number . @abstr_number Running

After loading a program or ROM image, clicking "Run" will start the simulator running.

## @abstr_number . @abstr_number Revision History

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number January, @abstr_number - Remove dependency on Java @abstr_number . Now supports compiling and running under Java @abstr_number . @abstr_number .

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number January, @abstr_number - Add symbolic disassembly to breakpoints window.

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number January, @abstr_number - Minor enhancement: Allows breakpoints to be added with the Enter key.

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number December, @abstr_number - Fixed delay loop to better simulate various clock speeds. Added ability to select clock speed at runtime. Status display now shows the next instruction to be executed, instead of the last instruction executed. Added support for breakpoints.

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number August, @abstr_number - Added "Simple" machine implementation, pure RAM with no IO. Added Klaus Dormann's @abstr_number Functional Tests for further machine verification (these tests must be run in the "Simple" machine).

  * _* @abstr_number . @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number July, @abstr_number - Pressing 'Control' while clicking 'Reset' now performs a memory clear.

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number July, @abstr_number - MULTICOMP and multi-machine support contributed by Maik Merten <maikmerten@googlemail.com>

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number January, @abstr_number - Support for IRQ and NMI handling.

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number December, @abstr_number - First pass at a @abstr_number CRTC simulation.

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number March, @abstr_number - ASCII display for memory window. Allows user to select a step count from a drop-down box.

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number March, @abstr_number - Fix for ZPX, ZPY display in the trace log (change contributed by jsissom)

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number January, @abstr_number - Added tool-tip text. Memory is no longer cleared when resetting. Fixed swapped register labels.

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number January, @abstr_number - Fully passes Klaus Dormann's @abstr_number Functional Test suite!

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number December, @abstr_number 

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number December, @abstr_number 

  * _* @abstr_number . @abstr_number . @abstr_number :_ * @abstr_number December, @abstr_number 

  * _* @abstr_number . @abstr_number :_ * @abstr_number November, @abstr_number 

  * _* @abstr_number . @abstr_number :_ * @abstr_number October, @abstr_number - Able to run Enhanced BASIC for the first time.

  * _* @abstr_number . @abstr_number :_ * @abstr_number October, @abstr_number 

  * _* @abstr_number . @abstr_number :_ * @abstr_number April, @abstr_number 

  * _* @abstr_number . @abstr_number :_ * @abstr_number January, @abstr_number 




## @abstr_number . @abstr_number Roadmap

  * _* @abstr_number . @abstr_number :_ * Better breakpoint support. Symbolic debugging of breakpoints.

  * _* @abstr_number . @abstr_number :_ * Complete rewrite of the UI in JavaFX instead of Swing. Complete assembler and disassembler built in. Ability to attach source code for symbolic debugging.




## @abstr_number . @abstr_number To Do

  * Feedback (in the form of dialogs, status bar, etc).

  * Better debugging tools from the UI, including breakpoints and disassembly.

  * UI needs a ton more polish.

  * More extensive testing.

  * Clean up JavaDoc.

  * Implement CMOS @abstr_number C @abstr_number instructions and NMOS / CMOS mode flag.

  * Allow displaying ACIA status and dumping ACIA buffers, for debugging.

  * CRTC emulation is very naive. The whole frame is drawn in one CPU step. This should be improved by drawing scan lines during machine steps to approximate real NTSC/PAL refresh rates.

  * Symbolic debugging.




## @abstr_number . @abstr_number Copyright and Acknowledgements

**Copyright (c) @abstr_number Seth J. Morabito <web@loomcom.com>**

Portions Copyright (c) @abstr_number Maik Merten <maikmerten@googlemail.com>

Additional components used in this project are copyright their respective owners.

  * Enhanced @abstr_number BASIC Copyright (c) Lee Davison
  * @abstr_number Functional Tests Copyright (c) Klaus Dormann
  * JTerminal Copyright (c) Graham Edgecombe



This project would not have been possible without the following resources:

  * @abstr_hyperlink , for wonderfully detailed information about the @abstr_number 

  * @abstr_hyperlink , for information about how instructions are coded




## @abstr_number . @abstr_number Licensing

Symon is free software. It is distributed under the MIT License. Please see the file 'COPYING' for full details of the license.
