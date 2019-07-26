Follow @abstr_hyperlink or join the @abstr_hyperlink for updates, or @abstr_hyperlink or the @abstr_hyperlink for support.

# C#/.NET Client for Redis

@abstr_hyperlink is a simple, high-performance and feature-rich C# Client for Redis with native support and @abstr_hyperlink for serializing POCOs and Complex Types.

There are a number of different APIs available with the `RedisClient` implementing the following interfaces:

  * @abstr_hyperlink - If you are using Redis solely as a cache, you should bind to the ServiceStack's common interface as there already are In-Memory an Memcached implementations available in ServiceStack, allowing you to easily switch providers
  * @abstr_hyperlink - For those wanting a low-level raw byte access (where you can control your own serialization/deserialization) that map @abstr_number : @abstr_number with Redis operations of the same name.



For most cases if you require access to Redis specific functionality you would want to bind to the interface below:

  * @abstr_hyperlink - Provides a friendlier, more descriptive API that lets you store values as strings (UTF @abstr_number encoding).
  * @abstr_hyperlink - created with `IRedisClient.As<T>()` \- it returns a 'strongly-typed client' that provides a typed-interface for all redis value operations that works against any C#/.NET POCO type.



The interfaces works cleanly with any IOC and allows your app logic to bind to implementation-free interfaces which can easily be mocked and substituted.

An overview of class hierarchy for the C# Redis clients looks like:
    
    
    RedisTypedClient (POCO) > RedisClient (string) > RedisNativeClient (raw byte[])
    

With each client providing different layers of abstraction:

  * The RedisNativeClient exposes raw `byte[]` apis and does no marshalling and passes all values directly to redis.
  * The RedisClient assumes `string` values and simply converts strings to UTF @abstr_number bytes before sending to Redis
  * The RedisTypedClient provides a generic interface allowing you to add POCO values. The POCO types are serialized using @abstr_hyperlink which is then converted to UTF @abstr_number bytes and sent to Redis.



### API Overview

@abstr_hyperlink 

## Redis Connection Strings

Redis Connection strings have been expanded to support the more versatile URI format which is now able to capture most of Redis Client settings in a single connection string (akin to DB Connection strings).

Redis Connection Strings supports multiple URI-like formats, from a simple **hostname** or **IP Address and port** pair to a fully-qualified **URI** with multiple options specified on the QueryString. 

Some examples of supported formats:
    
    
    localhost
     @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number 
    redis://localhost: @abstr_number 
    password@localhost: @abstr_number 
    clientid:password@localhost: @abstr_number 
    redis://clientid:password@localhost: @abstr_number ?ssl=true&db= @abstr_number
    

> More examples can be seen in @abstr_hyperlink 

Any additional configuration can be specified as QueryString parameters. The full list of options that can be specified include:

**Ssl** |  bool | If this is an SSL connection  
---|---|---  
**Db** |  int | The Redis DB this connection should be set to  
**Client** |  string | A text alias to specify for this connection for analytic purposes  
**Password** |  string | UrlEncoded version of the Password for this connection  
**ConnectTimeout** |  int | Timeout in ms for making a TCP Socket connection  
**SendTimeout** |  int | Timeout in ms for making a synchronous TCP Socket Send  
**ReceiveTimeout** |  int | Timeout in ms for waiting for a synchronous TCP Socket Receive  
**IdleTimeOutSecs** |  int | Timeout in Seconds for an Idle connection to be considered active  
**NamespacePrefix** |  string | Use a custom prefix for ServiceStack.Redis internal index colletions  
  
## Download
    
    
    PM> Install-Package ServiceStack.Redis
    

_Latest v @abstr_number + on NuGet is a @abstr_hyperlink with @abstr_hyperlink ._

####  @abstr_hyperlink 

ServiceStack.Redis has great support AWS's ElastiCache Redis solution, follow this guide to help getting up and running quickly:

  * @abstr_hyperlink 



