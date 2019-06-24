# Tensor @abstr_number Tensor

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink , or @abstr_hyperlink for short, is a library of deep learning models and datasets designed to make deep learning more accessible and @abstr_hyperlink . T @abstr_number T is actively used and maintained by researchers and engineers within the @abstr_hyperlink and a community of users. We're eager to collaborate with you too, so feel free to @abstr_hyperlink or send along a pull request (see our contribution doc). You can chat with us on @abstr_hyperlink and join the @abstr_hyperlink .

### Quick Start

@abstr_hyperlink explains T @abstr_number T and runs in your browser using a free VM from Google, no installation needed. Alternatively, here is a one-command version that installs T @abstr_number T, downloads MNIST, trains a model and evaluates it:

@abstr_code_section 

### Contents

  * Suggested Datasets and Models 
    * Mathematical Language Understanding
    * Story, Question and Answer
    * Image Classification
    * Image Generation
    * Language Modeling
    * Sentiment Analysis
    * Speech Recognition
    * Summarization
    * Translation
  * Basics 
    * Walkthrough
    * Installation
    * Features
  * T @abstr_number T Overview 
    * Datasets
    * Problems and Modalities
    * Models
    * Hyperparameter Sets
    * Trainer
  * Adding your own components
  * Adding a dataset
  * Papers
  * Run on FloydHub



## Suggested Datasets and Models

Below we list a number of tasks that can be solved with T @abstr_number T when you train the appropriate model on the appropriate problem. We give the problem and model below and we suggest a setting of hyperparameters that we know works well in our setup. We usually run either on Cloud TPUs or on @abstr_number -GPU machines; you might need to modify the hyperparameters if you run on a different setup.

### Mathematical Language Understanding

For evaluating mathematical expressions at the character level involving addition, subtraction and multiplication of both positive and negative decimal numbers with variable digits assigned to symbolic variables, use

  * the @abstr_hyperlink data-set: `--problem=algorithmic_math_two_variables`



You can try solving the problem with different transformer models and hyperparameters as described in the @abstr_hyperlink : * Standard transformer: `--model=transformer` `--hparams_set=transformer_tiny` * Universal transformer: `--model=universal_transformer` `--hparams_set=universal_transformer_tiny` * Adaptive universal transformer: `--model=universal_transformer` `--hparams_set=adaptive_universal_transformer_tiny`

### Story, Question and Answer

For answering questions based on a story, use

  * the @abstr_hyperlink data-set: `--problem=babi_qa_concat_task @abstr_number _ @abstr_number k`



You can choose the bAbi task from the range [ @abstr_number , @abstr_number ] and the subset from @abstr_number k or @abstr_number k. To combine test data from all tasks into a single test set, use `--problem=babi_qa_concat_all_tasks_ @abstr_number k`

### Image Classification

For image classification, we have a number of standard data-sets:

  * ImageNet (a large data-set): `--problem=image_imagenet`, or one of the re-scaled versions (`image_imagenet @abstr_number`, `image_imagenet @abstr_number`, `image_imagenet @abstr_number`)
  * CIFAR- @abstr_number : `--problem=image_cifar @abstr_number` (or `--problem=image_cifar @abstr_number _plain` to turn off data augmentation)
  * CIFAR- @abstr_number : `--problem=image_cifar @abstr_number`
  * MNIST: `--problem=image_mnist`



For ImageNet, we suggest to use the ResNet or Xception, i.e., use `--model=resnet --hparams_set=resnet_ @abstr_number` or `--model=xception --hparams_set=xception_base`. Resnet should get to above @abstr_number % top- @abstr_number accuracy on ImageNet.

For CIFAR and MNIST, we suggest to try the shake-shake model: `--model=shake_shake --hparams_set=shakeshake_big`. This setting trained for `--train_steps= @abstr_number` should yield close to @abstr_number % accuracy on CIFAR- @abstr_number .

### Image Generation

