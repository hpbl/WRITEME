## Akavache: An Asynchronous Key-Value Store for Native Applications

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink   
@abstr_hyperlink @abstr_hyperlink 

Akavache is an _asynchronous_ , _persistent_ (i.e. writes to disk) key-value store created for writing desktop and mobile applications in C#, based on SQLite @abstr_number . Akavache is great for both storing important data (i.e. user settings) as well as cached local data that expires.

@abstr_image 

### Where can I use it?

Akavache is currently compatible with:

  * Xamarin.iOS / Xamarin.Mac
  * Xamarin.Android
  * .NET @abstr_number . @abstr_number Desktop (WPF)
  * Windows Phone @abstr_number . @abstr_number Universal Apps
  * Windows @abstr_number (Universal Windows Platform)
  * Tizen @abstr_number . @abstr_number 



### What does that mean?

Downloading and storing remote data from the internet while still keeping the UI responsive is a task that nearly every modern application needs to do. However, many applications that don't take the consideration of caching into the design from the start often end up with inconsistent, duplicated code for caching different types of objects.

@abstr_hyperlink is a library that makes common app patterns easy, and unifies caching of different object types (i.e. HTTP responses vs. JSON objects vs. images).

It's built on a core key-value byte array store (conceptually similar to a `Dictionary<string, byte[]>`), and on top of that store, extensions are added to support:

  * Arbitrary objects via JSON.NET
  * Fetching and loading Images and URLs from the Internet
  * Storing and automatically encrypting User Credentials



## Platform-specific notes

  * **Xamarin.iOS / Xamarin.Mac** \- No issues.

  * **Xamarin.Android** \- No issues.

  * **.NET @abstr_number . @abstr_number Desktop (WPF)** \- No issues.

  * **Windows Phone @abstr_number . @abstr_number Universal Apps** \- You must mark your application as `x @abstr_number` or `ARM`, or else you will get a strange runtime error about SQLitePCL_Raw not loading correctly. You must _also_ ensure that the Microsoft Visual C++ runtime is added to your project.

  * **Windows @abstr_number (Universal Windows Platform)** \- You must mark your application as `x @abstr_number` or `ARM`, or else you will get a strange runtime error about SQLitePCL_Raw not loading correctly. You must _also_ ensure that the Microsoft Visual C++ runtime is added to your project.

  * _*Tizen @abstr_number . @abstr_number *_ \- No issues.




### Getting Started

Interacting with Akavache is primarily done through an object called `BlobCache`. At App startup, you must first set your app's name via `BlobCache.ApplicationName` or `Akavache.Registrations.Start("ApplicationName")` . After setting your app's name, you're ready to save some data.

#### Choose a location

There are four build-in locations, that have some magic applied on some systems:

  * `BlobCache.LocalMachine` \- Cached data. This data may get deleted without notification.
  * `BlobCache.UserAccount` \- User settings. Some systems backup this data to the cloud.
  * `BlobCache.Secure` \- For saving sensitive data - like credentials.
  * `BlobCache.InMemory` \- A database, kept in memory. The data is stored for the lifetime of the app. 



#### The magic

  * **Xamarin.iOS** may remove data, stored in `BlobCache.LocalMachine`, to free up disk space (only if your app is not running). The locations `BlobCache.UserAccount` and `BlobCache.Secure` will be backed up to iCloud and iTunes. (https://developer.apple.com/library/content/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html#//apple_ref/doc/uid/TP @abstr_number -CH @abstr_number -SW @abstr_number )
  * **Xamarin.Android** may also start deleting data, stored in `BlobCache.LocalMachine`, if the system runs out of disk space. It isn't clearly specified if your app could be running while the system is cleaning this up. (https://developer.android.com/reference/android/content/Context.html#getCacheDir% @abstr_number % @abstr_number )
  * **Windows @abstr_number (UWP)** will replicate `BlobCache.UserAccount` and `BlobCache.Secure` to the cloud and synchronize it to all user devices on which the app is installed (https://msdn.microsoft.com/en-us/library/windows/apps/hh @abstr_number .aspx)



#### Let's start off

The most straightforward way to use Akavache is via the object extensions:

@abstr_code_section 

### Handling Xamarin Linker

There are two options to ensure the Akavache.Sqlite @abstr_number dll will not be removed by Xamarin build tools

#### @abstr_number ) Add a file to reference the types

@abstr_code_section 

#### @abstr_number ) Use the following initializer in your cross platform library or in your head project

@abstr_code_section 

### Handling Errors

When a key is not present in the cache, GetObject throws a KeyNotFoundException (or more correctly, OnError's the IObservable). Often, you would want to return a default value instead of failing:

@abstr_code_section 

### Shutting Down

Critical to the integrity of your Akavache cache is the `BlobCache.Shutdown()` method. You _must_ call this when your application shuts down. Moreover, be sure to wait for the result:

@abstr_code_section 

Failure to do this may mean that queued items are not flushed to the cache.

### Using a different SQLitePCL.raw bundle, e.g., Microsoft.AppCenter

  * Install the `akavache.sqlite @abstr_number` nuget instead of `akavache`
  * Install the SQLitePCLRaw bundle you want to use, e.g., `SQLitePCLRaw.bundle_green`
  * Use `Akavache.Sqlite @abstr_number .Registrations.Start("ApplicationName", () => SQLitePCL.Batteries_V @abstr_number .Init());` in your platform projects or in your cross platform project.



```XAML  @abstr_code_section 

For more info about using your own versions of @abstr_hyperlink 

### Examining Akavache caches

Using @abstr_hyperlink , you can dig into Akavache repos for debugging purposes to see what has been stored.

@abstr_image 

### What's this Global Variable nonsense? Why can't I use $FAVORITE_IOC_LIBRARY

You totally can. Just instantiate `SQLitePersistentBlobCache` or `SQLiteEncryptedBlobCache` instead - the static variables are there just to make it easier to get started.

### DateTime/DateTimeOffset Considerations

By default JSON.NET's BSON implementation writes `DateTime` as UTC and reads it back in local time. To override the reader's behavior you can set `BlobCache.ForcedDateTimeKind` as in the following example:

@abstr_code_section 

## Basic Method Documentation

Every blob cache supports the basic raw operations given below (some of them are not implemented directly, but are added on via extension methods):

@abstr_code_section 

## Extension Method Documentation

On top of every `IBlobCache` object, there are extension methods that help with common application scenarios:

@abstr_code_section 
