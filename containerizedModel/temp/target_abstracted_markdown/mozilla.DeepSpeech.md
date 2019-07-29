# Project DeepSpeech

@abstr_hyperlink 

DeepSpeech is an open source Speech-To-Text engine, using a model trained by machine learning techniques based on @abstr_hyperlink . Project DeepSpeech uses Google's @abstr_hyperlink to make the implementation easier.

@abstr_image 

Pre-built binaries for performing inference with a trained model can be installed with `pip @abstr_number`. Proper setup using a virtual environment is recommended, and you can find that documentation below.

A pre-trained English model is available for use and can be downloaded using the instructions below. Currently, only @abstr_number -bit, @abstr_number kHz, mono-channel WAVE audio files are supported in the Python client.

Once everything is installed, you can then use the `deepspeech` binary to do speech-to-text on short (approximately @abstr_number -second long) audio files as such:

@abstr_code_section 

Alternatively, quicker inference can be performed using a supported NVIDIA GPU on Linux. See the @abstr_hyperlink to find which GPUs are supported. To run `deepspeech` on a GPU, install the GPU specific package:

@abstr_code_section 

Please ensure you have the required CUDA dependency.

See the output of `deepspeech -h` for more information on the use of `deepspeech`. (If you experience problems running `deepspeech`, please check required runtime dependencies).

**Table of Contents**

  * Prerequisites
  * Getting the code
  * Using a Pre-trained Model 
    * CUDA dependency
    * Getting the pre-trained model
    * Model compatibility
    * Using the Python package
    * Using the Node.JS package
    * Using the Command Line client
    * Installing bindings from source
    * Third party bindings
  * Training your own Model 
    * Installing training prerequisites
    * Recommendations
    * Common Voice training data
    * Training a model
    * Checkpointing
    * Exporting a model for inference
    * Exporting a model for TFLite
    * Making a mmap-able model for inference
    * Continuing training from a release model
  * Contribution guidelines
  * Contact/Getting Help



## Prerequisites

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Mac or Linux environment
  * Go to build README to start building DeepSpeech for Windows from source.



## Getting the code

Install @abstr_hyperlink either manually or through a package-manager if available on your system. Then clone the DeepSpeech repository normally:

@abstr_code_section 

## Using a Pre-trained Model

There are three ways to use DeepSpeech inference:

  * The Python package
  * The Node.JS package
  * The Command-Line client



Running `deepspeech` might require some runtime dependencies to be already installed on your system. Regardless of which bindings you are using, you will need the following:

  * libsox @abstr_number 
  * libstdc++ @abstr_number 
  * libgomp @abstr_number 
  * libpthread



Please refer to your system's documentation on how to install these dependencies.

### CUDA dependency

The GPU capable builds (Python, NodeJS, C++, etc) depend on the same CUDA runtime as upstream TensorFlow. Currently with TensorFlow @abstr_number . @abstr_number it depends on CUDA @abstr_number . @abstr_number and CuDNN v @abstr_number . @abstr_number .

### Getting the pre-trained model

If you want to use the pre-trained English model for performing speech-to-text, you can download it (along with other important inference material) from the DeepSpeech @abstr_hyperlink . Alternatively, you can run the following command to download and unzip the model files in your current directory:

@abstr_code_section 

### Model compatibility

DeepSpeech models are versioned to keep you from trying to use an incompatible graph with a newer client after a breaking change was made to the code. If you get an error saying your model file version is too old for the client, you should either upgrade to a newer model release, re-export your model from the checkpoint using a newer version of the code, or downgrade your client if you need to use the old model and can't re-export it.

### Using the Python package

Pre-built binaries which can be used for performing inference with a trained model can be installed with `pip @abstr_number`. You can then use the `deepspeech` binary to do speech-to-text on an audio file:

For the Python bindings, it is highly recommended that you perform the installation within a Python @abstr_number . @abstr_number or later virtual environment. You can find more information about those in @abstr_hyperlink .

We will continue under the assumption that you already have your system properly setup to create new virtual environments.

#### Create a DeepSpeech virtual environment

