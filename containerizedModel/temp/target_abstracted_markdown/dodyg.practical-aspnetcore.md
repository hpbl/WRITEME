# @abstr_number samples for ASP.NET Core @abstr_number . @abstr_number , @abstr_number . @abstr_number and @abstr_number . @abstr_number -preview- @abstr_number fundamentals (updated almost daily - except during Summer)

If you are studying ASP.NET Core, I am lurking on this **@abstr_hyperlink**.

## Welcome

The goal of this project is to enable .NET programmers to learn the new ASP.NET Core stack from the ground up directly from code. There is so much power in the underlying ASP.NET Core stack. Don't miss them!

I highly recommend using @abstr_hyperlink to play around with these samples but it is not required. You can use Visual Studio @abstr_number as well.

Note: If you encounter problem with downloading packages or Nuget, try the following command `nuget.exe locals -clear all`.

ASP.NET Core API Browser is also very @abstr_hyperlink . 

### Additional Sections

| Section | No. of Samples | .NET Core SDK Version | | ------- | ------- | ------- | | ASP.NET Core @abstr_number . @abstr_number | @abstr_number | @abstr_number . @abstr_number -preview- @abstr_number | | Blazor Server Side | @abstr_number | @abstr_number . @abstr_number -preview- @abstr_number | | Blazor Client Side (Web Assembly) | @abstr_number | @abstr_number . @abstr_number -preview- @abstr_number | | ASP.NET Core MVC | @abstr_number | @abstr_number . @abstr_number | | ASP.NET Core Razor Pages | @abstr_number | @abstr_number . @abstr_number | | ASP.NET Core SignalR | @abstr_number | @abstr_number . @abstr_number | | Security related samples | @abstr_number | @abstr_number . @abstr_number | | Orchard Core Framework | @abstr_number | @abstr_number . @abstr_number | | What's new in ASP.NET Core @abstr_number . @abstr_number | @abstr_number | @abstr_number . @abstr_number | | What's new in ASP.NET Core @abstr_number . @abstr_number | @abstr_number | @abstr_number . @abstr_number | | What's new in ASP.NET Core @abstr_number . @abstr_number | @abstr_number | Features introduced in @abstr_number . @abstr_number but samples run on @abstr_number . @abstr_number | | Foundational ASP.NET Core @abstr_number . @abstr_number Samples | @abstr_number | @abstr_number . @abstr_number |

## How to run these samples

To run these samples, simply open your command line console, go to each folder and execute `dotnet watch run`.

Most of the examples here uses `Microsoft.AspNetCore` package which is a package consisted of 

@abstr_code_section 

When an example requires packages that are not listed here, it will be added to the project file.

## Foundation ASP.NET Core @abstr_number . @abstr_number Samples

All these projects require the following dependencies

@abstr_code_section 

  * **Hello World ( @abstr_number )**

    * Hello World with reload

Setup your most basic web app and enable the change+refresh development experience. 

We are using `IApplicationBuilder Run`, an extension method for adding terminal middleware.

    * Startup class
    * Hello World with startup basic

This project contains all the available services available in Startup class constructor, `ConfigureServices` and `Configure` methods.

    * Hello World with custom startup class name

You don't have to call your startup class `Startup`. Any valid C# class will do.

    * Hello World with responding to multiple urls

Configure so that your web app responds to multiple urls.

    * Hello World with multiple startups

This project highlights the fact that you can create multiple Startup classes and choose them at start depending on your needs. 

    * Hello World with multiple startups using environment

This project highlights the fact that you can create multiple startup classes and choose them at start depending on your needs depending on your environment (You do have to name the startup class with Startup). 

    * Hello World with multiple Configure methods based on environment

This project demonstrates the ability to pick `Configure` method in a single Startup class based on environment.

    * Hello World with multiple ConfigureServices methods based on environment

This project demonstrates the ability to pick `ConfigureServices` method in a single Startup class based on environment.

    * Hello World with an implementation of IStartup interface

We are really getting into the weed of startup right now. This is an example on how to implement `IStartup` directly. 

    * Hello World without a startup class

Why? just because we can.

    * Hello world with IStartupFilter

Use `IStartupFilter` to configure your middleware. This is an advanced topic. @abstr_hyperlink tries at explaining `IStartupFilter`. I will add more samples so `IStartupFilter` can be clearer.

    * Show errors during startup

Show a detailed report on exceptions that happen during the startup phase of your web app. It is very useful during development.

    * Show Connection info

Enumerate the connection information of a HTTP request.

    * Environmental settings

Set your application environment to `Development` or `Production` or other mode directly from code. 

    * Console logging

Setup a basic logging in your app and show it to console.

