# NormFace

NormFace: L @abstr_number HyperSphere Embedding for Face Verification

https://arxiv.org/abs/ @abstr_number . @abstr_number 

| Baseline Model | Original Accuracy | Finetune Using Normalization | | ------------------- |:-----------------:|:----------------------------:| | @abstr_hyperlink | @abstr_number . @abstr_number %* | @abstr_number . @abstr_number % | | @abstr_hyperlink | @abstr_number . @abstr_number % | @abstr_number . @abstr_number % |

* It is @abstr_number . @abstr_number % on @abstr_hyperlink . After applying the mirror face trick, it becomes @abstr_number . @abstr_number %.

# Requirements

@abstr_number . My Caffe (https://github.com/happynear/caffe-windows/tree/ms). It also works on Linux. Anyway, if you want to use your own Caffe, please transplant the `inner_product_layer`, `inner_distance_layer`, `normalize_layer`, `general_contrastive_layer`, `flip_layer`, `softmax_layer` and `accuracy_layer` to your Caffe. Since there are too many layers to transplant, I suggest you to use my Caffe directly:) @abstr_number . Matlab to draw some figures. @abstr_number . GPU with CUDA support. @abstr_number . MTCNN face and facial landmark detector(https://github.com/kpzhang @abstr_number /MTCNN_face_detection_alignment). @abstr_number . Baseline model such as @abstr_hyperlink or @abstr_hyperlink or your own model trained by softmax loss. I don't know whether my loss helps or not if your model is trained by other loss functions. You may have a try. I believe it will be effective if there is no normalization term in your model.

# Train

@abstr_number . The dataset used in this paper is @abstr_hyperlink . Note that there are @abstr_number identities overlap between CASIA-Webface and LFW. They are `@abstr_number`, `@abstr_number` and `@abstr_number`. For fair evaluation, it is recommended to remove them from CAISA-Webface. @abstr_number . Align all face images using MTCNN. The script can be found in @abstr_hyperlink . @abstr_number . Replace the final inner-product layer and softmax layer with layers defined in scaled_cosine_softmax.prototxt or normalized_Euclidean_contrastive.prototxt. @abstr_number . **Fine-tune** the network based on the original model using a small learning rate, say @abstr_number . @abstr_number or @abstr_number . @abstr_number .

# Evaluation

Evaluation codes are in @abstr_hyperlink . Please refer to the second paragraph of the Update section. 

A trick called mirror face is used during extracting the features. A sample code is in `./prototxt/example_of_mirror_face.prototxt`.

**About the mirror face:** See ./MirrorFace.md

**About the histogram feature for video face verification:** Details are in @abstr_hyperlink .

# Trained Models

Light CNN B model( @abstr_number . @abstr_number %): @abstr_hyperlink or @abstr_hyperlink .

ps: I used to get a model of @abstr_number . @abstr_number %, but I lost it....

Center Face model( @abstr_number . @abstr_number %): @abstr_hyperlink or @abstr_hyperlink .

# License

This code is distributed under MIT LICENSE. The released models are only allowed for non-commercial use.

# Citation

If you find my paper or the codes useful in your research, please cite @abstr_code_section 

# Contact

Feng Wang [feng.wff(at)gmail.com], please replace (at) with @.
