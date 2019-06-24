===============================

# Glances - An eye on your system

.. image:: https://img.shields.io/pypi/v/glances.svg :target: https://pypi.python.org/pypi/Glances

.. image:: https://img.shields.io/github/stars/nicolargo/glances.svg :target: https://github.com/nicolargo/glances/ :alt: Github stars

.. image:: https://pepy.tech/badge/glances/month :target: https://pepy.tech/project/glances :alt: Downloads

.. image:: https://img.shields.io/travis/nicolargo/glances/master.svg?maxAge= @abstr_number &label=Linux% @abstr_number /% @abstr_number BSD% @abstr_number /% @abstr_number macOS :target: https://travis-ci.org/nicolargo/glances :alt: Linux tests (Travis)

.. image:: https://img.shields.io/appveyor/ci/nicolargo/glances/master.svg?maxAge= @abstr_number &label=Windows :target: https://ci.appveyor.com/project/nicolargo/glances :alt: Windows tests (Appveyor)

.. image:: https://scrutinizer-ci.com/g/nicolargo/glances/badges/quality-score.png?b=develop :target: https://scrutinizer-ci.com/g/nicolargo/glances/?branch=develop

.. image:: https://img.shields.io/badge/Donate-PayPal-green.svg :target: https://www.paypal.me/nicolargo

.. image:: https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow% @abstr_number % @abstr_number nicolargo :target: https://twitter.com/nicolargo

# Summary

**Glances** is a cross-platform monitoring tool which aims to present a large amount of monitoring information through a curses or Web based interface. The information dynamically adapts depending on the size of the user interface.

.. image:: https://raw.githubusercontent.com/nicolargo/glances/develop/docs/_static/glances-summary.png

It can also work in client/server mode. Remote monitoring could be done via terminal, Web interface or API (XML-RPC and RESTful). Stats can also be exported to files or external time/value databases.

.. image:: https://raw.githubusercontent.com/nicolargo/glances/develop/docs/_static/glances-responsive-webdesign.png

Glances is written in Python and uses libraries to grab information from your system. It is based on an open architecture where developers can add new plugins or exports modules.

# Requirements

  * `python @abstr_number . @abstr_number ,>= @abstr_number . @abstr_number`
  * `psutil>= @abstr_number . @abstr_number . @abstr_number` (better with latest version)



Optional dependencies:

  * `bernhard` (for the Riemann export module)
  * `bottle` (for Web server mode)
  * `cassandra-driver` (for the Cassandra export module)
  * `couchdb` (for the CouchDB export module)
  * `docker` (for the Docker monitoring support) [Linux/macOS-only]
  * `elasticsearch` (for the Elastic Search export module)
  * `hddtemp` (for HDD temperature monitoring support) [Linux-only]
  * `influxdb` (for the InfluxDB export module)
  * `kafka-python` (for the Kafka export module)
  * `netifaces` (for the IP plugin)
  * `nvidia-ml-py @abstr_number` (for the GPU plugin)
  * `pika` (for the RabbitMQ/ActiveMQ export module)
  * `potsdb` (for the OpenTSDB export module)
  * `prometheus_client` (for the Prometheus export module)
  * `py-cpuinfo` (for the Quicklook CPU info module)
  * `pygal` (for the graph export module)
  * `pymdstat` (for RAID support) [Linux-only]
  * `pySMART.smartx` (for HDD Smart support) [Linux-only]
  * `pysnmp` (for SNMP support)
  * `pystache` (for the action script feature)
  * `pyzmq` (for the ZeroMQ export module)
  * `requests` (for the Ports, Cloud plugins and RESTful export module)
  * `scandir` (for the Folders plugin) [Only for Python < @abstr_number . @abstr_number ]
  * `statsd` (for the StatsD export module)
  * `wifi` (for the wifi plugin) [Linux-only]
  * `zeroconf` (for the autodiscover mode)



_Note for Python @abstr_number . @abstr_number users_

Glances no longer supports Python @abstr_number . @abstr_number . Please upgrade to a minimum Python version of @abstr_number . @abstr_number / @abstr_number . @abstr_number + or downgrade to Glances @abstr_number . @abstr_number . @abstr_number (last version with Python @abstr_number . @abstr_number support).

_Note for CentOS Linux @abstr_number and @abstr_number users_

Python @abstr_number . @abstr_number and @abstr_number . @abstr_number are now available via SCL repositories. See: https://lists.centos.org/pipermail/centos-announce/ @abstr_number -December/ @abstr_number .html.

# Installation

