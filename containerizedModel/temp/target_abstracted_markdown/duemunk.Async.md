# Async

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Now more than syntactic sugar for asynchronous dispatches in Grand Central Dispatch ( @abstr_hyperlink ) in Swift

**Async** sugar looks like this: @abstr_code_section 

So even though GCD has nice-ish syntax as of Swift @abstr_number . @abstr_number , compare the above with: @abstr_code_section 

**AsyncGroup** sugar looks like this: @abstr_code_section 

### Install

#### CocoaPods

@abstr_code_section 

#### Carthage

@abstr_code_section 

### Benefits

@abstr_number . Avoid code indentation by chaining @abstr_number . Arguments and return types reduce polluted scopes

### Things you can do

Supports the modern queue classes: @abstr_code_section 

Chain as many blocks as you want: @abstr_code_section 

Store reference for later chaining: @abstr_code_section 

Custom queues: @abstr_code_section 

Dispatch block after delay: @abstr_code_section 

Cancel blocks that aren't already dispatched: @abstr_code_section 

Wait for block to finish – an ease way to continue on current queue after background task: @abstr_code_section 

### How does it work

The way it work is by using the new notification API for GCD introduced in OS X @abstr_number . @abstr_number and iOS @abstr_number . Each chaining block is called when the previous queue has finished. @abstr_code_section 

The syntax part of the chaining works by having class methods on the `Async` object e.g. `Async.main {}` which returns a struct. The struct has matching methods e.g. `theStruct.main {}`.

### Known bugs

Modern GCD queues don't work as expected in the iOS Simulator. See issues @abstr_hyperlink , @abstr_hyperlink .

### Known improvements

The `dispatch_block_t` can't be extended. Workaround used: Wrap `dispatch_block_t` in a struct that takes the block as a property.

### Apply

There is also a wrapper for @abstr_hyperlink for quick parallelisation of a `for` loop. @abstr_code_section Note that this function returns after the block has been run all @abstr_number times i.e. it is not asynchronous. For asynchronous behaviour, wrap it in a an `Async` block like `Async.background { Apply.background( @abstr_number ) { ... } }`.

### AsyncGroup

**AsyncGroup** facilitates working with groups of asynchronous blocks.

Multiple dispatch blocks with GCD: @abstr_code_section All modern queue classes: @abstr_code_section Custom queues: @abstr_code_section Wait for group to finish: @abstr_code_section Custom asynchronous operations: @abstr_code_section 

### License

The MIT License (MIT)

Copyright (c) @abstr_number Tobias Due Munk

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
