# apache @abstr_number Cookbook

@abstr_hyperlink @abstr_hyperlink 

This cookbook provides a complete Debian/Ubuntu style Apache HTTPD configuration. Non-Debian based distributions such as Red Hat/CentOS, ArchLinux and others supported by this cookbook will have a configuration that mimics Debian/Ubuntu style as it is easier to manage with Chef.

Debian-style Apache configuration uses scripts to manage modules and sites (vhosts). The scripts are:

  * a @abstr_number ensite
  * a @abstr_number dissite
  * a @abstr_number enmod
  * a @abstr_number dismod
  * a @abstr_number enconf
  * a @abstr_number disconf



This cookbook ships with templates of these scripts for non Debian/Ubuntu platforms. The scripts are used in the __Definitions__ below.

# Requirements

## Ohai and Chef:

  * Ohai: @abstr_number . @abstr_number . @abstr_number +
  * Chef: @abstr_number . @abstr_number . @abstr_number +



As of v @abstr_number . @abstr_number . @abstr_number , this cookbook makes use of `node['platform_family']` to simplify platform selection logic. This attribute was introduced in Ohai v @abstr_number . @abstr_number . @abstr_number . The recipe methods were introduced in Chef v @abstr_number . @abstr_number . @abstr_number . If you must run an older version of Chef or Ohai, use @abstr_hyperlink .

## Cookbooks:

This cookbook doesn't have direct dependencies on other cookbooks, as none are needed for the default recipe or the general use cases.

Depending on your OS configuration and security policy, you may need additional recipes or cookbooks for this cookbook's recipes to converge on the node. In particular, the following Operating System settings may affect the behavior of this cookbook:

  * apt cache outdated
  * SELinux enabled
  * IPtables
  * Compile tools
  * @abstr_number rd party repositories



On Ubuntu/Debian, use Opscode's `apt` cookbook to ensure the package cache is updated so Chef can install packages, or consider putting apt-get in your bootstrap process or @abstr_hyperlink .

On RHEL, SELinux is enabled by default. The `selinux` cookbook contains a `permissive` recipe that can be used to set SELinux to "Permissive" state. Otherwise, additional recipes need to be created by the user to address SELinux permissions.

The easiest but **certainly not ideal way** to deal with IPtables is to flush all rules. Opscode does provide an `iptables` cookbook but is migrating from the approach used there to a more robust solution utilizing a general "firewall" LWRP that would have an "iptables" provider. Alternately, you can use ufw, with Opscode's `ufw` and `firewall` cookbooks to set up rules. See those cookbooks' READMEs for documentation.

Build/compile tools may not be installed on the system by default. Some recipes (e.g., `apache @abstr_number ::mod_auth_openid`) build the module from source. Use Opscode's `build-essential` cookbook to get essential build packages installed.

On ArchLinux, if you are using the `apache @abstr_number ::mod_auth_openid` recipe, you also need the `pacman` cookbook for the `pacman_aur` LWRP. Put `recipe[pacman]` on the node's expanded run list (on the node or in a role). This is not an explicit dependency because it is only required for this single recipe and platform; the pacman default recipe performs `pacman -Sy` to keep pacman's package cache updated.

The `apache @abstr_number ::god_monitor` recipe uses a definition from the `god` cookbook. Include `recipe[god]` in the node's expanded run list to ensure that the cookbook is available to the node, and to set up `god`.

## Platforms:

The following platforms and versions are tested and supported using @abstr_hyperlink 

  * Ubuntu @abstr_number . @abstr_number , @abstr_number . @abstr_number 
  * Debian @abstr_number . @abstr_number 
  * CentOS @abstr_number . @abstr_number , @abstr_number . @abstr_number 



The following platform families are supported in the code, and are assumed to work based on the successful testing on Ubuntu and CentOS.

  * Red Hat (rhel)
  * Fedora
  * Amazon Linux



The following platforms are also supported in the code, have been tested manually but are not tested under test-kitchen.

  * SUSE/OpenSUSE
  * ArchLinux
  * FreeBSD



### Notes for RHEL Family:

On Red Hat Enterprise Linux and derivatives, the EPEL repository may be necessary to install packages used in certain recipes. The `apache @abstr_number ::default` recipe, however, does not require any additional repositories. Opscode's `yum-epel` cookbook can be used to add the EPEL repository. See __Examples__ for more information.

### Notes for FreeBSD:

Version @abstr_number . @abstr_number has been had some basic testing against FreeBSD @abstr_number . @abstr_number using Chef @abstr_number . @abstr_number . @abstr_number which has support for pkgng (CHEF- @abstr_number ).

# Tests

This cookbook in the @abstr_hyperlink contains chefspec, serverspec and cucumber tests. This is an initial proof of concept that will be fleshed out with more supporting infrastructure at a future time.

Please see the CONTRIBUTING file for information on how to add tests for your contributions.

# Attributes

This cookbook uses many attributes, broken up into a few different kinds.

## Platform specific

In order to support the broadest number of platforms, several attributes are determined based on the node's platform. See the attributes/default.rb file for default values in the case statement at the top of the file.

  * `node['apache']['package']` \- Package name for Apache @abstr_number 
  * `node['apache']['perl_pkg']` \- Package name for Perl
  * `node['apache']['dir']` \- Location for the Apache configuration
  * `node['apache']['log_dir']` \- Location for Apache logs
  * `node['apache']['error_log']` \- Location for the default error log
  * `node['apache']['access_log']` \- Location for the default access log
  * `node['apache']['user']` \- User Apache runs as
  * `node['apache']['group']` \- Group Apache runs as
  * `node['apache']['binary']` \- Apache httpd server daemon
  * `node['apache']['conf_dir']` \- Location for the main config file (e.g apache @abstr_number .conf or httpd.conf)
  * `node['apache']['docroot_dir']` \- Location for docroot
  * `node['apache']['cgibin_dir']` \- Location for cgi-bin
  * `node['apache']['icondir']` \- Location for icons
  * `node['apache']['cache_dir']` \- Location for cached files used by Apache itself or recipes
  * `node['apache']['pid_file']` \- Location of the PID file for Apache httpd
  * `node['apache']['lib_dir']` \- Location for shared libraries
  * `node['apache']['default_site_enabled']` \- Default site enabled. Default is false.
  * `node['apache']['ext_status']` \- if true, enables ExtendedStatus for `mod_status`



## General settings

These are general settings used in recipes and templates. Default values are noted.

  * `node['apache']['version']` \- Specifing @abstr_number . @abstr_number triggers apache @abstr_number . @abstr_number support. If the platform is known during our test to install @abstr_number . @abstr_number by default, it will be set to @abstr_number . @abstr_number for you. Otherwise it falls back to @abstr_number . @abstr_number .
  * `node['apache']['listen_addresses']` \- Addresses that httpd should listen on. Default is any ("*").
  * `node['apache']['listen_ports']` \- Ports that httpd should listen on. Default is port @abstr_number .
  * `node['apache']['contact']` \- Value for ServerAdmin directive. Default "ops@example.com".
  * `node['apache']['timeout']` \- Value for the Timeout directive. Default is @abstr_number .
  * `node['apache']['keepalive']` \- Value for the KeepAlive directive. Default is On.
  * `node['apache']['keepaliverequests']` \- Value for MaxKeepAliveRequests. Default is @abstr_number .
  * `node['apache']['keepalivetimeout']` \- Value for the KeepAliveTimeout directive. Default is @abstr_number .
  * `node['apache']['sysconfig_additional_params']` \- Additionals variables set in sysconfig file. Default is empty.
  * `node['apache']['default_modules']` \- Array of module names. Can take "mod_FOO" or "FOO" as names, where FOO is the apache module, e.g. "`mod_status`" or "`status`".
  * `node['apache']['mpm']` \- With apache.version @abstr_number . @abstr_number , specifies what Multi-Processing Module to enable. Default is "prefork".



The modules listed in `default_modules` will be included as recipes in `recipe[apache::default]`.

## Prefork attributes

Prefork attributes are used for tuning the Apache HTTPD @abstr_hyperlink configuration.

  * `node['apache']['prefork']['startservers']` \- initial number of server processes to start. Default is @abstr_number .
  * `node['apache']['prefork']['minspareservers']` \- minimum number of spare server processes. Default @abstr_number .
  * `node['apache']['prefork']['maxspareservers']` \- maximum number of spare server processes. Default @abstr_number .
  * `node['apache']['prefork']['serverlimit']` \- upper limit on configurable server processes. Default @abstr_number .
  * `node['apache']['prefork']['maxrequestworkers']` \- Maximum number of connections that will be processed simultaneously
  * `node['apache']['prefork']['maxconnectionsperchild']` \- Maximum number of request a child process will handle. Default @abstr_number .



