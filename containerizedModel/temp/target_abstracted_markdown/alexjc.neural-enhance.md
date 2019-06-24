# Neural Enhance

.. image:: docs/OldStation_example.gif

_*Example # @abstr_number *_ — Old Station: `view comparison <http://enhance.nucl.ai/w/ @abstr_number f @abstr_number f @abstr_number - @abstr_number ce @abstr_number - @abstr_number e @abstr_number - @abstr_number c-c @abstr_number be @abstr_number f/view>`_ in @abstr_number -bit HD, `original photo <https://flic.kr/p/oYhbBv>`_ CC-BY-SA @siv-athens.

* * *

`As seen on TV! <https://www.youtube.com/watch?v=LhF_ @abstr_number SxrGk>`_ What if you could increase the resolution of your photos using technology from CSI laboratories? Thanks to deep learning and `#NeuralEnhance`, it's now possible to train a neural network to zoom in to your images at @abstr_number x or even @abstr_number x. You'll get even better results by increasing the number of neurons or training with a dataset similar to your low resolution image.

The catch? The neural network is hallucinating details based on its training from example images. It's not reconstructing your photo exactly as it would have been if it was HD. That's only possible in Hollywood — but using deep learning as "Creative AI" works and it is just as cool! Here's how you can get started...

@abstr_number . `Examples & Usage <# @abstr_number -examples--usage>`_ @abstr_number . `Installation <# @abstr_number -installation--setup>`_ @abstr_number . `Background & Research <# @abstr_number -background--research>`_ @abstr_number . `Troubleshooting <# @abstr_number -troubleshooting-problems>`_ @abstr_number . `Frequent Questions <# @abstr_number -frequent-questions>`_

|Python Version| |License Type| |Project Stars|

.. image:: docs/EnhanceCSI_example.png :target: http://enhance.nucl.ai/w/ @abstr_number db @abstr_number - @abstr_number d @abstr_number - @abstr_number e @abstr_number - @abstr_number b-c @abstr_number be @abstr_number f/view

#  @abstr_number . Examples & Usage

The main script is called `enhance.py`, which you can run with Python @abstr_number . @abstr_number + once it's `setup <# @abstr_number -installation--setup>`_ as below. The `--device` argument that lets you specify which GPU or CPU to use. For the samples above, here are the performance results:

  * **GPU Rendering HQ** — Assuming you have CUDA setup and enough on-board RAM to fit the image and neural network, generating @abstr_number p output should complete in @abstr_number seconds, or @abstr_number s per image if multiple at the same time.
  * **CPU Rendering HQ** — This will take roughly @abstr_number to @abstr_number seconds for @abstr_number p output, however on most machines you can run @abstr_number - @abstr_number processes simultaneously given enough system RAM. Runtime depends on the neural network size.



The default is to use `--device=cpu`, if you have NVIDIA card setup with CUDA already try `--device=gpu @abstr_number`. On the CPU, you can also set environment variable to `OMP_NUM_THREADS= @abstr_number`, which is most useful when running the script multiple times in parallel.

##  @abstr_number .a) Enhancing Images

A list of example command lines you can use with the pre-trained models provided in the GitHub releases:

.. code:: bash
    
    
    # Run the super-resolution script to repair JPEG artefacts, zoom factor  @abstr_number : @abstr_number .
    python @abstr_number  enhance.py --type=photo --model=repair --zoom= @abstr_number  broken.jpg
    
    # Process multiple good quality images with a single run, zoom factor  @abstr_number : @abstr_number .
    python @abstr_number  enhance.py --type=photo --zoom= @abstr_number  file @abstr_number .jpg file @abstr_number .jpg
    
    # Display output images that were given `_ne?x.png` suffix.
    open *_ne?x.png
    

Here's a list of currently supported models, image types, and zoom levels in one table.

================== ===================== ==================== ===================== ==================== FEATURES `--model=default` `--model=repair` `--model=denoise` `--model=deblur` ================== ===================== ==================== ===================== ==================== `--type=photo` @abstr_number x @abstr_number x … …   
================== ===================== ==================== ===================== ====================

##  @abstr_number .b) Training Super-Resolution

Pre-trained models are provided in the GitHub releases. Training your own is a delicate process that may require you to pick parameters based on your image dataset.

