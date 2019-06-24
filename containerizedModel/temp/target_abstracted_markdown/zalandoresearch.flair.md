@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

A very simple framework for **state-of-the-art NLP**. Developed by @abstr_hyperlink .

* * *

Flair is:

  * **A powerful NLP library.** Flair allows you to apply our state-of-the-art natural language processing (NLP) models to your text, such as named entity recognition (NER), part-of-speech tagging (PoS), sense disambiguation and classification.

  * **Multilingual.** Thanks to the Flair community, we support a rapidly growing number of languages. We also now include ' _one model, many languages_ ' taggers, i.e. single models that predict PoS or NER tags for input text in various languages.

  * **A text embedding library.** Flair has simple interfaces that allow you to use and combine different word and document embeddings, including our proposed **@abstr_hyperlink** , BERT embeddings and ELMo embeddings.

  * **A Pytorch NLP framework.** Our framework builds directly on @abstr_hyperlink , making it easy to train your own models and experiment with new approaches using Flair embeddings and classes.




Now at @abstr_hyperlink !

## Comparison with State-of-the-Art

Flair outperforms the previous best methods on a range of NLP tasks:

| Task | Language | Dataset | Flair | Previous best | | ------------------------------- | --- | ----------- | ---------------- | ------------- | | Named Entity Recognition |English | Conll- @abstr_number | _* @abstr_number . @abstr_number *_ (F @abstr_number ) | * @abstr_number . @abstr_number @abstr_hyperlink * | | Named Entity Recognition |English | Ontonotes | _* @abstr_number . @abstr_number *_ (F @abstr_number ) | * @abstr_number . @abstr_number @abstr_hyperlink * | | Emerging Entity Detection | English | WNUT- @abstr_number | _* @abstr_number . @abstr_number *_ (F @abstr_number ) | * @abstr_number . @abstr_number @abstr_hyperlink * | | Part-of-Speech tagging |English| WSJ | _* @abstr_number . @abstr_number *_ | * @abstr_number . @abstr_number @abstr_hyperlink _| | Chunking |English| Conll- @abstr_number | *_ @abstr_number . @abstr_number _* (F @abstr_number ) | * @abstr_number . @abstr_number @abstr_hyperlink_ | Named Entity Recognition | German | Conll- @abstr_number | _* @abstr_number . @abstr_number *_ (F @abstr_number ) | * @abstr_number . @abstr_number @abstr_hyperlink * | | Named Entity Recognition |German | Germeval | _* @abstr_number . @abstr_number *_ (F @abstr_number ) | * @abstr_number . @abstr_number @abstr_hyperlink _| | Named Entity Recognition | Dutch | Conll- @abstr_number | *_ @abstr_number . @abstr_number _* (F @abstr_number ) | * @abstr_number . @abstr_number @abstr_hyperlink_ | | Named Entity Recognition |Polish | PolEval- @abstr_number | _* @abstr_number . @abstr_number *_ (F @abstr_number )   
@abstr_hyperlink | * @abstr_number . @abstr_number @abstr_hyperlink *|

Here's how to reproduce these numbers using Flair. You can also find detailed evaluations and discussions in our papers:

  * _@abstr_hyperlink . Alan Akbik, Duncan Blythe and Roland Vollgraf. @abstr_number th International Conference on Computational Linguistics, *_ COLING @abstr_number _*._

  * _@abstr_hyperlink . Alan Akbik, Tanja Bergmann and Roland Vollgraf. @abstr_number Annual Conference of the North American Chapter of the Association for Computational Linguistics, *_ NAACL @abstr_number _*._

  * _@abstr_hyperlink . Alan Akbik, Tanja Bergmann, Duncan Blythe, Kashif Rasul, Stefan Schweter and Roland Vollgraf. @abstr_number Annual Conference of the North American Chapter of the Association for Computational Linguistics (Demonstrations), *_ NAACL @abstr_number _*._




## Quick Start

### Requirements and Installation

The project is based on PyTorch @abstr_number . @abstr_number + and Python @abstr_number . @abstr_number +, because method signatures and type hints are beautiful. If you do not have Python @abstr_number . @abstr_number , install it first. @abstr_hyperlink . Then, in your favorite virtual environment, simply do:

@abstr_code_section 

### Example Usage

Let's run named entity recognition (NER) over an example sentence. All you need to do is make a `Sentence`, load a pre-trained model and use it to predict tags for the sentence:

@abstr_code_section 

Done! The `Sentence` now has entity annotations. Print the sentence to see what the tagger found.

@abstr_code_section 

This should print: 

@abstr_code_section 

## Tutorials

We provide a set of quick tutorials to get you started with the library:

  * Tutorial @abstr_number : Basics
  * Tutorial @abstr_number : Tagging your Text
  * Tutorial @abstr_number : Using Word Embeddings
  * Tutorial @abstr_number : Using BERT, ELMo, and Flair Embeddings
  * Tutorial @abstr_number : Using Document Embeddings
  * Tutorial @abstr_number : Loading your own Corpus
  * Tutorial @abstr_number : Training your own Models
  * Tutorial @abstr_number : Optimizing your own Models
  * Tutorial @abstr_number : Training your own Flair Embeddings



The tutorials explain how the base NLP classes work, how you can load pre-trained models to tag your text, how you can embed your text with different word or document embeddings, and how you can train your own language models, sequence labeling models, and text classification models. Let us know if anything is unclear.

There are also good third-party articles and posts that illustrate how to use Flair: * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 

## Citing Flair

Please cite the following paper when using Flair: 

@abstr_code_section 

If you use the pooled version of the Flair embeddings (PooledFlairEmbeddings), please cite:

@abstr_code_section 

## Contact

Please email your questions or comments to @abstr_hyperlink .

## Contributing

Thanks for your interest in contributing! There are many ways to get involved; start with our contributor guidelines and then check these @abstr_hyperlink for specific tasks.

For contributors looking to get deeper into the API we suggest cloning the repository and checking out the unit tests for examples of how to call methods. Nearly all classes and methods are documented, so finding your way around the code should hopefully be easy.

### Running unit tests locally

You need @abstr_hyperlink for this:

@abstr_code_section 

To run integration tests execute: @abstr_code_section The integration tests will train small models. Afterwards, the trained model will be loaded for prediction.

To also run slow tests, such as loading and using the embeddings provided by flair, you should execute: @abstr_code_section 

### Code Style

To ensure a standardized code style we use the formatter @abstr_hyperlink . If your code is not formatted properly, travis will fail to build.

If you want to automatically format your code on every commit, you can use @abstr_hyperlink . Just install it via `pip install pre-commit` and execute `pre-commit install` in the root folder. This will add a hook to the repository, which reformats files on every commit.

If you want to set it up manually, install black via `pip install black`. To reformat files execute `black .`.

## License

The MIT License (MIT)

Flair is licensed under the following MIT license: The MIT License (MIT) Copyright © @abstr_number Zalando SE, https://tech.zalando.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
