# s @abstr_number fs

s @abstr_number fs allows Linux and macOS to mount an S @abstr_number bucket via FUSE. s @abstr_number fs preserves the native object format for files, allowing use of other tools like @abstr_hyperlink . @abstr_hyperlink 

## Features

  * large subset of POSIX including reading/writing files, directories, symlinks, mode, uid/gid, and extended attributes
  * compatible with Amazon S @abstr_number , Google Cloud Storage, and other S @abstr_number -based object stores
  * large files via multi-part upload
  * renames via server-side copy
  * optional server-side encryption
  * data integrity via MD @abstr_number hashes
  * in-memory metadata caching
  * local disk data caching
  * user-specified regions, including Amazon GovCloud
  * authenticate via v @abstr_number or v @abstr_number signatures



## Installation

Many systems provide pre-built packages:

  * Amazon Linux via EPEL:

@abstr_code_section 

  * Debian @abstr_number and Ubuntu @abstr_number . @abstr_number or newer:

@abstr_code_section 

  * Fedora @abstr_number or newer:

@abstr_code_section 

  * RHEL and CentOS @abstr_number or newer through via EPEL:

@abstr_code_section 

  * SUSE @abstr_number and openSUSE @abstr_number . @abstr_number or newer:

@abstr_code_section 

  * macOS via @abstr_hyperlink :

@abstr_code_section 




Otherwise consult the complation instructions.

## Examples

s @abstr_number fs supports the standard @abstr_hyperlink stored in `${HOME}/.aws/credentials`. Alternatively, s @abstr_number fs supports a custom passwd file.

The default location for the s @abstr_number fs password file can be created:

  * using a .passwd-s @abstr_number fs file in the users home directory (i.e. ${HOME}/.passwd-s @abstr_number fs)
  * using the system-wide /etc/passwd-s @abstr_number fs file



Enter your credentials in a file `${HOME}/.passwd-s @abstr_number fs` and set owner-only permissions:

@abstr_code_section 

Run s @abstr_number fs with an existing bucket `mybucket` and directory `/path/to/mountpoint`:

@abstr_code_section 

If you encounter any errors, enable debug output:

@abstr_code_section 

You can also mount on boot by entering the following line to `/etc/fstab`:

@abstr_code_section 

or

@abstr_code_section 

If you use s @abstr_number fs with a non-Amazon S @abstr_number implementation, specify the URL and path-style requests:

@abstr_code_section 

or(fstab)

@abstr_code_section 

To use IBM IAM Authentication, use the `-o ibm_iam_auth` option, and specify the Service Instance ID and API Key in your credentials file:

@abstr_code_section 

The Service Instance ID is only required when using the `-o create_bucket` option.

Note: You may also want to create the global credential file first

@abstr_code_section 

Note @abstr_number : You may also need to make sure `netfs` service is start on boot

## Limitations

Generally S @abstr_number cannot offer the same performance or semantics as a local file system. More specifically:

  * random writes or appends to files require rewriting the entire file
  * metadata operations such as listing directories have poor performance due to network latency
  * @abstr_hyperlink can temporarily yield stale data( @abstr_hyperlink )
  * no atomic renames of files or directories
  * no coordination between multiple clients mounting the same bucket
  * no hard links
  * inotify detects only local modifications, not external ones by other clients or tools



## References

  * @abstr_hyperlink - similar to s @abstr_number fs but has better performance and less POSIX compatibility
  * @abstr_hyperlink - mount an S @abstr_number bucket as a single file
  * @abstr_hyperlink - combine with s @abstr_number fs to mount Backblaze B @abstr_number , EMC Atmos, Microsoft Azure, and OpenStack Swift buckets
  * @abstr_hyperlink - similar to s @abstr_number fs but uses its own object format
  * @abstr_hyperlink - similar to s @abstr_number fs but uses SNS to allow multiple clients to mount a bucket



## Frequently Asked Questions

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## License

Copyright (C) @abstr_number Randy Rizun @abstr_hyperlink 

Licensed under the GNU GPL version @abstr_number 
