## Neural Artistic Style in Python

Implementation of @abstr_hyperlink . A method to transfer the style of one image to the subject of another image.

### Requirements

  * @abstr_hyperlink , Deep learning in Python.
  * @abstr_hyperlink with @abstr_hyperlink , CUDA-accelerated NumPy.
  * @abstr_hyperlink , choose *imagenet-vgg-verydeep- @abstr_number *.



### Examples

Execute
    
    
    python neural_artistic_style.py --subject images/tuebingen.jpg --style images/starry_night.jpg
    

The two inputs are

Subject: @abstr_image Style: @abstr_image 

The output becomes:

@abstr_image 

We can also choose a (younger version) of HM the Queen of Denmark as subject and paint her using different styles. Click the images to see the full size.

**Subject**

@abstr_image 

**Styles**

@abstr_image @abstr_image @abstr_image @abstr_image @abstr_image 

**Outputs**

@abstr_image @abstr_image @abstr_image @abstr_image @abstr_image 

### Help

List command line options with
    
    
    python neural_artistic_style.py --help
    
