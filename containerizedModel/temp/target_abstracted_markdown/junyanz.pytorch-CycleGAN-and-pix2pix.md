@abstr_image 

  
  
  


# CycleGAN and pix @abstr_number pix in PyTorch

We provide PyTorch implementations for both unpaired and paired image-to-image translation.

The code was written by @abstr_hyperlink and @abstr_hyperlink , and supported by @abstr_hyperlink .

This PyTorch implementation produces results comparable to or better than our original Torch software. If you would like to reproduce the same results as in the papers, check out the original @abstr_hyperlink and @abstr_hyperlink code

**Note** : The current software works well with PyTorch @abstr_number . @abstr_number +. Check out the older @abstr_hyperlink that supports PyTorch @abstr_number . @abstr_number - @abstr_number . @abstr_number .

You may find useful information in training/test tips and frequently asked questions. To implement custom models and datasets, check out our templates. To help users better understand and adapt our codebase, we provide an overview of the code structure of this repository.

**CycleGAN: @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink** @abstr_image 

**Pix @abstr_number pix: @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink**

@abstr_image 

**@abstr_hyperlink | @abstr_hyperlink | by @abstr_hyperlink**

@abstr_image 

If you use this code for your research, please cite:

Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks.  
@abstr_hyperlink *, @abstr_hyperlink *, @abstr_hyperlink , @abstr_hyperlink . In ICCV @abstr_number . (* equal contributions) @abstr_hyperlink 

Image-to-Image Translation with Conditional Adversarial Networks.  
@abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink . In CVPR @abstr_number . @abstr_hyperlink 

## Talks and Course

pix @abstr_number pix slides: @abstr_hyperlink | @abstr_hyperlink , CycleGAN slides: @abstr_hyperlink | @abstr_hyperlink 

CycleGAN course assignment @abstr_hyperlink and @abstr_hyperlink designed by Prof. @abstr_hyperlink for @abstr_hyperlink "Intro to Neural Networks and Machine Learning" at University of Toronto. Please contact the instructor if you would like to adopt it in your course.

## Other implementations

### CycleGAN

@abstr_hyperlink (by Harry Yang), @abstr_hyperlink (by Archit Rathore), @abstr_hyperlink (by Van Huy), @abstr_hyperlink (by Xiaowei Hu), @abstr_hyperlink (by Zhenliang He), @abstr_hyperlink (by luoxier), @abstr_hyperlink (by Yanghua Jin), @abstr_hyperlink (by yunjey), @abstr_hyperlink (by Ldpe @abstr_number G), @abstr_hyperlink (by tjwei), @abstr_hyperlink (by Simon Karlsson) 

### pix @abstr_number pix

@abstr_hyperlink (by Christopher Hesse), @abstr_hyperlink (by Eyyüb Sariu), @abstr_hyperlink (by Dat Tran), @abstr_hyperlink (by Arthur Juliani), @abstr_hyperlink (by Yuchen Tian), @abstr_hyperlink (by mattya), @abstr_hyperlink (by tjwei), @abstr_hyperlink (by taey @abstr_number ) 

## Prerequisites

  * Linux or macOS
  * Python @abstr_number 
  * CPU or NVIDIA GPU + CUDA CuDNN



## Getting Started

### Installation

  * Clone this repo: @abstr_code_section 

  * Install @abstr_hyperlink @abstr_number . @abstr_number + and other dependencies (e.g., torchvision, @abstr_hyperlink and @abstr_hyperlink ).

    * For pip users, please type the command `pip install -r requirements.txt`.
    * For Conda users, we provide a installation script `./scripts/conda_deps.sh`. Alternatively, you can create a new Conda environment using `conda env create -f environment.yml`.
    * For Docker users, we provide the pre-built Docker image and Dockerfile. Please refer to our Docker page.



