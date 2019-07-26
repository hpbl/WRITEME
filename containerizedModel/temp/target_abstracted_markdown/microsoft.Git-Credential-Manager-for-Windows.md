# Git Credential Manager for Windows

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

* * *

## NOTICE: Experiencing GitHub push/fetch problems?

As of @abstr_number Feb @abstr_number , @abstr_hyperlink which means many users will suddenly find themselves unable to authenticate using a Git for Windows which (impacts versions older than v @abstr_number . @abstr_number . @abstr_number ). **DO NOT PANIC** , there's a fix. @abstr_hyperlink to the latest (or at least v @abstr_number . @abstr_number . @abstr_number ).

The most common error users see looks like:

@abstr_code_section 

If, after updating Git for Windows, you are still having problems authenticating with GitHub, please read this @abstr_hyperlink topic which contains additional remedial actions you can take to resolve the problem.

If you are experiencing issue when using **Visual Studio** , please read **@abstr_hyperlink**.

* * *

The @abstr_hyperlink (GCM) provides secure Git credential storage for Windows. It's the successor to the @abstr_hyperlink (git-credential-winstore), which is no longer maintained. Compared to Git's built-in credential storage for Windows ( @abstr_hyperlink ), which provides single-factor authentication support working on any HTTP enabled Git repository, GCM provides multi-factor authentication support for @abstr_hyperlink , Team Foundation Server, GitHub, and Bitbucket.

This project includes:

  * Secure password storage in the Windows Credential Store.
  * Multi-factor authentication support for Azure DevOps.
  * Two-factor authentication support for GitHub.
  * Two-factor authentication support for Bitbucket.
  * Personal Access Token generation and usage support for Azure DevOps, GitHub, and Bitbucket.
  * Non-interactive mode support for Azure DevOps backed by Azure Directory.
  * NTLM/Kerberos authentication for Team Foundation Server (see notes).
  * Optional settings for build agent optimization.



## Community

This is a community project so feel free to contribute ideas, submit bugs, fix bugs, or code new features. For detailed information on how the GCM works go to the @abstr_hyperlink .

## Download and Install

To use the GCM, you can download the @abstr_hyperlink . To install, double-click `GCMW-{version}.exe` and follow the instructions presented.

When prompted to select your terminal emulator for Git Bash you should choose the Windows' default console window, or make sure GCM is configured to use modal dialogs. GCM cannot prompt you for credentials, at the console, in a MinTTY setup.

### Manual Installation

Note for users with special installation needs, you can still extract the `gcm-{version}.zip` file and run install.cmd from an administrator command prompt. This allows specification of the installation options explained below.

### Installation in an MSYS @abstr_number Environment

To use the GCM along with git installed with `pacman` in an MSYS @abstr_number environment, simply @abstr_hyperlink and extract the contents directly into `C:\msys @abstr_number \usr\lib\git-core` (assuming your MSYS @abstr_number environment is installed in `C:\msys @abstr_number`). Then run:

@abstr_code_section 

## How to use

You don't. It @abstr_hyperlink works when credentials are needed. For example, when pushing to @abstr_hyperlink , it automatically opens a window and initializes an oauth @abstr_number flow to get your token.

### Build and Install from Sources

To build and install the GCM yourself, clone the sources, open the solution file in Visual Studio, and build the solution. All necessary components will be copied from the build output locations into a `.\Deploy` folder at the root of the solution. From an elevated command prompt in the `.\Deploy` folder issue the following command `git-credential-manager install`. Additional information about development and debugging are available in our documents area.

Various options are available for uniquely configured systems, like automated build systems. For systems with a **non-standard placement of Git** use the `--path <git>` parameter to supply where Git is located and thus where the GCM should be deployed to. For systems looking to **avoid checking for the Microsoft .NET Framework** and other similar prerequisites use the `--force` option. For systems looking for **silent installation without any prompts** , use the `--passive` option.

### Additional Resources

  * Credential Manager Usage
  * Askpass Usage
  * Configuration Options
  * Build Agent and Automation Support
  * Bitbucket Specific Details
  * Frequently Asked Questions
  * Development and Debugging



## Contribute

There are many ways to contribute.

  * @abstr_hyperlink and help us verify fixes as they are checked in.
  * Review @abstr_hyperlink .
  * Contribute bug fixes and features.



### Code Contributions

For code contributions, you will need to complete a Contributor License Agreement (CLA). Briefly, this agreement testifies that you grant us permission to use the submitted change according to the terms of the project's license, and that the work being submitted is under the appropriate copyright.

Please submit a Contributor License Agreement (CLA) before submitting a pull request. You may visit @abstr_hyperlink to sign digitally. Alternatively, download the agreement @abstr_hyperlink , sign, scan, and email it back to @abstr_hyperlink . Be sure to include your GitHub user name along with the agreement. Once we have received the signed CLA, we'll review the request.

## Code of Conduct

This project has adopted the @abstr_hyperlink . For more information see the @abstr_hyperlink or contact @abstr_hyperlink with any additional questions or comments.

## License

This project uses the MIT License.
