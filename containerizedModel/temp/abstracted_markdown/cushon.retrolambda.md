# Retrolambda: Use Lambdas on Java @abstr_number 

@abstr_hyperlink 

Just as there was _Retroweaver_ et al. for running Java @abstr_number code with generics on Java @abstr_number . @abstr_number , _Retrolambda_ lets you run Java @abstr_number code with **lambda expressions** , **method references** and **try-with-resources statements** on Java @abstr_number , @abstr_number or @abstr_number . It does this by transforming your Java @abstr_number compiled bytecode so that it can run on an older Java runtime. After the transformation they are just a bunch of normal .class files, without any additional runtime dependencies. Read more details.

There is also limited support for backporting **default methods** and **static methods on interfaces**. This feature is disabled by default.

Retrolambda supports backporting to Java @abstr_number , Java @abstr_number and Java @abstr_number runtimes. And for adventurous developers there are @abstr_hyperlink that may let you go from Java @abstr_number down to Java @abstr_number . @abstr_number .

Android developers may use Retrolambda to take advantage of the Java @abstr_number features on Android. Serge Zaitsev has written @abstr_hyperlink and there is a Gradle plugin which makes it easy.

Retrolambda does not backport the new Java @abstr_number APIs, but there are other projects that have backported some of them:

  * @abstr_hyperlink backports the `java.util.stream` API
  * @abstr_hyperlink backports the `java.time` API



## User Guide

Retrolambda can be run as a Maven plugin, Gradle plugin or command line application. Also have a look at some tips for using Retrolambda effectively.

### Maven Plugin

To run Retrolambda using Maven, add the following to your pom.xml:

@abstr_code_section 

See the @abstr_hyperlink for all possible parameters. There is also a usage example in @abstr_hyperlink 

### Gradle Plugin

@abstr_hyperlink is developed by Evan Tatarka. See its site for usage instructions.

### Command Line Application

@abstr_hyperlink the latest `retrolambda.jar` from Maven Central.

Use JDK @abstr_number to compile your source code.

Run Retrolambda, using Java @abstr_number , on the class files produced by JDK @abstr_number . Run `java -jar retrolambda.jar` without any additional options to see the instructions (for your convenience they are also shown below).

Your class files should now run on Java @abstr_number or older.

@abstr_code_section 

### Tips

Be sure to run comprehensive tests on your target JVM version (e.g. Java @abstr_number ), in case the code accidentally uses Java @abstr_number APIs or language features that Retrolambda doesn't backport.

During development, inside an IDE, it's the easiest to use Java @abstr_number , without Retrolamba, to compile and run tests. But in your continuous integration and release builds you should run all tests using the target Java version. For example, you can configure Maven Surefire Plugin to run tests @abstr_hyperlink .

I recommend setting up environment variables JAVA @abstr_number _HOME, JAVA @abstr_number _HOME etc. and referring to those variables in the build configuration, instead of relying on what happens to be the default Java version in JAVA_HOME.

You will need Java @abstr_number for compiling and also for generating Javadocs. JDK @abstr_number 's Javadoc tool will fail for some valid Java @abstr_number code.

## Backported Language Features

**Lambda expressions** are backported by converting them to anonymous inner classes. This includes the optimization of using a singleton instance for stateless lambda expressions to avoid repeated object allocation.

**Method references** are basically just syntax sugar for lambda expressions and they are backported in the same way.

**Try-with-resources statements** are backported by removing calls to `Throwable.addSuppressed` if the target bytecode version is below Java @abstr_number . If you would like the suppressed exceptions to be logged instead of swallowed, please create a feature request and we'll make it configurable.

_Optionally also:_

**Default methods** are backported by copying the default methods to a companion class (interface name + "$") as static methods, replacing the default methods in the interface with abstract methods, and by adding the necessary method implementations to all classes which implement that interface.

**Static methods on interfaces** are backported by moving the static methods to a companion class (interface name + "$"), and by changing all methods calls to call the new method location. [ @abstr_number ]

[ @abstr_number ] _The static methods are moved to a companion class even with default method support disabled, because some of them may be lambda implementation methods, but the method calls to static methods are not updated. This may cause weird error messages if static methods on interfaces are accidentally used without enabling default method support._

## Known Limitations

Does not backport Java @abstr_number APIs.

Backporting default methods and static methods on interfaces requires all backported interfaces and all classes which implement them or call their static methods to be backported together, with one execution of Retrolambda. In other words, you must _always do a clean build_. Also, backporting default methods won't work across module or dependency boundaries.