In creating a virtual environment you will create a directory containing a `python @abstr_number` binary and everything needed to run deepspeech. You can use whatever directory you want. For the purpose of the documentation, we will rely on `$HOME/tmp/deepspeech-venv`. You can create it using this command:

@abstr_code_section 

Once this command completes successfully, the environment will be ready to be activated.

#### Activating the environment

Each time you need to work with DeepSpeech, you have to _activate_ this virtual environment. This is done with this simple command:

@abstr_code_section 

#### Installing DeepSpeech Python bindings

Once your environment has been set-up and loaded, you can use `pip @abstr_number` to manage packages locally. On a fresh setup of the `virtualenv`, you will have to install the DeepSpeech wheel. You can check if `deepspeech` is already installed with `pip @abstr_number list`.

To perform the installation, just use `pip @abstr_number` as such:

@abstr_code_section 

If `deepspeech` is already installed, you can update it as such:

@abstr_code_section 

Alternatively, if you have a supported NVIDIA GPU on Linux, you can install the GPU specific package as follows:

@abstr_code_section 

See the @abstr_hyperlink to find which GPUs are supported. Please ensure you have the required CUDA dependency.

You can update `deepspeech-gpu` as follows:

@abstr_code_section 

In both cases, `pip @abstr_number` should take care of installing all the required dependencies. After installation has finished, you should be able to call `deepspeech` from the command-line.

Note: the following command assumes you downloaded the pre-trained model.

@abstr_code_section 

The arguments `--lm` and `--trie` are optional, and represent a language model.

See client.py for an example of how to use the package programatically.

### Using the Node.JS package

You can download the Node.JS bindings using `npm`:

@abstr_code_section 

Please note that as of now, we only support Node.JS versions @abstr_number , @abstr_number and @abstr_number . Once @abstr_hyperlink we can build for newer versions.

Alternatively, if you're using Linux and have a supported NVIDIA GPU, you can install the GPU specific package as follows:

@abstr_code_section 

See the @abstr_hyperlink to find which GPUs are supported. Please ensure you have the required CUDA dependency.

See client.js for an example of how to use the bindings. Or download the wav example.

### Using the Command-Line client

To download the pre-built binaries for the `deepspeech` command-line (compiled C++) client, use `util/taskcluster.py`:

@abstr_code_section 

or if you're on macOS:

@abstr_code_section 

also, if you need some binaries different than current master, like `v @abstr_number . @abstr_number . @abstr_number -alpha. @abstr_number`, you can use `--branch`:

@abstr_code_section 

The script `taskcluster.py` will download `native_client.tar.xz` (which includes the `deepspeech` binary, `generate_trie` and associated libraries) and extract it into the current folder. Also, `taskcluster.py` will download binaries for Linux/x @abstr_number _ @abstr_number by default, but you can override that behavior with the `--arch` parameter. See the help info with `python util/taskcluster.py -h` for more details. Specific branches of DeepSpeech or TensorFlow can be specified as well.

Note: the following command assumes you downloaded the pre-trained model.

@abstr_code_section 

See the help output with `./deepspeech -h` and the native client README for more details.

### Installing bindings from source

If pre-built binaries aren't available for your system, you'll need to install them from scratch. Follow these native_client installation instructions.

### Third party bindings

In addition to the bindings above, third party developers have started to provide bindings to other languages:

  * @abstr_hyperlink provides @abstr_hyperlink bindings in its @abstr_hyperlink repo.
  * @abstr_hyperlink provide a @abstr_hyperlink binding, the installation and use of which is described in their @abstr_hyperlink repo.
  * @abstr_hyperlink provides preliminary @abstr_hyperlink to install the client and python bindings on @abstr_hyperlink in the @abstr_hyperlink repo.
  * @abstr_hyperlink provides a @abstr_hyperlink plugin which can be used from any language with GStreamer bindings.



## Training Your Own Model

### Installing Training Prerequisites

Install the required dependencies using `pip @abstr_number`:

@abstr_code_section 

