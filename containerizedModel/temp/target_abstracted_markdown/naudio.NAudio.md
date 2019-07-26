NAudio is an open source .NET audio library written by @abstr_hyperlink 

@abstr_image 

## Features

  * Play back audio using a variety of APIs 
    * WaveOut
    * DirectSound
    * ASIO
    * WASAPI
  * Read audio from many standard file formats 
    * WAV
    * AIFF
    * MP @abstr_number (using ACM, DMO or MFT)
    * G. @abstr_number mu-law and a-law
    * ADPCM, G. @abstr_number , Speex (using NSpeex)
    * WMA, AAC, MP @abstr_number and more others with Media Foundation
  * Convert between various forms of uncompressed audio 
    * Change the number of channels - Mono to stereo, stereo to mono
    * Modify bit depth ( @abstr_number , @abstr_number , @abstr_number , @abstr_number integer or @abstr_number bit IEEE float)
    * Resample audio using a choice of resampling algorithms
  * Encode audio using any ACM or Media Foundation codec installed on your computer 
    * Create MP @abstr_number s (Windows @abstr_number and above)
    * Create AAC/MP @abstr_number audio (Windows @abstr_number and above)
    * Create WMA files
    * Create WAV files containing G. @abstr_number , ADPCM, G. @abstr_number , etc.
  * Mix and manipulate audio streams using a @abstr_number -bit floating mixing engine 
    * construct signal chains 
    * examine sample levels for the purposes of metering or waveform rendering
    * pass blocks of samples through an FFT for metering or DSP
    * delay, loop, or fade audio in and out
    * Perform EQ with a BiQuad filter (allowing low pass, high pass, peaking EQ, etc.)
    * Pitch shifting of audio with a phase vocoder
  * Record audio using a variety of capture APIs 
    * WaveIn
    * WASAPI
    * ASIO
  * Record system audio with WASAPI Capture
  * Work with soundcards 
    * Enumerate devices
    * Access soundcard controls and metering information
  * Full MIDI event model 
    * Read and write MIDI files
    * Respond to received MIDI events
    * Send MIDI events
  * An extensible programming model 
    * All base classes easily inherited from for you to add your custom components
  * Support for UWP (preliminary) 
    * Create Windows @abstr_number Store apps and Windows Universal apps



## Getting Started

The easiest way to install NAudio into your project is to install the latest @abstr_hyperlink . Prerelease versions of NAudio are also often made available on NuGet.

Alternatively, you can download the latest release in binary format from @abstr_hyperlink .

NAudio comes with several demo applications which are the quickest way to see how to use the various features of NAudio. You can download compiled demo applications from @abstr_hyperlink , and explore the source code @abstr_hyperlink .

## Tutorials

### Playback

  * Playing an Audio File from a WinForms application
  * Playing an Audio File from a Console application
  * Playing Audio from a URL
  * Choose an audio output device type
  * Enumerate and select Output Devices
  * Creating and configuring a WasapiOut device
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Handling playback stopped
  * Understanding WaveStream, IWavePlayer and ISampleProvider
  * Playing Audio with ASIO



### Working with Codecs

  * Convert an MP @abstr_number to WAV
  * Encode to MP @abstr_number and other formats using MediaFoundationEncoder 
    * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Enumerate Media Foundation Transforms (MFTs)
  * Enumerate ACM Codecs
  * @abstr_hyperlink 



### Working with audio files

  * Mix Two Audio Files to WAV
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



### Manipulating audio

  * Convert between mono and stereo
  * Concatenating Audio
  * Skip and Take Using OffsetSampleProvider
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Resample Audio
  * @abstr_hyperlink 
  * Using RawSourceWaveStream
  * Adjust the pitch of audio using SmbPitchShiftingSampleProvider
  * @abstr_hyperlink 
  * Fade audio in and out



### Generating audio

  * Play Sine Waves and other signal types
  * @abstr_hyperlink 



### Recording

  * Recording a WAV file from a WinForms application
  * Capturing system audio with WasapiLoopbackCapture
  * @abstr_hyperlink 
  * Record Audio with ASIO



### Visualization

  * WaveForm Rendering to PNG
  * Implement a Recording Level Meter



### MIDI

  * Sending and Receiving MIDI Events
  * Exploring MIDI Files with MidiFile
  * MIDI Event types



### More...

