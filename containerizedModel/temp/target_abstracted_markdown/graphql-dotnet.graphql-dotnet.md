# GraphQL for .NET

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

This is an implementation of @abstr_hyperlink in .NET.

This project uses a @abstr_hyperlink originally written by @abstr_hyperlink and released with a MIT license. Thank you Marek!

## Installation

You can install the latest version via @abstr_hyperlink .

@abstr_code_section 

Or you can get the latest pre-release packages from the @abstr_hyperlink .

## Documentation

http://graphql-dotnet.github.io

## Examples

https://github.com/graphql-dotnet/examples

## Training

  * @abstr_hyperlink - @abstr_hyperlink demonstrates how to use the GraphQL .NET framework to build a fully functional GraphQL endpoint.



## Upgrade Guides

  * @abstr_hyperlink 
  * @abstr_number . @abstr_number . @abstr_number 
  * @abstr_number . @abstr_number . @abstr_number 



## Basic Usage

Define your schema with a top level query object then execute that query.

Fully-featured examples can be found @abstr_hyperlink .

### Hello World

@abstr_code_section 

### Schema First Approach

This example uses the @abstr_hyperlink . See the @abstr_hyperlink for more examples and information.

@abstr_code_section 

### Parameters

@abstr_code_section 

## Roadmap

### Grammar / AST

  * Grammar and AST for the GraphQL language should be compatible with the @abstr_hyperlink .



### Operation Execution

  * [x] Scalars
  * [x] Objects
  * [x] Lists of objects/interfaces
  * [x] Interfaces
  * [x] Unions
  * [x] Arguments
  * [x] Variables
  * [x] Fragments
  * [x] Directives 
    * [x] Include
    * [x] Skip
    * [x] Custom
  * [x] Enumerations
  * [x] Input Objects
  * [x] Mutations
  * [x] Subscriptions
  * [x] Async execution



### Validation

  * [x] Arguments of correct type
  * [x] Default values of correct type
  * [x] Fields on correct type
  * [x] Fragments on composite types
  * [x] Known argument names
  * [x] Known directives
  * [x] Known fragment names
  * [x] Known type names
  * [x] Lone anonymous operations
  * [x] No fragment cycles
  * [x] No undefined variables
  * [x] No unused fragments
  * [x] No unused variables
  * [x] Overlapping fields can be merged
  * [x] Possible fragment spreads
  * [x] Provide non-null arguments
  * [x] Scalar leafs
  * [x] Unique argument names
  * [x] Unique directives per location
  * [x] Unique fragment names
  * [x] Unique input field names
  * [x] Unique operation names
  * [x] Unique variable names
  * [x] Variables are input types
  * [x] Variables in allowed position
  * [x] Single root field



### Schema Introspection

  * [x] __typename
  * [x] __type 
    * [x] name
    * [x] kind
    * [x] description
    * [x] fields
    * [x] interfaces
    * [x] possibleTypes
    * [x] enumValues
    * [x] inputFields
    * [x] ofType
  * [x] __schema 
    * [x] types
    * [x] queryType
    * [x] mutationType
    * [x] subscriptionType
    * [x] directives



### Publishing Nugets

@abstr_code_section 

### Running on OSX with mono

To run this project on OSX with mono you will need to add some configuration. Make sure mono is installed and add the following to your bash configuration:

@abstr_code_section 

See the following for more details:

  * @abstr_hyperlink 
  * @abstr_hyperlink 


