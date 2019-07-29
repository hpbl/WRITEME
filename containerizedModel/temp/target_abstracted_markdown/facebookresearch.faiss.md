# Faiss

Faiss is a library for efficient similarity search and clustering of dense vectors. It contains algorithms that search in sets of vectors of any size, up to ones that possibly do not fit in RAM. It also contains supporting code for evaluation and parameter tuning. Faiss is written in C++ with complete wrappers for Python/numpy. Some of the most useful algorithms are implemented on the GPU. It is developed by @abstr_hyperlink .

## NEWS

_NEW: version @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number ) fix performance regression in IndexIVF._

_NEW: version @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number ) the license was relaxed to MIT from BSD+Patents. Read LICENSE for details._

_NEW: version @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number ) GPU binary flat index and binary HNSW index_

_NEW: version @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number ) no more crashes in pure Python code_

_NEW: version @abstr_number . @abstr_number . @abstr_number ( @abstr_number - @abstr_number - @abstr_number ) support for binary indexes_

_NEW: latest commit ( @abstr_number - @abstr_number - @abstr_number ) supports on-disk storage of inverted indexes, see demos/demo_ondisk_ivf.py_

_NEW: latest commit ( @abstr_number - @abstr_number - @abstr_number ) includes an implementation of the HNSW indexing method, see benchs/bench_hnsw.py_

_NEW: there is now a Facebook public discussion group for Faiss users at https://www.facebook.com/groups/faissusers/_

_NEW: on @abstr_number - @abstr_number - @abstr_number , the license on Faiss was relaxed to BSD from CC-BY-NC. Read LICENSE for details._

## Introduction

Faiss contains several methods for similarity search. It assumes that the instances are represented as vectors and are identified by an integer, and that the vectors can be compared with L @abstr_number distances or dot products. Vectors that are similar to a query vector are those that have the lowest L @abstr_number distance or the highest dot product with the query vector. It also supports cosine similarity, since this is a dot product on normalized vectors.

Most of the methods, like those based on binary vectors and compact quantization codes, solely use a compressed representation of the vectors and do not require to keep the original vectors. This generally comes at the cost of a less precise search but these methods can scale to billions of vectors in main memory on a single server. 

The GPU implementation can accept input from either CPU or GPU memory. On a server with GPUs, the GPU indexes can be used a drop-in replacement for the CPU indexes (e.g., replace `IndexFlatL @abstr_number` with `GpuIndexFlatL @abstr_number`) and copies to/from GPU memory are handled automatically. Results will be faster however if both input and output remain resident on the GPU. Both single and multi-GPU usage is supported.

## Building

The library is mostly implemented in C++, with optional GPU support provided via CUDA, and an optional Python interface. The CPU version requires a BLAS library. It compiles with a Makefile and can be packaged in a docker image. See INSTALL.md for details.

## How Faiss works

Faiss is built around an index type that stores a set of vectors, and provides a function to search in them with L @abstr_number and/or dot product vector comparison. Some index types are simple baselines, such as exact search. Most of the available indexing structures correspond to various trade-offs with respect to

  * search time
  * search quality
  * memory used per index vector 
  * training time
  * need for external data for unsupervised training



The optional GPU implementation provides what is likely (as of March @abstr_number ) the fastest exact and approximate (compressed-domain) nearest neighbor search implementation for high-dimensional vectors, fastest Lloyd's k-means, and fastest small k-selection algorithm known. @abstr_hyperlink .

## Full documentation of Faiss

The following are entry points for documentation: 

  * the full documentation, including a @abstr_hyperlink , a @abstr_hyperlink and a @abstr_hyperlink can be found on the @abstr_hyperlink 
  * the @abstr_hyperlink gives per-class information
  * to reproduce results from our research papers, @abstr_hyperlink and @abstr_hyperlink , refer to the benchmarks README. For @abstr_hyperlink , see the link_and_code README



## Authors

The main authors of Faiss are: \- @abstr_hyperlink initiated the Faiss project and wrote its first implementation \- @abstr_hyperlink implemented most of the CPU Faiss \- @abstr_hyperlink implemented all of the GPU Faiss \- @abstr_hyperlink implemented the binary indexes

## Reference

Reference to cite when you use Faiss in a research paper:

@abstr_code_section 

## Join the Faiss community

For public discussion of Faiss or for questions, there is a Facebook public discussion group at https://www.facebook.com/groups/faissusers/

We monitor the @abstr_hyperlink of the repository. You can report bugs, ask questions, etc.

## License

Faiss is MIT-licensed.
