# node-opencv

@abstr_hyperlink 

@abstr_hyperlink bindings for Node.js. OpenCV is the defacto computer vision library - by interfacing with it natively in node, we get powerful real time vision in js.

People are using node-opencv to fly control quadrocoptors, detect faces from webcam images and annotate video streams. If you're using it for something cool, I'd love to hear about it!

## Install

You'll need OpenCV @abstr_number . @abstr_number . @abstr_number or newer installed before installing node-opencv.

## Specific for macOS

Install OpenCV using brew @abstr_code_section 

## Specific for Windows

@abstr_number . Download and install OpenCV (Be sure to use a @abstr_number . @abstr_number version) @ http://opencv.org/releases.html For these instructions we will assume OpenCV is put at C:\OpenCV, but you can adjust accordingly.

@abstr_number . If you haven't already, create a system variable called OPENCV_DIR and set it to C:\OpenCV\build\x @abstr_number \vc @abstr_number 

Make sure the "x @abstr_number " part matches the version of NodeJS you are using.

Also add the following to your system PATH ;%OPENCV_DIR%\bin

@abstr_number . Install Visual Studio @abstr_number . Make sure to get the C++ components. You can use a different edition, just make sure OpenCV supports it, and you set the "vcxx" part of the variables above to match.

@abstr_number . Download peterbraden/node-opencv fork git clone https://github.com/peterbraden/node-opencv

@abstr_number . run npm install

@abstr_code_section 

## Examples

Run the examples from the parent directory.

### Face Detection

@abstr_code_section 

## API Documentation

### Matrix

The @abstr_hyperlink is the most useful base data structure in OpenCV. Things like images are just matrices of pixels.

#### Creation

@abstr_code_section 

Or if you're thinking of a Matrix as an image:

@abstr_code_section 

Or you can use opencv to read in image files. Supported formats are in the OpenCV docs, but jpgs etc are supported.

@abstr_code_section 

If you need to pipe data into an image, you can use an ImageDataStream:

@abstr_code_section 

If however, you have a series of images, and you wish to stream them into a stream of Matrices, you can use an ImageStream. Thus:

@abstr_code_section 

Note: Each 'data' event into the ImageStream should be a complete image buffer.

#### Accessing Data

@abstr_code_section 

##### Save

@abstr_code_section 

or:

@abstr_code_section 

#### Image Processing

@abstr_code_section 

#### Simple Drawing

@abstr_code_section 

#### Object Detection

There is a shortcut method for @abstr_hyperlink object detection. This can be used for face detection etc.

@abstr_code_section 

For convenience in face detection, cv.FACE_CASCADE is a cascade that can be used for frontal face detection.

Also:

@abstr_code_section 

#### Contours

@abstr_code_section 

### Using Contours

`findContours` returns a `Contours` collection object, not a native array. This object provides functions for accessing, computing with, and altering the contours contained in it. See relevant source code and examples

@abstr_code_section 

#### Face Recognization

It requires to `train` then `predict`. For acceptable result, the face should be cropped, grayscaled and aligned, I ignore this part so that we may focus on the api usage.

_* Please ensure your OpenCV @abstr_number . @abstr_number + is configured with contrib. MacPorts user may`port install opencv +contrib` *_

@abstr_code_section 

## Test

Using @abstr_hyperlink . Run with command:

`npm test`.

## Contributing

I (@peterbraden) don't spend much time maintaining this library, it runs primarily on contributor support. I'm happy to accept most PR's if the tests run green, all new functionality is tested, and there are no objections in the PR.

Because I haven't got much time for maintenance, I'd prefer to keep an absolute minimum of dependencies.

## MIT License

The library is distributed under the MIT License - if for some reason that doesn't work for you please get in touch.
