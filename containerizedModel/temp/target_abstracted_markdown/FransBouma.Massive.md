# ﻿Massive, a small, happy, dynamic MicroORM for .NET that will love you forever

Massive was started by Rob Conery and @abstr_hyperlink to Frans Bouma on March @abstr_number th, @abstr_number . It's a small MicroORM based on the `Expando` or `dynamic` type and allows you to work with your database with almost no effort. The design is based on the idea that the code provided to you in this repository is a start: you get up and running in no-time and from there edit and alter it as you see fit. 

## Current Status

Massive is currently on v @abstr_number . @abstr_number . To obtain the old v @abstr_number . @abstr_number code, please select the v @abstr_number . @abstr_number branch in the GitHub menu or click @abstr_hyperlink .

## Installation

To use Massive in your project simply download the following files from the repository's @abstr_hyperlink folder:

  * Massive.Shared.cs
  * Massive._YourDatabase_.cs, e.g. Massive.SqlServer.cs for SQL Server
  * Massive.Shared.Async.cs, if you want to use the Massive API asynchronously. Requires .NET @abstr_number . @abstr_number or higher.



Due to its design, all files share the same namespace. If you need to use more than one database in your project, you have to change the namespace of the files and use per database a version of the Massive.Shared.* files. 

## Requirements

Massive has no external direct dependencies, just get the code, compile it with your project and enjoy. It does have an _indirect_ dependency, namely on the ADO.NET provider of the database used. The ADO.NET provider is obtained through .NET's `DbProviderFactory` system. This requires that the ADO.NET provider has been setup properly so .NET can find the factory needed. The following ADO.NET providers are supported out of the box. 

  * SQL Server. The ADO.NET provider ships with .NET.
  * Oracle: @abstr_hyperlink . The installer for ODP.NET v @abstr_number c installs both a full managed ADO.NET provider and a wrapper around its Java based Client Level Interface (CLI). By default Massive uses the latter, using the factory name `Oracle.DataAccess.Client`. If you want to use the Managed provider, please change the value in property `DbProviderFactoryName` in the @abstr_hyperlink file around @abstr_hyperlink to `Oracle.ManagedDataAccess.Client`. This requires .NET @abstr_number . @abstr_number or higher.
  * PostgreSQL: @abstr_hyperlink . The Npgsql distribution contains an installer, offered at the 'releases' section. This installer will add the required DbProviderFactory reference and will add the npgsql dll to the gac. 
  * SQLite: Massive uses the official SQLite .NET provider. @abstr_hyperlink on that provider to get started. 
  * MySQL: Massive works with the @abstr_hyperlink (`MySql.Data.MySqlClient`) and with the @abstr_hyperlink driver (`Devart.Data.MySql`). Be aware of licensing issues. At the time of writing the free version of the Oracle/MySQL driver @abstr_hyperlink , though it @abstr_hyperlink . However the free version of the Devart driver @abstr_hyperlink . If you want to use the Devart driver, please change the value in property `DbProviderFactoryName` in the @abstr_hyperlink file around @abstr_hyperlink to `Devart.Data.MySql`.



## Migrating from v @abstr_number . @abstr_number to v @abstr_number . @abstr_number

If you're using v @abstr_number . @abstr_number currently and want to migrate to v @abstr_number . @abstr_number , please take a look at @abstr_hyperlink page for more details about whether you'll run into the changes made. In general the breaking changes will be minor, if any. 

## What's new in v @abstr_number . @abstr_number

Besides some changes as documented in the @abstr_hyperlink , the following features / additions are new:

  * Async / Await support. Not all supported databases support asynchronous data-access under the hood, but the Massive API at least allows you to work with the code asynchronously. Full Async is supported by the ADO.NET providers of SQL Server and Npgsql ( @abstr_number .x). ODP.NET (Oracle) doesn't support async under the hood so using the Async API with Oracle will still use synchronous data-access under the hood (through the default DbCommand fall back code). SQLite's ADO.NET provider does support async using specific types but Massive doesn't support these.
  * Shared code. In v @abstr_number . @abstr_number code which was effectively the same among all supported databases was copy/pasted, in v @abstr_number . @abstr_number Massive uses partial classes and shares as much code as possible among all supported databases. 
  * Unit Tests. In v @abstr_number . @abstr_number there were no tests but in v @abstr_number . @abstr_number we properly implemented a series of tests to see whether things indeed work the way they do. They can also be used as an example how to get started. 
  * Culling of dead code. 



## Contributing

