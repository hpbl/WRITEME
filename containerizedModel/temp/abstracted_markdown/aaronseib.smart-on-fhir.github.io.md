# SMART Technical Documentation

This is the SMART technical documentation, hosted at @abstr_hyperlink 

  * See @abstr_hyperlink for high-level project info and news
  * Need help? Ask a question at @abstr_hyperlink 
  * Found an error in these docs? Fork them on Github and send us a pull request!



## Installing Jekyll and Friends

The SMART technical documentation is built using @abstr_hyperlink tools. Using @abstr_hyperlink , you can install all of the required dependencies to generate and run the documentation locally by running the following command from the `smart-on-fhir.github.io/` directory:
    
    
    $ bundle install
    

This will install @abstr_hyperlink , a static site generator and @abstr_hyperlink , a Ruby Markdown processor.

Once the required software is installed, generating the static site (in the `_site` directory) is simply running
    
    
    $ jekyll serve --watch -b /
    

on the commandline.

* * *

If you prefer, you can serve the project with Node.js and grunt, which enables "live reload" behavior. This allows editing side-by-side with the web page; and every time you save, your changes appear automatically in the browser.

Just install nodejs and grunt, and then run:

@abstr_code_section 

And then open a browser to http://localhost: @abstr_number 
