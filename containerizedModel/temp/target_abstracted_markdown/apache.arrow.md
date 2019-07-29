# Apache Arrow

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Powering In-Memory Analytics

Apache Arrow is a development platform for in-memory analytics. It contains a set of technologies that enable big data systems to process and move data fast.

Major components of the project include:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink : an @abstr_hyperlink -based Arrow expression compiler, part of the C++ codebase
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink : a shared-memory blob store, part of the C++ codebase
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Arrow is an @abstr_hyperlink project. Learn more at @abstr_hyperlink .

## What's in the Arrow libraries?

The reference Arrow libraries contain a number of distinct software components:

  * Columnar vector and table-like containers (similar to data frames) supporting flat or nested types
  * Fast, language agnostic metadata messaging layer (using Google's Flatbuffers library)
  * Reference-counted off-heap buffer memory management, for zero-copy memory sharing and handling memory-mapped files
  * IO interfaces to local and remote filesystems
  * Self-describing binary wire formats (streaming and batch/file-like) for remote procedure calls (RPC) and interprocess communication (IPC)
  * Integration tests for verifying binary compatibility between the implementations (e.g. sending data from Java to C++)
  * Conversions to and from other in-memory data structures



## How to Contribute

Please read our latest @abstr_hyperlink .

## Getting involved

Even if you do not plan to contribute to Apache Arrow itself or Arrow integrations in other projects, we'd be happy to have you involved:

  * Join the mailing list: send an email to @abstr_hyperlink . Share your ideas and use cases for the project.
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Contribute code to one of the reference implementations


