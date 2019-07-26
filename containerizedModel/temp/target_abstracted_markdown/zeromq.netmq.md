@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

NetMQ is a @abstr_number % native C# port of the lightweight messaging library ZeroMQ.

NetMQ extends the standard socket interfaces with features traditionally provided by specialised messaging middleware products. NetMQ sockets provide an abstraction of asynchronous message queues, multiple messaging patterns, message filtering (subscriptions), seamless access to multiple transport protocols, and more.

## Installation

You can download NetMQ via @abstr_hyperlink .

## Versions

Currently two versions are maintained Version @abstr_number which is the stable version of NetMQ and version @abstr_number , version @abstr_number is same as version @abstr_number without obsolete code. You can find both version on Nuget, for more information read the @abstr_hyperlink .

This repository is for version @abstr_number , for version @abstr_number go to: https://github.com/NetMQ/NetMQ @abstr_number -x.

## Using / Documentation

Before using NetMQ, make sure to read the @abstr_hyperlink .

The NetMQ documentation can be found at @abstr_hyperlink . Thanks to @abstr_hyperlink who agreed to do the documentation.

You can find NetMQ samples contributed by various users here: https://github.com/NetMQ/Samples

There are also a few blog posts available, which you can read about here:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Here is a simple example:

@abstr_code_section 

## Contributing

@abstr_hyperlink @abstr_hyperlink 

We need help, so if you have good knowledge of C# and ZeroMQ just grab one of the issues and add a pull request. We are using @abstr_hyperlink , so make sure you read this before.

Regarding coding standards, we are using C# coding styles, to be a little more specific: we are using `camelCase` for variables and fields (with `m_` prefix for instance members and `s_` for static fields) and `PascalCase` for methods, classes and constants. Make sure you are using 'Insert Spaces' and @abstr_number for tab and indent size.

You can also help us by:

  * Joining our @abstr_hyperlink and be an active member
  * Writing tutorials in the github wiki
  * Writing about the project in your blog (and add a pull request with a link to your blog at the bottom of this page)



## Consulting and Support

Name | Email | Website | Info \-----|-------|---------|----- Doron Somech | somdoron@gmail.com | http://somdoron.com | Founder and maintainer of NetMQ, expertise in Fintech and high performance scalable systems.

If you are providing support and consulting for NetMQ please make a pull request and add yourself to the list.

## Important note on backward compatibility

Since version @abstr_number . @abstr_number . @abstr_number NetMQ changed the number serialization from Little Endian to Big Endian to be compatible with ZeroMQ. Any NetMQ version prior to @abstr_number . @abstr_number . @abstr_number . @abstr_number is not compatible with the new version. To support older versions you can set Endian option on a NetMQ socket to Little Endian, however doing so will make it incompatible with ZeroMQ.

We recommend to update to the latest version and use Big Endian which is now the default behavior.

## Mailing list

You can join our mailing list @abstr_hyperlink . 

## Who owns NetMQ?

NetMQ is owned by all its authors and contributors. This is an open source project licensed under the LGPLv @abstr_number . To contribute to NetMQ please read the @abstr_hyperlink , it's what we use. There are open issues in the issues tab that still need to be taken care of, feel free to pick one up and submit a patch to the project.

## Build Server

@abstr_hyperlink 

@abstr_image 

@abstr_hyperlink 

@abstr_hyperlink 
