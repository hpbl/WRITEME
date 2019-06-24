@abstr_image 

  
  
  
  


# vid @abstr_number vid

###  @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

Pytorch implementation for high-resolution (e.g., @abstr_number x @abstr_number ) photorealistic video-to-video translation. It can be used for turning semantic label maps into photo-realistic videos, synthesizing people talking from edge maps, or generating human motions from poses. The core of video-to-video translation is image-to-image translation. Some of our work in that space can be found in @abstr_hyperlink and @abstr_hyperlink .   
  
@abstr_hyperlink   
@abstr_hyperlink  @abstr_number , @abstr_hyperlink  @abstr_number , @abstr_hyperlink  @abstr_number , @abstr_hyperlink  @abstr_number , Andrew Tao @abstr_number , @abstr_hyperlink  @abstr_number , @abstr_hyperlink  @abstr_number    
@abstr_number NVIDIA Corporation,  @abstr_number MIT CSAIL   
In Neural Information Processing Systems ( **NeurIPS** ) @abstr_number 

## Video-to-Video Translation

  * Label-to-Streetview Results



@abstr_image @abstr_image 

  * Edge-to-Face Results



@abstr_image @abstr_image 

  * Pose-to-Body Results



@abstr_image 

  * Frame Prediction Results



@abstr_image 

## Prerequisites

  * Linux or macOS
  * Python @abstr_number 
  * NVIDIA GPU + CUDA cuDNN
  * PyTorch @abstr_number . @abstr_number 



## Getting Started

### Installation

  * Install python libraries @abstr_hyperlink and requests. @abstr_code_section 
  * If you plan to train with face datasets, please install dlib. @abstr_code_section 
  * If you plan to train with pose datasets, please install @abstr_hyperlink and/or @abstr_hyperlink .
  * Clone this repo: @abstr_code_section 
  * Docker Image If you have difficulty building the repo, a docker image can be found in the `docker` folder.



### Testing

  * Please first download example dataset by running `python scripts/download_datasets.py`.
  * Next, compile a snapshot of @abstr_hyperlink by running `python scripts/download_flownet @abstr_number .py`.
  * Cityscapes 

    * Please download the pre-trained Cityscapes model by: @abstr_code_section 
    * To test the model (`bash ./scripts/street/test_ @abstr_number .sh`): @abstr_code_section The test results will be saved in: `./results/label @abstr_number city_ @abstr_number /test_latest/`.

    * We also provide a smaller model trained with single GPU, which produces slightly worse performance at @abstr_number x @abstr_number resolution.

    * Please download the model by @abstr_code_section 
    * To test the model (`bash ./scripts/street/test_g @abstr_number _ @abstr_number .sh`): @abstr_code_section 
    * You can find more example scripts in the `scripts/street/` directory.
  * Faces

    * Please download the pre-trained model by: @abstr_code_section 
    * To test the model (`bash ./scripts/face/test_ @abstr_number .sh`): @abstr_code_section The test results will be saved in: `./results/edge @abstr_number face_ @abstr_number /test_latest/`.



### Dataset

  * Cityscapes 
    * We use the Cityscapes dataset as an example. To train a model on the full dataset, please download it from the @abstr_hyperlink (registration required).
    * We apply a pre-trained segmentation algorithm to get the corresponding semantic maps (train_A) and instance maps (train_inst).
    * Please add the obtained images to the `datasets` folder in the same way the example images are provided.
  * Face 
    * We use the @abstr_hyperlink dataset. We then use landmark detection to estimate the face keypoints, and interpolate them to get face edges.
  * Pose 
    * We use random dancing videos found on YouTube. We then apply DensePose / OpenPose to estimate the poses for each frame.



