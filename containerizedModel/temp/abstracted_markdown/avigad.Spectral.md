# Spectral Sequences

Formalization project of the CMU HoTT group towards formalizing the Serre spectral sequence.

#### Participants

Jeremy Avigad, Steve Awodey, Ulrik Buchholtz, Floris van Doorn, Clive Newstead, Egbert Rijke, Mike Shulman.

## Resources

  * @abstr_hyperlink at the HoTT blog.
  * @abstr_hyperlink at the n-category café.
  * The @abstr_hyperlink about Eilenberg-Mac Lane spaces.
  * We learned about the Serre spectral sequence from @abstr_hyperlink .
  * Lang's algebra (revised @abstr_number rd edition) contains a chapter on general homology theory, with a section on spectral sequences. Thus, we can use this book at least as an outline for the algebraic part of the project.
  * Mac Lane's Homology contains a lot of homological algebra and a chapter on spectral sequences, including exact couples.



## Things to do for Lean spectral sequences project

### Algebra To Do:

  * @abstr_hyperlink , @abstr_hyperlink ,
  * some basic theory: product, tensor, hom, projective,
  * categories of algebras, @abstr_hyperlink ,
  * exact sequences, short and long
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink and @abstr_hyperlink 
  * @abstr_hyperlink , probably just of Z-graded objects, and derived exact couples
  * spectral sequence of an exact couple
  * @abstr_hyperlink 



### Topology To Do:

  * fiber sequence 
    * already have the LES
    * need shift isomorphism
    * Hom'ing into a fiber sequence gives another fiber sequence.
  * cofiber sequences 
    * Hom'ing out gives a fiber sequence: if `A → B → coker f` cofiber sequences, then `X^A → X^B → X^(coker f)` is a fiber sequence.
  * @abstr_hyperlink and @abstr_hyperlink , suspension 
    * try indexing on arbitrary successor structure
    * think about equivariant spectra indexed by representations of `G`
  * @abstr_hyperlink 
    * adjoint to forgetful
    * as sequential colimit, prove induction principle (if useful)
    * connective spectrum: `is_conn n.- @abstr_number Eₙ`
  * @abstr_hyperlink , parametrized smash and hom between types and spectra
  * fiber and cofiber sequences of spectra, stability 
    * limits are levelwise
    * colimits need to be spectrified
  * long exact sequences from (co)fiber sequences of spectra 
    * indexed on ℤ, need to splice together LES's
  * Postnikov towers of spectra 
    * basic definition already there
    * fibers of Postnikov sequence unstably and stably
  * exact couple of a tower of spectra 
    * need to splice together LES's



### Already Done:

  * Most things in the HoTT Book up to Section @abstr_number . @abstr_number (see @abstr_hyperlink )
  * pointed types, maps, homotopies and equivalences
  * definition of algebraic structures such as groups, rings, fields
  * some algebra: quotient, product, free groups.
  * @abstr_hyperlink and EM-spectrum


