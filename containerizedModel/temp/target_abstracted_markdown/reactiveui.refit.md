@abstr_image 

## Refit: The automatic type-safe REST library for .NET Core, Xamarin and .NET

@abstr_hyperlink 

||Refit|Refit.HttpClientFactory| |-|-|-| | _NuGet_ | @abstr_hyperlink | @abstr_hyperlink | | _MyGet_ | @abstr_image | @abstr_image |

CI Feed: `https://www.myget.org/F/refit/api/v @abstr_number /index.json`

Refit is a library heavily inspired by Square's @abstr_hyperlink library, and it turns your REST API into a live interface:

@abstr_code_section 

The `RestService` class generates an implementation of `IGitHubApi` that uses `HttpClient` to make its calls:

@abstr_code_section 

### Where does this work?

Refit currently supports the following platforms and any .NET Standard @abstr_number . @abstr_number target:

  * UWP
  * Xamarin.Android
  * Xamarin.Mac
  * Xamarin.iOS 
  * Desktop .NET @abstr_number . @abstr_number . @abstr_number 
  * .NET Core



#### Note about .NET Core

For .NET Core build-time support, you must use the .NET Core @abstr_number SDK. You can target any supported platform in your library, long as the @abstr_number . @abstr_number + SDK is used at build-time.

### API Attributes

Every method must have an HTTP attribute that provides the request method and relative URL. There are six built-in annotations: Get, Post, Put, Delete, Patch and Head. The relative URL of the resource is specified in the annotation.

@abstr_code_section 

You can also specify query parameters in the URL:

@abstr_code_section 

A request URL can be updated dynamically using replacement blocks and parameters on the method. A replacement block is an alphanumeric string surrounded by { and }. 

If the name of your parameter doesn't match the name in the URL path, use the `AliasAs` attribute.

@abstr_code_section 

Parameters that are not specified as a URL substitution will automatically be used as query parameters. This is different than Retrofit, where all parameters must be explicitly specified.

The comparison between parameter name and URL parameter is _not_ case-sensitive, so it will work correctly if you name your parameter `groupId` in the path `/group/{groupid}/show` for example.

@abstr_code_section 

Round-tripping route parameter syntax: Forward slashes aren't encoded when using a double-asterisk (**) catch-all parameter syntax.

During link generation, the routing system encodes the value captured in a double-asterisk (**) catch-all parameter (for example, {**myparametername}) except the forward slashes.

The type of round-tripping route parameter must be string.

@abstr_code_section 

### Dynamic Querystring Parameters

If you specify an `object` as a query parameter, all public properties which are not null are used as query parameters. This previously only applied to GET requests, but has now been expanded to all HTTP request methods, partly thanks to Twitter's hybrid API that insists on non-GET requests with querystring parameters. Use the `Query` attribute the change the behavior to 'flatten' your query parameter object. If using this Attribute you can specify values for the Delimiter and the Prefix which are used to 'flatten' the object.

@abstr_code_section 

A similar behavior exists if using a Dictionary, but without the advantages of the `AliasAs` attributes and of course no intellisense and/or type safety.

You can also specify querystring parameters with [Query] and have them flattened in non-GET requests, similar to: @abstr_code_section 

Where `TweetParams` is a POCO, and properties will also support `[AliasAs]` attributes.

### Collections as Querystring parameters

Use the `Query` attribute to specify format in which collections should be formatted in query string

@abstr_code_section 

### Body content

One of the parameters in your method can be used as the body, by using the Body attribute:

@abstr_code_section 

There are four possibilities for supplying the body data, depending on the type of the parameter:

  * If the type is `Stream`, the content will be streamed via `StreamContent`
  * If the type is `string`, the string will be used directly as the content unless `[Body(BodySerializationMethod.Json)]` is set which will send it as a `StringContent`
  * If the parameter has the attribute `[Body(BodySerializationMethod.UrlEncoded)]`, the content will be URL-encoded (see form posts below)
  * For all other types, the object will be serialized using the content serializer specified in RefitSettings (JSON is the default).



#### Buffering and the `Content-Length` header

By default, Refit streams the body content without buffering it. This means you can stream a file from disk, for example, without incurring the overhead of loading the whole file into memory. The downside of this is that no `Content-Length` header is set _on the request_. If your API needs you to send a `Content-Length` header with the request, you can disable this streaming behavior by setting the `buffered` argument of the `[Body]` attribute to `true`:

