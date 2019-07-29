# aria @abstr_number - The ultra fast download utility

## Disclaimer

This program comes with no warranty. You must use this program at your own risk.

## Introduction

aria @abstr_number is a utility for downloading files. The supported protocols are HTTP(S), FTP, SFTP, BitTorrent, and Metalink. aria @abstr_number can download a file from multiple sources/protocols and tries to utilize your maximum download bandwidth. It supports downloading a file from HTTP(S)/FTP/SFTP and BitTorrent at the same time, while the data downloaded from HTTP(S)/FTP/SFTP is uploaded to the BitTorrent swarm. Using Metalink's chunk checksums, aria @abstr_number automatically validates chunks of data while downloading a file like BitTorrent.

The project page is located at https://aria @abstr_number .github.io/.

See `aria @abstr_number Online Manual <https://aria @abstr_number .github.io/manual/en/html/>`_ (`Russian translation <https://aria @abstr_number .github.io/manual/ru/html/>`_, `Portuguese translation <https://aria @abstr_number .github.io/manual/pt/html/>`_) to learn how to use aria @abstr_number .

## Features

Here is a list of features:

  * Command-line interface
  * Download files through HTTP(S)/FTP/SFTP/BitTorrent
  * Segmented downloading
  * Metalink version @abstr_number (RFC @abstr_number ) support(HTTP/FTP/SFTP/BitTorrent)
  * Metalink version @abstr_number . @abstr_number support(HTTP/FTP/SFTP/BitTorrent)
  * Metalink/HTTP (RFC @abstr_number ) support
  * HTTP/ @abstr_number . @abstr_number implementation
  * HTTP Proxy support
  * HTTP BASIC authentication support
  * HTTP Proxy authentication support
  * Well-known environment variables for proxy: `http_proxy`, `https_proxy`, `ftp_proxy`, `all_proxy` and `no_proxy`
  * HTTP gzip, deflate content encoding support
  * Verify peer using given trusted CA certificate in HTTPS
  * Client certificate authentication in HTTPS
  * Chunked transfer encoding support
  * Load Cookies from file using the Firefox @abstr_number format, Chromium/Google Chrome and the Mozilla/Firefox ( @abstr_number .x/ @abstr_number .x)/Netscape format.
  * Save Cookies in the Mozilla/Firefox ( @abstr_number .x/ @abstr_number .x)/Netscape format.
  * Custom HTTP Header support
  * Persistent Connections support
  * FTP/SFTP through HTTP Proxy
  * Download/Upload speed throttling
  * BitTorrent extensions: Fast extension, DHT, PEX, MSE/PSE, Multi-Tracker, UDP tracker
  * BitTorrent `WEB-Seeding <http://getright.com/seedtorrent.html>`_. aria @abstr_number requests chunks more than piece size to reduce the request overhead. It also supports pipelined requests with piece size.
  * BitTorrent Local Peer Discovery
  * Rename/change the directory structure of BitTorrent downloads completely
  * JSON-RPC (over HTTP and WebSocket)/XML-RPC interface
  * Run as a daemon process
  * Selective download in multi-file torrent/Metalink
  * Chunk checksum validation in Metalink
  * Can disable segmented downloading in Metalink
  * Netrc support
  * Configuration file support
  * Download URIs found in a text file or stdin and the destination directory and output file name can be specified optionally
  * Parameterized URI support
  * IPv @abstr_number support with Happy Eyeballs
  * Disk cache to reduce disk activity



## Versioning and release schedule

We use @abstr_number numbers for aria @abstr_number version: MAJOR.MINOR.PATCH. We will ship MINOR update on @abstr_number th of every month. We may skip a release if we have no changes since the last release. The feature and documentation freeze happens @abstr_number days before the release day ( @abstr_number th day of the month) for translation teams. We will raise an issue about the upcoming release around that day.

We may release PATCH releases between regular releases if we have security issues.

MAJOR version will stay at @abstr_number for the time being.

## How to get source code

We maintain the source code at Github: https://github.com/aria @abstr_number /aria @abstr_number 

To get the latest source code, run following command::
    
    
    $ git clone https://github.com/aria @abstr_number /aria @abstr_number .git
    

This will create aria @abstr_number directory in your current directory and source files are stored there.

## Dependency

