## Introduction

This assignment uses data from the @abstr_hyperlink , a popular repository for machine learning datasets. In particular, we will be using the "Individual household electric power consumption Data Set" which I have made available on the course web site:

  * **Dataset** : @abstr_hyperlink [ @abstr_number Mb]

  * **Description** : Measurements of electric power consumption in one household with a one-minute sampling rate over a period of almost @abstr_number years. Different electrical quantities and some sub-metering values are available.




The following descriptions of the @abstr_number variables in the dataset are taken from the @abstr_hyperlink :

  1. **Date** : Date in format dd/mm/yyyy 
  2. **Time** : time in format hh:mm:ss 
  3. **Global_active_power** : household global minute-averaged active power (in kilowatt) 
  4. **Global_reactive_power** : household global minute-averaged reactive power (in kilowatt) 
  5. **Voltage** : minute-averaged voltage (in volt) 
  6. **Global_intensity** : household global minute-averaged current intensity (in ampere) 
  7. **Sub_metering_ @abstr_number** : energy sub-metering No. @abstr_number (in watt-hour of active energy). It corresponds to the kitchen, containing mainly a dishwasher, an oven and a microwave (hot plates are not electric but gas powered). 
  8. **Sub_metering_ @abstr_number** : energy sub-metering No. @abstr_number (in watt-hour of active energy). It corresponds to the laundry room, containing a washing-machine, a tumble-drier, a refrigerator and a light. 
  9. **Sub_metering_ @abstr_number** : energy sub-metering No. @abstr_number (in watt-hour of active energy). It corresponds to an electric water-heater and an air-conditioner.



## Loading the data

When loading the dataset into R, please consider the following:

  * The dataset has @abstr_number , @abstr_number , @abstr_number rows and @abstr_number columns. First calculate a rough estimate of how much memory the dataset will require in memory before reading into R. Make sure your computer has enough memory (most modern computers should be fine).

  * We will only be using data from the dates @abstr_number - @abstr_number - @abstr_number and @abstr_number - @abstr_number - @abstr_number . One alternative is to read the data from just those dates rather than reading in the entire dataset and subsetting to those dates.

  * You may find it useful to convert the Date and Time variables to Date/Time classes in R using the `strptime()` and `as.Date()` functions.

  * Note that in this dataset missing values are coded as `?`.




## Making Plots

Our overall goal here is simply to examine how household energy usage varies over a @abstr_number -day period in February, @abstr_number . Your task is to reconstruct the following plots below, all of which were constructed using the base plotting system.

First you will need to fork and clone the following GitHub repository: @abstr_hyperlink 

For each plot you should

  * Construct the plot and save it to a PNG file with a width of @abstr_number pixels and a height of @abstr_number pixels.

  * Name each of the plot files as `plot @abstr_number .png`, `plot @abstr_number .png`, etc.

  * Create a separate R code file (`plot @abstr_number .R`, `plot @abstr_number .R`, etc.) that constructs the corresponding plot, i.e. code in `plot @abstr_number .R` constructs the `plot @abstr_number .png` plot. Your code file **should include code for reading the data** so that the plot can be fully reproduced. You should also include the code that creates the PNG file.

  * Add the PNG file and R code file to your git repository




When you are finished with the assignment, push your git repository to GitHub so that the GitHub version of your repository is up to date. There should be four PNG files and four R code files.

The four plots that you will need to construct are shown below. 

### Plot @abstr_number

@abstr_image 

### Plot @abstr_number

@abstr_image 

### Plot @abstr_number

@abstr_image 

### Plot @abstr_number

@abstr_image 
