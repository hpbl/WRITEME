# Prophet: Automatic Forecasting Procedure

@abstr_hyperlink 

Prophet is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. It works best with time series that have strong seasonal effects and several seasons of historical data. Prophet is robust to missing data and shifts in the trend, and typically handles outliers well.

Prophet is @abstr_hyperlink released by Facebook's @abstr_hyperlink . It is available for download on @abstr_hyperlink and @abstr_hyperlink .

## Important links

  * Homepage: https://facebook.github.io/prophet/
  * HTML documentation: https://facebook.github.io/prophet/docs/quick_start.html
  * Issue tracker: https://github.com/facebook/prophet/issues
  * Source code repository: https://github.com/facebook/prophet
  * Prophet R package: https://cran.r-project.org/package=prophet
  * Prophet Python package: https://pypi.python.org/pypi/fbprophet/
  * Release blogpost: https://research.fb.com/prophet-forecasting-at-scale/
  * Prophet paper: Sean J. Taylor, Benjamin Letham ( @abstr_number ) Forecasting at scale. The American Statistician @abstr_number ( @abstr_number ): @abstr_number - @abstr_number (https://peerj.com/preprints/ @abstr_number .pdf).



## Installation in R

Prophet is a @abstr_hyperlink so you can use `install.packages`. For OSX, be sure to specify a source install:

@abstr_code_section 

After installation, you can @abstr_hyperlink 

### Windows

On Windows, R requires a compiler so you'll need to @abstr_hyperlink provided by `rstan`. The key step is installing @abstr_hyperlink before attempting to install the package.

If you have custom Stan compiler settings, install from source rather than the CRAN binary.

## Installation in Python

Prophet is on PyPI, so you can use pip to install it:

@abstr_code_section 

The major dependency that Prophet has is `pystan`. PyStan has its own @abstr_hyperlink . Install pystan with pip before using pip to install fbprophet.

After installation, you can @abstr_hyperlink 

If you upgrade the version of PyStan installed on your system, you may need to reinstall fbprophet ( @abstr_hyperlink ).

### Anaconda

Use `conda install gcc` to set up gcc. The easiest way to install Prophet is through conda-forge: `conda install -c conda-forge fbprophet`.

### Windows

On Windows, PyStan requires a compiler so you'll need to @abstr_hyperlink . The key step is installing a recent @abstr_hyperlink .

### Linux

Make sure compilers (gcc, g++, build-essential) and Python development tools (python-dev, python @abstr_number -dev) are installed. In Red Hat systems, install the packages gcc @abstr_number and gcc @abstr_number -c++. If you are using a VM, be aware that you will need at least @abstr_number GB of memory to install fbprophet, and at least @abstr_number GB of memory to use fbprophet.

## Changelog

### Version @abstr_number . @abstr_number ( @abstr_number . @abstr_number . @abstr_number )

  * Conditional seasonalities
  * Improved cross validation estimates
  * Plotly plot in Python
  * Bugfixes



### Version @abstr_number . @abstr_number ( @abstr_number . @abstr_number . @abstr_number )

  * Added holidays functionality
  * Bugfixes



### Version @abstr_number . @abstr_number ( @abstr_number . @abstr_number . @abstr_number )

  * Multiplicative seasonality
  * Cross validation error metrics and visualizations
  * Parameter to set range of potential changepoints
  * Unified Stan model for both trend types
  * Improved future trend uncertainty for sub-daily data
  * Bugfixes



### Version @abstr_number . @abstr_number . @abstr_number ( @abstr_number . @abstr_number . @abstr_number )

  * Bugfixes



### Version @abstr_number . @abstr_number ( @abstr_number . @abstr_number . @abstr_number )

  * Forecasting with sub-daily data
  * Daily seasonality, and custom seasonalities
  * Extra regressors
  * Access to posterior predictive samples
  * Cross-validation function
  * Saturating minimums
  * Bugfixes



### Version @abstr_number . @abstr_number . @abstr_number ( @abstr_number . @abstr_number . @abstr_number )

  * Bugfixes
  * New options for detecting yearly and weekly seasonality (now the default)



### Version @abstr_number . @abstr_number ( @abstr_number . @abstr_number . @abstr_number )

  * Initial release



## License

Prophet is licensed under the MIT license.
