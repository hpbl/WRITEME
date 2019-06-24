@abstr_image @abstr_image @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

nginx-proxy sets up a container running nginx and @abstr_hyperlink . docker-gen generates reverse proxy configs for nginx and reloads nginx when containers are started and stopped.

See @abstr_hyperlink for why you might want to use this.

### Usage

To run it:
    
    
    $ docker run -d -p  @abstr_number : @abstr_number  -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
    

Then start any containers you want proxied with an env var `VIRTUAL_HOST=subdomain.youdomain.com`
    
    
    $ docker run -e VIRTUAL_HOST=foo.bar.com  ...
    

The containers being proxied must @abstr_hyperlink the port to be proxied, either by using the `EXPOSE` directive in their `Dockerfile` or by using the `--expose` flag to `docker run` or `docker create`.

Provided your DNS is setup to forward foo.bar.com to the host running nginx-proxy, the request will be routed to a container with the VIRTUAL_HOST env var set.

### Image variants

The nginx-proxy images are available in two flavors.

#### jwilder/nginx-proxy:latest

This image uses the debian:jessie based nginx image.
    
    
    $ docker pull jwilder/nginx-proxy:latest
    

#### jwilder/nginx-proxy:alpine

This image is based on the nginx:alpine image. Use this image to fully support HTTP/ @abstr_number (including ALPN required by recent Chrome versions). A valid certificate is required as well (see eg. below "SSL Support using letsencrypt" for more info).
    
    
    $ docker pull jwilder/nginx-proxy:alpine
    

### Docker Compose

@abstr_code_section 

@abstr_code_section 

### IPv @abstr_number support

You can activate the IPv @abstr_number support for the nginx-proxy container by passing the value `true` to the `ENABLE_IPV @abstr_number` environment variable:
    
    
    $ docker run -d -p  @abstr_number : @abstr_number  -e ENABLE_IPV @abstr_number =true -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
    

### Multiple Ports

If your container exposes multiple ports, nginx-proxy will default to the service running on port @abstr_number . If you need to specify a different port, you can set a VIRTUAL_PORT env var to select a different one. If your container only exposes one port and it has a VIRTUAL_HOST env var set, that port will be selected.

### Multiple Hosts

If you need to support multiple virtual hosts for a container, you can separate each entry with commas. For example, `foo.bar.com,baz.bar.com,bar.com` and each host will be setup the same.

### Wildcard Hosts

You can also use wildcards at the beginning and the end of host name, like `*.bar.com` or `foo.bar.*`. Or even a regular expression, which can be very useful in conjunction with a wildcard DNS service like @abstr_hyperlink , using `~^foo\.bar\..*\.xip\.io` will match `foo.bar. @abstr_number . @abstr_number . @abstr_number . @abstr_number .xip.io`, `foo.bar. @abstr_number . @abstr_number . @abstr_number . @abstr_number .xip.io` and all other given IPs. More information about this topic can be found in the nginx documentation about @abstr_hyperlink .

### Multiple Networks

With the addition of @abstr_hyperlink in Docker @abstr_number . @abstr_number , your `nginx-proxy` container may need to connect to backend containers on multiple networks. By default, if you don't pass the `--net` flag when your `nginx-proxy` container is created, it will only be attached to the default `bridge` network. This means that it will not be able to connect to containers on networks other than `bridge`.

If you want your `nginx-proxy` container to be attached to a different network, you must pass the `--net=my-network` option in your `docker create` or `docker run` command. At the time of this writing, only a single network can be specified at container creation time. To attach to other networks, you can use the `docker network connect` command after your container is created:

@abstr_code_section 

In this example, the `my-nginx-proxy` container will be connected to `my-network` and `my-other-network` and will be able to proxy to other containers attached to those networks.

### Internet vs. Local Network Access

If you allow traffic from the public internet to access your `nginx-proxy` container, you may want to restrict some containers to the internal network only, so they cannot be accessed from the public internet. On containers that should be restricted to the internal network, you should set the environment variable `NETWORK_ACCESS=internal`. By default, the _internal_ network is defined as `@abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number , @abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number , @abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number , @abstr_number . @abstr_number . @abstr_number . @abstr_number / @abstr_number`. To change the list of networks considered internal, mount a file on the `nginx-proxy` at `/etc/nginx/network_internal.conf` with these contents, edited to suit your needs:

