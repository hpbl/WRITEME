# MoviePy

.. image:: https://badge.fury.io/py/moviepy.svg :target: PyPI_ :alt: MoviePy page on the Python Package Index .. image:: https://badges.gitter.im/movie-py/gitter.png :target: Gitter_ :alt: Discuss MoviePy on Gitter .. image:: https://travis-ci.org/Zulko/moviepy.svg?branch=master :target: https://travis-ci.org/Zulko/moviepy :alt: Build status on travis-ci .. image:: https://coveralls.io/repos/github/Zulko/moviepy/badge.svg?branch=master :target: https://coveralls.io/github/Zulko/moviepy?branch=master :alt: Code coverage from coveralls.io

MoviePy (full documentation_) is a Python library for video editing: cutting, concatenations, title insertions, video compositing (a.k.a. non-linear editing), video processing, and creation of custom effects. See the gallery_ for some examples of use.

MoviePy can read and write all the most common audio and video formats, including GIF, and runs on Windows/Mac/Linux, with Python @abstr_number . @abstr_number + and @abstr_number (or only Python @abstr_number . @abstr_number + from v. @abstr_number . @abstr_number ). Here it is in action in an IPython notebook:

.. image:: https://raw.githubusercontent.com/Zulko/moviepy/master/docs/demo_preview.jpeg :alt: [logo] :align: center

## Example

In this example we open a video file, select the subclip between t= @abstr_number s and t= @abstr_number s, add a title at the center of the screen, and write the result to a new file:

.. code:: python
    
    
    from moviepy.editor import *
    
    video = VideoFileClip("myHolidays.mp @abstr_number ").subclip( @abstr_number , @abstr_number )
    
    # Make the text. Many more options are available.
    txt_clip = ( TextClip("My Holidays  @abstr_number ",fontsize= @abstr_number ,color='white')
                 .set_position('center')
                 .set_duration( @abstr_number ) )
    
    result = CompositeVideoClip([video, txt_clip]) # Overlay text on video
    result.write_videofile("myHolidays_edited.webm",fps= @abstr_number ) # Many options...
    

## Installation

MoviePy depends on the Python modules Numpy_, imageio_, Decorator_, and tqdm_, which will be automatically installed during MoviePy's installation. The software FFMPEG should be automatically downloaded/installed (by imageio) during your first use of MoviePy (installation will take a few seconds). If you want to use a specific version of FFMPEG, follow the instructions in `config_defaults.py`. In case of trouble, provide feedback.

**Installation by hand:** download the sources, either from PyPI_ or, if you want the development version, from GitHub_, unzip everything into one folder, open a terminal and type:

.. code:: bash
    
    
    $ (sudo) python setup.py install
    

**Installation with pip:** if you have `pip` installed, just type this in a terminal:

.. code:: bash
    
    
    $ (sudo) pip install moviepy
    

If you have neither `setuptools` nor `ez_setup` installed, the command above will fail. In this case type this before installing:

.. code:: bash
    
    
    $ (sudo) pip install ez_setup
    

Optional but useful dependencies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can install `moviepy` with all dependencies via:

.. code:: bash
    
    
    $ (sudo) pip install moviepy[optional]
    

ImageMagick_ is not strictly required, but needed if you want to incorporate texts. It can also be used as a backend for GIFs, though you can also create GIFs with MoviePy without ImageMagick.

Once you have installed ImageMagick, it will be automatically detected by MoviePy, **except on Windows!** Windows users, before installing MoviePy by hand, need to edit `moviepy/config_defaults.py` to provide the path to the ImageMagick binary, which is called `convert`. It should look like this:

.. code:: python
    
    
    IMAGEMAGICK_BINARY = "C:\\Program Files\\ImageMagick_VERSION\\convert.exe"
    

PyGame_ is needed for video and sound previews (not relevant if you intend to work with MoviePy on a server but essential for advanced video editing by hand).

For advanced image processing, you will need one or several of the following packages:

  * The Python Imaging Library (PIL) or, even better, its branch Pillow_.
  * Scipy_ (for tracking, segmenting, etc.) can be used to resize video clips if PIL and OpenCV are not installed.
  * `Scikit Image`_ may be needed for some advanced image manipulation.
  * `OpenCV @abstr_number . @abstr_number . @abstr_number`_ or a more recent version (one that provides the package `cv @abstr_number`) may be needed for some advanced image manipulation.
  * `Matplotlib`_



Once you have installed it, ImageMagick will be automatically detected by MoviePy, (except for windows users and Ubuntu @abstr_number . @abstr_number LTS users).

For Windows users, before installing MoviePy by hand, go into the `moviepy/config_defaults.py` file and provide the path to the ImageMagick binary called `magick`. It should look like this:

.. code:: python
    
    
    IMAGEMAGICK_BINARY = "C:\\Program Files\\ImageMagick_VERSION\\magick.exe"
    

