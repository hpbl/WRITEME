# Dollar @abstr_hyperlink @abstr_image @abstr_hyperlink 

@abstr_hyperlink 

Dollar is a Swift library that provides useful functional programming helper methods without extending any built in objects. It is similar to @abstr_hyperlink or @abstr_hyperlink in Javascript.

@abstr_hyperlink is a library that extends certain Swift object types using the extension feature and gives its two cents to Swift language. It is now moved into a separate repo to support `Swift Package Manager`

NOTE: Starting Swift @abstr_number `$` is no longer a valid identifier. So you get the following `error: '$' is not an identifier; use backticks to escape it` . Instead use `Dollar`.

## Contents

  * Setup 
    * Demo App
  * @abstr_hyperlink 
  * Usage 
    * Array
    * Dictionary
    * Object
    * Function
    * Chaining
  * Contributing



# Setup

## Using @abstr_hyperlink version @abstr_number . @abstr_number .x or greater

Add `pod 'Dollar'` to your `Podfile` and run `pod install`. Add `use_frameworks!` to the end of the `Podfile`. Also checkout this @abstr_hyperlink .

## Using @abstr_hyperlink 

Add the following dependency `.Package(url: "https://github.com/ankurp/Dollar", majorVersion: @abstr_number , minor: @abstr_number )` to your `Package.swift` file and then run `swift build`. Requires swift version @abstr_number . @abstr_number or greater that you can install from https://swift.org

## Using `git submodule`

@abstr_number . If you are using git then add Dollar as a submodule using `git submodule add https://github.com/ankurp/Dollar.git`. If not using git download the project using `git clone https://github.com/ankurp/Dollar.git` in your project folder. @abstr_number . Open the `Dollar` folder. Drag Dollar.xcodeproj, inside the Dollar folder, into the file navigator of your Xcode project. @abstr_number . In Xcode, navigate to the target configuration window by clicking on the blue project icon, and selecting the application target under the "Targets" heading in the sidebar. @abstr_number . In the tab bar at the top of that window, open the "Build Phases" panel. @abstr_number . Expand the "Link Binary with Libraries" group, and add Dollar.framework. @abstr_number . In your project file `import Dollar` and you can call all of the helper functions.

Still stuck. Then checkout this screencast on @abstr_hyperlink 

## Support for Xcode and Swift

  * For Xcode @abstr_number (Swift @abstr_number . @abstr_number ) use version `@abstr_number . @abstr_number . @abstr_number`
  * For Xcode @abstr_number (Swift @abstr_number ) use version `@abstr_number . @abstr_number . @abstr_number`
  * For Xcode @abstr_number (Swift @abstr_number ) use version `@abstr_number . @abstr_number . @abstr_number`
  * For Xcode @abstr_number (Swift @abstr_number ) use version `@abstr_number . @abstr_number . @abstr_number` or `@abstr_number . @abstr_number . @abstr_number`
  * For Xcode @abstr_number . @abstr_number (Swift @abstr_number . @abstr_number ) use version `@abstr_number . @abstr_number . @abstr_number`
  * For Xcode @abstr_number . @abstr_number and @abstr_number . @abstr_number (Swift @abstr_number . @abstr_number ) use version `@abstr_number . @abstr_number . @abstr_number`



## Demo Apps

  * Using @abstr_hyperlink 
  * Using @abstr_hyperlink 
  * Using @abstr_hyperlink 



## Communication

  * If you **need help** , use @abstr_hyperlink or post a question on @abstr_hyperlink with tag `dollar.swift`.
  * If you'd like to **ask a general question** , use @abstr_hyperlink .
  * If you **found a bug** , open an issue.
  * If you **have a feature request** , open an issue.
  * If you **want to contribute** , submit a pull request.



# Dollar Usage

## Array

### at - `Dollar.at`

Creates an array of elements from the specified indexes, or keys, of the collection. Indexes may be specified as individual arguments or as arrays of indexes.

@abstr_code_section 

### chunk - `Dollar.chunk`

Creates an array of elements split into groups the length of size. If array can’t be split evenly, the final chunk will be the remaining elements.

@abstr_code_section 

### compact - `Dollar.compact`

Creates an array with all nil values removed.

@abstr_code_section 

### contains - `Dollar.contains`

Checks if a given value is present in the array.

@abstr_code_section 

### cycle - `Dollar.cycle`

