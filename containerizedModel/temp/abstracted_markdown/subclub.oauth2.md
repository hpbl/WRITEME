# OAuth @abstr_number

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

A Ruby wrapper for the OAuth @abstr_number . @abstr_number specification.

## Installation
    
    
    gem install oauth @abstr_number
    

## Resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Usage Examples

@abstr_code_section 

## OAuth @abstr_number ::Response

The AccessToken methods #get, #post, #put and #delete and the generic #request will return an instance of the #OAuth @abstr_number ::Response class.

This instance contains a #parsed method that will parse the response body and return a Hash if the Content-Type is application/x-www-form-urlencoded or if the body is a JSON object. It will return an Array if the body is a JSON array. Otherwise, it will return the original body string.

The original response body, headers, and status can be accessed via their respective methods.

## OAuth @abstr_number ::AccessToken

If you have an existing Access Token for a user, you can initialize an instance using various class methods including the standard new, from_hash (if you have a hash of the values), or from_kvform (if you have an application/x-www-form-urlencoded encoded string of the values).

## OAuth @abstr_number ::Error

On @abstr_number + status code responses, an OAuth @abstr_number ::Error will be raised. If it is a standard OAuth @abstr_number error response, the body will be parsed and #code and #description will contain the values provided from the error and error_description parameters. The #response property of OAuth @abstr_number ::Error will always contain the OAuth @abstr_number ::Response instance.

If you do not want an error to be raised, you may use :raise_errors => false option on initialization of the client. In this case the OAuth @abstr_number ::Response instance will be returned as usual and on @abstr_number + status code responses, the Response instance will contain the OAuth @abstr_number ::Error instance.

## Authorization Grants

Currently the Authorization Code, Implicit, Resource Owner Password Credentials, Client Credentials, and Assertion authentication grant types have helper strategy classes that simplify client use. They are available via the #auth_code, #implicit, #password, #client_credentials, and #assertion methods respectively.

@abstr_code_section 

If you want to specify additional headers to be sent out with the request, add a 'headers' hash under 'params':

@abstr_code_section 

You can always use the #request method on the OAuth @abstr_number ::Client instance to make requests for tokens for any Authentication grant type.

## Supported Ruby Versions

This library aims to support and is @abstr_hyperlink the following Ruby implementations:

  * Ruby @abstr_number . @abstr_number . @abstr_number 
  * Ruby @abstr_number . @abstr_number . @abstr_number 
  * Ruby @abstr_number . @abstr_number . @abstr_number 
  * Ruby @abstr_number . @abstr_number . @abstr_number 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



If something doesn't work on one of these interpreters, it's a bug.

This library may inadvertently work (or seem to work) on other Ruby implementations, however support will only be provided for the versions listed above.

If you would like this library to support another Ruby version, you may volunteer to be a maintainer. Being a maintainer entails making sure all tests run and pass on that implementation. When something breaks on your implementation, you will be responsible for providing patches in a timely fashion. If critical issues for a particular implementation exist at the time of a major release, support for that Ruby version may be dropped.

## License

Copyright (c) @abstr_number - @abstr_number Michael Bleigh and Intridea, Inc. See LICENSE for details.
