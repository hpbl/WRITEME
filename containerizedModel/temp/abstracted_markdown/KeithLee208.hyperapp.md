#  @abstr_hyperlink 

@abstr_hyperlink 

HyperApp is a `@abstr_number kb` functional JavaScript library for building modern UI applications.

## Install

@abstr_code_section 

## Usage

CDN @abstr_code_section 

Browserify @abstr_code_section 

## Examples

Hello world

@abstr_code_section 

@abstr_hyperlink 

Counter

@abstr_code_section 

@abstr_hyperlink 

Input

@abstr_code_section 

@abstr_hyperlink 

Drag & Drop

@abstr_code_section 

@abstr_hyperlink 

Todo

@abstr_code_section 

@abstr_hyperlink 

@abstr_hyperlink 

## Documentation

  * html
  * app 
    * model
    * update
    * view
    * effects
    * subs
    * hooks 
      * onAction
      * onUpdate
      * onError
    * root
  * Routing 
    * setLocation
    * href



## html

Use `html` to compose HTML elements.

@abstr_code_section 

`html` is a @abstr_hyperlink . If you are familiar with React, this is like JSX, but @abstr_hyperlink .

## app

Use `app` to bootstrap your app.

@abstr_code_section 

All properties are optional.

### model

A value or object that represents the entire state of your app.

To update the model, you send actions describing how the model should change. See view.

### update

An object composed of functions known as reducers. These are a kind of action you send to update the model.

A reducer describes how the model should change by returning a new model or part of a model.

@abstr_code_section 

If a reducer returns part of a model, that part will be merged with the current model.

You call reducers inside a view, effect or subscription.

Reducers have a signature `(model, data)`, where

  * `model` is the current model, and
  * `data` is the data sent along with the action.



### view

The view is a function that returns HTML using the `html` function.

The view has a signature `(model, msg, params)`, where

  * `model` is the current model,
  * `msg` is an object you use to send actions (call reducers or cause effects) and
  * `params` are the route parameters.



Use `msg` to send actions.

@abstr_code_section 

where `data` is any data you want to pass to the reducer / effect.

_Example_

@abstr_code_section 

@abstr_hyperlink 

The view object may accommodate multiple views too. See routing.

_Example_

@abstr_code_section 

@abstr_hyperlink 

### effects

Effects cause side effects and are often asynchronous, like writing to a database, or sending requests to servers. They can dispatch other actions too.

Effects have a signature `(model, msg, error)`, where

  * `model` is the current model,
  * `msg` is an object you use to call reducers / cause effects (see view), and
  * `error` is a function you may call with an error if something goes wrong.



_Example_

@abstr_code_section 

@abstr_hyperlink 

### subs

Subscriptions are functions that run once when the @abstr_hyperlink . Use a subscription to register global events, like mouse or keyboard listeners.

While reducers and effects are actions _you_ cause, you can't call subscriptions directly.

A subscription has a signature `(model, msg, error)`.

_Example_

@abstr_code_section 

@abstr_hyperlink 

### hooks

Hooks are functions called for certain events during the lifetime of the app. You can use hooks to implement middleware, loggers, etc.

_Example_

@abstr_code_section 

@abstr_hyperlink 

#### onUpdate

Called when the model changes. Signature `(lastModel, newModel, data)`.

#### onAction

Called when an action (reducer or effect) is dispatched. Signature `(name, data)`.

#### onError

Called when you use the `error` function inside a subscription or effect. If you don't use this hook, the default behavior is to throw. Signature `(err)`.

### root

The root is the HTML element that will serve as a container for your app. If none is given, a `div` element is appended to the document.body.

## Routing

Instead of a view as a single function, declare an object with multiple views and use the route path as the key.

@abstr_code_section 

  * `/` index route, also used when no other route matches

  * `/:a/:b/:c` matches a route with three components using the regular expression `[A-Za-z @abstr_number - @abstr_number ]+` and stores each captured group in the params object, which is passed into the view function.




The route path syntax is based in the same syntax found in @abstr_hyperlink .

_Example_

@abstr_code_section 

@abstr_hyperlink 

### setLocation

To update the address bar relative location and render a different view, use `msg.setLocation(path)`.

_Example_

@abstr_code_section 

@abstr_hyperlink 

### href

As a bonus, we intercept all `<a href="/path">...</a>` clicks and call `msg.setLocation("/path")` for you. If you want to opt out of this, add the custom attribute `data-no-routing` to any anchor element that should be handled differently.

@abstr_code_section 

_Example_

@abstr_code_section 

@abstr_hyperlink 
