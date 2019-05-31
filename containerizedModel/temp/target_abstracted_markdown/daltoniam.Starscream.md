@abstr_image 

Starscream is a conforming WebSocket ( @abstr_hyperlink ) client library in Swift.

Its Objective-C counterpart can be found here: @abstr_hyperlink 

## Features

  * Conforms to all of the base @abstr_hyperlink .
  * Nonblocking. Everything happens in the background, thanks to GCD.
  * TLS/WSS support.
  * Compression Extensions support ( @abstr_hyperlink )
  * Simple concise codebase at just a few hundred LOC.



## Example

First thing is to import the framework. See the Installation instructions on how to add the framework to your project.

@abstr_code_section 

Once imported, you can open a connection to your WebSocket server. Note that `socket` is probably best as a property, so it doesn't get deallocated right after being setup.

@abstr_code_section 

After you are connected, there are some delegate methods that we need to implement.

### websocketDidConnect

websocketDidConnect is called as soon as the client connects to the server.

@abstr_code_section 

### websocketDidDisconnect

websocketDidDisconnect is called as soon as the client is disconnected from the server.

@abstr_code_section 

### websocketDidReceiveMessage

websocketDidReceiveMessage is called when the client gets a text frame from the connection.

@abstr_code_section 

### websocketDidReceiveData

websocketDidReceiveData is called when the client gets a binary frame from the connection.

@abstr_code_section 

### Optional: websocketDidReceivePong _(required protocol: WebSocketPongDelegate)_

websocketDidReceivePong is called when the client gets a pong response from the connection. You need to implement the WebSocketPongDelegate protocol and set an additional delegate, eg: `socket.pongDelegate = self`

@abstr_code_section 

Or you can use closures.

@abstr_code_section 

One more: you can listen to socket connection and disconnection via notifications. Starscream posts `WebsocketDidConnectNotification` and `WebsocketDidDisconnectNotification`. You can find an `Error` that caused the disconection by accessing `WebsocketDisconnectionErrorKeyName` on notification `userInfo`.

## The delegate methods give you a simple way to handle data from the server, but how do you send data?

### write a binary frame

The writeData method gives you a simple way to send `Data` (binary) data to the server.

@abstr_code_section 

### write a string frame

The writeString method is the same as writeData, but sends text/string.

@abstr_code_section 

### write a ping frame

The writePing method is the same as write, but sends a ping control frame.

@abstr_code_section 

### write a pong frame

the writePong method is the same as writePing, but sends a pong control frame.

@abstr_code_section 

Starscream will automatically respond to incoming `ping` control frames so you do not need to manually send `pong`s.

However if for some reason you need to control this process you can turn off the automatic `ping` response by disabling `respondToPingWithPong`.

@abstr_code_section 

In most cases you will not need to do this.

### disconnect

The disconnect method does what you would expect and closes the socket.

@abstr_code_section 

The socket can be forcefully closed, by specifying a timeout (in milliseconds). A timeout of zero will also close the socket immediately without waiting on the server.

@abstr_code_section 

### isConnected

Returns if the socket is connected or not.

@abstr_code_section 

### Custom Headers

You can also override the default websocket headers with your own custom ones like so:

@abstr_code_section 

### Custom HTTP Method

Your server may use a different HTTP method when connecting to the websocket:

@abstr_code_section 

### Protocols

If you need to specify a protocol, simple add it to the init:

@abstr_code_section 

### Self Signed SSL

@abstr_code_section 

### SSL Pinning

SSL Pinning is also supported in Starscream.

@abstr_code_section You load either a `Data` blob of your certificate or you can use a `SecKeyRef` if you have a public key you want to use. The `usePublicKeys` bool is whether to use the certificates for validation or the public keys. The public keys will be extracted from the certificates automatically if `usePublicKeys` is choosen.

### SSL Cipher Suites

To use an SSL encrypted connection, you need to tell Starscream about the cipher suites your server supports. 

@abstr_code_section 

If you don't know which cipher suites are supported by your server, you can try pointing @abstr_hyperlink at it and checking the results.

### Compression Extensions

Compression Extensions ( @abstr_hyperlink ) is supported in Starscream. Compression is enabled by default, however compression will only be used if it is supported by the server as well. You may enable or disable compression via the `.enableCompression` property:

@abstr_code_section 

Compression should be disabled if your application is transmitting already-compressed, random, or other uncompressable data.

### Custom Queue

A custom queue can be specified when delegate methods are called. By default `DispatchQueue.main` is used, thus making all delegate methods calls run on the main thread. It is important to note that all WebSocket processing is done on a background thread, only the delegate method calls are changed when modifying the queue. The actual processing is always on a background thread and will not pause your app.

