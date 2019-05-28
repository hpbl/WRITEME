# Airbnb JavaScript Style Guide() {

_A mostly reasonable approach to JavaScript_

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Other Style Guides \- @abstr_hyperlink \- React \- CSS-in-JavaScript \- @abstr_hyperlink \- @abstr_hyperlink 

## Table of Contents

@abstr_number . Types @abstr_number . References @abstr_number . Objects @abstr_number . Arrays @abstr_number . Destructuring @abstr_number . Strings @abstr_number . Functions @abstr_number . Arrow Functions @abstr_number . Classes & Constructors @abstr_number . Modules @abstr_number . Iterators and Generators @abstr_number . Properties @abstr_number . Variables @abstr_number . Hoisting @abstr_number . Comparison Operators & Equality @abstr_number . Blocks @abstr_number . Control Statements @abstr_number . Comments @abstr_number . Whitespace @abstr_number . Commas @abstr_number . Semicolons @abstr_number . Type Casting & Coercion @abstr_number . Naming Conventions @abstr_number . Accessors @abstr_number . Events @abstr_number . jQuery @abstr_number . ECMAScript @abstr_number Compatibility @abstr_number . ECMAScript @abstr_number + (ES @abstr_number +) Styles @abstr_number . Testing @abstr_number . Performance @abstr_number . Resources @abstr_number . In the Wild @abstr_number . Translation @abstr_number . The JavaScript Style Guide Guide @abstr_number . Chat With Us About JavaScript @abstr_number . Contributors @abstr_number . License

## Types

\- @abstr_number . @abstr_number **Primitives** : When you access a primitive type you work directly on its value.
    
    
    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number **Complex** : When you access a complex type you work on a reference to its value.
    
    
    + `object`
    + `array`
    + `function`
    
     @abstr_code_section
    

**⬆ back to top**

## References

\- @abstr_number . @abstr_number Use `const` for all of your references; avoid using `var`. eslint: @abstr_hyperlink , @abstr_hyperlink 
    
    
    > Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number If you must reassign references, use `let` instead of `var`. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? `let` is block-scoped rather than function-scoped like `var`.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Note that both `let` and `const` are block-scoped.
    
    
     @abstr_code_section
    

**⬆ back to top**

## Objects

\- @abstr_number . @abstr_number Use the literal syntax for object creation. eslint: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use computed property names when creating objects with dynamic property names.
    
    
    > Why? They allow you to define all the properties of an object in one place.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use object method shorthand. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use property value shorthand. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? It is shorter to write and descriptive.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Group your shorthand properties at the beginning of your object declaration.
    
    
    > Why? It's easier to tell which properties are using the shorthand.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Only quote properties that are invalid identifiers. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Do not call `Object.prototype` methods directly, such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`.
    
    
    > Why? These methods may be shadowed by properties on the object in question - consider `{ hasOwnProperty: false }` - or, the object may be a null object (`Object.create(null)`).
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Prefer the object spread operator over @abstr_hyperlink to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.
    
    
     @abstr_code_section
    

**⬆ back to top**

## Arrays

\- @abstr_number . @abstr_number Use the literal syntax for array creation. eslint: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use @abstr_hyperlink instead of direct assignment to add items to an array.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use array spreads `...` to copy arrays.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number To convert an array-like object to an array, use @abstr_hyperlink .
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use return statements in array method callbacks. It's ok to omit the return if the function body consists of a single statement following @abstr_number . @abstr_number . eslint: @abstr_hyperlink 
    
    
     @abstr_code_section
    

**⬆ back to top**

\- @abstr_number . @abstr_number Use line breaks after open and before close array brackets if an array has multiple lines

@abstr_code_section 

**⬆ back to top**

## Destructuring

\- @abstr_number . @abstr_number Use object destructuring when accessing and using multiple properties of an object. jscs: @abstr_hyperlink 
    
    
    > Why? Destructuring saves you from creating temporary references for those properties.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use array destructuring. jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use object destructuring for multiple return values, not array destructuring. jscs: @abstr_hyperlink 
    
    
    > Why? You can add new properties over time or change the order of things without breaking call sites.
    
     @abstr_code_section
    

**⬆ back to top**

## Strings

