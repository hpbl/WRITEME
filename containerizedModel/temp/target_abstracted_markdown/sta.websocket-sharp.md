@abstr_image 

## Welcome to websocket-sharp!

websocket-sharp supports:

  * RFC @abstr_number 
  * WebSocket Client and Server
  * Per-message Compression extension
  * Secure Connection
  * HTTP Authentication
  * Query string, Origin header, and Cookies
  * Connecting through the HTTP proxy server
  * .NET Framework _* @abstr_number . @abstr_number *_ or later (includes compatible environment such as [Mono])



## Branches

  * [master] for production releases.
  * [hybi- @abstr_number ] for older [draft-ietf-hybi-thewebsocketprotocol- @abstr_number ]. No longer maintained.
  * [draft @abstr_number ] for even more old [draft-hixie-thewebsocketprotocol- @abstr_number ]. No longer maintained.



## Build

websocket-sharp is built as a single assembly, **websocket-sharp.dll**.

websocket-sharp is developed with [MonoDevelop]. So a simple way to build is to open **websocket-sharp.sln** and run build for **websocket-sharp project** with any of the build configurations (e.g. `Debug`) in MonoDevelop.

## Install

### Self Build

You should add your websocket-sharp.dll (e.g. `/path/to/websocket-sharp/bin/Debug/websocket-sharp.dll`) to the library references of your project.

If you would like to use that dll in your [Unity] project, you should add it to any folder of your project (e.g. `Assets/Plugins`) in the **Unity Editor**.

### NuGet Gallery

websocket-sharp is available on the [NuGet Gallery], as still a **prerelease** version.

  * [NuGet Gallery: websocket-sharp]



You can add websocket-sharp to your project with the NuGet Package Manager, by using the following command in the Package Manager Console.
    
    
    PM> Install-Package WebSocketSharp -Pre
    

### Unity Asset Store

websocket-sharp is available on the Unity Asset Store (Sorry, Not available now).

  * [WebSocket-Sharp for Unity]



It works with **Unity Free** , but there are some limitations:

  * [Security Sandbox of the Webplayer] (The server is not available in Web Player)
  * [WebGL Networking] (Not available in WebGL)
  * Incompatible platform (Not available for such UWP)
  * Lack of dll for the System.IO.Compression (The compression extension is not available on Windows)
  * .NET Socket Support for iOS/Android (iOS/Android Pro is required if your Unity is earlier than Unity @abstr_number )
  * .NET API @abstr_number . @abstr_number compatibility level for iOS/Android



.NET API @abstr_number . @abstr_number compatibility level for iOS/Android may require to fix lack of some features for later than .NET Framework @abstr_number . @abstr_number , such as the `System.Func<...>` delegates (so i have added them in the asset package).

And it is priced at **US$ @abstr_number _*. I believe your $ @abstr_number makes this project more better, *_ Thank you!**

## Usage

### WebSocket Client

@abstr_code_section 

#### Step @abstr_number

Required namespace.

@abstr_code_section 

The `WebSocket` class exists in the `WebSocketSharp` namespace.

#### Step @abstr_number

Creating a new instance of the `WebSocket` class with the WebSocket URL to connect.

@abstr_code_section 

The `WebSocket` class inherits the `System.IDisposable` interface, so you can create it with the `using` statement.

@abstr_code_section 

This will **close** the WebSocket connection with status code `@abstr_number` (going away) when the control leaves the `using` block.

#### Step @abstr_number

Setting the `WebSocket` events.

##### WebSocket.OnOpen Event

This event occurs when the WebSocket connection has been established.

@abstr_code_section 

`System.EventArgs.Empty` is passed as `e`, so you do not need to use it.

##### WebSocket.OnMessage Event

This event occurs when the `WebSocket` receives a message.

@abstr_code_section 

A `WebSocketSharp.MessageEventArgs` instance is passed as `e`.

If you would like to get the message data, you should access `e.Data` or `e.RawData` property.

`e.Data` property returns a `string`, so it is mainly used to get the **text** message data.

`e.RawData` property returns a `byte[]`, so it is mainly used to get the **binary** message data.

@abstr_code_section 

And if you would like to notify that a **ping** has been received, via this event, you should set the `WebSocket.EmitOnPing` property to `true`.

@abstr_code_section 

##### WebSocket.OnError Event

This event occurs when the `WebSocket` gets an error.

@abstr_code_section 

A `WebSocketSharp.ErrorEventArgs` instance is passed as `e`.

If you would like to get the error message, you should access `e.Message` property.

`e.Message` property returns a `string` that represents the error message.

And `e.Exception` property returns a `System.Exception` instance that represents the cause of the error if it is due to an exception.

##### WebSocket.OnClose Event

This event occurs when the WebSocket connection has been closed.

@abstr_code_section 

A `WebSocketSharp.CloseEventArgs` instance is passed as `e`.

If you would like to get the reason for the close, you should access `e.Code` or `e.Reason` property.

`e.Code` property returns a `ushort` that represents the status code for the close.

