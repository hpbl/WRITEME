**Status:** Active (under active development, breaking changes may occur)

@abstr_image @abstr_hyperlink 

# Baselines

OpenAI Baselines is a set of high-quality implementations of reinforcement learning algorithms.

These algorithms will make it easier for the research community to replicate, refine, and identify new ideas, and will create good baselines to build research on top of. Our DQN implementation and its variants are roughly on par with the scores in published papers. We expect they will be used as a base around which new ideas can be added, and as a tool for comparing a new approach against existing ones. 

## Prerequisites

Baselines requires python @abstr_number (>= @abstr_number . @abstr_number ) with the development headers. You'll also need system packages CMake, OpenMPI and zlib. Those can be installed as follows

### Ubuntu

@abstr_code_section 

### Mac OS X

Installation of system packages on Mac requires @abstr_hyperlink . With Homebrew installed, run the following: @abstr_code_section 

## Virtual environment

From the general python package sanity perspective, it is a good idea to use virtual environments (virtualenvs) to make sure packages from different projects do not interfere with each other. You can install virtualenv (which is itself a pip package) via @abstr_code_section Virtualenvs are essentially folders that have copies of python executable and all python packages. To create a virtualenv called venv with python @abstr_number , one runs @abstr_code_section To activate a virtualenv: @abstr_code_section More thorough tutorial on virtualenvs and options can be found @abstr_hyperlink 

## Installation

  * Clone the repo and cd into it: @abstr_code_section 
  * If you don't have TensorFlow installed already, install your favourite flavor of TensorFlow. In most cases, @abstr_code_section or @abstr_code_section should be sufficient. Refer to @abstr_hyperlink for more details. 

  * Install baselines package @abstr_code_section 




### MuJoCo

Some of the baselines examples use @abstr_hyperlink (multi-joint dynamics in contact) physics simulator, which is proprietary and requires binaries and a license (temporary @abstr_number -day license can be obtained from @abstr_hyperlink ). Instructions on setting up MuJoCo can be found @abstr_hyperlink 

## Testing the installation

All unit tests in baselines can be run using pytest runner: @abstr_code_section 

## Training models

Most of the algorithms in baselines repo are used as follows: @abstr_code_section 

### Example @abstr_number . PPO with MuJoCo Humanoid

For instance, to train a fully-connected network controlling MuJoCo humanoid using PPO @abstr_number for @abstr_number M timesteps @abstr_code_section Note that for mujoco environments fully-connected network is default, so we can omit `--network=mlp` The hyperparameters for both network and the learning algorithm can be controlled via the command line, for instance: @abstr_code_section will set entropy coefficient to @abstr_number . @abstr_number , and construct fully connected network with @abstr_number layers with @abstr_number hidden units in each, and create a separate network for value function estimation (so that its parameters are not shared with the policy network, but the structure is the same)

See docstrings in common/models.py for description of network parameters for each type of model, and docstring for baselines/ppo @abstr_number /ppo @abstr_number .py/learn() for the description of the ppo @abstr_number hyperparameters. 

### Example @abstr_number . DQN on Atari

DQN with Atari is at this point a classics of benchmarks. To run the baselines implementation of DQN on Atari Pong: @abstr_code_section 

## Saving, loading and visualizing models

### Saving and loading the model

The algorithms serialization API is not properly unified yet; however, there is a simple method to save / restore trained models. `--save_path` and `--load_path` command-line option loads the tensorflow state from a given path before training, and saves it after the training, respectively. Let's imagine you'd like to train ppo @abstr_number on Atari Pong, save the model and then later visualize what has it learnt. @abstr_code_section This should get to the mean reward per episode about @abstr_number . To load and visualize the model, we'll do the following - load the model, train it for @abstr_number steps, and then visualize: @abstr_code_section 

_NOTE:_ Mujoco environments require normalization to work properly, so we wrap them with VecNormalize wrapper. Currently, to ensure the models are saved with normalization (so that trained models can be restored and run without further training) the normalization coefficients are saved as tensorflow variables. This can decrease the performance somewhat, so if you require high-throughput steps with Mujoco and do not need saving/restoring the models, it may make sense to use numpy normalization instead. To do that, set 'use_tf=False` in baselines/run.py. 

### Logging and vizualizing learning curves and other training metrics

By default, all summary data, including progress, standard output, is saved to a unique directory in a temp folder, specified by a call to Python's @abstr_hyperlink . The directory can be changed with the `--log_path` command-line option. @abstr_code_section _NOTE:_ Please be aware that the logger will overwrite files of the same name in an existing directory, thus it's recommended that folder names be given a unique timestamp to prevent overwritten logs.

Another way the temp directory can be changed is through the use of the `$OPENAI_LOGDIR` environment variable.

For examples on how to load and display the training data, see here.

## Subpackages

  * A @abstr_number C
  * ACER
  * ACKTR
  * DDPG
  * DQN
  * GAIL
  * HER
  * PPO @abstr_number (obsolete version, left here temporarily)
  * PPO @abstr_number 
  * TRPO



## Benchmarks

Results of benchmarks on Mujoco ( @abstr_number M timesteps) and Atari ( @abstr_number M timesteps) are available @abstr_hyperlink and @abstr_hyperlink respectively. Note that these results may be not on the latest version of the code, particular commit hash with which results were obtained is specified on the benchmarks page. 

To cite this repository in publications:
    
    
    @misc{baselines,
      author = {Dhariwal, Prafulla and Hesse, Christopher and Klimov, Oleg and Nichol, Alex and Plappert, Matthias and Radford, Alec and Schulman, John and Sidor, Szymon and Wu, Yuhuai and Zhokhov, Peter},
      title = {OpenAI Baselines},
      year = { @abstr_number },
      publisher = {GitHub},
      journal = {GitHub repository},
      howpublished = {\url{https://github.com/openai/baselines}},
    }
    
