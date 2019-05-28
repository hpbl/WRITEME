@abstr_hyperlink 

# cdnJS Script Repository

The repository mirroring all scripts on cdnjs.cloudflare.com, created and maintained by @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink 

We will host any version of any library. Feel free to add a pull request for an older version of a library if your site still uses it.

__Libraries must have notable popularity. @abstr_number watchers on GitHub is a good example, but as long as reasonably popularity can be demonstrated the library will be added.__

## Extensions, Plugins, Resources

@abstr_hyperlink 

## Conventions

  * Filenames should **not** include version number and be **lowercase**
  * Javascript & Css files should be minified, If the library doesn't already provide a minified version, our preferred minifier is @abstr_hyperlink 
  * If updating an existing library, try to keep consistent with the existing structure



## Pull requests steps

@abstr_number . Fork this repository * Install all the needed dependencies locally (you will need `node`): `npm install` @abstr_number . Add your library (following the conventions of this repository) * @abstr_number commit per pull request * @abstr_number library per pull request * The pull request must be tagged in the original repository (some exceptions apply) * include a package.json in the npm format (see `test/schemata/npm-package.json` for details - it's very simple) * Run `npm test` to check everything is ok @abstr_number . Send us a pull request. * Make sure you include in the pull description: @abstr_number . Where you downloaded the script @abstr_number . If it isn't clear, how you found the version of the script * e.g. https://github.com/cdnjs/cdnjs/pull/ @abstr_number @abstr_number . If the library doesn't already provide a minified version, our preferred minifier is @abstr_hyperlink 

## Running the validator

@abstr_number . Install all the needed dependencies locally (you will need `node`): `npm install` @abstr_number . Run the test suite: `npm test`
