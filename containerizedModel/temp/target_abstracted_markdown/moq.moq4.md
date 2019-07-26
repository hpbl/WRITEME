# moq

The most popular and friendly mocking library for .NET

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_code_section 

Moq also is the first and only library so far to provide Linq to Mocks, so that the same behavior above can be achieved much more succinctly:

@abstr_code_section 

You can think of Linq to Mocks as "from the universe of mocks, give me one whose behavior matches this expression".

Checkout the @abstr_hyperlink for more examples!

## What?

Moq (pronounced "Mock-you" or just "Mock") is the only mocking library for .NET developed from scratch to take full advantage of .NET Linq expression trees and lambda expressions, which makes it the most productive, type-safe and refactoring-friendly mocking library available. And it supports mocking interfaces as well as classes. Its API is extremely simple and straightforward, and doesn't require any prior knowledge or experience with mocking concepts.

## Why?

The library was created mainly for developers who aren't currently using any mocking library (or are displeased with the complexities of some other implementation), and who are typically @abstr_hyperlink (with more or less "fanciness"). Most developers in this situation also happen to be @abstr_hyperlink (or classic) TDD. It's the result of feeling that the barrier of entry from other mocking libraries is a bit high, and a simpler, more lightweight and elegant approach is possible. Moq achieves all this by taking full advantage of the elegant and compact C# and VB language features collectively known as LINQ (they are not just for queries, as the acronym implies). 

Moq is designed to be a very practical, unobtrusive and straight-forward way to quickly setup dependencies for your tests. Its API design helps even novice users to fall in the "pit of success" and avoid most common misuses/abuses of mocking. 

When it was conceived, it was the only mocking library that went against the generalized and somewhat unintuitive (especially for novices) Record/Replay approach from all other libraries (and @abstr_hyperlink ;)).

Not using Record/Replay also means that it's straightforward to move common expectations to a fixture setup method and even override those expectations when needed in a specific unit test.

You can read more about the "why" and see some nice screenshots at @abstr_hyperlink .

## Where?

See our @abstr_hyperlink examples to get a feeling of the extremely simple API and install from @abstr_hyperlink . Check out the API documentation at @abstr_hyperlink .

Read about the announcement at @abstr_hyperlink . Get some background on @abstr_hyperlink . 

## Who?

Moq was originally developed by @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

Moq uses @abstr_hyperlink internally as the interception mechanism to enable mocking.

## Features at a glance

Moq offers the following features: * Strong-typed: no strings for expectations, no object-typed return values or constraints * Unsurpassed VS IntelliSense integration: everything supports full VS IntelliSense, from setting expectations, to specifying method call arguments, return values, etc. * No Record/Replay idioms to learn. Just construct your mock, set it up, use it and optionally verify calls to it (you may not verify mocks when they act as stubs only, or when you are doing more classic state-based testing by checking returned values from the object under test) * VERY low learning curve as a consequence of the previous three points. For the most part, you don't even need to ever read the documentation. * Granular control over mock behavior with a simple @abstr_hyperlink enumeration (no need to learn what's the theoretical difference between a mock, a stub, a fake, a dynamic mock, etc.) * Mock both interfaces and classes * Override expectations: can set default expectations in a fixture setup, and override as needed on tests * Pass constructor arguments for mocked classes * Intercept and raise events on mocks * Intuitive support for `out/ref` arguments

We appreciate deeply any feedback that you may have! Feel free to participate in the [chat], or report an issue in the [issue tracker].

@abstr_image 
