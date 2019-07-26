# MoreLINQ

LINQ to Objects is missing a few desirable features.

This project enhances LINQ to Objects with extra methods, in a manner which keeps to the spirit of LINQ.

MoreLINQ is available for download and installation as @abstr_hyperlink .

Documentation for the stable and beta releases can be found at @abstr_hyperlink .

## Usage

MoreLINQ can be used in one of two ways. The simplest is to just import the `MoreLinq` namespace and all extension methods become instantly available for you to use on the types they extend (typically some instantiation of `IEnumerable<T>`). In some very rare instances, however, doing so can cause conflicts with other libraries you may be using that incidentally also extend the same type with an identically named method and signature. This happened with MoreLINQ, for example, when Microsoft .NET Framework @abstr_number . @abstr_number introduced @abstr_hyperlink and @abstr_hyperlink . Starting with version @abstr_number . @abstr_number of MoreLINQ, you can reduce the potential for present (or even future) conflicts by individually importing just the extension methods you need using the @abstr_hyperlink :

`c# using static MoreLinq.Extensions.LagExtension; using static MoreLinq.Extensions.LeadExtension; @abstr_code_section c# using static MoreLinq.Extensions.LagExtension; using static MoreLinq.Extensions.LeadExtension; using MoreEnumerable = MoreLinq.MoreEnumerable; `

In the example above, @abstr_hyperlink and @abstr_hyperlink will be available as extension methods as well as all the regular static methods on `MoreEnumerable` but _without_ any of the extension methods offered by `MoreEnumerable`.

## Building

To build MoreLINQ from sources, you will need:

  * @abstr_hyperlink 
  * @abstr_hyperlink @abstr_number . @abstr_number if building on other platforms than Windows



Then run either `build.cmd` if building on Windows or `build.sh` if building on macOS or a Linux distribution supported by .NET Core.

Some code in the project is generated using @abstr_hyperlink templates. To regenerate the code from modified templates, run `MoreLinq\tt.cmd` (Windows) or `MoreLinq/tt.sh` depending on your platform.

Building the documentation is supported on Windows only and requires @abstr_hyperlink . Executing `builddocs.cmd` generates the documentation in the `docs/api` directory. It can be browsed locally using any HTTP server of static files, like @abstr_hyperlink .

## Operators

### Acquire

Ensures that a source sequence of disposable objects are all acquired successfully. If the acquisition of any one fails then those successfully acquired till that point are disposed.

### Aggregate

Applies multiple accumulators sequentially in a single pass over a sequence.

This method has @abstr_number overloads.

### AggregateRight

Applies a right-associative accumulator function over a sequence. This operator is the right-associative version of the Aggregate LINQ operator.

This method has @abstr_number overloads.

### Append

Returns a sequence consisting of the head element and the given tail elements.

### Assert

Asserts that all elements of a sequence meet a given condition otherwise throws an exception.

This method has @abstr_number overloads.

### AssertCount

Asserts that a source sequence contains a given count of elements.

This method has @abstr_number overloads.

### AtLeast

Determines whether or not the number of elements in the sequence is greater than or equal to the given integer.

### AtMost

Determines whether or not the number of elements in the sequence is lesser than or equal to the given integer.

### Backsert

Inserts the elements of a sequence into another sequence at a specified index from the tail of the sequence, where zero always represents the last position, one represents the second-last element, two represents the third-last element and so on.

### Batch

Batches the source sequence into sized buckets.

This method has @abstr_number overloads.

### Cartesian

Returns the Cartesian product of two or more sequences by combining each element from the sequences and applying a user-defined projection to the set.

This method has @abstr_number overloads.

### Choose

Applies a function to each element of the source sequence and returns a new sequence of result elements for source elements where the function returns a couple ( @abstr_number -tuple) having a `true` as its first element and result as the second.

### CompareCount

Compares two sequences and returns an integer that indicates whether the first sequence has fewer, the same or more elements than the second sequence.

### ~~Concat~~

Returns a sequence consisting of the head element and the given tail elements.

