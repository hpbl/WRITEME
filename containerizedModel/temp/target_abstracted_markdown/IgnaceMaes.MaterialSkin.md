# MaterialSkin for .NET WinForms

Theming .NET WinForms, C# or VB.Net, to Google's Material Design Principles.

@abstr_hyperlink 

_High quality images can be found at the bottom of this page._

* * *

#### Current state of the MaterialSkin components

Component | Supported | Dark & light version | Disabled mode | Animated \--- | --- | --- | --- | --- Checkbox | Yes | Yes | Yes | Yes Divider | Yes | Yes | N/A | N/A Flat Button | Yes | Yes | Yes | Yes Label | Yes | Yes | N/A | N/A Radio Button | Yes | Yes | Yes | Yes Raised Button | Yes | Yes | Yes | Yes Single-line text field | Yes | Yes | No | Yes TabControl | Yes | N/A | N/A | Yes ContextMenuStrip | Yes | Yes | Yes | Yes ListView | Yes | Yes | No | No ProgressBar | Yes | Yes | No | No FloatingActionButton | No | No | No | No Dialogs | No | No | No | No Switch | No | No | No | No More... | No | No | No | No

* * *

#### Implementing MaterialSkin in your application

_* @abstr_number . Add the library to your project_ *

You can do this on multiple ways. The easiest way would be adding the @abstr_hyperlink . Right click on your project and click 'Manage NuGet Packages...'. Search for 'MaterialSkin' and click on install. Once installed the library will be included in your project references. (Or install it through the package manager console: PM> Install-Package MaterialSkin)

Another way of doing this step would be cloning the project from GitHub, compiling the library yourself and adding it as a reference.

_* @abstr_number . Add the MaterialSkin components to your ToolBox_ *

If you have installed the NuGet package, the MaterialSkin.dll file should be in the folder //bin/Debug. Simply drag the MaterialSkin.dll file into your IDE's ToolBox and all the controls should be added there.

_* @abstr_number . Inherit from MaterialForm_ *

Open the code behind your Form you wish to skin. Make it inherit from MaterialForm rather than Form. Don't forget to put the library in your imports, so it can find the MaterialForm class!

C# (Form @abstr_number .cs) @abstr_code_section 

VB.NET (Form @abstr_number .Designer.vb) @abstr_code_section 

_* @abstr_number . Initialize your colorscheme_ *

Set your preferred colors & theme. Also add the form to the manager so it keeps updated if the color scheme or theme changes later on.

C# (Form @abstr_number .cs) @abstr_code_section 

VB.NET (Form @abstr_number .vb) @abstr_code_section 

* * *

#### Material Design in WPF

If you love .NET and Material Design, you should definitely check out @abstr_hyperlink by ButchersBoy. It's a similar project but for WPF instead of WinForms.

* * *

#### State of the project

This project is no longer under active development. Though, contributions are still welcome and the community will likely still help if you open an issue.

* * *

#### Contact

If you wish to contact me for anything you can get in touch at:

  * Twitter: https://twitter.com/Ignace_Maes
  * Personal Website: http://ignacemaes.com



* * *

#### Images

@abstr_image 

_A simple demo interface with MaterialSkin components._

@abstr_image 

_The MaterialSkin checkboxes._

@abstr_image 

_The MaterialSkin radiobuttons._

@abstr_image 

_The MaterialSkin ListView._

@abstr_image 

_MaterialSkin using a custom color scheme._
