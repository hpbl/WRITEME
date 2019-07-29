.. footer::
    
    
    Copyright |copy|  @abstr_number -present, Facebook, Inc. |---|
    all rights reserved.
    

.. |copy| unicode:: @abstr_number xA @abstr_number .. |---| unicode:: U+ @abstr_number 

===

# ELF

ELF is an Extensive, Lightweight, and Flexible platform for game research. We have used it to build our Go playing bot, `ELF OpenGo`__, which achieved a @abstr_number - @abstr_number record versus four global top- @abstr_number players in April @abstr_number . The final score is @abstr_number - @abstr_number (each professional Go player plays @abstr_number games).

__ https://ai.facebook.com/blog/open-sourcing-new-elf-opengo-bot-and-go-research/

Please refer to `our website`__ for a full overview of ELF OpenGo-related resources, including pretrained models, numerous datasets, and a comprehensive visualization of human Go games throughout history leveraging ELF OpenGo's analysis capabilities.

__ https://facebook.ai/developers/tools/elf-opengo

This version is a successor to the `original ELF platform`__.

__ https://github.com/facebookresearch/ELF

**DISCLAIMER** : this code is early research code. What this means is:

  * It may not work reliably (or at all) on your system.
  * The code quality and documentation are quite lacking, and much of the code might still feel "in-progress".
  * There are quite a few hacks made specifically for our systems and infrastructure.



|build|

.. |build| image:: https://circleci.com/gh/pytorch/ELF.png?style=shield

# License

ELF is released under the BSD-style licence found in the `LICENSE` file.

# Citing ELF

If you use ELF in your research, please consider citing the original NIPS paper as follows::
    
    
    @inproceedings{tian @abstr_number elf,
      author = {Yuandong Tian and Qucheng Gong and Wenling Shang and Yuxin Wu and C. Lawrence Zitnick},
      title = {ELF: An extensive, lightweight and flexible research platform for real-time strategy games},
      booktitle = {Advances in Neural Information Processing Systems},
      pages = { @abstr_number -- @abstr_number },
      year = { @abstr_number }
    }
    

If you use ELF OpenGo or OpenGo-like functionality, please consider citing the technical report as follows::
    
    
    @inproceedings{tian @abstr_number opengo,
      author    = {Yuandong Tian and
                   Jerry Ma and
                   Qucheng Gong and
                   Shubho Sengupta and
                   Zhuoyuan Chen and
                   James Pinkerton and
                   Larry Zitnick},
      title     = {{ELF} OpenGo: an analysis and open reimplementation of AlphaZero},
      booktitle = {Proceedings of the  @abstr_number th International Conference on Machine Learning,
                   {ICML}  @abstr_number ,  @abstr_number - @abstr_number  June  @abstr_number , Long Beach, California, {USA}},
      pages     = { @abstr_number -- @abstr_number },
      year      = { @abstr_number },
      url       = {http://proceedings.mlr.press/v @abstr_number /tian @abstr_number a.html}
    }
    

* Jerry Ma, Qucheng Gong, and Shubho Sengupta contributed equally.

** We also thank Yuxin Wu for his help on this project.

# Dependencies

We run ELF using:

  * Ubuntu _* @abstr_number . @abstr_number *_
  * Python _* @abstr_number . @abstr_number *_
  * GCC _* @abstr_number . @abstr_number *_
  * CUDA _* @abstr_number . @abstr_number *_
  * CUDNN _* @abstr_number . @abstr_number *_
  * NCCL _* @abstr_number . @abstr_number . @abstr_number *_



At the moment, this is the only supported environment. Other environments may also work, but we unfortunately do not have the manpower to investigate compatibility issues.

Here are the dependency installation commands for Ubuntu @abstr_number . @abstr_number and conda::
    
    
    sudo apt-get install cmake g++ gcc libboost-all-dev libzmq @abstr_number -dev
    conda install numpy zeromq pyzmq
    
    # From the project root
    git submodule sync && git submodule update --init --recursive
    

You also need to install PyTorch @abstr_number . @abstr_number . @abstr_number or later::
    
    
    conda install pytorch torchvision cudatoolkit= @abstr_number . @abstr_number  -c pytorch
    

A Dockerfile has been provided if you wish to build ELF using Docker.

# Building

`cd` to the project root and run `make` to build.

# Testing

After building, `cd` to the project root and run `make test` to test.

# Using ELF

Currently, ELF must be run straight from source. You'll need to run `source scripts/devmode_set_pythonpath.sh` to augment `$PYTHONPATH` appropriately.

## Training a Go bot

To train a model, please follow these steps:

@abstr_number ) Build ELF and run `source scripts/devmode_set_pythonpath.sh` as described above.