### Try out @abstr_hyperlink 

A great way to try out ServiceStack.Redis is on @abstr_hyperlink which lets you immediately run and explore Redis features from the comfort of your browser with zero software install:

@abstr_hyperlink 

## Redis Client Managers

The recommended way to access `RedisClient` instances is to use one of the available Thread-Safe Client Managers below. Client Managers are connection factories which is ideally registered as a Singleton either in your IOC or static classes. 

### RedisManagerPool

With the enhanced Redis URI Connection Strings we've been able to simplify and streamline the existing `PooledRedisClientManager` implementation and have extracted it out into a new clients manager called `RedisManagerPool`. 

In addition to removing all above options on the Client Manager itself, readonly connection strings have also been removed so the configuration ends up much simpler and more aligned with the common use-case:

@abstr_code_section 

**Pooling Behavior**

Any connections required after the maximum Pool size has been reached will be created and disposed outside of the Pool. By not being restricted to a maximum pool size, the pooling behavior in `RedisManagerPool` can maintain a smaller connection pool size at the cost of potentially having a higher opened/closed connection count.

### PooledRedisClientManager

If you prefer to define options on the Client Manager itself or you want to provide separate Read/Write and ReadOnly (i.e. Master and Slave) redis-servers, use the `PooledRedisClientManager` instead:

@abstr_code_section 

**Pooling Behavior**

The `PooledRedisClientManager` imposes a maximum connection limit and when its maximum pool size has been reached will instead block on any new connection requests until the next `RedisClient` is released back into the pool. If no client became available within `PoolTimeout`, a Pool `TimeoutException` will be thrown.

### BasicRedisClientManager

If don't want to use connection pooling (i.e. your accessing a local redis-server instance) you can use a basic (non-pooled) Clients Manager which creates a new `RedisClient` instance each time:

@abstr_code_section 

### Accessing the Redis Client

Once registered, accessing the RedisClient is the same in all Client Managers, e.g:

@abstr_code_section 

A more detailed list of the available RedisClient APIs used in the example can be seen in the C# interfaces below:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



##  @abstr_hyperlink 

Redis React is a simple user-friendly UI for browsing data in Redis servers which takes advantages of the complex type conventions built in the ServiceStack.Redis Client to provide a rich, human-friendly UI for navigating related datasets, enabling a fast and fluid browsing experience for your Redis servers.

####  @abstr_hyperlink 

@abstr_hyperlink 

#### Downloads available from @abstr_hyperlink 

##  @abstr_hyperlink 

To use the new Sentinel support, instead of populating the Redis Client Managers with the connection string of the master and slave instances you would create a single RedisSentinel instance configured with the connection string of the running Redis Sentinels:

@abstr_code_section 

This configues a `RedisSentinel` with @abstr_number sentinel hosts looking at **mymaster** group. As the default port for sentinels when unspecified is _* @abstr_number *_ and how RedisSentinel is able to auto-discover other sentinels, the minimum configuration required is with a single Sentinel host:

@abstr_code_section 

### Custom Redis Connection String

The host the RedisSentinel is configured with only applies to that Sentinel Host, to use the flexibility of Redis Connection Strings to apply configuration on individual Redis Clients you need to register a custom `HostFilter`:

@abstr_code_section 

An alternative to using connection strings for configuring clients is to modify @abstr_hyperlink .

### Change to use RedisManagerPool

By default RedisSentinel uses a `PooledRedisClientManager`, this can be changed to use the newer `RedisManagerPool` with:

@abstr_code_section 

### Start monitoring Sentinels

Once configured, you can start monitoring the Redis Sentinel servers and access the pre-configured client manager with:

@abstr_code_section 

Which as before, can be registered in your preferred IOC as a **singleton** instance:

@abstr_code_section 

##  @abstr_hyperlink 

@abstr_hyperlink 

