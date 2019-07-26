# ﻿Reactive Extensions

Channel | Rx | Ix | \-------- | :------------: | :-------------: | Build | @abstr_hyperlink | @abstr_hyperlink NuGet.org | @abstr_hyperlink | @abstr_hyperlink MyGet  
( @abstr_hyperlink ) | @abstr_image   
@abstr_image | @abstr_image   
@abstr_image 

### Join the conversation

Catch us in the #rxnet channel over at http://reactiveui.net/slack

### Get nightly builds

  * NuGet v @abstr_number feed url (VS @abstr_number +): `https://dotnet.myget.org/F/rx/api/v @abstr_number /index.json`



## System.Linq.Async / System.Interactive.Async / System.Interactive

### v @abstr_number . @abstr_number changes

Ix Async @abstr_number . @abstr_number has a breaking change from prior versions due to being the first LINQ implementation to support the new C# @abstr_number @abstr_hyperlink feature. This means for .NET Standard @abstr_number . @abstr_number and .NET Core @abstr_number targets, we use the in-box interfaces for `IAsyncEnumerable<T>` and friends. On other platforms, we provide the implementation, so you can use `await foreach` and create async iterators as you would expect. The types will unify to the system ones where the platform provides it.

There are many breaking changes here; a full set of changenotes is on the way.

## System.Reactive

### v @abstr_number . @abstr_number changes

Due to the @abstr_hyperlink @abstr_hyperlink that fixing @abstr_hyperlink caused, we have refactored the libraries into a single library `System.Reactive`. To prevent breaking existing code that references the v @abstr_number libraries, we have facades with TypeForwarders to the new assembly. If you have a reference to a binary built against v @abstr_number . @abstr_number , then use the new `System.Reactive.Compatibility` package. 

#### Supported Platforms

Rx @abstr_number . @abstr_number supports the following platforms

  * .NET Framework @abstr_number . @abstr_number +
  * .NET Standard @abstr_number . @abstr_number + (including .NET Core, Xamarin and others)
  * UWP



Notably, Windows @abstr_number , Windows Phone @abstr_number and legacy PCL libraries are no longer supported. 

### v @abstr_number . @abstr_number breaking changes

The NuGet packages have changed their package naming in the move from v @abstr_number .x.x to v @abstr_number . @abstr_number . @abstr_number * ~~`Rx-Main`~~ is now @abstr_hyperlink * ~~`Rx-Core`~~ is now @abstr_hyperlink * ~~`Rx-Interfaces`~~ is now @abstr_hyperlink * ~~`Rx-Linq`~~ is now @abstr_hyperlink * ~~`Rx-PlatformServices`~~ is now @abstr_hyperlink * ~~`Rx-Testing`~~ is now @abstr_hyperlink 

This brings the NuGet package naming in line with NuGet guidelines and also the dominant namespace in each package. The strong name key has also changed, which is considered a breaking change. However, there are no expected API changes, therefore, once you make the NuGet change, no code changes should be necessary.

## A Brief Intro

The Reactive Extensions (Rx) is a library for composing asynchronous and event-based programs using observable sequences and LINQ-style query operators. Using Rx, developers ___represent___ asynchronous data streams with @abstr_hyperlink , ___query___ asynchronous data streams using @abstr_hyperlink , and ___parameterize___ the concurrency in the asynchronous data streams using @abstr_hyperlink . Simply put, Rx = Observables + LINQ + Schedulers.

Whether you are authoring a traditional desktop or web-based application, you have to deal with asynchronous and event-based programming from time to time. Desktop applications have I/O operations and computationally expensive tasks that might take a long time to complete and potentially block other active threads. Furthermore, handling exceptions, cancellation, and synchronization is difficult and error-prone.

Using Rx, you can represent multiple asynchronous data streams (that come from diverse sources, e.g., stock quote, tweets, computer events, web service requests, etc.), and subscribe to the event stream using the `IObserver<T>` interface. The `IObservable<T>` interface notifies the subscribed `IObserver<T>` interface whenever an event occurs.

Because observable sequences are data streams, you can query them using standard LINQ query operators implemented by the Observable extension methods. Thus you can filter, project, aggregate, compose and perform time-based operations on multiple events easily by using these standard LINQ operators. In addition, there are a number of other reactive stream specific operators that allow powerful queries to be written. Cancellation, exceptions, and synchronization are also handled gracefully by using the extension methods provided by Rx.

