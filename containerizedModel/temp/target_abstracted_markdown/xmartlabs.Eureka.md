@abstr_image 

@abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Made with ❤️ by @abstr_hyperlink . This is the re-creation of [XLForm] in Swift.

简体中文

## Overview

@abstr_image  |  @abstr_image  |  @abstr_image   
---|---|---  
  
## Contents

  * [Requirements]
  * [Usage] 
    * [How to create a Form]
    * [Getting row values]
    * [Operators]
    * [Using the callbacks]
    * [Section Header and Footer]
    * [Dynamically hide and show rows (or sections)]
    * [List sections]
    * [Multivalued sections]
    * [Validations]
    * [Swipe Actions]
  * [Custom rows] 
    * [Basic custom rows]
    * [Custom inline rows]
    * [Custom presenter rows]
  * [Row catalog]
  * [Installation]
  * [FAQ]



**For more information look at [our blog post] that introduces _Eureka_.**

## Requirements

  * Xcode @abstr_number . @abstr_number +
  * Swift @abstr_number . @abstr_number + (for latest release)



### Example project

You can clone and run the Example project to see examples of most of Eureka's features.

@abstr_image  |  @abstr_image   
---|---  
  
## Usage

### How to create a form

By extending `FormViewController` you can then simply add sections and rows to the `form` variable.

@abstr_code_section 

In the example we create two sections with standard rows, the result is this:

@abstr_image 

You could create a form by just setting up the `form` property by yourself without extending from `FormViewController` but this method is typically more convenient.

#### Configuring the keyboard navigation accesory

To change the behaviour of this you should set the navigation options of your controller. The `FormViewController` has a `navigationOptions` variable which is an enum and can have one or more of the following values:

  * **disabled** : no view at all
  * **enabled** : enable view at the bottom
  * **stopDisabledRow** : if the navigation should stop when the next row is disabled
  * **skipCanNotBecomeFirstResponderRow** : if the navigation should skip the rows that return false to `canBecomeFirstResponder()`



The default value is `enabled & skipCanNotBecomeFirstResponderRow`

To enable smooth scrolling to off-screen rows, enable it via the `animateScroll` property. By default, the `FormViewController` jumps immediately between rows when the user hits the next or previous buttons in the keyboard navigation accesory, including when the next row is off screen.

To set the amount of space between the keyboard and the highlighted row following a navigation event, set the `rowKeyboardSpacing` property. By default, when the form scrolls to an offscreen view no space will be left between the top of the keyboard and the bottom of the row.

@abstr_code_section 

If you want to change the whole navigation accessory view, you will have to override the `navigationAccessoryView` variable in your subclass of `FormViewController`.

### Getting row values

The `Row` object holds a **_value_** of a specific type. For example, a `SwitchRow` holds a `Bool` value, while a `TextRow` holds a `String` value.

@abstr_code_section 

### Operators

Eureka includes custom operators to make form creation easy:

#### +++ Add a section

@abstr_code_section 

#### <<< Insert a row

@abstr_code_section 

#### += Append an array

@abstr_code_section 

### Using the callbacks

Eureka includes callbacks to change the appearance and behavior of a row.

#### Understanding Row and Cell

A `Row` is an abstraction Eureka uses which holds a **value** and contains the view `Cell`. The `Cell` manages the view and subclasses `UITableViewCell`.

Here is an example:

@abstr_code_section 

@abstr_image 

#### Callbacks list

  * **onChange()**

Called when the value of a row changes. You might be interested in adjusting some parameters here or even make some other rows appear or disappear.

  * **onCellSelection()**

Called each time the user taps on the row and it gets selected.

  * **cellSetup()**

Called only once when the cell is first configured. Set permanent settings here.

  * **cellUpdate()**

Called each time the cell appears on screen. You can change the appearance here using variables that may not be present on cellSetup().

  * **onCellHighlightChanged()**

Called whenever the cell or any subview become or resign the first responder.

  * **onRowValidationChanged()**

Called whenever the the validation errors associated with a row changes.

  * **onExpandInlineRow()**

