_Note: This is README for `development` branch. @abstr_hyperlink ._

# asciinema

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Terminal session recorder and the best companion of @abstr_hyperlink .

@abstr_hyperlink 

## Quick intro

asciinema lets you easily record terminal sessions and replay them in a terminal as well as in a web browser.

Install latest version (other installation options):
    
    
    sudo pip @abstr_number  install asciinema
    

Record your first session:
    
    
    asciinema rec first.cast
    

Now replay it with double speed:
    
    
    asciinema play -s  @abstr_number  first.cast
    

Or with normal speed but with idle time limited to @abstr_number seconds:
    
    
    asciinema play -i  @abstr_number  first.cast
    

You can pass `-i @abstr_number` to `asciinema rec` as well, to set it permanently on a recording. Idle time limiting makes the recordings much more interesting to watch. Try it.

If you want to watch and share it on the web, upload it:
    
    
    asciinema upload first.cast
    

The above uploads it to @abstr_hyperlink , which is a default @abstr_hyperlink instance, and prints a secret link you can use to watch your recording in a web browser.

You can record and upload in one step by omitting the filename:
    
    
    asciinema rec
    

You'll be asked to confirm the upload when the recording is done. Nothing is sent anywhere without your consent.

These are the basics, but there's much more you can do. The following sections cover installation, usage and hosting of the recordings in more detail.

## Installation

### Python package

asciinema is available on @abstr_hyperlink and can be installed with pip (Python @abstr_number with setuptools required):
    
    
    sudo pip @abstr_number  install asciinema
    

This is the recommended way of installation, which gives you the latest released version.

### Native packages

asciinema is included in repositories of most popular package managers on Mac OS X, Linux and FreeBSD. Look for package named `asciinema`. See the @abstr_hyperlink .

### Running latest version from source code checkout

If you can't use Python package or native package for your OS is outdated you can clone the repo and run asciinema straight from the checkout.

Clone the repo:
    
    
    git clone https://github.com/asciinema/asciinema.git
    cd asciinema
    

If you want latest stable version:
    
    
    git checkout master
    

If you want current development version:
    
    
    git checkout develop
    

Then run it with:
    
    
    python @abstr_number  -m asciinema --version
    

### Docker image

asciinema Docker image is based on Ubuntu @abstr_number . @abstr_number and has the latest version of asciinema recorder pre-installed.
    
    
    docker pull asciinema/asciinema
    

When running it don't forget to allocate a pseudo-TTY (`-t`), keep STDIN open (`-i`) and mount config directory volume (`-v`):
    
    
    docker run --rm -ti -v "$HOME/.config/asciinema":/root/.config/asciinema asciinema/asciinema rec
    

Container's entrypoint is set to `/usr/local/bin/asciinema` so you can run the container with any arguments you would normally pass to `asciinema` binary (see Usage section for commands and options).

There's not much software installed in this image though. In most cases you may want to install extra programs before recording. One option is to derive new image from this one (start your custom Dockerfile with `FROM asciinema/asciinema`). Another option is to start the container with `/bin/bash` as the entrypoint, install extra packages and manually start `asciinema rec`:
    
    
    docker run --rm -ti -v "$HOME/.config/asciinema":/root/.config/asciinema --entrypoint=/bin/bash asciinema/asciinema
    root@ @abstr_number d @abstr_number a @abstr_number :~# apt-get install foobar
    root@ @abstr_number d @abstr_number a @abstr_number :~# asciinema rec
    

## Usage

asciinema is composed of multiple commands, similar to `git`, `apt-get` or `brew`.

When you run `asciinema` with no arguments help message is displayed, listing all available commands with their options.

### `rec [filename]`

__Record terminal session.__

By running `asciinema rec [filename]` you start a new recording session. The command (process) that is recorded can be specified with `-c` option (see below), and defaults to `$SHELL` which is what you want in most cases.

You can temporarily pause recording of terminal by pressing `Ctrl+P`. This is useful when you want to execute some commands during the recording session that should not be captured (e.g. pasting secrets). Resume by pressing `Ctrl+P` again.

Recording finishes when you exit the shell (hit `Ctrl+D` or type `exit`). If the recorded process is not a shell then recording finishes when the process exits.

If the `filename` argument is omitted then (after asking for confirmation) the resulting asciicast is uploaded to @abstr_hyperlink (by default to asciinema.org), where it can be watched and shared.

If the `filename` argument is given then the resulting recording (called asciicast) is saved to a local file. It can later be replayed with `asciinema play <filename>` and/or uploaded to asciinema server with `asciinema upload <filename>`.

`ASCIINEMA_REC= @abstr_number` is added to recorded process environment variables. This can be used by your shell's config file (`.bashrc`, `.zshrc`) to alter the prompt or play a sound when the shell is being recorded.

Available options:

  * `--stdin` \- Enable stdin (keyboard) recording (see below)
  * `--append` \- Append to existing recording
  * `--raw` \- Save raw STDOUT output, without timing information or other metadata
  * `--overwrite` \- Overwrite the recording if it already exists
  * `-c, --command=<command>` \- Specify command to record, defaults to $SHELL
  * `-e, --env=<var-names>` \- List of environment variables to capture, defaults to `SHELL,TERM`
  * `-t, --title=<title>` \- Specify the title of the asciicast
  * `-i, --idle-time-limit=<sec>` \- Limit recorded terminal inactivity to max `<sec>` seconds
  * `-y, --yes` \- Answer "yes" to all prompts (e.g. upload confirmation)
  * `-q, --quiet` \- Be quiet, suppress all notices/warnings (implies -y)



