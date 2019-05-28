A simple example of microservices that is described in this @abstr_hyperlink .

There are two services: * RESTful service - exposes a REST API for registering a user. It saves the user registration in MongoDB and posts a message to RabbitMQ. It is the example code for the article @abstr_hyperlink .

  * Web application - implements the user registration UI and invokes the RESTful service. It is the example code for the article @abstr_hyperlink .



The services are written in Scala and use the following technologies.

  * Spring Boot
  * Spring Cloud
  * Netflix OSS Eureka
  * RabbitMQ



Note: There are @abstr_hyperlink .

# Building and running the microservices

This project uses with @abstr_hyperlink to run the services as well as RabbitMQ and MongoDB.

The `spring-boot-webapp` project uses Selenium to test the web UI using the Chrome browser. You will need to install @abstr_hyperlink . On Mac OSX you can run `brew install chromedriver`.

## The quick way

The quickest way to build and run the services on Linux/Mac OSX is with the following commands:

@abstr_code_section 

Otherwise, follow these instructions.

## Running MongoDB and RabbitMQ

The RESTful service uses RabbitMQ and MongoDB. The easier way to run them is to using Docker:

@abstr_code_section 

You also need to set some environment variables so that the services can connect to them:

@abstr_code_section 

## Build the Eureka server

This application uses Netflix OSS Eureka for service discovery. Build the Spring Cloud based Eureka server using the following commands:

@abstr_code_section 

## Build the Zipkin server

This application uses Zipkin for distributed tracing. Build the Zipkin server using the following commands:

@abstr_code_section 

## Building the RESTful service

Use the following commands to build the RESTful service:

@abstr_code_section 

## Running the RESTful service

You can run the service by using the following command in the top-level directory:

@abstr_code_section 

## Using the RESTful service

Once the service has started, you can send a registration request using:

@abstr_code_section 

You can examine the MongoDB database using the following commands

@abstr_code_section 

## Building the web application

Since the web application invokes the RESTful service you must set the following environment variable:

@abstr_code_section 

Next, use the following commands to build the web application:

@abstr_code_section 

## Running the web application

Run the web application using the following command in the top-level directory:

@abstr_code_section 

## Using the web application

You can access the web application by visiting the following URL: `http://${DOCKER_HOST_IP?}: @abstr_number /register.html`

There are also other URLs that you can visit. The following command will wait until the services are available and displays the URLs:

@abstr_code_section 

# Building and running Docker images

The previous instructions deployed the services as Docker containers without actually packaging the services as Docker images. The `docker-compose.yml` file ran the image `java:openjdk- @abstr_number u @abstr_number -jdk` and used volume mapping to make the Spring Boot jar files accessible. Follow these instructions to build and run the Docker images.

## Building the images

You can build the images by running the following command:

@abstr_code_section 

This script is a simple wrapper around `docker build`.

## Running the images

You can now run the Docker images using the `docker-compose` command with `docker-compose-images.yml`:

@abstr_code_section 

The following command will wait until the services are available and displays the URLs:

@abstr_code_section 
