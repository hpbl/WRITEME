# Neural Doodle

.. image:: docs/Workflow.gif

Use a deep neural network to borrow the skills of real artists and turn your two-bit doodles into masterpieces! This project is an implementation of `Semantic Style Transfer <http://arxiv.org/abs/ @abstr_number . @abstr_number >`_ (Champandard, @abstr_number ), based on the `Neural Patches <http://arxiv.org/abs/ @abstr_number . @abstr_number >`_ algorithm (Li, @abstr_number ). Read more about the motivation in this `in-depth article <https://nucl.ai/blog/neural-doodles/>`_ and watch this `workflow video <https://www.youtube.com/watch?v=fu @abstr_number fzx @abstr_number w @abstr_number mI>`_ for inspiration.

The `doodle.py` script generates a new image by using one, two, three or four images as inputs depending what you're trying to do: the original style and its annotation, and a target content image (optional) with its annotation (a.k.a. your doodle). The algorithm extracts annotated patches from the style image, and incrementally transfers them over to the target image based on how closely they match.

**NOTE** : Making a `#NeuralDoodle` is a skill. The parameters in the script were adjusted to work well by default and with the examples below. For new images, you may need to adjust values and modify on your input data too. It takes practice, but you can reach almost photo-realistic results if you iterate! (`Ask for advice here or see examples <https://github.com/alexjc/neural-doodle/issues?q=label% @abstr_number Aadvice>`_.)

@abstr_number . `Examples & Usage <# @abstr_number -examples--usage>`_ @abstr_number . `Installation <# @abstr_number -installation--setup>`_ @abstr_number . `Troubleshooting <# @abstr_number -troubleshooting-problems>`_ @abstr_number . `Frequent Questions <# @abstr_number -frequent-questions>`_

**IMPORTANT** : This project is possible thanks to the `nucl.ai Conference <http://events.nucl.ai/>`_ on Creative AI, **July @abstr_number - @abstr_number _*. Join us in *_ Vienna**!

|Python Version| |License Type| |Project Stars|

* * *

.. image:: docs/Landscape_example.png

#  @abstr_number . Examples & Usage

The main script is called `doodle.py`, which you can run with Python @abstr_number . @abstr_number + (see setup below). The `--device` argument that lets you specify which GPU or CPU to use. For the samples above, here are the performance results:

  * **GPU Rendering** — Assuming you have CUDA setup and enough on-board RAM, the process should complete in @abstr_number to @abstr_number minutes, even with twice the iteration count.
  * **CPU Rendering** — This will take hours and hours, even up to @abstr_number h on older hardware. To match quality it'd take twice the time. Do multiple runs in parallel!



The default is to use `cpu`, if you have NVIDIA card setup with CUDA already try `gpu @abstr_number`. On the CPU, you can also set environment variable to `OMP_NUM_THREADS= @abstr_number`, but we've found the speed improvements to be minimal.

##  @abstr_number .a) Image Analogy

The algorithm is built for style transfer, but can also generate image analogies that we call a `#NeuralDoodle`; use the hashtag if you post your images! Example files are included in the `#/samples/` folder. Execute with these commands:

.. code:: bash
    
    
    # Synthesize a coastline as if painted by Monet. This uses "*_sem.png" masks for both images.
    python @abstr_number  doodle.py --style samples/Monet.jpg --output samples/Coastline.png \
                      --device=cpu --iterations= @abstr_number 
    
    # Generate a scene around a lake in the style of a Renoir painting.
    python @abstr_number  doodle.py --style samples/Renoir.jpg --output samples/Landscape.png \
                      --device=gpu @abstr_number  --iterations= @abstr_number
    

Notice the Renoir results look a little better than the Monet. Some rotational variations of the source image could improve the quality of the arch outline in particular.

##  @abstr_number .b) Style Transfer

If you want to transfer the style given a source style with annotations, and a target content image with annotations, you can use the following command lines. In all cases, the semantic map is loaded and used if it's found under the `*_sem.png` filename that matches the input file.

.. code:: bash
    
    
    # Synthesize a portrait of Seth Johnson like a Gogh portrait. This uses "*_sem.png" masks for both images.
    python @abstr_number  doodle.py --style samples/Gogh.jpg --content samples/Seth.png \
                      --output SethAsGogh.png --device=cpu --phases= @abstr_number  --iterations= @abstr_number 
    
    # Generate what a photo of Vincent van Gogh would look like, using Seth's portrait as reference.
    python @abstr_number  doodle.py --style samples/Seth.jpg --content samples/Gogh.png \
                      --output GoghAsSeth.png --device=gpu @abstr_number  --phases= @abstr_number  --iterations= @abstr_number
    

