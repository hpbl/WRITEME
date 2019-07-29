_* THIS REPO HAS BEEN ARCHIVED AND IS NO LONGER BEING ACTIVELY MAINTAINED *_

# Beringei @abstr_hyperlink 

A high performance, in memory time series storage engine

@abstr_image 

In the fall of @abstr_number , we published the @abstr_hyperlink at VLDB @abstr_number . Beringei is the open source representation of the ideas presented in this paper.

Beringei is a high performance time series storage engine. Time series are commonly used as a representation of statistics, gauges, and counters for monitoring performance and health of a system. 

## Features

Beringei has the following features:

  * Support for very fast, in-memory storage, backed by disk for persistence. Queries to the storage engine are always served out of memory for extremely fast query performance, but backed to disk so the process can be restarted or migrated with very little down time and no data loss.
  * Extremely efficient streaming compression algorithm. Our streaming compression algorithm is able to compress real world time series data by over @abstr_number %. The delta of delta compression algorithm used by Beringei is also fast - we see that a single machine is able to compress more than @abstr_number . @abstr_number million datapoints/second.
  * Reference sharded service implementation, including a client implementation.
  * Reference http service implementation that enables direct Grafana integration.



## How can I use Beringei?

Beringei can be used in one of two ways. 

@abstr_number . We have created a simple, sharded service, and reference client implementation, that can store and serve time series query requests. @abstr_number . You can use Beringei as an embedded library to handle the low-level details of efficiently storing time series data. Using Beringei in this way is similar to @abstr_hyperlink - the Beringei library can be the high performance storage system underlying your performance monitoring solution.

## Requirements

Beringei is tested and working on:

  * Ubuntu @abstr_number . @abstr_number 



We also depend on these open source projects:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Building Beringei

Our instructions are for Ubuntu @abstr_number . @abstr_number - but you will probably be able to modify the install scripts and directions to work with other linux distros.

  * Run `sudo ./setup_ubuntu.sh`.

  * Build beringei.

@abstr_code_section 

  * Generate a beringei configuration file.

@abstr_code_section 

  * Start beringei.

@abstr_code_section 

  * Send data.

@abstr_code_section 

  * Read the data back.

@abstr_code_section 




## License

Beringei is BSD-licensed. We also provide an additional patent grant.