.. code:: bash
    
    
    # Remove the model file as don't want to reload the data to fine-tune it.
    rm -f ne?x*.pkl.bz @abstr_number 
    
    # Pre-train the model using perceptual loss from paper [ @abstr_number ] below.
    python @abstr_number . @abstr_number  enhance.py --train "data/*.jpg" --model custom --scales= @abstr_number  --epochs= @abstr_number  \
        --perceptual-layer=conv @abstr_number _ @abstr_number  --smoothness-weight= @abstr_number e @abstr_number  --adversary-weight= @abstr_number . @abstr_number  \
        --generator-blocks= @abstr_number  --generator-filters= @abstr_number 
    
    # Train the model using an adversarial setup based on [ @abstr_number ] below.
    python @abstr_number . @abstr_number  enhance.py --train "data/*.jpg" --model custom --scales= @abstr_number  --epochs= @abstr_number  \
             --perceptual-layer=conv @abstr_number _ @abstr_number  --smoothness-weight= @abstr_number e @abstr_number  --adversary-weight= @abstr_number e @abstr_number  \
             --generator-start= @abstr_number  --discriminator-start= @abstr_number  --adversarial-start= @abstr_number  \
             --discriminator-size= @abstr_number 
    
    # The newly trained model is output into this file...
    ls ne?x-custom-*.pkl.bz @abstr_number
    

.. image:: docs/BankLobby_example.gif

_*Example # @abstr_number *_ — Bank Lobby: `view comparison <http://enhance.nucl.ai/w/ @abstr_number d @abstr_number - @abstr_number ce @abstr_number - @abstr_number e @abstr_number -becb-c @abstr_number be @abstr_number f/view>`_ in @abstr_number -bit HD, `original photo <https://flic.kr/p/ @abstr_number a @abstr_number cwm>`_ CC-BY-SA @benarent.

#  @abstr_number . Installation & Setup

##  @abstr_number .a) Using Docker Image [recommended]

The easiest way to get up-and-running is to `install Docker <https://www.docker.com/>`_. Then, you should be able to download and run the pre-built image using the `docker` command line tool. Find out more about the `alexjc/neural-enhance` image on its `Docker Hub <https://hub.docker.com/r/alexjc/neural-enhance/>`_ page.

Here's the simplest way you can call the script using `docker`, assuming you're familiar with using `-v` argument to mount folders you can use this directly to specify files to enhance:

.. code:: bash
    
    
    # Download the Docker image and show the help text to make sure it works.
    docker run --rm -v `pwd`:/ne/input -it alexjc/neural-enhance --help
    

**Single Image** — In practice, we suggest you setup an alias called `enhance` to automatically expose the folder containing your specified image, so the script can read it and store results where you can access them. This is how you can do it in your terminal console on OSX or Linux:

.. code:: bash
    
    
    # Setup the alias. Put this in your .bashrc or .zshrc file so it's available at startup.
    alias enhance='function ne() { docker run --rm -v "$(pwd)/`dirname ${@:$#}`":/ne/input -it alexjc/neural-enhance ${@: @abstr_number :$#- @abstr_number } "input/`basename ${@:$#}`"; }; ne'
    
    # Now run any of the examples above using this alias, without the `.py` extension.
    enhance --zoom= @abstr_number  --model=repair images/broken.jpg
    

**Multiple Images** — To enhance multiple images in a row (faster) from a folder or wildcard specification, make sure to quote the argument to the alias command:

.. code:: bash
    
    
    # Process multiple images, make sure to quote the argument!
    enhance --zoom= @abstr_number  "images/*.jpg"
    

If you want to run on your NVIDIA GPU, you can instead change the alias to use the image `alexjc/neural-enhance:gpu` which comes with CUDA and CUDNN pre-installed. Then run it within `nvidia-docker <https://github.com/NVIDIA/nvidia-docker>`_ and it should use your physical hardware!

##  @abstr_number .b) Manual Installation [developers]

This project requires Python @abstr_number . @abstr_number + and you'll also need `numpy` and `scipy` (numerical computing libraries) as well as `python @abstr_number -dev` installed system-wide. If you want more detailed instructions, follow these:

@abstr_number . `Linux Installation of Lasagne <https://github.com/Lasagne/Lasagne/wiki/From-Zero-to-Lasagne-on-Ubuntu- @abstr_number . @abstr_number >`_ **(intermediate)** @abstr_number . `Mac OSX Installation of Lasagne <http://deeplearning.net/software/theano/install.html#mac-os>`_ **(advanced)** @abstr_number . `Windows Installation of Lasagne <https://github.com/Lasagne/Lasagne/wiki/From-Zero-to-Lasagne-on-Windows- @abstr_number -% @abstr_number -bit% @abstr_number >`_ **(expert)**

Afterward fetching the repository, you can run the following commands from your terminal to setup a local environment:

