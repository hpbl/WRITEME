# Vegeta @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Vegeta is a versatile HTTP load testing tool built out of a need to drill HTTP services with a constant request rate. It can be used both as a command line utility and a library.

@abstr_image 

## Install

### Pre-compiled executables

Get them @abstr_hyperlink .

### Homebrew on Mac OS X

You can install Vegeta using the @abstr_hyperlink package manager on Mac OS X: @abstr_code_section 

### Source

You need `go` installed and `GOBIN` in your `PATH`. Once that is done, run the command: @abstr_code_section 

## Contributing

See CONTRIBUTING.md.

## Usage manual

@abstr_code_section 

#### `-cpus`

Specifies the number of CPUs to be used internally. It defaults to the amount of CPUs available in the system.

#### `-profile`

Specifies which profiler to enable during execution. Both _cpu_ and _heap_ profiles are supported. It defaults to none.

#### `-version`

Prints the version and exits.

### `attack`

@abstr_code_section 

#### `-body`

Specifies the file whose content will be set as the body of every request unless overridden per attack target, see `-targets`.

#### `-cert`

Specifies the PEM encoded TLS client certificate file to be used with HTTPS requests. If `-key` isn't specified, it will be set to the value of this flag.

#### `-connections`

Specifies the maximum number of idle open connections per target host.

#### `-duration`

Specifies the amount of time to issue request to the targets. The internal concurrency structure's setup has this value as a variable. The actual run time of the test can be longer than specified due to the responses delay. Use @abstr_number for an infinite attack.

#### `-header`

Specifies a request header to be used in all targets defined, see `-targets`. You can specify as many as needed by repeating the flag.

#### `-http @abstr_number`

Specifies whether to enable HTTP/ @abstr_number requests to servers which support it.

#### `-insecure`

Specifies whether to ignore invalid server TLS certificates.

#### `-keepalive`

Specifies whether to reuse TCP connections between HTTP requests.

#### `-key`

Specifies the PEM encoded TLS client certificate private key file to be used with HTTPS requests.

#### `-laddr`

Specifies the local IP address to be used.

#### `-lazy`

Specifies whether to read the input targets lazily instead of eagerly. This allows streaming targets into the attack command and reduces memory footprint. The trade-off is one of added latency in each hit against the targets.

#### `-output`

Specifies the output file to which the binary results will be written to. Made to be piped to the report command input. Defaults to stdout.

#### `-rate`

Specifies the requests per second rate to issue against the targets. The actual request rate can vary slightly due to things like garbage collection, but overall it should stay very close to the specified.

#### `-redirects`

Specifies the max number of redirects followed on each request. The default is @abstr_number . When the value is - @abstr_number , redirects are not followed but the response is marked as successful.

#### `-root-certs`

Specifies the trusted TLS root CAs certificate files as a comma separated list. If unspecified, the default system CAs certificates will be used.

#### `-targets`

Specifies the attack targets in a line separated file, defaulting to stdin. The format should be as follows, combining any or all of the following:

Simple targets @abstr_code_section 

Targets with custom headers @abstr_code_section 

Targets with custom bodies @abstr_code_section 

Targets with custom bodies and headers @abstr_code_section 

#### `-timeout`

Specifies the timeout for each request. The default is @abstr_number which disables timeouts.

#### `-workers`

Specifies the initial number of workers used in the attack. The actual number of workers will increase if necessary in order to sustain the requested rate.

### report

@abstr_code_section 

#### `-inputs`

Specifies the input files to generate the report of, defaulting to stdin. These are the output of vegeta attack. You can specify more than one (comma separated) and they will be merged and sorted before being used by the reports.

#### `-output`

Specifies the output file to which the report will be written to.

#### `-reporter`

Specifies the kind of report to be generated. It defaults to text.

##### `text`

@abstr_code_section 

##### `json`

@abstr_code_section 

##### `plot`

Generates an HTML @abstr_number page with an interactive plot based on @abstr_hyperlink . Click and drag to select a region to zoom into. Double click to zoom out. Input a different number on the bottom left corner input field to change the moving average window size (in data points).

Each point on the plot shows a request, the X axis represents the time at the start of the request and the Y axis represents the time taken to complete that request.

@abstr_image 

##### `hist`

Computes and prints a text based histogram for the given buckets. Each bucket upper bound is non-inclusive. @abstr_code_section 

### `dump`

@abstr_code_section 

#### `-inputs`

Specifies the input files containing attack results to be dumped. You can specify more than one (comma separated).

#### `-output`

Specifies the output file to which the dump will be written to.

#### `-dumper`

Specifies the dump format.

##### `json`

Dumps attack results as JSON objects.

##### `csv`

Dumps attack results as CSV records with six columns. The columns are: unix timestamp in ns since epoch, http status code, request latency in ns, bytes out, bytes in, and lastly the error.

## Usage: Distributed attacks

Whenever your load test can't be conducted due to Vegeta hitting machine limits such as open files, memory, CPU or network bandwidth, it's a good idea to use Vegeta in a distributed manner.

In a hypothetical scenario where the desired attack rate is @abstr_number k requests per second, let's assume we have @abstr_number machines with `vegeta` installed.

Make sure open file descriptor and process limits are set to a high number for your user **on each machine** using the `ulimit` command.

We're ready to start the attack. All we need to do is to divide the intended rate by the number of machines, and use that number on each attack. Here we'll use @abstr_hyperlink for orchestration.

@abstr_code_section 

After the previous command finishes, we can gather the result files to use on our report.

@abstr_code_section 

The `report` command accepts multiple result files in a comma separated list. It'll read and sort them by timestamp before generating reports.

@abstr_code_section 

## Usage (Library)

@abstr_code_section 

#### Limitations

There will be an upper bound of the supported `rate` which varies on the machine being used. You could be CPU bound (unlikely), memory bound (more likely) or have system resource limits being reached which ought to be tuned for the process execution. The important limits for us are file descriptors and processes. On a UNIX system you can get and set the current soft-limit values for a user. @abstr_code_section Just pass a new number as the argument to change it.

## License

See LICENSE.

## Donate

If you use and love Vegeta, please consider sending some Satoshi to `@abstr_number MDmKC @abstr_number ve @abstr_number Upxt @abstr_number KoNM @abstr_number x @abstr_number qdXHFK @abstr_number iW @abstr_number`. In case you want to be mentioned as a sponsor, let me know!
