# .NET Core Libraries (CoreFX)

@abstr_hyperlink 

This repo contains the library implementation (called "CoreFX") for .NET Core. It includes System.Collections, System.IO, System.Xml, and many other components. The corresponding @abstr_hyperlink (called "CoreCLR") contains the runtime implementation for .NET Core. It includes RyuJIT, the .NET GC, and many other components. Runtime-specific library code ( @abstr_hyperlink ) lives in the CoreCLR repo. It needs to be built and versioned in tandem with the runtime. The rest of CoreFX is agnostic of runtime-implementation and can be run on any compatible .NET runtime (e.g. @abstr_hyperlink ).

## .NET Core

Official Starting Page: https://dotnet.microsoft.com/

  * @abstr_hyperlink (with VS, VS Code, command-line CLI) 
    * @abstr_hyperlink 
    * @abstr_hyperlink (Get Started, Tutorials, Porting from .NET Framework, API reference, ...)
    * @abstr_hyperlink 
    * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (and why some APIs will be left out)



## How to Engage, Contribute and Provide Feedback

Some of the best ways to contribute are to try things out, file bugs, join in design conversations, and fix issues.

  * @abstr_hyperlink 
  * If you have a question or idea, @abstr_hyperlink .



If you are having issues with the "full" .NET Framework (also called "Desktop"), the best way to file a bug is the @abstr_hyperlink tool, which is integrated with the @abstr_hyperlink ; or through @abstr_hyperlink if you have a contract.

### Issue Guide

This section is **in progress** here: @abstr_hyperlink (feel free to make it better - it's easy-to-edit wiki with RW permissions to everyone!)

Each issue area has one or more Microsoft owners, who are @abstr_hyperlink .

### Contributing Guide

This section is **in progress** here: @abstr_hyperlink (feel free to make it better - it's easy-to-edit wiki with RW permissions to everyone!)

### Useful Links

  * @abstr_hyperlink / @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (incl. APIs from daily builds and API usage info)
  * @abstr_hyperlink - useful when writing /// comments



### Community

  * General .NET OSS discussions: @abstr_hyperlink 
  * Chat with other community members @abstr_hyperlink 



This project has adopted the code of conduct defined by the @abstr_hyperlink to clarify expected behavior in our community. For more information, see the @abstr_hyperlink .

### Reporting security issues and security bugs

Security issues and bugs should be reported privately, via email, to the Microsoft Security Response Center (MSRC) @abstr_hyperlink . You should receive a response within @abstr_number hours. If for some reason you do not, please follow up via email to ensure we received your original message. Further information, including the MSRC PGP key, can be found in the @abstr_hyperlink .

Also see info about related @abstr_hyperlink .

## License

.NET Core (including the corefx repo) is licensed under the MIT license.

## .NET Foundation

.NET Core is a @abstr_hyperlink project.

There are many .NET related projects on GitHub.

  * @abstr_hyperlink - links to @abstr_number s of .NET projects, from Microsoft and the community.
  * @abstr_hyperlink - the best place to start learning about ASP.NET Core.



## CoreFX Project

### Daily Builds

Daily builds of .NET Core components are published to dotnet-blob feed (https://dotnetfeed.blob.core.windows.net/dotnet-core/index.json). The latest version number of each library can be seen in that feed. Currently, there is no website to visualize the contents of the feed, so in order to do so, you have to use a NuGet feed explorer, like Visual Studio.

Note: See officially supported @abstr_hyperlink .
