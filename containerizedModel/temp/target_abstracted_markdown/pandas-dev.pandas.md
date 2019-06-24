@abstr_image   


* * *

# pandas: powerful Python data analysis toolkit

Latest Release |  @abstr_hyperlink   
---|---  
|  @abstr_hyperlink  | Package Status |  @abstr_hyperlink   
License |  @abstr_hyperlink   
Build Status |  @abstr_hyperlink   
|  @abstr_hyperlink   
Coverage |  @abstr_hyperlink   
Downloads |  @abstr_hyperlink   
Gitter |  @abstr_hyperlink   
  
## What is it?

**pandas** is a Python package providing fast, flexible, and expressive data structures designed to make working with "relational" or "labeled" data both easy and intuitive. It aims to be the fundamental high-level building block for doing practical, **real world** data analysis in Python. Additionally, it has the broader goal of becoming **the most powerful and flexible open source data analysis / manipulation tool available in any language**. It is already well on its way towards this goal.

## Main Features

Here are just a few of the things that pandas does well:

  * Easy handling of @abstr_hyperlink (represented as `NaN`) in floating point as well as non-floating point data
  * Size mutability: columns can be @abstr_hyperlink from DataFrame and higher dimensional objects
  * Automatic and explicit @abstr_hyperlink : objects can be explicitly aligned to a set of labels, or the user can simply ignore the labels and let `Series`, `DataFrame`, etc. automatically align the data for you in computations
  * Powerful, flexible @abstr_hyperlink functionality to perform split-apply-combine operations on data sets, for both aggregating and transforming data
  * Make it @abstr_hyperlink ragged, differently-indexed data in other Python and NumPy data structures into DataFrame objects
  * Intelligent label-based @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink of large data sets
  * Intuitive @abstr_hyperlink and @abstr_hyperlink data sets
  * Flexible @abstr_hyperlink and @abstr_hyperlink of data sets
  * @abstr_hyperlink labeling of axes (possible to have multiple labels per tick)
  * Robust IO tools for loading data from @abstr_hyperlink (CSV and delimited), @abstr_hyperlink , @abstr_hyperlink , and saving/loading data from the ultrafast @abstr_hyperlink 
  * @abstr_hyperlink -specific functionality: date range generation and frequency conversion, moving window statistics, moving window linear regressions, date shifting and lagging, etc.



## Where to get it

The source code is currently hosted on GitHub at: https://github.com/pandas-dev/pandas

Binary installers for the latest released version are available at the @abstr_hyperlink and on conda.

@abstr_code_section 

@abstr_code_section 

## Dependencies

  * @abstr_hyperlink : @abstr_number . @abstr_number . @abstr_number or higher
  * @abstr_hyperlink : @abstr_number . @abstr_number . @abstr_number or higher
  * @abstr_hyperlink : @abstr_number . @abstr_number or higher



See the @abstr_hyperlink for recommended and optional dependencies.

## Installation from sources

To install pandas from source you need Cython in addition to the normal dependencies above. Cython can be installed from pypi:

@abstr_code_section 

In the `pandas` directory (same one where you found this file after cloning the git repo), execute:

@abstr_code_section 

or for installing in @abstr_hyperlink :

@abstr_code_section 

Alternatively, you can use `pip` if you want all the dependencies pulled in automatically (the `-e` option is for installing it in @abstr_hyperlink ):

@abstr_code_section 

See the full instructions for @abstr_hyperlink .

## License

BSD @abstr_number 

## Documentation

The official documentation is hosted on PyData.org: https://pandas.pydata.org/pandas-docs/stable

## Background

Work on `pandas` started at AQR (a quantitative hedge fund) in @abstr_number and has been under active development since then.

## Getting Help

For usage questions, the best place to go to is @abstr_hyperlink . Further, general questions and discussions can also take place on the @abstr_hyperlink .

## Discussion and Development

Most development discussion is taking place on github in this repo. Further, the @abstr_hyperlink can also be used for specialized discussions or design issues, and a @abstr_hyperlink is available for quick development related questions.

## Contributing to pandas @abstr_hyperlink 

All contributions, bug reports, bug fixes, documentation improvements, enhancements and ideas are welcome.

A detailed overview on how to contribute can be found in the **@abstr_hyperlink**. There is also an overview on GitHub.

If you are simply looking to start working with the pandas codebase, navigate to the @abstr_hyperlink and start looking through interesting issues. There are a number of issues listed under @abstr_hyperlink and @abstr_hyperlink where you could start out.

You can also triage issues which may include reproducing bug reports, or asking for vital information such as version numbers or reproduction instructions. If you would like to start triaging issues, one easy way to get started is to @abstr_hyperlink .

Or maybe through using pandas you have an idea of your own or are looking for something in the documentation and thinking ‘this can be improved’...you can do something about it!

Feel free to ask questions on the @abstr_hyperlink or on @abstr_hyperlink .
