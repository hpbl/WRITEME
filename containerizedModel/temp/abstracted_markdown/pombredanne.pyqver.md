# pyqver - query required Python version

Greg Hewgill   
@abstr_hyperlink 

## INTRODUCTION

This script attempts to identify the minimum version of Python that is required to execute a particular source file.

When developing Python scripts for distribution, it is desirable to identify which minimum version of the Python interpreter is required. `pyqver` attempts to answer this question using a simplistic analysis of the output of the Python compiler.

When run without the `-v` argument, sources are listed along with the minimum version of Python required. When run with the `-v` option, each version is listed along with the reasons why that version is required. For example, for the `pyqver @abstr_number .py` script itself:
    
    
    pyqver @abstr_number .py
             @abstr_number . @abstr_number      platform
    

This means that `pyqver @abstr_number .py` uses the `platform` module, which is a @abstr_number . @abstr_number feature.

The `pyqver @abstr_number .py` script is specific to Python @abstr_number .x, and `pyqver @abstr_number .py` is specific to Python @abstr_number .x.

This script was inspired by the following question on Stack Overflow: @abstr_hyperlink 

## REQUIREMENTS

This script requires at least Python @abstr_number . @abstr_number .

## USAGE
    
    
    Usage: pyqver[ @abstr_number ].py [options] source ...
    
        Report minimum Python version required to run given source files.
    
        -m x.y or --min-version x.y (default M.N)
            report version triggers at or above version x.y in verbose mode
        -l or --lint
            print a lint style report showing each offending line
        -v or --verbose
            print more detailed report of version triggers for each version
    

`M.N` is the default minimum version depending on whether `pyqver @abstr_number .py` or `pyqver @abstr_number .py` is run.

## BUGS

There are currently a few features which are not detected. For example, the @abstr_number . @abstr_number syntax
    
    
    try:
        # ...
    except Exception as x:
        # ...
    

is not detected because the output of the `compiler` module is the same for both the old and the new syntax.

The `TODO` file has a few notes of things to do.
