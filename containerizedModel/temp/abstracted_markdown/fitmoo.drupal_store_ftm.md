# store

**Initial Commit**

I pushed a drupal commerce , kickstart profile. Includes a pretty comprihensive store set up. It migth have somes stuf we might not need, but good way to get familiar with commerce, how prodcuts (skus/variations) and product displays relate. Similiar model should be created in fitmoo. We should really just import the product variations. I also added stock module to /sites/all/modules/contrib

We will have to add more modules, for the API, Drupal Services and etc for API end points.

We could keep Kickstart as our base or just start with simple drupal and pick out modules we need.

Base db with sample content is in /db/fitmoo_store.sql

# API

**Create User**

Drupal needs to have a user account before user can create/add/edit products to their fitmoo store. We will also need to create an account for a buyer Request: 
    
    
      - Name
      - email
      - password
      - role -- Store Owner for a user that will be creating and updating products
                people buying prodicts do not need a role, they will have defaul Authenticated user role
    

Return: 
    
    
      - uid
    

Example Call:
    
    
      ======================REGISTRATION==============================
      POST http://fitmoo.plsekwerks.com/fit_store/user
      Content-Type: application/json
      {
        "name": "testuser",
        "pass": "testuser",
        "mail" : "sabre+ @abstr_number @tut.by"
        "role" : "Store Owner"       
      }
    
      -- response --
      Set-Cookie:  SESSe @abstr_number a @abstr_number a @abstr_number c @abstr_number a @abstr_number c @abstr_number b @abstr_number cb @abstr_number f @abstr_number =E @abstr_number juSPMd @abstr_number fUOg @abstr_number j_esS @abstr_number G @abstr_number MwU @abstr_number jodrDpBjl @abstr_number KHfli @abstr_number ; expires=Sat,  @abstr_number -Mar- @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT; path=/; domain=.fitmoo.plsekwerks.com; HttpOnly
      {"uid":" @abstr_number ","uri":"http://fitmoo.plsekwerks.com/fit_store/user/ @abstr_number "}
    

**Login User**

User needs to be logged in when products are pushed to drupal so products are created as that user. User needs to be logget in when creating order

