@abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink 

MEAN.JS is a full-stack JavaScript open-source solution, which provides a solid starting point for @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink based applications. The idea is to solve the common issues with connecting those frameworks, build a robust framework to support daily development needs, and help developers use better practices while working with popular JavaScript components. 

## Before You Begin

Before you begin we recommend you read about the basic building blocks that assemble a MEAN.JS application: * MongoDB - Go through @abstr_hyperlink and proceed to their @abstr_hyperlink , which should help you understand NoSQL and MongoDB better. * Express - The best way to understand express is through its @abstr_hyperlink , which has a @abstr_hyperlink guide, as well as an @abstr_hyperlink guide for general express topics. You can also go through this @abstr_hyperlink for more resources. * AngularJS - Angular's @abstr_hyperlink is a great starting point. You can also use @abstr_hyperlink , and the @abstr_hyperlink . * Node.js - Start by going through @abstr_hyperlink and this @abstr_hyperlink , which should get you going with the Node.js platform in no time.

## Prerequisites

Make sure you have installed all these prerequisites on your development machine. * Node.js - @abstr_hyperlink and the npm package manager, if you encounter any problems, you can also use this @abstr_hyperlink to install Node.js. * MongoDB - @abstr_hyperlink , and make sure it's running on the default port ( @abstr_number ). * Bower - You're going to use the @abstr_hyperlink to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

@abstr_code_section 

  * Grunt - You're going to use the @abstr_hyperlink to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

@abstr_code_section 




## Downloading MEAN.JS

There are several ways you can get the MEAN.JS boilerplate: 

### Yo Generator

The recommended way would be to use the @abstr_hyperlink which will generate the latest stable copy of the MEAN.JS boilerplate and supplies multiple sub-generators to ease your daily development cycles.

### Cloning The GitHub Repository

You can also use Git to directly clone the MEAN.JS repository: @abstr_code_section This will clone the latest version of the MEAN.JS repository to a **meanjs** folder.

### Downloading The Repository Zip File

Another way to use the MEAN.JS boilerplate is to download a zip copy from the @abstr_hyperlink . You can also do this using `wget` command: @abstr_code_section Don't forget to rename **mean-master** after your project name.

## Quick Install

Once you've downloaded the boilerplate and installed all the prerequisites, you're just a few steps away from starting to develop you MEAN application.

The first thing you should do is install the Node.js dependencies. The boilerplate comes pre-bundled with a package.json file that contains the list of modules you need to start your application, to learn more about the modules installed visit the NPM & Package.json section.

To install Node.js dependencies you're going to use npm again, in the application folder run this in the command-line:

@abstr_code_section 

This command does a few things: * First it will install the dependencies needed for the application to run. * If you're running in a development environment, it will then also install development dependencies needed for testing and running your application. * Finally, when the install process is over, npm will initiate a bower install command to install all the front-end modules needed for the application

## Running Your Application

After the install process is over, you'll be able to run your application using Grunt, just run grunt default task:

@abstr_code_section 

Your application should run on the @abstr_number port so in your browser just go to @abstr_hyperlink 

That's it! your application should be running by now, to proceed with your development check the other sections in this documentation. If you encounter any problem try the Troubleshooting section.

## Development and deployment With Docker

  * Install @abstr_hyperlink 
  * Install @abstr_hyperlink 

  * Local development and testing with fig: @abstr_code_section 

  * Local development and testing with just Docker: @abstr_code_section 

  * To enable live reload forward @abstr_number port and mount /app and /public as volumes: @abstr_code_section 




## Running in a secure environment

To run your application in a secure manner you'll need to use OpenSSL and generate a set of self-signed certificates. Unix-based users can use the following commnad: @abstr_code_section Windows users can follow instructions found @abstr_hyperlink To generate the key and certificate and place them in the _config/sslcert_ folder.

## Getting Started With MEAN.JS

You have your application running but there are a lot of stuff to understand, we recommend you'll go over the @abstr_hyperlink . In the docs we'll try to explain both general concepts of MEAN components and give you some guidelines to help you improve your development process. We tried covering as many aspects as possible, and will keep update it by your request, you can also help us develop the documentation better by checking out the _gh-pages_ branch of this repository.

## Community

  * Use to @abstr_hyperlink to learn about changes and the roadmap.
  * Join #meanjs on freenode.
  * Discuss it in the new @abstr_hyperlink 
  * Ping us on @abstr_hyperlink and @abstr_hyperlink 



## Live Example

Browse the live MEAN.JS example on @abstr_hyperlink .

## Credits

Inspired by the great work of @abstr_hyperlink The MEAN name was coined by @abstr_hyperlink 

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