Rx complements and interoperates smoothly with both synchronous data streams (`IEnumerable<T>`) and single-value asynchronous computations (`Task<T>`) as the following diagram shows:

| Single return value| Multiple return values | Pull/Synchronous/Interactive | T | IEnumerable<T>  
---|---|---  
Push/Asynchronous/Reactive | Task<T> | IObservable<T>  
  
Additional documentation, video, tutorials and HOL are available on @abstr_hyperlink , on @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink .

## Flavors of Rx

  * __Rx.NET__: _(this repository)_ The Reactive Extensions (Rx) is a library for composing asynchronous and event-based programs using observable sequences and LINQ-style query operators.
  * @abstr_hyperlink : The Reactive Extensions for JavaScript (RxJS) is a library for composing asynchronous and event-based programs using observable sequences and LINQ-style query operators in JavaScript which can target both the browser and Node.js.
  * @abstr_hyperlink : Reactive Extensions for the JVM – a library for composing asynchronous and event-based programs using observable sequences for the Java VM.
  * @abstr_hyperlink : Reactive Extensions for Scala – a library for composing asynchronous and event-based programs using observable sequences
  * @abstr_hyperlink : The Reactive Extensions for Native (RxCpp) is a library for composing asynchronous and event-based programs using observable sequences and LINQ-style query operators in both C and C++.
  * @abstr_hyperlink : A prototype implementation of Reactive Extensions for Ruby (Rx.rb).
  * @abstr_hyperlink : The Reactive Extensions for Python @abstr_number (Rx.Py) is a set of libraries to compose asynchronous and event-based programs using observable collections and LINQ-style query operators in Python @abstr_number .



## Interactive Extensions

  * __Ix.NET__: _(included in this repository)_ The Interactive Extensions (Ix) is a .NET library which extends LINQ to Objects to provide many of the operators available in Rx but targeted for IEnumerable.
  * @abstr_hyperlink : An implementation of LINQ to Objects and the Interactive Extensions (Ix) in JavaScript.
  * @abstr_hyperlink : An implementation of LINQ for Native Developers in C++



## Applications

  * @abstr_hyperlink : a set of code samples showing how to use LINQ to events, such as real-time standing queries and queries on past history from trace and log files, which targets ETW, Windows Event Logs and SQL Server Extended Events.
  * @abstr_hyperlink : an example for Rx bindings. Similar to existing APIs like LINQ to XML, it allows developers to use LINQ to create/change/update charts in an easy way and avoid having to deal with XML or other underneath data structures. We would love to see more Rx bindings like this one.



## Contributing

### Source code

  * Clone the sources: `git clone https://github.com/dotnet/reactive`
  * @abstr_hyperlink 



### Contribute!

Some of the best ways to contribute are to try things out, file bugs, and join in design conversations.

  * @abstr_hyperlink 
  * @abstr_hyperlink : @abstr_hyperlink / @abstr_hyperlink 



Looking for something to work on? The list of @abstr_hyperlink is a great place to start.

This project has adopted a code of conduct adapted from the @abstr_hyperlink to clarify expected behavior in our community. This code of conduct has been @abstr_hyperlink . For more information see the @abstr_hyperlink .

.NET Foundation

System.Reactive is part of the @abstr_hyperlink . Other projects that are associated with the foundation include the Microsoft .NET Compiler Platform ("Roslyn") as well as the Microsoft ASP.NET family of projects, Microsoft .NET Core & Xamarin Forms.

Core Team

@abstr_image   
@abstr_hyperlink 

Sydney, Australia

|  @abstr_image   
@abstr_hyperlink 

New York, USA

|  @abstr_image   
@abstr_hyperlink 

Budapest, Hungary

|  @abstr_image   
@abstr_hyperlink 

Aachen, Germany  
  
---|---|---|---  
  
Sponsorship

The core team members, System.Reactive contributors and contributors in the ecosystem do this open source work in their free time. If you use System.Reactive for serious tasks, and you'd like us to invest more time on it, please donate. This project increases your income/productivity too. It makes development and applications faster and it reduces the required bandwidth.

This is how we use the donations:

  * Allow the core team to work on System.Reactive
  * Thank contributors if they invested a large amount of time in contributing
  * Support projects in the ecosystem that are of great value for users
  * Support projects that are voted most (work in progress)
  * Infrastructure cost
  * Fees for money handling



Backers

@abstr_hyperlink and get your image on our README on Github with a link to your site.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Sponsors

@abstr_hyperlink and get your logo on our README on Github with a link to your site.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 
