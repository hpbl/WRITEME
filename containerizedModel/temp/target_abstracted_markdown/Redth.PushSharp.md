# PushSharp v @abstr_number . @abstr_number 

PushSharp is a server-side library for sending Push Notifications to iOS/OSX (APNS), Android/Chrome (GCM/FCM), Windows/Windows Phone, Amazon (ADM) and Blackberry devices!

PushSharp v @abstr_number . @abstr_number + is a complete rewrite of the original library, aimed at taking advantage of things like async/await, HttpClient, and generally a better infrastructure using lessons learned from the old code.

PushSharp will now follow @abstr_hyperlink versioning, so major version numbers will go up as there are any breaking api changes. 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

  * Read more on my blog http://redth.codes/pushsharp- @abstr_number - @abstr_number -the-push-awakens/
  * Join the @abstr_hyperlink with questions/feedback



* * *

## Sample Usage

The API in v @abstr_number .x+ series is quite different from @abstr_number .x. The goal is to simplify things and focus on the core functionality of the library, leaving things like constructing valid payloads up to the developer.

### APNS Sample Usage

Here is an example of how you would send an APNS notification:

@abstr_code_section 

#### Apple Notification Payload

More information about the payload sent in the ApnsNotification object can be found @abstr_hyperlink .

#### Apple APNS Feedback Service

For APNS you will also need to occasionally check with the feedback service to see if there are any expired device tokens you should no longer send notifications to. Here's an example of how you would do that:

@abstr_code_section 

### GCM/FCM Sample Usage

Here is how you would send a GCM/FCM Notification:

@abstr_code_section 

#### Components of a GCM/FCM Notification

GCM notifications are much more customizable than Apple Push Notifications. More information about the messaging concepts and options can be found @abstr_hyperlink .

### WNS Sample Usage

Here's how to send WNS Notifications:

@abstr_code_section 

## How to Migrate from PushSharp @abstr_number .x to @abstr_number .x and higher

Please see this Wiki page for more information: https://github.com/Redth/PushSharp/wiki/Migrating-from-PushSharp- @abstr_number .x-to- @abstr_number .x

## Roadmap

  * **APNS - Apple Push Notification Service**
    * Finish HTTP/ @abstr_number support (currently in another branch)
  * **GCM - Google Cloud Messaging**
    * XMPP transport still under development
  * **Other**
    * More NUnit tests to be written, with a test GCM Server, and eventually Test servers for other platforms
    * New Xamarin Client samples (how to setup each platform as a push client) will be built and live in a separate repository to be less confusing



## License

Copyright @abstr_number - @abstr_number Jonathan Dick

Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
    
    
    http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number
    

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
