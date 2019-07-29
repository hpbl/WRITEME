#  @abstr_hyperlink 

**openage** : a volunteer project to create a free engine clone of the _Genie Engine_ used by _Age of Empires_ , _Age of Empires II (HD)_ and _Star Wars: Galactic Battlegrounds_ , comparable to projects like @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink . At the moment we focus our efforts on the integration of _Age of Empires II_ , while being primarily aimed at POSIX platforms such as **GNU/Linux**.

openage uses the original game assets (such as sounds and graphics), but (for obvious reasons) doesn't ship them. To play, you require _an original AoE II : TC installation or @abstr_hyperlink_ (installation via @abstr_hyperlink or Steam-Linux).

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Contact | Where? \---------|- Development Blog | @abstr_hyperlink Forum | @abstr_hyperlink Matrix Chat | @abstr_hyperlink IRC Chat | @abstr_hyperlink Money Sink | @abstr_hyperlink 

The foundation of **openage** :

Technology | Component \---------------|---------- **C++ @abstr_number _* | Engine core *_ Python @abstr_number _* | Scripting, media conversion, in-game console, code generation *_ Qt @abstr_number _* | Graphical user interface *_ Cython** | Glue code **CMake** | Build system **OpenGL @abstr_number . @abstr_number _* | Rendering, shaders *_ SDL @abstr_number _* | Cross-platform Audio/Input/Window handling *_ Opus** | Audio codec @abstr_hyperlink | Content Configuration and Modding **Humans** | Mixing together all of the above

Our goals _include_ :

  * Fully authentic look and feel 
    * This can only be approximated, since the behaviour of the original game is mostly undocumented, and guessing/experimenting can only get you this close
    * We will not implement useless artificial limitations (max @abstr_number selectable units...)
  * Multiplayer (obviously)
  * Matchmaking and ranking with a @abstr_hyperlink 
  * Optionally, improvements over the original game
  * AI scripting in Python, you can use @abstr_hyperlink 
  * Re-creating @abstr_hyperlink 
  * An easily-moddable content format: @abstr_hyperlink 
  * An integrated Python console and API, comparable to @abstr_hyperlink 
  * Awesome infrastructure such as our own @abstr_hyperlink 



But beware, for sanity reasons:

  * No network compatibility with the original game. You really wanna have the same problems again?
  * No binary compatibility with the original game. A one-way script to convert maps/savegames/missions to openage is planned though.



## Current State of the Project

  * What features are currently implemented?

    * See doc/status.md.
  * What's the plan?

    * See doc/milestones.md. We also have lists of crazy xor good ideas and a technical overview for requested features. 



## Packaging

**Supported Platforms:** Linux, Windows @abstr_number (x @abstr_number )

  * For Linux check at @abstr_hyperlink if your distribution has any packages available.
  * For Windows check our @abstr_hyperlink for the latest installer.



__NOTE:__ If you have any problems starting conversion or starting _openage_ take a look into our troubleshooting guide.

## Dependencies, Building and Running

  * How do I get this to run on my box?

    * See doc/building.md.
  * I compiled everything. Now how do I run it?

    * Execute `./run`.
    * The convert script will transform original assets into openage formats, which are a lot saner and more moddable.
    * Use your brain and react to the things you'll see.
  * Waaaaaah! It

    * segfaults
    * prints error messages I don't want to read
    * ate my dog



All of those are features, not bugs.

To turn them off, use `./run --dont-segfault --no-errors --dont-eat-dog`.

If this still does not help, try our troubleshooting guide, the contact section or the @abstr_hyperlink .

## Development Process

What does openage development look like in practice? \- extensive synchronization! \- doc/development.md.

Can I help? \- doc/contributing.md.

All documentation is also in this repo:

  * Code documentation is embedded in the sources for Doxygen (see doc readme).
  * Have a look at the doc directory. This folder tends to outdate when code changes.



## macOS Version

Running openage on macOS worked in the past, and might or might not work right now.

Setting up continuous integration for this platform has some complications. Running a hackintosh VM seems to be not so legal, while buying dedicated hardware for it seems to be not so cheap. If you know of a legal and cost-free way of doing so or want to sponsor a semi-recent Mac Mini, please open a ticket in our issue tracker. Until then, PRs untested on macOS will make their way into the master branch and occasional breakage will occur.

# Contributing

  * Being typical computer science students, we hate people.
  * Please don't contact us.
  * Nobody likes Age of Empires anyway.
  * None of you is interested in making openage more awesome anyway.
  * We don't want a community.
  * Don't even think about trying to help.



Guidelines:

  * No **bug reports** or **feature requests** , the game is perfect as is.
  * Don't try to **fix any bugs** , see above.
  * Don't implement any features, your code is crap.
  * Don't even think about sending a **pull request**.
  * Please ignore the @abstr_hyperlink that @abstr_hyperlink .
  * Absolutely never ever participate in this @abstr_hyperlink .
  * Don't note the irony, you idiot.



To prevent accidental violation of one of those guidelines, you should _never_

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * read the code and documentation
  * contribute anything to the code
  * contact us



cheers, happy hecking.

## Contact

If you have the desire to perform semi-human interaction, join our **Matrix** or **IRC** chatroom!

  * @abstr_hyperlink 
  * @abstr_hyperlink 



Do not hesitate to ping and insult us, we might not see your message otherwise.

For all technical discussion (ideas, problems, ...), use the @abstr_hyperlink ! It's like a mailing list.

For other discussions or questions, use our @abstr_hyperlink !

## License

_*GNU GPLv @abstr_number *_ or later; see copying.md and legal/GPLv @abstr_number .

I know that probably nobody is ever gonna look at the `copying.md` file, but if you want to contribute code to openage, please take the time to skim through it and add yourself to the authors list.
