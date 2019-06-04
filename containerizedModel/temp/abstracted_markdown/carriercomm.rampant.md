# Rampant

Rampant launches your Node.js application into a profiler session using @abstr_hyperlink paired with the Developer Tools frontend inside @abstr_hyperlink .

## Caveats

@abstr_number . Requires Mac OS X. @abstr_number . Requires @abstr_hyperlink . @abstr_number . Does not work if your app depends on STDIN.

## Install
    
    
    npm install rampant
    

## Usage
    
    
    ./node_modules/.bin/rampant /path/to/your/file.js [arguments]
    

Note: You must provide a fully-qualified path for your script to workaround my shortcomings of path handling. @abstr_hyperlink 

## Disclaimer

Rampant depends on bleeding edge Google Chrome to work correctly with @abstr_hyperlink and Node.js. If you expect this software to work flawlessly, you've chosen the wrong software.

As of the time of this writing, using Rampant is a lot easier than using node-webkit-agent by hand.

If you need a debugger, check out @abstr_hyperlink because node-webkit-agent does not implement the debugger protocol.

## License

BSD. See LICENSE file.

## Author

Reid Burke, Yahoo! Inc.
