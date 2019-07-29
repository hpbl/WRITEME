# SentencePiece

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

SentencePiece is an unsupervised text tokenizer and detokenizer mainly for Neural Network-based text generation systems where the vocabulary size is predetermined prior to the neural model training. SentencePiece implements **subword units** (e.g., **byte-pair-encoding (BPE)** [ @abstr_hyperlink ]) and **unigram language model** [ @abstr_hyperlink ]) with the extension of direct training from raw sentences. SentencePiece allows us to make a purely end-to-end system that does not depend on language-specific pre/postprocessing.

**This is not an official Google product.**

## Technical highlights

  * **Purely data driven** : SentencePiece trains tokenization and detokenization models from sentences. Pre-tokenization ( @abstr_hyperlink / @abstr_hyperlink / @abstr_hyperlink ) is not always required.
  * **Language independent** : SentencePiece treats the sentences just as sequences of Unicode characters. There is no language-dependent logic.
  * **Multiple subword algorithms** : **BPE** [ @abstr_hyperlink ] and **unigram language model** [ @abstr_hyperlink ] are supported.
  * **Subword regularization** : SentencePiece implements subword sampling for @abstr_hyperlink which helps to improve the robustness and accuracy of NMT models.
  * **Fast and lightweight** : Segmentation speed is around @abstr_number k sentences/sec, and memory footprint is around @abstr_number MB.
  * **Self-contained** : The same tokenization/detokenization is obtained as long as the same model file is used.
  * **Direct vocabulary id generation** : SentencePiece manages vocabulary to id mapping and can directly generate vocabulary id sequences from raw sentences.
  * **NFKC-based normalization** : SentencePiece performs NFKC-based text normalization.



## Comparisons with other implementations

|Feature|SentencePiece| @abstr_hyperlink | @abstr_hyperlink | |:---|:---:|:---:|:---:| |Supported algorithm|BPE, unigram, char, word|BPE|BPE*| |OSS?|Yes|Yes|Google internal| |Subword regularization|Yes|No|No| |Python Library (pip)|Yes|No|N/A| |C++ Library|Yes|No|N/A| |Pre-segmentation required?|No|Yes|Yes| |Customizable normalization (e.g., NFKC)|Yes|No|N/A| |Direct id generation|Yes|No|N/A|

Note that BPE algorithm used in WordPiece is slightly different from the original BPE.

## Overview

### What is SentencePiece?

SentencePiece is a re-implementation of **sub-word units** , an effective way to alleviate the open vocabulary problems in neural machine translation. SentencePiece supports two segmentation algorithms, **byte-pair-encoding (BPE)** [ @abstr_hyperlink ] and **unigram language model** [ @abstr_hyperlink ]. Here are the high level differences from other implementations.

#### The number of unique tokens is predetermined

Neural Machine Translation models typically operate with a fixed vocabulary. Unlike most unsupervised word segmentation algorithms, which assume an infinite vocabulary, SentencePiece trains the segmentation model such that the final vocabulary size is fixed, e.g., @abstr_number k, @abstr_number k, or @abstr_number k.

Note that SentencePiece specifies the final vocabulary size for training, which is different from @abstr_hyperlink that uses the number of merge operations. The number of merge operations is a BPE-specific parameter and not applicable to other segmentation algorithms, including unigram, word and character.

#### Trains from raw sentences

Previous sub-word implementations assume that the input sentences are pre-tokenized. This constraint was required for efficient training, but makes the preprocessing complicated as we have to run language dependent tokenizers in advance. The implementation of SentencePiece is fast enough to train the model from raw sentences. This is useful for training the tokenizer and detokenizer for Chinese, Japanese and Korean where no explicit spaces exist between words.

#### Whitespace is treated as a basic symbol

The first step of Natural Language processing is text tokenization. For example, a standard English tokenizer would segment the text "Hello world." into the following three tokens.

> [Hello] [World] [.]

One observation is that the original input and tokenized sequence are **NOT reversibly convertible**. For instance, the information that is no space between “World” and “.” is dropped from the tokenized sequence, since e.g., `Tokenize(“World.”) == Tokenize(“World .”)`

SentencePiece treats the input text just as a sequence of Unicode characters. Whitespace is also handled as a normal symbol. To handle the whitespace as a basic token explicitly, SentencePiece first escapes the whitespace with a meta symbol "▁" (U+ @abstr_number ) as follows.

> Hello▁World.

Then, this text is segmented into small pieces, for example:

> [Hello] [▁Wor] [ld] [.]

Since the whitespace is preserved in the segmented text, we can detokenize the text without any ambiguities.

@abstr_code_section 

This feature makes it possible to perform detokenization without relying on language-specific resources.

