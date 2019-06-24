# GDB dashboard

Modular visual interface for GDB in Python.

This comes as a standalone single-file @abstr_hyperlink which, among the other things, enables a configurable dashboard showing the most relevant information during the program execution. Its main goal is to reduce the number of GDB commands issued to inspect the current program status allowing the programmer to focus on the control flow instead.

@abstr_image 

## Installation

Just place @abstr_hyperlink in your home directory, for example:
    
    
    wget -P ~ git.io/.gdbinit
    

## Features

  * Single GDB init file.

  * Write the dashboard to the main GDB console or to an external file/TTY.

  * Interaction with GDB using the native @abstr_hyperlink .

  * Several default modules are included to address the most basic needs: source code, assembly, registers, etc.).

  * User-defined modules can be easily developed by extending a Python class.

  * Additional configuration files (both @abstr_hyperlink and Python) are read from `~/.gdbinit.d/`.

  * Fully stylable user interface and dynamic command prompt.

  * Optional syntax highlighting using the @abstr_hyperlink Python library.

  * No GDB command has been redefined, instead all the features are available as subcommands of the main `dashboard` command.




## Requirements

GDB dashboard requires at least GDB @abstr_number . @abstr_number compiled with Python @abstr_number . @abstr_number in order to work properly. See @abstr_hyperlink for more details/workarounds.

Make sure that the system locale is configured to use UTF- @abstr_number , in most cases it already is, otherwise (in case of `UnicodeEncodeError` errors) a simple solution is to export the following environment variable:
    
    
    export LC_CTYPE=C.UTF- @abstr_number
    

On Windows the `windows-curses` Python package is needed in order to obtain the correct terminal size.

## Default modules

Follows the list of bundled default modules. Refer to the GDB help system for the full syntax.

  * `assembly` shows the disassembled code surrounding the program counter. The instructions constituting the current statement are marked, if available.

  * `history` lists the last entries of the GDB value history.

  * `memory` allows to inspect memory regions.

  * `registers` shows the CPU registers and their values.

  * `source` show the program source code, if available.

  * `stack` shows the current stack trace including the function name and the file location, if available. Optionally list the frame arguments and locals too.

  * `threads` lists the currently available threads.

  * `expressions` watches user expressions.




## Dashboard output

By default the dashboard is displayed in the GDB terminal but the `-output` command of both the dashboard and modules can change this behavior. When the output of a module is not specified then the global output is used.

### Display the whole dashboard in another terminal

@abstr_image 

It may be useful to move the dashboard to another terminal so the main terminal can be used exclusively for GDB commands and target I/O.

@abstr_number . start GDB in one terminal;

@abstr_number . open another terminal (e.g. @abstr_hyperlink pane) and get its TTY with the `tty` command (e.g. `/dev/ttys @abstr_number`, the name may be different for a variety of reasons);

@abstr_number . issue the command `dashboard -output /dev/ttys @abstr_number` to redirect the dashboard output to the newly created terminal;

@abstr_number . debug as usual.

### Display each module in a separate terminal

@abstr_image 

It is also possible to display the output of one or more modules to individual terminals. If two or more modules share the same output, they will be stacked as usual.

@abstr_number . start GDB in one terminal;

@abstr_number . open another terminal and get its TTY with the `tty` command;

@abstr_number . pick a module, say `source`, then issue the command `dashboard source -output /dev/ttys @abstr_number` to redirect its output to the newly created terminal;

@abstr_number . repeat for any other modules;

@abstr_number . debug as usual.

### Display the whole dashboard in a web browser

@abstr_image 

Pushing this even further, one could use a web browser as an auxiliary terminal using @abstr_hyperlink . Of course, using the method described above, one can also display the output of individual modules in one or more web browser instances.

@abstr_number . start GDB in one terminal;

@abstr_number . open another terminal and execute `gotty sh -c 'tty; cat'`;

@abstr_number . open a web browser, navigate to `http://localhost: @abstr_number` and note the TTY;

@abstr_number . issue the command `dashboard -output /dev/ttys @abstr_number` to redirect the dashboard output to the web browser;

@abstr_number . debug as usual.

## Commands

The GDB documentation is available at `help dashboard`. Just like any GDB command, abbreviations are possible, so `da`, `dash`, etc. all resolve to `dashboard`.

