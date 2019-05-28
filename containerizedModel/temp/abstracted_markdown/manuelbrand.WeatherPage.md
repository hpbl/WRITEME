# angular-seed — the seed for AngularJS apps

This project is an application skeleton for a typical @abstr_hyperlink web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.

## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from @abstr_hyperlink .

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and its package manager (npm) installed. You can get them from @abstr_hyperlink .

### Clone angular-seed

Clone the angular-seed repository using @abstr_hyperlink :

@abstr_code_section 

If you just want to start a new project without the angular-seed commit history then you can do:

@abstr_code_section 

The `depth= @abstr_number` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code. The tools help us manage and test the application.

  * We get the tools we depend upon via `npm`, the @abstr_hyperlink .
  * We get the angular code via `bower`, a @abstr_hyperlink .



We have preconfigured `npm` to automatically run `bower` so we can simply do:

@abstr_code_section 

Behind the scenes this will also call `bower install`. You should find that you have two new folders in your project.

  * `node_modules` \- contains the npm packages for the tools we need
  * `app/bower_components` \- contains the angular framework files



_Note that the`bower_components` folder would normally be installed in the root folder but angular-seed changes this location through the `.bowerrc` file. Putting it in the app folder makes it easier to serve the files by a webserver._

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

@abstr_code_section 

Now browse to the app at `http://localhost: @abstr_number /index.html`.

## Directory Layout

@abstr_code_section 

## Testing

There are two kinds of tests in the angular-seed application: Unit tests and end-to-end tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in @abstr_hyperlink , which we run with the @abstr_hyperlink . We provide a Karma configuration file to run them.

  * the configuration is found at `karma.conf.js`
  * the unit tests are found next to the code they are testing and are named as `..._test.js`.



The easiest way to run the unit tests is to use the supplied npm script:

@abstr_code_section 

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and watch the source and test files for changes and then re-run the tests whenever any of them change. This is the recommended strategy; if your unit tests are being run every time you save a file then you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to check that a particular version of the code is operating as expected. The project contains a predefined script to do this:

@abstr_code_section 

### End to end testing

The angular-seed app comes with end-to-end tests, again written in @abstr_hyperlink . These tests are run with the @abstr_hyperlink End-to-End test runner. It uses native events and has special features for Angular applications.

  * the configuration is found at `e @abstr_number e-tests/protractor-conf.js`
  * the end-to-end tests are found in `e @abstr_number e-tests/scenarios.js`



Protractor simulates interaction with our web app and verifies that the application responds correctly. Therefore, our web server needs to be serving up the application, so that Protractor can interact with it.

@abstr_code_section 

In addition, since Protractor is built upon WebDriver we need to install this. The angular-seed project comes with a predefined script to do this:

@abstr_code_section 

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

@abstr_code_section 

This script will execute the end-to-end tests against the application being hosted on the development server.

**Note:** Under the hood, Protractor uses the @abstr_hyperlink , which in turn requires the @abstr_hyperlink to be installed on your local machine. Check this by running `java -version` from the command line.

If JDK is not already installed, you can download it @abstr_hyperlink .

## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project. Now that the angular framework library code and tools are acquired through package managers (npm and bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

@abstr_code_section 

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

@abstr_code_section 

This will find the latest versions that match the version ranges specified in the `bower.json` file.

## Loading Angular Asynchronously

The angular-seed project supports loading the framework and application scripts asynchronously. The special `index-async.html` is designed to support this style of loading. For it to work you must inject a piece of Angular JavaScript into the HTML page. The project has a predefined script to help do this.

@abstr_code_section 

This will copy the contents of the `angular-loader.js` library file into the `index-async.html` page. You can run this every time you update the version of Angular that you are using.

## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that don't require a backend server at all, we recommend serving the project files using a local webserver during development to avoid issues with security restrictions (sandbox) in browsers. The sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr, etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

The angular-seed project comes preconfigured with a local development webserver. It is a node.js tool called @abstr_hyperlink . You can start this webserver with `npm start` but you may choose to install the tool globally:

@abstr_code_section 

Then you can start your own development web server to serve static files from a folder by running:

@abstr_code_section 

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just configure your server to serve the files under the `app/` directory.

### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but the general rule is that all you need in production are all the files under the `app/` directory. Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure out what is the best way to host the static files to comply with the same origin policy if applicable. Usually this is done by hosting the files by the backend server or through reverse-proxying the backend server(s) and webserver(s).

## Continuous Integration

### Travis CI

@abstr_hyperlink is a continuous integration service, which can monitor GitHub for new commits to your repository and execute scripts such as building the app or running tests. The angular-seed project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more instruction on how to do this.

### CloudBees

CloudBees have provided a CI/deployment setup:

@abstr_hyperlink 

If you run this, you will get a cloned version of this repo to start working on in a private git repo, along with a CI service (in Jenkins) hosted that will run unit and end to end tests in both Firefox and Chrome.

## Contact

For more information on AngularJS please check out http://angularjs.org/
