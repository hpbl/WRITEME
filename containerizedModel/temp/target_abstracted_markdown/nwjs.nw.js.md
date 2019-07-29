## node-webkit is renamed NW.js

@abstr_hyperlink   
Official site: https://nwjs.io 

## Introduction

NW.js is an app runtime based on `Chromium` and `node.js`. You can write native apps in HTML and JavaScript with NW.js. It also lets you call Node.js modules directly from the DOM and enables a new way of writing native applications with all Web technologies.

It was created in the Intel Open Source Technology Center.

@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink 

## Features

  * Apps written in modern HTML @abstr_number , CSS @abstr_number , JS and WebGL.
  * Complete support for @abstr_hyperlink and all its @abstr_hyperlink .
  * Good performance: Node and WebKit run in the same thread: Function calls are made straightforward; objects are in the same heap and can just reference each other.
  * Easy to package and distribute apps.
  * Available on Linux, Mac OS X and Windows.



## Downloads

  * **v @abstr_number . @abstr_number . @abstr_number :** (Jul @abstr_number , @abstr_number , based off of Node.js v @abstr_number . @abstr_number . @abstr_number , Chromium @abstr_number . @abstr_number . @abstr_number . @abstr_number ) : @abstr_hyperlink   
**NOTE** You might want the **SDK build**. Please read the release notes.

    * Linux: @abstr_hyperlink / @abstr_hyperlink 
    * Windows: @abstr_hyperlink / @abstr_hyperlink 
    * Mac @abstr_number . @abstr_number +: @abstr_hyperlink 
    * Use @abstr_hyperlink for Win XP and early OSX.
  * **latest nightly build from git tip** : https://dl.nwjs.io/live-build/

  * @abstr_hyperlink ; See @abstr_hyperlink for the version info in previous releases.




### Demos and real apps

You may also be interested in @abstr_hyperlink and the @abstr_hyperlink .

## Quick Start

Create `index.html`:

@abstr_code_section 

Create `package.json`:

@abstr_code_section 

Run:   
@abstr_code_section 

Note: on Windows, you can drag the folder containing `package.json` to `nw.exe` to open it.

Note: on OSX, the executable binary is in a hidden directory within the .app file. To run node-webkit on OSX, type:   
`/path/to/nwjs.app/Contents/MacOS/nwjs .` _(suppose the current directory contains 'package.json')_

## Documents

Official documentation: http://docs.nwjs.io/ 

For more information on how to write/package/run apps, see:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



And our @abstr_hyperlink for much more.

## Community

We use the @abstr_hyperlink as our mailing list (use English only). Subscribe via @abstr_hyperlink .

_NOTE_ : Links to the old google group (e.g. `https://groups.google.com/forum/#!msg/node-webkit/doRWZ @abstr_number LgWQ/ @abstr_number fheV @abstr_number FF @abstr_number zsJ`) that are no longer working can be fixed by replacing `node-webkit` with `nwjs-general` (e.g `https://groups.google.com/forum/#!msg/nwjs-general/doRWZ @abstr_number LgWQ/ @abstr_number fheV @abstr_number FF @abstr_number zsJ`).

Issues are being tracked here on GitHub.

The source code for NW.js and the daily development spans across multiple repositories in this organization. This repository is for the purpose of issue tracking, landing page and part of the source code.

### Verifying Binaries

Starting from @abstr_number . @abstr_number . @abstr_number the stable and nightly download directories contain a SHASUMS @abstr_number .txt file that lists the SHA checksums for each file available for download, as well as the checksums for the files inside the download package.

The SHASUMS @abstr_number .txt can be downloaded using `curl`.

@abstr_code_section 

To check that a downloaded file matches the checksum, run it through `sha @abstr_number sum` with a command such as:

@abstr_code_section 

The stable releases (but not Nightlies) also have the GPG detached signature of SHASUMS @abstr_number .txt available as SHASUMS @abstr_number .txt.asc. You can use `gpg` to verify that SHASUMS @abstr_number .txt has not been tampered with.

To verify SHASUMS @abstr_number .txt has not been altered, you will first need to import the GPG key of NW.js maintainer to create releases. Use this command to import the key:

@abstr_code_section @abstr_code_section 

Next, download the SHASUMS @abstr_number .txt.asc for the release:

@abstr_code_section 

After downloading the appropriate SHASUMS @abstr_number .txt and SHASUMS @abstr_number .txt.asc files, you can then use `gpg --verify SHASUMS @abstr_number .txt.asc SHASUMS @abstr_number .txt` to verify that the file has been signed by an authorized member of the NW.js team.

Once verified, use the SHASUMS @abstr_number .txt file to get the checksum for the binary verification command above.

## License

`NW.js`'s code in this repo uses the MIT license, see our `LICENSE` file. To redistribute the binary, see @abstr_hyperlink 
