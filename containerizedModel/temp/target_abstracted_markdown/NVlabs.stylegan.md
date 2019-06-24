## StyleGAN — Official TensorFlow Implementation

@abstr_image @abstr_image @abstr_image @abstr_image 

@abstr_image **Picture:** _These people are not real – they were produced by our generator that allows control over different aspects of the image._

This repository contains the official TensorFlow implementation of the following paper:

> **A Style-Based Generator Architecture for Generative Adversarial Networks**  
>  Tero Karras (NVIDIA), Samuli Laine (NVIDIA), Timo Aila (NVIDIA)  
>  http://stylegan.xyz/paper
> 
> **Abstract:** _We propose an alternative generator architecture for generative adversarial networks, borrowing from style transfer literature. The new architecture leads to an automatically learned, unsupervised separation of high-level attributes (e.g., pose and identity when trained on human faces) and stochastic variation in the generated images (e.g., freckles, hair), and it enables intuitive, scale-specific control of the synthesis. The new generator improves the state-of-the-art in terms of traditional distribution quality metrics, leads to demonstrably better interpolation properties, and also better disentangles the latent factors of variation. To quantify interpolation quality and disentanglement, we propose two new, automated methods that are applicable to any generator architecture. Finally, we introduce a new, highly varied and high-quality dataset of human faces._

For business inquiries, please contact @abstr_hyperlink 

For press and other inquiries, please contact Hector Marinez at @abstr_hyperlink 

## Resources

All material related to our paper is available via the following links:

| Link | Description | :-------------- | :---------- | http://stylegan.xyz/paper | Paper PDF. | http://stylegan.xyz/video | Result video. | http://stylegan.xyz/code | Source code. | http://stylegan.xyz/ffhq | Flickr-Faces-HQ dataset. | http://stylegan.xyz/drive | Google Drive folder.

Additional material can be found in Google Drive folder:

| Path | Description | :--- | :---------- | @abstr_hyperlink | Main folder. | &boxvr; @abstr_hyperlink | High-quality version of the paper PDF. | &boxvr; @abstr_hyperlink | High-quality version of the result video. | &boxvr; @abstr_hyperlink | Example images produced using our generator. | &boxv; &boxvr; @abstr_hyperlink | High-quality images to be used in articles, blog posts, etc. | &boxv; &boxur; @abstr_hyperlink | @abstr_number , @abstr_number generated images for different amounts of truncation. | &boxv; &boxvr; @abstr_hyperlink | Generated using Flickr-Faces-HQ dataset at @abstr_number × @abstr_number . | &boxv; &boxvr; @abstr_hyperlink | Generated using LSUN Bedroom dataset at @abstr_number × @abstr_number . | &boxv; &boxvr; @abstr_hyperlink | Generated using LSUN Car dataset at @abstr_number × @abstr_number . | &boxv; &boxur; @abstr_hyperlink | Generated using LSUN Cat dataset at @abstr_number × @abstr_number . | &boxvr; @abstr_hyperlink | Example videos produced using our generator. | &boxv; &boxur; @abstr_hyperlink | Individual segments of the result video as high-quality MP @abstr_number . | &boxvr; @abstr_hyperlink | Raw data for the @abstr_hyperlink . | &boxur; @abstr_hyperlink | Pre-trained networks as pickled instances of dnnlib.tflib.Network. | &boxvr; @abstr_hyperlink | StyleGAN trained with Flickr-Faces-HQ dataset at @abstr_number × @abstr_number . | &boxvr; @abstr_hyperlink | StyleGAN trained with CelebA-HQ dataset at @abstr_number × @abstr_number . | &boxvr; @abstr_hyperlink | StyleGAN trained with LSUN Bedroom dataset at @abstr_number × @abstr_number . | &boxvr; @abstr_hyperlink | StyleGAN trained with LSUN Car dataset at @abstr_number × @abstr_number . | &boxvr; @abstr_hyperlink | StyleGAN trained with LSUN Cat dataset at @abstr_number × @abstr_number . | &boxur; @abstr_hyperlink | Auxiliary networks for the quality and disentanglement metrics. | &boxvr; @abstr_hyperlink | Standard @abstr_hyperlink classifier that outputs a raw feature vector. | &boxvr; @abstr_hyperlink | Standard @abstr_hyperlink metric to estimate perceptual similarity. | &boxvr; @abstr_hyperlink | Binary classifier trained to detect a single attribute of CelebA-HQ. | &boxur; &#x @abstr_number ef; | Please see the file listing for remaining networks.

## Licenses

All material, excluding the Flickr-Faces-HQ dataset, is made available under @abstr_hyperlink license by NVIDIA Corporation. You can **use, redistribute, and adapt** the material for **non-commercial purposes** , as long as you give appropriate credit by **citing our paper** and **indicating any changes** that you've made.

