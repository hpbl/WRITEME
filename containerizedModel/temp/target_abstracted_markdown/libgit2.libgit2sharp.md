# LibGit @abstr_number Sharp

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**LibGit @abstr_number Sharp brings all the might and speed of @abstr_hyperlink , a native Git implementation, to the managed world of .NET and Mono.**

## Prerequisites

  * **Windows:** .NET @abstr_number . @abstr_number . @abstr_number +
  * **Linux/Mac OS X:** Mono @abstr_number . @abstr_number +



## Online resources

  * @abstr_hyperlink (Requires NuGet @abstr_number . @abstr_number +)
  * @abstr_hyperlink 



## Troubleshooting and support

  * Usage or programming related question? Post it on @abstr_hyperlink using the tag _libgit @abstr_number sharp_
  * Found a bug or missing a feature? Feed the @abstr_hyperlink 
  * Announcements and related miscellanea through Twitter ( @abstr_hyperlink )



## Quick contributing guide

  * Fork and clone locally
  * Create a topic specific branch. Add some nice feature. Do not forget the tests ;-)
  * Send a Pull Request to spread the fun!



More thorough information available in the @abstr_hyperlink .

## Optimizing unit testing

LibGit @abstr_number Sharp strives to have comprehensive and robust unit test suite to ensure the quality of the software and to assist new contributors and users who can use the tests as sample to jump start development. There are over one thousand unit-tests for LibGit @abstr_number Sharp, this number will only grow as functionality is added.

You can do a few things to optimize running unit-tests on Windows:

@abstr_number . Set the `LibGit @abstr_number TestPath` environment variable to a path in your development environment. * If the unit-test framework cannot find the specified folder at runtime, it will fall back to the default location. @abstr_number . Configure your anti-virus software to ignore the `LibGit @abstr_number TestPath` path. @abstr_number . Install a RAM disk like @abstr_hyperlink and set `LibGit @abstr_number TestPath` to use it. * Use `imdisk.exe -a -s @abstr_number M -m X: -p "/fs:fat /q /v:ramdisk /y"` to create a RAM disk. This command requires elevated privileges and can be placed into a scheduled task or run manually before you begin unit-testing.

## Authors

  * **Code:** The LibGit @abstr_number Sharp @abstr_hyperlink 
  * **Logo:** @abstr_hyperlink 



## License

The MIT license (Refer to the @abstr_hyperlink file)
