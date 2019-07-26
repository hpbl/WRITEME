# Sublime Packages

> **These packages are developed against the latest @abstr_hyperlink . Bugs may exist on older builds, and the format used is not compatible with builds older than @abstr_number .**

## Installation

If you want to make changes to these packages and test them locally, fork this repository and then symlink the changed packages into your _Packages_ folder.

_Replace`Python` in the following commands with the name of the syntax to install._

### OS X

@abstr_code_section 

### Linux

@abstr_code_section 

### Windows

On Windows, you can use directory junctions instead of symlinks (symlinks require administrative rights; directory junctions don't):

@abstr_code_section 

Alternatively, download the portable version, and clone this repository directly as a subdirectory of the _Data_ folder.

* * *

After you've finished, keep in mind that you're now overriding a default package. When Sublime Text updates to a new version, you'll run the risk of having an out-of-date package unless you pull the latest changes from this repository.

## Pull Requests

Pull requests should:

@abstr_number . Start with the name of the package in square brackets, e.g. `[XML]`. @abstr_number . Be as small and self-contained as is reasonable. _Smaller changes are quicker to review._ @abstr_number . Include a new, or enhanced, @abstr_hyperlink when changing a `.sublime-syntax` file. @abstr_number . Have multiple syntax tests and a set of performance measurements (old vs. new) when making significant changes.

### New Packages

Pull requests for new packages won't be accepted at this stage, as new packages can cause issues for users who have a package with the same name installed via Package Control. There are some planned changes that will address this in the future.

Complex plugins such as auto complete systems and linters should generally be in a stand-alone package, rather than included in the default set of packages.

## Missing Packages

This repository only contains syntax-definition-focused packages. Notably, packages such as _Default_ and _Theme - Default_ are not included.
