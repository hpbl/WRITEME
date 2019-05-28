# EnumGenie

@abstr_hyperlink Master

@abstr_hyperlink CI

Generate enums matching your C# enums. 

Comes with generators for TypeScript.

## Installation

@abstr_hyperlink ! Crazy, I know.

@abstr_code_section 

Or if you're targetting .NET Core (don't do this if you're on the full framework)

@abstr_code_section 

## Documentation

See the @abstr_hyperlink 

## Usage

See `EnumGenie.Sample` project for a ...umm... sample. Crazy.

@abstr_code_section 

## Common Mistakes

### Nothing is being output!

Ensure you are calling `.Write()` at the end. This is where the work is done, the rest is just configuration.
