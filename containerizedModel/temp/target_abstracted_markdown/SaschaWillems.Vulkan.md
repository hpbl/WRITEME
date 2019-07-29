# Vulkan C++ examples and demos

A comprehensive collection of open source C++ examples for @abstr_hyperlink , the new graphics and compute API from Khronos.

@abstr_hyperlink 

## Table of Contents

  * Cloning
  * Assets
  * Building
  * Examples 
    * Basics
    * Advanced
    * Performance
    * Physically Based Rendering
    * Deferred
    * Compute Shader
    * Geometry Shader
    * Tessellation Shader
    * Headless
    * User Interface
    * Effects
    * Extensions
    * Misc
  * Credits and Attributions



##  Cloning

This repository contains submodules for external dependencies, so when doing a fresh clone you need to clone recursively:

@abstr_code_section 

Existing repositories can be updated manually:

@abstr_code_section 

##  Assets

Many examples require assets from the asset pack that is not part of this repository due to file size. A python script is included to download the asset pack that. Run
    
    
    python download_assets.py
    

from the root of the repository after cloning or see this for manual download.

##  Building

The repository contains everything required to compile and build the examples on @abstr_image Windows, @abstr_image Linux, @abstr_image Android, @abstr_image iOS and macOS (using MoltenVK) using a C++ compiler that supports C++ @abstr_number .

See BUILD.md for details on how to build for the different platforms.

##  Examples

###  Basics

####  @abstr_number - Triangle

Basic and verbose example for getting a colored triangle rendered to the screen using Vulkan. This is meant as a starting point for learning Vulkan from the ground up. A huge part of the code is boilerplate that is abstracted away in later examples.

####  @abstr_number - Pipelines

