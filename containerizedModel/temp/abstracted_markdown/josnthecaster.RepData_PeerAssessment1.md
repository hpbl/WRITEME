## Introduction

It is now possible to collect a large amount of data about personal movement using activity monitoring devices such as a @abstr_hyperlink , @abstr_hyperlink , or @abstr_hyperlink . These type of devices are part of the "quantified self" movement -- a group of enthusiasts who take measurements about themselves regularly to improve their health, to find patterns in their behavior, or because they are tech geeks. But these data remain under-utilized both because the raw data are hard to obtain and there is a lack of statistical methods and software for processing and interpreting the data.

This assignment makes use of data from a personal activity monitoring device. This device collects data at @abstr_number minute intervals through out the day. The data consists of two months of data from an anonymous individual collected during the months of October and November, @abstr_number and include the number of steps taken in @abstr_number minute intervals each day.

## Data

The data for this assignment can be downloaded from the course web site:

  * Dataset: @abstr_hyperlink [ @abstr_number K]



The variables included in this dataset are:

  * **steps** : Number of steps taking in a @abstr_number -minute interval (missing values are coded as `NA`)

  * **date** : The date on which the measurement was taken in YYYY-MM-DD format

  * **interval** : Identifier for the @abstr_number -minute interval in which measurement was taken




The dataset is stored in a comma-separated-value (CSV) file and there are a total of @abstr_number , @abstr_number observations in this dataset.

## Assignment

This assignment will be described in multiple parts. You will need to write a report that answers the questions detailed below. Ultimately, you will need to complete the entire assignment in a **single R markdown** document that can be processed by **knitr** and be transformed into an HTML file.

Throughout your report make sure you always include the code that you used to generate the output you present. When writing code chunks in the R markdown document, always use `echo = TRUE` so that someone else will be able to read the code. **This assignment will be evaluated via peer assessment so it is essential that your peer evaluators be able to review the code for your analysis**.

For the plotting aspects of this assignment, feel free to use any plotting system in R (i.e., base, lattice, ggplot @abstr_number )

Fork/clone the @abstr_hyperlink . You will submit this assignment by pushing your completed files into your forked repository on GitHub. The assignment submission will consist of the URL to your GitHub repository and the SHA- @abstr_number commit ID for your repository state.

NOTE: The GitHub repository also contains the dataset for the assignment so you do not have to download the data separately.

### Loading and preprocessing the data

Show any code that is needed to

@abstr_number . Load the data (i.e. `read.csv()`)

@abstr_number . Process/transform the data (if necessary) into a format suitable for your analysis

### What is mean total number of steps taken per day?

For this part of the assignment, you can ignore the missing values in the dataset.

@abstr_number . Make a histogram of the total number of steps taken each day

@abstr_number . Calculate and report the **mean** and **median** total number of steps taken per day

### What is the average daily activity pattern?

@abstr_number . Make a time series plot (i.e. `type = "l"`) of the @abstr_number -minute interval (x-axis) and the average number of steps taken, averaged across all days (y-axis)

@abstr_number . Which @abstr_number -minute interval, on average across all the days in the dataset, contains the maximum number of steps?

### Imputing missing values

Note that there are a number of days/intervals where there are missing values (coded as `NA`). The presence of missing days may introduce bias into some calculations or summaries of the data.

@abstr_number . Calculate and report the total number of missing values in the dataset (i.e. the total number of rows with `NA`s)

@abstr_number . Devise a strategy for filling in all of the missing values in the dataset. The strategy does not need to be sophisticated. For example, you could use the mean/median for that day, or the mean for that @abstr_number -minute interval, etc.

@abstr_number . Create a new dataset that is equal to the original dataset but with the missing data filled in.

@abstr_number . Make a histogram of the total number of steps taken each day and Calculate and report the **mean** and **median** total number of steps taken per day. Do these values differ from the estimates from the first part of the assignment? What is the impact of imputing missing data on the estimates of the total daily number of steps?

### Are there differences in activity patterns between weekdays and weekends?

For this part the `weekdays()` function may be of some help here. Use the dataset with the filled-in missing values for this part.

@abstr_number . Create a new factor variable in the dataset with two levels -- "weekday" and "weekend" indicating whether a given date is a weekday or weekend day.

@abstr_number . Make a panel plot containing a time series plot (i.e. `type = "l"`) of the @abstr_number -minute interval (x-axis) and the average number of steps taken, averaged across all weekday days or weekend days (y-axis). The plot should look something like the following, which was created using **simulated data** :

@abstr_image 

**Your plot will look different from the one above** because you will be using the activity monitor data. Note that the above plot was made using the lattice system but you can make the same version of the plot using any plotting system you choose.

## Submitting the Assignment

To submit the assignment:

@abstr_number . Commit your completed `PA @abstr_number _template.Rmd` file to the `master` branch of your git repository (you should already be on the `master` branch unless you created new ones)

@abstr_number . Commit your `PA @abstr_number _template.md` and `PA @abstr_number _template.html` files produced by processing your R markdown file with the `knit @abstr_number html()` function in R (from the **knitr** package)

@abstr_number . If your document has figures included (it should) then they should have been placed in the `figure/` directory by default (unless you overrode the default). Add and commit the `figure/` directory to your git repository.

@abstr_number . Push your `master` branch to GitHub.

@abstr_number . Submit the URL to your GitHub repository for this assignment on the course web site.

In addition to submitting the URL for your GitHub repository, you will need to submit the @abstr_number character SHA- @abstr_number hash (as string of numbers from @abstr_number - @abstr_number and letters from a-f) that identifies the repository commit that contains the version of the files you want to submit. You can do this in GitHub by doing the following:

@abstr_number . Go into your GitHub repository web page for this assignment

@abstr_number . Click on the "?? commits" link where ?? is the number of commits you have in the repository. For example, if you made a total of @abstr_number commits to this repository, the link should say " @abstr_number commits".

@abstr_number . You will see a list of commits that you have made to this repository. The most recent commit is at the very top. If this represents the version of the files you want to submit, then just click the "copy to clipboard" button on the right hand side that should appear when you hover over the SHA- @abstr_number hash. Paste this SHA- @abstr_number hash into the course web site when you submit your assignment. If you don't want to use the most recent commit, then go down and find the commit you want and copy the SHA- @abstr_number hash.

A valid submission will look something like (this is just an **example**!)

@abstr_code_section 
