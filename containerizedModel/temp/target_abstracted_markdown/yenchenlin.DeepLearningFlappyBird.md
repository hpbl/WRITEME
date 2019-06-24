# Using Deep Q-Network to Learn How To Play Flappy Bird

@abstr_image 

@abstr_number mins version: @abstr_hyperlink 

## Overview

This project follows the description of the Deep Q Learning algorithm described in Playing Atari with Deep Reinforcement Learning [ @abstr_number ] and shows that this learning algorithm can be further generalized to the notorious Flappy Bird.

## Installation Dependencies:

  * Python @abstr_number . @abstr_number or @abstr_number 
  * TensorFlow @abstr_number . @abstr_number 
  * pygame
  * OpenCV-Python



## How to Run?

@abstr_code_section 

## What is Deep Q-Network?

It is a convolutional neural network, trained with a variant of Q-learning, whose input is raw pixels and whose output is a value function estimating future rewards.

For those who are interested in deep reinforcement learning, I highly recommend to read the following post:

@abstr_hyperlink 

## Deep Q-Network Algorithm

The pseudo-code for the Deep Q Learning algorithm, as given in [ @abstr_number ], can be found below:

@abstr_code_section 

## Experiments

#### Environment

Since deep Q-network is trained on the raw pixel values observed from the game screen at each time step, [ @abstr_number ] finds that remove the background appeared in the original game can make it converge faster. This process can be visualized as the following figure:

@abstr_image 

#### Network Architecture

According to [ @abstr_number ], I first preprocessed the game screens with following steps:

@abstr_number . Convert image to grayscale @abstr_number . Resize image to @abstr_number x @abstr_number @abstr_number . Stack last @abstr_number frames to produce an @abstr_number x @abstr_number x @abstr_number input array for network

The architecture of the network is shown in the figure below. The first layer convolves the input image with an @abstr_number x @abstr_number x @abstr_number x @abstr_number kernel at a stride size of @abstr_number . The output is then put through a @abstr_number x @abstr_number max pooling layer. The second layer convolves with a @abstr_number x @abstr_number x @abstr_number x @abstr_number kernel at a stride of @abstr_number . We then max pool again. The third layer convolves with a @abstr_number x @abstr_number x @abstr_number x @abstr_number kernel at a stride of @abstr_number . We then max pool one more time. The last hidden layer consists of @abstr_number fully connected ReLU nodes.

@abstr_image 

The final output layer has the same dimensionality as the number of valid actions which can be performed in the game, where the @abstr_number th index always corresponds to doing nothing. The values at this output layer represent the Q function given the input state for each valid action. At each time step, the network performs whichever action corresponds to the highest Q value using a ϵ greedy policy.

#### Training

At first, I initialize all weight matrices randomly using a normal distribution with a standard deviation of @abstr_number . @abstr_number , then set the replay memory with a max size of @abstr_number , @abstr_number experiences.

I start training by choosing actions uniformly at random for the first @abstr_number , @abstr_number time steps, without updating the network weights. This allows the system to populate the replay memory before training begins.

Note that unlike [ @abstr_number ], which initialize ϵ = @abstr_number , I linearly anneal ϵ from @abstr_number . @abstr_number to @abstr_number . @abstr_number over the course of the next @abstr_number , @abstr_number frames. The reason why I set it this way is that agent can choose an action every @abstr_number . @abstr_number s (FPS= @abstr_number ) in our game, high ϵ will make it **flap** too much and thus keeps itself at the top of the game screen and finally bump the pipe in a clumsy way. This condition will make Q function converge relatively slow since it only start to look other conditions when ϵ is low. However, in other games, initialize ϵ to @abstr_number is more reasonable.

During training time, at each time step, the network samples minibatches of size @abstr_number from the replay memory to train on, and performs a gradient step on the loss function described above using the Adam optimization algorithm with a learning rate of @abstr_number . @abstr_number . After annealing finishes, the network continues to train indefinitely, with ϵ fixed at @abstr_number . @abstr_number .

## FAQ

#### Checkpoint not found

Change @abstr_hyperlink to 

`model_checkpoint_path: "saved_networks/bird-dqn- @abstr_number "`

#### How to reproduce?

@abstr_number . Comment out @abstr_hyperlink 

@abstr_number . Modify `deep_q_network.py`'s parameter as follow: @abstr_code_section 

## References

[ @abstr_number ] Mnih Volodymyr, Koray Kavukcuoglu, David Silver, Andrei A. Rusu, Joel Veness, Marc G. Bellemare, Alex Graves, Martin Riedmiller, Andreas K. Fidjeland, Georg Ostrovski, Stig Petersen, Charles Beattie, Amir Sadik, Ioannis Antonoglou, Helen King, Dharshan Kumaran, Daan Wierstra, Shane Legg, and Demis Hassabis. **Human-level Control through Deep Reinforcement Learning**. Nature, @abstr_number - @abstr_number , @abstr_number .

[ @abstr_number ] Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Alex Graves, Ioannis Antonoglou, Daan Wierstra, and Martin Riedmiller. **Playing Atari with Deep Reinforcement Learning**. NIPS, Deep Learning workshop

[ @abstr_number ] Kevin Chen. **Deep Reinforcement Learning for Flappy Bird** @abstr_hyperlink | @abstr_hyperlink 

## Disclaimer

This work is highly based on the following repos:

@abstr_number . [sourabhv/FlapPyBird] (https://github.com/sourabhv/FlapPyBird) @abstr_number . @abstr_hyperlink 
