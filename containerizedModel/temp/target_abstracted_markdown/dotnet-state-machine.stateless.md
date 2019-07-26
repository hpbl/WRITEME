# Stateless @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**Create _state machines_ and lightweight _state machine-based workflows_ directly in .NET code:**

@abstr_code_section 

This project, as well as the example above, was inspired by @abstr_hyperlink .

## Features

Most standard state machine constructs are supported:

  * Generic support for states and triggers of any .NET type (numbers, strings, enums, etc.)
  * Hierarchical states
  * Entry/exit events for states
  * Guard clauses to support conditional transitions
  * Introspection



Some useful extensions are also provided:

  * Ability to store state externally (for example, in a property tracked by an ORM)
  * Parameterised triggers
  * Reentrant states
  * Export to DOT graph



### Hierarchical States

In the example below, the `OnHold` state is a substate of the `Connected` state. This means that an `OnHold` call is still connected.

@abstr_code_section 

In addition to the `StateMachine.State` property, which will report the precise current state, an `IsInState(State)` method is provided. `IsInState(State)` will take substates into account, so that if the example above was in the `OnHold` state, `IsInState(State.Connected)` would also evaluate to `true`.

### Entry/Exit Events

In the example, the `StartCallTimer()` method will be executed when a call is connected. The `StopCallTimer()` will be executed when call completes (by either hanging up or hurling the phone against the wall.)

The call can move between the `Connected` and `OnHold` states without the `StartCallTimer()` and `StopCallTimer()` methods being called repeatedly because the `OnHold` state is a substate of the `Connected` state.

Entry/Exit event handlers can be supplied with a parameter of type `Transition` that describes the trigger, source and destination states.

### External State Storage

Stateless is designed to be embedded in various application models. For example, some ORMs place requirements upon where mapped data may be stored, and UI frameworks often require state to be stored in special "bindable" properties. To this end, the `StateMachine` constructor can accept function arguments that will be used to read and write the state values:

@abstr_code_section 

In this example the state machine will use the `myState` object for state storage.

Another example can be found in the JsonExample solution, located in the example folder. 

### Introspection

The state machine can provide a list of the triggers that can be successfully fired within the current state via the `StateMachine.PermittedTriggers` property. Use `StateMachine.GetInfo()` to retreive information about the state configuration.

### Guard Clauses

The state machine will choose between multiple transitions based on guard clauses, e.g.:

@abstr_code_section 

Guard clauses within a state must be mutually exclusive (multiple guard clauses cannot be valid at the same time.) Substates can override transitions by respecifying them, however substates cannot disallow transitions that are allowed by the superstate.

The guard clauses will be evaluated whenever a trigger is fired. Guards should therefor be made side effect free.

### Parameterised Triggers

Strongly-typed parameters can be assigned to triggers:

@abstr_code_section 

Trigger parameters can be used to dynamically select the destination state using the `PermitDynamic()` configuration method.

### Ignored Transitions and Reentrant States

Firing a trigger that does not have an allowed transition associated with it will cause an exception to be thrown.

To ignore triggers within certain states, use the `Ignore(TTrigger)` directive:

@abstr_code_section 

Alternatively, a state can be marked reentrant so its entry and exit events will fire even when transitioning from/to itself:

@abstr_code_section 

By default, triggers must be ignored explicitly. To override Stateless's default behaviour of throwing an exception when an unhandled trigger is fired, configure the state machine using the `OnUnhandledTrigger` method:

@abstr_code_section 

### Export to DOT graph

It can be useful to visualize state machines on runtime. With this approach the code is the authoritative source and state diagrams are by-products which are always up to date.

@abstr_code_section 

The `UmlDotGraph.Format()` method returns a string representation of the state machine in the @abstr_hyperlink , e.g.:

@abstr_code_section 

This can then be rendered by tools that support the DOT graph language, such as the @abstr_hyperlink from @abstr_hyperlink or @abstr_hyperlink . See http://www.webgraphviz.com for instant gratification. Command line example: `dot -T pdf -o phoneCall.pdf phoneCall.dot` to generate a PDF file.

### Async triggers

On platforms that provide `Task<T>`, the `StateMachine` supports `async` entry/exit actions and so-on:

@abstr_code_section 

Asynchronous handlers must be registered using the `*Async()` methods in these cases.

To fire a trigger that invokes asynchronous actions, the `FireAsync()` method must be used:

@abstr_code_section 

**Note:** while `StateMachine` may be used _asynchronously_, it remains single-threaded and may not be used _concurrently_ by multiple threads.

## Building

Stateless runs on .NET @abstr_number . @abstr_number + and practically all modern .NET platforms by targeting .NET Standard @abstr_number . @abstr_number . Visual Studio @abstr_number is required to build the solution.

## Project Goals

This page is an almost-complete description of Stateless, and its explicit aim is to remain minimal.

Please use the issue tracker or the if you'd like to report problems or discuss features.

(_Why the name? Stateless implements the set of rules regarding state transitions, but, at least when the delegate version of the constructor is used, doesn't maintain any internal state itself._)
