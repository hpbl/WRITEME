**Status:** Maintenance (expect bug fixes and minor updates)

OpenAI Gym

* * *

**OpenAI Gym is a toolkit for developing and comparing reinforcement learning algorithms.** This is the `gym` open-source library, which gives you access to a standardized set of environments.

.. image:: https://travis-ci.org/openai/gym.svg?branch=master :target: https://travis-ci.org/openai/gym

`See What's New section below <#what-s-new>`_

`gym` makes no assumptions about the structure of your agent, and is compatible with any numerical computation library, such as TensorFlow or Theano. You can use it from Python code, and soon from other languages.

If you're not sure where to start, we recommend beginning with the `docs <https://gym.openai.com/docs>`_ on our site. See also the `FAQ <https://github.com/openai/gym/wiki/FAQ>`_.

A whitepaper for OpenAI Gym is available at http://arxiv.org/abs/ @abstr_number . @abstr_number , and here's a BibTeX entry that you can use to cite it in a publication::

@misc{ @abstr_number . @abstr_number , Author = {Greg Brockman and Vicki Cheung and Ludwig Pettersson and Jonas Schneider and John Schulman and Jie Tang and Wojciech Zaremba}, Title = {OpenAI Gym}, Year = { @abstr_number }, Eprint = {arXiv: @abstr_number . @abstr_number }, }

.. contents:: **Contents of this document** :depth: @abstr_number 

# Basics

There are two basic concepts in reinforcement learning: the environment (namely, the outside world) and the agent (namely, the algorithm you are writing). The agent sends `actions` to the environment, and the environment replies with `observations` and `rewards` (that is, a score).

The core `gym` interface is `Env <https://github.com/openai/gym/blob/master/gym/core.py>`_, which is the unified environment interface. There is no interface for agents; that part is left to you. The following are the `Env` methods you should know:

  * `reset(self)`: Reset the environment's state. Returns `observation`.
  * `step(self, action)`: Step the environment by one timestep. Returns `observation`, `reward`, `done`, `info`.
  * `render(self, mode='human')`: Render one frame of the environment. The default mode will do something human friendly, such as pop up a window. 

# Installation




You can perform a minimal install of `gym` with:

.. code:: shell
    
    
    git clone https://github.com/openai/gym.git
    cd gym
    pip install -e .
    

If you prefer, you can do a minimal install of the packaged version directly from PyPI:

.. code:: shell
    
    
    pip install gym
    

