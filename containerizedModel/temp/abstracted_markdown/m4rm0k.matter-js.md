# Matter.js

> _Matter.js_ is a JavaScript @abstr_number D rigid body physics engine for the web

@abstr_hyperlink 

Features - Status - Install - Usage - @abstr_hyperlink - Implementation - References - License

@abstr_hyperlink 

### Demos

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 

| 

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 

  
  
---|---  
  
### Features

  * Physical properties (mass, area, density etc.)
  * Rigid bodies of any convex polygon
  * Stable stacking and resting
  * Collisions (broad-phase, mid-phase and narrow-phase)
  * Restitution (elastic and inelastic collisions)
  * Conservation of momentum
  * Friction and resistance
  * Constraints
  * Gravity
  * Composite bodies
  * Sleeping and static bodies
  * Events
  * Rounded corners (chamfering)
  * Views (translate, zoom)
  * Collision queries (raycasting, region tests)
  * Time scaling (slow-mo, speed-up)
  * Canvas renderer (supports vectors and textures)
  * WebGL renderer (requires @abstr_hyperlink )
  * @abstr_hyperlink for creating, testing and debugging worlds
  * World state serialisation (requires @abstr_hyperlink )
  * Cross-browser (Chrome, Firefox, Safari, IE @abstr_number +)
  * Mobile-compatible (touch, responsive)
  * An original JavaScript physics implementation (not a port)



### Install

Download the @abstr_hyperlink or get a @abstr_hyperlink and include the script in your web page:
    
    
    <script src="matter.js" type="text/javascript"></script>
    

You can also install using the package managers @abstr_hyperlink and @abstr_hyperlink .
    
    
    bower install matter-js
    npm install matter-js
    

### Usage

See the @abstr_hyperlink wiki page for a minimal usage example.

Matter.js includes a sample renderer, but this is optional and it's easy to use your own.  
See the @abstr_hyperlink wiki page for information, including on how to use your own custom game loop.

Check out the @abstr_hyperlink for more examples and then refer to @abstr_hyperlink to see how they work. Some of the demos are also available on @abstr_hyperlink , where you can easily experiment with them.

### Documentation

Edge build documentation is at @abstr_hyperlink   
Stable release documentation is at @abstr_hyperlink 

### Status

Matter.js is currently in _alpha_ status, meaning the API is still in development and may change occasionally.  
The library is reasonably stable as-is, but it is not yet feature complete.

### Building and Contributing

To build you must first install @abstr_hyperlink and @abstr_hyperlink , then run
    
    
    npm install
    

This will install the required build dependencies, then run
    
    
    grunt dev
    

which is a task that builds the `matter-dev.js` file, spawns a `connect` and `watch` server, then opens `demo/dev.html` in your browser. Any changes you make to the source will automatically rebuild `matter-dev.js` and reload your browser for quick and easy testing.

Contributions are welcome, please ensure they follow the same style and architecture as the rest of the code. You should run `grunt test` to ensure `jshint` gives no errors. Please do not include any changes to the files in the `build` directory. 

If you'd like to contribute but not sure what to work on, feel free to message me. Thanks!

### Changelog

To see what's new or changed in the latest version, see the @abstr_hyperlink .

### Implementation

The technical details for physics nerds and game devs.   
This engine is using the following techniques:

  * Time-corrected position Verlet integrator
  * Adaptive grid broad-phase detection
  * AABB mid-phase detection
  * SAT narrow-phase detection
  * Iterative sequential impulse solver and position solver
  * Resting collisions with resting constraints ala Erin Catto's method (GDC @abstr_number )
  * Temporal coherence impulse caching and warming
  * Collision pairs, contacts and impulses maintained with a pair manager
  * Approximate Coulomb friction model using friction constraints
  * Constraints solved with the Gauss-Siedel method
  * Semi-variable time step, synced with rendering
  * A basic sleeping strategy
  * HTML @abstr_number Canvas / WebGL renderer



### References

See my post on @abstr_hyperlink .

### License

Matter.js is licensed under @abstr_hyperlink   
Copyright (c) @abstr_number Liam Brummitt

This license is also supplied with the release and source code.   
As stated in the license, absolutely no warranty is provided.