======================== ======================================== features dependency ======================== ======================================== HTTPS OSX or GnuTLS or OpenSSL or Windows SFTP libssh @abstr_number BitTorrent None. Optional: libnettle+libgmp or libgcrypt or OpenSSL (see note) Metalink libxml @abstr_number or Expat. Checksum None. Optional: OSX or libnettle or libgcrypt or OpenSSL or Windows (see note) gzip, deflate in HTTP zlib Async DNS C-Ares Firefox @abstr_number /Chromium cookie libsqlite @abstr_number XML-RPC libxml @abstr_number or Expat. JSON-RPC over WebSocket libnettle or libgcrypt or OpenSSL ======================== ========================================

.. note::

libxml @abstr_number has precedence over Expat if both libraries are installed. If you prefer Expat, run configure with `--without-libxml @abstr_number`.

.. note::

On Apple OSX the OS-level SSL/TLS support will be preferred. Hence neither GnuTLS nor OpenSSL are required on that platform. If you'd like to disable this behavior, run configure with `--without-appletls`.

GnuTLS has precedence over OpenSSL if both libraries are installed. If you prefer OpenSSL, run configure with `--without-gnutls` `--with-openssl`.

On Windows there is SSL implementation available that is based on the native Windows SSL capabilities (Schannel) and it will be preferred. Hence neither GnuTLS nor OpenSSL are required on that platform. If you'd like to disable this behavior, run configure with `--without-wintls`.

.. note::

On Apple OSX the OS-level checksum support will be preferred, unless aria @abstr_number is configured with `--without-appletls`.

libnettle has precedence over libgcrypt if both libraries are installed. If you prefer libgcrypt, run configure with `--without-libnettle --with-libgcrypt`. If OpenSSL is selected over GnuTLS, neither libnettle nor libgcrypt will be used.

If none of the optional dependencies are installed, an internal implementation that only supports md @abstr_number and sha @abstr_number will be used.

On Windows there is SSL implementation available that is based on the native Windows capabilities and it will be preferred, unless aria @abstr_number is configured with `--without-wintls`.

A user can have one of the following configurations for SSL and crypto libraries:

  * OpenSSL
  * GnuTLS + libgcrypt
  * GnuTLS + libnettle
  * Apple TLS (OSX only)
  * Windows TLS (Windows only)



You can disable BitTorrent and Metalink support by providing `--disable-bittorrent` and `--disable-metalink` to the configure script respectively.

In order to enable async DNS support, you need c-ares.

  * c-ares: http://c-ares.haxx.se/



## How to build

aria @abstr_number is primarily written in C++. Initially it was written based on C++ @abstr_number /C++ @abstr_number standard features. We are now migrating aria @abstr_number to C++ @abstr_number standard. The current source code requires C++ @abstr_number aware compiler. For well-known compilers, such as g++ and clang, the `-std=c++ @abstr_number` or `-std=c++ @abstr_number x` flag must be supported.

In order to build aria @abstr_number from the source package, you need following development packages (package name may vary depending on the distribution you use):

  * libgnutls-dev (Required for HTTPS, BitTorrent, Checksum support)
  * nettle-dev (Required for BitTorrent, Checksum support)
  * libgmp-dev (Required for BitTorrent)
  * libssh @abstr_number - @abstr_number -dev (Required for SFTP support)
  * libc-ares-dev (Required for async DNS support)
  * libxml @abstr_number -dev (Required for Metalink support)
  * zlib @abstr_number g-dev (Required for gzip, deflate decoding support in HTTP)
  * libsqlite @abstr_number -dev (Required for Firefox @abstr_number /Chromium cookie support)
  * pkg-config (Required to detect installed libraries)



You can use libgcrypt-dev instead of nettle-dev and libgmp-dev:

  * libgpg-error-dev (Required for BitTorrent, Checksum support)
  * libgcrypt-dev (Required for BitTorrent, Checksum support)



You can use libssl-dev instead of libgnutls-dev, nettle-dev, libgmp-dev, libgpg-error-dev and libgcrypt-dev:

  * libssl-dev (Required for HTTPS, BitTorrent, Checksum support)



You can use libexpat @abstr_number -dev instead of libxml @abstr_number -dev:

  * libexpat @abstr_number -dev (Required for Metalink support)



On Fedora you need the following packages: gcc, gcc-c++, kernel-devel, libgcrypt-devel, libxml @abstr_number -devel, openssl-devel, gettext-devel, cppunit

If you downloaded source code from git repository, you have to install following packages to get autoconf macros:

  * libxml @abstr_number -dev
  * libcppunit-dev
  * autoconf
  * automake
  * autotools-dev
  * autopoint
  * libtool



And run following command to generate configure script and other files necessary to build the program::
    
    
    $ autoreconf -i
    

Also you need `Sphinx <http://sphinx-doc.org/>`_ to build man page.

