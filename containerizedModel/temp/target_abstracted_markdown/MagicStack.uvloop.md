.. image:: https://travis-ci.org/MagicStack/uvloop.svg?branch=master :target: https://travis-ci.org/MagicStack/uvloop

.. image:: https://img.shields.io/pypi/v/uvloop.svg :target: https://pypi.python.org/pypi/uvloop

.. image:: https://pepy.tech/badge/uvloop :target: https://pepy.tech/project/uvloop :alt: PyPI - Downloads

uvloop is a fast, drop-in replacement of the built-in asyncio event loop. uvloop is implemented in Cython and uses libuv under the hood.

The project documentation can be found `here <http://uvloop.readthedocs.org/>`_. Please also check out the `wiki <https://github.com/MagicStack/uvloop/wiki>`_.

## Performance

uvloop makes asyncio @abstr_number - @abstr_number x faster.

.. image:: performance.png :target: http://magic.io/blog/uvloop-blazing-fast-python-networking/

The above chart shows the performance of an echo server with different message sizes. The _sockets_ benchmark uses `loop.sock_recv()` and `loop.sock_sendall()` methods; the _streams_ benchmark uses asyncio high-level streams, created by the `asyncio.start_server()` function; and the _protocol_ benchmark uses `loop.create_server()` with a simple echo protocol. Read more about uvloop in a `blog post <http://magic.io/blog/uvloop-blazing-fast-python-networking/>`_ about it.

## Installation

uvloop requires Python @abstr_number . @abstr_number or greater and is available on PyPI. Use pip to install it::
    
    
    $ pip install uvloop
    

## Using uvloop

Call `uvloop.install()` before calling `asyncio.run()` or manually creating an asyncio event loop:

.. code:: python
    
    
    import asyncio
    import uvloop
    
    async def main():
        # Main entry-point.
        ...
    
    uvloop.install()
    asyncio.run(main())
    

## Building From Source

To build uvloop, you'll need Python @abstr_number . @abstr_number or greater:

@abstr_number . Clone the repository:

.. code::
    
    
    $ git clone --recursive git@github.com:MagicStack/uvloop.git
    $ cd uvloop
    

@abstr_number . Create a virtual environment and activate it:

.. code::
    
    
    $ python @abstr_number . @abstr_number  -m venv uvloop-dev
    $ source uvloop-dev/bin/activate
    

@abstr_number . Install development dependencies:

.. code::
    
    
    $ pip install -r requirements.dev.txt
    

@abstr_number . Build and run tests:

.. code::
    
    
    $ make
    $ make test
    

## License

uvloop is dual-licensed under MIT and Apache @abstr_number . @abstr_number licenses.
