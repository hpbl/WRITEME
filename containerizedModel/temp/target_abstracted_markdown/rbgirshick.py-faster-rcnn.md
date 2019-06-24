# py-faster-rcnn has been deprecated. Please see @abstr_hyperlink , which includes an implementation of @abstr_hyperlink .

### Disclaimer

The official Faster R-CNN code (written in MATLAB) is available @abstr_hyperlink . If your goal is to reproduce the results in our NIPS @abstr_number paper, please use the @abstr_hyperlink .

This repository contains a Python _reimplementation_ of the MATLAB code. This Python implementation is built on a fork of @abstr_hyperlink . There are slight differences between the two implementations. In particular, this Python port \- is ~ @abstr_number % slower at test-time, because some operations execute on the CPU in Python layers (e.g., @abstr_number ms / image vs. @abstr_number ms / image for VGG @abstr_number ) \- gives similar, but not exactly the same, mAP as the MATLAB version \- is _not compatible_ with models trained using the MATLAB code due to the minor implementation differences \- **includes approximate joint training** that is @abstr_number . @abstr_number x faster than alternating optimization (for VGG @abstr_number ) -- see these @abstr_hyperlink for more information

# _Faster_ R-CNN: Towards Real-Time Object Detection with Region Proposal Networks

By Shaoqing Ren, Kaiming He, Ross Girshick, Jian Sun (Microsoft Research)

This Python implementation contains contributions from Sean Bell (Cornell) written during an MSR internship.

Please see the official @abstr_hyperlink for more details.

Faster R-CNN was initially described in an @abstr_hyperlink and was subsequently published in NIPS @abstr_number .

### License

Faster R-CNN is released under the MIT License (refer to the LICENSE file for details).

### Citing Faster R-CNN

If you find Faster R-CNN useful in your research, please consider citing:
    
    
    @inproceedings{renNIPS @abstr_number fasterrcnn,
        Author = {Shaoqing Ren and Kaiming He and Ross Girshick and Jian Sun},
        Title = {Faster {R-CNN}: Towards Real-Time Object Detection
                 with Region Proposal Networks},
        Booktitle = {Advances in Neural Information Processing Systems ({NIPS})},
        Year = { @abstr_number }
    }
    

### Contents

@abstr_number . Requirements: software @abstr_number . Requirements: hardware @abstr_number . Basic installation @abstr_number . Demo @abstr_number . Beyond the demo: training and testing @abstr_number . Usage

### Requirements: software

**NOTE** If you are having issues compiling and you are using a recent version of CUDA/cuDNN, please consult @abstr_hyperlink for a workaround

@abstr_number . Requirements for `Caffe` and `pycaffe` (see: @abstr_hyperlink )

**Note:** Caffe _must_ be built with support for Python layers!

@abstr_code_section 

You can download my @abstr_hyperlink for reference. @abstr_number . Python packages you might not have: `cython`, `python-opencv`, `easydict` @abstr_number . [Optional] MATLAB is required for **official** PASCAL VOC evaluation only. The code now includes unofficial Python evaluation code.

### Requirements: hardware

@abstr_number . For training smaller networks (ZF, VGG_CNN_M_ @abstr_number ) a good GPU (e.g., Titan, K @abstr_number , K @abstr_number , ...) with at least @abstr_number G of memory suffices @abstr_number . For training Fast R-CNN with VGG @abstr_number , you'll need a K @abstr_number (~ @abstr_number G of memory) @abstr_number . For training the end-to-end version of Faster R-CNN with VGG @abstr_number , @abstr_number G of GPU memory is sufficient (using CUDNN)

### Installation (sufficient for the demo)

@abstr_number . Clone the Faster R-CNN repository ```Shell # Make sure to clone with --recursive git clone --recursive https://github.com/rbgirshick/py-faster-rcnn.git @abstr_code_section Shell git submodule update --init --recursive @abstr_code_section Shell cd $FRCN_ROOT/lib make @abstr_code_section Shell cd $FRCN_ROOT/caffe-fast-rcnn # Now follow the Caffe installation instructions here: # http://caffe.berkeleyvision.org/installation.html
    
    
    # If you're experienced with Caffe and have all of the requirements installed
    # and your Makefile.config in place, then simply do:
    make -j @abstr_number  && make pycaffe
     @abstr_code_section Shell
    cd $FRCN_ROOT
    ./data/scripts/fetch_faster_rcnn_models.sh
     @abstr_code_section Shell
    

cd $FRCN_ROOT ./tools/demo.py @abstr_code_section Shell wget http://host.robots.ox.ac.uk/pascal/VOC/voc @abstr_number /VOCtrainval_ @abstr_number -Nov- @abstr_number .tar wget http://host.robots.ox.ac.uk/pascal/VOC/voc @abstr_number /VOCtest_ @abstr_number -Nov- @abstr_number .tar wget http://host.robots.ox.ac.uk/pascal/VOC/voc @abstr_number /VOCdevkit_ @abstr_number -Jun- @abstr_number .tar @abstr_code_section Shell tar xvf VOCtrainval_ @abstr_number -Nov- @abstr_number .tar tar xvf VOCtest_ @abstr_number -Nov- @abstr_number .tar tar xvf VOCdevkit_ @abstr_number -Jun- @abstr_number .tar @abstr_code_section Shell $VOCdevkit/ # development kit $VOCdevkit/VOCcode/ # VOC utility code $VOCdevkit/VOC @abstr_number # image sets, annotations, etc. # ... and several other directories ... @abstr_code_section Shell cd $FRCN_ROOT/data ln -s $VOCdevkit VOCdevkit @abstr_number @abstr_code_section Shell cd $FRCN_ROOT ./data/scripts/fetch_imagenet_models.sh @abstr_code_section Shell cd $FRCN_ROOT ./experiments/scripts/faster_rcnn_alt_opt.sh [GPU_ID] [NET] [--set ...]

# GPU_ID is the GPU you want to train on

# NET in {ZF, VGG_CNN_M_ @abstr_number , VGG @abstr_number } is the network arch to use

# \--set ... allows you to specify fast_rcnn.config options, e.g.

# \--set EXP_DIR seed_rng @abstr_number RNG_SEED @abstr_number

@abstr_code_section Shell cd $FRCN_ROOT ./experiments/scripts/faster_rcnn_end @abstr_number end.sh [GPU_ID] [NET] [--set ...]

# GPU_ID is the GPU you want to train on

# NET in {ZF, VGG_CNN_M_ @abstr_number , VGG @abstr_number } is the network arch to use

# \--set ... allows you to specify fast_rcnn.config options, e.g.

# \--set EXP_DIR seed_rng @abstr_number RNG_SEED @abstr_number

@abstr_code_section output/// @abstr_code_section output//// ```
