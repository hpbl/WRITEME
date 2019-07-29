# AudioKit V @abstr_number . @abstr_number 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_hyperlink 

AudioKit is an audio synthesis, processing, and analysis platform for iOS, macOS, and tvOS. This document serves as a one-page introduction to AudioKit, but we have much more information available on the AudioKit websites:

| @abstr_hyperlink | @abstr_hyperlink | |:--:|:--:| | Features, News, Blog, and Highlighted Apps | Developer Documentation | | @abstr_hyperlink | @abstr_hyperlink |

## Key Concepts

| Nodes | Operations | Taps | |-------|------------|------| | Nodes are interconnectable signal processing components. Each node has an output and usually some parameters. If the nodes processes another signal, the nodes will also have an `input`. | Operations are similar to nodes, except that they are signal processing components that exist inside of a single node. Operations can be used as parameters to other operations to create very complex results. | Taps use nodes as their data source, but do not redirect the audio signal away from the source nodes output into other nodes. This allows a tap to be moved from node to node more freely and to be added after the audio signal path has started.

## Installation

Installation details are found in the @abstr_hyperlink .

AudioKit is also available via @abstr_hyperlink . Place the following in your `Podfile`:

@abstr_code_section 

If you do not need the UI components, you can select just the Core pod, like so:

@abstr_code_section 

You can also use @abstr_hyperlink (v @abstr_number . @abstr_number or higher) to install our precompiled static frameworks in your project.

## Example Code

There are three Hello World projects, one for each of the Apple platforms: iOS, macOS, and tvOS. They play oscillators and display waveforms. The examples rely on AudioKit's frameworks so you can either download precompiled frameworks or @abstr_hyperlink .

For Hello World, you only need to understand a few lines of code:

| Code | Description | |------------------------------------------------|------------------------------| | `var oscillator = AKOscillator()` | Create the sound generator | | `AudioKit.output = oscillator` | Tell AudioKit what to output | | `AudioKit.start()` | Start up AudioKit | | `oscillator.start()` | Start the oscillator | | `oscillator.frequency = random(in: @abstr_number ... @abstr_number )` | Set oscillator parameters | | `oscillator.stop()` | Stop the oscillator |

## Playgrounds

Playgrounds contain bite-size examples of AudioKit and serve as tutorials for many of AudioKit's core concepts and capabilities. There are over @abstr_number playgrounds which cover basic tutorials, synthesis, physical modeling, file playback, MIDI, effects, filters, and analysis. We provide all playgrounds as a macOS project that is ready to run in Xcode. Just download the `AudioKitPlaygrounds.zip` file from our [releases page](https://github.com/audiokit/AudioKit/releases), open and build the project, and go to the playground pages to learn AudioKit's API in a fun way! We have videos of most of the playgrounds in action, so you don't need to run Xcode to check them out, just go to [AudioKit Playground Videos](http://audiokit.io/playgrounds/).  |  [![Playgrounds](http://audiokit.io/examples/playgrounds.jpg)](http://audiokit.io/playgrounds/)   
---|---  
  
## Ray Wenderlich's AudioKit Tutorial

Check out the @abstr_hyperlink . You’ll be taken on a fun and gentle journey through the framework via the history of sound synthesis and computer audio.

## Getting help

Here are three methods for getting support which are roughly listed in order of what you should try first:

@abstr_number . Post your problem to @abstr_hyperlink .

@abstr_number . If you don't have a problem that you can post to StackOverflow, you may post to our @abstr_hyperlink , but it is a moderated list and prepare to be rejected if the moderator believes your question is better suited for StackOverflow (most are).

@abstr_number . If you are pretty sure the problem is not in your implementation, but in AudioKit itself, you can open a @abstr_hyperlink .

## Contributing Code

AudioKit is always being improved by our core team and our users. @abstr_hyperlink 

When you want to modify AudioKit, check out the @abstr_hyperlink branch (as opposed to master), make your changes, and send us a @abstr_hyperlink .

## About Us

AudioKit was created by @abstr_hyperlink who is your life line if you need help! @abstr_hyperlink manages all of AudioKit's web sites and @abstr_hyperlink is Aure's co-admin and manages AudioKit's releases.

But, there are many other important people in our family:

| Group | Description | |-------|-------------| | @abstr_hyperlink | The biggest contributors to AudioKit! | | @abstr_hyperlink | Pro-level developer chat group, contact a core team member for an in invitation. | | @abstr_hyperlink | A list of all people who have submitted code to AudioKit.| | @abstr_hyperlink | App Announcements and mailing list for all users. |

### Contributors

This project exists thanks to all the people who contribute. [Contribute]. @abstr_hyperlink 
