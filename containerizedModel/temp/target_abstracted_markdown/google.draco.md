@abstr_image 

# News

### Version @abstr_number . @abstr_number . @abstr_number release

  * Added option to build Draco for Universal Scene Description
  * Code cleanup
  * Bug fixes



### Version @abstr_number . @abstr_number . @abstr_number release

  * Released Draco Animation code
  * Fixes for Unity
  * Various file location and name changes



### Version @abstr_number . @abstr_number . @abstr_number release

  * Added ExpertEncoder to the Javascript API 
    * Allows developers to set quantization options per attribute id
  * Bug fixes



### Version @abstr_number . @abstr_number . @abstr_number release

  * Bug fixes



### Version @abstr_number . @abstr_number . @abstr_number release

  * Fix issue with multiple attributes when skipping an attribute transform



### Version @abstr_number . @abstr_number . @abstr_number release

  * Improved kD-tree based point cloud encoding 
    * Now applicable to point clouds with any number of attributes
    * Support for all integer attribute types and quantized floating point types
  * Improved mesh compression up to @abstr_number % (on average ~ @abstr_number %) 
    * For meshes, the @abstr_number . @abstr_number . @abstr_number bitstream is fully compatible with @abstr_number . @abstr_number .x decoders
  * Improved Javascript API 
    * Added support for all signed and unsigned integer types
    * Added support for point clouds to our Javascript encoder API
  * Added support for integer properties to the PLY decoder
  * Bug fixes



### Previous releases

https://github.com/google/draco/releases

# Description

Draco is a library for compressing and decompressing @abstr_number D geometric [meshes] and [point clouds]. It is intended to improve the storage and transmission of @abstr_number D graphics.

Draco was designed and built for compression efficiency and speed. The code supports compressing points, connectivity information, texture coordinates, color information, normals, and any other generic attributes associated with geometry. With Draco, applications using @abstr_number D graphics can be significantly smaller without compromising visual fidelity. For users, this means apps can now be downloaded faster, @abstr_number D graphics in the browser can load quicker, and VR and AR scenes can now be transmitted with a fraction of the bandwidth and rendered quickly.

Draco is released as C++ source code that can be used to compress @abstr_number D graphics as well as C++ and Javascript decoders for the encoded data.

_ **Contents** _

  * Building 
    * CMake Basics
    * Mac OS X
    * Windows
    * CMake Build Configuration 
      * Debugging and Optimization
      * Googletest Integration
      * Javascript Encoder/Decoder
    * Android Studio Project Integration
    * Native Android Builds
  * Usage 
    * Command Line Applications
    * Encoding Tool
    * Encoding Point Clouds
    * Decoding Tool
    * C++ Decoder API
    * Javascript Encoder API
    * Javascript Decoder API
    * Javascript Decoder Performance
    * Metadata API
    * NPM Package
    * three.js Renderer Example
  * Support
  * License
  * References



# Building

For all platforms, you must first generate the project/make files and then compile the examples.

## CMake Basics

To generate project/make files for the default toolchain on your system, run `cmake` from a directory where you would like to generate build files, and pass it the path to your Draco repository.

~~~~~ bash $ cmake path/to/draco ~~~~~

On Windows, the above command will produce Visual Studio project files for the newest Visual Studio detected on the system. On Mac OS X and Linux systems, the above command will produce a `makefile`.

To control what types of projects are generated, add the `-G` parameter to the `cmake` command. This argument must be followed by the name of a generator. Running `cmake` with the `--help` argument will list the available generators for your system.

## Mac OS X

On Mac OS X, run the following command to generate Xcode projects:

~~~~~ bash $ cmake path/to/draco -G Xcode ~~~~~

## Windows

On a Windows box you would run the following command to generate Visual Studio @abstr_number projects:

~~~~~ bash C:\Users\nobody> cmake path/to/draco -G "Visual Studio @abstr_number @abstr_number " ~~~~~

To generate @abstr_number -bit Windows Visual Studio @abstr_number projects:

~~~~~ bash C:\Users\nobody> cmake path/to/draco -G "Visual Studio @abstr_number @abstr_number Win @abstr_number " ~~~~~

## CMake Build Configuration

## Debugging and Optimization

Unlike Visual Studio and Xcode projects, the build configuration for make builds is controlled when you run `cmake`. The following examples demonstrate various build configurations.

Omitting the build type produces makefiles that use release build flags by default:

