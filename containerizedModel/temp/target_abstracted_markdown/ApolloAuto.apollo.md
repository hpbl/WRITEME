@abstr_image 

@abstr_hyperlink @abstr_hyperlink 

@abstr_code_section 

Welcome to Apollo's GitHub page!

@abstr_hyperlink is a high performance, flexible architecture which accelerates the development, testing, and deployment of Autonomous Vehicles.

For business and partnership, please visit @abstr_hyperlink .

## Table of Contents

@abstr_number . Getting Started @abstr_number . Prerequisites \- Basic Requirements \- Individual Version Requirements @abstr_number . Architecture @abstr_number . Installation @abstr_number . Documents

## Getting Started

Apollo @abstr_number . @abstr_number is loaded with new modules and features, but needs to be calibrated and configured perfectly before you take it for a spin. Please review the prerequisites and installation steps in detail to ensure that you are well equipped to build and launch Apollo. You could also check out Apollo's architecture overview for a greater understanding on Apollo's core technology and platform. 

**[Attention]** The Apollo team has decided to retire Git LFS, which might impact your development. For details, please refer to: migration guide.

Want to contribute to our code? Follow this guide.

## Prerequisites

#### Basic Requirements:

  * The vehicle equipped with by-wire system, including but not limited to brake-by-wire, steering-by-wire, throttle-by-wire and shift-by-wire (Apollo is currently tested on Lincoln MKZ)

  * A machine with a @abstr_number -core processor and @abstr_number GB memory minimum ( @abstr_number GB for Apollo @abstr_number . @abstr_number and above)

  * Ubuntu @abstr_number . @abstr_number 

  * Working knowledge of Docker

    * Please note, it is recommended that you install the versions of Apollo in the following order: _* @abstr_number . @abstr_number > whichever version you would like to test out_*. The reason behind this recommendation is that you need to confirm whether individual hardware components and modules are functioning correctly and clear various version test cases, before progressing to a higher more capable version for your safety and the safety of those around you.



#### Individual Version Requirements:

The following diagram highlights the scope and features of each Apollo release:

@abstr_image 

Apollo @abstr_number . @abstr_number : 

Apollo @abstr_number . @abstr_number also referred to as the Automatic GPS Waypoint Following, works in an enclosed venue such as a test track or parking lot. This installation is necessary to ensure that Apollo works perfectly with your vehicle. The diagram below lists the various modules in Apollo @abstr_number . @abstr_number .

@abstr_image 

**For Setup:**

  * **Hardware** :

    * Industrial PC (IPC)

    * Global Positioning System (GPS)

    * Inertial Measurement Unit (IMU)

    * Controller Area Network (CAN) card

    * Hard drive

    * GPS Antenna

    * GPS Receiver

  * **Software** :

    * Apollo Linux Kernel (based on Linux Kernel @abstr_number . @abstr_number . @abstr_number )



Apollo @abstr_number . @abstr_number : 

Apollo @abstr_number . @abstr_number is meant for fixed lane cruising. With the addition of LiDAR, vehicles with this version now have better perception of its surroundings and can better map its current position and plan its trajectory for safer maneuvering on its lane. Please note, the modules highlighted in Yellow are additions or upgrades for version @abstr_number . @abstr_number .

@abstr_image 

**For Setup:**

  * All the requirements mentioned in version @abstr_number . @abstr_number 

  * **Hardware** :

    * Light Detection and Ranging System (LiDAR)

    * ASUS GTX @abstr_number GPU-A @abstr_number G- Gaming GPU Card

  * **Software** :

    * Nvidia GPU Driver



Apollo @abstr_number . @abstr_number :

Apollo @abstr_number . @abstr_number supports vehicles autonomously driving on simple urban roads. Vehicles are able to cruise on roads safely, avoid collisions with obstacles, stop at traffic lights and change lanes if needed to reach their destination. Please note, the modules highlighted in Red are additions or upgrades for version @abstr_number . @abstr_number .

@abstr_image 

**For Setup:**

  * All the requirements mentioned in versions @abstr_number . @abstr_number and @abstr_number . @abstr_number 

  * **Hardware** :

    * Traffic Light Detection using Camera

    * Ranging System (LiDAR)

    * Radar

  * **Software** :

    * Same as @abstr_number . @abstr_number 



Apollo @abstr_number . @abstr_number :

