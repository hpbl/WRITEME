# Deep Learning Papers Reading Roadmap

> If you are a newcomer to the Deep Learning area, the first question you may have is "Which paper should I start reading from?"
> 
> Here is a reading roadmap of Deep Learning papers!

The roadmap is constructed in accordance with the following four guidelines:

  * From outline to detail
  * From old to state-of-the-art
  * from generic to specific areas
  * focus on state-of-the-art



You will find many papers that are quite new but really worth reading.

I would continue adding papers to this roadmap.

* * *

# @abstr_number Deep Learning History and Basics

## @abstr_number . @abstr_number Book

**[ @abstr_number ]** Bengio, Yoshua, Ian J. Goodfellow, and Aaron Courville. " **Deep learning**." An MIT Press book. ( @abstr_number ). @abstr_hyperlink **(Deep Learning Bible, you can read this book while reading following papers.)** :star::star::star::star::star:

## @abstr_number . @abstr_number Survey

**[ @abstr_number ]** LeCun, Yann, Yoshua Bengio, and Geoffrey Hinton. " **Deep learning**." Nature @abstr_number . @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink **(Three Giants' Survey)** :star::star::star::star::star:

## @abstr_number . @abstr_number Deep Belief Network(DBN)(Milestone of Deep Learning Eve)

**[ @abstr_number ]** Hinton, Geoffrey E., Simon Osindero, and Yee-Whye Teh. " **A fast learning algorithm for deep belief nets**." Neural computation @abstr_number . @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink **(Deep Learning Eve)** :star::star::star:

**[ @abstr_number ]** Hinton, Geoffrey E., and Ruslan R. Salakhutdinov. " **Reducing the dimensionality of data with neural networks**." Science @abstr_number . @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink **(Milestone, Show the promise of deep learning)** :star::star::star:

## @abstr_number . @abstr_number ImageNet Evolution（Deep Learning broke out from here）

**[ @abstr_number ]** Krizhevsky, Alex, Ilya Sutskever, and Geoffrey E. Hinton. " **Imagenet classification with deep convolutional neural networks**." Advances in neural information processing systems. @abstr_number . @abstr_hyperlink **(AlexNet, Deep Learning Breakthrough)** :star::star::star::star::star:

**[ @abstr_number ]** Simonyan, Karen, and Andrew Zisserman. " **Very deep convolutional networks for large-scale image recognition**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(VGGNet,Neural Networks become very deep!)** :star::star::star:

**[ @abstr_number ]** Szegedy, Christian, et al. " **Going deeper with convolutions**." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. @abstr_number . @abstr_hyperlink **(GoogLeNet)** :star::star::star:

**[ @abstr_number ]** He, Kaiming, et al. " **Deep residual learning for image recognition**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(ResNet,Very very deep networks, CVPR best paper)** :star::star::star::star::star:

## @abstr_number . @abstr_number Speech Recognition Evolution

**[ @abstr_number ]** Hinton, Geoffrey, et al. " **Deep neural networks for acoustic modeling in speech recognition: The shared views of four research groups**." IEEE Signal Processing Magazine @abstr_number . @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink **(Breakthrough in speech recognition)** :star::star::star::star:

**[ @abstr_number ]** Graves, Alex, Abdel-rahman Mohamed, and Geoffrey Hinton. " **Speech recognition with deep recurrent neural networks**." @abstr_number IEEE international conference on acoustics, speech and signal processing. IEEE, @abstr_number . @abstr_hyperlink **(RNN)** :star::star::star:

**[ @abstr_number ]** Graves, Alex, and Navdeep Jaitly. " **Towards End-To-End Speech Recognition with Recurrent Neural Networks**." ICML. Vol. @abstr_number . @abstr_number . @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Sak, Haşim, et al. " **Fast and accurate recurrent neural network acoustic models for speech recognition**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Google Speech Recognition System)** :star::star::star:

**[ @abstr_number ]** Amodei, Dario, et al. " **Deep speech @abstr_number : End-to-end speech recognition in english and mandarin**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Baidu Speech Recognition System)** :star::star::star::star:

**[ @abstr_number ]** W. Xiong, J. Droppo, X. Huang, F. Seide, M. Seltzer, A. Stolcke, D. Yu, G. Zweig " **Achieving Human Parity in Conversational Speech Recognition**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(State-of-the-art in speech recognition, Microsoft)** :star::star::star::star:

> After reading above papers, you will have a basic understanding of the Deep Learning history, the basic architectures of Deep Learning model(including CNN, RNN, LSTM) and how deep learning can be applied to image and speech recognition issues. The following papers will take you in-depth understanding of the Deep Learning method, Deep Learning in different areas of application and the frontiers. I suggest that you can choose the following papers based on your interests and research direction.

# @abstr_number Deep Learning Method

## @abstr_number . @abstr_number Model

**[ @abstr_number ]** Hinton, Geoffrey E., et al. " **Improving neural networks by preventing co-adaptation of feature detectors**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Dropout)** :star::star::star:

**[ @abstr_number ]** Srivastava, Nitish, et al. " **Dropout: a simple way to prevent neural networks from overfitting**." Journal of Machine Learning Research @abstr_number . @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Ioffe, Sergey, and Christian Szegedy. " **Batch normalization: Accelerating deep network training by reducing internal covariate shift**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(An outstanding Work in @abstr_number )** :star::star::star::star:

**[ @abstr_number ]** Ba, Jimmy Lei, Jamie Ryan Kiros, and Geoffrey E. Hinton. " **Layer normalization**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Update of Batch Normalization)** :star::star::star::star:

**[ @abstr_number ]** Courbariaux, Matthieu, et al. " **Binarized Neural Networks: Training Neural Networks with Weights and Activations Constrained to+ @abstr_number or− @abstr_number _*." @abstr_hyperlink *_ (New Model,Fast)** :star::star::star:

**[ @abstr_number ]** Jaderberg, Max, et al. " **Decoupled neural interfaces using synthetic gradients**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Innovation of Training Method,Amazing Work)** :star::star::star::star::star:

**[ @abstr_number ]** Chen, Tianqi, Ian Goodfellow, and Jonathon Shlens. "Net @abstr_number net: Accelerating learning via knowledge transfer." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Modify previously trained network to reduce training epochs)** :star::star::star:

**[ @abstr_number ]** Wei, Tao, et al. "Network Morphism." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Modify previously trained network to reduce training epochs)** :star::star::star:

## @abstr_number . @abstr_number Optimization

**[ @abstr_number ]** Sutskever, Ilya, et al. " **On the importance of initialization and momentum in deep learning**." ICML ( @abstr_number ) @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink **(Momentum optimizer)** :star::star:

**[ @abstr_number ]** Kingma, Diederik, and Jimmy Ba. " **Adam: A method for stochastic optimization**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Maybe used most often currently)** :star::star::star:

**[ @abstr_number ]** Andrychowicz, Marcin, et al. " **Learning to learn by gradient descent by gradient descent**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Neural Optimizer,Amazing Work)** :star::star::star::star::star:

**[ @abstr_number ]** Han, Song, Huizi Mao, and William J. Dally. " **Deep compression: Compressing deep neural network with pruning, trained quantization and huffman coding**." CoRR, abs/ @abstr_number . @abstr_number @abstr_number ( @abstr_number ). @abstr_hyperlink **(ICLR best paper, new direction to make NN running fast,DeePhi Tech Startup)** :star::star::star::star::star:

**[ @abstr_number ]** Iandola, Forrest N., et al. " **SqueezeNet: AlexNet-level accuracy with @abstr_number x fewer parameters and < @abstr_number MB model size**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Also a new direction to optimize NN,DeePhi Tech Startup)** :star::star::star::star:

## @abstr_number . @abstr_number Unsupervised Learning / Deep Generative Model

**[ @abstr_number ]** Le, Quoc V. " **Building high-level features using large scale unsupervised learning**." @abstr_number IEEE international conference on acoustics, speech and signal processing. IEEE, @abstr_number . @abstr_hyperlink **(Milestone, Andrew Ng, Google Brain Project, Cat)** :star::star::star::star:

**[ @abstr_number ]** Kingma, Diederik P., and Max Welling. " **Auto-encoding variational bayes**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(VAE)** :star::star::star::star:

**[ @abstr_number ]** Goodfellow, Ian, et al. " **Generative adversarial nets**." Advances in Neural Information Processing Systems. @abstr_number . @abstr_hyperlink **(GAN,super cool idea)** :star::star::star::star::star:

**[ @abstr_number ]** Radford, Alec, Luke Metz, and Soumith Chintala. " **Unsupervised representation learning with deep convolutional generative adversarial networks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(DCGAN)** :star::star::star::star:

**[ @abstr_number ]** Gregor, Karol, et al. " **DRAW: A recurrent neural network for image generation**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(VAE with attention, outstanding work)** :star::star::star::star::star:

**[ @abstr_number ]** Oord, Aaron van den, Nal Kalchbrenner, and Koray Kavukcuoglu. " **Pixel recurrent neural networks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(PixelRNN)** :star::star::star::star:

**[ @abstr_number ]** Oord, Aaron van den, et al. "Conditional image generation with PixelCNN decoders." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(PixelCNN)** :star::star::star::star:

## @abstr_number . @abstr_number RNN / Sequence-to-Sequence Model

**[ @abstr_number ]** Graves, Alex. " **Generating sequences with recurrent neural networks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(LSTM, very nice generating result, show the power of RNN)** :star::star::star::star:

**[ @abstr_number ]** Cho, Kyunghyun, et al. " **Learning phrase representations using RNN encoder-decoder for statistical machine translation**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(First Seq-to-Seq Paper)** :star::star::star::star:

**[ @abstr_number ]** Sutskever, Ilya, Oriol Vinyals, and Quoc V. Le. " **Sequence to sequence learning with neural networks**." Advances in neural information processing systems. @abstr_number . @abstr_hyperlink **(Outstanding Work)** :star::star::star::star::star:

**[ @abstr_number ]** Bahdanau, Dzmitry, KyungHyun Cho, and Yoshua Bengio. " **Neural Machine Translation by Jointly Learning to Align and Translate**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Vinyals, Oriol, and Quoc Le. " **A neural conversational model**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Seq-to-Seq on Chatbot)** :star::star::star:

## @abstr_number . @abstr_number Neural Turing Machine

**[ @abstr_number ]** Graves, Alex, Greg Wayne, and Ivo Danihelka. " **Neural turing machines**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Basic Prototype of Future Computer)** :star::star::star::star::star:

**[ @abstr_number ]** Zaremba, Wojciech, and Ilya Sutskever. " **Reinforcement learning neural Turing machines**." arXiv preprint arXiv: @abstr_number . @abstr_number @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Weston, Jason, Sumit Chopra, and Antoine Bordes. " **Memory networks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Sukhbaatar, Sainbayar, Jason Weston, and Rob Fergus. " **End-to-end memory networks**." Advances in neural information processing systems. @abstr_number . @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Vinyals, Oriol, Meire Fortunato, and Navdeep Jaitly. " **Pointer networks**." Advances in Neural Information Processing Systems. @abstr_number . @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Graves, Alex, et al. " **Hybrid computing using a neural network with dynamic external memory**." Nature ( @abstr_number ). @abstr_hyperlink **(Milestone,combine above papers' ideas)** :star::star::star::star::star:

## @abstr_number . @abstr_number Deep Reinforcement Learning

**[ @abstr_number ]** Mnih, Volodymyr, et al. " **Playing atari with deep reinforcement learning**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink ) **(First Paper named deep reinforcement learning)** :star::star::star::star:

**[ @abstr_number ]** Mnih, Volodymyr, et al. " **Human-level control through deep reinforcement learning**." Nature @abstr_number . @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink **(Milestone)** :star::star::star::star::star:

**[ @abstr_number ]** Wang, Ziyu, Nando de Freitas, and Marc Lanctot. " **Dueling network architectures for deep reinforcement learning**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(ICLR best paper,great idea)** :star::star::star::star:

**[ @abstr_number ]** Mnih, Volodymyr, et al. " **Asynchronous methods for deep reinforcement learning**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(State-of-the-art method)** :star::star::star::star::star:

