# KeePassX

## About

KeePassX is an application for people with extremely high demands on secure personal data management. It has a light interface, is cross platform and published under the terms of the GNU General Public License.

KeePassX saves many different information e.g. user names, passwords, urls, attachments and comments in one single database. For a better management user-defined titles and icons can be specified for each single entry. Furthermore the entries are sorted in groups, which are customizable as well. The integrated search function allows to search in a single group or the complete database. KeePassX offers a little utility for secure password generation. The password generator is very customizable, fast and easy to use. Especially someone who generates passwords frequently will appreciate this feature.

The complete database is always encrypted with the AES (aka Rijndael) encryption algorithm using a @abstr_number bit key. Therefore the saved information can be considered as quite safe. KeePassX uses a database format that is compatible with @abstr_hyperlink . This makes the use of that application even more favorable.

## Install

KeePassX can be downloaded and installed using an assortment of installers available on the main @abstr_hyperlink . KeePassX can also be installed from the official repositories of many Linux repositories. If you wish to build KeePassX from source, rather than rely on the pre-compiled binaries, you may wish to read up on the _From Source_ section.

### Debian

To install KeePassX from the Debian repository:

@abstr_code_section 

### Red Hat

Install KeePassX from the Red Hat (or CentOS) repository:

@abstr_code_section 

### Windows / Mac OS X

Download the installer from the KeePassX @abstr_hyperlink page. Once downloaded, double click on the file to execute the installer.

### From Source

#### Build Dependencies

The following tools must exist within your PATH:

  * make
  * cmake (>= @abstr_number . @abstr_number . @abstr_number )
  * g++ (>= @abstr_number . @abstr_number ) or clang++ (>= @abstr_number . @abstr_number )



The following libraries are required:

  * Qt @abstr_number (>= @abstr_number . @abstr_number ): qtbase and qttools @abstr_number 
  * libgcrypt (>= @abstr_number . @abstr_number )
  * zlib
  * libxi, libxtst, qtx @abstr_number extras (optional for auto-type on X @abstr_number )



On Debian you can install them with:

@abstr_code_section 

#### Build Steps

To compile from source:

@abstr_code_section 

You will have the compiled KeePassX binary inside the `./build/src/` directory.

To install this binary execute the following:

@abstr_code_section 

More detailed instructions available in the INSTALL file.

## Contribute

Coordination of work between developers is handled through the @abstr_hyperlink site. Requests for enhancements, or reports of bugs encountered, can also be reported through the KeePassX development site. However, members of the open-source community are encouraged to submit pull requests directly through GitHub.

### Clone Repository

Clone the repository to a suitable location where you can extend and build this project.

@abstr_code_section 

**Note:** This will clone the entire contents of the repository at the HEAD revision.

To update the project from within the project's folder you can run the following command:

@abstr_code_section 

### Feature Requests

We're always looking for suggestions to improve our application. If you have a suggestion for improving an existing feature, or would like to suggest a completely new feature for KeePassX, please file a ticket on the @abstr_hyperlink site.

### Bug Reports

Our software isn't always perfect, but we strive to always improve our work. You may file bug reports on the @abstr_hyperlink site.

### Pull Requests

Along with our desire to hear your feedback and suggestions, we're also interested in accepting direct assistance in the form of code.

Issue merge requests against our @abstr_hyperlink .

### Translations

Translations are managed on @abstr_hyperlink which offers a web interface. Please join an existing language team or request a new one if there is none.
