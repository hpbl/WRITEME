# EECS @abstr_number Homework @abstr_number

This program is part of an assignment for the University of Kansas course EECS @abstr_number in which we develop a drug analysis program.

@abstr_hyperlink 

# Authors

Harrison Hetler, Henry Nguyen, Tony Nguyen, Lei Wang

# Requirements

This program will require an installation of Python @abstr_number . @abstr_number and Qt @abstr_number to run. The implementation is written for Python @abstr_number . @abstr_number and the GUI is implemented using the Qt @abstr_number framework. Graph plotting functionality is provided by pyqtgraph which requires the previous requirements and NumPy.

To clarify, the list of dependencies are: * Python @abstr_number . @abstr_number * Qt @abstr_number * NumPy

Most, if not all, these dependencies are usually already installed in your selected OS.

# How to use

To run the program, with a terminal navigate to the folder containing the python scripts.

Then run the command:

`python HW @abstr_number .py`

This command will then launch the GUI to the program and will prompt you with various functions.

# Using unit tests

There are various unit tests included in this package to verify if certain modules are operating properly. Simply run the "test" prefixed python script associated with the module you would like to test.

For example to test the DrugDatabase module, run:

`python test_drug_database.py`

# MVC Architecture

This program was created with the MVC architecture in mind. The three main classes of this program are: * DrugDatabase, which represents the Model class * DrugGraph, which represents the View class * DrugAnalysis, which represents the Controller class

Several classes may contain their own subclasses as part of their implementation. NOTE: The DrugGraph class is contained in the executable HW @abstr_number .py script.
