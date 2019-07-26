@abstr_image 

# C# Functional Programming Language Extensions

@abstr_hyperlink 

This library uses and abuses the features of C# to provide a functional-programming 'Base class library', that, if you squint, can look like extensions to the language itself. The desire here is to make programming in C# much more reliable and to make the engineer's inertia flow in the direction of declarative and functional code rather than imperative.

__Author on twitter:__ https://twitter.com/paullouth

## Reference

####  @abstr_hyperlink 

####  @abstr_hyperlink 

## Contributing & Code of Conduct

If you would like to get involved with this project, please first read the @abstr_hyperlink and the @abstr_hyperlink 

## Nu-get

Nu-get package | Description \---------------|------------- @abstr_hyperlink | All of the core types and functional 'prelude'. __This is all that's needed to get started__. @abstr_hyperlink | F# to C# interop library. Provides interop between the LanguageExt.Core types (like `Option`, `List` and `Map`) to the F# equivalents, as well as interop between core BCL types and F# @abstr_hyperlink | Port of the @abstr_hyperlink @abstr_hyperlink | Reactive Extensions support for various types within the Core @abstr_hyperlink | Used to generate lenses and `With` functions automagically for record types. 

## Code-gen setup

To use the code-generation features of language-ext (which are totally optional by the way), then you must include the @abstr_hyperlink package into your project. 

To make the reference **build and design time only** (i.e. your project doesn't gain an additional dependencies because of the code-generator), open up your `csproj` and set the `PrivateAssets` attribute to `all`: ```c#  @abstr_code_section C# using static System.Console;
    
    
    WriteLine("Hello, World");
    

@abstr_code_section C# Option x = Some( @abstr_number ); Option y = None; List items = List( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ); Map dict = Map(( @abstr_number , "Hello"), ( @abstr_number , "World")); @abstr_code_section C# var x = map(opt, v => v * @abstr_number ); @abstr_code_section C# var x = opt.Map(v => v * @abstr_number ); @abstr_code_section C# using LanguageExt; using static LanguageExt.Prelude; @abstr_code_section C# var ab = Tuple("a","b"); @abstr_code_section C# var name = Tuple("Paul","Louth"); var res = name.Map( (first, last) => $"{first} {last}"); @abstr_code_section C# var name = Tuple("Paul","Louth"); var res = map( name, (first, last) => $"{first} {last}"); @abstr_code_section C# var abc = ('a', 'b').Add('c'); // ('a', 'b', 'c') var abcd = ('a', 'b').Add('c').Add('d'); // ('a', 'b', 'c', 'd') var abcd @abstr_number = ('a', 'b').Add('c').Add('d').Add( @abstr_number ); // ('a', 'b', 'c', 'd', @abstr_number )
    
    
    var sum = ( @abstr_number ,  @abstr_number ,  @abstr_number ).Sum<TInt, int>();                                    //  @abstr_number 
    var product = ( @abstr_number ,  @abstr_number ,  @abstr_number ).Product<TInt, int>();                            //  @abstr_number 
    var flag = ("one", "two", "three").Contains<TString, string>("one");     // true
    var str = ("Hello", " ", "World").Concat<TString, string>();             // "Hello World"
    var list = (List( @abstr_number ,  @abstr_number ,  @abstr_number ), List( @abstr_number ,  @abstr_number ,  @abstr_number )).Concat<TLst<int>, Lst<int>>(); // [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ]
    

@abstr_code_section C# var optional = Some( @abstr_number ); @abstr_code_section C# int x = optional.Match( Some: v => v * @abstr_number , None: () => @abstr_number   
); @abstr_code_section C# int x = match( optional, Some: v => v * @abstr_number , None: () => @abstr_number ); @abstr_code_section C# int x = optional .Some( v => v * @abstr_number ) .None( () => @abstr_number ); @abstr_code_section C# // Returns the Some case 'as is' and @abstr_number in the None case int x = optional.IfNone( @abstr_number ); 
    
    
    // As above, but invokes a Func<T> to return a valid value for x
    int x = optional.IfNone(() => GetAlternative());        
    
    // Invokes an Action<T> if in the Some state.
    optional.IfSome(x => Console.WriteLine(x));
    

