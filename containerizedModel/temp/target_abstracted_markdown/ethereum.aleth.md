# Aleth – Ethereum C++ client, tools and libraries

> The collection of C++ libraries and tools for Ethereum, formerly known as _cpp-ethereum_ project. This includes the full Ethereum client **aleth**.

## Contact

@abstr_hyperlink @abstr_hyperlink 

  * Chat in @abstr_hyperlink .
  * Report bugs, issues or feature requests using @abstr_hyperlink .



## Usage

The Ethereum Documentation site hosts the **@abstr_hyperlink** , which has a Quick Start section.

Operating system | Status \---------------- | ---------- Ubuntu and macOS | @abstr_hyperlink Windows | @abstr_hyperlink 

## Install

### Download release binaries

https://github.com/ethereum/aleth/releases

### Using docker images

Aleth: @abstr_code_section 

Testeth: @abstr_code_section 

### Building from source

#### Get the source code

Git and GitHub are used to maintain the source code. Clone the repository by:

@abstr_code_section 

The `--recursive` option is important. It orders git to clone additional submodules to build the project. If you missed `--recursive` option, you are able to correct your mistake with command `git submodule update --init`.

#### Install CMake

CMake is used to control the build configuration of the project. Latest version of CMake is required (at the time of writing @abstr_number . @abstr_number . @abstr_number is the minimum). We strongly recommend you to install CMake by downloading and unpacking the binary distribution of the latest version available on the @abstr_hyperlink .

The CMake package available in your operating system can also be installed and used if it meets the minimum version requirement.

> **Alternative method**
> 
> The repository contains the scripts/install_cmake.sh script that downloads a fixed version of CMake and unpacks it to the given directory prefix. Example usage: `scripts/install_cmake.sh --prefix /usr/local`.

#### Build

Configure the project build with the following command to create the `build` directory with the configuration.

@abstr_code_section 

On **Windows** Visual Studio @abstr_number is required. You should generate Visual Studio solution file (.sln) for @abstr_number -bit architecture by adding `-G "Visual Studio @abstr_number @abstr_number Win @abstr_number "` argument to the CMake configure command. After configuration is completed, the `aleth.sln` can be found in the `build` directory.

@abstr_code_section 

#### Common Issues Building on Windows

##### LINK : fatal error LNK @abstr_number : cannot run 'rc.exe'

Rc.exe is the @abstr_hyperlink . It's distributed with the @abstr_hyperlink and is required for generating the Visual Studio solution file. It can be found in the following directory: ```%ProgramFiles(x @abstr_number )%\Windows Kits\\bin\\\ @abstr_code_section NAME: aleth @abstr_number . @abstr_number . @abstr_number USAGE: aleth [options]

WALLET USAGE: account list List all keys available in wallet account new Create a new key and add it to wallet account update [| , ... ] Decrypt and re-encrypt keys account import [||] Import keys from given source and place in wallet wallet import  Import a presale wallet

CLIENT MODE (default): \--mainnet Use the main network protocol \--ropsten Use the Ropsten testnet \--private  Use a private chain \--test Testing mode; disable PoW and provide test rpc interface \--config  Configure specialised blockchain using given JSON information

\--ipc Enable IPC server (default: on) \--ipcpath  Set .ipc socket path (default: data directory) \--no-ipc Disable IPC server \--admin  Specify admin session key for JSON-RPC (default: auto-generated and printed at start-up) -K [ --kill ] Kill the blockchain first -R [ --rebuild ] Rebuild the blockchain from the existing database \--rescue Attempt to rescue a corrupt database

\--import-presale  Import a pre-sale key; you'll need to specify the password to this key -s [ --import-secret ]  Import a secret key into the key store -S [ --import-session-secret ]  Import a secret session into the key store \--master  Give the master password for the key store; use --master "" to show a prompt \--password  Give a password for a private key

CLIENT TRANSACTING: \--ask  Set the minimum ask gas price under which no transaction will be mined (default: @abstr_number ) \--bid  Set the bid gas price to pay for transactions (default: @abstr_number ) \--unsafe-transactions Allow all transactions to proceed without verification; EXTREMELY UNSAFE

