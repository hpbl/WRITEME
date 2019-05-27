# ObjectMapper

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

ObjectMapper is a framework written in Swift that makes it easy for you to convert your model objects (classes and structs) to and from JSON. 

  * Features
  * The Basics
  * Mapping Nested Objects
  * Custom Transformations
  * Subclassing
  * Generic Objects
  * Mapping Context
  * ObjectMapper + Alamofire 
  * ObjectMapper + Realm
  * Projects using ObjectMapper
  * To Do
  * Contributing
  * Installation



# Features:

  * Mapping JSON to objects
  * Mapping objects to JSON
  * Nested Objects (stand alone, in arrays or in dictionaries)
  * Custom transformations during mapping
  * Struct support
  * Immutable support



# The Basics

To support mapping, a class or struct just needs to implement the `Mappable` protocol which includes the following functions: @abstr_code_section ObjectMapper uses the `<-` operator to define how each member variable maps to and from JSON.

@abstr_code_section 

Once your class implements `Mappable`, ObjectMapper allows you to easily convert to and from JSON. 

Convert a JSON string to a model object: @abstr_code_section 

Convert a model object to a JSON string: @abstr_code_section 

Alternatively, the `Mapper.swift` class can also be used to accomplish the above (it also provides extra functionality for other situations): @abstr_code_section 

ObjectMapper can map classes composed of the following types: \- `Int` \- `Bool` \- `Double` \- `Float` \- `String` \- `RawRepresentable` (Enums) \- `Array<Any>` \- `Dictionary<String, Any>` \- `Object<T: Mappable>` \- `Array<T: Mappable>` \- `Array<Array<T: Mappable>>` \- `Set<T: Mappable>` \- `Dictionary<String, T: Mappable>` \- `Dictionary<String, Array<T: Mappable>>` \- Optionals of all the above \- Implicitly Unwrapped Optionals of the above

## `Mappable` Protocol

#### `mutating func mapping(map: Map)`

This function is where all mapping definitions should go. When parsing JSON, this function is executed after successful object creation. When generating JSON, it is the only function that is called on the object.

#### `init?(map: Map)`

This failable initializer is used by ObjectMapper for object creation. It can be used by developers to validate JSON prior to object serialization. Returning nil within the function will prevent the mapping from occuring. You can inspect the JSON stored within the `Map` object to do your validation: @abstr_code_section 

## `StaticMappable` Protocol

`StaticMappable` is an alternative to `Mappable`. It provides developers with a static function that is used by ObjectMapper for object initialization instead of `init?(map: Map)`. 

Note: `StaticMappable`, like `Mappable`, is a sub protocol of `BaseMappable` which is where the `mapping(map: Map)` function is defined.

#### `static func objectForMapping(map: Map) -> BaseMappable?`

ObjectMapper uses this function to get objects to use for mapping. Developers should return an instance of an object that conforms to `BaseMappable` in this function. This function can also be used to: \- validate JSON prior to object serialization \- provide an existing cached object to be used for mapping \- return an object of another type (which also conforms to `BaseMappable`) to be used for mapping. For instance, you may inspect the JSON to infer the type of object that should be used for mapping ( @abstr_hyperlink )

If you need to implement ObjectMapper in an extension, you will need to adopt this protocol instead of `Mappable`. 

## `ImmutableMappable` Protocol

`ImmutableMappable` provides the ability to map immutable properties. This is how `ImmutableMappable` differs from `Mappable`:

ImmutableMappable | Mappable  
---|---  
Properties  
      
    
    **let** id: Int
    **let** name: String?
    

| 
    
    
    var id: Int!
    var name: String?
      
  
JSON -> Model  
      
    
    init(map: Map) **throws** {
      id   = **try** map.value("id")
      name = **try?** map.value("name")
    }
    

