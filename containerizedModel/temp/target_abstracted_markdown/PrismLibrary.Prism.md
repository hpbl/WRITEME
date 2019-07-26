# Prism

Prism is a framework for building loosely coupled, maintainable, and testable XAML applications in WPF, and Xamarin Forms. Separate releases are available for each platform and those will be developed on independent timelines. Prism provides an implementation of a collection of design patterns that are helpful in writing well-structured and maintainable XAML applications, including MVVM, dependency injection, commands, EventAggregator, and others. Prism's core functionality is a shared code base in both a netstandard @abstr_number . @abstr_number & net @abstr_number Library. Those things that need to be platform specific are implemented in the respective libraries for the target platform. Prism also provides great integration of these patterns with the target platform. For example, Prism for Xamarin Forms allows you to use an abstraction for navigation that is unit testable, but that layers on top of the platform concepts and APIs for navigation so that you can fully leverage what the platform itself has to offer, but done in the MVVM way.

Prism @abstr_number is a fully open source version of the Prism guidance @abstr_hyperlink . The core team members were all part of the P&P team that developed Prism @abstr_number through @abstr_number , and the effort has now been turned over to the open source community to keep it alive and thriving to support the .NET community. There are thousands of companies who have adopted previous versions of Prism for WPF, Silverlight, and Windows Runtime, and we hope they will continue to move along with us as we continue to evolve and enhance the framework to keep pace with current platform capabilities and requirements.

## Build Status

| | Status | | -------- | ------ | | Full Build | @abstr_hyperlink | | Prism.Core | @abstr_hyperlink | | Prism.Wpf | @abstr_hyperlink | | Prism.Forms | @abstr_hyperlink |

### Sandbox Build Status

| Sandbox | Status | |---------|:------:| | WPF | @abstr_hyperlink | | Xamarin iOS | @abstr_hyperlink | | Xamarin Android | @abstr_hyperlink |

## Support

  * Documentation is maintained in @abstr_hyperlink under /docs and can be found in a readable format on @abstr_hyperlink .
  * For general questions and support, post your questions on @abstr_hyperlink .
  * You can enter bugs and feature requests in our @abstr_hyperlink .



## Help Support Prism

As most of you know, it takes a lot of time and effort for our small team to manage and maintain Prism in our spare time. Even though Prism is open source and hosted on GitHub, there are a number of costs associated with maintaining a project such as Prism. If you would like to help support us, the easiest thing you can do is become a Patron and watch our Pluralsight courses on Prism.

By becoming a @abstr_hyperlink to the Prism Library, you will receive a number of benefits depending on your level of support.

**Supporter** \- $ @abstr_number + per month

  * Receive all Prism Library news and announcements, such as new release information and blogs posts.
  * Gives you access to our community Slack channel where you can ask questions and get help from the community and the Prism Library project maintainers (when available).



**Backer** \- $ @abstr_number + per month Everything in the Supporter plan plus:

  * A Prism sticker



**Generous Backer** \- $ @abstr_number + per month Everything in the Backer plan plus:

  * Video Tutorial request priority (topic acceptance not guaranteed)
  * Bragging rights!



**Bronze Sponsor** \- $ @abstr_number + per month Everything in the Generous Backer plan plus:

  * Your name or company logo (small) will be put in sponsors.md in the Prism repository.



**Silver Sponsor** \- $ @abstr_number + per month Everything in the Generous Backer plan plus:

  * Your name or company logo (medium) will be put in the sponsors.md in the Prism repository.
  * Your name or company logo (medium) will be put on the repository ReadMe.md



**Gold Sponsor** \- $ @abstr_number + per month Everything in the Generous Backer plan plus:

  * Your name or company logo (large) will be put in the sponsors.md in the Prism repository.
  * Your name or company logo (large) will be put on the repository ReadMe.md
  * Your name or company logo (large) on the homepage of PrismLibrary.com
  * @abstr_number hour VIP support per month



**Platinum Sponsor** \- $ @abstr_number , @abstr_number + per month Everything in the Generous Backer plan plus:

  * Your name or company logo (large) will be put at the top of the sponsors.md in the Prism repository.
  * Your name or company logo (large) will be put on the repository ReadMe.md
  * Your name or company logo on the homepage of PrismLibrary.com
  * @abstr_number Sponsored Video Tutorial per month
  * @abstr_number hours VIP support per month



**Corporate Sponsor** \- $ @abstr_number , @abstr_number + per month Everything in the Platinum Sponsor plan plus:

  * @abstr_number days onsite training for your company (every six months)
  * Dedicated VIP Support



