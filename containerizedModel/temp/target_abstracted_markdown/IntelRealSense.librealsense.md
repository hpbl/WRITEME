@abstr_image   
  


* * *

**CI State** : @abstr_hyperlink 

* * *

## Overview

_*Intel® RealSense™ SDK @abstr_number . @abstr_number *_ is a cross-platform library for Intel® RealSense™ depth cameras (D @abstr_number series and the SR @abstr_number ) and the T @abstr_number tracking camera.

> :pushpin: For other Intel® RealSense™ devices (F @abstr_number , R @abstr_number , LR @abstr_number and ZR @abstr_number ), please refer to the @abstr_hyperlink .

The SDK allows depth and color streaming, and provides intrinsic and extrinsic calibration information. The library also offers synthetic streams (pointcloud, depth aligned to color and vise-versa), and a built-in support for record and playback of streaming sessions.

Developer kits containing the necessary hardware to use this library are available for purchase at @abstr_hyperlink . Information about the Intel® RealSense™ technology at @abstr_hyperlink 

> :open_file_folder: Don't have access to a RealSense camera? Check-out sample data

## Download and Install

  * **Download** \- The latest releases including the Intel RealSense SDK, Viewer and Depth Quality tools are available at: @abstr_hyperlink . Please check the @abstr_hyperlink for the supported platforms, new features and capabilities, known issues, how to upgrade the Firmware and more.

  * **Install** \- You can also install or build from source the SDK (on Linux \ Windows \ Mac OS \ Android), connect your D @abstr_number depth camera and you are ready to start writing your first application.




> **Support & Issues**: If you need product support (e.g. ask a question about / are having problems with the device), please check the @abstr_hyperlink section. If not covered there, please search our @abstr_hyperlink page, @abstr_hyperlink and @abstr_hyperlink sites. If you still cannot find an answer to your question, please @abstr_hyperlink .

## What’s included in the SDK:

| What | Description | Download link| | ------- | ------- | ------- | | **Intel® RealSense™ Viewer** | With this application, you can quickly access your Intel® RealSense™ Depth Camera to view the depth stream, visualize point clouds, record and playback streams, configure your camera settings, modify advanced controls, enable depth visualization and post processing and much more. | @abstr_hyperlink | | **Depth Quality Tool** | This application allows you to test the camera’s depth quality, including: standard deviation from plane fit, normalized RMS – the subpixel accuracy, distance accuracy and fill rate. You should be able to easily get and interpret several of the depth quality metrics and record and save the data for offline analysis. | @abstr_hyperlink | | **Debug Tools** | Device enumeration, FW logger, etc as can be seen at the tools directory | Included in @abstr_hyperlink | | **Code Samples** |These simple examples demonstrate how to easily use the SDK to include code snippets that access the camera into your applications. Check some of the C++ examples including capture, pointcloud and more and basic C examples | Included in @abstr_hyperlink | | **@abstr_hyperlink** | Python, C#/.NET, Node.js API, as well as integration with the following @abstr_number rd-party technologies: @abstr_hyperlink , @abstr_hyperlink , LabVIEW, OpenCV, PCL, Unity, Matlab, OpenNI, UnrealEngine @abstr_number and more to come. | |

## Ready to Hack!

Our library offers a high level API for using Intel RealSense depth cameras (in addition to lower level ones). The following snippet shows how to start streaming frames and extracting the depth value of a pixel:

@abstr_code_section For more information on the library, please follow our examples, and read the documentation to learn more.

## Contributing

In order to contribute to Intel RealSense SDK, please follow our contribution guidelines.

## License

This project is licensed under the Apache License, Version @abstr_number . @abstr_number . Copyright @abstr_number Intel Corporation
