# BERT

******* New May @abstr_number st, @abstr_number : Whole Word Masking Models *******

This is a release of several new models which were the result of an improvement the pre-processing code.

In the original pre-processing code, we randomly select WordPiece tokens to mask. For example:

`Input Text: the man jumped up , put his basket on phil ##am ##mon ' s head` `Original Masked Input: [MASK] man [MASK] up , put his [MASK] on phil [MASK] ##mon ' s head`

The new technique is called Whole Word Masking. In this case, we always mask _all_ of the the tokens corresponding to a word at once. The overall masking rate remains the same.

`Whole Word Masked Input: the man [MASK] up , put his basket on [MASK] [MASK] [MASK] ' s head`

The training is identical -- we still predict each masked WordPiece token independently. The improvement comes from the fact that the original prediction task was too 'easy' for words that had been split into multiple WordPieces.

This can be enabled during data generation by passing the flag `--do_whole_word_mask=True` to `create_pretraining_data.py`.

Pre-trained models with Whole Word Masking are linked below. The data and training were otherwise identical, and the models have identical structure and vocab to the original models. We only include BERT-Large models. When using these models, please make it clear in the paper that you are using the Whole Word Masking variant of BERT-Large.

  * **@abstr_hyperlink** : @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters

  * **@abstr_hyperlink** : @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters




Model | SQUAD @abstr_number . @abstr_number F @abstr_number /EM | Multi NLI Accuracy \---------------------------------------- | :-------------: | :----------------: BERT-Large, Uncased (Original) | @abstr_number . @abstr_number / @abstr_number . @abstr_number | @abstr_number . @abstr_number BERT-Large, Uncased (Whole Word Masking) | @abstr_number . @abstr_number / @abstr_number . @abstr_number | @abstr_number . @abstr_number BERT-Large, Cased (Original) | @abstr_number . @abstr_number / @abstr_number . @abstr_number | @abstr_number . @abstr_number BERT-Large, Cased (Whole Word Masking) | @abstr_number . @abstr_number / @abstr_number . @abstr_number | @abstr_number . @abstr_number 

******* New February @abstr_number th, @abstr_number : TfHub Module *******

BERT has been uploaded to @abstr_hyperlink . See `run_classifier_with_tfhub.py` for an example of how to use the TF Hub module, or run an example in the browser on @abstr_hyperlink .

******* New November @abstr_number rd, @abstr_number : Un-normalized multilingual model + Thai + Mongolian *******

We uploaded a new multilingual model which does _not_ perform any normalization on the input (no lower casing, accent stripping, or Unicode normalization), and additionally inclues Thai and Mongolian.

**It is recommended to use this version for developing multilingual models, especially on languages with non-Latin alphabets.**

This does not require any code changes, and can be downloaded here:

  * **@abstr_hyperlink** : @abstr_number languages, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters



******* New November @abstr_number th, @abstr_number : SOTA SQuAD @abstr_number . @abstr_number System *******

We released code changes to reproduce our @abstr_number % F @abstr_number SQuAD @abstr_number . @abstr_number system, which is currently @abstr_number st place on the leaderboard by @abstr_number %. See the SQuAD @abstr_number . @abstr_number section of the README for details.

******* New November @abstr_number th, @abstr_number : Third-party PyTorch and Chainer versions of BERT available *******

NLP researchers from HuggingFace made a @abstr_hyperlink which is compatible with our pre-trained checkpoints and is able to reproduce our results. Sosuke Kobayashi also made a @abstr_hyperlink (Thanks!) We were not involved in the creation or maintenance of the PyTorch implementation so please direct any questions towards the authors of that repository.

******* New November @abstr_number rd, @abstr_number : Multilingual and Chinese models available *******

We have made two new BERT models available:

  * **@abstr_hyperlink (Not recommended, use`Multilingual Cased` instead)** : @abstr_number languages, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
  * **@abstr_hyperlink** : Chinese Simplified and Traditional, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters



