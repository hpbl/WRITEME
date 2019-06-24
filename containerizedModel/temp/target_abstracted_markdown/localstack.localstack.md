@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

# LocalStack - A fully functional local AWS cloud stack

@abstr_image 

_LocalStack_ provides an easy-to-use test/mocking framework for developing Cloud applications.

Currently, the focus is primarily on supporting the AWS cloud stack.

# Announcements

  * _* @abstr_number - @abstr_number - @abstr_number **: ***_ Help wanted! Please @abstr_hyperlink to support a research study on the usage of Serverless and Function-as-a-Service (FaaS) services, conducted at Chalmers University of Technology. The survey only takes @abstr_number - @abstr_number minutes of your time. Many thanks for your participation!!
  * _* @abstr_number - @abstr_number - @abstr_number **: ***_ We need your support! LocalStack is growing fast, we now have thousands of developers using the platform on a regular basis. Last month we have recorded a staggering @abstr_number k test runs, with @abstr_number k+ DynamoDB tables, @abstr_number k+ SQS queues, @abstr_number k+ Kinesis streams, @abstr_number k+ S @abstr_number buckets, and @abstr_number k+ Lambda functions created locally - for @abstr_number $ costs (more details to be published soon). Bug and feature requests are pouring in, and we now need some support from _you_ to keep the open source version actively maintained. Please check out @abstr_hyperlink and become a @abstr_hyperlink or @abstr_hyperlink of the project today! Thanks everybody for contributing. ♥
  * _* @abstr_number - @abstr_number - @abstr_number **: Please note: Starting with version`@abstr_number . @abstr_number . @abstr_number`, the Docker image will be pushed and kept up to date under the ***_ new name `localstack/localstack`. (This means that you may have to update your CI configurations.) Please refer to the updated **End-User License Agreement (EULA)** for the new versions. The old Docker image (`atlassianlabs/localstack`) is still available but will not be maintained any longer.



# Overview

_LocalStack_ spins up the following core Cloud APIs on your local machine:

  * **API Gateway** at http://localhost: @abstr_number 
  * **Kinesis** at http://localhost: @abstr_number 
  * **DynamoDB** at http://localhost: @abstr_number 
  * **DynamoDB Streams** at http://localhost: @abstr_number 
  * **Elasticsearch** at http://localhost: @abstr_number 
  * _*S @abstr_number *_ at http://localhost: @abstr_number 
  * **Firehose** at http://localhost: @abstr_number 
  * **Lambda** at http://localhost: @abstr_number 
  * **SNS** at http://localhost: @abstr_number 
  * **SQS** at http://localhost: @abstr_number 
  * **Redshift** at http://localhost: @abstr_number 
  * **ES (Elasticsearch Service)** at http://localhost: @abstr_number 
  * **SES** at http://localhost: @abstr_number 
  * _*Route @abstr_number *_ at http://localhost: @abstr_number 
  * **CloudFormation** at http://localhost: @abstr_number 
  * **CloudWatch** at http://localhost: @abstr_number 
  * **SSM** at http://localhost: @abstr_number 
  * **SecretsManager** at http://localhost: @abstr_number 
  * **StepFunctions** at http://localhost: @abstr_number 
  * **CloudWatch Logs** at http://localhost: @abstr_number 
  * **STS** at http://localhost: @abstr_number 
  * **IAM** at http://localhost: @abstr_number 
  * _*EC @abstr_number *_ at http://localhost: @abstr_number 



Additionally, _LocalStack_ provides a powerful set of tools to interact with the cloud services, including a fully featured KCL Kinesis client with Python binding, simple setup/teardown integration for nosetests, as well as an Environment abstraction that allows to easily switch between local and remote Cloud execution.

## Why _LocalStack_?

_LocalStack_ builds on existing best-of-breed mocking/testing tools, most notably @abstr_hyperlink / @abstr_hyperlink and @abstr_hyperlink . While these tools are _awesome_ (!), they lack functionality for certain use cases. _LocalStack_ combines the tools, makes them interoperable, and adds important missing functionality on top of them:

  * **Error injection:** _LocalStack_ allows to inject errors frequently occurring in real Cloud environments, for instance `ProvisionedThroughputExceededException` which is thrown by Kinesis or DynamoDB if the amount of read/write throughput is exceeded.
  * **Isolated processes** : All services in _LocalStack_ run in separate processes. The overhead of additional processes is negligible, and the entire stack can easily be executed on any developer machine and CI server. In moto, components are often hard-wired in RAM (e.g., when forwarding a message on an SNS topic to an SQS queue, the queue endpoint is looked up in a local hash map). In contrast, _LocalStack_ services live in isolation (separate processes available via HTTP), which fosters true decoupling and more closely resembles the real cloud environment.
  * **Pluggable services** : All services in _LocalStack_ are easily pluggable (and replaceable), due to the fact that we are using isolated processes for each service. This allows us to keep the framework up-to-date and select best-of-breed mocks for each individual service.