@abstr_code_section C# int x = ifNone(optional, @abstr_number ); int x = ifNone(optional, () => GetAlternative()); ifSome(optional, x => Console.WriteLine(x)); @abstr_code_section C# // Implicitly converts the integer to a Some of int Option GetValue() { return @abstr_number ; }
    
    
    // Implicitly converts to a None of int
    Option<int> GetValue()
    {
        return None;
    }
    
    // Will handle either a None or a Some returned
    Option<int> GetValue(bool select) =>
        select
            ? Some( @abstr_number )
            : None;
    
    // Explicitly converts a null value to None and a non-null value to Some(value)
    Option<string> GetValue()
    {
        string value = GetValueFromNonTrustedApi();
        return Optional(value);
    }
    
    // Implicitly converts a null value to None and a non-null value to Some(value)
    Option<string> GetValue()
    {
        string value = GetValueFromNonTrustedApi();
        return value;
    }
    

@abstr_code_section C# private Option GetStringNone() { string nullStr = null; return Some(nullStr); } @abstr_code_section C# private Option GetStringNone() { string nullStr = null; return nullStr; }
    
    
    private Option<string> GetStringNone()
    {
        string nullStr = null;
        return Optional(nullStr);
    }
    

@abstr_code_section C# // This will throw a ResultIsNullException exception string res = GetValue(true) .Some(x => (string)null) .None((string)null); @abstr_code_section C# string x = matchUnsafe( optional, Some: v => v, None: () => null );
    
    
    string x = ifNoneUnsafe( optional, (string)null );
    string x = ifNoneUnsafe( optional, () => GetNull() );
    

@abstr_code_section C# string x = optional.MatchUnsafe( Some: v => v, None: () => null ); string x = optional.IfNoneUnsafe((string)null); string x = optional.IfNoneUnsafe(() => GetNull()); @abstr_code_section C# Option two = Some( @abstr_number ); Option four = Some( @abstr_number ); Option six = Some( @abstr_number ); Option none = None;
    
    
    // This expression succeeds because all items to the right of 'in' are Some of int
    // and therefore it lands in the Some lambda.
    int r = match( from x in two
                   from y in four
                   from z in six
                   select x + y + z,
                   Some: v => v *  @abstr_number ,
                   None: () =>  @abstr_number  );     // r ==  @abstr_number 
    
    // This expression bails out once it gets to the None, and therefore doesn't calculate x+y+z
    // and lands in the None lambda
    int r = match( from x in two
                   from y in four
                   from _ in none
                   from z in six
                   select x + y + z,
                   Some: v => v *  @abstr_number ,
                   None: () =>  @abstr_number  );     // r ==  @abstr_number
    

@abstr_code_section C# Sum // For Option it's the wrapped value. Count // For Option is always @abstr_number for Some and @abstr_number for None.   
Bind // Part of the definition of anything monadic - SelectMany in LINQ Exists // Any in LINQ - true if any element fits a predicate Filter // Where in LINQ Fold // Aggregate in LINQ ForAll // All in LINQ - true if all element(s) fits a predicate Iter // Passes the wrapped value(s) to an Action delegate Map // Part of the definition of any 'functor'. Select in LINQ Lift / LiftUnsafe // Different meaning to Haskell, this returns the wrapped value. Dangerous, should be used sparingly. Select SeletMany Where @abstr_code_section C# using LanguageExt; using static LanguageExt.Prelude; using LanguageExt.ClassInstances; // Required for TInt on Sum (see ad-hoc polymorphism later)
    
    
    var list = List(Some( @abstr_number ), None, Some( @abstr_number ), None, Some( @abstr_number ));
    
    var presum = list.SumT<TInt, int>();                                //  @abstr_number 
    
    list = list.MapT(x => x *  @abstr_number );
    
    var postsum = list.SumT<TInt, int>();
    

@abstr_code_section C# var list = List(Some( @abstr_number ), None, Some( @abstr_number ), None, Some( @abstr_number ));
    
    
    var presum = list.Map(x => x.Sum()).Sum();
    
    list = list.Map( x => x.Map( v => v *  @abstr_number  ) );
    
    var postsum = list.Map(x => x.Sum()).Sum();
    

@abstr_code_section C# public void Foo( Some arg ) { string value = arg; ... } @abstr_code_section C# public void Foo( Some arg ) { string value = arg.Value; ... } @abstr_code_section C# class SomeClass { public Some SomeValue = "Hello"; public Some SomeOtherValue; }
    
    
    ...
    
    public void Greet(Some<string> arg)
    {
        Console.WriteLine(arg);
    }
    
    ...
    
    public void App()
    {
        var obj = new SomeClass();
        Greet(obj.SomeValue);
        Greet(obj.SomeOtherValue);
    }
    

