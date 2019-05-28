@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

_:star: Please star this project if you find it useful!_

A tiny, cross-platform, module based, MIT-licensed web server for .NET Framework and .NET Core

  * Written entirely in C#
  * .NET Core portable library
  * Network operations use the async/await pattern: Responses are handled asynchronously
  * Cross-platform[ @abstr_number ]: tested in Mono @abstr_number . @abstr_number .x on Windows and on a custom Yocto image for the Raspberry Pi
  * Extensible: Write your own modules -- For example, video streaming, UPnP, etc. Check out @abstr_hyperlink for additional modules.
  * Small memory footprint
  * Create REST APIs quickly with the out-of-the-box Web Api module
  * Serve static files with @abstr_number line of code (also out-of-the-box)
  * Handle sessions with the built-in LocalSessionWebModule
  * WebSockets support (see notes below)
  * CORS support. Origin, Header and Method validation with OPTIONS preflight
  * Supports HTTP @abstr_number Partial Content
  * @abstr_hyperlink Middleware support via @abstr_hyperlink .



_For detailed usage and REST API implementation, download the code and take a look at the Samples project_

**Some usage scenarios** :

  * Write a cross-platform GUI entirely in CSS/HTML/JS
  * Write a game using Babylon.js and make EmbedIO your serve your code and assets
  * Create GUIs for Windows services or Linux daemons
  * Works well with @abstr_hyperlink - add SQLite support in minutes!
  * Write client applications with real-time communication between them



Some notes regarding WebSocket support:

| Runtime | WebSocket support | Notes | | --- | --- | --- | | NET @abstr_number | Yes | Support Win @abstr_number + OS using a custom System.Net implementation based on Mono and @abstr_hyperlink | | NET @abstr_number | Yes | Support Win @abstr_number + OS using native System.Net library | | MONO | Yes | Support Windows and Linux using custom System.Net implementation based on Mono and @abstr_hyperlink | | NETCORE @abstr_number | Yes | Support using a custom System.Net implementation based on Mono and @abstr_hyperlink |

EmbedIO before version @abstr_number . @abstr_number . @abstr_number uses Newtonsoft JSON and an internal logger subsystem based on ILog interface.

## NuGet Installation:

@abstr_code_section 

## Basic Example:

_Please note the comments are the important part here. More info is available in the samples._

@abstr_code_section 

## Fluent Example:

Many extension methods are available. This allows you to create a web server instance in a fluent style by dotting in configuration options.

@abstr_code_section 

## REST API Example:

The WebApi module supports two routing strategies: Wildcard and Regex. By default, and in order to maintain backwards compatibility, the WebApi module will use the **Wildcard Routing Strategy** and match routes using the asterisk `*` character in the route. **For example:** \- The route `/api/people/*` will match any request with a URL starting with the two first URL segments `api` and `people` and ending with anything. The route `/api/people/hello` will be matched. \- You can also use wildcards in the middle of the route. The route `/api/people/*/details` will match requests starting with the two first URL segments `api` and `people`, and ending with a `details` segment. The route `/api/people/hello/details` will be matched. 

_Note that most REST services can be designed with this simpler Wildcard routing startegy. However, the Regex matching strategy is the current recommended approach as we might be deprecating the Wildcard strategy altogether_

On the other hand, the **Regex Routing Strategy** will try to match and resolve the values from a route template, in a similar fashion to Microsoft's Web API @abstr_number . A method with the following route `/api/people/{id}` is going to match any request URL with three segments: the first two `api` and `people` and the last one is going to be parsed or converted to the type in the `id` argument of the handling method signature. Please read on if this was confusing as it is much simpler than it sounds. Additionally, you can put multiple values to match, for example `/api/people/{mainSkill}/{age}`, and receive the parsed values from the URL straight into the arguments of your handler method.

_During server setup:_

@abstr_code_section 

_And our controller class (using Regex Strategy) looks like:_

@abstr_code_section 

_Or if you want to use the Wildcard strategy (which is the default):_

@abstr_code_section 

## WebSockets Example:

_During server setup:_

@abstr_code_section 

_And our web sockets server class looks like:_

@abstr_code_section 

## Notes

[ @abstr_number ] - EmbedIO uses lowercase URL parts. In Windows systems this is the expected behaviour but in Unix systems using MONO please refer to @abstr_hyperlink if you want to work with case insensitive URL parts.
