## Spatial Temporal Oceanographic Query System

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

STOQS is a geospatial database and web application designed to give oceanographers efficient integrated access to _in situ_ measurement and _ex situ_ sample data. See http://www.stoqs.org.

#### Getting started with a STOQS development system

First, install @abstr_hyperlink and and @abstr_hyperlink — there are standard installers for Mac, Windows, and Linux. (You will also need X Windows System sofware on your computer.) Then create an empty folder off your home directory such as `Vagrants/stoqsvm`, open a command prompt window, cd to that folder, and enter these commands:

@abstr_code_section 

The `vagrant up` command takes an hour or so to provision and setup a complete CentOS @abstr_number   
STOQS server that also includes MB-System, InstantReality, and all the Python data science tools bundled in packages such as Anaconda. All connections to this virtual machine are performed from the the directory you installed it in; you must cd to it (e.g. `cd ~/Vagrants/stoqsvm`) before logging in with the `vagrant ssh -- -X` command. After installation finishes log into your new virtual machine and test it:

@abstr_code_section 

In another terminal window start the development server (after a `cd ~/Vagrants/stoqsvm`):

@abstr_code_section 

Visit your server's STOQS User Interface using your host computer's browser:
    
    
    http://localhost: @abstr_number
    

More instructions are in the doc/instructions directory — see LOADING for how to load your own data and CONTRIBUTING for how to share your work. See example @abstr_hyperlink that demonstrate specific analyses and visualizations that cannot be accomplished in the STOQS User Interface. Visit the @abstr_hyperlink for updates and links to presentations. The @abstr_hyperlink list in Google Groups is also a good place to ask questions and engage in discussion with the STOQS user and developer communities.

Supported by the David and Lucile Packard Foundation, STOQS undergoes continual development to help support the mission of the Monterey Bay Aquarium Research Institue. If you have your own server you will occasionally want to get new features with:

@abstr_code_section 

If you use STOQS for your research please cite this publication:

> McCann, M.; Schramm, R.; Cline, D.; Michisaki, R.; Harvey, J.; Ryan, J., "Using STOQS (The spatial temporal oceanographic query system) to manage, visualize, and understand AUV, glider, and mooring data," in _Autonomous Underwater Vehicles (AUV), @abstr_number IEEE/OES_ , pp. @abstr_number - @abstr_number , @abstr_number - @abstr_number Oct. @abstr_number doi: @abstr_number . @abstr_number /AUV. @abstr_number . @abstr_number 