May break if a future JDK @abstr_number build stops generating a new class for each `invokedynamic` call. Retrolambda works so that it captures the bytecode that `java.lang.invoke.LambdaMetafactory` generates dynamically, so optimizations to that mechanism may break Retrolambda.

## Version History

### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Added the `-Dretrolambda.classpathFile` parameter to avoid the command line length limit ( @abstr_hyperlink )
  * Added the `-Dretrolambda.includedFilesFile` parameter to avoid the command line length limit ( @abstr_hyperlink )
  * Made it easier to invoke Retrolambda as a library. Made `Config` an interface and fixed an assumption of using the default file system ( @abstr_hyperlink )
  * Don't create a companion class when an interface has just a static initialization block because of constant fields ( @abstr_hyperlink )
  * Improved error messages: report the name of the class or lambda method which crashed Retrolambda ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Fixed method references to constructors causing VerifyError on Android ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Support for lambdas with marker interfaces ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Fixed a compile error when calling default methods from another module ( @abstr_hyperlink )
  * Fixed method references to constructors of the current class ( @abstr_hyperlink )
  * Removes bytecode references to `java.lang.invoke.MethodHandles.Lookup` on Java @abstr_number and older ( @abstr_hyperlink )
  * Copies non-class files from input to output directory ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Fixed Retrolambda generating stack map frames for Java @abstr_number bytecode, causing some bytecode tools to fail ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Fixed a hack which caused lambdas in interfaces to be backported twice, possibly producing broken method calls in the bytecode ( @abstr_hyperlink )
  * Fixed the handling of non-static lambda implementation methods in interfaces, i.e. lambdas which capture `this` ( @abstr_hyperlink )
  * Removes generic method signatures from the default method implementation methods which are placed in the interface's companion class, to avoid them getting out of sync with their erased method descriptors ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Fixed not backporting lambda expressions in default methods and static methods on interfaces ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Backports default methods and static methods on interfaces ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Backports lambda expressions in an interface's constant initializer ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Backports try-with-resources statements to Java @abstr_number and older by removing calls to `Throwable.addSuppressed` ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Support for serializable lambdas ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Fixed a crash when trying to backport Android classes ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Fixed a crash when trying backport classes which are nominally the same as those included in the JRE, but which have different bytecode ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Does not anymore require the use of a Java agent ( @abstr_hyperlink )
  * Maven plugin: by default run Retrolambda in the same process as Maven, making it a bit faster. If Maven is not running under Java @abstr_number , then will fall back to forking the process and using the Java agent mechanism



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Maven plugin: use the @abstr_hyperlink if available. The `java @abstr_number home` configuration parameter overrides this ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Added an optional `-Dretrolambda.includedFiles` parameter to support the incremental compilers of build tools ( @abstr_hyperlink )
  * Decides which lambda classes to save based on the current class being processed, instead of the class loader that loaded the lambda class ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Maven plugin: made the input and output directories configurable ( @abstr_hyperlink )
  * Maven plugin: by default use the current JRE for running Retrolambda. For the old behavior, add `<java @abstr_number home>${env.JAVA @abstr_number _HOME}</java @abstr_number home>` to the plugin configuration



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Android: Fixed NoSuchMethodError when calling a private method to which there is a method reference ( @abstr_hyperlink )
  * Fixed the possibility of accidentally overriding private methods to which there is method reference ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Fixed method references to private methods; will now make them package-private the same way as lambda implementation methods ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Fixed the Retrolambda Maven plugin not using the project's classpath ( @abstr_hyperlink )
  * Maven plugin: save `retrolambda.jar` under `target/retrolambda/`
  * Suppress false warning about class initializer methods on interfaces



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Maven plugin for running Retrolambda (thanks, @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Removes from interfaces bridge methods which were generated by JDK @abstr_number e.g. when an interface overrides a method and refines its return type ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Fixed incompatibility with the Eclipse JDT compiler, version Kepler SR @abstr_number with the Java @abstr_number support patch @abstr_number . @abstr_number . @abstr_number .v @abstr_number - @abstr_number ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Updated to work with JDK @abstr_number Early Access Build b @abstr_number ( @abstr_number - @abstr_number - @abstr_number ) ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Show help if the `-javaagent` parameter is missing ( @abstr_hyperlink )



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Create only one instance of lambdas which do not capture arguments; i.e. the same optimization as what JDK @abstr_number does
  * Start the sequence number of lambda classes from one (e.g. `com.example.Foo$$Lambda$ @abstr_number`) for each enclosing class



### Retrolambda @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number )

  * Backports lambda expressions and method references to Java @abstr_number and older
  * Tested to work with JDK @abstr_number Early Access Build b @abstr_number ( @abstr_number - @abstr_number - @abstr_number )