~~~~~ bash $ cmake path/to/draco ~~~~~

A makefile using release (optimized) flags is produced like this:

~~~~~ bash $ cmake path/to/draco -DCMAKE_BUILD_TYPE=release ~~~~~

A release build with debug info can be produced as well:

~~~~~ bash $ cmake path/to/draco -DCMAKE_BUILD_TYPE=relwithdebinfo ~~~~~

And your standard debug build will be produced using:

~~~~~ bash $ cmake path/to/draco -DCMAKE_BUILD_TYPE=debug ~~~~~

To enable the use of sanitizers when the compiler in use supports them, set the sanitizer type when running CMake:

~~~~~ bash $ cmake path/to/draco -DSANITIZE=address ~~~~~

## Googletest Integration

Draco includes testing support built using Googletest. To enable Googletest unit test support the ENABLE_TESTS cmake variable must be turned on at cmake generation time:

~~~~~ bash $ cmake path/to/draco -DENABLE_TESTS=ON ~~~~~

When cmake is used as shown in the above example the Draco cmake file assumes that the Googletest source directory is a sibling of the Draco repository. To change the location to something else use the GTEST_SOURCE_DIR cmake variable:

~~~~~ bash $ cmake path/to/draco -DENABLE_TESTS=ON -DGTEST_SOURCE_DIR=path/to/googletest ~~~~~

To run the tests just execute `draco_tests` from your toolchain's build output directory.

## Javascript Encoder/Decoder

The javascript encoder and decoder can be built using the existing cmake build file by passing the path the Emscripten's cmake toolchain file at cmake generation time in the CMAKE_TOOLCHAIN_FILE variable. In addition, the EMSCRIPTEN environment variable must be set to the local path of the parent directory of the Emscripten tools directory.

~~~~~ bash

# Make the path to emscripten available to cmake.

$ export EMSCRIPTEN=/path/to/emscripten/tools/parent

# Emscripten.cmake can be found within your Emscripten installation directory,

# it should be the subdir: cmake/Modules/Platform/Emscripten.cmake

$ cmake path/to/draco -DCMAKE_TOOLCHAIN_FILE=/path/to/Emscripten.cmake

# Build the Javascript encoder and decoder.

$ make ~~~~~

## WebAssembly Decoder

The WebAssembly decoder can be built using the existing cmake build file by passing the path the Emscripten's cmake toolchain file at cmake generation time in the CMAKE_TOOLCHAIN_FILE variable and enabling the WASM build option. In addition, the EMSCRIPTEN environment variable must be set to the local path of the parent directory of the Emscripten tools directory.

Make sure to have the correct version of Emscripten installed for WebAssembly builds. See https://developer.mozilla.org/en-US/docs/WebAssembly.

~~~~~ bash

# Make the path to emscripten available to cmake.

$ export EMSCRIPTEN=/path/to/emscripten/tools/parent

# Emscripten.cmake can be found within your Emscripten installation directory,

# it should be the subdir: cmake/Modules/Platform/Emscripten.cmake

$ cmake path/to/draco -DCMAKE_TOOLCHAIN_FILE=/path/to/Emscripten.cmake -DENABLE_WASM=ON

# Build the WebAssembly decoder.

$ make

# Run the Javascript wrapper through Closure.

$ java -jar closure.jar --compilation_level SIMPLE --js draco_decoder.js --js_output_file draco_wasm_wrapper.js

~~~~~

## WebAssembly Mesh Only Decoder

~~~~~ bash

# cmake command line for mesh only WebAssembly decoder.

$ cmake path/to/draco -DCMAKE_TOOLCHAIN_FILE=/path/to/Emscripten.cmake -DENABLE_WASM=ON -DENABLE_POINT_CLOUD_COMPRESSION=OFF

~~~~~

## WebAssembly Point Cloud Only Decoder

~~~~~ bash

# cmake command line for point cloud only WebAssembly decoder.

$ cmake path/to/draco -DCMAKE_TOOLCHAIN_FILE=/path/to/Emscripten.cmake -DENABLE_WASM=ON -DENABLE_MESH_COMPRESSION=OFF

~~~~~

## Android Studio Project Integration

To include Draco in an existing or new Android Studio project, reference it from the `cmake` file of an existing native project that has a minimum SDK version of @abstr_number or higher. The project must support C++ @abstr_number . To add Draco to your project:

