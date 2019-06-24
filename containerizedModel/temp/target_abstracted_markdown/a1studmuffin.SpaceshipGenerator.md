# Spaceship Generator

A Blender script to procedurally generate @abstr_number D spaceships from a random seed.

@abstr_image 

## Usage

  * Install Blender @abstr_number . @abstr_number or greater: http://blender.org/download/
  * Download newest `add_mesh_SpaceshipGenerator.zip` from the @abstr_hyperlink section
  * Under File > User Preferences... > Add-ons > Install From File... open the downloaded ZIP file
  * Under File > User Preferences... > Add-ons enable this script (search for "spaceship")
  * Add a spaceship in the @abstr_number D View under Add > Mesh > Spaceship



## How it works

@abstr_image 

Watch on YouTube: https://www.youtube.com/watch?v=xJZyXqJ @abstr_number nog

  * Start with a box.
  * Build the hull: Extrude the front/rear faces several times, adding random translation/scaling/rotation along the way.
  * Add asymmetry to the hull: Pick random faces and extrude them out in a similar manner, reducing in scale each time.
  * Add detail to the hull: Categorize each face by its orientation and generate details on it such as engines, antenna, weapon turrets, lights etc.
  * Sometimes apply horizontal symmetry.
  * Add a Bevel modifier to angularize the shape a bit.
  * Apply materials to the final result.
  * Take over the universe with your new infinite fleet of spaceships.



## Extreme examples

The following screenshots were created using extreme values for the number of hull segments and asymmetry segments to show how the algorithm works.

@abstr_image 

## Tips and Tricks

  * By default the script will delete all objects starting with `Spaceship` before generating a new spaceship. To disable this feature, remove or comment out the call to `reset_scene()` around line @abstr_number in the main function.
  * You can provide a seed to the `generate_spaceship()` function to always generate the same spaceship. For example, `generate_spaceship('michael')`.
  * The `generate_spaceship()` function takes many more parameters that affect the generation process. Try playing with them!
  * You can replace the textures with your own ones. All textures are applied using global-space cube UVs. `hull_normal.png` is a normal map that adds extra surface "greebles". `hull_lights_diffuse.png` is an additive diffuse texture to set the color of the window lights. `hull_lights_emit.png` is an emissive texture to make the windows glow in darkness.



## Credits

Written for fun as part of the @abstr_hyperlink June @abstr_number @abstr_hyperlink .

Released under the [MIT License].

Authored and maintained by Michael Davies.

> GitHub @abstr_hyperlink Twitter @abstr_hyperlink 

Special thanks to @abstr_hyperlink for bugfixes, a proper GUI and build script. Also to @abstr_hyperlink for bugfixing.
