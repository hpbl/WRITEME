@abstr_image   
SixLabors.ImageSharp 

[![GitHub license](https://img.shields.io/badge/license-Apache% @abstr_number -blue.svg)](https://raw.githubusercontent.com/SixLabors/ImageSharp/master/LICENSE) [![Gitter](https://badges.gitter.im/Join% @abstr_number Chat.svg)](https://gitter.im/ImageSharp/General?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Twitter](https://img.shields.io/twitter/url/http/shields.io.svg?style=flat&logo=twitter)](https://twitter.com/intent/tweet?hashtags=imagesharp,dotnet,oss&text=ImageSharp.+A+new+cross-platform+ @abstr_number D+graphics+API+in+C% @abstr_number &url=https% @abstr_number a% @abstr_number f% @abstr_number fgithub.com% @abstr_number fSixLabors% @abstr_number fImageSharp&via=sixlabors) [![OpenCollective](https://opencollective.com/imagesharp/backers/badge.svg)](#backers) [![OpenCollective](https://opencollective.com/imagesharp/sponsors/badge.svg)](#sponsors) 

### **ImageSharp** is a new, fully featured, fully managed, cross-platform, @abstr_number D graphics API.

Designed to democratize image processing, ImageSharp brings you an incredibly powerful yet beautifully simple API.

Compared to `System.Drawing` we have been able to develop something much more flexible, easier to code against, and much, much less prone to memory leaks. Gone are system-wide process-locks; ImageSharp images are thread-safe and fully supported in web environments.

Built against .NET Standard @abstr_number . @abstr_number , ImageSharp can be used in device, cloud, and embedded/IoT scenarios. 

### Documentation

For all SixLabors projects, including ImageSharp: https://sixlabors.github.io/docs/

### Installation

Install stable releases via Nuget; development releases are available via MyGet.

| Package Name | Release (NuGet) | Nightly (MyGet) | |--------------------------------|-----------------|-----------------| | `SixLabors.ImageSharp` | @abstr_hyperlink | @abstr_hyperlink | | `SixLabors.ImageSharp.Drawing` | @abstr_hyperlink | @abstr_hyperlink |

### Packages

The **ImageSharp** library is made up of multiple packages: \- **SixLabors.ImageSharp** \- Contains the generic `Image<TPixel>` class, PixelFormats, Primitives, Configuration, and other core functionality \- The `IImageFormat` interface, Jpeg, Png, Bmp, and Gif formats \- Transform methods like Resize, Crop, Skew, Rotate - anything that alters the dimensions of the image \- Non-transform methods like Gaussian Blur, Pixelate, Edge Detection - anything that maintains the original image dimensions

  * **SixLabors.ImageSharp.Drawing**
    * Brushes and various drawing algorithms, including drawing images
    * Various vector drawing methods for drawing paths, polygons etc.
    * Text drawing



### Build Status

| |Build Status|Code Coverage| |-------------|:----------:|:-----------:| | **Linux/Mac** | @abstr_hyperlink | @abstr_hyperlink | | **Windows** | @abstr_hyperlink | @abstr_hyperlink |

### Questions?

  * Do you have questions? We are happy to help! Please @abstr_hyperlink , or ask them on @abstr_hyperlink using the `ImageSharp` tag. **Do not** open issues for questions!
  * Please read our @abstr_hyperlink before opening issues or pull requests!



### API

Our API is designed to be simple to consume. Here's an example of the code required to resize an image using the default Bicubic resampler then turn the colors into their grayscale equivalent using the BT @abstr_number standard matrix.

On platforms supporting netstandard @abstr_number . @abstr_number +

@abstr_code_section 

Setting individual pixel values can be performed as follows:

@abstr_code_section 

`Rgba @abstr_number` is our default PixelFormat, equivalent to `System.Drawing Color`. For advanced pixel format usage there are multiple @abstr_hyperlink available allowing developers to implement their own color models in the same manner as Microsoft XNA Game Studio and MonoGame. 

For more examples check out: \- @abstr_hyperlink \- Our @abstr_hyperlink \- The @abstr_hyperlink 

### Manual build

If you prefer, you can compile ImageSharp yourself (please do and help!)

  * Using @abstr_hyperlink 
    * Make sure you have the latest version installed
    * Make sure you have @abstr_hyperlink installed



Alternatively, you can work from command line and/or with a lightweight editor on **both Linux/Unix and Windows** :

  * @abstr_hyperlink with @abstr_hyperlink 
  * @abstr_hyperlink 



To clone ImageSharp locally, click the "Clone in Windows" button above or run the following git commands:

@abstr_code_section 

### Submodules

This repository contains @abstr_hyperlink . To add the submodules to the project, navigate to the repository root and type:

@abstr_code_section 

### How can you help?

Please... Spread the word, contribute algorithms, submit performance improvements, unit tests, no input is too little. Make sure to read our @abstr_hyperlink before opening a PR.

### The ImageSharp Team

Grand High Eternal Dictator \- @abstr_hyperlink 

Core Team \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink 

### Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/imagesharp#backer)]

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

### Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/imagesharp#sponsor)]

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 