`e.Reason` property returns a `string` that represents the reason for the close.

#### Step @abstr_number

Connecting to the WebSocket server.

@abstr_code_section 

If you would like to connect to the server asynchronously, you should use the `WebSocket.ConnectAsync ()` method.

#### Step @abstr_number

Sending data to the WebSocket server.

@abstr_code_section 

The `WebSocket.Send` method is overloaded.

You can use the `WebSocket.Send (string)`, `WebSocket.Send (byte[])`, or `WebSocket.Send (System.IO.FileInfo)` method to send the data.

If you would like to send the data asynchronously, you should use the `WebSocket.SendAsync` method.

@abstr_code_section 

And also if you would like to do something when the send is complete, you should set `completed` to any `Action<bool>` delegate.

#### Step @abstr_number

Closing the WebSocket connection.

@abstr_code_section 

If you would like to close the connection explicitly, you should use the `WebSocket.Close` method.

The `WebSocket.Close` method is overloaded.

You can use the `WebSocket.Close ()`, `WebSocket.Close (ushort)`, `WebSocket.Close (WebSocketSharp.CloseStatusCode)`, `WebSocket.Close (ushort, string)`, or `WebSocket.Close (WebSocketSharp.CloseStatusCode, string)` method to close the connection.

If you would like to close the connection asynchronously, you should use the `WebSocket.CloseAsync` method.

### WebSocket Server

@abstr_code_section 

#### Step @abstr_number

Required namespace.

@abstr_code_section 

The `WebSocketBehavior` and `WebSocketServer` classes exist in the `WebSocketSharp.Server` namespace.

#### Step @abstr_number

Creating the class that inherits the `WebSocketBehavior` class.

For example, if you would like to provide an echo service,

@abstr_code_section 

And if you would like to provide a chat service,

@abstr_code_section 

You can define the behavior of any WebSocket service by creating the class that inherits the `WebSocketBehavior` class.

If you override the `WebSocketBehavior.OnMessage (MessageEventArgs)` method, it will be called when the `WebSocket` used in a session in the service receives a message.

And if you override the `WebSocketBehavior.OnOpen ()`, `WebSocketBehavior.OnError (ErrorEventArgs)`, and `WebSocketBehavior.OnClose (CloseEventArgs)` methods, each of them will be called when each of the `WebSocket` events (`OnOpen`, `OnError`, and `OnClose`) occurs.

The `WebSocketBehavior.Send` method can send data to the client on a session in the service.

If you would like to get the sessions in the service, you should access the `WebSocketBehavior.Sessions` property (returns a `WebSocketSharp.Server.WebSocketSessionManager`).

The `WebSocketBehavior.Sessions.Broadcast` method can send data to every client in the service.

#### Step @abstr_number

Creating a new instance of the `WebSocketServer` class.

@abstr_code_section 

You can add any WebSocket service to your `WebSocketServer` with the specified behavior and absolute path to the service, by using the `WebSocketServer.AddWebSocketService<TBehaviorWithNew> (string)` or `WebSocketServer.AddWebSocketService<TBehavior> (string, Func<TBehavior>)` method.

The type of `TBehaviorWithNew` must inherit the `WebSocketBehavior` class, and must have a public parameterless constructor.

The type of `TBehavior` must inherit the `WebSocketBehavior` class.

So you can use a class in the above Step @abstr_number to add the service.

If you create a new instance of the `WebSocketServer` class without a port number, it sets the port number to _* @abstr_number *_. So it is necessary to run with root permission.
    
    
    $ sudo mono example @abstr_number .exe
    

#### Step @abstr_number

Starting the WebSocket server.

@abstr_code_section 

#### Step @abstr_number

Stopping the WebSocket server.

@abstr_code_section 

The `WebSocketServer.Stop` method is overloaded.

You can use the `WebSocketServer.Stop ()`, `WebSocketServer.Stop (ushort, string)`, or `WebSocketServer.Stop (WebSocketSharp.CloseStatusCode, string)` method to stop the server.

### HTTP Server with the WebSocket

I have modified the `System.Net.HttpListener`, `System.Net.HttpListenerContext`, and some other classes from **[Mono]** to create an HTTP server that allows to accept the WebSocket handshake requests.

So websocket-sharp provides the `WebSocketSharp.Server.HttpServer` class.

You can add any WebSocket service to your `HttpServer` with the specified behavior and path to the service, by using the `HttpServer.AddWebSocketService<TBehaviorWithNew> (string)` or `HttpServer.AddWebSocketService<TBehavior> (string, Func<TBehavior>)` method.

@abstr_code_section 

For more information, would you see **[Example @abstr_number ]**?

### WebSocket Extensions

#### Per-message Compression

websocket-sharp supports the @abstr_hyperlink extension (but does not support it with the [context take over]).

As a WebSocket client, if you would like to enable this extension, you should set the `WebSocket.Compression` property to a compression method before calling the connect method.

@abstr_code_section 

And then the client will send the following header in the handshake request to the server.
    
    
    Sec-WebSocket-Extensions: permessage-deflate; server_no_context_takeover; client_no_context_takeover
    

