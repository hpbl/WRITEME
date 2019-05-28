# vrptools - tools for Vision Research's Phantom cameras and their data

## What is this?

@abstr_hyperlink is a company that makes some pretty amazing high-speed video cameras, which generally have the word Phantom in their name. Their products run the gamut from doing @abstr_hyperlink at @abstr_number frames per second (fps) with the @abstr_hyperlink , all the way to an unbelievable @abstr_number , @abstr_number , @abstr_number (yes, @abstr_number . @abstr_number _million_ ) fps (though at a mere @abstr_number x @abstr_number _pixels_ , no M, no K) on the @abstr_hyperlink \-- with, of course, a whole breadth of in-between speeds and resolutions, including some pretty impressive frame-rates at @abstr_hyperlink on some models (e.g. @abstr_number , @abstr_number fps on the @abstr_hyperlink , to name but one).

This project, then, is an attempt to have a set of open-source utilities for getting data out of the proprietary (though publicly documented) "CINE" files. There are, of course, a number of software packages out there already that will read these files, including the ones from Vision Research, other tools from @abstr_hyperlink , and others, but I was unable to find an open-source/free-software one, so... here is this (though note the See Also; I've since discovered other projects doing similar things).

The cameras are fairly expensive, so I imagine their availability is limited. Still, there seem to be more and more people shooting with them (as evidenced by a @abstr_hyperlink ; I got @abstr_number results as of @abstr_number - @abstr_number - @abstr_number , and over @abstr_number million as of @abstr_number - @abstr_number - @abstr_number ). Add to this the fact that I happen to occassionaly have had access to one, and I have some files here that I want to read, so, here we are.

## Status

These tools are currently in their _infancy_.

**Please keep your expectations low for this software, for now.**

That said, `cineinfo` is starting to provide some vaguely-useful information about a CINE file, and `cine-extract` will now generate a series of PPM files (in `cine-extract.d` by default; changeable with `-d` option) from one, one per frame.

There's also a "magic" file (a la `/etc/magic`). I haven't yet taken the time to figure out how one would go about installing it on one's system, but you can run `file -M magic foo.cine` and it will give some info. Probably still needs more content there, and probably also needs to have some of it removed (or migrated to 'magic.verbose' or something), as the output is really verbose at the moment.

## Technical Docs:

This tooling is based on documentation which, at the time of this writing, was available for public download at either of:

  * @abstr_hyperlink (original version used, dated @abstr_number )
  * @abstr_hyperlink (updated version -- dated @abstr_number , found @abstr_number )



## Contributing:

If you'd like to contribute, please feel free to fork this project from it's primary repository: @abstr_hyperlink 

Then, create a @abstr_hyperlink , do your work, push it to your github fork, and send me a pull request. I'll try to be prompt at taking a look.

You're also welcome to submit "Issues" via GitHub. I'd be happy to give a shot at fixing bugs and adding features that are requested that way.

Or drop me a private message (via GitHub, or wherever) with any questions, requests, etc.

## License information:

Copyright @abstr_number , @abstr_number by David Lindes. All rights reserved.

The canonical source for this project is @abstr_hyperlink .

This program is @abstr_hyperlink : you can redistribute it and/or modify it under the terms of the @abstr_hyperlink as published by the Free Software Foundation, either version @abstr_number of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see @abstr_hyperlink .

If you have reason to need a different license, please contact me. It's possible that I could accomodate that, especially for other free-software licenses.

## Example commands:

To get a bit of information about a file (note: add a `-v` option before filename to get (much) more verbose output):
    
    
    ./cineinfo myfile.cine
    

To extract each frame as a PPM image:
    
    
     ./cine-extract -d myfile.ppms.d myfile.cine
    

## TODO

  * Create other output formats, including something suitable for streaming into @abstr_hyperlink or similar, for conversion to other formats.
  * Find a way to emit ( @abstr_hyperlink -compliant, if possible -- for the framerates we have, it may not make sense) @abstr_hyperlink information (or its functional equivalent) in some way (either in sidecar files, or directly encoded into the output stream, where applicable).
  * Allow input-file-based output-directory(/file) naming.
  * Clean up various aspects of the code, to be more modular, expandable, etc.
  * Handle a new "packed" format that exists in more recent cameras.
  * Optimization for speed of rendering.



## Imagined Possibilities

(Like TODO, but more a "this is one way things could go" list. If you want things from this list, please let me know.)

  * Add bindings for other languages (python, ruby, perl)?



## See Also

There's a related project called @abstr_hyperlink , which uses native @abstr_hyperlink code to read CINE files.