We add the following dependencies `"Microsoft.Extensions.Logging": " @abstr_number . @abstr_number . @abstr_number "` and `"Microsoft.Extensions.Logging.Console": " @abstr_number . @abstr_number . @abstr_number " @abstr_code_section <appSettings> <add key="webpages:Version" value=" @abstr_number . @abstr_number . @abstr_number . @abstr_number " /> <add key="webpages:Enabled" value="false" /> </appSettings> `

On the other hand you can get unlimited nested elements and also attributes.

    * Configuration - XML file - Options

Read from XML file and use IOptions. It requires taking two new dependencies, `"Microsoft.Extensions.Configuration.Xml" : " @abstr_number . @abstr_number . @abstr_number "` and `"Microsoft.Extensions.Options.ConfigurationExtensions" : " @abstr_number . @abstr_number . @abstr_number "`.

  * **Localization and Globalization ( @abstr_number )**

This section is all about languages, culture, etc.

    * Localization

Shows the most basic use of localization using a resource file. This sample only supports French language (because we are fancy). It needs the following dependency `"Microsoft.AspNetCore.Localization": " @abstr_number . @abstr_number . @abstr_number "` and `"Microsoft.Extensions.Localization": " @abstr_number . @abstr_number . @abstr_number "`.

    * Localization - @abstr_number 

We build upon the previous sample and demonstrate how to switch request culture via query string using the built in `QueryStringRequestCultureProvider`. This sample supports English and French.

    * Localization - @abstr_number 

Demonstrate the difference between `Culture` and `UI Culture`.

    * Localization - @abstr_number 

Demonstrate how to switch request culture via cookie using the built in `CookieRequestCultureProvider`. This sample supports English and French.

    * Localization - @abstr_number 

Demonstrate using Portable Object (PO) files to support localization instead of the cumbersome resx file. This sample requires `OrchardCore.Localization.Core` package. This sample requires `ASPNET Core @abstr_number`.

    * Localization - @abstr_number 

This is a continuation of previous sample but with context, which allows the same translation key to return different strings.

  * **URL Redirect/Rewriting ( @abstr_number )**

This section explore the dark arts of URL Rewriting

    * Rewrite

Shows the most basic of URL rewriting which will **redirect** (returns @abstr_hyperlink ) anything to the home page "/". It requires an additional `"Microsoft.AspNetCore.Rewrite" : " @abstr_number . @abstr_number . @abstr_number -*"` dependency. 

If you have used routing yet, I recommend of checking out the routing examples.

    * Rewrite - @abstr_number 

**Redirect** (returns @abstr_hyperlink ) anything with an extension e.g. about-us.html or welcome.aspx to home page (/). It also shows how to capture the matched regex values.

    * Rewrite - @abstr_number 

**Rewrite** anything with an extension e.g. about-us.html or welcome.aspx to home page (/). It also shows how to capture the matched regex values.

    * Rewrite - @abstr_number 

**Permanent Redirect** (returns @abstr_hyperlink ) anything with an extension e.g. about-us.html or welcome.aspx to home page (/). It also shows how to capture the matched regex values.

    * Rewrite - @abstr_number 

Implement a custom redirect logic based on `IRule` implementation. Require additional dependency of `"Microsoft.AspNetCore.StaticFiles": " @abstr_number . @abstr_number . @abstr_number "` to serve images.

This custom redirection logic allows us to simply specify the image file names without worrying about their exact path e.g.'xx.jpg' and 'yy.png'.

    * Rewrite - @abstr_number 

Implement a custom redirect logic using lambda (similar functionality to Rewrite - @abstr_number ). Require additional dependency of `"Microsoft.AspNetCore.StaticFiles": " @abstr_number . @abstr_number . @abstr_number "` to serve images.

This custom redirection logic allows us to simply specify the image file names without worrying about their exact path e.g.'xx.jpg' and 'yy.png'.

  * **Compression ( @abstr_number )**

Enable the ability to compress ASP.NET Core responses. These samples takes a dependency of `Microsoft.AspNetCore.ResponseCompression": " @abstr_number . @abstr_number . @abstr_number`.

    * Default Gzip Output Compression 

Compress everything using the default Gzip compression.

_Everything_ means the following MIME output 

    * text/plain
    * text/css
    * application/javascript
    * text/html
    * application/xml
    * text/xml
    * application/json
    * text/json 
  * **Diagnostics( @abstr_number )**

These samples take a dependency of `"Microsoft.AspNetCore.Diagnostics":" @abstr_number . @abstr_number . @abstr_number "`. 

    * Welcome Page

Simply show a welcome page to indicate that the app is working properly. This sample does not use a startup class simply because it's just a one line code.

    * Developer Exception Page

Show any unhandled exception in a nicely formatted page with error details. Only use this in development environment!

    * Custom Global Exception Page

