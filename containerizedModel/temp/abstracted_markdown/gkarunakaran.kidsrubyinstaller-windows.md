# KidsRuby Installer

KidsRuby Installer

## Overview

This project builds an installer for the KidsRuby project http://kidsruby.com/

This project is entirely based on RailsInstaller (http://railsinstaller.org) with additions for the kids ruby codebase.

## How to Contribute

KidsRuby Installer is bootstrapped, built and packaged via rake tasks.

@abstr_number . Download and install the latest RailsInstaller from http://railsinstaller.org/

@abstr_number . Bootstrap the project, from the project root run

> rake bootstrap

@abstr_number . Install latest Inno Setup Quick Start Pack, ensure iscc.exe is in your PATH

http://www.jrsoftware.org/isdl.php#qsp

@abstr_number . [[ hackety hack... ]]

@abstr_number . Download and build all components on the stage

> rake build

@abstr_number . Use Inno Setup to package KidsRubyInstaller

> rake package

@abstr_number . Use the generated KidsRubyInstaller.exe, be happy and prosperous! Be sure to share it with all of your friends!

### Releasing a new version

@abstr_number . Update VERSION.txt

@abstr_number . Update CHANGELOG.txt

### Development Kit (DevKit)

A MSYS/MinGW based toolkit that enables KidsRuby Installer to build native C/C++ packages, both for Ruby and gems. DevKit is built and maintained by the wonderful folks over at the RubyInstaller (http://rubyinstaller.org/) project.

### Ruby @abstr_number . @abstr_number . @abstr_number on Windows

KidsRuby Installer is a self contained package installer which installs Ruby and RubyGems on a windows system, head over to http://rubyinstaller.org/ for more information.

### Packaging/Installer

We are using @abstr_hyperlink , a free installer for Windows programs.