Cycles through the array definetly or indefinetly passing each element into the callback function. The second parameter is to specify how many times to cycle through the array. If left out it will cycle indefinetly.

@abstr_code_section 

### difference - `Dollar.difference`

Creates an array excluding all values of the provided arrays

@abstr_code_section 

### each - `Dollar.each`

Passes each element in the array to the callback

@abstr_code_section 

### every - `Dollar.every`

Checks if the given callback returns true value for all items in the array.

@abstr_code_section 

### factorial `Dollar.factorial`

Returns factorial of integer

@abstr_code_section 

### fetch - `Dollar.fetch`

Get element from an array at the given index which can be negative to find elements from the end of the array. A default value can be returned if indexing out of bounds.

@abstr_code_section 

### fill - `Dollar.fill`

Fills elements of array with value from start up to, but not including, end. This method mutates array.

@abstr_code_section 

### find - `Dollar.find`

Iterates over elements of an array and returning the first element that the callback returns true for.

@abstr_code_section 

### findIndex - `Dollar.findIndex`

This method is like find except that it returns the index of the first element that passes the callback check.

@abstr_code_section 

### findLastIndex - `Dollar.findLastIndex`

This method is like findIndex except that it iterates over elements of the array from right to left.

@abstr_code_section 

### first - `Dollar.first(array: AnyObject[])`

Gets the first element in the array.

@abstr_code_section 

### groupBy `Dollar.groupBy`

This method returns a dictionary of values grouped by the value returned by a callback.

@abstr_code_section 

### second - `Dollar.second(array: AnyObject[])`

Gets the second element in the array.

@abstr_code_section 

### flatMap - `Dollar.flatMap`

Maps a function that converts elements to a list and then concatenates them.

@abstr_code_section 

### flatMap - `Dollar.flatMap`

Maps a function that converts a type to an Optional over an Optional, and then returns a single-level Optional.

@abstr_code_section 

_Note_ : This is the same behavior as Optional chaining. The code above translates to @abstr_code_section 

### flatten - `Dollar.flatten`

Flattens a nested array of any depth.

@abstr_code_section 

### frequencies - `Dollar.frequencies`

This method returns a dictionary of values in an array mapping to the total number of occurrences in the array. If passed a function it returns a frequency table of the results of the given function on the arrays elements.

@abstr_code_section 

### gcd `Dollar.gcd`

GCD function return greatest common denominator with number passed

@abstr_code_section 

### indexOf - `Dollar.indexOf`

Gets the index at which the first occurrence of value is found.

@abstr_code_section 

### initial - `Dollar.initial`

Gets all but the last element or last n elements of an array.

@abstr_code_section 

### intersection - `Dollar.intersection`

Creates an array of unique values present in all provided arrays.

@abstr_code_section 

### it-isIn `Dollar.it<T: Comparable>(i: T, isIn range: Range<T>)`

Returns true if i is in interval or range

@abstr_code_section 

### last - `Dollar.last`

Gets the last element from the array.

@abstr_code_section 

### lastIndexOf - `Dollar.lastIndexOf`

Gets the index at which the last occurrence of value is found.

@abstr_code_section 

### lcm `Dollar.lcm`

LCM method return least common multiple with number passed

@abstr_code_section 

### rest - `Dollar.rest`

The opposite of initial this method gets all but the first element or first n elements of an array.

@abstr_code_section 

### map - `Dollar.map`

Maps each element to new value based on the map function passed

@abstr_code_section 

### min - `Dollar.min`

Retrieves the minimum value in an array.

@abstr_code_section 

### max - `Dollar.max`

Retrieves the maximum value in an array.

@abstr_code_section 

### pluck - `Dollar.pluck`

Retrieves the value of a specified property from all elements in the array.

@abstr_code_section 

### pull - `Dollar.pull`

Removes all provided values from the given array.

@abstr_code_section 

### pullAt - `Dollar.pullAt`

Removes all provided values from the given array at the given indices

@abstr_code_section 

### range - `Dollar.range`

Creates an array of numbers (positive and/or negative) progressing from start up to but not including end.

@abstr_code_section 

### reduce - `Dollar.reduce`

Reduce function that will resolve to one value after performing combine function on all elements

@abstr_code_section 

### sample - `Dollar.sample`

Returns a sample item from the array

@abstr_code_section 

### sequence - `Dollar.sequence`

Creates an array of an arbitrary sequence. Especially useful with builtin ranges.

