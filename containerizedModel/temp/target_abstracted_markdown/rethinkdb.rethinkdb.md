@abstr_image 

#  @abstr_hyperlink 

## What is RethinkDB?

  * **Open-source** database for building realtime web applications
  * **NoSQL** database that stores schemaless JSON documents
  * **Distributed** database that is easy to scale
  * **High availability** database with automatic failover and robust fault tolerance



RethinkDB is the first open-source scalable database built for realtime applications. It exposes a new database access model -- instead of polling for changes, the developer can tell the database to continuously push updated query results to applications in realtime. RethinkDB allows developers to build scalable realtime apps in a fraction of the time with less effort.

To learn more, check out @abstr_hyperlink .

Not sure what types of projects RethinkDB can help you build? Here are a few examples:

  * Build a @abstr_hyperlink with RethinkDB and PubNub
  * Create a @abstr_hyperlink 
  * Build an @abstr_hyperlink with RethinkDB changefeeds
  * Look at @abstr_hyperlink 
  * Watch @abstr_hyperlink to educate



## Quickstart

For a thirty-second RethinkDB quickstart, check out @abstr_hyperlink .

Or, get started right away with our ten-minute guide in these languages:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Besides our four official drivers, we also have many @abstr_hyperlink supported by the RethinkDB community. Here's a few:

  * **C#/.NET:** @abstr_hyperlink , @abstr_hyperlink 
  * **C++:** @abstr_hyperlink 
  * **Clojure:** @abstr_hyperlink 
  * **Elixir:** @abstr_hyperlink 
  * **Go:** @abstr_hyperlink 
  * **Haskell:** @abstr_hyperlink 
  * **PHP:** @abstr_hyperlink 
  * **Rust:** @abstr_hyperlink 
  * **Scala:** @abstr_hyperlink 



Looking to explore what else RethinkDB offers or the specifics of ReQL? Check out @abstr_hyperlink and @abstr_hyperlink .

## Building

First install some dependencies. For example, on Ubuntu or Debian:
    
    
    sudo apt-get install build-essential protobuf-compiler python \
        libprotobuf-dev libcurl @abstr_number -openssl-dev libboost-all-dev \
        libncurses @abstr_number -dev libjemalloc-dev wget m @abstr_number  g++ libssl-dev
    

Generally, you will need

  * GCC or Clang
  * Protocol Buffers
  * jemalloc
  * Ncurses
  * Boost
  * Python @abstr_number 
  * libcurl
  * libcrypto (OpenSSL)
  * libssl-dev



Then, to build:
    
    
    ./configure --allow-fetch
    # or run ./configure --allow-fetch CXX=clang++
    
    make -j @abstr_number 
    # or run make -j @abstr_number  DEBUG= @abstr_number 
    
    sudo make install
    # or run ./build/debug_clang/rethinkdb
    

## Need help?

A great place to start is @abstr_hyperlink . Here you can find out how to ask us questions, reach out to us, or @abstr_hyperlink . You'll be able to find all the places we frequent online and at which conference or meetups you might be able to meet us next.

If you need help right now, you can also find us @abstr_hyperlink , @abstr_hyperlink , or IRC at #rethinkdb on Freenode.

**Join us now:** @abstr_hyperlink 

## Contributing

RethinkDB was built by a dedicated team, but it wouldn't have been possible without the support and contributions of hundreds of people from all over the world. We could use your help too! Check out our contributing guidelines to get started.

## Donors

  * @abstr_hyperlink provides DNS services for the RethinkDB project.
  * @abstr_hyperlink sponsored the development of per-table configurable write aggregation including the ability to set write delay to infinite to create a memory-only table ( @abstr_hyperlink )



## Licensing

RethinkDB is licensed by the Linux Foundation under the open-source Apache @abstr_number . @abstr_number license. Portions of the software are licensed by Google and others and used with permission or subject to their respective license agreements.

## Where's the changelog?

We keep a list of changes and feature explanations here.
