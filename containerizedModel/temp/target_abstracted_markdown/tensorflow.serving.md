# TensorFlow Serving

@abstr_hyperlink @abstr_hyperlink @abstr_image @abstr_image 

* * *

TensorFlow Serving is a flexible, high-performance serving system for machine learning models, designed for production environments. It deals with the _inference_ aspect of machine learning, taking models after _training_ and managing their lifetimes, providing clients with versioned access via a high-performance, reference-counted lookup table. TensorFlow Serving provides out-of-the-box integration with TensorFlow models, but can be easily extended to serve other types of models and data.

To note a few features:

  * Can serve multiple models, or multiple versions of the same model simultaneously
  * Exposes both gRPC as well as HTTP inference endpoints
  * Allows deployment of new model versions without changing any client code
  * Supports canarying new versions and A/B testing experimental models
  * Adds minimal latency to inference time due to efficient, low-overhead implementation
  * Features a scheduler that groups individual inference requests into batches for joint execution on GPU, with configurable latency controls
  * Supports many _servables_ : Tensorflow models, embeddings, vocabularies, feature transformations and even non-Tensorflow-based machine learning models



## Serve a Tensorflow model in @abstr_number seconds

@abstr_code_section 

## End-to-End Training & Serving Tutorial

Refer to the official Tensorflow documentations site for @abstr_hyperlink .

## Documentation

### Set up

The easiest and most straight-forward way of using TensorFlow Serving is with Docker images. We highly recommend this route unless you have specific needs that are not addressed by running in a container.

  * Install Tensorflow Serving using Docker _(Recommended)_
  * Install Tensorflow Serving without Docker _(Not Recommended)_
  * Build Tensorflow Serving from Source with Docker
  * Deploy Tensorflow Serving on Kubernetes



### Use

#### Export your Tensorflow model

In order to serve a Tensorflow model, simply export a SavedModel from your Tensorflow program. @abstr_hyperlink is a language-neutral, recoverable, hermetic serialization format that enables higher-level systems and tools to produce, consume, and transform TensorFlow models.

Please refer to @abstr_hyperlink for detailed instructions on how to export SavedModels.

#### Configure and Use Tensorflow Serving

  * Follow a tutorial on Serving Tensorflow models
  * Read the REST API Guide or @abstr_hyperlink 
  * Use SavedModel Warmup if initial inference requests are slow due to lazy initialization of graph
  * Configure models, version and version policy via Serving Config
  * If encountering issues regarding model signatures, please read the SignatureDef documentation
  * If using a model with custom ops, learn how to serve models with custom ops



### Extend

Tensorflow Serving's architecture is highly modular. You can use some parts individually (e.g. batch scheduling) and/or extend it to serve new use cases.

  * Ensure you are familiar with building Tensorflow Serving
  * Learn about Tensorflow Serving's architecture
  * @abstr_hyperlink 
  * Create a new type of Servable
  * Create a custom Source of Servable versions



## Contribute

**If you'd like to contribute to TensorFlow Serving, be sure to review the contribution guidelines.**

## For more information

Please refer to the official @abstr_hyperlink for more information.