Called before expanding the inline row. Applies to rows conforming `InlineRowType` protocol.

  * **onCollapseInlineRow()**

Called before collapsing the inline row. Applies to rows conforming `InlineRowType` protocol.

  * **onPresent()**

Called by a row just before presenting another view controller. Applies to rows conforming `PresenterRowType` protocol. Use it to set up the presented controller.




### Section Header and Footer

You can set a title `String` or a custom `View` as the header or footer of a `Section`.

#### String title

@abstr_code_section 

#### Custom view

You can use a Custom View from a `.xib` file:

@abstr_code_section 

Or a custom `UIView` created programmatically

@abstr_code_section Or just build the view with a Callback @abstr_code_section 

### Dynamically hide and show rows (or sections) 

@abstr_image 

In this case we are hiding and showing whole sections.

To accomplish this each row has a `hidden` variable of optional type `Condition` which can be set using a function or `NSPredicate`.

#### Hiding using a function condition

Using the `function` case of `Condition`: @abstr_code_section The array of `String` to pass should contain the tags of the rows this row depends on. Each time the value of any of those rows changes the function is reevaluated. The function then takes the `Form` and returns a `Bool` indicating whether the row should be hidden or not. This the most powerful way of setting up the `hidden` property as it has no explicit limitations of what can be done.

@abstr_code_section 

@abstr_image 

@abstr_code_section 

#### Hiding using an NSPredicate

