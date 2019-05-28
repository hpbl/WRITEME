# Splunk module for Puppet

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

#### Table of Contents

@abstr_number . Overview @abstr_number . Module Description - What the module does and why it is useful @abstr_number . Setup - The basics of getting started with splunk * What splunk affects * Setup requirements * Beginning with splunk @abstr_number . Usage - Configuration options and additional functionality @abstr_number . Reference - An under-the-hood peek at what the module is doing and how @abstr_number . Limitations - OS compatibility, etc. @abstr_number . Development - Guide for contributing to the module

## Overview

This module provides a method to deploy Splunk Server or Splunk Universal Forwarder with common configurations and ensure the services maintain a running state. It provides types/providers to interact with the various Splunk/Forwarder configuration files.

## Module Description

This module does not configure firewall rules. Firewall rules will need to be configured separately in order to allow for correct operation of Splunk and the Splunk Universal Forwarder. Additionally, this module does not supply Splunk or Splunk Universal Forwarder installation media. Installation media will need to be aquired seperately, and the module configured to use it. Users can use yum or apt to install these components if they're self-hosted.

## Setup

### What splunk affects

  * Installs the Splunk/Forwarder package and manages their config files. It does not purge them by default.
  * The module will set up both Splunk and Splunkforwarder to run as the 'root' user on POSIX platforms.



### Setup Requirements

To begin using this module, use the Puppet Module Tool (PMT) from the command line to install this module:

`puppet module install puppet-splunk`

This will place the module into your primary module path if you do not utilize the --target-dir directive.

You can also use r @abstr_number k or code-manager to deploy the module so ensure that you have the correct entry in your Puppetfile.

Once the module is in place, there is just a little setup needed.

First, you will need to place your downloaded splunk installers into the files directory, `<module_path>/splunk/files/`. If you're using r @abstr_number k or code-manager you'll need to override the `splunk::params::src_root` parameter to point at a modulepath outside of the Splunk module because each deploy will overwrite the files.

The files must be placed according to directory structure example given below.

The expected directory structure is:
    
    
      `-- files
          |-- splunk
          |   `-- $platform
          |       `-- splunk-${version}-${build}-${additl}
          `-- universalforwarder
              `-- $platform
                  `-- splunkforwarder-${version}-${build}-${additl}
    

A semi-populated example files directory might then contain:
    
    
      `-- files
          |-- splunk
          |   `-- linux
          |       |-- splunk- @abstr_number . @abstr_number . @abstr_number -f @abstr_number afce @abstr_number d @abstr_number -linux- @abstr_number . @abstr_number -amd @abstr_number .deb
          |       |-- splunk- @abstr_number . @abstr_number . @abstr_number -f @abstr_number afce @abstr_number d @abstr_number -linux- @abstr_number . @abstr_number -intel.deb
          |       `-- splunk- @abstr_number . @abstr_number . @abstr_number -f @abstr_number afce @abstr_number d @abstr_number -linux- @abstr_number . @abstr_number -x @abstr_number _ @abstr_number .rpm
          `-- universalforwarder
              |-- linux
              |   |-- splunkforwarder- @abstr_number . @abstr_number . @abstr_number -f @abstr_number afce @abstr_number d @abstr_number -linux- @abstr_number . @abstr_number -amd @abstr_number .deb
              |   |-- splunkforwarder- @abstr_number . @abstr_number . @abstr_number -f @abstr_number afce @abstr_number d @abstr_number -linux- @abstr_number . @abstr_number -intel.deb
              |   `-- splunkforwarder- @abstr_number . @abstr_number . @abstr_number -f @abstr_number afce @abstr_number d @abstr_number -linux- @abstr_number . @abstr_number -x @abstr_number _ @abstr_number .rpm
              |-- solaris
              |   `-- splunkforwarder- @abstr_number . @abstr_number . @abstr_number -f @abstr_number afce @abstr_number d @abstr_number -solaris- @abstr_number -intel.pkg
              `-- windows
                  |-- splunkforwarder- @abstr_number . @abstr_number . @abstr_number -f @abstr_number afce @abstr_number d @abstr_number -x @abstr_number -release.msi
                  `-- splunkforwarder- @abstr_number . @abstr_number . @abstr_number -f @abstr_number afce @abstr_number d @abstr_number -x @abstr_number -release.msi
    

Second, you will need to supply the `splunk::params` class with three critical pieces of information.

  * The version of Splunk you are using
  * The build of Splunk you are using
  * The root URL to use to retrieve the packages



