# ZeroFormatter

Fastest C# Serializer and Infinitely Fast Deserializer for .NET, .NET Core and Unity.

@abstr_hyperlink 

@abstr_image 

Note: this is **unfair** comparison, please see the @abstr_hyperlink section for the details.

## Why use ZeroFormatter?

  * **Fastest** C# serializer, the code is extremely tuned by both implementation and binary layout(see: @abstr_hyperlink )
  * Deserialize/re-serialize is Infinitely fast because formatter can access to serialized data without parsing/packing(see: @abstr_hyperlink )
  * Strongly Typed and C# Code as schema, no needs to other IDL like `.proto`, `.fbs`...
  * Smart API, only to use `Serialize<T>` and `Deserialize<T>`
  * Full set of general purpose, multifunctional serializer, supports Union(Polymorphism) and native support of Dictionary, MultiDictionary(ILookup)
  * First-class support to Unity(IL @abstr_number CPP), it's faster than native JsonUtility



ZeroFormatter is similar as @abstr_hyperlink but ZeroFormatter has clean API(FlatBuffers API is too ugly, @abstr_hyperlink ; we can not use regularly) and C# specialized. If you need to performance such as Game, Distributed Computing, Microservices, etc..., ZeroFormatter will help you.

## Install

for .NET, .NET Core

  * PM> Install-Package @abstr_hyperlink 



for Unity(Interfaces can reference both .NET @abstr_number . @abstr_number and Unity for share types), Unity binary exists on @abstr_hyperlink as well. More details, please see the @abstr_hyperlink section.

  * PM> Install-Package @abstr_hyperlink 
  * PM> Install-Package @abstr_hyperlink 



Visual Studio Analyzer

  * PM> Install-Package @abstr_hyperlink 



## Quick Start

Define class and mark as `[ZeroFormattable]` and public properties mark `[Index]` and declare `virtual`, call `ZeroFormatterSerializer.Serialize<T>/Deserialize<T>`. 

@abstr_code_section 

Serializable target must mark `ZeroFormattableAttribute`, there public property must be `virtual` and requires `IndexAttribute`.

## Analyzer

ZeroFormatter.Analyzer helps object definition. Attributes, accessibility etc are detected and it becomes a compiler error.

@abstr_image 

If you want to allow a specific type (for example, when registering a custom type), put `ZeroFormatterAnalyzer.json` at the project root and make the Build Action to `AdditionalFiles`.

@abstr_image 

This is a sample of the contents of ZeroFormatterAnalyzer.json. 

@abstr_code_section 

## Built-in support types

All primitives, All enums, `TimeSpan`, `DateTime`, `DateTimeOffset`, `Guid`, `Tuple<,...>`, `KeyValuePair<,>`, `KeyTuple<,...>`, `Array`, `List<>`, `HashSet<>`, `Dictionary<,>`, `ReadOnlyCollection<>`, `ReadOnlyDictionary<,>`, `IEnumerable<>`, `ICollection<>`, `IList<>`, `ISet<,>`, `IReadOnlyCollection<>`, `IReadOnlyList<>`, `IReadOnlyDictionary<,>`, `ILookup<,>` and inherited `ICollection<>` with paramterless constructor. Support type can extend easily, see: @abstr_hyperlink section.

## Define object rules

There rules can detect ZeroFormatter.Analyzer.

  * Type must be marked with ZeroformattableAttribute. 
  * Public property must be marked with IndexAttribute or IgnoreFormatAttribute.
  * Public property's must needs both public/protected get and set accessor.
  * Public property's accessor must be virtual.
  * Class is only supported public property not field(If struct can define field).
  * IndexAttribute is not allowed duplicate number.
  * Class must needs a parameterless constructor.
  * Struct index must be started with @abstr_number and be sequential.
  * Struct needs full parameter constructor of index property types.
  * Union type requires UnionKey property.
  * UnionKey does not support multiple keys.
  * All Union sub types must be inherited type.



The definition of struct is somewhat different from class. 

@abstr_code_section 

Struct index must be started with @abstr_number and be sequential and needs full parameter constructor of index property types.

