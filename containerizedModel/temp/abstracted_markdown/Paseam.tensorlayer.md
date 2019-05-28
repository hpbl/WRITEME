@abstr_hyperlink 

@abstr_image 

@abstr_hyperlink @abstr_hyperlink 

TensorLayer is a Deep Learning (DL) and Reinforcement Learning (RL) library extended from @abstr_hyperlink . It provides popular DL and RL modules that can be easily customized and assembled for tackling real-world machine learning problems. 

# Why TensorLayer

TensorLayer grow out from a need to combine the power of TensorFlow with the right building modules for deep neural networks. According to our years of research and practical experiences of tackling real-world machine learning problems, we come up with three design goals for TensorLayer:

  * **Simplicity** : We make TensorLayer easy to work with by providing mass tutorials that can be deployed and run through in minutes. A TensorFlow user may find it easier to bootstrap with the simple, high-level APIs provided by TensorLayer, and then deep dive into their implementation details if need. 
  * **Flexibility** : Developing an effective DL algorithm for a specific domain typically requires careful tunings from many aspects. Without the loss of simplicity, TensorLayer allows users to customize their modules by manipulating the native APIs of TensorFlow (e.g., training parameters, iteration control and tensor components).
  * **Performance** : TensorLayer aims to provide zero-cost abstraction for TensorFlow. With its first-class support for TensorFlow, it can easily run on either heterogeneous platforms or multiple computation nodes without compromise in performance.



A frequent question regarding TensorLayer is that why do we develop a new library instead of leveraging existing ones like @abstr_hyperlink and @abstr_hyperlink . TensorLayer differentiates with those with its pursuits for flexibility and performance. A DL user may find it comfortable to bootstrap with Keras and Tflearn. These libraries provide high-level abstractions and hide engine implementation details from users. Though good for using, it becomes hard to tune and modify from the bottom, which is necessary when addressing domain-specific problems (i.e., one model does not fit all). Nevertheless, flexibility does not always come with the loss of performance. TensorLayer allows seamless distributed and heterogeneous deployment with its first-class support for the TensorFlow runtime.

# Installation

TensorLayer has install prerequisites including TensorFlow, numpy and matplotlib. For GPU support, CUDA and cuDNN are required. Please check @abstr_hyperlink for detailed instructions.

If you already had the pre-requisites ready, the simplest way to install TensorLayer in your python program is: 

@abstr_code_section 

# Documentation

The documentation @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink describes the usages of TensorLayer APIs. It is also a self-contained document that walks through different types of deep neural networks, reinforcement learning and their applications in Natural Language Processing (NLP) problems. 

We have included the corresponding modularized implementations of Google TensorFlow Deep Learning tutorial, so you can read the TensorFlow tutorial @abstr_hyperlink @abstr_hyperlink along with our document.

@abstr_hyperlink is also available.

# Your First Program

The first program trains a multi-layer perception network to solve the MNIST problem. We use the well-known @abstr_hyperlink -style functions such as `fit()` and `test()`. The program is self-explained.

@abstr_code_section 

We provide many helper functions (like `fit()` , `test()`) that is similar to Keras to facilitate your development; however, if you want to obtain a fine-grain control over the model or its training process, you can use TensorFlow’s methods like `sess.run()` in your program directly (`tutorial_mnist.py` provides more details about this). Many more DL and RL examples can be found @abstr_hyperlink .

# Contribution Guideline

TensorLayer is a major ongoing research project in Data Science Institute, Imperial College London. The goal of the project is to develop a compositional language while complex learning systems can be build through composition of neural network modules. The whole development is now participated by numerous contributors @abstr_hyperlink .

  * 🇬🇧 If you are in London, we can discuss in person. Drop us an email to organize a meetup: tensorlayer@gmail.com.
  * 🇨🇳 我们有官方的 @abstr_hyperlink 。另外, 我们建立了多种交流渠道，如QQ 群 和微信群. 需加入微信群，请将个人介绍和微信号发送到 tensorlayer@gmail.com.
  * 🇹🇭 เราขอเรียนเชิญนักพัฒนาคนไทยทุกคนที่สนใจจะเข้าร่วมทีมพัฒนา TensorLayer ติดต่อสอบถามรายละเอียดเพิ่มเติมได้ที่ tensorlayer@gmail.com.



# License

TensorLayer is releazed under the Apache @abstr_number . @abstr_number license.
