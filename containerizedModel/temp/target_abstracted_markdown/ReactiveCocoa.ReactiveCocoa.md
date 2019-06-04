@abstr_hyperlink   
  
Reactive extensions to Cocoa frameworks, built on top of @abstr_hyperlink .  
  
@abstr_hyperlink 

  


@abstr_hyperlink @abstr_image @abstr_image 

⚠️ @abstr_hyperlink 

🎉 Migrating from RAC @abstr_number .x?

🚄 Release Roadmap

## What is ReactiveSwift?

__ReactiveSwift__ offers composable, declarative and flexible primitives that are built around the grand concept of ___streams of values over time___. These primitives can be used to uniformly represent common Cocoa and generic programming patterns that are fundamentally an act of observation.

For more information about the core primitives, see @abstr_hyperlink .

## What is ReactiveCocoa?

__ReactiveCocoa__ wraps various aspects of Cocoa frameworks with the declarative @abstr_hyperlink primitives.

@abstr_number . **UI Bindings**
    
    
    UI components expose [`BindingTarget`][]s, which accept bindings from any
    kind of streams of values via the `<~` operator.
    
     @abstr_code_section 
    
    _Note_: You'll need to import ReactiveSwift as well to make use of the `<~` operator.
    

@abstr_number . **Controls and User Interactions**
    
    
    Interactive UI components expose [`Signal`][]s for control events
    and updates in the control value upon user interactions.
    
    A selected set of controls provide a convenience, expressive binding
    API for [`Action`][]s.
    
    
     @abstr_code_section
    

@abstr_number . **Declarative Objective-C Dynamism**
    
    
    Create signals that are sourced by intercepting Objective-C objects,
    e.g. method call interception and object deinitialization.
    
     @abstr_code_section
    

@abstr_number . **Expressive, Safe Key Path Observation**
    
    
    Establish key-value observations in the form of [`SignalProducer`][]s and
    `DynamicProperty`s, and enjoy the inherited composability.
    
     @abstr_code_section
    

But there are still more to be discovered and introduced. Read our in-code documentations and release notes to find out more.

## Getting started

ReactiveCocoa supports macOS @abstr_number . @abstr_number +, iOS @abstr_number . @abstr_number +, watchOS @abstr_number . @abstr_number +, and tvOS @abstr_number . @abstr_number +.

#### Carthage

If you use @abstr_hyperlink to manage your dependencies, simply add ReactiveCocoa to your `Cartfile`:

@abstr_code_section 

If you use Carthage to build your dependencies, make sure you have added `ReactiveCocoa.framework` and `ReactiveSwift.framework` to the "_Linked Frameworks and Libraries_" section of your target, and have included them in your Carthage framework copying build phase.

#### CocoaPods

If you use @abstr_hyperlink to manage your dependencies, simply add ReactiveCocoa to your `Podfile`:

@abstr_code_section 

#### Git submodule

@abstr_number . Add the ReactiveCocoa repository as a @abstr_hyperlink of your application’s repository. @abstr_number . Run `git submodule update --init --recursive` from within the ReactiveCocoa folder. @abstr_number . Drag and drop `ReactiveCocoa.xcodeproj` and `Carthage/Checkouts/ReactiveSwift/ReactiveSwift.xcodeproj` into your application’s Xcode project or workspace. @abstr_number . On the “General” tab of your application target’s settings, add `ReactiveCocoa.framework` and `ReactiveSwift.framework` to the “Embedded Binaries” section. @abstr_number . If your application target does not contain Swift code at all, you should also set the `EMBEDDED_CONTENT_CONTAINS_SWIFT` build setting to “Yes”.

## Have a question?

If you need any help, please visit our @abstr_hyperlink or @abstr_hyperlink . Feel free to file an issue if you do not manage to find any solution from the archives.

## Release Roadmap

**Current Stable Release:**  
@abstr_hyperlink 

### In Development

### Plan of Record

#### ABI stability release

ReactiveCocoa is expected to declare library ABI stability when Swift rolls out resilence support in Swift @abstr_number . Until then, ReactiveCocoa will incrementally adopt new language features.
