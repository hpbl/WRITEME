# SSH.NET

SSH.NET is a Secure Shell (SSH- @abstr_number ) library for .NET, optimized for parallelism.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Introduction

This project was inspired by **Sharp.SSH** library which was ported from java and it seems like was not supported for quite some time. This library is a complete rewrite, without any third party dependencies, using parallelism to achieve the best performance possible.

## Features

  * Execution of SSH command using both synchronous and asynchronous methods
  * Return command execution exit status and other information 
  * Provide SFTP functionality for both synchronous and asynchronous operations
  * Provides SCP functionality
  * Provide status report for upload and download sftp operations to allow accurate progress bar implementation 
  * Remote, dynamic and local port forwarding 
  * Shell/Terminal implementation
  * Specify key file pass phrase
  * Use multiple key files to authenticate 
  * Supports @abstr_number des-cbc, aes @abstr_number -cbc, aes @abstr_number -cbc, aes @abstr_number -cbc, aes @abstr_number -ctr, aes @abstr_number -ctr, aes @abstr_number -ctr, blowfish-cbc, cast @abstr_number -cbc, arcfour and twofish encryptions
  * Supports publickey, password and keyboard-interactive authentication methods 
  * Supports RSA and DSA private key 
  * Supports DES-EDE @abstr_number -CBC, DES-EDE @abstr_number -CFB, DES-CBC, AES- @abstr_number -CBC, AES- @abstr_number -CBC and AES- @abstr_number -CBC algorithms for private key encryption
  * Supports two-factor or higher authentication
  * Supports SOCKS @abstr_number , SOCKS @abstr_number and HTTP Proxy



## Key Exchange Method

**SSH.NET** supports the following key exchange methods: * diffie-hellman-group-exchange-sha @abstr_number * diffie-hellman-group-exchange-sha @abstr_number * diffie-hellman-group @abstr_number -sha @abstr_number * diffie-hellman-group @abstr_number -sha @abstr_number 

## Message Authentication Code

**SSH.NET** supports the following MAC algorithms: * hmac-md @abstr_number * hmac-md @abstr_number - @abstr_number * hmac-sha @abstr_number * hmac-sha @abstr_number - @abstr_number * hmac-sha @abstr_number - @abstr_number * hmac-sha @abstr_number - @abstr_number - @abstr_number * hmac-sha @abstr_number - @abstr_number * hmac-sha @abstr_number - @abstr_number - @abstr_number * hmac-ripemd @abstr_number * hmac-ripemd @abstr_number @openssh.com

## Framework Support

**SSH.NET** supports the following target frameworks: * .NET Framework @abstr_number . @abstr_number * .NET Framework @abstr_number . @abstr_number (and higher) * .NET Standard @abstr_number . @abstr_number * Silverlight @abstr_number * Silverlight @abstr_number * Windows Phone @abstr_number . @abstr_number * Windows Phone @abstr_number . @abstr_number * Universal Windows Platform @abstr_number 

## Usage

### Multi-factor authentication

Establish a SFTP connection using both password and public-key authentication:

@abstr_code_section 

### Verify host identify

Establish a SSH connection using user name and password, and reject the connection if the fingerprint of the server does not match the expected fingerprint:

@abstr_code_section 

## Building SSH.NET

Software | net @abstr_number | net @abstr_number | netstandard @abstr_number . @abstr_number | sl @abstr_number | sl @abstr_number | wp @abstr_number | wp @abstr_number | uap @abstr_number . @abstr_number | \--------------------------------- | :---: | :---: | :------------: | :-: | :-: | :--: | :-: | :-----: | Windows Phone SDK @abstr_number . @abstr_number | | | | x | x | x | x | Visual Studio @abstr_number Update @abstr_number | x | x | | x | x | x | x | Visual Studio @abstr_number Update @abstr_number | x | x | | | x | | x | x Visual Studio @abstr_number | | x | x | | | | | 

@abstr_hyperlink 
