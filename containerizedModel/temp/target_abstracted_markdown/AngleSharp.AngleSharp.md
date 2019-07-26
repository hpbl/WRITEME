@abstr_image 

# AngleSharp

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

AngleSharp is a .NET library that gives you the ability to parse angle bracket based hyper-texts like HTML, SVG, and MathML. XML without validation is also supported by the library. An important aspect of AngleSharp is that CSS can also be parsed. The included parser is built upon the official W @abstr_number C specification. This produces a perfectly portable HTML @abstr_number DOM representation of the given source code and ensures compatibility with results in evergreen browsers. Also standard DOM features such as `querySelector` or `querySelectorAll` work for tree traversal.

:zap::zap: **Migrating from AngleSharp @abstr_number . @abstr_number to AngleSharp @abstr_number . @abstr_number or later**? Look at our migration documentation. :zap::zap:

## Key Features

  * **Portable** (using .NET Standard @abstr_number . @abstr_number )
  * **Standards conform** (works exactly as evergreen browsers)
  * **Great performance** (outperforms similar parsers in most scenarios)
  * **Extensible** (extend with your own services)
  * **Useful abstractions** (type helpers, jQuery like construction)
  * **Fully functional DOM** (all the lists, iterators, and events you know)
  * **Form submission** (easily log in everywhere)
  * **Navigation** (a `BrowsingContext` is like a browser tab - control it from .NET!).
  * **LINQ enhanced** (use LINQ with DOM elements, naturally without wrappers)



The advantage over similar libraries like _HtmlAgilityPack_ is that the exposed DOM is using the official W @abstr_number C specified API, i.e., that even things like `querySelectorAll` are available in AngleSharp. Also the parser uses the HTML @abstr_number . @abstr_number specification, which defines error handling and element correction. The AngleSharp library focuses on standards compliance, interactivity, and extensibility. It is therefore giving web developers working with C# all possibilities as they know from using the DOM in any modern browser.

The performance of AngleSharp is quite close to the performance of browsers. Even very large pages can be processed within milliseconds. AngleSharp tries to minimize memory allocations and reuses elements internally to avoid unnecessary object creation.

## Simple Demo

The simple example will use the website of Wikipedia for data retrieval.

@abstr_code_section 

In the example we see:

  * How to setup the configuration for supporting document loading
  * Asynchronously get the document in a new context using the configuration
  * Performing a query to get all cells with the content of interest
  * The whole DOM supports LINQ queries



Every collection in AngleSharp supports LINQ statements. AngleSharp also provides many useful extension methods for element collections that cannot be found in the official DOM.

## Supported Platforms

AngleSharp has been created as a .NET Standard @abstr_number . @abstr_number (and @abstr_number . @abstr_number ) compatible library. This includes, but is not limited to:

  * .NET Core ( @abstr_number . @abstr_number and @abstr_number . @abstr_number )
  * .NET Framework ( @abstr_number . @abstr_number )
  * Xamarin.Android ( @abstr_number . @abstr_number and @abstr_number . @abstr_number )
  * Xamarin.iOS ( @abstr_number . @abstr_number and @abstr_number . @abstr_number )
  * Xamarin.Mac ( @abstr_number . @abstr_number and @abstr_number . @abstr_number )
  * Mono ( @abstr_number . @abstr_number and @abstr_number . @abstr_number )
  * UWP ( @abstr_number . @abstr_number and @abstr_number . @abstr_number . @abstr_number )
  * Unity ( @abstr_number . @abstr_number )



## Documentation

The documentation of AngleSharp is located in the docs folder. More examples, best-practices, and general information can be found there. The documentation also contains a list of frequently asked questions.

More information is also available by following some of the hyper references mentioned in the Wiki. In-depth articles will be published on the CodeProject, with links being placed in the Wiki at GitHub.

