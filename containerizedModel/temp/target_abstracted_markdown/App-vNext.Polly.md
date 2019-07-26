# Polly

Polly is a .NET resilience and transient-fault-handling library that allows developers to express policies such as Retry, Circuit Breaker, Timeout, Bulkhead Isolation, and Fallback in a fluent and thread-safe manner. 

Polly targets .NET Standard @abstr_number . @abstr_number ( @abstr_hyperlink : .NET Framework @abstr_number . @abstr_number - @abstr_number . @abstr_number . @abstr_number , .NET Core @abstr_number . @abstr_number , Mono, Xamarin, UWP, WP @abstr_number . @abstr_number +) and .NET Standard @abstr_number . @abstr_number + ( @abstr_hyperlink : .NET Framework @abstr_number . @abstr_number . @abstr_number , .NET Core @abstr_number . @abstr_number +, and later Mono, Xamarin and UWP targets).

For versions supporting earlier targets such as .NET @abstr_number . @abstr_number and .NET @abstr_number . @abstr_number , see the @abstr_hyperlink grid.

@abstr_hyperlink We are a member of the @abstr_hyperlink !

**Keep up to date with new feature announcements, tips & tricks, and other news through @abstr_hyperlink **

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

# Installing via NuGet
    
    
    Install-Package Polly
    

# Resilience policies

Polly offers multiple resilience policies:

|Policy| Premise | Aka| How does the policy mitigate?| | ------------- | ------------- |:-------------: |------------- | | **Retry**   
(policy family)  
(quickstart ; @abstr_hyperlink )|Many faults are transient and may self-correct after a short delay.| "Maybe it's just a blip" | Allows configuring automatic retries. | | **Circuit-breaker**  
(policy family)  
(quickstart ; @abstr_hyperlink )|When a system is seriously struggling, failing fast is better than making users/callers wait.   
  
Protecting a faulting system from overload can help it recover. | "Stop doing it if it hurts"   
  
"Give that system a break" | Breaks the circuit (blocks executions) for a period, when faults exceed some pre-configured threshold. | | **Timeout**  
(quickstart ; @abstr_hyperlink )|Beyond a certain wait, a success result is unlikely.| "Don't wait forever" |Guarantees the caller won't have to wait beyond the timeout. | | **Bulkhead Isolation**  
(quickstart ; @abstr_hyperlink )|When a process faults, multiple failing calls backing up can easily swamp resource (eg threads/CPU) in a host.  
  
A faulting downstream system can also cause 'backed-up' failing calls upstream.  
  
Both risk a faulting process bringing down a wider system. | "One fault shouldn't sink the whole ship" |Constrains the governed actions to a fixed-size resource pool, isolating their potential to affect others. | | **Cache**  
(quickstart ; @abstr_hyperlink )|Some proportion of requests may be similar.| "You've asked that one before" |Provides a response from cache if known.   
  
Stores responses automatically in cache, when first retrieved. | | **Fallback**  
(quickstart ; @abstr_hyperlink )|Things will still fail - plan what you will do when that happens.| "Degrade gracefully" |Defines an alternative value to be returned (or action to be executed) on failure. | | **PolicyWrap**  
(quickstart ; @abstr_hyperlink )|Different faults require different strategies; resilience means using a combination.| "Defence in depth" |Allows any of the above policies to be combined flexibly. | 

In addition to the detailed pages on each policy, an @abstr_hyperlink is also provided in the wiki.

### Using Polly with HttpClient factory from ASPNET Core @abstr_number . @abstr_number

For using Polly with HttpClient factory from ASPNET Core @abstr_number . @abstr_number , see our @abstr_hyperlink , then come back here or @abstr_hyperlink to learn more about the operation of each policy.

### Release notes

  * The @abstr_hyperlink describes changes by release.
  * We tag Pull Requests and Issues with @abstr_hyperlink which match to nuget package release numbers.
  * Breaking changes are called out in the wiki ( @abstr_hyperlink ; @abstr_hyperlink ) with simple notes on any necessary steps to upgrade.



