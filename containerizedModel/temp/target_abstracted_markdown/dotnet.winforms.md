# Windows Forms

@abstr_hyperlink 

Windows Forms (WinForms) is a UI framework for building Windows desktop applications. It is a .NET wrapper over Windows user interface libraries, such as User @abstr_number and GDI+. It also offers controls and other functionality that is unique to Windows Forms.

Windows Forms also provides one of the most productive ways to create desktop applications based on the visual designer provided in Visual Studio. It enables drag-and-drop of visual controls and other similar functionality that make it easy to build desktop applications.

> Note: The Windows Forms visual designer is not yet available and will be part of a Visual Studio @abstr_number update. See here for a workaround invoking the Classic Framework Designer.

To learn about project priorities as well as status and ship dates see the Windows Forms Roadmap.

This repository contains WinForms for .NET Core. It does not contain the .NET Framework variant of WinForms.

@abstr_hyperlink (WPF) is another UI framework used to build Windows desktop applications which is supported on .NET Core. WPF and Windows Forms applications run only on Windows operating systems. They are part of the `Microsoft.NET.Sdk.WindowsDesktop` SDK. You are recommended to use Visual Studio @abstr_number Preview @abstr_number to use WPF and Windows Forms with .NET Core.

## Getting started

  * @abstr_hyperlink 
  * Getting started instructions
  * Contributing guide
  * Porting guide



## Build Status & Dependency Flow

| | Public CI :arrow_right: | Internal CI :arrow_right: | Core Setup CI :arrow_right: | Core SDK CI | |------------- |--------------------------------------------------------- |------------------------------------------------------------- |---------------------------------------------------------------- |------------------------------------------------------------- | | master | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | release/ @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

### Code Coverage

| | Production Code | Test Code | Combined | |------------- |------------------------------------------------- |------------------------------------------------- |------------------------------------------------- | | master | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | release/ @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

## Status

We are in the process of doing four projects with Windows Forms:

@abstr_number . Port Windows Forms to .NET Core.

@abstr_number . Publish source to GitHub.

@abstr_number . Publish (and in some cases write) tests to GitHub and enable automated testing infrastructure.

@abstr_number . Enable the Visual Studio WinForms designer to work with WinForms running on .NET Core.

The first two tasks are well underway. Most of the source has been published to GitHub although we are still bringing the codebase up to functional and performance parity with .NET Framework.

We have published very few tests and have very limited coverage for PRs at this time as a result. We will be slow in merging PRs as a result. We will add more tests in @abstr_number , however, it will be an incremental process. We welcome test contributions to increase coverage and help us validate PRs more easily.

The Visual Studio WinForms designer is not yet available and will be part of a Visual Studio @abstr_number update. In short, we need to move to an out-of-proc model (relative to Visual Studio) for the designer.

## How to Engage, Contribute, and Provide Feedback

Some of the best ways to contribute are to try things out, file bugs, join in design conversations, and fix issues.

  * The contributing guidelines and the more general @abstr_hyperlink define contributing rules.
  * The Developer Guide defines the setup and workflow for working on this repository.
  * If you have a question or have found a bug, @abstr_hyperlink .
  * Use daily builds if you want to contribute and stay up to date with the team.



### .NET Framework issues

Issues with .NET Framework, including WinForms, should be filed on @abstr_hyperlink , or @abstr_hyperlink . They should not be filed on this repository.

### Reporting security issues

Security issues and bugs should be reported privately via email to the Microsoft Security Response Center (MSRC) @abstr_hyperlink . You should receive a response within @abstr_number hours. If for some reason you do not, please follow up via email to ensure we received your original message. Further information, including the MSRC PGP key, can be found in the @abstr_hyperlink . Also see info about related @abstr_hyperlink .

## Relationship to .NET Framework

This code base is a fork of the Windows Forms code in the .NET Framework. We intend to release .NET Core @abstr_number . @abstr_number with Windows Forms having parity with the .NET Framework version. Over time, the two implementations may diverge.

The @abstr_hyperlink provides a good description of the forward-looking differences between .NET Core and .NET Framework.

## Code of Conduct

This project uses the @abstr_hyperlink to define expected conduct in our community. Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting a project maintainer at conduct@dotnetfoundation.org.

## License

.NET Core (including the Windows Forms repository) is licensed under the MIT license.

## .NET Foundation

.NET Core WinForms is a @abstr_hyperlink project.

See the @abstr_hyperlink to find other .NET-related projects.
