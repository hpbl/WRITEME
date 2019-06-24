# Fashion-MNIST

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Table of Contents

  * Why we made Fashion-MNIST
  * Get the Data
  * Usage
  * Benchmark
  * Visualization
  * Contributing
  * Contact
  * Citing Fashion-MNIST
  * License 



`Fashion-MNIST` is a dataset of @abstr_hyperlink 's article images—consisting of a training set of @abstr_number , @abstr_number examples and a test set of @abstr_number , @abstr_number examples. Each example is a @abstr_number x @abstr_number grayscale image, associated with a label from @abstr_number classes. We intend `Fashion-MNIST` to serve as a direct **drop-in replacement** for the original @abstr_hyperlink for benchmarking machine learning algorithms. It shares the same image size and structure of training and testing splits.

Here's an example how the data looks ( _each class takes three-rows_ ):

@abstr_image 

@abstr_image 

## Why we made Fashion-MNIST

The original @abstr_hyperlink contains a lot of handwritten digits. Members of the AI/ML/Data Science community love this dataset and use it as a benchmark to validate their algorithms. In fact, MNIST is often the first dataset researchers try. _"If it doesn't work on MNIST, it **won't work** at all"_ , they said. _"Well, if it does work on MNIST, it may still fail on others."_

### To Serious Machine Learning Researchers

Seriously, we are talking about replacing MNIST. Here are some good reasons:

  * **MNIST is too easy.** Convolutional nets can achieve @abstr_number . @abstr_number % on MNIST. Classic machine learning algorithms can also achieve @abstr_number % easily. Check out @abstr_hyperlink , and read " @abstr_hyperlink ."
  * **MNIST is overused.** In @abstr_hyperlink , Google Brain research scientist and deep learning expert Ian Goodfellow calls for people to move away from MNIST.
  * **MNIST can not represent modern CV tasks** , as noted in @abstr_hyperlink , deep learning expert/Keras author François Chollet.



## Get the Data

Many ML libraries already include Fashion-MNIST data/API, give it a try!

You can use direct links to download the dataset. The data is stored in the **same** format as the original @abstr_hyperlink .

| Name | Content | Examples | Size | Link | MD @abstr_number Checksum| | --- | --- |--- | --- |--- |--- | | `train-images-idx @abstr_number -ubyte.gz` | training set images | @abstr_number , @abstr_number | @abstr_number MBytes | @abstr_hyperlink |`@abstr_number d @abstr_number fb @abstr_number e @abstr_number c @abstr_number d @abstr_number d @abstr_number c @abstr_number dfef @abstr_number ec @abstr_number bf @abstr_number d`| | `train-labels-idx @abstr_number -ubyte.gz` | training set labels | @abstr_number , @abstr_number | @abstr_number KBytes | @abstr_hyperlink |`@abstr_number c @abstr_number df @abstr_number df @abstr_number b @abstr_number e @abstr_number a @abstr_number aad @abstr_number dffbe`| | `t @abstr_number k-images-idx @abstr_number -ubyte.gz` | test set images | @abstr_number , @abstr_number | @abstr_number . @abstr_number MBytes | @abstr_hyperlink |`bef @abstr_number ecab @abstr_number f @abstr_number d @abstr_number ea @abstr_number ec @abstr_number`| | `t @abstr_number k-labels-idx @abstr_number -ubyte.gz` | test set labels | @abstr_number , @abstr_number | @abstr_number . @abstr_number KBytes | @abstr_hyperlink |`bb @abstr_number cfdad @abstr_number c @abstr_number e @abstr_number a @abstr_number a @abstr_number ee @abstr_number cd @abstr_number`|

Alternatively, you can clone this GitHub repository; the dataset appears under `data/fashion`. This repo also contains some scripts for benchmark and visualization.

@abstr_code_section 

### Labels

Each training and test example is assigned to one of the following labels:

| Label | Description | | --- | --- | | @abstr_number | T-shirt/top | | @abstr_number | Trouser | | @abstr_number | Pullover | | @abstr_number | Dress | | @abstr_number | Coat | | @abstr_number | Sandal | | @abstr_number | Shirt | | @abstr_number | Sneaker | | @abstr_number | Bag | | @abstr_number | Ankle boot |

