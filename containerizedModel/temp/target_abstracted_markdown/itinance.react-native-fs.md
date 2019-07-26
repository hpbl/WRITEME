# react-native-fs

Native filesystem access for react-native

## IMPORTANT

For RN < @abstr_number . @abstr_number and/or Gradle < @abstr_number you MUST install react-native-fs at version @ @abstr_number . @abstr_number . @abstr_number !

For RN >= @abstr_number . @abstr_number and/or Gradle >= @abstr_number you MUST install react-native-fs at version >= @ @abstr_number . @abstr_number . @abstr_number !

## Changelog

View the changelog @abstr_hyperlink .

## Usage (iOS)

First you need to install react-native-fs:

@abstr_code_section 

**Note:** If your react-native version is  < @abstr_number . @abstr_number install with this tag instead:

@abstr_code_section 

As @a-koka pointed out, you should then update your package.json to `"react-native-fs": " @abstr_number . @abstr_number . @abstr_number -rc. @abstr_number "` (without the tilde)

### Adding automatically with react-native link

At the command line, in your project folder, type:

`react-native link react-native-fs`

Done! No need to worry about manually adding the library to your project.

### Adding with CocoaPods

Add the RNFS pod to your list of application pods in your Podfile, using the path from the Podfile to the installed module:~~

@abstr_code_section 

Install pods as usual: @abstr_code_section 

### Adding Manually in XCode

