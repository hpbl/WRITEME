# LibSass - Sass compiler written in C++

Currently maintained by Marcel Greter ([@mgreter]) and Michael Mifsud ([@xzyfer])   
Originally created by Aaron Leung ([@akhleung]) and Hampton Catlin ([@hcatlin])

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink is just a library! If you want to use LibSass to compile Sass, you need an implementer. Some implementations are only bindings into other programming languages. But most also ship with a command line interface (CLI) you can use directly. There is also @abstr_hyperlink , which is the official lightweight CLI tool built by the same people as LibSass.

### Excerpt of "sanctioned" implementations:

  * https://github.com/sass/node-sass (Node.js)
  * https://github.com/sass/perl-libsass (Perl)
  * https://github.com/sass/libsass-python (Python)
  * https://github.com/wellington/go-libsass (Go)
  * https://github.com/sass/sassc-ruby (Ruby)
  * https://github.com/sass/libsass-net (C#)
  * https://github.com/medialize/sass.js (JS)
  * https://github.com/bit @abstr_number /jsass (Java)



This list does not say anything about the quality of either the listed or not listed implementations!   
The authors of the listed projects above are just known to work regularly together with LibSass developers.

## About

LibSass is a C++ port of the original Ruby Sass CSS compiler with a C API. We coded LibSass with portability and efficiency in mind. You can expect LibSass to be a lot faster than Ruby Sass and on par or faster than the best alternative CSS compilers around.

## Developing

As noted above, the LibSass repository does not contain any binaries or other way to execute LibSass. Therefore, you need an implementer to develop LibSass. Easiest is to start with the official @abstr_hyperlink CLI wrapper. It is _guaranteed_ to compile with the latest code in LibSass master, since it is also used in the CI process. There is no limitation here, as you may use any other LibSass implementer to test your LibSass branch!

## Testing

Since LibSass is a pure library, tests are run through the @abstr_hyperlink project using the @abstr_hyperlink CLI wrapper. To run the tests against LibSass while developing, you can run `./script/spec`. This will clone SassC and Sass-Spec under the project folder and then run the Sass-Spec test suite. You may want to update the clones to ensure you have the latest version. Note that the scripts in the `./script` folder are mainly intended for our CI needs.

## Building

To build LibSass you need GCC @abstr_number . @abstr_number + or Clang/LLVM. If your OS is older, you may need to upgrade them first (or install clang as an alternative). On Windows, you need MinGW with GCC @abstr_number . @abstr_number + or VS @abstr_number Update @abstr_number +. It is also possible to build LibSass with Clang/LLVM on Windows with various build chains and/or command line interpreters.

See the build docs for further instructions!

## Compatibility

For all intents and purposes LibSass is fully compatible with the Sass language spec. Any known differences can be found as open issues.

## About Sass

Sass is a CSS pre-processor language to add on exciting, new, awesome features to CSS. Sass was the first language of its kind and by far the most mature and up to date codebase.

Sass was originally conceived of by the co-creator of this library, Hampton Catlin ([@hcatlin]). Most of the language has been the result of years of work by Natalie Weizenbaum ([@nex @abstr_number ]) and Chris Eppstein ([@chriseppstein]).

For more information about Sass itself, please visit https://sass-lang.com

Initial development of LibSass by Aaron Leung and Hampton Catlin was supported by @abstr_hyperlink .

## Licensing

Our MIT license is designed to be as simple and liberal as possible.
