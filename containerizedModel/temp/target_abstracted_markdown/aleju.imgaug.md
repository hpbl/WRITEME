# imgaug

This python library helps you with augmenting images for your machine learning projects. It converts a set of input images into a new, much larger set of slightly altered images.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

| Image | Heatmaps | Seg. Maps | Keypoints | Bounding Boxes,  
Polygons  
---|---|---|---|---|---  
_Original Input_ |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
Gauss. Noise  
\+ Contrast  
\+ Sharpen |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
Affine |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
Crop  
\+ Pad |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
Fliplr  
\+ Perspective |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
  
**More (strong) example augmentations of one input image:**

@abstr_image 

## Table of Contents

@abstr_number . Features @abstr_number . Installation @abstr_number . Documentation @abstr_number . Recent Changes @abstr_number . Example Images @abstr_number . Code Examples @abstr_number . List of augmenters

## Features

  * Many augmentation techniques 
    * E.g. affine transformations, perspective transformations, contrast changes, gaussian noise, dropout of regions, hue/saturation changes, cropping/padding, blurring, ...
    * Optimized for high performance
    * Easy to apply augmentations only to some images
    * Easy to apply augmentations in random order
  * Support for 
    * Images (full support for uint @abstr_number , for other dtypes see @abstr_hyperlink )
    * Heatmaps (float @abstr_number ), Segmentation Maps (int), Masks (bool)
    * May be smaller/larger than their corresponding images. _No_ extra lines of code needed for e.g. crop. 
    * Keypoints/Landmarks (int/float coordinates)
    * Bounding Boxes (int/float coordinates)
    * Polygons (int/float coordinates) (Beta)
    * Line Strings (int/float coordinates) (Beta)
  * Automatic alignment of sampled random values 
    * Example: Rotate image and segmentation map on it by the same value sampled from `uniform(- @abstr_number °, @abstr_number °)`. ( @abstr_number extra lines of code.)
  * Probability distributions as parameters 
    * Example: Rotate images by values sampled from `uniform(- @abstr_number °, @abstr_number °)`.
    * Example: Rotate images by values sampled from `ABS(N( @abstr_number , @abstr_number . @abstr_number ))*( @abstr_number +B( @abstr_number . @abstr_number , @abstr_number . @abstr_number ))`", where `ABS(.)` is the absolute function, `N(.)` the gaussian distribution and `B(.)` the beta distribution.
  * Many helper functions 
    * Example: Draw heatmaps, segmentation maps, keypoints, bounding boxes, ...
    * Example: Scale segmentation maps, average/max pool of images/maps, pad images to aspect ratios (e.g. to square them)
    * Example: Convert keypoints to distance maps, extract pixels within bounding boxes from images, clip polygon to the image plane, ...
  * Support for augmentation on multiple CPU cores



## Installation

The library supports python @abstr_number . @abstr_number and @abstr_number . @abstr_number +.

### Installation: Anaconda

To install the library in anaconda, perform the following commands: @abstr_code_section 

You can deinstall the library again via `conda remove imgaug`.

### Installation: pip

To install the library via pip, first install all requirements: @abstr_code_section 

Then install imgaug either via pypi (can lag behind the github version): @abstr_code_section 

or install the latest version directly from github: @abstr_code_section 

In rare cases, `Shapely` can cause issues to install. You can skip the package in these cases -- but note that at least polygon and line string augmentation will crash without it.

To deinstall the library, just execute `pip uninstall imgaug`.

### Installation: From Source

Alternatively, you can download the repository via `git clone https://github.com/aleju/imgaug` and install manually via `cd imgaug && python setup.py install`.

## Documentation

Example jupyter notebooks: * @abstr_hyperlink * @abstr_hyperlink * Augment and work with: @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink 

More notebooks: @abstr_hyperlink .

Example ReadTheDocs pages (usually less up to date than the notebooks): * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 

More RTD documentation: @abstr_hyperlink .

All documentation related files of this project are hosted in the repository @abstr_hyperlink .

## Recent Changes

  * _* @abstr_number . @abstr_number . @abstr_number *_ : Added polygon augmentation, added line string augmentation, simplified augmentation interface.
  * _* @abstr_number . @abstr_number . @abstr_number *_ : Improved performance, dtype support and multicore augmentation.



See changelog for more details.

## Example Images