## Worker attributes

Worker attributes are used for tuning the Apache HTTPD @abstr_hyperlink configuration.

  * `node['apache']['worker']['startservers']` \- Initial number of server processes to start. Default @abstr_number 
  * `node['apache']['worker']['serverlimit']` \- Upper limit on configurable server processes. Default @abstr_number .
  * `node['apache']['worker']['minsparethreads']` \- Minimum number of spare worker threads. Default @abstr_number 
  * `node['apache']['worker']['maxsparethreads']` \- Maximum number of spare worker threads. Default @abstr_number .
  * `node['apache']['worker']['maxrequestworkers']` \- Maximum number of simultaneous connections. Default @abstr_number .
  * `node['apache']['worker']['maxconnectionsperchild']` \- Limit on the number of connections that an individual child server will handle during its life.



## Event attributes

Event attributes are used for tuning the Apache HTTPD @abstr_hyperlink configuration.

  * `node['apache']['event']['startservers']` \- Initial number of child server processes created at startup. Default @abstr_number .
  * `node['apache']['event']['serverlimit']` \- Upper limit on configurable number of processes. Default @abstr_number .
  * `node['apache']['event']['minsparethreads']` \- Minimum number of spare worker threads. Default @abstr_number 
  * `node['apache']['event']['maxsparethreads']` \- Maximum number of spare worker threads. Default @abstr_number .
  * `node['apache']['event']['threadlimit']` \- Upper limit on the configurable number of threads per child process. Default @abstr_number .
  * `node['apache']['event']['threadsperchild']` \- Number of threads created by each child process. Default @abstr_number .
  * `node['apache']['event']['maxrequestworkers']` \- Maximum number of connections that will be processed simultaneously.
  * `node['apache']['event']['maxconnectionsperchild']` \- Limit on the number of connections that an individual child server will handle during its life.



## mod_auth_openid attributes

The following attributes are in the `attributes/mod_auth_openid.rb` file. Like all Chef attributes files, they are loaded as well, but they're logistically unrelated to the others, being specific to the `mod_auth_openid` recipe.

  * `node['apache']['mod_auth_openid']['checksum']` \- sha @abstr_number sum of the tarball containing the source.
  * `node['apache']['mod_auth_openid']['ref']` \- Any sha, tag, or branch found from https://github.com/bmuller/mod_auth_openid
  * `node['apache']['mod_auth_openid']['version']` \- directory name version within the tarball
  * `node['apache']['mod_auth_openid']['cache_dir']` \- the cache directory is where the sqlite @abstr_number database is stored. It is separate so it can be managed as a directory resource.
  * `node['apache']['mod_auth_openid']['dblocation']` \- filename of the sqlite @abstr_number database used for directive `AuthOpenIDDBLocation`, stored in the `cache_dir` by default.
  * `node['apache']['mod_auth_openid']['configure_flags']` \- optional array of configure flags passed to the `./configure` step in the compilation of the module.



## mod_ssl attributes

  * `node['apache']['mod_ssl']['cipher_suite']` \- sets the SSLCiphersuite value to the specified string. The default is considered "sane" but you may need to change it for your local security policy, e.g. if you have PCI-DSS requirements. Additional commentary on the @abstr_hyperlink .



# Recipes

Most of the recipes in the cookbook are for enabling Apache modules. Where additional configuration or behavior is used, it is documented below in more detail.

The following recipes merely enable the specified module: `mod_alias`, `mod_auth_basic`, `mod_auth_digest`, `mod_authn_file`, `mod_authnz_ldap`, `mod_authz_default`, `mod_authz_groupfile`, `mod_authz_host`, `mod_authz_user`, `mod_autoindex`, `mod_cgi`, `mod_dav_fs`, `mod_dav_svn`, `mod_deflate`, `mod_dir`, `mod_env`, `mod_expires`, `mod_headers`, `mod_ldap`, `mod_log_config`, `mod_mime`, `mod_negotiation`, `mod_proxy`, `mod_proxy_ajp`, `mod_proxy_balancer`, `mod_proxy_connect`, `mod_proxy_http`, `mod_python`, `mod_rewrite`, `mod_setenvif`, `mod_status`, `mod_wsgi`, `mod_xsendfile`.

On RHEL Family distributions, certain modules ship with a config file with the package. The recipes here may delete those configuration files to ensure they don't conflict with the settings from the cookbook, which will use per-module configuration in `/etc/httpd/mods-enabled`.

