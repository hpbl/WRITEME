This project was bootstrapped with @abstr_hyperlink .

Below you will find some information on how to perform common tasks.  
You can find the most recent version of this guide @abstr_hyperlink .

## Table of Contents

  * Updating to New Releases
  * Sending Feedback
  * Folder Structure
  * Available Scripts 
    * npm start
    * npm test
    * npm run build
    * npm run eject
  * Supported Language Features and Polyfills
  * Syntax Highlighting in the Editor
  * Displaying Lint Output in the Editor
  * Debugging in the Editor
  * Changing the Page <code><title></code>
  * Installing a Dependency
  * Importing a Component
  * Adding a Stylesheet
  * Post-Processing CSS
  * Adding a CSS Preprocessor (Sass, Less etc.)
  * Adding Images and Fonts
  * Using the <code>public</code> Folder 
    * Changing the HTML
    * Adding Assets Outside of the Module System
    * When to Use the <code>public</code> Folder
  * Using Global Variables
  * Adding Bootstrap 
    * Using a Custom Theme
  * Adding Flow
  * Adding Custom Environment Variables 
    * Referencing Environment Variables in the HTML
    * Adding Temporary Environment Variables In Your Shell
    * Adding Development Environment Variables In <code>.env</code>
  * Can I Use Decorators?
  * Integrating with an API Backend 
    * Node
    * Ruby on Rails
  * Proxying API Requests in Development
  * Using HTTPS in Development
  * Generating Dynamic <code><meta></code> Tags on the Server
  * Pre-Rendering into Static HTML Files
  * Injecting Data from the Server into the Page
  * Running Tests 
    * Filename Conventions
    * Command Line Interface
    * Version Control Integration
    * Writing Tests
    * Testing Components
    * Using Third Party Assertion Libraries
    * Initializing Test Environment
    * Focusing and Excluding Tests
    * Coverage Reporting
    * Continuous Integration
    * Disabling jsdom
    * Snapshot Testing
    * Editor Integration
  * Developing Components in Isolation
  * Making a Progressive Web App
  * Deployment 
    * Static Server
    * Other Solutions
    * Serving Apps with Client-Side Routing
    * Building for Relative Paths
    * Azure
    * Firebase
    * GitHub Pages
    * Heroku
    * Modulus
    * Netlify
    * Now
    * S @abstr_number and CloudFront
    * Surge
  * Advanced Configuration
  * Troubleshooting 
    * <code>npm start</code> doesn’t detect changes
    * <code>npm test</code> hangs on macOS Sierra
    * <code>npm run build</code> silently fails
    * <code>npm run build</code> fails on Heroku
  * Something Missing?



## Updating to New Releases

Create React App is divided into two packages:

  * `create-react-app` is a global command-line utility that you use to create new projects.
  * `react-scripts` is a development dependency in the generated projects (including this one).



You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, @abstr_hyperlink , find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the @abstr_hyperlink for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.

## Sending Feedback

We are always open to @abstr_hyperlink .

## Folder Structure

After creation, your project should look like this:

@abstr_code_section 

For the project to build, **these files must exist with exact filenames** :

  * `public/index.html` is the page template;
  * `src/index.js` is the JavaScript entry point.



