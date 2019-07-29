@abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

  * Design goals
  * Integration 
    * CMake
    * Package Managers
  * Examples 
    * JSON as first-class data type
    * Serialization / Deserialization
    * STL-like access
    * Conversion from STL containers
    * JSON Pointer and JSON Patch
    * JSON Merge Patch
    * Implicit conversions
    * Conversions to/from arbitrary types
    * Specializing enum conversion
    * Binary formats (BSON, CBOR, MessagePack, and UBJSON)
  * Supported compilers
  * License
  * Contact
  * Thanks
  * Used third-party tools
  * Projects using JSON for Modern C++
  * Notes
  * Execute unit tests



## Design goals

There are myriads of @abstr_hyperlink libraries out there, and each may even have its reason to exist. Our class had these design goals:

  * **Intuitive syntax**. In languages such as Python, JSON feels like a first class data type. We used all the operator magic of modern C++ to achieve the same feeling in your code. Check out the examples below and you'll know what I mean.

  * **Trivial integration**. Our whole code consists of a single header file @abstr_hyperlink . That's it. No library, no subproject, no dependencies, no complex build system. The class is written in vanilla C++ @abstr_number . All in all, everything should require no adjustment of your compiler flags or project settings.

  * **Serious testing**. Our class is heavily @abstr_hyperlink and covers @abstr_hyperlink of the code, including all exceptional behavior. Furthermore, we checked with @abstr_hyperlink and the @abstr_hyperlink that there are no memory leaks. @abstr_hyperlink additionally runs fuzz tests against all parsers @abstr_number / @abstr_number , effectively executing billions of tests so far. To maintain high quality, the project is following the @abstr_hyperlink .




Other aspects were not so important to us:

  * **Memory efficiency**. Each JSON object has an overhead of one pointer (the maximal size of a union) and one enumeration element ( @abstr_number byte). The default generalization uses the following C++ data types: `std::string` for strings, `int @abstr_number _t`, `uint @abstr_number _t` or `double` for numbers, `std::map` for objects, `std::vector` for arrays, and `bool` for Booleans. However, you can template the generalized class `basic_json` to your needs.

  * **Speed**. There are certainly @abstr_hyperlink out there. However, if your goal is to speed up your development by adding JSON support with a single header, then this library is the way to go. If you know how to use a `std::vector` or `std::map`, you are already set.




See the @abstr_hyperlink for more information.

## Integration

@abstr_hyperlink is the single required file in `single_include/nlohmann` or @abstr_hyperlink . You need to add

@abstr_code_section 

to the files you want to process JSON and set the necessary switches to enable C++ @abstr_number (e.g., `-std=c++ @abstr_number` for GCC and Clang).

