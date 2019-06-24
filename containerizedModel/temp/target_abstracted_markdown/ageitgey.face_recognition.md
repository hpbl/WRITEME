# Face Recognition

_You can also read a translated version of this file @abstr_hyperlink or @abstr_hyperlink ._

Recognize and manipulate faces from Python or from the command line with the world's simplest face recognition library.

Built using @abstr_hyperlink 's state-of-the-art face recognition built with deep learning. The model has an accuracy of @abstr_number . @abstr_number % on the @abstr_hyperlink benchmark.

This also provides a simple `face_recognition` command line tool that lets you do face recognition on a folder of images from the command line!

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Features

#### Find faces in pictures

Find all the faces that appear in a picture:

@abstr_image 

@abstr_code_section 

#### Find and manipulate facial features in pictures

Get the locations and outlines of each person's eyes, nose, mouth and chin.

@abstr_image 

@abstr_code_section 

Finding facial features is super useful for lots of important stuff. But you can also use it for really stupid stuff like applying @abstr_hyperlink (think 'Meitu'):

@abstr_image 

#### Identify faces in pictures

Recognize who appears in each photo.

@abstr_image 

@abstr_code_section 

You can even use this library with other Python libraries to do real-time face recognition:

@abstr_image 

See @abstr_hyperlink for the code.

## Online Demos

User-contributed shared Jupyter notebook demo (not officially supported): @abstr_hyperlink 

## Installation

### Requirements

  * Python @abstr_number . @abstr_number + or Python @abstr_number . @abstr_number 
  * macOS or Linux (Windows not officially supported, but might work)



### Installation Options:

#### Installing on Mac or Linux

First, make sure you have dlib already installed with Python bindings:

  * @abstr_hyperlink 



Then, install this module from pypi using `pip @abstr_number` (or `pip @abstr_number` for Python @abstr_number ):

@abstr_code_section 

Alternatively, you can try this library with @abstr_hyperlink , see this section.

If you are having trouble with installation, you can also try out a @abstr_hyperlink .

#### Installing on an Nvidia Jetson Nano board

  * @abstr_hyperlink 
    * Please follow the instructions in the article carefully. There is current a bug in the CUDA libraries on the Jetson Nano that will cause this library to fail silently if you don't follow the instructions in the article to comment out a line in dlib and recompile it.



#### Installing on Raspberry Pi @abstr_number +

  * @abstr_hyperlink 



#### Installing on Windows

While Windows isn't officially supported, helpful users have posted instructions on how to install this library:

  * @abstr_hyperlink 



#### Installing a pre-configured Virtual Machine image

  * @abstr_hyperlink (for VMware Player or VirtualBox).



## Usage

### Command-Line Interface

When you install `face_recognition`, you get two simple command-line programs:

  * `face_recognition` \- Recognize faces in a photograph or folder full for photographs.
  * `face_detection` \- Find faces in a photograph or folder full for photographs.



#### `face_recognition` command line tool

The `face_recognition` command lets you recognize faces in a photograph or folder full for photographs.

First, you need to provide a folder with one picture of each person you already know. There should be one image file for each person with the files named according to who is in the picture:

@abstr_image 

Next, you need a second folder with the files you want to identify:

@abstr_image 

Then in you simply run the command `face_recognition`, passing in the folder of known people and the folder (or single image) with unknown people and it tells you who is in each image:

@abstr_code_section 

There's one line in the output for each face. The data is comma-separated with the filename and the name of the person found.

An `unknown_person` is a face in the image that didn't match anyone in your folder of known people.

#### `face_detection` command line tool

The `face_detection` command lets you find the location (pixel coordinatates) of any faces in an image.

Just run the command `face_detection`, passing in a folder of images to check (or a single image):

@abstr_code_section 

It prints one line for each face that was detected. The coordinates reported are the top, right, bottom and left coordinates of the face (in pixels).

##### Adjusting Tolerance / Sensitivity

If you are getting multiple matches for the same person, it might be that the people in your photos look very similar and a lower tolerance value is needed to make face comparisons more strict.

You can do that with the `--tolerance` parameter. The default tolerance value is @abstr_number . @abstr_number and lower numbers make face comparisons more strict:

@abstr_code_section 

