# mycli

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

A command line client for MySQL that can do auto-completion and syntax highlighting.

HomePage: @abstr_hyperlink   
Documentation: @abstr_hyperlink 

@abstr_image @abstr_image 

Postgres Equivalent: @abstr_hyperlink 

## Quick Start

If you already know how to install python packages, then you can install it via pip:

You might need sudo on linux.

@abstr_code_section 

or

@abstr_code_section 

or

@abstr_code_section 

### Usage
    
    
    $ mycli --help
    Usage: mycli [OPTIONS] [DATABASE]
    
      A MySQL terminal client with auto-completion and syntax highlighting.
    
      Examples:
        - mycli my_database
        - mycli -u my_user -h my_host.com my_database
        - mycli mysql://my_user@my_host.com: @abstr_number /my_database
    
    Options:
      -h, --host TEXT               Host address of the database.
      -P, --port INTEGER            Port number to use for connection. Honors
                                    $MYSQL_TCP_PORT.
      -u, --user TEXT               User name to connect to the database.
      -S, --socket TEXT             The socket file to use for connection.
      -p, --password TEXT           Password to connect to the database.
      --pass TEXT                   Password to connect to the database.
      --ssh-user TEXT               User name to connect to ssh server.
      --ssh-host TEXT               Host name to connect to ssh server.
      --ssh-port INTEGER            Port to connect to ssh server.
      --ssh-password TEXT           Password to connect to ssh server.
      --ssh-key-filename TEXT       Private key filename (identify file) for the
                                    ssh connection.
      --ssl-ca PATH                 CA file in PEM format.
      --ssl-capath TEXT             CA directory.
      --ssl-cert PATH               X @abstr_number  cert in PEM format.
      --ssl-key PATH                X @abstr_number  key in PEM format.
      --ssl-cipher TEXT             SSL cipher to use.
      --ssl-verify-server-cert      Verify server's "Common Name" in its cert
                                    against hostname used when connecting. This
                                    option is disabled by default.
      -V, --version                 Output mycli's version.
      -v, --verbose                 Verbose output.
      -D, --database TEXT           Database to use.
      -d, --dsn TEXT                Use DSN configured into the [alias_dsn]
                                    section of myclirc file.
      --list-dsn                    list of DSN configured into the [alias_dsn]
                                    section of myclirc file.
      -R, --prompt TEXT             Prompt format (Default: "\t \u@\h:\d> ").
      -l, --logfile FILENAME        Log every query and its results to a file.
      --defaults-group-suffix TEXT  Read MySQL config groups with the specified
                                    suffix.
      --defaults-file PATH          Only read MySQL options from the given file.
      --myclirc PATH                Location of myclirc file.
      --auto-vertical-output        Automatically switch to vertical output mode
                                    if the result is wider than the terminal
                                    width.
      -t, --table                   Display batch output in table format.
      --csv                         Display batch output in CSV format.
      --warn / --no-warn            Warn before running a destructive query.
      --local-infile BOOLEAN        Enable/disable LOAD DATA LOCAL INFILE.
      --login-path TEXT             Read this path from the login file.
      -e, --execute TEXT            Execute command and quit.
      --help                        Show this message and exit.
    

## Features

`mycli` is written using @abstr_hyperlink .

  * Auto-completion as you type for SQL keywords as well as tables, views and columns in the database.
  * Syntax highlighting using Pygments.
  * Smart-completion (enabled by default) will suggest context-sensitive completion. 
    * `SELECT * FROM <tab>` will only show table names.
    * `SELECT * FROM users WHERE <tab>` will only show column names.
  * Support for multiline queries.
  * Favorite queries with optional positional parameters. Save a query using `\fs alias query` and execute it with `\f alias` whenever you need.
  * Timing of sql statments and table rendering.
  * Config file is automatically created at `~/.myclirc` at first launch.
  * Log every query and its results to a file (disabled by default).
  * Pretty prints tabular data (with colors!)
  * Support for SSL connections



## Contributions:

If you're interested in contributing to this project, first of all I would like to extend my heartfelt gratitude. I've written a small doc to describe how to get this running in a development setup.

https://github.com/dbcli/mycli/blob/master/CONTRIBUTING.md

Please feel free to reach out to me if you need help.

My email: amjith.r@gmail.com

Twitter: @abstr_hyperlink 

## Detailed Install Instructions:

### Fedora

Fedora has a package available for mycli, install it using dnf:

@abstr_code_section 

### RHEL, Centos

I haven't built an RPM package for mycli for RHEL or Centos yet. So please use `pip` to install `mycli`. You can install pip on your system using:

@abstr_code_section 

Once that is installed, you can install mycli as follows:

@abstr_code_section 

### Windows

Follow the instructions on this blogpost: https://www.codewall.co.uk/installing-using-mycli-on-windows/

### Cygwin

@abstr_number . Make sure the following Cygwin packages are installed: `python @abstr_number`, `python @abstr_number -pip`. @abstr_number . Install mycli: `pip @abstr_number install mycli`

### Thanks:

This project was funded through kickstarter. My thanks to the @abstr_hyperlink who supported the project.

A special thanks to @abstr_hyperlink for creating @abstr_hyperlink , which is quite literally the backbone library, that made this app possible. Jonathan has also provided valuable feedback and support during the development of this app.

@abstr_hyperlink is used for command line option parsing and printing error messages.

Thanks to @abstr_hyperlink for a pure python adapter to MySQL database.

### Compatibility

Mycli is tested on macOS and Linux.

**Mycli is not tested on Windows** , but the libraries used in this app are Windows-compatible. This means it should work without any modifications. If you're unable to run it on Windows, please @abstr_hyperlink .

### Configuration and Usage

For more information on using and configuring mycli, @abstr_hyperlink .

Common topics include: \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink 
