_wttr.in — the right way to check the weather!_

wttr.in is a console-oriented weather forecast service that supports various information representation methods like terminal-oriented ANSI-sequences for console HTTP clients (curl, httpie, or wget), HTML for web browsers, or PNG for graphical viewers.

wttr.in uses @abstr_hyperlink for visualization and various data sources for weather forecast information.

You can see it running here: @abstr_hyperlink .

## Usage

You can access the service from a shell or from a Web browser like this:
    
    
    $ curl wttr.in
    Weather for City: Paris, France
    
         \   /     Clear
          .-.       @abstr_number  –  @abstr_number  °C     
       ― (   ) ―   ↑  @abstr_number  km/h      
          `-’       @abstr_number  km          
         /   \      @abstr_number . @abstr_number  mm
    

Here is an actual weather report for your location (it's live!):

@abstr_image 

(It's not your actual location - GitHub's CDN hides your real IP address with its own IP address, but it's still a live weather report in your language.)

Want to get the weather information for a specific location? You can add the desired location to the URL in your request like this:
    
    
    $ curl wttr.in/London
    $ curl wttr.in/Moscow
    

If you omit the location name, you will get the report for your current location based on your IP address.

Use @abstr_number -letter airport codes in order to get the weather information at a certain airport:
    
    
    $ curl wttr.in/muc      # Weather for IATA: muc, Munich International Airport, Germany
    $ curl wttr.in/ham      # Weather for IATA: ham, Hamburg Airport, Germany
    

Let's say you'd like to get the weather for a geographical location other than a town or city - maybe an attraction in a city, a mountain name, or some special location. Add the character `~` before the name to look up that special location name before the weather is then retrieved:
    
    
    $ curl wttr.in/~Vostok+Station
    $ curl wttr.in/~Eiffel+Tower
    $ curl wttr.in/~Kilimanjaro
    

For these examples, you'll see a line below the weather forecast output that shows the geolocation results of looking up the location:
    
    
    Location: Vostok Station, станция Восток, AAT, Antarctica [- @abstr_number . @abstr_number , @abstr_number . @abstr_number ]
    Location: Tour Eiffel,  @abstr_number , Avenue Anatole France, Gros-Caillou,  @abstr_number e, Paris, Île-de-France,  @abstr_number , France [ @abstr_number . @abstr_number , @abstr_number . @abstr_number ]
    Location: Kilimanjaro, Northern, Tanzania [- @abstr_number . @abstr_number , @abstr_number . @abstr_number ]
    

You can also use IP-addresses (direct) or domain names (prefixed with `@`) to specify a location:
    
    
    $ curl wttr.in/@github.com
    $ curl wttr.in/@msu.ru
    

To get detailed information online, you can access the @abstr_hyperlink page:
    
    
    $ curl wttr.in/:help
    

### Weather Units

By default the USCS units are used for the queries from the USA and the metric system for the rest of the world. You can override this behavior by adding `?u` or `?m` to a URL like this:
    
    
    $ curl wttr.in/Amsterdam?u
    $ curl wttr.in/Amsterdam?m
    

## Supported output formats

wttr.in currently supports three output formats:

  * ANSI for the terminal;
  * ANSI for the terminal, one-line mode;
  * HTML for the browser;
  * PNG for the graphical viewers.



The ANSI and HTML formats are selected basing on the User-Agent string. The PNG format can be forced by adding `.png` to the end of the query:
    
    
    $ wget wttr.in/Paris.png
    

You can use all of the options with the PNG-format like in an URL, but you have to separate them with `_` instead of `?` and `&`:
    
    
    $ wget wttr.in/Paris_ @abstr_number tqp_lang=fr.png
    

Useful options for the PNG format:

  * `t` for transparency (`transparency= @abstr_number`);
  * transparency= @abstr_number .. @abstr_number for a custom transparency level.



Transparency is a useful feature when weather PNGs are used to add weather data to pictures:
    
    
    $ convert source.jpg <( curl wttr.in/Oymyakon_tqp @abstr_number .png ) -geometry + @abstr_number + @abstr_number  -composite target.jpg
    

In this example:

  * `source.jpg` \- source file;
  * `target.jpg` \- target file;
  * `Oymyakon` \- name of the location;
  * `tqp @abstr_number` \- options (recommended).



@abstr_image 

## One-line output

For one-line output format, specify additional URL parameter `format`:

@abstr_code_section 

Available preconfigured formats: @abstr_number , @abstr_number , @abstr_number , @abstr_number and the custom format using the percent notation (see below).

You can sepcify multiple locations separated with `:` (for repeating queries):

@abstr_code_section Or to process all this queries at once:

@abstr_code_section 

To specify your own custom output format, use the special `%`-notation:

@abstr_code_section 

So, these two calls are the same:

@abstr_code_section Keep in mind, that when using in `tmux.conf`, you have to escape `%` with `%`, i.e. write there `%%` instead of `%`.

In progams, that are querying the service automatically (such as tmux),it is better to use some reasonable update interval. In tmux, you can configure it with `status-interval`.

If several, `:` separated locations, are specified in the query, specify update period as an additional query parameter `period=`: @abstr_code_section @abstr_image 

To see emojis in terminal, you need:

@abstr_number . Terminal support for emojis (was added to Cairo @abstr_number . @abstr_number . @abstr_number ); @abstr_number . Font with emojis support.

For the Emoji font, we recommend _Noto Color Emoji_ , and a good alternative option would be the _Emoji One_ font; both of them support all necessary emoji glyphs.

Font configuration:

@abstr_code_section 

(to apply the configuration, run `fc-cache -f -v`)

## Moon phases

wttr.in can also be used to check the phase of the Moon. This example shows how to see the current Moon phase:
    
    
    $ curl wttr.in/Moon
    

Get the Moon phase for a particular date by adding `@YYYY-MM-DD`:
    
    
    $ curl wttr.in/Moon@ @abstr_number - @abstr_number - @abstr_number
    

The Moon phase information uses @abstr_hyperlink as its backend.

## Internationalization and localization

wttr.in supports multilingual locations names that can be specified in any language in the world (it may be surprising, but many locations in the world don't have an English name).

The query string should be specified in Unicode (hex-encoded or not). Spaces in the query string must be replaced with `+`:
    
    
    $ curl wttr.in/станция+Восток
    Weather report: станция Восток
    
                   Overcast
          .--.     - @abstr_number  – - @abstr_number  °C
       .-(    ).   ↑  @abstr_number  km/h
      (___.__)__)   @abstr_number  km
                    @abstr_number . @abstr_number  mm
    

The language used for the output (except the location name) does not depend on the input language and it is either English (by default) or the preferred language of the browser (if the query was issued from a browser) that is specified in the query headers (`Accept-Language`).

The language can be set explicitly when using console clients by using command-line options like this:
    
    
    curl -H "Accept-Language: fr" wttr.in
    http GET wttr.in Accept-Language:ru
    

The preferred language can be forced using the `lang` option:
    
    
    $ curl wttr.in/Berlin?lang=de
    

The third option is to choose the language using the DNS name used in the query:
    
    
    $ curl de.wttr.in/Berlin
    

wttr.in is currently translated into @abstr_number languages, and the number of supported languages is constantly growing.

See @abstr_hyperlink to learn more about the translation process, to see the list of supported languages and contributors, or to know how you can help to translate wttr.in in your language.

@abstr_image 

## Installation

To install the application:

@abstr_number . Install external dependencies @abstr_number . Install Python dependencies used by the service @abstr_number . Configure IP @abstr_number Location (optional) @abstr_number . Get a WorldWeatherOnline API and configure wego @abstr_number . Configure wttr.in @abstr_number . Configure the HTTP-frontend service

### Install external dependencies

wttr.in has the following external dependencies:

  * @abstr_hyperlink , wego dependency
  * @abstr_hyperlink , weather client for terminal



After you install @abstr_hyperlink , install `wego`:
    
    
    $ go get -u github.com/schachmat/wego
    $ go install github.com/schachmat/wego
    

### Install Python dependencies

Python requirements:

  * Flask
  * geoip @abstr_number 
  * geopy
  * requests
  * gevent



If you want to get weather reports as PNG files, you'll also need to install:

  * PIL
  * pyte (>= @abstr_number . @abstr_number )
  * necessary fonts



You can install most of them using `pip`. 

If `virtualenv` is used:
    
    
    $ virtualenv ve
    $ ve/bin/pip install -r requirements.txt
    $ ve/bin/python bin/srv.py
    

Also, you need to install the geoip @abstr_number database. You can use a free database GeoLite @abstr_number that can be downloaded from (http://dev.maxmind.com/geoip/geoip @abstr_number /geolite @abstr_number /).

### Configure IP @abstr_number Location (optional)

If you want to use the IP @abstr_number location service for IP-addresses that are not covered by GeoLite @abstr_number , you have to obtain a API key of that service, and after that save into the `~/.ip @abstr_number location.key` file:

@abstr_code_section 

If you don't have this file, the service will be silently skipped (it is not a big problem, because the MaxMind database is pretty good).

### Get a WorldWeatherOnline key and configure wego

To get a WorldWeatherOnline API key, you must register here:
    
    
    https://developer.worldweatheronline.com/auth/register
    

After you have a WorldWeatherOnline key, you can save it into the WWO key file: `~/.wwo.key`

Also, you have to specify the key in the `wego` configuration:
    
    
    $ cat ~/.wegorc 
    {
        "APIKey": " @abstr_number XXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "City": "London",
        "Numdays":  @abstr_number ,
        "Imperial": false,
        "Lang": "en"
    }
    

The `City` parameter in `~/.wegorc` is ignored.

### Configure wttr.in

Configure the following environment variables that define the path to the local `wttr.in` installation, to the GeoLite database, and to the `wego` installation. For example:
    
    
    export WTTR_MYDIR="/home/igor/wttr.in"
    export WTTR_GEOLITE="/home/igor/wttr.in/GeoLite @abstr_number -City.mmdb"
    export WTTR_WEGO="/home/igor/go/bin/wego"
    export WTTR_LISTEN_HOST=" @abstr_number . @abstr_number . @abstr_number . @abstr_number "
    export WTTR_LISTEN_PORT=" @abstr_number "
    

### Configure the HTTP-frontend service

It's recommended that you also configure the web server that will be used to access the service:
    
    
    server {
        listen [::]: @abstr_number ;
        server_name  wttr.in *.wttr.in;
        access_log  /var/log/nginx/wttr.in-access.log  main;
        error_log  /var/log/nginx/wttr.in-error.log;
    
        location / {
            proxy_pass         http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number ;
    
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            proxy_set_header   X-Forwarded-For  $remote_addr;
    
            client_max_body_size        @abstr_number m;
            client_body_buffer_size     @abstr_number k;
    
            proxy_connect_timeout       @abstr_number ;
            proxy_send_timeout          @abstr_number ;
            proxy_read_timeout          @abstr_number ;
    
            proxy_buffer_size           @abstr_number k;
            proxy_buffers               @abstr_number   @abstr_number k;
            proxy_busy_buffers_size     @abstr_number k;
            proxy_temp_file_write_size  @abstr_number k;
    
            expires                    off;
        }
    }
    
