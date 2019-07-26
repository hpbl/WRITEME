@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

# Jint

Jint is a __Javascript interpreter__ for .NET which provides full __ECMA @abstr_number . @abstr_number __ compliance and can run on __any .NET platform__. Because it doesn't generate any .NET bytecode nor use the DLR it runs relatively small scripts faster. It's available as a PCL on Nuget at https://www.nuget.org/packages/Jint.

# Features

  * Full support for ECMAScript @abstr_number . @abstr_number - http://www.ecma-international.org/ecma- @abstr_number / @abstr_number . @abstr_number /
  * .NET Portable Class Library - http://msdn.microsoft.com/en-us/library/gg @abstr_number (v=vs. @abstr_number ).aspx
  * .NET Interoperability 



> ECMAScript @abstr_number . @abstr_number currently being implemeted, see https://github.com/sebastienros/jint/issues/ @abstr_number 

# Discussion

Join the chat on @abstr_hyperlink or post your questions with the `jint` tag on @abstr_hyperlink .

# Examples

This example defines a new value named `log` pointing to `Console.WriteLine`, then executes a script calling `log('Hello World!')`. ```c# var engine = new Engine() .SetValue("log", new Action(Console.WriteLine)) ;
    
    
    engine.Execute(@"
      function hello() { 
        log('Hello World');
      };
    
      hello();
    ");
    

@abstr_code_section c# var square = new Engine() .SetValue("x", @abstr_number ) // define a new variable .Execute("x * x") // execute a statement .GetCompletionValue() // get the latest statement completion value .ToObject() // converts the value to .NET ; @abstr_code_section c# var p = new Person { Name = "Mickey Mouse" };
    
    
    var engine = new Engine()
        .SetValue("p", p)
        .Execute("p.Name = 'Minnie'")
        ;
    Assert.AreEqual("Minnie", p.Name);
    

@abstr_code_section c# var add = new Engine() .Execute("function add(a, b) { return a + b; }") .GetValue("add") ;
    
    
    add.Invoke( @abstr_number ,  @abstr_number ); // ->  @abstr_number
    

@abstr_code_section c# var engine = new Engine() .Execute("function add(a, b) { return a + b; }") ;
    
    
    engine.Invoke("add",  @abstr_number ,  @abstr_number ); // ->  @abstr_number
    

@abstr_code_section c# var engine = new Engine(cfg => cfg.AllowClr()); @abstr_code_section javascript jint> var file = new System.IO.StreamWriter('log.txt'); jint> file.WriteLine('Hello World !'); jint> file.Dispose(); @abstr_code_section javascript jint> var log = System.Console.WriteLine; jint> log('Hello World !'); => "Hello World !" @abstr_code_section c# var engine = new Engine(cfg => cfg .AllowClr(typeof(Bar).Assembly) ); @abstr_code_section javascript jint> var Foo = importNamespace('Foo'); jint> var bar = new Foo.Bar(); jint> log(bar.ToString()); @abstr_code_section csharp engine.SetValue("TheType", TypeReference.CreateTypeReference(engine, typeof(TheType))) @abstr_code_section javascript jint> var o = new TheType(); @abstr_code_section javascript jint> var ListOfString = System.Collections.Generic.List(System.String); jint> var list = new ListOfString(); jint> list.Add('foo'); jint> list.Add( @abstr_number ); // automatically converted to String jint> list.Count; // @abstr_number @abstr_code_section c# var PST = TimeZoneInfo.FindSystemTimeZoneById("Pacific Standard Time"); var engine = new Engine(cfg => cfg.LocalTimeZone(PST));
    
    
    engine.Execute("new Date().toString()"); // Wed Dec  @abstr_number   @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT- @abstr_number : @abstr_number
    

@abstr_code_section c# var FR = CultureInfo.GetCultureInfo("fr-FR"); var engine = new Engine(cfg => cfg.Culture(FR));
    
    
    engine.Execute("new Number( @abstr_number . @abstr_number ).toString()"); //  @abstr_number . @abstr_number 
    engine.Execute("new Number( @abstr_number . @abstr_number ).toLocaleString()"); //  @abstr_number , @abstr_number
    

```

## Implemented features:

### ECMAScript @abstr_number . @abstr_number

  * Complete implementation 
    * ECMAScript @abstr_number . @abstr_number test suite (http://test @abstr_number .ecmascript.org/) 



### ECMAScript @abstr_number . @abstr_number

ES @abstr_number features which are being implemented: \- [x] [arrows](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#arrows) \- [ ] [classes](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#classes) \- [x] [enhanced object literals](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#enhanced-object-literals) \- [x] [template strings](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#template-strings) \- [x] [destructuring](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#destructuring) \- [x] [default + rest + spread](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#default--rest--spread) \- [ ] [let + const](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#let--const) \- [x] [iterators + for..of](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#iterators--forof) \- [ ] [generators](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#generators) \- [ ] [unicode](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#unicode) \- [ ] [modules](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#modules) \- [ ] [module loaders](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#module-loaders) \- [x] [map + set](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#map--set--weakmap--weakset) \- [ ] [weakmap + weakset](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#map--set--weakmap--weakset) \- [ ] [proxies](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#proxies) \- [x] [symbols](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#symbols) \- [ ] [subclassable built-ins](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#subclassable-built-ins) \- [ ] [promises](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#promises) \- [x] [math APIs](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#math--number--string--array--object-apis) \- [x] [number APIs](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#math--number--string--array--object-apis) \- [x] [string APIs](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#math--number--string--array--object-apis) \- [x] [array APIs](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#math--number--string--array--object-apis) \- [ ] [object APIs](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#math--number--string--array--object-apis) \- [x] [binary and octal literals](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#binary-and-octal-literals) \- [ ] [reflect api](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#reflect-api) \- [ ] [tail calls](https://github.com/lukehoban/es @abstr_number features/blob/master/README.md#tail-calls)

### .NET Interoperability

  * Manipulate CLR objects from JavaScript, including: 
    * Single values
    * Objects
    * Properties
    * Methods
    * Delegates
    * Anonymous objects
  * Convert JavaScript values to CLR objects 
    * Primitive values
    * Object -> expando objects (`IDictionary<string, object>` and dynamic)
    * Array -> object[]
    * Date -> DateTime
    * number -> double
    * string -> string
    * boolean -> bool
    * Regex -> RegExp
    * Function -> Delegate



### Security

The following features provide you with a secure, sand-boxed environment to run user scripts.

  * Define memory limits, to prevent allocations from depleting the memory.
  * Enable/disable usage of BCL to prevent scripts from invoking .NET code.
  * Limit number of statements to prevent infinite loops.
  * Limit depth of calls to prevent deep recursion calls.
  * Define a timeout, to prevent scripts from taking too long to finish.



Continuous Integration kindly provided by @abstr_hyperlink 

### Branches and releases

  * The recommended branch is __dev__, any PR should target this branch
  * The __dev__ branch is automatically built and published on @abstr_hyperlink 
  * The __dev__ branch is occasionally merged to __master__ and published on @abstr_hyperlink 
  * The @abstr_number .x releases have more features (from es @abstr_number ) and is faster than the @abstr_number .x ones. They run the same test suite so they are as reliable. For instance @abstr_hyperlink is using the @abstr_number .x version.
  * The @abstr_number .x versions are marked as _beta_ as they might get breaking changes while es @abstr_number features are added. 


