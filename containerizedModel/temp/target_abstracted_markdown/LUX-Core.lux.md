@abstr_image 

"FIRST OF ITS KIND"

Luxcore is GNU AGPLv @abstr_number licensed.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink — @abstr_hyperlink - @abstr_hyperlink — @abstr_hyperlink — @abstr_hyperlink — @abstr_hyperlink — @abstr_hyperlink — @abstr_hyperlink 

# Features

  * Hybrid PoW/PoS algorithm
  * Hybrid masternode
  * Static PoS
  * Segwit
  * Smart contract
  * New PHI @abstr_number PoW/PoS hybrid algorithm
  * Luxgate
  * Parallel masternode (PMN)

    * Banking layer

    * Proof of file storage (Distributed file storage (DFS))

    * DFS Testnet

  * ~~PHI @abstr_number PoW/PoS hybrid algorithm~~




The Luxcore Project is a decentralized peer-to-peer banking financial platform, created under an open source license, featuring a built-in cryptocurrency, end-to-end encrypted messaging and decentralized marketplace. The decentralized network aims to provide anonymity and privacy for everyone through a simple user-friendly interface by taking care of all the advanced cryptography in the background.

The Luxgate allow for communications among validated blockchain with the ability to perform tasks and advanced functions. Through the use of PMN, Lux is able to interact with many other popular blockchains and create a unifying bond among those ecosystems.

Lux doesn't provide direct support for dapp database. Instead, a mechanism to interact with another Blockchain via Luxgate function where the other Blockchain can send and receive trigger function notices and international data through the Lux network via PMN and Luxgate. PMN & Luxgate can also be used to interact with the centralized services such as bankers. Those centralism services can connect to the Lux network for specific trigger of the Luxgate via PMN. It will allow for their developed autonomous system to act based on their behalf. The PMN will then be developed by the connecting Blockchain developer. Luxcore will have to supply a deployment guide to assist their development. In order to assist the Centralized services, Lux will need to provide a centralized trustworthy environments. So the user has their trusted oversight to verify that the transactions are legitimate.

In addition, without Luxgate and PMN, Bitcoin and Ethereum cannot interact with each other on the same Blockchain because the technology is incompatible. It is almost impossible before our PMN and Luxgate functions are implemented. Therefore, we have to introduce a Smartcontract & Segwit features in the next release to verify that we succeed to combine those different technologies together to create a brand new unique feature of LUX.

## Coin Specifications

| Specification | Value | |:-----------|:-----------| | Total Blocks | `@abstr_number , @abstr_number , @abstr_number` | | Block Size | `@abstr_number MB` | | Block Time | `@abstr_number s` | | PoW Block Time | `@abstr_number s` | | PoW Reward | `@abstr_number LUX` | | PoS Reward | `@abstr_number LUX` | | Stake Time | `@abstr_number hours` | | Masternode Requirement | `@abstr_number , @abstr_number LUX` | | Masternode Reward | `@abstr_number % PoW/PoS` | | Port | `@abstr_number` | | RPC Port | `@abstr_number` | | Masternode Port | `@abstr_number` | | Lux legacy address start with | `L` | | p @abstr_number sh-segwit address start with | `S` | | Bech @abstr_number address start with | `bc` |

  * NOTE: "getrawchangeaddress p @abstr_number sh-segwit" to get p @abstr_number sh-segwit address 



## Instructions

  * Lux-qt

  * Smart contract

  * Token (Thanks @snowfro)

  * DFS Testnet




## Build Lux wallet

### Building for @abstr_number -bit Windows

The next three steps are an example of how to acquire the source and build in an appropriate way.

Acquire the source and install dependencies.
    
    
    git clone https://github.com/LUX-Core/lux
    sudo chmod -R a+rw lux
    cd lux/depends
    ./install-dependencies.sh
    

Set the default mingw-w @abstr_number g++ compiler option to auto (option @abstr_number ) by default.
    
    
    sudo update-alternatives --config i @abstr_number -w @abstr_number -mingw @abstr_number -g++
    

Build in the usual way.
    
    
    ./build-wins.sh
    

### Building for @abstr_number -bit Windows

The next three steps are an example of how to acquire the source and build in an appropriate way.

Acquire the source and install dependencies.
    
    
    git clone https://github.com/LUX-Core/lux
    sudo chmod -R a+rw lux
    cd lux/depends
    ./install-dependencies.sh
    

Set the default mingw-w @abstr_number g++ compiler option to posix (option @abstr_number ).
    
    
    sudo update-alternatives --config x @abstr_number _ @abstr_number -w @abstr_number -mingw @abstr_number -g++
    

Build in the usual way.
    
    
    ./build-wins.sh x @abstr_number
    

### Build on Ubuntu

Use
    
    
    sudo add-apt-repository ppa:bitcoin/bitcoin; git clone https://github.com/LUX-Core/lux; cd lux; depends/install-dependencies.sh; ./autogen.sh; ./configure --disable-tests --with-boost-libdir=/usr/local/lib; make clean; make -j$(nproc)
    

Add bitcoin repository for Berkeley DB @abstr_number . @abstr_number 
    
    
    sudo add-apt-repository ppa:bitcoin/bitcoin
    

