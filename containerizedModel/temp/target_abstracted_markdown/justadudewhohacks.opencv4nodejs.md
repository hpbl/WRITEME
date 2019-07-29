# opencv @abstr_number nodejs

@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

**opencv @abstr_number nodejs allows you to use the native OpenCV library in nodejs. Besides a synchronous API the package provides an asynchronous API, which allows you to build non-blocking and multithreaded computer vision tasks. opencv @abstr_number nodejs supports OpenCV @abstr_number and OpenCV @abstr_number .**

**The ultimate goal of this project is to provide a comprehensive collection of nodejs bindings to the API of OpenCV and the OpenCV-contrib modules. To get an overview of the currently implemented bindings, have a look at the @abstr_hyperlink of this package. Furthermore, contribution is highly appreciated. If you want to add missing bindings check out the @abstr_hyperlink**

  * **Examples**
  * **How to install**
  * **Usage with Docker**
  * **Usage with Electron**
  * **Usage with NW.js**
  * **Quick Start**
  * **Async API**
  * **With TypeScript**
  * **External Memory Tracking (v @abstr_number . @abstr_number . @abstr_number )**



# Examples

See @abstr_hyperlink for implementation.

### Face Detection

@abstr_image @abstr_image 

### Face Recognition with the OpenCV face module

Check out @abstr_hyperlink .

@abstr_image 

### Face Landmarks with the OpenCV face module

@abstr_image 

### Face Recognition with @abstr_hyperlink 

Check out @abstr_hyperlink .

@abstr_hyperlink 

### Hand Gesture Recognition

Check out @abstr_hyperlink .

@abstr_image 

### Object Recognition with Deep Neural Networks

Check out @abstr_hyperlink .

#### Tensorflow Inception

@abstr_image @abstr_image @abstr_image 

#### Single Shot Multibox Detector with COCO

@abstr_image @abstr_image 

### Machine Learning

Check out @abstr_hyperlink .

@abstr_image 

### Object Tracking

@abstr_image @abstr_image 

### Feature Matching

@abstr_image 

### Image Histogram

@abstr_image @abstr_image 

# How to install

@abstr_code_section 

Native node modules are built via node-gyp, which already comes with npm by default. However, node-gyp requires you to have python installed. If you are running into node-gyp specific issues have a look at known issues with @abstr_hyperlink first.

**Important note:** node-gyp won't handle whitespaces properly, thus make sure, that the path to your project directory does **not contain any whitespaces**. Installing opencv @abstr_number nodejs under "C:\Program Files\some_dir" or similar will not work and will fail with: "fatal error C @abstr_number : Cannot open include file: 'opencv @abstr_number /core.hpp'"!**

On Windows you will furthermore need Windows Build Tools to compile OpenCV and opencv @abstr_number nodejs. If you don't have Visual Studio or Windows Build Tools installed, you can easily install the VS @abstr_number build tools:

@abstr_code_section 

## Installing OpenCV Manually

Setting up OpenCV on your own will require you to set an environment variable to prevent the auto build script to run:

@abstr_code_section 

### Windows

You can install any of the OpenCV @abstr_number or OpenCV @abstr_number @abstr_hyperlink manually or via the @abstr_hyperlink package manager:

@abstr_code_section 

Note, this will come without contrib modules. To install OpenCV under windows with contrib modules you have to build the library from source or you can use the auto build script.

Before installing opencv @abstr_number nodejs with an own installation of OpenCV you need to expose the following environment variables: \- _OPENCV_INCLUDE_DIR_ pointing to the directory with the subfolder _opencv @abstr_number * containing the header files \- *OPENCV_LIB_DIR_ pointing to the lib directory containing the OpenCV .lib files

Also you will need to add the OpenCV binaries to your system path: \- add an environment variable _OPENCV_BIN_DIR_ pointing to the binary directory containing the OpenCV .dll files \- append `;%OPENCV_BIN_DIR%;` to your system path variable

Note: Restart your current console session after making changes to your environment.

### MacOSX

Under OSX we can simply install OpenCV via brew:

@abstr_code_section 

### Linux

Under Linux we have to build OpenCV from source manually or using the auto build script.

## Installing OpenCV via Auto Build Script

The auto build script comes in form of the @abstr_hyperlink npm package, which will run by default when installing opencv @abstr_number nodejs. The script requires you to have git and a recent version of cmake installed.

### Auto Build Flags

You can customize the autobuild flags using _OPENCV @abstr_number NODEJS_AUTOBUILD_FLAGS=_. Flags must be space-separated.

This is an advanced customization and you should have knowledge regarding the OpenCV compilation flags. Flags added by default are listed @abstr_hyperlink .

### Installing a Specific Version of OpenCV

