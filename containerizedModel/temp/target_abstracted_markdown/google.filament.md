# Filament

@abstr_image @abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_image @abstr_hyperlink 

Filament is a real-time physically based rendering engine for Android, iOS, Linux, macOS, Windows, and WebGL. It is designed to be as small as possible and as efficient as possible on Android.

Filament is currently used in the @abstr_hyperlink library both at runtime on Android devices and as the renderer inside the Android Studio plugin.

## Download

@abstr_hyperlink to access stable builds.

Make sure you always use tools from the same release as the runtime library. This is particularly important for `matc` (material compiler).

If you prefer to live on the edge, you can download a continuous build by clicking one of the build badges above.

## Documentation

  * @abstr_hyperlink , an in-depth explanation of real-time physically based rendering, the graphics capabilities and implementation of Filament. This document explains the math and reasoning behind most of our decisions. This document is a good introduction to PBR for graphics programmers.
  * @abstr_hyperlink , the full reference documentation for our material system. This document explains our different material models, how to use the material compiler `matc` and how to write custom materials.
  * @abstr_hyperlink , a reference sheet for the standard material model.



## Samples

Here are a few sample materials rendered with Filament:

@abstr_image @abstr_image @abstr_image @abstr_image @abstr_image @abstr_image @abstr_image 

## Applications

Here are a few screenshots of applications that use Filament in production:

### Google Maps AR Navigation

@abstr_image 

### Google Search @abstr_number D/AR Viewer on Android

@abstr_image 

## Features

### APIs

  * Native C++ API for Android, iOS, Linux, macOS and Windows
  * Java/JNI API for Android, Linux, macOS and Windows
  * JavaScript API



### Backends

  * OpenGL @abstr_number . @abstr_number + for Linux, macOS and Windows
  * OpenGL ES @abstr_number . @abstr_number + for Android and iOS
  * Metal for macOS and iOS
  * Vulkan @abstr_number . @abstr_number for Android, Linux, macOS and iOS (with MoltenVk), and Windows
  * WebGL @abstr_number . @abstr_number for all platforms



### Rendering

  * Clustered forward renderer
  * Cook-Torrance microfacet specular BRDF
  * Lambertian diffuse BRDF
  * HDR/linear lighting
  * Metallic workflow
  * Clear coat
  * Anisotropic lighting
  * Approximated translucent (subsurface) materials
  * Cloth shading
  * Normal mapping & ambient occlusion mapping
  * Image-based lighting
  * Physically-based camera (shutter speed, sensitivity and aperture)
  * Physical light units
  * Point light, spot light and directional light
  * SSAO
  * ACES-like tone-mapping
  * Temporal dithering
  * FXAA, MSAA and specular anti-aliasing
  * Dynamic resolution (on Android and iOS)



### Future

Many other features have been either prototyped or planned:

  * IES light profiles/cookies
  * Area lights
  * Fog
  * Color grading
  * Bloom
  * TAA
  * etc.



## Directory structure

