# Cmder

@abstr_hyperlink @abstr_hyperlink 

Cmder is a **software package** created out of pure frustration over absence of usable console emulator on Windows. It is based on @abstr_hyperlink with _major_ config overhaul, comes with a Monokai color scheme, amazing @abstr_hyperlink (further enhanced by @abstr_hyperlink ) and a custom prompt layout.

@abstr_image 

## Why use it

The main advantage of Cmder is portability. It is designed to be totally self-contained with no external dependencies, which makes it great for **USB Sticks** or **cloud storage**. So you can carry your console, aliases and binaries (like wget, curl and git) with you anywhere.

The Cmder's user interface is also designed to be more eye pleasing, and you can compare the main differences between Cmder and ConEmu @abstr_hyperlink .

## Installation

### Single User Portable Config

@abstr_number . Download the @abstr_hyperlink @abstr_number . Extract the archive. _Note: This path should not be`C:\Program Files` or anywhere else that would require Administrator access for modifying configuration files_ @abstr_number . (optional) Place your own executable files into the `%cmder_root%\bin` folder to be injected into your PATH. @abstr_number . Run `Cmder.exe`

### Shared Cmder install with Non-Portable Individual User Config

@abstr_number . Download the @abstr_hyperlink @abstr_number . Extract the archive to a shared location. @abstr_number . (optional) Place your own executable files into the `%cmder_root%\bin` folder to be injected into your PATH. @abstr_number . (optional) Create `%userprofile%\cmder_config\bin` folder to be injected into individual users PATH. Default is to auto create this on first run. @abstr_number . (optional) Place your own executable files into the `%userprofile%\cmder_config\bin` folder to be injected into your PATH. @abstr_number . Run `Cmder.exe` with `/C` command line argument. Example: `cmder.exe /C %userprofile%\cmder_config` * This will create the following directory structure if it is missing.
    
    
      @abstr_code_section
    

  * Both the shared install and the individual user config locations can contain a full set of init and profile.d scripts enabling shared config with user overrides. See below.



## Cmder.exe Command Line Arguments

| Argument | Description | | ------------------- | ----------------------------------------------------------------------- | | `/C [user_root_path]` | Individual user Cmder root folder. Example: `%userprofile%\cmder_config` | | `/M` | Use `conemu-%computername%.xml` for ConEmu settings storage instead of `user_conemu.xml` | | `/REGISTER [ALL, USER]` | Register a Windows Shell Menu shortcut. | | `/UNREGISTER [ALL, USER]` | Un-register a Windows Shell Menu shortcut. | | `/SINGLE` | Start Cmder in single mode. | | `/START [start_path]` | Folder path to start in. | | `/TASK [task_name]` | Task to start after launch. | | `/X [ConEmu extras pars]` | Forwads parameters to ConEmu |

## Context Menu Integration

So you've experimented with Cmder a little and want to give it a shot in a more permanent home;

### Shortcut to open Cmder in a chosen folder

@abstr_number . Open a terminal as an Administrator @abstr_number . Navigate to the directory you have placed Cmder @abstr_number . Execute `.\cmder.exe /REGISTER ALL` _If you get a message "Access Denied" ensure you are executing the command in an **Administrator** prompt._

In a file explorer window right click in or on a directory to see "Cmder Here" in the context menu.

## Keyboard shortcuts

### Tab manipulation

  * `Ctrl` \+ `T` : New tab dialog (maybe you want to open cmd as admin?)
  * `Ctrl` \+ `W` : Close tab
  * `Ctrl` \+ `D` : Close tab (if pressed on empty command)
  * `Shift` \+ `Alt` \+ `#Number` : Fast new tab: ` @abstr_number ` \- CMD, ` @abstr_number ` \- PowerShell
  * `Ctrl` \+ `Tab` : Switch to next tab
  * `Ctrl` \+ `Shift` \+ `Tab` : Switch to previous tab
  * `Ctrl` \+ `#Number` : Switch to tab #Number
  * `Alt` \+ `Enter`: Fullscreen



### Shell

  * `Ctrl` \+ `Alt` \+ `U` : Traverse up in directory structure (lovely feature!)
  * `End`, `Home`, `Ctrl` : Traversing text with as usual on Windows
  * `Ctrl` \+ `R` : History search
  * `Shift` \+ Mouse : Select and copy text from buffer



_(Some shortcuts are not yet documented, though they exist - please document them here)_

## Features

### Access to multiple shells in one window using tabs

You can open multiple tabs each containing one of the following shells:

