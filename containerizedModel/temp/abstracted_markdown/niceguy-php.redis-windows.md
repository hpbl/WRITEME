# Redis on Windows

This project contains the binary releases of MS Open Tech redis port of windows as well as a vagrant configuration for redis letting you run the native version of Redis in a Virtual Box VM.

Whilst it's recommended to use @abstr_hyperlink on Linux in production, it is often useful for developers on Windows platforms to have their own local version of redis running to develop with. 

The @abstr_number most popular ways of running redis on windows is to use the binary releases of @abstr_hyperlink , but as this is an unofficial port it always lags behind the latest official development of redis on linux/OSX. 

Thanks to @abstr_hyperlink you can also run the latest linux version inside a Virutal Box Linux VM, which as it lets you run the official native version of redis, is our preferred approach:

## Running the latest version of Redis with Vagrant

#### @abstr_number . @abstr_hyperlink 

#### @abstr_number . Download the @abstr_hyperlink vagrant configuration
    
    
    wget https://raw.github.com/ServiceStack/redis-windows/master/downloads/vagrant-redis.zip
    

#### @abstr_number . Extract `vagrant-redis.zip` in any folder, e.g. in `c:\vagrant-redis`

#### @abstr_number . Launch the Virtual Box VM with `vagrant up`
    
    
    cd c:\vagrant-redis
    vagrant up
    

This will launch a new Ubuntu VM instance inside Virtual Box that will automatically install and start the latest stable version of redis.

_The vagrant configuration was originally from @abstr_hyperlink and has been modified to use the latest stable release of Redis._

## Running Microsoft's native port of Redis

These @abstr_number -bit binary releases are created by building the @abstr_hyperlink which have also been published on @abstr_hyperlink , but as it's more convenient we provide a zip of the @abstr_number -bit binaries here.

#### MS Open Announcements

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



### Current Version: @abstr_number . @abstr_number . @abstr_number r @abstr_number (July @abstr_number , @abstr_number )

#### @abstr_number . Download the @abstr_hyperlink native @abstr_number bit Windows port of redis
    
    
    wget https://raw.github.com/ServiceStack/redis-windows/master/downloads/redis @abstr_number -latest.zip
    

#### @abstr_number . Extract `redis @abstr_number -latest.zip` in any folder, e.g. in `c:\redis`

#### @abstr_number . Run the `redis-server.exe` using the local configuration
    
    
    cd c:\redis
    redis-server.exe redis.conf
    

#### @abstr_number . Run `redis-cli.exe` to connect to your redis instance
    
    
    cd c:\redis
    redis-cli.exe
    

#### @abstr_number . Start playing with redis :)
    
    
    redis  @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number > SET foo bar
    OK
    redis  @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number > KEYS *
     @abstr_number ) "foo"
    redis  @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number > GET foo
    "bar"
    redis  @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number >
    

* * *

The MSOpenTech of Redis adds some useful extensions for better integration with Windows:

#### Running Redis as a Service

In order to better integrate with the Windows Services model, new command line arguments have been introduced to Redis. These service arguments require an elevated user context in order to connect to the service control manager. If these commands are invoked from a non-elevated context, Redis will attempt to create an elevated context in which to execute these commands. This will cause a User Account Control dialog to be displayed by Windows and may require Administrative user credentials in order to proceed.

#### Installing the Service
    
    
    --service-install
    

This must be the first argument on the redis-server command line. Arguments after this are passed in the order they occur to Redis when the service is launched. The service will be configured as Autostart and will be launched as "NT AUTHORITY\NetworkService". Upon successful installation a success message will be displayed and Redis will exit. This command does not start the service.

For instance:
    
    
    redis-server --service-install redis.windows.conf --loglevel verbose
    

#### Uninstalling the Service
    
    
    --service-uninstall
    

This will remove the Redis service configuration information from the registry. Upon successful uninstallation a success message will be displayed and Redis will exit. This does command not stop the service. 

For instance:
    
    
    redis-server --service-uninstall
    

#### Starting the Service
    
    
    --service-start
    

This will remove the Redis service configuration information from the registry. Upon successful uninstallation a success message will be displayed and Redis will exit.

For instance: 
    
    
    redis-server --service-start
    

#### Stopping the Service
    
    
    --service-stop
    

This will stop the Redis service. Upon successful termination a success message will be displayed and Redis will exit.

For instance:
    
    
    redis-server --service-stop
    

#### Naming the Service
    
    
    --service-name name
    

This optional argument may be used with any of the preceding commands to set the name of the installed service. This argument should follow the service-install, service-start, service-stop or service-uninstall commands, and precede any arguments to be passed to Redis via the service-install command. The following would install and start three separate instances of Redis as a service:
    
    
    redis-server --service-install –service-name redisService @abstr_number  –port  @abstr_number 
    redis-server --service-start –service-name redisService @abstr_number 
    redis-server --service-install –service-name redisService @abstr_number  –port  @abstr_number 
    redis-server --service-start –service-name redisService @abstr_number 
    redis-server --service-install –service-name redisService @abstr_number  –port  @abstr_number 
    redis-server --service-start –service-name redisService @abstr_number
    

##  @abstr_hyperlink 

@abstr_hyperlink 

See the @abstr_hyperlink for a quick way to setup up the minimal @abstr_hyperlink including start/stop scripts for instantly running multiple redis instances on a single (or multiple) Windows, OSX or Linux servers. 

##  @abstr_hyperlink 

Redis React is a simple user-friendly UI for browsing data in Redis servers which takes advantages of the complex type conventions built in the ServiceStack.Redis Client to provide a rich, human-friendly UI for navigating related datasets, enabling a fast and fluid browsing experience for your Redis servers.

####  @abstr_hyperlink 

@abstr_hyperlink 

#### Windows, OSX and Linux downloads available from @abstr_hyperlink 
