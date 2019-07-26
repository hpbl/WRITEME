# MonoGame

One framework for creating powerful cross-platform games. The spiritual successor to XNA with thousands of titles shipped across desktop, mobile, and console platforms. @abstr_hyperlink is a fully managed .NET open source game framework without any black boxes. Create, develop and distribute your games your way.

@abstr_hyperlink 

  * Build Status
  * Supported Platforms
  * Support and Contributions
  * Source Code
  * Helpful Links
  * License



## Build Status

Our @abstr_hyperlink builds, tests, and packages the latest MonoGame changes. The table below shows the current build status for the develop branch.

| Name | Status | |:---|--------| | Build Windows, Web, and Android | @abstr_hyperlink | | Build Mac, iOS, and Linux | @abstr_hyperlink | | Generate Documentation | @abstr_hyperlink | | Windows Tests | @abstr_hyperlink | | Package NuGet | @abstr_hyperlink | | Package Mac and Linux | @abstr_hyperlink | | Package Windows | @abstr_hyperlink |

## Supported Platforms

We support a growing list of platforms across the desktop, mobile, and console space. If there is a platform we don't support, please @abstr_hyperlink or come help us add it.

  * Desktop PCs 
    * Windows @abstr_number Store Apps (UWP)
    * Windows Win @abstr_number (OpenGL & DirectX)
    * Linux (OpenGL)
    * Mac OS X (OpenGL)
  * Mobile/Tablet Devices 
    * Android (OpenGL)
    * iPhone/iPad (OpenGL)
    * Windows Phone @abstr_number (UWP)
  * Consoles (for registered developers) 
    * PlayStation @abstr_number 
    * PlayStation Vita
    * Xbox One (both UWP and XDK)
    * Nintendo Switch
  * Other 
    * tvOS (OpenGL)



## Support and Contributions

If you think you have found a bug or have a feature request, use our @abstr_hyperlink . Before opening a new issue, please search to see if your problem has already been reported. Try to be as detailed as possible in your issue reports.

If you need help using MonoGame or have other questions we suggest you post on our @abstr_hyperlink . Please do not use the GitHub issue tracker for personal support requests.

If you are interested in contributing fixes or features to MonoGame, please read our contributors guide first.

### Subscription

If you'd like to help the project by supporting us financially, consider supporting us via a subscription for the price of a monthly coffee.

Money goes towards hosting, new hardware and if enough people subscribe a dedicated developer.

There are several options on our @abstr_hyperlink .

## Source Code

The full source code is available here from GitHub:

  * Clone the source: `git clone https://github.com/MonoGame/MonoGame.git`
  * Set up the submodules: `git submodule update --init`
  * Run Protobuild.exe to generate project files and solutions. 
    * If on Linux or Mac, run it with mono: `mono Protobuild.exe`
  * You can generate solutions for platforms that are not buildable from the current OS with: 
    * Windows: `.\Protobuild.exe --generate $PLATFORM`
    * Linux or Mac: `mono Protobuild.exe --generate $PLATFORM`
  * Open the solution for your target platform to build the game framework.
  * Open the solution for your development platform for building the pipeline and content tools.



For the prerequisites for building from source, please look at the Requirements file.

A high level breakdown of the components of the framework:

  * The game framework is found in MonoGame.Framework.
  * The content pipeline is located in MonoGame.Framework.Content.Pipeline.
  * The MonoDevelop addin is in IDE/MonoDevelop.
  * The Visual Studio templates are in ProjectTemplates.
  * NuGet packages are located in NuGetPackages.
  * See Test for the pipeline and framework unit tests.
  * Tools/MGCB is the command line tool for content processing.
  * Tools/ @abstr_number MGFX is the command line effect compiler tool.
  * The Tools/Pipeline tool is a GUI frontend for content processing.



## Helpful Links

  * The official website is @abstr_hyperlink .
  * Our @abstr_hyperlink is on GitHub.
  * Use our @abstr_hyperlink for support questions.
  * You can @abstr_hyperlink with the core developers and other users.
  * The @abstr_hyperlink is on our website.
  * Download release and development @abstr_hyperlink .
  * Follow @abstr_hyperlink on Twitter.



## License

The MonoGame project is under the @abstr_hyperlink except for a few portions of the code. See the LICENSE.txt file for more details. Third-party libraries used by MonoGame are under their own licenses. Please refer to those libraries for details on the license they use.
