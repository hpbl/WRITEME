.. image:: https://codecov.io/github/ipython/ipython/coverage.svg?branch=master :target: https://codecov.io/github/ipython/ipython?branch=master

.. image:: https://img.shields.io/pypi/v/IPython.svg :target: https://pypi.python.org/pypi/ipython

.. image:: https://img.shields.io/travis/ipython/ipython.svg :target: https://travis-ci.org/ipython/ipython

.. image:: https://www.codetriage.com/ipython/ipython/badges/users.svg :target: https://www.codetriage.com/ipython/ipython/

===========================================

#  IPython: Productive Interactive Computing

# Overview

Welcome to IPython. Our full documentation is available on `ipython.readthedocs.io <https://ipython.readthedocs.io/en/stable/>`_ and contains information on how to install, use, and contribute to the project.

**IPython versions and Python Support**

_*IPython @abstr_number . @abstr_number *_ requires Python version @abstr_number . @abstr_number and above.

**IPython @abstr_number .x** requires Python version @abstr_number . @abstr_number and above.

**IPython @abstr_number .x LTS** is the compatible release for Python @abstr_number . @abstr_number . If you require Python @abstr_number support, you **must** use IPython @abstr_number .x LTS. Please update your project configurations and requirements as necessary.

The Notebook, Qt console and a number of other pieces are now parts of _Jupyter_. See the `Jupyter installation docs <https://jupyter.readthedocs.io/en/latest/install.html>`__ if you want to use these.

# Development and Instant running

You can find the latest version of the development documentation on `readthedocs <https://ipython.readthedocs.io/en/latest/>`_.

You can run IPython from this directory without even installing it system-wide by typing at the terminal::

$ python -m IPython

Or see the `development installation docs <https://ipython.readthedocs.io/en/latest/install/install.html#installing-the-development-version>`_ for the latest revision on read the docs.

Documentation and installation instructions for older version of IPython can be found on the `IPython website <https://ipython.org/documentation.html>`_

# IPython requires Python version @abstr_number or above

Starting with version @abstr_number . @abstr_number , IPython does not support Python @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , or @abstr_number . @abstr_number .

For a version compatible with Python @abstr_number . @abstr_number , please install the @abstr_number .x LTS Long Term Support version.

If you are encountering this error message you are likely trying to install or use IPython from source. You need to checkout the remote @abstr_number .x branch. If you are using git the following should work::

$ git fetch origin $ git checkout @abstr_number .x

If you encounter this error message with a regular install of IPython, then you likely need to update your package manager, for example if you are using `pip` check the version of pip with::

$ pip --version

You will need to update pip to the version @abstr_number . @abstr_number . @abstr_number or greater. If you are not using pip, please inquiry with the maintainers of the package for your package manager.

For more information see one of our blog posts:
    
    
    https://blog.jupyter.org/release-of-ipython- @abstr_number - @abstr_number - @abstr_number ce @abstr_number b @abstr_number d @abstr_number e @abstr_number e
    

As well as the following Pull-Request for discussion:
    
    
    https://github.com/ipython/ipython/pull/ @abstr_number
    

This error does also occur if you are invoking `setup.py` directly – which you should not – or are using `easy_install` If this is the case, use `pip install .` instead of `setup.py install` , and `pip install -e .` instead of `setup.py develop` If you are depending on IPython as a dependency you may also want to have a conditional dependency on IPython depending on the Python version::
    
    
    install_req = ['ipython']
    if sys.version_info[ @abstr_number ] <  @abstr_number  and 'bdist_wheel' not in sys.argv:
        install_req.remove('ipython')
        install_req.append('ipython< @abstr_number ')
    
    setup(
        ...
        install_requires=install_req
    )
    
