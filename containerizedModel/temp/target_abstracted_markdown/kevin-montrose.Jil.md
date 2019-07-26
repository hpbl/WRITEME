### Jil

A fast JSON (de)serializer, built on @abstr_hyperlink with a number of somewhat crazy optimization tricks.

@abstr_hyperlink in addition to this repository.

## Usage

### Serializing

```C# using(var output = new StringWriter()) { JSON.Serialize( new { MyInt = @abstr_number , MyString = "hello world", // etc. }, output ); } @abstr_code_section C# using(var input = new StringReader(myString)) { var result = JSON.Deserialize(input); } @abstr_code_section C# using(var input = new StringReader(myString)) { var result = JSON.DeserializeDynamic(input); } @abstr_code_section csharp class LegalUnion { [JilDirective(Name = "Foo", IsUnion = true)] public string FooString { get; set; } [JilDirective(Name = "Foo", IsUnion = true)] public int FooInt { get; set; } } @abstr_code_section csharp class IllegalUnion { [JilDirective(Name = "Foo", IsUnion = true)] public uint FooUInt { get; set; } [JilDirective(Name = "Foo", IsUnion = true)] public double FooDouble { get; set; } } @abstr_code_section csharp class WithUnionType { [JilDirective(Name = "Foo", IsUnion = true, IsUnionType = true)] public Type FooType { get; set; }
    
    
    [JilDirective(Name = "Foo", IsUnion = true)]
    public uint FooUInt { get; set; }
    [JilDirective(Name = "Foo", IsUnion = true)]
    public List<int> FooList { get; set; }
    

} ``` When serializing this field _must_ be set.

## Configuration

Jil's `JSON.Serialize` and `JSON.Deserialize` methods take an optional `Options` parameter which controls:

  * The format of DateTimes, DateTimeOffsets, and TimeSpans; one of 
    * MicrosoftStyleMillisecondsSinceUnixEpoch, a string 
      * "\/Date(##...##)\/" for DateTimes & DateTimeOffsets
      * " @abstr_number . @abstr_number : @abstr_number : @abstr_number . @abstr_number " for TimeSpans
    * MillisecondsSinceUnixEpoch, a number 
      * for DateTimes & DateTimeOffsets it can be passed directly to @abstr_hyperlink 
      * for TimeSpans it's simply @abstr_hyperlink 
    * SecondsSinceUnixEpoch, a number 
      * for DateTimes & DateTimeOffsets this is commonly refered to as @abstr_hyperlink 
      * for TimeSpans it's simply @abstr_hyperlink 
    * ISO @abstr_number , a string 
      * for DateTimes & DateTimeOffsets, ie. " @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number Z"
      * DateTimes are always serialized in UTC (timezone offset = @abstr_number : @abstr_number ), because Local DateTimes cannot reliably roundtrip
      * DateTimeOffsets include their timezone offset when serialized
      * for TimeSpans, ie. "P @abstr_number DT @abstr_number H @abstr_number M @abstr_number . @abstr_number S" 
    * RFC @abstr_number , a string 
      * for DateTimes and DateTimeOffsets, ie. "Thu, @abstr_number Apr @abstr_number @abstr_number : @abstr_number : @abstr_number GMT"
      * " @abstr_number . @abstr_number : @abstr_number : @abstr_number . @abstr_number " for TimeSpans
  * What to treat DateTimes with an @abstr_hyperlink as; one of 
    * IsLocal, will treat an unspecified DateTime as if it were in local time
    * IsUtc, will treat an unspecified DateTime as if it were in UTC
  * Whether or not to exclude null values when serializing dictionaries, and object members
  * Whether or not to "pretty print" while serializing, which adds extra linebreaks and whitespace for presentation's sake
  * Whether or not the serialized JSON will be used as JSONP (which requires slightly more work be done w.r.t. escaping)
  * Whether or not to include inherited members when serializing
  * The way to format member names; one of 
    * Verbatim 
      * As it appears in source, unless modified by a `[MemberName]` or `[JilDirective]`
    * CamelCase 
      * lowercasing the first letter of members, ie. `"CamelCase"` would become `"camelCase"`