### Supported targets

For details of supported compilation targets by version, see the @abstr_hyperlink grid.

### Role of the readme and the wiki

This ReadMe aims to give a quick overview of all Polly features - including enough to get you started with any policy. For deeper detail on any policy, and many other aspects of Polly, be sure also to check out the @abstr_hyperlink .

# Usage – fault-handling, reactive policies

Fault-handling policies handle specific exceptions thrown by, or results returned by, the delegates you execute through the policy.

## Step @abstr_number : Specify the exceptions/faults you want the policy to handle

@abstr_code_section 

## Step @abstr_number b: (optionally) Specify return results you want to handle

From Polly v @abstr_number . @abstr_number . @abstr_number onwards, policies wrapping calls returning a `TResult` can also handle `TResult` return values:

@abstr_code_section 

For more information, see Handling Return Values at foot of this readme. 

## Step @abstr_number : Specify how the policy should handle those faults

### Retry

@abstr_code_section 

### Retry forever (until succeeds)

@abstr_code_section 

### Wait and retry

@abstr_code_section 

For `WaitAndRetry` policies handling Http Status Code @abstr_number Retry-After, see @abstr_hyperlink .

### Wait and retry forever (until succeeds)

@abstr_code_section 

If all retries fail, a retry policy rethrows the final exception back to the calling code.

For more depth see also: @abstr_hyperlink .

### Circuit Breaker

@abstr_code_section 

Circuit-breaker policies block exceptions by throwing `BrokenCircuitException` when the circuit is broken. See: @abstr_hyperlink .

Note that circuit-breaker policies @abstr_hyperlink , even handled ones. A circuit-breaker exists to measure faults and break the circuit when too many faults occur, but does not orchestrate retries. Combine a circuit-breaker with a retry policy as needed. 

### Advanced Circuit Breaker

@abstr_code_section For more detail see: @abstr_hyperlink on wiki.

For more information on the Circuit Breaker pattern in general see: * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 

### Fallback

@abstr_code_section 

For more detail see: @abstr_hyperlink on wiki.

## Step @abstr_number : Execute the policy

@abstr_code_section 

The above examples show policy definition immediately followed by policy execution, for simplicity. Policy definition and execution may just as often be separated in the codebase and application lifecycle. You may choose for example to define policies on start-up, then provide them to point-of-use by dependency injection (perhaps using PolicyRegistry).

# Usage – proactive policies

The proactive policies add resilience strategies that not based on handling faults which delegates may throw or return.

## Step @abstr_number : Configure

### Timeout

#### Optimistic timeout

Optimistic timeout @abstr_hyperlink and assumes delegates you execute support @abstr_hyperlink . You must use `Execute/Async(...)` overloads taking a `CancellationToken`, and the executed delegate must honor that `CancellationToken`.

@abstr_code_section 

Example execution:

@abstr_code_section 

#### Pessimistic timeout

Pessimistic timeout allows calling code to 'walk away' from waiting for an executed delegate to complete, even if it does not support cancellation. In synchronous executions this is at the expense of an extra thread; see @abstr_hyperlink for more detail.

@abstr_code_section 

Example execution:

@abstr_code_section 

Timeout policies throw `TimeoutRejectedException` when timeout occurs. 

For more detail see: @abstr_hyperlink on wiki.

### Bulkhead

@abstr_code_section 

Bulkhead policies throw `BulkheadRejectedException` if items are queued to the bulkhead when the bulkhead execution and queue are both full. 

For more detail see: @abstr_hyperlink on wiki.

### Cache

@abstr_code_section 

For richer options and details of using further cache providers see: @abstr_hyperlink on wiki.

### PolicyWrap

@abstr_code_section 

For more detail see: @abstr_hyperlink on wiki.

### NoOp

@abstr_code_section For more detail see: @abstr_hyperlink on wiki.

## Step @abstr_number : Execute the policy