Stdin recording allows for capturing of all characters typed in by the user in the currently recorded shell. This may be used by a player (e.g. @abstr_hyperlink ) to display pressed keys. Because it's basically a key-logging (scoped to a single shell instance), it's disabled by default, and has to be explicitly enabled via `--stdin` option.

### `play <filename>`

__Replay recorded asciicast in a terminal.__

This command replays given asciicast (as recorded by `rec` command) directly in your terminal.

Following keyboard shortcuts are available:

  * `Space` \- toggle pause,
  * `.` \- step through a recording a frame at a time (when paused),
  * `Ctrl+C` \- exit.



Playing from a local file:
    
    
    asciinema play /path/to/asciicast.cast
    

Playing from HTTP(S) URL:
    
    
    asciinema play https://asciinema.org/a/ @abstr_number .cast
    asciinema play http://example.com/demo.cast
    

Playing from asciicast page URL (requires `<link rel="alternate" type="application/x-asciicast" href="/my/ascii.cast">` in page's HTML):
    
    
    asciinema play https://asciinema.org/a/ @abstr_number 
    asciinema play http://example.com/blog/post.html
    

Playing from stdin:
    
    
    cat /path/to/asciicast.cast | asciinema play -
    ssh user@host cat asciicast.cast | asciinema play -
    

Playing from IPFS:
    
    
    asciinema play dweb:/ipfs/QmNe @abstr_number FsYaHc @abstr_number SaDEAEXbaagAzNw @abstr_number cH @abstr_number YbzN @abstr_number xV @abstr_number jV @abstr_number MCzK/ascii.cast
    

Available options:

  * `-i, --idle-time-limit=<sec>` \- Limit replayed terminal inactivity to max `<sec>` seconds
  * `-s, --speed=<factor>` \- Playback speed (can be fractional)



> For the best playback experience it is recommended to run `asciinema play` in a terminal of dimensions not smaller than the one used for recording, as there's no "transcoding" of control sequences for new terminal size.

### `cat <filename>`

__Print full output of recorded asciicast to a terminal.__

While `asciinema play <filename>` replays the recorded session using timing information saved in the asciicast, `asciinema cat <filename>` dumps the full output (including all escape sequences) to a terminal immediately.

`asciinema cat existing.cast >output.txt` gives the same result as recording via `asciinema rec --raw output.txt`.

### `upload <filename>`

__Upload recorded asciicast to asciinema.org site.__

This command uploads given asciicast (recorded by `rec` command) to asciinema.org, where it can be watched and shared.

`asciinema rec demo.cast` \+ `asciinema play demo.cast` \+ `asciinema upload demo.cast` is a nice combo if you want to review an asciicast before publishing it on asciinema.org.

### `auth`

__Link your install ID with your asciinema.org user account.__

If you want to manage your recordings (change title/theme, delete) at asciinema.org you need to link your "install ID" with asciinema.org user account.

This command displays the URL to open in a web browser to do that. You may be asked to log in first.

Install ID is a random ID ( @abstr_hyperlink ) generated locally when you run asciinema for the first time, and saved at `$HOME/.config/asciinema/install-id`. Its purpose is to connect local machine with uploaded recordings, so they can later be associated with asciinema.org account. This way we decouple uploading from account creation, allowing them to happen in any order.

> A new install ID is generated on each machine and system user account you use asciinema on, so in order to keep all recordings under a single asciinema.org account you need to run `asciinema auth` on all of those machines.
> 
> asciinema versions prior to @abstr_number . @abstr_number confusingly referred to install ID as "API token".

## Hosting the recordings on the web

As mentioned in the `Usage > rec` section above, if the `filename` argument to `asciinema rec` is omitted then the recorded asciicast is uploaded to @abstr_hyperlink . You can watch it there and share it via secret URL.

If you prefer to host the recordings yourself, you can do so by either:

  * recording to a file (`asciinema rec demo.cast`), and using @abstr_hyperlink in your HTML page, or
  * setting up your own @abstr_hyperlink instance, and @abstr_hyperlink .



## Configuration file

You can configure asciinema by creating config file at `$HOME/.config/asciinema/config`.

Configuration is split into sections (`[api]`, `[record]`, `[play]`). Here's a list of all available options for each section:

@abstr_code_section 

A very minimal config file could look like that:

@abstr_code_section 

Config directory location can be changed by setting `$ASCIINEMA_CONFIG_HOME` environment variable.

If `$XDG_CONFIG_HOME` is set on Linux then asciinema uses `$XDG_CONFIG_HOME/asciinema` instead of `$HOME/.config/asciinema`.

> asciinema versions prior to @abstr_number . @abstr_number used `$HOME/.asciinema`. If you have it there you should `mv $HOME/.asciinema $HOME/.config/asciinema`.

## Contributing

If you want to contribute to this project check out @abstr_hyperlink page.

## Authors

Developed with passion by @abstr_hyperlink and great open source @abstr_hyperlink .

## License

Copyright © @abstr_number – @abstr_number Marcin Kulik.

All code is licensed under the GPL, v @abstr_number or later. See LICENSE file for details.
