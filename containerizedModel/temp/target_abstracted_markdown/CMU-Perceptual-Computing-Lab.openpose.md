@abstr_image 

* * *

| |`Default Config` |`CUDA (+Python)` |`CPU (+Python)` |`OpenCL (+Python)`| `Debug` | `Unity` | | :---: | :---: | :---: | :---: | :---: | :---: | :---: | | **`Linux`** | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | **`MacOS`** | @abstr_hyperlink | | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | 

@abstr_hyperlink represents the **first real-time multi-person system to jointly detect human body, hand, facial, and foot keypoints (in total @abstr_number keypoints) on single images**.

It is **authored by @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink**. Currently, it is being **maintained by @abstr_hyperlink and @abstr_hyperlink**. In addition, OpenPose would not be possible without the @abstr_hyperlink . We would also like to thank all the people who helped OpenPose in any way. The main contributors are listed in doc/contributors.md.

@abstr_image   
Authors @abstr_hyperlink (left) and @abstr_hyperlink (right) in front of the @abstr_hyperlink 

## Features

  * **Functionality** : 
    * _* @abstr_number D real-time multi-person keypoint detection_ _:
      * @abstr_number or @abstr_number or __@abstr_number -keypoint body/foot keypoint estimation **. __Running time invariant to number of detected people**.
      * __@abstr_number x @abstr_number -keypoint hand keypoint estimation **. Currently, __running time depends** on **number of detected people**.
      * __@abstr_number -keypoint face keypoint estimation **. Currently, __running time depends** on **number of detected people**.
_
    * __@abstr_number D real-time single-person keypoint detection*:
      * @abstr_number -D triangulation from multiple single views.
      * Synchronization of Flir cameras handled.
      * Compatible with Flir/Point Grey cameras, but provided C++ demos to add your custom input.
    * **Calibration toolbox** : 
      * Easy estimation of distortion, intrinsic, and extrinsic camera parameters.
    * **Single-person tracking** for further speed up or visual smoothing.
  * **Input** : Image, video, webcam, Flir/Point Grey and IP camera. Included C++ demos to add your custom input.
  * **Output** : Basic image + keypoint display/saving (PNG, JPG, AVI, ...), keypoint saving (JSON, XML, YML, ...), and/or keypoints as array class.
  * **OS** : Ubuntu ( @abstr_number , @abstr_number ), Windows ( @abstr_number , @abstr_number ), Mac OSX, Nvidia TX @abstr_number .
  * **Others** : 
    * Available: command-line demo, C++ wrapper, and C++ API.
    * Python API.
    * @abstr_hyperlink .
    * CUDA (Nvidia GPU), OpenCL (AMD GPU), and CPU-only (no GPU) versions.
    * Training code included in the @abstr_hyperlink .



## Latest Features

  * Jan @abstr_number : @abstr_hyperlink !
  * Jan @abstr_number : Improved Python API released! Including body, face, hands, and all the functionality of the C++ API!
  * Dec @abstr_number : @abstr_hyperlink and @abstr_hyperlink !
  * Sep @abstr_number : Experimental single-person tracker for further speed up or visual smoothing!
  * Jun @abstr_number : Combined body-foot model released! @abstr_number % faster and @abstr_number % more accurate!
  * Jun @abstr_number : OpenCL/AMD graphic card version released!
  * Jun @abstr_number : Calibration toolbox released!



For further details, check all released features and release notes.

## Results

### Body and Foot Estimation

@abstr_image   
Testing the @abstr_hyperlink video sequence with OpenPose

### @abstr_number -D Reconstruction Module (Body, Foot, Face, and Hands)

@abstr_image   
Testing the @abstr_number D Reconstruction Module of OpenPose

### Body, Foot, Face, and Hands Estimation

@abstr_image @abstr_image   
Authors @abstr_hyperlink (left image) and @abstr_hyperlink (right image) testing OpenPose

### Unity Plugin

@abstr_image @abstr_image @abstr_image   
@abstr_hyperlink and @abstr_hyperlink testing their @abstr_hyperlink 

### Runtime Analysis

Inference time comparison between the @abstr_number available pose estimation libraries: OpenPose, Alpha-Pose (fast Pytorch version), and Mask R-CNN:

@abstr_image 

This analysis was performed using the same images for each algorithm and a batch size of @abstr_number . Each analysis was repeated @abstr_number times and then averaged. This was all performed on a system with a Nvidia @abstr_number Ti and CUDA @abstr_number . Megvii (Face++) and MSRA GitHub repositories were excluded because they only provide pose estimation results given a cropped person. However, they suffer the same problem than Alpha-Pose and Mask R-CNN, their runtimes grow linearly with the number of people.

## Contents

@abstr_number . Features @abstr_number . Latest Features @abstr_number . Results @abstr_number . Installation, Reinstallation and Uninstallation @abstr_number . Quick Start @abstr_number . Output @abstr_number . Speeding Up OpenPose and Benchmark @abstr_number . Foot Dataset @abstr_number . Send Us Failure Cases and Feedback! @abstr_number . Citation @abstr_number . License