The `hidden` variable can also be set with a NSPredicate. In the predicate string you can reference values of other rows by their tags to determine if a row should be hidden or visible. This will only work if the values of the rows the predicate has to check are NSObjects (String and Int will work as they are bridged to their ObjC counterparts, but enums won't work). Why could it then be useful to use predicates when they are more limited? Well, they can be much simpler, shorter and readable than functions. Look at this example:

@abstr_code_section 

And we can write it even shorter since `Condition` conforms to `ExpressibleByStringLiteral`:

@abstr_code_section 

_Note: we will substitute the value of the row whose tag is 'switchTag' instead of '$switchTag'_

For all of this to work, **all of the implicated rows must have a tag** as the tag will identify them.

We can also hide a row by doing: @abstr_code_section as `Condition` conforms to `ExpressibleByBooleanLiteral`.

Not setting the `hidden` variable will leave the row always visible.

##### Sections

For sections this works just the same. That means we can set up section `hidden` property to show/hide it dynamically.

##### Disabling rows

To disable rows, each row has an `disabled` variable which is also an optional `Condition` type property. This variable also works the same as the `hidden` variable so that it requires the rows to have a tag.

Note that if you want to disable a row permanently you can also set `disabled` variable to `true`.

### List Sections

To display a list of options, Eureka includes a special section called `SelectableSection`. When creating one you need to pass the type of row to use in the options and the `selectionType`. The `selectionType` is an enum which can be either `multipleSelection` or `singleSelection(enableDeselection: Bool)` where the `enableDeselection` parameter determines if the selected rows can be deselected or not.

@abstr_code_section 

##### What kind of rows can be used?

To create such a section you have to create a row that conforms the `SelectableRowType` protocol.

@abstr_code_section 

This `selectableValue` is where the value of the row will be permanently stored. The `value` variable will be used to determine if the row is selected or not, being 'selectableValue' if selected or nil otherwise. Eureka includes the `ListCheckRow` which is used for example. In the custom rows of the Examples project you can also find the `ImageCheckRow`.

##### Getting the selected rows

To easily get the selected row/s of a `SelectableSection` there are two methods: `selectedRow()` and `selectedRows()` which can be called to get the selected row in case it is a `SingleSelection` section or all the selected rows if it is a `MultipleSelection` section.

##### Grouping options in sections

Additionally you can setup list of options to be grouped by sections using following properties of `SelectorViewController`:

  * `sectionKeyForValue` \- a closure that should return key for particular row value. This key is later used to break options by sections.

  * `sectionHeaderTitleForKey` \- a closure that returns header title for a section for particular key. By default returns the key itself.

  * `sectionFooterTitleForKey` \- a closure that returns footer title for a section for particular key.




### Multivalued Sections

Eureka supports multiple values for a certain field (such as telephone numbers in a contact) by using Multivalued sections. It allows us to easily create insertable, deletable and reorderable sections.

@abstr_image 

#### How to create a multivalued section

In order to create a multivalued section we have to use `MultivaluedSection` type instead of the regular `Section` type. `MultivaluedSection` extends `Section` and has some additional properties to configure multivalued section behavior.

let's dive into a code example...

@abstr_code_section 

Previous code snippet shows how to create a multivalued section. In this case we want to insert, delete and reorder rows as multivaluedOptions argument indicates.

`addButtonProvider` allows us to customize the button row which inserts a new row when tapped and `multivaluedOptions` contains `.Insert` value.

`multivaluedRowToInsertAt` closure property is called by Eureka each time a new row needs to be inserted. In order to provide the row to add into multivalued section we should set this property. Eureka passes the index as closure parameter. Notice that we can return any kind of row, even custom rows, even though in most cases multivalued section rows are of the same type.

Eureka automatically adds a button row when we create a insertable multivalued section. We can customize how the this button row looks like as we explained before. `showInsertIconInAddButton` property indicates if plus button (insert style) should appear in the left of the button, true by default.

There are some considerations we need to have in mind when creating insertable sections. Any row added to the insertable multivalued section should be placed above the row that Eureka automatically adds to insert new rows. This can be easily achieved by adding these additional rows to the section from inside the section's initializer closure (last parameter of section initializer) so then Eureka adds the adds insert button at the end of the section.

#### Editing mode

By default Eureka will set the tableView's `isEditing` to true only if there is a MultivaluedSection in the form. This will be done in `viewWillAppear` the first time a form is presented.

For more information on how to use multivalued sections please take a look at Eureka example project which contains several usage examples.

### Validations

Eureka @abstr_number . @abstr_number . @abstr_number introduces the much requested built-in validations feature.

A row has a collection of `Rules` and a specific configuration that determines when validation rules should be evaluated.

There are some rules provided by default, but you can also create new ones on your own.

The provided rules are: * RuleRequired * RuleEmail * RuleURL * RuleGreaterThan, RuleGreaterOrEqualThan, RuleSmallerThan, RuleSmallerOrEqualThan * RuleMinLength, RuleMaxLength * RuleClosure

Let's see how to set up the validation rules.

@abstr_code_section 

As you can see in the previous code snippet we can set up as many rules as we want in a row by invoking row's `add(rule:)` function.

Row also provides `func remove(ruleWithIdentifier identifier: String)` to remove a rule. In order to use it we must assign an id to the rule after creating it.

Sometimes the collection of rules we want to use on a row is the same we want to use on many other rows. In this case we can set up all validation rules using a `RuleSet` which is a collection of validation rules.

@abstr_code_section 

Eureka allows us to specify when validation rules should be evaluated. We can do it by setting up `validationOptions` row's property, which can have the following values:

  * `.validatesOnChange` \- Validates whenever a row value changes.
  * `.validatesOnBlur` \- (Default value) validates right after the cell resigns first responder. Not applicable for all rows.
  * `.validatesOnChangeAfterBlurred` \- Validates whenever the row value changes after it resigns first responder for the first time.
  * `.validatesOnDemand` \- We should manually validate the row or form by invoking `validate()` method.



If you want to validate the entire form (all the rows) you can manually invoke Form `validate()` method.

#### How to get validation errors

Each row has the `validationErrors` property that can be used to retrieve all validation errors. This property just holds the validation error list of the latest row validation execution, which means it doesn't evaluate the validation rules of the row.

#### Note on types

As expected, the Rules must use the same types as the Row object. Be extra careful to check the row type used. You might see a compiler error ("Incorrect arugment label in call (have 'rule:' expected 'ruleSet:')" that is not pointing to the problem when mixing types.

### Swipe Actions

By using swipe actions we can define multiple `leadingSwipe` and `trailingSwipe` actions per row. As swipe actions depend on iOS system features, `leadingSwipe` is available on iOS @abstr_number . @abstr_number + only.

Let's see how to define swipe actions.

@abstr_code_section 

Swipe Actions need `tableView.isEditing` be set to `false`. Eureka will set this to `true` if there is a MultivaluedSection in the form (in the `viewWillAppear`). If you have both MultivaluedSections and swipe actions in the same form you should set `isEditing` according to your needs.

## Custom rows

It is very common that you need a row that is different from those included in Eureka. If this is the case you will have to create your own row but this should not be difficult. You can read @abstr_hyperlink to get started. You might also want to have a look at [EurekaCommunity] which includes some extra rows ready to be added to Eureka.

### Basic custom rows

To create a row with custom behaviour and appearance you'll probably want to create subclasses of `Row` and `Cell`.

Remember that `Row` is the abstraction Eureka uses, while the `Cell` is the actual `UITableViewCell` in charge of the view. As the `Row` contains the `Cell`, both `Row` and `Cell` must be defined for the same **value** type.

@abstr_code_section The result:   
@abstr_image 

  
Custom rows need to subclass `Row<CellType>` and conform to `RowType` protocol. Custom cells need to subclass `Cell<ValueType>` and conform to `CellType` protocol.

Just like the callbacks cellSetup and CellUpdate, the `Cell` has the setup and update methods where you can customize it.

### Custom inline rows

An inline row is a specific type of row that shows dynamically a row below it, normally an inline row changes between an expanded and collapsed mode whenever the row is tapped.

So to create an inline row we need @abstr_number rows, the row that is "always" visible and the row that will expand/collapse.

Another requirement is that the value type of these @abstr_number rows must be the same. This means if one row holds a `String` value then the other must have a `String` value too.

Once we have these @abstr_number rows, we should make the top row type conform to `InlineRowType`. This protocol requires you to define an `InlineRow` typealias and a `setupInlineRow` function. The `InlineRow` type will be the type of the row that will expand/collapse. Take this as an example:

@abstr_code_section 

The `InlineRowType` will also add some methods to your inline row:

@abstr_code_section 

These methods should work fine but should you want to override them keep in mind that it is `toggleInlineRow` that has to call `expandInlineRow` and `collapseInlineRow`.

Finally you must invoke `toggleInlineRow()` when the row is selected, for example overriding `customDidSelect`:

@abstr_code_section 

### Custom Presenter rows

**Note:** _A Presenter row is a row that presents a new UIViewController._

To create a custom Presenter row you must create a class that conforms the `PresenterRowType` protocol. It is highly recommended to subclass `SelectorRow` as it does conform to that protocol and adds other useful functionality.

The PresenterRowType protocol is defined as follows: @abstr_code_section 

The onPresentCallback will be called when the row is about to present another view controller. This is done in the `SelectorRow` so if you do not subclass it you will have to call it yourself.

The `presentationMode` is what defines how the controller is presented and which controller is presented. This presentation can be using a Segue identifier, a segue class, presenting a controller modally or pushing to a specific view controller. For example a CustomPushRow can be defined like this:

Let's see an example..

@abstr_code_section 

### Subclassing cells using the same row

Sometimes we want to change the UI look of one of our rows but without changing the row type and all the logic associated to one row. There is currently one way to do this **if you are using cells that are instantiated from nib files**. Currently, none of Eureka's core rows are instantiated from nib files but some of the custom rows in [EurekaCommunity] are, in particular the @abstr_hyperlink which was moved there.

What you have to do is: * Create a nib file containing the cell you want to create. * Then set the class of the cell to be the existing cell you want to modify (if you want to change something more apart from pure UI then you should subclass that cell). Make sure the module of that class is correctly set * Connect the outlets to your class * Tell your row to use the new nib file. This is done by setting the `cellProvider` variable to use this nib. You should do this in the initialiser, either in each concrete instantiation or using the `defaultRowInitializer`. For example:

@abstr_code_section 

You could also create a new row for this. In that case try to inherit from the same superclass as the row you want to change to inherit its logic.

There are some things to consider when you do this: * If you want to see an example have a look at the @abstr_hyperlink or the @abstr_hyperlink which have use a custom nib file in their examples. * If you get an error saying `Unknown class <YOUR_CLASS_NAME> in Interface Builder file`, it might be that you have to instantiate that new type somewhere in your code to load it in the runtime. Calling `let t = YourClass.self` helped in my case.

## Row catalog

### Controls Rows

**Label Row**  
@abstr_image   
  
| **Button Row**  
@abstr_image   
  
| **Check Row**  
@abstr_image   
  
  
---|---|---  
**Switch Row**  
@abstr_image   
  
| **Slider Row**  
@abstr_image   
  
| **Stepper Row**  
@abstr_image   
  
  
**Text Area Row**  
@abstr_image   
  
  
  
### Field Rows

These rows have a textfield on the right side of the cell. The difference between each one of them consists in a different capitalization, autocorrection and keyboard type configuration.

@abstr_image  |  TextRow  
  
NameRow  
  
URLRow  
  
IntRow  
  
PhoneRow  
  
PasswordRow  
  
EmailRow  
  
DecimalRow  
  
TwitterRow  
  
AccountRow  
  
ZipCodeRow   
---|---  
  
All of the `FieldRow` subtypes above have a `formatter` property of type @abstr_hyperlink which can be set to determine how that row's value should be displayed. A custom formatter for numbers with two digits after the decimal mark is included with Eureka (`DecimalFormatter`). The Example project also contains a `CurrencyFormatter` which displays a number as currency according to the user's locale.

By default, setting a row's `formatter` only affects how a value is displayed when it is not being edited. To also format the value while the row is being edited, set `useFormatterDuringInput` to `true` when initializing the row. Formatting the value as it is being edited may require updating the cursor position and Eureka provides the following protocol that your formatter should conform to in order to handle cursor position:

@abstr_code_section 

Additionally, `FieldRow` subtypes have a `useFormatterOnDidBeginEditing` property. When using a `DecimalRow` with a formatter that allows decimal values and conforms to the user's locale (e.g. `DecimalFormatter`), if `useFormatterDuringInput` is `false`, `useFormatterOnDidBeginEditing` must be set to `true` so that the decimal mark in the value being edited matches the decimal mark on the keyboard.

### Date Rows

Date Rows hold a Date and allow us to set up a new value through UIDatePicker control. The mode of the UIDatePicker and the way how the date picker view is shown is what changes between them.

**Date Row** @abstr_image   
Picker shown in the keyboard.  |  **Date Row (Inline)** @abstr_image   
The row expands.  |  **Date Row (Picker)** @abstr_image   
The picker is always visible.   
---|---|---  
  
With those @abstr_number styles (Normal, Inline & Picker), Eureka includes:

  * **DateRow**
  * **TimeRow**
  * **DateTimeRow**
  * **CountDownRow**



### Option Rows

These are rows with a list of options associated from which the user must choose.

@abstr_code_section 

**Alert Row**  
@abstr_image   
Will show an alert with the options to choose from.  |  **ActionSheet Row**  
@abstr_image   
Will show an action sheet with the options to choose from.  |  **Push Row**  
@abstr_image   
Will push to a new controller from where to choose options listed using Check rows.  |  **Multiple Selector Row**  
@abstr_image   
Like PushRow but allows the selection of multiple options.   
---|---|---|---  
**Segmented Row**  
@abstr_image  | **Segmented Row (w/Title)**  
@abstr_image  | **Picker Row**  
@abstr_image   
Presents options of a generic type through a picker view   
**(There is also Picker Inline Row)**  
---|---|---  
  
### Built your own custom row?

Let us know about it, we would be glad to mention it here. :)

  * **LocationRow** (Included as custom row in the example project)



@abstr_image 

## Installation

#### CocoaPods

@abstr_hyperlink is a dependency manager for Cocoa projects.

Specify Eureka into your project's `Podfile`:

@abstr_code_section 

Then run the following command:

@abstr_code_section 

#### Carthage

@abstr_hyperlink is a simple, decentralized dependency manager for Cocoa.

Specify Eureka into your project's `Cartfile`:

@abstr_code_section 

#### Manually as Embedded Framework

  * Clone Eureka as a git @abstr_hyperlink by running the following command from your project root git folder.

@abstr_code_section 

  * Open Eureka folder that was created by the previous git submodule command and drag the Eureka.xcodeproj into the Project Navigator of your application's Xcode project.

  * Select the Eureka.xcodeproj in the Project Navigator and verify the deployment target matches with your application deployment target.

  * Select your project in the Xcode Navigation and then select your application target from the sidebar. Next select the "General" tab and click on the + button under the "Embedded Binaries" section.

  * Select `Eureka.framework` and we are done!




## Getting involved

  * If you **want to contribute** please feel free to **submit pull requests**.
  * If you **have a feature request** please **open an issue**.
  * If you **found a bug** check older issues before submitting an issue.
  * If you **need help** or would like to **ask general question** , use [StackOverflow]. (Tag `eureka-forms`).



**Before contribute check the CONTRIBUTING file for more info.**

If you use **Eureka** in your app We would love to hear about it! Drop us a line on [twitter].

## Authors

  * @abstr_hyperlink ( @abstr_hyperlink )
  * @abstr_hyperlink ( @abstr_hyperlink )



## FAQ

#### How to change the text representation of the row value shown in the cell.

Every row has the following property:

@abstr_code_section 

You can set `displayValueFor` according the string value you want to display.

#### How to get a Row using its tag value

We can get a particular row by invoking any of the following functions exposed by the `Form` class:

@abstr_code_section 

For instance:

@abstr_code_section 

#### How to get a Section using its tag value

@abstr_code_section 

#### How to set the form values using a dictionary

Invoking `setValues(values: [String: Any?])` which is exposed by `Form` class.

For example:

@abstr_code_section 

Where `"IntRowTag"`, `"TextRowTag"`, `"PushRowTag"` are row tags (each one uniquely identifies a row) and `@abstr_number`, `"Hello world!"`, `Company(name:"Xmartlabs")` are the corresponding row value to assign.

The value type of a row must match with the value type of the corresponding dictionary value otherwise nil will be assigned.

If the form was already displayed we have to reload the visible rows either by reloading the table view `tableView.reloadData()` or invoking `updateCell()` to each visible row.

#### Row does not update after changing hidden or disabled condition

After setting a condition, this condition is not automatically evaluated. If you want it to do so immediately you can call `.evaluateHidden()` or `.evaluateDisabled()`.

This functions are just called when a row is added to the form and when a row it depends on changes. If the condition is changed when the row is being displayed then it must be reevaluated manually.

#### onCellUnHighlight doesn't get called unless onCellHighlight is also defined

Look at this @abstr_hyperlink .

#### How to update a Section header/footer

  * Set up a new header/footer data ....

@abstr_code_section 

  * Reload the Section to perform the changes

@abstr_code_section 




#### How to customize Selector and MultipleSelector option cells

`selectableRowSetup`, `selectableRowCellUpdate` and `selectableRowCellSetup` properties are provided to be able to customize SelectorViewController and MultipleSelectorViewController selectable cells.

@abstr_code_section 

#### Don't want to use Eureka custom operators?

As we've said `Form` and `Section` types conform to `MutableCollection` and `RangeReplaceableCollection`. A Form is a collection of Sections and a Section is a collection of Rows.

`RangeReplaceableCollection` protocol extension provides many useful methods to modify collection.

@abstr_code_section 

These methods are used internally to implement the custom operators as shown bellow:

@abstr_code_section 

You can see how the rest of custom operators are implemented @abstr_hyperlink .

It's up to you to decide if you want to use Eureka custom operators or not.

# Donate to Eureka

So we can make Eureka even better!  
  
@abstr_hyperlink 

# Change Log

This can be found in the CHANGELOG.md file.