### Training with Cityscapes dataset

  * First, download the FlowNet @abstr_number checkpoint file by running `python scripts/download_models_flownet @abstr_number .py`.
  * Training with @abstr_number GPUs:

    * We adopt a coarse-to-fine approach, sequentially increasing the resolution from @abstr_number x @abstr_number , @abstr_number x @abstr_number , to @abstr_number x @abstr_number .
    * Train a model at @abstr_number x @abstr_number resolution (`bash ./scripts/street/train_ @abstr_number .sh`) @abstr_code_section 
    * Train a model at @abstr_number x @abstr_number resolution (must train @abstr_number x @abstr_number first) (`bash ./scripts/street/train_ @abstr_number .sh`): @abstr_code_section If you have TensorFlow installed, you can see TensorBoard logs in `./checkpoints/label @abstr_number city_ @abstr_number /logs` by adding `--tf_log` to the training scripts.
  * Training with a single GPU:

    * We trained our models using multiple GPUs. For convenience, we provide some sample training scripts (train_g @abstr_number _XXX.sh) for single GPU users, up to @abstr_number x @abstr_number resolution. Again a coarse-to-fine approach is adopted ( @abstr_number x @abstr_number , @abstr_number x @abstr_number , @abstr_number x @abstr_number ). Performance is not guaranteed using these scripts.
    * For example, to train a @abstr_number x @abstr_number video with a single GPU (`bash ./scripts/street/train_g @abstr_number _ @abstr_number .sh`) @abstr_code_section 
  * Training at full ( @abstr_number k x @abstr_number k) resolution

    * To train the images at full resolution ( @abstr_number x @abstr_number ) requires @abstr_number GPUs with at least @abstr_number G memory (`bash ./scripts/street/train_ @abstr_number .sh`). If only GPUs with @abstr_number G/ @abstr_number G memory are available, please use the script `./scripts/street/train_ @abstr_number _crop.sh`, which will crop the images during training. Performance is not guaranteed with this script.



### Training with face datasets

  * If you haven't, please first download example dataset by running `python scripts/download_datasets.py`.
  * Run the following command to compute face landmarks for training dataset: @abstr_code_section 
  * Run the example script (`bash ./scripts/face/train_ @abstr_number .sh`) @abstr_code_section 
  * For single GPU users, example scripts are in train_g @abstr_number _XXX.sh. These scripts are not fully tested and please use at your own discretion. If you still hit out of memory errors, try reducing `max_frames_per_gpu`.
  * More examples scripts can be found in `scripts/face/`.
  * Please refer to @abstr_hyperlink for more explanations about training flags.



### Training with pose datasets

  * If you haven't, please first download example dataset by running `python scripts/download_datasets.py`.
  * Example DensePose and OpenPose results are included. If you plan to use your own dataset, please generate these results and put them in the same way the example dataset is provided.
  * Run the example script (`bash ./scripts/pose/train_ @abstr_number p.sh`) @abstr_code_section 
  * Again, for single GPU users, example scripts are in train_g @abstr_number _XXX.sh. These scripts are not fully tested and please use at your own discretion. If you still hit out of memory errors, try reducing `max_frames_per_gpu`.
  * More examples scripts can be found in `scripts/pose/`.
  * Please refer to @abstr_hyperlink for more explanations about training flags.



### Training with your own dataset

  * If your input is a label map, please generate label maps which are one-channel whose pixel values correspond to the object labels (i.e. @abstr_number , @abstr_number ,...,N- @abstr_number , where N is the number of labels). This is because we need to generate one-hot vectors from the label maps. Please use `--label_nc N` during both training and testing.
  * If your input is not a label map, please specify `--input_nc N` where N is the number of input channels (The default is @abstr_number for RGB images).
  * The default setting for preprocessing is `scaleWidth`, which will scale the width of all training images to `opt.loadSize` ( @abstr_number ) while keeping the aspect ratio. If you want a different setting, please change it by using the `--resize_or_crop` option. For example, `scaleWidth_and_crop` first resizes the image to have width `opt.loadSize` and then does random cropping of size `(opt.fineSize, opt.fineSize)`. `crop` skips the resizing step and only performs random cropping. `scaledCrop` crops the image while retraining the original aspect ratio. `randomScaleHeight` will randomly scale the image height to be between `opt.loadSize` and `opt.fineSize`. If you don't want any preprocessing, please specify `none`, which will do nothing other than making sure the image is divisible by @abstr_number .



