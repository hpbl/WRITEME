# WaveFunctionCollapse

This program generates bitmaps that are locally similar to the input bitmap.

@abstr_image 

@abstr_image 

Local similarity means that * (C @abstr_number ) Each NxN pattern of pixels in the output should occur at least once in the input. * (Weak C @abstr_number ) Distribution of NxN patterns in the input should be similar to the distribution of NxN patterns over a sufficiently large number of outputs. In other words, probability to meet a particular pattern in the output should be close to the density of such patterns in the input. In the examples a typical value of N is @abstr_number . 

@abstr_image 

WFC initializes output bitmap in a completely unobserved state, where each pixel value is in superposition of colors of the input bitmap (so if the input was black & white then the unobserved states are shown in different shades of grey). The coefficients in these superpositions are real numbers, not complex numbers, so it doesn't do the actual quantum mechanics, but it was inspired by QM. Then the program goes into the observation-propagation cycle: * On each observation step an NxN region is chosen among the unobserved which has the lowest Shannon entropy. This region's state then collapses into a definite state according to its coefficients and the distribution of NxN patterns in the input. * On each propagation step new information gained from the collapse on the previous step propagates through the output. On each step the overall entropy decreases and in the end we have a completely observed state, the wave function has collapsed. It may happen that during propagation all the coefficients for a certain pixel become zero. That means that the algorithm has run into a contradiction and can not continue. The problem of determining whether a certain bitmap allows other nontrivial bitmaps satisfying condition (C @abstr_number ) is NP-hard, so it's impossible to create a fast solution that always finishes. In practice, however, the algorithm runs into contradictions surprisingly rarely. Wave Function Collapse algorithm has been implemented in [C++](https://github.com/math-fehr/fast-wfc), [Python](https://github.com/ikarth/wfc_python), [Kotlin](https://github.com/j-roskopf/WFC), [Rust](https://github.com/sdleffler/collapse), [Julia](https://github.com/roberthoenig/WaveFunctionCollapse.jl), [Go](https://github.com/shawnridgeway/wfc), [Haxe](https://github.com/Mitim- @abstr_number /WFC-Gen), [JavaScript](https://github.com/kchapelier/wavefunctioncollapse) and adapted to [Unity](https://selfsame.itch.io/unitywfc). You can download official executables from [itch.io](https://exutumno.itch.io/wavefunctioncollapse) or [run it in the browser](http://www.kchapelier.com/wfc-example/overlapping-model.html). WFC generates levels in [Bad North](https://www.badnorth.com/), [Caves of Qud](https://store.steampowered.com/app/ @abstr_number /Caves_of_Qud/), [several](https://arcadia-clojure.itch.io/proc-skater- @abstr_number ) [smaller](https://arcadia-clojure.itch.io/swapland) [games](https://marian @abstr_number .itch.io/wfc) and many prototypes. It led to [new](https://adamsmith.as/papers/wfc_is_constraint_solving_in_the_wild.pdf) [research](https://hal.inria.fr/hal- @abstr_number v @abstr_number /document). For [more](https://twitter.com/OskSta/status/ @abstr_number ) [related](https://twitter.com/dwtw/status/ @abstr_number ) [work](https://github.com/mewo @abstr_number /oisin), [explanations](https://trasevol.dog/ @abstr_number / @abstr_number / @abstr_number /di @abstr_number /), [interactive demos](http://oskarstalberg.com/game/wave/wave.html), [guides](https://www.dropbox.com/s/zeiat @abstr_number w @abstr_number zre @abstr_number ro @abstr_number /Knots% @abstr_number breakdown.png?dl= @abstr_number ), [tutorials](http://www.procjam.com/tutorials/wfc/) and [examples](https://twitter.com/ExUtumno/status/ @abstr_number ) see the [ports, forks and spinoffs section](https://github.com/mxgmn/WaveFunctionCollapse#notable-ports-forks-and-spinoffs). Watch a video demonstration of WFC algorithm on YouTube: [https://youtu.be/DOQTr @abstr_number Xmlz @abstr_number ](https://youtu.be/DOQTr @abstr_number Xmlz @abstr_number ) ## Algorithm @abstr_number . Read the input bitmap and count NxN patterns. @abstr_number . (optional) Augment pattern data with rotations and reflections. @abstr_number . Create an array with the dimensions of the output (called "wave" in the source). Each element of this array represents a state of an NxN region in the output. A state of an NxN region is a superpostion of NxN patterns of the input with boolean coefficients (so a state of a pixel in the output is a superposition of input colors with real coefficients). False coefficient means that the corresponding pattern is forbidden, true coefficient means that the corresponding pattern is not yet forbidden. @abstr_number . Initialize the wave in the completely unobserved state, i.e. with all the boolean coefficients being true. @abstr_number . Repeat the following steps: @abstr_number . Observation: @abstr_number . Find a wave element with the minimal nonzero entropy. If there is no such elements (if all elements have zero or undefined entropy) then break the cycle ( @abstr_number ) and go to step ( @abstr_number ). @abstr_number . Collapse this element into a definite state according to its coefficients and the distribution of NxN patterns in the input. @abstr_number . Propagation: propagate information gained on the previous observation step. @abstr_number . By now all the wave elements are either in a completely observed state (all the coefficients except one being zero) or in the contradictive state (all the coefficients being zero). In the first case return the output. In the second case finish the work without returning anything. ## Tilemap generation The simplest nontrivial case of the algorithm is when NxN= @abstr_number x @abstr_number (well, NxM). If we simplify it even further by storing not the probabilities of pairs of colors but the probabilities of colors themselves, we get what we call a "simple tiled model". The propagation phase in this model is just adjacency constraint propagation. It's convenient to initialize the simple tiled model with a list of tiles and their adjacency data (adjacency data can be viewed as a large set of very small samples) rather than a sample bitmap. 