## Requirements

  * `make`
  * `python` (both Python @abstr_number .x and @abstr_number .x supported)
  * `pip` (python package manager)
  * `npm` (node.js package manager)
  * `java`/`javac` (Java @abstr_number runtime environment and compiler)
  * `mvn` (Maven, the build system for Java)



## Installing

The easiest way to install _LocalStack_ is via `pip`:

@abstr_code_section 

Once installed, run the infrastructure using the following command: @abstr_code_section 

**Note** : Please do **not** use `sudo` or the `root` user - _LocalStack_ should be installed and started entirely under a local non-root user. If you have problems with permissions in MacOS X Sierra, install with `pip install --user localstack`

## Running in Docker

You can also spin up _LocalStack_ in Docker:

@abstr_code_section 

(Note that on MacOS you may have to run `TMPDIR=/private$TMPDIR localstack start --docker` if `$TMPDIR` contains a symbolic link that cannot be mounted by Docker.)

Or using docker-compose (you need to clone the repository first, currently requires docker-compose version @abstr_number . @abstr_number +):

@abstr_code_section 

(Note that on MacOS you may have to run `TMPDIR=/private$TMPDIR docker-compose up` if `$TMPDIR` contains a symbolic link that cannot be mounted by Docker.)

Use on existing docker-compose project. Add in existing services. The project can be found in docker hub, no need to download or clone source:

@abstr_code_section 

To facilitate interoperability, configuration variables can be prefixed with `LOCALSTACK_` in docker. For instance, setting `LOCALSTACK_SERVICES=s @abstr_number` is equivalent to `SERVICES=s @abstr_number`.

## Configurations

You can pass the following environment variables to LocalStack:

  * `SERVICES`: Comma-separated list of service names and (optional) ports they should run on. If no port is specified, a default port is used. Service names basically correspond to the @abstr_hyperlink (`kinesis`, `lambda`, `sqs`, etc), although LocalStack only supports a subset of them. Example value: `kinesis,lambda: @abstr_number ,sqs: @abstr_number` to start Kinesis on the default port, Lambda on port @abstr_number , and SQS on port @abstr_number . In addition, the following shorthand values can be specified to run a predefined ensemble of services: 
    * `serverless`: run services often used for Serverless apps (`iam`, `lambda`, `dynamodb`, `apigateway`, `s @abstr_number`, `sns`)
  * `DEFAULT_REGION`: AWS region to use when talking to the API (defaults to `us-east- @abstr_number`).
  * `HOSTNAME`: Name of the host to expose the services internally (defaults to `localhost`). Use this to customize the framework-internal communication, e.g., if services are started in different containers using docker-compose.
  * `HOSTNAME_EXTERNAL`: Name of the host to expose the services externally (defaults to `localhost`). This host is used, e.g., when returning queue URLs from the SQS service to the client.
  * `<SERVICE>_PORT_EXTERNAL`: Number of the port to expose a specific service externally (defaults to service ports above) `SQS_PORT_EXTERNAL`, for example, is used when returning queue URLs from the SQS service to the client.
  * `USE_SSL`: Whether to use `https://...` URLs with SSL encryption (defaults to `false`).
  * `KINESIS_ERROR_PROBABILITY`: Decimal value between @abstr_number . @abstr_number (default) and @abstr_number . @abstr_number to randomly inject `ProvisionedThroughputExceededException` errors into Kinesis API responses.
  * `DYNAMODB_ERROR_PROBABILITY`: Decimal value between @abstr_number . @abstr_number (default) and @abstr_number . @abstr_number to randomly inject `ProvisionedThroughputExceededException` errors into DynamoDB API responses.
  * `LAMBDA_EXECUTOR`: Method to use for executing Lambda functions. Possible values are:

    * `local`: run Lambda functions in a temporary directory on the local machine
    * `docker`: run each function invocation in a separate Docker container
    * `docker-reuse`: create one Docker container per function and reuse it across invocations