If you are building aria @abstr_number for Mac OS X, take a look at the makerelease-osx.mk GNU Make makefile.

The quickest way to build aria @abstr_number is first run configure script::
    
    
    $ ./configure
    

To build statically linked aria @abstr_number , use `ARIA @abstr_number _STATIC=yes` command-line option::
    
    
    $ ./configure ARIA @abstr_number _STATIC=yes
    

After configuration is done, run `make` to compile the program::
    
    
    $ make
    

See `Cross-compiling Windows binary`_ to create a Windows binary. See `Cross-compiling Android binary`_ to create an Android binary.

The configure script checks available libraries and enables as many features as possible except for experimental features not enabled by default.

Since @abstr_number . @abstr_number . @abstr_number , aria @abstr_number checks the certificate of HTTPS servers by default. If you build with OpenSSL or the recent version of GnuTLS which has `gnutls_certificate_set_x @abstr_number _system_trust()` function and the library is properly configured to locate the system-wide CA certificates store, aria @abstr_number will automatically load those certificates at the startup. If it is not the case, I recommend to supply the path to the CA bundle file. For example, in Debian the path to CA bundle file is '/etc/ssl/certs/ca-certificates.crt' (in ca-certificates package). This may vary depending on your distribution. You can give it to configure script using `--with-ca-bundle option`::
    
    
    $ ./configure --with-ca-bundle='/etc/ssl/certs/ca-certificates.crt'
    $ make
    

Without `--with-ca-bundle` option, you will encounter the error when accessing HTTPS servers because the certificate cannot be verified without CA bundle. In such case, you can specify the CA bundle file using aria @abstr_number 's `--ca-certificate` option. If you don't have CA bundle file installed, then the last resort is disable the certificate validation using `--check-certificate=false`.

Using the native OSX (AppleTLS) and/or Windows (WinTLS) implementation will automatically use the system certificate store, so `--with-ca-bundle` is not necessary and will be ignored when using these implementations.

By default, the bash_completion file named `aria @abstr_number c` is installed to the directory `$prefix/share/doc/aria @abstr_number /bash_completion`. To change the install directory of the file, use `--with-bashcompletiondir` option.

After a `make` the executable is located at `src/aria @abstr_number c`.

aria @abstr_number uses CppUnit for automated unit testing. To run the unit test::
    
    
    $ make check
    

## Cross-compiling Windows binary

