* * *

page_type: sample products: \- office- @abstr_number languages: \- csharp extensions: contentType: sdks

##  createdDate: @abstr_number / @abstr_number / @abstr_number @abstr_number : @abstr_number : @abstr_number AM

# Open XML SDK

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

The Open XML SDK provides tools for working with Office Word, Excel, and PowerPoint documents. It supports scenarios such as:

  * High-performance generation of word-processing documents, spreadsheets, and presentations.
  * Populating content in Word files from an XML data source.
  * Splitting up (shredding) a Word or PowerPoint file into multiple files, and combining multiple Word/PowerPoint files into a single file.
  * Extraction of data from Excel documents.
  * Searching and replacing content in Word/PowerPoint using regular expressions.
  * Updating cached data and embedded spreadsheets for charts in Word/PowerPoint.
  * Document modification, such as adding, updating, and removing content and metadata.



## Table of Contents

  * Releases 
    * Supported platforms
    * WindowsBase or System.IO.Packaging
    * How to install the NuGet package
  * If You Have Problems
  * Known Issues
  * Documentation
  * Build Instructions
  * To build the Open XML SDK
  * Related tools
  * Code of Conduct



## Releases

The official release NuGet packages for Open XML SDK are @abstr_hyperlink .

The NuGet package for the latest builds of the Open XML SDK is available as a custom feed on MyGet. You can trust this package source, since the custom feed is locked and only this project feeds into the source. Stable releases here will be mirrored onto NuGet and will be identical.

For latests changes, please see the changelog

## Supported platforms

This library supports many platforms. There are builds for .NET @abstr_number . @abstr_number , .NET @abstr_number . @abstr_number , .NET @abstr_number . @abstr_number , and .NET Standard @abstr_number . @abstr_number . The following platforms are currently supported:

| Platform | Minimum Version | |-----------------|-----------------| | .NET Framework | @abstr_number . @abstr_number | | .NET Core | @abstr_number . @abstr_number | | UWP | @abstr_number . @abstr_number | | Mono | @abstr_number . @abstr_number | | Xamarin.iOS | @abstr_number . @abstr_number | | Xamarin.Mac | @abstr_number . @abstr_number | | Xamarin.Android | @abstr_number . @abstr_number |

## WindowsBase or System.IO.Packaging

There is a known issue in `WindowsBase` that causes crashes when handling large data sources. This is fixed in later versions of the library, based on the platform availability of the `System.IO.Packaging` package. When possible, we use this package instead of `WindowsBase`. This not only fixes the crash seen by some users, but is available cross platform. However, it is only available on .NET Standard @abstr_number . @abstr_number + and .NET Framework @abstr_number . @abstr_number +. For this reason, the NuGet package has multiple targets to bring in, when possible. The targets are determined by NuGet at installation and build time and are listed in the table below.

| Platform | System.IO.Packing Source | Tested by | | -------- | ------------------------ | ------------- | | .NET @abstr_number . @abstr_number | WindowsBase | N/A | | .NET @abstr_number . @abstr_number | WindowsBase | .NET @abstr_number . @abstr_number . @abstr_number | | .NET @abstr_number . @abstr_number | NuGet | .NET @abstr_number . @abstr_number | | .NET Standard | NuGet | .NET Core @abstr_number . @abstr_number |

Keep in mind, though, that the `System.IO.Packaging` on .NET @abstr_number . @abstr_number + is simply a facade over WindowsBase, and thus everything running on .NET @abstr_number . @abstr_number will use WindowsBase instead of the newer implementation.

## How to install the NuGet package

The package you want to install is DocumentFormat.OpenXml.

NuGet packages are available for @abstr_hyperlink or @abstr_hyperlink and follow @abstr_hyperlink .

The package feed or the package source is specified by the feed URL. Depending on your version of Visual Studio, choose the appropriate feed URL from the table below.

**Table @abstr_number :** The latest builds are available via a MyGet feed.

| Client | Feed URL | | ------ | -------- | | NuGet V @abstr_number (Visual Studio @abstr_number +) | @abstr_hyperlink | | NuGet V @abstr_number (Visual Studio @abstr_number +) | @abstr_hyperlink |

The `Install-Package` command considers the package source either via configuration or argument. Also, the package version can vary. For the latest version info, see the @abstr_hyperlink .

  * To specify the package source via a configuration option, see @abstr_hyperlink . Note that usually a NuGet.config file is placed in the directory and the configuration options are added there to ensure the sources are persisted in the version control.

@abstr_code_section 

  * To pass the feed URL as an argument, here is an example for Visual Studio @abstr_number and later.

@abstr_code_section 




**Note** : If you have trouble installing the package, try restarting Visual Studio. Package sources could be cached and changes you've made to any NuGet.config files may not be detected.

## If You Have Problems

If you want to report a problem (bug, behavior, build, distribution, feature request, etc...) with the SDK built by this repository, please feel free to post a new issue and someone will try to help.

If you have "how-to" questions please post to one of the following resources:

  * @abstr_hyperlink 
  * @abstr_hyperlink (tags: **openxml** or **openxml-sdk** )



## Known Issues

  * On .NET Core, zip packages do not have a way to stream data. Thus, the working set can explode in certain situations. This is a @abstr_hyperlink .
  * On .NET Framework, an `IsolatedStorageException` may be thrown under certain circumstances. This generally occurs when manipulating a large document in an environment with an AppDomain that does not have enough evidence. A sample with a workaround is available here.

**Note:** Once `System.IO.Packaging` on .NET Core has feature parity with `WindowsBase` (i.e. streaming support), we can investigate using the new .NET Core on .NET Framework.




## Documentation

The functionality of the specific classes in this version of the Open XML SDK is similar to version @abstr_number . @abstr_number , therefore the @abstr_hyperlink documentation available on MSDN is still accurate.

In addition to open sourcing of the SDK, Microsoft has opened up the conceptual documentation for public review / contributions. A copy of the documentation is available for you to edit and review @abstr_hyperlink .

## Build Instructions

This project uses the csproj format and the release versions of the tooling in Visual Studio @abstr_number . For more information on how to use this project type to build your project, see the @abstr_hyperlink . Other editors that support the latest .NET project files include Visual Studio Code, Visual Studio for Mac, or .NET CLI. See @abstr_hyperlink for details.

The project often requires the latest release of the C# compiler as many new features come on-line that greatly aid in ease of development. As of now, the C# @abstr_number . @abstr_number compiler is required (which was released in December @abstr_number ) and comes standard in Visual Studio @abstr_number Update @abstr_number , with other IDEs providing updates to the compiler, as well.

## To build the Open XML SDK

@abstr_number . Clone the @abstr_hyperlink repository. @abstr_number . Open the solution with an editor that supports the latest .NET project files. @abstr_number . Build the solution (using either Debug or Release configuration). @abstr_number . Run the Xunit tests to verify the installation.

If you want to use a command line approach:

@abstr_number . Go to the directory that contains the solution. @abstr_number . Run `dotnet restore` in the directory. @abstr_number . Run `dotnet test DocumentFormat.OpenXml.Tests` to run the tests. @abstr_number . Run `dotnet pack DocumentFormat.OpenXml` to generate a nupkg.

## Related tools

  * **Open XML Powertools** : This is available on in the @abstr_hyperlink repository on GitHub and provides example code and guidance for implementing a wide range of Open XML scenarios.



## Code of Conduct

This project has adopted the @abstr_hyperlink . For more information, see the @abstr_hyperlink or contact @abstr_hyperlink with any additional questions or comments.
