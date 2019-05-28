# Android MIDI Library

This project is mainly for use with Android applications that do not have access to Java's javax.sound.midi library. However, it is a stand-alone Java library with no Android-specific dependencies or considerations.

This code provides an interface to read, manipulate, and write MIDI files. "Playback" is supported as a real-time event dispatch system. This library does NOT include actual audio playback or device interfacing.

## Example Usage:

#### Reading and Writing a MIDI file:

@abstr_code_section 

#### Manipulating a MIDI file's data:

Removing a track: @abstr_code_section 

Removing any event that is not a note from track @abstr_number : @abstr_code_section 

Reducing the tempo by half: @abstr_code_section 

#### Composing a new MIDI file:

@abstr_code_section 

#### Listening for and processing MIDI events

@abstr_code_section @abstr_code_section 