You'll also need to install the `ds_ctcdecoder` Python package. `ds_ctcdecoder` is required for decoding the outputs of the `deepspeech` acoustic model into text. You can use `util/taskcluster.py` with the `--decoder` flag to get a URL to a binary of the decoder package appropriate for your platform and Python version:

@abstr_code_section 

This command will download and install the `ds_ctcdecoder` package. If you prefer building the binaries from source, see the native_client README file. You can override the platform with `--arch` if you want the package for ARM @abstr_number (`--arch arm`) or ARM @abstr_number (`--arch arm @abstr_number`).

### Recommendations

If you have a capable (NVIDIA, at least @abstr_number GB of VRAM) GPU, it is highly recommended to install TensorFlow with GPU support. Training will be significantly faster than using the CPU. To enable GPU support, you can do:

@abstr_code_section 

Please ensure you have the required CUDA dependency.

It has been reported for some people failure at training: @abstr_code_section 

Setting the `TF_FORCE_GPU_ALLOW_GROWTH` environment variable to `true` seems to help in such cases.

### Common Voice training data

The Common Voice corpus consists of voice samples that were donated through Mozilla's @abstr_hyperlink Initiative. You can download individual CommonVoice v @abstr_number . @abstr_number language data sets from @abstr_hyperlink . After extraction of such a data set, you'll find the following contents: \- the `*.tsv` files output by CorporaCreator for the downloaded language \- the mp @abstr_number audio files they reference in a `clips` sub-directory.

For bringing this data into a form that DeepSpeech understands, you have to run the CommonVoice v @abstr_number . @abstr_number importer (`bin/import_cv @abstr_number .py`):

@abstr_code_section 

Providing a filter alphabet is optional. It will exclude all samples whose transcripts contain characters not in the specified alphabet. Running the importer with `-h` will show you some additional options.

Once the import is done, the `clips` sub-directory will contain for each required `.mp @abstr_number` an additional `.wav` file. It will also add the following `.csv` files:

  * `clips/train.csv`
  * `clips/dev.csv`
  * `clips/test.csv`



All entries in these CSV files refer to their samples by absolute paths. So moving this sub-directory would require another import or tweaking the CSV files accordingly.

To use Common Voice data during training, validation and testing, you pass (comma separated combinations of) their filenames into `--train_files`, `--dev_files`, `--test_files` parameters of `DeepSpeech.py`.

If, for example, Common Voice language `en` was extracted to `../data/CV/en/`, `DeepSpeech.py` could be called like this:

@abstr_code_section 

### Training a model

The central (Python) script is `DeepSpeech.py` in the project's root directory. For its list of command line options, you can call:

@abstr_code_section 

To get the output of this in a slightly better-formatted way, you can also look up the option definitions top `DeepSpeech.py`.

For executing pre-configured training scenarios, there is a collection of convenience scripts in the `bin` folder. Most of them are named after the corpora they are configured for. Keep in mind that the other speech corpora are _very large_ , on the order of tens of gigabytes, and some aren't free. Downloading and preprocessing them can take a very long time, and training on them without a fast GPU (GTX @abstr_number series recommended) takes even longer.

**If you experience GPU OOM errors while training, try reducing the batch size with the`--train_batch_size`, `--dev_batch_size` and `--test_batch_size` parameters.**

As a simple first example you can open a terminal, change to the directory of the DeepSpeech checkout and run:

@abstr_code_section 

This script will train on a small sample dataset called LDC @abstr_number S @abstr_number , which can be overfitted on a GPU in a few minutes for demonstration purposes. From here, you can alter any variables with regards to what dataset is used, how many training iterations are run and the default values of the network parameters.

Feel also free to pass additional (or overriding) `DeepSpeech.py` parameters to these scripts. Then, just run the script to train the modified network.

