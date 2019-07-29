# Scylla

## Quick-start

To get the build going quickly, Scylla offers a frozen toolchain which would build and run Scylla using a pre-configured Docker image. Using the frozen toolchain will also isolate all of the installed dependencies in a Docker container. Assuming you have met the toolchain prerequisites, which is running Docker in user mode, building and running is as easy as:

@abstr_code_section 

Please see HACKING.md for detailed information on building and developing Scylla.

**Note** : GCC >= @abstr_number . @abstr_number . @abstr_number is required to compile Scylla.

## Running Scylla

  * Run Scylla @abstr_code_section 

  * run Scylla with one CPU and ./tmp as data directory

@abstr_code_section 

  * For more run options: @abstr_code_section 




## Building Fedora RPM

As a pre-requisite, you need to install @abstr_hyperlink on your machine:

@abstr_code_section 

Then, to build an RPM, run:

@abstr_code_section 

The built RPM is stored in `/var/lib/mock/<configuration>/result` directory. For example, on Fedora @abstr_number mock reports the following:

@abstr_code_section 

## Building Fedora-based Docker image

Build a Docker image with:

@abstr_code_section 

Run the image with:

@abstr_code_section 

## Contributing to Scylla

Hacking howto Guidelines for contributing
