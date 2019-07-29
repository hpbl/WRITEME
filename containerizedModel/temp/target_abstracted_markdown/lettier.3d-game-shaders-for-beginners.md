@abstr_image 

# @abstr_number D Game Shaders For Beginners

Interested in adding textures, lighting, shadows, normal maps, glowing objects, ambient occlusion, and more to your @abstr_number D game? Great! Below is a collection of shading techniques that will take your game visuals to new heights. I've explained each technique in such a way that you can take what you learn here and apply/port it to whatever stack you use—be it Godot, Unity, or something else. For the glue in between the shaders, I've chosen the fabulous Panda @abstr_number D game engine and the OpenGL Shading Language (GLSL). So if that is your stack, then you'll also get the benefit of learning how to use these shading techniques with Panda @abstr_number D and OpenGL specifically.

## Table Of Contents

  * Setup
  * Building The Example Code
  * Running The Demo
  * Reference Frames
  * GLSL
  * Render To Texture
  * Texturing
  * Lighting
  * Normal Mapping
  * Outlining
  * Fog
  * Bloom
  * SSAO
  * SSR
  * Depth Of Field
  * Posterization
  * Cel Shading
  * Pixelization
  * Sharpen
  * Film Grain



## Setup

Below is the setup used to develop and test the example code.

### Environment

The example code was developed and tested using the following environment.

  * Linux manjaro @abstr_number . @abstr_number . @abstr_number - @abstr_number -MANJARO
  * OpenGL renderer string: GeForce GTX @abstr_number /PCIe/SSE @abstr_number 
  * OpenGL version string: @abstr_number . @abstr_number . @abstr_number NVIDIA @abstr_number . @abstr_number 
  * g++ (GCC) @abstr_number . @abstr_number . @abstr_number @abstr_number 
  * Panda @abstr_number D @abstr_number . @abstr_number . @abstr_number - @abstr_number 



### Materials

Each @abstr_hyperlink material used to build `mill-scene.egg` has two textures. The first texture is the normal map and the second is the diffuse map. If an object uses its vertex normals, a "flat blue" normal map is used. By having the same maps in the same positions for all models, the shaders can be generalized and applied to the root node in the scene graph.

:bulb: Note that the scene graph is an @abstr_hyperlink of Panda @abstr_number D.

@abstr_image 

Here is a flat normal map which only contains the `[red = @abstr_number , green = @abstr_number , blue = @abstr_number ]` color. This color represents a unit (length one) normal pointing in the positive z-axis `[ @abstr_number , @abstr_number , @abstr_number ]`.

@abstr_code_section 

Here you see the unit normal `[ @abstr_number , @abstr_number , @abstr_number ]` converted to flat blue `[ @abstr_number , @abstr_number , @abstr_number ]` and flat blue converted to the unit normal.

You'll learn more about this in the Normal Mapping technique.

### Panda @abstr_number D

The example code uses @abstr_hyperlink as the glue between the shaders. This has no real influence over the techniques below, meaning you'll be able to take what you learn here and apply it to your stack or game engine of choice. Panda @abstr_number D does provide some conveniences. I have pointed these out so you can either find an equivalent convenience provided by your stack or replicate it yourself, if your stack doesn't provide something equivalent.

:bulb: Note that `gl-coordinate-system default`, `textures-power- @abstr_number down`, and `textures-auto-power- @abstr_number @abstr_number` were added to `config.prc`. These are not in the default @abstr_hyperlink .

Panda @abstr_number D defaults to a z-up, right-handed coordinate system while OpenGL uses a y-up, right-handed system. `gl-coordinate-system default` keeps you from having to translate between the two inside your shaders. `textures-auto-power- @abstr_number @abstr_number` allows us to use texture sizes that are not a power of two if the system supports it. This comes in handy when doing SSAO and other screen/window sized related techniques since the screen/window size is usually not a power of two. `textures-power- @abstr_number down` downsizes our textures to a power of two if the system only supports texture sizes being a power of two.

## Building The Example Code

If you'd like to run the example code, you'll need to build it first.

:bulb: Note that Panda @abstr_number D works on Linux, Mac, and Windows.

### Linux

Start by @abstr_hyperlink the @abstr_hyperlink for your distribution.

Make sure to locate where the Panda @abstr_number D headers and libraries are. The headers and libraries are most likely in `/usr/include/panda @abstr_number d/` and `/usr/lib/panda @abstr_number d/` respectively.

Next clone this repository and change directory into it.

@abstr_code_section 

Now compile the source code into an object file.

@abstr_code_section 

With the object file created, create the executable by linking the object file to its dependencies.

@abstr_code_section 

For more help, see the @abstr_hyperlink .

### Mac

Start by installing the @abstr_hyperlink for Mac.

Make sure to locate where the Panda @abstr_number D headers and libraries are.

Next clone this repository and change directory into it.

@abstr_code_section 

Now compile the source code into an object file. You'll have to find where the Python @abstr_number . @abstr_number and Panda @abstr_number D include directories are.

@abstr_code_section 

With the object file created, create the executable by linking the object file to its dependencies. You'll need to track down where the Panda @abstr_number D libraries are located.

@abstr_code_section 

For more help, see the @abstr_hyperlink .

### Windows

Start by @abstr_hyperlink the @abstr_hyperlink for Windows.

Make sure to locate where the Panda @abstr_number D headers and libraries are.

Next clone this repository and change directory into it.

@abstr_code_section 

For more help, see the @abstr_hyperlink .

## Running The Demo

After you've built the example code, you can now run the executable or demo.

@abstr_code_section 

Here's how you run it on Linux or Mac.

@abstr_code_section 

Here's how you run it on Windows.

### Keyboard Controls

The demo comes with a few keyboard controls to move the camera around and toggle the various different effects on and off.

### Movement

  * `w` to move into the scene.
  * `a` to rotate the scene clockwise.
  * `s` to move out of the scene.
  * `d` to rotate the scene counterclockwise.



### Toggles

  * `y` to toggle SSAO on.
  * `Shift`+`y` to toggle SSAO off.

  * `u` to toggle outlining on.

  * `Shift`+`u` to toggle outlining off.

  * `i` to toggle bloom on.

  * `Shift`+`i` to toggle bloom off.

  * `o` to toggle normal mapping on.

  * `Shift`+`o` to toggle normal mapping off.

  * `p` to toggle fog on.

  * `Shift`+`p` to toggle fog off.

  * `h` to toggle depth of field on.

  * `Shift`+`h` to toggle depth of field off.

  * `j` to toggle posterization on.

  * `Shift`+`j` to toggle posterization off.

  * `k` to toggle pixelization on.

  * `Shift`+`k` to toggle pixelization off.

  * `l` to toggle sharpen on.

  * `Shift`+`l` to toggle sharpen off.

  * `n` to toggle film grain on.

  * `Shift`+`n` to toggle film grain off.

  * `m` to toggle SSR on.

  * `Shift`+`m` to toggle SSR off.