## eager/lazy-evaluation

ZeroFormatter has two types of evaluation, "eager-evaluation" and "lazy-evaluation". If the type is lazy-evaluation, deserialization will be infinitely fast because it does not parse. If the user-defined class or type is `IList<>`, `IReadOnlyList<>`, `ILazyLookup<>`, `ILazyDicitonary<>`, `ILazyReadOnlyDictionary<>`, deserialization of that type will be lazily evaluated.

@abstr_code_section 

If you want to maximize the power of lazy-evaluation, define all collections with `IList<>`/`IReadOnlyList<>`.

`ILazyLookup<>`, `ILazyDicitonary<>`, `ILazyReadOnlyDictionary<>` is special collection interface, it defined by ZeroFormatter. The values defined in these cases are deserialized very quickly because the internal structure is also serialized in its entirety and does not need to be rebuilt data structure. But there are some limitations instead. Key type must be primitive, enum or there KeyTuple only because the key must be deterministic.

@abstr_code_section 

As a precaution, the binary size will be larger because all internal structures are serialized. This is a tradeoff, please select the best case depending on the situation.

## Architecture

When deserializing an object, it returns a byte[] wrapper object. When accessing the property, it reads the data from the offset information of the header(and cache when needed).

@abstr_image 

Why must we define object in virtual? The reason is to converts access to properties into access to byte buffers.

If there is no change in data, reserialization is very fast because it writes the internal buffer data as it is. All serialized data can mutate and if the property type is fixed-length(primitive and some struct), it is written directly to internal binary data so keep the reserialization speed. If property is variable-length(string, list, object, etc...) the type and property are marked dirty. And it serializes only the difference, it is faster than normal serialization.

@abstr_image 

> If property includes array/collection, ZeroFormatter can not track data was mutated so always marks dirty initially even if you have not mutated it. To avoid it, declare all collections with `IList<>` or `IReadOnlyList<>`.

If you want to define Immutable, you can use "protected set" and "IReadOnlyList<>".

@abstr_code_section 

Binary size is slightly larger than Protobuf, MsgPack because of needs the header index area and all primitives are fixed-length(same size as FlatBuffers, smaller than JSON). It is a good idea to compress it to shrink the data size, gzip or LZ @abstr_number (recommended, LZ @abstr_number is fast compression/decompression algorithm).

## Versioning

If schema is growing, you can add Index.

@abstr_code_section 

But you can not delete index. If that index is unnecessary, please make it blank(such as [ @abstr_number , @abstr_number , @abstr_number ]).

Only `class` definition is supported for versioning. Please note that `struct` is not supported.

## DateTime

`DateTime` is serialized to UniversalTime so lose the TimeKind. If you want to change local time, use ToLocalTime after converted. 

@abstr_code_section 

If you want to save offset info, use DateTimeOffset instead of DateTime. 

@abstr_code_section 

## Union

ZeroFormatter supports Union(Polymorphic) type. It can define abstract class and `UnionAttributes`, `UnionKeyAttribute`.

@abstr_code_section 

You can use Union as following.

@abstr_code_section 

If an unknown identification key arrives, an exception is thrown by default. However, it is also possible to return the default type - fallbackType.

@abstr_code_section 

Union can construct on execution time. You can mark `DynamicUnion` and make resolver on `AppendDynamicUnionResolver`.

@abstr_code_section 

## Unity Supports

Put the `ZeroFormatter.dll` and `ZeroFormatter.Interfaces.dll`, modify Edit -> Project Settings -> Player -> Optimization -> Api Compatibillity Level to `.NET @abstr_number . @abstr_number` or higher.

@abstr_image 

ZeroFormatter.Unity works on all platforms(PC, Android, iOS, etc...). But it can 'not' use dynamic serializer generation due to IL @abstr_number CPP issue. But pre code generate helps it. Code Generator is located in `packages\ZeroFormatter.Interfaces.*.*.*\tools\zfc.exe`. zfc is using @abstr_hyperlink so analyze source code, pass the target `csproj`. 

@abstr_code_section 

