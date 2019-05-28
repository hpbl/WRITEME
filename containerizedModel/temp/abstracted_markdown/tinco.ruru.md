# Ruru (Rust + Ruby)

## Native Ruby extensions in Rust

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image   
**@abstr_hyperlink**   
**@abstr_hyperlink**   


Have you ever considered rewriting some parts of your ~~slow~~ Ruby application?

Just replace your Ruby application with Rust, method by method, class by class. It does not require you to change the interface of your classes or to change any other Ruby code.

As simple as Ruby, as efficient as Rust.

## Contents

  * Examples 
    * The famous <code>String#blank?</code> method
    * Simple Sidekiq-compatible server
    * Safe conversions
    * Wrapping Rust data to Ruby objects
    * True parallelism
    * Defining a new class
    * Replacing only several methods instead of the whole class
    * Class definition DSL
    * Calling Ruby code from Rust
  * ... and why is FFI not enough?
  * How do I use it?
  * Contributors are welcome!
  * License



## Examples

### The famous `String#blank?` method

The fast `String#blank?` implementation by Yehuda Katz

@abstr_code_section 

### Simple Sidekiq-compatible server

@abstr_hyperlink 

### Safe conversions

Since @abstr_number . @abstr_number . @abstr_number safe conversions are available for built-in Ruby types and for custom types.

Let's imagine that we are writing an HTTP server. It should handle requests which are passed from Ruby side.

Any object which responds to `#body` method is considered as a valid request.

@abstr_code_section 

### Wrapping Rust data to Ruby objects

Wrap `Server`s to `RubyServer` objects

@abstr_code_section 

### True parallelism

Ruru provides a way to enable true parallelism for Ruby threads by releasing GVL (GIL).

It means that a thread with released GVL runs in parallel with other threads without being interrupted by GVL.

Current example demonstrates a "heavy" computation (`@abstr_number * @abstr_number` for simplicity) run in parallel.

@abstr_code_section 

### Defining a new class

Let's say you have a `Calculator` class.

@abstr_code_section 

You have found that it's very slow to call `pow_ @abstr_number` for big numbers and decided to replace the whole class with Rust.

@abstr_code_section 

Ruby:

@abstr_code_section 

Nothing has changed in the API of class, thus there is no need to change any code elsewhere in the app.

### Replacing only several methods instead of the whole class

If the `Calculator` class from the example above has more Ruby methods, but we want to replace only `pow_ @abstr_number`, use `Class::from_existing()`

@abstr_code_section 

### Class definition DSL

@abstr_code_section 

Which corresponds to the following Ruby code:

@abstr_code_section 

See documentation for `Class` and `Object` for more information.

### Calling Ruby code from Rust

Getting an account balance of some `User` whose name is John and who is @abstr_number or @abstr_number years old.

@abstr_code_section 

@abstr_code_section 

**Check out @abstr_hyperlink for many more examples!**

## ... and why is **FFI** not enough?

  * No support of native Ruby types;

  * No way to create a standalone application to run the Ruby VM separately;

  * No way to call your Ruby code from Rust;




## How do I use it?

Warning! The crate is a WIP.

It is recommended to use @abstr_hyperlink gem, a Rake-based helper for building and distributing Rust-based Ruby extensions.

To be able to use Ruru, make sure that your Ruby version is @abstr_number . @abstr_number . @abstr_number or higher.

@abstr_number . Your local MRI copy has to be built with the `--enable-shared` option. For example, using rbenv:

@abstr_code_section 

@abstr_number . Add Ruru to `Cargo.toml`

@abstr_code_section 

@abstr_number . Compile your library as a `dylib`

@abstr_code_section 

@abstr_number . Create a function which will initialize the extension

@abstr_code_section 

@abstr_number . Build extension

@abstr_code_section 

or using Thermite

@abstr_code_section 

@abstr_number . On the ruby side, open the compiled `dylib` and call the function to initialize extension

@abstr_code_section 

@abstr_number . Ruru is ready :heart:

## Contributors are welcome!

If you have any questions, join Ruru on @abstr_hyperlink 

## License

MIT License

Copyright (c) @abstr_number - @abstr_number Dmitry Gritsay

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Icon is designed by @abstr_hyperlink .
