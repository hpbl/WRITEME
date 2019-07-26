@abstr_image 

@abstr_image 

Autofac is an @abstr_hyperlink for Microsoft .NET. It manages the dependencies between classes so that **applications stay easy to change as they grow** in size and complexity. This is achieved by treating regular .NET classes as _@abstr_hyperlink_.

@abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Get Packages

You can get Autofac by @abstr_hyperlink . If you're feeling adventurous, @abstr_hyperlink .

@abstr_hyperlink .

## Get Help

**Need help with Autofac?** We have @abstr_hyperlink as well as @abstr_hyperlink . We're ready to answer your questions on @abstr_hyperlink or check out the @abstr_hyperlink .

## Get Started

Our @abstr_hyperlink tutorial walks you through integrating Autofac with a simple application and gives you some starting points for learning more.

Super-duper quick start:

@abstr_hyperlink and then build the component container.

```C# var builder = new ContainerBuilder();

builder.Register(c => new TaskController(c.Resolve())); builder.RegisterType(); builder.RegisterInstance(new TaskController()); builder.RegisterAssemblyTypes(controllerAssembly);

var container = builder.Build(); @abstr_code_section C# var taskController = container.Resolve(); ```

There is a growing number of @abstr_hyperlink that make using Autofac with your application a snap. Support for several popular frameworks is also available through the "Extras" packages.

**@abstr_hyperlink**

## Project

Autofac is licensed under the MIT license, so you can comfortably use it in commercial applications (we still love @abstr_hyperlink though).

**File issues in the repo with the associated feature/code.**

  * @abstr_hyperlink - Core dependency resolution and common functions (this repo).
  * @abstr_hyperlink - Multitenant DI support for ASP.NET Core applications.
  * @abstr_hyperlink - JSON/XML file-based configuration support.
  * @abstr_hyperlink - .NET Core integration for Autofac.
  * @abstr_hyperlink - Dynamic aggregate service implementation generation.
  * @abstr_hyperlink - Metadata scanning/filtering through attributes.
  * @abstr_hyperlink - Common Service Locator implementation backed by Autofac.
  * @abstr_hyperlink - RIA/domain services support.
  * @abstr_hyperlink - Decorators and interceptors.
  * @abstr_hyperlink - Enterprise Library @abstr_number configuration support.
  * @abstr_hyperlink - FakeItEasy mocking framework integration.
  * @abstr_hyperlink - Moq mocking framework integration.
  * @abstr_hyperlink - MvvmCross integration.
  * @abstr_hyperlink - NHibernate integration.
  * @abstr_hyperlink - MEF catalog integration.
  * @abstr_hyperlink - Multitenant dependency resolution support.
  * @abstr_hyperlink - Multitenant WCF service hosting.
  * @abstr_hyperlink - ASP.NET MVC integration.
  * @abstr_hyperlink - OWIN support for ASP.NET MVC.
  * @abstr_hyperlink - Core OWIN support - shared middleware for request lifetime integration.
  * @abstr_hyperlink - Application integration for Service Fabric services.
  * @abstr_hyperlink - Application integration for SignalR.
  * @abstr_hyperlink - WCF service hosting.
  * @abstr_hyperlink - ASP.NET web forms integration.
  * @abstr_hyperlink - Application integration for Web API.
  * @abstr_hyperlink - OWIN support for Web API.



## Contributing / Pull Requests

Refer to the @abstr_hyperlink for setting up and building Autofac source.
