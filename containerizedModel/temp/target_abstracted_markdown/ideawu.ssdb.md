# SSDB - A fast NoSQL database for storing big list of data

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

SSDB is a high performace key-value(key-string, key-zset, key-hashmap) NoSQL database, __an alternative to Redis__.

SSDB is stable, production-ready and is widely used by many Internet companies including QIHU @abstr_number .

## Features

  * LevelDB client-server support, written in C/C++
  * Designed to store collection data
  * Persistent key-value, key-zset, key-map('hashmap') storage
  * Redis clients are supported
  * Client API supports including C++, PHP, Python, Cpy, Java, nodejs, Ruby, Go( @abstr_hyperlink )
  * Persistent queue service
  * **Replication(master-slave), load balance**
  * GUI administration tool( @abstr_hyperlink )
  * Built-in CLI nagios self-checks



## PHP client API example

@abstr_code_section 

@abstr_hyperlink 

## Who's using SSDB?

@abstr_image 

@abstr_hyperlink 

## Documentation

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Compile and Install

@abstr_code_section 

See @abstr_hyperlink 

## Performance

### Typical performance

Total @abstr_number requests.

@abstr_code_section 

### SSDB vs Redis

@abstr_image 

@abstr_hyperlink 

### Concurrency benchmark

@abstr_code_section 

Run on a @abstr_number MacBook Pro @abstr_number inch with Retina display.

## Architecture

@abstr_image 

## Windows executable

Download ssdb-server.exe from here: https://github.com/ideawu/ssdb-bin

## SSDB library for iOS
    
    
    make ios
    # ls ios/
    include/ libleveldb-ios.a libsnappy-ios.a libssdb-ios.a libutil-ios.a
    

Drag the static libraies files into your iOS project. Then add `ios/include` to your iOS project's __Header Search Paths__, which is set in __Build Settings__.

## Links

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Changes made to LevelDB

See @abstr_hyperlink 

## LICENSE

SSDB is licensed under @abstr_hyperlink , a very flexible license to use.

## Authors

@ideawu

## Thanks

  * 刘建辉, liujianhui@gongchang.com
  * wendal(陈镇铖), wendal @abstr_number @gmail.com, http://wendal.net 