You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.  
You need to **put any JS and CSS files inside`src`** , or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.  
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.  
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open @abstr_hyperlink to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about running tests for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about deployment for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you`eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.  
In addition to @abstr_hyperlink syntax features, it also supports:

  * @abstr_hyperlink (ES @abstr_number ).
  * @abstr_hyperlink (ES @abstr_number ).
  * @abstr_hyperlink (stage @abstr_number proposal).
  * @abstr_hyperlink (stage @abstr_number proposal).
  * @abstr_hyperlink and @abstr_hyperlink syntax.



Learn more about @abstr_hyperlink .

While we recommend to use experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide @abstr_hyperlink if any of these proposals change in the future.

Note that **the project only includes a few ES @abstr_number @abstr_hyperlink** :

  * @abstr_hyperlink via @abstr_hyperlink .
  * @abstr_hyperlink via @abstr_hyperlink .
  * @abstr_hyperlink via @abstr_hyperlink .



If you use any other ES @abstr_number + features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

## Syntax Highlighting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the @abstr_hyperlink and follow the instructions. Some of the most popular editors are covered.

## Displaying Lint Output in the Editor

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first.

> **A note for Atom`linter-eslint` users**
> 
> If you are using the Atom `linter-eslint` plugin, make sure that **Use global ESLint installation** option is checked:
> 
> @abstr_image 
> 
> **For Visual Studio Code users**
> 
> VS Code ESLint plugin automatically detects Create React App's configuration file. So you do not need to create `eslintrc.json` at the root directory, except when you want to add your own rules. In that case, you should include CRA's config by adding this line:
> 
> @abstr_code_section 

Then add this block to the `package.json` file of your project:

@abstr_code_section 

Finally, you will need to install some packages _globally_ :

@abstr_code_section 

We recognize that this is suboptimal, but it is currently required due to the way we hide the ESLint dependency. The ESLint team is already @abstr_hyperlink so this may become unnecessary in a couple of months.

## Debugging in the Editor

**This feature is currently only supported by @abstr_hyperlink editor.**

Visual Studio Code supports live-editing and debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.

You would need to have the latest version of @abstr_hyperlink and VS Code @abstr_hyperlink installed.

Then add the block below to your `launch.json` file and put it inside the `.vscode` folder in your app’s root directory.

@abstr_code_section 

Start your app by running `npm start`, and start debugging in VS Code by pressing `F @abstr_number` or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code—all from your editor.

## Changing the Page `<title>`

You can find the source HTML file in the `public` folder of the generated project. You may edit the `<title>` tag in it to change the title from “React App” to anything else.

Note that normally you wouldn’t edit files in the `public` folder very often. For example, adding a stylesheet is done without touching the HTML.

If you need to dynamically update the page title based on the content, you can use the browser @abstr_hyperlink API. For more complex scenarios when you want to change the title from React components, you can use @abstr_hyperlink , a third party library.

If you use a custom server for your app in production and want to modify the title before it gets sent to the browser, you can follow advice in this section. Alternatively, you can pre-build each page as a static HTML file which then loads the JavaScript bundle, which is covered here.

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

@abstr_code_section 

## Importing a Component

This project setup supports ES @abstr_number modules thanks to Babel.  
While you can still use `require()` and `module.exports`, we encourage you to use @abstr_hyperlink instead.

For example:

### `Button.js`

@abstr_code_section 

### `DangerButton.js`

@abstr_code_section 

Be aware of the @abstr_hyperlink . It is a common source of mistakes.

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use `export default Button` and `import Button from './Button'`.

Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.

Learn more about ES @abstr_number modules:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Adding a Stylesheet

This project setup uses @abstr_hyperlink for handling all assets. Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to **import the CSS from the JavaScript file** :

### `Button.css`

@abstr_code_section 

### `Button.js`

@abstr_code_section 

**This is not required for React** but many people find this feature convenient. You can read about the benefits of this approach @abstr_hyperlink . However you should be aware that this makes your code less portable to other build tools and environments than Webpack.

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified `.css` file in the build output.

If you are concerned about using Webpack-specific semantics, you can put all your CSS right into `src/index.css`. It would still be imported from `src/index.js`, but you could always remove that import if you later migrate to a different build tool.

## Post-Processing CSS

This project setup minifies your CSS and adds vendor prefixes to it automatically through @abstr_hyperlink so you don’t need to worry about it.

For example, this:

@abstr_code_section 

becomes this:

@abstr_code_section 

If you need to disable autoprefixing for some reason, @abstr_hyperlink .

## Adding a CSS Preprocessor (Sass, Less etc.)

Generally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a `.Button` CSS class in `<AcceptButton>` and `<RejectButton>` components, we recommend creating a `<Button>` component with its own `.Button` styles, that both `<AcceptButton>` and `<RejectButton>` can render (but @abstr_hyperlink ).

Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable. In this walkthrough, we will be using Sass, but you can also use Less, or another alternative.

First, let’s install the command-line interface for Sass:

@abstr_code_section 

Then in `package.json`, add the following lines to `scripts`:

@abstr_code_section 

> Note: To use a different preprocessor, replace `build-css` and `watch-css` commands according to your preprocessor’s documentation.

Now you can rename `src/App.css` to `src/App.scss` and run `npm run watch-css`. The watcher will find every Sass file in `src` subdirectories, and create a corresponding CSS file next to it, in our case overwriting `src/App.css`. Since `src/App.js` still imports `src/App.css`, the styles become a part of your application. You can now edit `src/App.scss`, and `src/App.css` will be regenerated.

To share variables between Sass files, you can use Sass imports. For example, `src/App.scss` and other component style files could include `@import "./shared.scss";` with variable definitions.

At this point you might want to remove all CSS files from the source control, and add `src/**/*.css` to your `.gitignore` file. It is generally a good practice to keep the build products outside of the source control.

As a final step, you may find it convenient to run `watch-css` automatically with `npm start`, and run `build-css` as a part of `npm run build`. You can use the `&&` operator to execute two scripts sequentially. However, there is no cross-platform way to run two scripts in parallel, so we will install a package for this:

@abstr_code_section 

Then we can change `start` and `build` scripts to include the CSS preprocessor commands:

@abstr_code_section 

Now running `npm start` and `npm run build` also builds Sass files. Note that `node-sass` seems to have an @abstr_hyperlink so you might need to restart the watcher when you create a file until it’s resolved.

## Adding Images and Fonts

With Webpack, using static assets like images and fonts works similarly to CSS.

You can **`import` an image right in a JavaScript module**. This tells Webpack to include that image in the bundle. Unlike CSS imports, importing an image or a font gives you a string value. This value is the final image path you can reference in your code.

Here is an example:

@abstr_code_section 

This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

This works in CSS too:

@abstr_code_section 

Webpack finds all relative module references in CSS (they start with `./`) and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, just like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by Webpack from content hashes. If the file content changes in the future, Webpack will give it a different name in production so you don’t need to worry about long-term caching of assets.

Please be advised that this is also a custom feature of Webpack.

**It is not required for React** but many people enjoy it (and React Native uses a similar mechanism for images).  
An alternative way of handling static assets is described in the next section.

## Using the `public` Folder

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.

### Changing the HTML

The `public` folder contains the HTML file so you can tweak it, for example, to set the page title. The `<script>` tag with the compiled code will be added to it automatically during the build process.

### Adding Assets Outside of the Module System

You can also add other assets to the `public` folder.

Note that we normally encourage you to `import` assets in JavaScript files instead. For example, see the sections on adding a stylesheet and adding images and fonts. This mechanism provides a number of benefits:

  * Scripts and stylesheets get minified and bundled together to avoid extra network requests.
  * Missing files cause compilation errors instead of @abstr_number errors for your users.
  * Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.



However there is an **escape hatch** that you can use to add an asset outside of the module system.

If you put a file into the `public` folder, it will **not** be processed by Webpack. Instead it will be copied into the build folder untouched. To reference assets in the `public` folder, you need to use a special variable called `PUBLIC_URL`.

Inside `index.html`, you can use it like this:

@abstr_code_section 

Only files inside the `public` folder will be accessible by `%PUBLIC_URL%` prefix. If you need to use a file from `src` or `node_modules`, you’ll have to copy it there to explicitly specify your intention to make this file a part of the build.

When you run `npm run build`, Create React App will substitute `%PUBLIC_URL%` with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL.

In JavaScript code, you can use `process.env.PUBLIC_URL` for similar purposes:

@abstr_code_section 

Keep in mind the downsides of this approach:

  * None of the files in `public` folder get post-processed or minified.
  * Missing files will not be called at compilation time, and will cause @abstr_number errors for your users.
  * Result filenames won’t include content hashes so you’ll need to add query arguments or rename them every time they change.



### When to Use the `public` Folder

Normally we recommend importing stylesheets, images, and fonts from JavaScript. The `public` folder is useful as a workaround for a number of less common cases:

  * You need a file with a specific name in the build output, such as @abstr_hyperlink .
  * You have thousands of images and need to dynamically reference their paths.
  * You want to include a small script like @abstr_hyperlink outside of the bundled code.
  * Some library may be incompatible with Webpack and you have no other option but to include it as a `<script>` tag.



Note that if you add a `<script>` that declares global variables, you also need to read the next section on using them.

## Using Global Variables

When you include a script in the HTML file that defines global variables and try to use one of these variables in the code, the linter will complain because it cannot see the definition of the variable.

You can avoid this by reading the global variable explicitly from the `window` object, for example:

@abstr_code_section 

This makes it obvious you are using a global variable intentionally rather than because of a typo.

Alternatively, you can force the linter to ignore any line by adding `// eslint-disable-line` after it.

