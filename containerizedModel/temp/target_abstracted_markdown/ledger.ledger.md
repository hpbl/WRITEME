@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

# Ledger: Command-Line Accounting

Ledger is a powerful, double-entry accounting system that is accessed from the UNIX command-line. This may put off some users, since there is no flashy UI, but for those who want unparalleled reporting access to their data there are few alternatives.

Ledger uses text files for input. It reads the files and generates reports; there is no other database or stored state. To use Ledger, you create a file of your account names and transactions, run from the command line with some options to specify input and requested reports, and get output. The output is generally plain text, though you could generate a graph or html instead. Ledger is simple in concept, surprisingly rich in ability, and easy to use.

## For the Impatient

I know, you just want to build and play. If you have all the dependencies installed, then simply do this:
    
    
    $ git clone git://github.com/ledger/ledger.git
    $ cd ledger && ./acprep update  # Update to the latest, configure, make
    

Now try your first ledger command:
    
    
    $ ./ledger -f test/input/sample.dat reg
    

For help on keeping your journal have a look at the [documentation] and the @abstr_hyperlink (Also see the “Resources” section at the end of this file). An Emacs mode for Ledger files can be found in the [ledger/ledger-mode repository] and a vim plugin is located in the [ledger/vim-ledger repository].

## Docker version

If you have Docker installed on your computer or server, you can use a @abstr_hyperlink of this software, without installing any further dependencies:
    
    
    $ docker run --rm -v "$PWD"/test/input:/data dcycle/ledger: @abstr_number  -f /data/sample.dat reg
    

## Dependencies

If you wish to proceed in this venture, you'll need a few dependencies. The easiest way to get them for your platform is to run this handy Python script:
    
    
    $ ./acprep dependencies
    

If that doesn't completely work, here are the dependencies for building the current `master` branch:

Dependency | Version (or greater) \-----------|--------------------- [Boost] | @abstr_number . @abstr_number [GMP] | @abstr_number . @abstr_number . @abstr_number [MPFR] | @abstr_number . @abstr_number . @abstr_number [utfcpp] | @abstr_number . @abstr_number . @abstr_number [gettext] | @abstr_number . @abstr_number _optional_ [libedit] | @abstr_number - @abstr_number . @abstr_number _optional_ [Python] | @abstr_number . @abstr_number _optional_ [doxygen] | @abstr_number . @abstr_number . @abstr_number . @abstr_number _optional_, for `make docs` [graphviz] | @abstr_number . @abstr_number . @abstr_number _optional_, for `make docs` [texinfo] | @abstr_number . @abstr_number _optional_, for `make docs` [lcov] | @abstr_number . @abstr_number _optional_, for `make report`, used with `/./acprep gcov` [sloccount] | @abstr_number . @abstr_number _optional_, for `make sloc`

### macOS

You can use [Homebrew] or [MacPorts] to install Ledger easily on macOS.

#### @abstr_number . Homebrew

You can see the parameters you can pass while installing with brew by the command `brew options ledger`. To install ledger, simply type the following command:
    
    
    $ brew install ledger
    

If you to want to startup python, use the following command:
    
    
    $ ledger python
    

#### @abstr_number . MacPorts

If you build stuff using MacPorts on macOS, as I do, here is what you would run:
    
    
    $ sudo port install -f cmake python @abstr_number  \
         libiconv +universal zlib +universal gmp +universal \
         mpfr +universal ncurses +universal ncursesw +universal \
         gettext +universal libedit +universal boost-jam \
         boost +st+python @abstr_number +icu texlive doxygen graphviz \
         texinfo lcov sloccount
    

### Ubuntu

If you're going to build on Ubuntu, `sudo apt-get install ...` the following packages (current as of Ubuntu @abstr_number . @abstr_number ):
    
    
    $ sudo apt-get install build-essential cmake doxygen \
         libboost-system-dev libboost-dev python-dev gettext git \
         libboost-date-time-dev libboost-filesystem-dev \
         libboost-iostreams-dev libboost-python-dev libboost-regex-dev \
         libboost-test-dev libedit-dev libgmp @abstr_number -dev libmpfr-dev texinfo tzdata
    

### Debian

Debian @abstr_number (stretch), Debian @abstr_number (buster), Debian testing and Debian unstable (sid) contain all components needed to build ledger. You can install all required build dependencies using the following command:
    
    
    $ sudo apt-get install build-essential cmake autopoint texinfo python-dev \
         zlib @abstr_number g-dev libbz @abstr_number -dev libgmp @abstr_number -dev gettext libmpfr-dev \
         libboost-date-time-dev libboost-filesystem-dev \
         libboost-graph-dev libboost-iostreams-dev \
         libboost-python-dev libboost-regex-dev libboost-test-dev
    

## Building

The next step is preparing your environment for building. While you can use `cmake .` and make, I've prepared a script that does a lot more of the footwork for you:
    
    
    $ ./acprep update
    # or, if you want to use the Boost libraries with suffix -mt, install in
    # $HOME/local and build with  @abstr_number  processes in parallel
    $ ./acprep update --boost-suffix=-mt --prefix=$HOME/local -j @abstr_number
    

Please read the contents of `CMakeFiles/CMakeOutput.log` and `CMakeFiles/CMakeError.log` if the configure step fails. Also, see the `help` subcommand to `acprep`, which explains some of its many options. It's pretty much the only command I run for configuring, building and testing Ledger.

You can run `make check` to confirm the result, and `make install` to install.

## Resources

Now that you're up and running, here are a few resources to keep in mind:

  * [Homepage]
  * [Documentation]
  * IRC channel
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



If you have ideas you'd like to share, the best way is either to e-mail me a patch (I prefer attachments over pasted text), or to get an account on GitHub. Once you do, fork the @abstr_hyperlink , hack as much as you like, then send me a pull request via GitHub.