For license information regarding the FFHQ dataset, please refer to the @abstr_hyperlink .

`inception_v @abstr_number _features.pkl` and `inception_v @abstr_number _softmax.pkl` are derived from the pre-trained @abstr_hyperlink network by Christian Szegedy, Vincent Vanhoucke, Sergey Ioffe, Jonathon Shlens, and Zbigniew Wojna. The network was originally shared under @abstr_hyperlink license on the @abstr_hyperlink repository.

`vgg @abstr_number .pkl` and `vgg @abstr_number _zhang_perceptual.pkl` are derived from the pre-trained @abstr_hyperlink network by Karen Simonyan and Andrew Zisserman. The network was originally shared under @abstr_hyperlink license on the @abstr_hyperlink project page.

`vgg @abstr_number _zhang_perceptual.pkl` is further derived from the pre-trained @abstr_hyperlink weights by Richard Zhang, Phillip Isola, Alexei A. Efros, Eli Shechtman, and Oliver Wang. The weights were originally shared under @abstr_hyperlink on the @abstr_hyperlink repository.

## System requirements

  * Both Linux and Windows are supported, but we strongly recommend Linux for performance and compatibility reasons.
  * @abstr_number -bit Python @abstr_number . @abstr_number installation. We recommend Anaconda @abstr_number with numpy @abstr_number . @abstr_number . @abstr_number or newer.
  * TensorFlow @abstr_number . @abstr_number . @abstr_number or newer with GPU support.
  * One or more high-end NVIDIA GPUs with at least @abstr_number GB of DRAM. We recommend NVIDIA DGX- @abstr_number with @abstr_number Tesla V @abstr_number GPUs.
  * NVIDIA driver @abstr_number . @abstr_number or newer, CUDA toolkit @abstr_number . @abstr_number or newer, cuDNN @abstr_number . @abstr_number . @abstr_number or newer.



## Using pre-trained networks

A minimal example of using a pre-trained StyleGAN generator is given in pretrained_example.py. When executed, the script downloads a pre-trained StyleGAN generator from Google Drive and uses it to generate an image:

@abstr_code_section 

A more advanced example is given in generate_figures.py. The script reproduces the figures from our paper in order to illustrate style mixing, noise inputs, and truncation: @abstr_code_section 

The pre-trained networks are stored as standard pickle files on Google Drive:

@abstr_code_section 

The above code downloads the file and unpickles it to yield @abstr_number instances of dnnlib.tflib.Network. To generate images, you will typically want to use `Gs` – the other two networks are provided for completeness. In order for `pickle.load()` to work, you will need to have the `dnnlib` source directory in your PYTHONPATH and a `tf.Session` set as default. The session can initialized by calling `dnnlib.tflib.init_tf()`.

There are three ways to use the pre-trained generator:

@abstr_number . Use `Gs.run()` for immediate-mode operation where the inputs and outputs are numpy arrays: @abstr_code_section The first argument is a batch of latent vectors of shape `[num, @abstr_number ]`. The second argument is reserved for class labels (not used by StyleGAN). The remaining keyword arguments are optional and can be used to further modify the operation (see below). The output is a batch of images, whose format is dictated by the `output_transform` argument.

@abstr_number . Use `Gs.get_output_for()` to incorporate the generator as a part of a larger TensorFlow expression: @abstr_code_section The above code is from metrics/frechet_inception_distance.py. It generates a batch of random images and feeds them directly to the @abstr_hyperlink network without having to convert the data to numpy arrays in between.

@abstr_number . Look up `Gs.components.mapping` and `Gs.components.synthesis` to access individual sub-networks of the generator. Similar to `Gs`, the sub-networks are represented as independent instances of dnnlib.tflib.Network: @abstr_code_section The above code is from generate_figures.py. It first transforms a batch of latent vectors into the intermediate _W_ space using the mapping network and then turns these vectors into a batch of images using the synthesis network. The `dlatents` array stores a separate copy of the same _w_ vector for each layer of the synthesis network to facilitate style mixing.

The exact details of the generator are defined in training/networks_stylegan.py (see `G_style`, `G_mapping`, and `G_synthesis`). The following keyword arguments can be specified to modify the behavior when calling `run()` and `get_output_for()`:

  * `truncation_psi` and `truncation_cutoff` control the truncation trick that that is performed by default when using `Gs` (ψ= @abstr_number . @abstr_number , cutoff= @abstr_number ). It can be disabled by setting `truncation_psi= @abstr_number` or `is_validation=True`, and the image quality can be further improved at the cost of variation by setting e.g. `truncation_psi= @abstr_number . @abstr_number`. Note that truncation is always disabled when using the sub-networks directly. The average _w_ needed to manually perform the truncation trick can be looked up using `Gs.get_var('dlatent_avg')`.

  * `randomize_noise` determines whether to use re-randomize the noise inputs for each generated image (`True`, default) or whether to use specific noise values for the entire minibatch (`False`). The specific values can be accessed via the `tf.Variable` instances that are found using `[var for name, var in Gs.components.synthesis.vars.items() if name.startswith('noise')]`.

  * When using the mapping network directly, you can specify `dlatent_broadcast=None` to disable the automatic duplication of `dlatents` over the layers of the synthesis network.

  * Runtime performance can be fine-tuned via `structure='fixed'` and `dtype='float @abstr_number '`. The former disables support for progressive growing, which is not needed for a fully-trained generator, and the latter performs all computation using half-precision floating point arithmetic.