@abstr_number . Add the following somewhere within the `CMakeLists.txt` for your project before the `add_library()` for your project's native-lib:
    
    
     ~~~~~ cmake
     # Note "/path/to/draco" must be changed to the path where you have cloned
     # the Draco sources.
    
     add_subdirectory(/path/to/draco
                      ${CMAKE_BINARY_DIR}/draco_build)
     include_directories("${CMAKE_BINARY_DIR}" /path/to/draco)
     ~~~~~
    

@abstr_number . Add the library target "draco" to the `target_link_libraries()` call for your project's native-lib. The `target_link_libraries()` call for an empty activity native project looks like this after the addition of Draco:
    
    
     ~~~~~ cmake
     target_link_libraries( # Specifies the target library.
                            native-lib
    
                            # Tells cmake this build depends on libdraco.
                            draco
    
                            # Links the target library to the log library
                            # included in the NDK.
                            ${log-lib} )
     ~~~~~
    

@abstr_number . Add macro to build.gradle for the features you need: ~~~~~ cmake android { ... defaultConfig { ... externalNativeBuild { cmake { cppFlags "-std=c++ @abstr_number " arguments "-DANDROID_STL=c++_shared" } } } externalNativeBuild { cmake { path "CMakeLists.txt" } } }

## Native Android Builds

It's sometimes useful to build Draco command line tools and run them directly on Android devices via adb.

~~~~~ bash

# All targets require CMAKE_ANDROID_NDK. It must be set in the environment.

$ export CMAKE_ANDROID_NDK=path/to/ndk

# arm

$ cmake path/to/draco -DCMAKE_TOOLCHAIN_FILE=path/to/draco/cmake/toolchains/armv @abstr_number -android-ndk-libcpp.cmake $ make

# arm @abstr_number

$ cmake path/to/draco -DCMAKE_TOOLCHAIN_FILE=path/to/draco/cmake/toolchains/arm @abstr_number -android-ndk-libcpp.cmake $ make

# x @abstr_number

$ cmake path/to/draco -DCMAKE_TOOLCHAIN_FILE=path/to/draco/cmake/toolchains/x @abstr_number -android-ndk-libcpp.cmake $ make

# x @abstr_number _ @abstr_number

$ cmake path/to/draco -DCMAKE_TOOLCHAIN_FILE=path/to/draco/cmake/toolchains/x @abstr_number _ @abstr_number -android-ndk-libcpp.cmake $ make ~~~~~

After building the tools they can be moved to an android device via the use of `adb push`, and then run within an `adb shell` instance.

# Usage

## Command Line Applications

The default target created from the build files will be the `draco_encoder` and `draco_decoder` command line applications. For both applications, if you run them without any arguments or `-h`, the applications will output usage and options.

## Encoding Tool

`draco_encoder` will read OBJ or PLY files as input, and output Draco-encoded files. We have included Stanford's [Bunny] mesh for testing. The basic command line looks like this:

~~~~~ bash ./draco_encoder -i testdata/bun_zipper.ply -o out.drc ~~~~~

A value of `@abstr_number` for the quantization parameter will not perform any quantization on the specified attribute. Any value other than `@abstr_number` will quantize the input values for the specified attribute to that number of bits. For example:

~~~~~ bash ./draco_encoder -i testdata/bun_zipper.ply -o out.drc -qp @abstr_number ~~~~~

will quantize the positions to @abstr_number bits (default for the position coordinates).

In general, the more you quantize your attributes the better compression rate you will get. It is up to your project to decide how much deviation it will tolerate. In general, most projects can set quantization values of about `@abstr_number` without any noticeable difference in quality.

The compression level (`-cl`) parameter turns on/off different compression features.

~~~~~ bash ./draco_encoder -i testdata/bun_zipper.ply -o out.drc -cl @abstr_number ~~~~~

In general, the highest setting, `@abstr_number`, will have the most compression but worst decompression speed. `@abstr_number` will have the least compression, but best decompression speed. The default setting is `@abstr_number`.

## Encoding Point Clouds

You can encode point cloud data with `draco_encoder` by specifying the `-point_cloud` parameter. If you specify the `-point_cloud` parameter with a mesh input file, `draco_encoder` will ignore the connectivity data and encode the positions from the mesh file.

~~~~~ bash ./draco_encoder -point_cloud -i testdata/bun_zipper.ply -o out.drc ~~~~~

