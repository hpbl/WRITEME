@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_image @abstr_hyperlink 

## A Scalable, Survivable, Strongly-Consistent SQL Database

  * What is CockroachDB?
  * Docs
  * Quickstart
  * Client Drivers
  * Deployment
  * Get In Touch
  * Contributing
  * Tech Talks
  * Design



## What is CockroachDB?

CockroachDB is a distributed SQL database built on a transactional and strongly-consistent key-value store. It **scales** horizontally; **survives** disk, machine, rack, and even datacenter failures with minimal latency disruption and no manual intervention; supports **strongly-consistent** ACID transactions; and provides a familiar **SQL** API for structuring, manipulating, and querying data.

For more details, see our @abstr_hyperlink and original @abstr_hyperlink .

## Status

CockroachDB is currently in beta. See our @abstr_hyperlink and @abstr_hyperlink for a list of features planned or in development.

## Docs

For guidance on installation, development, deployment, and administration, see our @abstr_hyperlink .

## Quickstart

@abstr_number . @abstr_hyperlink .

@abstr_number . @abstr_hyperlink with three nodes listening on different ports:
    
    
     @abstr_code_section
    

@abstr_number . @abstr_hyperlink as an interactive shell:
    
    
     @abstr_code_section
    

@abstr_number . Run some @abstr_hyperlink :
    
    
     @abstr_code_section
    

@abstr_number . Checkout the admin UI by pointing your browser to `http://<localhost>: @abstr_number`.

@abstr_number . CockroachDB makes it easy to @abstr_hyperlink .

## Client Drivers

CockroachDB supports the PostgreSQL wire protocol, so you can use any available PostgreSQL client drivers to connect from various languages. For recommended drivers that we've tested, see @abstr_hyperlink .

## Deployment

  * @abstr_hyperlink - Steps to deploy a CockroachDB cluster manually on multiple machines.

  * @abstr_hyperlink - Configuration files and instructions for deploying an insecure development or test cluster on GCE or AWS using @abstr_hyperlink .




## Get In Touch

### Report a Bug

For filing bugs, suggesting improvements, or requesting new features, help us out by @abstr_hyperlink .

### Need Help?

  * @abstr_hyperlink - Ask questions, find answers, and help other users.

  * @abstr_hyperlink - This is the most immediate way to connect with CockroachDB engineers.




## Contributing

We're an open source project and welcome contributions.

@abstr_number . See @abstr_hyperlink to get your local environment set up.

@abstr_number . Take a look at our @abstr_hyperlink , in particular those with the @abstr_hyperlink .

@abstr_number . Review our @abstr_hyperlink and follow our @abstr_hyperlink to learn about our style and conventions.

@abstr_number . Make your changes according to our @abstr_hyperlink .

## Tech Talks

For recordings and slides from talks given by CockroachDB founders and engineers, see @abstr_hyperlink .

## Design

This is an overview. For an in-depth discussion of the design and architecture, see the full @abstr_hyperlink . For another quick design overview, see the @abstr_hyperlink .

### Overview

CockroachDB is a distributed SQL database built on top of a transactional and consistent key:value store. The primary design goals are support for ACID transactions, horizontal scalability and survivability, hence the name. CockroachDB implements a Raft consensus algorithm for consistency. It aims to tolerate disk, machine, rack, and even datacenter failures with minimal latency disruption and no manual intervention. CockroachDB nodes (RoachNodes) are symmetric; a design goal is homogeneous deployment (one binary) with minimal configuration.

CockroachDB implements a single, monolithic sorted map from key to value where both keys and values are byte strings (not unicode). CockroachDB scales linearly (theoretically up to @abstr_number exabytes ( @abstr_number E) of logical data). The map is composed of one or more ranges and each range is backed by data stored in @abstr_hyperlink (a variant of @abstr_hyperlink ), and is replicated to a total of three or more CockroachDB servers. Ranges are defined by start and end keys. Ranges are merged and split to maintain total byte size within a globally configurable min/max size interval. Range sizes default to target @abstr_number M in order to facilitate quick splits and merges and to distribute load at hotspots within a key range. Range replicas are intended to be located in disparate datacenters for survivability (e.g. `{ US-East, US-West, Japan }`, `{ Ireland, US-East, US-West}` , `{ Ireland, US-East, US-West, Japan, Australia }`).

Single mutations to ranges are mediated via an instance of a distributed consensus algorithm to ensure consistency. We’ve chosen to use the @abstr_hyperlink . All consensus state is stored in @abstr_hyperlink .

A single logical mutation may affect multiple key/value pairs. Logical mutations have ACID transactional semantics. If all keys affected by a logical mutation fall within the same range, atomicity and consistency are guaranteed by @abstr_hyperlink ; this is the fast commit path. Otherwise, a non-locking distributed commit protocol is employed between affected ranges.

CockroachDB provides snapshot isolation (SI) and serializable snapshot isolation (SSI) semantics, allowing externally consistent, lock-free reads and writes--both from an historical snapshot timestamp and from the current wall clock time. SI provides lock-free reads and writes but still allows write skew. SSI eliminates write skew, but introduces a performance hit in the case of a contentious system. SSI is the default isolation; clients must consciously decide to trade correctness for performance. CockroachDB implements a limited form of linearalizability, providing ordering for any observer or chain of observers.

Similar to @abstr_hyperlink directories, CockroachDB allows configuration of arbitrary zones of data. This allows replication factor, storage device type, and/or datacenter location to be chosen to optimize performance and/or availability. Unlike Spanner, zones are monolithic and don’t allow movement of fine grained data on the level of entity groups.

#### SQL - NoSQL - NewSQL Capabilities

@abstr_image 
