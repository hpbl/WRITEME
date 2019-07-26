# MassTransit

MassTransit is a _free, open-source_ distributed application framework for .NET. MassTransit makes it easy to create applications and services that leverage message-based, loosely-coupled asynchronous communication for higher availability, reliability, and scalability.

@abstr_image 

MassTransit is Apache @abstr_number . @abstr_number licensed.

## Build Status

Branch | Status \--- | :---: master | @abstr_hyperlink develop | @abstr_hyperlink 

## MassTransit Nuget Packages

| Package Name | FullFramework | .NET Standard | | ------------ | :-----------: | :-----------: | | **Main** | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | **Other** | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | - | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | **Containers** | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | **Loggers** | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | **Monitoring** | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number | @abstr_number . @abstr_number | | **Persistence** | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | - | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | - | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | **Transports** | | @abstr_hyperlink | @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number . @abstr_number | - | | @abstr_hyperlink | @abstr_number . @abstr_number | @abstr_number . @abstr_number | | @abstr_hyperlink | @abstr_number . @abstr_number | - | | @abstr_hyperlink | - | @abstr_number . @abstr_number | | @abstr_hyperlink | - | @abstr_number . @abstr_number |

## Getting started with MassTransit

In order to get started with MassTransit, you can have a look at the documentation, which is located at @abstr_hyperlink .

### Simplest possible thing:

`install-package MassTransit.RabbitMq`

and then:

@abstr_code_section 

You will also need to set up RabbitMQ; 

@abstr_number . **Install Erlang** using the @abstr_hyperlink . (Next - > Next ...) @abstr_number . **Install RabbitMQ** using the @abstr_hyperlink . (Next - > Next ...) You now have a RabbitMQ broker (look in `services.msc` for it) that you can @abstr_hyperlink using `guest`, `guest`. You can see message rates, routings and active consumers using this interface. 

**Please note**

You need to add the management interface before you can login. First, from an elevated command prompt, change directory to the sbin folder within the RabbitMQ Server installation directory e.g. `%PROGRAMFILES%\RabbitMQ Server\rabbitmq_server_ @abstr_number . @abstr_number . @abstr_number \sbin\`

Next, run the following command to enable the rabbitmq management plugin:

`rabbitmq-plugins.bat enable rabbitmq_management`

### Downloads

Download from NuGet 'MassTransit' @abstr_hyperlink 

Download the continuously integrated Nuget packages from @abstr_hyperlink .

### Supported transports

We support RabbitMQ and Azure Service Bus message brokers.

## Mailing list

@abstr_hyperlink 

## Gitter Chat

While attendance is pretty light, there is a Gitter chat room available:

@abstr_hyperlink 

## GitHub Issues

**Pay attention**

Please do not open an issue on github, unless you have spotted an actual bug in MassTransit. If you are unsure, ask on the mailing list, and if we confirm it's a bug, we'll ask you to create the issue. Issues are not the place for questions, and they'll likely be closed.

This policy is in place to avoid bugs being drowned out in a pile of sensible suggestions for future enhancements and calls for help from people who forget to check back if they get it and so on.

## Building from Source

@abstr_number . Install the latest @abstr_hyperlink preview. @abstr_number . Clone the source down to your machine.  
@abstr_code_section @abstr_number . Run `build.ps @abstr_number` or `build.sh`.

## Contributing

@abstr_number . Turn off `autocrlf`. @abstr_code_section @abstr_number . Hack! @abstr_number . Make a pull request.

## Builds

MassTransit is built on @abstr_hyperlink 

# REQUIREMENTS

  * .Net @abstr_number . @abstr_number . @abstr_number or .NET Standard @abstr_number . @abstr_number 



# CREDITS

Logo Design by @abstr_hyperlink 
