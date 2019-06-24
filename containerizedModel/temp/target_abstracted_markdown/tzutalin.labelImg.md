# LabelImg

.. image:: https://img.shields.io/pypi/v/labelimg.svg :target: https://pypi.python.org/pypi/labelimg

.. image:: https://img.shields.io/travis/tzutalin/labelImg.svg :target: https://travis-ci.org/tzutalin/labelImg

.. image:: /resources/icons/app.png :width: @abstr_number px :align: center

LabelImg is a graphical image annotation tool.

It is written in Python and uses Qt for its graphical interface.

Annotations are saved as XML files in PASCAL VOC format, the format used by `ImageNet <http://www.image-net.org/>`__. Besides, it also supports YOLO format

.. image:: https://raw.githubusercontent.com/tzutalin/labelImg/master/demo/demo @abstr_number .jpg :alt: Demo Image

.. image:: https://raw.githubusercontent.com/tzutalin/labelImg/master/demo/demo.jpg :alt: Demo Image

`Watch a demo video <https://youtu.be/p @abstr_number nR @abstr_number YsCY_U>`__

## Installation

Build from source ~~~~~~~~~~~~~~~~~

Linux/Ubuntu/Mac requires at least `Python @abstr_number . @abstr_number <https://www.python.org/getit/>`__ and has been tested with `PyQt @abstr_number . @abstr_number <https://www.riverbankcomputing.com/software/pyqt/intro>`__. However, `Python @abstr_number or above <https://www.python.org/getit/>`__ and `PyQt @abstr_number <https://pypi.org/project/PyQt @abstr_number />`__ are strongly recommended.

Ubuntu Linux ^^^^^^^^^^^^ Python @abstr_number + Qt @abstr_number 

.. code:: shell
    
    
    sudo apt-get install pyqt @abstr_number -dev-tools
    sudo pip install lxml
    make qt @abstr_number py @abstr_number 
    python labelImg.py
    python labelImg.py [IMAGE_PATH] [PRE-DEFINED CLASS FILE]
    

Python @abstr_number + Qt @abstr_number (Recommended)

.. code:: shell
    
    
    sudo apt-get install pyqt @abstr_number -dev-tools
    sudo pip @abstr_number  install -r requirements/requirements-linux-python @abstr_number .txt
    make qt @abstr_number py @abstr_number 
    python @abstr_number  labelImg.py
    python @abstr_number  labelImg.py [IMAGE_PATH] [PRE-DEFINED CLASS FILE]
    

macOS ^^^^^ Python @abstr_number + Qt @abstr_number 

.. code:: shell
    
    
    brew install qt qt @abstr_number 
    brew install libxml @abstr_number 
    make qt @abstr_number py @abstr_number 
    python labelImg.py
    python labelImg.py [IMAGE_PATH] [PRE-DEFINED CLASS FILE]
    

Python @abstr_number + Qt @abstr_number (Recommended)

.. code:: shell
    
    
    brew install qt  # Install qt- @abstr_number .x.x by Homebrew
    brew install libxml @abstr_number 
    
    or using pip
    
    pip @abstr_number  install pyqt @abstr_number  lxml # Install qt and lxml by pip
    
    make qt @abstr_number py @abstr_number 
    python @abstr_number  labelImg.py
    python @abstr_number  labelImg.py [IMAGE_PATH] [PRE-DEFINED CLASS FILE]
    

Python @abstr_number Virtualenv (Recommended)

Virtualenv can avoid a lot of the QT / Python version issues

.. code:: shell
    
    
    brew install python @abstr_number 
    pip @abstr_number  install pipenv
    pipenv --three # or pipenv install pyqt @abstr_number  lxml
    pipenv run pip install pyqt @abstr_number  lxml
    pipenv run make qt @abstr_number py @abstr_number 
    python @abstr_number  labelImg.py
    [Optional] rm -rf build dist; python setup.py py @abstr_number app -A;mv "dist/labelImg.app" /Applications
    

Note: The Last command gives you a nice .app file with a new SVG Icon in your /Applications folder. You can consider using the script: build-tools/build-for-macos.sh

Windows ^^^^^^^

Install `Python <https://www.python.org/downloads/windows/>`__, `PyQt @abstr_number <https://www.riverbankcomputing.com/software/pyqt/download @abstr_number >`__ and `install lxml <http://lxml.de/installation.html>`__.

Open cmd and go to the `labelImg <#labelimg>`__ directory

.. code:: shell
    
    
    pyrcc @abstr_number  -o line/resources.py resources.qrc
    For pyqt @abstr_number , pyrcc @abstr_number  -o libs/resources.py resources qrc
    
    python labelImg.py
    python labelImg.py [IMAGE_PATH] [PRE-DEFINED CLASS FILE]
    

Windows + Anaconda ^^^^^^^^^^^^^^^^^^

Download and install `Anaconda <https://www.anaconda.com/download/#download>`__ (Python @abstr_number +)

Open the Anaconda Prompt and go to the `labelImg <#labelimg>`__ directory

.. code:: shell
    
    
    conda install pyqt= @abstr_number 
    pyrcc @abstr_number  -o libs/resources.py resources.qrc
    python labelImg.py
    python labelImg.py [IMAGE_PATH] [PRE-DEFINED CLASS FILE]
    

Get from PyPI but only python @abstr_number . @abstr_number or above ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ .. code:: shell
    
    
    pip @abstr_number  install labelImg
    labelImg
    labelImg [IMAGE_PATH] [PRE-DEFINED CLASS FILE]
    