**[ @abstr_number ]** Lillicrap, Timothy P., et al. " **Continuous control with deep reinforcement learning**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(DDPG)** :star::star::star::star:

**[ @abstr_number ]** Gu, Shixiang, et al. " **Continuous Deep Q-Learning with Model-based Acceleration**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(NAF)** :star::star::star::star:

**[ @abstr_number ]** Schulman, John, et al. " **Trust region policy optimization**." CoRR, abs/ @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(TRPO)** :star::star::star::star:

**[ @abstr_number ]** Silver, David, et al. " **Mastering the game of Go with deep neural networks and tree search**." Nature @abstr_number . @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink **(AlphaGo)** :star::star::star::star::star:

## @abstr_number . @abstr_number Deep Transfer Learning / Lifelong Learning / especially for RL

**[ @abstr_number ]** Bengio, Yoshua. " **Deep Learning of Representations for Unsupervised and Transfer Learning**." ICML Unsupervised and Transfer Learning @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink **(A Tutorial)** :star::star::star:

**[ @abstr_number ]** Silver, Daniel L., Qiang Yang, and Lianghao Li. " **Lifelong Machine Learning Systems: Beyond Learning Algorithms**." AAAI Spring Symposium: Lifelong Machine Learning. @abstr_number . @abstr_hyperlink **(A brief discussion about lifelong learning)** :star::star::star:

**[ @abstr_number ]** Hinton, Geoffrey, Oriol Vinyals, and Jeff Dean. " **Distilling the knowledge in a neural network**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Godfather's Work)** :star::star::star::star:

**[ @abstr_number ]** Rusu, Andrei A., et al. " **Policy distillation**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(RL domain)** :star::star::star:

**[ @abstr_number ]** Parisotto, Emilio, Jimmy Lei Ba, and Ruslan Salakhutdinov. " **Actor-mimic: Deep multitask and transfer reinforcement learning**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(RL domain)** :star::star::star:

**[ @abstr_number ]** Rusu, Andrei A., et al. " **Progressive neural networks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Outstanding Work, A novel idea)** :star::star::star::star::star:

## @abstr_number . @abstr_number One Shot Deep Learning

**[ @abstr_number ]** Lake, Brenden M., Ruslan Salakhutdinov, and Joshua B. Tenenbaum. " **Human-level concept learning through probabilistic program induction**." Science @abstr_number . @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink **(No Deep Learning,but worth reading)** :star::star::star::star::star:

**[ @abstr_number ]** Koch, Gregory, Richard Zemel, and Ruslan Salakhutdinov. " **Siamese Neural Networks for One-shot Image Recognition**."( @abstr_number ) @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Santoro, Adam, et al. " **One-shot Learning with Memory-Augmented Neural Networks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(A basic step to one shot learning)** :star::star::star::star:

**[ @abstr_number ]** Vinyals, Oriol, et al. " **Matching Networks for One Shot Learning**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Hariharan, Bharath, and Ross Girshick. " **Low-shot visual object recognition**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(A step to large data)** :star::star::star::star:

# @abstr_number Applications

## @abstr_number . @abstr_number NLP(Natural Language Processing)

**[ @abstr_number ]** Antoine Bordes, et al. " **Joint Learning of Words and Meaning Representations for Open-Text Semantic Parsing**." AISTATS( @abstr_number ) @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Mikolov, et al. " **Distributed representations of words and phrases and their compositionality**." ANIPS( @abstr_number ): @abstr_number - @abstr_number @abstr_hyperlink **(word @abstr_number vec)** :star::star::star:

**[ @abstr_number ]** Sutskever, et al. " **“Sequence to sequence learning with neural networks**." ANIPS( @abstr_number ) @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Ankit Kumar, et al. " **“Ask Me Anything: Dynamic Memory Networks for Natural Language Processing**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ) @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Yoon Kim, et al. " **Character-Aware Neural Language Models**." NIPS( @abstr_number ) arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ) @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Jason Weston, et al. " **Towards AI-Complete Question Answering: A Set of Prerequisite Toy Tasks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ) @abstr_hyperlink **(bAbI tasks)** :star::star::star:

