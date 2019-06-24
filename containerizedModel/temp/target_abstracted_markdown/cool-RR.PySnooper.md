# PySnooper - Never use print for debugging again

@abstr_hyperlink 

**PySnooper** is a poor man's debugger.

You're trying to figure out why your Python code isn't doing what you think it should be doing. You'd love to use a full-fledged debugger with breakpoints and watches, but you can't be bothered to set one up right now.

You want to know which lines are running and which aren't, and what the values of the local variables are.

Most people would use `print` lines, in strategic locations, some of them showing the values of variables.

**PySnooper** lets you do the same, except instead of carefully crafting the right `print` lines, you just add one decorator line to the function you're interested in. You'll get a play-by-play log of your function, including which lines ran and when, and exactly when local variables were changed.

What makes **PySnooper** stand out from all other code intelligence tools? You can use it in your shitty, sprawling enterprise codebase without having to do any setup. Just slap the decorator on, as shown below, and redirect the output to a dedicated log file by specifying its path as the first argument.

# Example

We're writing a function that converts a number to binary, by returning a list of bits. Let's snoop on it by adding the `@pysnooper.snoop()` decorator:

@abstr_code_section The output to stderr is:

@abstr_code_section 

Or if you don't want to trace an entire function, you can wrap the relevant part in a `with` block:

@abstr_code_section 

which outputs something like:

@abstr_code_section 

# Features

If stderr is not easily accessible for you, you can redirect the output to a file:

@abstr_code_section 

You can also pass a stream or a callable instead, and they'll be used.

See values of some expressions that aren't local variables:

@abstr_code_section 

Expand values to see all their attributes or items of lists/dictionaries:

@abstr_code_section 

This will output lines like:

@abstr_code_section 

(see Advanced Usage for more control)

Show snoop lines for functions that your function calls:

@abstr_code_section 

Start all snoop lines with a prefix, to grep for them easily:

@abstr_code_section 

On multi-threaded apps identify which thread are snooped in output:

@abstr_code_section 

PySnooper supports decorating generators.

You can also customize the repr of an object:

@abstr_code_section 

You will get `l = list(size= @abstr_number )` for the list, and `a = ndarray(shape=( @abstr_number , @abstr_number ), dtype=float @abstr_number )` for the ndarray. The `custom_repr` are matched in order, if one condition matches, no further conditions will be checked.

# Installation

You can install **PySnooper** by:

  * pip: @abstr_code_section 

  * conda with conda-forge channel: @abstr_code_section 




# Advanced Usage

`watch_explode` will automatically guess how to expand the expression passed to it based on its class. You can be more specific by using one of the following classes:

@abstr_code_section 

Exclude specific keys/attributes/indices with the `exclude` parameter, e.g. `Attrs('x', exclude=('_foo', '_bar'))`.

Add a slice after `Indices` to only see the values within that slice, e.g. `Indices('z')[- @abstr_number :]`.

@abstr_code_section 

# Contribute

@abstr_hyperlink are always welcome! Please, write tests and run them with @abstr_hyperlink .

Tox installs all dependencies automatically. You only need to install Tox itself:

@abstr_code_section 

List all environments `tox` would run:

@abstr_code_section 

If you want to run tests against all target Python versions use @abstr_hyperlink to install them. Otherwise, you can run only linters and the ones you have already installed on your machine:

@abstr_code_section 

Or just install project in developer mode with test dependencies:

@abstr_code_section 

And run tests:

@abstr_code_section 

Tests should pass before you push your code. They will be run again on Travis CI.

# License

Copyright (c) @abstr_number Ram Rachum and collaborators, released under the MIT license.

I provide @abstr_hyperlink and I @abstr_hyperlink to teach people Python and related topics.

# Media Coverage

@abstr_hyperlink and @abstr_hyperlink ( @abstr_number April @abstr_number )
