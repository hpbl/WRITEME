# angular-duration-format

AngularJS filter for formatting duration.

## Usage

Add `angular-duration-format` as your app dependency.

@abstr_code_section 

In templates you can use @abstr_code_section 

In controllers (or directives, services, anywhere) @abstr_code_section 

The result should be the same in both cases: @abstr_code_section 

## Format options

Available formatting options: * (y)ear * (d)ay * (h)our * (m)inute * (s)econd * `sss` for milliseconds

Each number will be zero-padded to two places if you double letters (ex. `hh`, `mm`). Milliseconds are exception - they are padded to four places and you have to pass four letters (`ssss`).

You can use every separator you want, but be careful. Passing format `h hours, m minutes` will produce unexpected results `@abstr_number @abstr_number ours, @abstr_number @abstr_number inutes`. To avoid that, wrap every separator containing reserved letters in quotaion marks, like that `h 'hours', m 'minutes'`. (remember about escaping them in your code!). Now, the result should be nicely formatted `@abstr_number hours, @abstr_number minutes`.

## Additional notes

Note, that you can ommit some unit "levels", but it can produce weird results. If in example above you change format to `hh:ss`, result will be `@abstr_number : @abstr_number`, because @abstr_number minutes and @abstr_number seconds it is @abstr_number seconds.
