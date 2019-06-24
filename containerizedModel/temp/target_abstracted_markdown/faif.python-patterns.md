# python-patterns

A collection of design patterns and idioms in Python.

## Current Patterns

__Creational Patterns__:

| Pattern | Description | |:-------:| ----------- | | abstract_factory | use a generic function with specific factories | | borg | a singleton with shared-state among instances | | builder | instead of using multiple constructors, builder object receives parameters and returns constructed objects | | factory | delegate a specialized function/method to create instances | | lazy_evaluation | lazily-evaluated property pattern in Python | | pool | preinstantiate and maintain a group of instances of the same type | | prototype | use a factory and clones of a prototype for new instances (if instantiation is expensive) |

__Structural Patterns__:

| Pattern | Description | |:-------:| ----------- | | @abstr_number -tier | data<->business logic<->presentation separation (strict relationships) | | adapter | adapt one interface to another using a white-list | | bridge | a client-provider middleman to soften interface changes | | composite | lets clients treat individual objects and compositions uniformly | | decorator | wrap functionality with other functionality in order to affect outputs | | facade | use one class as an API to a number of others | | flyweight | transparently reuse existing instances of objects with similar/identical state | | front_controller | single handler requests coming to the application | | mvc | model<->view<->controller (non-strict relationships) | | proxy | an object funnels operations to something else |

__Behavioral Patterns__:

| Pattern | Description | |:-------:| ----------- | | chain_of_responsibility | apply a chain of successive handlers to try and process the data | | catalog | general methods will call different specialized methods based on construction parameter | | chaining_method | continue callback next object method | | command | bundle a command and arguments to call later | | iterator | traverse a container and access the container's elements | | mediator | an object that knows how to connect other objects and act as a proxy | | memento | generate an opaque token that can be used to go back to a previous state | | observer | provide a callback for notification of events/changes to data | | publish_subscribe | a source syndicates events/data to @abstr_number + registered listeners | | registry | keep track of all subclasses of a given class | | specification | business rules can be recombined by chaining the business rules together using boolean logic | | state | logic is organized into a discrete number of potential states and the next state that can be transitioned to | | strategy | selectable operations over the same data | | template | an object imposes a structure but takes pluggable components | | visitor | invoke a callback for all items of a collection |

__Design for Testability Patterns__:

| Pattern | Description | |:-------:| ----------- | | dependency_injection | @abstr_number variants of dependency injection |

__Fundamental Patterns__:

| Pattern | Description | |:-------:| ----------- | | delegation_pattern | an object handles a request by delegating to a second object (the delegate) |

__Others__:

| Pattern | Description | |:-------:| ----------- | | blackboard | architectural model, assemble different sub-system knowledge to build a solution, AI approach - non gang of four pattern | | graph_search | graphing algorithms - non gang of four pattern | | hsm | hierarchical state machine - non gang of four pattern |

## Videos

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

## Contributing

When an implementation is added or modified, please review the following guidelines:

##### Output

All files with example patterns have `### OUTPUT ###` section at the bottom (migration to OUTPUT = """...""" is in progress).

Run `append_output.sh` (e.g. `./append_output.sh borg.py`) to generate/update it.

##### Docstrings

Add module level description in form of a docstring with links to corresponding references or other useful information.

Add "Examples in Python ecosystem" section if you know some. It shows how patterns could be applied to real-world problems.

facade.py has a good example of detailed description, but sometimes the shorter one as in template.py would suffice.

In some cases class-level docstring with doctest would also help (see adapter.py) but readable OUTPUT section is much better.

##### Python @abstr_number / @abstr_number compatibility

Try to keep it (discussion is held in @abstr_hyperlink ) \- use new style classes (inherit from `object`) \- use `from __future__ import print_function`

##### Update README

When everything else is done - update corresponding part of README.

##### Travis CI

Please run `tox` or `tox -e ci @abstr_number` before submitting a patch to be sure your changes will pass CI.

You can also run `flake @abstr_number` or `pytest` commands manually. Examples can be found in `tox.ini`.

## Contributing via issue triage @abstr_hyperlink 

You can triage issues and pull requests which may include reproducing bug reports or asking for vital information, such as version numbers or reproduction instructions. If you would like to start triaging issues, one easy way to get started is to @abstr_hyperlink .
