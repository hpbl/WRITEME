# osquery

@abstr_image 

osquery is a SQL powered operating system instrumentation, monitoring, and analytics framework.   
Available for Linux, macOS, Windows and FreeBSD. 

| Platform | Build status | | | | |----------|---------------|---|---|---| |MacOS @abstr_number . @abstr_number | @abstr_hyperlink | | **Homepage:** | https://osquery.io |Ubuntu @abstr_number . @abstr_number | @abstr_hyperlink | | **Downloads:** | https://osquery.io/downloads |Windows Server @abstr_number | @abstr_hyperlink | | **Tables:** | https://osquery.io/schema |FreeBSD @abstr_number | N/A | | **Packs:** | @abstr_hyperlink | | | | **Guide:** | https://osquery.readthedocs.org | | | | @abstr_hyperlink | https://osquery-slack.herokuapp.com

## What is osquery?

osquery exposes an operating system as a high-performance relational database. This allows you to write SQL-based queries to explore operating system data. With osquery, SQL tables represent abstract concepts such as running processes, loaded kernel modules, open network connections, browser plugins, hardware events or file hashes.

SQL tables are implemented via a simple plugin and extensions API. A variety of tables already exist and more are being written: @abstr_hyperlink . To best understand the expressiveness that is afforded to you by osquery, consider the following SQL queries:

List the @abstr_hyperlink : @abstr_code_section 

Check the @abstr_hyperlink that have a deleted executable: @abstr_code_section 

Get the process name, port, and PID, for processes listening on all interfaces: @abstr_code_section 

Find every macOS LaunchDaemon that launches an executable and keeps it running: @abstr_code_section 

Check for ARP anomalies from the host's perspective:

@abstr_code_section 

Alternatively, you could also use a SQL sub-query to accomplish the same result:

@abstr_code_section 

These queries can be: * performed on an ad-hoc basis to explore operating system state using the @abstr_hyperlink shell * executed via a @abstr_hyperlink to monitor operating system state across a set of hosts * launched from custom applications using osquery Thrift APIs

## Download & Install

To download the latest stable builds and for repository information and installation instructions visit @abstr_hyperlink .

## Build from source

Building osquery from source is encouraged! Check out our build guide.

Also check out our contributing guide and join the community on @abstr_hyperlink .

## License

By contributing to osquery you agree that your contributions will be licensed as defined on the LICENSE file.

## Vulnerabilities

We keep track of security announcements in our tagged version release notes on GitHub. We aggregate these into SECURITY.md too.

Facebook has a @abstr_hyperlink program that includes osquery. If you find a security vulnerability in osquery, please submit it via the process outlined on that page and **do not file a public issue**. For more information on finding vulnerabilities in osquery, see our blog post @abstr_hyperlink .

## Learn more

If you're interested in learning more about osquery read the @abstr_hyperlink for background on the project, visit the @abstr_hyperlink .

Development and usage discussion is happening in the osquery Slack, grab an invite automatically @abstr_hyperlink !