You'll be able to run a few environments right away:

  * algorithmic
  * toy_text
  * classic_control (you'll need `pyglet` to render though)



We recommend playing with those environments at first, and then later installing the dependencies for the remaining environments.

## Installing everything

To install the full set of environments, you'll need to have some system packages installed. We'll build out the list here over time; please let us know what you end up installing on your platform. Also, take a look at the docker files (test.dockerfile.xx.xx) to see the composition of our CI-tested images. 

On OSX:

.. code:: shell
    
    
    brew install cmake boost boost-python sdl @abstr_number  swig wget
    

On Ubuntu @abstr_number . @abstr_number (non-mujoco only):

.. code:: shell
    
    
    apt-get install libjpeg-dev cmake swig python-pyglet python @abstr_number -opengl libboost-all-dev \
            libsdl @abstr_number - @abstr_number . @abstr_number . @abstr_number  libsdl @abstr_number -dev libglu @abstr_number -mesa libglu @abstr_number -mesa-dev libgles @abstr_number -mesa-dev \
            freeglut @abstr_number  xvfb libav-tools
    

On Ubuntu @abstr_number . @abstr_number :

.. code:: shell
    
    
    apt-get install -y python-pyglet python @abstr_number -opengl zlib @abstr_number g-dev libjpeg-dev patchelf \
            cmake swig libboost-all-dev libsdl @abstr_number -dev libosmesa @abstr_number -dev xvfb ffmpeg
    

On Ubuntu @abstr_number . @abstr_number :

.. code:: shell
    
    
    apt install -y python @abstr_number -dev zlib @abstr_number g-dev libjpeg-dev cmake swig python-pyglet python @abstr_number -opengl libboost-all-dev libsdl @abstr_number -dev \
        libosmesa @abstr_number -dev patchelf ffmpeg xvfb
    

MuJoCo has a proprietary dependency we can't set up for you. Follow the `instructions <https://github.com/openai/mujoco-py#obtaining-the-binaries-and-license-key>`_ in the `mujoco-py` package for help.

Once you're ready to install everything, run `pip install -e '.[all]'` (or `pip install 'gym[all]'`).

## Supported systems

We currently support Linux and OS X running Python @abstr_number . @abstr_number or @abstr_number . @abstr_number . Some users on OSX + Python @abstr_number may need to run

.. code:: shell
    
    
    brew install boost-python --with-python @abstr_number
    

If you want to access Gym from languages other than python, we have limited support for non-python frameworks, such as lua/Torch, using the OpenAI Gym `HTTP API <https://github.com/openai/gym-http-api>`_.

## Pip version

To run `pip install -e '.[all]'`, you'll need a semi-recent pip. Please make sure your pip is at least at version `@abstr_number . @abstr_number . @abstr_number`. You can upgrade using the following: `pip install --ignore-installed pip`. Alternatively, you can open `setup.py <https://github.com/openai/gym/blob/master/setup.py>`_ and install the dependencies by hand.

## Rendering on a server

If you're trying to render video on a server, you'll need to connect a fake display. The easiest way to do this is by running under `xvfb-run` (on Ubuntu, install the `xvfb` package):

.. code:: shell
    
    
     xvfb-run -s "-screen  @abstr_number   @abstr_number x @abstr_number x @abstr_number " bash
    

## Installing dependencies for specific environments

If you'd like to install the dependencies for only specific environments, see `setup.py <https://github.com/openai/gym/blob/master/setup.py>`_. We maintain the lists of dependencies on a per-environment group basis.

# Environments

See `List of Environments <docs/environments.md>`_.

For information on creating your own environments, see `Creating your own Environments <docs/creating-environments.md>`_.

# Examples

See the `examples` directory.

  * Run `examples/agents/random_agent.py <https://github.com/openai/gym/blob/master/examples/agents/random_agent.py>`_ to run a simple random agent.
  * Run `examples/agents/cem.py <https://github.com/openai/gym/blob/master/examples/agents/cem.py>`_ to run an actual learning agent (using the cross-entropy method).
  * Run `examples/scripts/list_envs <https://github.com/openai/gym/blob/master/examples/scripts/list_envs>`_ to generate a list of all environments.



# Testing

We are using `pytest <http://doc.pytest.org>`_ for tests. You can run them via:

.. code:: shell
    
    
    pytest
    

.. _See What's New section below:

# What's new

  * @abstr_number - @abstr_number - @abstr_number (v @abstr_number . @abstr_number . @abstr_number )

    * Upgrade to ALE @abstr_number . @abstr_number (atari-py @abstr_number . @abstr_number . @abstr_number ) (thanks @JesseFarebro!)
  * @abstr_number - @abstr_number - @abstr_number (v @abstr_number . @abstr_number . @abstr_number )

    * Added vectorized environments (thanks @tristandeleu!). Vectorized environment runs multiple copies of an environment in parallel. To create a vectorized version of an environment, use `gym.vector.make(env_id, num_envs, **kwargs)`, for instance, `gym.vector.make('Pong-v @abstr_number ', @abstr_number )`.
  * @abstr_number - @abstr_number - @abstr_number (v @abstr_number . @abstr_number . @abstr_number )

    * fixed Fetch-slide environment to be solvable.
  * @abstr_number - @abstr_number - @abstr_number (v @abstr_number . @abstr_number . @abstr_number )

    * remove pyopengl dependency and use more narrow atari-py and box @abstr_number d-py versions
  * @abstr_number - @abstr_number - @abstr_number (v @abstr_number . @abstr_number . @abstr_number )

    * rgb rendering in MuJoCo locomotion `-v @abstr_number` environments now comes from tracking camera (so that agent does not run away from the field of view). The old behaviour can be restored by passing rgb_rendering_tracking=False kwarg. Also, a potentially breaking change!!! Wrapper class now forwards methods and attributes to wrapped env.
  * @abstr_number - @abstr_number - @abstr_number (v @abstr_number . @abstr_number . @abstr_number )

    * release mujoco environments v @abstr_number with support for gym.make kwargs such as `xml_file`, `ctrl_cost_weight`, `reset_noise_scale` etc
  * @abstr_number - @abstr_number - @abstr_number (v @abstr_number . @abstr_number . @abstr_number )

    * remove gym.spaces.np_random common PRNG; use per-instance PRNG instead.
    * support for kwargs in gym.make
    * lots of bugfixes
  * @abstr_number - @abstr_number - @abstr_number : Release of a set of new robotics environments.

  * @abstr_number - @abstr_number - @abstr_number : Made some aesthetic improvements and removed unmaintained parts of gym. This may seem like a downgrade in functionality, but it is actually a long-needed cleanup in preparation for some great new things that will be released in the next month.

    * Now your `Env` and `Wrapper` subclasses should define `step`, `reset`, `render`, `close`, `seed` rather than underscored method names.
    * Removed the `board_game`, `debugging`, `safety`, `parameter_tuning` environments since they're not being maintained by us at OpenAI. We encourage authors and users to create new repositories for these environments.
    * Changed `MultiDiscrete` action space to range from `[ @abstr_number , ..., n- @abstr_number ]` rather than `[a, ..., b- @abstr_number ]`.
    * No more `render(close=True)`, use env-specific methods to close the rendering.
    * Removed `scoreboard` directory, since site doesn't exist anymore.
    * Moved `gym/monitoring` to `gym/wrappers/monitoring`
    * Add `dtype` to `Space`.
    * Not using python's built-in module anymore, using `gym.logger`
  * @abstr_number - @abstr_number - @abstr_number : All continuous control environments now use mujoco_py >= @abstr_number . @abstr_number . Versions have been updated accordingly to -v @abstr_number , e.g. HalfCheetah-v @abstr_number . Performance should be similar (see https://github.com/openai/gym/pull/ @abstr_number ) but there are likely some differences due to changes in MuJoCo.

  * @abstr_number - @abstr_number - @abstr_number : Make env.spec into a property to fix a bug that occurs when you try to print out an unregistered Env.
  * @abstr_number - @abstr_number - @abstr_number : BACKWARDS INCOMPATIBILITY: The Atari environments are now at *v @abstr_number *. To keep using the old v @abstr_number environments, keep gym <= @abstr_number . @abstr_number . @abstr_number and atari-py <= @abstr_number . @abstr_number . @abstr_number . Note that the v @abstr_number environments will not give identical results to existing v @abstr_number results, although differences are minor. The v @abstr_number environments incorporate the latest Arcade Learning Environment (ALE), including several ROM fixes, and now handle loading and saving of the emulator state. While seeds still ensure determinism, the effect of any given seed is not preserved across this upgrade because the random number generator in ALE has changed. The `*NoFrameSkip-v @abstr_number` environments should be considered the canonical Atari environments from now on.
  * @abstr_number - @abstr_number - @abstr_number : BACKWARDS INCOMPATIBILITY: The `configure` method has been removed from `Env`. `configure` was not used by `gym`, but was used by some dependent libraries including `universe`. These libraries will migrate away from the configure method by using wrappers instead. This change is on master and will be released with @abstr_number . @abstr_number . @abstr_number .
  * @abstr_number - @abstr_number - @abstr_number : BACKWARDS INCOMPATIBILITY: The gym monitor is now a wrapper. Rather than starting monitoring as `env.monitor.start(directory)`, envs are now wrapped as follows: `env = wrappers.Monitor(env, directory)`. This change is on master and will be released with @abstr_number . @abstr_number . @abstr_number .
  * @abstr_number - @abstr_number - @abstr_number : Several experimental changes to how a running monitor interacts with environments. The monitor will now raise an error if reset() is called when the env has not returned done=True. The monitor will only record complete episodes where done=True. Finally, the monitor no longer calls seed() on the underlying env, nor does it record or upload seed information.
  * @abstr_number - @abstr_number - @abstr_number : We're experimentally expanding the environment ID format to include an optional username.
  * @abstr_number - @abstr_number - @abstr_number : Switch the Gym automated logger setup to configure the root logger rather than just the 'gym' logger.
  * @abstr_number - @abstr_number - @abstr_number : Calling `close` on an env will also close the monitor and any rendering windows.
  * @abstr_number - @abstr_number - @abstr_number : The monitor will no longer write manifest files in real-time, unless `write_upon_reset=True` is passed.
  * @abstr_number - @abstr_number - @abstr_number : For controlled reproducibility, envs now support seeding (cf # @abstr_number and # @abstr_number ). The monitor records which seeds are used. We will soon add seed information to the display on the scoreboard.


