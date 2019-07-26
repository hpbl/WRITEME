@abstr_image 

@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink is an open source C#-to-JavaScript Compiler. Write your application in C# and run on billions of devices.

### Write in C#. Run in a Web Browser.

C#| | JavaScript  
---|---|---  
      
    
    public class Program
    {
        public static void Main()
        {
            var msg = "Hello, World!";
    
                Console.WriteLine(msg);
            }
    }
    

|  @abstr_number ; | 
    
    
    Bridge.define("Demo.Program", {
        main: function Main () {
            var msg = "Hello, World!";
    
                System.Console.WriteLine(msg);
            }
    });
      
  
Run the sample above at @abstr_hyperlink .

## TL;DR

  * Read the @abstr_hyperlink Knowledge Base article
  * Try @abstr_hyperlink if you want to play
  * Installation: 
    * Add **Bridge.NET** Visual Studio extension, or 
    * Use @abstr_hyperlink to install into a C# Class Library project (`Install-Package Bridge`), or
    * @abstr_hyperlink the Visual Studio Code starter project
  * The @abstr_hyperlink documentation is important
  * The @abstr_hyperlink documentation is important
  * Check out @abstr_hyperlink for @abstr_number + supported libraries ( @abstr_hyperlink )
  * Licensed under @abstr_hyperlink 
  * Need Help? Bridge.NET @abstr_hyperlink or GitHub @abstr_hyperlink 
  * @abstr_hyperlink on Twitter
  * @abstr_hyperlink for messaging



## Getting Started

A great place to start if you're new to Bridge is reviewing the @abstr_hyperlink wiki.

The easiest place to see Bridge in action is @abstr_hyperlink . 

@abstr_hyperlink 

## Sample

The following code sample demonstrates a simple **App.cs** class that will run automatically on page load and write a message to the Bridge Console.

**Example ( @abstr_hyperlink )**

@abstr_code_section 

The C# class above will be compiled into JavaScript and added to **/Bridge/ouput/demo.js** within your project. By default, Bridge will use the Namespace name as the file name. In this case: **demo.js**. There are many options to control the output of your JavaScript files, and the @abstr_hyperlink is important @abstr_hyperlink to review.

@abstr_code_section 

## Installation

A full list of installation options available at @abstr_hyperlink , including full support for Visual Studio and Visual Studio Community on Windows, and Visual Studio Mac.

### Bridge for Visual Studio

If you're using Visual Studio for Windows, the easiest way to get started is by adding the Bridge.NET for Visual Studio @abstr_hyperlink .

From within Visual Studio, go to the `Tools > Extensions and Updates...`.

@abstr_image 

From the options on the left side, be sure to select **Online** , then search for **Bridge**. Clicking **Download** will install Bridge for Visual Studio. After installation is complete, Visual Studio may require a restart. 

@abstr_image 

Once installation is complete you will have a new **Bridge.NET** project type. When creating new Bridge enabled projects, select this project type. 

### NuGet

Another option is installation of Bridge into a new **C# Class Library** project using @abstr_hyperlink . Within the NuGet Package Manager, search for **Bridge** and click to install. 

Bridge can also be installed using the NuGet Command Line tool by running the following command:

@abstr_code_section 

More information regarding Nuget package installation for Bridge is available in the @abstr_hyperlink .

## Contributing

Interested in contributing to Bridge? Please see @abstr_hyperlink .

We also flag some Issues as @abstr_hyperlink . These are generally easy introductions to the inner workings of Bridge, and are items we just haven't had time to implement. Your help is always appreciated.

## Badges

Show your support by adding a **built with Bridge.NET** badge to your projects README or website.

@abstr_hyperlink 

#### Markdown

@abstr_code_section 

#### HTML

@abstr_code_section 

## How to Help

We need your help spreading the word about Bridge. Any of the following items will help:

@abstr_number . Star the @abstr_hyperlink project on GitHub @abstr_number . Add a Badge @abstr_number . Leave a review at @abstr_hyperlink @abstr_number . Blog about Bridge.NET @abstr_number . Tweet about @abstr_hyperlink @abstr_number . Start a discussion on @abstr_hyperlink or @abstr_hyperlink @abstr_number . Answer Bridge related questions on @abstr_hyperlink @abstr_number . Give a local usergroup presentation on Bridge @abstr_number . Give a conference talk on Bridge @abstr_number . Provide feedback ( @abstr_hyperlink , @abstr_hyperlink or @abstr_hyperlink )

## Testing

Bridge is continually tested with the full test runner available at http://testing.bridge.net/. 

## Credits

Bridge is developed by the team at @abstr_hyperlink . Frameworks and Tools for .NET Developers.

## License

_*Apache License, Version @abstr_number . @abstr_number *_

Please see @abstr_hyperlink for details.
