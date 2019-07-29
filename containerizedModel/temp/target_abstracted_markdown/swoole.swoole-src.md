English | 中文

# Swoole

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

**Swoole is an event-driven asynchronous & coroutine-based concurrency networking communication engine with high performance written in C and C++ for PHP.**

## ✨Event-based

The network layer in Swoole is event-based and takes full advantage of the underlying epoll/kqueue implementation, making it really easy to serve millions of requests.

Swoole @abstr_number .x use a brand new engine kernel and now it has a full-time developer team, so we are entering an unprecedented period in PHP history which offers a unique possibility for rapid evolution in performance.

## ⚡️Coroutine

Swoole @abstr_number .x or later supports the built-in coroutine with high availability, and you can use fully synchronized code to implement asynchronous performance. PHP code without any additional keywords, the underlying automatic coroutine-scheduling.

Developers can understand coroutines as ultra-lightweight threads, and you can easily create thousands of coroutines in a single process.

### MySQL

Concurrency @abstr_number K requests to read data from MySQL takes only @abstr_number . @abstr_number s!

@abstr_code_section 

### Mixed server

You can create multiple services on the single event loop: TCP, HTTP, Websocket and HTTP @abstr_number , and easily handle thousands of requests.

@abstr_code_section 

@abstr_code_section 

### Coroutine clients

Whether you DNS query or send requests or receive responses, all of these are scheduled by coroutine automatically.

@abstr_code_section 

### Channel

Channel is the only way for exchanging data between coroutines, the development combination of the `Coroutine + Channel` is the famous CSP programming model.

In Swoole development, Channel is usually used for implementing connection pool or scheduling coroutine concurrent.

#### The simplest example of a connection pool

In the following example, we have a thousand concurrently requests to redis. Normally, this has exceeded the maximum number of Redis connections setting and will throw a connection exception, but the connection pool based on Channel can perfectly schedule requests. We don't have to worry about connection overload.

@abstr_code_section 

#### Producer and consumers

Some Swoole's clients implement the defer mode for concurrency, but you can still implement it flexible with a combination of coroutines and channels.

@abstr_code_section 

### Timer

@abstr_code_section 

#### The way of coroutine

@abstr_code_section 

## 🔥 Amazing runtime hooks

**As of Swoole v @abstr_number . @abstr_number . @abstr_number , we added the ability to transform synchronous PHP network libraries into co-routine libraries using a single line of code.**

Simply call the `Swoole\Runtime::enableCoroutine()` method at the top of your script. In the sample below we connect to php-redis and concurrently read @abstr_number k requests in @abstr_number . @abstr_number s:

@abstr_code_section 

By calling this method, the Swoole kernel replaces ZendVM stream function pointers. If you use `php_stream` based extensions, all socket operations can be dynamically converted to be asynchronous IO scheduled by coroutine at runtime!

### How many things you can do in @abstr_number s?

Sleep @abstr_number K times, read, write, check and delete files @abstr_number K times, use PDO and MySQLi to communicate with the database @abstr_number K times, create a TCP server and multiple clients to communicate with each other @abstr_number K times, create a UDP server and multiple clients to communicate with each other @abstr_number K times... Everything works well in one process!

Just see what the Swoole brings, just imagine...

@abstr_code_section 

## ⌛️ Installation

> As with any open source project, Swoole always provides the most reliable stability and the most powerful features in **the latest released version**. Please ensure as much as possible that you are using the latest version.

### @abstr_number . From binary package (beginners + dev-env)

See our @abstr_hyperlink 

### Compiling requirements

  * Linux, OS X or Cygwin, WSL
  * PHP @abstr_number . @abstr_number . @abstr_number or later (The higher the version, the better the performance.)
  * GCC @abstr_number . @abstr_number or later



### @abstr_number . Install via PECL (beginners)

@abstr_code_section 

### @abstr_number . Install from source (recommended)

Please download the source packages from @abstr_hyperlink or:

@abstr_code_section 

Compile and install at the source folder:

@abstr_code_section 

#### Enable extension in PHP

After compiling and installing to the system successfully, you have to add a new line `extension=swoole.so` to `php.ini` to enable Swoole extension.

