# MaterialCardView

Create @abstr_hyperlink cards quick and easy

## Demo

@abstr_image 

## Installation

### Manuel

Copy & paste `MaterialCardView.swift` and `CEMKit.swift` to your project

### Cocoapods

Add to your `podfile`

@abstr_code_section 

## Usage

Create a `MaterialCardView`

@abstr_code_section 

And start to add `MaterialCardCell`s

  * Header Cell

@abstr_code_section 

  * Cell

@abstr_code_section 

  * FooterCell

@abstr_code_section 




> Material Card will update its frame size when you add or remove `MaterialCardCell`s.   
>  This is why you don't set its `height` value when initilize it.

## MaterialCardAppeareance

@abstr_code_section 

You can change `MaterialCardView` appeareance by its `appeareance` property.

The default appeareance is

@abstr_code_section 

Which are `UIColor` and `UIFont` extensions defined at top of `MaterialCardView.swift` file.

## MaterialAnimationTimingFunction

@abstr_code_section 

#### SwiftEnterInOut
    
    
    ( @abstr_number . @abstr_number ,  @abstr_number ,  @abstr_number . @abstr_number ,  @abstr_number )
    

#### SwiftExitInOut
    
    
    ( @abstr_number . @abstr_number ,  @abstr_number ,  @abstr_number . @abstr_number ,  @abstr_number )
    

## MaterialRippleLocation
    
    
    enum MaterialRippleLocation {
        case Center
        case TouchLocation
    }
    

## RippleLayer

##### Adds ripple animation when you add cells with action

@abstr_code_section 

@abstr_image 

##### Add ripple to material card

@abstr_code_section 

@abstr_image 
