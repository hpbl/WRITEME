# Detectron

Detectron is Facebook AI Research's software system that implements state-of-the-art object detection algorithms, including @abstr_hyperlink . It is written in Python and powered by the @abstr_hyperlink deep learning framework.

At FAIR, Detectron has enabled numerous research projects, including: @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink .

@abstr_image 

Example Mask R-CNN output.

## Introduction

The goal of Detectron is to provide a high-quality, high-performance codebase for object detection _research_. It is designed to be flexible in order to support rapid implementation and evaluation of novel research. Detectron includes implementations of the following object detection algorithms:

  * @abstr_hyperlink -- *Marr Prize at ICCV @abstr_number *
  * @abstr_hyperlink -- *Best Student Paper Award at ICCV @abstr_number *
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



using the following backbone network architectures:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (with ResNet/ResNeXt)
  * @abstr_hyperlink 



Additional backbone architectures may be easily implemented. For more details about these models, please see References below.

## Update

  * @abstr_number / @abstr_number : Support Group Normalization - see GN/README.md



## License

Detectron is released under the @abstr_hyperlink . See the @abstr_hyperlink file for additional details.

## Citing Detectron

If you use Detectron in your research or wish to refer to the baseline results published in the Model Zoo, please use the following BibTeX entry.

@abstr_code_section 

## Model Zoo and Baselines

We provide a large set of baseline results and trained models available for download in the Detectron Model Zoo.

## Installation

Please find installation instructions for Caffe @abstr_number and Detectron in INSTALL.md.

## Quick Start: Using Detectron

After installation, please see GETTING_STARTED.md for brief tutorials covering inference and training with Detectron.

## Getting Help

To start, please check the troubleshooting section of our installation instructions as well as our FAQ. If you couldn't find help there, try searching our GitHub issues. We intend the issues page to be a forum in which the community collectively troubleshoots problems.

If bugs are found, **we appreciate pull requests** (including adding Q &A's to `FAQ.md` and improving our installation instructions and troubleshooting documents). Please see CONTRIBUTING.md for more information about contributing to Detectron.

## References

  * @abstr_hyperlink . Ilija Radosavovic, Piotr Dollár, Ross Girshick, Georgia Gkioxari, and Kaiming He. Tech report, arXiv, Dec. @abstr_number .
  * @abstr_hyperlink . Ronghang Hu, Piotr Dollár, Kaiming He, Trevor Darrell, and Ross Girshick. Tech report, arXiv, Nov. @abstr_number .
  * @abstr_hyperlink . Xiaolong Wang, Ross Girshick, Abhinav Gupta, and Kaiming He. Tech report, arXiv, Nov. @abstr_number .
  * @abstr_hyperlink . Kaiming He, Georgia Gkioxari, Piotr Dollár, and Ross Girshick. IEEE International Conference on Computer Vision (ICCV), @abstr_number .
  * @abstr_hyperlink . Tsung-Yi Lin, Priya Goyal, Ross Girshick, Kaiming He, and Piotr Dollár. IEEE International Conference on Computer Vision (ICCV), @abstr_number .
  * @abstr_hyperlink . Priya Goyal, Piotr Dollár, Ross Girshick, Pieter Noordhuis, Lukasz Wesolowski, Aapo Kyrola, Andrew Tulloch, Yangqing Jia, and Kaiming He. Tech report, arXiv, June @abstr_number .
  * @abstr_hyperlink . Georgia Gkioxari, Ross Girshick, Piotr Dollár, and Kaiming He. Tech report, arXiv, Apr. @abstr_number .
  * @abstr_hyperlink . Tsung-Yi Lin, Piotr Dollár, Ross Girshick, Kaiming He, Bharath Hariharan, and Serge Belongie. IEEE Conference on Computer Vision and Pattern Recognition (CVPR), @abstr_number .
  * @abstr_hyperlink . Saining Xie, Ross Girshick, Piotr Dollár, Zhuowen Tu, and Kaiming He. IEEE Conference on Computer Vision and Pattern Recognition (CVPR), @abstr_number .
  * @abstr_hyperlink . Jifeng Dai, Yi Li, Kaiming He, and Jian Sun. Conference on Neural Information Processing Systems (NIPS), @abstr_number .
  * @abstr_hyperlink . Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. IEEE Conference on Computer Vision and Pattern Recognition (CVPR), @abstr_number .
  * @abstr_hyperlink Shaoqing Ren, Kaiming He, Ross Girshick, and Jian Sun. Conference on Neural Information Processing Systems (NIPS), @abstr_number .
  * @abstr_hyperlink . Ross Girshick. IEEE International Conference on Computer Vision (ICCV), @abstr_number .


