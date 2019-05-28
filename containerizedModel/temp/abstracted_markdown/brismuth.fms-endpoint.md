# FixMyStreet-endpoint

FMS-Endpoint is a simple open source web application for storing problem reports created by mySociety's @abstr_hyperlink platform. In fact, as it's an @abstr_hyperlink server, it should be happy accepting _any_ reports submitted over the Open @abstr_number   
API.

## Who needs an FMS-endpoint?

  * if you're running a FixMyStreet deployment already, __you don't necessarily need a FixMyStreet endpoint!__



FixMyStreet sends reports to the relevant authority/department/council. This is often accomplished by sending an email, but it's usually best if the report can be injected directly into the back-end system. These systems can be large and complex and FixMyStreet can integrate with a growing number of them. The Open @abstr_number standard is used by some third parties to simplify this integration process.

However, if you're using FixMyStreet in an environment where the recipient of reports has no established back-end database for collecting reports, FMS-endpoint is a quick solution if you need to get something simple up and running.

## Installation

FixMyStreet-endpoint is written in PHP using the CodeIgniter framework. You should find it easy to install provided you have access to a webserver and a database.

The code generally expects to be running under an Apache webserver with a mySQL database. It may be possible change these things if your system is different -- see the installation documentation:

__Installation instructions:__ see `documentation/INSTALL.md`

## Quickstart

If you're familiar with PHP CodePoint (or possibly just PHP!) you might be able to get things going just by dropping the repository somewhere under your server root. (In fact, for a super quickstart, set up your webserver so that `web/` _is_ the server root).

The FMS-endpoint root page will provide diagnostics even if you've not got the database running, so try hitting that as soon as you get going.

Remember to see `documentation/INSTALL.md` for details. If the home page seems OK, try clicking on __Main site__ and logging in as the default out-of-the-box administrator:

  * username: `admin@example.com`
  * password: `password`



You must to change these values as soon as you're logged in! The root page will tell you how (until you've done it).

## Licensing

The Open @abstr_number implementation is nearly all from Philip Ashlock's raw implementation of Open @abstr_number GeoReport v @abstr_number .

See `LICENSE.txt` but also check in `documentation/` for component-specific licenses.

## About mySociety

FMS-endpoint is a @abstr_hyperlink project.

This particular project has been made possible with funding from @abstr_hyperlink , through the @abstr_hyperlink . 

Oct- @abstr_number __ FMS-endpoint is currently a work-in-progress! Check https://github.com/mysociety/fms-endpoint for changes.