@abstr_code_section 

When internal-only access is enabled, external clients with be denied with an `HTTP @abstr_number Forbidden`

> If there is a load-balancer / reverse proxy in front of `nginx-proxy` that hides the client IP (example: AWS Application/Elastic Load Balancer), you will need to use the nginx `realip` module (already installed) to extract the client's IP from the HTTP request headers. Please see the @abstr_hyperlink for more details. This configuration can be added to a new config file and mounted in `/etc/nginx/conf.d/`.

### SSL Backends

If you would like the reverse proxy to connect to your backend using HTTPS instead of HTTP, set `VIRTUAL_PROTO=https` on the backend container.

> Note: If you use `VIRTUAL_PROTO=https` and your backend container exposes port @abstr_number and @abstr_number , `nginx-proxy` will use HTTPS on port @abstr_number . This is almost certainly not what you want, so you should also include `VIRTUAL_PORT= @abstr_number`.

### uWSGI Backends

If you would like to connect to uWSGI backend, set `VIRTUAL_PROTO=uwsgi` on the backend container. Your backend container should then listen on a port rather than a socket and expose that port.

### FastCGI Backends

If you would like to connect to FastCGI backend, set `VIRTUAL_PROTO=fastcgi` on the backend container. Your backend container should then listen on a port rather than a socket and expose that port.

### FastCGI Filr Root Directory

If you use fastcgi,you can set `VIRTUAL_ROOT=xxx` for your root directory

### Default Host

To set the default host for nginx use the env var `DEFAULT_HOST=foo.bar.com` for example
    
    
    $ docker run -d -p  @abstr_number : @abstr_number  -e DEFAULT_HOST=foo.bar.com -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
    

### Separate Containers

nginx-proxy can also be run as two separate containers using the @abstr_hyperlink image and the official @abstr_hyperlink image.

You may want to do this to prevent having the docker socket bound to a publicly exposed container service.

You can demo this pattern with docker-compose:

@abstr_code_section 

To run nginx proxy as a separate container you'll need to have @abstr_hyperlink on your host system.

First start nginx with a volume:
    
    
    $ docker run -d -p  @abstr_number : @abstr_number  --name nginx -v /tmp/nginx:/etc/nginx/conf.d -t nginx
    

Then start the docker-gen container with the shared volume and template:

@abstr_code_section 

Finally, start your containers with `VIRTUAL_HOST` environment variables.
    
    
    $ docker run -e VIRTUAL_HOST=foo.bar.com  ...
    

### SSL Support using letsencrypt

@abstr_hyperlink is a lightweight companion container for the nginx-proxy. It allow the creation/renewal of Let's Encrypt certificates automatically.

Set `DHPARAM_GENERATION` environment variable to `false` to disabled Diffie-Hellman parameters completely. This will also ignore auto-generation made by `nginx-proxy`. The default value is `true`
    
    
     $ docker run -e DHPARAM_GENERATION=false ....
    

### SSL Support

SSL is supported using single host, wildcard and SNI certificates using naming conventions for certificates or optionally specifying a cert name (for SNI) as an environment variable.

To enable SSL:
    
    
    $ docker run -d -p  @abstr_number : @abstr_number  -p  @abstr_number : @abstr_number  -v /path/to/certs:/etc/nginx/certs -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
    

The contents of `/path/to/certs` should contain the certificates and private keys for any virtual hosts in use. The certificate and keys should be named after the virtual host with a `.crt` and `.key` extension. For example, a container with `VIRTUAL_HOST=foo.bar.com` should have a `foo.bar.com.crt` and `foo.bar.com.key` file in the certs directory.

If you are running the container in a virtualized environment (Hyper-V, VirtualBox, etc...), /path/to/certs must exist in that environment or be made accessible to that environment. By default, Docker is not able to mount directories on the host machine to containers running in a virtual machine.

#### Diffie-Hellman Groups

