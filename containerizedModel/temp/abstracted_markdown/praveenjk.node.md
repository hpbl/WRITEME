# Node.js

@abstr_hyperlink @abstr_hyperlink 

Node.js is a JavaScript runtime built on Chrome's V @abstr_number JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. The Node.js package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

The Node.js project is supported by the @abstr_hyperlink . Contributions, policies, and releases are managed under an open governance model. We are also bound by a Code of Conduct.

If you need help using or installing Node.js, please use the @abstr_hyperlink issue tracker.

## Resources for Newcomers

### Official Resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Contributing to the project
  * IRC (node core development): @abstr_hyperlink 



### Unofficial Resources

  * IRC (general questions): @abstr_hyperlink . Please see @abstr_hyperlink for more information regarding the `#node.js` IRC channel.



_Please note that unofficial resources are neither managed by (nor necessarily endorsed by) the Node.js TSC/CTC. Specifically, such resources are not currently covered by the @abstr_hyperlink and the selection and actions of resource operators/moderators are not subject to TSC/CTC oversight._

## Release Types

The Node.js project maintains multiple types of releases:

  * **Current** : Released from active development branches of this repository, versioned by @abstr_hyperlink and signed by a member of the Release Team. Code for Current releases is organized in this repository by major version number. For example: @abstr_hyperlink . The major version number of Current releases will increment every @abstr_number months allowing for breaking changes to be introduced. This happens in April and October every year. Current release lines beginning in October each year have a maximum support life of @abstr_number months. Current release lines beginning in April each year will convert to LTS (see below) after @abstr_number months and receive further support for @abstr_number months.
  * **LTS** : Releases that receive Long-term Support, with a focus on stability and security. Every second Current release line (major version) will become an LTS line and receive @abstr_number months of _Active LTS_ support and a further @abstr_number months of _Maintenance_. LTS release lines are given alphabetically ordered codenames, beginning with v @abstr_number Argon. LTS releases are less frequent and will attempt to maintain consistent major and minor version numbers, only incrementing patch version numbers. There are no breaking changes or feature additions, except in some special circumstances. More information can be found in the @abstr_hyperlink .
  * **Nightly** : Versions of code in this repository on the current Current branch, automatically built every @abstr_number -hours where changes exist. Use with caution.



## Download

Binaries, installers, and source tarballs are available at @abstr_hyperlink .

**Current** and **LTS** releases are available at @abstr_hyperlink , listed under their version strings. The @abstr_hyperlink directory is an alias for the latest Current release. The latest LTS release from an LTS line is available in the form: latest-_codename_. For example: @abstr_hyperlink 

**Nightly** builds are available at @abstr_hyperlink , listed under their version string which includes their date (in UTC time) and the commit SHA at the HEAD of the release.

**API documentation** is available in each release and nightly directory under _docs_. @abstr_hyperlink points to the API documentation of the latest stable version.

### Verifying Binaries

Current, LTS and Nightly download directories all contain a _SHASUM @abstr_number .txt_ file that lists the SHA checksums for each file available for download.

The _SHASUM @abstr_number .txt_ can be downloaded using curl.

@abstr_code_section 

To check that a downloaded file matches the checksum, run it through `sha @abstr_number sum` with a command such as:

@abstr_code_section 

_(Where "node-vx.y.z.tar.gz" is the name of the file you have downloaded)_

Additionally, Current and LTS releases (not Nightlies) have GPG signed copies of SHASUM @abstr_number .txt files available as SHASUM @abstr_number .txt.asc. You can use `gpg` to verify that the file has not been tampered with.

To verify a SHASUM @abstr_number .txt.asc, you will first need to import all of the GPG keys of individuals authorized to create releases. They are listed at the bottom of this README under Release Team. Use a command such as this to import the keys:

@abstr_code_section 

_(See the bottom of this README for a full script to import active release keys)_

You can then use `gpg --verify SHASUMS @abstr_number .txt.asc` to verify that the file has been signed by an authorized member of the Node.js team.

Once verified, use the SHASUMS @abstr_number .txt.asc file to get the checksum for the binary verification command above.

## Building Node.js

See BUILDING.md for instructions on how to build Node.js from source.

## Security