## Adding Bootstrap

You don’t have to use @abstr_hyperlink together with React but it is a popular library for integrating Bootstrap with React apps. If you need it, you can integrate it with Create React App by following these steps:

Install React Bootstrap and Bootstrap from npm. React Bootstrap does not include Bootstrap CSS so this needs to be installed as well:

@abstr_code_section 

Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your `src/index.js` file:

@abstr_code_section 

Import required React Bootstrap components within `src/App.js` file or your custom component files:

@abstr_code_section 

Now you are ready to use the imported React Bootstrap components within your component hierarchy defined in the render method. Here is an example @abstr_hyperlink redone using React Bootstrap.

### Using a Custom Theme

Sometimes you might need to tweak the visual styles of Bootstrap (or equivalent package).  
We suggest the following approach:

  * Create a new package that depends on the package you wish to customize, e.g. Bootstrap.
  * Add the necessary build steps to tweak the theme, and publish your package on npm.
  * Install your own theme npm package as a dependency of your app.



Here is an example of adding a @abstr_hyperlink that follows these steps.

## Adding Flow

Flow is a static type checker that helps you write code with fewer bugs. Check out this @abstr_hyperlink if you are new to this concept.

Recent versions of @abstr_hyperlink work with Create React App projects out of the box.

To add Flow to a Create React App project, follow these steps:

@abstr_number . Run `npm install --save-dev flow-bin` (or `yarn add --dev flow-bin`). @abstr_number . Add `"flow": "flow"` to the `scripts` section of your `package.json`. @abstr_number . Run `npm run flow -- init` (or `yarn flow -- init`) to create a @abstr_hyperlink in the root directory. @abstr_number . Add `// @flow` to any files you want to type check (for example, to `src/App.js`).

Now you can run `npm run flow` (or `yarn flow`) to check the files for type errors. You can optionally use an IDE like @abstr_hyperlink for a better integrated experience. In the future we plan to integrate it into Create React App even more closely.

To learn more about Flow, check out @abstr_hyperlink .

## Adding Custom Environment Variables

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have `NODE_ENV` defined for you, and any other environment variables starting with `REACT_APP_`.

