 React Native for Windows 

Build native Windows apps with React. 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

@abstr_hyperlink enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and @abstr_hyperlink . The focus of React Native is on developer efficiency across all the platforms you care about - learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.

This repository adds support for the @abstr_hyperlink , which allows you to build apps for @abstr_hyperlink including PCs, tablets, @abstr_number -in- @abstr_number s, Xbox, Mixed reality devices etc. 

## Status and roadmap

We are in the process of re-implementing react-native-windows in C++, for better performance, and to better align with the shared C++ react-native core as it evolves. Please see the Roadmap @abstr_number blog for details on this effort and investment roadmap for the upcoming months.

### Latest updates

*Last updated: July @abstr_number *

Both the `current` and `vnext` implementations of `react-native-windows` have been upgraded to support @abstr_hyperlink . Please see the July @abstr_number Updates Blog for all the latest updates!

## Quick Links

  * Getting Started
  * Getting Help
  * Documentation
  * Examples
  * Extending React Native
  * Opening Issues
  * Contributing
  * License
  * Code of Conduct



## Introduction

See the official @abstr_hyperlink for an introduction to React Native.

## System Requirements

  * You can run React Native Windows UWP apps only on Windows @abstr_number devices 
    * React Native Windows - @abstr_hyperlink supports Windows @abstr_number SDK >= @abstr_hyperlink and Windows @abstr_number . @abstr_number 
    * React Native Windows - @abstr_hyperlink currently supports Windows @abstr_number SDK >= @abstr_hyperlink 
  * You can run React Native Windows WPF apps using the @abstr_hyperlink implementation on Windows @abstr_number - @abstr_number so long as .NET @abstr_number . @abstr_number is installed on the end user's machine
  * Download @abstr_hyperlink . (Visual Studio @abstr_number support has been deprecated.) 
    * You will need to start Visual Studio after it is installed to do some final setup before it can be used to build or run your React Native Windows application



_Note_ : Development on React Native Windows itself currently requires Visual Studio @abstr_number or higher. It is not currently supported with VS Code, but work is ongoing as tracked @abstr_hyperlink . 

## Getting Started

Want to develop a React Native Windows app? Head over to our Getting Started Guide - current.

You can also begin to prototype or try out the @abstr_hyperlink version under development by checking out the Getting Started Guide - vnext 

## Getting Help

  * Chat with us on @abstr_hyperlink in #react-native-platforms
  * If it turns out that you may have found a bug, please open an issue



## Documentation

@abstr_hyperlink , and we're working to ensure the React Native Windows is part of that documentation story. Check out the @abstr_hyperlink for further details about the React API in general.

For information on parity status with Android and iOS, including details on implemented and missing components and modules, along with related issues for missing features from partial implementations, go here for the current `react-native-windows` implementation and here for `vnext`.

## Extending React Native

  * Looking for a component? @abstr_hyperlink 
  * Fellow developers write and publish React Native modules to npm and open source them on GitHub.
  * Third party modules may be missing Windows support, so reach out to the project owners directly.
  * Making modules helps grow the React Native ecosystem and community. We recommend writing modules for your use cases and sharing them on npm.
  * You should almost never need to modify or fork React Native Windows itself (the ReactNative and ReactNative.Shared project/sources) to create custom controls. The extension points should already exist to do just about anything!
  * Read the guides on Native Modules for Windows and Native UI Components for Windows if you are interested in extending native functionality. _Note_ : Guides for vnext coming soon.



## Opening Issues

If you encounter a bug with the React Native Windows plugin, we would like to hear about it. Search the @abstr_hyperlink and try to make sure your problem doesn’t already exist before opening a new issue. It’s helpful if you include the version of Windows, React Native, React Native Windows plugin, and device family (i.e., mobile, desktop, Xbox, etc.) you’re using. Please include a stack trace and reduced repro case when appropriate, too. 

Please use the @abstr_hyperlink to file your issues. 

The GitHub issues are intended for bug reports and feature requests. For help and questions with using the React Native Windows plugin please make use of the resources listed in the Getting Help section. 

## Contributing

Make sure to install the system requirements. If you just want to get started with developing your own app, read Getting Started with App Development. You only need to interact with `npm` to use for your app development.

For more information about contributing PRs, see : \- Contribution Guidelines for current react-native-windows \- Contribution Guidelines for vnext react-native-windows

@abstr_hyperlink and @abstr_hyperlink are great starting points for PRs.

### Examples

  * Using the CLI in the Getting Started sections will set you up with a sample React-Native-Windows app that you can begin editing.
  * If you're looking for sample code, just browse the RNTester folder in the GitHub web UI



## License

The React Native Windows plugin, including modifications to the original Facebook source code, and all newly contributed code is provided under the MIT License. Portions of the React Native Windows plugin derived from React Native are copyright Facebook.

## Code of Conduct

This project has adopted the @abstr_hyperlink . For more information see the @abstr_hyperlink or contact @abstr_hyperlink with any additional questions or comments.
