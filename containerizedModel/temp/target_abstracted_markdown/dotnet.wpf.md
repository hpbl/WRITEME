# Windows Presentation Foundation (WPF)

@abstr_hyperlink @abstr_hyperlink 

Windows Presentation Foundation (WPF) is a UI framework for building Windows desktop applications. WPF supports a broad set of application development features, including an application model, resources, controls, graphics, layout, data binding and documents. WPF uses the Extensible Application Markup Language (XAML) to provide a declarative model for application programming.

WPF applications are based on a vector graphics architecture. This enables applications to look great on high DPI monitors, as they can be infinitely scaled. WPF also includes a flexible hosting model, which makes it straightforward to host a video in a button, for example. The visual designer provided in Visual Studio makes it easy to build WPF application, with drag-in-drop and/or direct editing of XAML markup.

> Note: The WPF visual designer is not yet available and will be part of a Visual Studio @abstr_number update.

See the WPF Roadmap to learn about project priorities, status and ship dates.

@abstr_hyperlink is another UI framework for building Windows desktop applications that is supported on .NET Core. WPF and WinForms applications only run on Windows. They are part of the `Microsoft.NET.Sdk.WindowsDesktop` SDK. You are recommended to use @abstr_hyperlink to use WPF and WinForms with .NET Core.

## Getting started

  * @abstr_hyperlink 
  * Getting started instructions
  * Contributing guide



## Status

We are in the process of doing four projects with WPF:

  * Port WPF to .NET Core.
  * Publish source to GitHub.
  * Publish (and in some cases write) tests to GitHub and enable automated testing infrastructure.
  * Enable the Visual Studio WPF designer to work with WPF running on .NET Core.



We are part-away through porting WPF to .NET Core, and will complete that for .NET Core @abstr_number . @abstr_number . We intend to bring the codebase up to functionality and performance parity with .NET Framework.

We have published only a small part of the WPF source. We will continue to publish WPF components as part of the .NET Core @abstr_number project. We will publish source and tests at the same time for each component.

See the WPF roadmap to learn about the schedule for specific WPF components.

We have published very few tests and have very limited coverage for PRs at this time as a result. We will add more tests in @abstr_number , however, it will be a progressive process. We welcome test contributions to increase coverage and help us validate PRs more easily.

The Visual Studio WPF designer is not yet available. In short, we need to move to an out-of-proc model (relative to Visual Studio) with the designer. This work will be part of Visual Studio @abstr_number .

## How to Engage, Contribute and Provide Feedback

Some of the best ways to contribute are to try things out, file bugs, join in design conversations, and fix issues.

  * This repo defines contributing guidelines and also follows the more general @abstr_hyperlink .
  * If you have a question or have found a bug, @abstr_hyperlink .
  * Use daily builds if you want to contribute and stay up to date with the team.



### .NET Framework issues

Issues with .NET Framework, including WPF, should be filed on @abstr_hyperlink , or @abstr_hyperlink . They should not be filed on this repo.

## Relationship to .NET Framework

This code base is a fork of the WPF code in the .NET Framework. We intend to release .NET Core @abstr_number . @abstr_number with WPF having parity with the .NET Framework version. Over time, the two implementations may diverge.

The @abstr_hyperlink provides a good description of the forward-looking differences between .NET Core and .NET Framework.

## Code of Conduct

This project uses the @abstr_hyperlink to define expected conduct in our community. Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting a project maintainer at conduct@dotnetfoundation.org.

## Reporting security issues and security bugs

Security issues and bugs should be reported privately, via email, to the Microsoft Security Response Center (MSRC) @abstr_hyperlink . You should receive a response within @abstr_number hours. If for some reason you do not, please follow up via email to ensure we received your original message. Further information, including the MSRC PGP key, can be found in the @abstr_hyperlink .

Also see info about related @abstr_hyperlink .

## License

.NET Core (including the WPF repo) is licensed under the MIT license.

## .NET Foundation

.NET Core WPF is a @abstr_hyperlink project.

See the @abstr_hyperlink to find other .NET-related projects.