@abstr_code_section "Unitialised Some<...>" @abstr_code_section C# var add = (int x, int y) => x + y; @abstr_code_section C# var add = fun( (int x, int y) => x + y ); @abstr_code_section C# var log = act( (int x) => Console.WriteLine(x) ); @abstr_code_section C# var add = expr( (int x, int y) => x + y ); @abstr_code_section C# // Won't compile var add = fun( (x, y) => x + y );
    
    
    // Will compile
    var add = fun( (int x, int y) => x + y );
    

@abstr_code_section C# public Unit Empty() { return unit; } @abstr_code_section C# var list = ImmutableList.Create(); @abstr_code_section C# var list = new List(); @abstr_code_section C# var test = Cons( @abstr_number , Cons( @abstr_number , Cons( @abstr_number , Cons( @abstr_number , Cons( @abstr_number , empty())))));
    
    
    var array = test.ToArray();
    
    Assert.IsTrue(array[ @abstr_number ] ==  @abstr_number );
    Assert.IsTrue(array[ @abstr_number ] ==  @abstr_number );
    Assert.IsTrue(array[ @abstr_number ] ==  @abstr_number );
    Assert.IsTrue(array[ @abstr_number ] ==  @abstr_number );
    Assert.IsTrue(array[ @abstr_number ] ==  @abstr_number );
    

@abstr_code_section F# let list = [ @abstr_number ; @abstr_number ; @abstr_number ; @abstr_number ; @abstr_number ] @abstr_code_section C# var array = new int[] { @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number }; var list = new List { @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number }; @abstr_code_section C# var list = new List(); list.Add( @abstr_number ); list.Add( @abstr_number ); list.Add( @abstr_number ); list.Add( @abstr_number ); list.Add( @abstr_number ); @abstr_code_section C# // Creates a list of five items var test = List( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ); @abstr_code_section C# // Creates a sequence of @abstr_number integers lazily (starting at @abstr_number ). var list = Range( @abstr_number , @abstr_number );
    
    
    // Produces: [ @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ]
    var list = Range( @abstr_number , @abstr_number , @abstr_number );
    
    // Produces: ['a,'b','c','d','e']
    var chars = Range('a','e');
    

@abstr_code_section C# using static LanguageExt.List; ...
    
    
    // Generates  @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number 
    var input = List( @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number );
    var output @abstr_number  = map(input, x => x *  @abstr_number );
    
    // Generates  @abstr_number , @abstr_number , @abstr_number 
    var output @abstr_number  = filter(output @abstr_number , x => x >  @abstr_number );
    
    // Generates  @abstr_number 
    var output @abstr_number  = fold(output @abstr_number ,  @abstr_number , (x, s) => s + x);
    
    Assert.IsTrue(output @abstr_number  ==  @abstr_number );
    

@abstr_code_section C# var res = List( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ) .Map(x => x * @abstr_number ) .Filter(x => x > @abstr_number ) .Fold( @abstr_number , (x, s) => s + x);
    
    
    Assert.IsTrue(res ==  @abstr_number );
    

@abstr_code_section C# public int Sum(IEnumerable list) => match( list, () => @abstr_number , (x, xs) => x + Sum(xs) );
    
    
    public int Product(IEnumerable<int> list) =>
        match( list,
               ()      =>  @abstr_number ,
               x       => x,
               (x, xs) => x * Product(xs) );
    
    public void RecursiveMatchSumTest()
    {
        var list @abstr_number  = List<int>();
        var list @abstr_number  = List( @abstr_number );
        var list @abstr_number  = List( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number );
    
        Assert.IsTrue(Sum(list @abstr_number ) ==  @abstr_number );
        Assert.IsTrue(Sum(list @abstr_number ) ==  @abstr_number );
        Assert.IsTrue(Sum(list @abstr_number ) ==  @abstr_number );
    }
    
    public void RecursiveMatchProductTest()
    {
        var list @abstr_number  = List<int>();
        var list @abstr_number  = List( @abstr_number );
        var list @abstr_number  = List( @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number );
    
        Assert.IsTrue(Product(list @abstr_number ) ==  @abstr_number );
        Assert.IsTrue(Product(list @abstr_number ) ==  @abstr_number );
        Assert.IsTrue(Product(list @abstr_number ) ==  @abstr_number );
    }
    

@abstr_code_section C# // Sum var total = fold(list, @abstr_number , (s,x) => s + x);
    
    
    // Product
    var total = reduce(list, (s,x) => s * x);
    

