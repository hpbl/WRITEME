================================================================

# `ngxtop` \- **real-time** metrics for nginx server (and others)

**ngxtop** parses your nginx access log and outputs useful, `top`-like, metrics of your nginx server. So you can tell what is happening with your server in real-time.
    
    
    ``ngxtop`` is designed to run in a short-period time just like the ``top`` command for troubleshooting and monitoring
    your Nginx server at the moment. If you need a long running monitoring process or storing your webserver stats in external
    monitoring / graphing system, you can try `Luameter <https://luameter.com>`_.
    

`ngxtop` tries to determine the correct location and format of nginx access log file by default, so you can just run `ngxtop` and having a close look at all requests coming to your nginx server. But it does not limit you to nginx and the default top view. `ngxtop` is flexible enough for you to configure and change most of its behaviours. You can query for different things, specify your log and format, even parse remote Apache common access log with ease. See sample usages below for some ideas about what you can do with it.

## Installation

::
    
    
    pip install ngxtop
    

Note: `ngxtop` is primarily developed and tested with python @abstr_number but also supports python @abstr_number .

## Usage

::
    
    
    Usage:
        ngxtop [options]
        ngxtop [options] (print|top|avg|sum) <var>
        ngxtop info
    
    Options:
        -l <file>, --access-log <file>  access log file to parse.
        -f <format>, --log-format <format>  log format as specify in log_format directive.
        --no-follow  ngxtop default behavior is to ignore current lines in log
                         and only watch for new lines as they are written to the access log.
                         Use this flag to tell ngxtop to process the current content of the access log instead.
        -t <seconds>, --interval <seconds>  report interval when running in follow mode [default:  @abstr_number . @abstr_number ]
    
        -g <var>, --group-by <var>  group by variable [default: request_path]
        -w <var>, --having <expr>  having clause [default:  @abstr_number ]
        -o <var>, --order-by <var>  order of output for default query [default: count]
        -n <number>, --limit <number>  limit the number of records included in report for top command [default:  @abstr_number ]
        -a <exp> ..., --a <exp> ...  add exp (must be aggregation exp: sum, avg, min, max, etc.) into output
    
        -v, --verbose  more verbose output
        -d, --debug  print every line and parsed record
        -h, --help  print this help message.
        --version  print version information.
    
        Advanced / experimental options:
        -c <file>, --config <file>  allow ngxtop to parse nginx config file for log format and location.
        -i <filter-expression>, --filter <filter-expression>  filter in, records satisfied given expression are processed.
        -p <filter-expression>, --pre-filter <filter-expression> in-filter expression to check in pre-parsing phase.
    

## Samples

Default output ~~~~~~~~~~~~~~

::
    
    
    $ ngxtop
    running for  @abstr_number  seconds,  @abstr_number  records processed:  @abstr_number . @abstr_number  req/sec
    
    Summary:
    |   count |   avg_bytes_sent |    @abstr_number xx |    @abstr_number xx |    @abstr_number xx |    @abstr_number xx |
    |---------+------------------+-------+-------+-------+-------|
    |    @abstr_number  |          @abstr_number . @abstr_number  |  @abstr_number  |   @abstr_number  |     @abstr_number  |      @abstr_number  |
    
    Detailed:
    | request_path                             |   count |   avg_bytes_sent |    @abstr_number xx |    @abstr_number xx |    @abstr_number xx |    @abstr_number xx |
    |------------------------------------------+---------+------------------+-------+-------+-------+-------|
    | /abc/xyz/xxxx                            |    @abstr_number  |           @abstr_number . @abstr_number  |  @abstr_number  |      @abstr_number  |     @abstr_number  |      @abstr_number  |
    | /xxxxx.json                              |     @abstr_number  |          @abstr_number . @abstr_number  |   @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxx/xxx/xxxxxxxxxxxxx                 |     @abstr_number  |          @abstr_number . @abstr_number  |   @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxx/xxx/xxxxxxxx                      |     @abstr_number  |         @abstr_number . @abstr_number  |   @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxx/xxx/xxxxxxx                       |     @abstr_number  |          @abstr_number . @abstr_number  |   @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /static/js/minified/utils.min.js         |     @abstr_number  |          @abstr_number . @abstr_number  |   @abstr_number  |    @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /static/js/minified/xxxxxxx.min.v @abstr_number .js    |     @abstr_number  |          @abstr_number . @abstr_number  |   @abstr_number  |    @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /static/tracking/js/xxxxxxxx.js          |     @abstr_number  |          @abstr_number . @abstr_number  |   @abstr_number  |    @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxx/xxx.html                          |     @abstr_number  |           @abstr_number . @abstr_number  |   @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxx/xxxx.json                         |     @abstr_number  |           @abstr_number . @abstr_number  |   @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    

