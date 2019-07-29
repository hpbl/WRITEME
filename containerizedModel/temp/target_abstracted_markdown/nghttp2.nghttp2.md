# nghttp @abstr_number - HTTP/ @abstr_number C Library

This is an implementation of the Hypertext Transfer Protocol version @abstr_number in C.

The framing layer of HTTP/ @abstr_number is implemented as a reusable C library. On top of that, we have implemented an HTTP/ @abstr_number client, server and proxy. We have also developed load test and benchmarking tools for HTTP/ @abstr_number .

An HPACK encoder and decoder are available as a public API.

An experimental high level C++ library is also available.

We have Python bindings of this library, but we do not have full code coverage yet.

## Development Status

We have implemented `RFC @abstr_number <https://tools.ietf.org/html/rfc @abstr_number >`_ HTTP/ @abstr_number and `RFC @abstr_number <https://tools.ietf.org/html/rfc @abstr_number >`_ HPACK - Header Compression for HTTP/ @abstr_number 

The nghttp @abstr_number code base was forked from the spdylay (https://github.com/tatsuhiro-t/spdylay) project.

## Public Test Server

The following endpoints are available to try out our nghttp @abstr_number implementation.

  * https://nghttp @abstr_number .org/ (TLS + ALPN/NPN)

This endpoint supports `h @abstr_number`, `h @abstr_number - @abstr_number`, `h @abstr_number - @abstr_number`, and `http/ @abstr_number . @abstr_number` via ALPN/NPN and requires TLSv @abstr_number . @abstr_number for HTTP/ @abstr_number connection.

  * http://nghttp @abstr_number .org/ (HTTP Upgrade and HTTP/ @abstr_number Direct)

`h @abstr_number c` and `http/ @abstr_number . @abstr_number`.




## Requirements

The following package is required to build the libnghttp @abstr_number library:

  * pkg-config >= @abstr_number . @abstr_number 



To build and run the unit test programs, the following package is required:

  * cunit >= @abstr_number . @abstr_number 



To build the documentation, you need to install:

  * sphinx (http://sphinx-doc.org/)



If you need libnghttp @abstr_number (C library) only, then the above packages are all you need. Use `--enable-lib-only` to ensure that only libnghttp @abstr_number is built. This avoids potential build error related to building bundled applications.

To build and run the application programs (`nghttp`, `nghttpd`, `nghttpx` and `h @abstr_number load`) in the `src` directory, the following packages are required:

  * OpenSSL >= @abstr_number . @abstr_number . @abstr_number 
  * libev >= @abstr_number . @abstr_number 
  * zlib >= @abstr_number . @abstr_number . @abstr_number 
  * libc-ares >= @abstr_number . @abstr_number . @abstr_number 



ALPN support requires OpenSSL >= @abstr_number . @abstr_number . @abstr_number (released @abstr_number January @abstr_number ). LibreSSL >= @abstr_number . @abstr_number . @abstr_number can be used instead of OpenSSL, but OpenSSL has more features than LibreSSL at the time of this writing.

To enable `-a` option (getting linked assets from the downloaded resource) in `nghttp`, the following package is required:

  * libxml @abstr_number >= @abstr_number . @abstr_number . @abstr_number 



To enable systemd support in nghttpx, the following package is required:

  * libsystemd-dev >= @abstr_number 



The HPACK tools require the following package:

  * jansson >= @abstr_number . @abstr_number 



To build sources under the examples directory, libevent is required:

  * libevent-openssl >= @abstr_number . @abstr_number . @abstr_number 



To mitigate heap fragmentation in long running server programs (`nghttpd` and `nghttpx`), jemalloc is recommended:

  * jemalloc

.. note::

Alpine Linux currently does not support malloc replacement due to musl limitations. See details in issue `# @abstr_number <https://github.com/nghttp @abstr_number /nghttp @abstr_number /issues/ @abstr_number >`_.




libnghttp @abstr_number _asio C++ library requires the following packages:

  * libboost-dev >= @abstr_number . @abstr_number . @abstr_number 
  * libboost-thread-dev >= @abstr_number . @abstr_number . @abstr_number 



The Python bindings require the following packages:

  * cython >= @abstr_number . @abstr_number 
  * python >= @abstr_number . @abstr_number 
  * python-setuptools



If you are using Ubuntu @abstr_number . @abstr_number LTS (Xenial Xerus) or Debian @abstr_number (jessie) and above, run the following to install the required packages:

.. code-block:: text
    
    
    sudo apt-get install g++ make binutils autoconf automake autotools-dev libtool pkg-config \
      zlib @abstr_number g-dev libcunit @abstr_number -dev libssl-dev libxml @abstr_number -dev libev-dev libevent-dev libjansson-dev \
      libc-ares-dev libjemalloc-dev libsystemd-dev \
      cython python @abstr_number -dev python-setuptools
    

To enable mruby support for nghttpx, `mruby <https://github.com/mruby/mruby>`_ is required. We need to build mruby with C++ ABI explicitly turned on, and probably need other mrgems, mruby is manged by git submodule under third-party/mruby directory. Currently, mruby support for nghttpx is disabled by default. To enable mruby support, use `--with-mruby` configure option. Note that at the time of this writing, libmruby-dev and mruby packages in Debian/Ubuntu are not usable for nghttp @abstr_number , since they do not enable C++ ABI. To build mruby, the following packages are required:

  * ruby
  * bison



nghttpx supports `neverbleed <https://github.com/h @abstr_number o/neverbleed>`_, privilege separation engine for OpenSSL / LibreSSL. In short, it minimizes the risk of private key leakage when serious bug like Heartbleed is exploited. The neverbleed is disabled by default. To enable it, use `--with-neverbleed` configure option.

Compiling libnghttp @abstr_number C source code requires a C @abstr_number compiler. gcc @abstr_number . @abstr_number is known to be adequate. In order to compile the C++ source code, gcc

> = @abstr_number . @abstr_number or clang >= @abstr_number . @abstr_number is required. C++ source code requires C++ @abstr_number language features.

.. note::

To enable mruby support in nghttpx, and use `--with-mruby` configure option.

.. note::

Mac OS X users may need the `--disable-threads` configure option to disable multi-threading in nghttpd, nghttpx and h @abstr_number load to prevent them from crashing. A patch is welcome to make multi threading work on Mac OS X platform.

.. note::

To compile the associated applications (nghttp, nghttpd, nghttpx and h @abstr_number load), you must use the `--enable-app` configure option and ensure that the specified requirements above are met. Normally, configure script checks required dependencies to build these applications, and enable `--enable-app` automatically, so you don't have to use it explicitly. But if you found that applications were not built, then using `--enable-app` may find that cause, such as the missing dependency.

.. note::

In order to detect third party libraries, pkg-config is used (however we don't use pkg-config for some libraries (e.g., libev)). By default, pkg-config searches `*.pc` file in the standard locations (e.g., /usr/lib/pkgconfig). If it is necessary to use `*.pc` file in the custom location, specify paths to `PKG_CONFIG_PATH` environment variable, and pass it to configure script, like so:

.. code-block:: text
    
    
       $ ./configure PKG_CONFIG_PATH=/path/to/pkgconfig
    

For pkg-config managed libraries, `*_CFLAG` and `*_LIBS` environment variables are defined (e.g., `OPENSSL_CFLAGS`, `OPENSSL_LIBS`). Specifying non-empty string to these variables completely overrides pkg-config. In other words, if they are specified, pkg-config is not used for detection, and user is responsible to specify the correct values to these variables. For complete list of these variables, run `./configure -h`.

## Building nghttp @abstr_number from release tar archive

The nghttp @abstr_number project regularly releases tar archives which includes nghttp @abstr_number source code, and generated build files. They can be downloaded from `Releases <https://github.com/nghttp @abstr_number /nghttp @abstr_number /releases>`_ page.

Building nghttp @abstr_number from git requires autotools development packages. Building from tar archives does not require them, and thus it is much easier. The usual build step is as follows:

.. code-block:: text
    
    
    $ tar xf nghttp @abstr_number -X.Y.Z.tar.bz @abstr_number 
    $ cd nghttp @abstr_number -X.Y.Z
    $ ./configure
    $ make
    

## Building from git

Building from git is easy, but please be sure that at least autoconf @abstr_number . @abstr_number is used:

.. code-block:: text
    
    
    $ git submodule update --init
    $ autoreconf -i
    $ automake
    $ autoconf
    $ ./configure
    $ make
    

## Notes for building on Windows (MSVC)

The easiest way to build native Windows nghttp @abstr_number dll is use `cmake <https://cmake.org/>`_. The free version of `Visual C++ Build Tools <http://landinghub.visualstudio.com/visual-cpp-build-tools>`_ works fine.

@abstr_number . Install cmake for windows @abstr_number . Open "Visual C++ ... Native Build Tool Command Prompt", and inside nghttp @abstr_number directly, run `cmake`. @abstr_number . Then run `cmake --build` to build library. @abstr_number . nghttp @abstr_number .dll, nghttp @abstr_number .lib, nghttp @abstr_number .exp are placed under lib directory.

Note that the above steps most likely produce nghttp @abstr_number library only. No bundled applications are compiled.

## Notes for building on Windows (Mingw/Cygwin)

Under Mingw environment, you can only compile the library, it's `libnghttp @abstr_number -X.dll` and `libnghttp @abstr_number .a`.

If you want to compile the applications(`h @abstr_number load`, `nghttp`, `nghttpx`, `nghttpd`), you need to use the Cygwin environment.

Under Cygwin environment, to compile the applications you need to compile and install the libev first.

Secondly, you need to undefine the macro `__STRICT_ANSI__`, if you not, the functions `fdopen`, `fileno` and `strptime` will not available.

the sample command like this:

.. code-block:: text
    
    
    $ export CFLAGS="-U__STRICT_ANSI__ -I$libev_PREFIX/include -L$libev_PREFIX/lib"
    $ export CXXFLAGS=$CFLAGS
    $ ./configure
    $ make
    

If you want to compile the applications under `examples/`, you need to remove or rename the `event.h` from libev's installation, because it conflicts with libevent's installation.

## Notes for installation on Linux systems

After installing nghttp @abstr_number tool suite with `make install` one might experience a similar error:

.. code-block:: text
    
    
    nghttpx: error while loading shared libraries: libnghttp @abstr_number .so. @abstr_number : cannot open shared object file: No such file or directory
    

This means that the tool is unable to locate the `libnghttp @abstr_number .so` shared library.

To update the shared library cache run `sudo ldconfig`.

## Building the documentation

.. note::

Documentation is still incomplete.

To build the documentation, run:

.. code-block:: text
    
    
    $ make html
    

The documents will be generated under `doc/manual/html/`.

The generated documents will not be installed with `make install`.

The online documentation is available at https://nghttp @abstr_number .org/documentation/

## Unit tests

Unit tests are done by simply running `make check`.

## Integration tests

We have the integration tests for the nghttpx proxy server. The tests are written in the `Go programming language <http://golang.org/>`_ and uses its testing framework. We depend on the following libraries:

  * golang.org/x/net/http @abstr_number 
  * golang.org/x/net/websocket
  * https://github.com/tatsuhiro-t/go-nghttp @abstr_number 



Go modules will download these dependencies automatically.

To run the tests, run the following command under `integration-tests` directory:

.. code-block:: text
    
    
    $ make it
    

Inside the tests, we use port @abstr_number to run the test subject server.

## Migration from v @abstr_number . @abstr_number . @abstr_number or earlier

nghttp @abstr_number v @abstr_number . @abstr_number . @abstr_number introduced several backward incompatible changes. In this section, we describe these changes and how to migrate to v @abstr_number . @abstr_number . @abstr_number .

ALPN protocol ID is now `h @abstr_number` and `h @abstr_number c` ++++++++++++++++++++++++++++++++++++++++++

Previously we announced `h @abstr_number - @abstr_number` and `h @abstr_number c- @abstr_number`. v @abstr_number . @abstr_number . @abstr_number implements final protocol version, and we changed ALPN ID to `h @abstr_number` and `h @abstr_number c`. The macros `NGHTTP @abstr_number _PROTO_VERSION_ID`, `NGHTTP @abstr_number _PROTO_VERSION_ID_LEN`, `NGHTTP @abstr_number _CLEARTEXT_PROTO_VERSION_ID`, and `NGHTTP @abstr_number _CLEARTEXT_PROTO_VERSION_ID_LEN` have been updated to reflect this change.

Basically, existing applications do not have to do anything, just recompiling is enough for this change.

Use word "client magic" where we use "client connection preface" ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

We use "client connection preface" to mean first @abstr_number bytes of client connection preface. This is technically not correct, since client connection preface is composed of @abstr_number bytes client magic byte string followed by SETTINGS frame. For clarification, we call "client magic" for this @abstr_number bytes byte string and updated API.

  * `NGHTTP @abstr_number _CLIENT_CONNECTION_PREFACE` was replaced with `NGHTTP @abstr_number _CLIENT_MAGIC`.
  * `NGHTTP @abstr_number _CLIENT_CONNECTION_PREFACE_LEN` was replaced with `NGHTTP @abstr_number _CLIENT_MAGIC_LEN`.
  * `NGHTTP @abstr_number _BAD_PREFACE` was renamed as `NGHTTP @abstr_number _BAD_CLIENT_MAGIC`



The already deprecated `NGHTTP @abstr_number _CLIENT_CONNECTION_HEADER` and `NGHTTP @abstr_number _CLIENT_CONNECTION_HEADER_LEN` were removed.

If application uses these macros, just replace old ones with new ones. Since v @abstr_number . @abstr_number . @abstr_number , client magic is sent by library (see next subsection), so client application may just remove these macro use.

Client magic is sent by library +++++++++++++++++++++++++++++++

Previously nghttp @abstr_number library did not send client magic, which is first @abstr_number bytes byte string of client connection preface, and client applications have to send it by themselves. Since v @abstr_number . @abstr_number . @abstr_number , client magic is sent by library via first call of `nghttp @abstr_number _session_send()` or `nghttp @abstr_number _session_mem_send()`.

The client applications which send client magic must remove the relevant code.

Remove HTTP Alternative Services (Alt-Svc) related code +++++++++++++++++++++++++++++++++++++++++++++++++++++++

Alt-Svc specification is not finalized yet. To make our API stable, we have decided to remove all Alt-Svc related API from nghttp @abstr_number .

  * `NGHTTP @abstr_number _EXT_ALTSVC` was removed.
  * `nghttp @abstr_number _ext_altsvc` was removed.



We have already removed the functionality of Alt-Svc in v @abstr_number . @abstr_number series and they have been essentially noop. The application using these macro and struct, remove those lines.

Use nghttp @abstr_number _error in nghttp @abstr_number _on_invalid_frame_recv_callback +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Previously `nghttp @abstr_number _on_invalid_frame_recv_cb_called` took the `error_code`, defined in `nghttp @abstr_number _error_code`, as parameter. But they are not detailed enough to debug. Therefore, we decided to use more detailed `nghttp @abstr_number _error` values instead.

The application using this callback should update the callback signature. If it treats `error_code` as HTTP/ @abstr_number error code, update the code so that it is treated as `nghttp @abstr_number _error`.

Receive client magic by default +++++++++++++++++++++++++++++++

Previously nghttp @abstr_number did not process client magic ( @abstr_number bytes byte string). To make it deal with it, we had to use `nghttp @abstr_number _option_set_recv_client_preface()`. Since v @abstr_number . @abstr_number . @abstr_number , nghttp @abstr_number processes client magic by default and `nghttp @abstr_number _option_set_recv_client_preface()` was removed.

Some application may want to disable this behaviour, so we added `nghttp @abstr_number _option_set_no_recv_client_magic()` to achieve this.

The application using `nghttp @abstr_number _option_set_recv_client_preface()` with nonzero value, just remove it.

The application using `nghttp @abstr_number _option_set_recv_client_preface()` with zero value or not using it must use `nghttp @abstr_number _option_set_no_recv_client_magic()` with nonzero value.

## Client, Server and Proxy programs

The `src` directory contains the HTTP/ @abstr_number client, server and proxy programs.

nghttp - client +++++++++++++++

`nghttp` is a HTTP/ @abstr_number client. It can connect to the HTTP/ @abstr_number server with prior knowledge, HTTP Upgrade and NPN/ALPN TLS extension.

It has verbose output mode for framing information. Here is sample output from `nghttp` client:

.. code-block:: text
    
    
    $ nghttp -nv https://nghttp @abstr_number .org
    [   @abstr_number . @abstr_number ] Connected
    The negotiated protocol: h @abstr_number 
    [   @abstr_number . @abstr_number ] recv SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (niv= @abstr_number )
          [SETTINGS_MAX_CONCURRENT_STREAMS( @abstr_number x @abstr_number ): @abstr_number ]
          [SETTINGS_INITIAL_WINDOW_SIZE( @abstr_number x @abstr_number ): @abstr_number ]
    [   @abstr_number . @abstr_number ] send SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (niv= @abstr_number )
          [SETTINGS_MAX_CONCURRENT_STREAMS( @abstr_number x @abstr_number ): @abstr_number ]
          [SETTINGS_INITIAL_WINDOW_SIZE( @abstr_number x @abstr_number ): @abstr_number ]
    [   @abstr_number . @abstr_number ] send SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; ACK
          (niv= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] send HEADERS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_STREAM | END_HEADERS | PRIORITY
          (padlen= @abstr_number , dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
          ; Open new stream
          :method: GET
          :path: /
          :scheme: https
          :authority: nghttp @abstr_number .org
          accept: */*
          accept-encoding: gzip, deflate
          user-agent: nghttp @abstr_number / @abstr_number . @abstr_number . @abstr_number -DEV
    [   @abstr_number . @abstr_number ] recv SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; ACK
          (niv= @abstr_number )
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :method: GET
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :scheme: https
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :path: /stylesheets/screen.css
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :authority: nghttp @abstr_number .org
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) accept-encoding: gzip, deflate
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) user-agent: nghttp @abstr_number / @abstr_number . @abstr_number . @abstr_number -DEV
    [   @abstr_number . @abstr_number ] recv PUSH_PROMISE frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_HEADERS
          (padlen= @abstr_number , promised_stream_id= @abstr_number )
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :status:  @abstr_number 
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) date: Thu,  @abstr_number  May  @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) content-type: text/html
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) last-modified: Fri,  @abstr_number  May  @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) etag: W/" @abstr_number de- @abstr_number f @abstr_number "
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) link: </stylesheets/screen.css>; rel=preload; as=stylesheet
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) content-encoding: gzip
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) server: nghttpx nghttp @abstr_number / @abstr_number . @abstr_number . @abstr_number -DEV
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) via:  @abstr_number . @abstr_number  nghttpx
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) strict-transport-security: max-age= @abstr_number 
    [   @abstr_number . @abstr_number ] recv HEADERS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_HEADERS
          (padlen= @abstr_number )
          ; First response header
    [   @abstr_number . @abstr_number ] recv DATA frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_STREAM
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :status:  @abstr_number 
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) date: Thu,  @abstr_number  May  @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) content-type: text/css
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) last-modified: Fri,  @abstr_number  May  @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) etag: W/" @abstr_number de- @abstr_number "
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) content-encoding: gzip
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) server: nghttpx nghttp @abstr_number / @abstr_number . @abstr_number . @abstr_number -DEV
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) via:  @abstr_number . @abstr_number  nghttpx
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) strict-transport-security: max-age= @abstr_number 
    [   @abstr_number . @abstr_number ] recv HEADERS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_HEADERS
          (padlen= @abstr_number )
          ; First push response header
    [   @abstr_number . @abstr_number ] recv DATA frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_STREAM
    [   @abstr_number . @abstr_number ] send GOAWAY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (last_stream_id= @abstr_number , error_code=NO_ERROR( @abstr_number x @abstr_number ), opaque_data( @abstr_number )=[])
    

The HTTP Upgrade is performed like so:

.. code-block:: text
    
    
    $ nghttp -nvu http://nghttp @abstr_number .org
    [   @abstr_number . @abstr_number ] Connected
    [   @abstr_number . @abstr_number ] HTTP Upgrade request
    GET / HTTP/ @abstr_number . @abstr_number 
    Host: nghttp @abstr_number .org
    Connection: Upgrade, HTTP @abstr_number -Settings
    Upgrade: h @abstr_number c
    HTTP @abstr_number -Settings: AAMAAABkAAQAAP__
    Accept: */*
    User-Agent: nghttp @abstr_number / @abstr_number . @abstr_number . @abstr_number -DEV
    
    
    [   @abstr_number . @abstr_number ] HTTP Upgrade response
    HTTP/ @abstr_number . @abstr_number   @abstr_number  Switching Protocols
    Connection: Upgrade
    Upgrade: h @abstr_number c
    
    
    [   @abstr_number . @abstr_number ] HTTP Upgrade success
    [   @abstr_number . @abstr_number ] recv SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (niv= @abstr_number )
          [SETTINGS_MAX_CONCURRENT_STREAMS( @abstr_number x @abstr_number ): @abstr_number ]
          [SETTINGS_INITIAL_WINDOW_SIZE( @abstr_number x @abstr_number ): @abstr_number ]
    [   @abstr_number . @abstr_number ] send SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (niv= @abstr_number )
          [SETTINGS_MAX_CONCURRENT_STREAMS( @abstr_number x @abstr_number ): @abstr_number ]
          [SETTINGS_INITIAL_WINDOW_SIZE( @abstr_number x @abstr_number ): @abstr_number ]
    [   @abstr_number . @abstr_number ] send SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; ACK
          (niv= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] send PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :method: GET
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :scheme: http
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :path: /stylesheets/screen.css
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) host: nghttp @abstr_number .org
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) user-agent: nghttp @abstr_number / @abstr_number . @abstr_number . @abstr_number -DEV
    [   @abstr_number . @abstr_number ] recv PUSH_PROMISE frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_HEADERS
          (padlen= @abstr_number , promised_stream_id= @abstr_number )
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :status:  @abstr_number 
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) date: Thu,  @abstr_number  May  @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) content-type: text/html
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) content-length:  @abstr_number 
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) last-modified: Fri,  @abstr_number  May  @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) etag: " @abstr_number de- @abstr_number f @abstr_number "
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) link: </stylesheets/screen.css>; rel=preload; as=stylesheet
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) accept-ranges: bytes
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) server: nghttpx nghttp @abstr_number / @abstr_number . @abstr_number . @abstr_number -DEV
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) via:  @abstr_number . @abstr_number  nghttpx
    [   @abstr_number . @abstr_number ] recv HEADERS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_HEADERS
          (padlen= @abstr_number )
          ; First response header
    [   @abstr_number . @abstr_number ] recv DATA frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_STREAM
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :status:  @abstr_number 
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) date: Thu,  @abstr_number  May  @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) content-type: text/css
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) content-length:  @abstr_number 
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) last-modified: Fri,  @abstr_number  May  @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) etag: " @abstr_number de- @abstr_number "
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) accept-ranges: bytes
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) server: nghttpx nghttp @abstr_number / @abstr_number . @abstr_number . @abstr_number -DEV
    [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) via:  @abstr_number . @abstr_number  nghttpx
    [   @abstr_number . @abstr_number ] recv HEADERS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_HEADERS
          (padlen= @abstr_number )
          ; First push response header
    [   @abstr_number . @abstr_number ] recv DATA frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
    [   @abstr_number . @abstr_number ] recv DATA frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
    [   @abstr_number . @abstr_number ] send WINDOW_UPDATE frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (window_size_increment= @abstr_number )
    [   @abstr_number . @abstr_number ] send WINDOW_UPDATE frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (window_size_increment= @abstr_number )
    [   @abstr_number . @abstr_number ] recv DATA frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; END_STREAM
    [   @abstr_number . @abstr_number ] recv SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          ; ACK
          (niv= @abstr_number )
    [   @abstr_number . @abstr_number ] send GOAWAY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
          (last_stream_id= @abstr_number , error_code=NO_ERROR( @abstr_number x @abstr_number ), opaque_data( @abstr_number )=[])
    