## Videos & Training

By watching our courses, not only do you help support the project financially, but you might also learn something along the way. We believe this is a win-win for everyone.

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



We appreciate your support.

### Twitch

Both Brian and Dan are streaming live on a regular basis covering topics for WPF and Xamarin.Forms developers. Be sure to follow and subscribe to find out when they go live.

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## NuGet Packages

Official Prism releases are available on NuGet. Prism also has a MyGet feed which will be updated with each merged PR. If you want to take advantage of a new feature as soon as it's merged into the code base, or if there is a critical bug you need fixed we invite you to try the packages on this feed. Our feed is a public feed in the MyGet Gallery.

Simply add `https://www.myget.org/F/prism/api/v @abstr_number /index.json` as a package source to either Visual Studio or Visual Studio for Mac.

### Core Packages

These are the base packages for each platform, together with the Prism's Core assembly as a cross-platform PCL.

| Platform | Assembly | Package | NuGet | MyGet | | -------- | -------- | ------- | ------- | ----- | | PCL | Prism.dll | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | WPF | Prism.Wpf.dll | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | Xamarin.Forms | Prism.Forms.dll | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | 

### Container-specific packages

Each supported IoC container has its own package assisting in the setup and usage of that container together with Prism. The assembly is named using this convention: Prism. _Container.Platform_.dll, e.g. **Prism.Unity.Wpf.dll**. Starting with version @abstr_number . @abstr_number , Prism is moving to separate packages for each platform. Be sure to install the package for the Container and the Platform of your choice.

#### WPF

| Package | NuGet | MyGet | |---------|-------|-------| | @abstr_hyperlink * | @abstr_hyperlink | see notes | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | @abstr_hyperlink * | @abstr_hyperlink | see notes | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | @abstr_hyperlink | @abstr_hyperlink | see notes | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

#### Xamarin Forms

| Package | NuGet | MyGet | |---------|-------|-------| | @abstr_hyperlink * | @abstr_hyperlink | see notes | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

#### Package Notices

  * Autofac will be removed following the @abstr_number . @abstr_number release due to it's inability to support Prism Modularity.
  * MEF is no longer supported in Prism @abstr_number as it is not truly a DI Container and lacks the performance that developers deserve.
  * StructureMap has reached EOL as a container. As a result the Prism team will no longer be continuing to provide updates to the StructureMap package moving forward.
  * For developers using Unity with Prism @abstr_number , take note that the new Unity maintainer has made major breaking changes. This includes changing namespaces and the package structure. These changes were NOT made by the Prism team nor do we have any control over it. When upgrading to Prism @abstr_number you will need to uninstall the existing Unity package as we now reference the Unity.Container NuGet.



@abstr_image 

A detailed overview of each assembly per package is available here.

## Prism Template Pack

Prism now integrates with Visual Studio and Xamarin Studio to enable a highly productive developer workflow for creating WPF, UWP, and native iOS and Android applications using Xamarin.Forms. Jump start your Prism apps with code snippets, item templates, and project templates for your IDE of choice.

### Visual Studio Gallery

The Prism Template Pack is available on the @abstr_hyperlink . To install, just go to Visual Studio -> Tools -> Extensions and Updates... then search for **Prism** in the online gallery:

@abstr_image 

### Visual Studio for Mac Addin

The Prism Template Studio and Developer Toolkit is available from the Visual Studio Mac Extensions Gallery.

## Plugins

There are certain things that cannot be added directly into Prism for various reasons. To handle these common tasks such as supporting PopupPage's in Xamarin Forms, there are Prism Plugins. You can find a number of Plugins available on NuGet from our maintainer @abstr_hyperlink .

  * @abstr_hyperlink (Forms Only)
  * @abstr_hyperlink (Works on all Platforms) 
    * Adds support for Syslog, Loggly, Graylog, Application Insights, & App Center
  * @abstr_hyperlink (Forms Only)
  * @abstr_hyperlink 
    * Adds advanced Container Registration abstractions
    * Adds DryIoc ContainerExtension with support for Microsoft.DependencyInjection.Extensions & Splat. Uses a singleton pattern to allow initialization from a native platform
    * Provides an extended PrismApplication with additional error handling and platform specifics support for Prism.Forms



## Samples

We have both a development sandbox (frequently changing) and stable samples for using Prism with WPF, UWP and Xamarin Forms. An overview of the samples can be found here.

## Contributing

We strongly encourage you to get involved and help us evolve the code base.

  * You can see what our expectations are for pull requests @abstr_hyperlink .



### .NET Foundation

This project is part of the @abstr_hyperlink .
