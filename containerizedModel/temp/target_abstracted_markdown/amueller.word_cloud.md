@abstr_hyperlink @abstr_hyperlink 

| | Linux | macOS | Windows | |------|----------------------------------------------|----------------------------------------------|----------------------------------------------| | PyPI | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

# word_cloud

A little word cloud generator in Python. Read more about it on the @abstr_hyperlink or the @abstr_hyperlink .

The code is tested against Python @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number and @abstr_number . @abstr_number .

## Installation

If you are using pip:
    
    
    pip install wordcloud
    

If you are using conda, you can install from the `conda-forge` channel:
    
    
    conda install -c conda-forge wordcloud
    

#### Installation notes

wordcloud depends on `numpy` and `pillow`.

To save the wordcloud into a file, `matplotlib` can also be installed. See examples below.

If there are no wheels available for your version of python, installing the package requires having a C compiler set up. Before installing a compiler, report an issue describing the version of python and operating system being used.

## Examples

Check out examples/simple.py for a short intro. A sample output is:

@abstr_image 

Or run examples/masked.py to see more options. A sample output is:

@abstr_image 

Getting fancy with some colors: @abstr_image 

## Command-line usage

The `wordcloud_cli` tool can be used to generate word clouds directly from the command-line:
    
    
    $ wordcloud_cli --text mytext.txt --imagefile wordcloud.png
    

If you're dealing with PDF files, then `pdftotext`, included by default with many Linux distribution, comes in handy:
    
    
    $ pdftotext mydocument.pdf - | wordcloud_cli --imagefile wordcloud.png
    

In the previous example, the `-` argument orders `pdftotext` to write the resulting text to stdout, which is then piped to the stdin of `wordcloud_cli.py`.

Use `wordcloud_cli --help` so see all available options.

## Licensing

The wordcloud library is MIT licenced, but contains DroidSansMono.ttf, a true type font by Google, that is apache licensed. The font is by no means integral, and any other font can be used by setting the `font_path` variable when creating a `WordCloud` object.
