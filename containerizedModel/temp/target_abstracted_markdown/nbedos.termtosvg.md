@abstr_hyperlink @abstr_hyperlink 

# termtosvg

termtosvg is a Unix terminal recorder written in Python that renders your command line sessions as standalone SVG animations.

@abstr_image 

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * Manual page



## Features

  * Produce lightweight and clean looking animations or still frames embeddable on a project page
  * Custom color themes, terminal UI and animation controls via SVG templates
  * Compatible with asciinema recording format



## Installation

termtosvg is compatible with Linux, macOS and BSD OSes, requires Python >= @abstr_number . @abstr_number and can be installed using pip: @abstr_code_section 

Various independently maintained, OS specific packages have been made available by the community:

| OS | Repository | Installation command | |----------|-------------|---| | Archlinux | @abstr_hyperlink |`pacman -S termtosvg` | | FreeBSD | @abstr_hyperlink | | | Gentoo | @abstr_hyperlink | `emerge media-gfx/termtosvg`| | macOS | @abstr_hyperlink |`brew install termtosvg` | | OpenBSD | @abstr_hyperlink | | | NixOS | @abstr_hyperlink | |

## Basic usage

Start recording with:

@abstr_code_section 

You are now in a subshell where you can type your commands as usual. Once you are done, exit the shell to end the recording:

@abstr_code_section Finally, use your favorite web browser to play the animation: @abstr_code_section 

## Dependencies

termtosvg uses: * @abstr_hyperlink to render the terminal screen * @abstr_hyperlink to work with SVG data
