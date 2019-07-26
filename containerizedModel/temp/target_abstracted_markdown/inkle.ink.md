# ink

@abstr_hyperlink 

@abstr_hyperlink is @abstr_hyperlink 's scripting language for writing interactive narrative, both for text-centric games as well as more graphical games that contain highly branching stories. It's designed to be easy to learn, but with powerful enough features to allow an advanced level of structuring.

Here's a taster @abstr_hyperlink .
    
    
    - I looked at Monsieur Fogg 
    *   ... and I could contain myself no longer.
        'What is the purpose of our journey, Monsieur?'
        'A wager,' he replied.
        * *     'A wager!'[] I returned.
                He nodded. 
                * * *   'But surely that is foolishness!'
                * * *  'A most serious matter then!'
                - - -   He nodded again.
                * * *   'But can we win?'
                        'That is what we will endeavour to find out,' he answered.
                * * *   'A modest wager, I trust?'
                        'Twenty thousand pounds,' he replied, quite flatly.
                * * *   I asked nothing further of him then[.], and after a final, polite cough, he offered nothing more to me. <>
        * *     'Ah[.'],' I replied, uncertain what I thought.
        - -     After that, <>
    *   ... but I said nothing[] and <> 
    - we passed the day in silence.
    - -> END
    

We'd recommend downloading @abstr_hyperlink , and the follow @abstr_hyperlink , if you want to give ink a try.

Broadly, the engine is made up of two components:

  * **inklecate** is the command-line compiler for ink. It takes one or more text files with an `.ink` extension, and produces a `.json` file. It can also be used in _play_ mode, for testing a story on the command line.
  * The **ink runtime engine** is a C# library that can be used within Unity or any other C# environment.



We also have an @abstr_hyperlink package so that you don't have to worry about the details of how to compile your ink files for Unity games.

**Warning:** **ink** is in alpha. Features may change, bugs may be encountered. We're yet to complete a project with this major rewrite of ink - it's a work in progress!

# Getting started

If you're happy to use Unity, we'd recommend following **Writing with Unity** , below.