Apollo @abstr_number . @abstr_number allows the vehicle to autonomously run on geo-fenced highways with a camera for obstacle detection. Vehicles are able to maintain lane control, cruise and avoid collisions with vehicles ahead of them. 

@abstr_code_section 

@abstr_image 

**For Setup:**

  * All the requirements mentioned in @abstr_number . @abstr_number 

  * Hardware:

    * Additional Camera
  * Software: 

    * Same as @abstr_number . @abstr_number 



Apollo @abstr_number . @abstr_number :

Apollo @abstr_number . @abstr_number 's main focus is to provide a platform for developers to build upon in a closed venue low-speed environment. Vehicles are able to maintain lane control, cruise and avoid collisions with vehicles ahead of them. 

@abstr_image 

**For Setup:**

  * Hardware:

    * Ultrasonic sensors
    * Apollo Sensor Unit
    * Apollo Hardware Development Platform with additional sensor support and flexibility
  * Software: 

    * Guardian
    * Monitor
    * Additional drivers to support Hardware



Apollo @abstr_number . @abstr_number :

Apollo @abstr_number . @abstr_number is capable of navigating through complex driving scenarios such as residential and downtown areas. The car now has @abstr_number -degree visibility, along with upgraded perception algorithms to handle the changing conditions of urban roads, making the car more secure and aware. Scenario-based planning can navigate through complex scenarios including unprotected turns and narrow streets often found in residential areas and roads with stop signs. 

@abstr_image 

**For Setup:**

  * Hardware:

    * Velodyne VLS - @abstr_number 
    * Apollo Extension Unit (AXU)
    * ARGUS FPD-Link Cameras ( @abstr_number )
    * NovAtel PwrPak @abstr_number 
    * Additional IPC
  * Software: 

    * Perception
    * Planning
    * V @abstr_number X
    * Additional drivers to support Hardware
  * Runtime Framework

    * Cyber RT



Apollo @abstr_number . @abstr_number :

Apollo @abstr_number . @abstr_number is an effort to support volume production for Geo-Fenced Autonomous Driving. The car now has @abstr_number -degree visibility, along with upgraded perception deep learning model to handle the changing conditions of complex road scenarios, making the car more secure and aware. Scenario-based planning has been enhanced to support additional scenarios like pull over and crossing bare intersections. 

@abstr_image 

**For Setup:**

  * Hardware:

    * Same as Apollo @abstr_number . @abstr_number 
  * Software: 

    * @abstr_hyperlink 
    * Perception
    * Planning
    * Control
    * Prediction
    * Map Engine
    * Simulation
    * @abstr_hyperlink 



## Architecture

  * **Hardware/ Vehicle Overview**



@abstr_image 

  * **Hardware Connection Overview**



@abstr_image 

  * **Software Overview - Navigation Mode**



@abstr_image 

## Installation

  * @abstr_hyperlink 

  * Build and Release using Docker - This step is required

  * Launch and Run Apollo




Congratulations! You have successfully built out Apollo without Hardware. If you do have a vehicle and hardware setup for a particular version, please pick the Quickstart guide most relevant to your setup:

### With Hardware:

  * Apollo @abstr_number . @abstr_number QuickStart Guide

  * Apollo @abstr_number . @abstr_number QuickStart Guide

  * Apollo @abstr_number . @abstr_number QuickStart Guide

  * Apollo @abstr_number . @abstr_number QuickStart Guide

  * Apollo @abstr_number . @abstr_number QuickStart Guide

  * Apollo @abstr_number . @abstr_number QuickStart Guide

  * Apollo @abstr_number . @abstr_number QuickStart Guide




## Documents

  * Technical Tutorial: Everything you need to know about Apollo. Written as individual versions with links to every document related to that version.

  * HowTo: Brief technical solutions to common problems that developers face during the installation and use of the Apollo platform 

  * Specs: A Deep dive into Apollo's Hardware and Software specifications (only recommended for expert level developers that have successfully installed and launched Apollo) 

  * FAQs 




## Questions

You are welcome to submit questions and bug reports as @abstr_hyperlink .

## Copyright and License

Apollo is provided under the @abstr_hyperlink .

## Disclaimer

Please refer to the Disclaimer of Apollo in @abstr_hyperlink .

## Connect with us

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Interested in our turnKey solutions or partnering with us Mail us at: apollopartner@baidu.com


