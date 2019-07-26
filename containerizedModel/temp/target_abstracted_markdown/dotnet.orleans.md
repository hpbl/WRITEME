@abstr_image 

@abstr_hyperlink @abstr_hyperlink 

Orleans is a framework that provides a straight-forward approach to building distributed high-scale computing applications, without the need to learn and apply complex concurrency or other scaling patterns. 

It was created by @abstr_hyperlink implementing the @abstr_hyperlink and designed for use in the cloud. 

Orleans has been used extensively running in Microsoft Azure by several Microsoft product groups, most notably by @abstr_hyperlink as a platform for all of Halo @abstr_number and Halo @abstr_number cloud services, as well as by @abstr_hyperlink .

# Installation

Installation is performed via @abstr_hyperlink . There are several packages, one for each different project type (interfaces, grains, silo, and client).

In the grain interfaces project: @abstr_code_section In the grain implementations project: @abstr_code_section In the server (silo) project: @abstr_code_section In the client project: @abstr_code_section 

### Official Builds

The stable production-quality release is located @abstr_hyperlink .

The latest clean development branch build from CI is located: @abstr_hyperlink 

Nightly builds are published to https://dotnet.myget.org/gallery/orleans-ci . These builds pass all functional tests, but are not thoroughly tested as the stable builds or pre-release builds we push to NuGet.org

To use nightly builds in your project, add the MyGet feed using either of the following methods:

@abstr_number . Changing the .csproj file to include this section:

@abstr_code_section or

@abstr_number . Creating a `NuGet.config` file in the solution directory with the following contents:

@abstr_code_section 

### Building from source

Clone the sources from the GitHub @abstr_hyperlink 

Run the `Build.cmd` script to build the nuget packages locally, then reference the required NuGet packages from `/Artifacts/Release/*`. You can run `Test.cmd` to run all BVT tests, and `TestAll.cmd` to also run Functional tests (which take much longer)

### Building and running tests in Visual Studio @abstr_number

.NET Core @abstr_number . @abstr_number SDK is a pre-requisite to build Orleans.sln.

There might be errors trying to build from Visual Studio because of conflicts with the test discovery engine (error says could not copy `xunit.abstractions.dll`). The reason for that error is that you need to configure the test runner in VS like so (after opening the solution): * `Test` -> `Test Settings` -> Uncheck `Keep Test Execution Engine running` * `Test` -> `Test Settings` -> `Default Processor Architecture` -> Check `X @abstr_number`

Then either restart VS, or go to the task manager and kill the processes that starts with `vstest.`. Then build once again and it should succeed and tests should appear in the `Test Explorer` window.

# Documentation

Documentation is located @abstr_hyperlink 

# Code Examples

Create an interface for your grain: ```c# public interface IHello : Orleans.IGrainWithIntegerKey { Task SayHello(string greeting); } @abstr_code_section c# public class HelloGrain : Orleans.Grain, IHello { public Task SayHello(string greeting) { return Task.FromResult($"You said: '{greeting}', I say: Hello!"); } } @abstr_code_section c# // Get a reference to the IHello grain with id ' @abstr_number '. var friend = GrainClient.GrainFactory.GetGrain( @abstr_number );

// Send a greeting to the grain and await the response. Console.WriteLine(await friend.SayHello("Good morning, my friend!")); ```

# Blog

@abstr_hyperlink is a place to share our thoughts, plans, learnings, tips and tricks, and ideas, crazy and otherwise, which don’t easily fit the documentation format. We would also like to see here posts from the community members, sharing their experiences, ideas, and wisdom. So, welcome to Orleans Blog, both as a reader and as a blogger!

# Community

  * Ask questions by @abstr_hyperlink or on @abstr_hyperlink 

  * @abstr_hyperlink 

  * Follow the @abstr_hyperlink Twitter account for Orleans announcements.

  * @abstr_hyperlink Various community projects, including Orleans Monitoring, Design Patterns, Storage Provider, etc.

  * Guidelines for developers wanting to @abstr_hyperlink .

  * You are also encouraged to report bugs or start a technical discussion by starting a new @abstr_hyperlink on GitHub.




# License

This project is licensed under the @abstr_hyperlink .

# Quick Links

  * @abstr_hyperlink 
  * Orleans Tech Report - @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



This project has adopted the @abstr_hyperlink . For more information see the @abstr_hyperlink or contact @abstr_hyperlink with any additional questions or comments.
