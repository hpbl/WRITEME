OxyPlot is a cross-platform plotting library for .NET

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (chat)



@abstr_image @abstr_hyperlink 

@abstr_image 

#### Getting started

@abstr_number . Use the NuGet package manager to add a reference to OxyPlot (see details below if you want to use pre-release packages) @abstr_number . Add a `PlotView` to your user interface @abstr_number . Create a `PlotModel` in your code @abstr_number . Bind the `PlotModel` to the `Model` property of your `PlotView`

#### Examples

You can find examples in the `/Source/Examples` folder in the code repository.

#### NuGet packages

The latest pre-release packages are pushed by AppVeyor CI to @abstr_hyperlink . To install these packages, set the myget.org package source `https://www.myget.org/F/oxyplot` and remember the "-pre" flag.

The stable release packages will be pushed to @abstr_hyperlink . Note that we have have a lot of old (v @abstr_number .*) and pre-release packages on this feed, and sometimes these show up even if they are unlisted.

| Package | Targets | Dependencies | |-------------------------|------------------------------------|--------------| | OxyPlot.Core | .NET Standard @abstr_number . @abstr_number | | | OxyPlot.Core.Drawing | .NET Standard @abstr_number . @abstr_number | | | OxyPlot.Wpf | .NET @abstr_number . @abstr_number . @abstr_number | | | OxyPlot.WindowsForms | .NET @abstr_number . @abstr_number . @abstr_number | | | OxyPlot.Windows | Universal Windows @abstr_number . @abstr_number | | | OxyPlot.GtkSharp | .NET @abstr_number . @abstr_number . @abstr_number | GTK# @abstr_number | | OxyPlot.GtkSharp @abstr_number | .NET @abstr_number . @abstr_number . @abstr_number | GTK# @abstr_number | | OxyPlot.Xamarin.Android | MonoAndroid | | | OxyPlot.Xamarin.iOS | MonoTouch and iOS @abstr_number | | | OxyPlot.Xamarin.Mac | Mac @abstr_number | | | OxyPlot.Xamarin.Forms | MonoTouch, iOS @abstr_number , MonoAndroid, WP @abstr_number | | | OxyPlot.Xwt | .NET @abstr_number . @abstr_number . @abstr_number | | | OxyPlot.SharpDX.Wpf | .NET @abstr_number . @abstr_number . @abstr_number | | | OxyPlot.Avalonia | .NET @abstr_number . @abstr_number . @abstr_number | | | OxyPlot.OpenXML | .NET @abstr_number . @abstr_number . @abstr_number | | | OxyPlot.Pdf | .NET @abstr_number . @abstr_number . @abstr_number | PdfSharp | | OxyPlot.Contrib | .NET Standard @abstr_number . @abstr_number | | | OxyPlot.ExampleLibrary | .NET Standard @abstr_number . @abstr_number | |

#### Contribute

See Contributing for information about how to contribute!
