# Face Recognition using Tensorflow @abstr_hyperlink 

This is a TensorFlow implementation of the face recognizer described in the paper @abstr_hyperlink . The project also uses ideas from the paper @abstr_hyperlink from the @abstr_hyperlink at Oxford.

## Compatibility

The code is tested using Tensorflow r @abstr_number . @abstr_number under Ubuntu @abstr_number . @abstr_number with Python @abstr_number . @abstr_number and Python @abstr_number . @abstr_number . The test cases can be found @abstr_hyperlink and the results can be found @abstr_hyperlink .

## News

| Date | Update | |----------|--------| | @abstr_number - @abstr_number - @abstr_number | Added new models trained on Casia-WebFace and VGGFace @abstr_number (see below). Note that the models uses fixed image standardization (see @abstr_hyperlink ). | | @abstr_number - @abstr_number - @abstr_number | Added a new, more flexible input pipeline as well as a bunch of minor updates. | | @abstr_number - @abstr_number - @abstr_number | Removed a bunch of older non-slim models. Moved the last bottleneck layer into the respective models. Corrected normalization of Center Loss. | | @abstr_number - @abstr_number - @abstr_number | Added code to @abstr_hyperlink . Renamed facenet_train.py to train_tripletloss.py and facenet_train_classifier.py to train_softmax.py. | | @abstr_number - @abstr_number - @abstr_number | Added pretrained models that generate @abstr_number -dimensional embeddings.| | @abstr_number - @abstr_number - @abstr_number | Updated to Tensorflow r @abstr_number . @abstr_number . Added Continuous Integration using Travis-CI.| | @abstr_number - @abstr_number - @abstr_number | Added models where only trainable variables has been stored in the checkpoint. These are therefore significantly smaller. | | @abstr_number - @abstr_number - @abstr_number | Added a model trained on a subset of the MS-Celeb- @abstr_number M dataset. The LFW accuracy of this model is around @abstr_number . @abstr_number . | | @abstr_number &# @abstr_number ; @abstr_number &# @abstr_number ; @abstr_number | Updated to run with Tensorflow r @abstr_number . @abstr_number . Not sure if it runs with older versions of Tensorflow though. |

## Pre-trained models

| Model name | LFW accuracy | Training dataset | Architecture | |-----------------|--------------|------------------|-------------| | @abstr_hyperlink | @abstr_number . @abstr_number | CASIA-WebFace | @abstr_hyperlink | | @abstr_hyperlink | @abstr_number . @abstr_number | VGGFace @abstr_number | @abstr_hyperlink |

NOTE: If you use any of the models, please do not forget to give proper credit to those providing the training dataset as well.

## Inspiration

The code is heavily inspired by the @abstr_hyperlink implementation.

## Training data

The @abstr_hyperlink dataset has been used for training. This training set consists of total of @abstr_number @abstr_number images over @abstr_number @abstr_number identities after face detection. Some performance improvement has been seen if the dataset has been filtered before training. Some more information about how this was done will come later. The best performing model has been trained on the @abstr_hyperlink dataset consisting of ~ @abstr_number . @abstr_number M faces and ~ @abstr_number classes.

## Pre-processing

### Face alignment using MTCNN

One problem with the above approach seems to be that the Dlib face detector misses some of the hard examples (partial occlusion, silhouettes, etc). This makes the training set too "easy" which causes the model to perform worse on other benchmarks. To solve this, other face landmark detectors has been tested. One face landmark detector that has proven to work very well in this setting is the @abstr_hyperlink . A Matlab/Caffe implementation can be found @abstr_hyperlink and this has been used for face alignment with very good results. A Python/Tensorflow implementation of MTCNN can be found @abstr_hyperlink . This implementation does not give identical results to the Matlab/Caffe implementation but the performance is very similar.

## Running training

Currently, the best results are achieved by training the model using softmax loss. Details on how to train a model using softmax loss on the CASIA-WebFace dataset can be found on the page @abstr_hyperlink and .

## Pre-trained models

### Inception-ResNet-v @abstr_number model

A couple of pretrained models are provided. They are trained using softmax loss with the Inception-Resnet-v @abstr_number model. The datasets has been aligned using @abstr_hyperlink .

## Performance

The accuracy on LFW for the model @abstr_hyperlink is @abstr_number . @abstr_number +- @abstr_number . @abstr_number . A description of how to run the test can be found on the page @abstr_hyperlink . Note that the input images to the model need to be standardized using fixed image standardization (use the option `--use_fixed_image_standardization` when running e.g. `validate_on_lfw.py`).
