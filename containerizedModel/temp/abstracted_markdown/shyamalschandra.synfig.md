# Synfig Studio

## About

Synfig Studio is a free and open-source @abstr_number D animation software, designed as powerful industrial-strength solution for creating film-quality animation using a vector and bitmap artwork. It eliminates the need to create animation frame-by frame, allowing you to produce @abstr_number D animation of a higher quality with fewer people and resources. Synfig Studio is available for Windows, Linux and MacOS X.

http://synfig.org/

(TODO: add more info)

## Installing

Old autotools instructions can be found @abstr_hyperlink .

We're currently in the @abstr_hyperlink and you're welcome to take part in testing and improving it.

### CMake status

  * all major components are buildable, installable and runnable
  * building all components without installing ETL & core is not tested



Tested to work on (this will be updated as reports come in):

  * Debian Sid



### Cleanup

If you have previous synfig build installed in system path (e.g. `/usr/local/`), you are recommended to uninstall that.

### Dependencies

You need development & library packages of the following libs:

  * boost (system, filesystem, program_options, chrono)
  * zlib
  * libsigc++- @abstr_number . @abstr_number 
  * glibmm- @abstr_number . @abstr_number 
  * giomm- @abstr_number . @abstr_number 
  * cairo
  * libxml++- @abstr_number . @abstr_number 
  * mlt++
  * fftw @abstr_number 
  * pango
  * gtkmm- @abstr_number . @abstr_number (only for studio)
  * gettext (probably optional)
  * some threading support (e.g. pthread)



Generally CMake will throw error if it doesn't find something, so you can just run it and see what's missing. Also note that this list might not be full.

### CMake backend

CMake provides generators for multiple build systems. You can use default `make` or `ninja`, which should generally work somewhat faster. The following configuration commands assume you want to use `ninja`. If you don't, remove `-GNinja` from all commands containing it. All the building commands here are invoked via cmake to make them (almost) backend-agnostic, but you can run `make` or `ninja` directly (i.e. `ninja all test` instead of `cmake --build . -- all test`).

### Build options

You may want to add `-jN` (where N is amount of threads you want to run) option to build commands, because default for `make` is to run single-threaded and `ninja` tends to use too much threads which eat up your RAM (may vary).

### Building

@abstr_code_section 
