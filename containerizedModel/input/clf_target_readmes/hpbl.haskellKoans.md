# HaskellKoans
Project for the Functional Programming course @ CIn/UFPE - Spring 2018


## The project
Koans are a widespread technique to learn about new programming languages. Inspired by [clojureScript koans](http://clojurescriptkoans.com) we decided to make a web Haskell Koans, where programmers can easily take haskell for a test-drive and see what the buzz is all about.

## To Do
- [x] Implement the koans response logic
- [ ] Connect the website to a remote database [In Progress - see branch]
- [x] Host website
- [ ] Figure out how to serve images on build
- [ ] Figure out how to serve CSS on build


## Setup
You can either run the project locally or using containers.

### Running locally
In order to run Haskell Koans locally, you need to:

1. Clone the repo
2. Navigate to the project's folder on Terminal/Cmd
3. Install [Happstack](http://happstack.com/page/view-page-slug/2/download):
4. Compile and run the project:
  `runhaskell main.hs`
5. Open a browser on http://localhost:8000

### Running on Docker
In order to run Haskell Koans on a container, you need to:

1. Clone the repo
2. Navigate to the project's folder on Terminal/Cmd
3. Install [Happstack](http://happstack.com/page/view-page-slug/2/download)
4. Install [Docker](https://www.docker.com/get-started)

On the root of the project you'll find the `Dockerfile`. We also have a few scripts to help:

5. To build the docker image run:
  `scripts/build.sh`
6. To start the container run: `scripts/start.sh` and open a browser on http://localhost:8080
7. To stop the container run:
  `scripts/stop.sh`
  
## Continuous Deployment
Continuous Deployment is enabled through Heroku. Updates on the `master` branch are automatically deployed to http://haskellkoans.herokuapp.com


## Original Authors
- Hilton Pintor ([@hpbl](github.com/hpbl))
- Isabelly Damascena ([@isabellyfd](github.com/isabellyfd))
- Bruno Melo ([@bhlvm](github.com/bhlvm))
