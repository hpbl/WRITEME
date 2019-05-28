# ChineseLevel API

The ChineseLevel API is a Go server that provides several Chinese-related functions in one convenient RESTful JSON API.

## Quickstart

@abstr_code_section 

## Endpoints

### /split [GET/POST]

Takes a Chinese string and returns a tokenized array built out of the words in the string.

  * Parameters: 
    * text [string]



##### Example:

Request: @abstr_code_section 

Response: @abstr_code_section 

* * *

### /words [GET/POST]

Takes a Chinese string and returns a tokenized array built out of the words in the string (like /split), together with extra information, like each individual word's rank. The returned rank is - @abstr_number if the word was not found.

  * Parameters: 
    * text [string]



##### Example:

Request: @abstr_code_section 

Response: @abstr_code_section 

* * *

### /rank [GET/POST]

##### Parameters:

  * Parameters: 
    * text [string]



##### Example:

* * *

### /analyze [GET/POST]

##### Parameters:

  * Parameters: 
    * text [string]



##### Example:

Request: @abstr_code_section 

Response: @abstr_code_section 

## Installation

The easiest way to get ChineseLevel running is using Docker. But first we need a working installation of Ubuntu @abstr_number . @abstr_number . Start by installing Virtualbox and Vagrant (if you have Ubuntu @abstr_number . @abstr_number running already, you don't need to install VirtualBox and Vagrant, but you might still want to). Follow these instructions for your OS:

@abstr_number . Install @abstr_hyperlink @abstr_number . Install @abstr_hyperlink 

With these installed, we can create a new Ubuntu box and install Docker in it:

@abstr_code_section 

Great! Hopefully it's all working. Now it's time to install ChineseLevel specific packages. First, pull down the Redis Docker image:

@abstr_code_section 
