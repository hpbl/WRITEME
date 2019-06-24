RQ (_Redis Queue_) is a simple Python library for queueing jobs and processing them in the background with workers. It is backed by Redis and it is designed to have a low barrier to entry. It should be integrated in your web stack easily.

RQ requires Redis >= @abstr_number . @abstr_number . @abstr_number .

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Full documentation can be found @abstr_hyperlink .

## Support RQ

If you find RQ useful, please consider supporting this project via @abstr_hyperlink .

## Getting started

First, run a Redis server, of course:

@abstr_code_section 

To put jobs on queues, you don't have to do anything special, just define your typically lengthy or blocking function:

@abstr_code_section 

You do use the excellent @abstr_hyperlink package, don't you?

Then, create an RQ queue:

@abstr_code_section 

And enqueue the function call:

@abstr_code_section 

For a more complete example, refer to the @abstr_hyperlink . But this is the essence.

### The worker

To start executing enqueued function calls in the background, start a worker from your project's directory:

@abstr_code_section 

That's about it.

## Installation

Simply use the following command to install the latest released version:
    
    
    pip install rq
    

If you want the cutting edge version (that may well be broken), use this:
    
    
    pip install -e git+https://github.com/nvie/rq.git@master#egg=rq
    

## Project history

This project has been inspired by the good parts of @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink , and has been created as a lightweight alternative to the heaviness of Celery or other AMQP-based queueing implementations.