@abstr_code_section C# var dict = ImmutableDictionary.Create(); @abstr_code_section C# var dict = Map(); @abstr_code_section C# var people = Map(( @abstr_number , "Rod"), ( @abstr_number , "Jane"), ( @abstr_number , "Freddy")); @abstr_code_section C# Option result = find(people, @abstr_number ); @abstr_code_section C# // Find the item, do some processing on it and return. var res = match( find(people, @abstr_number ), Some: v => "Hello " + v, None: () => "failed" );
    
    
    // Find the item and return it.  If it's not there, return "failed"
    var res = find(people,  @abstr_number ).IfNone("failed");                   
    
    // Find the item and return it.  If it's not there, return "failed"
    var res = ifNone( find(people,  @abstr_number ), "failed" );
    

@abstr_code_section C# // Find the item, do some processing on it and return. var res = match( people, @abstr_number , Some: v => "Hello " + v, None: () => "failed" ); @abstr_code_section C# var newThings = setItem(people, @abstr_number , "Zippy"); @abstr_code_section C# Map>>> wrapped = Map.create>();
    
    
    wrapped = wrapped.AddOrUpdate( @abstr_number , @abstr_number , @abstr_number , @abstr_number ,"Paul");
    wrapped = wrapped.SetItemT( @abstr_number , @abstr_number , @abstr_number , @abstr_number ,"Louth");
    var name = wrapped.Find( @abstr_number , @abstr_number , @abstr_number , @abstr_number );               // "Louth"
    

@abstr_code_section c# public class TestClass : Record { public readonly int X; public readonly string Y; public readonly Guid Z;
    
    
        public TestClass(int x, string y, Guid z)
        {
            X = x;
            Y = y;
            Z = z;
        }
    }
    

@abstr_code_section c# public class TestClass @abstr_number : Record
    
    
        [NonHash]
        public readonly string Y;
    
        [NonShow]
        public readonly Guid Z;
    
        public TestClass @abstr_number (int x, string y, Guid z)
        {
            X = x;
            Y = y;
            Z = z;
        }
    }
    

@abstr_code_section c# public class TestClass : Record { public readonly int X; public readonly string Y; public readonly Guid Z;
    
    
        public TestClass(int x, string y, Guid z)
        {
            X = x;
            Y = y;
            Z = z;
        }
    
        TestClass(SerializationInfo info, StreamingContext context) 
            : base(info, context) { }
    }
    

@abstr_code_section c# public class Cons : Record> { public readonly A Head; public readonly Cons Tail;
    
    
    public Cons(A head, Cons<A> tail)
    {
        Head = head;
        Tail = tail;
    }
    

}

public void ConsTests() { var listA = new Cons( @abstr_number , new Cons( @abstr_number , new Cons( @abstr_number , new Cons( @abstr_number , null)))); var listB = new Cons( @abstr_number , new Cons( @abstr_number , new Cons( @abstr_number , new Cons( @abstr_number , null)))); var listC = new Cons( @abstr_number , new Cons( @abstr_number , new Cons( @abstr_number , null)));
    
    
    Assert.True(listA == listB);
    Assert.True(listB != listC);
    Assert.True(listA != listC);
    

}

public class Tree : Record> { public readonly A Value; public readonly Tree Left; public readonly Tree Right;
    
    
    public Tree(A value, Tree<A> left, Tree<A> right)
    {
        Value = value;
        Left = left;
        Right = right;
    }
    

}

public void TreeTests() { var treeA = new Tree( @abstr_number , new Tree( @abstr_number , null, null), new Tree( @abstr_number , null, new Tree( @abstr_number , null, null))); var treeB = new Tree( @abstr_number , new Tree( @abstr_number , null, null), new Tree( @abstr_number , null, new Tree( @abstr_number , null, null))); var treeC = new Tree( @abstr_number , new Tree( @abstr_number , null, null), new Tree( @abstr_number , null, null));
    
    
    Assert.True(treeA == treeB);
    Assert.True(treeB != treeC);
    Assert.True(treeA != treeC);
    

} @abstr_code_section c# RecordType.Hash(record); @abstr_code_section c# RecordType.Equality(record, obj); @abstr_code_section c# RecordType.EqualityTyped(record @abstr_number , record @abstr_number ); @abstr_code_section c# RecordType.Compare(this, other); @abstr_code_section c# public class TestStruct : IEquatable, IComparable { public readonly int X; public readonly string Y; public readonly Guid Z;
    
    
        public TestStruct(int x, string y, Guid z)
        {
            X = x;
            Y = y;
            Z = z;
        }
    
        public override int GetHashCode() =>
            RecordType<TestStruct>.Hash(this);
    
        public override bool Equals(object obj) =>
            RecordType<TestStruct>.Equality(this, obj);
    
        public int CompareTo(TestStruct other) =>
            RecordType<TestStruct>.Compare(this, other);
    
        public bool Equals(TestStruct other) =>
            RecordType<TestStruct>.EqualityTyped(this, other);
    }
    

