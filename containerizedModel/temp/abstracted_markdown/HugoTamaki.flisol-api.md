# Simple node server

This is a simple implementation of a node server for who is starting to learn Angular JS and needs API comsumption.

To use this server:

### First install the dependencies

  * Run `npm install`. It will create a `node_modules` folder with express, bodyparser and mongoose



### Install Mongodb

If you don't have mongodb installed, you will need it to save data.

To install:

  * http://docs.mongodb.org/manual/installation/



Once installed, create a database called `flisol-dogs`, or call it what you want (don't forget to change it on server.js) Run the server with `mongod` and be sure that the server port and address is the same on server.js

## Create a user

Add a user with bcrypted password. To get a hashed password, run: @abstr_code_section 

then at mongo console, run select the db with `use flisol-dogs` and then: @abstr_code_section 

### To make the requisitions

You can use Postman, or any other way. I like to test it with HTTParty (ruby gem). You can make requisitions in this way.

Post: `HTTParty.post('http://localhost: @abstr_number /api/contatos', :body => {name: 'Robson', phone: ' @abstr_number - @abstr_number ', operator: {name: 'Oi', code: ' @abstr_number ', category: 'Celular'}, date: DateTime.now}.to_json, :headers => {'content-type' => 'application/json'})`

Get: `HTTParty.get('http://localhost: @abstr_number /api/contatos/ @abstr_number cad @abstr_number d @abstr_number ')`

Put: `HTTParty.put('http://localhost: @abstr_number /api/contatos/ @abstr_number cad @abstr_number d @abstr_number ', :body => {name: 'Robson', phone: ' @abstr_number - @abstr_number ', operator: {name: 'Claro', code: ' @abstr_number ', category: 'Celular'}, date: DateTime.now}.to_json, :headers => {'content-type' => 'application/json'})`

Delete: `HTTParty.delete.('http://localhost: @abstr_number /api/contatos/ @abstr_number cad @abstr_number d @abstr_number ')`

### Create new models

Just create new models at /models folder, don't forget to call it on server js like this `var Dog = require('./models/dog');` and don't forget to add the new routes.

Now run it and be happy :)
