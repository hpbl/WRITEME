# OpenMW

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

OpenMW is an open-source game engine that supports playing Morrowind by Bethesda Softworks. You need to own the game for OpenMW to play Morrowind.

OpenMW also comes with OpenMW-CS, a replacement for Bethesda's Construction Set.

  * Version: @abstr_number . @abstr_number . @abstr_number 
  * License: GPLv @abstr_number (see @abstr_hyperlink for more information)
  * Website: https://www.openmw.org
  * IRC: #openmw on irc.freenode.net



Font Licenses: * DejaVuLGCSansMono.ttf: custom (see @abstr_hyperlink for more information)

## Current Status

The main quests in Morrowind, Tribunal and Bloodmoon are all completable. Some issues with side quests are to be expected (but rare). Check the @abstr_hyperlink for a list of issues we need to resolve before the " @abstr_number . @abstr_number " release. Even before the " @abstr_number . @abstr_number " release however, OpenMW boasts some new @abstr_hyperlink , such as improved graphics and user interfaces. 

Pre-existing modifications created for the original Morrowind engine can be hit-and-miss. The OpenMW script compiler performs more thorough error-checking than Morrowind does, meaning that a mod created for Morrowind may not necessarily run in OpenMW. Some mods also rely on quirky behaviour or engine bugs in order to work. We are considering such compatibility issues on a case-by-case basis - in some cases adding a workaround to OpenMW may be feasible, in other cases fixing the mod will be the only option. If you know of any mods that work or don't work, feel free to add them to the @abstr_hyperlink wiki page.

## Getting Started

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink - read the @abstr_hyperlink before submitting your first bug!
  * @abstr_hyperlink 



## The data path

The data path tells OpenMW where to find your Morrowind files. If you run the launcher, OpenMW should be able to pick up the location of these files on its own, if both Morrowind and OpenMW are installed properly (installing Morrowind under WINE is considered a proper install).

## Command line options
    
    
    Syntax: openmw <options>
    Allowed options:
      --help                                print help message
      --version                             print version information and quit
      --data arg (=data)                    set data directories (later directories
                                            have higher priority)
      --data-local arg                      set local data directory (highest
                                            priority)
      --fallback-archive arg (=fallback-archive)
                                            set fallback BSA archives (later
                                            archives have higher priority)
      --resources arg (=resources)          set resources directory
      --start arg                           set initial cell
      --content arg                         content file(s): esm/esp, or
                                            omwgame/omwaddon
      --no-sound [=arg(= @abstr_number )] (= @abstr_number )            disable all sounds
      --script-verbose [=arg(= @abstr_number )] (= @abstr_number )      verbose script output
      --script-all [=arg(= @abstr_number )] (= @abstr_number )          compile all scripts (excluding dialogue
                                            scripts) at startup
      --script-all-dialogue [=arg(= @abstr_number )] (= @abstr_number ) compile all dialogue scripts at startup
      --script-console [=arg(= @abstr_number )] (= @abstr_number )      enable console-only script
                                            functionality
      --script-run arg                      select a file containing a list of
                                            console commands that is executed on
                                            startup
      --script-warn [=arg(= @abstr_number )] (= @abstr_number )         handling of warnings when compiling
                                            scripts
                                             @abstr_number  - ignore warning
                                             @abstr_number  - show warning but consider script as
                                            correctly compiled anyway
                                             @abstr_number  - treat warnings as errors
      --script-blacklist arg                ignore the specified script (if the use
                                            of the blacklist is enabled)
      --script-blacklist-use [=arg(= @abstr_number )] (= @abstr_number )
                                            enable script blacklisting
      --load-savegame arg                   load a save game file on game startup
                                            (specify an absolute filename or a
                                            filename relative to the current
                                            working directory)
      --skip-menu [=arg(= @abstr_number )] (= @abstr_number )           skip main menu on game startup
      --new-game [=arg(= @abstr_number )] (= @abstr_number )            run new game sequence (ignored if
                                            skip-menu= @abstr_number )
      --fs-strict [=arg(= @abstr_number )] (= @abstr_number )           strict file system handling (no case
                                            folding)
      --encoding arg (=win @abstr_number )             Character encoding used in OpenMW game
                                            messages:
    
                                            win @abstr_number  - Central and Eastern European
                                            such as Polish, Czech, Slovak,
                                            Hungarian, Slovene, Bosnian, Croatian,
                                            Serbian (Latin script), Romanian and
                                            Albanian languages
    
                                            win @abstr_number  - Cyrillic alphabet such as
                                            Russian, Bulgarian, Serbian Cyrillic
                                            and other languages
    
                                            win @abstr_number  - Western European (Latin)
                                            alphabet, used by default
      --fallback arg                        fallback values
      --no-grab                             Don't grab mouse cursor
      --export-fonts [=arg(= @abstr_number )] (= @abstr_number )        Export Morrowind .fnt fonts to PNG
                                            image and XML file in current directory
      --activate-dist arg (=- @abstr_number )             activation distance override
      --random-seed arg (=<impl defined>)   seed value for random number generator
    