For (un)conditional image generation, we have a number of standard data-sets:

  * CelebA: `--problem=img @abstr_number img_celeba` for image-to-image translation, namely, superresolution from @abstr_number x @abstr_number to @abstr_number x @abstr_number .
  * CelebA-HQ: `--problem=image_celeba @abstr_number _rev` for a downsampled @abstr_number x @abstr_number .
  * CIFAR- @abstr_number : `--problem=image_cifar @abstr_number _plain_gen_rev` for class-conditional @abstr_number x @abstr_number generation.
  * LSUN Bedrooms: `--problem=image_lsun_bedrooms_rev`
  * MS-COCO: `--problem=image_text_ms_coco_rev` for text-to-image generation.
  * Small ImageNet (a large data-set): `--problem=image_imagenet @abstr_number _gen_rev` for @abstr_number x @abstr_number or `--problem=image_imagenet @abstr_number _gen_rev` for @abstr_number x @abstr_number .



We suggest to use the Image Transformer, i.e., `--model=imagetransformer`, or the Image Transformer Plus, i.e., `--model=imagetransformerpp` that uses discretized mixture of logistics, or variational auto-encoder, i.e., `--model=transformer_ae`. For CIFAR- @abstr_number , using `--hparams_set=imagetransformer_cifar @abstr_number _base` or `--hparams_set=imagetransformer_cifar @abstr_number _base_dmol` yields @abstr_number . @abstr_number bits per dimension. For Imagenet- @abstr_number , using `--hparams_set=imagetransformer_imagenet @abstr_number _base` yields @abstr_number . @abstr_number bits per dimension.

### Language Modeling

For language modeling, we have these data-sets in T @abstr_number T:

  * PTB (a small data-set): `--problem=languagemodel_ptb @abstr_number k` for word-level modeling and `--problem=languagemodel_ptb_characters` for character-level modeling.
  * LM @abstr_number B (a billion-word corpus): `--problem=languagemodel_lm @abstr_number b @abstr_number k` for subword-level modeling and `--problem=languagemodel_lm @abstr_number b_characters` for character-level modeling.



We suggest to start with `--model=transformer` on this task and use `--hparams_set=transformer_small` for PTB and `--hparams_set=transformer_base` for LM @abstr_number B.

### Sentiment Analysis

For the task of recognizing the sentiment of a sentence, use

  * the IMDB data-set: `--problem=sentiment_imdb`



We suggest to use `--model=transformer_encoder` here and since it is a small data-set, try `--hparams_set=transformer_tiny` and train for few steps (e.g., `--train_steps= @abstr_number`).

### Speech Recognition

For speech-to-text, we have these data-sets in T @abstr_number T:

  * Librispeech (US English): `--problem=librispeech` for the whole set and `--problem=librispeech_clean` for a smaller but nicely filtered part.

  * Mozilla Common Voice (US English): `--problem=common_voice` for the whole set `--problem=common_voice_clean` for a quality-checked subset.




### Summarization

For summarizing longer text into shorter one we have these data-sets:

  * CNN/DailyMail articles summarized into a few sentences: `--problem=summarize_cnn_dailymail @abstr_number k`



We suggest to use `--model=transformer` and `--hparams_set=transformer_prepend` for this task. This yields good ROUGE scores.

### Translation

There are a number of translation data-sets in T @abstr_number T:

  * English-German: `--problem=translate_ende_wmt @abstr_number k`
  * English-French: `--problem=translate_enfr_wmt @abstr_number k`
  * English-Czech: `--problem=translate_encs_wmt @abstr_number k`
  * English-Chinese: `--problem=translate_enzh_wmt @abstr_number k`
  * English-Vietnamese: `--problem=translate_envi_iwslt @abstr_number k`



You can get translations in the other direction by appending `_rev` to the problem name, e.g., for German-English use `--problem=translate_ende_wmt @abstr_number k_rev` (note that you still need to download the original data with t @abstr_number t-datagen `--problem=translate_ende_wmt @abstr_number k`).

For all translation problems, we suggest to try the Transformer model: `--model=transformer`. At first it is best to try the base setting, `--hparams_set=transformer_base`. When trained on @abstr_number GPUs for @abstr_number K steps this should reach a BLEU score of about @abstr_number on the English-German data-set, which is close to state-of-the art. If training on a single GPU, try the `--hparams_set=transformer_base_single_gpu` setting. For very good results or larger data-sets (e.g., for English-French), try the big model with `--hparams_set=transformer_big`.

