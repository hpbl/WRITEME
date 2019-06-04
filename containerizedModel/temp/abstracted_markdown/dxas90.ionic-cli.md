@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

# Ionic-Cli

The Ionic Framework command line utility makes it easy to start, build, run, and emulate @abstr_hyperlink apps. In addition, it comes with (optional!) integration with the @abstr_hyperlink , a set of mobile backend services perfect for Ionic apps.

Use the `ionic --help` command for more detailed task information.

## Installing

@abstr_code_section 

_Note: For a global install of`-g ionic`, OSX/Linux users may need to prefix the command with `sudo` or can setup @abstr_hyperlink to install without `sudo`._

Minimal node requirements:

  * NodeLTS or greater
  * NPM @abstr_number x



## Starting an Ionic App

To start a Ionic @abstr_number x app, run:

@abstr_code_section 

To start a Ionic @abstr_number app, run:

@abstr_code_section 

Starter templates can either come from a named template, a Github repo, a Codepen, or a local directory. A starter template is what becomes the `www` directory for a V @abstr_number project, and a `src` directory for a V @abstr_number project

__Named V @abstr_number template starters:__

  * @abstr_hyperlink (Default)
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



__Named V @abstr_number template starters:__

  * @abstr_hyperlink (Default)
  * @abstr_hyperlink 
  * @abstr_hyperlink 



__Github Repo starters:__

  * Any Github repo url, ex: @abstr_hyperlink 
  * Named templates are simply aliases to Ionic starter repos



__Codepen URL starters:__

  * Any Codepen url, ex: @abstr_hyperlink 
  * @abstr_hyperlink 



__Plunker URL starters:__

  * Any Plunker url, ex: @abstr_hyperlink 



__Local directory starters:__

  * Relative or absolute path to a local directory



__Command-line flags/options:__
    
    
    [--appname|-a]  .......  Human readable name for the app
                             (Use quotes around the name)
    [--id|-i]  ............  Package name set in the <widget id> config
                             ex: com.mycompany.myapp
    [--no-cordova|-w]  ....  Do not create an app targeted for Cordova
    [--sass|-s] ...........  Setup the project to use Sass CSS precompiling (V @abstr_number  only)
    [--list|-l]  ..........  List starter templates available
    
    [--io-app-id] .........  The Ionic.io app ID to use
    

## Adding a platform target

@abstr_code_section 

## Testing in a Browser

Use `ionic serve` to start a local development server for app dev and testing. Additionally, this command starts LiveReload which is used to monitor changes in the file system. As soon as you save a file the browser is refreshed automatically. View @abstr_hyperlink if you would also like to have `ionic serve` watch the project's Sass files.

@abstr_code_section 

## Building your app

@abstr_code_section 

## Emulating your app

Deploys the Ionic app on specified platform emulator. This is simply an alias for `run --emulator`.

@abstr_code_section 

## Running your app

Deploys the Ionic app on specified platform devices. If a device is not found it'll then deploy to an emulator/simulator.

@abstr_code_section 

## Icon and Splash Screen Image Generation

@abstr_hyperlink from source images to create each size needed for each platform, in addition to copying each resized and cropped image into each platform's resources directory. Source images can either be a `png`, `psd` __Photoshop__ or `ai` __Illustrator__ file. Images are generated using Ionic's image resizing and cropping server, instead of requiring special libraries and plugins to be installed locally.

Since each platform has different image requirements, it's best to make a source image for the largest size needed, and let the CLI do all the resizing, cropping and copying for you. Newly generated images will be placed in the `resources` directory at the root of the Cordova project. Additionally, the CLI will update and add the correct `<platform>` configs to the project's @abstr_hyperlink file.

During the build process, Cordova (v @abstr_number . @abstr_number or later) will look through the project's @abstr_hyperlink file and copy the newly created resource images to the platform's specific resource folder. For example, Android's resource folder can be found in `platforms/android/res`, and iOS uses `platforms/ios/APP_NAME/Resources`.

