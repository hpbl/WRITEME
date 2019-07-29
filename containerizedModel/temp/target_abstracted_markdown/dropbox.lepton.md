# Lepton

Lepton is a tool and file format for losslessly compressing JPEGs by an average of @abstr_number %.

This can be used to archive large photo collections, or to serve images live and save @abstr_number % bandwidth.

@abstr_hyperlink 

## Build directions

Using a single core
    
    
    ./autogen.sh
    ./configure
    make
    make check
    

For multiprocessor machines:
    
    
    ./autogen.sh
    ./configure
    make -j @abstr_number 
    make check -j @abstr_number
    

Using CMAKE:
    
    
    mkdir -p build
    cd build
    cmake ..
    make -j @abstr_number
    

On Windows
    
    
    mkdir -p build
    cd build
    "c:\Program Files\CMake\bin\cmake" ..
    start .
    REM Double click the Visual Studio project
    

## Usage

To roundtrip (compress and decompress) an image, `original.jpg`, do the following:
    
    
    ./lepton original.jpg compressed.lep
    ./lepton compressed.lep restored_original.jpg
    

Or all at once:
    
    
    ./lepton original.jpg compressed.lep && ./lepton compressed.lep restored_original.jpg && diff restored_original.jpg original.jpg && echo no differences
    

Lepton may also be used with pipes -- be sure to check the exit code when using pipes as if compression fails lepton will produce @abstr_number bytes and return a nonzero exit code (failure). In this case do not assume the @abstr_number byte file is representative of the original.
    
    
    ./lepton - < original.jpg > compressed.lep
    ./lepton - < compressed.lep > restored_original.jpg
    

You may specify higher memory limits than the default for lepton to handle bigger images:
    
    
    ./lepton -memory= @abstr_number M -threadmemory= @abstr_number M input_file output_file
    

Additionally you can configure lepton to process progressive jpegs. Warning: these take more memory to decode than normal JPEGs since the entire framebuffer must be kept in memory for the duration of the decompression, instead of just @abstr_number rows of blocks.
    
    
    ./lepton -allowprogressive -memory= @abstr_number M -threadmemory= @abstr_number M progressive.jpg compressedprogressive.lep
    

## Submitting pull requests to lepton

Please begin by filling out the contributor form and asserting that
    
    
    The code I'm contributing is mine, and I have the right to license it.
    I'm granting you a license to distribute said code under the terms of this agreement.
    

at this page: https://opensource.dropbox.com/cla/

Then create a new pull request through the github interface

## Debugging

Lepton is designed to be easy to debug, but a command line requirement is necessary to prevent the standard forks that let it do a secure verification in a separate process.

To avoid setting follow fork flags, please pass -skipverify to the command line. This will stop verification and let you debug the app as a single process application. If the bug happens in single threaded mode, also you can pass -singlethread which makes it easier to step through the code without other threads hitting breakpoints.

## Bindings for other languages

  * NodeJS: https://github.com/whitef @abstr_number x @abstr_number /node-lepton
  * PHP: https://github.com/gtuk/php-lepton



## Acknowledgements

Many thanks to Matthias Stirner and HTW Aalen University for the development of the @abstr_hyperlink library.

Thanks to the VPX authors for their highly tuned bool reader and bool writer implementations.

## Related Work

Be sure to read the groundbreaking research done by Matthias Stirner, Gehard Seelman and HTW Aalen University in their @abstr_hyperlink and check out their excellent @abstr_hyperlink repositories for compression of JPEG MP @abstr_number BMP and PMN formats.

Also the @abstr_hyperlink algorithms combine for a highly compressed JPEG result when decompression time is less critical.

When the compressed JPEG needs to also be a JPEG, there is @abstr_hyperlink to explore as well.

## License

Unless otherwise noted:

@abstr_code_section 