#### Extra compiler configurations

> for example: `./configure --enable-openssl --enable-sockets`

  * `--enable-openssl` or `--with-openssl-dir=DIR`
  * `--enable-sockets`
  * `--enable-http @abstr_number`
  * `--enable-mysqlnd` (need mysqlnd, it just for supporting `$mysql->escape` method)



### Upgrade

> ⚠️ If you upgrade from source, don't forget to `make clean` before you upgrade your swoole

@abstr_number . `pecl upgrade swoole` @abstr_number . `git pull && cd swoole-src && make clean && make && sudo make install` @abstr_number . if you change your PHP version, please re-run `phpize clean && phpize` then try to compile

### Major change since version @abstr_number . @abstr_number . @abstr_number

Async clients and API are moved to a separate PHP extension `swoole_async` since version @abstr_number . @abstr_number . @abstr_number , install `swoole_async`:

@abstr_code_section 

Enable it by adding a new line `extension=swoole_async.so` to `php.ini`.

## 💎 Frameworks & Components

  * @abstr_hyperlink is a modern, high-performance AOP and coroutine PHP framework.
  * @abstr_hyperlink Modern Full Stack Framework Inspired by Springboot，Power by SwooleDistributed & EasySwoole.
  * @abstr_hyperlink EasySwoole is a distributed, persistent memory PHP framework based on the Swoole extension. It was created specifically for APIs to get rid of the performance penalties associated with process calls and file loading. EasySwoole highly encapsulates the Swoole Server and still maintains the original features of the Swoole server, supports simultaneous monitoring of HTTP, custom TCP, and UDP protocols, allowing developers to write multi-process, asynchronous, and highly available applications with minimal learning cost and effort. 
    * Base on Swoole extension
    * Built-in HTTP, TCP, WebSocket,Udp Coroutine Server
    * Global dependency injection container
    * PSR- @abstr_number based HTTP message implementation
    * HTTP,TCP, WebSocket, Udp middleware support
    * Scalable high performance RPC
    * Database ORM
    * Mysql, Redis, RPC, HTTP Coroutine Clients
    * Coroutine and asynchronous task delivery
    * Custom user processes
    * RESTful supported
    * High performance router
    * Fast and flexible parameter validator
    * Powerful log component
    * Universal connection pools
    * Remote Console support
    * Crontab Rule Timer support
  * @abstr_hyperlink Is a human-friendly, high-performance HTTP client component that has almost everything you can imagine.



## 🛠 Develop & Discussion

  * __中文文档__: @abstr_hyperlink 
  * __Documentation__: @abstr_hyperlink 
  * __IDE Helper & API__: @abstr_hyperlink 
  * __中文社区__: @abstr_hyperlink 
  * __Twitter__: @abstr_hyperlink 
  * __Slack Group__: @abstr_hyperlink 



## 🍭 Benchmark

  * On the open source @abstr_hyperlink Swoole used MySQL database benchmark to rank first, and all performance tests ranked in the first echelon.
  * You can just run Benchmark Script to quickly test the maximum QPS of Swoole-HTTP-Server on your machine.



## 🖊️ Security issues

Security issues should be reported privately, via email, to the Swoole develop team team@swoole.com. You should receive a response within @abstr_number hours. If for some reason you do not, please follow up via email to ensure we received your original message.

## 🖊️ Contribution

Your contribution to Swoole development is very welcome!

You may contribute in the following ways:

  * @abstr_hyperlink 
  * Submit fixes, features via Pull Request
  * Write/polish documentation



## ❤️ Contributors

This project exists thanks to all the people who contribute. [ @abstr_hyperlink ]. @abstr_hyperlink 

## 🎙️ Official Evangelist

@abstr_hyperlink has been playing with PHP since @abstr_number , focusing on building high-performance, secure web services. He is an occasional conference speaker on PHP and Swoole, and has been working for companies in the states like eBay, Visa and Glu Mobile for years. You may find Demin on @abstr_hyperlink or @abstr_hyperlink .

## 📃 License

Apache License Version @abstr_number . @abstr_number see http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number .html
