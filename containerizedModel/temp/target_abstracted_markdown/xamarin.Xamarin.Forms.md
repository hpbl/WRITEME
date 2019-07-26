@abstr_image 

# Xamarin.Forms

Xamarin.Forms provides a way to quickly build native apps for iOS, Android, Windows and macOS, completely in C#.

Read more about the platform at https://www.xamarin.com/forms.

## Build Status

@abstr_image 

## Packages

Platform/Feature | Package name | Stable | Prerelease | Nightly Feed @abstr_hyperlink (master branch) \-----------------------|-------------------------------------------|-----------------------------|------------------------- |-------------------------| Core | `Xamarin.Forms` | @abstr_hyperlink | @abstr_hyperlink | AppLinks | `Xamarin.Forms.AppLinks` | @abstr_hyperlink | @abstr_hyperlink | Maps | `Xamarin.Forms.Maps` | @abstr_hyperlink | @abstr_hyperlink | Maps.GTK | `Xamarin.Forms.Maps.GTK` | @abstr_hyperlink | @abstr_hyperlink | Maps.WPF | `Xamarin.Forms.Maps.WPF` | @abstr_hyperlink | @abstr_hyperlink | Pages | `Xamarin.Forms.Pages` | @abstr_hyperlink | @abstr_hyperlink | Pages.Azure | `Xamarin.Forms.Pages.Azure` | @abstr_hyperlink | @abstr_hyperlink | Platform.GTK | `Xamarin.Forms.Platform.GTK` | @abstr_hyperlink | @abstr_hyperlink | Platform.WPF | `Xamarin.Forms.Platform.WPF` | @abstr_hyperlink | @abstr_hyperlink | Visual.Material | `Xamarin.Forms.Visual.Material` | @abstr_hyperlink | @abstr_hyperlink |

If you want to use the latest dev build then you should read @abstr_hyperlink :

  * Add the nightly feed to your NuGet sources or add a NuGet.Config to your app (placing it in the same directory where your solution file is) with the following content:

@abstr_code_section 

_NOTE: This NuGet.Config should be with your application unless you want nightly packages to potentially start being restored for other apps on the machine._

  * Change your application's dependencies to have a `*` to get the latest version.




## Getting Started

### Windows

##### Install Visual Studio @abstr_number +

VS @abstr_number + is required for developing Xamarin.Forms. If you do not already have it installed, you can download it @abstr_hyperlink . VS @abstr_number + Community is completely free. If you are installing VS @abstr_number + for the first time, select the "Custom" installation type and select the following from the features list to install:

  * .NET desktop development - In the `Summary > Optional select .NET Framework @abstr_number . @abstr_number SDK, .NET Framework @abstr_number . @abstr_number targeting pack`. 
  * Universal Windows Platform Development - In the `Summary > Optional select the Windows @abstr_number Mobile Emulator`.
  * Mobile Development with .NET - In the `Summary > Optional select Xamarin Remoted Simulator, Xamarin SDK Manager, Intel Hardware Accelerated Execution Manager (HAXM)`



The Android @abstr_number . @abstr_number Nougat API @abstr_number SDK is required for developing Xamarin.Forms. It can be installed by using the @abstr_hyperlink .

We also recommend installing @abstr_hyperlink This will use the HAXM tools installed above and allow you to configure Android Virtual Devices (AVDs) that emulate Android devices. If you already have VS @abstr_number + installed, you can verify that these features are installed by modifying the VS @abstr_number + installation via the Visual Studio Installer.

### Mac

#### Install Visual Studio for Mac @abstr_number

If you do not already have it installed, instructions to download and setup can be found @abstr_hyperlink .

Because of current Multi-Targeting limitations with Visual Studio for Mac you will need to manually build/restore some projects before you are able to work on the Xamarin Forms solution.

