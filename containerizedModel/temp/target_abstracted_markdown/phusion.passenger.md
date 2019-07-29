@abstr_hyperlink 

#  @abstr_image Phusion Passenger

@abstr_hyperlink is a web server and application server, designed to be fast, robust and lightweight. It takes a lot of complexity out of deploying web apps, adds powerful enterprise-grade features that are useful in production, and makes administration much easier and less complex. Phusion Passenger supports Ruby, Python, Node.js and Meteor, and is being used by high-profile companies such as **Apple, Pixar, New York Times, AirBnB, Juniper** etc as well as @abstr_hyperlink .

@abstr_hyperlink   
_Phusion Passenger - the smart app server_

What makes Passenger so fast and reliable is its **C++** core, its **zero-copy** architecture, its **watchdog** system and its **hybrid** evented, multi-threaded and multi-process design.

## Fuse Panel - GUI for Passenger

The **smarter** and **simpler command center** for your applications. **@abstr_hyperlink** monitors your apps in near real-time, offers insights in your logs and enables analyzing and troubleshooting issues. New and exclusively available in the Fuse Panel is much-requested feature **per-application log viewing and splitting**.

Regardless of if you’re running Passenger open source or you’re one of our enterprise customers, the Fuse Panel is available for free while in beta. @abstr_hyperlink .

@abstr_image 

### Learn more:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



  
  
  
  
  


## Installation

Please follow @abstr_hyperlink .

### Installing the source directly from git

If you mean to install the latest version of Passenger directly from this git repository, then you should run one of the following commands. Installing from the git repository is basically the same as the tarball installation method, as @abstr_hyperlink , with one exception: you need to clone git submodules:
    
    
    git submodule update --init --recursive
    

After that, run one of the following:
    
    
    ./bin/passenger-install-apache @abstr_number -module
    

-OR-
    
    
    ./bin/passenger-install-nginx-module
    

-OR-
    
    
    # From your application directory
    ~/path-to-passenger/bin/passenger start
    

For troubleshooting, configuration and tips, please also refer to the above documentation. For further support, please refer to @abstr_hyperlink .

Ruby users can also build a gem from the Git repository and install the gem.
    
    
    gem build passenger.gemspec
    gem install passenger-x.x.x.gem
    

## Further reading

  * The `doc/` directory.
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Legal

"Passenger" and "Phusion Passenger" are registered trademarks of Phusion Holding B.V.