CLIENT NETWORKING: -b [ --bootstrap ] Connect to the default Ethereum peer servers (default unless --no-discovery used) \--no-bootstrap Do not connect to the default Ethereum peer servers (default only when --no-discovery is used) -x [ --peers ]  Attempt to connect to a given number of peers (default: @abstr_number ) \--peer-stretch  Give the accepted connection multiplier (default: @abstr_number ) \--public-ip  Force advertised public IP to the given IP (default: auto) \--listen-ip (:) Listen on the given IP for incoming connections (default: @abstr_number . @abstr_number . @abstr_number . @abstr_number ) \--listen  Listen on the given port for incoming connections (default: @abstr_number ) -r [ --remote ] (:) Connect to the given remote host (default: none) \--port  Connect to the given remote port (default: @abstr_number ) \--network-id  Only connect to other hosts with this network id \--allow-local-discovery Include local addresses in the discovery process. Used for testing purposes. \--peerset  Comma delimited list of peers; element format: type:enode://publickey@ipAddress[:port[?discport=port]] Types: default Attempt connection when no other peers are available and pinning is disabled required Keep connected at all times
    
    
                                          Ports:
                                          The first port argument is the tcp port used for direct communication among peers. If the second port
                                          argument isn't supplied, the first port argument will also be the udp port used for node discovery.
                                          If neither the first nor second port arguments are supplied, a default port of  @abstr_number  will be used for
                                          both peer communication and node discovery.
    

\--no-discovery Disable node discovery; implies --no-bootstrap \--pin Only accept or connect to trusted peers

CLIENT MINING: -a [ --address ]  Set the author (mining payout) address (default: auto) -m [ --mining ]  Enable mining; optionally for a specified number of blocks (default: off) \--extra-data arg Set extra data for the sealed blocks

BENCHMARKING MODE: -M [ --benchmark ] Benchmark for mining and exit \--benchmark-warmup  Set the duration of warmup for the benchmark tests (default: @abstr_number ) \--benchmark-trial  Set the duration for each trial for the benchmark tests (default: @abstr_number ) \--benchmark-trials  Set the number of trials for the benchmark tests (default: @abstr_number )

MINING CONFIGURATION: -C [ --cpu ] When mining, use the CPU -t [ --mining-threads ]  Limit number of CPU/GPU miners to n (default: use everything available on selected platform) \--current-block  Let the miner know the current block number at configuration time. Will help determine DAG size and required GPU memory \--disable-submit-hashrate When mining, don't submit hashrate to node

IMPORT/EXPORT MODES: -I [ --import ]  Import blocks from file -E [ --export ]  Export blocks to file \--from  Export only from block n; n may be a decimal, a ' @abstr_number x' prefixed hash, or 'latest' \--to  Export only to block n (inclusive); n may be a decimal, a ' @abstr_number x' prefixed hash, or 'latest' \--only  Equivalent to --export-from n --export-to n \--format  Set export format \--dont-check Prevent checking some block aspects. Faster importing, but to apply only when the data is known to be valid \--download-snapshot  Download Parity Warp Sync snapshot data to the specified path \--import-snapshot  Import blockchain and state data from the Parity Warp Sync snapshot

DATABASE OPTIONS: \--db  (=leveldb) Select database implementation. Available options are: leveldb, rocksdb, memorydb. \--db-path  (=$HOME/.ethereum) Database path (for non-memory database options)

VM OPTIONS: \--vm | (=legacy) Select VM implementation. Available options are: interpreter, legacy. \--evmc = EVMC option

LOGGING OPTIONS: -v [ --log-verbosity ] < @abstr_number - @abstr_number > Set the log verbosity from @abstr_number to @abstr_number (default: @abstr_number ). \--log-channels  Space-separated list of the log channels to show (default: show all channels). \--log-exclude-channels  Space-separated list of the log channels to hide.

GENERAL OPTIONS: -d [ --data-dir ]  Load configuration files and keystore from path (default: /home/mwo @abstr_number /.ethereum) -V [ --version ] Show the version and exit -h [ --help ] Show this help message and exit ```

## Mining

This project is **not suitable for Ethereum mining** because the support for GPU mining has been dropped some time ago including the ethminer tool. Use the ethminer tool from https://github.com/ethereum-mining/ethminer.

## Testing

Details on how to run and debug the tests can be found here

## Documentation

  * Internal documentation for developers.
  * @abstr_hyperlink .



## License

All contributions are made under the @abstr_hyperlink . See LICENSE.
