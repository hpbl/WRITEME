SASM (SimpleASM) - простая кроссплатформенная среда разработки для языков ассемблера NASM, MASM, GAS, FASM с подсветкой синтаксиса и отладчиком. В SASM Вы можете легко разрабатывать и выполнять программы, написанные на языках ассемблера NASM, MASM, GAS, FASM. Вводите код в форму и запускайте приложение. Программа работает "из коробки" и хорошо подойдет для начинающих изучать язык ассемблера. Основана на Qt. Распространяется по свободной лицензии GNU GPL v @abstr_number . @abstr_number .

SASM (SimpleASM) - simple Open Source crossplatform IDE for NASM, MASM, GAS, FASM assembly languages. SASM has syntax highlighting and debugger. The program works out of the box and is great for beginners to learn assembly language. SASM is translated into Russian, English, Turkish (thanks Ali Goren), Chinese (thanks Ahmed Zetao Yang), German (thanks Sebastian Fischer), Italian (thanks Carlo Dapor), Polish (thanks Krzysztof Rossa), Hebrew (thanks Elian Kamal), Spanish (thanks Mariano Cordoba). Licensed under the GNU GPL v @abstr_number . @abstr_number . Based on the Qt.

===========================================================================

# How to build SASM from sources:

You need: Qt @abstr_number . @abstr_number and above C++ compiler
    
    
    On linux also: 
    gcc (x @abstr_number ) or gcc-multilib (x @abstr_number )
    gdb
    nasm
    qt @abstr_number -qmake
    libqt @abstr_number -dev
    libqt @abstr_number -core   
    libqt @abstr_number -gui
    libxcb @abstr_number 
    libxcb-render @abstr_number 
    libxcb-icccm @abstr_number
    

Download sources and unpack their. Go to directory with their: "cd " Further print commands: @abstr_number ) "qmake" (For installing in specific directory on Linux - print: "qmake PREFIX=". By default SASM installs in "/usr/bin" and "usr/share") @abstr_number ) "make" for Linux and "mingw @abstr_number -make" for Windows. @abstr_number ) For Linux: "make install" (command "sasm" will open SASM) or run "sasm" from folder right away or put "sasm" executable file to folder "Linux" (from this folder you can run the program).

#  For Windows: Put "sasm.exe" executable file to folder "Windows". From this folder you can run the program. Also you can run program right away from compilation folder.

Also you can download already compiled packages from site http://dman @abstr_number .github.io/SASM/ or from OBS repository http://download.opensuse.org/repositories/home:/Dman @abstr_number /

More help info in file help.html Also SASM supports doxygen: run "doxygen configfile" to generate documentation. In this documentation you can also find a small developer guide which includes information about adding new assemblers and languages support.

Copyright © @abstr_number Dmitriy Manushin