See the @abstr_hyperlink for a quick way to setup up the minimal @abstr_hyperlink including start/stop scripts for instantly running multiple redis instances on a single (or multiple) Windows, OSX or Linux servers. 

###  @abstr_hyperlink 

You can use the `RedisStats` class for visibility and introspection into your running instances. The @abstr_hyperlink lists the stats available.

##  @abstr_hyperlink 

To improve the resilience of client connections, `RedisClient` will transparently retry failed Redis operations due to Socket and I/O Exceptions in an exponential backoff starting from _* @abstr_number ms_ * up until the `RetryTimeout` of _* @abstr_number ms_ *. These defaults can be tweaked with:

@abstr_code_section 

##  @abstr_hyperlink 

ServiceStack.Redis now supporting **SSL connections** making it suitable for accessing remote Redis server instances over a **secure SSL connection**.

@abstr_image 

###  @abstr_hyperlink 

As connecting to @abstr_hyperlink via SSL was the primary use-case for this feature, we've added a new @abstr_hyperlink to help you get started.

##  @abstr_hyperlink 

The @abstr_hyperlink brings it exciting new @abstr_hyperlink which will let you store Lat/Long coordinates in Redis and query locations within a specified radius. To demonstrate this functionality we've created a new @abstr_hyperlink which lets you click on anywhere in the U.S. to find the list of nearest cities within a given radius, Live Demo at: http://redisgeo.servicestack.net

## Generic APIs for calling Custom Redis commands

Most of the time when waiting to use a new @abstr_hyperlink you'll need to wait for an updated version of **ServiceStack.Redis** to add support for the new commands likewise there are times when the Redis Client doesn't offer every permutation that redis-server supports. 

With the new `Custom` and `RawCommand` APIs on `IRedisClient` and `IRedisNativeClient` you can now use the RedisClient to send your own custom commands that can call adhoc Redis commands:

@abstr_code_section 

These Custom APIs take a flexible `object[]` arguments which accepts any serializable value e.g. `byte[]`, `string`, `int` as well as any user-defined Complex Types which are transparently serialized as JSON and send across the wire as UTF- @abstr_number bytes. 

@abstr_code_section 

There are also @abstr_hyperlink on `RedisData` and `RedisText` that make it easy to access structured data, e.g:

@abstr_code_section 

and some more examples using Complex Types with the Custom APIs:

@abstr_code_section 

This API is used in most of Redis React UI's @abstr_hyperlink JavaScript client library where Redis server commands are made available via the @abstr_hyperlink :

@abstr_code_section 

## Managed Pub/Sub Server

The Pub/Sub engine powering @abstr_hyperlink and @abstr_hyperlink has been extracted and encapsulated it into a re-usable class that can be used independently for handling messages published to specific @abstr_hyperlink channels. 

`RedisPubSubServer` processes messages in a managed background thread that **automatically reconnects** when the redis-server connection fails and works like an independent background Service that can be stopped and started on command. 

The public API is captured in the @abstr_hyperlink interface:

@abstr_code_section 

### Usage

To use `RedisPubSubServer`, initialize it with the channels you want to subscribe to and assign handlers for each of the events you want to handle. At a minimum you'll want to handle `OnMessage`:

@abstr_code_section 

Calling `Start()` after it's initialized will get it to start listening and processing any messages published to the subscribed channels.

### Lex Operations

The new @abstr_hyperlink sorted set operations allowing you to query a sorted set lexically have been added. A good showcase for this is available on @abstr_hyperlink .

These new operations are available as a @abstr_number : @abstr_number mapping with redis-server on `IRedisNativeClient`:

@abstr_code_section 

And the more user-friendly APIs under `IRedisClient`:

@abstr_code_section 

Just like NuGet version matchers, Redis uses `[` char to express inclusiveness and `(` char for exclusiveness. Since the `IRedisClient` APIs defaults to inclusive searches, these two APIs are the same:

@abstr_code_section 

Alternatively you can specify one or both bounds to be exclusive by using the `(` prefix, e.g:

@abstr_code_section 

More API examples are available in @abstr_hyperlink .

### HyperLog API

The development branch of Redis server (available when v @abstr_number . @abstr_number is released) includes an ingenious algorithm to approximate the unique elements in a set with maximum space and time efficiency. For details about how it works see Redis's creator Salvatore's blog who @abstr_hyperlink . Essentially it lets you maintain an efficient way to count and merge unique elements in a set without having to store its elements. A Simple example of it in action:

@abstr_code_section 

### Scan APIs

Redis v @abstr_number . @abstr_number introduced a beautiful new @abstr_hyperlink operation that provides an optimal strategy for traversing a redis instance entire keyset in managable-size chunks utilizing only a client-side cursor and without introducing any server state. It's a higher performance alternative and should be used instead of @abstr_hyperlink in application code. SCAN and its related operations for traversing members of Sets, Sorted Sets and Hashes are now available in the Redis Client in the following APIs:

@abstr_code_section 

The `IRedisClient` provides a higher-level API that abstracts away the client cursor to expose a lazy Enumerable sequence to provide an optimal way to stream scanned results that integrates nicely with LINQ, e.g:

@abstr_code_section 

### Efficient SCAN in LUA

The C# API below returns the first @abstr_number results matching the `key:*` pattern:

@abstr_code_section 

However the C# Streaming API above requires an unknown number of Redis Operations (bounded to the number of keys in Redis) to complete the request. The number of SCAN calls can be reduced by choosing a higher `pageSize` to tell Redis to scan more keys each time the SCAN operation is called.

As the number of API calls has the potential to result in a large number of Redis Operations, it can end up yielding an unacceptable delay due to the latency of multiple dependent remote network calls. An easy solution is to instead have the multiple SCAN calls performed in-process on the Redis Server, eliminating the network latency of multiple SCAN calls, e.g:

@abstr_code_section 

The `ExecLua` API returns this complex LUA table response in the `Children` collection of the `RedisText` Response. 

#### Alternative Complex API Response

Another way to return complex data structures in a LUA operation is to serialize the result as JSON
    
    
    return cjson.encode(results)
    

Which you can access as raw JSON by parsing the response as a String with:

@abstr_code_section 

> This is also the approach used in Redis React's @abstr_hyperlink .

### ExecCachedLua

ExecCachedLua is a convenient high-level API that eliminates the bookkeeping required for executing high-performance server LUA Scripts which suffers from many of the problems that RDBMS stored procedures have which depends on pre-existing state in the RDBMS that needs to be updated with the latest version of the Stored Procedure. 

With Redis LUA you either have the option to send, parse, load then execute the entire LUA script each time it's called or alternatively you could pre-load the LUA Script into Redis once on StartUp and then execute it using the Script's SHA @abstr_number hash. The issue with this is that if the Redis server is accidentally flushed you're left with a broken application relying on a pre-existing script that's no longer there. The new `ExecCachedLua` API provides the best of both worlds where it will always execute the compiled SHA @abstr_number script, saving bandwidth and CPU but will also re-create the LUA Script if it no longer exists.

You can instead execute the compiled LUA script above by its SHA @abstr_number identifier, which continues to work regardless if it never existed or was removed at runtime, e.g:

@abstr_code_section 

### IRedisClient LUA APIs

The `IRedisClient` APIs for @abstr_hyperlink have been re-factored into the more user-friendly APIs below:

@abstr_code_section 

### Usage Examples

Here's how you can implement a ZPOP in Lua to remove the items with the lowest rank from a sorted set:

@abstr_code_section 

And how to implement ZREVPOP to remove items with the highest rank from a sorted set:

@abstr_code_section 

### Other examples

Returning an int:

@abstr_code_section 

Returning an string:

