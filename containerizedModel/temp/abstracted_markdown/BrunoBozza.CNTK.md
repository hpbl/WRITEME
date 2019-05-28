# CNTK

## Latest news

  * @abstr_number - @abstr_number - @abstr_number .* New Text Reader (CNTKTextFormatReader) is available Read description here https://github.com/Microsoft/CNTK/wiki/CNTKTextFormat-Reader

  * @abstr_number - @abstr_number - @abstr_number .* Added ZIP files support to the ImageReader Examples: https://github.com/Microsoft/CNTK/wiki/Image-reader Updated build steps at https://github.com/Microsoft/CNTK/wiki/Setup-CNTK-on-your-machine




See @abstr_hyperlink .

## What is CNTK

CNTK (http://www.cntk.ai/), the Computational Network Toolkit by Microsoft Research, is a unified deep-learning toolkit that describes neural networks as a series of computational steps via a directed graph. In this directed graph, leaf nodes represent input values or network parameters, while other nodes represent matrix operations upon their inputs. CNTK allows to easily realize and combine popular model types such as feed-forward DNNs, convolutional nets (CNNs), and recurrent networks (RNNs/LSTMs). It implements stochastic gradient descent (SGD, error backpropagation) learning with automatic differentiation and parallelization across multiple GPUs and servers. CNTK has been available under an open-source license since April @abstr_number . It is our hope that the community will take advantage of CNTK to share ideas more quickly through the exchange of open source working code.

Wiki: Go to the @abstr_hyperlink for all information on CNTK including @abstr_hyperlink , @abstr_hyperlink , etc.

License: See LICENSE.md in the root of this repository for the full license information.

Tutorial: @abstr_hyperlink 

Blogs: 

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Performance

The figure below compares processing speed (frames processed per second) of CNTK to that of four other well-known toolkits. The configuration uses a fully connected @abstr_number -layer neural network (see our benchmark @abstr_hyperlink ) and an effective mini batch size ( @abstr_number ). All results were obtained on the same hardware with the respective latest public software versions as of Dec @abstr_number , @abstr_number .

@abstr_image 

## Citation

If you used this toolkit or part of it to do your research, please cite the work as:

Amit Agarwal, Eldar Akchurin, Chris Basoglu, Guoguo Chen, Scott Cyphers, Jasha Droppo, Adam Eversole, Brian Guenter, Mark Hillebrand, T. Ryan Hoens, Xuedong Huang, Zhiheng Huang, Vladimir Ivanov, Alexey Kamenev, Philipp Kranen, Oleksii Kuchaiev, Wolfgang Manousek, Avner May, Bhaskar Mitra, Olivier Nano, Gaizka Navarro, Alexey Orlov, Hari Parthasarathi, Baolin Peng, Marko Radmilac, Alexey Reznichenko, Frank Seide, Michael L. Seltzer, Malcolm Slaney, Andreas Stolcke, Huaming Wang, Yongqiang Wang, Kaisheng Yao, Dong Yu, Yu Zhang, Geoffrey Zweig (in alphabetical order), @abstr_hyperlink , Microsoft Technical Report MSR-TR- @abstr_number - @abstr_number , @abstr_number .

## Disclaimer

CNTK is in active use at Microsoft and constantly evolving. There will be bugs.
