# dynamic-json-resume

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Create your resume easily using json, and add some dynamism to it, or export it as pdf.

This started as a small weekend project. In the end, it took me @abstr_number / @abstr_number afternoons to finish it and have it published on npm.

## Inspiration:

  * @abstr_hyperlink 
  * This @abstr_hyperlink , as I really liked the content loaded as you scroll on the right. I wanted to have the same, in a simple way for my resume.



## Installation:

``` npm install (--save) json-resume-dynamic @abstr_code_section "contact" : { "first_name": "", "last_name": "", "website": "", "email": "", "github": "", "city": "" } @abstr_code_section "item-education": { "start-date": "", "end-date": "", "institution": { "name": "", "city": "", "country": "" }, "description": "", "additional-info": "" } @abstr_code_section "item-work": { "start-date": "", "end-date": "", "position": "", "company": { "name": "", "city": "", "country": "" }, "achievements": "", "technologies": ["", ""] } @abstr_code_section "item-projects": { "title": "", "description":"", "technologies": [] } @abstr_code_section "skills" : ["skill @abstr_number ", "skill @abstr_number "] @abstr_code_section 

"item-languages": { "name": "", "additional-info": "" }

{ "item-hobbies": { "name": "", "additional-info": "" }

@abstr_code_section "extra" { "type": "text" || "images" "extraContent": ||  if type == "text" [] or  if type == "images" } @abstr_code_section getResumeWithExtras(strResumeAsJson)`returns an object containing the resume section as`result.resume`and the extras section as`result.extraContent``` 

It will parse the JSON string provided and verify that: \- all the mandatory fields are declared. \- each extra object has an id.

If something is wrong, the error message should give you a good indication on how fix your issue!

`getTemplatePath(nameTemplate)` returns the template location within the module.

## How to generate a PDF for my resume?

@abstr_number . Go into the module folder @abstr_number . Run ```./cli.js export  [output_location] [css_file_location] @abstr_code_section var express = require('express'); var path = require('path'); var fs = require('fs'); var mustacheExpress = require('mustache-express'); var dynamicJsonResume = require('json-resume-dynamic'); var app = express()

app.use(express.static(path.join(__dirname, 'static'))); app.use(express.static(path.join(__dirname, 'node_modules/json-resume-dynamic/static')));

app.engine('html', mustacheExpress()); app.set('view engine', 'html'); app.set('views', __dirname + '/templates');

app.get('/', function(request, response) { var resumeJsonFile = fs.readFileSync(__dirname + "/my-resume.json", 'utf- @abstr_number ', function (err, data) { });
    
    
    var resume = dynamicJsonResume.getResumeWithExtras(resumeJsonFile);
    if (resume) {
        response.render(dynamicJsonResume.getTemplatePath('cv'), resume);
    }
    

});

var port = process.env.PORT || @abstr_number ;

app.listen(port, function() { console.log("Listening on " + port); }); ```

## Tests

You can run the tests by executing: `npm test`

## Mentions:

  * @abstr_hyperlink for the nice to use @abstr_hyperlink 



You can find a quickly done example here: http://resume-jeremydagorn.herokuapp.com/. You can of course modify the theme/style of your resume by playing around with @abstr_hyperlink .
