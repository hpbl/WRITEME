# ReSwift

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**Supported Swift Versions:** Swift @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number 

For Swift @abstr_number . @abstr_number Support use @abstr_hyperlink or earlier.

# Introduction

ReSwift is a @abstr_hyperlink -like implementation of the unidirectional data flow architecture in Swift. ReSwift helps you to separate three important concerns of your app's components:

  * **State** : in a ReSwift app the entire app state is explicitly stored in a data structure. This helps avoid complicated state management code, enables better debugging and has many, many more benefits...
  * **Views** : in a ReSwift app your views update when your state changes. Your views become simple visualizations of the current app state.
  * **State Changes** : in a ReSwift app you can only perform state changes through actions. Actions are small pieces of data that describe a state change. By drastically limiting the way state can be mutated, your app becomes easier to understand and it gets easier to work with many collaborators.



The ReSwift library is tiny - allowing users to dive into the code, understand every single line and hopefully contribute.

ReSwift is quickly growing beyond the core library, providing experimental extensions for routing and time traveling through past app states!

Excited? So are we 🎉

Check out our @abstr_hyperlink 

# Table of Contents

  * About ReSwift
  * Why ReSwift?
  * Getting Started Guide
  * Installation
  * Checking Out Source Code
  * Demo
  * Extensions
  * Example Projects
  * Contributing
  * Credits
  * Get in touch



# About ReSwift

ReSwift relies on a few principles: \- **The Store** stores your entire app state in the form of a single data structure. This state can only be modified by dispatching Actions to the store. Whenever the state in the store changes, the store will notify all observers. \- **Actions** are a declarative way of describing a state change. Actions don't contain any code, they are consumed by the store and forwarded to reducers. Reducers will handle the actions by implementing a different state change for each action. \- **Reducers** provide pure functions, that based on the current action and the current app state, create a new app state

@abstr_image 

For a very simple app, that maintains a counter that can be increased and decreased, you can define the app state as following:

@abstr_code_section 

You would also define two actions, one for increasing and one for decreasing the counter. In the @abstr_hyperlink you can find out how to construct complex actions. For the simple actions in this example we can define empty structs that conform to action:

@abstr_code_section 

Your reducer needs to respond to these different action types, that can be done by switching over the type of action:

@abstr_code_section In order to have a predictable app state, it is important that the reducer is always free of side effects, it receives the current app state and an action and returns the new app state.

To maintain our state and delegate the actions to the reducers, we need a store. Let's call it `mainStore` and define it as a global constant, for example in the app delegate file:

@abstr_code_section 

Lastly, your view layer, in this case a view controller, needs to tie into this system by subscribing to store updates and emitting actions whenever the app state needs to be changed:

@abstr_code_section 

The `newState` method will be called by the `Store` whenever a new app state is available, this is where we need to adjust our view to reflect the latest app state.

Button taps result in dispatched actions that will be handled by the store and its reducers, resulting in a new app state.

This is a very basic example that only shows a subset of ReSwift's features, read the Getting Started Guide to see how you can build entire apps with this architecture. For a complete implementation of this example see the @abstr_hyperlink project.

@abstr_hyperlink .

# Why ReSwift?

Model-View-Controller (MVC) is not a holistic application architecture. Typical Cocoa apps defer a lot of complexity to controllers since MVC doesn't offer other solutions for state management, one of the most complex issues in app development.

Apps built upon MVC often end up with a lot of complexity around state management and propagation. We need to use callbacks, delegations, Key-Value-Observation and notifications to pass information around in our apps and to ensure that all the relevant views have the latest state.

This approach involves a lot of manual steps and is thus error prone and doesn't scale well in complex code bases.

It also leads to code that is difficult to understand at a glance, since dependencies can be hidden deep inside of view controllers. Lastly, you mostly end up with inconsistent code, where each developer uses the state propagation procedure they personally prefer. You can circumvent this issue by style guides and code reviews but you cannot automatically verify the adherence to these guidelines.

ReSwift attempts to solve these problem by placing strong constraints on the way applications can be written. This reduces the room for programmer error and leads to applications that can be easily understood - by inspecting the application state data structure, the actions and the reducers.

This architecture provides further benefits beyond improving your code base:

  * Stores, Reducers, Actions and extensions such as ReSwift Router are entirely platform independent - you can easily use the same business logic and share it between apps for multiple platforms (iOS, tvOS, etc.)
  * Want to collaborate with a co-worker on fixing an app crash? Use @abstr_hyperlink to record the actions that lead up to the crash and send them the JSON file so that they can replay the actions and reproduce the issue right away.
  * Maybe recorded actions can be used to build UI and integration tests?



The ReSwift tooling is still in a very early stage, but aforementioned prospects excite me and hopefully others in the community as well!

# Getting Started Guide

@abstr_hyperlink .

To get an understanding of the core principles we recommend reading the brilliant @abstr_hyperlink .

# Installation

## CocoaPods

You can install ReSwift via @abstr_hyperlink by adding it to your `Podfile`: @abstr_code_section 

And run `pod install`.

## Carthage

You can install ReSwift via @abstr_hyperlink by adding the following line to your `Cartfile`:

@abstr_code_section 

## Accio

You can install ReSwift via @abstr_hyperlink by adding the following line to your `Package.swift`:

@abstr_code_section 

Next, add `ReSwift` to your App targets dependencies like so:

@abstr_code_section 

Then run `accio update`.

## Swift Package Manager

You can install ReSwift via @abstr_hyperlink by adding the following line to your `Package.swift`:

@abstr_code_section 

# Checking out Source Code

After checking out the project run `pod install` to get the latest supported version of @abstr_hyperlink , which we use to ensure a consistent style in the codebase.

# Demo

Using this library you can implement apps that have an explicit, reproducible state, allowing you, among many other things, to replay and rewind the app state, as shown below:

@abstr_image 

# Extensions

This repository contains the core component for ReSwift, the following extensions are available:

  * @abstr_hyperlink : Provides a ReSwift middleware that lets you dispatch thunks (action creators) to encapsulate processes like API callbacks.
  * @abstr_hyperlink : Provides a ReSwift compatible Router that allows declarative routing in iOS applications
  * @abstr_hyperlink : Provides a `Store` implementation that records all `Action`s and allows for hot-reloading and time travel



# Example Projects

  * @abstr_hyperlink : A very simple counter app implemented with ReSwift.
  * @abstr_hyperlink : This example builds on the simple CounterExample app, adding time travel with @abstr_hyperlink and routing with @abstr_hyperlink .
  * @abstr_hyperlink : A real world example, involving authentication, network requests and navigation. Still WIP but should be the best resource for starting to adapt `ReSwift` in your own app.
  * @abstr_hyperlink : A simple App that queries the tmdb.org API to display the latest movies. Allows searching and viewing details.
  * @abstr_hyperlink : A real world application being built with ReSwift - currently still very early on. It is not up to date with the latest version of ReSwift, but is the best project for demonstrating time travel.
  * @abstr_hyperlink : A basic Twitter search implementation built with ReSwift and RxSwift, involing Twitter authentication, network requests and navigation.



## Production Apps with Open Source Code

  * @abstr_hyperlink Official Product Hunt client for OS X.



# Contributing

There's still a lot of work to do here! We would love to see you involved! You can find all the details on how to get started in the Contributing Guide.

# Credits

  * Thanks a lot to @abstr_hyperlink for building @abstr_hyperlink - all ideas in here and many implementation details were provided by his library.



# Get in touch

If you have any questions, you can find the core team on twitter:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



We also have a @abstr_hyperlink 
