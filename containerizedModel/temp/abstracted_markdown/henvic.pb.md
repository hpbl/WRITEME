# Terminal progress bar for Go

Simple progress bar for console programs. 

## Installation

@abstr_code_section 

## Usage

```Go package main

import ( "gopkg.in/cheggaaa/pb.v @abstr_number " "time" )

func main() { count := @abstr_number bar := pb.StartNew(count) for i := @abstr_number ; i < count; i++ { bar.Increment() time.Sleep(time.Millisecond) } bar.FinishPrint("The End!") }

@abstr_code_section 

> go run test.go @abstr_number / @abstr_number [================>_______________________________] @abstr_number . @abstr_number % @abstr_number m @abstr_number s @abstr_code_section Go   
>  // create bar bar := pb.New(count)

// refresh info every second (default @abstr_number ms) bar.SetRefreshRate(time.Second)

// show percents (by default already true) bar.ShowPercent = true

// show bar (by default already true) bar.ShowBar = true

// no counters bar.ShowCounters = false

// show "time left" bar.ShowTimeLeft = true

// show average speed bar.ShowSpeed = true

// sets the width of the progress bar bar.SetWidth( @abstr_number )

// sets the width of the progress bar, but if terminal size smaller will be ignored bar.SetMaxWidth( @abstr_number )

// convert output to readable format (like KB, MB) bar.SetUnits(pb.U_BYTES)

// and start bar.Start() @abstr_code_section go // create and start bar bar := pb.New(myDataLen).SetUnits(pb.U_BYTES) bar.Start()

// my io.Reader r := myReader

// my io.Writer w := myWriter

// create proxy reader reader := bar.NewProxyReader(r)

// and copy from pb reader io.Copy(w, reader)

@abstr_code_section 

## Custom Progress Bar Look-and-feel

@abstr_code_section 

## Multiple Progress Bars (experimental and unstable)

Do not print to terminal while pool is active.

@abstr_code_section 

The result will be as follows:

@abstr_code_section 