> Note: Some options is important for reduce code generation size and startup speed on IL @abstr_number CPP, especially `-f` is recommend if you use only DefaultResolver.

@abstr_code_section 

`zfc.exe` can setup on csproj's `PreBuildEvent`(useful to generate file path under self project) or `PostBuildEvent`(useful to generate file path is another project).

> Note: zfc.exe is currently only run on Windows. It is .NET Core's @abstr_hyperlink workspace API limitation but I want to implements to all platforms...

Generated formatters must need to register on Startup. By default, zfc generate automatic register code on `RuntimeInitializeOnLoad` timing.

For Unity Unit Tests, the generated formatters must be registered in the `SetUp` method:

@abstr_code_section 

ZeroFormatter can not serialize Unity native types by default but you can make custom formatter by define pseudo type. For example create `Vector @abstr_number` to ZeroFormatter target. 

@abstr_code_section 

`INCLUDE_ONLY_CODE_GENERATION` is special symbol of zfc, include generator target but does not include compile.

If you encounter `InvalidOperationException` such as 

@abstr_code_section 

It means not generated/registered type. Especially collections are not automatically registered if they are not included in the property. You can register manually such as `Formatter.RegisterArray<UnityEngine.Vector @abstr_number >()` or create hint type for zfc.

@abstr_code_section 

## Performance

Benchmarks comparing to other serializers run on `Windows @abstr_number Pro x @abstr_number Intel Core i @abstr_number - @abstr_number @abstr_number . @abstr_number GHz, @abstr_number GB RAM`. Benchmark code is @abstr_hyperlink and full-result is @abstr_hyperlink , latest compare with more serializers(Wire, NetSerializer, etc...) result is @abstr_hyperlink .

@abstr_image 

@abstr_image 