Using the `-s` option, `nghttp` prints out some timing information for requests, sorted by completion time:

.. code-block:: text
    
    
    $ nghttp -nas https://nghttp @abstr_number .org/
    ***** Statistics *****
    
    Request timing:
      responseEnd: the  time  when  last  byte of  response  was  received
                   relative to connectEnd
     requestStart: the time  just before  first byte  of request  was sent
                   relative  to connectEnd.   If  '*' is  shown, this  was
                   pushed by server.
          process: responseEnd - requestStart
             code: HTTP status code
             size: number  of  bytes  received as  response  body  without
                   inflation.
              URI: request URI
    
    see http://www.w @abstr_number .org/TR/resource-timing/#processing-model
    
    sorted by 'complete'
    
    id  responseEnd requestStart  process code size request path
      @abstr_number     + @abstr_number . @abstr_number ms       + @abstr_number us   @abstr_number . @abstr_number ms   @abstr_number     @abstr_number K /
       @abstr_number     + @abstr_number . @abstr_number ms *   + @abstr_number . @abstr_number ms   @abstr_number . @abstr_number ms   @abstr_number     @abstr_number K /stylesheets/screen.css
      @abstr_number     + @abstr_number . @abstr_number ms     + @abstr_number . @abstr_number ms   @abstr_number . @abstr_number ms   @abstr_number     @abstr_number K /javascripts/octopress.js
      @abstr_number     + @abstr_number . @abstr_number ms     + @abstr_number . @abstr_number ms   @abstr_number . @abstr_number ms   @abstr_number     @abstr_number K /javascripts/modernizr- @abstr_number . @abstr_number .js
    

