# Cartography :iphone::triangular_ruler:

@abstr_hyperlink 

@abstr_hyperlink 

Using Cartography, you can set up your Auto Layout constraints in declarative code and without any stringly typing!

In short, it allows you to replace this:

@abstr_image 

```Swift addConstraint(NSLayoutConstraint( item: button @abstr_number , attribute: .Right, relatedBy: .Equal, toItem: button @abstr_number , attribute: .Left, multiplier: @abstr_number . @abstr_number , constant: - @abstr_number . @abstr_number )) @abstr_code_section Swift constrain(button @abstr_number , button @abstr_number ) { button @abstr_number , button @abstr_number in button @abstr_number .right == button @abstr_number .left - @abstr_number } @abstr_code_section ruby target '' do pod 'Cartography', '~> @abstr_number . @abstr_number ' end @abstr_code_section bash $ pod install @abstr_code_section swift constrain(view @abstr_number , view @abstr_number ) { view @abstr_number , view @abstr_number in view @abstr_number .width == (view @abstr_number .superview!.width - @abstr_number ) * @abstr_number . @abstr_number view @abstr_number .width == view @abstr_number .width - @abstr_number view @abstr_number .height == @abstr_number view @abstr_number .height == view @abstr_number .height view @abstr_number .centerX == view @abstr_number .superview!.centerX view @abstr_number .centerX == view @abstr_number .centerX
    
    
    view @abstr_number .top >= view @abstr_number .superview!.top +  @abstr_number 
    view @abstr_number .top == view @abstr_number .bottom +  @abstr_number
    

} @abstr_code_section swift constrain(view) { view in view.width == @abstr_number view.height == @abstr_number }

let group = ConstraintGroup()

// Attach `view` to the top left corner of its superview constrain(view, replace: group) { view in view.top == view.superview!.top view.left == view.superview!.left }

/* Later */

// Move the view to the bottom right corner of its superview constrain(view, replace: group) { view in view.bottom == view.superview!.bottom view.right == view.superview!.right }

UIView.animate(withDuration: @abstr_number . @abstr_number , animations: view.layoutIfNeeded) @abstr_code_section swift let group = constrain(button) { button in button.width == @abstr_number button.height == @abstr_number } @abstr_code_section swift constrain(view) { view in view.size == view.superview!.size / @abstr_number view.center == view.superview!.center } @abstr_code_section 

### Aligning multiple view

If you need to align multiple views by a common edge, you can use the `align` functions:

@abstr_code_section 

Which is equivalent to `view @abstr_number .top == view @abstr_number .top; view @abstr_number .top == view @abstr_number .top`. Similar variants exist for `top`, `right` `bottom`, `left`, `leading`, `trailing`, `centerX`, `centerY` and `baseline`.

### Distributing views evenly

For distributing multiple views, either horizontally or vertically, you can use the `distribute` functions:

@abstr_code_section 

Which is equivalent to `view @abstr_number .trailing == view @abstr_number .leading - @abstr_number ; view @abstr_number .trailing == view @abstr_number .leading - @abstr_number`.

## Setting priorities

You can set the priorities of your constraints using the `~` operator:

@abstr_code_section 

## Capturing constraints

Since the `==`, `>=`, `<=` and `~` emit `NSLayoutConstraint` instances, you can capture their results if you need to refer to the layout constraints at a later time:

@abstr_code_section 

Note that declaring compound attributes returns multiple constraints at once:

@abstr_code_section 

## Documentation

Read the documentation @abstr_hyperlink . For more information, see the @abstr_hyperlink branch.

## Versioning

For _Swift @abstr_number .x_ : Versions <= @abstr_number . @abstr_number . @abstr_number 

For _Swift @abstr_number .x_ : Versions >= @abstr_number . @abstr_number . @abstr_number 

For _Swift @abstr_number .x_ : Versions >= @abstr_number . @abstr_number . @abstr_number 

## Support

Please, don't hesitate to @abstr_hyperlink if you have questions.

## About Cartography

Cartography was built by @abstr_hyperlink , is maintained by @abstr_hyperlink and was inspired by the excellent [FLKAutoLayout] by @abstr_hyperlink .