This method is obsolete and will be removed in a future version. Use `Append` instead.

### Consume

Completely consumes the given sequence. This method uses immediate execution, and doesn't store any data during execution

### CountBetween

Determines whether or not the number of elements in the sequence is between an inclusive range of minimum and maximum integers.

### CountBy

Applies a key-generating function to each element of a sequence and returns a sequence of unique keys and their number of occurrences in the original sequence.

This method has @abstr_number overloads.

### CountDown

Provides a countdown counter for a given count of elements at the tail of the sequence where zero always represents the last element, one represents the second-last element, two represents the third-last element and so on.

### DistinctBy

Returns all distinct elements of the given source, where "distinctness" is determined via a projection and the default equality comparer for the projected type.

This method has @abstr_number overloads.

### EndsWith

Determines whether the end of the first sequence is equivalent to the second sequence.

This method has @abstr_number overloads.

### EquiZip

Returns a projection of tuples, where each tuple contains the N-th element from each of the argument sequences. An exception is thrown if the input sequences are of different lengths.

This method has @abstr_number overloads.

### Exactly

Determines whether or not the number of elements in the sequence is equals to the given integer.

### ExceptBy

Returns the set of elements in the first sequence which aren't in the second sequence, according to a given key selector.

This method has @abstr_number overloads.

### Exclude

Excludes elements from a sequence starting at a given index

### FallbackIfEmpty

Returns the elements of a sequence and falls back to another if the original sequence is empty.

### FillBackward

Returns a sequence with each null reference or value in the source replaced with the following non-null reference or value in that sequence.

This method has @abstr_number overloads.

### FillForward

Returns a sequence with each null reference or value in the source replaced with the previous non-null reference or value seen in that sequence.

This method has @abstr_number overloads.

### Flatten

Flattens a sequence containing arbitrarily-nested sequences.

This method has @abstr_number overloads.

### Fold

Returns the result of applying a function to a sequence with @abstr_number to @abstr_number elements.

This method has @abstr_number overloads.

### ForEach

Immediately executes the given action on each element in the source sequence.

This method has @abstr_number overloads.

### From

Returns a sequence containing the values resulting from invoking (in order) each function in the source sequence of functions.

This method has @abstr_number overloads.

### FullGroupJoin

Performs a Full Group Join between the and sequences.

This method has @abstr_number overloads.

### FullJoin

Performs a full outer join between two sequences.

This method has @abstr_number overloads.

### Generate

Returns a sequence of values consecutively generated by a generator function

### GenerateByIndex

Returns a sequence of values based on indexes

### GroupAdjacent

Groups the adjacent elements of a sequence according to a specified key selector function.

This method has @abstr_number overloads.

### ~~Incremental~~

`Incremental` was redundant with `Pairwise` and so deprecated since version @abstr_hyperlink . It was eventually removed in version @abstr_hyperlink .

### Index

Returns a sequence of where the key is the zero-based index of the value in the source sequence.

This method has @abstr_number overloads.

### IndexBy

Applies a key-generating function to each element of a sequence and returns a sequence that contains the elements of the original sequence as well its key and index inside the group of its key. An additional argument specifies a comparer to use for testing equivalence of keys.

This method has @abstr_number overloads.

### Insert

Inserts the elements of a sequence into another sequence at a specified index.

### Interleave

Interleaves the elements of two or more sequences into a single sequence, skipping sequences as they are consumed.

This method has @abstr_number overloads.

### Lag

Produces a projection of a sequence by evaluating pairs of elements separated by a negative offset.

This method has @abstr_number overloads.

### Lead

Produces a projection of a sequence by evaluating pairs of elements separated by a positive offset.

This method has @abstr_number overloads.

### LeftJoin

Performs a left outer join between two sequences.

This method has @abstr_number overloads.

### MaxBy

Returns the maxima (maximal elements) of the given sequence, based on the given projection.

This method has @abstr_number overloads.

### MinBy

Returns the minima (minimal elements) of the given sequence, based on the given projection.

This method has @abstr_number overloads.

### Move

Returns a sequence with a range of elements in the source sequence moved to a new offset.

