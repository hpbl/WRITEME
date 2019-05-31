# Surge

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Surge is a Swift library that uses the Accelerate framework to provide high-performance functions for matrix math, digital signal processing, and image manipulation.

Accelerate exposes @abstr_hyperlink instructions available in modern CPUs to significantly improve performance of certain calculations. Because of its relative obscurity and inconvenient APIs, Accelerate is not commonly used by developers, which is a shame, since many applications could benefit from these performance optimizations.

**Surge aims to bring Accelerate to the mainstream, making it as easy (and nearly as fast, in most cases) to perform computation over a set of numbers as for a single member.**

Though, keep in mind: _Accelerate is not a silver bullet_. Under certain conditions, such as performing simple calculations over a small data set, Accelerate can be out-performed by conventional algorithms. Always benchmark to determine the performance characteristics of each potential approach.

* * *

> Curious about the name _Surge_? Back in the mid @abstr_number 's, Apple, IBM, and Motorola teamed up to create @abstr_hyperlink (a.k.a the Velocity Engine), which provided a SIMD instruction set for the PowerPC architecture. When Apple made the switch to Intel CPUs, AltiVec was ported to the x @abstr_number architecture and rechristened @abstr_hyperlink . The derivative of Accelerate (and second derivative of Velocity) is known as either @abstr_hyperlink , hence the name of this library.

* * *

## Installation

_The infrastructure and best practices for distributing Swift libraries are currently in flux during this beta period of Swift & Xcode. In the meantime, you can add Surge as a git submodule, drag the `Surge.xcodeproj` file into your Xcode project, and add `Surge.framework` as a dependency for your target._

Surge uses Swift @abstr_number . This means that your code has to be written in Swift @abstr_number due to current binary compatibility limitations.

### Swift Package Manager

To use @abstr_hyperlink add Surge to your `Package.swift` file:

@abstr_code_section 

Then run `swift build`.

### CocoaPods

To use @abstr_hyperlink add Surge to your `Podfile`:

@abstr_code_section 

Then run `pod install`.

### Carthage

To use @abstr_hyperlink add Surge to your `Cartfile`:

@abstr_code_section 

Then run `carthage update` and use the framework in `Carthage/Build/<platform>`.

* * *

## Inventory

> Surge functions are named according to their corresponding "Math.h" functions, where applicable (omitting `f` and `d` affixes, since type information is communicated and enforced by the language's type system).

### Arithmetic

  * `sum`
  * `asum`
  * `max`
  * `min`
  * `mean`
  * `meamg`
  * `measq`
  * `add`
  * `sub`
  * `mul`
  * `div`
  * `mod`
  * `remainder`
  * `sqrt`



### Auxiliary

  * `abs`
  * `ceil`
  * `copysign`
  * `floor`
  * `rec`
  * `round`
  * `trunc`



### Convolution

  * `conv`
  * `xcorr`



### Exponential

  * `exp`
  * `exp @abstr_number`
  * `log`
  * `log @abstr_number`
  * `log @abstr_number`
  * `logb`



### FFT

  * `fft`



### Hyperbolic

  * `sinh`
  * `cosh`
  * `tanh`
  * `asinh`
  * `acosh`
  * `atanh`



### Matrix

  * `add`
  * `mul`
  * `inv`
  * `transpose`



### Power

  * `pow`



### Trigonometric

  * `sincos`
  * `sin`
  * `cos`
  * `tan`
  * `asin`
  * `acos`
  * `atan`
  * `rad @abstr_number deg`
  * `deg @abstr_number rad`



## Usage

### Computing Sum of `[Double]`

@abstr_code_section 

### Computing Product of Two `[Double]`s

@abstr_code_section 

* * *

## License

Surge is available under the MIT license. See the LICENSE file for more info.
