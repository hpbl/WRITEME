#  @abstr_image 

Sonnet is a library built on top of TensorFlow for building complex neural networks.

## Installation

Sonnet can be installed from pip, with or without GPU support.

This installation is compatible with Linux/Mac OS X and Python @abstr_number . @abstr_number and @abstr_number .{ @abstr_number , @abstr_number , @abstr_number }. The version of TensorFlow installed must be >= @abstr_number . @abstr_number . Installing Sonnet supports the @abstr_hyperlink of TensorFlow, as well as the @abstr_hyperlink .

To install sonnet, run:

@abstr_code_section 

Sonnet will work with both the CPU and GPU version of tensorflow, but to allow for that it does not list Tensorflow as a requirement, so you need to install Tensorflow separately if you haven't already done so.

## Usage Example

The following code constructs a Linear module and connects it to multiple inputs. The variables (i.e., the weights and biases of the linear transformation) are automatically shared.

@abstr_code_section 

# Documentation

Check out the full documentation page @abstr_hyperlink .
