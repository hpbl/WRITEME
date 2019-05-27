@abstr_hyperlink @abstr_image @abstr_image 

# Advance

An animation library for iOS, tvOS, and macOS that uses physics-based animations (including springs) to power interactions that move and respond realistically.

@abstr_code_section 

## Installation

There are several ways to integrate Advance into your project.

  * **Manually:** add `Advance.xcodeproj` to your project, then add `Advance-{iOS|macOS|tvOS}.framework` as an "Embedded Binary" to your application target (under General in target settings). From there, add `import Advance` to your code and you're good to go.

  * **Carthage:** add `github "timdonnelly/Advance"` to your `Cartfile`.

  * **CocoaPods:** add `pod 'Advance'` to your `Podfile`.

  * **Swift Package Manager:** add a dependency to your `Project.swift`: `.package(url: "http://github.com/timdonnelly/Advance", from: " @abstr_number . @abstr_number . @abstr_number ")`




##### Requirements

  * iOS @abstr_number +, tvOS @abstr_number +, or macOS @abstr_number . @abstr_number +
  * Swift @abstr_number . @abstr_number (Xcode @abstr_number . @abstr_number or higher)



## Usage

**API documentation is @abstr_hyperlink .**

Advance animations are applied on every frame (using `CADisplayLink` on iOS/tvOS, and `CVDisplayLink` on macOS), allowing for fine-grained control at any time.

### `Spring`

`Spring` instances animate changes to a value over time, using spring physics.

@abstr_code_section 

#### Configuring a spring

@abstr_code_section 

### `Animator`

`Animator` allows for more flexibility in the types of animation that can be performed, but gives up some convenience in order to do so. Specifically, animators allow for _any_ type of animation or simulation to be performed for a single value.

@abstr_code_section 

Animators support two fundamentally different types of animations: timed and simulated.

#### Timed animations

Timed animations are, well, timed: they have a fixed duration, and they animate to a final value in a predictable manner.

@abstr_code_section 

`TimingFunction` described the pacing of a timed animation. 

`TimingFunction` comes with a standard set of functions:

@abstr_code_section 

Custom timing functions can be expressed as unit beziers ( @abstr_hyperlink ).

@abstr_code_section 

#### Simulated animations

Simulated animations use a _simulation function_ to power a physics-based transition. Simulation functions are types conforming to the `SimulationFunction` protocol.

Simulated animations may be started using two different methods:

@abstr_code_section 

### Animating Custom Types

Values conforming to the `VectorConvertible` protocol can be animated by Advance. Conforming types can be converted to and from a `Vector` implementation. @abstr_code_section 

The library adds conformance for many common types through extensions.

## Contributing

If you encounter any issues or surprises, please open an issue.

For suggestions or new features, please consider opening a PR with a functional implementation. Issues may be used if you aren't sure how to implement the change, but working code is typically easier to evaluate.

## License

This project is released under the @abstr_hyperlink .