## Benchmarks

Jil aims to be the fastest general purpose JSON (de)serializer for .NET. Flexibility and "nice to have" features are explicitly discounted in the pursuit of speed.

These benchmarks were run on a machine with the following specs:

  * Operating System: Windows @abstr_number . @abstr_number Enterprise @abstr_number -bit ( @abstr_number . @abstr_number , Build @abstr_number ) ( @abstr_number .winblue_r @abstr_number . @abstr_number - @abstr_number )
  * System Manufacturer: Apple Inc.
  * System Model: MacBookPro @abstr_number , @abstr_number 
  * Processor: Intel(R) Core(TM) i @abstr_number - @abstr_number HQ CPU @ @abstr_number . @abstr_number GHz ( @abstr_number CPUs), ~ @abstr_number . @abstr_number GHz
  * Memory: @abstr_number MB RAM
    * DDR @abstr_number 
    * Dual Channel
    * @abstr_number . @abstr_number MHZ



As with all benchmarks, take these with a grain of salt.

### Serialization

For comparison, here's how Jil stacks up against other popular .NET serializers in a @abstr_hyperlink :

  * @abstr_hyperlink - JSON library included with ASP.NET MVC, version @abstr_number . @abstr_number . @abstr_number 
  * @abstr_hyperlink - JSON, CSV, and JSV library; a part of the @abstr_hyperlink , version @abstr_number . @abstr_number . @abstr_number 
  * @abstr_hyperlink - binary serializer for Google's @abstr_hyperlink , version @abstr_number . @abstr_number . @abstr_number . @abstr_number 
    * __does not__ serialize JSON, included as a baseline



All three libraries are in use at @abstr_hyperlink in various production roles.

@abstr_image 

@abstr_image 

@abstr_image 

Note that the bars in each group of each graph are scaled so that the fastest library is @abstr_number .

Numbers, include millisecond timings, can found in @abstr_hyperlink .

The Question, Answer, and User types are taken from the @abstr_hyperlink .

Data for each type is randomly generated from a fixed seed. Random text is biased towards ASCII*, but includes all unicode.

*This is meant to simulate typical content from the Stack Exchange API.

### Deserialization

The same libraries and same types were used to test deserialization.

@abstr_image 

@abstr_image 

@abstr_image 

Note that the bars in each group of each graph are scaled so that the fastest library is @abstr_number .

Numbers, include millisecond timings, can be found in @abstr_hyperlink .

## Tricks

Jil has a lot of tricks to make it fast. These may be interesting, even if Jil itself is too limited for your use.

### Sigil

Jil does a lot of IL generation to produce tight, focused code. While possible with @abstr_hyperlink , Jil instead uses the @abstr_hyperlink . Sigil automatically does a lot of the busy work you'd normally have to do manually to produce ideal IL. Using Sigil also makes hacking on Jil much more productive, as debuging IL generation without it is pretty slow going.

### Trade Memory For Speed

Jil's internal serializers and deserializers are (in the absense of recursive types) monolithic, and per-type; avoiding extra runtime lookups, and giving .NET's JIT more context when generating machine code.

The methods Jil create also do no Options checking at serialization time; Options are baked in at first use. This means that Jil may create up to @abstr_number different serializers and @abstr_number different deserializers for a single type (though in practice, many fewer).

### Optimizing Member Access Order

Perhaps the @abstr_hyperlink determines the preferred order to access members, so the CPU doesn't stall waiting for values from memory.

Members are divided up into @abstr_number groups:

  * Simple 
    * primitive ValueTypes such as int, double, etc.
  * Nullable Types
  * Recursive Types
  * Everything Else



Members within each group are ordered by the offset of the fields backing them (properties are decompiled to determine fields they use).

This is a fairly naive implementation of this idea, there's almost certainly more that could be squeezed out especially with regards to consistency of gains.

### Don't Allocate If You Can Avoid It

.NET's GC is excellent, but no-GC is still faster than any-GC.

