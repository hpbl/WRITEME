# Foxmote

Yet another XBMC remote for firefox os, built using @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

* * *

## Purpose

Foxmote is an XBMC remote that let you control XBMC with your firefox os phone. It is powered with some of the most trendy, popular frameworks around.

## Stack

  * @abstr_hyperlink power the application
  * Beautiful styles using @abstr_hyperlink and @abstr_hyperlink 



### Build

Build system focused on AngularJS apps and tightly integrated with other tools commonly used in the AngularJS community: * powered by @abstr_hyperlink * build supporting JS, CSS and AngularJS templates minification

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called @abstr_hyperlink for installing NodeJS applications and libraries. * @abstr_hyperlink (requires node.js version >= @abstr_number . @abstr_number . @abstr_number ) * Install Grunt-CLI as global npm modules:
    
    
     @abstr_code_section
    

### Application Server

When testing with your browser (Chrome, Firefox) you will need to use our backend application server (using nodejs). Please follow the below steps :

  * Install local dependencies:

@abstr_code_section 




### Client Application

Our client application is a straight HTML/Javascript application but our development process uses a Node.js build tool Grunt.js and @abstr_hyperlink to retrieve @abstr_number rd party dependencies. Grunt relies upon some @abstr_number rd party libraries that we need to install as local dependencies using npm.

  * Install local dependencies:

@abstr_code_section 




## Building

The application made up of a number of javascript, css and html files that need to be merged into a final distribution for running. We use the Grunt build tool to do this. Build client application with:
    
    
     @abstr_code_section
    

_Note : It is important to build again if you change files in under client directory. You can avoid this painful process by using continuous building see dedicated section._

## Running

### Start the Server

Run the server with :
    
    
     @abstr_code_section
    

Your browser should automatically open at the following URL [http://localhost: @abstr_number ] letting you use the application. Of course you can manually navigate to this URL at any time.*

## Development

### Folders structure

At the top level, the repository is split into a client folder and a server folder. The client folder contains all the client-side AngularJS application. The server folder contains a very basic webserver that delivers and supports the application while using a desktop browse (not needed when app is added to the firefox os emulator). Within the client folder you have the following structure: * `dist` contains build results * `src` contains application's sources * `vendor` contains external dependencies for the application

### Default Build

The default grunt task will build the application.
    
    
     @abstr_code_section
    

### Continuous Building

The watch grunt task will monitor the source files and run the default build task every time a file changes.
    
    
     @abstr_code_section
    

### Building release code, aka create a zip file ready for firefox os marketplace upload

You can build a zipped release version of the app, with minified files using a dedicated grunt task.
    
    
     @abstr_code_section
    

### Using Firefox OS Simulator

Once application is build you can add it to firefox os simulator. To do so : * Be sure firefox os simulator is installed. Instruction @abstr_hyperlink * Open firefox and navigate to Firefox > Web Developer > Firefox os Simulator * On the Firefox os Simulator page click on add directory * Navigate to the dist folder under client directory * Select manifest.webapp * Emulator should start and application run