### Icon Source Image

Save an `icon.png`, `icon.psd` or `icon.ai` file within the `resources` directory at the root of the Cordova project. The icon image's minimum dimensions should be @abstr_number x @abstr_number px, and should have __no__ rounded corners. Note that each platform will apply it's own mask and effects to the icons. For example, iOS will automatically apply it's custom rounded corners, so the source file should not already come with rounded corners. This @abstr_hyperlink provides the recommended size and guidelines of the artwork's safe zone.

@abstr_code_section 

  * @abstr_hyperlink 



### Splash Screen Source Image

Save a `splash.png`, `splash.psd` or `splash.ai` file within the `resources` directory at the root of the Cordova project. Splash screen dimensions vary for each platform, device and orientation, so a square source image is required the generate each of various sizes. The source image's minimum dimensions should be @abstr_number x @abstr_number px, and its artwork should be centered within the square, knowning that each generated image will be center cropped into landscape and portait images. The splash screen's artwork should roughly fit within a center square ( @abstr_number x @abstr_number px). This @abstr_hyperlink provides the recommended size and guidelines of the artwork's safe zone. Additionally, when the `Orientation` @abstr_hyperlink is set to either `landscape` or `portrait` mode, then only the necessary images will be generated.

@abstr_code_section 

  * @abstr_hyperlink 



### Generating Icons and Splash Screens

To generate both icons and splash screens, follow the instructions above and run:

@abstr_code_section 

### Platform Specific Resource Images

One source image can be used to generate images for each platform by placing the file within the `resources` directory, such as `resources/icon.png`. To use different source images for individual platforms, place the source image in the respective platform's directory. For example, to use a different icon for Android, it should follow this path: `resources/android/icon.png`, and a different image for iOS would use this path: `resources/ios/icon.png`.

### Generating Exact Platform Resources