If you would prefer a more barebones and technical approach, (or you aren't using Unity at all), you can also compile and play ink stories on the command line.

To keep up to date with the latest news about ink @abstr_hyperlink .

## Writing with Unity

  * Download the latest @abstr_hyperlink , or grab it from the Unity AssetStore, and place in your project.
  * Create a `.ink` text file such as `myStory.ink`, containing the text `Hello, world!`.
  * Select the file in Unity, and you should see a _Play_ button in the file's inspector.
  * Click it, and you should get an Editor window that lets you play (preview) your story.
  * Follow the tutorial: @abstr_hyperlink .



## Using inklecate on the command line

  * @abstr_hyperlink (or build it yourself, see below.)
  * Create a text file called `myStory.ink`, containing the text `Hello, world!`.
  * On the command line, run the following:

**Mac:** `./inklecate -p myStory.ink`

**Windows:** `inklecate.exe -p myStory.ink`

**Linux:** `mono inklecate.exe -p myStory.ink`

    * To run on Linux, you need the Mono runtime and the Mono System.Core library (for CLI @abstr_number . @abstr_number ). If you have access to the debian repository, you can install these using:   
`sudo apt-get install mono-runtime libmono-system-core @abstr_number . @abstr_number -cil`

The `-p` option uses play mode so that you can see the result immediately. If you want to get a compiled `.json` file, just remove the `-p` option from the examples above.

  * Follow the tutorial: @abstr_hyperlink .




## Integrating into your game

_Full article: see @abstr_hyperlink ._

_For a sample Unity project, see @abstr_hyperlink ._

**ink** isn't designed as an end-to-end narrative game engine. Rather, it's designed to be flexible, so that it can slot into your own game and UI with ease. Here's a taster of the code you need to get started:
    
    
    using Ink.Runtime;
    
    //  @abstr_number ) Load story
    _story = new Story(sourceJsonString);
    
    //  @abstr_number ) Game content, line by line
    while(_story.canContinue)
        Debug.Log(story.Continue());
    
    //  @abstr_number ) Display story.currentChoices list, allow player to choose one
    Debug.Log(_story.currentChoices[ @abstr_number ].choiceText);
    _story.ChooseChoiceIndex( @abstr_number );
    
    //  @abstr_number ) Back to  @abstr_number 
    ...
    

## Building

### Requirements

**Windows:**

  * @abstr_hyperlink (e.g. Community edition), @abstr_hyperlink , or Unity's own version of MonoDevelop.



**Mac:**

  * @abstr_hyperlink , or Unity's own version of MonoDevelop



**Linux:**

  * @abstr_hyperlink . For detailed installation instructions, see @abstr_hyperlink .



### Build

@abstr_number . Load up the solution file - `ink.sln`. @abstr_number . Select the _Release_ configuration and choose _Build - > Build All_ (or _Build Solution_ in Visual Studio). @abstr_number . The compiler binary should be built in `inklecate/bin/Release` (or `x @abstr_number`), while the runtime engine DLL will be built in `ink-engine-dll/bin/Release/ink-engine.dll`

Note that the executable requires Mono on Mac or .NET on Windows. On Windows this isn't a problem since it ships with .NET, but on Mac you need Xamarin for Mono. The `build_release.command` file in the repo is a Mac script that will bundle up both Mac and Windows versions, and the Mac version will be bundled with the Mono runtime so that the end user doesn't need Xamarin/Mono installed.

# The development of ink

## How to contribute

We’d of course appreciate any bug fixes you might find! Also see the roadmap below for future planned features and optimisations that you might be able to help out with.

We're using GitHub issues both as a discussion forum and as a bug tracker, so @abstr_hyperlink if you want to start a discussion or request a feature, and please label appropriately. Or if you want to get in touch with us directly, @abstr_hyperlink .

We also have a @abstr_hyperlink , where you may find other people using ink to chat with (as well as inklers!)

In terms of related projects outside of the scope of this repo, we'd love to see the following since we don't have time to do it ourselves right now, and we think it would substantially help the community:

  * A more friendly install-edit-play flow for writers. For example, a downloadable GUI-based app with an editor pane on the left and a play pane on the right. Bonus points if the play pane automatically reloads the state of the story as you type!
  * Implementations of the runtime engine in other languages - for example JavaScript, so that stories can be run on the web. (Note that although we'd be excited to see that right now, we'd probably recommend that you don't embark on such a project just yet, since the runtime may still change substantially, so it could create unnecessary maintenance work.)
  * Unity template project to demonstrate how to set up a particular style of game.



## Roadmap

Internally we've been thinking about the following. We can't guarantee we'll implement them any time soon though, or indeed at all!

### Definitely coming

  * Punctuation and whitespace cleaner. Although the ink engine does the best it can at fixing various issues such including the right amount of whitespace, there are certain things that are hard or impossible to deal with, due to the text being inherently interactive and unpredictable. For _Sorcery!_ and * @abstr_number Days* we had a cleaning function which tidied up spacing and punctuation, and we intend to do the same with this latest version of the ink engine. A similar feature exists in HTML due to the inclusion of markup within text - for example, multiple spaces are collapsed down into one.
  * Tighten implementation to prevent certain "features" that aren't intentional (a wide class of bugs). For example, we currently allow content on the same line after the closing brace of a multi-line piece of logic.
  * Other bug fixes!



### Probably coming

  * A scheme to split up the monolithic JSON output into smaller files that can be loaded on the fly in the runtime. This was necessary on Sorcery! and @abstr_number Days as the quantity of content increased substantially, and we were running our games on low-end iOS devices at the time. 
    * Our implementation for the previous version of ink was to have two files: one huge text file with lots of JSON snippets that never got loaded in one go, and an index file, which contained byte offsets and lengths for all the compiled knots in the game. This worked pretty well, although it meant that the compiled JSON was still in one huge file.
    * A possible alternative we could consider for ink @abstr_number is to (optionally?) be able to have a one-to-one mapping between source `.ink` files and output `.json` files, so that the size and arrangement is predictable and controllable.
  * General refactoring and improvements to code structure and optimisation of the compiler.
  * Structured JSON-like data objects within ink format. Exact design still to be determined, but goals are for it to be a superset of JSON, so that it’s compatible, but can be simpler (a bit like YAML, though not YAML for various reasons). Would allow more complex hierarchical game state to be stored within the ink engine.



### To investigate

  * Consider changing multi-bullet weave indentation to Python-style whitespace indentation. This would be a huge syntax-breaking change, but we'd welcome a discussion and/or an experimental implementation.
  * Plugin architecture, to allow you to extract information from the ink while it's being compiled. Currently there's a basic example in the codebase, but it currently has to be built directly into the compiler, rather than via DLLs.
  * Audio and localisation. Difficult problems that need some thought.
  * Further succinctness improvements in JSON representation. We've rewritten it from scratch, but it could still do with a bit of work. Size can be a problem when you have @abstr_number MB+ of source ink, as we've had on past games.



## Architectural overview

See the @abstr_hyperlink for information about the pipeline of the **ink** engine, and a birds-eye view of the project's code structure.

# License

**ink** is released under the @abstr_hyperlink . Although we don't require attribution, we'd love to know if you decide to use **ink** a project! Let us know on @abstr_hyperlink or @abstr_hyperlink .

# Support us!

**ink** is free forever, but represents multiple years of thought, design, development and testing. Please consider supporting us via @abstr_hyperlink . Thank you, and have fun!
