# Graph Engine - Open Source

| - | Windows Multi Targeting | Ubuntu @abstr_number . @abstr_number .NET Core | |:------:|:------:|:------:| |Build| @abstr_hyperlink | @abstr_hyperlink | |Tests|_|_| |Stress|_|_|

This repository contains the source code of @abstr_hyperlink and its graph query language -- @abstr_hyperlink (LIKQ).

Microsoft Graph Engine is a distributed in-memory data processing engine, underpinned by a strongly-typed in-memory key-value store and a general-purpose distributed computation engine.

@abstr_hyperlink is a versatile graph query language on top of Graph Engine that combines the capability of fast graph exploration with the flexibility of lambda expression. Server-side computations can be expressed in lambda expressions, embedded in LIKQ, and executed server side during graph traversal.

## How to Contribute

If you are interested in contributing to the code, please fork the repository and submit pull requests to the `master` branch.

Pull requests, issue reports, and suggestions are welcome.

Please submit bugs and feature requests as @abstr_hyperlink .

## Getting started with Graph Engine

### Downloads

**Recommended:** Install by searching for "Graph Engine" in the Visual Studio UI under `Tools` > `Extensions and Updates`

It can also be downloaded from @abstr_hyperlink .

NuGet packages @abstr_hyperlink and @abstr_hyperlink are available in the NuGet Gallery.

Graph Engine is regularly released with bug fixes and feature enhancements.

### Building on Windows

Install @abstr_hyperlink , making sure to include the following components:

  * .NET desktop development 
    * .NET Framework @abstr_number -- @abstr_number . @abstr_number development tools
  * Desktop development with C++ 
    * Windows @abstr_number SDK
    * Windows @abstr_number . @abstr_number SDK and UCRT SDK
  * Visual Studio extension development
  * `.NET Core SDK @abstr_number . @abstr_number` or above
  * cmake



@abstr_hyperlink and @abstr_hyperlink can also be installed using their standalone installers.

The Windows build will generate multi-targeting nuget packages for all the available modules. Run `tools/build.ps @abstr_number` with `powershell` to setup a workspace folder `build`, and build using `cmake`.

The Linux native assemblies will be automatically packaged (pre-built at `lib`), allowing the Windows build to also work for Linux `.Net Core`.

Nuget packages will be built and put at `build/GraphEngine**._version_.nupkg`. The folder `build/` will be registered as a local NuGet repository and the local package cache for `GraphEngine.**` will be cleared. After the packages are built, you can run `dotnet restore` to use the newly built package.

### Building on Linux

Install `libunwind @abstr_number`, `g++`, `cmake` and `libssl-dev`. For example, if you are using Ubuntu, run `sudo apt install libunwind @abstr_number g++ cmake libssl-dev`.

Install the `dotnet` package following @abstr_hyperlink .

Execute `tools/build.sh`.

The Windows native assemblies will be automatically packaged, so the Linux build will also work for Windows .Net Core.

**Because targeting`.Net Framework` is not supported** , the packages built on Linux are not equivalent to their Windows builds, and will only support `.Net Core`.

Nuget packages will be built and put at `build/GraphEngine**._version_.nupkg`. The folder `build/` will be registered as a local NuGet repository and the local package cache for `GraphEngine.Core` will be cleared. After the packages are built, you can run `dotnet restore` to use the newly built package.

**Note:** the build script is only tested for `Ubuntu @abstr_number . @abstr_number` and `Ubuntu @abstr_number . @abstr_number`.

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the MIT License.
