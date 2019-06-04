# NAME

node-sqlite @abstr_number - Asynchronous, non-blocking @abstr_hyperlink bindings for @abstr_hyperlink @abstr_number . @abstr_number - @abstr_number . @abstr_number (versions @abstr_number . @abstr_number .x), _* @abstr_number . @abstr_number . @abstr_number +, @abstr_number . @abstr_number .x, and @abstr_number . @abstr_number .x_ * (versions @abstr_number . @abstr_number .x).

(Can also run in @abstr_hyperlink if it uses a supported version of Node's engine.)

@abstr_hyperlink @abstr_hyperlink 

# USAGE

**Note:** the module must be installed before use.

@abstr_code_section 

# FEATURES

  * Straightforward query and parameter binding interface
  * Full Buffer/Blob support
  * Extensive @abstr_hyperlink 
  * @abstr_hyperlink API
  * @abstr_hyperlink 
  * Big test suite
  * Written in modern C++ and tested for memory leaks



# API

See the @abstr_hyperlink in the wiki.

# INSTALLING

You can use @abstr_hyperlink to download and install:

  * The latest `sqlite @abstr_number` package: `npm install sqlite @abstr_number`

  * GitHub's `master` branch: `npm install https://github.com/mapbox/node-sqlite @abstr_number /tarball/master`




In both cases the module is automatically built with npm's internal version of `node-gyp`, and thus your system must meet @abstr_hyperlink .

It is also possible to make your own build of `sqlite @abstr_number` from its source instead of its npm package (see below).

It is possible to use the installed package in @abstr_hyperlink instead of the vanilla Node.js, but a rebuild is required before use (see the next section).

# REBUILDING FOR NODE-WEBKIT

Because of ABI differences, only a rebuilt version of `sqlite @abstr_number` can be used in @abstr_hyperlink .

After the `sqlite @abstr_number` module is installed (according to the previous section), do the following:

@abstr_number . Install @abstr_hyperlink globally: `npm install nw-gyp -g` _(unless already installed)_

@abstr_number . Use `nw-gyp` to rebuild the module:

@abstr_code_section 

Remember the following:

  * In the `nw-gyp rebuild` command, specify the actual target version of your node-webkit. The command must be run in sqlite @abstr_number 's directory (where its `package.json` resides).

  * After the `sqlite @abstr_number` package is rebuilt for node-webkit it cannot run in the vanilla Node.js (and vice versa).

    * For example, `npm test` of the node-webkit's package would fail.
    * If you need `sqlite @abstr_number` package both for Node.js and node-webkit, then you should make two separate installations of `sqlite @abstr_number` (in different directories) and rebuild only one of them for node-webkit.



Visit the “ @abstr_hyperlink ” article in the node-webkit's wiki for more details.

# BUILDING FROM THE SOURCE

Unless building via `npm install` (which uses its own `node-gyp`) you will need `node-gyp` installed globally:
    
    
    npm install node-gyp -g
    

The sqlite @abstr_number module depends only on libsqlite @abstr_number . However, by default, an internal/bundled copy of sqlite will be built and statically linked, so an externally installed sqlite @abstr_number is not required.

If you wish to install against an external sqlite then you need to pass the `--sqlite` argument to `node-gyp`, `npm install` or the `configure` wrapper.
    
    
    ./configure --sqlite=/usr/local
    make
    

Or, using the node-gyp directly:
    
    
     node-gyp --sqlite=/usr/local
     make
    

Or, using npm:
    
    
     npm install --sqlite=/usr/local
    

If building against an external sqlite @abstr_number make sure to have the development headers available. Mac OS X ships with these by default. If you don't have them installed, install the `-dev` package with your package manager, e.g. `apt-get install libsqlite @abstr_number -dev` for Debian/Ubuntu. Make sure that you have at least `libsqlite @abstr_number` >= @abstr_number . @abstr_number .

Note, if building against homebrew-installed sqlite on OS X you can do:
    
    
    ./configure --sqlite=/usr/local/opt/sqlite/
    make
    

# TESTING

@abstr_hyperlink is required to run unit tests.

In sqlite @abstr_number 's directory (where its `package.json` resides) run the following:
    
    
    npm install mocha
    npm test
    

# CONTRIBUTORS

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



# ACKNOWLEDGEMENTS

Thanks to @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink for their SQLite bindings for node, and to mraleph on Freenode's #v @abstr_number for answering questions.

Development of this module is sponsored by @abstr_hyperlink .

# LICENSE

`node-sqlite @abstr_number` is @abstr_hyperlink .
