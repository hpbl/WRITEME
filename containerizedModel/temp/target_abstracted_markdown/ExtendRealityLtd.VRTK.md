> ### VRTK v @abstr_number beta - Virtual Reality Toolkit
> 
> A productive toolkit for rapidly building spatial computing solutions in the Unity software.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Beta Disclaimer

VRTK v @abstr_number has not yet been released fully is still in the beta phase meaning there may still be undiscovered bugs, missing features and a lack of usable documentation. All of these things are being worked on but progress is slow as there is only one person actively working on VRTK v @abstr_number in their spare time so please be patient and respectful. You are free to use VRTK v @abstr_number in any way you wish, but if you feel you will struggle figuring stuff out for yourself without detailed documentation then it may be better off if you wait until the full release of VRTK v @abstr_number . 

## Introduction

VRTK aims to make building spatial computing solutions in the [Unity] software fast and easy for beginners as well as experienced developers.

> **Requires** the Unity software version @abstr_number . @abstr_number . @abstr_number f @abstr_number (or above).

## Getting Started

### Documentation

Visit the [VRTK.Academy] for a collection of educational content to help you get the most out of building spatial computing solutions with VRTK.

### Setting up the project

  * Create a new project in the Unity software version @abstr_number . @abstr_number . @abstr_number f @abstr_number (or above) using @abstr_number D Template or open an existing project.
  * Ensure `Virtual Reality Supported` is checked: 
    * In the Unity software select `Main Menu -> Edit -> Project Settings` to open the `Project Settings` window.
    * Select `Player` from the left hand menu in the `Project Settings` window.
    * In the `Player` settings panel expand `XR Settings`.
    * In `XR Settings` ensure the `Virtual Reality Supported` option is checked.
  * Ensure the project `Scripting Runtime Version` is set to `.NET @abstr_number .x Equivalent`: 
    * In the Unity software select `Main Menu -> Edit -> Project Settings` to open the `Project Settings` inspector.
    * Select `Player` from the left hand menu in the `Project Settings` window.
    * In the `Player` settings panel expand `Other Settings`.
    * Ensure the `Scripting Runtime Version` is set to `.NET @abstr_number .x Equivalent`.



> Note: Unity @abstr_number . @abstr_number requires additional project setup before importing VRTK.

  * Download and install the `XR Legacy Input Helpers` from the Unity Package Manager. 
    * In the Unity software select `Main Menu -> Window -> Package Manager` to open the `Package Manager` window.
    * Select `XR Legacy Input Helpers` from the `Packages` tab in the `Package Manager` window.
    * Click the `Install` button located in the bottom right of the `Package Manager` window.
    * The `XR Legacy Input Helpers` package will now download and install into the project.



### Cloning the repo

  * Navigate to the project `Assets/` directory.
  * Git clone with required submodules into the `Assets/` directory: 
    * `git clone --recurse-submodules https://github.com/ExtendRealityLtd/VRTK.git`
    * change to the newly cloned directory: `cd VRTK/`
    * `git submodule init && git submodule update`
  * The Unity software will now import and compile the new files.



### Running the example scene

  * Open the `VRTK/Samples/Farm/Scenes/ExampleScene` scene.
  * Enable `Maximize On Play` in the Unity Game view control bar to ensure no performance issues are caused by the Unity Editor overhead.
  * Play the scene in the Unity Editor (`CTRL` \+ `P`).
  * The scene should automatically play within any Unity supported XR hardware.
  * Explore the farm yard and enjoy!



## Made With VRTK

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Many games and experiences have already been made with VRTK.

Check out the [Made With VRTK] website to see the full list.

## Contributing

We're not currently in a place where accepting contributions would be helpful. But as soon as we're ready we'll let you know!

## License

Code released under the MIT License.

## Disclaimer

These materials are not sponsored by or affiliated with Unity Technologies or its affiliates. "Unity" is a trademark or registered trademark of Unity Technologies or its affiliates in the U.S. and elsewhere.
