# Octokit - GitHub API Client Library for .NET

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

Octokit is a client library targeting .NET @abstr_number . @abstr_number and above that provides an easy way to interact with the @abstr_hyperlink .

## Usage examples

Get public info on a specific user.

`c# var github = new GitHubClient(new ProductHeaderValue("MyAmazingApp")); var user = await github.User.Get("half-ogre"); Console.WriteLine(user.Followers + " folks love the half ogre!"); @abstr_code_section Install-Package Octokit @abstr_code_section Install-Package Octokit.Reactive @abstr_code_section git clone git@github.com:octokit/Octokit.net.git Octokit cd Octokit `

To build the libraries, run the following command:

Windows: `.\build.ps @abstr_number`

Linux/OSX: `./build.sh`

## Contribute

Visit the @abstr_hyperlink for more details. All contributors are expected to follow our @abstr_hyperlink .

## Problems?

If you find an issue with our library, please visit the @abstr_hyperlink and report the issue.

Please be kind and search to see if the issue is already logged before creating a new one. If you're pressed for time, log it anyways.

When creating an issue, clearly explain

  * What you were trying to do.
  * What you expected to happen.
  * What actually happened.
  * Steps to reproduce the problem.



Also include any other information you think is relevant to reproduce the problem.

## Related Projects

  * @abstr_hyperlink - a @abstr_hyperlink to use Octokit in scriptcs 
  * @abstr_hyperlink - a @abstr_hyperlink to use Octokit in scriptcs



## Copyright and License

Copyright @abstr_number GitHub, Inc.

Licensed under the @abstr_hyperlink 
