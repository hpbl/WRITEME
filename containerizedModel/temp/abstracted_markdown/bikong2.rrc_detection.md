# Accurate Single Stage Detector Using Recurrent Rolling Convolution

By @abstr_hyperlink , Xiaohao Chen, Jianbo Liu, Wenxiu Sun, Jiahao Pang, Qiong Yan, Yu-Wing Tai, Li Xu.

### Introduction

High localization accuracy is crucial in many real-world applications. We propose a novel single stage end-to-end object detection network (RRC) to produce high accuracy detection results. You can use the code to train/evaluate a network for object detection task. For more details, please refer to our paper (https://arxiv.org/abs/ @abstr_number . @abstr_number ).

| method | KITTI test _mAP_ car (moderate)| | :-------: | :-----: | | @abstr_hyperlink | @abstr_number . @abstr_number % | | @abstr_hyperlink | @abstr_number . @abstr_number % | | @abstr_hyperlink | @abstr_number . @abstr_number % | | @abstr_hyperlink | @abstr_number . @abstr_number % | | RRC (single model) | _* @abstr_number . @abstr_number %_ * | 

@abstr_hyperlink 

### Citing RRC

Please cite RRC in your publications if it helps your research:

@inproceedings{Ren @abstr_number CVPR,   
author = {Jimmy Ren and Xiaohao Chen and Jianbo Liu and Wenxiu Sun and Jiahao Pang and Qiong Yan and Yu-Wing Tai and Li Xu},   
title = {Accurate Single Stage Detector Using Recurrent Rolling Convolution},   
booktitle = {CVPR},   
year = { @abstr_number }   
}

### Contents

@abstr_number . Installation @abstr_number . Preparation @abstr_number . Train/Eval @abstr_number . Models @abstr_number . Ackonwledge

### Installation

@abstr_number . Get the code. We will call the directory that you cloned Caffe into `$CAFFE_ROOT` `Shell https://github.com/xiaohaoChen/rrc_detection.git cd rrc_detection @abstr_code_section Shell # Modify Makefile.config according to your Caffe installation. cp Makefile.config.example Makefile.config make -j @abstr_number # Make sure to include $CAFFE_ROOT/python to your PYTHONPATH. make py make test -j @abstr_number make runtest -j @abstr_number @abstr_code_section Shell # extract the labels for cars cd $CAFFE_ROOT/data/KITTI-car/ ./extract_car_label.sh @abstr_code_section Shell line @abstr_number : root_dir = '/your/path/to/KITTI/'; @abstr_code_section Shell cd $CAFFE_ROOT/data/KITTI-car/ # Create the trainval.txt, test.txt, and test_name_size.txt in data/KITTI-car/ ./create_list.sh # You can modify the parameters in create_data.sh if needed. # It will create lmdb files for trainval and test with encoded original image: # - $HOME/data/KITTI/lmdb/KITTI-car_training_lmdb/ # - $HOME/data/KITTI/lmdb/KITTI-car_testing_lmdb/ # and make soft links at data/KITTI-car/lmdb ./data/KITTI-car/create_data.sh @abstr_code_section Shell # It will create model definition files and save snapshot models in: # - $CAFFE_ROOT/models/VGGNet/KITTI/RRC_ @abstr_number x @abstr_number _kitti_car/ # and job file, log file in: # - $CAFFE_ROOT/jobs/VGGNet/KITIIT/RRC_ @abstr_number x @abstr_number _kitti_car/ # After @abstr_number k iterations, we can get the model as we said in the paper (mAP @abstr_number .*% in KITTI). python examples/car/rrc_kitti_car.py # Before run the testing script. You should modify [line @abstr_number : img_dir] to [your path to kitti testing images]. python examples/car/rrc_test.py @abstr_code_section Shell line @abstr_number : gpus = " @abstr_number , @abstr_number , @abstr_number , @abstr_number " -> gpus = " @abstr_number " line @abstr_number : batch_size = @abstr_number -> batch_size = @abstr_number @abstr_code_section Shell line @abstr_number : gpus = " @abstr_number , @abstr_number , @abstr_number , @abstr_number " -> gpus = " @abstr_number , @abstr_number " line @abstr_number : batch_size = @abstr_number -> batch_size = @abstr_number @abstr_code_section Shell # before run the script, you should modify the kitti_root at line @abstr_number . # Make sure that the work directory is caffe_root cd $caffe_root python models/VGGNet/KITTI/RRC_ @abstr_number x @abstr_number _kitti_ @abstr_number r @abstr_number b_max_size/rrc_test.py ` @abstr_number . Evaluate the most recent snapshot. For testing a model you trained, you show modify the path in `rrc_test.py`.

### Acknowledge

Thanks to Wei Liu, we have benifited a lot from his previous work @abstr_hyperlink and his @abstr_hyperlink .
