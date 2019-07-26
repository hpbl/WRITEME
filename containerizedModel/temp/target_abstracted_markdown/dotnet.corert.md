# .NET Core Runtime (CoreRT)

This repo contains the .NET Core runtime optimized for ahead of time compilation. The CoreRT compiler can compile a managed .NET Core application into a native (architecture specific) single-file executable that is easy to deploy. It can also produce standalone dynamic or static libraries that can be consumed by applications written in other programming languages. To learn more about CoreRT, see the intro document.

## Try Our Samples

If you would like to give CoreRT a try, we publish daily snapshots of CoreRT to a NuGet feed. Using CoreRT is as simple as adding a new package reference to your .NET Core project and publishing it. Check out one of our samples: a "Hello World" console app, a simple ASP.NET Core app, a MonoGame game or a native library. The `README.md` file in each sample's directory will guide you through the process step by step.

## Platform Support

This is a work in progress. The current state of platform support: \- Windows, MacOS and Linux x @abstr_number w/ RyuJIT codegen is able to compile many complex apps. \- ASP.NET Core sample \- MonoGame sample \- @abstr_hyperlink demo \- @abstr_hyperlink sample \- @abstr_hyperlink sample \- Unsupported features: @abstr_hyperlink (e.g. `Assembly.LoadFile`), @abstr_hyperlink (e.g. `System.Reflection.Emit`), @abstr_hyperlink (e.g. COM, WinRT) \- Linux ARM w/ RyuJIT codegen: ElmSharp Hello Tizen application ( @abstr_hyperlink ) \- CppCodeGen (targets all platforms that support C++): Simple C# programs. The big missing features are @abstr_hyperlink and @abstr_hyperlink . \- WebAssembly: Early prototype that compiles and runs very trivial programs only. Many features are @abstr_hyperlink .

## How to Engage, Contribute and Provide Feedback

Some of the best ways to contribute are to try things out, file bugs, and join in design conversations.

Looking for something to work on? The @abstr_hyperlink issues are a great place to start. Take a look at our documentation to find out about the architecture and learn how to build and test the repo.

This project follows the @abstr_hyperlink .

@abstr_hyperlink 

### Reporting security issues and security bugs

Security issues and bugs should be reported privately, via email, to the Microsoft Security Response Center (MSRC) @abstr_hyperlink . You should receive a response within @abstr_number hours. If for some reason you do not, please follow up via email to ensure we received your original message. Further information, including the MSRC PGP key, can be found in the @abstr_hyperlink .

## License

The CoreRT Repo is licensed under the @abstr_hyperlink .

## .NET Foundation

CoreRT is a @abstr_hyperlink project.

This project has adopted the code of conduct defined by the @abstr_hyperlink to clarify expected behavior in our community. For more information, see the @abstr_hyperlink .

## Related Projects

There are many .NET related projects on GitHub. \- The @abstr_hyperlink links to @abstr_number s of .NET projects, from Microsoft and the community. \- The @abstr_hyperlink is the best place to start learning about @abstr_hyperlink .
