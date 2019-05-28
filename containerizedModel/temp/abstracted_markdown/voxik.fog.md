@abstr_image 

fog is the Ruby cloud services library, top to bottom:

  * Collections provide a simplified interface, making clouds easier to work with and switch between.
  * Requests allow power users to get the most out of the features of each individual cloud.
  * Mocks make testing and integrating a breeze.



@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Dependency Notice

Currently all fog providers are getting separated into metagems to lower the load time and dependency count.

If there's a metagem available for your cloud provider, e.g. `fog-aws`, you should be using it instead of requiring the full fog collection to avoid unnecessary dependencies.

'fog' should be required explicitly only if:   
\- The provider you use doesn't yet have a metagem available. \- You require Ruby @abstr_number . @abstr_number . @abstr_number support.

## Getting Started

The easiest way to learn fog is to install the gem and use the interactive console. Here is an example of wading through server creation for Amazon Elastic Compute Cloud:

@abstr_code_section 

## Ruby version

Fog requires Ruby `@abstr_number . @abstr_number . @abstr_number` or later.

Ruby `@abstr_number . @abstr_number` and `@abstr_number . @abstr_number` support was dropped in `fog-v @abstr_number . @abstr_number . @abstr_number` as a backwards incompatible change. Please use the later fog `@abstr_number .x` versions if you require `@abstr_number . @abstr_number . @abstr_number` or `@abstr_number . @abstr_number .x` support.

## Collections

A high level interface to each cloud is provided through collections, such as `images` and `servers`. You can see a list of available collections by calling `collections` on the connection object. You can try it out using the `fog` command:
    
    
    >> Compute[:aws].collections
    [:addresses, :directories, ..., :volumes, :zones]
    

Some collections are available across multiple providers:

  * compute providers have `flavors`, `images` and `servers`
  * dns providers have `zones` and `records`
  * storage providers have `directories` and `files`



Collections share basic CRUD type operations, such as:

  * `all` \- fetch every object of that type from the provider.
  * `create` \- initialize a new record locally and a remote resource with the provider.
  * `get` \- fetch a single object by its identity from the provider.
  * `new` \- initialize a new record locally, but do not create a remote resource with the provider.



As an example, we'll try initializing and persisting a Rackspace Cloud server:

@abstr_code_section 

## Models

Many of the collection methods return individual objects, which also provide common methods:

  * `destroy` \- will destroy the persisted object from the provider
  * `save` \- persist the object to the provider
  * `wait_for` \- takes a block and waits for either the block to return true for the object or for a timeout (defaults to @abstr_number minutes)



## Mocks

As you might imagine, testing code using Fog can be slow and expensive, constantly turning on and shutting down instances. Mocking allows skipping this overhead by providing an in memory representation of resources as you make requests. Enabling mocking is easy to use: before you run other commands, simply run:

@abstr_code_section 

Then proceed as usual, if you run into unimplemented mocks, fog will raise an error and as always contributions are welcome!

## Requests

Requests allow you to dive deeper when the models just can't cut it. You can see a list of available requests by calling `#requests` on the connection object.

For instance, ec @abstr_number provides methods related to reserved instances that don't have any models (yet). Here is how you can lookup your reserved instances:
    
    
    $ fog
    >> Compute[:aws].describe_reserved_instances
    #<Excon::Response [...]>
    

It will return an @abstr_hyperlink response, which has `body`, `headers` and `status`. Both return nice hashes.

## Go forth and conquer

Play around and use the console to explore or check out @abstr_hyperlink and the @abstr_hyperlink for more details and examples. Once you are ready to start scripting fog, here is a quick hint on how to make connections without the command line thing to help you.

@abstr_code_section 

geemus says: "That should give you everything you need to get started, but let me know if there is anything I can do to help!"

## Versioning

Fog library aims to adhere to @abstr_hyperlink , although it does not address challenges of multi-provider libraries. Semantic versioning is only guaranteed for the common API, not any provider-specific extensions. You may also need to update your configuration from time to time (even between Fog releases) as providers update or deprecate services.

However, we still aim for forwards compatibility within Fog major versions. As a result of this policy, you can (and should) specify a dependency on this gem using the @abstr_hyperlink with two digits of precision. For example:

@abstr_code_section 

This means your project is compatible with Fog @abstr_number . @abstr_number up until @abstr_number . @abstr_number . You can also set a higher minimum version:

@abstr_code_section 

## Getting Help

  * @abstr_hyperlink .
  * @abstr_hyperlink .
  * Ask specific questions on @abstr_hyperlink 
  * Report bugs and discuss potential features in @abstr_hyperlink .



## Contributing

Please refer to @abstr_hyperlink .

## License

Please refer to @abstr_hyperlink .
