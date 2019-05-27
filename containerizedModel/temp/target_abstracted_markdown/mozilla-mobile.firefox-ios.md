# Firefox for iOS @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Download on the @abstr_hyperlink .

## This branch (master)

This branch is for mainline development that will ship in *v @abstr_number . @abstr_number *.

This branch only works with Xcode @abstr_number . @abstr_number .x and supports iOS @abstr_number . @abstr_number and above

This branch is written in Swift @abstr_number . @abstr_number 

Please make sure you aim your pull requests in the right direction.

For bug fixes and features for a specific release use the version branch.

## Getting involved

Want to contribute but don't know where to start? Here is a list of @abstr_hyperlink 

## Building the code

@abstr_number . Install the latest @abstr_hyperlink from Apple. @abstr_number . Install Carthage @abstr_code_section @abstr_number . Clone the repository: @abstr_code_section @abstr_number . Pull in the project dependencies: @abstr_code_section @abstr_number . Open `Client.xcodeproj` in Xcode. @abstr_number . Build the `Fennec` scheme in Xcode.

## Building User Scripts

User Scripts (JavaScript injected into the `WKWebView`) are compiled, concatenated and minified using @abstr_hyperlink . User Scripts to be aggregated are placed in the following directories:

@abstr_code_section 

This reduces the total possible number of User Scripts down to four. The compiled output from concatenating and minifying the User Scripts placed in these folders resides in `/Client/Assets` and are named accordingly:

  * `AllFramesAtDocumentEnd.js`
  * `AllFramesAtDocumentStart.js`
  * `MainFrameAtDocumentEnd.js`
  * `MainFrameAtDocumentStart.js`



To simplify the build process, these compiled files are checked-in to this repository. When adding or editing User Scripts, these files can be re-compiled with `webpack` manually. This requires Node.js to be installed and all required `npm` packages can be installed by running `npm install` in the root directory of the project. User Scripts can be compiled by running the following `npm` command in the root directory of the project:

@abstr_code_section 

## Contributor guidelines

### Creating a pull request

  * All pull requests must be associated with a specific Issue. If an issue doesn't exist please first create it.



### Swift style

  * Swift code should generally follow the conventions listed at https://github.com/raywenderlich/swift-style-guide. 
    * Exception: we use @abstr_number -space indentation instead of @abstr_number .
    * This is a loose standard. We do our best to follow this style



### Whitespace

  * New code should not contain any trailing whitespace.
  * We recommend enabling both the "Automatically trim trailing whitespace" and "Including whitespace-only lines" preferences in Xcode (under Text Editing).
  * `git rebase --whitespace=fix` can also be used to remove whitespace from your commits before issuing a pull request.



### Commits

  * Each commit should have a single clear purpose. If a commit contains multiple unrelated changes, those changes should be split into separate commits.
  * If a commit requires another commit to build properly, those commits should be squashed.
  * Follow-up commits for any review comments should be squashed. Do not include "Fixed PR comments", merge commits, or other "temporary" commits in pull requests.


