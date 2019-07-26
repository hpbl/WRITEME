# RestSharp - Simple .NET REST Client

@abstr_hyperlink 

@abstr_hyperlink 

###  @abstr_hyperlink - @abstr_hyperlink - @abstr_hyperlink 

### License: Apache License @abstr_number . @abstr_number

### Note on RestSharp.Signed

The `RestSharp` package is now signed so there is no need to install `RestSharp.Signed`, which is obsolete from v @abstr_number . @abstr_number . @abstr_number .

### Note on JSON serialization

Some time ago, we have decided to get rid of the reference to `Newtonsoft.Json` package. The intentions were good, we thought that the `SimpleJson` library would be a good replacement that can be embedded to the library itself, so we don't need to have any external references.

However, as many good intentions, that change created more issues than it solved. The number of issues on GitHub that are related to JSON (de)serialization is growing and `SimpleJson` is long abandoned. We faced a choice to start maintaining `SimpleJson` ourselves or use something else.

Since as per today almost every .NET project has a direct or indirect reference to `Newtonsoft.Json`, we decided to bring it back as a dependency and get rid of `SimpleJson`. This will be done in RestSharp v @abstr_number , the next major version.

To prepare for this change, we made quite a few changes in how serialization works in RestSharp. Before, objects were serialized when added to the `RestRequest` by using one of the `AddBody` methods. That made it impossible to assign a custom serializer on the client level, so it should have been done for each request. In v @abstr_number . @abstr_number body parameter is serialized just before executing the request. Delaying the serialization allowed us to add the client-level serializer.

It is still possible to assign custom (de)serializer per request, as before. In addition to that, you can use the new method `IRestClient.UseSerializer(IRestSerializer restSerializer)`. The `IRestSerializer` interface has methods for serialization and deserialization. Default serializers are the same as before.

From v @abstr_number . @abstr_number . @abstr_number you can use `Newtonsoft.Json` for the `RestClient` by using code from this @abstr_hyperlink .

In addition to that, you can change the default XML serialization to use the `System.Xml` serializer, also known as `DotNetXmlSerializer` and `DotNetXmlDeserializer`. In v @abstr_number . @abstr_number . @abstr_number , you can simply write:

@abstr_code_section 

### Features

  * Assemblies for .NET @abstr_number . @abstr_number . @abstr_number and .NET Standard @abstr_number . @abstr_number 
  * Easy installation using @abstr_hyperlink for most .NET flavors (signed)
  * Automatic XML and JSON deserialization
  * Supports custom serialization and deserialization via ISerializer and IDeserializer
  * Fuzzy element name matching ('product_id' in XML/JSON will match C# property named 'ProductId')
  * Automatic detection of type of content returned
  * GET, POST, PUT, PATCH, HEAD, OPTIONS, DELETE, COPY supported
  * Other non-standard HTTP methods also supported
  * OAuth @abstr_number , OAuth @abstr_number , Basic, NTLM and Parameter-based Authenticators included
  * Supports custom authentication schemes via IAuthenticator
  * Multi-part form/file uploads

@abstr_code_section 



