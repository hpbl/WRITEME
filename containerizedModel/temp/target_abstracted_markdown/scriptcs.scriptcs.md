# scriptcs

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink 

## What is it?

scriptcs makes it easy to write and execute C# with a simple text editor.

While Visual Studio, and other IDEs, are powerful tools, they can sometimes hinder productivity more than they promote it. You don’t always need, or want, the overhead of a creating a new solution or project. Sometimes you want to just type away in your favorite text editor.

scriptcs frees you from Visual Studio, without sacrificing the advantages of a strongly-typed language. 

  * Write C# in your favorite text editor.
  * Use NuGet to manage your dependencies.
  * The relaxed C# scripting syntax means you can write and execute an application with only one line of code. 
  * Script Packs allow you to bootstrap the environment for new scripts, further reduces the amount of code necessary to take advantage of your favorite C# frameworks.



## Getting scriptcs

Releases and nightly builds should be installed using @abstr_hyperlink . To install Chocolatey, execute the following command in your command prompt:
    
    
    @powershell -NoProfile -ExecutionPolicy Unrestricted -Command "iex ((New-Object Net.WebClient).DownloadString('https://chocolatey.org/install.ps @abstr_number '))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin
    

If the above fails with the error indicating that proxy authentication is required (i.e. @abstr_hyperlink ) then try again with the following on the command prompt that uses your default credentials:
    
    
    @powershell -NoProfile -ExecutionPolicy Unrestricted -Command "[Net.WebRequest]::DefaultWebProxy.Credentials = [Net.CredentialCache]::DefaultCredentials; iex ((New-Object Net.WebClient).DownloadString('https://chocolatey.org/install.ps @abstr_number '))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin
    

**Note:** If you are using a version of Chocolatey  > @abstr_number . @abstr_number . @abstr_number . @abstr_number you can pass the `-y` into the install and upgrade commands to prevent the confirmation that will appear.

### Installing scriptcs

Once Chocolatey has been installed, you can install the latest stable version of scriptcs from your command prompt:
    
    
    choco install scriptcs
    

Chocolatey will install scriptcs to `%LOCALAPPDATA%\scriptcs\` and update your PATH accordingly.

**Note:** You may need to restart your command prompt after the installation completes.

### Staying up-to-date

With Chocolatey, keeping scriptcs updated is just as easy:
    
    
    choco upgrade scriptcs
    

**Note:** If you are using a version of Chocolatey  < @abstr_number . @abstr_number . @abstr_number . @abstr_number you will need to use `choco update scriptcs`, but also think about updating Chocolatey itself.

### Nightly builds

Nightly builds are hosted on @abstr_hyperlink , and can also be installed through with Chocolatey:
    
    
    choco install scriptcs -pre -source https://www.myget.org/F/scriptcsnightly/
    

### Building from source

#### Windows

@abstr_number . Ensure you have .NET Framework @abstr_number . @abstr_number . @abstr_number installed.

@abstr_number . Execute the build script.
    
    
    `build.cmd`
    

#### Linux

@abstr_number . Ensure you have @abstr_hyperlink or later installed.

@abstr_number . Execute the build script
    
    
    `./build.sh`
    

## Getting Started

### Using the REPL

The scriptcs REPL can be started by running scriptcs without any parameters. The REPL allows you to execute C# statements directly from your command prompt.

@abstr_code_section 

REPL supports all C# language constructs (i.e. class definition, method definition), as well as multi-line input. For example:

@abstr_code_section 

### Writing a script

  * In an empty directory, create a new file named `app.csx`:



```c# using Raven.Client; using Raven.Client.Embedded; using Raven.Client.Indexes;

Console.WriteLine("Starting RavenDB server...");

using (var documentStore = new EmbeddableDocumentStore { UseEmbeddedHttpServer = true }) { documentStore.Initialize(); Console.WriteLine($"RavenDB started, listening on http://localhost:{documentStore.Configuration.Port}"); Console.ReadKey(); } @abstr_code_section batchfile scriptcs -install RavenDB.Embedded @abstr_code_section batchfile

