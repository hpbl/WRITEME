# Dapper - a simple object mapper for .Net

@abstr_hyperlink 

## Release Notes

Located at @abstr_hyperlink 

## Packages

MyGet Pre-release feed: https://www.myget.org/gallery/dapper

| Package | NuGet Stable | NuGet Pre-release | Downloads | MyGet | | ------- | ------------ | ----------------- | --------- | ----- | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

## Features

Dapper is a @abstr_hyperlink that you can add in to your project that will extend your `IDbConnection` interface.

It provides @abstr_number helpers:

## Execute a query and map the results to a strongly typed List

@abstr_code_section Example usage:

@abstr_code_section 

## Execute a query and map it to a list of dynamic objects

@abstr_code_section This method will execute SQL and return a dynamic list.

Example usage:

@abstr_code_section 

## Execute a Command that returns no results

@abstr_code_section 

Example usage:

@abstr_code_section 

## Execute a Command multiple times

The same signature also allows you to conveniently and efficiently execute a command multiple times (for example to bulk-load data)

Example usage:

@abstr_code_section This works for any parameter that implements IEnumerable for some T.

## Performance

A key feature of Dapper is performance. The following metrics show how long it takes to execute a `SELECT` statement against a DB (in various config, each labeled) and map the data returned to objects.

The benchmarks can be found in @abstr_hyperlink (contributions welcome!) and can be run once compiled via: @abstr_code_section Output from the latest run is: @abstr_code_section | ORM | Method | Return | Mean | Gen @abstr_number | Gen @abstr_number | Gen @abstr_number | Allocated | |------------- |------------------------------ |-------- |------------:|--------:|-------:|-------:|----------:| | LINQ to DB | &# @abstr_number ;First (Compiled)&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | - | - | @abstr_number . @abstr_number KB | | LINQ to DB | Query<T> | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | - | - | @abstr_number . @abstr_number KB | | Hand Coded | SqlCommand | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | Dapper | QueryFirstOrDefault<dynamic> | dynamic | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | - | - | @abstr_number . @abstr_number KB | | Belgrade | ExecuteReader | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | - | @abstr_number . @abstr_number KB | | Dapper | QueryFirstOrDefault<T> | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | Hand Coded | DataTable | dynamic | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | - | @abstr_number . @abstr_number KB | | Dapper | &# @abstr_number ;Query<T> (buffered)&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | Dapper | &# @abstr_number ;Query<dynamic> (buffered)&# @abstr_number ; | dynamic | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | Massive | &# @abstr_number ;Query (dynamic)&# @abstr_number ; | dynamic | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | PetaPoco | &# @abstr_number ;Fetch<T> (Fast)&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | PetaPoco | Fetch<T> | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | Dapper | &# @abstr_number ;Contrib Get<T>&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | ServiceStack | SingleById<T> | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | LINQ to DB | First | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | - | - | @abstr_number . @abstr_number KB | | Susanoo | &# @abstr_number ;Execute<T> (Static)&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | Dashing | Get | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | Susanoo | &# @abstr_number ;Execut<dynamic> (Static)&# @abstr_number ; | dynamic | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | LINQ to SQL | &# @abstr_number ;First (Compiled)&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | - | - | @abstr_number . @abstr_number KB | | Dapper | &# @abstr_number ;Query<T> (unbuffered)&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | Susanoo | &# @abstr_number ;Execute<dynamic> (Cache)&# @abstr_number ; | dynamic | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | Susanoo | &# @abstr_number ;Execute<T> (Cache)&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | Dapper | &# @abstr_number ;Query<dynamic> (unbuffered)&# @abstr_number ; | dynamic | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | EF @abstr_number | SqlQuery | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | - | @abstr_number . @abstr_number KB | | EF Core | &# @abstr_number ;First (Compiled)&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | - | - | @abstr_number . @abstr_number KB | | NHibernate | Get<T> | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | - | @abstr_number . @abstr_number KB | | EF Core | First | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | - | - | @abstr_number . @abstr_number KB | | NHibernate | HQL | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | - | @abstr_number KB | | EF Core | &# @abstr_number ;First (No Tracking)&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | EF Core | SqlQuery | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | - | - | @abstr_number . @abstr_number KB | | EF @abstr_number | First | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | - | - | @abstr_number . @abstr_number KB | | NHibernate | Criteria | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | EF @abstr_number | &# @abstr_number ;First (No Tracking)&# @abstr_number ; | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | - | @abstr_number . @abstr_number KB | | LINQ to SQL | ExecuteQuery | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number KB | | NHibernate | SQL | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | - | @abstr_number . @abstr_number KB | | LINQ to SQL | First | Post | @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | - | @abstr_number . @abstr_number KB | | NHibernate | LINQ | Post | @abstr_number , @abstr_number . @abstr_number us | @abstr_number . @abstr_number | @abstr_number . @abstr_number | - | @abstr_number . @abstr_number KB |

