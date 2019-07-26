Repository for both **NEST** and **Elasticsearch.Net** , the two official @abstr_hyperlink .NET clients.

## Compatibility Matrix

**Elasticsearch ******| **Clients ******| **Supported ******| **Windows/Linux CI** | **Tests ******  
---|---|---|---|---  
` @abstr_number .x` | ` @abstr_number .x` |  :x: | :heavy_minus_sign: | :heavy_minus_sign:  
` @abstr_number .x` | ` @abstr_number .x` | :x: | :heavy_minus_sign: | :heavy_minus_sign:  
` @abstr_number .x` | ` @abstr_number .x` | :x: | :heavy_minus_sign: | :heavy_minus_sign:  
` @abstr_number .x` | ` @abstr_number .x` | :white_check_mark: |  @abstr_hyperlink  |  @abstr_hyperlink   
` @abstr_number .x` | ` @abstr_number .x` | :white_check_mark: |  @abstr_hyperlink  |  @abstr_hyperlink   
` @abstr_number .x` | ` @abstr_number .x` | :white_check_mark: |  @abstr_hyperlink  |  @abstr_hyperlink   
`master` | `master` | :x: |  @abstr_hyperlink  |  @abstr_hyperlink   
  
## Preview builds

All branches push new nuget packages on successful CI builds to https://ci.appveyor.com/nuget/elasticsearch-net

###  @abstr_hyperlink 

## Upgrading

Please consult the @abstr_hyperlink to understand what you should consider when upgrading from an older version of Elasticsearch to a newer one.

### Upgrading from @abstr_number .x to @abstr_number .x

Take a look at the @abstr_hyperlink , in addition to the list of breaking changes for @abstr_hyperlink and @abstr_hyperlink .

### Upgrading from @abstr_number .x to @abstr_number .x

Take a look at the @abstr_hyperlink , in addition to the list of breaking changes for @abstr_hyperlink and @abstr_hyperlink .

### Upgrading from @abstr_number .x to @abstr_number .x

Take a look at the @abstr_hyperlink , in addition to the list of breaking changes for @abstr_hyperlink and @abstr_hyperlink .

### Upgrading from @abstr_number .x to @abstr_number .x

Take a look at the @abstr_hyperlink . Please also see the @abstr_hyperlink .

#  @abstr_hyperlink 

NEST is the official high-level .NET client of @abstr_hyperlink . It aims to be a solid, strongly typed client with a very concise API.

  * High-level client that internally uses the low-level **Elasticsearch.Net** client
  * Maps requests and responses to strongly typed objects with both fluent interface and object initializer syntaxes to build them
  * Comes with a very powerful query DSL that maps one-to-one with Elasticsearch
  * Takes advantage of .NET features where they make sense (e.g. type and index inference, inferred mapping from POCO properties)
  * All calls have async variants with support for cancellation



## Getting Started

For a comprehensive, walkthrough-styled tutorial, check out the @abstr_hyperlink .

### Installing

From the package manager console:
    
    
    PM> Install-Package NEST
    

or by simply searching for `NEST` in the package manager UI.

### Connecting

You can connect to your Elasticsearch cluster via a single node, or by specifying multiple nodes using a connection pool. Using a connection pool has a few advantages over a single node connection, such as load balancing and cluster fail over support.

**Connecting to a single node**

@abstr_code_section 

**Using a connection pool**

@abstr_code_section 

### Indexing

Indexing a document is as simple as (with @abstr_number .x):

@abstr_code_section 

All the calls have async variants:

@abstr_code_section 

### Getting a document

@abstr_code_section 

### Searching for documents

NEST exposes a fluent interface and a @abstr_hyperlink 

@abstr_code_section 

As well as an object initializer syntax if lambdas aren't your thing:

@abstr_code_section 

### Falling back to Elasticsearch.Net

NEST also includes and exposes the low-level @abstr_hyperlink client that you can fall back to incase anything is missing:

@abstr_code_section 

####  @abstr_hyperlink 

