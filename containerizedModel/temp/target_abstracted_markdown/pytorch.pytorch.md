@abstr_image 

* * *

PyTorch is a Python package that provides two high-level features: \- Tensor computation (like NumPy) with strong GPU acceleration \- Deep neural networks built on a tape-based autograd system

You can reuse your favorite Python packages such as NumPy, SciPy and Cython to extend PyTorch when needed.

  * More about PyTorch
  * Installation 
    * Binaries
    * From Source
    * Docker Image
    * Building the Documentation
    * Previous Versions
  * Getting Started
  * Communication
  * Releases and Contributing
  * The Team



| System | @abstr_number . @abstr_number | @abstr_number . @abstr_number | @abstr_number . @abstr_number | | :---: | :---: | :---: | :--: | | Linux CPU | @abstr_hyperlink | @abstr_hyperlink | 

— | | Linux GPU | @abstr_hyperlink | @abstr_hyperlink | — | | Windows CPU / GPU | — | @abstr_hyperlink | — | | Linux (ppc @abstr_number le) CPU | @abstr_hyperlink | — | @abstr_hyperlink | | Linux (ppc @abstr_number le) GPU | @abstr_hyperlink | — | @abstr_hyperlink | 

See also the @abstr_hyperlink .

## More About PyTorch

At a granular level, PyTorch is a library that consists of the following components:

| Component | Description | | ---- | --- | | @abstr_hyperlink | a Tensor library like NumPy, with strong GPU support | | @abstr_hyperlink | a tape-based automatic differentiation library that supports all differentiable Tensor operations in torch | | @abstr_hyperlink | a compilation stack (TorchScript) to create serializable and optimizable models from PyTorch code | | @abstr_hyperlink | a neural networks library deeply integrated with autograd designed for maximum flexibility | | @abstr_hyperlink | Python multiprocessing, but with magical memory sharing of torch Tensors across processes. Useful for data loading and Hogwild training | | @abstr_hyperlink | DataLoader and other utility functions for convenience |

Usually one uses PyTorch either as:

  * a replacement for NumPy to use the power of GPUs.
  * a deep learning research platform that provides maximum flexibility and speed.



Elaborating further:

### A GPU-Ready Tensor Library

If you use NumPy, then you have used Tensors (a.k.a ndarray).

@abstr_image 

PyTorch provides Tensors that can live either on the CPU or the GPU, and accelerates the computation by a huge amount.

We provide a wide variety of tensor routines to accelerate and fit your scientific computation needs such as slicing, indexing, math operations, linear algebra, reductions. And they are fast!

### Dynamic Neural Networks: Tape-Based Autograd

PyTorch has a unique way of building neural networks: using and replaying a tape recorder.

Most frameworks such as TensorFlow, Theano, Caffe and CNTK have a static view of the world. One has to build a neural network, and reuse the same structure again and again. Changing the way the network behaves means that one has to start from scratch.

With PyTorch, we use a technique called reverse-mode auto-differentiation, which allows you to change the way your network behaves arbitrarily with zero lag or overhead. Our inspiration comes from several research papers on this topic, as well as current and past work such as @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , etc.

While this technique is not unique to PyTorch, it's one of the fastest implementations of it to date. You get the best of speed and flexibility for your crazy research.

@abstr_image 

### Python First

PyTorch is not a Python binding into a monolithic C++ framework. It is built to be deeply integrated into Python. You can use it naturally like you would use @abstr_hyperlink / @abstr_hyperlink / @abstr_hyperlink etc. You can write your new neural network layers in Python itself, using your favorite libraries and use packages such as Cython and Numba. Our goal is to not reinvent the wheel where appropriate.

### Imperative Experiences

PyTorch is designed to be intuitive, linear in thought and easy to use. When you execute a line of code, it gets executed. There isn't an asynchronous view of the world. When you drop into a debugger, or receive error messages and stack traces, understanding them is straightforward. The stack trace points to exactly where your code was defined. We hope you never spend hours debugging your code because of bad stack traces or asynchronous and opaque execution engines.

### Fast and Lean

PyTorch has minimal framework overhead. We integrate acceleration libraries such as @abstr_hyperlink and NVIDIA (cuDNN, NCCL) to maximize speed. At the core, its CPU and GPU Tensor and neural network backends (TH, THC, THNN, THCUNN) are mature and have been tested for years.

Hence, PyTorch is quite fast – whether you run small or large neural networks.

The memory usage in PyTorch is extremely efficient compared to Torch or some of the alternatives. We've written custom memory allocators for the GPU to make sure that your deep learning models are maximally memory efficient. This enables you to train bigger deep learning models than before.

