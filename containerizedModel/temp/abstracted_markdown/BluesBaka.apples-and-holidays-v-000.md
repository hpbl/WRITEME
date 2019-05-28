# Iterating Over Hashes

## Objectives

@abstr_number . Iterate over nested, or multidimensional, hashes.

## The Holiday Suppliers

### Instructions

You have a bunch of decorations for various holidays organized by season.

@abstr_code_section 

Write your methods in `lib/holiday.rb`; use the comments in each method as guides.

  * Write a method that returns the second supply for the Fourth of July. For eg:

@abstr_code_section 

  * Write a method that adds a supply to both Winter holidays.

  * Write a method that adds a supply to Memorial Day.

  * Write a method that adds a new holiday and its associated supplies to any season.

  * Write a method to collect all Winter supplies from all the winter holidays. For eg:

@abstr_code_section 

  * Write a method that uses a loop to list out all the supplies you have for each holiday and the season. Use string manipulation to get your output to match what the test is expecting.

  * Here are a few helpful tips:

    * Our hash keys are symbols. We need to convert them into strings. Use the `.to_s` method on a symbol to convert it into a string.
    * Look closely at the output string that the test is expecting. You'll notice that it expects holiday names, like "New Years", to have both words capitalized. Ruby has a `.capitalize` method that you can call on a string. **But, note:**
    * `.capitalize` returns the capitalized string but _doesn't change_ the original string. So, when you call on that same string in the future, it _isn't capitalized!_ You can capitalize a string for now and evermore by using the bang operator (`!`).
    * You'll need to capitalize _both words_ in a given holiday's name. If you call `"new years".capitalize!`, it will return `"New years"`. In order to capitalize _both_ words, you'll need to `.split` the string into an array and iterate over that array to `.capitalize!` each word in it. Then, you'll need to `.join` the array back into a string.
    * If you're unfamiliar with the methods mentioned above, look them up in the Ruby documentation.



Example of expected output:

@abstr_code_section 

  * Write a method to collect all holidays with "BBQ" in the supply array. The method should behave as seen below:

@abstr_code_section 




**Reminder:** This is a challenging lab, so remember to use Pry, Google, and the Learn community to help you get the tests passing.

## Resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 



View @abstr_hyperlink on Learn.co and start learning to code for free.
