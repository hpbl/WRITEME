@abstr_image 

# Angular + Token Authentication

## Objectives

By the end of this, students should be able to:

  * Authenticate users on an AngularJS front end by consuming tokens delivered from a Rails API
  * Use `localStorage` for storing session information (as a JSON string)
  * Restrict access to any routes unless users are authorized



## Instructions

  * Fork/Clone
  * `$ npm install && bower install`
  * `$ grunt serve`



The API endpoints look like this:

@abstr_code_section 

We've seeded the db with two users:

@abstr_code_section 

To login a user, you must make a post request that looks like this: @abstr_code_section 

You will receive a response that looks like this:

@abstr_code_section 

We will manipulate this object and store it in the browser's localStorage so that we may use this data to authorize the current user. At this point, follow along and we will code this together.

## Bonus (Optional Section)

Implement some of the concepts in this article: @abstr_hyperlink .

You might think about displaying some user data on the screen (maybe as a dropdown in the navbar).

## Additional

Read this article: @abstr_hyperlink 