### CycleGAN train/test

  * Download a CycleGAN dataset (e.g. maps): @abstr_code_section 
  * To view training results and loss plots, run `python -m visdom.server` and click the URL http://localhost: @abstr_number .
  * Train a model: @abstr_code_section To see more intermediate results, check out `./checkpoints/maps_cyclegan/web/index.html`.
  * Test the model: @abstr_code_section 
  * The test results will be saved to a html file here: `./results/maps_cyclegan/latest_test/index.html`.



### pix @abstr_number pix train/test

  * Download a pix @abstr_number pix dataset (e.g.facades): @abstr_code_section 
  * Train a model: @abstr_code_section 
  * To view training results and loss plots, run `python -m visdom.server` and click the URL http://localhost: @abstr_number . To see more intermediate results, check out `./checkpoints/facades_pix @abstr_number pix/web/index.html`.

  * Test the model (`bash ./scripts/test_pix @abstr_number pix.sh`): @abstr_code_section 

  * The test results will be saved to a html file here: `./results/facades_pix @abstr_number pix/test_latest/index.html`. You can find more scripts at `scripts` directory.
  * To train and test pix @abstr_number pix-based colorization models, please add `--model colorization` and `--dataset_mode colorization`. See our training @abstr_hyperlink for more details.



### Apply a pre-trained model (CycleGAN)

  * You can download a pretrained model (e.g. horse @abstr_number zebra) with the following script: @abstr_code_section 
  * The pretrained model is saved at `./checkpoints/{name}_pretrained/latest_net_G.pth`. Check @abstr_hyperlink for all the available CycleGAN models.
  * To test the model, you also need to download the horse @abstr_number zebra dataset: @abstr_code_section 

  * Then generate the results using @abstr_code_section 

  * The option `--model test` is used for generating results of CycleGAN only for one side. This option will automatically set `--dataset_mode single`, which only loads the images from one set. On the contrary, using `--model cycle_gan` requires loading and generating results in both directions, which is sometimes unnecessary. The results will be saved at `./results/`. Use `--results_dir {directory_path_to_save_result}` to specify the results directory.

  * For your own experiments, you might want to specify `--netG`, `--norm`, `--no_dropout` to match the generator architecture of the trained model.




### Apply a pre-trained model (pix @abstr_number pix)

Download a pre-trained model with `./scripts/download_pix @abstr_number pix_model.sh`.

  * Check @abstr_hyperlink for all the available pix @abstr_number pix models. For example, if you would like to download label @abstr_number photo model on the Facades dataset, @abstr_code_section 
  * Download the pix @abstr_number pix facades datasets: @abstr_code_section 
  * Then generate the results using @abstr_code_section 
  * Note that we specified `--direction BtoA` as Facades dataset's A to B direction is photos to labels.

  * If you would like to apply a pre-trained model to a collection of input images (rather than image pairs), please use `--model test` option. See `./scripts/test_single.sh` for how to apply a model to Facade label maps (stored in the directory `facades/testB`).

  * See a list of currently available models at `./scripts/download_pix @abstr_number pix_model.sh`




## Docker

We provide the pre-built Docker image and Dockerfile that can run this code repo. See docker.

## Datasets

Download pix @abstr_number pix/CycleGAN datasets and create your own datasets.

## Training/Test Tips

Best practice for training and testing your models.

## Frequently Asked Questions

Before you post a new question, please first look at the above Q & A and existing GitHub issues.

## Custom Model and Dataset

If you plan to implement custom models and dataset for your new applications, we provide a dataset template and a model template as a starting point.

## Code structure

To help users better understand and use our code, we briefly overview the functionality and implementation of each package and each module.

## Pull Request

You are always welcome to contribute to this repository by sending a @abstr_hyperlink . Please run `flake @abstr_number --ignore E @abstr_number .` and `python ./scripts/test_before_push.py` before you commit the code. Please also update the code structure overview accordingly if you add or remove files.

## Citation

If you use this code for your research, please cite our papers. @abstr_code_section 

## Related Projects

**@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink**

## Cat Paper Collection

If you love cats, and love reading cool graphics, vision, and learning papers, please check out the Cat Paper @abstr_hyperlink .

## Acknowledgments

Our code is inspired by @abstr_hyperlink .
