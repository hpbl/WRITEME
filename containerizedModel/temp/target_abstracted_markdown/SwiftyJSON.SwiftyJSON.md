# SwiftyJSON

@abstr_hyperlink @abstr_image @abstr_image @abstr_hyperlink 

SwiftyJSON makes it easy to deal with JSON data in Swift.

Platform | Build Status \---------| --------------| *OS | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | 

@abstr_number . Why is the typical JSON handling in Swift NOT good @abstr_number . Requirements @abstr_number . Integration @abstr_number . Usage \- Initialization \- Subscript \- Loop \- Error \- Optional getter \- Non-optional getter \- Setter \- Raw object \- Literal convertibles \- Merging @abstr_number . Work with Alamofire @abstr_number . Work with Moya @abstr_number . SwiftyJSON Model Generator

> @abstr_hyperlink 

## Why is the typical JSON handling in Swift NOT good?

Swift is very strict about types. But although explicit typing is good for saving us from mistakes, it becomes painful when dealing with JSON and other areas that are, by nature, implicit about types.

Take the Twitter API for example. Say we want to retrieve a user's "name" value of some tweet in Swift (according to @abstr_hyperlink ).

The code would look like this:

@abstr_code_section 

It's not good.

Even if we use optional chaining, it would be messy:

@abstr_code_section 

An unreadable mess--for something that should really be simple!

With SwiftyJSON all you have to do is:

@abstr_code_section 

And don't worry about the Optional Wrapping thing. It's done for you automatically.

@abstr_code_section 

## Requirements

  * iOS @abstr_number . @abstr_number + | macOS @abstr_number . @abstr_number + | tvOS @abstr_number . @abstr_number + | watchOS @abstr_number . @abstr_number +
  * Xcode @abstr_number 



## Integration

#### CocoaPods (iOS @abstr_number +, OS X @abstr_number . @abstr_number +)

You can use @abstr_hyperlink to install `SwiftyJSON` by adding it to your `Podfile`:

@abstr_code_section 

#### Carthage (iOS @abstr_number +, OS X @abstr_number . @abstr_number +)

You can use @abstr_hyperlink to install `SwiftyJSON` by adding it to your `Cartfile`:

@abstr_code_section 

If you use Carthage to build your dependencies, make sure you have added `SwiftyJSON.framework` to the "Linked Frameworks and Libraries" section of your target, and have included them in your Carthage framework copying build phase.

#### Swift Package Manager

You can use @abstr_hyperlink to install `SwiftyJSON` by adding the proper description to your `Package.swift` file:

@abstr_code_section Then run `swift build` whenever you get prepared.

#### Manually (iOS @abstr_number +, OS X @abstr_number . @abstr_number +)

To use this library in your project manually you may: 

@abstr_number . for Projects, just drag SwiftyJSON.swift to the project tree @abstr_number . for Workspaces, include the whole SwiftyJSON.xcodeproj

## Usage

#### Initialization

@abstr_code_section 

@abstr_code_section Or

@abstr_code_section Or

@abstr_code_section 

#### Subscript

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

#### Loop

@abstr_code_section 

_The first element is always a String, even if the JSON is an Array_

@abstr_code_section 

#### Error

##### SwiftyJSON @abstr_number .x

SwiftyJSON @abstr_number .x introduces an enum type called `SwiftyJSONError`, which includes `unsupportedType`, `indexOutOfBounds`, `elementTooDeep`, `wrongType`, `notExist` and `invalidJSON`, at the same time, `ErrorDomain` are being replaced by `SwiftyJSONError.errorDomain`. Note: Those old error types are deprecated in SwiftyJSON @abstr_number .x and will be removed in the future release.

##### SwiftyJSON @abstr_number .x

Use a subscript to get/set a value in an Array or Dictionary

If the JSON is: * an array, the app may crash with "index out-of-bounds." * a dictionary, it will be assigned to `nil` without a reason. * not an array or a dictionary, the app may crash with an "unrecognised selector" exception.

This will never happen in SwiftyJSON.

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

#### Optional getter

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

#### Non-optional getter

Non-optional getter is named `xxxValue`

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

#### Setter

@abstr_code_section 

@abstr_code_section 

#### Raw object

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

#### Existence

@abstr_code_section 

#### Literal convertibles

For more info about literal convertibles: @abstr_hyperlink 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

#### Merging

It is possible to merge one JSON into another JSON. Merging a JSON into another JSON adds all non existing values to the original JSON which are only present in the `other` JSON.

If both JSONs contain a value for the same key, _mostly_ this value gets overwritten in the original JSON, but there are two cases where it provides some special treatment:

  * In case of both values being a `JSON.Type.array` the values form the array found in the `other` JSON getting appended to the original JSON's array value.
  * In case of both values being a `JSON.Type.dictionary` both JSON-values are getting merged the same way the encapsulating JSON is merged.



In case, where two fields in a JSON have a different types, the value will get always overwritten.

There are two different fashions for merging: `merge` modifies the original JSON, whereas `merged` works non-destructively on a copy.

@abstr_code_section 

## String representation

There are two options available: \- use the default Swift one \- use a custom one that will handle optionals well and represent `nil` as `"null"`: @abstr_code_section 

## Work with @abstr_hyperlink 

SwiftyJSON nicely wraps the result of the Alamofire JSON response handler:

@abstr_code_section 

We also provide an extension of Alamofire for serializing NSData to SwiftyJSON's JSON.

See: @abstr_hyperlink 

## Work with @abstr_hyperlink 

SwiftyJSON parse data to JSON:

@abstr_code_section 

## SwiftyJSON Model Generator

Tools to generate SwiftyJSON Models * @abstr_hyperlink * @abstr_hyperlink 
