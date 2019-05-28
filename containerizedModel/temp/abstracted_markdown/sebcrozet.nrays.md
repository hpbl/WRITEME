# nrays

**nrays** is an attempt to make a @abstr_number and @abstr_number dimensional ray tracer in Rust. It uses the @abstr_hyperlink library to cast rays.

## @abstr_number d ray tracing

The current implementation handles phong lighting and reflexions. Nothing fancy here. It supports the same geometries as **ncollide** , that is, plane, box, sphere, cylinder, cone, and Minkowski sum of any supported convex objects. Triangle meshes are not yet supported. Here is an example of @abstr_number d ray casting on the Minkowski sum of a cylinder and a box:

@abstr_image 

Several examples are given on the `bin` folder. Those are `.scene` files that can be read by the `loader @abstr_number d` executable produced by the command `make`. Those scenes require some assets originally available @abstr_hyperlink . The whole set of asset is packaged @abstr_hyperlink and has to be extracted on the `bin` folder. Here is an example of commands you might type the first time:

@abstr_code_section 