## Reference Frames

Before you write any shaders, you should be familiar with the following frames of reference or coordinate systems. All of them boil down what origin `( @abstr_number , @abstr_number , @abstr_number )` are these coordinates currently relative to? Once you know that, you can then transform them, via some matrix, to some other vector space if need be. Typically, when the output of some shader looks wrong, it's because of some coordinate system mix up.

### Model

@abstr_image 

The model or object coordinate system is relative to the origin of the model. This is typically set to the center of the model's geometry in a modeling program like Blender.

### World

@abstr_image 

The world space is relative to the origin of the scene/level/universe that you've created.

### View

@abstr_image 

The view or eye coordinate space is relative to the position of the active camera.

### Clip

@abstr_image 

The clip space is relative to the center of the camera's film. All coordinates are now homogeneous, ranging from negative one to one `(- @abstr_number , @abstr_number )`. X and y are parallel with the camera's film and the z coordinate is the depth.

@abstr_image 

Any vertex not within the bounds of the camera's frustum or view volume is clipped or discarded. You can see this happening with the cube towards the back, clipped by the camera's far plane, and the cube off to the side.

### Screen

@abstr_image 

The screen space is (typically) relative to the lower left corner of the screen. X goes from zero to the screen width. Y goes from zero to the screen height.

## GLSL

Instead of using the fixed-function pipeline, you'll be using the programmable GPU rendering pipeline. Since it is programmable, it is up to you to supply the programming in the form of shaders. A shader is a (typically small) program you write using a syntax reminiscent of C. The programmable GPU rendering pipeline has various different stages that you can program with shaders. The different types of shaders include vertex, tessellation, geometry, fragment, and compute. You'll only need to focus on the vertex and fragment stages for the techniques below.

@abstr_code_section 

Here is a bare-bones GLSL shader consisting of the GLSL version number and the main function.

@abstr_code_section 

Here is a stripped down GLSL vertex shader that transforms an incoming vertex to clip space and outputs this new position as the vertex's homogeneous position. The `main` procedure doesn't return anything since it is `void` and the `gl_Position` variable is a built-in output.

:bulb: Note the two keywords `uniform` and `in`. The `uniform` keyword means this global variable is the same for all vertexes. Panda @abstr_number D sets the `p @abstr_number d_ModelViewProjectionMatrix` for you and it is the same matrix for each vertex. The `in` keyword means this global variable is being given to the shader. The vertex shader receives each vertex that makes up the geometry the vertex shader is attached to.

@abstr_code_section 

Here is a stripped down GLSL fragment shader that outputs the fragment color as solid green. Keep in mind that a fragment affects at most one screen pixel but a single pixel can be affected by many fragments.

:bulb: Note the keyword `out`. The `out` keyword means this global variable is being set by the shader. The name `fragColor` is arbitrary so feel free to choose a different one.

@abstr_image 

This is the output of the two shaders shown above.

## Render To Texture

Instead of rendering/drawing/painting directly to the screen, the example code uses a technique called "render to texture". In order to render to a texture, you'll need to set up a framebuffer and bind a texture to it. Multiple textures can be bound to a single framebuffer.

The textures bound to the framebuffer hold the vector(s) returned by the fragment shader. Typically these vectors are color vectors `(r, g, b, a)` but they could also be position or normal vectors `(x, y, z, w)`. For each bound texture, the fragment shader can output a different vector. For example you could output a vertex's position and normal in a single pass.

Most of the example code dealing with Panda @abstr_number D involves setting up @abstr_hyperlink . To keep things straightforward, each fragment shader in the example code has only one output. However, you'll want to output as much as you can each render pass to keep your frames per second (FPS) high.

There are two framebuffer texture setups found in the example code.

@abstr_image 

The first setup renders the mill scene into a framebuffer texture using a variety of vertex and fragment shaders. This setup will go through each of the mill scene's vertexes and corresponding fragments.

In this setup, the example code performs the following.

  * Stores geometry data (like vertex position or normal) for later use.
  * Stores material data (like the diffuse color) for later use.
  * UV maps the various textures (diffuse, normal, shadow, etc.).
  * Calculates the ambient, diffuse, specular, and emission lighting.
  * Renders the fog.



@abstr_image 

The second setup is an orthographic camera pointed at a screen-shaped rectangle. This setup will go through just the four vertexes and their corresponding fragments.

In this second setup, the example code performs the following.

  * Manipulates the output of another framebuffer texture.
  * Combines various framebuffer textures into one.



In the example code, you can see the output of a particular framebuffer texture by setting its corresponding flag to true and the others to false.

@abstr_code_section 

## Texturing

@abstr_image 

Texturing involves mapping some color or some other kind of vector to a fragment using UV coordinates. Both U and V range from zero to one. Each vertex gets a UV coordinate and this is outputted in the vertex shader.

@abstr_image 

The fragment shader receives the UV coordinate interpolated. Interpolated meaning the UV coordinate for the fragment is somewhere between the UV coordinates for the vertexes that make up the triangle face.

### Vertex

@abstr_code_section 

Here you see the vertex shader outputting the texture coordinate to the fragment shader. Notice how it's a two dimensional vector. One dimension for U and one for V.

### Fragment

@abstr_code_section 

Here you see the fragment shader looking up the color at its UV coordinate and outputting that as the fragment color.

#### Screen Filled Texture

@abstr_code_section 

When performing render to texture, the mesh is a flat rectangle with the same aspect ratio as the screen. Because of this, you can calculate the UV coordinates knowing only A) the width and height of the screen sized texture being UV mapped to the rectangle and B) the fragment's x and y coordinate. To map x to U, divide x by the width of the input texture. Similarly, to map y to V, divide y by the height of the input texture. You'll see this technique used in the example code.

## Lighting

@abstr_image 

Completing the lighting involves calculating and combining the ambient, diffuse, specular, and emission light aspects. The example code uses Phong lighting.

### Vertex

@abstr_code_section 

For every light, minus the ambient light, Panda @abstr_number D gives you this convenient struct which is available to both the vertex and fragment shaders. The biggest convenience being the shadow map and shadow view matrix for transforming vertexes to shadow or light space.

@abstr_code_section 

