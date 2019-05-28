# Coffee React Quickstart

Quickstart for creating React.js web applications.

It has a number of nice goodies baked in including:

  * Live reloading for both CSS _and_ Javascript! This really speeds up development. Live reloading is powered by the @abstr_hyperlink and @abstr_hyperlink projects.
  * Write your JSX in Coffeescript thanks to @abstr_hyperlink .
  * Amazing URL-driven-development (UDD) with the @abstr_hyperlink .
  * Uses @abstr_hyperlink for building CSS and Javascript. Run `gulp watch` for rebuilding css/js on the fly while developing and `gulp build` to create minified versions for deploying to production.
  * Includes sensible element stylings and several useful Sass plugins: 
    * @abstr_hyperlink : best-of-breed grid system.
    * @abstr_hyperlink : easily create pleasing modular type scales.
    * @abstr_hyperlink : flexible button styling.
    * @abstr_hyperlink : Super simple media queries.



## Install dependencies

Clone this repo and then after entering the new directory run `npm install` and `bundle install`. This will install the respective NPM and Ruby Gem dependencies.

You'll also need to have gulp installed globally to run the coffeescript gulpfile: `npm install -g gulp`

## Development

Run in the root of your directory: `npm run watch`

This will watch the src directories and build on changes and placed the built css and js files in the public directory. It'll serve everything in the /public directory at localhost: @abstr_number 

Then try editing `src/scripts/hello_world.cjsx` and see your changes magically show up in your browser with _no_ page reload!

# Production build

To build for production, simply run `gulp build`

# Demo

Try out the example app included with this quickstart: http://kyleamathews.github.io/coffee-react-quickstart/
