# CountingView

@abstr_image @abstr_image 

Inspired by @abstr_hyperlink this is a swift version of an animated counting label.

@abstr_image 

## Usage

To start the counting animation just call `startCounting`
    
    
    label.startCounting(destinationValue:  @abstr_number )
    
    // with all available properties
    label.startCounting( @abstr_number ,
            destinationValue:  @abstr_number ,
            duration:  @abstr_number ,
              method: .Linear,
               progress: { value in
                print(value)
            },
            completion: {
                print("complete")
            })
    

### Format

By setting `format` you can also add a text.
    
    
    label.format = "%@ Value"
    

Alternatively you can provide a `NSNumberFormatter` to define the format of the animated number.
    
    
        let formatter = NSNumberFormatter()
        formatter.minimumIntegerDigits =  @abstr_number 
        formatter.maximumFractionDigits =  @abstr_number ;
        formatter.numberStyle = .DecimalStyle
        formatter.groupingSeparator = "."
    
        linealLabel.numberFormatter = formatter
    

### Custom AnimatedView

If you want to create your own animated views use the `CountAnimator`class. 
    
    
    let animator = CountAnimator(startValue: startValue, destinationValue: destinationValue, duration: duration, method: method)
    
    animator.startCount({ value in
        if let formatedValue = self.numberFormatter.stringFromNumber(value) {
            self.text = String.localizedStringWithFormat(self.format, formatedValue)
            if let progress = progress {
                progress(value: value)
            }
        }
    }, completion: {
        if let completion = completion {
            completion()
        }
    })
    

This class also provide `startCount` with a `progress`and `completion`closure.

## Installation

#### Carthage

Add the following line to your @abstr_hyperlink .

#### Swift @abstr_number . @abstr_number

@abstr_code_section 

#### Swift @abstr_number . @abstr_number

@abstr_code_section 

Then run `carthage update`.

#### Manually

Just drag and drop the two `.swift` files in the `CountingView` folder into your project.

## Todo

  * Counting Button


