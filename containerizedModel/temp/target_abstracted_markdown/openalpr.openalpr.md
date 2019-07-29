# openalpr

OpenALPR is an open source _Automatic License Plate Recognition_ library written in C++ with bindings in C#, Java, Node.js, Go, and Python. The library analyzes images and video streams to identify license plates. The output is the text representation of any license plate characters.

Check out a live online demo here: http://www.openalpr.com/demo-image.html

## User Guide

OpenALPR includes a command line utility. Simply typing "alpr [image file path]" is enough to get started recognizing license plate images.

For example, the following output is created by analyzing this image: @abstr_image 

@abstr_code_section 

Detailed command line usage:

@abstr_code_section 

## Binaries

Pre-compiled Windows binaries can be downloaded on the @abstr_hyperlink 

Install OpenALPR on Ubuntu @abstr_number . @abstr_number with the following commands:
    
    
    sudo apt-get update && sudo apt-get install -y openalpr openalpr-daemon openalpr-utils libopenalpr-dev
    

## Documentation

Detailed documentation is available at @abstr_hyperlink 

## Integrating the Library

OpenALPR is written in C++ and has bindings in C#, Python, Node.js, Go, and Java. Please see this guide for examples showing how to run OpenALPR in your application: http://doc.openalpr.com/bindings.html

## Compiling

@abstr_hyperlink 

OpenALPR compiles and runs on Linux, Mac OSX and Windows.

OpenALPR requires the following additional libraries:
    
    
    - Tesseract OCR v @abstr_number . @abstr_number . @abstr_number  (https://github.com/tesseract-ocr/tesseract)
    - OpenCV v @abstr_number . @abstr_number . @abstr_number + (http://opencv.org/)
    

After cloning this GitHub repository, you should download and extract Tesseract and OpenCV source code into their own directories. Compile both libraries.

Please follow these detailed compilation guides for your respective operating system:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



If all went well, there should be an executable named _alpr_ along with _libopenalpr-static.a_ and _libopenalpr.so_ that can be linked into your project.

## Docker

@abstr_code_section 

## Questions

Please post questions or comments to the Google group list: https://groups.google.com/forum/#!forum/openalpr

## Contributions

Improvements to the OpenALPR library are always welcome. Please review the @abstr_hyperlink and get started.

Code contributions are not the only way to help out. Do you have a large library of license plate images? If so, please upload your data to the anonymous FTP located at upload.openalpr.com. Do you have time to "tag" plate images in an input image or help in other ways? Please let everyone know by posting a note in the forum.

## License

Affero GPLv @abstr_number http://www.gnu.org/licenses/agpl- @abstr_number . @abstr_number .html

Commercial-friendly licensing available. Contact: info@openalpr.com
