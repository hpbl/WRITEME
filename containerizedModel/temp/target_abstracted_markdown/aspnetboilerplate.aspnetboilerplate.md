# ASP.NET Boilerplate

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## What is ABP?

ASP.NET Boilerplate is a general purpose **application framework** specially designed for new modern web applications. It uses already **familiar tools** and implements **best practices** around them to provide you a **SOLID development experience**.

ASP.NET Boilerplate works with the latest **ASP.NET Core** & **EF Core** but also supports ASP.NET MVC @abstr_number .x  & EF @abstr_number .x as well.

###### Modular Design

Designed to be @abstr_hyperlink and **extensible** , ABP provides the infrastructure to build your own modules, too.

###### Multi-Tenancy

**SaaS** applications made easy! Integrated @abstr_hyperlink from database to UI.

###### Well-Documented

Comprehensive @abstr_hyperlink and quick start tutorials.

## How It Works

Don't Repeat Yourself! ASP.NET Boilerplate automates common software development tasks by convention. You focus on your business code!

@abstr_image 

See the @abstr_hyperlink document for more details.

## Layered Architecture

ABP provides a layered architectural model based on **Domain Driven Design** and provides a **SOLID** model for your application.

@abstr_image 

See the @abstr_hyperlink document for more details.

## Nuget Packages

ASP.NET Boilerplate is distributed as NuGet packages.

|Package|Status| |:------|:-----:| |Abp| @abstr_hyperlink | |Abp.AspNetCore| @abstr_hyperlink | |Abp.Web.Common| @abstr_hyperlink | |Abp.Web| @abstr_hyperlink | |Abp.Web.Mvc| @abstr_hyperlink | |Abp.Web.Api| @abstr_hyperlink | |Abp.Web.Api.OData| @abstr_hyperlink | |Abp.Web.Resources| @abstr_hyperlink | |Abp.Web.SignalR| @abstr_hyperlink | |Abp.Owin| @abstr_hyperlink | |Abp.EntityFramework.Common| @abstr_hyperlink | |Abp.EntityFramework| @abstr_hyperlink | |Abp.EntityFramework.GraphDiff| @abstr_hyperlink | |Abp.EntityFrameworkCore| @abstr_hyperlink | |Abp.NHibernate| @abstr_hyperlink | |Abp.Dapper| @abstr_hyperlink | |Abp.FluentMigrator| @abstr_hyperlink | |Abp.AspNetCore| @abstr_hyperlink | |Abp.AspNetCore.SignalR| @abstr_hyperlink | |Abp.AutoMapper| @abstr_hyperlink | |Abp.HangFire| @abstr_hyperlink | |Abp.HangFire.AspNetCore| @abstr_hyperlink | |Abp.Castle.Log @abstr_number Net| @abstr_hyperlink | |Abp.RedisCache| @abstr_hyperlink | |Abp.RedisCache.ProtoBuf| @abstr_hyperlink | |Abp.MailKit| @abstr_hyperlink | |Abp.Quartz| @abstr_hyperlink | |Abp.TestBase| @abstr_hyperlink | |Abp.AspNetCore.TestBase| @abstr_hyperlink |

# Module Zero

## What is 'Module Zero'?

This is an @abstr_hyperlink module integrated with Microsoft @abstr_hyperlink .

Implements abstract concepts of ASP.NET Boilerplate framework:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Also adds common enterprise application features:

  * **@abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink** management for applications that require authentication and authorization.
  * **@abstr_hyperlink and @abstr_hyperlink** management for SaaS applications.
  * **@abstr_hyperlink** management.
  * **@abstr_hyperlink text** management.
  * **@abstr_hyperlink** integration.



Module Zero packages define entities and implement base domain logic for these concepts.

## NuGet Packages

### ASP.NET Core Identity Packages

Packages integrated into @abstr_hyperlink and @abstr_hyperlink (supports .NET Standard).

|Package|Status| |:------|:-----:| |Abp.ZeroCore| @abstr_hyperlink | |Abp.ZeroCore.EntityFrameworkCore| @abstr_hyperlink | |Abp.ZeroCore.IdentityServer @abstr_number | @abstr_hyperlink | |Abp.ZeroCore.IdentityServer @abstr_number .EntityFrameworkCore| @abstr_hyperlink |

### ASP.NET Identity Packages

Packages integrated into @abstr_hyperlink @abstr_number .x.

|Package|Status| |:------|:-----:| |Abp.Zero| @abstr_hyperlink | |Abp.Zero.Owin| @abstr_hyperlink | |Abp.Zero.AspNetCore| @abstr_hyperlink | |Abp.Zero.EntityFramework| @abstr_hyperlink |

### Shared Packages

Shared packages between the Abp.ZeroCore.* and Abp.Zero.* packages.

|Package|Status| |:------|:-----:| |Abp.Zero.Common| @abstr_hyperlink | |Abp.Zero.Ldap| @abstr_hyperlink |

## Startup Templates

You can create your project from startup templates to easily start with Module Zero:

  * @abstr_hyperlink based startup project.
  * @abstr_hyperlink based startup project.
  * @abstr_hyperlink based startup project.



A screenshot of the ASP.NET Core based startup template:

@abstr_image 

### Docker Image

You can directly run the startup template on your computer as a docker container:

`@abstr_code_section`

See https://hub.docker.com/r/volosoft/abp-template/ for more info.

## Links

  * Web site & Documentation: https://aspnetboilerplate.com
  * Questions & Answers: https://stackoverflow.com/questions/tagged/aspnetboilerplate?sort=newest



## License

MIT.