## Preparing datasets for training

The training and evaluation scripts operate on datasets stored as multi-resolution TFRecords. Each dataset is represented by a directory containing the same image data in several resolutions to enable efficient streaming. There is a separate *.tfrecords file for each resolution, and if the dataset contains labels, they are stored in a separate file as well. By default, the scripts expect to find the datasets at `datasets/<NAME>/<NAME>-<RESOLUTION>.tfrecords`. The directory can be changed by editing config.py:

@abstr_code_section 

To obtain the FFHQ dataset (`datasets/ffhq`), please refer to the @abstr_hyperlink .

To obtain the CelebA-HQ dataset (`datasets/celebahq`), please refer to the @abstr_hyperlink .

To obtain other datasets, including LSUN, please consult their corresponding project pages. The datasets can be converted to multi-resolution TFRecords using the provided dataset_tool.py:

@abstr_code_section 

## Training networks

Once the datasets are set up, you can train your own StyleGAN networks as follows:

@abstr_number . Edit train.py to specify the dataset and training configuration by uncommenting or editing specific lines. @abstr_number . Run the training script with `python train.py`. @abstr_number . The results are written to a newly created directory `results/<ID>-<DESCRIPTION>`. @abstr_number . The training may take several days (or weeks) to complete, depending on the configuration.

By default, `train.py` is configured to train the highest-quality StyleGAN (configuration F in Table @abstr_number ) for the FFHQ dataset at @abstr_number × @abstr_number resolution using @abstr_number GPUs. Please note that we have used @abstr_number GPUs in all of our experiments. Training with fewer GPUs may not produce identical results – if you wish to compare against our technique, we strongly recommend using the same number of GPUs.

Expected training times for the default configuration using Tesla V @abstr_number GPUs:

| GPUs | @abstr_number × @abstr_number | @abstr_number × @abstr_number | @abstr_number × @abstr_number | | :--- | :-------------- | :------------ | :------------ | | @abstr_number | @abstr_number days @abstr_number hours | @abstr_number days @abstr_number hours | @abstr_number days @abstr_number hours | | @abstr_number | @abstr_number days @abstr_number hours | @abstr_number days @abstr_number hours | @abstr_number days @abstr_number hours | | @abstr_number | @abstr_number days @abstr_number hours | @abstr_number days @abstr_number hours | @abstr_number days @abstr_number hours | | @abstr_number | @abstr_number days @abstr_number hours | @abstr_number days @abstr_number hours | @abstr_number days @abstr_number hours |

## Evaluating quality and disentanglement

The quality and disentanglement metrics used in our paper can be evaluated using run_metrics.py. By default, the script will evaluate the Fréchet Inception Distance (`fid @abstr_number k`) for the pre-trained FFHQ generator and write the results into a newly created directory under `results`. The exact behavior can be changed by uncommenting or editing specific lines in run_metrics.py.

Expected evaluation time and results for the pre-trained FFHQ generator using one Tesla V @abstr_number GPU:

| Metric | Time | Result | Description | :----- | :--- | :----- | :---------- | fid @abstr_number k | @abstr_number min | @abstr_number . @abstr_number | Fréchet Inception Distance using @abstr_number , @abstr_number images. | ppl_zfull | @abstr_number min | @abstr_number . @abstr_number | Perceptual Path Length for full paths in _Z_. | ppl_wfull | @abstr_number min | @abstr_number . @abstr_number | Perceptual Path Length for full paths in _W_. | ppl_zend | @abstr_number min | @abstr_number . @abstr_number | Perceptual Path Length for path endpoints in _Z_. | ppl_wend | @abstr_number min | @abstr_number . @abstr_number | Perceptual Path Length for path endpoints in _W_. | ls | @abstr_number hours | z: @abstr_number . @abstr_number   
w: @abstr_number . @abstr_number | Linear Separability in _Z_ and _W_.

Please note that the exact results may vary from run to run due to the non-deterministic nature of TensorFlow.

## Acknowledgements

We thank Jaakko Lehtinen, David Luebke, and Tuomas Kynkäänniemi for in-depth discussions and helpful comments; Janne Hellsten, Tero Kuosmanen, and Pekka Jänis for compute infrastructure and help with the code release.