Additional sources of documentation for NAudio are: \- @abstr_hyperlink \- @abstr_hyperlink 

## NAudio Training Courses

If you want to get up to speed as quickly as possible with NAudio programming, I recommend you watch these two Pluralsight courses. You will need to be a subscriber to access the content, but there is @abstr_number hours of training material on NAudio, and it also will give you access to their vast training library on other programming topics.

  * @abstr_hyperlink 
  * @abstr_hyperlink 



To be successful developing applications that process digital audio, there are some key concepts that you need to understand. To help developers quickly get up to speed with what they need to know before trying to use NAudio, I have created the @abstr_hyperlink course, which covers sample rates, bit depths, file formats, codecs, decibels, clipping, aliasing, synthesis, visualisations, effects and much more. In particular, the fourth module on signal chains is vital background information if you are to be effective with NAudio. 

@abstr_hyperlink is a follow-on course which contains seven hours of training material covering all the major features of NAudio. It is highly recommended that you take this course if you intend to create an application with NAudio.

## How do I...?

The best way to learn how to use NAudio is to download the source code and look at the two demo applications - @abstr_hyperlink and @abstr_hyperlink . These demonstrate several of the key capabilities of the NAudio framework. They also have the advantage of being kept up to date, whilst some of the tutorials you will find on the internet refer to old versions of NAudio.

## FAQ

**What is NAudio?**

NAudio is an open source audio API for .NET written in C# by Mark Heath, with contributions from many other developers. It is intended to provide a comprehensive set of useful utility classes from which you can construct your own audio application.

**Why NAudio?**

NAudio was created because the Framework Class Library that shipped with .NET @abstr_number . @abstr_number had no support for playing audio. The System.Media namespace introduced in .NET @abstr_number . @abstr_number provided a small amount of support, and the MediaElement in WPF and Silverlight took that a bit further. The vision behind NAudio is to provide a comprehensive set of audio related classes allowing easy development of utilities that play or record audio, or manipulate audio files in some way.

**Can I Use NAudio in my Project?**

NAudio is licensed under the Microsoft Public License (Ms-PL) which means that you can use it in whatever project you like including commercial projects. Of course we would love it if you share any bug-fixes or enhancements you made to the original NAudio project files.

**Is .NET Performance Good Enough for Audio?**

While .NET cannot compete with unmanaged languages for very low latency audio work, it still performs better than many people would expect. On a fairly modest PC, you can quite easily mix multiple WAV files together, including pass them through various effects and codecs, play back glitch free with a latency of around @abstr_number ms.

**How can I get help?**

There are three main ways to get help. First, you can raise an issue here on GitHub. This is the best option when you've written some code and want to ask why it's not working as you expect. I attempt to answer all questions, but since this is a spare time project, occasionally I get behind. 

You can also ask on StackOverflow and @abstr_hyperlink , if your question is a "how do I..." sort of question. This gives you a better chance of getting a quick answer. Please try to search first to see if your question has already been answered elsewhere.

Finally, I am occasionally able to offer paid support for situations where you need quick advice, bugfixes or new features. Please contact Mark Heath directly if you wish to pursue this option.

**How do I submit a patch?**

I welcome contributions to NAudio and have accepted many patches, but if you want your code to be included, please familiarise yourself with the following guidelines:

  * Your submission must be your own work, and able to be released under the MS-PL license.
  * You will need to make sure your code conforms to the layout and naming conventions used elsewhere in NAudio.
  * Remember that there are many existing users of NAudio. A patch that changes the public interface is not likely to be accepted.
  * Try to write "clean code" - avoid long functions and long classes. Try to add a new feature by creating a new class rather than putting loads of extra code inside an existing one.
  * I don't usually accept contributions I can't test, so please write unit tests (using NUnit) if at all possible. If not, give a clear explanation of how your feature can be unit tested and provide test data if appropriate. Tell me what you did to test it yourself, including what operating systems and soundcards you used.
  * If you are adding a new feature, please consider writing a short tutorial on how to use it.
  * Unless your patch is a small bugfix, I will code review it and give you feedback. You will need to be willing to make the recommended changes before it can be integrated into the main code.
  * Patches should be provided using the Pull Request feature of GitHub.
  * Please also bear in mind that when you add a feature to NAudio, that feature will generate future support requests and bug reports. Are you willing to stick around on the forums and help out people using it?