Each dataset has a corresponding importer script in `bin/` that can be used to download (if it's freely available) and preprocess the dataset. See `bin/import_librivox.py` for an example of how to import and preprocess a large dataset for training with DeepSpeech.

If you've run the old importers (in `util/importers/`), they could have removed source files that are needed for the new importers to run. In that case, simply remove the extracted folders and let the importer extract and process the dataset from scratch, and things should work.

### Checkpointing

During training of a model so-called checkpoints will get stored on disk. This takes place at a configurable time interval. The purpose of checkpoints is to allow interruption (also in the case of some unexpected failure) and later continuation of training without losing hours of training time. Resuming from checkpoints happens automatically by just (re)starting training with the same `--checkpoint_dir` of the former run.

Be aware however that checkpoints are only valid for the same model geometry they had been generated from. In other words: If there are error messages of certain `Tensors` having incompatible dimensions, this is most likely due to an incompatible model change. One usual way out would be to wipe all checkpoint files in the checkpoint directory or changing it before starting the training.

### Exporting a model for inference

If the `--export_dir` parameter is provided, a model will have been exported to this directory during training. Refer to the corresponding README.md for information on building and running a client that can use the exported model.

### Exporting a model for TFLite

If you want to experiment with the TF Lite engine, you need to export a model that is compatible with it, then use the `--export_tflite` flags. If you already have a trained model, you can re-export it for TFLite by running `DeepSpeech.py` again and specifying the same `checkpoint_dir` that you used for training, as well as passing `--export_tflite --export_dir /model/export/destination`.

### Making a mmap-able model for inference

The `output_graph.pb` model file generated in the above step will be loaded in memory to be dealt with when running inference. This will result in extra loading time and memory consumption. One way to avoid this is to directly read data from the disk.

TensorFlow has tooling to achieve this: it requires building the target `//tensorflow/contrib/util:convert_graphdef_memmapped_format` (binaries are produced by our TaskCluster for some systems including Linux/amd @abstr_number and macOS/amd @abstr_number ), use `util/taskcluster.py` tool to download, specifying `tensorflow` as a source and `convert_graphdef_memmapped_format` as artifact.

Producing a mmap-able model is as simple as:

@abstr_code_section 

Upon sucessfull run, it should report about conversion of a non-zero number of nodes. If it reports converting `@abstr_number` nodes, something is wrong: make sure your model is a frozen one, and that you have not applied any incompatible changes (this includes `quantize_weights`).

### Continuing training from a release model

If you'd like to use one of the pre-trained models released by Mozilla to bootstrap your training process (transfer learning, fine tuning), you can do so by using the `--checkpoint_dir` flag in `DeepSpeech.py`. Specify the path where you downloaded the checkpoint from the release, and training will resume from the pre-trained model.

For example, if you want to fine tune the entire graph using your own data in `my-train.csv`, `my-dev.csv` and `my-test.csv`, for three epochs, you can something like the following, tuning the hyperparameters as needed:

@abstr_code_section 

Note: the released models were trained with `--n_hidden @abstr_number`, so you need to use that same value when initializing from the release models.

## Contribution guidelines

This repository is governed by Mozilla's code of conduct and etiquette guidelines. For more details, please read the @abstr_hyperlink .

Before making a Pull Request, check your changes for basic mistakes and style problems by using a linter. We have cardboardlinter setup in this repository, so for example, if you've made some changes and would like to run the linter on just the changed code, you can use the follow command:

@abstr_code_section 

This will compare the code against master and run the linter on all the changes. We plan to introduce more linter checks (e.g. for C++) in the future. To run it automatically as a git pre-commit hook, do the following:

@abstr_code_section 

This will run the linters on just the changes made in your commit.

## Contact/Getting Help

There are several ways to contact us or to get help:

@abstr_number . @abstr_hyperlink - We have a list of common questions, and their answers, in our @abstr_hyperlink . When just getting started, it's best to first check the @abstr_hyperlink to see if your question is addressed.

@abstr_number . @abstr_hyperlink - If your question is not addressed in the @abstr_hyperlink , the @abstr_hyperlink is the next place to look. They contain conversations on @abstr_hyperlink , @abstr_hyperlink , and @abstr_hyperlink .

@abstr_number . @abstr_hyperlink - If your question is not addressed by either the @abstr_hyperlink or @abstr_hyperlink , you can contact us on the `#machinelearning` channel on @abstr_hyperlink ; people there can try to answer/help

@abstr_number . @abstr_hyperlink - Finally, if all else fails, you can open an issue in our repo.
