#  @abstr_image NuPIC

## Numenta Platform for Intelligent Computing

The Numenta Platform for Intelligent Computing ( **NuPIC** ) is a machine intelligence platform that implements the @abstr_hyperlink . HTM is a detailed computational theory of the neocortex. At the core of HTM are time-based continuous learning algorithms that store and recall spatial and temporal patterns. NuPIC is suited to a variety of problems, particularly anomaly detection and prediction of streaming data sources. For more information, see @abstr_hyperlink or the @abstr_hyperlink .

For usage guides, quick starts, and API documentation, see @abstr_hyperlink .

## This project is in Maintenance Mode

We plan to do minor releases only, and limit changes in NuPIC and NuPIC Core to:

  * Fixing critical bugs.
  * Features needed to support ongoing research.



## Installing NuPIC

NuPIC binaries are available for:

  * Linux x @abstr_number @abstr_number bit
  * OS X @abstr_number . @abstr_number 
  * OS X @abstr_number . @abstr_number 
  * Windows @abstr_number bit



### Dependencies

The following dependencies are required to install NuPIC on all operating systems.

  * @abstr_hyperlink 
  * @abstr_hyperlink >= @abstr_number . @abstr_number . @abstr_number 
  * @abstr_hyperlink >= @abstr_number . @abstr_number . @abstr_number 
  * @abstr_hyperlink >= @abstr_number . @abstr_number . @abstr_number 
  * @abstr_hyperlink 
  * C++ @abstr_number compiler like @abstr_hyperlink ( @abstr_number . @abstr_number +) or @abstr_hyperlink 



Additional OS X requirements:

  * @abstr_hyperlink 



### Install

Run the following to install NuPIC:
    
    
    pip install nupic
    

### Test
    
    
    # From the root of the repo:
    py.test tests/unit
    

### _Having problems?_

  * You may need to use the `--user` flag for the commands above to install in a non-system location (depends on your environment). Alternatively, you can execute the `pip` commands with `sudo` (not recommended).
  * You may need to add the `--use-wheel` option if you have an older pip version (wheels are now the default binary package format for pip).



For any other installation issues, please see our @abstr_hyperlink (post questions there). You can report bugs at https://github.com/numenta/nupic/issues.

Live Community Chat: @abstr_hyperlink 

### Installing NuPIC From Source

To install from local source code, run from the repository root:
    
    
    pip install .
    

Use the optional `-e` argument for a developer install.

If you want to build the dependent `nupic.bindings` from source, you should build and install from @abstr_hyperlink prior to installing nupic (since a PyPI release will be installed if `nupic.bindings` isn't yet installed).

  * Build: @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 
  * To cite this codebase: @abstr_hyperlink 


