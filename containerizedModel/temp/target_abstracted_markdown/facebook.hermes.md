# Hermes JS Engine

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_image 

Hermes is a JavaScript engine optimized for fast start up of @abstr_hyperlink apps on Android. It features ahead-of-time static optimization and compact bytecode.

If you're only interested in using pre-built Hermes in a new or existing React Native app, you do not need to follow this guide or have direct access to the Hermes source. Instead, just follow @abstr_hyperlink .

If you want to know how to build and hack on Hermes directly, and/or integrate Hermes built from source into a React Native app then read on.

The instructions here very briefly cover steps to build the Hermes CLI. They assume you have typical native development tools setup for your OS, and support for cmake and Ninja. For more details of required dependencies, building Hermes with different options, etc. follow these links instead:

  * Building and Running Hermes
  * Using a custom Hermes build in a React Native app



To build a local debug version of the Hermes CLI tools the following steps should get you started on macOS/Linux:

@abstr_code_section 

Or if you're using Windows, the following should get you going in a Git Bash shell:

@abstr_code_section 

You will now be in a directory with the output of building Hermes into CLI tools. From here you can run a piece of JavaScript as follows:

@abstr_code_section 

## Contributing

The main purpose of this repository is to continue to evolve Hermes, making it faster and more efficient. We are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Hermes.

### Code of Conduct

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read @abstr_hyperlink so that you can understand what actions will and will not be tolerated.

### Contributing Guide

Read our contributing guide to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Hermes.

### License

Hermes is MIT licensed.
