# wp-github-updater

@abstr_hyperlink 

Wordpress plugin that enables automatic updates of plugins and themes from github

## Installation

Download latest zip archive and decompress into your wordpress plugins folder, then activate.

## Usage

  * Host your plugin or theme on github
  * Make sure your plugin php file or your theme style.css file has its Plugin URI or Theme URI entry set to a github repository url (e.g. https://github.com/me/my-wp-plugin-or-theme)
  * Tag the plugin or theme versions you want to be proposed as updates, _ONLY_ use version numbers as tags (e.g. @abstr_number . @abstr_number . @abstr_number ), an update will show if this version is higher than the one currently instaled (as set in current Version tag in plugin php or theme style.css file)
  * Make releases from your tags (if done manually, you have to add release notes to your tag on github so it becomes a release)
  * If needed you can add a github release asset to your release, it will be installed instead of your plugin or theme source code (e.g. your repository has install tasks, dependencies that have to be built by a CI system or manually)



### For plugins

Add the following code to your plugin main php file (this example is for use with a plugin class, adapt for another structure): `@abstr_code_section`

### For themes

Add the following code to your theme functions php file (make sure the second argument to GitHubUpdater class instantiation points to your theme root, e.g. __DIR__ if your functions.php file is in the root of your theme, adapt if not): `@abstr_code_section`

That's all folks!
