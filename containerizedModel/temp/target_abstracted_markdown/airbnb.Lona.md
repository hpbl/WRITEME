@abstr_image 

Lona (Developer Preview)

  


> This project is in an early stage and lacks documentation – however, with some effort, it can be used very effectively. If you're interested in contributing or using it at your company, feel free to open a GitHub issue or get in touch with me on Twitter @abstr_hyperlink . I'm currently supporting a few early adopters.
> 
> Airbnb doesn't provide support for this project. The code and automated tests are not at the same degree of technical rigor as other Airbnb projects.

## Overview

@abstr_hyperlink 

Lona is a collection of tools for building design systems and using them to generate cross-platform UI code, Sketch files, and other artifacts.

Lona consists primarily of @abstr_number parts:

  * Lona Components - A data format, `.component`, for cross-platform components
  * Lona Studio - A GUI tool for designing `.component` files
  * Lona Compiler - A CLI tool & API for generating UI code from `.component` files



Why Lona? Read more about challenges with cross-platform design systems at scale, and how Lona solves them here.

### Lona Components

A design system is defined in JSON as a collection of:

  * Components (can be nested)
  * Colors, Text Styles, Gradients, and Shadows
  * Data Types



The specification for these files can be found in the docs.

### Lona Studio

Lona Studio provides a graphical interface for working with `.component` files.

Lona Studio is primarily for building component systems, but can also be used for:

  * Quickly mocking up new screens from existing components
  * Viewing designs with real data from JSON files or APIs
  * Experimenting with designs across multiple screen sizes
  * Automating design tasks - e.g. localizing screenshots for different languages and exporting hundreds of images
  * Working with animations (Lottie) and rendering videos from them
  * and more!



If you have Xcode installed, you can try it out by following the installation instructions.

> Wondering if this replaces Sketch? Why a native Mac App? I answer some common questions here in the FAQ.

### Lona Compiler

The Lona Compiler converts .component files to UI code for various targets.

Currently, these targets are supported:

  * iOS / macOS (Swift)
  * React DOM / React Native / React Sketchapp (JavaScript)



Support is planned for:

  * Android (Kotlin)



The target with the most features currently is Swift. However, it's still fairly rough. If you want to try it out, check out the installation instructions.

If you're looking for a sample of the generated code, check out the test cases

## Core Team

  * Created by @abstr_hyperlink 
  * Lona Compiler development by @abstr_hyperlink 



### Contributors

  * Design & development help by @abstr_hyperlink 
  * Gorgeous logo by @abstr_hyperlink 
  * Lona Studio development by @abstr_hyperlink 
  * Swift code generation help by @abstr_hyperlink 
  * Lona Compiler development by @abstr_hyperlink 


