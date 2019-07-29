# MAPS.ME

@abstr_hyperlink is an open source cross-platform offline maps application, built on top of crowd-sourced OpenStreetMap data. It was publicly released for @abstr_hyperlink and @abstr_hyperlink .

@abstr_image 

## Submodules

This repository contains submodules. Clone it with `git clone --recursive`. If you forgot, run `git submodule update --init --recursive`.

## Translations

If you want to improve app translations or add more search synonyms, please check our @abstr_hyperlink .

## Compilation

To compile the project, you would need to initialize private key files. Run `configure.sh` and press Enter to create empty files, good enough to build desktop and Android debug packages.

For detailed installation instructions and Android/iOS building process, see @abstr_hyperlink .

Nightly builds for Android are published to @abstr_hyperlink and Dropbox: @abstr_hyperlink , @abstr_hyperlink .

## Building maps

To create one or many map files, first build the project, then use python module @abstr_hyperlink .

## Map styles

MAPS.ME uses its own binary format for map styles, `drules_proto.bin`, which is compiled from @abstr_hyperlink using modified Kothic library. Feature set in MWM files depends on a compiled style, so make sure to rebuild maps after releasing a style.

For development, use MAPS.ME Designer app along with its generator tool: these allow for quick rebuilding of a style and symbols, and for producing a zoom-independent feature set in MWM files.

See @abstr_hyperlink for the format description, instructions on building a style and some links.

## Development

You would need Qt @abstr_number for development, most other libraries are included into the repository: see `@abstr_number party` directory. The team uses mostly XCode and Qt Creator, though these are not mandatory. We have an established @abstr_hyperlink and @abstr_hyperlink .

See @abstr_hyperlink for the repository initialization process, the description of all the directories of this repository and other development-related information.

All contributors must sign a @abstr_hyperlink , so both our and their rights are protected.

## Feedback

Please report bugs and suggestions to @abstr_hyperlink , or by mail to bugs@maps.me.

## Authors and License

This source code is Copyright (C) @abstr_number My.com B.V. (Mail.Ru Group), published under Apache Public License @abstr_number . @abstr_number , except third-party libraries. See @abstr_hyperlink and @abstr_hyperlink files for more information.