To perform regular style transfer without semantic annotations, simply delete or rename the files with the semantic maps. The photo is originally by `Seth Johnson <http://sethjohnson.tumblr.com/post/ @abstr_number /this-was-a-project-for-an-art-history-class-turns>`_, and the concept for this style transfer by `Kyle McDonald <https://twitter.com/kcimc>`_.

.. image:: docs/Portraits_example.jpg

##  @abstr_number .c) Texture Synthesis

For synthesizing bitmap textures, you only need an input style without anotations and without target output. In this case, you simply specify one input style image and the output file as follows:

.. code:: bash
    
    
    # First synthesis uses a darker noise pattern as seed.
    python @abstr_number  doodle.py --style samples/Wall.jpg --output Wall.png\
                      --seed=noise --seed-range= @abstr_number : @abstr_number  --iterations= @abstr_number  --phases= @abstr_number 
    
    # Second synthesis uses a lighter noise pattern as seed.
    python @abstr_number  doodle.py --style samples/Wall.jpg --output Wall.png\
                      --seed=noise --seed-range= @abstr_number : @abstr_number  --iterations= @abstr_number  --phases= @abstr_number
    

You can also control the output resolution using `--output-size= @abstr_number x @abstr_number` parameter—which also depends on the memory you have available. By default the size will be the same as the style image.

.. image:: docs/Textures_example.jpg

##  @abstr_number .d) Script Parameters

You can configure the algorithm using the following parameters. Type `python @abstr_number doodle.py --help` for the full list of options, or see the source code.

  * `--style-weight= @abstr_number . @abstr_number` — Weight of style relative to content.
  * `--style-layers= @abstr_number _ @abstr_number , @abstr_number _ @abstr_number` — The layers to match style patches.
  * `--semantic-weight= @abstr_number . @abstr_number` — Global weight of semantics vs. features.
  * `--smoothness= @abstr_number . @abstr_number` — Weight of image smoothing scheme.
  * `--seed=noise` — Seed image path, "noise" or "content".
  * `--print-every= @abstr_number` — How often to log statistics to stdout.
  * `--save-every= @abstr_number` — How frequently to save PNG into `frames`.



#  @abstr_number . Installation & Setup

.. image:: docs/DockerConsole.gif

##  @abstr_number .a) Using Docker Image (recommended)

The easiest way to get up-and-running is to `install Docker <https://www.docker.com/>`_. Then, you should be able to downloand and run the pre-built image using the `docker` command line tool. Find out more about the `alexjc/neural-doodle` image on its `Docker Hub <https://hub.docker.com/r/alexjc/neural-doodle/>`_ page.

The easiest way to run the script from the docker image is to setup an easy access command called `doodle`. This will automatically:

  * Mount the `frames` folder from current directory into the instance for visualization.
  * Expose the `samples` folder from the current directory so the script can access files!



This is how you can do it in your terminal console on OSX or Linux:

.. code:: bash
    
    
    # Setup the alias. Put this in your .bash_rc or .zshrc file so it's available at startup.
    alias doodle="docker run -v $(pwd)/samples:/nd/samples -v $(pwd)/frames:/nd/frames \
                             -it alexjc/neural-doodle"
    
    # Now run any of the examples above using this alias, without the `.py` extension.
    doodle --help
    

If you want to run on your NVIDIA GPU, you can instead use the image `alexjc/neural-doodle:gpu` which comes with CUDA and CUDNN pre-installed in the image. See the scripts in `docker/*.sh` for how to setup your host machine. (advanced)

##  @abstr_number .b) Manual Installation (optional)

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
    

After this, you should have `scikit-image`, `theano` and `lasagne` installed in your virtual environment. You'll also need to download this `pre-trained neural network <https://github.com/alexjc/neural-doodle/releases/download/v @abstr_number . @abstr_number /vgg @abstr_number _conv.pkl.bz @abstr_number >`_ (VGG @abstr_number , @abstr_number Mb) and put it in the same folder as the script to run. Once you're done you can just delete the `#/pyvenv/` folder.

.. image:: docs/Coastline_example.png

#  @abstr_number . Troubleshooting Problems

## It's running out of GPU Ram, throwing `MemoryError`. Help!