Diffie-Hellman groups are enabled by default, with a pregenerated key in `/etc/nginx/dhparam/dhparam.pem`. You can mount a different `dhparam.pem` file at that location to override the default cert. To use custom `dhparam.pem` files per-virtual-host, the files should be named after the virtual host with a `dhparam` suffix and `.pem` extension. For example, a container with `VIRTUAL_HOST=foo.bar.com` should have a `foo.bar.com.dhparam.pem` file in the `/etc/nginx/certs` directory.

> NOTE: If you don't mount a `dhparam.pem` file at `/etc/nginx/dhparam/dhparam.pem`, one will be generated at startup. Since it can take minutes to generate a new `dhparam.pem`, it is done at low priority in the background. Once generation is complete, the `dhparam.pem` is saved on a persistent volume and nginx is reloaded. This generation process only occurs the first time you start `nginx-proxy`.
> 
> COMPATIBILITY WARNING: The default generated `dhparam.pem` key is @abstr_number bits for A+ security. Some older clients (like Java @abstr_number and @abstr_number ) do not support DH keys with over @abstr_number bits. In order to support these clients, you must either provide your own `dhparam.pem`, or tell `nginx-proxy` to generate a @abstr_number -bit key on startup by passing `-e DHPARAM_BITS= @abstr_number`.

In the separate container setup, no pregenerated key will be available and neither the @abstr_hyperlink image nor the offical @abstr_hyperlink image will generate one. If you still want A+ security in a separate container setup, you'll have to generate a @abstr_number bits DH key file manually and mount it on the nginx container, at `/etc/nginx/dhparam/dhparam.pem`.

#### Wildcard Certificates

Wildcard certificates and keys should be named after the domain name with a `.crt` and `.key` extension. For example `VIRTUAL_HOST=foo.bar.com` would use cert name `bar.com.crt` and `bar.com.key`.

#### SNI

If your certificate(s) supports multiple domain names, you can start a container with `CERT_NAME=<name>` to identify the certificate to be used. For example, a certificate for `*.foo.com` and `*.bar.com` could be named `shared.crt` and `shared.key`. A container running with `VIRTUAL_HOST=foo.bar.com` and `CERT_NAME=shared` will then use this shared cert.

#### OCSP Stapling

To enable OCSP Stapling for a domain, `nginx-proxy` looks for a PEM certificate containing the trusted CA certificate chain at `/etc/nginx/certs/<domain>.chain.pem`, where `<domain>` is the domain name in the `VIRTUAL_HOST` directive. The format of this file is a concatenation of the public PEM CA certificates starting with the intermediate CA most near the SSL certificate, down to the root CA. This is often referred to as the "SSL Certificate Chain". If found, this filename is passed to the NGINX @abstr_hyperlink and OCSP Stapling is enabled.

#### How SSL Support Works

The default SSL cipher configuration is based on the @abstr_hyperlink which should provide compatibility with clients back to Firefox @abstr_number , Chrome @abstr_number , IE @abstr_number , Opera @abstr_number , Safari @abstr_number , Windows XP IE @abstr_number , Android @abstr_number . @abstr_number , Java @abstr_number . Note that the DES-based TLS ciphers were removed for security. The configuration also enables HSTS, PFS, OCSP stapling and SSL session caches. Currently TLS @abstr_number . @abstr_number , @abstr_number . @abstr_number and @abstr_number . @abstr_number are supported. TLS @abstr_number . @abstr_number is deprecated but its end of life is not until June @abstr_number , @abstr_number . It is being included because the following browsers will stop working when it is removed: Chrome < @abstr_number , Firefox < @abstr_number , IE < @abstr_number , Safari < @abstr_number , iOS < @abstr_number , Android Browser < @abstr_number .

If you don't require backward compatibility, you can use the @abstr_hyperlink profile instead by including the environment variable `SSL_POLICY=Mozilla-Modern` to your container. This profile is compatible with clients back to Firefox @abstr_number , Chrome @abstr_number , IE @abstr_number on Windows @abstr_number , Edge, Opera @abstr_number , Safari @abstr_number , Android @abstr_number . @abstr_number , and Java @abstr_number .

Other policies available through the `SSL_POLICY` environment variable are @abstr_hyperlink and the @abstr_hyperlink `AWS-TLS- @abstr_number - @abstr_number - @abstr_number - @abstr_number`, `AWS-TLS- @abstr_number - @abstr_number - @abstr_number - @abstr_number`, `AWS- @abstr_number - @abstr_number`, `AWS- @abstr_number - @abstr_number`, `AWS- @abstr_number - @abstr_number` and `AWS- @abstr_number - @abstr_number`.

