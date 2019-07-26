#  @abstr_hyperlink 

ReactJS.NET is a library that makes it easier to use @abstr_hyperlink along with Facebook's @abstr_hyperlink and @abstr_hyperlink from C#.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

# Features

  * On-the-fly @abstr_hyperlink via @abstr_hyperlink 

  * JSX to JavaScript compilation via popular minification/combination libraries:

    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
  * @abstr_hyperlink to make your initial render super-fast, including support for: 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * Custom JS logic via implementing @abstr_hyperlink and passing to @abstr_hyperlink 
  * @abstr_hyperlink via .NET Core and ChakraCore
  * Supports both ASP.NET @abstr_number . @abstr_number / @abstr_number . @abstr_number and ASP.NET Core



# Quick Start

Install the package

@abstr_code_section 

Install a Javascript engine and configure as the default (more info @abstr_hyperlink on how this works)

@abstr_code_section 

@abstr_code_section 

Create JSX files

@abstr_code_section 

Reference the JSX files from your HTML

@abstr_code_section 

Now you can use the `HelloWorld` component.

For information on more advanced topics (including precompilation and server-side rendering), check out @abstr_hyperlink 

## Building Manually and Contributing

When building your own copy of ReactJS.NET (for example, if implementing a new feature or fixing a bug), your first build always needs to be done using the build script (`dev-build.bat`) as this generates a few files required by the build (such as `SharedAssemblyVersionInfo.cs`). Once this build is completed, you can open `React.sln` in Visual Studio and compile directly from Visual Studio. Please refer to the @abstr_hyperlink for more information on contributing to ReactJS.NET.

Note that the build requires you to have Git installed. If you do not want to install Git, you may remove the `GitVersion` task from `build.proj`.
