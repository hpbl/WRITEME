# Microsoft eShopOnWeb ASP.NET Core Reference Application

Sample ASP.NET Core reference application, powered by Microsoft, demonstrating a single-process (monolithic) application architecture and deployment model. If you're new to .NET development, read the @abstr_hyperlink guide.

This reference application is meant to support the free .PDF download ebook: @abstr_hyperlink , updated to _*ASP.NET Core @abstr_number . @abstr_number *_. @abstr_hyperlink .

You can also read the book in online pages at the .NET docs here: https://docs.microsoft.com/en-us/dotnet/standard/modern-web-apps-azure-architecture/

@abstr_hyperlink 

The **eShopOnWeb** sample is related to the @abstr_hyperlink sample application which, in that case, focuses on a microservices/containers-based application architecture. However, **eShopOnWeb** is much simpler in regards to its current functionality and focuses on traditional Web Application Development with a single deployment.

The goal for this sample is to demonstrate some of the principles and patterns described in the @abstr_hyperlink . It is not meant to be an eCommerce reference application, and as such it does not implement many features that would be obvious and/or essential to a real eCommerce application.

> ### VERSIONS
> 
> #### The `master` branch is currently running ASP.NET Core @abstr_number . @abstr_number .
> 
> #### Older versions are tagged.

## Topics (eBook TOC)

  * Introduction
  * Characteristics of Modern Web Applications
  * Choosing Between Traditional Web Apps and SPAs
  * Architectural Principles
  * Common Web Application Architectures
  * Common Client Side Technologies
  * Developing ASP.NET Core MVC Apps
  * Working with Data in ASP.NET Core Apps
  * Testing ASP.NET Core MVC Apps
  * Development Process for Azure-Hosted ASP.NET Core Apps
  * Azure Hosting Recommendations for ASP.NET Core Web Apps



## Running the sample

After cloning or downloading the sample you should be able to run it using an In Memory database immediately.

If you wish to use the sample with a persistent database, you will need to run its Entity Framework Core migrations before you will be able to run the app, and update the `ConfigureServices` method in `Startup.cs` (see below).

You can also run the samples in Docker (see below).

### Configuring the sample to use SQL Server

@abstr_number . Update `Startup.cs`'s `ConfigureDevelopmentServices` method as follows:

@abstr_code_section 

@abstr_number . Ensure your connection strings in `appsettings.json` point to a local SQL Server instance.

@abstr_number . Open a command prompt in the Web folder and execute the following commands:

@abstr_code_section 

These commands will create two separate databases, one for the store's catalog data and shopping cart information, and one for the app's user credentials and identity data.

@abstr_number . Run the application.

The first time you run the application, it will seed both databases with data such that you should see products in the store, and you should be able to log in using the demouser@microsoft.com account.

Note: If you need to create migrations, you can use these commands:

@abstr_code_section 

## Running the sample using Docker

You can run the Web sample by running these commands from the root folder (where the .sln file is located):

@abstr_code_section 

You should be able to make requests to localhost: @abstr_number once these commands complete.

You can also run the Web application by using the instructions located in its `Dockerfile` file in the root of the project. Again, run these commands from the root of the solution (where the .sln file is located).
