# Story Map Journal

The Story Map Journal is ideal when you want to combine narrative text with maps and other embedded content. A Map Journal contains entries, or sections, that users simply scroll through. Each section in a Map Journal has an associated map, image, video or web page. Actions can also be defined in journal sections so that, for example, clicking a word automatically zooms the section’s map to a particular location.

@abstr_image 

@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

_*Latest release is version @abstr_number . @abstr_number . @abstr_number *_ , if you want to be informed of new releases, we recommend you to watch this repository ( @abstr_hyperlink ). See the @abstr_hyperlink for release notes.

For more infomation about using and customizing Esri's Storytelling Apps follow the @abstr_hyperlink .

## Help content

  * Introduction
  * Instructions
  * Feedback / support
  * FAQ
  * Configuration
  * Customize the look and feel
  * Developer guide
  * Issues
  * Contributing
  * Licensing



## Introduction

A Map Journal application can be created from @abstr_hyperlink , from the @abstr_hyperlink or from a @abstr_hyperlink deployment. The Journal's data are stored in a Web Application Item (this includes the narrative content, reference to the webmap(s), pictures, videos and the settings). This repository provides the application source code for developers that want to customize Map Journal.

For more information about the Map Journal, including a gallery of examples and a step-by-step tutorial, please see the @abstr_hyperlink page on the @abstr_hyperlink .

## Instructions

First create your Map Journal in ArcGIS Online using the @abstr_hyperlink . Once your story is ready, you have to find its ID in ArcGIS Online. The ID is a @abstr_number character string that you will find in your web browser's address bar when you are viewing your journal.

@abstr_image 

@abstr_number . @abstr_hyperlink @abstr_number . Deploy the application on your webserver. See FAQ for details @abstr_number . Edit index.html, find the configuration section on line @abstr_number and paste in your application ID @abstr_number . Navigate to index.html (e.g., `http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number /MapJournal/index.html`)

Enjoy! You can continue to use the builder in ArcGIS Online to modify your story. See customize the look and feel section or developer guide if you want to modify the app.

_If you are using Portal for ArcGIS, please follow the instructions at the end of`app/config.js` to configure the application. Optionally you can also configure the application to use the ArcGIS API for JavaScript included on your Portal._

## Feedback / support

We would love to hear from you! * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 

When you contact us, don't hesitate to include a link to your application to make it easier for us to understand what you are working on.

## FAQ

### What should I check before publishing a Journal?

We recommend that you perform the following checks before sharing your Journal with your audience: \- Check that all your Journal's content is shared with your audience (webmaps, medias, ...). Typically you can use another computer than the one you have used to build your story to make sure everything is loading properly. Alternatively @abstr_hyperlink will show you how to configure your browser for an incognito session or you can just sign-out from ArcGIS Online and any service that you have used to host your Journal's resources. \- Try the application on different browsers, screen resolutions and mobile devices. You can @abstr_hyperlink inside your desktop browser.

### What are the supported browsers?

Map Journal is supported on Internet Explorer @abstr_number and above, Chrome, Firefox, Safari and the most recent tablet and smartphone devices. Map Journal authoring is supported on Internet Explorer @abstr_number and above, on the most recent tablet but not on smartphone.

We actively test the application in all major browsers but if you experience difficulties especially with the builder, we recommend that you use @abstr_hyperlink .

### Tips for your content

#### Link between sections

One @abstr_hyperlink @abstr_hyperlink is to add the ability to navigate between Journal's sections using links in the panel or through map features popup. Until we implement that capability in the builder you can do it using HTML markup.

To add links in a section content, use the `Source button` of the text editor (second from the right on the first line) and use the following markup:

@abstr_code_section 

Note that the links navigate the Journal using an index that start at @abstr_number for the Home Section. If you remove or reorder your sections, you will have to modify the links manually.

You can also add that capability to map feature popups. This can for example allow the home section map to be the spatial index to your story. To do that you need to download the application and include a piece of code in `index.html`, look at the end of the file and modify it as below. Follow the instructions to configure the web map and the layer that will receive the click event.

@abstr_code_section 

### Security

#### Can I keep my Journal private?