All security bugs in Node.js are taken seriously and should be reported by emailing security@nodejs.org. This will be delivered to a subset of the project team who handle security issues. Please don't disclose security bugs publicly until they have been handled by the security team.

Your email will be acknowledged within @abstr_number hours, and you’ll receive a more detailed response to your email within @abstr_number hours indicating the next steps in handling your report.

## Current Project Team Members

The Node.js project team comprises a group of core collaborators and a sub-group that forms the _Core Technical Committee_ (CTC) which governs the project. For more information about the governance of the Node.js project, see GOVERNANCE.md.

### CTC (Core Technical Committee)

  * @abstr_hyperlink - **Anna Henningsen** <anna@addaleax.net>
  * @abstr_hyperlink - **Ben Noordhuis** <info@bnoordhuis.nl>
  * @abstr_hyperlink - **Сковорода Никита Андреевич** <chalkerx@gmail.com>
  * @abstr_hyperlink - **Chris Dickinson** <christopher.s.dickinson@gmail.com>
  * @abstr_hyperlink - **Colin Ihrig** <cjihrig@gmail.com>
  * @abstr_hyperlink - **Evan Lucas** <evanlucas@me.com>
  * @abstr_hyperlink - **Jeremiah Senkpiel** <fishrock @abstr_number @rocketmail.com>
  * @abstr_hyperlink - **Fedor Indutny** <fedor.indutny@gmail.com>
  * @abstr_hyperlink - **James M Snell** <jasnell@gmail.com>
  * @abstr_hyperlink - **Michael Dawson** <michael_dawson@ca.ibm.com>
  * @abstr_hyperlink - **Julien Gilli** <jgilli@nodejs.org>
  * @abstr_hyperlink - **Brian White** <mscdex@mscdex.net>
  * @abstr_hyperlink - **Ali Ijaz Sheikh** <ofrobots@google.com>
  * @abstr_hyperlink - **Rod Vagg** <rod@vagg.org>
  * @abstr_hyperlink - **Shigeki Ohtsu** <ohtsu@iij.ad.jp>
  * @abstr_hyperlink - **Myles Borins** <myles.borins@gmail.com>
  * @abstr_hyperlink - **Sakthipriyan Vairamani** <thechargingvolcano@gmail.com>
  * @abstr_hyperlink - **Trevor Norris** <trev.norris@gmail.com>
  * @abstr_hyperlink - **Rich Trott** <rtrott@gmail.com>



