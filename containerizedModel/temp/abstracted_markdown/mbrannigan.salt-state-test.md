# Overview

## Why this exists

As with any programming language, there is a good chance that when editing a salt state, you have made a mistake.

In order to detect these mistakes, the salt engine needs to read your state, and apply it with the grains and pillars appropriate for the minion you are targeting.

Salt makes it very easy to test with an active master (or similar situations such as a masterless setup, or salt-ssh) by putting the state on the master (or similar) and calling the test_state, e.g.:

@abstr_code_section 

This will display the state when it renders. However, the cost of this is longer than what's ideal.

In order to provide a slightly faster unit testing cycle, as well as a pre-commit hook that can be used to prevent unintended errors from getting into git, this script can do much of the same compilation as a salt master and the state.show_sls state (this uses the show_sls state).

## How I'm thinking about this

The primary differences are as follows:

@abstr_number . All configuration is contained within the script and its configuration. @abstr_number . Grain data is not discovered from minions, it's provided in configuration. @abstr_number . Pillar data is provided as a json file rather than data collected by the saltmaster.

For each state that is being tested, a pseudo-run is initiated. It gathers its data from the grain configuration, pillar configuration, and internal values (most of which are default values internal to salt).

Once that data is obtained, the pseudo-run is executed and the state.show_sls function is used to return the data structure that is the result of the state being rendered.

To test a hypothesis, it's important to have an hypothesis in the first place. The results of the pseudo-run are compared with the desired results. Any differences present in the relevent keys cause the run in general to fail (this is to support acting as a git hook, so that a broken state isn't committed).

When the test script is invoked without any flags, only keys that exist in the desired result are compared to the actual result. This makes it easy to get started, because you can start with no expectations and add expecetations as you go along.

However, the "-t" flag can be passed to the script in order to "test all"

# How to get started

Dependencies are in the requirements.txt file.

## Setting up tests for your state files.

The primary function of the unit test confirms whether a salt state can render. After it renders, it can proceed with its second function which is confirming that the output of the state being rendered matches the desired output: does the test work?

## The test directory

This expects a git repo to be setup up for your salt states, as follows:

@abstr_code_section 

### test_salt_state.py

The test script. The name shouldn't be too important.

### The config.json file

The config.json file currently only requires the key "states_dir" and the value "states/" to tell the test script where to find its states relative to the root of the git repo. The "/" at the end of states is important don't forget it. In the example above, this would be :

@abstr_code_section 

### The global grains file

There is a grains.json file in this directory that will be used to simulate a system.

### The state to be tested

Each state should have its own directory. 

#### The per-state test directory and its contents

#### The pillar file

In the `<statename>/test` directory there will be a file called pillar.json. This will be read and used as the pillars for all of the states that are tested in this, the ``` @abstr_code_section $ python test/test_salt_state.py -j states/state @abstr_number /init.sls \

> states/state @abstr_number /test/init.json ```

### Testing more thoroughly

To see the complete set of adds and deletes, not just those that are in the expected results files, you can pass in the `-t` flag to the test
