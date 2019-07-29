@abstr_hyperlink @abstr_hyperlink 

# Bullet Physics SDK

This is the official C++ source code repository of the Bullet Physics SDK: real-time collision detection and multi-physics simulation for VR, games, visual effects, robotics, machine learning etc.

New in Bullet @abstr_number . @abstr_number : pybullet Python bindings, improved support for robotics and VR. Use pip install pybullet and see @abstr_hyperlink .

The Bullet @abstr_number API will stay default and up-to-date while slowly moving to a new API. The steps towards a new API is in a nutshell:

@abstr_number . The old Bullet @abstr_number demos are being merged into the examples/ExampleBrowser @abstr_number . A new physics-engine agnostic C-API is created, see examples/SharedMemory/PhysicsClientC_API.h @abstr_number . Python bindings in pybullet are on top of this C-API, see examples/pybullet @abstr_number . A Virtual Reality sandbox using openvr for HTC Vive and Oculus Rift is available @abstr_number . The OpenCL examples in the ExampleBrowser can be enabled using --enable_experimental_opencl

You can still use svn or svn externals using the github git repository: use svn co https://github.com/bulletphysics/bullet @abstr_number /trunk

## Requirements for Bullet @abstr_number

A C++ compiler for C++ @abstr_number . The library is tested on Windows, Linux, Mac OSX, iOS, Android, but should likely work on any platform with C++ compiler. Some optional demos require OpenGL @abstr_number or OpenGL @abstr_number , there are some non-graphical demos and unit tests too.

## Contributors and Coding Style information

https://docs.google.com/document/d/ @abstr_number u @abstr_number vyzPtrVoVhYqQOGNWUgjRbfwfCdIts_NzmvgiJ @abstr_number /edit

## Requirements for experimental OpenCL GPGPU support

The entire collision detection and rigid body dynamics can be executed on the GPU.

A high-end desktop GPU, such as an AMD Radeon @abstr_number or NVIDIA GTX @abstr_number or better. We succesfully tested the software under Windows, Linux and Mac OSX. The software currently doesn't work on OpenCL CPU devices. It might run on a laptop GPU but performance will not likely be very good. Note that often an OpenCL drivers fails to compile a kernel. Some unit tests exist to track down the issue, but more work is required to cover all OpenCL kernels.

## License

All source code files are licensed under the permissive zlib license (http://opensource.org/licenses/Zlib) unless marked differently in a particular folder/file.

## Build instructions for Bullet using premake. You can also use cmake instead.

**Windows**

Click on build_visual_studio_vr_pybullet_double.bat and open build @abstr_number /vs @abstr_number / @abstr_number _Bullet @abstr_number Solution.sln When asked, convert the projects to a newer version of Visual Studio. If you installed Python in the C:\ root directory, the batch file should find it automatically. Otherwise, edit this batch file to choose where Python include/lib directories are located.

**Windows Virtual Reality sandbox for HTC Vive and Oculus Rift**

Build and run the App_SharedMemoryPhysics_VR project, preferably in Release/optimized build. You can connect from Python pybullet to the sandbox using:

@abstr_code_section 

**Linux and Mac OSX gnu make**

Make sure cmake is installed (sudo apt-get install cmake, brew install cmake, or https://cmake.org)

In a terminal type:
    
    
    ./build_cmake_pybullet_double.sh
    

This script will invoke cmake and build in the build_cmake directory. You can find pybullet in Bullet/examples/pybullet. The BulletExampleBrowser binary will be in Bullet/examples/ExampleBrowser.

You can also build Bullet using premake. There are premake executables in the build @abstr_number folder. Depending on your system (Linux @abstr_number bit, @abstr_number bit or Mac OSX) use one of the following lines Using premake: @abstr_code_section Then @abstr_code_section 

Note that on Linux, you need to use cmake to build pybullet, since the compiler has issues of mixing shared and static libraries.

**Mac OSX Xcode**

Click on build @abstr_number /xcode @abstr_number .command or in a terminal window execute
    
    
    ./premake_osx xcode @abstr_number
    

## Usage

The App_ExampleBrowser executables will be located in the bin folder. You can just run it though a terminal/command prompt, or by clicking it.

@abstr_code_section 

You can use mouse picking to grab objects. When holding the ALT or CONTROL key, you have Maya style camera mouse controls. Press F @abstr_number to create a series of screenshots. Hit ESCAPE to exit the demo app.

Check out the docs folder and the Bullet physics forums for further information.
