# About Robo @abstr_number T

@abstr_hyperlink (formerly Robomongo *) is a shell-centric cross-platform MongoDB management tool. Unlike most other MongoDB admin UI tools, Robo @abstr_number T embeds the actual `mongo` shell in a tabbed interface with access to a shell command line as well as GUI interaction.

From version @abstr_number . @abstr_number , Robo @abstr_number T embeds the _*MongoDB @abstr_number . @abstr_number *_ shell (including support for SCRAM-SHA- @abstr_number auth and MongoDB SRV connection strings).

**MongoDB shell history:**   
From version @abstr_number . @abstr_number , Robo @abstr_number T embeds the _*MongoDB @abstr_number . @abstr_number *_ shell.   
From version @abstr_number . @abstr_number , Robo @abstr_number T embeds the _*MongoDB @abstr_number . @abstr_number *_ shell (including SCRAM-SHA- @abstr_number auth and support for WiredTiger storage engine).   
From version @abstr_number . @abstr_number .x, Robo @abstr_number T embeds the _*MongoDB @abstr_number . @abstr_number . @abstr_number *_ shell. 

* @abstr_hyperlink 

# What's new in latest Robo @abstr_number T @abstr_number . @abstr_number ?

New Features:   
\- Mongo Shell upgrade from version @abstr_number . @abstr_number to @abstr_number . @abstr_number . @abstr_number   
\- Support for importing from MongoDB SRV connection strings   
\- Query results window now supports tabbed output ( @abstr_hyperlink , @abstr_hyperlink ) \- Adding support for SCRAM-SHA- @abstr_number auth mechanism ( @abstr_hyperlink )   
\- Support for creating version @abstr_number UUID ( @abstr_hyperlink )   
\- Support for Ubuntu @abstr_number . @abstr_number and Mac @abstr_number . @abstr_number ( @abstr_hyperlink ) 

Bug Fixes:   
\- 'Create/Edit/View User' features fixed and updated # @abstr_number # @abstr_number   
\- Pagination does not work when the aggregation queries have dotted fields # @abstr_number   
\- Fix for application crash when adding index with invalid JSON   
\- 'Repair Database' in Robo @abstr_number T needs a confirm dialog box # @abstr_number   
\- Robo @abstr_number T the input space causes connection failure # @abstr_number   
\- Crash on right click when loading results # @abstr_number   
\- Attempt to fix # @abstr_number : For CRUD ops showing progress bar and disabling context menu while waiting for edit op to finish   
\- Fixing UI issue where Functions folder freezing with "Functions..." when fails to refresh   
\- Attempt to fix # @abstr_number : Crash when right click on existing results plus a new long running query 

Blog: http://blog.robomongo.org/robo- @abstr_number t- @abstr_number - @abstr_number /   
Download: https://robomongo.org/download   
Watch: @abstr_hyperlink   
Follow: https://twitter.com/Robomongo

# Supported Platforms

Note: This sections is for Robo @abstr_number T and it directly depends on what MongoDB suppports   
(See: https://docs.mongodb.com/manual/administration/production-notes/#prod-notes-supported-platforms)

| MongoDB Versions | | :-------------------- | | @abstr_number . @abstr_number | | @abstr_number . @abstr_number | | @abstr_number . @abstr_number | | @abstr_number . @abstr_number |

| MongoDB Cloud Platforms| | :------------ | | MongoDB Atlas | | Compose | | mLab | | ObjectRocket | | ScaleGrid | | Amazon EC @abstr_number |

| Windows | Mac | Linux |   
|:---------------------- | :--------------------------------| :---------------------------| | Windows @abstr_number -bit @abstr_number | Mac OS X @abstr_number . @abstr_number (Mojave) | Linux Ubuntu @abstr_number . @abstr_number @abstr_number -bit* | Windows @abstr_number -bit @abstr_number . @abstr_number | Mac OS X @abstr_number . @abstr_number (High Sierra) | Linux Ubuntu @abstr_number . @abstr_number @abstr_number -bit* | | Windows @abstr_number -bit @abstr_number | Mac OS X @abstr_number . @abstr_number (Sierra) | Linux CentOS @abstr_number @abstr_number -bit* _* | | | | Linux CentOS @abstr_number @abstr_number -bit_ ** |

* Latest stable build   
** Support for CentOS temporarily dropped starting from version @abstr_number . @abstr_number 

# Download

You can download tested installer packages for macOS, Windows, and Linux from our site: @abstr_hyperlink .

The latest stable release is currently @abstr_hyperlink .

# Support

Robo @abstr_number T is an open source project driven by volunteers. We'll try to get to your questions as soon as we can, but please be patient :).

You can:

  * @abstr_hyperlink 

  * @abstr_hyperlink 




# Contribute!

### Suggest Features

New feature suggestions or UI improvements are always welcome. @abstr_hyperlink 

This project is powered by open source volunteers, so we have a limited amount of development resource to address all requests. We will certainly make best efforts to progress (particularly for those with strong community upvotes).

### Code Contributions

Code contributions are always welcome! Just try to follow our pre-commit checks and coding style: \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink 

If you plan to contribute, please create a Github issue (or comment on the relevant existing issue) so we can help coordinate with upcoming release plans.

Pull requests (PRs) should generally be for discrete issues (i.e. one issue per PR please) and be clean to merge against the current master branch. It would also be helpful if you can confirm what testing has been done (specific O/S targets and MongoDB versions if applicable).

A usual naming approach for feature branches is `issue-###`. Include the issue number in your commit message / pull request description to link the PR to the original issue.

For example: `# @abstr_number : updated QScintilla to @abstr_number . @abstr_number . @abstr_number for retina display support".`

### Design

There are some cosmetic issues we could use help with (designing images or UI). They are marked in the issue queue with a @abstr_hyperlink label. If you see an open issue that you'd like to contribute to, please feel free to volunteer by commenting on it.

### Testing

There are a number of issues we could use help with reproducing. They are marked in the issue queue with a @abstr_hyperlink label. If you see an open issue that doesn't appear to be reproducible yet, please feel free to test and comment with your findings.

# License

Copyright @abstr_number - @abstr_number @abstr_hyperlink . All rights reserved.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version @abstr_number as published by the Free Software Foundation.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see @abstr_hyperlink .
