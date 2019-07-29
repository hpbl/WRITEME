# Edge.js: .NET and Node.js in-process @abstr_hyperlink 

**NEW** Edge.js is now on Slack at https://edgejs.slack.com. Join @abstr_hyperlink . 

An edge connects two nodes. This edge connects Node.js and .NET. V @abstr_number and CLR/.NET Core/Mono - in process. On Windows, MacOS, and Linux. 

@abstr_image 

You can script C# from a Node.js process:

_*ES @abstr_number *_ @abstr_code_section _*ES @abstr_number *_

In ES @abstr_number you can use @abstr_hyperlink to write multiline C# code. @abstr_code_section You can also script Node.js from C#:

```c# using System; using System.Threading.Tasks; using EdgeJs;

class Program { public static async Task Start() { var func = Edge.Func(@" return function (data, callback) { callback(null, 'Node.js welcomes ' + data); } ");
    
    
        Console.WriteLine(await func(".NET"));
    }
    
    static void Main(string[] args)
    {
        Start().Wait();
    }
    

} @abstr_code_section 

> docker run -it tjanczuk/edgejs: @abstr_number . @abstr_number . @abstr_number cd samples node @abstr_number _hello_lambda.js .NET welcomes Node.js @abstr_code_section docker run -it tjanczuk/edgejs: @abstr_number . @abstr_number . @abstr_number cd samples EDGE_USE_CORECLR= @abstr_number node @abstr_number _hello_lambda.js .NET welcomes Node.js @abstr_code_section docker run -it -e EDGE_USE_CORECLR= @abstr_number tjanczuk/edgejs: @abstr_number . @abstr_number . @abstr_number @abstr_code_section npm install edge @abstr_code_section javascript var edge = require('edge');

var helloWorld = edge.func(function () {/* async (input) => { return ".NET Welcomes " + input.ToString(); } */});

helloWorld('JavaScript', function (error, result) { if (error) throw error; console.log(result); }); @abstr_code_section $>node server.js .NET welcomes JavaScript @abstr_code_section $>EDGE_USE_CORECLR= @abstr_number node server.js .NET Welcomes JavaScript @abstr_code_section javascript var edge = require('edge');

var myFunction = edge.func(...); @abstr_code_section javascript myFunction('Some input', function (error, result) { //... }); @abstr_code_section javascript var result = myFunction('Some input', true); @abstr_code_section javascript var add @abstr_number = edge.func('async (input) => { return (int)input + @abstr_number ; }'); @abstr_code_section javascript var add @abstr_number = edge.func(function() {/* async (input) => { return (int)input + @abstr_number ; } _/}); @abstr_code_section javascript var add @abstr_number = edge.func(` async (input) => { return (int)input + @abstr_number ; } `); @abstr_code_section javascript var add @abstr_number = edge.func(function() {/_ using System.Threading.Tasks;
    
    
    public class Startup
    {
        public async Task<object> Invoke(object input)
        {
            int v = (int)input;
            return Helper.AddSeven(v);
        }
    }
    
    static class Helper
    {
        public static int AddSeven(int v) 
        {
            return v +  @abstr_number ;
        }
    }
    

_/}); @abstr_code_section javascript var add @abstr_number = edge.func(require('path').join(__dirname, 'add @abstr_number .csx')); @abstr_code_section javascript var clrMethod = edge.func({ assemblyFile: 'My.Edge.Samples.dll', typeName: 'Samples.FooBar.MyType', methodName: 'MyMethod' // This must be Func > }); @abstr_code_section javascript var clrMethod = edge.func('My.Edge.Samples.dll'); @abstr_code_section javascript var add @abstr_number = edge.func(function() {/_
    
    
    #r "System.Data.dll"
    
    using System.Data;
    using System.Threading.Tasks;
    
    public class Startup
    {
        public async Task<object> Invoke(object input)
        {
            // ...
        }
    }
    

_/}); @abstr_code_section javascript var add @abstr_number = edge.func({ source: function() {/_
    
    
        using System.Data;
        using System.Threading.Tasks;
    
        public class Startup
        {
            public async Task<object> Invoke(object input)
            {
                // ...
            }
        }
    */},
    references: [ 'System.Data.dll' ]
    

}); @abstr_code_section set EDGE_APP_ROOT=c:\DotNet\MyProject\bin\Release\netstandard @abstr_number . @abstr_number node app.js @abstr_code_section javascript var dotNetFunction = edge.func('Edge.Sample.dll');

var payload = { anInteger: @abstr_number , aNumber: @abstr_number . @abstr_number , aString: 'foo', aBoolean: true, aBuffer: new Buffer( @abstr_number ), anArray: [ @abstr_number , 'foo' ], anObject: { a: 'foo', b: @abstr_number } };

dotNetFunction(payload, function (error, result) { }); @abstr_code_section c# using System.Threading.Tasks;

public class Startup { public async Task Invoke(dynamic input) { int anInteger = (int)input.anInteger; double aNumber = (double)input.aNumber; string aString = (string)input.aString; bool aBoolean = (bool)input.aBoolean; byte[] aBuffer = (byte[])input.aBuffer; object[] anArray = (object[])input.anArray; dynamic anObject = (dynamic)input.anObject;
    
    
        return null;
    }
    

}

@abstr_code_section c# using System.Threading.Tasks;

public class Person { public int anInteger = @abstr_number ; public double aNumber = @abstr_number . @abstr_number ; public string aString = "foo"; public bool aBoolean = true; public byte[] aBuffer = new byte[ @abstr_number ]; public object[] anArray = new object[] { @abstr_number , "foo" }; public object anObject = new { a = "foo", b = @abstr_number }; }

public class Startup { public async Task Invoke(dynamic input) { Person person = new Person(); return person; } } @abstr_code_section javascript var edge = require('edge');

var getPerson = edge.func(function () {/* using System.Threading.Tasks;
    
    
    public class Person
    {
        public int anInteger =  @abstr_number ;
        public double aNumber =  @abstr_number . @abstr_number ;
        public string aString = "foo";
        public bool aBoolean = true;
        public byte[] aBuffer = new byte[ @abstr_number ];
        public object[] anArray = new object[] {  @abstr_number , "foo" };
        public object anObject = new { a = "foo", b =  @abstr_number  };
    }
    
    public class Startup
    {
        public async Task<object> Invoke(dynamic input)
        {
            Person person = new Person();
            return person;
        }
    }
    

*/});

getPerson(null, function (error, result) { if (error) throw error; console.log(result); }); @abstr_code_section $>node sample.js { anInteger: @abstr_number , aNumber: @abstr_number . @abstr_number , aString: 'foo', aBoolean: true, aBuffer: 

var addAndMultiplyBy @abstr_number = edge.func(function () {/* async (dynamic input) => { var add = (Func>)input.add; var twoNumbers = new { a = (int)input.a, b = (int)input.b }; var addResult = (int)await add(twoNumbers); return addResult * @abstr_number ; }   
*/});

var payload = { a: @abstr_number , b: @abstr_number , add: function (data, callback) { callback(null, data.a + data.b); } };

addAndMultiplyBy @abstr_number (payload, function (error, result) { if (error) throw error; console.log(result); }); @abstr_code_section $>node sample.js @abstr_number @abstr_code_section javascript function (payload, callback) { var error; // must be null or undefined in the absence of error var result; 
    
    
    // do something
    
    callback(error, result);
    

} @abstr_code_section c# Func> @abstr_code_section javascript var createHello = edge.func(function () {/* async (input) => { return (Func>)(async (i) => { Console.WriteLine("Hello from .NET"); return null; }); } */});

var hello = createHello(null, true); hello(null, true); // prints out "Hello from .NET" @abstr_code_section javascript var createCounter = edge.func(function () {/* async (input) => { var k = (int)input; return (Func>)(async (i) => { return ++k; }); } */});

var counter = createCounter( @abstr_number , true); // create counter with @abstr_number as initial state console.log(counter(null, true)); // prints @abstr_number console.log(counter(null, true)); // prints @abstr_number @abstr_code_section npm install edge npm install edge-py @abstr_code_section javascript var edge = require('edge');

var hello = edge.func('py', function () {/* def hello(input): return "Python welcomes " + input
    
    
    lambda x: hello(x)
    

*/});

hello('Node.js', function (error, result) { if (error) throw error; console.log(result); }); @abstr_code_section $>node py.js Python welcomes Node.js @abstr_code_section python lambda x: x @abstr_code_section python lambda: x: "Hello, " + x @abstr_code_section python current = @abstr_number 

def add(x): global current current = current + x return current

lambda x: add(x) @abstr_code_section python def hello(input): return "Python welcomes " + input

lambda x: hello(x) @abstr_code_section javascript var edge = require('edge');

var hello = edge.func('py', 'hello.py');

hello('Node.js', function (error, result) { if (error) throw error; console.log(result); }); @abstr_code_section $>node hello.js Python welcomes Node.js @abstr_code_section javascript var edge = require('edge');

var hello = edge.func('py', { source: function () {/* def hello(input): return "Python welcomes " + input
    
    
        lambda x: hello(x)
    */},
    sync: true
    

});

console.log(hello('Node.js', true)); @abstr_code_section   
npm install edge npm install edge-ps @abstr_code_section javascript var edge = require('edge');

var hello = edge.func('ps', function () {/* "PowerShell welcomes $inputFromJS on $(Get-Date)" */});

hello('Node.js', function (error, result) { if (error) throw error; console.log(result[ @abstr_number ]); }); @abstr_code_section C:\testEdgeps>node server PowerShell welcomes Node.js on @abstr_number / @abstr_number / @abstr_number @abstr_number : @abstr_number : @abstr_number @abstr_code_section javascript var edge = require('edge');

var helloPowerShell = edge.func('ps', function () {/* "PowerShell welcomes $inputFromJS" */});

var helloPython = edge.func('py', function () {/* def hello(input): return "Python welcomes " + input
    
    
    lambda x: hello(x)
    

*/});

helloPython('Node.js', function(error, result){ if(error) throw error;
    
    
    helloPowerShell(result, function(error, result){
        if(error) throw error;
        console.log(result[ @abstr_number ]);
    });
    

}); @abstr_code_section javascript var edge = require('edge');

var helloFs = edge.func('fs', function () {/* fun input -> async { return "F# welcomes " + input.ToString() } */});

helloFs('Node.js', function (error, result) { if (error) throw error; console.log(result); }); @abstr_code_section npm install edge npm install edge-lsharp @abstr_code_section javascript var edge = require('edge'); var fact = edge.func('lsharp', function(){/*

;; Factorial (def fact(n) (if (is n @abstr_number ) @abstr_number (* n (fact (- n @abstr_number )))))

*/});

fact([ @abstr_number ], function(err, answer){ console.log(answer); // = @abstr_number }); @abstr_code_section js var edge = require('edge'); var lisp = edge.func('lsharp', 'lisp-func.ls');

lisp(['arg @abstr_number ', 'arg @abstr_number '], function(err, result){

}); @abstr_code_section js var edge = require('edge'); var lisp = edge.func('lsharp', '(+ @abstr_number @abstr_number )');

lisp([], function(err, answer){ console.log(answer); // = @abstr_number }); @abstr_code_section npm install edge npm install edge-sql @abstr_code_section set EDGE_SQL_CONNECTION_STRING=Data Source=localhost;Initial Catalog=Northwind;Integrated Security=True @abstr_code_section javascript var edge = require('edge');

var getTop @abstr_number Products = edge.func('sql', function () {/* select top @abstr_number * from Products */});

getTop @abstr_number Products(null, function (error, result) { if (error) throw error; console.log(result); console.log(result[ @abstr_number ].ProductName); console.log(result[ @abstr_number ].ReorderLevel); }); @abstr_code_section C:\projects\edge\samples>node server.js [ { ProductID: @abstr_number , ProductName: 'New Ikura', SupplierID: @abstr_number , CategoryID: @abstr_number , QuantityPerUnit: ' @abstr_number - @abstr_number ml jars', UnitPrice: ' @abstr_number . @abstr_number ', UnitsInStock: @abstr_number , UnitsOnOrder: @abstr_number , ReorderLevel: @abstr_number , Discontinued: false }, ... ] New Ikura @abstr_number @abstr_code_section javascript var edge = require('edge');

var getProduct = edge.func('sql', function () {/* select * from Products where ProductId = @myProductId */});

getProduct({ myProductId: @abstr_number }, function (error, result) { if (error) throw error; console.log(result); }); @abstr_code_section javascript var edge = require('edge');

var updateProductName = edge.func('sql', function () {/* update Products set ProductName = @newName where ProductId = @myProductId */});

updateProductName({ myProductId: @abstr_number , newName: 'New Ikura' }, function (error, result) { if (error) throw error; console.log(result); }); @abstr_code_section javascript var edge = require('edge');

var clrFunc = edge.func(function () {/* async (dynamic input) => { throw new Exception("Sample exception"); } */});

clrFunc(null, function (error, result) { if (error) { console.log('Is Error?', error instanceof Error); console.log('-----------------'); console.log(util.inspect(error, showHidden=true, depth= @abstr_number , colorize=false)); return; } }); @abstr_code_section 

## Is Error? true

{ [System.AggregateException: One or more errors occurred.] message: 'One or more errors occurred.', name: 'System.AggregateException', InnerExceptions: 'System.Collections.ObjectModel.ReadOnlyCollection`@abstr_number [[System.Exception, mscorlib, Version= @abstr_number . @abstr_number . @abstr_number . @abstr_number , Culture=neutral, PublicKeyToken=b @abstr_number a @abstr_number c @abstr_number e @abstr_number ]]', Message: 'One or more errors occurred.', Data: 'System.Collections.ListDictionaryInternal', InnerException: { [System.Exception: Sample exception] message: 'Sample exception', name: 'System.Exception', Message: 'Sample exception', Data: 'System.Collections.ListDictionaryInternal', TargetSite: 'System.Reflection.RuntimeMethodInfo', StackTrace: ' at Startup.<<Invoke>b__ @abstr_number >d__ @abstr_number .MoveNext() in c:\\Users\\User.Name\\Source\\Repos\\eCash @abstr_number \\test\\edge @abstr_number .js:line @abstr_number \r\n--- End of stack trace from previous location where exception was thrown ---\r\n at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)\r\n at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\r\n at System.Runtime.CompilerServices.TaskAwaiter` @abstr_number .GetResult()\r\n at Startup.d__ @abstr_number .MoveNext() in c:\Users\User.Name\Source\Repos\eCash @abstr_number \test\edge @abstr_number .js:line @abstr_number ', Source: 'cp @abstr_number luegt', HResult: - @abstr_number }, HResult: - @abstr_number } @abstr_code_section $>node sample.js

Edge.js: @abstr_number edge.callClrFunc(appId, data, callback); ^ System.Reflection.TargetInvocationException: Exception has been thrown by the target of an invocation. \---> System.Exception: Sample exception at Startup.Invoke(Object input) in sample.cs:line @abstr_number @abstr_code_section javascript var edge = require('edge');

var multiplyBy @abstr_number = edge.func(function () {/* async (dynamic input) => { var aFunctionThatThrows = (Func>)input.aFunctionThatThrows; try { var aResult = await aFunctionThatThrows(null); } catch(Exception e) { Console.WriteLine(e); }
    
    
        return null;
    }
    

*/});

var payload = { someParameter: 'arbitrary parameter', aFunctionThatThrows: function (data, callback) { throw new Error('Sample JavaScript error'); } };

multiplyBy @abstr_number (payload, function (error, result) { if (error) throw error; console.log(result); }); @abstr_code_section $>node sample.js System.Exception: Error: Sample JavaScript error at payload.aFunctionThatThrows (sample.js: @abstr_number : @abstr_number ) at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task) at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task) at Edge.Sample.Startup.d__ @abstr_number .MoveNext() @abstr_code_section javascript var hello = edge.func('My.Assembly.dll'); @abstr_code_section set EDGE_CS_DEBUG= @abstr_number @abstr_code_section javascript var hello = edge.func('MyClass.cs'); @abstr_code_section javscript var hello = edge.func(function () {/* async (input) => { System.Diagnostics.Debugger.Break(); var result = ".NET welcomes " + input.ToString(); return result; } */}); @abstr_code_section javascript var hello = edge.func('async (input) => { return @abstr_number * (int)input; }'); @abstr_code_section tools\buildall.bat test\testall.bat npm run jshint @abstr_code_section cd tools build.bat release @abstr_number . @abstr_number . @abstr_number @abstr_code_section npm install -g node-gyp node-gyp configure --msvs_version= @abstr_number node-gyp build -debug @abstr_code_section set EDGE_NATIVE=C:\projects\edge\build\Debug\edge_nativeclr.node @abstr_code_section npm test @abstr_code_section mocha -R spec @abstr_code_section EDGE_USE_CORECLR= @abstr_number npm test @abstr_code_section cd test test.bat ia @abstr_number @abstr_number . @abstr_number . @abstr_number @abstr_code_section cd test test.bat x @abstr_number @abstr_number . @abstr_number . @abstr_number @abstr_code_section npm run jshint @abstr_code_section bash brew install pkg-config npm install edge @abstr_code_section bash PKG_CONFIG_PATH=/Library/Frameworks/Mono.framework/Versions/Current/lib/pkgconfig \ npm install edge @abstr_code_section bash EDGE_USE_CORECLR= @abstr_number node myapp.js @abstr_code_section bash node-gyp configure build @abstr_code_section bash node-gyp configure build -debug export EDGE_NATIVE=/Users/tomek/edge/build/Debug/edge_nativeclr.node @abstr_code_section bash EDGE_USE_CORECLR= @abstr_number node sample.js @abstr_code_section bash EDGE_USE_CORECLR= @abstr_number \ CORECLR_DIR=/usr/share/dotnet/dnx-coreclr-linux-x @abstr_number . @abstr_number . @abstr_number . @abstr_number -beta @abstr_number - @abstr_number \ node sample.js @abstr_code_section c# using System; using System.Threading.Tasks; using EdgeJs;

class Program { public static async Task Start() { var func = Edge.Func(@" return function (data, callback) { callback(null, 'Node.js welcomes ' + data); } ");
    
    
        Console.WriteLine(await func(".NET"));
    }
    
    static void Main(string[] args)
    {
        Start().Wait();
    }
    

} @abstr_code_section C:\project\sample\bin\Debug> sample.exe Node.js welcomes .NET @abstr_code_section c# var func = Edge.Func(@" return function (data, callback) { callback(null, 'Hello, ' + data); } "); @abstr_code_section c# var result = await func(".NET"); // result == "Hello, .NET" @abstr_code_section c# var increment = Edge.Func(@" var current = @abstr_number ;
    
    
    return function (data, callback) {
        current += data;
        callback(null, current);
    }
    

");

Console.WriteLine(await increment( @abstr_number )); // outputs @abstr_number Console.WriteLine(await increment( @abstr_number )); // outputs @abstr_number @abstr_code_section javascript return function (data, callback) { callback(null, 'Node.js welcomes ' + data); } @abstr_code_section c# var func = Edge.Func(File.ReadAllText("myfunc.js")); @abstr_code_section javascript module.exports = function (data, callback) { callback(null, 'Node.js welcomes ' + data); }; @abstr_code_section c# var func = Edge.Func(@"return require('./../myfunc.js')"); @abstr_code_section c# var createHttpServer = Edge.Func(@" var http = require('http');
    
    
    return function (port, cb) {
        var server = http.createServer(function (req, res) {
            res.end('Hello, world! ' + new Date());
        }).listen(port, cb);
    };
    

");

await createHttpServer( @abstr_number ); Console.WriteLine(await new WebClient().DownloadStringTaskAsync("http://localhost: @abstr_number ")); @abstr_code_section C:\projects\websockets> npm install ws ... ws@ @abstr_number . @abstr_number . @abstr_number node_modules\ws ├── tinycolor@ @abstr_number . @abstr_number . @abstr_number ├── options@ @abstr_number . @abstr_number . @abstr_number ├── nan@ @abstr_number . @abstr_number . @abstr_number └── commander@ @abstr_number . @abstr_number . @abstr_number @abstr_code_section c# class Program { public static async void Start() { var createWebSocketServer = Edge.Func(@" var WebSocketServer = require('ws').Server;
    
    
            return function (port, cb) {
                var wss = new WebSocketServer({ port: port });
                wss.on('connection', function (ws) {
                    ws.on('message', function (message) {
                        ws.send(message.toUpperCase());
                    });
                    ws.send('Hello!');
                });
                cb();
            };
        ");
    
        await createWebSocketServer( @abstr_number );
    }
    
    static void Main(string[] args)
    {
        Task.Run((Action)Start);
        new ManualResetEvent(false).WaitOne();
    }
    

} @abstr_code_section npm install ws -g @abstr_code_section C:\projects\websockets> wscat -c ws://localhost: @abstr_number /

connected (press CTRL+C to quit)

< Hello!

> foo < FOO bar < BAR @abstr_code_section c# class Program { public static async void Start() { // Define an event handler to be called for every message from the client
    
    
        var onMessage = (Func<object, Task<object>>)(async (message) =>
        {
            return "Received string of length " + ((string)message).Length;
        });
    
        // The WebSocket server delegates handling of messages from clients
        // to the supplied .NET handler
    
        var createWebSocketServer = Edge.Func(@"
            var WebSocketServer = require('ws').Server;
    
            return function (options, cb) {
                var wss = new WebSocketServer({ port: options.port });
                wss.on('connection', function (ws) {
                    ws.on('message', function (message) {
                        options.onMessage(message, function (error, result) {
                            if (error) throw error;
                            ws.send(result);
                        });
                    });
                    ws.send('Hello!');
                });
                cb();
            };
        ");
    
        // Create a WebSocket server on a specific TCP port and using the .NET event handler
    
        await createWebSocketServer(new
        {
            port =  @abstr_number ,
            onMessage = onMessage
        });
    }
    
    static void Main(string[] args)
    {
        Task.Run((Action)Start);
        new ManualResetEvent(false).WaitOne();
    }
    

} @abstr_code_section C:\projects\websockets> wscat -c ws://localhost: @abstr_number /

connected (press CTRL+C to quit)

< Hello!

> Foo < Received string of length @abstr_number FooBar < Received string of length @abstr_number @abstr_code_section c# var createHttpServer = Edge.Func(@" var http = require('http');
    
    
    return function (port, cb) {
        var server = http.createServer(function (req, res) {
            res.end('Hello, world! ' + new Date());
        }).listen(port, function (error) {
            cb(error, function (data, cb) {
                server.close();
                cb();
            });
        });
    };
    

");

var closeHttpServer = (Func>)await createHttpServer( @abstr_number ); Console.WriteLine(await new WebClient().DownloadStringTaskAsync("http://localhost: @abstr_number ")); await closeHttpServer(null); @abstr_code_section tools\build_double.bat @abstr_number . @abstr_number . @abstr_number @abstr_code_section C:\projects\edge\test\double\double_tests\bin\Release> mstest /testcontainer:double_test.dll /noisolation @abstr_code_section C:\projects\edge\test\double\double_stress\bin\Release> double_stress.exe ```

## Use cases and other resources

@abstr_hyperlink by @abstr_hyperlink   
@abstr_hyperlink by @abstr_hyperlink 

## Contribution and derived work

I do welcome contributions via pull request and derived work. 

The edge module is intended to remain a very small component with core functionality that supports interop between .NET and Node.js. Domain specific functionality (e.g. access to SQL, writing to ETW, writing connect middleware in .NET) should be implemented as separate modules with a dependency on edge. When you have a notable derived work, I would love to know about it to include a pointer here. 

## More

Issues? Feedback? You @abstr_hyperlink . Pull requests welcome.
