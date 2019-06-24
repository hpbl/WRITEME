.. - _\- mode: rst -_ -

|Azure|_ |Travis|_ |Codecov|_ |CircleCI|_ |Python @abstr_number |_ |PyPi|_ |DOI|_

.. |Azure| image:: https://dev.azure.com/scikit-learn/scikit-learn/_apis/build/status/scikit-learn.scikit-learn?branchName=master .. _Azure: https://dev.azure.com/scikit-learn/scikit-learn/_build/latest?definitionId= @abstr_number &branchName=master

.. |Travis| image:: https://api.travis-ci.org/scikit-learn/scikit-learn.svg?branch=master .. _Travis: https://travis-ci.org/scikit-learn/scikit-learn

.. |Codecov| image:: https://codecov.io/github/scikit-learn/scikit-learn/badge.svg?branch=master&service=github .. _Codecov: https://codecov.io/github/scikit-learn/scikit-learn?branch=master

.. |CircleCI| image:: https://circleci.com/gh/scikit-learn/scikit-learn/tree/master.svg?style=shield&circle-token=:circle-token .. _CircleCI: https://circleci.com/gh/scikit-learn/scikit-learn

.. |Python @abstr_number | image:: https://img.shields.io/badge/python- @abstr_number . @abstr_number -blue.svg .. _Python @abstr_number : https://badge.fury.io/py/scikit-learn

.. |PyPi| image:: https://badge.fury.io/py/scikit-learn.svg .. _PyPi: https://badge.fury.io/py/scikit-learn

.. |DOI| image:: https://zenodo.org/badge/ @abstr_number /scikit-learn/scikit-learn.svg .. _DOI: https://zenodo.org/badge/latestdoi/ @abstr_number /scikit-learn/scikit-learn

# scikit-learn

scikit-learn is a Python module for machine learning built on top of SciPy and is distributed under the @abstr_number -Clause BSD license.

The project was started in @abstr_number by David Cournapeau as a Google Summer of Code project, and since then many volunteers have contributed. See the `About us <http://scikit-learn.org/dev/about.html#authors>`_ page for a list of core contributors.

It is currently maintained by a team of volunteers.

Website: http://scikit-learn.org

## Installation

Dependencies ~~~~~~~~~~~~

scikit-learn requires:

  * Python (>= @abstr_number . @abstr_number )
  * NumPy (>= @abstr_number . @abstr_number . @abstr_number )
  * SciPy (>= @abstr_number . @abstr_number . @abstr_number )
  * joblib (>= @abstr_number . @abstr_number )



**Scikit-learn @abstr_number . @abstr_number was the last version to support Python @abstr_number . @abstr_number .** scikit-learn @abstr_number . @abstr_number and later require Python @abstr_number . @abstr_number or newer.

For running the examples Matplotlib >= @abstr_number . @abstr_number . @abstr_number is required. A few examples require scikit-image >= @abstr_number . @abstr_number . @abstr_number , a few examples require pandas >= @abstr_number . @abstr_number . @abstr_number .

scikit-learn also uses CBLAS, the C interface to the Basic Linear Algebra Subprograms library. scikit-learn comes with a reference implementation, but the system CBLAS will be detected by the build system and used if present. CBLAS exists in many implementations; see `Linear algebra libraries <http://scikit-learn.org/stable/modules/computing#linear-algebra-libraries>`_ for known issues.

User installation ~~~~~~~~~~~~~~~~~

If you already have a working installation of numpy and scipy, the easiest way to install scikit-learn is using `pip` ::
    
    
    pip install -U scikit-learn
    

or `conda`::
    
    
    conda install scikit-learn
    

The documentation includes more detailed `installation instructions <http://scikit-learn.org/stable/install.html>`_.

## Changelog

See the `changelog <http://scikit-learn.org/dev/whats_new.html>`__ for a history of notable changes to scikit-learn.

## Development

We welcome new contributors of all experience levels. The scikit-learn community goals are to be helpful, welcoming, and effective. The `Development Guide <http://scikit-learn.org/stable/developers/index.html>`_ has detailed information about contributing code, documentation, tests, and more. We've included some basic information in this README.

Important links ~~~~~~~~~~~~~~~

  * Official source code repo: https://github.com/scikit-learn/scikit-learn
  * Download releases: https://pypi.org/project/scikit-learn/
  * Issue tracker: https://github.com/scikit-learn/scikit-learn/issues



Source code ~~~~~~~~~~~

You can check the latest sources with the command::
    
    
    git clone https://github.com/scikit-learn/scikit-learn.git
    

Contributing ~~~~~~~~~~~~

To learn more about making a contribution to scikit-learn, please see our `Contributing guide <https://scikit-learn.org/dev/developers/contributing.html>`_.

Testing ~~~~~~~

After installation, you can launch the test suite from outside the source directory (you will need to have `pytest` >= @abstr_number . @abstr_number . @abstr_number installed)::
    
    
    pytest sklearn
    

See the web page http://scikit-learn.org/dev/developers/advanced_installation.html#testing for more information.
    
    
    Random number generation can be controlled during testing by setting
    the ``SKLEARN_SEED`` environment variable.
    

Submitting a Pull Request ~~~~~~~~~~~~~~~~~~~~~~~~~

Before opening a Pull Request, have a look at the full Contributing page to make sure your code complies with our guidelines: http://scikit-learn.org/stable/developers/index.html

## Project History

The project was started in @abstr_number by David Cournapeau as a Google Summer of Code project, and since then many volunteers have contributed. See the `About us <http://scikit-learn.org/dev/about.html#authors>`_ page for a list of core contributors.

The project is currently maintained by a team of volunteers.

**Note** : `scikit-learn` was previously referred to as `scikits.learn`.

## Help and Support

Documentation ~~~~~~~~~~~~~

  * HTML documentation (stable release): http://scikit-learn.org
  * HTML documentation (development version): http://scikit-learn.org/dev/
  * FAQ: http://scikit-learn.org/stable/faq.html



Communication ~~~~~~~~~~~~~

  * Mailing list: https://mail.python.org/mailman/listinfo/scikit-learn
  * IRC channel: `#scikit-learn` at `webchat.freenode.net`
  * Stack Overflow: https://stackoverflow.com/questions/tagged/scikit-learn
  * Website: http://scikit-learn.org



Citation ~~~~~~~~

If you use scikit-learn in a scientific publication, we would appreciate citations: http://scikit-learn.org/stable/about.html#citing-scikit-learn