As for fault-handling policies above.

# Post-execution: capturing the result, or any final exception

Using the `ExecuteAndCapture(...)` methods you can capture the outcome of an execution: the methods return a `PolicyResult` instance which describes whether the outcome was a successful execution or a fault.

@abstr_code_section 

# Handing return values, and Policy<TResult>

As described at step @abstr_number b, from Polly v @abstr_number . @abstr_number . @abstr_number onwards, policies can handle return values and exceptions in combination: 

@abstr_code_section 

The exceptions and return results to handle can be expressed fluently in any order.

### Strongly-typed Policy<TResult>

Configuring a policy with `.HandleResult<TResult>(...)` or `.OrResult<TResult>(...)` generates a strongly-typed `Policy<TResult>` of the specific policy type, eg `Retry<TResult>`, `AdvancedCircuitBreaker<TResult>`.

These policies must be used to execute delegates returning `TResult`, ie:

  * `Execute(Func<TResult>)` (and related overloads)
  * `ExecuteAsync(Func<CancellationToken, Task<TResult>>)` (and related overloads) 



### ExecuteAndCapture<TResult>()

`.ExecuteAndCapture(...)` on non-generic policies returns a `PolicyResult` with properties:

@abstr_code_section 

`.ExecuteAndCapture<TResult>(Func<TResult>)` on strongly-typed policies adds two properties:

@abstr_code_section 

### State-change delegates on Policy<TResult> policies

In non-generic policies handling only exceptions, state-change delegates such as `onRetry` and `onBreak` take an `Exception` parameter. 

In generic-policies handling `TResult` return values, state-change delegates are identical except they take a `DelegateResult<TResult>` parameter in place of `Exception.` `DelegateResult<TResult>` has two properties:

  * `Exception // The exception just thrown if policy is in process of handling an exception (otherwise null)`
  * `Result // The TResult just raised, if policy is in process of handling a result (otherwise default(TResult))`



### BrokenCircuitException<TResult>

Non-generic CircuitBreaker policies throw a `BrokenCircuitException` when the circuit is broken. This `BrokenCircuitException` contains the last exception (the one which caused the circuit to break) as the `InnerException`.

For `CircuitBreakerPolicy<TResult>` policies: 

  * A circuit broken due to an exception throws a `BrokenCircuitException` with `InnerException` set to the exception which triggered the break (as previously).
  * A circuit broken due to handling a result throws a `BrokenCircuitException<TResult>` with the `Result` property set to the result which caused the circuit to break.



# Policy Keys and Context data

@abstr_code_section 

For more detail see: @abstr_hyperlink on wiki.

# PolicyRegistry

@abstr_code_section 

`PolicyRegistry` has a range of further dictionary-like semantics such as `.ContainsKey(...)`, `.TryGet<TPolicy>(...)`, `.Count`, `.Clear()`, and `Remove(...)`.

Available from v @abstr_number . @abstr_number . @abstr_number . For more detail see: @abstr_hyperlink on wiki.

# Asynchronous Support

Polly fully supports asynchronous executions, using the asynchronous methods:

  * `RetryAsync`
  * `WaitAndRetryAsync`
  * `CircuitBreakerAsync`
  * (etc)
  * `ExecuteAsync`
  * `ExecuteAndCaptureAsync`



In place of their synchronous counterparts:

  * `Retry`
  * `WaitAndRetry`
  * `CircuitBreaker`
  * (etc)
  * `Execute`
  * `ExecuteAndCapture`



Async overloads exist for all policy types and for all `Execute()` and `ExecuteAndCapture()` overloads.

Usage example:

@abstr_code_section 

### SynchronizationContext

Async continuations and retries by default do not run on a captured synchronization context. To change this, use `.ExecuteAsync(...)` overloads taking a boolean `continueOnCapturedContext` parameter. 

### Cancellation support

Async policy execution supports cancellation via `.ExecuteAsync(...)` overloads taking a `CancellationToken`. 