We use character-based tokenization for Chinese, and WordPiece tokenization for all other languages. Both models should work out-of-the-box without any code changes. We did update the implementation of `BasicTokenizer` in `tokenization.py` to support Chinese character tokenization, so please update if you forked it. However, we did not change the tokenization API.

For more, see the @abstr_hyperlink .

******* End new information *******

## Introduction

**BERT** , or **B** idirectional **E** ncoder **R** epresentations from **T** ransformers, is a new method of pre-training language representations which obtains state-of-the-art results on a wide array of Natural Language Processing (NLP) tasks.

Our academic paper which describes BERT in detail and provides full results on a number of tasks can be found here: @abstr_hyperlink .

To give a few numbers, here are the results on the @abstr_hyperlink question answering task:

SQuAD v @abstr_number . @abstr_number Leaderboard (Oct @abstr_number th @abstr_number ) | Test EM | Test F @abstr_number \------------------------------------- | :------: | :------: @abstr_number st Place Ensemble - BERT | _* @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ @abstr_number nd Place Ensemble - nlnet | @abstr_number . @abstr_number | @abstr_number . @abstr_number @abstr_number st Place Single Model - BERT | _* @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ @abstr_number nd Place Single Model - nlnet | @abstr_number . @abstr_number | @abstr_number . @abstr_number 

And several natural language inference tasks:

System | MultiNLI | Question NLI | SWAG \----------------------- | :------: | :----------: | :------: BERT | _* @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ | _* @abstr_number . @abstr_number *_ OpenAI GPT (Prev. SOTA) | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number 

Plus many other tasks.

Moreover, these results were all obtained with almost no task-specific neural network architecture design.

If you already know what BERT is and you just want to get started, you can download the pre-trained models and run a state-of-the-art fine-tuning in only a few minutes.

## What is BERT?

BERT is a method of pre-training language representations, meaning that we train a general-purpose "language understanding" model on a large text corpus (like Wikipedia), and then use that model for downstream NLP tasks that we care about (like question answering). BERT outperforms previous methods because it is the first _unsupervised_ , _deeply bidirectional_ system for pre-training NLP.

_Unsupervised_ means that BERT was trained using only a plain text corpus, which is important because an enormous amount of plain text data is publicly available on the web in many languages.

Pre-trained representations can also either be _context-free_ or _contextual_ , and contextual representations can further be _unidirectional_ or _bidirectional_. Context-free models such as @abstr_hyperlink or @abstr_hyperlink generate a single "word embedding" representation for each word in the vocabulary, so `bank` would have the same representation in `bank deposit` and `river bank`. Contextual models instead generate a representation of each word that is based on the other words in the sentence.

BERT was built upon recent work in pre-training contextual representations — including @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink — but crucially these models are all _unidirectional_ or _shallowly bidirectional_. This means that each word is only contextualized using the words to its left (or right). For example, in the sentence `I made a bank deposit` the unidirectional representation of `bank` is only based on `I made a` but not `deposit`. Some previous work does combine the representations from separate left-context and right-context models, but only in a "shallow" manner. BERT represents "bank" using both its left and right context — `I made a ... deposit` — starting from the very bottom of a deep neural network, so it is _deeply bidirectional_.

BERT uses a simple approach for this: We mask out @abstr_number % of the words in the input, run the entire sequence through a deep bidirectional @abstr_hyperlink encoder, and then predict only the masked words. For example:

@abstr_code_section 

In order to learn relationships between sentences, we also train on a simple task which can be generated from any monolingual corpus: Given two sentences `A` and `B`, is `B` the actual next sentence that comes after `A`, or just a random sentence from the corpus?

@abstr_code_section 

@abstr_code_section 

We then train a large model ( @abstr_number -layer to @abstr_number -layer Transformer) on a large corpus (Wikipedia + @abstr_hyperlink ) for a long time ( @abstr_number M update steps), and that's BERT.

Using BERT has two stages: _Pre-training_ and _fine-tuning_.

