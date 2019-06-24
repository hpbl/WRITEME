# Cookiecutter Django

.. image:: https://travis-ci.org/pydanny/cookiecutter-django.svg?branch=master :target: https://travis-ci.org/pydanny/cookiecutter-django?branch=master :alt: Build Status

.. image:: https://pyup.io/repos/github/pydanny/cookiecutter-django/shield.svg :target: https://pyup.io/repos/github/pydanny/cookiecutter-django/ :alt: Updates

.. image:: https://badges.gitter.im/Join Chat.svg :target: https://gitter.im/pydanny/cookiecutter-django?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge

.. image:: https://www.codetriage.com/pydanny/cookiecutter-django/badges/users.svg :target: https://www.codetriage.com/pydanny/cookiecutter-django :alt: Code Helpers Badge

.. image:: https://img.shields.io/badge/code% @abstr_number style-black- @abstr_number .svg :target: https://github.com/ambv/black :alt: Code style: black

Powered by Cookiecutter_, Cookiecutter Django is a framework for jumpstarting production-ready Django projects quickly.

  * Documentation: https://cookiecutter-django.readthedocs.io/en/latest/
  * See Troubleshooting_ for common errors and obstacles
  * If you have problems with Cookiecutter Django, please open issues_ don't send emails to the maintainers.



.. _Troubleshooting: https://cookiecutter-django.readthedocs.io/en/latest/troubleshooting.html

.. _ @abstr_number : https://github.com/pydanny/cookiecutter-django/issues/ @abstr_number #issuecomment- @abstr_number .. _issues: https://github.com/pydanny/cookiecutter-django/issues/new

## Features

  * For Django @abstr_number . @abstr_number 
  * Works with Python @abstr_number . @abstr_number 
  * Renders Django projects with @abstr_number % starting test coverage
  * Twitter Bootstrap_ v @abstr_number (`maintained Foundation fork`_ also available)
  * @abstr_number -Factor_ based settings via django-environ_
  * Secure by default. We believe in SSL.
  * Optimized development and production settings
  * Registration via django-allauth_
  * Comes with custom user model ready to go
  * Optional custom static build using Gulp and livereload
  * Send emails via Anymail_ (using Mailgun_ by default, but switchable)
  * Media storage using Amazon S @abstr_number or Google Cloud Storage
  * Docker support using docker-compose_ for development and production (using Traefik_ with LetsEncrypt_ support)
  * Procfile_ for deploying to Heroku
  * Instructions for deploying to PythonAnywhere_
  * Run tests with unittest or pytest
  * Customizable PostgreSQL version



.. _`maintained Foundation fork`: https://github.com/Parbhat/cookiecutter-django-foundation

## Optional Integrations

_These features can be enabled during initial project setup._

  * Serve static files from Amazon S @abstr_number , Google Cloud Storage or Whitenoise_
  * Configuration for Celery_ and Flower_ (the latter in Docker setup only)
  * Integration with MailHog_ for local email testing
  * Integration with Sentry_ for error logging



.. _Bootstrap: https://github.com/twbs/bootstrap .. _django-environ: https://github.com/joke @abstr_number k/django-environ .. _ @abstr_number -Factor: http:// @abstr_number factor.net/ .. _django-allauth: https://github.com/pennersr/django-allauth .. _django-avatar: https://github.com/grantmcconnaughey/django-avatar .. _Procfile: https://devcenter.heroku.com/articles/procfile .. _Mailgun: http://www.mailgun.com/ .. _Whitenoise: https://whitenoise.readthedocs.io/ .. _Celery: http://www.celeryproject.org/ .. _Flower: https://github.com/mher/flower .. _Anymail: https://github.com/anymail/django-anymail .. _MailHog: https://github.com/mailhog/MailHog .. _Sentry: https://sentry.io/welcome/ .. _docker-compose: https://github.com/docker/compose .. _PythonAnywhere: https://www.pythonanywhere.com/ .. _Traefik: https://traefik.io/ .. _LetsEncrypt: https://letsencrypt.org/