View top source IPs of clients ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::
    
    
    $ ngxtop top remote_addr
    running for  @abstr_number  seconds,  @abstr_number  records processed:  @abstr_number . @abstr_number  req/sec
    
    top remote_addr
    | remote_addr     |   count |
    |-----------------+---------|
    |  @abstr_number . @abstr_number . @abstr_number . @abstr_number  |       @abstr_number  |
    |  @abstr_number . @abstr_number . @abstr_number . @abstr_number     |       @abstr_number  |
    |  @abstr_number . @abstr_number . @abstr_number . @abstr_number      |       @abstr_number  |
    |  @abstr_number . @abstr_number . @abstr_number . @abstr_number   |       @abstr_number  |
    |  @abstr_number . @abstr_number . @abstr_number . @abstr_number      |       @abstr_number  |
    |  @abstr_number . @abstr_number . @abstr_number . @abstr_number     |       @abstr_number  |
    |  @abstr_number . @abstr_number . @abstr_number . @abstr_number      |       @abstr_number  |
    |  @abstr_number . @abstr_number . @abstr_number . @abstr_number     |       @abstr_number  |
    |  @abstr_number . @abstr_number . @abstr_number . @abstr_number   |       @abstr_number  |
    |  @abstr_number . @abstr_number . @abstr_number . @abstr_number   |       @abstr_number  |
    

List @abstr_number xx or @abstr_number xx responses together with HTTP referer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::
    
    
    $ ngxtop -i 'status >=  @abstr_number ' print request status http_referer
    running for  @abstr_number  seconds,  @abstr_number  records processed:  @abstr_number . @abstr_number  req/sec
    
    request, status, http_referer:
    | request   |   status | http_referer   |
    |-----------+----------+----------------|
    | -         |       @abstr_number  | -              |
    

Parse apache log from remote server with `common` format ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::
    
    
    $ ssh user@remote_server tail -f /var/log/apache @abstr_number /access.log | ngxtop -f common
    running for  @abstr_number  seconds,  @abstr_number  records processed:  @abstr_number . @abstr_number  req/sec
    
    Summary:
    |   count |   avg_bytes_sent |    @abstr_number xx |    @abstr_number xx |    @abstr_number xx |    @abstr_number xx |
    |---------+------------------+-------+-------+-------+-------|
    |     @abstr_number  |         @abstr_number . @abstr_number  |   @abstr_number  |     @abstr_number  |     @abstr_number  |      @abstr_number  |
    
    Detailed:
    | request_path                             |   count |   avg_bytes_sent |    @abstr_number xx |    @abstr_number xx |    @abstr_number xx |    @abstr_number xx |
    |------------------------------------------+---------+------------------+-------+-------+-------+-------|
    | /xxxxxxxxxx                              |      @abstr_number  |         @abstr_number . @abstr_number  |    @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxxxxx/xxxxx                          |      @abstr_number  |         @abstr_number . @abstr_number  |    @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxxxxxxxxxx/xxxxxx                    |       @abstr_number  |          @abstr_number . @abstr_number  |     @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxx/xxxxx/x/xxxxxxxxxxxxx/xxxxxxx      |       @abstr_number  |           @abstr_number . @abstr_number  |     @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxx/xxxxx/x/xxxxxxxxxxxxx/xxxxxx       |       @abstr_number  |          @abstr_number . @abstr_number  |     @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxx/xxxxx/                            |       @abstr_number  |          @abstr_number . @abstr_number  |     @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxxxxx/xxxxxxxxxxxxxxxxx              |       @abstr_number  |          @abstr_number . @abstr_number  |     @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxxxxxxxx/xxxxxxxx                    |       @abstr_number  |          @abstr_number . @abstr_number  |     @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxx/                                  |       @abstr_number  |             @abstr_number . @abstr_number  |      @abstr_number  |     @abstr_number  |      @abstr_number  |      @abstr_number  |
    | /xxxxxxxxxx/xxxxxxxx/xxxxx               |       @abstr_number  |         @abstr_number . @abstr_number  |     @abstr_number  |      @abstr_number  |      @abstr_number  |      @abstr_number  |
    
