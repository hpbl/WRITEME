# hackathon- @abstr_number - @abstr_number

## Running

#### Locally

  * To run: `service/bin/www`
  * http://localhost: @abstr_number /hotels
  * You must set API_KEY environment variable to your Google API key.
  * It should pick up proxy settings from http_proxy



#### In GCC

  * Latest version not running there yet
  * A stub is running here: http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /



## Docker Notes

@abstr_number . `scripts/buildit`: Builds the docker image @abstr_number . `docker images`: list images @abstr_number . `docker rmi <image id>`: remove image @abstr_number . `docker run -p @abstr_number : @abstr_number -d <image id>`: Run image mapping private port @abstr_number to public (external) port @abstr_number @abstr_number . `docker ps -a`: show all running containers

#### Reference Docs

  * @abstr_hyperlink 



## Google Cloud SDK Notes

@abstr_number . `google-cloud-sdk/bin/gcloud init`: initialize SDK

#### Reference Docs

  * @abstr_hyperlink 



## Kubernetes Notes

@abstr_number . `scripts/pushit`: Tags and pushes the docker image to my docker registry in GC. If it hangs and can't ping the repo server then likely it's a proxy configuration issue with docker (on the Mac I had to set proxies using Docker preferences). @abstr_number . To deploy, go to your @abstr_hyperlink , click on Conainer Clusters, the click "Connect" for your cluster and follow the instructions to start a local admin dashboard for your cluster @abstr_number . Then you can go to @abstr_hyperlink 
    
    
    Click Pods then Create (in the upper right). To get your image URL you will need to go to the Container Engine Console click on the image in your Registry and click "Show pull command". It will look something like:  us.gcr.io/ecstatic-magpie- @abstr_number /server.js:v @abstr_number . And don't forget to mark the service as external and map your incomming port (Port) to the port the container's port (Target Port)
    
    After provisioning click on Services and you should see an External endpoints
    

#### Reference Docs

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Google Places API

@abstr_number . @abstr_hyperlink you can do so using your projects @abstr_hyperlink @abstr_number . Put key in request. Request looks like: 
    
    
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=- @abstr_number . @abstr_number , @abstr_number . @abstr_number &type=lodging&rankby=distance&key=YOUR_API_KEY`
    

#### Reference Docs

  * @abstr_hyperlink 
  * @abstr_hyperlink : Github repo for Node.js client 
    * We're not using this due to proxy issues
  * @abstr_hyperlink 


