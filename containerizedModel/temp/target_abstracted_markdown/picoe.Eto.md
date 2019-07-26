# Eto.Forms

### A cross platform desktop and mobile user interface framework

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Description

This framework can be used to build applications that run across multiple platforms using their native toolkit, with an easy to use API. This will make your applications look and work as a native application on all platforms, using a single UI codebase.

For advanced scenarios, you can take advantage of each platform's capabilities by wrapping your common UI in a larger application, or even create your own high-level controls with a custom implementations per platform.

This framework currently supports creating Desktop applications that work across Windows Forms, WPF, MonoMac, and GTK#. There is a Mobile/iOS port in the works, but is considered incomplete.

This framework was built so that using it in .NET is natural. For example, a simple hello-world application might look like:

```C# using Eto.Forms; using Eto.Drawing;

public class MyForm : Form { public MyForm () { Title = "My Cross-Platform App"; ClientSize = new Size( @abstr_number , @abstr_number ); Content = new Label { Text = "Hello World!" }; }
    
    
    [STAThread]
    static void Main()
    {
        new Application().Run(new MyForm());
    }
    

} @abstr_code_section fsharp

# load ".paket/load/eto.platform.windows.fsx"

// see https://fsprojects.github.io/Paket/paket-generate-load-scripts.html

open Eto.Drawing open Eto.Forms

type MyForm() as this = inherit Form() do this.Title <\- "My Cross-Platform App" this.ClientSize <\- Size ( @abstr_number , @abstr_number ) this.Content <\- new Label(Text = "Hello F# World!")

Eto.Platform.Initialize(Eto.Platforms.WinForms) let app = new Application() let form = new MyForm() form.Show() ```

## Getting Started

To begin creating apps using Eto.Forms, follow the @abstr_hyperlink .

To compile or contribute to Eto.Forms, read the @abstr_hyperlink .

## Applications

  * @abstr_hyperlink - Content manager for MonoGame
  * @abstr_hyperlink - Accounting Software
  * @abstr_hyperlink - Character based drawing application
  * @abstr_hyperlink - JabbR client
  * @abstr_hyperlink - Note taking application
  * @abstr_hyperlink - Application to test the functionality of each widget
  * @abstr_hyperlink - Chemical Process Simulator
  * @abstr_hyperlink - Cross-platform Serial/TCP Terminal with Scriptable Auto-Response
  * @abstr_hyperlink - Technical SEO Auditing Tool



## Assemblies

Your project only needs to reference Eto.dll, and include the corresponding platform assembly that you wish to target. To run on a Mac platform, you need to @abstr_hyperlink .

  * Eto.dll - Eto.Forms (UI), Eto.Drawing (Graphics), and platform loading
  * Eto.Mac.dll - MonoMac platform for OS X using @abstr_number -bit mono
  * Eto.Mac @abstr_number .dll - MonoMac platform for OS X using @abstr_number -bit mono
  * Eto.XamMac.dll - Xamarin.Mac Classic platform for OS X to embed mono
  * Eto.XamMac @abstr_number .dll - Xamarin.Mac Unified platform for OS X to embed mono
  * Eto.WinForms.dll - Windows Forms platform using GDI+ for graphics
  * Eto.Direct @abstr_number D.dll - Windows Forms platform using Direct @abstr_number D for graphics
  * Eto.Wpf.dll - Windows Presentation Foundation platform
  * Eto.Gtk.dll - Gtk+ @abstr_number platform for Mac, Windows, and Linux.
  * Eto.Gtk @abstr_number .dll - Gtk @abstr_number platform using gtk-sharp @abstr_number on Mac, Windows, and Linux.
  * Eto.Gtk @abstr_number .dll - [deprecated] Gtk @abstr_number platform for running on Linux with gtk-sharp @abstr_number package
  * Eto.iOS.dll - Xamarin.iOS platform
  * Eto.Android.dll - Xamarin.Android platform



## Currently supported targets

  * iOS using Xamarin.iOS
  * OS X: MonoMac or Xamarin.Mac
  * Linux: GTK# @abstr_number or @abstr_number 
  * Windows: Windows Forms (using GDI or Direct @abstr_number D) or WPF



## Under development

These platforms are currently in development. Any eager bodies willing to help feel free to do so!

  * Android using Xamarin.Android (Eto.Android)
  * Windows @abstr_number .x and Windows Phone (Eto.WinRT)


