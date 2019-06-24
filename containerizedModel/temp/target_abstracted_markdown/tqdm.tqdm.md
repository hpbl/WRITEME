|Logo|

# tqdm

|PyPI-Versions| |PyPI-Status| |Conda-Forge-Status| |Docker| |Snapcraft|

|Build-Status| |Coverage-Status| |Branch-Coverage-Status| |Codacy-Grade| |Libraries-Rank| |PyPI-Downloads|

|DOI| |LICENCE| |OpenHub-Status| |binder-demo| |notebook-demo| |awesome-python|

`tqdm` means "progress" in Arabic ( _taqadum_ , تقدّم) and is an abbreviation for "I love you so much" in Spanish ( _te quiero demasiado_ ).

Instantly make your loops show a smart progress meter - just wrap any iterable with `tqdm(iterable)`, and you're done!

.. code:: python
    
    
    from tqdm import tqdm
    for i in tqdm(range( @abstr_number )):
        ...
    

`@abstr_number %|████████████████████████████ | @abstr_number / @abstr_number [ @abstr_number : @abstr_number < @abstr_number : @abstr_number , @abstr_number . @abstr_number it/s]`

`trange(N)` can be also used as a convenient shortcut for `tqdm(xrange(N))`.

|Screenshot| REPL: `ptpython <https://github.com/jonathanslenders/ptpython>`__

It can also be executed as a module with pipes:

.. code:: sh
    
    
    $ seq  @abstr_number  | tqdm --bytes | wc -l
     @abstr_number . @abstr_number MB [ @abstr_number : @abstr_number ,  @abstr_number MB/s]
     @abstr_number 
    $  @abstr_number z a -bd -r backup. @abstr_number z docs/ | grep Compressing | \
        tqdm --total $(find docs/ -type f | wc -l) --unit files >> backup.log
     @abstr_number %|███████████████████████████████▉|  @abstr_number / @abstr_number  [ @abstr_number : @abstr_number < @abstr_number : @abstr_number ,  @abstr_number . @abstr_number files/s]
    

Overhead is low -- about @abstr_number ns per iteration ( @abstr_number ns with `tqdm_gui`), and is unit tested against performance regression. By comparison, the well-established `ProgressBar <https://github.com/niltonvolpato/python-progressbar>`__ has an @abstr_number ns/iter overhead.

In addition to its low overhead, `tqdm` uses smart algorithms to predict the remaining time and to skip unnecessary iteration displays, which allows for a negligible overhead in most cases.

`tqdm` works on any platform (Linux, Windows, Mac, FreeBSD, NetBSD, Solaris/SunOS), in any console or in a GUI, and is also friendly with IPython/Jupyter notebooks.

`tqdm` does not require any dependencies (not even `curses`!), just Python and an environment supporting `carriage return \r` and `line feed \n` control characters.

* * *

.. contents:: Table of contents :backlinks: top :local:

## Installation

Latest PyPI stable release ~~~~~~~~~~~~~~~~~~~~~~~~~~

|PyPI-Status| |PyPI-Downloads| |Libraries-Dependents|

.. code:: sh
    
    
    pip install tqdm
    

Latest development release on GitHub ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

|GitHub-Status| |GitHub-Stars| |GitHub-Commits| |GitHub-Forks| |GitHub-Updated|

Pull and install in the current directory:

.. code:: sh
    
    
    pip install -e git+https://github.com/tqdm/tqdm.git@master#egg=tqdm
    

Latest Conda release ~~~~~~~~~~~~~~~~~~~~

|Conda-Forge-Status|

.. code:: sh
    
    
    conda install -c conda-forge tqdm
    

Latest Snapcraft release ~~~~~~~~~~~~~~~~~~~~~~~~

|Snapcraft|

.. code:: sh
    
    
    snap install tqdm
    

Latest Docker release ~~~~~~~~~~~~~~~~~~~~~

|Docker|

.. code:: sh
    
    
    docker pull tqdm/tqdm
    docker run -i --rm tqdm/tqdm --help
    

## Changelog

The list of all changes is available either on GitHub's Releases: |GitHub-Status|, on the `wiki <https://github.com/tqdm/tqdm/wiki/Releases>`__, on the `website <https://tqdm.github.io/releases/>`__, or on crawlers such as `allmychanges.com <https://allmychanges.com/p/python/tqdm/>`_.

## Usage

`tqdm` is very versatile and can be used in a number of ways. The three main ones are given below.

Iterable-based ~~~~~~~~~~~~~~

Wrap `tqdm()` around any iterable:

.. code:: python
    
    
    from tqdm import tqdm
    import time
    
    text = ""
    for char in tqdm(["a", "b", "c", "d"]):
        time.sleep( @abstr_number . @abstr_number )
        text = text + char
    

`trange(i)` is a special optimised instance of `tqdm(range(i))`:

.. code:: python
    
    
    for i in trange( @abstr_number ):
        time.sleep( @abstr_number . @abstr_number )
    

Instantiation outside of the loop allows for manual control over `tqdm()`:

.. code:: python
    
    
    pbar = tqdm(["a", "b", "c", "d"])
    for char in pbar:
        time.sleep( @abstr_number . @abstr_number )
        pbar.set_description("Processing %s" % char)
    

Manual ~~~~~~

Manual control on `tqdm()` updates by using a `with` statement:

.. code:: python
    
    
    with tqdm(total= @abstr_number ) as pbar:
        for i in range( @abstr_number ):
            time.sleep( @abstr_number . @abstr_number )
            pbar.update( @abstr_number )
    

