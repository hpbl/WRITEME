# Records: SQL for Humans™

.. image:: https://img.shields.io/pypi/v/records.svg :target: https://pypi.python.org/pypi/records

.. image:: https://travis-ci.org/kennethreitz/records.svg?branch=master :target: https://travis-ci.org/kennethreitz/records

.. image:: https://img.shields.io/badge/SayThanks.io-☼- @abstr_number EAEDB.svg :target: https://saythanks.io/to/kennethreitz

**Records is a very simple, but powerful, library for making raw SQL queries to most relational databases.**

.. image:: https://farm @abstr_number .staticflickr.com/ @abstr_number / @abstr_number _ @abstr_number e @abstr_number da @abstr_number b @abstr_number _k_d.jpg

Just write SQL. No bells, no whistles. This common task can be surprisingly difficult with the standard tools available. This library strives to make this workflow as simple as possible, while providing an elegant interface to work with your query results.

_Database support includes RedShift, Postgres, MySQL, SQLite, Oracle, and MS-SQL (drivers not included)._

* * *

## ☤ The Basics

We know how to write SQL, so let's send some to our database:

.. code:: python
    
    
    import records
    
    db = records.Database('postgres://...')
    rows = db.query('select * from active_users')    # or db.query_file('sqls/active-users.sql')
    

Grab one row at a time:

.. code:: python
    
    
    >>> rows[ @abstr_number ]
    <Record {"username": "model-t", "active": true, "name": "Henry Ford", "user_email": "model-t@gmail.com", "timezone": " @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number . @abstr_number "}>
    

Or iterate over them:

.. code:: python
    
    
    for r in rows:
        print(r.name, r.user_email)
    

Values can be accessed many ways: `row.user_email`, `row['user_email']`, or `row[ @abstr_number ]`.

Fields with non-alphanumeric characters (like spaces) are also fully supported.

Or store a copy of your record collection for later reference:

.. code:: python
    
    
    >>> rows.all()
    [<Record {"username": ...}>, <Record {"username": ...}>, <Record {"username": ...}>, ...]
    

If you're only expecting one result:

.. code:: python
    
    
    >>> rows.first()
    <Record {"username": ...}>
    

Other options include `rows.as_dict()` and `rows.as_dict(ordered=True)`.

## ☤ Features

  * Iterated rows are cached for future reference.
  * `$DATABASE_URL` environment variable support.
  * Convenience `Database.get_table_names` method.
  * Command-line `records` tool for exporting queries.
  * Safe parameterization: `Database.query('life=:everything', everything= @abstr_number )`.
  * Queries can be passed as strings or filenames, parameters supported.
  * Transactions: `t = Database.transaction(); t.commit()`.
  * Bulk actions: `Database.bulk_query()` & `Database.bulk_query_file()`.



Records is proudly powered by `SQLAlchemy <http://www.sqlalchemy.org>`_ and `Tablib <http://docs.python-tablib.org/en/latest/>`_.

## ☤ Data Export Functionality

Records also features full Tablib integration, and allows you to export your results to CSV, XLS, JSON, HTML Tables, YAML, or Pandas DataFrames with a single line of code. Excellent for sharing data with friends, or generating reports.

.. code:: pycon
    
    
    >>> print(rows.dataset)
    username|active|name      |user_email       |timezone
    --------|------|----------|-----------------|--------------------------
    model-t |True  |Henry Ford|model-t@gmail.com| @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number . @abstr_number 
    ...
    

**Comma Separated Values (CSV)**

.. code:: pycon
    
    
    >>> print(rows.export('csv'))
    username,active,name,user_email,timezone
    model-t,True,Henry Ford,model-t@gmail.com, @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number . @abstr_number 
    ...
    

**YAML Ain't Markup Language (YAML)**

.. code:: python
    
    
    >>> print(rows.export('yaml'))
    - {active: true, name: Henry Ford, timezone: ' @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number . @abstr_number ', user_email: model-t@gmail.com, username: model-t}
    ...
    

**JavaScript Object Notation (JSON)**

.. code:: python
    
    
    >>> print(rows.export('json'))
    [{"username": "model-t", "active": true, "name": "Henry Ford", "user_email": "model-t@gmail.com", "timezone": " @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number . @abstr_number "}, ...]
    

**Microsoft Excel (xls, xlsx)**

.. code:: python
    
    
    with open('report.xls', 'wb') as f:
        f.write(rows.export('xls'))
    

**Pandas DataFrame**

.. code:: python
    
    
    >>> rows.export('df')
        username  active       name        user_email                   timezone
     @abstr_number     model-t    True Henry Ford model-t@gmail.com  @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number . @abstr_number
    

You get the point. All other features of Tablib are also available, so you can sort results, add/remove columns/rows, remove duplicates, transpose the table, add separators, slice data by column, and more.

See the `Tablib Documentation <http://docs.python-tablib.org/en/latest/>`_ for more details.

## ☤ Installation

Of course, the recommended installation method is `pipenv <http://pipenv.org>`_::
    
    
    $ pipenv install records[pandas]
    ✨🍰✨
    

## ☤ Command-Line Tool

As an added bonus, a `records` command-line tool is automatically included. Here's a screenshot of the usage information:

.. image:: http://f.cl.ly/items/ @abstr_number S @abstr_number R @abstr_number p @abstr_number G @abstr_number w @abstr_number A @abstr_number x @abstr_number N/Screen% @abstr_number Shot% @abstr_number - @abstr_number - @abstr_number % @abstr_number at% @abstr_number . @abstr_number . @abstr_number % @abstr_number AM.png :alt: Screenshot of Records Command-Line Interface.

## ☤ Thank You

Thanks for checking this library out! I hope you find it useful.

Of course, there's always room for improvement. Feel free to `open an issue <https://github.com/kennethreitz/records/issues>`_ so we can make Records better, stronger, faster.