You can further use file @abstr_hyperlink for forward-declarations. The installation of json_fwd.hpp (as part of cmake's install step), can be achieved by setting `-DJSON_MultipleHeaders=ON`.

### CMake

You can also use the `nlohmann_json::nlohmann_json` interface target in CMake. This target populates the appropriate usage requirements for `INTERFACE_INCLUDE_DIRECTORIES` to point to the appropriate include directories and `INTERFACE_COMPILE_FEATURES` for the necessary C++ @abstr_number flags.

#### External

To use this library from a CMake project, you can locate it directly with `find_package()` and use the namespaced imported target from the generated package configuration:

@abstr_code_section 

The package configuration file, `nlohmann_jsonConfig.cmake`, can be used either from an install tree or directly out of the build tree.

#### Embedded

To embed the library directly into an existing CMake project, place the entire source tree in a subdirectory and call `add_subdirectory()` in your `CMakeLists.txt` file:

@abstr_code_section 

#### Supporting Both

To allow your project to support either an externally supplied or an embedded JSON library, you can use a pattern akin to the following:

@abstr_code_section @abstr_code_section 

`thirdparty/nlohmann_json` is then a complete copy of this source tree.

### Package Managers

:beer: If you are using OS X and @abstr_hyperlink , just type `brew tap nlohmann/json` and `brew install nlohmann-json` and you're set. If you want the bleeding edge rather than the latest release, use `brew install nlohmann-json --HEAD`.

If you are using the @abstr_hyperlink , then you can get a wrap file by downloading it from @abstr_hyperlink , or simply use `meson wrap install nlohmann_json`.

If you are using @abstr_hyperlink to manage your dependencies, merely add `jsonformoderncpp/x.y.z@vthiery/stable` to your `conanfile.py`'s requires, where `x.y.z` is the release version you want to use. Please file issues @abstr_hyperlink if you experience problems with the packages.

If you are using @abstr_hyperlink to manage your dependencies, you can use the `nlohmann_json` package. Please see the @abstr_hyperlink for any issues regarding the packaging.

If you are using @abstr_hyperlink on your project for external dependencies, then you can use the @abstr_hyperlink . Please see the hunter project for any issues regarding the packaging.

If you are using @abstr_hyperlink , you can install this library's module with `buckaroo add github.com/buckaroo-pm/nlohmann-json`. Please file issues @abstr_hyperlink . There is a demo repo @abstr_hyperlink .

If you are using @abstr_hyperlink on your project for external dependencies, then you can use the @abstr_hyperlink . Please see the vcpkg project for any issues regarding the packaging.

If you are using @abstr_hyperlink , you can install the latest development version with `cget install nlohmann/json`. A specific version can be installed with `cget install nlohmann/json@v @abstr_number . @abstr_number . @abstr_number`. Also, the multiple header version can be installed by adding the `-DJSON_MultipleHeaders=ON` flag (i.e., `cget install nlohmann/json -DJSON_MultipleHeaders=ON`).

If you are using @abstr_hyperlink , you can use the library by adding pod `"nlohmann_json", '~> @abstr_number . @abstr_number . @abstr_number '` to your podfile (see @abstr_hyperlink ). Please file issues @abstr_hyperlink .

If you are using @abstr_hyperlink , you can use the package @abstr_hyperlink . Please check @abstr_hyperlink on how to use the package. Please files issues @abstr_hyperlink .

If you are using @abstr_hyperlink , you can use the package @abstr_hyperlink from @abstr_hyperlink executing `conda install -c conda-forge nlohmann_json`. Please file issues @abstr_hyperlink .

If you are using @abstr_hyperlink , your can use the @abstr_hyperlink package, just type `pacman -S mingw-w @abstr_number -i @abstr_number -nlohmann_json` or `pacman -S mingw-w @abstr_number -x @abstr_number _ @abstr_number -nlohmann_json` for installation. Please file issues @abstr_hyperlink if you experience problems with the packages.

## Examples

Beside the examples below, you may want to check the @abstr_hyperlink where each function contains a separate code example (e.g., check out @abstr_hyperlink ). All @abstr_hyperlink can be compiled and executed on their own (e.g., file @abstr_hyperlink ).

### JSON as first-class data type

Here are some examples to give you an idea how to use the class.

Assume you want to create the JSON object

@abstr_code_section 

With this library, you could write:

@abstr_code_section 

Note that in all these cases, you never need to "tell" the compiler which JSON value type you want to use. If you want to be explicit or express some edge cases, the functions @abstr_hyperlink and @abstr_hyperlink will help:

@abstr_code_section 

### Serialization / Deserialization

#### To/from strings

You can create a JSON value (deserialization) by appending `_json` to a string literal:

@abstr_code_section 

Note that without appending the `_json` suffix, the passed string literal is not parsed, but just used as JSON string value. That is, `json j = "{ \"happy\": true, \"pi\": @abstr_number . @abstr_number }"` would just store the string `"{ "happy": true, "pi": @abstr_number . @abstr_number }"` rather than parsing the actual object.

The above example can also be expressed explicitly using @abstr_hyperlink :

@abstr_code_section 

You can also get a string representation of a JSON value (serialize):

@abstr_code_section 

Note the difference between serialization and assignment:

@abstr_code_section 

@abstr_hyperlink always returns the serialized value, and @abstr_hyperlink returns the originally stored string value.

Note the library only supports UTF- @abstr_number . When you store strings with different encodings in the library, calling @abstr_hyperlink may throw an exception unless `json::error_handler_t::replace` or `json::error_handler_t::ignore` are used as error handlers.

#### To/from streams (e.g. files, string streams)

You can also use streams to serialize and deserialize:

@abstr_code_section 

These operators work for any subclasses of `std::istream` or `std::ostream`. Here is the same example with files:

@abstr_code_section 

Please note that setting the exception bit for `failbit` is inappropriate for this use case. It will result in program termination due to the `noexcept` specifier in use.

#### Read from iterator range

You can also parse JSON from an iterator range; that is, from any container accessible by iterators whose content is stored as contiguous byte sequence, for instance a `std::vector<std::uint @abstr_number _t>`:

@abstr_code_section 

You may leave the iterators for the range [begin, end):

@abstr_code_section 

#### SAX interface

The library uses a SAX-like interface with the following functions:

@abstr_code_section 

The return value of each function determines whether parsing should proceed.

To implement your own SAX handler, proceed as follows:

@abstr_number . Implement the SAX interface in a class. You can use class `nlohmann::json_sax<json>` as base class, but you can also use any class where the functions described above are implemented and public. @abstr_number . Create an object of your SAX interface class, e.g. `my_sax`. @abstr_number . Call `bool json::sax_parse(input, &my_sax)`; where the first parameter can be any input like a string or an input stream and the second parameter is a pointer to your SAX interface.

Note the `sax_parse` function only returns a `bool` indicating the result of the last executed SAX event. It does not return a `json` value - it is up to you to decide what to do with the SAX events. Furthermore, no exceptions are thrown in case of a parse error - it is up to you what to do with the exception object passed to your `parse_error` implementation. Internally, the SAX interface is used for the DOM parser (class `json_sax_dom_parser`) as well as the acceptor (`json_sax_acceptor`), see file @abstr_hyperlink .

### STL-like access

We designed the JSON class to behave just like an STL container. In fact, it satisfies the @abstr_hyperlink requirement.

@abstr_code_section 

### Conversion from STL containers

Any sequence container (`std::array`, `std::vector`, `std::deque`, `std::forward_list`, `std::list`) whose values can be used to construct JSON values (e.g., integers, floating point numbers, Booleans, string types, or again STL containers described in this section) can be used to create a JSON array. The same holds for similar associative containers (`std::set`, `std::multiset`, `std::unordered_set`, `std::unordered_multiset`), but in these cases the order of the elements of the array depends on how the elements are ordered in the respective STL container.

@abstr_code_section 

Likewise, any associative key-value containers (`std::map`, `std::multimap`, `std::unordered_map`, `std::unordered_multimap`) whose keys can construct an `std::string` and whose values can be used to construct JSON values (see examples above) can be used to create a JSON object. Note that in case of multimaps only one key is used in the JSON object and the value depends on the internal order of the STL container.

@abstr_code_section 

### JSON Pointer and JSON Patch

The library supports **JSON Pointer** ( @abstr_hyperlink ) as alternative means to address structured values. On top of this, **JSON Patch** ( @abstr_hyperlink ) allows to describe differences between two JSON values - effectively allowing patch and diff operations known from Unix.

@abstr_code_section 

### JSON Merge Patch

The library supports **JSON Merge Patch** ( @abstr_hyperlink ) as a patch format. Instead of using JSON Pointer (see above) to specify values to be manipulated, it describes the changes using a syntax that closely mimics the document being modified.

@abstr_code_section 

### Implicit conversions

Supported types can be implicitly converted to JSON values.

It is recommended to **NOT USE** implicit conversions **FROM** a JSON value. You can find more details about this recommendation @abstr_hyperlink . 

@abstr_code_section 

Note that `char` types are not automatically converted to JSON strings, but to integer numbers. A conversion to a string must be specified explicitly:

@abstr_code_section 

### Arbitrary types conversions

Every type can be serialized in JSON, not just STL containers and scalar types. Usually, you would do something along those lines:

@abstr_code_section 

It works, but that's quite a lot of boilerplate... Fortunately, there's a better way:

@abstr_code_section 

#### Basic usage

To make this work with one of your types, you only need to provide two functions:

@abstr_code_section 

That's all! When calling the `json` constructor with your type, your custom `to_json` method will be automatically called. Likewise, when calling `get<your_type>()` or `get_to(your_type&)`, the `from_json` method will be called.

Some important things:

  * Those methods **MUST** be in your type's namespace (which can be the global namespace), or the library will not be able to locate them (in this example, they are in namespace `ns`, where `person` is defined).
  * Those methods **MUST** be available (e.g., proper headers must be included) everywhere you use these conversions. Look at @abstr_hyperlink for errors that may occur otherwise.
  * When using `get<your_type>()`, `your_type` **MUST** be @abstr_hyperlink . (There is a way to bypass this requirement described later.)
  * In function `from_json`, use function @abstr_hyperlink to access the object values rather than `operator[]`. In case a key does not exist, `at` throws an exception that you can handle, whereas `operator[]` exhibits undefined behavior.
  * You do not need to add serializers or deserializers for STL types like `std::vector`: the library already implements these.



#### How do I convert third-party types?

This requires a bit more advanced technique. But first, let's see how this conversion mechanism works:

The library uses **JSON Serializers** to convert types to json. The default serializer for `nlohmann::json` is `nlohmann::adl_serializer` (ADL means @abstr_hyperlink ).

It is implemented like this (simplified):

@abstr_code_section 

This serializer works fine when you have control over the type's namespace. However, what about `boost::optional` or `std::filesystem::path` (C++ @abstr_number )? Hijacking the `boost` namespace is pretty bad, and it's illegal to add something other than template specializations to `std`...

To solve this, you need to add a specialization of `adl_serializer` to the `nlohmann` namespace, here's an example:

@abstr_code_section 

#### How can I use `get()` for non-default constructible/non-copyable types?

There is a way, if your type is @abstr_hyperlink . You will need to specialize the `adl_serializer` as well, but with a special `from_json` overload:

@abstr_code_section 

#### Can I write my own serializer? (Advanced use)

Yes. You might want to take a look at @abstr_hyperlink in the test suite, to see a few examples.

If you write your own serializer, you'll need to do a few things:

  * use a different `basic_json` alias than `nlohmann::json` (the last template parameter of `basic_json` is the `JSONSerializer`)
  * use your `basic_json` alias (or a template parameter) in all your `to_json`/`from_json` methods
  * use `nlohmann::to_json` and `nlohmann::from_json` when you need ADL



Here is an example, without simplifications, that only accepts types with a size <= @abstr_number , and uses ADL.

@abstr_code_section 

Be **very** careful when reimplementing your serializer, you can stack overflow if you don't pay attention:

@abstr_code_section 

### Specializing enum conversion

By default, enum values are serialized to JSON as integers. In some cases this could result in undesired behavior. If an enum is modified or re-ordered after data has been serialized to JSON, the later de-serialized JSON data may be undefined or a different enum value than was originally intended.

It is possible to more precisely specify how a given enum is mapped to and from JSON as shown below:

@abstr_code_section 

The `NLOHMANN_JSON_SERIALIZE_ENUM()` macro declares a set of `to_json()` / `from_json()` functions for type `TaskState` while avoiding repetition and boilerplate serilization code.

**Usage:**

@abstr_code_section 

Just as in Arbitrary Type Conversions above, \- `NLOHMANN_JSON_SERIALIZE_ENUM()` MUST be declared in your enum type's namespace (which can be the global namespace), or the library will not be able to locate it and it will default to integer serialization. \- It MUST be available (e.g., proper headers must be included) everywhere you use the conversions.

Other Important points: \- When using `get<ENUM_TYPE>()`, undefined JSON values will default to the first pair specified in your map. Select this default pair carefully. \- If an enum or JSON value is specified more than once in your map, the first matching occurrence from the top of the map will be returned when converting to or from JSON.

### Binary formats (BSON, CBOR, MessagePack, and UBJSON)

Though JSON is a ubiquitous data format, it is not a very compact format suitable for data exchange, for instance over a network. Hence, the library supports @abstr_hyperlink (Binary JSON), @abstr_hyperlink (Concise Binary Object Representation), @abstr_hyperlink , and @abstr_hyperlink (Universal Binary JSON Specification) to efficiently encode JSON values to byte vectors and to decode such vectors.

@abstr_code_section 

## Supported compilers

Though it's @abstr_number already, the support for C++ @abstr_number is still a bit sparse. Currently, the following compilers are known to work:

  * GCC @abstr_number . @abstr_number - @abstr_number . @abstr_number (and possibly later)
  * Clang @abstr_number . @abstr_number - @abstr_number . @abstr_number (and possibly later)
  * Intel C++ Compiler @abstr_number . @abstr_number . @abstr_number (and possibly later)
  * Microsoft Visual C++ @abstr_number / Build Tools @abstr_number . @abstr_number . @abstr_number . @abstr_number (and possibly later)
  * Microsoft Visual C++ @abstr_number / Build Tools @abstr_number . @abstr_number . @abstr_number . @abstr_number (and possibly later)



I would be happy to learn about other compilers/versions.

Please note:

  * GCC @abstr_number . @abstr_number has a bug @abstr_hyperlink ): multiline raw strings cannot be the arguments to macros. Don't use multiline raw strings directly in macros with this compiler.
  * Android defaults to using very old compilers and C++ libraries. To fix this, add the following to your `Application.mk`. This will switch to the LLVM C++ library, the Clang compiler, and enable C++ @abstr_number and other features disabled by default.