**[ @abstr_number ]** Karl Moritz Hermann, et al. " **Teaching Machines to Read and Comprehend**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ) @abstr_hyperlink **(CNN/DailyMail cloze style questions)** :star::star:

**[ @abstr_number ]** Alexis Conneau, et al. " **Very Deep Convolutional Networks for Natural Language Processing**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ) @abstr_hyperlink **(state-of-the-art in text classification)** :star::star::star:

**[ @abstr_number ]** Armand Joulin, et al. " **Bag of Tricks for Efficient Text Classification**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ) @abstr_hyperlink **(slightly worse than state-of-the-art, but a lot faster)** :star::star::star:

## @abstr_number . @abstr_number Object Detection

**[ @abstr_number ]** Szegedy, Christian, Alexander Toshev, and Dumitru Erhan. " **Deep neural networks for object detection**." Advances in Neural Information Processing Systems. @abstr_number . @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Girshick, Ross, et al. " **Rich feature hierarchies for accurate object detection and semantic segmentation**." Proceedings of the IEEE conference on computer vision and pattern recognition. @abstr_number . @abstr_hyperlink **(RCNN)** :star::star::star::star::star:

**[ @abstr_number ]** He, Kaiming, et al. " **Spatial pyramid pooling in deep convolutional networks for visual recognition**." European Conference on Computer Vision. Springer International Publishing, @abstr_number . @abstr_hyperlink **(SPPNet)** :star::star::star::star:

**[ @abstr_number ]** Girshick, Ross. " **Fast r-cnn**." Proceedings of the IEEE International Conference on Computer Vision. @abstr_number . @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Ren, Shaoqing, et al. " **Faster R-CNN: Towards real-time object detection with region proposal networks**." Advances in neural information processing systems. @abstr_number . @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Redmon, Joseph, et al. " **You only look once: Unified, real-time object detection**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(YOLO,Oustanding Work, really practical)** :star::star::star::star::star:

**[ @abstr_number ]** Liu, Wei, et al. " **SSD: Single Shot MultiBox Detector**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Dai, Jifeng, et al. " **R-FCN: Object Detection via Region-based Fully Convolutional Networks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** He, Gkioxari, et al. " **Mask R-CNN** " arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

## @abstr_number . @abstr_number Visual Tracking

**[ @abstr_number ]** Wang, Naiyan, and Dit-Yan Yeung. " **Learning a deep compact image representation for visual tracking**." Advances in neural information processing systems. @abstr_number . @abstr_hyperlink **(First Paper to do visual tracking using Deep Learning,DLT Tracker)** :star::star::star:

**[ @abstr_number ]** Wang, Naiyan, et al. " **Transferring rich feature hierarchies for robust visual tracking**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(SO-DLT)** :star::star::star::star:

**[ @abstr_number ]** Wang, Lijun, et al. " **Visual tracking with fully convolutional networks**." Proceedings of the IEEE International Conference on Computer Vision. @abstr_number . @abstr_hyperlink **(FCNT)** :star::star::star::star:

**[ @abstr_number ]** Held, David, Sebastian Thrun, and Silvio Savarese. " **Learning to Track at @abstr_number FPS with Deep Regression Networks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(GOTURN,Really fast as a deep learning method,but still far behind un-deep-learning methods)** :star::star::star::star:

**[ @abstr_number ]** Bertinetto, Luca, et al. " **Fully-Convolutional Siamese Networks for Object Tracking**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(SiameseFC,New state-of-the-art for real-time object tracking)** :star::star::star::star:

**[ @abstr_number ]** Martin Danelljan, Andreas Robinson, Fahad Khan, Michael Felsberg. " **Beyond Correlation Filters: Learning Continuous Convolution Operators for Visual Tracking**." ECCV ( @abstr_number ) @abstr_hyperlink **(C-COT)** :star::star::star::star:

**[ @abstr_number ]** Nam, Hyeonseob, Mooyeol Baek, and Bohyung Han. " **Modeling and Propagating CNNs in a Tree Structure for Visual Tracking**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(VOT @abstr_number Winner,TCNN)** :star::star::star::star:

## @abstr_number . @abstr_number Image Caption

