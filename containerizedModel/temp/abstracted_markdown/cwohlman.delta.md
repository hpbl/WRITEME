# Delta @abstr_hyperlink @abstr_hyperlink 

Deltas are a simple, yet expressive format that can be used to describe contents and changes. The format is JSON based, and is human readable, yet easily parsible by machines. Deltas can describe any rich text document, includes all text and formatting information, without the ambiguity and complexity of HTML.

A Delta is made up of an @abstr_hyperlink of Operations, which describe changes to a document. They can be an <code>insert</code>, <code>delete</code> or <code>retain</code>. Note operations do not take an index. They always describe the change at the current index. Use retains to "keep" or "skip" certain parts of the document.

Don’t be confused by its name Delta—Deltas represents both documents and changes to documents. If you think of Deltas as the instructions from going from one document to another, the way Deltas represent a document is by expressing the instructions starting from an empty document.

## Quick Example

@abstr_code_section 

This README describes Deltas in its general form and API functionality. Additional information on the way Quill specifically uses Deltas can be found on its own @abstr_hyperlink . A walkthough of the motivation and design thinking behind Deltas are on @abstr_hyperlink .

This format is suitable for @abstr_hyperlink and defines several functions to support this use case.

## Contents

#### Operations

  * insert
  * delete
  * retain



#### Construction

  * <code>constructor</code>
  * <code>insert</code>
  * <code>delete</code>
  * <code>retain</code>



#### Documents

These methods called on or with non-document Deltas will result in undefined behavior.

  * <code>concat</code>
  * <code>diff</code>
  * <code>eachLine</code>



#### Utility

  * <code>filter</code>
  * <code>forEach</code>
  * <code>length</code>
  * <code>map</code>
  * <code>partition</code>
  * <code>reduce</code>
  * <code>slice</code>



#### Operational Transform

  * <code>compose</code>
  * <code>transform</code>
  * <code>transformPosition</code>



## Operations

### Insert Operation

Insert operations have an `insert` key defined. A String value represents inserting text. Any other type represents inserting an embed (however only one level of object comparison will be performed for equality).

In both cases of text and embeds, an optional `attributes` key can be defined with an Object to describe additonal formatting information. Formats can be changed by the retain operation.

@abstr_code_section 

### Delete Operation

Delete operations have a Number `delete` key defined representing the number of characters to delete. All embeds have a length of @abstr_number .

@abstr_code_section 

### Retain Operation

Retain operations have a Number `retain` key defined representing the number of characters to keep (other libraries might use the name keep or skip). An optional `attributes` key can be defined with an Object to describe formatting changes to the character range. A value of `null` in the `attributes` Object represents removal of that key.

_Note: It is not necessary to retain the last characters of a document as this is implied._

@abstr_code_section 

## Construction

### constructor

Creates a new Delta object.

#### Methods

  * `new Delta()`
  * `new Delta(ops)`
  * `new Delta(delta)`



#### Parameters

  * `ops` \- Array of operations
  * `delta` \- Object with an `ops` key set to an array of operations



_Note: No validity/sanity check is performed when constructed with ops or delta. The new delta's internal ops array will also be assigned to ops or delta.ops without deep copying._

#### Example

@abstr_code_section 

* * *

### insert()

Appends an insert operation. Returns `this` for chainability.

#### Methods

  * `insert(text, attributes)`
  * `insert(embed, attributes)`



#### Parameters

  * `text` \- String representing text to insert
  * `embed` \- Number representing embed type to insert
  * `attributes` \- Optional attributes to apply



#### Example

@abstr_code_section 

* * *

### delete()

Appends a delete operation. Returns `this` for chainability.

#### Methods

  * `delete(length)`



#### Parameters

  * `length` \- Number of characters to delete



#### Example

@abstr_code_section 

* * *

### retain()

Appends a retain operation. Returns `this` for chainability.

#### Methods

  * `retain(length, attributes)`



#### Parameters

  * `length` \- Number of characters to retain
  * `attributes` \- Optional attributes to apply



#### Example

@abstr_code_section 

## Documents

### concat()

Returns a new Delta representing the concatenation of this and another document Delta's operations.