If you want to see the face distance calculated for each match in order to adjust the tolerance setting, you can use `--show-distance true`:

@abstr_code_section 

##### More Examples

If you simply want to know the names of the people in each photograph but don't care about file names, you could do this:

@abstr_code_section 

##### Speeding up Face Recognition

Face recognition can be done in parallel if you have a computer with multiple CPU cores. For example, if your system has @abstr_number CPU cores, you can process about @abstr_number times as many images in the same amount of time by using all your CPU cores in parallel.

If you are using Python @abstr_number . @abstr_number or newer, pass in a `--cpus <number_of_cpu_cores_to_use>` parameter:

@abstr_code_section 

You can also pass in `--cpus - @abstr_number` to use all CPU cores in your system.

#### Python Module

You can import the `face_recognition` module and then easily manipulate faces with just a couple of lines of code. It's super easy!

API Docs: @abstr_hyperlink .

##### Automatically find all the faces in an image

@abstr_code_section 

See @abstr_hyperlink to try it out.

You can also opt-in to a somewhat more accurate deep-learning-based face detection model.

Note: GPU acceleration (via NVidia's CUDA library) is required for good performance with this model. You'll also want to enable CUDA support when compliling `dlib`.

@abstr_code_section 

See @abstr_hyperlink to try it out.

If you have a lot of images and a GPU, you can also @abstr_hyperlink .

##### Automatically locate the facial features of a person in an image

@abstr_code_section 

See @abstr_hyperlink to try it out.

##### Recognize faces in images and identify who they are

@abstr_code_section 

See @abstr_hyperlink to try it out.

## Python Code Examples

All the examples are available @abstr_hyperlink .

#### Face Detection

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Facial Features

  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Facial Recognition

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Creating a Standalone Executable

If you want to create a standalone executable that can run without the need to install `python` or `face_recognition`, you can use @abstr_hyperlink . However, it requires some custom configuration to work with this library. See @abstr_hyperlink for how to do it.

## Articles and Guides that cover `face_recognition`

  * My article on how Face Recognition works: @abstr_hyperlink 
    * Covers the algorithms and how they generally work
  * @abstr_hyperlink by Adrian Rosebrock 
    * Covers how to use face recognition in practice
  * @abstr_hyperlink by Adrian Rosebrock 
    * Covers how to use this on a Raspberry Pi
  * @abstr_hyperlink by Adrian Rosebrock 
    * Covers how to automatically cluster photos based on who appears in each photo using unsupervised learning



## How Face Recognition Works

If you want to learn how face location and recognition work instead of depending on a black box library, @abstr_hyperlink .

## Caveats

  * The face recognition model is trained on adults and does not work very well on children. It tends to mix up children quite easy using the default comparison threshold of @abstr_number . @abstr_number .
  * Accuracy may vary between ethnic groups. Please see @abstr_hyperlink for more details.



## Deployment to Cloud Hosts (Heroku, AWS, etc)

Since `face_recognition` depends on `dlib` which is written in C++, it can be tricky to deploy an app using it to a cloud hosting provider like Heroku or AWS.

To make things easier, there's an example Dockerfile in this repo that shows how to run an app built with `face_recognition` in a @abstr_hyperlink container. With that, you should be able to deploy to any service that supports Docker images.

You can try the Docker image locally by running: `docker-compose up --build`

Linux users with a GPU (drivers >= @abstr_number . @abstr_number ) and @abstr_hyperlink installed can run the example on the GPU: Open the docker-compose.yml file and uncomment the `dockerfile: Dockerfile.gpu` and `runtime: nvidia` lines.

## Having problems?

If you run into problems, please read the @abstr_hyperlink section of the wiki before filing a github issue.

## Thanks

  * Many, many thanks to @abstr_hyperlink ( @abstr_hyperlink ) for creating dlib and for providing the trained facial feature detection and face encoding models used in this library. For more information on the ResNet that powers the face encodings, check out his @abstr_hyperlink .
  * Thanks to everyone who works on all the awesome Python data science libraries like numpy, scipy, scikit-image, pillow, etc, etc that makes this kind of stuff so easy and fun in Python.
  * Thanks to @abstr_hyperlink and the @abstr_hyperlink project template for making Python project packaging way more tolerable.


