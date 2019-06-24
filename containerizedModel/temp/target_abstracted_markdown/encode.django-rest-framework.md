#  @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**Awesome web-browsable Web APIs.**

Full documentation for the project is available at @abstr_hyperlink .

* * *

# Funding

REST framework is a _collaboratively funded project_. If you use REST framework commercially we strongly encourage you to invest in its continued development by @abstr_hyperlink .

The initial aim is to provide a single full-time position on REST framework. _Every single sign-up makes a significant impact towards making that possible._

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Many thanks to all our @abstr_hyperlink , and in particular to our premium backers, @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink .

* * *

# Overview

Django REST framework is a powerful and flexible toolkit for building Web APIs.

Some reasons you might want to use REST framework:

  * The @abstr_hyperlink is a huge usability win for your developers.
  * @abstr_hyperlink including optional packages for @abstr_hyperlink and @abstr_hyperlink .
  * @abstr_hyperlink that supports both @abstr_hyperlink and @abstr_hyperlink data sources.
  * Customizable all the way down - just use @abstr_hyperlink if you don't need the @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink .
  * @abstr_hyperlink , and @abstr_hyperlink .



There is a live example API for testing purposes, @abstr_hyperlink .

**Below** : _Screenshot from the browsable API_

@abstr_image 

* * *

# Requirements

  * Python ( @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number )
  * Django ( @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number )



We **highly recommend** and only officially support the latest patch release of each Python and Django series.

# Installation

Install using `pip`...
    
    
    pip install djangorestframework
    

Add `'rest_framework'` to your `INSTALLED_APPS` setting.
    
    
    INSTALLED_APPS = (
        ...
        'rest_framework',
    )
    

# Example

Let's take a look at a quick example of using REST framework to build a simple model-backed API for accessing users and groups.

Startup up a new project like so...
    
    
    pip install django
    pip install djangorestframework
    django-admin startproject example .
    ./manage.py migrate
    ./manage.py createsuperuser
    

Now edit the `example/urls.py` module in your project:

@abstr_code_section 

We'd also like to configure a couple of settings for our API.

Add the following to your `settings.py` module:

@abstr_code_section 

That's it, we're done!
    
    
    ./manage.py runserver
    

You can now open the API in your browser at `http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /`, and view your new 'users' API. If you use the `Login` control in the top right corner you'll also be able to add, create and delete users from the system.

You can also interact with the API using command line tools such as @abstr_hyperlink . For example, to list the users endpoint:
    
    
    $ curl -H 'Accept: application/json; indent= @abstr_number ' -u admin:password http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /users/
    [
        {
            "url": "http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /users/ @abstr_number /",
            "username": "admin",
            "email": "admin@example.com",
            "is_staff": true,
        }
    ]
    

Or to create a new user:
    
    
    $ curl -X POST -d username=new -d email=new@example.com -d is_staff=false -H 'Accept: application/json; indent= @abstr_number ' -u admin:password http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /users/
    {
        "url": "http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /users/ @abstr_number /",
        "username": "new",
        "email": "new@example.com",
        "is_staff": false,
    }
    

# Documentation & Support

Full documentation for the project is available at @abstr_hyperlink .

For questions and support, use the @abstr_hyperlink , or `#restframework` on freenode IRC.

You may also want to @abstr_hyperlink .

# Security

Please see the @abstr_hyperlink .