Example Call:
    
    
      ==================LOGIN===================
      POST http://fitmoo.plsekwerks.com/fit_store/user/login
      Content-Type: application/json
      {"username": "testuser","password": "testuser"}
      -- response --
      ["The username <em class=\"placeholder\">testuser</em> has not been activated or is blocked."]
    
      We will setup drupal to auto activate users on API call create user
    
      ==========LOGIN AFTER MANUALY ACTIVATING=============
      POST http://fitmoo.plsekwerks.com/fit_store/user/login
      Content-Type: application/json
      {"username": "testuser","password": "testuser"}
      -- response --
      Set-Cookie:  SESSe @abstr_number a @abstr_number a @abstr_number c @abstr_number a @abstr_number c @abstr_number b @abstr_number cb @abstr_number f @abstr_number =pIuj @abstr_number EEex @abstr_number MoJ @abstr_number AEGctHKvFCIFSMcDRTheU @abstr_number HevpYUM; expires=Sat,  @abstr_number -Mar- @abstr_number   @abstr_number : @abstr_number : @abstr_number  GMT; path=/; domain=.fitmoo.plsekwerks.com; httponly
      {"sessid":"pIuj @abstr_number EEex @abstr_number MoJ @abstr_number AEGctHKvFCIFSMcDRTheU @abstr_number HevpYUM","session_name":"SESSe @abstr_number a @abstr_number a @abstr_number c @abstr_number a @abstr_number c @abstr_number b @abstr_number cb @abstr_number f @abstr_number ","user":{"uid":" @abstr_number ","name":"testuser","theme":"","signature":"","signature_format":"filtered_html","created":" @abstr_number ","access":" @abstr_number ","login": @abstr_number ,"status":" @abstr_number ","timezone":"America/Los_Angeles","language":"","picture":null,"data":false,"roles":{" @abstr_number ":"authenticated user"},"rdf_mapping":{"rdftype":["sioc:UserAccount"],"name":{"predicates":["foaf:name"]},"homepage":{"predicates":["foaf:page"],"type":"rel"}}}}
    
      ====================GET TOKEN========================
      GET http://fitmoo.plsekwerks.com/services/session/token
      Cookie:  SESSe @abstr_number a @abstr_number a @abstr_number c @abstr_number a @abstr_number c @abstr_number b @abstr_number cb @abstr_number f @abstr_number =pIuj @abstr_number EEex @abstr_number MoJ @abstr_number AEGctHKvFCIFSMcDRTheU @abstr_number HevpYUM
      -- response --
      frGgOzjJPzrQBHi- @abstr_number ghxVs @abstr_number rDtGEVDMxNGjgW @abstr_number mA
    
    
      Other available USER calls
    
      ===============GET USER LIST==================
      GET http://fitmoo.plsekwerks.com/fit_store/user
      Cookie: SESSe @abstr_number a @abstr_number a @abstr_number c @abstr_number a @abstr_number c @abstr_number b @abstr_number cb @abstr_number f @abstr_number =pIuj @abstr_number EEex @abstr_number MoJ @abstr_number AEGctHKvFCIFSMcDRTheU @abstr_number HevpYUM
      X-CSRF-Token: frGgOzjJPzrQBHi- @abstr_number ghxVs @abstr_number rDtGEVDMxNGjgW @abstr_number mA
    
       -- response --
      [{"uid":" @abstr_number ","name":"testuser","theme":"","signature":"","signature_format":"filtered_html","created":" @abstr_number ","access":" @abstr_number ","login":" @abstr_number ","status":" @abstr_number ","timezone":"America/Los_Angeles","language":"","picture":" @abstr_number ","data":"b: @abstr_number ;","uri":"http://fitmoo.plsekwerks.com/fit_store/user/ @abstr_number "},{"uid":" @abstr_number ","name":"jiri","theme":"","signature":"","signature_format":"filtered_html","created":" @abstr_number ","access":" @abstr_number ","login":" @abstr_number ","status":" @abstr_number ","timezone":"America/Los_Angeles","language":"","picture":" @abstr_number ","data":null,"uri":"http://fitmoo.plsekwerks.com/fit_store/user/ @abstr_number "},{"uid":" @abstr_number ","name":"admin","theme":"","signature":"","signature_format":null,"created":" @abstr_number ","access":" @abstr_number ","login":" @abstr_number ","status":" @abstr_number ","timezone":"America/Los_Angeles","language":"","picture":" @abstr_number ","data":"b: @abstr_number ;","uri":"http://fitmoo.plsekwerks.com/fit_store/user/ @abstr_number "},{"uid":" @abstr_number ","name":"","theme":"","signature":"","signature_format":null,"created":" @abstr_number ","access":" @abstr_number ","login":" @abstr_number ","status":" @abstr_number ","timezone":null,"language":"","picture":" @abstr_number ","data":null,"uri":"http://fitmoo.plsekwerks.com/fit_store/user/ @abstr_number "}]
    
      ===============GET USER==================
      GET http://fitmoo.plsekwerks.com/fit_store/user/ @abstr_number 
      Cookie: SESSe @abstr_number a @abstr_number a @abstr_number c @abstr_number a @abstr_number c @abstr_number b @abstr_number cb @abstr_number f @abstr_number =pIuj @abstr_number EEex @abstr_number MoJ @abstr_number AEGctHKvFCIFSMcDRTheU @abstr_number HevpYUM
      X-CSRF-Token: frGgOzjJPzrQBHi- @abstr_number ghxVs @abstr_number rDtGEVDMxNGjgW @abstr_number mA
      -- response --
      {"uid":" @abstr_number ","name":"admin","theme":"","signature":"","signature_format":null,"created":" @abstr_number ","access":" @abstr_number ","login":" @abstr_number ","status":" @abstr_number ","timezone":"America/Los_Angeles","language":"","picture":null,"data":false,"roles":{" @abstr_number ":"authenticated user"," @abstr_number ":"administrator"},"rdf_mapping":{"rdftype":["sioc:UserAccount"],"name":{"predicates":["foaf:name"]},"homepage":{"predicates":["foaf:page"],"type":"rel"}}}
    

**Create Product**

After user creates a product in fitmoo, API call to Drupal to create same product