### OrderBy

Sorts the elements of a sequence in a particular direction (ascending, descending) according to a key.

This method has @abstr_number overloads.

### OrderedMerge

Merges two ordered sequences into one. Where the elements equal in both sequences, the element from the first sequence is returned in the resulting sequence.

This method has @abstr_number overloads.

### Pad

Pads a sequence with default values if it is narrower (shorter in length) than a given width.

This method has @abstr_number overloads.

### PadStart

Pads a sequence with default values in the beginning if it is narrower (shorter in length) than a given width.

This method has @abstr_number overloads.

### Pairwise

Returns a sequence resulting from applying a function to each element in the source sequence and its predecessor, with the exception of the first element which is only returned as the predecessor of the second element

### PartialSort

Combines `OrderBy` (where element is key) and `Take` in a single operation.

### PartialSortBy

Combines `OrderBy` and `Take` in a single operation.

### Partition

Partitions a sequence by a predicate, or a grouping by Boolean keys or up to @abstr_number sets of keys.

This method has @abstr_number overloads.

### Permutations

Generates a sequence of lists that represent the permutations of the original sequence

### Pipe

Executes the given action on each element in the source sequence and yields it

### Prepend

Prepends a single value to a sequence

### PreScan

Performs a pre-scan (exclusive prefix sum) on a sequence of elements

### Random

Returns an infinite sequence of random integers using the standard .NET random number generator.

This method has @abstr_number overloads.

### RandomDouble

Returns an infinite sequence of random double values between @abstr_number . @abstr_number and @abstr_number . @abstr_number .

This method has @abstr_number overloads.

### RandomSubset

Returns a sequence of a specified size of random elements from the original sequence.

This method has @abstr_number overloads.

### Rank

Ranks each item in the sequence in descending ordering using a default comparer.

This method has @abstr_number overloads.

### RankBy

Ranks each item in the sequence in descending ordering by a specified key using a default comparer.

This method has @abstr_number overloads.

### Repeat

Repeats the sequence indefinitely or a specific number of times.

This method has @abstr_number overloads.

### RightJoin

Performs a right outer join between two sequences.

This method has @abstr_number overloads.

### RunLengthEncode

Run-length encodes a sequence by converting consecutive instances of the same element into a `KeyValuePair<T, int>` representing the item and its occurrence count.

This method has @abstr_number overloads.

### Scan

Peforms a scan (inclusive prefix sum) on a sequence of elements.

This method has @abstr_number overloads.

### ScanBy

Applies an accumulator function over sequence element keys, returning the keys along with intermediate accumulator states.

This method has @abstr_number overloads.

### ScanRight

Peforms a right-associative scan (inclusive prefix) on a sequence of elements. This operator is the right-associative version of the Scan operator.

This method has @abstr_number overloads.

### Segment

Divides a sequence into multiple sequences by using a segment detector based on the original sequence.

This method has @abstr_number overloads.

### Sequence

Generates a sequence of integral numbers within the (inclusive) specified range.

This method has @abstr_number overloads.

### Shuffle

Returns a sequence of elements in random order from the original sequence.

This method has @abstr_number overloads.

### SkipLast

Bypasses a specified number of elements at the end of the sequence.

### SkipUntil

Skips items from the input sequence until the given predicate returns true when applied to the current source item; that item will be the last skipped

### Slice

Extracts elements from a sequence at a particular zero-based starting index

### SortedMerge

Merges two or more sequences that are in a common order (either ascending or descending) into a single sequence that preserves that order.

This method has @abstr_number overloads.

### Split

Splits the source sequence by a separator.

This method has @abstr_number overloads.

### StartsWith

Determines whether the beginning of the first sequence is equivalent to the second sequence.

This method has @abstr_number overloads.

### Subsets

Returns a sequence of representing all of the subsets of any size that are part of the original sequence.

This method has @abstr_number overloads.

### TagFirstLast

Returns a sequence resulting from applying a function to each element in the source sequence with additional parameters indicating whether the element is the first and/or last of the sequence

### TakeEvery