@abstr_hyperlink | @abstr_hyperlink 

Lists of all the possible pairs of adjacent tiles in practical tilesets can be quite long, so I implemented a symmetry system for tiles to shorten the enumeration. In this system each tile should be assigned with its symmetry type.

@abstr_image 

Note that the tiles have the same symmetry type as their assigned letters (or, in other words, actions of the dihedral group D @abstr_number are isomorphic for tiles and their corresponding letters). With this system it's enough to enumerate pairs of adjacent tiles only up to symmetry, which makes lists of adjacencies for tilesets with many symmetrical tiles (even the summer tileset, despite drawings not being symmetrical the system considers such tiles to be symmetrical) several times shorter. 

@abstr_image @abstr_image @abstr_image @abstr_image @abstr_image @abstr_image @abstr_image @abstr_image 

Note that the unrestrained knot tileset (with all @abstr_number tiles being allowed) is not interesting for WFC, because you can't run into a situation where you can't place a tile. We call tilesets with this property "easy". Without special heuristics easy tilesets don't produce interesting global arrangements, because correlations of tiles in easy tilesets quickly fall off with a distance. Many easy tilesets can be found on @abstr_hyperlink . Consider the "Dual" @abstr_number -edge tileset there. How can it generate knots (without t-junctions, not easy) while being easy? The answer is, it can only generate a narrow class of knots, it can't produce an arbitrary knot.

Note also that Circuit, Summer and Rooms tilesets are non-Wang. That is, their adjacency data cannot be induced from edge coloring. For example, in Circuit two Corners cannot be adjacent, yet they can be connected with a Connection tile, and diagonal tracks cannot change direction.

## Higher dimensions

WFC algorithm in higher dimensions works completely the same way as in dimension @abstr_number , though performance becomes an issue. These voxel models were generated with N= @abstr_number overlapping tiled model using @abstr_number x @abstr_number x @abstr_number and @abstr_number x @abstr_number x @abstr_number blocks and additional heuristics (height, density, curvature, ...).

@abstr_image 

Higher resolution screenshots: [ @abstr_number ](http://i.imgur.com/ @abstr_number bsjlBY.png), [ @abstr_number ](http://i.imgur.com/GduN @abstr_number Vr.png), [ @abstr_number ](http://i.imgur.com/IEOsbIy.png). Voxel models generated with WFC and other algorithms will be in a separate repo. ## Constrained synthesis WFC algorithm supports constraints. Therefore, it can be easely combined with other generative algorithms or with manual creation. Here is WFC autocompleting a level started by a human: 

@abstr_hyperlink | @abstr_hyperlink 

@abstr_hyperlink algorithm satisfies the strong version of the condition (C @abstr_number ): the limit distribution of NxN patterns in the outputs it is producing is exactly the same as the distributions of patterns in the input. However, ConvChain doesn't satisfy (C @abstr_number ): it often produces noticeable artefacts. It makes sense to run ConvChain first to get a well-sampled configuration and then run WFC to correct local artefacts. This is similar to a common strategy in optimization: first run a Monte-Carlo method to find a point close to a global optimum and then run a gradient descent from that point for greater accuracy.

P. F. Harrison's @abstr_hyperlink algorithm is significantly faster than WFC, but it has trouble with long correlations (for example, it's difficult for this algorithm to synthesize brick wall textures with correctly aligned bricks). But this is exactly where WFC shines, and Harrison's algorithm supports constraints. It makes sense first to generate a perfect brick wall blueprint with WFC and then run a constrained texture synthesis algorithm on that blueprint.

## Comments

Why the minimal entropy heuristic? I noticed that when humans draw something they often follow the minimal entropy heuristic themselves. That's why the algorithm is so enjoyable to watch.