@abstr_code_section 

## Example Project

Check out the SimpleTest project in the examples directory to see how to setup a simple connection to a WebSocket server.

## Requirements

Starscream works with iOS @abstr_number /OSX @abstr_number . @abstr_number or above. It is recommended to use iOS @abstr_number / @abstr_number . @abstr_number or above for CocoaPods/framework support. To use Starscream with a project targeting iOS @abstr_number , you must include all Swift files directly in your project.

## Installation

### CocoaPods

Check out @abstr_hyperlink tab on @abstr_hyperlink .

To use Starscream in your project add the following 'Podfile' to your project
    
    
    source 'https://github.com/CocoaPods/Specs.git'
    platform :ios, ' @abstr_number . @abstr_number '
    use_frameworks!
    
    pod 'Starscream', '~>  @abstr_number . @abstr_number . @abstr_number '
    

Then run:
    
    
    pod install
    

### Carthage

Check out the @abstr_hyperlink docs on how to add a install. The `Starscream` framework is already setup with shared schemes.

@abstr_hyperlink 

You can install Carthage with @abstr_hyperlink using the following command:

@abstr_code_section 

To integrate Starscream into your Xcode project using Carthage, specify it in your `Cartfile`:

@abstr_code_section 

### Accio

Check out the @abstr_hyperlink docs on how to add a install. 

Add the following to your Package.swift:

@abstr_code_section 

Next, add `Starscream` to your App targets dependencies like so:

@abstr_code_section 

Then run `accio update`.

### Rogue

First see the @abstr_hyperlink for how to install Rogue.

To install Starscream run the command below in the directory you created the rogue file.

@abstr_code_section 

Next open the `libs` folder and add the `Starscream.xcodeproj` to your Xcode project. Once that is complete, in your "Build Phases" add the `Starscream.framework` to your "Link Binary with Libraries" phase. Make sure to add the `libs` folder to your `.gitignore` file.

### Swift Package Manager

The @abstr_hyperlink is a tool for automating the distribution of Swift code and is integrated into the `swift` compiler.

Once you have your Swift package set up, adding Starscream as a dependency is as easy as adding it to the `dependencies` value of your `Package.swift`.

@abstr_code_section 

### Other

Simply grab the framework (either via git submodule or another package manager).

Add the `Starscream.xcodeproj` to your Xcode project. Once that is complete, in your "Build Phases" add the `Starscream.framework` to your "Link Binary with Libraries" phase.

### Add Copy Frameworks Phase

If you are running this in an OSX app or on a physical iOS device you will need to make sure you add the `Starscream.framework` to be included in your app bundle. To do this, in Xcode, navigate to the target configuration window by clicking on the blue project icon, and selecting the application target under the "Targets" heading in the sidebar. In the tab bar at the top of that window, open the "Build Phases" panel. Expand the "Link Binary with Libraries" group, and add `Starscream.framework`. Click on the + button at the top left of the panel and select "New Copy Files Phase". Rename this new phase to "Copy Frameworks", set the "Destination" to "Frameworks", and add `Starscream.framework` respectively.

## WebSocketAdvancedDelegate

The advanced delegate acts just like the simpler delegate but provides some additional information on the connection and incoming frames.

@abstr_code_section 

In most cases you do not need the extra info and should use the normal delegate.

#### websocketDidReceiveMessage

@abstr_code_section 

#### websocketDidReceiveData

@abstr_code_section 

#### websocketHttpUpgrade

These methods are called when the HTTP upgrade request is sent and when the response returns. @abstr_code_section 

@abstr_code_section 

## Swift versions

  * Swift @abstr_number . @abstr_number - @abstr_number . @abstr_number . @abstr_number 



## KNOWN ISSUES

  * WatchOS does not have the the CFNetwork String constants to modify the stream's SSL behavior. It will be the default Foundation SSL behavior. This means watchOS CANNOT use `SSLCiphers`, `disableSSLCertValidation`, or SSL pinning. All these values set on watchOS will do nothing. 
  * Linux does not have the security framework, so it CANNOT use SSL pinning or `SSLCiphers` either. 



## TODOs

  * [ ] Add Unit Tests - Local WebSocket server that runs against Autobahn



## License

Starscream is licensed under the Apache v @abstr_number License.

## Contact

### Dalton Cherry

  * https://github.com/daltoniam
  * http://twitter.com/daltoniam
  * http://daltoniam.com



### Austin Cherry

  * https://github.com/acmacalister
  * http://twitter.com/acmacalister
  * http://austincherry.me