@abstr_code_section 

### remove - `Dollar.remove`

Removes an element from array. @abstr_code_section 

### remove - `Dollar.remove`

Removes all elements from an array that the `callback` returns true.

@abstr_code_section 

### shuffle - `Dollar.shuffle`

Shuffles and returns the new shuffled array

@abstr_code_section 

### size - `Dollar.size`

Returns size of the array

@abstr_code_section 

### sortedIndex - `Dollar.sortedIndex`

Gives the smallest index at which a value should be inserted into a given the array is sorted.

@abstr_code_section 

### transpose - `Dollar.transpose`

Creates a tranposed matrix.

@abstr_code_section 

### union - `Dollar.union`

Creates an array of unique values, in order, of the provided arrays.

@abstr_code_section 

### merge - `Dollar.merge`

Creates an array of all values, including duplicates, of the arrays in the order they are provided.

@abstr_code_section 

### uniq - `Dollar.uniq`

Creates a duplicate-value-free version of an array.

@abstr_code_section 

### without - `Dollar.without`

Creates an array excluding all provided values.

@abstr_code_section 

### xor - `Dollar.xor`

Creates an array that is the symmetric difference of the provided arrays.

@abstr_code_section 

### zip - `Dollar.zip`

Creates an array of grouped elements, the first of which contains the first elements of the given arrays.

@abstr_code_section 

### zipObject - `Dollar.zipObject`

Creates an object composed from arrays of keys and values.

@abstr_code_section 

### partition - `Dollar.partition`

Produces an array of arrays, each containing n elements, each offset by step. Stops after a partition is less than n length.

@abstr_code_section 

### partitionAll - `Dollar.partitionAll`

Produces an array of arrays, each containing n elements, each offset by step. Continues after a partition is less than n length.

@abstr_code_section 

### partitionBy - `Dollar.partitionBy`

Applies a function to each element in array, splitting it each time the function returns a new value.

@abstr_code_section 

## Dictionary

### keys - `Dollar.keys`

Creates an array of keys given a dictionary.

@abstr_code_section 

### values - `Dollar.values`

Creates an array of values given a dictionary

@abstr_code_section 

### merge - `Dollar.merge`

Merges all of the dictionaries together and the latter dictionary overrides the value at a given key

@abstr_code_section 

### pick - `Dollar.pick`

Creates a shallow clone of a dictionary composed of the specified keys.

@abstr_code_section 

### omit - `Dollar.omit`

Creates a shallow clone of a dictionary excluding the specified keys.

@abstr_code_section 

## Object

### tap - `Dollar.tap`

Invokes interceptor with the object and then returns object.

@abstr_code_section 

## Function

### after - `Dollar.after`

Creates a function that executes passed function only after being called n times.

@abstr_code_section 

### bind - `Dollar.bind`

Creates a function that, when called, invokes func with the binding of arguments provided.

@abstr_code_section 

### compose - `Dollar.compose`

Compose two or more functions where the return value of the first function is passed into the next function. Useful when chaining functions and returns a function that can be called with variadic argument values or an array of values as input

@abstr_code_section 

### curry - `Dollar.curry`

Returns a function which when invoked either executes the function returning its result, if all function arguments have been provided, or returns another function that accepts one more argument of the remaining function arguments until all arguments are supplied. This is useful for making partial function as seen in these examples.

@abstr_code_section 

### id - `Dollar.id`

The identify function which simply returns the argument its given.

@abstr_code_section 

### memoize - `Dollar.memoize`

Returns a memoized function to improve performance by caching recursive function values.

@abstr_code_section 

### noop - `Dollar.noop`

A no-operation function.

@abstr_code_section 

### now - `Dollar.now`

Gets the number of seconds that have elapsed since the Unix epoch ( @abstr_number January @abstr_number @abstr_number : @abstr_number : @abstr_number UTC).

@abstr_code_section 

### once - `Dollar.once`

Get a wrapper function that executes the passed function only once. Useful for getting shared config or creating singleton objects.

@abstr_code_section 

### partial - `Dollar.partial`

Creates a function that, when called, invokes func with any additional partial arguments prepended to those provided to the new function.

@abstr_code_section 

### times - `Dollar.times`

Call a function n times and also passes the index. If a value is returned in the function then the times method will return an array of those values.

@abstr_code_section 

## Chaining

**`Dollar.chain(...)`**