This repository not only contains the core Filament engine, but also its supporting libraries and tools.

  * `android`: Android libraries and projects 
    * `build`: Custom Gradle tasks for Android builds
    * `filamat-android`: Filament material generation library (AAR) for Android
    * `filament-android`: Filament library (AAR) for Android
    * `samples`: Android-specific Filament samples
  * `art`: Source for various artworks (logos, PDF manuals, etc.)
  * `assets`: @abstr_number D assets to use with sample applications
  * `build`: CMake build scripts
  * `docs`: Documentation 
    * `math`: Mathematica notebooks used to explore BRDFs, equations, etc.
  * `filament`: Filament rendering engine (minimal dependencies)
  * `ide`: Configuration files for IDEs (CLion, etc.)
  * `ios`: Sample projects for iOS
  * `java`: Java bindings for Filament libraries
  * `libs`: Libraries 
    * `bluegl`: OpenGL bindings for macOS, Linux and Windows
    * `bluevk`: Vulkan bindings for macOS, Linux, Windows and Android
    * `filabridge`: Library shared by the Filament engine and host tools
    * `filaflat`: Serialization/deserialization library used for materials
    * `filagui`: Helper library for @abstr_hyperlink 
    * `filamat`: Material generation library
    * `filameshio`: Tiny filamesh parsing library (see also `tools/filamesh`)
    * `geometry`: Mesh-related utilities
    * `gltfio`: Loader and optional pipeline for glTF @abstr_number . @abstr_number 
    * `ibl`: IBL generation tools
    * `image`: Image filtering and simple transforms
    * `imageio`: Image file reading / writing, only intended for internal use
    * `math`: Math library
    * `rays`: Simple path tracer used for baking ambient occlusion, etc.
    * `utils`: Utility library (threads, memory, data structures, etc.)
  * `samples`: Sample desktop applications
  * `shaders`: Shaders used by `filamat` and `matc`
  * `third_party`: External libraries and assets 
    * `environments`: Environment maps under CC @abstr_number license that can be used with `cmgen`
    * `models`: Models under permissive licenses
    * `textures`: Textures under CC @abstr_number license
  * `tools`: Host tools 
    * `cmgen`: Image-based lighting asset generator
    * `filamesh`: Mesh converter
    * `glslminifier`: Minifies GLSL source code
    * `matc`: Material compiler
    * `matinfo` Displays information about materials compiled with `matc`
    * `mipgen` Generates a series of miplevels from a source image
    * `normal-blending`: Tool to blend normal maps
    * `resgen` Aggregates binary blobs into embeddable resources
    * `roughness-prefilter`: Pre-filters a roughness map from a normal map to reduce aliasing
    * `skygen`: Physically-based sky environment texture generator
    * `specular-color`: Computes the specular color of conductors based on spectral data
  * `web`: JavaScript bindings, documentation, and samples



## Building Filament

### Prerequisites

To build Filament, you must first install the following tools:

  * CMake @abstr_number . @abstr_number (or more recent)
  * clang @abstr_number . @abstr_number (or more recent)
  * @abstr_hyperlink (or more recent)



To build the Java based components of the project you can optionally install (recommended):

  * OpenJDK @abstr_number . @abstr_number (or more recent)



Additional dependencies may be required for your operating system. Please refer to the appropriate section below.

Building the `rays` library (used for light baking) is optional and requires the following packages:

  * embree @abstr_number . @abstr_number +
  * libtbb-dev



To build Filament for Android you must also install the following:

  * Android Studio @abstr_number . @abstr_number 
  * Android SDK
  * Android NDK @abstr_number or higher



### Environment variables

Make sure the environment variable `ANDROID_HOME` points to the location of your Android SDK.

By default our build system will attempt to compile the Java bindings. To do so, the environment variable `JAVA_HOME` should point to the location of your JDK.

When building for WebGL, you'll also need to set `EMSDK`. See WebAssembly.

### IDE

We recommend using CLion to develop for Filament. Simply open the root directory's CMakeLists.txt in CLion to obtain a usable project.

### Easy build

Once the required OS specific dependencies listed below are installed, you can use the script located in `build.sh` to build Filament easily on macOS and Linux.

This script can be invoked from anywhere and will produce build artifacts in the `out/` directory inside the Filament source tree.

To trigger an incremental debug build:

@abstr_code_section 

To trigger an incremental release build:

@abstr_code_section 

To trigger both incremental debug and release builds:

@abstr_code_section 

To install the libraries and executables in `out/debug/` and `out/release/`, add the `-i` flag. You can force a clean build by adding the `-c` flag. The script offers more features described by executing `build.sh -h`.

### Disabling Java builds

By default our build system will attempt to compile the Java bindings. If you wish to skip this compilation step simply pass the `-j` flag to `build.sh`:

@abstr_code_section 

If you use CMake directly instead of the build script, pass `-DENABLE_JAVA=OFF` to CMake instead.

### Linux

Make sure you've installed the following dependencies:

  * `clang- @abstr_number` or higher
  * `libglu @abstr_number -mesa-dev`
  * `libc++- @abstr_number -dev` (`libcxx-devel` and `libcxx-static` on Fedora) or higher
  * `libc++abi- @abstr_number -dev` (`libcxxabi-static` on Fedora) or higher
  * `ninja-build`
  * `libxi-dev`



After dependencies have been installed, we highly recommend using the easy build script.

If you'd like to run `cmake` directly rather than using the build script, it can be invoked as follows, with some caveats that are explained further down.