.. code:: bash
    
    
    # Create a local environment for Python  @abstr_number .x to install dependencies here.
    python @abstr_number  -m venv pyvenv --system-site-packages
    
    # If you're using bash, make this the active version of Python.
    source pyvenv/bin/activate
    
    # Setup the required dependencies simply using the PIP module.
    python @abstr_number  -m pip install --ignore-installed -r requirements.txt
    

After this, you should have `pillow`, `theano` and `lasagne` installed in your virtual environment. You'll also need to download this `pre-trained neural network <https://github.com/alexjc/neural-doodle/releases/download/v @abstr_number . @abstr_number /vgg @abstr_number _conv.pkl.bz @abstr_number >`_ (VGG @abstr_number , @abstr_number Mb) and put it in the same folder as the script to run. To de-install everything, you can just delete the `#/pyvenv/` folder.

.. image:: docs/Faces_example.png

_*Example # @abstr_number *_ — Specialized super-resolution for faces, trained on HD examples of celebrity faces only. The quality is significantly higher when narrowing the domain from "photos" in general.

#  @abstr_number . Background & Research

This code uses a combination of techniques from the following papers, as well as some minor improvements yet to be documented (watch this repository for updates):

@abstr_number . `Perceptual Losses for Real-Time Style Transfer and Super-Resolution <http://arxiv.org/abs/ @abstr_number . @abstr_number >`_ @abstr_number . `Real-Time Super-Resolution Using Efficient Sub-Pixel Convolution <https://arxiv.org/abs/ @abstr_number . @abstr_number >`_ @abstr_number . `Deeply-Recursive Convolutional Network for Image Super-Resolution <https://arxiv.org/abs/ @abstr_number . @abstr_number >`_ @abstr_number . `Photo-Realistic Super-Resolution Using a Generative Adversarial Network <https://arxiv.org/abs/ @abstr_number . @abstr_number >`_

Special thanks for their help and support in various ways:

  * Eder Santana — Discussions, encouragement, and his ideas on `sub-pixel deconvolution <https://github.com/Tetrachrome/subpixel>`_.
  * Andrew Brock — This sub-pixel layer code is based on `his project repository <https://github.com/ajbrock/Neural-Photo-Editor>`_ using Lasagne.
  * Casper Kaae Sønderby — For suggesting a more stable alternative to sigmoid + log as GAN loss functions.



#  @abstr_number . Troubleshooting Problems

## Can't install or Unable to find pgen, not compiling formal grammar.

There's a Python extension compiler called Cython, and it's missing or improperly installed. Try getting it directly from the system package manager rather than PIP.

**FIX:** `sudo apt-get install cython @abstr_number`

## NotImplementedError: AbstractConv @abstr_number d theano optimization failed.

This happens when you're running without a GPU, and the CPU libraries were not found (e.g. `libblas`). The neural network expressions cannot be evaluated by Theano and it's raising an exception.

**FIX:** `sudo apt-get install libblas-dev libopenblas-dev`

## TypeError: max_pool_ @abstr_number d() got an unexpected keyword argument 'mode'

You need to install Lasagne and Theano directly from the versions specified in `requirements.txt`, rather than from the PIP versions. These alternatives are older and don't have the required features.

**FIX:** `python @abstr_number -m pip install -r requirements.txt`

## ValueError: unknown locale: UTF- @abstr_number 

It seems your terminal is misconfigured and not compatible with the way Python treats locales. You may need to change this in your `.bashrc` or other startup script. Alternatively, this command will fix it once for this shell instance.

**FIX:** `export LC_ALL=en_US.UTF- @abstr_number`

.. image:: docs/StreetView_example.gif

_*Example # @abstr_number *_ — Street View: `view comparison <http://enhance.nucl.ai/w/ @abstr_number b @abstr_number c @abstr_number - @abstr_number d @abstr_number - @abstr_number e @abstr_number - @abstr_number -c @abstr_number be @abstr_number f/view>`_ in @abstr_number -bit HD, `original photo <https://flic.kr/p/gnxcXH>`_ CC-BY-SA @cyalex.

* * *

|Python Version| |License Type| |Project Stars|

.. |Python Version| image:: http://aigamedev.github.io/scikit-neuralnetwork/badge_python.svg :target: https://www.python.org/

.. |License Type| image:: https://img.shields.io/badge/license-AGPL-blue.svg :target: https://github.com/alexjc/neural-enhance/blob/master/LICENSE

.. |Project Stars| image:: https://img.shields.io/github/stars/alexjc/neural-enhance.svg?style=flat :target: https://github.com/alexjc/neural-enhance/stargazers