## default

The default recipe does a number of things to set up Apache HTTPd. It also includes a number of modules based on the attribute `node['apache']['default_modules']` as recipes.

## logrotate

Logrotate adds a logrotate entry for your apache @abstr_number logs. This recipe requires the `logrotate` cookbook; ensure that `recipe[logrotate]` is in the node's expanded run list.

## mod_auth_cas

This recipe installs the proper package and enables the `auth_cas` module. It can install from source or package. Package is the default, set the attribute `node['apache']['mod_auth_cas']['from_source']` to true to enable source installation. Modify the version to install by changing the attribute `node['apache']['mod_auth_cas']['source_revision']`. It is a version tag by default, but could be master, or another tag, or branch.

The module configuration is written out with the `CASCookiePath` set, otherwise an error loading the module may cause Apache to not start.

**Note** : This recipe does not work on EL @abstr_number platforms unless epel-testing repository is enabled (outside the scope of this cookbook), or the package version @abstr_number . @abstr_number . @abstr_number . @abstr_number - @abstr_number .el @abstr_number or higher is otherwise available to the system due to this bug:

https://bugzilla.redhat.com/show_bug.cgi?format=multiple&id= @abstr_number 

## mod_auth_openid

_*Changed via COOK- @abstr_number *_

This recipe compiles the module from source. In addition to `build-essential`, some other packages are included for installation like the GNU C++ compiler and development headers.

To use the module in your own cookbooks to authenticate systems using OpenIDs, specify an array of OpenIDs that are allowed to authenticate with the attribute `node['apache']['allowed_openids']`. Use the following in a vhost to protect with OpenID authentication:
    
    
    AuthType OpenID require user <%= node['apache']['allowed_openids'].join(' ') %>
    AuthOpenIDDBLocation <%= node['apache']['mod_auth_openid']['dblocation'] %>
    

Change the DBLocation with the attribute as required; this file is in a different location than previous versions, see below. It should be a sane default for most platforms, though, see `attributes/mod_auth_openid.rb`.

### Changes from COOK- @abstr_number :

  * `AuthType OpenID` instead of `AuthOpenIDEnabled On`.
  * `require user` instead of `AuthOpenIDUserProgram`.
  * A bug(?) in `mod_auth_openid` causes it to segfault when attempting to update the database file if the containing directory is not writable by the HTTPD process owner (e.g., www-data), even if the file is writable. In order to not interfere with other settings from the default recipe in this cookbook, the db file is moved.



## mod_fastcgi

Install the fastcgi package and enable the module.

Only work on Debian/Ubuntu

## mod_fcgid

Installs the fcgi package and enables the module. Requires EPEL on RHEL family.

On RHEL family, this recipe will delete the fcgid.conf and on version @abstr_number +, create the /var/run/httpd/mod_fcgid` directory, which prevents the emergency error:
    
    
    [emerg] ( @abstr_number )No such file or directory: mod_fcgid: Can't create shared memory for size XX bytes
    

## mod_php @abstr_number 

Simply installs the appropriate package on Debian, Ubuntu and ArchLinux.

On Red Hat family distributions including Fedora, the php.conf that comes with the package is removed. On RHEL platforms less than v @abstr_number , the `php @abstr_number` package is used.

## mod_ssl

Besides installing and enabling `mod_ssl`, this recipe will append port @abstr_number to the `node['apache']['listen_ports']` attribute array and update the ports.conf.

## god_monitor

Sets up a `god` monitor for Apache. External requirements are the `god` and `runit` cookbooks from Opscode. When using this recipe, include `recipe[god]` in the node's expanded run list to ensure the client downloads it; `god` depends on runit so that will also be downloaded.

**Note** This recipe is not tested under test-kitchen yet and is pending fix in COOK- @abstr_number .

# Definitions

The cookbook provides a few definitions. At some point in the future these definitions may be refactored into lightweight resources and providers as suggested by @abstr_hyperlink .

## apache_config

Sets up configuration file for Apache from a template. The template should be in the same cookbook where the definition is used. This is used by the `apache_conf` definition and is not often used directly.

It will use `a @abstr_number enconf` and `a @abstr_number disconf` to control the symlinking of configuration files between `conf-available` and `conf-enabled`.

Enable or disable an Apache config file in `#{node['apache']['dir']}/conf-available` by calling `a @abstr_number enmod` or `a @abstr_number dismod` to manage the symbolic link in `#{node['apache']['dir']}/conf-enabled`. These config files should be created in your cookbook, and placed on the system using `apache_conf`

