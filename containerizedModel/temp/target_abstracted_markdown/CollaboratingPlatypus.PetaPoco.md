@abstr_image 

# Welcome to the official PetaPoco repository

Originally the brainchild of [Brad Robinson]

## Version @abstr_number - Netstandard @abstr_number . @abstr_number +, @abstr_number . @abstr_number , @abstr_number . @abstr_number +

Read more about the @abstr_hyperlink 

PetaPoco is available from: **NuGet @abstr_hyperlink**

|Master|Development|Nuget| |:-----|:----------|:----| | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

### Documentation

For configuration, code examples and other general information [See the docs]

### Add-ons

  * PetaPoco.SqlKata lets you use the powerful query builder SqlKata to build SQL queries for PetaPoco.
  * StaTypPocoQueries.PetaPoco provides the ability to use some simple, strongly typed, Intellisensed LINQ expressions in your queries.



## Version @abstr_number - Legacy

|Nuget (Single file)|Nuget Core (+t @abstr_number templates)|Nuget Core Compiled (dll)| |:----|:---------|:------------------| | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

* * *

## PetaPoco is a tiny & fast micro-ORM for .NET

  * Like [Dapper], it's fast because it uses dynamic method generation (MSIL) to assign column values to properties
  * Like [Massive], it now also supports dynamic Expandos too
  * Like [ActiveRecord], it supports a close relationship between object and database table
  * Like [SubSonic], it supports generation of poco classes with T @abstr_number templates (V @abstr_number only)
  * Like [Massive] it's available as single file that you easily add to any project or complied. (V @abstr_number only)



## Features at a Glance

  * Tiny, and absolutely no dependencies!
  * Asychronise or synchronise, the choice is yours. (aka async) (V @abstr_number )
  * Works with strictly undecorated POCOs, or attributed almost-POCOs.
  * Easy to configure and includes [fluent configuration] out of the box.
  * Helper methods for Insert/Delete/Update/Save and IsNew
  * Paged requests automatically work out total record count and fetch a specific page.
  * Easy transaction support.
  * Better parameter replacement support, including grabbing named parameters from object properties.
  * Great performance by eliminating Linq and fast property assignment with DynamicMethod generation.
  * The query language is good ole SQL.
  * Includes a low friction SQL builder class that makes writing inline SQL _much_ easier.
  * Includes T @abstr_number templates to automatically generate POCO classes for you. (V @abstr_number )
  * Hooks for logging exceptions, installing value converters and mapping columns to properties without attributes.
  * Works with SQL Server, SQL Server CE, MS Access, SQLite, MySQL, MariaDB, Firebird, and PostgreSQL. (Oracle supported but does not have integration tests).
  * Works under Net Standard @abstr_number . @abstr_number , .NET @abstr_number . @abstr_number / @abstr_number . @abstr_number + or Mono @abstr_number . @abstr_number and later.
  * Has [Xunit] unit tests.
  * Has supported DBs integration tests.
  * OpenSource (MIT License or Apache @abstr_number . @abstr_number )



## Super easy use and configuration

Save an entity `c# db.Save(article); db.Save(new Article { Title = "Super easy to use PetaPoco" }); db.Save("Articles", "Id", { Title = "Super easy to use PetaPoco", Id = Guid.New() }); @abstr_code_section c# var article = db.Single<Article>( @abstr_number ); var article = db.Single<Article>("WHERE ArticleKey = @ @abstr_number ", "ART- @abstr_number "); @abstr_code_section c# db.Delete(article); db.Delete<Article>( @abstr_number ); db.Delete("Articles", "Id", @abstr_number ); db.Delete("Articles", "ArticleKey", "ART- @abstr_number "); `

Plus much much @abstr_hyperlink .

## Contributing

PetaPoco welcomes input from the community. After all, what is a product without users? If you’d like to contribute, please take the time to read [the contribution guide]. We would also suggest you have a quick read of [Contributing to Open Source on GitHub].

## Contributions Honour Roll

A product like PetaPoco isn't the effort of one person, but rather a combined effort of many. For those individuals who rise above and beyond [we have a special place to honour them].
