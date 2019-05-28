# NeuralTalk @abstr_number

Recurrent Neural Network captions your images. Now much faster and better than the original @abstr_hyperlink . Compared to the original NeuralTalk this implementation is **batched, uses Torch, runs on a GPU, and supports CNN finetuning**. All of these together result in quite a large increase in training speed for the Language Model (~ @abstr_number x), but overall not as much because we also have to forward a VGGNet. However, overall very good models can be trained in @abstr_number - @abstr_number days, and they show a much better performance.

This is an early code release that works great but is slightly hastily released and probably requires some code reading of inline comments (which I tried to be quite good with in general). I will be improving it over time but wanted to push the code out there because I promised it to too many people.

This current code (and the pretrained model) gets ~ @abstr_number . @abstr_number CIDEr, which would place it around spot # @abstr_number on the @abstr_hyperlink . I will submit the actual result soon.

@abstr_image 

You can find a few more example results on the @abstr_hyperlink . These results will improve a bit more once the last few bells and whistles are in place (e.g. beam search, ensembling, reranking).

There's also a @abstr_hyperlink by @abstr_hyperlink , where he runs a neuraltalk @abstr_number pretrained model in real time on his laptop during a walk in Amsterdam.

### Requirements

#### For evaluation only

This code is written in Lua and requires @abstr_hyperlink . If you're on Ubuntu, installing Torch in your home directory may look something like: 

@abstr_code_section 

See the Torch installation documentation for more details. After Torch is installed we need to get a few more packages using @abstr_hyperlink (which already came with the Torch install). In particular:

@abstr_code_section 

We're also going to need the @abstr_hyperlink library so that we can load/save json files. Follow their @abstr_hyperlink and then look under their section @abstr_number . @abstr_number for easy luarocks install.

If you'd like to run on an NVIDIA GPU using CUDA (which you really, really want to if you're training a model, since we're using a VGGNet), you'll of course need a GPU, and you will have to install the @abstr_hyperlink . Then get the `cutorch` and `cunn` packages:

@abstr_code_section 

If you'd like to use the cudnn backend (the pretrained checkpoint does), you also have to install @abstr_hyperlink . First follow the link to @abstr_hyperlink , register with them and download the cudnn library. Then make sure you adjust your `LD_LIBRARY_PATH` to point to the `lib @abstr_number` folder that contains the library (e.g. `libcudnn.so. @abstr_number . @abstr_number . @abstr_number`). Then git clone the `cudnn.torch` repo, `cd` inside and do `luarocks make cudnn-scm- @abstr_number .rockspec` to build the Torch bindings.

#### For training

If you'd like to train your models you will need @abstr_hyperlink , since we are using the VGGNet. First, make sure you follow their instructions to install `protobuf` and everything else (e.g. `sudo apt-get install libprotobuf-dev protobuf-compiler`), and then install via luarocks:

@abstr_code_section 

Finally, you will also need to install @abstr_hyperlink , and @abstr_hyperlink , since we will be using hdf @abstr_number files to store the preprocessed data.

Phew! Quite a few dependencies, sorry no easy way around it :\

### I just want to caption images

In this case you want to run the evaluation script on a pretrained model checkpoint. I trained a decent one on the @abstr_hyperlink that you can run on your images. The pretrained checkpoint can be downloaded here: @abstr_hyperlink ( @abstr_number MB). It's large because it contains the weights of a finetuned VGGNet. Now place all your images of interest into a folder, e.g. `blah`, and run the eval script:

@abstr_code_section 

This tells the `eval` script to run up to @abstr_number images from the given folder. If you have a big GPU you can speed up the evaluation by increasing `batch_size` (default = @abstr_number ). Use `-num_images - @abstr_number` to process all images. The eval script will create an `vis.json` file inside the `vis` folder, which can then be visualized with the provided HTML interface:

@abstr_code_section 

Now visit `localhost: @abstr_number` in your browser and you should see your predicted captions.

You can see an @abstr_hyperlink .

**"I only have CPU"**. Okay, in that case download the @abstr_hyperlink . Make sure you run the eval script with `-gpuid - @abstr_number` to tell the script to run on CPU. On my machine it takes a bit less than @abstr_number second per image to caption in CPU mode.

