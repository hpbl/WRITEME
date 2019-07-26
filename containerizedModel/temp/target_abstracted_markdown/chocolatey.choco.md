# Chocolatey - like yum or apt-get, but for Windows

You can just call me choco.

@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

  * Build Status
  * Chat Room
  * Support Chocolatey!
  * See Chocolatey In Action
  * Etiquette Regarding Communication
  * Information 
    * Documentation
    * Requirements
    * License / Credits
  * Submitting Issues
  * Contributing
  * Committers 
    * Compiling / Building Source
    * Windows
    * Other Platforms 
      * Prerequisites:
      * Build Process:
  * Credits



## Build Status

TeamCity | AppVeyor | Travis \------------- | ------------- | ------------- @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

## Chat Room

Come join in the conversation about Chocolatey in our Gitter Chat Room.

@abstr_hyperlink 

Or, you can find us in IRC at #chocolatey on freenode. IRC is not as often checked by committers, so it is recommended you stick to Gitter if you need more timely assistance.

Please make sure you've read over and agree with the etiquette regarding communication.

## Support Chocolatey!

  * Purchase @abstr_hyperlink 



## See Chocolatey In Action

Chocolatey FOSS install showing tab completion and `refreshenv` (a way to update environment variables without restarting your shell):

@abstr_image 

@abstr_hyperlink showing private CDN download cache and virus scan protection:

@abstr_image 

## Etiquette Regarding Communication

If you are an open source user requesting support, please remember that most folks in the Chocolatey community are volunteers that have lives outside of open source and are not paid to ensure things work for you, so please be considerate of others' time when you are asking for things. Many of us have families that also need time as well and only have so much time to give on a daily basis. A little consideration and patience can go a long way. After all, you are using a pretty good tool without cost. It may not be perfect (yet), and we know that.

If you are using a @abstr_hyperlink , you have different terms! Please see @abstr_hyperlink .

## Information

  * @abstr_hyperlink 
  * @abstr_hyperlink / @abstr_hyperlink / @abstr_hyperlink 
  * @abstr_hyperlink / @abstr_hyperlink / @abstr_hyperlink 
  * @abstr_hyperlink / @abstr_hyperlink 
  * @abstr_hyperlink / @abstr_hyperlink 



### Documentation

Please see the @abstr_hyperlink 

Give `choco.exe -?` a shot (or `choco.exe -h`). For specific commands, add the command and then the help switch e.g. `choco.exe install -h`.

### Requirements

  * .NET Framework @abstr_number . @abstr_number +
  * PowerShell @abstr_number . @abstr_number +
  * Windows Server @abstr_number + / Windows @abstr_number +



### License / Credits

Apache @abstr_number . @abstr_number - see @abstr_hyperlink and @abstr_hyperlink files.

## Submitting Issues

@abstr_image 

  * If you are having issue with a package, please see @abstr_hyperlink .
  * If you are looking for packages to be added to the community feed (aka https://chocolatey.org/packages), please see @abstr_hyperlink .

@abstr_number . Start with @abstr_hyperlink and the @abstr_hyperlink to see if your question or issue already has an answer. @abstr_number . If not found or resolved, please follow one of the following avenues:

    * If you are a licensed customer, please see @abstr_hyperlink . You can also log an issue to @abstr_hyperlink and we will submit issues to all other places on your behalf. Another avenue is to use email support to have us submit tickets and other avenues on your behalf (allowing you to maintain privacy).
    * If it is an enhancement request or issue with the website (the community package repository aka @abstr_hyperlink ), please submit the issue to the @abstr_hyperlink .
    * If you have found an issue with the GUI (Chocolatey GUI) or you want to submit an enhancement, please see @abstr_hyperlink .
    * If you have found an issue with the client (choco.exe), you are in the right place. Keep reading below.



Observe the following help for submitting an issue:

Prerequisites:

  * The issue has to do with choco itself and is not a package or website issue.
  * Please check to see if your issue already exists with a quick search of the issues. Start with one relevant term and then add if you get too many results.
  * You are not submitting an "Enhancement". Enhancements should observe @abstr_hyperlink guidelines.
  * You are not submitting a question - questions are better served as @abstr_hyperlink or @abstr_hyperlink .
  * Please make sure you've read over and agree with the etiquette regarding communication.



Submitting a ticket:

  * We'll need debug and verbose output, so please run and capture the log with `-dv` or `--debug --verbose`. You can submit that with the issue or create a gist and link it.
  * **Please note** that the debug/verbose output for some commands may have sensitive data (passwords or apiKeys) related to Chocolatey, so please remove those if they are there prior to submitting the issue.
  * choco.exe logs to a file in `$env:ChocolateyInstall\log\`. You can grab the specific log output from there so you don't have to capture or redirect screen output. Please limit the amount included to just the command run (the log is appended to with every command).
  * Please save the log output in a @abstr_hyperlink (save the file as `log.sh`) and link to the gist from the issue. Feel free to create it as secret so it doesn't fill up against your public gists. Anyone with a direct link can still get to secret gists. If you accidentally include secret information in your gist, please delete it and create a new one (gist history can be seen by anyone) and update the link in the ticket (issue history is not retained except by email - deleting the gist ensures that no one can get to it). Using gists this way also keeps accidental secrets from being shared in the ticket in the first place as well.
  * We'll need the entire log output from the run, so please don't limit it down to areas you feel are relevant. You may miss some important details we'll need to know. This will help expedite issue triage.
  * It's helpful to include the version of choco, the version of the OS, and the version of PowerShell (Posh) - the debug script should capture all of those pieces of information.
  * Include screenshots and/or animated gifs whenever possible, they help show us exactly what the problem is.



## Contributing

If you would like to contribute code or help squash a bug or two, that's awesome. Please familiarize yourself with @abstr_hyperlink .

## Committers

Committers, you should be very familiar with @abstr_hyperlink .

### Compiling / Building Source

There is a `build.bat`/`build.sh` file that creates a necessary generated file named `SolutionVersion.cs`. It must be run at least once before Visual Studio will build.

#### Windows

Prerequisites:

  * .NET Framework @abstr_number . @abstr_number (This is a windows feature installation).
  * .NET Framework @abstr_number +
  * Visual Studio is helpful for working on source.
  * ReSharper is immensely helpful (and there is a `.sln.DotSettings` file to help with code conventions).



Build Process:

  * Run `build.bat`.



Running the build on Windows should produce an artifact that is tested and ready to be used.

#### Other Platforms

##### Prerequisites:

  * Install and configure Mono @abstr_number . @abstr_number . @abstr_number ( @abstr_number . @abstr_number . @abstr_number should also work).

    * @abstr_hyperlink 

@abstr_code_section 

    * @abstr_hyperlink 

@abstr_code_section 

  * Xamarin Studio is helpful for working on source.

  * Consider adding the following to your `~/.profile` (or other relevant dot source file):

@abstr_code_section 

  * Set your permissions correctly:

@abstr_code_section 




##### Build Process:

  * Run `./build.sh`.



Running the build on Mono produces an artifact similar to Windows but may have more rough edges. You may get a failure or two in the build script that can be safely ignored.

## Credits

Chocolatey is brought to you by quite a few people and frameworks. See @abstr_hyperlink (just LEGAL/Credits.md in the zip folder).
