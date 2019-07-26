# VFS for Git

## Windows

|Branch|Unit Tests|Functional Tests|Large Repo Perf|Large Repo Build| |:--:|:--:|:--:|:--:|:--:| | **master** | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | **shipped** | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

## Mac

|Branch|Unit Tests|Functional Tests| |:--:|:--:|:--:| | **master** | @abstr_hyperlink | @abstr_hyperlink | | **shipped** | @abstr_hyperlink | @abstr_hyperlink |

## What is VFS for Git?

VFS stands for Virtual File System. VFS for Git virtualizes the file system beneath your git repo so that git and all tools see what appears to be a normal repo, but VFS for Git only downloads objects as they are needed. VFS for Git also manages the files that git will consider, to ensure that git operations like status, checkout, etc., can be as quick as possible because they will only consider the files that the user has accessed, not all files in the repo.

## New name

This project was formerly known as GVFS (Git Virtual File System). It is undergoing a rename to VFS for Git. While the rename is in progress, the code, protocol, built executables, and releases may still refer to the old GVFS name. See https://github.com/Microsoft/VFSForGit/projects/ @abstr_number for the latest status of the rename effort.

## Installing VFS for Git

  * VFS for Git requires Windows @abstr_number Anniversary Update (Windows @abstr_number version @abstr_number ) or later
  * Run the latest GVFS and Git for Windows installers from https://github.com/Microsoft/VFSForGit/releases



## Building VFS for Git on Windows

If you'd like to build your own VFS for Git Windows installer: * Install Visual Studio @abstr_number Community Edition or higher (https://www.visualstudio.com/downloads/). * Include the following workloads: * .NET desktop development * Desktop development with C++ * .NET Core cross-platform development * Include the following additional components: * .NET Core runtime * Windows @abstr_number SDK ( @abstr_number . @abstr_number . @abstr_number . @abstr_number ) * Install the .NET Core @abstr_number . @abstr_number SDK (https://www.microsoft.com/net/download/dotnet-core/ @abstr_number . @abstr_number ) * Create a folder to clone into, e.g. `C:\Repos\VFSForGit` * Clone this repo into the `src` subfolder, e.g. `C:\Repos\VFSForGit\src` * Run `\src\Scripts\BuildGVFSForWindows.bat` * You can also build in Visual Studio by opening `src\GVFS.sln` (do not upgrade any projects) and building. However, the very first build will fail, and the second and subsequent builds will succeed. This is because the build requires a prebuild code generation step. For details, see the build script in the previous step.

You can also use Visual Studio @abstr_number . There are a couple of options for getting all the dependencies. * You can install Visual Studio @abstr_number side by side with Visual Studio @abstr_number , and make sure that you have all the dependencies from Visual Studio @abstr_number installed * Alternatively, if you only want to have Visual Studio @abstr_number installed, install the following extra dependencies: * MSVC v @abstr_number VS @abstr_number C++ build tools via the optional components in the Visual Studio @abstr_number installer. It is under the "Desktop Development with C++" heading. * Windows @abstr_number SDK ( @abstr_number . @abstr_number . @abstr_number . @abstr_number ) via the archived SDK page: https://developer.microsoft.com/en-us/windows/downloads/sdk-archive

Visual Studio @abstr_number will @abstr_hyperlink when you open the solution. The .vsconfig file that is present in the root of the repository specifies all required components _except_ the Windows @abstr_number SDK ( @abstr_number . @abstr_number . @abstr_number . @abstr_number ) as this component is no longer shipped with VS @abstr_number - **you'll still need to install that separately**.

The installer can now be found at `C:\Repos\VFSForGit\BuildOutput\GVFS.Installer.Windows\bin\x @abstr_number \[Debug|Release]\SetupGVFS.<version>.exe`

## Building VFS for Git on Mac

Note that VFS for Git on Mac is under active development.

  * Ensure you have `Xcode` installed, have accepted the terms of use, and have launched `Xcode` at least once.

  * Install @abstr_hyperlink . (This will also install the `dotnet` CLI).

  * If you still do not have the `dotnet` cli `>= v @abstr_number . @abstr_number . @abstr_number` installed [manually install it]. You can check what version you have with `dotnet --version`.(https://www.microsoft.com/net/download/dotnet-core/ @abstr_number . @abstr_number )

  * If you're using `Xcode` for the first time, you may have to login to `Xcode` with your Apple ID to generate a codesigning certificate. You can do this by launching `Xcode.app`, opening the `ProjFS.Mac/PrjFS.xcodeproj` and trying to build. You can find the signing options in the `General`->`Accounts` tab of the project's settings.

  * Create a `VFSForGit` directory and Clone VFSForGit into a directory called `src` inside it: @abstr_code_section 

  * Prep your machine to use VFS for Git. The following are all done by the script below.

    * install @abstr_hyperlink 
    * install and setup the Git Credential Manager (with `brew`)
    * install/update Java (with `brew`)
    * install a VFS for Git aware version of Git

@abstr_code_section 

  * From the `src` directory run

@abstr_code_section 

_Troubleshooting if this fails_

If you get @abstr_code_section You may have the "Xcode Command Line Tools" installed (helpfully by Mac OS) instead of full `Xcode`. Make sure @abstr_code_section 

shows `/Applications/Xcode.app/Contents/Developer`. If it does not, install `Xcode` and then launch it (you can close it afterwards.)

  * In order to build VFS for Git on Mac (and PrjFSKext) you will have to disable the SIP (System Integrity Protection) in order to load the kext).

**This is dangerous and very bad for the security of your machine. Do not do this on any production machine! If you no longer need to develop VFS for Git on Mac we recommend re-enabling SIP ASAP.**

To disable SIP boot into recovery mode (`[Win/⌘] + R` while booting your Mac). Once booted into recovery mode open `Utilities` -> `Terminal` to launch a terminal. Enter:

@abstr_code_section Then click the Apple logo in the top left and restart.

  * Now you have to load the ProjFS Kext.

@abstr_code_section 

  * Add your built VFS for Git executable (`gvfs`) program to your path. A simple way to do that is by adding

@abstr_code_section 

to your `PATH`.

Confirm you have it by running

@abstr_code_section 

You should see a path to the gvfs executable.

  * Try cloning a VFS for Git enabled repository!

@abstr_code_section 

Note the current use of `--local-cache-path`. Without this argument VFS for Git will encounter a permissions error when it attempts to create its cache at the root of your hard-drive. Automatic picking of the cache path has not yet been ported to VFS for Git on Mac.




## Trying out VFS for Git

  * VFS for Git will work with any git service that supports the GVFS protocol. For example, you can create a repo in Azure DevOps (https://azure.microsoft.com/services/devops/), and push some contents to it. There are two constraints: 
    * Your repo must not enable any clean/smudge filters
    * Your repo must have a `.gitattributes` file in the root that includes the line `* -text`
  * `gvfs clone <URL of repo you just created>`
    * Please choose the **Clone with HTTPS** option in the `Clone Repository` dialog in Azure Repos, not **Clone with SSH**.
  * `cd <root>\src`
  * Run git commands as you normally would
  * `gvfs unmount` when done



# Licenses

The VFS for Git source code in this repo is available under the MIT license. See License.md.

VFS for Git relies on the PrjFlt filter driver, formerly known as the GvFlt filter driver, available as a prerelease NuGet package.
