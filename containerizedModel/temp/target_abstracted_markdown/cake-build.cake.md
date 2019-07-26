# Cake

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink 

Cake (C# Make) is a build automation system with a C# DSL to do things like compiling code, copy files/folders, running unit tests, compress files and build NuGet packages.

## Continuous integration

| Build server | Platform | Build status | Integration tests | |-----------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------| | Azure Pipelines | MacOS | @abstr_hyperlink | | | Azure Pipelines | Windows | @abstr_hyperlink | | | Azure Pipelines | Debian | @abstr_hyperlink | | | Azure Pipelines | Fedora | @abstr_hyperlink | | | Azure Pipelines | Centos | @abstr_hyperlink | | | Azure Pipelines | Ubuntu | @abstr_hyperlink | | | AppVeyor | Windows | @abstr_hyperlink | @abstr_hyperlink | | Travis | Linux / MacOS | @abstr_hyperlink | | | TeamCity | Windows | @abstr_hyperlink | | | Bitrise | MacOS | @abstr_hyperlink | @abstr_image | | Bitrise | Linux | @abstr_hyperlink | @abstr_image | | MyGet Build Services | Windows | @abstr_hyperlink | | | Bitbucket Pipelines | Linux | @abstr_hyperlink | | | GitLab | Linux | @abstr_hyperlink | |

## Code Coverage

@abstr_hyperlink 

## Table of Contents

@abstr_number . @abstr_hyperlink @abstr_number . @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink @abstr_number . @abstr_hyperlink @abstr_number . @abstr_hyperlink @abstr_number . @abstr_hyperlink 

## Documentation

You can read the latest documentation at @abstr_hyperlink .

## Example

This example downloads the Cake bootstrapper and executes a simple build script. The bootstrapper is used to bootstrap Cake in a simple way and is not in required in any way to execute build scripts. If you prefer to invoke the Cake executable yourself, @abstr_hyperlink .

This example is also available on our homepage: @abstr_hyperlink 

### @abstr_number . Install the Cake bootstrapper

The bootstrapper is used to download Cake and the tools required by the build script.

##### Windows

@abstr_code_section 

##### Linux

@abstr_code_section 

##### OS X

@abstr_code_section 

### @abstr_number . Create a Cake script

Add a cake script called `build.cake` to the same location as the bootstrapper script that you downloaded.

@abstr_code_section 

### @abstr_number . Run it!

##### Windows

@abstr_code_section 

##### Linux / OS X

@abstr_code_section 

## Contributing

So you’re thinking about contributing to Cake? Great! It’s **really** appreciated.

Make sure you've read the @abstr_hyperlink before sending that epic pull request. You'll also need to sign the @abstr_hyperlink (CLA) for anything other than a trivial change. **NOTE:** The .NET Foundation CLA Bot will provide a link to this CLA within the PR that you submit if it is deemed as required.

  * Fork the repository.
  * Create a branch to work in.
  * Make your feature addition or bug fix.
  * Don't forget the unit tests.
  * Send a pull request.



## Get in touch

@abstr_hyperlink 

@abstr_hyperlink 

## License

Copyright © .NET Foundation, Patrik Svensson, Mattias Karlsson, Gary Ewan Park, Alistair Chapman, Martin Björkström, Dave Glick, Pascal Berger and contributors.

Cake is provided as-is under the MIT license. For more information see @abstr_hyperlink .

  * For Roslyn, see https://github.com/dotnet/roslyn/blob/master/License.txt
  * For Autofac, see https://github.com/autofac/Autofac/blob/master/LICENSE
  * For NuGet.Core, see https://github.com/NuGet/Home/blob/dev/LICENSE.txt



## Thanks

A big thank you has to go to @abstr_hyperlink who provide each of the Cake Developers with an @abstr_hyperlink for @abstr_hyperlink that helps with the development of Cake.

The Cake Team would also like to say thank you to the guys at @abstr_hyperlink for their support in providing a Professional Subscription which allows us to continue to push all of our pre-release editions of Cake NuGet packages for early consumption by the Cake Community.

## Code of Conduct

This project has adopted the code of conduct defined by the @abstr_hyperlink to clarify expected behavior in our community. For more information see the @abstr_hyperlink .

## Contribution License Agreement

By signing the @abstr_hyperlink , the community is free to use your contribution to .NET Foundation projects.

## .NET Foundation

This project is supported by the @abstr_hyperlink .