## Installation, Reinstallation and Uninstallation

**Windows portable version** : Simply download and use the latest version from the @abstr_hyperlink section.

Otherwise, check doc/installation.md for instructions on how to build OpenPose from source.

## Quick Start

Most users do not need the OpenPose C++/Python API, but can simply use the OpenPose Demo:

  * **OpenPose Demo** : To easily process images/video/webcam and display/save the results. See doc/demo_overview.md. E.g., run OpenPose in a video with: @abstr_code_section 

  * **Calibration toolbox** : To easily calibrate your cameras for @abstr_number -D OpenPose or any other stereo vision task. See doc/modules/calibration_module.md.

  * **OpenPose C++ API** : If you want to read a specific input, and/or add your custom post-processing function, and/or implement your own display/saving, check the C++ API tutorial on examples/tutorial_api_cpp/ and doc/library_introduction.md. You can create your custom code on examples/user_code/ and quickly compile it with CMake when compiling the whole OpenPose project. Quickly **add your custom code** : See examples/user_code/README.md for further details.

  * **OpenPose Python API** : Analogously to the C++ API, find the tutorial for the Python API on examples/tutorial_api_python/.

  * **Adding an extra module** : Check doc/library_add_new_module.md.

  * **Standalone face or hand detector** :

    * **Face** keypoint detection **without body** keypoint detection: If you want to speed it up (but also reduce amount of detected faces), check the OpenCV-face-detector approach in doc/standalone_face_or_hand_keypoint_detector.md.
    * **Use your own face/hand detector** : You can use the hand and/or face keypoint detectors with your own face or hand detectors, rather than using the body detector. E.g., useful for camera views at which the hands are visible but not the body (OpenPose detector would fail). See doc/standalone_face_or_hand_keypoint_detector.md.



## Output

Output (format, keypoint index ordering, etc.) in doc/output.md.

## Speeding Up OpenPose and Benchmark

Check the OpenPose Benchmark as well as some hints to speed up and/or reduce the memory requirements for OpenPose on doc/speed_up_openpose.md.

## Foot Dataset

Check the @abstr_hyperlink and new @abstr_hyperlink for more information.

## Send Us Failure Cases and Feedback!

Our library is open source for research purposes, and we want to continuously improve it! So please, let us know if...

@abstr_number . ... you find videos or images where OpenPose does not seems to work well. Feel free to send them to openposecmu@gmail.com (email only for failure cases!), we will use them to improve the quality of the algorithm! @abstr_number . ... you find any bug (in functionality or speed). @abstr_number . ... you added some functionality to some class or some new Worker subclass which we might potentially incorporate. @abstr_number . ... you know how to speed up or improve any part of the library. @abstr_number . ... you have a request about possible functionality. @abstr_number . ... etc.

Just comment on GitHub or make a pull request and we will answer as soon as possible! Send us an email if you use the library to make a cool demo or YouTube video!

## Citation

Please cite these papers in your publications if it helps your research (the face keypoint detector was trained using the procedure described in [Simon et al. @abstr_number ] for hands):
    
    
    @inproceedings{cao @abstr_number openpose,
      author = {Zhe Cao and Gines Hidalgo and Tomas Simon and Shih-En Wei and Yaser Sheikh},
      booktitle = {arXiv preprint arXiv: @abstr_number . @abstr_number },
      title = {Open{P}ose: realtime multi-person  @abstr_number {D} pose estimation using {P}art {A}ffinity {F}ields},
      year = { @abstr_number }
    }
    
    @inproceedings{cao @abstr_number realtime,
      author = {Zhe Cao and Tomas Simon and Shih-En Wei and Yaser Sheikh},
      booktitle = {CVPR},
      title = {Realtime Multi-Person  @abstr_number D Pose Estimation using Part Affinity Fields},
      year = { @abstr_number }
    }
    
    @inproceedings{simon @abstr_number hand,
      author = {Tomas Simon and Hanbyul Joo and Iain Matthews and Yaser Sheikh},
      booktitle = {CVPR},
      title = {Hand Keypoint Detection in Single Images using Multiview Bootstrapping},
      year = { @abstr_number }
    }
    
    @inproceedings{wei @abstr_number cpm,
      author = {Shih-En Wei and Varun Ramakrishna and Takeo Kanade and Yaser Sheikh},
      booktitle = {CVPR},
      title = {Convolutional pose machines},
      year = { @abstr_number }
    }
    

Links to the papers:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## License

OpenPose is freely available for free non-commercial use, and may be redistributed under these conditions. Please, see the license for further details. Interested in a commercial license? Check this @abstr_hyperlink . For commercial queries, use the `Directly Contact Organization` section from the @abstr_hyperlink and also send a copy of that message to @abstr_hyperlink .
