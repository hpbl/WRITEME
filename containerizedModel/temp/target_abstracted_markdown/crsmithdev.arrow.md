# Arrow - Better dates & times for Python

.. image:: https://travis-ci.org/crsmithdev/arrow.svg :alt: build status :target: https://travis-ci.org/crsmithdev/arrow

.. image:: https://codecov.io/github/crsmithdev/arrow/coverage.svg?branch=master :target: https://codecov.io/github/crsmithdev/arrow :alt: Codecov

.. image:: https://img.shields.io/pypi/v/arrow.svg :target: https://pypi.python.org/pypi/arrow :alt: arrow PyPI download

.. image:: https://img.shields.io/pypi/pyversions/arrow.svg :target: https://pypi.python.org/pypi/arrow :alt: python versions

.. image:: https://img.shields.io/pypi/l/arrow.svg :target: https://pypi.python.org/pypi/arrow :alt: license

.. image:: https://img.shields.io/badge/code% @abstr_number style-black- @abstr_number .svg :target: https://github.com/python/black :alt: code style

## Documentation: `arrow.readthedocs.io <https://arrow.readthedocs.io/en/latest/>`_

## What?

Arrow is a Python library that offers a sensible, human-friendly approach to creating, manipulating, formatting and converting dates, times, and timestamps. It implements and updates the datetime type, plugging gaps in functionality, and provides an intelligent module API that supports many common creation scenarios. Simply put, it helps you work with dates and times with fewer imports and a lot less code.

Arrow is heavily inspired by `moment.js <https://github.com/timrwood/moment>`_ and `requests <https://github.com/kennethreitz/requests>`_.

## Why?

Python's standard library and some other low-level modules have near-complete date, time and time zone functionality but don't work very well from a usability perspective:

  * Too many modules: datetime, time, calendar, dateutil, pytz and more
  * Too many types: date, time, datetime, tzinfo, timedelta, relativedelta, etc.
  * Time zones and timestamp conversions are verbose and unpleasant
  * Time zone naievety is the norm
  * Gaps in functionality: ISO- @abstr_number parsing, timespans, humanization



## Features

  * Fully implemented, drop-in replacement for datetime
  * Supports Python @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , and @abstr_number . @abstr_number 
  * Time zone-aware & UTC by default
  * Provides super-simple creation options for many common input scenarios
  * Updated .replace method with support for relative offsets, including weeks
  * Formats and parses strings automatically
  * Partial support for ISO- @abstr_number 
  * Timezone conversion
  * Timestamp available as a property
  * Generates time spans, ranges, floors and ceilings in timeframes from year to microsecond
  * Humanizes and supports a growing list of contributed locales
  * Extensible for your own Arrow-derived types



## Quick Start

Installation ^^^^^^^^^^^^

To install Arrow, use `pip <https://pip.pypa.io/en/stable/quickstart/>`_ or `pipenv <https://docs.pipenv.org/en/latest/>`_:

.. code-block:: console
    
    
    $ pip install -U arrow
    

Example Usage ^^^^^^^^^^^^^

.. code-block:: pycon
    
    
    >>> import arrow
    >>> utc = arrow.utcnow()
    >>> utc
    <Arrow [ @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number + @abstr_number : @abstr_number ]>
    
    >>> utc = utc.replace(hours=- @abstr_number )
    >>> utc
    <Arrow [ @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number + @abstr_number : @abstr_number ]>
    
    >>> local = utc.to('US/Pacific')
    >>> local
    <Arrow [ @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number - @abstr_number : @abstr_number ]>
    
    >>> arrow.get(' @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number + @abstr_number : @abstr_number ')
    <Arrow [ @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number + @abstr_number : @abstr_number ]>
    
    >>> local.timestamp
     @abstr_number 
    
    >>> local.format()
    ' @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number  - @abstr_number : @abstr_number '
    
    >>> local.format('YYYY-MM-DD HH:mm:ss ZZ')
    ' @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number  - @abstr_number : @abstr_number '
    
    >>> local.humanize()
    'an hour ago'
    
    >>> local.humanize(locale='ko_kr')
    ' @abstr_number 시간 전'
    

Further documentation can be found at `arrow.readthedocs.io <https://arrow.readthedocs.io/en/latest/>`_.

## Contributing

Contributions are welcome for both code and localization. To get started, find an issue or feature to tackle on `the issue tracker <https://github.com/crsmithdev/arrow/issues>`_ and then fork `the repository <https://github.com/crsmithdev/arrow>`_ on GitHub to begin making changes. If you would like to help with localization, please see `locales.py <https://github.com/crsmithdev/arrow/blob/master/arrow/locales.py>`_ for what locales are currently supported. If you are helping with code, make sure to add tests to ensure that a bug was fixed or the feature works as intended.
