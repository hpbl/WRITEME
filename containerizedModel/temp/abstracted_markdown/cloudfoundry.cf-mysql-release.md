# Cloud Foundry MySQL Service

### Table of contents

Components

Downloading a Stable Release

Development

Release notes & known issues

Deploying

Registering the Service Broker

Security Groups

Smoke Tests

Deregistering the Service Broker

@abstr_hyperlink 

## Components

A BOSH release of a MySQL database-as-a-service for Cloud Foundry using @abstr_hyperlink and a @abstr_hyperlink .

Component| Description  
---|---  
@abstr_hyperlink  | Advertises the MySQL service and plans. Creates and deletes MySQL databases and credentials (bindings) at the request of Cloud Foundry's Cloud Controller.   
MySQL Server | The MySQL instances, either single or @abstr_number -node cluster. Currently using MariaDB @abstr_number (versions vary by release).  
Proxy |  @abstr_hyperlink ; proxies to MySQL, severing connections on MySQL node failure.  
  
### Proxy

Traffic to the MySQL cluster is routed through one or more proxy nodes. The current proxy implementation is @abstr_hyperlink . This proxy acts as an intermediary between the client and the MySQL server, providing failover between MySQL nodes. The number of nodes is configured by the proxy job instance count in the deployment manifest.

**NOTE:** If the number of proxy nodes is set to zero, apps will be bound to the IP address of the first MySQL node in the cluster. If that IP address should change for any reason (e.g. loss of a VM) or a proxy was subsequently added, one would need to re-bind all apps to the IP address of the new node.

For more details see the proxy documentation.

### Dashboard

A user-facing service dashboard is provided by the service broker that displays storage utilization information for each service instance. The dashboard is accessible by users via Single Sign-On (SSO) once authenticated with Cloud Foundry. The dashboard URL can be found by running `cf service MY_SERVICE_INSTANCE`.

Service authors interested in implementing a service dashboard accessible via SSO can follow documentation for @abstr_hyperlink .

#### Prerequisites

@abstr_number . SSO is initiated when a user navigates to the URL found in the `dashboard_url` field. This value is returned to cloud controller by the broker in response to a provision request, and is exposed in the cloud controller API for the service instance. A users client must expose this field as a link, or it can be obtained via curl (`cf curl /v @abstr_number /service_instances/:guid`) and copied into a browser.

@abstr_number . SSO requires the following OAuth client to be configured in cf-release. This client is responsible for creating the OAuth client for the MySQL dashboard. Without this client configured in cf-release, the MySQL dashboard will not be accessible but the service will be otherwise functional. Registering the broker will display a warning to this effect.
    
    
     @abstr_code_section
    

@abstr_number . SSO was implemented in v @abstr_number of cf-release; if you are on an older version of cf-release you'll encounter an error when you register the service broker. If upgrading cf-release is not an option, try removing the following lines from the cf-mysql-release manifest and redeploy.
    
    
     @abstr_code_section
    

#### Implementation Notes

The following links show how this release implements @abstr_hyperlink integration.

@abstr_number . Update the broker catalog with the dashboard client @abstr_hyperlink @abstr_number . Implement oauth @abstr_hyperlink with the @abstr_hyperlink @abstr_number . @abstr_hyperlink the @abstr_hyperlink to get a valid access token and request permissions on the instance @abstr_number . Before showing the user the dashboard, @abstr_hyperlink to see if the user is logged-in and has permissions to view the usage details of the instance.

### Broker Configuration

#### Require HTTPS when visiting Dashboard

The dashboard URL defaults to using the `https` scheme. This means any requests using `http` will automatically be redirected to `https` instead. To override this, you can change `jobs.cf-mysql-broker.ssl_enabled` to `false`.

Keep in mind that changing the `ssl_enabled` setting for an existing broker will not update previously advertised dashboard URLs. Visiting the old URL may fail if you are using the @abstr_hyperlink , because the OAuth @abstr_number client registered with UAA will expect users to both come from and return to a URI using the scheme implied by the `ssl_enabled` setting.

Note: If using `https`, the broker must be reached through an SSL termination proxy. Connecting to the broker directly on `https` will result in a `port @abstr_number : Connection refused` error.

#### Trust Self-Signed SSL Certificates

By default, the broker will not trust a self-signed SSL certificate when communicating with cf-release. To trust self-signed SSL certificates, you can change `jobs.cf-mysql-broker.skip_ssl_validation` to `true`.

## Downloading a Stable Release

Final releases are designed for public use, and are tagged with a version number of the form "v". The releases and corresponding release notes can be found on @abstr_hyperlink .

## Development

See our contributing docs for instructions on how to make a pull request.

This BOSH release doubles as a `$GOPATH`. It will automatically be set up for you if you have @abstr_hyperlink installed.
    
    
    # fetch release repo
    mkdir -p ~/workspace
    cd ~/workspace
    git clone https://github.com/cloudfoundry/cf-mysql-release.git
    cd cf-mysql-release/
    
    # switch to develop branch (not master!)
    git checkout develop
    
    # automate $GOPATH and $PATH setup
    direnv allow
    
    # initialize and sync submodules
    ./scripts/update
    

If you do not wish to use direnv, you can simply `source` the `.envrc` file in the root of the release repo. You may manually need to update your `$GOPATH` and `$PATH` variables as you switch in and out of the directory.

## Release Notes & Known Issues

For release notes and known issues, see @abstr_hyperlink .

## Deploying

See https://github.com/cloudfoundry/cf-mysql-deployment to deploy cf-mysql release.
