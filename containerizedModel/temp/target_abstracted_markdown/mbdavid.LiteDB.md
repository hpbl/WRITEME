# LiteDB - A .NET NoSQL Document Store in a single data file

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

> Master branch contains v @abstr_number beta - if you want old version, go to for git tags

LiteDB is a small, fast and lightweight NoSQL embedded database. 

  * Serverless NoSQL Document Store
  * Simple API similar to MongoDB
  * @abstr_number % C# code for .NET @abstr_number . @abstr_number / NETStandard @abstr_number . @abstr_number in a single DLL (less than @abstr_number kb)
  * Thread safe
  * ACID with full transaction support
  * Data recovery after write failure (WAL log file)
  * Datafile encryption using DES (AES) cryptography
  * Map your POCO classes to `BsonDocument` using attributes or fluent mapper API
  * Store files and stream data (like GridFS in MongoDB)
  * Single data file storage (like SQLite)
  * Index document fields for fast search (up to @abstr_number indexes per collection)
  * LINQ support for queries
  * SQL-Like commands to access/transform data
  * LiteDB Studio - Nice UI for data access
  * Pretty fast - @abstr_hyperlink 
  * Open source and free for everyone - including commercial use
  * Install from NuGet: `Install-Package LiteDB`



## New v @abstr_number

Take a look on all new version v @abstr_number here

@abstr_image 

## Try online

@abstr_hyperlink . For security reasons, in the online version not all commands are available. Try the offline version for full feature tests.

## Documentation

Visit @abstr_hyperlink for full documentation. For simplified chinese version, @abstr_hyperlink .

## Download

Download the source code or binary only in @abstr_hyperlink 

## How to use LiteDB

A quick example for storing and searching documents:

```C# // Create your POCO class public class Customer { public int Id { get; set; } public string Name { get; set; } public int Age { get; set; } public string[] Phones { get; set; } public bool IsActive { get; set; } }

// Open database (or create if doesn't exist) using(var db = new LiteDatabase(@"MyData.db")) { // Get customer collection var col = db.GetCollection("customers");
    
    
    // Create your new customer instance
    var customer = new Customer
    { 
        Name = "John Doe", 
        Phones = new string[] { " @abstr_number - @abstr_number ", " @abstr_number - @abstr_number " }, 
        Age =  @abstr_number ,
        IsActive = true
    };
    
    // Create unique index in Name field
    col.EnsureIndex(x => x.Name, true);
    
    // Insert new customer document (Id will be auto-incremented)
    col.Insert(customer);
    
    // Update a document inside a collection
    customer.Name = "Joana Doe";
    
    col.Update(customer);
    
    // Use LINQ to query documents (with no index)
    var results = col.Find(x => x.Age >  @abstr_number );
    

} @abstr_code_section C# // DbRef to cross references public class Order { public ObjectId Id { get; set; } public DateTime OrderDate { get; set; } public Address ShippingAddress { get; set; } public Customer Customer { get; set; } public List Products { get; set; } } 

// Re-use mapper from global instance var mapper = BsonMapper.Global;

// "Produts" and "Customer" are from other collections (not embedded document) mapper.Entity() .DbRef(x => x.Customer, "customers") // @abstr_number to @abstr_number / @abstr_number reference .DbRef(x => x.Products, "products") // @abstr_number to Many reference .Field(x => x.ShippingAddress, "addr"); // Embedded sub document

using(var db = new LiteDatabase("MyOrderDatafile.db")) { var orders = db.GetCollection("orders");
    
    
    // When query Order, includes references
    var query = orders
        .Include(x => x.Customer)
        .Include(x => x.Products) //  @abstr_number  to many reference
        .Find(x => x.OrderDate <= DateTime.Now);
    
    // Each instance of Order will load Customer/Products references
    foreach(var order in query)
    {
        var name = order.Customer.Name;
        ...
    }
    

}

```

## Where to use?

  * Desktop/local small applications
  * Application file format
  * Small web applications
  * One database **per account/user** data store
  * Few concurrent write operations



## Plugins

  * A GUI viewer tool: https://github.com/falahati/LiteDBViewer
  * A GUI editor tool: https://github.com/JosefNemec/LiteDbExplorer 
  * Lucene.NET directory: https://github.com/sheryever/LiteDBDirectory
  * LINQPad support: https://github.com/adospace/litedbpad
  * F# Support: https://github.com/Zaid-Ajaj/LiteDB.FSharp



## Changelog

Change details for each release are documented in the @abstr_hyperlink .

## License

@abstr_hyperlink 

Copyright (c) @abstr_number - Maurício David

* * *

#  LiteDB v @abstr_number

More than one year of hard working, v @abstr_number are comming!

> What's new in v @abstr_number ?

  * New Storage Engine

    * New WAL (Write-Ahead Logging) for fast durability
    * Database lock per collection
    * MultiVersion Concurrency Control (Snapshots & Checkpoint)
    * Multi concurrent `Stream` readers - Single async writer
    * No lock for reader
    * Up to @abstr_number indexes per collection
    * Atomic multi-document transactions
    * PageSize: @abstr_number KB
  * New BsonExpression

    * New super-fast tokenizer parser
    * Clean syntax with optional use of `$`
    * Input/Output parameter support: `@name`
    * Simplified document notation `{ _id, name, year }`
    * Support partial BSON document: read/deserialize only used data in query
    * New Map function `$.Items => UPPER(@.Name)`
  * System Collections

    * Support query over internal collection 
    * `$transactions`, `$database`, `$dump`
  * New QueryBuilder

    * Fluent API for write queries
    * Simple syntax using BsonExpressions
    * Support OrderBy/GroupBy expressions
    * Query optimization with Explain Plan
    * Aggregate functions
    * LINQ to `BsonExpression` query support - easy to use (and similar to EF)
  * New SQL-Like syntax

    * Simple SQL syntax for any command
    * Syntax near to SQL ANSI 
    * Support INSERT/UPDATE/DELETE/...
    * MapReduce using GroupBy/Having
  * New Native UI - LiteDB.Studio

    * WinForms app to manipulate database
    * Based on SQL commands
    * Show results in grid or as text
    * Multi tabs, multi threads, multi transactions



> What was droped?

  * Single process only - optimazed for multi thread (open file as exclusive mode)
  * Drop .NET @abstr_number . @abstr_number / @abstr_number . @abstr_number - works only in .NET @abstr_number . @abstr_number + and .NETStandard @abstr_number . @abstr_number 
  * Shell commands (use SQL commands)



.. but still... 

  * Embedded support
  * Single database file 
  * Single DLL, no dependency and @abstr_number % C#
  * @abstr_number % free open source



> Roadmap: first beta version will be released in Aug/ @abstr_number 