## Use-Cases

  * Parsing HTML (incl. fragments)
  * Parsing CSS (incl. selectors, declarations, ...)
  * Constructing HTML (e.g., view-engine)
  * Minifying CSS, HTML, ...
  * Querying document elements
  * Crawling information
  * Gathering statistics
  * Web automation
  * Tools with HTML / CSS / ... support
  * Connection to page analytics
  * HTML / DOM unit tests
  * Automated JavaScript interaction
  * Testing other concepts, e.g., script engines
  * ...



## Vision

The project aims to bring a solid implementation of the W @abstr_number C DOM for HTML, SVG, MathML, and CSS to the CLR - all written in C#. The idea is that you can basically do everything with the DOM in C# that you can do in JavaScript (plus, of course, more).

Most parts of the DOM are included, even though some may still miss their (fully specified / correct) implementation. The goal for v @abstr_number . @abstr_number is to have _all practically relevant_ parts implemented according to the official W @abstr_number C specification (with useful extensions by the WHATWG).

The API is close to the DOM @abstr_number specification, however, the naming has been adjusted to apply with .NET conventions. Nevertheless, to make AngleSharp really useful for, e.g., a JavaScript engine, attributes have been placed on the corresponding interfaces (and methods, properties, ...) to indicate the status of the field in the official specification. This allows automatic generation of DOM objects with the official API.

This is a long-term project which will eventually result in a state of the art parser for the most important angle bracket based hyper-texts.

Our hope is to build a community around web parsing and libraries from this project. So far we had great contributions, but that goal was not fully achieved. Want to help? Get in touch with us!

## Participating in the Project

If you know some feature that AngleSharp is currently missing, and you are willing to implement the feature, then your contribution is more than welcome! Also if you have a really cool idea - do not be shy, we'd like to hear it.

If you have an idea how to improve the API (or what is missing) then posts / messages are also welcome. For instance there have been ongoing discussions about some styles that have been used by AngleSharp (e.g., `HTMLDocument` or `HtmlDocument`) in the past. In the end AngleSharp stopped using `HTMLDocument` (at least visible outside of the library). Now AngleSharp uses names like `IDocument`, `IHtmlElement` and so on. This change would not have been possible without such fruitful discussions.

The project is always searching for additional contributors. Even if you do not have any code to contribute, but rather an idea for improvement, a bug report or a mistake in the documentation. These are the contributions that keep this project active.

Live discussions can take place in our @abstr_hyperlink , which supports using GitHub accounts.

More information is found in the contribution guidelines. All contributors can be found in the CONTRIBUTORS file.

This project has also adopted the code of conduct defined by the Contributor Covenant to clarify expected behavior in our community.

For more information see the @abstr_hyperlink .

## Funding / Support

If you use AngleSharp frequently, but you do not have the time to support the project by active participation you may still be interested to ensure that the AngleSharp projects keeps the lights on.

Therefore we created a backing model via @abstr_hyperlink . Any donation is welcome and much appreciated. We will mostly spend the money on dedicated development time to improve AngleSharp where it needs to be improved, plus invest in the web utility eco-system in .NET (e.g., in JavaScript engines, other parsers, or a renderer for AngleSharp to mention some outstanding projects).

> Visit @abstr_hyperlink for more details.

## Development

AngleSharp is written in C# @abstr_number . @abstr_number and thus requires Roslyn as a compiler. Using an IDE like Visual Studio @abstr_number + is recommended on Windows. Alternatively, VSCode (with OmniSharp or another suitable Language Server Protocol implementation) should be the tool of choice on other platforms.

The code tries to be as clean as possible. Notably the following rules are used:

  * Use braces for any conditional / loop body
  * Use the `-Async` suffixed methods when available
  * Use VIP ("Var If Possible") style (in C++ called AAA: Almost Always Auto) to place types on the right



More important, however, is the proper usage of tests. Any new feature should come with a set of tests to cover the functionality and prevent regression.

## Changelog

A very detailed changelog exists. If you are just interested in major releases then have a look at our own releases document.

## .NET Foundation

This project is supported by the @abstr_hyperlink .

## License

The MIT License (MIT)

Copyright (c) @abstr_number - @abstr_number AngleSharp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