Use Docker ~~~~~~~~~~~~~~~~~ .. code:: shell
    
    
    docker run -it \
    --user $(id -u) \
    -e DISPLAY=unix$DISPLAY \
    --workdir=$(pwd) \
    --volume="/home/$USER:/home/$USER" \
    --volume="/etc/group:/etc/group:ro" \
    --volume="/etc/passwd:/etc/passwd:ro" \
    --volume="/etc/shadow:/etc/shadow:ro" \
    --volume="/etc/sudoers.d:/etc/sudoers.d:ro" \
    -v /tmp/.X @abstr_number -unix:/tmp/.X @abstr_number -unix \
    tzutalin/py @abstr_number qt @abstr_number 
    
    make qt @abstr_number py @abstr_number ;./labelImg.py
    

You can pull the image which has all of the installed and required dependencies. `Watch a demo video <https://youtu.be/nw @abstr_number GexJzbCI>`__

## Usage

Steps (PascalVOC) ~~~~~~~~~~~~~~~~~

@abstr_number . Build and launch using the instructions above. @abstr_number . Click 'Change default saved annotation folder' in Menu/File @abstr_number . Click 'Open Dir' @abstr_number . Click 'Create RectBox' @abstr_number . Click and release left mouse to select a region to annotate the rect box @abstr_number . You can use right mouse to drag the rect box to copy or move it

The annotation will be saved to the folder you specify.

You can refer to the below hotkeys to speed up your workflow.

Steps (YOLO) ~~~~~~~~~~~~

@abstr_number . In `data/predefined_classes.txt` define the list of classes that will be used for your training.

@abstr_number . Build and launch using the instructions above.

@abstr_number . Right below "Save" button in the toolbar, click "PascalVOC" button to switch to YOLO format.

@abstr_number . You may use Open/OpenDIR to process single or multiple images. When finished with a single image, click save.

A txt file of YOLO format will be saved in the same folder as your image with same name. A file named "classes.txt" is saved to that folder too. "classes.txt" defines the list of class names that your YOLO label refers to.

Note:

  * Your label list shall not change in the middle of processing a list of images. When you save an image, classes.txt will also get updated, while previous annotations will not be updated.

  * You shouldn't use "default class" function when saving to YOLO format, it will not be referred.

  * When saving as YOLO format, "difficult" flag is discarded.




Create pre-defined classes ~~~~~~~~~~~~~~~~~~~~~~~~~~

You can edit the `data/predefined\_classes.txt <https://github.com/tzutalin/labelImg/blob/master/data/predefined_classes.txt>`__ to load pre-defined classes

Hotkeys ~~~~~~~

+------------+--------------------------------------------+ | Ctrl + u | Load all of the images from a directory | +------------+--------------------------------------------+ | Ctrl + r | Change the default annotation target dir | +------------+--------------------------------------------+ | Ctrl + s | Save | +------------+--------------------------------------------+ | Ctrl + d | Copy the current label and rect box | +------------+--------------------------------------------+ | Space | Flag the current image as verified | +------------+--------------------------------------------+ | w | Create a rect box | +------------+--------------------------------------------+ | d | Next image | +------------+--------------------------------------------+ | a | Previous image | +------------+--------------------------------------------+ | del | Delete the selected rect box | +------------+--------------------------------------------+ | Ctrl++ | Zoom in | +------------+--------------------------------------------+ | Ctrl-- | Zoom out | +------------+--------------------------------------------+ | ↑→↓← | Keyboard arrows to move selected rect box | +------------+--------------------------------------------+

**Verify Image:**

When pressing space, the user can flag the image as verified, a green background will appear. This is used when creating a dataset automatically, the user can then through all the pictures and flag them instead of annotate them.

**Difficult:**

The difficult field is set to @abstr_number indicates that the object has been annotated as "difficult", for example, an object which is clearly visible but difficult to recognize without substantial use of context. According to your deep neural network implementation, you can include or exclude difficult objects during training.

How to contribute ~~~~~~~~~~~~~~~~~

Send a pull request

License ~~~~~~~ `Free software: MIT license <https://github.com/tzutalin/labelImg/blob/master/LICENSE>`_

Citation: Tzutalin. LabelImg. Git code ( @abstr_number ). https://github.com/tzutalin/labelImg

Related ~~~~~~~

@abstr_number . `ImageNet Utils <https://github.com/tzutalin/ImageNet_Utils>`__ to download image, create a label text for machine learning, etc @abstr_number . `Use Docker to run labelImg <https://hub.docker.com/r/tzutalin/py @abstr_number qt @abstr_number >`__ @abstr_number . `Generating the PASCAL VOC TFRecord files <https://github.com/tensorflow/models/blob/ @abstr_number f @abstr_number fe @abstr_number bb @abstr_number e @abstr_number ad @abstr_number e @abstr_number c @abstr_number a @abstr_number a @abstr_number d/research/object_detection/g @abstr_number doc/preparing_inputs.md#generating-the-pascal-voc-tfrecord-files>`__ @abstr_number . `App Icon based on Icon by Nick Roach (GPL) <https://www.elegantthemes.com/>`__ @abstr_number . `Setup python development in vscode <https://tzutalin.blogspot.com/ @abstr_number / @abstr_number /set-up-visual-studio-code-for-python-in.html>`__
