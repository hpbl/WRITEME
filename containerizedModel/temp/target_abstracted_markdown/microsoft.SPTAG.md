# SPTAG: A library for fast approximate nearest neighbor search

@abstr_hyperlink @abstr_hyperlink 

## **SPTAG**

SPTAG (Space Partition Tree And Graph) is a library for large scale vector approximate nearest neighbor search scenario released by @abstr_hyperlink and @abstr_hyperlink . 

@abstr_image 

## **Introduction**

This library assumes that the samples are represented as vectors and that the vectors can be compared by L @abstr_number distances or cosine distances. Vectors returned for a query vector are the vectors that have smallest L @abstr_number distance or cosine distances with the query vector. 

SPTAG provides two methods: kd-tree and relative neighborhood graph (SPTAG-KDT) and balanced k-means tree and relative neighborhood graph (SPTAG-BKT). SPTAG-KDT is advantageous in index building cost, and SPTAG-BKT is advantageous in search accuracy in very high-dimensional data.

## **How it works**

SPTAG is inspired by the NGS approach [WangL @abstr_number ]. It contains two basic modules: index builder and searcher. The RNG is built on the k-nearest neighborhood graph [WangWZTG @abstr_number , WangWJLZZH @abstr_number ] for boosting the connectivity. Balanced k-means trees are used to replace kd-trees to avoid the inaccurate distance bound estimation in kd-trees for very high-dimensional vectors. The search begins with the search in the space partition trees for finding several seeds to start the search in the RNG. The searches in the trees and the graph are iteratively conducted. 

## **Highlights** * Fresh update: Support online vector deletion and insertion * Distributed serving: Search over multiple machines

## **Build**

### **Requirements**

  * swig >= @abstr_number . @abstr_number 
  * cmake >= @abstr_number . @abstr_number . @abstr_number 
  * boost >= @abstr_number . @abstr_number . @abstr_number 



### **Install**

> For Linux: @abstr_code_section It will generate a Release folder in the code directory which contains all the build targets.
> 
> For Windows: @abstr_code_section It will generate a SPTAGLib.sln in the build directory. Compiling the ALL_BUILD project in the Visual Studio (at least @abstr_number ) will generate a Release directory which contains all the build targets.
> 
> Using Docker: @abstr_code_section Will build a docker container with binaries in `/app/Release/`.

### **Verify**

Run the test (or Test.exe) in the Release folder to verify all the tests have passed.

### **Usage**

The detailed usage can be found in Get started. The detailed parameters tunning can be found in Parameters.

## **References**

Please cite SPTAG in your publications if it helps your research: @abstr_code_section 

## **Contribute**

This project welcomes contributions and suggestions from all the users.

We use @abstr_hyperlink for tracking suggestions and bugs.

## **License**

The entire codebase is under @abstr_hyperlink 
