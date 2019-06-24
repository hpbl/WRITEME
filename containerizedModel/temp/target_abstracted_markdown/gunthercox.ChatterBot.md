@abstr_image 

# ChatterBot

ChatterBot is a machine-learning based conversational dialog engine build in Python which makes it possible to generate responses based on collections of known conversations. The language independent design of ChatterBot allows it to be trained to speak any language.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

An example of typical input would be something like this:

> **user:** Good morning! How are you doing?   
>  **bot:** I am doing very well, thank you for asking.   
>  **user:** You're welcome.   
>  **bot:** Do you like hats? 

## How it works

An untrained instance of ChatterBot starts off with no knowledge of how to communicate. Each time a user enters a statement, the library saves the text that they entered and the text that the statement was in response to. As ChatterBot receives more input the number of responses that it can reply and the accuracy of each response in relation to the input statement increase. The program selects the closest matching response by searching for the closest matching known statement that matches the input, it then returns the most likely response to that statement based on how frequently each response is issued by the people the bot communicates with.

## Installation

This package can be installed from @abstr_hyperlink by running:

@abstr_code_section 

## Basic Usage

@abstr_code_section 

# Training data

ChatterBot comes with a data utility module that can be used to train chat bots. At the moment there is training data for over a dozen languages in this module. Contributions of additional training data or training data in other languages would be greatly appreciated. Take a look at the data files in the @abstr_hyperlink package if you are interested in contributing.

@abstr_code_section 

**Corpus contributions are welcome! Please make a pull request.**

#  @abstr_hyperlink 

View the @abstr_hyperlink for ChatterBot on Read the Docs.

To build the documentation yourself using @abstr_hyperlink , run:

@abstr_code_section 

# Examples

For examples, see the @abstr_hyperlink directory in this project's git repository.

There is also an example @abstr_hyperlink , as well as an example @abstr_hyperlink .

# History

See release notes for changes https://github.com/gunthercox/ChatterBot/releases

# Development pattern for contributors

@abstr_number . @abstr_hyperlink of the @abstr_hyperlink on GitHub. @abstr_number . Make your changes in a branch named something different from `master`, e.g. create a new branch `my-pull-request`. @abstr_number . @abstr_hyperlink . @abstr_number . Please follow the @abstr_hyperlink . @abstr_number . Use the projects @abstr_hyperlink . to help make sure that your contribution is free from errors.

# License

ChatterBot is licensed under the @abstr_hyperlink .
