# Google Cloud Node.js Client

> Node.js idiomatic client for @abstr_hyperlink services.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

  * @abstr_hyperlink 
  * @abstr_hyperlink 



This client supports the following Google Cloud Platform services:

  * Google BigQuery
  * Google Cloud Datastore
  * Google Cloud DNS
  * Google Cloud Pub/Sub
  * Google Cloud Storage
  * Google Compute Engine
  * Google Prediction API
  * Google Translate API
  * Google Cloud Logging (Beta)
  * Google Cloud Resource Manager (Beta)
  * Google Cloud Vision (Beta)
  * Google Cloud Search (Alpha)



If you need support for other Google APIs, check out the @abstr_hyperlink .

## Quick Start

@abstr_code_section 

## Example Applications

  * @abstr_hyperlink - A sample and @abstr_hyperlink that demonstrates how to build a complete web application using Cloud Datastore, Cloud Storage, and Cloud Pub/Sub and deploy it to Google App Engine or Google Compute Engine.
  * @abstr_hyperlink - A TodoMVC backend using gcloud-node and Datastore.
  * @abstr_hyperlink - Easily lookup an npm package's GitHub repo using gcloud-node and Google App Engine.
  * @abstr_hyperlink - Use Datastore as a simple key-value store.
  * @abstr_hyperlink - Cloud-based web sample editor. Part of the @abstr_hyperlink family of products.



## Authentication

With `gcloud-node` it's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Google Cloud services.

### On Google Compute Engine

If you are running this client on Google Compute Engine, we handle authentication for you with no configuration. You just need to make sure that when you @abstr_hyperlink , you add the correct scopes for the APIs you want to access.

@abstr_code_section 

### Elsewhere

If you are not running this client on Google Compute Engine, you need a Google Developers service account. To create a service account:

@abstr_number . Visit the @abstr_hyperlink . @abstr_number . Create a new project or click on an existing project. @abstr_number . Navigate to **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services): * Google Cloud Datastore API * Google Cloud Storage * Google Cloud Storage JSON API @abstr_number . Navigate to **APIs & auth** > **Credentials** and then: * If you want to use a new service account, click on **Create new Client ID** and select **Service account**. After the account is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests. * If you want to generate a new key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

@abstr_code_section 

You can also set auth on a per-API-instance basis. The examples below show you how.

## Google BigQuery

  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Preview

@abstr_code_section 

## Google Cloud Datastore

  * @abstr_hyperlink 
  * @abstr_hyperlink 



_Follow the @abstr_hyperlink to use the Google Cloud Datastore API with your project._

#### Preview

@abstr_code_section 

## Google Cloud DNS

  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Preview

@abstr_code_section 

## Google Cloud Pub/Sub

  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Preview

@abstr_code_section 

## Google Cloud Storage

  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Preview

@abstr_code_section 

## Google Compute Engine

  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Preview

@abstr_code_section 

## Google Prediction API

  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Preview

@abstr_code_section 

## Google Translate API

  * @abstr_hyperlink 
  * @abstr_hyperlink 



**An API key is required for Translate.** See @abstr_hyperlink .

#### Preview

@abstr_code_section 

## Google Cloud Logging (Beta)

> **This is a Beta release of Google Cloud Logging.** This API is not covered by any SLA or deprecation policy and may be subject to backward-incompatible changes.

  * @abstr_hyperlink 
  * @abstr_hyperlink 

@abstr_code_section 




## Google Cloud Resource Manager (Beta)

> **This is a Beta release of Google Cloud Resource Manager.** This feature is not covered by any SLA or deprecation policy and may be subject to backward-incompatible changes.

  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Preview

@abstr_code_section 

## Google Cloud Vision (Beta)

> **This is a Beta release of Google Cloud Vision.** This feature is not covered by any SLA or deprecation policy and may be subject to backward-incompatible changes.

  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Preview

@abstr_code_section 

## Google Cloud Search (Alpha)

> **This is an Alpha release of Google Cloud Search.** This feature is not covered by any SLA or deprecation policy and may be subject to backward-incompatible changes.

  * @abstr_hyperlink 
  * @abstr_hyperlink - _If you are not a tester, this documentation is unavailable._



#### Preview

@abstr_code_section 

## Contributing

Contributions to this library are always welcome and highly encouraged.

See CONTRIBUTING for more information on how to get started.

## License

Apache @abstr_number . @abstr_number - See COPYING for more information.
