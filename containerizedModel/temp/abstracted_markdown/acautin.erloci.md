# erloci - An Erlang wrapper for the Oracle Call Interface

### Compiling

We assume you have @abstr_hyperlink somewhere on your path. Rebar will take care of the Erlang and C++ sources. `rebar compile` Please check the rebar manual for how to add erloci as a dependency to your project.

### @abstr_number d party dependencies

#### Threadpool

The threadpool code (threadpool.cpp/h) is developed by Mathias Brossard mathias@brossard.org. His threadpool library is hosted at https://github.com/mbrossard/threadpool. This library is unused (not linked) in a Windows environment. For an easier installation process we include the required threadpool files in the erloci repo. So this is NOT a dependency you have to resolve by yourself.

#### Oracle Call Interface (OCI)

OCI provides a high performance, native 'C' language based interface to the Oracle Database. There is no ODBC layer between your application and the database. Since we don't want to distribute the Oracle Code you MUST download the OCI Packages (basic and devel) from the Oracle Website: http://www.oracle.com/technetwork/database/features/instant-client/index- @abstr_number .html.

In order to successfully compile and link 'erloci' you must set the variables `"CXXFLAGS"` and `"DRV_LDFLAGS"` in rebar.config. 

In our case we just created a folder 'lib' containing symlinks pointing to the downloaded libraries and header files.

##### Mac OSX directory structure

@abstr_code_section 

##### manually installing the OCI libraries system wide (Linux)

Since the OCI libraries do not come as RPMs or DEBs that you can install with your package manager of choice, as well as the downloaded library doesn't provide a script (e.g. Makefile) to install it system wide you have to install it by yourself. However this is not required, you can always put the extracted library files into `LD_LIBRARY_PATH`. So if you really need this, here is the way to go:

@abstr_number . Create the file 'oci.pc' in /usr/lib/pkgconfig (if not present) @abstr_number . Copy the library to an appropriate place (e.g. /usr/lib/oracle/) @abstr_number . Put the following lines in oci.pci. You may need to modify the path and other info as seem fit for your system

@abstr_code_section 

#### Compile ERLOCI in Windows

Navigate to the Git repo path of ERLOCI from a Visual Studio Command Prompt and run the following: `rebar.bat compile -C rebar.config.win`

Please refer to @abstr_hyperlink for further details on how to build `rebar` or `rebar.bat` in Windows.

### Usage

@abstr_code_section 

### TODOs

@abstr_number . Better session and pool monitoring @abstr_number . Log handling @abstr_number . Improve testing