In XCode, in the project navigator, right click Libraries ➜ Add Files to [your project's name] Go to node_modules ➜ react-native-fs and add the .xcodeproj file

In XCode, in the project navigator, select your project. Add the `lib*.a` from the RNFS project to your project's Build Phases ➜ Link Binary With Libraries. Click the .xcodeproj file you added before in the project navigator and go the Build Settings tab. Make sure 'All' is toggled on (instead of 'Basic'). Look for Header Search Paths and make sure it contains both `$(SRCROOT)/../react-native/React` and `$(SRCROOT)/../../React` \- mark both as recursive.

Run your project (Cmd+R)

## Usage (Android)

Android support is currently limited to only the `DocumentDirectory`. This maps to the app's `files` directory.

Make alterations to the following files:

  * `android/settings.gradle`

@abstr_code_section 

  * `android/app/build.gradle`

@abstr_code_section 

  * register module (in MainActivity.java)

    * For react-native below @abstr_number . @abstr_number . @abstr_number (use `cat ./node_modules/react-native/package.json | grep version`)

@abstr_code_section 

    * For react-native @abstr_number . @abstr_number . @abstr_number and higher @abstr_code_section 

    * For react-native @abstr_number . @abstr_number . @abstr_number and higher ( in MainApplication.java ) @abstr_code_section 




## Usage (Windows)

### Adding automatically with react-native link

The `link` command also works for adding the native dependency on Windows:

`react-native link react-native-fs`

### Adding Manually in Visual Studio

Follow the instructions in the @abstr_hyperlink documentation on the react-native-windows GitHub repo. For the first step of adding the project to the Visual Studio solution file, the path to the project should be `../node_modules/react-native-fs/windows/RNFS/RNFS.csproj`.

## Examples

### Basic

@abstr_code_section 

### File creation

@abstr_code_section 

### File deletion

@abstr_code_section 

### File upload (Android and IOS only)

@abstr_code_section 

## API

### Constants

The following constants are available on the `RNFS` export:

  * `MainBundlePath` (`String`) The absolute path to the main bundle directory (not available on Android)
  * `CachesDirectoryPath` (`String`) The absolute path to the caches directory
  * `ExternalCachesDirectoryPath` (`String`) The absolute path to the external caches directory (android only)
  * `DocumentDirectoryPath` (`String`) The absolute path to the document directory
  * `TemporaryDirectoryPath` (`String`) The absolute path to the temporary directory (falls back to Caching-Directory on Android)
  * `LibraryDirectoryPath` (`String`) The absolute path to the NSLibraryDirectory (iOS only)
  * `ExternalDirectoryPath` (`String`) The absolute path to the external files, shared directory (android only)
  * `ExternalStorageDirectoryPath` (`String`) The absolute path to the external storage, shared directory (android only)



IMPORTANT: when using `ExternalStorageDirectoryPath` it's necessary to request permissions (on Android) to read and write on the external storage, here an example: [React Native Offical Doc] (https://facebook.github.io/react-native/docs/permissionsandroid)

### `readDir(dirpath: string): Promise<ReadDirItem[]>`

Reads the contents of `path`. This must be an absolute path. Use the above path constants to form a usable file path.

The returned promise resolves with an array of objects with the following properties:

@abstr_code_section 

### `readDirAssets(dirpath: string): Promise<ReadDirItem[]>`

Reads the contents of `dirpath` in the Android app's assets folder. `dirpath` is the relative path to the file from the root of the `assets` folder.

The returned promise resolves with an array of objects with the following properties:

@abstr_code_section 

Note: Android only.

### `readdir(dirpath: string): Promise<string[]>`

Node.js style version of `readDir` that returns only the names. Note the lowercase `d`.

### `stat(filepath: string): Promise<StatResult>`

Stats an item at `filepath`. If the `filepath` is linked to a virtual file, for example Android Content URI, the `originalPath` can be used to find the pointed file path. The promise resolves with an object with the following properties:

@abstr_code_section 

### `readFile(filepath: string, encoding?: string): Promise<string>`

Reads the file at `path` and return contents. `encoding` can be one of `utf @abstr_number` (default), `ascii`, `base @abstr_number`. Use `base @abstr_number` for reading binary files.

Note: you will take quite a performance hit if you are reading big files

### `read(filepath: string, length = @abstr_number , position = @abstr_number , encodingOrOptions?: any): Promise<string>`

Reads `length` bytes from the given `position` of the file at `path` and returns contents. `encoding` can be one of `utf @abstr_number` (default), `ascii`, `base @abstr_number`. Use `base @abstr_number` for reading binary files.

Note: reading big files piece by piece using this method may be useful in terms of performance.

### `readFileAssets(filepath:string, encoding?: string): Promise<string>`

Reads the file at `path` in the Android app's assets folder and return contents. `encoding` can be one of `utf @abstr_number` (default), `ascii`, `base @abstr_number`. Use `base @abstr_number` for reading binary files.

`filepath` is the relative path to the file from the root of the `assets` folder.

Note: Android only.

### `readFileRes(filename:string, encoding?: string): Promise<string>`

Reads the file named `filename` in the Android app's res folder and return contents. `res/drawable` is used as the parent folder for image files, `res/raw` for everything else. `encoding` can be one of `utf @abstr_number` (default), `ascii`, `base @abstr_number`. Use `base @abstr_number` for reading binary files.

Note: Android only.

### `writeFile(filepath: string, contents: string, encoding?: string): Promise<void>`

Write the `contents` to `filepath`. `encoding` can be one of `utf @abstr_number` (default), `ascii`, `base @abstr_number`. `options` optionally takes an object specifying the file's properties, like mode etc.

### `appendFile(filepath: string, contents: string, encoding?: string): Promise<void>`

Append the `contents` to `filepath`. `encoding` can be one of `utf @abstr_number` (default), `ascii`, `base @abstr_number`.

### `write(filepath: string, contents: string, position?: number, encoding?: string): Promise<void>`

Write the `contents` to `filepath` at the given random access position. When `position` is `undefined` or `- @abstr_number` the contents is appended to the end of the file. `encoding` can be one of `utf @abstr_number` (default), `ascii`, `base @abstr_number`.

### `moveFile(filepath: string, destPath: string): Promise<void>`

Moves the file located at `filepath` to `destPath`. This is more performant than reading and then re-writing the file data because the move is done natively and the data doesn't have to be copied or cross the bridge.

### `copyFile(filepath: string, destPath: string): Promise<void>`

Copies the file located at `filepath` to `destPath`.

Note: On Android copyFile will overwrite `destPath` if it already exists. On iOS an error will be thrown if the file already exists.

### `copyFileAssets(filepath: string, destPath: string): Promise<void>`

Copies the file at `filepath` in the Android app's assets folder and copies it to the given `destPath` path.

Note: Android only. Will overwrite destPath if it already exists.

### `copyFileRes(filename: string, destPath: string): Promise<void>`

Copies the file named `filename` in the Android app's res folder and copies it to the given `destPath` path. `res/drawable` is used as the source parent folder for image files, `res/raw` for everything else.

Note: Android only. Will overwrite destPath if it already exists.

### `copyAssetsFileIOS(imageUri: string, destPath: string, width: number, height: number, scale : number = @abstr_number . @abstr_number , compression : number = @abstr_number . @abstr_number , resizeMode : string = 'contain' ): Promise<string>`

iOS-only: copies a file from camera-roll, that is prefixed with "assets-library://asset/asset.JPG?..." to a specific destination. It will download the original from iCloud if necessary.

If width and height is > @abstr_number , the image will be resized to a specific size and a specific compression rate. If scale is below @abstr_number , the image will be scaled according to the scale-factor (between @abstr_number . @abstr_number and @abstr_number . @abstr_number ) The resizeMode is also considered.

_Video-Support:_

One can use this method also to create a thumbNail from a video in a specific size. Currently it is impossible to specify a concrete position, the OS will decide wich Thumbnail you'll get then. To copy a video from assets-library and save it as a mp @abstr_number -file, refer to copyAssetsVideoIOS.

Further information: https://developer.apple.com/reference/photos/phimagemanager/ @abstr_number -requestimageforasset The promise will on success return the final destination of the file, as it was defined in the destPath-parameter.

### copyAssetsVideoIOS(videoUri: string, destPath: string): Promise

iOS-only: copies a video from assets-library, that is prefixed with 'assets-library://asset/asset.MOV?...' to a specific destination.

### `unlink(filepath: string): Promise<void>`

Unlinks the item at `filepath`. If the item does not exist, an error will be thrown.

Also recursively deletes directories (works like Linux `rm -rf`).

### `exists(filepath: string): Promise<boolean>`

Check if the item exists at `filepath`. If the item does not exist, return false.

### `existsAssets(filepath: string): Promise<boolean>`

Check in the Android assets folder if the item exists. `filepath` is the relative path from the root of the assets folder. If the item does not exist, return false.

Note: Android only.

### `existsRes(filename: string): Promise<boolean>`

Check in the Android res folder if the item named `filename` exists. `res/drawable` is used as the parent folder for image files, `res/raw` for everything else. If the item does not exist, return false.

Note: Android only.

### `hash(filepath: string, algorithm: string): Promise<string>`

Reads the file at `path` and returns its checksum as determined by `algorithm`, which can be one of `md @abstr_number`, `sha @abstr_number`, `sha @abstr_number`, `sha @abstr_number`, `sha @abstr_number`, `sha @abstr_number`.

### `touch(filepath: string, mtime?: Date, ctime?: Date): Promise<string>`

Sets the modification timestamp `mtime` and creation timestamp `ctime` of the file at `filepath`. Setting `ctime` is only supported on iOS, android always sets both timestamps to `mtime`.

### `mkdir(filepath: string, options?: MkdirOptions): Promise<void>`

@abstr_code_section 

Create a directory at `filepath`. Automatically creates parents and does not throw if already exists (works like Linux `mkdir -p`).

(IOS only): The `NSURLIsExcludedFromBackupKey` property can be provided to set this attribute on iOS platforms. Apple will _reject_ apps for storing offline cache data that does not have this attribute.

### `downloadFile(options: DownloadFileOptions): { jobId: number, promise: Promise<DownloadResult> }`

@abstr_code_section @abstr_code_section 

Download file from `options.fromUrl` to `options.toFile`. Will overwrite any previously existing file.

If `options.begin` is provided, it will be invoked once upon download starting when headers have been received and passed a single argument with the following properties:

@abstr_code_section 

If `options.progress` is provided, it will be invoked continuously and passed a single argument with the following properties:

@abstr_code_section 

If `options.progressDivider` is provided, it will return progress events that divided by `progressDivider`.

For example, if `progressDivider` = @abstr_number , you will receive only ten callbacks for this values of progress: @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number Use it for performance issues. If `progressDivider` = @abstr_number , you will receive all `progressCallback` calls, default value is @abstr_number .

(IOS only): `options.background` (`Boolean`) - Whether to continue downloads when the app is not focused (default: `false`) This option is currently only available for iOS, see the Background Downloads Tutorial (iOS) section.

(IOS only): If `options.resumable` is provided, it will be invoked when the download has stopped and and can be resumed using `resumeDownload()`.

### `stopDownload(jobId: number): void`

Abort the current download job with this ID. The partial file will remain on the filesystem.

### (iOS only) `resumeDownload(jobId: number): void`

Resume the current download job with this ID.

### (iOS only) `isResumable(jobId: number): Promise<bool>`

Check if the the download job with this ID is resumable with `resumeDownload()`.

Example:

@abstr_code_section 

### (iOS only) `completeHandlerIOS(jobId: number): void`

For use when using background downloads, tell iOS you are done handling a completed download.

Read more about background downloads in the Background Downloads Tutorial (iOS) section.

### `uploadFiles(options: UploadFileOptions): { jobId: number, promise: Promise<UploadResult> }`

`options` (`Object`) - An object containing named parameters

@abstr_code_section @abstr_code_section 

Each file should have the following structure:

@abstr_code_section 

If `options.begin` is provided, it will be invoked once upon upload has begun:

@abstr_code_section 

If `options.progress` is provided, it will be invoked continuously and passed a single object with the following properties:

@abstr_code_section 

Percentage can be computed easily by dividing `totalBytesSent` by `totalBytesExpectedToSend`.

### (iOS only) `stopUpload(jobId: number): Promise<void>`

Abort the current upload job with this ID.

### `getFSInfo(): Promise<FSInfoResult>`

Returns an object with the following properties:

@abstr_code_section 

### (Android only) `scanFile(path: string): Promise<string[]>`

Scan the file using @abstr_hyperlink .

### (Android only) `getAllExternalFilesDirs(): Promise<string[]>`

Returns an array with the absolute paths to application-specific directories on all shared/external storage devices where the application can place persistent files it owns.

### (iOS only) `pathForGroup(groupIdentifier: string): Promise<string>`

`groupIdentifier` (`string`) Any value from the _com.apple.security.application-groups_ entitlements list.

Returns the absolute path to the directory shared for all applications with the same security group identifier. This directory can be used to to share files between application of the same developer.

Invalid group identifier will cause a rejection.

For more information read the @abstr_hyperlink section.

## Background Downloads Tutorial (iOS)

Background downloads in iOS require a bit of a setup.

First, in your `AppDelegate.m` file add the following:

@abstr_code_section 

The `handleEventsForBackgroundURLSession` method is called when a background download is done and your app is not in the foreground.

We need to pass the `completionHandler` to RNFS along with its `identifier`.

The JavaScript will continue to work as usual when the download is done but now you must call `RNFS.completeHandlerIOS(jobId)` when you're done handling the download (show a notification etc.)

**BE AWARE!** iOS will give about @abstr_number sec. to run your code after `handleEventsForBackgroundURLSession` is called and until `completionHandler` is triggered so don't do anything that might take a long time (like unzipping), you will be able to do it after the user re-launces the app, otherwide iOS will terminate your app.

## Test / Demo app

Test app to demostrate the use of the module. Useful for testing and developing the module:

https://github.com/cjdell/react-native-fs-test
