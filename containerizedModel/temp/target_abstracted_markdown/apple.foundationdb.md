@abstr_image 

FoundationDB is a distributed database designed to handle large volumes of structured data across clusters of commodity servers. It organizes data as an ordered key-value store and employs ACID transactions for all operations. It is especially well-suited for read/write workloads but also has excellent performance for write-intensive workloads. Users interact with the database using API language binding.

To learn more about FoundationDB, visit @abstr_hyperlink 

## Documentation

Documentation can be found online at @abstr_hyperlink . The documentation covers details of API usage, background information on design philosophy, and extensive usage examples. Docs are built from the source in this repo.

## Forums

@abstr_hyperlink are the home for most of the discussion and communication about the FoundationDB project. We welcome your participation! We want FoundationDB to be a great project to be a part of and, as part of that, have established a Code of Conduct to establish what constitutes permissible modes of interaction.

## Contributing

Contributing to FoundationDB can be in contributions to the code base, sharing your experience and insights in the community on the Forums, or contributing to projects that make use of FoundationDB. Please see the contributing guide for more specifics.

## Getting Started

### Binary downloads

Developers interested in using the FoundationDB store for an application can get started easily by downloading and installing a binary package. Please see the @abstr_hyperlink for a list of available packages.

### Compiling from source

Developers on an OS for which there is no binary package, or who would like to start hacking on the code, can get started by compiling from source.

Currently there are two build systems: a collection of Makefiles and a CMake-based build system. Both of them should currently work for most users, and CMake should be the preferred choice as it will eventually become the only build system available.

## CMake

To build with CMake, generally the following is required (works on Linux and Mac OS - for Windows see below):

