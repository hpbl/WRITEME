# NAME

GeoIP @abstr_number - Perl API for MaxMind's GeoIP @abstr_number web services and databases

# VERSION

version @abstr_number . @abstr_number 

# DESCRIPTION

This distribution provides an API for the GeoIP @abstr_number @abstr_hyperlink and @abstr_hyperlink . The API also works with the free @abstr_hyperlink .

See @abstr_hyperlink for details on the web service client API and @abstr_hyperlink for the database API.

# SPEEDING UP DATABASE READING

This module only depends on the pure Perl implementation of the MaxMind database reader ( @abstr_hyperlink ). If you install the libmaxminddb library ( @abstr_hyperlink ) and @abstr_hyperlink , then the XS implementation will be loaded automatically. The XS implementation is approximately @abstr_number x faster than the pure Perl implementation.

# VALUES TO USE FOR DATABASE OR HASH KEYS

**We strongly discourage you from using a value from any`names` accessor as a key in a database or hash.**

These names may change between releases. Instead we recommend using one of the following:

  * @abstr_hyperlink - `$city->geoname_id`
  * @abstr_hyperlink - `$continent->code` or `$continent->geoname_id`
  * @abstr_hyperlink and @abstr_hyperlink - `$country->iso_code` or `$country->geoname_id`
  * @abstr_hyperlink - `$subdivision->iso_code` or `$subdivision->geoname_id`



# INTEGRATION WITH GEONAMES

GeoNames ( @abstr_hyperlink ) offers web services and downloadable databases with data on geographical features around the world, including populated places. They offer both free and paid premium data. Each feature is uniquely identified by a `geoname_id`, which is an integer.

Many of the records returned by the GeoIP web services and databases include a `geoname_id` field. This is the ID of a geographical feature (city, region, country, etc.) in the GeoNames database.

Some of the data that MaxMind provides is also sourced from GeoNames. We source data such as place names, ISO codes, and other similar data from the GeoNames premium data set.

# REPORTING DATA PROBLEMS

If the problem you find is that an IP address is incorrectly mapped, please submit your correction to MaxMind at @abstr_hyperlink .

If you find some other sort of mistake, like an incorrect spelling, please check the GeoNames site ( @abstr_hyperlink ) first. Once you've searched for a place and found it on the GeoNames map view, there are a number of links you can use to correct data ("move", "edit", "alternate names", etc.). Once the correction is part of the GeoNames data set, it will be automatically incorporated into future MaxMind releases.

If you are a paying MaxMind customer and you're not sure where to submit a correction, please contact MaxMind support at for help. See @abstr_hyperlink for support details.

# VERSIONING POLICY

This module uses semantic versioning as described by @abstr_hyperlink . Version numbers can be read as X.YYYZZZ, where X is the major number, YYY is the minor number, and ZZZ is the patch number.

# PERL VERSION SUPPORT

MaxMind has tested this API with Perl @abstr_number . @abstr_number . @abstr_number and above. Reasonable patches for earlier versions of Perl @abstr_number . @abstr_number will be applied. We will not accept patches to support any version of Perl before @abstr_number . @abstr_number .

The data returned from the GeoIP @abstr_number web services includes Unicode characters in several locales. This may expose bugs in earlier versions of Perl. If Unicode support is important to you, we recommend that you use the most recent version of Perl available.

# SUPPORT

Please report all issues with this code using the GitHub issue tracker at @abstr_hyperlink .

If you are having an issue with a MaxMind service that is not specific to the client API please see @abstr_hyperlink for details.

# AUTHORS

  * Dave Rolsky <drolsky@maxmind.com>
  * Greg Oschwald <goschwald@maxmind.com>
  * Mark Fowler <mfowler@maxmind.com>
  * Olaf Alders <oalders@maxmind.com>



# CONTRIBUTORS

  * Andy Jack <github@veracity.ca>
  * E. Choroba <choroba@matfyz.cz>
  * Graham Knop <haarg@haarg.org>
  * Mateu X Hunter <mhunter@maxmind.com>



# COPYRIGHT AND LICENSE

This software is copyright (c) @abstr_number - @abstr_number by MaxMind, Inc.

This is free software; you can redistribute it and/or modify it under the same terms as the Perl @abstr_number programming language system itself.
