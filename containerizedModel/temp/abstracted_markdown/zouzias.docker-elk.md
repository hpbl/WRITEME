# Docker ELK stack

@abstr_hyperlink 

Run the latest version of the ELK (Elasticseach, Logstash, Kibana) stack with Docker and Docker-compose.

It will give you the ability to analyze any data set by using the searching/aggregation capabilities of Elasticseach and the visualization power of Kibana.

Based on the official images:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



# Requirements

## Setup

@abstr_number . Install @abstr_hyperlink . @abstr_number . Install @abstr_hyperlink . @abstr_number . Clone this repository

## SELinux

On distributions which have SELinux enabled out-of-the-box you will need to either re-context the files or set SELinux into Permissive mode in order for docker-elk to start properly. For example on Redhat and CentOS, the following will apply the proper context:

`@abstr_code_section`

## Windows

When cloning this repo on Windows with line ending conversion enabled (git option `core.autocrlf` set to `true`), the script `kibana/entrypoint.sh` will malfunction due to a corrupt shebang header (which must not terminated by `CR+LF` but `LF` only):

`@abstr_code_section`

So you have to either

  * disable line ending conversion _before_ cloning the repository by setting `core.autocrlf` set to `false`: `git config core.autocrlf false`, or
  * convert the line endings in script `kibana/entrypoint.sh` from `CR+LF` to `LF` (e.g. using Notepad++).



See issue @abstr_number for details.

# Usage

Start the ELK stack using _docker-compose_ :

@abstr_code_section 

You can also choose to run it in background (detached mode):

@abstr_code_section 

Now that the stack is running, you'll want to inject logs in it. The shipped logstash configuration allows you to send content via tcp:

@abstr_code_section 

And then access Kibana UI by hitting @abstr_hyperlink with a web browser.

_NOTE_ : You'll need to inject data into logstash before being able to create a logstash index in Kibana. Then all you should have to do is to hit the create button.

See: https://www.elastic.co/guide/en/kibana/current/setup.html#connect

You can also access: * Sense: @abstr_hyperlink 

_NOTE_ : In order to use Sense, you'll need to query the IP address associated to your _network device_ instead of localhost.

By default, the stack exposes the following ports: * @abstr_number : Logstash TCP input. * @abstr_number : Elasticsearch HTTP * @abstr_number : Elasticsearch TCP transport * @abstr_number : Kibana

_WARNING_ : If you're using _boot @abstr_number docker_ , you must access it via the _boot @abstr_number docker_ IP address instead of _localhost_.

_WARNING_ : If you're using _Docker Toolbox_ , you must access it via the _docker-machine_ IP address instead of _localhost_.

# Configuration

_NOTE_ : Configuration is not dynamically reloaded, you will need to restart the stack after any change in the configuration of a component.

## How can I tune Kibana configuration?

The Kibana default configuration is stored in `kibana/config/kibana.yml`.

## How can I tune Logstash configuration?

The logstash configuration is stored in `logstash/config/logstash.conf`.

The folder `logstash/config` is mapped onto the container `/etc/logstash/conf.d` so you can create more than one file in that folder if you'd like to. However, you must be aware that config files will be read from the directory in alphabetical order.

## How can I specify the amount of memory used by Logstash?

The Logstash container use the _LS_HEAP_SIZE_ environment variable to determine how much memory should be associated to the JVM heap memory (defaults to @abstr_number m).

If you want to override the default configuration, add the _LS_HEAP_SIZE_ environment variable to the container in the `docker-compose.yml`:

@abstr_code_section 

## How can I add Logstash plugins?

To add plugins to logstash you have to:

@abstr_number . Add a RUN statement to the `logstash/Dockerfile` (ex. `RUN logstash-plugin install logstash-filter-json`) @abstr_number . Add the associated plugin code configuration to the `logstash/config/logstash.conf` file

## How can I enable a remote JMX connection to Logstash?

As for the Java heap memory, another environment variable allows to specify JAVA_OPTS used by Logstash. You'll need to specify the appropriate options to enable JMX and map the JMX port on the docker host.

Update the container in the `docker-compose.yml` to add the _LS_JAVA_OPTS_ environment variable with the following content (I've mapped the JMX service on the port @abstr_number , you can change that), do not forget to update the _-Djava.rmi.server.hostname_ option with the IP address of your Docker host (replace **DOCKER_HOST_IP** ):

@abstr_code_section 

## How can I tune Elasticsearch configuration?

The Elasticsearch container is using the shipped configuration and it is not exposed by default.

If you want to override the default configuration, create a file `elasticsearch/config/elasticsearch.yml` and add your configuration in it.

Then, you'll need to map your configuration file inside the container in the `docker-compose.yml`. Update the elasticsearch container declaration to:

@abstr_code_section 

You can also specify the options you want to override directly in the command field:

@abstr_code_section 

# Storage

## How can I store Elasticsearch data?

The data stored in Elasticsearch will be persisted after container reboot but not after container removal.

In order to persist Elasticsearch data even after removing the Elasticsearch container, you'll have to mount a volume on your Docker host. Update the elasticsearch container declaration to:

@abstr_code_section 

This will store elasticsearch data inside `/path/to/storage`.
