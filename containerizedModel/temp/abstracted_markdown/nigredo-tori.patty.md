# Patty - A pattern matching library

@abstr_hyperlink @abstr_hyperlink 

Patty is a library to perform pattern matching in Nim. The patterns have to be @abstr_hyperlink , which in Nim are encoded with a field (usually called `kind`) which varies in an enum, and a different object layout based on the value of this tag. An example would be

@abstr_code_section 

If you have such an algebraic data type, you can do the following with Patty:

@abstr_code_section 

This will be translated by the `match` macro into the following form

@abstr_code_section 

Matching by position is also valid, like this:

@abstr_code_section 

One can also use `_` for a variable, in which case it will not be bound. That is, the following

@abstr_code_section 

becomes

@abstr_code_section 

Notice that in the examples, the field you dispatch on is called `kind`, but any other name would do. Also, checks are exhaustive: if you miss a case, the compiler will complain.

One can instead pattern-match on non-variant objects, which essentially amounts to deconstructing fields:

@abstr_code_section 

Again, this is the same as

@abstr_code_section 

## Constructing variant objects

Patty also provides another macro to create algebraic data types. It looks like

@abstr_code_section 

and expands to

@abstr_code_section 

Notice that the macro also generates three convenient constructors (`Circle` ,`Rectangle` and `UnitCircle`), and in fact the enum is pure to avoid a name conflict. Also, a proper definition of equality based on the actual contents of the record is generated.

**By default the generated ADT is private to the module**. If you want to generate a public ADT use the `variantp` macro, which has the same syntax as `variant` but makes the types, fields, equality definition and generated constructors public.

A couple of limitations fo the `variant` macro:

  * field names must be unique across branches (that is, different variants cannot have two fields with the same name). This is actually a limitation of Nim.
  * the shortcut that groups field names by type does not seem to work, that is, in the above example one could not write `Rectangle(w, h: float)`.



In the future, Patty may also add copy constructors. Also, some work needs to be done to make it easier to use the generated contructors with `ref` types, in particular for the important case of recursive algebraic data types.

## Versions

Patty @abstr_number . @abstr_number . @abstr_number works for latest Nim (devel). For older versions of Nim (up to @abstr_number . @abstr_number . @abstr_number ), use Patty @abstr_number . @abstr_number . @abstr_number .

## Things that do not work (yet)

One would expect many forms of pattern matching but, at least for now, the support in Patty is very limited. Things that would be nice to support but do not work yet include:

  * matching a constant

@abstr_code_section 

  * matching an existing variable

@abstr_code_section 

  * nested pattern matching

@abstr_code_section 

  * matching without binding

@abstr_code_section 

  * binding subpatterns

@abstr_code_section 

  * pattern matching as an expression should be simply

@abstr_code_section 




Right now it works (with latest nim devel) like this:

@abstr_code_section 

  * unification

@abstr_code_section 

  * guards

@abstr_code_section 

  * variable-length pattern matching, such as with arrays

@abstr_code_section 

  * custom pattern matchers, such as in regexes

@abstr_code_section 

  * combining patterns with `or`

@abstr_code_section 



