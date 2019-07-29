@abstr_image   
Music notation and composition software

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

MuseScore is an open source and free music notation software. For support, contribution, and bug reports visit MuseScore.org. Fork and make pull requests!

## Features

  * WYSIWYG design, notes are entered on a "virtual notepaper"
  * TrueType font(s) for printing & display allows for high quality scaling to all sizes
  * Easy & fast note entry
  * Many editing functions
  * MusicXML import/export
  * MIDI (SMF) import/export
  * MuseData import
  * MIDI input for note entry
  * Integrated sequencer and software synthesizer to play the score
  * Print or create pdf files



## More info

  * @abstr_hyperlink 
  * @abstr_hyperlink .
  * @abstr_hyperlink 



## License

MuseScore is licensed under GPL version @abstr_number . @abstr_number . See LICENSE.GPL in the same directory.

## Packages

  * **aeolus** Clone of @abstr_hyperlink Disabled by default in the stable releases. See http://dev-list.musescore.org/Aeolus-Organ-Synth-td @abstr_number .html Kept as an example of how to integrate with a complex synthesizer.

  * **assets** Graphical assets, use them if you need a MuseScore icon. For logo, color etc... see https://musescore.org/en/about/logos-and-graphics

  * **awl** Audio Widget Library, from the MusE project

  * **build** Utility files for build

  * **bww @abstr_number mxml** Command line tool to convert BWW files to MusicXML. BWW parser is used by MuseScore to import BWW files.

  * **demos** A few MuseScore files to demonstrate what can be done

  * **fluid** Clone of @abstr_hyperlink , ported to C++ and customized

  * **fonts** Contains fontforge source (sfd) + ttf/otf fonts. MuseScore includes the "Emmentaler" font from the Lilypond project.

  * **libmscore** Data model of MuseScore

  * **mscore** Main code for the MuseScore UI

  * **msynth** Abstract interface to Fluid + Aeolus

  * **mtest** Unit testing using QTest

  * **omr** Optical music recognition

  * **share** Files moved to /usr/share/... on install

  * **test** Old tests. Should move to mtest

  * **vtest** Visual tests. Compare reference images with current implementation

  * **thirdparty** Contains projects which are included for convenience, usually to integrate them into the build system to make them available for all supported platforms.

    * **thirdparty/rtf @abstr_number html** Used for capella import

    * **thirdparty/dtl** Used for the score comparison tool. @abstr_hyperlink 

    * **thirdparty/ofqf** OSC server interface. Based on @abstr_hyperlink 

    * **thirdparty/singleapp** Clone from @abstr_hyperlink 

    * **thirdparty/portmidi** Clone from @abstr_hyperlink 

    * **thirdparty/beatroot** It's a core part of BeatRoot Vamp Plugin by Simon Dixon and Chris Cannam, used in MIDI import for beat detection. (https://code.soundsoftware.ac.uk/projects/beatroot-vamp/repository)




## Building

**Read the developer handbook for a @abstr_hyperlink and a list of dependencies.**

### Getting sources

If using git to download repo of entire code history, type:
    
    
    git clone https://github.com/musescore/MuseScore.git
    cd MuseScore
    

Otherwise, you can just download the latest source release tarball from https://github.com/musescore/MuseScore/releases, and then from your download directory type:
    
    
    tar xzf MuseScore-x.x.x.tar.gz
    cd MuseScore-x.x.x
    

### Release Build

To compile MuseScore, type:
    
    
    make release
    

If something goes wrong, then remove the whole build subdirectory with `make clean` and start new with `make release`.

### Running

To start MuseScore, type:
    
    
    ./build.release/mscore/mscore
    

The Start Center window will appear on every invocation until you disable that setting via the "Preferences" dialog.

### Installing

To install to default prefix using root user, type:
    
    
    sudo make install
    

### Debug Build

A debug version can be built by doing `make debug` instead of `make release`.

To run the debug version, type:
    
    
    ./build.debug/mscore/mscore
    

### Testing

See mtest/README.md or @abstr_hyperlink for instructions on how to run the test suite.

The new @abstr_hyperlink is also available to create your own automated tests. Please try it out!
