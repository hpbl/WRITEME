# Module: firewalld

## Description

This module manages firewalld, the userland interface that replaces iptables and ships with RHEL @abstr_number . The module manages firewalld itself as well as providing types and providers for managing firewalld zones and rich rules. 

## Usage

The firewalld module contains types and providers to manage zones and rich rules by interfacing with the `firewall-cmd` command. The following types are currently supported. Note that all zone and rules management is done in `--permanent` mode.

### Firewalld Zones

Firewalld zones can be managed with the `firewalld_zone` resource type.

_Example_:

@abstr_code_section 

#### Parameters

  * `target`: Specify the target of the zone
  * `purge_rich_rules`: Optional, and defaulted to false. When true any configured rich rules found in the zone that do not match what is in the Puppet catalog will be purged.



### Firewalld rich rules

Firewalld rich rules are managed using the `firewalld_rich_rule` resource type

firewalld_rich_rules will `autorequire` the firewalld_zone specified in the `zone` parameter so there is no need to add dependancies for this 

_Example_:

@abstr_code_section 

#### Parameters

  * `zone`: Name of the zone this rich rule belongs to

  * `family`: Protocol family, defaults to `ipv @abstr_number`

  * `source`: Source address information. This can be a hash containing the keys `address` and `invert`, or a string containing just the IP address @abstr_code_section 

  * `dest`: Source address information. This can be a hash containing the keys `address` and `invert`, or a string containing just the IP address @abstr_code_section 

  * `log`: When set to `true` will enable logging, optionally this can be hash with `prefix`, `level` and `limit` @abstr_code_section 

  * `audit`: When set to `true` will enable auditing, optionally this can be hash with `limit` @abstr_code_section 

  * `action`: A string containing the action `accept`, `reject` or `drop`. For `reject` it can be optionally supplied as a hash containing `type` @abstr_code_section 




The following paramters are the element of the rich rule, only _one_ may be used.

  * `service`: Name of the service

  * `port`: A hash containing `port` and `protocol` values @abstr_code_section 

  * `icmp_block`: Specify an `icmp-block` for the rule

  * `masquerade`: Set to `true` or `false` to enable masquerading

  * `forward_port`: Set forward-port, this should be a hash containing `port`,`protocol`,`to_port`,`to_addr` @abstr_code_section 




## Limitations / TODO (PR's welcome!)

  * Currently only _target_ is a managable property for a zone



## Author

  * Written and maintained by Craig Dunn @abstr_hyperlink @crayfisx
  * Sponsered by Baloise Group @abstr_hyperlink 