Use `IExceptionHandlerFeature` feature provided by `Microsoft.AspNetCore.Diagnostics.Abstractions` to create custom global exception page.

    * Custom Global Exception Page - @abstr_number 

Similar to the previous one except that that we use the custom error page defined in separate path.

    * Status Pages

Use `UseStatusCodePagesWithRedirects`. **Beware:** This extension method handles your @abstr_number xx return status code by redirecting it to a specific url. It will not handle your application exception in general (for this use `UseExceptionHandler` \- check previous samples).

    * Middleware Analysis

Here we go into the weeds of analysing middlewares in your request pipeline. This is a bit complicated. It requires the following packages:

    * `Microsoft.AspNetCore.MiddlewareAnalysis`
    * `Microsoft.Extensions.DiagnosticAdapter`
    * `Microsoft.Extensions.Logging.Console`
  * **Static Files( @abstr_number )**

This additional dependency is required to enable the functionality `"Microsoft.AspNetCore.StaticFiles": " @abstr_number . @abstr_number . @abstr_number "`. 

    * Serve static files

Simply serve static files (html, css, images, etc). 

There are two static files being served in this project, index.html and hello.css. They are stored under `wwwroot` folder, which is the default folder location for this library. 

To access them you have to refer them directly e.g. `localhost: @abstr_number /index.html` and `localhost: @abstr_number /hello.css`.

    * Allow Directory Browsing

Allow listing and browsing of your `wwwroot` folder.

    * Use File Server

Combines the functionality of `UseStaticFiles, UseDefaultFiles, and UseDirectoryBrowser`.

    * Custom Directory Formatter

Customize the way Directory Browsing is displayed. In this sample the custom view only handles flat directory. We will deal with more complex scenario in the next sample.

    * Custom Directory Formatter - @abstr_number 

Show custom Directory Browsing and handle directory listing as well as files.

    * Allow Directory Browsing

Use Directory Browsing on a certain path using `DirectoryBrowserOptions.RequestPath`, e.g. `/browse`.

  * **Web Sockets ( @abstr_number )**

We are going to explore websocket functionality provided by ASP.NET Core. All the samples here require `Microsoft.AspNetCore.WebSockets`. 

**Warning** : These samples are low level websocket code. For production, use @abstr_hyperlink . Yes I will work on SignalR samples soon.

    * Echo Server

This is the simplest web socket code you can write. It simply returns what you sent. It does not handle the closing of the connection. It does not handle data that is larger than buffer. It only handles text payload.

    * Echo Server @abstr_number 

We improve upon the previous sample by adding console logging (requiring `Microsoft.Extensions.Logging.Console` package) and handling data larger than the buffer. I set the buffer to be very small ( @abstr_number bytes) so you can see how it works.

    * Echo Server @abstr_number 

We improve upon the previous sample by enabling broadcast. What you see here is a very crude chat functionality.

    * Echo Server @abstr_number 

We improve upon the previous sample by handling closing event intiated by the web client.

    * Chat Server

Implement a rudimentary single channel chat server.

  * **Server Side Events ( @abstr_number )**

    * Forever Server

This server will send a 'hello world' greeting forever.

  * **Syndications ( @abstr_number )**

We are using the brand new `Microsoft.SyndicationFeed.ReaderWriter` package to read RSS and ATOM feeds.

    * Syndication - Read RSS

This is the shortest amount of code to read an RSS feed. This example read the feed from the inventor of RSS, Dave Winer at http://scripting.com/rss.xml. 

    * Syndication - Read RSS with extensions

This sample process RSS Outline Extension. 

  * **Utils( @abstr_number )**

    * Status Codes

Here we contrast between the usage of `Microsoft.AspNetCore.Http.StatusCodes` and `System.Net.HttpStatusCode`.

    * MediaTypeNames

This class provides convenient constants for some common MIME types. It's not extensive by any means however `MediaTypeNames.Text.Html` and `MediaTypeNames.Application.Json` come handy. 

    * MediaTypeNames - @abstr_number 

Using `FileExtensionContentTypeProvider` to obtain the correct MIME type of a filename extension.

  * **Misc ( @abstr_number )**

    * Markdown server

Serve markdown file as html file. You will see how you can create useful app using a few basic facilities in aspnetcore.

We take `"Markdig" : " @abstr_number . @abstr_number . @abstr_number "` as dependency. 

    * Markdown server - implemented as middleware component

Serve markdown file as html file. It has the same exact functionality as Markdown server but implemented using middleware component.

We take `"Markdig" : " @abstr_number . @abstr_number . @abstr_number "` as dependency. 

@abstr_hyperlink the documentation on how to write your own middleware.

    * Password Hasher server

Give it a string and it will generate a secure hash for you, e.g. `localhost: @abstr_number ?password=mypassword`.

