# Math.NET Numerics

Math.NET Numerics is an opensource **numerical library for .Net, Silverlight and Mono**.

Math.NET Numerics is the numerical foundation of the Math.NET initiative, aiming to provide methods and algorithms for numerical computations in science, engineering and every day use. Covered topics include special functions, linear algebra, probability models, random numbers, statistics, interpolation, integration, regression, curve fitting, integral transforms (FFT) and more.

In addition to the core .NET package (which is written entirely in C#), Numerics specifically supports F# with idiomatic extension modules and maintains mathematical data structures like BigRational that originated in the F# PowerPack. If a performance boost is needed, the managed-code provider backing its linear algebra routines and decompositions can be exchanged with wrappers for optimized native implementations such as Intel MKL.

Math.NET Numerics is covered under the terms of the MIT/X @abstr_number license. You may therefore link to it and use it in both opensource and proprietary software projects. We accept contributions!

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink | @abstr_hyperlink 
  * @abstr_hyperlink | @abstr_hyperlink 
  * @abstr_hyperlink | @abstr_hyperlink 
  * @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 
  * @abstr_hyperlink | @abstr_hyperlink 



### Current Version

@abstr_image Math.NET Numerics   
@abstr_image MKL Native Provider   
@abstr_image OpenBLAS Native Provider   
@abstr_image Data Extensions

## Installation Instructions

The recommended way to get Math.NET Numerics is to use NuGet. The following packages are provided and maintained in the public @abstr_hyperlink .

Core Package:

  * **MathNet.Numerics**
  * **MathNet.Numerics.FSharp** \- optional extensions for a better F# experience. BigRational.



Alternative Provider Packages (optional):

  * **MathNet.Numerics.MKL.Win** \- Native Intel MKL Linear Algebra provider (Windows).
  * _*MathNet.Numerics.MKL.Win-x @abstr_number *_ \- Native Intel MKL Linear Algebra provider (Windows/ @abstr_number -bit only).
  * _*MathNet.Numerics.MKL.Win-x @abstr_number *_ \- Native Intel MKL Linear Algebra provider (Windows/ @abstr_number -bit only).



Data/IO Packages for reading and writing data (optional):

  * **MathNet.Numerics.Data.Text** \- Text-based matrix formats like CSV and MatrixMarket.
  * **MathNet.Numerics.Data.Matlab** \- MATLAB Level- @abstr_number matrix file format.



## Platform Support and Dependencies

Supported Platforms:

  * .Net Framework @abstr_number . @abstr_number or higher and Mono (Package includes builds for @abstr_number . @abstr_number and @abstr_number . @abstr_number . @abstr_number )
  * .Net Standard @abstr_number . @abstr_number or higher (Package includes builds for @abstr_number . @abstr_number and @abstr_number . @abstr_number )



Supported Platforms for the F# extensions:

  * .Net Framework @abstr_number . @abstr_number or higher (Package includes builds for @abstr_number . @abstr_number )
  * .Net Standard @abstr_number . @abstr_number or higher (Package includes builds for @abstr_number . @abstr_number and @abstr_number . @abstr_number )



For full details, dependencies and platform discrepancies see @abstr_hyperlink .

## Building Math.NET Numerics

Windows (.Net): @abstr_hyperlink @abstr_hyperlink   
Linux (Mono): @abstr_hyperlink 

You can build Math.NET Numerics with an IDE like VisualStudio or JetBrains Rider, with MsBuild, .Net CLI tools or with FAKE (recommended).

FAKE:
    
    
    ./build.sh build (or build.cmd)
    ./build.sh test
    

.Net CLI:
    
    
    ./restore.sh (or restore.cmd)
    dotnet build MathNet.Numerics.sln
    

MsBuild/XBuild:
    
    
    ./restore.sh (or restore.cmd)
    msbuild MathNet.Numerics.sln
    

See @abstr_hyperlink for full details on how to build, generate documentation or even create a full release.