There are several methods to test/install Glances on your system. Choose your weapon!

## Glances Auto Install script: the total way

To install both dependencies and the latest Glances production ready version (aka _master_ branch), just enter the following command line:

.. code-block:: console
    
    
    curl -L https://bit.ly/glances | /bin/bash
    

or

.. code-block:: console
    
    
    wget -O- https://bit.ly/glances | /bin/bash
    

_Note_ : This is only supported on some GNU/Linux distributions and Mac OS X. If you want to support other distributions, please contribute to `glancesautoinstall`_.

## PyPI: The simple way

Glances is on `PyPI`. By using PyPI, you will be using the latest stable version.

To install, simply use `pip`:

.. code-block:: console
    
    
    pip install glances
    

_Note_ : Python headers are required to install `psutil`_. For example, on Debian/Ubuntu you need to install first the _python-dev_ package. For Fedora/CentOS/RHEL install first _python-devel_ package. For Windows, just install psutil from the binary installation file.

_Note @abstr_number (for the Wifi plugin)_ : If you want to use the Wifi plugin, you need to install the _wireless-tools_ package on your system.

You can also install the following libraries in order to use optional features (like the Web interface, exports modules...):

.. code-block:: console
    
    
    pip install 'glances[action,browser,cloud,cpuinfo,docker,export,folders,gpu,graph,ip,raid,snmp,web,wifi]'
    

To upgrade Glances to the latest version:

.. code-block:: console
    
    
    pip install --upgrade glances
    pip install --upgrade glances[...]
    

If you need to install Glances in a specific user location, use:

.. code-block:: console
    
    
    export PYTHONUSERBASE=~/mylocalpath
    pip install --user glances
    

## Docker: the funny way

A Glances container is available. It includes the latest development HEAD version. You can use it to monitor your server and all your other containers!

Get the Glances container:

.. code-block:: console
    
    
    docker pull nicolargo/glances
    

Run the container in _console mode_ :

.. code-block:: console
    
    
    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock:ro --pid host --network host -it docker.io/nicolargo/glances
    

Additionally, if you want to use your own glances.conf file, you can create your own Dockerfile:

.. code-block:: console
    
    
    FROM nicolargo/glances
    COPY glances.conf /glances/conf/glances.conf
    CMD python -m glances -C /glances/conf/glances.conf $GLANCES_OPT
    

Alternatively, you can specify something along the same lines with docker run options:

.. code-block:: console
    
    
    docker run -v `pwd`/glances.conf:/glances/conf/glances.conf -v /var/run/docker.sock:/var/run/docker.sock:ro --pid host -it docker.io/nicolargo/glances
    

Where `pwd`/glances.conf is a local directory containing your glances.conf file.

Run the container in _Web server mode_ (notice the `GLANCES_OPT` environment variable setting parameters for the glances startup command):

.. code-block:: console
    
    
    docker run -d --restart="always" -p  @abstr_number - @abstr_number : @abstr_number - @abstr_number  -e GLANCES_OPT="-w" -v /var/run/docker.sock:/var/run/docker.sock:ro --pid host docker.io/nicolargo/glances
    

## GNU/Linux

`Glances` is available on many Linux distributions, so you should be able to install it using your favorite package manager. Be aware that when you use this method the operating system `package`_ for `Glances` may not be the latest version.

## FreeBSD

To install the binary package:

.. code-block:: console
    
    
    # pkg install py @abstr_number -glances
    

To install Glances from ports:

.. code-block:: console
    
    
    # cd /usr/ports/sysutils/py-glances/
    # make install clean
    

## macOS

If you do not want to use the glancesautoinstall script, follow this procedure.

macOS users can install Glances using `Homebrew` or `MacPorts`.

Homebrew ````````

.. code-block:: console
    
    
    $ brew install glances
    

MacPorts ````````

.. code-block:: console
    
    
    $ sudo port install glances
    

## Windows

Install `Python`_ for Windows (Python @abstr_number . @abstr_number . @abstr_number + and @abstr_number . @abstr_number + ship with pip) and then run the following command:

.. code-block:: console
    
    
    $ pip install glances
    

Alternatively, you could clone the repository and install with the following command.

.. code-block:: console
    
    
    $ git clone https://github.com/nicolargo/glances.git
    $ cd glances
    $ python setup.py install
    

## Android

You need a rooted device and the `Termux`_ application (available on the Google Play Store).

Start Termux on your device and enter:

.. code-block:: console
    
    
    $ apt update
    $ apt upgrade
    $ apt install clang python python-dev
    $ pip install bottle
    $ pip install glances
    