This command line will encode the mesh input as a point cloud, even though the input might not produce compression that is representative of other point clouds. Specifically, one can expect much better compression rates for larger and denser point clouds.

## Decoding Tool

`draco_decoder` will read Draco files as input, and output OBJ or PLY files. The basic command line looks like this:

~~~~~ bash ./draco_decoder -i in.drc -o out.obj ~~~~~

## C++ Decoder API

If you'd like to add decoding to your applications you will need to include the `draco_dec` library. In order to use the Draco decoder you need to initialize a `DecoderBuffer` with the compressed data. Then call `DecodeMeshFromBuffer()` to return a decoded mesh object or call `DecodePointCloudFromBuffer()` to return a decoded `PointCloud` object. For example:

~~~~~ cpp draco::DecoderBuffer buffer; buffer.Init(data.data(), data.size());

const draco::EncodedGeometryType geom_type = draco::GetEncodedGeometryType(&buffer); if (geom_type == draco::TRIANGULAR_MESH) { unique_ptr mesh = draco::DecodeMeshFromBuffer(&buffer); } else if (geom_type == draco::POINT_CLOUD) { unique_ptr pc = draco::DecodePointCloudFromBuffer(&buffer); } ~~~~~

Please see src/draco/mesh/mesh.h for the full `Mesh` class interface and src/draco/point_cloud/point_cloud.h for the full `PointCloud` class interface.

## Javascript Encoder API

The Javascript encoder is located in `javascript/draco_encoder.js`. The encoder API can be used to compress mesh and point cloud. In order to use the encoder, you need to first create an instance of `DracoEncoderModule`. Then use this instance to create `MeshBuilder` and `Encoder` objects. `MeshBuilder` is used to construct a mesh from geometry data that could be later compressed by `Encoder`. First create a mesh object using `new encoderModule.Mesh()` . Then, use `AddFacesToMesh()` to add indices to the mesh and use `AddFloatAttributeToMesh()` to add attribute data to the mesh, e.g. position, normal, color and texture coordinates. After a mesh is constructed, you could then use `EncodeMeshToDracoBuffer()` to compress the mesh. For example:

~~~~~ js const mesh = { indices : new Uint @abstr_number Array(indices), vertices : new Float @abstr_number Array(vertices), normals : new Float @abstr_number Array(normals) };

const encoderModule = DracoEncoderModule(); const encoder = new encoderModule.Encoder(); const meshBuilder = new encoderModule.MeshBuilder(); const dracoMesh = new encoderModule.Mesh();

const numFaces = mesh.indices.length / @abstr_number ; const numPoints = mesh.vertices.length; meshBuilder.AddFacesToMesh(dracoMesh, numFaces, mesh.indices);

meshBuilder.AddFloatAttributeToMesh(dracoMesh, encoderModule.POSITION, numPoints, @abstr_number , mesh.vertices); if (mesh.hasOwnProperty('normals')) { meshBuilder.AddFloatAttributeToMesh( dracoMesh, encoderModule.NORMAL, numPoints, @abstr_number , mesh.normals); } if (mesh.hasOwnProperty('colors')) { meshBuilder.AddFloatAttributeToMesh( dracoMesh, encoderModule.COLOR, numPoints, @abstr_number , mesh.colors); } if (mesh.hasOwnProperty('texcoords')) { meshBuilder.AddFloatAttributeToMesh( dracoMesh, encoderModule.TEX_COORD, numPoints, @abstr_number , mesh.texcoords); }

if (method === "edgebreaker") { encoder.SetEncodingMethod(encoderModule.MESH_EDGEBREAKER_ENCODING); } else if (method === "sequential") { encoder.SetEncodingMethod(encoderModule.MESH_SEQUENTIAL_ENCODING); }

const encodedData = new encoderModule.DracoInt @abstr_number Array(); // Use default encoding setting. const encodedLen = encoder.EncodeMeshToDracoBuffer(dracoMesh, encodedData); encoderModule.destroy(dracoMesh); encoderModule.destroy(encoder); encoderModule.destroy(meshBuilder);

~~~~~ Please see src/draco/javascript/emscripten/draco_web_encoder.idl for the full API.

## Javascript Decoder API