Returns every N-th element of a source sequence

### TakeLast

Returns a specified number of contiguous elements from the end of a sequence

### TakeUntil

Returns items from the input sequence until the given predicate returns true when applied to the current source item; that item will be the last returned

### ThenBy

Performs a subsequent ordering of elements in a sequence in a particular direction (ascending, descending) according to a key.

This method has @abstr_number overloads.

### ToArrayByIndex

Creates an array from an IEnumerable where a function is used to determine the index at which an element will be placed in the array.

This method has @abstr_number overloads.

### ToDataTable

Appends elements in the sequence as rows of a given object with a set of lambda expressions specifying which members (property or field) of each element in the sequence will supply the column values.

This method has @abstr_number overloads.

### ToDelimitedString

Creates a delimited string from a sequence of values. The delimiter used depends on the current culture of the executing thread.

This method has @abstr_number overloads.

### ToDictionary

Creates a @abstr_hyperlink from a sequence of @abstr_hyperlink elements or tuples of @abstr_number .

This method has @abstr_number overloads.

### ToHashSet

Returns a @abstr_hyperlink of the source items using the default equality comparer for the type.

This method has @abstr_number overloads.

### ToLookup

Creates a @abstr_hyperlink from a sequence of @abstr_hyperlink elements or tuples of @abstr_number .

This method has @abstr_number overloads.

### Transpose

Transposes the rows of a sequence into columns.

### TraverseBreadthFirst

Traverses a tree in a breadth-first fashion, starting at a root node and using a user-defined function to get the children at each node of the tree.

### TraverseDepthFirst

Traverses a tree in a depth-first fashion, starting at a root node and using a user-defined function to get the children at each node of the tree.

### Trace

Traces the elements of a source sequence for diagnostics.

This method has @abstr_number overloads.

### Unfold

Returns a sequence generated by applying a state to the generator function, and from its result, determines if the sequence should have a next element and its value, and the next state in the recursive call.

This method has @abstr_number overloads.

### Window

Processes a sequence into a series of subsequences representing a windowed subset of the original

### ~~Windowed~~

Processes a sequence into a series of subsequences representing a windowed subset of the original

This method is obsolete and will be removed in a future version. Use `Window` instead.

### WindowLeft

Creates a left-aligned sliding window over the source sequence of a given size.

### WindowRight

Creates a right-aligned sliding window over the source sequence of a given size.

### ZipLongest

Returns a projection of tuples, where each tuple contains the N-th element from each of the argument sequences. The resulting sequence will always be as long as the longest of input sequences where the default value of each of the shorter sequence element types is used for padding.

This method has @abstr_number overloads.

### ZipShortest

Returns a projection of tuples, where each tuple contains the N-th element from each of the argument sequences. The resulting sequence is as short as the shortest input sequence.

This method has @abstr_number overloads.

## Experimental Operators

THESE METHODS ARE EXPERIMENTAL. THEY MAY BE UNSTABLE AND UNTESTED. THEY MAY BE REMOVED FROM A FUTURE MAJOR OR MINOR RELEASE AND POSSIBLY WITHOUT NOTICE. USE THEM AT YOUR OWN RISK. THE METHODS ARE PUBLISHED FOR FIELD EXPERIMENTATION TO SOLICIT FEEDBACK ON THEIR UTILITY AND DESIGN/IMPLEMENTATION DEFECTS.

Use of experimental methods requires importing the `MoreLinq.Experimental` namespace.

### Aggregate

Applies multiple accumulator queries sequentially in a single pass over a sequence.

This method has @abstr_number overloads.

### Await

Creates a sequence query that streams the result of each task in the source sequence as it completes asynchronously.

This method has @abstr_number overloads.

### AwaitCompletion

Awaits completion of all asynchronous evaluations irrespective of whether they succeed or fail. An additional argument specifies a function that projects the final result given the source item and completed task.

### Memoize

Creates a sequence that lazily caches the source as it is iterated for the first time, reusing the cache thereafter for future re-iterations. If the source is already cached or buffered then it is returned verbatim.
