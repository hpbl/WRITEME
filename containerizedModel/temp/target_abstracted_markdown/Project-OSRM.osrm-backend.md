## Open Source Routing Machine

| Linux / macOS | Windows | Code Coverage | | ------------- | ------- | ------------- | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

High performance routing engine written in C++ @abstr_number designed to run on OpenStreetMap data.

The following services are available via HTTP API, C++ library interface and NodeJs wrapper: \- Nearest - Snaps coordinates to the street network and returns the nearest matches \- Route - Finds the fastest route between coordinates \- Table - Computes the duration or distances of the fastest route between all pairs of supplied coordinates \- Match - Snaps noisy GPS traces to the road network in the most plausible way \- Trip - Solves the Traveling Salesman Problem using a greedy heuristic \- Tile - Generates Mapbox Vector Tiles with internal routing metadata

To quickly try OSRM use our @abstr_hyperlink which comes with both the backend and a frontend on top.

For a quick introduction about how the road network is represented in OpenStreetMap and how to map specific road network features have a look at @abstr_hyperlink .

Related @abstr_hyperlink repositories: \- @abstr_hyperlink - User-facing frontend with map. The demo server runs this on top of the backend \- @abstr_hyperlink - Text instructions from OSRM route response \- @abstr_hyperlink - Ready to use Docker images

## Documentation

### Full documentation

  * @abstr_hyperlink 
  * osrm-routed HTTP API documentation
  * libosrm API documentation



## Contact

  * IRC: `irc.oftc.net`, channel: `#osrm` ( @abstr_hyperlink )
  * Mailinglist: `https://lists.openstreetmap.org/listinfo/osrm-talk`



## Quick Start

The easiest and quickest way to setup your own routing engine is to use Docker images we provide.

There are two pre-processing pipelines available: \- Contraction Hierarchies (CH) \- Multi-Level Dijkstra (MLD)

we recommend using MLD by default except for special use-cases such as very large distance matrices where CH is still a better fit for the time being. In the following we explain the MLD pipeline. If you want to use the CH pipeline instead replace `osrm-partition` and `osrm-customize` with a single `osrm-contract` and change the algorithm option for `osrm-routed` to `--algorithm ch`.

### Using Docker

We base our Docker images ( @abstr_hyperlink , @abstr_hyperlink ) on Debian and make sure they are as lightweight as possible.

Download OpenStreetMap extracts for example from @abstr_hyperlink 
    
    
    wget http://download.geofabrik.de/europe/germany/berlin-latest.osm.pbf
    

Pre-process the extract with the car profile and start a routing engine HTTP server on port @abstr_number 
    
    
    docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-extract -p /opt/car.lua /data/berlin-latest.osm.pbf
    

The flag `-v "${PWD}:/data"` creates the directory `/data` inside the docker container and makes the current working directory `"${PWD}"` available there. The file `/data/berlin-latest.osm.pbf` inside the container is referring to `"${PWD}/berlin-latest.osm.pbf"` on the host.
    
    
    docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-partition /data/berlin-latest.osrm
    docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-customize /data/berlin-latest.osrm
    

Note that `berlin-latest.osrm` has a different file extension. 
    
    
    docker run -t -i -p  @abstr_number : @abstr_number  -v "${PWD}:/data" osrm/osrm-backend osrm-routed --algorithm mld /data/berlin-latest.osrm
    

Make requests against the HTTP server
    
    
    curl "http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /route/v @abstr_number /driving/ @abstr_number . @abstr_number , @abstr_number . @abstr_number ; @abstr_number . @abstr_number , @abstr_number . @abstr_number ?steps=true"
    

Optionally start a user-friendly frontend on port @abstr_number , and open it up in your browser
    
    
    docker run -p  @abstr_number : @abstr_number  osrm/osrm-frontend
    xdg-open 'http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number '
    

In case Docker complains about not being able to connect to the Docker daemon make sure you are in the `docker` group.
    
    
    sudo usermod -aG docker $USER
    

After adding yourself to the `docker` group make sure to log out and back in again with your terminal.

We support the following images on Docker Cloud:

Name | Description \-----|------ `latest` | `master` compiled with release flag `latest-assertions` | `master` compiled with with release flag, assertions enabled and debug symbols `latest-debug` | `master` compiled with debug flag `<tag>` | specific tag compiled with release flag `<tag>-debug` | specific tag compiled with debug flag

### Building from Source

The following targets Ubuntu @abstr_number . @abstr_number . For instructions how to build on different distributions, macOS or Windows see our @abstr_hyperlink .

Install dependencies

@abstr_code_section 

Compile and install OSRM binaries

@abstr_code_section 

### Request Against the Demo Server

Read the @abstr_hyperlink .

Simple query with instructions and alternatives on Berlin:

@abstr_code_section 

### Using the Node.js Bindings

The Node.js bindings provide read-only access to the routing engine. We provide API documentation and examples here.

You will need a modern `libstdc++` toolchain (`>= GLIBCXX_ @abstr_number . @abstr_number . @abstr_number`) for binary compatibility if you want to use the pre-built binaries. For older Ubuntu systems you can upgrade your standard library for example with:

@abstr_code_section 

You can install the Node.js bindings via `npm install osrm` or from this repository either via
    
    
    npm install
    

which will check and use pre-built binaries if they're available for this release and your Node version, or via
    
    
    npm install --build-from-source
    

to always force building the Node.js bindings from source.

For usage details have a look these API docs. 

An exemplary implementation by a @abstr_number rd party with Docker and Node.js can be found @abstr_hyperlink .

## References in publications

When using the code in a (scientific) publication, please cite

@abstr_code_section 
