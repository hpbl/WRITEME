# Angular QuickStart Source

@abstr_hyperlink 

This repository holds the TypeScript source code of the @abstr_hyperlink , the foundation for most of the documentation samples and potentially a good starting point for your application.

It's been extended with testing support so you can start writing tests immediately.

**This is not the perfect arrangement for your application. It is not designed for production. It exists primarily to get you started quickly with learning and prototyping in Angular**

We are unlikely to accept suggestions about how to grow this QuickStart into something it is not. Please keep that in mind before posting issues and PRs.

## Updating to a newer version of the Quickstart Repo

From time to time the QuickStart will be enhanced with support for new features or to reflect changes to the @abstr_hyperlink .

You can update your existing project to an up-to-date QuickStart by following these instructions: \- Create a new project using the instructions below \- Copy the code you have in your project's `main.ts` file onto `src/app/main.ts` in the new project \- Copy your old `app` folder into `src/app` \- Delete `src/app/main.ts` if you have one (we now use `src/main.ts` instead) \- Copy your old `index.html`, `styles.css` and `tsconfig.json` into `src/` \- Install all your third party dependencies \- Copy your old `e @abstr_number e/` folder into `e @abstr_number e/` \- Copy over any other files you added to your project \- Copy your old `.git` folder into your new project's root

Now you can continue working on the new project.

## Prerequisites

Node.js and npm are essential to Angular development. 

@abstr_hyperlink if it's not already installed on your machine.

**Verify that you are running at least node`v @abstr_number .x.x` and npm `@abstr_number .x.x`** by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors.

We recommend @abstr_hyperlink for managing multiple versions of node and npm.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`). @abstr_code_section 

We have no intention of updating the source on `angular/quickstart`. Discard the `.git` folder.. @abstr_code_section 

### Delete _non-essential_ files (optional)

You can quickly delete the _non-essential_ files that concern testing and QuickStart repository maintenance ( ** _including all git-related artifacts_** such as the `.git` folder and `.gitignore`!) by entering the following commands while in the project folder:

##### OS/X (bash)

@abstr_code_section 

##### Windows

@abstr_code_section 

### Create a new git repo

You could start writing code now and throw it all away when you're done. If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a _local git repo_ and make the first commit: @abstr_code_section 

> Recover the deleted `.gitignore` from the QuickStart repository if you lost it in the _Delete non-essential files_ step.

Create a _remote repository_ for this project on the service of your choice.

Grab its address (e.g. _`https://github.com/<my-org>/my-proj.git`_ ) and push the _local repo_ to the _remote_. @abstr_code_section 

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

@abstr_code_section 

> Doesn't work in _Bash for Windows_ which does not support servers as of January, @abstr_number .

The `npm start` command first compiles the application, then simultaneously re-compiles and runs the `lite-server`. Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

  * `npm start` \- runs the compiler and a server at the same time, both in "watch mode".
  * `npm run build` \- runs the TypeScript compiler once.
  * `npm run build:w` \- runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
  * `npm run serve` \- runs the @abstr_hyperlink , a light-weight, static file server, written and maintained by @abstr_hyperlink and @abstr_hyperlink with excellent support for Angular apps that use routing.



Here are the test related scripts: * `npm test` \- compiles, runs and watches the karma unit tests * `npm run e @abstr_number e` \- compiles and run protractor e @abstr_number e tests, written in Typescript (*e @abstr_number e-spec.ts)

## Testing

The QuickStart documentation doesn't discuss testing. This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

_It is unwise and rarely possible to run the application, the unit tests, and the e @abstr_number e tests at the same time. We recommend that you shut down one before starting another._

### Unit Tests

TypeScript unit-tests are usually in the `src/app` folder. Their filenames must end in `.spec.ts`.

Look for the example `src/app/app.component.spec.ts`. Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner. Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window. We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests. Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and restart it. No worries; it's pretty quick.

### End-to-end (E @abstr_number E) Tests

E @abstr_number E tests are in the `e @abstr_number e` directory, side by side with the `src` folder. Their filenames must end in `.e @abstr_number e-spec.ts`.

Look for the example `e @abstr_number e/app.e @abstr_number e-spec.ts`. Add more `.e @abstr_number e-spec.js` files as you wish (although one usually suffices for small projects); we configured Protractor to find them.

Thereafter, run them with `npm run e @abstr_number e`.

That command first compiles, then simultaneously starts the `lite-server` at `localhost: @abstr_number` and launches Protractor. 

The pass/fail test results appear at the bottom of the terminal window. A custom reporter (see `protractor.config.js`) generates a `./_test-output/protractor-results.txt` file which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.
