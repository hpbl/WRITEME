# PyTorch Pretrained BERT: The Big & Extending Repository of pretrained Transformers

@abstr_hyperlink 

This repository contains op-for-op PyTorch reimplementations, pre-trained models and fine-tuning examples for:

  * @abstr_hyperlink ,
  * @abstr_hyperlink ,
  * @abstr_hyperlink , and
  * @abstr_hyperlink .



These implementations have been tested on several datasets (see the examples) and should match the performances of the associated TensorFlow implementations (e.g. ~ @abstr_number F @abstr_number on SQuAD for BERT, ~ @abstr_number F @abstr_number on RocStories for OpenAI GPT and ~ @abstr_number . @abstr_number perplexity on WikiText @abstr_number for the Transformer-XL). You can find more details in the Examples section below.

Here are some information on these models:

**BERT** was released together with the paper @abstr_hyperlink by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. This PyTorch implementation of BERT is provided with @abstr_hyperlink , examples, notebooks and a command-line interface to load any pre-trained TensorFlow checkpoint for BERT is also provided.

**OpenAI GPT** was released together with the paper @abstr_hyperlink by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. This PyTorch implementation of OpenAI GPT is an adaptation of the @abstr_hyperlink and is provided with @abstr_hyperlink and a command-line interface that was used to convert the pre-trained NumPy checkpoint in PyTorch.

**Google/CMU's Transformer-XL** was released together with the paper @abstr_hyperlink by Zihang Dai _, Zhilin Yang_ , Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan Salakhutdinov. This PyTorch implementation of Transformer-XL is an adaptation of the original @abstr_hyperlink which has been slightly modified to match the performances of the TensorFlow implementation and allow to re-use the pretrained weights. A command-line interface is provided to convert TensorFlow checkpoints in PyTorch models.

**OpenAI GPT- @abstr_number _* was released together with the paper @abstr_hyperlink by Alec Radford_ , Jeffrey Wu _, Rewon Child, David Luan, Dario Amodei_** and Ilya Sutskever*. This PyTorch implementation of OpenAI GPT- @abstr_number is an adaptation of the @abstr_hyperlink and is provided with @abstr_hyperlink and a command-line interface that was used to convert the TensorFlow checkpoint in PyTorch.

## Content

| Section | Description | |-|-| | Installation | How to install the package | | Overview | Overview of the package | | Usage | Quickstart examples | | Doc | Detailed documentation | | Examples | Detailed examples on how to fine-tune Bert | | Notebooks | Introduction on the provided Jupyter Notebooks | | TPU | Notes on TPU support and pretraining scripts | | Command-line interface | Convert a TensorFlow checkpoint in a PyTorch dump |

## Installation

This repo was tested on Python @abstr_number . @abstr_number and @abstr_number . @abstr_number + (examples are tested only on python @abstr_number . @abstr_number +) and PyTorch @abstr_number . @abstr_number . @abstr_number / @abstr_number . @abstr_number . @abstr_number 

### With pip

PyTorch pretrained bert can be installed by pip as follows: @abstr_code_section 

If you want to reproduce the original tokenization process of the `OpenAI GPT` paper, you will need to install `ftfy` (limit to version @abstr_number . @abstr_number . @abstr_number if you are using Python @abstr_number ) and `SpaCy` : @abstr_code_section 

