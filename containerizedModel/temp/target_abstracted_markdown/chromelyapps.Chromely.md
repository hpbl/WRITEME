@abstr_image 

Chromely

Chromely is a lightweight alternative to @abstr_hyperlink , @abstr_hyperlink for .NET/.NET Core developers.

Chromely is a .NET/.NET Core HTML @abstr_number Chromium desktop framework. It is focused on building apps based on @abstr_hyperlink , @abstr_hyperlink implementations of embedded Chromium ( @abstr_hyperlink ) **without WinForms or WPF**. Chromely uses Windows and Linux native GUI API as "thin" chromium hosts. It can be extended to use WinForms or WPF. 

With Chromely you can build Single Page Application (SPA) HTML @abstr_number desktop apps with or without Node/npm. Building SPA apps using javascript frameworks like Angular, React, Vue or similar is easy. You can use Visual Studio Code or any IDE you are familiar with as long as Chromely knows the entry html file from the compiled/bundled files. For more info please see - @abstr_hyperlink .

Options of communicating (IPC) with rendering process are via:

@abstr_number . .NET/Javascript integration ( @abstr_hyperlink ) - more info @ @abstr_hyperlink . @abstr_number . Generic Message Routing ( @abstr_hyperlink ) - more info @ @abstr_hyperlink . @abstr_number . Ajax HTTP/XHR ( @abstr_hyperlink , @abstr_hyperlink ) - more info @ @abstr_hyperlink . @abstr_number . Real-time with Websocket (ws) ( @abstr_hyperlink ) - more info @ @abstr_hyperlink .

@abstr_hyperlink 

##### If you like Chromely, please give it a star - it helps!

Have a quick question? Wanna chat? Connect on @abstr_hyperlink 

Have an app/project/tool using Chromely - @abstr_hyperlink 

### Platforms

Cross-platform - Windows, Linux. Built on CefGlue, CefSharp, NET Standard @abstr_number . @abstr_number , .NET Core @abstr_number . @abstr_number , .NET Framework @abstr_number . @abstr_number and above.

| Platform | CefGlue.Winapi | CefGlue.Gtk | CefSharp.Winapi | | ---------------------------- | :--------------------: | :--------------------: | :------: | | Windows( @abstr_number ) @abstr_number -bit | net @abstr_number , netstandard @abstr_number . @abstr_number | net @abstr_number , netstandard @abstr_number . @abstr_number | net @abstr_number | | Windows( @abstr_number ) @abstr_number -bit | net @abstr_number , netstandard @abstr_number . @abstr_number | --- | --- | | Linux( @abstr_number ) @abstr_number -bit | --- | netstandard @abstr_number . @abstr_number | --- | | Linux( @abstr_number ) @abstr_number -bit | --- | netstandard @abstr_number . @abstr_number | --- | | MacOSX( @abstr_number ) @abstr_number -bit | --- | --- | --- | | Linux ARM( @abstr_number ) | --- | netstandard @abstr_number . @abstr_number | --- |

( @abstr_number ) Windows @abstr_number , Service Pack @abstr_number and newer   
( @abstr_number ) Ubuntu @abstr_number . @abstr_number and newer   
(Mono currently not working, window resizing not working)   
( @abstr_number ) Work in progress...   
( @abstr_number ) i.e. Raspberry Pi @abstr_number +   
(manual download of CEF builds for ARM available on http://chromely.org/cefbuilds/index.html) 

For more info/documentation, please check @abstr_hyperlink . 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink   
@abstr_hyperlink   
@abstr_hyperlink 

### Demo Code

Get started with the @abstr_hyperlink . 

### Creating a Simple App (Using CefGlue with Winapi host)

For more info see - @abstr_hyperlink 

**Notes on Upgrade to CefGlue version @abstr_number and CefSharp version @abstr_number (Chromely v @abstr_number )** \- Please @abstr_hyperlink .

`@abstr_code_section` \- @abstr_hyperlink \- @abstr_hyperlink 

#### Run Starter Template (Using dotnet core cli). For more info, please see - @abstr_hyperlink 

`@abstr_code_section`

### Chromely Demos

For more info on demos - @abstr_hyperlink @abstr_image 

### References

  * WinApi - https://github.com/prasannavl/WinApi
  * Cef - https://bitbucket.org/chromiumembedded/cef
  * Xilium.CefGlue - https://gitlab.com/xiliumhq/chromiumembedded/cefglue
  * CefSharp - https://github.com/cefsharp/CefSharp
  * Json Serializer - https://github.com/lbv/litjson
  * Caliburn.Light Container - https://github.com/tibel/Caliburn.Light/blob/master/src/Caliburn.Core/IoC/SimpleContainer.cs



## Contributing

Contributions are always welcome, via PRs, issues raised, or any other means. To become a dedicated contributor, please @abstr_hyperlink or @abstr_hyperlink mentioning your intent.

## License

Chromely is MIT licensed. For dependency licenses @abstr_hyperlink .

## Credits

Thanks to @abstr_hyperlink for the OSS license of Resharper Ultimate.

Improved and optimized using:

@abstr_hyperlink 
