# DESCRIPTION:

Installs Redis. Redis is an open source, advanced key-value store.

It is often referred to as a data structure server since keys can contain strings, hashes, lists, sets and sorted sets.

Details http://redis.io/

@abstr_hyperlink 

# How to add to your cookbook repository

Consider using our chef-solo bootstrap project (includes a simple deployment script for synching with your remote servers).

More information at: https://github.com/aforward/chef-bootstrap

@abstr_code_section 

Then, consider using a git submodule so that you can monitor changes in this cookbook separately.

For more info, check out the @abstr_hyperlink book.

@abstr_code_section 

# REQUIREMENTS:

None (please correct if you encounter issues).

Currently tested on Ubuntu @abstr_number . @abstr_number and @abstr_number . @abstr_number .

# ATTRIBUTES:
    
    
    ['redis']['bind']                   # " @abstr_number . @abstr_number . @abstr_number . @abstr_number "
    ['redis']['port']                   # " @abstr_number "
    ['redis']['config_path']            # "/etc/redis/redis.conf"
    ['redis']['daemonize']              # "yes"
    ['redis']['timeout']                # " @abstr_number "
    ['redis']['loglevel']               # "notice"
    ['redis']['password']               # nil
    ['redis']['include_monit']      # nil
    
    ['redis']['source']['version']          # " @abstr_number . @abstr_number . @abstr_number "
    ['redis']['source']['prefix']           # "/usr/local"
    ['redis']['source']['tar_url']          # "http://redis.googlecode.com/files/redis- @abstr_number . @abstr_number . @abstr_number .tar.gz"
    ['redis']['source']['tar_checksum']     # " @abstr_number e @abstr_number ..."
    ['redis']['source']['create_service']   # true
    ['redis']['source']['user']             # "redis"
    ['redis']['source']['group']            # "redis"
    

# USAGE:

  * Add cookbook `redis` to your runlist. This will install redis on your machine.
  * Add cookbook `redis::source` to your runlist. This will build redis on your machine from source.
  * Add cookbook `redis::gem` to your runlist. This will install the redis Rubygem.
  * Add cookbook `redis::remove` to your runlist if you want to remove redis on your machine.