#### Methods

  * `concat(other)`



#### Parameters

  * `other` \- Document Delta to concatenate



#### Returns

  * `Delta` \- Concatenated document Delta



#### Example

@abstr_code_section 

* * *

### diff()

Returns a Delta representing the difference between two documents. Optionally, accepts a suggested index where change took place, often representing a cursor position _before_ change.

#### Methods

  * `diff(other)`
  * `diff(other, index)`



#### Parameters

  * `other` \- Document Delta to diff against
  * `index` \- Suggested index where change took place



#### Returns

  * `Delta` \- difference between the two documents



#### Example

@abstr_code_section 

* * *

### eachLine()

Iterates through document Delta, calling a given function with a Delta and attributes object, representing the line segment.

#### Methods

  * `eachLine(predicate, newline)`



#### Parameters

  * `predicate` \- function to call on each line group
  * `newline` \- newline character, defaults to `\n`



#### Example

@abstr_code_section 

## Utility

### filter()

Returns an array of operations that passes a given function.

#### Methods

  * `filter(predicate)`



#### Parameters

  * `predicate` \- Function to test each operation against. Return `true` to keep the operation, `false` otherwise.



#### Returns

  * `Array` \- Filtered resulting array



#### Example

@abstr_code_section 

* * *

### forEach()

Iterates through operations, calling the provided function for each operation.

#### Methods

  * `forEach(predicate)`



#### Parameters

  * `predicate` \- Function to call during iteration, passing in the current operation.



#### Example

@abstr_code_section 

* * *

### length()

Returns length of a Delta, which is the sum of the lengths of its operations.

#### Methods

  * `length()`



#### Example

@abstr_code_section 

* * *

### map()

Returns a new array with the results of calling provided function on each operation.

#### Methods

  * `map(predicate)`



#### Parameters

  * `predicate` \- Function to call, passing in the current operation, returning an element of the new array to be returned



#### Returns

  * `Array` \- A new array with each element being the result of the given function.



#### Example

@abstr_code_section 

* * *

### partition()

Create an array of two arrays, the first with operations that pass the given function, the other that failed.

#### Methods

  * `partition(predicate)`



#### Parameters

  * `predicate` \- Function to call, passing in the current operation, returning whether that operation passed



#### Returns

  * `Array` \- A new array of two Arrays, the first with passed operations, the other with failed operations



#### Example

@abstr_code_section 

* * *

### reduce()

Applies given function against an accumulator and each operation to reduce to a single value.

#### Methods

  * `reduce(predicate, initialValue)`



#### Parameters

  * `predicate` \- Function to call per iteration, returning an accumulated value
  * `initialValue` \- Initial value to pass to first call to predicate



#### Returns

  * `any` \- the accumulated value



#### Example

@abstr_code_section 

* * *

### slice()

Returns copy of delta with subset of operations.

#### Methods

  * `slice()`
  * `slice(start)`
  * `slice(start, end)`



#### Parameters

  * `start` \- Start index of subset, defaults to @abstr_number 
  * `end` \- End index of subset, defaults to rest of operations



#### Example

@abstr_code_section 

## Operational Transform

### compose()

Returns a Delta that is equivalent to applying the operations of own Delta, followed by another Delta.

#### Methods

  * `compose(other)`



#### Parameters

  * `other` \- Delta to compose



#### Example

@abstr_code_section 

* * *

### transform()

Transform given Delta against own operations.

#### Methods

  * `transform(other, priority)`
  * `transform(index)` \- Alias for <code>transformPosition</code>



#### Parameters

  * `other` \- Delta to transform
  * `priority` \- Boolean used to break ties. If `true`, then `this` takes priority over `other`, that is, its actions are considered to happen "first."



#### Returns

  * `Delta` \- transformed Delta



#### Example

@abstr_code_section 

* * *

### transformPosition()

Transform an index against the delta. Useful for representing cursor/selection positions.

#### Methods

  * `transformPosition(index)`



#### Parameters

  * `index` \- index to transform



#### Returns

  * `Number` \- transformed index



#### Example

@abstr_code_section 
