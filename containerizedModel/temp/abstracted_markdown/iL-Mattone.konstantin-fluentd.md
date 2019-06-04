# Fluentd

@abstr_hyperlink 

Install, configure, and manage Fluentd data collector.

## Module Description

  * Installs `td-agent` package
  * Generates configuration file `td-agent.conf`
  * Generates custom configuration files and saves them to `config.d/`
  * Manages `td-agent` service
  * Installs Fluentd gem plugins



## Usage

### Routing Events To Elasticsearch

@abstr_code_section 

### Forwarding Events To Fluentd Aggregator

@abstr_code_section 

### Config File Naming

All configs employ a numbering system in the resource's title that is used for ordering. When titling your config, make sure you prefix the filename with a number, for example, `@abstr_number _catch_all.conf`, `@abstr_number _elasticsearch.conf` ( @abstr_number has smaller priority than @abstr_number )

## Reference

### Classes

#### Public Classes

  * `fluentd`: Main class, includes all other classes.



#### Private Classes

  * `fluentd::install`: Handles the packages.
  * `fluentd::service`: Handles the service.



### Parameters

The following parameters are available in the `fluentd` class:

#### `repo_install`

Default value: true

#### `repo_name`

Default value: 'treasuredata'

#### `repo_desc`

Default value: 'TreasureData'

#### `repo_url`

Default value: 'http://packages.treasuredata.com/ @abstr_number /redhat/$releasever/$basearch'

#### `repo_enabled`

Default value: true

#### `repo_gpgcheck`

Default value: true

#### `repo_gpgkey`

Default value: 'https://packages.treasuredata.com/GPG-KEY-td-agent'

#### `repo_gpgkeyid`

Default value: 'C @abstr_number B @abstr_number EC @abstr_number AF @abstr_number C @abstr_number AB @abstr_number DB @abstr_number A @abstr_number E @abstr_number F'

#### `package_name`

Default value: 'td-agent'

#### `package_ensure`

Default value: present

#### `service_name`

Default value: 'td-agent'

#### `service_ensure`

Default value: running

#### `service_enable`

Default value: true

#### `service_manage`

Default value: true

#### `config_file`

Default value: '/etc/td-agent/td-agent.conf'

### Public Defines

  * `fluentd::config`: Generates custom configuration files.
  * `fluentd::plugin`: Installs plugins.



The following parameters are available in the `fluentd::plugin` defined type:

#### `title`

Plugin name

#### `plugin_ensure`

Default value: present

#### `plugin_source`

Default value: 'https://rubygems.org'

The following parameters are available in the `fluentd::config` defined type:

#### `title`

Config filename

#### `config`

Config Hash, please see usage examples.

## Limitations

Tested only on CentOS @abstr_number , Ubuntu @abstr_number . @abstr_number , Debian @abstr_number . @abstr_number 

## Development

Bug reports and pull requests are welcome!

### Running Tests
    
    
    $ bundle install
    $ bundle exec rake lint
    $ bundle exec rake metadata
    $ bundle exec rake spec
    $ bundle exec rake beaker BEAKER_set=centos- @abstr_number -x @abstr_number 
    $ bundle exec rake beaker BEAKER_set=debian- @abstr_number -amd @abstr_number 
    $ bundle exec rake beaker BEAKER_set=ubuntu-server- @abstr_number -x @abstr_number
    

Relevant Beaker docs: https://github.com/puppetlabs/beaker/blob/master/docs/How-to-Write-a-Beaker-Test-for-a-Module.md

### TODO:

  * Remove `rubygems` package dependency



## License

Copyright @abstr_number SPB TV AG

Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

See the License for the specific language governing permissions and limitations under the License.