## More Training/Test Details

  * We generate frames in the video sequentially, where the generation of the current frame depends on previous frames. To generate the first frame for the model, there are @abstr_number different ways:   

    * @abstr_number . Using another generator which was trained on generating single images (e.g., pix @abstr_number pixHD) by specifying `--use_single_G`. This is the option we use in the test scripts.
    * @abstr_number . Using the first frame in the real sequence by specifying `--use_real_img`. 
    * @abstr_number . Forcing the model to also synthesize the first frame by specifying `--no_first_img`. This must be trained separately before inference.
  * The way we train the model is as follows: suppose we have @abstr_number GPUs, @abstr_number for generators and @abstr_number for discriminators, and we want to train @abstr_number frames. Also, assume each GPU can generate only one frame. The first GPU generates the first frame, and pass it to the next GPU, and so on. After the @abstr_number frames are generated, they are passed to the @abstr_number discriminator GPUs to compute the losses. Then the last generated frame becomes input to the next batch, and the next @abstr_number frames in the training sequence are loaded into GPUs. This is repeated @abstr_number times ( @abstr_number x @abstr_number = @abstr_number ), to train all the @abstr_number frames.
  * Some important flags: 
    * `n_gpus_gen`: the number of GPUs to use for generators (while the others are used for discriminators). We separate generators and discriminators into different GPUs since when dealing with high resolutions, even one frame cannot fit in a GPU. If the number is set to `- @abstr_number`, there is no separation and all GPUs are used for both generators and discriminators (only works for low-res images).
    * `n_frames_G`: the number of input frames to feed into the generator network; i.e., `n_frames_G - @abstr_number` is the number of frames we look into the past. the default is @abstr_number (conditioned on previous two frames).
    * `n_frames_D`: the number of frames to feed into the temporal discriminator. The default is @abstr_number .
    * `n_scales_spatial`: the number of scales in the spatial domain. We train from the coarsest scale and all the way to the finest scale. The default is @abstr_number .
    * `n_scales_temporal`: the number of scales for the temporal discriminator. The finest scale takes in the sequence in the original frame rate. The coarser scales subsample the frames by a factor of `n_frames_D` before feeding the frames into the discriminator. For example, if `n_frames_D = @abstr_number` and `n_scales_temporal = @abstr_number`, the discriminator effectively sees @abstr_number frames. The default is @abstr_number .
    * `max_frames_per_gpu`: the number of frames in one GPU during training. If you run into out of memory error, please first try to reduce this number. If your GPU memory can fit more frames, try to make this number bigger to make training faster. The default is @abstr_number .
    * `max_frames_backpropagate`: the number of frames that loss backpropagates to previous frames. For example, if this number is @abstr_number , the loss on frame n will backpropagate to frame n- @abstr_number . Increasing this number will slightly improve the performance, but also cause training to be less stable. The default is @abstr_number .
    * `n_frames_total`: the total number of frames in a sequence we want to train with. We gradually increase this number during training.
    * `niter_step`: for how many epochs do we double `n_frames_total`. The default is @abstr_number . 
    * `niter_fix_global`: if this number if not @abstr_number , only train the finest spatial scale for this number of epochs before starting to fine-tune all scales.
    * `batchSize`: the number of sequences to train at a time. We normally set batchSize to @abstr_number since often, one sequence is enough to occupy all GPUs. If you want to do batchSize > @abstr_number , currently only `batchSize == n_gpus_gen` is supported.
    * `no_first_img`: if not specified, the model will assume the first frame is given and synthesize the successive frames. If specified, the model will also try to synthesize the first frame instead.
    * `fg`: if specified, use the foreground-background separation model as stated in the paper. The foreground labels must be specified by `--fg_labels`.
    * `no_flow`: if specified, do not use flow warping and directly synthesize frames. We found this usually still works reasonably well when the background is static, while saving memory and training time.
    * `sparse_D`: if specified, only apply temporal discriminator on sparse frames in the sequence. This helps save memory while having little effect on performance.
  * For other flags, please see `options/train_options.py` and `options/base_options.py` for all the training flags; see `options/test_options.py` and `options/base_options.py` for all the test flags.

  * Additional flags for edge @abstr_number face examples:

    * `no_canny_edge`: do not use canny edges for background as input.
    * `no_dist_map`: by default, we use distrance transform on the face edge map as input. This flag will make it directly use edge maps.
  * Additional flags for pose @abstr_number body examples:

    * `densepose_only`: use only densepose results as input. Please also remember to change `input_nc` to be @abstr_number .
    * `openpose_only`: use only openpose results as input. Please also remember to change `input_nc` to be @abstr_number .
    * `add_face_disc`: add an additional discriminator that only works on the face region.
    * `remove_face_labels`: remove densepose results for face, and add noise to openpose face results, so the network can get more robust to different face shapes. This is important if you plan to do inference on half-body videos (if not, usually this flag is unnecessary).
    * `random_drop_prob`: the probability to randomly drop each pose segment during training, so the network can get more robust to missing poses at inference time. Default is @abstr_number . @abstr_number .
    * `basic_point_only`: if specified, only use basic joint keypoints for OpenPose output, without using any hand or face keypoints.



## Citation

If you find this useful for your research, please cite the following paper.

@abstr_code_section 

## Acknowledgments

We thank Karan Sapra, Fitsum Reda, and Matthieu Le for generating the segmentation maps for us. We also thank Lisa Rhee for allowing us to use her dance videos for training. We thank William S. Peebles for proofreading the paper. This code borrows heavily from @abstr_hyperlink and @abstr_hyperlink .