### dashboard

This is the root command and it is used to manually redisplay the dashboard.

### dashboard -configuration [`<file>`]

Display and optionally write to `<file>` the current configuration (layout, styles, outputs). This command allows to configure the dashboard live then make the changes permanent, for example:
    
    
    dashboard -configuration ~/.gdbinit.d/auto
    

### dashboard -output [`<file>`]

By default the dashboard is written to the GDB console but it is possible to redirect its output to a file or even to another terminal. If the target is a valid terminal TTY then its width is used to format the dashboard, otherwise fall back to the width of the main GDB console.

Without argument reset this setting to the default.

### dashboard -enabled [on|off]

Enable or disable the automatic display of the dashboard whenever the target program stops. The dashboard is enabled by default and even when it is disabled, it can be manually displayed with `dashboard`.

Sometimes it may be convenient to redraw the dashboard even if the target program has not changed its execution status, for example when the programmer switches the currently selected frame with the `up` or `down` commands. It is possible to do so by setting up some GDB hooks in the user-defined init file, for example:
    
    
    define hookpost-up
    dashboard
    end
    
    define hookpost-down
    dashboard
    end
    

### dashboard -layout [`<directive>`...]

By default, all the modules are enabled and placed within the dashboard in alphabetical order. As the number of modules grows, it is important to decide which modules will be part of the dashboard, and where.

Each directive is in the form `[!]<module>`, when the `!` is present then the corresponding module is disabled by default. The order of directives denotes the display order within the dashboard. For example:
    
    
    dashboard -layout source !assembly stack
    

Modules which do not appear in the list are disabled and placed after the last element in alphabetical order.

When executed without arguments, this command lists all the available modules in the form of a list of directives followed by the status of the output files of the modules.

### dashboard -style [`<name>` [`<value>`]]

Access to the stylable attributes of the dashboard, see Stylable attributes. For example, to change the prompt to something more familiar:
    
    
    dashboard -style prompt '(gdb)'
    

The argument is parsed as a Python literal and converted to the proper type.

When only the name is specified this command shows the current value, whereas without arguments prints all the attributes.

### Modules subcommands

Every module adds its own subcommand `dashboard <module>` which is used to toggle the enable flag and to redisplay the dashboard.

Modules may also declare additional subcommands, see `help dashboard <module>` from GDB.

There are two additional predefined subcommands: `-style` and `-output`.

#### -style

If a module declares some stylable attributes then the command `dashboard <module> -style` will be available. Its functioning is equivalent to the dashboard -style command but it does apply to a module.

#### -output

Similarly, the `dashboard <module> -output` mimics the dashboard -style command but allows a finer grain of operation.

## Configuration

Files in `~/.gdbinit.d/` are executed in alphabetical order, but the preference is given to Python files. If there are subdirectories, they are walked recursively. The idea is to keep separated the custom modules definition from the configuration itself.

By convention, the _main_ configuration file should be placed in `~/.gdbinit.d/` (say `~/.gdbinit.d/init`) and can be used to tune the dashboard styles and modules configuration but also the usual GDB parameters.

The alternative is to hard code changes in the provided @abstr_hyperlink , to do so just add new modules and GDB settings under `# Default modules` and `# Better GDB defaults` respectively.

### Per-project configuration

GDB natively support the auto-loading of `.gdbinit` files, this can come in handy to set up a different dashboard style according to the current project type (e.g., C++ development, reverse engineering, etc.). This feature is disabled by default for security reasons. To enable the auto-loading everywhere in the file system add this line to the main configuration file:
    
    
    set auto-load safe-path /
    

## Stylable attributes

There is number of attributes that can be used to customize the aspect of the dashboard and of its modules. They are documented within the GDB help system. For what concerns the dashboard itself it can be reached with:
    
    
    help dashboard -style
    

Whereas for modules:
    
    
    help dashboard <module> -style
    

### ANSI escape codes

Colors and text styles are specified using @abstr_hyperlink escape codes. For example setting a style to `@abstr_number ; @abstr_number` will produce `^[[ @abstr_number ; @abstr_number m`, which will result in displaying the text red (`@abstr_number`) and bright (`@abstr_number`). The ANSI output can be disabled by setting the `ansi` attribute to `False` (note that this will not affect the command prompt).

