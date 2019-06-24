# Machine Learning From Scratch

## About

Python implementations of some of the fundamental Machine Learning models and algorithms from scratch.

The purpose of this project is not to produce as optimized and computationally efficient algorithms as possible but rather to present the inner workings of them in a transparent and accessible way.

## Table of Contents

  * Machine Learning From Scratch 
    * About
    * Table of Contents
    * Installation
    * Examples
    * Polynomial Regression
    * Classification With CNN
    * Density-Based Clustering
    * Generating Handwritten Digits
    * Deep Reinforcement Learning
    * Image Reconstruction With RBM
    * Evolutionary Evolved Neural Network
    * Genetic Algorithm
    * Association Analysis
    * Implementations
    * Supervised Learning
    * Unsupervised Learning
    * Reinforcement Learning
    * Deep Learning
    * Contact



## Installation
    
    
    $ git clone https://github.com/eriklindernoren/ML-From-Scratch
    $ cd ML-From-Scratch
    $ python setup.py install
    

## Examples

### Polynomial Regression
    
    
    $ python mlfromscratch/examples/polynomial_regression.py
    

@abstr_image 

Figure: Training progress of a regularized polynomial regression model fitting   
temperature data measured in Linköping, Sweden @abstr_number . 

### Classification With CNN
    
    
    $ python mlfromscratch/examples/convolutional_neural_network.py
    
    +---------+
    | ConvNet |
    +---------+
    Input Shape: ( @abstr_number ,  @abstr_number ,  @abstr_number )
    +----------------------+------------+--------------+
    | Layer Type           | Parameters | Output Shape |
    +----------------------+------------+--------------+
    | Conv @abstr_number D               |  @abstr_number         | ( @abstr_number ,  @abstr_number ,  @abstr_number )   |
    | Activation (ReLU)    |  @abstr_number           | ( @abstr_number ,  @abstr_number ,  @abstr_number )   |
    | Dropout              |  @abstr_number           | ( @abstr_number ,  @abstr_number ,  @abstr_number )   |
    | BatchNormalization   |  @abstr_number        | ( @abstr_number ,  @abstr_number ,  @abstr_number )   |
    | Conv @abstr_number D               |  @abstr_number        | ( @abstr_number ,  @abstr_number ,  @abstr_number )   |
    | Activation (ReLU)    |  @abstr_number           | ( @abstr_number ,  @abstr_number ,  @abstr_number )   |
    | Dropout              |  @abstr_number           | ( @abstr_number ,  @abstr_number ,  @abstr_number )   |
    | BatchNormalization   |  @abstr_number        | ( @abstr_number ,  @abstr_number ,  @abstr_number )   |
    | Flatten              |  @abstr_number           | ( @abstr_number ,)      |
    | Dense                |  @abstr_number      | ( @abstr_number ,)       |
    | Activation (ReLU)    |  @abstr_number           | ( @abstr_number ,)       |
    | Dropout              |  @abstr_number           | ( @abstr_number ,)       |
    | BatchNormalization   |  @abstr_number         | ( @abstr_number ,)       |
    | Dense                |  @abstr_number        | ( @abstr_number ,)        |
    | Activation (Softmax) |  @abstr_number           | ( @abstr_number ,)        |
    +----------------------+------------+--------------+
    Total Parameters:  @abstr_number 
    
    Training:  @abstr_number % [------------------------------------------------------------------------] Time:  @abstr_number : @abstr_number : @abstr_number 
    Accuracy:  @abstr_number . @abstr_number
    

@abstr_image 

Figure: Classification of the digit dataset using CNN. 

### Density-Based Clustering
    
    
    $ python mlfromscratch/examples/dbscan.py
    

@abstr_image 

Figure: Clustering of the moons dataset using DBSCAN. 

