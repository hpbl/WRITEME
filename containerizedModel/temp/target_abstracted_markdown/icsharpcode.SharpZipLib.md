# SharpZipLib @abstr_hyperlink @abstr_hyperlink 

The SharpZipLib project is looking for a new maintainer - please read @abstr_hyperlink 

## Introduction

SharpZipLib (#ziplib, formerly NZipLib) is a compression library that supports Zip files using both stored and deflate compression methods, PKZIP @abstr_number . @abstr_number style and AES encryption, tar with GNU long filename extensions, GZip, zlib and raw deflate, as well as BZip @abstr_number . Zip @abstr_number is supported while Deflate @abstr_number is not yet supported. It is implemented as an assembly (installable in the GAC), and thus can easily be incorporated into other projects (in any .NET language). The creator of SharpZipLib put it this way: "I've ported the zip library over to C# because I needed gzip/zip compression and I didn't want to use libzip.dll or something like this. I want all in pure C#."

SharpZipLib was originally ported from the @abstr_hyperlink java.util.zip library for use with @abstr_hyperlink , which needed gzip/zip compression. bzip @abstr_number compression and tar archiving were added later due to popular demand.

The @abstr_hyperlink has precompiled libraries available for download, @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , samples and more.

## License

This software is now released under the @abstr_hyperlink . Please see @abstr_hyperlink for more information on the relicensing effort.

Previous versions were released under the @abstr_hyperlink with an @abstr_hyperlink which allowed linking with non-GPL programs.

## Namespace layout

| Module | Namespace | |:----------------:|:-----------------------------| |BZip @abstr_number implementation|ICSharpCode.SharpZipLib.BZip @abstr_number .*| |Checksum implementation|ICSharpCode.SharpZipLib.Checksum.*| |Core utilities / interfaces|ICSharpCode.SharpZipLib.Core.*| |Encryption implementation|ICSharpCode.SharpZipLib.Encryption.*| |GZip implementation|ICSharpCode.SharpZipLib.GZip.*| |LZW implementation|ICSharpCode.SharpZipLib.Lzw.*| |Tar implementation|ICSharpCode.SharpZipLib.Tar.*| |ZIP implementation|ICSharpCode.SharpZipLib.Zip.*| |Inflater/Deflater|ICSharpCode.SharpZipLib.Zip.Compression.*| |Inflater/Deflater streams|ICSharpCode.SharpZipLib.Zip.Compression.Streams.*|

## Credits

SharpZipLib was initially developed by @abstr_hyperlink . Past maintainers are John Reilly, David Pierson and Neil McNeight. 

And thanks to all the people that contributed features, bug fixes and issue reports.
