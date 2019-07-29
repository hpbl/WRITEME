## Overview

gRPC-Web provides a Javascript library that lets browser clients access a gRPC service. You can find out much more about gRPC in its own @abstr_hyperlink .

gRPC-Web is now Generally Available, and considered stable enough for production use.

gRPC-Web clients connect to gRPC services via a special gateway proxy: the current version of the library uses @abstr_hyperlink by default, in which gRPC-Web support is built-in.

In the future, we expect gRPC-Web to be supported in language-specific Web frameworks, such as Python, Java, and Node. See the @abstr_hyperlink doc.

## Quick Start Guide: Hello World

You can follow the @abstr_hyperlink to get started with gRPC-Web quickly.

From the guide, you will learn how to \- Define your service using protocol buffers \- Implement a simple gRPC Service using NodeJS \- Configure the Envoy proxy \- Generate protobuf message classes and client service stub for the client \- Compile all the JS dependencies into a static library that can be consumed by the browser easily

## Advanced Demo: Browser Echo App

You can also try to run a more advanced Echo app from the browser with a streaming example.

From the repo root directory:

@abstr_code_section 

Open a browser tab, and go to:

@abstr_code_section 

To shutdown: `docker-compose down`.

## Runtime Library

The gRPC-Web runtime library is available at `npm`:

@abstr_code_section 

## Code Generator Plugin

You can download the `protoc-gen-grpc-web` protoc plugin from our @abstr_hyperlink page:

If you don't already have `protoc` installed, you will have to download it first from @abstr_hyperlink .

Make sure they are both executable and are discoverable from your PATH.

For example, in MacOS, you can do:

@abstr_code_section 

## Client Configuration Options

Typically, you will run the following command to generate the proto messages and the service client stub from your `.proto` definitions:

@abstr_code_section 

You can then use Browserify, Webpack, Closure Compiler, etc. to resolve imports at compile time.

### Import Style

`import_style=closure`: The default generated code has @abstr_hyperlink `goog.require()` import style.

`import_style=commonjs`: The @abstr_hyperlink style `require()` is also supported.

`import_style=commonjs+dts`: (Experimental) In addition to above, a `.d.ts` typings file will also be generated for the protobuf messages and service stub.

`import_style=typescript`: (Experimental) The service stub will be generated in TypeScript.

**Note:`commonjs+dts` and `typescript` only works with `--grpc-web_out=` import style.**

### Wire Format Mode

For more information about the gRPC-Web wire format, please see the @abstr_hyperlink here.

`mode=grpcwebtext`: The default generated code sends the payload in the `grpc-web-text` format.

  * `Content-type: application/grpc-web-text`
  * Payload are base @abstr_number -encoded.
  * Both unary and server streaming calls are supported.



`mode=grpcweb`: A binary protobuf format is also supported.

  * `Content-type: application/grpc-web+proto`
  * Payload are in the binary protobuf format.
  * Only unary calls are supported for now.



## How It Works

Let's take a look at how gRPC-Web works with a simple example. You can find out how to build, run and explore the example yourself in Build and Run the Echo Example.

### @abstr_number . Define your service

The first step when creating any gRPC service is to define it. Like all gRPC services, gRPC-Web uses @abstr_hyperlink to define its RPC service methods and their message request and response types.

@abstr_code_section 

### @abstr_number . Run the server and proxy

Next you need to have a gRPC server that implements the service interface and a gateway proxy that allows the client to connect to the server. Our example builds a simple Node gRPC backend server and the Envoy proxy.

For the Echo service: see the @abstr_hyperlink .

For the Envoy proxy: see the @abstr_hyperlink .

### @abstr_number . Write your JS client

Once the server and gateway are up and running, you can start making gRPC calls from the browser!

Create your client

@abstr_code_section 

Make a unary RPC call

@abstr_code_section 

Server-side streaming is supported!

@abstr_code_section 

You can find a more in-depth tutorial from @abstr_hyperlink .

## Setting Deadline

You can set a deadline for your RPC by setting a `deadline` header. The value should be a Unix timestamp, in milliseconds.

@abstr_code_section 

## TypeScript Support

The `grpc-web` module can now be imported as a TypeScript module. This is currently an experimental feature. Any feedback welcome!

When using the `protoc-gen-grpc-web` protoc plugin, mentioned above, pass in either:

  * `import_style=commonjs+dts`: existing CommonJS style stub + `.d.ts` typings
  * `import_style=typescript`: full TypeScript output

@abstr_code_section 




See a full TypeScript example @abstr_hyperlink .

## Proxy Interoperability

Multiple proxies supports the gRPC-Web protocol. Currently, the default proxy is @abstr_hyperlink , which supports gRPC-Web out of the box.

@abstr_code_section 

An alternative is to build Nginx that comes with this repository.

@abstr_code_section 

You can also try this @abstr_hyperlink .

@abstr_code_section 

## Acknowledgement

Big thanks to the following contributors for making significant contributions to this project!

  * @abstr_hyperlink : NPM package, CommonJS
  * @abstr_hyperlink : Bazel
  * @abstr_hyperlink : Codegen enhancements
  * @abstr_hyperlink : Codegen enhancements
  * @abstr_hyperlink : Doc fixes
  * @abstr_hyperlink : TypeScript
  * @abstr_hyperlink : Codgen bugfix
  * @abstr_hyperlink : Timeout example
  * @abstr_hyperlink : Codegen enhancements
  * @abstr_hyperlink : Codegen bugfix
  * @abstr_hyperlink : Update Node example
  * @abstr_hyperlink : Bazel, Closure
  * @abstr_hyperlink : Codegen enhancements and bugfixes


