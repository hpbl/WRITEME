### #

boto

### #

boto @abstr_number . @abstr_number . @abstr_number 

Released: @abstr_number -July- @abstr_number 

.. image:: https://travis-ci.org/boto/boto.svg?branch=develop :target: https://travis-ci.org/boto/boto

.. image:: https://pypip.in/d/boto/badge.svg :target: https://pypi.python.org/pypi/boto/

* * *

Boto @abstr_number 

* * *

`Boto @abstr_number <https://github.com/boto/boto @abstr_number >`__, the next version of Boto, is now stable and recommended for general use. It can be used side-by-side with Boto in the same project, so it is easy to start using Boto @abstr_number in your existing projects as well as new projects. Going forward, API updates and all new feature work will be focused on Boto @abstr_number .

To assist users who still depend on Boto and cannot immediately switch over, we will be triaging and addressing critical issues and PRs in Boto in the short term. As more users make the switch to Boto @abstr_number , we expect to reduce our maintenance involvement over time. If we decide on a cutoff date or any significant changes to our maintenance plan, we will make pre-announcements well ahead of schedule to allow ample time for our users to adapt/migrate.

* * *

Introduction

* * *

Boto is a Python package that provides interfaces to Amazon Web Services. Currently, all features work with Python @abstr_number . @abstr_number and @abstr_number . @abstr_number . Work is under way to support Python @abstr_number . @abstr_number + in the same codebase. Modules are being ported one at a time with the help of the open source community, so please check below for compatibility with Python @abstr_number . @abstr_number +.

To port a module to Python @abstr_number . @abstr_number +, please view our `Contributing Guidelines`_ and the `Porting Guide`_. If you would like, you can open an issue to let others know about your work in progress. Tests **must** pass on Python @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , and @abstr_number . @abstr_number for pull requests to be accepted.

* * *

Services

* * *

At the moment, boto supports:

  * Compute

    * Amazon Elastic Compute Cloud (EC @abstr_number ) (Python @abstr_number )
    * Amazon Elastic Map Reduce (EMR) (Python @abstr_number )
    * AutoScaling (Python @abstr_number )
    * Amazon Kinesis (Python @abstr_number )
    * AWS Lambda (Python @abstr_number )
    * Amazon EC @abstr_number Container Service (Python @abstr_number )
  * Content Delivery

    * Amazon CloudFront (Python @abstr_number )
  * Database

    * Amazon Relational Data Service (RDS)
    * Amazon DynamoDB (Python @abstr_number )
    * Amazon SimpleDB (Python @abstr_number )
    * Amazon ElastiCache (Python @abstr_number )
    * Amazon Redshift (Python @abstr_number )
  * Deployment and Management

    * AWS Elastic Beanstalk (Python @abstr_number )
    * AWS CloudFormation (Python @abstr_number )
    * AWS Data Pipeline (Python @abstr_number )
    * AWS Opsworks (Python @abstr_number )
    * AWS CloudTrail (Python @abstr_number )
    * AWS CodeDeploy (Python @abstr_number )
  * Administration & Security

    * AWS Identity and Access Management (IAM) (Python @abstr_number )
    * AWS Key Management Service (KMS) (Python @abstr_number )
    * AWS Config (Python @abstr_number )
    * AWS CloudHSM (Python @abstr_number )
  * Application Services

    * Amazon CloudSearch (Python @abstr_number )
    * Amazon CloudSearch Domain (Python @abstr_number )
    * Amazon Elastic Transcoder (Python @abstr_number )
    * Amazon Simple Workflow Service (SWF) (Python @abstr_number )
    * Amazon Simple Queue Service (SQS) (Python @abstr_number )
    * Amazon Simple Notification Server (SNS) (Python @abstr_number )
    * Amazon Simple Email Service (SES) (Python @abstr_number )
    * Amazon Cognito Identity (Python @abstr_number )
    * Amazon Cognito Sync (Python @abstr_number )
    * Amazon Machine Learning (Python @abstr_number )
  * Monitoring

    * Amazon CloudWatch (EC @abstr_number Only) (Python @abstr_number )
    * Amazon CloudWatch Logs (Python @abstr_number )
  * Networking

    * Amazon Route @abstr_number (Python @abstr_number )
    * Amazon Route @abstr_number Domains (Python @abstr_number )
    * Amazon Virtual Private Cloud (VPC) (Python @abstr_number )
    * Elastic Load Balancing (ELB) (Python @abstr_number )
    * AWS Direct Connect (Python @abstr_number )
  * Payments and Billing

    * Amazon Flexible Payment Service (FPS)
  * Storage

    * Amazon Simple Storage Service (S @abstr_number ) (Python @abstr_number )
    * Amazon Glacier (Python @abstr_number )
    * Amazon Elastic Block Store (EBS)
    * Google Cloud Storage
  * Workforce

    * Amazon Mechanical Turk
  * Other

    * Marketplace Web Services (Python @abstr_number )
    * AWS Support (Python @abstr_number )



The goal of boto is to support the full breadth and depth of Amazon Web Services. In addition, boto provides support for other public services such as Google Storage in addition to private cloud systems like Eucalyptus, OpenStack and Open Nebula.

Boto is developed mainly using Python @abstr_number . @abstr_number . @abstr_number and Python @abstr_number . @abstr_number . @abstr_number on Mac OSX and Ubuntu Maverick. It is known to work on other Linux distributions and on Windows. Most of Boto requires no additional libraries or packages other than those that are distributed with Python. Efforts are made to keep boto compatible with Python @abstr_number . @abstr_number .x but no guarantees are made.

* * *

Installation

* * *

Install via `pip`_:

::
    
    
    $ pip install boto
    

Install from source:

::
    
    
    $ git clone git://github.com/boto/boto.git
    $ cd boto
    $ python setup.py install
    

* * *

ChangeLogs

* * *

To see what has changed over time in boto, you can check out the release notes at `http://docs.pythonboto.org/en/latest/#release-notes`

* * *

Finding Out More About Boto

* * *

The main source code repository for boto can be found on `github.com`_. The boto project uses the `gitflow`_ model for branching.

`Online documentation`_ is also available. The online documentation includes full API documentation as well as Getting Started Guides for many of the boto modules.

Boto releases can be found on the `Python Cheese Shop`_.

Join our IRC channel `#boto` on FreeNode. Webchat IRC channel: http://webchat.freenode.net/?channels=boto

Join the `boto-users Google Group`_.

* * *

Getting Started with Boto

* * *

Your credentials can be passed into the methods that create connections. Alternatively, boto will check for the existence of the following environment variables to ascertain your credentials:

**AWS_ACCESS_KEY_ID** \- Your AWS Access Key ID

**AWS_SECRET_ACCESS_KEY** \- Your AWS Secret Access Key

Credentials and other boto-related settings can also be stored in a boto config file. See `this`_ for details.

.. _Contributing Guidelines: https://github.com/boto/boto/blob/develop/CONTRIBUTING .. _Porting Guide: http://boto.readthedocs.org/en/latest/porting_guide.html .. _pip: http://www.pip-installer.org/ .. _release notes: https://github.com/boto/boto/wiki .. _github.com: http://github.com/boto/boto .. _Online documentation: http://docs.pythonboto.org .. _Python Cheese Shop: http://pypi.python.org/pypi/boto .. _this: http://docs.pythonboto.org/en/latest/boto_config_tut.html .. _gitflow: http://nvie.com/posts/a-successful-git-branching-model/ .. _neo: https://github.com/boto/boto/tree/neo .. _boto-users Google Group: https://groups.google.com/forum/?fromgroups#!forum/boto-users
