# QR-Code

@abstr_hyperlink 

  * **update ( @abstr_number )** : added an **exe** version - @abstr_hyperlink 

  * **update ( @abstr_number )** : added a **web** version - @abstr_hyperlink _(made by @abstr_hyperlink )_

  * **update ( @abstr_number )** : distributed to **PyPI** \- @abstr_hyperlink ! 

    * @abstr_number : updated to be importable

​




## Overview

**Python QR Code Generator**

Generate _common qr-code_ , _artistic qr-code (black & white or colorized)_, _animated qr-code (black & white or colorized)_.

​ 

## Contents

  * Overview
  * Contents
  * Examples
  * Install
  * Usage 
    * Terminal Way
    * Import Way
  * Tips
  * Supported Characters
  * Dependencies
  * Environment
  * License



​

## Examples

@abstr_image 

@abstr_image 

@abstr_image 

@abstr_image @abstr_image 

@abstr_image @abstr_image 

## Install

@abstr_code_section 

​ 

## Usage

### Terminal Way

_( **TIPS** : If you haven't install @abstr_hyperlink , you should `python( @abstr_number ) myqr.py` instead of `myqr` blow.)_

@abstr_code_section 

  * see Common QR-Code for `Words`, `-v`, `-l`, `-n`, `-d`
  * see Artistic QR-Code for `-p`, `-c`, `-con`, `-bri`
  * see Animated GIF QR-Code about GIF



​ 

#### Common QR-Code

@abstr_image 

@abstr_code_section 

  * Just input a URL or a sentence, then get your QR-Code named 'qrcode.png' in the current directory.

​

@abstr_code_section 

  * The **default** size of QR-Code depends both on the numbers of words you input and the level, while the **default** level (Error Correction Level) is **H** (the highest).

  * **Customize** : If you want to control the size and the error-correction-level, use the `-v` and `-l` arguments. 

`-v` representing the length is from a minimum of _* @abstr_number *_ to a maximum of _* @abstr_number *_. 

`-l` representing the error correction level is one of **L, M, Q and H** , where L is the lowest level and H is the highest.

@abstr_code_section 

  * The **default** output-filename is 'qrcode.png', while the **default** output-directory is current directory.

  * **Customize** : You can name the output-file and decide the output-directory. **Notice** that if the name is as same as a existing file, the old one will be deleted.

`-n` representing the output-filename could be in the format one of `.jpg`， `.png` ，`.bmp` ，`.gif` .

`-d` means directory.




#### Artistic QR-Code

@abstr_image @abstr_image 

@abstr_code_section 

  * The `-p` is to combine the QR-Code with the following picture which is in the same directory as the program. The resulting picture is **black and white** by default.

@abstr_code_section 

  * The `-c` is to make the resulting picture **colorized**.

​

@abstr_code_section 

  * The `-con` flag changes the **contrast** of the picture - a low number corresponds to low contrast and a high number to high contrast. _*Default: @abstr_number . @abstr_number *_.

  * The `-bri` flag changes the **brightness** and the parameter values work the same as those for `-con`. _*Default: @abstr_number . @abstr_number *_.




#### Animated GIF QR-Code

@abstr_image @abstr_image 

The only difference from Artistic QR-Code mentioned above is that you should input an image file in the `.gif` format. The you can get your black-and-white or colorful qr-code. Remember that when you use `-n` to customize the output-filename, then the output-filename must end by `.gif`.

### Import Way

@abstr_code_section 

_details about each parameter are as mentioned above_

@abstr_code_section 

## Tips

  * Use a nearly **square** picture instead of a rectangle one.

  * If the size of the picture is large, you should also choose a **rightly** large `-v` instead of using the default one.

  * If part of the picture is transparent, the qr code will look like: @abstr_image 

You can change the transparent layer to white, and then it will look like: @abstr_image 




## Supported Characters

  * Numbers: `@abstr_number ~ @abstr_number`

  * Letters: `a~z, A~Z`

  * Common punctuations:

@abstr_code_section 




## Dependencies

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



_( **TIPS** : Without a installed @abstr_hyperlink , you should use `pip install -r requirements.txt` to ensure you have all dependencies.)_

## Environment

  * Linux, Python @abstr_number 
  * Windows, Python @abstr_number 
  * Mac, Python @abstr_number 



​ 

## License

  * GPLv @abstr_number 


