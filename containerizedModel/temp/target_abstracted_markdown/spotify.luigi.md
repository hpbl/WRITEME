.. figure:: https://raw.githubusercontent.com/spotify/luigi/master/doc/luigi.png :alt: Luigi Logo :align: center

.. image:: https://img.shields.io/travis/spotify/luigi/master.svg?style=flat :target: https://travis-ci.org/spotify/luigi

.. image:: https://img.shields.io/codecov/c/github/spotify/luigi/master.svg?style=flat :target: https://codecov.io/gh/spotify/luigi?branch=master

.. image:: https://landscape.io/github/spotify/luigi/master/landscape.svg?style=flat :target: https://landscape.io/github/spotify/luigi/master

.. image:: https://img.shields.io/pypi/v/luigi.svg?style=flat :target: https://pypi.python.org/pypi/luigi

.. image:: https://img.shields.io/pypi/l/luigi.svg?style=flat :target: https://pypi.python.org/pypi/luigi

Luigi is a Python ( @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number tested) package that helps you build complex pipelines of batch jobs. It handles dependency resolution, workflow management, visualization, handling failures, command line integration, and much more.

## Getting Started

Run `pip install luigi` to install the latest stable version from `PyPI <https://pypi.python.org/pypi/luigi>`_. `Documentation for the latest release <https://luigi.readthedocs.io/en/stable/>`__ is hosted on readthedocs.

Run `pip install luigi[toml]` to install Luigi with `TOML-based configs <https://luigi.readthedocs.io/en/stable/configuration.html>`__ support.

For the bleeding edge code, `pip install git+https://github.com/spotify/luigi.git`. `Bleeding edge documentation <https://luigi.readthedocs.io/en/latest/>`__ is also available.

## Background

The purpose of Luigi is to address all the plumbing typically associated with long-running batch processes. You want to chain many tasks, automate them, and failures _will_ happen. These tasks can be anything, but are typically long running things like `Hadoop <http://hadoop.apache.org/>`_ jobs, dumping data to/from databases, running machine learning algorithms, or anything else.

There are other software packages that focus on lower level aspects of data processing, like `Hive <http://hive.apache.org/>`__, `Pig <http://pig.apache.org/>`_, or `Cascading <http://www.cascading.org/>`_. Luigi is not a framework to replace these. Instead it helps you stitch many tasks together, where each task can be a `Hive query <https://luigi.readthedocs.io/en/latest/api/luigi.contrib.hive.html>`__, a `Hadoop job in Java <https://luigi.readthedocs.io/en/latest/api/luigi.contrib.hadoop_jar.html>`_, a `Spark job in Scala or Python <https://luigi.readthedocs.io/en/latest/api/luigi.contrib.spark.html>`_, a Python snippet, `dumping a table <https://luigi.readthedocs.io/en/latest/api/luigi.contrib.sqla.html>`_ from a database, or anything else. It's easy to build up long-running pipelines that comprise thousands of tasks and take days or weeks to complete. Luigi takes care of a lot of the workflow management so that you can focus on the tasks themselves and their dependencies.

You can build pretty much any task you want, but Luigi also comes with a _toolbox_ of several common task templates that you use. It includes support for running `Python mapreduce jobs <https://luigi.readthedocs.io/en/latest/api/luigi.contrib.hadoop.html>`_ in Hadoop, as well as `Hive <https://luigi.readthedocs.io/en/latest/api/luigi.contrib.hive.html>`__, and `Pig <https://luigi.readthedocs.io/en/latest/api/luigi.contrib.pig.html>`__, jobs. It also comes with `file system abstractions for HDFS <https://luigi.readthedocs.io/en/latest/api/luigi.contrib.hdfs.html>`_, and local files that ensures all file system operations are atomic. This is important because it means your data pipeline will not crash in a state containing partial data.

## Visualiser page

The Luigi server comes with a web interface too, so you can search and filter among all your tasks.

.. figure:: https://raw.githubusercontent.com/spotify/luigi/master/doc/visualiser_front_page.png :alt: Visualiser page

## Dependency graph example

Just to give you an idea of what Luigi does, this is a screen shot from something we are running in production. Using Luigi's visualiser, we get a nice visual overview of the dependency graph of the workflow. Each node represents a task which has to be run. Green tasks are already completed whereas yellow tasks are yet to be run. Most of these tasks are Hadoop jobs, but there are also some things that run locally and build up data files.

.. figure:: https://raw.githubusercontent.com/spotify/luigi/master/doc/user_recs.png :alt: Dependency graph

## Philosophy

Conceptually, Luigi is similar to `GNU Make <http://www.gnu.org/software/make/>`_ where you have certain tasks and these tasks in turn may have dependencies on other tasks. There are also some similarities to `Oozie <http://oozie.apache.org/>`_ and `Azkaban <http://data.linkedin.com/opensource/azkaban>`_. One major difference is that Luigi is not just built specifically for Hadoop, and it's easy to extend it with other kinds of tasks.