### Parameters:

  * `name` \- Name of the config enabled or disabled with the `a @abstr_number enconf` or `a @abstr_number disconf` scripts.
  * `source` \- The location of a template file. The default `name.erb`.
  * `cookbook` \- The cookbook in which the configuration template is located (if it is not located in the current cookbook). The default value is the current cookbook.
  * `enable` \- Default true, which uses `a @abstr_number enconf` to enable the config. If false, the config will be disabled with `a @abstr_number disconf`.



### Examples:

Enable the example config.

` apache_config 'example' do enable true end `

Disable a module:

` apache_config 'disabled_example' do enable false end `

See the recipes directory for many more examples of `apache_config`.

## apache_conf

Writes conf files to the `conf-available` folder, and passes enabled values to `apache_config`.

This definition should generally be called over `apache_config`.

### Parameters:

  * `name` \- Name of the config placed and enabled or disabled with the `a @abstr_number enconf` or `a @abstr_number disconf` scripts.
  * `enable` \- Default true, which uses `a @abstr_number enconf` to enable the config. If false, the config will be disabled with `a @abstr_number disconf`.
  * `conf_path` \- path to put the config in if you need to override the default `conf-available`.



### Examples:

Place and enable the example conf:

` apache_conf 'example' do enable true end `

Place and disable (or never enable to begin with) the example conf:

` apache_conf 'example' do enable false end `

Place the example conf, which has a different path than the default (conf-*):

` apache_conf 'example' do conf_path '/random/example/path' enable false end `

## apache_mod

Sets up configuration file for an Apache module from a template. The template should be in the same cookbook where the definition is used. This is used by the `apache_module` definition and is not often used directly.

This will use a template resource to write the module's configuration file in the `mods-available` under the Apache configuration directory (`node['apache']['dir']`). This is a platform-dependent location. See __apache_module__.

### Parameters:

  * `name` \- Name of the template. When used from the `apache_module`, it will use the same name as the module.



### Examples:

Create `#{node['apache']['dir']}/mods-available/alias.conf`.

` apache_mod "alias" `

## apache_module

Enable or disable an Apache module in `#{node['apache']['dir']}/mods-available` by calling `a @abstr_number enmod` or `a @abstr_number dismod` to manage the symbolic link in `#{node['apache']['dir']}/mods-enabled`. If the module has a configuration file, a template should be created in the cookbook where the definition is used. See __Examples__.

### Parameters:

  * `name` \- Name of the module enabled or disabled with the `a @abstr_number enmod` or `a @abstr_number dismod` scripts.
  * `identifier` \- String to identify the module for the `LoadModule` directive. Not typically needed, defaults to `#{name}_module`
  * `enable` \- Default true, which uses `a @abstr_number enmod` to enable the module. If false, the module will be disabled with `a @abstr_number dismod`.
  * `conf` \- Default false. Set to true if the module has a config file, which will use `apache_mod` for the file.
  * `filename` \- specify the full name of the file, e.g.



### Examples:

Enable the ssl module, which also has a configuration template in `templates/default/mods/ssl.conf.erb`.

` apache_module "ssl" do conf true end `

Enable the php @abstr_number module, which has a different filename than the module default:

` apache_module "php @abstr_number " do filename "libphp @abstr_number .so" end `

Disable a module:

` apache_module "disabled_module" do enable false end `

See the recipes directory for many more examples of `apache_module`.

## apache_site

Enable or disable a VirtualHost in `#{node['apache']['dir']}/sites-available` by calling a @abstr_number ensite or a @abstr_number dissite to manage the symbolic link in `#{node['apache']['dir']}/sites-enabled`.

The template for the site must be managed as a separate resource. To combine the template with enabling a site, see `web_app`.

### Parameters:

  * `name` \- Name of the site.
  * `enable` \- Default true, which uses `a @abstr_number ensite` to enable the site. If false, the site will be disabled with `a @abstr_number dissite`.



## web_app

Manage a template resource for a VirtualHost site, and enable it with `apache_site`. This is commonly done for managing web applications such as Ruby on Rails, PHP or Django, and the default behavior reflects that. However it is flexible.