### `any`

Returns true if callback function returns true for at least one element in the array

@abstr_code_section 

### `all`

Returns true if callback function returns true for all elements in the array

@abstr_code_section 

### `each`

Passes each element value to the callback function

@abstr_code_section 

### `filter`

Filters the arrary to elements for which the callback function returns true

@abstr_code_section 

### `first`

Returns the first element in the array and terminates the chain

@abstr_code_section 

### `second`

Returns the second element in the array and terminates the chain

@abstr_code_section 

### `third`

Returns the third element in the array and terminates the chain

@abstr_code_section 

### `flatten`

Flattens a nested array of any depth.

@abstr_code_section 

### `initial`

Gets all but the last element or last n elements of an array.

@abstr_code_section 

### `map`

Maps each element to the new value returned in the callback function

@abstr_code_section 

### `size`

Returns size of the array and terminates the chain

@abstr_code_section 

### `slice`

Slices the array based on the start and end position. If an end position is not specified it will slice till the end of the array.

@abstr_code_section 

### `value`

Returns the value after evaluating all callbacks

@abstr_code_section 

**Chaining more than one method**

@abstr_code_section 

# Cent Usage

## Array Extensions

### `<< elem: Element -> [Element]`

Overloaded operator to append element to an array or append elements from another array into the first array. Return array with the element appended in the end.

@abstr_code_section 

### `at(indexes: Int...) -> [Element]`

Creates an array of elements from the specified indexes, or keys, of the collection.

@abstr_code_section 

### `each(callback: (Element) -> ()) -> [Element]`

For each item in the array invoke the callback by passing the elem

@abstr_code_section 

### `eachWithIndex(callback: (Int, Element) -> ()) -> [Element]`

For each item in the array invoke the callback by passing the elem along with the index

@abstr_code_section 

### `cycle<U>(times: Int, callback: (Element) -> U)`

Cycles through the array definetly or indefinetly passing each element into the callback function. The second parameter is to specify how many times to cycle through the array. If left out it will cycle indefinetly.

@abstr_code_section 

### `every(callback: (Element) -> Bool) -> Bool`

Checks if the given callback returns true value for all items in the array.

@abstr_code_section 

### `indexOf<T: Equatable>(value: T) -> Int`

Gets the index at which the first occurrence of value is found.

@abstr_code_section 

### `fetch(index: Int, orElse: T? = .None) -> T!`

Get element from an array at the given index which can be negative to find elements from the end of the array. A default value can be returned if indexing out of bounds.

@abstr_code_section 

### `findIndex(callback: (Element) -> Bool) -> Int?`

This method is like find except that it returns the index of the first element that passes the callback check.

@abstr_code_section 

### `findLastIndex(callback: (Element) -> Bool) -> Int?`

This method is like findIndex except that it iterates over elements of the array from right to left.

@abstr_code_section 

### `first() -> Element?`

Gets the first element in the array.

@abstr_code_section 

### `flatten() -> [Element]`

Flattens a nested array of any depth.

@abstr_code_section 

### `get(index: Int) -> Element?`

Get element at index

@abstr_code_section 

### `initial(numElements: Int? = @abstr_number ) -> [Element]`

Gets all but the last element or last n elements of an array.

@abstr_code_section 

### `last() -> Element?`

Gets the last element from the array.

@abstr_code_section 

### `rest(numElements: Int? = @abstr_number ) -> [Element]`

The opposite of initial this method gets all but the first element or first n elements of an array.

@abstr_code_section 

### `min<T: Comparable>() -> T?`

Retrieves the minimum value in an array.

@abstr_code_section 

### `max<T: Comparable>() -> T?`

Retrieves the maximum value in an array.

@abstr_code_section 

### `remove<T: Equatable>(value: T) -> T?`

Remove element from array

@abstr_code_section 

### `contains<T:Equatable>(value: T) -> Bool`

Checks if a given value is present in the array.

@abstr_code_section 

## Character Extensions

### `"A".description -> String`

Get string description of Character

@abstr_code_section 

### `"A".ord -> Int`

Get int representation of character

@abstr_code_section 

## Date Extensions

### `Date.from(#year: Int, month: Int, day: Int) -> NSDate`

Returns a new Date given the year month and day

@abstr_code_section 

### `Date.from(#unix: Double) -> NSDate`

Returns a new Date given the unix timestamp (timeIntervalSince @abstr_number )