**[ @abstr_number ]** Farhadi,Ali,etal. " **Every picture tells a story: Generating sentences from images** ". In Computer VisionECCV @abstr_number . Springer Berlin Heidelberg: @abstr_number - @abstr_number , @abstr_number . @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Kulkarni, Girish, et al. " **Baby talk: Understanding and generating image descriptions** ". In Proceedings of the @abstr_number th CVPR, @abstr_number . @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Vinyals, Oriol, et al. " **Show and tell: A neural image caption generator** ". In arXiv preprint arXiv: @abstr_number . @abstr_number , @abstr_number . @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Donahue, Jeff, et al. " **Long-term recurrent convolutional networks for visual recognition and description** ". In arXiv preprint arXiv: @abstr_number . @abstr_number , @abstr_number . @abstr_hyperlink 

**[ @abstr_number ]** Karpathy, Andrej, and Li Fei-Fei. " **Deep visual-semantic alignments for generating image descriptions** ". In arXiv preprint arXiv: @abstr_number . @abstr_number , @abstr_number . @abstr_hyperlink :star::star::star::star::star:

**[ @abstr_number ]** Karpathy, Andrej, Armand Joulin, and Fei Fei F. Li. " **Deep fragment embeddings for bidirectional image sentence mapping** ". In Advances in neural information processing systems, @abstr_number . @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Fang, Hao, et al. " **From captions to visual concepts and back** ". In arXiv preprint arXiv: @abstr_number . @abstr_number , @abstr_number . @abstr_hyperlink :star::star::star::star::star:

**[ @abstr_number ]** Chen, Xinlei, and C. Lawrence Zitnick. " **Learning a recurrent visual representation for image caption generation** ". In arXiv preprint arXiv: @abstr_number . @abstr_number , @abstr_number . @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Mao, Junhua, et al. " **Deep captioning with multimodal recurrent neural networks (m-rnn)** ". In arXiv preprint arXiv: @abstr_number . @abstr_number , @abstr_number . @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Xu, Kelvin, et al. " **Show, attend and tell: Neural image caption generation with visual attention** ". In arXiv preprint arXiv: @abstr_number . @abstr_number , @abstr_number . @abstr_hyperlink :star::star::star::star::star:

## @abstr_number . @abstr_number Machine Translation

> Some milestone papers are listed in RNN / Seq-to-Seq topic.

**[ @abstr_number ]** Luong, Minh-Thang, et al. " **Addressing the rare word problem in neural machine translation**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Sennrich, et al. " **Neural Machine Translation of Rare Words with Subword Units** ". In arXiv preprint arXiv: @abstr_number . @abstr_number , @abstr_number . @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Luong, Minh-Thang, Hieu Pham, and Christopher D. Manning. " **Effective approaches to attention-based neural machine translation**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Chung, et al. " **A Character-Level Decoder without Explicit Segmentation for Neural Machine Translation** ". In arXiv preprint arXiv: @abstr_number . @abstr_number , @abstr_number . @abstr_hyperlink :star::star:

**[ @abstr_number ]** Lee, et al. " **Fully Character-Level Neural Machine Translation without Explicit Segmentation** ". In arXiv preprint arXiv: @abstr_number . @abstr_number , @abstr_number . @abstr_hyperlink :star::star::star::star::star:

**[ @abstr_number ]** Wu, Schuster, Chen, Le, et al. " **Google's Neural Machine Translation System: Bridging the Gap between Human and Machine Translation** ". In arXiv preprint arXiv: @abstr_number . @abstr_number v @abstr_number , @abstr_number . @abstr_hyperlink **(Milestone)** :star::star::star::star:

## @abstr_number . @abstr_number Robotics

**[ @abstr_number ]** Koutník, Jan, et al. " **Evolving large-scale neural networks for vision-based reinforcement learning**." Proceedings of the @abstr_number th annual conference on Genetic and evolutionary computation. ACM, @abstr_number . @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Levine, Sergey, et al. " **End-to-end training of deep visuomotor policies**." Journal of Machine Learning Research @abstr_number . @abstr_number ( @abstr_number ): @abstr_number - @abstr_number . @abstr_hyperlink :star::star::star::star::star:

