# OR-Tools - Google Optimization Tools

@abstr_hyperlink @abstr_hyperlink   
@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink   
@abstr_hyperlink @abstr_hyperlink 

Google's software suite for combinatorial optimization.

## Table of Contents

  * About OR-Tools
  * Codemap
  * Installation
  * Experimental Build with CMake
  * Quick Start
  * Documentation
  * Contributing
  * License



## About OR-Tools

Google Optimization Tools (a.k.a., OR-Tools) is an open-source, fast and portable software suite for solving combinatorial optimization problems.

The suite contains: * A constraint programming solver; * A linear programming solver; * Wrappers around commercial and other open source solvers, including mixed integer solvers; * Bin packing and knapsack algorithms; * Algorithms for the Traveling Salesman Problem and Vehicle Routing Problem; * Graph algorithms (shortest paths, min cost flow, max flow, linear sum assignment).

We wrote OR-Tools in C++, but also provide wrappers in Python, C# and Java.

## Codemap

This software suite is composed of the following components:

  * Makefile Top-level for @abstr_hyperlink based build.
  * makefiles Subsidiary Make files.
  * CMakeLists.txt Top-level for @abstr_hyperlink based build.
  * cmake Subsidiary CMake files.
  * bazel Subsidiary Bazel files.

    * BUILD Top-level for @abstr_hyperlink based build.
  * ortools Root directory for source code.

    * base Basic utilities.
    * algorithms Basic algorithms.
    * csharp .Net wrapper.
    * java Java wrapper.
    * python Python wrapper.
    * graph Graph algorithms.
    * csharp .Net wrapper.
    * java Java wrapper.
    * python Python wrapper.
    * linear_solver Linear solver wrapper.
    * csharp .Net wrapper.
    * java Java wrapper.
    * python Python wrapper.
    * glop Google linear solver.
    * lp_data Data structures for linear models.
    * constraint_solver Constraint and Routing solver.
    * csharp .Net wrapper.
    * java Java wrapper.
    * python Python wrapper.
    * sat SAT solver.
    * csharp .Net wrapper.
    * java Java wrapper.
    * python Python wrapper.
    * bop Boolean solver based on SAT.
    * util Utilities needed by the constraint solver
    * com/google/ortools Java source files.
  * examples Root directory for all examples.

    * contrib Examples from the community.
    * cpp C++ examples.
    * dotnet .Net examples.
    * java Java examples.
    * python Python examples.
    * notebook Jupyter/IPython notebooks.
    * flatzinc FlatZinc examples.
    * data Data files for examples.
    * tests Unit tests and bug reports.
  * tools Delivery Tools (e.g. Windows GNU binaries, scripts, dockers)




## Installation

This software suite has been tested under: \- Ubuntu @abstr_number . @abstr_number and up ( @abstr_number -bit); \- Apple macOS Mojave with Xcode @abstr_number .x ( @abstr_number -bit); \- Microsoft Windows with Visual Studio @abstr_number ( @abstr_number -bit).

OR-Tools currently builds with a Makefile, but also provides Bazel and CMake support.

For installation instructions (both source and binary), please visit https://developers.google.com/optimization/introduction/installing.

## Experimental Build with CMake

We also provide experimental CMake support.  
Please check the CMake build instructions.

## Quick Start

The best way to learn how to use OR-Tools is to follow the tutorials in our developer guide:

https://developers.google.com/optimization/introduction/get_started

If you want to learn from code examples, take a look at the examples in the examples directory.

## Documentation

The complete documentation for OR-Tools is available at: https://developers.google.com/optimization/

## Contributing

The CONTRIBUTING.md file contains instructions on how to submit the Contributor License Agreement before sending any pull requests (PRs). Of course, if you're new to the project, it's usually best to discuss any proposals and reach consensus before sending your first PR.

## License

The OR-Tools software suite is licensed under the terms of the Apache License @abstr_number . @abstr_number .   
See LICENSE- @abstr_number . @abstr_number for more information.