In the example given above, the version is @abstr_number . @abstr_number . @abstr_number , the build is f @abstr_number afce @abstr_number d @abstr_number , and the root URL is puppet:///modules/splunk. See the splunk::params class documentation for more information.

### Beginning with splunk

Once the Splunk packages are hosted in the users repository or hosted by the Puppet Server in the modulepath the module is ready to deploy.

## Usage

If a user is installing Splunk with packages provided from their modulepath, this is the most basic way of installing Splunk Server with default settings:

@abstr_code_section 

This is the most basic way of installing the Splunk Universal Forwarder with default settings:

@abstr_code_section 

Once both Splunk and Splunk Universal Forwarder have been deployed on their respective nodes, the Forwarder is ready to start sending logs.

In order to start sending some log data, users can take advantage of the `Splunkforwarder_input` type. Here is a basic example of adding an input to start sending Puppet Server logs:

@abstr_code_section 

This virtual resource will get collected by the `::splunk::forwarder` class if it is tagged with `splunk_forwarder` and will add the appropriate setting to the inputs.conf file and refresh the service.

## Reference

### Types

  * `splunk_config`: This is a meta resource used to configur defaults for all the splunkforwarder and splunk types. This type should not be declared directly as it is declared in `splunk::params` and used internally by the types and providers.

  * `splunk_authentication`: Used to manage ini settings in @abstr_hyperlink 

  * `splunk_authorize`: Used to manage ini settings in @abstr_hyperlink 
  * `splunk_distsearch`: Used to manage ini settings in @abstr_hyperlink 
  * `splunk_indexes`: Used to manage ini settings in @abstr_hyperlink 
  * `splunk_input`: Used to manage ini settings in @abstr_hyperlink 
  * `splunk_limits`: Used to mange ini settings in @abstr_hyperlink 
  * `splunk_output`: Used to manage ini settings in @abstr_hyperlink 
  * `splunk_props`: Used to manage ini settings in @abstr_hyperlink 
  * `splunk_server`: Used to mangage ini settings in @abstr_hyperlink 
  * `splunk_transforms`: Used to manage ini settings in @abstr_hyperlink 
  * `splunk_web`: Used to manage ini settings in @abstr_hyperlink 

  * `splunkforwarder_input`: Used to manage ini settings in @abstr_hyperlink 

  * `splunkforwarder_output`:Used to manage ini settings in @abstr_hyperlink 
  * `splunkforwarder_props`: Used to manage ini settings in @abstr_hyperlink 
  * `splunkforwarder_transforms`: Used to manage ini settings in @abstr_hyperlink 
  * `splunkforwarder_web`: Used to manage ini settings in @abstr_hyperlink 



All of the above types use `puppetlabs/ini_file` as a parent and are declared in an identical way, and accept the following parameters:

  * `section`: The name of the section in the configuration file
  * `setting`: The setting to be managed
  * `value`: The value of the setting



Both section and setting are namevars for the types. Specifying a single string as the title without a forward slash implies that the title is the section to be managed (if the section attribute is not defined). You can also specify the resource title as `section/setting` and ommit both `section` and `setting` params for a more shortform way of declaring the resource. Eg:

@abstr_code_section 

The above resource declarations will all configure the following entry in `outputs.conf`

@abstr_code_section 

Note: if the section contains forward slashes you should not use it as the resource title and should explicitly declare it with the `section` attribute.

## Parameters

### Class: ::splunk::params

#### `version`

_Optional_ Specifies the version of Splunk Enterprise that the module should install.

#### `build`

_Optional_ Specifies the build of Splunk Enterprise that the module should use.

#### `src_root`

_Optional_ The root path that the staging module will use to find packages for splunk and splunk::forwarder.

#### `splunkd_port`

_Optional_ The splunkd port. Used as a default for both splunk and splunk::forwarder.

#### `logging_port`

_Optional_ The port on which to send and listen for logs. Used as a default for both splunk and splunk::forwarder.

#### `server`

_Optional_ The fqdn or IP address of the Splunk server. Used for setting up the default TCP output and input.

### Class: ::splunk Parameters

#### `package_source`

The source URL for the splunk installation media (typically an RPM, MSI, etc). If a $src_root parameter is set in splunk::params, this will be automatically supplied. Otherwise it is required. The URL can be of any protocol supported by the nanliu/staging module.

#### `package_name`

The name of the package(s) Puppet will use to install Splunk.

#### `package_ensure`

Ensure parameter which will get passed to the Splunk package resource. Default to the value in splunk::params