Everything in Luigi is in Python. Instead of XML configuration or similar external data files, the dependency graph is specified _within Python_. This makes it easy to build up complex dependency graphs of tasks, where the dependencies can involve date algebra or recursive references to other versions of the same task. However, the workflow can trigger things not in Python, such as running `Pig scripts <https://luigi.readthedocs.io/en/latest/api/luigi.contrib.pig.html>`_ or `scp'ing files <https://luigi.readthedocs.io/en/latest/api/luigi.contrib.ssh.html>`_.

## Who uses Luigi?

We use Luigi internally at `Spotify <https://www.spotify.com>`_ to run thousands of tasks every day, organized in complex dependency graphs. Most of these tasks are Hadoop jobs. Luigi provides an infrastructure that powers all kinds of stuff including recommendations, toplists, A/B test analysis, external reports, internal dashboards, etc.

Since Luigi is open source and without any registration walls, the exact number of Luigi users is unknown. But based on the number of unique contributors, we expect hundreds of enterprises to use it. Some users have written blog posts or held presentations about Luigi:

  * `Spotify <https://www.spotify.com>`_ `(presentation, @abstr_number ) <http://www.slideshare.net/erikbern/luigi-presentation-nyc-data-science>`__
  * `Foursquare <https://foursquare.com/>`_ `(presentation, @abstr_number ) <http://www.slideshare.net/OpenAnayticsMeetup/luigi-presentation- @abstr_number - @abstr_number >`__
  * `Mortar Data (Datadog) <https://www.datadoghq.com/>`_ `(documentation / tutorial) <http://help.mortardata.com/technologies/luigi>`__
  * `Stripe <https://stripe.com/>`_ `(presentation, @abstr_number ) <http://www.slideshare.net/PyData/python-as-part-of-a-production-machine-learning-stack-by-michael-manapat-pydata-sv- @abstr_number >`__
  * `Asana <https://asana.com/>`_ `(blog, @abstr_number ) <https://eng.asana.com/ @abstr_number / @abstr_number /stable-accessible-data-infrastructure-startup/>`__
  * `Buffer <https://buffer.com/>`_ `(blog, @abstr_number ) <https://overflow.bufferapp.com/ @abstr_number / @abstr_number / @abstr_number /buffers-new-data-architecture/>`__
  * `SeatGeek <https://seatgeek.com/>`_ `(blog, @abstr_number ) <http://chairnerd.seatgeek.com/building-out-the-seatgeek-data-pipeline/>`__
  * `Treasure Data <https://www.treasuredata.com/>`_ `(blog, @abstr_number ) <http://blog.treasuredata.com/blog/ @abstr_number / @abstr_number / @abstr_number /managing-the-data-pipeline-with-git-luigi/>`__
  * `Growth Intelligence <http://growthintel.com/>`_ `(presentation, @abstr_number ) <http://www.slideshare.net/growthintel/a-beginners-guide-to-building-data-pipelines-with-luigi>`__
  * `AdRoll <https://www.adroll.com/>`_ `(blog, @abstr_number ) <http://tech.adroll.com/blog/data/ @abstr_number / @abstr_number / @abstr_number /data-pipelines-docker.html>`__
  * @abstr_number zuoye `(presentation, @abstr_number ) <https://speakerdeck.com/mvj @abstr_number /luiti-an-offline-task-management-framework>`__
  * `Custobar <https://www.custobar.com/>`_ `(presentation, @abstr_number ) <http://www.slideshare.net/teemukurppa/managing-data-workflows-with-luigi>`__
  * `Blendle <https://launch.blendle.com/>`_ `(presentation) <http://www.anneschuth.nl/wp-content/uploads/sea-anneschuth-streamingblendle.pdf#page= @abstr_number >`__
  * `TrustYou <http://www.trustyou.com/>`_ `(presentation, @abstr_number ) <https://speakerdeck.com/mfcabrera/pydata-berlin- @abstr_number -processing-hotel-reviews-with-python>`__
  * `Groupon <https://www.groupon.com/>`_ / `OrderUp <https://orderup.com>`_ `(alternative implementation) <https://github.com/groupon/luigi-warehouse>`__
  * `Red Hat - Marketing Operations <https://www.redhat.com>`_ `(blog, @abstr_number ) <https://github.com/rh-marketingops/rh-mo-scc-luigi>`__
  * `GetNinjas <https://www.getninjas.com.br/>`_ `(blog, @abstr_number ) <https://labs.getninjas.com.br/using-luigi-to-create-and-monitor-pipelines-of-batch-jobs-eb @abstr_number b @abstr_number cd @abstr_number a @abstr_number >`__
  * `voyages-sncf.com <https://www.voyages-sncf.com/>`_ `(presentation, @abstr_number ) <https://github.com/voyages-sncf-technologies/meetup-afpy-nantes-luigi>`__
  * `Open Targets <https://www.opentargets.org/>`_ `(blog, @abstr_number ) <https://blog.opentargets.org/using-containers-with-luigi>`__
  * `Leipzig University Library <https://ub.uni-leipzig.de>`_ `(presentation, @abstr_number ) <https://de.slideshare.net/MartinCzygan/build-your-own-discovery-index-of-scholary-eresources>`__ / `(project) <https://finc.info/de/datenquellen>`__
  * `Synetiq <https://synetiq.net/>`_ `(presentation, @abstr_number ) <https://www.youtube.com/watch?v=M @abstr_number xUQXogSfo>`__
  * `Glossier <https://www.glossier.com/>`_ `(blog, @abstr_number ) <https://medium.com/glossier/how-to-build-a-data-warehouse-what-weve-learned-so-far-at-glossier- @abstr_number ff @abstr_number e @abstr_number e @abstr_number >`__
  * `Data Revenue <https://www.datarevenue.com/>`_ `(blog, @abstr_number ) <https://www.datarevenue.com/en/blog/how-to-scale-your-machine-learning-pipeline>`_
  * `Uppsala University <http://pharmb.io>`_ `(tutorial) <http://uppnex.se/twiki/do/view/Courses/EinfraMPS @abstr_number /Luigi.html>`_ / `(presentation, @abstr_number ) <https://www.youtube.com/watch?v=f @abstr_number PqSXZdWM>`_ / `(slides, @abstr_number ) <https://www.slideshare.net/SamuelLampa/building-workflows-with-spotifys-luigi>`_ / `(poster, @abstr_number ) <https://pharmb.io/poster/ @abstr_number -sciluigi/>`_ / `(paper, @abstr_number ) <https://doi.org/ @abstr_number . @abstr_number /s @abstr_number - @abstr_number - @abstr_number - @abstr_number >`_ / `(project) <https://github.com/pharmbio/sciluigi>`_
  * `GIPHY <https://giphy.com/>`_ `(blog, @abstr_number ) <https://engineering.giphy.com/luigi-the- @abstr_number x-plumber-containerizing-scaling-luigi-in-kubernetes/>`_



