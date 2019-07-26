# GitHub Extension for Visual Studio

## Notices

### If you are having issues with the installer, please read

If you need to upgrade, downgrade, or uninstall the extension, and are having problems doing so, refer to this issue: https://github.com/github/VisualStudio/issues/ @abstr_number which details common problems and solutions when using the installer.

### The location of the submodules has changed as of @abstr_number - @abstr_number - @abstr_number

If you have an existing clone, make sure to run `git submodule sync` to update your local clone with the new locations for the submodules.

## About

The GitHub Extension for Visual Studio provides GitHub integration in Visual Studio @abstr_number and newer. Most of the extension UI lives in the Team Explorer pane, which is available from the View menu.

Official builds of this extension are available at @abstr_hyperlink .

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink 

## Documentation

Visit the @abstr_hyperlink for details on how to use the features in the GitHub Extension for Visual Studio.

## Build requirements

  * Visual Studio @abstr_number ( @abstr_number . @abstr_number . @abstr_number )+
  * Visual Studio SDK
  * The built VSIX will work with Visual Studio @abstr_number or newer



## Build

Clone the repository and its submodules in a git GUI client or via the command line:

@abstr_code_section 

Open the `GitHubVS.sln` solution with Visual Studio @abstr_number +. To be able to use the GitHub API, you'll need to:

  * @abstr_hyperlink in your profile.
  * Open src/GitHub.Api/ApiClientConfiguration_User.cs and fill out the clientId/clientSecret fields for your application. **Note this has recently changed location, so you may need to re-do this**



Build using Visual Studio @abstr_number or:

@abstr_code_section 

Install in live (non-Experimental) instances of Visual Studio @abstr_number and @abstr_number :

@abstr_code_section 

Note, the script will only install in one instance of Visual Studio @abstr_number (Enterprise, Professional or Community).

## Build Flavors

The following can be executed via `cmd.exe`.

To build and install a `Debug` configuration VSIX: @abstr_code_section 

To build and install a `Release` configuration VSIX: @abstr_code_section 

## Logs

Logs can be viewed at the following location:

`%LOCALAPPDATA%\GitHubVisualStudio\extension.log`

## Troubleshooting

If you have issues building with failures similar to:

> "The type or namespace name does not exist..."

or

> "Unable to find project... Check that the project reference is valid and that the project file exists."*

Close Visual Studio and run the following command to update submodules and clean your environment.

@abstr_code_section 

## More information

  * Andreia Gaita's @abstr_hyperlink at Codemania @abstr_number about this extension.



## Contributing

Visit the Contributor Guidelines for details on how to contribute as well as the Contributor Covenant Code of Conduct for details on how to participate.

## Copyright

Copyright @abstr_number - @abstr_number GitHub, Inc.

Licensed under the MIT License