The Javascript decoder is located in javascript/draco_decoder.js. The Javascript decoder can decode mesh and point cloud. In order to use the decoder, you must first create an instance of `DracoDecoderModule`. The instance is then used to create `DecoderBuffer` and `Decoder` objects. Set the encoded data in the `DecoderBuffer`. Then call `GetEncodedGeometryType()` to identify the type of geometry, e.g. mesh or point cloud. Then call either `DecodeBufferToMesh()` or `DecodeBufferToPointCloud()`, which will return a Mesh object or a point cloud. For example:

~~~~~ js // Create the Draco decoder. const decoderModule = DracoDecoderModule(); const buffer = new decoderModule.DecoderBuffer(); buffer.Init(byteArray, byteArray.length);

// Create a buffer to hold the encoded data. const decoder = new decoderModule.Decoder(); const geometryType = decoder.GetEncodedGeometryType(buffer);

// Decode the encoded geometry. let outputGeometry; let status; if (geometryType == decoderModule.TRIANGULAR_MESH) { outputGeometry = new decoderModule.Mesh(); status = decoder.DecodeBufferToMesh(buffer, outputGeometry); } else { outputGeometry = new decoderModule.PointCloud(); status = decoder.DecodeBufferToPointCloud(buffer, outputGeometry); }

// You must explicitly delete objects created from the DracoDecoderModule // or Decoder. decoderModule.destroy(outputGeometry); decoderModule.destroy(decoder); decoderModule.destroy(buffer); ~~~~~

Please see src/draco/javascript/emscripten/draco_web_decoder.idl for the full API.

## Javascript Decoder Performance

The Javascript decoder is built with dynamic memory. This will let the decoder work with all of the compressed data. But this option is not the fastest. Pre-allocating the memory sees about a @abstr_number x decoder speed improvement. If you know all of your project's memory requirements, you can turn on static memory by changing `CMakeLists.txt` accordingly.

## Metadata API

Starting from v @abstr_number . @abstr_number , Draco provides metadata functionality for encoding data other than geometry. It could be used to encode any custom data along with the geometry. For example, we can enable metadata functionality to encode the name of attributes, name of sub-objects and customized information. For one mesh and point cloud, it can have one top-level geometry metadata class. The top-level metadata then can have hierarchical metadata. Other than that, the top-level metadata can have metadata for each attribute which is called attribute metadata. The attribute metadata should be initialized with the correspondent attribute id within the mesh. The metadata API is provided both in C++ and Javascript. For example, to add metadata in C++:

~~~~~ cpp draco::PointCloud pc; // Add metadata for the geometry. std::unique_ptr metadata = std::unique_ptr(new draco::GeometryMetadata()); metadata->AddEntryString("description", "This is an example."); pc.AddMetadata(std::move(metadata));

// Add metadata for attributes. draco::GeometryAttribute pos_att; pos_att.Init(draco::GeometryAttribute::POSITION, nullptr, @abstr_number , draco::DT_FLOAT @abstr_number , false, @abstr_number , @abstr_number ); const uint @abstr_number _t pos_att_id = pc.AddAttribute(pos_att, false, @abstr_number );

std::unique_ptr pos_metadata = std::unique_ptr( new draco::AttributeMetadata(pos_att_id)); pos_metadata->AddEntryString("name", "position");

// Directly add attribute metadata to geometry. // You can do this without explicitly add |GeometryMetadata| to mesh. pc.AddAttributeMetadata(pos_att_id, std::move(pos_metadata)); ~~~~~

To read metadata from a geometry in C++:

~~~~~ cpp // Get metadata for the geometry. const draco::GeometryMetadata *pc_metadata = pc.GetMetadata();

// Request metadata for a specific attribute. const draco::AttributeMetadata *requested_pos_metadata = pc.GetAttributeMetadataByStringEntry("name", "position"); ~~~~~

Please see src/draco/metadata and src/draco/point_cloud for the full API.

## NPM Package

Draco NPM NodeJS package is located in javascript/npm/draco @abstr_number d. Please see the doc in the folder for detailed usage.

## three.js Renderer Example

Here's an [example] of a geometric compressed with Draco loaded via a Javascript decoder using the `three.js` renderer.

Please see the javascript/example/README.md file for more information.

# Support

For questions/comments please email 

If you have found an error in this library, please file an issue at @abstr_hyperlink 

Patches are encouraged, and may be submitted by forking this project and submitting a pull request through GitHub. See [CONTRIBUTING] for more detail.

# License

Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

# References

Bunny model from Stanford's graphic department 
