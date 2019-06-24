# Mail-in-a-Box

By @abstr_hyperlink and @abstr_hyperlink .

Mail-in-a-Box helps individuals take back control of their email by defining a one-click, easy-to-deploy SMTP+everything else server: a mail server in a box.

**Please see @abstr_hyperlink for the project's website and setup guide!**

* * *

Our goals are to:

  * Make deploying a good mail server easy.
  * Promote @abstr_hyperlink , innovation, and privacy on the web.
  * Have automated, auditable, and @abstr_hyperlink configuration.
  * **Not** make a totally unhackable, NSA-proof server.
  * **Not** make something customizable by power users.



Additionally, this project has a Code of Conduct, which supersedes the goals above. Please review it when joining our community.

## The Box

Mail-in-a-Box turns a fresh Ubuntu @abstr_number . @abstr_number LTS @abstr_number -bit machine into a working mail server by installing and configuring various components.

It is a one-click email appliance. There are no user-configurable setup options. It "just works".

The components installed are:

  * SMTP ( @abstr_hyperlink ), IMAP ( @abstr_hyperlink ), CardDAV/CalDAV ( @abstr_hyperlink ), Exchange ActiveSync ( @abstr_hyperlink )
  * Webmail ( @abstr_hyperlink ), static website hosting ( @abstr_hyperlink )
  * Spam filtering ( @abstr_hyperlink ), greylisting ( @abstr_hyperlink )
  * DNS ( @abstr_hyperlink ) with @abstr_hyperlink , DKIM ( @abstr_hyperlink ), @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink records automatically set
  * Backups ( @abstr_hyperlink ), firewall ( @abstr_hyperlink ), intrusion protection ( @abstr_hyperlink ), system monitoring ( @abstr_hyperlink )



It also includes:

  * A control panel and API for adding/removing mail users, aliases, custom DNS records, etc. and detailed system monitoring.



For more information on how Mail-in-a-Box handles your privacy, see the security details page.

## Installation

See the @abstr_hyperlink for detailed, user-friendly instructions.

For experts, start with a completely fresh (really, I mean it) Ubuntu @abstr_number . @abstr_number LTS @abstr_number -bit machine. On the machine...

Clone this repository:
    
    
    $ git clone https://github.com/mail-in-a-box/mailinabox
    $ cd mailinabox
    

_Optional:_ Download Josh's PGP key and then verify that the sources were signed by him:
    
    
    $ curl -s https://keybase.io/joshdata/key.asc | gpg --import
    gpg: key C @abstr_number BDD @abstr_number : public key "Joshua Tauberer <jt@occams.info>" imported
    
    $ git verify-tag v @abstr_number . @abstr_number 
    gpg: Signature made ..... using RSA key ID C @abstr_number BDD @abstr_number 
    gpg: Good signature from "Joshua Tauberer <jt@occams.info>"
    gpg: WARNING: This key is not certified with a trusted signature!
    gpg:          There is no indication that the signature belongs to the owner.
    Primary key fingerprint:  @abstr_number F @abstr_number C  @abstr_number E @abstr_number   @abstr_number CC D @abstr_number   @abstr_number B   @abstr_number AEA B @abstr_number   @abstr_number F @abstr_number  C @abstr_number B DD @abstr_number
    

You'll get a lot of warnings, but that's OK. Check that the primary key fingerprint matches the fingerprint in the key details at @abstr_hyperlink and on his @abstr_hyperlink . (Of course, if this repository has been compromised you can't trust these instructions.)

Checkout the tag corresponding to the most recent release:
    
    
    $ git checkout v @abstr_number . @abstr_number
    

Begin the installation.
    
    
    $ sudo setup/start.sh
    

For help, DO NOT contact Josh directly --- I don't do tech support by email or tweet (no exceptions).

Post your question on the @abstr_hyperlink instead, where maintainers and Mail-in-a-Box users may be able to help you.

## Contributing and Development

Mail-in-a-Box is an open source project. Your contributions and pull requests are welcome. See CONTRIBUTING to get started. 

## The Acknowledgements

This project was inspired in part by the @abstr_hyperlink blog post by Drew Crawford, @abstr_hyperlink by Alex Payne, and conversations with @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink .

Mail-in-a-Box is similar to @abstr_hyperlink and @abstr_hyperlink .

## The History

  * In @abstr_number I wrote a relatively popular Mozilla Thunderbird extension that added client-side SPF and DKIM checks to mail to warn users about possible phishing: @abstr_hyperlink , @abstr_hyperlink .
  * In August @abstr_number I began Mail-in-a-Box by combining my own mail server configuration with the setup in @abstr_hyperlink and making the setup steps reproducible with bash scripts.
  * Mail-in-a-Box was a semifinalist in the @abstr_number @abstr_hyperlink , but it was not selected as a winner.
  * Mail-in-a-Box hit the front page of Hacker News in @abstr_hyperlink @abstr_number , @abstr_hyperlink @abstr_number , @abstr_hyperlink @abstr_number , and @abstr_hyperlink @abstr_number .
  * FastCompany mentioned Mail-in-a-Box a @abstr_hyperlink on June @abstr_number , @abstr_number .


