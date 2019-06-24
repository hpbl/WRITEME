**Notice:** This repository is not operated or maintained by /u/deepfakes. Please read the explanation below for details.

# deepfakes_faceswap

FaceSwap is a tool that utilizes deep learning to recognize and swap faces in pictures and videos. @abstr_image 

@abstr_hyperlink   
Jennifer Lawrence/Steve Buscemi FaceSwap using the Villain model 

Make sure you check out INSTALL.md before getting started.

  * deepfakes_faceswap
  * Manifesto 
    * FaceSwap has ethical uses.
  * How To setup and run the project
  * Overview 
    * Extract
    * Train
    * Convert
    * GUI
  * General notes:
  * Help I need support! 
    * Discord Server
    * FaceSwap-Playground
  * Donate 
    * @torzdf
    * @andenixa
    * @kvrooman
  * How to contribute 
    * For people interested in the generative models
    * For devs
    * For non-dev advanced users
    * For end-users
    * For haters
  * About github.com/deepfakes 
    * What is this repo?
    * Why this repo?
    * Why is it named 'deepfakes' if it is not /u/deepfakes?
    * What if /u/deepfakes feels bad about that?
  * About machine learning 
    * How does a computer know how to recognize/shape faces? How does machine learning work? What is a neural network?



# Manifesto

## FaceSwap has ethical uses.

When faceswapping was first developed and published, the technology was groundbreaking, it was a huge step in AI development. It was also completely ignored outside of academia because the code was confusing and fragmentary. It required a thorough understanding of complicated AI techniques and took a lot of effort to figure it out. Until one individual brought it together into a single, cohesive collection. It ran, it worked, and as is so often the way with new technology emerging on the internet, it was immediately used to create inappropriate content. Despite the inappropriate uses the software was given originally, it was the first AI code that anyone could download, run and learn by experimentation without having a Ph.D. in math, computer theory, psychology, and more. Before "deepfakes" these techniques were like black magic, only practiced by those who could understand all of the inner workings as described in esoteric and endlessly complicated books and papers.

"Deepfakes" changed all that and anyone could participate in AI development. To us, developers, the release of this code opened up a fantastic learning opportunity. It allowed us to build on ideas developed by others, collaborate with a variety of skilled coders, experiment with AI whilst learning new skills and ultimately contribute towards an emerging technology which will only see more mainstream use as it progresses.

Are there some out there doing horrible things with similar software? Yes. And because of this, the developers have been following strict ethical standards. Many of us don't even use it to create videos, we just tinker with the code to see what it does. Sadly, the media concentrates only on the unethical uses of this software. That is, unfortunately, the nature of how it was first exposed to the public, but it is not representative of why it was created, how we use it now, or what we see in its future. Like any technology, it can be used for good or it can be abused. It is our intention to develop FaceSwap in a way that its potential for abuse is minimized whilst maximizing its potential as a tool for learning, experimenting and, yes, for legitimate faceswapping.

We are not trying to denigrate celebrities or to demean anyone. We are programmers, we are engineers, we are Hollywood VFX artists, we are activists, we are hobbyists, we are human beings. To this end, we feel that it's time to come out with a standard statement of what this software is and isn't as far as us developers are concerned.

  * FaceSwap is not for creating inappropriate content.
  * FaceSwap is not for changing faces without consent or with the intent of hiding its use.
  * FaceSwap is not for any illicit, unethical, or questionable purposes.
  * FaceSwap exists to experiment and discover AI techniques, for social or political commentary, for movies, and for any number of ethical and reasonable uses.



We are very troubled by the fact that FaceSwap can be used for unethical and disreputable things. However, we support the development of tools and techniques that can be used ethically as well as provide education and experience in AI for anyone who wants to learn it hands-on. We will take a zero tolerance approach to anyone using this software for any unethical purposes and will actively discourage any such uses.

# How To setup and run the project

FaceSwap is a Python program that will run on multiple Operating Systems including Windows, Linux, and MacOS.

See INSTALL.md for full installation instructions. You will need a modern GPU with CUDA support for best performance.

# Overview

The project has multiple entry points. You will have to: \- Gather photos (or use the one provided in the training data provided below) \- **Extract** faces from your raw photos \- **Train** a model on your photos (or use the one provided in the training data provided below) \- **Convert** your sources with the model

Check out USAGE.md for more detailed instructions.

## Extract

From your setup folder, run `python faceswap.py extract`. This will take photos from `src` folder and extract faces into `extract` folder.

## Train

From your setup folder, run `python faceswap.py train`. This will take photos from two folders containing pictures of both faces and train a model that will be saved inside the `models` folder.

## Convert