**The environment variables are embedded during the build time**. Since Create React App produces a static HTML/CSS/JS bundle, it can’t possibly read them at runtime. To read them at runtime, you would need to load HTML into memory on the server and replace placeholders in runtime, just like described here. Alternatively you can rebuild the app on the server anytime you change them.

> Note: You must create custom environment variables beginning with `REACT_APP_`. Any other variables except `NODE_ENV` will be ignored to avoid accidentally @abstr_hyperlink . Changing any environment variables will require you to restart the development server if it is running.

These environment variables will be defined for you on `process.env`. For example, having an environment variable named `REACT_APP_SECRET_CODE` will be exposed in your JS as `process.env.REACT_APP_SECRET_CODE`.

There is also a special built-in environment variable called `NODE_ENV`. You can read it from `process.env.NODE_ENV`. When you run `npm start`, it is always equal to `'development'`, when you run `npm test` it is always equal to `'test'`, and when you run `npm run build` to make a production bundle, it is always equal to `'production'`. **You cannot override`NODE_ENV` manually.** This prevents developers from accidentally deploying a slow development build to production.

These environment variables can be useful for displaying information conditionally based on where the project is deployed or consuming sensitive data that lives outside of version control.

First, you need to have environment variables defined. For example, let’s say you wanted to consume a secret defined in the environment inside a `<form>`:

@abstr_code_section 

During the build, `process.env.REACT_APP_SECRET_CODE` will be replaced with the current value of the `REACT_APP_SECRET_CODE` environment variable. Remember that the `NODE_ENV` variable will be set for you automatically.

When you load the app in the browser and inspect the `<input>`, you will see its value set to `abcdef`, and the bold text will show the environment provided when using `npm start`:

@abstr_code_section 

The above form is looking for a variable called `REACT_APP_SECRET_CODE` from the environment. In order to consume this value, we need to have it defined in the environment. This can be done using two ways: either in your shell or in a `.env` file. Both of these ways are described in the next few sections.

Having access to the `NODE_ENV` is also useful for performing actions conditionally:

@abstr_code_section 

When you compile the app with `npm run build`, the minification step will strip out this condition, and the resulting bundle will be smaller.

### Referencing Environment Variables in the HTML

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.

You can also access the environment variables starting with `REACT_APP_` in the `public/index.html`. For example:

@abstr_code_section 

Note that the caveats from the above section apply:

  * Apart from a few built-in variables (`NODE_ENV` and `PUBLIC_URL`), variable names must start with `REACT_APP_` to work.
  * The environment variables are injected at build time. If you need to inject them at runtime, follow this approach instead.



### Adding Temporary Environment Variables In Your Shell

Defining environment variables can vary between OSes. It’s also important to know that this manner is temporary for the life of the shell session.

#### Windows (cmd.exe)

@abstr_code_section 

(Note: the lack of whitespace is intentional.)

#### Linux, macOS (Bash)

@abstr_code_section 

### Adding Development Environment Variables In `.env`

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.

To define permanent environment variables, create a file called `.env` in the root of your project:

@abstr_code_section 

These variables will act as the defaults if the machine does not explicitly set them.  
Please refer to the @abstr_hyperlink for more details.

> Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need these defined as well. Consult their documentation how to do this. For example, see the documentation for @abstr_hyperlink or @abstr_hyperlink .

## Can I Use Decorators?

Many popular libraries use @abstr_hyperlink in their documentation.  
Create React App doesn’t support decorator syntax at the moment because:

  * It is an experimental proposal and is subject to change.
  * The current specification version is not officially supported by Babel.
  * If the specification changes, we won’t be able to write a codemod because we don’t use them internally at Facebook.



However in many cases you can rewrite decorator-based code without decorators just as fine.  
Please refer to these two threads for reference:

  * @abstr_hyperlink 
  * @abstr_hyperlink 



Create React App will add decorator support when the specification advances to a stable stage.

## Integrating with an API Backend

These tutorials will help you to integrate your app with an API backend running on another port, using `fetch()` to access it.

### Node

Check out @abstr_hyperlink . You can find the companion GitHub repository @abstr_hyperlink .

### Ruby on Rails

Check out @abstr_hyperlink . You can find the companion GitHub repository @abstr_hyperlink .

## Proxying API Requests in Development

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.

People often serve the front-end React app from the same host and port as their backend implementation.  
For example, a production setup might look like this after the app is deployed:

@abstr_code_section 

Such setup is **not** required. However, if you **do** have a setup like this, it is convenient to write requests like `fetch('/api/todos')` without worrying about redirecting them to another host or port during development.

To tell the development server to proxy any unknown requests to your API server in development, add a `proxy` field to your `package.json`, for example:

@abstr_code_section 

This way, when you `fetch('/api/todos')` in development, the development server will recognize that it’s not a static asset, and will proxy your request to `http://localhost: @abstr_number /api/todos` as a fallback. The development server will only attempt to send requests without a `text/html` accept header to the proxy.

