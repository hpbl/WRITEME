@abstr_image 

An @abstr_hyperlink for GitHub and GitHub Enterprise. 

# gitsome

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Why `gitsome`?

### The Git Command Line

Although the standard Git command line is a great tool to manage your Git-powered repos, it can be **tough to remember the usage** of:

  * @abstr_number + porcelain and plumbing commands
  * Countless command-specific options
  * Resources such as tags and branches



The Git command line **does not integrate with GitHub** , forcing you to toggle between command line and browser.

## `gitsome` \- A Supercharged Git/GitHub CLI With Autocomplete

@abstr_image 

`gitsome` aims to supercharge your standard git/shell interface by focusing on:

  * **Improving ease-of-use**
  * **Increasing productivity**



### Deep GitHub Integration

Not all GitHub workflows work well in a terminal; `gitsome` attempts to target those that do.

`gitsome` includes @abstr_number GitHub integrated commands that work with **ALL** shells:
    
    
    $ gh <command> [param] [options]
    

  * Quick reference
  * @abstr_hyperlink 



Run `gh` commands along with @abstr_hyperlink and @abstr_hyperlink commands to unlock even more GitHub integrations!

@abstr_image 

### Git and GitHub Autocompleter With Interactive Help

You can run the _**optional**_ shell:
    
    
     $ gitsome
    

to enable **autocompletion** and **interactive help** for the following:

  * Git commands
  * Git options
  * Git branches, tags, etc
  * @abstr_hyperlink 
  * @abstr_hyperlink 



@abstr_image 

@abstr_image 

### General Autocompleter

`gitsome` autocompletes the following:

  * Shell commands
  * Files and directories
  * Environment variables
  * Man pages
  * Python



To enable additional autocompletions, check out the Enabling Bash Completions section.

@abstr_image 

## Fish-Style Auto-Suggestions

`gitsome` supports Fish-style auto-suggestions. Use the `right arrow` key to complete a suggestion.

@abstr_image 

## Python REPL

`gitsome` is powered by @abstr_hyperlink , which supports a Python REPL.

Run Python commands alongside shell commands:

@abstr_image 

Additional `xonsh` features can be found in the @abstr_hyperlink .

## Command History

`gitsome` keeps track of commands you enter and stores them in `~/.xonsh_history.json`. Use the up and down arrow keys to cycle through the command history.

@abstr_image 

## Customizable Highlighting

You can control the ansi colors used for highlighting by updating your `~/.gitsomeconfig` file.

Color options include:

@abstr_code_section 

For no color, set the value(s) to `None`. `white` can appear as light gray on some terminals.

@abstr_image 

## Available Platforms

`gitsome` is available for Mac, Linux, Unix, Windows, and Docker.

## TODO

> Not all GitHub workflows work well in a terminal; `gitsome` attempts to target those that do.

  * Add additional GitHub API integrations



`gitsome` is just getting started. Feel free to contribute!

## Index

### GitHub Integration Commands

  * GitHub Integration Commands Syntax
  * GitHub Integration Commands Listing
  * GitHub Integration Commands Quick Reference
  * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



### Installation and Tests

  * Installation 
    * Pip Installation
    * Virtual Environment Installation
    * Running as a Docker Container
    * Running the gh configure Command 
      * For GitHub Enterprise Users
    * Enabling Bash Completions
    * Enabling gh Tab Completions Outside of gitsome 
      * For Zsh Users
    * Optional: Installing PIL or Pillow
    * Supported Python Versions
    * Supported Platforms
    * Windows Support
  * Developer Installation 
    * Continuous Integration
    * Unit Tests and Code Coverage
    * Documentation



### Misc

  * Contributing
  * Credits
  * Contact Info
  * License



## GitHub Integration Commands Syntax

Usage:
    
    
    $ gh <command> [param] [options]
    

## GitHub Integration Commands Listing

@abstr_code_section 