Here are a few different options we've put together to help make this process easier \- Branches @abstr_number . @abstr_number + come with a Cake script target that you can use to build and open VSMac @abstr_code_section \- When working on an earlier branch that does not have the cake scripts then you can use the following [build.sh] script(https://gist.github.com/PureWeen/ @abstr_number c @abstr_number e @abstr_number aff @abstr_number c @abstr_number c @abstr_number decf @abstr_number bcb @abstr_number d @abstr_number e @abstr_number )

  * If you don't want to run any scripts then 
    * Open Xamarin.Forms.sln
    * Wait for VSMAC to finish restoring all projects
    * from the command line run:
    * `msbuild Xamarin.Forms.Build.Tasks/Xamarin.Forms.Build.Tasks.csproj`
    * Now you should be able to run and deploy everything. The only reason you would need to do this process again is if you clean the solution folder or delete the bin/obj folders that are part of the `Xamarin.Forms.Build.Tasks.csproj`



If you are on Visual Studio for Mac @abstr_number you will need to turn off automatic package restore (Visual Studio => Preferences => Nuget => General => uncheck the Package Restore box) before working on the Xamarin.Forms solution. This step is no longer needed with Visual Studio for Mac @abstr_number 

##### Solution Configuration

Upon opening the Xamarin.Forms solution, you will find that there are a number of errors and warnings under the Error List pane; you can resolve this by changing the filter of `Build + IntelliSense` to `Build Only`. At this point, you should be able to successfully build the solution.

By default, the `Xamarin.Forms.Controls` project does not have a configuration for various API keys to access certain features on each platform (e.g. maps). When building the solution the first time, a `controlgallery.config` file will be generated inside that project, which looks like this:
    
    
    UWPMapsAuthKey:
    

You will have to obtain your own API keys for each of these services, inserted directly after the identifier (e.g. `UWPMapsAuthKey:abcdefghijklmnopqrstuvwxyz`). You can find out how to obtain each of these as follows:

  * `UWPMapsAuthKey` at https://microsoft.com/maps/create-a-bing-maps-key.aspx



Due to the way that Android works, the maps API key cannot be injected at runtime. As a result, you will have to add this key to the `MapsKey.cs` file under `Xamarin.Forms.ControlGallery.Android/Properties`:
    
    
    [assembly: Android.App.MetaData("com.google.android.maps.v @abstr_number .API_KEY", Value = "INSERT_KEY_HERE")]
    

You can find out how to obtain a Google Maps API key @abstr_hyperlink .

##### Build from the Command line

Make sure you have nuget.exe @abstr_number . @abstr_number or above and the latest dotnet core sdk ( @abstr_number . @abstr_number . @abstr_number ). On macOS you should specify the platform in the msbuild command (`/p:Platform=iPhoneSimulator`)
    
    
    msbuild /restore Xamarin.Forms.sln
    

### UI Tests

##### Run UWP UI Tests

To run the UWP UI Tests:

@abstr_number . Install and run the @abstr_hyperlink . @abstr_number . Launch the `Xamarin.Forms.ControlGallery.WindowsUniversal` project to install the ControlGallery application onto your system.

You should now be able to run any of the UWP UI Tests.

## Coding Style

We follow the style used by the @abstr_hyperlink , with a few exceptions:

  * We do not use the `private` keyword as it is the default accessibility level in C#.
  * We use hard tabs over spaces. You can change this setting in VS @abstr_number via `Tools > Options` and navigating to `Text Editor > C#` and selecting the "Keep tabs" radio option. In Visual Studio for Mac it's set via preferences in `Source Code > Code Formatting > C# source code` and disabling the checkbox for `Convert tabs to spaces`.
  * Lines should be limited to a max of @abstr_number characters (or as close as possible within reason). This may be set in Visual Studio for Mac via preferences in `Source Code > Code Formatting > C# source code` and changing the `Desired file width` to `@abstr_number`.



## Contributing

  * @abstr_hyperlink 



### Reporting Bugs

We use @abstr_hyperlink to track issues. If at all possible, please submit a @abstr_hyperlink along with your bug report.