The token you pass as the `cancellationToken` parameter to the `ExecuteAsync(...)` call serves three purposes:

  * It cancels Policy actions such as further retries, waits between retries or waits for a bulkhead execution slot.
  * It is passed by the policy as the `CancellationToken` input parameter to any delegate executed through the policy, to support cancellation during delegate execution. 
  * In common with the Base Class Library implementation in `Task.Run(…)` and elsewhere, if the cancellation token is cancelled before execution begins, the user delegate is not executed at all.

@abstr_code_section 




From Polly v @abstr_number . @abstr_number , synchronous executions also support cancellation via `CancellationToken`.

# Thread safety

All Polly policies are fully thread-safe. You can safely re-use policies at multiple call sites, and execute through policies concurrently on different threads. 

While the internal operation of the policy is thread-safe, this does not magically make delegates you execute through the policy thread-safe: if delegates you execute through the policy are not thread-safe, they remain not thread-safe.

# Interfaces

Polly v @abstr_number . @abstr_number . @abstr_number adds interfaces intended to support @abstr_hyperlink and to group Policy functionality by the @abstr_hyperlink . Polly's interfaces are not intended for coding your own policy implementations against.

## Execution interfaces: `ISyncPolicy` etc

Execution interfaces @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink define the execution overloads available to policies targeting sync/async, and non-generic / generic calls respectively.

See blog posts for why Polly has @abstr_hyperlink and @abstr_hyperlink .

## Policy-kind interfaces: `ICircuitBreakerPolicy` etc

Orthogonal to the execution interfaces, interfaces specific to the kind of Policy define properties and methods common to that type of policy. 

For example, @abstr_hyperlink defines 

  * `CircuitState CircuitState`
  * `Exception LastException`
  * `void Isolate()`
  * `void Reset()`



with `ICircuitBreakerPolicy<TResult> : ICircuitBreakerPolicy` adding:

  * `TResult LastHandledResult`.



This allows collections of similar kinds of policy to be treated as one - for example, for monitoring all your circuit-breakers as @abstr_hyperlink . 

For more detail see: @abstr_hyperlink on wiki.

# @abstr_number rd Party Libraries and Contributions

  * @abstr_hyperlink - A set of .NET extension methods that allow you to more naturally specify the expected outcome of a TDD or BDD-style test | @abstr_hyperlink 
  * @abstr_hyperlink - Free, open source, community-focused unit testing tool for the .NET Framework | @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (until Polly v @abstr_number . @abstr_number . @abstr_number )
  * @abstr_hyperlink for AsyncSemaphore (supports BulkheadAsync policy for .NET @abstr_number . @abstr_number only) (until Polly v @abstr_number . @abstr_number . @abstr_number ) | @abstr_hyperlink 
  * @abstr_hyperlink 's @abstr_hyperlink (supports Timeout policy for .NET @abstr_number . @abstr_number only) (until Polly v @abstr_number . @abstr_number . @abstr_number ) including also a contribution by @abstr_hyperlink | Licensed under and distributed under @abstr_hyperlink per @abstr_hyperlink 
  * Build powered by @abstr_hyperlink and @abstr_hyperlink .



