# AngularJS Phone Catalog Tutorial Application

## Overview

This application takes the developer through the process of building a web-application using AngularJS. The application is loosely based on the **Google Phone Gallery** , which no longer exists. Here is a historical reference: @abstr_hyperlink 

Each tagged commit is a separate lesson teaching a single aspect of the framework.

The full tutorial can be found at https://docs.angularjs.org/tutorial.

## Prerequisites

### Git

  * A good place to learn about setting up git is @abstr_hyperlink .
  * You can find documentation and download git @abstr_hyperlink .



### Node.js and Tools

  * Get @abstr_hyperlink .
  * Install the tool dependencies: `npm install`



## Workings of the Application

  * The application filesystem layout structure is based on the @abstr_hyperlink project.
  * There is no dynamic backend (no application server) for this application. Instead we fake the application server by fetching static JSON files.
  * Read the _Development_ section at the end to familiarize yourself with running and developing an Angular application.



## Commits / Tutorial Outline

You can check out any point of the tutorial using:

@abstr_code_section 

To see the changes made between any two lessons use the `git diff` command:

@abstr_code_section 

### step- @abstr_number _Bootstrapping_

  * Add the 'angular.js' script.
  * Add the `ngApp` directive to bootstrap the application.
  * Add a simple template with an expression.



### step- @abstr_number _Static Template_

  * Add a stylesheet file ('app/app.css').
  * Add a static list with two phones.



### step- @abstr_number _Angular Templates_

  * Convert the static phone list to dynamic by: 
    * Creating a `PhoneListController` controller.
    * Extracting the data from HTML into the controller as an in-memory dataset.
    * Converting the static document into a template with the use of the `ngRepeat` directive.
  * Add a simple unit test for the `PhoneListController` controller to show how to write tests and run them using Karma.



### step- @abstr_number _Components_

  * Introduce components.
  * Combine the controller and the template into a reusable, isolated `phoneList` component.
  * Refactor the application and tests to use the `phoneList` component.



### step- @abstr_number _Directory and File Organization_

  * Refactor the layout of files and directories, applying best practices and techniques that will make the application easier to maintain and expand in the future: 
    * Put each entity in its own file.
    * Organize code by feature area (instead of by function).
    * Split code into modules that other modules can depend on.
    * Use external templates in `.html` files (instead of inline HTML strings).



### step- @abstr_number _Filtering Repeaters_

  * Add a search box to demonstrate: 
    * How the data-binding works on input fields.
    * How to use the `filter` filter.
    * How `ngRepeat` automatically shrinks and grows the number of phones in the view.
  * Add an end-to-end test to: 
    * Show how end-to-end tests are written and used.
    * Prove that the search box and the repeater are correctly wired together.



### step- @abstr_number _Two-way Data Binding_

  * Add an `age` property to the phone model.
  * Add a drop-down menu to control the phone list order.
  * Override the default order value in controller.
  * Add unit and end-to-end tests for this feature.



### step- @abstr_number _XHR & Dependency Injection_

  * Replace the in-memory dataset with data loaded from the server (in the form of a static 'phone.json' file to keep the tutorial backend agnostic): 
    * The JSON data is loaded using the `$http` service.
  * Demonstrate the use of `services` and `dependency injection` (DI): 
    * `$http` is injected into the controller through DI.
    * Introduce DI annotation methods: `.$inject` and inline array



### step- @abstr_number _Templating Links & Images_

  * Add a phone image and links to phone pages.
  * Add an end-to-end test that verifies the phone links.
  * Tweak the CSS to style the page just a notch.



### step- @abstr_number _Routing & Multiple Views_

  * Introduce the `$route` service, which allows binding URLs to views for routing and deep-linking: 
    * Add the `ngRoute` module as a dependency.
    * Configure routes for the application.
    * Use the `ngView` directive in 'index.html'.
  * Create a phone list route (`/phones`): 
    * Map `/phones` to the existing `phoneList` component.
  * Create a phone detail route (`/phones/:phoneId`): 
    * Map `/phones/:phoneId` to a new `phoneDetail` component.
    * Create a dummy `phoneDetail` component, which displays the selected phone ID.
    * Pass the `phoneId` parameter to the component's controller via `$routeParams`.



### step- @abstr_number _More Templating_

  * Implement fetching data for the selected phone and rendering to the view: 
    * Use `$http` in `PhoneDetailController` to fetch the phone details from a JSON file.
    * Create the template for the detail view.
  * Add CSS styles to make the phone detail page look "pretty-ish".



### step- @abstr_number _Custom Filters_

  * Implement a custom `checkmark` filter.
  * Update the `phoneDetail` template to use the `checkmark` filter.
  * Add a unit test for the `checkmark` filter.



### step- @abstr_number _Event Handlers_

  * Make the thumbnail images in the phone detail view clickable: 
    * Introduce a `mainImageUrl` property on `PhoneDetailController`.
    * Implement the `setImage()` method for changing the main image.
    * Use `ngClick` on the thumbnails to register a handler that changes the main image.
    * Add an end-to-end test for this feature.



### step- @abstr_number _REST and Custom Services_

  * Replace `$http` with `$resource`.
  * Create a custom `Phone` service that represents the RESTful client.
  * Use a custom Jasmine equality tester in unit tests to ignore irrelevant properties.



### step- @abstr_number _Animations_

  * Add animations to the application: 
    * Animate changes to the phone list, adding, removing and reordering phones with `ngRepeat`.
    * Animate view transitions with `ngView`.
    * Animate changes to the main phone image in the phone detail view.
  * Showcase three different kinds of animations: 
    * CSS transition animations.
    * CSS keyframe animations.
    * JavaScript-based animations.



## Development with `angular-phonecat`

The following docs describe how you can test and develop this application further.

### Installing Dependencies

The application relies upon various Node.js tools, such as @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink . You can install these by running:

@abstr_code_section 

This will also run Bower, which will download the Angular files needed for the current step of the tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run it whenever you like.

### Running the Application during Development

  * Run `npm start`.
  * Navigate your browser to @abstr_hyperlink to see the application 
  * running.



### Unit Testing

We recommend using @abstr_hyperlink and @abstr_hyperlink for your unit tests/specs, but you are free to use whatever works for you.

  * Start Karma with `npm test`.
  * A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers, others can be captured by loading the same URL or by changing the `karma.conf.js` file.
  * Karma will sit and watch your application and test JavaScript files. To run or re-run tests just change any of your these files.



### End-to-End Testing

We recommend using @abstr_hyperlink for end-to-end (e @abstr_number e) testing.

It requires a webserver that serves the application. See the _Running the Application during Development_ section, above.

  * Serve the application with: `npm start`
  * In a separate terminal/command line window run the e @abstr_number e tests: `npm run protractor`.
  * Protractor will execute the e @abstr_number e test scripts against the web application itself. The project is set up to run the tests on Chrome directly. If you want to run against other browsers, you must modify the configuration at `e @abstr_number e-tests/protractor-conf.js`.



## Application Directory Layout

@abstr_code_section 

## Contact

For more information on AngularJS, please check out https://angularjs.org/.
