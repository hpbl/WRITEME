@abstr_image 

## Zappa - Serverless Python

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

  * About
  * Installation and Configuration 
    * Running the Initial Setup / Settings
  * Basic Usage 
    * Initial Deployments
    * Updates
    * Rollback
    * Scheduling
    * Advanced Scheduling
    * Undeploy
    * Package
    * How Zappa Makes Packages
    * Template
    * Status
    * Tailing Logs
    * Remote Function Invocation
    * Django Management Commands
    * SSL Certification
    * Deploying to a Domain With AWS Certificate Manager
    * Deploying to a Domain With a Let's Encrypt Certificate (DNS Auth)
    * Deploying to a Domain With a Let's Encrypt Certificate (HTTP Auth)
    * Deploying to a Domain With Your Own SSL Certs
  * Executing in Response to AWS Events
  * Asynchronous Task Execution 
    * Catching Exceptions
    * Task Sources
    * Direct Invocation
    * Remote Invocations
    * Restrictions
    * Running Tasks in a VPC
    * Responses
  * Advanced Settings 
    * YAML Settings
  * Advanced Usage 
    * Keeping The Server Warm
    * Serving Static Files / Binary Uploads
    * Enabling CORS
    * Large Projects
    * Enabling Bash Completion
    * Enabling Secure Endpoints on API Gateway
    * API Key
    * IAM Policy
    * API Gateway Lambda Authorizers
    * Cognito User Pool Authorizer
    * API Gateway Resource Policy
    * Setting Environment Variables
    * Local Environment Variables
    * Remote AWS Environment Variables
    * Remote Environment Variables
    * Remote Environment Variables (via an S @abstr_number file)
    * API Gateway Context Variables
    * Catching Unhandled Exceptions
    * Using Custom AWS IAM Roles and Policies
    * Custom AWS IAM Roles and Policies for Deployment
    * Custom AWS IAM Roles and Policies for Execution
    * AWS X-Ray
    * Globally Available Server-less Architectures
    * Raising AWS Service Limits
    * Using Zappa With Docker
    * Dead Letter Queues
    * Unique Package ID
    * Application Load Balancer Event Source
    * Endpoint Configuration
    * Example Private API Gateway configuration
  * Zappa Guides
  * Zappa in the Press
  * Sites Using Zappa
  * Related Projects
  * Hacks
  * Contributing 
    * Using a Local Repo
  * Patrons
  * Merch
  * Support / Development / Training / Consulting



## About

@abstr_hyperlink 

_In a hurry? Click to see @abstr_hyperlink !_

**Zappa** makes it super easy to build and deploy server-less, event-driven Python applications (including, but not limited to, WSGI web apps) on AWS Lambda + API Gateway. Think of it as "serverless" web hosting for your Python apps. That means **infinite scaling** , **zero downtime** , **zero maintenance** \- and at a fraction of the cost of your current deployments!

If you've got a Python web app (including Django and Flask apps), it's as easy as:

@abstr_code_section 

and now you're server-less! _Wow!_

> What do you mean "serverless"?

Okay, so there still is a server - but it only has a _ @abstr_number millisecond_ life cycle! Serverless in this case means **"without any permanent infrastructure."**

With a traditional HTTP server, the server is online @abstr_number / @abstr_number , processing requests one by one as they come in. If the queue of incoming requests grows too large, some requests will time out. With Zappa, **each request is given its own virtual HTTP "server"** by Amazon API Gateway. AWS handles the horizontal scaling automatically, so no requests ever time out. Each request then calls your application from a memory cache in AWS Lambda and returns the response via Python's WSGI interface. After your app returns, the "server" dies.

Better still, with Zappa you only pay for the milliseconds of server time that you use, so it's many **orders of magnitude cheaper** than VPS/PaaS hosts like Linode or Heroku - and in most cases, it's completely free. Plus, there's no need to worry about load balancing or keeping servers online ever again.

It's great for deploying serverless microservices with frameworks like Flask and Bottle, and for hosting larger web apps and CMSes with Django. Or, you can use any WSGI-compatible app you like! You **probably don't need to change your existing applications** to use it, and you're not locked into using it.

Zappa also lets you build hybrid event-driven applications that can scale to **trillions of events** a year with **no additional effort** on your part! You also get **free SSL certificates** , **global app deployment** , **API access management** , **automatic security policy generation** , **precompiled C-extensions** , **auto keep-warms** , **oversized Lambda packages** , and **many other exclusive features**!

And finally, Zappa is **super easy to use**. You can deploy your application with a single command out of the box!

__Awesome!__

@abstr_image 

## Installation and Configuration

_Before you begin, make sure you are running Python @abstr_number . @abstr_number or Python @abstr_number . @abstr_number and you have a valid AWS account and your @abstr_hyperlink is properly installed._

**Zappa** can easily be installed through pip, like so:
    
    
    $ pip install zappa
    

Please note that Zappa _ **must** _ be installed into your project's @abstr_hyperlink . The virtual environment name should not be the same as the Zappa project name, as this may cause errors.