# Acknowledgements

  * @abstr_hyperlink - Helper assemblies originally for .NET @abstr_number . @abstr_number and Silverlight @abstr_number . @abstr_number which were developed as part of the Open Source effort by Lokad.com (discontinued) | @abstr_hyperlink 
  * @abstr_hyperlink - The creator and mastermind of Polly!
  * @abstr_hyperlink - Portable Class Library implementation.
  * @abstr_hyperlink - Initial async implementation.
  * @abstr_hyperlink - Added existing async files to PCL project
  * @abstr_hyperlink - Added extra `NotOnCapturedContext` call to prevent potential deadlocks when blocking on asynchronous calls
  * @abstr_hyperlink - Added ability to capture the results of executing a policy via `ExecuteAndCapture`
  * @abstr_hyperlink - Added full control of whether to continue on captured synchronization context or not
  * @abstr_hyperlink - Added full async cancellation support
  * @abstr_hyperlink - Added async support for ContextualPolicy
  * @abstr_hyperlink - Added ContextualPolicy support for circuit-breaker
  * @abstr_hyperlink - Extended circuit-breaker for public monitoring and control
  * @abstr_hyperlink - Added ExecuteAndCapture support with arbitrary context data 
  * @abstr_hyperlink and @abstr_hyperlink - Added AdvancedCircuitBreaker
  * @abstr_hyperlink - Allowed async onRetry delegates to async retry policies
  * @abstr_hyperlink - Add new Polly.Net @abstr_number Async project/package supporting async for .NET @abstr_number via Microsoft.Bcl.Async
  * @abstr_hyperlink - Added overloads to WaitAndRetry and WaitAndRetryAsync methods that accept an onRetry delegate which includes the attempt count.
  * @abstr_hyperlink - Allowed policies to handle returned results; added strongly-typed policies Policy<TResult>;.
  * @abstr_hyperlink - Added optimisation for circuit-breaker hot path.
  * @abstr_hyperlink - Fixed circuit-breaker threshold bug.
  * @abstr_hyperlink - Add some missing ExecuteAndCapture/Async overloads. 
  * @abstr_hyperlink - Add CancellationToken support to synchronous executions (to support TimeoutPolicy). 
  * @abstr_hyperlink - Add PolicyWrap. 
  * @abstr_hyperlink - Add Fallback policy. 
  * @abstr_hyperlink - Add PolicyKeys and context to all policy executions, as bedrock for policy events and metrics tracking executions. 
  * @abstr_hyperlink , and contributions from @abstr_hyperlink - Add Bulkhead Isolation policy. 
  * @abstr_hyperlink - Add Timeout policy.
  * @abstr_hyperlink - Fix .NETStandard @abstr_number . @abstr_number targeting. Remove PCL @abstr_number target. PCL @abstr_number support is provided via .NETStandard @abstr_number . @abstr_number target, going forward.
  * @abstr_hyperlink - Fix CircuitBreaker HalfOpen state and cases when breakDuration is shorter than typical call timeout. Thanks to @abstr_hyperlink and @abstr_hyperlink for the reports and insightful thinking.
  * @abstr_hyperlink - Tidy CircuitBreaker LastException property.
  * @abstr_hyperlink - Add NoOpPolicy.
  * @abstr_hyperlink - Fixes, support and examples for .NETStandard compatibility with Xamarin PCL projects
  * @abstr_hyperlink - Add mutable Context and extra overloads taking Context. Allows different parts of a policy execution to exchange data via the mutable Context travelling with each execution.
  * @abstr_hyperlink - Add PolicyRegistry for storing and retrieving policies.
  * @abstr_hyperlink - Add interfaces by policy type and execution type.
  * @abstr_hyperlink - Add IReadOnlyPolicyRegistry interface.
  * @abstr_hyperlink - Migrate solution to msbuild @abstr_number , banish project.json and packages.config
  * @abstr_hyperlink - Ensure sync TimeoutPolicy with TimeoutStrategy.Pessimistic rethrows delegate exceptions without additional AggregateException.
  * @abstr_hyperlink and @abstr_hyperlink - Provide public factory methods for PolicyResult, to support testing.
  * @abstr_hyperlink - Allow fallback delegates to take handled fault as input parameter.
  * @abstr_hyperlink and @abstr_hyperlink - Add CachePolicy, with interfaces for pluggable cache providers and serializers.
  * Thanks to the awesome devs at @abstr_hyperlink who delivered the following as part of a one-day in-company hackathon led by @abstr_hyperlink , sponsored by @abstr_hyperlink and convened by @abstr_hyperlink 
    * @abstr_hyperlink - Allow WaitAndRetry to take handled fault as an input to the sleepDurationProvider, allowing WaitAndRetry to take account of systems which specify a duration to wait as part of a fault response; eg Azure CosmosDB may specify this in `x-ms-retry-after-ms` headers or in a property to an exception thrown by the Azure CosmosDB SDK.
    * @abstr_hyperlink - Add GetPolicies() extension methods to IPolicyWrap.
    * @abstr_hyperlink - Parallelize test running where possible, to improve overall build speed.
  * @abstr_hyperlink - Add new .HandleInner(...) syntax for handling inner exceptions natively.
  * @abstr_hyperlink and @abstr_hyperlink - Allow PolicyWrap configuration to configure policies via interfaces. 
  * @abstr_hyperlink - Performance improvements.
  * @abstr_hyperlink - Add ability to calculate cache Ttl based on item to cache.
  * @abstr_hyperlink - Add a new onBreak overload that provides the prior state on a transition to an open state.
  * @abstr_hyperlink - Bug fix: RelativeTtl in CachePolicy now always returns a ttl relative to time item is cached.
  * @abstr_hyperlink - Allow TimeoutPolicy to be configured with Timeout.InfiniteTimeSpan.
  * @abstr_hyperlink - Integration with @abstr_hyperlink for ASPNET Core @abstr_number . @abstr_number .
  * @abstr_hyperlink - WaitAnd/RetryForever overloads where onRetry takes the retry number as a parameter.
  * @abstr_hyperlink - Overloads where onTimeout takes thrown exception as a parameter.
  * @abstr_hyperlink - Catch missing async continuation control.
  * @abstr_hyperlink - Clarify separation of sync and async policies.
  * @abstr_hyperlink - Enable extensibility by custom policies hosted external to Polly.
  * @abstr_hyperlink - Enable collection initialization syntax for PolicyRegistry.
  * @abstr_hyperlink - Code clean-ups, usage of more concise C# members.
  * @abstr_hyperlink - Enable cache policies to cache values of default(TResult).
  * @abstr_hyperlink - Build script tweaks for Mac and mono.
  * @abstr_hyperlink - Add Soucelink support, clean up cake build.