### Collaborators

  * @abstr_hyperlink - **Aleksei Koziatinskii** <ak @abstr_number spb@gmail.com>
  * @abstr_hyperlink - **Andras** <andras@kinvey.com>
  * @abstr_hyperlink - **Andreas Madsen** <amwebdk@gmail.com>
  * @abstr_hyperlink - **Bryan English** <bryan@bryanenglish.com>
  * @abstr_hyperlink - **Benjamin Gruenbaum** <benjamingr@gmail.com>
  * @abstr_hyperlink - **Bradley Farias** <bradley.meck@gmail.com>
  * @abstr_hyperlink - **Brendan Ashworth** <brendan.ashworth@me.com>
  * @abstr_hyperlink - **Bartosz Sosnowski** <bartosz@janeasystems.com>
  * @abstr_hyperlink - **Calvin Metcalf** <calvin.metcalf@gmail.com>
  * @abstr_hyperlink - **Claudio Rodriguez** <cjrodr@yahoo.com>
  * @abstr_hyperlink - **Daniel Bevenius** <daniel.bevenius@gmail.com>
  * @abstr_hyperlink - **Domenic Denicola** <d@domenic.me>
  * @abstr_hyperlink - **Robert Jefe Lindstaedt** <robert.lindstaedt@gmail.com>
  * @abstr_hyperlink - **Alexander Makarenko** <estliberitas@gmail.com>
  * @abstr_hyperlink - **Eugene Ostroukhov** <eostroukhov@google.com>
  * @abstr_hyperlink - **Franziska Hinkelmann** <franziska.hinkelmann@gmail.com>
  * @abstr_hyperlink - **Daniel Wang** <wangyang @abstr_number @gmail.com>
  * @abstr_hyperlink - **Wyatt Preul** <wpreul@gmail.com>
  * @abstr_hyperlink - **Gibson Fahnestock** <gibfahn@gmail.com>
  * @abstr_hyperlink - **Rebecca Turner** <me@re-becca.org>
  * @abstr_hyperlink - **Ilkka Myller** <ilkka.myller@nodefield.com>
  * @abstr_hyperlink - **Isaac Z. Schlueter** <i@izs.me>
  * @abstr_hyperlink - **Imran Iqbal** <imran@imraniqbal.org>
  * @abstr_hyperlink - **Jackson Tian** <shyvo @abstr_number @gmail.com>
  * @abstr_hyperlink - **Johan Bergström** <bugs@bergstroem.nu>
  * @abstr_hyperlink - **Yuval Brik** <yuval@brik.org.il>
  * @abstr_hyperlink - **João Reis** <reis@janeasystems.com>
  * @abstr_hyperlink - **Josh Gavant** <josh.gavant@outlook.com>
  * @abstr_hyperlink - **Julian Duque** <julianduquej@gmail.com>
  * @abstr_hyperlink - **Minwoo Jung** <jmwsoft@gmail.com>
  * @abstr_hyperlink - **Lance Ball** <lball@redhat.com>
  * @abstr_hyperlink - **Luigi Pinca** <luigipinca@gmail.com>
  * @abstr_hyperlink - **Aleksey Smolenchuk** <lxe@lxe.co>
  * @abstr_hyperlink - **Matthew Loring** <mattloring@google.com>
  * @abstr_hyperlink - **Matteo Collina** <matteo.collina@gmail.com>
  * @abstr_hyperlink - **Nicu Micleușanu** <micnic @abstr_number @gmail.com>
  * @abstr_hyperlink - **Mikeal Rogers** <mikeal.rogers@gmail.com>
  * @abstr_hyperlink - **Christopher Monsanto** <chris@monsan.to>
  * @abstr_hyperlink - **Teddy Katz** <teddy.katz@gmail.com>
  * @abstr_hyperlink - **Oleg Elifantiev** <oleg@elifantiev.ru>
  * @abstr_hyperlink - **Alexis Campailla** <orangemocha@nodejs.org>
  * @abstr_hyperlink - **Forrest L Norvell** <ogd@aoaioxxysz.net>
  * @abstr_hyperlink - **Petka Antonov** <petka_antonov@hotmail.com>
  * @abstr_hyperlink - **Phillip Johnsen** <johphi@gmail.com>
  * @abstr_hyperlink - **Bert Belder** <bertbelder@gmail.com>
  * @abstr_hyperlink - **Minqi Pan** <pmq @abstr_number @gmail.com>
  * @abstr_hyperlink - **Prince John Wesley** <princejohnwesley@gmail.com>
  * @abstr_hyperlink - **Stephen Belanger** <admin@stephenbelanger.com>
  * @abstr_hyperlink - **Alex Kocharin** <alex@kocharin.ru>
  * @abstr_hyperlink - **Ryan Graham** <r.m.graham@gmail.com>
  * @abstr_hyperlink - **Robert Kowalski** <rok@kowalski.gd>
  * @abstr_hyperlink - **Roman Klauke** <romaaan.git@gmail.com>
  * @abstr_hyperlink - **Ron Korving** <ron@ronkorving.nl>
  * @abstr_hyperlink - **Ingvar Stepanyan** <me@rreverser.com>
  * @abstr_hyperlink - **Saúl Ibarra Corretgé** <saghul@gmail.com>
  * @abstr_hyperlink - **Sam Roberts** <vieuxtech@gmail.com>
  * @abstr_hyperlink - **Santiago Gimeno** <santiago.gimeno@gmail.com>
  * @abstr_hyperlink - **Nikolai Vavilov** <vvnicholas@gmail.com>
  * @abstr_hyperlink - **Roman Reiss** <me@silverwind.io>
  * @abstr_hyperlink - **Steven R Loomis** <srloomis@us.ibm.com>
  * @abstr_hyperlink - **Stefan Budeanu** <stefan@budeanu.com>
  * @abstr_hyperlink - **Michaël Zasso** <targos@protonmail.com>
  * @abstr_hyperlink - **Christian Tellnes** <christian@tellnes.no>
  * @abstr_hyperlink - **Glen Keane** <glenkeane. @abstr_number @gmail.com>
  * @abstr_hyperlink - **Thorsten Lorenz** <thlorenz@gmx.de>
  * @abstr_hyperlink - **Mike Tunnicliffe** <m.j.tunnicliffe@gmail.com>
  * @abstr_hyperlink - **Vladimir Kurchatkin** <vladimir.kurchatkin@gmail.com>
  * @abstr_hyperlink - **Jeremy Whitlock** <jwhitlock@apache.org>
  * @abstr_hyperlink - **Yorkie Liu** <yorkiefixer@gmail.com>
  * @abstr_hyperlink - **Yosuke Furukawa** <yosuke.furukawa@gmail.com>
  * @abstr_hyperlink - **Kat Marchán** <kzm@sykosomatic.org>