And start Glances:

.. code-block:: console
    
    
    $ glances
    

You can also run Glances in server mode (-s or -w) in order to remotely monitor your Android device.

## Source

To install Glances from source:

.. code-block:: console
    
    
    $ wget https://github.com/nicolargo/glances/archive/vX.Y.tar.gz -O - | tar xz
    $ cd glances-*
    # python setup.py install
    

_Note_ : Python headers are required to install psutil.

## Chef

An awesome `Chef` cookbook is available to monitor your infrastructure: https://supermarket.chef.io/cookbooks/glances (thanks to Antoine Rouyer)

## Puppet

You can install Glances using `Puppet`: https://github.com/rverchere/puppet-glances

## Ansible

A Glances `Ansible` role is available: https://galaxy.ansible.com/zaxos/glances-ansible-role/

# Usage

For the standalone mode, just run:

.. code-block:: console
    
    
    $ glances
    

For the Web server mode, run:

.. code-block:: console
    
    
    $ glances -w
    

and enter the URL `http://<ip>: @abstr_number` in your favorite web browser.

For the client/server mode, run:

.. code-block:: console
    
    
    $ glances -s
    

on the server side and run:

.. code-block:: console
    
    
    $ glances -c <ip>
    

on the client one.

You can also detect and display all Glances servers available on your network or defined in the configuration file:

.. code-block:: console
    
    
    $ glances --browser
    

You can also display raw stats on stdout:

.. code-block:: console
    
    
    $ glances --stdout cpu.user,mem.used,load
    cpu.user:  @abstr_number . @abstr_number 
    mem.used:  @abstr_number 
    load: {'cpucore':  @abstr_number , 'min @abstr_number ':  @abstr_number . @abstr_number , 'min @abstr_number ':  @abstr_number . @abstr_number , 'min @abstr_number ':  @abstr_number . @abstr_number }
    cpu.user:  @abstr_number . @abstr_number 
    mem.used:  @abstr_number 
    load: {'cpucore':  @abstr_number , 'min @abstr_number ':  @abstr_number . @abstr_number , 'min @abstr_number ':  @abstr_number . @abstr_number , 'min @abstr_number ':  @abstr_number . @abstr_number }
    ...
    

or in a CSV format thanks to the stdout-csv option:

.. code-block:: console
    
    
    $ glances --stdout-csv now,cpu.user,mem.used,load
    now,cpu.user,mem.used,load.cpucore,load.min @abstr_number ,load.min @abstr_number ,load.min @abstr_number 
     @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number  CEST, @abstr_number . @abstr_number , @abstr_number , @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number 
     @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number  CEST, @abstr_number . @abstr_number , @abstr_number , @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number 
    ...
    

and RTFM, always.

# Documentation

For complete documentation have a look at the readthedocs_ website.

If you have any question (after RTFM!), please post it on the official Q&A `forum`_.

# Gateway to other services

Glances can export stats to: `CSV` file, `JSON` file, `InfluxDB`, `Cassandra`, `CouchDB`, `OpenTSDB`, `Prometheus`, `StatsD`, `ElasticSearch`, `RabbitMQ/ActiveMQ`, `ZeroMQ`, `Kafka`, `Riemann` and `RESTful` server.

# How to contribute ?

If you want to contribute to the Glances project, read this `wiki`_ page.

There is also a chat dedicated to the Glances developers:

.. image:: https://badges.gitter.im/Join% @abstr_number Chat.svg :target: https://gitter.im/nicolargo/glances?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge

# Donation

If this project help you, you can give me a tip ;)

.. image:: https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif :target: https://www.paypal.me/nicolargo

# Author

Nicolas Hennion (@nicolargo) @abstr_hyperlink 

.. image:: https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow% @abstr_number % @abstr_number nicolargo :target: https://twitter.com/nicolargo

# License

Glances is distributed under the LGPL version @abstr_number license. See `COPYING` for more details.

.. _psutil: https://github.com/giampaolo/psutil .. _glancesautoinstall: https://github.com/nicolargo/glancesautoinstall .. _Python: https://www.python.org/getit/ .. _Termux: https://play.google.com/store/apps/details?id=com.termux .. _readthedocs: https://glances.readthedocs.io/ .. _forum: https://groups.google.com/forum/?hl=en#!forum/glances-users .. _wiki: https://github.com/nicolargo/glances/wiki/How-to-contribute-to-Glances-% @abstr_number F .. _package: https://repology.org/metapackage/glances/packages