# Sample Projects

  * @abstr_hyperlink contains practical examples for using various implementations of Polly. Please feel free to contribute to the Polly-Samples repository in order to assist others who are either learning Polly for the first time, or are seeking advanced examples and novel approaches provided by our generous community.

  * Microsoft's @abstr_hyperlink is a sample project demonstrating a .NET Microservices architecture and using Polly for resilience




# Instructions for Contributing

Please be sure to branch from the head of the latest vX.Y.Z dev branch (rather than master) when developing contributions. 

For github workflow, check out our @abstr_hyperlink . We are following the excellent GitHub Flow process, and would like to make sure you have all of the information needed to be a world-class contributor!

Since Polly is part of the .NET Foundation, we ask our contributors to abide by their @abstr_hyperlink . To contribute (beyond trivial typo corrections), review and sign the @abstr_hyperlink . This ensures the community is free to use your contributions. The registration process can be completed entirely online.

Also, we've stood up a @abstr_hyperlink channel for easier real-time discussion of ideas and the general direction of Polly as a whole. Be sure to @abstr_hyperlink today!

# License

Licensed under the terms of the @abstr_hyperlink 

# Simmy

@abstr_hyperlink is a major new companion project adding a chaos-engineering and fault-injection dimension to Polly, through the provision of policies to selectively inject faults or latency. 

Head over to the @abstr_hyperlink repo to find out more.

# Custom policies

From Polly v @abstr_number . @abstr_number it is possible to @abstr_hyperlink outside Polly. These custom policies can integrate in to all the existing goodness from Polly: the `Policy.Handle<>()` syntax; PolicyWrap; all the execution-dispatch overloads.

For more info see our blog series:

  * @abstr_hyperlink 
  * @abstr_hyperlink (a policy which acts on all executions)
  * @abstr_hyperlink (a policy which react to faults).
  * @abstr_hyperlink : sync and async, generic and non-generic.