### Generating Handwritten Digits
    
    
    $ python mlfromscratch/unsupervised_learning/generative_adversarial_network.py
    
    +-----------+
    | Generator |
    +-----------+
    Input Shape: ( @abstr_number ,)
    +------------------------+------------+--------------+
    | Layer Type             | Parameters | Output Shape |
    +------------------------+------------+--------------+
    | Dense                  |  @abstr_number       | ( @abstr_number ,)       |
    | Activation (LeakyReLU) |  @abstr_number           | ( @abstr_number ,)       |
    | BatchNormalization     |  @abstr_number         | ( @abstr_number ,)       |
    | Dense                  |  @abstr_number      | ( @abstr_number ,)       |
    | Activation (LeakyReLU) |  @abstr_number           | ( @abstr_number ,)       |
    | BatchNormalization     |  @abstr_number        | ( @abstr_number ,)       |
    | Dense                  |  @abstr_number      | ( @abstr_number ,)      |
    | Activation (LeakyReLU) |  @abstr_number           | ( @abstr_number ,)      |
    | BatchNormalization     |  @abstr_number        | ( @abstr_number ,)      |
    | Dense                  |  @abstr_number      | ( @abstr_number ,)       |
    | Activation (TanH)      |  @abstr_number           | ( @abstr_number ,)       |
    +------------------------+------------+--------------+
    Total Parameters:  @abstr_number 
    
    +---------------+
    | Discriminator |
    +---------------+
    Input Shape: ( @abstr_number ,)
    +------------------------+------------+--------------+
    | Layer Type             | Parameters | Output Shape |
    +------------------------+------------+--------------+
    | Dense                  |  @abstr_number      | ( @abstr_number ,)       |
    | Activation (LeakyReLU) |  @abstr_number           | ( @abstr_number ,)       |
    | Dropout                |  @abstr_number           | ( @abstr_number ,)       |
    | Dense                  |  @abstr_number      | ( @abstr_number ,)       |
    | Activation (LeakyReLU) |  @abstr_number           | ( @abstr_number ,)       |
    | Dropout                |  @abstr_number           | ( @abstr_number ,)       |
    | Dense                  |  @abstr_number         | ( @abstr_number ,)         |
    | Activation (Softmax)   |  @abstr_number           | ( @abstr_number ,)         |
    +------------------------+------------+--------------+
    Total Parameters:  @abstr_number
    

@abstr_image 

Figure: Training progress of a Generative Adversarial Network generating   
handwritten digits. 

### Deep Reinforcement Learning
    
    
    $ python mlfromscratch/examples/deep_q_network.py
    
    +----------------+
    | Deep Q-Network |
    +----------------+
    Input Shape: ( @abstr_number ,)
    +-------------------+------------+--------------+
    | Layer Type        | Parameters | Output Shape |
    +-------------------+------------+--------------+
    | Dense             |  @abstr_number         | ( @abstr_number ,)        |
    | Activation (ReLU) |  @abstr_number           | ( @abstr_number ,)        |
    | Dense             |  @abstr_number         | ( @abstr_number ,)         |
    +-------------------+------------+--------------+
    Total Parameters:  @abstr_number
    

@abstr_image 

Figure: Deep Q-Network solution to the CartPole-v @abstr_number environment in OpenAI gym. 

### Image Reconstruction With RBM
    
    
    $ python mlfromscratch/examples/restricted_boltzmann_machine.py
    

@abstr_image 

Figure: Shows how the network gets better during training at reconstructing   
the digit @abstr_number in the MNIST dataset. 

### Evolutionary Evolved Neural Network
    
    
    $ python mlfromscratch/examples/neuroevolution.py
    
    +---------------+
    | Model Summary |
    +---------------+
    Input Shape: ( @abstr_number ,)
    +----------------------+------------+--------------+
    | Layer Type           | Parameters | Output Shape |
    +----------------------+------------+--------------+
    | Dense                |  @abstr_number        | ( @abstr_number ,)        |
    | Activation (ReLU)    |  @abstr_number           | ( @abstr_number ,)        |
    | Dense                |  @abstr_number         | ( @abstr_number ,)        |
    | Activation (Softmax) |  @abstr_number           | ( @abstr_number ,)        |
    +----------------------+------------+--------------+
    Total Parameters:  @abstr_number 
    
    Population Size:  @abstr_number 
    Generations:  @abstr_number 
    Mutation Rate:  @abstr_number . @abstr_number 
    
    [ @abstr_number  Best Individual - Fitness:  @abstr_number . @abstr_number , Accuracy:  @abstr_number . @abstr_number %]
    [ @abstr_number  Best Individual - Fitness:  @abstr_number . @abstr_number , Accuracy:  @abstr_number . @abstr_number %]
    ...
    [ @abstr_number  Best Individual - Fitness:  @abstr_number . @abstr_number , Accuracy:  @abstr_number . @abstr_number %]
    Test set accuracy:  @abstr_number . @abstr_number %
    

@abstr_image 

Figure: Classification of the digit dataset by a neural network which has  
been evolutionary evolved. 

