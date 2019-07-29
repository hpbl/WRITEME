# The XRP Ledger

The XRP Ledger is a decentralized cryptographic ledger powered by a network of peer-to-peer servers. The XRP Ledger uses a novel Byzantine Fault Tolerant consensus algorithm to settle and record transactions in a secure distributed database without a central operator.

## XRP

XRP is a public, counterparty-less asset native to the XRP Ledger, and is designed to bridge the many different currencies in use worldwide. XRP is traded on the open-market and is available for anyone to access. The XRP Ledger was created in @abstr_number with a finite supply of @abstr_number billion units of XRP. Its creators gifted @abstr_number billion XRP to a company, now called @abstr_hyperlink , to develop the XRP Ledger and its ecosystem. Ripple uses XRP the help build the Internet of Value, ushering in a world in which money moves as fast and efficiently as information does today.

## rippled

The server software that powers the XRP Ledger is called `rippled` and is available in this repository under the permissive ISC open-source license. The `rippled` server is written primarily in C++ and runs on a variety of platforms.

### Build from Source

  * Linux
  * Mac
  * Windows



## Key Features of the XRP Ledger

  * **@abstr_hyperlink :** No single party decides which transactions succeed or fail, and no one can "roll back" a transaction after it completes. As long as those who choose to participate in the network keep it healthy, they can settle transactions in seconds.
  * **@abstr_hyperlink :** The XRP Ledger's consensus algorithm settles transactions in @abstr_number to @abstr_number seconds, processing at a throughput of up to @abstr_number transactions per second. These properties put XRP at least an order of magnitude ahead of other top digital assets.
  * **@abstr_hyperlink :** When the XRP Ledger began, @abstr_number billion XRP were created, and no more XRP will ever be created. (Each XRP is subdivisible down to @abstr_number decimal places, for a grand total of @abstr_number quintillion _drops_ of XRP.) The available supply of XRP decreases slowly over time as small amounts are destroyed to pay transaction costs.
  * **@abstr_hyperlink :** A team of full-time, world-class developers at Ripple maintain and continually improve the XRP Ledger's underlying software with contributions from the open-source community. Ripple acts as a steward for the technology and an advocate for its interests, and builds constructive relationships with governments and financial institutions worldwide.
  * **@abstr_hyperlink :** The XRP Ledger relies on industry standard digital signature systems like ECDSA (the same scheme used by Bitcoin) but also supports modern, efficient algorithms like Ed @abstr_number . The extensible nature of the XRP Ledger's software makes it possible to add and disable algorithms as the state of the art in cryptography advances.
  * **@abstr_hyperlink :** Features like Escrow, Checks, and Payment Channels support cutting-edge financial applications including the @abstr_hyperlink . This toolbox of advanced features comes with safety features like a process for amending the network and separate checks against invariant constraints.
  * **@abstr_hyperlink :** In addition to all the features that make XRP useful on its own, the XRP Ledger also has a fully-functional accounting system for tracking and trading obligations denominated in any way users want, and an exchange built into the protocol. The XRP Ledger can settle long, cross-currency payment paths and exchanges of multiple currencies in atomic transactions, bridging gaps of trust with XRP.



## Source Code

@abstr_hyperlink @abstr_hyperlink 

### Repository Contents

| Folder | Contents | |:-----------|:-------------------------------------------------| | `./bin` | Scripts and data files for Ripple integrators. | | `./Builds` | Platform-specific guides for building `rippled`. | | `./docs` | Source documentation files and doxygen config. | | `./cfg` | Example configuration files. | | `./src` | Source code. |

Some of the directories under `src` are external repositories included using git-subtree. See those directories' README files for more details.

## See Also

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



To learn about how Ripple is transforming global payments, visit @abstr_hyperlink .