@abstr_code_section 

The code compiles successfully with @abstr_hyperlink , Revision @abstr_number - @abstr_number (and possibly later) and @abstr_hyperlink version @abstr_number .

  * For GCC running on MinGW or Android SDK, the error `'to_string' is not a member of 'std'` (or similarly, for `strtod`) may occur. Note this is not an issue with the code, but rather with the compiler itself. On Android, see above to build with a newer environment. For MinGW, please refer to @abstr_hyperlink and @abstr_hyperlink for information on how to fix this bug. For Android NDK using `APP_STL := gnustl_static`, please refer to @abstr_hyperlink .

  * Unsupported versions of GCC and Clang are rejected by `#error` directives. This can be switched off by defining `JSON_SKIP_UNSUPPORTED_COMPILER_CHECK`. Note that you can expect no support in this case.




The following compilers are currently used in continuous integration at @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink :

| Compiler | Operating System | Version String | |-----------------------|------------------------------|----------------| | GCC @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | g++- @abstr_number . @abstr_number (Ubuntu @abstr_number . @abstr_number . @abstr_number - @abstr_number ubuntu @abstr_number ~ @abstr_number . @abstr_number . @abstr_number ) @abstr_number . @abstr_number . @abstr_number | | GCC @abstr_number . @abstr_number . @abstr_number | CentOS Release- @abstr_number - @abstr_number . @abstr_number . @abstr_number .el @abstr_number .centos.x @abstr_number _ @abstr_number | g++ (GCC) @abstr_number . @abstr_number . @abstr_number @abstr_number (Red Hat @abstr_number . @abstr_number . @abstr_number - @abstr_number ) | | GCC @abstr_number . @abstr_number . @abstr_number (armv @abstr_number l) | Raspbian GNU/Linux @abstr_number (jessie) | g++ (Raspbian @abstr_number . @abstr_number . @abstr_number - @abstr_number +deb @abstr_number u @abstr_number ) @abstr_number . @abstr_number . @abstr_number | | GCC @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | g++- @abstr_number . @abstr_number (Ubuntu @abstr_number . @abstr_number . @abstr_number - @abstr_number ubuntu @abstr_number ~ @abstr_number . @abstr_number . @abstr_number ) @abstr_number . @abstr_number . @abstr_number | | GCC @abstr_number . @abstr_number . @abstr_number (armv @abstr_number l) | Ubuntu @abstr_number . @abstr_number LTS | g++ (Ubuntu/Linaro @abstr_number . @abstr_number . @abstr_number - @abstr_number ubuntu @abstr_number ) @abstr_number . @abstr_number . @abstr_number @abstr_number | | GCC @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | g++- @abstr_number (Ubuntu @abstr_number . @abstr_number . @abstr_number - @abstr_number ubuntu @abstr_number ~ @abstr_number . @abstr_number ) @abstr_number . @abstr_number . @abstr_number @abstr_number | | GCC @abstr_number . @abstr_number . @abstr_number | Fedora release @abstr_number (Twenty Four) | g++ (GCC) @abstr_number . @abstr_number . @abstr_number @abstr_number (Red Hat @abstr_number . @abstr_number . @abstr_number - @abstr_number ) | | GCC @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | g++- @abstr_number (Ubuntu @abstr_number . @abstr_number . @abstr_number - @abstr_number ubuntu @abstr_number ~ @abstr_number . @abstr_number ) @abstr_number . @abstr_number . @abstr_number @abstr_number | | GCC @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | g++- @abstr_number (Ubuntu @abstr_number . @abstr_number . @abstr_number - @abstr_number ubuntu @abstr_number ~ @abstr_number . @abstr_number ) @abstr_number . @abstr_number . @abstr_number | | GCC @abstr_number . @abstr_number . @abstr_number | Windows Server @abstr_number R @abstr_number (x @abstr_number ) | g++ (x @abstr_number _ @abstr_number -posix-seh-rev @abstr_number , Built by MinGW-W @abstr_number project) @abstr_number . @abstr_number . @abstr_number | | GCC @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | g++- @abstr_number (Ubuntu @abstr_number . @abstr_number . @abstr_number - @abstr_number ubuntu @abstr_number ~ @abstr_number . @abstr_number ) @abstr_number . @abstr_number . @abstr_number | | Clang @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | clang version @abstr_number . @abstr_number . @abstr_number - @abstr_number ubuntu @abstr_number ~trusty @abstr_number (tags/RELEASE_ @abstr_number /final) (based on LLVM @abstr_number . @abstr_number . @abstr_number ) | | Clang @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | clang version @abstr_number . @abstr_number . @abstr_number -svn @abstr_number - @abstr_number ~exp @abstr_number (branches/release_ @abstr_number ) (based on LLVM @abstr_number . @abstr_number . @abstr_number ) | | Clang @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | clang version @abstr_number . @abstr_number . @abstr_number -svn @abstr_number - @abstr_number ~exp @abstr_number (branches/release_ @abstr_number ) (based on LLVM @abstr_number . @abstr_number . @abstr_number ) | | Clang @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | clang version @abstr_number . @abstr_number . @abstr_number - @abstr_number ubuntu @abstr_number ~trusty @abstr_number (tags/RELEASE_ @abstr_number /final) | | Clang @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | clang version @abstr_number . @abstr_number . @abstr_number - @abstr_number ubuntu @abstr_number ~ @abstr_number . @abstr_number . @abstr_number (tags/RELEASE_ @abstr_number /rc @abstr_number ) | | Clang @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | clang version @abstr_number . @abstr_number . @abstr_number -svn @abstr_number - @abstr_number ~exp @abstr_number (branches/release_ @abstr_number ) | | Clang @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | clang version @abstr_number . @abstr_number . @abstr_number -svn @abstr_number - @abstr_number ~exp @abstr_number ~ @abstr_number . @abstr_number (branches/release_ @abstr_number ) | | Clang @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | clang version @abstr_number . @abstr_number . @abstr_number -svn @abstr_number - @abstr_number ~exp @abstr_number ~ @abstr_number . @abstr_number (branches/release_ @abstr_number ) | | Clang @abstr_number . @abstr_number . @abstr_number | Ubuntu @abstr_number . @abstr_number . @abstr_number LTS | clang version @abstr_number . @abstr_number . @abstr_number -svn @abstr_number - @abstr_number ~exp @abstr_number ~ @abstr_number . @abstr_number (branches/release_ @abstr_number ) | | Clang Xcode @abstr_number . @abstr_number | OSX @abstr_number . @abstr_number . @abstr_number | Apple LLVM version @abstr_number . @abstr_number . @abstr_number (clang- @abstr_number . @abstr_number . @abstr_number ) | | Clang Xcode @abstr_number . @abstr_number | OSX @abstr_number . @abstr_number . @abstr_number | Apple LLVM version @abstr_number . @abstr_number . @abstr_number (clang- @abstr_number . @abstr_number . @abstr_number ) | | Clang Xcode @abstr_number . @abstr_number | OSX @abstr_number . @abstr_number . @abstr_number | Apple LLVM version @abstr_number . @abstr_number . @abstr_number (clang- @abstr_number . @abstr_number . @abstr_number ) | | Clang Xcode @abstr_number . @abstr_number | OSX @abstr_number . @abstr_number . @abstr_number | Apple LLVM version @abstr_number . @abstr_number . @abstr_number (clang- @abstr_number . @abstr_number . @abstr_number . @abstr_number ) | | Clang Xcode @abstr_number . @abstr_number | OSX @abstr_number . @abstr_number . @abstr_number | Apple LLVM version @abstr_number . @abstr_number . @abstr_number (clang- @abstr_number . @abstr_number . @abstr_number . @abstr_number ) | | Clang Xcode @abstr_number . @abstr_number | OSX @abstr_number . @abstr_number . @abstr_number | Apple LLVM version @abstr_number . @abstr_number . @abstr_number (clang- @abstr_number . @abstr_number . @abstr_number . @abstr_number ) | | Clang Xcode @abstr_number . @abstr_number | OSX @abstr_number . @abstr_number . @abstr_number | Apple LLVM version @abstr_number . @abstr_number . @abstr_number (clang- @abstr_number . @abstr_number . @abstr_number . @abstr_number ) | | Visual Studio @abstr_number @abstr_number | Windows Server @abstr_number R @abstr_number (x @abstr_number ) | Microsoft (R) Build Engine version @abstr_number . @abstr_number . @abstr_number . @abstr_number , MSVC @abstr_number . @abstr_number . @abstr_number . @abstr_number | | Visual Studio @abstr_number | Windows Server @abstr_number | Microsoft (R) Build Engine version @abstr_number . @abstr_number . @abstr_number . @abstr_number , MSVC @abstr_number . @abstr_number . @abstr_number . @abstr_number |

