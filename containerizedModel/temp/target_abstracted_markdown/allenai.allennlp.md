@abstr_image 

@abstr_hyperlink @abstr_hyperlink 

An @abstr_hyperlink NLP research library, built on PyTorch, for developing state-of-the-art deep learning models on a wide variety of linguistic tasks.

## Quick Links

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Contributing Guidelines
  * Model List
  * @abstr_hyperlink 



## Package Overview

**allennlp** |  an open-source NLP research library, built on PyTorch   
---|---  
**allennlp.commands** |  functionality for a CLI and web service   
**allennlp.data** |  a data processing module for loading datasets and encoding strings as integers for representation in matrices   
**allennlp.models** |  a collection of state-of-the-art models   
**allennlp.modules** |  a collection of PyTorch modules for use with text   
**allennlp.nn** |  tensor utility functions, such as initializers and activation functions   
**allennlp.service** |  a web server to that can serve demos for your models   
**allennlp.training** |  functionality for training models   
  
## Installation

AllenNLP requires Python @abstr_number . @abstr_number . @abstr_number or later. The preferred way to install AllenNLP is via `pip`. Just run `pip install allennlp` in your Python environment and you're good to go!

If you need pointers on setting up an appropriate Python environment or would like to install AllenNLP using a different method, see below.

Windows is currently not officially supported, although we try to fix issues when they are easily addressed.

### Installing via pip

#### Setting up a virtual environment

@abstr_hyperlink can be used set up a virtual environment with the version of Python required for AllenNLP. If you already have a Python @abstr_number . @abstr_number or @abstr_number . @abstr_number environment you want to use, you can skip to the 'installing via pip' section.

@abstr_number . @abstr_hyperlink .

@abstr_number . Create a Conda environment with Python @abstr_number . @abstr_number 
    
    
     @abstr_code_section
    

@abstr_number . Activate the Conda environment. You will need to activate the Conda environment in each terminal in which you want to use AllenNLP.
    
    
     @abstr_code_section
    

#### Installing the library and dependencies

Installing the library and dependencies is simple using `pip`.
    
    
    @abstr_code_section
    

That's it! You're now ready to build and train AllenNLP models. AllenNLP installs a script when you install the python package, meaning you can run allennlp commands just by typing `allennlp` into a terminal.

You can now test your installation with `allennlp test-install`.

_`pip` currently installs Pytorch for CUDA @abstr_number only (or no GPU). If you require an older version, please visit http://pytorch.org/ and install the relevant pytorch binary._

### Installing using Docker

Docker provides a virtual machine with everything set up to run AllenNLP-- whether you will leverage a GPU or just run on a CPU. Docker provides more isolation and consistency, and also makes it easy to distribute your environment to a compute cluster.

Once you have @abstr_hyperlink just run the following command to get an environment that will run on either the cpu or gpu.
    
    
    @abstr_code_section
    

You can test the Docker environment with `docker run --rm -v $HOME/.allennlp:/root/.allennlp allennlp/allennlp:v @abstr_number . @abstr_number . @abstr_number test-install`.

### Installing from source

You can also install AllenNLP by cloning our git repository:

@abstr_code_section 

Create a Python @abstr_number . @abstr_number virtual environment, and install AllenNLP in `editable` mode by running:

@abstr_code_section 

This will make `allennlp` available on your system but it will use the sources from the local clone you made of the source repository.

You can test your installation with `allennlp test-install`. The full development environment also requires the JVM and `perl`, which must be installed separately. `./scripts/verify.py` will run the full suite of tests used by our continuous build environment.

## Running AllenNLP

Once you've installed AllenNLP, you can run the command-line interface either with the `allennlp` command (if you installed via `pip`) or `allennlp` (if you installed via source).

@abstr_code_section 

## Docker images

AllenNLP releases Docker images to @abstr_hyperlink for each release. For information on how to run these releases, see Installing using Docker.

### Building a Docker image

For various reasons you may need to create your own AllenNLP Docker image. The same image can be used either with a CPU or a GPU.

First, you need to @abstr_hyperlink . Then run the following command (it will take some time, as it completely builds the environment needed to run AllenNLP.)

@abstr_code_section 

You should now be able to see this image listed by running `docker images allennlp`.

@abstr_code_section 

### Running the Docker image

You can run the image with `docker run --rm -it allennlp/allennlp:latest`. The `--rm` flag cleans up the image on exit and the `-it` flags make the session interactive so you can use the bash shell the Docker image starts.

You can test your installation by running `allennlp test-install`.

## Issues

Everyone is welcome to file issues with either feature requests, bug reports, or general questions. As a small team with our own internal goals, we may ask for contributions if a prompt fix doesn't fit into our roadmap. We allow users a two week window to follow up on questions, after which we will close issues. They can be re-opened if there is further discussion.

## Contributions

The AllenNLP team at AI @abstr_number (@allenai) welcomes contributions from the greater AllenNLP community, and, if you would like to get a change into the library, this is likely the fastest approach. If you would like to contribute a larger feature, we recommend first creating an issue with a proposed design for discussion. This will prevent you from spending significant time on an implementation which has a technical limitation someone could have pointed out early on. Small contributions can be made directly in a pull request.

Pull requests (PRs) must have one approving review and no requested changes before they are merged. As AllenNLP is primarily driven by AI @abstr_number (@allenai) we reserve the right to reject or revert contributions that we don't think are good additions.

## Citing

If you use AllenNLP in your research, please cite @abstr_hyperlink .

@abstr_code_section 

## Team

AllenNLP is an open-source project backed by @abstr_hyperlink . AI @abstr_number is a non-profit institute with the mission to contribute to humanity through high-impact AI research and engineering. To learn more about who specifically contributed to this codebase, see @abstr_hyperlink page.