Note that the `Mozilla-Old` policy should use a @abstr_number bits DH key for compatibility but this container generates a @abstr_number bits key. The Diffie-Hellman Groups section details different methods of bypassing this, either globally or per virtual-host.

The default behavior for the proxy when port @abstr_number and @abstr_number are exposed is as follows:

  * If a container has a usable cert, port @abstr_number will redirect to @abstr_number for that container so that HTTPS is always preferred when available.
  * If the container does not have a usable cert, a @abstr_number will be returned.



Note that in the latter case, a browser may get an connection error as no certificate is available to establish a connection. A self-signed or generic cert named `default.crt` and `default.key` will allow a client browser to make a SSL connection (likely w/ a warning) and subsequently receive a @abstr_number .

To serve traffic in both SSL and non-SSL modes without redirecting to SSL, you can include the environment variable `HTTPS_METHOD=noredirect` (the default is `HTTPS_METHOD=redirect`). You can also disable the non-SSL site entirely with `HTTPS_METHOD=nohttp`, or disable the HTTPS site with `HTTPS_METHOD=nohttps`. `HTTPS_METHOD` must be specified on each container for which you want to override the default behavior. If `HTTPS_METHOD=noredirect` is used, Strict Transport Security (HSTS) is disabled to prevent HTTPS users from being redirected by the client. If you cannot get to the HTTP site after changing this setting, your browser has probably cached the HSTS policy and is automatically redirecting you back to HTTPS. You will need to clear your browser's HSTS cache or use an incognito window / different browser.

By default, @abstr_hyperlink is enabled with `max-age= @abstr_number` for HTTPS sites. You can disable HSTS with the environment variable `HSTS=off` or use a custom HSTS configuration like `HSTS=max-age= @abstr_number ; includeSubDomains; preload`.   
_WARNING_ : HSTS will force your users to visit the HTTPS version of your site for the `max-age` time - even if they type in `http://` manually. The only way to get to an HTTP site after receiving an HSTS response is to clear your browser's HSTS cache.

### Basic Authentication Support

In order to be able to secure your virtual host, you have to create a file named as its equivalent VIRTUAL_HOST variable on directory /etc/nginx/htpasswd/$VIRTUAL_HOST

@abstr_code_section 

You'll need apache @abstr_number -utils on the machine where you plan to create the htpasswd file. Follow these @abstr_hyperlink 

### Custom Nginx Configuration

If you need to configure Nginx beyond what is possible using environment variables, you can provide custom configuration files on either a proxy-wide or per-`VIRTUAL_HOST` basis.

#### Replacing default proxy settings

If you want to replace the default proxy settings for the nginx container, add a configuration file at `/etc/nginx/proxy.conf`. A file with the default settings would look like this:

```Nginx

# HTTP @abstr_number . @abstr_number support

proxy_http_version @abstr_number . @abstr_number ; proxy_buffering off; proxy_set_header Host $http_host; proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection $proxy_connection; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; proxy_set_header X-Forwarded-Proto $proxy_x_forwarded_proto; proxy_set_header X-Forwarded-Ssl $proxy_x_forwarded_ssl; proxy_set_header X-Forwarded-Port $proxy_x_forwarded_port;

# Mitigate httpoxy attack (see README for details)

proxy_set_header Proxy ""; @abstr_code_section Dockerfile FROM jwilder/nginx-proxy RUN { \ echo 'server_tokens off;'; \ echo 'client_max_body_size @abstr_number m;'; \ } > /etc/nginx/conf.d/my_proxy.conf ```

Or it can be done by mounting in your custom configuration in your `docker run` command:
    
    
    $ docker run -d -p  @abstr_number : @abstr_number  -p  @abstr_number : @abstr_number  -v /path/to/my_proxy.conf:/etc/nginx/conf.d/my_proxy.conf:ro -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
    

#### Per-VIRTUAL_HOST

To add settings on a per-`VIRTUAL_HOST` basis, add your configuration file under `/etc/nginx/vhost.d`. Unlike in the proxy-wide case, which allows multiple config files with any name ending in `.conf`, the per-`VIRTUAL_HOST` file must be named exactly after the `VIRTUAL_HOST`.