@abstr_number ) Change directory to `scripts/elfgames/go/`

@abstr_number ) Edit `server_addrs.py` to specify the server's IP address. This is the machine that will train the neural network.

@abstr_number ) Create the directory where the server will write the model directory. This defaults to `myserver`

@abstr_number ) Run `start_server.sh` to start the server. We have tested this on a machine with @abstr_number GPUs.

@abstr_number ) Run `start_client.sh` to start the clients. The clients should be able to read the model written by the server, so the clients and the server need to mount the same directory via NFS. We have tested this on @abstr_number clients, each running exclusively on one GPU.

## Running a Go bot

Here is a basic set of commands to run and play the bot via the GTP protocol:

@abstr_number ) Build ELF and run `source scripts/devmode_set_pythonpath.sh` as described above.

@abstr_number ) Train a model, or grab a `pretrained model`_.

@abstr_number ) Change directory to `scripts/elfgames/go/`

@abstr_number ) Run `./gtp.sh path/to/modelfile.bin --verbose --gpu @abstr_number --num_block @abstr_number --dim @abstr_number --mcts_puct @abstr_number . @abstr_number --batchsize @abstr_number --mcts_rollout_per_batch @abstr_number --mcts_threads @abstr_number --mcts_rollout_per_thread @abstr_number --resign_thres @abstr_number . @abstr_number --mcts_virtual_loss @abstr_number`

We've found that the above settings work well for playing the bot. You may change `mcts_rollout_per_thread` to tune the thinking time per move.

After the environment is set up and the model is loaded, you can start to type gtp commands to get the response from the engine.

## Analysis mode

Here is the command to analyze an existing sgf file:

@abstr_number ) Build ELF and run `source scripts/devmode_set_pythonpath.sh` as described above.

@abstr_number ) Train a model, or grab a `pretrained model`_.

@abstr_number ) Change directory to `scripts/elfgames/go/`

@abstr_number ) Run `./analysis.sh /path/to/model --preload_sgf /path/to/sgf --preload_sgf_move_to [move_number] --dump_record_prefix [tree] --verbose --gpu @abstr_number --mcts_puct @abstr_number . @abstr_number --batchsize @abstr_number --mcts_rollout_per_batch @abstr_number --mcts_threads @abstr_number --mcts_rollout_per_thread @abstr_number --resign_thres @abstr_number . @abstr_number --mcts_virtual_loss @abstr_number --num_games @abstr_number`

The settings for rollouts are similar as above. The process should run automatically after loading the environment, models and previous moves. You should see the move suggested by the AI after each move, along with its value and prior. This process will also generate a lot of tree files, prefixed with `tree` (you can change it with `--dump_record_prefix` option above.) The tree files will contain the full search at each move along with its prior and value. To abort the process simply kill it as the current implementation will run it to the end of the game.

.. _pretrained model: https://dl.fbaipublicfiles.com/elfopengo/pretrained_models/pretrained-go- @abstr_number x @abstr_number -v @abstr_number .bin

# Ladder tests

We provide a collection of just over @abstr_number ladder scenarios in the `ladder_suite/` directory.
