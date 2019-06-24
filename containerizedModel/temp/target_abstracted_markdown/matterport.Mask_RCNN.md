# Mask R-CNN for Object Detection and Segmentation

This is an implementation of @abstr_hyperlink on Python @abstr_number , Keras, and TensorFlow. The model generates bounding boxes and segmentation masks for each instance of an object in the image. It's based on Feature Pyramid Network (FPN) and a ResNet @abstr_number backbone.

@abstr_image 

The repository includes: * Source code of Mask R-CNN built on FPN and ResNet @abstr_number . * Training code for MS COCO * Pre-trained weights for MS COCO * Jupyter notebooks to visualize the detection pipeline at every step * ParallelModel class for multi-GPU training * Evaluation on MS COCO metrics (AP) * Example of training on your own dataset

The code is documented and designed to be easy to extend. If you use it in your research, please consider citing this repository (bibtex below). If you work on @abstr_number D vision, you might find our recently released @abstr_hyperlink dataset useful as well. This dataset was created from @abstr_number D-reconstructed spaces captured by our customers who agreed to make them publicly available for academic use. You can see more examples @abstr_hyperlink .

# Getting Started

  * demo.ipynb Is the easiest way to start. It shows an example of using a model pre-trained on MS COCO to segment objects in your own images. It includes code to run object detection and instance segmentation on arbitrary images.

  * train_shapes.ipynb shows how to train Mask R-CNN on your own dataset. This notebook introduces a toy dataset (Shapes) to demonstrate training on a new dataset.

  * (model.py, utils.py, config.py): These files contain the main Mask RCNN implementation. 

  * inspect_data.ipynb. This notebook visualizes the different pre-processing steps to prepare the training data.

  * inspect_model.ipynb This notebook goes in depth into the steps performed to detect and segment objects. It provides visualizations of every step of the pipeline.

  * inspect_weights.ipynb This notebooks inspects the weights of a trained model and looks for anomalies and odd patterns.




# Step by Step Detection

To help with debugging and understanding the model, there are @abstr_number notebooks (inspect_data.ipynb, inspect_model.ipynb, inspect_weights.ipynb) that provide a lot of visualizations and allow running the model step by step to inspect the output at each point. Here are a few examples:

## @abstr_number . Anchor sorting and filtering

Visualizes every step of the first stage Region Proposal Network and displays positive and negative anchors along with anchor box refinement. @abstr_image 

## @abstr_number . Bounding Box Refinement

This is an example of final detection boxes (dotted lines) and the refinement applied to them (solid lines) in the second stage. @abstr_image 

## @abstr_number . Mask Generation

Examples of generated masks. These then get scaled and placed on the image in the right location.

@abstr_image 

## @abstr_number .Layer activations

Often it's useful to inspect the activations at different layers to look for signs of trouble (all zeros or random noise).

@abstr_image 

## @abstr_number . Weight Histograms

Another useful debugging tool is to inspect the weight histograms. These are included in the inspect_weights.ipynb notebook.

@abstr_image 

## @abstr_number . Logging to TensorBoard

TensorBoard is another great debugging and visualization tool. The model is configured to log losses and save weights at the end of every epoch.

@abstr_image 

## @abstr_number . Composing the different pieces into a final result

@abstr_image 

# Training on MS COCO

We're providing pre-trained weights for MS COCO to make it easier to start. You can use those weights as a starting point to train your own variation on the network. Training and evaluation code is in `samples/coco/coco.py`. You can import this module in Jupyter notebook (see the provided notebooks for examples) or you can run it directly from the command line as such:

@abstr_code_section 

You can also run the COCO evaluation code with: @abstr_code_section 

The training schedule, learning rate, and other parameters should be set in `samples/coco/coco.py`.

# Training on Your Own Dataset

Start by reading this @abstr_hyperlink . It covers the process starting from annotating images to training to using the results in a sample application.

In summary, to train the model on your own dataset you'll need to extend two classes:

`Config` This class contains the default configuration. Subclass it and modify the attributes you need to change.

`Dataset` This class provides a consistent way to work with any dataset. It allows you to use new datasets for training without having to change the code of the model. It also supports loading multiple datasets at the same time, which is useful if the objects you want to detect are not all available in one dataset. 

See examples in `samples/shapes/train_shapes.ipynb`, `samples/coco/coco.py`, `samples/balloon/balloon.py`, and `samples/nucleus/nucleus.py`.

## Differences from the Official Paper

