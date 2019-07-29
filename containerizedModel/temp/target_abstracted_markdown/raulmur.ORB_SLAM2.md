# ORB-SLAM @abstr_number

**Authors:** @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink ( @abstr_hyperlink )

_* @abstr_number Jan @abstr_number *_ : OpenCV @abstr_number and Eigen @abstr_number . @abstr_number are now supported.

_* @abstr_number Dec @abstr_number *_ : Added AR demo (see section @abstr_number ).

ORB-SLAM @abstr_number is a real-time SLAM library for **Monocular** , **Stereo** and **RGB-D** cameras that computes the camera trajectory and a sparse @abstr_number D reconstruction (in the stereo and RGB-D case with true scale). It is able to detect loops and relocalize the camera in real time. We provide examples to run the SLAM system in the @abstr_hyperlink as stereo or monocular, in the @abstr_hyperlink as RGB-D or monocular, and in the @abstr_hyperlink as stereo or monocular. We also provide a ROS node to process live monocular, stereo or RGB-D streams. **The library can be compiled without ROS**. ORB-SLAM @abstr_number provides a GUI to change between a _SLAM Mode_ and _Localization Mode_ , see section @abstr_number of this document.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

### Related Publications:

[Monocular] Raúl Mur-Artal, J. M. M. Montiel and Juan D. Tardós. **ORB-SLAM: A Versatile and Accurate Monocular SLAM System**. _IEEE Transactions on Robotics,_ vol. @abstr_number , no. @abstr_number , pp. @abstr_number - @abstr_number , @abstr_number . ( _* @abstr_number IEEE Transactions on Robotics Best Paper Award **). ***_ @abstr_hyperlink .

[Stereo and RGB-D] Raúl Mur-Artal and Juan D. Tardós. **ORB-SLAM @abstr_number : an Open-Source SLAM System for Monocular, Stereo and RGB-D Cameras**. _IEEE Transactions on Robotics,_ vol. @abstr_number , no. @abstr_number , pp. @abstr_number - @abstr_number , @abstr_number . **@abstr_hyperlink**.

[DBoW @abstr_number Place Recognizer] Dorian Gálvez-López and Juan D. Tardós. **Bags of Binary Words for Fast Place Recognition in Image Sequences**. _IEEE Transactions on Robotics,_ vol. @abstr_number , no. @abstr_number , pp. @abstr_number - @abstr_number , @abstr_number . **@abstr_hyperlink**

# @abstr_number . License

ORB-SLAM @abstr_number is released under a @abstr_hyperlink . For a list of all code/library dependencies (and associated licenses), please see @abstr_hyperlink .

For a closed-source version of ORB-SLAM @abstr_number for commercial purposes, please contact the authors: orbslam (at) unizar (dot) es.