\- @abstr_number . @abstr_number Use single quotes `''` for strings. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Strings that cause the line to go over @abstr_number characters should not be written across multiple lines using string concatenation.
    
    
    > Why? Broken strings are painful to work with and make code less searchable.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number When programmatically building up strings, use template strings instead of concatenation. eslint: @abstr_hyperlink @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Never use `eval()` on a string, it opens too many vulnerabilities.

\- @abstr_number . @abstr_number Do not unnecessarily escape characters in strings. eslint: @abstr_hyperlink 
    
    
    > Why? Backslashes harm readability, thus they should only be present when necessary.
    
     @abstr_code_section
    

**⬆ back to top**

## Functions

\- @abstr_number . @abstr_number Use named function expressions instead of function declarations. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to name the expression - anonymous functions can make it harder to locate the problem in an Error's call stack. ([Discussion](https://github.com/airbnb/javascript/issues/ @abstr_number ))
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Wrap immediately invoked function expressions in parentheses. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Never declare a function in a non-function block (`if`, `while`, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears. eslint: @abstr_hyperlink 

\- @abstr_number . @abstr_number **Note:** ECMA- @abstr_number defines a `block` as a list of statements. A function declaration is not a statement. @abstr_hyperlink .
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Never use `arguments`, opt to use rest syntax `...` instead. eslint: @abstr_hyperlink 
    
    
    > Why? `...` is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like `arguments`.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use default parameter syntax rather than mutating function arguments.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Avoid side effects with default parameters.
    
    
    > Why? They are confusing to reason about.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Always put default parameters last.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Never use the Function constructor to create a new function. eslint: @abstr_hyperlink 
    
    
    > Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Spacing in a function signature. eslint: @abstr_hyperlink @abstr_hyperlink 
    
    
    > Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Never mutate parameters. eslint: @abstr_hyperlink 
    
    
    > Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Never reassign parameters. eslint: @abstr_hyperlink 
    
    
    > Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V @abstr_number .
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Prefer the use of the spread operator `...` to call variadic functions. eslint: @abstr_hyperlink 
    
    
    > Why? It's cleaner, you don't need to supply a context, and you can not easily compose `new` with `apply`.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself, with a trailing comma on the last item.
    
    
     @abstr_code_section
    

**⬆ back to top**

## Arrow Functions

\- @abstr_number . @abstr_number When you must use function expressions (as when passing an anonymous function), use arrow function notation. eslint: @abstr_hyperlink , @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.
    
    > Why not? If you have a fairly complicated function, you might move that logic out into its own function declaration.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number If the function body consists of a single expression, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement. eslint: @abstr_hyperlink , @abstr_hyperlink jscs: @abstr_hyperlink , @abstr_hyperlink 
    
    
    > Why? Syntactic sugar. It reads well when multiple functions are chained together.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number In case the expression spans over multiple lines, wrap it in parentheses for better readability.
    
    
    > Why? It shows clearly where the function starts and ends.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number If your function takes a single argument and doesn’t use braces, omit the parentheses. Otherwise, always include parentheses around arguments for clarity and consistency. Note: it is also acceptable to always use parentheses, in which case use the @abstr_hyperlink for eslint or do not include @abstr_hyperlink for jscs. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? Less visual clutter.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`). eslint: @abstr_hyperlink 
    
    
     @abstr_code_section
    

**⬆ back to top**

## Classes & Constructors

\- @abstr_number . @abstr_number Always use `class`. Avoid manipulating `prototype` directly.
    
    
    > Why? `class` syntax is more concise and easier to reason about.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use `extends` for inheritance.
    
    
    > Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Methods can return `this` to help with method chaining.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number It's okay to write a custom toString() method, just make sure it works successfully and causes no side effects.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary. eslint: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Avoid duplicate class members. eslint: @abstr_hyperlink 
    
    
    > Why? Duplicate class member declarations will silently prefer the last one - having duplicates is almost certainly a bug.
    
     @abstr_code_section
    

**⬆ back to top**

## Modules

\- @abstr_number . @abstr_number Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.
    
    
    > Why? Modules are the future, let's start using the future now.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Do not use wildcard imports.
    
    
    > Why? This makes sure you have a single default export.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number And do not export directly from an import.
    
    
    > Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Only import from a path in one place. eslint: @abstr_hyperlink 

> Why? Having multiple lines that import from the same path can make code harder to maintain.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Do not export mutable bindings. eslint: @abstr_hyperlink 

> Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special cases, in general, only constant references should be exported.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number In modules with a single export, prefer default export over named export. eslint: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Put all `import`s above non-import statements. eslint: @abstr_hyperlink 

> Why? Since `import`s are hoisted, keeping them all at the top prevents surprising behavior.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Multiline imports should be indented just like multiline array and object literals.
    
    
    > Why? The curly braces follow the same indentation rules as every other curly brace block in the style guide, as do the trailing commas.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Disallow Webpack loader syntax in module import statements. eslint: @abstr_hyperlink 

> Why? Since using Webpack syntax in the imports couples the code to a module bundler. Prefer using the loader syntax in `webpack.config.js`.
    
    
     @abstr_code_section
    

**⬆ back to top**

## Iterators and Generators

\- @abstr_number . @abstr_number Don't use iterators. Prefer JavaScript's higher-order functions instead of loops like `for-in` or `for-of`. eslint: @abstr_hyperlink @abstr_hyperlink 
    
    
    > Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.
    
    > Use `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... to iterate over arrays, and `Object.keys()` / `Object.values()` / `Object.entries()` to produce arrays so you can iterate over objects.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Don't use generators for now.
    
    
    > Why? They don't transpile well to ES @abstr_number .
    

\- @abstr_number . @abstr_number If you must use generators, or if you disregard our advice, make sure their function signature is spaced properly. eslint: @abstr_hyperlink 
    
    
    > Why? `function` and `*` are part of the same conceptual keyword - `*` is not a modifier for `function`, `function*` is a unique construct, different from `function`.
    
     @abstr_code_section
    

**⬆ back to top**

## Properties

\- @abstr_number . @abstr_number Use dot notation when accessing properties. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use bracket notation `[]` when accessing properties with a variable.
    
    
     @abstr_code_section
    

**⬆ back to top**

## Variables

\- @abstr_number . @abstr_number Always use `const` or `let` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that. eslint: @abstr_hyperlink @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use one `const` or `let` declaration per variable. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? It's easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Group all your `const`s and then group all your `let`s.
    
    
    > Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Assign variables where you need them, but place them in a reasonable place.
    
    
    > Why? `let` and `const` are block scoped and not function scoped.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Don't chain variable assignments.
    
    
    > Why? Chaining variable assignments creates implicit global variables.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Avoid using unary increments and decrements (++, --). eslint @abstr_hyperlink 
    
    
    > Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like `num +=  @abstr_number ` instead of `num++` or `num ++`. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.
    
     @abstr_code_section
    

**⬆ back to top**

## Hoisting

\- @abstr_number . @abstr_number `var` declarations get hoisted to the top of their scope, their assignment does not. `const` and `let` declarations are blessed with a new concept called @abstr_hyperlink . It's important to know why @abstr_hyperlink .
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Anonymous function expressions hoist their variable name, but not the function assignment.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Named function expressions hoist the variable name, not the function name or the function body.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Function declarations hoist their name and the function body.
    
    
     @abstr_code_section
    

  * For more information refer to @abstr_hyperlink by @abstr_hyperlink .



**⬆ back to top**

## Comparison Operators & Equality

\- @abstr_number . @abstr_number Use `===` and `!==` over `==` and `!=`. eslint: @abstr_hyperlink 

\- @abstr_number . @abstr_number Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:
    
    
    + **Objects** evaluate to **true**
    + **Undefined** evaluates to **false**
    + **Null** evaluates to **false**
    + **Booleans** evaluate to **the value of the boolean**
    + **Numbers** evaluate to **false** if **+ @abstr_number , - @abstr_number , or NaN**, otherwise **true**
    + **Strings** evaluate to **false** if an empty string `''`, otherwise **true**
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use shortcuts for booleans, but explicit comparisons for strings and numbers.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number For more information see @abstr_hyperlink by Angus Croll.

\- @abstr_number . @abstr_number Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`).
    
    
    > Why? Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.
    
    eslint rules: [`no-case-declarations`](http://eslint.org/docs/rules/no-case-declarations.html).
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Ternaries should not be nested and generally be single line expressions.
    
    
    eslint rules: [`no-nested-ternary`](http://eslint.org/docs/rules/no-nested-ternary.html).
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Avoid unneeded ternary statements.
    
    
    eslint rules: [`no-unneeded-ternary`](http://eslint.org/docs/rules/no-unneeded-ternary.html).
    
     @abstr_code_section
    

**⬆ back to top**

## Blocks

\- @abstr_number . @abstr_number Use braces with all multi-line blocks.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number If you're using multi-line blocks with `if` and `else`, put `else` on the same line as your `if` block's closing brace. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

**⬆ back to top**

## Control Statements

\- @abstr_number . @abstr_number In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line. It's up to you whether the logical operator should begin or end the line.
    
    
     @abstr_code_section
    

**⬆ back to top**

## Comments

\- @abstr_number . @abstr_number Use `/** ... */` for multi-line comments.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it's on the first line of a block.
    
    
     @abstr_code_section
    

  * @abstr_number . @abstr_number Start all comments with a space to make it easier to read. eslint: @abstr_hyperlink 

@abstr_code_section 

  * @abstr_number . @abstr_number Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME: -- need to figure this out` or `TODO: -- need to implement`.

  * @abstr_number . @abstr_number Use `// FIXME:` to annotate problems.

@abstr_code_section 

  * @abstr_number . @abstr_number Use `// TODO:` to annotate solutions to problems.

@abstr_code_section 




**⬆ back to top**

## Whitespace

\- @abstr_number . @abstr_number Use soft tabs (space character) set to @abstr_number spaces. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Place @abstr_number space before the leading brace. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Place @abstr_number space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Set off operators with spaces. eslint: @abstr_hyperlink jscs: @abstr_hyperlink , @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number End files with a single newline character. eslint: @abstr_hyperlink 
    
    
     @abstr_code_section 
    
     @abstr_code_section 
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use indentation when making long method chains (more than @abstr_number method chains). Use a leading dot, which emphasizes that the line is a method call, not a new statement. eslint: @abstr_hyperlink @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Leave a blank line after blocks and before the next statement. jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Do not pad your blocks with blank lines. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Do not add spaces inside parentheses. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Do not add spaces inside brackets. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Add spaces inside curly braces. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Avoid having lines of code that are longer than @abstr_number characters (including whitespace). Note: per above, long strings are exempt from this rule, and should not be broken up. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? This ensures readability and maintainability.
    
     @abstr_code_section
    

**⬆ back to top**

## Commas

\- @abstr_number . @abstr_number Leading commas: **Nope.** eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Additional trailing comma: **Yup.** eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don't have to worry about the [trailing comma problem](https://github.com/airbnb/javascript/blob/es @abstr_number -deprecated/es @abstr_number /README.md#commas) in legacy browsers.
    
     @abstr_code_section 
    
     @abstr_code_section
    

**⬆ back to top**

## Semicolons

\- @abstr_number . @abstr_number **Yup.** eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section 
    
    [Read more](https://stackoverflow.com/questions/ @abstr_number /semicolon-before-self-invoking-function/ @abstr_number % @abstr_number ).
    

**⬆ back to top**

## Type Casting & Coercion

\- @abstr_number . @abstr_number Perform type coercion at the beginning of the statement.

\- @abstr_number . @abstr_number Strings:
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings. eslint: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for @abstr_hyperlink , leave a comment explaining why and what you're doing.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number **Note:** Be careful when using bitshift operations. Numbers are represented as @abstr_hyperlink , but bitshift operations always return a @abstr_number -bit integer ( @abstr_hyperlink ). Bitshift can lead to unexpected behavior for integer values larger than @abstr_number bits. @abstr_hyperlink . Largest signed @abstr_number -bit Int is @abstr_number , @abstr_number , @abstr_number , @abstr_number :
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Booleans:
    
    
     @abstr_code_section
    

**⬆ back to top**

## Naming Conventions

\- @abstr_number . @abstr_number Avoid single letter names. Be descriptive with your naming. eslint: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use camelCase when naming objects, functions, and instances. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use PascalCase only when naming constructors or classes. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Do not use trailing or leading underscores. eslint: @abstr_hyperlink jscs: @abstr_hyperlink 
    
    
    > Why? JavaScript does not have the concept of privacy in terms of properties or methods. Although a leading underscore is a common convention to mean “private”, in fact, these properties are fully public, and as such, are part of your public API contract. This convention might lead developers to wrongly think that a change won't count as breaking, or that tests aren't needed. tl;dr: if you want something to be “private”, it must not be observably present.
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Don't save references to `this`. Use arrow functions or @abstr_hyperlink . jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number A base filename should exactly match the name of its default export.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use camelCase when you export-default a function. Your filename should be identical to your function's name.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Use PascalCase when you export a constructor / class / singleton / function library / bare object.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Acronyms and initialisms should always be all capitalized, or all lowercased.
    
    
    > Why? Names are for readability, not to appease a computer algorithm.
    
     @abstr_code_section
    

**⬆ back to top**

## Accessors

\- @abstr_number . @abstr_number Accessor functions for properties are not required.

\- @abstr_number . @abstr_number Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use getVal() and setVal('hello').
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number If the property/method is a `boolean`, use `isVal()` or `hasVal()`.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number It's okay to create get() and set() functions, but be consistent.
    
    
     @abstr_code_section
    

**⬆ back to top**

## Events

\- @abstr_number . @abstr_number When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass a hash instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:
    
    
     @abstr_code_section 
    
    prefer:
    
     @abstr_code_section
    

**⬆ back to top**

## jQuery

\- @abstr_number . @abstr_number Prefix jQuery object variables with a `$`. jscs: @abstr_hyperlink 
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number Cache jQuery lookups.
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number For DOM queries use Cascading `$('.sidebar ul')` or parent > child `$('.sidebar > ul')`. @abstr_hyperlink 

\- @abstr_number . @abstr_number Use `find` with scoped jQuery object queries.
    
    
     @abstr_code_section
    

**⬆ back to top**

## ECMAScript @abstr_number Compatibility

\- @abstr_number . @abstr_number Refer to @abstr_hyperlink 's ES @abstr_number @abstr_hyperlink .

**⬆ back to top**

## ECMAScript @abstr_number + (ES @abstr_number +) Styles

\- @abstr_number . @abstr_number This is a collection of links to the various ES @abstr_number features.

@abstr_number . Arrow Functions @abstr_number . Classes @abstr_number . Object Shorthand @abstr_number . Object Concise @abstr_number . Object Computed Properties @abstr_number . Template Strings @abstr_number . Destructuring @abstr_number . Default Parameters @abstr_number . Rest @abstr_number . Array Spreads @abstr_number . Let and Const @abstr_number . Iterators and Generators @abstr_number . Modules

\- @abstr_number . @abstr_number Do not use @abstr_hyperlink that have not reached stage @abstr_number .
    
    
    > Why? [They are not finalized](https://tc @abstr_number .github.io/process-document/), and they are subject to change or to be withdrawn entirely. We want to use JavaScript, and proposals are not JavaScript yet.
    

**⬆ back to top**

## Testing

\- @abstr_number . @abstr_number **Yup.**
    
    
     @abstr_code_section
    

\- @abstr_number . @abstr_number **No, but seriously** : \- Whichever testing framework you use, you should be writing tests! \- Strive to write many small pure functions, and minimize where mutations occur. \- Be cautious about stubs and mocks - they can make your tests more brittle. \- We primarily use @abstr_hyperlink at Airbnb. @abstr_hyperlink is also used occasionally for small, separate modules. \- @abstr_number % test coverage is a good goal to strive for, even if it's not always practical to reach it. \- Whenever you fix a bug, _write a regression test_. A bug fixed without a regression test is almost certainly going to break again in the future.

**⬆ back to top**

## Performance

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Loading...



**⬆ back to top**

## Resources

_*Learning ES @abstr_number *_

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



**Read This**

  * @abstr_hyperlink 



**Tools**

  * Code Style Linters 
    * @abstr_hyperlink - @abstr_hyperlink 
    * @abstr_hyperlink - @abstr_hyperlink 
    * @abstr_hyperlink - @abstr_hyperlink (Deprecated, please use @abstr_hyperlink )
  * Neutrino preset - @abstr_hyperlink 



**Other Style Guides**

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



**Other Styles**

  * @abstr_hyperlink - Christian Johansen
  * @abstr_hyperlink - Ross Allen
  * @abstr_hyperlink - JeongHoon Byun
  * @abstr_hyperlink - Ben Alman



**Further Reading**

  * @abstr_hyperlink - Angus Croll
  * @abstr_hyperlink - Dr. Axel Rauschmayer
  * @abstr_hyperlink - Zack Bloom  & Adam Schwartz
  * @abstr_hyperlink - Luke Hoban
  * @abstr_hyperlink - Benjamin De Cock



**Books**

  * @abstr_hyperlink - Douglas Crockford
  * @abstr_hyperlink - Stoyan Stefanov
  * @abstr_hyperlink - Ross Harmes and Dustin Diaz
  * @abstr_hyperlink - Steve Souders
  * @abstr_hyperlink - Nicholas C. Zakas
  * @abstr_hyperlink - Alex MacCaw
  * @abstr_hyperlink - John Resig
  * @abstr_hyperlink - Guillermo Rauch
  * @abstr_hyperlink - John Resig and Bear Bibeault
  * @abstr_hyperlink - Henrik Joreteg
  * @abstr_hyperlink - Kim Joar Bekkelund, Mads Mobæk,  & Olav Bjorkoy
  * @abstr_hyperlink - Julien Bouquillon
  * @abstr_hyperlink - Ben Vinegar and Anton Kovalyov
  * @abstr_hyperlink - David Herman
  * @abstr_hyperlink - Marijn Haverbeke
  * @abstr_hyperlink - Kyle Simpson



**Blogs**

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



**Podcasts**

  * @abstr_hyperlink 
  * @abstr_hyperlink 



**⬆ back to top**

## In the Wild

This is a list of organizations that are using this style guide. Send us a pull request and we'll add you to the list.

  * _* @abstr_number blades_ *: @abstr_hyperlink 
  * _* @abstr_number Catalyzer_ *: @abstr_hyperlink 
  * **Aan Zee** : @abstr_hyperlink 
  * **Adult Swim** : @abstr_hyperlink 
  * **Airbnb** : @abstr_hyperlink 
  * **AltSchool** : @abstr_hyperlink 
  * **Apartmint** : @abstr_hyperlink 
  * **Ascribe** : @abstr_hyperlink 
  * **Avalara** : @abstr_hyperlink 
  * **Avant** : @abstr_hyperlink 
  * **Axept** : @abstr_hyperlink 
  * **BashPros** : @abstr_hyperlink 
  * **Billabong** : @abstr_hyperlink 
  * **Bisk** : @abstr_hyperlink 
  * **Bonhomme** : @abstr_hyperlink 
  * **Brainshark** : @abstr_hyperlink 
  * **CaseNine** : @abstr_hyperlink 
  * **Chartboost** : @abstr_hyperlink 
  * **ComparaOnline** : @abstr_hyperlink 
  * **Compass Learning** : @abstr_hyperlink 
  * **DailyMotion** : @abstr_hyperlink 
  * **DoSomething** : @abstr_hyperlink 
  * **Digitpaint** @abstr_hyperlink 
  * **Ecosia** : @abstr_hyperlink 
  * **Evernote** : @abstr_hyperlink 
  * **Evolution Gaming** : @abstr_hyperlink 
  * **EvozonJs** : @abstr_hyperlink 
  * **ExactTarget** : @abstr_hyperlink 
  * **Expensify** @abstr_hyperlink 
  * **Flexberry** : @abstr_hyperlink 
  * **Gawker Media** : @abstr_hyperlink 
  * **General Electric** : @abstr_hyperlink 
  * **Generation Tux** : @abstr_hyperlink 
  * **GoodData** : @abstr_hyperlink 
  * **Grooveshark** : @abstr_hyperlink 
  * **Honey** : @abstr_hyperlink 
  * **How About We** : @abstr_hyperlink 
  * **Huballin** : @abstr_hyperlink 
  * **HubSpot** : @abstr_hyperlink 
  * **Hyper** : @abstr_hyperlink 
  * **InterCity Group** : @abstr_hyperlink 
  * _*Jam @abstr_number *_ : @abstr_hyperlink 
  * **JeopardyBot** : @abstr_hyperlink 
  * **JSSolutions** : @abstr_hyperlink 
  * **KickorStick** : @abstr_hyperlink 
  * **Kinetica Solutions** : @abstr_hyperlink 
  * **Lonely Planet** : @abstr_hyperlink 
  * **M @abstr_number GEN** : @abstr_hyperlink 
  * **Mighty Spring** : @abstr_hyperlink 
  * **MinnPost** : @abstr_hyperlink 
  * **MitocGroup** : @abstr_hyperlink 
  * **ModCloth** : @abstr_hyperlink 
  * **Money Advice Service** : @abstr_hyperlink 
  * **Muber** : @abstr_hyperlink 
  * **National Geographic** : @abstr_hyperlink 
  * _*Nimbl @abstr_number *_ : @abstr_hyperlink 
  * **Nulogy** : @abstr_hyperlink 
  * **Orange Hill Development** : @abstr_hyperlink 
  * **Orion Health** : @abstr_hyperlink 
  * **OutBoxSoft** : @abstr_hyperlink 
  * **Peerby** : @abstr_hyperlink 
  * **Razorfish** : @abstr_hyperlink 
  * **reddit** : @abstr_hyperlink 
  * **React** : @abstr_hyperlink 
  * **REI** : @abstr_hyperlink 
  * **Ripple** : @abstr_hyperlink 
  * **SeekingAlpha** : @abstr_hyperlink 
  * **Shutterfly** : @abstr_hyperlink 
  * **Sourcetoad** : @abstr_hyperlink 
  * **Springload** : @abstr_hyperlink 
  * **StratoDem Analytics** : @abstr_hyperlink 
  * **SteelKiwi Development** : @abstr_hyperlink 
  * **StudentSphere** : @abstr_hyperlink 
  * **SwoopApp** : @abstr_hyperlink 
  * **SysGarage** : @abstr_hyperlink 
  * **Syzygy Warsaw** : @abstr_hyperlink 
  * **Target** : @abstr_hyperlink 
  * **TheLadders** : @abstr_hyperlink 
  * **The Nerdery** : @abstr_hyperlink 
  * **T @abstr_number R Technology** : @abstr_hyperlink 
  * **VoxFeed** : @abstr_hyperlink 
  * **WeBox Studio** : @abstr_hyperlink 
  * **Weggo** : @abstr_hyperlink 
  * **Zillow** : @abstr_hyperlink 
  * **ZocDoc** : @abstr_hyperlink 



**⬆ back to top**

## Translation

This style guide is also available in other languages:

  * @abstr_image **Brazilian Portuguese** : @abstr_hyperlink 
  * @abstr_image **Bulgarian** : @abstr_hyperlink 
  * @abstr_image **Catalan** : @abstr_hyperlink 
  * @abstr_image **Chinese (Simplified)** : @abstr_hyperlink 
  * @abstr_image **Chinese (Traditional)** : @abstr_hyperlink 
  * @abstr_image **French** : @abstr_hyperlink 
  * @abstr_image **German** : @abstr_hyperlink 
  * @abstr_image **Italian** : @abstr_hyperlink 
  * @abstr_image **Japanese** : @abstr_hyperlink 
  * @abstr_image **Korean** : @abstr_hyperlink 
  * @abstr_image **Polish** : @abstr_hyperlink 
  * @abstr_image **Russian** : @abstr_hyperlink 
  * @abstr_image **Spanish** : @abstr_hyperlink 
  * @abstr_image **Thai** : @abstr_hyperlink 
  * @abstr_image **Ukrainian** : @abstr_hyperlink 
  * @abstr_image **Vietnam** : @abstr_hyperlink 



## The JavaScript Style Guide Guide

  * @abstr_hyperlink 



## Chat With Us About JavaScript

  * Find us on @abstr_hyperlink .



## Contributors

  * @abstr_hyperlink 



## License

(The MIT License)

Copyright (c) @abstr_number - @abstr_number Airbnb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**⬆ back to top**

## Amendments

We encourage you to fork this guide and change the rules to fit your team's style guide. Below, you may list some amendments to the style guide. This allows you to periodically update your style guide without having to deal with merge conflicts.

# };
