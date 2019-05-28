Advanced Architecture to validate TLS certificates

# Introduction

The aim of this work is to try validate each TLS-connection with different techniques that exist nowadays. We are living in a world that everything is connected through internet and to provide security on this connections the majority of them use TLS. But we have seen how some governments use different aproach to circumvent them. Some of this vulnerabilities can be due to bugs in the implementations, bad deployments ... etc, but one of the vulnerability that this work try to resolve is the bad or poor validation of certificates.

Before to send our private data to the other entity, usually in TLS, we have to validate the authenticity of the server with the goal to know that it is who claim it is. We have seen how apple failed in this due to the famous goto fail bug . Although is true that this vulnerability is because of a bad implementation is true that if apple had provided other techniques this situation could be discovered before. Our goal will be to validate each connection with different techniques because maybe an approach says that our connection is secure but perhaps there is another one that says the opposite providing a better solution.

# Techniques

A continuation the list of different techniques that the project is using:

  * RFC -standard way- to validate it we are using the library NSS
  * SSLBlacklist - @abstr_hyperlink 
  * Revoke status - OCSP
  * DANE
  * ICSI-NOTARY - @abstr_hyperlink 
  * Certificate-transparency - @abstr_hyperlink 
  * Pinning



# Installation

#### Prerequisites

  * Python >= @abstr_number . @abstr_number (www.python.org)
  * libpcap-python - @abstr_hyperlink 

@abstr_code_section 




\- Once installed all packages and before to launch the program we have to set our root certificates. First we have to configure the directory that hold them.

@abstr_code_section I use this but any directory is fine. If you change the directory you have to change the config file and set `NSS_DB_DIR`. By the default is `"~/.pki/nssdb"`. Also we have to set the variable `CERTS_DIR`in the config file to say where reside our certificates. This project provide the root Mozilla's certificates in the `certs` folder. Also you should set the log directory `LOG_DIR`.

@abstr_code_section 

In case that you want to remove it from the database

@abstr_code_section 

-

###### OPTIONAL

To configure for example a pin, to be protected against attacks to Facebook. The information provide may be fake since by now there is no way to extract such information securely.

@abstr_code_section 

Once that everything is ready execute.

@abstr_code_section 

# TODO

  * Add DNSSEC support since by now we do not provide DANE verification

  * Verify SCT from CT. There is no way to extract the log's public key

  * We are thinking to write it in golang since is more easy to write concurrent programs thanks to goroutines and channels. We want real time detection. The packages that golang provides offer the majority of all functionality. The application would have less dependencies.




# State

#### WIP

The project try to study some techniques that exist nowadays to validate the certificate. Some of them are not mature enough and have some limitations. Try your own methodology and change whatever you think.
