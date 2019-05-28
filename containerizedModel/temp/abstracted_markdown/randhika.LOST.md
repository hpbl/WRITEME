# LOST

@abstr_hyperlink 

Location Open Source Tracker for Android

## Usage

LOST is a drop-in replacement for Google Play Services @abstr_hyperlink that makes calls directly to the @abstr_hyperlink .

This project seeks to provide an open source alternative to the @abstr_hyperlink that depends only on the Android SDK. Operations supported at this time include getting the last known location and registering for location updates.

**Connecting to the LOST API Client**

When using LOST, @abstr_hyperlink is replaced by @abstr_hyperlink . Connecting to LOST is even easier since there are no @abstr_hyperlink or @abstr_hyperlink objects to manage.

@abstr_code_section 

LOST instantly connects to the @abstr_hyperlink and can immediately retrieve that last known location or begin sending location updates.

**Getting the Last Known Location**

Once connected you can request the last known location. The actual logic to determine the best most recent location is based this classic @abstr_hyperlink .

@abstr_code_section 

**Requesting Location Updates**

LOST also provides the ability to request ongoing location updates. You can specify the update interval, minimum displacement, and priority. The priority determines which location providers will be activated.

@abstr_code_section 

Currently location updates can only be requested with a @abstr_hyperlink object. In the future we are planning to add location updates via a @abstr_hyperlink as well.

**Mock Locations**

With LOST you can mock not just individual locations but also entire routes. By loading a @abstr_hyperlink onto the device you can configure LOST to replay locations from the trace file including latitude, longitude, speed, and bearing.

**Mocking a single location**

To mock a single location with LOST you must first enable mock mode. Then you simply create a mock location object and pass it to the API.

@abstr_code_section 

The mock location object you set will be immediately returned to all registered listeners and will be returned the next time `getLastLocation()` is called.

**Mocking an entire route**

To mock an entire route you must first transfer a @abstr_hyperlink to the device using @abstr_hyperlink . Sample GPX traces can be found on the @abstr_hyperlink for OpenStreetMap. Once the trace file is loaded on the device you can tell LOST to replay the locations in the trace at the requested update interval.

@abstr_code_section 

For more in-depth examples, please refer to the @abstr_hyperlink .

## Install

**Download Jar**

Download the @abstr_hyperlink .

**Maven**

Include dependency using Maven.

@abstr_code_section 

**Gradle**

Include dependency using Gradle.

@abstr_code_section 
