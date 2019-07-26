@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

# NEO @abstr_number . @abstr_number (under development): A distributed network for the Smart Economy

NEO uses digital identity and blockchain technology to digitize assets and leverages smart contracts for autonomously managed digital assets to create a "smart economy" within a decentralized network.

To learn more about NEO, please read the @abstr_hyperlink | @abstr_hyperlink .

# NEO @abstr_number .x: Reference template 

NEO adopts a model of continuous improvement and evolution. We believe that the research and development of blockchain technology will be kept in continuous transformation for the next years. From @abstr_number until the middle of @abstr_number (estimated), NEO @abstr_number .x will still be supported and the compatibility of new packages will be maintained.

A link to the essential C# reference implementation can be seen below:

  * @abstr_hyperlink : core implementation (branch `master- @abstr_number .x`)
  * @abstr_hyperlink : virtual machine (branch `master- @abstr_number .x`)
  * @abstr_hyperlink : command-line interface (branch `master- @abstr_number .x`)
  * @abstr_hyperlink : plugins (branch `master- @abstr_number .x`)
  * @abstr_hyperlink : NeoContract compiler and development pack for .NET (branch `master- @abstr_number .x`)



NEO @abstr_number .x was known as Antshares and the roots of the code can be found historically in this current repository.

## Supported Platforms

We already support the following platforms:

  * CentOS @abstr_number 
  * Docker
  * macOS @abstr_number +
  * Red Hat Enterprise Linux @abstr_number . @abstr_number +
  * Ubuntu @abstr_number . @abstr_number , Ubuntu @abstr_number . @abstr_number , Ubuntu @abstr_number . @abstr_number , Ubuntu @abstr_number . @abstr_number , Ubuntu @abstr_number . @abstr_number , Ubuntu @abstr_number . @abstr_number 
  * Windows @abstr_number SP @abstr_number +, Windows Server @abstr_number R @abstr_number +



We will support the following platforms in the future:

  * Debian
  * Fedora
  * FreeBSD
  * Linux Mint
  * OpenSUSE
  * Oracle Linux



## Development

To start building peer applications for NEO on Windows, you need to download @abstr_hyperlink , install the @abstr_hyperlink and the @abstr_hyperlink .

If you need to develop on Linux or macOS, just install the @abstr_hyperlink .

To install Neo SDK to your project, run the following command in the @abstr_hyperlink :

@abstr_code_section 

For more information about how to build DAPPs for NEO, please read the @abstr_hyperlink | @abstr_hyperlink .

## Daily builds

If you want to use the @abstr_hyperlink then you need to add a NuGet.Config to your app with the following content:

@abstr_code_section 

_NOTE: This NuGet.Config should be with your application unless you want nightly packages to potentially start being restored for other apps on the machine._

## How to Contribute

You can contribute to NEO with @abstr_hyperlink and @abstr_hyperlink . Simply filing issues for problems you encounter is a great way to contribute. Contributing implementations is greatly appreciated.

We use and recommend the following workflow:

@abstr_number . Create an issue for your work. * You can skip this step for trivial changes. * Reuse an existing issue on the topic, if there is one. * Clearly state that you are going to take on implementing it, if that's the case. You can request that the issue be assigned to you. Note: The issue filer and the implementer don't have to be the same person. @abstr_number . Create a personal fork of the repository on GitHub (if you don't already have one). @abstr_number . Create a branch off of master(`git checkout -b mybranch`). * Name the branch so that it clearly communicates your intentions, such as issue- @abstr_number or githubhandle-issue. * Branches are useful since they isolate your changes from incoming changes from upstream. They also enable you to create multiple PRs from the same fork. @abstr_number . Make and commit your changes. @abstr_number . Add new tests corresponding to your change, if applicable. @abstr_number . Build the repository with your changes. * Make sure that the builds are clean. * Make sure that the tests are all passing, including your new tests. @abstr_number . Create a pull request (PR) against the upstream repository's master branch. * Push your changes to your fork on GitHub.

Note: It is OK for your PR to include a large number of commits. Once your change is accepted, you will be asked to squash your commits into one or some appropriately small number of commits before your PR is merged.

## License

The NEO project is licensed under the MIT license.
