# Pipenv: Python Development Workflow for Humans

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

* * *

**Pipenv** is a tool that aims to bring the best of all packaging worlds (bundler, composer, npm, cargo, yarn, etc.) to the Python world. _Windows is a first-class citizen, in our world._

It automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from your `Pipfile` as you install/uninstall packages. It also generates the ever-important `Pipfile.lock`, which is used to produce deterministic builds.

@abstr_image 

The problems that Pipenv seeks to solve are multi-faceted:

  * You no longer need to use `pip` and `virtualenv` separately. They work together.
  * Managing a `requirements.txt` file @abstr_hyperlink , so Pipenv uses the upcoming `Pipfile` and `Pipfile.lock` instead, which is superior for basic use cases.
  * Hashes are used everywhere, always. Security. Automatically expose security vulnerabilities.
  * Give you insight into your dependency graph (e.g. `$ pipenv graph`).
  * Streamline development workflow by loading `.env` files.



You can quickly play with Pipenv right in your browser:

@abstr_hyperlink 

## Installation

If you\'re on MacOS, you can install Pipenv easily with Homebrew:
    
    
    $ brew install pipenv
    

Or, if you\'re using Debian Buster+:
    
    
    $ sudo apt install pipenv
    

Or, if you\'re using Fedora @abstr_number :
    
    
    $ sudo dnf install pipenv
    

Or, if you\'re using FreeBSD:
    
    
    # pkg install py @abstr_number -pipenv
    

Otherwise, refer to the @abstr_hyperlink for instructions.

✨🍰✨

## ☤ User Testimonials

**Jannis Leidel** , former pip maintainer---

: _Pipenv is the porcelain I always wanted to build for pip. It fits my brain and mostly replaces virtualenvwrapper and manual pip calls for me. Use it._

**David Gang** \---

: _This package manager is really awesome. For the first time I know exactly what my dependencies are which I installed and what the transitive dependencies are. Combined with the fact that installs are deterministic, makes this package manager first class, like cargo_.

**Justin Myles Holmes** \---

: _Pipenv is finally an abstraction meant to engage the mind instead of merely the filesystem._

## ☤ Features

  * Enables truly _deterministic builds_ , while easily specifying _only what you want_.
  * Generates and checks file hashes for locked dependencies.
  * Automatically install required Pythons, if `pyenv` is available.
  * Automatically finds your project home, recursively, by looking for a `Pipfile`.
  * Automatically generates a `Pipfile`, if one doesn\'t exist.
  * Automatically creates a virtualenv in a standard location.
  * Automatically adds/removes packages to a `Pipfile` when they are un/installed.
  * Automatically loads `.env` files, if they exist.



The main commands are `install`, `uninstall`, and `lock`, which generates a `Pipfile.lock`. These are intended to replace `$ pip install` usage, as well as manual virtualenv management (to activate a virtualenv, run `$ pipenv shell`).

### Basic Concepts

  * A virtualenv will automatically be created, when one doesn\'t exist.
  * When no parameters are passed to `install`, all packages `[packages]` specified will be installed.
  * To initialize a Python @abstr_number virtual environment, run `$ pipenv --three`.
  * To initialize a Python @abstr_number virtual environment, run `$ pipenv --two`.
  * Otherwise, whatever virtualenv defaults to will be the default.



### Other Commands

  * `shell` will spawn a shell with the virtualenv activated.
  * `run` will run a given command from the virtualenv, with any arguments forwarded (e.g. `$ pipenv run python`).
  * `check` asserts that PEP @abstr_number requirements are being met by the current environment.
  * `graph` will print a pretty graph of all your installed dependencies.



### Shell Completion

For example, with fish, put this in your `~/.config/fish/completions/pipenv.fish`:
    
    
    eval (pipenv --completion)
    

Alternatively, with bash, put this in your `.bashrc` or `.bash_profile`:
    
    
    eval "$(pipenv --completion)"
    

Magic shell completions are now enabled! There is also a @abstr_hyperlink , which will automatically activate your subshells for you!

Fish is the best shell. You should use it.

