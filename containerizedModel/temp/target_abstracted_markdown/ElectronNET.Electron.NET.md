@abstr_hyperlink 

@abstr_hyperlink 

AppVeyor (Win/Linux): @abstr_hyperlink 

  * Checkout AppVeyor Artifacts: Contains the WebApp sample built for Windows & Linux!



Travis-CI (Win/macOS/Linux): @abstr_hyperlink 

Build cross platform desktop apps with .NET Core @abstr_number . @abstr_number and ASP.NET NET Core. 

Electron.NET is a __wrapper__ around a "normal" Electron application with an embedded ASP.NET Core application. Via our Electron.NET IPC bridge we can invoke Electron APIs from .NET.

The CLI extensions hosts our toolset to build and start Electron.NET applications.

## Wait - you host a .NET Core app inside Electron? Why?

Well... there are lots of different approaches how to get a X-plat desktop app running. We thought it would be nice for .NET devs to use the ASP.NET Core environment and just embed it inside a pretty robust X-plat enviroment called Electron. Porting Electron to .NET is not a goal of this project, at least we don't have any clue how to do it. We just combine ASP.NET Core & Electron. 

# NuGet:

  * API @abstr_hyperlink 
  * CLI @abstr_hyperlink 



# Requirements to run:

The current Electron.NET CLI builds Windows/macOS/Linux binaries. Our API uses .NET Core @abstr_number . @abstr_number , so our minimum base OS is the same as @abstr_hyperlink .

# Community

@abstr_hyperlink 

# Usage:

To activate and communicate with the "native" (sort of native...) Electron API include the @abstr_hyperlink in your ASP.NET Core app.

`@abstr_code_section`

## Program.cs

You start Electron.NET up with an `UseElectron` WebHostBuilder-Extension. 

@abstr_code_section 

## Startup.cs

Open the Electron Window in the Startup.cs file: 

@abstr_code_section 

__Please note:__ Currently it is important to use ASP.NET Core with MVC. If you are working with the dotnet CLI, use

@abstr_code_section 

## Start the Application

To start the application make sure you have installed the " @abstr_hyperlink " packages as global tool:

@abstr_code_section 

  * Make sure you have __node.js v @abstr_number . @abstr_number . @abstr_number __ and on __macOS/Linux__ the electron-builder installed! 

@abstr_code_section 




At the first time, you need an Electron.NET project initialization. Type the following command in your ASP.NET Core folder:

@abstr_code_section 

  * Now a electronnet.manifest.json should appear in your ASP.NET Core project
  * Now run the following:

@abstr_code_section 

### Note




> Only the first electronize start is slow. The next will go on faster.

## Debug

Start your Electron.NET application with the Electron.NET CLI command. In Visual Studio attach to your running application instance. Go in the __Debug__ Menu and click on __Attach to Process...__. Sort by your projectname on the right and select it on the list.

## Usage of the Electron-API

A complete documentation will follow. Until then take a look in the source code of the sample application:   
@abstr_hyperlink 

In this YouTube video, we show you how you can create a new project, use the Electron.NET API, debug a application and build an executable desktop app for Windows: @abstr_hyperlink 

## Build

Here you need the Electron.NET CLI as well. Type the following command in your ASP.NET Core folder:

@abstr_code_section 

There are additional platforms available:

@abstr_code_section 

Those three "default" targets will produce x @abstr_number packages for those platforms.

For certain NuGet packages or certain scenarios you may want to build a pure x @abstr_number application. To support those things you can define the desired @abstr_hyperlink , the @abstr_hyperlink and @abstr_hyperlink like this:

@abstr_code_section 

The end result should be an electron app under your __/bin/desktop__ folder.

## Starter kits

There is a React/Typescript/MobX starter kit at https://github.com/yoDon/Electron.NET-React-Typescript-MobX

### Note

> macOS builds can't be created on Windows machines because they require symlinks that aren't supported on Windows (per @abstr_hyperlink ). macOS builds can be produced on either Linux or macOS machines.

# Working with this Repo

This repository consists of the main parts (API & CLI) and it's own "playground" ASP.NET Core application. Both main parts produce local NuGet packages, that are versioned with @abstr_number . @abstr_number . @abstr_number . The first thing you will need is to run one of the buildAll scripts (.cmd for Windows, the other for macOS/Linux).

If you look for pure __ @abstr_hyperlink __ checkout the other repositories. 

The problem working with this repository is, that NuGet has a pretty aggressive cache, see @abstr_hyperlink .

# Contributing

Feel free to submit a pull request if you find any bugs (to see a list of active issues, visit the @abstr_hyperlink . Please make sure all commits are properly documented.

# Authors

  * **Gregor Biswanger** \- (Microsoft MVP, Intel Black Belt and Intel Software Innovator) is a freelance lecturer, consultant, trainer, author and speaker. He is a consultant for large and medium-sized companies, organizations and agencies for software architecture, web- and cross-platform development. You can find Gregor often on the road attending or speaking at international conferences. - @abstr_hyperlink - Twitter @abstr_hyperlink 
  * **Robert Muehsig** \- Software Developer - from Dresden, Germany, now living  & working in Switzerland. Microsoft MVP & Web Geek. - @abstr_hyperlink - Twitter @abstr_hyperlink 



See also the list of @abstr_hyperlink who participated in this project.

## Donate

We do this open source work in our free time. If you'd like us to invest more time on it, please @abstr_hyperlink . Donation can be used to increase some issue priority. Thank you!

# License

MIT-licensed

**Enjoy!**

# Important notes

## ElectronNET.API & ElectronNET.CLI Version @abstr_number . @abstr_number . @abstr_number

Make sure you also have the new Electron.NET CLI @abstr_number . @abstr_number . @abstr_number version. This now uses @abstr_hyperlink and the necessary configuration to build is made in the **electron.manifest.json** file. In addition, own Electron.NET configurations are stored. Please make sure that your **electron.manifest.json** file has the following new structure:

@abstr_code_section 

## ElectronNET.CLI Version @abstr_number . @abstr_number . @abstr_number

In the Version @abstr_number . @abstr_number . @abstr_number the CLI was not a global tool and needed to be registred like this in the .csproj:

@abstr_code_section 

After you edited the .csproj-file, you need to restore your NuGet packages within your Project. Run the follwoing command in your ASP.NET Core folder:

@abstr_code_section 

If you still use this version you will need to invoke it like this:

@abstr_code_section 

## Node Integration

Electron.NET requires Node Integration to be enabled for IPC to function. If you are not using the IPC functionality you can disable Node Integration like so:

@abstr_code_section 
