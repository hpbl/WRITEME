# ShareDB

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

ShareDB is a realtime database backend based on @abstr_hyperlink of JSON documents. It is the realtime backend for the @abstr_hyperlink .

For questions, discussion and announcements, join the @abstr_hyperlink .

Please report any bugs you find to the @abstr_hyperlink .

## Features

  * Realtime synchronization of any JSON document
  * Concurrent multi-user collaboration
  * Synchronous editing API with asynchronous eventual consistency
  * Realtime query subscriptions
  * Simple integration with any database - @abstr_hyperlink 
  * Horizontally scalable with pub/sub integration - @abstr_hyperlink 
  * Projections to select desired fields from documents and operations
  * Middleware for implementing access control and custom extensions
  * Ideal for use in browsers or on the server
  * Reconnection of document and query subscriptions
  * Offline change syncing upon reconnection
  * In-memory implementations of database and pub/sub for unit testing



## Quick tour

@abstr_code_section 

## Data model

In ShareDB's view of the world, every document has @abstr_number properties:

  * **version** \- An incrementing number starting at @abstr_number 
  * **type** \- An OT type. OT types are defined in @abstr_hyperlink . Documents which don't exist implicitly have a type of `null`.
  * **data** \- The actual data that the document contains. This must be pure acyclic JSON. Its also type-specific. (JSON type uses raw JSON, text documents use a string, etc).



ShareDB implicitly has a record for every document you can access. New documents have version @abstr_number , a null type and no data. To use a document, you must first submit a _create operation_ , which will set the document's type and give it initial data. Then you can submit editing operations on the document (using OT). Finally you can delete the document with a delete operation. By default, ShareDB stores all operations forever - nothing is truly deleted.

## Operations

See https://github.com/ottypes/json @abstr_number for documentation of the supported operations.