## GitHub Integration Commands Reference: COMMANDS.md

See the @abstr_hyperlink for a **detailed discussion** of all GitHub integration commands, parameters, options, and examples.

Check out the next section for a **quick reference**.

## GitHub Integration Commands Quick Reference

### Configuring `gitsome`

To properly integrate with GitHub, you must first configure `gitsome`:
    
    
    $ gh configure
    

For GitHub Enterprise users, run with the `-e/--enterprise` flag:
    
    
    $ gh configure -e
    

### Listing Feeds

#### Listing Your News Feed
    
    
    $ gh feed
    

@abstr_image 

#### Listing A User's Activity Feed

View your activity feed or another user's activity feed, optionally through a pager with `-p/--pager`. The pager option is available for many commands.
    
    
    $ gh feed donnemartin -p
    

@abstr_image 

#### Listing A Repo's Activity Feed
    
    
    $ gh feed donnemartin/gitsome -p
    

@abstr_image 

### Listing Notifications
    
    
    $ gh notifications
    

@abstr_image 

### Listing Pull Requests

View all pull requests for your repos:
    
    
    $ gh pull-requests
    

@abstr_image 

### Filtering Issues

View all open issues where you have been mentioned:
    
    
    $ gh issues --issue_state open --issue_filter mentioned
    

@abstr_image 

View all issues, filtering for only those assigned to you, regardless of state (open, closed):
    
    
    $ gh issues --issue_state all --issue_filter assigned
    

For more information about the filter and state qualifiers, visit the @abstr_hyperlink reference in @abstr_hyperlink .

### Filtering Starred Repos
    
    
    $ gh starred "repo filter"
    

@abstr_image 

### Searching Issues and Repos

#### Searching Issues

Search issues that have the most + @abstr_number s:
    
    
    $ gh search-issues "is:open is:issue sort:reactions-+ @abstr_number -desc" -p
    

@abstr_image 

Search issues that have the most comments:
    
    
    $ gh search-issues "is:open is:issue sort:comments-desc" -p
    

Search issues with the "help wanted" tag:
    
    
    $ gh search-issues "is:open is:issue label:\"help wanted\"" -p
    

Search issues that have your user name tagged **@donnemartin** :
    
    
    $ gh search-issues "is:issue donnemartin is:open" -p
    

Search all your open private issues:
    
    
    $ gh search-issues "is:open is:issue is:private" -p
    

For more information about the query qualifiers, visit the @abstr_hyperlink .

#### Searching Repos

Search all Python repos created on or after @abstr_number , with >= @abstr_number stars:
    
    
    $ gh search-repos "created:>= @abstr_number - @abstr_number - @abstr_number  stars:>= @abstr_number  language:python" --sort stars -p
    

@abstr_image 

For more information about the query qualifiers, visit the @abstr_hyperlink .

### Listing Trending Repos and Devs

View trending repos:
    
    
    $ gh trending [language] [-w/--weekly] [-m/--monthly] [-d/--devs] [-b/--browser]
    

@abstr_image 

View trending devs (devs are currently only supported in browser):
    
    
    $ gh trending [language] --devs --browser
    

### Viewing Content

#### The `view` command