_(If you use @abstr_hyperlink and love to manage virtualenvs with **pyenv-virtualenv** , you just have to call `pyenv local [your_venv_name]` and it's ready. @abstr_hyperlink users should comment @abstr_hyperlink .)_

Next, you'll need to define your local and server-side settings.

### Running the Initial Setup / Settings

**Zappa** can automatically set up your deployment settings for you with the `init` command:
    
    
    $ zappa init
    

This will automatically detect your application type (Flask/Django - Pyramid users @abstr_hyperlink ) and help you define your deployment configuration settings. Once you finish initialization, you'll have a file named _zappa_settings.json_ in your project directory defining your basic deployment settings. It will probably look something like this for most WSGI apps:

@abstr_code_section 

or for Django:

@abstr_code_section 

_Psst: If you're deploying a Django application with Zappa for the first time, you might want to read Edgar Roman's @abstr_hyperlink ._

You can define as many stages as your like - we recommend having _dev_, _staging_, and _production_.

Now, you're ready to deploy!

## Basic Usage

### Initial Deployments

Once your settings are configured, you can package and deploy your application to a stage called "production" with a single command:
    
    
    $ zappa deploy production
    Deploying..
    Your application is now live at: https:// @abstr_number k @abstr_number anj @abstr_number k @abstr_number .execute-api.us-east- @abstr_number .amazonaws.com/production
    

And now your app is **live!** How cool is that?!

To explain what's going on, when you call `deploy`, Zappa will automatically package up your application and local virtual environment into a Lambda-compatible archive, replace any dependencies with versions @abstr_hyperlink , set up the function handler and necessary WSGI Middleware, upload the archive to S @abstr_number , create and manage the necessary Amazon IAM policies and roles, register it as a new Lambda function, create a new API Gateway resource, create WSGI-compatible routes for it, link it to the new Lambda function, and finally delete the archive from your S @abstr_number bucket. Handy!

Be aware that the default IAM role and policy created for executing Lambda applies a liberal set of permissions. These are most likely not appropriate for production deployment of important applications. See the section Custom AWS IAM Roles and Policies for Execution for more detail.

### Updates

If your application has already been deployed and you only need to upload new Python code, but not touch the underlying routes, you can simply:
    
    
    $ zappa update production
    Updating..
    Your application is now live at: https:// @abstr_number k @abstr_number anj @abstr_number k @abstr_number .execute-api.us-east- @abstr_number .amazonaws.com/production
    

This creates a new archive, uploads it to S @abstr_number and updates the Lambda function to use the new code, but doesn't touch the API Gateway routes.

### Rollback

You can also `rollback` the deployed code to a previous version by supplying the number of revisions to return to. For instance, to rollback to the version deployed @abstr_number versions ago:
    
    
    $ zappa rollback production -n  @abstr_number
    

### Scheduling

Zappa can be used to easily schedule functions to occur on regular intervals. This provides a much nicer, maintenance-free alternative to Celery! These functions will be packaged and deployed along with your `app_function` and called from the handler automatically. Just list your functions and the expression to schedule them using @abstr_hyperlink in your _zappa_settings.json_ file:

@abstr_code_section 

And then:
    
    
    $ zappa schedule production
    

And now your function will execute every minute!

If you want to cancel these, you can simply use the `unschedule` command:
    
    
    $ zappa unschedule production
    

And now your scheduled event rules are deleted.

See the example for more details.

#### Advanced Scheduling

Sometimes a function needs multiple expressions to describe its schedule. To set multiple expressions, simply list your functions, and the list of expressions to schedule them using @abstr_hyperlink in your _zappa_settings.json_ file:

@abstr_code_section 

This can be used to deal with issues arising from the UTC timezone crossing midnight during business hours in your local timezone.

It should be noted that overlapping expressions will not throw a warning, and should be checked for, to prevent duplicate triggering of functions.

### Undeploy

If you need to remove the API Gateway and Lambda function that you have previously published, you can simply:
    
    
    $ zappa undeploy production
    

You will be asked for confirmation before it executes.

If you enabled CloudWatch Logs for your API Gateway service and you don't want to keep those logs, you can specify the `--remove-logs` argument to purge the logs for your API Gateway and your Lambda function:
    
    
    $ zappa undeploy production --remove-logs
    

### Package

If you want to build your application package without actually uploading and registering it as a Lambda function, you can use the `package` command:
    
    
    $ zappa package production
    

If you have a `zip` callback in your `callbacks` setting, this will also be invoked.

@abstr_code_section 

You can also specify the output filename of the package with `-o`:
    
    
    $ zappa package production -o my_awesome_package.zip
    

#### How Zappa Makes Packages

Zappa will automatically package your active virtual environment into a package which runs smoothly on AWS Lambda.

During this process, it will replace any local dependencies with AWS Lambda compatible versions. Dependencies are included in this order:

  * Lambda-compatible `manylinux` wheels from a local cache
  * Lambda-compatible `manylinux` wheels from PyPI
  * Lambda-specific versions from @abstr_hyperlink 
  * Packages from the active virtual environment
  * Packages from the local project directory



It also skips certain unnecessary files, and ignores any .py files if .pyc files are available.

In addition, Zappa will also automatically set the correct execution permissions, configure package settings, and create a unique, auditable package manifest file.

To further reduce the final package file size, you can:

  * Set `slim_handler` to `True` to upload a small handler to Lambda and the rest of the package to S @abstr_number . For more details, see the @abstr_hyperlink and the @abstr_hyperlink . See also: Large Projects.
  * Use the `exclude` setting and provide a list of regex patterns to exclude from the archive. By default, Zappa will exclude Boto, because @abstr_hyperlink .



### Template

Similarly to `package`, if you only want the API Gateway CloudFormation template, use the `template` command:
    
    
    $ zappa template production --l your-lambda-arn -r your-role-arn
    

Note that you must supply your own Lambda ARN and Role ARNs in this case, as they may not have been created for you.

You can get the JSON output directly with `--json`, and specify the output file with `--output`.

### Status

If you need to see the status of your deployment and event schedules, simply use the `status` command.
    
    
    $ zappa status production
    

### Tailing Logs

You can watch the logs of a deployment by calling the `tail` management command.
    
    
    $ zappa tail production
    

By default, this will show all log items. In addition to HTTP and other events, anything `print`ed to `stdout` or `stderr` will be shown in the logs.

You can use the argument `--http` to filter for HTTP requests, which will be in the Apache Common Log Format.
    
    
    $ zappa tail production --http
    

Similarly, you can do the inverse and only show non-HTTP events and log messages:
    
    
    $ zappa tail production --non-http
    

If you don't like the default log colors, you can turn them off with `--no-color`.

You can also limit the length of the tail with `--since`, which accepts a simple duration string:
    
    
    $ zappa tail production --since  @abstr_number h #  @abstr_number  hours
    $ zappa tail production --since  @abstr_number m #  @abstr_number  minute
    $ zappa tail production --since  @abstr_number mm #  @abstr_number  month
    

You can filter out the contents of the logs with `--filter`, like so:
    
    
    $ zappa tail production --http --filter "POST" # Only show POST HTTP requests
    

Note that this uses the @abstr_hyperlink .

To tail logs without following (to exit immediately after displaying the end of the requested logs), pass `--disable-keep-open`:
    
    
    $ zappa tail production --since  @abstr_number h --disable-keep-open
    

### Remote Function Invocation

You can execute any function in your application directly at any time by using the `invoke` command.

For instance, suppose you have a basic application in a file called "my_app.py", and you want to invoke a function in it called "my_function". Once your application is deployed, you can invoke that function at any time by calling:
    
    
    $ zappa invoke production 'my_app.my_function'
    

Any remote print statements made and the value the function returned will then be printed to your local console. **Nifty!**

You can also invoke interpretable Python @abstr_number . @abstr_number or Python @abstr_number . @abstr_number strings directly by using `--raw`, like so:
    
    
    $ zappa invoke production "print  @abstr_number  +  @abstr_number  +  @abstr_number " --raw
    

For instance, it can come in handy if you want to create your first `superuser` on a RDS database running in a VPC (like Serverless Aurora): $ zappa invoke staging "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('username', 'email', 'password')" --raw

### Django Management Commands

As a convenience, Zappa can also invoke remote Django 'manage.py' commands with the `manage` command. For instance, to perform the basic Django status check:
    
    
    $ zappa manage production showmigrations admin
    

Obviously, this only works for Django projects which have their settings properly defined.

For commands which have their own arguments, you can also pass the command in as a string, like so:
    
    
    $ zappa manage production "shell --version"
    

Commands which require direct user input, such as `createsuperuser`, should be @abstr_hyperlink which use `zappa invoke <env> --raw`.

For more Django integration, take a look at the @abstr_hyperlink project.

_(Please note that commands which take over @abstr_number seconds to execute may time-out preventing output from being returned - but the command may continue to run. See @abstr_hyperlink for a work-around.)_

### SSL Certification

Zappa can be deployed to custom domain names and subdomains with custom SSL certificates, Let's Encrypt certificates, and @abstr_hyperlink (ACM) certificates.

Currently, the easiest of these to use are the AWS Certificate Manager certificates, as they are free, self-renewing, and require the least amount of work.

Once configured as described below, all of these methods use the same command:
    
    
    $ zappa certify
    

When deploying from a CI/CD system, you can use:
    
    
    $ zappa certify --yes
    

to skip the confirmation prompt.

#### Deploying to a Domain With AWS Certificate Manager

Amazon provides their own free alternative to Let's Encrypt called @abstr_hyperlink (ACM). To use this service with Zappa:

@abstr_number . Verify your domain in the AWS Certificate Manager console. @abstr_number . In the console, select the N. Virginia (us-east- @abstr_number ) region and request a certificate for your domain or subdomain (`sub.yourdomain.tld`), or request a wildcard domain (`*.yourdomain.tld`). @abstr_number . Copy the entire ARN of that certificate and place it in the Zappa setting `certificate_arn`. @abstr_number . Set your desired domain in the `domain` setting. @abstr_number . Call `$ zappa certify` to create and associate the API Gateway distribution using that certificate.

#### Deploying to a Domain With a Let's Encrypt Certificate (DNS Auth)

If you want to use Zappa on a domain with a free Let's Encrypt certificate using automatic Route @abstr_number based DNS Authentication, you can follow @abstr_hyperlink .

#### Deploying to a Domain With a Let's Encrypt Certificate (HTTP Auth)

If you want to use Zappa on a domain with a free Let's Encrypt certificate using HTTP Authentication, you can follow @abstr_hyperlink .

However, it's now far easier to use Route @abstr_number -based DNS authentication, which will allow you to use a Let's Encrypt certificate with a single `$ zappa certify` command.

#### Deploying to a Domain With Your Own SSL Certs

@abstr_number . The first step is to create a custom domain and obtain your SSL cert / key / bundle. @abstr_number . Ensure you have set the `domain` setting within your Zappa settings JSON - this will avoid problems with the Base Path mapping between the Custom Domain and the API invoke URL, which gets the Stage Name appended in the URI @abstr_number . Add the paths to your SSL cert / key / bundle to the `certificate`, `certificate_key`, and `certificate_chain` settings, respectively, in your Zappa settings JSON @abstr_number . Set `route @abstr_number _enabled` to `false` if you plan on using your own DNS provider, and not an AWS Route @abstr_number Hosted zone. @abstr_number . Deploy or update your app using Zappa @abstr_number . Run `$ zappa certify` to upload your certificates and register the custom domain name with your API gateway.

## Executing in Response to AWS Events

Similarly, you can have your functions execute in response to events that happen in the AWS ecosystem, such as S @abstr_number uploads, DynamoDB entries, Kinesis streams, SNS messages, and SQS queues.

In your _zappa_settings.json_ file, define your @abstr_hyperlink and the function you wish to execute. For instance, this will execute `your_module.process_upload_function` in response to new objects in your `my-bucket` S @abstr_number bucket. Note that `process_upload_function` must accept `event` and `context` parameters.

@abstr_code_section 

And then:
    
    
    $ zappa schedule production
    

And now your function will execute every time a new upload appears in your bucket!

To access the key's information in your application context, you'll want `process_upload_function` to look something like this:

@abstr_code_section 

Similarly, for a @abstr_hyperlink event:

@abstr_code_section 

Optionally you can add @abstr_hyperlink :

@abstr_code_section 

@abstr_hyperlink and @abstr_hyperlink are slightly different as it is not event based but pulling from a stream:

@abstr_code_section 

@abstr_hyperlink is also pulling messages from a stream. At this time, @abstr_hyperlink . Read the AWS Documentation carefully since Lambda calls the SQS DeleteMessage API on your behalf once your function completes successfully.

@abstr_code_section 

For configuring Lex Bot's intent triggered events: @abstr_code_section 

Events can also take keyword arguments: @abstr_code_section 

To get the keyword arguments you will need to look inside the event dictionary:

@abstr_code_section 

You can find more @abstr_hyperlink .

## Asynchronous Task Execution

Zappa also now offers the ability to seamlessly execute functions asynchronously in a completely separate AWS Lambda instance!

For example, if you have a Flask API for ordering a pie, you can call your `bake` function seamlessly in a completely separate Lambda instance by using the `zappa.asynchronous.task` decorator like so:

@abstr_code_section 

And that's it! Your API response will return immediately, while the `make_pie` function executes in a completely different Lambda instance.

When calls to @task decorated functions or the zappa.asynchronous.run command occur outside of Lambda, such as your local dev environment, the functions will execute immediately and locally. The zappa asynchronous functionality only works when in the Lambda environment or when specifying @abstr_hyperlink .

### Catching Exceptions

Putting a try..except block on an asynchronous task like this:

@abstr_code_section 

will cause an email to be sent twice for the same error. See @abstr_hyperlink . To work around this side-effect, and have the fault handler execute only once, change the return value to:

@abstr_code_section 

### Task Sources

By default, this feature uses direct AWS Lambda invocation. You can instead use AWS Simple Notification Service as the task event source by using the `task_sns` decorator, like so:

@abstr_code_section 

Using SNS also requires setting the following settings in your `zappa_settings`:

@abstr_code_section 

This will automatically create and subscribe to the SNS topic the code will use when you call the `zappa schedule` command.

Using SNS will also return a message ID in case you need to track your invocations.

### Direct Invocation

You can also use this functionality without a decorator by passing your function to `zappa.asynchronous.run`, like so:

@abstr_code_section 

### Remote Invocations

By default, Zappa will use lambda's current function name and current AWS region. If you wish to invoke a lambda with a different function name/region or invoke your lambda from outside of lambda, you must specify the `remote_aws_lambda_function_name` and `remote_aws_region` arguments so that the application knows which function and region to use. For example, if some part of our pizza making application had to live on an EC @abstr_number instance, but we wished to call the make_pie() function on its own Lambda instance, we would do it as follows:

@abstr_code_section If those task() parameters were not used, then EC @abstr_number would execute the function locally. These same `remote_aws_lambda_function_name` and `remote_aws_region` arguments can be used on the zappa.asynchronous.run() function as well.

### Restrictions

The following restrictions to this feature apply:

  * Functions must have a clean import path -- i.e. no closures, lambdas, or methods.
  * `args` and `kwargs` must be JSON-serializable.
  * The JSON-serialized arguments must be within the size limits for Lambda ( @abstr_number K) or SNS ( @abstr_number K) events.



All of this code is still backwards-compatible with non-Lambda environments - it simply executes in a blocking fashion and returns the result.

### Running Tasks in a VPC

If you're running Zappa in a Virtual Private Cloud (VPC), you'll need to configure your subnets to allow your lambda to communicate with services inside your VPC as well as the public Internet. A minimal setup requires two subnets.

In __subnet-a__: * Create a NAT * Create an Internet gateway * In the route table, create a route pointing the Internet gateway to @abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number .

In __subnet-b__: * Place your lambda function * In the route table, create a route pointing the NAT that belongs to __subnet-a__ to @abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number .

You can place your lambda in multiple subnets that are configured the same way as __subnet-b__ for high availability.

Some helpful resources are @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

### Responses

It is possible to capture the responses of Asynchronous tasks.

Zappa uses DynamoDB as the backend for these.

To capture responses, you must configure a `async_response_table` in `zappa_settings`. This is the DynamoDB table name. Then, when decorating with `@task`, pass `capture_response=True`.

Async responses are assigned a `response_id`. This is returned as a property of the `LambdaAsyncResponse` (or `SnsAsyncResponse`) object that is returned by the `@task` decorator.

Example:

@abstr_code_section 

## Advanced Settings

There are other settings that you can define in your local settings to change Zappa's behavior. Use these at your own risk!

@abstr_code_section 

#### YAML Settings

If you prefer YAML over JSON, you can also use a `zappa_settings.yml`, like so:

@abstr_code_section 

You can also supply a custom settings file at any time with the `-s` argument, ex:

@abstr_code_section 

Similarly, you can supply a `zappa_settings.toml` file:

@abstr_code_section 

## Advanced Usage

### Keeping The Server Warm

Zappa will automatically set up a regularly occurring execution of your application in order to keep the Lambda function warm. This can be disabled via the `keep_warm` setting.

#### Serving Static Files / Binary Uploads

Zappa is now able to serve and receive binary files, as detected by their MIME-type.

However, generally Zappa is designed for running your application code, not for serving static web assets. If you plan on serving custom static assets in your web application (CSS/JavaScript/images/etc.,), you'll likely want to use a combination of AWS S @abstr_number and AWS CloudFront.

Your web application framework will likely be able to handle this for you automatically. For Flask, there is @abstr_hyperlink , and for Django, there is @abstr_hyperlink .

Similarly, you may want to design your application so that static binary uploads go @abstr_hyperlink , which then triggers an event response defined in your `events` setting! That's thinking serverlessly!

### Enabling CORS

The simplest way to enable CORS (Cross-Origin Resource Sharing) for your Zappa application is to set `cors` to `true` in your Zappa settings file and update, which is the equivalent of pushing the "Enable CORS" button in the AWS API Gateway console. This is disabled by default, but you may wish to enable it for APIs which are accessed from other domains, etc.

You can also simply handle CORS directly in your application. Your web framework will probably have an extension to do this, such as @abstr_hyperlink or @abstr_hyperlink . Using these will make your code more portable.

### Large Projects

AWS currently limits Lambda zip sizes to @abstr_number megabytes. If your project is larger than that, set `slim_handler: true` in your `zappa_settings.json`. In this case, your fat application package will be replaced with a small handler-only package. The handler file then pulls the rest of the large project down from S @abstr_number at run time! The initial load of the large project may add to startup overhead, but the difference should be minimal on a warm lambda function. Note that this will also eat into the storage space of your application function. Note that AWS currently @abstr_hyperlink the `/tmp` directory storage to @abstr_number MB, so your project must still be smaller than that.

### Enabling Bash Completion

Bash completion can be enabled by adding the following to your .bashrc:

@abstr_code_section 

`register-python-argcomplete` is provided by the argcomplete Python package. If this package was installed in a virtualenv then the command must be run there. Alternatively you can execute:

activate-global-python-argcomplete --dest=- > file

The file's contents should then be sourced in e.g. ~/.bashrc.

### Enabling Secure Endpoints on API Gateway

#### API Key

You can use the `api_key_required` setting to generate an API key to all the routes of your API Gateway. The process is as follows: @abstr_number . Deploy/redeploy (update won't work) and write down the _id_ for the key that has been created @abstr_number . Go to AWS console  > Amazon API Gateway and * select "API Keys" and find the key _value_ (for example `key_value`) * select "Usage Plans", create a new usage plan and link the API Key and the API that Zappa has created for you @abstr_number . Send a request where you pass the key value as a header called `x-api-key` to access the restricted endpoints (for example with curl: `curl --header "x-api-key: key_value"`). Note that without the x-api-key header, you will receive a @abstr_number .

#### IAM Policy

You can enable IAM-based (v @abstr_number signing) authorization on an API by setting the `iam_authorization` setting to `true`. Your API will then require signed requests and access can be controlled via @abstr_hyperlink . Unsigned requests will receive a @abstr_number response, as will requesters who are not authorized to access the API. Enabling this will override the Authorizer configuration (see below).

#### API Gateway Lambda Authorizers

If you deploy an API endpoint with Zappa, you can take advantage of @abstr_hyperlink to implement a token-based authentication - all you need to do is to provide a function to create the required output, Zappa takes care of the rest. A good start for the function is the @abstr_hyperlink .

If you are wondering for what you would use an Authorizer, here are some potential use cases:

@abstr_number . Call out to OAuth provider @abstr_number . Decode a JWT token inline @abstr_number . Lookup in a self-managed DB (for example DynamoDB)

Zappa can be configured to call a function inside your code to do the authorization, or to call some other existing lambda function (which lets you share the authorizer between multiple lambdas). You control the behavior by specifying either the `arn` or `function_name` values in the `authorizer` settings block.

For example, to get the Cognito identity, add this to a `zappa_settings.yaml`:

@abstr_code_section 

Which can now be accessed in Flask like this:

@abstr_code_section 

#### Cognito User Pool Authorizer

You can also use AWS Cognito User Pool Authorizer by adding:

@abstr_code_section 

#### API Gateway Resource Policy

You can also use API Gateway Resource Policies. Example of IP Whitelisting:

@abstr_code_section 

### Setting Environment Variables

#### Local Environment Variables

If you want to set local environment variables for a deployment stage, you can simply set them in your `zappa_settings.json`:

@abstr_code_section 

You can then access these inside your application with:

@abstr_code_section 

If your project needs to be aware of the type of environment you're deployed to, you'll also be able to get `SERVERTYPE` (AWS Lambda), `FRAMEWORK` (Zappa), `PROJECT` (your project name) and `STAGE` (_dev_, _production_, etc.) variables at any time.

#### Remote AWS Environment Variables

If you want to use native AWS Lambda environment variables you can use the `aws_environment_variables` configuration setting. These are useful as you can easily change them via the AWS Lambda console or cli at runtime. They are also useful for storing sensitive credentials and to take advantage of KMS encryption of environment variables.

During development, you can add your Zappa defined variables to your locally running app by, for example, using the below (for Django, to manage.py).

@abstr_code_section 

#### Remote Environment Variables

Any environment variables that you have set outside of Zappa (via AWS Lambda console or cli) will remain as they are when running `update`, unless they are also in `aws_environment_variables`, in which case the remote value will be overwritten by the one in the settings file. If you are using KMS-encrypted AWS environment variables, you can set your KMS Key ARN in the `aws_kms_key_arn` setting. Make sure that the values you set are encrypted in such case.

_Note: if you rely on these as well as `environment_variables`, and you have the same key names, then those in `environment_variables` will take precedence as they are injected in the lambda handler._

#### Remote Environment Variables (via an S @abstr_number file)

_S @abstr_number remote environment variables were added to Zappa before AWS introduced native environment variables for Lambda (via the console and cli). Before going down this route check if above make more sense for your usecase._

If you want to use remote environment variables to configure your application (which is especially useful for things like sensitive credentials), you can create a file and place it in an S @abstr_number bucket to which your Zappa application has access. To do this, add the `remote_env` key to zappa_settings pointing to a file containing a flat JSON object, so that each key-value pair on the object will be set as an environment variable and value whenever a new lambda instance spins up.

For example, to ensure your application has access to the database credentials without storing them in your version control, you can add a file to S @abstr_number with the connection string and load it into the lambda environment using the `remote_env` configuration setting.

super-secret-config.json (uploaded to my-config-bucket): @abstr_code_section 

zappa_settings.json: @abstr_code_section 

Now in your application you can use: @abstr_code_section 

### API Gateway Context Variables

If you want to map an API Gateway context variable (http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html) to an HTTP header you can set up the mapping in `zappa_settings.json`:

@abstr_code_section 

For example, if you want to expose the $context.identity.cognitoIdentityId variable as the HTTP header CognitoIdentityId, and $context.stage as APIStage, you would have:

@abstr_code_section 

### Catching Unhandled Exceptions

By default, if an _unhandled_ exception happens in your code, Zappa will just print the stacktrace into a CloudWatch log. If you wish to use an external reporting tool to take note of those exceptions, you can use the `exception_handler` configuration option.

zappa_settings.json: @abstr_code_section 

The function has to accept three arguments: exception, event, and context:

your_module.py @abstr_code_section You may still need a similar exception handler inside your application, this is just a way to catch exception which happen at the Zappa/WSGI layer (typically event-based invocations, misconfigured settings, bad Lambda packages, and permissions issues).

By default, AWS Lambda will attempt to retry an event based (non-API Gateway, e.g. CloudWatch) invocation if an exception has been thrown. However, you can prevent this by returning True, as in example above, so Zappa that will not re-raise the uncaught exception, thus preventing AWS Lambda from retrying the current invocation.

### Using Custom AWS IAM Roles and Policies

#### Custom AWS IAM Roles and Policies for Deployment

You can specify which _local_ profile to use for deploying your Zappa application by defining the `profile_name` setting, which will correspond to a profile in your AWS credentials file.

#### Custom AWS IAM Roles and Policies for Execution

The default IAM policy created by Zappa for executing the Lambda is very permissive. It grants access to all actions for all resources for types CloudWatch, S @abstr_number , Kinesis, SNS, SQS, DynamoDB, and Route @abstr_number ; lambda:InvokeFunction for all Lambda resources; Put to all X-Ray resources; and all Network Interface operations to all EC @abstr_number resources. While this allows most Lambdas to work correctly with no extra permissions, it is generally not an acceptable set of permissions for most continuous integration pipelines or production deployments. Instead, you will probably want to manually manage your IAM policies.

To manually define the policy of your Lambda execution role, you must set _manage_roles_ to false and define either the _role_name_ or _role_arn_ in your Zappa settings file.

@abstr_code_section 

Ongoing discussion about the minimum policy requirements necessary for a Zappa deployment @abstr_hyperlink . A more robust solution to managing these entitlements will likely be implemented soon.

To add permissions to the default Zappa execution policy, use the `extra_permissions` setting:

@abstr_code_section 

### AWS X-Ray

Zappa can enable @abstr_hyperlink support on your function with a configuration setting:

@abstr_code_section 

This will enable it on the Lambda function and allow you to instrument your code with X-Ray. For example, with Flask:

@abstr_code_section 

You may use the capture decorator to create subsegments around functions, or `xray_recorder.begin_subsegment('subsegment_name')` and `xray_recorder.end_subsegment()` within a function. The official @abstr_hyperlink has more information on how to use this with your code.

Note that you may create subsegments in your code but an exception will be raised if you try to create a segment, as it is @abstr_hyperlink . This also means that if you use Flask you must not use the @abstr_hyperlink .

### Globally Available Server-less Architectures

@abstr_hyperlink 

_Click to see @abstr_hyperlink !_

During the `init` process, you will be given the option to deploy your application "globally." This will allow you to deploy your application to all available AWS regions simultaneously in order to provide a consistent global speed, increased redundancy, data isolation, and legal compliance. You can also choose to deploy only to "primary" locations, the AWS regions with `- @abstr_number` in their names.

To learn more about these capabilities, see @abstr_hyperlink from ServerlessConf London.

### Raising AWS Service Limits

Out of the box, AWS sets a limit of @abstr_hyperlink for your functions. If you start to breach these limits, you may start to see errors like `ClientError: An error occurred (LimitExceededException) when calling the PutTargets.."` or something similar.

To avoid this, you can file a @abstr_hyperlink with Amazon to raise your limits up to the many tens of thousands of concurrent executions which you may need. This is a fairly common practice with Amazon, designed to prevent you from accidentally creating extremely expensive bug reports. So, before raising your service limits, make sure that you don't have any rogue scripts which could accidentally create tens of thousands of parallel executions that you don't want to pay for.

### Using Zappa With Docker

If Docker is part of your team's CI, testing, or deployments, you may want to check out @abstr_hyperlink on using Zappa with Docker.

### Dead Letter Queues

If you want to utilise @abstr_hyperlink simply add the key `dead_letter_arn`, with the value being the complete ARN to the corresponding SNS topic or SQS queue in your `zappa_settings.json`.

You must have already created the corresponding SNS/SQS topic/queue, and the Lambda function execution role must have been provisioned with read/publish/sendMessage access to the DLQ resource.

### Unique Package ID

For monitoring of different deployments, a unique UUID for each package is available in `package_info.json` in the root directory of your application's package. You can use this information or a hash of this file for such things as tracking errors across different deployments, monitoring status of deployments and other such things on services such as Sentry and New Relic. The package will contain:

@abstr_code_section 

### Application Load Balancer Event Source

Zappa can be used to handle events triggered by Application Load Balancers (ALB). This can be useful in a few circumstances: \- Since API Gateway has a hard limit of @abstr_number seconds before timing out, you can use an ALB for longer running requests. \- API Gateway is billed per-request; therefore, costs can become excessive with high throughput services. ALBs pricing model makes much more sense financially if you're expecting a lot of traffic to your Lambda. \- ALBs can be placed within a VPC, which may make more sense for private endpoints than using API Gateway's private model (using AWS PrivateLink).

Like API Gateway, Zappa can automatically provision ALB resources for you. You'll need to add the following to your `zappa_settings`: @abstr_code_section json { "dev": { ... "endpoint_configuration": ["PRIVATE"], "apigateway_policy": "apigateway_resource_policy.json", ... }, ... } @abstr_code_section json { "Version": " @abstr_number - @abstr_number - @abstr_number ", "Statement": [ { "Effect": "Deny", "Principal": " _", "Action": "execute-api:Invoke", "Resource": "execute-api:/_ ", "Condition": { "StringNotEquals": { "aws:sourceVpc": "{{vpcID}}" // UPDATE ME } } }, { "Effect": "Allow", "Principal": " _", "Action": "execute-api:Invoke", "Resource": "execute-api:/_ " } ] } ```

## Zappa Guides

  * @abstr_hyperlink .
  * @abstr_hyperlink .
  * @abstr_hyperlink .
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * _Your guide here?_



## Zappa in the Press

  * _ @abstr_hyperlink _
  * _ @abstr_hyperlink _
  * _ @abstr_hyperlink _
  * @abstr_hyperlink 



## Sites Using Zappa

  * @abstr_hyperlink - A simple Zappa homepage
  * @abstr_hyperlink - The official Zappa blog!
  * @abstr_hyperlink - A microservice for adding people to a mailing list via API.
  * @abstr_hyperlink - A tiny, server-less service for inviting new users to your Slack channel.
  * @abstr_hyperlink - A thumbnailing service with Flask, Zappa and Pillow.
  * @abstr_hyperlink - An experimental server-less BitTorrent tracker. Work in progress.
  * @abstr_hyperlink - A server-less Yahoo! Pipes replacement.
  * @abstr_hyperlink - A server-less endpoint for processing a contact form.
  * @abstr_hyperlink - Official backup to to the Virginia Department of Elections portal.
  * @abstr_hyperlink - A simple and awesome say for groups to make decisions.
  * @abstr_hyperlink - A Zappa-powered paste bin.
  * And many more, including banks, governments, startups, enterprises and schools!



Are you using Zappa? Let us know and we'll list your site here!

## Related Projects

  * @abstr_hyperlink - Precompiled C-extension packages for AWS Lambda. Used automatically by Zappa.
  * @abstr_hyperlink - AWS Lambda Infection Toolkit
  * @abstr_hyperlink - A simple, server-less, Pythonic object store based on S @abstr_number .
  * @abstr_hyperlink - A tiny server-less CMS for busy hackers. Work in progress.
  * @abstr_hyperlink - Utility commands to help Django deployments.
  * @abstr_hyperlink - A framework for building Amazon Alexa applications. Uses Zappa for deployments.
  * @abstr_hyperlink - A Django plugin for supporting binary file uploads in Django on Zappa.
  * @abstr_hyperlink - Utilities for teams and continuous integrations using Zappa.
  * @abstr_hyperlink - A `cookiecutter` Django project with Zappa and S @abstr_number uploads support.
  * @abstr_hyperlink - Flask, Django, image uploads, and more!
  * @abstr_hyperlink - Example of a Hug application using Zappa.
  * @abstr_hyperlink - A Docker image for running Zappa locally, based on Lambda Docker.
  * @abstr_hyperlink - Monitor your AWS environment (health/metrics) with Zappa and CloudWatch.
  * @abstr_hyperlink - Manipulate a remote Zappa environment variable key/value JSON object file in an S @abstr_number bucket through the CLI.
  * @abstr_hyperlink - Resize images on the fly using Flask, Zappa, Pillow, and OpenCV-python.
  * @abstr_hyperlink - Run ffmpeg inside a lambda for serverless transformations.
  * @abstr_hyperlink - pass json data to a csv file for end users who use Gdrive across the organization.
  * @abstr_hyperlink - Repeat TravisCI builds to avoid stale test results.
  * @abstr_hyperlink - An Alexa skill for adding to a Wunderlist.
  * @abstr_hyperlink - Utilities and wrappers for using AWS X-Ray with Zappa.
  * @abstr_hyperlink - Terraform modules for creating a VPC, RDS instance, ElastiCache Redis and CloudFront Distribution for use with Zappa.
  * @abstr_hyperlink - Integration with Zappa and Sentry
  * @abstr_hyperlink - Monitor, profile and analyze your Zappa apps.



## Hacks

Zappa goes quite far beyond what Lambda and API Gateway were ever intended to handle. As a result, there are quite a few hacks in here that allow it to work. Some of those include, but aren't limited to..

  * Using VTL to map body, headers, method, params and query strings into JSON, and then turning that into valid WSGI.
  * Attaching response codes to response bodies, Base @abstr_number encoding the whole thing, using that as a regex to route the response code, decoding the body in VTL, and mapping the response body to that.
  * Packing and _Base @abstr_number _ encoding multiple cookies into a single cookie because we can only map one kind.
  * Forcing the case permutations of "Set-Cookie" in order to return multiple headers at the same time.
  * Turning cookie-setting @abstr_number / @abstr_number responses into @abstr_number responses with HTML redirects, because we have no way to set headers on redirects.



## Contributing

This project is still young, so there is still plenty to be done. Contributions are more than welcome!

Please file tickets for discussion before submitting patches. Pull requests should target `master` and should leave Zappa in a "shippable" state if merged.

If you are adding a non-trivial amount of new code, please include a functioning test in your PR. For AWS calls, we use the `placebo` library, which you can learn to use @abstr_hyperlink . The test suite will be run by @abstr_hyperlink once you open a pull request.

Please include the GitHub issue or pull request URL that has discussion related to your changes as a comment in the code ( @abstr_hyperlink ). This greatly helps for project maintainability, as it allows us to trace back use cases and explain decision making. Similarly, please make sure that you meet all of the requirements listed in the @abstr_hyperlink .

Please feel free to work on any open ticket, especially any ticket marked with the "help-wanted" label. If you get stuck or want to discuss an issue further, please join @abstr_hyperlink , where you'll find a community of smart and interesting people working dilligently on hard problems.

Zappa does not intend to conform to PEP @abstr_number , isolate your commits so that changes to functionality with changes made by your linter.

#### Using a Local Repo

To use the git HEAD, you _probably can't_ use `pip install -e`. Instead, you should clone the repo to your machine and then `pip install /path/to/zappa/repo` or `ln -s /path/to/zappa/repo/zappa zappa` in your local project.

## Patrons

If you or your company uses **Zappa** , please consider giving what you can to support the ongoing development of the project!

You can become a patron by **@abstr_hyperlink**.

Zappa is currently supported by these awesome individuals and companies:

  * Nathan Lawrence
  * LaunchLab
  * Sean Paley
  * Theo Chitayat
  * George Sibble
  * Joe Weiss
  * Nik Bora
  * Zerong Toby Wang
  * Gareth E
  * Matt Jackson
  * Sean Coates
  * Alexander Loschilov
  * Korey Peters
  * Joe Weiss
  * Kimmo Parvianen-Jalanko
  * Patrick Agin
  * Roberto Martinez
  * Charles Dimino
  * Doug Beney
  * Dan "The Man" Gayle
  * Juancito
  * Will Childs-Klein
  * Efi Merdler Kravitz
  * **Philippe Trounev**



Thank you very, very much!

## Merch

  


@abstr_hyperlink 

## Support / Development / Training / Consulting

Do you need help with..

  * Porting existing Flask and Django applications to Zappa?
  * Building new applications and services that scale infinitely?
  * Reducing your operations and hosting costs?
  * Adding new custom features into Zappa?
  * Training your team to use AWS and other server-less paradigms?



Good news! We're currently available for remote and on-site consulting for small, large and enterprise teams. Please contact @abstr_hyperlink with your needs and let's work together!

  


@abstr_hyperlink 