Conveniently, this avoids @abstr_hyperlink and error messages like this in development:

@abstr_code_section 

Keep in mind that `proxy` only has effect in development (with `npm start`), and it is up to you to ensure that URLs like `/api/todos` point to the right thing in production. You don’t have to use the `/api` prefix. Any unrecognized request without a `text/html` accept header will be redirected to the specified `proxy`.

The `proxy` option supports HTTP, HTTPS and WebSocket connections.  
If the `proxy` option is **not** flexible enough for you, alternatively you can:

  * Enable CORS on your server ( @abstr_hyperlink ).
  * Use environment variables to inject the right server host and port into your app.



## Using HTTPS in Development

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.

You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using the "proxy" feature to proxy requests to an API server when that API server is itself serving HTTPS.

To do this, set the `HTTPS` environment variable to `true`, then start the dev server as usual with `npm start`:

#### Windows (cmd.exe)

@abstr_code_section 

(Note: the lack of whitespace is intentional.)

#### Linux, macOS (Bash)

@abstr_code_section 

Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

## Generating Dynamic `<meta>` Tags on the Server

Since Create React App doesn’t support server rendering, you might be wondering how to make `<meta>` tags dynamic and reflect the current URL. To solve this, we recommend to add placeholders into the HTML, like this:

@abstr_code_section 

Then, on the server, regardless of the backend you use, you can read `index.html` into memory and replace `__OG_TITLE__`, `__OG_DESCRIPTION__`, and any other placeholders with values depending on the current URL. Just make sure to sanitize and escape the interpolated values so that they are safe to embed into HTML!

If you use a Node server, you can even share the route matching logic between the client and the server. However duplicating it also works fine in simple cases.

## Pre-Rendering into Static HTML Files

If you’re hosting your `build` with a static hosting provider you can use @abstr_hyperlink to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or “hydrated”, when the JavaScript bundle has loaded.

There are also opportunities to use this outside of static hosting, to take the pressure off the server when generating and caching routes.

The primary benefit of pre-rendering is that you get the core content of each page _with_ the HTML payload—regardless of whether or not your JavaScript bundle successfully downloads. It also increases the likelihood that each route of your application will be picked up by search engines.

You can read more about @abstr_hyperlink .

## Injecting Data from the Server into the Page

Similarly to the previous section, you can leave some placeholders in the HTML that inject global variables, for example:

@abstr_code_section 

Then, on the server, you can replace `__SERVER_DATA__` with a JSON of real data right before sending the response. The client code can then read `window.SERVER_DATA` to use it. **Make sure to @abstr_hyperlink as it makes your app vulnerable to XSS attacks.**

## Running Tests

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.  
>  @abstr_hyperlink 

Create React App uses @abstr_hyperlink as its test runner. To prepare for this integration, we did a @abstr_hyperlink of Jest so if you heard bad things about it years ago, give it another try.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to @abstr_hyperlink , they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

  * Files with `.js` suffix in `__tests__` folders.
  * Files with `.test.js` suffix.
  * Files with `.spec.js` suffix.



The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:

@abstr_image 

### Version Control Integration

By default, when you run `npm test`, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests runs fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press `a` in the watch mode to force Jest to run all tests.

Jest will always run all tests on a continuous integration server or if the project is not inside a Git or Mercurial repository.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

@abstr_code_section 

All `expect()` matchers supported by Jest are @abstr_hyperlink .  
You can also use @abstr_hyperlink to create “spies” or mock functions.

### Testing Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:

@abstr_code_section 

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot value with very little effort so they are great as a starting point, and this is the test you will find in `src/App.test.js`.

When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are worth testing in your application. This might be a good time to introduce more specific tests asserting specific expected output or behavior.

If you’d like to test components in isolation from the child components they render, we recommend using @abstr_hyperlink from @abstr_hyperlink . You can write a smoke test with it too:

@abstr_code_section 

@abstr_code_section 

Unlike the previous smoke test using `ReactDOM.render()`, this test only renders `<App>` and doesn’t go deeper. For example, even if `<App>` itself renders a `<Button>` that throws, this test will pass. Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. Enzyme supports @abstr_hyperlink , and you can also use it for testing state changes and component lifecycle.

You can read the @abstr_hyperlink for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and `jest.fn()` for spies.

Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:

@abstr_code_section 

All Jest matchers are @abstr_hyperlink .  
Nevertheless you can use a third-party assertion library like @abstr_hyperlink if you want to, as described below.

Additionally, you might find @abstr_hyperlink helpful to simplify your tests with readable matchers. The above `contains` code can be written simpler with jest-enzyme.

@abstr_code_section 

To setup jest-enzyme with Create React App, follow the instructions for initializing your test environment to import `jest-enzyme`.

@abstr_code_section 

@abstr_code_section 

### Using Third Party Assertion Libraries

We recommend that you use `expect()` for assertions and `jest.fn()` for spies. If you are having issues with them please @abstr_hyperlink , and we’ll fix them. We intend to keep making them better for React, supporting, for example, @abstr_hyperlink .