@abstr_code_section 

### `Date.parse(dateStr: String, format: String = "yyyy-MM-dd") -> NSDate`

Parses the date based on the format and return a new Date

@abstr_code_section 

### `Date.unix(date: NSDate = NSDate()) -> Double`

Returns the unix timestamp of the date passed in or the current unix timestamp

@abstr_code_section 

### `Int.hour.fromNow` et al.

Use the following syntax to calculate dates and times based on the user's current calendar. 

@abstr_code_section 

## Dictionary Extensions

### `merge<K, V>(dictionaries: Dictionary<K, V>...)`

Merges the dictionary with dictionaries passed. The latter dictionaries will override values of the keys that are already set

@abstr_code_section 

## Int Extensions

### `times(callback: (Int) -> ())`

Invoke a callback n times with callback that takes index

@abstr_code_section 

### `times (function: () -> ())`

Invoke a callback n times

@abstr_code_section 

### `char -> Character`

Get ASCII character from integer

@abstr_code_section 

### `isEven`

Check if int is even

@abstr_code_section 

### `isOdd`

Check if int is odd

@abstr_code_section 

### `digits() -> [Int]`

Splits the int into array of digits

@abstr_code_section 

### `lcm() -> Int`

LCM method return least common multiple with number passed

@abstr_code_section 

### `gcd() -> Int`

GCD method return greatest common denominator with number passed

@abstr_code_section 

### `random() -> Int`

Returns random number from @abstr_number upto but not including value of integer

@abstr_code_section 

### `factorial() -> Int`

Returns factorial of integer

@abstr_code_section 

### `isIn(interval) -> Bool`

Returns true if i is in interval or range

@abstr_code_section 

### `next() -> Int`

Get the next int

@abstr_code_section 

### `prev() -> Int`

Get the previous int

@abstr_code_section 

### `upTo(limit: Int, callback: () -> ())`

Invoke the callback from int up to and including limit

@abstr_code_section 

### `downTo(limit: Int, callback: () -> ())`

Invoke the callback from int down to and including limit

@abstr_code_section 

## String Extensions

### `.length`

Get the length of the string

@abstr_code_section 

### `.camelCase`

Get the camel case representation of the string

@abstr_code_section 

### `.kebabCase`

Get the kebab case representation of the string

@abstr_code_section 

### `.snakeCase`

Get the snake case representation of the string

@abstr_code_section 

### `.startCase`

Get the start case representation of the string

@abstr_code_section 

### `=~ str: String -> Bool`

Does a regex match of whether regex string on the right is matches the string on the left

@abstr_code_section 

### `* n: Int -> String`

Get string concatenated `n` times

@abstr_code_section 

### `[i: Int] -> Character?`

Get character at a subscript

@abstr_code_section 

### `[str: String] -> String?`

Returns the substring based on the first regex match passed in the subscript

@abstr_code_section 

### `[r: Range<Int>] -> String`

Get substring using subscript notation and by passing a range

@abstr_code_section 

### `indexOf(char: Character) -> Int?`

Get the start index of character

@abstr_code_section 

### `indexOf(str: String) -> Int?`

Get the start index of string

@abstr_code_section 

### `indexOf(pattern: String) -> Int?`

Get the start index of regex pattern inside the string

@abstr_code_section 

### `split(delimiter: Character) -> [String]`

Get an array from string split using the delimiter character

@abstr_code_section 

### `lstrip() -> String`

Get string without leading spaces

@abstr_code_section 

### `rstrip() -> String`

Get string without trailing spaces

@abstr_code_section 

### `strip() -> String`

Get string without leading or trailing spaces

@abstr_code_section 

## Regex

### `init`

Init with regex pattern as string

@abstr_code_section 

### `matches(testStr: String) -> [AnyObject]`

Return matches based on String passed.

@abstr_code_section 

### `test(testStr: String) -> Bool`

@abstr_code_section 

### `escapeStr(str: String) -> String`

Escape string with regex characters

@abstr_code_section 

## Range Extensions

### equals - `==`

Check the equality of two ranges

@abstr_code_section 

### `eachWithIndex(callback: (T) -> ())`

For each index in the range invoke the callback by passing the item in range

@abstr_code_section 

### `each(callback: () -> ())`

For each index in the range invoke the callback

@abstr_code_section 

# Contributing

If you are interested in contributing checkout @abstr_hyperlink 
