# Keras: Deep Learning for humans

@abstr_image 

@abstr_hyperlink @abstr_hyperlink 

## You have just found Keras.

Keras is a high-level neural networks API, written in Python and capable of running on top of @abstr_hyperlink , @abstr_hyperlink , or @abstr_hyperlink . It was developed with a focus on enabling fast experimentation. _Being able to go from idea to result with the least possible delay is key to doing good research._

Use Keras if you need a deep learning library that:

  * Allows for easy and fast prototyping (through user friendliness, modularity, and extensibility).
  * Supports both convolutional networks and recurrent networks, as well as combinations of the two.
  * Runs seamlessly on CPU and GPU.



Read the documentation at @abstr_hyperlink .

Keras is compatible with: __Python @abstr_number . @abstr_number - @abstr_number . @abstr_number __.

* * *

## Guiding principles

  * __User friendliness.__ Keras is an API designed for human beings, not machines. It puts user experience front and center. Keras follows best practices for reducing cognitive load: it offers consistent & simple APIs, it minimizes the number of user actions required for common use cases, and it provides clear and actionable feedback upon user error.

  * __Modularity.__ A model is understood as a sequence or a graph of standalone, fully configurable modules that can be plugged together with as few restrictions as possible. In particular, neural layers, cost functions, optimizers, initialization schemes, activation functions and regularization schemes are all standalone modules that you can combine to create new models.

  * __Easy extensibility.__ New modules are simple to add (as new classes and functions), and existing modules provide ample examples. To be able to easily create new modules allows for total expressiveness, making Keras suitable for advanced research.

  * __Work with Python__. No separate models configuration files in a declarative format. Models are described in Python code, which is compact, easier to debug, and allows for ease of extensibility.




* * *

## Getting started: @abstr_number seconds to Keras

The core data structure of Keras is a __model__, a way to organize layers. The simplest type of model is the @abstr_hyperlink model, a linear stack of layers. For more complex architectures, you should use the @abstr_hyperlink , which allows to build arbitrary graphs of layers.

Here is the `Sequential` model:

@abstr_code_section 

Stacking layers is as easy as `.add()`:

@abstr_code_section 

Once your model looks good, configure its learning process with `.compile()`:

@abstr_code_section 

If you need to, you can further configure your optimizer. A core principle of Keras is to make things reasonably simple, while allowing the user to be fully in control when they need to (the ultimate control being the easy extensibility of the source code). @abstr_code_section 

You can now iterate on your training data in batches:

@abstr_code_section 

Alternatively, you can feed batches to your model manually:

@abstr_code_section 

Evaluate your performance in one line:

@abstr_code_section 

Or generate predictions on new data:

@abstr_code_section 

Building a question answering system, an image classification model, a Neural Turing Machine, or any other model is just as fast. The ideas behind deep learning are simple, so why should their implementation be painful?

For a more in-depth tutorial about Keras, you can check out:

  * @abstr_hyperlink 
  * @abstr_hyperlink 



In the @abstr_hyperlink of the repository, you will find more advanced models: question-answering with memory networks, text generation with stacked LSTMs, etc.

* * *

## Installation

Before installing Keras, please install one of its backend engines: TensorFlow, Theano, or CNTK. We recommend the TensorFlow backend.

  * @abstr_hyperlink .
  * @abstr_hyperlink .
  * @abstr_hyperlink .



You may also consider installing the following **optional dependencies** :

  * @abstr_hyperlink (recommended if you plan on running Keras on GPU).
  * HDF @abstr_number and @abstr_hyperlink (required if you plan on saving Keras models to disk).
  * @abstr_hyperlink and @abstr_hyperlink (used by @abstr_hyperlink to plot model graphs).



Then, you can install Keras itself. There are two ways to install Keras:

  * **Install Keras from PyPI (recommended):**



Note: These installation steps assume that you are on a Linux or Mac environment. If you are on Windows, you will need to remove `sudo` to run the commands below.

@abstr_code_section 

If you are using a virtualenv, you may want to avoid using sudo:

@abstr_code_section 

  * **Alternatively: install Keras from the GitHub source:**



First, clone Keras using `git`:

@abstr_code_section 

Then, `cd` to the Keras folder and run the install command: @abstr_code_section 

* * *

## Configuring your Keras backend

By default, Keras will use TensorFlow as its tensor manipulation library. @abstr_hyperlink to configure the Keras backend.

* * *

## Support

You can ask questions and join the development discussion:

  * On the @abstr_hyperlink .
  * On the @abstr_hyperlink . Use @abstr_hyperlink to request an invitation to the channel.



You can also post **bug reports and feature requests** (only) in @abstr_hyperlink . Make sure to read @abstr_hyperlink first.

* * *

## Why this name, Keras?

Keras (κέρας) means _horn_ in Greek. It is a reference to a literary image from ancient Greek and Latin literature, first found in the _Odyssey_, where dream spirits (_Oneiroi_, singular _Oneiros_) are divided between those who deceive men with false visions, who arrive to Earth through a gate of ivory, and those who announce a future that will come to pass, who arrive through a gate of horn. It's a play on the words κέρας (horn) / κραίνω (fulfill), and ἐλέφας (ivory) / ἐλεφαίρομαι (deceive).

Keras was initially developed as part of the research effort of project ONEIROS (Open-ended Neuro-Electronic Intelligent Robot Operating System).

> _"Oneiroi are beyond our unravelling --who can be sure what tale they tell? Not all that men look for comes to pass. Two gates there are that give passage to fleeting Oneiroi; one is made of horn, one of ivory. The Oneiroi that pass through sawn ivory are deceitful, bearing a message that will not be fulfilled; those that come out through polished horn have truth behind them, to be accomplished for men who see them."_ Homer, Odyssey @abstr_number . @abstr_number ff (Shewring translation).

* * *
