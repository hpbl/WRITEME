# README

### What is this repository for?

  * Coarse-grained model of actomyosin networks



### System Requirements

Minimally, this system requires gcc+ @abstr_number and boost C++ library

Login to Grace 

To load gcc, run the command

@abstr_code_section 

Load boost library

@abstr_code_section 

### QUICKSTART GUIDE

  * Download AFiNeS repository @abstr_code_section 

  * Change to AFiNeS directory @abstr_code_section 

  * Create a bin directory with: @abstr_code_section 

  * Link to boost library

    * Run the command: @abstr_code_section 
    * Open 'makefile' using a text editor (e.g. emacs). Add `-I gpfs/apps/hpc/Libs/Boost/ @abstr_number . @abstr_number . @abstr_number /include` to the line that begins with `INC :=` in the makefile.
  * To create an executable, run the command: @abstr_code_section 

    * [clean] will delete the old executable. This is optional.
  * You should now have an executable file called bin/afines. NOTE: you only need to recreate this file if you edit the source code.

  * Create an output directory for your simulation (not necessarily named "out/test") as well as the "txt_stack" and "data" directories (necessarily named "txt_stack" and "data") e.g. with the commands:

@abstr_code_section 

  * Run your simulation in the specified output output directory, e.g., @abstr_code_section 

  * See below for other simulation configuration options that you can set from the command line or from a configuration file

  * Once your simulation has completed, the following files will have been generated:

    * out/test/txt_stack/actins.txt //the trajectories of every actin bead
    * out/test/txt_stack/links.txt //the trajectories of every link 
    * out/test/txt_stack/amotors.txt //the trajectories of all active motors (e.g., myosin) at every time step
    * out/test/txt_stack/pmotors.txt //the trajectories of all passive motors (e.g., crosslinkers) at every time step
    * out/test/data/thermo.txt //the energies of actin filaments
    * out/test/data/output.txt //some metadata about the simulation



All files are tab delimited 

  * txt_stack/actins.txt has the format

    * x y r idx 
      * (x, y) = bead position, 
      * r = bead radius 
      * idx = index of filament that the bead is on
  * txt_stack/links.txt has the format

    * x y dx dy idx 
      * (x, y) = end position of link closer to the barbed end of filament 
      * (x + dx, y + dy) = end position of link farther from barbed end 
      * idx = index of filament the link is on
  * txt_stack/amotors.txt and txt_stack/pmotors.txt have the format

    * x y dx dy fidx @abstr_number fidx @abstr_number lidx @abstr_number lidx @abstr_number 
      * (x, y) = position of head @abstr_number of motor
      * (x + dx, y + dy) = position of head @abstr_number of motor
      * fidx @abstr_number = index of filament that head @abstr_number is attached to (- @abstr_number if not attached)
      * fidx @abstr_number = index of filament that head @abstr_number is attached to (- @abstr_number if not attached)
      * lidx @abstr_number = index of link that head @abstr_number is attached to (- @abstr_number if fidx @abstr_number = - @abstr_number )
      * lidx @abstr_number = index of link that head @abstr_number is attached to (- @abstr_number if fidx @abstr_number = - @abstr_number )
  * data/thermo.txt has the format 

    * KE PE TE idx 
      * KE = total v^ @abstr_number of filament 
      * PE = total potential energy of filament
      * TE = KE + PE
      * idx = filament index



The time associated with the positions/energies is on it's own line before each list of positions within the file. Thus the structure of actins.txt is: @abstr_code_section And similarly for other output files

### Configurable settings

Currently the following options for simulation parameters (provided in the table) can be set upon execution, either from the command line, or within a configuration file:

For example, to run a @abstr_number second of simulation of @abstr_number rigid actin filaments, an active motor density of @abstr_number . @abstr_number and a crosslinker density of @abstr_number . @abstr_number you would enter the command: @abstr_code_section (this would write to the default output directory)

## Simulation Parameters

