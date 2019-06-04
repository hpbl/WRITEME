# Duckling

@abstr_hyperlink 

Duckling is a Clojure library that parses text into structured data:
    
    
    “the first Tuesday of October” => {:value " @abstr_number - @abstr_number - @abstr_number T @abstr_number : @abstr_number : @abstr_number . @abstr_number - @abstr_number : @abstr_number "
                                       :grain :day}
    

You can try it out at https://duckling.wit.ai

See our @abstr_hyperlink for more context.

## Getting started

To use Duckling in your project, you just need two functions: `load!` to load the default configuration, and `parse` to parse a string.

@abstr_code_section 

See the @abstr_hyperlink for more information.
