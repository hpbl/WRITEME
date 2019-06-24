# Trained image classification models for Keras

**THIS REPOSITORY IS DEPRECATED. USE THE MODULE`keras.applications` INSTEAD.**

Pull requests will not be reviewed nor merged. Direct any PRs to `keras.applications`. Issues are not monitored either.

* * *

This repository contains code for the following Keras models:

  * VGG @abstr_number 
  * VGG @abstr_number 
  * ResNet @abstr_number 
  * Inception v @abstr_number 
  * CRNN for music tagging



All architectures are compatible with both TensorFlow and Theano, and upon instantiation the models will be built according to the image dimension ordering set in your Keras configuration file at `~/.keras/keras.json`. For instance, if you have set `image_dim_ordering=tf`, then any model loaded from this repository will get built according to the TensorFlow dimension ordering convention, "Width-Height-Depth".

Pre-trained weights can be automatically loaded upon instantiation (`weights='imagenet'` argument in model constructor for all image models, `weights='msd'` for the music tagging model). Weights are automatically downloaded if necessary, and cached locally in `~/.keras/models/`.

## Examples

### Classify images

@abstr_code_section 

### Extract features from images

@abstr_code_section 

### Extract features from an arbitrary intermediate layer

@abstr_code_section 

## References

  * @abstr_hyperlink - please cite this paper if you use the VGG models in your work.
  * @abstr_hyperlink - please cite this paper if you use the ResNet model in your work.
  * @abstr_hyperlink - please cite this paper if you use the Inception v @abstr_number model in your work.
  * @abstr_hyperlink 



Additionally, don't forget to @abstr_hyperlink if you use these models.

## License

  * All code in this repository is under the MIT license as specified by the LICENSE file.
  * The ResNet @abstr_number weights are ported from the ones @abstr_hyperlink under the @abstr_hyperlink .
  * The VGG @abstr_number and VGG @abstr_number weights are ported from the ones @abstr_hyperlink under the @abstr_hyperlink .
  * The Inception v @abstr_number weights are trained by ourselves and are released under the MIT license.


