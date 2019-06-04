# Blank HTML App Designer Template for Building Packaged Mobile Web Apps

Copyright © @abstr_number - @abstr_number , Intel Corporation. All rights reserved.

See LICENSE.md for license terms and conditions.

Use this template as a starting point for an Intel XDK App Designer project that will be distributed as a _packaged mobile web app_. The file named `init-dev.js` included as part of this project contains init code that generates an `app.Ready` event; which is used as a way to normalize how App Designer starts its own code. This technique allows App Designer to use a standard init sequence regardless of the specific package type (a _packaged web app_ or a _Cordova web app_ ).

The `icon.png` and `screenshot.png` files are not required by your project. They are included for use by the Intel XDK template/demo panel and have no use within a real app. You can safely delete them from your project directory.

You can build a _packaged Cordova web app_ from this template that can be submitted to a store using the "Cordova Hybrid Mobile App Platforms” build tiles (for Crosswalk, Android, iOS and Windows). The `intelxdk.config.additions.xml` file can be used to include options that control your _packaged Cordova web app_ builds. For example, you can set the splash screen display time for a packaged Android or Crosswalk Cordova app using this file.

Do not be alarmed if you see a " _Failed to load resource: net::ERR_FILE_NOT_FOUND_ " message caused by the `cordova.js` script in your `index.html` file. The `cordova.js` script is _only required_ if you choose to convert your "Standard HTML @abstr_number Project" into a "Standard HTML @abstr_number + Cordova Project."

You can:

  * safely ignore the " _Failed to load resource: net::ERR_FILE_NOT_FOUND_ " error message



or

  * comment out this script line if you will not be converting your project into a Cordova app that uses Cordova APIs.



The `cordova.js` script will be needed if you choose to convert your project to a _Cordova project_ and enhance your app with Cordova APIs. It is not required to build a _Cordova packaged web app_ for distribution via the Android, iOS and Windows stores _if that app does not utilize Cordova APIs_.

This blank template does not require any Cordova APIs. If you would like to add Cordova APIs to your application (via Cordova plugins) you must first convert your project into a Cordova project. You can do this by clicking the Cordova icon in the _Project Info_ section on the **Projects** tab. Or, you can create a new Cordova project using a Cordova blank template or a Cordova demo or sample app as a starting point.
