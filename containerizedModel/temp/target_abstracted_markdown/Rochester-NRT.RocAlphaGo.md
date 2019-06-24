# RocAlphaGo

(Previously known just as "AlphaGo," renamed to clarify that we are not affiliated with DeepMind)

This project is a student-led replication/reference implementation of DeepMind's @abstr_number Nature publication, "Mastering the game of Go with deep neural networks and tree search," details of which can be found @abstr_hyperlink . This implementation uses Python and Keras - a decision to prioritize code clarity, at least in the early stages.

@abstr_hyperlink @abstr_hyperlink 

# Documentation

See the @abstr_hyperlink .

# Current project status

_This is not yet a full implementation of AlphaGo_. Development is being carried out on the `develop` branch. The current emphasis is on speed optimizations, which are necessary to complete training of the value-network and to create feasible tree-search. See the `cython-optimization` branch for more.

Selected data (i.e. trained models) are released in our @abstr_hyperlink .

This project has primarily focused on the neural network training aspect of DeepMind's AlphaGo. We also have a simple single-threaded implementation of their tree search algorithm, though it is not fast enough to be competitive yet.

See the wiki page on the @abstr_hyperlink for information on how to run the training commands.

# How to contribute

See the 'Contributing' document and join the @abstr_hyperlink .