## License

@abstr_image 

The class is licensed under the @abstr_hyperlink :

Copyright © @abstr_number - @abstr_number @abstr_hyperlink 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

* * *

The class contains the UTF- @abstr_number Decoder from Bjoern Hoehrmann which is licensed under the @abstr_hyperlink (see above). Copyright © @abstr_number - @abstr_number @abstr_hyperlink @abstr_hyperlink 

The class contains a slightly modified version of the Grisu @abstr_number algorithm from Florian Loitsch which is licensed under the @abstr_hyperlink (see above). Copyright © @abstr_number @abstr_hyperlink 

The class contains a copy of @abstr_hyperlink from Evan Nemerson which is licensed as @abstr_hyperlink .

## Contact

If you have questions regarding the library, I would like to invite you to @abstr_hyperlink . Please describe your request, problem, or question as detailed as possible, and also mention the version of the library you are using as well as the version of your compiler and operating system. Opening an issue at GitHub allows other users and contributors to this library to collaborate. For instance, I have little experience with MSVC, and most issues in this regard have been solved by a growing community. If you have a look at the @abstr_hyperlink , you will see that we react quite timely in most cases.

Only if your request would contain confidential information, please @abstr_hyperlink . For encrypted messages, please use @abstr_hyperlink .

## Security