@abstr_code_section 

Returning a List of strings:

@abstr_code_section 

More examples can be found in the @abstr_hyperlink 

### Debugging Data Corruption Issues

An issue that can be hard to debug is if the same `RedisClient` instance is shared across multiple threads which can result in returning corrupted data. Typically this is a result of using `IRedisClient` field in a singleton instance or sharing it as a static instance. To prevent this, each Thread that uses Redis should retrieve the redis client within a using statement, e.g:

@abstr_code_section 

Unfortunately the call-site which returns the corrupted response or runtime Exception doesn't identify where else the Redis client instance was being used. To help identify where client instances are being used you can assert that the client is only used in the Thread that resolved it from the pool with:

@abstr_code_section 

This captures the Thread's StackTrace each time the client is resolved from the pool which as it adds a lot of overhead, should only be enabled when debugging connection issues. 

If it does detect the client is being accessed from a different thread it will throw a `InvalidAccessException` with the message containing the different **Thread Ids** and the **original StackTrace** where the client was resolved from the pool. You can compare this with the StackTrace of the Exception to hopefully identify where the client is being improperly used.

## Copying

Since September @abstr_number , ServiceStack source code is available under GNU Affero General Public License/FOSS License Exception, see license.txt in the source. Alternative commercial licensing is also available, see https://servicestack.net/pricing for details.

###  @abstr_hyperlink 

## Contributing

Contributors need to approve the @abstr_hyperlink before any code will be reviewed, see the @abstr_hyperlink for more details. 

### Redis Server builds for Windows

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink .
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



### Redis Virtual Machines

  * @abstr_hyperlink 



# Getting Started with the C# Redis client

###  @abstr_hyperlink 

Contains all the examples, tutorials and resources you need to get you up to speed with common operations and the latest features.

@abstr_hyperlink 

### Specific Examples

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



# Simple example using Redis Lists

