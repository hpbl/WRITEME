# Docker Compose

@abstr_image 

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a Compose file to configure your application's services. Then, using a single command, you create and start all the services from your configuration. To learn more about all the features of Compose see @abstr_hyperlink .

Compose is great for development, testing, and staging environments, as well as CI workflows. You can learn more about each case in @abstr_hyperlink .

Using Compose is basically a three-step process.

@abstr_number . Define your app's environment with a `Dockerfile` so it can be reproduced anywhere. @abstr_number . Define the services that make up your app in `docker-compose.yml` so they can be run together in an isolated environment. @abstr_number . Lastly, run `docker-compose up` and Compose will start and run your entire app.

A `docker-compose.yml` looks like this:
    
    
    version: ' @abstr_number '
    
    services:
      web:
        build: .
        ports:
         - " @abstr_number : @abstr_number "
        volumes:
         - .:/code
      redis:
        image: redis
    

For more information about the Compose file, see the @abstr_hyperlink .

Compose has commands for managing the whole lifecycle of your application:

  * Start, stop and rebuild services
  * View the status of running services
  * Stream the log output of running services
  * Run a one-off command on a service



## Installation and documentation

  * Full documentation is available on @abstr_hyperlink .
  * Code repository for Compose is on @abstr_hyperlink .
  * If you find any problems please fill out an @abstr_hyperlink . Thank you!



## Contributing

@abstr_hyperlink 

Want to help build Compose? Check out our @abstr_hyperlink .

## Releasing

Releases are built by maintainers, following an outline of the @abstr_hyperlink .
