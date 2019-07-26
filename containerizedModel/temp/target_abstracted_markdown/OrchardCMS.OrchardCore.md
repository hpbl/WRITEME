# Orchard Core

Orchard Core consists of two distinct projects:

  * __Orchard Core Framework__: An application framework for building modular, multi-tenant applications on ASP.NET Core.
  * __Orchard Core CMS__: A Web Content Management System (CMS) built on top of the Orchard Core Framework.



@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Build Status

Stable (master): 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Nightly (dev): 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Status

### Beta @abstr_number

The software is complete enough for external testing -- that is, by groups outside the organization or community that developed the software. Beta software is usually feature complete, but may have known limitations or bugs. Betas are either closed (private) and limited to a specific set of users, or they can be open to the general public.

Here is a more detailed @abstr_hyperlink .

## Getting Started

  * Clone the repository using the command `git clone https://github.com/OrchardCMS/OrchardCore.git` and checkout the `dev` branch. 



### Command line

  * Install the latest versions (current) for both Runtime and SDK of .NET Core from this page https://www.microsoft.com/net/download/core
  * Navigate to `D:\OrchardCore\src\OrchardCore.Cms.Web` or wherever your respective folder is on the command line in Administrator mode.
  * Call `dotnet run`.
  * Then open the `http://localhost: @abstr_number` URL in your browser.



### Visual Studio

  * Download Visual Studio @abstr_number or @abstr_number (any edition) from https://www.visualstudio.com/downloads/
  * Open `OrchardCore.sln` and wait for Visual Studio to restore all Nuget packages
  * Ensure `OrchardCore.Cms.Web` is the startup project and run it



### Docker

  * Run `docker run --name orchardcms orchardproject/orchardcore-cms-linux:latest`



Docker images and parameters can be found at https://hub.docker.com/u/orchardproject/

### Documentation

The documentation can be accessed here: @abstr_hyperlink 
