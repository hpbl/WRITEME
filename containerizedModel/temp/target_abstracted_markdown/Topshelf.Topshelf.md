# Topshelf - An easy service hosting framework for building Windows services using .NET

Topshelf is a framework for hosting services written using the .NET framework. The creation of services is simplified, allowing developers to create a simple console application that can be installed as a service using Topshelf. The reason for this is simple: It is far easier to debug a console application than a service. And once the application is tested and ready for production, Topshelf makes it easy to install the application as a service.

### Develop build

@abstr_hyperlink 

# LICENSE

Apache @abstr_number . @abstr_number - see LICENSE

# INFO

## Getting started with Topshelf

Get started in four simple steps!

Step @abstr_number (get the bits):
    

The easiest way to get Topshelf in your project is to use NuGet.

### Mailing List

@abstr_hyperlink 

### Contributing

@abstr_number . Clone @abstr_number . Branch @abstr_number . Make changes @abstr_number . Push @abstr_number . Make a pull request

### Source

@abstr_number . Clone the source down to your machine. `git clone git://github.com/Topshelf/Topshelf.git` @abstr_number . **Important:** Run `build.bat` in order to generate the SolutionVersion.cs file which is otherwise missing. * You must have git on the path in order to do this. (Right click on `Computer` > `Advanced System Settings`, `Advanced` (tab) > `Environment Variables...` > Append the git executable's directory at the end of the PATH environment variable. @abstr_number . Edit with Visual Studio @abstr_number or alternatively edit and run `build.bat`. @abstr_number . Topshelf uses the .NET Framework v @abstr_number . @abstr_number . @abstr_number .

#### Editing in Visual Studio

@abstr_number . Run `build.bat` in the root folder. @abstr_number . Set Visual Studio Tools -> Options -> Text Editor -> All Languages -> Tabs to use "Tab Size" = @abstr_number , "Indent Size" = @abstr_number , and "Insert Spaces" @abstr_number . Double-click/open the .sln file.

### Deploying TopShelf with Azure DevOps

The @abstr_hyperlink Azure DevOps extension supports TopShelf deployments to a group of target machines or a deployment group target.

# REQUIREMENTS

To run the build, a Visual Studio @abstr_number compatible environment should be setup.

# CREDITS

Logo Design by @abstr_hyperlink 

Copyright @abstr_number - @abstr_number Travis Smith, Chris Patterson, Dru Sellers, Henrik Feldt et al. All rights reserved
