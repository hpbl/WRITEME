# CRYENGINE

This repository houses the source code for CRYENGINE.

Instructions on getting started with git can be found @abstr_hyperlink , along with details on working with launcher projects and git source code.

## Building

In order to compile, you will need to download some third party SDKs. They can be downloaded by running the _download_sdks.py_ script. Or on Windows, the _download_sdks.exe_ can be used alternatively.

CMake must be used to compile the engine, see @abstr_hyperlink for more information.

In order to build Sandbox, the FBX SDK ( @abstr_number . @abstr_number ) must be downloaded from @abstr_hyperlink .

## Branches

Development takes place primarily in the "main" branch. The stabilisation branch is used for fixing bugs in the run-up to release, and the release branch provides stable snapshots of the engine.

To prepare for a major (feature) release, we integrate "main" into "stabilisation", and then continue fixing bugs in "stabilisation". To prepare for a minor (stability) release, individual changes from 'main are integrated directly into "stabilisation". In each case, when the release is deemed ready, "stabilisation" is integrated to "release".

Pull requests can only be accepted into the "pullrequests" branch. Thanks in advance!

## License

The source code in this repository is governed by the CRYENGINE license agreement, which is contained in LICENSE.md, adjacent to this file. See also the FAQ here

@abstr_code_section 
