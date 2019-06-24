# Pattern

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Pattern is a web mining module for Python. It has tools for:

  * Data Mining: web services (Google, Twitter, Wikipedia), web crawler, HTML DOM parser
  * Natural Language Processing: part-of-speech taggers, n-gram search, sentiment analysis, WordNet
  * Machine Learning: vector space model, clustering, classification (KNN, SVM, Perceptron)
  * Network Analysis: graph centrality and visualization.



It is well documented, thoroughly tested with @abstr_number + unit tests and comes bundled with @abstr_number + examples. The source code is licensed under BSD and available from @abstr_hyperlink .

@abstr_image 

## Example

This example trains a classifier on adjectives mined from Twitter using Python @abstr_number . First, tweets that contain hashtag #win or #fail are collected. For example: _"$ @abstr_number tip off a sweet little old lady today #win"_. The word part-of-speech tags are then parsed, keeping only adjectives. Each tweet is transformed to a vector, a dictionary of adjective → count items, labeled `WIN` or `FAIL`. The classifier uses the vectors to learn which other tweets look more like `WIN` or more like `FAIL`.

@abstr_code_section 

## Installation

Pattern supports Python @abstr_number . @abstr_number and Python @abstr_number . @abstr_number . To install Pattern so that it is available in all your scripts, unzip the download and from the command line do: @abstr_code_section 

If you have pip, you can automatically download and install from the @abstr_hyperlink : @abstr_code_section 

If none of the above works, you can make Python aware of the module in three ways: \- Put the pattern folder in the same folder as your script. \- Put the pattern folder in the standard location for modules so it is available to all scripts: * `c:\python @abstr_number \Lib\site-packages\` (Windows), * `/Library/Python/ @abstr_number . @abstr_number /site-packages/` (Mac OS X), * `/usr/lib/python @abstr_number . @abstr_number /site-packages/` (Unix). \- Add the location of the module to `sys.path` in your script, before importing it:

@abstr_code_section 

## Documentation

For documentation and examples see the @abstr_hyperlink . If you are a developer, go check out the @abstr_hyperlink .

## Version

@abstr_number . @abstr_number 

## License

**BSD** , see `LICENSE.txt` for further details.

## Reference

De Smedt, T., Daelemans, W. ( @abstr_number ). Pattern for Python. *Journal of Machine Learning Research, @abstr_number *, @abstr_number – @abstr_number .

## Contribute

The source code is hosted on GitHub and contributions or donations are welcomed. Please have look at the @abstr_hyperlink . If you use Pattern in your work, please cite our reference paper.

## Bundled dependencies

Pattern is bundled with the following data sets, algorithms and Python packages:

  * **Brill tagger** , Eric Brill
  * **Brill tagger for Dutch** , Jeroen Geertzen
  * **Brill tagger for German** , Gerold Schneider & Martin Volk
  * **Brill tagger for Spanish** , trained on Wikicorpus (Samuel Reese & Gemma Boleda et al.)
  * **Brill tagger for French** , trained on Lefff (Benoît Sagot & Lionel Clément et al.)
  * **Brill tagger for Italian** , mined from Wiktionary
  * **English pluralization** , Damian Conway
  * **Spanish verb inflection** , Fred Jehle
  * **French verb inflection** , Bob Salita
  * **Graph JavaScript framework** , Aslak Hellesoy & Dave Hoover
  * **LIBSVM** , Chih-Chung Chang & Chih-Jen Lin
  * **LIBLINEAR** , Rong-En Fan et al.
  * **NetworkX centrality** , Aric Hagberg, Dan Schult & Pieter Swart
  * **spelling corrector** , Peter Norvig



## Acknowledgements

**Authors:**

  * Tom De Smedt (tom@organisms.be)
  * Walter Daelemans (walter.daelemans@ua.ac.be)



**Contributors (chronological):**

  * Frederik De Bleser
  * Jason Wiener
  * Daniel Friesen
  * Jeroen Geertzen
  * Thomas Crombez
  * Ken Williams
  * Peteris Erins
  * Rajesh Nair
  * F. De Smedt
  * Radim Řehůřek
  * Tom Loredo
  * John DeBovis
  * Thomas Sileo
  * Gerold Schneider
  * Martin Volk
  * Samuel Joseph
  * Shubhanshu Mishra
  * Robert Elwell
  * Fred Jehle
  * Antoine Mazières + fabelier.org
  * Rémi de Zoeten + closealert.nl
  * Kenneth Koch
  * Jens Grivolla
  * Fabio Marfia
  * Steven Loria
  * Colin Molter + tevizz.com
  * Peter Bull
  * Maurizio Sambati
  * Dan Fu
  * Salvatore Di Dio
  * Vincent Van Asch
  * Frederik Elwert


