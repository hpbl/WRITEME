.. image:: https://readthedocs.org/projects/pymysql/badge/?version=latest :target: https://pymysql.readthedocs.io/ :alt: Documentation Status

.. image:: https://badge.fury.io/py/PyMySQL.svg :target: https://badge.fury.io/py/PyMySQL

.. image:: https://travis-ci.org/PyMySQL/PyMySQL.svg?branch=master :target: https://travis-ci.org/PyMySQL/PyMySQL

.. image:: https://coveralls.io/repos/PyMySQL/PyMySQL/badge.svg?branch=master&service=github :target: https://coveralls.io/github/PyMySQL/PyMySQL?branch=master

.. image:: https://img.shields.io/badge/license-MIT-blue.svg :target: https://github.com/PyMySQL/PyMySQL/blob/master/LICENSE

# PyMySQL

.. contents:: Table of Contents :local:

This package contains a pure-Python MySQL client library, based on `PEP @abstr_number`_.

Most public APIs are compatible with mysqlclient and MySQLdb.

NOTE: PyMySQL doesn't support low level APIs `_mysql` provides like `data_seek`, `store_result`, and `use_result`. You should use high level APIs defined in `PEP @abstr_number`_. But some APIs like `autocommit` and `ping` are supported because `PEP @abstr_number`_ doesn't cover their usecase.

.. _`PEP @abstr_number`: https://www.python.org/dev/peps/pep- @abstr_number /

## Requirements

  * Python -- one of the following:

    * CPython_ : @abstr_number . @abstr_number and >= @abstr_number . @abstr_number 
    * PyPy_ : Latest version
  * MySQL Server -- one of the following:

    * MySQL_ >= @abstr_number . @abstr_number 
    * MariaDB_ >= @abstr_number . @abstr_number 



.. _CPython: https://www.python.org/ .. _PyPy: https://pypy.org/ .. _MySQL: https://www.mysql.com/ .. _MariaDB: https://mariadb.org/

## Installation

Package is uploaded on `PyPI <https://pypi.org/project/PyMySQL>`_.

You can install it with pip::
    
    
    $ python @abstr_number  -m pip install PyMySQL
    

To use "sha @abstr_number _password" or "caching_sha @abstr_number _password" for authenticate, you need to install additional dependency::

$ python @abstr_number -m pip install PyMySQL[rsa]

## Documentation

Documentation is available online: https://pymysql.readthedocs.io/

For support, please refer to the `StackOverflow <https://stackoverflow.com/questions/tagged/pymysql>`_.

## Example

The following examples make use of a simple table

.. code:: sql

CREATE TABLE `users` ( `id` int( @abstr_number ) NOT NULL AUTO_INCREMENT, `email` varchar( @abstr_number ) COLLATE utf @abstr_number _bin NOT NULL, `password` varchar( @abstr_number ) COLLATE utf @abstr_number _bin NOT NULL, PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf @abstr_number COLLATE=utf @abstr_number _bin AUTO_INCREMENT= @abstr_number ;

.. code:: python
    
    
    import pymysql.cursors
    
    # Connect to the database
    connection = pymysql.connect(host='localhost',
                                 user='user',
                                 password='passwd',
                                 db='db',
                                 charset='utf @abstr_number mb @abstr_number ',
                                 cursorclass=pymysql.cursors.DictCursor)
    
    try:
        with connection.cursor() as cursor:
            # Create a new record
            sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
            cursor.execute(sql, ('webmaster@python.org', 'very-secret'))
    
        # connection is not autocommit by default. So you must commit to save
        # your changes.
        connection.commit()
    
        with connection.cursor() as cursor:
            # Read a single record
            sql = "SELECT `id`, `password` FROM `users` WHERE `email`=%s"
            cursor.execute(sql, ('webmaster@python.org',))
            result = cursor.fetchone()
            print(result)
    finally:
        connection.close()
    

This example will print:

.. code:: python
    
    
    {'password': 'very-secret', 'id':  @abstr_number }
    

## Resources

  * DB-API @abstr_number . @abstr_number : https://www.python.org/dev/peps/pep- @abstr_number /

  * MySQL Reference Manuals: https://dev.mysql.com/doc/

  * MySQL client/server protocol: https://dev.mysql.com/doc/internals/en/client-server-protocol.html

  * "Connector" channel in MySQL Community Slack: https://lefred.be/mysql-community-on-slack/

  * PyMySQL mailing list: https://groups.google.com/forum/#!forum/pymysql-users




## License

PyMySQL is released under the MIT License. See LICENSE for more information.