If you want to add new features to Massive or have a fix for a bug, that's great! There are some rules however and if you don't meet them, I won't merge your code, no matter how long you've worked on it. This is nothing personal, and to many of you these rules might sound rigid, but this repository isn't a playground for newbies: the code is used by many people and they depend on it. It therefore has to be of high quality and changes made to the repository will live on forever so they aren't accepted without review. 

  * PRs which are solely about whitespace changes are ignored. 
  * Before sumitting a PR, first open an issue and discuss your proposed change/feature there. This is **mandatory**. Any PR without a linked issue is closed without comment. The main reasoning behind this is that it prevents people wasting time on things that will never make it into the code base or that e.g. a PR requires refactoring before it's being accepted because it doesn't fit into the codebase. ORMs, even small ones like Massive aren't simple: there are a lot of pitfalls and in general non-ORM devs overlook a lot of them. Discussing a change before a PR is a good thing in this case. Also don't be afraid to ask if you don't know how to proceed: that's why the issue is opened. 
  * If your PR contains submissions from others, I can't accept your PR: a committer owns the code of a change. If you commit code into Massive owned by others, it is unclear those others were willing to share that code with the main repository. 
  * Don't change the API nor its current behavior. Massive doesn't have a fixed version number, and is distributed through text files, but I still want the API to be dependable: no method is removed nor has its signature changed. For instance if you want to add functionality to a method and it requires extra arguments for that, you have to add an overload of the method, you can't simply append arguments to a method's signature. Be very careful here. Adding a new overload to a method which has a `params` argument at the end can easily break existing code (by causing it to unintentionally compile against your new method instead of the `params` version). Even simply adding optional parameters to the end of an existing method will break the API, since code which is linked against a pre-compiled version of Massive will fail. I cannot accept changes like this.
  * Tests are preferred. If your change can be tested with the current tests, no new tests are needed. If your change requires additional tests because the current tests don't cover it, add them with your PR.
  * If possible support all databases supported by Massive. I've designed Massive in v @abstr_number . @abstr_number to share as much code as possible across all supported databases. New submissions are required to follow that pattern: for instance large pieces of code specific for SQL Server which are also usable with some tweaks on Oracle are not accepted. Instead the code has to be made generic and added to Massive.Shared, using methods implemented in the specific database partial classes to configure the code for that particular database. This can be a great pain, e.g. because you don't have access to Oracle nor Postgresql. In that case, request what you should add for these databases or that I do that for you and test the changes for you locally using the tests you wrote. 
  * No new files please. There's currently a Massive.Shared.Async, and the sooner I can merge that into Massive.Shared, the better (MS still supporting .NET @abstr_number . @abstr_number is currently the limitation on that, but it's likely it will be merged in the near future). 
  * Code defensively. If your code accepts input from the user, be absolutely sure this input is passed on as parameters and user crap like null values and name mismatches are covered. You don't need to throw a myriad of exceptions, but at least make a bit of an effort.
  * If it takes less time for me to write the code myself than to look at your PR, tell you how to change things and go into an endless bikeshedding debate with you, chances are I'll write it myself instead of debating things with you. 
  * If you add to the API, it's recommended you add a small example to the documentation in this readme below. Some people think tests are documentation, but tests are tests, they test things. Documentation document things, so it's preferable to have documentation as well. 
  * For the databases which are currently supported there are free downloads available. You can freely assume code which works on SQL Server Express and Oracle Express / developer edition to work on the paid commercial versions, unless you use a feature only available in those paid versions. 



## Usage

Note, the following is a work in progress and doesn't contain all the new API methods. It is primarily the original text written by Conery, and I'll update it when I have time. If you're unsure how to use a given method, please look at the @abstr_hyperlink . 

Massive is a "wrapper" for your DB tables and uses System.Dynamic extensively. If you try to use this with C# @abstr_number . @abstr_number or below, it will explode and you will be sad. Me too honestly - I like how this doesn't require any DLLs other than what's in the GAC. Yippee.

  * Get a Database. Northwind will work nicely. Add a connection to your database in your web.config (or app.config). Don't forget the providerName! If you don't know what that is - just add providerName = 'System.Data.SqlClient' right after the whole connectionString stuff.
  * Create a class that wraps a table. You can call it whatever you like, but if you want to be cool just name it the same as your table.
  * Query away and have fun



## Code Please

Let's say we have a table named "Products". You create a class like this:

@abstr_code_section 

You could also just instantiate it inline, as needed:

@abstr_code_section 

Or ignore the object hierarchy altogether:

