# WildFly Application Server

http://wildfly.org

  * Fast Startup
  * Small Footprint
  * Modular Design
  * Unified Configuration and Management



And of course Java EE!

## Building

Ensure you have JDK @abstr_number (or newer) installed

> java -version

On *nix-like system use the prepared script

> ./build.sh

On Windows use the corresponding batch script

> build.bat

If you already have Maven @abstr_number . @abstr_number . @abstr_number (or newer) installed you can use it directly

> mvn install

## Starting and Stopping WildFly 

Change to the bin directory after a successful build

> $ cd build/target/wildfly-[version]/bin

Start the server in domain mode

> $ ./domain.sh

Start the server in standalone mode

> $ ./standalone.sh

To stop the server, press Ctrl + C, or use the admin console

> $ ./jboss-cli.sh --connect command=:shutdown

More information: https://docs.jboss.org/author/display/WFLY @abstr_number /Getting+Started+Guide

## Contributing

https://developer.jboss.org/wiki/HackingOnWildFly

## Running the Testsuite

The testsuite module contains several submodules including the following:

  * "smoke" -- core tests that should be run as part of every build of the AS. Failures here will fail the build.
  * "api" -- tests of features that involve end user use of the public JBoss AS @abstr_number API. Should be run with no failures before any major commits.
  * "cluster" -- tests of the WildFly HA clustering features. Should be run with no failures before any major commits.
  * "domain" -- tests of the domain management features. Should be run with no failures before any major commits.
  * "integration" -- tests of a WildFly standalone server's internals. Should be run with no failures before any major commits.
  * "spec" -- tests of features that only involve end user use of the Java EE @abstr_number spec APIs. Should be run with no failures before any major commits.



To run the basic testsuite including smoke tests from the root directory, run the build script "./build.sh" or "build.bat":

For basic smoke tests, simply: "./build.sh test"

To run all the tests

> $ ./build.sh install -DallTests

## Using Eclipse

@abstr_number . Install the latest version of eclipse @abstr_number . Make sure Xmx in eclipse.ini is at least @abstr_number M, and it's using Java @abstr_number @abstr_number . Launch eclipse and install the m @abstr_number e plugin, make sure it uses your repo configs (get it from: http://www.eclipse.org/m @abstr_number e/ or install "Maven Integration for Eclipse" from the Eclipse Marketplace) @abstr_number . In eclipse preferences Java->Compiler->Errors/Warnings->Deprecated and restricted set forbidden reference to WARNING @abstr_number . In eclipse preferences Java->Code Style, import the cleanup, templates, and formatter configs in @abstr_hyperlink in the wildfly-core repository. @abstr_number . In eclipse preferences Java->Editor->Save Actions enable "Additional Actions", and deselect all actions except for "Remove trailing whitespace" @abstr_number . Use import on the root pom, which will pull in all modules @abstr_number . Wait (m @abstr_number e takes a while on initial import)

## License

  * @abstr_hyperlink 