If you are using an older version of ImageMagick, keep in mind the name of the executable is not `magick.exe` but `convert.exe`. In that case, the IMAGEMAGICK_BINARY property should be `C:\\Program Files\\ImageMagick_VERSION\\convert.exe`

For Ubuntu @abstr_number . @abstr_number LTS users, after installing MoviePy on the terminal, IMAGEMAGICK will not be detected by moviepy. This bug can be fixed. Modify the file in this directory: /etc/ImageMagick- @abstr_number /policy.xml, comment out the statement .

PyGame_ is needed for video and sound previews (useless if you intend to work with MoviePy on a server but really essential for advanced video editing _by hand_ ).

For instance, using the method `clip.resize` requires that at least one of Scipy, PIL, Pillow or OpenCV is installed.

## Documentation

Running `build_docs` has additional dependencies that require installation.

.. code:: bash
    
    
    $ (sudo) pip install moviepy[docs]
    

The documentation can be generated and viewed via:

.. code:: bash
    
    
    $ python setup.py build_docs
    

You can pass additional arguments to the documentation build, such as clean build:

.. code:: bash
    
    
    $ python setup.py build_docs -E
    

More information is available from the `Sphinx`_ documentation.

## New in @abstr_number . @abstr_number . @abstr_number : Progress bars and messages with Proglog

Non-backwards-compatible changes were introduced in @abstr_number . @abstr_number . @abstr_number . @abstr_number to manage progress bars and messages using `Proglog <https://github.com/Edinburgh-Genome-Foundry/Proglog>`_, which enables to display nice progress bars in the console as well as in a Jupyter notebook or any user interface, like a website.

To display notebook friendly progress bars, first install IPyWidgets:

.. code::
    
    
    sudo pip install ipywidgets
    sudo jupyter nbextension enable --py --sys-prefix widgetsnbextension
    

Then at the beginning of your notebook enter:

.. code:: python
    
    
    import proglog
    proglog.notebook()
    

Have a look at the Proglog project page for more options.

## Running Tests

The testing suite can be executed via:

.. code:: bash
    
    
    $ python setup.py test
    

Running the test suite in this manner will install the testing dependencies. If you opt to run the test suite manually, you can install the dependencies via:

.. code:: bash
    
    
    $ (sudo) pip install moviepy[test]
    

## Contribute

MoviePy is open-source software originally written by Zulko_ and released under the MIT licence. The project is hosted on GitHub_, where everyone is welcome to contribute, ask for help or simply give feedback. Please read our `Contributing Guidelines`_ for more information about how to contribute!

You can also discuss the project on Reddit_ or Gitter_. These are preferred over GitHub issues for usage questions and examples.

We have a list of labels used in our `Label Wiki`_. The 'Pull Requests' labels are well defined, and all PRs should fall under exactly one of these. The 'Issues' labels are less precise, and may not be a complete list.

## Maintainers

  * Zulko_ (owner)

  * `@tburrows @abstr_number`_

  * `@earney`_
  * Kay `@kerstin`_
  * `@mbeacom`_



.. MoviePy links .. _gallery: http://zulko.github.io/moviepy/gallery.html .. _documentation: http://zulko.github.io/moviepy/ .. _`download MoviePy`: https://github.com/Zulko/moviepy .. _`Label Wiki`: https://github.com/Zulko/moviepy/wiki/Label-Wiki .. _Contributing Guidelines: https://github.com/Zulko/moviepy/blob/master/CONTRIBUTING.md

.. Websites, Platforms .. _Reddit: http://www.reddit.com/r/moviepy/ .. _PyPI: https://pypi.python.org/pypi/moviepy .. _GitHub: https://github.com/Zulko/moviepy .. _Gitter: https://gitter.im/movie-py/Lobby

.. Software, Tools, Libraries .. _Pillow: http://pillow.readthedocs.org/en/latest/ .. _Scipy: http://www.scipy.org/ .. _`OpenCV @abstr_number . @abstr_number . @abstr_number`: http://sourceforge.net/projects/opencvlibrary/files/ .. _Pygame: http://www.pygame.org/download.shtml .. _Numpy: http://www.scipy.org/install.html .. _imageio: http://imageio.github.io/ .. _`Scikit Image`: http://scikit-image.org/download.html .. _Decorator: https://pypi.python.org/pypi/decorator .. _tqdm: https://github.com/noamraph/tqdm .. _ffmpeg: http://www.ffmpeg.org/download.html .. _ImageMagick: http://www.imagemagick.org/script/index.php .. _`Matplotlib`: https://matplotlib.org/ .. _`Sphinx`: http://www.sphinx-doc.org/en/master/setuptools.html

.. People .. _Zulko: https://github.com/Zulko .. _`@tburrows @abstr_number`: https://github.com/tburrows @abstr_number .. _`@earney`: https://github.com/earney .. _`@kerstin`: https://github.com/kerstin .. _`@mbeacom`: https://github.com/mbeacom .. _`@overdrivr`: https://github.com/overdrivr