From your setup folder, run `python faceswap.py convert`. This will take photos from `original` folder and apply new faces into `modified` folder.

## GUI

Alternatively, you can run the GUI by running `python faceswap.py gui`

# General notes:

  * All of the scripts mentioned have `-h`/`--help` options with arguments that they will accept. You're smart, you can figure out how this works, right?!



NB: there is a conversion tool for video. This can be accessed by running `python tools.py effmpeg -h`. Alternatively, you can use @abstr_hyperlink to convert video into photos, process images, and convert images back to the video.

**Some tips:**

Reusing existing models will train much faster than starting from nothing. If there is not enough training data, start with someone who looks similar, then switch the data.

# Help I need support!

## Discord Server

Your best bet is to join the @abstr_hyperlink where there are plenty of users willing to help. Please note that, like this repo, this is a SFW Server!

## FaceSwap-Playground

Alternatively, you can post questions in the @abstr_hyperlink . Please do not post general support questions in this repo.

# Donate

The developers work tirelessly to improve and develop FaceSwap. Many hours have been put in to provide the software as it is today, but this is an extremely time-consuming process with no financial reward. If you enjoy using the software, please consider donating to the devs, so they can spend more time implementing improvements.

## @torzdf

There is very little FaceSwap code that hasn't been touched by torzdf. He is responsible for implementing the GUI, FAN aligner, MTCNN detector and porting the Villain, DFL-H @abstr_number and DFaker models to FaceSwap, as well as significantly improving many areas of the code.

**Bitcoin:** @abstr_number a @abstr_number r @abstr_number tyZpt @abstr_number LyZcNk @abstr_number FALTxC @abstr_number ZHta @abstr_number yq

**Ethereum:** @abstr_number x @abstr_number CBbff @abstr_number fA @abstr_number C @abstr_number de @abstr_number B @abstr_number A @abstr_number b @abstr_number A @abstr_number d @abstr_number bd @abstr_number f @abstr_number 

**Paypal:** @abstr_hyperlink 

## @andenixa

Creator of the Unbalanced and OHR models, as well as expanding various capabilities within the training process. Andenixa is currently working on new models and will take requests for donations.

**Paypal:** @abstr_hyperlink 

## @kvrooman

Responsible for consolidating the converters, adding a lot of code to fix model stability issues, and helping significantly towards making the training process more modular, kvrooman continues to be a very active contributor.

**Ethereum:** @abstr_number x @abstr_number CBbff @abstr_number fA @abstr_number C @abstr_number de @abstr_number B @abstr_number A @abstr_number b @abstr_number A @abstr_number d @abstr_number bd @abstr_number f @abstr_number 

# How to contribute

## For people interested in the generative models

  * Go to the 'faceswap-model' to discuss/suggest/commit alternatives to the current algorithm.



## For devs

  * Read this README entirely
  * Fork the repo
  * Download the data with the link provided above
  * Play with it
  * Check issues with the 'dev' tag
  * For devs more interested in computer vision and openCV, look at issues with the 'opencv' tag. Also feel free to add your own alternatives/improvements



## For non-dev advanced users

  * Read this README entirely
  * Clone the repo
  * Download the data with the link provided above
  * Play with it
  * Check issues with the 'advuser' tag
  * Also go to the 'faceswap-playground' repo and help others.



## For end-users

  * Get the code here and play with it if you can
  * You can also go to the 'faceswap-playground' repo and help or get help from others.
  * Be patient. This is a relatively new technology for developers as well. Much effort is already being put into making this program easy to use for the average user. It just takes time!
  * **Notice** Any issue related to running the code has to be open in the 'faceswap-playground' project!



## For haters

Sorry, no time for that.

# About github.com/deepfakes

## What is this repo?

It is a community repository for active users.

## Why this repo?

The joshua-wu repo seems not active. Simple bugs like missing _http://_ in front of urls have not been solved since days.

## Why is it named 'deepfakes' if it is not /u/deepfakes?

@abstr_number . Because a typosquat would have happened sooner or later as project grows @abstr_number . Because we wanted to recognize the original author @abstr_number . Because it will better federate contributors and users

## What if /u/deepfakes feels bad about that?

This is a friendly typosquat, and it is fully dedicated to the project. If /u/deepfakes wants to take over this repo/user and drive the project, he is welcomed to do so (Raise an issue, and he will be contacted on Reddit). Please do not send /u/deepfakes messages for help with the code you find here.

# About machine learning

## How does a computer know how to recognize/shape faces? How does machine learning work? What is a neural network?

It's complicated. Here's a good video that makes the process understandable: @abstr_hyperlink 

Here's a slightly more in depth video that tries to explain the basic functioning of a neural network: @abstr_hyperlink 

tl;dr: training data + trial and error