However, if you are used to other libraries, such as @abstr_hyperlink and @abstr_hyperlink , or if you have existing code using them that you’d like to port over, you can import them normally like this:

@abstr_code_section 

and then use them in your tests like you normally do.

### Initializing Test Environment

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.

If your app uses a browser API that you need to mock in your tests or if you just need a global setup before running your tests, add a `src/setupTests.js` to your project. It will be automatically executed before running your tests.

For example:

#### `src/setupTests.js`

@abstr_code_section 

### Focusing and Excluding Tests

You can replace `it()` with `xit()` to temporarily exclude a test from being executed.  
Similarly, `fit()` lets you focus on a specific test without running any other tests.

### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES @abstr_number and requires no configuration.  
Run `npm test -- --coverage` (note extra `--` in the middle) to include a coverage report like this:

@abstr_image 

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

### Continuous Integration

By default `npm test` runs the watcher with interactive CLI. However, you can force it to run tests once and finish the process by setting an environment variable called `CI`.

When creating a build of your application with `npm run build` linter warnings are not checked by default. Like `npm test`, you can force the build to perform a linter warning check by setting the environment variable `CI`. If any warnings are encountered then the build fails.

Popular CI servers already set the environment variable `CI` by default but you can do this yourself too:

### On CI servers

#### Travis CI

@abstr_number . Following the @abstr_hyperlink guide for syncing your GitHub repository with Travis. You may need to initialize some settings manually in your @abstr_hyperlink page. @abstr_number . Add a `.travis.yml` file to your git repository. @abstr_code_section @abstr_number . Trigger your first build with a git push. @abstr_number . @abstr_hyperlink if needed.

### On your own environment

##### Windows (cmd.exe)

@abstr_code_section 

@abstr_code_section 

(Note: the lack of whitespace is intentional.)

##### Linux, macOS (Bash)

@abstr_code_section 

@abstr_code_section 

The test command will force Jest to run tests once instead of launching the watcher.

> If you find yourself doing this often in development, please @abstr_hyperlink to tell us about your use case because we want to make watcher the best experience and are open to changing how it works to accommodate more workflows.

The build command will check for linter warnings and fail if any are found.

### Disabling jsdom

By default, the `package.json` of the generated project looks like this:

@abstr_code_section 

If you know that none of your tests depend on @abstr_hyperlink , you can safely remove `--env=jsdom`, and your tests will run faster.  
To help you make up your mind, here is a list of APIs that **need jsdom** :

  * Any browser globals like `window` and `document`
  * @abstr_hyperlink 
  * @abstr_hyperlink ( @abstr_hyperlink for the above)
  * @abstr_hyperlink in @abstr_hyperlink 



In contrast, **jsdom is not needed** for the following APIs:

  * @abstr_hyperlink (shallow rendering)
  * @abstr_hyperlink in @abstr_hyperlink 



Finally, jsdom is also not needed for @abstr_hyperlink .

### Snapshot Testing

Snapshot testing is a feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. @abstr_hyperlink 

### Editor Integration

If you use @abstr_hyperlink , there is a @abstr_hyperlink which works with Create React App out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click snapshot updates.

@abstr_image 

## Developing Components in Isolation

Usually, in an app, you have a lot of UI components, and each of them has many different states. For an example, a simple button component could have following states:

  * With a text label.
  * With an emoji.
  * In the disabled mode.



Usually, it’s hard to see these states without running a sample app or some examples.

Create React App doesn’t include any tools for this by default, but you can easily add @abstr_hyperlink to your project. **It is a third-party tool that lets you develop components and see all their states in isolation from your app**.

@abstr_image 

You can also deploy your Storybook as a static app. This way, everyone in your team can view and review different states of UI components without starting a backend server or creating an account in your app.

**Here’s how to setup your app with Storybook:**

First, install the following npm package globally:

@abstr_code_section 

Then, run the following command inside your app’s directory:

@abstr_code_section 

After that, follow the instructions on the screen.

Learn more about React Storybook:

  * Screencast: @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink with React Storybook



## Making a Progressive Web App

You can turn your React app into a @abstr_hyperlink by following the steps in @abstr_hyperlink .

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### Static Server

For environments using @abstr_hyperlink , the easiest way to handle this would be to install @abstr_hyperlink and let it handle the rest:

@abstr_code_section 

The last command shown above will serve your static site on the port _* @abstr_number *_. Like many of @abstr_hyperlink ’s internal settings, the port can be adjusted using the `-p` or `--port` flags.

Run this command to get a full list of the options available:

@abstr_code_section 

### Other Solutions

You don’t necessarily need a static server in order to run a Create React App project in production. It works just as fine integrated into an existing dynamic one.

Here’s a programmatic example using @abstr_hyperlink and @abstr_hyperlink :

@abstr_code_section 

The choice of your server software isn’t important either. Since Create React App is completely platform-agnostic, there’s no need to explicitly use Node.

The `build` folder with static assets is the only output produced by Create React App.

However this is not quite enough if you use client-side routing. Read the next section if you want to support URLs like `/todos/ @abstr_number` in your single-page app.