Clone lux repository
    
    
    git clone https://github.com/LUX-Core/lux
    

Build lux 
    
    
    cd lux
    ./depends/install-dependencies.sh
    ./autogen.sh
    ./configure --disable-tests
    make -j$(nproc)
    

### Build on OSX

The commands in this guide should be executed in a Terminal application. The built-in one is located in `/Applications/Utilities/Terminal.app`.

#### Preparation

Install the OS X command line tools:

`xcode-select --install`

When the popup appears, click `Install`.

If you're running macOS Mojave @abstr_number . @abstr_number /Xcode @abstr_number . @abstr_number or later, and want to use the depends system, you'll also need to use the following script to install the macOS system headers into /usr/include.
    
    
    open /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_ @abstr_number . @abstr_number .pkg
    

Then install @abstr_hyperlink 
    
    
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    

#### Dependencies
    
    
    brew install cmake automake berkeley-db @abstr_number  leveldb libtool boost@ @abstr_number . @abstr_number  --c++ @abstr_number  --without-single --without-static miniupnpc openssl pkg-config protobuf qt @abstr_number  libevent imagemagick --with-librsvg
    

Link boost @abstr_number . @abstr_number 
    
    
    brew link boost@ @abstr_number . @abstr_number  --force
    

#### Build Luxcore

Clone the Lux source code and cd into lux
    
    
        git clone https://github.com/LUX-Core/lux
        cd lux
        ./building/mac/requirements.sh
        ./building/mac/build.sh
    

## Setup and Build: Arch Linux

This example lists the steps necessary to setup and build a command line only, non-wallet distribution of the latest changes on Arch Linux:
    
    
    pacman -S git base-devel boost libevent python
    git clone https://github.com/LUX-Core/lux
    cd lux/
    ./autogen.sh
    ./configure --without-miniupnpc --disable-tests
    make -j$(nproc)
    

Note: Enabling wallet support requires either compiling against a Berkeley DB newer than @abstr_number . @abstr_number (package `db`) using `--with-incompatible-bdb`, or building and depending on a local version of Berkeley DB @abstr_number . @abstr_number . The readily available Arch Linux packages are currently built using `--with-incompatible-bdb` according to the As mentioned above, when maintaining portability of the wallet between the standard Bitcoin Core distributions and independently built node software is desired, Berkeley DB @abstr_number . @abstr_number must be used.

## ARM Cross-compilation

These steps can be performed on, for example, an Ubuntu VM. The depends system will also work on other Linux distributions, however the commands for installing the toolchain will be different.

Make sure you install the build requirements mentioned above. Then, install the toolchain and curl:
    
    
    sudo apt-get install g++-arm-linux-gnueabihf curl
    

To build executables for ARM:
    
    
    cd depends
    make HOST=arm-linux-gnueabihf NO_QT= @abstr_number 
    cd ..
    ./configure --prefix=$PWD/depends/arm-linux-gnueabihf --enable-glibc-back-compat --enable-reduce-exports LDFLAGS=-static-libstdc++
    make -j$(nproc)
    

For further documentation on the depends system see README.md in the depends directory.

## Building on FreeBSD

Clang is installed by default as `cc` compiler, this makes it easier to get started than on OpenBSD. Installing dependencies:
    
    
    pkg install autoconf automake libtool pkgconf
    pkg install boost-libs openssl libevent
    pkg install gmake
    

You need to use GNU make (`gmake`) instead of `make`. (`libressl` instead of `openssl` will also work)

For the wallet (optional):
    
    
    ./contrib/install_db @abstr_number .sh `pwd`
    setenv BDB_PREFIX $PWD/db @abstr_number
    

Then build using:
    
    
    ./autogen.sh
    ./configure BDB_CFLAGS="-I${BDB_PREFIX}/include" BDB_LIBS="-L${BDB_PREFIX}/lib -ldb_cxx"
    gmake
    

## Development Process

The `master` branch is regularly built and tested, but is not guaranteed to be completely stable. @abstr_hyperlink are created regularly to indicate new official, stable release versions of Lux.

The contribution workflow is described in CONTRIBUTING.md.

## Testing

Testing and code review is the bottleneck for development; we get more pull requests than we can review and test on short notice. Please be patient and help out by testing other people's pull requests, and remember this is a security-critical project where any mistake might cost people lots of money.

### Automated Testing

Developers are strongly encouraged to write unit tests for new code, and to submit new unit tests for old code. Unit tests can be compiled and run (assuming they weren't disabled in configure) with: `make check`. Further details on running and extending unit tests can be found in /src/test/README.md.

There are also regression and integration tests of the RPC interface, written in Python, that are run automatically on the build server. These tests can be run (if the test dependencies are installed) with: `qa/pull-tester/rpc-tests.py`

### Manual Quality Assurance (QA) Testing

Changes should be tested by somebody other than the developer who wrote the code. This is especially important for large or high-risk changes. It is useful to add a test plan to the pull request description if testing the changes is not straightforward.

### Issue

We try to prompt our users for the basic information We always need for new issues. Please fill out the issue template below and submit it to our discord channel @abstr_hyperlink 

ISSUE_TEMPLATE

## License

@abstr_hyperlink 
