#  @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

A fast and unfancy micro web framework for Golang.

## Features

  * Fast HTTP router which smartly prioritize routes.
  * Extensible middleware, supports: 
    * `echo.MiddlewareFunc`
    * `func(echo.HandlerFunc) echo.HandlerFunc`
    * `echo.HandlerFunc`
    * `func(*echo.Context) error`
    * `func(http.Handler) http.Handler`
    * `http.Handler`
    * `http.HandlerFunc`
    * `func(http.ResponseWriter, *http.Request)`
  * Extensible handler, supports: 
    * `echo.HandlerFunc`
    * `func(*echo.Context) error`
    * `http.Handler`
    * `http.HandlerFunc`
    * `func(http.ResponseWriter, *http.Request)`
  * Sub-router/Groups
  * Handy functions to send variety of HTTP response: 
    * HTML
    * HTML via templates
    * JSON
    * String 
    * NoContent
    * Redirect
    * Error
  * Build-in support for: 
    * Favicon
    * Index file
    * Static files
    * WebSocket
  * Centralized HTTP error handling.
  * Customizable HTTP request binding function.
  * Customizable HTTP response rendering function, allowing you to use any HTML template engine.



## Performance

Based on [vishr/go-http-routing-benchmark] (https://github.com/vishr/go-http-routing-benchmark), June @abstr_number , @abstr_number .

#####  @abstr_hyperlink 

> Echo: @abstr_number ns/op, @abstr_number B/op, @abstr_number allocs/op

@abstr_image 

@abstr_code_section 

## Installation

@abstr_code_section 

##  @abstr_hyperlink 

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



##  @abstr_hyperlink 

## Echo System

Community created packages for Echo

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Contribute

**Use issues for everything**

  * Report problems
  * Discuss before sending pull request
  * Suggest new features
  * Improve/fix documentation



## Credits

  * @abstr_hyperlink - Author
  * @abstr_hyperlink - Consultant
  * @abstr_hyperlink 



## License

@abstr_hyperlink 