### Serving Apps with Client-Side Routing

If you use routers that use the HTML @abstr_number @abstr_hyperlink under the hood (for example, @abstr_hyperlink with `browserHistory`), many static file servers will fail. For example, if you used React Router with a route for `/todos/ @abstr_number`, the development server will respond to `localhost: @abstr_number /todos/ @abstr_number` properly, but an Express serving a production build as above will not.

This is because when there is a fresh page load for a `/todos/ @abstr_number`, the server looks for the file `build/todos/ @abstr_number` and does not find it. The server needs to be configured to respond to a request to `/todos/ @abstr_number` by serving `index.html`. For example, we can amend our Express example above to serve `index.html` for any unknown paths:

@abstr_code_section 

If you’re using @abstr_hyperlink , you need to create a `.htaccess` file in the `public` folder that looks like this:

@abstr_code_section 

It will get copied to the `build` folder when you run `npm run build`.

Now requests to `/todos/ @abstr_number` will be handled correctly both in development and in production.

### Building for Relative Paths

By default, Create React App produces a build assuming your app is hosted at the server root.  
To override this, specify the `homepage` in your `package.json`, for example:

@abstr_code_section 

This will let Create React App correctly infer the root path to use in the generated HTML file.

#### Serving the Same Build from Different Paths

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.

If you are not using the HTML @abstr_number `pushState` history API or not using client-side routing at all, it is unnecessary to specify the URL from which your app will be served. Instead, you can put this in your `package.json`:

@abstr_code_section 

This will make sure that all the asset paths are relative to `index.html`. You will then be able to move your app from `http://mywebsite.com` to `http://mywebsite.com/relativepath` or even `http://mywebsite.com/relative/path` without having to rebuild it.

### Azure

See @abstr_hyperlink blog post on how to deploy your React app to @abstr_hyperlink .

### Firebase

Install the Firebase CLI if you haven’t already by running `npm install -g firebase-tools`. Sign up for a @abstr_hyperlink and create a new project. Run `firebase login` and login with your previous created Firebase account.

Then run the `firebase init` command from your project’s root. You need to choose the **Hosting: Configure and deploy Firebase Hosting sites** and choose the Firebase project you created in the previous step. You will need to agree with `database.rules.json` being created, choose `build` as the public directory, and also agree to **Configure as a single-page app** by replying with `y`.

@abstr_code_section 

Now, after you create a production build with `npm run build`, you can deploy it by running `firebase deploy`.

@abstr_code_section 

For more information see @abstr_hyperlink .

### GitHub Pages

> Note: this feature is available with `react-scripts@ @abstr_number . @abstr_number . @abstr_number` and higher.

#### Step @abstr_number : Add `homepage` to `package.json`

**The step below is important!**  
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field:

@abstr_code_section 

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step @abstr_number : Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at @abstr_hyperlink , run:

@abstr_code_section 

Add the following scripts in your `package.json`:

@abstr_code_section 

The `predeploy` script will run automatically before `deploy` is run.

#### Step @abstr_number : Deploy the site by running `npm run deploy`

Then run:

@abstr_code_section 

#### Step @abstr_number : Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

@abstr_image 

#### Step @abstr_number : Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

#### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML @abstr_number `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/ @abstr_number`, where `/todos/ @abstr_number` is a frontend route, the GitHub Pages server returns @abstr_number because it knows nothing of `/todos/ @abstr_number`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

  * You could switch from using HTML @abstr_number history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/ @abstr_number ?_k=yknaj`). @abstr_hyperlink about different history implementations in React Router.
  * Alternatively, you can use a trick to teach GitHub Pages to handle @abstr_number by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `@abstr_number .html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique @abstr_hyperlink .



### Heroku

Use the @abstr_hyperlink .  
You can find instructions in @abstr_hyperlink .

#### Resolving Heroku Deployment Errors

Sometimes `npm run build` works locally but fails during deploy via Heroku. Following are the most common cases.

##### "Module not found: Error: Cannot resolve 'file' or 'directory'"

If you get something like this:

@abstr_code_section 

It means you need to ensure that the lettercase of the file or directory you `import` matches the one you see on your filesystem or on GitHub.

This is important because Linux (the operating system used by Heroku) is case sensitive. So `MyDirectory` and `mydirectory` are two distinct directories and thus, even though the project builds locally, the difference in case breaks the `import` statements on Heroku remotes.

##### "Could not find a required file."

If you exclude or ignore necessary files from the package you will see a error similar this one:

@abstr_code_section 

In this case, ensure that the file is there with the proper lettercase and that’s not ignored on your local `.gitignore` or `~/.gitignore_global`.

### Modulus

See the @abstr_hyperlink on how to deploy your react app to Modulus.

## Netlify

**To do a manual deploy to Netlify’s CDN:**

@abstr_code_section 

Choose `build` as the path to deploy.

**To setup continuous delivery:**

With this setup Netlify will build and deploy when you push to git or open a pull request:

@abstr_number . @abstr_hyperlink @abstr_number . Pick your Git hosting service and select your repository @abstr_number . Click `Build your site`

**Support for client-side routing:**

To support `pushState`, make sure to create a `public/_redirects` file with the following rewrite rules:

@abstr_code_section 

When you build the project, Create React App will place the `public` folder contents into the build output.

### Now

@abstr_hyperlink offers a zero-configuration single-command deployment.

@abstr_number . Install the `now` command-line tool either via the recommended @abstr_hyperlink or via node with `npm install -g now`.

@abstr_number . Install `serve` by running `npm install --save serve`.

@abstr_number . Add this line to `scripts` in `package.json`:
    
    
     @abstr_code_section
    

@abstr_number . Run `now` from your project directory. You will see a **now.sh** URL in your output like this:
    
    
     @abstr_code_section 
    
    Paste that URL into your browser when the build is complete, and you will see your deployed app.
    

Details are available in @abstr_hyperlink 

### S @abstr_number and CloudFront

See this @abstr_hyperlink on how to deploy your React app to Amazon Web Services @abstr_hyperlink and @abstr_hyperlink .

### Surge

Install the Surge CLI if you haven’t already by running `npm install -g surge`. Run the `surge` command and log in you or create a new account. You just need to specify the _build_ folder and your custom domain, and you are done.

@abstr_code_section 

Note that in order to support routers that use HTML @abstr_number `pushState` API, you may want to rename the `index.html` in your build folder to `@abstr_number .html` before deploying to Surge. This @abstr_hyperlink .

## Advanced Configuration

You can adjust various development and production settings by setting environment variables in your shell or with .env.

Variable | Development | Production | Usage :--- | :---: | :---: | :--- BROWSER | :white_check_mark: | :x: | By default, Create React App will open the default system browser, favoring Chrome on macOS. Specify a @abstr_hyperlink to override this behavior, or set it to `none` to disable it completely. HOST | :white_check_mark: | :x: | By default, the development web server binds to `localhost`. You may use this variable to specify a different host. PORT | :white_check_mark: | :x: | By default, the development web server will attempt to listen on port @abstr_number or prompt you to attempt the next available port. You may use this variable to specify a different port. HTTPS | :white_check_mark: | :x: | When set to `true`, Create React App will run the development server in `https` mode. PUBLIC_URL | :x: | :white_check_mark: | Create React App assumes your application is hosted at the serving web server's root or a subpath as specified in <code>package.json</code> (<code>homepage</code>). Normally, Create React App ignores the hostname. You may use this variable to force assets to be referenced verbatim to the url you provide (hostname included). This may be particularly useful when using a CDN to host your application. CI | :large_orange_diamond: | :white_check_mark: | When set to `true`, Create React App treats warnings as failures in the build. It also makes the test runner non-watching. Most CIs set this flag by default.

## Troubleshooting

### `npm start` doesn’t detect changes

When you save a file while `npm start` is running, the browser should refresh with the updated code.  
If this doesn’t happen, try one of the following workarounds:

  * If your project is in a Dropbox folder, try moving it out.
  * If the watcher doesn’t see a file called `index.js` and you’re referencing it by the folder name, you @abstr_hyperlink due to a Webpack bug.
  * Some editors like Vim and IntelliJ have a “safe write” feature that currently breaks the watcher. You will need to disable it. Follow the instructions in @abstr_hyperlink .
  * If your project path contains parentheses, try moving the project to a path without them. This is caused by a @abstr_hyperlink .
  * On Linux and macOS, you might need to @abstr_hyperlink to allow more watchers.
  * If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an `.env` file in your project directory if it doesn’t exist, and add `CHOKIDAR_USEPOLLING=true` to it. This ensures that the next time you run `npm start`, the watcher uses the polling mode, as necessary inside a VM.



If none of these solutions help please leave a comment @abstr_hyperlink .

### `npm test` hangs on macOS Sierra

If you run `npm test` and the console gets stuck after printing `react-scripts test --env=jsdom` to the console there might be a problem with your @abstr_hyperlink installation as described in @abstr_hyperlink .

We recommend deleting `node_modules` in your project and running `npm install` (or `yarn` if you use it) first. If it doesn't help, you can try one of the numerous workarounds mentioned in these issues:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



It is reported that installing Watchman @abstr_number . @abstr_number . @abstr_number or newer fixes the issue. If you use @abstr_hyperlink , you can run these commands to update it:

@abstr_code_section 

You can find @abstr_hyperlink on the Watchman documentation page.

If this still doesn’t help, try running `launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist`.

There are also reports that _uninstalling_ Watchman fixes the issue. So if nothing else helps, remove it from your system and try again.

### `npm run build` silently fails

It is reported that `npm run build` can fail on machines with no swap space, which is common in cloud environments. If @abstr_hyperlink , consider adding some swap space to the machine you’re building on, or build the project locally.

### `npm run build` fails on Heroku

This may be a problem with case sensitive filenames. Please refer to this section.

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, @abstr_hyperlink or @abstr_hyperlink 
