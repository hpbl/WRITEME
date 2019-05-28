# LastPass CLI

#### (c) @abstr_number LastPass.

C @abstr_number command line interface to @abstr_hyperlink .

## Operating System Support

`lpass` is designed to run on GNU/Linux, Cygwin and Mac OS X.

## Dependencies

  * @abstr_hyperlink or @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (optional)
  * @abstr_hyperlink (build-time documentation generation only)
  * @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , or @abstr_hyperlink for clipboard support (optional)



### Installing on Linux

#### Redhat/Centos

  * Install the needed dependencies

@abstr_code_section 




##### Debian/Ubuntu

  * Debian: Install the needed dependencies

@abstr_code_section 

  * Ubuntu: Install the needed dependencies

@abstr_code_section 




#### Gentoo

  * Install the package @abstr_code_section 



##### Other Linux Distros

Install the packages listed in the Dependencies section of this document.

### Installing on OS X

  * Install homebrew following the instructions at http://brew.sh/
  * Install lastpass-cli using homebrew:

@abstr_code_section 




Optionally you can add `--with-doc` to install the documentation.

### Installing on FreeBSD

  * Install the binary package

@abstr_code_section 

  * Or build the port yourself @abstr_code_section 




## Building
    
    
    $ make
    

## Installing
    
    
    $ sudo make install
    

These environment variables can be passed to make to do the right thing: `PREFIX`, `DESTDIR`, `BINDIR`, `LIBDIR`, `MANDIR`.

## Running

If you've installed it:
    
    
    $ lpass
    

Otherwise, from the build directory:
    
    
    $ ./lpass
    

## Documentation

The `install-doc` target builds and installs the documentation. It requires AsciiDoc as a prerequisite.
    
    
    $ sudo make install-doc
    

Once installed,
    
    
    $ man lpass
    
