# fibers( @abstr_number ) -- Fiber support for v @abstr_number and Node

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Fibers, sometimes called @abstr_hyperlink , are a powerful tool which expose an API to jump between multiple call stacks from within a single thread. This can be useful to make code written for a synchronous library play nicely in an asynchronous environment.

## INSTALLING

@abstr_hyperlink 

### via npm

  * `npm install fibers`
  * You're done! (see "supported platforms" below if you run into errors)



### from source

  * `git clone git://github.com/laverdet/node-fibers.git`
  * `cd node-fibers`
  * `npm install`



Note: node-fibers uses @abstr_hyperlink for building. To manually invoke the build process, you can use `node-gyp rebuild`. This will put the compiled extension in `build/Release/fibers.node`. However, when you do `require('fibers')`, it will expect the module to be in, for example, `bin/linux-x @abstr_number -v @abstr_number - @abstr_number . @abstr_number /fibers.node`. You can manually put the module here every time you build, or you can use the included build script. Either `npm install` or `node build -f` will do this for you. If you are going to be hacking on node-fibers, it may be worthwhile to first do `node-gyp configure` and then for subsequent rebuilds you can just do `node-gyp build` which will be faster than a full `npm install` or `node-gyp rebuild`.

### meteor users please read this

If you're trying to get meteor running and you ended up at this page you're probably doing something wrong. Please uninstall all versions of NodeJS and Meteor, then start over. See @abstr_hyperlink for more information.

### supported platforms

If you are running nodejs version @abstr_number .x or @abstr_number .x on Linux, OS X, or Windows ( @abstr_number or later) then you should be able to install fibers from npm just fine. If you are running nodejs v @abstr_number .x then you will need to use `npm install fibers@ @abstr_number`. If you are running nodejs v @abstr_number .x then you will need to use `npm install fibers@ @abstr_number`. For nodejs v @abstr_number .x you can use `npm install fibers@ @abstr_number`. If you are running an older (or newer) version of node or some other operating system you will have to compile fibers on your system.

(special thanks to @abstr_hyperlink for his work on fibers in Windows)

If you do end up needing to compile fibers first make sure you have node-gyp installed as a global dependency (`npm install -g node-gyp`), and that you have setup your build environment by following the instructions at @abstr_hyperlink . Ubuntu-flavored Linux users may need to run `sudo apt-get install g++` as well.

## EXAMPLES

The examples below describe basic use of `Fiber`, but note that it is **not recommended** to use `Fiber` without an abstraction in between your code and fibers. See "FUTURES" below for additional information.

### Sleep

This is a quick example of how you can write sleep() with fibers. Note that while the sleep() call is blocking inside the fiber, node is able to handle other events.
    
    
    $ cat sleep.js
    

@abstr_code_section 
    
    
    $ node sleep.js
    wait... Fri Jan  @abstr_number   @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT+ @abstr_number  (JST)
    back in main
    ok... Fri Jan  @abstr_number   @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT+ @abstr_number  (JST)
    

### Incremental Generator

Yielding execution will resume back in the fiber right where you left off. You can also pass values back and forth through yield() and run(). Again, the node event loop is never blocked while this script is running.
    
    
    $ cat generator.js
    

@abstr_code_section 
    
    
    $ node generator.js
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number
    

### Fibonacci Generator

Expanding on the incremental generator above, we can create a generator which returns a new Fibonacci number with each invocation. You can compare this with the @abstr_hyperlink Fibonacci example.
    
    
    $ cat fibonacci.js
    

@abstr_code_section 
    
    
    $ node fibonacci.js
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number 
     @abstr_number
    

### Basic Exceptions

Fibers are exception-safe; exceptions will continue travelling through fiber boundaries:
    
    
    $ cat error.js
    

@abstr_code_section 
    
    
    $ node error.js
    async work here...
    still working...
    just a little bit more...
    safely caught that error!
    Error: oh crap!
            at error.js: @abstr_number : @abstr_number 
    done!
    

## FUTURES

Using the `Fiber` class without an abstraction in between your code and the raw API is **not recommended**. `Fiber` is meant to implement the smallest amount of functionality in order make possible many different programming patterns. This makes the `Fiber` class relatively lousy to work with directly, but extremely powerful when coupled with a decent abstraction. There is no right answer for which abstraction is right for you and your project. Included with `node-fibers` is an implementation of "futures" which is fiber-aware. Usage of this library is documented below. There are several other externally-maintained options which can be found on the @abstr_hyperlink . You **should** feel encouraged to be creative with fibers and build a solution which works well with your project. For instance, `Future` is not a good abstraction to use if you want to build a generator function (see Fibonacci example above).

Using `Future` to wrap existing node functions. At no point is the node event loop blocked:
    
    
    $ cat ls.js
    

@abstr_code_section 
    
    
    $ node ls.js 
    Found  @abstr_number  files
    bin:  @abstr_number 
    fibers.js:  @abstr_number 
    .gitignore:  @abstr_number 
    README.md:  @abstr_number 
    future.js:  @abstr_number 
    .git:  @abstr_number 
    LICENSE:  @abstr_number 
    src:  @abstr_number 
    ls.js:  @abstr_number 
    Makefile:  @abstr_number 
    package.json:  @abstr_number
    

The future API is designed to make it easy to move between classic callback-style code and fiber-aware waiting code:
    
    
    $ cat sleep.js
    

@abstr_code_section 
    
    
    $ node sleep.js
    Set timer for  @abstr_number ms, waited  @abstr_number ms
    

## API DOCUMENTATION

Fiber's definition looks something like this:

@abstr_code_section 

Future's definition looks something like this:

@abstr_code_section 

## GARBAGE COLLECTION

If you intend to build generators, iterators, or "lazy lists", you should be aware that all fibers must eventually unwind. This is implemented by causing yield() to throw unconditionally when the library is trying to unwind your fiber-- either because reset() was called, or all handles to the fiber were lost and v @abstr_number wants to delete it.

Something like this will, at some point, cause an infinite loop in your application:

@abstr_code_section 

If you either call reset() on this fiber, or the v @abstr_number garbage collector decides it is no longer in use, the fiber library will attempt to unwind the fiber by causing all calls to yield() to throw. However, if you catch these exceptions and continue anyway, an infinite loop will occur.

There are other garbage collection issues that occur with misuse of fiber handles. If you grab a handle to a fiber from within itself, you should make sure that the fiber eventually unwinds. This application will leak memory:

@abstr_code_section 

There is no way to get back into the fiber that was started, however it's impossible for v @abstr_number 's garbage collector to detect this. With a handle to the fiber still outstanding, v @abstr_number will never garbage collect it and the stack will remain in memory until the application exits.

Thus, you should take care when grabbing references to `Fiber.current`.
