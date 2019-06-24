# gensim – Topic Modelling in Python

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Gensim is a Python library for _topic modelling_ , _document indexing_ and _similarity retrieval_ with large corpora. Target audience is the _natural language processing_ (NLP) and _information retrieval_ (IR) community.

## Features

  * All algorithms are **memory-independent** w.r.t. the corpus size (can process input larger than RAM, streamed, out-of-core),
  * **Intuitive interfaces**
    * easy to plug in your own input corpus/datastream (trivial streaming API)
    * easy to extend with other Vector Space algorithms (trivial transformation API)
  * Efficient multicore implementations of popular algorithms, such as online **Latent Semantic Analysis (LSA/LSI/SVD)** , **Latent Dirichlet Allocation (LDA)** , **Random Projections (RP)** , **Hierarchical Dirichlet Process (HDP)** or **word @abstr_number vec deep learning**.
  * **Distributed computing** : can run _Latent Semantic Analysis_ and _Latent Dirichlet Allocation_ on a cluster of computers.
  * Extensive [documentation and Jupyter Notebook tutorials].



If this feature list left you scratching your head, you can first read more about the [Vector Space Model] and [unsupervised document analysis] on Wikipedia.

## Support

Please raise potential bugs on @abstr_hyperlink . See @abstr_hyperlink prior to raising an issue.

If you have an open-ended or a research question:

  * [Mailing List] is the best option
  * [Gitter chat room] is also available



## Installation

This software depends on [NumPy and Scipy], two Python packages for scientific computing. You must have them installed prior to installing gensim.

It is also recommended you install a fast BLAS library before installing NumPy. This is optional, but using an optimized BLAS such as [ATLAS] or [OpenBLAS] is known to improve performance by as much as an order of magnitude. On OS X, NumPy picks up the BLAS that comes with it automatically, so you don’t need to do anything special.

The simple way to install gensim is:
    
    
    pip install -U gensim
    

Or, if you have instead downloaded and unzipped the [source tar.gz] package, you’d run:
    
    
    python setup.py test
    python setup.py install
    

For alternative modes of installation (without root privileges, development installation, optional install features), see the [documentation].

This version has been tested under Python @abstr_number . @abstr_number , @abstr_number . @abstr_number and @abstr_number . @abstr_number . Gensim’s github repo is hooked against [Travis CI for automated testing] on every commit push and pull request. Support for Python @abstr_number . @abstr_number , @abstr_number . @abstr_number and @abstr_number . @abstr_number was dropped in gensim @abstr_number . @abstr_number . @abstr_number . Install gensim @abstr_number . @abstr_number . @abstr_number if you _must_ use Python @abstr_number . @abstr_number , @abstr_number . @abstr_number or @abstr_number . @abstr_number . Support for Python @abstr_number . @abstr_number was dropped in gensim @abstr_number . @abstr_number . @abstr_number ; install gensim @abstr_number . @abstr_number . @abstr_number if you _must_ use Python @abstr_number . @abstr_number ). 

## How come gensim is so fast and memory efficient? Isn’t it pure Python, and isn’t Python slow and greedy?

Many scientific algorithms can be expressed in terms of large matrix operations (see the BLAS note above). Gensim taps into these low-level BLAS libraries, by means of its dependency on NumPy. So while gensim-the-top-level-code is pure Python, it actually executes highly optimized Fortran/C under the hood, including multithreading (if your BLAS is so configured).

Memory-wise, gensim makes heavy use of Python’s built-in generators and iterators for streamed data processing. Memory efficiency was one of gensim’s [design goals], and is a central feature of gensim, rather than something bolted on as an afterthought.

## Documentation

  * [QuickStart]
  * [Tutorials]
  * [Tutorial Videos]
  * [Official API Documentation]



* * *

## Adopters

| Company | Logo | Industry | Use of Gensim | |---------|------|----------|---------------|   
| @abstr_hyperlink | @abstr_image | ML & NLP consulting | Creators of Gensim – this is us! | | @abstr_hyperlink | @abstr_image | Retail | Document similarity. | | @abstr_hyperlink | @abstr_image | Health | Processing grants and publications with word @abstr_number vec. | | @abstr_hyperlink | @abstr_image | Security | Large-scale fraud detection. | | @abstr_hyperlink | @abstr_image | Legal | Similarities in legal documents. | | @abstr_hyperlink | @abstr_image | Media | Recommendation engine. | | @abstr_hyperlink | @abstr_image | HR | Candidate matching in high-touch recruiting. | | @abstr_hyperlink | @abstr_image | HR | Provide non-obvious related job suggestions. | | @abstr_hyperlink | @abstr_image | Media | Post interesting and relevant content to Pinterest. | | @abstr_hyperlink | @abstr_image | Media | Gensim's LDA module lies at the very core of the analysis we perform on each uploaded publication to figure out what it's all about. | | @abstr_hyperlink | @abstr_image | Content Marketing | Gensim word @abstr_number vec used for entity disambiguation in Search Engine Optimisation. | | @abstr_hyperlink | @abstr_image | Media | Document similarity analysis on media articles. | | @abstr_hyperlink | @abstr_image | Hardware | Document comprehension and association with word @abstr_number vec. | | @abstr_hyperlink | @abstr_image | Web hosting | An ensemble search engine which uses different embeddings models and similarities, including word @abstr_number vec, WMD, and LDA. | | @abstr_hyperlink | @abstr_image | Finance | Topic modeling for customer complaints exploration. |

* * *

## Citing gensim

When [citing gensim in academic papers and theses], please use this BibTeX entry:
    
    
    @inproceedings{rehurek_lrec,
          title = {{Software Framework for Topic Modelling with Large Corpora}},
          author = {Radim {\v R}eh{\r u}{\v r}ek and Petr Sojka},
          booktitle = {{Proceedings of the LREC  @abstr_number  Workshop on New
               Challenges for NLP Frameworks}},
          pages = { @abstr_number -- @abstr_number },
          year =  @abstr_number ,
          month = May,
          day =  @abstr_number ,
          publisher = {ELRA},
          address = {Valletta, Malta},
          note={\url{http://is.muni.cz/publication/ @abstr_number /en}},
          language={English}
    }
    
