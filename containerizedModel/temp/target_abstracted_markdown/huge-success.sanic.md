.. image:: https://raw.githubusercontent.com/huge-success/sanic-assets/master/png/sanic-framework-logo- @abstr_number x @abstr_number .png :alt: Sanic | Build fast. Run fast.

# Sanic | Build fast. Run fast.

.. start-badges

.. list-table:: :stub-columns: @abstr_number 
    
    
    * - Build
      - | |Build Status| |AppVeyor Build Status| |Codecov|
    * - Docs
      - |Documentation|
    * - Package
      - | |PyPI| |PyPI version| |Wheel| |Supported implementations| |Code style black|
    * - Support
      - | |Forums| |Join the chat at https://gitter.im/sanic-python/Lobby| |Awesome|
    * - Stats
      - | |Downloads| |Conda downloads|
    

.. |Forums| image:: https://img.shields.io/badge/forums-community-ff @abstr_number .svg :target: https://community.sanicframework.org/ .. |Join the chat at https://gitter.im/sanic-python/Lobby| image:: https://badges.gitter.im/sanic-python/Lobby.svg :target: https://gitter.im/sanic-python/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge .. |Codecov| image:: https://codecov.io/gh/huge-success/sanic/branch/master/graph/badge.svg :target: https://codecov.io/gh/huge-success/sanic .. |Build Status| image:: https://travis-ci.org/huge-success/sanic.svg?branch=master :target: https://travis-ci.org/huge-success/sanic .. |AppVeyor Build Status| image:: https://ci.appveyor.com/api/projects/status/d @abstr_number pt @abstr_number ids @abstr_number ynexi @abstr_number c/branch/master?svg=true :target: https://ci.appveyor.com/project/huge-success/sanic .. |Documentation| image:: https://readthedocs.org/projects/sanic/badge/?version=latest :target: http://sanic.readthedocs.io/en/latest/?badge=latest .. |PyPI| image:: https://img.shields.io/pypi/v/sanic.svg :target: https://pypi.python.org/pypi/sanic/ .. |PyPI version| image:: https://img.shields.io/pypi/pyversions/sanic.svg :target: https://pypi.python.org/pypi/sanic/ .. |Code style black| image:: https://img.shields.io/badge/code% @abstr_number style-black- @abstr_number .svg :target: https://github.com/ambv/black .. |Wheel| image:: https://img.shields.io/pypi/wheel/sanic.svg :alt: PyPI Wheel :target: https://pypi.python.org/pypi/sanic .. |Supported implementations| image:: https://img.shields.io/pypi/implementation/sanic.svg :alt: Supported implementations :target: https://pypi.python.org/pypi/sanic .. |Awesome| image:: https://cdn.rawgit.com/sindresorhus/awesome/d @abstr_number f @abstr_number d @abstr_number fed @abstr_number fa @abstr_number e @abstr_number a @abstr_number e @abstr_number dd @abstr_number e @abstr_number /media/badge.svg :alt: Awesome Sanic List :target: https://github.com/mekicha/awesome-sanic .. |Downloads| image:: https://pepy.tech/badge/sanic/month :alt: Downloads :target: https://pepy.tech/project/sanic .. |Conda downloads| image:: https://img.shields.io/conda/dn/conda-forge/sanic.svg :alt: Downloads :target: https://anaconda.org/conda-forge/sanic

.. end-badges

Sanic is a **Python @abstr_number . @abstr_number +** web server and web framework that's written to go fast. It allows the usage of the `async/await` syntax added in Python @abstr_number . @abstr_number , which makes your code non-blocking and speedy.

`Source code on GitHub <https://github.com/huge-success/sanic/>`_ | `Help and discussion board <https://community.sanicframework.org/>`_. 

The project is maintained by the community, for the community. **Contributions are welcome!**

The goal of the project is to provide a simple way to get up and running a highly performant HTTP server that is easy to build, to expand, and ultimately to scale.

## Installation

`pip @abstr_number install sanic`
    
    
    Sanic makes use of ``uvloop`` and ``ujson`` to help with performance. If you do not want to use those packages, simply add an environmental variable ``SANIC_NO_UVLOOP=true`` or ``SANIC_NO_UJSON=true`` at install time.
    
    .. code:: shell
    
       $ export SANIC_NO_UVLOOP=true
       $ export SANIC_NO_UJSON=true 
       $ pip @abstr_number  install --no-binary :all: sanic
    

.. note::

If you are running on a clean install of Fedora @abstr_number or above, please make sure you have the `redhat-rpm-config` package installed in case if you want to use `sanic` with `ujson` dependency.

## Hello World Example

.. code:: python
    
    
    from sanic import Sanic
    from sanic.response import json
    
    app = Sanic()
    
    @app.route('/')
    async def test(request):
        return json({'hello': 'world'})
    
    if __name__ == '__main__':
        app.run(host=' @abstr_number . @abstr_number . @abstr_number . @abstr_number ', port= @abstr_number )
    

Sanic can now be easily run using `python @abstr_number hello.py`.

.. code::
    
    
    [ @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number  + @abstr_number ] [ @abstr_number ] [INFO] Goin' Fast @ http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number 
    [ @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number  + @abstr_number ] [ @abstr_number ] [INFO] Starting worker [ @abstr_number ]
    

And, we can verify it is working: `curl localhost: @abstr_number -i`

.. code::
    
    
    HTTP/ @abstr_number . @abstr_number   @abstr_number  OK
    Connection: keep-alive
    Keep-Alive:  @abstr_number 
    Content-Length:  @abstr_number 
    Content-Type: application/json
    
    {"hello":"world"}
    

**Now, let's go build something fast!**

## Documentation

`Documentation on Readthedocs <http://sanic.readthedocs.io/>`_.

## Changelog

`Release Changelogs <https://github.com/huge-success/sanic/blob/master/CHANGELOG.md>`_.

## Questions and Discussion

`Ask a question or join the conversation <https://community.sanicframework.org/>`_.

## Contribution

We are always happy to have new contributions. We have `marked issues good for anyone looking to get started <https://github.com/huge-success/sanic/issues?q=is% @abstr_number Aopen+is% @abstr_number Aissue+label% @abstr_number Abeginner>`_, and welcome `questions on the forums <https://community.sanicframework.org/>`_. Please take a look at our `Contribution guidelines <https://github.com/huge-success/sanic/blob/master/CONTRIBUTING.md>`_.
