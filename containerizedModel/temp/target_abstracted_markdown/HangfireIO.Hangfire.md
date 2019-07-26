# Hangfire 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Build Status

| `master` | `dev` \--- | --- | --- **Windows** | @abstr_hyperlink | @abstr_hyperlink **Linux / OS X** | @abstr_hyperlink | @abstr_hyperlink 

## Overview

Incredibly easy way to perform **fire-and-forget** , **delayed** and **recurring jobs** inside **ASP.NET applications**. CPU and I/O intensive, long-running and short-running jobs are supported. No Windows Service / Task Scheduler required. Backed by Redis, SQL Server, SQL Azure and MSMQ.

Hangfire provides a unified programming model to handle background tasks in a **reliable way** and run them on shared hosting, dedicated hosting or in cloud. You can start with a simple setup and grow computational power for background jobs with time for these scenarios:

  * mass notifications/newsletters
  * batch import from xml, csv or json
  * creation of archives
  * firing off web hooks
  * deleting users
  * building different graphs
  * image/video processing
  * purging temporary files
  * recurring automated reports
  * database maintenance
  * _…and so on_



Hangfire is a .NET Framework alternative to @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink .

@abstr_image 

## Installation

Hangfire is available as a NuGet package. You can install it using the NuGet Package Console window:

@abstr_code_section 

After installation, update your existing @abstr_hyperlink file with the following lines of code. If you do not have this class in your project or don't know what is it, please read the @abstr_hyperlink guide to learn about how to install Hangfire.

@abstr_code_section 

## Usage

This is an incomplete list of features; to see all of them, check the @abstr_hyperlink and the @abstr_hyperlink .

@abstr_hyperlink 

Dedicated worker pool threads execute queued background jobs as soon as possible, shortening your request's processing time.

@abstr_code_section 

@abstr_hyperlink 

Scheduled background jobs are executed only after a given amount of time.

@abstr_code_section 

@abstr_hyperlink 

Recurring jobs have never been simpler; just call the following method to perform any kind of recurring task using the @abstr_hyperlink .

@abstr_code_section 

**Continuations**

Continuations allow you to define complex workflows by chaining multiple background jobs together.

@abstr_code_section 

**Process background tasks inside a web application…**

You can process background tasks in any OWIN-compatible application framework, including @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , etc. Forget about @abstr_hyperlink – Hangfire is reliable for web applications from scratch, even on shared hosting.

@abstr_code_section 

**… or anywhere else**

In console applications, Windows Service, Azure Worker Role, etc.

@abstr_code_section 

## Questions? Problems?

Open-source projects develop more smoothly when discussions are public.

If you have any questions, problems related to Hangfire usage or if you want to discuss new features, please visit the @abstr_hyperlink . You can sign in there using your existing Google or GitHub account, so it's very simple to start using it.

If you've discovered a bug, please report it to the @abstr_hyperlink . Detailed reports with stack traces, actual and expected behavours are welcome. 

## Related Projects

Please see the @abstr_hyperlink page on the official site.

## Building the sources

Prerequesities: * @abstr_hyperlink : Required if you intend to edit the cshtml files. * Install the MSMQ service (Microsoft Message Queue Server), if not already installed.

Then, create an environment variable with Variable name `Hangfire_SqlServer_ConnectionStringTemplate` and put your connection string in the Variable value field. Example:

  * Variable name: `Hangfire_SqlServer_ConnectionStringTemplate`
  * Variable value: `Data Source=.\sqlexpress;Initial Catalog=Hangfire.SqlServer.Tests;Integrated Security=True;`



To build a solution and get assembly files, just run the following command. All build artifacts, including `*.pdb` files, will be placed into the `build` folder. **Before proposing a pull request, please use this command to ensure everything is ok.** Btw, you can execute this command from the Package Manager Console window.

@abstr_code_section 

To build NuGet packages as well as an archive file, use the `pack` command as shown below. You can find the result files in the `build` folder.

@abstr_code_section 

To see the full list of avalable commands, pass the `-docs` switch:

@abstr_code_section 

Hangfire uses @abstr_hyperlink build automation tool. All psake tasks and functions defined in `psake-build.ps @abstr_number` (for this project) and `psake-common.ps @abstr_number` (for other Hangfire projects) files. Thanks to the psake project, they are very simple to use and modify!

Razor templates are compiled upon save with the @abstr_hyperlink . You will need this installed if you want to modify the Dashboard UI.

## License

Copyright © @abstr_number - @abstr_number Sergey Odinokov.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version @abstr_number of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along with this program. If not, see @abstr_hyperlink .

## Legal

By submitting a Pull Request, you disavow any rights or claims to any changes submitted to the Hangfire project and assign the copyright of those changes to Sergey Odinokov.

If you cannot or do not want to reassign those rights (your employment contract for your employer may not allow this), you should not submit a PR. Open an issue and someone else can do the work.

This is a legal way of saying "If you submit a PR to us, that code becomes ours". @abstr_number . @abstr_number % of the time that's what you intend anyways; we hope it doesn't scare you away from contributing.
