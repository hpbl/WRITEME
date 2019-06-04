## Angular-CLI

@abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Prototype of a CLI for Angular applications based on the @abstr_hyperlink project.

## Note

This project is very much still a work in progress.

The CLI is now in beta. If you wish to collaborate while the project is still young, check out @abstr_hyperlink .

Before submitting new issues, have a look at @abstr_hyperlink .

## Webpack update

We changed the build system between beta. @abstr_number and beta. @abstr_number , from SystemJS to Webpack. And with it comes a lot of benefits. To take advantage of these, your app built with the old beta will need to migrate.

You can update your `beta. @abstr_number` projects to `beta. @abstr_number` by following @abstr_hyperlink .

## Prerequisites

Both the CLI and generated project have dependencies that require Node @abstr_number or higher, together with NPM @abstr_number or higher.

## Table of Contents

  * Installation
  * Usage
  * Generating a New Project
  * Generating Components, Directives, Pipes and Services
  * Generating a Route
  * Creating a Build
  * Build Targets and Environment Files
  * Base tag handling in index.html
  * Bundling
  * Running Unit Tests
  * Running End-to-End Tests
  * Proxy To Backend
  * Deploying the App via GitHub Pages
  * Linting and formatting code
  * Commands autocompletion
  * Project assets
  * Global styles
  * CSS preprocessor integration
  * @abstr_number rd Party Library Installation
  * Global Library Installation
  * Updating angular-cli
  * Development Hints for hacking on angular-cli



## Installation

**BEFORE YOU INSTALL:** please read the prerequisites @abstr_code_section 

## Usage

@abstr_code_section 

### Generating and serving an Angular @abstr_number project via a development server

@abstr_code_section Navigate to `http://localhost: @abstr_number /`. The app will automatically reload if you change any of the source files.

You can configure the default HTTP port and the one used by the LiveReload server with two command-line options :

@abstr_code_section 

### Generating Components, Directives, Pipes and Services

You can use the `ng generate` (or just `ng g`) command to generate Angular components:

@abstr_code_section You can find all possible blueprints in the table below:

Scaffold | Usage \--- | --- Component | `ng g component my-new-component` Directive | `ng g directive my-new-directive` Pipe | `ng g pipe my-new-pipe` Service | `ng g service my-new-service` Class | `ng g class my-new-class` Interface | `ng g interface my-new-interface` Enum | `ng g enum my-new-enum` Module | `ng g module my-module`

### Generating a route

The CLI supports routing in several ways:

  * We include the `@angular/router` NPM package when creating or initializing a project.

  * When you generate a module, you can use the `--routing` option like `ng g module my-module --routing` to create a separate file `my-module-routing.module.ts` to store the module routes.

The file includes an empty `Routes` object that you can fill with routes to different components and/or modules.

The `--routing` option also generates a default component with the same name as the module.

  * You can use the `--routing` option with `ng new` or `ng init` to create a `app-routing.module.ts` file when you create or initialize a project.




### Creating a build

@abstr_code_section 

The build artifacts will be stored in the `dist/` directory.

### Build Targets and Environment Files

`ng build` can specify both a build target (`--target=production` or `--target=development`) and an environment file to be used with that build (`--environment=dev` or `--environment=prod`). By default, the development build target and environment are used.

The mapping used to determine which environment file is used can be found in `angular-cli.json`:

@abstr_code_section 

These options also apply to the serve command. If you do not pass a value for `environment`, it will default to `dev` for `development` and `prod` for `production`.

@abstr_code_section 

You can also add your own env files other than `dev` and `prod` by doing the following: \- create a `src/environments/environment.NAME.ts` \- add `{ "NAME": 'src/environments/environment.NAME.ts' }` to the `apps[ @abstr_number ].environments` object in `angular-cli.json` \- use them via the `--env=NAME` flag on the build/serve commands.

### Base tag handling in index.html

When building you can modify base tag (`<base href="/">`) in your index.html with `--base-href your-url` option.

@abstr_code_section 

### Bundling

All builds make use of bundling, and using the `--prod` flag in `ng build --prod` or `ng serve --prod` will also make use of uglifying and tree-shaking functionality.

### Running unit tests

@abstr_code_section 

Tests will execute after a build is executed via @abstr_hyperlink , and it will automatically watch your files for changes. You can run tests a single time via `--watch=false` or `--single-run`.

You can run tests with coverage via `--code-coverage`. The coverage report will be in the `coverage/` directory.

Linting during tests is also available via the `--lint` flag. See Linting and formatting code chapter for more informations.

### Running end-to-end tests

@abstr_code_section 

Before running the tests make sure you are serving the app via `ng serve`.

End-to-end tests are run via @abstr_hyperlink .

### Proxy To Backend

Using the proxying support in webpack's dev server we can highjack certain urls and send them to a backend server. We do this by passing a file to `--proxy-config`

Say we have a server running on `http://localhost: @abstr_number /api` and we want all calls to `http://localhost: @abstr_number /api` to go to that server.

We create a file next to projects `package.json` called `proxy.conf.json` with the content

@abstr_code_section 

You can read more about what options are available here @abstr_hyperlink 

and then we edit the `package.json` file's start script to be