In this section, we describe how to build a Windows binary using a mingw-w @abstr_number (http://mingw-w @abstr_number .org/doku.php) cross-compiler on Debian Linux. The MinGW (http://www.mingw.org/) may not be able to build aria @abstr_number .

The easiest way to build Windows binary is use Dockerfile.mingw. See Dockerfile.mingw how to build binary. If you cannot use Dockerfile, then continue to read following paragraphs.

Basically, after compiling and installing depended libraries, you can do cross-compile just passing appropriate `--host` option and specifying `CPPFLAGS`, `LDFLAGS` and `PKG_CONFIG_LIBDIR` variables to configure. For convenience and lowering our own development cost, we provide easier way to configure the build settings.

`mingw-config` script is a configure script wrapper for mingw-w @abstr_number . We use it to create official Windows build. This script assumes following libraries have been built for cross-compile:

  * c-ares
  * expat
  * sqlite @abstr_number 
  * zlib
  * libssh @abstr_number 
  * cppunit



Some environment variables can be adjusted to change build settings:

`HOST` cross-compile to build programs to run on `HOST`. It defaults to `i @abstr_number -w @abstr_number -mingw @abstr_number`. To build @abstr_number bit binary, specify `x @abstr_number _ @abstr_number -w @abstr_number -mingw @abstr_number`.

`PREFIX` Prefix to the directory where dependent libraries are installed. It defaults to `/usr/local/$HOST`. `-I$PREFIX/include` will be added to `CPPFLAGS`. `-L$PREFIX/lib` will be added to `LDFLAGS`. `$PREFIX/lib/pkgconfig` will be set to `PKG_CONFIG_LIBDIR`.

For example, to build @abstr_number bit binary do this::
    
    
    $ HOST=x @abstr_number _ @abstr_number -w @abstr_number -mingw @abstr_number  ./mingw-config
    

If you want libaria @abstr_number dll with `--enable-libaria @abstr_number`, then don't use `ARIA @abstr_number _STATIC=yes` and prepare the DLL version of external libraries.

## Cross-compiling Android binary

In this section, we describe how to build Android binary using Android NDK cross-compiler on Debian Linux.

At the time of this writing, android-ndk-r @abstr_number b should compile aria @abstr_number without errors.

`android-config` script is a configure script wrapper for Android build. We use it to create official Android build. This script assumes the following libraries have been built for cross-compile:

  * c-ares
  * openssl
  * expat
  * zlib
  * libssh @abstr_number 



When building the above libraries, make sure that disable shared library and enable only static library. We are going to link those libraries statically.

We use zlib which comes with Android NDK, so we don't have to build it by ourselves.

`android-config` assumes the existence of `$ANDROID_HOME` environment variable which must fulfill the following conditions:

  * Android NDK toolchain is installed under `$ANDROID_HOME/toolchain`. Refer to `Standalone Toolchain <https://developer.android.com/ndk/guides/standalone_toolchain.html>`_ for more details, but it is a bit out of date.

To install toolchain under `$ANDROID_HOME/toolchain`, do this:

.. code-block:: text

$NDK/build/tools/make_standalone_toolchain.py \ \--arch arm --api @abstr_number --stl=gnustl \ \--install-dir $ANDROID_HOME/toolchain

  * The dependent libraries must be installed under `$ANDROID_HOME/usr/local`.




Before running `android-config` and `android-make`, `$ANDROID_HOME` environment variable must be set to point to the correct path.

After `android-config`, run `android-make` to compile sources.

## Building documentation

`Sphinx <http://sphinx-doc.org/>`_ is used to build the documentation. aria @abstr_number man pages will be build when you run `make` if they are not up-to-date. You can also build HTML version of aria @abstr_number man page by `make html`. The HTML version manual is also available at `online <https://aria @abstr_number .github.io/manual/en/html/>`_ (`Russian translation <https://aria @abstr_number .github.io/manual/ru/html/>`_, `Portuguese translation <https://aria @abstr_number .github.io/manual/pt/html/>`_).

## BitTorrent

About file names ~~~~~~~~~~~~~~~~ The file name of the downloaded file is determined as follows:

single-file mode If "name" key is present in .torrent file, file name is the value of "name" key. Otherwise, file name is the base name of .torrent file appended by ".file". For example, .torrent file is "test.torrent", then file name is "test.torrent.file". The directory to store the downloaded file can be specified by -d option.

multi-file mode The complete directory/file structure mentioned in .torrent file is created. The directory to store the top directory of downloaded files can be specified by -d option.

Before download starts, a complete directory structure is created if needed. By default, aria @abstr_number opens at most @abstr_number files mentioned in .torrent file, and directly writes to and reads from these files. The number of files to open simultaneously can be controlled by `--bt-max-open-files` option.

DHT ~~~

aria @abstr_number supports mainline compatible DHT. By default, the routing table for IPv @abstr_number DHT is saved to `$XDG_CACHE_HOME/aria @abstr_number /dht.dat` and the routing table for IPv @abstr_number DHT is saved to `$XDG_CACHE_HOME/aria @abstr_number /dht @abstr_number .dat` unless files exist at `$HOME/.aria @abstr_number /dht.dat` or `$HOME/.aria @abstr_number /dht @abstr_number .dat`. aria @abstr_number uses same port number to listen on for both IPv @abstr_number and IPv @abstr_number DHT.

UDP tracker ~~~~~~~~~~~

UDP tracker support is enabled when IPv @abstr_number DHT is enabled. The port number of UDP tracker is shared with DHT. Use `--dht-listen-port` option to change the port number.

Other things should be noted ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  * `-o` option is used to change the file name of .torrent file itself, not a file name of a file in .torrent file. For this purpose, use `--index-out` option instead.
  * The port numbers that aria @abstr_number uses by default are @abstr_number - @abstr_number for TCP and UDP.
  * aria @abstr_number doesn't configure port-forwarding automatically. Please configure your router or firewall manually.
  * The maximum number of peers is @abstr_number . This limit may be exceeded when download rate is low. This download rate can be adjusted using `--bt-request-peer-speed-limit` option.
  * As of release @abstr_number . @abstr_number . @abstr_number , aria @abstr_number stops sending request message after selective download completes.



## Metalink

The current implementation supports HTTP(S)/FTP/SFTP/BitTorrent. The other P @abstr_number P protocols are ignored. Both Metalink @abstr_number (RFC @abstr_number ) and Metalink version @abstr_number . @abstr_number documents are supported.

For checksum verification, md @abstr_number , sha- @abstr_number , sha- @abstr_number , sha- @abstr_number , sha- @abstr_number and sha- @abstr_number are supported. If multiple hash algorithms are provided, aria @abstr_number uses stronger one. If whole file checksum verification fails, aria @abstr_number doesn't retry the download and just exits with non-zero return code.

The supported user preferences are version, language, location, protocol and os.

If chunk checksums are provided in Metalink file, aria @abstr_number automatically validates chunks of data during download. This behavior can be turned off by a command-line option.

If signature is included in a Metalink file, aria @abstr_number saves it as a file after the completion of the download. The file name is download file name + ".sig". If same file already exists, the signature file is not saved.

In Metalink @abstr_number , multi-file torrent could appear in metalink:metaurl element. Since aria @abstr_number cannot download @abstr_number same torrents at the same time, aria @abstr_number groups files in metalink:file element which has same BitTorrent metaurl and downloads them from a single BitTorrent swarm. This is basically multi-file torrent download with file selection, so the adjacent files which is not in Metalink document but shares same piece with selected file are also created.

If relative URI is specified in metalink:url or metalink:metaurl element, aria @abstr_number uses the URI of Metalink file as base URI to resolve the relative URI. If relative URI is found in Metalink file which is read from local disk, aria @abstr_number uses the value of `--metalink-base-uri` option as base URI. If this option is not specified, the relative URI will be ignored.

## Metalink/HTTP

The current implementation only uses rel=duplicate links only. aria @abstr_number understands Digest header fields and check whether it matches the digest value from other sources. If it differs, drop connection. aria @abstr_number also uses this digest value to perform checksum verification after download finished. aria @abstr_number recognizes geo value. To tell aria @abstr_number which location you prefer, you can use `--metalink-location` option.

## netrc

netrc support is enabled by default for HTTP(S)/FTP/SFTP. To disable netrc support, specify -n command-line option. Your .netrc file should have correct permissions( @abstr_number ).

## WebSocket

The WebSocket server embedded in aria @abstr_number implements the specification defined in RFC @abstr_number . The supported protocol version is @abstr_number .

## libaria @abstr_number 

The libaria @abstr_number is a C++ library which offers aria @abstr_number functionality to the client code. Currently, libaria @abstr_number is not built by default. To enable libaria @abstr_number , use `--enable-libaria @abstr_number` configure option. By default, only the shared library is built. To build static library, use `--enable-static` configure option as well. See libaria @abstr_number documentation to know how to use API.

## References

  * `aria @abstr_number Online Manual <https://aria @abstr_number .github.io/manual/en/html/>`_
  * https://aria @abstr_number .github.io/
  * `RFC @abstr_number FILE TRANSFER PROTOCOL (FTP) <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number Uniform Resource Locators (URL) <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number FTP Extensions for IPv @abstr_number and NATs <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number Hypertext Transfer Protocol -- HTTP/ @abstr_number . @abstr_number <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number Extensions to FTP <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number Uniform Resource Identifier (URI): Generic Syntax <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number Application Aspects of IPv @abstr_number Transition <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number The Metalink Download Description Format <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number Metalink/HTTP: Mirrors and Hashes <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number HTTP State Management Mechanism <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number Use of the Content-Disposition Header Field in the Hypertext Transfer Protocol (HTTP) <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number The WebSocket Protocol <http://tools.ietf.org/html/rfc @abstr_number >`_
  * `RFC @abstr_number Happy Eyeballs: Success with Dual-Stack Hosts <http://tools.ietf.org/html/rfc @abstr_number >`_

  * `The BitTorrent Protocol Specification <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_

  * `BitTorrent: DHT Protocol <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_
  * `BitTorrent: Fast Extension <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_
  * `BitTorrent: IPv @abstr_number Tracker Extension <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_
  * `BitTorrent: Extension for Peers to Send Metadata Files <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_
  * `BitTorrent: Extension Protocol <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_
  * `BitTorrent: Multitracker Metadata Extension <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_
  * `BitTorrent: UDP Tracker Protocol for BitTorrent <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_ and `BitTorrent udp-tracker protocol specification <http://www.rasterbar.com/products/libtorrent/udp_tracker_protocol.html>`_.
  * `BitTorrent: WebSeed - HTTP/FTP Seeding (GetRight style) <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_
  * `BitTorrent: Private Torrents <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_
  * `BitTorrent: BitTorrent DHT Extensions for IPv @abstr_number <http://www.bittorrent.org/beps/bep_ @abstr_number .html>`_
  * `BitTorrent: Message Stream Encryption <http://wiki.vuze.com/w/Message_Stream_Encryption>`_
  * `Kademlia: A Peer-to-peer Information System Based on the XOR Metric <https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf>`_