By default the `ionic resources` command will automatically figure out which platforms it should generate according to what platforms have been added to your project. However, you can also explicitly state which resources should be built by providing a platform name in the command. The example below would generate only `ios` resources (even if the platform hasn't been added to the project).

@abstr_code_section 

### Default Ionic Resources

Ionic provides you some default icons and splash screens to give you a better idea of how to size your icons and splashscreen, as well as how to modify your config.xml file for your own icons.

@abstr_code_section 

If you already have a resources directory, the command above will not over write your files. If you wish to force an over write, use `ionic resources --default --force`.

When starting a new app and adding a platform `ionic platform add ios` \- the default icons and splashscreens will be downloaded and your config.xml will be modified to set up the default resources. This should help you identify your Ionic apps easier as well as help you get the file structure and configuration correct.

## Crosswalk for Android

To install @abstr_hyperlink for Android run:

@abstr_code_section 

All that is left is to run the project as normal - `ionic run android`.

## Advanced serve options

__LiveReload__

By default, for Ionic @abstr_number projects, LiveReload will watch for changes in your `www/` directory, excluding `www/lib/`. To change this, you can specify a `watchPatterns` property in the `ionic.config.json` file located in your project root to watch (or not watch) for specific changes.

@abstr_code_section 

For a reference on glob pattern syntax, check out @abstr_hyperlink on the Grunt website.

__Gulp Integration__

When running `ionic serve`, you can have Ionic run any Gulp tasks you specify by putting them into a gulp task called `serve:before`:

@abstr_code_section 

Now, when you run `ionic serve`, it will run the `watch` task while starting the Ionic server.

If you would like to disable gulp from running during serve, pass the `--nogulp` option.

Your gulpfile must be named gulpfile.js or Gulpfile.js, there is currently no support for typescript, babel or coffeescript gulp files in the @abstr_number . @abstr_number CLI

NOTE For V @abstr_number :

@abstr_code_section 

will add a `watchPatterns` propery with the default values to your `ionic.config.json` file that you can then edit, in addition to the `serve:before` gulp task described in the @abstr_hyperlink section.

__Service Proxies:__

The `serve` command can add some proxies to the http server. These proxies are useful if you are developing in the browser and you need to make calls to an external API. With this feature you can proxy request to the external api through the ionic http server preventing the `No 'Access-Control-Allow-Origin' header is present on the requested resource` error.

In the `ionic.config.json` file you can add a property with an array of proxies you want to add. The proxies are object with the following properties:

  * `path`: string that will be matched against the beginning of the incoming request URL.
  * `proxyUrl`: a string with the url of where the proxied request should go.
  * `proxyNoAgent`: (optional) true/false, if true opts out of connection pooling, see @abstr_hyperlink 

@abstr_code_section 




Using the above configuration, you can now make requests to your local server at `http://localhost: @abstr_number /v @abstr_number` to have it proxy out requests to `https://api.instagram.com/v @abstr_number`

For example:

@abstr_code_section 

See also @abstr_hyperlink for more help.

__Command-line flags/options:__
    
    
    [--consolelogs|-c] ......  Print app console logs to Ionic CLI
    [--serverlogs|-s] .......  Print dev server logs to Ionic CLI
    [--port|-p] .............  Dev server HTTP port ( @abstr_number  default)
    [--livereload-port|-i] ..  Live Reload port ( @abstr_number  default)
    [--nobrowser|-b] ........  Disable launching a browser
    [--nolivereload|-r] .....  Do not start live reload
    [--noproxy|-x] ..........  Do not add proxies
    [--address] .............  Serves in the browser at the specified address
    [--lab] .................  Serves both iOS and Android in the browser
    [--nogulp] ..............  Serve without running gulp tasks
    [--platform|-t] .........  Serve the platform specific styles in the browser (ios/android)
    

## Using Ionic Labs

We've extended the serve command to open the new Lab UI that features iOS, Android, and Windows side-by-side.

@abstr_code_section 

If you've used the serve command before, you'll feel right at home with this one. Just like serve, it opens your app in a browser, but now it shows you what your app will look like on a phone, with both iOS, Android, Windows side by side.

And of course, it supports Live Reload and all the other goodies we've added over the last couple of months.

NOTE: This does **not** emulate cordova or cordova plugins. So while the UI may feel like a native app, you'll still want to deploy to a device to test plugins.

## Serving an alternate document root

If you'd like to test your app in the browser and you use a folder other than the default of `www`, you can specify this folder in your `ionic.config.json` file.

You might also want to have the document root be created if you use some sort of build system, we suggest using `createDocumentRoot` for that so that `ionic serve` will create that folder for you.

It is also advised you specify the watch patterns for this document root as well, as follows:

@abstr_code_section 

## Packaging an app (beta)

Using Ionic's service, you can compile and package your project into an app-store ready app without requiring native SDKs on your machine.

@abstr_code_section 

The third argument can be either `debug` or `release`, and the last argument can be either `android` or `ios`.

## Cordova Commands

Ionic uses Cordova underneath, so you can also substitute Cordova commands to prepare/build/emulate/run, or to add additional plugins.

_Note: we occasionally send anonymous usage statistics to the Ionic team to make the tool better._

## Working around proxies

If you have a proxy you need to get around, you can pass that proxy with the default `http_proxy` @abstr_hyperlink or an environment variable `proxy`.

A few ways to set up and use the environment variable:

@abstr_code_section 

## Using Sass (V @abstr_number Only)

By default, V @abstr_number starter projects are hooked up to Ionic's precompiled CSS file, which is found in the project's `www/lib/ionic/css` directory, and is linked to the app in the head of the root `index.html` file. However, projects can also be customized using @abstr_hyperlink , which gives developers and designers "superpowers" in terms of creating and maintaining CSS. Below are two ways to setup Sass for your Ionic project (the `ionic setup sass` command simply does the manual steps for you). Once Sass has been setup for your Ionic project, then the `ionic serve` command will also watch for Sass changes.

For V @abstr_number projects, there's nothing you need to do! Ionic @abstr_number projects by default are setup with sass and come with all the build process enabled.

#### Setup Sass Automatically (V @abstr_number )
    
    
    ionic setup sass
    

#### Setup Sass Manually (V @abstr_number )

@abstr_number . Run `npm install` from the working directory of an Ionic project. This will install @abstr_hyperlink and a few handy tasks, such as @abstr_hyperlink and @abstr_hyperlink . @abstr_number . Remove `<link href="lib/ionic/css/ionic.css" rel="stylesheet">` from the `<head>` of the root `index.html` file. @abstr_number . Remove `<link href="css/style.css" rel="stylesheet">` from the `<head>` of the root `index.html` file. @abstr_number . Add `<link href="css/ionic.app.css" rel="stylesheet">` to the `<head>` of the root `index.html` file. @abstr_number . In your `serve:before` gulp task, add the `sass` task `gulp.task('serve:before', ['sass', 'watch']);` (this can also be customized to whatever gulp tasks you'd like).

# Ionic Cloud services

The CLI integrates with Ionic Cloud, a set of backend services that integrate perfectly with Ionic apps. To get started, @abstr_hyperlink and @abstr_hyperlink .

There are a few things you can utilize the CLI for to support ease of development.

## Login

Type `ionic login` to get logged in the CLI.

### Login without prompt

You can pass the email and password to login without being prompted for email and password.

`ionic login --email user@ionic.io --password somepass`

### Login with environment variables

The CLI also supports settings environment variables to read off the email and password for the user.

Set `IONIC_EMAIL` and `IONIC_PASSWORD` as variables to have the CLI read these instead of being prompted for them.

## Upload your Ionic app

Use the `ionic upload` command to take your current application you are developing and upload it to the Ionic.io servers.

Now you can use @abstr_hyperlink to view that application or have others view the application.

After uploading the application, you will see a message:

@abstr_code_section 

This indicates you uploaded the application correctly, and the App ID is set to `f @abstr_number j @abstr_number fjs`.

You can then view that App ID from the View app or the application listing on your @abstr_hyperlink .

### Adding a note with your upload

To add a note to your build, pass the `--note` option as follows:

`ionic upload --note "This version of the application fixes the menu selections"`.

## Set your Ionic Project App ID manually

Use the `ionic link <appId>` command to set your Ionic App ID to continue working with the same app with the Ionic platform across development enviroments.

## Share the application with another user

Use the `ionic share <email>` command to have an email sent to another person to have them view the Ionic application you are using. Note: You must have an @abstr_hyperlink account as well as the user you are sharing with.

# Ionic Hooks (V @abstr_number )

Ionic provides some default hooks for you to use in your Cordova application. In versions prior to @abstr_number . @abstr_number . @abstr_number , these hooks were automatically installed via the `ionic platform` command.

In @abstr_number . @abstr_number . @abstr_number , the hooks were automatically removed due to some errors users were having with Crosswalk and other plugins with variables.

If you were a user who would still like to use those hooks, you can re-install these hooks with the `ionic hooks add` command.

If you would like to remove these hooks yourself, use `ionic hooks remove` to get rid of them.

# Ionic CLI @abstr_number . @abstr_number

## Ionic Generators

First class support has come to the Ionic CLI to scaffold and generate Ionic and Angular @abstr_number components.

From your app directory, use the `generate` command (alias: `g`).

Usage: * `ionic generate page About` \- Generate a page named About with HTML, JavaScript, and Sass named `about`. * `ionic g tabs MyTabPage` \- Generate a page named MyTabPage, queries for the amount of tabs, and creates pages for those tabs.

List:

View all generators: `ionic g --list`.