@abstr_code_section 

#### JSON content

JSON requests and responses are serialized/deserialized using Json.NET. By default, Refit will use the serializer settings that can be configured by setting _Newtonsoft.Json.JsonConvert.DefaultSettings_:

@abstr_code_section 

As these are global settings they will affect your entire application. It might be beneficial to isolate the settings for calls to a particular API. When creating a Refit generated live interface, you may optionally pass a `RefitSettings` that will allow you to specify what serializer settings you would like. This allows you to have different serializer settings for separate APIs:

@abstr_code_section 

Property serialization/deserialization can be customised using Json.NET's JsonProperty attribute:

@abstr_code_section 

#### XML Content

XML requests and responses are serialized/deserialized using _System.Xml.Serialization.XmlSerializer_. By default, Refit will use JSON content serialization, to use XML content configure the ContentSerializer to use the `XmlContentSerializer`:

@abstr_code_section 

Property serialization/deserialization can be customised using attributes found in the _System.Xml.Serialization_ namespace:

@abstr_code_section 

The _System.Xml.Serialization.XmlSerializer_ provides many options for serializing, those options can be set by providing an `XmlContentSerializerSettings` to the `XmlContentSerializer` constructor:

@abstr_code_section 

#### Form posts

For APIs that take form posts (i.e. serialized as `application/x-www-form-urlencoded`), initialize the Body attribute with `BodySerializationMethod.UrlEncoded`.

The parameter can be an `IDictionary`:

@abstr_code_section 

Or you can just pass any object and all _public, readable_ properties will be serialized as form fields in the request. This approach allows you to alias property names using `[AliasAs("whatever")]` which can help if the API has cryptic field names:

@abstr_code_section 

If you have a type that has `[JsonProperty(PropertyName)]` attributes setting property aliases, Refit will use those too (`[AliasAs]` will take precedence where you have both). This means that the following type will serialize as `one=value @abstr_number &two=value @abstr_number`:

@abstr_code_section 

**NOTE:** This use of `AliasAs` applies to querystring parameters and form body posts, but not to response objects; for aliasing fields on response objects, you'll still need to use `[JsonProperty("full-property-name")]`.

### Setting request headers

#### Static headers

You can set one or more static request headers for a request applying a `Headers` attribute to the method:

@abstr_code_section 

Static headers can also be added to _every request in the API_ by applying the `Headers` attribute to the interface:

@abstr_code_section 

#### Dynamic headers

If the content of the header needs to be set at runtime, you can add a header with a dynamic value to a request by applying a `Header` attribute to a parameter:

@abstr_code_section 

#### Authorization (Dynamic Headers redux)

The most common reason to use headers is for authorization. Today most API's use some flavor of oAuth with access tokens that expire and refresh tokens that are longer lived.

