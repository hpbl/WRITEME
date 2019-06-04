# Welcome to Rails

Rails is a web-application framework that includes everything needed to create database-backed web applications according to the @abstr_hyperlink pattern.

Understanding the MVC pattern is key to understanding Rails. MVC divides your application into three layers, each with a specific responsibility.

The _Model layer_ represents your domain model (such as Account, Product, Person, Post, etc.) and encapsulates the business logic that is specific to your application. In Rails, database-backed model classes are derived from `ActiveRecord::Base`. Active Record allows you to present the data from database rows as objects and embellish these data objects with business logic methods. You can read more about Active Record in its README. Although most Rails models are backed by a database, models can also be ordinary Ruby classes, or Ruby classes that implement a set of interfaces as provided by the Active Model module. You can read more about Active Model in its README.

The _Controller layer_ is responsible for handling incoming HTTP requests and providing a suitable response. Usually this means returning HTML, but Rails controllers can also generate XML, JSON, PDFs, mobile-specific views, and more. Controllers load and manipulate models, and render view templates in order to generate the appropriate HTTP response. In Rails, incoming requests are routed by Action Dispatch to an appropriate controller, and controller classes are derived from `ActionController::Base`. Action Dispatch and Action Controller are bundled together in Action Pack. You can read more about Action Pack in its README.

The _View layer_ is composed of "templates" that are responsible for providing appropriate representations of your application's resources. Templates can come in a variety of formats, but most view templates are HTML with embedded Ruby code (ERB files). Views are typically rendered to generate a controller response, or to generate the body of an email. In Rails, View generation is handled by Action View. You can read more about Action View in its README.

Active Record, Active Model, Action Pack, and Action View can each be used independently outside Rails. In addition to that, Rails also comes with Action Mailer (README), a library to generate and send emails; Active Job (README), a framework for declaring jobs and making them run on a variety of queueing backends; Action Cable (README), a framework to integrate WebSockets with a Rails application; and Active Support (README), a collection of utility classes and standard library extensions that are useful for Rails, and may also be used independently outside Rails.

## Getting Started

@abstr_number . Install Rails at the command prompt if you haven't yet:
    
    
        $ gem install rails
    

@abstr_number . At the command prompt, create a new Rails application:
    
    
        $ rails new myapp
    

where "myapp" is the application name.

@abstr_number . Change directory to `myapp` and start the web server:
    
    
        $ cd myapp
        $ rails server
    

Run with `--help` or `-h` for options.

@abstr_number . Using a browser, go to `http://localhost: @abstr_number` and you'll see: "Yay! You’re on Rails!"

@abstr_number . Follow the guidelines to start developing your application. You may find the following resources handy: * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 

## Contributing

We encourage you to contribute to Ruby on Rails! Please check out the @abstr_hyperlink for guidelines about how to proceed. @abstr_hyperlink 

Everyone interacting in Rails and its sub-projects' codebases, issue trackers, chat rooms, and mailing lists is expected to follow the Rails @abstr_hyperlink .

## Code Status

@abstr_hyperlink 

## License

Ruby on Rails is released under the @abstr_hyperlink .
