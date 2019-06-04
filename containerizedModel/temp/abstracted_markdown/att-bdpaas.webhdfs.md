# webhdfs - A client library implementation for Hadoop WebHDFS, and HttpFs, for Ruby

The webhdfs gem is to access Hadoop WebHDFS (EXPERIMENTAL: and HttpFs). WebHDFS::Client is a client class, and WebHDFS::FileUtils is utility like 'fileutils'.

## Installation
    
    
    gem install webhdfs
    

## Usage

### WebHDFS::Client

For client object interface:
    
    
    require 'webhdfs'
    client = WebHDFS::Client.new(hostname, port)
    # or with pseudo username authentication
    client = WebHDFS::Client.new(hostname, port, username)
    

To create/append/read files:
    
    
    client.create('/path/to/file', data)
    client.create('/path/to/file', data, :overwrite => false, :blocksize =>  @abstr_number , :replication =>  @abstr_number , :permission =>  @abstr_number )
    
    #This does not require whole data in memory, and it can be read chunk by chunk, ex: File data
    client.create('/path/to/file', file_IO_handle, :overwrite => false, :permission =>  @abstr_number )
    
    client.append('/path/to/existing/file', data)
    
    client.read('/path/to/target') #=> data
    client.read('/path/to/target' :offset =>  @abstr_number , :length =>  @abstr_number ) #=> data
    

To mkdir/rename/delete directories or files:
    
    
    client.mkdir('/hdfs/dirname')
    client.mkdir('/hdfs/dirname', :permission =>  @abstr_number )
    
    client.rename(original_path, dst_path)
    
    client.delete(path)
    client.delete(dir_path, :recursive => true)
    

To get status or list of files and directories:
    
    
    client.stat(file_path) #=> key-value pairs for file status
    client.list(dir_path)  #=> list of key-value pairs for files in dir_path
    

And, 'content_summary', 'checksum', 'homedir', 'chmod', 'chown', 'replication' and 'touch' methods available.

For known errors, automated retries are available. Set `retry_known_errors` option as true.
    
    
    #### To retry for LeaseExpiredException automatically
    client.retry_known_errors = true
    
    # client.retry_interval =  @abstr_number  # [sec], default:  @abstr_number 
    # client.retry_times =  @abstr_number  # [times], default:  @abstr_number
    

### WebHDFS::FileUtils
    
    
    require 'webhdfs/fileutils'
    WebHDFS::FileUtils.set_server(host, port)
    # or
    WebHDFS::FileUtils.set_server(host, port, username, doas)
    
    WebHDFS::FileUtils.copy_from_local(localpath, hdfspath)
    WebHDFS::FileUtils.copy_to_local(hdfspath, localpath)
    
    WebHDFS::FileUtils.append(path, data)
    

### For HttpFs

For HttpFs instead of WebHDFS:
    
    
    client = WebHDFS::Client.new('hostname',  @abstr_number )
    client.httpfs_mode = true
    
    client.read(path) #=> data
    
    # or with webhdfs/filetuils
    WebHDFS::FileUtils.set_server('hostname',  @abstr_number )
    WebHDFS::FileUtils.set_httpfs_mode
    WebHDFS::FileUtils.copy_to_local(remote_path, local_path)
    

### For HTTP Proxy servers
    
    
    client = WebHDFS::Client.new('hostname',  @abstr_number , 'proxy.server.local',  @abstr_number )
    client.proxy_user = 'jack'   # if needed
    client.proxy_pass = 'secret' # if needed
    

### For SSL

Note that net/https and openssl libraries must be available:
    
    
    client = WebHDFS::Client.new('hostname',  @abstr_number )
    client.ssl = true
    client.ssl_ca_file = "/path/to/ca_file.pem" # if needed
    client.ssl_varify_mode = :peer # if needed (:none or :peer)
    

### For Kerberos Authentication

Note that @abstr_hyperlink library must be available:
    
    
    client = WebHDFS::Client.new('hostname',  @abstr_number )
    client.kerberos = true
    

## AUTHORS

  * Kazuki Ohta @abstr_hyperlink 
  * TAGOMORI Satoshi @abstr_hyperlink 



## LICENSE

  * Copyright: Copyright (c) @abstr_number - Fluentd Project
  * License: Apache License, Version @abstr_number . @abstr_number 