@abstr_hyperlink and @abstr_hyperlink are signed with this @abstr_hyperlink .

## Thanks

I deeply appreciate the help of the following people.

@abstr_image 

  * @abstr_hyperlink implemented CMake support and lcov integration, realized escape and Unicode handling in the string parser, and fixed the JSON serialization.
  * @abstr_hyperlink fixed an issue with double deletion in the iterator classes.
  * @abstr_hyperlink made the iterators of the class composable to other libraries.
  * @abstr_hyperlink fixed a bug that hindered the class to compile with Clang.
  * Tomas Åblad found a bug in the iterator implementation.
  * @abstr_hyperlink fixed a bug in the floating-point serialization.
  * @abstr_hyperlink implemented code to parse streams incrementally. Furthermore, he greatly improved the parser class by allowing the definition of a filter function to discard undesired elements while parsing.
  * @abstr_hyperlink fixed a bug in the compilation with GCC @abstr_number . @abstr_number .
  * @abstr_hyperlink fixed a bug in and improved the performance of the comparison operators.
  * @abstr_hyperlink pointed out a bug in the handling with NaN and infinity values. He also improved the performance of the string escaping.
  * @abstr_hyperlink implemented a conversion from anonymous enums.
  * @abstr_hyperlink patiently pushed forward the support for Microsoft Visual studio.
  * @abstr_hyperlink simplified the implementation of reverse iterators and helped with numerous hints and improvements. In particular, he pushed forward the implementation of user-defined types.
  * @abstr_hyperlink fixed a bug in the Unicode handling.
  * @abstr_hyperlink fixed some typos in the examples.
  * @abstr_hyperlink cleaned up some pointers and implemented exception-safe memory allocation.
  * @abstr_hyperlink took care of a small namespace issue.
  * @abstr_hyperlink correct a variable name in the documentation.
  * @abstr_hyperlink overloaded `parse()` to accept an rvalue reference.
  * @abstr_hyperlink fixed a subtlety in MSVC type support and implemented the `get_ref()` function to get a reference to stored values.
  * @abstr_hyperlink added a workaround that allows compilation using Android NDK.
  * @abstr_hyperlink replaced a function that was marked as unsafe by Visual Studio.
  * @abstr_hyperlink fixed two small warnings.
  * @abstr_hyperlink noted a potential portability problem in the `has_mapped_type` function.
  * @abstr_hyperlink fixed some typos in the contribution guidelines.
  * @abstr_hyperlink fixed the array subscript operator, an issue that failed the MSVC build, and floating-point parsing/dumping. He further added support for unsigned integer numbers and implemented better roundtrip support for parsed numbers.
  * @abstr_hyperlink fixed a link in the README file.
  * @abstr_hyperlink added support for American Fuzzy Lop.
  * @abstr_hyperlink fixed an example in the README file.
  * @abstr_hyperlink noted a wrong URL in the README file.
  * @abstr_hyperlink fixed a namespace issue with `int @abstr_number _t` and `uint @abstr_number _t`.
  * @abstr_hyperlink analyzed the issues with GCC @abstr_number . @abstr_number and proposed a @abstr_hyperlink .
  * @abstr_hyperlink added useful notes to the README file about Android.
  * @abstr_hyperlink added a fix to use move iterators and improved the integration via CMake.
  * @abstr_hyperlink cleaned up the CMake files.
  * @abstr_hyperlink fixed a subtle bug with MSVC @abstr_number which was also proposed by @abstr_hyperlink .
  * @abstr_hyperlink fixed a small typo.
  * @abstr_hyperlink found a really embarrassing performance regression in the @abstr_number . @abstr_number . @abstr_number release.
  * @abstr_hyperlink fixed one of the last conversion warnings.
  * @abstr_hyperlink fixed a warning in a test case.
  * @abstr_hyperlink patiently and constructively oversaw the long way toward @abstr_hyperlink . He also implemented the magic behind the serialization/deserialization of user-defined types and split the single header file into smaller chunks.
  * @abstr_hyperlink fixed a minor issue in the documentation.
  * @abstr_hyperlink fixed the documentation regarding conversions from `std::multiset`.
  * @abstr_hyperlink overworked the CMake files to ease project inclusion.
  * @abstr_hyperlink made a SFINAE hack more readable and added Visual Studio @abstr_number to the build matrix.
  * @abstr_hyperlink fixed a grammar issue in the README file.
  * @abstr_hyperlink found a subtle bug in the `dump()` function.
  * @abstr_hyperlink pointed to @abstr_hyperlink to avoid too much locale joggling, found some nice performance improvements in the parser, improved the benchmarking code, and realized locale-independent number parsing and printing.
  * @abstr_hyperlink had an idea how to fix the Coverity scan.
  * @abstr_hyperlink silenced a nasty documentation warning.
  * @abstr_hyperlink fixed an integer overflow check.
  * @abstr_hyperlink merged two iterator classes into a smaller one.
  * @abstr_hyperlink helped to get Travis execute the tests with Clang's sanitizers.
  * @abstr_hyperlink fixed an example in the README file.
  * @abstr_hyperlink supported the implementation of user-defined types.
  * @abstr_hyperlink helped to get the user-defined types working with Visual Studio.
  * @abstr_hyperlink supported the implementation of user-defined types.
  * @abstr_hyperlink noted a typo in an example.
  * @abstr_hyperlink found a way for a @abstr_number x speedup for the compilation time of the test suite.
  * @abstr_hyperlink found proposed an improvement for the examples section.
  * @abstr_hyperlink noted a typo in the README.
  * @abstr_hyperlink fixed a bug in the comparison with `nullptr`s.
  * @abstr_hyperlink added @abstr_hyperlink support to speed up the compilation.
  * @abstr_hyperlink noted a typo in the README, removed unnecessary bit arithmetic, and fixed some `-Weffc++` warnings.
  * @abstr_hyperlink made exceptions more visible.
  * @abstr_hyperlink fixed a compiler warning.
  * @abstr_hyperlink made sure all pushed warnings are properly popped.
  * @abstr_hyperlink found a bug in the documentation.
  * @abstr_hyperlink implemented a Meson build description.
  * @abstr_hyperlink fixed a warning in ICC and improved the iterator implementation.
  * @abstr_hyperlink maintains a package for the Conan package manager.
  * @abstr_hyperlink fixed a potential issue with MSVC and `std::min`.
  * @abstr_hyperlink fixed some typos.
  * @abstr_hyperlink noted a misleading documentation about comparison of floats.
  * @abstr_hyperlink reduced the memory consumption by replacing `<iostream>` with `<iosfwd>`.
  * @abstr_hyperlink cleaned up the CMake files to simplify including/reusing of the library.
  * @abstr_hyperlink allowed for moving values from initializer lists.
  * @abstr_hyperlink fixed a typo.
  * @abstr_hyperlink fixed a typo.
  * @abstr_hyperlink fixed an issue related to the Intel OSX compiler.
  * @abstr_hyperlink fixed a typo.
  * @abstr_hyperlink fixed a subtle error in a precondition check.
  * @abstr_hyperlink noted an error in a code sample.
  * @abstr_hyperlink reported some warnings with ICC and helped fixing them.
  * @abstr_hyperlink simplified reading from input streams.
  * @abstr_hyperlink fixed a small compilation error.
  * @abstr_hyperlink fixed all MSVC warnings.
  * @abstr_hyperlink added a Doxygen tag file.
  * @abstr_hyperlink helped fixing a warning in ICC.
  * @abstr_hyperlink helped fixing some warnings in MSVC.
  * @abstr_hyperlink avoided unnecessary string copies in `find()` and `count()`.
  * @abstr_hyperlink fixed some typos.
  * @abstr_hyperlink updated the Hunter package links.
  * @abstr_hyperlink added a `.natvis` for the MSVC debug view.
  * @abstr_hyperlink fixed some C++ @abstr_number deprecation warnings.
  * @abstr_hyperlink fixed some MSVC warnings.
  * @abstr_hyperlink integrated the Grisu @abstr_number algorithm for proper floating-point formatting, allowing more roundtrip checks to succeed.
  * @abstr_hyperlink fixed a Markdown issue in the README.
  * @abstr_hyperlink fixed a compiler warning.
  * @abstr_hyperlink allowed to template the string type in the serialization and added the possibility to override the exceptional behavior.
  * @abstr_hyperlink helped fixing an ICC error.
  * @abstr_hyperlink fixed links in the README file.
  * @abstr_hyperlink found a bug in the implementation of CBOR's indefinite length strings.
  * @abstr_hyperlink added a note on the cget package manager.
  * @abstr_hyperlink made the integration section of the README more concise.
  * @abstr_hyperlink detected and fixed a memory leak in the parser callback.
  * @abstr_hyperlink allowed to dump JSON to an alternative string type.
  * @abstr_hyperlink overworked the C++ @abstr_number compiler checks in CMake.
  * @abstr_hyperlink simplified a CMake check and added support for the @abstr_hyperlink .
  * @abstr_hyperlink fixed a typo.
  * @abstr_hyperlink fixed a version number in the compilers section.
  * @abstr_hyperlink adjusted the CMake files to the CMake packaging guidelines and provided documentation for the CMake integration.
  * @abstr_hyperlink fixed a typo.
  * @abstr_hyperlink fixed a typo.
  * @abstr_hyperlink removed the dependency from `std::stringstream`.
  * @abstr_hyperlink added code to use alternative string implementations.
  * @abstr_hyperlink allowed to use more algorithms with the `items()` function.
  * @abstr_hyperlink fixed the Meson include directory and fixed the links to cppreference.com.
  * @abstr_hyperlink fixed the compilation with MSVC @abstr_number in debug mode.
  * @abstr_hyperlink fixed the test suite and re-enabled several test cases.
  * @abstr_hyperlink introduced the macro `JSON_INTERNAL_CATCH` to control the exception handling inside the library.
  * @abstr_hyperlink fixed a compiler warning.
  * @abstr_hyperlink fixed a subtle compilation error with Clang @abstr_number . @abstr_number . @abstr_number .
  * @abstr_hyperlink allowed to call `find_package` without installing the library.
  * @abstr_hyperlink fixed an issue with a double macro definition.
  * @abstr_hyperlink made some error messages more understandable.
  * @abstr_hyperlink fixed a compilation problem with the Intel C++ compiler.
  * @abstr_hyperlink fixed a compilation problem.
  * @abstr_hyperlink added version and license information to the Meson build file.
  * @abstr_hyperlink added support for GCC @abstr_number . @abstr_number .
  * @abstr_hyperlink made sure the test suite does not stall when run in the wrong directory.
  * @abstr_hyperlink fixed an MSVC @abstr_number warning.
  * @abstr_hyperlink implemented the `NLOHMANN_JSON_SERIALIZE_ENUM` macro to quickly define a enum/JSON mapping.
  * @abstr_hyperlink added line and column information to parse errors.
  * @abstr_hyperlink added BSON support.
  * @abstr_hyperlink added support for structured bindings.
  * @abstr_hyperlink added support for Clang @abstr_number . @abstr_number . @abstr_number (PS @abstr_number version).
  * @abstr_hyperlink implemented an input adapter to read from `FILE*`.
  * @abstr_hyperlink fixed a link in the documentation.
  * @abstr_hyperlink fixed a typo in the documentation.
  * @abstr_hyperlink fixed an MSVC warning.
  * @abstr_hyperlink added code to avoid an issue with MSVC.
  * @abstr_hyperlink fixed a bug when JSON was parsed from an input stream.
  * @abstr_hyperlink allowed to install the library via Meson.
  * @abstr_hyperlink found an issue with a missing namespace.
  * @abstr_hyperlink fixed a compilation issue with libc @abstr_number . @abstr_number .
  * @abstr_hyperlink fixed the endian conversion.
  * @abstr_hyperlink fixed a warning in MSVC.
  * @abstr_hyperlink added `operator/` for JSON Pointers.
  * @abstr_hyperlink noted a missing header.
  * @abstr_hyperlink fixed compilation with GCC @abstr_number . @abstr_number .
  * @abstr_hyperlink fixed compilation with GCC @abstr_number . @abstr_number .
  * @abstr_hyperlink helped reducing the CMake requirement to version @abstr_number . @abstr_number .
  * @abstr_hyperlink updated the Buckaroo instructions.
  * @abstr_hyperlink fixed a compilation issue with GCC @abstr_number on CentOS.
  * @abstr_hyperlink improved the integer serilization performance and implemented the `contains()` function.
  * @abstr_hyperlink suppressed an unfixable warning.
  * @abstr_hyperlink improved Meson support.
  * @abstr_hyperlink fixed an example in the README.
  * @abstr_hyperlink fixed a typo.
  * @abstr_hyperlink fixed bug in the serializer.
  * @abstr_hyperlink implemented `push_back()` and `pop_back()` for JSON Pointers.
  * @abstr_hyperlink added support for Conda.
  * @abstr_hyperlink fixed links in the README.
  * @abstr_hyperlink documented how to install the library with NuGet.
  * @abstr_hyperlink fixed a typo.
  * @abstr_hyperlink helped reducing the CMake requirement to version @abstr_number . @abstr_number .
  * @abstr_hyperlink maintains a package for the MSYS @abstr_number software distro.
  * @abstr_hyperlink added GNUInstallDirs to the CMake files.
  * @abstr_hyperlink fixed a unit test.
  * @abstr_hyperlink implemented the `to_string` method.
  * @abstr_hyperlink fixed a Clang warning.
  * @abstr_hyperlink switched the unit tests from @abstr_hyperlink to @abstr_hyperlink 



