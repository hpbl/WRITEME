# Hipster Shop: Cloud-Native Microservices Demo Application

This project contains a @abstr_number -tier microservices application. The application is a web-based e-commerce app called **“Hipster Shop”** where users can browse items, add them to the cart, and purchase them.

**Google uses this application to demonstrate use of technologies like Kubernetes/GKE, Istio, Stackdriver, gRPC and OpenCensus**. This application works on any Kubernetes cluster (such as a local one), as well as Google Kubernetes Engine. It’s **easy to deploy with little to no configuration**.

If you’re using this demo, please **★Star** this repository to show your interest!

> 👓 **Note to Googlers:** Please fill out the form at @abstr_hyperlink if you are using this application.

## Screenshots

| Home Page | Checkout Screen | | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | | | |

## Service Architecture

**Hipster Shop** is composed of many microservices written in different languages that talk to each other over gRPC.

Find **Protocol Buffers Descriptions** at the ./pb directory.

| Service | Language | Description | | ---------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------- | | frontend | Go | Exposes an HTTP server to serve the website. Does not require signup/login and generates session IDs for all users automatically. | | cartservice | C# | Stores the items in the user's shipping cart in Redis and retrieves it. | | productcatalogservice | Go | Provides the list of products from a JSON file and ability to search products and get individual products. | | currencyservice | Node.js | Converts one money amount to another currency. Uses real values fetched from European Central Bank. It's the highest QPS service. | | paymentservice | Node.js | Charges the given credit card info (mock) with the given amount and returns a transaction ID. | | shippingservice | Go | Gives shipping cost estimates based on the shopping cart. Ships items to the given address (mock) | | emailservice | Python | Sends users an order confirmation email (mock). | | checkoutservice | Go | Retrieves user cart, prepares order and orchestrates the payment, shipping and the email notification. | | recommendationservice | Python | Recommends other products based on what's given in the cart. | | adservice | Java | Provides text ads based on given context words. | | loadgenerator | Python/Locust | Continuously sends requests imitating realistic user shopping flows to the frontend. |

## Features

  * **@abstr_hyperlink / @abstr_hyperlink :** The app is designed to run on Kubernetes (both locally on "Docker for Desktop", as well as on the cloud with GKE).
  * **@abstr_hyperlink :** Microservices use a high volume of gRPC calls to communicate to each other.
  * **@abstr_hyperlink :** Application works on Istio service mesh.
  * **@abstr_hyperlink Tracing:** Most services are instrumented using OpenCensus trace interceptors for gRPC/HTTP.
  * **@abstr_hyperlink :** Many services are instrumented with **Profiling** , **Tracing** and **Debugging**. In addition to these, using Istio enables features like Request/Response **Metrics** and **Context Graph** out of the box. When it is running out of Google Cloud, this code path remains inactive.
  * **@abstr_hyperlink :** Application is deployed to Kubernetes with a single command using Skaffold.
  * **Synthetic Load Generation:** The application demo comes with a background job that creates realistic usage patterns on the website using @abstr_hyperlink load generator.



## Installation

We offer three installation methods:

@abstr_number . **Running locally with “Docker for Desktop”** (~ @abstr_number minutes) You will build and deploy microservices images to a single-node Kubernetes cluster running on your development machine.

@abstr_number . **Running on Google Kubernetes Engine (GKE)”** (~ @abstr_number minutes) You will build, upload and deploy the container images to a Kubernetes cluster on Google Cloud.

@abstr_number . **Using pre-built container images:** (~ @abstr_number minutes, you will still need to follow one of the steps above up until `skaffold run` command). With this option, you will use pre-built container images that are available publicly, instead of building them yourself, which takes a long time).

### Option @abstr_number : Running locally with “Docker for Desktop”

> 💡 Recommended if you're planning to develop the application or giving it a try on your local cluster.

@abstr_number . Install tools to run a Kubernetes cluster locally:

  * kubectl (can be installed via `gcloud components install kubectl`)
  * Docker for Desktop (Mac/Windows): It provides Kubernetes support as @abstr_hyperlink .
  * @abstr_hyperlink (ensure version ≥v @abstr_number . @abstr_number )

@abstr_number . Launch “Docker for Desktop”. Go to Preferences:

  * choose “Enable Kubernetes”,

  * set CPUs to at least @abstr_number , and Memory to at least @abstr_number . @abstr_number GiB
  * on the "Disk" tab, set at least @abstr_number GB disk space

@abstr_number . Run `kubectl get nodes` to verify you're connected to “Kubernetes on Docker”.

@abstr_number . Run `skaffold run` (first time will be slow, it can take ~ @abstr_number minutes). This will build and deploy the application. If you need to rebuild the images automatically as you refactor the code, run `skaffold dev` command.

@abstr_number . Run `kubectl get pods` to verify the Pods are ready and running. The application frontend should be available at http://localhost: @abstr_number on your machine.




