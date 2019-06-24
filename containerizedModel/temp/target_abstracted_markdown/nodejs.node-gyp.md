# `node-gyp` \- Node.js native addon build tool

`node-gyp` is a cross-platform command-line tool written in Node.js for compiling native addon modules for Node.js. It bundles the @abstr_hyperlink project used by the Chromium team and takes away the pain of dealing with the various differences in build platforms.

Multiple target versions of Node.js are supported (i.e. `@abstr_number . @abstr_number`, ..., `@abstr_number`, `@abstr_number`, `@abstr_number`, etc.), regardless of what version of Node.js is actually installed on your system (`node-gyp` downloads the necessary development files or headers for the target version).

## Features

  * Easy to use, consistent interface
  * Same commands to build your module on every platform
  * Supports multiple target versions of Node.js



## Installation

You can install with `npm`:

@abstr_code_section 

You will also need to install:

### On Unix

  * `python` (`v @abstr_number . @abstr_number` recommended, `v @abstr_number .x.x` is __ _not_ __ supported)
  * `make`
  * A proper C/C++ compiler toolchain, like @abstr_hyperlink 



### On macOS

  * `python` (`v @abstr_number . @abstr_number` recommended, `v @abstr_number .x.x` is __ _not_ __ supported) (already installed on macOS)
  * @abstr_hyperlink 
    * You also need to install the `Command Line Tools` via Xcode. You can find this under the menu `Xcode -> Preferences -> Locations` (or by running `xcode-select --install` in your Terminal) 
      * This step will install `gcc` and the related toolchain containing `make`



### On Windows

#### Option @abstr_number

Install all the required tools and configurations using Microsoft's @abstr_hyperlink using `npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe (run as Administrator).

#### Option @abstr_number

Install tools and configuration manually: * Install Visual C++ Build Environment: @abstr_hyperlink (using "Visual C++ build tools" workload) or @abstr_hyperlink (using the "Desktop development with C++" workload) * Install @abstr_hyperlink (`v @abstr_number .x.x` is not supported), and run `npm config set python python @abstr_number . @abstr_number` (or see below for further instructions on specifying the proper Python version and path.) * Launch cmd, `npm config set msvs_version @abstr_number`

If the above steps didn't work for you, please visit @abstr_hyperlink for additional tips.

To target native ARM @abstr_number Node.js on Windows @abstr_number on ARM, add the components "Visual C++ compilers and libraries for ARM @abstr_number " and "Visual C++ ATL for ARM @abstr_number ".

### Configuring Python Dependency

If you have multiple Python versions installed, you can identify which Python version `node-gyp` uses by setting the `--python` variable:

@abstr_code_section 

If `node-gyp` is called by way of `npm`, _and_ you have multiple versions of Python installed, then you can set `npm`'s 'python' config key to the appropriate value:

@abstr_code_section 

## How to Use

To compile your native addon, first go to its root directory:

@abstr_code_section 

The next step is to generate the appropriate project build files for the current platform. Use `configure` for that:

@abstr_code_section 

Auto-detection fails for Visual C++ Build Tools @abstr_number , so `--msvs_version= @abstr_number` needs to be added (not needed when run by npm as configured above): @abstr_code_section 

__Note__: The `configure` step looks for a `binding.gyp` file in the current directory to process. See below for instructions on creating a `binding.gyp` file.

Now you will have either a `Makefile` (on Unix platforms) or a `vcxproj` file (on Windows) in the `build/` directory. Next, invoke the `build` command:

@abstr_code_section 

Now you have your compiled `.node` bindings file! The compiled bindings end up in `build/Debug/` or `build/Release/`, depending on the build mode. At this point, you can require the `.node` file with Node.js and run your tests!

__Note:__ To create a _Debug_ build of the bindings file, pass the `--debug` (or `-d`) switch when running either the `configure`, `build` or `rebuild` commands.

## The `binding.gyp` file

A `binding.gyp` file describes the configuration to build your module, in a JSON-like format. This file gets placed in the root of your package, alongside `package.json`.

A barebones `gyp` file appropriate for building a Node.js addon could look like:

@abstr_code_section 

Some additional resources for addons and writing `gyp` files:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Commands

`node-gyp` responds to the following commands:

| **Command** | **Description** |:--------------|:--------------------------------------------------------------- | `help` | Shows the help dialog | `build` | Invokes `make`/`msbuild.exe` and builds the native addon | `clean` | Removes the `build` directory if it exists | `configure` | Generates project build files for the current platform | `rebuild` | Runs `clean`, `configure` and `build` all in a row | `install` | Installs Node.js header files for the given version | `list` | Lists the currently installed Node.js header versions | `remove` | Removes the Node.js header files for the given version

## Command Options

`node-gyp` accepts the following command options:

| **Command** | **Description** |:----------------------------------|:------------------------------------------ | `-j n`, `--jobs n` | Run `make` in parallel. The value `max` will use all available CPU cores | `--target=v @abstr_number . @abstr_number . @abstr_number` | Node.js version to build for (default is `process.version`) | `--silly`, `--loglevel=silly` | Log all progress to console | `--verbose`, `--loglevel=verbose` | Log most progress to console | `--silent`, `--loglevel=silent` | Don't log anything to console | `debug`, `--debug` | Make Debug build (default is `Release`) | `--release`, `--no-debug` | Make Release build | `-C $dir`, `--directory=$dir` | Run command in different directory | `--make=$make` | Override `make` command (e.g. `gmake`) | `--thin=yes` | Enable thin static libraries | `--arch=$arch` | Set target architecture (e.g. ia @abstr_number ) | `--tarball=$path` | Get headers from a local tarball | `--devdir=$path` | SDK download directory (default is OS cache directory) | `--ensure` | Don't reinstall headers if already present | `--dist-url=$url` | Download header tarball from custom URL | `--proxy=$url` | Set HTTP proxy for downloading header tarball | `--cafile=$cafile` | Override default CA chain (to download tarball) | `--nodedir=$path` | Set the path to the node source code | `--python=$path` | Set path to the Python @abstr_number binary | `--msvs_version=$version` | Set Visual Studio version (Windows only) | `--solution=$solution` | Set Visual Studio Solution version (Windows only)

## Configuration

### Environment variables

Use the form `npm_config_OPTION_NAME` for any of the command options listed above (dashes in option names should be replaced by underscores).

For example, to set `devdir` equal to `/tmp/.gyp`, you would:

Run this on Unix:

@abstr_code_section 

Or this on Windows:

@abstr_code_section 

### `npm` configuration

Use the form `OPTION_NAME` for any of the command options listed above.

For example, to set `devdir` equal to `/tmp/.gyp`, you would run:

@abstr_code_section 

**Note:** Configuration set via `npm` will only be used when `node-gyp` is run via `npm`, not when `node-gyp` is run directly.

## License

`node-gyp` is available under the MIT license. See the LICENSE file for details.
