# Homebrew Cookbook

@abstr_hyperlink @abstr_hyperlink 

This cookbook installs @abstr_hyperlink and under Chef @abstr_number and earlier versions, its package provider replaces MacPorts as the _default package provider_ for the package resource on OS X systems.

# Requirements

Chef @abstr_number : The package provider is not necessary on Chef @abstr_number , as the default @abstr_hyperlink is homebrew.

Chef <= @abstr_number : The package provider will be set as the default provider for OS X.

## Prerequisites

In order for this recipe to work, your userid must own `/usr/local`. This is outside the scope of the cookbook because it's possible that you'll run the cookbook as your own user, not root and you'd have to be root to take ownership of the directory. Easiest way to get started:

@abstr_code_section 

Bear in mind that this will take ownership of the entire folder and its contents, so if you've already got stuff in there (eg MySQL owned by a `mysql` user) you'll need to be a touch more careful. This is a recommendation from the Homebrew project.

**Note** This cookbook _only_ supports installing in `/usr/local`. While the Homebrew project itself allows for alternative installations, this cookbook doesn't.

## Platform

  * Mac OS X ( @abstr_number . @abstr_number +)



The only platform supported by Homebrew itself at the time of this writing is Mac OS X. It should work fine on Server edition as well, and on platforms that Homebrew supports in the future.

## Cookbooks

  * build-essential: homebrew itself doesn't work well if XCode is not installed.



# Attributes

  * `node['homebrew']['owner']` \- The user that will own the Homebrew installation and packages. Setting this will override the default behavior which is to use the non-privileged user that has invoked the Chef run (or the `SUDO_USER` if invoked with sudo). The default is `nil`.
  * `node['homebrew']['auto-update']` \- Whether the default recipe should automatically update homebrew each run or not. The default is `true` to maintain compatibility. Set to false or nil to disable. Note that disabling this feature may cause formula to not work.
  * `node['homebrew']['formulas']` \- An Array of formula that should be installed using homebrew by default, used only in the `homebrew::install_formulas` recipe.

    * To install the most recent version, include just the recipe name: `- simple_formula`
    * To install a specific version, specify both its name and version:

@abstr_code_section 

    * To install the HEAD of a formula, specify both its name and `head: true`:

@abstr_code_section 

  * `node['homebrew']['casks']` \- An Array of casks that should be installed using brew cask by default, used only in the `homebrew::install_casks` recipe.

  * `node['homebrew']['taps']` \- An Array of taps that should be installed using brew tap by default, used only in the `homebrew::install_taps` recipe.



# Resources and Providers

This cookbook includes a package resource provider to use homebrew. Under Chef @abstr_number +, this is not necessary, and the code doesn't actually get used on Chef @abstr_number +. This was preserved to maintain backwards compatiblity with older versions of Chef.

## package / homebrew_package

This cookbook provides a package provider called `homebrew_package` which will install/remove packages using Homebrew. This becomes the default provider for `package` if your platform is Mac OS X.

As this extends the built-in package resource/provider in Chef, it has all the resource attributes and actions available to the package resource. However, a couple notes: \- Homebrew itself doesn't have a notion of "upgrade" per se. The "upgrade" action will simply perform an install, and if the Homebrew Formula for the package is newer, it will upgrade. \- Likewise, Homebrew doesn't have a purge, but the "purge" action will act like "remove".

### Examples

@abstr_code_section 

### homebrew_tap

LWRP for `brew tap`, a Homebrew command used to add additional formula repositories. From the `brew` man page:

@abstr_code_section 

Default action is `:tap` which enables the repository. Use `:untap` to disable a tapped repository.

#### Examples

@abstr_code_section 

## homebrew_cask

LWRP for `brew cask`, a Homebrew-style CLI workflow for the administration of Mac applications distributed as binaries. It's implemented as a homebrew "external command" called cask.

@abstr_hyperlink 

### Prerequisites

You must have the homebrew-cask repository tapped.

@abstr_code_section 

And then install the homebrew cask package before using this LWRP.

@abstr_code_section 

You can include the `homebrew::cask` recipe to do this.

### Examples

@abstr_code_section 

Default action is `:cask` which installs the Application binary . Use `:uncask` to uninstall a an Application.

@abstr_hyperlink 

# Usage

We strongly recommend that you put "recipe[homebrew]" in your node's run list, to ensure that it is available on the system and that Homebrew itself gets installed. Putting an explicit dependency in the metadata will cause the cookbook to be downloaded and the library loaded, thus resulting in changing the package provider on Mac OS X, so if you have systems you want to use the default (Mac Ports), they would be changed to Homebrew.

The default recipe also ensures that Homebrew is installed and up to date if the auto update attribute (above) is true (default).

# License and Authors

This cookbook is maintained by CHEF. The original author, maintainer and copyright holder is Graeme Mathieson. The cookbook remains licensed under the Apache License version @abstr_number .

@abstr_hyperlink 

Author:: Graeme Mathieson ( @abstr_hyperlink )

Author:: Joshua Timberman ( @abstr_hyperlink )

@abstr_code_section 