Yes, the regular ArcGIS Online security model applies. By default your Journal is private, you can share it through Map Journal builder or ArcGIS Online. When you share your Journal, it is your responsibility to make sure that all the resources of your Journal (webmaps, images, videos) are accessible to your audience.

#### Who can edit my Journal?

A Journal can only be edited by its owner (the named account that initially created the Journal). Organization Administrator (does not apply for public account) can take or give the Journal's ownership to another user. In that case you won't anymore be able to edit the Journal. Changing the ownership is the only way to collaborate on a Journal creation without sharing the owner's credentials.

#### Can I use private web map or layer?

Yes. 

When the Journal is hosted in ArcGIS Online or Portal for ArcGIS, users that don't have access to the Journal or a webmap used in the Journal will be redirected to the ArcGIS Online sign-in page. It is not possible to display an authentication dialog in the Map Journal when the Journal is hosted in ArcGIS Online.

When the Journal is hosted on your web server, an authentication dialog will appear inside the application. 

Note that for that authentication to work on some older browser (Internet Explorer @abstr_number ) you need to install a proxy server on your web server to make sure the login credentials can be passed securely to ArcGIS Online. For more information, see the @abstr_hyperlink in the ArcGIS API for JavaScript documentation.

Because of that limitation, we recommend that you configure the application to use OAuth. OAuth @abstr_number . @abstr_number based authentication is available for ArcGIS Online and Portal for ArcGIS users with developer or organizational accounts. Follow the procedure to @abstr_hyperlink and @abstr_hyperlink to get an OAuth application ID. Once you have that application, open `index.html`, locate the `configOptions` section and fill the `oAuthAppId` property.

If you are using secured services but don't want users to have to authenticate, you can use a proxy to store the username/password to be used, see @abstr_hyperlink , and add a proxy rules to specify what services need to use the proxy by editing `PROXY_RULES` in `app/config.js`.

### Deployment

Deploying a Map Journal require to use ArcGIS Online or Portal for ArcGIS. The Journal content have to be created using the Map Journal builder and will live in a Web Application Item.

#### Can I use the template without ArcGIS Online or Portal for ArcGIS?

This is not a supported use case at that time. Please let us know if you are interested by such a scenario. Map Journal rely heavily on the Portal for ArcGIS API but it is doable to modify the application to support other scenarios.

#### Where is the data stored?

The Journal's data are stored in a Web Application Item in ArcGIS Online or Portal for ArcGIS. This include the narrative content, reference to the webmap(s), reference to picture(s), video(s), web page(s) and the settings.

The image and videos that you include in your Journal using the builder are not copied in ArcGIS Online. You have to make sure that those medias as well as the webmaps you are using are and will remain accessible to your audience.

#### Can I deploy Map Journal on Portal for ArcGIS?

Yes, Map Journal is included with Portal for ArcGIS starting at version @abstr_number . @abstr_number .

If you are using Portal @abstr_number . @abstr_number + and want to update Map Journal, @abstr_hyperlink . If you are using Portal @abstr_number . @abstr_number . @abstr_number or @abstr_number . @abstr_number . @abstr_number , you can't deploy the latest version of Map Journal and have to deploy the following version @abstr_hyperlink .

Then: \- Find your Portal `apps/MapJournal` folder (depending on your installation and version of Portal, this is either `C:\Program Files\ArcGIS\Portal\apps\MapSeries` or `C:\Program Files\ArcGIS\Portal\webapps\arcgis#home\webmap\templates\MapJournal`). \- Remove the content of that folder \- Extract the archive so that `index.html` is located at `MapJournal\index.html`

If Map Journal was already included in your Portal you are done (Portal for ArcGIS @abstr_number . @abstr_number +).

If Map Journal was not available in your Portal: \- Log into Portal for ArcGIS and open My Content > Add Item > Application > Web Mapping Application > Configurable. Configure the URL to `https://portal.domain.com/arcgis/apps/MapJournal`. More details in the following documentation @abstr_hyperlink . \- Create a new group that will reference the template available in your Portal \- Share the newly created item with that group \- Open My Organization > Edit Settings > Map and set the `Web App Templates` to the newly created group. More details in the following documentation @abstr_hyperlink \- Now when you share a web map, the template should be an option

