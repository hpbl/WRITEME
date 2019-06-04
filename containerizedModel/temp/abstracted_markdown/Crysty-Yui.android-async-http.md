# Asynchronous Http Client for Android

@abstr_hyperlink 

An asynchronous, callback-based Http client for Android built on top of Apache's @abstr_hyperlink libraries.

## Changelog

See what is new in version @abstr_number . @abstr_number . @abstr_number released on @abstr_number th May @abstr_number 

https://github.com/loopj/android-async-http/blob/ @abstr_number . @abstr_number . @abstr_number /CHANGELOG.md

## Javadoc

Latest Javadoc for @abstr_number . @abstr_number . @abstr_number release are available here (also included in Maven repository):

http://loopj.com/android-async-http/doc/

## Features

  * Make **asynchronous** HTTP requests, handle responses in **anonymous callbacks**
  * HTTP requests happen **outside the UI thread**
  * Requests use a **threadpool** to cap concurrent resource usage
  * GET/POST **params builder** (RequestParams)
  * **Multipart file uploads** with no additional third party libraries
  * Tiny size overhead to your application, only _* @abstr_number kb_ * for everything
  * Automatic smart **request retries** optimized for spotty mobile connections
  * Automatic **gzip** response decoding support for super-fast requests
  * Optional built-in response parsing into **JSON** (JsonHttpResponseHandler)
  * Optional **persistent cookie store** , saves cookies into your app's SharedPreferences



## Examples

For inspiration and testing on device we've provided Sample Application.   
See individual samples @abstr_hyperlink   
To run Sample application, simply clone the repository and run this command, to install it on connected device 

@abstr_code_section 

## Maven

You can now integrate this library in your project via Maven. There are available two kind of builds.

**releases, maven central**

http://central.maven.org/maven @abstr_number /com/loopj/android/android-async-http/ @abstr_code_section Gradle: `com.loopj.android:android-async-http: @abstr_number . @abstr_number . @abstr_number`

**development snapshots**

https://oss.sonatype.org/content/repositories/snapshots/com/loopj/android/android-async-http/ @abstr_code_section Gradle: `com.loopj.android:android-async-http: @abstr_number . @abstr_number . @abstr_number -SNAPSHOT`

## Documentation, Features and Examples

Full details and documentation can be found on the project page here:

http://loopj.com/android-async-http/

@abstr_hyperlink 
