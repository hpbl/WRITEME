# JavaScriptServices [Archived]

**This GitHub project has been archived.** Ongoing development on this project can be found in @abstr_hyperlink .

This project is part of ASP.NET Core. You can find samples, documentation and getting started instructions for ASP.NET Core at the @abstr_hyperlink repo.

## What is this?

`JavaScriptServices` is a set of client-side technologies for ASP.NET Core. It provides infrastructure that you'll find useful if you:

  * Use Angular / React / Vue / Aurelia / Knockout / etc.
  * Build your client-side resources using Webpack.
  * Execute JavaScript on the server at runtime.



Read @abstr_hyperlink for more details.

This repo contains:

  * A set of NuGet/NPM packages that implement functionality for: 
    * Invoking arbitrary NPM packages at runtime from .NET code (docs)
    * Server-side prerendering of SPA components (docs)
    * Webpack dev middleware (docs)
    * Hot module replacement (HMR) (docs)
    * Server-side and client-side routing integration (docs)
    * Server-side and client-side validation integration
    * "Lazy loading" for Knockout apps
  * Samples and docs



It's cross-platform (Windows, Linux, or macOS) and works with .NET Core @abstr_number . @abstr_number or later.

## Creating new applications

Prerequisites:

  * @abstr_hyperlink (or later) SDK
  * @abstr_hyperlink version @abstr_number (or later)



With these prerequisites, you can immediately create new ASP.NET Core applications that use Angular, React, or React+Redux without having to install anything extra.

### Option @abstr_number : Creating Angular/React/Redux applications from the command line (cross-platform)

In an empty directory, run (for example) `dotnet new angular`. Other supported SPA frameworks include React and React+Redux. You can see the list of available SPA templates by running `dotnet new spa`.

Once the generator has run and restored all the dependencies, you can start up your new ASP.NET Core SPA:
    
    
    npm install
    dotnet run
    

### Option @abstr_number : Creating Angular/React/Redux applications using Visual Studio @abstr_number Update @abstr_number or later (Windows only)

Using the `File`->`New Project` dialog, select _ASP.NET Core Web Application_. You will then be offered the option to create an application with Angular, React, or React+Redux. When the application is created, you can build and run it in the normal way.

### More info and other SPA frameworks

For a more detailed (albeit somewhat outdated) walkthrough, see @abstr_hyperlink .

If you want to build an ASP.NET Core application with Aurelia, Knockout, or Vue, you can use the `Microsoft.AspNetCore.SpaTemplates` package. On the command line, run `dotnet new --install Microsoft.AspNetCore.SpaTemplates`. Then you will be able to run `dotnet new aurelia` (or `dotnet new vue`, etc.) to create your new application.

## Adding to existing applications

If you have an existing ASP.NET Core application, or if you just want to use the underlying JavaScriptServices packages directly, you can install these packages using NuGet and NPM:

  * `Microsoft.AspNetCore.NodeServices`
    * This provides a fast and robust way for .NET code to run JavaScript on the server inside a Node.js environment. You can use this to consume arbitrary functionality from NPM packages at runtime in your ASP.NET Core app.
    * Most applications developers don't need to use this directly, but you can do so if you want to implement your own functionality that involves calling Node.js code from .NET at runtime.
    * Find documentation and usage examples here.
  * `Microsoft.AspNetCore.SpaServices`
    * This provides infrastructure that's generally useful when building Single Page Applications (SPAs) with technologies such as Angular or React (for example, server-side prerendering and webpack middleware). Internally, it uses the `NodeServices` package to implement its features.
    * Find documentation and usage examples here



There were previously other packages called `Microsoft.AspNetCore.AngularServices` and `Microsoft.AspNetCore.ReactServices` but these are not currently needed - all applicable functionality is in `Microsoft.AspNetCore.SpaServices`, because it's sufficiently general.

If you want to build a helper library for some other SPA framework, you can do so by taking a dependency on `Microsoft.AspNetCore.SpaServices` and wrapping its functionality in whatever way is most useful for your SPA framework.

## Samples

The samples directory contains examples of:

  * Using the JavaScript services family of packages with Angular and React.
  * A standalone `NodeServices` usage for runtime code transpilation and image processing.



**To run the samples:**

  * Clone this repo
  * At the repo's root directory (the one containing `src`, `samples`, etc.), run `dotnet restore`
  * Change directory to the sample you want to run (for example, `cd samples/angular/MusicStore`)
  * Restore Node dependencies by running `npm install`
    * If you're trying to run the Angular "Music Store" sample, then also run `gulp` (which you need to have installed globally). None of the other samples require this.
  * Run the application (`dotnet run`)
  * Browse to @abstr_hyperlink 