_Note that the archive you downloaded is using the ArcGIS API for JavaScript hosted in ArcGIS Online. This can create some incompatibility with your Portal, if you run into issue, please see the next section to update it._

Also note that the web application gallery preview feature redirects to the StoryMaps website, the target page can be modified in `app/config.js > HELP_URL_PORTAL`.

#### Can the template be used offline?

Yes, by using Portal for ArcGIS and configuring the template to use the ArcGIS API for Javascript included with the Portal. 

To edit the ArcGIS API for JavaScript, edit `index.html` and locate `pathJSAPI` around line @abstr_number . The URL is `//webadaptor.domain.com/arcgis/jsapi/jsapi` where arcgis is the name of your Web Adaptor.

When deployed on a Portal for ArcGIS instance, the application doesn't require any external service to function. But by default the template will still include the header social buttons and Journal author are able to import pictures and videos from the some online pictures hosting services. These options can be disabled individually through the configuration file `app/config.js`.

#### Can I use the builder with the downloadable?

Yes, when the template is configured with an application ID, adding the URL parameter 'edit' will open the builder. You will be prompted for user authentication through the Identity Manager.

#### How to deploy the application on a web server?

If you are not familiar with web servers here is three solutions: * Use a free hosting service like @abstr_hyperlink , you may have to @abstr_hyperlink * Use the web server that comes with your server Operating System. On Windows this is Internet Information Services (IIS), if you have a `C:\inetpub\wwwroot` folder on your computer, you should be able to access it's content using `http://localhost` * On Windows or Mac OS, use a simple web server like @abstr_hyperlink (not recommended for production)

If you are experiencing some rendering issues like improper symbol appearing instead of icons, you will have an extra configuration to perform. Some servers require to configure a new mime type to be able to serve Map Journal fonts correctly. See the following links for more information:

  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Can I use a single deployment of Map Journal for multiple stories?

Yes. If you have customized the application and deployed it on your server, you don't need to copy it multiple times, edit index.html and paste a different application ID for each story you want to publish. 

Instead edit `index.html`, locate the `configOptions` section and fill the `authorizedOwners` property with the ArcGIS Online or Portal for ArcGIS login of the owner(s) of the Journals you want to use. This make possible for the application to display any of the Journal created by the specified user(s) through an URL parameter.

Example of the same application displaying two stories: * http://myserver.com/MapJournal/index.html?appid=c @abstr_number ad @abstr_number a @abstr_number de @abstr_number a @abstr_number a @abstr_number f @abstr_number a @abstr_number * http://myserver.com/MapJournal/index.html?appid=c @abstr_number ad @abstr_number a @abstr_number de @abstr_number a @abstr_number a @abstr_number f @abstr_number a @abstr_number 

## Configuration

In addition to the configuration offered by the builder, the file `app/config.js` provide various additional settings. This is for example the place where you can override some settings like the list of Geocoder services to be used (changes override ArcGIS Online or your Organization default settings). See the documentation provided in that file for more details. 

## Customize the look and feel

### Custom color theme

As Map Journal doesn't yet offer the ability to create a custom theme through the builder, customizing the various colors of the application require to download and configure them through `app/config.js`.

For example if you are using a Side Panel layout and have kept the default theme, open `app/config.js`, locate the `LAYOUT` property and edit the following line with the desired colors.

@abstr_code_section 

### Other customization

Most of the look and feel customization can be done using the @abstr_hyperlink and including the css/html overrides directly into `index.html`. 

As the application Javascript and CSS are minified, **we don't recommend that you directely edit those files** (e.g. `app-viewer-min.css`, `app-viewer-min.js`, ...). In addition to being hard to edit, this will make application update complex for you.

If you want to change the behavior of one functionality or want to add new one, follow the developer guide below.

The easiest way to find the id or path of a DOM element that you want to customize is to use your browser developer tool, read documentation for @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink .

Here is some customization examples that can achieved through the `style` tag already present for you in `index.html` (search for `/* CUSTOM CSS RULES */`):

#### Use an image as the background of the Side or Floating panel header

@abstr_code_section 

## Developer guide

This developer guide is intended for developers that wants to modify the behavior or add new functionalities to the Map Journal application. It requires knowledge of HTML, Javascript and CSS languages. If you only need to customize look and feel, you should be able to do so using the customize section above.