Starting in the vertex shader, you'll need to transform and output the vertex from view space to shadow or light space for each light in your scene. You'll need this later in the fragment shader in order to render the shadows. Shadow or light space is where every coordinate is relative to the light position (the light is the origin).

### Fragment

The fragment shader is where most of the lighting calculations take place.

#### Material

@abstr_code_section 

Panda @abstr_number D gives us the material (in the form of a struct) for the mesh or model you are currently rendering.

#### Multiple Lights

@abstr_code_section 

Before you loop through the scene's lights, create an accumulator that will hold both the diffuse and specular colors.

@abstr_code_section 

Now you can loop through the lights, calculating the diffuse and specular colors for each one.

#### Light Related Vectors

@abstr_image 

Here you see the four major vectors you'll need to calculate the diffuse and specular colors contributed by each light. The light direction vector is the light blue arrow pointing to the light. The normal vector is the green arrow standing straight up. The reflection vector is the dark blue arrow mirroring the light direction vector. The eye or view vector is the orange arrow pointing towards the camera.

@abstr_code_section 

The light direction is from the vertex's position to the light's position.

Panda @abstr_number D sets `p @abstr_number d_LightSource[i].position.w` to zero if this is a directional light. Directional lights do not have a position as they only have a direction. So if this is a directional light, the light direction will be the negative or opposite direction of the light as Panda @abstr_number D sets `p @abstr_number d_LightSource[i].position.xyz` to be `-direction` for directional lights.

@abstr_code_section 

You'll need the vertex normal to be a unit vector. Unit vectors have a length of magnitude of one.

@abstr_code_section 

Next you'll need three more vectors.

You'll need to take the dot product involving the light direction so its best to normalize it. This gives it a distance or magnitude of one (unit vector).

The eye direction is the opposite of the vertex/fragment position since the vertex/fragment position is relative to the camera's position. Remember that the vertex/fragment position is in view space. So instead of going from the camera (eye) to the vertex/fragment, you go from the vertex/fragment to the eye (camera).

The @abstr_hyperlink is a reflection of the light direction at the surface normal. As the light "ray" hits the surface, it bounces off at the same angle it came in at. The angle between the light direction vector and the normal is known as the "angle of incidence". The angle between the reflection vector and the normal is known as the "angle of reflection".

You'll have to negate the reflected light vector as it needs to point in the same direction as the eye vector. Remember the eye direction is from the vertex/fragment to the camera position. You'll use the reflection vector to calculate the intensity of the specular highlight.

#### Diffuse

@abstr_code_section 

The diffuse intensity is the dot product between the surface normal and the unit vector light direction. The dot product can range from negative one to one. If both vectors point in the same direction, the intensity is one. Any other case will be less than one.

@abstr_image 

As the light vector approaches the same direction as the normal, the diffuse intensity approaches one.

:bulb: Note that if the diffuse intensity is zero or less, move on to the next light.

@abstr_code_section 

You can now calculate the diffuse color contributed by this light. If the diffuse intensity is one, the diffuse color will be a mix between the diffuse texture color and the lights color. Any other intensity will cause the diffuse color to be darker.

:bulb: Note how I clamp the diffuse color to be only as bright as the diffuse texture color is. This will protect the scene from being over exposed.

#### Specular

After diffuse, comes specular.

@abstr_image 

@abstr_code_section 

The specular intensity is the dot product between the eye vector and the reflection vector. As with the diffuse intensity, if the two vectors point in the same direction, the specular intensity is one. Any other intensity will diminish the amount of specular color contributed by this light.

@abstr_image 

The material shininess determines how spread out the specular highlight is. This is typically set in a modeling program like Blender. In Blender it's known as the specular hardness.

#### Spotlights

@abstr_code_section 

This snippet keeps fragments outside of a spotlight's cone or frustum from being affected by the light. Fortunately, Panda @abstr_number D @abstr_hyperlink `spotDirection` and `spotCosCutoff` to also work for directional lights and points lights. Spotlights have both a position and direction. However, directional lights have only a direction and point lights have only a position. Still, this code works for all three lights avoiding the need for noisy if statements.

@abstr_code_section 

For a spotlight, if the dot product between the fragment-to-light vector and the spotlight's direction vector is less than the cosine of half the spotlight's field of view angle, the shader disregards this light's influence.

:bulb: Note that you must negate `unitLightDirection`. `unitLightDirection` goes from the fragment to the spotlight and you need it to go from the spotlight to the fragment since the `spotDirection` goes directly down the center of the spotlight's frustum some distance away from the spotlight's position.

For directional lights and point lights, Panda @abstr_number D sets `spotCosCutoff` to negative one. Recall that the dot product ranges from negative one to one. So it doesn't matter what the `unitLightDirectionDelta` is because it will always be greater than or equal to negative one.

@abstr_code_section 

Like the `unitLightDirectionDelta` snippet, this snippet also works for all three light types. For spotlights, this will make the fragments brighter as you move closer to the center of the spotlight's frustum. For directional lights and point lights, `spotExponent` is zero. Recall that anything to the power of zero is one so the diffuse color is one times itself meaning it is unchanged.

#### Shadows

@abstr_code_section 

Panda @abstr_number D makes applying shadows relatively easy by providing the shadow map and shadow transformation matrix for every scene light. To create the shadow transformation matrix yourself, you'll need to assemble a matrix that transforms view space coordinates to light space (coordinates are relative to the light's position). To create the shadow map yourself, you'll need to render the scene from the perspective of the light to a framebuffer texture. The framebuffer texture must hold the distances from the light to the fragments. This is known as a "depth map". Lastly, you'll need to manually give to your shader your DIY depth map as a `uniform sampler @abstr_number DShadow` and your DIY shadow transformation matrix as a `uniform mat @abstr_number`. At this point, you've recreated what Panda @abstr_number D does for you automatically.

The shadow snippet shown uses `textureProj` which is different from the `texure` function shown earlier. `textureProj` first divides `vertexInShadowSpaces[i].xyz` by `vertexInShadowSpaces[i].w`. After this, it uses `vertexInShadowSpaces[i].xy` to locate the depth stored in the shadow map. Next it uses `vertexInShadowSpaces[i].z` to compare this vertex's depth against the shadow map depth at `vertexInShadowSpaces[i].xy`. If the comparison passes, `textureProj` will return one. Otherwise, it will return zero. Zero meaning this vertex/fragment is in the shadow and one meaning this vertex/fragment is not in the shadow.

:bulb: Note that `textureProj` can also return a value between zero and one depending on how the shadow map was set up. In this instance, `textureProj` performs multiple depth tests using neighboring depth values and returns a weighted average. This weighted average can give shadows a softer look.

#### Attenuation

@abstr_image 