Below is a simple example to give you a flavour of how easy it is to use some of Redis's advanced data structures - in this case Redis Lists: _Full source code of this example is @abstr_hyperlink _
    
    
    using (var redisClient = new RedisClient())
    {
        //Create a 'strongly-typed' API that makes all Redis Value operations to apply against Shippers
        IRedisTypedClient<Shipper> redis = redisClient.As<Shipper>();
    
        //Redis lists implement IList<T> while Redis sets implement ICollection<T>
        var currentShippers = redis.Lists["urn:shippers:current"];
        var prospectiveShippers = redis.Lists["urn:shippers:prospective"];
    
        currentShippers.Add(
            new Shipper {
                Id = redis.GetNextSequence(),
                CompanyName = "Trains R Us",
                DateCreated = DateTime.UtcNow,
                ShipperType = ShipperType.Trains,
                UniqueRef = Guid.NewGuid()
            });
    
        currentShippers.Add(
            new Shipper {
                Id = redis.GetNextSequence(),
                CompanyName = "Planes R Us",
                DateCreated = DateTime.UtcNow,
                ShipperType = ShipperType.Planes,
                UniqueRef = Guid.NewGuid()
            });
    
        var lameShipper = new Shipper {
            Id = redis.GetNextSequence(),
            CompanyName = "We do everything!",
            DateCreated = DateTime.UtcNow,
            ShipperType = ShipperType.All,
            UniqueRef = Guid.NewGuid()
        };
    
        currentShippers.Add(lameShipper);
    
        Dump("ADDED  @abstr_number  SHIPPERS:", currentShippers);
    
        currentShippers.Remove(lameShipper);
    
        Dump("REMOVED  @abstr_number :", currentShippers);
    
        prospectiveShippers.Add(
            new Shipper {
                Id = redis.GetNextSequence(),
                CompanyName = "Trucks R Us",
                DateCreated = DateTime.UtcNow,
                ShipperType = ShipperType.Automobiles,
                UniqueRef = Guid.NewGuid()
            });
    
        Dump("ADDED A PROSPECTIVE SHIPPER:", prospectiveShippers);
    
        redis.PopAndPushBetweenLists(prospectiveShippers, currentShippers);
    
        Dump("CURRENT SHIPPERS AFTER POP n' PUSH:", currentShippers);
        Dump("PROSPECTIVE SHIPPERS AFTER POP n' PUSH:", prospectiveShippers);
    
        var poppedShipper = redis.PopFromList(currentShippers);
        Dump("POPPED a SHIPPER:", poppedShipper);
        Dump("CURRENT SHIPPERS AFTER POP:", currentShippers);
    
        //reset sequence and delete all lists
        redis.SetSequence( @abstr_number );
        redis.Remove(currentShippers, prospectiveShippers);
        Dump("DELETING CURRENT AND PROSPECTIVE SHIPPERS:", currentShippers);
    }
    
    /*
    == EXAMPLE OUTPUT ==
    
    ADDED  @abstr_number  SHIPPERS:
    Id: @abstr_number ,CompanyName:Trains R Us,ShipperType:Trains,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef:d @abstr_number c @abstr_number db @abstr_number b @abstr_number b @abstr_number ac @abstr_number da @abstr_number b @abstr_number ebd @abstr_number f @abstr_number 
    Id: @abstr_number ,CompanyName:Planes R Us,ShipperType:Planes,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef:e @abstr_number a @abstr_number f @abstr_number b @abstr_number e @abstr_number a @abstr_number c @abstr_number eef @abstr_number b @abstr_number d @abstr_number 
    Id: @abstr_number ,CompanyName:We do everything!,ShipperType:All,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef:d @abstr_number c @abstr_number bbbaf @abstr_number da @abstr_number fc @abstr_number afde @abstr_number b @abstr_number e @abstr_number 
    
    REMOVED  @abstr_number :
    Id: @abstr_number ,CompanyName:Trains R Us,ShipperType:Trains,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef:d @abstr_number c @abstr_number db @abstr_number b @abstr_number b @abstr_number ac @abstr_number da @abstr_number b @abstr_number ebd @abstr_number f @abstr_number 
    Id: @abstr_number ,CompanyName:Planes R Us,ShipperType:Planes,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef:e @abstr_number a @abstr_number f @abstr_number b @abstr_number e @abstr_number a @abstr_number c @abstr_number eef @abstr_number b @abstr_number d @abstr_number 
    
    ADDED A PROSPECTIVE SHIPPER:
    Id: @abstr_number ,CompanyName:Trucks R Us,ShipperType:Automobiles,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef: @abstr_number d @abstr_number d @abstr_number ebc @abstr_number b @abstr_number ba @abstr_number c @abstr_number d @abstr_number f @abstr_number d @abstr_number bec
    
    CURRENT SHIPPERS AFTER POP n' PUSH:
    Id: @abstr_number ,CompanyName:Trucks R Us,ShipperType:Automobiles,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef: @abstr_number d @abstr_number d @abstr_number ebc @abstr_number b @abstr_number ba @abstr_number c @abstr_number d @abstr_number f @abstr_number d @abstr_number bec
    Id: @abstr_number ,CompanyName:Trains R Us,ShipperType:Trains,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef:d @abstr_number c @abstr_number db @abstr_number b @abstr_number b @abstr_number ac @abstr_number da @abstr_number b @abstr_number ebd @abstr_number f @abstr_number 
    Id: @abstr_number ,CompanyName:Planes R Us,ShipperType:Planes,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef:e @abstr_number a @abstr_number f @abstr_number b @abstr_number e @abstr_number a @abstr_number c @abstr_number eef @abstr_number b @abstr_number d @abstr_number 
    
    PROSPECTIVE SHIPPERS AFTER POP n' PUSH:
    
    POPPED a SHIPPER:
    Id: @abstr_number ,CompanyName:Planes R Us,ShipperType:Planes,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef:e @abstr_number a @abstr_number f @abstr_number b @abstr_number e @abstr_number a @abstr_number c @abstr_number eef @abstr_number b @abstr_number d @abstr_number 
    
    CURRENT SHIPPERS AFTER POP:
    Id: @abstr_number ,CompanyName:Trucks R Us,ShipperType:Automobiles,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef: @abstr_number d @abstr_number d @abstr_number ebc @abstr_number b @abstr_number ba @abstr_number c @abstr_number d @abstr_number f @abstr_number d @abstr_number bec
    Id: @abstr_number ,CompanyName:Trains R Us,ShipperType:Trains,DateCreated: @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number Z,UniqueRef:d @abstr_number c @abstr_number db @abstr_number b @abstr_number b @abstr_number ac @abstr_number da @abstr_number b @abstr_number ebd @abstr_number f @abstr_number 
    
    DELETING CURRENT AND PROSPECTIVE SHIPPERS:
    */
    

