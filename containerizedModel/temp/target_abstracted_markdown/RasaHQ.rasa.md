# Rasa (formerly Rasa Core + Rasa NLU)

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

Rasa is an open source machine learning framework to automate text-and voice-based conversations. With Rasa, you can build chatbots on: \- Facebook Messenger \- Slack \- Microsoft Bot Framework \- Rocket.Chat \- Mattermost \- Telegram \- Twilio \- Your own custom conversational channels

or voice assistants as: \- Alexa Skills \- Google Home Actions

Rasa's primary purpose is to help you build contextual, layered conversations with lots of back-and-forth. To have a real conversation, you need to have some memory and build on things that were said earlier. Rasa lets you do that in a scalable way.

There's a lot more background information in this @abstr_hyperlink .

* * *

  * **What does Rasa do? 🤔** @abstr_hyperlink 

  * **I'm new to Rasa 😄** @abstr_hyperlink 

  * **I'd like to read the detailed docs 🤓** @abstr_hyperlink 

  * **I'm ready to install Rasa 🚀** @abstr_hyperlink 

  * **I want to learn how to use Rasa 🚀** @abstr_hyperlink 

  * **I have a question ❓** @abstr_hyperlink 

  * **I would like to contribute 🤗** How to Contribute




* * *

## Where to get help

There is extensive documentation in the @abstr_hyperlink . Make sure to select the correct version so you are looking at the docs for the version you installed.

Please use @abstr_hyperlink for quick answers to questions.

### README Contents:

  * How to contribute
  * Development Internals
  * License



### How to contribute

We are very happy to receive and merge your contributions. You can find more information about how to contribute to Rasa (in lots of different ways!) @abstr_hyperlink .

To contribute via pull request, follow these steps:

@abstr_number . Create an issue describing the feature you want to work on (or have a look at the @abstr_hyperlink ) @abstr_number . Write your code, tests and documentation, and format them with `black` @abstr_number . Create a pull request describing your changes

Your pull request will be reviewed by a maintainer, who will get back to you about any necessary changes or questions. You will also be asked to sign a @abstr_hyperlink .

## Development Internals

### Running and changing the documentation

To build & edit the docs, first install all necessary dependencies:

@abstr_code_section 

After the installation has finished, you can run and view the documentation locally using: @abstr_code_section 

Visit the local version of the docs at http://localhost: @abstr_number in your browser. You can now change the docs locally and the web page will automatically reload and apply your changes.

### Running the Tests

In order to run the tests make sure that you have the development requirements installed. @abstr_code_section 

### Steps to release a new version

Releasing a new version is quite simple, as the packages are build and distributed by travis.

_Terminology_ : * patch release (third version part increases): @abstr_number . @abstr_number . @abstr_number -> @abstr_number . @abstr_number . @abstr_number * minor release (second version part increases): @abstr_number . @abstr_number . @abstr_number -> @abstr_number . @abstr_number . @abstr_number * major release (first version part increases): @abstr_number . @abstr_number . @abstr_number -> @abstr_number . @abstr_number . @abstr_number 

_Release steps_ : @abstr_number . Create a new branch and 

  * Update @abstr_hyperlink to reflect the correct version number
  * Edit the @abstr_hyperlink , create a new section for the release (eg by moving the items from the collected master section) and create a new master logging section
  * Edit the @abstr_hyperlink to provide assistance for users updating to the new version @abstr_number . Commit the changes and create a PR against master or the release branch (e.g. `@abstr_number . @abstr_number .x`) @abstr_number . Once your PR is merged, tag a new release (this SHOULD always happen on master or release branches), e.g. using @abstr_code_section travis will build this tag and push a package to @abstr_hyperlink @abstr_number . **If this is a minor release** , a new release branch should be created pointing to the same commit as the tag to allow for future patch releases, e.g. @abstr_code_section 



### Code Style

To ensure a standardized code style we use the formatter @abstr_hyperlink . To ensure our type annotations are correct we use the type checker @abstr_hyperlink . If your code is not formatted properly or doesn't type check, travis will fail to build.

#### Formatting

If you want to automatically format your code on every commit, you can use @abstr_hyperlink . Just install it via `pip install pre-commit` and execute `pre-commit install` in the root folder. This will add a hook to the repository, which reformats files on every commit.

If you want to set it up manually, install black via `pip install black`. To reformat files execute @abstr_code_section 

#### Type Checking

If you want to check types on the codebase, install `pytype` using `pip install pytype`. To check the types execute @abstr_code_section 

## License

Licensed under the Apache License, Version @abstr_number . @abstr_number . Copyright @abstr_number Rasa Technologies GmbH. Copy of the license.

A list of the Licenses of the dependencies of the project can be found at the bottom of the @abstr_hyperlink .
