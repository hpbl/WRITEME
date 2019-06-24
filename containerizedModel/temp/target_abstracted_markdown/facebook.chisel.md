# Chisel

`Chisel` is a collection of `LLDB` commands to assist in the debugging of iOS apps.

[[Installation](#installation) • [Commands](#commands) • [Custom Commands](#custom-commands) • [Development Workflow](#development-workflow) [Contributing](#contributing) • [License](#license)]

For a comprehensive overview of LLDB, and how Chisel complements it, read Ari Grant's @abstr_hyperlink in issue @abstr_number of @abstr_hyperlink .

## Installation

@abstr_code_section 

if `.lldbinit` file doesn't exist you can create it & open it by tapping on the terminal

@abstr_code_section 

Then add the following line to your `~/.lldbinit` file.

```Python

# ~/.lldbinit

... command script import /usr/local/opt/chisel/libexec/fblldb.py @abstr_code_section Python

# ~/.lldbinit

... command script import /path/to/fblldb.py

@abstr_code_section Python (lldb) help The following is a list of built-in, permanent debugger commands: ...

The following is a list of your current user-defined commands: ... @abstr_code_section (lldb) help border Draws a border around . Color and width can be optionally provided.

Arguments: ; Type: UIView*; The view to border.

Options: \--color/-c ; Type: string; A color name such as 'red', 'green', 'magenta', etc. \--width/-w ; Type: CGFloat; Desired width of border.

Syntax: border [--color=color] [--width=width]  @abstr_code_section python

# !/usr/bin/python

# Example file with custom commands, located at /magical/commands/example.py

import lldb import fblldbbase as fb

def lldbcommands(): return [ PrintKeyWindowLevel() ]

class PrintKeyWindowLevel(fb.FBCommand): def name(self): return 'pkeywinlevel'

def description(self): return 'An incredibly contrived command that prints the window level of the key window.'

def run(self, arguments, options): # It's a good habit to explicitly cast the type of all return # values and arguments. LLDB can't always find them on its own. lldb.debugger.HandleCommand('p (CGFloat)[(id)[(id)[UIApplication sharedApplication] keyWindow] windowLevel]') @abstr_code_section Python

# ~/.lldbinit

... command script import /path/to/fblldb.py script fblldb.loadCommandsInDirectory('/magical/commands/')

```

There's also builtin support to make it super easy to specify the arguments and options that a command takes. See the _border_ and _pinvocation_ commands for example use.

## Development Workflow

Developing commands, whether for local use or contributing to `Chisel` directly, both follow the same workflow. Create a command as described in the Custom Commands section and then

@abstr_number . Start `LLDB` @abstr_number . Reach a breakpoint (or simply pause execution via the pause button in `Xcode`'s debug bar or `process interrupt` if attached directly) @abstr_number . Execute `command source ~/.lldbinit` in LLDB to source the commands @abstr_number . Run the command you are working on @abstr_number . Modify the command @abstr_number . Optionally run `script reload(modulename)` @abstr_number . Repeat steps @abstr_number - @abstr_number until the command becomes a source of happiness

## Contributing

Please contribute any generic commands that you make. If it helps you then it will likely help many others! :D See `CONTRIBUTING.md` to learn how to contribute.

## License

`Chisel` is BSD-licensed. See `LICENSE`.
