# DoctrineEncryptBundle

Bundle allows to create doctrine entities with fields that will be protected with help of some encryption algorithm in database and it will be clearly for developer, because bundle is uses doctrine life cycle events

This is an fork from the original bundle created by vmelnik-ukrain (Many thanks to him) which can be found here: @abstr_hyperlink 

I improved several things, i make better use of the doctrine events. and it works with lazy loading (relationships)! This will be an long term project we will be working on with long-term support and backward compatibility. We are using this bundle in all our own symfony @abstr_number project. More about us can be found on our website. @abstr_hyperlink 

### What does it do exactly

It gives you the opportunity to add the @Encrypt annotation above each string property

@abstr_code_section 

The bundle uses doctrine his life cycle events to encrypt the data when inserted into the database and decrypt the data when loaded into your entity manager. It is only able to encrypt string values at the moment, numbers and other fields will be added later on in development.

### Advantages and disadvantaged of an encrypted database

#### Advantages

  * Information is stored safely
  * Not worrying about saving backups at other locations
  * Unreadable for employees managing the database



#### Disadvantages

  * Can't use ORDER BY on encrypted data
  * In SELECT WHERE statements the where values also have to be encrypted
  * When you lose your key you lose your data (Make a backup of the key on a safe location)



### Documentation

This bundle is responsible for encryption/decryption of the data in your database. All encryption/decryption work on the server side.

The following documents are available:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



### License

This bundle is under the MIT license. See the complete license in the bundle

### Versions

I'm using Semantic Versioning like described @abstr_hyperlink 

### Todos

The following items will be done in order

@abstr_number . ~~Review of complete code + fixes/improvements and inline documentation ( @abstr_number . @abstr_number . @abstr_number )~~ @abstr_number . ~~Add support for the other doctrine relationships (manyToMany, ManyToOne) ( @abstr_number . @abstr_number )~~ @abstr_number . ~~Recreate documentation ( @abstr_number . @abstr_number )~~ @abstr_number . ~~Create example code ( @abstr_number . @abstr_number )~~ @abstr_number . ~~Create an function to encrypt unencrypted database and vice versa (console command, migration, changed key, etc.) ( @abstr_number . @abstr_number )~~ @abstr_number . Look for a posibility of automatic encryption of query parameters ( @abstr_number . @abstr_number ) @abstr_number . Look for a posibility to override findOneBy for automatic encryption of parameters ( @abstr_number . @abstr_number ) @abstr_number . Add support to encrypt data by reference to other property as key (Encrypt data specific to user with user key etc.) ( @abstr_number . @abstr_number ) @abstr_number . Add @abstr_hyperlink for all data types @abstr_hyperlink ( @abstr_number . @abstr_number )
