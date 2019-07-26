# winsw: Windows service wrapper in less restrictive license

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

WinSW is an executable binary, which can be used to wrap and manage a custom process as a Windows service. Once you download the installation package, you can rename `winsw.exe` to any name, e.g. `myService.exe`.

### Why?

See the project manifest.

### Download

Starting from WinSW `@abstr_number .x`, the releases are being hosted on @abstr_hyperlink and @abstr_hyperlink .

Due to historical reasons, the project also uses @abstr_hyperlink as a secondary source. Binaries are available @abstr_hyperlink . 

The executables in all sources are @abstr_hyperlink , which are being signed by randomly generated keys. Do not rely on such strong names for security (as well as on other strong names as it recommended by Microsoft). They provide a unique identity only.

### Usage

WinSW is being managed by configuration files: Main XML Configuration file and EXE Config file.

Your renamed `winsw.exe` binary also accepts the following commands:

  * `install` to install the service to Windows Service Controller. This command requires some preliminary steps described in the Installation Guide.
  * `uninstall` to uninstall the service. The opposite operation of above.
  * `start` to start the service. The service must have already been installed.
  * `stop` to stop the service.
  * `restart` to restart the service. If the service is not currently running, this command acts like `start`.
  * `status` to check the current status of the service. 
    * This command prints one line to the console.
    * `NonExistent` indicates the service is not currently installed
    * `Started` to indicate the service is currently running
    * `Stopped` to indicate that the service is installed but not currently running.



### Supported .NET versions

#### WinSW @abstr_number .x

WinSW `@abstr_number .x` offers two executables, which declare .NET Frameworks `@abstr_number . @abstr_number` and `@abstr_number . @abstr_number` as targets. More executables can be added on-demand. Please create an issue if you need such executables.

#### WinSW @abstr_number .x

WinSW `@abstr_number .x` Executable is being built with a .NET Framework `@abstr_number . @abstr_number` target, and by defaut it will work only for .NET Framework versions below `@abstr_number . @abstr_number`. On the other hand, the code is known to be compatible with .NET Framework `@abstr_number . @abstr_number` and above. It is possible to declare the support of this framework via the `exe.config` file. See the Installation Guide for more details.

### Documentation

User documentation:

  * Installation Guide - Describes the installation process for different systems and .NET versions
  * Release notes
  * Configuration: 
    * Main XML Configuration file
    * EXE Configuration File
    * Logging and Error Reporting
    * Extensions
  * Use-cases: 
    * Self-restarting services
    * Deferred File Operations
  * Configuration Management: 
    * Puppet Forge Module



Developer documentation:

  * Developer Guide



### Release lines

#### WinSW @abstr_number .x

This is a new baseline of WinSW with several major changes: * Major documentation rework and update * New executable package targeting the .NET Framework `@abstr_number . @abstr_number`. .NET Framework `@abstr_number . @abstr_number` is still supported. * Extension engine, which allows extending the wrapper's behavior. And a couple of extensions for it (Shared Directory Mapper, Runaway Process Killer) * New release hosting: GitHub and NuGet * Migration of the logging subsystem to Apache log @abstr_number net * Bugfixes

See the full changelog in the release notes.

The version `@abstr_number .x` is **fully compatible** with the `@abstr_number .x` configuration file format, hence the upgrade procedure just requires replacement of the executable file.

#### WinSW @abstr_number .x

This is an old baseline of WinSW. Currently it is in the maintenance-only state. New versions with fixes may be released on-demand.
