# Skinner

@abstr_image @abstr_image 

_Skinner_ is a collection of special effects that use vertices of an animating skinned mesh as emitting points. It uses a special [replacement shader] to convert vertex positions into GPU-friendly data, and thus it avoids spending extra memory and CPU time for handling them (uses GPU resources instead).

## Skinner Asset Types

_Skinner_ provides some special asset types to preprocess relevant data.

### Skinner Model

A _Skinner model_ is a simplified variant of a mesh asset that only has vertices and skin weights. When converted from an original mesh, all the topological data of triangles is removed and overlapped vertices are stripped out.

### Skinner Template

A _Skinner template_ is a pre-built mesh asset that provides vertices and topological data to the effect renderers. For instance, a _Skinner particle template_ has thousands of particle instances that are placed at the world origin; A _Skinner particle renderer_ will move them at run time.

## Skinner Component Classes

_Skinner_ also provides some component classes to handle these assets during run time.

### Skinner Source

The _Skinner source_ component is a subsystem that converts a deformed skinned mesh into baked data. This data will be provided to multiple _Skinner renderers_.

### Skinner Renderers

The _Skinner renderer_ components are special types of mesh renderers that deform a _Skinner template_ based on data provided from a _Skinner source_. Then it creates some interesting special effects.

## How to Set Up

### Install the package.

Download one of the unitypackage files from the [Releases] page and import it into a project.

### Convert a skinned mesh into a Skinner model.

A skinned mesh has to be converted into a _Skinner model_ in advance to be used in the _Skinner_ system. This can be done from the context menu; click a mesh asset to select it, then choose _Skinner_ - > _Convert Mesh_ from the right click menu.

Note that the mesh asset is usually located inside an fbx file. A few extra clicks are needed to select it. See the GIF below.

@abstr_image 

### Set up a character as usual.

Drag and drop a character prefab into the scene.

### Attach a _Skinner source_ to a skinned mesh renderer.

Add a _Skinner source_ component to the game object that has a skinned mesh renderer component. Then set the _Skinner model_ converted in the previous step to the _model_ property. 

@abstr_image 

This _Skinner source_ will override the skinned mesh renderer and then use it to convert vertex data. **Note that this character will disappear from the scene,** because it will be exclusively used for vertex conversion. If it has to stay visible, another instance of the same character should be added to the scene as a substitution.

### Create a _Skinner renderer_ object.

Create an empty game object and add one of the _Skinner renderer_ components to it. Then set the _source_ property in it to refer to the _Skinner source_ object created in the previous step.

For starters, it's recommended to use the _Skinner debug_ component that simply visualizes the vertex data provided from the source. If it shows nothing, there may be something wrong in the previous steps.

## Skinner Renderer Components

Currently, the _Skinner_ package provides four types of renderers.

### Skinner Debug

@abstr_image 

The _Skinner debug_ renderer simply visualizes vertex data provided from a source.

This component doesn't need a template asset.

### Skinner Glitch

@abstr_image 

The _Skinner glitch_ renderer draws triangles between randomly choosing vertices in a source. Although the number of triangles is fixed ( @abstr_number , @abstr_number triangles), triangles with long edges or a large area will be pulled out to maintain the silhouette. This behavior can be controlled by the threshold properties of the component.

This component doesn't need a template asset.

### Skinner Particle

@abstr_image 

The _Skinner particle_ is a particle system that emits particles from vertices in a source. Several parameters (duration, rotation, etc) of each particle can be changed according to the speed of vertices, and thus it can be used to give some emphasis to character movement and trajectory.

The shapes of particles are defined in a _Skinner particle template_ asset. Any shape can be used in a template, but it's recommended to use meshes with the very low poly count because the number of particle instances is determined from the number of vertices in the shapes (low poly == more particles!). 

### Skinner Trail

@abstr_image 

The _Skinner trail_ renderer draws trail lines from vertices in a source. The width of the lines can be changed according to the speed of vertices, and thus it can be used to give emphasis to movement too.

The length of the trail lines is pre-determined in a _Skinner trail template_ asset. The number of lines is also pre-determined by its length. The longer the lines are, the fewer lines are drawn.

## Compatibility

At the moment _Skinner_ is only tested on Windows, macOS and iOS (metal). Possibly it runs on PS @abstr_number and Xboxone, but not sure about GLES @abstr_number and WebGL.

## License

MIT