If you don't install `ftfy` and `SpaCy`, the `OpenAI GPT` tokenizer will default to tokenize using BERT's `BasicTokenizer` followed by Byte-Pair Encoding (which should be fine for most usage, don't worry).

### From source

Clone the repository and run: @abstr_code_section 

Here also, if you want to reproduce the original tokenization process of the `OpenAI GPT` model, you will need to install `ftfy` (limit to version @abstr_number . @abstr_number . @abstr_number if you are using Python @abstr_number ) and `SpaCy` : @abstr_code_section 

Again, if you don't install `ftfy` and `SpaCy`, the `OpenAI GPT` tokenizer will default to tokenize using BERT's `BasicTokenizer` followed by Byte-Pair Encoding (which should be fine for most usage).

A series of tests is included in the @abstr_hyperlink and can be run using `pytest` (install pytest if needed: `pip install pytest`).

You can run the tests with the command: @abstr_code_section 

## Overview

This package comprises the following classes that can be imported in Python and are detailed in the Doc section of this readme:

  * Eight **Bert** PyTorch models (`torch.nn.Module`) with pre-trained weights (in the modeling.py file):

    * BertModel - raw BERT Transformer model ( **fully pre-trained** ),
    * BertForMaskedLM - BERT Transformer with the pre-trained masked language modeling head on top ( **fully pre-trained** ),
    * BertForNextSentencePrediction - BERT Transformer with the pre-trained next sentence prediction classifier on top ( **fully pre-trained** ),
    * BertForPreTraining - BERT Transformer with masked language modeling head and next sentence prediction classifier on top ( **fully pre-trained** ),
    * BertForSequenceClassification - BERT Transformer with a sequence classification head on top (BERT Transformer is **pre-trained** , the sequence classification head **is only initialized and has to be trained** ),
    * BertForMultipleChoice - BERT Transformer with a multiple choice head on top (used for task like Swag) (BERT Transformer is **pre-trained** , the multiple choice classification head **is only initialized and has to be trained** ),
    * BertForTokenClassification - BERT Transformer with a token classification head on top (BERT Transformer is **pre-trained** , the token classification head **is only initialized and has to be trained** ),
    * BertForQuestionAnswering - BERT Transformer with a token classification head on top (BERT Transformer is **pre-trained** , the token classification head **is only initialized and has to be trained** ).
  * Three **OpenAI GPT** PyTorch models (`torch.nn.Module`) with pre-trained weights (in the modeling_openai.py file):

    * OpenAIGPTModel - raw OpenAI GPT Transformer model ( **fully pre-trained** ),
    * OpenAIGPTLMHeadModel - OpenAI GPT Transformer with the tied language modeling head on top ( **fully pre-trained** ),
    * OpenAIGPTDoubleHeadsModel - OpenAI GPT Transformer with the tied language modeling head and a multiple choice classification head on top (OpenAI GPT Transformer is **pre-trained** , the multiple choice classification head **is only initialized and has to be trained** ),
  * Two **Transformer-XL** PyTorch models (`torch.nn.Module`) with pre-trained weights (in the modeling_transfo_xl.py file):

    * TransfoXLModel - Transformer-XL model which outputs the last hidden state and memory cells ( **fully pre-trained** ),
    * TransfoXLLMHeadModel - Transformer-XL with the tied adaptive softmax head on top for language modeling which outputs the logits/loss and memory cells ( **fully pre-trained** ),
  * Three _*OpenAI GPT- @abstr_number *_ PyTorch models (`torch.nn.Module`) with pre-trained weights (in the modeling_gpt @abstr_number .py file):

    * GPT @abstr_number Model - raw OpenAI GPT- @abstr_number Transformer model ( **fully pre-trained** ),
    * GPT @abstr_number LMHeadModel - OpenAI GPT- @abstr_number Transformer with the tied language modeling head on top ( **fully pre-trained** ),
    * GPT @abstr_number DoubleHeadsModel - OpenAI GPT- @abstr_number Transformer with the tied language modeling head and a multiple choice classification head on top (OpenAI GPT- @abstr_number Transformer is **pre-trained** , the multiple choice classification head **is only initialized and has to be trained** ),
  * Tokenizers for **BERT** (using word-piece) (in the tokenization.py file):

    * `BasicTokenizer` \- basic tokenization (punctuation splitting, lower casing, etc.),
    * `WordpieceTokenizer` \- WordPiece tokenization,
    * `BertTokenizer` \- perform end-to-end tokenization, i.e. basic tokenization followed by WordPiece tokenization.
  * Tokenizer for **OpenAI GPT** (using Byte-Pair-Encoding) (in the tokenization_openai.py file):

    * `OpenAIGPTTokenizer` \- perform Byte-Pair-Encoding (BPE) tokenization.
  * Tokenizer for **Transformer-XL** (word tokens ordered by frequency for adaptive softmax) (in the tokenization_transfo_xl.py file):

    * `OpenAIGPTTokenizer` \- perform word tokenization and can order words by frequency in a corpus for use in an adaptive softmax.
  * Tokenizer for _*OpenAI GPT- @abstr_number *_ (using byte-level Byte-Pair-Encoding) (in the tokenization_gpt @abstr_number .py file):

    * `GPT @abstr_number Tokenizer` \- perform byte-level Byte-Pair-Encoding (BPE) tokenization.
  * Optimizer for **BERT** (in the optimization.py file):

    * `BertAdam` \- Bert version of Adam algorithm with weight decay fix, warmup and linear decay of the learning rate.
  * Optimizer for **OpenAI GPT** (in the optimization_openai.py file):

    * `OpenAIAdam` \- OpenAI GPT version of Adam algorithm with weight decay fix, warmup and linear decay of the learning rate.
  * Configuration classes for BERT, OpenAI GPT and Transformer-XL (in the respective modeling.py, modeling_openai.py, modeling_transfo_xl.py files):

    * `BertConfig` \- Configuration class to store the configuration of a `BertModel` with utilities to read and write from JSON configuration files.
    * `OpenAIGPTConfig` \- Configuration class to store the configuration of a `OpenAIGPTModel` with utilities to read and write from JSON configuration files.
    * `GPT @abstr_number Config` \- Configuration class to store the configuration of a `GPT @abstr_number Model` with utilities to read and write from JSON configuration files.
    * `TransfoXLConfig` \- Configuration class to store the configuration of a `TransfoXLModel` with utilities to read and write from JSON configuration files.



The repository further comprises:

  * Five examples on how to use **BERT** (in the examples folder):

    * extract_features.py - Show how to extract hidden states from an instance of `BertModel`,
    * run_classifier.py - Show how to fine-tune an instance of `BertForSequenceClassification` on GLUE's MRPC task,
    * run_squad.py - Show how to fine-tune an instance of `BertForQuestionAnswering` on SQuAD v @abstr_number . @abstr_number and SQuAD v @abstr_number . @abstr_number tasks.
    * run_swag.py - Show how to fine-tune an instance of `BertForMultipleChoice` on Swag task.
    * simple_lm_finetuning.py - Show how to fine-tune an instance of `BertForPretraining` on a target text corpus.
  * One example on how to use **OpenAI GPT** (in the examples folder):

    * run_openai_gpt.py - Show how to fine-tune an instance of `OpenGPTDoubleHeadsModel` on the RocStories task.
  * One example on how to use **Transformer-XL** (in the examples folder):

    * run_transfo_xl.py - Show how to load and evaluate a pre-trained model of `TransfoXLLMHeadModel` on WikiText @abstr_number .
  * One example on how to use _*OpenAI GPT- @abstr_number *_ in the unconditional and interactive mode (in the examples folder):

    * run_gpt @abstr_number .py - Show how to use OpenAI GPT- @abstr_number an instance of `GPT @abstr_number LMHeadModel` to generate text (same as the original OpenAI GPT- @abstr_number examples).

These examples are detailed in the Examples section of this readme.

  * Three notebooks that were used to check that the TensorFlow and PyTorch models behave identically (in the notebooks folder):

    * Comparing-TF-and-PT-models.ipynb - Compare the hidden states predicted by `BertModel`,
    * Comparing-TF-and-PT-models-SQuAD.ipynb - Compare the spans predicted by `BertForQuestionAnswering` instances,
    * Comparing-TF-and-PT-models-MLM-NSP.ipynb - Compare the predictions of the `BertForPretraining` instances.

These notebooks are detailed in the Notebooks section of this readme.

  * A command-line interface to convert TensorFlow checkpoints (BERT, Transformer-XL) or NumPy checkpoint (OpenAI) in a PyTorch save of the associated PyTorch model:

This CLI is detailed in the Command-line interface section of this readme.




## Usage

### BERT

Here is a quick-start example using `BertTokenizer`, `BertModel` and `BertForMaskedLM` class with Google AI's pre-trained `Bert base uncased` model. See the doc section below for all the details on these classes.

First let's prepare a tokenized input with `BertTokenizer`

@abstr_code_section 

Let's see how to use `BertModel` to get hidden states

@abstr_code_section 

And how to use `BertForMaskedLM`

@abstr_code_section 

### OpenAI GPT

Here is a quick-start example using `OpenAIGPTTokenizer`, `OpenAIGPTModel` and `OpenAIGPTLMHeadModel` class with OpenAI's pre-trained model. See the doc section below for all the details on these classes.

First let's prepare a tokenized input with `OpenAIGPTTokenizer`

@abstr_code_section 

Let's see how to use `OpenAIGPTModel` to get hidden states

@abstr_code_section 

And how to use `OpenAIGPTLMHeadModel`

@abstr_code_section 

And how to use `OpenAIGPTDoubleHeadsModel`

@abstr_code_section 

### Transformer-XL

Here is a quick-start example using `TransfoXLTokenizer`, `TransfoXLModel` and `TransfoXLModelLMHeadModel` class with the Transformer-XL model pre-trained on WikiText- @abstr_number . See the doc section below for all the details on these classes.

First let's prepare a tokenized input with `TransfoXLTokenizer`

@abstr_code_section 

Let's see how to use `TransfoXLModel` to get hidden states

@abstr_code_section 

And how to use `TransfoXLLMHeadModel`

@abstr_code_section 

### OpenAI GPT- @abstr_number

Here is a quick-start example using `GPT @abstr_number Tokenizer`, `GPT @abstr_number Model` and `GPT @abstr_number LMHeadModel` class with OpenAI's pre-trained model. See the doc section below for all the details on these classes.

First let's prepare a tokenized input with `GPT @abstr_number Tokenizer`

@abstr_code_section 

Let's see how to use `GPT @abstr_number Model` to get hidden states

@abstr_code_section 

And how to use `GPT @abstr_number LMHeadModel`

@abstr_code_section 

And how to use `GPT @abstr_number DoubleHeadsModel`

@abstr_code_section 

## Doc

Here is a detailed documentation of the classes in the package and how to use them:

| Sub-section | Description | |-|-| | Loading pre-trained weights | How to load Google AI/OpenAI's pre-trained weight or a PyTorch saved instance | | Serialization best-practices | How to save and reload a fine-tuned model | | Configurations | API of the configuration classes for BERT, GPT, GPT- @abstr_number and Transformer-XL | | Models | API of the PyTorch model classes for BERT, GPT, GPT- @abstr_number and Transformer-XL | | Tokenizers | API of the tokenizers class for BERT, GPT, GPT- @abstr_number and Transformer-XL| | Optimizers | API of the optimizers |

### Loading Google AI or OpenAI pre-trained weights or PyTorch dump

### `from_pretrained()` method

To load one of Google AI's, OpenAI's pre-trained models or a PyTorch saved model (an instance of `BertForPreTraining` saved with `torch.save()`), the PyTorch model classes and the tokenizer can be instantiated using the `from_pretrained()` method:

@abstr_code_section 

where

  * `BERT_CLASS` is either a tokenizer to load the vocabulary (`BertTokenizer` or `OpenAIGPTTokenizer` classes) or one of the eight BERT or three OpenAI GPT PyTorch model classes (to load the pre-trained weights): `BertModel`, `BertForMaskedLM`, `BertForNextSentencePrediction`, `BertForPreTraining`, `BertForSequenceClassification`, `BertForTokenClassification`, `BertForMultipleChoice`, `BertForQuestionAnswering`, `OpenAIGPTModel`, `OpenAIGPTLMHeadModel` or `OpenAIGPTDoubleHeadsModel`, and
  * `PRE_TRAINED_MODEL_NAME_OR_PATH` is either:

    * the shortcut name of a Google AI's or OpenAI's pre-trained model selected in the list:

    * `bert-base-uncased`: @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters

    * `bert-large-uncased`: @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
    * `bert-base-cased`: @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads , @abstr_number M parameters
    * `bert-large-cased`: @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
    * `bert-base-multilingual-uncased`: (Orig, not recommended) @abstr_number languages, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
    * `bert-base-multilingual-cased`: **(New, recommended)** @abstr_number languages, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
    * `bert-base-chinese`: Chinese Simplified and Traditional, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
    * `bert-base-german-cased`: Trained on German data only, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters @abstr_hyperlink 
    * `bert-large-uncased-whole-word-masking`: @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters - Trained with Whole Word Masking (mask all of the the tokens corresponding to a word at once)
    * `bert-large-cased-whole-word-masking`: @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters - Trained with Whole Word Masking (mask all of the the tokens corresponding to a word at once)
    * `bert-large-uncased-whole-word-masking-finetuned-squad`: The `bert-large-uncased-whole-word-masking` model finetuned on SQuAD (using the `run_squad.py` examples). Results: *exact_match: @abstr_number . @abstr_number , f @abstr_number : @abstr_number . @abstr_number *
    * `openai-gpt`: OpenAI GPT English model, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
    * `gpt @abstr_number`: OpenAI GPT- @abstr_number English model, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
    * `gpt @abstr_number -medium`: OpenAI GPT- @abstr_number English model, @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters
    * `transfo-xl-wt @abstr_number`: Transformer-XL English model trained on wikitext- @abstr_number , @abstr_number -layer, @abstr_number -hidden, @abstr_number -heads, @abstr_number M parameters

    * a path or url to a pretrained model archive containing:

    * `bert_config.json` or `openai_gpt_config.json` a configuration file for the model, and

    * `pytorch_model.bin` a PyTorch dump of a pre-trained instance of `BertForPreTraining`, `OpenAIGPTModel`, `TransfoXLModel`, `GPT @abstr_number LMHeadModel` (saved with the usual `torch.save()`)

If `PRE_TRAINED_MODEL_NAME_OR_PATH` is a shortcut name, the pre-trained weights will be downloaded from AWS S @abstr_number (see the links here) and stored in a cache folder to avoid future download (the cache folder can be found at `~/.pytorch_pretrained_bert/`).

  * `cache_dir` can be an optional path to a specific directory to download and cache the pre-trained model weights. This option is useful in particular when you are using distributed training: to avoid concurrent access to the same weights you can set for example `cache_dir='./pretrained_model_{}'.format(args.local_rank)` (see the section on distributed training for more information).

  * `from_tf`: should we load the weights from a locally saved TensorFlow checkpoint
  * `state_dict`: an optional state dictionnary (collections.OrderedDict object) to use instead of Google pre-trained models
  * `*inputs`, `**kwargs`: additional input for the specific Bert class (ex: num_labels for BertForSequenceClassification)



`Uncased` means that the text has been lowercased before WordPiece tokenization, e.g., `John Smith` becomes `john smith`. The Uncased model also strips out any accent markers. `Cased` means that the true case and accent markers are preserved. Typically, the Uncased model is better unless you know that case information is important for your task (e.g., Named Entity Recognition or Part-of-Speech tagging). For information about the Multilingual and Chinese model, see the @abstr_hyperlink or the original TensorFlow repository.

**When using an`uncased model`, make sure to pass `--do_lower_case` to the example training scripts (or pass `do_lower_case=True` to FullTokenizer if you're using your own script and loading the tokenizer your-self.).**

Examples: @abstr_code_section 

#### Cache directory

`pytorch_pretrained_bert` save the pretrained weights in a cache directory which is located at (in this order of priority):

  * `cache_dir` optional arguments to the `from_pretrained()` method (see above),
  * shell environment variable `PYTORCH_PRETRAINED_BERT_CACHE`,
  * PyTorch cache home + `/pytorch_pretrained_bert/` where PyTorch cache home is defined by (in this order): 
    * shell environment variable `ENV_TORCH_HOME`
    * shell environment variable `ENV_XDG_CACHE_HOME` \+ `/torch/`)
    * default: `~/.cache/torch/`



Usually, if you don't set any specific environment variable, `pytorch_pretrained_bert` cache will be at `~/.cache/torch/pytorch_pretrained_bert/`.

You can alsways safely delete `pytorch_pretrained_bert` cache but the pretrained model weights and vocabulary files wil have to be re-downloaded from our S @abstr_number .

### Serialization best-practices

This section explain how you can save and re-load a fine-tuned model (BERT, GPT, GPT- @abstr_number and Transformer-XL). There are three types of files you need to save to be able to reload a fine-tuned model:

  * the model it-self which should be saved following PyTorch serialization @abstr_hyperlink ,
  * the configuration file of the model which is saved as a JSON file, and
  * the vocabulary (and the merges for the BPE-based models GPT and GPT- @abstr_number ).



The _default filenames_ of these files are as follow:

  * the model weights file: `pytorch_model.bin`,
  * the configuration file: `config.json`,
  * the vocabulary file: `vocab.txt` for BERT and Transformer-XL, `vocab.json` for GPT/GPT- @abstr_number (BPE vocabulary),
  * for GPT/GPT- @abstr_number (BPE vocabulary) the additional merges file: `merges.txt`.



**If you save a model using these _default filenames_ , you can then re-load the model and tokenizer using the `from_pretrained()` method.**

Here is the recommended way of saving the model, configuration and vocabulary to an `output_dir` directory and reloading the model and tokenizer afterwards:

@abstr_code_section 

Here is another way you can save and reload the model if you want to use specific paths for each type of files:

@abstr_code_section 

### Configurations

Models (BERT, GPT, GPT- @abstr_number and Transformer-XL) are defined and build from configuration classes which containes the parameters of the models (number of layers, dimensionalities...) and a few utilities to read and write from JSON configuration files. The respective configuration classes are:

  * `BertConfig` for `BertModel` and BERT classes instances.
  * `OpenAIGPTConfig` for `OpenAIGPTModel` and OpenAI GPT classes instances.
  * `GPT @abstr_number Config` for `GPT @abstr_number Model` and OpenAI GPT- @abstr_number classes instances.
  * `TransfoXLConfig` for `TransfoXLModel` and Transformer-XL classes instances.



These configuration classes contains a few utilities to load and save configurations:

  * `from_dict(cls, json_object)`: A class method to construct a configuration from a Python dictionary of parameters. Returns an instance of the configuration class.
  * `from_json_file(cls, json_file)`: A class method to construct a configuration from a json file of parameters. Returns an instance of the configuration class.
  * `to_dict()`: Serializes an instance to a Python dictionary. Returns a dictionary.
  * `to_json_string()`: Serializes an instance to a JSON string. Returns a string.
  * `to_json_file(json_file_path)`: Save an instance to a json file.



### Models

#### @abstr_number . `BertModel`

`BertModel` is the basic BERT Transformer model with a layer of summed token, position and sequence embeddings followed by a series of identical self-attention blocks ( @abstr_number for BERT-base, @abstr_number for BERT-large).

Instantiation: The model can be instantiated with the following arguments:

  * `config`: a `BertConfig` class instance with the configuration to build a new model.
  * `output_attentions`: If True, also output attentions weights computed by the model at each layer. Default: False
  * `keep_multihead_output`: If True, saves output of the multi-head attention module with its gradient. This can be used to compute head importance metrics. Default: False



The inputs and output are **identical to the TensorFlow model inputs and outputs**.

We detail them here. This model takes as _inputs_ : modeling.py \- `input_ids`: a torch.LongTensor of shape [batch_size, sequence_length] with the word token indices in the vocabulary (see the tokens preprocessing logic in the scripts extract_features.py, run_classifier.py and run_squad.py), and \- `token_type_ids`: an optional torch.LongTensor of shape [batch_size, sequence_length] with the token types indices selected in [ @abstr_number , @abstr_number ]. Type @abstr_number corresponds to a `sentence A` and type @abstr_number corresponds to a `sentence B` token (see BERT paper for more details). \- `attention_mask`: an optional torch.LongTensor of shape [batch_size, sequence_length] with indices selected in [ @abstr_number , @abstr_number ]. It's a mask to be used if some input sequence lengths are smaller than the max input sequence length of the current batch. It's the mask that we typically use for attention when a batch has varying length sentences. \- `output_all_encoded_layers`: boolean which controls the content of the `encoded_layers` output as described below. Default: `True`. \- `head_mask`: an optional torch.Tensor of shape [num_heads] or [num_layers, num_heads] with indices between @abstr_number and @abstr_number . It's a mask to be used to nullify some heads of the transformer. @abstr_number . @abstr_number => head is fully masked, @abstr_number . @abstr_number => head is not masked.

This model _outputs_ a tuple composed of:

  * `encoded_layers`: controled by the value of the `output_encoded_layers` argument:

    * `output_all_encoded_layers=True`: outputs a list of the encoded-hidden-states at the end of each attention block (i.e. @abstr_number full sequences for BERT-base, @abstr_number for BERT-large), each encoded-hidden-state is a torch.FloatTensor of size [batch_size, sequence_length, hidden_size],
    * `output_all_encoded_layers=False`: outputs only the encoded-hidden-states corresponding to the last attention block, i.e. a single torch.FloatTensor of size [batch_size, sequence_length, hidden_size],
  * `pooled_output`: a torch.FloatTensor of size [batch_size, hidden_size] which is the output of a classifier pretrained on top of the hidden state associated to the first character of the input (`CLF`) to train on the Next-Sentence task (see BERT's paper).




An example on how to use this class is given in the extract_features.py script which can be used to extract the hidden states of the model for a given input.

#### @abstr_number . `BertForPreTraining`

`BertForPreTraining` includes the `BertModel` Transformer followed by the two pre-training heads:

  * the masked language modeling head, and
  * the next sentence classification head.



_Inputs_ comprises the inputs of the BertModel class plus two optional labels:

  * `masked_lm_labels`: masked language modeling labels: torch.LongTensor of shape [batch_size, sequence_length] with indices selected in [- @abstr_number , @abstr_number , ..., vocab_size]. All labels set to - @abstr_number are ignored (masked), the loss is only computed for the labels set in [ @abstr_number , ..., vocab_size]
  * `next_sentence_label`: next sentence classification loss: torch.LongTensor of shape [batch_size] with indices selected in [ @abstr_number , @abstr_number ]. @abstr_number => next sentence is the continuation, @abstr_number => next sentence is a random sentence.



_Outputs_ :

  * if `masked_lm_labels` and `next_sentence_label` are not `None`: Outputs the total_loss which is the sum of the masked language modeling loss and the next sentence classification loss.
  * if `masked_lm_labels` or `next_sentence_label` is `None`: Outputs a tuple comprising

    * the masked language modeling logits, and
    * the next sentence classification logits.



There are two examples on how to use this class is given in the lm_finetuning/ directory. The scripts in this directory can be used to fine-tune the BERT language model. This should improve model performance, if the language style is different from the original BERT training corpus (Wiki + BookCorpus).

#### @abstr_number . `BertForMaskedLM`

`BertForMaskedLM` includes the `BertModel` Transformer followed by the (possibly) pre-trained masked language modeling head.

_Inputs_ comprises the inputs of the BertModel class plus optional label:

  * `masked_lm_labels`: masked language modeling labels: torch.LongTensor of shape [batch_size, sequence_length] with indices selected in [- @abstr_number , @abstr_number , ..., vocab_size]. All labels set to - @abstr_number are ignored (masked), the loss is only computed for the labels set in [ @abstr_number , ..., vocab_size]



_Outputs_ :

  * if `masked_lm_labels` is not `None`: Outputs the masked language modeling loss.
  * if `masked_lm_labels` is `None`: Outputs the masked language modeling logits.



#### @abstr_number . `BertForNextSentencePrediction`

`BertForNextSentencePrediction` includes the `BertModel` Transformer followed by the next sentence classification head.

_Inputs_ comprises the inputs of the BertModel class plus an optional label:

  * `next_sentence_label`: next sentence classification loss: torch.LongTensor of shape [batch_size] with indices selected in [ @abstr_number , @abstr_number ]. @abstr_number => next sentence is the continuation, @abstr_number => next sentence is a random sentence.



_Outputs_ :

  * if `next_sentence_label` is not `None`: Outputs the next sentence classification loss.
  * if `next_sentence_label` is `None`: Outputs the next sentence classification logits.



#### @abstr_number . `BertForSequenceClassification`

`BertForSequenceClassification` is a fine-tuning model that includes `BertModel` and a sequence-level (sequence or pair of sequences) classifier on top of the `BertModel`.

The sequence-level classifier is a linear layer that takes as input the last hidden state of the first character in the input sequence (see Figures @abstr_number a and @abstr_number b in the BERT paper).

An example on how to use this class is given in the run_classifier.py script which can be used to fine-tune a single sequence (or pair of sequence) classifier using BERT, for example for the MRPC task.

#### @abstr_number . `BertForMultipleChoice`

`BertForMultipleChoice` is a fine-tuning model that includes `BertModel` and a linear layer on top of the `BertModel`.

The linear layer outputs a single value for each choice of a multiple choice problem, then all the outputs corresponding to an instance are passed through a softmax to get the model choice.

This implementation is largely inspired by the work of OpenAI in @abstr_hyperlink and the answer of Jacob Devlin in the following @abstr_hyperlink .

An example on how to use this class is given in the run_swag.py script which can be used to fine-tune a multiple choice classifier using BERT, for example for the Swag task.

#### @abstr_number . `BertForTokenClassification`

`BertForTokenClassification` is a fine-tuning model that includes `BertModel` and a token-level classifier on top of the `BertModel`.

The token-level classifier is a linear layer that takes as input the last hidden state of the sequence.

#### @abstr_number . `BertForQuestionAnswering`

`BertForQuestionAnswering` is a fine-tuning model that includes `BertModel` with a token-level classifiers on top of the full sequence of last hidden states.

The token-level classifier takes as input the full sequence of the last hidden state and compute several (e.g. two) scores for each tokens that can for example respectively be the score that a given token is a `start_span` and a `end_span` token (see Figures @abstr_number c and @abstr_number d in the BERT paper).

An example on how to use this class is given in the run_squad.py script which can be used to fine-tune a token classifier using BERT, for example for the SQuAD task.

#### @abstr_number . `OpenAIGPTModel`

`OpenAIGPTModel` is the basic OpenAI GPT Transformer model with a layer of summed token and position embeddings followed by a series of @abstr_number identical self-attention blocks.

OpenAI GPT use a single embedding matrix to store the word and special embeddings. Special tokens embeddings are additional tokens that are not pre-trained: `[SEP]`, `[CLS]`... Special tokens need to be trained during the fine-tuning if you use them. The number of special embeddings can be controled using the `set_num_special_tokens(num_special_tokens)` function.

The embeddings are ordered as follow in the token embeddings matrice:

@abstr_code_section 

where total_tokens_embeddings can be obtained as config.total_tokens_embeddings and is: `total_tokens_embeddings = config.vocab_size + config.n_special` You should use the associate indices to index the embeddings.

Instantiation: The model can be instantiated with the following arguments:

  * `config`: a `OpenAIConfig` class instance with the configuration to build a new model.
  * `output_attentions`: If True, also output attentions weights computed by the model at each layer. Default: False
  * `keep_multihead_output`: If True, saves output of the multi-head attention module with its gradient. This can be used to compute head importance metrics. Default: False



The inputs and output are **identical to the TensorFlow model inputs and outputs**.

We detail them here. This model takes as _inputs_ : modeling_openai.py \- `input_ids`: a torch.LongTensor of shape [batch_size, sequence_length] (or more generally [d_ @abstr_number , ..., d_n, sequence_length] were d_ @abstr_number ... d_n are arbitrary dimensions) with the word BPE token indices selected in the range [ @abstr_number , total_tokens_embeddings[ \- `position_ids`: an optional torch.LongTensor with the same shape as input_ids with the position indices (selected in the range [ @abstr_number , config.n_positions - @abstr_number [. \- `token_type_ids`: an optional torch.LongTensor with the same shape as input_ids You can use it to add a third type of embedding to each input token in the sequence (the previous two being the word and position embeddings). The input, position and token_type embeddings are summed inside the Transformer before the first self-attention block. \- `head_mask`: an optional torch.Tensor of shape [num_heads] or [num_layers, num_heads] with indices between @abstr_number and @abstr_number . It's a mask to be used to nullify some heads of the transformer. @abstr_number . @abstr_number => head is fully masked, @abstr_number . @abstr_number => head is not masked.

This model _outputs_ : \- `hidden_states`: a list of all the encoded-hidden-states in the model (length of the list: number of layers + @abstr_number for the output of the embeddings) as torch.FloatTensor of size [batch_size, sequence_length, hidden_size] (or more generally [d_ @abstr_number , ..., d_n, hidden_size] were d_ @abstr_number ... d_n are the dimension of input_ids)

#### @abstr_number . `OpenAIGPTLMHeadModel`

`OpenAIGPTLMHeadModel` includes the `OpenAIGPTModel` Transformer followed by a language modeling head with weights tied to the input embeddings (no additional parameters).

_Inputs_ are the same as the inputs of the OpenAIGPTModel class plus optional labels: \- `lm_labels`: optional language modeling labels: torch.LongTensor of shape [batch_size, sequence_length] with indices selected in [- @abstr_number , @abstr_number , ..., vocab_size]. All labels set to - @abstr_number are ignored (masked), the loss is only computed for the labels set in [ @abstr_number , ..., vocab_size].

_Outputs_ : \- if `lm_labels` is not `None`: Outputs the language modeling loss. \- else: Outputs `lm_logits`: the language modeling logits as a torch.FloatTensor of size [batch_size, sequence_length, total_tokens_embeddings] (or more generally [d_ @abstr_number , ..., d_n, total_tokens_embeddings] were d_ @abstr_number ... d_n are the dimension of input_ids)

#### @abstr_number . `OpenAIGPTDoubleHeadsModel`

`OpenAIGPTDoubleHeadsModel` includes the `OpenAIGPTModel` Transformer followed by two heads: \- a language modeling head with weights tied to the input embeddings (no additional parameters) and: \- a multiple choice classifier (linear layer that take as input a hidden state in a sequence to compute a score, see details in paper).

_Inputs_ are the same as the inputs of the OpenAIGPTModel class plus a classification mask and two optional labels: \- `multiple_choice_token_ids`: a torch.LongTensor of shape [batch_size, num_choices] with the index of the token whose hidden state should be used as input for the multiple choice classifier (usually the [CLS] token for each choice). \- `lm_labels`: optional language modeling labels: torch.LongTensor of shape [batch_size, sequence_length] with indices selected in [- @abstr_number , @abstr_number , ..., vocab_size]. All labels set to - @abstr_number are ignored (masked), the loss is only computed for the labels set in [ @abstr_number , ..., vocab_size]. \- `multiple_choice_labels`: optional multiple choice labels: torch.LongTensor of shape [batch_size] with indices selected in [ @abstr_number , ..., num_choices].

_Outputs_ : \- if `lm_labels` and `multiple_choice_labels` are not `None`: Outputs a tuple of losses with the language modeling loss and the multiple choice loss. \- else Outputs a tuple with: \- `lm_logits`: the language modeling logits as a torch.FloatTensor of size [batch_size, num_choices, sequence_length, total_tokens_embeddings] \- `multiple_choice_logits`: the multiple choice logits as a torch.FloatTensor of size [batch_size, num_choices]

#### @abstr_number . `TransfoXLModel`

The Transformer-XL model is described in "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context".

Transformer XL use a relative positioning with sinusiodal patterns and adaptive softmax inputs which means that:

  * you don't need to specify positioning embeddings indices
  * the tokens in the vocabulary have to be sorted to decreasing frequency.



This model takes as _inputs_ : modeling_transfo_xl.py \- `input_ids`: a torch.LongTensor of shape [batch_size, sequence_length] with the token indices selected in the range [ @abstr_number , self.config.n_token[ \- `mems`: an optional memory of hidden states from previous forward passes as a list (num layers) of hidden states at the entry of each layer. Each hidden states has shape [self.config.mem_len, bsz, self.config.d_model]. Note that the first two dimensions are transposed in `mems` with regards to `input_ids`.

This model _outputs_ a tuple of (last_hidden_state, new_mems) \- `last_hidden_state`: the encoded-hidden-states at the top of the model as a torch.FloatTensor of size [batch_size, sequence_length, self.config.d_model] \- `new_mems`: list (num layers) of updated mem states at the entry of each layer each mem state is a torch.FloatTensor of size [self.config.mem_len, batch_size, self.config.d_model]. Note that the first two dimensions are transposed in `mems` with regards to `input_ids`.

##### Extracting a list of the hidden states at each layer of the Transformer-XL from `last_hidden_state` and `new_mems`:

The `new_mems` contain all the hidden states PLUS the output of the embeddings (`new_mems[ @abstr_number ]`). `new_mems[- @abstr_number ]` is the output of the hidden state of the layer below the last layer and `last_hidden_state` is the output of the last layer (i.E. the input of the softmax when we have a language modeling head on top).

There are two differences between the shapes of `new_mems` and `last_hidden_state`: `new_mems` have transposed first dimensions and are longer (of size `self.config.mem_len`). Here is how to extract the full list of hidden states from the model output:

@abstr_code_section 

#### @abstr_number . `TransfoXLLMHeadModel`

`TransfoXLLMHeadModel` includes the `TransfoXLModel` Transformer followed by an (adaptive) softmax head with weights tied to the input embeddings.

_Inputs_ are the same as the inputs of the TransfoXLModel class plus optional labels: \- `target`: an optional torch.LongTensor of shape [batch_size, sequence_length] with the target token indices selected in the range [ @abstr_number , self.config.n_token[

_Outputs_ a tuple of (last_hidden_state, new_mems) \- `softmax_output`: output of the (adaptive) softmax: \- if target is None: log probabilities of tokens, shape [batch_size, sequence_length, n_tokens] \- else: Negative log likelihood of target tokens with shape [batch_size, sequence_length] \- `new_mems`: list (num layers) of updated mem states at the entry of each layer each mem state is a torch.FloatTensor of size [self.config.mem_len, batch_size, self.config.d_model]. Note that the first two dimensions are transposed in `mems` with regards to `input_ids`.

#### @abstr_number . `GPT @abstr_number Model`

`GPT @abstr_number Model` is the OpenAI GPT- @abstr_number Transformer model with a layer of summed token and position embeddings followed by a series of @abstr_number identical self-attention blocks.

Instantiation: The model can be instantiated with the following arguments:

  * `config`: a `GPT @abstr_number Config` class instance with the configuration to build a new model.
  * `output_attentions`: If True, also output attentions weights computed by the model at each layer. Default: False
  * `keep_multihead_output`: If True, saves output of the multi-head attention module with its gradient. This can be used to compute head importance metrics. Default: False



The inputs and output are **identical to the TensorFlow model inputs and outputs**.

We detail them here. This model takes as _inputs_ : modeling_gpt @abstr_number .py \- `input_ids`: a torch.LongTensor of shape [batch_size, sequence_length] (or more generally [d_ @abstr_number , ..., d_n, sequence_length] were d_ @abstr_number ... d_n are arbitrary dimensions) with the word BPE token indices selected in the range [ @abstr_number , vocab_size[ \- `position_ids`: an optional torch.LongTensor with the same shape as input_ids with the position indices (selected in the range [ @abstr_number , config.n_positions - @abstr_number [. \- `token_type_ids`: an optional torch.LongTensor with the same shape as input_ids You can use it to add a third type of embedding to each input token in the sequence (the previous two being the word and position embeddings). The input, position and token_type embeddings are summed inside the Transformer before the first self-attention block. \- `past`: an optional list of torch.LongTensor that contains pre-computed hidden-states (key and values in the attention blocks) to speed up sequential decoding (this is the `presents` output of the model, cf. below). \- `head_mask`: an optional torch.Tensor of shape [num_heads] or [num_layers, num_heads] with indices between @abstr_number and @abstr_number . It's a mask to be used to nullify some heads of the transformer. @abstr_number . @abstr_number => head is fully masked, @abstr_number . @abstr_number => head is not masked.

This model _outputs_ : \- `hidden_states`: a list of all the encoded-hidden-states in the model (length of the list: number of layers + @abstr_number for the output of the embeddings) as torch.FloatTensor of size [batch_size, sequence_length, hidden_size] (or more generally [d_ @abstr_number , ..., d_n, hidden_size] were d_ @abstr_number ... d_n are the dimension of input_ids) \- `presents`: a list of pre-computed hidden-states (key and values in each attention blocks) as a torch.FloatTensors. They can be reused to speed up sequential decoding (see the `run_gpt @abstr_number .py` example).

#### @abstr_number . `GPT @abstr_number LMHeadModel`

`GPT @abstr_number LMHeadModel` includes the `GPT @abstr_number Model` Transformer followed by a language modeling head with weights tied to the input embeddings (no additional parameters).

_Inputs_ are the same as the inputs of the GPT @abstr_number Model class plus optional labels: \- `lm_labels`: optional language modeling labels: torch.LongTensor of shape [batch_size, sequence_length] with indices selected in [- @abstr_number , @abstr_number , ..., vocab_size]. All labels set to - @abstr_number are ignored (masked), the loss is only computed for the labels set in [ @abstr_number , ..., vocab_size].

_Outputs_ : \- if `lm_labels` is not `None`: Outputs the language modeling loss. \- else: a tuple of \- `lm_logits`: the language modeling logits as a torch.FloatTensor of size [batch_size, sequence_length, total_tokens_embeddings] (or more generally [d_ @abstr_number , ..., d_n, total_tokens_embeddings] were d_ @abstr_number ... d_n are the dimension of input_ids) \- `presents`: a list of pre-computed hidden-states (key and values in each attention blocks) as a torch.FloatTensors. They can be reused to speed up sequential decoding (see the `run_gpt @abstr_number .py` example).

#### @abstr_number . `GPT @abstr_number DoubleHeadsModel`

`GPT @abstr_number DoubleHeadsModel` includes the `GPT @abstr_number Model` Transformer followed by two heads: \- a language modeling head with weights tied to the input embeddings (no additional parameters) and: \- a multiple choice classifier (linear layer that take as input a hidden state in a sequence to compute a score, see details in paper).

_Inputs_ are the same as the inputs of the GPT @abstr_number Model class plus a classification mask and two optional labels: \- `multiple_choice_token_ids`: a torch.LongTensor of shape [batch_size, num_choices] with the index of the token whose hidden state should be used as input for the multiple choice classifier (usually the [CLS] token for each choice). \- `lm_labels`: optional language modeling labels: torch.LongTensor of shape [batch_size, sequence_length] with indices selected in [- @abstr_number , @abstr_number , ..., vocab_size]. All labels set to - @abstr_number are ignored (masked), the loss is only computed for the labels set in [ @abstr_number , ..., vocab_size]. \- `multiple_choice_labels`: optional multiple choice labels: torch.LongTensor of shape [batch_size] with indices selected in [ @abstr_number , ..., num_choices].

_Outputs_ : \- if `lm_labels` and `multiple_choice_labels` are not `None`: Outputs a tuple of losses with the language modeling loss and the multiple choice loss. \- else Outputs a tuple with: \- `lm_logits`: the language modeling logits as a torch.FloatTensor of size [batch_size, num_choices, sequence_length, total_tokens_embeddings] \- `multiple_choice_logits`: the multiple choice logits as a torch.FloatTensor of size [batch_size, num_choices] \- `presents`: a list of pre-computed hidden-states (key and values in each attention blocks) as a torch.FloatTensors. They can be reused to speed up sequential decoding (see the `run_gpt @abstr_number .py` example).

### Tokenizers

#### `BertTokenizer`

`BertTokenizer` perform end-to-end tokenization, i.e. basic tokenization followed by WordPiece tokenization.

This class has five arguments:

  * `vocab_file`: path to a vocabulary file.
  * `do_lower_case`: convert text to lower-case while tokenizing. **Default = True**.
  * `max_len`: max length to filter the input of the Transformer. Default to pre-trained value for the model if `None`. **Default = None**
  * `do_basic_tokenize`: Do basic tokenization before wordpice tokenization. Set to false if text is pre-tokenized. **Default = True**.
  * `never_split`: a list of tokens that should not be splitted during tokenization. **Default =`["[UNK]", "[SEP]", "[PAD]", "[CLS]", "[MASK]"]`**



and three methods:

  * `tokenize(text)`: convert a `str` in a list of `str` tokens by ( @abstr_number ) performing basic tokenization and ( @abstr_number ) WordPiece tokenization.
  * `convert_tokens_to_ids(tokens)`: convert a list of `str` tokens in a list of `int` indices in the vocabulary.
  * `convert_ids_to_tokens(tokens)`: convert a list of `int` indices in a list of `str` tokens in the vocabulary.
  * `save_vocabulary(directory_path)`: save the vocabulary file to `directory_path`. Return the path to the saved vocabulary file: `vocab_file_path`. The vocabulary can be reloaded with `BertTokenizer.from_pretrained('vocab_file_path')` or `BertTokenizer.from_pretrained('directory_path')`.



Please refer to the doc strings and code in tokenization.py for the details of the `BasicTokenizer` and `WordpieceTokenizer` classes. In general it is recommended to use `BertTokenizer` unless you know what you are doing.

#### `OpenAIGPTTokenizer`

`OpenAIGPTTokenizer` perform Byte-Pair-Encoding (BPE) tokenization.

This class has four arguments:

  * `vocab_file`: path to a vocabulary file.
  * `merges_file`: path to a file containing the BPE merges.
  * `max_len`: max length to filter the input of the Transformer. Default to pre-trained value for the model if `None`. **Default = None**
  * `special_tokens`: a list of tokens to add to the vocabulary for fine-tuning. If SpaCy is not installed and BERT's `BasicTokenizer` is used as the pre-BPE tokenizer, these tokens are not split. **Default= None**



and five methods:

  * `tokenize(text)`: convert a `str` in a list of `str` tokens by performing BPE tokenization.
  * `convert_tokens_to_ids(tokens)`: convert a list of `str` tokens in a list of `int` indices in the vocabulary.
  * `convert_ids_to_tokens(tokens)`: convert a list of `int` indices in a list of `str` tokens in the vocabulary.
  * `set_special_tokens(self, special_tokens)`: update the list of special tokens (see above arguments)
  * `encode(text)`: convert a `str` in a list of `int` tokens by performing BPE encoding.
  * `decode(ids, skip_special_tokens=False, clean_up_tokenization_spaces=False)`: decode a list of `int` indices in a string and do some post-processing if needed: (i) remove special tokens from the output and (ii) clean up tokenization spaces.
  * `save_vocabulary(directory_path)`: save the vocabulary, merge and special tokens files to `directory_path`. Return the path to the three files: `vocab_file_path`, `merge_file_path`, `special_tokens_file_path`. The vocabulary can be reloaded with `OpenAIGPTTokenizer.from_pretrained('directory_path')`.



Please refer to the doc strings and code in tokenization_openai.py for the details of the `OpenAIGPTTokenizer`.

#### `TransfoXLTokenizer`

`TransfoXLTokenizer` perform word tokenization. This tokenizer can be used for adaptive softmax and has utilities for counting tokens in a corpus to create a vocabulary ordered by toekn frequency (for adaptive softmax). See the adaptive softmax paper ( @abstr_hyperlink ) for more details.

The API is similar to the API of `BertTokenizer` (see above).

Please refer to the doc strings and code in tokenization_transfo_xl.py for the details of these additional methods in `TransfoXLTokenizer`.

#### `GPT @abstr_number Tokenizer`

`GPT @abstr_number Tokenizer` perform byte-level Byte-Pair-Encoding (BPE) tokenization.

This class has three arguments:

  * `vocab_file`: path to a vocabulary file.
  * `merges_file`: path to a file containing the BPE merges.
  * `errors`: How to handle unicode decoding errors. **Default =`replace`**



and two methods:

  * `tokenize(text)`: convert a `str` in a list of `str` tokens by performing byte-level BPE.
  * `convert_tokens_to_ids(tokens)`: convert a list of `str` tokens in a list of `int` indices in the vocabulary.
  * `convert_ids_to_tokens(tokens)`: convert a list of `int` indices in a list of `str` tokens in the vocabulary.
  * `set_special_tokens(self, special_tokens)`: update the list of special tokens (see above arguments)
  * `encode(text)`: convert a `str` in a list of `int` tokens by performing byte-level BPE.
  * `decode(tokens)`: convert back a list of `int` tokens in a `str`.
  * `save_vocabulary(directory_path)`: save the vocabulary, merge and special tokens files to `directory_path`. Return the path to the three files: `vocab_file_path`, `merge_file_path`, `special_tokens_file_path`. The vocabulary can be reloaded with `OpenAIGPTTokenizer.from_pretrained('directory_path')`.



Please refer to tokenization_gpt @abstr_number .py for more details on the `GPT @abstr_number Tokenizer`.

### Optimizers

#### `BertAdam`

`BertAdam` is a `torch.optimizer` adapted to be closer to the optimizer used in the TensorFlow implementation of Bert. The differences with PyTorch Adam optimizer are the following:

  * BertAdam implements weight decay fix,
  * BertAdam doesn't compensate for bias as in the regular Adam optimizer.



The optimizer accepts the following arguments:

  * `lr` : learning rate
  * `warmup` : portion of `t_total` for the warmup, `- @abstr_number` means no warmup. Default : `- @abstr_number`
  * `t_total` : total number of training steps for the learning rate schedule, `- @abstr_number` means constant learning rate. Default : `- @abstr_number`
  * `schedule` : schedule to use for the warmup (see above). Can be `'warmup_linear'`, `'warmup_constant'`, `'warmup_cosine'`, `'none'`, `None` or a `_LRSchedule` object (see below). If `None` or `'none'`, learning rate is always kept constant. Default : `'warmup_linear'`
  * `b @abstr_number` : Adams b @abstr_number . Default : `@abstr_number . @abstr_number`
  * `b @abstr_number` : Adams b @abstr_number . Default : `@abstr_number . @abstr_number`
  * `e` : Adams epsilon. Default : `@abstr_number e- @abstr_number`
  * `weight_decay:` Weight decay. Default : `@abstr_number . @abstr_number`
  * `max_grad_norm` : Maximum norm for the gradients (`- @abstr_number` means no clipping). Default : `@abstr_number . @abstr_number`



#### `OpenAIAdam`

`OpenAIAdam` is similar to `BertAdam`. The differences with `BertAdam` is that `OpenAIAdam` compensate for bias as in the regular Adam optimizer.

`OpenAIAdam` accepts the same arguments as `BertAdam`.

#### Learning Rate Schedules

The `.optimization` module also provides additional schedules in the form of schedule objects that inherit from `_LRSchedule`. All `_LRSchedule` subclasses accept `warmup` and `t_total` arguments at construction. When an `_LRSchedule` object is passed into `BertAdam` or `OpenAIAdam`, the `warmup` and `t_total` arguments on the optimizer are ignored and the ones in the `_LRSchedule` object are used. An overview of the implemented schedules: \- `ConstantLR`: always returns learning rate @abstr_number . \- `WarmupConstantSchedule`: Linearly increases learning rate from @abstr_number to @abstr_number over `warmup` fraction of training steps. Keeps learning rate equal to @abstr_number . after warmup. @abstr_image \- `WarmupLinearSchedule`: Linearly increases learning rate from @abstr_number to @abstr_number over `warmup` fraction of training steps. Linearly decreases learning rate from @abstr_number . to @abstr_number . over remaining `@abstr_number - warmup` steps. @abstr_image \- `WarmupCosineSchedule`: Linearly increases learning rate from @abstr_number to @abstr_number over `warmup` fraction of training steps. Decreases learning rate from @abstr_number . to @abstr_number . over remaining `@abstr_number - warmup` steps following a cosine curve. If `cycles` (default= @abstr_number . @abstr_number ) is different from default, learning rate follows cosine function after warmup. @abstr_image \- `WarmupCosineWithHardRestartsSchedule`: Linearly increases learning rate from @abstr_number to @abstr_number over `warmup` fraction of training steps. If `cycles` (default= @abstr_number .) is different from default, learning rate follows `cycles` times a cosine decaying learning rate (with hard restarts). @abstr_image \- `WarmupCosineWithWarmupRestartsSchedule`: All training progress is divided in `cycles` (default= @abstr_number .) parts of equal length. Every part follows a schedule with the first `warmup` fraction of the training steps linearly increasing from @abstr_number . to @abstr_number ., followed by a learning rate decreasing from @abstr_number . to @abstr_number . following a cosine curve. Note that the total number of all warmup steps over all cycles together is equal to `warmup` * `cycles` @abstr_image 

## Examples

| Sub-section | Description | |-|-| | Training large models: introduction, tools and examples | How to use gradient-accumulation, multi-gpu training, distributed training, optimize on CPU and @abstr_number -bits training to train Bert models | | Fine-tuning with BERT: running the examples | Running the examples in ./examples: `extract_classif.py`, `run_classifier.py`, `run_squad.py` and `lm_finetuning/simple_lm_finetuning.py` | | Fine-tuning with OpenAI GPT, Transformer-XL and GPT- @abstr_number | Running the examples in ./examples: `run_openai_gpt.py`, `run_transfo_xl.py` and `run_gpt @abstr_number .py` | | Fine-tuning BERT-large on GPUs | How to fine tune `BERT large`|

### Training large models: introduction, tools and examples

BERT-base and BERT-large are respectively @abstr_number M and @abstr_number M parameters models and it can be difficult to fine-tune them on a single GPU with the recommended batch size for good performance (in most case a batch size of @abstr_number ).

To help with fine-tuning these models, we have included several techniques that you can activate in the fine-tuning scripts run_classifier.py and run_squad.py: gradient-accumulation, multi-gpu training, distributed training and @abstr_number -bits training . For more details on how to use these techniques you can read @abstr_hyperlink that I published earlier this month.

Here is how to use these techniques in our scripts:

  * **Gradient Accumulation** : Gradient accumulation can be used by supplying a integer greater than @abstr_number to the `--gradient_accumulation_steps` argument. The batch at each step will be divided by this integer and gradient will be accumulated over `gradient_accumulation_steps` steps.
  * **Multi-GPU** : Multi-GPU is automatically activated when several GPUs are detected and the batches are splitted over the GPUs.
  * **Distributed training** : Distributed training can be activated by supplying an integer greater or equal to @abstr_number to the `--local_rank` argument (see below).
  * _* @abstr_number -bits training_ *: @abstr_number -bits training, also called mixed-precision training, can reduce the memory requirement of your model on the GPU by using half-precision training, basically allowing to double the batch size. If you have a recent GPU (starting from NVIDIA Volta architecture) you should see no decrease in speed. A good introduction to Mixed precision training can be found @abstr_hyperlink and a full documentation is @abstr_hyperlink . In our scripts, this option can be activated by setting the `--fp @abstr_number` flag and you can play with loss scaling using the `--loss_scale` flag (see the previously linked documentation for details on loss scaling). The loss scale can be zero in which case the scale is dynamically adjusted or a positive power of two in which case the scaling is static.



To use @abstr_number -bits training and distributed training, you need to install NVIDIA's apex extension @abstr_hyperlink . You will find more information regarding the internals of `apex` and how to use `apex` in @abstr_hyperlink . The results of the tests performed on pytorch-BERT by the NVIDIA team (and my trials at reproducing them) can be consulted in @abstr_hyperlink .

Note: To use _Distributed Training_ , you will need to run one training script on each of your machines. This can be done for example by running the following command on each server (see the above mentioned blog post for more details): @abstr_code_section Where `$THIS_MACHINE_INDEX` is an sequential index assigned to each of your machine ( @abstr_number , @abstr_number , @abstr_number ...) and the machine with rank @abstr_number has an IP address `@abstr_number . @abstr_number . @abstr_number . @abstr_number` and an open port `@abstr_number`.

### Fine-tuning with BERT: running the examples

We showcase several fine-tuning examples based on (and extended from) @abstr_hyperlink :

  * a _sequence-level classifier_ on nine different GLUE tasks,
  * a _token-level classifier_ on the question answering dataset SQuAD, and
  * a _sequence-level multiple-choice classifier_ on the SWAG classification corpus.
  * a _BERT language model_ on another target corpus



#### GLUE results on dev set

We get the following results on the dev set of GLUE benchmark with an uncased BERT base model. All experiments were run on a P @abstr_number GPU with a batch size of @abstr_number .

| Task | Metric | Result | |-|-|-| | CoLA | Matthew's corr. | @abstr_number . @abstr_number | | SST- @abstr_number | accuracy | @abstr_number . @abstr_number | | MRPC | F @abstr_number /accuracy | @abstr_number . @abstr_number / @abstr_number . @abstr_number | | STS-B | Pearson/Spearman corr. | @abstr_number . @abstr_number / @abstr_number . @abstr_number | | QQP | accuracy/F @abstr_number | @abstr_number . @abstr_number / @abstr_number . @abstr_number | | MNLI | matched acc./mismatched acc.| @abstr_number . @abstr_number / @abstr_number . @abstr_number | | QNLI | accuracy | @abstr_number . @abstr_number | | RTE | accuracy | @abstr_number . @abstr_number | | WNLI | accuracy | @abstr_number . @abstr_number |

Some of these results are significantly different from the ones reported on the test set of GLUE benchmark on the website. For QQP and WNLI, please refer to @abstr_hyperlink on the webite.

Before running anyone of these GLUE tasks you should download the @abstr_hyperlink by running @abstr_hyperlink and unpack it to some directory `$GLUE_DIR`.

@abstr_code_section 

where task name can be one of CoLA, SST- @abstr_number , MRPC, STS-B, QQP, MNLI, QNLI, RTE, WNLI.

The dev set results will be present within the text file 'eval_results.txt' in the specified output_dir. In case of MNLI, since there are two separate dev sets, matched and mismatched, there will be a separate output folder called '/tmp/MNLI-MM/' in addition to '/tmp/MNLI/'.

The code has not been tested with half-precision training with apex on any GLUE task apart from MRPC, MNLI, CoLA, SST- @abstr_number . The following section provides details on how to run half-precision training with MRPC. With that being said, there shouldn't be any issues in running half-precision training with the remaining GLUE tasks as well, since the data processor for each task inherits from the base class DataProcessor.

#### MRPC

This example code fine-tunes BERT on the Microsoft Research Paraphrase Corpus (MRPC) corpus and runs in less than @abstr_number minutes on a single K- @abstr_number and in @abstr_number seconds (!) on single tesla V @abstr_number @abstr_number GB with apex installed.

Before running this example you should download the @abstr_hyperlink by running @abstr_hyperlink and unpack it to some directory `$GLUE_DIR`.

@abstr_code_section 

Our test ran on a few seeds with @abstr_hyperlink gave evaluation results between @abstr_number % and @abstr_number %.

**Fast run with apex and @abstr_number bit precision: fine-tuning on MRPC in @abstr_number seconds!** First install apex as indicated @abstr_hyperlink . Then run @abstr_code_section 

**Distributed training** Here is an example using distributed training on @abstr_number V @abstr_number GPUs and Bert Whole Word Masking model to reach a F @abstr_number  > @abstr_number on MRPC:

@abstr_code_section 

Training with these hyper-parameters gave us the following results: @abstr_code_section 

Here is an example on MNLI:

@abstr_code_section 

@abstr_code_section 

This is the example of the `bert-large-uncased-whole-word-masking-finetuned-mnli` model

#### SQuAD

This example code fine-tunes BERT on the SQuAD dataset. It runs in @abstr_number min (with BERT-base) or @abstr_number min (with BERT-large) on a single tesla V @abstr_number @abstr_number GB.

The data for SQuAD can be downloaded with the following links and should be saved in a `$SQUAD_DIR` directory.

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 

@abstr_code_section 




Training with the previous hyper-parameters gave us the following results: @abstr_code_section 

**distributed training**

Here is an example using distributed training on @abstr_number V @abstr_number GPUs and Bert Whole Word Masking uncased model to reach a F @abstr_number > @abstr_number on SQuAD:

@abstr_code_section 

Training with these hyper-parameters gave us the following results: @abstr_code_section 

This is the model provided as `bert-large-uncased-whole-word-masking-finetuned-squad`.

And here is the model provided as `bert-large-cased-whole-word-masking-finetuned-squad`:

@abstr_code_section 

Training with these hyper-parameters gave us the following results: @abstr_code_section 

#### SWAG

The data for SWAG can be downloaded by cloning the following @abstr_hyperlink 

@abstr_code_section 

Training with the previous hyper-parameters on a single GPU gave us the following results: @abstr_code_section 

#### LM Fine-tuning

The data should be a text file in the same format as sample_text.txt (one sentence per line, docs separated by empty line). You can download an @abstr_hyperlink generated from wikipedia articles and splitted into ~ @abstr_number k sentences with spaCy. Training one epoch on this corpus takes about @abstr_number : @abstr_number h on @abstr_number x NVIDIA Tesla P @abstr_number with `train_batch_size= @abstr_number` and `max_seq_length= @abstr_number`:

Thank to the work of @Rocketknight @abstr_number and @tholor there are now **several scripts** that can be used to fine-tune BERT using the pretraining objective (combination of masked-language modeling and next sentence prediction loss). These scripts are detailed in the README of the examples/lm_finetuning/ folder.

### OpenAI GPT, Transformer-XL and GPT- @abstr_number : running the examples

We provide three examples of scripts for OpenAI GPT, Transformer-XL and OpenAI GPT- @abstr_number based on (and extended from) the respective original implementations:

  * fine-tuning OpenAI GPT on the ROCStories dataset
  * evaluating Transformer-XL on Wikitext @abstr_number 
  * unconditional and conditional generation from a pre-trained OpenAI GPT- @abstr_number model



#### Fine-tuning OpenAI GPT on the RocStories dataset

This example code fine-tunes OpenAI GPT on the RocStories dataset.

Before running this example you should download the @abstr_hyperlink and unpack it to some directory `$ROC_STORIES_DIR`.

@abstr_code_section 

This command runs in about @abstr_number min on a single K- @abstr_number an gives an evaluation accuracy of about @abstr_number . @abstr_number % (the authors report a median accuracy with the TensorFlow code of @abstr_number . @abstr_number % and the OpenAI GPT paper reports a best single run accuracy of @abstr_number . @abstr_number %).

#### Evaluating the pre-trained Transformer-XL on the WikiText @abstr_number dataset

This example code evaluate the pre-trained Transformer-XL on the WikiText @abstr_number dataset. This command will download a pre-processed version of the WikiText @abstr_number dataset in which the vocabulary has been computed.

@abstr_code_section 

This command runs in about @abstr_number min on a V @abstr_number and gives an evaluation perplexity of @abstr_number . @abstr_number on WikiText- @abstr_number (the authors report a perplexity of about @abstr_number . @abstr_number on this dataset with the TensorFlow code).

#### Unconditional and conditional generation from OpenAI's GPT- @abstr_number model

This example code is identical to the original unconditional and conditional generation codes.

Conditional generation: @abstr_code_section 

Unconditional generation: @abstr_code_section 

The same option as in the original scripts are provided, please refere to the code of the example and the original repository of OpenAI.

## Fine-tuning BERT-large on GPUs

The options we list above allow to fine-tune BERT-large rather easily on GPU(s) instead of the TPU used by the original implementation.

For example, fine-tuning BERT-large on SQuAD can be done on a server with @abstr_number k- @abstr_number (these are pretty old now) in @abstr_number hours. Our results are similar to the TensorFlow implementation results (actually slightly higher): @abstr_code_section To get these results we used a combination of: \- multi-GPU training (automatically activated on a multi-GPU server), \- @abstr_number steps of gradient accumulation and \- perform the optimization step on CPU to store Adam's averages in RAM.

Here is the full list of hyper-parameters for this run: @abstr_code_section 

If you have a recent GPU (starting from NVIDIA Volta series), you should try _* @abstr_number -bit fine-tuning_ * (FP @abstr_number ).

Here is an example of hyper-parameters for a FP @abstr_number run we tried: @abstr_code_section 

The results were similar to the above FP @abstr_number results (actually slightly higher): @abstr_code_section 

Here is an example with the recent `bert-large-uncased-whole-word-masking`:

@abstr_code_section 

## BERTology

There is a growing field of study concerned with investigating the inner working of large-scale transformers like BERT (that some call "BERTology"). Some good examples of this field are:

  * BERT Rediscovers the Classical NLP Pipeline by Ian Tenney, Dipanjan Das, Ellie Pavlick: https://arxiv.org/abs/ @abstr_number . @abstr_number 
  * Are Sixteen Heads Really Better than One? by Paul Michel, Omer Levy, Graham Neubig: https://arxiv.org/abs/ @abstr_number . @abstr_number 
  * What Does BERT Look At? An Analysis of BERT's Attention by Kevin Clark, Urvashi Khandelwal, Omer Levy, Christopher D. Manning: https://arxiv.org/abs/ @abstr_number . @abstr_number 



In order to help this new field develop, we have included a few additional features in the BERT/GPT/GPT- @abstr_number models to help people access the inner representations, mainly adapted from the great work of Paul Michel (https://arxiv.org/abs/ @abstr_number . @abstr_number ):

  * accessing all the hidden-states of BERT/GPT/GPT- @abstr_number ,
  * accessing all the attention weights for each head of BERT/GPT/GPT- @abstr_number ,
  * retrieving heads output values and gradients to be able to compute head importance score and prune head as explained in https://arxiv.org/abs/ @abstr_number . @abstr_number .



To help you understand and use these features, we have added a specific example script: bertology.py while extract information and prune a model pre-trained on MRPC.

## Notebooks

We include @abstr_hyperlink that can be used to check that the predictions of the PyTorch model are identical to the predictions of the original TensorFlow model.

  * The first NoteBook (Comparing-TF-and-PT-models.ipynb) extracts the hidden states of a full sequence on each layers of the TensorFlow and the PyTorch models and computes the standard deviation between them. In the given example, we get a standard deviation of @abstr_number . @abstr_number e- @abstr_number to @abstr_number e- @abstr_number on the various hidden state of the models.

  * The second NoteBook (Comparing-TF-and-PT-models-SQuAD.ipynb) compares the loss computed by the TensorFlow and the PyTorch models for identical initialization of the fine-tuning layer of the `BertForQuestionAnswering` and computes the standard deviation between them. In the given example, we get a standard deviation of @abstr_number . @abstr_number e- @abstr_number between the models.

  * The third NoteBook (Comparing-TF-and-PT-models-MLM-NSP.ipynb) compares the predictions computed by the TensorFlow and the PyTorch models for masked token language modeling using the pre-trained masked language modeling model.




Please follow the instructions given in the notebooks to run and modify them.

## Command-line interface

A command-line interface is provided to convert a TensorFlow checkpoint in a PyTorch dump of the `BertForPreTraining` class (for BERT) or NumPy checkpoint in a PyTorch dump of the `OpenAIGPTModel` class (for OpenAI GPT).

### BERT

You can convert any TensorFlow checkpoint for BERT (in particular @abstr_hyperlink ) in a PyTorch save file by using the convert_tf_checkpoint_to_pytorch.py script.

This CLI takes as input a TensorFlow checkpoint (three files starting with `bert_model.ckpt`) and the associated configuration file (`bert_config.json`), and creates a PyTorch model for this configuration, loads the weights from the TensorFlow checkpoint in the PyTorch model and saves the resulting model in a standard PyTorch save file that can be imported using `torch.load()` (see examples in extract_features.py, run_classifier.py and run_squad.py).

You only need to run this conversion script **once** to get a PyTorch model. You can then disregard the TensorFlow checkpoint (the three files starting with `bert_model.ckpt`) but be sure to keep the configuration file (`bert_config.json`) and the vocabulary file (`vocab.txt`) as these are needed for the PyTorch model too.

To run this specific conversion script you will need to have TensorFlow and PyTorch installed (`pip install tensorflow`). The rest of the repository only requires PyTorch.

Here is an example of the conversion process for a pre-trained `BERT-Base Uncased` model:

@abstr_code_section 

You can download Google's pre-trained models for the conversion @abstr_hyperlink .

### OpenAI GPT

Here is an example of the conversion process for a pre-trained OpenAI GPT model, assuming that your NumPy checkpoint save as the same format than OpenAI pretrained model (see @abstr_hyperlink )

@abstr_code_section 

### Transformer-XL

Here is an example of the conversion process for a pre-trained Transformer-XL model (see @abstr_hyperlink )

@abstr_code_section 

### GPT- @abstr_number

Here is an example of the conversion process for a pre-trained OpenAI's GPT- @abstr_number model.

@abstr_code_section 

## TPU

TPU support and pretraining scripts

TPU are not supported by the current stable release of PyTorch ( @abstr_number . @abstr_number . @abstr_number ). However, the next version of PyTorch (v @abstr_number . @abstr_number ) should support training on TPU and is expected to be released soon (see the recent @abstr_hyperlink ).

We will add TPU support when this next release is published.

The original TensorFlow code further comprises two scripts for pre-training BERT: @abstr_hyperlink and @abstr_hyperlink .

Since, pre-training BERT is a particularly expensive operation that basically requires one or several TPUs to be completed in a reasonable amout of time (see details @abstr_hyperlink ) we have decided to wait for the inclusion of TPU support in PyTorch to convert these pre-training scripts.