# Elasticsearch.Net

A low-level, dependency free, client that has no opinions how you build and represent your requests and responses.

  * Low-level client that provides a one-to-one mapping with the Elasticsearch REST API
  * No dependencies
  * Almost completely generated from the official REST API spec which makes it easy to keep up to date
  * Comes with an integration test suite that can be generated from the YAML test definitions that the Elasticsearch core team uses to test their REST API
  * Has no opinions on how you create or consume requests and responses
  * Load balancing and cluster failover support
  * All calls have async variants



### Installing

From the package manager console:
    
    
    PM> Install-Package Elasticsearch.Net
    

or by searching for `Elasticsearch.Net` in the package manager UI.

### Connecting

Connecting using the low-level client is very similar to how you would connect using NEST. In fact, the connection constructs that NEST use are actually Elasticsearch.Net constructs. Thus, single node connections and connection pooling still apply when using Elasticsearch.Net.

@abstr_code_section 

Note the main difference here is that we are instantiating an `ElasticLowLevelClient` rather than `ElasticClient`, and `ConnectionConfiguration` instead of `ConnectionSettings`.

### Calling an API endpoint

Elasticsearch.Net is generated from the the @abstr_hyperlink , and thus maps to all Elasticsearch API endpoints.

@abstr_code_section 

will execute a `GET` to `/myindex/mytype/ @abstr_number /_source?routing=routingvalue`. All the methods and arguments are fully documented based on the documentation of the specification.

As you can see, Elasticsearch.Net also strongly types the query string parameters that it knows exist on an endpoint with full Intellisense documentation. However, unknown query string parameters can still be added:

@abstr_code_section 

The query string parameter is always optional.

### Providing a request body

You can specify a request body directly with a string:

@abstr_code_section 

This will execute a `POST` to `/myindex/mytype/ @abstr_number` with the provided string `myJson` passed verbatim as the request body.

Alternatively, you can specify an anonymous object:

@abstr_code_section This will execute the same request, but this time `myJson` will be serialized by the registered `IElasticsearchSerializer`.

####  @abstr_hyperlink 

## Contributing

@abstr_hyperlink and @abstr_hyperlink are very much welcomed and appreciated. If you'd like to report a bug or submit a feature/bug fix then please read our contributing guide first!

### Generating documentation from tests

@abstr_hyperlink is generated from code within the Tests project using @abstr_hyperlink ; multi-line comments serve as the main bodies of text, intermixed with code samples that test the documented components. The intention is to reduce the likelihood of documentation becoming outdated as the source changes. 

Text within multi-line comments conforms to @abstr_hyperlink , a lightweight markdown style text format well suited to technical documentation. To generate the asciidoc files from the test files, you need to run the DocGenerator console application which will output the documentation files in the docs output directory. To verify that the generated asciidoc files can generate the documentation for the website, @abstr_hyperlink and follow the instructions there for building documentation locally. as an example, suppose I have cloned the elastic docs to `c:\source\elastic-docs`, then to verify the generated asciidoc files for NEST are valid would be as following (using Cygwin on Windows)

@abstr_code_section 

the result of running this for a successful build will be

@abstr_code_section 

and a small HTTP server will be spun up locally on port @abstr_number through which you can view the documentation.

@abstr_hyperlink are most welcome for areas of documentation that need improving.

#### Many thanks to:

  * @abstr_hyperlink for supporting the development of NEST
  * @abstr_hyperlink for supplying @Mpdreamz with an ANTS Memory Profiler @abstr_number & ANTS Performance Profiler @abstr_number licenses
  * @abstr_hyperlink for supplying @Mpdreamz with a dotTrace profiler and Resharper license
  * @abstr_hyperlink for hosting the continuous integration for NEST
  * Everyone who has been awesome enough to contribute back to NEST (You're listed automatically on the @abstr_hyperlink )



## Copyright and License

This software is Copyright (c) @abstr_number - @abstr_number by Elasticsearch BV.

This is free software, licensed under: @abstr_hyperlink .