**Pre-training** is fairly expensive (four days on @abstr_number to @abstr_number Cloud TPUs), but is a one-time procedure for each language (current models are English-only, but multilingual models will be released in the near future). We are releasing a number of pre-trained models from the paper which were pre-trained at Google. Most NLP researchers will never need to pre-train their own model from scratch.

**Fine-tuning** is inexpensive. All of the results in the paper can be replicated in at most @abstr_number hour on a single Cloud TPU, or a few hours on a GPU, starting from the exact same pre-trained model. SQuAD, for example, can be trained in around @abstr_number minutes on a single Cloud TPU to achieve a Dev F @abstr_number score of @abstr_number . @abstr_number %, which is the single system state-of-the-art.

The other important aspect of BERT is that it can be adapted to many types of NLP tasks very easily. In the paper, we demonstrate state-of-the-art results on sentence-level (e.g., SST- @abstr_number ), sentence-pair-level (e.g., MultiNLI), word-level (e.g., NER), and span-level (e.g., SQuAD) tasks with almost no task-specific modifications.

## What has been released in this repository?

We are releasing the following:

  * TensorFlow code for the BERT model architecture (which is mostly a standard @abstr_hyperlink architecture).
  * Pre-trained checkpoints for both the lowercase and cased version of `BERT-Base` and `BERT-Large` from the paper.
  * TensorFlow code for push-button replication of the most important fine-tuning experiments from the paper, including SQuAD, MultiNLI, and MRPC.



All of the code in this repository works out-of-the-box with CPU, GPU, and Cloud TPU.

## Pre-trained models

We are releasing the `BERT-Base` and `BERT-Large` models from the paper. `Uncased` means that the text has been lowercased before WordPiece tokenization, e.g., `John Smith` becomes `john smith`. The `Uncased` model also strips out any accent markers. `Cased` means that the true case and accent markers are preserved. Typically, the `Uncased` model is better unless you know that case information is important for your task (e.g., Named Entity Recognition or Part-of-Speech tagging).

These models are all released under the same license as the source code (Apache @abstr_number . @abstr_number ).

For information about the Multilingual and Chinese model, see the @abstr_hyperlink .

