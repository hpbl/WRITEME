# Linux Desktop Setup

This document contains some brief documentation about my preferred Linux desktop setup.

Inspired by @abstr_hyperlink / @abstr_hyperlink , it's my own version of a lightweight, minimal Openbox environment based on Debian stable.

## Install Debian with no desktop.

## Create User:

First things first; create a user with sudo privileges:
    
    
    su
    apt install sudo
    adduser brian sudo
    

Because I prefer `startx` over a graphical display manager, being able to shutdown from the command line without entering a password is useful. `sudo visudo`, then add the following:
    
    
    brian ALL=(ALL) NOPASSWD: /sbin/shutdown
    

## Install Basic Openbox environment:
    
    
    sudo apt install xorg openbox rxvt-unicode- @abstr_number color feh lxappearance gmrun tint @abstr_number  clipit
    

## With some decent fonts:
    
    
    sudo apt install fonts-inconsolata fonts-liberation fonts-droid
    

## Browser (Latest Firefox):

Debian's default Firefox is a little old, but that's easy to fix:

  * Download @abstr_hyperlink .
  * Unzip to a temporary location.
  * Move firefox folder to `/usr/share`.
  * Link from `/usr/bin`.



## Programming tools:
    
    
    sudo apt install git stow tmux vim-gtk
    

## Git Setup:
    
    
    git config --global user.name "<username>"
    git config --global user.email "<email>"
    git config --global push.default simple
    

## FZF, Silver Searcher
    
    
    sudo apt install silversearcher-ag
    git clone --depth  @abstr_number  https://github.com/junegunn/fzf.git ~/.fzf
    ~/.fzf/install
    

Set environment variables `FZF_DEFAULT_COMMAND` and `FZF_CTRL_T_COMMAND`.

## Micro

  * Download binary from https://micro-editor.github.io/
  * Unzip
  * Move micro folder to /usr/share
  * Link from /usr/bin



## Sound:
    
    
    sudo apt install pulseaudio pavucontrol
    

(If running in a VM, change the VM's Audio Settings to Intel HD Audio)

## Dotfiles:
    
    
    git clone https://github.com/brianrainey/.dotfiles.git
    

`stow` everything.
