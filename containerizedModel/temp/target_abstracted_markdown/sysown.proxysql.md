# Introduction

ProxySQL is a high performance, high availability, protocol aware proxy for MySQL and forks (like Percona Server and MariaDB). All the while getting the unlimited freedom that comes with a GPL license.

Its development is driven by the lack of open source proxies that provide high performance. 

# Useful links

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



# Getting started

### Installation

Released packages can be found here: https://github.com/sysown/proxysql/releases

Just download a package and use your systems package manager to install it: @abstr_code_section 

Alternatively you can also use the available repositories:

#### Ubuntu / Debian:

Adding repository: @abstr_code_section 

Installing: @abstr_code_section 

#### Red Hat / CentOS:

Adding repository: @abstr_code_section 

Installing: @abstr_code_section 

### Service management

Once the software is installed, you can use the `service` command to control the process: 

#### Starting ProxySQL:

@abstr_code_section 

#### Stopping ProxySQL:

@abstr_code_section 

Or alternatively via the Admin interface: @abstr_code_section 

#### Restarting ProxySQL:

@abstr_code_section 

Or alternatively via the Admin interface: @abstr_code_section 

#### Reinitializing ProxySQL from the config file (after first startup the DB file is used instead of the config file):

@abstr_code_section 

### Upgrades

Just install the new package and restart ProxySQL: @abstr_code_section 

### How to check the ProxySQL version

@abstr_code_section @abstr_code_section A debug version has `_DEBUG` in its version string. It is slower than non-debug version, but easier to debug in case of failures. @abstr_code_section @abstr_code_section 

### Configuring ProxySQL via the `admin interface`

First of all, bear in mind that the best way to configure ProxySQL is through its admin interface. This lends itself to online configuration (without having to restart the proxy) via SQL queries to its admin database. It's an effective way to configure it both manually and in an automated fashion.

As a secondary way to configure it, we have the configuration file. 

#### Configuring ProxySQL through the admin interface

To log into the admin interface (with the default credentials) use a mysql client and connect using the following `admin` credentials locally on port ( @abstr_number ): @abstr_code_section 

note: If your MySQL client version is version @abstr_number . @abstr_number or higher add `--default-auth=mysql_native_password` to the above command to connect to the admin interface.

Once connected to the admin interface, you will have a list of databases and tables at your disposal that can be queried using the SQL language: @abstr_code_section This will allow you to control the list of the backend servers, how traffic is routed to them, and other important settings (such as caching, access control, etc). Once you've made modifications to the in-memory data structure, you must load the new configuration to the runtime, or persist the new settings to disk (so that they are still there after a restart of the proxy). A detailed tutorial on how to configure ProxySQL through the Admin interface is available @abstr_hyperlink .

#### Configuring ProxySQL through the config file

Even though the config file should only be regarded as a secondary way to configure the proxy, we must not discard its value as a valid way to bootstrap a fresh ProxySQL install.

Let's quickly go over the main sections of the configuration file (this overview serves as a very high level overview of ProxySQL configuration).

Top-level sections: * `admin_variables`: contains global variables that control the functionality of the admin interface. * `mysql_variables`: contains global variables that control the functionality for handling the incoming MySQL traffic. * `mysql_servers`: contains rows for the `mysql_servers` table from the admin interface. Basically, these define the backend servers towards which the incoming MySQL traffic is routed. Rows are encoded as per the `.cfg` file format, here is an example:
    
    
     @abstr_code_section
    

* `mysql_users`: contains rows for the `mysql_users` table from the admin interface. Basically, these define the users which can connect to the proxy, and the users with which the proxy can connect to the backend servers. Rows are encoded as per the `.cfg` file format, here is an example:
    
    
     @abstr_code_section
    

* `mysql_query_rules`: contains rows for the `mysql_query_rules` table from the admin interface. Basically, these define the rules used to classify and route the incoming MySQL traffic, according to various criteria (patterns matched, user used to run the query, etc.). Rows are encoded as per the `.cfg` file format, here is an example (Note: the example is a very generic query routing rule and it is recommended to create specific rules for queries rather than using a generic rule such as this):
    
    
     @abstr_code_section
    

* top-level configuration item: `datadir`, as a string, to point to the data dir.
