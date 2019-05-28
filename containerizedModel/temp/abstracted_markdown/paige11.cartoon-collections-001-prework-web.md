## Cartoon Collections

## Objectives

@abstr_number . Get familiar iterating through arrays with enumerator methods like `.collect` or `.map`, `.find`, and `.include`. @abstr_number . Build methods and control their return values. @abstr_number . Practice control flow with `if` and `else` statements.

## Instructions

There are four methods to complete in this lab:

@abstr_number . `roll_call_dwarves` @abstr_number . `summon_captain_planet` @abstr_number . `long_planeteer_calls` @abstr_number . `find_the_cheese`

#### Method @abstr_number — `roll_call_dwarves`

@abstr_image 

This method should accept an array of dwarf names, for instance:

@abstr_code_section 

It should then print out each name using `puts`. The print-out should look like this:

> @abstr_number . Doc @abstr_number . Dopey @abstr_number . Bashful @abstr_number . Grumpy

Look into the @abstr_hyperlink method. 

Once the test for this method is passing, move on to the next method.

#### Method @abstr_number — `summon_captain_planet`

@abstr_image 

This method should accept an array argument of planeteer calls that will look like this:

@abstr_code_section 

It should then capitalize each element and add an exclamation point at the end. The return value of this method should be an array, in this example:

@abstr_code_section 

The `.map` or `.collect` method might be appropriate for this task, take a look at it @abstr_hyperlink and @abstr_hyperlink .

Once the test for this method is passing, move on to the next method, long planeteer calls.

#### Method @abstr_number — `long_planeteer_calls`

The `long_planeteer_calls` method should accept an array of calls. The method should tell us if any of the calls are longer than four characters. For example:

@abstr_code_section 

Notice the return value of this method is either `true` or `false`, depending on the array it was given as an argument.

Checkout the @abstr_hyperlink for a hint.

Once the test for this method is passing, move on to the last method.

#### Method @abstr_number — `find_the_cheese`

@abstr_image 

The `find_the_cheese` method should accept an array of strings. It should then look through these strings to find and return the first string that is a type of cheese. The types of cheese that appear are `"cheddar"`, `"gouda"`, and `"camembert"`.

For example:

@abstr_code_section 

If, sadly, a list of ingredients does not include cheese, return `nil`:

@abstr_code_section 

You can assume that all strings will be lowercase. Take a look at the @abstr_hyperlink method for a hint. This method asks you to return a string value instead of printing it so keep that in mind.

## Resources

  * The @abstr_hyperlink 
  * The @abstr_hyperlink 
  * The @abstr_hyperlink 