@abstr_code_section 

now run it with `npm start`

### Deploying the app via GitHub Pages

You can deploy your apps quickly via:

@abstr_code_section 

This will do the following:

  * creates GitHub repo for the current project if one doesn't exist
  * rebuilds the app in production mode at the current `HEAD`
  * creates a local `gh-pages` branch if one doesn't exist
  * moves your app to the `gh-pages` branch and creates a commit
  * edit the base tag in index.html to support GitHub Pages
  * pushes the `gh-pages` branch to GitHub
  * returns back to the original `HEAD`



Creating the repo requires a token from GitHub, and the remaining functionality relies on ssh authentication for all git operations that communicate with github.com. To simplify the authentication, be sure to @abstr_hyperlink .

If you are deploying a @abstr_hyperlink , you can instead use the following command:

@abstr_code_section 

This command pushes the app to the `master` branch on the GitHub repo instead of pushing to `gh-pages`, since user and organization pages require this.

### Linting and formatting code

You can lint your app code by running `ng lint`. This will use the `lint` npm script that in generated projects uses `tslint`.

You can modify the these scripts in `package.json` to run whatever tool you prefer.

### Commands autocompletion

To turn on auto completion use the following commands:

For bash: @abstr_code_section 

For zsh: @abstr_code_section 

Windows users using gitbash: @abstr_code_section 

### Project assets

You use the `assets` array in `angular-cli.json` to list files or folders you want to copy as-is when building your project: @abstr_code_section 

### Global styles

The `styles.css` file allows users to add global styles and supports @abstr_hyperlink .

If the project is created with the `--style=sass` option, this will be a `.sass` file instead, and the same applies to `scss/less/styl`.

You can add more global styles via the `apps[ @abstr_number ].styles` property in `angular-cli.json`.

### CSS Preprocessor integration

Angular-CLI supports all major CSS preprocessors: \- sass/scss ( @abstr_hyperlink ) \- less ( @abstr_hyperlink ) \- stylus ( @abstr_hyperlink )

To use these preprocessors simply add the file to your component's `styleUrls`:

@abstr_code_section 

When generating a new project you can also define which extension you want for style files:

@abstr_code_section 

Or set the default style on an existing project:

@abstr_code_section 

### @abstr_number rd Party Library Installation

Simply install your library via `npm install lib-name --save` and import it in your code.

If the library does not include typings, you can install them using npm:

@abstr_code_section 

If the library doesn't have typings available at `@types/`, you can still use it by manually adding typings for it:

@abstr_number . First, create a `typings.d.ts` file in your `src/` folder. This file will be automatically included as global type definition.

@abstr_number . Then, in `src/typings.d.ts`, add the following code:

@abstr_code_section 

@abstr_number . Finally, in the component or file that uses the library, add the following code:

@abstr_code_section 

Done. Note: you might need or find useful to define more typings for the library that you're trying to use.

### Global Library Installation

Some javascript libraries need to be added to the global scope, and loaded as if they were in a script tag. We can do this using the `apps[ @abstr_number ].scripts` and `apps[ @abstr_number ].styles` properties of `angular-cli.json`.

As an example, to use @abstr_hyperlink this is what you need to do:

First install Bootstrap from `npm`:

@abstr_code_section 

Then add the needed script files to `apps[ @abstr_number ].scripts`:

@abstr_code_section 

Finally add the Bootstrap CSS to the `apps[ @abstr_number ].styles` array: @abstr_code_section 

Restart `ng serve` if you're running it, and Bootstrap @abstr_number should be working on your app.

### Updating angular-cli

To update `angular-cli` to a new version, you must update both the global package and your project's local package.

Global package: @abstr_code_section 

Local project package: @abstr_code_section 

Running `ng init` will check for changes in all the auto-generated files created by `ng new` and allow you to update yours. You are offered four choices for each changed file: `y` (overwrite), `n` (don't overwrite), `d` (show diff between your file and the updated file) and `h` (help).

Carefully read the diffs for each code file, and either accept the changes or incorporate them manually after `ng init` finishes.

**The main cause of errors after an update is failing to incorporate these updates into your code**.

You can find more details about changes between versions in @abstr_hyperlink .

## Development Hints for hacking on angular-cli

### Working with master

@abstr_code_section 

`npm link` is very similar to `npm install -g` except that instead of downloading the package from the repo, the just cloned `angular-cli/` folder becomes the global package. Any changes to the files in the `angular-cli/` folder will immediately affect the global `angular-cli` package, allowing you to quickly test any changes you make to the cli project.

Now you can use `angular-cli` via the command line:

@abstr_code_section 

`npm link angular-cli` is needed because by default the globally installed `angular-cli` just loads the local `angular-cli` from the project which was fetched remotely from npm. `npm link angular-cli` symlinks the global `angular-cli` package to the local `angular-cli` package. Now the `angular-cli` you cloned before is in three places: The folder you cloned it into, npm's folder where it stores global packages and the `angular-cli` project you just created.

You can also use `ng new foo --link-cli` to automatically link the `angular-cli` package.

Please read the official @abstr_hyperlink and the @abstr_hyperlink for more information.

## License

MIT