|variable name |type |default value |units |description | |------------- |:----: |:-------------:|:-----:|-----------------------------------| | **ENVIRONMENT** ||||| |xrange |double | @abstr_number |um |size of cell in horizontal direction| |yrange |double | @abstr_number |um |size of cell in vertical direction | |grid_factor |double | @abstr_number |um^(- @abstr_number )|number of grid boxes | |dt |double | @abstr_number . @abstr_number |s |length of individual timestep | |tinit |double | @abstr_number |s |time that recording of simulation starts| |tfinal |double | @abstr_number |s |length of simulation| |nframes |int | @abstr_number | @abstr_number |number of frames of actin/link/motor positions printed to file (equally distant in time)| |nmsgs |int | @abstr_number | @abstr_number |number of timesteps between printing simulation progress to stdout| |viscosity |double | @abstr_number . @abstr_number |mg/um _s|Dynamic viscosity| |temperature |double | @abstr_number . @abstr_number |pN_ um |Temp in energy units | |bnd_cnd |string |"PERIODIC" | |boundary conditions| |dir |string |"out/test" | |directory for output files| |myseed |int |time(NULL) | |seed of random number generator| | **ACTIN** ||||| |nmonomer |double | @abstr_number | |number of beads per filament| |npolymer |double | @abstr_number | |number of polymers in the network| |actin_length |double | @abstr_number . @abstr_number |um |Length of a single actin monomer| |actin_pos_str |string | | |Starting positions of actin polymers, commas delimit coordinates; semicolons delimit positions| |link_length |double | @abstr_number | |Length of links connecting monomers| |polymer_bending_modulus |double | @abstr_number . @abstr_number |pn _um^ @abstr_number |Bending modulus of a filament| |fracture_force |double | @abstr_number |pN |filament breaking poiafines| |bending_fracture_force |double | @abstr_number |pN |filament breaking point| |link_stretching_stiffness |double | @abstr_number |pN/um |stiffness of link| | **MOTORS** | | | || |a_motor_density |double | @abstr_number . @abstr_number |um^(- @abstr_number )|number of active motors | |a_motor_pos_str |string | | |Starting positions of motors, commas delimit coordinates; semicolons delimit positions| |a_m_kon |double | @abstr_number |s^(- @abstr_number ) |active motor on rate| |a_m_koff |double | @abstr_number |s^(- @abstr_number ) |active motor off rate| |a_m_kend |double | @abstr_number |s^(- @abstr_number ) |active motor off rate at filament end| |a_motor_stiffness |double | @abstr_number |pN/um |active motor spring stiffness| |a_motor_length |double | @abstr_number . @abstr_number |um |length of motor| |a_m_stall |double | @abstr_number |pN |stall force of motors| |a_m_break |double | @abstr_number |pN |rupture force of motors| |a_m_bind |double | @abstr_number . @abstr_number |pN_ um |binding energy| |a_motor_v |double | @abstr_number |um/s |velocity along filaments towards barbed end when attached| |motor_intersect_flag |boolean|false | |if true, then motors are placed at filament intersections| |a_linkage_prob |double | @abstr_number | |probability that filaments are linked by a motor if motor_intersect_flag = true| |dead_head_flag |boolean|false | |if true, then head [dead_head] of all motors remains stationary throughout sim| |dead_head |int | @abstr_number | |can be @abstr_number or @abstr_number ; head that remains stationary if dead_head_flag=true| | **CROSSLINKS** | | | || |p_motor_density |double | @abstr_number . @abstr_number |um^(- @abstr_number )|number of passive motors| |p_motor_pos_str |string | | |Starting positions of xlinks, commas delimit coordinates; semicolons delimit positions| |p_m_kon |double | @abstr_number |s^(- @abstr_number ) |passive motor on rate| |p_m_koff |double | @abstr_number |s^(- @abstr_number ) |passive motor off rate| |p_m_kend |double | @abstr_number |s^(- @abstr_number ) |passive motor off rate at filament end| |p_motor_stiffness |double | @abstr_number |s^(- @abstr_number ) |xlink spring stiffness (pN/um)| |p_motor_length |double | @abstr_number . @abstr_number |s^(- @abstr_number ) |length of xlink| |p_m_stall |double | @abstr_number |pN |stall force| |p_m_break |double | @abstr_number |pN |rupture force| |p_m_bind |double | @abstr_number . @abstr_number |pN*um |binding energy| |link_intersect_flag |boolean|false | |if true, then crosslinks are placed at filament intersections| |p_linkage_prob |double | @abstr_number | |probability that filaments are crosslinked if link_intersect_flag = true| |p_dead_head_flag |boolean|false | |if true, then head [p_dead_head] of all xlinks remains stationary throughout sim| |p_dead_head |int | @abstr_number | |can be @abstr_number or @abstr_number ; head that remains stationary if p_dead_head_flag=true| |static_cl_flag |boolean|false | |should be set to true if xlinks start off attached to filaments and never detach| | **SHEAR** | | | || |strain_pct |double | @abstr_number | |pre-strain (e.g., @abstr_number . @abstr_number means a strain of @abstr_number . @abstr_number *xrange)| |time_of_strain |double | @abstr_number | |time of pre-strain| |d_strain_pct |double | @abstr_number |s |differential strain (e.g., @abstr_number . @abstr_number means a strain of @abstr_number . @abstr_number *xrange)| |time_of_dstrain |double | @abstr_number |s |time when differential strain begins| |diff_strain_flag |boolean|false | |flag to use if differential strain should be linear (in one direction)| |osc_strain_flag |boolean|false | |flag to use if differential strain should be oscillatory (like Gardel, Science @abstr_number )| |n_bw_shear |int | @abstr_number ^ @abstr_number |s |number of timesteps between subsequent differential strains | |d_strain_freq |double | @abstr_number |Hz |frequency of differential oscillatory strain|

### Configuration file Example

Below is an example of a configuration file named example.cfg To run a simulation using this configuration, enter the command @abstr_code_section 

#### example.cfg

@abstr_code_section 

### Developers

Simon Freedman (University of Chicago)

Shiladitya Banerjee (University College London)

Glen Hocky (University of Chicago)

Aaron Dinner (University of Chicago)