### Genetic Algorithm
    
    
    $ python mlfromscratch/examples/genetic_algorithm.py
    
    +--------+
    |   GA   |
    +--------+
    Description: Implementation of a Genetic Algorithm which aims to produce
    the user specified target string. This implementation calculates each
    candidate's fitness based on the alphabetical distance between the candidate
    and the target. A candidate is selected as a parent with probabilities proportional
    to the candidate's fitness. Reproduction is implemented as a single-point
    crossover between pairs of parents. Mutation is done by randomly assigning
    new characters with uniform probability.
    
    Parameters
    ----------
    Target String: 'Genetic Algorithm'
    Population Size:  @abstr_number 
    Mutation Rate:  @abstr_number . @abstr_number 
    
    [ @abstr_number  Closest Candidate: 'CJqlJguPlqzvpoJmb', Fitness:  @abstr_number . @abstr_number ]
    [ @abstr_number  Closest Candidate: 'MCxZxdr nlfiwwGEk', Fitness:  @abstr_number . @abstr_number ]
    [ @abstr_number  Closest Candidate: 'MCxZxdm nlfiwwGcx', Fitness:  @abstr_number . @abstr_number ]
    [ @abstr_number  Closest Candidate: 'SmdsAklMHn kBIwKn', Fitness:  @abstr_number . @abstr_number ]
    [ @abstr_number  Closest Candidate: '  lotneaJOasWfu Z', Fitness:  @abstr_number . @abstr_number ]
    ...
    [ @abstr_number  Closest Candidate: 'GeneticaAlgorithm', Fitness:  @abstr_number . @abstr_number ]
    [ @abstr_number  Closest Candidate: 'GeneticaAlgorithm', Fitness:  @abstr_number . @abstr_number ]
    [ @abstr_number  Answer: 'Genetic Algorithm']
    

### Association Analysis
    
    
    $ python mlfromscratch/examples/apriori.py
    +-------------+
    |   Apriori   |
    +-------------+
    Minimum Support:  @abstr_number . @abstr_number 
    Minimum Confidence:  @abstr_number . @abstr_number 
    Transactions:
        [ @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ]
        [ @abstr_number ,  @abstr_number ,  @abstr_number ]
        [ @abstr_number ,  @abstr_number ]
        [ @abstr_number ,  @abstr_number ,  @abstr_number ]
        [ @abstr_number ,  @abstr_number ]
        [ @abstr_number ,  @abstr_number ]
        [ @abstr_number ,  @abstr_number ]
    Frequent Itemsets:
        [ @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number , [ @abstr_number ,  @abstr_number ], [ @abstr_number ,  @abstr_number ], [ @abstr_number ,  @abstr_number ], [ @abstr_number ,  @abstr_number ], [ @abstr_number ,  @abstr_number ], [ @abstr_number ,  @abstr_number ,  @abstr_number ], [ @abstr_number ,  @abstr_number ,  @abstr_number ]]
    Rules:
         @abstr_number  ->  @abstr_number  (support:  @abstr_number . @abstr_number , confidence:  @abstr_number . @abstr_number )
         @abstr_number  ->  @abstr_number  (support:  @abstr_number . @abstr_number , confidence:  @abstr_number . @abstr_number )
        [ @abstr_number ,  @abstr_number ] ->  @abstr_number  (support:  @abstr_number . @abstr_number , confidence:  @abstr_number . @abstr_number )
    

## Implementations

### Supervised Learning

  * Adaboost
  * Bayesian Regression
  * Decision Tree
  * Elastic Net
  * Gradient Boosting
  * K Nearest Neighbors
  * Lasso Regression
  * Linear Discriminant Analysis
  * Linear Regression
  * Logistic Regression
  * Multi-class Linear Discriminant Analysis
  * Multilayer Perceptron
  * Naive Bayes
  * Neuroevolution
  * Particle Swarm Optimization of Neural Network
  * Perceptron
  * Polynomial Regression
  * Random Forest
  * Ridge Regression
  * Support Vector Machine
  * XGBoost



### Unsupervised Learning

  * Apriori
  * Autoencoder
  * DBSCAN
  * FP-Growth
  * Gaussian Mixture Model
  * Generative Adversarial Network
  * Genetic Algorithm
  * K-Means
  * Partitioning Around Medoids
  * Principal Component Analysis
  * Restricted Boltzmann Machine



### Reinforcement Learning

  * Deep Q-Network



### Deep Learning

  * Neural Network
  * Layers 
    * Activation Layer
    * Average Pooling Layer
    * Batch Normalization Layer
    * Constant Padding Layer
    * Convolutional Layer
    * Dropout Layer
    * Flatten Layer
    * Fully-Connected (Dense) Layer
    * Fully-Connected RNN Layer
    * Max Pooling Layer
    * Reshape Layer
    * Up Sampling Layer
    * Zero Padding Layer
  * Model Types 
    * Convolutional Neural Network
    * Multilayer Perceptron
    * Recurrent Neural Network



## Contact

If there's some implementation you would like to see here or if you're just feeling social, feel free to @abstr_hyperlink me or connect with me on @abstr_hyperlink .