@abstr_code_section 

The light's distance is just the magnitude or length of the light direction vector. Notice it's not using the normalized light direction as that distance would be one.

You'll need the light distance to calculate the attenuation. Attenuation meaning the light's influence diminishes as you get further away from it.

You can set `constantAttenuation`, `linearAttenuation`, and `quadraticAttenuation` to whatever values you would like. A good starting point is `constantAttenuation = @abstr_number`, `linearAttenuation = @abstr_number`, and `quadraticAttenuation = @abstr_number`. With these settings, the attenuation is one at the light's position and approaches zero as you move further away.

#### Final Light Color

@abstr_code_section 

To calculate the final light color, add the diffuse and specular together. Be sure to add this to the accumulator as you loop through the scene's lights.

#### Ambient

@abstr_code_section 

The ambient component to the lighting model is based on the material's ambient color, the ambient light's color, and the diffuse texture color.

There should only ever be one ambient light so this calculation only needs to occur once versus how the diffuse and specular color was accumulated for each spot/directional/point light.

:bulb: Note that you'll revisit the ambient color when performing SSAO.

#### Putting It All Together

@abstr_code_section 

The final color is the sum of the ambient color, diffuse color, specular color, and the emission color.

### Source

  * main.cxx
  * base.vert
  * base.frag



## Normal Mapping

@abstr_image 

Normal mapping allows you to add surface details without adding any geometry. Typically, in a modeling program like Blender, you create a high poly and a low poly version of your mesh. You take the vertex normals from the high poly mesh and bake them into a texture. This texture is the normal map. Then inside the fragment shader, you replace the low poly mesh's vertex normals with the high poly mesh's normals you baked into the normal map. Now when you light your mesh, it will appear to have more polygons than it really has. This will keep your FPS high while at the same time retain most of the details from the high poly version.

@abstr_image 

Here you see the progression from the high poly model to the low poly model to the low poly model with the normal map applied.

@abstr_image 

Keep in mind though, normal mapping is only an illusion. After a certain angle, the surface will look flat again.

### Vertex

@abstr_code_section 

Starting in the vertex shader, you'll need to output to the fragment shader the normal vector, binormal vector, and the tangent vector. These vectors are used, in the fragment shader, to transform the normal map normal from tangent space to view space.

`p @abstr_number d_NormalMatrix` transforms the vertex normal, binormal, and tangent vectors to view space. Remember that in view space, all of the coordinates are relative to the camera's position.

> [p @abstr_number d_NormalMatrix] is the upper @abstr_number x @abstr_number of the inverse transpose of the ModelViewMatrix. It is used to transform the normal vector into view-space coordinates.   
>    
>  @abstr_hyperlink 

@abstr_code_section 

@abstr_image 

You'll also need to output, to the fragment shader, the UV coordinates for the normal map.

### Fragment

Recall that the vertex normal was used to calculate the lighting. However, the normal map provides us with different normals to use when calculating the lighting. In the fragment shader, you need to swap out the vertex normals for the normals found in the normal map.

@abstr_code_section 

Using the normal map coordinates the vertex shader sent, pull out the normal from the normal map.

@abstr_code_section 

Earlier I showed how the normals are mapped to colors to create the normal map. Now this process needs to be reversed so you can get back the original normals that were baked into the map.

@abstr_code_section 

Here's the process for unpacking the normals from the normal map.

@abstr_code_section 

The normals you get back from the normal map are typically in tangent space. They could be in another space, however. For example, Blender allows you to bake the normals in tangent, object, world, or camera space.

@abstr_image 

To take the normal map normal from tangent space to view pace, construct a three by three matrix using the tangent, binormal, and vertex normal vectors. Multiply the normal by this matrix and be sure to normalize it.

At this point, you're done. The rest of the lighting calculations are the same.

### Source

  * main.cxx
  * base.vert
  * base.frag



## Outlining

@abstr_image 

Outlining your scene's geometry can give your game a distinctive look, reminiscent of comic books and cartoons.

### Material Diffuse

The outline shader needs an input texture for detecting and coloring in the edges. Candidates for this input texture include the diffuse color from materials, the colors from the diffuse textures, the normals from the vertexes, or even the colors from the normal maps.

@abstr_code_section 

Here you see a small fragment shader that renders the geometry's material diffuse color into a framebuffer texture. This material diffuse framebuffer texture will be the input texture to the outline shader.

@abstr_image 

This is the material diffuse framebuffer texture showing the colors that were set in Blender. The outline shader will detect the edges in the scene and color them in.

:bulb: Note that using the material diffuse color won't work unless the distinctive pieces of the scene have their own material diffuse color.

### Creating The Edges

@abstr_image 

Creating the edges is similar to using the edge-detect filters in @abstr_hyperlink .

For this shading technique, all of the calculations take space inside a fragment shader. The vertex shader for outlining only needs to output the four vertexes for the screen shaped rectangle mesh.

@abstr_code_section 

Before you detect the edges, you'll need to set up the input texture you'll operate on. Since the texture is the size of the screen, you can calculate the UV coordinates knowing the fragment's coordinates and the size of the input texture.

@abstr_code_section 

One parameter you can tweak, according to your taste, is the `separation`. The larger the separation, the larger the edges or lines are.

@abstr_code_section 

@abstr_image 

The edge detection technique works by finding changes in the colors of the input texture. Centered on the current fragment, it uses a @abstr_number x @abstr_number fragment window to find the brightest and darkest color among the nine samples. It then subtracts the two color's intensities giving it a difference. If there is any difference, it makes the difference one.

@abstr_code_section 

This difference is used in the alpha channel of the outputted color. So if there is no difference, no edge or line is drawn. Where there is a difference, an edge is drawn.

@abstr_code_section 

Feel free to adjust the threshold. Currently the threshold is zero. Anything over zero becomes an edge. But you could change this to something else. This will be particularly helpful for more noisy input textures with small differences everywhere. In the case of a noisy input texture, you'd only want to outline the large differences.

### Source

  * main.cxx
  * base.vert
  * basic.vert
  * material-diffuse.frag
  * outline.frag



## Fog

@abstr_image 