If the optional variable `total` (or an iterable with `len()`) is provided, predictive stats are displayed.

`with` is also optional (you can just assign `tqdm()` to a variable, but in this case don't forget to `del` or `close()` at the end:

.. code:: python
    
    
    pbar = tqdm(total= @abstr_number )
    for i in range( @abstr_number ):
        time.sleep( @abstr_number . @abstr_number )
        pbar.update( @abstr_number )
    pbar.close()
    

Module ~~~~~~

Perhaps the most wonderful use of `tqdm` is in a script or on the command line. Simply inserting `tqdm` (or `python -m tqdm`) between pipes will pass through all `stdin` to `stdout` while printing progress to `stderr`.

The example below demonstrated counting the number of lines in all Python files in the current directory, with timing information included.

.. code:: sh
    
    
    $ time find . -name '*.py' -type f -exec cat \{} \; | wc -l
     @abstr_number 
    
    real     @abstr_number m @abstr_number . @abstr_number s
    user     @abstr_number m @abstr_number . @abstr_number s
    sys      @abstr_number m @abstr_number . @abstr_number s
    
    $ time find . -name '*.py' -type f -exec cat \{} \; | tqdm | wc -l
     @abstr_number it [ @abstr_number : @abstr_number ,  @abstr_number . @abstr_number it/s]
     @abstr_number 
    
    real     @abstr_number m @abstr_number . @abstr_number s
    user     @abstr_number m @abstr_number . @abstr_number s
    sys      @abstr_number m @abstr_number . @abstr_number s
    

Note that the usual arguments for `tqdm` can also be specified.

.. code:: sh
    
    
    $ find . -name '*.py' -type f -exec cat \{} \; |
        tqdm --unit loc --unit_scale --total  @abstr_number  >> /dev/null
     @abstr_number %|███████████████████████████████████|  @abstr_number K/ @abstr_number K [ @abstr_number : @abstr_number < @abstr_number : @abstr_number ,  @abstr_number Kloc/s]
    

Backing up a large directory?

.. code:: sh
    
    
    $  @abstr_number z a -bd -r backup. @abstr_number z docs/ | grep Compressing |
        tqdm --total $(find docs/ -type f | wc -l) --unit files >> backup.log
     @abstr_number %|███████████████████████████████▉|  @abstr_number / @abstr_number  [ @abstr_number : @abstr_number < @abstr_number : @abstr_number ,  @abstr_number . @abstr_number files/s]
    

## FAQ and Known Issues

|GitHub-Issues|

The most common issues relate to excessive output on multiple lines, instead of a neat one-line progress bar.

  * Consoles in general: require support for carriage return (`CR`, `\r`).
  * Nested progress bars: 
    * Consoles in general: require support for moving cursors up to the previous line. For example, `IDLE <https://github.com/tqdm/tqdm/issues/ @abstr_number #issuecomment- @abstr_number >`__, `ConEmu <https://github.com/tqdm/tqdm/issues/ @abstr_number >`__ and `PyCharm <https://github.com/tqdm/tqdm/issues/ @abstr_number >`__ (also `here <https://github.com/tqdm/tqdm/issues/ @abstr_number >`__, `here <https://github.com/tqdm/tqdm/issues/ @abstr_number >`__, and `here <https://github.com/tqdm/tqdm/issues/ @abstr_number #issuecomment- @abstr_number >`__) lack full support.
    * Windows: additionally may require the Python module `colorama` to ensure nested bars stay within their respective lines.
  * Unicode: 
    * Environments which report that they support unicode will have solid smooth progressbars. The fallback is an ``ascii`-only bar.
    * Windows consoles often only partially support unicode and thus `often require explicit ascii=True <https://github.com/tqdm/tqdm/issues/ @abstr_number #issuecomment- @abstr_number >`__ (also `here <https://github.com/tqdm/tqdm/issues/ @abstr_number >`__). This is due to either normal-width unicode characters being incorrectly displayed as "wide", or some unicode characters not rendering.
  * Wrapping enumerated iterables: use `enumerate(tqdm(...))` instead of `tqdm(enumerate(...))`. The same applies to `numpy.ndenumerate`. This is because enumerate functions tend to hide the length of iterables. `tqdm` does not.
  * Wrapping zipped iterables has similar issues due to internal optimisations. `tqdm(zip(a, b))` should be replaced with `zip(tqdm(a), b)` or even `zip(tqdm(a), tqdm(b))`.
  * `Hanging pipes in python @abstr_number <https://github.com/tqdm/tqdm/issues/ @abstr_number >`__: when using `tqdm` on the CLI, you may need to use python @abstr_number . @abstr_number + for correct buffering.



If you come across any other difficulties, browse and file |GitHub-Issues|.

## Documentation

|PyPI-Versions| |README-Hits| (Since @abstr_number May @abstr_number )

.. code:: python
    
    
    class tqdm():
      """
      Decorate an iterable object, returning an iterator which acts exactly
      like the original iterable, but prints a dynamically updating
      progressbar every time a value is requested.
      """
    
      def __init__(self, iterable=None, desc=None, total=None, leave=True,
                   file=None, ncols=None, mininterval= @abstr_number . @abstr_number ,
                   maxinterval= @abstr_number . @abstr_number , miniters=None, ascii=None, disable=False,
                   unit='it', unit_scale=False, dynamic_ncols=False,
                   smoothing= @abstr_number . @abstr_number , bar_format=None, initial= @abstr_number , position=None,
                   postfix=None, unit_divisor= @abstr_number ):
    

Parameters ~~~~~~~~~~

  * iterable : iterable, optional   
Iterable to decorate with a progressbar. Leave blank to manually manage the updates.
  * desc : str, optional   
Prefix for the progressbar.
  * total : int, optional   
The number of expected iterations. If unspecified, len(iterable) is used if possible. If float("inf") or as a last resort, only basic progress statistics are displayed (no ETA, no progressbar). If `gui` is True and this parameter needs subsequent updating, specify an initial arbitrary large positive integer, e.g. int( @abstr_number e @abstr_number ).
  * leave : bool, optional   
If [default: True], keeps all traces of the progressbar upon termination of iteration.
  * file : `io.TextIOWrapper` or `io.StringIO`, optional   
Specifies where to output the progress messages (default: sys.stderr). Uses `file.write(str)` and `file.flush()` methods. For encoding, see `write_bytes`.
  * ncols : int, optional   
The width of the entire output message. If specified, dynamically resizes the progressbar to stay within this bound. If unspecified, attempts to use environment width. The fallback is a meter width of @abstr_number and no limit for the counter and statistics. If @abstr_number , will not print any meter (only stats).
  * mininterval : float, optional   
Minimum progress display update interval [default: @abstr_number . @abstr_number ] seconds.
  * maxinterval : float, optional   
Maximum progress display update interval [default: @abstr_number ] seconds. Automatically adjusts `miniters` to correspond to `mininterval` after long display update lag. Only works if `dynamic_miniters` or monitor thread is enabled.
  * miniters : int, optional   
Minimum progress display update interval, in iterations. If @abstr_number and `dynamic_miniters`, will automatically adjust to equal `mininterval` (more CPU efficient, good for tight loops). If > @abstr_number , will skip display of specified number of iterations. Tweak this and `mininterval` to get very efficient loops. If your progress is erratic with both fast and slow iterations (network, skipping items, etc) you should set miniters= @abstr_number .
  * ascii : bool or str, optional   
If unspecified or False, use unicode (smooth blocks) to fill the meter. The fallback is to use ASCII characters " @abstr_number #".
  * disable : bool, optional   
Whether to disable the entire progressbar wrapper [default: False]. If set to None, disable on non-TTY.
  * unit : str, optional   
String that will be used to define the unit of each iteration [default: it].
  * unit_scale : bool or int or float, optional   
If @abstr_number or True, the number of iterations will be reduced/scaled automatically and a metric prefix following the International System of Units standard will be added (kilo, mega, etc.) [default: False]. If any other non-zero number, will scale `total` and `n`.
  * dynamic_ncols : bool, optional   
If set, constantly alters `ncols` to the environment (allowing for window resizes) [default: False].
  * smoothing : float, optional   
Exponential moving average smoothing factor for speed estimates (ignored in GUI mode). Ranges from @abstr_number (average speed) to @abstr_number (current/instantaneous speed) [default: @abstr_number . @abstr_number ].
  * bar_format : str, optional   
Specify a custom bar string formatting. May impact performance. [default: '{l_bar}{bar}{r_bar}'], where l_bar='{desc}: {percentage: @abstr_number . @abstr_number f}%|' and r_bar='| {n_fmt}/{total_fmt} [{elapsed}<{remaining}, ' '{rate_fmt}{postfix}]' Possible vars: l_bar, bar, r_bar, n, n_fmt, total, total_fmt, percentage, rate, rate_fmt, rate_noinv, rate_noinv_fmt, rate_inv, rate_inv_fmt, elapsed, elapsed_s, remaining, remaining_s, desc, postfix, unit. Note that a trailing ": " is automatically removed after {desc} if the latter is empty.
  * initial : int, optional   
The initial counter value. Useful when restarting a progress bar [default: @abstr_number ].
  * position : int, optional   
Specify the line offset to print this bar (starting from @abstr_number ) Automatic if unspecified. Useful to manage multiple bars at once (eg, from threads).
  * postfix : dict or `*`, optional   
Specify additional stats to display at the end of the bar. Calls `set_postfix(**postfix)` if possible (dict).
  * unit_divisor : float, optional   
[default: @abstr_number ], ignored unless `unit_scale` is True.
  * write_bytes : bool, optional   
If (default: None) and `file` is unspecified, bytes will be written in Python @abstr_number . If `True` will also write bytes. In all other cases will default to unicode.



Extra CLI Options ~~~~~~~~~~~~~~~~~

  * delim : chr, optional   
Delimiting character [default: 'n']. Use '\ @abstr_number ' for null. N.B.: on Windows systems, Python converts 'n' to '\rn'.
  * buf_size : int, optional   
String buffer size in bytes [default: @abstr_number ] used when `delim` is specified.
  * bytes : bool, optional   
If true, will count bytes, ignore `delim`, and default `unit_scale` to True, `unit_divisor` to @abstr_number , and `unit` to 'B'.
  * manpath : str, optional   
Directory in which to install tqdm man pages.
  * log : str, optional   
CRITICAL|FATAL|ERROR|WARN(ING)|[default: 'INFO']|DEBUG|NOTSET.



Returns ~~~~~~~

  * out : decorated iterator. 



.. code:: python
    
    
    class tqdm():
      def update(self, n= @abstr_number ):
          """
          Manually update the progress bar, useful for streams
          such as reading files.
          E.g.:
          >>> t = tqdm(total=filesize) # Initialise
          >>> for current_buffer in stream:
          ...    ...
          ...    t.update(len(current_buffer))
          >>> t.close()
          The last line is highly recommended, but possibly not necessary if
          ``t.update()`` will be called in such a way that ``filesize`` will be
          exactly reached and printed.
    
          Parameters
          ----------
          n  : int, optional
              Increment to add to the internal counter of iterations
              [default:  @abstr_number ].
          """
    
      def close(self):
          """Cleanup and (if leave=False) close the progressbar."""
    
      def clear(self, nomove=False):
          """Clear current bar display."""
    
      def refresh(self):
          """Force refresh the display of this bar."""
    
      def unpause(self):
          """Restart tqdm timer from last print time."""
    
      def reset(self, total=None):
          """
          Resets to  @abstr_number  iterations for repeated use.
    
          Consider combining with ``leave=True``.
    
          Parameters
          ----------
          total  : int, optional. Total to use for the new bar.
          """
    
      def set_description(self, desc=None, refresh=True):
          """
          Set/modify description of the progress bar.
    
          Parameters
          ----------
          desc  : str, optional
          refresh  : bool, optional
              Forces refresh [default: True].
          """
    
      def set_postfix(self, ordered_dict=None, refresh=True, **kwargs):
          """
          Set/modify postfix (additional stats)
          with automatic formatting based on datatype.
    
          Parameters
          ----------
          ordered_dict  : dict or OrderedDict, optional
          refresh  : bool, optional
              Forces refresh [default: True].
          kwargs  : dict, optional
          """
    
      @classmethod
      def write(cls, s, file=sys.stdout, end="\n"):
          """Print a message via tqdm (without overlap with bars)."""
    
      @property
      def format_dict(self):
          """Public API for read-only member access."""
    
      def display(self, msg=None, pos=None):
          """
          Use ``self.sp`` to display ``msg`` in the specified ``pos``.
    
          Consider overloading this function when inheriting to use e.g.:
          ``self.some_frontend(**self.format_dict)`` instead of ``self.sp``.
    
          Parameters
          ----------
          msg  : str, optional. What to display (default: ``repr(self)``).
          pos  : int, optional. Position to ``moveto``
            (default: ``abs(self.pos)``).
          """
    
    def trange(*args, **kwargs):
        """
        A shortcut for tqdm(xrange(*args), **kwargs).
        On Python @abstr_number + range is used instead of xrange.
        """
    
    class tqdm_gui(tqdm):
        """Experimental GUI version"""
    
    def tgrange(*args, **kwargs):
        """Experimental GUI version of trange"""
    
    class tqdm_notebook(tqdm):
        """Experimental IPython/Jupyter Notebook widget"""
    
    def tnrange(*args, **kwargs):
        """Experimental IPython/Jupyter Notebook widget version of trange"""
    

## Examples and Advanced Usage

  * See the `examples <https://github.com/tqdm/tqdm/tree/master/examples>`__ folder;
  * import the module and run `help()`;
  * consult the `wiki <https://github.com/tqdm/tqdm/wiki>`__; 
    * this has an `excellent article <https://github.com/tqdm/tqdm/wiki/How-to-make-a-great-Progress-Bar>`__ on how to make a **great** progressbar;
  * run the |notebook-demo| or |binder-demo|, or
  * check out the `slides from PyData London <https://tqdm.github.io/PyData @abstr_number /slides.html>`__.



Description and additional stats ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Custom information can be displayed and updated dynamically on `tqdm` bars with the `desc` and `postfix` arguments:

.. code:: python
    
    
    from tqdm import trange
    from random import random, randint
    from time import sleep
    
    with trange( @abstr_number ) as t:
        for i in t:
            # Description will be displayed on the left
            t.set_description('GEN %i' % i)
            # Postfix will be displayed on the right,
            # formatted automatically based on argument's datatype
            t.set_postfix(loss=random(), gen=randint( @abstr_number , @abstr_number ), str='h',
                          lst=[ @abstr_number ,  @abstr_number ])
            sleep( @abstr_number . @abstr_number )
    
    with tqdm(total= @abstr_number , bar_format="{postfix[ @abstr_number ]} {postfix[ @abstr_number ][value]:> @abstr_number . @abstr_number g}",
              postfix=["Batch", dict(value= @abstr_number )]) as t:
        for i in range( @abstr_number ):
            sleep( @abstr_number . @abstr_number )
            t.postfix[ @abstr_number ]["value"] = i /  @abstr_number 
            t.update()
    

Points to remember when using `{postfix[...]}` in the `bar_format` string:

  * `postfix` also needs to be passed as an initial argument in a compatible format, and
  * `postfix` will be auto-converted to a string if it is a `dict`-like object. To prevent this behaviour, insert an extra item into the dictionary where the key is not a string.



Additional `bar_format` parameters may also be defined by overriding `format_dict`, and the bar itself may be modified using `ascii`:

.. code:: python
    
    
    from tqdm import tqdm
    class TqdmExtraFormat(tqdm):
        """Provides a `total_time` format parameter"""
        @property
        def format_dict(self):
            d = super(TqdmExtraFormat, self).format_dict
            total_time = d["elapsed"] * (d["total"] or  @abstr_number ) / max(d["n"],  @abstr_number )
            d.update(total_time=self.format_interval(total_time) + " in total")
            return d
    
    for i in TqdmExtraFormat(
          range( @abstr_number ), ascii=" .oO @abstr_number ",
          bar_format="{total_time}: {percentage:. @abstr_number f}%|{bar}{r_bar}"):
        pass
    

.. code::
    
    
     @abstr_number : @abstr_number  in total:  @abstr_number %| @abstr_number o     |  @abstr_number / @abstr_number  [ @abstr_number : @abstr_number < @abstr_number : @abstr_number ,   @abstr_number . @abstr_number it/s]
    

Nested progress bars ~~~~~~~~~~~~~~~~~~~~

`tqdm` supports nested progress bars. Here's an example:

.. code:: python
    
    
    from tqdm import trange
    from time import sleep
    
    for i in trange( @abstr_number , desc=' @abstr_number st loop'):
        for j in trange( @abstr_number , desc=' @abstr_number nd loop'):
            for k in trange( @abstr_number , desc=' @abstr_number nd loop', leave=False):
                sleep( @abstr_number . @abstr_number )
    

On Windows `colorama <https://github.com/tartley/colorama>`__ will be used if available to keep nested bars on their respective lines.

For manual control over positioning (e.g. for multi-threaded use), you may specify `position=n` where `n= @abstr_number` for the outermost bar, `n= @abstr_number` for the next, and so on:

.. code:: python
    
    
    from time import sleep
    from tqdm import trange, tqdm
    from multiprocessing import Pool, freeze_support, RLock
    
    L = list(range( @abstr_number ))
    
    def progresser(n):
        interval =  @abstr_number . @abstr_number  / (n +  @abstr_number )
        total =  @abstr_number 
        text = "#{}, est. {:< @abstr_number . @abstr_number }s".format(n, interval * total)
        for i in trange(total, desc=text, position=n):
            sleep(interval)
    
    if __name__ == '__main__':
        freeze_support()  # for Windows support
        p = Pool(len(L),
                 # again, for Windows support
                 initializer=tqdm.set_lock, initargs=(RLock(),))
        p.map(progresser, L)
        print("\n" * (len(L) -  @abstr_number ))
    

Hooks and callbacks ~~~~~~~~~~~~~~~~~~~

`tqdm` can easily support callbacks/hooks and manual updates. Here's an example with `urllib`:

**urllib.urlretrieve documentation**
    
    
    | [...]
    | If present, the hook function will be called once
    | on establishment of the network connection and once after each block read
    | thereafter. The hook will be passed three arguments; a count of blocks
    | transferred so far, a block size in bytes, and the total size of the file.
    | [...]
    

.. code:: python
    
    
    import urllib, os
    from tqdm import tqdm
    
    class TqdmUpTo(tqdm):
        """Provides `update_to(n)` which uses `tqdm.update(delta_n)`."""
        def update_to(self, b= @abstr_number , bsize= @abstr_number , tsize=None):
            """
            b  : int, optional
                Number of blocks transferred so far [default:  @abstr_number ].
            bsize  : int, optional
                Size of each block (in tqdm units) [default:  @abstr_number ].
            tsize  : int, optional
                Total size (in tqdm units). If [default: None] remains unchanged.
            """
            if tsize is not None:
                self.total = tsize
            self.update(b * bsize - self.n)  # will also set self.n = b * bsize
    
    eg_link = "https://caspersci.uk.to/matryoshka.zip"
    with TqdmUpTo(unit='B', unit_scale=True, miniters= @abstr_number ,
                  desc=eg_link.split('/')[- @abstr_number ]) as t:  # all optional kwargs
        urllib.urlretrieve(eg_link, filename=os.devnull,
                           reporthook=t.update_to, data=None)
    

Inspired by `twine# @abstr_number <https://github.com/pypa/twine/pull/ @abstr_number >`__. Functional alternative in `examples/tqdm_wget.py <https://github.com/tqdm/tqdm/blob/master/examples/tqdm_wget.py>`__.

It is recommend to use `miniters= @abstr_number` whenever there is potentially large differences in iteration speed (e.g. downloading a file over a patchy connection).

Pandas Integration ~~~~~~~~~~~~~~~~~~

Due to popular demand we've added support for `pandas` \-- here's an example for `DataFrame.progress_apply` and `DataFrameGroupBy.progress_apply`:

.. code:: python
    
    
    import pandas as pd
    import numpy as np
    from tqdm import tqdm
    
    df = pd.DataFrame(np.random.randint( @abstr_number ,  @abstr_number , ( @abstr_number ,  @abstr_number )))
    
    # Register `pandas.progress_apply` and `pandas.Series.map_apply` with `tqdm`
    # (can use `tqdm_gui`, `tqdm_notebook`, optional kwargs, etc.)
    tqdm.pandas(desc="my bar!")
    
    # Now you can use `progress_apply` instead of `apply`
    # and `progress_map` instead of `map`
    df.progress_apply(lambda x: x** @abstr_number )
    # can also groupby:
    # df.groupby( @abstr_number ).progress_apply(lambda x: x** @abstr_number )
    

In case you're interested in how this works (and how to modify it for your own callbacks), see the `examples <https://github.com/tqdm/tqdm/tree/master/examples>`__ folder or import the module and run `help()`.

IPython/Jupyter Integration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

IPython/Jupyter is supported via the `tqdm_notebook` submodule:

.. code:: python
    
    
    from tqdm import tnrange, tqdm_notebook
    from time import sleep
    
    for i in tnrange( @abstr_number , desc=' @abstr_number st loop'):
        for j in tqdm_notebook(range( @abstr_number ), desc=' @abstr_number nd loop'):
            sleep( @abstr_number . @abstr_number )
    

In addition to `tqdm` features, the submodule provides a native Jupyter widget (compatible with IPython v @abstr_number -v @abstr_number and Jupyter), fully working nested bars and colour hints (blue: normal, green: completed, red: error/interrupt, light blue: no ETA); as demonstrated below.

|Screenshot-Jupyter @abstr_number | |Screenshot-Jupyter @abstr_number | |Screenshot-Jupyter @abstr_number |

It is also possible to let `tqdm` automatically choose between console or notebook versions by using the `autonotebook` submodule:

.. code:: python
    
    
    from tqdm.autonotebook import tqdm
    tqdm.pandas()
    

Note that this will issue a `TqdmExperimentalWarning` if run in a notebook since it is not meant to be possible to distinguish between `jupyter notebook` and `jupyter console`. Use `auto` instead of `autonotebook` to suppress this warning.

Custom Integration ~~~~~~~~~~~~~~~~~~

`tqdm` may be inherited from to create custom callbacks (as with the `TqdmUpTo` example `above <#hooks-and-callbacks>`__) or for custom frontends (e.g. GUIs such as notebook or plotting packages). In the latter case:

@abstr_number . `def __init__()` to call `super().__init__(..., gui=True)` to disable terminal `status_printer` creation. @abstr_number . Redefine: `close()`, `clear()`, `display()`.

Consider overloading `display()` to use e.g. `self.frontend(**self.format_dict)` instead of `self.sp(repr(self))`.

Dynamic Monitor/Meter ~~~~~~~~~~~~~~~~~~~~~

You can use a `tqdm` as a meter which is not monotonically increasing. This could be because `n` decreases (e.g. a CPU usage monitor) or `total` changes.

One example would be recursively searching for files. The `total` is the number of objects found so far, while `n` is the number of those objects which are files (rather than folders):

.. code:: python
    
    
    from tqdm import tqdm
    import os.path
    
    def find_files_recursively(path, show_progress=True):
        files = []
        # total= @abstr_number  assumes `path` is a file
        t = tqdm(total= @abstr_number , unit="file", disable=not show_progress)
        if not os.path.exists(path):
            raise IOError("Cannot find:" + path)
    
        def append_found_file(f):
            files.append(f)
            t.update()
    
        def list_found_dir(path):
            """returns os.listdir(path) assuming os.path.isdir(path)"""
            listing = os.listdir(path)
            # subtract  @abstr_number  since a "file" we found was actually this directory
            t.total += len(listing) -  @abstr_number 
            # fancy way to give info without forcing a refresh
            t.set_postfix(dir=path[- @abstr_number :], refresh=False)
            t.update( @abstr_number )  # may trigger a refresh
            return listing
    
        def recursively_search(path):
            if os.path.isdir(path):
                for f in list_found_dir(path):
                    recursively_search(os.path.join(path, f))
            else:
                append_found_file(path)
    
        recursively_search(path)
        t.set_postfix(dir=path)
        t.close()
        return files
    

Using `update( @abstr_number )` is a handy way to let `tqdm` decide when to trigger a display refresh to avoid console spamming.

Writing messages ~~~~~~~~~~~~~~~~

This is a work in progress (see `# @abstr_number <https://github.com/tqdm/tqdm/issues/ @abstr_number >`__).

Since `tqdm` uses a simple printing mechanism to display progress bars, you should not write any message in the terminal using `print()` while a progressbar is open.

To write messages in the terminal without any collision with `tqdm` bar display, a `.write()` method is provided:

.. code:: python
    
    
    from tqdm import tqdm, trange
    from time import sleep
    
    bar = trange( @abstr_number )
    for i in bar:
        # Print using tqdm class method .write()
        sleep( @abstr_number . @abstr_number )
        if not (i %  @abstr_number ):
            tqdm.write("Done task %i" % i)
        # Can also use bar.write()
    

By default, this will print to standard output `sys.stdout`. but you can specify any file-like object using the `file` argument. For example, this can be used to redirect the messages writing to a log file or class.

Redirecting writing ~~~~~~~~~~~~~~~~~~~

If using a library that can print messages to the console, editing the library by replacing `print()` with `tqdm.write()` may not be desirable. In that case, redirecting `sys.stdout` to `tqdm.write()` is an option.

To redirect `sys.stdout`, create a file-like class that will write any input string to `tqdm.write()`, and supply the arguments `file=sys.stdout, dynamic_ncols=True`.

A reusable canonical example is given below:

.. code:: python
    
    
    from time import sleep
    import contextlib
    import sys
    from tqdm import tqdm
    
    class DummyTqdmFile(object):
        """Dummy file-like that will write to tqdm"""
        file = None
        def __init__(self, file):
            self.file = file
    
        def write(self, x):
            # Avoid print() second call (useless \n)
            if len(x.rstrip()) >  @abstr_number :
                tqdm.write(x, file=self.file)
    
        def flush(self):
            return getattr(self.file, "flush", lambda: None)()
    
    @contextlib.contextmanager
    def std_out_err_redirect_tqdm():
        orig_out_err = sys.stdout, sys.stderr
        try:
            sys.stdout, sys.stderr = map(DummyTqdmFile, orig_out_err)
            yield orig_out_err[ @abstr_number ]
        # Relay exceptions
        except Exception as exc:
            raise exc
        # Always restore sys.stdout/err if necessary
        finally:
            sys.stdout, sys.stderr = orig_out_err
    
    def some_fun(i):
        print("Fee, fi, fo,".split()[i])
    
    # Redirect stdout to tqdm.write() (don't forget the `as save_stdout`)
    with std_out_err_redirect_tqdm() as orig_stdout:
        # tqdm needs the original stdout
        # and dynamic_ncols=True to autodetect console width
        for i in tqdm(range( @abstr_number ), file=orig_stdout, dynamic_ncols=True):
            sleep(. @abstr_number )
            some_fun(i)
    
    # After the `with`, printing is restored
    print("Done!")
    

Monitoring thread, intervals and miniters ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`tqdm` implements a few tricks to to increase efficiency and reduce overhead.

  * Avoid unnecessary frequent bar refreshing: `mininterval` defines how long to wait between each refresh. `tqdm` always gets updated in the background, but it will diplay only every `mininterval`.
  * Reduce number of calls to check system clock/time.
  * `mininterval` is more intuitive to configure than `miniters`. A clever adjustment system `dynamic_miniters` will automatically adjust `miniters` to the amount of iterations that fit into time `mininterval`. Essentially, `tqdm` will check if it's time to print without actually checking time. This behaviour can be still be bypassed by manually setting `miniters`.



However, consider a case with a combination of fast and slow iterations. After a few fast iterations, `dynamic_miniters` will set `miniters` to a large number. When iteration rate subsequently slows, `miniters` will remain large and thus reduce display update frequency. To address this:

  * `maxinterval` defines the maximum time between display refreshes. A concurrent monitoring thread checks for overdue updates and forces one where necessary.



The monitoring thread should not have a noticeable overhead, and guarantees updates at least every @abstr_number seconds by default. This value can be directly changed by setting the `monitor_interval` of any `tqdm` instance (i.e. `t = tqdm.tqdm(...); t.monitor_interval = @abstr_number`). The monitor thread may be disabled application-wide by setting `tqdm.tqdm.monitor_interval = @abstr_number` before instantiatiation of any `tqdm` bar.

## Contributions

|GitHub-Commits| |GitHub-Issues| |GitHub-PRs| |OpenHub-Status| |GitHub-Contributions|

All source code is hosted on `GitHub <https://github.com/tqdm/tqdm>`__. Contributions are welcome.

See the `CONTRIBUTING <https://raw.githubusercontent.com/tqdm/tqdm/master/CONTRIBUTING.md>`__ file for more information.

Developers who have made significant contributions, ranked by _LoC_ (surviving lines of code, `git fame -wMC --excl '\.(png|gif|enc)$' <https://github.com/casperdcl/git-fame>`__), are:

==================== ================================================== ==== ================================ Name ID LoC Notes ==================== ================================================== ==== ================================ Casper da Costa-Luis `casperdcl <https://github.com/casperdcl>`__ ~ @abstr_number / @abstr_number primary maintainer |Gift-Casper| Stephen Larroque `lrq @abstr_number <https://github.com/lrq @abstr_number >`__ ~ @abstr_number % team member Kyle Altendorf `altendky <https://github.com/altendky>`__ ~ @abstr_number % Guangshuo Chen `chengs <https://github.com/chengs>`__ ~ @abstr_number % Matthew Stevens `mjstevens @abstr_number <https://github.com/mjstevens @abstr_number >`__ ~ @abstr_number % Noam Yorav-Raphael `noamraph <https://github.com/noamraph>`__ ~ @abstr_number % original author Hadrien Mary `hadim <https://github.com/hadim>`__ ~ @abstr_number % team member Mikhail Korobov `kmike <https://github.com/kmike>`__ ~ @abstr_number % team member ==================== ================================================== ==== ================================

Ports to Other Languages ~~~~~~~~~~~~~~~~~~~~~~~~

A list is available on `this wiki page <https://github.com/tqdm/tqdm/wiki/tqdm-ports>`__.

## LICENCE

Open Source (OSI approved): |LICENCE|

Citation information: |DOI| (publication), |DOI-code| (code)

|README-Hits| (Since @abstr_number May @abstr_number )

.. |Logo| image:: https://raw.githubusercontent.com/tqdm/tqdm/master/images/logo.gif .. |Screenshot| image:: https://raw.githubusercontent.com/tqdm/tqdm/master/images/tqdm.gif .. |Build-Status| image:: https://img.shields.io/travis/tqdm/tqdm/master.svg?logo=travis :target: https://travis-ci.org/tqdm/tqdm .. |Coverage-Status| image:: https://coveralls.io/repos/tqdm/tqdm/badge.svg?branch=master :target: https://coveralls.io/github/tqdm/tqdm .. |Branch-Coverage-Status| image:: https://codecov.io/gh/tqdm/tqdm/branch/master/graph/badge.svg :target: https://codecov.io/gh/tqdm/tqdm .. |Codacy-Grade| image:: https://api.codacy.com/project/badge/Grade/ @abstr_number f @abstr_number f @abstr_number c @abstr_number f @abstr_number cdcf @abstr_number :target: https://www.codacy.com/app/tqdm/tqdm/dashboard .. |GitHub-Status| image:: https://img.shields.io/github/tag/tqdm/tqdm.svg?maxAge= @abstr_number &logo=github&logoColor=white :target: https://github.com/tqdm/tqdm/releases .. |GitHub-Forks| image:: https://img.shields.io/github/forks/tqdm/tqdm.svg?logo=github&logoColor=white :target: https://github.com/tqdm/tqdm/network .. |GitHub-Stars| image:: https://img.shields.io/github/stars/tqdm/tqdm.svg?logo=github&logoColor=white :target: https://github.com/tqdm/tqdm/stargazers .. |GitHub-Commits| image:: https://img.shields.io/github/commit-activity/y/tqdm/tqdm.svg?logo=git&logoColor=white :target: https://github.com/tqdm/tqdm/graphs/commit-activity .. |GitHub-Issues| image:: https://img.shields.io/github/issues-closed/tqdm/tqdm.svg?logo=github&logoColor=white :target: https://github.com/tqdm/tqdm/issues?q= .. |GitHub-PRs| image:: https://img.shields.io/github/issues-pr-closed/tqdm/tqdm.svg?logo=github&logoColor=white :target: https://github.com/tqdm/tqdm/pulls .. |GitHub-Contributions| image:: https://img.shields.io/github/contributors/tqdm/tqdm.svg?logo=github&logoColor=white :target: https://github.com/tqdm/tqdm/graphs/contributors .. |GitHub-Updated| image:: https://img.shields.io/github/last-commit/tqdm/tqdm/master.svg?logo=github&logoColor=white&label=pushed :target: https://github.com/tqdm/tqdm/pulse .. |Gift-Casper| image:: https://img.shields.io/badge/dynamic/json.svg?color=ff @abstr_number b @abstr_number &label=gifts% @abstr_number received&prefix=%C @abstr_number %A @abstr_number &query=% @abstr_number ..sum&url=https% @abstr_number A% @abstr_number F% @abstr_number Fcaspersci.uk.to% @abstr_number Fgifts.json :target: https://caspersci.uk.to/donate .. |PyPI-Status| image:: https://img.shields.io/pypi/v/tqdm.svg :target: https://pypi.org/project/tqdm .. |PyPI-Downloads| image:: https://img.shields.io/pypi/dm/tqdm.svg?label=pypi% @abstr_number downloads&logo=python&logoColor=white :target: https://pypi.org/project/tqdm .. |PyPI-Versions| image:: https://img.shields.io/pypi/pyversions/tqdm.svg?logo=python&logoColor=white :target: https://pypi.org/project/tqdm .. |Conda-Forge-Status| image:: https://img.shields.io/conda/v/conda-forge/tqdm.svg?label=conda-forge&logo=conda-forge :target: https://anaconda.org/conda-forge/tqdm .. |Snapcraft| image:: https://img.shields.io/badge/snap-install- @abstr_number BEA @abstr_number .svg?logo=snapcraft :target: https://snapcraft.io/tqdm .. |Docker| image:: https://img.shields.io/badge/docker-pull-blue.svg?logo=docker :target: https://hub.docker.com/r/tqdm/tqdm .. |Libraries-Rank| image:: https://img.shields.io/librariesio/sourcerank/pypi/tqdm.svg?logo=koding&logoColor=white :target: https://libraries.io/pypi/tqdm .. |Libraries-Dependents| image:: https://img.shields.io/librariesio/dependent-repos/pypi/tqdm.svg?logo=koding&logoColor=white :target: https://github.com/tqdm/tqdm/network/dependents .. |OpenHub-Status| image:: https://www.openhub.net/p/tqdm/widgets/project_thin_badge?format=gif :target: https://www.openhub.net/p/tqdm?ref=Thin+badge .. |awesome-python| image:: https://awesome.re/mentioned-badge.svg :target: https://github.com/vinta/awesome-python) .. |LICENCE| image:: https://img.shields.io/pypi/l/tqdm.svg :target: https://raw.githubusercontent.com/tqdm/tqdm/master/LICENCE .. |DOI| image:: https://img.shields.io/badge/DOI- @abstr_number . @abstr_number /joss. @abstr_number -green.svg :target: https://doi.org/ @abstr_number . @abstr_number /joss. @abstr_number .. |DOI-code| image:: https://img.shields.io/badge/DOI- @abstr_number . @abstr_number /zenodo. @abstr_number -blue.svg :target: https://doi.org/ @abstr_number . @abstr_number /zenodo. @abstr_number .. |notebook-demo| image:: https://img.shields.io/badge/launch-notebook-orange.svg?logo=jupyter :target: https://notebooks.ai/demo/gh/tqdm/tqdm .. |binder-demo| image:: https://mybinder.org/badge_logo.svg :target: https://mybinder.org/v @abstr_number /gh/tqdm/tqdm/master?filepath=DEMO.ipynb .. |Screenshot-Jupyter @abstr_number | image:: https://raw.githubusercontent.com/tqdm/tqdm/master/images/tqdm-jupyter- @abstr_number .gif .. |Screenshot-Jupyter @abstr_number | image:: https://raw.githubusercontent.com/tqdm/tqdm/master/images/tqdm-jupyter- @abstr_number .gif .. |Screenshot-Jupyter @abstr_number | image:: https://raw.githubusercontent.com/tqdm/tqdm/master/images/tqdm-jupyter- @abstr_number .gif .. |README-Hits| image:: https://caspersci.uk.to/cgi-bin/hits.cgi?q=tqdm&style=social&r=https://github.com/tqdm/tqdm&l=https://caspersci.uk.to/images/tqdm.png&f=https://raw.githubusercontent.com/tqdm/tqdm/master/images/logo.gif :target: https://caspersci.uk.to/cgi-bin/hits.cgi?q=tqdm&a=plot&r=https://github.com/tqdm/tqdm&l=https://caspersci.uk.to/images/tqdm.png&f=https://raw.githubusercontent.com/tqdm/tqdm/master/images/logo.gif&style=social