> scriptcs app.csx INFO : Starting to create execution components INFO : Starting execution Starting RavenDB server... .. snip .. RavenDB started, listening on http://localhost: @abstr_number . @abstr_code_section batchfile scriptcs -install ScriptCs.WebApi @abstr_code_section c# public class TestController : ApiController { public string Get() { return "Hello world!"; } }

var webApi = Require(); var server = webApi.CreateServer("http://localhost: @abstr_number "); server.OpenAsync().Wait();

Console.WriteLine("Listening..."); Console.ReadKey(); server.CloseAsync().Wait(); @abstr_code_section batchfile scriptcs server.csx @abstr_code_section xml Hello world! @abstr_code_section c#

# load "controller.csx"

@abstr_code_section batchfile scriptcs server.csx @abstr_code_section xml Hello world! @abstr_code_section c#

# r "nunit.core.dll"

# r "nunit.core.interfaces.dll"

var path = "UnitTests.dll"; var runner = TestSetup.GetRunner(new[] {path}); var result = runner.Run(new ConsoleListener(msg => Console.WriteLine(msg)), TestFilter.Empty, true, LoggingThreshold.All);

Console.ReadKey(); ```

### Debugging

Instructions for debugging scripts using Visual Studio can be found on the @abstr_hyperlink .

### Package installation

You can install any NuGet packages directly from the scriptcs CLI. This will pull the relevant packages from NuGet, and install them in the scriptcs_packages folder.

Once the packages are installed, you can simply start using them in your script code directly (just import the namespaces - no additional bootstrapping or DLL referencing is needed).

The `install` command will also create a `scriptcs_packages.config` file if you don't have one - so that you can easily redistribute your script (without having to copy the package binaries).

  * `scriptcs -install {package name}` will install the desired package from NuGet. 

For example: 
    
        scriptcs -install ServiceStack
    

  * `scriptcs -install` (without package name) will look for the `scriptcs_packages.config` file located in the current execution directory, and install all the packages specified there. You only need to specify **top level** packages.




For example, you might create the following `scriptcs_packages.config`:
    
    
    <?xml version=" @abstr_number . @abstr_number " encoding="utf- @abstr_number "?>
    <packages>
        <package id="Nancy.Hosting.Self" version=" @abstr_number . @abstr_number . @abstr_number " targetFramework="net @abstr_number " />
        <package id="Nancy.Bootstrappers.Autofac" version=" @abstr_number . @abstr_number . @abstr_number " targetFramework="net @abstr_number " />
        <package id="Autofac" version=" @abstr_number . @abstr_number . @abstr_number . @abstr_number " targetFramework="net @abstr_number " />
    </packages>
    

And then just call:
    
    
    scriptcs -install
    

As a result, all packages specified in the `scriptcs_packages.config`, including all dependencies, will be downloaded and installed in the `scriptcs_packages` folder. 

## Contributing

  * Read our @abstr_hyperlink . 



## Samples and Documentation

Additional samples can be contributed to our @abstr_hyperlink . Documentation can be found on our @abstr_hyperlink . 

## Community

Want to chat? In addition to Twitter, you can find us on @abstr_hyperlink and @abstr_hyperlink !

## Coordinators

  * @abstr_hyperlink ( @abstr_hyperlink )
  * @abstr_hyperlink ( @abstr_hyperlink )
  * @abstr_hyperlink ( @abstr_hyperlink )



## Core Committers

  * @abstr_hyperlink ( @abstr_hyperlink )
  * @abstr_hyperlink ( @abstr_hyperlink )
  * @abstr_hyperlink ( @abstr_hyperlink )
  * @abstr_hyperlink ( @abstr_hyperlink )



## Credits

  * Check out the @abstr_hyperlink responsible for getting scriptcs to where it is today! 
  * Special thanks to Filip Wojcieszyn for being the inspiration behind this with his Roslyn Web API posts.
  * Thanks to the Roslyn team who helped point me in the right direction.



## License

@abstr_hyperlink 