@abstr_code_section c# public class A { public readonly X X; public readonly Y Y;
    
    
    public A(X x, Y y)
    {
        X = x;
        Y = y;
    }
    
    public A With(X X = null, Y Y = null) =>
        new A(
            X ?? this.X,
            Y ?? this.Y
        );
    

} @abstr_code_section c# val = val.With(X: x);

val = val.With(Y: y);

val = val.With(X: x, Y: y); @abstr_code_section c# [With] public partial class A { public readonly X X; public readonly Y Y;
    
    
    public A(X x, Y y)
    {
        X = x;
        Y = y;
    }
    

} @abstr_code_section c# [With] public partial class Person { public readonly string Name; public readonly string Surname;
    
    
    public Person(string name, string surname)
    {
        Name = name;
        Surname = surname;
    }
    
    public static Lens<Person, string> name =>
        Lens<Person, string>.New(
            Get: p => p.Name,
            Set: x => p => p.With(Name: x));
    
    public static Lens<Person, string> surname =>
        Lens<Person, string>.New(
            Get: p => p.Surname,
            Set: x => p => p.With(Surname: x));
    

} @abstr_code_section c# var person = new Person("Joe", "Bloggs");

var name = Person.name.Get(person); var person @abstr_number = Person.name.Set(name + "l", person); // Joel Bloggs @abstr_code_section c# var person = new Person("Joe", "Bloggs");

var person @abstr_number = Person.name.Update(name => name + "l", person); // Joel Bloggs @abstr_code_section c# [With] public partial class Role { public readonly string Title; public readonly int Salary;
    
    
    public Role(string title, int salary)
    {
        Title = title;
        Salary = salary;
    }
    
    public static Lens<Role, string> title =>
        Lens<Role, string>.New(
            Get: p => p.Title,
            Set: x => p => p.With(Title: x));
    
    public static Lens<Role, int> salary =>
        Lens<Role, int>.New(
            Get: p => p.Salary,
            Set: x => p => p.With(Salary: x));
    

}

[With] public partial class Person { public readonly string Name; public readonly string Surname; public readonly Role Role;
    
    
    public Person(string name, string surname, Role role)
    {
        Name = name;
        Surname = surname;
        Role = role;
    }
    
    public static Lens<Person, string> name =>
        Lens<Person, string>.New(
            Get: p => p.Name,
            Set: x => p => p.With(Name: x));
    
    public static Lens<Person, string> surname =>
        Lens<Person, string>.New(
            Get: p => p.Surname,
            Set: x => p => p.With(Surname: x));
    
    public static Lens<Person, Role> role =>
        Lens<Person, Role>.New(
            Get: p => p.Role,
            Set: x => p => p.With(Role: x));
    

}

@abstr_code_section c# var cto = new Person("Joe", "Bloggs", new Role("CTO", @abstr_number ));

var personSalary = lens(Person.role, Role.salary);

var cto @abstr_number = personSalary.Set( @abstr_number , cto); @abstr_code_section c# [WithLens] public partial class Person : Record { public readonly string Name; public readonly string Surname; public readonly Map Appts;
    
    
    public Person(string name, string surname, Map<int, Appt> appts)
    {
        Name = name;
        Surname = surname;
        Appts = appts;
    }
    

}

[WithLens] public partial class Appt : Record { public readonly int Id; public readonly DateTime StartDate; public readonly ApptState State;
    
    
    public Appt(int id, DateTime startDate, ApptState state)
    {
        Id = id;
        StartDate = startDate;
        State = state;
    }
    

}

public enum ApptState { NotArrived, Arrived, DNA, Cancelled } @abstr_code_section c# // Generate a Person with three Appts in a Map var person = new Person("Paul", "Louth", Map( ( @abstr_number , new Appt( @abstr_number , DateTime.Parse(" @abstr_number / @abstr_number / @abstr_number "), ApptState.NotArrived)), ( @abstr_number , new Appt( @abstr_number , DateTime.Parse(" @abstr_number / @abstr_number / @abstr_number "), ApptState.NotArrived)), ( @abstr_number , new Appt( @abstr_number , DateTime.Parse(" @abstr_number / @abstr_number / @abstr_number "), ApptState.NotArrived))));

// Local function for composing a new lens from @abstr_number other lenses Lens setState(int id) => lens(Person.appts, Map.item(id), Appt.state);

