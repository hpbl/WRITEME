# Phpiredis

@abstr_hyperlink 

Phpiredis is an extension for PHP @abstr_number .x and @abstr_number .x based on @abstr_hyperlink that provides a simple and efficient client for Redis and a fast incremental parser / serializer for the @abstr_hyperlink .

## Installation

Building and using this extension requires `hiredis` (>= @abstr_number . @abstr_number . @abstr_number < @abstr_number . @abstr_number . @abstr_number ) to be installed on the system. `hiredis` is usually available in the repositories of most Linux distributions, alternatively it is possible to build it by fetching the code from its @abstr_hyperlink .

@abstr_code_section 

When the configuration script is unable to locate `hiredis` on your system, you can specify in which directory it can be found using `--with-hiredis-dir=` (e.g. `--with-hiredis-dir=/usr/local`).

Phpiredis provides a basic test suite that can be launched with `make test`. Tests require a running instance of `redis-server` listening on `@abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number` but __make sure__ that your server does not hold data you are interested: you could end up losing everything stored on it!

If you notice a failing test or a bug, you can contribute by opening a pull request on GitHub or simply file a bug on our @abstr_hyperlink .

## Usage

Connecting to Redis is as simple as calling the `phpiredis_connect()` function with a server address as the first parameter and an optional port number when the server is listening to a different port than the default `@abstr_number`:

@abstr_code_section 

Alternatively you can connect to redis using UNIX domain socket connections.

@abstr_code_section 

Once the connection is established, you can send commands to Redis using `phpiredis_command_bs()` or pipeline them using `phpiredis_multi_command_bs()`:

@abstr_code_section 

The `_bs` suffix indicates that these functions can handle binary key names or values by using the unified Redis protocol available since Redis >= @abstr_number . @abstr_number .

Commands can still be sent using the old and deprecated inline protocol using `phpiredis_command()` and `phpiredis_multi_command()` (note the lack of the `_bs` suffix) but it's highly discouraged and these functions will be removed in future versions of phpiredis.

@abstr_code_section 

## Contributing

Any kind of contribution is extremely welcome! Just fork the project on GitHub, work on new features or bug fixes using feature branches and @abstr_hyperlink with concise but complete descriptions of your changes. If you are unsure about a proposal, you can just open an issue to discuss it before writing actual code.

## Authors

@abstr_hyperlink (current maintainer) @abstr_hyperlink (original developer)

## License

The code for phpiredis is distributed under the terms of the BSD license (see LICENSE).
