@abstr_image 

@abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

This is the _Vowpal Wabbit_ fast online learning code. For Windows specific info, look at README.Windows.md

## Why Vowpal Wabbit?

Vowpal Wabbit is a machine learning system which pushes the frontier of machine learning with techniques such as online, hashing, allreduce, reductions, learning @abstr_number search, active, and interactive learning. There is a specific focus on reinforcement learning with several contextual bandit algorithms implemented and the online nature lending to the problem well. Vowpal Wabbit is a destination for implementing and maturing state of the art algorithms with performance in mind.

  * **Input Format.** The input format for the learning algorithm is substantially more flexible than might be expected. Examples can have features consisting of free form text, which is interpreted in a bag-of-words way. There can even be multiple sets of free form text in different namespaces.
  * **Speed.** The learning algorithm is fast -- similar to the few other online algorithm implementations out there. There are several optimization algorithms available with the baseline being sparse gradient descent (GD) on a loss function.
  * **Scalability.** This is not the same as fast. Instead, the important characteristic here is that the memory footprint of the program is bounded independent of data. This means the training set is not loaded into main memory before learning starts. In addition, the size of the set of features is bounded independent of the amount of training data using the hashing trick.
  * **Feature Interaction.** Subsets of features can be internally paired so that the algorithm is linear in the cross-product of the subsets. This is useful for ranking problems. The alternative of explicitly expanding the features before feeding them into the learning algorithm can be both computation and space intensive, depending on how it's handled.



@abstr_hyperlink 

## Getting Started

For the most up to date instructions for getting started on Windows, MacOS or Linux @abstr_hyperlink . This includes:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 


