# MessagePack for C# (.NET, .NET Core, Unity, Xamarin)

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink 

The extremely fast @abstr_hyperlink serializer for C#. It is @abstr_number x faster than @abstr_hyperlink and outperforms other C# serializers. MessagePack for C# also ships with built-in support for LZ @abstr_number compression - an extremely fast compression algorithm. Performance is important, particularly in applications like game development, distributed computing, microservice architecture, and caching.

@abstr_image 

MessagePack has compact binary size and full set of general purpose expression. Please see the comparison with JSON, protobuf, ZeroFormatter section. Learn why MessagePack C# is fastest.

## Installation

This library is distributed via NuGet package and with special support for Unity.

### NuGet packages

We target .NET Standard @abstr_number . @abstr_number with special optimizations for .NET Core @abstr_number . @abstr_number +.

```ps @abstr_number Install-Package MessagePack @abstr_code_section ps @abstr_number Install-Package MessagePackAnalyzer @abstr_code_section ps @abstr_number Install-Package MessagePack.ImmutableCollection Install-Package MessagePack.ReactiveProperty Install-Package MessagePack.UnityShims Install-Package MessagePack.AspNetCoreMvcFormatter @abstr_code_section csharp [MessagePackObject] public class MyClass { // Key is serialization index, it is important for versioning. [Key( @abstr_number )] public int Age { get; set; }
    
    
    [Key( @abstr_number )]
    public string FirstName { get; set; }
    
    [Key( @abstr_number )]
    public string LastName { get; set; }
    
    // public members and does not serialize target, mark IgnoreMemberttribute
    [IgnoreMember]
    public string FullName { get { return FirstName + LastName; } }
    

} @abstr_code_section csharp class Program { static void Main(string[] args) { var mc = new MyClass { Age = @abstr_number , FirstName = "hoge", LastName = "huga", };
    
    
        // call Serialize/Deserialize, that's all.
        byte[] bytes = MessagePackSerializer.Serialize(mc);
        MyClass mc @abstr_number  = MessagePackSerializer.Deserialize<MyClass>(bytes);
    
        // you can dump msgpack binary to human readable json.
        // In default, MeesagePack for C# reduce property name information.
        // [ @abstr_number ,"hoge","huga"]
        var json = MessagePackSerializer.ConvertToJson(bytes);
        Console.WriteLine(json);
    }
    

} @abstr_code_section json [ "MyNamespace.FooClass", "MyNameSpace.BarStruct" ] @abstr_code_section csharp [MessagePackObject] public class Sample @abstr_number { [Key( @abstr_number )] public int Foo { get; set; } [Key( @abstr_number )] public int Bar { get; set; } }

[MessagePackObject] public class Sample @abstr_number { [Key("foo")] public int Foo { get; set; } [Key("bar")] public int Bar { get; set; } }

[MessagePackObject(keyAsPropertyName: true)] public class Sample @abstr_number { // no needs KeyAttribute public int Foo { get; set; }
    
    
    // If ignore public member, you can use IgnoreMemberAttribute
    [IgnoreMember]
    public int Bar { get; set; }
    

}

// [ @abstr_number , @abstr_number ] Console.WriteLine(MessagePackSerializer.ToJson(new Sample @abstr_number { Foo = @abstr_number , Bar = @abstr_number }));

// {"foo": @abstr_number ,"bar": @abstr_number } Console.WriteLine(MessagePackSerializer.ToJson(new Sample @abstr_number { Foo = @abstr_number , Bar = @abstr_number }));

// {"Foo": @abstr_number } Console.WriteLine(MessagePackSerializer.ToJson(new Sample @abstr_number { Foo = @abstr_number , Bar = @abstr_number })); @abstr_code_section csharp [MessagePackObject] public class IntKeySample { [Key( @abstr_number )] public int A { get; set; } [Key( @abstr_number )] public int B { get; set; } }

// [null,null,null, @abstr_number ,null,null,null,null,null,null, @abstr_number ] Console.WriteLine(MessagePackSerializer.ToJson(new IntKeySample())); @abstr_code_section csharp public class ContractlessSample { public int MyProperty @abstr_number { get; set; } public int MyProperty @abstr_number { get; set; } }

var data = new ContractlessSample { MyProperty @abstr_number = @abstr_number , MyProperty @abstr_number = @abstr_number }; var bin = MessagePackSerializer.Serialize(data, MessagePack.Resolvers.ContractlessStandardResolver.Instance);

// {"MyProperty @abstr_number ": @abstr_number ,"MyProperty @abstr_number ": @abstr_number } Console.WriteLine(MessagePackSerializer.ToJson(bin));

// You can set ContractlessStandardResolver as default. MessagePackSerializer.SetDefaultResolver(MessagePack.Resolvers.ContractlessStandardResolver.Instance);

// serializable. var bin @abstr_number = MessagePackSerializer.Serialize(data); @abstr_code_section csharp [MessagePackObject] public class PrivateSample { [Key( @abstr_number )] int x;
    
    
    public void SetX(int v)
    {
        x = v;
    }
    
    public int GetX()
    {
        return x;
    }
    

}

var data = new PrivateSample(); data.SetX( @abstr_number );

// You can choose StandardResolverAllowPrivate or ContractlessStandardResolverAllowPrivate var bin = MessagePackSerializer.Serialize(data, MessagePack.Resolvers.DynamicObjectResolverAllowPrivate.Instance); @abstr_code_section csharp [MessagePackObject] public struct Point { [Key( @abstr_number )] public readonly int X; [Key( @abstr_number )] public readonly int Y;
    
    
    public Point(int x, int y)
    {
        this.X = x;
        this.Y = y;
    }
    

}

var data = new Point( @abstr_number , @abstr_number ); var bin = MessagePackSerializer.Serialize(data);

// Okay to deserialize immutable obejct var point = MessagePackSerializer.Deserialize(bin); @abstr_code_section csharp [MessagePackObject] public struct Point { [Key( @abstr_number )] public readonly int X; [Key( @abstr_number )] public readonly int Y;
    
    
    // If not marked attribute, used this(least matched argument)
    public Point(int x)
    {
        X = x;
    }
    
    [SerializationConstructor]
    public Point(int x, int y)
    {
        this.X = x;
        this.Y = y;
    }
    

} @abstr_code_section csharp [MessagePackObject] public class SampleCallback : IMessagePackSerializationCallbackReceiver { [Key( @abstr_number )] public int Key { get; set; }
    
    
    public void OnBeforeSerialize()
    {
        Console.WriteLine("OnBefore");
    }
    
    public void OnAfterDeserialize()
    {
        Console.WriteLine("OnAfter");
    }
    

} @abstr_code_section csharp // mark inheritance types [MessagePack.Union( @abstr_number , typeof(FooClass))] [MessagePack.Union( @abstr_number , typeof(BarClass))] public interface IUnionSample { }

[MessagePackObject] public class FooClass : IUnionSample { [Key( @abstr_number )] public int XYZ { get; set; } }

[MessagePackObject] public class BarClass : IUnionSample { [Key( @abstr_number )] public string OPQ { get; set; } }

// ---

IUnionSample data = new FooClass() { XYZ = @abstr_number };

// serialize interface. var bin = MessagePackSerializer.Serialize(data);

// deserialize interface. var reData = MessagePackSerializer.Deserialize(bin);

// use type-switch of C# @abstr_number . @abstr_number switch (reData) { case FooClass x: Console.WriteLine(x.XYZ); break; case BarClass x: Console.WriteLine(x.OPQ); break; default: break; } @abstr_code_section csharp IUnionSample data = new BarClass { OPQ = "FooBar" };

var bin = MessagePackSerializer.Serialize(data);

// Union is serialized to two-length array, [key, object] // [ @abstr_number ,["FooBar"]] Console.WriteLine(MessagePackSerializer.ToJson(bin)); @abstr_code_section csharp [Union( @abstr_number , typeof(SubUnionType @abstr_number ))] [Union( @abstr_number , typeof(SubUnionType @abstr_number ))] [MessagePackObject] public abstract class ParentUnionType { [Key( @abstr_number )] public int MyProperty { get; set; } }

[MessagePackObject] public class SubUnionType @abstr_number : ParentUnionType { [Key( @abstr_number )] public int MyProperty @abstr_number { get; set; } }

[MessagePackObject] public class SubUnionType @abstr_number : ParentUnionType { [Key( @abstr_number )] public int MyProperty @abstr_number { get; set; } } @abstr_code_section csharp // sample binary. var model = new DynamicModel { Name = "foobar", Items = new[] { @abstr_number , @abstr_number , @abstr_number , @abstr_number } }; var bin = MessagePackSerializer.Serialize(model, ContractlessStandardResolver.Instance);

// dynamic, untyped var dynamicModel = MessagePackSerializer.Deserialize(bin, ContractlessStandardResolver.Instance);

Console.WriteLine(dynamicModel["Name"]); // foobar Console.WriteLine(dynamicModel["Items"][ @abstr_number ]); // @abstr_number @abstr_code_section csharp var objects = new object[] { @abstr_number , "aaa", new ObjectFieldType { Anything = @abstr_number } }; var bin = MessagePackSerializer.Serialize(objects);

// [ @abstr_number ,"aaa",[ @abstr_number ]] Console.WriteLine(MessagePackSerializer.ToJson(bin));

// Support Anonymous Type Serialize var anonType = new { Foo = @abstr_number , Bar = "foobar" }; var bin @abstr_number = MessagePackSerializer.Serialize(anonType, MessagePack.Resolvers.ContractlessStandardResolver.Instance);

// {"Foo": @abstr_number ,"Bar":"foobar"} Console.WriteLine(MessagePackSerializer.ToJson(bin @abstr_number )); @abstr_code_section csharp object mc = new Sandbox.MyClass() { Age = @abstr_number , FirstName = "hoge", LastName = "huga" };

// serialize to typeless var bin = MessagePackSerializer.Typeless.Serialize(mc);

// binary data is embeded type-assembly information. // ["Sandbox.MyClass, Sandbox", @abstr_number ,"hoge","huga"] Console.WriteLine(MessagePackSerializer.ToJson(bin));

// can deserialize to MyClass with typeless var objModel = MessagePackSerializer.Typeless.Deserialize(bin) as MyClass; @abstr_code_section csharp // replace `object` uses typeless MessagePack.Resolvers.CompositeResolver.RegisterAndSetAsDefault( new[] { MessagePack.Formatters.TypelessFormatter.Instance }, new[] { MessagePack.Resolvers.StandardResolver.Instance });

public class Foo { // use Typeless(this field only) [MessagePackFormatter(typeof(TypelessFormatter))] public object Bar; } @abstr_code_section csharp MessagePack.Formatters.TypelessFormatter.BindToType = typeName => { if (typeName.StartsWith("SomeNamespace")) { typeName = typeName.Replace("SomeNamespace", "AnotherNamespace"); }
    
    
    return Type.GetType(typeName, false);
    

}; @abstr_code_section csharp var array= Enumerable.Range( @abstr_number , @abstr_number ).Select(x => new MyClass { Age = @abstr_number , FirstName = "foo", LastName = "bar" }).ToArray();

// call LZ @abstr_number MessagePackSerializer instead of MessagePackSerializer, api is completely same var lz @abstr_number Bytes = LZ @abstr_number MessagePackSerializer.Serialize(array); var mc @abstr_number = LZ @abstr_number MessagePackSerializer.Deserialize

// you can dump lz @abstr_number message pack // [[ @abstr_number ,"hoge","huga"],[ @abstr_number ,"hoge","huga"],....] var json = LZ @abstr_number MessagePackSerializer.ToJson(lz @abstr_number Bytes); Console.WriteLine(json);

// lz @abstr_number Bytes is valid MessagePack, it is using ext-format( [TypeCode: @abstr_number , SourceLength|CompressedBinary] ) // [ @abstr_number ," @abstr_number gAAA+vf @abstr_number ABkkwWjZm @abstr_number vo @abstr_number JhcgoA////yVBvo @abstr_number Jhcg=="] var rawJson = MessagePackSerializer.ToJson(lz @abstr_number Bytes); Console.WriteLine(rawJson); @abstr_code_section csharp [ProtoContract] public class Parent { [ProtoMember( @abstr_number )] public int Primitive { get; set; } [ProtoMember( @abstr_number )] public Child Prop { get; set; } [ProtoMember( @abstr_number )] public int[] Array { get; set; } }

[ProtoContract] public class Child { [ProtoMember( @abstr_number )] public int Number { get; set; } }

using (var ms = new MemoryStream()) { // serialize null. ProtoBuf.Serializer.Serialize(ms, null);
    
    
    ms.Position =  @abstr_number ;
    var result = ProtoBuf.Serializer.Deserialize<Parent>(ms);
    
    Console.WriteLine(result != null); // True, not null. but all property are zero formatted.
    Console.WriteLine(result.Primitive); //  @abstr_number 
    Console.WriteLine(result.Prop); // null
    Console.WriteLine(result.Array); // null
    

}

using (var ms = new MemoryStream()) { // serialize empty array. ProtoBuf.Serializer.Serialize(ms, new Parent { Array = new int[ @abstr_number ] });
    
    
    ms.Position =  @abstr_number ;
    var result = ProtoBuf.Serializer.Deserialize<Parent>(ms);
    
    Console.WriteLine(result.Array == null); // True, null!
    

} @abstr_code_section ps @abstr_number Install-Package MessagePack.ImmutableCollection Install-Package MessagePack.ReactiveProperty Install-Package MessagePack.UnityShims Install-Package MessagePack.AspNetCoreMvcFormatter @abstr_code_section csharp // set extensions to default resolver. MessagePack.Resolvers.CompositeResolver.RegisterAndSetAsDefault( // enable extension packages first ImmutableCollectionResolver.Instance, ReactivePropertyResolver.Instance, MessagePack.Unity.Extension.UnityBlitResolver.Instance, MessagePack.Unity.UnityResolver.Instance,
    
    
    // finaly use standard(default) resolver
    StandardResolver.Instance);
    

); @abstr_code_section csharp public void ConfigureServices(IServiceCollection services) { services.AddMvc().AddMvcOptions(option => { option.OutputFormatters.Clear(); option.OutputFormatters.Add(new MessagePackOutputFormatter(ContractlessStandardResolver.Instance)); option.InputFormatters.Clear(); option.InputFormatters.Add(new MessagePackInputFormatter(ContractlessStandardResolver.Instance)); }); } @abstr_code_section csharp public interface IMessagePackFormatter { void Serialize(ref MessagePackWriter writer, T value, MessagePackSerializerOptions options); T Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options); } @abstr_code_section csharp /// Serializes a  by its full path as a string. public class FileInfoFormatter : IMessagePackFormatter { public void Serialize(ref MessagePackWriter writer, FileInfo value, MessagePackSerializerOptions optionsr) { if (value == null) { writer.WriteNil(); return; }
    
    
        writer.WriteString(value.FullName);
    }
    
    public FileInfo Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options)
    {
        if (reader.TryReadNil())
        {
            return null;
        }
    
        var path = reader.ReadString();
        return new FileInfo(path);
    }
    

} @abstr_code_section csharp // Do this once and store it for reuse. var resolver = new MessagePack.Resolvers.CompositeResolver(); resolver.RegisterResolver( // resolver custom types first ImmutableCollectionResolver.Instance, ReactivePropertyResolver.Instance, MessagePack.Unity.Extension.UnityBlitResolver.Instance, MessagePack.Unity.UnityResolver.Instance,
    
    
    // finaly use standard resolver
    StandardResolver.Instance);
    

var options = MessagePackSerializerOptions.Default.WithResolver(resolver);

// Each time you serialize/deserialize, specify the options: byte[] msgpackBytes = MessagePackSerializer.Serialize(myObject, options); T myObject @abstr_number = MessagePackSerializer.Deserialize(msgpackBytes, options); @abstr_code_section csharp // composite same as StandardResolver var resolver = new MessagePack.Resolvers.CompositeResolver(); resolver.RegisterResolver( MessagePack.Resolvers.BuiltinResolver.Instance, MessagePack.Resolvers.AttributeFormatterResolver.Instance,
    
    
    // replace enum resolver
    MessagePack.Resolvers.DynamicEnumAsStringResolver.Instance,
    
    MessagePack.Resolvers.DynamicGenericResolver.Instance,
    MessagePack.Resolvers.DynamicUnionResolver.Instance,
    MessagePack.Resolvers.DynamicObjectResolver.Instance,
    
    MessagePack.Resolvers.PrimitiveObjectResolver.Instance,
    
    // final fallback(last priority)
    MessagePack.Resolvers.DynamicContractlessObjectResolver.Instance);
    

@abstr_code_section csharp public class SampleCustomResolver : IFormatterResolver { // Resolver should be singleton. public static readonly IFormatterResolver Instance = new SampleCustomResolver();
    
    
    private SampleCustomResolver()
    {
    }
    
    // GetFormatter<T>'s get cost should be minimized so use type cache.
    public IMessagePackFormatter<T> GetFormatter<T>()
    {
        return FormatterCache<T>.Formatter;
    }
    
    private static class FormatterCache<T>
    {
        public static readonly IMessagePackFormatter<T> Formatter;
    
        // generic's static constructor should be minimized for reduce type generation size!
        // use outer helper method.
        static FormatterCache()
        {
            Formatter = (IMessagePackFormatter<T>)SampleCustomResolverGetFormatterHelper.GetFormatter(typeof(T));
        }
    }
    

}

internal static class SampleCustomResolverGetFormatterHelper { // If type is concrete type, use type-formatter map static readonly Dictionary formatterMap = new Dictionary() { {typeof(FileInfo), new FileInfoFormatter()} // add more your own custom serializers. };
    
    
    internal static object GetFormatter(Type t)
    {
        object formatter;
        if (formatterMap.TryGetValue(t, out formatter))
        {
            return formatter;
        }
    
        // If target type is generics, use MakeGenericType.
        if (t.IsGenericParameter && t.GetGenericTypeDefinition() == typeof(ValueTuple<,>))
        {
            return Activator.CreateInstance(typeof(ValueTupleFormatter<,>).MakeGenericType(t.GenericTypeArguments));
        }
    
        // If type can not get, must return null for fallback mecanism.
        return null;
    }
    

} @abstr_code_section csharp [MessagePackFormatter(typeof(CustomObjectFormatter))] public class CustomObject { string internalId;
    
    
    public CustomObject()
    {
        this.internalId = Guid.NewGuid().ToString();
    }
    
    // serialize/deserialize internal field.
    class CustomObjectFormatter : IMessagePackFormatter<CustomObject>
    {
        public void Serialize(ref MessagePackWriter writer, CustomObject value, MessagePackSerializerOptions options)
        {
            options.Resolver.GetFormatterWithVerify<string>().Serialize(ref writer, value.internalId, options);
        }
    
        public CustomObject Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options)
        {
            var id = options.Resolver.GetFormatterWithVerify<string>().Deserialize(ref reader, options);
            return new CustomObject { internalId = id };
        }
    }
    

}

// per field, member

public class Int_x @abstr_number Formatter : IMessagePackFormatter { public int Deserialize(ref MessagePackReader reader, MessagePackSerializerOptions options) { return reader.ReadInt @abstr_number () * @abstr_number ; }
    
    
    public void Serialize(ref MessagePackWriter writer, int value, MessagePackSerializerOptions options)
    {
        writer.WriteInt @abstr_number (value *  @abstr_number );
    }
    

}

[MessagePackObject] public class MyClass { // You can attach custom formatter per member. [Key( @abstr_number )] [MessagePackFormatter(typeof(Int_x @abstr_number Formatter))] public int MyProperty @abstr_number { get; set; } } @abstr_code_section csharp // CompositeResolver can set custom formatter. MessagePack.Resolvers.CompositeResolver.RegisterAndSetAsDefault( new IMessagePackFormatter[] { // for example, register reflection infos(can not serialize in default) new IgnoreFormatter(), new IgnoreFormatter(), new IgnoreFormatter(), new IgnoreFormatter() }, new IFormatterResolver[] { ContractlessStandardResolver.Instance }); @abstr_code_section csharp Resolvers.CompositeResolver.RegisterAndSetAsDefault( MessagePack.Unity.UnityResolver.Instance, MessagePack.Unity.Extension.UnityBlitWithPrimitiveArrayResolver.Instance,
    
    
    // If PC, use StandardResolver
    // MessagePack.Resolvers.StandardResolver.Instance,
    
    // If IL @abstr_number CPP, Builtin + GeneratedResolver.
    // MessagePack.Resolvers.BuiltinResolver.Instance,
    

); @abstr_code_section mpc arguments help: -i, --input [required]Input path of analyze csproj -o, --output [required]Output file path -c, --conditionalsymbol [optional, default=empty]conditional compiler symbol -r, --resolvername [optional, default=GeneratedResolver]Set resolver name -n, --namespace [optional, default=MessagePack]Set namespace root name -m, --usemapmode [optional, default=false]Force use map mode serialization @abstr_code_section 

If you create DLL by msbuild project, you can use Pre/Post build event.

@abstr_code_section 

By default, `mpc.exe` generates resolver to `MessagePack.Resolvers.GeneratedResolver` and formatters generates to `MessagePack.Formatters.***`. You must specify this resolver each time you invoke the `MessagePackSerializer`.

@abstr_code_section 

> Note: mpc.exe currently only supports running on Windows. You can run on @abstr_hyperlink , that supports Mac and Linux.

## RPC

MessagePack advocated @abstr_hyperlink , but formulation is stopped and it is not widely used.

### MagicOnion

I've created gRPC based MessagePack HTTP/ @abstr_number RPC streaming framework called @abstr_hyperlink . gRPC usually communicates with Protocol Buffers using IDL. But MagicOnion uses MessagePack for C# and does not needs IDL. If communicates C# to C#, schemaless(C# classes as schema) is better than IDL.

### StreamJsonRpc

The StreamJsonRpc library is based on @abstr_hyperlink and includes @abstr_hyperlink and includes @abstr_hyperlink .

## How to build

See our contributor's guide.

## Author Info

Yoshifumi Kawai(a.k.a. neuecc) is a software developer in Japan. He is the Director/CTO at Grani, Inc. Grani is a mobile game developer company in Japan and well known for using C#. He is awarding Microsoft MVP for Visual C# since @abstr_number . He is known as the creator of @abstr_hyperlink (Reactive Extensions for Unity)

  * Blog: @abstr_hyperlink (English)
  * Blog: @abstr_hyperlink (Japanese)
  * Twitter: @abstr_hyperlink (Japanese)


