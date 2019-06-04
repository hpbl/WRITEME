@abstr_hyperlink is a comprehensive data center inventory management and IP Address management software that integrates centralized password management, impact charts and applications mappings with IT asset management.

This project contains sample scripts to show how to use Device @abstr_number developer APIs and populate device @abstr_number appliance with your network inventory information.

## ## Scripts Provided

  * **api-sample.py** : Runs against a single windows system and uploads info to device @abstr_number appliance
  * **ad-sample.py** : Can run against Active directory computers, servers or a given list and upload discovered systems' info to device @abstr_number appliance.
  * **d @abstr_number _api_linux_upload_sample_script.py** : Runs on a single *nix based system and uploads info to device @abstr_number appliance.
  * **sample-script-facter-facts-to-d @abstr_number .py** : Runs on puppet master and uploads nodes info from facter fact files to device @abstr_number appliance.
  * **d @abstr_number _api_solaris_sample_script.py** : Runs on an individual solaris system and uploads info to device @abstr_number appliance.
  * **linux_auto_dics_multi.py** : Run on a *nix system with paramiko to get inventory using ssh from an IP range and upload to d @abstr_number appliance.
  * **winservice.py** : Can run against Active directory computers, servers or a given list and upload discovered services as application components to device @abstr_number appliance.



## ### Requirement

  * python @abstr_number . @abstr_number .x
  * ad-sample, api-sample and winservice scripts require Poweshell @abstr_number . @abstr_number or Powershell @abstr_number . @abstr_number , .Net @abstr_number and IronPython @abstr_number . @abstr_number .x.
  * linux_auto_disc_multi requires installation of paramiko library. Install: sudo pip install paramiko (or Ubuntu/Debian: sudo apt-get install python-paramiko)



## ### Usage

  * Follow the instructions in individual scripts. Instructions have been added as comments in the scripts provided.



## ### Further Documentation

  * For api-sample.py: @abstr_hyperlink 
  * For ad-sample.py: @abstr_hyperlink 
  * For linux_auto_disc_multi.py: @abstr_hyperlink 


