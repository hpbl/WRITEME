# QuickSand.io

@abstr_image @abstr_image 

QuickSand is a compact C framework to analyze suspected malware documents to @abstr_number ) identify exploits in streams of different encodings, @abstr_number ) locate and extract embedded executables. By having the ability to locate embedded obfuscated executables, QuickSand could detect documents that contain zero-day or unknown obfuscated exploits.

## File Formats For Exploit and Active Content Detection

  * doc, docx, docm, rtf, etc
  * ppt, pptx, pps, ppsx, etc
  * xls, xlsx, etc
  * mime mso
  * eml email



## File Formats For Executable Detection

  * All of the above, plus PDF.
  * Any document format such as HWP.



## Lite Version - Mplv @abstr_number License

  * Key dictionary up to @abstr_number byte XOR
  * Bitwise ROL, ROR, NOT
  * Addition or substraction math cipher
  * Executable extraction: Windows, Mac, Linux, VBA
  * Exploit search
  * RTF pre processing
  * Hex stream extract
  * Base @abstr_number Stream extract
  * Embedded Zip extract
  * ExOleObjStgCompressedAtom extract
  * zLib Decode
  * Mime Mso xml Decoding
  * OpenXML decode (unzip)
  * Yara signatures included: Executables, active content, exploits CVE @abstr_number and earlier



Example results and more info @abstr_hyperlink 

## Full Version - Commercial License

  * Key cryptanalysis @abstr_number - @abstr_number bytes factors of @abstr_number ; or a specified odd size @abstr_number - @abstr_number bytes
  * @abstr_number Byte zerospace not replaced brute force XOR search
  * XOR Look Ahead cipher
  * More Yara signatures included: All lite plus most recent exploits @abstr_number - @abstr_number for CVE identification
  * Try the full version online at @abstr_hyperlink 



## Dependencies (not included)

  * Yara @abstr_number . @abstr_number +
  * zlib @abstr_number . @abstr_number . @abstr_number +
  * libzip @abstr_number . @abstr_number . @abstr_number +



## Distributed components under their own licensing

  * MD @abstr_number by RSA Data Security, Inc.
  * SHA @abstr_number by Paul E. Jones
  * SHA @abstr_number by Aaron D. Gifford 
  * jWrite by TonyWilk for json output
  * tinydir by Cong Xu, Baudouin Feildel for directory processing



## Quick Start

  * ./build.sh
  * ./quicksand.out -h
  * ./quicksand.out malware.doc



## Documentation

@abstr_hyperlink 

## Copyright, License, and Trademark

"QuickSand.io" name and the QuickSand application logo are Copyright @abstr_number Tyler McLellan and Tylabs and their use requires written permission from the author.

Source code quicksand.c, libqs.h, libqs.c and the yara signatures except where noted are Copyright @abstr_number Tyler McLellan and Tylabs.

See included Mozilla Public License Version @abstr_number . @abstr_number for licensing information.