The images below show examples for most augmentation techniques.

Values written in the form `(a, b)` denote a uniform distribution, i.e. the value is randomly picked from the interval `[a, b]`. Line strings are supported by all augmenters, but are not explicitly visualized here.

**meta**  
---  
Noop | ChannelShuffle |  |  |   
@abstr_image  |  @abstr_image  |  |  |   
**arithmetic**  
Add | Add  
(per_channel=True) | AdditiveGaussianNoise | AdditiveGaussianNoise  
(per_channel=True) | AdditiveLaplaceNoise  
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
AdditiveLaplaceNoise  
(per_channel=True) | AdditivePoissonNoise | AdditivePoissonNoise  
(per_channel=True) | Multiply | Multiply  
(per_channel=True)  
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
Dropout | Dropout  
(per_channel=True) | CoarseDropout  
(p= @abstr_number . @abstr_number ) | CoarseDropout  
(p= @abstr_number . @abstr_number , per_channel=True) | ImpulseNoise  
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
SaltAndPepper | Salt | Pepper | CoarseSaltAndPepper  
(p= @abstr_number . @abstr_number ) | CoarseSalt  
(p= @abstr_number . @abstr_number )  
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
CoarsePepper  
(p= @abstr_number . @abstr_number ) | Invert | Invert  
(per_channel=True) | JpegCompression |   
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |   
**blend**  
Alpha  
with EdgeDetect( @abstr_number . @abstr_number ) | Alpha  
with EdgeDetect( @abstr_number . @abstr_number )  
(per_channel=True) | SimplexNoiseAlpha  
with EdgeDetect( @abstr_number . @abstr_number ) | FrequencyNoiseAlpha  
with EdgeDetect( @abstr_number . @abstr_number ) |   
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |   
**blur**  
GaussianBlur | AverageBlur | MedianBlur | BilateralBlur  
(sigma_color= @abstr_number ,  
sigma_space= @abstr_number ) | MotionBlur  
(angle= @abstr_number )  
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
MotionBlur  
(k= @abstr_number ) |  |  |  |   
@abstr_image  |  |  |  |   
**color**  
AddToHueAndSaturation | Grayscale |  |  |   
@abstr_image  |  @abstr_image  |  |  |   
**contrast**  
GammaContrast | GammaContrast  
(per_channel=True) | SigmoidContrast  
(cutoff= @abstr_number . @abstr_number ) | SigmoidContrast  
(gain= @abstr_number ) | SigmoidContrast  
(per_channel=True)  
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
LogContrast | LogContrast  
(per_channel=True) | LinearContrast | LinearContrast  
(per_channel=True) | AllChannels-  
HistogramEqualization  
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image   
HistogramEqualization | AllChannelsCLAHE | AllChannelsCLAHE  
(per_channel=True) | CLAHE |   
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |   
**convolutional**  
Sharpen  
(alpha= @abstr_number ) | Emboss  
(alpha= @abstr_number ) | EdgeDetect | DirectedEdgeDetect  
(alpha= @abstr_number ) |   
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |   
**flip**  
Fliplr | Flipud |   
@abstr_image  |  @abstr_image  |   
**geometric**  
Affine | Affine: Modes |   
@abstr_image  |  @abstr_image  |   
Affine: cval | PiecewiseAffine |   
@abstr_image  |  @abstr_image  |   
PerspectiveTransform | ElasticTransformation  
(sigma= @abstr_number . @abstr_number ) |   
@abstr_image  |  @abstr_image  |   
ElasticTransformation  
(sigma= @abstr_number . @abstr_number ) | Rot @abstr_number  |   
@abstr_image  |  @abstr_image  |   
**segmentation**  
Superpixels  
(p_replace= @abstr_number ) | Superpixels  
(n_segments= @abstr_number ) |  |  |   
@abstr_image  |  @abstr_image  |  |  |   
**size**  
CropAndPad | Crop |   
@abstr_image  |  @abstr_image  |   
Pad | PadToFixedSize  
(height'=height+ @abstr_number ,  
width'=width+ @abstr_number ) |   
@abstr_image  |  @abstr_image  |   
CropToFixedSize  
(height'=height- @abstr_number ,  
width'=width- @abstr_number ) |  |  |   
@abstr_image  |  |  |   
**weather**  
FastSnowyLandscape  
(lightness_multiplier= @abstr_number . @abstr_number ) | Clouds | Fog | Snowflakes |   
@abstr_image  |  @abstr_image  |  @abstr_image  |  @abstr_image  |   
  
## Code Examples

### Example: Simple Training Setting

A standard machine learning situation. Train on batches of images and augment each batch via crop, horizontal flip ("Fliplr") and gaussian blur: @abstr_code_section 

### Example: Very Complex Augmentation Pipeline

Apply heavy augmentations to images (used to create the image at the very top of this readme): @abstr_code_section 

### Example: Visualize Augmentations

Quickly show example results of your augmentation sequence: @abstr_code_section 

### Example: Augment Images and Keypoints

Augment images _and_ keypoints/landmarks on the same images: @abstr_code_section 

### Example: Augment Images and Heatmaps

Augment images and heatmaps on them in exactly the same way. Note here that the heatmaps have lower height and width than the images. `imgaug` handles that automatically. The crop pixels amounts will be halved for the heatmaps.

@abstr_code_section 

### Example: Using Augmenters Only Once

While the interface is adapted towards defining augmenters once and using them many times, you are also free to use them only once. The overhead to instantiate the augmenters each time is usually negligible.

@abstr_code_section 

### Example: Probability Distributions as Parameters

Most augmenters support using tuples `(a, b)` as a shortcut to denote `uniform(a, b)` or lists `[a, b, c]` to denote a set of allowed values from which one will be picked randomly. If you require more complex probability distributions, e.g. gaussians, you can use stochastic parameters from `imgaug.parameters`:

@abstr_code_section 

### Example: Multicore Augmentation

Images can be augmented in **background processes** using the method `augment_batches(batches, background=True)`, where `batches` is list of `imgaug.augmentables.batches.UnnormalizedBatch` or `imgaug.augmentables.batches.Batch`. The following example augments a list of image batches in the background: @abstr_code_section 

If you need a bit more control over the background augmentation process, you can work with `augmenter.pool()`, which allows you to define how many CPU cores to use, how often to restart child workers, which random number seed to use and how large the chunks of data transferred to each child worker should be. @abstr_code_section 

### Example: WithChannels

Apply an augmenter to only specific image channels: @abstr_code_section 

### Example: Hooks

You can **dynamically deactivate augmenters** in an already defined sequence. We show this here by running a second array (`heatmaps`) through the pipeline, but only apply a subset of augmenters to that input. @abstr_code_section 

## List of Augmenters

The following is a list of available augmenters. Note that most of the below mentioned variables can be set to ranges, e.g. `A=( @abstr_number . @abstr_number , @abstr_number . @abstr_number )` to sample a random value between @abstr_number and @abstr_number . @abstr_number per image, or `A=[ @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number ]` to sample randomly either `@abstr_number . @abstr_number` or `@abstr_number . @abstr_number` or `@abstr_number . @abstr_number` per image.

**arithmetic**

| Augmenter | Description | | --- | --- | | Add(V, PCH) | Adds value `V` to each image. If `PCH` is true, then the sampled values may be different per channel. | | AddElementwise(V, PCH) | Adds value `V` to each pixel. If `PCH` is true, then the sampled values may be different per channel (and pixel). | | AdditiveGaussianNoise(L, S, PCH) | Adds white/gaussian noise pixelwise to an image. The noise comes from the normal distribution `N(L,S)`. If `PCH` is true, then the sampled values may be different per channel (and pixel). | | AdditiveLaplaceNoise(L, S, PCH) | Adds noise sampled from a laplace distribution following `Laplace(L, S)` to images. If `PCH` is true, then the sampled values may be different per channel (and pixel). | | AdditivePoissonNoise(L, PCH) | Adds noise sampled from a poisson distribution with `L` being the `lambda` exponent. If `PCH` is true, then the sampled values may be different per channel (and pixel). | | Multiply(V, PCH) | Multiplies each image by value `V`, leading to darker/brighter images. If `PCH` is true, then the sampled values may be different per channel. | | MultiplyElementwise(V, PCH) | Multiplies each pixel by value `V`, leading to darker/brighter pixels. If `PCH` is true, then the sampled values may be different per channel (and pixel). | | Dropout(P, PCH) | Sets pixels to zero with probability `P`. If `PCH` is true, then channels may be treated differently, otherwise whole pixels are set to zero. | | CoarseDropout(P, SPX, SPC, PCH) | Like `Dropout`, but samples the locations of pixels that are to be set to zero from a coarser/smaller image, which has pixel size `SPX` or relative size `SPC`. I.e. if `SPC` has a small value, the coarse map is small, resulting in large rectangles being dropped. | | ReplaceElementwise(M, R, PCH) | Replaces pixels in an image by replacements `R`. Replaces the pixels identified by mask `M`. `M` can be a probability, e.g. `@abstr_number . @abstr_number` to replace @abstr_number % of all pixels. If `PCH` is true, then the mask will be sampled per image, pixel _and additionally channel_. | | ImpulseNoise(P) | Replaces `P` percent of all pixels with impulse noise, i.e. very light/dark RGB colors. This is an alias for `SaltAndPepper(P, PCH=True)`. | | SaltAndPepper(P, PCH) | Replaces `P` percent of all pixels with very white or black colors. If `PCH` is true, then different pixels will be replaced per channel. | | CoarseSaltAndPepper(P, SPX, SPC, PCH) | Similar to `CoarseDropout`, but instead of setting regions to zero, they are replaced by very white or black colors. If `PCH` is true, then the coarse replacement masks are sampled once per image and channel. | | Salt(P, PCH) | Similar to `SaltAndPepper`, but only replaces with very white colors, i.e. no black colors. | | CoarseSalt(P, SPX, SPC, PCH) | Similar to `CoarseSaltAndPepper`, but only replaces with very white colors, i.e. no black colors. | | Pepper(P, PCH) | Similar to `SaltAndPepper`, but only replaces with very black colors, i.e. no white colors. | | CoarsePepper(P, SPX, SPC, PCH) | Similar to `CoarseSaltAndPepper`, but only replaces with very black colors, i.e. no white colors. | | Invert(P, PCH) | Inverts with probability `P` all pixels in an image, i.e. sets them to ( @abstr_number -pixel_value). If `PCH` is true, each channel is treated individually (leading to only some channels being inverted). | | ContrastNormalization(S, PCH) | Changes the contrast in images, by moving pixel values away or closer to @abstr_number . The direction and strength is defined by `S`. If `PCH` is set to true, the process happens channel-wise with possibly different `S`. | | JpegCompression(C) | Applies JPEG compression of strength `C` (value range: @abstr_number to @abstr_number ) to an image. Higher values of `C` lead to more visual artifacts. |

**blend**

| Augmenter | Description | | --- | --- | | Alpha(A, FG, BG, PCH) | Augments images using augmenters `FG` and `BG` independently, then blends the result using alpha `A`. Both `FG` and `BG` default to doing nothing if not provided. E.g. use `Alpha( @abstr_number . @abstr_number , FG)` to augment images via `FG`, then blend the result, keeping @abstr_number % of the original image (before `FG`). If `PCH` is set to true, the process happens channel-wise with possibly different `A` (`FG` and `BG` are computed once per image). | | AlphaElementwise(A, FG, BG, PCH) | Same as `Alpha`, but performs the blending pixel-wise using a continuous mask (values @abstr_number . @abstr_number to @abstr_number . @abstr_number ) sampled from `A`. If `PCH` is set to true, the process happens both pixel- and channel-wise. | | SimplexNoiseAlpha(FG, BG, PCH, SM, UP, I, AGG, SIG, SIGT) | Similar to `Alpha`, but uses a mask to blend the results from augmenters `FG` and `BG`. The mask is sampled from simplex noise, which tends to be blobby. The mask is gathered in `I` iterations (default: `@abstr_number to @abstr_number`), each iteration is combined using aggregation method `AGG` (default `max`, i.e. maximum value from all iterations per pixel). Each mask is sampled in low resolution space with max resolution `SM` (default @abstr_number to @abstr_number px) and upscaled to image size using method `UP` (default: linear or cubic or nearest neighbour upsampling). If `SIG` is true, a sigmoid is applied to the mask with threshold `SIGT`, which makes the blobs have values closer to @abstr_number . @abstr_number or @abstr_number . @abstr_number . | | FrequencyNoiseAlpha(E, FG, BG, PCH, SM, UP, I, AGG, SIG, SIGT) | Similar to `SimplexNoiseAlpha`, but generates noise masks from the frequency domain. Exponent `E` is used to increase/decrease frequency components. High values for `E` pronounce high frequency components. Use values in the range - @abstr_number to @abstr_number , with - @abstr_number roughly generated cloud-like patterns. |

**blur**

| Augmenter | Description | | --- | --- | | GaussianBlur(S) | Blurs images using a gaussian kernel with size `S`. | | AverageBlur(K) | Blurs images using a simple averaging kernel with size `K`. | | MedianBlur(K) | Blurs images using a median over neihbourhoods of size `K`. | | BilateralBlur(D, SC, SS) | Blurs images using a bilateral filter with distance `D` (like kernel size). `SC` is a sigma for the (influence) distance in color space, `SS` a sigma for the spatial distance. | | MotionBlur(K, A, D, O) | Blurs an image using a motion blur kernel with size `K`. `A` is the angle of the blur in degrees to the y-axis (value range: @abstr_number to @abstr_number , clockwise). `D` is the blur direction (value range: - @abstr_number . @abstr_number to @abstr_number . @abstr_number , @abstr_number . @abstr_number is forward from the center). `O` is the interpolation order (`O= @abstr_number` is fast, `O= @abstr_number` slightly slower but more accurate). |

**color**

| Augmenter | Description | | --- | --- | | WithColorspace(T, F, CH) | Converts images from colorspace `T` to `F`, applies child augmenters `CH` and then converts back from `F` to `T`. | | AddToHueAndSaturation(V, PCH, F, C) | Adds value `V` to each pixel in HSV space (i.e. modifying hue and saturation). Converts from colorspace F to HSV (default is F=RGB). Selects channels C before augmenting (default is C=[ @abstr_number , @abstr_number ]). If `PCH` is true, then the sampled values may be different per channel. | | ChangeColorspace(T, F, A) | Converts images from colorspace `F` to `T` and mixes with the original image using alpha `A`. Grayscale remains at three channels. (Fairly untested augmenter, use at own risk.) | | Grayscale(A, F) | Converts images from colorspace F (default: RGB) to grayscale and mixes with the original image using alpha `A`. |

**contrast**

| Augmenter | Description | | --- | --- | | GammaContrast(G, PCH) | Applies gamma contrast adjustment following `I_ij' = I_ij**G'`, where `G'` is a gamma value sampled from `G` and `I_ij` a pixel (converted to @abstr_number to @abstr_number . @abstr_number space). If `PCH` is true, a different `G'` is sampled per image and channel. | | SigmoidContrast(G, C, PCH) | Similar to GammaContrast, but applies `I_ij' = @abstr_number /( @abstr_number + exp(G' * (C' - I_ij)))`, where `G'` is a gain value sampled from `G` and `C'` is a cutoff value sampled from `C`. | | LogContrast(G, PCH) | Similar to GammaContrast, but applies `I_ij = G' * log( @abstr_number + I_ij)`, where `G'` is a gain value sampled from `G`. | | LinearContrast(S, PCH) | Similar to GammaContrast, but applies `I_ij = @abstr_number + S' * (I_ij - @abstr_number )`, where `S'` is a strength value sampled from `S`. This augmenter is identical to ContrastNormalization (which will be deprecated in the future). | | AllChannelsHistogramEqualization() | Applies standard histogram equalization to each channel of each input image. | | HistogramEqualization(F, T) | Similar to `AllChannelsHistogramEqualization`, but expects images to be in colorspace `F`, converts to colorspace `T` and normalizes only an intensity-related channel, e.g. `L` for `T=Lab` (default for `T`) or `V` for `T=HSV`. | | AllChannelsCLAHE(CL, K, Kmin, PCH) | Contrast Limited Adaptive Histogram Equalization (histogram equalization in small image patches), applied to each image channel with clipping limit `CL` and kernel size `K` (clipped to range `[Kmin, inf)`). If `PCH` is true, different values for `CL` and `K` are sampled per channel. | | CLAHE(CL, K, Kmin, F, T) | Similar to `HistogramEqualization`, this applies CLAHE only to intensity-related channels in Lab/HSV/HLS colorspace. (Usually this works significantly better than `AllChannelsCLAHE`.) |

**convolutional**

| Augmenter | Description | | --- | --- | | Convolve(M) | Convolves images with matrix `M`, which can be a lambda function. | | Sharpen(A, L) | Runs a sharpening kernel over each image with lightness `L` (low values result in dark images). Mixes the result with the original image using alpha `A`. | | Emboss(A, S) | Runs an emboss kernel over each image with strength `S`. Mixes the result with the original image using alpha `A`. | | EdgeDetect(A) | Runs an edge detection kernel over each image. Mixes the result with the original image using alpha `A`. | | DirectedEdgeDetect(A, D) | Runs a directed edge detection kernel over each image, which detects each from direction `D` (default: random direction from @abstr_number to @abstr_number degrees, chosen per image). Mixes the result with the original image using alpha `A`. |

**flip**

| Augmenter | Description | | --- | --- | | Fliplr(P) | Horizontally flips images with probability `P`. | | Flipud(P) | Vertically flips images with probability `P`. |

**geometric**

| Augmenter | Description | | --- | --- | | Affine(S, TPX, TPC, R, SH, O, CVAL, FO, M, B) | Applies affine transformations to images. Scales them by `S` (> @abstr_number =zoom in, < @abstr_number =zoom out), translates them by `TPX` pixels or `TPC` percent, rotates them by `R` degrees and shears them by `SH` degrees. Interpolation happens with order `O` ( @abstr_number or @abstr_number are good and fast). If `FO` is true, the output image plane size will be fitted to the distorted image size, i.e. images rotated by @abstr_number deg will not be partially outside of the image plane. `M` controls how to handle pixels in the output image plane that have no correspondence in the input image plane. If `M='constant'` then `CVAL` defines a constant value with which to fill these pixels. `B` allows to set the backend framework (currently `cv @abstr_number` or `skimage`). | | AffineCv @abstr_number (S, TPX, TPC, R, SH, O, CVAL, M, B) | Same as Affine, but uses only `cv @abstr_number` as its backend. Currently does not support `FO=true`. Might be deprecated in the future. | | PiecewiseAffine(S, R, C, O, M, CVAL) | Places a regular grid of points on the image. The grid has `R` rows and `C` columns. Then moves the points (and the image areas around them) by amounts that are samples from normal distribution N( @abstr_number ,`S`), leading to local distortions of varying strengths. `O`, `M` and `CVAL` are defined as in `Affine`. | | PerspectiveTransform(S, KS) | Applies a random four-point perspective transform to the image (kinda like an advanced form of cropping). Each point has a random distance from the image corner, derived from a normal distribution with sigma `S`. If `KS` is set to True (default), each image will be resized back to its original size. | | ElasticTransformation(S, SM, O, CVAL, M) | Moves each pixel individually around based on distortion fields. `SM` defines the smoothness of the distortion field and `S` its strength. `O` is the interpolation order, `CVAL` a constant fill value for newly created pixels and `M` the fill mode (see also augmenter `Affine`). | | Rot @abstr_number (K, KS) | Rotate images `K` times clockwise by @abstr_number degrees. (This is faster than `Affine`.) If `KS` is true, the resulting image will be resized to have the same size as the original input image. |

**meta**

| Augmenter | Description | | --- | --- | | Sequential(C, R) | Takes a list of child augmenters `C` and applies them in that order to images. If `R` is true (default: false), then the order is random (chosen once per batch). | | SomeOf(N, C, R) | Applies `N` randomly selected augmenters from a list of augmenters `C` to each image. The augmenters are chosen per image. `R` is the same as for `Sequential`. `N` can be a range, e.g. `( @abstr_number , @abstr_number )` in order to pick @abstr_number to @abstr_number . | | OneOf(C) | Identical to `SomeOf( @abstr_number , C)`. | | Sometimes(P, C, D) | Augments images with probability `P` by using child augmenters `C`, otherwise uses `D`. `D` can be None, then only `P` percent of all images are augmented via `C`. | | WithColorspace(T, F, C) | Transforms images from colorspace `F` (default: RGB) to colorspace `T`, applies augmenters `C` and then converts back to `F`. | | WithChannels(H, C) | Selects from each image channels `H` (e.g. `[ @abstr_number , @abstr_number ]` for red and green in RGB images), applies child augmenters `C` to these channels and merges the result back into the original images. | | Noop() | Does nothing. (Useful for validation/test.) | | Lambda(I, K) | Applies lambda function `I` to images and `K` to keypoints. | | AssertLambda(I, K) | Checks images via lambda function `I` and keypoints via `K` and raises an error if false is returned by either of them. | | AssertShape(S) | Raises an error if input images are not of shape `S`. | | ChannelShuffle(P, C) | Permutes the order of the color channels for `P` percent of all images. Shuffles by default all channels, but may restrict to a subset using `C` (list of channel indices). |

**segmentation**

| Augmenter | Description | | --- | --- | | Superpixels(P, N, M) | Generates N superpixels of the image at (max) resolution M and resizes back to the original size. Then `P` percent of all superpixel areas in the original image are replaced by the superpixel. ( @abstr_number -P) percent remain unaltered. |

**size**

| Augmenter | Description | | --- | --- | | Resize(S, I) | Resizes images to size `S`. Common use case would be to use `S={"height":H, "width":W}` to resize all images to shape `HxW`. `H` and `W` may be floats (e.g. resize to `@abstr_number %` of original size). Either `H` or `W` may be `"keep-aspect-ratio"` to define only one side's new size and resize the other side correspondingly. `I` is the interpolation to use (default: `cubic`). | | CropAndPad(PX, PC, PM, PCV, KS) | Crops away or pads `PX` pixels or `PC` percent of pixels at top/right/bottom/left of images. Negative values result in cropping, positive in padding. `PM` defines the pad mode (e.g. use uniform color for all added pixels). `PCV` controls the color of added pixels if `PM=constant`. If `KS` is true (default), the resulting image is resized back to the original size. | | Pad(PX, PC, PM, PCV, KS) | Shortcut for CropAndPad(), which only adds pixels. Only positive values are allowed for `PX` and `PC`. | | Crop(PX, PC, KS) | Shortcut for CropAndPad(), which only crops away pixels. Only positive values are allowed for `PX` and `PC` (e.g. a value of @abstr_number results in @abstr_number pixels cropped away). | | PadToFixedSize(W, H, PM, PCV, POS) | Pads all images up to height `H` and width `W`. `PM` and `PCV` are the same as in `Pad`. `POS` defines the position around which to pad, e.g. `POS="center"` pads equally on all sides, `POS="left-top"` pads only the top and left sides. | | CropToFixedSize(W, H, POS) | Similar to `PadToFixedSize`, but crops down to height `H` and width `W` instead of padding. | | KeepSizeByResize(CH, I, IH) | Applies child augmenters `CH` (e.g. cropping) and afterwards resizes all images back to their original size. `I` is the interpolation used for images, `IH` the interpolation used for heatmaps. |

**weather**

| Augmenter | Description | | --- | --- | | FastSnowyLandscape(LT, LM) | Converts landscape images to snowy landscapes by increasing in HLS colorspace the lightness `L` of all pixels with `L<LT` by a factor of `LM`. | | Clouds() | Adds clouds of various shapes and densities to images. Can be senseful to be combined with an _overlay_ augmenter, e.g. `SimplexNoiseAlpha`. | | Fog() | Adds fog-like cloud structures of various shapes and densities to images. Can be senseful to be combined with an _overlay_ augmenter, e.g. `SimplexNoiseAlpha`. | | CloudLayer(IM, IFE, ICS, AMIN, AMUL, ASPXM, AFE, S, DMUL) | Adds a single layer of clouds to an image. `IM` is the mean intensity of the clouds, `IFE` a frequency noise exponent for the intensities (leading to non-uniform colors), `ICS` controls the variance of a gaussian for intensity sampling, `AM` is the minimum opacity of the clouds (values > @abstr_number are typical of fog), `AMUL` a multiplier for opacity values, `ASPXM` controls the minimum grid size at which to sample opacity values, `AFE` is a frequency noise exponent for opacity values, `S` controls the sparsity of clouds and `DMUL` is a cloud density multiplier. This interface is not final and will likely change in the future. | | Snowflakes(D, DU, FS, FSU, A, S) | Adds snowflakes with density `D`, density uniformity `DU`, snowflake size `FS`, snowflake size uniformity `FSU`, falling angle `A` and speed `S` to an image. One to three layers of snowflakes are added, hence the values should be stochastic. | | SnowflakesLayer(D, DU, FS, FSU, A, S, BSF, BSL) | Adds a single layer of snowflakes to an image. See augmenter `Snowflakes`. `BSF` and `BSL` control a gaussian blur applied to the snowflakes. |