## Basics

### Walkthrough

Here's a walkthrough training a good English-to-German translation model using the Transformer model from @abstr_hyperlink on WMT data.

@abstr_code_section 

### Installation

@abstr_code_section 

Binaries:

@abstr_code_section 

Library usage:

@abstr_code_section 

### Features

  * Many state of the art and baseline models are built-in and new models can be added easily (open an issue or pull request!).
  * Many datasets across modalities - text, audio, image - available for generation and use, and new ones can be added easily (open an issue or pull request for public datasets!).
  * Models can be used with any dataset and input mode (or even multiple); all modality-specific processing (e.g. embedding lookups for text tokens) is done with `bottom` and `top` transformations, which are specified per-feature in the model.
  * Support for multi-GPU machines and synchronous ( @abstr_number master, many workers) and asynchronous (independent workers synchronizing through a parameter server) @abstr_hyperlink .
  * Easily swap amongst datasets and models by command-line flag with the data generation script `t @abstr_number t-datagen` and the training script `t @abstr_number t-trainer`.
  * Train on @abstr_hyperlink and @abstr_hyperlink .



## T @abstr_number T overview

### Problems

**Problems** consist of features such as inputs and targets, and metadata such as each feature's modality (e.g. symbol, image, audio) and vocabularies. Problem features are given by a dataset, which is stored as a `TFRecord` file with `tensorflow.Example` protocol buffers. All problems are imported in @abstr_hyperlink or are registered with `@registry.register_problem`. Run @abstr_hyperlink to see the list of available problems and download them.

### Models

**`T @abstr_number TModel`s** define the core tensor-to-tensor computation. They apply a default transformation to each input and output so that models may deal with modality-independent tensors (e.g. embeddings at the input; and a linear transform at the output to produce logits for a softmax over classes). All models are imported in the @abstr_hyperlink , inherit from @abstr_hyperlink , and are registered with @abstr_hyperlink .

### Hyperparameter Sets

**Hyperparameter sets** are encoded in @abstr_hyperlink objects, and are registered with @abstr_hyperlink . Every model and problem has a `HParams`. A basic set of hyperparameters are defined in @abstr_hyperlink and hyperparameter set functions can compose other hyperparameter set functions.

### Trainer

The **trainer** binary is the entrypoint for training, evaluation, and inference. Users can easily switch between problems, models, and hyperparameter sets by using the `--model`, `--problem`, and `--hparams_set` flags. Specific hyperparameters can be overridden with the `--hparams` flag. `--schedule` and related flags control local and distributed training/evaluation ( @abstr_hyperlink ).

## Adding your own components

T @abstr_number T's components are registered using a central registration mechanism that enables easily adding new ones and easily swapping amongst them by command-line flag. You can add your own components without editing the T @abstr_number T codebase by specifying the `--t @abstr_number t_usr_dir` flag in `t @abstr_number t-trainer`.

You can do so for models, hyperparameter sets, modalities, and problems. Please do submit a pull request if your component might be useful to others.

See the @abstr_hyperlink for an example user directory.

## Adding a dataset

To add a new dataset, subclass @abstr_hyperlink and register it with `@registry.register_problem`. See @abstr_hyperlink for an example. Also see the @abstr_hyperlink .

## Run on FloydHub

@abstr_hyperlink 

Click this button to open a @abstr_hyperlink on @abstr_hyperlink . You can use the workspace to develop and test your code on a fully configured cloud GPU machine.

Tensor @abstr_number Tensor comes preinstalled in the environment, you can simply open a @abstr_hyperlink and run your code.

@abstr_code_section 

Note: Ensure compliance with the FloydHub @abstr_hyperlink .

## Papers

When referencing Tensor @abstr_number Tensor, please cite @abstr_hyperlink .

@abstr_code_section 

Tensor @abstr_number Tensor was used to develop a number of state-of-the-art models and deep learning methods. Here we list some papers that were based on T @abstr_number T from the start and benefited from its features and architecture in ways described in the @abstr_hyperlink .

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



_NOTE: This is not an official Google product._