View the previously listed notifications, pull requests, issues, repos, users etc, with HTML nicely formatted for your terminal, or optionally in your browser:
    
    
    $ gh view [#] [-b/--browser]
    

@abstr_image 

#### The `issue` command

View an issue:
    
    
    $ gh issue donnemartin/saws/ @abstr_number
    

@abstr_image 

#### The `pull-request` command

View a pull request:
    
    
    $ gh pull-request donnemartin/awesome-aws/ @abstr_number
    

@abstr_image 

### Setting Up `.gitignore`

List all available `.gitignore` templates:
    
    
    $ gh gitignore-templates
    

@abstr_image 

Set up your `.gitignore`:
    
    
    $ gh gitignore-template Python > .gitignore
    

@abstr_image 

### Setting Up `LICENSE`

List all available `LICENSE` templates:
    
    
    $ gh licenses
    

@abstr_image 

Set up your or `LICENSE`:
    
    
    $ gh license MIT > LICENSE
    

@abstr_image 

### Summoning Octocat

Call on Octocat to say the given message or an Easter egg:
    
    
    $ gh octo [say]
    

@abstr_image 

### Viewing Profiles

#### Viewing A User's Profile
    
    
    $ gh user octocat
    

@abstr_image 

#### Viewing Your Profile

View your profile with the `gh user [YOUR_USER_ID]` command or with the following shortcut:
    
    
    $ gh me
    

@abstr_image 

### Creating Comments, Issues, and Repos

Create a comment:
    
    
    $ gh create-comment donnemartin/gitsome/ @abstr_number  -t "hello world"
    

Create an issue:
    
    
    $ gh create-issue donnemartin/gitsome -t "title" -b "body"
    

Create a repo:
    
    
    $ gh create-repo gitsome
    

### Option: View in a Pager

Many `gh` commands support a `-p/--pager` option that displays results in a pager, where available.

Usage:
    
    
    $ gh <command> [param] [options] -p
    $ gh <command> [param] [options] --pager
    

### Option: View in a Browser

Many `gh` commands support a `-b/--browser` option that displays results in your default browser instead of your terminal.

Usage:
    
    
    $ gh <command> [param] [options] -b
    $ gh <command> [param] [options] --browser
    

See the @abstr_hyperlink for a detailed listing of all GitHub integration commands, parameters, options, and examples.

Having trouble remembering these commands? Check out the handy autocompleter with interactive help to guide you through each command.

_Note, you can combine`gitsome` with other utilities such as @abstr_hyperlink ._

## Installation

### Pip Installation

@abstr_hyperlink @abstr_hyperlink 

`gitsome` is hosted on @abstr_hyperlink . The following command will install `gitsome`:
    
    
    $ pip @abstr_number  install gitsome
    

You can also install the latest `gitsome` from GitHub source which can contain changes not yet pushed to PyPI:
    
    
    $ pip @abstr_number  install git+https://github.com/donnemartin/gitsome.git
    

If you are not installing in a `virtualenv`, you might need to run with `sudo`:
    
    
    $ sudo pip @abstr_number  install gitsome
    

#### `pip @abstr_number`

Depending on your setup, you might also want to run `pip @abstr_number` with the @abstr_hyperlink :
    
    
    $ sudo -H pip @abstr_number  install gitsome
    

For most linux users, `pip @abstr_number` can be installed on your system using the `python @abstr_number -pip` package.

For example, Ubuntu users can run:
    
    
    $ sudo apt-get install python @abstr_number -pip
    

See this @abstr_hyperlink for more details.

### Virtual Environment Installation

You can install Python packages in a @abstr_hyperlink to avoid potential issues with dependencies or permissions.

If you are a Windows user or if you would like more details on `virtualenv`, check out this @abstr_hyperlink .

Install `virtualenv` and `virtualenvwrapper`:
    
    
    $ pip @abstr_number  install virtualenv
    $ pip @abstr_number  install virtualenvwrapper
    $ export WORKON_HOME=~/.virtualenvs
    $ source /usr/local/bin/virtualenvwrapper.sh
    

Create a `gitsome` `virtualenv` and install `gitsome`:
    
    
    $ mkvirtualenv gitsome
    $ pip @abstr_number  install gitsome
    

If the `pip` install does not work, you might be running Python @abstr_number by default. Check what version of Python you are running:
    
    
    $ python --version
    

If the call above results in Python @abstr_number , find the path for Python @abstr_number :
    
    
    $ which python @abstr_number   # Python  @abstr_number  path for mkvirtualenv's --python option
    

Install Python @abstr_number if needed. Set the Python version when calling `mkvirtualenv`:
    
    
    $ mkvirtualenv --python [Python  @abstr_number  path from above] gitsome
    $ pip @abstr_number  install gitsome
    

If you want to activate the `gitsome` `virtualenv` again later, run:
    
    
    $ workon gitsome
    

To deactivate the `gitsome` `virtualenv`, run:
    
    
    $ deactivate
    

### Running as a Docker Container

You can run gitsome in a Docker container to avoid installing Python and `pip @abstr_number` locally. To install Docker check out the @abstr_hyperlink .

Once you have docker installed you can run gitsome:
    
    
    $ docker run -ti --rm mariolet/gitsome
    

You can use Docker volumes to let gitsome access your working directory, your local .gitsomeconfig and .gitconfig:
    
    
    $ docker run -ti --rm -v $(pwd):/src/              \
       -v ${HOME}/.gitsomeconfig:/root/.gitsomeconfig  \
       -v ${HOME}/.gitconfig:/root/.gitconfig          \
       mariolet/gitsome
    

If you are running this command often you will probably want to define an alias:
    
    
    $ alias gitsome="docker run -ti --rm -v $(pwd):/src/              \
                      -v ${HOME}/.gitsomeconfig:/root/.gitsomeconfig  \
                      -v ${HOME}/.gitconfig:/root/.gitconfig          \
                      mariolet/gitsome"
    

To build the Docker image from sources:
    
    
    $ git clone https://github.com/donnemartin/gitsome.git
    $ cd gitsome
    $ docker build -t gitsome .
    

### Starting the `gitsome` Shell

Once installed, run the optional `gitsome` autocompleter with interactive help:
    
    
    $ gitsome
    

Running the optional `gitsome` shell will provide you with autocompletion, interactive help, fish-style suggestions, a Python REPL, etc.

### Running `gh` Commands

Run GitHub-integrated commands:
    
    
    $ gh <command> [param] [options]
    

Note: Running the `gitsome` shell is not required to execute `gh` commands. After installing `gitsome` you can run `gh` commands from any shell.

### Running the `gh configure` Command

To properly integrate with GitHub, `gitsome` must be properly configured:
    
    
    $ gh configure
    

#### For GitHub Enterprise Users

Run with the `-e/--enterprise` flag:
    
    
    $ gh configure -e
    

View more details in the @abstr_hyperlink section.

### Enabling Bash Completions

By default, `gitsome` looks at the following @abstr_hyperlink .

To add additional bash completions, update the `~/.xonshrc` file with the location of your bash completions.

If `~/.xonshrc` does not exist, create it:
    
    
    $ touch ~/.xonshrc
    

For example, if additional completions are found in `/usr/local/etc/my_bash_completion.d/completion.bash`, add the following line in `~/.xonshrc`:

@abstr_code_section 

You will need to restart `gitsome` for the changes to take effect.

### Enabling `gh` Tab Completions Outside of `gitsome`

You can run `gh` commands outside of the `gitsome` shell completer. To enable `gh` tab completions for this workflow, copy the @abstr_hyperlink file locally.

Let bash know completion is available for the `gh` command within your current session:
    
    
    $ source /path/to/gh_complete.sh
    

To enable tab completion for all terminal sessions, add the following to your `bashrc` file:
    
    
    source /path/to/gh_complete.sh
    

Reload your `bashrc`:
    
    
    $ source ~/.bashrc
    

Tip: `.` is the short form of `source`, so you can run this instead:
    
    
    $ . ~/.bashrc
    

#### For Zsh Users

`zsh` includes a module which is compatible with bash completions.

Download the @abstr_hyperlink file as above and append the following to your `.zshrc`:
    
    
    autoload bashcompinit
    bashcompinit
    source /path/to/gh_complete.sh
    

Reload your `zshrc`:
    
    
     $ source ~/.zshrc
    

### Optional: Installing `PIL` or `Pillow`

Displaying the avatar for the `gh me` and `gh user` commands will require installing the optional `PIL` or `Pillow` dependency.

Windows* and Mac:
    
    
    $ pip @abstr_number  install Pillow
    

*See the Windows Support section for limitations on the avatar.

Ubuntu users, check out these @abstr_hyperlink 

### Supported Python Versions

  * Python @abstr_number . @abstr_number 
  * Python @abstr_number . @abstr_number 
  * Python @abstr_number . @abstr_number 
  * Python @abstr_number . @abstr_number 



`gitsome` is powered by `xonsh` which does not currently support Python @abstr_number .x, as discussed in this @abstr_hyperlink .

### Supported Platforms

  * Mac OS X 
    * Tested on OS X @abstr_number . @abstr_number 
  * Linux, Unix 
    * Tested on Ubuntu @abstr_number . @abstr_number LTS
  * Windows 
    * Tested on Windows @abstr_number 



### Windows Support

`gitsome` has been tested on Windows @abstr_number with `cmd` and `cmder`.

Although you can use the standard Windows command prompt, you'll probably have a better experience with either @abstr_hyperlink or @abstr_hyperlink .

@abstr_image 

#### Text Only Avatar

The commands @abstr_hyperlink and @abstr_hyperlink will always have the `-t/--text_avatar` flag enabled, since img @abstr_number txt does not support the ansi avatar on Windows.

#### Config File

On Windows, the `.gitsomeconfig` file can be found in `%userprofile%`. For example:
    
    
    C:\Users\dmartin\.gitsomeconfig
    

## Developer Installation

If you're interested in contributing to `gitsome`, run the following commands:
    
    
    $ git clone https://github.com/donnemartin/gitsome.git
    $ cd gitsome
    $ pip @abstr_number  install -e .
    $ pip @abstr_number  install -r requirements-dev.txt
    $ gitsome
    $ gh <command> [param] [options]
    

#### `pip @abstr_number`

If you get an error while installing saying that you need Python @abstr_number . @abstr_number +, it could be because your `pip` command is configured for an older version of Python. To fix this issue, it is recommended to install `pip @abstr_number`:
    
    
    $ sudo apt-get install python @abstr_number -pip
    

See this @abstr_hyperlink for more details.

### Continuous Integration

@abstr_hyperlink 

Continuous integration details are available on @abstr_hyperlink .

### Unit Tests and Code Coverage

Run unit tests in your active Python environment:
    
    
    $ python tests/run_tests.py
    

Run unit tests with @abstr_hyperlink on multiple Python environments:
    
    
    $ tox
    

### Documentation

Source code documentation will soon be available on @abstr_hyperlink . Check out the @abstr_hyperlink .

Run the following to build the docs:
    
    
    $ scripts/update_docs.sh
    

## Contributing

Contributions are welcome!

Review the @abstr_hyperlink for details on how to:

  * Submit issues
  * Submit pull requests



## Credits

  * @abstr_hyperlink by @abstr_hyperlink 
  * @abstr_hyperlink by @abstr_hyperlink 
  * @abstr_hyperlink by @abstr_hyperlink 
  * @abstr_hyperlink by @abstr_hyperlink 
  * @abstr_hyperlink by @abstr_hyperlink 
  * @abstr_hyperlink by @abstr_hyperlink 
  * @abstr_hyperlink by @abstr_hyperlink 
  * @abstr_hyperlink by @abstr_hyperlink 



## Contact Info

Feel free to contact me to discuss any issues, questions, or comments.

My contact info can be found on my @abstr_hyperlink .

## License

_I am providing code and resources in this repository to you under an open source license. Because this is my personal repository, the license you receive to my code and resources is from me and not my employer (Facebook)._

@abstr_hyperlink 
    
    
    Copyright  @abstr_number  Donne Martin
    
    Licensed under the Apache License, Version  @abstr_number . @abstr_number  (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
       http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number 
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    
