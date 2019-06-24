@abstr_image 

@abstr_hyperlink @abstr_hyperlink 

**Magenta** is a research project exploring the role of machine learning in the process of creating art and music. Primarily this involves developing new deep learning and reinforcement learning algorithms for generating songs, images, drawings, and other materials. But it's also an exploration in building smart tools and interfaces that allow artists and musicians to extend (not replace!) their processes using these models. Magenta was started by some researchers and engineers from the @abstr_hyperlink , but many others have contributed significantly to the project. We use @abstr_hyperlink and release our models and tools in open source on this GitHub. If you’d like to learn more about Magenta, check out our @abstr_hyperlink , where we post technical details. You can also join our @abstr_hyperlink .

This is the home for our Python TensorFlow library. To use our models in the browser with @abstr_hyperlink , head to the @abstr_hyperlink repository.

## Getting Started

  * Installation
  * Using Magenta
  * Playing a MIDI Instrument
  * Development Environment (Advanced)



## Installation

Magenta maintains a @abstr_hyperlink for easy installation. We recommend using Anaconda to install it, but it can work in any standard Python environment. We support both Python @abstr_number (>= @abstr_number . @abstr_number ) and Python @abstr_number (>= @abstr_number . @abstr_number ). These instructions will assume you are using Anaconda.

Note that if you want to enable GPU support, you should follow the GPU Installation instructions below.

### Automated Install (w/ Anaconda)

If you are running Mac OS X or Ubuntu, you can try using our automated installation script. Just paste the following command into your terminal.

@abstr_code_section 

After the script completes, open a new terminal window so the environment variable changes take effect.

The Magenta libraries are now available for use within Python programs and Jupyter notebooks, and the Magenta scripts are installed in your path!

Note that you will need to run `source activate magenta` to use Magenta every time you open a new terminal window.

### Manual Install (w/o Anaconda)

If the automated script fails for any reason, or you'd prefer to install by hand, do the following steps.

Install the Magenta pip package:

@abstr_code_section 

**NOTE** : In order to install the `rtmidi` package that we depend on, you may need to install headers for some sound libraries. On Linux, this command should install the necessary packages:

@abstr_code_section 

The Magenta libraries are now available for use within Python programs and Jupyter notebooks, and the Magenta scripts are installed in your path!

### GPU Installation

If you have a GPU installed and you want Magenta to use it, you will need to follow the Manual Install instructions, but with a few modifications.

First, make sure your system meets the @abstr_hyperlink .

Next, follow the Manual Install instructions, but install the `magenta-gpu` package instead of the `magenta` package:

@abstr_code_section 

The only difference between the two packages is that `magenta-gpu` depends on `tensorflow-gpu` instead of `tensorflow`.

Magenta should now have access to your GPU.

## Using Magenta

You can now train our various models and use them to generate music, audio, and images. You can find instructions for each of the models by exploring the models directory.

To get started, create your own melodies with TensorFlow using one of the various configurations of our Melody RNN model; a recurrent neural network for predicting melodies.

## Playing a MIDI Instrument

After you've trained one of the models above, you can use our MIDI interface to play with it interactively.

We also have created several @abstr_hyperlink that provide a UI for this interface, making it easier to use (e.g., the browser-based @abstr_hyperlink ).

## Development Environment

If you want to develop on Magenta, you'll need to set up the full Development Environment.

First, clone this repository:

@abstr_code_section 

Next, install the dependencies by changing to the base directory and executing the setup command:

@abstr_code_section 

You can now edit the files and run scripts by calling Python as usual. For example, this is how you would run the `melody_rnn_generate` script from the base directory:

@abstr_code_section 

You can also install the (potentially modified) package with:

@abstr_code_section 

Before creating a pull request, please also test your changes with:

@abstr_code_section 

## PIP Release

To build a new version for pip, bump the version and then run:

@abstr_code_section 
