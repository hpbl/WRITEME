# howmanypeoplearearound

Count the number of people around you :family_man_man_boy: by monitoring wifi signals :satellite:.

_howmanypeoplearearound_ calculates the number of people in the vicinity using the approximate number of smartphones as a proxy (since @abstr_hyperlink ). A cellphone is determined to be in proximity to the computer based on sniffing WiFi probe requests. Possible uses of _howmanypeoplearearound_ include: monitoring foot traffic in your house with Raspberry Pis, seeing if your roommates are home, etc.

Tested on Linux (Raspbian and Ubuntu) and Mac OS X.

### **It may be illegal** to monitor networks for MAC addresses, especially on networks that _you do not own_. Please check your country's laws (for US @abstr_hyperlink ) - @abstr_hyperlink .

# Getting started

For a video walkthrough on how to install, checkout @abstr_hyperlink .

## Dependencies

Python @abstr_number . @abstr_number or preferably Python @abstr_number must be installed on your machine with the `pip` command also available. @abstr_code_section 

### WiFi adapter that supports monitor mode

There are a number of possible USB WiFi adapters that support monitor mode. Here's a list that are popular:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Namely you want to find a USB adapter with one of the following chipsets: Atheros AR @abstr_number , Ralink RT @abstr_number , Ralink RT @abstr_number , or Ralink RT @abstr_number .

### Mac OS X

@abstr_code_section 

You need to dissociate from any AP before initiating the scanning: @abstr_code_section 

### Linux @abstr_hyperlink 

@abstr_code_section 

Then update it so it can be run as non-root: @abstr_code_section 

## Install

@abstr_code_section 

## Run

### Quickstart

To run, simply type in @abstr_code_section 

You will be prompted for the WiFi adapter to use for scanning. Make sure to use an adapter that supports "monitor" mode.

### Docker alternative

If Docker is installed locally and you want to take _howmanypeoplearearound_ out for a quick spin, you can try the following: @abstr_number . Copy Dockerfile from this repo in your current working directory @abstr_number . `docker build -t howmanypeoplearearound .` # that . at the end is important @abstr_number . `docker run -it --net=host --name howmanypeoplearearound howmanypeoplearearound`

NOTE: This Docker alternative is known to work on Ubuntu but _not_ on Mac OS X. Feedback on other platforms would be appreciated.

### Options

You can modify the scan time, designate the adapter, or modify the output using some command-line options. @abstr_code_section 

### Print JSON

You can generate an JSON-formatted output to see what kind of phones are around: @abstr_code_section 

A higher rssi means closer (one of these phones is mine, and the other two are my roommates' who were upstairs). 

### Run forever

You can add `--loop` to make this run forever and append new lines an output file, `test.json`: @abstr_code_section 

### Visualize

You can visualize the output from a looped command via a browser using: @abstr_code_section 

Then just open up `index.html` in a browser and you should see plots. The first plot shows the number of people over time. Here you can see that people start arriving at work place around @abstr_number - @abstr_number am (when work starts!).

@abstr_image 

The second plot shows the RSSI values for the mac addresses seen. You can double-click on one of them in particular to highlight that trajectory, as I have done here for my phone (you can see when I leave from and when I arrive to work!):

@abstr_image 

# How does it work?

_howmanypeoplearearound_ counts up the number of probe requests coming from cellphones in a given amount of time. The probe requests can be "sniffed" from a monitor-mode enabled WiFi adapter using `tshark`. An accurate count does depend on everyone having cellphone and also scanning long enough ( @abstr_number - @abstr_number minutes) to capture the packet when a phone pings the WiFi network (which happens every @abstr_number to @abstr_number minutes unless the phone is off or WiFi is disabled).

This is a simplification of another program I wrote, @abstr_hyperlink which uses a similar idea with a cluster of Raspberry Pis to geolocate positions of cellphones within the vicinity.

# License

MIT
