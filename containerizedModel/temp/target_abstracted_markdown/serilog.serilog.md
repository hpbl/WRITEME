# Serilog @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Serilog is a diagnostic logging library for .NET applications. It is easy to set up, has a clean API, and runs on all recent .NET platforms. While it's useful even in the simplest applications, Serilog's support for structured logging shines when instrumenting complex, distributed, and asynchronous applications and systems.

@abstr_hyperlink 

Like many other libraries for .NET, Serilog provides diagnostic logging to @abstr_hyperlink , the @abstr_hyperlink , and @abstr_hyperlink .

@abstr_code_section 

Unlike other logging libraries, Serilog is built from the ground up to record _structured event data_.

@abstr_code_section 

Serilog uses @abstr_hyperlink , a simple DSL that extends .NET format strings with _named_ as well as positional parameters. Instead of formatting events immediately into text, Serilog captures the values associated with each named parameter.

The example above records two properties, `Position` and `Elapsed`, in the log event. The `@` operator in front of `Position` tells Serilog to _serialize_ the object passed in, rather than convert it using `ToString()`. Serilog's deep and rich support for structured event data opens up a huge range of diagnostic possibilities not available when using traditional loggers.

Rendered into @abstr_hyperlink for example, these properties appear alongside the timestamp, level, and message like:

@abstr_code_section 

Back-ends that are capable of recording structured event data make log searches and analysis possible without log parsing or regular expressions.

Supporting structured data doesn't mean giving up text: when Serilog writes events to files or the console, the template and properties are rendered into friendly human-readable text just like a traditional logging library would produce:

@abstr_code_section 

> **Upgrading from Serilog @abstr_number .x?** Check out the @abstr_hyperlink and @abstr_hyperlink .

### Features

  * **Community-backed and actively developed**
  * Format-based logging API with familiar @abstr_hyperlink like `Debug`, `Information`, `Warning`, `Error`, and so-on
  * Discoverable C# configuration syntax and optional @abstr_hyperlink or @abstr_hyperlink configuration support
  * Efficient when enabled, extremely low overhead when a logging level is switched off
  * Best-in-class .NET Core support, including a @abstr_hyperlink 
  * Support for a @abstr_hyperlink , including files, the console, on-premises and cloud-based log servers, databases, and message queues
  * Sophisticated @abstr_hyperlink of log events with contextual information, including scoped (`LogContext`) properties, thread and process identifiers, and domain-specific correlation ids such as `HttpRequestId`
  * Zero-shared-state `Logger` objects, with an optional global static `Log` class
  * Format-agnostic logging pipeline that can emit events in plain text, JSON, in-memory `LogEvent` objects (including @abstr_hyperlink ) and other formats



### Getting started

Serilog is installed from NuGet. To view log events, one or more sinks need to be installed as well, here we'll use the pretty-printing console sink, and a rolling file set:

@abstr_code_section 

The simplest way to set up Serilog is using the static `Log` class. A `LoggerConfiguration` is used to create and assign the default logger.

@abstr_code_section 

Find more, including a runnable example application, under the @abstr_hyperlink in the @abstr_hyperlink .

### Getting help

To learn more about Serilog, check out the @abstr_hyperlink - you'll find information there on the most common scenarios. If Serilog isn't working the way you expect, you may find the @abstr_hyperlink useful.

Serilog has an active and helpful community who are happy to help point you in the right direction or work through any issues you might encounter. You can get in touch via:

  * @abstr_hyperlink - this is the best place to start if you have a question
  * Our @abstr_hyperlink here on GitHub
  * @abstr_hyperlink 
  * The @abstr_hyperlink 
  * @abstr_hyperlink 



### Contributing

Would you like to help make Serilog even better? We keep a list of issues that are approachable for newcomers under the @abstr_hyperlink label. Before starting work on a pull request, we suggest commenting on, or raising, an issue on the issue tracker so that we can help and coordinate efforts. For more details check out our contributing guide.

When contributing please keep in mind our Code of Conduct.

### Detailed build status

Branch | AppVeyor \------------- | ------------- dev | @abstr_hyperlink master | @abstr_hyperlink 

_Serilog is copyright © @abstr_number - @abstr_number Serilog Contributors - Provided under the @abstr_hyperlink . Needle and thread logo a derivative of work by @abstr_hyperlink ._