## Usage

### Loading data with Python (requires @abstr_hyperlink )

Use `utils/mnist_reader` in this repo: @abstr_code_section 

### Loading data with Tensorflow

Make sure you have downloaded the data and placed it in `data/fashion`. Otherwise, _Tensorflow will download and use the original MNIST._

@abstr_code_section 

Note, Tensorflow supports passing in a source url to the `read_data_sets`. You may use: @abstr_code_section 

Also, an official Tensorflow tutorial of using `tf.keras`, a high-level API to train Fashion-MNIST @abstr_hyperlink .

### Loading data with other machine learning libraries

To date, the following libraries have included `Fashion-MNIST` as a built-in dataset. Therefore, you don't need to download `Fashion-MNIST` by yourself. Just follow their API and you are ready to go.

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



You are welcome to make pull requests to other open-source machine learning packages, improving their support to `Fashion-MNIST` dataset.

### Loading data with other languages

As one of the Machine Learning community's most popular datasets, MNIST has inspired people to implement loaders in many different languages. You can use these loaders with the `Fashion-MNIST` dataset as well. (Note: may require decompressing first.) To date, we haven't yet tested all of these loaders with Fashion-MNIST.

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink and @abstr_hyperlink and this
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink and @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink and @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Benchmark

We built an automatic benchmarking system based on `scikit-learn` that covers @abstr_number classifiers (but no deep learning) with different parameters. @abstr_hyperlink .

@abstr_image 

You can reproduce the results by running `benchmark/runner.py`. We recommend building and deploying this Dockerfile. 

You are welcome to submit your benchmark; simply create a new issue and we'll list your results here. Before doing that, please make sure it does not already appear @abstr_hyperlink . Visit our @abstr_hyperlink for additional details.

The table below collects the submitted benchmarks. Note that **we haven't yet tested these results**. You are welcome to validate the results using the code provided by the submitter. Test accuracy may differ due to the number of epoch, batch size, etc. To correct this table, please create a new issue.