We add dependency `"Microsoft.AspNetCore.Identity": " @abstr_number . @abstr_number . @abstr_number "` to enable this functionality.

  * **Web Utilities( @abstr_number )**

This section shows various functions avaiable at `Microsoft.AspNetCore.WebUtilities`. 

    * Query Helpers

This utility helps you generate query string for your url safely (ht @abstr_hyperlink ).

    * Parse Query String

`QueryHelpers.ParseQuery` allows you to parse a raw query string and access its individual key and values.

    * Reason Phrases

This utility returns HTTP response phrases given a status code number.

  * **Uri Helper( @abstr_number )**

This section shows various methods available at `Microsoft.AspNetCore.Http.Extensions.UriHelper`.

    * Get Display Url 

`Request.GetDisplayUrl()` shows complete url with host, path and query string of the current request. It's to be used for display purposes only.

    * Get Encoded Url

`Request.GetEncodedUrl()` returns the combined components of the request URL in a fully escaped form suitable for use in HTTP headers and other HTTP operations.

    * Get Encoded Path and Query

`UriHelper.GetEncodedPathAndQuery` returns the relative URL of a request.

    * From Absolute

`UriHelper.FromAbsolute` separates the given absolute URI string into components.

    * Build Absolute

`UriHelper.BuildAbsolute` combines the given URI components into a string that is properly encoded for use in HTTP headers. This sample shows @abstr_number ways on how to use it.

  * **Trimming ( @abstr_number )**

This section shows the various way on how to trim the size of your application by using @abstr_hyperlink 

    * Trimming Microsoft.AspNetCore.All hello world application

Run `dotnet publish` or `dotnet build` and read the output in your terminal. It will read something similar to `Trimmed @abstr_number out of @abstr_number files for a savings of @abstr_number . @abstr_number MB Final app size is @abstr_number . @abstr_number MB`. You can turn off the trimming by setting `<TrimUnusedDependencies>true</TrimUnusedDependencies>` to `false` at the project file.

  * **Email ( @abstr_number )**

This section shows samples of using @abstr_hyperlink , which is essentially **the** library to use for sending and receiving email in ASP.NET Core.

    * Send email

This shows an example on how to send an email using SMTP.

Thanks to @abstr_hyperlink .

    * Keeping track of anonymous users

Keep track of anonymous user in your ASP.NET Core (useful in scenario such as keeping track of shopping cart) using `ReturnTrue.AspNetCore.Identity.Anonymous` library.

  * **Middleware ( @abstr_number )**

    * Response Buffering

Use `Microsoft.AspNetCore.Buffering @abstr_number . @abstr_number . @abstr_number` middleware to implement response buffering facility. This will allow you to change your response after you write them.

  * **Device Detection ( @abstr_number )**

The samples in this section rely on @abstr_hyperlink library.

    * Device Detection

This is the most basic device detection. You will be able to detect whether the client is a desktop or a mobile client.

  * **Owin ( @abstr_number )**

All these samples require `Microsoft.AspNetCore.Owin` package. These are low level samples and in most cases are not relevant to your day to day ASP.NET Core development.

    * Owin

Hello world the hard way.

  * **Image Sharp ( @abstr_number )**

All these samples require `SixLabors.ImageSharp.Web` middleware package. This middleware is an excelent tool to process your day to day image processing need.

    * Image-Sharp

This example shows how to enable image resizing functionality to your site. It's super easy and the middleware takes care of caching, etc.




## Generic Host ( @abstr_number )

Generic Host is an awesome way to host all sort of long running tasks and applications, e.g. messaging, background tasks, etc.

This section is dedicated to all the nitty gritty of Generic Host. All the examples in this section rely on `Microsoft.AspNetCore.App` package.

  * Hello World

This is the hello world equivalent of a Generic Host service.

  * Hello World using Console Lifetime

Use `UseConsoleLifetime` implicitly. 

  * Startup and Shutdown order

Demonstrates the startup and shutdown order of hosted services.

  * Start and stop the host

Demonstrates starting and stopping the host programmatically.

  * A service with timed execution

Demonstrate processing a task on a regular interval using `Task.Delay`.

  * Configure Host using Dictionary

Demonstrate the way to inject configuration values to the host using Dictionary.

  * Configure Environment

Set your environment using `EnvironmentName.Development` or `EnvironmentName.Production` or `EnvironmentName.Staging`.

  * Configure Logging

Configure logging for your Generic Host.

  * Listen to IApplicationLifetime events

Inject `IApplicationLifetime` and listen to `ApplicationStarted`, `ApplicationStopping` and `ApplicationStopped` events. This is important to allow services to be shutdown gracefully. The shutdown process blocks until `ApplicatinStopping` and `ApplicationStopped` events complete.




## Other resources

These are other aspnetcore resources with code samples

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Misc

  * @abstr_hyperlink 
  * @abstr_hyperlink 


