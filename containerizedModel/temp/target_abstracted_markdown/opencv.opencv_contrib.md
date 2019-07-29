## Repository for OpenCV's extra modules

This repository is intended for development of so-called "extra" modules, contributed functionality. New modules quite often do not have stable API, and they are not well-tested. Thus, they shouldn't be released as a part of official OpenCV distribution, since the library maintains binary compatibility, and tries to provide decent performance and stability.

So, all the new modules should be developed separately, and published in the `opencv_contrib` repository at first. Later, when the module matures and gains popularity, it is moved to the central OpenCV repository, and the development team provides production quality support for this module.

### How to build OpenCV with extra modules

You can build OpenCV, so it will include the modules from this repository. Contrib modules are under constant development and it is recommended to use them alongside the master branch or latest releases of OpenCV.

Here is the CMake command for you:

@abstr_code_section 

As the result, OpenCV will be built in the `<opencv_build_directory>` with all modules from `opencv_contrib` repository. If you don't want all of the modules, use CMake's `BUILD_opencv_*` options. Like in this example:

@abstr_code_section 

If you also want to build the samples from the "samples" folder of each module, also include the "-DBUILD_EXAMPLES=ON" option.

If you prefer using the gui version of cmake (cmake-gui), then, you can add `opencv_contrib` modules within `opencv` core by doing the following:

@abstr_number . start cmake-gui

@abstr_number . select the opencv source code folder and the folder where binaries will be built (the @abstr_number upper forms of the interface)

@abstr_number . press the `configure` button. you will see all the opencv build parameters in the central interface

@abstr_number . browse the parameters and look for the form called `OPENCV_EXTRA_MODULES_PATH` (use the search form to focus rapidly on it)

@abstr_number . complete this `OPENCV_EXTRA_MODULES_PATH` by the proper pathname to the `<opencv_contrib>/modules` value using its browse button.

@abstr_number . press the `configure` button followed by the `generate` button (the first time, you will be asked which makefile style to use)

@abstr_number . build the `opencv` core with the method you chose (make and make install if you chose Unix makefile at step @abstr_number )

@abstr_number . to run, linker flags to contrib modules will need to be added to use them in your code/IDE. For example to use the aruco module, "-lopencv_aruco" flag will be added.

### Update the repository documentation

In order to keep a clean overview containing all contributed modules the following files need to be created/adapted.

@abstr_number . Update the README.md file under the modules folder. Here you add your model with a single line description.

@abstr_number . Add a README.md inside your own module folder. This README explains which functionality (seperate functions) is available, links to the corresponding samples and explains in somewhat more detail what the module is expected to do. If any extra requirements are needed to build the module without problems, add them here also.