If you use ORB-SLAM @abstr_number (Monocular) in an academic work, please cite:
    
    
    @article{murTRO @abstr_number ,
      title={{ORB-SLAM}: a Versatile and Accurate Monocular {SLAM} System},
      author={Mur-Artal, Ra\'ul, Montiel, J. M. M. and Tard\'os, Juan D.},
      journal={IEEE Transactions on Robotics},
      volume={ @abstr_number },
      number={ @abstr_number },
      pages={ @abstr_number -- @abstr_number },
      doi = { @abstr_number . @abstr_number /TRO. @abstr_number . @abstr_number },
      year={ @abstr_number }
     }
    

if you use ORB-SLAM @abstr_number (Stereo or RGB-D) in an academic work, please cite:
    
    
    @article{murORB @abstr_number ,
      title={{ORB-SLAM @abstr_number }: an Open-Source {SLAM} System for Monocular, Stereo and {RGB-D} Cameras},
      author={Mur-Artal, Ra\'ul and Tard\'os, Juan D.},
      journal={IEEE Transactions on Robotics},
      volume={ @abstr_number },
      number={ @abstr_number },
      pages={ @abstr_number -- @abstr_number },
      doi = { @abstr_number . @abstr_number /TRO. @abstr_number . @abstr_number },
      year={ @abstr_number }
     }
    

# @abstr_number . Prerequisites

We have tested the library in _*Ubuntu @abstr_number . @abstr_number *_ , _* @abstr_number . @abstr_number *_ and _* @abstr_number . @abstr_number *_ , but it should be easy to compile in other platforms. A powerful computer (e.g. i @abstr_number ) will ensure real-time performance and provide more stable and accurate results.

## C++ @abstr_number or C++ @abstr_number x Compiler

We use the new thread and chrono functionalities of C++ @abstr_number .

## Pangolin

We use @abstr_hyperlink for visualization and user interface. Dowload and install instructions can be found at: https://github.com/stevenlovegrove/Pangolin.

## OpenCV

We use @abstr_hyperlink to manipulate images and features. Dowload and install instructions can be found at: http://opencv.org. _*Required at leat @abstr_number . @abstr_number . @abstr_number . Tested with OpenCV @abstr_number . @abstr_number . @abstr_number and OpenCV @abstr_number . @abstr_number *_.

## Eigen @abstr_number

Required by g @abstr_number o (see below). Download and install instructions can be found at: http://eigen.tuxfamily.org. _*Required at least @abstr_number . @abstr_number . @abstr_number *_.

## DBoW @abstr_number and g @abstr_number o (Included in Thirdparty folder)

We use modified versions of the @abstr_hyperlink library to perform place recognition and @abstr_hyperlink library to perform non-linear optimizations. Both modified libraries (which are BSD) are included in the _Thirdparty_ folder.

## ROS (optional)

We provide some examples to process the live input of a monocular, stereo or RGB-D camera using ROS. Building these examples is optional. In case you want to use ROS, a version Hydro or newer is needed.

# @abstr_number . Building ORB-SLAM @abstr_number library and examples

Clone the repository: @abstr_code_section 

We provide a script `build.sh` to build the _Thirdparty_ libraries and *ORB-SLAM @abstr_number *. Please make sure you have installed all required dependencies (see section @abstr_number ). Execute: @abstr_code_section 

This will create **libORB_SLAM @abstr_number .so** at _lib_ folder and the executables **mono_tum** , **mono_kitti** , **rgbd_tum** , **stereo_kitti** , **mono_euroc** and **stereo_euroc** in _Examples_ folder.

# @abstr_number . Monocular Examples

## TUM Dataset

@abstr_number . Download a sequence from http://vision.in.tum.de/data/datasets/rgbd-dataset/download and uncompress it.

@abstr_number . Execute the following command. Change `TUMX.yaml` to TUM @abstr_number .yaml,TUM @abstr_number .yaml or TUM @abstr_number .yaml for freiburg @abstr_number , freiburg @abstr_number and freiburg @abstr_number sequences respectively. Change `PATH_TO_SEQUENCE_FOLDER`to the uncompressed sequence folder. @abstr_code_section 

## KITTI Dataset

@abstr_number . Download the dataset (grayscale images) from http://www.cvlibs.net/datasets/kitti/eval_odometry.php 

@abstr_number . Execute the following command. Change `KITTIX.yaml`by KITTI @abstr_number - @abstr_number .yaml, KITTI @abstr_number .yaml or KITTI @abstr_number - @abstr_number .yaml for sequence @abstr_number to @abstr_number , @abstr_number , and @abstr_number to @abstr_number respectively. Change `PATH_TO_DATASET_FOLDER` to the uncompressed dataset folder. Change `SEQUENCE_NUMBER` to @abstr_number , @abstr_number , @abstr_number ,.., @abstr_number . @abstr_code_section 

## EuRoC Dataset

@abstr_number . Download a sequence (ASL format) from http://projects.asl.ethz.ch/datasets/doku.php?id=kmavvisualinertialdatasets

@abstr_number . Execute the following first command for V @abstr_number and V @abstr_number sequences, or the second command for MH sequences. Change PATH_TO_SEQUENCE_FOLDER and SEQUENCE according to the sequence you want to run. @abstr_code_section 

@abstr_code_section 

# @abstr_number . Stereo Examples

## KITTI Dataset

@abstr_number . Download the dataset (grayscale images) from http://www.cvlibs.net/datasets/kitti/eval_odometry.php 

@abstr_number . Execute the following command. Change `KITTIX.yaml`to KITTI @abstr_number - @abstr_number .yaml, KITTI @abstr_number .yaml or KITTI @abstr_number - @abstr_number .yaml for sequence @abstr_number to @abstr_number , @abstr_number , and @abstr_number to @abstr_number respectively. Change `PATH_TO_DATASET_FOLDER` to the uncompressed dataset folder. Change `SEQUENCE_NUMBER` to @abstr_number , @abstr_number , @abstr_number ,.., @abstr_number . @abstr_code_section 

## EuRoC Dataset

@abstr_number . Download a sequence (ASL format) from http://projects.asl.ethz.ch/datasets/doku.php?id=kmavvisualinertialdatasets

@abstr_number . Execute the following first command for V @abstr_number and V @abstr_number sequences, or the second command for MH sequences. Change PATH_TO_SEQUENCE_FOLDER and SEQUENCE according to the sequence you want to run. @abstr_code_section @abstr_code_section 

# @abstr_number . RGB-D Example

## TUM Dataset

@abstr_number . Download a sequence from http://vision.in.tum.de/data/datasets/rgbd-dataset/download and uncompress it.

@abstr_number . Associate RGB images and depth images using the python script @abstr_hyperlink . We already provide associations for some of the sequences in _Examples/RGB-D/associations/_. You can generate your own associations file executing:

@abstr_code_section 

@abstr_number . Execute the following command. Change `TUMX.yaml` to TUM @abstr_number .yaml,TUM @abstr_number .yaml or TUM @abstr_number .yaml for freiburg @abstr_number , freiburg @abstr_number and freiburg @abstr_number sequences respectively. Change `PATH_TO_SEQUENCE_FOLDER`to the uncompressed sequence folder. Change `ASSOCIATIONS_FILE` to the path to the corresponding associations file.

@abstr_code_section 

# @abstr_number . ROS Examples

### Building the nodes for mono, monoAR, stereo and RGB-D

@abstr_number . Add the path including *Examples/ROS/ORB_SLAM @abstr_number * to the ROS_PACKAGE_PATH environment variable. Open .bashrc file and add at the end the following line. Replace PATH by the folder where you cloned ORB_SLAM @abstr_number :

@abstr_code_section 

@abstr_number . Execute `build_ros.sh` script:

@abstr_code_section 

### Running Monocular Node

For a monocular input from topic `/camera/image_raw` run node ORB_SLAM @abstr_number /Mono. You will need to provide the vocabulary file and a settings file. See the monocular examples above.

@abstr_code_section 

### Running Monocular Augmented Reality Demo

This is a demo of augmented reality where you can use an interface to insert virtual cubes in planar regions of the scene. The node reads images from topic `/camera/image_raw`.

@abstr_code_section 

### Running Stereo Node

For a stereo input from topic `/camera/left/image_raw` and `/camera/right/image_raw` run node ORB_SLAM @abstr_number /Stereo. You will need to provide the vocabulary file and a settings file. If you **provide rectification matrices** (see Examples/Stereo/EuRoC.yaml example), the node will recitify the images online, **otherwise images must be pre-rectified**.

@abstr_code_section 

**Example** : Download a rosbag (e.g. V @abstr_number _ @abstr_number _easy.bag) from the EuRoC dataset (http://projects.asl.ethz.ch/datasets/doku.php?id=kmavvisualinertialdatasets). Open @abstr_number tabs on the terminal and run the following command at each tab: @abstr_code_section 

@abstr_code_section 

@abstr_code_section 

Once ORB-SLAM @abstr_number has loaded the vocabulary, press space in the rosbag tab. Enjoy!. Note: a powerful computer is required to run the most exigent sequences of this dataset.

### Running RGB_D Node

For an RGB-D input from topics `/camera/rgb/image_raw` and `/camera/depth_registered/image_raw`, run node ORB_SLAM @abstr_number /RGBD. You will need to provide the vocabulary file and a settings file. See the RGB-D example above.

@abstr_code_section 

# @abstr_number . Processing your own sequences

You will need to create a settings file with the calibration of your camera. See the settings file provided for the TUM and KITTI datasets for monocular, stereo and RGB-D cameras. We use the calibration model of OpenCV. See the examples to learn how to create a program that makes use of the ORB-SLAM @abstr_number library and how to pass images to the SLAM system. Stereo input must be synchronized and rectified. RGB-D input must be synchronized and depth registered.

# @abstr_number . SLAM and Localization Modes

You can change between the _SLAM_ and _Localization mode_ using the GUI of the map viewer.

### SLAM Mode

This is the default mode. The system runs in parallal three threads: Tracking, Local Mapping and Loop Closing. The system localizes the camera, builds new map and tries to close loops.

### Localization Mode

This mode can be used when you have a good map of your working area. In this mode the Local Mapping and Loop Closing are deactivated. The system localizes the camera in the map (which is no longer updated), using relocalization if needed. 