## Constraints

  * Only maintained @abstr_number rd party libraries are used.
  * Uses PostgreSQL everywhere ( @abstr_number . @abstr_number - @abstr_number . @abstr_number )
  * Environment variables for configuration (This won't work with Apache/mod_wsgi).



## Support this Project!

This project is run by volunteers. Please support them in their efforts to maintain and improve Cookiecutter Django:

  * Daniel Roy Greenfeld, Project Lead (`GitHub <https://github.com/pydanny>`_, `Patreon <https://www.patreon.com/danielroygreenfeld>`_): expertise in Django and AWS ELB.

  * Nikita Shupeyko, Core Developer (`GitHub <https://github.com/webyneter>`_): expertise in Python/Django, hands-on DevOps and frontend experience.




Projects that provide financial support to the maintainers:

Two Scoops of Django @abstr_number . @abstr_number ~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://cdn.shopify.com/s/files/ @abstr_number / @abstr_number / @abstr_number /products/tsd- @abstr_number -alpha_medium.jpg?v= @abstr_number :name: Two Scoops of Django @abstr_number . @abstr_number Cover :align: center :alt: Two Scoops of Django :target: http://twoscoopspress.com/products/two-scoops-of-django- @abstr_number - @abstr_number 

Two Scoops of Django is the best dessert-themed Django reference in the universe

pyup ~~~~~~~~~~~~~~~~~~

.. image:: https://pyup.io/static/images/logo.png :name: pyup :align: center :alt: pyup :target: https://pyup.io/

Pyup brings you automated security and dependency updates used by Google and other organizations. Free for open source projects!

## Usage

Let's pretend you want to create a Django project called "redditclone". Rather than using `startproject` and then editing the results to include your name, email, and various configuration issues that always get forgotten until the worst possible moment, get cookiecutter_ to do all the work.

First, get Cookiecutter. Trust me, it's awesome::
    
    
    $ pip install "cookiecutter>= @abstr_number . @abstr_number . @abstr_number "
    

Now run it against this repo::
    
    
    $ cookiecutter https://github.com/pydanny/cookiecutter-django
    

You'll be prompted for some values. Provide them, then a Django project will be created for you.

**Warning** : After this point, change 'Daniel Greenfeld', 'pydanny', etc to your own information.

Answer the prompts with your own desired options_. For example::
    
    
    Cloning into 'cookiecutter-django'...
    remote: Counting objects:  @abstr_number , done.
    remote: Compressing objects:  @abstr_number % ( @abstr_number / @abstr_number ), done.
    remote: Total  @abstr_number  (delta  @abstr_number ), reused  @abstr_number  (delta  @abstr_number )
    Receiving objects:  @abstr_number % ( @abstr_number / @abstr_number ),  @abstr_number . @abstr_number  KiB |  @abstr_number  KiB/s, done.
    Resolving deltas:  @abstr_number % ( @abstr_number / @abstr_number ), done.
    project_name [Project Name]: Reddit Clone
    project_slug [reddit_clone]: reddit
    author_name [Daniel Roy Greenfeld]: Daniel Greenfeld
    email [you@example.com]: pydanny@gmail.com
    description [Behold My Awesome Project!]: A reddit clone.
    domain_name [example.com]: myreddit.com
    version [ @abstr_number . @abstr_number . @abstr_number ]:  @abstr_number . @abstr_number . @abstr_number 
    timezone [UTC]: America/Los_Angeles
    use_whitenoise [n]: n
    use_celery [n]: y
    use_mailhog [n]: n
    use_sentry [n]: y
    use_pycharm [n]: y
    windows [n]: n
    use_docker [n]: n
    use_heroku [n]: y
    use_compressor [n]: y
    Select postgresql_version:
     @abstr_number  -  @abstr_number . @abstr_number 
     @abstr_number  -  @abstr_number . @abstr_number 
     @abstr_number  -  @abstr_number . @abstr_number 
     @abstr_number  -  @abstr_number . @abstr_number 
     @abstr_number  -  @abstr_number . @abstr_number 
    Choose from  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number  [ @abstr_number ]:  @abstr_number 
    Select js_task_runner:
     @abstr_number  - None
     @abstr_number  - Gulp
    Choose from  @abstr_number ,  @abstr_number  [ @abstr_number ]:  @abstr_number 
    Select cloud_provider:
     @abstr_number  - AWS
     @abstr_number  - GCP
     @abstr_number  - None
    Choose from  @abstr_number ,  @abstr_number ,  @abstr_number  [ @abstr_number ]:  @abstr_number 
    custom_bootstrap_compilation [n]: n
    Select open_source_license:
     @abstr_number  - MIT
     @abstr_number  - BSD
     @abstr_number  - GPLv @abstr_number 
     @abstr_number  - Apache Software License  @abstr_number . @abstr_number 
     @abstr_number  - Not open source
    Choose from  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number  [ @abstr_number ]:  @abstr_number 
    keep_local_envs_in_vcs [y]: y
    debug[n]: n
    

Enter the project and take a look around::
    
    
    $ cd reddit/
    $ ls
    

Create a git repo and push it there::
    
    
    $ git init
    $ git add .
    $ git commit -m "first awesome commit"
    $ git remote add origin git@github.com:pydanny/redditclone.git
    $ git push -u origin master
    

Now take a look at your repo. Don't forget to carefully look at the generated README. Awesome, right?

For local development, see the following:

  * `Developing locally`_
  * `Developing locally using docker`_



.. _options: http://cookiecutter-django.readthedocs.io/en/latest/project-generation-options.html .. _`Developing locally`: http://cookiecutter-django.readthedocs.io/en/latest/developing-locally.html .. _`Developing locally using docker`: http://cookiecutter-django.readthedocs.io/en/latest/developing-locally-docker.html

## Community

  * Have questions? **Before you ask questions anywhere else** , please post your question on `Stack Overflow`_ under the _cookiecutter-django_ tag. We check there periodically for questions.
  * If you think you found a bug or want to request a feature, please open an issue_.
  * For anything else, you can chat with us on `Gitter`_.



.. _`Stack Overflow`: http://stackoverflow.com/questions/tagged/cookiecutter-django .. _`issue`: https://github.com/pydanny/cookiecutter-django/issues .. _`Gitter`: https://gitter.im/pydanny/cookiecutter-django?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge

## For Readers of Two Scoops of Django

You may notice that some elements of this project do not exactly match what we describe in chapter @abstr_number . The reason for that is this project, amongst other things, serves as a test bed for trying out new ideas and concepts. Sometimes they work, sometimes they don't, but the end result is that it won't necessarily match precisely what is described in the book I co-authored.

## For pyup.io Users

If you are using `pyup.io`_ to keep your dependencies updated and secure, use the code _cookiecutter_ during checkout to get @abstr_number % off every month.

.. _`pyup.io`: https://pyup.io

## "Your Stuff"

Scattered throughout the Python and HTML of this project are places marked with "your stuff". This is where third-party libraries are to be integrated with your project.

## Releases

Need a stable release? You can find them at https://github.com/pydanny/cookiecutter-django/releases

## Not Exactly What You Want?

This is what I want. _It might not be what you want._ Don't worry, you have options:

Fork This ~~~~~~~~~~

If you have differences in your preferred setup, I encourage you to fork this to create your own version. Once you have your fork working, let me know and I'll add it to a ' _Similar Cookiecutter Templates_ ' list here. It's up to you whether or not to rename your fork.

If you do rename your fork, I encourage you to submit it to the following places:

  * cookiecutter_ so it gets listed in the README as a template.
  * The cookiecutter grid_ on Django Packages.



.. _cookiecutter: https://github.com/audreyr/cookiecutter .. _grid: https://www.djangopackages.com/grids/g/cookiecutters/

Submit a Pull Request ~~~~~~~~~~~~~~~~~~~~~~

We accept pull requests if they're small, atomic, and make our own project development experience better.

## Articles

  * `Using cookiecutter-django with Google Cloud Storage`_ - Mar. @abstr_number , @abstr_number 
  * `cookiecutter-django with Nginx, Route @abstr_number and ELB`_ - Feb. @abstr_number , @abstr_number 
  * `cookiecutter-django and Amazon RDS`_ - Feb. @abstr_number , @abstr_number 
  * `Using Cookiecutter to Jumpstart a Django Project on Windows with PyCharm`_ - May @abstr_number , @abstr_number 
  * `Exploring with Cookiecutter`_ - Dec. @abstr_number , @abstr_number 
  * `Introduction to Cookiecutter-Django`_ - Feb. @abstr_number , @abstr_number 
  * `Django and GitLab - Running Continuous Integration and tests with your FREE account`_ - May. @abstr_number , @abstr_number 
  * `Development and Deployment of Cookiecutter-Django on Fedora`_ - Jan. @abstr_number , @abstr_number 
  * `Development and Deployment of Cookiecutter-Django via Docker`_ - Dec. @abstr_number , @abstr_number 
  * `How to create a Django Application using Cookiecutter and Django @abstr_number . @abstr_number`_ - Sept. @abstr_number , @abstr_number 



Have a blog or online publication? Write about your cookiecutter-django tips and tricks, then send us a pull request with the link.

.. _`Using cookiecutter-django with Google Cloud Storage`: https://ahhda.github.io/cloud/gce/django/ @abstr_number / @abstr_number / @abstr_number /using-django-cookiecutter-cloud-storage.html .. _`cookiecutter-django with Nginx, Route @abstr_number and ELB`: https://msaizar.com/blog/cookiecutter-django-nginx-route- @abstr_number -and-elb/ .. _`cookiecutter-django and Amazon RDS`: https://msaizar.com/blog/cookiecutter-django-and-amazon-rds/ .. _`Exploring with Cookiecutter`: http://www.snowboardingcoder.com/django/ @abstr_number / @abstr_number / @abstr_number /exploring-with-cookiecutter/ .. _`Using Cookiecutter to Jumpstart a Django Project on Windows with PyCharm`: https://joshuahunter.com/posts/using-cookiecutter-to-jumpstart-a-django-project-on-windows-with-pycharm/

.. _`Development and Deployment of Cookiecutter-Django via Docker`: https://realpython.com/blog/python/development-and-deployment-of-cookiecutter-django-via-docker/ .. _`Development and Deployment of Cookiecutter-Django on Fedora`: https://realpython.com/blog/python/development-and-deployment-of-cookiecutter-django-on-fedora/ .. _`How to create a Django Application using Cookiecutter and Django @abstr_number . @abstr_number`: https://www.swapps.io/blog/how-to-create-a-django-application-using-cookiecutter-and-django- @abstr_number - @abstr_number / .. _`Introduction to Cookiecutter-Django`: http://krzysztofzuraw.com/blog/ @abstr_number /django-cookiecutter.html .. _`Django and GitLab - Running Continuous Integration and tests with your FREE account`: http://dezoito.github.io/ @abstr_number / @abstr_number / @abstr_number /django-gitlab-continuous-integration-phantomjs.html

## Code of Conduct

Everyone interacting in the Cookiecutter project's codebases, issue trackers, chat rooms, and mailing lists is expected to follow the `PyPA Code of Conduct`_.

.. _`PyPA Code of Conduct`: https://www.pypa.io/en/latest/code-of-conduct/