Jil tries to avoid allocating any reference types, with some exceptions:

  * @abstr_hyperlink if any integer numbers, DateTimes, or GUIDs are being serialized
  * @abstr_hyperlink if any strings, user defined objects, or ISO @abstr_number DateTimes are being deserialized



Depending on the data being deserialized a `StringBuilder` may also be allocated. If a `TextWriter` does not have an invariant culture, strings may also be allocated when serializing floating point numbers.

### Escaping Tricks

JSON has escaping rules for `\`, `"`, and control characters. These can be kind of time consuming to deal with. Jil avoids it as much as possible in two ways.

First, all known key names are determined once and baked into the generated delegates @abstr_hyperlink . Known keys are member names and enumeration values.

Second, rather than lookup encoded characters in a dictionary or a long series of branches Jil does explicit checks for `"` and `\` and turns the rest into a subtraction and jump table lookup. This comes out to ~three branches (with mostly consistently taken paths, good for branch prediction in theory) per character.

This works because control characters in .NET strings (bascally UTF- @abstr_number , but might as well be ASCII for this trick) are sequential, being [ @abstr_number , @abstr_number ].

JSONP also requires escaping of line separator (\u @abstr_number ) and paragraph separator (\u @abstr_number ) characters. When configured to serialize JSONP, Jil escapes them in the same manner as `\` and `"`.

### Custom Number Formatting

While number formatting in .NET is pretty fast, it has a lot of baggage to handle custom number formatting.

Since JSON has a strict definition of a number, a Write() implementation without configuration is noticeably faster. To go the extra mile, Jil contains @abstr_hyperlink .

Jil __does not__ include custom `decimal`, `double`, or `single` Write() implementations, as despite my best efforts I haven't been able to beat the ones built into .NET. If you think you're up to the challenge, I'd be really interested in seeing code that _is_ faster than the included implementations.

### Custom Date Formatting

Similarly to numbers, each of Jil's date formats has a custom Write() implementation.

  * @abstr_hyperlink can be unrolled into a smaller number of `/` and `%` instructions
  * @abstr_hyperlink can be similarly decomposed
  * @abstr_hyperlink is a subtraction and division, then fed into the custom `long` writing code
  * @abstr_hyperlink is essentially the same
  * @abstr_hyperlink just has a different divisor



### Custom Guid Formatting

Noticing a pattern?

Jil has a @abstr_hyperlink (which is one of the reasons Jil only supports the D format).

Fun fact about this method, I tested a more branch heavy version (which removed the byte lookup) which turned out to be considerably slower than the built-in method due to @abstr_hyperlink . Type @abstr_number Guids being random makes for something quite close to the worst case for branch prediciton.

### Different Code For Arrays

Although arrays implement `IList<T>` the JIT generates much better code if you give it array-ish IL to chew on, so Jil does so.

### Special Casing Enumerations With Sequential Values

Many enums end up having sequential values, Jil will exploit this if possible and generate a subtraction and jump table lookup. Non-sequential enumerations are handled with a long series of branches.

### Custom Number Readers

Just like Jil maintains many different methods for writing integer types, it also maintains @abstr_hyperlink . These methods omit unnecessary sign checks, overflow checks, and culture-specific formatting support.

### Automata Based Member Name Lookups

Rather than read a member name into a string or buffer when deserializing, Jil will try to match it one character at a time using an @abstr_hyperlink .

### Avoid Abstractions If Able

If you're serializing to `string` (as indicated by using a particular @abstr_hyperlink method) Jil will avoid the overhead of virtually dispatching calls against `TextWriter`, and instead statically call against its own specialized @abstr_hyperlink . In the general case Jil prefers to write against a `TextWriter` so as to keep memory pressure low (a real concern in many real world deployments), but when Jil is going to allocate a `string` anyway avoiding virtual dispatch results in a noticeable speed up. 

Simiarly, deserializing from `string` (as indicated by this @abstr_hyperlink method) Jil avoid using `TextReader`, and instead issue static calls against a @abstr_hyperlink .
