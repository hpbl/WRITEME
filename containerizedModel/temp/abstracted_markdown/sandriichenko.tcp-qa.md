# tcp-qa

Default template used here requires @abstr_number vCPU and @abstr_number Gb host RAM.

## Clone the repo

@abstr_code_section 

## Install requirements

@abstr_code_section * Note: Please read [ @abstr_number ] if you don't have fuel-devops installed, because there are required some additional packages and configuration.

## Get cloudinit images

@abstr_code_section 

## Export variables

Required: @abstr_code_section 

Optional: @abstr_code_section 

## Run deploy test for mk @abstr_number -lab-dvr

Note: This lab is not finished yet. TBD: configure vsrx node @abstr_code_section export ENV_NAME=tcpcloud-mk @abstr_number -ovs # You can set any env name export LAB_CONFIG_NAME=mk @abstr_number -lab-ovs # Name of set of templates

LC_ALL=en_US.UTF- @abstr_number py.test -vvv -s -k test_tcp_install_default

## Run deploy test for mk @abstr_number -qa-lab @abstr_number 

Note: This lab is not finished yet. TBD: configure vsrx node @abstr_code_section , or as an alternative there is another test that use deploy scripts from models repository written on bash [ @abstr_number ]: @abstr_code_section 

Labs with names mk @abstr_number -lab-basic and mk @abstr_number -lab-avdanced are deprecated and not recommended to use.

## Create and start the env for manual tests

@abstr_code_section 

Then, wait until cloud-init is finished and port @abstr_number is open (~ @abstr_number - @abstr_number minutes), and login with root:r @abstr_number tme

[ @abstr_number ] https://github.com/openstack/fuel-devops/blob/master/doc/source/install.rst

[ @abstr_number ] https://github.com/Mirantis/mk-lab-salt-model/tree/dash/scripts