Feel free to submit patches that include other ORMs - when running benchmarks, be sure to compile in Release and not attach a debugger (`Ctrl`+`F @abstr_number `).

Alternatively, you might prefer Frans Bouma's @abstr_hyperlink test suite or @abstr_hyperlink .

## Parameterized queries

Parameters are passed in as anonymous classes. This allow you to name your parameters easily and gives you the ability to simply cut-and-paste SQL snippets and run them in your db platform's Query analyzer.

@abstr_code_section 

## List Support

Dapper allows you to pass in `IEnumerable<int>` and will automatically parameterize your query.

For example:

@abstr_code_section 

Will be translated to:

@abstr_code_section 

## Literal replacements

Dapper supports literal replacements for bool and numeric types.

@abstr_code_section 

The literal replacement is not sent as a parameter; this allows better plans and filtered index usage but should usually be used sparingly and after testing. This feature is particularly useful when the value being injected is actually a fixed value (for example, a fixed "category id", "status code" or "region" that is specific to the query). For _live_ data where you are considering literals, you might _also_ want to consider and test provider-specific query hints like @abstr_hyperlink with regular parameters.

## Buffered vs Unbuffered readers

Dapper's default behavior is to execute your SQL and buffer the entire reader on return. This is ideal in most cases as it minimizes shared locks in the db and cuts down on db network time.

However when executing huge queries you may need to minimize memory footprint and only load objects as needed. To do so pass, `buffered: false` into the `Query` method.

## Multi Mapping

Dapper allows you to map a single row to multiple objects. This is a key feature if you want to avoid extraneous querying and eager load associations.

Example:

Consider @abstr_number classes: `Post` and `User`

@abstr_code_section 

Now let us say that we want to map a query that joins both the posts and the users table. Until now if we needed to combine the result of @abstr_number queries, we'd need a new object to express it but it makes more sense in this case to put the `User` object inside the `Post` object.

This is the use case for multi mapping. You tell dapper that the query returns a `Post` and a `User` object and then give it a function describing what you want to do with each of the rows containing both a `Post` and a `User` object. In our case, we want to take the user object and put it inside the post object. So we write the function:

@abstr_code_section 

The @abstr_number type arguments to the `Query` method specify what objects dapper should use to deserialize the row and what is going to be returned. We're going to interpret both rows as a combination of `Post` and `User` and we're returning back a `Post` object. Hence the type declaration becomes

@abstr_code_section 

Everything put together, looks like this:

@abstr_code_section 

Dapper is able to split the returned row by making an assumption that your Id columns are named `Id` or `id`. If your primary key is different or you would like to split the row at a point other than `Id`, use the optional `splitOn` parameter.

## Multiple Results

Dapper allows you to process multiple result grids in a single query.

Example:

@abstr_code_section 

## Stored Procedures

Dapper fully supports stored procs:

@abstr_code_section 

If you want something more fancy, you can do:

@abstr_code_section 

## Ansi Strings and varchar

Dapper supports varchar params, if you are executing a where clause on a varchar column using a param be sure to pass it in this way:

@abstr_code_section 

On SQL Server it is crucial to use the unicode when querying unicode and ANSI when querying non unicode.

## Type Switching Per Row

Usually you'll want to treat all rows from a given table as the same data type. However, there are some circumstances where it's useful to be able to parse different rows as different data types. This is where `IDataReader.GetRowParser` comes in handy.

Imagine you have a database table named "Shapes" with the columns: `Id`, `Type`, and `Data`, and you want to parse its rows into `Circle`, `Square`, or `Triangle` objects based on the value of the Type column.

@abstr_code_section 

## User Defined Variables in MySQL

In order to use Non-parameter SQL variables with MySql Connector, you have to add the following option to your connection string:

`Allow User Variables=True`

Make sure you don't provide Dapper with a property to map.

## Limitations and caveats

Dapper caches information about every query it runs, this allows it to materialize objects quickly and process parameters quickly. The current implementation caches this information in a `ConcurrentDictionary` object. Statements that are only used once are routinely flushed from this cache. Still, if you are generating SQL strings on the fly without using parameters it is possible you may hit memory issues.

Dapper's simplicity means that many feature that ORMs ship with are stripped out. It worries about the @abstr_number % scenario, and gives you the tools you need most of the time. It doesn't attempt to solve every problem.

## Will Dapper work with my DB provider?

Dapper has no DB specific implementation details, it works across all .NET ADO providers including @abstr_hyperlink , SQL CE, Firebird, Oracle, MySQL, PostgreSQL and SQL Server.

## Do you have a comprehensive list of examples?

Dapper has a comprehensive test suite in the @abstr_hyperlink .

## Who is using this?

Dapper is in production use at @abstr_hyperlink .