You'll need a good NVIDIA card with CUDA to run this software on GPU, ideally @abstr_number Gb / @abstr_number Gb or better still, @abstr_number Gb to @abstr_number Gb for larger resolutions. The code does work on CPU by default, so use that as fallback since you likely have more system RAM!

To improve memory consumption, you can also install NVIDIA's `cudnn` library version @abstr_number . @abstr_number or @abstr_number . @abstr_number . This allows convolutional neural networks to run faster and save space in GPU RAM.

**FIX:** Use `--device=cpu` to use main system memory.

## How much GPU is being used? It doesn't seem very fast...

First make sure CUDA is installed correctly and environment variables are set, then reinstall `theano`. If everything is setup correctly, the GPU should be used regularly as the gradient calculations are offloaded. If you run NVIDIA's monitoring tool it looks something like this:

.. code:: bash # gpu pwr temp sm mem enc dec mclk pclk # Idx W C % % % % MHz MHz @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number 

The third column is the utilitazition of compute resources, and the fourth column is the use of memory. If memory is under-used you can increase resolution! If compute is under allocated too you can try running multiple scripts in parallel!

**FIX:** Run `nvidia-smi dmon` and check the `sm` column.

## Can't install or Unable to find pgen, not compiling formal grammar.

There's a Python extension compiler called Cython, and it's missing or inproperly installed. Try getting it directly from the system package manager rather than PIP.

_FIX:_ `sudo apt-get install cython @abstr_number`

## NotImplementedError: AbstractConv @abstr_number d theano optimization failed.

This happens when you're running without a GPU, and the CPU libraries were not found (e.g. `libblas`). The neural network expressions cannot be evaluated by Theano and it's raising an exception.

**FIX:** `sudo apt-get install libblas-dev libopenblas-dev`

## TypeError: max_pool_ @abstr_number d() got an unexpected keyword argument 'mode'

You need to install Lasagne and Theano directly from the versions specified in `requirements.txt`, rather than from the PIP versions. These alternatives are older and don't have the required features.

**FIX:** `python @abstr_number -m pip install -r requirements.txt`

## ValueError: unknown locale: UTF- @abstr_number 

It seems your terminal is misconfigured and not compatible with the way Python treats locales. You may need to change this in your `.bash_rc` or other startup script. Alternatively, this command will fix it once for this shell instance.

**FIX:** `export LC_ALL=en_US.UTF- @abstr_number`

## ERROR: The optimization diverged and NaNs were encountered.

It's possible there's a platform bug in the underlying libraries or compiler, which has been reported on MacOS El Capitan. It's not clear how to fix it, but you can try to disable optimizations to prevent the bug. (See `Issue # @abstr_number <https://github.com/alexjc/neural-doodle/issues/ @abstr_number >`_.)

**FIX:** Use `--safe-mode` flag to disable optimizations.

#  @abstr_number . Frequent Questions

## Q: When will this be possible in realtime? I want it as filter!

Related algorithms have shown this is possible in realtime—if you're willing to accept slightly lower quality:

  * `Texture Networks: Feed-forward Synthesis of Textures and Stylized Images <http://arxiv.org/abs/ @abstr_number . @abstr_number >`_
  * `Perceptual Losses for Real-Time Style Transfer and Super-Resolution <http://arxiv.org/abs/ @abstr_number . @abstr_number >`_
  * `Precomputed Real-Time Texture Synthesis with Markovian Generative Adversarial Networks <http://arxiv.org/abs/ @abstr_number . @abstr_number >`_



This project is not designed for real-time use, the focus is on quality. The code in this repository is ideal for training realtime capable networks. 

## Q: Is there an application for this? I want to download it!

There are many online services that provide basic style transfer with neural networks. We run `@DeepForger <https://deepforger.com/>`_, a Twitter & Facebook bot with web interface, that can take your requests too. It takes time to make forgeries, so there's a queue... be patient!

* * *

|Python Version| |License Type| |Project Stars|

.. |Python Version| image:: http://aigamedev.github.io/scikit-neuralnetwork/badge_python.svg :target: https://www.python.org/

.. |License Type| image:: https://img.shields.io/badge/license-AGPL-blue.svg :target: https://github.com/alexjc/neural-doodle/blob/master/LICENSE

.. |Project Stars| image:: https://img.shields.io/github/stars/alexjc/neural-doodle.svg?style=flat :target: https://github.com/alexjc/neural-doodle/stargazers
