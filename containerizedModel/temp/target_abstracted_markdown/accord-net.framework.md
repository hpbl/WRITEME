# Accord.NET Framework

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

The Accord.NET project provides machine learning, statistics, artificial intelligence, computer vision and image processing methods to .NET. It can be used on Microsoft Windows, Xamarin, Unity @abstr_number D, Windows Store applications, Linux or mobile.

After merging with the AForge.NET project, the framework now offers a unified API for learning/training machine learning models that is both easy to use _and_ extensible. It is based on the following pattern:

  * Choose a @abstr_hyperlink that provides a Learn(x, y) or Learn(x) method;
  * @abstr_hyperlink to create a @abstr_hyperlink learned from the data; 
  * Use the model's @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink or @abstr_hyperlink methods.



For more information, please see the @abstr_hyperlink , and check @abstr_hyperlink . _Please do not hesitate to edit the wiki if you would like!_

# Installing

To install the framework in your application, please use NuGet. If you are on Visual Studio, right-click on the "References" item in your solution folder, and select "Manage NuGet Packages." Search for Accord.MachineLearning ( @abstr_hyperlink ) and select "Install."

If you would like to install the framework on @abstr_hyperlink , download the "libsonly" compressed archive from the @abstr_hyperlink . Navigate to the Releases/Mono folder, and copy the .dll files to the Plugins folder in your Unity project. Finally, find and add the System.ComponentModel.DataAnnotations.dll assembly that should be available from your system to the Plugin folders as well.

## Sample applications

The framework comes with a wide range of sample applications to help get you started quickly. If you downloaded the framework sources or cloned the repository, open the _Samples.sln_ solution file in the Samples folder.

# Building

#### With Visual Studio @abstr_number

Please download and install the following dependencies:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Then navigate to the Sources directory, and open the _Accord.NET.sln_ solution file. Note: the solution includes F# unit test projects that can be disabled/unloaded from the solution in case you do not have support for F# tools in your version of Visual Studio.

#### With Visual Studio @abstr_number

Please download and install the following dependencies:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (both x @abstr_number and x @abstr_number )



Then navigate to the Sources directory, and open the _Accord.NET.sln_ solution file. Note: the solution includes F# unit test projects that can be disabled/unloaded from the solution in case you do not have support for F# tools in your version of Visual Studio.

#### With Mono in Linux

@abstr_code_section 

#### With Mono in OS X

@abstr_code_section 

# Contributing

If you would like to contribute, please do so by helping us update the @abstr_hyperlink . While you could also make a donation through PayPal @abstr_hyperlink , Flattr @abstr_hyperlink , or any of the cryptocurrencies shown below, as well as fill-in bug reports and contribute code in the form of pull requests, the most precious donation we could receive would be a bit of your time - @abstr_hyperlink :wink: 

Donate using cryptocurrencies: \- `BTC: @abstr_number FC @abstr_number gxLs @abstr_number TsvuiHPP @abstr_number tRLh @abstr_number mPboQJQghvZ @abstr_code_section bibtex @misc{souza @abstr_number accord, title={The Accord.NET Framework}, author={C{\'e}sar Souza and Andrew Kirillov and Marcos Diego Catalano and Accord.NET contributors}, year={ @abstr_number }, doi={ @abstr_number . @abstr_number /zenodo. @abstr_number }, url={http://accord-framework.net} } ` [[bibtex](https://zenodo.org/record/ @abstr_number /export/hx#.We @abstr_number _zCyXeUk)]
