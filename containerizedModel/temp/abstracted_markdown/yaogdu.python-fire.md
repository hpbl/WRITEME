# Python Fire

_Python Fire is a library for creating command line interfaces (CLIs) from absolutely any Python object._

  * Python Fire is a simple way to create a CLI in Python. [ @abstr_number ]
  * Python Fire is a helpful tool for developing and debugging Python code. [ @abstr_number ]
  * Python Fire helps with exploring existing code or turning other people's code into a CLI. [ @abstr_number ]
  * Python Fire makes transitioning between Bash and Python easier. [ @abstr_number ]
  * Python Fire makes using a Python REPL easier by setting up the REPL with the modules and variables you'll need already imported and created. [ @abstr_number ]



## Installation

`pip install fire`

## Basic Usage

You can call `Fire` on any Python object:  
functions, classes, modules, objects, dictionaries, lists, tuples, etc. They all work!

Here's a simple example.

@abstr_code_section 

Then, from the command line, you can run:

@abstr_code_section 

To learn how Fire behaves on functions, objects, dicts, lists, etc, and to learn about Fire's other features, see the Using a Fire CLI page.

For additional examples, see The Python Fire Guide.

## Why is it called Fire?

When you call `Fire`, it fires off (executes) your command.

## Where can I learn more?

Please see The Python Fire Guide.

## Reference

| Setup | Command | Notes | :------ | :------------------ | :--------- | install | `pip install fire` |

| Creating a CLI | Command | Notes | :--------------| :--------------------- | :--------- | import | `import fire` | | Call | `fire.Fire()` | Turns the current module into a Fire CLI. | Call | `fire.Fire(component)` | Turns `component` into a Fire CLI.

| Using a CLI | Command | Notes | :------------- | :------------------------- | :--------- | Help | `command -- --help` | | REPL | `command -- --interactive` | Enters interactive mode. | Separator | `command -- --separator=X` | This sets the separator to `X`. The default separator is `-`. | Completion | `command -- --completion` | Generate a completion script for the CLI. | Trace | `command -- --trace` | Gets a Fire trace for the command. | Verbose | `command -- --verbose` | _Note that flags are separated from the Fire command by an isolated `--` arg._

## Disclaimer

This is not an official Google product.
