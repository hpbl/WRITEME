# ethminer

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

> Ethereum miner with OpenCL, CUDA and stratum support

**Ethminer** is an Ethash GPU mining worker: with ethminer you can mine every coin which relies on an Ethash Proof of Work thus including Ethereum, Ethereum Classic, Metaverse, Musicoin, Ellaism, Pirl, Expanse and others. This is the actively maintained version of ethminer. It originates from [cpp-ethereum] project (where GPU mining has been discontinued) and builds on the improvements made in [Genoil's fork]. See FAQ for more details.

## Features

  * OpenCL mining
  * Nvidia CUDA mining
  * realistic benchmarking against arbitrary epoch/DAG/blocknumber
  * on-GPU DAG generation (no more DAG files on disk)
  * stratum mining without proxy
  * OpenCL devices picking
  * farm failover (getwork + stratum)



## Table of Contents

  * Install
  * Usage 
    * Examples connecting to pools
  * Build 
    * Continuous Integration and development builds
    * Building from source
  * Maintainers & Authors
  * Contribute
  * F.A.Q.



## Install

@abstr_hyperlink 

Standalone **executables** for _Linux_ , _macOS_ and _Windows_ are provided in the [Releases] section. Download an archive for your operating system and unpack the content to a place accessible from command line. The ethminer is ready to go.

| Builds | Release | Date | | ------ | ------- | ---- | | Last | @abstr_hyperlink | @abstr_hyperlink | | Stable | @abstr_hyperlink | @abstr_hyperlink |

## Usage

The **ethminer** is a command line program. This means you launch it either from a Windows command prompt or Linux console, or create shortcuts to predefined command lines using a Linux Bash script or Windows batch/cmd file. For a full list of available command, please run:

@abstr_code_section 

### Examples connecting to pools

Check our samples to see how to connect to different pools.

## Build

### Continuous Integration and development builds

| CI | OS | Status | Development builds | | ------------- | ------------- | ----- | ----------------- | | [Travis CI] | Linux, macOS | @abstr_hyperlink | ✗ No build artifacts, [Amazon S @abstr_number is needed] for this | | [AppVeyor] | Windows | @abstr_hyperlink | ✓ Build artifacts available for all PRs and branches |

The AppVeyor system automatically builds a Windows .exe for every commit. The latest version is always available @abstr_hyperlink or you can @abstr_hyperlink to access previous builds.

To download the .exe on a build under `Job name` select the CUDA version you use, choose `Artifacts` then download the zip file.

### Building from source

See docs/BUILD.md for build/compilation details.

## Maintainers & Authors

@abstr_hyperlink 

The list of current and past maintainers, authors and contributors to the ethminer project. Ordered alphabetically. [Contributors statistics since @abstr_number - @abstr_number - @abstr_number ].

| Name | Contact | | | --------------------- | ------------------------------------------------------------ | --- | | Andrea Lanfranchi | @abstr_hyperlink | ETH: @abstr_number xa @abstr_number e @abstr_number bde @abstr_number b @abstr_number cf @abstr_number e @abstr_number d @abstr_number fb @abstr_number f @abstr_number ff @abstr_number | | EoD | @abstr_hyperlink | | | Genoil | @abstr_hyperlink | | | goobur | @abstr_hyperlink | | | Marius van der Wijden | @abstr_hyperlink | ETH: @abstr_number x @abstr_number d @abstr_number b @abstr_number c @abstr_number dc @abstr_number e @abstr_number f @abstr_number edf @abstr_number c @abstr_number d @abstr_number | | Paweł Bylica | @abstr_hyperlink | ETH: @abstr_number x @abstr_number FB @abstr_number C @abstr_number b @abstr_number a @abstr_number b @abstr_number d @abstr_number DBb @abstr_number fd @abstr_number D @abstr_number CF @abstr_number a @abstr_number | | Philipp Andreas | @abstr_hyperlink | | | Stefan Oberhumer | @abstr_hyperlink | |

## Contribute

@abstr_hyperlink 

To meet the community, ask general questions and chat about ethminer join @abstr_hyperlink .

All bug reports, pull requests and code reviews are very much welcome.

## License

Licensed under the GNU General Public License, Version @abstr_number .

## F.A.Q

### Why is my hashrate with Nvidia cards on Windows @abstr_number so low?

The new WDDM @abstr_number .x driver on Windows @abstr_number uses a different way of addressing the GPU. This is good for a lot of things, but not for ETH mining.

  * For Kepler GPUs: I actually don't know. Please let me know what works best for good old Kepler.
  * For Maxwell @abstr_number GPUs: Unfortunately the issue is a bit more serious on the GTX @abstr_number Ti, already causing suboptimal performance on Win @abstr_number and Linux. Apparently about @abstr_number MH/s can still be reached on Linux, which, depending on ETH price, could still be profitable, considering the relatively low power draw.
  * For Maxwell @abstr_number GPUs: There is a way of mining ETH at Win @abstr_number / @abstr_number /Linux speeds on Win @abstr_number , by downgrading the GPU driver to a Win @abstr_number one ( @abstr_number . @abstr_number recommended) and using a build that was created using CUDA @abstr_number . @abstr_number .
  * For Pascal GPUs: You have to use the latest WDDM @abstr_number . @abstr_number compatible drivers in combination with Windows @abstr_number Anniversary edition in order to get the full potential of your Pascal GPU.



### Why is a GTX @abstr_number slower than a GTX @abstr_number ?

Because of the GDDR @abstr_number X memory, which can't be fully utilized for ETH mining (yet).

### Are AMD cards also affected by slowdowns with increasing DAG size?

Only GCN @abstr_number . @abstr_number GPUs ( @abstr_number x @abstr_number , @abstr_number x @abstr_number , @abstr_number , @abstr_number ), but in a different way. You'll see that on each new epoch ( @abstr_number K blocks), the hashrate will go down a little bit.

### Can I still mine ETH with my @abstr_number GB GPU?

Not really, your VRAM must be above the DAG size (Currently about @abstr_number . @abstr_number GB.) to get best performance. Without it severe hash loss will occur.

### What are the optimal launch parameters?

The default parameters are fine in most scenario's (CUDA). For OpenCL it varies a bit more. Just play around with the numbers and use powers of @abstr_number . GPU's like powers of @abstr_number .

### What does the `--cuda-parallel-hash` flag do?

@abstr_hyperlink made improvements to the CUDA kernel hashing process and added this flag to allow changing the number of tasks it runs in parallel. These improvements were optimised for GTX @abstr_number GPUs which saw a large increase in hashrate, GTX @abstr_number and GTX @abstr_number /Ti GPUs saw some, but less, improvement. The default value is @abstr_number (which does not need to be set with the flag) and in most cases this will provide the best performance.

### What is ethminer's relationship with [Genoil's fork]?

[Genoil's fork] was the original source of this version, but as Genoil is no longer consistently maintaining that fork it became almost impossible for developers to get new code merged there. In the interests of progressing development without waiting for reviews this fork should be considered the active one and Genoil's as legacy code.

### Can I CPU Mine?

No, use geth, the go program made for ethereum by ethereum.

### CUDA GPU order changes sometimes. What can I do?

There is an environment var `CUDA_DEVICE_ORDER` which tells the Nvidia CUDA driver how to enumerates the graphic cards. The following values are valid:

  * `FASTEST_FIRST` (Default) - causes CUDA to guess which device is fastest using a simple heuristic.
  * `PCI_BUS_ID` \- orders devices by PCI bus ID in ascending order.



To prevent some unwanted changes in the order of your CUDA devices you **might set the environment variable to`PCI_BUS_ID`**. This can be done with one of the @abstr_number ways:

  * Linux:

    * Adapt the `/etc/environment` file and add a line `CUDA_DEVICE_ORDER=PCI_BUS_ID`
    * Adapt your start script launching ethminer and add a line `export CUDA_DEVICE_ORDER=PCI_BUS_ID`
  * Windows:

    * Adapt your environment using the control panel (just search `setting environment windows control panel` using your favorite search engine)
    * Adapt your start (.bat) file launching ethminer and add a line `set CUDA_DEVICE_ORDER=PCI_BUS_ID` or `setx CUDA_DEVICE_ORDER PCI_BUS_ID`. For more info about `set` see @abstr_hyperlink , for more info about `setx` see @abstr_hyperlink 



### Insufficient CUDA driver

@abstr_code_section 

You have to upgrade your Nvidia drivers. On Linux, install `nvidia- @abstr_number` package or newer.
