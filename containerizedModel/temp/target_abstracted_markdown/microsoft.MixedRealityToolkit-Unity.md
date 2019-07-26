@abstr_image 

# What is the Mixed Reality Toolkit

MRTK is a Microsoft driven open source project. 

MRTK-Unity provides a set of foundational components and features to accelerate MR app development in Unity. The latest Release of MRTK (V @abstr_number ) supports HoloLens/HoloLens @abstr_number , Windows Mixed Reality, and OpenVR platforms.

  * Provides the **basic building blocks for unity development on HoloLens, Windows Mixed Reality, and OpenVR**.
  * Showcases UX best practices with **UI controls that match Windows Mixed Reality and HoloLens Shell**. 
  * **Enables rapid prototyping** via in-editor simulation that allows you to see changes immediately.
  * Is **extensible**. Provides devs ability to swap out core components and extend the framework.
  * **Supports a wide range of platforms** , including 
    * Microsoft HoloLens
    * Microsoft HoloLens @abstr_number 
    * Windows Mixed Reality headsets
    * OpenVR headsets (HTC Vive / Oculus Rift)



# Build Status

| Branch | CI Status | Docs Status | |---|---|---| | `mrtk_development` | @abstr_hyperlink | @abstr_hyperlink 

# Required Software

| @abstr_hyperlink @abstr_hyperlink | @abstr_hyperlink @abstr_hyperlink | @abstr_hyperlink @abstr_hyperlink | @abstr_hyperlink @abstr_hyperlink | | :--- | :--- | :--- | :--- | | To build apps with MRTK v @abstr_number , you need the Windows @abstr_number May @abstr_number Update SDK.   
To run apps for Windows Mixed Reality immersive headsets, you need the Windows @abstr_number Fall Creators Update. | The Unity @abstr_number D engine provides support for building mixed reality projects in Windows @abstr_number | Visual Studio is used for code editing, deploying and building UWP app packages | The Emulators allow you test your app without the device in a simulated environment |

# Feature Areas

| @abstr_image Input System  
| @abstr_image Hand Tracking (HoloLens @abstr_number ) | @abstr_image Eye Tracking (HoloLens @abstr_number ) | @abstr_image Voice Commanding | @abstr_image Gaze + Select (HoloLens) | @abstr_image Teleportation  
| | :--- | :--- | :--- | :--- | :--- | :--- | | @abstr_image UI Controls  
| @abstr_image Solver and Interactions | @abstr_image Controller Visualization | @abstr_image Spatial Understanding | @abstr_image Diagnostic Tool  
| @abstr_image MRTK Standard Shader |

# Getting Started with MRTK

Please check out the @abstr_hyperlink 

### More Documentation

Find this readme, other documentation articles and the MRTK api reference on our @abstr_hyperlink . 

# UI and Interaction Building blocks

| Button | Bounding Box | Manipulation Handler | |:--- | :--- | :--- | | A button control which supports various input methods including HoloLens @abstr_number 's articulated hand | Standard UI for manipulating objects in @abstr_number D space | Script for manipulating objects with one or two hands | | Slate | System Keyboard | Interactable | | @abstr_number D style plane which supports scrolling with articulated hand input | Example script of using the system keyboard in Unity | A script for making objects interactable with visual states and theme support | | Solver | Object Collection | Tooltip | | Various object positioning behaviors such as tag-along, body-lock, constant view size and surface magnetism | Script for lay out an array of objects in a three-dimensional shape | Annotation UI with flexible anchor/pivot system which can be used for labeling motion controllers and object. | | App Bar | Pointers | Fingertip Visualization | | UI for Bounding Box's manual activation | Learn about various types of pointers | Visual affordance on the fingertip which improves the confidence for the direct interaction | | Slider | MRTK Standard Shader | Hand Joint Chaser | | Slider UI for adjusting values supporting direct hand tracking interaction | MRTK's Standard shader supports various Fluent design elements with performance | Demonstrates how to use Solver to attach objects to the hand joints | | Eye Tracking: Target Selection | Eye Tracking: Navigation | Eye Tracking: Heat Map | | Combine eyes, voice and hand input to quickly and effortlessly select holograms across your scene | Learn how to auto scroll text or fluently zoom into focused content based on what you are looking at| Examples for logging, loading and visualizing what users have been looking at in your app |

# Example Scenes

Explore MRTK's various types of interactions and UI controls in this example scene.

You can find other example scenes under Assets/MixedRealityToolkit.Examples/Demos folder.

# Engage with the Community

  * Join the conversation around MRTK on @abstr_hyperlink .

  * Ask questions about using MRTK on @abstr_hyperlink using the **MRTK** tag.

  * Search for @abstr_hyperlink or file a @abstr_hyperlink if you find something broken in MRTK code.

  * Join our weekly community shiproom to hear directly from the feature team. (link coming soon) 

  * Deep dive into project plan and learn how you can contribute to MRTK in our @abstr_hyperlink . 

  * For issues related to Windows Mixed Reality that aren't directly related to the MRTK, check out the @abstr_hyperlink .




This project has adopted the @abstr_hyperlink . For more information see the @abstr_hyperlink or contact @abstr_hyperlink with any additional questions or comments.

# Useful resources on the Mixed Reality Dev Center

| @abstr_image @abstr_hyperlink | @abstr_image @abstr_hyperlink | @abstr_image @abstr_hyperlink | @abstr_image @abstr_hyperlink | | :--------------------- | :----------------- | :------------------ | :------------------------ | | Learn to build mixed reality experiences for HoloLens and immersive headsets (VR). | Get design guides. Build user interface. Learn interactions and input. | Get development guides. Learn the technology. Understand the science. | Get your app ready for others and consider creating a @abstr_number D launcher. |

# Useful resouces on Azure

| @abstr_image   
@abstr_hyperlink | @abstr_image @abstr_hyperlink | @abstr_image @abstr_hyperlink |   
| :------------------------| :--------------------- | :---------------------- | | Spatial Anchors is a cross-platform service that allows you to create Mixed Reality experiences using objects that persist their location across devices over time.| Discover and integrate Azure powered speech capabilities like speech to text, speaker recognition or speech translation into your application.| Identify and analyze your image or video content using Vision Services like computer vision, face detection, emotion recognition or video indexer. | 

### Learn more about MRTK Project

You can find our planning material on @abstr_hyperlink under Project Management Section. You can always see the items the team is actively working on in the Iteration Plan issue. 

### How to Contribute

View the @abstr_hyperlink wiki page for the most up to date instructions on contributing to the Mixed Reality Toolkit!

### For details on the different branches used in the Mixed Reality Toolkit repositories, check this @abstr_hyperlink .
