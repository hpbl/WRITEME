# forro

Encapsulate form validation definitions in objects, using the excellent @abstr_hyperlink module to handle the actual validation and casting.

I missed the form definition pattern Python has adapted with libraries like @abstr_hyperlink and @abstr_hyperlink . Being able to declare form schema's in one place, and being able to trust in your controller code that what you're dealing with has already been validate and cast the way you want is pretty great. forro adds these niceties to Javascript land.

@abstr_hyperlink 

## Example
    
    
    var express = require("express"),
        app = express(),
        forro = require('forro'),
        StringField = forro.StringField,
        BooleanField = forro.BooleanField,
        DateField = forro.DateField;
    
    // ... some code
    
    var AuthForm = forro({
        'username': StringField.required().max( @abstr_number ),
        'password': StringField.required().length( @abstr_number ,  @abstr_number ),
        'remember_me': BooleanField
    });
    
    
    app.post("/login", AuthForm.middleware(), function(req, res){
        // Middleware already validated for us
        // and sent back a  @abstr_number  error if validation failed.
        // now we can just call out authentication function with
        // req.form.val('username') and req.form.val('password')
    });
    
    
     var BookmarkForm = forro({
        'url': StringField.required().url(),
        'tags': StringField.required().use(function tokenize(str){
            return str.split(',').map(function(s){
                return s.trim().toLowerCase();
            }).filter(function(s){
                return s.length >  @abstr_number ;
            });
        }),
        'created_on': DateField.default(DateField.now)
    });
    
    app.post("/bookmark", BookmarkForm.middleware(), function(req, res){
        saveBookmark(req.form.val('url'), req.form.val('tags'), req.form.val('created_on'), function(err, bookmark){
            if(err) return next(err);
            res.send(bookmark);
        });
    });
    
    // ... some more code
    

## Install
    
    
     npm install forro
    

## Testing
    
    
    git clone
    npm install
    mocha
    

## License

MIT
