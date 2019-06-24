# Faster R-CNN and Mask R-CNN in PyTorch @abstr_number . @abstr_number

This project aims at providing the necessary building blocks for easily creating detection and segmentation models using PyTorch @abstr_number . @abstr_number .

@abstr_image 

## Highlights

  * **PyTorch @abstr_number . @abstr_number :** RPN, Faster R-CNN and Mask R-CNN implementations that matches or exceeds Detectron accuracies
  * **Very fast** : up to _* @abstr_number x_ * faster than @abstr_hyperlink and _* @abstr_number %_ * faster than @abstr_hyperlink during training. See MODEL_ZOO.md for more details.
  * **Memory efficient:** uses roughly @abstr_number MB less GPU memory than mmdetection during training
  * **Multi-GPU training and inference**
  * **Mixed precision training:** trains faster with less GPU memory on @abstr_hyperlink .
  * **Batched inference:** can perform inference using multiple images per batch per GPU
  * **CPU support for inference:** runs on CPU in inference time. See our webcam demo for an example
  * Provides pre-trained models for almost all reference Mask R-CNN and Faster R-CNN configurations with @abstr_number x schedule.



## Webcam and Jupyter notebook demo

We provide a simple webcam demo that illustrates how you can use `maskrcnn_benchmark` for inference: @abstr_code_section 

A notebook with the demo can be found in demo/Mask_R-CNN_demo.ipynb.

## Installation

Check INSTALL.md for installation instructions.

## Model Zoo and Baselines

Pre-trained models, baselines and comparison with Detectron and mmdetection can be found in MODEL_ZOO.md

## Inference in a few lines

We provide a helper class to simplify writing inference pipelines using pre-trained models. Here is how we would do it. Run this from the `demo` folder: @abstr_code_section 

## Perform training on COCO dataset

For the following examples to work, you need to first install `maskrcnn_benchmark`.

You will also need to download the COCO dataset. We recommend to symlink the path to the coco dataset to `datasets/` as follows

We use `minival` and `valminusminival` sets from @abstr_hyperlink 

@abstr_code_section 

P.S. `COCO_ @abstr_number _train` = `COCO_ @abstr_number _train` \+ `valminusminival` , `COCO_ @abstr_number _val` = `minival`

You can also configure your own paths to the datasets. For that, all you need to do is to modify `maskrcnn_benchmark/config/paths_catalog.py` to point to the location where your dataset is stored. You can also create a new `paths_catalog.py` file which implements the same two classes, and pass it as a config argument `PATHS_CATALOG` during training.

### Single GPU training

Most of the configuration files that we provide assume that we are running on @abstr_number GPUs. In order to be able to run it on fewer GPUs, there are a few possibilities:

_* @abstr_number . Run the following without modifications_ *

@abstr_code_section This should work out of the box and is very similar to what we should do for multi-GPU training. But the drawback is that it will use much more GPU memory. The reason is that we set in the configuration files a global batch size that is divided over the number of GPUs. So if we only have a single GPU, this means that the batch size for that GPU will be @abstr_number x larger, which might lead to out-of-memory errors.

If you have a lot of memory available, this is the easiest solution.

_* @abstr_number . Modify the cfg parameters_ *

If you experience out-of-memory errors, you can reduce the global batch size. But this means that you'll also need to change the learning rate, the number of iterations and the learning rate schedule.

Here is an example for Mask R-CNN R- @abstr_number FPN with the @abstr_number x schedule: @abstr_code_section This follows the @abstr_hyperlink Note that we have multiplied the number of iterations by @abstr_number x (as well as the learning rate schedules), and we have divided the learning rate by @abstr_number x.

We also changed the batch size during testing, but that is generally not necessary because testing requires much less memory than training.

Furthermore, we set `MODEL.RPN.FPN_POST_NMS_TOP_N_TRAIN @abstr_number` as the proposals are selected for per the batch rather than per image in the default training. The value is calculated by _* @abstr_number x images-per-gpu_ *. Here we have @abstr_number images per GPU, therefore we set the number as @abstr_number x @abstr_number = @abstr_number . If we have @abstr_number images per GPU, the value should be set as @abstr_number . Note that this does not apply if `MODEL.RPN.FPN_POST_NMS_PER_BATCH` is set to `False` during training. See @abstr_hyperlink for more details.

### Multi-GPU training

We use internally `torch.distributed.launch` in order to launch multi-gpu training. This utility function from PyTorch spawns as many Python processes as the number of GPUs we want to use, and each Python process will only use a single GPU.

@abstr_code_section Note we should set `MODEL.RPN.FPN_POST_NMS_TOP_N_TRAIN` follow the rule in Single-GPU training.

### Mixed precision training

We currently use @abstr_hyperlink to add @abstr_hyperlink support. To enable, just do Single-GPU or Multi-GPU training and set `DTYPE "float @abstr_number "`.

@abstr_code_section If you want more verbose logging, set `AMP_VERBOSE True`. See @abstr_hyperlink for more details.

## Evaluation

You can test your model directly on single or multiple gpus. Here is an example for Mask R-CNN R- @abstr_number FPN with the @abstr_number x schedule on @abstr_number GPUS: @abstr_code_section To calculate mAP for each class, you can simply modify a few lines in @abstr_hyperlink . See @abstr_hyperlink for more details.

## Abstractions

For more information on some of the main abstractions in our implementation, see ABSTRACTIONS.md.

## Adding your own dataset

This implementation adds support for COCO-style datasets. But adding support for training on a new dataset can be done as follows: @abstr_code_section That's it. You can also add extra fields to the boxlist, such as segmentation masks (using `structures.segmentation_mask.SegmentationMask`), or even your own instance type.

For a full example of how the `COCODataset` is implemented, check maskrcnn_benchmark/data/datasets/coco.py.

Once you have created your dataset, it needs to be added in a couple of places: \- maskrcnn_benchmark/data/datasets/__init__.py: add it to `__all__` \- maskrcnn_benchmark/config/paths_catalog.py: `DatasetCatalog.DATASETS` and corresponding `if` clause in `DatasetCatalog.get()`

### Testing

While the aforementioned example should work for training, we leverage the cocoApi for computing the accuracies during testing. Thus, test datasets should currently follow the cocoApi for now.

To enable your dataset for testing, add a corresponding if statement in maskrcnn_benchmark/data/datasets/evaluation/__init__.py: @abstr_code_section 

## Finetuning from Detectron weights on custom datasets

Create a script `tools/trim_detectron_model.py` like @abstr_hyperlink . You can decide which keys to be removed and which keys to be kept by modifying the script.

Then you can simply point the converted model path in the config file by changing `MODEL.WEIGHT`.

For further information, please refer to @abstr_hyperlink .

## Troubleshooting

If you have issues running or compiling this code, we have compiled a list of common issues in TROUBLESHOOTING.md. If your issue is not present there, please feel free to open a new issue.

## Citations

Please consider citing this project in your publications if it helps your research. The following is a BibTeX reference. The BibTeX entry requires the `url` LaTeX package. @abstr_code_section 

## Projects using maskrcnn-benchmark

  * @abstr_hyperlink . Cheng-Yang Fu, Mykhailo Shvets, and Alexander C. Berg. Tech report, arXiv, @abstr_number . @abstr_number .
  * @abstr_hyperlink . Zhi Tian, Chunhua Shen, Hao Chen and Tong He. Tech report, arXiv, @abstr_number . @abstr_number . [[code](https://github.com/tianzhi @abstr_number /FCOS)]



## License

maskrcnn-benchmark is released under the MIT license. See LICENSE for additional details.