In order to allow virtual hosts to be dynamically configured as backends are added and removed, it makes the most sense to mount an external directory as `/etc/nginx/vhost.d` as opposed to using derived images or mounting individual configuration files.

For example, if you have a virtual host named `app.example.com`, you could provide a custom configuration for that host as follows:
    
    
    $ docker run -d -p  @abstr_number : @abstr_number  -p  @abstr_number : @abstr_number  -v /path/to/vhost.d:/etc/nginx/vhost.d:ro -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
    $ { echo 'server_tokens off;'; echo 'client_max_body_size  @abstr_number m;'; } > /path/to/vhost.d/app.example.com
    

If you are using multiple hostnames for a single container (e.g. `VIRTUAL_HOST=example.com,www.example.com`), the virtual host configuration file must exist for each hostname. If you would like to use the same configuration for multiple virtual host names, you can use a symlink:
    
    
    $ { echo 'server_tokens off;'; echo 'client_max_body_size  @abstr_number m;'; } > /path/to/vhost.d/www.example.com
    $ ln -s /path/to/vhost.d/www.example.com /path/to/vhost.d/example.com
    

#### Per-VIRTUAL_HOST default configuration

If you want most of your virtual hosts to use a default single configuration and then override on a few specific ones, add those settings to the `/etc/nginx/vhost.d/default` file. This file will be used on any virtual host which does not have a `/etc/nginx/vhost.d/{VIRTUAL_HOST}` file associated with it.

#### Per-VIRTUAL_HOST location configuration

To add settings to the "location" block on a per-`VIRTUAL_HOST` basis, add your configuration file under `/etc/nginx/vhost.d` just like the previous section except with the suffix `_location`.

For example, if you have a virtual host named `app.example.com` and you have configured a proxy_cache `my-cache` in another custom file, you could tell it to use a proxy cache as follows:
    
    
    $ docker run -d -p  @abstr_number : @abstr_number  -p  @abstr_number : @abstr_number  -v /path/to/vhost.d:/etc/nginx/vhost.d:ro -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
    $ { echo 'proxy_cache my-cache;'; echo 'proxy_cache_valid   @abstr_number   @abstr_number    @abstr_number m;'; echo 'proxy_cache_valid   @abstr_number   @abstr_number m;' } > /path/to/vhost.d/app.example.com_location
    

If you are using multiple hostnames for a single container (e.g. `VIRTUAL_HOST=example.com,www.example.com`), the virtual host configuration file must exist for each hostname. If you would like to use the same configuration for multiple virtual host names, you can use a symlink:
    
    
    $ { echo 'proxy_cache my-cache;'; echo 'proxy_cache_valid   @abstr_number   @abstr_number    @abstr_number m;'; echo 'proxy_cache_valid   @abstr_number   @abstr_number m;' } > /path/to/vhost.d/app.example.com_location
    $ ln -s /path/to/vhost.d/www.example.com /path/to/vhost.d/example.com
    

#### Per-VIRTUAL_HOST location default configuration

If you want most of your virtual hosts to use a default single `location` block configuration and then override on a few specific ones, add those settings to the `/etc/nginx/vhost.d/default_location` file. This file will be used on any virtual host which does not have a `/etc/nginx/vhost.d/{VIRTUAL_HOST}_location` file associated with it.

### Contributing

Before submitting pull requests or issues, please check github to make sure an existing issue or pull request is not already open.

#### Running Tests Locally

To run tests, you need to prepare the docker image to test which must be tagged `jwilder/nginx-proxy:test`:
    
    
    docker build -t jwilder/nginx-proxy:test .  # build the Debian variant image
    

and call the test/pytest.sh script.

Then build the Alpine variant of the image:
    
    
    docker build -f Dockerfile.alpine -t jwilder/nginx-proxy:test .  # build the Alpline variant image
    

and call the test/pytest.sh script again.

If your system has the `make` command, you can automate those tasks by calling:
    
    
    make test
    

You can learn more about how the test suite works and how to write new tests in the test/README.md file.

### Need help?

If you have questions on how to use the image, please ask them on the @abstr_hyperlink 