| Task | Shell | Description | | ---- | ----- | ----------- | | Cmder | `cmd.exe` | Windows `cmd.exe` shell enhanced with Git, Git aware prompt, Clink (GNU Readline), and Aliases. | | Cmder as Admin | `cmd.exe` | Administrative Windows `cmd.exe` Cmder shell. | | PowerShell | `powershell.exe` | Windows PowerShell enhanced with Git and Git aware prompt . | | PowerShell as Admin | `powershell.exe` | Administrative Windows `powershell.exe` Cmder shell. | | Bash | `bash.exe` | Unix/Linux like bash shell running on Windows. | | Bash as Admin | `bash.exe` | Administrative Unix/Linux like bash shell running on Windows. | | Mintty | `bash.exe` | Unix/Linux like bash shell running on Windows. See below for Mintty configuration differences | | Mintty as Admin | `bash.exe` | Administrative Unix/Linux like bash shell running on Windows. See below for Mintty configuration differences |

Cmder, PowerShell, and Bash tabs all run on top of the Windows Console API and work as you might expect in Cmder with access to use ConEmu's color schemes, key bindings and other settings defined in the ConEmu Settings dialog.

⚠ _NOTE:_ Only the full edition of Cmder comes with a pre-installed bash, using a vendored @abstr_hyperlink installation. The pre-configured Bash tabs may not work on Cmder mini edition without additional configuration.

You may however, choose to use an external installation of bash, such as Microsoft's @abstr_hyperlink (called WSL) or the @abstr_hyperlink project which provides POSIX support on windows.

⚠ _NOTE:_ Mintty tabs use a program called 'mintty' as the terminal emulator that is not based on the Windows Console API, rather it's rendered graphically by ConEmu. Mintty differs from the other tabs in that it supports xterm/xterm- @abstr_number color TERM types, and does not work with ConEmu settings like color schemes and key bindings. As such, some differences in functionality are to be expected, such as Cmder not being able to apply a system-wide configuration to it.

As a result mintty specific config is done via the `[%USERPROFILE%|$HOME]/.minttyrc` file. You may read more about Mintty and its config file @abstr_hyperlink .

An example of setting Cmder portable terminal colors for mintty:

From a bash/mintty shell:

@abstr_code_section 

You may find some Monokai color schemes for mintty to match Cmder @abstr_hyperlink or @abstr_hyperlink .

### Changing Cmder Default `cmd.exe` Shell Startup Behaviour Using Task Arguments

@abstr_number . Press `Win` \+ `Alt` \+ `T` @abstr_number . Click either: * `@abstr_number . {cmd::Cmder as Admin}` * `@abstr_number . {cmd::Cmder}` @abstr_number . Add command line arguments where specified below:

_Note: Pay attention to the quotes!_

@abstr_code_section 

##### Command Line Arguments for `init.bat`

| Argument | Description | Default | | ----------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------- | | `/c [user cmder root]` | Enables user bin and config folders for 'Cmder as admin' sessions due to non-shared environment. | not set | | `/d` | Enables debug output. | not set | | `/f` | Enables Cmder Fast Init Mode. This disables some features, see pull request @abstr_hyperlink for more details. | not set | | `/t` | Enables Cmder Timed Init Mode. This displays the time taken run init scripts | not set | | `/git_install_root [file path]` | User specified Git installation root path. | `%CMDER_ROOT%\vendor\Git-for-Windows` | | `/home [home folder]` | User specified folder path to set `%HOME%` environment variable. | `%userprofile%` | | `/max_depth [ @abstr_number - @abstr_number ]` | Define max recurse depth when adding to the path for `%cmder_root%\bin` and `%cmder_user_bin%` | @abstr_number | | `/nix_tools [ @abstr_number - @abstr_number ]` | Define how `*nix` tools are added to the path. Prefer Windows Tools: @abstr_number , Prefer *nix Tools: @abstr_number , No `/usr/bin` in `%PATH%`: @abstr_number | @abstr_number | | `/svn_ssh [path to ssh.exe]` | Define `%SVN_SSH%` so we can use git svn with ssh svn repositories. | `%GIT_INSTALL_ROOT%\bin\ssh.exe` | | `/user_aliases [file path]` | File path pointing to user aliases. | `%CMDER_ROOT%\config\user-aliases.cmd` | | `/v` | Enables verbose output. | not set | | (custom arguments) | User defined arguments processed by `cexec`. Type `cexec /?` for more useage. | not set |

### Cmder Shell User Config

Single user portable configuration is possible using the cmder specific shell config files. Edit the below files to add your own configuration:

| Shell | Cmder Portable User Config | | ------------- | ----------------------------------------- | | Cmder | `%CMDER_ROOT%\config\user_profile.cmd` | | PowerShell | `$ENV:CMDER_ROOT\config\user_profile.ps @abstr_number` | | Bash/Mintty | `$CMDER_ROOT/config/user_profile.sh` |

