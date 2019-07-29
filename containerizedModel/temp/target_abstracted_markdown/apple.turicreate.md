Quick Links: Installation | Documentation | @abstr_hyperlink | @abstr_hyperlink 

# Turi Create

Check out our talks at @abstr_hyperlink and at @abstr_hyperlink !

Turi Create simplifies the development of custom machine learning models. You don't have to be a machine learning expert to add recommendations, object detection, image classification, image similarity or activity classification to your app.

  * **Easy-to-use:** Focus on tasks instead of algorithms
  * **Visual:** Built-in, streaming visualizations to explore your data
  * **Flexible:** Supports text, images, audio, video and sensor data
  * **Fast and Scalable:** Work with large datasets on a single machine
  * **Ready To Deploy:** Export models to Core ML for use in iOS, macOS, watchOS, and tvOS apps



With Turi Create, you can accomplish many common ML tasks:

| ML Task | Description | |:------------------------:|:--------------------------------:| | @abstr_hyperlink | Personalize choices for users | | @abstr_hyperlink | Label images | | @abstr_hyperlink | Recognize Pencil/Touch Drawings and Gestures | | @abstr_hyperlink | Classify sounds | | @abstr_hyperlink | Recognize objects within images | | @abstr_hyperlink | Recognize @abstr_number D objects within images using a single example | | @abstr_hyperlink | Stylize images | | @abstr_hyperlink | Detect an activity using sensors | | @abstr_hyperlink | Find similar images | | @abstr_hyperlink | Predict a label | | @abstr_hyperlink | Predict numeric values | | @abstr_hyperlink | Group similar datapoints together| | @abstr_hyperlink | Analyze sentiment of messages |

## Example: Image classifier with a few lines of code

If you want your app to recognize specific objects in images, you can build your own model with just a few lines of code:

@abstr_code_section 

It's easy to use the resulting model in an @abstr_hyperlink :

@abstr_image 

## Supported Platforms

Turi Create supports:

  * macOS @abstr_number . @abstr_number +
  * Linux (with glibc @abstr_number . @abstr_number +)
  * Windows @abstr_number (via WSL)



## System Requirements

Turi Create requires:

  * Python @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number 
  * x @abstr_number _ @abstr_number architecture
  * At least @abstr_number GB of RAM



## Installation

For detailed instructions for different varieties of Linux see LINUX_INSTALL.md. For common installation issues see INSTALL_ISSUES.md.

We recommend using virtualenv to use, install, or build Turi Create. 

@abstr_code_section 

The method for installing _Turi Create_ follows the @abstr_hyperlink . To create and activate a Python virtual environment called `venv` follow these steps:

@abstr_code_section Alternatively, if you are using @abstr_hyperlink , you may use its virtual environment: @abstr_code_section 

To install `Turi Create` within your virtual environment: @abstr_code_section 

## Version @abstr_number . @abstr_number (New)

Turi Create @abstr_number . @abstr_number includes: * GPU Acceleration on Macs for: * Image Classification (macOS @abstr_number . @abstr_number +) * Image Similarity (macOS @abstr_number . @abstr_number +) * Object Detection (macOS @abstr_number . @abstr_number +) * Activity Classification (macOS @abstr_number . @abstr_number +) * New Task: Style Transfer * Recommender model deployment * Vision Feature Print model deployment

## Documentation

The package @abstr_hyperlink and @abstr_hyperlink contain more details on how to use Turi Create.

## GPU Support

Turi Create **does not require a GPU** , but certain models can be accelerated @abstr_number - @abstr_number x when utilizing a GPU. 

Turi Create automatically utilizes Mac GPUs for the following tasks: * Image Classification (macOS @abstr_number . @abstr_number +) * Image Similarity (macOS @abstr_number . @abstr_number +) * Object Detection (macOS @abstr_number . @abstr_number +, discrete GPU only) * Activity Classification (macOS @abstr_number . @abstr_number +, discrete GPU only)

For linux GPU support, see LinuxGPU.md.

## Building From Source

If you want to build Turi Create from source, see BUILD.md.

## Contributing

Prior to contributing, please review CONTRIBUTING.md and do not provide any contributions unless you agree with the terms and conditions set forth in CONTRIBUTING.md.

We want the Turi Create community to be as welcoming and inclusive as possible, and have adopted a Code of Conduct that we expect all community members, including contributors, to read and observe.