More examples are available in the [RedisExamples Redis examples page] and in the comprehensive @abstr_hyperlink 

## Speed

One of the best things about Redis is the speed - it is quick.

@abstr_hyperlink below stores and gets the entire @abstr_hyperlink ( @abstr_number records) in less * @abstr_number . @abstr_number secs* - we've never had it so quick!

_(Running inside a VS.NET/R# unit test on a @abstr_number year old iMac)_
    
    
    using (var client = new RedisClient())
    {
        var before = DateTime.Now;
        client.StoreAll(NorthwindData.Categories);
        client.StoreAll(NorthwindData.Customers);
        client.StoreAll(NorthwindData.Employees);
        client.StoreAll(NorthwindData.Shippers);
        client.StoreAll(NorthwindData.Orders);
        client.StoreAll(NorthwindData.Products);
        client.StoreAll(NorthwindData.OrderDetails);
        client.StoreAll(NorthwindData.CustomerCustomerDemos);
        client.StoreAll(NorthwindData.Regions);
        client.StoreAll(NorthwindData.Territories);
        client.StoreAll(NorthwindData.EmployeeTerritories);
    
        Console.WriteLine("Took { @abstr_number }ms to store the entire Northwind database ({ @abstr_number } records)",
            (DateTime.Now - before).TotalMilliseconds, totalRecords);
    
    
        before = DateTime.Now;
        var categories = client.GetAll<Category>();
        var customers = client.GetAll<Customer>();
        var employees = client.GetAll<Employee>();
        var shippers = client.GetAll<Shipper>();
        var orders = client.GetAll<Order>();
        var products = client.GetAll<Product>();
        var orderDetails = client.GetAll<OrderDetail>();
        var customerCustomerDemos = client.GetAll<CustomerCustomerDemo>();
        var regions = client.GetAll<Region>();
        var territories = client.GetAll<Territory>();
        var employeeTerritories = client.GetAll<EmployeeTerritory>();
    
        Console.WriteLine("Took { @abstr_number }ms to get the entire Northwind database ({ @abstr_number } records)",
            (DateTime.Now - before).TotalMilliseconds, totalRecords);
    }
    /*
    == EXAMPLE OUTPUT ==
    
    Took  @abstr_number . @abstr_number ms to store the entire Northwind database ( @abstr_number  records)
    Took  @abstr_number . @abstr_number ms to get the entire Northwind database ( @abstr_number  records)
    */
    

Note: The total time taken includes an extra Redis operation for each record to store the id in a Redis set for each type as well as serializing and de-serializing each record using Service Stack's TypeSerializer.

# Community Resources

  * @abstr_hyperlink by @abstr_hyperlink 
  * @abstr_hyperlink by @abstr_hyperlink 
  * @abstr_hyperlink by @abstr_hyperlink 
  * @abstr_hyperlink by @abstr_hyperlink 