**Beam Search**. Beam search is enabled by default because it increases the performance of the search for argmax decoding sequence. However, this is a little more expensive, so if you'd like to evaluate images faster, but at a cost of performance, use `-beam_size @abstr_number`. For example, in one of my experiments beam size @abstr_number gives CIDEr @abstr_number . @abstr_number , and beam size @abstr_number gives CIDEr @abstr_number . @abstr_number .

**Running on MSCOCO images**. If you train on MSCOCO (see how below), you will have generated preprocessed MSCOCO images, which you can use directly in the eval script. In this case simply leave out the `image_folder` option and the eval script and instead pass in the `input_h @abstr_number`, `input_json` to your preprocessed files. This will make more sense once you read the section below :)

### I'd like to train my own network on MS COCO

Great, first we need to some preprocessing. Head over to the `coco/` folder and run the IPython notebook to download the dataset and do some very simple preprocessing. The notebook will combine the train/val data together and create a very simple and small json file that contains a large list of image paths, and raw captions for each image, of the form:

@abstr_code_section 

Once we have this, we're ready to invoke the `prepro.py` script, which will read all of this in and create a dataset (an hdf @abstr_number file and a json file) ready for consumption in the Lua code. For example, for MS COCO we can run the prepro file as follows:

@abstr_code_section 

This is telling the script to read in all the data (the images and the captions), allocate @abstr_number images for val/test splits respectively, and map all words that occur <= @abstr_number times to a special `UNK` token. The resulting `json` and `h @abstr_number` files are about @abstr_number GB and contain everything we want to know about the dataset.

**Warning** : the prepro script will fail with the default MSCOCO data because one of their images is corrupted. See @abstr_hyperlink for the fix, it involves manually replacing one image in the dataset.

The last thing we need is the @abstr_hyperlink , (under Models section, " @abstr_number -layer model" bullet point). Put the two files (the prototxt configuration file and the proto binary of weights) somewhere (e.g. a `model` directory), and we're ready to train!

@abstr_code_section 

The train script will take over, and start dumping checkpoints into the folder specified by `checkpoint_path` (default = current folder). You also have to point the train script to the VGGNet protos (see the options inside `train.lua`).

If you'd like to evaluate BLEU/METEOR/CIDEr scores during training in addition to validation cross entropy loss, use `-language_eval @abstr_number` option, but don't forget to download the @abstr_hyperlink into `coco-caption` directory.

**A few notes on training.** To give you an idea, with the default settings one epoch of MS COCO images is about @abstr_number iterations. @abstr_number epoch of training (with no finetuning - notice this is the default) takes about @abstr_number hour and results in validation loss ~ @abstr_number . @abstr_number and CIDEr score of ~ @abstr_number . @abstr_number . By iteration @abstr_number , @abstr_number CIDEr climbs up to about @abstr_number . @abstr_number (validation loss at about @abstr_number . @abstr_number ) and then will top out at a bit below @abstr_number . @abstr_number CIDEr. After that additional improvements are only possible by turning on CNN finetuning. I like to do the training in stages, where I first train with no finetuning, and then restart the train script with `-finetune_cnn_after @abstr_number` to start finetuning right away, and using `-start_from` flag to continue from the previous model checkpoint. You'll see your score rise up to about @abstr_number . @abstr_number CIDEr over ~ @abstr_number days or so (on MS COCO).

### I'd like to train on my own data

No problem, create a json file in the exact same form as before:

@abstr_code_section 

and invoke the `prepro.py` script to preprocess all the images and data into and hdf @abstr_number file and json file. Then invoke `train.lua` (see detailed options inside code).

### I'd like to distribute my GPU trained checkpoints for CPU

Use the script `convert_checkpoint_gpu_to_cpu.lua` to convert your GPU checkpoints to be usable on CPU. See inline documentation for why this separate script is needed. For example:

@abstr_code_section 

write the file `gpu_checkpoint.t @abstr_number _cpu.t @abstr_number`, which you can now run with `-gpuid - @abstr_number` in the eval script.

### License

BSD License.

### Acknowledgements

Parts of this code were written in collaboration with my labmate @abstr_hyperlink . 

I'm very grateful for @abstr_hyperlink 's support in providing GPUs that made this work possible.

I'm also very grateful to the maintainers of Torch for maintaining a wonderful deep learning library.