Note that we cannot apply the same lossless conversions when splitting the sentence with standard word segmenters, since they treat the whitespace as a special symbol. Tokenized sequences do not preserve the necessary information to restore the original sentence.

  * (en) Hello world. → [Hello] [World] [.] (A space between Hello and World)
  * (ja) こんにちは世界。 → [こんにちは] [世界] [。] (No space between こんにちは and 世界)



#### Subword regularization

Subword regularization [ @abstr_hyperlink ] is a simple regularization method that virtually augments training data with on-the-fly subword sampling, which helps to improve the accuracy as well as robustness of NMT models.

To enable subword regularization, you would like to integrate SentencePiece library (C++/Python) into the NMT system to sample one segmentation for each parameter update, which is different from the standard off-line data preparations. Here's the example of Python library. You can find that 'New York' is segmented differently on each `SampleEncode` call. The details of sampling parameters are found in sentencepiece_processor.h.

@abstr_code_section 

## Installation

### Python module

SentencePiece provides Python wrapper that supports both SentencePiece training and segmentation. You can install Python binary package of SentencePiece with.

@abstr_code_section 

For more detail, see Python module

### C++ (from source)

The following tools and libraries are required to build SentencePiece:

  * @abstr_hyperlink 
  * C++ @abstr_number compiler
  * @abstr_hyperlink library (optional, @abstr_number - @abstr_number % performance improvement can be obtained.)



On Ubuntu, the build tools can be installed with apt-get: @abstr_code_section 

#### Build and Install SentencePiece

@abstr_code_section On OSX/macOS, replace the last command with `sudo update_dyld_shared_cache`

### TensorFlow module

See tensorflow/README.md

## Usage instructions

### Train SentencePiece Model

@abstr_code_section * `--input`: one-sentence-per-line **raw** corpus file. No need to run tokenizer, normalizer or preprocessor. By default, SentencePiece normalizes the input with Unicode NFKC. You can pass a comma-separated list of files. * `--model_prefix`: output model name prefix. `<model_name>.model` and `<model_name>.vocab` are generated. * `--vocab_size`: vocabulary size, e.g., @abstr_number , @abstr_number , or @abstr_number * `--character_coverage`: amount of characters covered by the model, good defaults are: `@abstr_number . @abstr_number` for languages with rich character set like Japanse or Chinese and `@abstr_number . @abstr_number` for other languages with small character set. * `--model_type`: model type. Choose from `unigram` (default), `bpe`, `char`, or `word`. The input sentence must be pretokenized when using `word` type.

Use `--help` flag to display all parameters for training.

### Encode raw text into sentence pieces/ids

@abstr_code_section 

Use `--extra_options` flag to insert the BOS/EOS markers or reverse the input sequence. @abstr_code_section 

SentencePiece supports nbest segmentation and segmentation sampling with `--output_format=(nbest|sample)_(piece|id)` flags. @abstr_code_section 

### Decode sentence pieces/ids into raw text

@abstr_code_section Use `--extra_options` flag to decode the text in reverse order. @abstr_code_section 

### End-to-End Example

@abstr_code_section You can find that the original input sentence is restored from the vocabulary id sequence.

### Export vocabulary list

@abstr_code_section `<output file>` stores a list of vocabulary and emission log probabilities. The vocabulary id corresponds to the line number in this file.

### Redefine special meta tokens

By default, SentencePiece uses Unknown (<unk>), BOS (<s>) and EOS (</s>) tokens which have the ids of @abstr_number , @abstr_number , and @abstr_number respectively. We can redefine this mapping in the training phase as follows.

@abstr_code_section When setting - @abstr_number id e.g., `bos_id=- @abstr_number`, this special token is disabled. Note that the unknow id cannot be disabled. We can define an id for padding (<pad>) as `--pad_id= @abstr_number @abstr_code_section spm_encode` accepts a `--vocabulary` and a `--vocabulary_threshold` option so that `spm_encode` will only produce symbols which also appear in the vocabulary (with at least some frequency). The background of this feature is described in @abstr_hyperlink .

The usage is basically the same as that of `subword-nmt`. Assuming that L @abstr_number and L @abstr_number are the two languages (source/target languages), train the shared spm model, and get resulting vocabulary for each:

@abstr_code_section 

`shuffle` command is used just in case because `spm_train` loads the first @abstr_number M lines of corpus by default.

Then segment train/test corpus with `--vocabulary` option @abstr_code_section 

## Advanced topics

  * SentencePiece Experiments
  * SentencePieceProcessor C++ API
  * Use custom text normalization rules
  * Use custom symbols
  * Python Module
  * TensorFlow Module
  * [Segmentation and training algorithms in detail]


