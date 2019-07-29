# Tiny Renderer or how OpenGL works: software rendering in @abstr_number lines of code

**Check @abstr_hyperlink for the detailed lessons. My source code is irrelevant. Read the wiki and implement your own renderer. Only when you suffer through all the tiny details you will learn what is going on.**

In this series of articles, I want to show the way OpenGL works by writing its clone (a much simplified one). Surprisingly enough, I often meet people who cannot overcome the initial hurdle of learning OpenGL / DirectX. Thus, I have prepared a short series of lectures, after which my students show quite good renderers.

So, the task is formulated as follows: using no third-party libraries (especially graphic ones), get something like this picture:

@abstr_image 

_Warning: this is a training material that will loosely repeat the structure of the OpenGL library. It will be a software renderer. **I do not want to show how to write applications for OpenGL. I want to show how OpenGL works.** I am deeply convinced that it is impossible to write efficient applications using @abstr_number D libraries without understanding this._

I will try to make the final code about @abstr_number lines. My students need @abstr_number to @abstr_number programming hours to begin making such renderers. At the input, we get a test file with a polygonal wire + pictures with textures. At the output, we’ll get a rendered model. No graphical interface, the program simply generates an image.

Since the goal is to minimize external dependencies, I give my students just one class that allows working with @abstr_hyperlink files. It’s one of the simplest formats that supports images in RGB/RGBA/black and white formats. So, as a starting point, we’ll obtain a simple way to work with pictures. You should note that the only functionality available at the very beginning (in addition to loading and saving images) is the capability to set the color of one pixel.

There are no functions for drawing line segments and triangles. We’ll have to do all of this by hand. I provide my source code that I write in parallel with students. But I would not recommend using it, as this doesn’t make sense. The entire code is available on github, and @abstr_hyperlink you will find the source code I give to my students.

```C++

# include "tgaimage.h"

const TGAColor white = TGAColor( @abstr_number , @abstr_number , @abstr_number , @abstr_number ); const TGAColor red = TGAColor( @abstr_number , @abstr_number , @abstr_number , @abstr_number ); int main(int argc, char** argv) { TGAImage image( @abstr_number , @abstr_number , TGAImage::RGB); image.set( @abstr_number , @abstr_number , red); image.flip_vertically(); // i want to have the origin at the left bottom corner of the image image.write_tga_file("output.tga");` return @abstr_number ; } ```

output.tga should look something like this:

@abstr_image 

# Teaser: few examples made with the renderer

@abstr_image 

@abstr_image 

@abstr_image 

@abstr_image 
