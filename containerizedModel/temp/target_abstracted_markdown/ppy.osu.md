@abstr_image 

# osu!

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Rhythm is just a _click_ away. The future of @abstr_hyperlink and the beginning of an open era! Commonly known by the codename "osu!lazer". Pew pew.

## Status

This project is still heavily under development, but is in a state where users are encouraged to try it out and keep it installed alongside the stable osu! client. It will continue to evolve over the coming months and hopefully bring some new unique features to the table.

We are accepting bug reports (please report with as much detail as possible). Feature requests are welcome as long as you read and understand the contribution guidelines listed below.

Detailed changelogs are published on the @abstr_hyperlink .

## Requirements

  * A desktop platform with the @abstr_hyperlink or higher installed.
  * When working with the codebase, we recommend using an IDE with intellisense and syntax highlighting, such as @abstr_hyperlink , @abstr_hyperlink or @abstr_hyperlink .
  * Note that there are **@abstr_hyperlink** which you may need to manually install if your operating system is not up-to-date.



## Running osu!

### Releases

If you are not interested in developing the game, you can still consume our @abstr_hyperlink .

**Latest build:**

| @abstr_hyperlink | @abstr_hyperlink | | ------------- | ------------- |

  * **Linux** users are recommended to self-compile until we have official deployment in place.
  * **iOS** users can join the @abstr_hyperlink (note that due to high demand this is regularly full).
  * **Android** users can self-compile, and expect a public beta soon.



If your platform is not listed above, there is still a chance you can manually build it by following the instructions below.

### Downloading the source code

Clone the repository:

@abstr_code_section 

To update the source code to the latest commit, run the following command inside the `osu` directory:

@abstr_code_section 

### Building

Build configurations for the recommended IDEs (listed above) are included. You should use the provided Build/Run functionality of your IDE to get things going. When testing or building new components, it's highly encouraged you use the `VisualTests` project/configuration. More information on this provided below.

> Visual Studio Code users must run the `Restore` task before any build attempt.

You can also build and run osu! from the command-line with a single command:

@abstr_code_section 

If you are not interested in debugging osu!, you can add `-c Release` to gain performance. In this case, you must replace `Debug` with `Release` in any commands mentioned in this document.

If the build fails, try to restore nuget packages with `dotnet restore`.

#### A note for Linux users

On Linux, the environment variable `LD_LIBRARY_PATH` must point to the build directory, located at `osu.Desktop/bin/Debug/$NETCORE_VERSION`.

`$NETCORE_VERSION` is the version of the targeted .NET Core SDK. You can check it by running `grep TargetFramework osu.Desktop/osu.Desktop.csproj | sed -r 's/.*>(.*)<\/.*/\ @abstr_number /'`.

For example, you can run osu! with the following command:

@abstr_code_section 

### Testing with resource/framework modifications

Sometimes it may be necessary to cross-test changes in @abstr_hyperlink or @abstr_hyperlink . This can be achieved by running some commands as documented on the @abstr_hyperlink and @abstr_hyperlink wiki pages.

### Code analysis

Code analysis can be run with `powershell ./build.ps @abstr_number` or `build.sh`. This is currently only supported under windows due to @abstr_hyperlink . Alternatively, you can install resharper or use rider to get inline support in your IDE of choice.

## Contributing

We welcome all contributions, but keep in mind that we already have a lot of the UI designed. If you wish to work on something with the intention on having it included in the official distribution, please open an issue for discussion and we will give you what you need from a design perspective to proceed. If you want to make _changes_ to the design, we recommend you open an issue with your intentions before spending too much time, to ensure no effort is wasted.

If you're unsure of what you can help with, check out the @abstr_hyperlink (especially those with the @abstr_hyperlink label).

Before starting, please make sure you are familiar with the @abstr_hyperlink procedure we have set up. New component development, and where possible, bug fixing and debugging existing components **should always be done under VisualTests**.

Note that while we already have certain standards in place, nothing is set in stone. If you have an issue with the way code is structured; with any libraries we are using; with any processes involved with contributing, _please_ bring it up. We welcome all feedback so we can make contributing to this project as pain-free as possible.

For those interested, we love to reward quality contributions via @abstr_hyperlink , paid out via paypal or osu! supporter tags. Don't hesitate to @abstr_hyperlink for your work on this project.

## Licence

The osu! client code and framework are licensed under the @abstr_hyperlink . Please see the licence file for more information. @abstr_hyperlink you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.

Please note that this _does not cover_ the usage of the "osu!" or "ppy" branding in any software, resources, advertising or promotion, as this is protected by trademark law.

Please also note that game resources are covered by a separate licence. Please see the @abstr_hyperlink repository for clarifications.