Fog (or mist as it's called in Blender) adds atmospheric haze to a scene, providing mystique and softening pop-ins. A pop-in occurs when some geometry suddenly enters into the camera's frustum.

@abstr_code_section 

Panda @abstr_number D provides a nice data structure that holds all of the fog parameters but you can pass this to your shader manually.

@abstr_code_section 

The example code uses a linear model for calculating the fog's intensity as you move further away from the camera. There's also an exponential model you could use. The fog's intensity is zero before or at the start of the fog. As the vertex position gets closer to the end of the fog, the `fogIntensity` moves closer to one. For any vertexes after the end of the fog, the `fogIntensity` is clamped to @abstr_number .

@abstr_code_section 

Based on the fog intensity, mix the fog color with the output color. As `fogIntensity` gets closer to one, you'll have less of the `outputColor` and more of the fog color. When `fogIntensity` reaches one, you'll have all fog color and no output color

### Outline Fog

@abstr_image 

@abstr_code_section 

The outline shader also uses fog to color the edges for a more consistent look. If it didn't, it would outline geometry obscured by the fog which tends to look odd. It does, however, still outline the very outer edges of the mill scene's geometry since the edges extend out past the geometry where there are no vertex positions.

`positionTexture` is a framebuffer texture that holds the view space vertex positions. You'll learn about this when implementing the SSAO shader.

### Source

  * main.cxx
  * base.vert
  * basic.vert
  * base.frag
  * outline.frag



## Bloom

@abstr_image 

Adding bloom to a scene can really sell the illusion of the lighting model. Light emitting objects are more believable and specular highlights get an extra dose of shimmer.

@abstr_code_section 

Feel free to tweak these parameters to your liking. Separation increases the size of the blur. Samples determines how blurred the effect is. Threshold controls what does and does not get picked up by the effect. Amount controls how much bloom is outputted.

@abstr_code_section 

The technique starts off by running through a `samples` by `samples` window centered over the current fragment. This is similar to the window used for outlining.

@abstr_code_section 

It retrieves the color from the input texture and turns the red, green, and blue values into a greyscale value. If this greyscale value is less than the threshold, it discards this color by making it solid black.

As it loops through all the samples in the window, it accumulates all of their values into `result`.

@abstr_code_section 

After it's done gathering up the samples, it divides the sum of the color samples by the number of samples taken. The result is the average color of itself and its neighbors. By doing this for every fragment, you end up with a blurred image. This form of blurring is known as box blur.

@abstr_image 

Here you see the progression of the bloom algorithm.

### Source

  * main.cxx
  * basic.vert
  * bloom.frag



## Screen Space Ambient Occlusion (SSAO)

@abstr_image 

SSAO is one of those effects you never knew you needed and can't live without once you have it. It can take a scene from mediocre to wow! For fairly static scenes, you can bake ambient occlusion into a texture but for more dynamic scenes, you'll need a shader. SSAO is one of the more fairly involved shading techniques, but once you pull it off, you'll feel like a shader master.

:bulb: Note that "screen space" ambient occlusion is a bit of a misnomer as not all of the calculations are done in screen space.

### Inputs

The SSAO shader will need the following inputs.

  * Vertex position vectors in view space.
  * Vertex normal vectors in view space.
  * Sample vectors in tangent space.
  * Noise vectors in tangent space.
  * The camera lens' projection matrix.



### Position

@abstr_image 

Storing the vertex positions into a framebuffer texture is not a necessity. You can recreate them from the @abstr_hyperlink . This being a beginners guide, I'll avoid this optimization and keep it straight forward. Feel free to use the depth buffer, however, for your implementation.

@abstr_code_section 

If you do decide to use the depth buffer, here's how you can set it up using Panda @abstr_number D.

@abstr_code_section 

Here's the simple shader used to render out the view space vertex positions into a framebuffer texture. The more involved work is setting up the framebuffer texture such that the fragment vector components it receives are not clamped to `[ @abstr_number , @abstr_number ]` and that each one has a high enough precision (a high enough number of bits). For example, if a particular interpolated vertex position is `<- @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number >`, you don't want it stored into the texture as `< @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number >`.

@abstr_code_section 

Here's how the example code sets up the framebuffer texture to store the vertex positions. It wants @abstr_number bits per red, green, blue, and alpha components and disables clamping the values to `[ @abstr_number , @abstr_number ]` The `set_rgba_bits( @abstr_number , @abstr_number , @abstr_number , @abstr_number )` call sets the bits and also disables the clamping.

@abstr_code_section 

Here's the equivalent OpenGL call. `GL_RGB @abstr_number F` sets the bits and also disables the clamping.

> If the color buffer is fixed-point, the components of the source and destination values and blend factors are each clamped to [ @abstr_number , @abstr_number ] or [− @abstr_number , @abstr_number ] respectively for an unsigned normalized or signed normalized color buffer prior to evaluating the blend equation. If the color buffer is floating-point, no clamping occurs.   
>    
>  @abstr_hyperlink 

@abstr_image 

Here you see the vertex positions with y being the up vector.

Recall that Panda @abstr_number D sets z as the up vector but OpenGL uses y as the up vector. The position shader outputs the vertex positions with z being up since Panda @abstr_number D was configured with `gl-coordinate-system default`.

### Normal

@abstr_image 

You'll need the vertex normals to correctly orient the samples you'll take in the SSAO shader. The example code generates multiple sample vectors distributed in a hemisphere but you could use a sphere and do away with the need for normals all together.

@abstr_code_section 

Like the position shader, the normal shader is simple as well. Be sure to normalize the vertex normal and remember that they are in view space.

@abstr_image 

Here you see the vertex normals with y being the up vector.

Recall that Panda @abstr_number D sets z as the up vector but OpenGL uses y as the up vector. The normal shader outputs the vertex positions with z being up since Panda @abstr_number D was configured with `gl-coordinate-system default`.

@abstr_image 

Here you see SSAO being used with the normal maps instead of the vertex normals. This adds an extra level of detail and will pair nicely with the normal mapped lighting.

@abstr_code_section 

To use the normal maps instead, you'll need to transform the normal mapped normals from tangent space to view space just like you did in the lighting calculations.

### Samples

To determine the amount of ambient occlusion for any particular fragment, you'll need to sample the surrounding area.

@abstr_code_section 

The example code generates @abstr_number random samples distributed in a hemisphere. These `ssaoSamples` will be sent to the SSAO shader.

@abstr_code_section 

If you'd like to distribute your samples in a sphere instead, change the random z component to range from negative one to one.

### Noise

@abstr_code_section 

To get a good sweep of the sampled area, you'll need to generate some noise vectors. These noise vectors will rotate the samples around the top of the surface.

### Ambient Occlusion

@abstr_image 

SSAO works by sampling the view space around a fragment. The more samples that are below a surface, the darker the fragment color. These samples are positioned at the fragment and pointed in the general direction of the vertex normal. Each sample is used to look up a position in the position framebuffer texture. The position returned is compared to the sample. If the sample is farther away from the camera than the position, the sample counts towards the fragment being occluded.

@abstr_image 

Here you see see the space above the surface being sampled for occlusion.

@abstr_code_section 

Like some of the other techniques, the SSAO shader has a few control knobs you can tweak to get the exact look you're going for. The `bias` adds to the sample's distance from the camera. You can use the bias to combat "acne". The `radius` increases or decreases the coverage area of the sample space. The `magnitude` either lightens or darkens the occlusion map. The `contrast` either washes out or increases the starkness of the occlusion map.

@abstr_code_section 

Retrieve the position, normal, and random vector for later use. Recall that the example code created @abstr_number random vectors. The random vector is chosen based on the current fragments screen position.

@abstr_code_section 

Using the random and normal vectors, assemble the tangent, binormal, and normal matrix. You'll need this matrix to transform the sample vectors from tangent space to view space.

@abstr_code_section 

With the matrix in hand, the shader can now loop through the samples, subtracting how many are not occluded.

@abstr_code_section 

Using the matrix, position the sample near the vertex/fragment position and scale it by the radius.

@abstr_code_section 

Using the sample's position in view space, transform it from view space to clip space to UV space.

@abstr_code_section 

Recall that clip space components range from negative one to one and that UV coordinates range from zero to one. To transform clip space coordinates to UV coordinates, multiply by one half and add one half.

@abstr_code_section 

Using the offset UV coordinates, created by projecting the @abstr_number D sample onto the @abstr_number D position texture, find the corresponding position vector. This takes you from view space to clip space to UV space back to view space. The shader takes this round trip to find out if some geometry is behind, at, or in front of this sample. If the sample is in front of or at some geometry, this sample doesn't count towards the fragment being occluded. If the sample is behind some geometry, this sample counts towards the fragment being occluded.

@abstr_code_section 

Now weight this sampled position by how far it is inside or outside the radius. Finally, subtract this sample from the occlusion factor since it assumes all of the samples are occluded before the loop.

@abstr_code_section 

Divide the occluded count by the number of samples to scale the occlusion factor from `[ @abstr_number , NUM_SAMPLES]` to `[ @abstr_number , @abstr_number ]`. Zero means full occlusion and one means no occlusion. Now assign the occlusion factor to the fragment's color and you're done.

:bulb: Note that the example code sets the alpha channel to the position framebuffer texture's alpha to avoid occluding the background.

### Blurring

@abstr_image 

The SSAO framebuffer texture is a bit noisy so you'll want to blur it in order to smooth it out.

@abstr_code_section 

The SSAO blurring shader is a simple blox blur. Like the bloom shader, it passes a window over the input texture and averages each fragment with its neighbors.

:bulb: Note that `parameters.x` is the separation parameter.

### Ambient Color

@abstr_code_section 

The final stop for SSAO is back in the lighting calculation. Here you see the occlusion factor being looked up in the SSAO framebuffer texture and then included in the ambient light calculation.

### Source

  * main.cxx
  * base.vert
  * basic.vert
  * position.frag
  * normal.frag
  * ssao.frag
  * blur.frag



## Screen Space Reflection (SSR)

@abstr_image 

Adding reflections can really ground your scene. Wet and shiny objects spring to life as nothing makes something look wet or shiny quite like reflections. With reflections, you can really sell the illusion of water and metallic objects.

In the lighting section, you simulated the reflected, mirror-like, image of the light source. This was the process of rendering the specular reflection. Recall that the specular light was computed using the reflected light direction. Similarly, using screen space reflection or SSR, you can simulate the reflection of other objects in the scene instead of just the light source. Instead of the light ray coming from the source and bouncing off into the camera, the light ray comes from some object in the scene and bounces off into the camera.

SSR works by reflecting the screen image onto itself using only itself. Compare this to cube mapping which uses six screens or textures. In cube mapping, you reflect a ray from some point in your scene to some point on the inside of a cube surrounding your scene. In SSR, you reflect a ray from some point on your screen to some other point on your screen. By reflecting your screen onto itself, you can create the illusion of reflection. This illusion holds for the most part but SSR does fail in some cases as you'll see.

### Vertex Positions And Normals

Like SSAO, you'll need the vertex positions and normals in view space. Referrer back to SSAO for details.

:bulb: Note that you can use the depth map for this technique instead of the vertex positions.

@abstr_image 

Here you see SSR using the normal mapped normals instead of the vertex normals. Notice how the reflection follows the ripples in the water versus the more mirror like reflection shown earlier.

To use the normal maps instead, you'll need to transform the normal mapped normals from tangent space to view space just like you did in the lighting calculations. You can see this being done in normal.frag.

### UV To View To Clip To UV To View

@abstr_image 

Just like SSAO, SSR goes back and forth between the screen and view space. You'll need the camera lens' projection matrix to transform points in view space to clip space. From clip space, you'll have to transform the points again to UV space. Once in UV space, you can pull out an actual, camera captured, vertex/fragment position closest to a point you wish to compare. This is the _screen space_ part in _screen space reflection_ since the "screen" is a texture UV mapped over a screen shaped rectangle.

### Reflected UVs

There are a few ways you can implement SSR. The example code computes a reflected UV coordinate for each screen fragment but you could compute the reflected color instead, using the final rendering of the scene.

Recall that UV coordinates range from zero to one for both U and V. The screen is just one @abstr_number D texture UV mapped over a screen sized rectangle. Knowing this, the example code doesn't actually need the final rendering of the scene to compute the reflections. It can instead calculate what UV coordinate each fragment gets or will get. These calculated UV coordinates can be saved to a framebuffer texture and used later when the scene has been rendered.

@abstr_image 

Here you see the reflected UV coordinates. Without even rendering the scene yet, you can get a good feel for what the reflections will look like.

@abstr_code_section 

Recall that you'll need the camera lens' projection matrix and the positions and normals, in view space, for each vertex.

@abstr_code_section 

Like the other effects, SSR has a few parameters you can adjust. Increasing the `steps` will increase the resolution of the reflections at the cost of performance. Increasing the `maxDistance` will keep reflections from being cut off prematurely at the cost of performance. The `thickness` controls the cutoff between what counts as a possible reflection and what does not.

@abstr_code_section 

Pull out the vertex position, normal, and the reflection about the normal. The position is a vector from the camera position to the vertex position. The normal is a vector pointing out of the surface at the vertex position. And the reflection is a ray pointing in the direction of the reflection of the position ray. It currently has a length or magnitude of one.

@abstr_image 

Here you see ray marching being used to calculate the reflected UV coordinate per fragment. The vertex normal is the bright green arrow, the position vector is the bright blue arrow, and the bright red vector is the reflection ray marching through view space.

@abstr_code_section 

Ray marching is the process of increasing the magnitude or length of a vector over a number of iterations or steps. The purpose for extending a ray out is to find an intersection or hit. A hit meaning the ray touched some geometry in the scene.

@abstr_code_section 

Initialize the reflected coordinate to fully transparent black. If the marching ray doesn't hit any geometry, this will be set as the fragment color meaning this fragment reflects nothing.

@abstr_code_section 

Begin to step through the marching process. At the start of each step or iteration, calculate the distance or length you'll move to. If you go over the `maxDistance`, exit the marching process.

@abstr_code_section 

Now generate a sample vector by first extending the length of the reflection vector and then adding this result to the position vector. This is the point in view space you'll use to sample the screen texture.

@abstr_image 

@abstr_code_section 

Convert the sample point to clip space and then to UV space.

@abstr_image 

@abstr_code_section 

One of the cases where SSR fails is when the reflection vector extends past the camera's frustum. If this is the case, stop ray marching.

@abstr_code_section 

Pull out the actual, camera-captured vertex position at the sample point.

@abstr_code_section 

If the sample point's scene depth touches or penetrates the "wall" of some scene geometry, count this as a hit.

@abstr_image 

Here you see another failure case for SSR. The reflection ray points in the general direction of the camera and hits a piece of geometry. The screen captured only the front of the plane, not the back of the plane. This hit says the back wall should reflect the back of the plane, which is correct, but the screen doesn't have this information. What this would do instead is reflect the front of the plane on the back wall which wouldn't look right.

@abstr_code_section 

To handle this failure case, you'll need to gradually fade out the reflection based on how much the reflection vector points to the camera's position. If the reflection vector points directly in the opposite direction of the position vector, the visibility is zero. Any other direction results in the visibility being greater than zero.

:bulb: Note that `uPosition` is the position vector with a length of one. When taking the `dot` production, both vectors should be normalized.

@abstr_code_section 

Since this was a hit, store the reflected UV coordinates for this fragment. You can use the blue channel to store the visibility since you only need two channels to store the reflected UV coordinate.

@abstr_code_section 

Now that you've hit some geometry, go back (to where you didn't hit anything) and approach this hit at a slower pace using a smaller step size. This will increase the precision of the reflection. What you want to do is find the surface of the most immediate piece of geometry in the path of the reflection ray. When the ray first starts off, it leaps through the scene, possibly passing over multiple surfaces in a single iteration. What this will do is back the ray up to where it didn't hit anything and have it tip toe up to where it hit last in the hopes of finding a closer surface point.