@abstr_code_section 

Your Linux distribution might default to `gcc` instead of `clang`, if that's the case invoke `cmake` with the following command:

@abstr_code_section 

You can also export the `CC` and `CXX` environment variables to always point to `clang`. Another solution is to use `update-alternatives` to both change the default compiler, and point to a specific version of clang:

@abstr_code_section 

Finally, invoke `ninja`:

@abstr_code_section 

This will build Filament, its tests and samples, and various host tools.

### macOS

To compile Filament you must have the most recent version of Xcode installed and you need to make sure the command line tools are setup by running:

@abstr_code_section 

After installing Java @abstr_number . @abstr_number you must also ensure that your `JAVA_HOME` environment variable is properly set. If it doesn't already point to the appropriate JDK, you can simply add the following to your `.profile`:

@abstr_code_section 

Then run `cmake` and `ninja` to trigger a build:

@abstr_code_section 

### iOS

The easiest way to build Filament for iOS is to use `build.sh` and the `-p ios` flag. For instance to build the debug target:

@abstr_code_section 

See ios/samples/README.md for more information.

### Windows

The following instructions have been tested on a machine running Windows @abstr_number . They should take you from a machine with only the operating system to a machine able to build and run Filament.

Google employees require additional steps which can be found here @abstr_hyperlink .

Install the following components:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



If you're using Visual Studio @abstr_number , you'll also need to install the @abstr_hyperlink extension.

Open an appropriate Native Tools terminal for the version of Visual Studio you are using: \- VS @abstr_number : VS @abstr_number x @abstr_number Native Tools Command Prompt \- VS @abstr_number : x @abstr_number Native Tools Command Prompt for VS @abstr_number 

You can find these by clicking the start button and typing "x @abstr_number native tools".

Create a working directory: @abstr_code_section 

Create the msBuild project: @abstr_code_section 

Check out the output and make sure Clang for Windows frontend was found. You should see a line showing the following output. Note that for Visual Studio @abstr_number this line may list Microsoft's compiler, but the build will still in fact use Clang and you can proceed.

@abstr_code_section 

You are now ready to build: @abstr_code_section 

Run it: @abstr_code_section 

#### Tips

  * To troubleshoot an issue, use verbose mode via `/v:d` flag.
  * To build a specific project, use `/t:NAME` flag (e.g: `/t:material_sandbox`).
  * To build using more than one core, use parallel build flag: `/m`.
  * To build a specific profile, use `/p:configuration=` (e.g: `/p:configuration=Debug`, `/p:configuration=Release`, and `/p:configuration=RelWithDebInfo`).
  * The msBuild project is what is used by Visual Studio behind the scene to build. Building from VS or from the command-line is the same thing.



#### Building with Ninja on Windows

Alternatively, you can use @abstr_hyperlink to build for Windows. An MSVC installation is still necessary.

First, install the dependencies listed under Windows as well as Ninja. Then open up a Native Tools terminal as before. Create a build directory inside Filament and run the following CMake command:

@abstr_code_section 

You should then be able to build by invoking Ninja:

@abstr_code_section 

#### Development tips

  * Before shipping a binary, make sure you used Release profile and make sure you have no libc/libc++ dependencies with @abstr_hyperlink .
  * Application Verifier and gflags.exe can be of great help to trackdown heap corruption. Application Verifier is easy to setup with a GUI. For gflags, use: `gflags /p /enable pheap-buggy.exe`.



#### Running a simple test

To confirm Filament was properly built, run the following command from the build directory:

@abstr_code_section 

### Android

Before building Filament for Android, make sure to build Filament for your host. Some of the host tools are required to successfully build for Android.

Filament can be built for the following architectures:

  * ARM @abstr_number -bit (`arm @abstr_number -v @abstr_number a`)
  * ARM @abstr_number -bit (`armeabi-v @abstr_number a`)
  * Intel @abstr_number -bit (`x @abstr_number _ @abstr_number`)
  * Intel @abstr_number -bit (`x @abstr_number`)



Note that the main target is the ARM @abstr_number -bit target. Our implementation is optimized first and foremost for `arm @abstr_number -v @abstr_number a`.

