# Design Patterns implemented in Swift @abstr_number . @abstr_number 

A short cheat-sheet with Xcode @abstr_number . @abstr_number Playground ( @abstr_hyperlink ).

👷 Project maintained by: @abstr_hyperlink (Oktawian Chojnacki)

🚀 How to generate README, Playground and zip from source: @abstr_hyperlink 

@abstr_code_section 

# Behavioral

> In software engineering, behavioral design patterns are design patterns that identify common communication patterns between objects and realize these patterns. By doing so, these patterns increase flexibility in carrying out this communication.
> 
> **Source:** @abstr_hyperlink 

## 🐝 Chain Of Responsibility

The chain of responsibility pattern is used to process varied requests, each of which may be dealt with by a different handler.

### Example:

@abstr_code_section 

### Usage

@abstr_code_section 

## 👫 Command

The command pattern is used to express a request, including the call to be made and all of its required parameters, in a command object. The command may then be executed immediately or held for later use.

### Example:

@abstr_code_section 

### Usage:

@abstr_code_section 

## 🎶 Interpreter

The interpreter pattern is used to evaluate sentences in a language.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 🍫 Iterator

The iterator pattern is used to provide a standard interface for traversing a collection of items in an aggregate object without the need to understand its underlying structure.

### Example:

@abstr_code_section 

### Usage

@abstr_code_section 

## 💐 Mediator

The mediator pattern is used to reduce coupling between classes that communicate with each other. Instead of classes communicating directly, and thus requiring knowledge of their implementation, the classes send messages via a mediator object.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 💾 Memento

The memento pattern is used to capture the current state of an object and store it in such a manner that it can be restored at a later time without breaking the rules of encapsulation.

### Example

@abstr_code_section 

Originator

@abstr_code_section 

Caretaker

@abstr_code_section 

### Usage

@abstr_code_section 

## 👓 Observer

The observer pattern is used to allow an object to publish changes to its state. Other objects subscribe to be immediately notified of any changes.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 🐉 State

The state pattern is used to alter the behaviour of an object as its internal state changes. The pattern allows the class for an object to apparently change at run-time.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 💡 Strategy

The strategy pattern is used to create an interchangeable family of algorithms from which the required process is chosen at run-time.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 🏃 Visitor

The visitor pattern is used to separate a relatively complex set of structured data classes from the functionality that may be performed upon the data that they hold.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

# Creational

> In software engineering, creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.
> 
> **Source:** @abstr_hyperlink 

## 🌰 Abstract Factory

The abstract factory pattern is used to provide a client with a set of related or dependant objects. The "family" of objects created by the factory are determined at run-time.

### Example

Protocols

@abstr_code_section 

Abstract factory

@abstr_code_section 

### Usage

@abstr_code_section 

## 👷 Builder

The builder pattern is used to create complex objects with constituent parts that must be created in the same order or using a specific algorithm. An external class controls the construction algorithm.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 🏭 Factory Method

The factory pattern is used to replace class constructors, abstracting the process of object generation so that the type of the object instantiated can be determined at run-time.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 🃏 Prototype

The prototype pattern is used to instantiate a new object by copying all of the properties of an existing object, creating an independent clone. This practise is particularly useful when the construction of a new object is inefficient.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 💍 Singleton

The singleton pattern ensures that only one object of a particular class is ever created. All further references to objects of the singleton class refer to the same underlying instance. There are very few applications, do not overuse this pattern!

### Example:

@abstr_code_section 

### Usage:

@abstr_code_section 

# Structural

> In software engineering, structural design patterns are design patterns that ease the design by identifying a simple way to realize relationships between entities.
> 
> **Source:** @abstr_hyperlink 

## 🔌 Adapter

The adapter pattern is used to provide a link between two otherwise incompatible types by wrapping the "adaptee" with a class that supports the interface required by the client.

### Example

@abstr_code_section 

**Adaptee**

@abstr_code_section 

**Adapter**

@abstr_code_section 

### Usage

@abstr_code_section 

## 🌉 Bridge

The bridge pattern is used to separate the abstract elements of a class from the implementation details, providing the means to replace the implementation details without modifying the abstraction.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 🌿 Composite

The composite pattern is used to create hierarchical, recursive tree structures of related objects where any element of the structure may be accessed and utilised in a standard manner.

### Example

Component

@abstr_code_section 

Leafs

@abstr_code_section 

Composite

@abstr_code_section 

### Usage:

@abstr_code_section 

## 🍧 Decorator

The decorator pattern is used to extend or alter the functionality of objects at run- time by wrapping them in an object of a decorator class. This provides a flexible alternative to using inheritance to modify behaviour.

### Example

@abstr_code_section 

### Usage:

@abstr_code_section 

## 🎁 Façade

The facade pattern is used to define a simplified interface to a more complex subsystem.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 🍃 Flyweight

The flyweight pattern is used to minimize memory usage or computational expenses by sharing as much as possible with other similar objects.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## ☔ Protection Proxy

The proxy pattern is used to provide a surrogate or placeholder object, which references an underlying object. Protection proxy is restricting access.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

## 🍬 Virtual Proxy

The proxy pattern is used to provide a surrogate or placeholder object, which references an underlying object. Virtual proxy is used for loading object on demand.

### Example

@abstr_code_section 

### Usage

@abstr_code_section 

# Info

📖 Descriptions from: @abstr_hyperlink 
