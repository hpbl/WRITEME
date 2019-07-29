# Doom @abstr_number BFG Edition GPL Source Code

This file contains the following sections:

GENERAL NOTES LICENSE

# GENERAL NOTES

## Game data and patching:

This source release does not contain any game data, the game data is still covered by the original EULA and must be obeyed as usual.

You must patch the game to the latest version.

Note that Doom @abstr_number BFG Edition is available from the Steam store at http://store.steampowered.com/app/ @abstr_number /

## Compiling on win @abstr_number :

A project file for Microsoft Visual Studio @abstr_number is provided in neo\doom @abstr_number .sln We expect the solution file is compatible with the Express releases

You will need the Microsoft DirectX SDK installed as well. If it does not reside in "C:\Program Files (x @abstr_number )\Microsoft DirectX SDK (June @abstr_number )" you will need to update the project files accordingly.

## Steam:

The Doom @abstr_number BFG Edition GPL Source Code release does not include functionality for integrating with Steam. This includes roaming profiles, achievements, leaderboards, matchmaking, the overlay, or any other Steam features.

## Bink:

The Doom @abstr_number BFG Edition GPL Source Code release does not include functionality for rendering Bink Videos.

## Back End Rendering of Stencil Shadows:

The Doom @abstr_number BFG Edition GPL Source Code release does not include functionality enabling rendering of stencil shadows via the "depth fail" method, a functionality commonly known as "Carmack's Reverse".

## Other platforms, updated source code, security issues:

If you have obtained this source code several weeks after the time of release, it is likely that you can find modified and improved versions of the engine in various open source projects across the internet.

Depending what is your interest with the source code, those may be a better starting point.

# LICENSE

See COPYING.txt for the GNU GENERAL PUBLIC LICENSE

ADDITIONAL TERMS: The Doom @abstr_number BFG Edition GPL Source Code is also subject to certain additional terms. You should have received a copy of these additional terms immediately following the terms and conditions of the GNU GPL which accompanied the Doom @abstr_number BFG Edition GPL Source Code. If not, please request a copy in writing from id Software at id Software LLC, c/o ZeniMax Media Inc., Suite @abstr_number , Rockville, Maryland @abstr_number USA.

EXCLUDED CODE: The code described below and contained in the Doom @abstr_number BFG Edition GPL Source Code release is not part of the Program covered by the GPL and is expressly excluded from its terms. You are solely responsible for obtaining from the copyright holder a license for such code and complying with the applicable license terms.

## JPEG library

neo/renderer/jpeg- @abstr_number /*

Copyright (C) @abstr_number - @abstr_number , Thomas G. Lane

Permission is hereby granted to use, copy, modify, and distribute this software (or portions thereof) for any purpose, without fee, subject to these conditions: ( @abstr_number ) If any part of the source code for this software is distributed, then this README file must be included, with this copyright and no-warranty notice unaltered; and any additions, deletions, or changes to the original files must be clearly indicated in accompanying documentation. ( @abstr_number ) If only executable code is distributed, then the accompanying documentation must state that "this software is based in part on the work of the Independent JPEG Group". ( @abstr_number ) Permission for use of this software is granted only if the user accepts full responsibility for any undesirable consequences; the authors accept NO LIABILITY for damages of any kind.

These conditions apply to any software derived from or based on the IJG code, not just to the unmodified library. If you use our work, you ought to acknowledge us.

NOTE: unfortunately the README that came with our copy of the library has been lost, so the one from release @abstr_number b is included instead. There are a few 'glue type' modifications to the library to make it easier to use from the engine, but otherwise the dependency can be easily cleaned up to a better release of the library.

## zlib library

neo/framework/zlib/*

Copyright (C) @abstr_number - @abstr_number Jean-loup Gailly and Mark Adler

This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

@abstr_number . The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required. @abstr_number . Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software. @abstr_number . This notice may not be removed or altered from any source distribution.

## Base @abstr_number implementation

neo/idlib/Base @abstr_number .cpp

Copyright (c) @abstr_number Lars Wirzenius. All rights reserved.

June @abstr_number @abstr_number : TTimo @abstr_hyperlink modified + endian bug fixes http://bugs.debian.org/cgi-bin/bugreport.cgi?bug= @abstr_number 

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

@abstr_number . Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

@abstr_number . Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## IO for uncompress .zip files using zlib

neo/framework/Unzip.cpp neo/framework/Unzip.h

Copyright (C) @abstr_number Gilles Vollant zlib is Copyright (C) @abstr_number - @abstr_number Jean-loup Gailly and Mark Adler

This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

@abstr_number . The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required. @abstr_number . Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software. @abstr_number . This notice may not be removed or altered from any source distribution.

## MD @abstr_number Message-Digest Algorithm

neo/idlib/hashing/MD @abstr_number .cpp Copyright (C) @abstr_number - @abstr_number , RSA Data Security, Inc. Created @abstr_number . All rights reserved.

License to copy and use this software is granted provided that it is identified as the "RSA Data Security, Inc. MD @abstr_number Message-Digest Algorithm" in all material mentioning or referencing this software or this function.

License is also granted to make and use derivative works provided that such works are identified as "derived from the RSA Data Security, Inc. MD @abstr_number Message-Digest Algorithm" in all material mentioning or referencing the derived work.

RSA Data Security, Inc. makes no representations concerning either the merchantability of this software or the suitability of this software for any particular purpose. It is provided "as is" without express or implied warranty of any kind.

These notices must be retained in any copies of any part of this documentation and/or software.

## MD @abstr_number Message-Digest Algorithm

neo/idlib/hashing/MD @abstr_number .cpp This code implements the MD @abstr_number message-digest algorithm. The algorithm is due to Ron Rivest. This code was written by Colin Plumb in @abstr_number , no copyright is claimed. This code is in the public domain; do with it what you wish.

## CRC @abstr_number Checksum

neo/idlib/hashing/CRC @abstr_number .cpp Copyright (C) @abstr_number - @abstr_number Mark Adler

## OpenGL headers

neo/renderer/OpenGL/glext.h neo/renderer/OpenGL/wglext.h

Copyright (c) @abstr_number - @abstr_number The Khronos Group Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and/or associated documentation files (the "Materials"), to deal in the Materials without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Materials, and to permit persons to whom the Materials are furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materials.

THE MATERIALS ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE MATERIALS OR THE USE OR OTHER DEALINGS IN THE MATERIALS.

## Timidity

doomclassic/timidity/*

Copyright (c) @abstr_number Tuukka Toivonen 

From http://www.cgs.fi/~tt/discontinued.html :

If you'd like to continue hacking on TiMidity, feel free. I'm hereby extending the TiMidity license agreement: you can now select the most convenient license for your needs from ( @abstr_number ) the GNU GPL, ( @abstr_number ) the GNU LGPL, or ( @abstr_number ) the Perl Artistic License. 
