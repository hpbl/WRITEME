# yowsup @abstr_hyperlink 

@abstr_hyperlink 

yowsup is a python library that enables building applications that can communicate with WhatsApp users. The project started as the protocol engine behind @abstr_hyperlink and @abstr_hyperlink . Now as a standalone library it can be used to power any custom WhatsApp client.

@abstr_code_section 

## See also

During maintenance of yowsup, several projects have been spawned out in order to support different features that get introduced by WhatsApp. Some of those features are not necessarily exclusive to WhatsApp and therefore it only made sense to maintain some parts as standalone projects:

  * @abstr_hyperlink : Python port of @abstr_hyperlink , providing E @abstr_number E encryption
  * @abstr_hyperlink : WhatsApp's handshake implementation using Noise Protocol
  * @abstr_hyperlink : A python implementation for @abstr_hyperlink 



## Quickstart

  * **Installation**
  * **@abstr_hyperlink**
  * **@abstr_hyperlink**
  * **@abstr_hyperlink**



## Installation

Install using setup.py to pull all Python dependencies, or pip:

@abstr_code_section 

### Linux

You need to have installed Python headers (probably from python-dev package) and ncurses-dev, then run @abstr_code_section 

### FreeBSD (*BSD)

You need to have installed: py @abstr_number -pip- @abstr_number . @abstr_number . @abstr_number (+), py @abstr_number -sqlite @abstr_number - @abstr_number . @abstr_number . @abstr_number _ @abstr_number (+), then run @abstr_code_section 

### Mac OS

@abstr_code_section Administrators privileges might be required, if so then run with 'sudo'

### Windows

  * Install @abstr_hyperlink compiler
  * Add mingw to your PATH
  * In PYTHONPATH\Lib\distutils create a file called distutils.cfg and add these lines:

@abstr_code_section 

  * Install gcc: `mingw-get.exe install gcc`
  * Install @abstr_hyperlink 
  * `python setup.py install`



# License:

As of January @abstr_number , @abstr_number yowsup is licensed under the GPLv @abstr_number +: http://www.gnu.org/licenses/gpl- @abstr_number . @abstr_number .html.