@abstr_code_section 

If you didn't hit anything, increase the count which will increase the distance in the next iteration.

@abstr_code_section 

In the end, assign the fragment color the last known reflected UV or hit.

### Material Specular

@abstr_image 

In addition to the reflected UV coordinates, you'll also need a specular map. The example code creates one using the fragment's material specular properties.

@abstr_code_section 

The specular fragment shader is quite simple. Using the fragment's material, the shader outputs the specular color and uses the alpha channel for the shininess. The shininess is mapped to a range of zero to one. In Blender, the maximum specular hardness or shininess is @abstr_number . When exporting from Blender to Panda @abstr_number D, @abstr_number is exported as @abstr_number . @abstr_number . Feel free to adjust the shininess to range of zero to one however you see fit for your particular stack.

### Reflection

@abstr_image 

Here you see just the reflections saved to a framebuffer texture. This step isn't necessary as you can perform this step during the combination step but the example code performs it separately for simplicity and readability.

@abstr_code_section 

You'll need the texture that you'll be reflecting. This is usually the final rendering of your scene. Beyond that, you'll need the specular map and the reflected UV coordinates map.

@abstr_code_section 

Pull out the various colors you'll need. The reflection color is the color at the reflected UV coordinate (`ssrColor.xy`) in the reflected texture.