This implementation follows the Mask RCNN paper for the most part, but there are a few cases where we deviated in favor of code simplicity and generalization. These are some of the differences we're aware of. If you encounter other differences, please do let us know.

  * **Image Resizing:** To support training multiple images per batch we resize all images to the same size. For example, @abstr_number x @abstr_number px on MS COCO. We preserve the aspect ratio, so if an image is not square we pad it with zeros. In the paper the resizing is done such that the smallest side is @abstr_number px and the largest is trimmed at @abstr_number px.
  * **Bounding Boxes** : Some datasets provide bounding boxes and some provide masks only. To support training on multiple datasets we opted to ignore the bounding boxes that come with the dataset and generate them on the fly instead. We pick the smallest box that encapsulates all the pixels of the mask as the bounding box. This simplifies the implementation and also makes it easy to apply image augmentations that would otherwise be harder to apply to bounding boxes, such as image rotation.

To validate this approach, we compared our computed bounding boxes to those provided by the COCO dataset. We found that ~ @abstr_number % of bounding boxes differed by @abstr_number px or more, ~ @abstr_number . @abstr_number % differed by @abstr_number px or more, and only @abstr_number . @abstr_number % differed by @abstr_number px or more.

  * **Learning Rate:** The paper uses a learning rate of @abstr_number . @abstr_number , but we found that to be too high, and often causes the weights to explode, especially when using a small batch size. It might be related to differences between how Caffe and TensorFlow compute gradients (sum vs mean across batches and GPUs). Or, maybe the official model uses gradient clipping to avoid this issue. We do use gradient clipping, but don't set it too aggressively. We found that smaller learning rates converge faster anyway so we go with that.




## Citation

Use this bibtex to cite this repository: @abstr_code_section 

## Contributing

Contributions to this repository are welcome. Examples of things you can contribute: * Speed Improvements. Like re-writing some Python code in TensorFlow or Cython. * Training on other datasets. * Accuracy Improvements. * Visualizations and examples.

You can also @abstr_hyperlink and help us build even more projects like this one.

## Requirements

Python @abstr_number . @abstr_number , TensorFlow @abstr_number . @abstr_number , Keras @abstr_number . @abstr_number . @abstr_number and other common packages listed in `requirements.txt`.

### MS COCO Requirements:

To train or test on MS COCO, you'll also need: * pycocotools (installation instructions below) * @abstr_hyperlink * Download the @abstr_number K @abstr_hyperlink and the @abstr_number K @abstr_hyperlink subsets. More details in the original @abstr_hyperlink .

If you use Docker, the code has been verified to work on @abstr_hyperlink .

## Installation

@abstr_number . Clone this repository @abstr_number . Install dependencies @abstr_code_section @abstr_number . Run setup from the repository root directory @abstr_code_section   
@abstr_number . Download pre-trained COCO weights (mask_rcnn_coco.h @abstr_number ) from the @abstr_hyperlink . @abstr_number . (Optional) To train or test on MS COCO install `pycocotools` from one of these repos. They are forks of the original pycocotools with fixes for Python @abstr_number and Windows (the official repo doesn't seem to be active anymore).
    
    
    * Linux: https://github.com/waleedka/coco
    * Windows: https://github.com/philferriere/cocoapi.
    You must have the Visual C++  @abstr_number  build tools on your path (see the repo for additional details)
    

# Projects Using this Model

If you extend this model to other datasets or build projects that use it, we'd love to hear from you.

###  @abstr_hyperlink by Karol Majek.

@abstr_hyperlink 

###  @abstr_hyperlink : Improve OpenStreetMap by adding baseball, soccer, tennis, football, and basketball fields.

@abstr_image 

###  @abstr_hyperlink . A blog post explaining how to train this model from scratch and use it to implement a color splash effect.

@abstr_image 

### Segmenting Nuclei in Microscopy Images. Built for the @abstr_hyperlink 

Code is in the `samples/nucleus` directory.

@abstr_image 

###  @abstr_hyperlink by the NUS Control & Mechatronics Lab.

@abstr_image 

###  @abstr_hyperlink 

A proof of concept project by @abstr_hyperlink , in collaboration with Nvidia and Miami-Dade County. Along with a great write up and code by Dmitry Kudinov, Daniel Hedges, and Omar Maher. @abstr_image 

###  @abstr_hyperlink 

A project from Japan to automatically track cells in a microfluidics platform. Paper is pending, but the source code is released.

@abstr_image @abstr_image 

###  @abstr_hyperlink 

Research project to understand the complex processes between degradations in the Arctic and climate change. By Weixing Zhang, Chandi Witharana, Anna Liljedahl, and Mikhail Kanevskiy. @abstr_image 

###  @abstr_hyperlink 

A computer vision class project by HU Shiyu to apply the color pop effect on people with beautiful results. @abstr_image 

###  @abstr_hyperlink : Convert satellite imagery to maps for use by humanitarian organisations.

@abstr_image 

###  @abstr_hyperlink to generate vector masks from geospatial imagery. Based on a @abstr_hyperlink by Ondřej Pešek.

@abstr_image 
