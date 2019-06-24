@abstr_hyperlink 

# spaCy: Industrial-strength NLP

spaCy is a library for advanced Natural Language Processing in Python and Cython. It's built on the very latest research, and was designed from day one to be used in real products. spaCy comes with @abstr_hyperlink and word vectors, and currently supports tokenization for _* @abstr_number + languages **. It features state-of-the-art speed, convolutional ***_ neural network models for tagging, parsing and **named entity recognition** and easy **deep learning** integration. It's commercial open-source software, released under the MIT license.

💫 **Version @abstr_number . @abstr_number out now!** @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## 📖 Documentation

| Documentation | | | --------------- | -------------------------------------------------------------- | | [spaCy @abstr_number ] | New to spaCy? Here's everything you need to know! | | [Usage Guides] | How to use spaCy and its features. | | [New in v @abstr_number . @abstr_number ] | New features, backwards incompatibilities and migration guide. | | [API Reference] | The detailed reference for spaCy's API. | | [Models] | Download statistical language models for spaCy. | | [Universe] | Libraries, extensions, demos, books and courses. | | [Changelog] | Changes and version history. | | [Contribute] | How to contribute to the spaCy project and code base. |

## 💬 Where to ask questions

The spaCy project is maintained by @abstr_hyperlink and @abstr_hyperlink . Please understand that we won't be able to provide individual support via email. We also believe that help is much more valuable if it's shared publicly, so that more people can benefit from it.

| Type | Platforms | | ------------------------ | ------------------------------------------------------ | | 🚨 **Bug Reports** | [GitHub Issue Tracker] | | 🎁 **Feature Requests** | [GitHub Issue Tracker] | | 👩‍💻 **Usage Questions** | [Stack Overflow] · [Gitter Chat] · [Reddit User Group] | | 🗯 **General Discussion** | [Gitter Chat] · [Reddit User Group] |

## Features

  * Non-destructive **tokenization**
  * **Named entity** recognition
  * Support for _* @abstr_number + languages_ *
  * Pre-trained @abstr_hyperlink and word vectors
  * State-of-the-art speed
  * Easy **deep learning** integration
  * Part-of-speech tagging
  * Labelled dependency parsing
  * Syntax-driven sentence segmentation
  * Built in **visualizers** for syntax and NER
  * Convenient string-to-hash mapping
  * Export to numpy data arrays
  * Efficient binary serialization
  * Easy **model packaging** and deployment
  * Robust, rigorously evaluated accuracy



📖 **For more details, see the @abstr_hyperlink .**

## Install spaCy

For detailed installation instructions, see the @abstr_hyperlink .

  * **Operating system** : macOS / OS X · Linux · Windows (Cygwin, MinGW, Visual Studio)
  * **Python version** : Python @abstr_number . @abstr_number , @abstr_number . @abstr_number + (only @abstr_number bit)
  * **Package managers** : [pip] · [conda] (via `conda-forge`)



### pip

Using pip, spaCy releases are available as source packages and binary wheels (as of `v @abstr_number . @abstr_number . @abstr_number`).

@abstr_code_section 

When using pip it is generally recommended to install packages in a virtual environment to avoid modifying system state:

@abstr_code_section 

### conda

Thanks to our great community, we've finally re-added conda support. You can now install spaCy via `conda-forge`:

@abstr_code_section 

For the feedstock including the build recipe and configuration, check out @abstr_hyperlink . Improvements and pull requests to the recipe and setup are always appreciated.

### Updating spaCy

Some updates to spaCy may require downloading new statistical models. If you're running spaCy v @abstr_number . @abstr_number or higher, you can use the `validate` command to check if your installed models are compatible and if not, print details on how to update them:

@abstr_code_section 

If you've trained your own models, keep in mind that your training and runtime inputs must match. After updating spaCy, we recommend **retraining your models** with the new version.

📖 **For details on upgrading from spaCy @abstr_number .x to spaCy @abstr_number .x, see the @abstr_hyperlink .**

## Download models

As of v @abstr_number . @abstr_number . @abstr_number , models for spaCy can be installed as **Python packages**. This means that they're a component of your application, just like any other module. Models can be installed using spaCy's `download` command, or manually by pointing pip to a path or URL.

| Documentation | | | ---------------------- | ------------------------------------------------------------- | | [Available Models] | Detailed model descriptions, accuracy figures and benchmarks. | | [Models Documentation] | Detailed usage instructions. |

@abstr_code_section 

### Loading and using models

To load a model, use `spacy.load()` with the model name, a shortcut link or a path to the model data directory.

@abstr_code_section 

You can also `import` a model directly via its full name and then call its `load()` method with no arguments.

@abstr_code_section 

📖 **For more info and examples, check out the @abstr_hyperlink .**

### Support for older versions

If you're using an older version (`v @abstr_number . @abstr_number . @abstr_number` or below), you can still download and install the old models from within spaCy using `python -m spacy.en.download all` or `python -m spacy.de.download all`. The `.tar.gz` archives are also @abstr_hyperlink . To download and install the models manually, unpack the archive, drop the contained directory into `spacy/data` and load the model via `spacy.load('en')` or `spacy.load('de')`.

## Compile from source

The other way to install spaCy is to clone its @abstr_hyperlink and build it from source. That is the common way if you want to make changes to the code base. You'll need to make sure that you have a development environment consisting of a Python distribution including header files, a compiler, @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink installed. The compiler part is the trickiest. How to do that depends on your system. See notes on Ubuntu, OS X and Windows for details.

@abstr_code_section 

Compared to regular install via pip, requirements.txt additionally installs developer dependencies such as Cython. For more details and instructions, see the documentation on @abstr_hyperlink and the @abstr_hyperlink to get the right commands for your platform and Python version.

### Ubuntu

Install system-level dependencies via `apt-get`:

@abstr_code_section 

### macOS / OS X

Install a recent version of @abstr_hyperlink , including the so-called "Command Line Tools". macOS and OS X ship with Python and git preinstalled.

### Windows

Install a version of the @abstr_hyperlink or @abstr_hyperlink that matches the version that was used to compile your Python interpreter. For official distributions these are VS @abstr_number (Python @abstr_number . @abstr_number ), VS @abstr_number (Python @abstr_number . @abstr_number ) and VS @abstr_number (Python @abstr_number . @abstr_number ).

## Run tests

spaCy comes with an extensive test suite. In order to run the tests, you'll usually want to clone the repository and build spaCy from source. This will also install the required development dependencies and test utilities defined in the `requirements.txt`.

Alternatively, you can find out where spaCy is installed and run `pytest` on that directory. Don't forget to also install the test utilities via spaCy's `requirements.txt`:

@abstr_code_section 

See @abstr_hyperlink for more details and examples.