// Transform var person @abstr_number = setState( @abstr_number ).Set(ApptState.Arrived, person); @abstr_code_section C# int result; if( Int @abstr_number .TryParse(value, out result) ) { ... } else { ... } @abstr_code_section C# int value; if( dict.TryGetValue("thing", out value) ) { ... } else { ... } @abstr_code_section C#
    
    
    // Attempts to parse the value, uses  @abstr_number  if it can't
    int res = parseInt(" @abstr_number ").IfNone( @abstr_number );
    
    // Attempts to parse the value, uses  @abstr_number  if it can't
    int res = ifNone(parseInt(" @abstr_number "),  @abstr_number );
    
    // Attempts to parse the value, doubles it if can, returns  @abstr_number  otherwise
    int res = parseInt(" @abstr_number ").Match(
                  Some: x => x *  @abstr_number ,
                 None: () =>  @abstr_number 
              );
    
    // Attempts to parse the value, doubles it if can, returns  @abstr_number  otherwise
    int res = match( parseInt(" @abstr_number "),
                     Some: x => x *  @abstr_number ,
                     None: () =>  @abstr_number  );
    

@abstr_code_section c# INumeric Add(INumeric x, INumeric y) => x + y; @abstr_code_section c# public interface Num { A Add(A x, A y); A Subtract(A x, A y); ... } @abstr_code_section c# public struct TInt : Num { public int Add(int x, int y) => x + y; public int Subtract(int x, int y) => x - y; ... } @abstr_code_section c# int r = default(TInt).Add( @abstr_number , @abstr_number ); @abstr_code_section c# public struct TFloat : Num { public float Add(float x, float y) => x + y; public float Subtract(float x, float y) => x - y; ... } @abstr_code_section c# public A DoubleIt(A x) where NumA : struct, Num => default(NumA).Add(x, x); @abstr_code_section c# int a = DoubleIt( @abstr_number ); // @abstr_number float b = DoubleIt( @abstr_number . @abstr_number ); // @abstr_number . @abstr_number @abstr_code_section c# public interface Eq { bool Equals(A x, A y); int GetHashCode(A x); } @abstr_code_section c# bool x = equals( @abstr_number , @abstr_number ); // True @abstr_code_section c# bool x = default(EqInt).Equals( @abstr_number , @abstr_number ); // True @abstr_code_section c# bool x = EqInt.Inst.Equals( @abstr_number , @abstr_number ); @abstr_code_section c# bool x = EqLst.Inst.Equals(List( @abstr_number , @abstr_number , @abstr_number ), List( @abstr_number , @abstr_number , @abstr_number )); // true @abstr_code_section c# bool x = List( @abstr_number , @abstr_number , @abstr_number ) == List( @abstr_number , @abstr_number , @abstr_number ); // ? @abstr_code_section c# HashSet HashSet where EqA : struct, Eq @abstr_code_section c# HashSet @abstr_code_section c# HashSet @abstr_code_section c# public interface Ord : Eq { int Compare(A x, A y); } @abstr_code_section c# public struct OrdArray : Ord { public int Compare(A[] mx, A[] my) { if (ReferenceEquals(mx, my)) return @abstr_number ; if (ReferenceEquals(mx, null)) return - @abstr_number ; if (ReferenceEquals(my, null)) return @abstr_number ;
    
    
            var cmp = mx.Length.CompareTo(my.Length);
            if (cmp ==  @abstr_number )
            {
                for(var i =  @abstr_number ; i < mx.Length; i++)
                {
                    cmp = default(ORD).Compare(mx[i], my[i]);
                    if (cmp !=  @abstr_number ) return cmp;
                }
                return  @abstr_number ;
            }
            else
            {
                return cmp;
            }
        }
    
        public bool Equals(A[] x, A[] y) =>
            default(EqArray<ORD, A>).Equals(x, y);
    
        public int GetHashCode(A[] x) =>
            hash(x);
    }
    

@abstr_code_section c# int x = OrdArray.Inst.Compare(new [] { @abstr_number , @abstr_number }, new [] { @abstr_number , @abstr_number }); // @abstr_number @abstr_code_section c# public interface Semigroup { A Append(A x, A y); } @abstr_code_section c# public interface Monoid : Semigroup { A Empty(); } @abstr_code_section c# public static partial class TypeClass { public static A mempty() where MONOID : struct, Monoid => default(MONOID).Empty();
    
    
        public static A mconcat<MONOID, A>(IEnumerable<A> xs) where MONOID : struct, Monoid<A> =>
            xs.Fold(mempty<MONOID, A>(), (s, x) => append<MONOID, A>(s, x));
    
        public static A mconcat<MONOID, A>(params A[] xs) where MONOID : struct, Monoid<A> =>
            xs.Fold(mempty<MONOID, A>(), (s, x) => append<MONOID, A>(s, x));
    }
    