The overlapping model relates to the simple tiled model the same way higher order Markov chains relate to order one Markov chains.

Note that the entropy of any node can't increase during the propagation phase, i.e. possibilities are not arising, but can be canceled. When propagation step can not decrease entropy further, we activate observation step. If the observation step can not decrease entropy, that means that the algorithm has finished working.

WFC's propagation phase is very similar to the loopy belief propagation algorithm. In fact, I first programmed belief propagation, but then switched to constraint propagation with a saved stationary distribution, because BP is significantly slower without a massive parallelization (on a CPU) and didn't produce significantly better results in my problems.

Note that the "Simple Knot" and "Trick Knot" samples have @abstr_number colors, not @abstr_number .

One of the dimensions can be time. In particular, d-dimensional WFC captures the behaviour of any (d- @abstr_number )-dimensional cellular automata.

## References

This project builds upon Paul Merrell's work on model synthesis, in particular discrete model synthesis chapter of @abstr_hyperlink . Paul propagates adjacency constraints in what we call a simple tiled model with a heuristic that tries to complete propagation in a small moving region.

It was also heavily influenced by declarative texture synthesis chapter of @abstr_hyperlink . Paul defines adjacency data of tiles by labeling their borders and uses backtracking search to fill the tilemap.

## How to build

WFC is a console application that depends only on the standard library. Get @abstr_hyperlink for Windows, Linux or macOS and run @abstr_code_section Alternatively, use build instructions from the community for various platforms from the @abstr_hyperlink . Casey Marshall made a @abstr_hyperlink that makes using the program with the command line more convenient and includes snap packaging.

