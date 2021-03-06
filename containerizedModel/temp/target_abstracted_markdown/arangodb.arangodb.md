@abstr_image 

# ArangoDB

Slack: @abstr_hyperlink 

ArangoDB is a multi-model, open-source database with flexible data models for documents, graphs, and key-values. Build high performance applications using a convenient SQL-like query language or JavaScript extensions. Use ACID transactions if you require them. Scale horizontally with a few mouse clicks.

The supported data models can be mixed in queries and allow ArangoDB to be the aggregation point for your data.

To get started, try one of our @abstr_number minutes @abstr_hyperlink in your favorite programming language or try one of our @abstr_hyperlink .

For the impatient: @abstr_hyperlink and install ArangoDB. Start the server `arangod` and point your browser to `http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /`.

## Key Features in ArangoDB

  * **Multi-Model** : Documents, graphs and key-value pairs — model your data as you see fit for your application.
  * **Joins** : Conveniently join what belongs together for flexible ad-hoc querying, less data redundancy.
  * **Transactions** : Easy application development keeping your data consistent and safe. No hassle in your client.



Here is an AQL query that makes use of all those features:

@abstr_image 

Joins and transactions are key features for flexible, secure data designs, widely used in relational databases but lacking in many NoSQL products. However, there is no need to forgo them in ArangoDB. You decide how and when to use joins and strong consistency guarantees, without sacrificing performance and scalability. 

Furthermore, ArangoDB offers a JavaScript framework called @abstr_hyperlink that is executed in the database server with direct access to the data. Build your own data-centric microservices with a few lines of code:

Microservice Example

@abstr_image 

By extending the HTTP API with user code written in JavaScript, ArangoDB can be turned into a strict schema-enforcing persistence engine.

Next step, bundle your Foxx application as a @abstr_hyperlink and get it running in the cloud.

Other features of ArangoDB include:

  * Use a **data-centric microservices** approach with ArangoDB Foxx and fuse your application-logic and database together for maximal throughput
  * JavaScript for all: **no language zoo** , you can use one language from your browser to your back-end
  * **Flexible data modeling** : model your data as combination of key-value pairs, documents or graphs - perfect for social relations
  * Different **storage engines** : ArangoDB provides a storage engine for mostly in-memory operations and an alternative storage engine based on RocksDB which handle datasets that are much bigger than RAM.
  * **Powerful query language** (AQL) to retrieve and modify data 
  * **Transactions** : run queries on multiple documents or collections with optional transactional consistency and isolation
  * **Replication** and **Sharding** : set up the database in a master-slave configuration or spread bigger datasets across multiple servers
  * Configurable **durability** : let the application decide if it needs more durability or more performance
  * **Schema-free schemata** let you combine the space efficiency of MySQL with the performance power of NoSQL
  * Free **index choice** : use the correct index for your problem, be it a skiplist or a fulltext search
  * ArangoDB is **multi-threaded** \- exploit the power of all your cores
  * It is **open source** (Apache License @abstr_number . @abstr_number )



For more in-depth information read the @abstr_hyperlink 

## Latest Release

Packages for all supported platforms can be downloaded from @abstr_hyperlink .

Please also check @abstr_hyperlink .

## More Information

Please check the @abstr_hyperlink for installation and compilation instructions.

The @abstr_hyperlink has an introductory chapter showing the basic operations of ArangoDB.

## Stay in Contact

We really appreciate feature requests and bug reports. Please use our Github issue tracker for reporting them:

@abstr_hyperlink 

You can use our Google group for improvements, feature requests, comments:

@abstr_hyperlink 

StackOverflow is great for questions about AQL, usage scenarios etc.

@abstr_hyperlink 

To chat with the community and the developers we offer a Slack chat:

@abstr_hyperlink 