For `docker` and `docker-reuse`, if _LocalStack_ itself is started inside Docker, then the `docker` command needs to be available inside the container (usually requires to run the container in privileged mode). Default is `docker`, fallback to `local` if Docker is not available.

  * `LAMBDA_REMOTE_DOCKER` determines whether Lambda code is copied or mounted into containers. Possible values are: 
    * `true` (default): your Lambda function definitions will be passed to the container by copying the zip file (potentially slower). It allows for remote execution, where the host and the client are not on the same machine.
    * `false`: your Lambda function definitions will be passed to the container by mounting a volume (potentially faster). This requires to have the Docker client and the Docker host on the same machine.
  * `LAMBDA_DOCKER_NETWORK` Specifies the docker network for the container running your lambda function.
  * `DATA_DIR`: Local directory for saving persistent data (currently only supported for these services: Kinesis, DynamoDB, Elasticsearch, S @abstr_number ). Set it to `/tmp/localstack/data` to enable persistence (`/tmp/localstack` is mounted into the Docker container), leave blank to disable persistence (default).
  * `PORT_WEB_UI`: Port for the Web user interface (dashboard). Default is `@abstr_number`.
  * `<SERVICE>_BACKEND`: Custom endpoint URL to use for a specific service, where `<SERVICE>` is the uppercase service name (currently works for: `APIGATEWAY`, `CLOUDFORMATION`, `DYNAMODB`, `ELASTICSEARCH`, `KINESIS`, `S @abstr_number`, `SNS`, `SQS`). This allows to easily integrate third-party services into LocalStack.
  * `FORCE_NONINTERACTIVE`: when running with Docker, disables the `--interactive` and `--tty` flags. Useful when running headless.
  * `DOCKER_FLAGS`: Allows to pass custom flags (e.g., volume mounts) to "docker run" when running LocalStack in Docker.
  * `START_WEB`: Flag to control whether the Web API should be started in Docker (values: `@abstr_number`/`@abstr_number`; default: `@abstr_number`).
  * `LAMBDA_FALLBACK_URL`: Fallback URL to use when a non-existing Lambda is invoked. Either records invocations in DynamoDB (value `dynamodb://<table_name>`) or forwards invocations as a POST request (value `http(s)://...`).



Additionally, the following _read-only_ environment variables are available:

  * `LOCALSTACK_HOSTNAME`: Name of the host where LocalStack services are available. This is needed in order to access the services from within your Lambda functions (e.g., to store an item to DynamoDB or S @abstr_number from Lambda). The variable `LOCALSTACK_HOSTNAME` is available for both, local Lambda execution (`LAMBDA_EXECUTOR=local`) and execution inside separate Docker containers (`LAMBDA_EXECUTOR=docker`).



### Dynamically updating configuration at runtime

Each of the service APIs listed @abstr_hyperlink defines a backdoor API under the path `/?_config_` which allows to dynamically update configuration variables defined in @abstr_hyperlink .

For example, to dynamically set `KINESIS_ERROR_PROBABILITY= @abstr_number` at runtime, use the following command: @abstr_code_section 

### Initializing a fresh instance

When a container is started for the first time, it will execute files with extensions .sh that are found in /docker-entrypoint-initaws.d. Files will be executed in alphabetical order. You can easily create aws resources on localstack using `awslocal` (or `aws`) cli tool in the initialization scripts.

## A note about using custom SSL certificates (for `USE_SSL= @abstr_number`)

If you need to use your own SSL Certificate and keep it persistent and not use the random automatic generated Certificate, you can place into the localstack temporary directory :

@abstr_code_section 

the three named files below :

@abstr_code_section 

  * the file `server.test.pem` must contains your key file content, your certificat and chain certificate files contents (do a cat in this order) 
    * the file `server.test.pem.crt` must contains your certificate and chains files contents (do a 'cat' in this order)
  * the file server.test.pem.key must contains your key file content



* * *

### Using USE_SSL and own persistent certificate with docker-compose

Typically with docker-compose you can add into docker-compose.yml this volume to the localstack services :

@abstr_code_section 

local directory **ls_tmp** must contains the three files (server.test.pem, server.test.pem.crt, server.test.pem.key)

* * *

## Accessing the infrastructure via CLI or code

You can point your `aws` CLI to use the local infrastructure, for example:

@abstr_code_section 