Using pipeline state objects (pso) that bake state information (rasterization states, culling modes, etc.) along with the shaders into a single object, making it easy for an implementation to optimize usage (compared to OpenGL's dynamic state machine). Also demonstrates the use of pipeline derivatives.

####  @abstr_number - Descriptor sets

Descriptors are used to pass data to shader binding points. Sets up descriptor sets, layouts, pools, creates a single pipeline based on the set layout and renders multiple objects with different descriptor sets.

####  @abstr_number - Dynamic uniform buffers

Dynamic uniform buffers are used for rendering multiple objects with multiple matrices stored in a single uniform buffer object. Individual matrices are dynamically addressed upon descriptor binding time, minimizing the number of required descriptor sets.

####  @abstr_number - Push constants

Uses push constants, small blocks of uniform data stored within a command buffer, to pass data to a shader without the need for uniform buffers.

####  @abstr_number - Specialization constants

Uses SPIR-V specialization constants to create multiple pipelines with different lighting paths from a single "uber" shader.

####  @abstr_number - Texture mapping

Loads a @abstr_number D texture from disk (including all mip levels), uses staging to upload it into video memory and samples from it using combined image samplers.

####  @abstr_number - Cube map textures

Loads a cube map texture from disk containing six different faces. All faces and mip levels are uploaded into video memory and the cubemap is sampled once as a skybox (for the background) and as a source for reflections (for a @abstr_number D model).

####  @abstr_number - Texture arrays

Loads a @abstr_number D texture array containing multiple @abstr_number D texture slices (each with it's own mip chain) and renders multiple meshes each sampling from a different layer of the texture. @abstr_number D texture arrays don't do any interpolation between the slices.

####  @abstr_number - @abstr_number D textures

Generates a @abstr_number D texture on the cpu (using perlin noise), uploads it to the device and samples it to render an animation. @abstr_number D textures store volumetric data and interpolate in all three dimensions.

####  @abstr_number - Model rendering

Loads a @abstr_number D model and texture maps from a common file format (using @abstr_hyperlink ), uploads the vertex and index buffer data to video memory, sets up a matching vertex layout and renders the @abstr_number D model.

####  @abstr_number - Input attachments

Uses input attachments to read framebuffer contents from a previous sub pass at the same pixel position within a single render pass. This can be used for basic post processing or image composition ( @abstr_hyperlink ).

####  @abstr_number - Sub passes

Advanced example that sses sub passes and input attachments to write and read back data from framebuffer attachments (same location only) in single render pass. This is used to implement deferred render composition with added forward transparency in a single pass. 

####  @abstr_number - Offscreen rendering

Basic offscreen rendering in two passes. First pass renders the mirrored scene to a separate framebuffer with color and depth attachments, second pass samples from that color attachment for rendering a mirror surface.

####  @abstr_number - CPU particle system

Implements a simple CPU based particle system. Particle data is stored in host memory, updated on the CPU per-frame and synchronized with the device before it's rendered using pre-multiplied alpha.

####  @abstr_number - Stencil buffer

Uses the stencil buffer and it's compare functionality for rendering a @abstr_number D model with dynamic outlines.

###  Advanced

####  @abstr_number - Scene rendering

Combines multiple techniques to render a complex scene consisting of multiple meshes, textures and materials. Meshes are stored and rendered from a single buffer using vertex offsets. Material parameters are passed via push constants, and separate per-model and scene descriptor sets are used to pass data to the shaders.

####  @abstr_number - Multi sampling

Implements multisample anti-aliasing (MSAA) using a renderpass with multisampled attachments and resolve attachments that get resolved into the visible frame buffer.

####  @abstr_number - High dynamic range

Implements a high dynamic range rendering pipeline using @abstr_number / @abstr_number bit floating point precision for all internal formats, textures and calculations, including a bloom pass, manual exposure and tone mapping. 

####  @abstr_number - Shadow mapping

Rendering shadows for a directional light source. First pass stores depth values from the light's pov, second pass compares against these to check if a fragment is shadowed. Uses depth bias to avoid shadow artifacts and applies a PCF filter to smooth shadow edges.

####  @abstr_number - Cascaded shadow mapping

Uses multiple shadow maps (stored as a layered texture) to increase shadow resolution for larger scenes. The camera frustum is split up into multiple cascades with corresponding layers in the shadow map. Layer selection for shadowing depth compare is then done by comparing fragment depth with the cascades' depths ranges.

####  @abstr_number - Omnidirectional shadow mapping

Uses a dynamic floating point cube map to implement shadowing for a point light source that casts shadows in all directions. The cube map is updated every frame and stores distance to the light source for each fragment used to determine if a fragment is shadowed.

####  @abstr_number - Run-time mip-map generation

Generating a complete mip-chain at runtime instead of loading it from a file, by blitting from one mip level, starting with the actual texture image, down to the next smaller size until the lower @abstr_number x @abstr_number pixel end of the mip chain.

####  @abstr_number - Skeletal animation

Loads and renders an animated skinned @abstr_number D model. Skinning is done on the GPU by passing per-vertex bone weights and translation matrices. 

####  @abstr_number - Capturing screenshots

Capturing and saving an image after a scene has been rendered using blits to copy the last swapchain image from optimal device to host local linear memory, so that it can be stored into a ppm image.

###  Performance

####  @abstr_number - Multi threaded command buffer generation

Multi threaded parallel command buffer generation. Instead of prebuilding and reusing the same command buffers this sample uses multiple hardware threads to demonstrate parallel per-frame recreation of secondary command buffers that are executed and submitted in a primary buffer once all threads have finished.

####  @abstr_number - Instancing

Uses the instancing feature for rendering many instances of the same mesh from a single vertex buffer with variable parameters and textures (indexing a layered texture). Instanced data is passed using a secondary vertex buffer.

####  @abstr_number - Indirect drawing

Rendering thousands of instanced objects with different geometry using one single indirect draw call instead of issuing separate draws. All draw commands to be executed are stored in a dedicated indirect draw buffer object (storing index count, offset, instance count, etc.) that is uploaded to the device and sourced by the indirect draw command for rendering.

####  @abstr_number - Occlusion queries

Using query pool objects to get number of passed samples for rendered primitives got determining on-screen visibility.

####  @abstr_number - Pipeline statistics

Using query pool objects to gather statistics from different stages of the pipeline like vertex, fragment shader and tessellation evaluation shader invocations depending on payload.

###  Physically Based Rendering

Physical based rendering as a lighting technique that achieves a more realistic and dynamic look by applying approximations of bidirectional reflectance distribution functions based on measured real-world material parameters and environment lighting.

####  @abstr_number - PBR basics

Demonstrates a basic specular BRDF implementation with solid materials and fixed light sources on a grid of objects with varying material parameters, demonstrating how metallic reflectance and surface roughness affect the appearance of pbr lit objects.

####  @abstr_number - PBR image based lighting

Adds image based lighting from an hdr environment cubemap to the PBR equation, using the surrounding environment as the light source. This adds an even more realistic look the scene as the light contribution used by the materials is now controlled by the environment. Also shows how to generate the BRDF @abstr_number D-LUT and irradiance and filtered cube maps from the environment map.

####  @abstr_number - Textured PBR with IBL

Renders a model specially crafted for a metallic-roughness PBR workflow with textures defining material parameters for the PRB equation (albedo, metallic, roughness, baked ambient occlusion, normal maps) in an image based lighting environment.

###  Deferred

These examples use a @abstr_hyperlink setup.

####  @abstr_number - Deferred shading basics

Uses multiple render targets to fill all attachments (albedo, normals, position, depth) required for a G-Buffer in a single pass. A deferred pass then uses these to calculate shading and lighting in screen space, so that calculations only have to be done for visible fragments independent of no. of lights.

####  @abstr_number - Deferred multi sampling

Adds multi sampling to a deferred renderer using manual resolve in the fragment shader.

####  @abstr_number - Deferred shading shadow mapping

Adds shadows from multiple spotlights to a deferred renderer using a layered depth attachment filled in one pass using multiple geometry shader invocations.

####  @abstr_number - Screen space ambient occlusion

Adds ambient occlusion in screen space to a @abstr_number D scene. Depth values from a previous deferred pass are used to generate an ambient occlusion texture that is blurred before being applied to the scene in a final composition path.

###  Compute Shader

####  @abstr_number - Image processing

Uses a compute shader along with a separate compute queue to apply different convolution kernels (and effects) on an input image in realtime.

####  @abstr_number - GPU particle system

Attraction based @abstr_number D GPU particle system using compute shaders. Particle data is stored in a shader storage buffer and only modified on the GPU using memory barriers for synchronizing compute particle updates with graphics pipeline vertex access.

####  @abstr_number - N-body simulation

N-body simulation based particle system with multiple attractors and particle-to-particle interaction using two passes separating particle movement calculation and final integration. Shared compute shader memory is used to speed up compute calculations.

####  @abstr_number - Ray tracing

Simple GPU ray tracer with shadows and reflections using a compute shader. No scene geometry is rendered in the graphics pass.

####  @abstr_number - Cloth simulation

Mass-spring based cloth system on the GPU using a compute shader to calculate and integrate spring forces, also implementing basic collision with a fixed scene object.

####  @abstr_number - Cull and LOD

Purely GPU based frustum visibility culling and level-of-detail system. A compute shader is used to modify draw commands stored in an indirect draw commands buffer to toggle model visibility and select it's level-of-detail based on camera distance, no calculations have to be done on and synced with the CPU.

###  Geometry Shader

####  @abstr_number - Normal debugging

Visualizing per-vertex model normals (for debugging). First pass renders the plain model, second pass uses a geometry shader to generate colored lines based on per-vertex model normals,

####  @abstr_number - Viewport arrays

Renders a scene to multiple viewports in one pass using a geometry shader to apply different matrices per viewport to simulate stereoscopic rendering (left/right). Requires a device with support for `multiViewport`.

###  Tessellation Shader

####  @abstr_number - Displacement mapping

Uses a height map to dynamically generate and displace additional geometric detail for a low-poly mesh.

####  @abstr_number - Dynamic terrain tessellation

Renders a terrain using tessellation shaders for height displacement (based on a @abstr_number -bit height map), dynamic level-of-detail (based on triangle screen space size) and per-patch frustum culling.

####  @abstr_number - Model tessellation

Uses curved PN-triangles ( @abstr_hyperlink ) for adding details to a low-polygon model.

###  Headless

Examples that run one-time tasks and don't make use of visual output (no window system integration). These can be run in environments where no user interface is available ( @abstr_hyperlink ).

####  @abstr_number - Render

Renders a basic scene to a (non-visible) frame buffer attachment, reads it back to host memory and stores it to disk without any on-screen presentation, showing proper use of memory barriers required for device to host image synchronization.

####  @abstr_number - Compute

Only uses compute shader capabilities for running calculations on an input data set (passed via SSBO). A fibonacci row is calculated based on input data via the compute shader, stored back and displayed via command line.

###  User Interface

####  @abstr_number - Text rendering

Load and render a @abstr_number D text overlay created from the bitmap glyph data of a @abstr_hyperlink . This data is uploaded as a texture and used for displaying text on top of a @abstr_number D scene in a second pass.

####  @abstr_number - Distance field fonts

Uses a texture that stores signed distance field information per character along with a special fragment shader calculating output based on that distance data. This results in crisp high quality font rendering independent of font size and scale.

####  @abstr_number - ImGui overlay

Generates and renders a complex user interface with multiple windows, controls and user interaction on top of a @abstr_number D scene. The UI is generated using @abstr_hyperlink and updated each frame.

###  Effects

####  @abstr_number - Fullscreen radial blur

Demonstrates the basics of fullscreen shader effects. The scene is rendered into an offscreen framebuffer at lower resolution and rendered as a fullscreen quad atop the scene using a radial blur fragment shader.

####  @abstr_number - Bloom

Advanced fullscreen effect example adding a bloom effect to a scene. Glowing scene parts are rendered to a low res offscreen framebuffer that is applied atop the scene using a two pass separated gaussian blur.

####  @abstr_number - Parallax mapping

Implements multiple texture mapping methods to simulate depth based on texture information: Normal mapping, parallax mapping, steep parallax mapping and parallax occlusion mapping (best quality, worst performance).

####  @abstr_number - Spherical environment mapping

Uses a spherical material capture texture array defining environment lighting and reflection information to fake complex lighting. 

###  Extensions

####  @abstr_number - Conservative rasterization (VK_EXT_conservative_rasterization)

Uses conservative rasterization to change the way fragments are generated by the gpu. The example enables overestimation to generate fragments for every pixel touched instead of only pixels that are fully covered ( @abstr_hyperlink ).

####  @abstr_number - Push descriptors (VK_KHR_push_descriptor)

Uses push descriptors apply the push constants concept to descriptor sets. Instead of creating per-object descriptor sets for rendering multiple objects, this example passes descriptors at command buffer creation time.

####  @abstr_number - Inline uniform blocks (VK_EXT_inline_uniform_block)

Makes use of inline uniform blocks to pass uniform data directly at descriptor set creation time and also demonstrates how to update data for those descriptors at runtime.

####  @abstr_number - Multiview rendering (VK_KHR_multiview)

Renders a scene to to multiple views (layers) of a single framebuffer to simulate stereoscopic rendering in one pass. Broadcasting to the views is done in the vertex shader using `gl_ViewIndex`.

####  @abstr_number - Conditional rendering (VK_EXT_conditional_rendering)

Demonstrates the use of VK_EXT_conditional_rendering to conditionally dispatch render commands based on values from a dedicated buffer. This allows e.g. visibility toggles without having to rebuild command buffers ( @abstr_hyperlink ).

####  @abstr_number - Debug markers (VK_EXT_debug_marker)

Uses the VK_EXT_debug_marker extension to set debug markers, regions and to name Vulkan objects for advanced debugging in graphics debuggers like @abstr_hyperlink . Details can be found in @abstr_hyperlink .

####  @abstr_number - Negative viewport height (VK_KHR_Maintenance @abstr_number or Vulkan @abstr_number . @abstr_number )

Shows how to render a scene using a negative viewport height, making the Vulkan render setup more similar to other APIs like OpenGL. Also has several options for changing relevant pipeline state, and displaying meshes with OpenGL or Vulkan style coordinates. Details can be found in @abstr_hyperlink .

####  @abstr_number - Basic ray tracing with VK_NV_ray_tracing

Basic example for doing ray tracing using the new Nvidia RTX extensions. Shows how to setup acceleration structures, ray tracing pipelines and the shaders needed to do the actual ray tracing.

####  @abstr_number - Ray traced shadows with VK_NV_ray_tracing

Adds ray traced shadows casting using the new Nvidia RTX extensions to a more complex scene. Shows how to add multiple hit and miss shaders and how to modify existing shaders to add shadow calculations.

####  @abstr_number - Ray traced reflections with VK_NV_ray_tracing

Renders a complex scene with reflective surfaces using using the new Nvidia RTX extensions. Shows how to do recursion inside of the ray tracing shaders for implementing real time reflections.

###  Misc

####  @abstr_number - Vulkan Gears

Vulkan interpretation of glxgears. Procedurally generates and animates multiple gears.

####  @abstr_number - Vulkan demo scene

Renders a Vulkan demo scene with logos and mascots. Not an actual example but more of a playground and showcase.

##  Credits and Attributions

See CREDITS.md for additional credits and attributions.
