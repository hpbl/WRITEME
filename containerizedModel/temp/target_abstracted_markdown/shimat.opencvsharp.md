# OpenCvSharp @abstr_hyperlink @abstr_hyperlink 

Cross platform wrapper of OpenCV for .NET Framework.

Old versions of OpenCvSharp are maintained in @abstr_hyperlink .

## Installation

### NuGet

| Package | Description | Link | |---------|-------------|------| | **OpenCvSharp @abstr_number _*| OpenCvSharp core libraries | @abstr_hyperlink | |_** OpenCvSharp @abstr_number .Windows **| All-in-one package for Windows - same as @abstr_hyperlink | @abstr_hyperlink | |** OpenCvSharp @abstr_number .runtime.win **| Native bindings for Windows x @abstr_number /x @abstr_number | @abstr_hyperlink | |** OpenCvSharp @abstr_number .runtime.ubuntu. @abstr_number . @abstr_number -x @abstr_number *| Native bindings for Ubuntu @abstr_number . @abstr_number x @abstr_number | @abstr_hyperlink | |(beta packages)| Development Build Package | https://ci.appveyor.com/nuget/opencvsharp |

Native binding (OpenCvSharpExtern.dll / libOpenCvSharpExtern.so) is required to work OpenCvSharp. To use OpenCvSharp, you should add both `OpenCvSharp @abstr_number` and `OpenCvSharp @abstr_number .runtime.*` packages to your project. Currently, native bindings for Windows and Ubuntu @abstr_number . @abstr_number are released.

Packages named OpenCvSharp @abstr_number -* and OpenCvSharp-* are deprecated. \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink \- @abstr_hyperlink 

### Windows

Add `OpenCvSharp @abstr_number` and `OpenCvSharp @abstr_number .runtime.win` NuGet packages to your project. You can use `OpenCvSharp @abstr_number .Windows` instead.

### Ubuntu @abstr_number . @abstr_number

Add `OpenCvSharp @abstr_number` and `OpenCvSharp @abstr_number .runtime.ubuntu. @abstr_number . @abstr_number .x @abstr_number` NuGet packages to your project @abstr_code_section 

### Downloads

If you do not use NuGet, get DLL files from the @abstr_hyperlink .

## Requirements

  * @abstr_hyperlink with @abstr_hyperlink 
  * (Windows) @abstr_hyperlink 
  * @abstr_hyperlink or later / @abstr_hyperlink / @abstr_hyperlink 



OpenCvSharp may not work on UWP and Unity platform. Please consider using @abstr_hyperlink 

## Documents

https://shimat.github.io/opencvsharp_docs/index.html

## Usage

For more details, see **@abstr_hyperlink** and **@abstr_hyperlink** pages.

```C# // Edge detection by Canny algorithm using OpenCvSharp;

class Program { static void Main() { Mat src = new Mat("lenna.png", ImreadModes.Grayscale); // Mat src = Cv @abstr_number .ImRead("lenna.png", ImreadModes.Grayscale); Mat dst = new Mat();
    
    
        Cv @abstr_number .Canny(src, dst,  @abstr_number ,  @abstr_number );
        using (new Window("src image", src)) 
        using (new Window("dst image", dst)) 
        {
            Cv @abstr_number .WaitKey();
        }
    }
    

} @abstr_code_section git submodule update --init --recursive @abstr_code_section git clone https://github.com/shimat/opencvsharp.git cd opencvsharp git fetch --all --tags --prune && git checkout ${OPENCVSHARP_VERSION} @abstr_code_section cd opencvsharp/src mkdir build cd build cmake -D CMAKE_INSTALL_PREFIX=${YOUR_OPENCV_INSTALL_PATH} .. make -j make install @abstr_code_section export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:/home/shimat/opencvsharp/src/build/OpenCvSharpExtern" @abstr_code_section dotnet new console -n ConsoleApp @abstr_number cd ConsoleApp @abstr_number dotnet add package OpenCvSharp @abstr_number 

# \-- edit Program.cs --- #

dotnet run ```

### Older Ubuntu

Refer to the @abstr_hyperlink and @abstr_hyperlink .

## License

Licensed under the @abstr_hyperlink .

## Donations

If you find the OpenCvSharp library useful and would like to show your gratitude by donating, here are some donation options. Thank you.

Type | Address \------ | ------- **BTC** (Bitcoin) | @abstr_number EWhyNe @abstr_number xzNNrbUgk @abstr_number nXAVEkaWdpGncotc **BCH** (Bitcoin Cash) | @abstr_number EWhyNe @abstr_number xzNNrbUgk @abstr_number nXAVEkaWdpGncotc **ETH** (Ethereum) | @abstr_number x @abstr_number a @abstr_number d @abstr_number ec @abstr_number d @abstr_number bc @abstr_number c @abstr_number ba @abstr_number ae @abstr_number ea @abstr_number **LTC** (Litecoin) | LLpmBjjVGZf @abstr_number MEohEZpkADMpnyqAS @abstr_number iQC