If the server supports this extension, it will return the same header which has the corresponding value.

So eventually this extension will be available when the client receives the header in the handshake response.

#### Ignoring the extensions

As a WebSocket server, if you would like to ignore the extensions requested from a client, you should set the `WebSocketBehavior.IgnoreExtensions` property to `true` in your `WebSocketBehavior` constructor or initializing it, such as the following.

@abstr_code_section 

If it is set to `true`, the service will not return the Sec-WebSocket-Extensions header in its handshake response.

I think this is useful when you get something error in connecting the server and exclude the extensions as a cause of the error.

### Secure Connection

websocket-sharp supports the secure connection with **SSL/TLS**.

As a WebSocket client, you should create a new instance of the `WebSocket` class with a **wss** scheme WebSocket URL.

@abstr_code_section 

If you would like to set a custom validation for the server certificate, you should set the `WebSocket.SslConfiguration.ServerCertificateValidationCallback` property to a callback for it.

@abstr_code_section 

The default callback always returns `true`.

As a WebSocket server, you should create a new instance of the `WebSocketServer` or `HttpServer` class with some settings for the secure connection, such as the following.

@abstr_code_section 

### HTTP Authentication

websocket-sharp supports the @abstr_hyperlink .

As a WebSocket client, you should set a pair of user name and password for the HTTP authentication, by using the `WebSocket.SetCredentials (string, string, bool)` method before calling the connect method.

@abstr_code_section 

If `preAuth` is `true`, the client will send the credentials for the Basic authentication in the first handshake request to the server.

Otherwise, it will send the credentials for either the Basic or Digest (determined by the unauthorized response to the first handshake request) authentication in the second handshake request to the server.

As a WebSocket server, you should set an HTTP authentication scheme, a realm, and any function to find the user credentials before calling the start method, such as the following.

@abstr_code_section 

If you would like to provide the Digest authentication, you should set such as the following.

@abstr_code_section 

### Query string, Origin header, and Cookies

As a WebSocket client, if you would like to send the query string in the handshake request, you should create a new instance of the `WebSocket` class with a WebSocket URL that includes the [Query] string parameters.

@abstr_code_section 

If you would like to send the Origin header in the handshake request, you should set the `WebSocket.Origin` property to an allowable value as the [Origin] header before calling the connect method.

@abstr_code_section 

And if you would like to send the cookies in the handshake request, you should set any cookie by using the `WebSocket.SetCookie (WebSocketSharp.Net.Cookie)` method before calling the connect method.

@abstr_code_section 

As a WebSocket server, if you would like to get the query string included in a handshake request, you should access the `WebSocketBehavior.Context.QueryString` property, such as the following.

@abstr_code_section 

If you would like to get the value of the Origin header included in a handshake request, you should access the `WebSocketBehavior.Context.Origin` property.

If you would like to get the cookies included in a handshake request, you should access the `WebSocketBehavior.Context.CookieCollection` property.

And if you would like to validate the Origin header, cookies, or both, you should set each validation for it with your `WebSocketBehavior`, for example, by using the `WebSocketServer.AddWebSocketService<TBehavior> (string, Func<TBehavior>)` method with initializing, such as the following.

@abstr_code_section 

### Connecting through the HTTP proxy server

websocket-sharp supports to connect through the HTTP proxy server.

If you would like to connect to a WebSocket server through the HTTP proxy server, you should set the proxy server URL, and if necessary, a pair of user name and password for the proxy server authentication (Basic/Digest), by using the `WebSocket.SetProxy (string, string, string)` method before calling the connect method.

@abstr_code_section 

I have tested this with **[Squid]**. It is necessary to disable the following option in **squid.conf** (e.g. `/etc/squid/squid.conf`).

@abstr_code_section 

### Logging

The `WebSocket` class has the own logging function.

You can use it with the `WebSocket.Log` property (returns a `WebSocketSharp.Logger`).

So if you would like to change the current logging level (`WebSocketSharp.LogLevel.Error` as the default), you should set the `WebSocket.Log.Level` property to any of the `LogLevel` enum values.

@abstr_code_section 

The above means a log with lower than `LogLevel.Debug` cannot be outputted.

And if you would like to output a log, you should use any of the output methods. The following outputs a log with `LogLevel.Debug`.

@abstr_code_section 

The `WebSocketServer` and `HttpServer` classes have the same logging function.

## Examples

Examples using websocket-sharp.

### Example

[Example] connects to the [Echo server].

### Example @abstr_number

[Example @abstr_number ] starts a WebSocket server.

### Example @abstr_number

[Example @abstr_number ] starts an HTTP server that allows to accept the WebSocket handshake requests.

Would you access to @abstr_hyperlink to do **WebSocket Echo Test** with your web browser while Example @abstr_number is running?

## Supported WebSocket Specifications

websocket-sharp supports _*RFC @abstr_number *_ , and it is based on the following references:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Thanks for translating to japanese.

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## License

websocket-sharp is provided under [The MIT License].
