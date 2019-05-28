# Crash course in collections with Java @abstr_number

All exercises can be done in `main` method of CollectionsExercises class.

## Lambda Expressions

### Example

Writing down elements of given `beerNames` list: @abstr_code_section 

### Example

Sorting given list in aphabet order: @abstr_code_section 

### Explanation

Functional Inrerface is interface with exaclty one abstract method. It can be annotated with `@FuctionalInterface`. In Java @abstr_number there are built in functional interfaces i.e. `Comparator` (with `compare` abstract method). When lambda is implementation of abstract method of functional interface, instance of this functional interface can be created as follows.

#### Example

@abstr_code_section 

### Syntax

General form of lambda expression is @abstr_code_section When there is only one expresion, it can be simplified as follows (`return` should me ommitted): @abstr_code_section When type declaration can be ommited, it can be simplified as follows: @abstr_code_section When there is only one parameter and there is no need to declare type, it can be simplified as follows: @abstr_code_section 

### Exercise @abstr_number

Simplify lambda in following code snippet. @abstr_code_section 

#### Solution

Click to show

Lambda can be simplified as follows: @abstr_code_section or @abstr_code_section 

### Example

Consider following code snippet. @abstr_code_section Since Java @abstr_number , `List` interface has `sort` method which takes one parameter - instance of `Comparator`. `Collections.sort` can be replaced as follows: @abstr_code_section 

### Exercise @abstr_number

Refactor following code to Java @abstr_number level. @abstr_code_section 

#### Solution

Click to show

Replace `Collections.sort` with `List.sort` and replace anonymous class with lambda: @abstr_code_section 

## Method References

Lambda expressions can be replaced with method references. Method reference has following form: @abstr_code_section 

#### Rule of thumb for replacing lambda with reference method:

@abstr_code_section Examples (respectivly): @abstr_code_section 

### Exercise @abstr_number

Replace lambda expression with method reference. @abstr_code_section 

#### Solution

Click to show

@abstr_code_section 

### Exercise @abstr_number

Replace lambda expression with method reference. @abstr_code_section 

#### Solution

Click to show

@abstr_code_section 

### Exercise @abstr_number

Replace lambda expressions with method references. @abstr_code_section 

#### Solution

Click to show

@abstr_code_section 

### Exercise @abstr_number

Replace lambda expressions with method reference. @abstr_code_section 

#### Solution

Click to show

@abstr_code_section 

## Streams

Stream (`java.util.Stream`) is a sequence of elements supporting operations. There are two kinds of stream operations: \- intermediate (returns Stream) i.e.: `filter` \- terminal (returns other type) i.e.: `forEach`

Operations on stream don't modify source of stream. Stream operations form stream pipelines.

## Streams: filter

### Example

Writing down beers that have more than @abstr_number . @abstr_number % alcohol in volume: @abstr_code_section 

#### Explanation

`Predicate` is functional interface which is boolean-valued function of one argument. Operation `filter` takes instance of `Predicate` as argument and reduces stream to elements for which `Predicate` return `true`. In above example predicate is lambda `b -> b.getAlcoholByValue() > @abstr_number . @abstr_number`. `filter` is intermediate operation (as it returns stream).

### Exercise @abstr_number

Write down beers containg Cascade hop and not containg Amarillo hop.

#### Solution

Click to show

@abstr_code_section 

## Streams: map

### Example

Writing down names of beers from given list. @abstr_code_section 

#### Explanation

Operation `map` is intermediate operation (returns stream) which takes instance of `Function` as argument. It transforms (maps) each element of stream to another according to passed `Function`. `Function` is functonal interface.

### Exercise @abstr_number

Write down names of beers containg Cascade hop.

#### Solution

Click to show

@abstr_code_section 

## Streams: sorted

Elements of stream can be sorted with `sorted` method. It takes instance of `Comparator` as argument. When `sorted` is called whitout argument, stream elements are sorted with natural order. `sorted` is intermediate operation.

### Exercise @abstr_number

Write down beers from given list ordered by bottle volume.

#### Solution

Click to show

@abstr_code_section 

### Exercise @abstr_number

Write down names of beers in alphabetical (natural) order.

#### Solution

Click to show

@abstr_code_section 

## Streams: collect

Stream elements can be accumulated into collection with `collect` method (i.e. `collect(Collectors.toList())`, `Collectors.toCollection(toSet())`).

### Exercise @abstr_number

Create a list of beer names.

#### Solution

@abstr_code_section 

### Exercise @abstr_number

Create a list of beers that have more than @abstr_number . @abstr_number % alcohol in volume.

#### Solution

Click to show

@abstr_code_section 

### Example

Creating a map of beers with value of bottle volume as keys: @abstr_code_section Method `Collectors.groupingBy` is used to create map. It groups elements according to passed classification function.

### Exercise @abstr_number

Create a map of beer names with first letters as keys.

#### Solution

Click to show

@abstr_code_section 

### Exercise @abstr_number (summing up: filter, map, sorted, collect)

Create a sorted list of beer names containing Cascade hop.

#### Solution

Click to show

@abstr_code_section 

## Streams: other terminating methods

### Example

Printing sum of bottle volumes of beers from given list: @abstr_code_section 

### Example

Printing maximum bottle volume: @abstr_code_section 

#### Explanation

Operation `max()` returns `OptionalInt` object. Class `Optional` (along with `OptionalInt` and `OptionalDouble`) is introduced to Java @abstr_number . It is container which can contain or not contain value. It protects against `NullPointerException` (no need to write `if (maxVolume != null)` checks). 

### Example

Print average bottle volume.

#### Solution

@abstr_code_section 

### Exercise @abstr_number

Print average alcohol of beers: \- containing Cascade hop \- with bottles volume bigger than @abstr_number ml

#### Solution

Click to show

@abstr_code_section 

## References

  * Lambda Expressions (The Java Tutorials): https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html
  * Java @abstr_number Tutorial: http://winterbe.com/posts/ @abstr_number / @abstr_number / @abstr_number /java- @abstr_number -tutorial/
  * Java @abstr_number Stream Tutorial: http://winterbe.com/posts/ @abstr_number / @abstr_number / @abstr_number /java @abstr_number -stream-tutorial-examples/


