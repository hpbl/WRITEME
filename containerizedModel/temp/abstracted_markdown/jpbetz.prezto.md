# Prezto — Instantly Awesome Zsh

Prezto is the configuration framework for @abstr_hyperlink ; it enriches the command line interface environment with sane defaults, aliases, functions, auto completion, and prompt themes.

## Installation

Prezto will work with any recent release of Zsh, but the minimum recommended version is @abstr_number . @abstr_number . @abstr_number .

@abstr_number . Launch Zsh:
    
    
        zsh
    

@abstr_number . Clone the repository:
    
    
        git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"
    

@abstr_number . Create a new Zsh configuration by copying the Zsh configuration files provided:
    
    
        setopt EXTENDED_GLOB
        for rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/^README.md(.N); do
          ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.${rcfile:t}"
        done
    

@abstr_number . Set Zsh as your default shell:
    
    
        chsh -s /bin/zsh
    

@abstr_number . Open a new Zsh terminal window or tab.

### Troubleshooting

If you are not able to find certain commands after switching to _Prezto_ , modify the `PATH` variable in _~/.zshenv_ then open a new Zsh terminal window or tab.

## Usage

Prezto has many features disabled by default. Read the source code and accompanying README files to learn of what is available.

### Modules

@abstr_number . Browse _/modules_ to see what is available. @abstr_number . Load the modules you need in _~/.zpreztorc_ then open a new Zsh terminal window or tab.

### Themes

@abstr_number . For a list of themes, type `prompt -l`. @abstr_number . To preview a theme, type `prompt -p name`. @abstr_number . Load the theme you like in _~/.zpreztorc_ then open a new Zsh terminal window or tab.
    
    
     ![sorin theme][ @abstr_number ]
    

## Customization

The project is managed via @abstr_hyperlink . It is highly recommend that you commit your changes and push them to @abstr_hyperlink to not lose them. If you do not know how to use Git, follow this @abstr_hyperlink and bookmark this @abstr_hyperlink .

## Resources

The @abstr_hyperlink and the @abstr_hyperlink man page are indispensable.

## License

(The MIT License)

Copyright (c) @abstr_number - @abstr_number Robby Russell, Sorin Ionescu, and contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
