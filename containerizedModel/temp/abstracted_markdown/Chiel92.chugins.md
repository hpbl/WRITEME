# Repository for Officially Supported ChuGins @abstr_hyperlink 

## Prepackaged Binaries

Binaries for most chugins in this repository are automatically included by the ChucK installers for Mac OS X and Windows. If you haven't installed ChucK already, these are available at @abstr_hyperlink . 

### Linux/Advanced Users

To compile and install all chugins:
    
    
    git clone https://github.com/ccrma/chugins.git
    cd chugins
    make [osx|win @abstr_number |linux]
    sudo make install
    

## List of Current Chugins

  * **ABSaturator**
    * soft clip saturating distortion, based on examples from Abel/Berners' Music @abstr_number course at Stanford.
  * **Bitcrusher**
    * sample-width reducer + sample rate decimator, bringing to mind the sounds of your favorite low-fidelity vintage audio equipment.
  * **MagicSine**
    * Efficient means of computing a sine wave with @abstr_number adds and @abstr_number multiples per sample, at the expense of being able to dynamically adjust phase.
  * **KasFilter**
    * by @abstr_hyperlink 
    * Undersampling-based resonant lowpass filter
  * **FIR**
    * by @abstr_hyperlink 
    * Arbitrary order FIR filter
  * **FoldbackSaturator**
    * by @abstr_hyperlink 
    * Foldback Saturator for nasty distortion
  * _*Pan @abstr_number / Pan @abstr_number / Pan @abstr_number *_
    * Basic equal-power panners for @abstr_number , @abstr_number , and @abstr_number channels
  * **PitchTrack**
    * by @abstr_hyperlink 
    * Monophonic autocorrelation pitch tracker, based on [helmholtz~] by Katja, http://www.katjaas.nl/helmholtz/helmholtz.html
  * **GVerb**
    * by @abstr_hyperlink 
    * Good quality stereo reverb with adjustable parameters
  * **Mesh @abstr_number D**
    * by @abstr_hyperlink 
    * STK instrument that simulates a rectilinear, @abstr_number -dimensional digital waveguide mesh structure. Basically sounds like striking a metal plate.
  * **Spectacle**
    * by @abstr_hyperlink 
    * FFT-based spectral delay and EQ
  * **Elliptic**
    * by @abstr_hyperlink 
    * Elliptic filter, capable of very steep slopes or interesting harmonic ripples
  * **PowerADSR**
    * by @abstr_hyperlink 
    * Power function ADSR envelope.
  * **WinFuncEnv**
    * by @abstr_hyperlink 
    * Envelope built on window functions.



## Chugins That We Are Working On

  * MAUI for chuck
  * GlucK (OpenGL)
  * AudioUnit loader
  * Ambisonics



## Chugins We would like to see happen

  * More configurable reverbs, dynamics processors, and distortion units
  * VST loader