To build Android on Windows machines, see android/Windows.md.

#### Easy Android build

The easiest way to build Filament for Android is to use `build.sh` and the `-p android` flag. For instance to build the release target:

@abstr_code_section 

Run `build.sh -h` for more information.

#### ARM @abstr_number -bit target (arm @abstr_number -v @abstr_number a)

Then invoke CMake in a build directory of your choice, inside of filament's directory:

@abstr_code_section 

And then invoke `ninja`:

@abstr_code_section 

or

@abstr_code_section 

This will generate Filament's Android binaries in `out/android-release`. This location is important to build the Android Studio projects located in `filament/android`. After install, the library binaries should be found in `out/android-release/filament/lib/arm @abstr_number -v @abstr_number a`.

#### ARM @abstr_number -bit target (armeabi-v @abstr_number a)

Then invoke CMake in a build directory of your choice, inside of filament's directory:

@abstr_code_section 

And then invoke `ninja`:

@abstr_code_section 

or

@abstr_code_section 

This will generate Filament's Android binaries in `out/android-release`. This location is important to build the Android Studio projects located in `filament/android`. After install, the library binaries should be found in `out/android-release/filament/lib/armeabi-v @abstr_number a`.

#### Intel @abstr_number -bit target (x @abstr_number _ @abstr_number )

Then invoke CMake in a build directory of your choice, sibling of filament's directory:

@abstr_code_section 

And then invoke `ninja`:

@abstr_code_section 

or

@abstr_code_section 

This will generate Filament's Android binaries in `out/android-release`. This location is important to build the Android Studio projects located in `filament/android`. After install, the library binaries should be found in `out/android-release/filament/lib/x @abstr_number _ @abstr_number`.

#### Intel @abstr_number -bit target (x @abstr_number )

Then invoke CMake in a build directory of your choice, sibling of filament's directory:

@abstr_code_section 

And then invoke `ninja`:

@abstr_code_section 

or

@abstr_code_section 

This will generate Filament's Android binaries in `out/android-release`. This location is important to build the Android Studio projects located in `filament/android`. After install, the library binaries should be found in `out/android-release/filament/lib/x @abstr_number`.

### AAR

Before you attempt to build the AAR, make sure you've compiled and installed the native libraries as explained in the sections above. You must have the following ABIs built in `out/android-release/filament/lib/`:

  * `arm @abstr_number -v @abstr_number a`
  * `armeabi-v @abstr_number a`
  * `x @abstr_number _ @abstr_number`
  * `x @abstr_number`



To build Filament's AAR simply open the Android Studio project in `android/filament-android`. The AAR is a universal AAR that contains all supported build targets:

  * `arm @abstr_number -v @abstr_number a`
  * `armeabi-v @abstr_number a`
  * `x @abstr_number _ @abstr_number`
  * `x @abstr_number`



To filter out unneeded ABIs, rely on the `abiFilters` of the project that links against Filament's AAR.

Alternatively you can build the AAR from the command line by executing the following the `android/filament-android` directory:

@abstr_code_section 

The `-Pfilament_dist_dir` can be used to specify a different installation directory (it must match the CMake install prefix used in the previous steps).

### Using Filament's AAR

Create a new module in your project and select _Import .JAR or .AAR Package_ when prompted. Make sure to add the newly created module as a dependency to your application.

If you do not wish to include all supported ABIs, make sure to create the appropriate flavors in your Gradle build file. For example:

@abstr_code_section 

### WebAssembly

The core Filament library can be cross-compiled to WebAssembly from either macOS or Linux. To get started, follow the instructions for building Filament on your platform (macOS or linux), which will ensure you have the proper dependencies installed.

Next, you need to install the Emscripten SDK. The following instructions show how to install the same version that our continuous builds use.

@abstr_code_section 

After this you can invoke the easy build script as follows:

@abstr_code_section 

The EMSDK variable is required so that the build script can find the Emscripten SDK. The build creates a `samples` folder that can be used as the root of a simple static web server. Note that you cannot open the HTML directly from the filesystem due to CORS. One way to deal with this is to use Python to create a quick localhost server:

@abstr_code_section 

You can then open http://localhost: @abstr_number /suzanne.html in your web browser.

