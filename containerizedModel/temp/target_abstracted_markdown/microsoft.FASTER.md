@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

# Introduction

Managing large application state easily and with high performance is one of the hardest problems in the cloud today. FASTER is a concurrent key-value store + cache that is designed for point lookups and heavy updates. FASTER supports data larger than memory, by leveraging fast external storage. It also supports consistent recovery using a new checkpointing technique that lets applications trade-off performance for commit latency.

The following features of FASTER differentiate it from a technical perspective: @abstr_number . Latch-free cache-optimized index. @abstr_number . Unique “hybrid record log” design that combines a traditional persistent append-only log with in-place updates, to shape the memory working set and retain performance. @abstr_number . Architecture as a component that can be embedded in multi-threaded cloud apps. @abstr_number . **NEW** : Asynchronous recovery model based on group commit (called CPR).

For standard benchmarks where the working set fits in main memory, we found FASTER to achieve significantly higher throughput than current systems, and match or exceed the performance of pure in-memory data structures while offering more functionality. See @abstr_hyperlink for more details. We also have a detailed analysis of C# FASTER performance in a wiki page @abstr_hyperlink . The performance of the C# and C++ versions of FASTER are very similar.

# Getting Started

Visit our @abstr_hyperlink for technical details and papers.

:new: For FASTER usage and getting started information, head over to our @abstr_hyperlink website. A detailed guide to getting started with FASTER C# is also available in the repository at @abstr_hyperlink . FASTER C# binaries are available via @abstr_hyperlink .

:new: You can take a look at the project roadmap @abstr_hyperlink .

# Build and Test

For C#, click @abstr_hyperlink .

For C++, click @abstr_hyperlink .

# Recovery in FASTER

Both the C# and C++ version of FASTER support asynchronous checkpointing and recovery, based on a new recovery model called Concurrent Prefix Recovery (CPR for short). You can read more about CPR in our research paper @abstr_hyperlink (to appear in SIGMOD @abstr_number ). Briefly, CPR is based on (periodic) group commit. However, instead of using an expensive write-ahead log (WAL) which can kill FASTER's high performance, CPR: ( @abstr_number ) provides a semantic description of committed operations, of the form “all operations until offset Ti in session i”; and ( @abstr_number ) uses asynchronous incremental checkpointing instead of a WAL to implement group commit in a scalable bottleneck-free manner.

CPR is available in the C# and C++ versions of FASTER. More documentation on recovery in the C# version is @abstr_hyperlink . For C++, we only have examples in code right now. The sum-store, located @abstr_hyperlink , is a good example of checkpointing and recovery.

# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the @abstr_hyperlink . For more information see the @abstr_hyperlink or contact @abstr_hyperlink with any additional questions or comments.