**NEW** : Check out @abstr_hyperlink , a thin CLI wrapper that runs commands directly against _LocalStack_ (no need to specify `--endpoint-url` anymore). Install it via `pip install awscli-local`, and then use it as follows:

@abstr_code_section 

**UPDATE** : Use the environment variable `$LOCALSTACK_HOSTNAME` to determine the target host inside your Lambda function. See Configurations section for more details.

### Client Libraries

  * Python: https://github.com/localstack/localstack-python-client 
    * alternatively, you can also use `boto @abstr_number` and use the `endpoint_url` parameter when creating a connection
  * (more coming soon...)



## Integration with nosetests

If you want to use _LocalStack_ in your integration tests (e.g., nosetests), simply fire up the infrastructure in your test setup method and then clean up everything in your teardown method:

@abstr_code_section 

See the example test file `tests/test_integration.py` for more details.

## Integration with Serverless

You can use the @abstr_hyperlink plugin to easily run @abstr_hyperlink applications on LocalStack. For more information, please check out the plugin repository here: https://github.com/localstack/serverless-localstack

## Using local code with Lambda

In order to mount a local folder, ensure that `LAMBDA_REMOTE_DOCKER` is set to `false` then set the S @abstr_number bucket name to `__local__` and the S @abstr_number key to your local path:

@abstr_code_section 

## Integration with Java/JUnit

In order to use _LocalStack_ with Java, the project ships with a simple JUnit runner and a JUnit @abstr_number extension. Take a look at the example JUnit test in `ext/java`. When you run the test, all dependencies are automatically downloaded and installed to a temporary directory in your system.

@abstr_code_section 

Or with JUnit @abstr_number :

@abstr_code_section 

Additionally, there is a version of the _LocalStack_ Test Runner which runs in a docker container instead of installing _LocalStack_ on the current machine. The only dependency is to have docker installed locally. The test runner will automatically pull the image and start the container for the duration of the test. The container can be configured by using the @LocalstackDockerProperties annotation.

@abstr_code_section 

Or with JUnit @abstr_number :

@abstr_code_section 

The _LocalStack_ JUnit test runner is published as an artifact in Maven Central. Simply add the following dependency to your `pom.xml` file:

@abstr_code_section 

You can configure the Docker behaviour using the `@LocalstackDockerProperties` annotation with the following parameters:

| property | usage | type | default value | |-----------------------------|------------------------------------------------------------------------------------------------------------------------------|------------------------------|---------------| | pullNewImage | Determines if a new image is pulled from the docker repo before the tests are run. | boolean | false | | randomizePorts | Determines if the container should expose the default local stack ports ( @abstr_number - @abstr_number ) or if it should expose randomized ports. | boolean | false | | services | Determines which services should be run when the localstack starts. | String[] | All | | imageTag | Use a specific image tag for docker container | String | latest | | hostNameResolver | Used for determining the host name of the machine running the docker containers so that the containers can be addressed. | IHostNameResolver | localhost | | environmentVariableProvider | Used for injecting environment variables into the container. | IEnvironmentVariableProvider | Empty Map |

_NB : When specifying the port in the `services` property, you cannot use `randomizePorts = true`_