Thanks a lot for helping out! Please @abstr_hyperlink if I forgot someone.

## Used third-party tools

The library itself consists of a single header file licensed under the MIT license. However, it is built, tested, documented, and whatnot using a lot of third-party tools and services. Thanks a lot!

  * @abstr_hyperlink to create a single header file
  * @abstr_hyperlink for fuzz testing
  * @abstr_hyperlink for @abstr_hyperlink on Windows
  * @abstr_hyperlink for automatic source code indentation
  * @abstr_hyperlink for @abstr_hyperlink .
  * @abstr_hyperlink for compilation with code sanitizers
  * @abstr_hyperlink for build automation
  * @abstr_hyperlink for further @abstr_hyperlink 
  * @abstr_hyperlink to measure @abstr_hyperlink 
  * @abstr_hyperlink for @abstr_hyperlink 
  * @abstr_hyperlink for static analysis
  * @abstr_hyperlink for the unit tests
  * @abstr_hyperlink for @abstr_hyperlink on Linux (CentOS, Raspbian, Fedora)
  * @abstr_hyperlink to generate @abstr_hyperlink 
  * @abstr_hyperlink to process coverage information
  * @abstr_hyperlink to upload the documentation to gh-pages
  * @abstr_hyperlink to generate the @abstr_hyperlink 
  * @abstr_hyperlink to implement the benchmarks
  * @abstr_hyperlink to avoid re-inventing several compiler-agnostic feature macros
  * @abstr_hyperlink to process coverage information and create a HTML view
  * @abstr_hyperlink to implement fuzz testing for OSS-Fuzz
  * @abstr_hyperlink for continuous fuzz testing of the library ( @abstr_hyperlink )
  * @abstr_hyperlink for automating maintainer tasks such as closing stale issues, requesting missing information, or detecting toxic comments.
  * @abstr_hyperlink to send code examples to @abstr_hyperlink 
  * @abstr_hyperlink for @abstr_hyperlink on Linux and macOS
  * @abstr_hyperlink to check for correct memory management
  * @abstr_hyperlink for @abstr_hyperlink 