| Classifier | Preprocessing | Fashion test accuracy | MNIST test accuracy | Submitter| Code | | --- | --- | --- | --- | --- |--- | | @abstr_number Conv+pooling | None | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv+pooling | None | @abstr_number . @abstr_number | - | @abstr_hyperlink | :link:| | @abstr_number Conv+pooling+ELU activation (PyTorch)| None| @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv | Normalization, random horizontal flip, random vertical flip, random translation, random rotation. | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv < @abstr_number K parameters | None | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv ~ @abstr_number K parameters | Normalization | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv+ @abstr_number FC ~ @abstr_number . @abstr_number M parameters| Normalization | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv+ @abstr_number FC ~ @abstr_number K parameters | Augmentation, batch normalization | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv+pooling+BN | None | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv+ @abstr_number FC| Random Horizontal Flips| @abstr_number . @abstr_number | -| @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv+ @abstr_number FC | None | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv+pooling+BN | None | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv+pooling+ @abstr_number FC+dropout | None | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv+BN+pooling|None| @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | | @abstr_number Conv+BN+pooling|None| @abstr_number . @abstr_number |-| @abstr_hyperlink | @abstr_hyperlink | |CNN with optional shortcuts, dense-like connectivity| standardization+augmentation+random erasing | @abstr_number . @abstr_number |-| @abstr_hyperlink | @abstr_hyperlink | |GRU+SVM | None| @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | |GRU+SVM with dropout | None| @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | |WRN @abstr_number - @abstr_number @abstr_number . @abstr_number M params | standard preprocessing (mean/std subtraction/division) and augmentation (random crops/horizontal flips)| @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink @abstr_hyperlink | |DenseNet-BC @abstr_number K params| standard preprocessing (mean/std subtraction/division) and augmentation (random crops/horizontal flips) | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink @abstr_hyperlink | |MobileNet | augmentation (horizontal flips)| @abstr_number . @abstr_number |- | @abstr_hyperlink | @abstr_hyperlink | |ResNet @abstr_number | Normalization, random horizontal flip, random vertical flip, random translation, random rotation. | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | |GoogleNet with cross-entropy loss | None | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | |AlexNet with Triplet loss| None | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | |SqueezeNet with cyclical learning rate @abstr_number epochs| None| @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | |Dual path network with wide resnet @abstr_number - @abstr_number |standard preprocessing (mean/std subtraction/division) and augmentation (random crops/horizontal flips) | @abstr_number . @abstr_number |-| @abstr_hyperlink | @abstr_hyperlink | |MLP @abstr_number - @abstr_number - @abstr_number | None | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | |VGG @abstr_number @abstr_number M parameters | None | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink @abstr_hyperlink | |WRN- @abstr_number - @abstr_number | standard preprocessing (mean/std subtraction/division) and augmentation (random crops/horizontal flips) | @abstr_number . @abstr_number | -| @abstr_hyperlink | @abstr_hyperlink | |WRN- @abstr_number - @abstr_number + Random Erasing| standard preprocessing (mean/std subtraction/division) and augmentation (random crops/horizontal flips) | @abstr_number . @abstr_number | -| @abstr_hyperlink | @abstr_hyperlink | |Human Performance| Crowd-sourced evaluation of human (with no fashion expertise) performance. @abstr_number randomly sampled test images, @abstr_number labels per image, majority labelling. | @abstr_number . @abstr_number | - | Leo | - | |Capsule Network @abstr_number M parameters| Normalization and shift at most @abstr_number pixel and horizontal flip | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | |HOG+SVM| HOG | @abstr_number . @abstr_number | - | @abstr_hyperlink | @abstr_hyperlink | |XgBoost| scaling the pixel values to mean= @abstr_number . @abstr_number and var= @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | |DENSER| - | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink @abstr_hyperlink | |Dyra-Net| Rescale to unit interval | @abstr_number . @abstr_number | -| @abstr_hyperlink | @abstr_hyperlink @abstr_hyperlink | |Google AutoML| @abstr_number compute hours (higher quality)| @abstr_number . @abstr_number |-| @abstr_hyperlink | @abstr_hyperlink |

### Other Explorations of Fashion-MNIST

####  @abstr_hyperlink 

####  @abstr_hyperlink 

#### Generative adversarial networks (GANs)

  * @abstr_hyperlink ( **Recommend to read!** Note how various GANs generate different results on Fashion-MNIST, which can not be easily observed on the original MNIST.)
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



#### Clustering

  * @abstr_hyperlink of @abstr_hyperlink 
  * @abstr_hyperlink @abstr_hyperlink 



#### Video Tutorial

_Machine Learning Meets Fashion_ by Yufeng G @ Google Cloud

@abstr_hyperlink 

_Introduction to Kaggle Kernels_ by @abstr_hyperlink @ Google Cloud

@abstr_hyperlink 

_动手学深度学习_ by Mu Li @ Amazon AI

@abstr_hyperlink 

Apache MXNet으로 배워보는 딥러닝(Deep Learning) - 김무현 (AWS 솔루션즈아키텍트)

@abstr_hyperlink 

## Visualization

### t-SNE on Fashion-MNIST (left) and original MNIST (right)

@abstr_image @abstr_image 

### PCA on Fashion-MNIST (left) and original MNIST (right)

@abstr_image @abstr_image 

###  @abstr_hyperlink on Fashion-MNIST (left) and original MNIST (right)

@abstr_image @abstr_image 

## Contributing

Thanks for your interest in contributing! There are many ways to get involved; start with our contributor guidelines and then check these @abstr_hyperlink for specific tasks.

## Contact

To discuss the dataset, please use @abstr_hyperlink .

## Citing Fashion-MNIST

If you use Fashion-MNIST in a scientific publication, we would appreciate references to the following paper:

**Fashion-MNIST: a Novel Image Dataset for Benchmarking Machine Learning Algorithms. Han Xiao, Kashif Rasul, Roland Vollgraf. @abstr_hyperlink**

Biblatex entry: @abstr_code_section 

@abstr_hyperlink 

## License

The MIT License (MIT) Copyright © [ @abstr_number ] Zalando SE, https://tech.zalando.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