### Option @abstr_number : Running on Google Kubernetes Engine (GKE)

> 💡 Recommended if you're using Google Cloud Platform and want to try it on a realistic cluster.

@abstr_number . Install tools specified in the previous section (Docker, kubectl, skaffold)

@abstr_number . Create a Google Kubernetes Engine cluster and make sure `kubectl` is pointing to the cluster.
    
    
     @abstr_code_section 
    
     @abstr_code_section 
    
     @abstr_code_section
    

@abstr_number . Enable Google Container Registry (GCR) on your GCP project and configure the `docker` CLI to authenticate to GCR:
    
    
     @abstr_code_section 
    
     @abstr_code_section
    

@abstr_number . In the root of this repository, run `skaffold run --default-repo=gcr.io/[PROJECT_ID]`, where [PROJECT_ID] is your GCP project ID.
    
    
    This command:
    
    - builds the container images
    - pushes them to GCR
    - applies the `./kubernetes-manifests` deploying the application to
      Kubernetes.
    
    **Troubleshooting:** If you get "No space left on device" error on Google
    Cloud Shell, you can build the images on Google Cloud Build: [Enable the
    Cloud Build
    API](https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com),
    then run `skaffold run -p gcb --default-repo=gcr.io/[PROJECT_ID]` instead.
    

@abstr_number . Find the IP address of your application, then visit the application on your browser to confirm installation.
    
    
        kubectl get service frontend-external
    
    **Troubleshooting:** A Kubernetes bug (will be fixed in  @abstr_number . @abstr_number ) combined with
    a Skaffold [bug](https://github.com/GoogleContainerTools/skaffold/issues/ @abstr_number )
    causes load balancer to not to work even after getting an IP address. If you
    are seeing this, run `kubectl get service frontend-external -o=yaml | kubectl apply -f-`
    to trigger load balancer reconfiguration.
    

### Option @abstr_number : Using Pre-Built Container Images

> 💡 Recommended if you want to deploy the app faster in fewer steps to an existing cluster.

**NOTE:** If you need to create a Kubernetes cluster locally or on the cloud, follow "Option @abstr_number " or "Option @abstr_number " until you reach the `skaffold run` step.

This option offers you pre-built public container images that are easy to deploy by deploying the release manifest directly to an existing cluster.

**Prerequisite** : a running Kubernetes cluster (either local or on cloud).

@abstr_number . Clone this repository, and go to the repository directory @abstr_number . Run `kubectl apply -f ./release/kubernetes-manifests.yaml` to deploy the app. @abstr_number . Run `kubectl get pods` to see pods are in a Ready state. @abstr_number . Find the IP address of your application, then visit the application on your browser to confirm installation.
    
    
    @abstr_code_section
    

### (Optional) Deploying on a Istio-installed GKE cluster

> **Note:** you followed GKE deployment steps above, run `skaffold delete` first to delete what's deployed.

@abstr_number . Create a GKE cluster (described in "Option @abstr_number ").

@abstr_number . Use @abstr_hyperlink to install Istio to your existing GKE cluster.
    
    
    @abstr_code_section
    

> NOTE: If you need to enable `MTLS_STRICT` mode, you will need to update several manifest files:
> 
>   * `kubernetes-manifests/frontend.yaml`: delete "livenessProbe" and "readinessProbe" fields.
>   * `kubernetes-manifests/loadgenerator.yaml`: delete "initContainers" field.
> 


@abstr_number . (Optional) Enable Stackdriver Tracing/Logging with Istio Stackdriver Adapter by @abstr_hyperlink .

@abstr_number . Install the automatic sidecar injection (annotate the `default` namespace with the label):
    
    
    @abstr_code_section
    

@abstr_number . Apply the manifests in ./istio-manifests directory. (This is required only once.)
    
    
    @abstr_code_section
    

@abstr_number . Deploy the application with `skaffold run --default-repo=gcr.io/[PROJECT_ID]`.

@abstr_number . Run `kubectl get pods` to see pods are in a healthy and ready state.

@abstr_number . Find the IP address of your Istio gateway Ingress or Service, and visit the application.
    
    
    @abstr_code_section 
    
    @abstr_code_section
    

### Cleanup

If you've deployed the application with `skaffold run` command, you can run `skaffold delete` to clean up the deployed resources.

If you've deployed the application with `kubectl apply -f [...]`, you can run `kubectl delete -f [...]` with the same argument to clean up the deployed resources.

## Conferences featuring Hipster Shop

  * @abstr_hyperlink showing Stackdriver Incident Response Management
  * Google Cloud Next' @abstr_number SF 
    * @abstr_hyperlink showing GKE On-Prem
    * @abstr_hyperlink showing Stackdriver APM (Tracing, Code Search, Profiler, Google Cloud Build)
    * @abstr_hyperlink 
  * @abstr_hyperlink 



* * *

This is not an official Google project.