@abstr_number . Check out this repository. @abstr_number . Install cmake Version @abstr_number . @abstr_number or higher @abstr_hyperlink @abstr_number . Download version @abstr_number . @abstr_number of @abstr_hyperlink . @abstr_number . Unpack boost (you don't need to compile it) @abstr_number . Install @abstr_hyperlink . @abstr_number . Install a @abstr_hyperlink . FoundationDB currently builds with Java @abstr_number . @abstr_number . Create a build directory (you can have the build directory anywhere you like): `mkdir build` @abstr_number . `cd build` @abstr_number . `cmake -DBOOST_ROOT=<PATH_TO_BOOST> <PATH_TO_FOUNDATIONDB_DIRECTORY>` @abstr_number . `make`

CMake will try to find its dependencies. However, for LibreSSL this can be often problematic (especially if OpenSSL is installed as well). For that we recommend passing the argument `-DLibreSSL_ROOT` to cmake. So, for example, if you LibreSSL is installed under /usr/local/libressl- @abstr_number . @abstr_number . @abstr_number , you should call cmake like this:

@abstr_code_section 

FoundationDB will build just fine without LibreSSL, however, the resulting binaries won't support TLS connections.

### Language Bindings

The language bindings that are supported by cmake will have a corresponding `README.md` file in the corresponding `bindings/lang` directory.

Generally, cmake will build all language bindings for which it can find all necessary dependencies. After each successful cmake run, cmake will tell you which language bindings it is going to build.

### Generating `compile_commands.json`

CMake can build a compilation database for you. However, the default generated one is not too useful as it operates on the generated files. When running make, the build system will create another `compile_commands.json` file in the source directory. This can than be used for tools like @abstr_hyperlink , @abstr_hyperlink , etc. This way you can get code-completion and code navigation in flow. It is not yet perfect (it will show a few errors) but we are constantly working on improving the development experience.

CMake will not produce a `compile_commands.json`, you must pass `-DCMAKE_EXPORT_COMPILE_COMMANDS=ON`. This also enables the target `processed_compile_commands`, which rewrites `compile_commands.json` to describe the actor compiler source file, not the post-processed output files, and places the output file in the source directory. This file should then be picked up automatically by any tooling.

Note that if building inside of the `foundationdb/foundationdb-build` docker image, the resulting paths will still be incorrect and require manual fixing. One will wish to re-run `cmake` with `-DCMAKE_EXPORT_COMPILE_COMMANDS=OFF` to prevent it from reverting the manual changes.

### Using IDEs

CMake has built in support for a number of popular IDEs. However, because flow files are precompiled with the actor compiler, an IDE will not be very useful as a user will only be presented with the generated code - which is not what she wants to edit and get IDE features for.

The good news is, that it is possible to generate project files for editing flow with a supported IDE. There is a CMake option called `OPEN_FOR_IDE` which will generate a project which can be opened in an IDE for editing. You won't be able to build this project, but you will be able to edit the files and get most edit and navigation features your IDE supports.

For example, if you want to use XCode to make changes to FoundationDB you can create a XCode-project with the following command:

@abstr_code_section 

You should create a second build-directory which you will use for building (probably with make or ninja) and debugging.

### Linux

There are no special requirements for Linux. A docker image can be pulled from `foundationdb/foundationdb-build` that has all of FoundationDB's dependencies pre-installed, and is what the CI uses to build and test PRs.

If you want to create a package you have to tell cmake what platform it is for. And then you can build by simply calling `cpack`. So for debian, call:

@abstr_code_section 

For RPM simply replace `DEB` with `RPM`.

### MacOS

The build under MacOS will work the same way as on Linux. To get LibreSSL and boost you can use @abstr_hyperlink . LibreSSL will not be installed in `/usr/local` instead it will stay in `/usr/local/Cellar`. So the cmake command will look something like this:

@abstr_code_section 

To generate a installable package, you have to call CMake with the corresponding arguments and then use cpack to generate the package:

@abstr_code_section 

### Windows

Under Windows, the build instructions are very similar, with the main difference that Visual Studio is used to compile.

@abstr_number . Install Visual Studio @abstr_number (Community Edition is tested) @abstr_number . Install cmake Version @abstr_number . @abstr_number or higher @abstr_hyperlink @abstr_number . Download version @abstr_number . @abstr_number of @abstr_hyperlink . @abstr_number . Unpack boost (you don't need to compile it) @abstr_number . Install @abstr_hyperlink . @abstr_number . Install a @abstr_hyperlink . FoundationDB currently builds with Java @abstr_number . @abstr_number . Set `JAVA_HOME` to the unpacked location and JAVA_COMPILE to `$JAVA_HOME/bin/javac`. @abstr_number . Install @abstr_hyperlink if it is not already installed by Visual Studio. @abstr_number . (Optional) Install @abstr_hyperlink . Without it Visual Studio won't build the Windows installer. @abstr_number . Create a build directory (you can have the build directory anywhere you like): `mkdir build` @abstr_number . `cd build` @abstr_number . `cmake -G "Visual Studio @abstr_number @abstr_number Win @abstr_number " -DBOOST_ROOT=<PATH_TO_BOOST> <PATH_TO_FOUNDATIONDB_DIRECTORY>` @abstr_number . This should succeed. In which case you can build using msbuild: `msbuild /p:Configuration=Release foundationdb.sln`. You can also open the resulting solution in Visual Studio and compile from there. However, be aware that using Visual Studio for development is currently not supported as Visual Studio will only know about the generated files. `msbuild` is located at `c:\Program Files (x @abstr_number )\MSBuild\ @abstr_number . @abstr_number \Bin\MSBuild.exe` for Visual Studio @abstr_number .

If you want TLS support to be enabled under Windows you currently have to build and install LibreSSL yourself as the newer LibreSSL versions are not provided for download from the LibreSSL homepage. To build LibreSSL:

@abstr_number . Download and unpack libressl (>= @abstr_number . @abstr_number . @abstr_number ) @abstr_number . `cd libressl- @abstr_number . @abstr_number . @abstr_number` @abstr_number . `mkdir build` @abstr_number . `cd build` @abstr_number . `cmake -G "Visual Studio @abstr_number @abstr_number Win @abstr_number " ..` @abstr_number . Open the generated `LibreSSL.sln` in Visual Studio as administrator (this is necessary for the install) @abstr_number . Build the `INSTALL` project in `Release` mode

This will install LibreSSL under `C:\Program Files\LibreSSL`. After that `cmake` will automatically find it and build with TLS support.

If you installed WIX before running `cmake` you should find the `FDBInstaller.msi` in your build directory under `packaging/msi`. 

## Makefile

#### MacOS

@abstr_number . Check out this repo on your Mac. @abstr_number . Install the Xcode command-line tools. @abstr_number . Download version @abstr_number . @abstr_number . @abstr_number of @abstr_hyperlink . @abstr_number . Set the `BOOSTDIR` environment variable to the location containing this boost installation. @abstr_number . Install @abstr_hyperlink . @abstr_number . Install a @abstr_hyperlink . FoundationDB currently builds with Java @abstr_number . @abstr_number . Navigate to the directory where you checked out the foundationdb repo. @abstr_number . Run `make`.

#### Linux

@abstr_number . Install @abstr_hyperlink . @abstr_number . Check out the foundationdb repo. @abstr_number . Run the docker image interactively @abstr_hyperlink with the directory containing the foundationdb repo mounted @abstr_hyperlink .
    
    
     @abstr_code_section
    

@abstr_number . Run `$ scl enable devtoolset- @abstr_number python @abstr_number rh-python @abstr_number rh-ruby @abstr_number -- bash` within the running container. This enables a more modern compiler, which is required to build FoundationDB. @abstr_number . Navigate to the container's mounted directory which contains the foundationdb repo.
    
    
     @abstr_code_section
    

@abstr_number . Run `make`.

This will build the fdbserver binary and the python bindings. If you want to build our other bindings, you will need to install a runtime for the language whose binding you want to build. Each binding has an `.mk` file which provides specific targets for that binding.