One way to encapsulate these kinds of token usage, a custom `HttpClientHandler` can be inserted instead.   
There are two classes for doing this: one is `AuthenticatedHttpClientHandler`, which takes a `Func<Task<string>>` parameter, where a signature can be generated without knowing about the request. The other is `AuthenticatedParameterizedHttpClientHandler`, which takes a `Func<HttpRequestMessage, Task<string>>` parameter, where the signature requires information about the request (see earlier notes about Twitter's API)

For example: @abstr_code_section 

Or:

@abstr_code_section 

While HttpClient contains a nearly identical method signature, it is used differently. HttpClient.SendAsync is not called by Refit. The HttpClientHandler must be modified instead.

This class is used like so (example uses the @abstr_hyperlink library to manage auto-token refresh but the principal holds for Xamarin.Auth or any other library:

@abstr_code_section 

In the above example, any time a method that requires authentication is called, the `AuthenticatedHttpClientHandler` will try to get a fresh access token. It's up to the app to provide one, checking the expiration time of an existing access token and obtaining a new one if needed. 

#### Redefining headers

Unlike Retrofit, where headers do not overwrite each other and are all added to the request regardless of how many times the same header is defined, Refit takes a similar approach to the approach ASP.NET MVC takes with action filters — **redefining a header will replace it** , in the following order of precedence:

  * `Headers` attribute on the interface _(lowest priority)_
  * `Headers` attribute on the method
  * `Header` attribute on a method parameter _(highest priority)_

@abstr_code_section 




**Note:** This redefining behavior only applies to headers _with the same name_. Headers with different names are not replaced. The following code will result in all headers being included:

@abstr_code_section 

#### Removing headers

Headers defined on an interface or method can be removed by redefining a static header without a value (i.e. without `: <value>`) or passing `null` for a dynamic header. _Empty strings will be included as empty headers._

@abstr_code_section 

### Multipart uploads

Methods decorated with `Multipart` attribute will be submitted with multipart content type. At this time, multipart methods support the following parameter types:

  * string (parameter name will be used as name and string value as value)
  * byte array
  * Stream
  * FileInfo



The parameter name will be used as the name of the field in the multipart data. This can be overridden with the `AliasAs` attribute.

To specify the file name and content type for byte array (`byte[]`), `Stream` and `FileInfo` parameters, use of a wrapper class is required. The wrapper classes for these types are `ByteArrayPart`, `StreamPart` and `FileInfoPart`.

@abstr_code_section 

To pass a Stream to this method, construct a StreamPart object like so:

@abstr_code_section 

Note: The AttachmentName attribute that was previously described in this section has been deprecated and its use is not recommended.

### Retrieving the response

Note that in Refit unlike in Retrofit, there is no option for a synchronous network request - all requests must be async, either via `Task` or via `IObservable`. There is also no option to create an async method via a Callback parameter unlike Retrofit, because we live in the async/await future.

Similarly to how body content changes via the parameter type, the return type will determine the content returned.

Returning Task without a type parameter will discard the content and solely tell you whether or not the call succeeded:

@abstr_code_section 

If the type parameter is 'HttpResponseMessage' or 'string', the raw response message or the content as a string will be returned respectively.

@abstr_code_section 

### Using generic interfaces

When using something like ASP.NET Web API, it's a fairly common pattern to have a whole stack of CRUD REST services. Refit now supports these, allowing you to define a single API interface with a generic type:

@abstr_code_section 

Which can be used like this:

@abstr_code_section 

### Interface inheritance

When multiple services that need to be kept separate share a number of APIs, it is possible to leverage interface inheritance to avoid having to define the same Refit methods multiple times in different services:

@abstr_code_section 

In this example, the `IDerivedServiceA` interface will expose both the `GetResource` and `DeleteResource` APIs, while `IDerivedServiceB` will expose `GetResource` and `AddResource`.

#### Headers inheritance

When using inheritance, existing header attributes will passed along as well, and the inner-most ones will have precedence:

@abstr_code_section 

Here, `IAmInterfaceB.Pang()` will use `PANG` as its user agent, while `IAmInterfaceB.Foo` and `IAmInterfaceB.Ping` will use `BBB`. Note that if `IAmInterfaceB` didn't have a header attribute, `Foo` would then use the `AAA` value inherited from `IAmInterfaceA`. If an interface is inheriting more than one interface, the order of precedence is the same as the one in which the inherited interfaces are declared:

@abstr_code_section 

Here `IAmInterfaceC.Foo` would use the header attribute inherited from `IAmInterfaceA`, if present, or the one inherited from `IAmInterfaceB`, and so on for all the declared interfaces.

### Using HttpClientFactory

Refit has first class support for the ASP.Net Core @abstr_number . @abstr_number HttpClientFactory. Add a reference to `Refit.HttpClientFactory` and call the provided extension method in your `ConfigureServices` method to configure your Refit interface:

@abstr_code_section 

Optionally, a `RefitSettings` object can be included: @abstr_code_section Note that some of the properties of `RefitSettings` will be ignored because the `HttpClient` and `HttpClientHandlers` will be managed by the `HttpClientFactory` instead of Refit.

You can then get the api interface using constructor injection:

@abstr_code_section 

### Handling exceptions

To encapsulate any exceptions that may come from a service, you can catch an `ApiException` which contains request- and response information. Refit also supports the catching of validation exceptions that are thrown by a service implementing the RFC @abstr_number specification for problem details due to bad requests. For specific information on the problem details of the validation exception, simply catch `ValidationApiException`:

@abstr_code_section 
