(For information about this project on GitHub, see http://ttimo.github.com/doom @abstr_number .gpl/)

# Doom @abstr_number GPL source release

This file contains the following sections:

GENERAL NOTES LICENSE

# GENERAL NOTES

## Game data and patching:

This source release does not contain any game data, the game data is still covered by the original EULA and must be obeyed as usual.

You must patch the game to the latest version.

Note that Doom @abstr_number and Doom @abstr_number : Resurrection of Evil are available from the Steam store at http://store.steampowered.com/app/ @abstr_number / http://store.steampowered.com/app/ @abstr_number /

## Other platforms, updated source code, security issues:

If you have obtained this source code several weeks after the time of release, it is likely that you can find modified and improved versions of the engine in various open source projects across the internet. Depending what is your interest with the source code, those may be a better starting point.

## Compiling on win @abstr_number :

A project file for Microsoft Visual Studio @abstr_number is provided in neo\doom.sln

Unfortunately, Microsoft Visual Studio @abstr_number Express Edition (e.g. the free release) will not be able to successfully compile the source, because @abstr_number bit MFC is required.

You will need the Microsoft DirectX SDK installed as well. If it does not reside in "C:\Program Files (x @abstr_number )\Microsoft DirectX SDK (June @abstr_number )" you will need to update the project files accordingly.

## Compiling on GNU/Linux x @abstr_number :

The build system on GNU/Linux is based on SCons: http://www.scons.org/ Issue the scons command in the neo/ folder.

## Compiling on MacOS X:

XCode @abstr_number . @abstr_number project is under neo/sys/osx/

## Back End Rendering of Stencil Shadows:

The Doom @abstr_number GPL source code release does not include functionality enabling rendering of stencil shadows via the \x @abstr_number depth fail\x @abstr_number method, a functionality commonly known as "Carmack's Reverse".

## MayaImport:

The code for our Maya export plugin is included, if you are a Maya licensee you can obtain the SDK from Autodesk.

# LICENSE

See COPYING.txt for the GNU GENERAL PUBLIC LICENSE

ADDITIONAL TERMS: The Doom @abstr_number GPL Source Code is also subject to certain additional terms. You should have received a copy of these additional terms immediately following the terms and conditions of the GNU GPL which accompanied the Doom @abstr_number Source Code. If not, please request a copy in writing from id Software at id Software LLC, c/o ZeniMax Media Inc., Suite @abstr_number , Rockville, Maryland @abstr_number USA.

EXCLUDED CODE: The code described below and contained in the Doom @abstr_number GPL Source Code release is not part of the Program covered by the GPL and is expressly excluded from its terms. You are solely responsible for obtaining from the copyright holder a license for such code and complying with the applicable license terms.

## Curl library

lines file(s) neo/curl/*, neo/curl/README

COPYRIGHT AND PERMISSION NOTICE

Copyright (c) @abstr_number - @abstr_number , Daniel Stenberg, @abstr_hyperlink .

All rights reserved.

Permission to use, copy, modify, and distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF THIRD PARTY RIGHTS. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Except as contained in this notice, the name of a copyright holder shall not be used in advertising or otherwise to promote the sale, use or other dealings in this Software without prior written authorization of the copyright holder.

## JPEG library

neo/renderer/jpeg- @abstr_number /*

Copyright (C) @abstr_number - @abstr_number , Thomas G. Lane

Permission is hereby granted to use, copy, modify, and distribute this software (or portions thereof) for any purpose, without fee, subject to these conditions: ( @abstr_number ) If any part of the source code for this software is distributed, then this README file must be included, with this copyright and no-warranty notice unaltered; and any additions, deletions, or changes to the original files must be clearly indicated in accompanying documentation. ( @abstr_number ) If only executable code is distributed, then the accompanying documentation must state that "this software is based in part on the work of the Independent JPEG Group". ( @abstr_number ) Permission for use of this software is granted only if the user accepts full responsibility for any undesirable consequences; the authors accept NO LIABILITY for damages of any kind.

These conditions apply to any software derived from or based on the IJG code, not just to the unmodified library. If you use our work, you ought to acknowledge us.

NOTE: unfortunately the README that came with our copy of the library has been lost, so the one from release @abstr_number b is included instead. There are a few 'glue type' modifications to the library to make it easier to use from the engine, but otherwise the dependency can be easily cleaned up to a better release of the library.

## OggVorbis 

neo/sound/OggVorbis/* neo/sound/OggVorbis/ogg/README neo/sound/OggVorbis/vorbis/README

Copyright (c) @abstr_number , Xiph.org Foundation

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

  * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

  * Neither the name of the Xiph.org Foundation nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.




THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE FOUNDATION OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## PropTree 

neo/tools/common/PropTree/*

Copyright (C) @abstr_number - @abstr_number Scott Ramsay sramsay@gonavi.com http://www.gonavi.com

This material is provided "as is", with absolutely no warranty expressed or implied. Any use is at your own risk.

Permission to use or copy this software for any purpose is hereby granted without fee, provided the above notices are retained on all copies. Permission to modify the code and to distribute modified code is granted, provided the above notices are retained, and a notice that the code was modified is included with the above copyright notice.

If you use this code, drop me an email. I'd like to know if you find the code useful.

## OpenAL SDK

neo/openal/docs/* neo/openal/include/* neo/openal/lib/* neo/openal/osx/*

/** * OpenAL cross platform audio library * Copyright (C) @abstr_number - @abstr_number by authors. * This library is free software; you can redistribute it and/or * modify it under the terms of the GNU Library General Public * License as published by the Free Software Foundation; either * version @abstr_number of the License, or (at your option) any later version. * * This library is distributed in the hope that it will be useful, * but WITHOUT ANY WARRANTY; without even the implied warranty of * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU * Library General Public License for more details. * * You should have received a copy of the GNU Library General Public * License along with this library; if not, write to the * Free Software Foundation, Inc., @abstr_number Temple Place - Suite @abstr_number , * Boston, MA @abstr_number - @abstr_number , USA. * Or go to http://www.gnu.org/copyleft/lgpl.html */

## Base @abstr_number implementation

lines file(s) @abstr_number neo/idlib/Base @abstr_number .cpp

Copyright (c) @abstr_number Lars Wirzenius. All rights reserved.

June @abstr_number @abstr_number : TTimo @abstr_hyperlink modified + endian bug fixes http://bugs.debian.org/cgi-bin/bugreport.cgi?bug= @abstr_number 

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

@abstr_number . Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

@abstr_number . Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## IO on .zip files using portions of zlib

lines file(s) @abstr_number src/framework/Unzip.cpp Copyright (C) @abstr_number Gilles Vollant zlib is Copyright (C) @abstr_number - @abstr_number Jean-loup Gailly and Mark Adler

This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

@abstr_number . The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required. @abstr_number . Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software. @abstr_number . This notice may not be removed or altered from any source distribution.

## MD @abstr_number Message-Digest Algorithm

lines file(s) @abstr_number neo/idlib/hashing/MD @abstr_number .cpp Copyright (C) @abstr_number - @abstr_number , RSA Data Security, Inc. Created @abstr_number . All rights reserved.

License to copy and use this software is granted provided that it is identified as the "RSA Data Security, Inc. MD @abstr_number Message-Digest Algorithm" in all material mentioning or referencing this software or this function.

License is also granted to make and use derivative works provided that such works are identified as "derived from the RSA Data Security, Inc. MD @abstr_number Message-Digest Algorithm" in all material mentioning or referencing the derived work.

RSA Data Security, Inc. makes no representations concerning either the merchantability of this software or the suitability of this software for any particular purpose. It is provided "as is" without express or implied warranty of any kind.

These notices must be retained in any copies of any part of this documentation and/or software.

## MD @abstr_number Message-Digest Algorithm

lines file(s) @abstr_number neo/idlib/hashing/MD @abstr_number .cpp This code implements the MD @abstr_number message-digest algorithm. The algorithm is due to Ron Rivest. This code was written by Colin Plumb in @abstr_number , no copyright is claimed. This code is in the public domain; do with it what you wish.

## CRC @abstr_number Checksum

lines file(s) @abstr_number neo/idlib/hashing/CRC @abstr_number .cpp Copyright (C) @abstr_number - @abstr_number Mark Adler

## OpenGL headers

lines file(s) @abstr_number neo/renderer/glext.h @abstr_number neo/renderer/wglext.h

/* _* License Applicability. Except to the extent portions of this file are *_ made subject to an alternative license as permitted in the SGI Free _* Software License B, Version @abstr_number . @abstr_number (the "License"), the contents of this *_ file are subject only to the provisions of the License. You may not use _* this file except in compliance with the License. You may obtain a copy *_ of the License at Silicon Graphics, Inc., attn: Legal Services, @abstr_number _* Amphitheatre Parkway, Mountain View, CA @abstr_number - @abstr_number , or at: *_ _* http://oss.sgi.com/projects/FreeB *_ _* Note that, as provided in the License, the Software is distributed on an *_ "AS IS" basis, with ALL EXPRESS AND IMPLIED WARRANTIES AND CONDITIONS _* DISCLAIMED, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES AND *_ CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A _* PARTICULAR PURPOSE, AND NON-INFRINGEMENT. *_ _* Original Code. The Original Code is: OpenGL Sample Implementation, *_ Version @abstr_number . @abstr_number . @abstr_number , released January @abstr_number , @abstr_number , developed by Silicon Graphics, _* Inc. The Original Code is Copyright (c) @abstr_number - @abstr_number Silicon Graphics, Inc. *_ Copyright in any portions created by third parties is as indicated _* elsewhere herein. All Rights Reserved. *_ _* Additional Notice Provisions: This software was created using the *_ OpenGL(R) version @abstr_number . @abstr_number . @abstr_number Sample Implementation published by SGI, but has _* not been independently verified as being compliant with the OpenGL(R) *_ version @abstr_number . @abstr_number . @abstr_number Specification. */

## NV-CONTROL X Extension

neo/sys/linux/libXNVCtrl/* Copyright NVIDIA Corporation

## ExtUtil.h

neo/sys/linux/extutil.h /* * $Xorg: extutil.h,v @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number @abstr_number : @abstr_number : @abstr_number xorgcvs Exp $ * Copyright @abstr_number , @abstr_number The Open Group

Permission to use, copy, modify, distribute, and sell this software and its documentation for any purpose is hereby granted without fee, provided that the above copyright notice appear in all copies and that both that copyright notice and this permission notice appear in supporting documentation.

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE OPEN GROUP BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Except as contained in this notice, the name of The Open Group shall not be used in advertising or otherwise to promote the sale, use or other dealings in this Software without prior written authorization from The Open Group. * * Author: Jim Fulton, MIT The Open Group * * Xlib Extension-Writing Utilities * * This package contains utilities for writing the client API for various * protocol extensions. THESE INTERFACES ARE NOT PART OF THE X STANDARD AND * ARE SUBJECT TO CHANGE! */

## OSS headers

neo/sys/linux/oss/* Copyright by @abstr_number Front Technologies @abstr_number - @abstr_number 

## Brandelf utility

lines file(s) @abstr_number neo/sys/linux/setup/brandelf.c

/*- * Copyright (c) @abstr_number S\xf @abstr_number ren Schmidt * All rights reserved. * * Redistribution and use in source and binary forms, with or without * modification, are permitted provided that the following conditions * are met: * @abstr_number . Redistributions of source code must retain the above copyright * notice, this list of conditions and the following disclaimer * in this position and unchanged. * @abstr_number . Redistributions in binary form must reproduce the above copyright * notice, this list of conditions and the following disclaimer in the * documentation and/or other materials provided with the distribution. * @abstr_number . The name of the author may not be used to endorse or promote products * derived from this software withough specific prior written permission * * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. * IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. * * $FreeBSD: src/usr.bin/brandelf/brandelf.c,v @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number @abstr_number : @abstr_number : @abstr_number imp Exp $ */

## makeself - Make self-extractable archives on Unix

neo/sys/linux/setup/makeself/*, neo/sys/linux/setup/makeself/README Copyright (c) St\xe @abstr_number phane Peter Licensing: GPL v @abstr_number 