#### `logging_port`

The port to receive TCP logs on. Default to the port specified in splunk::params.

#### `splunk_user`

The user to run Splunk as. Default to the value set in splunk::params.

#### `splunkd_port`

The management port for Splunk. Default to the value set in splunk::params.

#### `web_port`

The port on which to service the Splunk Web interface. Default to @abstr_number .

#### `purge_inputs`

_Optional_ If set to true, inputs.conf will be purged of configuration that is no longer managed by the splunk_input type. Default to false.

#### `purge_outputs`

_Optional_ If set to true, outputs.conf will be purged of configuration that is no longer managed by the splunk_output type. Default to false.

#### `purge_authentication`

_Optional_ If set to true, authentication.conf will be purged of configuration that is no longer managed by the splunk_authentication type. Default to false.

#### `purge_authorize`

_Optional_ If set to true, authorize.conf will be purged of configuration that is no longer managed by the splunk_authorize type. Default to false.

#### `purge_distsearch`

_Optional_ If set to true, distsearch.conf will be purged of configuration that is no longer managed by the splunk_distsearch type. Default to false.

#### `purge_indexes`

_Optional_ If set to true, indexes.conf will be purged of configuration that is no longer managed by the splunk_indexes type. Default to false.

#### `purge_limits`

_Optional_ If set to true, limits.conf will be purged of configuration that is no longer managed by the splunk_limits type. Default to false.

#### `purge_props`

_Optional_ If set to true, props.conf will be purged of configuration that is no longer managed by the splunk_props type. Default to false.

#### `purge_server`

_Optional_ If set to true, server.conf will be purged of configuration that is no longer managed by the splunk_server type. Default to false.

#### `purge_transforms`

_Optional_ If set to true, transforms.conf will be purged of configuration that is no longer managed by the splunk_transforms type. Default to false.

#### `purge_web`

_Optional_ If set to true, web.conf will be purged of configuration that is no longer managed by the splunk_web type. Default to false.

### Class ::splunk::forwarder Parameters

#### `server`

_Optional_ The fqdn or IP address of the Splunk server. Default to the value in ::splunk::params.

#### `package_source`

The source URL for the splunk installation media (typically an RPM, MSI, etc). If a $src_root parameter is set in splunk::params, this will be automatically supplied. Otherwise it is required. The URL can be of any protocol supported by the nanliu/staging module.

#### `package_name`

The name of the package(s) Puppet will use to install Splunk Universal Forwarder.

#### `package_ensure`

Ensure parameter which will get passed to the Splunk package resource. Default to the value in ::splunk::params

#### `logging_port`

_Optional_ The port on which to send and listen for logs. Default to the value in ::splunk::params.

#### `splunkd_port`

The management port for Splunk. Default to the value set in splunk::params.

#### `install_options`

This variable is passed to the package resources' _install_options_ parameter. Default to the value in ::splunk::params.

#### `splunk_user`

The user to run Splunk as. Default to the value set in splunk::params.

#### `splunkd_listen`

The address on which splunkd should listen. Defaults to @abstr_number . @abstr_number . @abstr_number . @abstr_number .

#### `purge_inputs`

_Optional_ If set to true, inputs.conf will be purged of configuration that is no longer managed by the splunkforwarder_input type. Default to false.

#### `purge_outputs`

_Optional_ If set to true, outputs.conf will be purged of configuration that is no longer managed by the splunk_output type. Default to false.

#### `purge_props`

_Optional_ If set to true, props.conf will be purged of configuration that is no longer managed by the splunk_props type. Default to false.

#### `purge_transforms`

_Optional_ If set to true, transforms.conf will be purged of configuration that is no longer managed by the splunk_transforms type. Default to false.

#### `purge_web`

_Optional_ If set to true, web.conf will be purged of configuration that is no longer managed by the splunk_web type. Default to false.

#### `pkg_provider`

_Optional_ This will override the default package provider for the package resource. Default to undef.

#### `forwarder_confdir`

The root directory where Splunk Universal Forwarder is installed. Default to the value in ::splunk::params.

#### `forwarder_input`

Used to override the default forwarder_input type defined in ::splunk::params.

#### `forwarder_output`

Used to override the default forwarder_output type defined in ::splunk::params.

#### `create_password`

Not yet implemented.

## Limitations

  * Currently tested manually on Centos @abstr_number , but we will eventually add automated testing and are targeting compatibility with other platforms.
  * Tested with Puppet @abstr_number .x



## Development

TBD

## Release Notes/Contributors/Etc

TBD