@abstr_code_section c# var x = mconcat("Hello", " ", "World"); // "Hello World" var y = mconcat, Lst>(List( @abstr_number ), List( @abstr_number , @abstr_number )); // [ @abstr_number , @abstr_number , @abstr_number ] var z = mconcat( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ); // @abstr_number @abstr_code_section c# public class Writer where MonoidW : struct, Monoid { ... } @abstr_code_section c# public interface MyType> { M **Foo **(M ma); } @abstr_code_section c# public class MyOptionType : MyType > { public Option Foo(Option ma) => ...; } @abstr_code_section c# public interface MyType { MB Foo(MA ma); }****
    
    
    public class MyOptionType<A> : MyType<Option<A>, A>
    {
        public MB Foo<MB, B>(Option<A> ma) => ...;
    }
    

@abstr_code_section c# public interface Monad { MB Bind(MA ma, Func bind); MA Return(A a); MA Fail(Exception e = null); } @abstr_code_section c# public MB Bind(Option ma, Func bind) => ma.IsSome ? bind(ma.Value) : ??? ; // What do we return here? @abstr_code_section c# public interface Monad { MB Bind(MA ma, Func bind) where MonadB : struct, Monad;
    
    
        MA Return(A a);
        MA Fail(Exception e = null);
    }
    

@abstr_code_section c# public MB Bind(Option ma, Func f) where MonadB : struct, Monad => ma.IsSome ? f(ma.Value) : default(MonadB).Fail(); @abstr_code_section c# public Option Return(A a) => Optional(a);
    
    
    public Option<A> Fail(Exception e = null) =>
        None;
    

@abstr_code_section c# public M CreateNewIntegerMonad(int x) where MonadInt : struct, Monad => default(MonadInt).Return(x); @abstr_code_section c# public interface Monad { Monad Bind(Func> bind); }
    
    
    public class Option<A> : Monad<A>
    {
        public Monad<B> Bind<B>(Monad<A> ma, Func<A, Monad<B>> bind) =>
            IsSome
                ? bind(Value)
                : None;
    }
    
    public Monad<int> CreateNewIntegerMonad(int x) =>
        ????; // How?
    

@abstr_code_section c# public Monad CreateNewIntegerMonad(int x) where M : Monad => ????; // We still can't call new M(x) @abstr_code_section c# public static MA Add(MA ma, MA mb) where MonadA : struct, Monad where NumA : struct, Num => default(MonadA).Bind(ma, a => default(MonadA).Bind(mb, b => default(MonadA).Return(default(NumA).Plus(a, b)))); @abstr_code_section c# from a in ma from b in mb select default(NumA).Plus(a, b); @abstr_code_section c# var x = Some( @abstr_number ); var y = Some( @abstr_number ); var z = Option.None;
    
    
    var r @abstr_number  = Add<MOption<int>, Option<int>, TInt, int>(x, y); // Some( @abstr_number )
    var r @abstr_number  = Add<MOption<int>, Option<int>, TInt, int>(x, z); // None
    
    Assert.True(r @abstr_number  == Some( @abstr_number ));
    Assert.True(r @abstr_number  == None);
    

@abstr_code_section c# var x = List( @abstr_number , @abstr_number , @abstr_number ); var y = List( @abstr_number , @abstr_number , @abstr_number ); var z = List();
    
    
    var r @abstr_number  = Add<MLst<int>, Lst<int>, TInt, int>(x, y);
    var r @abstr_number  = Add<MLst<int>, Lst<int>, TInt, int>(x, z);
    
    Assert.True(r @abstr_number  == List( @abstr_number ,  @abstr_number ,  @abstr_number ,   @abstr_number ,  @abstr_number ,  @abstr_number ,   @abstr_number ,  @abstr_number ,  @abstr_number ));
    Assert.True(r @abstr_number  == z);
    

@abstr_code_section c#

// Sums all the bound value(s) A SumT(this Arr> ma);

// Counds all the bound value(s) int CountT(this Arr> ma);

// Monadic bind on the inner monad Arr> BindT(this Arr> ma, Func> f);

// Flips the inner and outer monads (using the rules of the inner and outer // monads to compose the result) and performs a map operation on the bound values Lst> Traverse(this Arr> ma, Func f);

// Flips the inner and outer monads (using the rules of the inner and outer // monads to compose the result) Lst> Sequence(this Arr> ma);

// Maps the bound value(s) Arr> MapT(this Arr> ma, Func f);

// Folds the bound value(s) S FoldT ~~(this Arr > ma, S state, Func ~~f);~~~~

