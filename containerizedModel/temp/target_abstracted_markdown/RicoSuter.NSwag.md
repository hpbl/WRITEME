## NSwag: The Swagger/OpenAPI toolchain for .NET, ASP.NET Core and TypeScript

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**@abstr_hyperlink**

NSwag is a Swagger/OpenAPI @abstr_number . @abstr_number and @abstr_number . @abstr_number toolchain for .NET, .NET Core, Web API, ASP.NET Core, TypeScript (jQuery, AngularJS, Angular @abstr_number +, Aurelia, KnockoutJS and more) and other platforms, written in C#. The @abstr_hyperlink uses JSON and JSON Schema to describe a RESTful web API. The NSwag project provides tools to generate OpenAPI specifications from existing ASP.NET Web API controllers and client code from these OpenAPI specifications. 

The project combines the functionality of Swashbuckle (OpenAPI/Swagger generation) and AutoRest (client generation) in one toolchain. This way a lot of incompatibilites can be avoided and features which are not well described by the OpenAPI specification or JSON Schema are better supported (e.g. @abstr_hyperlink , @abstr_hyperlink and reference handling). The NSwag project heavily uses @abstr_hyperlink for JSON Schema handling and C#/TypeScript class/interface generation. 

@abstr_image 

The project is developed and maintained by @abstr_hyperlink and other contributors.

**Features:**

  * @abstr_hyperlink 
  * Serve the specs via ASP.NET (Core) middleware, optionally with @abstr_hyperlink or @abstr_hyperlink 
  * Generate C# or TypeScript clients/proxies from these specs
  * Everything can be automated via CLI (distributed via NuGet tool or build target; or NPM)
  * CLI configured via JSON file or NSwagStudio Windows UI



**Ways to use the toolchain:**

  * Simple to use Windows GUI, @abstr_hyperlink 
  * By using the @abstr_hyperlink (also serves the @abstr_hyperlink ) (recommended)
  * Via @abstr_hyperlink (Windows, Mac and Linux support through @abstr_hyperlink or .NET Core console binary, also via @abstr_hyperlink )
  * In your C# code, via @abstr_hyperlink 
  * In your @abstr_hyperlink 
  * With @abstr_hyperlink tags in your .csproj (preview)
  * In your @abstr_hyperlink (external project, might not use latest NSwag version)



**Tutorials:**

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



**OpenAPI/Swagger Generators:**

  * ASP.NET Web API assembly to OpenAPI (supports .NET Core) 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
      * Generates an OpenAPI specification for Web API controllers
    * @abstr_hyperlink 
      * Generates an OpenAPI specification for controllers in an external Web API assembly
      * @abstr_hyperlink 
    * @abstr_hyperlink 
      * Generates an OpenAPI specification containing only types from .NET assemblies



**Code Generators:**

  * **CSharp Client**
    * @abstr_hyperlink 
      * Generates C# clients from an OpenAPI specification
      * Generates POCOs or classes implementing @abstr_hyperlink supporting DTOs
      * The generated clients can be used with full .NET, .NET Core, Xamarin and .NET Standard @abstr_number . @abstr_number in general
  * **CSharp Controllers** (contract first/schema first development) 
    * @abstr_hyperlink 
      * Generates Web API Controllers based on a OpenAPI specification (ASP.NET Web API and ASP.NET Core)
  * **TypeScript Client**
    * @abstr_hyperlink 
      * Generates TypeScript clients from a OpenAPI specification
      * Available templates/supported libraries: 
        * JQuery with Callbacks, `JQueryCallbacks`
        * JQuery with promises `JQueryPromises`
        * AngularJS using $http, `AngularJS`
        * Angular (v @abstr_number +) using the http service, `Angular`
        * window.fetch API and ES @abstr_number promises, `Fetch` (use this template in your React/Redux app)
        * Aurelia using the HttpClient from aurelia-fetch-client, `Aurelia` (based on the Fetch template)
        * `Axios` (preview)



**Downloads**

  * @abstr_hyperlink (Windows Desktop application)
  * @abstr_hyperlink 
  * @abstr_hyperlink (command line tools and NSwagStudio binaries)