### Extensions Without Pain

Writing new neural network modules, or interfacing with PyTorch's Tensor API was designed to be straightforward and with minimal abstractions.

You can write new neural network layers in Python using the torch API @abstr_hyperlink .

If you want to write your layers in C/C++, we provide a convenient extension API that is efficient and with minimal boilerplate. There is no wrapper code that needs to be written. You can see @abstr_hyperlink and @abstr_hyperlink .

## Installation

### Binaries

Commands to install from binaries via Conda or pip wheels are on our website: @abstr_hyperlink 

#### NVIDIA Jetson platforms

Python wheels for NVIDIA's Jetson Nano, Jetson TX @abstr_number , and Jetson AGX Xavier are available via the following URLs:

  * Stable binaries: 
    * Python @abstr_number . @abstr_number : https://nvidia.box.com/v/torch-stable-cp @abstr_number -jetson-jp @abstr_number 
    * Python @abstr_number . @abstr_number : https://nvidia.box.com/v/torch-stable-cp @abstr_number -jetson-jp @abstr_number 
  * Rolling weekly binaries: 
    * Python @abstr_number . @abstr_number : https://nvidia.box.com/v/torch-weekly-cp @abstr_number -jetson-jp @abstr_number 
    * Python @abstr_number . @abstr_number : https://nvidia.box.com/v/torch-weekly-cp @abstr_number -jetson-jp @abstr_number 



They requires JetPack @abstr_number . @abstr_number and above and are maintained by @dusty-nv

### From Source

If you are installing from source, we highly recommend installing an @abstr_hyperlink environment. You will get a high-quality BLAS library (MKL) and you get controlled dependency versions regardless of your Linux distro.

Once you have @abstr_hyperlink installed, here are the instructions.

If you want to compile with CUDA support, install \- @abstr_hyperlink @abstr_number or above \- @abstr_hyperlink v @abstr_number or above

If you want to disable CUDA support, export environment variable `USE_CUDA= @abstr_number`. Other potentially useful environment variables may be found in `setup.py`.

If you are building for NVIDIA's Jetson platforms (Jetson Nano, TX @abstr_number , TX @abstr_number , AGX Xavier), Instructions to @abstr_hyperlink 

#### Install Dependencies

Common @abstr_code_section 

On Linux @abstr_code_section 

#### Get the PyTorch Source

@abstr_code_section 

#### Install PyTorch

On Linux @abstr_code_section 

On macOS @abstr_code_section 

On Windows

At least Visual Studio @abstr_number Update @abstr_number (version @abstr_number . @abstr_number . @abstr_number with the toolset @abstr_number . @abstr_number ) and @abstr_hyperlink are needed.

If the version of Visual Studio @abstr_number is higher than @abstr_number . @abstr_number . @abstr_number , installing of "VC++ @abstr_number version @abstr_number . @abstr_number v @abstr_number . @abstr_number toolset" is strongly recommended.   
If the version of Visual Studio @abstr_number is lesser than @abstr_number . @abstr_number . @abstr_number , please update Visual Studio @abstr_number to the latest version along with installing "VC++ @abstr_number version @abstr_number . @abstr_number v @abstr_number . @abstr_number toolset".   
There is no guarantee of the correct building with VC++ @abstr_number toolsets, others than version @abstr_number . @abstr_number v @abstr_number . @abstr_number .   
"VC++ @abstr_number version @abstr_number . @abstr_number v @abstr_number . @abstr_number toolset" might be installed onto already installed Visual Studio @abstr_number by running its installation once again and checking the corresponding checkbox under "Individual components"/"Compilers, build tools, and runtimes".

NVTX is a part of CUDA distributive, where it is called "Nsight Compute". For installing it onto already installed CUDA run CUDA installation once again and check the corresponding checkbox. Be sure that CUDA with Nsight Compute is installed after Visual Studio @abstr_number .

Currently VS @abstr_number , VS @abstr_number and Ninja are supported as the generator of CMake. If `ninja.exe` is detected in `PATH`, then Ninja will be used as the default generator, otherwise it will use VS @abstr_number .   
If Ninja is selected as the generator, the latest MSVC which is newer than VS @abstr_number ( @abstr_number . @abstr_number ) will get selected as the underlying toolchain if you have Python > @abstr_number . @abstr_number , otherwise VS @abstr_number will be selected so you'll have to activate the environment. If you use CMake <= @abstr_number . @abstr_number . @abstr_number and has VS @abstr_number installed, then even if you specify VS @abstr_number as the generator, VS @abstr_number will get selected as the generator.