Some more companies are using Luigi but haven't had a chance yet to write about it:

  * `Schibsted <http://www.schibsted.com/>`_
  * `enbrite.ly <http://enbrite.ly/>`_
  * `Dow Jones / The Wall Street Journal <http://wsj.com>`_
  * `Hotels.com <https://hotels.com>`_
  * `Newsela <https://newsela.com>`_
  * `Squarespace <https://www.squarespace.com/>`_
  * `OAO <https://adops.com/>`_
  * `Grovo <https://grovo.com/>`_
  * `Weebly <https://www.weebly.com/>`_
  * `Deloitte <https://www.Deloitte.co.uk/>`_
  * `Stacktome <https://stacktome.com/>`_
  * `LINX+Neemu+Chaordic <https://www.chaordic.com.br/>`_
  * `Foxberry <https://www.foxberry.com/>`_
  * `Okko <https://okko.tv/>`_
  * `ISVWorld <http://isvworld.com/>`_
  * `Big Data <https://bigdata.com.br/>`_
  * `Movio <https://movio.co.nz/>`_
  * `Bonnier News <https://www.bonniernews.se/>`_
  * `Starsky Robotics <https://www.starsky.io/>`_
  * `BaseTIS <https://www.basetis.com/>`_
  * `Hopper <https://www.hopper.com/>`_
  * `VOYAGE GROUP/Zucks <https://zucks.co.jp/en/>`_
  * `Textpert <https://www.textpert.ai/>`_
  * `Whizar <https://www.whizar.com/>`_
  * `xtream <https://www.xtreamers.io/>`_



We're more than happy to have your company added here. Just send a PR on GitHub.

## External links

  * `Mailing List <https://groups.google.com/d/forum/luigi-user/>`_ for discussions and asking questions. (Google Groups)
  * `Releases <https://pypi.python.org/pypi/luigi>`_ (PyPI)
  * `Source code <https://github.com/spotify/luigi>`_ (GitHub)
  * `Hubot Integration <https://github.com/houzz/hubot-luigi>`_ plugin for Slack, Hipchat, etc (GitHub)



## Authors

Luigi was built at `Spotify <https://www.spotify.com>`_, mainly by `Erik Bernhardsson <https://github.com/erikbern>`_ and `Elias Freider <https://github.com/freider>`_. `Many other people <https://github.com/spotify/luigi/graphs/contributors>`_ have contributed since open sourcing in late @abstr_number . `Arash Rouhani <https://github.com/tarrasch>`_ is currently the chief maintainer of Luigi.