This definition includes some recipes to make sure the system is configured to have Apache and some sane default modules:

  * `apache @abstr_number`
  * `apache @abstr_number ::mod_rewrite`
  * `apache @abstr_number ::mod_deflate`
  * `apache @abstr_number ::mod_headers`



It will then configure the template (see __Parameters__ and __Examples__ below), and enable or disable the site per the `enable` parameter.

### Parameters:

Current parameters used by the definition:

  * `name` \- The name of the site. The template will be written to `#{node['apache']['dir']}/sites-available/#{params['name']}.conf`
  * `cookbook` \- Optional. Cookbook where the source template is. If this is not defined, Chef will use the named template in the cookbook where the definition is used.
  * `template` \- Default `web_app.conf.erb`, source template file.
  * `enable` \- Default true. Passed to the `apache_site` definition.



Additional parameters can be defined when the definition is called in a recipe, see __Examples__.

### Examples:

The recommended way to use the `web_app` definition is in a application specific cookbook named "my_app". The following example would look for a template named 'web_app.conf.erb' in your cookbook containing the apache httpd directives defining the `VirtualHost` that would serve up "my_app".

` web_app "my_app" do template 'web_app.conf.erb' server_name node['my_app']['hostname'] end `

All parameters are passed into the template. You can use whatever you like. The apache @abstr_number cookbook comes with a `web_app.conf.erb` template as an example. The following parameters are used in the template:

  * `server_name` \- ServerName directive.
  * `server_aliases` \- ServerAlias directive. Must be an array of aliases.
  * `docroot` \- DocumentRoot directive.
  * `application_name` \- Used in RewriteLog directive. Will be set to the `name` parameter.
  * `directory_index` \- Allow overriding the default DirectoryIndex setting, optional
  * `directory_options` \- Override Options on the docroot, for example to add parameters like Includes or Indexes, optional.
  * `allow_override` \- Modify the AllowOverride directive on the docroot to support apps that need .htaccess to modify configuration or require authentication.



To use the default web_app, for example:

` web_app "my_site" do server_name node['hostname'] server_aliases [node['fqdn'], "my-site.example.com"] docroot "/srv/www/my_site" cookbook 'apache @abstr_number ' end `

The parameters specified will be used as:

  * `@params[:server_name]`
  * `@params[:server_aliases]`
  * `@params[:docroot]`



In the template. When you write your own, the `@` is significant.

For more information about Definitions and parameters, see the @abstr_hyperlink 

# Usage

Using this cookbook is relatively straightforward. Add the desired recipes to the run list of a node, or create a role. Depending on your environment, you may have multiple roles that use different recipes from this cookbook. Adjust any attributes as desired. For example, to create a basic role for web servers that provide both HTTP and HTTPS:

` % cat roles/webserver.rb name "webserver" description "Systems that serve HTTP and HTTPS" run_list( "recipe[apache @abstr_number ]", "recipe[apache @abstr_number ::mod_ssl]" ) default_attributes( "apache" => { "listen_ports" => [" @abstr_number ", " @abstr_number "] } ) `

For examples of using the definitions in your own recipes, see their respective sections above.

# License and Authors

  * Author:: Adam Jacob @abstr_hyperlink 
  * Author:: Joshua Timberman @abstr_hyperlink 
  * Author:: Bryan McLellan @abstr_hyperlink 
  * Author:: Dave Esposito @abstr_hyperlink 
  * Author:: David Abdemoulaie @abstr_hyperlink 
  * Author:: Edmund Haselwanter @abstr_hyperlink 
  * Author:: Eric Rochester 
  * Author:: Jim Browne 
  * Author:: Matthew Kent @abstr_hyperlink 
  * Author:: Nathen Harvey @abstr_hyperlink 
  * Author:: Ringo De Smet @abstr_hyperlink 
  * Author:: Sean OMeara @abstr_hyperlink 
  * Author:: Seth Chisamore @abstr_hyperlink 
  * Author:: Gilles Devaux @abstr_hyperlink 
  * Author:: Sander van Zoest @abstr_hyperlink 
  * Author:: Taylor Price @abstr_hyperlink 

  * Copyright:: @abstr_number - @abstr_number , Opscode, Inc

  * Copyright:: @abstr_number , Atriso
  * Copyright:: @abstr_number , CustomInk, LLC.
  * Copyright:: @abstr_number - @abstr_number , OneHealth Solutions, Inc.
  * Copyright:: @abstr_number , Viverae, Inc.



Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
    
    
    http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number
    

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
