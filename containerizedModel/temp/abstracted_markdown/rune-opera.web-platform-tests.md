# The web-platform-tests Project @abstr_hyperlink 

The web-platform-tests Project is a W @abstr_number C-coordinated attempt to build a cross-browser testsuite for the Web-platform stack. However, for mainly historic reasons, the CSS WG testsuite is in a separate repository, @abstr_hyperlink . Writing tests in a way that allows them to be run in all browsers gives browser projects confidence that they are shipping software that is compatible with other implementations, and that later implementations will be compatible with their implementations. This in turn gives Web authors/developers confidence that they can actually rely on the Web platform to deliver on the promise of working across browsers and devices without needing extra layers of abstraction to paper over the gaps left by specification editors and implementors.

# Running the Tests

The tests are designed to be run from your local computer. The test environment requires @abstr_hyperlink (but not Python @abstr_number .x). You will also need a copy of OpenSSL.

On Windows, be sure to add the Python directory (`c:\python @abstr_number x`, by default) to your `%Path%` @abstr_hyperlink , and read the Windows Notes section below.

To get the tests running, you need to set up the test domains in your @abstr_hyperlink . The following entries are required:

@abstr_code_section 

If you are behind a proxy, you also need to make sure the domains above are excluded from your proxy lookups.

Because web-platform-tests uses git submodules, you must ensure that these are up to date. In the root of your checkout, run:

@abstr_code_section 

The test environment can then be started using
    
    
    ./serve
    

This will start HTTP servers on two ports and a websockets server on one port. By default one web server starts on port @abstr_number and the other ports are randomly-chosen free ports. Tests must be loaded from the _first_ HTTP server in the output. To change the ports, copy the `config.default.json` file to `config.json` and edit the new file, replacing the part that reads:

@abstr_code_section 

to some port of your choice e.g.

@abstr_code_section 

If you installed OpenSSL in such a way that running `openssl` at a command line doesn't work, you also need to adjust the path to the OpenSSL binary. This can be done by adding a section to `config.json` like:

@abstr_code_section 

# Windows Notes

Running wptserve with SSL enabled on Windows typically requires installing an OpenSSL distribution. @abstr_hyperlink provide a convenient installer that is known to work, but requires a little extra setup, i.e.:

Run the installer for Win @abstr_number _OpenSSL_v @abstr_number . @abstr_number . @abstr_number b ( @abstr_number MB). During installation, change the default location for where to Copy OpenSSL Dlls from the System directory to the /bin directory.

After installation, ensure that the path to OpenSSL (typically, this will be `C:\OpenSSL-Win @abstr_number \bin`) is in your `%Path%` @abstr_hyperlink . If you forget to do this part, you will most likely see a 'File Not Found' error when you start wptserve.

Finally, set the path value in the server configuration file to the default OpenSSL configuration file location. To do this, copy `config.default.json` in the web-platform-tests root to `config.json`. Then edit the JSON so that the key `ssl/openssl/base_conf_path` has a value that is the path to the OpenSSL config file (typically this will be `C:\\OpenSSL-Win @abstr_number \\bin\\openssl.cfg`).

Alternatively, you may also use @abstr_hyperlink in the Windows @abstr_number Anniversary Update build, then access your windows partition from there to launch wptserve.

# Publication

The master branch is automatically synced to http://w @abstr_number c-test.org/.

Pull requests are @abstr_hyperlink except those that modify sensitive resources (such as `.py`). The latter require someone with merge access to comment with "LGTM" or "w @abstr_number c-test:mirror" to indicate the pull request has been checked.

# Finding Things

Each top-level directory matches the shortname used by a standard, with some exceptions. (Typically the shortname is from the standard's corresponding GitHub repository.)

For some of the specifications, the tree under the top-level directory represents the sections of the respective documents, using the section IDs for directory names, with a maximum of three levels deep.

So if you're looking for tests in HTML for "The History interface", they will be under `html/browsers/history/the-history-interface/`.

Various resources that tests depend on are in `common`, `images`, and `fonts`.

# Branches

In the vast majority of cases the **only** upstream branch that you should need to care about is `master`. If you see other branches in the repository, you can generally safely ignore them.

# Contributing

Save the Web, Write Some Tests!

Absolutely everyone is welcome (and even encouraged) to contribute to test development, so long as you fulfill the contribution requirements detailed in the @abstr_hyperlink . No test is too small or too simple, especially if it corresponds to something for which you've noted an interoperability bug in a browser.

The way to contribute is just as usual:

  * Fork this repository (and make sure you're still relatively in sync with it if you forked a while ago).
  * Create a branch for your changes: `git checkout -b topic`.
  * Make your changes.
  * Run the lint script described below.
  * Commit locally and push that to your repo.
  * Send in a pull request based on the above.



## Issues with web-platform-tests

If you spot an issue with a test and are not comfortable providing a pull request per above to fix it, please @abstr_hyperlink . Thank you!

## Lint tool

We have a lint tool for catching common mistakes in test files. You can run it manually by starting the `lint` executable from the root of your local web-platform-tests working directory like this:

@abstr_code_section 

The lint tool is also run automatically for every submitted pull request, and reviewers will not merge branches with tests that have lint errors, so you must fix any errors the lint tool reports. For details on doing that, see the @abstr_hyperlink .

But in the unusual case of error reports for things essential to a certain test or that for other exceptional reasons shouldn't prevent a merge of a test, update and commit the `lint.whitelist` file in the web-platform-tests root directory to suppress the error reports. For details on doing that, see the @abstr_hyperlink .

## Adding command-line scripts ("tools" subdirs)

Sometimes you may want to add a script to the repository that's meant to be used from the command line, not from a browser (e.g., a script for generating test files). If you want to ensure (e.g., for security reasons) that such scripts won't be handled by the HTTP server, but will instead only be usable from the command line, then place them in either:

  * the `tools` subdir at the root of the repository, or

  * the `tools` subdir at the root of any top-level directory in the repository which contains the tests the script is meant to be used with




Any files in those `tools` directories won't be handled by the HTTP server; instead the server will return a @abstr_number if a user navigates to the URL for a file within them.

If you want to add a script for use with a particular set of tests but there isn't yet any `tools` subdir at the root of a top-level directory in the repository containing those tests, you can create a `tools` subdir at the root of that top-level directory and place your scripts there.

For example, if you wanted to add a script for use with tests in the `notifications` directory, create the `notifications/tools` subdir and put your script there.

# Test Review

We can sometimes take a little while to go through pull requests because we have to go through all the tests and ensure that they match the specification correctly. But we look at all of them, and take everything that we can.

OWNERS files are used only to indicate who should be notified of pull requests. If you are interested in receiving notifications of proposed changes to tests in a given directory, feel free to add yourself to the OWNERS file. Anyone with expertise in the specification under test can approve a pull request. In particular, if a test change has already been adequately reviewed "upstream" in another repository, it can be pushed here without any further review by supplying a link to the upstream review.

# Getting Involved

If you wish to contribute actively, you're very welcome to join the public-test-infra@w @abstr_number .org mailing list (low traffic) by @abstr_hyperlink . The mailing list is @abstr_hyperlink .

Join us on irc #testing ( @abstr_hyperlink , port @abstr_number ). The channel is @abstr_hyperlink .

# Documentation

  * @abstr_hyperlink 
  * @abstr_hyperlink 


