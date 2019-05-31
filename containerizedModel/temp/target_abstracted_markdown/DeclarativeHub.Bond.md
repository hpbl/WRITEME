# Bond, Swift Bond

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

  


**Update: Bond @abstr_number has been released!** Check out the migration guide to learn more about the update.

Bond is a Swift binding framework that takes binding concepts to a whole new level. It's simple, powerful, type-safe and multi-paradigm - just like Swift.

Bond is built on top of ReactiveKit and bridges the gap between the reactive and imperative paradigms. You can use it as a standalone framework to simplify your state changes with bindings and reactive data sources, but you can also use it with ReactiveKit to complement your reactive data flows with bindings, reactive delegates and reactive data sources.

Bond is a backbone of the @abstr_hyperlink - a preferred architecture to be used with the framework.

## Why use Bond?

Say that you would like to do something when text of a text field changes. Well, you could setup the _target-action_ mechanism between your objects and go through all that target-action selector registration pain, or you could simply use Bond and do this:

@abstr_code_section 

Now, instead of printing what the user has typed, you can _bind_ it to a label:

@abstr_code_section 

Because binding to a label text property is so common, you can even do:

@abstr_code_section 

That one line establishes a binding between the text field's text property and label's text property. In effect, whenever user makes a change to the text field, that change will automatically be propagated to the label.

More often than not, direct binding is not enough. Usually you need to transform input is some way, like prepending a greeting to a name. As Bond is backed by @abstr_hyperlink it has full confidence in functional paradigm.

@abstr_code_section 

Whenever a change occurs in the text field, new value will be transformed by the closure and propagated to the label.

Notice how we have used `reactive.text` property of the fext field. It is an observable representation of the `text` property provided by Bond framework. There are many other extensions like that one for various UIKit components. They are all placed within the `.reactive` proxy.

For example, to observe button events do:

@abstr_code_section 

Handling `touchUpInside` event is used so frequently that Bond comes with the extension just for that event:

@abstr_code_section 

You can use any ReactiveKit operators to transform or combine signals. Following snippet depicts how values of two text fields can be reduced to a boolean value and applied to button's enabled property.

@abstr_code_section 

Whenever user types something into any of these text fields, expression will be evaluated and button state updated.

Bond's power is not, however, in coupling various UI components, but in the binding of the business logic layer (i.e. Service or View Model) to the View layer and vice-versa. Here is how one could bind user's number of followers property of the model to the label.

@abstr_code_section 

Point here is not in the simplicity of a value assignment to the text property of a label, but in the creation of a binding which automatically updates label text property whenever the number of followers change.

Bond also supports two way bindings. Here is an example of how you could keep username text field and username property of your View Model in sync (whenever any of them change, other one will be updated too):

@abstr_code_section 

Bond is also great for observing various different events and asynchronous tasks. For example, you could observe a notification like this:

@abstr_code_section 

Let me give you one last example. Say you have an array of repositories you would like to display in a collection view. For each repository you have a name and its owner's profile photo. Of course, photo is not immediately available as it has to be downloaded, but once you get it, you want it to appear in collection view's cell. Additionally, when user does 'pull down to refresh' and your array gets new repositories, you want those in collection view too.

So how do you proceed? Well, instead of implementing a data source object, observing photo downloads with KVO and manually updating the collection view with new items, with Bond you can do all that in just few lines:

@abstr_code_section 

Yes, that's right!

## Reactive Extensions

Bond is all about bindings and other reactive extensions. To learn more about how bindings work and how to create your own bindings check out the documentation on bindings.

If you are interested in what bindings and extensions are supported, just start typing `.reactive.` on any UIKit or AppKit object and you will get the list of available extensions. You can also skim over the @abstr_hyperlink to get an overview.

## Observable Collections

When working with arrays usually we need to know how exactly did an array change. New elements could have been inserted into the array and old ones deleted or updated. Bond provides mechanisms for observing such fine-grained changes.

For example, Bond provides you with a `(Mutable)ObservableArray` type that can be used to generate and observe fine-grained changes.

@abstr_code_section 

You work with the observable array like you would work with the array it encapsulates.

@abstr_code_section 

Peek into observable collections documentation to learn more about observable collections.

## Data Source Signals

Observable collections and other data source signals enable us to build powerful UI bindings. For example, an observable array can be bound to a collection view just like this:

@abstr_code_section 

No need to implement data source objects and do everything manually. Check out documentation on the data source signals to learn more about them and about table or collection view bindings. 

## Protocol Proxies

Bond provides `NSObject` extensions that make it easy to convert delegate method calls into signal. The extensions are built on top of ObjC runtime and enable you to intercept delegate method invocations and convert them into signal events.

Bond uses protocol proxies to implement table and collection view bindings and to provide signals like `tableView.reactive.selectedRowIndexPath`. Check out the protocol proxies documentation to learn more.

## Community Extensions

Make sure to check out Extensions directory. It contains extensions that make Bond easy to use with other frameworks and libraries, like Realm. 

If you have an extensions that makes your favourite framework work with Bond and you'd like to share it with everyone, we'd be more than happy to accept your PR. 

## Requirements

  * iOS @abstr_number . @abstr_number + / macOS @abstr_number . @abstr_number + / tvOS @abstr_number . @abstr_number +
  * Swift @abstr_number . @abstr_number 



## Communication

  * If you'd like to ask a question, open an issue.
  * If you found a bug, open an issue.
  * If you have a feature request, open an issue.
  * If you want to contribute, submit a pull request (include unit tests).



## Installation

### Carthage

@abstr_number . Add the following to your _Cartfile_ :
    
    
     @abstr_code_section
    

@abstr_number . Run `carthage update` @abstr_number . Add the framework as described in @abstr_hyperlink 

### Accio

@abstr_number . Add the following to your Package.swift:
    
    
     @abstr_code_section
    

@abstr_number . Next, add `Bond` to your App targets dependencies like so:
    
    
     @abstr_code_section
    

@abstr_number . Then run `accio update`.

### CocoaPods

@abstr_number . Add the following to your _Podfile_ :
    
    
     @abstr_code_section
    

@abstr_number . Run `pod install`.

## License

The MIT License (MIT)

Copyright (c) @abstr_number - @abstr_number Srdan Rasic (@srdanrasic)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
