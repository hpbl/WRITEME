@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Haneke is a lightweight _generic_ cache for iOS and tvOS written in Swift @abstr_number . It's designed to be super-simple to use. Here's how you would initalize a JSON cache and fetch objects from a url:

@abstr_code_section 

Haneke provides a memory and LRU disk cache for `UIImage`, `NSData`, `JSON`, `String` or any other type that can be read or written as data.

Particularly, Haneke excels at working with images. It includes a zero-config image cache with automatic resizing. Everything is done in background, allowing for fast, responsive scrolling. Asking Haneke to load, resize, cache and display an _appropriately sized image_ is as simple as:

@abstr_code_section 

_Really._

## Features

  * Generic cache with out-of-the-box support for `UIImage`, `NSData`, `JSON` and `String`
  * First-level memory cache using `NSCache`
  * Second-level LRU disk cache using the file system
  * Asynchronous fetching of original values from network or disk
  * All disk access is performed in background
  * Thread-safe
  * Automatic cache eviction on memory warnings or disk capacity reached
  * Comprehensive unit tests
  * Extensible by defining custom formats, supporting additional types or implementing custom fetchers



For images:

  * Zero-config `UIImageView` and `UIButton` extensions to use the cache, optimized for `UITableView` and `UICollectionView` cell reuse
  * Background image resizing and decompression



## Installation

Using @abstr_hyperlink :

@abstr_code_section 

Using @abstr_hyperlink :

@abstr_code_section 

Manually:

@abstr_number . Drag `Haneke.xcodeproj` to your project in the _Project Navigator_. @abstr_number . Select your project and then your app target. Open the _Build Phases_ panel. @abstr_number . Expand the _Target Dependencies_ group, and add `Haneke.framework`. @abstr_number . Click on the `+` button at the top left of the panel and select _New Copy Files Phase_. Set _Destination_ to _Frameworks_, and add `Haneke.framework`. @abstr_number . `import Haneke` whenever you want to use Haneke.

## Requirements

  * iOS @abstr_number . @abstr_number + or tvOS @abstr_number . @abstr_number +
  * Swift @abstr_number 



## Using the cache

Haneke provides shared caches for `UIImage`, `NSData`, `JSON` and `String`. You can also create your own caches. 

The cache is a key-value store. For example, here's how you would cache and then fetch some data.

```Swift let cache = Shared.dataCache

cache.set(value: data, key: "funny-games.mp @abstr_number ")

// Eventually...

cache.fetch(key: "funny-games.mp @abstr_number ").onSuccess { data in // Do something with data } @abstr_code_section Swift let cache = Shared.JSONCache let URL = NSURL(string: "https://api.github.com/users/haneke")!

cache.fetch(URL: URL).onSuccess { JSON in print(JSON.dictionary?["bio"]) } @abstr_code_section swift // Setting a remote image imageView.hnk_setImageFromURL(url)

// Setting an image manually. Requires you to provide a key. imageView.hnk_setImage(image, key: key) @abstr_code_section swift let cache = Shared.imageCache

let iconFormat = Format(name: "icons", diskCapacity: @abstr_number * @abstr_number * @abstr_number ) { image in return imageByRoundingCornersOfImage(image) } cache.addFormat(iconFormat)

let URL = NSURL(string: "http://haneke.io/icon.png")! cache.fetch(URL: URL, formatName: "icons").onSuccess { image in // image will be a nice rounded icon } @abstr_code_section swift imageView.hnk_setImageFromURL(url, format: iconFormat) @abstr_code_section swift let URL = NSURL(string: "http://haneke.io/icon.png")! let fetcher = NetworkFetcher(URL: URL) cache.fetch(fetcher: fetcher).onSuccess { image in // Do something with image } @abstr_code_section Swift public protocol DataConvertible { typealias Result
    
    
    class func convertFromData(data:NSData) -> Result?
    

}

public protocol DataRepresentable {
    
    
    func asData() -> NSData!
    

} @abstr_code_section Swift extension NSDictionary : DataConvertible, DataRepresentable {
    
    
    public typealias Result = NSDictionary
    
    public class func convertFromData(data:NSData) -> Result? {
        return NSKeyedUnarchiver.unarchiveObjectWithData(data) as? NSDictionary
    }
    
    public func asData() -> NSData! {
        return NSKeyedArchiver.archivedDataWithRootObject(self)
    }
    

} @abstr_code_section swift let cache = Cache(name: "dictionaries") ```

## Roadmap

Haneke Swift is in initial development and its public API should not be considered stable.

## License

Copyright @abstr_number Hermes Pique ( @abstr_hyperlink )   
@abstr_number Joan Romano ( @abstr_hyperlink )   
@abstr_number Luis Ascorbe ( @abstr_hyperlink )   
@abstr_number Oriol Blanc ( @abstr_hyperlink ) 

Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