You can specify the Version of OpenCV you want to install via the script by setting an environment variable: `export OPENCV @abstr_number NODEJS_AUTOBUILD_OPENCV_VERSION= @abstr_number . @abstr_number . @abstr_number`

### Installing only a Subset of OpenCV modules

If you only want to build a subset of the OpenCV modules you can pass the _-DBUILD_LIST_ cmake flag via the _OPENCV @abstr_number NODEJS_AUTOBUILD_FLAGS_ environment variable. For example `export OPENCV @abstr_number NODEJS_AUTOBUILD_FLAGS=-DBUILD_LIST=dnn` will build only modules required for `dnn` and reduces the size and compilation time of the OpenCV package.

## Usage with Docker

###  @abstr_hyperlink - example for opencv @abstr_number nodejs with express.js and docker

Or simply pull from @abstr_hyperlink for opencv- @abstr_number . @abstr_number + contrib- @abstr_number . @abstr_number with opencv @abstr_number nodejs globally installed:

@abstr_code_section 

**Note** : The aforementioned Docker image already has `opencv @abstr_number nodejs` installed globally. In order to prevent build errors during an `npm install`, your `package.json` should not include `opencv @abstr_number nodejs`, and instead should include/require the global package either by requiring it by absolute path or setting the `NODE_PATH` environment variable to `/usr/lib/node_modules` in your Dockerfile and requiring the package as you normally would.

Different OpenCV @abstr_number .x base images can be found here: https://hub.docker.com/r/justadudewhohacks/.

## Usage with Electron

###  @abstr_hyperlink - example for opencv @abstr_number nodejs with electron

Add the following script to your package.json: @abstr_code_section 

Run the script: @abstr_code_section 

Require it in the application: @abstr_code_section 

## Usage with NW.js

Any native modules, including opencv @abstr_number nodejs, must be recompiled to be used with @abstr_hyperlink . Instructions on how to do this are available in the **@abstr_hyperlink** section of the the NW.js documentation.

Once recompiled, the module can be installed and required as usual:

@abstr_code_section 

# Quick Start

@abstr_code_section 

### Initializing Mat (image matrix), Vec, Point

@abstr_code_section 

### Mat and Vec operations

@abstr_code_section 

### Accessing Mat data

@abstr_code_section 

### IO

@abstr_code_section 

### Useful Mat methods

@abstr_code_section 

### Drawing a Mat into HTML Canvas

@abstr_code_section 

### Method Interface

OpenCV method interface from official docs or src: ``` c++ void GaussianBlur(InputArray src, OutputArray dst, Size ksize, double sigmaX, double sigmaY = @abstr_number , int borderType = BORDER_DEFAULT); @abstr_code_section javascript const src = new cv.Mat(...); // invoke with required arguments const dst @abstr_number = src.gaussianBlur(new cv.Size( @abstr_number , @abstr_number ), @abstr_number . @abstr_number ); // with optional paramaters const dst @abstr_number = src.gaussianBlur(new cv.Size( @abstr_number , @abstr_number ), @abstr_number . @abstr_number , @abstr_number . @abstr_number , cv.BORDER_REFLECT); // or pass specific optional parameters const optionalArgs = { borderType: cv.BORDER_CONSTANT }; const dst @abstr_number = src.gaussianBlur(new cv.Size( @abstr_number , @abstr_number ), @abstr_number . @abstr_number , optionalArgs); @abstr_code_section javascript const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT @abstr_number );

// by nesting callbacks cv.imreadAsync('./faceimg.jpg', (err, img) => { if (err) { return console.error(err); }

const grayImg = img.bgrToGray(); classifier.detectMultiScaleAsync(grayImg, (err, res) => { if (err) { return console.error(err); }
    
    
    const { objects, numDetections } = res;
    ...
    

}); });

// via Promise cv.imreadAsync('./faceimg.jpg') .then(img => img.bgrToGrayAsync() .then(grayImg => classifier.detectMultiScaleAsync(grayImg)) .then((res) => { const { objects, numDetections } = res; ... }) ) .catch(err => console.error(err));

// using async await try { const img = await cv.imreadAsync('./faceimg.jpg'); const grayImg = await img.bgrToGrayAsync(); const { objects, numDetections } = await classifier.detectMultiScaleAsync(grayImg); ... } catch (err) { console.error(err); } @abstr_code_section javascript import * as cv from 'opencv @abstr_number nodejs' @abstr_code_section bash export OPENCV @abstr_number NODEJS_DISABLE_EXTERNAL_MEM_TRACKING= @abstr_number // linux set OPENCV @abstr_number NODEJS_DISABLE_EXTERNAL_MEM_TRACKING= @abstr_number // windows @abstr_code_section javascript process.env.OPENCV @abstr_number NODEJS_DISABLE_EXTERNAL_MEM_TRACKING = @abstr_number const cv = require('opencv @abstr_number nodejs') ```
