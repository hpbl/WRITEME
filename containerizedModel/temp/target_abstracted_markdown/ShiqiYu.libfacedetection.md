# libfacedetection

This is an open source library for CNN-based face detection in images. The CNN model has been converted to static variables in C source files. The source code does not depend on any other libraries. What you need is just a C++ compiler. You can compile the source code under Windows, Linux, ARM and any platform with a C++ compiler.

SIMD instructions are used to speed up the detection. You can enable AVX @abstr_number if you use Intel CPU or NEON for ARM.

The model file has also been provided in directory ./models/.

examples/libfacedetectcnn-example.cpp shows how to use the library.

@abstr_image 

## How to use the code

You can copy the files in directory src/ into your project, and compile them as the other files in your project. The source code is written in standard C/C++. It should be compiled at any platform which support C/C++.

Some tips: * Please add -O @abstr_number to turn on optimizations when you compile the source code using g++. * Please choose 'Maximize Speed/-O @abstr_number ' when you compile the source code using Microsoft Visual Studio. * ENABLE_INT @abstr_number =ON is recommended for ARM, but it is not recommended for Intel CPU since it cannot gain better speed sometime even worse. * The source code can only run in single thread. If you want to run parally, you can call the face detection function in multiple threads. Yes, multiple-thread is complex in programming. * If you want to achieve best performance, you can run the model (not the source code) using OpenVINO on Intel CPU or Tengine on ARM CPU.

If you want to compile and run the example, you can create a build folder first, then run the command:

@abstr_code_section 

### Use Tengine to Speedup the detection on ARM

The model has been added to @abstr_hyperlink . Tengine, developed by OPEN AI LAB, is a lite, high-performance, and modular inference engine for embedded device. 

The model in Tengine can run faster than the C++ source code here because Tengine has been optimized according to ARM CPU. There are detailed manual and example at Tengine web site: https://github.com/OAID/Tengine/tree/master/examples/YuFaceDetectNet

### Cross build for aarch @abstr_number

@abstr_number . Set cross compiler for aarch @abstr_number (please refer to aarch @abstr_number -toolchain.cmake) @abstr_number . Set opencv path since the example code depends on opencv

@abstr_code_section 

### Native build for avx @abstr_number

@abstr_code_section 

## CNN-based Face Detection on Windows

| Method |Time | FPS |Time | FPS | |--------------------|--------------|-------------|--------------|-------------| | | X @abstr_number |X @abstr_number | X @abstr_number |X @abstr_number | | |Single-thread |Single-thread|Multi-thread |Multi-thread | |OpenCV Haar+AdaBoost ( @abstr_number x @abstr_number )| -- | -- | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | |cnn (CPU, @abstr_number x @abstr_number ) | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | |cnn (CPU, @abstr_number x @abstr_number ) | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | |cnn (CPU, @abstr_number x @abstr_number ) | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | |cnn (CPU, @abstr_number x @abstr_number ) | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number |

  * OpenCV Haar+AdaBoost runs with minimal face size @abstr_number x @abstr_number 
  * Face detection only, and no landmark detection included
  * Minimal face size ~ @abstr_number x @abstr_number 
  * Intel(R) Core(TM) i @abstr_number - @abstr_number CPU @ @abstr_number . @abstr_number GHz



## CNN-based Face Detection on ARM Linux (Raspberry Pi @abstr_number B+)

| Method |Time | FPS |Time | FPS | |--------------------|--------------|-------------|--------------|-------------| | |Single-thread |Single-thread|Multi-thread |Multi-thread | |cnn (CPU, @abstr_number x @abstr_number ) | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | |cnn (CPU, @abstr_number x @abstr_number ) | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | |cnn (CPU, @abstr_number x @abstr_number ) | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | |cnn (CPU, @abstr_number x @abstr_number ) | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number | @abstr_number . @abstr_number ms | @abstr_number . @abstr_number |

  * Face detection only, and no landmark detection included.
  * Minimal face size ~ @abstr_number x @abstr_number 
  * Raspberry Pi @abstr_number B+, Broadcom BCM @abstr_number B @abstr_number , Cortex-A @abstr_number (ARMv @abstr_number ) @abstr_number -bit SoC @ @abstr_number . @abstr_number GHz



## Author

  * Shiqi Yu, @abstr_hyperlink 



## Contributors

Some contributors are listed @abstr_hyperlink . 

The contributors who are not listed at GitHub.com: * Jia Wu (吴佳) * Dong Xu (徐栋) * Shengyin Wu (伍圣寅)

## Acknowledgment

The work is partly supported by the Science Foundation of Shenzhen (Grant No. JCYJ @abstr_number and @abstr_number ).
