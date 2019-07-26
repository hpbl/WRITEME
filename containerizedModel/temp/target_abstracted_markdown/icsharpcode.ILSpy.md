# ILSpy @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

ILSpy is the open-source .NET assembly browser and decompiler.

Download: @abstr_hyperlink | @abstr_hyperlink 

CI Build Nuget Feed (master): https://ci.appveyor.com/nuget/ilspy-masterfeed

## Decompiler Frontends

Aside from the WPF UI ILSpy (downloadable via Releases, see also @abstr_hyperlink ), the following other frontends are available:

  * Visual Studio @abstr_number extension @abstr_hyperlink 
  * Visual Studio Code Extension @abstr_hyperlink | @abstr_hyperlink 
  * @abstr_hyperlink NuGet for your own projects
  * Linux/Mac/Windows ILSpy UI based on @abstr_hyperlink - check out https://github.com/icsharpcode/AvaloniaILSpy
  * Linux/Mac/Windows command line client - check out ICSharpCode.Decompiler.Console in this repository
  * Linux/Mac/Windows PowerShell cmdlets in this repository



## Features

  * Decompilation to C#
  * Whole-project decompilation (csproj, not sln!)
  * Search for types/methods/properties (substring)
  * Hyperlink-based type/method/property navigation
  * Base/Derived types navigation, history
  * BAML to XAML decompiler
  * Extensible via @abstr_hyperlink (MEF)
  * Check out the @abstr_hyperlink 



## License

ILSpy is distributed under the MIT License.

Included open-source libraries: * Mono.Cecil: MIT License (part of ILSpy) * LightJson: MIT License (part of ICSharpCode.Decompiler) * Humanizer: MIT License (part of ICSharpCode.Decompiler) * AvalonEdit: MIT License * SharpTreeView: LGPL * ILSpy.BamlDecompiler: MIT license * CommandLineUtils: Apache License @abstr_number . @abstr_number (part of ICSharpCode.Decompiler.Console)

## How to build

Windows: \- Install Visual Studio (minimum version: @abstr_number . @abstr_number ) with the following components: \- Workload ".NET Desktop Development" \- .NET Framework @abstr_number . @abstr_number . @abstr_number Targeting Pack (if the VS installer does not offer this option, install the @abstr_hyperlink separately) \- Individual Component "VC++ @abstr_number version @abstr_number . @abstr_number v @abstr_number . @abstr_number latest v @abstr_number tools" (or similar) \- The VC++ toolset is optional; if present it is used for `editbin.exe` to modify the stack size used by ILSpy.exe from @abstr_number MB to @abstr_number MB, because the decompiler makes heavy use of recursion, where small stack sizes lead to problems in very complex methods. \- Install the @abstr_hyperlink \- Install the @abstr_hyperlink \- Check out the ILSpy repository using git. \- Execute `git submodule update --init --recursive` to download the ILSpy-Tests submodule (used by some test cases). \- Open ILSpy.sln in Visual Studio. \- NuGet package restore will automatically download further dependencies \- Run project "ILSpy" for the ILSpy UI \- Use the Visual Studio "Test Explorer" to see/run the tests

Unix: \- Make sure .NET Core @abstr_number . @abstr_number is installed (you can get it here: https://get.dot.net). \- Make sure @abstr_hyperlink is installed. \- Check out the repository using git. \- Execute `git submodule update --init --recursive` to download the ILSpy-Tests submodule (used by some test cases). \- Use `dotnet build Frontends.sln` to build the non-Windows flavors of ILSpy (cli and powershell core).

(Visual Studio for Mac users only:) \- Edit `\ICSharpCode.Decompiler\ICSharpCode.Decompiler.csproj` Add `Sdk="Microsoft.NET.Sdk"` to the `Project` element. This is required due to a tooling issue. Please do not commit this when contributing a pull request! \- Use Frontends.sln to work.

## How to contribute

  * Report bugs
  * If you want to contribute a pull request, please add https://gist.github.com/siegfriedpammer/ @abstr_number ea @abstr_number eb @abstr_number d @abstr_number e @abstr_number eb @abstr_number to your `.git/hooks` to prevent checking in code with wrong indentation. We use tabs and not spaces. The build server runs the same script, so any pull requests using wrong indentation will fail.



Current and past @abstr_hyperlink .