// Reverse folds the bound value(s) S FoldBackT ~~(this Arr > ma, S state, Func ~~f);~~~~

// Returns true if f(x) returns true for any of the bound value(s) bool ExistsT(this Arr> ma, Func f);

// Returns true if f(x) returns true for all of the bound value(s) bool ForAllT(this Arr> ma, Func f);

// Iterates all of the bound values Unit IterT(this Arr> ma, Action f);

// Filters the bound value(s) with the predicate Arr> FilterT< A>(this Arr> ma, Func pred);

// Filters the bound value(s) with the predicate Arr> Where(this Arr> ma, Func pred);

// Maps the bound value(s) Arr> Select(this Arr> ma, Func f);

// LINQ monadic bind and project on the bound value(s) Arr> SelectMany( this Arr> ma, Func> bind, Func project);

// Plus operation on the bound value(s) Arr> PlusT(this Arr> x, Arr> y) where NUM : struct, Num;

// Subtraction operation on the bound value(s) Arr> SubtractT(this Arr> x, Arr> y) where NUM : struct, Num;

// Product operation on the bound value(s) Arr> ProductT(this Arr> x, Arr> y) where NUM : struct, Num => ApplyT(default(NUM).Product, x, y);

// Divide operation on the bound value(s) Arr> DivideT(this Arr> x, Arr> y) where NUM : struct, Num;

// Semigroup append operation on the bound value(s) AppendT(this Arr> x, Arr> y) where SEMI : struct, Semigroup;

// Comparison operation on the bound value(s) int CompareT(this Arr> x, Arr> y) where ORD : struct, Ord;

// Equality operation on the bound value(s) bool EqualsT(this Arr> x, Arr> y) where EQ : struct, Eq;

// Applicative apply operation on the bound value(s) Arr> ApplyT(this Func fab, Arr> fa);

// Application apply operation on the bound value(s) Arr> ApplyT(this Func fabc, Arr> fa, Arr> fb); @abstr_code_section c# Lst> x = List(Some( @abstr_number ), Some( @abstr_number ), Some( @abstr_number ), Some( @abstr_number ), Some( @abstr_number )); Option> y = x.Sequence();
    
    
    Assert.True(y == Some(List( @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number )));
    

@abstr_code_section c# Lst> x = List(Some( @abstr_number ), Some( @abstr_number ), Some( @abstr_number ), None, Some( @abstr_number )); Option> y = x.Sequence();
    
    
    Assert.True(y == None);
    

@abstr_code_section c# var x = List>( @abstr_number , @abstr_number , @abstr_number , @abstr_number , "error");
    
    
    var y = x.Sequence();
    
    Assert.True(y.IsLeft && y == "error");
    

@abstr_code_section c# var start = DateTime.UtcNow;
    
    
    var f @abstr_number  = Task.Run(() => { Thread.Sleep( @abstr_number ); return  @abstr_number ; });
    var f @abstr_number  = Task.Run(() => { Thread.Sleep( @abstr_number ); return  @abstr_number ; });
    var f @abstr_number  = Task.Run(() => { Thread.Sleep( @abstr_number ); return  @abstr_number ; });
    var f @abstr_number  = Task.Run(() => { Thread.Sleep( @abstr_number ); return  @abstr_number ; });
    var f @abstr_number  = Task.Run(() => { Thread.Sleep( @abstr_number ); return  @abstr_number ; });
    var f @abstr_number  = Task.Run(() => { Thread.Sleep( @abstr_number ); return  @abstr_number ; });
    
    var res = await List(f @abstr_number , f @abstr_number , f @abstr_number , f @abstr_number , f @abstr_number , f @abstr_number ).Traverse(x => x *  @abstr_number );
    
    Assert.True(toSet(res) == Set( @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ));
    
    var ms = (int)(DateTime.UtcNow - start).TotalMilliseconds;
    Assert.True(ms <  @abstr_number , $"Took {ms} ticks");
    

@abstr_code_section c# var ma = List(Some( @abstr_number ),Some( @abstr_number ),Some( @abstr_number ),Some( @abstr_number ),Some( @abstr_number ));
    
    
    var total = OptionT.foldT(ma,  @abstr_number , (s, x) => s + x); //  @abstr_number 
    var total = OptionT.sumT<TInt, int>(ma); //  @abstr_number 
    var mb    = OptionT.filterT(ma, x >  @abstr_number ); // List(Some( @abstr_number ), Some( @abstr_number ))
    

```

### The rest

This README.md is a basic introduction to the library. It is however full of many, many useful types, so do check the @abstr_hyperlink for more info.