@abstr_code_section 

Map the specular color to a greyscale value.

@abstr_code_section 

The fragment color is a mix between black and the reflection color based on the reflection's visibility and the specular value of the material.

Recall that you used the blue channel to store the visibility of the reflection. This visibility, multiplied by the specular value, determines the perceptibility of the reflection. Doing it this way allows you to control how much a material reflects its environment simply by brightening or darkening the specular color.

:bulb: Note that the example code generated a specular map from the material specular properties but you could create one in GIMP, for example, and attach that as a texture to your @abstr_number D model. For instance, say your @abstr_number D treasure chest has shiny brackets on it but nothing else should reflect the environment. You can paint the brackets some shade of gray and the rest of the treasure chest black. This will mask off the brackets, allowing your shader to render the reflections on only the brackets and nothing else.

### Reflection Blur

@abstr_image 

Here you see the reflection framebuffer texture blurred. Like the reflection step, this step could be done in the combination step but was isolated for simplicity and readability.

The blurring is done using a box blur. Refer to the SSAO blurring step for details.

### Combination

@abstr_code_section 

You'll need your screen texture, the specular map texture, the reflection texture, and the blurred reflection texture.

@abstr_code_section 

Pull out the various colors you'll need.

@abstr_code_section 

Recall that you stored the shininess in the alpha channel of the specular map. The shininess determined how spread out or blurred the specular reflection was. Similarly, the `roughness` determines how blurred the reflection is. A roughness of one will produce the blurred reflection color. A roughness of zero will produce the non-blurred reflection color. Doing it this way allows you to control how blurred the reflection is just by chaning the material's shininess value.

:bulb: Note that the example code generated a roughness map from the material specular properties but you could create one in GIMP, for example, and attach that as a texture to your @abstr_number D model. For instance, say you have a tiled floor that has polished tiles and scratched up tiles. The polished tiles could be painted a dark gray while the scratched up tiles could be painted white. The brighter the greyscale value, the more the shader will use the blurred reflected color. So the scratched tiles will have a blurry reflection but the polished tiles will have a mirror-like reflection.

@abstr_code_section 

The final step is to assign the fragment color a mix between the screen color and the reflected screen color based on the alpha channels of the reflection and blurred reflection colors.

### Source

  * main.cxx
  * base.vert
  * basic.vert
  * position.frag
  * normal.frag
  * ssr.frag
  * reflection.frag
  * blur.frag
  * combine.frag



## Depth Of Field

@abstr_image 

Like SSAO, depth of field is an effect you can't live without once you've used it. Artistically, you can use it to draw your viewer's eye to a certain subject. But in general, depth of field adds a lot of realism for a little bit of effort.

### In Focus

The first step is to render your scene completely in focus. Be sure to render this into a framebuffer texture. This will be one of the inputs to the depth of field shader.

### Out Of Focus

@abstr_code_section 

