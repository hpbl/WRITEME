# SQLite-net

@abstr_hyperlink 

Use one of these packages:

| Version | Package | Description | | ------- | ------- | ----------- | | @abstr_hyperlink | @abstr_hyperlink | .NET Standard Library | | @abstr_hyperlink | @abstr_hyperlink | With Encryption Support |

SQLite-net is an open source, minimal library to allow .NET, .NET Core, and Mono applications to store data in @abstr_hyperlink . It was first designed to work with @abstr_hyperlink , but has since grown up to work on all the platforms (Xamarin.*, .NET, UWP, Azure, etc.).

SQLite-net was designed as a quick and convenient database layer. Its design follows from these _goals_ :

  * Very easy to integrate with existing projects and runs on all the .NET platforms.

  * Thin wrapper over SQLite that is fast and efficient. (This library should not be the performance bottleneck of your queries.)

  * Very simple methods for executing CRUD operations and queries safely (using parameters) and for retrieving the results of those query in a strongly typed fashion.

  * Works with your data model without forcing you to change your classes. (Contains a small reflection-driven ORM layer.)




## NuGet Installation

Install @abstr_hyperlink from NuGet.

**Important:** You will need to add the NuGet package to **both** your _.NET Standard library project_ and your _platform-dependent app project_.

## Source Installation

SQLite-net is all contained in @abstr_number file (I know, so cool right?) and is easy to add to your project. Just add @abstr_hyperlink to your project, and you're ready to start creating tables. 

## Please Contribute!

This is an open source project that welcomes contributions/suggestions/bug reports from those who use it. If you have any ideas on how to improve the library, please @abstr_hyperlink . Please check out the @abstr_hyperlink .

# Example Time!

Please consult the Wiki for, ahem, @abstr_hyperlink .

The library contains simple attributes that you can use to control the construction of tables. In a simple stock program, you might use:

@abstr_code_section 

Once you've defined the objects in your model you have a choice of APIs. You can use the "synchronous API" where calls block one at a time, or you can use the "asynchronous API" where calls do not block. You may care to use the asynchronous API for mobile applications in order to increase responsiveness.

Both APIs are explained in the two sections below.

## Synchronous API

Once you have defined your entity, you can automatically generate tables in your database by calling `CreateTable`:

@abstr_code_section 

You can insert rows in the database using `Insert`. If the table contains an auto-incremented primary key, then the value for that key will be available to you after the insert:

@abstr_code_section 

Similar methods exist for `Update` and `Delete`.

The most straightforward way to query for data is using the `Table` method. This can take predicates for constraining via WHERE clauses and/or adding ORDER BY clauses:

@abstr_code_section 

You can also query the database at a low-level using the `Query` method:

@abstr_code_section 

The generic parameter to the `Query` method specifies the type of object to create for each row. It can be one of your table classes, or any other class whose public properties match the column returned by the query. For instance, we could rewrite the above query as:

@abstr_code_section 

You can perform low-level updates of the database using the `Execute` method.

## Asynchronous API

The asynchronous library uses the Task Parallel Library (TPL). As such, normal use of `Task` objects, and the `async` and `await` keywords will work for you.

Once you have defined your entity, you can automatically generate tables by calling `CreateTableAsync`:

@abstr_code_section 

You can insert rows in the database using `Insert`. If the table contains an auto-incremented primary key, then the value for that key will be available to you after the insert:

@abstr_code_section 

Similar methods exist for `UpdateAsync` and `DeleteAsync`.

Querying for data is most straightforwardly done using the `Table` method. This will return an `AsyncTableQuery` instance back, whereupon you can add predicates for constraining via WHERE clauses and/or adding ORDER BY. The database is not physically touched until one of the special retrieval methods - `ToListAsync`, `FirstAsync`, or `FirstOrDefaultAsync` \- is called.

@abstr_code_section 

There are a number of low-level methods available. You can also query the database directly via the `QueryAsync` method. Over and above the change operations provided by `InsertAsync` etc you can issue `ExecuteAsync` methods to change sets of data directly within the database.

Another helpful method is `ExecuteScalarAsync`. This allows you to return a scalar value from the database easily:

@abstr_code_section 

## Manual SQL

**sqlite-net** is normally used as a light ORM (object-relational-mapper) using the methods `CreateTable` and `Table`. However, you can also use it as a convenient way to manually execute queries.

Here is an example of creating a table, inserting into it (with a parameterized command), and querying it without using ORM features.

@abstr_code_section 

## Using SQLCipher

You can use an encrypted database by using the @abstr_hyperlink .

The database key is set in the `SqliteConnectionString` passed to the connection constructor:

@abstr_code_section 

If you need set pragmas to control the encryption, actions can be passed to the connection string:

@abstr_code_section 

## Thank you!

Thank you to the .NET community for embracing this project, and thank you to all the contributors who have helped to make this great.

Thanks also to Tirza van Dijk (@tirzavdijk) for the great logo!
