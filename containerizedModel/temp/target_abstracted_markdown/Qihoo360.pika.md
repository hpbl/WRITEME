# Pika

@abstr_hyperlink 

## Introduction @abstr_hyperlink 

Pika is a persistent huge storage service , compatible with the vast majority of redis interfaces ( @abstr_hyperlink ), including string, hash, list, zset, set and management interfaces. With the huge amount of data stored, redis may suffer for a capacity bottleneck, and pika was born for solving it. Except huge storage capacity, pika also support master-slave mode by slaveof command, including full and partial synchronization. You can also use pika together with twemproxy or codis( _pika has supported data migration in codis，thanks @abstr_hyperlink and @abstr_hyperlink_ ) for distributed Redis solution

## UserList

@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
---|---|---|---  
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
  
@abstr_hyperlink 

## Feature

  * huge storage capacity
  * compatible with redis interface, you can migrate to pika easily
  * support master-slave mode (slaveof)
  * various @abstr_hyperlink interfaces



## For developer

### Releases

The User can download the binary release from @abstr_hyperlink or compile the source release.

### Dependencies

  * snappy - a library for fast data compression
  * glog - google log library



Upgrade your gcc to version at least @abstr_number . @abstr_number to get C++ @abstr_number support.

### Supported platforms

  * linux - Centos @abstr_number & @abstr_number 

  * linux - Ubuntu




If it comes to some missing libs, install them according to the prompts and retry it.

### Compile

Upgrade your gcc to version at least @abstr_number . @abstr_number to get C++ @abstr_number support.

Get the source code

@abstr_code_section 

Then compile pika, all submodules will be updated automatically.

@abstr_code_section 

## Usage

@abstr_code_section 

## Performance (provided by @abstr_hyperlink )

### test environment

**CPU module** ：Intel(R) Xeon(R) CPU E @abstr_number - @abstr_number v @abstr_number @ @abstr_number . @abstr_number GHz

**CPU threads** ： @abstr_number 

**MEMORY** ： @abstr_number G

**DISK** ： @abstr_number T flash

**NETWORK** ： @abstr_number GBase-T/Full * @abstr_number 

**OS** ：centos @abstr_number . @abstr_number 

### benchmark tools

@abstr_hyperlink 

### Test @abstr_number

#### Purpose

With different number of pika worker threads, we test pika's max QPS.

#### Condition

pika db_size : @abstr_number G

value : @abstr_number bytes

Threads are not bound to CPU cores.

#### Result

Description : Horizontal axis is the number of worker threads; Vertical axis is the QPS. The value size is @abstr_number bytes. set @abstr_number /get @abstr_number means @abstr_number % set and @abstr_number % get.

@abstr_image 

#### Conclusion

The best pika worker threads number is @abstr_number - @abstr_number .

### Test @abstr_number

#### Purpose

With the optimal worker threads number, we test pika's round-trip time.

#### Condition

**pika db_size** ： @abstr_number G

**value** ： @abstr_number bytes

#### Result

@abstr_code_section 

@abstr_code_section 

#### Conclusion

Both the @abstr_number . @abstr_number % get/set RTT are below @abstr_number ms.

### Test @abstr_number

#### Purpose

With the optimal worker threads number, we test the max qps of different commands.

#### Condition

**pika worker threads** ： @abstr_number 

**key count** ： @abstr_number 

**field count** ： @abstr_number （except list）

**value** ： @abstr_number bytes

**commands execute times** ： @abstr_number (except lrange)

#### Result

@abstr_code_section 

### Test @abstr_number

#### Purpose

Compare the pika max qps with the redis.

#### Condition

**pika worker threads** ： @abstr_number 

**key count** ： @abstr_number 

**field count** ： @abstr_number （except list）

**value** ： @abstr_number bytes

**commands execute times** ： @abstr_number (except lrange)

**Redis version** ： @abstr_number . @abstr_number . @abstr_number 

#### Result

@abstr_image 

## Documents

@abstr_number . @abstr_hyperlink 

## Contact Us

Mail: g-infra@ @abstr_number .cn

QQ group: @abstr_number 

For more information about Pika, Atlas and some other technology please pay attention to our Hulk platform official account

@abstr_image 