**NPM Packages**

  * @abstr_hyperlink : Command line tools (.NET and .NET Core) distributed as NPM package



**NuGet Packages**

Specification:

  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number / @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number ): 
    * The OpenAPI/Swagger reader and writer classes, see @abstr_hyperlink 
  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number / @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number ): 
    * Extensions to read and write YAML OpenAPI specifications
  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number / @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number ): 
    * Attributes to decorate Web API controllers to control the OpenAPI generation



OpenAPI generation:

  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number / @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number ): 
    * Classes to generate OpenAPI specifications
  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number / @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number ): 
    * Classes to generate OpenAPI specifications from Web API controllers, see @abstr_hyperlink 
  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number / @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number . @abstr_number ): 
    * (Experimental) Classes to generate OpenAPI specifications from ASP.NET Core MVC controllers using the ApiExplorer



Code generation:

  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number / @abstr_number . @abstr_number / .NET @abstr_number . @abstr_number . @abstr_number ): 
    * Base classes to generate clients from OpenAPI specifications
  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number . @abstr_number ): 
    * Classes to generate C# clients from OpenAPI specifications, see @abstr_hyperlink and @abstr_hyperlink 
  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number . @abstr_number ): 
    * Classes to generate TypeScript clients from OpenAPI specifications, see @abstr_hyperlink 



ASP.NET and ASP.NET Core:

  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number / @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number . @abstr_number +): 
  * **@abstr_hyperlink** (.NET @abstr_number . @abstr_number +): 
    * @abstr_hyperlink for serving OpenAPI specifications and Swagger UI
  * **@abstr_hyperlink** (.NET @abstr_number . @abstr_number +): 
    * ASP.NET Web API filter which serializes exceptions ( @abstr_hyperlink )



Frontends:

  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number / @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number . @abstr_number ): 
    * Classes to load assemblies in an isolated AppDomain and generate OpenAPI specs from Web API controllers
  * **@abstr_hyperlink** (.NET Standard @abstr_number . @abstr_number / @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number . @abstr_number +): 
    * Commands for the command line tool implementations and UI
  * **@abstr_hyperlink** (MSBuild .targets): 
    * Adds a .targets file to your Visual Studio project, so that you can run the NSwag command line tool in an MSBuild target, see @abstr_hyperlink 
  * **@abstr_hyperlink** (.NET Core @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number and @abstr_number . @abstr_number ): 
    * Command line tool for .NET Core (`dotnet nswag`)
    * `<DotNetCliToolReference Include="NSwag.ConsoleCore" Version="..." />`
  * **@abstr_hyperlink** (Chocolatey, Windows): 
    * Package to install the NSwagStudio and command line tools via Chocolatey



CI NuGet Feed: https://www.myget.org/gallery/nswag-ci

The NuGet packages may require the **Microsoft.NETCore.Portable.Compatibility** package on .NET Core/UWP targets (if mscorlib is missing). 

@abstr_image 

### Usage in C&# @abstr_number ;

To register the @abstr_hyperlink to generate a OpenAPI spec and render the UI, register NSwag in `Startup.cs`: 

@abstr_code_section 

The following code shows how to read an OpenAPI/Swagger specification and generate C# client classes to call the described web services: 

@abstr_code_section 

Check out the @abstr_hyperlink for more information.

### NSwagStudio

The generators can be used in a comfortable and simple Windows GUI called @abstr_hyperlink : 

@abstr_hyperlink 

## Sponsors, support and consulting

Companies or individuals which paid a substantial amount for implementing, fixing issues, support or sponsoring are listed below. Thank you for supporting this project! You can also become a financial contributor

  * Project: @abstr_hyperlink 
  * Main contributor (Rico Suter) directly: @abstr_hyperlink 



Please contact @abstr_hyperlink for paid consulting and support. 

@abstr_hyperlink 

@abstr_hyperlink 

Sponsors:

  * @abstr_hyperlink 



## Contributors

This project exists thanks to all the people who contribute. [Contribute]. @abstr_hyperlink 

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/NSwag#backer)]

@abstr_hyperlink 

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/NSwag#sponsor)]

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 
