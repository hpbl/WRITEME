# Microsoft.Build (MSBuild)

The Microsoft Build Engine is a platform for building applications. This engine, which is also known as MSBuild, provides an XML schema for a project file that controls how the build platform processes and builds software. Visual Studio uses MSBuild, but MSBuild _does not_ depend on Visual Studio. By invoking msbuild.exe on your project or solution file, you can orchestrate and build products in environments where Visual Studio isn't installed.

For more information on MSBuild, see the @abstr_hyperlink on docs.microsoft.com.

### Build Status

The current development branch is `master`. Changes in `master` will go into a future update of MSBuild, which will release with Visual Studio @abstr_number . @abstr_number and .NET Core SDK @abstr_number . @abstr_number . @abstr_number .

@abstr_hyperlink 

We have forked for MSBuild @abstr_number . @abstr_number in the branch @abstr_hyperlink . Changes to that branch need special approval.

@abstr_hyperlink 

MSBuild @abstr_number . @abstr_number builds from the branch @abstr_hyperlink . Only high-priority bugfixes will be considered for servicing @abstr_number . @abstr_number .

@abstr_hyperlink 

MSBuild @abstr_number . @abstr_number builds from the branch @abstr_hyperlink . Only very-high-priority bugfixes will be considered for servicing @abstr_number . @abstr_number .

| Runtime\OS | Windows | Ubuntu @abstr_number . @abstr_number |Mac OS X| |:------|:------:|:------:|:------:| | **Full Framework** | @abstr_hyperlink | N/A | N/A | N/A | | **.NET Core** | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

### Source code

  * Clone the sources: `git clone https://github.com/Microsoft/msbuild.git`



## Building

### Building MSBuild with Visual Studio @abstr_number

For the full supported experience, you will need to have Visual Studio @abstr_number or higher.

To get started on _*Visual Studio @abstr_number *_ :

@abstr_number . @abstr_hyperlink . Select the following Workloads: \- _.NET desktop development_ \- _.NET Core cross-platform development_ @abstr_number . @abstr_hyperlink . @abstr_number . Clone the source code (see above). @abstr_number . Open a `Developer Command Prompt for VS @abstr_number` prompt. @abstr_number . Build the code using the `build.cmd` script at the root of the repo. This also restores packages needed to open the projects in Visual Studio. @abstr_number . Open `MSBuild.sln` or `MSBuild.Dev.sln` in Visual Studio @abstr_number .

Note: To produce a "bootstrap" build, run `.\build.cmd /p:CreateBootstrap=true`.

### Building MSBuild in Unix (Mac & Linux)

MSBuild can be run on Unix systems that support .NET Core. Set-up instructions can be viewed on the wiki: Building Testing and Debugging on .Net Core MSBuild

## Localization

You can turn on localized builds via the `/p:LocalizedBuild=true` command line argument. For more information on localized builds and how to make contributions to MSBuild's translations, see our localization documentation

## How to Engage, Contribute and Provide Feedback

This project has adopted the @abstr_hyperlink . For more information see the @abstr_hyperlink or contact @abstr_hyperlink with any additional questions or comments.

#### Getting Started

Before you contribute, please read through the contributing and developer guides to get an idea of what kinds of pull requests we will or won't accept.

  * Contributing Guide

  * **Developer Guide on:**

    * .Net Core
    * Full Framework
    * Mono



Looking for something to work on? This list of @abstr_hyperlink is a great place to start.

You are also encouraged to start a discussion by filing an issue or creating a gist.

### MSBuild Components

  * **MSBuild**. @abstr_hyperlink is the entrypoint for the Microsoft Build Engine (MSBuild.exe).

  * **Microsoft.Build**. The @abstr_hyperlink namespaces contain types that provide programmatic access to, and control of, the MSBuild engine.

  * **Microsoft.Build.Framework**. The @abstr_hyperlink namespace contains the types that define how tasks and loggers interact with the MSBuild engine. For additional information on this component, see our Microsoft.Build.Framework wiki page.

  * **Microsoft.Build.Tasks**. The @abstr_hyperlink namespace contains the implementation of all tasks shipping with MSBuild.

  * **Microsoft.Build.Utilities**. The @abstr_hyperlink namespace provides helper classes that you can use to create your own MSBuild loggers and tasks.




### License

MSBuild is licensed under the MIT license.
