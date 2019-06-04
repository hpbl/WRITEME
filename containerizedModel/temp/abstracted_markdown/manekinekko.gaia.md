# Gaia

Gaia is Mozilla's Phone UX for the Boot to Gecko (B @abstr_number G) project.

Boot to Gecko aims to create a complete, standalone operating system for the open web.

You can read more about B @abstr_number G here:

> @abstr_hyperlink 

follow us on twitter: @Boot @abstr_number Gecko

> @abstr_hyperlink 

join the Gaia mailing list:

> @abstr_hyperlink 

and talk to us on IRC:

> #gaia on irc.mozilla.org

## Hacking Gaia

@abstr_hyperlink has all the information that you need to start working on Gaia, including building and running Gaia on a compatible device or desktop computer.

## Autolander (bot)

Autolander is a bot which integrations github and bugzilla workflows. Opt-into new features by adding +autolander to your pull request title.

Features available: \- Automatic pull request to bugzilla attachment linking. \- Automatic landing, on green integration run, with a R+ from a suggested reviewer and checkin-needed keyword. \- Comments in the bug with the landed commit, and marks the bug as fixed. \- Validates pull request title and commit message formats. \- Currently only runs a subset of the gaia CI tests which are stable on taskcluster. Ensure you have a green gaia-try run before adding checkin-needed. \- See more at: https://github.com/mozilla/autolander

## Tests

### Unit Tests

Unit tests for an app go in `apps/<APP>/test/unit/`.

To run all the unit tests with B @abstr_number G Desktop:

@abstr_number . Run `DEBUG= @abstr_number make` @abstr_number . Run `make test-agent-server &` @abstr_number . Run B @abstr_number G Desktop and open the Test Agent app @abstr_number . Run `make test-agent-test`

or `make test-agent-test APP=<APP>` to run unit tests for a specific app

More importantly, you can use test-agent-server to watch the files on the filesystem and execute relevant tests when they change:

@abstr_number . Run `DEBUG= @abstr_number make` @abstr_number . Run `make test-agent-server &` @abstr_number . Run B @abstr_number G Desktop and open the Test Agent app @abstr_number . Edit files and when you save them, glance at the console with test-agent-server running

Note: If you add new files, you will need to restart test-agent-server.

As a convenience, you can also use the `gaia-test` script to launch the test-agent-server and open the Test Agent app in firefox:

@abstr_number . Add firefox to your `$PATH` or set `$FIREFOX` to your preferred firefox/aurora/nightly binary. @abstr_number . Run `./bin/gaia-test` to run the test-agent-server and launch firefox. @abstr_number . Run `make test-agent-test` or modify files as described above.

For more details on writing tests, see: https://developer.mozilla.org/en/Mozilla/Boot_to_Gecko/Gaia_Unit_Tests

### Integration Tests

Gaia uses @abstr_hyperlink to run the tests with a custom builder for gaia. Tests should live with the rest of your apps code (in apps/my_app/test/marionette) and test files should end in _test.js.

All integration tests run under a node environment. You need node >= @abstr_number . @abstr_number for this to work predictably.

Shared code for tests lives under shared/test/integration.

#### Running integration tests

NOTE: unless your tests end in _test.js they will not be automatically picked up by `make test-integration`.

@abstr_code_section 

#### Invoking a test file

@abstr_code_section 

For example, we could run the `day_view_test.js` test in calendar app with the below command. @abstr_code_section 

If you would like to run more than one test, we could do the below command. @abstr_code_section 

#### Invoking tests for a specific app

@abstr_code_section 

For example, we could run all tests for the calendar app with `make test-integration APP=calendar`.

#### Skipping a test file

@abstr_code_section For example, we could skip the `day_view_test.js` test in calendar app with the below command. @abstr_code_section 

If you would like to skip more than one test, we could do the below command. @abstr_code_section 

Notice that we could not use the `TEST_FILES` and `SKIP_TEST_FILES` parameters at the same time.

#### Running tests while working

If you wish to run many tests in background you might not want to be disturbed by the b @abstr_number g-desktop window popping everytime, or the sound. One solution for the first issue is to use Xvfb:

@abstr_code_section 

If you are using PulseAudio and want to keep the tests quied, then just force an invalid server:

@abstr_code_section 

You can of course combine both:

@abstr_code_section 

#### Running tests without building profile

if you would like to run tests without building profile, use `make test-integration-test`: @abstr_code_section 

#### Debugging Tests

To view log out from a test

@abstr_code_section 

#### Running tests in OOP mode

To run tests in OOP mode

@abstr_code_section 

#### Where to find documentation

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Gotchas

  * For performance reasons we don't run `make profile` for each test run this means you need to manually remove the `profile-test` folder when you make changes to your apps.

  * If you don't have a b @abstr_number g folder one will be downloaded for you. This can be problematic if you're offline. You can symlink a b @abstr_number g-desktop directory to b @abstr_number g/ in gaia to avoid the download.

  * If you have some weird node errors, try removing node_modules since things may be stale.

  * To get debug information from the b @abstr_number g desktop client, run this: `DEBUG=b @abstr_number g-desktop TEST_FILES=name/of/test.js ./bin/gaia-marionette`

  * To get debug information from b @abstr_number g desktop and all of the marionette plugins, run this: `DEBUG=* TEST_FILES=name/of/test.js ./bin/gaia-marionette`




### UI Tests

#### Functional

See @abstr_hyperlink 

#### Endurance

See @abstr_hyperlink 

### Build System Tests

Build system has its own unit test and integration test. Both are running on @abstr_hyperlink 

#### Build System Unit Tests

To run unit test locally, using following command:

@abstr_code_section 

#### Build System Integration Tests

To run integration test locally, using following command:

@abstr_code_section 

## Generate jsdoc

To generate API reference locally, you have to install grunt with following command:

@abstr_code_section 

then run `make docs` command to generate docs. The generated API docs will be located in `docs` folder.

You could generate single app doc with this:

@abstr_code_section 