CUDA and MSVC has strong version dependencies, so even if you use VS @abstr_number / @abstr_number , you will get build errors like `nvcc fatal : Host compiler targets unsupported OS`. For this kind of problem, please install the corresponding VS toolchain in the table below and then you can either specify the toolset during activation (recommended) or set `CUDAHOSTCXX` to override the cuda host compiler (not recommended if there are big version differences).

| CUDA version | Newest supported VS version | | ------------ | ------------------------------------------------------- | | @abstr_number . @abstr_number / @abstr_number . @abstr_number | Visual Studio @abstr_number Update @abstr_number ( @abstr_number . @abstr_number ) (`_MSC_VER` <= @abstr_number ) | | @abstr_number . @abstr_number | Visual Studio @abstr_number Update @abstr_number ( @abstr_number . @abstr_number ) (`_MSC_VER` <= @abstr_number ) | | @abstr_number . @abstr_number | Visual Studio @abstr_number ( @abstr_number .X) (`_MSC_VER` < @abstr_number ) | | @abstr_number . @abstr_number | Visual Studio @abstr_number ( @abstr_number .X) (`_MSC_VER` < @abstr_number ) |

@abstr_code_section 

##### Adjust Build Options (Optional)

You can adjust the configuration of cmake variables optionally (without building first), by doing the following. For example, adjusting the pre-detected directories for CuDNN or BLAS can be done with such a step.

On Linux @abstr_code_section 

On macOS @abstr_code_section 

### Docker Image

Dockerfile is supplied to build images with cuda support and cudnn v @abstr_number . You can pass `-e PYTHON_VERSION=x.y` flag to specify which Python version is to be used by Miniconda, or leave it unset to use the default. Build from pytorch repo directory as docker needs to copy git repo into docker filesystem while building the image. @abstr_code_section 

You can also pull a pre-built docker image from Docker Hub and run with nvidia-docker, but this is not currently maintained and will pull PyTorch @abstr_number . @abstr_number . @abstr_code_section Please note that PyTorch uses shared memory to share data between processes, so if torch multiprocessing is used (e.g. for multithreaded data loaders) the default shared memory segment size that container runs with is not enough, and you should increase shared memory size either with `--ipc=host` or `--shm-size` command line options to `nvidia-docker run`.

### Building the Documentation

To build documentation in various formats, you will need @abstr_hyperlink and the readthedocs theme.

@abstr_code_section You can then build the documentation by running `make <format>` from the `docs/` folder. Run `make` to get a list of all available output formats.

### Previous Versions

Installation instructions and binaries for previous PyTorch versions may be found on @abstr_hyperlink .

## Getting Started

Three pointers to get you started: \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink 

## Communication

  * forums: discuss implementations, research, etc. https://discuss.pytorch.org
  * GitHub issues: bug reports, feature requests, install issues, RFCs, thoughts, etc.
  * Slack: The @abstr_hyperlink hosts a primary audience of moderate to experienced PyTorch users and developers for general chat, online discussions, collaboration etc. If you are a beginner looking for help, the primary medium is @abstr_hyperlink . If you need a slack invite, please fill this form: https://goo.gl/forms/PP @abstr_number AGvNHpSaJP @abstr_number to @abstr_number 
  * newsletter: no-noise, one-way email newsletter with important announcements about pytorch. You can sign-up here: https://eepurl.com/cbG @abstr_number rv



## Releases and Contributing

PyTorch has a @abstr_number day release cycle (major releases). Please let us know if you encounter a bug by @abstr_hyperlink .

We appreciate all contributions. If you are planning to contribute back bug-fixes, please do so without any further discussion.

If you plan to contribute new features, utility functions or extensions to the core, please first open an issue and discuss the feature with us. Sending a PR without discussion might end up resulting in a rejected PR, because we might be taking the core in a different direction than you might be aware of.

## The Team

PyTorch is a community driven project with several skillful engineers and researchers contributing to it.

PyTorch is currently maintained by @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink with major contributions coming from hundreds of talented individuals in various forms and means. A non-exhaustive but growing list needs to mention: Trevor Killeen, Sasank Chilamkurthy, Sergey Zagoruyko, Adam Lerer, Francisco Massa, Alykhan Tejani, Luca Antiga, Alban Desmaison, Andreas Kopf, James Bradbury, Zeming Lin, Yuandong Tian, Guillaume Lample, Marat Dukhan, Natalia Gimelshein, Christian Sarofeen, Martin Raison, Edward Yang, Zachary Devito.

Note: this project is unrelated to @abstr_hyperlink with the same name. Hugh is a valuable contributor in the Torch community and has helped with many things Torch and PyTorch.

## License

PyTorch is BSD-style licensed, as found in the LICENSE file.