Note: Bash and Mintty sessions will also source the `$HOME/.bashrc` file if it exists after it sources `$CMDER_ROOT/config/user_profile.sh`.

You can write `*.cmd|*.bat`, `*.ps @abstr_number`, and `*.sh` scripts and just drop them in the `%CMDER_ROOT%\config\profile.d` folder to add startup config to Cmder.

| Shell | Cmder `Profile.d` Scripts | | ------------- | --------------------------------------------------| | Cmder | `%CMDER_ROOT%\config\profile.d\*.bat and *.cmd` | | PowerShell | `$ENV:CMDER_ROOT\config\profile.d\*.ps @abstr_number` | | Bash/Mintty | `$CMDER_ROOT/config/profile.d/*.sh` |

### Aliases

#### Cmder(`Cmd.exe`) Aliases

You can define simple aliases for `cmd.exe` sessions with a command like `alias name=command`. Cmd.exe aliases support optional parameters through the `$ @abstr_number - @abstr_number` or the `$*` special characters so the alias `vi=vim.exe $*` typed as `vi [filename]` will open `[filename]` in `vim.exe`.

Cmd.exe aliases can also be more complex. See: @abstr_hyperlink for additional details on complex aliases/macros for `cmd.exe`

Aliases defined using the `alias.bat` command will automatically be saved in the `%CMDER_ROOT%\config\user-aliases.cmd` file

To make an alias and/or any other profile settings permanent add it to one of the following:

Note: These are loaded in this order by `$CMDER_ROOT/vendor/init.bat`. Anything stored in `%CMDER_ROOT%` will be a portable setting and will follow cmder to another machine.

  * `%CMDER_ROOT%\config\profile.d\*.cmd` and `\*.bat`
  * `%CMDER_ROOT%\config\user-aliases.cmd`
  * `%CMDER_ROOT%\config\user_profile.cmd`



#### Bash.exe|Mintty.exe Aliases

Bash shells support simple and complex aliases with optional parameters natively so they work a little different. Typing `alias name=command` will create an alias only for the current running session.

To make an alias and/or any other profile settings permanent add it to one of the following:

Note: These are loaded in this order by `$CMDER_ROOT/vendor/git-for-windows/etc/profile.d/cmder.sh`. Anything stored in `$CMDER_ROOT` will be a portable setting and will follow cmder to another machine.

  * `$CMDER_ROOT/config/profile.d/*.sh`
  * `$CMDER_ROOT/config/user_profile.sh`
  * `$HOME/.bashrc`



If you add bash aliases to `$CMDER_ROOT/config/user_profile.sh` they will be portable and follow your Cmder folder if you copy it to another machine. `$HOME/.bashrc` defined aliases are not portable.

#### PowerShell.exe Aliases

PowerShell has native simple alias support, for example `[new-alias | set-alias] alias command`, so complex aliases with optional parameters are not supported in PowerShell sessions. Type `get-help [new-alias|set-alias] -full` for help on PowerShell aliases.

To make an alias and/or any other profile settings permanent add it to one of the following:

Note: These are loaded in this order by `$ENV:CMDER_ROOT\vendor\user_profile.ps @abstr_number`. Anything stored in `$ENV:CMDER_ROOT` will be a portable setting and will follow cmder to another machine.

  * `$ENV:CMDER_ROOT\config\profile.d\*.ps @abstr_number`
  * `$ENV:CMDER_ROOT\config\user_profile.ps @abstr_number`



### SSH Agent

To start the vendored SSH agent simply call `start-ssh-agent`, which is in the `vendor/git-for-windows/cmd` folder.

If you want to run SSH agent on startup, include the line `@call "%GIT_INSTALL_ROOT%/cmd/start-ssh-agent.cmd"` in `%CMDER_ROOT%/config/user_profile.cmd` (usually just uncomment it).

### Vendored Git

Cmder is by default shipped with a vendored Git installation. On each instance of launching Cmder, an attempt is made to locate any other user provided Git binaries. Upon finding a `git.exe` binary, Cmder further compares its version against the vendored one _by executing_ it. The vendored `git.exe` binary is _only_ used when it is more recent than the user-installed one.

You may use your favorite version of Git by including its path in the `%PATH%` enviroment variable. Moreover, the **Mini** edition of Cmder (found on the @abstr_hyperlink ) excludes any vendored Git binaries.

### Using external Cygwin/Babun, MSys @abstr_number , WSL, or Git for Windows SDK with Cmder.

You may run bash (the default shell used on Linux, macOS and GNU/Hurd) externally on Cmder, using the following instructions:

