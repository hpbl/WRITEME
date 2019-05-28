## GeoNotebook @abstr_hyperlink @abstr_hyperlink 

GeoNotebook is an application that provides client/server environment with interactive visualization and analysis capabilities using @abstr_hyperlink , [GeoJS] (http://www.github.com/OpenGeoscience/geojs) and other open source tools. Jointly developed by @abstr_hyperlink and @abstr_hyperlink .

## Screenshots

@abstr_image 

Checkout some additional screenshots

## Installation

### System Prerequisites

For default tile serving \+ GDAL >= @abstr_number . @abstr_number . @abstr_number \+ mapnik >= @abstr_number . @abstr_number . @abstr_number \+ python-mapnik >= @abstr_number . @abstr_number 

### Clone the repo:

@abstr_code_section 

### Make a virtualenv, install jupyter[notebook], install geonotebook

@abstr_code_section 

_Note_ The `serverextension` and `nbextension` commands accept flags that configure how and where the extensions are installed. See `jupyter serverextension --help` for more information.

### Installing geonotebook for development

When developing geonotebook, it is often helpful to install packages as a reference to the checked out repository rather than copying them to the system `site-packages`. A "development install" will allow you to make live changes to python or javascript without reinstalling the package. @abstr_code_section 

### Run the notebook:

@abstr_code_section 

### Configure the notebook:

Geonotebook relies on a configuration for several of its options. The system will merge configuration files in the following precedence:

  * /etc/geonotebook.ini
  * /usr/etc/geonotebook.ini
  * /usr/local/etc/geonotebook.ini
  * `sys.prefix`/etc/geonotebook.ini (e.g. /home/user/.virtual_environments/geonotebook/etc/geonotebook.inig)
  * ~/.geonotebook.ini
  * `os.getcwd()`/.geonotebook.ini
  * any path specified in the `GEONOTEBOOK_INI` environment variable.



The default configuration is installed in `sys.prefix`/etc/geonotebook.ini

### Run the tests

@abstr_code_section 

## Docker Container

System requirements for running the notebook can sometimes prove burdensome to install. To ease these issues we have included a docker container that will run the notebook inside a containerized process. 

## Vagrant Machine

Additionally there is a `Vagrantfile` for standing up an instance of Geonotebook within a virtual machine, further instructions can be found here.

## Tile Server

By default geonotebook provides its own tile server based on @abstr_hyperlink and @abstr_hyperlink as a Jupyter Notebook server extension. Assuming system pre-requisites are available this should not need to be configured. Alternately geonotebook may be configured to use a pre-existing @abstr_hyperlink for serving tiles. A built in geoserver implementation is available as a virtual machine in devops/geoserver/. 

### Use geoserver for tile serving

First provision the geoserver

@abstr_code_section 

Second change the `vis_server` configuration to `geoserver` in the `[default]` section of your configuration. Then include a `[geoserver]` section with the pertinent configuration. E.g.:

@abstr_code_section 