The second step is to blur the scene as if it was completely out of focus. Like bloom and SSAO, you can use a box blur. Be sure to render this out-of-focus-scene into a framebuffer texture. This will be one of the inputs to the depth of field shader.

:bulb: Note that `parameters.x` is the separation parameter.

### Mixing

@abstr_image 

@abstr_code_section 

Feel free to tweak these two parameters. `focalLengthSharpness` affects how out of focus the scene is at the focal length. The smaller `focalLengthSharpness` is, the more out of focus the scene is at the focal length. `blurRate` affects how fast the scene blurs as it moves away from the focal length. The smaller the `blurRate` is, the less blurry the scene is as you move away from the focal point.

@abstr_code_section 

You'll need the in focus and out of focus colors.

@abstr_code_section 

You'll also need the vertex position in view space. You can reuse the position framebuffer texture you used for SSAO.

@abstr_code_section 

Here's the actual mixing. The closer `blur` is to one, the more it will use the `outOfFocusColor`. Zero `blur` means this fragment is entirely in focus. At `blur >= @abstr_number`, this fragment is completely out of focus.

### Source

  * main.cxx
  * basic.vert
  * blur.frag
  * depth-of-field.frag



## Posterization

@abstr_image 

Posterization or color quantization is the process of reducing the number of unique colors in an image. You can use this shader to give your game a comic book or retro look. Combine it with outlining for a true cartoon look.

@abstr_code_section 

Feel free to tweak this parameter. The higher it is, the more colors you'll end up with. The lower it is, the less colors you'll end up with.

@abstr_code_section 

You'll need the input color.

@abstr_code_section 

This method of posterization I haven't seen before. After having come up with it, I found it produced a nicer result than the typical methods.

To reduce the color palette, first convert the color to a greyscale value. Quantize the color by mapping it to one of the levels. Calculate the difference between the quantized greyscale value with the non-quantized greyscale value. Add this difference to the input color. This difference is the amount the color has to go up or down to reach the quantized greyscale value.

@abstr_code_section 

Be sure to assign the input color to the fragment color.

### Cel Shading

@abstr_image 

Posterization can give you that cel shaded look as cel shading is the process of quantizing the diffuse and specular colors into discrete shades. You'll want to use only solid diffuse colors, no to subtle normal mapping, and a small value for `levels`.

### Source

  * main.cxx
  * basic.vert
  * posterize.frag



## Pixelization

@abstr_image 

Pixelizing your @abstr_number D game can give it a interesting look and possibly save you time by not having to create all of the pixel art by hand. Combine it with the posterization for a true retro look.

@abstr_code_section 

Feel free to adjust the pixel size. The bigger the pixel size, the blockier the image will be.

@abstr_image 

@abstr_code_section 

The technique works by mapping each fragment to the center of its closest, non-overlapping pixel-sized window. These windows are laid out in a grid over the input texture. The center-of-the-window fragments determine the color for the other fragments in their window.

@abstr_code_section 

Once you have determined the correct fragment coordinate to use, pull its color from the input texture and assign that to the fragment color.

### Source

  * main.cxx
  * basic.vert
  * pixelize.frag



## Sharpen

@abstr_image 

The sharpen effect increases the contrast at the edges of the image. This comes in handy when your graphics are bit too soft.

@abstr_code_section 

You can control how sharp the result is by adjusting the amount. An amount of zero leaves the image untouched. Try negative values for an odd look.

@abstr_code_section 

Neighboring fragments are multiplied by `amount * - @abstr_number`. The current fragment is multiplied by `amount * @abstr_number + @abstr_number`.

@abstr_code_section 

The neighboring fragments are up, down, left, and right. After multiplying both the neighbors and the current fragment by their particular values, sum the result.

@abstr_code_section 

This sum is the final fragment color.

### Source

  * main.cxx
  * basic.vert
  * sharpen.frag



## Film Grain

@abstr_image 

Film grain (when applied in subtle doses, unlike here) can add a bit of realism you don't notice until it's removed. Typically, it's the imperfections that make a digitally generated image more believable.

:bulb: Note that film grain is usually the last effect applied before the game is put on screen.

### Amount

@abstr_code_section 

The `amount` controls how noticeable the film grain is. Crank it up for a snowy picture.

### Random Intensity

@abstr_code_section 

This snippet calculates the random intensity needed to adjust the amount.

@abstr_code_section 

`osg_FrameTime` is @abstr_hyperlink by Panda @abstr_number D. The frame time is a time stamp of how many seconds have passed since the first frame. The example code uses this to animate the film grain as `osg_FrameTime` will always be different each frame.

@abstr_code_section 

For static film grain, replace `osg_FrameTime` with a large number. You may have to try different numbers to avoid seeing any patterns.

@abstr_image 

@abstr_code_section 

Both the x and y coordinate are used to create points or specs of film grain. If only x was used, there would only be vertical lines. Similarly, if only y was used, there would be only horizontal lines.

The reason the snippet multiplies one coordinate by some number is to break up the diagonal symmetry.

@abstr_image 

You can of course remove the coordinate multiplier for a somewhat decent looking rain effect.

:bulb: Note to animate the rain effect, multiply the output of `sin` by `osg_FrameTime`.

Play around with the x and y coordinate to try and get the rain to change directions. Keep only the x coordinate for a straight downpour.

@abstr_code_section 

`sin` is used as a hashing function. The fragment's coordinates are hashed to some output of `sin`. This has the nice property that no matter the input (big or small), the output range is negative one to one.

@abstr_code_section 

`sin` is also used as a pseudo random number generator when combined with `fract`.

@abstr_code_section 

Take a look at the first sequence of numbers and then the second. Each sequence is deterministic but the second sequence has less of a pattern than the first. So while the output of `fract( @abstr_number * sin(...))` is deterministic, it doesn't have much of a discernible pattern.

@abstr_image 

Here you see the `sin` multiplier going from @abstr_number , to @abstr_number , to @abstr_number , and then to @abstr_number .

As you increase the `sin` output multiplier, you get less and less of a pattern. This is the reason the snippet multiplies `sin` by @abstr_number , @abstr_number .

### Fragment Color

@abstr_code_section 

Convert the fragment's coordinates to UV coordinates. Using these UV coordinates, look up the texture color for this fragment.

@abstr_code_section 

Adjust the amount by the random intensity and add this to the color.

@abstr_code_section 

Set the fragment color and you're done.

### Source

  * main.cxx
  * basic.vert
  * film-grain.frag



## Attributions

  * @abstr_hyperlink 



## Copyright

(C) @abstr_number David Lettier   
@abstr_hyperlink 