## Projects using JSON for Modern C++

The library is currently used in Apple macOS Sierra and iOS @abstr_number . I am not sure what they are using the library for, but I am happy that it runs on so many devices.

## Notes

### Character encoding

The library supports **Unicode input** as follows:

  * Only _*UTF- @abstr_number *_ encoded input is supported which is the default encoding for JSON according to @abstr_hyperlink .
  * `std::u @abstr_number string` and `std::u @abstr_number string` can be parsed, assuming UTF- @abstr_number and UTF- @abstr_number encoding, respectively. These encodings are not supported when reading from files or other input containers.
  * Other encodings such as Latin- @abstr_number or ISO @abstr_number - @abstr_number are **not** supported and will yield parse or serialization errors.
  * @abstr_hyperlink will not be replaced by the library.
  * Invalid surrogates (e.g., incomplete pairs such as `\uDEAD`) will yield parse errors.
  * The strings stored in the library are UTF- @abstr_number encoded. When using the default string type (`std::string`), note that its length/size functions return the number of stored bytes rather than the number of characters or glyphs.
  * When you store strings with different encodings in the library, calling @abstr_hyperlink may throw an exception unless `json::error_handler_t::replace` or `json::error_handler_t::ignore` are used as error handlers.



### Comments in JSON

This library does not support comments. It does so for three reasons:

