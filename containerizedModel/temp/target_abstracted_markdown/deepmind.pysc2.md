@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

# PySC @abstr_number - StarCraft II Learning Environment

@abstr_hyperlink is @abstr_hyperlink 's Python component of the StarCraft II Learning Environment (SC @abstr_number LE). It exposes @abstr_hyperlink 's @abstr_hyperlink as a Python RL Environment. This is a collaboration between DeepMind and Blizzard to develop StarCraft II into a rich environment for RL research. PySC @abstr_number provides an interface for RL agents to interact with StarCraft @abstr_number , getting observations and sending actions.

We have published an accompanying @abstr_hyperlink and @abstr_hyperlink , which outlines our motivation for using StarCraft II for DeepRL research, and some initial research results using the environment.

## About

Disclaimer: This is not an official Google product.

If you use the StarCraft II Machine Learning API and/or PySC @abstr_number in your research, please cite the @abstr_hyperlink 

You can reach us at @abstr_hyperlink .

# Quick Start Guide

## Get PySC @abstr_number

### PyPI

The easiest way to get PySC @abstr_number is to use pip:

@abstr_code_section 

That will install the `pysc @abstr_number` package along with all the required dependencies. @abstr_hyperlink can help manage your dependencies. You may also need to upgrade pip: `pip install --upgrade pip` for the `pysc @abstr_number` install to work. If you're running on an older system you may need to install `libsdl` libraries for the `pygame` dependency.

Pip will install a few of the binaries to your bin directory. `pysc @abstr_number _play` can be used as a shortcut to `python -m pysc @abstr_number .bin.play`.

### Git

Alternatively you can install PySC @abstr_number with git. First clone the PySC @abstr_number repo, then install the dependencies and `pysc @abstr_number` package:

@abstr_code_section 

## Get StarCraft II

PySC @abstr_number depends on the full StarCraft II game and only works with versions that include the API, which is @abstr_number . @abstr_number . @abstr_number and above.

### Linux

Follow Blizzard's @abstr_hyperlink to get the linux version. By default, PySC @abstr_number expects the game to live in `~/StarCraftII/`. You can override this path by setting the `SC @abstr_number PATH` environment variable or creating your own run_config.

### Windows/MacOS

Install of the game as normal from @abstr_hyperlink . Even the @abstr_hyperlink will work. If you used the default install location PySC @abstr_number should find the latest binary. If you changed the install location, you might need to set the `SC @abstr_number PATH` environment variable with the correct location.

PySC @abstr_number should work on MacOS and Windows systems running Python @abstr_number . @abstr_number + or @abstr_number . @abstr_number +, but has only been thoroughly tested on Linux. We welcome suggestions and patches for better compatibility with other systems.

## Get the maps

PySC @abstr_number has many maps pre-configured, but they need to be downloaded into the SC @abstr_number `Maps` directory before they can be played.

Download the @abstr_hyperlink and the @abstr_hyperlink and extract them to your `StarcraftII/Maps/` directory.

## Run an agent

You can run an agent to test the environment. The UI shows you the actions of the agent and is helpful for debugging and visualization purposes.

@abstr_code_section 

It runs a random agent by default, but you can specify others if you'd like, including your own.

@abstr_code_section 

You can also run two agents against each other.

@abstr_code_section 

To specify the agent's race, the opponent's difficulty, and more, you can pass additional flags. Run with `--help` to see what you can change.

## Play the game as a human

There is a human agent interface which is mainly used for debugging, but it can also be used to play the game. The UI is fairly simple and incomplete, but it's enough to understand the basics of the game. Also, it runs on Linux.

@abstr_code_section 

In the UI, hit `?` for a list of the hotkeys. The most basic ones are: `F @abstr_number` to quit, `F @abstr_number` to restart, `F @abstr_number` to save a replay, and `Pgup`/`Pgdn` to control the speed of the game. Otherwise use the mouse for selection and keyboard for commands listed on the left.

The left side is a basic rendering. The right side is the feature layers that the agent receives, with some coloring to make it more useful to us. You can enable or disable RGB or feature layer rendering and their resolutions with command-line flags.

## Watch a replay

Running an agent and playing as a human save a replay by default. You can watch that replay by running:

@abstr_code_section 

This works for any replay as long as the map can be found by the game.

The same controls work as for playing the game, so `F @abstr_number` to exit, `pgup`/`pgdn` to control the speed, etc.

You can save a video of the replay with the `--video` flag.

## List the maps

Maps need to be configured before they're known to the environment. You can see the list of known maps by running:

@abstr_code_section 

## Run the tests

If you want to submit a pull request, please make sure the tests pass on both python @abstr_number and @abstr_number .

@abstr_code_section 

# Environment Details

For a full description of the specifics of how the environment is configured, the observations and action spaces work read the environment documentation.

# Mini-game maps

The mini-game map files referenced in the paper are stored under `pysc @abstr_number /maps/` but must be installed in `$SC @abstr_number PATH/Maps`. Make sure to follow the download instructions above.

Maps are configured in the Python files in `pysc @abstr_number /maps/`. The configs can set player and time limits, whether to use the game outcome or curriculum score, and a handful of other things. For more information about the maps, and how to configure your own, read the maps documentation.

# Replays

A replay lets you review what happened during a game. You can see the actions and observations that each player made as they played.

Blizzard is releasing a large number of anonymized @abstr_number v @abstr_number replays played on the ladder. You can find instructions for how to get the @abstr_hyperlink on their site. You can also review your own replays.

Replays can be played back to get the observations and actions made during that game. The observations are rendered at the resolution you request, so may differ from what the human actually saw. Similarly the actions specify a point, which could reflect a different pixel on the human's screen, so may not have an exact match in our observations, though they should be fairly similar.

Replays are version dependent, so a @abstr_number . @abstr_number replay will fail in a @abstr_number . @abstr_number . @abstr_number or @abstr_number . @abstr_number binary.

You can visualize the replays with the full game, or with `pysc @abstr_number .bin.play`. Alternatively you can run `pysc @abstr_number .bin.replay_actions` to process many replays in parallel.
