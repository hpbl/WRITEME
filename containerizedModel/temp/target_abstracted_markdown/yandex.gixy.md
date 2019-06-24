# GIXY

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

# Overview

@abstr_image 

Gixy is a tool to analyze Nginx configuration. The main goal of Gixy is to prevent security misconfiguration and automate flaw detection.

Currently supported Python versions are @abstr_number . @abstr_number and @abstr_number . @abstr_number +.

Disclaimer: Gixy is well tested only on GNU/Linux, other OSs may have some issues.

# What it can do

Right now Gixy can find: * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 

You can find things that Gixy is learning to detect at @abstr_hyperlink 

# Installation

Gixy is distributed on @abstr_hyperlink . The best way to install it is with pip: @abstr_code_section 

Run Gixy and check results: @abstr_code_section 

# Usage

By default Gixy will try to analyze Nginx configuration placed in `/etc/nginx/nginx.conf`.

But you can always specify needed path: @abstr_code_section 

Or skip some tests: @abstr_code_section 

Or something else, you can find all other `gixy` arguments with the help command: `gixy --help`

## Docker usage

Gixy is available as a Docker image @abstr_hyperlink . To use it, mount the configuration that you want to analyse as a volume and provide the path to the configuration file when running the Gixy image. @abstr_code_section 

If you have an image that already contains your nginx configuration, you can share the configuration with the Gixy container as a volume. @abstr_code_section 

# Contributing

Contributions to Gixy are always welcome! You can help us in different ways: * Open an issue with suggestions for improvements and errors you're facing; * Fork this repository and submit a pull request; * Improve the documentation.

Code guidelines: * Python code style should follow @abstr_hyperlink standards whenever possible; * Pull requests with new plugins must have unit tests for it.
