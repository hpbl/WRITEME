# Welcome to AirSim

AirSim is a simulator for drones, cars and more, built on @abstr_hyperlink (we now also have an experimental @abstr_hyperlink release). It is open-source, cross platform, and supports hardware-in-loop with popular flight controllers such as PX @abstr_number for physically and visually realistic simulations. It is developed as an Unreal plugin that can simply be dropped into any Unreal environment. Similarly, we have an experimental release for a Unity plugin. 

Our goal is to develop AirSim as a platform for AI research to experiment with deep learning, computer vision and reinforcement learning algorithms for autonomous vehicles. For this purpose, AirSim also exposes APIs to retrieve data and control vehicles in a platform independent way.

**Check out the quick @abstr_number . @abstr_number minute demo**

Drones in AirSim

@abstr_hyperlink 

Cars in AirSim

@abstr_hyperlink 

## What's New

  * A ROS wrapper for multirotors is available. See @abstr_hyperlink for the ROS API, and @abstr_hyperlink for tutorials. 
  * @abstr_hyperlink 
  * Added support for @abstr_hyperlink 
  * Added Weather Effects and @abstr_hyperlink 
  * Added @abstr_hyperlink 
  * An experimental integration of @abstr_hyperlink is now available. Learn more in @abstr_hyperlink .
  * @abstr_hyperlink : Forest, Plains (windmill farm), TalkingHeads (human head simulation), TrapCam (animal detection via camera)
  * Highly efficient @abstr_hyperlink to turn off main screen rendering so you can capture images at high rate
  * @abstr_hyperlink 
  * Case Study: @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



For complete list of changes, view our Changelog

## How to Get It

### Windows

  * @abstr_hyperlink 
  * @abstr_hyperlink 



### Linux

  * @abstr_hyperlink 



@abstr_hyperlink 

## How to Use It

### Documentation

View our @abstr_hyperlink on all aspects of AirSim.

### Manual drive

If you have remote control (RC) as shown below, you can manually control the drone in the simulator. For cars, you can use arrow keys to drive manually.

@abstr_hyperlink 

@abstr_image 

@abstr_image 

### Programmatic control

AirSim exposes APIs so you can interact with the vehicle in the simulation programmatically. You can use these APIs to retrieve images, get state, control the vehicle and so on. The APIs are exposed through the RPC, and are accessible via a variety of languages, including C++, Python, C# and Java.

These APIs are also available as part of a separate, independent cross-platform library, so you can deploy them on a companion computer on your vehicle. This way you can write and test your code in the simulator, and later execute it on the real vehicles. Transfer learning and related research is one of our focus areas.

Note that you can use @abstr_hyperlink to specify the default vehicle or the new @abstr_hyperlink so you don't get prompted each time you start AirSim.

@abstr_hyperlink 

### Gathering training data

There are two ways you can generate training data from AirSim for deep learning. The easiest way is to simply press the record button in the lower right corner. This will start writing pose and images for each frame. The data logging code is pretty simple and you can modify it to your heart's content.

@abstr_image 

A better way to generate training data exactly the way you want is by accessing the APIs. This allows you to be in full control of how, what, where and when you want to log data. 

### Computer Vision mode

Yet another way to use AirSim is the so-called "Computer Vision" mode. In this mode, you don't have vehicles or physics. You can use the keyboard to move around the scene, or use APIs to position available cameras in any arbitrary pose, and collect images such as depth, disparity, surface normals or object segmentation. 

@abstr_hyperlink 

### Weather Effects

Press F @abstr_number to see various options available for weather effects. You can also control the weather using @abstr_hyperlink . Press F @abstr_number to see other options available.

@abstr_image 

## Tutorials

  * @abstr_hyperlink by Chris Lovett
  * @abstr_hyperlink by Chris Lovett
  * @abstr_hyperlink by Jim Piavis
  * @abstr_hyperlink by Ashish Kapoor
  * @abstr_hyperlink by Microsoft Deep Learning and Robotics Garage Chapter
  * @abstr_hyperlink by Simon Levy and WLU team



## Participate

### Paper

More technical details are available in @abstr_hyperlink . Please cite this as: @abstr_code_section 

### Contribute

Please take a look at @abstr_hyperlink if you are looking for areas to contribute to.

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Contribution Guidelines
  * @abstr_hyperlink 



### Who is Using AirSim?

We are maintaining a @abstr_hyperlink of a few projects, people and groups that we are aware of. If you would like to be featured in this list please @abstr_hyperlink .

## Contact

Join the AirSim group on @abstr_hyperlink to stay up to date or ask any questions.

## FAQ

If you run into problems, check the @abstr_hyperlink and feel free to post issues in the @abstr_hyperlink repository.

## License

This project is released under the MIT License. Please review the License file for more details.
