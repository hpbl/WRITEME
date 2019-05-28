# JavaScript Flow Control

## Objectives

  * Write `if` statements in JS
  * Write `if`-`else if`-`else` statements in JS
  * Use the ternary operator in JS
  * Write `switch` statements in JS



## About

Sometimes, we only want to allow the execution of code under certain conditions.

Think of it this way. When you're driving a car, you can only go through a light **if** the light is green. **Otherwise** , if the light is yellow, you prepare to slow down; and if the light is red, you stop. Notice that we have distinct cases that we want to check for.

In programming, when we check for a statement in this way, we check to see whether the statement is `true` or `false`. JavaScript, being the friendly language that it is, uses `true` and `false` directly to mean exactly what they say.

## Comparisons

The example above might be written, in pseudo-JavaScript (for once, this won't work in the browser console), like this:

@abstr_code_section 

When we get down to it, every `if` statement like the above is saying, "If the thing in the parentheses is `true`, then do what's between the curly braces."

But before we dive in to `if` statements, how do the things in parentheses _become_ `true` or `false`?

JavaScript lets us compare things. Most of these comparisons come straight from math: we can ask if something is less than something else (enter these in your console!):

@abstr_code_section 

We can ask if something is greater than something else:

@abstr_code_section 

We can even ask if something is less-than-or-equal-to something else:

@abstr_code_section 

or greater-than-or-equal-to something:

@abstr_code_section 

How do we test if something is _exactly_ equal to something else? We know that we can't just use `=`, because that's how we assign values to variables. Instead, we need to use `===`:

@abstr_code_section 

**Top Tip** : Sometimes you'll see only `==` for comparison in JavaScript. It's best to use `===`, as the former will try to _coerce_ values in order to compare them, meaning that it's not always comparing what it _says_ it's comparing!

## Combining Comparisons

We can string together these comparisons using `&&` (pronounced "and") and `||` ("or"):

@abstr_code_section 

With `&&`, _both_ statements (to the left and right of `&&`) must be `true` in order for the entire _expression_ (that is, the entire _phrase_) to be `true`; with `||`, only one of the statements needs to be `true`.

Keep in mind that JavaScript reads these combinations from left to right, returns the last statement it saw, and only evaluates as many statements as necessary. So if we write,

@abstr_code_section 

JavaScript won't return `true`, it will return `@abstr_number`. If instead we write,

@abstr_code_section 

JavaScript will return `false`, because it stops evaluating the `&&` expression (again, this just means the entire phrase of comparisons) on its first false encounter. Similarly, if we write,

@abstr_code_section 

JavaScript will return 'alphabet', because it needs to evaluate the right-hand side of `||` (since `@abstr_number < @abstr_number` is `false`). But if we write,

@abstr_code_section 

JavaScript simply returns `true` — it doesn't even check the right-hand side of `||`.

## Controlling the flow of our programs

JavaScript lets us control what blocks of code to execute using `if` statements, `if`-`else` statements, `if`-`else if`-`else` statements, ternary operators, and `switch` statements.

You'll be writing your code in `flow-control.js`. Make sure to run the tests using `learn`.

### `if` Statements

`if` statements look like this:

@abstr_code_section 

They work as the name implies: _if_ `something` is _truthy_ (so the boolean `true` or anything other than the empty string (`''`), `@abstr_number`, `null`, or `undefined`), the code in between the curly braces runs; if not, the code between the curly braces is skipped.

Now, in `flow-control.js` let's write a function called `basicTeenager` that accepts an age as a parameter. The function should contain an if-statement that checks to see if the age is a teenager. If the age is between @abstr_number and @abstr_number , return `"You are a teenager!"`

### `if`-`else` Statements

You will often see an `if` statement used in combination with an `else` clause. An `else` clause will only get executed if the previous `if` statement is falsey.

Syntax:

@abstr_code_section 

  * Define a function `teenager` that accepts an age as a parameter. If the age is between @abstr_number and @abstr_number it should return `"You are a teenager!"`. Otherwise, the function should return `"You are not a teenager"`.



### `if`/`else if` Statements

`if` statements can also be combined with an `else if` clause. This is like an `else` statement, but with its own condition. It will only run if its condition is true, and the previous statement's condition was false.

@abstr_code_section 

You can optionally add a final `else` statement after all of your `else if` statements. You can probably guess what will happen: if _all of the other statements_ are falsey, this final `else` block will execute; otherwise, an earlier statement executes and the `else` block is skipped.

@abstr_code_section 

  * Define a function `ageChecker` that takes in an age as a parameter. If the age is between @abstr_number - @abstr_number it should return `"You are a teenager!"`. If the age is @abstr_number or below, it should return `"You are a kid"`. If the age is above @abstr_number , it should return `"You are a grownup"`



**Top tip** : Remember, if you place a `return` statement before the end of the function, anything after `return` **won't get executed**. We can use this to make code terser:

@abstr_code_section 

The above function will return `true` if `lightColor` is `'green'` — go ahead and try it out.

@abstr_code_section 

And `false` otherwise:

@abstr_code_section 

Notice that we didn't have to use an `else` statement; we can just depend on `return`.

We need to be careful with `return`, however, because it's easy to return too early and not execute important parts of the function. For example,

@abstr_code_section 

will _always_ return `true`, even if `lightColor` is `'red'`. Try it!

@abstr_code_section 

And that's a great way to cause an accident.

### Ternary Operator

You can think of it as a shortcut for the `if-else` statement.

This operator tests a condition; if the condition is truthy, it evaluates the left-hand side of the colon; otherwise it evaluates the right-hand side of the colon.

Syntax:

@abstr_code_section 

  * Define a function `ternaryTeenager` that accepts age as a parameter. The body of the function should use the ternary operator to return `"You are a teenager"` if age is between @abstr_number - @abstr_number and returns `"You are not a teenager"` if the age is anything else.



**Top tip** : In order for the function to actually **return** the evaluation of the ternary operator, you'll need to prepend `return` to the expression:

@abstr_code_section 

## Switch Statements

Switch statements acts like a big if/else if/else chain. The switch expression is evaluated once and the value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.

Syntax:

@abstr_code_section 

Example:

@abstr_code_section 

In the example above, we'll see `"You should eat a big chocolate cake"` printed to the console. If we change the value of the `mood` variable to `sad` you'll see `"You should eat a pint of ice cream"`. If the value of `mood` changed to `"grumpy"`, the default statement would trigger and print out `"That's not a mood we support"`.

  * Define a function `switchAge` that accepts an age as a parameter. The case statement should switch on `age` and return `"You are a teenager"` if the age is @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , or @abstr_number , and return `"You have an age"` as the default.



As with any function, `return` will halt execution at any point. Thus if we wrote,

@abstr_code_section 

the `console.log()` statement at the bottom of the function will _never run_. This is a major difference between `return` and `break`: `return` _exits_ the function and _returns_ a value; `break` exits a _block_ and does not (generally speaking) have a value associated with it.

## Resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



View @abstr_hyperlink on Learn.co and start learning to code for free.
