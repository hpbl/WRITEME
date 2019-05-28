# HaskellKoans

Project for the Functional Programming course @ CIn/UFPE - Spring @abstr_number 

## The project

Koans are a widespread technique to learn about new programming languages. Inspired by @abstr_hyperlink we decided to make a web Haskell Koans, where programmers can easily take haskell for a test-drive and see what the buzz is all about.

## To Do

  * [x] Implement the koans response logic
  * [ ] Connect the website to a remote database [In Progress - see branch]
  * [x] Host website
  * [ ] Figure out how to serve images on build
  * [ ] Figure out how to serve CSS on build



## Setup

You can either run the project locally or using containers.

### Running locally

In order to run Haskell Koans locally, you need to:

@abstr_number . Clone the repo @abstr_number . Navigate to the project's folder on Terminal/Cmd @abstr_number . Install @abstr_hyperlink : @abstr_number . Compile and run the project: `runhaskell main.hs` @abstr_number . Open a browser on http://localhost: @abstr_number 

### Running on Docker

In order to run Haskell Koans on a container, you need to:

@abstr_number . Clone the repo @abstr_number . Navigate to the project's folder on Terminal/Cmd @abstr_number . Install @abstr_hyperlink @abstr_number . Install @abstr_hyperlink 

On the root of the project you'll find the `Dockerfile`. We also have a few scripts to help:

@abstr_number . To build the docker image run: `scripts/build.sh` @abstr_number . To start the container run: `scripts/start.sh` and open a browser on http://localhost: @abstr_number @abstr_number . To stop the container run: `scripts/stop.sh`

## Continuous Deployment

Continuous Deployment is enabled through Heroku. Updates on the `master` branch are automatically deployed to http://haskellkoans.herokuapp.com

## Original Authors

  * Hilton Pintor (@hpbl)
  * Isabelly Damascena (@isabellyfd)
  * Bruno Melo (@bhlvm)


