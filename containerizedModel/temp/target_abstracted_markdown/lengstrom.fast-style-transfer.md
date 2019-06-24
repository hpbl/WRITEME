## Fast Style Transfer in @abstr_hyperlink 

Add styles from famous paintings to any photo in a fraction of a second! You can even style videos!

@abstr_image @abstr_image 

It takes @abstr_number ms on a @abstr_number Titan X to style the MIT Stata Center ( @abstr_number × @abstr_number ) like Udnie, by Francis Picabia. 

Our implementation is based off of a combination of Gatys' @abstr_hyperlink , Johnson's @abstr_hyperlink , and Ulyanov's @abstr_hyperlink . 

### License

Copyright (c) @abstr_number Logan Engstrom. Contact me for commercial use (or rather any use that is not academic research) (email: engstrom at my university's domain dot edu). Free for research use, as long as proper attribution is given and this copyright notice is retained.

## Video Stylization

Here we transformed every frame in a video, then combined the results. @abstr_hyperlink The style here is Udnie, as above.

@abstr_hyperlink 

See how to generate these videos here!

## Image Stylization

We added styles from various paintings to a photo of Chicago. Click on thumbnails to see full applied style images.

@abstr_image 

@abstr_image @abstr_image   
@abstr_image @abstr_image   
@abstr_image @abstr_image 

## Implementation Details

Our implementation uses TensorFlow to train a fast style transfer network. We use roughly the same transformation network as described in Johnson, except that batch normalization is replaced with Ulyanov's instance normalization, and the scaling/offset of the output `tanh` layer is slightly different. We use a loss function close to the one described in Gatys, using VGG @abstr_number instead of VGG @abstr_number and typically using "shallower" layers than in Johnson's implementation (e.g. we use `relu @abstr_number _ @abstr_number` rather than `relu @abstr_number _ @abstr_number`). Empirically, this results in larger scale style features in transformations.

## Documentation

### Training Style Transfer Networks

Use `style.py` to train a new style transfer network. Run `python style.py` to view all the possible parameters. Training takes @abstr_number - @abstr_number hours on a Maxwell Titan X. More detailed documentation here. **Before you run this, you should run`setup.sh`**. Example usage:
    
    
    python style.py --style path/to/style/img.jpg \
      --checkpoint-dir checkpoint/path \
      --test path/to/test/img.jpg \
      --test-dir path/to/test/dir \
      --content-weight  @abstr_number . @abstr_number e @abstr_number  \
      --checkpoint-iterations  @abstr_number  \
      --batch-size  @abstr_number
    

### Evaluating Style Transfer Networks

Use `evaluate.py` to evaluate a style transfer network. Run `python evaluate.py` to view all the possible parameters. Evaluation takes @abstr_number ms per frame (when batch size is @abstr_number ) on a Maxwell Titan X. More detailed documentation here. Takes several seconds per frame on a CPU. **Models for evaluation are @abstr_hyperlink**. Example usage:
    
    
    python evaluate.py --checkpoint path/to/style/model.ckpt \
      --in-path dir/of/test/imgs/ \
      --out-path dir/for/results/
    

### Stylizing Video

Use `transform_video.py` to transfer style into a video. Run `python transform_video.py` to view all the possible parameters. Requires `ffmpeg`. More detailed documentation here. Example usage:
    
    
    python transform_video.py --in-path path/to/input/vid.mp @abstr_number  \
      --checkpoint path/to/style/model.ckpt \
      --out-path out/video.mp @abstr_number  \
      --device /gpu: @abstr_number  \
      --batch-size  @abstr_number
    

### Requirements

You will need the following to run the above: \- TensorFlow @abstr_number . @abstr_number . @abstr_number \- Python @abstr_number . @abstr_number . @abstr_number , Pillow @abstr_number . @abstr_number . @abstr_number , scipy @abstr_number . @abstr_number . @abstr_number , numpy @abstr_number . @abstr_number . @abstr_number \- If you want to train (and don't want to wait for @abstr_number months): \- A decent GPU \- All the required NVIDIA software to run TF on a GPU (cuda, etc) \- ffmpeg @abstr_number . @abstr_number . @abstr_number if you want to stylize video

### Citation

@abstr_code_section 

### Attributions/Thanks

  * This project could not have happened without the advice (and GPU access) given by @abstr_hyperlink . 
    * The project also borrowed some code from Anish's @abstr_hyperlink 
  * Some readme/docs formatting was borrowed from Justin Johnson's @abstr_hyperlink 
  * The image of the Stata Center at the very beginning of the README was taken by @abstr_hyperlink 



### Related Work

  * Michael Ramos ported this network @abstr_hyperlink 