@abstr_number . Setup a new task by pressing `Win` +`Alt` \+ `T`. @abstr_number . Click the `+` button to add a task. @abstr_number . Name the new task in the top text box. @abstr_number . Provide task parameters, this is optional. @abstr_number . Add `cmd /c "[path_to_external_env]\bin\bash --login -i" -new_console` to the `Commands` text box.

**Recommended Optional Steps:**

Copy the `vendor/cmder_exinit` file to the Cygwin/Babun, MSys @abstr_number , or Git for Windows SDK environments `/etc/profile.d/` folder to use portable settings in the `$CMDER_ROOT/config` folder.

Note: MinGW could work if the init scripts include `profile.d` but this has not been tested.

The destination file extension depends on the shell you use in that environment. For example:

  * bash - Copy to `/etc/profile.d/cmder_exinit.sh`
  * zsh - Copy to `/etc/profile.d/cmder_exinit.zsh`



Uncomment and edit the below line in the script to use Cmder config even when launched from outside Cmder.

@abstr_code_section 

### Customizing user sessions using `init.bat` custom arguments.

You can pass custom arguments to `init.bat` and use `cexec.cmd` in your `user_profile.cmd` to evaluate these arguments then execute commands based on a particular flag being detected or not.

`init.bat` creates two shortcuts for using `cexec.cmd` in your profile scripts.

#### `%ccall%` \- Evaluates flags, runs commands if found, and returns to the calling script and continues.

@abstr_code_section 

Example: `%ccall% /startnotepad start notepad.exe`

#### `%cexec%` \- Evaluates flags, runs commands if found, and does not return to the calling script.

@abstr_code_section 

Example: `%cexec% /startnotepad start notepad.exe`

It is useful when you have multiple tasks to execute `cmder` and need it to initialize the session differently depending on the task chosen.

To conditionally start `notepad.exe` when you start a specific `cmder` task:

  * Press `win`+`alt`+`t`
  * Click `+` to add a new task.
  * Add the below to the `Commands` block:

@abstr_code_section 

  * Add the below to your `%cmder_root%\config\user_profile.cmd`

@abstr_code_section 




To see detailed usage of `cexec`, type `cexec /?` in cmder.

### Integrating Cmder with @abstr_hyperlink , @abstr_hyperlink , and your favorite IDEs

Cmder by default comes with a vendored ConEmu installation as the underlying terminal emulator, as stated @abstr_hyperlink .

However, Cmder can in fact run in a variety of other terminal emulators, and even integrated IDEs. Assuming you have the latest version of Cmder, follow the following instructions to get Cmder working with your own terminal emulator.

For instructions on how to integrate Cmder with your IDE, please read our @abstr_hyperlink .

## Upgrading

The process of upgrading Cmder depends on the version/build you are currently running.

If you have a `[cmder_root]/config/user[-|_]conemu.xml`, you are running a newer version of Cmder, follow the below process:

@abstr_number . Exit all Cmder sessions and relaunch `[cmder_root]/cmder.exe`, this backs up your existing `[cmder_root]/vendor/conemu-maximus @abstr_number /conemu.xml` to `[cmder_root]/config/user[-|_]conemu.xml`.

  * The `[cmder_root]/config/user[-|_]conemu.xml` contains any custom settings you have made using the 'Setup Tasks' settings dialog.

@abstr_number . Exit all Cmder sessions and backup any files you have manually edited under `[cmder_root]/vendor`.

  * Editing files under `[cmder_root]/vendor` is not recommended since you will need to re-apply these changes after any upgrade. All user customizations should go in `[cmder_root]/config` folder.

@abstr_number . Delete the `[cmder_root]/vendor` folder. @abstr_number . Extract the new `cmder.zip` or `cmder_mini.zip` into `[cmder_root]/` overwriting all files when prompted.




If you do not have a `[cmder_root]/config/user[-|_]conemu.xml`, you are running an older version of cmder, follow the below process:

@abstr_number . Exit all Cmder sessions and backup `[cmder_root]/vendor/conemu-maximus @abstr_number /conemu.xml` to `[cmder_root]/config/user[-|_]conemu.xml`.

@abstr_number . Backup any files you have manually edited under `[cmder_root]/vendor`.

  * Editing files under `[cmder_root]/vendor` is not recommended since you will need to re-apply these changes after any upgrade. All user customizations should go in `[cmder_root]/config` folder.

@abstr_number . Delete the `[cmder_root]/vendor` folder. @abstr_number . Extract the new `cmder.zip` or `cmder_mini.zip` into `[cmder_root]/` overwriting all files when prompted.




## Current development builds

You can download builds of the current development branch by going to AppVeyor via the following link:

@abstr_hyperlink 

## License

All software included is bundled with own license

The MIT License (MIT)

Copyright (c) @abstr_number Samuel Vasko

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