## ☤ Usage
    
    
    $ pipenv
    Usage: pipenv [OPTIONS] COMMAND [ARGS]...
    
    Options:
      --where          Output project home information.
      --venv           Output virtualenv information.
      --py             Output Python interpreter information.
      --envs           Output Environment Variable options.
      --rm             Remove the virtualenv.
      --bare           Minimal output.
      --completion     Output completion (to be eval'd).
      --man            Display manpage.
      --three / --two  Use Python  @abstr_number / @abstr_number  when creating virtualenv.
      --python TEXT    Specify which version of Python virtualenv should use.
      --site-packages  Enable site-packages for the virtualenv.
      --version        Show the version and exit.
      -h, --help       Show this message and exit.
    
    
    Usage Examples:
       Create a new project using Python  @abstr_number . @abstr_number , specifically:
       $ pipenv --python  @abstr_number . @abstr_number 
    
       Remove project virtualenv (inferred from current directory):
       $ pipenv --rm
    
       Install all dependencies for a project (including dev):
       $ pipenv install --dev
    
       Create a lockfile containing pre-releases:
       $ pipenv lock --pre
    
       Show a graph of your installed dependencies:
       $ pipenv graph
    
       Check your installed dependencies for security vulnerabilities:
       $ pipenv check
    
       Install a local setup.py into your virtual environment/Pipfile:
       $ pipenv install -e .
    
       Use a lower-level pip command:
       $ pipenv run pip freeze
    
    Commands:
      check      Checks for security vulnerabilities and against PEP  @abstr_number  markers
                 provided in Pipfile.
      clean      Uninstalls all packages not specified in Pipfile.lock.
      graph      Displays currently–installed dependency graph information.
      install    Installs provided packages and adds them to Pipfile, or (if no
                 packages are given), installs all packages from Pipfile.
      lock       Generates Pipfile.lock.
      open       View a given module in your editor.
      run        Spawns a command installed into the virtualenv.
      shell      Spawns a shell within the virtualenv.
      sync       Installs all packages specified in Pipfile.lock.
      uninstall  Un-installs a provided package and removes it from Pipfile.
    

Locate the project:
    
    
    $ pipenv --where
    /Users/kennethreitz/Library/Mobile Documents/com~apple~CloudDocs/repos/kr/pipenv/test
    

Locate the virtualenv:
    
    
    $ pipenv --venv
    /Users/kennethreitz/.local/share/virtualenvs/test-Skyy @abstr_number vre
    

Locate the Python interpreter:
    
    
    $ pipenv --py
    /Users/kennethreitz/.local/share/virtualenvs/test-Skyy @abstr_number vre/bin/python
    

Install packages:
    
    
    $ pipenv install
    Creating a virtualenv for this project...
    ...
    No package provided, installing all dependencies.
    Virtualenv location: /Users/kennethreitz/.local/share/virtualenvs/test-EJkjoYts
    Installing dependencies from Pipfile.lock...
    ...
    
    To activate this project's virtualenv, run the following:
    $ pipenv shell
    

Installing from git:

You can install packages with pipenv from git and other version control systems using URLs formatted according to the following rule:
    
    
    <vcs_type>+<scheme>://<location>/<user_or_organization>/<repository>@<branch_or_tag>#<package_name>
    

The only optional section is the `@<branch_or_tag>` section. When using git over SSH, you may use the shorthand vcs and scheme alias `git+git@<location>:<user_or_organization>/<repository>@<branch_or_tag>#<package_name>`. Note that this is translated to `git+ssh://git@<location>` when parsed.

Valid values for `<vcs_type>` include `git`, `bzr`, `svn`, and `hg`. Valid values for `<scheme>` include `http,`, `https`, `ssh`, and `file`. In specific cases you also have access to other schemes: `svn` may be combined with `svn` as a scheme, and `bzr` can be combined with `sftp` and `lp`.

Note that it is **strongly recommended** that you install any version-controlled dependencies in editable mode, using `pipenv install -e`, in order to ensure that dependency resolution can be performed with an up to date copy of the repository each time it is performed, and that it includes all known dependencies.

Below is an example usage which installs the git repository located at `https://github.com/requests/requests.git` from tag `v @abstr_number . @abstr_number . @abstr_number` as package name `requests`:
    
    
    $ pipenv install -e git+https://github.com/requests/requests.git@v @abstr_number . @abstr_number #egg=requests
    Creating a Pipfile for this project...
    Installing -e git+https://github.com/requests/requests.git@v @abstr_number . @abstr_number . @abstr_number #egg=requests...
    [...snipped...]
    Adding -e git+https://github.com/requests/requests.git@v @abstr_number . @abstr_number . @abstr_number #egg=requests to Pipfile's [packages]...
    [...]
    

You can read more about @abstr_hyperlink .

Install a dev dependency:
    
    
    $ pipenv install pytest --dev
    Installing pytest...
    ...
    Adding pytest to Pipfile's [dev-packages]...
    

Show a dependency graph:
    
    
    $ pipenv graph
    requests== @abstr_number . @abstr_number . @abstr_number 
      - certifi [required: >= @abstr_number . @abstr_number . @abstr_number , installed:  @abstr_number . @abstr_number . @abstr_number . @abstr_number ]
      - chardet [required: >= @abstr_number . @abstr_number . @abstr_number ,< @abstr_number . @abstr_number . @abstr_number , installed:  @abstr_number . @abstr_number . @abstr_number ]
      - idna [required: >= @abstr_number . @abstr_number ,< @abstr_number . @abstr_number , installed:  @abstr_number . @abstr_number ]
      - urllib @abstr_number  [required: < @abstr_number . @abstr_number ,>= @abstr_number . @abstr_number . @abstr_number , installed:  @abstr_number . @abstr_number ]
    

Generate a lockfile:
    
    
    $ pipenv lock
    Assuring all dependencies from Pipfile are installed...
    Locking [dev-packages] dependencies...
    Locking [packages] dependencies...
    Note: your project now has only default [packages] installed.
    To install [dev-packages], run: $ pipenv install --dev
    

Install all dev dependencies:
    
    
    $ pipenv install --dev
    Pipfile found at /Users/kennethreitz/repos/kr/pip @abstr_number /test/Pipfile. Considering this to be the project home.
    Pipfile.lock out of date, updating...
    Assuring all dependencies from Pipfile are installed...
    Locking [dev-packages] dependencies...
    Locking [packages] dependencies...
    

Uninstall everything:
    
    
    $ pipenv uninstall --all
    No package provided, un-installing all dependencies.
    Found  @abstr_number  installed package(s), purging...
    ...
    Environment now purged and fresh!
    

Use the shell:
    
    
    $ pipenv shell
    Loading .env environment variables…
    Launching subshell in virtual environment. Type 'exit' or 'Ctrl+D' to return.
    $ ▯
    

## ☤ Documentation

Documentation resides over at @abstr_hyperlink .