Collaborators (which includes CTC members) follow the COLLABORATOR_GUIDE.md in maintaining the Node.js project.

### Release Team

Releases of Node.js and io.js will be signed with one of the following GPG keys:

  * **Chris Dickinson** <christopher.s.dickinson@gmail.com> `@abstr_number F @abstr_number D @abstr_number F @abstr_number DE @abstr_number B @abstr_number D @abstr_number A @abstr_number AC @abstr_number E @abstr_number B`
  * **Colin Ihrig** <cjihrig@gmail.com> `@abstr_number AE @abstr_number C @abstr_number D @abstr_number BAFA @abstr_number DD @abstr_number BDBE @abstr_number B @abstr_number C @abstr_number`
  * **Evan Lucas** <evanlucas@me.com> `B @abstr_number AE @abstr_number FFD @abstr_number F @abstr_number B @abstr_number B @abstr_number A @abstr_number C @abstr_number CA @abstr_number`
  * **James M Snell** <jasnell@keybase.io> `@abstr_number DCFD @abstr_number A @abstr_number C @abstr_number B @abstr_number BC @abstr_number EC @abstr_number A @abstr_number EDE @abstr_number FC @abstr_number`
  * **Jeremiah Senkpiel** <fishrock@keybase.io> `FD @abstr_number A @abstr_number F @abstr_number B @abstr_number C @abstr_number B @abstr_number F @abstr_number FE @abstr_number EB @abstr_number E`
  * **Myles Borins** <myles.borins@gmail.com> `C @abstr_number F @abstr_number DFFF @abstr_number E @abstr_number C @abstr_number A @abstr_number D @abstr_number E @abstr_number BC @abstr_number CC @abstr_number F @abstr_number C @abstr_number`
  * **Rod Vagg** <rod@vagg.org> `DD @abstr_number F @abstr_number BAE @abstr_number E @abstr_number DD @abstr_number AC @abstr_number C @abstr_number F @abstr_number D @abstr_number D`
  * **Sam Roberts** <octetcloud@keybase.io> `@abstr_number A @abstr_number D @abstr_number D @abstr_number B @abstr_number CE @abstr_number ADF @abstr_number BF @abstr_number F @abstr_number AD @abstr_number D @abstr_number`



The full set of trusted release keys can be imported by running:

@abstr_code_section 

See the section above on Verifying Binaries for details on what to do with these keys to verify that a downloaded file is official.

Previous releases of Node.js have been signed with one of the following GPG keys:

  * **Isaac Z. Schlueter** <i@izs.me> `@abstr_number C @abstr_number E @abstr_number E @abstr_number B @abstr_number E @abstr_number C @abstr_number F @abstr_number B @abstr_number A @abstr_number B @abstr_number A @abstr_number C @abstr_number CF @abstr_number`
  * **Julien Gilli** <jgilli@fastmail.fm> `@abstr_number F @abstr_number EE @abstr_number B @abstr_number C @abstr_number BC @abstr_number DD @abstr_number A @abstr_number F @abstr_number C @abstr_number D`
  * **Timothy J Fontaine** <tjfontaine@gmail.com> `@abstr_number DFD @abstr_number AB @abstr_number B @abstr_number C @abstr_number D @abstr_number FF @abstr_number D @abstr_number D`


