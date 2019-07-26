# A simple, cross platform, modularized ecommerce system built on .NET Core @abstr_hyperlink 

## High level architecture

@abstr_image 

## Build Status

| Build server | Platform | Status | |-----------------|----------------|-------------| | AppVeyor | Windows | @abstr_hyperlink | | Azure Pipelines | All | @abstr_hyperlink |Travis | Linux / MacOS | @abstr_hyperlink |

## Online demo (Azure Website)

  * Store front: http://demo.simplcommerce.com
  * Administration: http://demo.simplcommerce.com/admin Email: admin@simplcommerce.com Password: @abstr_number qazZAQ!



## Docker

For testing purpose only `docker run -p @abstr_number : @abstr_number simplcommerce/ci-build`

Continuous deployment: https://ci.simplcommerce.com

## Visual Studio @abstr_number and SQL Server

#### Prerequisites

  * SQL Server
  * @abstr_hyperlink 



#### Steps to run

  * Update the connection string in appsettings.json in SimplCommerce.WebHost
  * Build whole solution.
  * In Solution Explorer, make sure that SimplCommerce.WebHost is selected as the Startup Project
  * Open Package Manager Console Window and make sure that SimplCommerce.WebHost is selected as Default project. Then type "Update-Database" then press "Enter". This action will create database schema.
  * In Visual Studio, press "Control + F @abstr_number ".
  * The back-office can access via /Admin using the pre-created account: admin@simplcommerce.com, @abstr_number qazZAQ!



## Mac/Linux with PostgreSQL

#### Prerequisite

  * PostgreSQL
  * @abstr_hyperlink 



#### Steps to run

  * Update the connection string in appsettings.json in SimplCommerce.WebHost.
  * Run file simpl-build.sh by "sudo ./simpl-build.sh". For ubuntu @abstr_number "sudo bash simpl-build.sh"
  * In the terminal, navigate to the "src/SimplCommerce.WebHost" type "dotnet run" and hit "Enter".
  * Open browser, open http://localhost: @abstr_number . The back-office can access via /Admin using the pre-created account: admin@simplcommerce.com, @abstr_number qazZAQ!



## Technologies and frameworks used:

  * ASP.NET MVC Core @abstr_number . @abstr_number 
  * Entity Framework Core @abstr_number . @abstr_number 
  * ASP.NET Identity Core @abstr_number . @abstr_number 
  * Angular @abstr_number . @abstr_number . @abstr_number 
  * MediatR @abstr_number . @abstr_number . @abstr_number for domain event



## Docs

http://docs.simplcommerce.com

## Roadmap

https://github.com/simplcommerce/SimplCommerce/wiki/Roadmap

## How to contribute

  * Star this project on GitHub.
  * Report bugs or suggest features by create new issues or add comments to issues
  * Submit pull requests
  * Spread the word by blogging about SimplCommerce or sharing it on social networks
  * Donate us



## Contributors

This project exists thanks to all the people who contribute.

@abstr_hyperlink 

## Backers

Love our work and help us continue our activities? [[Become a backer](https://opencollective.com/simplcommerce#backer)]

@abstr_hyperlink 

## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/simplcommerce#sponsor)]

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## License

SimplCommerce is licensed under the Apache @abstr_number . @abstr_number license.
