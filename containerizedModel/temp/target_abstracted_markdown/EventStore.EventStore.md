# Event Store

The open-source, functional database with Complex Event Processing in JavaScript.

This is the repository for the open source version of Event Store, which includes the clustering implementation for high availability. 

## Support

Information on commercial support and options such as LDAP authentication can be found on the Event Store website at https://eventstore.org/support.

## CI Status

@abstr_hyperlink 

## Documentation

Documentation for Event Store can be found @abstr_hyperlink 

## Community

We have a fairly active @abstr_hyperlink . If you prefer slack, there is also an #eventstore channel @abstr_hyperlink .

## Release Packages

The latest release packages are hosted in the downloads section on the @abstr_hyperlink 

We also host native packages for Linux on @abstr_hyperlink and Windows packages can be installed via @abstr_hyperlink ( @abstr_number . @abstr_number . @abstr_number onwards only).

## Building Event Store

Event Store is written in a mixture of C#, C++ and JavaScript. It can run either on Mono or .NET, however because it contains platform specific code (including hosting the V @abstr_number JavaScript engine), it must be built for the platform on which you intend to run it.

### Linux

**Prerequisites** \- @abstr_hyperlink \- @abstr_hyperlink 

**Required Environment Variables** @abstr_code_section 

### Windows

**Prerequisites** \- @abstr_hyperlink \- @abstr_hyperlink 

### Mac OS X

**Prerequisites** \- @abstr_hyperlink \- @abstr_hyperlink 

**Required Environment Variables** @abstr_code_section 

### Build EventStore

Once you've installed the prerequisites for your system, you can launch a `Release` build of EventStore as follows: @abstr_code_section 

To start a single node, you can then run: @abstr_code_section 

You'll need to launch the node with `mono` on Linux or Mac OS X.

_Note: The build system has changed after version `@abstr_number . @abstr_number . @abstr_number -hotfix @abstr_number`, therefore the above instructions will not work for old releases._

### Running the tests

You can launch the tests as follows:

#### EventStore Core tests

@abstr_code_section 

#### EventStore Projections tests

@abstr_code_section 

## Building the EventStore Client / Embedded Client

You can build the client / embedded client with the steps below. This will generate a nuget package file (.nupkg) that you can include in your project.

#### Client

@abstr_code_section 

#### Embedded Client

@abstr_code_section 

## Building the EventStore web UI

The web UI is prebuilt and the files are located under src/EventStore.ClusterNode.Web/clusternode-web. If you want to build the web UI, please consult this @abstr_hyperlink which is also a git submodule of the current repository located under `src/EventStore.UI`.

## Building the Projections Library

The list of precompiled projections libraries can be found in `src/libs/x @abstr_number`. If you still want to build the projections library please follow the links below. \- Linux \- Windows \- Mac OS X

## Contributing

Development is done on the `master` branch. We attempt to do our best to ensure that the history remains clean and to do so, we generally ask contributors to squash their commits into a set or single logical commit.

If you want to switch to a particular release, you can check out the tag for this particular version. For example:   
`git checkout oss-v @abstr_number . @abstr_number . @abstr_number`