@abstr_code_section 

Now you can query thus:

@abstr_code_section 

That works, but Massive is "dynamic" - which means that it can figure a lot of things out on the fly. That query above can be rewritten like this:

@abstr_code_section 

The "Find" method doesn't exist, but since Massive is dynamic it will try to infer what you mean by using DynamicObject's TryInvokeMember. See the source for more details. There's more on the dynamic query stuff down below.

You can also run ad-hoc queries as needed:

@abstr_code_section 

This will pull categories and enumerate the results - streaming them as opposed to bulk-fetching them (thanks to Jeroen Haegebaert for the code). 

If you want to have a paged result set - you can:

@abstr_code_section 

In this example, ALL of the arguments are optional and default to reasonable values. CurrentPage defaults to @abstr_number , pageSize defaults to @abstr_number , where defaults to nothing.

What you get back is a Dynamic with three properties: Items, TotalPages and TotalRecords. Items is a Query which is lazily evaluated and you can enumerate it after casting it to `IEnumerable<dynamic>`. TotalPages is the total number of pages in the complete result set and TotalRecords is the total number of records in the result set. What's in the Items collection is totally up to you, it's dynamic: meaning that it's malleable and exciting. It will take the shape of whatever you return in your query, and it will have properties and so on. You can assign events to it, you can create delegates on the fly. You can give it chocolate, and it will kiss you.

That's pretty much it. One thing I really like is the groovy DSL that Massive uses - it looks just like SQL. If you want, you can use this DSL to query the database:

@abstr_code_section 

Some of you might look at that and think it looks suspiciously like inline SQL. It _does_ look sort of like it doesn't it! But I think it reads a bit better than Linq to SQL - it's a bit closer to the mark if you will. 

## Inserts and Updates

Massive is built on top of dynamics - so if you send an object to a table, it will get parsed into a query. If that object has a property on it that matches the primary key, Massive will think you want to update something. Unless you tell it specifically to update it.

You can send just about anything into the MassiveTransmoQueryfier and it will magically get turned into SQL:

@abstr_code_section 

This also works if you have a form on your web page with the name "ProductName" - then you submit it:

@abstr_code_section 

Insert works the same way:

@abstr_code_section 

Yippee Skippy! Now we get to the fun part - and one of the reasons I had to spend @abstr_number more lines of code on something you probably won't care about. What happens when we send a whole bunch of goodies to the database at once!

@abstr_code_section 

## Named Argument Query Syntax

I recently added the ability to run more friendly queries using Named Arguments and C# @abstr_number 's `DynamicObject.TryInvokeMember` method-on-the-fly syntax. In an earlier version this was trying to be like Rails ActiveRecord (so, calls were like `var drinks = table.FindBy_CategoryID( @abstr_number );`), but I figured "C# is NOT Ruby, and Named Arguments can be a lot more clear". So now calls look like `var drinks = table.FindBy(CategoryID: @abstr_number );` (examples below). In addition, Mark Rendle's Simple.Data is already supporting ActiveRecord style syntax, so ... why duplicate things?

If your needs are more complicated - I would suggest just passing in your own SQL with Query().

@abstr_code_section 

## Aggregates with Named Arguments

You can do the same thing as above for aggregates:

@abstr_code_section 

## Metadata

If you find that you need to know information about your table - to generate some lovely things like ... whatever - just ask for the Schema property. This will query INFORMATION_SCHEMA for you, and you can take a look at DATA_TYPE, DEFAULT_VALUE, etc for whatever system you're running on.

In addition, if you want to generate an empty instance of a column - you can now ask for a "Prototype()" - which will return all the columns in your table with the defaults set for you (getdate(), raw values, newid(), etc).

## Factory Constructor

One thing that can be useful is to use Massive to just run a quick query. You can do that now by using "Open()" which is a static builder on DynamicModel:

@abstr_code_section 

You can execute whatever you like at that point.

## Validations

One thing that's always needed when working with data is the ability to stop execution if something isn't right. Massive now has Validations, which are built with the Rails approach in mind:

@abstr_code_section 

The idea here is that `Validate()` is called prior to Insert/Update. If it fails, an Error collection is populated and an InvalidOperationException is thrown. That simple. With each of the validations above, a message can be passed in.

## CallBacks

Need something to happen after Update/Insert/Delete? Need to halt before save? Massive has callbacks to let you do just that:

@abstr_code_section 

The callbacks you can use are:

  * Inserted
  * Updated
  * Deleted
  * BeforeDelete
  * BeforeSave