### Syntax highlighting

When the `ansi` attribute is set to `True` the @abstr_hyperlink Python library may be used by modules to provide syntax highlighting of the source code.

The `syntax_highlighting` stylable attribute is a string which defines the Pygments @abstr_hyperlink to use.

The list of all the available styles can be obtained with (from GDB itself):

@abstr_code_section 

To conveniently cycle through and try each available style (press `Return` to try the next style and `Ctrl-D` to exit):

@abstr_code_section 

### Dividers

A divider is basically a terminal-wide horizontal line with an optional label. Primary dividers are those used to separate the modules, whereas secondary dividers may be used inside modules to logically separate different sections. When a section or module is empty then the styles used for the divider are those with the `off` qualifier.

### Common styles

These are general purpose @abstr_hyperlink styles defined for convenience and used within the default modules.

  * `style_selected_ @abstr_number`
  * `style_selected_ @abstr_number`
  * `style_low`
  * `style_high`
  * `style_error`



## Custom modules

The idea of custom modules is that they provide ways to access readonly information from the target program status; it is safe to assume that they will be queried during the program execution only.

Custom modules must inherit the `Dashboard.Module` class and define some methods:

  * `label` returns the module label which will appear in the divider.

  * `lines` return a list of strings which will form the module content. When a module is temporarily unable to produce its content, it should return an empty list; its divider will then use the styles with the `off` qualifier.




The name of a module is automatically obtained by the class name.

Modules are instantiated once at initialization time and kept during the whole the GDB session.

Optionally, a module may include a description which will appear in the GDB help system by specifying a Python docstring for the class.

Optionally, a module may define stylable attributes by defining the `attributes` method returning a dictionary in which the key is the attribute name and the value is another dictionary:

@abstr_number . `default` is the initial value for this attribute.

@abstr_number . `doc` is the documentation of this attribute which will appear in the GDB help system. This key can be omitted.

@abstr_number . `name` is the name of the attribute of the Python object, defaults to the key value.

@abstr_number . `type` is the type of this attribute, it is used to coerce the value passed as an argument to the proper type, or raise an exception. This key defaults to the `str` type.

@abstr_number . `check` is a control callback which accept the coerced value and returns `True` if the value satisfies the constraint and `False` otherwise. This key is optional, when omitted no check is performed.

Optionally, a module may declare subcommands by defining the `commands` method returning a dictionary in which the key is the command name and the value is another dictionary:

@abstr_number . `action` is the callback to be executed which accepts the raw input string from the GDB prompt. Callbacks may raise exceptions to notify erroneous situations which message will be shown automatically to the user.

@abstr_number . `doc` is the command documentation.

@abstr_number . `completion` is the completion policy, one of the `gdb.COMPLETE_*` constants defined in the @abstr_hyperlink . This key is optional and defaults to `None` which is equivalent to `gdb.COMPLETE_NONE`.

### Common functions

A number of auxiliary common functions are defined in the global scope, they can be found in the provided @abstr_hyperlink and concern topics like @abstr_hyperlink output, divider formatting, conversion callbacks, etc. They should be more or less self-documented, some usage examples can be found within the bundled default modules.

### Example

Default modules already provide a good example, but here is a simple module which may be used as a template for new custom modules, it allows the programmer to note down some snippets of text during the debugging session.

@abstr_code_section 

To use the above just save it in a Python file, say `notes.py`, inside `~/.gdbinit.d/`, the following commands (together with the help) will be available:
    
    
    dashboard notes
    dashboard notes add
    dashboard notes clear
    dashboard notes -style
    

## Additional GDB front ends

GDB dashboard is not meant to work seamlessly with additional front ends, e.g., TUI, Nemiver, QtCreator, etc.

There are basically two options to work around this:

  * if the main debugging tool is GDB dashboard then it is recommended to prevent the front end from loading the `.gdbinit` file, they usually have an option to do so;

  * otherwise it is possible to load GDB dashboard manually, that is, install as usual then:
    
        mv ~/.gdbinit ~/.gdb-dashboard
    

finally load it when needed from the GDB shell:
    
        source ~/.gdb-dashboard
    




## Resources

  * @abstr_hyperlink 