Alternatively, if you have node installed you can use the @abstr_hyperlink package, which automatically refreshes the web page when it detects a change.

Each sample app has its own handwritten html file. Additionally the server folder contains assets such as meshes, textures, and materials.

## Running the native samples

The `samples/` directory contains several examples of how to use Filament with SDL @abstr_number .

Some of the samples accept FBX/OBJ meshes while others rely on the `filamesh` file format. To generate a `filamesh` file from an FBX/OBJ asset, run the `filamesh` tool (`./tools/filamesh/filamesh` in your build directory):

@abstr_code_section 

Most samples accept an IBL that must be generated using the `cmgen` tool (`./tools/filamesh/cmgen` in your build directory). These sample apps expect a path to a directory containing the '.rgb @abstr_number f' files for the IBL (which are PNGs containing `R @abstr_number F_G @abstr_number F_B @abstr_number F` data). To generate an IBL simply use this command:

@abstr_code_section 

The source environment map can be a PNG ( @abstr_number or @abstr_number bit), a PSD ( @abstr_number or @abstr_number bit), an HDR or an OpenEXR file. The environment map can be an equirectangular projection, a horizontal cross, a vertical cross, or a list of cubemap faces (horizontal or vertical).

`cmgen` will automatically create a directory based on the name of the source environment map. In the example above, the final directory will be `./ibls/my_ibl/`. This directory should contain the pre-filtered environment map (one file per cubemap face and per mip level), the environment map texture for the skybox and a text file containing the spherical harmonics for indirect diffuse lighting.

If you prefer a blurred background, run `cmgen` with this flag: `--extract-blur= @abstr_number . @abstr_number`. The numerical value is the desired roughness between @abstr_number and @abstr_number .

## Rendering with Filament

### Native Linux, macOS and Windows

You must create an `Engine`, a `Renderer` and a `SwapChain`. The `SwapChain` is created from a native window pointer (an `NSView` on macOS or a `HWND` on Windows for instance):

```c++ Engine* engine = Engine::create(); SwapChain* swapChain = engine->createSwapChain(nativeWindow); Renderer* renderer = engine->createRenderer(); @abstr_code_section c++ Camera* camera = engine->createCamera(); View* view = engine->createView(); Scene* scene = engine->createScene();

view->setCamera(camera); view->setScene(scene); @abstr_code_section c++ Entity renderable = EntityManager::get().create(); // build a quad RenderableManager::Builder( @abstr_number ) .boundingBox({{ - @abstr_number , - @abstr_number , - @abstr_number }, { @abstr_number , @abstr_number , @abstr_number }}) .material( @abstr_number , materialInstance) .geometry( @abstr_number , RenderableManager::PrimitiveType::TRIANGLES, vertexBuffer, indexBuffer, @abstr_number , @abstr_number ) .culling(false) .build( _engine, renderable); scene- >addEntity(renderable); @abstr_code_section c++ Material_ material = Material::Builder() .package((void _) BAKED_MATERIAL_PACKAGE, sizeof(BAKED_MATERIAL_PACKAGE)) .build(_ engine); MaterialInstance* materialInstance = material->createInstance(); @abstr_code_section c++ // beginFrame() returns false if we need to skip a frame if (renderer->beginFrame(swapChain)) { // for each View renderer->render(view); renderer->endFrame(); } @abstr_code_section $ cd filament/filament $ doxygen docs/doxygen/filament.doxygen ```

Finally simply open `docs/html/index.html` in your web browser.

## Assets

To get started you can use the textures and environment maps found respectively in `third_party/textures` and `third_party/environments`. These assets are under CC @abstr_number license. Please refer to their respective `URL.txt` files to know more about the original authors.

## Dependencies

One of our design goals is that Filament itself should have no dependencies or as few dependencies as possible. The current external dependencies of the runtime library include:

  * STL
  * robin-map (header only library)



When building with Vulkan enabled, we have a few additional small dependencies:

  * vkmemalloc
  * smol-v



Host tools (such as `matc` or `cmgen`) can use external dependencies freely.

## How to make contributions

Please read and follow the steps in CONTRIBUTING.md. Make sure you are familiar with the code style.

## License

Please see LICENSE.

## Disclaimer

This is not an officially supported Google product.