**[ @abstr_number ]** Pinto, Lerrel, and Abhinav Gupta. " **Supersizing self-supervision: Learning to grasp from @abstr_number k tries and @abstr_number robot hours**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Levine, Sergey, et al. " **Learning Hand-Eye Coordination for Robotic Grasping with Deep Learning and Large-Scale Data Collection**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Zhu, Yuke, et al. " **Target-driven Visual Navigation in Indoor Scenes using Deep Reinforcement Learning**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Yahya, Ali, et al. " **Collective Robot Reinforcement Learning with Distributed Asynchronous Guided Policy Search**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Gu, Shixiang, et al. " **Deep Reinforcement Learning for Robotic Manipulation**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** A Rusu, M Vecerik, Thomas Rothörl, N Heess, R Pascanu, R Hadsell." **Sim-to-Real Robot Learning from Pixels with Progressive Nets**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Mirowski, Piotr, et al. " **Learning to navigate in complex environments**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

## @abstr_number . @abstr_number Art

**[ @abstr_number ]** Mordvintsev, Alexander; Olah, Christopher; Tyka, Mike ( @abstr_number ). " **Inceptionism: Going Deeper into Neural Networks** ". Google Research. @abstr_hyperlink **(Deep Dream)** :star::star::star::star:

**[ @abstr_number ]** Gatys, Leon A., Alexander S. Ecker, and Matthias Bethge. " **A neural algorithm of artistic style**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Outstanding Work, most successful method currently)** :star::star::star::star::star:

**[ @abstr_number ]** Zhu, Jun-Yan, et al. " **Generative Visual Manipulation on the Natural Image Manifold**." European Conference on Computer Vision. Springer International Publishing, @abstr_number . @abstr_hyperlink **(iGAN)** :star::star::star::star:

**[ @abstr_number ]** Champandard, Alex J. " **Semantic Style Transfer and Turning Two-Bit Doodles into Fine Artworks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(Neural Doodle)** :star::star::star::star:

**[ @abstr_number ]** Zhang, Richard, Phillip Isola, and Alexei A. Efros. " **Colorful Image Colorization**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Johnson, Justin, Alexandre Alahi, and Li Fei-Fei. " **Perceptual losses for real-time style transfer and super-resolution**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Vincent Dumoulin, Jonathon Shlens and Manjunath Kudlur. " **A learned representation for artistic style**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Gatys, Leon and Ecker, et al." **Controlling Perceptual Factors in Neural Style Transfer**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(control style transfer over spatial location,colour information and across spatial scale)** :star::star::star::star:

**[ @abstr_number ]** Ulyanov, Dmitry and Lebedev, Vadim, et al. " **Texture Networks: Feed-forward Synthesis of Textures and Stylized Images**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink **(texture generation and style transfer)** :star::star::star::star:

## @abstr_number . @abstr_number Object Segmentation

**[ @abstr_number ]** J. Long, E. Shelhamer, and T. Darrell, “ **Fully convolutional networks for semantic segmentation**.” in CVPR, @abstr_number . @abstr_hyperlink :star::star::star::star::star:

**[ @abstr_number ]** L.-C. Chen, G. Papandreou, I. Kokkinos, K. Murphy, and A. L. Yuille. " **Semantic image segmentation with deep convolutional nets and fully connected crfs**." In ICLR, @abstr_number . @abstr_hyperlink :star::star::star::star::star:

**[ @abstr_number ]** Pinheiro, P.O., Collobert, R., Dollar, P. " **Learning to segment object candidates.** " In: NIPS. @abstr_number . @abstr_hyperlink :star::star::star::star:

**[ @abstr_number ]** Dai, J., He, K., Sun, J. " **Instance-aware semantic segmentation via multi-task network cascades**." in CVPR. @abstr_number @abstr_hyperlink :star::star::star:

**[ @abstr_number ]** Dai, J., He, K., Sun, J. " **Instance-sensitive Fully Convolutional Networks**." arXiv preprint arXiv: @abstr_number . @abstr_number ( @abstr_number ). @abstr_hyperlink :star::star::star:
