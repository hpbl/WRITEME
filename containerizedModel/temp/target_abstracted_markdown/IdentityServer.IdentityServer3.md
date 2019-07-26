# IdentityServer @abstr_number

## Note: This repository is no longer in active development or maintenance, other than reported security vulnerabilities.

## We highly encourage you to consider @abstr_hyperlink instead.

## If you have questions and are seeking free support, see @abstr_hyperlink for more details.

## If you require commercial support, see @abstr_hyperlink for more details.

Dev build: @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

@abstr_hyperlink OpenID Connect implementation.

## Overview

IdentityServer is a .NET/Katana-based framework and hostable component that allows implementing single sign-on and access control for modern web applications and APIs using protocols like OpenID Connect and OAuth @abstr_number . It supports a wide range of clients like mobile, web, SPAs and desktop applications and is extensible to allow integration in new and existing architectures.

Watch this for the big picture: @abstr_hyperlink - and @abstr_hyperlink for a more code-centric talk.

Go to the documentation @abstr_hyperlink .

@abstr_hyperlink / @abstr_hyperlink 

## Getting started

IdentityServer is designed as an OWIN/Katana component. By referencing the library or nuget you get a `UseIdentityServer` extension method for `IAppBuilder` that allows setting up IdentityServer in your OWIN host: 

@abstr_code_section 

_Note:_ If you're hosting in IIS, make sure you @abstr_hyperlink .

For more information, e.g.

  * support for MembershipReboot and ASP.NET Identity based user stores
  * support for additional Katana authentication middleware (e.g. Google, Twitter, Facebook etc)
  * support for EntityFramework based persistence of configuration
  * support for WS-Federation
  * extensibility



check out the @abstr_hyperlink and the @abstr_hyperlink .

## Related repositories

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Credits

IdentityServer is built using the following great open source projects:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



..and is supported by the following open source friendly companies:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



...and last but not least thanks to all @abstr_hyperlink !

IdentityServer is a @abstr_hyperlink project

@abstr_image 