We provide a @abstr_hyperlink for developing your own custom policy. 

# Polly-Contrib

Polly now has a @abstr_hyperlink to allow the community to contribute policies or other enhancements around Polly with a low burden of ceremony.

Have a contrib you'd like to publish under Polly-Contrib? Contact us with an issue here or on @abstr_hyperlink , and we can set up a Polly.Contrib repo to which you have full rights, to help you manage and deliver your awesomeness to the community!

We also provide:

  * a blank @abstr_hyperlink (see above for more on custom policies)
  * a @abstr_hyperlink 



Both templates contain a full project structure referencing Polly, Polly's default build targets, and a build to build and test your contrib and make a nuget package.

## Available via Polly-Contrib

  * @abstr_hyperlink : a starter policy to publish execution timings of any call executed through Policy.
  * @abstr_hyperlink : a policy simply to log handled exceptions/faults, and rethrow or bubble the fault outwards.



# Blogs, podcasts, courses, ebooks, architecture samples and videos around Polly

When we discover an interesting write-up on Polly, we'll add it to this list. If you have a blog post you'd like to share, please submit a PR!

## Blog posts

  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink including with Polly policies - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink (with focus on Azure SQL transient errors) - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by @abstr_hyperlink 
  * @abstr_hyperlink - by Jeremy Lindsay.



## Podcasts

  * June @abstr_number : @abstr_hyperlink as @abstr_hyperlink and @abstr_hyperlink chat with @abstr_hyperlink about policy patterns, and the new ASP NET Core @abstr_number . @abstr_number integration with IHttpClientFactory. 

  * April @abstr_number : @abstr_hyperlink sits down virtually with @abstr_hyperlink of @abstr_hyperlink for an @abstr_hyperlink . Why do I need Polly? History of the Polly project. What do we mean by resilience and transient faults? How retry and circuit-breaker help. Exponential backoff. Stability patterns. Bulkhead isolation. Future directions (as at April @abstr_number ).




## PluralSight course

  * @abstr_hyperlink of the @abstr_hyperlink has authored a @abstr_hyperlink . The course takes you through all the major features of Polly, with an additional module added in the fall of @abstr_number on Http Client Factory. The course examples are based around using Polly for fault tolerance when calling remote web services, but the principles and techniques are applicable to any context in which Polly may be used.



## Sample microservices architecture and ebook

### Sample microservices architecture

  * @abstr_hyperlink produced the Microsoft @abstr_hyperlink , a sample project demonstrating a .NET Microservices architecture. The project uses Polly retry and circuit-breaker policies for resilience in calls to microservices, and in establishing connections to transports such as RabbitMQ. 



### ebook

  * Accompanying the project is a @abstr_hyperlink with an extensive section (section @abstr_number ) on using Polly for resilience, to which @abstr_hyperlink contributed. The ebook and code is now (June @abstr_number ) updated for using the latest ASP NET Core @abstr_number . @abstr_number features, @abstr_hyperlink .



## Twitter

  * Follow @abstr_hyperlink for notification of new Polly releases, advance notice of new proposals, tweets of interesting resilience articles (no junk).



## Videos

  * @abstr_hyperlink , Bryan Hogan introduces Polly and explains how to use it to build a fault tolerant application.
  * From MVP @abstr_hyperlink , a @abstr_hyperlink , covering wait-and-retry and discussing circuit-breaker policy with a demonstration in Xamarin Forms. Here is the @abstr_hyperlink of the application demonstrated in the video. Draws on the @abstr_hyperlink from Microsoft's @abstr_hyperlink .
  * In the video, @abstr_hyperlink , Bill Wagner discusses Polly.
  * Scott Allen discusses Polly during his @abstr_hyperlink presentation at NDC.
  * @abstr_hyperlink : Damian Edwards, Jon Galloway and Scott Hanselman discuss Scott Hanselman's blog on @abstr_hyperlink and the @abstr_hyperlink . Interesting background discussion also on feature richness and the importance of good documentation. 