**When using a cased model, make sure to pass`--do_lower=False` to the training scripts. (Or pass `do_lower_case=False` directly to `FullTokenizer` if you're using your own script.)**

The links to the models are here (right-click, 'Save link as...' on the name):

  * **@abstr_hyperlink** : @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
  * **@abstr_hyperlink** : @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
  * **@abstr_hyperlink** : @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
  * **@abstr_hyperlink** : @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
  * **@abstr_hyperlink** : @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads , @abstr_number M parameters
  * **@abstr_hyperlink** : @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
  * **@abstr_hyperlink** : @abstr_number languages, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
  * **@abstr_hyperlink (Not recommended, use`Multilingual Cased` instead)** : @abstr_number languages, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
  * **@abstr_hyperlink** : Chinese Simplified and Traditional, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters



Each .zip file contains three items:

  * A TensorFlow checkpoint (`bert_model.ckpt`) containing the pre-trained weights (which is actually @abstr_number files).
  * A vocab file (`vocab.txt`) to map WordPiece to word id.
  * A config file (`bert_config.json`) which specifies the hyperparameters of the model.



## Fine-tuning with BERT

**Important** : All results on the paper were fine-tuned on a single Cloud TPU, which has @abstr_number GB of RAM. It is currently not possible to re-produce most of the `BERT-Large` results on the paper using a GPU with @abstr_number GB - @abstr_number GB of RAM, because the maximum batch size that can fit in memory is too small. We are working on adding code to this repository which allows for much larger effective batch size on the GPU. See the section on out-of-memory issues for more details.

This code was tested with TensorFlow @abstr_number . @abstr_number . @abstr_number . It was tested with Python @abstr_number and Python @abstr_number (but more thoroughly with Python @abstr_number , since this is what's used internally in Google).

The fine-tuning examples which use `BERT-Base` should be able to run on a GPU that has at least @abstr_number GB of RAM using the hyperparameters given.

### Fine-tuning with Cloud TPUs

Most of the examples below assumes that you will be running training/evaluation on your local machine, using a GPU like a Titan X or GTX @abstr_number .

However, if you have access to a Cloud TPU that you want to train on, just add the following flags to `run_classifier.py` or `run_squad.py`:

@abstr_code_section 

Please see the @abstr_hyperlink for how to use Cloud TPUs. Alternatively, you can use the Google Colab notebook " @abstr_hyperlink ".

On Cloud TPUs, the pretrained model and the output directory will need to be on Google Cloud Storage. For example, if you have a bucket named `some_bucket`, you might use the following flags instead:

@abstr_code_section 

The unzipped pre-trained model files can also be found in the Google Cloud Storage folder `gs://bert_models/ @abstr_number _ @abstr_number _ @abstr_number`. For example:

@abstr_code_section 

### Sentence (and sentence-pair) classification tasks

Before running this example you must download the @abstr_hyperlink by running @abstr_hyperlink and unpack it to some directory `$GLUE_DIR`. Next, download the `BERT-Base` checkpoint and unzip it to some directory `$BERT_BASE_DIR`.

This example code fine-tunes `BERT-Base` on the Microsoft Research Paraphrase Corpus (MRPC) corpus, which only contains @abstr_number , @abstr_number examples and can fine-tune in a few minutes on most GPUs.

@abstr_code_section 

You should see output like this:

@abstr_code_section 

This means that the Dev set accuracy was @abstr_number . @abstr_number %. Small sets like MRPC have a high variance in the Dev set accuracy, even when starting from the same pre-training checkpoint. If you re-run multiple times (making sure to point to different `output_dir`), you should see results between @abstr_number % and @abstr_number %.

A few other pre-trained models are implemented off-the-shelf in `run_classifier.py`, so it should be straightforward to follow those examples to use BERT for any single-sentence or sentence-pair classification task.

Note: You might see a message `Running train on CPU`. This really just means that it's running on something other than a Cloud TPU, which includes a GPU.

#### Prediction from classifier

Once you have trained your classifier you can use it in inference mode by using the --do_predict=true command. You need to have a file named test.tsv in the input folder. Output will be created in file called test_results.tsv in the output folder. Each line will contain output for each sample, columns are the class probabilities.

@abstr_code_section 

### SQuAD @abstr_number . @abstr_number

The Stanford Question Answering Dataset (SQuAD) is a popular question answering benchmark dataset. BERT (at the time of the release) obtains state-of-the-art results on SQuAD with almost no task-specific network architecture modifications or data augmentation. However, it does require semi-complex data pre-processing and post-processing to deal with (a) the variable-length nature of SQuAD context paragraphs, and (b) the character-level answer annotations which are used for SQuAD training. This processing is implemented and documented in `run_squad.py`.

To run on SQuAD, you will first need to download the dataset. The @abstr_hyperlink does not seem to link to the v @abstr_number . @abstr_number datasets any longer, but the necessary files can be found here:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Download these to some directory `$SQUAD_DIR`.

The state-of-the-art SQuAD results from the paper currently cannot be reproduced on a @abstr_number GB- @abstr_number GB GPU due to memory constraints (in fact, even batch size @abstr_number does not seem to fit on a @abstr_number GB GPU using `BERT-Large`). However, a reasonably strong `BERT-Base` model can be trained on the GPU with these hyperparameters:

@abstr_code_section 

The dev set predictions will be saved into a file called `predictions.json` in the `output_dir`:

@abstr_code_section 

Which should produce an output like this:

@abstr_code_section 

You should see a result similar to the @abstr_number . @abstr_number % reported in the paper for `BERT-Base`.

If you have access to a Cloud TPU, you can train with `BERT-Large`. Here is a set of hyperparameters (slightly different than the paper) which consistently obtain around @abstr_number . @abstr_number %- @abstr_number . @abstr_number % F @abstr_number single-system trained only on SQuAD:

@abstr_code_section 

For example, one random run with these parameters produces the following Dev scores:

@abstr_code_section 

If you fine-tune for one epoch on @abstr_hyperlink before this the results will be even better, but you will need to convert TriviaQA into the SQuAD json format.

### SQuAD @abstr_number . @abstr_number

This model is also implemented and documented in `run_squad.py`.

To run on SQuAD @abstr_number . @abstr_number , you will first need to download the dataset. The necessary files can be found here:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Download these to some directory `$SQUAD_DIR`.

On Cloud TPU you can run with BERT-Large as follows:

@abstr_code_section 

We assume you have copied everything from the output directory to a local directory called ./squad/. The initial dev set predictions will be at ./squad/predictions.json and the differences between the score of no answer ("") and the best non-null answer for each question will be in the file ./squad/null_odds.json

Run this script to tune a threshold for predicting null versus non-null answers:

python $SQUAD_DIR/evaluate-v @abstr_number . @abstr_number .py $SQUAD_DIR/dev-v @abstr_number . @abstr_number .json ./squad/predictions.json --na-prob-file ./squad/null_odds.json

Assume the script outputs "best_f @abstr_number _thresh" THRESH. (Typical values are between \- @abstr_number . @abstr_number and - @abstr_number . @abstr_number ). You can now re-run the model to generate predictions with the derived threshold or alternatively you can extract the appropriate answers from ./squad/nbest_predictions.json.

@abstr_code_section 

### Out-of-memory issues

All experiments in the paper were fine-tuned on a Cloud TPU, which has @abstr_number GB of device RAM. Therefore, when using a GPU with @abstr_number GB - @abstr_number GB of RAM, you are likely to encounter out-of-memory issues if you use the same hyperparameters described in the paper.

The factors that affect memory usage are:

  * **`max_seq_length`** : The released models were trained with sequence lengths up to @abstr_number , but you can fine-tune with a shorter max sequence length to save substantial memory. This is controlled by the `max_seq_length` flag in our example code.

  * **`train_batch_size`** : The memory usage is also directly proportional to the batch size.

  * **Model type,`BERT-Base` vs. `BERT-Large`** : The `BERT-Large` model requires significantly more memory than `BERT-Base`.

  * **Optimizer** : The default optimizer for BERT is Adam, which requires a lot of extra memory to store the `m` and `v` vectors. Switching to a more memory efficient optimizer can reduce memory usage, but can also affect the results. We have not experimented with other optimizers for fine-tuning.




Using the default training scripts (`run_classifier.py` and `run_squad.py`), we benchmarked the maximum batch size on single Titan X GPU ( @abstr_number GB RAM) with TensorFlow @abstr_number . @abstr_number . @abstr_number :

System | Seq Length | Max Batch Size \------------ | ---------- | -------------- `BERT-Base` | @abstr_number | @abstr_number ... | @abstr_number | @abstr_number ... | @abstr_number | @abstr_number ... | @abstr_number | @abstr_number ... | @abstr_number | @abstr_number ... | @abstr_number | @abstr_number `BERT-Large` | @abstr_number | @abstr_number ... | @abstr_number | @abstr_number ... | @abstr_number | @abstr_number ... | @abstr_number | @abstr_number ... | @abstr_number | @abstr_number ... | @abstr_number | @abstr_number 

Unfortunately, these max batch sizes for `BERT-Large` are so small that they will actually harm the model accuracy, regardless of the learning rate used. We are working on adding code to this repository which will allow much larger effective batch sizes to be used on the GPU. The code will be based on one (or both) of the following techniques:

  * **Gradient accumulation** : The samples in a minibatch are typically independent with respect to gradient computation (excluding batch normalization, which is not used here). This means that the gradients of multiple smaller minibatches can be accumulated before performing the weight update, and this will be exactly equivalent to a single larger update.

  * @abstr_hyperlink : The major use of GPU/TPU memory during DNN training is caching the intermediate activations in the forward pass that are necessary for efficient computation in the backward pass. "Gradient checkpointing" trades memory for compute time by re-computing the activations in an intelligent way.




**However, this is not implemented in the current release.**

## Using BERT to extract fixed feature vectors (like ELMo)

In certain cases, rather than fine-tuning the entire pre-trained model end-to-end, it can be beneficial to obtained _pre-trained contextual embeddings_ , which are fixed contextual representations of each input token generated from the hidden layers of the pre-trained model. This should also mitigate most of the out-of-memory issues.

As an example, we include the script `extract_features.py` which can be used like this:

@abstr_code_section 

This will create a JSON file (one line per line of input) containing the BERT activations from each Transformer layer specified by `layers` (- @abstr_number is the final hidden layer of the Transformer, etc.)

Note that this script will produce very large output files (by default, around @abstr_number kb for every input token).

If you need to maintain alignment between the original and tokenized words (for projecting training labels), see the Tokenization section below.

**Note:** You may see a message like `Could not find trained model in model_dir: /tmp/tmpuB @abstr_number g @abstr_number c, running initialization to predict.` This message is expected, it just means that we are using the `init_from_checkpoint()` API rather than the saved model API. If you don't specify a checkpoint or specify an invalid checkpoint, this script will complain.

## Tokenization

For sentence-level tasks (or sentence-pair) tasks, tokenization is very simple. Just follow the example code in `run_classifier.py` and `extract_features.py`. The basic procedure for sentence-level tasks is:

@abstr_number . Instantiate an instance of `tokenizer = tokenization.FullTokenizer`

@abstr_number . Tokenize the raw text with `tokens = tokenizer.tokenize(raw_text)`.

@abstr_number . Truncate to the maximum sequence length. (You can use up to @abstr_number , but you probably want to use shorter if possible for memory and speed reasons.)

@abstr_number . Add the `[CLS]` and `[SEP]` tokens in the right place.

Word-level and span-level tasks (e.g., SQuAD and NER) are more complex, since you need to maintain alignment between your input text and output text so that you can project your training labels. SQuAD is a particularly complex example because the input labels are _character_ -based, and SQuAD paragraphs are often longer than our maximum sequence length. See the code in `run_squad.py` to show how we handle this.

Before we describe the general recipe for handling word-level tasks, it's important to understand what exactly our tokenizer is doing. It has three main steps:

@abstr_number . **Text normalization** : Convert all whitespace characters to spaces, and (for the `Uncased` model) lowercase the input and strip out accent markers. E.g., `John Johanson's, → john johanson's,`.

@abstr_number . **Punctuation splitting** : Split _all_ punctuation characters on both sides (i.e., add whitespace around all punctuation characters). Punctuation characters are defined as (a) Anything with a `P*` Unicode class, (b) any non-letter/number/space ASCII character (e.g., characters like `$` which are technically not punctuation). E.g., `john johanson's, → john johanson ' s ,`

@abstr_number . **WordPiece tokenization** : Apply whitespace tokenization to the output of the above procedure, and apply @abstr_hyperlink tokenization to each token separately. (Our implementation is directly based on the one from `tensor @abstr_number tensor`, which is linked). E.g., `john johanson ' s , → john johan ##son ' s ,`

The advantage of this scheme is that it is "compatible" with most existing English tokenizers. For example, imagine that you have a part-of-speech tagging task which looks like this:

@abstr_code_section 

The tokenized output will look like this:

@abstr_code_section 

Crucially, this would be the same output as if the raw text were `John Johanson's house` (with no space before the `'s`).

If you have a pre-tokenized representation with word-level annotations, you can simply tokenize each input word independently, and deterministically maintain an original-to-tokenized alignment:

@abstr_code_section 

Now `orig_to_tok_map` can be used to project `labels` to the tokenized representation.

There are common English tokenization schemes which will cause a slight mismatch between how BERT was pre-trained. For example, if your input tokenization splits off contractions like `do n't`, this will cause a mismatch. If it is possible to do so, you should pre-process your data to convert these back to raw-looking text, but if it's not possible, this mismatch is likely not a big deal.

## Pre-training with BERT

We are releasing code to do "masked LM" and "next sentence prediction" on an arbitrary text corpus. Note that this is _not_ the exact code that was used for the paper (the original code was written in C++, and had some additional complexity), but this code does generate pre-training data as described in the paper.

Here's how to run the data generation. The input is a plain text file, with one sentence per line. (It is important that these be actual sentences for the "next sentence prediction" task). Documents are delimited by empty lines. The output is a set of `tf.train.Example`s serialized into `TFRecord` file format.

You can perform sentence segmentation with an off-the-shelf NLP toolkit such as @abstr_hyperlink . The `create_pretraining_data.py` script will concatenate segments until they reach the maximum sequence length to minimize computational waste from padding (see the script for more details). However, you may want to intentionally add a slight amount of noise to your input data (e.g., randomly truncate @abstr_number % of input segments) to make it more robust to non-sentential input during fine-tuning.

This script stores all of the examples for the entire input file in memory, so for large data files you should shard the input file and call the script multiple times. (You can pass in a file glob to `run_pretraining.py`, e.g., `tf_examples.tf_record*`.)

The `max_predictions_per_seq` is the maximum number of masked LM predictions per sequence. You should set this to around `max_seq_length` * `masked_lm_prob` (the script doesn't do that automatically because the exact value needs to be passed to both scripts).

@abstr_code_section 

Here's how to run the pre-training. Do not include `init_checkpoint` if you are pre-training from scratch. The model configuration (including vocab size) is specified in `bert_config_file`. This demo code only pre-trains for a small number of steps ( @abstr_number ), but in practice you will probably want to set `num_train_steps` to @abstr_number steps or more. The `max_seq_length` and `max_predictions_per_seq` parameters passed to `run_pretraining.py` must be the same as `create_pretraining_data.py`.

@abstr_code_section 

This will produce an output like this:

@abstr_code_section 

Note that since our `sample_text.txt` file is very small, this example training will overfit that data in only a few steps and produce unrealistically high accuracy numbers.

### Pre-training tips and caveats

  * **If using your own vocabulary, make sure to change`vocab_size` in `bert_config.json`. If you use a larger vocabulary without changing this, you will likely get NaNs when training on GPU or TPU due to unchecked out-of-bounds access.**
  * If your task has a large domain-specific corpus available (e.g., "movie reviews" or "scientific papers"), it will likely be beneficial to run additional steps of pre-training on your corpus, starting from the BERT checkpoint.
  * The learning rate we used in the paper was @abstr_number e- @abstr_number . However, if you are doing additional steps of pre-training starting from an existing BERT checkpoint, you should use a smaller learning rate (e.g., @abstr_number e- @abstr_number ).
  * Current BERT models are English-only, but we do plan to release a multilingual model which has been pre-trained on a lot of languages in the near future (hopefully by the end of November @abstr_number ).
  * Longer sequences are disproportionately expensive because attention is quadratic to the sequence length. In other words, a batch of @abstr_number sequences of length @abstr_number is much more expensive than a batch of @abstr_number sequences of length @abstr_number . The fully-connected/convolutional cost is the same, but the attention cost is far greater for the @abstr_number -length sequences. Therefore, one good recipe is to pre-train for, say, @abstr_number , @abstr_number steps with a sequence length of @abstr_number and then for @abstr_number , @abstr_number additional steps with a sequence length of @abstr_number . The very long sequences are mostly needed to learn positional embeddings, which can be learned fairly quickly. Note that this does require generating the data twice with different values of `max_seq_length`.
  * If you are pre-training from scratch, be prepared that pre-training is computationally expensive, especially on GPUs. If you are pre-training from scratch, our recommended recipe is to pre-train a `BERT-Base` on a single @abstr_hyperlink , which takes about @abstr_number weeks at a cost of about $ @abstr_number USD (based on the pricing in October @abstr_number ). You will have to scale down the batch size when only training on a single Cloud TPU, compared to what was used in the paper. It is recommended to use the largest batch size that fits into TPU memory.



### Pre-training data

We will **not** be able to release the pre-processed datasets used in the paper. For Wikipedia, the recommended pre-processing is to download @abstr_hyperlink , extract the text with @abstr_hyperlink , and then apply any necessary cleanup to convert it into plain text.

Unfortunately the researchers who collected the @abstr_hyperlink no longer have it available for public download. The @abstr_hyperlink is a somewhat smaller ( @abstr_number M word) collection of older books that are public domain.

@abstr_hyperlink is another very large collection of text, but you will likely have to do substantial pre-processing and cleanup to extract a usable corpus for pre-training BERT.

### Learning a new WordPiece vocabulary

This repository does not include code for _learning_ a new WordPiece vocabulary. The reason is that the code used in the paper was implemented in C++ with dependencies on Google's internal libraries. For English, it is almost always better to just start with our vocabulary and pre-trained models. For learning vocabularies of other languages, there are a number of open source options available. However, keep in mind that these are not compatible with our `tokenization.py` library:

  * @abstr_hyperlink 

  * @abstr_hyperlink 

  * @abstr_hyperlink 




## Using BERT in Colab

If you want to use BERT with @abstr_hyperlink , you can get started with the notebook " @abstr_hyperlink ". **At the time of this writing (October @abstr_number st, @abstr_number ), Colab users can access a Cloud TPU completely for free.** Note: One per user, availability limited, requires a Google Cloud Platform account with storage (although storage may be purchased with free credit for signing up with GCP), and this capability may not longer be available in the future. Click on the BERT Colab that was just linked for more information.

## FAQ

#### Is this code compatible with Cloud TPUs? What about GPUs?

Yes, all of the code in this repository works out-of-the-box with CPU, GPU, and Cloud TPU. However, GPU training is single-GPU only.

#### I am getting out-of-memory errors, what is wrong?

See the section on out-of-memory issues for more information.

#### Is there a PyTorch version available?

There is no official PyTorch implementation. However, NLP researchers from HuggingFace made a @abstr_hyperlink which is compatible with our pre-trained checkpoints and is able to reproduce our results. We were not involved in the creation or maintenance of the PyTorch implementation so please direct any questions towards the authors of that repository.

#### Is there a Chainer version available?

There is no official Chainer implementation. However, Sosuke Kobayashi made a @abstr_hyperlink which is compatible with our pre-trained checkpoints and is able to reproduce our results. We were not involved in the creation or maintenance of the Chainer implementation so please direct any questions towards the authors of that repository.

#### Will models in other languages be released?

Yes, we plan to release a multi-lingual BERT model in the near future. We cannot make promises about exactly which languages will be included, but it will likely be a single model which includes _most_ of the languages which have a significantly-sized Wikipedia.

#### Will models larger than `BERT-Large` be released?

So far we have not attempted to train anything larger than `BERT-Large`. It is possible that we will release larger models if we are able to obtain significant improvements.

#### What license is this library released under?

All code _and_ models are released under the Apache @abstr_number . @abstr_number license. See the `LICENSE` file for more information.

#### How do I cite BERT?

For now, cite @abstr_hyperlink :

@abstr_code_section 

If we submit the paper to a conference or journal, we will update the BibTeX.

## Disclaimer

This is not an official Google product.

## Contact information

For help or issues using BERT, please submit a GitHub issue.

For personal communication related to BERT, please contact Jacob Devlin (`jacobdevlin@google.com`), Ming-Wei Chang (`mingweichang@google.com`), or Kenton Lee (`kentonl@google.com`).
