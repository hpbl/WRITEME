# NetworkX

.. image:: https://travis-ci.org/networkx/networkx.svg?branch=master :target: https://travis-ci.org/networkx/networkx

.. image:: https://ci.appveyor.com/api/projects/status/github/networkx/networkx?branch=master&svg=true :target: https://ci.appveyor.com/project/dschult/networkx-pqott

.. image:: https://codecov.io/gh/networkx/networkx/branch/master/graph/badge.svg :target: https://codecov.io/gh/networkx/networkx

NetworkX is a Python package for the creation, manipulation, and study of the structure, dynamics, and functions of complex networks.

  * **Website (including documentation):** http://networkx.github.io
  * **Mailing list:** https://groups.google.com/forum/#!forum/networkx-discuss
  * **Source:** https://github.com/networkx/networkx
  * **Bug reports:** https://github.com/networkx/networkx/issues



## Install

Install the latest version of NetworkX::
    
    
    $ pip install networkx
    

Install with all optional dependencies::
    
    
    $ pip install networkx[all]
    

For additional details, please see `INSTALL.rst`.

## Simple example

Find the shortest path between two nodes in an undirected graph:

.. code:: python
    
    
    >>> import networkx as nx
    >>> G = nx.Graph()
    >>> G.add_edge('A', 'B', weight= @abstr_number )
    >>> G.add_edge('B', 'D', weight= @abstr_number )
    >>> G.add_edge('A', 'C', weight= @abstr_number )
    >>> G.add_edge('C', 'D', weight= @abstr_number )
    >>> nx.shortest_path(G, 'A', 'D', weight='weight')
    ['A', 'B', 'D']
    

## Bugs

Please report any bugs that you find `here <https://github.com/networkx/networkx/issues>`_. Or, even better, fork the repository on `GitHub <https://github.com/networkx/networkx>`_ and create a pull request (PR). We welcome all changes, big or small, and we will help you make the PR if you are new to `git` (just ask on the issue and/or see `CONTRIBUTING.rst`).

## License

Released under the @abstr_number -Clause BSD license (see `LICENSE.txt`)::

Copyright (C) @abstr_number - @abstr_number NetworkX Developers Aric Hagberg @abstr_hyperlink Dan Schult @abstr_hyperlink Pieter Swart @abstr_hyperlink 
