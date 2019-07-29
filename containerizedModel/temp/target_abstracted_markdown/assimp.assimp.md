# Open Asset Import Library (assimp)

A library to import and export various @abstr_number d-model-formats including scene-post-processing to generate missing render data.

### Current project status

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink   


APIs are provided for C and C++. There are various bindings to other languages (C#, Java, Python, Delphi, D). Assimp also runs on Android and iOS.

@abstr_hyperlink .

Additionally, assimp features various __mesh post processing tools__: normals and tangent space generation, triangulation, vertex cache locality optimization, removal of degenerate primitives and duplicate vertices, sorting by primitive type, merging of redundant materials and many more.

This is the development repo containing the latest features and bugfixes. For productive use though, we recommend one of the stable releases available from @abstr_hyperlink .

Monthly donations via Patreon:   
@abstr_hyperlink 

  


One-off donations via PayPal:   
@abstr_hyperlink 

  


Please check our Wiki as well: https://github.com/assimp/assimp/wiki

If you want to check our Model-Database, use the following repo: https://github.com/assimp/assimp-mdb

#### Supported file formats

__Importers__:

  * @abstr_number D
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * AC
  * @abstr_hyperlink 
  * ACC
  * AMJ
  * ASE
  * ASK
  * B @abstr_number D
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * CMS
  * COB
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * ENFF
  * @abstr_hyperlink 
  * @abstr_hyperlink + GLB
  * @abstr_hyperlink 
  * HMB
  * IFC-STEP
  * IRR / IRRMESH
  * @abstr_hyperlink 
  * LWS
  * LXO
  * MD @abstr_number 
  * MD @abstr_number 
  * MD @abstr_number 
  * MDC
  * MDL
  * MESH / MESH.XML
  * MOT
  * MS @abstr_number D
  * NDO
  * NFF
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * PMX
  * PRJ
  * Q @abstr_number O
  * Q @abstr_number S
  * RAW
  * SCN
  * SIB
  * SMD
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * TER
  * UC
  * VTA
  * X
  * @abstr_hyperlink 
  * XGL
  * ZGL



Additionally, some formats are supported by dependency on non-free code or external SDKs (not built by default):

  * @abstr_hyperlink (https://github.com/assimp/assimp/wiki/Cinema @abstr_number D-&-Melange) IMporting geometry + node hierarchy are currently supported



__Exporters__:

  * DAE (Collada)
  * STL
  * OBJ
  * PLY
  * X
  * @abstr_number DS
  * JSON (for WebGl, via https://github.com/acgessler/assimp @abstr_number json)
  * ASSBIN
  * STEP
  * glTF @abstr_number . @abstr_number (partial)
  * glTF @abstr_number . @abstr_number (partial)
  * @abstr_number MF ( experimental )
  * FBX ( experimental )



### Building

Take a look into the https://github.com/assimp/assimp/blob/master/Build.md file. Our build system is CMake, if you used CMake before there is a good chance you know what to do.

### Ports

  * Android
  * Python
  * @abstr_hyperlink 
  * Pascal
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink Full jvm port (current @abstr_hyperlink )
  * @abstr_hyperlink The Assimp-HAXE-port.



### Other tools

@abstr_hyperlink is a powerful @abstr_number D model viewer based on Assimp's import and export abilities.

#### Repository structure

Open Asset Import Library is implemented in C++. The directory structure looks like:
    
    
    /code       Source code
    /contrib    Third-party libraries
    /doc        Documentation (doxysource and pre-compiled docs)
    /include    Public header C and C++ header files
    /scripts    Scripts used to generate the loading code for some formats
    /port       Ports to other languages and scripts to maintain those.
    /test       Unit- and regression tests, test suite of models
    /tools      Tools (old assimp viewer, command line `assimp`)
    /samples    A small number of samples to illustrate possible
                        use cases for Assimp
    

The source code is organized in the following way:
    
    
    code/Common     The base implementation for importers and the infrastructure
    code/PostProcessing The post-processing steps
    code/<FormatName>   Implementation for import and export for the format
    

### Where to get help

For more information, visit @abstr_hyperlink . Or check out the `./doc`\- folder, which contains the official documentation in HTML format. (CHMs for Windows are included in some release packages and should be located right here in the root folder).

If the docs don't solve your problem, ask on @abstr_hyperlink . If you think you found a bug, please open an issue on Github.

For development discussions, there is also a (very low-volume) mailing list, _assimp-discussions_ @abstr_hyperlink 

Open Asset Import Library is a library to load various @abstr_number d file formats into a shared, in-memory format. It supports more than __ @abstr_number file formats__ for import and a growing selection of file formats for export.

And we also have a Gitter-channel:Gitter @abstr_hyperlink   


### Contributing

Contributions to assimp are highly appreciated. The easiest way to get involved is to submit a pull request with your changes against the main repository's `master` branch.

### License

Our license is based on the modified, __ @abstr_number -clause BSD__-License.

An _informal_ summary is: do whatever you want, but include Assimp's license text with your product - and don't sue us if our code doesn't work. Note that, unlike LGPLed code, you may link statically to Assimp. For the legal details, see the `LICENSE` file.

### Why this name

Sorry, we're germans :-), no english native speakers ...