Deserialize speed is Infinitely fast(but of course, it is **unfair** , ZeroFormatter's deserialize is delayed when access target field). Serialize speed is fair-comparison. ZeroFormatter is fastest(compare to protobuf-net, @abstr_number ~ @abstr_number x fast) for sure. ZeroFormatter has many reasons why fast.

  * Serializer uses only `ref byte[]` and `int offset`, don't use MemoryStream(call MemoryStream api is overhead)
  * Don't use variable-length number when encode number so there has encode cost(for example; protobuf uses ZigZag Encoding)
  * Acquire strict length of byte[] when knows final serialized length(for example; int, fixed-length list, string, etc...)
  * Avoid boxing all codes, all platforms(include Unity/IL @abstr_number CPP)
  * Reduce native string encoder methods
  * Don't create intermediate utility instance(XxxWriter/Reader, XxxContext, etc...)
  * Heavyly tuned dynamic il code generation: @abstr_hyperlink 
  * Getting cached generated formatter on static generic field(don't use dictinary-cache because dictionary lookup is overhead): @abstr_hyperlink 
  * Enum is serialized only underlying-value and uses fastest cast technique: @abstr_hyperlink 



The result is achieved from both sides of implementation and binary layout. ZeroFormatter's binary layout is tuned for serialize/deserialize speed(this is advantage than other serializer).

**In Unity**

Result run on iPhone @abstr_number s Plus and IL @abstr_number CPP build.

@abstr_image 

ZeroFormatter is faster than JsonUtility so yes, faster than native serializer! Why MsgPack-Cli is slow? MsgPack-Cli's Unity implemntation has a lot of hack of avoid AOT issues, it causes performance impact(especially struct, all codes pass boxing). ZeroFormatter codes is full tuned for Unity with/without IL @abstr_number CPP.

**Single Integer( @abstr_number ), Large String(represents HTML), Vector @abstr_number Struct(float, float, float), Vector @abstr_number [ @abstr_number ]**

@abstr_image @abstr_image 

ZeroFormatter is optimized for all types(small struct to large object!). I know why protobuf-net is slow on integer test, currently @abstr_hyperlink has only `object value` so it causes boxing and critical for performance. Anyway, ZeroFormatter's simple struct and struct array(struct array is serialized FixedSizeList format internally, it is faster than class array)'s serialization/deserialization speed is very fast that effective storing value to KeyValueStore(like Redis) or network gaming(transport many transform position), etc.

## Compare with MessagePack for C#

Author also created @abstr_hyperlink . It is fast, compact general purpose serializer. MessagePack for C# is a good choice if you are looking for a JSON-like, general purpose fast binary serializer. Built-in LZ @abstr_number support makes it suitable for network communication and storage in Redis. If you need infintely fast deserializer, ZeroFormatter is good choice.

## ZeroFormatterSerializer API

We usually use `Serialize<T>` and `Deserialize<T>`, but there are other APIs as well. `Convert<T>` is converted T to T but the return value is wrapped data. It is fast when reserialization so if you store the immutable data and serialize frequently, very effective. `IsFormattedObject<T>` can check the data is wrapped data or not.

`Serialize<T>` has some overload, the architecture of ZeroFormatter is to write to byte [], read from byte [] so byte[] method is fast, first-class method. Stream method is helper API. ZeroFormatter has non-allocate API, as well. `int Serialize<T>(ref byte[] buffer, int offset, T obj)` expands the buffer but do not shrink. Return value int is size so you can pass the buffer from array pooling, ZeroFormatter does not allocate any extra memory.

If you want to use non-generic API, there are exists under `ZeroFormatterSerializer.NonGeneric`. It can pass Type on first-argument instead of `<T>`.

> NonGeneric API is not supported in Unity. NonGeneric API is a bit slower than the generic API. Because of the lookup of the serializer by type and the cost of boxing if the value is a value type are costly. We recommend using generic API if possible.

`ZeroFormatterSerializer.MaximumLengthOfDeserialize` is max length of array(collection) length when deserializing. The default is @abstr_number , it includes `byte[]`( @abstr_number MB). This limitation is for security issue(block of OutOfMemory). If you want to expand this limitation, set the new size.

## Extensibility

ZeroFormatter can become custom binary layout framework. You can create own typed formatter. For example, add supports `Uri`.

@abstr_code_section 

You need to register formatter on application startup. 

@abstr_code_section 

One more case, how to create generic formatter. For example, If implements `ImmutableList<T>`?

@abstr_code_section 

And register generic resolver on startup.

@abstr_code_section 

## Configuration

If you want to create Formatter based on special rules generated by ResolveFormatter and RegisterDynamicUnion with the same AppDomain, you need to implement ITypeResolver.

@abstr_code_section 

`ZeroFormatterSerializer.CustomSerializer<CustomSerializationContext>.Serialize/Deserialize` methods use those contexts. By default, `DefaultResolver` is used.

## WireFormat Specification

All formats are represented in little endian. There are two lengths of binary, fixed-length and variable-length, which affect the `List Format`.

**Primitive Format**

Primitive format is fixed-length(except string), eager-evaluation. C# `Enum` is serialized there underlying type. TimeSpan, DateTime is serialized UniversalTime and serialized format is same as Protocol Buffers's @abstr_hyperlink .

| Type | Layout | Note | | ---- | ------ | ---- | | Int @abstr_number | [short( @abstr_number )] | | Int @abstr_number | [int( @abstr_number )] | | Int @abstr_number | [long( @abstr_number )] | | UInt @abstr_number | [ushort( @abstr_number )] | | UInt @abstr_number | [uint( @abstr_number )] | | UInt @abstr_number | [ulong( @abstr_number )] | | Single | [float( @abstr_number )] | | Double | [double( @abstr_number )] | | Boolean | [bool( @abstr_number )] | | Byte | [byte( @abstr_number )] | | SByte | [sbyte( @abstr_number )] | | Char | [ushort( @abstr_number )] | UTF @abstr_number -LE | | TimeSpan | [seconds:long( @abstr_number )][nanos:int( @abstr_number )] | seconds represents time from @abstr_number : @abstr_number : @abstr_number | | DateTime | [seconds:long( @abstr_number )][nanos:int( @abstr_number )] | seconds represents UTC time since Unix epoch( @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number Z to @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number Z) | | DateTimeOffset | [seconds:long( @abstr_number )][nanos:int( @abstr_number )][offsetMinutes:short( @abstr_number )] | DateTime with a time difference | | String | [utf @abstr_number Bytes:(length)] | currently no used but reserved for future | | Int @abstr_number ? | [hasValue:bool( @abstr_number )][short( @abstr_number )] | | Int @abstr_number ? | [hasValue:bool( @abstr_number )][int( @abstr_number )] | | Int @abstr_number ? | [hasValue:bool( @abstr_number )][long( @abstr_number )] | | UInt @abstr_number ? | [hasValue:bool( @abstr_number )][ushort( @abstr_number )] | | UInt @abstr_number ? | [hasValue:bool( @abstr_number )][uint( @abstr_number )] | | UInt @abstr_number ? | [hasValue:bool( @abstr_number )][ulong( @abstr_number )] | | Single? | [hasValue:bool( @abstr_number )][float( @abstr_number )] | | Double? | [hasValue:bool( @abstr_number )][double( @abstr_number )] | | Boolean? | [hasValue:bool( @abstr_number )][bool( @abstr_number )] | | Byte? | [hasValue:bool( @abstr_number )][byte( @abstr_number )] | | SByte? | [hasValue:bool( @abstr_number )][sbyte( @abstr_number )] | | Char? | [hasValue:bool( @abstr_number )][ushort( @abstr_number )] | UTF @abstr_number -LE | | TimeSpan? | [hasValue:bool( @abstr_number )][seconds:long( @abstr_number )][nanos:int( @abstr_number )] | seconds represents time from @abstr_number : @abstr_number : @abstr_number | | DateTime? | [hasValue:bool( @abstr_number )][seconds:long( @abstr_number )][nanos:int( @abstr_number )] | seconds represents UTC time since Unix epoch( @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number Z to @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number Z) | | DateTimeOffset? | [hasValue:bool( @abstr_number )][seconds:long( @abstr_number )][nanos:int( @abstr_number )][offsetMinutes:short( @abstr_number )] | DateTime with a time difference | | String? | [length:int( @abstr_number )][utf @abstr_number Bytes:(length)] | representes `String`, if length = - @abstr_number , indicates null. This is only variable-length primitive. |

**Sequence Format**

Sequence is variable-length, eager-evaluation. Sequence represents a multiple object. If field is declared collection type(except `IList<T>, IReadOnlyList<T>`), used this format.

| Type | Layout | Note | | ---- | ------ | ---- | | `Sequence<T>` | [length:int( @abstr_number )][elements:T...] | if length = - @abstr_number , indicates null |

**List Format**

List is variable-length, lazy-evaluation. If field is declared `IList<T>` or `IReadOnlyList<T>`, used this format.

| Type | Layout | Note | | ---- | ------ | ---- | | FixedSizeList | [length:int( @abstr_number )][elements:T...] | T is fixed-length format. if length = - @abstr_number , indicates null | | VariableSizeList | [byteSize:int( @abstr_number )][length:int( @abstr_number )][elementOffset...:int( @abstr_number * length)][elements:T...] | T is variable-length format. if byteSize = - @abstr_number , indicates null. indexOffset is relative position from list start offset |

**Object Format**

Object Format is a user-defined type.

Object is variable-length, lazy-evaluation which has index header.

Struct is eager-evaluation, if all field types are fixed-length which struct is marked fixed-length, else variable-length. This format is included `KeyTuple`, `Tuple`, `KeyValuePair(used by Dictionary)`, `IGrouping(used by ILookup)`.

| Type | Layout | Note | | ---- | ------ | ---- | | Object | [byteSize:int( @abstr_number )][lastIndex:int( @abstr_number )][indexOffset...:int( @abstr_number * lastIndex)][Property @abstr_number :T @abstr_number , Property @abstr_number :T @abstr_number , ...] | used by class in default. if byteSize = - @abstr_number , indicates null, indexOffset = @abstr_number , indicates blank. indexOffset is relative position from object start offset | | Struct | [Index @abstr_number Item:T @abstr_number , Index @abstr_number Item:T @abstr_number ,...] | used by struct in default. This format can be fixed-length. versioning is not supported. | | Struct? | [hasValue:bool( @abstr_number )][Index @abstr_number Item:T @abstr_number , Index @abstr_number Item:T @abstr_number ,...] | used by struct in default. This format can be fixed-length. versioning is not supported. |

**Union Format**

Union is variable-length, eager-evaluation, discriminated by key type to each value type.

| Type | Layout | Note | | ---- | ------ | ---- | | Union | [byteSize:int( @abstr_number )][unionKey:TKey][value:TValue] | if byteSize = - @abstr_number , indicates null |

**Extension Format**

Not a standard format but builtin on C# implementation.

| Type | Layout | Note | | ---- | ------ | ---- | | Decimal | [lo:int( @abstr_number )][mid:int( @abstr_number )][hi:int( @abstr_number )][flags:int( @abstr_number )] | fixed-length, eager-evaluation. If you need to language-wide cross platform, use string instead. | | Decimal? | [hasValue:bool( @abstr_number )][lo:int( @abstr_number )][mid:int( @abstr_number )][hi:int( @abstr_number )][flags:int( @abstr_number )] | fixed-length, eager-evaluation. If you need to language-wide cross platform, use string instead. | | Guid | [bytes:byteArray( @abstr_number )] | fixed-length, eager-evaluation. If you need to language-wide cross platform, use string instead. | | Guid? | [hasValue:bool( @abstr_number )][bytes:byteArray( @abstr_number )] | fixed-length, eager-evaluation. If you need to language-wide cross platform, use string instead. | | LazyDictionary | [byteSize:int( @abstr_number )][length:int( @abstr_number )][buckets:`FixedSizeList<int>`][entries:`VariableSizeList<DictionaryEntry>`] | represents `ILazyDictionary<TKey, TValue>`, if byteSize == - @abstr_number , indicates null, variable-length, lazy-evaluation | | DictionaryEntry | [hashCode:int( @abstr_number )][next:int( @abstr_number )][key:TKey][value:TValue] | substructure of LazyDictionary | | LazyMultiDictionary | [byteSize:int( @abstr_number )][length:int( @abstr_number )][groupings:`VariableSizeList<VariableSizeList<GroupingSemengt>>`] | represents `ILazyLookup<TKey, TElement>`, if byteSize == - @abstr_number , indicates null, variable-length, lazy-evaluation | | GroupingSegment | [key:TKey] [hashCode:int( @abstr_number )][elements:`VariableSizeList<TElement>`] | substructure of LazyMultiDictionary 

**EqualityComparer**

ZeroFormatter's EqualityComparer calculates stable hashCode for serialize LazyDictionary/LazyMultiDictionary. LazyDictionary and LazyMultiDictionary keys following there `GetHashCode` function. 

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## C# Schema

The schema of ZeroFormatter is C# itself. You can define the schema in C# and analyze it with Roslyn to generate in another language or C#(such as zfc.exe).

@abstr_code_section 

## Cross Platform

Currently, No and I have no plans. Welcome to contribute port to other languages, I want to help your work!

ZeroFormatter spec has two stages + ex.

  * Stage @abstr_number : All formats are eager-evaluation, does not support Extension Format.
  * Stage @abstr_number : FixedSizeList, VariableSizeList and Object supports lazy-evaluation, does not support Extension Format.
  * StageEx: Supports C# Extension Format



List of port libraries

  * Go, @abstr_hyperlink 
  * Ruby, @abstr_hyperlink 
  * Swift, @abstr_hyperlink 
  * Scala, @abstr_hyperlink 
  * Rust, @abstr_hyperlink 
  * F#, @abstr_hyperlink 



## Author Info

Yoshifumi Kawai(a.k.a. neuecc) is a software developer in Japan.   
He is the Director/CTO at Grani, Inc.   
Grani is a top social game developer in Japan.   
He is awarding Microsoft MVP for Visual C# since @abstr_number .   
He is known as the creator of @abstr_hyperlink (Reactive Extensions for Unity) 

Blog: https://medium.com/@neuecc (English)   
Blog: http://neue.cc/ (Japanese)   
Twitter: https://twitter.com/neuecc (Japanese) 

## License

This library is under the MIT License.
