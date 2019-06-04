# WP-CLI

@abstr_hyperlink is a set of command-line tools for managing @abstr_hyperlink installations. You can update plugins, configure multisite installs and much more, without using a web browser.

For announcements, follow @abstr_hyperlink or @abstr_hyperlink . @abstr_hyperlink for an overview of what's planned for upcoming releases.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Quick links: Using &# @abstr_number ; Installing &# @abstr_number ; Support &# @abstr_number ; Extending &# @abstr_number ; Contributing &# @abstr_number ; Credits

## Using

WP-CLI's goal is to provide a command-line interface for any action you might want to perform in the WordPress admin. For instance, `wp plugin install --activate` ( @abstr_hyperlink ) lets you install and activate a WordPress plugin:

@abstr_code_section 

WP-CLI also includes commands for many things you can't do in the WordPress admin. For example, `wp transient delete --all` ( @abstr_hyperlink ) lets you delete one or all transients:

@abstr_code_section 

For a more complete introduction to using WP-CLI, read the @abstr_hyperlink . Or, catch up with @abstr_hyperlink to learn about helpful command line utilities.

Already feel comfortable with the basics? Jump into the @abstr_hyperlink for detailed information on managing themes and plugins, importing and exporting data, performing database search-replace operations and more.

## Installing

Downloading the Phar file is our recommended installation method. Should you need, see also our documentation on @abstr_hyperlink .

Before installing WP-CLI, please make sure your environment meets the minimum requirements:

  * UNIX-like environment (OS X, Linux, FreeBSD, Cygwin); limited support in Windows environment
  * PHP @abstr_number . @abstr_number . @abstr_number or later
  * WordPress @abstr_number . @abstr_number or later



Once you've verified requirements, download the @abstr_hyperlink file using `wget` or `curl`:

@abstr_code_section 

Next, check if it is working:

@abstr_code_section 

To use WP-CLI from the command line by typing `wp`, make the file executable and move it to somewhere in your PATH. For example:

@abstr_code_section 

If WP-CLI was installed successfully, you should see something like this when you run `wp --info`:

@abstr_code_section 

### Updating

You can update WP-CLI with `wp cli update` ( @abstr_hyperlink ), or by repeating the installation steps.

If WP-CLI is owned by root or another system user, you'll need to run `sudo wp cli update`.

Want to live life on the edge? Run `wp cli update --nightly` to use the latest nightly build of WP-CLI. The nightly build is more or less stable enough for you to use in your development environment, and always includes the latest and greatest WP-CLI features.

### Tab completions

WP-CLI also comes with a tab completion script for Bash and ZSH. Just download @abstr_hyperlink and source it from `~/.bash_profile`:

@abstr_code_section 

Don't forget to run `source ~/.bash_profile` afterwards.

If using zsh for your shell, you may need to load and start `bashcompinit` before sourcing. Put the following in your `.zshrc`:

@abstr_code_section 

## Support

WP-CLI's maintainers and project contributors are volunteers, and have limited availability to address general support questions. The @abstr_hyperlink is the only officially supported version.

When looking for support, please first look for an answer in one of the following resources:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Need help with a project related to work? Professional users may want to consider @abstr_hyperlink . Alternatively, join the `#cli` channel on the @abstr_hyperlink to see if a community member might have an answer for you.

Github issues are meant for tracking enhancements and bugs of existing commands, not general support. Before submitting a bug report, please @abstr_hyperlink to help ensure your issue is addressed in a timely manner.

Please do not ask support questions on Twitter. Twitter isn't an acceptable venue for support because: @abstr_number ) it's hard to hold conversations in under @abstr_number characters, and @abstr_number ) Twitter isn't a place where someone with your same question can search for an answer in a prior conversation.

Remember, libre != gratis; the open source license grants you the freedom to use and modify, but not commitments of other people's time. Please be respectful, and set your expectations accordingly.

## Extending

A **command** is an atomic unit of WP-CLI functionality. `wp plugin install` ( @abstr_hyperlink ) is one command. `wp plugin activate` ( @abstr_hyperlink ) is another.

WP-CLI supports registering any callable class, function, or closure as a command. It reads usage details from the callback's PHPdoc. `WP_CLI::add_command()` ( @abstr_hyperlink ) is used for both internal and third-party command registration.

@abstr_code_section 

WP-CLI comes with dozens of commands. It's easier than it looks to create a custom WP-CLI command. Read the @abstr_hyperlink to learn more. Browse the @abstr_hyperlink to discover a variety of helpful functions you can use in your custom WP-CLI command.

## Contributing

Welcome and thanks!

We appreciate you taking the initiative to contribute to WP-CLI. It’s because of you, and the community around you, that WP-CLI is such a great project.

**Contributing isn’t limited to just code.** We encourage you to contribute in the way that best fits your abilities, by writing tutorials, giving a demo at your local meetup, helping other users with their support questions, or revising our documentation.

Please take a moment to @abstr_hyperlink . Following them helps to communicate that you respect the time of the other contributors to the project. In turn, they’ll do their best to reciprocate that respect when working with you, across timezones and around the world.

## Leadership

WP-CLI is led by these individuals:

  * @abstr_hyperlink - current maintainer
  * @abstr_hyperlink - previous maintainer
  * @abstr_hyperlink - founder



Read more about the project's @abstr_hyperlink and view a @abstr_hyperlink .

## Credits

Besides the libraries defined in composer.json, we have used code or ideas from the following projects:

  * @abstr_hyperlink for... a lot of things
  * @abstr_hyperlink for `wp shell`
  * @abstr_hyperlink for `wp media regenerate`
  * @abstr_hyperlink for `wp search-replace`
  * @abstr_hyperlink for `wp export`
  * @abstr_hyperlink for `wp import`
  * @abstr_hyperlink for `wp scaffold plugin-tests`


