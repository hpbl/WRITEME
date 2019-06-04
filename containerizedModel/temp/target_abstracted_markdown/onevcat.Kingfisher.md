@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink   


Kingfisher is a powerful, pure-Swift library for downloading and caching images from the web. It provides you a chance to use a pure-Swift way to work with remote images in your next app.

## Features

  * [x] Asynchronous image downloading and caching.
  * [x] Loading image from either `URLSession`-based networking or local provided data.
  * [x] Useful image processors and filters provided.
  * [x] Multiple-layer hybrid cache for both memory and disk.
  * [x] Fine control on cache behavior. Customizable expiration date and size limit.
  * [x] Cancelable downloading and auto-reusing previous downloaded content to improve performance.
  * [x] Independent components. Use the downloader, caching system and image processors separately as you need.
  * [x] Prefetching images and showing them from cache to boost your app.
  * [x] View extensions for `UIImageView`, `NSImage`, `NSButton` and `UIButton` to directly set an image from a URL.
  * [x] Built-in transition animation when setting images.
  * [x] Customizable placeholder and indicator while loading images.
  * [x] Extensible image processing and image format easily.



### Kingfisher @abstr_number

The simplest use-case is setting an image to an image view with the `UIImageView` extension:

@abstr_code_section 

Kingfisher will download the image from `url`, send it to both memory cache and disk cache, and display it in `imageView`. When you set with the same URL later, the image will be retrieved from cache and shown immediately.

### A More Advanced Example

With the powerful options, you can do hard tasks with Kingfisher in a simple way. For example, the code below: 

@abstr_number . Downloads a high-resolution image. @abstr_number . Downsamples it to match the image view size. @abstr_number . Makes it round cornered with a given radius. @abstr_number . Shows a system indicator and a placeholder image while downloading. @abstr_number . When prepared, it animates the small thumbnail image with a "fade in" effect. @abstr_number . The original large image is also cached to disk for later use, to get rid of downloading it again in a detail view. @abstr_number . A console log is printed when the task finishes, either for success or failure.

@abstr_code_section 

It is really a very common situation I can meet in my daily work. Think about how many lines you need to write without Kingfisher. You will fall in love with it if you give it a try!

### Learn More

To learn the using of Kingfisher by more examples, take a look at the @abstr_hyperlink . There we summarized most common tasks in Kingfisher, you can get a better idea on what this framework can do. There are also some tips for performance in the same page, remember to check them too.

## Requirements

  * iOS @abstr_number . @abstr_number + / macOS @abstr_number . @abstr_number + / tvOS @abstr_number . @abstr_number + / watchOS @abstr_number . @abstr_number +
  * Swift @abstr_number . @abstr_number +



@abstr_hyperlink - Kingfisher @abstr_number .x is NOT fully compatible with version @abstr_number .x. However, the migration is not difficult. Depending on your use cases, it may take no effect or several minutes to modify your existing code for the new version. Please follow the @abstr_hyperlink when you prepare to upgrade Kingfisher in your project.

If you are using an even earlier version, see the guides below to know the steps for migrating.

>   * Kingfisher @abstr_number . @abstr_number Migration - Kingfisher @abstr_number .x should be source compatible to Kingfisher @abstr_number . The reason for a major update is that we need to specify the Swift version explicitly for Xcode. All deprecated methods in Kingfisher @abstr_number has been removed, so please ensure you have no warning left before you migrate from Kingfisher @abstr_number to Kingfisher @abstr_number . If you have any trouble in migrating, please open an issue to discuss.
>   * @abstr_hyperlink - If you are upgrading to Kingfisher @abstr_number .x from an earlier version, please read this for more information.
> 


## Next Steps

We prepared a @abstr_hyperlink . You can find tons of useful things there.

  * @abstr_hyperlink - Follow it to integrate Kingfisher into your project.
  * @abstr_hyperlink - Curious about what Kingfisher could do and how would it look like when used in your project? See this page for useful code snippets. If you are already familiar with Kingfisher, you could also learn new tricks to improve the way you use Kingfisher!
  * @abstr_hyperlink - Lastly, please remember to read the full whenever you may need a more detailed reference.



## Other

### Future of Kingfisher

I want to keep Kingfisher lightweight. This framework will focus on providing a simple solution for downloading and caching images. This doesn’t mean the framework can’t be improved. Kingfisher is far from perfect, so necessary and useful updates will be made to make it better.

### Developments and Tests

Any contributing and pull requests are warmly welcome. However, before you plan to implement some features or try to fix an uncertain issue, it is recommended to open a discussion first. It would be appreciated if your pull requests could build and with all tests green. :)

### About the logo

The logo of Kingfisher is inspired by @abstr_hyperlink , a dissection puzzle consisting of seven flat shapes from China. I believe she's a kingfisher bird instead of a swift, but someone insists that she is a pigeon. I guess I should give her a name. Hi, guys, do you have any suggestions?

### Contact

Follow and contact me on @abstr_hyperlink or @abstr_hyperlink . If you find an issue, just @abstr_hyperlink . Pull requests are warmly welcome as well.

## Contributors

This project exists thanks to all the people who contribute. @abstr_hyperlink . @abstr_hyperlink 

## Backers

Thank you to all our backers! Your support is really important for the project and encourages us to continue. 🙏 [[Become a backer](https://opencollective.com/kingfisher#backer)]

@abstr_hyperlink 

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/kingfisher#sponsor)]

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

### License

Kingfisher is released under the MIT license. See LICENSE for details.