## Notable ports, forks and spinoffs

  * Emil Ernerfeldt made a @abstr_hyperlink .
  * @abstr_hyperlink made a Kotlin (JVM) library, @abstr_hyperlink . Joseph Roskopf made a line by line Kotlin @abstr_hyperlink of the optimized @abstr_number version. Edwin Jakobs made a @abstr_hyperlink that supports @abstr_hyperlink .
  * @abstr_hyperlink made a @abstr_hyperlink .
  * Oskar Stalberg programmed a @abstr_number d tiled model, a @abstr_number d tiled model for irregular grids on a sphere and is building beautiful @abstr_number d tilesets for them: @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink .
  * @abstr_hyperlink adapted @abstr_hyperlink and used it generate skateparks in the @abstr_hyperlink game, @abstr_hyperlink in the @abstr_number game @abstr_hyperlink and @abstr_hyperlink in the @abstr_number game @abstr_hyperlink .
  * @abstr_hyperlink applied a @abstr_hyperlink to poetry generation: @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink .
  * @abstr_hyperlink made a @abstr_hyperlink based on my Castle tileset. Nick uses text output option in the tiled model to reconstruct @abstr_number d models in Cinema @abstr_number D.
  * Sean Leffler implemented the @abstr_hyperlink .
  * rid @abstr_number x is making an @abstr_hyperlink .
  * I published a very basic @abstr_hyperlink so people could make their own @abstr_number d tilesets without waiting for the full @abstr_number d repository.
  * I made an @abstr_hyperlink of the overlapping model, you can download the GUI executable from the @abstr_hyperlink .
  * @abstr_hyperlink built a level generation pipeline that applies WFC in multiple passes for the @abstr_hyperlink game: @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink .
  * @abstr_hyperlink implemented a @abstr_hyperlink .
  * Arvi Teikari programmed a @abstr_hyperlink in Lua. Headchant @abstr_hyperlink it to work with LÖVE.
  * Isaac Karth made a @abstr_hyperlink of the overlapping model.
  * Oskar Stalberg made an @abstr_hyperlink of the tiled model that runs in the browser.
  * @abstr_hyperlink implemented a @abstr_number d tiled model ( @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink ) and made a @abstr_number -dimensional tiled model where one of the dimensions is time ( @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink ).
  * @abstr_hyperlink made a @abstr_hyperlink to the tile symmetry system.
  * @abstr_hyperlink and @abstr_hyperlink wrote a @abstr_hyperlink where they formulate WFC as an ASP problem, use general constraint solver @abstr_hyperlink to generate bitmaps, experiment with global constraints, trace WFC's history and give detailed explanation of the algorithm.
  * Sylvain Lefebvre made a @abstr_hyperlink of @abstr_number d model synthesis, described the thought process of designing a sample and provided an example where adjacency constraints ensure that the output is connected (walkable).
  * I generalized @abstr_number d WFC to work with cube symmetry group and made a tileset that generates @abstr_hyperlink .
  * There are many ways to visualize partially observed wave states. In the code, color values of possible options are averaged to produce the resulting color. Oskar Stalberg @abstr_hyperlink partially observed states as semi-transparent boxes, where the box is bigger for a state with more options. In the voxel setting I @abstr_hyperlink wave states with per-voxel voting.
  * Remy Devaux implemented the tiled model in PICO- @abstr_number and wrote an @abstr_hyperlink about generation of coherent data with an explanation of WFC.
  * For the upcoming game @abstr_hyperlink Oskar Stalberg @abstr_hyperlink a heuristic that tries to select such tiles that the resulting observed zone is navigable at each step.
  * William Manning @abstr_hyperlink the overlapping model in C# with the primary goal of making code readable, and provided it with WPF GUI.
  * @abstr_hyperlink wrote a WFC @abstr_hyperlink for Procjam @abstr_number .
  * @abstr_hyperlink formulated the connectivity constraint as an @abstr_hyperlink for clingo.
  * MatveyK programmed a @abstr_hyperlink .
  * @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink are @abstr_hyperlink the possibility of hiding information inside textures. They made a @abstr_hyperlink that can encode text messages as WFC tilings and decode them back. This technique allows to use WFC tilings as QR codes.
  * @abstr_hyperlink and @abstr_hyperlink significantly @abstr_hyperlink the running time of WFC, by an order of magnitude for the overlapping model. I @abstr_hyperlink their improvements into the code.
  * Vasu Mahesh @abstr_hyperlink @abstr_number d tiled model to TypeScript, made a new tileset and @abstr_hyperlink the generation process in WebGL.
  * @abstr_hyperlink experimented with @abstr_number d WFC and created/adapted many voxel tilesets: @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink .
  * Oskar Stalberg gave a @abstr_hyperlink about level generation in Bad North at the Everything Procedural Conference @abstr_number .
  * I @abstr_hyperlink about how to generate (approximately) unbiased paths between @abstr_number points with WFC and other algorithms.
  * @abstr_hyperlink and @abstr_hyperlink published a @abstr_hyperlink where they describe a system based on WFC that learns from both positive and negative examples, and discuss it in a general context of dialogs with example-driven generators.
  * Brendan Anthony @abstr_hyperlink WFC to generate wall decorations in the game @abstr_hyperlink .
  * Tim Kong implemented the @abstr_hyperlink .
  * In order to generate connected structures, Boris the Brave applied the @abstr_hyperlink to WFC. He published a @abstr_hyperlink that supports hex grids, additional constraints and backtracking.
  * @abstr_hyperlink @abstr_hyperlink a @abstr_hyperlink based on the tiled model for Procjam @abstr_number . He wrote an @abstr_hyperlink describing his approaches to setting adjacencies, backtracking and the online variation of WFC.
  * Sol Bekic @abstr_hyperlink the tiled model that runs on GPU using PyOpenCL. Instead of keeping a queue of nodes to propagate from, it propagates from every node on the grid in parallel.
  * Wouter van Oortmerssen @abstr_hyperlink the tiled model in a single C++ function, with a structure similar to a priority queue for faster observation.
  * Robert Hoenig @abstr_hyperlink the overlapping model in Julia, with an option to propagate constraints only locally.
  * @abstr_hyperlink applied WFC to @abstr_hyperlink and @abstr_hyperlink .
  * Breanna Baltaxe-Admony @abstr_hyperlink WFC to music generation.
  * Shawn Ridgeway made a @abstr_hyperlink .
  * For the Global Game Jam @abstr_number , @abstr_hyperlink made a @abstr_hyperlink in which the player can interact with WFC-based level generator by resetting portions of the level with various weapons.
  * Stephen Sherratt wrote a @abstr_hyperlink of the overlapping model and made a @abstr_hyperlink . For the @abstr_number DRL Challenge @abstr_number he made a roguelike @abstr_hyperlink that @abstr_hyperlink WFC to generate levels.
  * Florian Drux created a @abstr_hyperlink that works on graphs with arbitrary local structure and @abstr_hyperlink it in Python.
  * Bob Burrough @abstr_hyperlink a percolation-like phase transition in one of the tilesets that manifests in spiking contradiction rate.



## Credits

Some samples are taken from the games Ultima IV and @abstr_hyperlink . Circles tileset is taken from @abstr_hyperlink . Idea of generating integrated circuits was suggested to me by @abstr_hyperlink and their style was taken from Zachtronics' @abstr_hyperlink . Cat overlapping sample is taken from the Nyan Cat video, Qud sample was made by @abstr_hyperlink , Magic Office + Spirals samples - by rid @abstr_number x, Colored City + Link + Link @abstr_number + Mazelike + Red Dot + Smile City overlapping samples - by Arvi Teikari. Summer tileset was made by Hermann Hillmann. Voxel models were rendered in @abstr_hyperlink .

@abstr_image 

@abstr_image 
