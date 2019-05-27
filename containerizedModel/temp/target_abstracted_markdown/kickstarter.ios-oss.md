@abstr_hyperlink 

@abstr_hyperlink 

Welcome to Kickstarter’s open source iOS app! Come on in, take your shoes off, stay a while—explore how Kickstarter’s native squad has built and continues to build the app.

We’ve also open sourced our @abstr_hyperlink , and read more about our journey to open source @abstr_hyperlink .

## Getting Started

@abstr_number . Install Xcode. @abstr_number . Clone this repository. @abstr_number . Run `make bootstrap` to install tools and dependencies. @abstr_number . Run `make test-all` to build and run tests on all platforms. 

&# @abstr_number ; To provide a mock version that serves up hard-coded data immediately, set `KsApi.Secrets.isOSS` = `true`.

## Some fun things to explore

If you’re just looking for a quick glance at a few things we’re particularly proud of, look no further:

  * The @abstr_hyperlink directory holds nearly @abstr_number screenshots of various screens in every language, device and edge-case state that we like to make sure stays true. For example, a backer viewing a project in French @abstr_hyperlink , or a creator looking at their dashboard in German and on an iPad @abstr_hyperlink .

  * We use Swift Playgrounds for @abstr_hyperlink . Most major screens in the app get a corresponding playground where we can see a wide variety of devices, languages and data in real time. Browse our collection of playgrounds @abstr_hyperlink .

  * @abstr_hyperlink as a lightweight way to isolate side effects and embrace a functional core. We write @abstr_hyperlink as a pure mapping of input signals to output signals, and @abstr_hyperlink them heavily, including tests for localization, accessibility and event tracking.




## Documentation

While we’re at it, why not share our docs? Check out the @abstr_hyperlink we have written so far for more documentation.

## Dependencies

We make heavy use of the following projects, and so it can be helpful to be familiar with them:

### @abstr_number st party

  * @abstr_hyperlink @abstr_hyperlink : Foundation of types and functions we feel are missing from the Swift standard library.

  * @abstr_hyperlink @abstr_hyperlink : A collection of operators we like to add to ReactiveCocoa.




### @abstr_number rd party

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Notices for @abstr_number rd party libraries in this repository are contained in `NOTICE.md`.

## Contributing

We intend for this project to be an educational resource: we are excited to share our wins, mistakes, and methodology of iOS development as we work in the open. Our primary focus is to continue improving the app for our users in line with our roadmap.

The best way to submit feedback and report bugs is to open a GitHub issue. Please be sure to include your operating system, device, version number, and steps to reproduce reported bugs. Keep in mind that all participants will be expected to follow our code of conduct.

## Code of Conduct

We aim to share our knowledge and findings as we work daily to improve our product, for our community, in a safe and open space. We work as we live, as kind and considerate human beings who learn and grow from giving and receiving positive, constructive feedback. We reserve the right to delete or ban any behavior violating this base foundation of respect.

## Find this interesting?

We do too, and we’re @abstr_hyperlink !

## License

@abstr_code_section 
