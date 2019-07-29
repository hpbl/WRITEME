@abstr_image   
  


* * *

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

The Dynamic Neural Network Toolkit

  * General
  * Installation 
    * C++
    * Python
  * Getting Started
  * Citing
  * Releases and Contributing



## General

DyNet is a neural network library developed by Carnegie Mellon University and many others. It is written in C++ (with bindings in Python) and is designed to be efficient when run on either CPU or GPU, and to work well with networks that have dynamic structures that change for every training instance. For example, these kinds of networks are particularly important in natural language processing tasks, and DyNet has been used to build state-of-the-art systems for @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , and many other application areas.

Read the @abstr_hyperlink to get started, and feel free to contact the @abstr_hyperlink group with any questions (if you want to receive email make sure to select "all email" when you sign up). We greatly appreciate any bug reports and contributions, which can be made by filing an issue or making a pull request through the @abstr_hyperlink .

You can also read more technical details in our @abstr_hyperlink .

## Getting started

You can find tutorials about using DyNet @abstr_hyperlink and @abstr_hyperlink , and @abstr_hyperlink .

One aspect that sets DyNet apart from other tookits is the **auto-batching** feature. See the @abstr_hyperlink about batching.

The `example` folder contains a variety of examples in C++ and python.

## Installation

DyNet relies on a number of external programs/libraries including CMake, Eigen, and Mercurial (to install Eigen). CMake, and Mercurial can be installed from standard repositories.

For example on **Ubuntu Linux** :
    
    
    sudo apt-get install build-essential cmake mercurial
    

Or on **macOS** , first make sure the Apple Command Line Tools are installed, then get CMake, and Mercurial with either homebrew or macports:
    
    
    xcode-select --install
    brew install cmake hg  # Using homebrew.
    sudo port install cmake mercurial # Using macports.
    

On **Windows** , see @abstr_hyperlink .

To compile DyNet you also need the @abstr_hyperlink . **If you use any of the released versions, you may get assertion failures or compile errors.** If you don't have Eigen already, you can get it easily using the following command:
    
    
    hg clone https://bitbucket.org/eigen/eigen/ -r b @abstr_number e @abstr_number d
    

The `-r NUM` specified a revision number that is known to work. Adventurous users can remove it and use the very latest version, at the risk of the code breaking / not compiling. On macOS, you can install the latest development of Eigen using Homebrew:
    
    
    brew install --HEAD eigen
    

### C++ installation

You can install dynet for C++ with the following commands
    
    
    # Clone the github repository
    git clone https://github.com/clab/dynet.git
    cd dynet
    mkdir build
    cd build
    # Run CMake
    # -DENABLE_BOOST=ON in combination with -DENABLE_CPP_EXAMPLES=ON also
    # compiles the multiprocessing c++ examples
    cmake .. -DEIGEN @abstr_number _INCLUDE_DIR=/path/to/eigen -DENABLE_CPP_EXAMPLES=ON
    # Compile using  @abstr_number  processes
    make -j  @abstr_number 
    # Test with an example
    ./examples/train_xor
    

For more details refer to the @abstr_hyperlink 

### Python installation

You can install DyNet for python by using the following command
    
    
    pip install git+https://github.com/clab/dynet#egg=dynet
    

For more details refer to the @abstr_hyperlink 

## Citing

If you use DyNet for research, please cite this report as follows:
    
    
    @article{dynet,
      title={DyNet: The Dynamic Neural Network Toolkit},
      author={Graham Neubig and Chris Dyer and Yoav Goldberg and Austin Matthews and Waleed Ammar and Antonios Anastasopoulos and Miguel Ballesteros and David Chiang and Daniel Clothiaux and Trevor Cohn and Kevin Duh and Manaal Faruqui and Cynthia Gan and Dan Garrette and Yangfeng Ji and Lingpeng Kong and Adhiguna Kuncoro and Gaurav Kumar and Chaitanya Malaviya and Paul Michel and Yusuke Oda and Matthew Richardson and Naomi Saphra and Swabha Swayamdipta and Pengcheng Yin},
      journal={arXiv preprint arXiv: @abstr_number . @abstr_number },
      year={ @abstr_number }
    }
    

## Contributing

We welcome any contribution to DyNet! You can find the contributing guidelines @abstr_hyperlink 
