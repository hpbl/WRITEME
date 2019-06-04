# README for simple_rsa

Developed by Johabu @abstr_hyperlink ; @abstr_hyperlink This file is part of simple_rsa. simple_rsa is free software; you can modify it or redistribute it under the terms of the GNU General Public License as published by the Free Software Foundation @abstr_hyperlink , either version @abstr_number , or (at your option) any later version. See @abstr_hyperlink for the license, if you haven't received a copy of it (GNU_GPL.txt). simple_rsa is distributed without any warranty!

simple_rsa is a very simple implementation of the basic RSA encryption algorithm

## IMPORTANT NOTE

This program does NOT fulfil any safety standards! It should NOT be used for real encryption, because it does not provide any safety! This program is only written for teaching purposes.

simple_rsa is distributed without any warranty!

## Platforms

simple_rsa should work on most platforms, but has been tested on Linux amd @abstr_number system using gcc

## Installing

To install simple_rsa, you have to compile it, for instance with GCC:
    
    
    gcc -W -Wall -o RSA simple_rsa.c -lm
    

## Using

simple_rsa is able to create a RSA key pair including public and private key. While key generation important variables of the generation process are displayed. (See @abstr_hyperlink for RSA algorithm)

To start simple_rsa, just type the following command in a shell
    
    
    RSA
    