### Application life cycle

Map Journal fires events that allow customization with lose integration. This mean that you don't need to understand the application internals to implement simple extension.

To try those events, look for the `Custom Javascript` block at the far end of index.html.

@abstr_code_section 

### Developer helpers

In addition to the events described above, the story data, configuration and useful helpers functions can be accessed through the global variable `app`.

@abstr_code_section 

Some events are also available for you to navigate the Journal programmatically:

@abstr_code_section 

### Environment setup

Clone the repository or download a @abstr_hyperlink .

To build a production version of the application from the source code, you first need to install @abstr_hyperlink .

Then initialize the environment by running the following commands **in the MapJournal folder** : * `npm install` * `npm install –g grunt-cli`

This will create a new `node-modules` folder in your project root with all the tools required to build the application. If you have trouble running the second command, @abstr_hyperlink .

### How to use the application from the source code

  * Make accessible the MapJournal folder on a web server. Use your favorite server or run one with `grunt server`, this will start a server on port `@abstr_number`
  * If using a Portal for ArcGIS instance configure the sharing url `app/config.js` (last property)
  * Use the URL parameter `appid` to specify the web item to be loaded, e.g.: http://localhost: @abstr_number /?appid=ABCD (configuring index.html > configOptions.appid is not supported in development mode)



### How to build application from the source code

  * Open a terminal and navigate to the MapJournal folder 
  * Run the following command: `grunt`



The deploy folder now contains the built application that you can deploy to your web server.

### Issues building the application

The build script perform code validation through @abstr_hyperlink , you can disable those validations by editing Gruntfile.js and look for the following comments `/* Comment out to disable code linting */`.

### Design

Map Journal relies on AMD and Dojo loader @abstr_hyperlink for application structure.

The application is structured as this:

| Path | Contains | | --------------------------------------------- | -------------------------------------------------------------------------------------------- | | Gruntfile.js | Build configuration | | src/ | Main source code folder with index.html and the Eclipse project configuration | | src/app/ | Javascript and CSS source code | | src/app/config.js | App configuration file (loaded at execution time) | | **src/app/storymaps/common/** | Modules common across storymaps templates (main module is Core.js) | | src/app/storymaps/common/builder/ | Builder modules (main module is Builder.js) | | src/app/storymaps/common/mapcontrols/ | Map UI components (Overview, Legend) | | src/app/storymaps/common/ui/ | UI components | | src/app/storymaps/common/utils/ | Utils, connector,... | | src/app/storymaps/common/_resources | Static resources | | **src/app/storymaps/tpl/** | Map Journal modules (build configuration files in the root) | | src/app/storymaps/tpl/builder/ | Builder modules (main module is BuilderView.js) | | src/app/storymaps/tpl/core/ | Core modules (main module is MainView.js) | | src/app/storymaps/tpl/ui/ | UI components of the viewer grouped by target device | | src/lib-app/ | Dependencies (included in the final app) | | src/lib-build/ | Dependencies used by the build (not included in final app) | | src/resources/ | Static resources |

The main dependencies are: * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 

The application Javascript and CSS are minified into four files:

| File | | | --------------------- | ----------------------------------------------------------------------------- | | app/viewer-min.css | Compressed CSS loaded when accessing the Map Journal as a viewer | | app/viewer-min.js | Compressed Javascript loaded when accessing the Map Journal as a viewer | | app/builder-min.css | Compressed CSS loaded when accessing the Map Journal as an author | | app/builder-min.js | Compressed Javascript loaded when accessing the Map Journal as an author |

Depending on the URL parameters, index.html will load the corresponding files.

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our @abstr_hyperlink .

## Licensing

Copyright @abstr_number Esri

Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's LICENSE.txt file.

Some open-source components of this project are licensed under other License terms, see `src/lib-app/` folder for respective licence files.

| Library | License | | --------------------- | --------- | | Bootstrap | MIT | | CKEditor | LGPL | | jQuery | MIT | | jQuery Colorbox | MIT | | iDangero.us swiper | MIT | | ZeroClipboard | MIT | | History.js | BSD | | jQuery UI | MIT | | FastClick | MIT | | Hammer.JS | MIT | | jQuery mousewheel | MIT | | jQuery UI Touch Punch | MIT |
