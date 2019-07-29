@abstr_image 

# ncnn

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

ncnn is a high-performance neural network inference computing framework optimized for mobile platforms. ncnn is deeply considerate about deployment and uses on mobile phones from the beginning of design. ncnn does not have third party dependencies. it is cross-platform, and runs faster than all known open source frameworks on mobile phone cpu. Developers can easily deploy deep learning algorithm models to the mobile platform by using efficient ncnn implementation, create intelligent APPs, and bring the artificial intelligence to your fingertips. ncnn is currently being used in many Tencent applications, such as QQ, Qzone, WeChat, Pitu and so on.

ncnn 是一个为手机端极致优化的高性能神经网络前向计算框架。ncnn 从设计之初深刻考虑手机端的部署和使用。无第三方依赖，跨平台，手机端 cpu 的速度快于目前所有已知的开源框架。基于 ncnn，开发者能够将深度学习算法轻松移植到手机端高效执行，开发出人工智能 APP，将 AI 带到你的指尖。ncnn 目前已在腾讯多款应用中使用，如 QQ，Qzone，微信，天天P图等。

* * *

### Support most commonly used CNN network

### 支持大部分常用的 CNN 网络

  * Classical CNN: VGG AlexNet GoogleNet Inception ...
  * Practical CNN: ResNet DenseNet SENet FPN ...
  * Light-weight CNN: SqueezeNet MobileNetV @abstr_number /V @abstr_number ShuffleNetV @abstr_number /V @abstr_number MNasNet ...
  * Detection: MTCNN facedetection ...
  * Detection: VGG-SSD MobileNet-SSD SqueezeNet-SSD MobileNetV @abstr_number -SSDLite ...
  * Detection: Faster-RCNN R-FCN ...
  * Detection: YOLOV @abstr_number YOLOV @abstr_number MobileNet-YOLOV @abstr_number ...
  * Segmentation: FCN PSPNet ...



* * *

### HowTo

**@abstr_hyperlink on Linux / Windows / Raspberry Pi @abstr_number / Android / NVIDIA Jetson / iOS**

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



**@abstr_hyperlink**

**@abstr_hyperlink with detailed steps, recommended for beginners :)**

**@abstr_hyperlink 附带详细步骤，新人强烈推荐 :)**

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

* * *

### FAQ

**@abstr_hyperlink**

**@abstr_hyperlink**

**@abstr_hyperlink**

* * *

### Features

  * Supports convolutional neural networks, supports multiple input and multi-branch structure, can calculate part of the branch
  * No third-party library dependencies, does not rely on BLAS / NNPACK or any other computing framework
  * Pure C ++ implementation, cross-platform, supports android, ios and so on
  * ARM NEON assembly level of careful optimization, calculation speed is extremely high
  * Sophisticated memory management and data structure design, very low memory footprint
  * Supports multi-core parallel computing acceleration, ARM big.LITTLE cpu scheduling optimization
  * Supports GPU acceleration via the next-generation low-overhead vulkan api
  * The overall library size is less than @abstr_number K, and can be easily reduced to less than @abstr_number K
  * Extensible model design, supports @abstr_number bit quantization and half-precision floating point storage, can import caffe/pytorch/mxnet/onnx models
  * Support direct memory zero copy reference load network model
  * Can be registered with custom layer implementation and extended
  * Well, it is strong, not afraid of being stuffed with 卷 QvQ



### 功能概述

  * 支持卷积神经网络，支持多输入和多分支结构，可计算部分分支
  * 无任何第三方库依赖，不依赖 BLAS/NNPACK 等计算框架
  * 纯 C++ 实现，跨平台，支持 android ios 等
  * ARM NEON 汇编级良心优化，计算速度极快
  * 精细的内存管理和数据结构设计，内存占用极低
  * 支持多核并行计算加速，ARM big.LITTLE cpu 调度优化
  * 支持基于全新低消耗的 vulkan api GPU 加速
  * 整体库体积小于 @abstr_number K，并可轻松精简到小于 @abstr_number K
  * 可扩展的模型设计，支持 @abstr_number bit 量化和半精度浮点存储，可导入 caffe/pytorch/mxnet/onnx 模型
  * 支持直接内存零拷贝引用加载网络模型
  * 可注册自定义层实现并扩展
  * 恩，很强就是了，不怕被塞卷 QvQ



* * *

### supported platform matrix

  * ✅ = known work and runs fast with good optimization
  * ✔️ = known work, but speed may not be fast enough
  * ❔ = shall work, not confirmed
  * / = not applied



| |Windows|Linux|Android|MacOS|iOS| |---|---|---|---|---|---| |intel-cpu|✔️|✔️|❔|✔️|/| |intel-gpu|✔️|✔️|❔|❔|/| |amd-cpu|✔️|✔️|❔|✔️|/| |amd-gpu|✔️|✔️|❔|❔|/| |nvidia-gpu|✔️|✔️|❔|❔|/| |qcom-cpu|❔|✔️|✅|/|/| |qcom-gpu|❔|✔️|✔️|/|/| |arm-cpu|❔|❔|✅|/|/| |arm-gpu|❔|❔|✔️|/|/| |apple-cpu|/|/|/|/|✅| |apple-gpu|/|/|/|/|✔️|

* * *

### Example project

  * https://github.com/Tencent/ncnn/tree/master/examples/squeezencnn
  * https://github.com/chehongshu/ncnnforandroid_objectiondetection_Mobilenetssd
  * https://github.com/moli @abstr_number /mtcnn_ncnn



@abstr_image @abstr_image @abstr_image 

### 技术交流QQ群： @abstr_number (超多大佬) 答案：卷卷卷卷卷

* * *

### License

BSD @abstr_number Clause
