#  @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

NOTE: For more in-depth documentation visit @abstr_hyperlink 

hug aims to make developing Python driven APIs as simple as possible, but no simpler. As a result, it drastically simplifies Python API development.

hug's Design Objectives:

  * Make developing a Python driven API as succinct as a written definition.
  * The framework should encourage code that self-documents.
  * It should be fast. A developer should never feel the need to look somewhere else for performance reasons.
  * Writing tests for APIs written on-top of hug should be easy and intuitive.
  * Magic done once, in an API framework, is better than pushing the problem set to the user of the API framework.
  * Be the basis for next generation Python APIs, embracing the latest technology.



As a result of these goals, hug is Python @abstr_number + only and built upon @abstr_hyperlink high performance HTTP library

@abstr_hyperlink 

# Installing hug

Installing hug is as simple as:

@abstr_code_section 

Ideally, within a @abstr_hyperlink .

# Getting Started

Build an example API with a simple endpoint in just a few lines.

@abstr_code_section 

To run, from the command line type:

@abstr_code_section 

You can access the example in your browser at: `localhost: @abstr_number /happy_birthday?name=hug&age= @abstr_number`. Then check out the documentation for your API at `localhost: @abstr_number /documentation`

Parameters can also be encoded in the URL (check out happy_birthday.py for the whole example).

@abstr_code_section 

Which, once you are running the server as above, you can use this way:

@abstr_code_section 

# Versioning with hug

@abstr_code_section 

To run the example:

@abstr_code_section 

Then you can access the example from `localhost: @abstr_number /v @abstr_number /echo?text=Hi` / `localhost: @abstr_number /v @abstr_number /echo?text=Hi` Or access the documentation for your API from `localhost: @abstr_number`

Note: versioning in hug automatically supports both the version header as well as direct URL based specification.

# Testing hug APIs

hug's `http` method decorators don't modify your original functions. This makes testing hug APIs as simple as testing any other Python functions. Additionally, this means interacting with your API functions in other Python code is as straight forward as calling Python only API functions. hug makes it easy to test the full Python stack of your API by using the `hug.test` module:

@abstr_code_section 

You can use this `Response` object for test assertions (check out test_happy_birthday.py ):

@abstr_code_section 

# Running hug with other WSGI based servers

hug exposes a `__hug_wsgi__` magic method on every API module automatically. Running your hug based API on any standard wsgi server should be as simple as pointing it to `module_name`: `__hug_wsgi__`.

For Example:

@abstr_code_section 

To run the hello world hug example API.

# Building Blocks of a hug API

When building an API using the hug framework you'll use the following concepts:

**METHOD Decorators** `get`, `post`, `update`, etc HTTP method decorators that expose your Python function as an API while keeping your Python method unchanged

@abstr_code_section 

hug uses the structure of the function you decorate to automatically generate documentation for users of your API. hug always passes a request, response, and api_version variable to your function if they are defined params in your function definition.

**Type Annotations** functions that optionally are attached to your methods arguments to specify how the argument is validated and converted into a Python type

@abstr_code_section 

Type annotations also feed into `hug`'s automatic documentation generation to let users of your API know what data to supply.

**Directives** functions that get executed with the request / response data based on being requested as an argument in your api_function. These apply as input parameters only, and can not be applied currently as output formats or transformations.

@abstr_code_section 

Directives may be accessed via an argument with a `hug_` prefix, or by using Python @abstr_number type annotations. The latter is the more modern approach, and is recommended. Directives declared in a module can be accessed by using their fully qualified name as the type annotation (ex: `module.directive_name`).

Aside from the obvious input transformation use case, directives can be used to pipe data into your API functions, even if they are not present in the request query string, POST body, etc. For an example of how to use directives in this way, see the authentication example in the examples folder.

Adding your own directives is straight forward:

@abstr_code_section 

For completeness, here is an example of accessing the directive via the magic name approach:

@abstr_code_section 

**Output Formatters** a function that takes the output of your API function and formats it for transport to the user of the API.

@abstr_code_section 

as shown, you can easily change the output format for both an entire API as well as an individual API call

**Input Formatters** a function that takes the body of data given from a user of your API and formats it for handling.

@abstr_code_section 

Input formatters are mapped based on the `content_type` of the request data, and only perform basic parsing. More detailed parsing should be done by the Type Annotations present on your `api_function`

**Middleware** functions that get called for every request a hug API processes

@abstr_code_section 

You can also easily add any Falcon style middleware using:

@abstr_code_section 

**Parameter mapping** can be used to override inferred parameter names, eg. for reserved keywords:

@abstr_code_section 

Input formatters are mapped based on the `content_type` of the request data, and only perform basic parsing. More detailed parsing should be done by the Type Annotations present on your `api_function`

# Splitting APIs over multiple files

hug enables you to organize large projects in any manner you see fit. You can import any module that contains hug decorated functions (request handling, directives, type handlers, etc) and extend your base API with that module.

For example:

`something.py`

@abstr_code_section 

Can be imported into the main API file:

`__init__.py`

@abstr_code_section 

Or alternatively - for cases like this - where only one module is being included per a URL route:

@abstr_code_section 

# Configuring hug @abstr_number 

By default, hug returns an auto generated API spec when a user tries to access an endpoint that isn't defined. If you would not like to return this spec you can turn off @abstr_number documentation:

From the command line application:

@abstr_code_section 

Additionally, you can easily create a custom @abstr_number handler using the `hug.not_found` decorator:

@abstr_code_section 

This decorator works in the same manner as the hug HTTP method decorators, and is even version aware:

@abstr_code_section 

# Asyncio support

When using the `get` and `cli` method decorator on coroutines, hug will schedule the execution of the coroutine.

Using asyncio coroutine decorator

@abstr_code_section 

Using Python @abstr_number . @abstr_number async keyword.

@abstr_code_section 

NOTE: Hug is running on top Falcon which is not an asynchronous server. Even if using asyncio, requests will still be processed synchronously.

# Using Docker

If you like to develop in Docker and keep your system clean, you can do that but you'll need to first install @abstr_hyperlink .

Once you've done that, you'll need to `cd` into the `docker` directory and run the web server (Gunicorn) specified in `./docker/gunicorn/Dockerfile`, after which you can preview the output of your API in the browser on your host machine.

@abstr_code_section 

By default, the IP is @abstr_number . @abstr_number . @abstr_number . @abstr_number . Assuming that's the IP you see, as well, you would then go to `http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /` in your browser to view your API.

You can also log into a Docker container that you can consider your work space. This workspace has Python and Pip installed so you can use those tools within Docker. If you need to test the CLI interface, for example, you would use this.

@abstr_code_section 

On your Docker `workspace` container, the `./docker/templates` directory on your host computer is mounted to `/src` in the Docker container. This is specified under `services` > `app` of `./docker/docker-compose.yml`.

@abstr_code_section 

# Why hug?

HUG simply stands for Hopefully Useful Guide. This represents the project's goal to help guide developers into creating well written and intuitive APIs.

* * *

Thanks and I hope you find _this_ hug helpful as you develop your next Python API!

~Timothy Crosley
