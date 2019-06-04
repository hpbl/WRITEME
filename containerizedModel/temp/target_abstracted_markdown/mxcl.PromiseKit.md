@abstr_image 

@abstr_hyperlink @abstr_image @abstr_image @abstr_image @abstr_hyperlink 

* * *

Promises simplify asynchronous programming, freeing you up to focus on the more important things. They are easy to learn, easy to master and result in clearer, more readable code. Your co-workers will thank you.

@abstr_code_section 

PromiseKit is a thoughtful and complete implementation of promises for any platform that has a `swiftc`. It has _excellent_ Objective-C bridging and _delightful_ specializations for iOS, macOS, tvOS and watchOS. It is a top- @abstr_number pod used in many of the most popular apps in the world.

@abstr_hyperlink 

# PromiseKit @abstr_number Alpha

We are testing PromiseKit @abstr_number alpha, it is Swift @abstr_number only. It is tagged and thus importable in all package managers.

# PromiseKit @abstr_number

@abstr_hyperlink .

# Quick Start

In your [Podfile]:

@abstr_code_section 

> The above gives an Xcode warning? See our [Installation Guide].

PromiseKit @abstr_number , @abstr_number and @abstr_number support Xcode @abstr_number . @abstr_number , @abstr_number .x and @abstr_number . @abstr_number ; Swift @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number and @abstr_number . @abstr_number (development snapshots); iOS, macOS, tvOS, watchOS, Linux and Android; CocoaPods, Carthage and SwiftPM; ( @abstr_hyperlink ).

For Carthage, SwiftPM, Accio, etc., or for instructions when using older Swifts or Xcodes, see our [Installation Guide]. We recommend @abstr_hyperlink or @abstr_hyperlink .

# Professionally Supported PromiseKit is Now Available

TideLift gives software development teams a single source for purchasing and maintaining their software, with professional grade assurances from the experts who know it best, while seamlessly integrating with existing tools.

@abstr_hyperlink .

# PromiseKit is Thousands of Hours of Work

Hey there, I’m Max Howell. I’m a prolific producer of open source software and probably you already use some of it (I created [`brew`]). I work full-time on open source and it’s hard; currently _I earn less than minimum wage_. Please help me continue my work, I appreciate it 🙏🏻

@abstr_hyperlink 

@abstr_hyperlink .

# Documentation

  * Handbook 
    * Getting Started
    * Promises: Common Patterns
    * Frequently Asked Questions
  * Manual 
    * Installation Guide
    * Objective-C Guide
    * Troubleshooting (e.g., solutions to common compile errors)
    * Appendix
  * @abstr_hyperlink 



# Extensions

Promises are only as useful as the asynchronous tasks they represent. Thus, we have converted (almost) all of Apple’s APIs to promises. The default CocoaPod provides Promises and the extensions for Foundation and UIKit. The other extensions are available by specifying additional subspecs in your `Podfile`, e.g.:

@abstr_code_section 

All our extensions are separate repositories at the [PromiseKit organization].

## I don't want the extensions!

Then don’t have them:

@abstr_code_section 

> _Note:_ Carthage installations come with no extensions by default.

## Choose Your Networking Library

Promise chains commonly start with a network operation. Thus, we offer extensions for `URLSession`:

@abstr_code_section 

And [Alamofire]:

@abstr_code_section 

Nowadays, considering that:

  * We almost always POST JSON
  * We now have `JSONDecoder`
  * PromiseKit now has `map` and other functional primitives
  * PromiseKit (like Alamofire, but not raw-`URLSession`) also defaults to having callbacks go to the main thread



We recommend vanilla `URLSession`. It uses fewer black boxes and sticks closer to the metal. Alamofire was essential until the three bullet points above became true, but nowadays it isn’t really necessary.

# Support

Please check our Troubleshooting Guide, and if after that you still have a question, ask at our [Gitter chat channel] or on [our bug tracker].
