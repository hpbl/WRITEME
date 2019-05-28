## JavaScript Arithmetic Lab

## Objectives

@abstr_number . Practice doing math with JavaScript @abstr_number . Practice writing functions that do things with numbers @abstr_number . Practice parsing strings as numbers

## Introduction

In this lab, we're going to practice writing functions and manipulating numbers in JavaScript. First, though, we need to go over some basic math. In this lab, we're going to learn about various arithmetic operators. What's an operator, you say? It's a symbol that _operates_ on one or more (usually two) objects — `+` is a good example. The `+` operator says "add what's to the left of `+` and what's to the right of `+` together." Easy-peasy!

As you read through this lesson, you're going to be adding your solutions to `index.js`. You'll write a total of eight functions; use the results of running `learn test` in your IDE to guide you towards the right function names and functionality.

## Basic Math

The most fundamental math operations work as one might expect in JavaScript: `+` adds two numbers; `-` subtracts one number from another; `*` multiplies two numbers; and `/` divides one number by another. For example (as usual, follow along in console!)

@abstr_code_section 

At this point, we can fix the first _four_ broken tests: we can define functions `add()`, `subtract()`, `multiply()`, `divide()` in `index.js`.

## Math + Assignment

Additionally, we can increment (`++`) and decrement (`--`) a number if it's assigned to a variable:

@abstr_code_section 

We can also put the incrementor and decrementor operations before the number:

@abstr_code_section 

But generally, you will see them placed _after_ the number (and we recommend that that's where you put them). If you're interested in the difference, take a look @abstr_hyperlink 

And, while we're on the subject, you'll usually only want to use these incrementors and decrementors when the shorthand makes what you're writing easier to read (more on when _exactly_ later). Instead, it's best to use the basic arithmetic operators combined with `=`. For the examples below, assume that `number` is equal to `@abstr_number` (and resets for every example).

  * `+=` modifies the value to the operator's left by adding to it the value to the operator's right:

@abstr_code_section 

  * `-=` modifies the value to the operator's left by subtracting from it the value to the operator's right:

@abstr_code_section 

  * `*=` modifies the value to the operator's left by multiplying it by the value to the operator's right:

@abstr_code_section 

  * `/=` modifies the value to the operator's left by dividing it by the value to the operator's right:

@abstr_code_section 




The thing to remember about these methods is that they modify the variable in place. So if we have two functions that depend on the same external variable, the order in which they're called matters. Follow along in console:

@abstr_code_section 

**Because these methods are more explicit, prefer`+=` to `++` and `-=` to `--` (usually).**

Okay, now we're ready to write solutions for the next two functions: `inc(n)` and `dec(n)`.

## Parsing Numbers

Sometimes, we'll receive a number — well, we know it's a number, as we've seen many numbers in the past. JavaScript, however, won't know that it's a number because it shows up wrapped in quotes — JavaScript, then, thinks it's a string.

Luckily, JavaScript gives us tools to turn these strings into proper numbers (that is, numbers that JavaScript understands).

### `parseInt()`

The first such tool is the function `parseInt()`, which accepts two arguments: the value to parse and the base of the value being parsed. _Usually_ you will want to work with base @abstr_number , so a typical call to `parseInt()` looks like

@abstr_code_section 

What happens if we pass a representation of a non-integer to `parseInt()`? Let's try it:

@abstr_code_section 

If we enter the above in console, we'll see that `parseInt()` forces the parsed number to be an integer — which makes sense when we think about it, right?

What happens, though, if we pass utter nonsense to `parseInt()`? Go ahead and try it in the console — something like

@abstr_code_section 

What did it return? `NaN`? What is that?

`NaN` stands for "not a number" — pretty handy, right? This is the number (in the JavaScript sense) that JavaScript returns when it can't determine a valid value for a numeric operation.

### `parseFloat()`

Above, we saw that `parseInt()` lops off everything after the decimal point and only returns integers. If we want to preserve decimals, we'll need to use `parseFloat()`.

Unlike `parseInt()`, `parseFloat()` accepts only a single argument, the thing to be parsed. We can use it like so:

@abstr_code_section 

You're now ready to solve the final two tests in this lab, `makeInt(n)` and `preserveDecimal(n)`.

## Resources

  * `parseInt()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

  * `parseFloat()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat




View @abstr_hyperlink on Learn.co and start learning to code for free.
