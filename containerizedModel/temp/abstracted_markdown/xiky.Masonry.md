# Masonry @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**Masonry is still actively maintained, we are committed to fixing bugs and merging good quality PRs from the wider community. However if you're using Swift in your project, we recommend using @abstr_hyperlink as it provides better type safety with a simpler API.**

Masonry is a light-weight layout framework which wraps AutoLayout with a nicer syntax. Masonry has its own layout DSL which provides a chainable way of describing your NSLayoutConstraints which results in layout code that is more concise and readable. Masonry supports iOS and Mac OS X.

For examples take a look at the **Masonry iOS Examples** project in the Masonry workspace. You will need to run `pod install` after downloading.

## What's wrong with NSLayoutConstraints?

Under the hood Auto Layout is a powerful and flexible way of organising and laying out your views. However creating constraints from code is verbose and not very descriptive. Imagine a simple example in which you want to have a view fill its superview but inset by @abstr_number pixels on every side @abstr_code_section Even with such a simple example the code needed is quite verbose and quickly becomes unreadable when you have more than @abstr_number or @abstr_number views. Another option is to use Visual Format Language (VFL), which is a bit less long winded. However the ASCII type syntax has its own pitfalls and its also a bit harder to animate as `NSLayoutConstraint constraintsWithVisualFormat:` returns an array.

## Prepare to meet your Maker!

Heres the same constraints created using MASConstraintMaker

@abstr_code_section Or even shorter

@abstr_code_section 

Also note in the first example we had to add the constraints to the superview `[superview addConstraints:...`. Masonry however will automagically add constraints to the appropriate view.

Masonry will also call `view @abstr_number .translatesAutoresizingMaskIntoConstraints = NO;` for you.

## Not all things are created equal

> `.equalTo` equivalent to **NSLayoutRelationEqual**
> 
> `.lessThanOrEqualTo` equivalent to **NSLayoutRelationLessThanOrEqual**
> 
> `.greaterThanOrEqualTo` equivalent to **NSLayoutRelationGreaterThanOrEqual**

These three equality constraints accept one argument which can be any of the following:

#### @abstr_number . MASViewAttribute

@abstr_code_section 

MASViewAttribute | NSLayoutAttribute \------------------------- | -------------------------- view.mas_left | NSLayoutAttributeLeft view.mas_right | NSLayoutAttributeRight view.mas_top | NSLayoutAttributeTop view.mas_bottom | NSLayoutAttributeBottom view.mas_leading | NSLayoutAttributeLeading view.mas_trailing | NSLayoutAttributeTrailing view.mas_width | NSLayoutAttributeWidth view.mas_height | NSLayoutAttributeHeight view.mas_centerX | NSLayoutAttributeCenterX view.mas_centerY | NSLayoutAttributeCenterY view.mas_baseline | NSLayoutAttributeBaseline

#### @abstr_number . UIView/NSView

if you want view.left to be greater than or equal to label.left : @abstr_code_section 

#### @abstr_number . NSNumber

Auto Layout allows width and height to be set to constant values. if you want to set view to have a minimum and maximum width you could pass a number to the equality blocks: @abstr_code_section 

However Auto Layout does not allow alignment attributes such as left, right, centerY etc to be set to constant values. So if you pass a NSNumber for these attributes Masonry will turn these into constraints relative to the view’s superview ie: @abstr_code_section 

Instead of using NSNumber, you can use primitives and structs to build your constraints, like so: @abstr_code_section 

By default, macros which support @abstr_hyperlink are prefixed with `mas_`. Unprefixed versions are available by defining `MAS_SHORTHAND_GLOBALS` before importing Masonry.

#### @abstr_number . NSArray

An array of a mixture of any of the previous types @abstr_code_section `

## Learn to prioritize

> `.priority` allows you to specify an exact priority
> 
> `.priorityHigh` equivalent to **UILayoutPriorityDefaultHigh**
> 
> `.priorityMedium` is half way between high and low
> 
> `.priorityLow` equivalent to **UILayoutPriorityDefaultLow**

Priorities are can be tacked on to the end of a constraint chain like so: @abstr_code_section 

## Composition, composition, composition

Masonry also gives you a few convenience methods which create multiple constraints at the same time. These are called MASCompositeConstraints

#### edges

@abstr_code_section 

#### size

@abstr_code_section 

#### center

@abstr_code_section 

You can chain view attributes for increased readability:

@abstr_code_section 

## Hold on for dear life

Sometimes you need modify existing constraints in order to animate or remove/replace constraints. In Masonry there are a few different approaches to updating constraints.

#### @abstr_number . References

You can hold on to a reference of a particular constraint by assigning the result of a constraint make expression to a local variable or a class property. You could also reference multiple constraints by storing them away in an array.

@abstr_code_section 

#### @abstr_number . mas_updateConstraints

Alternatively if you are only updating the constant value of the constraint you can use the convience method `mas_updateConstraints` instead of `mas_makeConstraints`

@abstr_code_section 

### @abstr_number . mas_remakeConstraints

`mas_updateConstraints` is useful for updating a set of constraints, but doing anything beyond updating constant values can get exhausting. That's where `mas_remakeConstraints` comes in.

`mas_remakeConstraints` is similar to `mas_updateConstraints`, but instead of updating constant values, it will remove all of its constraints before installing them again. This lets you provide different constraints without having to keep around references to ones which you want to remove.

@abstr_code_section 

You can find more detailed examples of all three approaches in the **Masonry iOS Examples** project.

## When the ^&*!@ hits the fan!

Laying out your views doesn't always goto plan. So when things literally go pear shaped, you don't want to be looking at console output like this:

@abstr_code_section 

Masonry adds a category to NSLayoutConstraint which overrides the default implementation of `- (NSString *)description`. Now you can give meaningful names to views and constraints, and also easily pick out the constraints created by Masonry.

which means your console output can now look like this:

@abstr_code_section 

For an example of how to set this up take a look at the **Masonry iOS Examples** project in the Masonry workspace.

## Where should I create my constraints?

@abstr_code_section 

## Installation

Use the @abstr_hyperlink @abstr_hyperlink .

In your Podfile

> `pod 'Masonry'`

If you want to use masonry without all those pesky 'mas_' prefixes. Add #define MAS_SHORTHAND to your prefix.pch before importing Masonry

> `#define MAS_SHORTHAND`

Get busy Masoning

> `#import "Masonry.h"`

## Code Snippets

Copy the included code snippets to `~/Library/Developer/Xcode/UserData/CodeSnippets` to write your masonry blocks at lightning speed!

`mas_make` -> `[<view> mas_makeConstraints:^(MASConstraintMaker *make){<code>}];`

`mas_update` -> `[<view> mas_updateConstraints:^(MASConstraintMaker *make){<code>}];`

`mas_remake` -> `[<view> mas_remakeConstraints:^(MASConstraintMaker *make){<code>}];`

## Features

  * Not limited to subset of Auto Layout. Anything NSLayoutConstraint can do, Masonry can do too!
  * Great debug support, give your views and constraints meaningful names.
  * Constraints read like sentences.
  * No crazy macro magic. Masonry won't pollute the global namespace with macros.
  * Not string or dictionary based and hence you get compile time checking.



## TODO

  * Eye candy
  * Mac example project
  * More tests and examples


