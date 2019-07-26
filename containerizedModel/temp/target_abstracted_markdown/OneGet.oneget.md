## Announcement

OneGet is in a stable state and is expected to recieve only high-priority bug fixes from Microsoft in the future. We continue to welcome updates and improvements from the community. 

### Build Status - Master

| AppVeyor (Windows) | Travis CI (Linux / macOS) | |--------------------------|--------------------------| | @abstr_hyperlink | @abstr_hyperlink |

### Build Status - Nightly Builds

|AppVeyor (Windows) | |------------------------------------| | @abstr_hyperlink |

# PackageManagement (aka OneGet)

### What's New

PackageManagement is supported in Windows, Linux and MacOS now. We periodically make binary drops to @abstr_hyperlink , meaning PackageManagement is a part of PowerShell Core releases. Also PackageManagement and PowershellGet Modules are regularly updated in @abstr_hyperlink .

Thus check out the latest version from PowerShellGallery.com.

### Get Started!

OneGet is shipped in Win @abstr_number and Windows Server @abstr_number ! For downlevel OS, you can install the @abstr_hyperlink and then start using the OneGet.

You can follow @abstr_hyperlink to be notified of every new build.

  * Learn how to @abstr_hyperlink and @abstr_hyperlink 
  * Read our @abstr_hyperlink 
  * Read Writing OneGet Provider Guidelines
  * Learn about the @abstr_hyperlink 
  * @abstr_hyperlink 
  * Check out more help information @abstr_hyperlink 



### What is PackageManagement (OneGet)?

OneGet is a Windows package manager, renamed as PackageManagement. It is a unified interface to package management systems and aims to make Software Discovery, Installation, and Inventory (SDII) work via a common set of cmdlets (and eventually a set of APIs). Regardless of the installation technology underneath, users can use these common cmdlets to install/uninstall packages, add/remove/query package repositories, and query a system for the software installed.

With OneGet, you can * Manage a list of software repositories in which packages can be searched, acquired, and installed * Search and filter your repositories to find the packages you need * Seamlessly install and uninstall packages from one or more repositories with a single PowerShell command

#### PackageManagement Architecture

@abstr_image 

  


### Let's Try it

#### Prerequisites

  * Windows @abstr_number , Windows Server @abstr_number , or down-level Windows OS + WMF @abstr_number 
  * Linux or Mac with the @abstr_hyperlink 



#### Working with PowerShellGallery.com

@abstr_code_section 

#### Working with http://www.NuGet.org repository

@abstr_code_section 

### Try the latest PackageManagement (OneGet)

You can run `install-module PowerShellGet` to install the latest PackageManagment and PowerShellGet from @abstr_hyperlink .

### Downloading the Source Code

OneGet repo has a number of other repositories embeded as submodules. To make things easy, you can just clone recursively: @abstr_code_section If you already cloned but forgot to use `--recursive`, you can update submodules manually: @abstr_code_section 

### Building the code

@abstr_code_section 

If successfully built above, you should be able to see a folder: `oneget\src\out\PackageManagement\` whose layout looks like below:

  * `coreclr`
  * `fullclr`
  * `PackageManagement.format.ps @abstr_number xml`
  * `PackageManagement.psd @abstr_number`
  * `PackageManagement.psm @abstr_number`
  * `PackageProviderFunctions.psm @abstr_number`



### Deploying it

#### Generate PackageManagement.nupkg

We can use `publish-module` to create a .nupkg. Assuming you want to put the generated .nupkg in c:\test folder. You can do something like below. Note I cloned to E:\OneGet folder. @abstr_code_section Then you can do @abstr_code_section to get the newly built PackageManagement on your machines.

#### Manual copy

You can also manually copy the OneGet binaries. For example, copy the entire `E:\OneGet\oneget\src\out\PackageManagement` folder you just built to your `$env:Programfiles\WindowsPowerShell\Modules\PackageManagement\#onegetversion\`

If you are running within PowerShellCore, similarily drop the PackageManagement folder to your `$env:Programfiles\PowerShell\#psversion\Modules\PackageManagement\#onegetversion\`,

or copy to `/opt/microsoft/powershell/<psversion>/Modules/PackageManagement/#onegetversion/`, if you are running on Linux or Mac.

**Note** : OneGet version number can be found from the PackageManagement.psd @abstr_number file.

### Testing the code

```PowerShell

> cd oneget cd Test & '.\run-tests.ps @abstr_number ' fullclr & '.\run-tests.ps @abstr_number ' coreclr ```

### Understanding the OneGet code repository

OneGet is under rapid development, so you get to see just how the sausage is being made. I try to keep the master branch clean and buildable, but my own working branch can get pretty damn wild and I make no bones about some of this. I work fast, I make big changes, and I try to keep my eye on the target.

Feel free to clone the repository and check out the different branches:

#### Branches

There are currently three branches in the git repository:

| Branch/Tag | Purpose | | ------- | ---------------------------| |`master`| The `master` branch is where the daily builds of OneGet will be made from. | |`WMF @abstr_number _RTM`| The `WMF @abstr_number _RTM` tag is to mark the WMF @abstr_number . @abstr_number RTM release point. | |`TP @abstr_number`| The `TP @abstr_number` tag is to mark the TP @abstr_number release point. | |`wip`| The `wip` branch is where the current **unstable** and **not-likely-working** coding is taking place. This lets you see where I'm at before stuff actually hits the master branch. Fun to read, but really, the wild-west of code branches. |

### Team Members

| Branch | Purpose | | ------- | ---------------------------| |@sydneyhsmith | Program Manager on OneGet. | |@jianyunt| Engineer owner on OneGet & its providers. | |@edyoung| Our engineer manager on OneGet. | |@alerickson| Engineer on the team. |

@abstr_hyperlink 

### More Resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Check out OneGet providers from our Community such as Gistprovider, OfficeProvider, @abstr_number Install and more from powershellgallery.com or simply run @abstr_hyperlink 
  * Want to write a provider? Check out our @abstr_hyperlink 
  * Want to download packages from http://Chocolatey.org, try out @abstr_hyperlink 
  * Want to control which packages to use and where to get them from based on your organization? Check out @abstr_hyperlink 


