# Amazon DSSTNE: Deep Scalable Sparse Tensor Network Engine

DSSTNE (pronounced "Destiny") is an open source software library for training and deploying recommendation models with sparse inputs, fully connected hidden layers, and sparse outputs. Models with weight matrices that are too large for a single GPU can still be trained on a single host. DSSTNE has been used at Amazon to generate personalized product recommendations for our customers at Amazon's scale. It is designed for production deployment of real-world applications which need to emphasize speed and scale over experimental flexibility.

DSSTNE was built with a number of features for production recommendation workloads:

  * **Multi-GPU Scale** : Training and prediction both scale out to use multiple GPUs, spreading out computation and storage in a model-parallel fashion for each layer.
  * **Large Layers** : Model-parallel scaling enables larger networks than are possible with a single GPU.
  * **Sparse Data** : DSSTNE is optimized for fast performance on sparse datasets, common in recommendation problems. Custom GPU kernels perform sparse computation on the GPU, without filling in lots of zeroes.



## Benchmarks

  * scottlegrand@ reported [near-linear scaling with multiple GPUs] on the MovieLens recommendation problem (https://medium.com/@scottlegrand/first-dsstne-benchmarks-tldr-almost- @abstr_number x-faster-than-tensorflow- @abstr_number dbeb @abstr_number c @abstr_number f#.ghe @abstr_number fu @abstr_number q)
  * Directions on how to run a benchmark can be found in here



## Scaling up

  * @abstr_hyperlink 



## License

License

## Setup

  * Follow Setup for step by step instructions on installing and setting up DSSTNE



## User Guide

  * Check User Guide for detailed information about the features in DSSTNE



## Examples

  * Check Examples to start trying your first Neural Network Modeling using DSSTNE



## Q&A

FAQ
