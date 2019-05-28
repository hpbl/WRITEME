# blog

This application was generated using JHipster @abstr_number . @abstr_number . @abstr_number , you can find documentation and help at @abstr_hyperlink .

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

@abstr_number . @abstr_hyperlink : We use Node to run a development web server and build the project. Depending on your system, you can install Node either from source or as a pre-packaged bundle. @abstr_number . @abstr_hyperlink : We use Yarn to manage Node dependencies. Depending on your system, you can install Yarn either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools. You will only need to run this command when dependencies change in package.json.
    
    
    yarn install
    

We use yarn scripts and @abstr_hyperlink as our build system.

Run the following commands in two separate terminals to create a blissful development experience where your browser auto-refreshes when files change on your hard drive.
    
    
    ./mvnw
    yarn start
    

@abstr_hyperlink is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by specifying a newer version in package.json. You can also run `yarn update` and `yarn install` to manage dependencies. Add the `help` flag on any command to see how you can use it. For example, `yarn help update`.

The `yarn run` command will list all of the scripts available to run for this project.

### Managing dependencies

For example, to add @abstr_hyperlink library as a runtime dependency of your application, you would run following command:
    
    
    yarn add --exact leaflet
    

To benefit from TypeScript type definitions from @abstr_hyperlink repository in development, you would run following command:
    
    
    yarn add --dev --exact @types/leaflet
    

Then you would import the JS and CSS files specified in library's installation instructions so that @abstr_hyperlink knows about them:

Edit src/main/webapp/app/vendor.ts file: ~~~ import 'leaflet/dist/leaflet.js'; ~~~

Edit src/main/webapp/content/css/vendor.css file: ~~~ @import '~leaflet/dist/leaflet.css'; ~~~

Note: there are still few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at @abstr_hyperlink .

### Using angular-cli

You can also use @abstr_hyperlink to generate some custom client code.

For example, the following command:
    
    
    ng generate component my-component
    

will generate few files:
    
    
    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts
    

## Building for production

To optimize the blog application for production, run:
    
    
    ./mvnw -Pprod clean package
    

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files. To ensure everything worked, run:
    
    
    java -jar target/*.war
    

Then navigate to @abstr_hyperlink in your browser.

Refer to @abstr_hyperlink for more details.

## Testing

To launch your application's tests, run:
    
    
    ./mvnw clean test
    

### Client tests

Unit tests are run by @abstr_hyperlink and written with @abstr_hyperlink . They're located in src/test/javascript/ and can be run with:
    
    
    yarn test
    

For more information, refer to the @abstr_hyperlink .

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the src/main/docker folder to launch required third party services. For example, to start a mysql database in a docker container, run:
    
    
    docker-compose -f src/main/docker/mysql.yml up -d
    

To stop it and remove the container, run:
    
    
    docker-compose -f src/main/docker/mysql.yml down
    

You can also fully dockerize your application and all the services that it depends on. To achieve this, first build a docker image of your app by running:
    
    
    ./mvnw package -Pprod docker:build
    

Then run:
    
    
    docker-compose -f src/main/docker/app.yml up -d
    

For more information refer to @abstr_hyperlink , this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the @abstr_hyperlink page for more information.
