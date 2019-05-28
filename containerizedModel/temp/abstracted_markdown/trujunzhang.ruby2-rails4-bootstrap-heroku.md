# Rails Starter App

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink 

This is a starter web application based on the following technology stack:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Starter App is deployable on @abstr_hyperlink . Demo: http://ruby @abstr_number -rails @abstr_number -bootstrap-heroku.herokuapp.com/

`Gemfile` also contains a set of useful gems for performance, security, api building...

### Thread safety

We assume that this application is thread safe. If your application is not thread safe or you don't know, please set the minimum and maximum number of threads usable by puma on heroku to @abstr_number :

@abstr_code_section 

### Heroku Platform API

This application supports fast setup and deploy via @abstr_hyperlink :

@abstr_code_section 

More information: @abstr_hyperlink 

### Recommended add-ons

Heroku's @abstr_hyperlink recommends the use of the following add-ons, here in the free version:

@abstr_code_section 

### Secrets.yml

Rails @abstr_number . @abstr_number . @abstr_number introduced @abstr_hyperlink . Heroku automatically sets a proper configuration variable in new applications. Just in case you need, the command line is:

@abstr_code_section 

**NOTE** : If you need to migrate old cookies, please read the above guide.

### Tuning Ruby's RGenGC

Generational GC (called RGenGC) was introduced from Ruby @abstr_number . @abstr_number . @abstr_number . RGenGC reduces marking time dramatically (about x @abstr_number faster). However, RGenGC introduce huge memory consumption. This problem has impact especially for small memory machines.

Ruby @abstr_number . @abstr_number . @abstr_number introduced new environment variable RUBY_GC_HEAP_OLDOBJECT_LIMIT_FACTOR to control full GC timing. By setting this variable to a value lower than the default of @abstr_number (we are using the suggested value of @abstr_number . @abstr_number ) you can indirectly force the garbage collector to perform more major GCs, which reduces heap growth.

@abstr_code_section 

More information: @abstr_hyperlink 

### Nitrous.IO

Starter App supports online development on @abstr_hyperlink .

You need: * A Nitrous.IO box with **at least** @abstr_number MB of memory. * Two "Dev Plan" heroku databases (one for development and one for test) * The following environment variables on your Nitrous.IO box's `.bashrc`: @abstr_code_section 

A guide for creating heroku databases and edit `.bashrc` on Nitrous.IO is available here: http://help.nitrous.io/postgres/
