@abstr_hyperlink 

#  @abstr_hyperlink @abstr_hyperlink 

Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created and maintained by @abstr_hyperlink and @abstr_hyperlink .

To get started, checkout @abstr_hyperlink !

## Quick start

Three quick start options are available:

  * @abstr_hyperlink .
  * Clone the repo: `git clone git://github.com/twitter/bootstrap.git`.
  * Install with Twitter's @abstr_hyperlink : `bower install bootstrap`.



## Versioning

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, Bootstrap will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

  * Breaking backward compatibility bumps the major (and resets the minor and patch)
  * New additions without breaking backward compatibility bumps the minor (and resets the patch)
  * Bug fixes and misc changes bumps the patch



For more information on SemVer, please visit @abstr_hyperlink .

## Bug tracker

Have a bug or a feature request? @abstr_hyperlink . Before opening any issue, please search for existing issues and read the @abstr_hyperlink , written by @abstr_hyperlink .

## Community

Keep track of development and community news.

  * Follow @abstr_hyperlink .
  * Read and subscribe to the @abstr_hyperlink .
  * Have a question that's not a feature request or bug report? @abstr_hyperlink 
  * Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##twitter-bootstrap` channel.



## Compiling CSS and JavaScript

Bootstrap includes a makefile with convenient methods for working with the framework. Before getting started, be sure to install the necessary local dependencies:

@abstr_code_section 

When completed, you'll be able to run the various make commands provided:

#### build - `make`

Runs the recess compiler to rebuild the `/less` files and compiles the docs. Requires recess and uglify-js.

#### test - `make test`

Runs jshint and qunit tests headlessly in @abstr_hyperlink (used for ci). Depends on having phantomjs installed.

#### watch - `make watch`

This is a convenience method for watching just Less files and automatically building them whenever you save. Requires the Watchr gem.

Should you encounter problems with installing dependencies or running the makefile commands, be sure to first uninstall any previous versions (global and local) you may have installed, and then rerun `npm install`.

## Contributing

Please submit all pull requests against *-wip branches. If your pull request contains JavaScript patches or features, you must include relevant unit tests. All HTML and CSS should conform to the @abstr_hyperlink , maintained by @abstr_hyperlink .

Thanks!

## Authors

**Mark Otto**

  * @abstr_hyperlink 
  * @abstr_hyperlink 



**Jacob Thornton**

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Copyright and license

Copyright @abstr_number Twitter, Inc.

Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

@abstr_hyperlink 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