Using the `-r` option, `nghttp` writes more detailed timing data to the given file in HAR format.

nghttpd - server ++++++++++++++++

`nghttpd` is a multi-threaded static web server.

By default, it uses SSL/TLS connection. Use `--no-tls` option to disable it.

`nghttpd` only accepts HTTP/ @abstr_number connections via NPN/ALPN or direct HTTP/ @abstr_number connections. No HTTP Upgrade is supported.

The `-p` option allows users to configure server push.

Just like `nghttp`, it has a verbose output mode for framing information. Here is sample output from `nghttpd`:

.. code-block:: text
    
    
    $ nghttpd --no-tls -v  @abstr_number 
    IPv @abstr_number : listen  @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number 
    IPv @abstr_number : listen ::: @abstr_number 
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] send SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              (niv= @abstr_number )
              [SETTINGS_MAX_CONCURRENT_STREAMS( @abstr_number x @abstr_number ): @abstr_number ]
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              (niv= @abstr_number )
              [SETTINGS_MAX_CONCURRENT_STREAMS( @abstr_number x @abstr_number ): @abstr_number ]
              [SETTINGS_INITIAL_WINDOW_SIZE( @abstr_number x @abstr_number ): @abstr_number ]
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              ; ACK
              (niv= @abstr_number )
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv PRIORITY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              (dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :method: GET
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :path: /
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :scheme: http
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) :authority: localhost: @abstr_number 
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) accept: */*
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) accept-encoding: gzip, deflate
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv (stream_id= @abstr_number ) user-agent: nghttp @abstr_number / @abstr_number . @abstr_number . @abstr_number -DEV
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv HEADERS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              ; END_STREAM | END_HEADERS | PRIORITY
              (padlen= @abstr_number , dep_stream_id= @abstr_number , weight= @abstr_number , exclusive= @abstr_number )
              ; Open new stream
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] send SETTINGS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              ; ACK
              (niv= @abstr_number )
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] send HEADERS frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              ; END_HEADERS
              (padlen= @abstr_number )
              ; First response header
              :status:  @abstr_number 
              server: nghttpd nghttp @abstr_number / @abstr_number . @abstr_number . @abstr_number -DEV
              content-length:  @abstr_number 
              cache-control: max-age= @abstr_number 
              date: Fri,  @abstr_number  May  @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT
              last-modified: Tue,  @abstr_number  Sep  @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] send DATA frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              ; END_STREAM
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] stream_id= @abstr_number  closed
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] recv GOAWAY frame <length= @abstr_number , flags= @abstr_number x @abstr_number , stream_id= @abstr_number >
              (last_stream_id= @abstr_number , error_code=NO_ERROR( @abstr_number x @abstr_number ), opaque_data( @abstr_number )=[])
    [id= @abstr_number ] [   @abstr_number . @abstr_number ] closed
    

nghttpx - proxy +++++++++++++++

`nghttpx` is a multi-threaded reverse proxy for HTTP/ @abstr_number , and HTTP/ @abstr_number . @abstr_number , and powers http://nghttp @abstr_number .org and supports HTTP/ @abstr_number server push.

We reworked `nghttpx` command-line interface, and as a result, there are several incompatibles from @abstr_number . @abstr_number . @abstr_number or earlier. This is necessary to extend its capability, and secure the further feature enhancements in the future release. Please read `Migration from nghttpx v @abstr_number . @abstr_number . @abstr_number or earlier <https://nghttp @abstr_number .org/documentation/nghttpx-howto.html#migration-from-nghttpx-v @abstr_number - @abstr_number - @abstr_number -or-earlier>`_ to know how to migrate from earlier releases.

`nghttpx` implements `important performance-oriented features <https://istlsfastyet.com/#server-performance>`_ in TLS, such as session IDs, session tickets (with automatic key rotation), OCSP stapling, dynamic record sizing, ALPN/NPN, forward secrecy and HTTP/ @abstr_number . `nghttpx` also offers the functionality to share session cache and ticket keys among multiple `nghttpx` instances via memcached.

`nghttpx` has @abstr_number operation modes:

================== ================ ================ ============= Mode option Frontend Backend Note ================== ================ ================ ============= default mode HTTP/ @abstr_number , HTTP/ @abstr_number . @abstr_number HTTP/ @abstr_number . @abstr_number , HTTP/ @abstr_number Reverse proxy `--http @abstr_number -proxy` HTTP/ @abstr_number , HTTP/ @abstr_number . @abstr_number HTTP/ @abstr_number . @abstr_number , HTTP/ @abstr_number Forward proxy ================== ================ ================ =============

The interesting mode at the moment is the default mode. It works like a reverse proxy and listens for HTTP/ @abstr_number , and HTTP/ @abstr_number . @abstr_number and can be deployed as a SSL/TLS terminator for existing web server.

In all modes, the frontend connections are encrypted by SSL/TLS by default. To disable encryption, use the `no-tls` keyword in `--frontend` option. If encryption is disabled, incoming HTTP/ @abstr_number . @abstr_number connections can be upgraded to HTTP/ @abstr_number through HTTP Upgrade. On the other hard, backend connections are not encrypted by default. To encrypt backend connections, use `tls` keyword in `--backend` option.

`nghttpx` supports a configuration file. See the `--conf` option and sample configuration file `nghttpx.conf.sample`.

In the default mode, `nghttpx` works as reverse proxy to the backend server:

.. code-block:: text
    
    
    Client <-- (HTTP/ @abstr_number , HTTP/ @abstr_number . @abstr_number ) --> nghttpx <-- (HTTP/ @abstr_number . @abstr_number , HTTP/ @abstr_number ) --> Web Server
                                    [reverse proxy]
    

With the `--http @abstr_number -proxy` option, it works as forward proxy, and it is so called secure HTTP/ @abstr_number proxy:

.. code-block:: text
    
    
    Client <-- (HTTP/ @abstr_number , HTTP/ @abstr_number . @abstr_number ) --> nghttpx <-- (HTTP/ @abstr_number . @abstr_number ) --> Proxy
                                     [secure proxy]          (e.g., Squid, ATS)
    

The `Client` in the above example needs to be configured to use `nghttpx` as secure proxy.

At the time of this writing, both Chrome and Firefox support secure HTTP/ @abstr_number proxy. One way to configure Chrome to use a secure proxy is to create a proxy.pac script like this:

.. code-block:: javascript
    
    
    function FindProxyForURL(url, host) {
        return "HTTPS SERVERADDR:PORT";
    }
    

`SERVERADDR` and `PORT` is the hostname/address and port of the machine nghttpx is running on. Please note that Chrome requires a valid certificate for secure proxy.

Then run Chrome with the following arguments:

.. code-block:: text
    
    
    $ google-chrome --proxy-pac-url=file:///path/to/proxy.pac --use-npn
    

The backend HTTP/ @abstr_number connections can be tunneled through an HTTP proxy. The proxy is specified using `--backend-http-proxy-uri`. The following figure illustrates how nghttpx talks to the outside HTTP/ @abstr_number proxy through an HTTP proxy:

.. code-block:: text
    
    
    Client <-- (HTTP/ @abstr_number , HTTP/ @abstr_number . @abstr_number ) --> nghttpx <-- (HTTP/ @abstr_number ) --
    
            --===================---> HTTP/ @abstr_number  Proxy
              (HTTP proxy tunnel)     (e.g., nghttpx -s)
    

## Benchmarking tool

The `h @abstr_number load` program is a benchmarking tool for HTTP/ @abstr_number . The UI of `h @abstr_number load` is heavily inspired by `weighttp` (https://github.com/lighttpd/weighttp). The typical usage is as follows:

.. code-block:: text
    
    
    $ h @abstr_number load -n @abstr_number  -c @abstr_number  -m @abstr_number  https://localhost: @abstr_number /
    starting benchmark...
    spawning thread # @abstr_number :  @abstr_number  concurrent clients,  @abstr_number  total requests
    Protocol: TLSv @abstr_number . @abstr_number 
    Cipher: ECDHE-RSA-AES @abstr_number -GCM-SHA @abstr_number 
    Server Temp Key: ECDH P- @abstr_number   @abstr_number  bits
    progress:  @abstr_number % done
    progress:  @abstr_number % done
    progress:  @abstr_number % done
    progress:  @abstr_number % done
    progress:  @abstr_number % done
    progress:  @abstr_number % done
    progress:  @abstr_number % done
    progress:  @abstr_number % done
    progress:  @abstr_number % done
    progress:  @abstr_number % done
    
    finished in  @abstr_number . @abstr_number ms,  @abstr_number  req/s,  @abstr_number . @abstr_number MB/s
    requests:  @abstr_number  total,  @abstr_number  started,  @abstr_number  done,  @abstr_number  succeeded,  @abstr_number  failed,  @abstr_number  errored
    status codes:  @abstr_number   @abstr_number xx,  @abstr_number   @abstr_number xx,  @abstr_number   @abstr_number xx,  @abstr_number   @abstr_number xx
    traffic:  @abstr_number  bytes total,  @abstr_number  bytes headers,  @abstr_number  bytes data
                         min         max         mean         sd        +/- sd
    time for request:     @abstr_number . @abstr_number ms     @abstr_number . @abstr_number ms      @abstr_number . @abstr_number ms      @abstr_number . @abstr_number ms     @abstr_number . @abstr_number %
    time for connect:    @abstr_number . @abstr_number ms     @abstr_number . @abstr_number ms     @abstr_number . @abstr_number ms       @abstr_number . @abstr_number ms     @abstr_number . @abstr_number %
    time to  @abstr_number st byte:    @abstr_number . @abstr_number ms     @abstr_number . @abstr_number ms     @abstr_number . @abstr_number ms       @abstr_number . @abstr_number ms     @abstr_number . @abstr_number %
    

The above example issued total @abstr_number , @abstr_number requests, using @abstr_number concurrent clients (in other words, @abstr_number HTTP/ @abstr_number sessions), and a maximum of @abstr_number streams per client. With the `-t` option, `h @abstr_number load` will use multiple native threads to avoid saturating a single core on client side.

.. warning::

**Don't use this tool against publicly available servers.** That is considered a DOS attack. Please only use it against your private servers.

## HPACK tools

The `src` directory contains the HPACK tools. The `deflatehd` program is a command-line header compression tool. The `inflatehd` program is a command-line header decompression tool. Both tools read input from stdin and write output to stdout. Errors are written to stderr. They take JSON as input and output. We (mostly) use the same JSON data format described at https://github.com/http @abstr_number jp/hpack-test-case.

deflatehd - header compressor +++++++++++++++++++++++++++++

The `deflatehd` program reads JSON data or HTTP/ @abstr_number -style header fields from stdin and outputs compressed header block in JSON.

For the JSON input, the root JSON object must include a `cases` key. Its value has to include the sequence of input header set. They share the same compression context and are processed in the order they appear. Each item in the sequence is a JSON object and it must include a `headers` key. Its value is an array of JSON objects, which includes exactly one name/value pair.

Example:

.. code-block:: json
    
    
    {
      "cases":
      [
        {
          "headers": [
            { ":method": "GET" },
            { ":path": "/" }
          ]
        },
        {
          "headers": [
            { ":method": "POST" },
            { ":path": "/" }
          ]
        }
      ]
    }
    

With the `-t` option, the program can accept more familiar HTTP/ @abstr_number style header field blocks. Each header set is delimited by an empty line:

Example:

.. code-block:: text
    
    
    :method: GET
    :scheme: https
    :path: /
    
    :method: POST
    user-agent: nghttp @abstr_number
    

The output is in JSON object. It should include a `cases` key and its value is an array of JSON objects, which has at least the following keys:

seq The index of header set in the input.

input_length The sum of the length of the name/value pairs in the input.

output_length The length of the compressed header block.

percentage_of_original_size `output_length` / `input_length` * @abstr_number 

wire The compressed header block as a hex string.

headers The input header set.

header_table_size The header table size adjusted before deflating the header set.

Examples:

.. code-block:: json
    
    
    {
      "cases":
      [
        {
          "seq":  @abstr_number ,
          "input_length":  @abstr_number ,
          "output_length":  @abstr_number ,
          "percentage_of_original_size":  @abstr_number . @abstr_number ,
          "wire": " @abstr_number f @abstr_number e @abstr_number afcbf @abstr_number a @abstr_number d @abstr_number c @abstr_number e @abstr_number f",
          "headers": [
            {
              ":authority": "example.org"
            },
            {
              ":method": "GET"
            },
            {
              ":path": "/"
            },
            {
              ":scheme": "https"
            },
            {
              "user-agent": "nghttp @abstr_number "
            }
          ],
          "header_table_size":  @abstr_number 
        }
        ,
        {
          "seq":  @abstr_number ,
          "input_length":  @abstr_number ,
          "output_length":  @abstr_number ,
          "percentage_of_original_size":  @abstr_number . @abstr_number ,
          "wire": " @abstr_number dd @abstr_number ",
          "headers": [
            {
              ":authority": "example.org"
            },
            {
              ":method": "POST"
            },
            {
              ":path": "/account"
            },
            {
              ":scheme": "https"
            },
            {
              "user-agent": "nghttp @abstr_number "
            }
          ],
          "header_table_size":  @abstr_number 
        }
      ]
    }
    

The output can be used as the input for `inflatehd` and `deflatehd`.

With the `-d` option, the extra `header_table` key is added and its associated value includes the state of dynamic header table after the corresponding header set was processed. The value includes at least the following keys:

entries The entry in the header table. If `referenced` is `true`, it is in the reference set. The `size` includes the overhead ( @abstr_number bytes). The `index` corresponds to the index of header table. The `name` is the header field name and the `value` is the header field value.

size The sum of the spaces entries occupied, this includes the entry overhead.

max_size The maximum header table size.

deflate_size The sum of the spaces entries occupied within `max_deflate_size`.

max_deflate_size The maximum header table size the encoder uses. This can be smaller than `max_size`. In this case, the encoder only uses up to first `max_deflate_size` buffer. Since the header table size is still `max_size`, the encoder has to keep track of entries outside the `max_deflate_size` but inside the `max_size` and make sure that they are no longer referenced.

Example:

.. code-block:: json
    
    
    {
      "cases":
      [
        {
          "seq":  @abstr_number ,
          "input_length":  @abstr_number ,
          "output_length":  @abstr_number ,
          "percentage_of_original_size":  @abstr_number . @abstr_number ,
          "wire": " @abstr_number f @abstr_number e @abstr_number afcbf @abstr_number a @abstr_number d @abstr_number c @abstr_number e @abstr_number f",
          "headers": [
            {
              ":authority": "example.org"
            },
            {
              ":method": "GET"
            },
            {
              ":path": "/"
            },
            {
              ":scheme": "https"
            },
            {
              "user-agent": "nghttp @abstr_number "
            }
          ],
          "header_table_size":  @abstr_number ,
          "header_table": {
            "entries": [
              {
                "index":  @abstr_number ,
                "name": "user-agent",
                "value": "nghttp @abstr_number ",
                "referenced": true,
                "size":  @abstr_number 
              },
              {
                "index":  @abstr_number ,
                "name": ":scheme",
                "value": "https",
                "referenced": true,
                "size":  @abstr_number 
              },
              {
                "index":  @abstr_number ,
                "name": ":path",
                "value": "/",
                "referenced": true,
                "size":  @abstr_number 
              },
              {
                "index":  @abstr_number ,
                "name": ":method",
                "value": "GET",
                "referenced": true,
                "size":  @abstr_number 
              },
              {
                "index":  @abstr_number ,
                "name": ":authority",
                "value": "example.org",
                "referenced": true,
                "size":  @abstr_number 
              }
            ],
            "size":  @abstr_number ,
            "max_size":  @abstr_number ,
            "deflate_size":  @abstr_number ,
            "max_deflate_size":  @abstr_number 
          }
        }
        ,
        {
          "seq":  @abstr_number ,
          "input_length":  @abstr_number ,
          "output_length":  @abstr_number ,
          "percentage_of_original_size":  @abstr_number . @abstr_number ,
          "wire": " @abstr_number dd @abstr_number ",
          "headers": [
            {
              ":authority": "example.org"
            },
            {
              ":method": "POST"
            },
            {
              ":path": "/account"
            },
            {
              ":scheme": "https"
            },
            {
              "user-agent": "nghttp @abstr_number "
            }
          ],
          "header_table_size":  @abstr_number ,
          "header_table": {
            "entries": [
              {
                "index":  @abstr_number ,
                "name": ":method",
                "value": "POST",
                "referenced": true,
                "size":  @abstr_number 
              },
              {
                "index":  @abstr_number ,
                "name": "user-agent",
                "value": "nghttp @abstr_number ",
                "referenced": true,
                "size":  @abstr_number 
              },
              {
                "index":  @abstr_number ,
                "name": ":scheme",
                "value": "https",
                "referenced": true,
                "size":  @abstr_number 
              },
              {
                "index":  @abstr_number ,
                "name": ":path",
                "value": "/",
                "referenced": false,
                "size":  @abstr_number 
              },
              {
                "index":  @abstr_number ,
                "name": ":method",
                "value": "GET",
                "referenced": false,
                "size":  @abstr_number 
              },
              {
                "index":  @abstr_number ,
                "name": ":authority",
                "value": "example.org",
                "referenced": true,
                "size":  @abstr_number 
              }
            ],
            "size":  @abstr_number ,
            "max_size":  @abstr_number ,
            "deflate_size":  @abstr_number ,
            "max_deflate_size":  @abstr_number 
          }
        }
      ]
    }
    

inflatehd - header decompressor +++++++++++++++++++++++++++++++

The `inflatehd` program reads JSON data from stdin and outputs decompressed name/value pairs in JSON.

The root JSON object must include the `cases` key. Its value has to include the sequence of compressed header blocks. They share the same compression context and are processed in the order they appear. Each item in the sequence is a JSON object and it must have at least a `wire` key. Its value is a compressed header block as a hex string.

Example:

.. code-block:: json
    
    
    {
      "cases":
      [
        { "wire": " @abstr_number " },
        { "wire": " @abstr_number " }
      ]
    }
    

The output is a JSON object. It should include a `cases` key and its value is an array of JSON objects, which has at least following keys:

seq The index of the header set in the input.

headers A JSON array that includes decompressed name/value pairs.

wire The compressed header block as a hex string.

header_table_size The header table size adjusted before inflating compressed header block.

Example:

.. code-block:: json
    
    
    {
      "cases":
      [
        {
          "seq":  @abstr_number ,
          "wire": " @abstr_number f @abstr_number e @abstr_number afcbf @abstr_number a @abstr_number d @abstr_number c @abstr_number e @abstr_number f",
          "headers": [
            {
              ":authority": "example.org"
            },
            {
              ":method": "GET"
            },
            {
              ":path": "/"
            },
            {
              ":scheme": "https"
            },
            {
              "user-agent": "nghttp @abstr_number "
            }
          ],
          "header_table_size":  @abstr_number 
        }
        ,
        {
          "seq":  @abstr_number ,
          "wire": " @abstr_number dd @abstr_number ",
          "headers": [
            {
              ":method": "POST"
            },
            {
              ":path": "/account"
            },
            {
              "user-agent": "nghttp @abstr_number "
            },
            {
              ":scheme": "https"
            },
            {
              ":authority": "example.org"
            }
          ],
          "header_table_size":  @abstr_number 
        }
      ]
    }
    

The output can be used as the input for `deflatehd` and `inflatehd`.

With the `-d` option, the extra `header_table` key is added and its associated value includes the state of the dynamic header table after the corresponding header set was processed. The format is the same as `deflatehd`.

## libnghttp @abstr_number _asio: High level HTTP/ @abstr_number C++ library

libnghttp @abstr_number _asio is C++ library built on top of libnghttp @abstr_number and provides high level abstraction API to build HTTP/ @abstr_number applications. It depends on the Boost::ASIO library and OpenSSL. Currently libnghttp @abstr_number _asio provides both client and server APIs.

libnghttp @abstr_number _asio is not built by default. Use the `--enable-asio-lib` configure flag to build libnghttp @abstr_number _asio. The required Boost libraries are:

  * Boost::Asio
  * Boost::System
  * Boost::Thread



The server API is designed to build an HTTP/ @abstr_number server very easily to utilize C++ @abstr_number anonymous functions and closures. The bare minimum example of an HTTP/ @abstr_number server looks like this:

.. code-block:: cpp
    
    
    #include <iostream>
    
    #include <nghttp @abstr_number /asio_http @abstr_number _server.h>
    
    using namespace nghttp @abstr_number ::asio_http @abstr_number ;
    using namespace nghttp @abstr_number ::asio_http @abstr_number ::server;
    
    int main(int argc, char *argv[]) {
      boost::system::error_code ec;
      http @abstr_number  server;
    
      server.handle("/", [](const request &req, const response &res) {
        res.write_head( @abstr_number );
        res.end("hello, world\n");
      });
    
      if (server.listen_and_serve(ec, "localhost", " @abstr_number ")) {
        std::cerr << "error: " << ec.message() << std::endl;
      }
    }
    

Here is sample code to use the client API:

.. code-block:: cpp
    
    
    #include <iostream>
    
    #include <nghttp @abstr_number /asio_http @abstr_number _client.h>
    
    using boost::asio::ip::tcp;
    
    using namespace nghttp @abstr_number ::asio_http @abstr_number ;
    using namespace nghttp @abstr_number ::asio_http @abstr_number ::client;
    
    int main(int argc, char *argv[]) {
      boost::system::error_code ec;
      boost::asio::io_service io_service;
    
      // connect to localhost: @abstr_number 
      session sess(io_service, "localhost", " @abstr_number ");
    
      sess.on_connect([&sess](tcp::resolver::iterator endpoint_it) {
        boost::system::error_code ec;
    
        auto req = sess.submit(ec, "GET", "http://localhost: @abstr_number /");
    
        req->on_response([](const response &res) {
          // print status code and response header fields.
          std::cerr << "HTTP/ @abstr_number  " << res.status_code() << std::endl;
          for (auto &kv : res.header()) {
            std::cerr << kv.first << ": " << kv.second.value << "\n";
          }
          std::cerr << std::endl;
    
          res.on_data([](const uint @abstr_number _t *data, std::size_t len) {
            std::cerr.write(reinterpret_cast<const char *>(data), len);
            std::cerr << std::endl;
          });
        });
    
        req->on_close([&sess](uint @abstr_number _t error_code) {
          // shutdown session after first request was done.
          sess.shutdown();
        });
      });
    
      sess.on_error([](const boost::system::error_code &ec) {
        std::cerr << "error: " << ec.message() << std::endl;
      });
    
      io_service.run();
    }
    

For more details, see the documentation of libnghttp @abstr_number _asio.

## Python bindings

The `python` directory contains nghttp @abstr_number Python bindings. The bindings currently provide HPACK compressor and decompressor classes and an HTTP/ @abstr_number server.

The extension module is called `nghttp @abstr_number`.

`make` will build the bindings and target Python version is determined by the `configure` script. If the detected Python version is not what you expect, specify a path to Python executable in a `PYTHON` variable as an argument to configure script (e.g., `./configure PYTHON=/usr/bin/python @abstr_number . @abstr_number`).

The following example code illustrates basic usage of the HPACK compressor and decompressor in Python:

.. code-block:: python
    
    
    import binascii
    import nghttp @abstr_number 
    
    deflater = nghttp @abstr_number .HDDeflater()
    inflater = nghttp @abstr_number .HDInflater()
    
    data = deflater.deflate([(b'foo', b'bar'),
                             (b'baz', b'buz')])
    print(binascii.b @abstr_number a_hex(data))
    
    hdrs = inflater.inflate(data)
    print(hdrs)
    

The `nghttp @abstr_number .HTTP @abstr_number Server` class builds on top of the asyncio event loop. On construction, _RequestHandlerClass_ must be given, which must be a subclass of `nghttp @abstr_number .BaseRequestHandler` class.

The `BaseRequestHandler` class is used to handle the HTTP/ @abstr_number stream. By default, it does nothing. It must be subclassed to handle each event callback method.

The first callback method invoked is `on_headers()`. It is called when HEADERS frame, which includes the request header fields, has arrived.

If the request has a request body, `on_data(data)` is invoked for each chunk of received data.

Once the entire request is received, `on_request_done()` is invoked.

When the stream is closed, `on_close(error_code)` is called.

The application can send a response using `send_response()` method. It can be used in `on_headers()`, `on_data()` or `on_request_done()`.

The application can push resources using the `push()` method. It must be used before the `send_response()` call.

The following instance variables are available:

client_address Contains a tuple of the form (host, port) referring to the client's address.

stream_id Stream ID of this stream.

scheme Scheme of the request URI. This is a value of :scheme header field.

method Method of this stream. This is a value of :method header field.

host This is a value of :authority or host header field.

path This is a value of :path header field.

The following example illustrates the HTTP @abstr_number Server and BaseRequestHandler usage:

.. code-block:: python
    
    
    #!/usr/bin/env python
    
    import io, ssl
    import nghttp @abstr_number 
    
    class Handler(nghttp @abstr_number .BaseRequestHandler):
    
        def on_headers(self):
            self.push(path='/css/bootstrap.css',
                      request_headers = [('content-length', ' @abstr_number ')],
                      status= @abstr_number ,
                      body='foo')
    
            self.push(path='/js/bootstrap.js',
                      method='GET',
                      request_headers = [('content-length', ' @abstr_number ')],
                      status= @abstr_number ,
                      body='foobarbuzz')
    
            self.send_response(status= @abstr_number ,
                               headers = [('content-type', 'text/plain')],
                               body=io.BytesIO(b'nghttp @abstr_number -python FTW'))
    
    ctx = ssl.SSLContext(ssl.PROTOCOL_SSLv @abstr_number )
    ctx.options = ssl.OP_ALL | ssl.OP_NO_SSLv @abstr_number 
    ctx.load_cert_chain('server.crt', 'server.key')
    
    # give None to ssl to make the server non-SSL/TLS
    server = nghttp @abstr_number .HTTP @abstr_number Server((' @abstr_number . @abstr_number . @abstr_number . @abstr_number ',  @abstr_number ), Handler, ssl=ctx)
    server.serve_forever()
    

## Contribution

[This text was composed based on @abstr_number . @abstr_number . License section of curl/libcurl project.]

When contributing with code, you agree to put your changes and new code under the same license nghttp @abstr_number is already using unless stated and agreed otherwise.

When changing existing source code, do not alter the copyright of the original file(s). The copyright will still be owned by the original creator(s) or those who have been assigned copyright by the original author(s).

By submitting a patch to the nghttp @abstr_number project, you (or your employer, as the case may be) agree to assign the copyright of your submission to us. .. the above really needs to be reworded to pass legal muster. We will credit you for your changes as far as possible, to give credit but also to keep a trace back to who made what changes. Please always provide us with your full real name when contributing!

See `Contribution Guidelines <https://nghttp @abstr_number .org/documentation/contribute.html>`_ for more details.

## Reporting vulnerability

If you find a vulnerability in our software, please send the email to "tatsuhiro.t at gmail dot com" about its details instead of submitting issues on github issue page. It is a standard practice not to disclose vulnerability information publicly until a fixed version is released, or mitigation is worked out.

In the future, we may setup a dedicated mail address for this purpose.

## Release schedule

In general, we follow `Semantic Versioning <http://semver.org/>`_. We release MINOR version update every month, and usually we ship it around @abstr_number th day of every month.

We may release PATCH releases between the regular releases, mainly for severe security bug fixes.

We have no plan to break API compatibility changes involving soname bump, so MAJOR version will stay @abstr_number for the foreseeable future.

## License

The MIT License
