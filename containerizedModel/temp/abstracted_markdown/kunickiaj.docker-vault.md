# What is docker-vault?

@abstr_hyperlink 

This is a Dockerized image of @abstr_hyperlink . Vault is tool to securely access _secrets_ such as API keys, passwords, certificates, token, and so on.

# Run from Docker Hub

A pre-built image is available on @abstr_hyperlink and can be run as follows:
    
    
    docker run -it cgswong/vault:latest
    

By default the container will run the _vault_ command showing the version. Simply run your regular `vault` commands as normal to use the image.

### notes

##### default binding

vault binds to @abstr_number . @abstr_number . @abstr_number . @abstr_number by default, make sure you bind vault's listener to to @abstr_number . @abstr_number . @abstr_number . @abstr_number .

##### development server

when running the development server, vault binds to localhost by default. A possible workaround would be to create the following vault config: @abstr_code_section and then pass the configuration to vault. for example, if you saved the mentioned configuration at /tmp/vault.conf: @abstr_code_section 

# Build from Source

@abstr_number . Make sure @abstr_hyperlink is installed.

@abstr_number . Clone _docker-vault_ from @abstr_hyperlink 
    
    
    @abstr_code_section
    

@abstr_number . Build the docker image (change `[version]` below with the appropriate version, and `[your_name]` as appropriate)
    
    
    @abstr_code_section
    

@abstr_number . Run a docker container with that image (change [your_name] as done above)
    
    
    @abstr_code_section
    

# User Feedback

## Issues

If you have any problems with or questions about this image, please contact me through a @abstr_hyperlink .

## Contributing

You are invited to contribute new features, fixes, or updates, large or small; I'm always thrilled to receive pull requests, and I'll do my best to process them as fast as I can.

Before you start to code, I recommend discussing your plans through a @abstr_hyperlink , especially for more ambitious contributions. This gives other contributors a chance to point you in the right direction, give you feedback on your design, and help you find out if someone else is working on the same thing.