@abstr_number . Comments are not part of the @abstr_hyperlink . You may argue that `//` or `/* */` are allowed in JavaScript, but JSON is not JavaScript. @abstr_number . This was not an oversight: Douglas Crockford @abstr_hyperlink in May @abstr_number :
    
    
    > I removed comments from JSON because I saw people were using them to hold parsing directives, a practice which would have destroyed interoperability.  I know that the lack of comments makes some people sad, but it shouldn't. 
    
    > Suppose you are using JSON to keep configuration files, which you would like to annotate. Go ahead and insert all the comments you like. Then pipe it through JSMin before handing it to your JSON parser.
    

@abstr_number . It is dangerous for interoperability if some libraries would add comment support while others don't. Please check @abstr_hyperlink on this.

This library will not support comments in the future. If you wish to use comments, I see three options:

@abstr_number . Strip comments before using this library. @abstr_number . Use a different JSON library with comment support. @abstr_number . Use a format that natively supports comments (e.g., YAML or JSON @abstr_number ).

### Order of object keys

By default, the library does not preserve the **insertion order of object elements**. This is standards-compliant, as the @abstr_hyperlink defines objects as "an unordered collection of zero or more name/value pairs". If you do want to preserve the insertion order, you can specialize the object type with containers like @abstr_hyperlink ( @abstr_hyperlink ) or @abstr_hyperlink ( @abstr_hyperlink ).

### Further notes

  * The code contains numerous debug **assertions** which can be switched off by defining the preprocessor macro `NDEBUG`, see the @abstr_hyperlink . In particular, note @abstr_hyperlink implements **unchecked access** for const objects: If the given key is not present, the behavior is undefined (think of a dereferenced null pointer) and yields an @abstr_hyperlink if assertions are switched on. If you are not sure whether an element in an object exists, use checked access with the @abstr_hyperlink .
  * As the exact type of a number is not defined in the @abstr_hyperlink , this library tries to choose the best fitting C++ number type automatically. As a result, the type `double` may be used to store numbers which may yield @abstr_hyperlink in certain rare situations if floating-point exceptions have been unmasked in the calling code. These exceptions are not caused by the library and need to be fixed in the calling code, such as by re-masking the exceptions prior to calling library functions.
  * The code can be compiled without C++ **runtime type identification** features; that is, you can use the `-fno-rtti` compiler flag.
  * **Exceptions** are used widely within the library. They can, however, be switched off with either using the compiler flag `-fno-exceptions` or by defining the symbol `JSON_NOEXCEPTION`. In this case, exceptions are replaced by an `abort()` call.



## Execute unit tests

To compile and run the tests, you need to execute

@abstr_code_section 

For more information, have a look at the file @abstr_hyperlink .