Request:
    
    
    - Product Display name
    - description
    - uid (store owner)
    - type
    - products (these are all the variations created by setting sizes and etc
      - sku (we can autogenerate skus in drupal, these have to be unique)
      - size
      - quantity (stock)
      - image url
      - price
    

Response:
    
    
    - sku
    - productID
    

Example API"
    
    
      ===============CREATE PRODUCT============== //these are the product variations
      POST http://fitmoo.plsekwerks.com/fit_store/product
      Cookie: SESSe @abstr_number a @abstr_number a @abstr_number c @abstr_number a @abstr_number c @abstr_number b @abstr_number cb @abstr_number f @abstr_number =pIuj @abstr_number EEex @abstr_number MoJ @abstr_number AEGctHKvFCIFSMcDRTheU @abstr_number HevpYUM
      X-CSRF-Token: frGgOzjJPzrQBHi- @abstr_number ghxVs @abstr_number rDtGEVDMxNGjgW @abstr_number mA
      Content-Type: application/json
      {
            "title": "shoes_ @abstr_number ",
            "sku": "shoes_ @abstr_number sku",
            "commerce_price_amount": " @abstr_number ",
            "commerce_price_currency_code": "USD",
            "type": "shoes",
            "field_shoe_size": " @abstr_number "
      }
    
      -- response --
      {"type":"shoes","product_id":" @abstr_number ","sku":"shoes_ @abstr_number sku","revision_id":" @abstr_number ","title":"shoes_ @abstr_number ","uid":"","status": @abstr_number ,"created": @abstr_number ,"changed": @abstr_number ,"commerce_price":{"amount":" @abstr_number ","currency_code":"USD","data":{"components":[]}},"field_shoe_size":" @abstr_number ","revision_timestamp": @abstr_number ,"revision_uid":" @abstr_number ","log":"","language":"","attribute_fields":["field_shoe_size"],"commerce_price_formatted":"$ @abstr_number . @abstr_number ","field_image_url":null,"commerce_stock":null}
    
      ===============GET PRODUCT==============
      GET http://fitmoo.plsekwerks.com/fit_store/product?sku=shoes_ @abstr_number sku
      Cookie: SESSe @abstr_number a @abstr_number a @abstr_number c @abstr_number a @abstr_number c @abstr_number b @abstr_number cb @abstr_number f @abstr_number =pIuj @abstr_number EEex @abstr_number MoJ @abstr_number AEGctHKvFCIFSMcDRTheU @abstr_number HevpYUM
      X-CSRF-Token: frGgOzjJPzrQBHi- @abstr_number ghxVs @abstr_number rDtGEVDMxNGjgW @abstr_number mA
      -- response --
      {" @abstr_number ":{"revision_id":" @abstr_number ","sku":"shoes_ @abstr_number sku","title":"shoes_ @abstr_number ","revision_uid":" @abstr_number ","status":" @abstr_number ","log":"","revision_timestamp":" @abstr_number ","data":false,"product_id":" @abstr_number ","type":"shoes","language":"","uid":" @abstr_number ","created":" @abstr_number ","changed":" @abstr_number ","commerce_price":{"amount":" @abstr_number ","currency_code":"USD","data":{"components":[]}},"field_image_url":null,"field_shoe_size":" @abstr_number ","commerce_stock":null,"rdf_mapping":[],"attribute_fields":["field_shoe_size"],"commerce_price_formatted":"$ @abstr_number . @abstr_number ","field_shoe_size_entities":{" @abstr_number ":{"tid":" @abstr_number ","vid":" @abstr_number ","name":" @abstr_number ","description":"","format":"filtered_html","weight":" @abstr_number ","vocabulary_machine_name":"shoe_size","rdf_mapping":{"rdftype":["skos:Concept"],"name":{"predicates":["rdfs:label","skos:prefLabel"]},"description":{"predicates":["skos:definition"]},"vid":{"predicates":["skos:inScheme"],"type":"rel"},"parent":{"predicates":["skos:broader"],"type":"rel"}}}}}}
    
      ===============CREATE NODE PRODUCT==========  node product is the main container that holds all variations
      ids = prodct ids from call aboce CREATE product
    
      POST http://fitmoo.plsekwerks.com/fit_store/product
      Cookie: SESSe @abstr_number a @abstr_number a @abstr_number c @abstr_number a @abstr_number c @abstr_number b @abstr_number cb @abstr_number f @abstr_number =pIuj @abstr_number EEex @abstr_number MoJ @abstr_number AEGctHKvFCIFSMcDRTheU @abstr_number HevpYUM
      X-CSRF-Token: frGgOzjJPzrQBHi- @abstr_number ghxVs @abstr_number rDtGEVDMxNGjgW @abstr_number mA
      Content-Type: application/json
      {
            "title": "title @abstr_number ",
            "sku": "sku @abstr_number ",
            "node": "true",  (!!!!!!!!!!STRING!!!!!!!!!! don't need "false" you create simple commerce_product) 
            "description": "description", 
            "type": "shoes",
            "ids": [
                  {
                   " @abstr_number ": " @abstr_number ",
                  " @abstr_number ": " @abstr_number "
                  }
            ]
      }
    
       -- response --
      {"type":"shoes","title":"title @abstr_number ","uid":" @abstr_number ","status": @abstr_number ,"language":"und","body":{"und":[{"value":"description"}]},"field_product":{"und":[{"product_id":" @abstr_number "}]},"created": @abstr_number ,"changed": @abstr_number ,"timestamp": @abstr_number ,"log":"","nid":" @abstr_number ","comment": @abstr_number ,"promote": @abstr_number ,"sticky": @abstr_number ,"tnid": @abstr_number ,"translate": @abstr_number ,"vid":" @abstr_number "}
    
      =================GET NODE PRODUCT============
      GET http://fitmoo.plsekwerks.com/fit_store/node/ @abstr_number 
      Cookie: SESSe @abstr_number a @abstr_number a @abstr_number c @abstr_number a @abstr_number c @abstr_number b @abstr_number cb @abstr_number f @abstr_number =pIuj @abstr_number EEex @abstr_number MoJ @abstr_number AEGctHKvFCIFSMcDRTheU @abstr_number HevpYUM
      X-CSRF-Token: frGgOzjJPzrQBHi- @abstr_number ghxVs @abstr_number rDtGEVDMxNGjgW @abstr_number mA
      -- response --
      {"vid":" @abstr_number ","uid":" @abstr_number ","title":"title @abstr_number ","log":"","status":" @abstr_number ","comment":" @abstr_number ","promote":" @abstr_number ","sticky":" @abstr_number ","nid":" @abstr_number ","type":"shoes","language":"und","created":" @abstr_number ","changed":" @abstr_number ","tnid":" @abstr_number ","translate":" @abstr_number ","revision_timestamp":" @abstr_number ","revision_uid":" @abstr_number ","body":{"und":[{"value":"description","summary":null,"format":null,"safe_value":"description","safe_summary":""}]},"field_gender":[],"field_brand":[],"field_product":{"und":[{"product_id":" @abstr_number "}]},"rdf_mapping":{"rdftype":["sioc:Item","foaf:Document"],"title":{"predicates":["dc:title"]},"created":{"predicates":["dc:date","dc:created"],"datatype":"xsd:dateTime","callback":"date_iso @abstr_number "},"changed":{"predicates":["dc:modified"],"datatype":"xsd:dateTime","callback":"date_iso @abstr_number "},"body":{"predicates":["content:encoded"]},"uid":{"predicates":["sioc:has_creator"],"type":"rel"},"name":{"predicates":["foaf:name"]},"comment_count":{"predicates":["sioc:num_replies"],"datatype":"xsd:integer"},"last_activity":{"predicates":["sioc:last_activity_date"],"datatype":"xsd:dateTime","callback":"date_iso @abstr_number "}},"cid": @abstr_number ,"last_comment_timestamp":" @abstr_number ","last_comment_name":"","last_comment_uid":" @abstr_number ","comment_count": @abstr_number ,"name":"testuser","picture":" @abstr_number ","data":"b: @abstr_number ;","path":"http://fitmoo.plsekwerks.com/node/ @abstr_number "}
    

**Edit Product**

Any product updates

Request:
    
    
     - productID
     - price
     - quantity
     - image url
     - size
     - uid
    

Responce:
    
    
     - OK
     - productID
    

**Delete Product**

Request:
    
    
     - productID
     - uid
    

# Buy Flow

User clicks buy now in Fitmoo. Fitmoo makes a request to Drupal to login the user, on successfull return, fitmoo creates a modal window with iframe to call createOrder menu.

Drupal creates order as the loggedin user and displays a checkout form in iframe. User completes the checkout in iframe after confimration page, modal is closed. Confirmation emails go to Buyer and Seller

# API

**Click Buy - login/register**

Fitmoo if uid then login user, if no uid register user -- see API above. After register user is logged in

**Create Order**

iframe url request to drupal menu example: store.fitmoo.com/createorder/productID/quantity

Drupal add order to cart -> redirect drupal_goto('checkout')

present checkout form (minimal theme)