### Troubleshooting

  * If you're using AWS Java libraries with Kinesis, please, refer to @abstr_hyperlink how to disable CBOR protocol which is not supported by kinesalite.

  * Accessing local S @abstr_number from Java: To avoid domain name resolution issues, you need to enable **path style access** on your client: @abstr_code_section 

  * Mounting the temp. directory: Note that on MacOS you may have to run `TMPDIR=/private$TMPDIR docker-compose up` if `$TMPDIR` contains a symbolic link that cannot be mounted by Docker. (See details here: https://bitbucket.org/atlassian/localstack/issues/ @abstr_number /getting-mounts-failed-on-docker-compose-up)

  * If you run into file permission issues on `pip install` under Mac OS (e.g., `Permission denied: '/Library/Python/ @abstr_number . @abstr_number /site-packages/six.py'`), then you may have to re-install `pip` via Homebrew (see @abstr_hyperlink ). Alternatively, try installing with the `--user` flag: `pip install --user localstack`

  * If you are deploying within OpenShift, please be aware: the pod must run as `root`, and the user must have capabilities added to the running pod, in order to allow Elasticsearch to be run as the non-root `localstack` user.

  * The environment variable `no_proxy` is rewritten by _LocalStack_. (Internal requests will go straight via localhost, bypassing any proxy configuration).

  * For troubleshooting LocalStack start issues, you can check debug logs by running `DEBUG= @abstr_number localstack start`

  * In case you get errors related to node/nodejs, you may find (this issue comment: https://github.com/localstack/localstack/issues/ @abstr_number #issuecomment- @abstr_number ) helpful.

  * If you are using AWS Java libraries and need to disable SSL certificate checking, add `-Dcom.amazonaws.sdk.disableCertChecking` to the java invocation.




## Developing

If you pull the repo in order to extend/modify LocalStack, run this command to install all the dependencies:

@abstr_code_section 

This will install the required pip dependencies in a local Python virtualenv directory `.venv` (your global python packages will remain untouched), as well as some node modules in `./localstack/node_modules/`. Depending on your system, some pip/npm modules may require additional native libs installed.

The Makefile contains a target to conveniently run the local infrastructure for development:

@abstr_code_section 

Check out the @abstr_hyperlink which contains a few instructions on how to get started with developing (and debugging) features for LocalStack.

## Testing

The project contains a set of unit and integration tests that can be kicked off via a make target:

@abstr_code_section 

## Web Dashboard

The projects also comes with a simple Web dashboard that allows to view the deployed AWS components and the relationship between them.

@abstr_code_section 

## Change Log

  * v @abstr_number . @abstr_number . @abstr_number : Reduce Docker image size by squashing; fix response body for presigned URL S @abstr_number PUT requests; fix CreateDate returned by IAM; fix account IDs for CF and SNS; fix topic checks for SMS using SNS; improve documentation around `@LocalstackDockerProperties`; add basic EC @abstr_number support; upgrade to ElasticSearch @abstr_number . @abstr_number ; set Last-Modified header in S @abstr_number ; preserve logic with uppercase event keys in Java; add support for nodejs @abstr_number .x Lambdas
  * v @abstr_number . @abstr_number . @abstr_number : Fix ARNs in CloudFormation deployments; write stderr to file in supervisord; fix Lambda invocation times; fix canonicalization of service names when running in Docker; add support for `@Nested` in Junit @abstr_number ; add support for batch/transaction in DynamoDB; fix output buffering for subprocesses; assign unique ports under docker-reuse; check if topic ARN exists before publish
  * v @abstr_number . @abstr_number . @abstr_number : Fix output buffering of child processes; new release of Java libs; add imageTag attribute for Java annotation
  * v @abstr_number . @abstr_number . @abstr_number : Update to Python @abstr_number in Dockerfile; preserve attributes when SNS Subscribe; fix event source mapping in Lambda; fix CORS ExposeHeaders; set Lambda timeout in secs; add tags support for Lambda/Firehose; add message attributes for SQS/Lambda; fix shard count support for Kinesis; fix port mappings for CloudFormation
  * v @abstr_number . @abstr_number . @abstr_number : Define dependent and composite services in config; forward Lambda logs to CloudWatch Logs; add SQS event deserializing for Lambda; fix AWS_PROXY for JSON list payload; add START_WEB config parameter; return correct location for S @abstr_number multipart uploads; add support for Lambda custom runtime; fix account ID for IAM responses; fix using correct SSL cert; limit memory usage for Java processes; fix unicode encoding for SNS messages; allow using `LOCALSTACK_` prefix in Docker environment variables; enable request forwarding for non-existing Lambdas; fix large downloads for S @abstr_number ; add API endpoint for dynamically updating config variables; fix CloudFormation stack update
  * v @abstr_number . @abstr_number . @abstr_number : Enhance integration with Serverless; refactor CloudFormation implementation; add support for Step Functions, IAM, STS; fix CloudFormation integration; support mounting Lambda code locally; add `docker-entrypoint-initaws.d` dir for initializing resources; add S @abstr_number Event Parser for Lambda; fix S @abstr_number chunk encoding; fix S @abstr_number multipart upload notification; add dotnetcore @abstr_number . @abstr_number and ruby @abstr_number . @abstr_number Lambda runtimes; fix issues with JDK @abstr_number ; install ES plugins available in AWS
  * v @abstr_number . @abstr_number . @abstr_number : Add kclpy to pip package; fix badges in README
  * v @abstr_number . @abstr_number . @abstr_number : Replace moto-ext with upstream moto; fix SNS message attributes; fix swagger; make external SQS port configurable; support for SNS DeleteTopic; S @abstr_number notifications for multipart uploads; support requestContext in AWS_PROXY integration; update docs for SSL usage
  * v @abstr_number . @abstr_number . @abstr_number : Support Docker network config for Lambda containers; support queryStringParameters for Lambda AWS_PROXY apigateway; add AWS SecretsManager service; add SQS/Lambda integration; add support for Firehose Kinesis source; add GetAlias to Lambda API; add function properties to LambdaContext for invocations; fix extraction of Java Lambda archives; check region headers for SNS; fix Lambda output buffering; fix S @abstr_number download of gzip; bump ElasticMQ to @abstr_number . @abstr_number . @abstr_number ; fix Lambda response codes; fix syntax issues for Python @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number . @abstr_number : Support .Net Core @abstr_number . @abstr_number and nodejs @abstr_number . @abstr_number Lambdas; refactor Java libs and integrate with JUnit @abstr_number ; support tags for ES domains; add CloudFormation support for SNS topics; fix kinesis error injection; fix override of `ES_JAVA_OPTS`; fix SQS CORS preflight response; fix S @abstr_number content md @abstr_number checks and Host header; fix ES startup issue; Bump elasticmq to @abstr_number . @abstr_number . @abstr_number ; bump kinesalite version
  * v @abstr_number . @abstr_number . @abstr_number : Fixes for Windows installation; bump ES to @abstr_number . @abstr_number . @abstr_number ; support filter policy for SNS; upgrade kinesalite; refactor JUnit runner; support Lambda PutFunctionConcurrency and GetEventSourceMapping; fixes for Terraform; add golang support to Lambda; fix file permission issue in Java Lambda tests; fix S @abstr_number bucket notification config
  * v @abstr_number . @abstr_number . @abstr_number : Fix DDB streams event type; implement CF Fn::GetAZs; async lambda for DDB events; fix S @abstr_number content-type; fix CF deployer for SQS; fix S @abstr_number ExposePorts; fix message subject in SNS; support for Firehose -> ES; pass external env vars to containers from Java; add mock for list-queue-tags; enhance docker test runner; fix Windows installation issues; new version of Java libs
  * v @abstr_number . @abstr_number . @abstr_number : Fix `pipenv` dependency issue; Docker JUnit test runner; POJO type for Java Lambda RequestHandler; Java Lambda DynamoDB event; reuse Docker containers for Lambda invocations; API Gateway wildcard path segments; fix SNS RawMessageDelivery
  * v @abstr_number . @abstr_number . @abstr_number : Fix DDB stream events for UPDATE operations; fix DDB streams sequence numbers; fix transfer-encoding for DDB; fix requests with missing content-length header; support non-ascii content in DynamoDB items; map external port for SQS queue URLs; default to LAMBDA_REMOTE_DOCKER=true if running in Docker; S @abstr_number lifecycle support; reduce Docker image size
  * v @abstr_number . @abstr_number . @abstr_number : Fix S @abstr_number bucket notification configuration; CORS headers for API Gateway; fix > @abstr_number k S @abstr_number multipart uploads; return valid ShardIDs in DynamoDB Streams; fix hardcoded "ddblocal" DynamoDB TableARN; import default service ports from localstack-client; fix S @abstr_number bucket policy response; Execute lambdas asynchronously if the source is a topic
  * v @abstr_number . @abstr_number . @abstr_number : Improvements in Lambda API: publish-version, list-version, function aliases; use single map with Lambda function details; workaround for SQS .fifo queues; add test for S @abstr_number upload; initial support for SSM; fix regex to replace SQS queue URL hostnames; update linter (single quotes); use `docker.for.mac.localhost` to connect to LocalStack from Docker on Mac; fix b @abstr_number encoding for Java Lambdas; fix path of moto_server command
  * v @abstr_number . @abstr_number . @abstr_number : Fix request data in `GenericProxyHandler`; add `$PORT_WEB_UI` and `$HOSTNAME_EXTERNAL` configs; API Gateway path parameters; enable flake @abstr_number linting; add config for service backend URLs; use ElasticMQ instead of moto for SQS; expose `$LOCALSTACK_HOSTNAME`; custom environment variable support for Lambda; improve error logging and installation for Java/JUnit; add support for S @abstr_number REST Object POST
  * v @abstr_number . @abstr_number . @abstr_number : Fix issue with incomplete parallel downloads; bypass http_proxy for internal requests; use native Python code to unzip archives; download KCL client libs only for testing and not on pip install
  * v @abstr_number . @abstr_number . @abstr_number : Refactor CLI and enable plugins; support unicode names for S @abstr_number ; fix SQS names containing a dot character; execute Java Lambda functions in Docker containers; fix DynamoDB error handling; update docs
  * v @abstr_number . @abstr_number . @abstr_number : Extract proxy listeners into (sub-)classes; put java libs into a single "fat" jar; fix issue with non-daemonized threads; refactor code to start flask services
  * v @abstr_number . @abstr_number . @abstr_number : Fix DATA_DIR config when running in Docker; fix Maven dependencies; return 'ConsumedCapacity' from DynamoDB get-item; use Queue ARN instead of URL for S @abstr_number bucket notifications
  * v @abstr_number . @abstr_number . @abstr_number : Fix S @abstr_number API to GET bucket notifications; release Java artifacts to Maven Central; fix S @abstr_number file access from Spark; create DDB stream on UpdateTable; remove AUI dependency, optimize size of Docker image
  * v @abstr_number . @abstr_number . @abstr_number : Support for Kinesis in CloudFormation; extend and integrate Java tests in CI; publish Docker image under new name; update READMEs and license agreements
  * v @abstr_number . @abstr_number . @abstr_number : Major refactoring of installation process, lazy loading of dependencies
  * v @abstr_number . @abstr_number . @abstr_number : Add CORS headers; platform compatibility fixes (remove shell commands and sh module); add CloudFormation validate-template; fix Lambda execution in Docker; basic domain handling in ES API; API Gateway authorizers
  * v @abstr_number . @abstr_number . @abstr_number : Load services as plugins; fix service default ports; fix SQS->SNS and MD @abstr_number of message attributes; fix Host header for S @abstr_number 
  * v @abstr_number . @abstr_number . @abstr_number : Enable SSL encryption for all service endpoints (`USE_SSL` config); create Docker base image; fix issue with DATA_DIR
  * v @abstr_number . @abstr_number . @abstr_number : Remove hardcoded /tmp/ for Windows-compat.; update CLI and docs; fix S @abstr_number /SNS notifications; disable Elasticsearch compression
  * v @abstr_number . @abstr_number . @abstr_number : Add CloudFormation support for serverless / API Gateway deployments; fix installation via pypi; minor fix for Java (passing of environment variables)
  * v @abstr_number . @abstr_number . @abstr_number : Extend DynamoDB Streams API; fix keep-alive connection for S @abstr_number ; fix deadlock in nested Lambda executions; add integration SNS->Lambda; CloudFormation serverless example; replace dynalite with DynamoDBLocal; support Lambda execution in remote Docker container; fix CloudWatch metrics for Lambda invocation errors
  * v @abstr_number . @abstr_number . @abstr_number : Initial support for CloudWatch metrics (for Lambda functions); HTTP forwards for API Gateway; fix S @abstr_number message body signatures; download Lambda archive from S @abstr_number bucket; fix/extend ES tests
  * v @abstr_number . @abstr_number . @abstr_number : Initial support for Java Lambda functions; CloudFormation deployments; API Gateway tests
  * v @abstr_number . @abstr_number . @abstr_number : Python @abstr_number compatibility; data persistence; add seq. numbers in Kinesis events; limit Elasticsearch memory
  * v @abstr_number . @abstr_number . @abstr_number : Execute Lambda functions in Docker containers; CORS headers for S @abstr_number 
  * v @abstr_number . @abstr_number . @abstr_number : Add Route @abstr_number , SES, CloudFormation; DynamoDB fault injection; UI tweaks; refactor config
  * v @abstr_number . @abstr_number . @abstr_number : Add initial support for S @abstr_number bucket notifications; fix subprocess @abstr_number installation
  * v @abstr_number . @abstr_number . @abstr_number : Make services/ports configurable via $SERVICES; add tests for Firehose+S @abstr_number 
  * v @abstr_number . @abstr_number . @abstr_number : Fix Elasticsearch via local bind and proxy; refactoring; improve error logging
  * v @abstr_number . @abstr_number . @abstr_number : Fix lambda handler name; fix host name for S @abstr_number API; install web libs on pip install
  * v @abstr_number . @abstr_number . @abstr_number : Fix file permissions in build; fix and add UI to Docker image; add stub of ES API
  * v @abstr_number . @abstr_number . @abstr_number : Add version tags to Docker images
  * v @abstr_number . @abstr_number . @abstr_number : Add support for Redshift API; code refactoring
  * v @abstr_number . @abstr_number . @abstr_number : Add Dockerfile and push image to Docker Hub
  * v @abstr_number . @abstr_number . @abstr_number : Add simple integration for JUnit; improve process signal handling
  * v @abstr_number . @abstr_number . @abstr_number : Refactored the AWS assume role function
  * v @abstr_number . @abstr_number . @abstr_number : Added AWS assume role functionality.
  * v @abstr_number . @abstr_number . @abstr_number : Kinesis error response formatting
  * v @abstr_number . @abstr_number . @abstr_number : Throw Kinesis errors randomly
  * v @abstr_number . @abstr_number . @abstr_number : Decouple SNS/SQS: intercept SNS calls and forward to subscribed SQS queues
  * v @abstr_number . @abstr_number . @abstr_number : Return error response from Kinesis if flag is set
  * v @abstr_number . @abstr_number . @abstr_number : Allow Lambdas to use __file__ (import from file instead of exec'ing)
  * v @abstr_number . @abstr_number . @abstr_number : Improve Kinesis/KCL auto-checkpointing (leases in DDB)
  * v @abstr_number . @abstr_number . @abstr_number : Speed up installation time by lazy loading libraries
  * v @abstr_number . @abstr_number . @abstr_number : Pass shard_id in records sent from KCL process
  * v @abstr_number . @abstr_number . @abstr_number : Minor restructuring and refactoring (create separate kinesis_util.py)
  * v @abstr_number . @abstr_number . @abstr_number : Fix AWS tokens when creating Elasticsearch client
  * v @abstr_number . @abstr_number . @abstr_number : Add startup/initialization notification for KCL process
  * v @abstr_number . @abstr_number . @abstr_number : Bump version of amazon_kclpy to @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number . @abstr_number : Add initial support for SQS/SNS
  * v @abstr_number . @abstr_number . @abstr_number : Fix installation of JARs in amazon_kclpy if localstack is installed transitively
  * v @abstr_number . @abstr_number . @abstr_number : Bump version of amazon_kclpy to @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number . @abstr_number : Add travis-ci and coveralls configuration
  * v @abstr_number . @abstr_number . @abstr_number : Refactor Elasticsearch utils; fix bug in method to delete all ES indexes
  * v @abstr_number . @abstr_number . @abstr_number : Enhance logging; extend java KCL credentials provider (support STS assumed roles)
  * v @abstr_number . @abstr_number . @abstr_number : Add configurable KCL log output
  * v @abstr_number . @abstr_number . @abstr_number : Initial release



## Contributing

We welcome feedback, bug reports, and pull requests!

For pull requests, please stick to the following guidelines:

  * Add tests for any new features and bug fixes. Ideally, each PR should increase the test coverage.
  * Follow the existing code style (e.g., indents). A PEP @abstr_number code linting target is included in the Makefile.
  * Put a reasonable amount of comments into the code.
  * Separate unrelated changes into multiple pull requests.
  * @abstr_number commit per PR: Please squash/rebase multiple commits into one single commit (to keep the history clean).



Please note that by contributing any code or documentation to this repository (by raising pull requests, or otherwise) you explicitly agree to the Contributor License Agreement.

## Contributors

This project exists thanks to all the people who contribute. @abstr_hyperlink 

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/localstack#backer)]

@abstr_hyperlink 

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/localstack#sponsor)]

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## License

Copyright (c) @abstr_number - @abstr_number _LocalStack_ maintainers and contributors.

Copyright (c) @abstr_number Atlassian and others.

This version of _LocalStack_ is released under the Apache License, Version @abstr_number . @abstr_number (see LICENSE.txt). By downloading and using this software you agree to the End-User License Agreement (EULA).

We build on a number of third-party software tools, including the following:

Third-Party software | License \--------------------------|----------------------- **Python/pip modules:** | airspeed | BSD License amazon_kclpy | Amazon Software License boto @abstr_number | Apache License @abstr_number . @abstr_number coverage | Apache License @abstr_number . @abstr_number docopt | MIT License elasticsearch | Apache License @abstr_number . @abstr_number flask | BSD License flask_swagger | MIT License jsonpath-rw | Apache License @abstr_number . @abstr_number moto | Apache License @abstr_number . @abstr_number nose | GNU LGPL pep @abstr_number | Expat license requests | Apache License @abstr_number . @abstr_number subprocess @abstr_number | PSF License **Node.js/npm modules:** | kinesalite | MIT License **Other tools:** | Elasticsearch | Apache License @abstr_number . @abstr_number 