| 
    
    
    mutating func mapping(map: Map) {
      id   
          
  
Model -> JSON  
      
    
    func mapping(map: Map) {
      id   **> >>** map["id"]
      name **> >>** map["name"]
    }
    

| 
    
    
    mutating func mapping(map: Map) {
      id   
          
  
Initializing  
      
    
    **try** User(JSONString: JSONString)
    

| 
    
    
    User(JSONString: JSONString)
      
  
#### `init(map: Map) throws`

This throwable initializer is used to map immutable properties from the given `Map`. Every immutable property should be initialized in this initializer.

This initializer throws an error when: \- `Map` fails to get a value for the given key \- `Map` fails to transform a value using `Transform`

`ImmutableMappable` uses `Map.value(_:using:)` method to get values from the `Map`. This method should be used with the `try` keyword as it is throwable. `Optional` properties can easily be handled using `try?`.

@abstr_code_section 

#### `mutating func mapping(map: Map)`

This method is where the reverse transform is performed (model to JSON). Since immutable properties cannot be mapped with the `<-` operator, developers have to define the reverse transform using the `>>>` operator.

@abstr_code_section 

# Easy Mapping of Nested Objects

ObjectMapper supports dot notation within keys for easy mapping of nested objects. Given the following JSON String: @abstr_code_section You can access the nested objects as follows: @abstr_code_section Nested keys also support accessing values from an array. Given a JSON response with an array of distances, the value could be accessed as follows: @abstr_code_section If you have a key that contains `.`, you can individually disable the above feature as follows: @abstr_code_section When you have nested keys which contain `.`, you can pass the custom nested key delimiter as follows ( @abstr_hyperlink ): @abstr_code_section 

# Custom Transforms

ObjectMapper also supports custom transforms that convert values during the mapping process. To use a transform, simply create a tuple with `map["field_name"]` and the transform of your choice on the right side of the `<-` operator: @abstr_code_section The above transform will convert the JSON Int value to an Date when reading JSON and will convert the Date to an Int when converting objects to JSON.

You can easily create your own custom transforms by adopting and implementing the methods in the `TransformType` protocol: @abstr_code_section 

### TransformOf

In a lot of situations you can use the built-in transform class `TransformOf` to quickly perform a desired transformation. `TransformOf` is initialized with two types and two closures. The types define what the transform is converting to and from and the closures perform the actual transformation. 

For example, if you want to transform a JSON `String` value to an `Int` you could use `TransformOf` as follows: @abstr_code_section Here is a more condensed version of the above: @abstr_code_section 

# Subclasses

Classes that implement the `Mappable` protocol can easily be subclassed. When subclassing mappable classes, follow the structure below:

@abstr_code_section 

Make sure your subclass implementation calls the right initializers and mapping functions to also apply the mappings from your superclass.

# Generic Objects

ObjectMapper can handle classes with generic types as long as the generic type also conforms to `Mappable`. See the following example: @abstr_code_section 

# Mapping Context

The `Map` object which is passed around during mapping, has an optional `MapContext` object that is available for developers to use if they need to pass information around during mapping. 

To take advantage of this feature, simply create an object that implements `MapContext` (which is an empty protocol) and pass it into `Mapper` during initialization. @abstr_code_section 

# ObjectMapper + Alamofire

If you are using @abstr_hyperlink for networking and you want to convert your responses to Swift objects, you can use @abstr_hyperlink . It is a simple Alamofire extension that uses ObjectMapper to automatically map JSON response data to Swift objects.

# ObjectMapper + Realm

ObjectMapper and Realm can be used together. Simply follow the class structure below and you will be able to use ObjectMapper to generate your Realm models:

@abstr_code_section 

If you want to serialize associated RealmObjects, you can use @abstr_hyperlink . It is a simple Realm extension that serializes arbitrary JSON into Realm's `List` class.

To serialize Swift `String`, `Int`, `Double` and `Bool` arrays you can use @abstr_hyperlink . It'll wrap Swift types into RealmValues that can be stored in Realm's `List` class.

Note: Generating a JSON string of a Realm Object using ObjectMappers' `toJSON` function only works within a Realm write transaction. This is because ObjectMapper uses the `inout` flag in its mapping functions (`<-`) which are used both for serializing and deserializing. Realm detects the flag and forces the `toJSON` function to be called within a write block even though the objects are not being modified.

# Projects Using ObjectMapper

  * @abstr_hyperlink 

  * @abstr_hyperlink 




If you have a project that utilizes, extends or provides tooling for ObjectMapper, please submit a PR with a link to your project in this section of the README.

# To Do

  * Improve error handling. Perhaps using `throws`
  * Class cluster documentation



# Contributing

Contributions are very welcome 👍😃. 

Before submitting any pull request, please ensure you have run the included tests and they have passed. If you are including new functionality, please write test cases for it as well.

# Installation

### Cocoapods

ObjectMapper can be added to your project using @abstr_hyperlink by adding the following line to your `Podfile`:

@abstr_code_section 

### Carthage

If you're using @abstr_hyperlink you can add a dependency on ObjectMapper by adding it to your `Cartfile`:

@abstr_code_section 

### Swift Package Manager

To add ObjectMapper to a @abstr_hyperlink based project, add:

@abstr_code_section to your `Package.swift` files `dependencies` array.

### Submodule

Otherwise, ObjectMapper can be added as a submodule:

@abstr_number . Add ObjectMapper as a @abstr_hyperlink by opening the terminal, `cd`-ing into your top-level project directory, and entering the command `git submodule add https://github.com/tristanhimmelman/ObjectMapper.git` @abstr_number . Open the `ObjectMapper` folder, and drag `ObjectMapper.xcodeproj` into the file navigator of your app project. @abstr_number . In Xcode, navigate to the target configuration window by clicking on the blue project icon, and selecting the application target under the "Targets" heading in the sidebar. @abstr_number . Ensure that the deployment target of `ObjectMapper.framework` matches that of the application target. @abstr_number . In the tab bar at the top of that window, open the "Build Phases" panel. @abstr_number . Expand the "Target Dependencies" group, and add `ObjectMapper.framework`. @abstr_number . Click on the `+` button at the top left of the panel and select "New Copy Files Phase". Rename this new phase to "Copy Frameworks", set the "Destination" to "Frameworks", and add `ObjectMapper.framework`.
